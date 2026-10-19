import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

export default {
    distDir: process.env.DIST ?? ".next",
    turbopack: { root: path.join(here, "../../../..") },
    outputFileTracingRoot: path.join(here, "../../../.."),
    typescript: { ignoreBuildErrors: true },
};
