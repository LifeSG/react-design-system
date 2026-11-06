// Usage: node simulate-fixes.mjs [lib ...]   (default: flat styleedge)
// Spike 01 / F17 follow-up: simulate the fixes for the layering changes, decided
// 2026-10-28 (and the chevron, 2026-11-03), without touching src/. Copies ../final/libs/<lib> to ../final/libs/<lib>-fixed
// and inserts each fix right after the component's own rule, inside its own layer, as a
// source fix in that component's style file would compile.
//   Icons: the consuming component's size is intended, so it must beat ClickableIcon's
//     `.x svg` (0,1,1) in a single layer too. Doubled class (0,2,0).
//   Read-only inputs: today's input-group value is intended, so the component re-declares
//     input-group's attribute rules on its own class: same specificity, its own layer.
// The same patch goes into every library, so `<lib>-fixed` libraries should render the same;
// any remaining difference between flat-fixed and styleedge-fixed is layering.
import fs from "node:fs";
import path from "node:path";

const FIXES = [
    {
        name: "smart-app-banner dismiss icon keeps 1.25rem",
        file: "smart-app-banner/smart-app-banner.styles_r6yjq9.css",
        after: ".cp9l7rn{color:var(--fds-colour-icon);height:1.25rem;width:1.25rem;}",
        insert: ".cp9l7rn.cp9l7rn{height:1.25rem;width:1.25rem;}",
    },
    {
        name: "navbar menu icon keeps 1.5rem",
        file: "navbar/navbar.styles_koy0c7.css",
        after: ".m11vsg37{height:1.5rem;width:1.5rem;color:var(--fds-navbar-colour-icon);}",
        insert: ".m11vsg37.m11vsg37{height:1.5rem;width:1.5rem;}",
    },
    {
        // found by the e2e rerun (drawer-trace.txt): drawer only, so the sweep never saw it.
        // Scoped to the mobile expand button so the desktop chevron keeps 1.125rem.
        name: "navbar mobile submenu chevron keeps 1.25rem (decided 2026-11-03)",
        file: "navbar/navbar-items.styles_1klnd8i.css",
        after: ".ej7h5do{padding:0.5rem;margin:auto 0;}",
        insert: ".ej7h5do .c160mxwv{height:1.25rem;width:1.25rem;}",
    },
    {
        name: "OTP email input: input-group read-only and no-border padding 0",
        file: "otp-verification/contact-input-section.styles_odrjvt.css",
        after: ".e1ik236m{padding:0 var(--fds-spacing-16);width:100%;background:transparent;}",
        insert: '.e1ik236m[data-no-border="true"],.e1ik236m[data-read-only="true"]{padding:0;}',
    },
    {
        name: "OTP phone input: input-group read-only and no-border padding 0",
        file: "otp-verification/contact-input-section.styles_odrjvt.css",
        after: ".pqn3wrd{padding:0 var(--fds-spacing-16);background:transparent;}",
        insert: '.pqn3wrd[data-no-border="true"],.pqn3wrd[data-read-only="true"]{padding:0;}',
    },
    {
        name: "unit-number hash: input-group read-only and right-position margins",
        file: "unit-number/unit-number-input.styles_8yizj.css",
        after: ".h1ujh1ah{margin-right:0.5rem;}",
        insert:
            '.h1ujh1ah[data-read-only="true"]{margin-right:var(--fds-spacing-4);}' +
            '.h1ujh1ah[data-position="right"]{margin-right:0;}' +
            '.h1ujh1ah[data-position="right"][data-read-only="true"]{margin-right:0;}',
    },
];

const libsDir = path.resolve("../final/libs");
const libs = process.argv.slice(2).length
    ? process.argv.slice(2)
    : ["flat", "styleedge"];
for (const lib of libs) {
    const src = path.join(libsDir, lib);
    const out = path.join(libsDir, `${lib}-fixed`);
    if (!fs.existsSync(path.join(src, "timeline")))
        throw new Error(`${src} missing: run ../final/prepare-libs.sh`);
    fs.rmSync(out, { recursive: true, force: true });
    fs.cpSync(src, out, { recursive: true });
    // ESM and cjs builds each carry a copy of the CSS
    for (const fix of FIXES)
        for (const file of [fix.file, path.join("cjs", fix.file)]) {
            const p = path.join(out, file);
            const css = fs.readFileSync(p, "utf8");
            const hits = css.split(fix.after).length - 1;
            if (hits !== 1)
                throw new Error(
                    `${lib}/${file}: expected 1 match, got ${hits}`
                );
            fs.writeFileSync(p, css.replace(fix.after, fix.after + fix.insert));
        }
    console.log(`${lib}-fixed: ${FIXES.length} fixes x 2 builds`);
}
