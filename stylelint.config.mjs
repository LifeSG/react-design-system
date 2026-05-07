export default {
    extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
    plugins: ["@stylistic/stylelint-plugin"],
    rules: {
        "declaration-block-no-duplicate-properties": true,
        "no-descending-specificity": true,
        "selector-max-id": 0,
        "custom-property-empty-line-before": "never",
        "color-hex-length": "long",
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"],
            },
        ],
        "selector-no-vendor-prefix": [
            true,
            {
                ignoreSelectors: ["::-webkit-input-placeholder"],
            },
        ],

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

                // Linaria class names are auto-generated at build time; the
                // selector-class-pattern rule cannot validate interpolated
                // selectors like .${knob} because postcss-linaria exposes an
                // empty class node during parsing.
                "selector-class-pattern": null,

                // Linaria interpolations in font-family become placeholders
                // (e.g. pcss-lin1), which trigger false positives for both
                // quote and generic-family checks.
                "font-family-name-quotes": null,
                "font-family-no-missing-generic-family-keyword": null,

                // Ignore Linaria placeholder values like pcss-lin0 and -pcss-lin1.
                "declaration-property-value-no-unknown": [
                    true,
                    {
                        ignoreProperties: {
                            "/.+/": [/(?:^|[\s(,])-?pcss-lin\d+(?=$|[\s),])/],
                        },
                    },
                ],
            },
        },
    ],
};
