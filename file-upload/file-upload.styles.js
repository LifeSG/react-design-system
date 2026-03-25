import t from"styled-components";import{Alert as i}from"../alert/alert.js";import{Button as o}from"../button/button.js";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{Typography as m}from"../typography/index.js";import{V3_Spacing as n,V3_Colour as r,V3_MediaQuery as d}from"../v3_theme/index.js";const l=t.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${n["spacing-32"]};
    gap: ${n["spacing-8"]};
`,a=t(m.BodyBL)``,s=t.div`
    color: ${r.text};
    ${e({textSize:"body-baseline"})}
`,p=t(m.BodyMD)`
    color: ${r["text-subtler"]};
`,x=t.div`
    color: ${r.text};
    ${e({textSize:"body-md"})}
`,c=t(i)`
    margin-bottom: ${n["spacing-32"]};
`,g=t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${d.MaxWidth.md} {
        align-items: flex-start;
    }
`,$=t(o.Small)`
    width: 10rem;

    ${d.MaxWidth.md} {
        width: 100%;
    }
`,h=t(m.BodyMD)`
    color: ${r["text-subtler"]};
    margin-top: ${n["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${d.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,f=t(i)`
    margin-bottom: ${n["spacing-32"]};
`;export{p as Description,x as DescriptionContainer,f as ErrorAlert,l as TextContainer,a as Title,s as TitleContainer,$ as UploadButton,g as UploadButtonContainer,h as UploadButtonText,c as WarningAlert};
//# sourceMappingURL=file-upload.styles.js.map
