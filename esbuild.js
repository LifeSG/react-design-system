const esbuild = require("esbuild");
const { style } = require("./esbuild-plugin-postcss");
const { globSync } = require("glob");

const files = globSync("src/**/*.{ts,tsx}", { ignore: "src/**/types.ts" });

let filePlugin = {
    name: "files",
    setup(build) {
        // Mark all relative paths as external
        build.onResolve({ filter: /(^.\/)|(^..\/)/ }, (args) => {
            if (args.path.startsWith("./src")) {
                return;
            }
            return { path: args.path, external: true };
        });
    },
};

esbuild
    .build({
        entryPoints: files,
        bundle: true,
        external: ["./*", "../*"],
        outdir: "dist",
        plugins: [
            style({
                plugins: [require("postcss-import")],
            }),
            filePlugin,
        ],
        loader: { ".png": "dataurl" },
        packages: "external",
    })
    .catch((e) => console.error(e.message));
