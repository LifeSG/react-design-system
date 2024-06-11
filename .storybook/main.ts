import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-themes",
        "@storybook/addon-interactions",
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
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    parser: "typescript",
                    injectStoryParameters: true,
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
