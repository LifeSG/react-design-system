import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(here, "../../../..");

// LIB=published (default): the npm install in this folder.
// LIB=local: the repo's dist/ (run `npm run build` at the repo root first),
//   with React and friends pinned to this folder so dist/ does not pick up the
//   repo root's React 17.
const useLocal = process.env.LIB === "local";
const lib = path.join(repoRoot, "dist");
const pinned = [
    "react",
    "react-dom",
    "@floating-ui/react",
    "@lifesg/react-icons",
];
const pin = (name) => path.join(here, "node_modules", name);

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
            ? {
                  "@lifesg/react-design-system": lib,
                  ...Object.fromEntries(pinned.map((n) => [n, pin(n)])),
              }
            : {},
    },
    webpack(config) {
        if (useLocal) {
            config.resolve.alias["@lifesg/react-design-system"] = lib;
            for (const n of pinned) config.resolve.alias[n] = pin(n);
        }
        return config;
    },
};
