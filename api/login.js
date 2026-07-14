const { createSession, rejectBadOrigin, setSessionCookie, verifyPassword } = require("./_lib/auth");

function readBody(req) {
  if (req.body) {
    return Promise.resolve(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  }

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20_000) {
        reject(new Error("Request body too large."));
      }
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (rejectBadOrigin(req, res)) return;

  try {
    const { username, password } = await readBody(req);
    const expectedUsername = process.env.ADMIN_USERNAME;

    if (!username || !password || username !== expectedUsername || !verifyPassword(password)) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    setSessionCookie(res, createSession(username));
    res.status(200).json({ ok: true, username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
