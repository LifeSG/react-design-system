// Spike 01 / E8: runtime conflict check. On every story page of the sweep app (served on
// <port> with the `styleedge` library, whose layer names are folder names), finds every
// element under <body> where rules from two different `fds.<folder>` layers set the same
// property, and records the pair with what decides it in `flat`, `styleedge` and `depth`.
// Usage: node conflict-scan.mjs <port> <out dir> [viewports=desktop,mobile] [concurrency=4]
//   STORIES="comp/story comp/story"  only these pages (default: all, as sweep-shots.mjs)
//   needs scan/static.json (node static.mjs)
// Writes <out dir>/pages.jsonl (one line per page and viewport: render checks, counts)
// and <out dir>/pairs.jsonl (one line per pair, deduplicated across pages, one example).
// Run through run-scan.sh, which builds and serves the app.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "../../../../node_modules/playwright/index.mjs";
import { branches, cmp } from "./selectors.mjs";

const [port, outDir, vps = "desktop,mobile", conc = "4"] =
    process.argv.slice(2);
const here = path.dirname(fileURLToPath(import.meta.url));
const statics = JSON.parse(
    fs.readFileSync(path.join(here, "static.json"), "utf8")
);
const storiesDir = path.resolve(
    here,
    "../../../../e2e/nextjs-app/src/app/components"
);
const VIEWPORT = {
    desktop: { width: 1280, height: 720 },
    mobile: { width: 375, height: 812 },
};
const NOW = "2026-04-08T12:00:00.000Z"; // e2e/tests/consts.ts fixedTimestamp

const only = process.env.STORIES?.split(/\s+/).filter(Boolean);
const stories = fs
    .readdirSync(storiesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("["))
    .flatMap((d) =>
        fs
            .readdirSync(path.join(storiesDir, d.name))
            .filter((f) => f.endsWith(".e2e.tsx"))
            .map((f) => `${d.name}/${f.replace(/\.e2e\.tsx$/, "")}`)
    )
    .sort()
    .filter((s) => !only || only.includes(s));
if (only && stories.length !== only.length)
    throw new Error(
        `unknown story in STORIES: ${only.filter((s) => !stories.includes(s))}`
    );

// ---------- predictions (Node) ----------
const pos = Object.fromEntries(statics.order.map((f, i) => [f, i]));
// flat: one layer. !important first, then specificity; a tie is source order (the bug)
const flatWinner = (a, b) => {
    if (a.important !== b.important)
        return { winner: a.important ? "a" : "b", by: "important" };
    const c = cmp(a.spec, b.spec);
    if (c) return { winner: c > 0 ? "a" : "b", by: "specificity" };
    return { winner: "order-dependent", by: "tie" };
};
// layered: later layer wins; !important reverses the layer order; same layer = flat
const layeredWinner = (a, b, ra, rb) => {
    if (ra === rb) return flatWinner(a, b);
    if (a.important !== b.important)
        return { winner: a.important ? "a" : "b", by: "important" };
    const later = ra > rb ? "a" : "b";
    const earlier = later === "a" ? "b" : "a";
    return a.important
        ? { winner: earlier, by: "layer (!important)" }
        : { winner: later, by: "layer" };
};
const predict = (a, b) => ({
    flat: flatWinner(a, b),
    styleedge: layeredWinner(a, b, pos[a.folder], pos[b.folder]),
    depth: layeredWinner(
        a,
        b,
        statics.depth[a.folder],
        statics.depth[b.folder]
    ),
});

