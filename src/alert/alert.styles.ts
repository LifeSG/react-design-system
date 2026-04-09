import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Spacing } from "../theme/tokens";

export const tokens = {
    maxCollapsedHeight:
        "--fds-internal-alert-textWrapperContainer-maxCollapsedHeight",
};

// =============================================================================
// WRAPPER
// =============================================================================
export const wrapper = css`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    display: flex;
    border-left: ${Border["width-020"]} ${Border["solid"]};
`;

export const wrapperError = css`
    background: ${Colour["bg-error"]};
    border-left-color: ${Colour["border-error"]};
`;

export const wrapperSuccess = css`
    background: ${Colour["bg-success"]};
    border-left-color: ${Colour["border-success"]};
`;

export const wrapperWarning = css`
    background: ${Colour["bg-warning"]};
    border-left-color: ${Colour["border-warning"]};
`;

export const wrapperInfo = css`
    background: ${Colour["bg-info"]};
    border-left-color: ${Colour["border-info"]};
`;

export const wrapperDescription = css`
    background: ${Colour["bg-strong"]};
    border-left-color: ${Colour["border-strong"]};
`;

// =============================================================================
// ALERT ICON WRAPPER
// =============================================================================
export const alertIconWrapper = css`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Spacing["spacing-8"]};
`;

export const alertIconWrapperSmall = css`
    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const alertIconWrapperDefault = css`
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const alertIconError = css`
    svg {
        color: ${Colour["icon-error"]};
    }
`;

export const alertIconSuccess = css`
    svg {
        color: ${Colour["icon-success"]};
    }
`;

export const alertIconWarning = css`
    svg {
        color: ${Colour["icon-warning"]};
    }
`;

export const alertIconInfo = css`
    svg {
        color: ${Colour["icon-info"]};
    }
`;

export const alertIconDescription = css`
    svg {
        color: ${Colour["icon-subtle"]};
    }
`;

// =============================================================================
// ACTION LINK TEXT
// =============================================================================
export const actionLinkText = css`
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Spacing["spacing-4"]};
    }
`;

export const actionLinkTextDefault = css`
    ${Font["body-md-semibold"]}
    margin-top: ${Spacing["spacing-8"]};
`;

export const actionLinkTextSmall = css`
    ${Font["body-sm-semibold"]}
    margin-top: ${Spacing["spacing-4"]};
`;

// =============================================================================
// CONTENT CONTAINER
// =============================================================================
export const contentContainer = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`;

// =============================================================================
// TEXT WRAPPER CONTAINER
// =============================================================================
export const textWrapperContainer = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
`;

export const textWrapperContainerShowMoreWithLink = css`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const textWrapperContainerCollapsed = css`
    max-height: var(${tokens.maxCollapsedHeight});
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
`;

// =============================================================================
// TEXT WRAPPER
// =============================================================================
export const textWrapper = css`
    color: ${Colour.text};
`;

// =============================================================================
// SHOW MORE BUTTON
// =============================================================================
export const showMoreButton = css`
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Spacing["spacing-4"]};
    margin-top: ${Spacing["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Colour["text-primary"]};
`;

export const showMoreButtonDefault = css`
    ${Font["body-md-semibold"]}
`;

export const showMoreButtonSmall = css`
    ${Font["body-sm-semibold"]}
`;

// =============================================================================
// CHEVRON ICON
// =============================================================================
export const chevronIcon = css`
    transition: transform ${Motion["duration-350"]} ${Motion["ease-standard"]};
`;

export const chevronIconExpanded = css`
    transform: rotate(180deg);
`;

export const chevronIconCollapsed = css`
    transform: rotate(0deg);
`;
