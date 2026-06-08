import i from"styled-components";import{Button as o}from"../button/button.js";import{Colour as n,Border as r,Radius as t,Spacing as e,Font as d}from"../theme/index.js";const a=i.div`
    background-color: ${n.bg};
    border: ${r["width-010"]} ${r.solid} ${n.border};
    border-radius: ${t.md};
    overflow: hidden;
    width: 100%;
`,s=i.div`
    display: flex;
    align-items: center;

    background-color: ${n.bg};
`,g=i.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${e["spacing-8"]};
    margin: ${e["spacing-24"]} 0 ${e["spacing-24"]}
        ${e["spacing-20"]};
`,l=i.h2`
    ${d["heading-xs-semibold"]}
`,c=i(o.Small)`
    background-color: transparent;
    padding-right: ${e["spacing-20"]};
    padding-left: ${e["spacing-20"]};
    height: 100%;
`;export{a as DesktopContainer,c as FilterClearButton,s as FilterHeader,l as FilterTitle,g as FilterTitleGroup};
//# sourceMappingURL=filter-sidebar.styles.js.map
