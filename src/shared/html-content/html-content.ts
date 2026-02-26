import { css } from "styled-components";
import { V3_Colour, V3_Font } from "../../v3_theme";
import { V3_TypographySizeType } from "../../v3_theme/font/types";

export interface HtmlContentStyleOptions {
    textSize?: V3_TypographySizeType | undefined;
}

export const applyHtmlContentStyle = (options?: HtmlContentStyleOptions) => {
    const { textSize } = options || {};

    return css`
        // Text styling
        ${textSize && V3_Font[`${textSize}-regular`]}

        strong {
            font-weight: ${V3_Font.Spec["weight-semibold"]};
            ${textSize && V3_Font[`${textSize}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${V3_Font.Spec["weight-semibold"]};
            ${textSize && V3_Font[`${textSize}-semibold`]}
            color: ${V3_Colour.hyperlink};
            text-decoration: underline;

            svg {
                color: ${V3_Colour["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${V3_Colour["hyperlink-hover"]};

                svg {
                    color: ${V3_Colour["icon-hover"]};
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
    `;
};
