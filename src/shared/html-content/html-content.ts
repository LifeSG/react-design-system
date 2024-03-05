import { css } from "styled-components";
import { Color } from "../../color";
import { TextLinkSizeType, TextSizeType, TextStyleHelper } from "../../text";

interface HtmlContentStyleOptions {
    textColor?: string | ((props: any) => string);
}

export const applyHtmlContentStyle = (
    textStyle: TextSizeType | TextLinkSizeType,
    options?: HtmlContentStyleOptions
) => {
    const { textColor = Color.Neutral[1] } = options || {};

    return css`
        // Text
        ${TextStyleHelper.getTextStyle(textStyle, "regular")}
        color: ${textColor};

        a,
        strong {
            ${TextStyleHelper.getTextStyle(textStyle, "semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            color: ${Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Color.Secondary};

                svg {
                    color: ${Color.Secondary};
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
