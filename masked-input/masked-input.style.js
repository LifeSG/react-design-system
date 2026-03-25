import{ExclamationTriangleIcon as e}from"@lifesg/react-icons/exclamation-triangle";import i from"styled-components";import{InputGroup as n}from"../input-group/input-group.js";import{ComponentLoadingSpinner as r}from"../shared/component-loading-spinner/component-loading-spinner.js";import{BasicButton as t}from"../shared/input-wrapper/input-wrapper.js";import{Typography as o}from"../typography/index.js";import{V3_Spacing as a,V3_Colour as s,V3_Font as p}from"../v3_theme/index.js";const c=i(n)`
    padding: 0 0 0
        ${({readOnly:e})=>e?"0":a["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:i})=>e&&!i?"pointer":"initial"};
    }
`,l=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:i=s.icon,$activeColor:n=s["icon-primary"]})=>e?i:n};
    padding: ${a["spacing-12"]} ${a["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,g=i.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,d=i(o.BodyBL)`
    color: ${s["text-subtler"]};
`,m=i(r)`
    margin-right: ${a["spacing-8"]};
    color: ${s.icon};
`,h=i.span`
    color: ${s["text-primary"]};
    text-decoration: underline;
    font-weight: ${p.Spec["weight-semibold"]};
`,$=i.span`
    display: flex;
    align-items: center;
    margin-right: ${a["spacing-8"]};
`,y=i(e)`
    color: ${s["icon-warning"]};
    margin-right: ${a["spacing-8"]};
    height: 1em;
    width: 1em;
`,f=i.span`
    color: ${s["text-warning"]};
`,u=i(t)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${p["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${h} {
            color: ${s["text-hover"]};
        }
    }
`,b=i.button`
    ${p["body-baseline-regular"]}
    color: ${s.text};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`,x=i.span`
    overflow-wrap: anywhere;
`,w=i.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${s["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${p.Spec["body-size-baseline"]};
        height: ${p.Spec["body-size-baseline"]};
    }
`;export{u as ClickableErrorWrapper,y as ErrorIcon,f as ErrorLabel,$ as ErrorTextContainer,l as IconContainer,c as InputGroupWrapper,d as LoadingLabel,g as LoadingWrapper,b as ReadOnlyClickable,w as ReadOnlyIconContainer,x as ReadOnlyValueText,m as Spinner,h as TryAgainLabel};
//# sourceMappingURL=masked-input.style.js.map
