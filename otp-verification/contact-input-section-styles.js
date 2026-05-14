import r,{css as e}from"styled-components";import{Button as o}from"../button/button.js";import{InputGroup as i}from"../input-group/input-group.js";import{PhoneNumberInput as t}from"../phone-number-input/phone-number-input.js";import{V3_Radius as d,V3_Colour as n,V3_MediaQuery as s,V3_Spacing as a}from"../v3_theme/index.js";const p=r.div`
    display: flex;
    flex-direction: column;
`,b=r.div`
    display: flex;
`,x=r.div`
    display: flex;
    align-items: center;
    width: ${r=>r.$isMaxWidth?"100%":"auto"};
    border-radius: ${d.sm} 0 0 ${d.sm};
    box-shadow: inset 1px 0 0 ${n.border},
        inset 0 1px 0 ${n.border},
        inset 0 -1px 0 ${n.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${n["border-focus"]},
            inset 0 2px 0 ${n["border-focus"]},
            inset 0 -2px 0 ${n["border-focus"]};
    }

    ${r=>r.$error?e`
                box-shadow: inset 1px 0 0 ${n["border-error"]},
                    inset 0 1px 0 ${n["border-error"]},
                    inset 0 -1px 0 ${n["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${n["border-error-focus"]},
                        inset 0 2px 0 ${n["border-error-focus"]},
                        inset 0 -2px 0 ${n["border-error-focus"]};
                }
            `:r.$disabled?e`
                box-shadow: inset 0 0 0 1px ${n.border};
                border-radius: ${d.sm};
                background: ${n["bg-disabled"]};
                color: ${n["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${n.border};
                }

                /* Spacer to maintain width when disabled */
                ${!r.$isMaxWidth&&e`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${s.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:r.$readonly?e`
                box-shadow: none;
                border-radius: ${d.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${n["border-focus"]};
                }
            `:void 0}
`,$=r.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${a["spacing-12"]};
    color: ${n["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,c=r(o.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${s.MaxWidth.sm} {
        width: fit-content;
    }
`,l=r(i)`
    padding: 0 ${a["spacing-16"]};
    width: 100%;
    background: transparent;

    ${r=>r.disabled&&e`
            input {
                color: ${n["text-disabled"]};
            }
        `}

    ${r=>r.readOnly&&e`
            padding: 0;
        `}
`,u=r(t)`
    padding: 0 ${a["spacing-16"]};
    background: transparent;

    ${r=>r.disabled&&e`
            input {
                color: ${n["text-disabled"]};
            }
        `}

    ${r=>r.readOnly&&e`
            padding: 0;
            input {
                margin-left: ${a["spacing-12"]};
            }
        `}
`;export{c as ContactButton,b as ContactInputSectionWrapper,x as ContactInputWrapper,p as ContactSectionWrapper,l as EmailContactInput,u as PhoneContactInput,$ as VerifiedIconWrapper};
//# sourceMappingURL=contact-input-section-styles.js.map
