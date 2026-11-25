import o,{css as r}from"styled-components";import{ComponentLoadingSpinner as e}from"../shared/component-loading-spinner/component-loading-spinner.js";import{Spacing as t,Border as n,Motion as a,Colour as i,MediaQuery as d,Font as l}from"../theme/index.js";import{ThemeButton as c}from"../theme/components/theme-helper.js";const u=o.button`
    padding: ${t["spacing-8"]} ${t["spacing-16"]};
    min-width: 4rem;
    border: ${n["width-010"]} ${n.solid} transparent;
    transition: all ${a["duration-250"]} ${a["ease-default"]};
    border-radius: ${c["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${o=>{switch(o.$buttonStyle){case"secondary":return r`
                    background-color: ${i.bg};
                    border-color: ${o.$buttonIsDanger?i["border-error-strong"]:c["button-secondary-colour-border"]};

                    color: ${o.$buttonIsDanger?i["text-error"]:c["button-secondary-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${i["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return r`
                    background-color: ${i.bg};
                    border-color: ${i.border};

                    color: ${o.$buttonIsDanger?i["text-error"]:c["button-light-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${i["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return r`
                    background-color: transparent;

                    color: ${o.$buttonIsDanger?i["text-error"]:c["button-link-colour-text"]};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${i["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return r`
                    background-color: ${i["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${i["text-disabled"]};
                `;default:return r`
                    background-color: ${o.$buttonIsDanger?i["bg-error-strong"]:c["button-default-colour-bg"]};

                    ${d.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${c["button-default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${o.$buttonIsDanger?i["bg-error-strong-hover"]:c["button-default-colour-bg-hover"]};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${o=>{switch(o.$buttonSizeStyle){case"small":return r`
                    height: 2.5rem;
                    ${l["body-md-semibold"]}

                    ${d.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return r`
                    height: 4rem;
                    ${l["heading-md-semibold"]};
                    font-family: ${l.Spec["body-font-family"]};

                    ${d.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return r`
                    height: 3rem;
                    ${l["body-baseline-semibold"]}

                    ${d.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,s=o(e)`
    margin-right: ${o=>o.$hasChildren?"0.5rem":"0"};
`;export{u as Main,s as Spinner};
//# sourceMappingURL=button.style.js.map
