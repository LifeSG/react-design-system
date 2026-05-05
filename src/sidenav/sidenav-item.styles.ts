import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import { Border, Colour, Font, Motion, Radius, Shadow } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const container = css`
    width: 100%;
`;

export const iconContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${Radius["md"]};
    color: ${Colour["icon-primary"]};
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`;

export const titleText = css`
    ${lineClampCss(2)}
    margin-top: 0.25rem;
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const defaultButton = css`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        .${iconContainer} {
            background-color: ${Colour["bg-hover"]};
        }

        .${titleText} {
            ${Font["body-xs-semibold"]}
            color: ${Colour["text-hover"]};
        }
    }

    &.defaultButtonHighlight {
        .${iconContainer} {
            background-color: ${Colour["bg-hover"]};
        }

        .${titleText} {
            ${Font["body-xs-semibold"]}
            color: ${Colour["text-selected"]};
        }
    }
`;

export const desktopDrawer = css`
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 15rem;
    height: 100%;
    padding: 1rem 0.5rem;
    background-color: ${Colour["bg-primary-subtlest"]};
    border-top-right-radius: ${Radius["md"]};
    border-bottom-right-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &.desktopDrawerShowShadow {
        box-shadow: ${Shadow["xs-subtle"]};
        clip-path: inset(0 -6px 0 0);
    }
`;
