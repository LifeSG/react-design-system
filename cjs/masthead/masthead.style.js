"use strict";var a=require("styled-components"),i=require("../theme/index.js");function n(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}const d=n(a).default.div`
    // matches Layout.Container
    --sgds-mainnav-padding-x: ${i.Breakpoint["xxl-margin"]}px;
    --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["xxl-margin"]}px;

    ${i.MediaQuery.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${i.Breakpoint["xl-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["xl-margin"]}px;
    }

    ${i.MediaQuery.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${i.Breakpoint["lg-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["lg-margin"]}px;
    }

    ${i.MediaQuery.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${i.Breakpoint["md-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["md-margin"]}px;
    }

    ${i.MediaQuery.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${i.Breakpoint["sm-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["sm-margin"]}px;
    }

    ${i.MediaQuery.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${i.Breakpoint["xs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["xs-margin"]}px;
    }

    ${i.MediaQuery.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${i.Breakpoint["xxs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.Breakpoint["xxs-margin"]}px;
    }

    ${i=>i.$stretch?a.css`
                --sgds-mainnav-max-width: calc(infinity * 1px);
            `:a.css`
                --sgds-mainnav-max-width: 1440px;
            `}
`;exports.Wrapper=d;
//# sourceMappingURL=masthead.style.js.map
