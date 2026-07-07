import { css } from "@linaria/core";

import { Border, Colour } from "../theme";

export const container = css`
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

// =============================================================================
// ITEM STYLES
// =============================================================================
export const itemIcon = css`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Colour["icon-primary"]};
`;

export const itemTitleDefault = css`
    color: ${Colour["text-primary"]};
`;

export const itemTitleSmall = css`
    color: ${Colour["text-primary"]};
`;

export const itemContainer = css`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    &:not(:last-of-type) {
        border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    }

    &:hover {
        .${itemTitleDefault}, .${itemTitleSmall}, .${itemIcon} {
            color: ${Colour["text-hover"]};
        }
    }
`;

export const itemContentContainer = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`;

export const itemDescription = css`
    margin-top: 0.25rem;
`;

// =============================================================================
// TOGGLE STYLES
// =============================================================================
export const expandable = css`
    overflow: hidden;
`;

export const expandableList = css`
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const toggleButtonLabel = css`
    color: ${Colour["text-primary"]};
`;

export const toggleButtonIcon = css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Colour["icon-primary"]};
`;

export const toggleButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    gap: 1rem;

    &:hover {
        .${toggleButtonLabel}, .${toggleButtonIcon} {
            color: ${Colour["text-hover"]};
            text-decoration: underline;
        }
    }
`;

export const toggleButtonLoading = css`
    cursor: default;
    flex-direction: row-reverse;

    .${toggleButtonLabel}, .${toggleButtonIcon} {
        color: ${Colour["text-disabled"]};
        text-decoration: none;
    }

    &:hover {
        .${toggleButtonLabel}, .${toggleButtonIcon} {
            color: ${Colour["text-disabled"]};
            text-decoration: none;
        }
    }
`;
