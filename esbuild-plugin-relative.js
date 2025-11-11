import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["app.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [envPlugin],
});
