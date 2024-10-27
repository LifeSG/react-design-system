import { css } from "styled-components";
import { Colour, Font, FontSpec } from "../../theme";
import { TypographySizeType } from "../../theme/font/types";

export interface HtmlContentStyleOptions {
    textSize?: TypographySizeType | undefined;
}

export const applyHtmlContentStyle = (options?: HtmlContentStyleOptions) => {
    const { textSize } = options || {};

    return css`
        // Text styling
        ${textSize && Font[`${textSize}-regular`]}

        strong {
            font-weight: ${FontSpec["weight-semibold"]};
            ${textSize && Font[`${textSize}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${FontSpec["weight-semibold"]};
            ${textSize && Font[`${textSize}-semibold`]}
            color: ${Colour.hyperlink};
            text-decoration: none;

            svg {
                color: ${Colour["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Colour["hyperlink-hover"]};

                svg {
                    color: ${Colour["icon-hover"]};
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
