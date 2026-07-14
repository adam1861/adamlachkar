const { clearSessionCookie, rejectBadOrigin } = require("./_lib/auth");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (rejectBadOrigin(req, res)) return;

  clearSessionCookie(res);
  res.status(200).json({ ok: true });
};
