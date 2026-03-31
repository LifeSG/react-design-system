import { css } from "@linaria/core";

import { Colour } from "../theme/tokens/colour";
import { Font } from "../theme/tokens/font";

export const tokens = {
    rootFontFamily: "--fds-internal-markup-root-fontFamily",
    rootFontVariant: "--fds-internal-markup-root-fontVariant",
    rootFontSize: "--fds-internal-markup-root-fontSize",
    rootFontWeight: "--fds-internal-markup-root-fontWeight",
    rootLineHeight: "--fds-internal-markup-root-lineHeight",
    rootLetterSpacing: "--fds-internal-markup-root-letterSpacing",
} as const;

export const baseMarkup = css`
    strong {
        font-weight: ${Font.Spec["weight-semibold"]};
    }

    p {
        margin: 0;
    }

    a {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour.hyperlink};
        text-decoration: underline;

        svg {
            color: ${Colour["icon-primary"]};
            height: 1lh;
            width: 1em;
            margin-left: 0.4rem;
            vertical-align: middle;
        }

        &:hover,
        &:active,
        &:visited,
        &:focus {
            color: ${Colour["hyperlink-hover"]};

            svg {
                color: ${Colour["icon-hover"]};
            }
        }
    }

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

export const sizedMarkup = css`
    font-family: var(${tokens.rootFontFamily}, inherit);
    font-variant: var(${tokens.rootFontVariant}, inherit);
    font-size: var(${tokens.rootFontSize}, inherit);
    font-weight: var(${tokens.rootFontWeight}, inherit);
    line-height: var(${tokens.rootLineHeight}, inherit);
    letter-spacing: var(${tokens.rootLetterSpacing}, inherit);
`;
