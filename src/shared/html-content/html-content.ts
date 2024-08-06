import { css } from "styled-components";
import { v2_Color } from "../../v2_color";
import { FontFamily } from "../../spec/text-spec/font-spec";
import { v2_TextSizeType, v2_TextStyleHelper } from "../../v2_text";

export interface HtmlContentStyleOptions {
    textSize?: v2_TextSizeType | undefined;
}

export const applyHtmlContentStyle = (options?: HtmlContentStyleOptions) => {
    const { textSize } = options || {};

    return css`
        // Text styling
        ${textSize && v2_TextStyleHelper.getTextStyle(textSize, "regular")}

        strong {
            font-family: ${FontFamily.OpenSans.Semibold};
            ${textSize && v2_TextStyleHelper.getTextStyle(textSize, "semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${FontFamily.OpenSans.Semibold};
            ${textSize && v2_TextStyleHelper.getTextStyle(textSize, "semibold")}
            color: ${v2_Color.Primary};
            text-decoration: none;

            svg {
                color: ${v2_Color.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${v2_Color.Secondary};

                svg {
                    color: ${v2_Color.Secondary};
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
