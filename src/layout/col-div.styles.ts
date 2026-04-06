import { css } from "@linaria/core";

import { Breakpoint } from "../theme/tokens/breakpoint";

export const tokens = {
    xxsStart: "--fds-internal-colDiv-xxs-start",
    xxsSpan: "--fds-internal-colDiv-xxs-span",
    xsStart: "--fds-internal-colDiv-xs-start",
    xsSpan: "--fds-internal-colDiv-xs-span",
    smStart: "--fds-internal-colDiv-sm-start",
    smSpan: "--fds-internal-colDiv-sm-span",
    mdStart: "--fds-internal-colDiv-md-start",
    mdSpan: "--fds-internal-colDiv-md-span",
    lgStart: "--fds-internal-colDiv-lg-start",
    lgSpan: "--fds-internal-colDiv-lg-span",
    xlStart: "--fds-internal-colDiv-xl-start",
    xlSpan: "--fds-internal-colDiv-xl-span",
    xxlStart: "--fds-internal-colDiv-xxl-start",
    xxlSpan: "--fds-internal-colDiv-xxl-span",
};

export const colDiv = css`
    position: relative;

    grid-column: var(${tokens.xxsStart}, auto) / span var(${tokens.xxsSpan}, 1);

    @media (min-width: ${Breakpoint["xs-min"]}) {
        grid-column: var(${tokens.xsStart}, auto) / span
            var(${tokens.xsSpan}, 1);
    }
    @media (min-width: ${Breakpoint["sm-min"]}) {
        grid-column: var(${tokens.smStart}, auto) / span
            var(${tokens.smSpan}, 1);
    }
    @media (min-width: ${Breakpoint["md-min"]}) {
        grid-column: var(${tokens.mdStart}, auto) / span
            var(${tokens.mdSpan}, 1);
    }
    @media (min-width: ${Breakpoint["lg-min"]}) {
        grid-column: var(${tokens.lgStart}, auto) / span
            var(${tokens.lgSpan}, 1);
    }
    @media (min-width: ${Breakpoint["xl-min"]}) {
        grid-column: var(${tokens.xlStart}, auto) / span
            var(${tokens.xlSpan}, 1);
    }
    @media (min-width: ${Breakpoint["xxl-min"]}) {
        grid-column: var(${tokens.xxlStart}, auto) / span
            var(${tokens.xxlSpan}, 1);
    }
`;
