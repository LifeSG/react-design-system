import path from "path";
import remarkGfm from "remark-gfm";

module.exports = {
    stories: [
        "../stories/**/!(*.stories).mdx",
        "../stories/**/*.stories.@(ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-themes",
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
        config.resolve.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];
        return config;
    },
    framework: "@storybook/react-webpack5",
    docs: {
        autodocs: true,
    },
};
