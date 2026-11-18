// Spike 01 / E9: consumer override matrix. Single source of truth for
//   make-overrides.mjs   (writes src/app/overrides/<mech>/)
//   measure-overrides.mjs (measures every page)
//   matrix-overrides.mjs  (prints the matrix and checks stability)
//
// A cell is (mechanism, target). The app's override value is distinctive per target, so
// a computed value equal to it means "the app won"; equal to the baseline page's value
// means "the library won".

export const COLOUR = "rgb(10, 20, 30)";

// el:   the measured element (querySelector from document, so portals are found)
// desc: the consumer's descendant selector for it (what a consumer writes today)
// folder: the library folder (= styleedge layer name) whose rule the app overrides
// token: a design token that feeds the property, for the token mechanisms (10-12)
export const TARGETS = [
    {
        id: "timeline",
        label: "Timeline title margin-bottom",
        folder: "timeline",
        el: '[data-testid="timeline-title"]',
        prop: "margin-bottom",
        value: "40px",
        desc: '.ovr-scope [data-testid="timeline-title"]',
    },
    {
        id: "button",
        label: "Button background-color (one folder)",
        folder: "button",
        el: '[data-testid="ovr-button"]',
        prop: "background-color",
        value: COLOUR,
        desc: '.ovr-scope [data-testid="ovr-button"]',
        token: { name: "--fds-colour-bg-primary", value: COLOUR },
    },
    {
        id: "navbar-icon",
        label: "Navbar menu icon svg width (F17 flip)",
        folder: "navbar",
        el: '[data-testid="button__mobile-menu"] svg',
        prop: "width",
        value: "40px",
        desc: '.ovr-scope [data-testid="button__mobile-menu"] svg',
    },
    {
        id: "textarea",
        label: "Read-only Textarea background-color (library !important)",
        folder: "input-textarea",
        el: '[data-testid="ovr-textarea"]',
        prop: "background-color",
        value: COLOUR,
        desc: '.ovr-scope [data-testid="ovr-textarea"]',
    },
    {
        id: "input-group",
        label: "Read-only InputGroup padding-left ([data-read-only])",
        folder: "input-group",
        el: '[data-testid="ovr-input-group"]',
        prop: "padding-left",
        value: "7px",
        desc: '.ovr-scope [data-testid="ovr-input-group"]',
    },
    {
        id: "modal",
        label: "Modal v2 content margin-left (portal)",
        folder: "modal-v2",
        el: '[data-testid="modal-content"]',
        prop: "margin-left",
        value: "40px",
        desc: '.ovr-modal [data-testid="modal-content"]',
        token: { name: "--fds-spacing-64", value: "40px" },
    },
];

// CSS files use the modern rgb() notation (stylelint); computed values read back as "rgb(r, g, b)"
const cssv = (v) => v.replace(/rgb\((\d+), (\d+), (\d+)\)/, "rgb($1 $2 $3)");
const decl = (t, imp = "") => `${t.prop}: ${cssv(t.value)}${imp};`;
const rule = (sel, t, imp) => `${sel} {\n    ${decl(t, imp)}\n}`;
const each = (fn) => TARGETS.map(fn).filter(Boolean).join("\n\n");
const wrap = (layer, body) =>
    `@layer ${layer} {\n${body.replace(/^/gm, "    ")}\n}`;
const tokenRule = () =>
    `[data-fds-theme="lifesg"] {\n${TARGETS.filter((t) => t.token)
        .map((t) => `    ${t.token.name}: ${cssv(t.token.value)};`)
        .join("\n")}\n}`;
const tokenObj = () =>
    Object.fromEntries(
        TARGETS.filter((t) => t.token).map((t) => [t.token.name, t.token.value])
    );
export const cls = (t) => `ovr-c-${t.id}`;
const camel = (p) => p.replace(/-(\w)/g, (_, c) => c.toUpperCase());

