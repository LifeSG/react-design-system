import t from"styled-components";import{Button as i}from"../button/button.js";import{ButtonWithIcon as o}from"../button-with-icon/button-with-icon.js";import{V3_Colour as n,V3_Font as e,V3_Spacing as r}from"../v3_theme/index.js";const d=t.div`
    background-color: ${n["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,g=t.div`
    background-color: ${n.bg};
    height: 100%;
    width: 100%;
`,a=t.div`
    height: 100%;
`,c=t.div`
    display: flex;
    align-items: center;
    background-color: ${n.bg};
    ${t=>t.$insetTop&&`padding-top: ${t.$insetTop}px;`}
`,l=t.h2`
    ${e["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${r["spacing-24"]} 0;
`,p=t(i.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${r["spacing-24"]} ${r["spacing-20"]};
`,s=t(o.Default)`
    width: 100%;
`;export{s as FilterButton,p as FilterClearButton,c as FilterHeader,l as FilterTitle,a as FloatingWrapper,d as MobileContainer,g as MobileOverlayContainer};
//# sourceMappingURL=filter-modal.styles.js.map
