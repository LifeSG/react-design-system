"use strict";var o=require("styled-components"),e=require("../shared/component-loading-spinner/component-loading-spinner.js"),r=require("../theme/index.js"),t=require("../theme/components/theme-helper.js");function n(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var u=n(o);const a=u.default.button`
    padding: ${r.Spacing["spacing-8"]} ${r.Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${r.Border["width-010"]} ${r.Border.solid} transparent;
    transition: all ${r.Motion["duration-250"]} ${r.Motion["ease-default"]};
    border-radius: ${t.ThemeButton["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return o.css`
                    background-color: ${r.Colour.bg};
                    border-color: ${e.$buttonIsDanger?r.Colour["border-error-strong"]:t.ThemeButton["button-secondary-colour-border"]};

                    color: ${e.$buttonIsDanger?r.Colour["text-error"]:t.ThemeButton["button-secondary-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.Colour["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return o.css`
                    background-color: ${r.Colour.bg};
                    border-color: ${r.Colour.border};

                    color: ${e.$buttonIsDanger?r.Colour["text-error"]:t.ThemeButton["button-light-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.Colour["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return o.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?r.Colour["text-error"]:t.ThemeButton["button-link-colour-text"]};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${r.Colour["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return o.css`
                    background-color: ${r.Colour["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${r.Colour["text-disabled"]};
                `;default:return o.css`
                    background-color: ${e.$buttonIsDanger?r.Colour["bg-error-strong"]:t.ThemeButton["button-default-colour-bg"]};

                    ${r.MediaQuery.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${t.ThemeButton["button-default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?r.Colour["bg-error-strong-hover"]:t.ThemeButton["button-default-colour-bg-hover"]};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return o.css`
                    height: 2.5rem;
                    ${r.Font["body-md-semibold"]}

                    ${r.MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return o.css`
                    height: 4rem;
                    ${r.Font["heading-md-semibold"]}

                    ${r.MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return o.css`
                    height: 3rem;
                    ${r.Font["heading-xs-semibold"]}

                    ${r.MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,i=u.default(e.ComponentLoadingSpinner)`
    margin-right: ${o=>o.$hasChildren?"0.5rem":"0"};
`;exports.Main=a,exports.Spinner=i;
//# sourceMappingURL=button.style.js.map
