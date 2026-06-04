import e,{css as r}from"styled-components";import{Button as i}from"../button/button.js";import{InputGroup as o}from"../input-group/input-group.js";import{PhoneNumberInput as d}from"../phone-number-input/phone-number-input.js";import{V3_Spacing as t,V3_Radius as n,V3_Colour as s,V3_MediaQuery as a}from"../v3_theme/index.js";const p=e.div`
    display: flex;
    flex-direction: column;
`,b=e.div`
    display: flex;
`,x=e.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    padding: 0 ${t["spacing-16"]};
    border-radius: ${n.sm} 0 0 ${n.sm};
    box-shadow: inset 1px 0 0 ${s.border},
        inset 0 1px 0 ${s.border},
        inset 0 -1px 0 ${s.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${s["border-focus"]},
            inset 0 2px 0 ${s["border-focus"]},
            inset 0 -2px 0 ${s["border-focus"]};
    }

    ${e=>e.$error?r`
                box-shadow: inset 1px 0 0 ${s["border-error"]},
                    inset 0 1px 0 ${s["border-error"]},
                    inset 0 -1px 0 ${s["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${s["border-error-focus"]},
                        inset 0 2px 0 ${s["border-error-focus"]},
                        inset 0 -2px 0 ${s["border-error-focus"]};
                }
            `:e.$disabled?r`
                box-shadow: inset 0 0 0 1px ${s.border};
                border-radius: ${n.sm};
                background: ${s["bg-disabled"]};
                color: ${s["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${s.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&r`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${a.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?r`
                padding-left: 0;
                box-shadow: none;
                border-radius: ${n.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${s["border-focus"]};
                }
            `:void 0}
`,$=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${t["spacing-12"]};
    color: ${s["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,c=e(i.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${a.MaxWidth.sm} {
        width: fit-content;
    }
`,l=e(o)`
    padding: 0 ${t["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&r`
            input {
                color: ${s["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&r`
            padding: 0;
        `}
`,u=e(d)`
    padding: 0 ${t["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&r`
            input {
                color: ${s["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&r`
            padding: 0;
            input {
                margin-left: ${t["spacing-12"]};
            }
        `}
`;export{c as ContactButton,b as ContactInputSectionWrapper,x as ContactInputWrapper,p as ContactSectionWrapper,l as EmailContactInput,u as PhoneContactInput,$ as VerifiedIconWrapper};
//# sourceMappingURL=contact-input-section-styles.js.map
