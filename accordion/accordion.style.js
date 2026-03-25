import e,{css as t}from"styled-components";import{Button as i}from"../button/button.js";import{V3_Border as o,V3_Colour as n,V3_MediaQuery as l,V3_Font as r}from"../v3_theme/index.js";const d=e.div`
    width: 100%;
    border-bottom: ${o["width-010"]} ${o.solid}
        ${n.border};
`,a=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${l.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return t`
                ${l.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,m=e.h2`
    display: flex;
    align-self: flex-start;
    flex: 1;

    ${r["heading-md-bold"]}
    color: ${n.text};

    ${l.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return t`
                ${l.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,s=e(i.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`;export{d as Content,s as ExpandCollapseLink,m as Title,a as TitleWrapper};
//# sourceMappingURL=accordion.style.js.map
