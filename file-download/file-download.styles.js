import t,{css as o}from"styled-components";import{Markup as e}from"../markup/markup.js";import{V3_Spacing as i,V3_MediaQuery as r,V3_Border as l,V3_Colour as s,V3_Radius as d,V3_Font as n}from"../v3_theme/index.js";const a=t.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${t=>{if(t.$border)return o`
                ${l.Util["dashed-default"]({radius:d.sm,thickness:l["width-040"],colour:s.border})}
                padding: ${i["spacing-32"]};

                ${r.MaxWidth.sm} {
                    padding: ${i["spacing-32"]}
                        ${i["spacing-20"]};
                }
            `}}
`,p=t.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${i["spacing-32"]};
`,m=t.p`
    ${n["heading-xs-regular"]}
    color: ${s.text};
    margin-bottom: ${i["spacing-8"]};
`,c=t(e)`
    color: ${s.text};
`,$=t.p`
    ${n["body-md-regular"]}
    color: ${s["text-subtler"]};
`,u=t(e)`
    color: ${s["text-subtler"]};
`,g=t.ul`
    list-style-type: none;
`;export{a as Container,$ as Description,u as DescriptionContainer,g as ListWrapper,p as TextContainer,m as Title,c as TitleContainer};
//# sourceMappingURL=file-download.styles.js.map
