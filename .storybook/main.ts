import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import remarkGfm from "remark-gfm";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-themes",
        "storybook-dark-mode",
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
    babel: (config) => {
        config.presets.push("@linaria");
        return config;
    },
    webpackFinal: async (config) => {
        config.resolve!.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];

        if (config?.module?.rules) {
            const isMatchTsx = (rule: any) =>
                rule?.test?.toString() === "/\\.(mjs|cjs|tsx?|jsx?)$/";
            const tsxKey = config?.module?.rules?.findIndex(isMatchTsx);
            if (tsxKey !== undefined && config?.module?.rules) {
                config.module.rules[tsxKey] = {
                    test: /\.(mjs|tsx?|jsx?)$/,
                    use: [
                        {
                            loader: require.resolve("babel-loader"),
                        },
                        {
                            loader: require.resolve(
                                "@wyw-in-js/webpack-loader"
                            ),
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                };
            }

            // Replace CSS loader
            const isMatchCss = (rule: any) =>
                rule.test.toString() === "/\\.css$/";
            const cssKey = config?.module?.rules?.findIndex(isMatchCss);
            if (cssKey !== undefined) {
                config.module.rules[cssKey] = {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                            options: { sourceMap: true },
                        },
                    ],
                };
            }
        }

        config?.plugins?.push(
            new MiniCssExtractPlugin({
                filename: "styles.css",
            })
        );

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

// https://github.com/callstack/linaria/issues/1376
// https://github.com/callstack/linaria/issues/1241
