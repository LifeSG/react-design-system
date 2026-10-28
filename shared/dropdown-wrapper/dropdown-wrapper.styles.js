import e,{css as t}from"styled-components";import{Colour as r,Font as i}from"../../theme/index.js";import{lineClampCss as l}from"../styles/index.js";const o=e.div`
    position: relative;
    width: 100%;
    ${e=>{const r="small"===e.$variant?2.5:3;return t`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,d=e.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return t`
                color: ${r["text-disabled"]};
            `}}
`,n=e.div`
    ${e=>"small"===e.$variant?i["body-md-regular"]:i["body-baseline-regular"]}
    color: ${r.text};
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return t`
                    ${l(1)}
                `}}
    overflow: hidden;
`,s=e(n)`
    color: ${r["text-subtler"]};
`;export{d as LabelContainer,s as PlaceholderLabel,n as ValueLabel,o as Wrapper};
//# sourceMappingURL=dropdown-wrapper.styles.js.map
