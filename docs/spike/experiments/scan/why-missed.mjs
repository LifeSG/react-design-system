// Spike 01 / E8 (Q1): for each missing edge, replay the static scan's own stages on the
// parent's class and say where the chain breaks. Mirrors rollup/style-edges.js (regexes
// copied, not imported, because they are not exported); run from the repo root.
// Usage: node docs/spike/experiments/scan/why-missed.mjs
//   stages: style file read? -> class parsed? -> used in a .tsx? -> inside a <Capitalised>
//   tag the regex matches? -> tag is an imported component of the child folder? ->
//   className={} captured with styles.<name>? -> props collide with the child folder?
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
process.chdir(path.resolve(here, "../../../.."));
const analysis = JSON.parse(
    fs.readFileSync(path.join(here, "results/full/analysis.json"), "utf8")
);

const isStyle = (f) => /\.styles?\.ts$/.test(f);
const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        return e.isDirectory() ? walk(f) : [f];
    });
const files = walk("src");
const topFolder = (f) => path.relative("src", f).split(path.sep)[0];
const TAG = /<([A-Z]\w*)(?:\.\w+)?\b((?:[^>"']|"[^"]*"|'[^']*')*?)\/?>/gs; // style-edges.js
const CLS = /className=\{([\s\S]*?)\}\s*(?:\w+=|\/?$)/; // style-edges.js
const IMPORT = /import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+["'](\.[^"']+)["']/g; // style-edges.js

// style-edges.js internals (copied): what a class declares, what a folder declares
const FONT_PROPS = [
    "font-size",
    "font-weight",
    "line-height",
    "font-family",
    "letter-spacing",
];
const SIDES = ["top", "right", "bottom", "left"];
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
const folderProps = {};
for (const f of files.filter(isStyle)) {
    const set = (folderProps[topFolder(f)] ??= new Set());
    for (const props of Object.values(classesIn(f)))
        props.forEach((p) => set.add(p));
}

// the parent-side class of each missing edge, from its example pairs (dist file#export)
const lineOf = (src) => src.split("\n").length;
const report = [];
for (const m of analysis.q1.missing) {
    if (!m.direction) continue;
    const [parent, child] = m.direction.split("->");
    const classes = new Set();
    for (const e of m.examples) {
        const side = e.line.split(" vs ")[0].startsWith(`${m.props[0]}`)
            ? null
            : null;
        for (const c of [...e.aClasses, ...e.bClasses]) {
            const [, src] = c.split("=");
            if (src?.startsWith(parent + "/") && src.includes("#"))
                classes.add(src);
        }
    }
    for (const src of classes) {
        const [distFile, name] = src.split("#");
        const r = {
            edge: m.direction,
            class: `${distFile}#${name}`,
            stages: [],
        };
        const srcFile = files.find(
            (f) =>
                path.relative("src", f).replace(/\.tsx?$/, ".js") === distFile
        );
        r.stages.push(
            `defined in ${srcFile ? path.relative("src", srcFile) : "?"}: ${
                srcFile && isStyle(srcFile)
                    ? "read by the scan"
                    : "NOT READ (not *.style(s).ts)"
            }`
        );
        const users = files.filter(
            (f) =>
                /\.tsx$/.test(f) &&
                !/\.(test|spec|stories)\./.test(f) &&
                topFolder(f) === parent &&
                new RegExp(`[sS]tyles\\.${name}\\b`).test(
                    fs.readFileSync(f, "utf8")
                )
        );
        if (!users.length)
            r.stages.push(`no .tsx in ${parent}/ mentions ${name}`);
        for (const f of users) {
            const code = fs.readFileSync(f, "utf8");
            const imported = {};
            for (const im of code.matchAll(IMPORT)) {
                const folder = topFolder(path.resolve(path.dirname(f), im[2]));
                for (const n of im[1].split(",").map((s) =>
                    s
                        .trim()
                        .split(/\s+as\s+/)
                        .pop()
                ))
                    if (n) imported[n] = folder;
            }
            const at = [
                ...code.matchAll(new RegExp(`[sS]tyles\\.${name}\\b`, "g")),
            ].map((x) => x.index);
            for (const pos of at) {
                const where = `${path.relative("src", f)}:${lineOf(
                    code.slice(0, pos)
                )}`;
                // the JSX tag that encloses this mention, as a human reads it
                // a JSX "<" is not preceded by an identifier or ")" (that would be a generic)
                let open = pos;
                do open = code.lastIndexOf("<", open - 1);
                while (open > 0 && /[\w)]/.test(code[open - 1]));
                const between = code.slice(open, pos);
                const viaVariable =
                    /=\s*$|return\s+$|\?\s*$|:\s*$/.test(
                        code
                            .slice(Math.max(0, pos - 40), pos)
                            .replace(/\s+/g, " ")
                    ) && !/className=\{[^}]*$/.test(between);
                const tagName =
                    code.slice(open + 1).match(/^([A-Za-z][\w.]*)/)?.[1] ?? "?";
                const tag = [...code.matchAll(TAG)].find(
                    (t) => t.index === open
                );
                let verdict;
                if (viaVariable) {
                    verdict = `class assigned to a variable or returned from a function, not written in className={} (${code
                        .slice(Math.max(0, pos - 50), pos + name.length + 7)
                        .replace(/\s+/g, " ")
                        .trim()})`;
                } else if (!/^[A-Z]/.test(tagName)) {
                    const otherStyles = [
                        ...code.matchAll(
                            /import\s+\*\s+as\s+(\w+)\s+from\s+["'](\.[^"']+)["']/g
                        ),
                    ].filter(
                        (x) =>
                            topFolder(path.resolve(path.dirname(f), x[2])) ===
                            child
                    );
                    verdict = `on a <${tagName}> element, not a component${
                        otherStyles.length
                            ? `; the element also takes ${otherStyles
                                  .map((x) => x[1])
                                  .join(
                                      ", "
                                  )} (${child}'s styles imported directly)`
                            : ""
                    }`;
                } else if (!tag) {
                    const attrs = code.slice(open, pos);
                    verdict = `<${tagName}>: the tag regex does not reach className (it stops at the first ">" outside quotes${
                        /=>/.test(attrs)
                            ? `; here "=>" in an arrow function`
                            : /`/.test(attrs)
                            ? "; here inside a template literal"
                            : ""
                    })`;
                } else {
                    const comp = tag[1];
                    const cls = tag[2].match(CLS);
                    if (!imported[comp])
                        verdict = `<${tagName}>: ${comp} is not a named import from another folder (a local alias or variable)`;
                    else if (imported[comp] !== child)
                        verdict = `<${tagName}>: imported from ${imported[comp]}, not ${child}`;
                    else if (!tag[2].includes("className"))
                        verdict = `<${tagName}>: the tag regex stops at the first ">" before className${
                            /=>/.test(between)
                                ? ' (here "=>" in an arrow-function prop)'
                                : ""
                        }`;
                    else if (!cls) {
                        const after = tag[2]
                            .slice(tag[2].indexOf("className"))
                            .match(/\}\s*([\w-]+=)/)?.[1];
                        verdict = `<${tagName}>: className={...} not captured: the regex needs the next attribute to match \\w+=, here "${after}"`;
                    } else if (!new RegExp(`styles\\.${name}\\b`).test(cls[1]))
                        verdict = `<${tagName}>: className is ${cls[1]
                            .trim()
                            .slice(
                                0,
                                60
                            )}, not styles.${name} (class through a variable or function)`;
                    else {
                        const sameDir = Object.assign(
                            {},
                            ...fs
                                .readdirSync(path.dirname(f))
                                .filter(isStyle)
                                .map((n) =>
                                    classesIn(path.join(path.dirname(f), n))
                                )
                        );
                        const props = sameDir[name];
                        if (!props)
                            verdict = `<${tagName}>: matched; class ${name} is not in a *.style(s).ts in ${path.relative(
                                "src",
                                path.dirname(f)
                            )}/ (the scan only looks beside the .tsx), so it has no props`;
                        else {
                            const hit = [...props].filter((p) =>
                                folderProps[child]?.has(p)
                            );
                            verdict = `<${tagName}>: matched; ${name} declares {${[
                                ...props,
                            ].join(", ")}}; ${child} folder declares ${
                                hit.length
                                    ? `{${hit.join(", ")}} of them`
                                    : "none of them"
                            } as the regex reads it (runtime props: ${m.props.join(
                                ", "
                            )})`;
                        }
                    }
                }
                r.stages.push(`${where}: ${verdict}`);
            }
        }
        report.push(r);
    }
}
const out = report
    .map(
        (r) =>
            `${r.edge}  ${r.class}\n${r.stages
                .map((s) => "    " + s)
                .join("\n")}`
    )
    .join("\n");
fs.writeFileSync(path.join(here, "results/full/why-missed.txt"), out + "\n");
console.log(out);
