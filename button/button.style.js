import r,{css as o}from"styled-components";import{ComponentLoadingSpinner as e}from"../shared/component-loading-spinner/component-loading-spinner.js";import{V3_Spacing as t,V3_Border as n,V3_Motion as a,V3_Colour as i,V3_MediaQuery as d,V3_Font as l}from"../v3_theme/index.js";import{V3_ThemeButton as c}from"../v3_theme/components/theme-helper.js";const u=r.button`
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
    ${r=>{switch(r.$buttonStyle){case"secondary":return o`
                    background-color: ${i.bg};
                    border-color: ${r.$buttonIsDanger?i["border-error-strong"]:c["button-secondary-colour-border"]};

                    color: ${r.$buttonIsDanger?i["text-error"]:c["button-secondary-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${i["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return o`
                    background-color: ${i.bg};
                    border-color: ${i.border};

                    color: ${r.$buttonIsDanger?i["text-error"]:c["button-light-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${i["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return o`
                    background-color: transparent;

                    color: ${r.$buttonIsDanger?i["text-error"]:c["button-link-colour-text"]};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${i["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return o`
                    background-color: ${i["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${i["text-disabled"]};
                `;default:return o`
                    background-color: ${r.$buttonIsDanger?i["bg-error-strong"]:c["button-default-colour-bg"]};

                    ${d.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${c["button-default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.$buttonIsDanger?i["bg-error-strong-hover"]:c["button-default-colour-bg-hover"]};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${r=>{switch(r.$buttonSizeStyle){case"small":return o`
                    height: 2.5rem;
                    ${l["body-md-semibold"]}

                    ${d.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return o`
                    height: 4rem;
                    ${l["heading-md-semibold"]}

                    ${d.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return o`
                    height: 3rem;
                    ${l["heading-xs-semibold"]}

                    ${d.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,s=r(e)`
    margin-right: ${r=>r.$hasChildren?"0.5rem":"0"};
`;export{u as Main,s as Spinner};
//# sourceMappingURL=button.style.js.map
