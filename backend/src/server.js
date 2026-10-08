import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

// ==========================================
// Self-bootstrapping entry point
// ==========================================
// Works regardless of the environment's working directory and even when
// invoked before dependencies have been installed (e.g. a platform build
// step running `node src/server.js` without a prior `npm install`).
// ==========================================

const srcDir = path.dirname(fileURLToPath(import.meta.url));
const backendDir = path.resolve(srcDir, "..");

const depsInstalled = fs.existsSync(
  path.join(backendDir, "node_modules", "dotenv", "package.json")
);

if (!depsInstalled) {
  console.log("Dependencies not installed yet - running npm install...");
  execSync("npm install --no-audit --no-fund", {
    cwd: backendDir,
    stdio: "inherit",
  });
  process.exit(0);
}

await import("./app.js");
