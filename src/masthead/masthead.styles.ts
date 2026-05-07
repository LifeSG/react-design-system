import { css } from "@linaria/core";

import { Breakpoint, MediaQuery } from "../theme";

export const wrapper = css`
    /* matches Layout.Container */
    --sgds-mainnav-padding-x: ${Breakpoint["xxl-margin"]};
    --sgds-mainnav-mobile-padding-x: ${Breakpoint["xxl-margin"]};
    --sgds-mainnav-max-width: 1440px;

    ${MediaQuery.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${Breakpoint["xl-margin"]};
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["xl-margin"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${Breakpoint["lg-margin"]};
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["lg-margin"]};
    }

    ${MediaQuery.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${Breakpoint["md-margin"]};
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["md-margin"]};
    }

    ${MediaQuery.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${Breakpoint["sm-margin"]};
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["sm-margin"]};
    }

    ${MediaQuery.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${Breakpoint["xs-margin"]};
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["xs-margin"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${Breakpoint["xxs-margin"]};
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["xxs-margin"]};
    }
`;

export const wrapperStretch = css`
    --sgds-mainnav-max-width: calc(infinity * 1px);
`;
