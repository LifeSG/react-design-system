import o from"styled-components";import{Button as i}from"../button/button.js";import{Colour as r,Border as d,Radius as n,Font as e,Spacing as t}from"../theme/index.js";const a=o.div`
    background-color: ${r.bg};
    border: ${d["width-010"]} ${d.solid} ${r.border};
    border-radius: ${n.md};
    overflow: hidden;
    width: 100%;
`,g=o.div`
    display: flex;
    align-items: center;

    background-color: ${r.bg};
`,s=o.h2`
    ${e["heading-xs-semibold"]}
    flex: 1;
    margin: ${t["spacing-24"]} 0 ${t["spacing-24"]}
        ${t["spacing-20"]};
`,c=o(i.Small)`
    background-color: transparent;
    padding-right: ${t["spacing-20"]};
    padding-left: ${t["spacing-20"]};
    height: 100%;
`;export{a as DesktopContainer,c as FilterClearButton,g as FilterHeader,s as FilterTitle};
//# sourceMappingURL=filter-sidebar.styles.js.map
