import e,{css as t}from"styled-components";import{Colour as i,Font as r}from"../../theme/index.js";import{lineClampCss as l}from"../styles/index.js";const o=e.div`
    position: relative;
    width: 100%;
    ${e=>{const i="small"===e.$variant?2.5:3;return t`
            min-height: ${i}rem;
            height: ${i}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,d=e.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return t`
                color: ${i["text-disabled"]};
            `}}
`,n=e.div`
    ${e=>"small"===e.$variant?r["body-md-regular"]:r["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return t`
                    ${l(1)}
                `}}
    overflow: hidden;
`,s=e(n)`
    color: ${i["text-subtler"]};
`;export{d as LabelContainer,s as PlaceholderLabel,n as ValueLabel,o as Wrapper};
//# sourceMappingURL=dropdown-wrapper.styles.js.map
