import t from"styled-components";import{Alert as i}from"../alert/alert.js";import{Button as o}from"../button/button.js";import{Markup as r}from"../markup/markup.js";import{Typography as e}from"../typography/index.js";import{V3_Spacing as m,V3_Colour as n,V3_MediaQuery as a}from"../v3_theme/index.js";const d=t.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${m["spacing-32"]};
    gap: ${m["spacing-8"]};
`,l=t(e.BodyBL)``,p=t(r)`
    color: ${n.text};
`,s=t(e.BodyMD)`
    color: ${n["text-subtler"]};
`,x=t(r)`
    color: ${n.text};
`,c=t(i)`
    margin-bottom: ${m["spacing-32"]};
`,g=t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${a.MaxWidth.md} {
        align-items: flex-start;
    }
`,f=t(o.Small)`
    width: 10rem;

    ${a.MaxWidth.md} {
        width: 100%;
    }
`,$=t(e.BodyMD)`
    color: ${n["text-subtler"]};
    margin-top: ${m["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${a.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,h=t(i)`
    margin-bottom: ${m["spacing-32"]};
`;export{s as Description,x as DescriptionContainer,h as ErrorAlert,d as TextContainer,l as Title,p as TitleContainer,f as UploadButton,g as UploadButtonContainer,$ as UploadButtonText,c as WarningAlert};
//# sourceMappingURL=file-upload.styles.js.map
