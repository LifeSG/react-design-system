const path = require("path");
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
    ],
    staticDirs: ["../public"],
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];
        // // removing the existing storybook css loaders because -> https://lifesaver.codes/answer/a-working-example-with-postcss-for-storybook-v5
        // config.module.rules = config.module.rules.filter(
        //     (f) => f.test.toString() !== "/\\.css$/"
        // );
        // config.module.rules.push({
        //     test: /\.css$/,
        //     use: [
        //         "style-loader",
        //         {
        //             loader: "css-loader",
        //             options: { modules: false, importLoaders: 1 },
        //         },
        //     ],
        //     include: path.resolve(__dirname, "../"),
        // });
        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
