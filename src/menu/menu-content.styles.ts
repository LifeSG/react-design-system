import { css } from "@linaria/core";

import {
    Border,
    Breakpoint,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
} from "../theme/tokens";

export const tokens = {
    panel: {
        availableWidth: "--fds-internal-menu-panel-availableWidth",
        maxHeight: "--fds-internal-menu-panel-maxHeight",
        overflow: "--fds-internal-menu-panel-overflow",
        xSpacing: "--fds-internal-menu-panel-xSpacing",
    },
} as const;

export const panel = css`
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    box-shadow: ${Shadow["md-subtle"]};

    ${tokens.panel.maxHeight}: initial;
    ${tokens.panel.overflow}: initial;
    ${tokens.panel.xSpacing}: 0px;
    ${tokens.panel.availableWidth}: calc(100vw - var(${tokens.panel
        .xSpacing}) * 2);

    ${MediaQuery.MaxWidth.sm} {
        ${tokens.panel.xSpacing}: ${Breakpoint["sm-margin"]};
    }

    ${MediaQuery.MaxWidth.xs} {
        ${tokens.panel.xSpacing}: ${Breakpoint["xs-margin"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        ${tokens.panel.xSpacing}: ${Breakpoint["xxs-margin"]};
    }

    min-width: min(15rem, var(${tokens.panel.availableWidth}));
    max-width: min(24rem, var(${tokens.panel.availableWidth}));
    max-height: var(${tokens.panel.maxHeight});
    overflow-y: var(${tokens.panel.overflow});

    &:focus {
        outline: none;
    }

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
