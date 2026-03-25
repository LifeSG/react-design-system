import o,{css as t}from"styled-components";import{ColDiv as i}from"../layout/col-div.js";import{V2_ColDiv as m}from"../v2_layout/col-div.js";import{V3_Spacing as l}from"../v3_theme/index.js";const r=t`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${l["spacing-32"]};
    }
`,e=o.div`
    ${r}
`,n=o(i)`
    ${r}
`,s=o(m)`
    ${r}
`;export{n as ColDivContainer,e as Container,s as V2_ColDivContainer};
//# sourceMappingURL=form-wrapper.style.js.map
