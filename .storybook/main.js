const path = require("path");
module.exports = {
    stories: [
        "../stories-new/**/*.mdx",
        "../stories-new/**/*.stories.@(ts|tsx|mdx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        // "@storybook/addon-a11y",
        // "@react-theming/storybook-addon",
        "@storybook/addon-mdx-gfm",
    ],
    staticDirs: ["../public"],
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];

        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            fastRefresh: true,
        },
    },
    docs: {
        autodocs: true,
    },
};
