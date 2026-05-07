import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Motion, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const container = css`
    background-color: ${Colour.bg};
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const containerExpanded = css`
    padding-bottom: ${Spacing["spacing-16"]};
`;

export const expandCollapseButton = css`
    display: flex;
    flex-direction: row;
    gap: ${Spacing["spacing-48"]};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${Spacing["spacing-16"]} 0;
    text-align: left;
    user-select: text;
    outline: none;
    background: transparent;
    border: none;
    border-radius: ${Radius["sm"]};

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
    }
`;

export const expandCollapseButtonExpanded = css`
    padding-bottom: ${Spacing["spacing-8"]};
`;

export const expandCollapseButtonCollapsible = css`
    cursor: pointer;
`;

export const title = css`
    flex: 1;
    color: ${Colour["text"]};
    transition: all ${Motion["duration-250"]} ${Motion["ease-standard"]};
    ${Font["heading-sm-bold"]}
`;

export const titleSmall = css`
    ${Font["heading-xs-bold"]}
`;

export const iconContainer = css`
    transform: rotate(180deg);
    transition: transform ${Motion["duration-250"]};
`;

export const iconContainerExpanded = css`
    transform: rotate(0deg);
`;

export const chevronIcon = css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${Colour["icon-primary"]};
`;

export const expandable = css`
    overflow: hidden;
`;

export const contentContainer = css`
    display: inline-block;
    padding-right: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.lg} {
        padding-right: 0;
    }
`;
