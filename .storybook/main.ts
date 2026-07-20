import type { StorybookConfig } from "@storybook/react-webpack5";
import { fileURLToPath } from "node:url";
import path, { dirname } from "path";
import remarkGfm from "remark-gfm";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { ProgressPlugin } = webpack;
let lastProgressBucket = -1;

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
        config.stats = "errors-warnings";
        config.infrastructureLogging = {
            ...config.infrastructureLogging,
            level: "error",
        };

        if (config.plugins) {
            config.plugins = config.plugins.filter(
                (plugin) => plugin?.constructor?.name !== "ProgressPlugin"
            );
        }

        config.plugins ??= [];
        config.plugins.push(
            new ProgressPlugin((value) => {
                const percent = Math.floor(value * 100);
                const bucket = percent === 100 ? 10 : Math.floor(percent / 10);

                // Rebuilds restart progress from a lower value, so reset milestone tracking.
                if (bucket < lastProgressBucket) {
                    lastProgressBucket = -1;
                }

                if (bucket <= lastProgressBucket) {
                    return;
                }

                lastProgressBucket = bucket;

                if (percent === 100) {
                    console.log("[storybook] build complete");
                    return;
                }

                console.log(`[storybook] building... ${bucket * 10}%`);
            })
        );

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
                            react: { unknown: "allow" },
                            dayjs: { unknown: "allow" },
                            "dayjs/*": {
                                unknown: "allow",
                            },
                            "./src/theme/**": {
                                unknown: "allow",
                            },
                            "./src/util/*": {
                                unknown: "allow",
                            },
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
