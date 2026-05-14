import{ExclamationTriangleIcon as e}from"@lifesg/react-icons/exclamation-triangle";import r,{css as i}from"styled-components";import{Alert as n}from"../alert/alert.js";import{ComponentLoadingSpinner as o}from"../shared/component-loading-spinner/component-loading-spinner.js";import{V3_MediaQuery as t,V3_Colour as l,V3_Font as a}from"../v3_theme/index.js";const s=r.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i`
                    grid-column: auto / span ${e.$fullWidth?1:4};
                `;case"full":return i`
                    grid-column: auto / span ${e.$fullWidth?2:8};
                `}}}

    ${t.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,d=r.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${l["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${a.Spec["body-size-baseline"]};
        height: ${a.Spec["body-size-baseline"]};
    }
`,c=r.button`
    ${a["body-baseline-regular"]}
    color: ${l.text};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,m=r.span`
    color: ${l["text-disabled"]};
`,p=r(o)`
    margin-right: 0.5rem;
    color: ${l["text-disabled"]};
`,g=r(e)`
    color: ${l["icon-warning"]};
    margin-right: 0.5rem;
    height: ${a.Spec["body-size-baseline"]};
    width: ${a.Spec["body-size-baseline"]};
`,f=r.span`
    color: ${l["text-warning"]};
`,h=r.span`
    ${a["body-baseline-semibold"]}
    color: ${l.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,$=r(n)`
    margin-top: 0.5rem;
`;export{c as Clickable,s as Container,g as ErrorIcon,f as ErrorLabel,d as IconContainer,m as LoadingLabel,p as Spinner,$ as StyledAlert,h as TryAgainLabel};
//# sourceMappingURL=section-item.styles.js.map
