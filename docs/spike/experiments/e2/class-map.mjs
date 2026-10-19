// Usage: node class-map.mjs <library dir>
// Prints JSON { "<class>": "<component>" } from the library's emitted CSS, where
// the component is the top-level folder of the CSS file (e.g. "tab", "badge").
// The package ships every CSS file twice (folder and cjs/); cjs/ is skipped.
// Classes that appear under two components are dropped.
import fs from "node:fs";
import path from "node:path";

const lib = path.resolve(process.argv[2]);
const map = {};
const clash = new Set();

const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) return e.name === "node_modules" ? [] : walk(full);
        return e.name.endsWith(".css") ? [full] : [];
    });

for (const file of walk(lib)) {
    const rel = path.relative(lib, file).split(path.sep);
    if (rel[0] === "theme" || rel[0] === "cjs" || rel.length < 2) continue;
    const component = rel[0];
    const css = fs.readFileSync(file, "utf8");
    for (const m of css.matchAll(/\.([a-z][a-z0-9]{5,})(?=[\s.{:,>+~[)])/g)) {
        const cls = m[1];
        if (map[cls] && map[cls] !== component) clash.add(cls);
        map[cls] = component;
    }
}
for (const c of clash) delete map[c];
console.log(JSON.stringify(map));
