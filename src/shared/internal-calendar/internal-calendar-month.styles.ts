import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Radius } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`;

export const monthCell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Radius["md"]};
    margin: 0 0.5rem;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    ${Font["body-md-regular"]}
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    background-clip: border-box;
    color: ${Colour["text"]};
    cursor: default;
`;

export const monthCellDisabledDisplay = css`
    cursor: not-allowed;
    color: ${Colour["text-disabled-subtlest"]};
`;

export const monthCellInteractive = css`
    cursor: pointer;
`;

export const monthCellCurrentMonth = css`
    color: ${Colour["text-primary"]};
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const monthCellSelectedMonth = css`
    background: ${Colour["bg-selected"]};
    border-color: ${Colour["border-selected"]};
    color: ${Colour["text-selected"]};
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const monthCellDefaultHover = css`
    &:hover {
        background: ${Colour["bg-hover"]};
        color: ${Colour["text-hover"]};
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;

export const monthCellSelectedHover = css`
    &:hover {
        background: ${Colour["bg-selected-hover"]};
        border-color: ${Colour["border-selected-hover"]};
        color: ${Colour["text-selected-hover"]};
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;
