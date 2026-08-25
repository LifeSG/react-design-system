import { css } from "@linaria/core";

import {
    Border,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../../theme";

// =============================================================================
// EDIT MODE STYLES
// =============================================================================

export const editItem = css`
    display: flex;
    flex-direction: column;
    padding: ${Spacing["spacing-32"]};
    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-radius: ${Radius["sm"]};

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
    }
`;

export const editContentSection = css`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Spacing["spacing-16"]};
    width: 100%;
`;

export const editDetailsSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const editNameSection = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const editFileNameText = css`
    display: flex;
    flex: 1;
    margin-right: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${Spacing["spacing-8"]};
    }
`;

export const editFileSizeText = css`
    color: ${Colour["text-subtler"]};
`;

// =============================================================================
// DISPLAY / ERROR MODE STYLES
// =============================================================================

export type ItemFocusType = "self" | "others" | "none";

export const item = css`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
    }
    &[data-item-state="disabled"] {
        cursor: not-allowed;
    }

    &[data-item-state="sortable"] {
        &:hover {
            cursor: grab;
        }

        // Following recommendation by the library for touch events
        // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
        touch-action: manipulation;
    }

    &[data-item-state="sortable-active"] {
        cursor: grabbing;

        // Following recommendation by the library for touch events
        // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
        touch-action: manipulation;
    }
`;

export const dragHandleIcon = css`
    margin-right: ${Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Colour["icon"]};

    &[data-drag-handle-state="active"] {
        color: ${Colour["icon-primary"]};
    }

    &[data-drag-handle-state="disabled"] {
        color: ${Colour["icon-disabled"]};
    }
`;

export const box = css`
    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${MediaQuery.MaxWidth.md} {
        padding: ${Spacing["spacing-16"]};
    }

    &[data-box-state="focused"] {
        border-color: ${Colour["border-focus"]};
        box-shadow: ${Shadow["xs-focus-strong"]};
    }

    &[data-box-state="disabled"] {
        border-color: ${Colour["border-disabled"]};
    }

    &[data-box-state="error"] {
        background: ${Colour["bg-error"]};
        border-color: ${Colour["border-error"]};
    }

    &[data-stack-mobile="true"] {
        ${MediaQuery.MaxWidth.md} {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`;

export const contentSection = css`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    &[data-has-thumbnail="true"] {
        ${MediaQuery.MaxWidth.md} {
            flex-direction: row;
            align-items: center;
        }
    }
`;
