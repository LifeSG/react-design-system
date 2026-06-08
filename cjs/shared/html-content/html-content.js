"use strict";var e=require("styled-components"),t=require("../../theme/index.js");exports.applyHtmlContentStyle=o=>{const{textSize:i}=o||{};return e.css`
        // Text styling
        ${i&&t.Font[`${i}-regular`]}

        strong {
            font-weight: ${t.Font.Spec["weight-semibold"]};
            ${i&&t.Font[`${i}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${t.Font.Spec["weight-semibold"]};
            ${i&&t.Font[`${i}-semibold`]}
            color: ${t.Colour.hyperlink};
            text-decoration: underline;

            svg {
                color: ${t.Colour["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${t.Colour["hyperlink-hover"]};

                svg {
                    color: ${t.Colour["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `};
//# sourceMappingURL=html-content.js.map
