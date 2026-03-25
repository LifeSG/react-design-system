import t,{css as m}from"styled-components";import{V3_Breakpoint as x,V3_MediaQuery as a}from"../v3_theme/index.js";const i=t.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    padding: 0 ${x["xxl-margin"]}px;

    ${a.MaxWidth.xl} {
        padding: 0 ${x["xl-margin"]}px;
    }

    ${a.MaxWidth.lg} {
        padding: 0 ${x["lg-margin"]}px;
    }

    ${a.MaxWidth.md} {
        padding: 0 ${x["md-margin"]}px;
    }

    ${a.MaxWidth.sm} {
        padding: 0 ${x["sm-margin"]}px;
    }

    ${a.MaxWidth.xs} {
        padding: 0 ${x["xs-margin"]}px;
    }

    ${a.MaxWidth.xxs} {
        padding: 0 ${x["xxs-margin"]}px;
    }

    ${t=>{if(!t.$stretch)return m`
                max-width: 1440px;
            `}}

    ${t=>{switch(t.$type){case"grid":return m`
                    column-gap: ${x["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${x["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${a.MaxWidth.xl} {
                        column-gap: ${x["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${x["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MaxWidth.lg} {
                        column-gap: ${x["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${x["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MaxWidth.md} {
                        column-gap: ${x["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${x["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MaxWidth.sm} {
                        column-gap: ${x["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${x["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MaxWidth.xs} {
                        column-gap: ${x["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${x["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${a.MaxWidth.xxs} {
                        column-gap: ${x["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${x["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return m`
                    display: flex;
                    flex-direction: column;
                `;default:return m`
                    display: flex;
                `}}}
`;export{i as StyledContainer};
//# sourceMappingURL=container.styles.js.map
