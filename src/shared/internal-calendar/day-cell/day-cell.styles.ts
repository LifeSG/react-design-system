import styled, { css } from "styled-components";

import { Border, Colour, Font, Motion, Radius } from "../../../theme/tokens";
import type { CellType, LabelType } from "./types";

export const dayCellTypeClassMap: Record<CellType, string> = {
    "hover-subtle": "dayCellTypeHoverSubtle",
    hover: "dayCellTypeHover",
    "hover-outline": "dayCellTypeHoverOutline",
    "selected-outline": "dayCellTypeSelectedOutline",
    "selected-outline-subtle": "dayCellTypeSelectedOutlineSubtle",
    "selected-hover": "dayCellTypeSelectedHover",
    "selected-hover-outline": "dayCellTypeSelectedHoverOutline",
};

export const dayCellLabelTypeClassMap: Record<LabelType, string> = {
    available: "dayCellLabelAvailable",
    unavailable: "dayCellLabelUnavailable",
    current: "dayCellLabelCurrent",
    hover: "dayCellLabelHover",
    selected: "dayCellLabelSelected",
    "selected-hover": "dayCellLabelSelectedHover",
    hidden: "dayCellLabelHidden",
};

export const dayCellLabelDisabled = "dayCellLabelDisabled";
export const dayCellLabelDisabledHidden = "dayCellLabelDisabledHidden";
export const dayCellLabelPointerAuto = "dayCellLabelPointerAuto";

export const dayCellLabelWrapperInteractive = "dayCellLabelWrapperInteractive";
export const dayCellLabelWrapperNeutral = "dayCellLabelWrapperNeutral";

const dayCellTypeHoverSubtle = css`
    background-color: ${Colour["bg-hover"]};
    border-top-color: ${Colour["bg-hover"]};
    border-bottom-color: ${Colour["bg-hover"]};
`;

const dayCellTypeHover = css`
    background-color: ${Colour["bg-hover-strong"]};
    border-top-color: ${Colour["bg-hover-strong"]};
    border-bottom-color: ${Colour["bg-hover-strong"]};
`;

const dayCellTypeHoverOutline = css`
    background-color: ${Colour["bg-hover-subtle"]};
    border-top-color: ${Colour["border-hover"]};
    border-bottom-color: ${Colour["border-hover"]};
`;

const dayCellTypeSelectedOutline = css`
    background-color: ${Colour["bg-selected"]};
    border-top-color: ${Colour["border-selected"]};
    border-bottom-color: ${Colour["border-selected"]};
`;

const dayCellTypeSelectedOutlineSubtle = css`
    background-color: ${Colour["bg-selected"]};
    border-top-color: ${Colour["border-selected-subtle"]};
    border-bottom-color: ${Colour["border-selected-subtle"]};
`;

const dayCellTypeSelectedHover = css`
    background-color: ${Colour["bg-selected-hover"]};
`;

const dayCellTypeSelectedHoverOutline = css`
    background-color: ${Colour["bg-selected-hover"]};
    border-top-color: ${Colour["border-selected-hover"]};
    border-bottom-color: ${Colour["border-selected-hover"]};
`;

// =============================================================================
// COMPONENTS
// =============================================================================
export const Cell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;

const Half = styled.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-left: none;
    border-right: none;
    background-clip: border-box;

    &.${dayCellTypeClassMap["hover-subtle"]} {
        ${dayCellTypeHoverSubtle}
    }

    &.${dayCellTypeClassMap["hover"]} {
        ${dayCellTypeHover}
    }

    &.${dayCellTypeClassMap["hover-outline"]} {
        ${dayCellTypeHoverOutline}
    }

    &.${dayCellTypeClassMap["selected-outline"]} {
        ${dayCellTypeSelectedOutline}
    }

    &.${dayCellTypeClassMap["selected-outline-subtle"]} {
        ${dayCellTypeSelectedOutlineSubtle}
    }

    &.${dayCellTypeClassMap["selected-hover"]} {
        ${dayCellTypeSelectedHover}
    }

    &.${dayCellTypeClassMap["selected-hover-outline"]} {
        ${dayCellTypeSelectedHoverOutline}
    }
`;

export const LeftHalf = styled(Half)`
    left: 0;
`;

export const RightHalf = styled(Half)`
    right: 0;
`;

export const Circle = styled.div`
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

    &.${dayCellTypeClassMap["hover-subtle"]} {
        background-color: ${Colour["bg-hover"]};
        border-color: ${Colour["bg-hover"]};
    }

    &.${dayCellTypeClassMap["hover"]} {
        background-color: ${Colour["bg-hover-strong"]};
        border-color: ${Colour["bg-hover-strong"]};
    }

    &.${dayCellTypeClassMap["hover-outline"]} {
        background-color: ${Colour["bg-hover-subtle"]};
        border-color: ${Colour["border-hover"]};
    }

    &.${dayCellTypeClassMap["selected-outline"]} {
        background-color: ${Colour["bg-selected"]};
        border-color: ${Colour["border-selected"]};
    }

    &.${dayCellTypeClassMap["selected-outline-subtle"]} {
        background-color: ${Colour["bg-selected"]};
        border-color: ${Colour["border-selected-subtle"]};
    }

    &.${dayCellTypeClassMap["selected-hover"]} {
        background-color: ${Colour["bg-selected-hover"]};
    }

    &.${dayCellTypeClassMap["selected-hover-outline"]} {
        background-color: ${Colour["bg-selected-hover"]};
        border-color: ${Colour["border-selected-hover"]};
    }
`;

export const LeftCircle = styled(Circle)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`;

export const RightCircle = styled(Circle)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`;

export const LabelWrapper = styled.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: not-allowed;

    &.${dayCellLabelWrapperInteractive} {
        cursor: pointer;
    }

    &.${dayCellLabelWrapperNeutral} {
        cursor: default;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Font["body-md-regular"]}
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    pointer-events: none;
    color: ${Colour["text"]};

    &.${dayCellLabelPointerAuto} {
        pointer-events: auto;
    }

    &.${dayCellLabelTypeClassMap.selected} {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected"]};
    }

    &.${dayCellLabelTypeClassMap["selected-hover"]} {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected-hover"]};
    }

    &.${dayCellLabelTypeClassMap.current} {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-primary"]};
    }

    &.${dayCellLabelTypeClassMap.hover} {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-hover"]};
    }

    &.${dayCellLabelTypeClassMap.unavailable} {
        color: ${Colour["text-disabled-subtlest"]};
    }

    &.${dayCellLabelTypeClassMap.hidden} {
        visibility: hidden;
    }

    &.${dayCellLabelDisabled} {
        color: ${Colour["text-disabled-subtlest"]};
    }

    &.${dayCellLabelDisabledHidden} {
        visibility: hidden;
    }

    &:focus {
        outline: none;
    }
`;

export const Indicator = styled.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`;
