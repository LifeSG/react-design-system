import { css } from "@linaria/core";

import { Colour, Font, Motion, Radius, Spacing } from "../theme";

export const tokens = {
    contentText: {
        maxCollapsedHeight:
            "--fds-internal-notificationBanner-contentText-maxCollapsedHeight",
    },
};

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Motion["duration-800"]} ${Motion["ease-default"]};
    background: ${Colour["bg-inverse-subtle"]};
    border-radius: ${Radius["none"]};
    z-index: 25;
    cursor: default;
`;

export const wrapperSticky = css`
    position: sticky;
`;

export const wrapperClickable = css`
    cursor: pointer;
`;

export const contentContainer = css`
    flex: 1;
    align-items: flex-start;
    padding: ${Spacing["spacing-24"]} 0;
`;

export const content = css`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${Font["body-baseline-regular"]}
    color: ${Colour["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${Font["body-baseline-semibold"]}
        color: ${Colour["text-inverse"]};
    }

    a {
        ${Font["body-baseline-regular"]}
        color: ${Colour["hyperlink-inverse"]};

        svg {
            color: ${Colour["icon-primary-inverse"]};
        }

        &:hover,
        &:active,
        &:visited,
        &:focus {
            color: ${Colour["hyperlink-inverse"]};
            svg {
                color: ${Colour["icon-primary-inverse"]};
            }
        }
    }
`;

export const contentWrapper = css`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const contentText = css`
    ${tokens.contentText.maxCollapsedHeight}: initial;
    flex: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

export const contentTextCollapsed = css`
    max-height: var(${tokens.contentText.maxCollapsedHeight});
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
`;

export const contentLink = css`
    position: relative;
    color: ${Colour["hyperlink-inverse"]};

    svg {
        color: ${Colour["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${Colour["hyperlink-inverse"]};
        svg {
            color: ${Colour["icon-primary-inverse"]};
        }
    }
`;

export const styledIconButton = css`
    margin-right: calc(${Spacing["spacing-24"]} * -1);
    padding-left: ${Spacing["spacing-16"]};
    height: max-content;

    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Colour["icon-inverse"]};
    }
`;

export const actionButton = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};
    align-self: flex-start;
    margin-top: ${Spacing["spacing-8"]};

    border: none;
    background: transparent;
    color: ${Colour["hyperlink-inverse"]};
    ${Font["body-md-semibold"]};

    cursor: pointer;
`;

export const accessibleBannerButton = css`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const iconContainer = css`
    height: 1.5rem;
    width: 1.5rem;
    margin: ${Spacing["spacing-24"]} ${Spacing["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${Colour["hyperlink-inverse"]};
    }
`;
