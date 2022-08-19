const path = require("path");

module.exports = {
    stories: ["../src/stories/**/*.stories.@(ts|tsx|mdx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-controls",
        "@storybook/addon-postcss",
        "@react-theming/storybook-addon",
    ],
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];
        // removing the existing storybook css loaders because -> https://lifesaver.codes/answer/a-working-example-with-postcss-for-storybook-v5
        config.module.rules = config.module.rules.filter(
            (f) => f.test.toString() !== "/\\.css$/"
        );
        config.module.rules.push({
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: { modules: false, importLoaders: 1 },
                },
            ],
            include: path.resolve(__dirname, "../"),
        });
        return config;
    },
};
