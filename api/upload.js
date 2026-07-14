const { rejectBadOrigin, requireAuth } = require("./_lib/auth");
const { saveAsset } = require("./_lib/content-store");

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/avif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
]);

function readBody(req) {
  if (req.body) {
    return Promise.resolve(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  }

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 7_000_000) {
        reject(new Error("Request body too large."));
      }
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

module.exports = async function handler(req, res) {
  const session = requireAuth(req, res);
  if (!session) return;

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (rejectBadOrigin(req, res)) return;

  try {
    const { fileName, contentType, folder, data } = await readBody(req);

    if (!ALLOWED_TYPES.has(contentType)) {
      res.status(400).json({ error: "Unsupported file type." });
      return;
    }

    if (!data || typeof data !== "string") {
      res.status(400).json({ error: "Missing file data." });
      return;
    }

    const result = await saveAsset({ fileName, folder, data });
    res.status(200).json({ ok: true, ...result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
