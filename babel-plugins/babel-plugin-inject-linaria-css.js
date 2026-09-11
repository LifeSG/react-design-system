const { parseSync } = require("@babel/core");
const { syncResolve } = require("@wyw-in-js/shared");
const {
    loadWywOptions,
    TransformCacheCollection,
} = require("@wyw-in-js/transform");
const { transformSync } = require("@wyw-in-js/transform/lib/transform");

/**
 * This babel plugin is responsible for processing Linaria `css`. It uses the
 * `@wyw-in-js` transform to extract and inject the CSS into the document at
 * runtime.
 *
 * Based on the original `@wyw-in-js/babel-preset`, which transforms the code
 * but does not generate any actual CSS output.
 */
/**
 * Drops every rule whose selector uses `:has()` from an extracted stylesheet.
 *
 * jsdom cannot cope with `:has()`. Its cascade
 * (jsdom/living/helpers/style-rules.js) hands each rule's selectorText to nwsapi
 * on every getComputedStyle call, rrweb-cssom's parse of a full sheet can corrupt
 * a `:has()` selector into an invalid one, and jsdom's matchesDontThrow has no
 * try/catch — so the SyntaxError escapes getComputedStyle and fails whichever
 * suite happened to call getByRole, however unrelated it is to the stylesheet.
 *
 * No coverage is lost: jsdom has no `:has()` cascade support, so these rules
 * could never apply in a unit test. Their visual effect is covered by the e2e
 * suites, which run in real browsers. Without this, every `:has()` rule in src
 * has to hide inside an at-rule to stay away from jsdom.
 *
 * Walks the sheet with brace balancing rather than a CSS parser: at-rule bodies
 * are recursed into, and an at-rule left empty is dropped with them.
 */
function stripHasRules(cssText) {
    let out = "";
    let depth = 0;
    let start = 0;

    for (let i = 0; i < cssText.length; i++) {
        if (cssText[i] === "{") {
            depth++;
            continue;
        }
        if (cssText[i] !== "}" || --depth !== 0) {
            continue;
        }

        const chunk = cssText.slice(start, i + 1);
        const brace = chunk.indexOf("{");
        const prelude = chunk.slice(0, brace);
        start = i + 1;

        if (prelude.trimStart().startsWith("@")) {
            const body = stripHasRules(chunk.slice(brace + 1, -1));
            if (body.trim()) {
                out += `${prelude}{${body}}`;
            }
        } else if (!prelude.includes(":has(")) {
            out += chunk;
        }
    }

    return out + cssText.slice(start);
}

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
                    /*
                     * Gated on the un-stripped text: the transformed code has to
                     * replace the source whenever Linaria extracted anything,
                     * even if stripping leaves nothing to inject, or the runtime
                     * `css` tag survives and throws.
                     */
                    const cssText = stripHasRules(result.cssText);

                    const codeWithInjectedCss = `${result.code}
(function() {
    if (typeof document === "undefined" || !${JSON.stringify(cssText)}) return;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(${JSON.stringify(cssText)}));

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
