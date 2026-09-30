import t from"styled-components";import{Alert as i}from"../alert/alert.js";import{Button as o}from"../button/button.js";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{Spacing as m,Colour as r,MediaQuery as n}from"../theme/index.js";import{Typography as d}from"../typography/typography.js";const l=t.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${m["spacing-32"]};
    gap: ${m["spacing-8"]};
`,a=t(d.BodyBL)``,s=t.div`
    color: ${r.text};
    ${e({textSize:"body-baseline"})}
`,p=t(d.BodyMD)`
    color: ${r["text-subtler"]};
`,c=t.div`
    color: ${r.text};
    ${e({textSize:"body-md"})}
`,x=t(i)`
    margin-bottom: ${m["spacing-32"]};
`,g=t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${n.MaxWidth.md} {
        align-items: flex-start;
    }
`,h=t(o.Small)`
    width: 10rem;

    ${n.MaxWidth.md} {
        width: 100%;
    }
`,y=t(d.BodyMD)`
    color: ${r["text-subtler"]};
    margin-top: ${m["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${n.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,$=t(i)`
    margin-bottom: ${m["spacing-32"]};
`;export{p as Description,c as DescriptionContainer,$ as ErrorAlert,l as TextContainer,a as Title,s as TitleContainer,h as UploadButton,g as UploadButtonContainer,y as UploadButtonText,x as WarningAlert};
//# sourceMappingURL=file-upload.styles.js.map
