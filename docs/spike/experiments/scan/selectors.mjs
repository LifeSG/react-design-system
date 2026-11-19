// Spike 01 / E8: split a selector list into branches, strip what makes `el.matches` false at
// rest, and score each branch's specificity. Used by conflict-scan.mjs (Node side).
//   match         the branch with state pseudo-classes and pseudo-elements removed, for
//                 querySelectorAll; wider than the original by design
//   pseudoElement the stripped pseudo-element ("::before"), "" for the host element
//   state         true if a state pseudo-class (:hover, :focus-visible, ...) was stripped
//   spec          [a, b, c] of the ORIGINAL branch, which is what competes in that state
import parserFactory from "postcss-selector-parser";

const STATE = new Set([
    ":hover",
    ":focus",
    ":focus-visible",
    ":focus-within",
    ":active",
    ":visited",
    ":autofill",
    ":-webkit-autofill",
]);
const LEGACY_ELEMENTS = new Set([
    ":before",
    ":after",
    ":first-line",
    ":first-letter",
]);
const FORGIVING_MAX = new Set([
    ":is",
    ":matches",
    ":-webkit-any",
    ":not",
    ":has",
]);

const isPseudoElement = (n) =>
    n.type === "pseudo" &&
    (n.value.startsWith("::") || LEGACY_ELEMENTS.has(n.value.toLowerCase()));

const add = (x, y) => [x[0] + y[0], x[1] + y[1], x[2] + y[2]];
const max = (list) => list.reduce((m, s) => (cmp(s, m) > 0 ? s : m), [0, 0, 0]);
export const cmp = (x, y) => x[0] - y[0] || x[1] - y[1] || x[2] - y[2];

// Specificity of one complex selector (a `selector` node), per Selectors Level 4
export const specificity = (sel) => {
    let s = [0, 0, 0];
    for (const n of sel.nodes) {
        if (n.type === "id") s = add(s, [1, 0, 0]);
        else if (n.type === "class" || n.type === "attribute")
            s = add(s, [0, 1, 0]);
        else if (n.type === "tag") s = add(s, [0, 0, 1]);
        else if (n.type === "pseudo") {
            const name = n.value.toLowerCase();
            if (isPseudoElement(n)) s = add(s, [0, 0, 1]);
            else if (FORGIVING_MAX.has(name))
                s = add(s, max(n.nodes.map(specificity)));
            else if (name === ":where") continue;
            else if (
                (name === ":nth-child" || name === ":nth-last-child") &&
                / of /i.test(String(n))
            )
                s = add(s, [0, 1, 0]);
            // + the `of S` argument; not used by the library
            else s = add(s, [0, 1, 0]);
        }
    }
    return s;
};

// Remove a node from its compound; if that empties the compound, put `*` in its place
const removeKeepingCompound = (node) => {
    const prev = node.prev();
    const next = node.next();
    const alone =
        (!prev || prev.type === "combinator") &&
        (!next || next.type === "combinator");
    if (alone) node.replaceWith(parserFactory.universal({ value: "*" }));
    else node.remove();
};

const insideNot = (node) => {
    for (let p = node.parent; p; p = p.parent)
        if (p.type === "pseudo" && p.value.toLowerCase() === ":not") return p;
    return null;
};

const cache = new Map();
export const branches = (selectorText) => {
    if (cache.has(selectorText)) return cache.get(selectorText);
    let out;
    try {
        const root = parserFactory().astSync(selectorText);
        out = root.nodes.map((sel) => {
            const text = String(sel).trim();
            const spec = specificity(sel);
            const clone = sel.clone();
            let pseudoElement = "";
            let state = false;
            // pseudo-elements: top level only
            for (const n of [...clone.nodes])
                if (isPseudoElement(n)) {
                    pseudoElement += n.value.startsWith("::")
                        ? n.value
                        : ":" + n.value;
                    removeKeepingCompound(n);
                }
            // state pseudo-classes at any depth; a :not() holding one is dropped whole (wider)
            const states = [];
            clone.walkPseudos((p) => {
                if (STATE.has(p.value.toLowerCase())) states.push(p);
            });
            for (const p of states) {
                state = true;
                const not = insideNot(p);
                const target = not ?? p;
                if (target.parent) removeKeepingCompound(target);
            }
            return {
                text,
                match: String(clone).trim(),
                pseudoElement,
                state,
                spec,
            };
        });
    } catch (e) {
        out = [{ text: selectorText, error: String(e.message ?? e) }];
    }
    cache.set(selectorText, out);
    return out;
};
