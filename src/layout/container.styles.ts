import { css } from "@linaria/core";

import { MediaQuery } from "../theme";
import { Breakpoint } from "../theme/tokens/breakpoint";

export const container = css`
    position: relative;
    flex-grow: 1;
    width: auto;
    height: auto;
    padding: 0 ${Breakpoint["xxs-margin"]};
    margin: 0 auto;

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
    display: grid;
    grid-template-columns: repeat(${Breakpoint["xxs-column"]}, minmax(0, 1fr));
    column-gap: ${Breakpoint["xxs-gutter"]};

    ${MediaQuery.MinWidth.xs} {
        grid-template-columns: repeat(${Breakpoint["xs-column"]}, minmax(0, 1fr));
        column-gap: ${Breakpoint["xs-gutter"]};
    }

    ${MediaQuery.MinWidth.sm} {
        grid-template-columns: repeat(${Breakpoint["sm-column"]}, minmax(0, 1fr));
        column-gap: ${Breakpoint["sm-gutter"]};
    }

    ${MediaQuery.MinWidth.md} {
        grid-template-columns: repeat(${Breakpoint["md-column"]}, minmax(0, 1fr));
        column-gap: ${Breakpoint["md-gutter"]};
    }

    ${MediaQuery.MinWidth.lg} {
        grid-template-columns: repeat(${Breakpoint["lg-column"]}, minmax(0, 1fr));
        column-gap: ${Breakpoint["lg-gutter"]};
    }

    ${MediaQuery.MinWidth.xl} {
        grid-template-columns: repeat(${Breakpoint["xl-column"]}, minmax(0, 1fr));
        column-gap: ${Breakpoint["xl-gutter"]};
    }

    ${MediaQuery.MinWidth.xxl} {
        grid-template-columns: repeat(${Breakpoint["xxl-column"]}, minmax(0, 1fr));
        column-gap: ${Breakpoint["xxl-gutter"]};
    }
`;

export const containerFlexColumn = css`
    display: flex;
    flex-direction: column;
`;

export const containerFlex = css`
    display: flex;
`;
