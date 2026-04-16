import { css } from "@linaria/core";

import { MediaQuery } from "../theme";
import { Breakpoint } from "../theme/tokens/breakpoint";

export const container = css`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 ${Breakpoint["xxs-margin"]};

    ${MediaQuery.MinWidth.xs} {
        padding: 0 ${Breakpoint["xs-margin"]};
    }
    ${MediaQuery.MinWidth.sm} {
        padding: 0 ${Breakpoint["sm-margin"]};
    }
    ${MediaQuery.MinWidth.md} {
        padding: 0 ${Breakpoint["md-margin"]};
    }
    ${MediaQuery.MinWidth.lg} {
        padding: 0 ${Breakpoint["lg-margin"]};
    }
    ${MediaQuery.MinWidth.xl} {
        padding: 0 ${Breakpoint["xl-margin"]};
    }
    ${MediaQuery.MinWidth.xxl} {
        padding: 0 ${Breakpoint["xxl-margin"]};
    }
`;

export const containerNotStretched = css`
    max-width: 1440px;
`;

export const containerGrid = css`
    column-gap: ${Breakpoint["xxs-gutter"]};
    display: grid;
    grid-template-columns: repeat(${Breakpoint["xxs-column"]}, minmax(0, 1fr));

    ${MediaQuery.MinWidth.xs} {
        column-gap: ${Breakpoint["xs-gutter"]};
        grid-template-columns: repeat(
            ${Breakpoint["xs-column"]},
            minmax(0, 1fr)
        );
    }
    ${MediaQuery.MinWidth.sm} {
        column-gap: ${Breakpoint["sm-gutter"]};
        grid-template-columns: repeat(
            ${Breakpoint["sm-column"]},
            minmax(0, 1fr)
        );
    }
    ${MediaQuery.MinWidth.md} {
        column-gap: ${Breakpoint["md-gutter"]};
        grid-template-columns: repeat(
            ${Breakpoint["md-column"]},
            minmax(0, 1fr)
        );
    }
    ${MediaQuery.MinWidth.lg} {
        column-gap: ${Breakpoint["lg-gutter"]};
        grid-template-columns: repeat(
            ${Breakpoint["lg-column"]},
            minmax(0, 1fr)
        );
    }
    ${MediaQuery.MinWidth.xl} {
        column-gap: ${Breakpoint["xl-gutter"]};
        grid-template-columns: repeat(
            ${Breakpoint["xl-column"]},
            minmax(0, 1fr)
        );
    }
    ${MediaQuery.MinWidth.xxl} {
        column-gap: ${Breakpoint["xxl-gutter"]};
        grid-template-columns: repeat(
            ${Breakpoint["xxl-column"]},
            minmax(0, 1fr)
        );
    }
`;

export const containerFlexColumn = css`
    display: flex;
    flex-direction: column;
`;

export const containerFlex = css`
    display: flex;
`;
