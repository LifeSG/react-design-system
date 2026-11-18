import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(here, "../../../..");

// LIB=published (default): the npm install in this folder.
// LIB=local: run.sh symlinks node_modules/@lifesg/react-design-system to the repo's
//   dist/ (run `npm run build` at the repo root first). A Turbopack alias on the
//   package name does NOT apply to its subpath imports and silently builds the
//   published copy, so the symlink is what swaps the library, not this config.
//   React and friends are pinned here because dist/ would otherwise resolve them
//   from the repo root (React 17).
// PIN_DEPS=1: run-consumer.sh with LIB=<path> (E9) needs the same pinning as local.
const useLocal = process.env.LIB === "local" || process.env.PIN_DEPS === "1";
const pinned = [
    "react",
    "react-dom",
    "@floating-ui/react",
    "@lifesg/react-icons",
];
const pin = (name) => path.join(here, "node_modules", name);
// Turbopack alias targets must be relative to `root`, not absolute
const rel = (abs) => "./" + path.relative(repoRoot, abs);

// CSS_CHUNKING: unset (Next default), "strict", "loose" or "graph".
const cssChunking = process.env.CSS_CHUNKING || undefined;

export default {
    distDir: process.env.DIST ?? ".next",
    outputFileTracingRoot: repoRoot,
    typescript: { ignoreBuildErrors: true },
    experimental: cssChunking ? { cssChunking } : {},
    turbopack: {
        root: repoRoot,
        resolveAlias: useLocal
            ? Object.fromEntries(pinned.map((n) => [n, rel(pin(n))]))
            : {},
    },
    webpack(config) {
        if (useLocal) {
            // Not react / react-dom: Next aliases those to its own compiled copies for
            // the app router, and replacing them yields two Reacts ("useContext of null").
            for (const n of pinned.filter((n) => !n.startsWith("react")))
                config.resolve.alias[n] = pin(n);
        }
        return config;
    },
};
