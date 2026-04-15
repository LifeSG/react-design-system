import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Radius } from "../../../theme/tokens";

export const cell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;

export const half = `
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-left: none;
    border-right: none;
    background-clip: border-box;

    &[data-day-cell-type="hover-subtle"] {
        background-color: ${Colour["bg-hover"]};
        border-top-color: ${Colour["bg-hover"]};
        border-bottom-color: ${Colour["bg-hover"]};
    }

    &[data-day-cell-type="hover"] {
        background-color: ${Colour["bg-hover-strong"]};
        border-top-color: ${Colour["bg-hover-strong"]};
        border-bottom-color: ${Colour["bg-hover-strong"]};
    }

    &[data-day-cell-type="hover-outline"] {
        background-color: ${Colour["bg-hover-subtle"]};
        border-top-color: ${Colour["border-hover"]};
        border-bottom-color: ${Colour["border-hover"]};
    }

    &[data-day-cell-type="selected-outline"] {
        background-color: ${Colour["bg-selected"]};
        border-top-color: ${Colour["border-selected"]};
        border-bottom-color: ${Colour["border-selected"]};
    }

    &[data-day-cell-type="selected-outline-subtle"] {
        background-color: ${Colour["bg-selected"]};
        border-top-color: ${Colour["border-selected-subtle"]};
        border-bottom-color: ${Colour["border-selected-subtle"]};
    }

    &[data-day-cell-type="selected-hover"] {
        background-color: ${Colour["bg-selected-hover"]};
    }

    &[data-day-cell-type="selected-hover-outline"] {
        background-color: ${Colour["bg-selected-hover"]};
        border-top-color: ${Colour["border-selected-hover"]};
        border-bottom-color: ${Colour["border-selected-hover"]};
    }
`;

export const leftHalf = css`
    ${half}
    left: 0;
`;

export const rightHalf = css`
    ${half}
    right: 0;
`;

export const circle = `
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-radius: ${Radius["md"]};
    background-clip: content-box;

    &[data-day-cell-type="hover-subtle"] {
        background-color: ${Colour["bg-hover"]};
        border-color: ${Colour["bg-hover"]};
    }

    &[data-day-cell-type="hover"] {
        background-color: ${Colour["bg-hover-strong"]};
        border-color: ${Colour["bg-hover-strong"]};
    }

    &[data-day-cell-type="hover-outline"] {
        background-color: ${Colour["bg-hover-subtle"]};
        border-color: ${Colour["border-hover"]};
    }

    &[data-day-cell-type="selected-outline"] {
        background-color: ${Colour["bg-selected"]};
        border-color: ${Colour["border-selected"]};
    }

    &[data-day-cell-type="selected-outline-subtle"] {
        background-color: ${Colour["bg-selected"]};
        border-color: ${Colour["border-selected-subtle"]};
    }

    &[data-day-cell-type="selected-hover"] {
        background-color: ${Colour["bg-selected-hover"]};
    }

    &[data-day-cell-type="selected-hover-outline"] {
        background-color: ${Colour["bg-selected-hover"]};
        border-color: ${Colour["border-selected-hover"]};
    }
`;

export const leftCircle = css`
    ${circle}
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`;

export const rightCircle = css`
    ${circle}
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`;

export const labelWrapper = css`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: default;

    &[data-day-cell-interactive="true"] {
        cursor: pointer;
    }

    &[data-day-cell-interactive="disabled"] {
        cursor: not-allowed;
        pointer-events: none;
    }
`;

export const label = css`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Font["body-md-regular"]}
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    pointer-events: none;
    color: ${Colour["text"]};

    &[data-day-cell-interactive="true"],
    &[data-day-cell-interactive="false"] {
        pointer-events: auto;
    }

    &[data-day-cell-interactive="disabled"] {
        pointer-events: none;
    }

    &[data-day-cell-label-type="selected"] {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected"]};
    }

    &[data-day-cell-label-type="selected-hover"] {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected-hover"]};
    }

    &[data-day-cell-label-type="current"] {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-primary"]};
    }

    &[data-day-cell-label-type="hover"] {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-hover"]};
    }

    &[data-day-cell-label-type="unavailable"] {
        color: ${Colour["text-disabled-subtlest"]};
    }

    &[data-day-cell-label-type="hidden"] {
        visibility: hidden;
    }

    &[data-day-cell-disabled="true"] {
        color: ${Colour["text-disabled-subtlest"]};
    }

    &:focus {
        outline: none;
    }
`;

export const indicator = css`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`;
