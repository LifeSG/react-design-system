import { css } from "@linaria/core";

import { Colour, MediaQuery, Motion, Shadow, Spacing } from "../theme";

export const tokens = {
    container: {
        viewHeight: "--fds-internal-navbar-drawer-viewHeight",
    },
};

export const wrapper = css`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
    }
`;

export const container = css`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    display: block;
    padding: 0 0 ${Spacing["spacing-16"]};
    background-color: ${Colour.bg};
    box-shadow: ${Shadow["xs-subtle"]};
    outline: none;

    /* reset variable to prevent leaking to child components */
    ${tokens.container.viewHeight}: initial;
    height: calc(var(${tokens.container.viewHeight}, 1vh) * 100);

    ${MediaQuery.MaxWidth.lg} {
        width: 75%;
    }

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`;

export const containerShown = css`
    visibility: visible;
    right: 0;
    transition: all 300ms ${Motion["ease-entrance"]};
    transition-delay: 200ms;
`;

export const containerHidden = css`
    visibility: hidden;
    right: -100%;
    transition: all 300ms ${Motion["ease-exit"]};
`;

export const content = css`
    display: flex;
    flex-direction: column;
`;

// -----------------------------------------------------------------------------
// NAV CONTENTS
// -----------------------------------------------------------------------------
export const topBar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Spacing["spacing-40"]} ${Spacing["spacing-20"]}
        ${Spacing["spacing-32"]};
`;

export const closeIcon = css`
    height: 1.5rem;
    width: 1.5rem;
`;

export const closeButton = css`
    position: absolute;
    right: calc(${Spacing["spacing-4"]} * -1);
    color: ${Colour["icon"]};

    &:active,
    &:focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;
