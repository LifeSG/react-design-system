// Spike 01 / E1: style edges between src/ folders, for ordering `fds.<folder>` layers.
// An edge `parent -> child` means a rule in the parent's folder styles an element the
// child's folder also styles, so the parent's layer must come after the child's.
// Two kinds, both regex scans over src/ (lower bounds, see 01-css-layers.md F10):
//   className: <Child className={styles.x}> where class x sets a property the child's
//              folder also sets (same rule as docs/spike/scripts/layer-inversions.mjs)
//   selector:  a style file interpolates another folder's class in a selector,
//              e.g. `.${iconContainer} { margin-left: auto }`
import fs from "node:fs";
import path from "node:path";

const FONT_PROPS = [
    "font-size",
    "font-weight",
    "line-height",
    "font-family",
    "letter-spacing",
];
const SIDES = ["top", "right", "bottom", "left"];
const IGNORE_FOLDERS = new Set(["theme", "util", "custom-types", "__mocks__"]);

const declared = (block) => {
    const props = new Set(
        [...block.matchAll(/^\s*([a-z-]+)\s*:/gm)].map((m) => m[1])
    );
    for (const box of ["margin", "padding"])
        if (props.has(box)) SIDES.forEach((s) => props.add(`${box}-${s}`));
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

// Named imports from other src/ folders: identifier -> folder
const importsOf = (code, file, topFolder) => {
    const out = {};
    for (const m of code.matchAll(
        /import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+["'](\.[^"']+)["']/g
    )) {
        const folder = topFolder(path.resolve(path.dirname(file), m[2]));
        if (folder === topFolder(file) || IGNORE_FOLDERS.has(folder)) continue;
        for (const name of m[1].split(",").map((s) =>
            s
                .trim()
                .split(/\s+as\s+/)
                .pop()
        ))
            if (name) out[name] = folder;
    }
    return out;
};

const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        return e.isDirectory() ? walk(f) : [f];
    });

// Every src/ folder with a style file, i.e. every `fds.<folder>` layer the build emits
export const getStyledFolders = (srcDir) =>
    [
        ...new Set(
            walk(srcDir)
                .filter(isStyle)
                .map((f) => path.relative(srcDir, f).split(path.sep)[0])
        ),
    ].sort();

export const getStyleEdges = (srcDir) => {
    const files = walk(srcDir);
    const topFolder = (f) => path.relative(srcDir, f).split(path.sep)[0];

    // Union of every property a folder's own classes set (crude: any class may apply)
    const folderProps = {};
    for (const f of files.filter(isStyle)) {
        const set = (folderProps[topFolder(f)] ??= new Set());
        for (const props of Object.values(classesIn(f)))
            props.forEach((p) => set.add(p));
    }

    const edges = [];

    for (const file of files) {
        if (!/\.tsx$/.test(file) || /\.(test|spec|stories)\./.test(file))
            continue;
        const parent = topFolder(file);
        const code = fs.readFileSync(file, "utf8");
        const importedFrom = Object.fromEntries(
            Object.entries(importsOf(code, file, topFolder)).filter(([n]) =>
                /^[A-Z]/.test(n)
            )
        );
        const classes = Object.assign(
            {},
            ...fs
                .readdirSync(path.dirname(file))
                .filter((n) => isStyle(n))
                .map((n) => classesIn(path.join(path.dirname(file), n)))
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
                edges.push({
                    kind: "className",
                    parent,
                    child,
                    file: path.relative(srcDir, file),
                    via: `<${m[1]} .${s[1]}>`,
                    props: collide,
                });
            }
        }
    }

    for (const file of files.filter(isStyle)) {
        const code = fs.readFileSync(file, "utf8");
        for (const [name, child] of Object.entries(
            importsOf(code, file, topFolder)
        )) {
            if (!new RegExp(`\\.\\$\\{\\s*${name}\\s*\\}`).test(code)) continue;
            edges.push({
                kind: "selector",
                parent: topFolder(file),
                child,
                file: path.relative(srcDir, file),
                via: `.\${${name}}`,
                props: [],
            });
        }
    }

    return edges;
};

// Order `folders` so every edge's child comes before its parent. Folders with no
// constraint between them keep their position in `folders` (the tiebreak), so the
// result differs from the input only where a style edge forces it. Throws on a cycle.
export const orderByStyleEdges = (folders, edges) => {
    const rank = new Map(folders.map((f, i) => [f, i]));
    const after = new Map(folders.map((f) => [f, new Set()]));
    const indegree = new Map(folders.map((f) => [f, 0]));
    for (const { parent, child } of edges) {
        if (!rank.has(parent) || !rank.has(child) || parent === child) continue;
        if (after.get(child).has(parent)) continue;
        after.get(child).add(parent);
        indegree.set(parent, indegree.get(parent) + 1);
    }

    const order = [];
    const ready = folders.filter((f) => indegree.get(f) === 0);
    while (ready.length) {
        ready.sort((a, b) => rank.get(a) - rank.get(b));
        const next = ready.shift();
        order.push(next);
        for (const parent of after.get(next)) {
            indegree.set(parent, indegree.get(parent) - 1);
            if (indegree.get(parent) === 0) ready.push(parent);
        }
    }

    if (order.length < folders.length) {
        const stuck = new Set(folders.filter((f) => !order.includes(f)));
        // Drop folders that are only downstream of a cycle, not part of one
        for (let pruned = true; pruned; ) {
            pruned = false;
            for (const f of stuck)
                if (![...after.get(f)].some((p) => stuck.has(p))) {
                    stuck.delete(f);
                    pruned = true;
                }
        }
        const evidence = edges
            .filter((e) => stuck.has(e.parent) && stuck.has(e.child))
            .map(
                (e) =>
                    `  ${e.parent} -> ${e.child}  ${e.file}  ${e.via}${
                        e.props.length ? `  on: ${e.props.join(",")}` : ""
                    }`
            );
        throw new Error(
            `CSS layer order: style edges form a cycle among ${[...stuck].join(
                ", "
            )}. ` +
                "No layer order lets every parent override its child. Edges:\n" +
                evidence.join("\n")
        );
    }
    return order;
};
