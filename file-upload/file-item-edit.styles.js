import t,{css as i}from"styled-components";import{Button as n}from"../button/button.js";import{Spacing as o,Colour as a,Border as r,Radius as e,MediaQuery as d}from"../theme/index.js";import{Typography as l}from"../typography/typography.js";const m=t.li`
    display: flex;
    flex-direction: column;
    padding: ${o["spacing-32"]};
    background: ${a["bg-primary-subtlest"]};
    border: ${r["width-010"]} ${r.solid} ${a.border};
    border-radius: ${e.sm};

    &:not(:last-child) {
        margin-bottom: ${o["spacing-16"]};
    }
`,s=t.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${o["spacing-16"]};
    width: 100%;
`,p=t.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,g=t.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${o["spacing-16"]};

    ${d.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,c=t(l.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${o["spacing-16"]};

    ${d.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${o["spacing-8"]};
    }
`,f=t(l.BodyMD)`
    color: ${a["text-subtler"]};
`,x=t.div`
    display: flex;
    justify-content: flex-end;
    ${d.MaxWidth.md} {
        flex-direction: column;
    }

    ${t=>{if(t.$thumbnail)return i`
                margin-left: calc(
                    96px + ${o["spacing-32"]}
                ); // thumbnail width + right margin

                ${d.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,$=t(n.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${o["spacing-16"]};
    }

    ${d.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${o["spacing-16"]};
        }
    }
`;export{$ as ActionButton,x as ActionButtonsSection,s as ContentSection,p as DetailsSection,c as FileNameText,f as FileSizeText,m as Item,g as NameSection};
//# sourceMappingURL=file-item-edit.styles.js.map
