"use strict";var e=require("styled-components"),a=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const i=t(e).default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    padding: 0 ${a.V3_Breakpoint["xxl-margin"]}px;

    ${a.V3_MediaQuery.MaxWidth.xl} {
        padding: 0 ${a.V3_Breakpoint["xl-margin"]}px;
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        padding: 0 ${a.V3_Breakpoint["lg-margin"]}px;
    }

    ${a.V3_MediaQuery.MaxWidth.md} {
        padding: 0 ${a.V3_Breakpoint["md-margin"]}px;
    }

    ${a.V3_MediaQuery.MaxWidth.sm} {
        padding: 0 ${a.V3_Breakpoint["sm-margin"]}px;
    }

    ${a.V3_MediaQuery.MaxWidth.xs} {
        padding: 0 ${a.V3_Breakpoint["xs-margin"]}px;
    }

    ${a.V3_MediaQuery.MaxWidth.xxs} {
        padding: 0 ${a.V3_Breakpoint["xxs-margin"]}px;
    }

    ${a=>{if(!a.$stretch)return e.css`
                max-width: 1440px;
            `}}

    ${t=>{switch(t.$type){case"grid":return e.css`
                    column-gap: ${a.V3_Breakpoint["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${a.V3_Breakpoint["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${a.V3_MediaQuery.MaxWidth.xl} {
                        column-gap: ${a.V3_Breakpoint["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.V3_Breakpoint["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.V3_MediaQuery.MaxWidth.lg} {
                        column-gap: ${a.V3_Breakpoint["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.V3_Breakpoint["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.V3_MediaQuery.MaxWidth.md} {
                        column-gap: ${a.V3_Breakpoint["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.V3_Breakpoint["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.V3_MediaQuery.MaxWidth.sm} {
                        column-gap: ${a.V3_Breakpoint["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.V3_Breakpoint["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.V3_MediaQuery.MaxWidth.xs} {
                        column-gap: ${a.V3_Breakpoint["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.V3_Breakpoint["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.V3_MediaQuery.MaxWidth.xxs} {
                        column-gap: ${a.V3_Breakpoint["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.V3_Breakpoint["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return e.css`
                    display: flex;
                    flex-direction: column;
                `;default:return e.css`
                    display: flex;
                `}}}
`;exports.StyledContainer=i;
//# sourceMappingURL=container.styles.js.map
