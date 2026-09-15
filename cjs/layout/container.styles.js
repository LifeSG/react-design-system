"use strict";var e=require("styled-components"),a=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const i=t(e).default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    padding: 0 ${a.Breakpoint["xxl-margin"]}px;

    ${a.MediaQuery.MaxWidth.xl} {
        padding: 0 ${a.Breakpoint["xl-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.lg} {
        padding: 0 ${a.Breakpoint["lg-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.md} {
        padding: 0 ${a.Breakpoint["md-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.sm} {
        padding: 0 ${a.Breakpoint["sm-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.xs} {
        padding: 0 ${a.Breakpoint["xs-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.xxs} {
        padding: 0 ${a.Breakpoint["xxs-margin"]}px;
    }

    ${a=>{if(!a.$stretch)return e.css`
                max-width: 1440px;
            `}}

    ${t=>{switch(t.$type){case"grid":return e.css`
                    column-gap: ${a.Breakpoint["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${a.Breakpoint["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${a.MediaQuery.MaxWidth.xl} {
                        column-gap: ${a.Breakpoint["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.Breakpoint["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MediaQuery.MaxWidth.lg} {
                        column-gap: ${a.Breakpoint["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.Breakpoint["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MediaQuery.MaxWidth.md} {
                        column-gap: ${a.Breakpoint["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.Breakpoint["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MediaQuery.MaxWidth.sm} {
                        column-gap: ${a.Breakpoint["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.Breakpoint["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MediaQuery.MaxWidth.xs} {
                        column-gap: ${a.Breakpoint["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.Breakpoint["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MediaQuery.MaxWidth.xxs} {
                        column-gap: ${a.Breakpoint["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${a.Breakpoint["xxs-column"]},
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
