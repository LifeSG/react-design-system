import type { StorybookConfig } from "@storybook/react-webpack5";
import { fileURLToPath } from "node:url";
import path, { dirname } from "path";
import remarkGfm from "remark-gfm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@storybook/addon-themes",
        "@storybook-community/storybook-dark-mode",
        {
            name: "@storybook/addon-docs",
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
    ],
    features: { interactions: false, sidebarOnboardingChecklist: false },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        config.module?.rules?.unshift({
            test: /\.(js|jsx|ts|tsx)$/,
            include: [
                path.resolve(__dirname, "../src"),
                path.resolve(__dirname, "../stories"),
            ],
            exclude: /node_modules/,
            use: [
                {
                    loader: "@wyw-in-js/webpack-loader",
                    options: {
                        sourceMap: process.env.NODE_ENV !== "production",
                        importOverrides: {
                            dayjs: { unknown: "allow" },
                            "dayjs/plugin/customParseFormat": {
                                unknown: "allow",
                            },
                            "dayjs/plugin/isBetween": { unknown: "allow" },
                            "dayjs/plugin/isSameOrAfter": { unknown: "allow" },
                            "dayjs/plugin/isSameOrBefore": { unknown: "allow" },
                            "dayjs/plugin/timezone": { unknown: "allow" },
                            "./src/theme/tokens/spacing.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/border.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/breakpoint.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/colour.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/component.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/font.ts": { unknown: "allow" },
                            "./src/theme/tokens/media-query.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/motion.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/radius.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/tokens/shadow.ts": {
                                unknown: "allow",
                            },
                            "./src/theme/utils/font.ts": { unknown: "allow" },
                        },
                    },
                },
            ],
        });

        config.resolve!.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];

        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
};
export default config;
