import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
    plugins: [
        [
            "postcss-import",
            {
                path: [path.resolve(__dirname, "../../")],
            },
        ],
        [
            "postcss-mixins",
            {
                mixinsFiles: path.join(
                    path.resolve(__dirname, "../../src/theme/styles/presets"),
                    "**/*.css"
                ),
            },
        ],
    ],
};

export default config;
