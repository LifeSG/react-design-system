import { css } from "@linaria/core";

import { Border, Breakpoint, Colour, Font, MediaQuery, Radius, Spacing } from "../../theme";
import * as elementWithDropdownStyles from "../dropdown-wrapper/element-with-dropdown.styles";

export const tokens = {
    availableWidth: "--fds-internal-dropdownList-container-availableWidth",

    containerWidth: "--fds-internal-dropdownList-containerWidth",
    containerMinWidth: "--fds-internal-dropdownList-containerMinWidth",

    xSpacing: "--fds-internal-dropdownList-container-xSpacing",
} as const;

// -----------------------------------------------------------------------------
// MAIN STYLES
// -----------------------------------------------------------------------------
export const container = css`
    ${elementWithDropdownStyles.tokens.availableHeight}: initial;
    ${tokens.xSpacing}: 0;
    ${tokens.availableWidth}: calc(100vw - var(${tokens.xSpacing}) * 2);

    ${Font["body-baseline-regular"]}
    width: var(${tokens.containerWidth});
    min-width: var(${tokens.containerMinWidth}, min(23rem, var(${tokens.availableWidth})));
    max-width: var(${tokens.availableWidth});
    max-height: min(27rem, var(${elementWithDropdownStyles.tokens.availableHeight}, 9999px));
    overflow: hidden;
    overflow-y: auto;
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};

    ${MediaQuery.MaxWidth.sm} {
        max-height: 15rem;
        ${tokens.xSpacing}: ${Breakpoint["sm-margin"]};
    }

    ${MediaQuery.MaxWidth.xs} {
        ${tokens.xSpacing}: ${Breakpoint["xs-margin"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        ${tokens.xSpacing}: ${Breakpoint["xxs-margin"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        background-clip: padding-box;
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
    }
`;

export const containerVariantSmall = css`
    ${Font["body-md-regular"]}
`;

export const list = css`
    padding: ${Spacing["spacing-8"]};
    background: transparent;
`;

// -----------------------------------------------------------------------------
// LIST ITEM STYLES
// -----------------------------------------------------------------------------
export const listItem = css`
    display: flex;
    gap: ${Spacing["spacing-8"]};
    align-items: flex-start;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: ${Radius["none"]};
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

export const baseIndicatorStyle = css`
    flex-shrink: 0;
    width: 1rem;
    height: 1lh;
`;

export const selectedIndicator = css`
    color: ${Colour["icon-selected"]};
`;

export const baseCheckboxIndicatorStyle = css`
    flex-shrink: 0;
    width: 1lh;
    height: 1lh;
`;

export const checkboxSelectedIndicator = css`
    color: ${Colour["icon-selected"]};
`;

export const checkboxUnselectedIndicator = css`
    color: ${Colour["icon-primary-subtlest"]};
`;

export const checkboxDisabledIndicator = css`
    color: ${Colour["icon-disabled-subtle"]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------
export const selectAllContainer = css`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const baseButton = css`
    overflow: hidden;
    font-size: inherit;
    color: ${Colour["text-primary"]};
    cursor: pointer;
`;

export const selectAllButton = css`
    ${Font["body-md-semibold"]}
    padding: ${Spacing["spacing-8"]};
`;

export const tryAgainButton = css`
    ${Font["body-baseline-semibold"]}
`;

export const resultStateContainer = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    color: ${Colour["text"]};
`;

export const labelIcon = css`
    width: 1em;
    height: 1em;
    margin-right: ${Spacing["spacing-4"]};
    color: ${Colour["icon-error"]};
`;

export const spinner = css`
    margin-right: ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

export const noResultDescContainer = css`
    padding: 0 ${Spacing["spacing-16"]};
    padding-bottom: ${Spacing["spacing-12"]};
    color: ${Colour["text-subtle"]};
`;
