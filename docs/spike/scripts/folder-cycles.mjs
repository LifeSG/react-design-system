// Spike 01 / F1, F3: folder-level import graph of src/, cyclic groups and hubs.
// Regex import scan (not madge), so type-only and dynamic imports count as edges.
// Run from anywhere: node docs/spike/scripts/folder-cycles.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../.."
);
const srcDir = path.join(root, "src");
const EXCLUDE = new Set(["custom-types", "util", "__mocks__"]);

const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return walk(full);
        const isSource = /\.(ts|tsx)$/.test(entry.name);
        const isTestOrStory = /\.(test|spec|stories)\./.test(entry.name);
        return isSource && !isTestOrStory ? [full] : [];
    });

const topFolder = (file) => path.relative(srcDir, file).split(path.sep)[0];

// folder -> set of folders it imports from
const graph = {};
for (const file of walk(srcDir)) {
    const from = topFolder(file);
    if (EXCLUDE.has(from) || from === "index.ts") continue;
    graph[from] ??= new Set();

    const source = fs.readFileSync(file, "utf8");
    for (const match of source.matchAll(
        /(?:from|import)\s*\(?\s*["'](\.[^"']+)["']/g
    )) {
        const to = topFolder(path.resolve(path.dirname(file), match[1]));
        const isInternal = !to.startsWith("..") && to !== "index.ts";
        if (to !== from && isInternal && !EXCLUDE.has(to)) graph[from].add(to);
    }
}

// Tarjan strongly connected components; groups of size > 1 are cycles
let counter = 0;
const stack = [];
const onStack = new Set();
const index = {};
const low = {};
const cycles = [];

function visit(v) {
    index[v] = low[v] = counter++;
    stack.push(v);
    onStack.add(v);
    for (const w of graph[v] ?? []) {
        if (!(w in graph)) continue;
        if (!(w in index)) {
            visit(w);
            low[v] = Math.min(low[v], low[w]);
        } else if (onStack.has(w)) {
            low[v] = Math.min(low[v], index[w]);
        }
    }
    if (low[v] === index[v]) {
        const group = [];
        let w;
        do {
            w = stack.pop();
            onStack.delete(w);
            group.push(w);
        } while (w !== v);
        if (group.length > 1) cycles.push(group.sort());
    }
}

for (const v of Object.keys(graph)) if (!(v in index)) visit(v);

const incoming = {};
for (const targets of Object.values(graph))
    for (const t of targets) incoming[t] = (incoming[t] ?? 0) + 1;

const top = (entries) =>
    JSON.stringify(entries.sort((a, b) => b[1] - a[1]).slice(0, 8));

console.log("folders:", Object.keys(graph).length);
console.log("cyclic groups:", cycles.length);
for (const group of cycles) console.log("  ", group.join(", "));
console.log(
    "most outgoing:",
    top(Object.entries(graph).map(([k, v]) => [k, v.size]))
);
console.log("most depended-on:", top(Object.entries(incoming)));
