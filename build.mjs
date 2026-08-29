import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(".");
const output = resolve("dist");

rmSync(output, { recursive: true, force: true });
mkdirSync(resolve(output, "server"), { recursive: true });

for (const entry of ["index.html", "styles.css", "script.js", "adam lachkar.png", "assets"]) {
  cpSync(resolve(root, entry), resolve(output, entry), { recursive: true });
}

cpSync(resolve(root, "worker-entry.mjs"), resolve(output, "server/index.js"));
