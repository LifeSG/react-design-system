import t,{css as i}from"styled-components";import{Button as n}from"../button/button.js";import{Spacing as o,Border as a,Colour as d,MediaQuery as r}from"../theme/index.js";import{Typography as e}from"../typography/typography.js";const l=t.li`
    display: flex;
    flex-direction: column;
    padding: ${o["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${a["width-010"]} ${a.solid} ${d.border};
    }
`,m=t.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${o["spacing-16"]};
    width: 100%;
`,s=t.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,p=t.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${o["spacing-16"]};

    ${r.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,g=t(e.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${o["spacing-16"]};

    ${r.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${o["spacing-8"]};
    }
`,c=t(e.BodyMD)``,f=t.div`
    display: flex;
    ${r.MaxWidth.md} {
        flex-direction: column;
    }

    ${t=>{if(t.$thumbnail)return i`
                margin-left: calc(
                    96px + ${o["spacing-32"]}
                ); // thumbnail width + right margin

                ${r.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,x=t(n.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${o["spacing-16"]};
    }

    ${r.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${o["spacing-16"]};
        }
    }
`;export{x as ActionButton,f as ActionButtonsSection,m as ContentSection,s as DetailsSection,g as FileNameText,c as FileSizeText,l as Item,p as NameSection};
//# sourceMappingURL=file-item-edit.styles.js.map
