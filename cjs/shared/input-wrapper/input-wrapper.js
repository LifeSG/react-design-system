"use strict";var o=require("styled-components"),r=require("../../v3_theme/index.js");function e(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=e(o);const t=o.css`
    outline-offset: -1px;
    outline: ${r.V3_Border["width-020"]} ${r.V3_Border.solid}
        ${r.V3_Colour["border-focus"]};
`,i=o.css`
    outline-color: ${r.V3_Colour["border-focus"]};
`,d=o.css`
    outline-color: ${r.V3_Colour["border-disabled"]};
`,s=o.css`
    outline-color: ${r.V3_Colour["border-error-focus"]};
`,a=o.css`
    outline: none;
`,u=n.default.div`
    border: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
        ${r.V3_Colour.border};
    border-radius: ${r.V3_Radius.sm};
    background: ${r.V3_Colour.bg};

    &:focus-within {
        ${t}
    }
    ${o=>o.$focused&&!o.$noBorder&&t}

    ${e=>e.$readOnly?o.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${i}
                }
                ${e.$focused&&i}
            `:e.$disabled?o.css`
                background: ${r.V3_Colour["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${d}
                }
                ${e.$focused&&d}
            `:e.$error?o.css`
                border-color: ${r.V3_Colour["border-error"]};

                &:focus-within {
                    ${s}
                }
                ${e.$focused&&s}
            `:void 0}
    ${r=>{if(r.$noBorder)return o.css`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${a}
                }
            `}}
`,l=n.default(u)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${r.V3_Spacing["spacing-16"]} 0
        ${o=>o.$readOnly?"0":r.V3_Spacing["spacing-16"]};
    flex-direction: ${o=>"right"===o.$position?"row-reverse":"row"};
`,c=n.default.input`
    ${o=>"small"===o.$variant?r.V3_Font["body-md-regular"]:r.V3_Font["body-baseline-regular"]}
    color: ${r.V3_Colour.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${r.V3_Colour["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${r.V3_Colour["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,$=n.default.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
            ${r.V3_Colour["border-focus"]};
        border-radius: ${r.V3_Radius.sm};
    }
`;exports.BasicButton=$,exports.BasicInput=c,exports.InputBox=u,exports.InputWrapper=l;
//# sourceMappingURL=input-wrapper.js.map
