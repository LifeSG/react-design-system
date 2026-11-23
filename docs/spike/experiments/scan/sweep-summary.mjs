// Spike 01 / E8 (Q6): summarise diff-sweep.mjs results by component.
// Usage: node sweep-summary.mjs ../sweep/results-flat-vs-depthfull.jsonl [...more]
// Labels: the 4 F17 layering components, the modal, and the stories F17 classified as
// render noise (sweep/untraced-verdict.md, repeat-check.sh); anything else is "UNEXPLAINED".
import fs from "node:fs";
import path from "node:path";

const LAYERING = new Set([
    "navbar",
    "otp-verification",
    "smart-app-banner",
    "unit-number",
]);
const NOISE = new Set([
    "toast",
    "timetable/loading",
    "countdown-timer",
    "fullscreen-image-carousel",
    "animations/dots-loading-spinner",
    "animations",
]);
const label = (component, story) =>
    LAYERING.has(component)
        ? "F17 layering flip"
        : component === "modal-v2"
        ? "modal-v2"
        : NOISE.has(component) || NOISE.has(`${component}/${story}`)
        ? "noise (F17)"
        : "UNEXPLAINED";

for (const file of process.argv.slice(2)) {
    const lines = fs
        .readFileSync(file, "utf8")
        .trim()
        .split("\n")
        .map((l) => JSON.parse(l));
    const differ = lines.filter(
        (l) => l.diffPixels || l.sizeMismatch || l.missing
    );
    const by = {};
    for (const l of differ) {
        const [component, story] = l.image.replace(/\.png$/, "").split("__");
        const k = `${label(component, story)} | ${component}`;
        (by[k] ??= { renders: 0, max: 0, stories: new Set(), modes: new Set() })
            .renders++;
        by[k].max = Math.max(by[k].max, l.diffPixels ?? 0);
        by[k].stories.add(story);
        by[k].modes.add(l.mode);
        if (l.sizeMismatch) by[k].size = (by[k].size ?? 0) + 1;
    }
    console.log(
        `\n${path.basename(file)}: ${differ.length} of ${
            lines.length
        } renders differ`
    );
    for (const [k, v] of Object.entries(by).sort())
        console.log(
            `  ${k}: ${v.renders} renders (${[...v.modes].join(",")}), max ${
                v.max
            }px${v.size ? `, ${v.size} size mismatch` : ""}; ${[...v.stories]
                .slice(0, 6)
                .join(", ")}${v.stories.size > 6 ? " ..." : ""}`
        );
}
