import { css } from "@linaria/core";

import { lineClampDynamicCss } from "../shared/styles";
import { Colour, Font } from "../theme";

export { typographySize, typographyWeight } from "./typography-text.styles";

export const tokens = {
    typographyBase: {
        maxLines: "--fds-internal-typography-base-maxLines",
    },
} as const;

export const typographyBase = css`
    ${tokens.typographyBase.maxLines}: initial;
    font-family: ${Font.Spec["font-family"]};
    font-variant: ${Font.Spec["font-variant"]};
    color: ${Colour.text};
`;

export const displayInline = css`
    display: inline;
    margin-bottom: 0;
`;

export const displayBlock = css`
    display: block;
    margin-bottom: 0;
`;

export const paragraph = css`
    display: block;
    margin-bottom: 1.05em;
`;

export const lineClamp = css`
    ${lineClampDynamicCss(tokens.typographyBase.maxLines)}
`;

export const hyperlinkBase = css`
    color: ${Colour.hyperlink};

    &:hover,
    &:active,
    &:focus {
        color: ${Colour["text-hover"]};
    }
`;

export const underline = css`
    text-decoration: underline;
`;

export const noUnderline = css`
    text-decoration: none;
`;

export const externalIcon = css`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;