// ---------- browser side ----------
// 1. collect every style rule in an fds.<folder> layer; expand var() shorthands
const collect = () => {
    const rules = [];
    const seen = new Set();
    const stats = {
        sheets: 0,
        unreadable: [],
        statements: [],
        fdsRootRules: 0,
        otherRules: 0,
        nestedRules: 0,
        cdnSheets: [],
    };
    const scratch = document.createElement("div");
    const coverCache = new Map();
    const covers = (short, long) => {
        const k = short + "|" + long;
        if (!coverCache.has(k)) {
            scratch.style.cssText = "";
            scratch.style.setProperty(short, "initial");
            coverCache.set(k, scratch.style.getPropertyValue(long) !== "");
        }
        return coverCache.get(k);
    };
    const parseDecls = (text) => {
        const out = [];
        let depth = 0,
            cur = "";
        for (const ch of text) {
            if (ch === "(") depth++;
            if (ch === ")") depth--;
            if (ch === ";" && depth === 0) {
                out.push(cur);
                cur = "";
            } else cur += ch;
        }
        if (cur.trim()) out.push(cur);
        return out
            .map((d) => {
                const i = d.indexOf(":");
                return [d.slice(0, i).trim(), d.slice(i + 1).trim()];
            })
            .filter(([n]) => n);
    };
    const walk = (list, layers, conds, href) => {
        for (const r of list) {
            const t = r.constructor.name;
            if (t === "CSSLayerStatementRule") {
                if (r.nameList.some((n) => n.startsWith("fds.")))
                    stats.statements.push(r.nameList.join(","));
                continue;
            }
            if (t === "CSSLayerBlockRule") {
                walk(r.cssRules, [...layers, r.name], conds, href);
                continue;
            }
            if (
                t === "CSSMediaRule" ||
                t === "CSSSupportsRule" ||
                t === "CSSContainerRule"
            ) {
                const at = {
                    CSSMediaRule: "@media",
                    CSSSupportsRule: "@supports",
                    CSSContainerRule: "@container",
                }[t];
                walk(
                    r.cssRules,
                    layers,
                    [...conds, `${at} ${r.conditionText}`],
                    href
                );
                continue;
            }
            if (t !== "CSSStyleRule") {
                if (r.cssRules) walk(r.cssRules, layers, conds, href);
                continue;
            }
            if (r.cssRules?.length) stats.nestedRules++;
            const folder =
                layers[0] === "fds" && layers.length >= 2 ? layers[1] : null;
            if (!folder) {
                if (layers[0] === "fds") stats.fdsRootRules++;
                else stats.otherRules++;
                continue;
            }
            const cond = conds.join(" and ");
            const key = `${folder}|${cond}|${r.selectorText}|${r.style.cssText}`;
            if (seen.has(key)) continue;
            seen.add(key);
            const raw = parseDecls(r.style.cssText);
            const decls = [];
            for (let i = 0; i < r.style.length; i++) {
                const name = r.style[i];
                let value = r.style.getPropertyValue(name);
                const important =
                    r.style.getPropertyPriority(name) === "important";
                let via = "";
                if (value === "") {
                    const sh = raw.find(
                        ([n]) =>
                            n !== name && !n.startsWith("--") && covers(n, name)
                    );
                    if (sh) {
                        via = sh[0];
                        value = sh[1].replace(/\s*!important$/, "");
                    }
                }
                decls.push([name, value, important, via]);
            }
            rules.push({
                i: rules.length,
                folder,
                layer: layers.join("."),
                cond,
                sel: r.selectorText,
                href: href ?? "(inline <style>)",
                decls,
            });
        }
    };
    for (const s of document.styleSheets) {
        stats.sheets++;
        if (s.href?.includes("/cdn/"))
            stats.cdnSheets.push(s.href.replace(location.origin, ""));
        let list;
        try {
            list = s.cssRules;
        } catch {
            stats.unreadable.push(s.href);
            continue;
        }
        walk(list, [], [], s.href?.replace(location.origin, ""));
    }
    window.__scanRules = rules;
    const layout = document.querySelector('[data-testid="story-layout"]');
    stats.themeVar = layout
        ? getComputedStyle(layout).getPropertyValue("--fds-spacing-16").trim()
        : "(no layout)";
    stats.layoutBox = layout
        ? Math.round(layout.getBoundingClientRect().height)
        : 0;
    stats.elements = document.body.querySelectorAll("*").length + 1;
    return {
        rules: rules.map(({ decls, ...r }) => ({ ...r, nDecls: decls.length })),
        stats,
    };
};

