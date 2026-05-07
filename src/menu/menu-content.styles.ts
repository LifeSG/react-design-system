import { css } from "@linaria/core";

import { Border, Breakpoint, Colour, MediaQuery, Radius, Shadow } from "../theme/tokens";

export const tokens = {
    panel: {
        availableWidth: "--fds-internal-menu-panel-availableWidth",
        maxHeight: "--fds-internal-menu-panel-maxHeight",
        overflow: "--fds-internal-menu-panel-overflow",
        xSpacing: "--fds-internal-menu-panel-xSpacing",
    },
} as const;

export const panel = css`
    ${tokens.panel.maxHeight}: initial;
    ${tokens.panel.overflow}: initial;
    ${tokens.panel.xSpacing}: 0px;
    ${tokens.panel.availableWidth}: calc(100vw - var(${tokens.panel.xSpacing}) * 2);

    min-width: min(15rem, var(${tokens.panel.availableWidth}));
    max-width: min(24rem, var(${tokens.panel.availableWidth}));
    max-height: var(${tokens.panel.maxHeight});
    overflow-y: var(${tokens.panel.overflow});
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    box-shadow: ${Shadow["md-subtle"]};

    ${MediaQuery.MaxWidth.sm} {
        ${tokens.panel.xSpacing}: ${Breakpoint["sm-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xs} {
        ${tokens.panel.xSpacing}: ${Breakpoint["xs-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xxs} {
        ${tokens.panel.xSpacing}: ${Breakpoint["xxs-margin"]}px;
    }

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
        background-clip: padding-box;
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
    }
`;
