import r,{css as o}from"styled-components";import{V3_Border as e,V3_Colour as d,V3_Radius as t,V3_Spacing as l,V3_Font as i}from"../v3_theme/index.js";const a=r.div`
    display: flex;
    flex-direction: column;
`,c=r.textarea`
    border: ${e["width-010"]} ${e.solid}
        ${d.border};
    border-radius: ${t.sm};
    background: ${d.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${l["spacing-12"]} ${l["spacing-16"]};
    width: 100%;

    ${i["body-baseline-regular"]}
    color: ${d.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${e["width-020"]} ${e.solid}
            ${d["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${d["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${d["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${t.full};
        background-clip: padding-box;
    }

    ${r=>r.readOnly?o`
                border-color: transparent;
                background: transparent !important;
                padding: ${l["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${d["border-focus"]};
                }
            `:r.disabled?o`
                background: ${d["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${d["border-disabled"]};
                }
            `:r.$error?o`
                border-color: ${d["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${d["border-error-focus"]};
                }
            `:void 0}
`;export{c as Element,a as Wrapper};
//# sourceMappingURL=textarea.style.js.map
