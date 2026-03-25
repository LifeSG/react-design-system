"use strict";var a=require("styled-components"),i=require("../v3_theme/index.js");function n(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}const d=n(a).default.div`
    // matches Layout.Container
    --sgds-mainnav-padding-x: ${i.V3_Breakpoint["xxl-margin"]}px;
    --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["xxl-margin"]}px;

    ${i.V3_MediaQuery.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${i.V3_Breakpoint["xl-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["xl-margin"]}px;
    }

    ${i.V3_MediaQuery.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${i.V3_Breakpoint["lg-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["lg-margin"]}px;
    }

    ${i.V3_MediaQuery.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${i.V3_Breakpoint["md-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["md-margin"]}px;
    }

    ${i.V3_MediaQuery.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${i.V3_Breakpoint["sm-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["sm-margin"]}px;
    }

    ${i.V3_MediaQuery.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${i.V3_Breakpoint["xs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["xs-margin"]}px;
    }

    ${i.V3_MediaQuery.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${i.V3_Breakpoint["xxs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i.V3_Breakpoint["xxs-margin"]}px;
    }

    ${i=>i.$stretch?a.css`
                --sgds-mainnav-max-width: calc(infinity * 1px);
            `:a.css`
                --sgds-mainnav-max-width: 1440px;
            `}
`;exports.Wrapper=d;
//# sourceMappingURL=masthead.style.js.map
