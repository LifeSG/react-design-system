import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../../theme";

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

export const nameSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

export const extendedNameSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    ${MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`;

export const fileSizeSection = css`
    display: flex;
    width: 5rem;
    margin-left: ${Spacing["spacing-8"]};
    justify-content: flex-end;

    &[data-mobile-visibility="hidden"] {
        ${MediaQuery.MaxWidth.md} {
            display: none;
            visibility: hidden;
        }
    }

    &[data-mobile-visibility="expand"] {
        ${MediaQuery.MaxWidth.md} {
            width: 100%;
            margin-left: 0;
            margin-top: ${Spacing["spacing-8"]};
            justify-content: flex-start;
        }
    }
`;

export const fileSizeText = css`
    color: ${Colour["text-subtler"]};
`;

export const descriptionFileSizeText = css`
    color: ${Colour["text-subtler"]};
    margin-top: ${Spacing["spacing-16"]};
`;

export const itemDescriptionLabel = css`
    ${Font["form-label"]}
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-subtle"]};
    margin-top: ${Spacing["spacing-16"]};
`;

export const itemDescriptionText = css`
    margin-top: ${Spacing["spacing-4"]};
`;

export const errorIcon = css`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

export const desktopErrorMessage = css`
    color: ${Colour["text-error"]};
    margin-top: ${Spacing["spacing-4"]};
    display: flex;
    gap: ${Spacing["spacing-4"]};

    ${MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`;

export const mobileErrorMessage = css`
    color: ${Colour["text-error"]};
    display: none;
    visibility: hidden;

    ${MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${Spacing["spacing-8"]};
    }
`;

export const actionContainer = css`
    width: 6rem;
    margin-left: ${Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${MediaQuery.MaxWidth.md} {
        width: fit-content;
    }

    &[data-mobile-layout="loading"] {
        ${MediaQuery.MaxWidth.md} {
            margin-left: 0;
            margin-top: ${Spacing["spacing-16"]};
            width: 100%;
        }
    }

    &[data-mobile-layout="editable"] {
        ${MediaQuery.MaxWidth.md} {
            margin-left: 0;
            margin-top: ${Spacing["spacing-16"]};
            align-self: flex-end;
        }
    }
`;

export const inlineActionContainer = css`
    width: 100%;
    margin-top: ${Spacing["spacing-16"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const iconButton = css`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${Spacing["spacing-8"]};
    }
`;
