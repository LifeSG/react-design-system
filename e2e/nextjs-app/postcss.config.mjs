import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
    plugins: process.env.CI
        ? []
        : [
              [
                  "postcss-import",
                  {
                      path: [path.resolve(__dirname, "../../")],
                  },
              ],
              [
                  "postcss-mixins",
                  {
                      mixinsFiles: path.resolve(
                          __dirname,
                          "../../src/theme/styles/presets/**/*.css"
                      ),
                  },
              ],
          ],
};

export default config;
