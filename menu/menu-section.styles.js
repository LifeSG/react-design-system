import o,{css as r}from"styled-components";import{Typography as i}from"../typography/index.js";import{V3_Spacing as t,V3_Border as e,V3_Colour as n}from"../v3_theme/index.js";const s=o.ul`
    ${o=>o.$showDivider&&r`
            border-top: ${e["width-010"]} ${e.solid}
                ${n.border};
        `}
    padding: ${t["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`,p=o(i.BodyXS)`
    margin: 0 ${t["spacing-16"]} ${t["spacing-8"]};
    color: ${n["text-subtler"]};
`;export{p as Label,s as Section};
//# sourceMappingURL=menu-section.styles.js.map