// 2. match every branch, pair rules from different folders per element and property,
//    and compute both declared values in the element's own context
const pairUp = (B) => {
    const rules = window.__scanRules;
    const qcache = new Map();
    const bad = new Set();
    const els = new Map();
    const better = (x, y) => {
        const c =
            x.spec[0] - y.spec[0] ||
            x.spec[1] - y.spec[1] ||
            x.spec[2] - y.spec[2];
        return c > 0 || (c === 0 && !x.state && y.state);
    };
    for (const r of rules) {
        const bs = B[r.sel];
        bs.forEach((b, bi) => {
            if (b.error) return;
            let list = qcache.get(b.match);
            if (!list) {
                try {
                    list = [...document.querySelectorAll(b.match)];
                    if (document.body.matches(b.match))
                        list.push(document.body);
                    list = list.filter(
                        (e) => e === document.body || document.body.contains(e)
                    );
                } catch {
                    bad.add(b.match);
                    list = [];
                }
                qcache.set(b.match, list);
            }
            for (const el of list) {
                let m = els.get(el);
                if (!m) els.set(el, (m = new Map()));
                const k = r.i + "|" + b.pseudoElement;
                const prev = m.get(k);
                // keep the most specific matching branch; remember every branch that matched
                if (!prev || better(b, bs[prev.bi]))
                    m.set(k, {
                        ri: r.i,
                        bi,
                        pe: b.pseudoElement,
                        all: [...(prev?.all ?? []), bi],
                    });
                else prev.all.push(bi);
            }
        });
    }
    const probeCache = new WeakMap();
    const probe = (el, prop, setName, setVal) => {
        let c = probeCache.get(el);
        if (!c) probeCache.set(el, (c = new Map()));
        const k = prop + "|" + setName + "|" + setVal;
        if (c.has(k)) return c.get(k);
        const st = el.style;
        const before = st.cssText;
        let v;
        try {
            st.setProperty("transition", "none", "important");
            st.setProperty("animation", "none", "important");
            st.setProperty(setName, setVal, "important");
            v = getComputedStyle(el).getPropertyValue(prop).trim();
        } finally {
            st.cssText = before;
        }
        c.set(k, v);
        return v;
    };
    const desc = (el) => {
        const cls = [...el.classList].slice(0, 4).join(".");
        const tid = el.getAttribute("data-testid");
        return `${el.tagName.toLowerCase()}${cls ? "." + cls : ""}${
            tid ? `[data-testid=${tid}]` : ""
        }`;
    };
    // other branches of the same rule that match too, at the same specificity and state
    const alsoOf = (x) => {
        const bs = B[rules[x.ri].sel];
        const w = bs[x.bi];
        return x.all.filter(
            (i) =>
                i !== x.bi &&
                String(bs[i].spec) === String(w.spec) &&
                bs[i].state === w.state
        );
    };
    const pairs = [];
    for (const [el, m] of els) {
        const hits = [...m.values()];
        if (new Set(hits.map((x) => rules[x.ri].folder)).size < 2) continue;
        const byKey = new Map();
        for (const x of hits)
            for (const [prop, value, important, via] of rules[x.ri].decls) {
                const k = x.pe + "|" + prop;
                if (!byKey.has(k)) byKey.set(k, []);
                byKey.get(k).push({ ...x, prop, value, important, via });
            }
        for (const list of byKey.values()) {
            if (new Set(list.map((x) => rules[x.ri].folder)).size < 2) continue;
            for (let i = 0; i < list.length; i++)
                for (let j = i + 1; j < list.length; j++) {
                    const [a, b] = [list[i], list[j]];
                    if (rules[a.ri].folder === rules[b.ri].folder) continue;
                    const comp = (x) =>
                        x.value
                            ? probe(el, x.prop, x.via || x.prop, x.value)
                            : "";
                    pairs.push({
                        a: {
                            ri: a.ri,
                            bi: a.bi,
                            also: alsoOf(a),
                            value: a.value,
                            important: a.important,
                            via: a.via,
                            computed: comp(a),
                        },
                        b: {
                            ri: b.ri,
                            bi: b.bi,
                            also: alsoOf(b),
                            value: b.value,
                            important: b.important,
                            via: b.via,
                            computed: comp(b),
                        },
                        prop: a.prop,
                        pe: a.pe,
                        el: desc(el),
                        actual: getComputedStyle(el, a.pe || null)
                            .getPropertyValue(a.prop)
                            .trim(),
                    });
                }
        }
    }
    return { pairs, bad: [...bad], matchedElements: els.size };
};

// ---------- driver ----------
fs.mkdirSync(outDir, { recursive: true });
const pagesOut = fs.createWriteStream(path.join(outDir, "pages.jsonl"));
const pairMap = new Map();
const browser = await chromium.launch();
const jobs = vps
    .split(",")
    .flatMap((vp) => stories.map((s) => ({ vp, story: s })));
let next = 0,
    done = 0;
const T0 = Date.now();

const side = (rule, b, x, bs) => ({
    folder: rule.folder,
    sel: rule.sel,
    branch: b.text,
    alsoMatched: x.also.map((i) => bs[i].text),
    spec: b.spec,
    state: b.state,
    cond: rule.cond,
    value: x.value,
    via: x.via,
    important: x.important,
    position: pos[rule.folder],
    depthTier: statics.depth[rule.folder],
    href: rule.href,
});

