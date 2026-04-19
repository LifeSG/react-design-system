import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../../theme";

// =============================================================================
// CONSTANTS
// =============================================================================
// Used as a modifier class on inputContainer and referenced in its nested CSS
// selector. Exported so the component can apply it without a magic string.
export const HOVER_CLASS = "inputContainerHover";

// =============================================================================
// STYLING
// =============================================================================
export const inputSection = css`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`;

export const baseInput = css`
    background: transparent;
    text-align: center;
    position: absolute;
    inset: 0;
`;

export const divider = css`
    ${Font["body-baseline-regular"]}
`;

export const inputContainer = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};

    &.${HOVER_CLASS} {
        .${baseInput}, .${divider} {
            color: ${Colour["text-subtler"]};
        }
    }
`;

// Plain string mixin — not a css tag so the rules are inlined directly when
// interpolated into each sizer's css block (Linaria css-tag interpolation
// inserts a class name, not raw CSS).
const inputSizerBase = `
    display: inline-block;
    position: relative;

    &::after {
        ${Font["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`;

export const dayInputSizer = css`
    ${inputSizerBase}

    &::after {
        content: "DD";
    }
`;

export const monthInputSizer = css`
    ${inputSizerBase}

    &::after {
        content: "MM";
    }
`;

export const yearInputSizer = css`
    ${inputSizerBase}

    &::after {
        content: "YYYY";
    }
`;

export const dividerInactive = css`
    color: ${Colour["text"]};
`;

export const placeholder = css`
    ${Font["body-baseline-regular"]}
    background-color: ${Colour["bg"]};
    color: ${Colour["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const placeholderDisabled = css`
    background-color: ${Colour["bg-disabled"]};
    cursor: not-allowed;
`;

export const placeholderHide = css`
    display: none;
`;
