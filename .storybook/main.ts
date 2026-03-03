import type { StorybookConfig } from "@storybook/react-webpack5";
import { fileURLToPath } from "node:url";
import path, { dirname } from "path";
import remarkGfm from "remark-gfm";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
    webpackFinal: async (config, { configType }) => {
        const isProd = configType === "PRODUCTION";

        if (config.module) {
            config.module.rules = config.module.rules ?? [];

            config.module.rules.push({
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: [
                    {
                        loader: "@wyw-in-js/webpack-loader",
                        options: {
                            sourceMap: !isProd,
                        },
                    },
                ],
            });
        }

        if (isProd) {
            config.plugins = config.plugins ?? [];
            config.plugins.push(
                new MiniCssExtractPlugin({
                    filename: "[name].[contenthash].css",
                })
            );

            if (config.module?.rules) {
                config.module.rules = config.module.rules.map((rule: any) => {
                    if (
                        rule &&
                        typeof rule === "object" &&
                        rule.test instanceof RegExp &&
                        rule.test.test("file.css") &&
                        Array.isArray(rule.use)
                    ) {
                        return {
                            ...rule,
                            use: rule.use.map((u: any) => {
                                if (
                                    typeof u === "string" &&
                                    u.includes("style-loader")
                                ) {
                                    return MiniCssExtractPlugin.loader;
                                }
                                if (
                                    u &&
                                    typeof u === "object" &&
                                    u.loader?.includes("style-loader")
                                ) {
                                    return {
                                        loader: MiniCssExtractPlugin.loader,
                                    };
                                }
                                return u;
                            }),
                        };
                    }
                    return rule;
                });
            }
        }

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
