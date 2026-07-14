const { rejectBadOrigin, requireAuth } = require("./_lib/auth");
const { readContent, saveContent } = require("./_lib/content-store");

function readBody(req) {
  if (req.body) {
    return Promise.resolve(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  }

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_500_000) {
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

  try {
    if (req.method === "GET") {
      res.status(200).json(await readContent());
      return;
    }

    if (req.method === "POST") {
      if (rejectBadOrigin(req, res)) return;
      const body = await readBody(req);
      const result = await saveContent(body.content || body);
      res.status(200).json({ ok: true, ...result });
      return;
    }

    res.setHeader("Allow", "GET, POST");
    res.status(405).json({ error: "Method not allowed." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
