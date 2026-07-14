const crypto = require("crypto");
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const password = await rl.question("Admin password: ");
  rl.close();

  if (!password || password.length < 10) {
    throw new Error("Use a password with at least 10 characters.");
  }

  const salt = crypto.randomBytes(16).toString("hex");
  const key = crypto.scryptSync(password, salt, 64).toString("hex");
  console.log(`ADMIN_PASSWORD_HASH=scrypt:${salt}:${key}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
