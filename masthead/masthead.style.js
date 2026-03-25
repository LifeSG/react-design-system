import a,{css as n}from"styled-components";import{V3_Breakpoint as i,V3_MediaQuery as d}from"../v3_theme/index.js";const x=a.div`
    // matches Layout.Container
    --sgds-mainnav-padding-x: ${i["xxl-margin"]}px;
    --sgds-mainnav-mobile-padding-x: ${i["xxl-margin"]}px;

    ${d.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${i["xl-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i["xl-margin"]}px;
    }

    ${d.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${i["lg-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i["lg-margin"]}px;
    }

    ${d.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${i["md-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i["md-margin"]}px;
    }

    ${d.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${i["sm-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i["sm-margin"]}px;
    }

    ${d.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${i["xs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i["xs-margin"]}px;
    }

    ${d.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${i["xxs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${i["xxs-margin"]}px;
    }

    ${a=>a.$stretch?n`
                --sgds-mainnav-max-width: calc(infinity * 1px);
            `:n`
                --sgds-mainnav-max-width: 1440px;
            `}
`;export{x as Wrapper};
//# sourceMappingURL=masthead.style.js.map
