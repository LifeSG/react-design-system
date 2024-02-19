import { css } from "styled-components";
import { Color } from "../../color";
import { TextLinkSizeType, TextSizeType, TextStyleHelper } from "../../text";

export const HtmlContentMixin = (
    textStyle: TextSizeType | TextLinkSizeType
) => css`
    // Text
    ${TextStyleHelper.getTextStyle(textStyle, "regular")}
    color: ${Color.Neutral[1]};

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
