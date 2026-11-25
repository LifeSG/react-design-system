import{ExclamationTriangleIcon as e}from"@lifesg/react-icons/exclamation-triangle";import i from"styled-components";import{InputGroup as n}from"../input-group/input-group.js";import{ComponentLoadingSpinner as r}from"../shared/component-loading-spinner/component-loading-spinner.js";import{Spacing as t,Colour as o,Font as a}from"../theme/index.js";import{Typography as s}from"../typography/typography.js";import{BasicButton as p}from"../shared/input-wrapper/input-wrapper.js";const c=i(n)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":t["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:i})=>e&&!i?"pointer":"initial"};
    }
`,l=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:i=o.icon,$activeColor:n=o["icon-primary"]})=>e?i:n};
    padding: ${t["spacing-12"]} ${t["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,g=i.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,m=i(s.BodyBL)`
    color: ${o["text-subtler"]};
`,d=i(r)`
    margin-right: ${t["spacing-8"]};
    color: ${o.icon};
`,h=i.span`
    color: ${o["text-primary"]};
    font-weight: ${a.Spec["weight-semibold"]};
`,$=i.span`
    display: flex;
    align-items: center;
    margin-right: ${t["spacing-8"]};
`,y=i(e)`
    color: ${o["icon-warning"]};
    margin-right: ${t["spacing-8"]};
    height: 1em;
    width: 1em;
`,f=i.span`
    color: ${o["text-warning"]};
`,u=i(p)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${a["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${h} {
            color: ${o["text-hover"]};
        }
    }
`,b=i.button`
    ${a["body-baseline-regular"]}
    color: ${o.text};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`,w=i.span`
    overflow-wrap: anywhere;
`,x=i.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${o["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${a.Spec["body-size-baseline"]};
        height: ${a.Spec["body-size-baseline"]};
    }
`;export{u as ClickableErrorWrapper,y as ErrorIcon,f as ErrorLabel,$ as ErrorTextContainer,l as IconContainer,c as InputGroupWrapper,m as LoadingLabel,g as LoadingWrapper,b as ReadOnlyClickable,x as ReadOnlyIconContainer,w as ReadOnlyValueText,d as Spinner,h as TryAgainLabel};
//# sourceMappingURL=masked-input.style.js.map
