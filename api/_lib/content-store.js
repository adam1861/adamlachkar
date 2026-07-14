const fs = require("fs/promises");
const path = require("path");

const CONTENT_PATH = "data/content.json";
const ROOT = path.join(__dirname, "..", "..");

function encodeGithubPath(filePath) {
  return filePath.split("/").map(encodeURIComponent).join("/");
}

function getRepoConfig() {
  return {
    token: process.env.GITHUB_TOKEN,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH || "main"
  };
}

function validateContent(content) {
  const requiredLists = ["proofPoints", "projects", "aboutCards", "certificates", "sites", "stack"];

  if (!content || typeof content !== "object" || Array.isArray(content)) {
    throw new Error("Content must be an object.");
  }

  requiredLists.forEach((key) => {
    if (!Array.isArray(content[key])) {
      throw new Error(`${key} must be an array.`);
    }
  });

  content.projects.forEach((project, index) => {
    ["title", "type", "year", "role", "summary"].forEach((key) => {
      if (!String(project[key] || "").trim()) {
        throw new Error(`Project ${index + 1} is missing ${key}.`);
      }
    });
  });

  content.stack.forEach((item, index) => {
    ["name", "group", "type"].forEach((key) => {
      if (!String(item[key] || "").trim()) {
        throw new Error(`Stack item ${index + 1} is missing ${key}.`);
      }
    });
  });
}

async function githubRequest(endpoint, options = {}) {
  const { token } = getRepoConfig();
  const response = await fetch(`https://api.github.com${endpoint}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "adam-portfolio-admin",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || `GitHub request failed with ${response.status}.`);
  }

  return data;
}

async function getGithubFileSha(filePath) {
  const { repo, branch } = getRepoConfig();
  const data = await githubRequest(`/repos/${repo}/contents/${encodeGithubPath(filePath)}?ref=${branch}`);
  return data.sha;
}

async function saveToGithub(filePath, content, message) {
  const { repo, branch } = getRepoConfig();
  const sha = await getGithubFileSha(filePath);

  return githubRequest(`/repos/${repo}/contents/${encodeGithubPath(filePath)}`, {
    method: "PUT",
    body: JSON.stringify({
      branch,
      message,
      content: Buffer.from(content, "utf8").toString("base64"),
      sha
    })
  });
}

async function readContent() {
  const content = await fs.readFile(path.join(ROOT, CONTENT_PATH), "utf8");
  return JSON.parse(content);
}

async function saveContent(content) {
  validateContent(content);
  const serialized = `${JSON.stringify(content, null, 2)}\n`;
  const { token, repo } = getRepoConfig();

  if (token && repo) {
    await saveToGithub(CONTENT_PATH, serialized, "Update portfolio content from admin");
    return { mode: "github" };
  }

  await fs.writeFile(path.join(ROOT, CONTENT_PATH), serialized, "utf8");
  return { mode: "local" };
}

async function saveAsset({ fileName, folder, data }) {
  const cleanFolder = String(folder || "assets/uploads")
    .replace(/\\/g, "/")
    .replace(/[^a-zA-Z0-9/_-]/g, "")
    .replace(/^\/+/, "");
  const cleanName = String(fileName || "upload")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-");
  const filePath = `${cleanFolder}/${Date.now()}-${cleanName}`;
  const buffer = Buffer.from(data, "base64");

  if (buffer.length > 4_500_000) {
    throw new Error("File is too large. Keep uploads under 4.5MB.");
  }

  const { token, repo, branch } = getRepoConfig();

  if (token && repo) {
    await githubRequest(`/repos/${repo}/contents/${encodeGithubPath(filePath)}`, {
      method: "PUT",
      body: JSON.stringify({
        branch,
        message: `Upload ${cleanName} from admin`,
        content: buffer.toString("base64")
      })
    });
    return { path: filePath, mode: "github" };
  }

  const absolutePath = path.join(ROOT, filePath);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, buffer);
  return { path: filePath, mode: "local" };
}

module.exports = {
  readContent,
  saveAsset,
  saveContent,
  validateContent
};
