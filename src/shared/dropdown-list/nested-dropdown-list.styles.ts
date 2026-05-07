import { css } from "@linaria/core";

import { Colour, Motion, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================

export const tokens = {
    level: "--fds-internal-nestedDropdownList-indentLevel",
};

// -----------------------------------------------------------------------------
// LIST ITEM STYLES
// -----------------------------------------------------------------------------

export const listItemContainer = css`
    display: flex;
`;

export const listItemContainerHidden = css`
    display: none;
`;

export const listItem = css`
    display: flex;
    flex: 1;
    gap: ${Spacing["spacing-8"]};
    align-items: flex-start;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    overflow: hidden;
    cursor: pointer;
    outline: none;
    border-radius: ${Radius["none"]};
`;

export const listItemToggleable = css`
    cursor: default;
`;

export const listItemActive = css`
    background: ${Colour["bg-hover"]};
`;

export const indent = css`
    ${tokens.level}: 0;

    width: calc((1lh + ${Spacing["spacing-8"]}) * var(${tokens.level}));
    height: 1px;
`;

export const expandButton = css`
    width: 1lh;
    height: 1lh;
    color: ${Colour["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Motion["duration-350"]} ${Motion["ease-standard"]};
    }
`;

export const expandButtonExpanded = css`
    svg {
        transform: rotate(90deg);
    }
`;

export const unexpandableIndicator = css`
    width: 1lh;
    height: 1lh;
    margin-right: ${Spacing["spacing-8"]};
`;

export const selectionIndicator = css`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: ${Spacing["spacing-16"]};
    height: 1lh;
`;

export const selectionIndicatorNested = css`
    width: 1lh;
`;

export const checkboxMixedIndicator = css`
    flex-shrink: 0;
    width: 1lh;
    height: 1lh;
    color: ${Colour["icon-selected"]};
`;
