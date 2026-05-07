export default {
    extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
    plugins: ["@stylistic/stylelint-plugin"],
    rules: {
        "declaration-block-no-duplicate-properties": true,
        "no-descending-specificity": true,
        "selector-max-id": 0,
        "custom-property-empty-line-before": "never",
        "color-hex-length": "long",

        "@stylistic/color-hex-case": "upper",
        "@stylistic/indentation": 4,
        "@stylistic/max-empty-lines": 1,
    },
    overrides: [
        {
            /*
            Taken from linaria's stylelint-config-standard-linaria package,
            with some adjustments to work with our codebase.

            See: https://github.com/callstack/linaria/blob/master/packages/stylelint-config-standard-linaria/src/index.js
            */
            files: ["**/*.ts", "**/*.tsx"],
            customSyntax: "@linaria/postcss-linaria",
            rules: {
                "property-no-vendor-prefix": true,
                "string-no-newline": true,
                "value-no-vendor-prefix": true,
                "no-empty-source": null,
                "comment-empty-line-before": [
                    "always",
                    {
                        except: ["first-nested"],
                        ignore: ["stylelint-commands"],
                        ignoreComments: [/pcss-lin/],
                    },
                ],
                "no-invalid-double-slash-comments": true,

                // Ignore Linaria placeholder values like pcss-lin0 and -pcss-lin1.
                "declaration-property-value-no-unknown": [
                    true,
                    {
                        ignoreProperties: {
                            "/.+/": [/(?:^|\s)-?pcss-lin\d+(?:\s|$)/],
                        },
                    },
                ],
            },
        },
    ],
};
