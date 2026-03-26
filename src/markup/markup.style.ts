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
    emphasizedFontFamily: "--fds-internal-markup-emphasized-fontFamily",
    emphasizedFontVariant: "--fds-internal-markup-emphasized-fontVariant",
    emphasizedFontSize: "--fds-internal-markup-emphasized-fontSize",
    emphasizedFontWeight: "--fds-internal-markup-emphasized-fontWeight",
    emphasizedLineHeight: "--fds-internal-markup-emphasized-lineHeight",
    emphasizedLetterSpacing: "--fds-internal-markup-emphasized-letterSpacing",
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

    strong,
    a {
        font-family: var(${tokens.emphasizedFontFamily}, inherit);
        font-variant: var(${tokens.emphasizedFontVariant}, inherit);
        font-size: var(${tokens.emphasizedFontSize}, inherit);
        font-weight: var(
            ${tokens.emphasizedFontWeight},
            ${Font.Spec["weight-semibold"]}
        );
        line-height: var(${tokens.emphasizedLineHeight}, inherit);
        letter-spacing: var(${tokens.emphasizedLetterSpacing}, inherit);
    }
`;
