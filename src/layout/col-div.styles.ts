import { css } from "@linaria/core";

import { MediaQuery } from "../theme";

export const tokens = {
    xxsStart: "--fds-internal-colDiv-xxs-start",
    xxsSpan: "--fds-internal-colDiv-xxs-span",
    xxsEnd: "--fds-internal-colDiv-xxs-end",
    xsStart: "--fds-internal-colDiv-xs-start",
    xsSpan: "--fds-internal-colDiv-xs-span",
    xsEnd: "--fds-internal-colDiv-xs-end",
    smStart: "--fds-internal-colDiv-sm-start",
    smSpan: "--fds-internal-colDiv-sm-span",
    smEnd: "--fds-internal-colDiv-sm-end",
    mdStart: "--fds-internal-colDiv-md-start",
    mdSpan: "--fds-internal-colDiv-md-span",
    mdEnd: "--fds-internal-colDiv-md-end",
    lgStart: "--fds-internal-colDiv-lg-start",
    lgSpan: "--fds-internal-colDiv-lg-span",
    lgEnd: "--fds-internal-colDiv-lg-end",
    xlStart: "--fds-internal-colDiv-xl-start",
    xlSpan: "--fds-internal-colDiv-xl-span",
    xlEnd: "--fds-internal-colDiv-xl-end",
    xxlStart: "--fds-internal-colDiv-xxl-start",
    xxlSpan: "--fds-internal-colDiv-xxl-span",
    xxlEnd: "--fds-internal-colDiv-xxl-end",
};

export const colDiv = css`
    ${Object.values(tokens)
        .map((token) => `${token}: initial;`)
        .join("\n    ")}

    position: relative;

    grid-column: var(${tokens.xxsStart}, auto) /
        var(${tokens.xxsEnd}, span var(${tokens.xxsSpan}, 1));

    ${MediaQuery.MinWidth.xs} {
        grid-column: var(${tokens.xsStart}, auto) /
            var(${tokens.xsEnd}, span var(${tokens.xsSpan}, 1));
    }
    ${MediaQuery.MinWidth.sm} {
        grid-column: var(${tokens.smStart}, auto) /
            var(${tokens.smEnd}, span var(${tokens.smSpan}, 1));
    }
    ${MediaQuery.MinWidth.md} {
        grid-column: var(${tokens.mdStart}, auto) /
            var(${tokens.mdEnd}, span var(${tokens.mdSpan}, 1));
    }
    ${MediaQuery.MinWidth.lg} {
        grid-column: var(${tokens.lgStart}, auto) /
            var(${tokens.lgEnd}, span var(${tokens.lgSpan}, 1));
    }
    ${MediaQuery.MinWidth.xl} {
        grid-column: var(${tokens.xlStart}, auto) /
            var(${tokens.xlEnd}, span var(${tokens.xlSpan}, 1));
    }
    ${MediaQuery.MinWidth.xxl} {
        grid-column: var(${tokens.xxlStart}, auto) /
            var(${tokens.xxlEnd}, span var(${tokens.xxlSpan}, 1));
    }
`;
