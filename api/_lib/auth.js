const crypto = require("crypto");

const COOKIE_NAME = "adam_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must be set to at least 32 characters.");
  }
  return secret;
}

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const index = part.indexOf("=");
      if (index === -1) return cookies;
      cookies[part.slice(0, index)] = decodeURIComponent(part.slice(index + 1));
      return cookies;
    }, {});
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function createSession(username) {
  const payload = base64url(
    JSON.stringify({
      username,
      exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
    })
  );
  return `${payload}.${sign(payload)}`;
}

function verifySession(token) {
  if (!token || !token.includes(".")) return null;
  const [payload, signature] = token.split(".");
  const expected = sign(payload);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!session.exp || session.exp < Math.floor(Date.now() / 1000)) return null;
    return session;
  } catch {
    return null;
  }
}

function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === "development" ? "" : " Secure;";
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly;${secure} SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}`
  );
}

function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === "development" ? "" : " Secure;";
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=; Path=/; HttpOnly;${secure} SameSite=Lax; Max-Age=0`
  );
}

function getSession(req) {
  return verifySession(parseCookies(req)[COOKIE_NAME]);
}

function requireAuth(req, res) {
  const session = getSession(req);
  if (session) return session;
  res.status(401).json({ error: "Authentication required." });
  return null;
}

function rejectBadOrigin(req, res) {
  const origin = req.headers.origin;
  if (!origin) return false;

  try {
    const originHost = new URL(origin).host;
    if (originHost === req.headers.host) return false;
  } catch {
    // Invalid Origin headers should be rejected.
  }

  res.status(403).json({ error: "Invalid request origin." });
  return true;
}

function verifyPassword(password) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername) {
    throw new Error("ADMIN_USERNAME must be set.");
  }

  if (passwordHash) {
    const [method, salt, expectedKey] = passwordHash.split(":");
    if (method !== "scrypt" || !salt || !expectedKey) {
      throw new Error("ADMIN_PASSWORD_HASH must use scrypt:salt:key format.");
    }

    const derivedKey = crypto.scryptSync(password, salt, 64).toString("hex");
    const derivedBuffer = Buffer.from(derivedKey, "hex");
    const expectedBuffer = Buffer.from(expectedKey, "hex");

    return (
      derivedBuffer.length === expectedBuffer.length &&
      crypto.timingSafeEqual(derivedBuffer, expectedBuffer)
    );
  }

  if (!plainPassword) {
    throw new Error("ADMIN_PASSWORD_HASH or ADMIN_PASSWORD must be set.");
  }

  const passwordBuffer = Buffer.from(password);
  const plainBuffer = Buffer.from(plainPassword);
  return passwordBuffer.length === plainBuffer.length && crypto.timingSafeEqual(passwordBuffer, plainBuffer);
}

module.exports = {
  clearSessionCookie,
  createSession,
  getSession,
  rejectBadOrigin,
  requireAuth,
  setSessionCookie,
  verifyPassword
};
