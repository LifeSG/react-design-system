import withLinaria, { LinariaConfig } from "next-with-linaria";
import type { NextConfig } from "next";
import path from "node:path";

const ciConfig: NextConfig = {
    turbopack: {
        root: path.join(__dirname),
    },
    typescript: {
        tsconfigPath: "tsconfig.ci.json",
    },
};

const devConfig: LinariaConfig = withLinaria({
    turbopack: {
        root: path.join(__dirname, "../../"),
        resolveAlias: {
            "@lifesg/react-design-system": path.join(__dirname, "../../src"),
            src: path.join(__dirname, "../../src"),
        },
    },
    typescript: {
        tsconfigPath: "tsconfig.json",
    },
    transpilePackages: ["@lifesg/react-design-system", "../../src"],
});

export default process.env.CI ? ciConfig : devConfig;
