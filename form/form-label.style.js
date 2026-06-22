import o from"styled-components";import{ExclamationCircleFillIcon as t}from"@lifesg/react-icons/exclamation-circle-fill";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{Spacing as i,Colour as r,Font as l}from"../theme/index.js";const n=o.div`
    margin-bottom: ${i["spacing-8"]};
`,m=o.label`
    color: ${r["text-subtle"]};
    display: inline-block;

    ${l["form-label"]}
    ${e()}
    font-weight: ${l.Spec["weight-semibold"]};
`,s=o(t)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${r["icon-error-strong"]};
`,c=o.div`
    ${l["body-sm-semibold"]}
    display: flex;
    gap: ${i["spacing-4"]};
    margin-top: ${i["spacing-8"]};
`,p=o.p`
    color: ${r["text-error"]};
    margin-bottom: 0;
    outline: none;
`,a=o.span`
    ${l["form-description"]}
    color: ${r["text-subtler"]};
    display: block;
`;export{s as ErrorIcon,p as ErrorMessage,c as ErrorMessageContainer,m as Label,n as LabelContainer,a as Subtitle};
//# sourceMappingURL=form-label.style.js.map
