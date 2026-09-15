"use strict";var o=require("styled-components"),r=require("../button/button.js"),e=require("../input-group/input-group.js"),t=require("../phone-number-input/phone-number-input.js"),i=require("../theme/index.js");function s(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=s(o);const d=n.default.div`
    display: flex;
    flex-direction: column;
`,a=n.default.div`
    display: flex;
`,u=n.default.div`
    display: flex;
    align-items: center;
    width: ${o=>o.$isMaxWidth?"100%":"auto"};
    border-radius: ${i.Radius.sm} 0 0 ${i.Radius.sm};
    box-shadow: inset 1px 0 0 ${i.Colour.border},
        inset 0 1px 0 ${i.Colour.border}, inset 0 -1px 0 ${i.Colour.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${i.Colour["border-focus"]},
            inset 0 2px 0 ${i.Colour["border-focus"]},
            inset 0 -2px 0 ${i.Colour["border-focus"]};
    }

    ${r=>r.$error?o.css`
                box-shadow: inset 1px 0 0 ${i.Colour["border-error"]},
                    inset 0 1px 0 ${i.Colour["border-error"]},
                    inset 0 -1px 0 ${i.Colour["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${i.Colour["border-error-focus"]},
                        inset 0 2px 0 ${i.Colour["border-error-focus"]},
                        inset 0 -2px 0 ${i.Colour["border-error-focus"]};
                }
            `:r.$disabled?o.css`
                box-shadow: inset 0 0 0 1px ${i.Colour.border};
                border-radius: ${i.Radius.sm};
                background: ${i.Colour["bg-disabled"]};
                color: ${i.Colour["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${i.Colour.border};
                }

                /* Spacer to maintain width when disabled */
                ${!r.$isMaxWidth&&o.css`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${i.MediaQuery.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:r.$readonly?o.css`
                box-shadow: none;
                border-radius: ${i.Radius.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${i.Colour["border-focus"]};
                }
            `:void 0}
`,p=n.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${i.Spacing["spacing-12"]};
    color: ${i.Colour["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,l=n.default(r.Button.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${i.MediaQuery.MaxWidth.sm} {
        width: fit-content;
    }
`,c=n.default(e.InputGroup)`
    padding: 0 ${i.Spacing["spacing-16"]};
    width: 100%;
    background: transparent;

    ${r=>r.disabled&&o.css`
            input {
                color: ${i.Colour["text-disabled"]};
            }
        `}

    ${r=>r.readOnly&&o.css`
            padding: 0;
        `}
`,x=n.default(t.PhoneNumberInput)`
    padding: 0 ${i.Spacing["spacing-16"]};
    background: transparent;

    ${r=>r.disabled&&o.css`
            input {
                color: ${i.Colour["text-disabled"]};
            }
        `}

    ${r=>r.readOnly&&o.css`
            padding: 0;
            input {
                margin-left: ${i.Spacing["spacing-12"]};
            }
        `}
`;exports.ContactButton=l,exports.ContactInputSectionWrapper=a,exports.ContactInputWrapper=u,exports.ContactSectionWrapper=d,exports.EmailContactInput=c,exports.PhoneContactInput=x,exports.VerifiedIconWrapper=p;
//# sourceMappingURL=contact-input-section-styles.js.map
