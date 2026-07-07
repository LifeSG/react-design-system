import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Radius } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`;

export const yearCell = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    padding: 0.5rem;

    ${Font["body-md-regular"]}
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    background-clip: border-box;
    color: ${Colour["text"]};
    cursor: default;
`;

export const yearCellDisabledDisplay = css`
    cursor: not-allowed;
    color: ${Colour["text-disabled-subtlest"]};
`;

export const yearCellInteractive = css`
    cursor: pointer;
`;

export const yearCellOtherDecade = css`
    color: ${Colour["text-disabled-subtlest"]};
`;

export const yearCellCurrentYear = css`
    color: ${Colour["text-primary"]};
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const yearCellSelectedYear = css`
    background: ${Colour["bg-selected"]};
    border-color: ${Colour["border-selected"]};
    color: ${Colour["text-selected"]};
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const yearCellDefaultHover = css`
    &:hover {
        background: ${Colour["bg-hover"]};
        color: ${Colour["text-hover"]};
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;

export const yearCellSelectedHover = css`
    &:hover {
        background: ${Colour["bg-selected-hover"]};
        border-color: ${Colour["border-selected-hover"]};
        color: ${Colour["text-selected-hover"]};
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;
