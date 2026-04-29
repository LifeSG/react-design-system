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
    ${Font["body-baseline-regular"]}
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    ${tokens.xSpacing}: 0px;
    ${elementWithDropdownStyles.tokens.availableHeight}: initial;
    ${tokens.availableWidth}: calc(
        100vw - var(${tokens.xSpacing}) * 2
    );

    ${MediaQuery.MaxWidth.sm} {
        ${tokens.xSpacing}: ${Breakpoint["sm-margin"]};
        max-height: 15rem;
    }

    ${MediaQuery.MaxWidth.xs} {
        ${tokens.xSpacing}: ${Breakpoint["xs-margin"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        ${tokens.xSpacing}: ${Breakpoint["xxs-margin"]};
    }

    max-width: var(${tokens.availableWidth});
    min-width: var(
        ${tokens.containerMinWidth},
        min(23rem, var(${tokens.availableWidth}))
    );
    width: var(${tokens.containerWidth});
    max-height: min(
        27rem,
        var(${elementWithDropdownStyles.tokens.availableHeight}, 9999px)
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

export const baseIndicatorStyle = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`;

export const selectedIndicator = css`
    color: ${Colour["icon-selected"]};
`;

export const baseCheckboxIndicatorStyle = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
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
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const baseButton = css`
    cursor: pointer;
    overflow: hidden;
    color: ${Colour["text-primary"]};
    font-size: inherit;
`;

export const selectAllButton = css`
    ${Font["body-md-semibold"]}
    padding: ${Spacing["spacing-8"]};
`;

export const tryAgainButton = css`
    ${Font["body-baseline-semibold"]}
`;

export const resultStateContainer = css`
    width: 100%;
    display: flex;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    align-items: center;
    color: ${Colour["text"]};
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
    color: ${Colour["text-subtle"]};
    padding: 0 ${Spacing["spacing-16"]};
    padding-bottom: ${Spacing["spacing-12"]};
`;
