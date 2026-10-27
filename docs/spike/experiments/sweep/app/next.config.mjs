import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pin = (n) => path.join(here, "node_modules", n);

export default {
    distDir: process.env.DIST ?? ".next",
    outputFileTracingRoot: path.join(here, "../../../../.."),
    typescript: { ignoreBuildErrors: true },
    // dist/ resolves react and friends from the repo root (React 17) unless pinned here
    webpack(config) {
        for (const n of ["@floating-ui/react", "@lifesg/react-icons"])
            config.resolve.alias[n] = pin(n);
        return config;
    },
};
