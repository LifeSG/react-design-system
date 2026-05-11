import { css } from "@linaria/core";

import { Border, Colour, MediaQuery } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const wrapper = css`
    display: flex;
    position: relative;
    width: fit-content;
`;

export const wrapperFixed = css`
    position: fixed;
`;

export const containerBase = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background-color: ${Colour["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`;

export const desktopContainer = css`
    height: 100vh;
    left: 0;
    top: 0;
    ${MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`;

export const mobileContainer = css`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.sm} {
        display: none; /* NOTE: Since mobile view not supported yet */
    }
`;
