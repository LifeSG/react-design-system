// This file has been automatically migrated to valid ESM format by Storybook.
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    stories: [
        "../stories/**/!(*.stories).mdx",
        "../stories/**/*.stories.@(ts|tsx)",
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-babel",
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@storybook/addon-themes",
        "@storybook/addon-docs",
    ],
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        config.resolve.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];
        config.resolve.alias = {
            ...config.resolve.alias,
            "@storybook/blocks": path.resolve(
                __dirname,
                "../node_modules/@storybook/addon-docs/dist/blocks.js"
            ),
        };
        return config;
    },
    framework: "@storybook/react-webpack5",
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: (prop) => {
                if (prop.parent) {
                    return !prop.parent.fileName.includes("node_modules");
                }
                return true;
            },
            savePropValueAsString: true,
        },
    },
    docs: {
        defaultName: "Documentation",
    },
};
