import withLinaria, { LinariaConfig } from "next-with-linaria";
import type { NextConfig } from "next";
import path from "node:path";

const ciConfig: NextConfig = {
    // FIXME: BOOKINGSG-9316: Turbopack is currently disabled due to an issue with CSS load order. Re-enable once the issue is resolved.
    // turbopack: {
    //     root: path.join(__dirname),
    // },
    outputFileTracingRoot: path.join(__dirname),
    typescript: {
        tsconfigPath: "tsconfig.ci.json",
    },
    // TODO: remove Styled Components after V4 migration
    compiler: {
        styledComponents: true,
    },
};

const devConfig: LinariaConfig = withLinaria({
    devIndicators: false,
    // E2E browser runs in Docker and reaches the app via host.docker.internal.
    // Allow this dev origin so HMR websocket upgrades are not rejected.
    allowedDevOrigins: ["host.docker.internal"],
    // FIXME: BOOKINGSG-9316: Turbopack is currently disabled due to an issue with CSS load order. Re-enable once the issue is resolved.
    // turbopack: {
    //     root: path.join(__dirname, "../../"),
    //     resolveAlias: {
    //         "@lifesg/react-design-system": "../../src",
    //     },
    // },
    outputFileTracingRoot: path.join(__dirname, "../../"),
    typescript: {
        tsconfigPath: "tsconfig.json",
    },
    transpilePackages: [
        // Point to source; changes will reflect in real-time for local development
        "@lifesg/react-design-system",
    ],
});

export default process.env.CI ? ciConfig : devConfig;
