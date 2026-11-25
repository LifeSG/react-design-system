import i from"styled-components";import{Button as o}from"../button/button.js";import{Colour as t,Border as r,Radius as e,Spacing as n,Font as d}from"../theme/index.js";const a=i.div`
    background-color: ${t.bg};
    border: ${r["width-010"]} ${r.solid} ${t.border};
    border-radius: ${e.md};
    overflow: hidden;
    width: 100%;
`,s=i.div`
    display: flex;
    align-items: center;

    background-color: ${t.bg};
    color: ${t.text};
`,g=i.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${n["spacing-8"]};
    margin: ${n["spacing-24"]} 0 ${n["spacing-24"]}
        ${n["spacing-20"]};
`,l=i.h2`
    ${d["heading-xs-semibold"]}
`,c=i(o.Small)`
    background-color: transparent;
    padding-right: ${n["spacing-20"]};
    padding-left: ${n["spacing-20"]};
    height: 100%;
`;export{a as DesktopContainer,c as FilterClearButton,s as FilterHeader,l as FilterTitle,g as FilterTitleGroup};
//# sourceMappingURL=filter-sidebar.styles.js.map