async function run() {
    const contexts = {};
    const work = async () => {
        while (next < jobs.length) {
            const { vp, story } = jobs[next++];
            if (!contexts[vp]) {
                contexts[vp] = await browser.newContext({
                    viewport: VIEWPORT[vp],
                    colorScheme: "light",
                });
                await contexts[vp].route(/^https?:\/\/(?!localhost)/, (r) =>
                    r.abort()
                );
            }
            const page = await contexts[vp].newPage();
            const line = { story, vp };
            try {
                await page.goto(
                    `http://localhost:${port}/components/${story}?now=${encodeURIComponent(
                        NOW
                    )}`,
                    { timeout: 30000 }
                );
                await page
                    .locator('[data-testid="story-layout"]')
                    .waitFor({ state: "visible", timeout: 15000 });
                await page
                    .waitForLoadState("networkidle", { timeout: 15000 })
                    .catch(() => {});
                let last = "";
                for (let i = 0; i < 20; i++) {
                    await page.waitForTimeout(150);
                    const size = await page.evaluate(
                        () =>
                            `${document.documentElement.scrollWidth}x${document.documentElement.scrollHeight}`
                    );
                    if (size === last) break;
                    last = size;
                }
                const { rules, stats } = await page.evaluate(collect);
                const B = {};
                for (const r of rules) B[r.sel] ??= branches(r.sel);
                const { pairs, bad, matchedElements } = await page.evaluate(
                    pairUp,
                    B
                );
                const expected = statics.order.map((f) => "fds." + f).join(",");
                Object.assign(line, {
                    ok: true,
                    orderStatementOk:
                        stats.statements.length > 0 &&
                        stats.statements.every((s) => s === expected),
                    statements: stats.statements.length,
                    themeVar: stats.themeVar,
                    layoutHeight: stats.layoutBox,
                    elements: stats.elements,
                    folderRules: rules.length,
                    folders: new Set(rules.map((r) => r.folder)).size,
                    fdsRootRules: stats.fdsRootRules,
                    otherRules: stats.otherRules,
                    nestedRules: stats.nestedRules,
                    cdnSheets: stats.cdnSheets,
                    unreadableSheets: stats.unreadable,
                    unparsableSelectors: Object.values(B)
                        .flat()
                        .filter((b) => b.error).length,
                    unmatchableBranches: bad,
                    matchedElements,
                    pairs: pairs.length,
                });
                for (const p of pairs) {
                    let [x, y] = [p.a, p.b];
                    if (rules[x.ri].folder > rules[y.ri].folder)
                        [x, y] = [y, x];
                    const ra = rules[x.ri],
                        rb = rules[y.ri];
                    const ba = B[ra.sel][x.bi],
                        bb = B[rb.sel][y.bi];
                    const key = [
                        ra.folder,
                        ra.cond,
                        ra.sel,
                        ba.text,
                        rb.folder,
                        rb.cond,
                        rb.sel,
                        bb.text,
                        p.prop,
                        p.pe,
                    ].join("\u0001");
                    const differ = x.computed !== y.computed;
                    let rec = pairMap.get(key);
                    if (!rec) {
                        const a = side(ra, ba, x, B[ra.sel]),
                            b = side(rb, bb, y, B[rb.sel]);
                        rec = {
                            prop: p.prop,
                            pseudoElement: p.pe,
                            custom: p.prop.startsWith("--"),
                            a,
                            b,
                            predicted: predict(a, b),
                            valuesDiffer: differ,
                            instances: 0,
                            pages: new Set(),
                            example: {
                                story,
                                vp,
                                el: p.el,
                                computedA: x.computed,
                                computedB: y.computed,
                                actual: p.actual,
                            },
                        };
                        pairMap.set(key, rec);
                    }
                    rec.instances++;
                    rec.pages.add(`${story}@${vp}`);
                    if (differ && !rec.valuesDiffer) {
                        rec.valuesDiffer = true;
                        rec.example = {
                            story,
                            vp,
                            el: p.el,
                            computedA: x.computed,
                            computedB: y.computed,
                            actual: p.actual,
                        };
                    }
                }
            } catch (e) {
                Object.assign(line, {
                    ok: false,
                    error: String(e).split("\n")[0].slice(0, 200),
                });
            }
            await page.close();
            pagesOut.write(JSON.stringify(line) + "\n");
            done++;
            if (done % 50 === 0 || done === jobs.length)
                console.log(
                    `  ${done}/${jobs.length} pages, ${
                        pairMap.size
                    } pairs, ${Math.round((Date.now() - T0) / 1000)}s`
                );
        }
    };
    await Promise.all(Array.from({ length: Number(conc) }, work));
}
await run();
await browser.close();
pagesOut.end();
const pairsOut = [...pairMap.values()].map((r) => ({
    ...r,
    pages: r.pages.size,
}));
fs.writeFileSync(
    path.join(outDir, "pairs.jsonl"),
    pairsOut.map((r) => JSON.stringify(r)).join("\n") + "\n"
);
console.log(
    `${jobs.length} page loads, ${pairsOut.length} distinct pairs -> ${outDir}`
);
