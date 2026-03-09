import { css } from "@linaria/core";
import { Border, Colour, Font, Motion, Radius } from "../../../theme";

// =============================================================================
// COMPONENTS
// =============================================================================
export const cell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;

export const half = css`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    border-left: none;
    border-right: none;
`;

export const halfHoverSubtle = css`
    background-color: ${Colour["bg-hover"]};
    background-clip: border-box;
    border-top-color: ${Colour["bg-hover"]};
    border-bottom-color: ${Colour["bg-hover"]};
`;

export const halfHover = css`
    background-color: ${Colour["bg-hover-strong"]};
    background-clip: border-box;
    border-top-color: ${Colour["bg-hover-strong"]};
    border-bottom-color: ${Colour["bg-hover-strong"]};
`;

export const halfHoverOutline = css`
    background-color: ${Colour["bg-hover-subtle"]};
    background-clip: border-box;
    border-top-color: ${Colour["border-hover"]};
    border-bottom-color: ${Colour["border-hover"]};
`;

export const halfSelectedOutline = css`
    background-color: ${Colour["bg-selected"]};
    background-clip: border-box;
    border-top-color: ${Colour["border-selected"]};
    border-bottom-color: ${Colour["border-selected"]};
`;

export const halfSelectedOutlineSubtle = css`
    background-color: ${Colour["bg-selected"]};
    background-clip: border-box;
    border-top-color: ${Colour["border-selected-subtle"]};
    border-bottom-color: ${Colour["border-selected-subtle"]};
`;

export const halfSelectedHover = css`
    background-color: ${Colour["bg-selected-hover"]};
    background-clip: border-box;
    /* no border to give it an overlay effect */
`;

export const halfSelectedHoverOutline = css`
    background-color: ${Colour["bg-selected-hover"]};
    background-clip: border-box;
    border-top-color: ${Colour["border-selected-hover"]};
    border-bottom-color: ${Colour["border-selected-hover"]};
`;

export const leftHalf = css`
    left: 0;
`;

export const rightHalf = css`
    right: 0;
`;

export const circle = css`
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
`;

export const circleHoverSubtle = css`
    background-color: ${Colour["bg-hover"]};
    background-clip: content-box;
    border-color: ${Colour["bg-hover"]};
`;

export const circleHover = css`
    background-color: ${Colour["bg-hover-strong"]};
    background-clip: content-box;
    border-color: ${Colour["bg-hover-strong"]};
`;

export const circleHoverOutline = css`
    background-color: ${Colour["bg-hover-subtle"]};
    background-clip: content-box;
    border-color: ${Colour["border-hover"]};
`;

export const circleSelectedOutline = css`
    background-color: ${Colour["bg-selected"]};
    background-clip: content-box;
    border-color: ${Colour["border-selected"]};
`;

export const circleSelectedOutlineSubtle = css`
    background-color: ${Colour["bg-selected"]};
    background-clip: content-box;
    border-color: ${Colour["border-selected-subtle"]};
`;

export const circleSelectedHover = css`
    background-color: ${Colour["bg-selected-hover"]};
    background-clip: content-box;
    /* no border to give it an overlay effect */
`;

export const circleSelectedHoverOutline = css`
    background-color: ${Colour["bg-selected-hover"]};
    background-clip: content-box;
    border-color: ${Colour["border-selected-hover"]};
`;

export const leftCircle = css`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`;

export const rightCircle = css`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`;

export const labelWrapper = css`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
`;

export const labelWrapperInteractive = css`
    cursor: pointer;
`;

export const labelWrapperEnabled = css`
    cursor: default;
`;

export const labelWrapperDisabled = css`
    cursor: not-allowed;
`;

export const label = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Font["body-md-regular"]}
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    &:focus {
        outline: none;
    }
`;

export const labelCursorDisabled = css`
    pointer-events: none;
`;

export const labelHidden = css`
    visibility: hidden;
`;

export const labelDisabled = css`
    color: ${Colour["text-disabled-subtlest"]};
`;

export const labelSelected = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-selected"]};
`;

export const labelSelectedHover = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-selected-hover"]};
`;

export const labelCurrent = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-primary"]};
`;

export const labelHover = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-hover"]};
`;

export const labelUnavailable = css`
    color: ${Colour["text-disabled-subtlest"]};
`;

export const labelAvailable = css`
    color: ${Colour["text"]};
`;

export const indicator = css`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`;
