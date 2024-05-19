import { css } from "styled-components";
import { Color } from "../../color";
import { FontFamily } from "../../spec/text-spec/font-spec";
import { TextLinkSizeType, TextSizeType, TextStyleHelper } from "../../text";

export interface HtmlContentStyleOptions {
    textSize?: TextSizeType | TextLinkSizeType | undefined;
    textColor?: string | ((props: any) => string) | undefined;
}

export const applyHtmlContentStyle = (options?: HtmlContentStyleOptions) => {
    const { textSize, textColor } = options || {};

    return css`
        // Text styling
        ${textSize && TextStyleHelper.getTextStyle(textSize, "regular")}
        ${textColor &&
        css`
            color: ${textColor};
        `}
        
        strong {
            font-family: ${FontFamily.OpenSans.Semibold};
            ${textSize && TextStyleHelper.getTextStyle(textSize, "semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${FontFamily.OpenSans.Semibold};
            ${textSize && TextStyleHelper.getTextStyle(textSize, "semibold")}
            color: ${Color.Primary};
            text-decoration: none;

            svg {
                color: ${Color.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
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
