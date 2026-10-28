import e,{css as o}from"styled-components";import{InputWrapper as r,BasicInput as t}from"../shared/input-wrapper/input-wrapper.js";import{Spacing as i,Colour as p}from"../theme/index.js";const s=e.div`
    position: relative;
`,l=e(r)`
    height: 3rem;
    gap: ${i["spacing-8"]};
`,a=e(t)`
    display: block;
    width: 100%;
    flex: 1;
    ${e=>e.$disabled&&o`
            color: ${p["text-subtler"]};
            cursor: not-allowed;
        `}
`;export{a as SelectorInput,l as TimeContainer,s as Wrapper};
//# sourceMappingURL=common.styles.js.map
