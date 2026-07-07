import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import { Border, Colour, Radius, Spacing } from "../theme";

export const mobileWrapper = css`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${Border["width-040"]} solid ${Colour["border-selected"]};
`;

export const menuItem = css`
    width: 100%;
    display: flex;
`;

export const link = css`
    width: 100%;
    text-align: left;
    color: ${Colour["text"]};

    margin: 0 ${Spacing["spacing-8"]};

    /* use border, as padding still shows an extra line after the ellipsis */
    border: ${Border["solid"]} transparent;
    border-width: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    border-radius: ${Radius["md"]};

    ${lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${Colour["bg-hover"]};
        color: ${Colour["text"]};
    }
`;
