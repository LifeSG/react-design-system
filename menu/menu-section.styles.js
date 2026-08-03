import o,{css as r}from"styled-components";import{Spacing as t,Border as i,Colour as p}from"../theme/index.js";import{Typography as e}from"../typography/typography.js";const s=o.ul`
    ${o=>o.$showDivider&&r`
            border-top: ${i["width-010"]} ${i.solid}
                ${p.border};
        `}
    padding: ${t["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`,n=o(e.BodyXS)`
    margin: 0 ${t["spacing-16"]} ${t["spacing-8"]};
    color: ${p["text-subtler"]};
`;export{n as Label,s as Section};
//# sourceMappingURL=menu-section.styles.js.map
