import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const currentFileName = path.basename(__filename);

const files = (await readdir(__dirname))
    .filter((file) => file.endsWith(".mjs") && file !== currentFileName)
    .sort();

if (files.length === 0) {
    console.log("No ESLint rule test files found.");
    process.exit(0);
}

for (const file of files) {
    const absolutePath = path.join(__dirname, file);
    console.log(`Running ${file}`);
    await import(pathToFileURL(absolutePath).href);
}
