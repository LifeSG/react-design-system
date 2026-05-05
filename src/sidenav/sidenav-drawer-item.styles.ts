import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import { Colour, Font, Motion, Radius } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const linkButton = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Radius["md"]};

    ${Font["body-md-semibold"]}
    color: ${Colour["text"]};

    &:hover,
    &:focus {
        background: ${Colour["bg-hover-strong"]};
    }

    &.linkButtonNoChildren {
        &:hover,
        &:focus {
            background: ${Colour["bg-hover"]};
            color: ${Colour["text-hover"]};
        }
    }
`;

export const drawerSubitemContainer = css`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`;

export const chevronIcon = css`
    flex-shrink: 0;
    color: ${Colour["icon"]};
    transform: rotate(180deg);
    transition: transform ${Motion["duration-150"]} ${Motion["ease-default"]};

    &.chevronIconExpanded {
        transform: rotate(0deg);
    }
`;

export const textElement = css`
    ${lineClampCss(2)}
    text-align: left;
`;
