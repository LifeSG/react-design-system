import o,{css as r}from"styled-components";import{V3_Border as e,V3_Colour as n,V3_Radius as t,V3_Spacing as i,V3_Font as d}from"../../v3_theme/index.js";const a=r`
    outline-offset: -1px;
    outline: ${e["width-020"]} ${e.solid}
        ${n["border-focus"]};
`,s=r`
    outline-color: ${n["border-focus"]};
`,l=r`
    outline-color: ${n["border-disabled"]};
`,$=r`
    outline-color: ${n["border-error-focus"]};
`,c=r`
    outline: none;
`,u=o.div`
    border: ${e["width-010"]} ${e.solid}
        ${n.border};
    border-radius: ${t.sm};
    background: ${n.bg};

    &:focus-within {
        ${a}
    }
    ${o=>o.$focused&&!o.$noBorder&&a}

    ${o=>o.$readOnly?r`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${s}
                }
                ${o.$focused&&s}
            `:o.$disabled?r`
                background: ${n["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${l}
                }
                ${o.$focused&&l}
            `:o.$error?r`
                border-color: ${n["border-error"]};

                &:focus-within {
                    ${$}
                }
                ${o.$focused&&$}
            `:void 0}
    ${o=>{if(o.$noBorder)return r`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${c}
                }
            `}}
`,b=o(u)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${i["spacing-16"]} 0
        ${o=>o.$readOnly?"0":i["spacing-16"]};
    flex-direction: ${o=>"right"===o.$position?"row-reverse":"row"};
`,p=o.input`
    ${o=>"small"===o.$variant?d["body-md-regular"]:d["body-baseline-regular"]}
    color: ${n.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${n["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${n["text-subtler"]};
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
`,f=o.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${e["width-010"]} ${e.solid}
            ${n["border-focus"]};
        border-radius: ${t.sm};
    }
`;export{f as BasicButton,p as BasicInput,u as InputBox,b as InputWrapper};
//# sourceMappingURL=input-wrapper.js.map
