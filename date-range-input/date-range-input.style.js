import e,{css as t}from"styled-components";import{InputWrapper as p}from"../shared/input-wrapper/input-wrapper.js";import{V3_Spacing as r}from"../v3_theme/index.js";const i=320,n=e(p)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?t`
                    padding: ${r["spacing-12"]} 0;
                `:t`
                padding: ${r["spacing-12"]} ${r["spacing-16"]};
            `}}
`,a=e.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&t`
            height: fit-content;
        `}
`;export{n as Container,a as InputContainer,i as MOBILE_WRAP_WIDTH};
//# sourceMappingURL=date-range-input.style.js.map
