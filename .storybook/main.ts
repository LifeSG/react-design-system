import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-webpack5";
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
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        config.resolve!.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];

        if (config.module?.rules) {
            config.module.rules.push({
                test: /\.(tsx|ts|js|mjs|jsx)$/,
                use: [{ loader: "@wyw-in-js/webpack-loader" }],
                exclude: [
                    /node_modules/,
                    path.resolve(process.cwd(), "storybook-stories.js"),
                    path.resolve(process.cwd(), "storybook-config-entry.js"),
                ],
            });
        }

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
