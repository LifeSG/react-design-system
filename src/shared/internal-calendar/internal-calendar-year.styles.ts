import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Radius } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const yearCell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 1rem 0.5rem;
    color: ${Colour["text"]};
    cursor: default;
    background-clip: border-box;
    border: ${Border["width-010"]} ${Border["solid"]} transparent;

    ${Font["body-md-regular"]}
    border-radius: ${Radius["md"]};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const yearCellDisabledDisplay = css`
    color: ${Colour["text-disabled-subtlest"]};
    cursor: not-allowed;
`;

export const yearCellInteractive = css`
    cursor: pointer;
`;

export const yearCellOtherDecade = css`
    color: ${Colour["text-disabled-subtlest"]};
`;

export const yearCellCurrentYear = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-primary"]};
`;

export const yearCellSelectedYear = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-selected"]};
    background: ${Colour["bg-selected"]};
    border-color: ${Colour["border-selected"]};
`;

export const yearCellDefaultHover = css`
    &:hover {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-hover"]};
        background: ${Colour["bg-hover"]};
    }
`;

export const yearCellSelectedHover = css`
    &:hover {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected-hover"]};
        background: ${Colour["bg-selected-hover"]};
        border-color: ${Colour["border-selected-hover"]};
    }
`;
