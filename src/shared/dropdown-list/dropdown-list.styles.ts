import { css } from "@linaria/core";

import {
    Border,
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../../theme";

export const tokens = {
    xSpacing: "--fds-internal-dropdown-list-container-x-spacing",
    availableWidth: "--fds-internal-dropdown-list-container-available-width",
    availableHeight: "--fds-internal-dropdown-list-container-available-height",
} as const;

// -----------------------------------------------------------------------------
// MAIN STYLES
// -----------------------------------------------------------------------------
export const container = css`
    ${tokens.availableHeight}: initial;
    ${tokens.availableWidth}: initial;
    ${tokens.xSpacing}: initial;

    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    ${tokens.xSpacing}: 0px;
    ${tokens.availableWidth}: calc(
        100vw - var(${tokens.xSpacing}) * 2
    );

    ${MediaQuery.MaxWidth.xxs} {
        --fds-internal-dropdown-list-container-x-spacing: ${Breakpoint[
            "xxs-margin"
        ]};
    }

    ${MediaQuery.MaxWidth.xs} {
        --fds-internal-dropdown-list-container-x-spacing: ${Breakpoint[
            "xs-margin"
        ]};
    }

    ${MediaQuery.MaxWidth.sm} {
        --fds-internal-dropdown-list-container-x-spacing: ${Breakpoint[
            "sm-margin"
        ]};
        max-height: 15rem;
    }

    max-width: var(--fds-internal-dropdown-list-container-available-width);
    min-width: min(
        23rem,
        var(--fds-internal-dropdown-list-container-available-width)
    );
    max-height: min(
        27rem,
        var(--fds-internal-dropdown-list-container-available-height, 9999px)
    );
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }
`;

export const containerVariantDefault = css`
    ${Font["body-baseline-regular"]}
`;

export const containerVariantSmall = css`
    ${Font["body-md-regular"]}
`;

export const list = css`
    background: transparent;
    padding: ${Spacing["spacing-8"]};
`;

export const listbox = css`
    list-style-type: none;
`;

// -----------------------------------------------------------------------------
// LIST ITEM STYLES
// -----------------------------------------------------------------------------
export const listItem = css`
    display: flex;
    align-items: flex-start;
    gap: ${Spacing["spacing-8"]};
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Radius["none"]};
    outline: none;
`;

export const listItemActive = css`
    background: ${Colour["bg-hover-subtle"]};
`;

export const listItemActiveSelected = css`
    background: ${Colour["bg-hover"]};
`;

export const listItemDisabled = css`
    cursor: not-allowed;
`;

export const selectedIndicator = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Colour["icon-selected"]};
`;

export const unselectedIndicator = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`;

export const checkboxSelectedIndicator = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-selected"]};
`;

export const checkboxUnselectedIndicator = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-primary-subtlest"]};
`;

export const checkboxDisabledIndicator = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-disabled-subtle"]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------
export const selectAllContainer = css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const selectAllButton = css`
    cursor: pointer;
    overflow: hidden;
    color: ${Colour["text-primary"]};
    font-size: inherit;
    ${Font["body-md-semibold"]}
    padding: ${Spacing["spacing-8"]};
`;

export const tryAgainButton = css`
    cursor: pointer;
    overflow: hidden;
    color: ${Colour["text-primary"]};
    font-size: inherit;
    ${Font["body-baseline-semibold"]}
`;

export const resultStateContainer = css`
    width: 100%;
    display: flex;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    align-items: center;
`;

export const labelIcon = css`
    margin-right: ${Spacing["spacing-4"]};
    color: ${Colour["icon-error"]};
    height: 1em;
    width: 1em;
`;

export const spinner = css`
    margin-right: ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

export const noResultDescContainer = css`
    --horizontal-padding: ${Spacing["spacing-16"]};
    color: ${Colour["text-subtle"]};
    padding: 0 var(--horizontal-padding) ${Spacing["spacing-12"]}
        var(--horizontal-padding);
`;
