import{ExclamationCircleFillIcon as o}from"@lifesg/react-icons/exclamation-circle-fill";import t from"styled-components";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{V3_Spacing as i,V3_Colour as r,V3_Font as l}from"../v3_theme/index.js";const n=t.div`
    margin-bottom: ${i["spacing-8"]};
`,m=t.label`
    color: ${r["text-subtle"]};
    display: inline-block;

    ${l["form-label"]}
    ${e()}
    font-weight: ${l.Spec["weight-semibold"]};
`,s=t(o)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${r["icon-error-strong"]};
`,c=t.div`
    ${l["body-sm-semibold"]}
    display: flex;
    gap: ${i["spacing-4"]};
    margin-top: ${i["spacing-8"]};
`,p=t.p`
    color: ${r["text-error"]};
    margin-bottom: 0;
    outline: none;
`,a=t.span`
    ${l["form-description"]}
    color: ${r["text-subtler"]};
    display: block;
`;export{s as ErrorIcon,p as ErrorMessage,c as ErrorMessageContainer,m as Label,n as LabelContainer,a as Subtitle};
//# sourceMappingURL=form-label.style.js.map
