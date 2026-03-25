"use strict";var o=require("styled-components"),e=require("../shared/component-loading-spinner/component-loading-spinner.js"),r=require("../v3_theme/index.js"),t=require("../v3_theme/components/theme-helper.js");function n(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var u=n(o);const a=u.default.button`
    padding: ${r.V3_Spacing["spacing-8"]} ${r.V3_Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${r.V3_Border["width-010"]} ${r.V3_Border.solid} transparent;
    transition: all ${r.V3_Motion["duration-250"]} ${r.V3_Motion["ease-default"]};
    border-radius: ${t.V3_ThemeButton["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return o.css`
                    background-color: ${r.V3_Colour.bg};
                    border-color: ${e.$buttonIsDanger?r.V3_Colour["border-error-strong"]:t.V3_ThemeButton["button-secondary-colour-border"]};

                    color: ${e.$buttonIsDanger?r.V3_Colour["text-error"]:t.V3_ThemeButton["button-secondary-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.V3_Colour["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return o.css`
                    background-color: ${r.V3_Colour.bg};
                    border-color: ${r.V3_Colour.border};

                    color: ${e.$buttonIsDanger?r.V3_Colour["text-error"]:t.V3_ThemeButton["button-light-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.V3_Colour["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return o.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?r.V3_Colour["text-error"]:t.V3_ThemeButton["button-link-colour-text"]};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.V3_Colour["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return o.css`
                    background-color: ${r.V3_Colour["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${r.V3_Colour["text-disabled"]};
                `;default:return o.css`
                    background-color: ${e.$buttonIsDanger?r.V3_Colour["bg-error-strong"]:t.V3_ThemeButton["button-default-colour-bg"]};

                    ${r.V3_MediaQuery.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${t.V3_ThemeButton["button-default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?r.V3_Colour["bg-error-strong-hover"]:t.V3_ThemeButton["button-default-colour-bg-hover"]};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return o.css`
                    height: 2.5rem;
                    ${r.V3_Font["body-md-semibold"]}

                    ${r.V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return o.css`
                    height: 4rem;
                    ${r.V3_Font["heading-md-semibold"]}

                    ${r.V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return o.css`
                    height: 3rem;
                    ${r.V3_Font["heading-xs-semibold"]}

                    ${r.V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,i=u.default(e.ComponentLoadingSpinner)`
    margin-right: ${o=>o.$hasChildren?"0.5rem":"0"};
`;exports.Main=a,exports.Spinner=i;
//# sourceMappingURL=button.style.js.map
