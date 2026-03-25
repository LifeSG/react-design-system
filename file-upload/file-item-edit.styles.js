import t,{css as i}from"styled-components";import{Button as n}from"../button/button.js";import{Typography as o}from"../typography/index.js";import{V3_Spacing as a,V3_Border as d,V3_Colour as e,V3_MediaQuery as r}from"../v3_theme/index.js";const l=t.li`
    display: flex;
    flex-direction: column;
    padding: ${a["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${d["width-010"]} ${d.solid}
            ${e.border};
    }
`,m=t.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${a["spacing-16"]};
    width: 100%;
`,s=t.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,p=t.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${a["spacing-16"]};

    ${r.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,g=t(o.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${a["spacing-16"]};

    ${r.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${a["spacing-8"]};
    }
`,c=t(o.BodyMD)``,f=t.div`
    display: flex;
    ${r.MaxWidth.md} {
        flex-direction: column;
    }

    ${t=>{if(t.$thumbnail)return i`
                margin-left: calc(
                    96px + ${a["spacing-32"]}
                ); // thumbnail width + right margin

                ${r.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,x=t(n.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${a["spacing-16"]};
    }

    ${r.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${a["spacing-16"]};
        }
    }
`;export{x as ActionButton,f as ActionButtonsSection,m as ContentSection,s as DetailsSection,g as FileNameText,c as FileSizeText,l as Item,p as NameSection};
//# sourceMappingURL=file-item-edit.styles.js.map
