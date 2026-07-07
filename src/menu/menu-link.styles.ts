import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import { Border, Colour, Radius, Spacing } from "../theme/tokens";

export const menuLinkDiv = css`
    display: flex;
    flex-direction: column;
`;

export const link = css`
    color: ${Colour["text"]};

    margin: 0 ${Spacing["spacing-8"]};

    border: ${Border["solid"]} transparent;
    border-width: ${Spacing["spacing-8"]} ${Spacing["spacing-8"]};

    border-radius: ${Radius["md"]};

    ${lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${Colour["bg-hover"]};
        color: ${Colour["text"]};
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
    }
`;
