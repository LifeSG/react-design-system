import o,{css as t}from"styled-components";import{ColDiv as i}from"../layout/col-div.js";import{Spacing as m}from"../theme/index.js";import{V2_ColDiv as l}from"../v2_layout/col-div.js";const r=t`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${m["spacing-32"]};
    }
`,e=o.div`
    ${r}
`,n=o(i)`
    ${r}
`,s=o(l)`
    ${r}
`;export{n as ColDivContainer,e as Container,s as V2_ColDivContainer};
//# sourceMappingURL=form-wrapper.style.js.map
