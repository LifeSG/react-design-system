import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Radius } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    display: grid;
    grid-template-rows: repeat(6, 2.5rem);
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem 0;
    place-content: center center;
    width: 100%;
    height: 100%;
`;

export const monthCell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
    color: ${Colour["text"]};
    cursor: default;
    background-clip: border-box;

    ${Font["body-md-regular"]}
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-radius: ${Radius["md"]};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const monthCellDisabledDisplay = css`
    color: ${Colour["text-disabled-subtlest"]};
    cursor: not-allowed;
`;

export const monthCellInteractive = css`
    cursor: pointer;
`;

export const monthCellCurrentMonth = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-primary"]};
`;

export const monthCellSelectedMonth = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-selected"]};
    background: ${Colour["bg-selected"]};
    border-color: ${Colour["border-selected"]};
`;

export const monthCellDefaultHover = css`
    &:hover {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-hover"]};
        background: ${Colour["bg-hover"]};
    }
`;

export const monthCellSelectedHover = css`
    &:hover {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected-hover"]};
        background: ${Colour["bg-selected-hover"]};
        border-color: ${Colour["border-selected-hover"]};
    }
`;
