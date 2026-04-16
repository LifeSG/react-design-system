import { css } from "@linaria/core";

import { Colour, Motion, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================

export const tokens = {
    level: "--fds-internal-nestedDropdownList-indent-level",
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
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Spacing["spacing-8"]};
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    cursor: pointer;
    overflow: hidden;
    border-radius: ${Radius["none"]};
    outline: none;
`;

export const listItemToggleable = css`
    cursor: default;
`;

export const listItemActive = css`
    background: ${Colour["bg-hover"]};
`;

export const indent = css`
    ${tokens.level}: 0;
    height: 1px;
    width: calc((1lh + ${Spacing["spacing-8"]}) * var(${tokens.level}));
`;

const expandButtonTransition = `transform ${Motion["duration-350"]} ${Motion["ease-standard"]}`;

export const expandButton = css`
    width: 1lh;
    height: 1lh;
    color: ${Colour["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: ${expandButtonTransition};
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
    flex-shrink: 0;
    height: 1lh;
    width: ${Spacing["spacing-16"]};
    display: flex;
    justify-content: center;
`;

export const selectionIndicatorNested = css`
    width: 1lh;
`;

export const checkboxMixedIndicator = css`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-selected"]};
`;
