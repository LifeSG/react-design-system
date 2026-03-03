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