// globals: which src/app/globals.css the build uses
//   default  `@layer main, fds;` (documented setup)
//   reversed `@layer fds, main;`
//   none     no @layer statement
// via: what reaches the element. "css" = selector rules only; "class" = className on
//   the component; "style" = inline style prop; "token" = a token override.
export const MECHS = [
    {
        id: "m00",
        n: "0",
        label: "Baseline: no consumer override",
        globals: "default",
        via: "none",
    },
    {
        id: "m01",
        n: "1",
        label: "Unlayered, descendant selector",
        globals: "default",
        via: "css",
        css: () => each((t) => rule(t.desc, t)),
    },
    {
        id: "m01p",
        n: "1p",
        label: "Unlayered, descendant of the app wrapper, modal only (portal check)",
        globals: "default",
        via: "css",
        only: ["modal"],
        css: () =>
            rule(
                '.ovr-scope [data-testid="modal-content"]',
                TARGETS.find((t) => t.id === "modal")
            ),
    },
    {
        id: "m02",
        n: "2",
        label: "Unlayered, single class via className",
        globals: "default",
        via: "class",
        css: () => each((t) => rule("." + cls(t), t)),
    },
    {
        id: "m03",
        n: "3",
        label: "@layer main, descendant selector",
        globals: "default",
        via: "css",
        css: () =>
            wrap(
                "main",
                each((t) => rule(t.desc, t))
            ),
    },
    {
        id: "m04",
        n: "4",
        label: "Unlayered !important, descendant selector",
        globals: "default",
        via: "css",
        css: () => each((t) => rule(t.desc, t, " !important")),
    },
    {
        id: "m05",
        n: "5",
        label: "@layer main, !important",
        globals: "default",
        via: "css",
        css: () =>
            wrap(
                "main",
                each((t) => rule(t.desc, t, " !important"))
            ),
    },
    {
        id: "m06",
        n: "6",
        label: "Inline style prop",
        globals: "default",
        via: "style",
        styles: () =>
            Object.fromEntries(
                TARGETS.map((t) => [t.id, { [camel(t.prop)]: t.value }])
            ),
    },
    {
        id: "m07",
        n: "7",
        label: "Consumer declares `@layer fds, main;`, rule in main",
        globals: "reversed",
        via: "css",
        css: () =>
            wrap(
                "main",
                each((t) => rule(t.desc, t))
            ),
    },
    {
        id: "m08",
        n: "8",
        label: "No @layer statement in globals.css, rule in main",
        globals: "none",
        via: "css",
        css: () =>
            wrap(
                "main",
                each((t) => rule(t.desc, t))
            ),
    },
    {
        id: "m09a",
        n: "9a",
        label: "`@layer fds { }`, descendant selector",
        globals: "default",
        via: "css",
        css: () =>
            wrap(
                "fds",
                each((t) => rule(t.desc, t))
            ),
    },
    {
        id: "m09b",
        n: "9b",
        label: "`@layer fds.<folder> { }`, descendant selector",
        globals: "default",
        via: "css",
        css: () => each((t) => wrap("fds." + t.folder, rule(t.desc, t))),
    },
    {
        id: "m09c",
        n: "9c",
        label: "`@layer fds.<folder> { }`, single class via className",
        globals: "default",
        via: "class",
        css: () => each((t) => wrap("fds." + t.folder, rule("." + cls(t), t))),
    },
    {
        id: "m09d",
        n: "9d",
        label: "`@layer fds.<renamed> { }` (a layer the library does not declare), descendant",
        globals: "default",
        via: "css",
        css: () =>
            each((t) => wrap("fds." + t.folder + "-renamed", rule(t.desc, t))),
    },
    {
        id: "m10",
        n: "10",
        label: "Token override, unlayered `[data-fds-theme]` (documented)",
        globals: "default",
        via: "token",
        css: tokenRule,
    },
    {
        id: "m11a",
        n: "11a",
        label: "Token override, ThemeProvider `style` (documented)",
        globals: "default",
        via: "token",
        themeStyle: tokenObj,
    },
    {
        id: "m11b",
        n: "11b",
        label: "Token override, useApplyStyle (documented)",
        globals: "default",
        via: "token",
        applyStyle: tokenObj,
    },
    {
        id: "m12",
        n: "12",
        label: "Token override inside @layer main",
        globals: "default",
        via: "token",
        css: () => wrap("main", tokenRule()),
    },
    {
        id: "m13",
        n: "13",
        label: "CSS Modules class via className",
        globals: "default",
        via: "class",
        cssModule: () => each((t) => rule("." + cls(t), t)),
    },
    // 14, 15: hand-written pages (custom: true); make-overrides.mjs only writes their CSS.
    // Tailwind CSS is compiled by the Tailwind v4 CLI into a static file the page imports,
    // first (as a real app's globals.css would), so no postcss.config changes the other routes.
    {
        id: "m14p",
        n: "14p",
        label: "Tailwind v4 imported, no utilities (preflight only), Tailwind's default layers",
        globals: "default",
        via: "none",
        custom: true,
        tailwind: "default",
    },
    {
        id: "m14a",
        n: "14a",
        label: "Tailwind v4 utilities via className, Tailwind's default layers",
        globals: "default",
        via: "class",
        custom: true,
        tailwind: "default",
    },
    {
        id: "m14b",
        n: "14b",
        label: "Tailwind v4 utilities via className, `@layer theme, base, fds, components, utilities;`",
        globals: "none",
        via: "class",
        custom: true,
        tailwind: "fds",
    },
    {
        id: "m15",
        n: "15",
        label: "styled-components createGlobalStyle (runtime <style>), single class via className",
        globals: "default",
        via: "class",
        custom: true,
    },
];

// Tailwind utility per target, same values as TARGETS[].value
export const TAILWIND = {
    timeline: "mb-[40px]",
    button: "bg-[rgb(10,20,30)]",
    "navbar-icon": "w-[40px]",
    textarea: "bg-[rgb(10,20,30)]",
    "input-group": "pl-[7px]",
    modal: "ml-[40px]",
};

// intended winner: what the consumer means to happen. "library" only where the setup
// makes the library win by design (F12: `@layer main, fds;` exists so fds beats main).
export const intended = (m) =>
    ["m00", "m14p", "m03", "m12"].includes(m.id) ? "library" : "app";

// Every mechanism page is built and measured under every globals setup; the matrix
// reads each mechanism from its own setup (MECHS[].globals).
export const GLOBALS = ["default", "reversed", "none"];
