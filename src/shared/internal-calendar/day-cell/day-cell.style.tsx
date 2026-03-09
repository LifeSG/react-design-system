import styled from "styled-components";
import { Border, Colour, Font, Motion, Radius } from "../../../theme";

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
    border: ${Border["width-010"]} ${Border.solid} transparent;
    border-left: none;
    border-right: none;

    &.halfHoverSubtle {
        background-color: ${Colour["bg-hover"]};
        background-clip: border-box;
        border-top-color: ${Colour["bg-hover"]};
        border-bottom-color: ${Colour["bg-hover"]};
    }

    &.halfHover {
        background-color: ${Colour["bg-hover-strong"]};
        background-clip: border-box;
        border-top-color: ${Colour["bg-hover-strong"]};
        border-bottom-color: ${Colour["bg-hover-strong"]};
    }

    &.halfHoverOutline {
        background-color: ${Colour["bg-hover-subtle"]};
        background-clip: border-box;
        border-top-color: ${Colour["border-hover"]};
        border-bottom-color: ${Colour["border-hover"]};
    }

    &.halfSelectedOutline {
        background-color: ${Colour["bg-selected"]};
        background-clip: border-box;
        border-top-color: ${Colour["border-selected"]};
        border-bottom-color: ${Colour["border-selected"]};
    }

    &.halfSelectedOutlineSubtle {
        background-color: ${Colour["bg-selected"]};
        background-clip: border-box;
        border-top-color: ${Colour["border-selected-subtle"]};
        border-bottom-color: ${Colour["border-selected-subtle"]};
    }

    &.halfSelectedHover {
        background-color: ${Colour["bg-selected-hover"]};
        background-clip: border-box;
        /* no border to give it an overlay effect */
    }

    &.halfSelectedHoverOutline {
        background-color: ${Colour["bg-selected-hover"]};
        background-clip: border-box;
        border-top-color: ${Colour["border-selected-hover"]};
        border-bottom-color: ${Colour["border-selected-hover"]};
    }
`;

export const LeftHalf = styled(Half)`
    left: 0;
`;

export const RightHalf = styled(Half)`
    right: 0;
`;

const Circle = styled.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    border: ${Border["width-010"]} ${Border.solid} transparent;
    border-radius: ${Radius.md};

    &.circleHoverSubtle {
        background-color: ${Colour["bg-hover"]};
        background-clip: content-box;
        border-color: ${Colour["bg-hover"]};
    }

    &.circleHover {
        background-color: ${Colour["bg-hover-strong"]};
        background-clip: content-box;
        border-color: ${Colour["bg-hover-strong"]};
    }

    &.circleHoverOutline {
        background-color: ${Colour["bg-hover-subtle"]};
        background-clip: content-box;
        border-color: ${Colour["border-hover"]};
    }

    &.circleSelectedOutline {
        background-color: ${Colour["bg-selected"]};
        background-clip: content-box;
        border-color: ${Colour["border-selected"]};
    }

    &.circleSelectedOutlineSubtle {
        background-color: ${Colour["bg-selected"]};
        background-clip: content-box;
        border-color: ${Colour["border-selected-subtle"]};
    }

    &.circleSelectedHover {
        background-color: ${Colour["bg-selected-hover"]};
        background-clip: content-box;
        /* no border to give it an overlay effect */
    }

    &.circleSelectedHoverOutline {
        background-color: ${Colour["bg-selected-hover"]};
        background-clip: content-box;
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

    &.labelWrapperInteractive {
        cursor: pointer;
    }

    &.labelWrapperEnabled {
        cursor: default;
    }

    &.labelWrapperDisabled {
        cursor: not-allowed;
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

    &.labelCursorDisabled {
        pointer-events: none;
    }

    &.labelHidden {
        visibility: hidden;
    }

    &.labelDisabled {
        color: ${Colour["text-disabled-subtlest"]};
    }

    &.labelSelected {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected"]};
    }

    &.labelSelectedHover {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-selected-hover"]};
    }

    &.labelCurrent {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-primary"]};
    }

    &.labelHover {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-hover"]};
    }

    &.labelUnavailable {
        color: ${Colour["text-disabled-subtlest"]};
    }

    &.labelAvailable {
        color: ${Colour["text"]};
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
