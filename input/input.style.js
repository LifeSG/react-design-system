import{CrossIcon as i}from"@lifesg/react-icons/cross";import e,{css as r}from"styled-components";import{BasicInput as t,BasicButton as o,InputBox as p}from"../shared/input-wrapper/input-wrapper.js";import{V3_Spacing as a,V3_Colour as n}from"../v3_theme/index.js";const d=e(t)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${i=>"no-border"!==i.$styleType&&r`
            padding-left: ${i.$visuallyReadOnly?0:a["spacing-16"]};
            padding-right: ${i.$visuallyReadOnly||i.$showClear?0:a["spacing-16"]};
        `}
`,s=e(o)`
    height: auto;
    padding: ${a["spacing-12"]} ${a["spacing-16"]};

    cursor: pointer;
    color: ${n.icon};

    ${i=>"no-border"===i.$styleType&&r`
            margin-right: -${a["spacing-12"]};
        `}
`,l=e(i)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,c=e.div`
    display: flex;
    width: 100%;
`,g=e(p)`
    display: flex;
    align-items: center;
    width: 100%;
`;export{s as ClearButton,l as ClearIcon,g as DefaultWrapper,d as InputElement,c as NoBorderWrapper};
//# sourceMappingURL=input.style.js.map
