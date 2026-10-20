// Spike 01 / E5a: find parent-overrides-child pairs that per-folder layers would break.
// A parent component passes `className={styles.x}` to a child component imported from
// another src/ folder. Under `@layer fds.<folder>` the later layer wins, so if the
// parent's folder comes BEFORE the child's in the generated order statement, the
// child's own rules beat the parent's override on every colliding property.
// Reads the order statement from dist/theme/styles/lifesg.css (run `npm run build`).
// Run from anywhere: node docs/spike/scripts/layer-inversions.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../.."
);
const src = path.join(root, "src");
const theme = fs.readFileSync(
    path.join(root, "dist/theme/styles/lifesg.css"),
    "utf8"
);
const statement = theme.match(/@layer (fds\.[\w.,-]+);/);
if (!statement)
    throw new Error(
        "no layer order statement in dist/: build the rl/css-layers branch first"
    );
const order = statement[1].split(",").map((n) => n.replace(/^fds\./, ""));
const pos = (folder) => order.indexOf(folder);

const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        return e.isDirectory() ? walk(f) : [f];
    });
const files = walk(src);
const topFolder = (f) => path.relative(src, f).split(path.sep)[0];

// Properties declared by each exported css`` block of a styles file
const FONT_PROPS = [
    "font-size",
    "font-weight",
    "line-height",
    "font-family",
    "letter-spacing",
];
const declared = (block) => {
    const props = new Set(
        [...block.matchAll(/^\s*([a-z-]+)\s*:/gm)].map((m) => m[1])
    );
    if (props.has("margin"))
        ["margin-top", "margin-right", "margin-bottom", "margin-left"].forEach(
            (p) => props.add(p)
        );
    if (props.has("padding"))
        [
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
        ].forEach((p) => props.add(p));
    if (/\$\{\s*Font\[/.test(block)) FONT_PROPS.forEach((p) => props.add(p));
    return props;
};
const classesIn = (styleFile) => {
    const out = {};
    for (const m of fs
        .readFileSync(styleFile, "utf8")
        .matchAll(/export const (\w+) = css`([\s\S]*?)`;/g))
        out[m[1]] = declared(m[2]);
    return out;
};
const isStyle = (f) => /\.styles?\.ts$/.test(f);

// Union of every property a folder's own classes set (crude: any class may apply)
const folderProps = {};
for (const f of files.filter(isStyle)) {
    const set = (folderProps[topFolder(f)] ??= new Set());
    for (const props of Object.values(classesIn(f)))
        props.forEach((p) => set.add(p));
}

const rows = [];
for (const file of files) {
    if (!/\.tsx$/.test(file) || /\.(test|spec|stories)\./.test(file)) continue;
    const parent = topFolder(file);
    if (pos(parent) < 0) continue;
    const code = fs.readFileSync(file, "utf8");
    // identifier -> folder, for imports of other src folders
    const importedFrom = {};
    for (const m of code.matchAll(
        /import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+["'](\.[^"']+)["']/g
    )) {
        const folder = topFolder(path.resolve(path.dirname(file), m[2]));
        if (folder === parent || pos(folder) < 0) continue;
        for (const name of m[1].split(",").map((s) =>
            s
                .trim()
                .split(/\s+as\s+/)
                .pop()
        ))
            if (/^[A-Z]/.test(name)) importedFrom[name] = folder;
    }
    const styleFiles = fs
        .readdirSync(path.dirname(file))
        .filter((n) => /\.styles?\.ts$/.test(n));
    const classes = Object.assign(
        {},
        ...styleFiles.map((n) => classesIn(path.join(path.dirname(file), n)))
    );
    for (const m of code.matchAll(
        /<([A-Z]\w*)(?:\.\w+)?\b((?:[^>"']|"[^"]*"|'[^']*')*?)\/?>/gs
    )) {
        const child = importedFrom[m[1]];
        if (!child) continue;
        const cls = m[2].match(/className=\{([\s\S]*?)\}\s*(?:\w+=|\/?$)/);
        if (!cls) continue;
        for (const s of cls[1].matchAll(/styles\.(\w+)/g)) {
            const props = classes[s[1]];
            if (!props) continue;
            const collide = [...props].filter((p) =>
                folderProps[child]?.has(p)
            );
            if (!collide.length) continue;
            rows.push({
                file: path.relative(src, file),
                parent,
                child,
                tag: m[1],
                cls: s[1],
                inverted: pos(parent) < pos(child),
                parentPos: pos(parent) + 1,
                childPos: pos(child) + 1,
                collide: collide.join(","),
            });
        }
    }
}

const inverted = rows.filter((r) => r.inverted);
console.log(
    `${rows.length} cross-folder className overrides with a colliding property`
);
console.log(
    `${inverted.length} inverted (parent's layer before the child's: the child wins under layers)\n`
);
for (const r of inverted.sort((a, b) => a.parent.localeCompare(b.parent)))
    console.log(
        `  ${r.parent}(${r.parentPos}) -> ${r.child}(${r.childPos})  ${r.file}  <${r.tag} .${r.cls}>  on: ${r.collide}`
    );
const pairs = new Set(inverted.map((r) => r.parent + "->" + r.child));
console.log(`\ninverted folder pairs: ${[...pairs].join("  ")}`);
