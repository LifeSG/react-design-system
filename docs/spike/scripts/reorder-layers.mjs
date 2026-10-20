// Spike 01 / E5b: move one layer before another in the built order statement.
// Usage: node docs/spike/scripts/reorder-layers.mjs <layer> <before-layer>
//   e.g. node docs/spike/scripts/reorder-layers.mjs form input-textarea
// Rewrites the `@layer fds.theme,...;` line in every dist/theme/styles/*.css (ESM and
// cjs). This is the hand-written equivalent of an explicit order for cycle members.
// Undo: rebuild the library (`npm run build`), or run with the two names swapped.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../.."
);
const [move, before] = process.argv.slice(2).map((n) => "fds." + n);
if (!move || !before)
    throw new Error("usage: reorder-layers.mjs <layer> <before-layer>");

const dirs = ["dist/theme/styles", "dist/cjs/theme/styles"].map((d) =>
    path.join(root, d)
);
let changed = 0;
for (const dir of dirs.filter(fs.existsSync)) {
    for (const name of fs.readdirSync(dir).filter((n) => n.endsWith(".css"))) {
        const file = path.join(dir, name);
        const css = fs.readFileSync(file, "utf8");
        const next = css.replace(
            /^@layer (fds\.theme[\w.,-]*);/m,
            (_, list) => {
                const names = list.split(",").filter((n) => n !== move);
                const at = names.indexOf(before);
                if (at < 0)
                    throw new Error(
                        `${before} not in the order statement of ${file}`
                    );
                names.splice(at, 0, move);
                return `@layer ${names.join(",")};`;
            }
        );
        if (next !== css) {
            fs.writeFileSync(file, next);
            changed++;
        }
    }
}
const order = fs
    .readFileSync(path.join(dirs[0], "lifesg.css"), "utf8")
    .match(/^@layer (fds\.theme[\w.,-]*);/m)[1]
    .split(",");
console.log(`moved ${move} before ${before} in ${changed} files`);
console.log(
    `now: ${move} at ${order.indexOf(move) + 1}, ${before} at ${
        order.indexOf(before) + 1
    }`
);
