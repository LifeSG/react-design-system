import o from"styled-components";import{ExclamationCircleFillIcon as t}from"@lifesg/react-icons/exclamation-circle-fill";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{Spacing as i,Colour as l,Font as r}from"../theme/index.js";const n=o.div`
    margin-bottom: ${i["spacing-8"]};
    display: flex;
    flex-direction: column;
    gap: ${i["spacing-4"]};
`,m=o.label`
    color: ${l["text-subtle"]};
    display: inline-block;

    ${r["form-label"]}
    ${e()}
    font-weight: ${r.Spec["weight-semibold"]};
`,s=o(t)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${l["icon-error-strong"]};
`,c=o.div`
    ${r["body-sm-semibold"]}
    display: flex;
    gap: ${i["spacing-4"]};
    margin-top: ${i["spacing-8"]};
`,p=o.p`
    color: ${l["text-error"]};
    margin-bottom: 0;
    outline: none;
`,a=o.span`
    ${r["form-description"]}
    color: ${l["text-subtler"]};
    display: block;
`;export{s as ErrorIcon,p as ErrorMessage,c as ErrorMessageContainer,m as Label,n as LabelContainer,a as Subtitle};
//# sourceMappingURL=form-label.style.js.map
