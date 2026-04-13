const { parseSync } = require("@babel/core");
const { syncResolve } = require("@wyw-in-js/shared");
const { transformSync } = require("@wyw-in-js/transform/lib/transform");
const { TransformCacheCollection } = require("@wyw-in-js/transform/lib/cache");
const {
    loadWywOptions,
} = require("@wyw-in-js/transform/lib/transform/helpers/loadWywOptions");

/**
 * This babel plugin is responsible for processing Linaria `css`. It uses the
 * `@wyw-in-js` transform to extract and inject the CSS into the document at
 * runtime.
 *
 * Based on the original `@wyw-in-js/babel-preset`, which transforms the code
 * but does not generate any actual CSS output.
 */
module.exports = function injectLinariaCss(babel) {
    const cache = new TransformCacheCollection();

    return {
        name: "babel-plugin-inject-linaria-css",
        visitor: {
            Program(programPath, state) {
                const file = state.file;
                const pluginOptions = loadWywOptions({
                    displayName: true,
                    evaluate: true,
                });

                // return early if file does not need css extraction
                if (!programPath.toString().includes("@linaria/core")) {
                    return;
                }

                const result = transformSync(
                    {
                        babel,
                        cache,
                        options: {
                            filename: file.opts.filename,
                            root: file.opts.root ?? undefined,
                            inputSourceMap:
                                file.opts.inputSourceMap ?? undefined,
                            pluginOptions: pluginOptions,
                        },
                    },
                    file.code,
                    syncResolve
                );

                if (result.cssText) {
                    const codeWithInjectedCss = `${result.code}
(function() {
    if (typeof document === "undefined" || !${JSON.stringify(
        result.cssText
    )}) return;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(${JSON.stringify(
        result.cssText
    )}));

    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(style);
})();
`;

                    // replace original source code with transformed code + css injection after Linaria extraction
                    programPath.replaceWith(
                        parseSync(codeWithInjectedCss, {
                            filename: file.opts.filename,
                            ast: true,
                        }).program
                    );
                }
            },
        },
    };
};
