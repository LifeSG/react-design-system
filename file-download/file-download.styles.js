import t,{css as e}from"styled-components";import{applyHtmlContentStyle as i}from"../shared/html-content/html-content.js";import{V3_Spacing as o,V3_MediaQuery as r,V3_Border as d,V3_Colour as n,V3_Radius as l,V3_Font as s}from"../v3_theme/index.js";const a=t.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${t=>{if(t.$border)return e`
                ${d.Util["dashed-default"]({radius:l.sm,thickness:d["width-040"],colour:n.border})}
                padding: ${o["spacing-32"]};

                ${r.MaxWidth.sm} {
                    padding: ${o["spacing-32"]}
                        ${o["spacing-20"]};
                }
            `}}
`,m=t.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${o["spacing-32"]};
`,c=t.p`
    ${s["heading-xs-regular"]}
    color: ${n.text};
    margin-bottom: ${o["spacing-8"]};
`,p=t.div`
    ${i({textSize:"heading-xs"})}
    color: ${n.text};
`,$=t.p`
    ${s["body-md-regular"]}
    color: ${n["text-subtler"]};
`,x=t.div`
    ${i({textSize:"body-md"})}
    color: ${n["text-subtler"]};
`,g=t.ul`
    list-style-type: none;
`;export{a as Container,$ as Description,x as DescriptionContainer,g as ListWrapper,m as TextContainer,c as Title,p as TitleContainer};
//# sourceMappingURL=file-download.styles.js.map
