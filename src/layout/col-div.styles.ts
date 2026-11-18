import { css } from "@linaria/core";

import type { BreakpointSize } from "../theme";
import { MediaQuery } from "../theme";

export const tokens = {
    xxsStart: "--fds-internal-colDiv-xxs-start",
    xxsSpan: "--fds-internal-colDiv-xxs-span",
    xxsEnd: "--fds-internal-colDiv-xxs-end",
    xxsStartAttr: "data-xxs-start",
    xxsSpanAttr: "data-xxs-span",
    xxsEndAttr: "data-xxs-end",
    xsStart: "--fds-internal-colDiv-xs-start",
    xsSpan: "--fds-internal-colDiv-xs-span",
    xsEnd: "--fds-internal-colDiv-xs-end",
    xsStartAttr: "data-xs-start",
    xsSpanAttr: "data-xs-span",
    xsEndAttr: "data-xs-end",
    smStart: "--fds-internal-colDiv-sm-start",
    smSpan: "--fds-internal-colDiv-sm-span",
    smEnd: "--fds-internal-colDiv-sm-end",
    smStartAttr: "data-sm-start",
    smSpanAttr: "data-sm-span",
    smEndAttr: "data-sm-end",
    mdStart: "--fds-internal-colDiv-md-start",
    mdSpan: "--fds-internal-colDiv-md-span",
    mdEnd: "--fds-internal-colDiv-md-end",
    mdStartAttr: "data-md-start",
    mdSpanAttr: "data-md-span",
    mdEndAttr: "data-md-end",
    lgStart: "--fds-internal-colDiv-lg-start",
    lgSpan: "--fds-internal-colDiv-lg-span",
    lgEnd: "--fds-internal-colDiv-lg-end",
    lgStartAttr: "data-lg-start",
    lgSpanAttr: "data-lg-span",
    lgEndAttr: "data-lg-end",
    xlStart: "--fds-internal-colDiv-xl-start",
    xlSpan: "--fds-internal-colDiv-xl-span",
    xlEnd: "--fds-internal-colDiv-xl-end",
    xlStartAttr: "data-xl-start",
    xlSpanAttr: "data-xl-span",
    xlEndAttr: "data-xl-end",
    xxlStart: "--fds-internal-colDiv-xxl-start",
    xxlSpan: "--fds-internal-colDiv-xxl-span",
    xxlEnd: "--fds-internal-colDiv-xxl-end",
    xxlStartAttr: "data-xxl-start",
    xxlSpanAttr: "data-xxl-span",
    xxlEndAttr: "data-xxl-end",
};

/**
 * Resolves the grid placement for a breakpoint. Before hydration, the layout
 * relies on the `data-` attributes. Once the component is mounted, it sets the
 * CSS variables, which take precedence.
 *
 * - `col-start`: the start line (integer)
 * - `col-end`: the end line (-1 only)
 * - `col-span`: the number of columns to span (integer)
 *
 * `col-end` is only emitted when spanning to a line, so it takes precedence
 * over `col-span`.
 */
const gridCol = (breakpoint: BreakpointSize) => {
    const start = tokens[`${breakpoint}Start`];
    const end = tokens[`${breakpoint}End`];
    const span = tokens[`${breakpoint}Span`];
    const startAttr = tokens[`${breakpoint}StartAttr`];
    const endAttr = tokens[`${breakpoint}EndAttr`];
    const spanAttr = tokens[`${breakpoint}SpanAttr`];

    return `
        @supports (x: attr(x type(*))) {
            grid-column-start: var(${start}, attr(${startAttr} type(<integer>), auto));
            grid-column-end: var(${end}, attr(${endAttr} type(<integer>), span var(${span}, attr(${spanAttr} type(<integer>), 1))));
        }

        @supports not (x: attr(x type(*))) {
            grid-column-start: var(${start}, auto);
            grid-column-end: var(${end}, span var(${span}, 1));
        }
    `;
};

export const colDiv = css`
    ${Object.values(tokens)
        .map((token) => `${token}: initial;`)
        .join("")}

    position: relative;

    ${gridCol("xxs")};

    ${MediaQuery.MinWidth.xs} {
        ${gridCol("xs")};
    }
    ${MediaQuery.MinWidth.sm} {
        ${gridCol("sm")};
    }
    ${MediaQuery.MinWidth.md} {
        ${gridCol("md")};
    }
    ${MediaQuery.MinWidth.lg} {
        ${gridCol("lg")};
    }
    ${MediaQuery.MinWidth.xl} {
        ${gridCol("xl")};
    }
    ${MediaQuery.MinWidth.xxl} {
        ${gridCol("xxl")};
    }
`;
