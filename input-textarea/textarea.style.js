import r,{css as o}from"styled-components";import{Spacing as e,Border as d,Colour as t,Radius as a,Font as i}from"../theme/index.js";const l=r.div`
    display: flex;
    flex-direction: column;
    gap: ${e["spacing-8"]};
`,c=r.textarea`
    border: ${d["width-010"]} ${d.solid} ${t.border};
    border-radius: ${a.sm};
    background: ${t.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${e["spacing-12"]} ${e["spacing-16"]};
    width: 100%;

    ${i["body-baseline-regular"]}
    color: ${t.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${d["width-020"]} ${d.solid}
            ${t["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${t["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${t["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${a.full};
        background-clip: padding-box;
    }

    ${r=>r.readOnly?o`
                border-color: transparent;
                background: transparent !important;
                padding: ${e["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${t["border-focus"]};
                }
            `:r.disabled?o`
                background: ${t["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${t["border-disabled"]};
                }
            `:r.$error?o`
                border-color: ${t["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${t["border-error-focus"]};
                }
            `:void 0}
`;export{c as Element,l as Wrapper};
//# sourceMappingURL=textarea.style.js.map
