import{css as e}from"styled-components";import{V3_Font as i,V3_Colour as t}from"../../v3_theme/index.js";const o=o=>{const{textSize:l}=o||{};return e`
        // Text styling
        ${l&&i[`${l}-regular`]}

        strong {
            font-weight: ${i.Spec["weight-semibold"]};
            ${l&&i[`${l}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${i.Spec["weight-semibold"]};
            ${l&&i[`${l}-semibold`]}
            color: ${t.hyperlink};
            text-decoration: underline;

            svg {
                color: ${t["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${t["hyperlink-hover"]};

                svg {
                    color: ${t["icon-hover"]};
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
    `};export{o as applyHtmlContentStyle};
//# sourceMappingURL=html-content.js.map
