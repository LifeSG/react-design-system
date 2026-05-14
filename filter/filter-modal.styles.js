import i from"styled-components";import{Button as o}from"../button/button.js";import{V3_Colour as t,V3_Font as n,V3_Spacing as e}from"../v3_theme/index.js";const d=i.div`
    background-color: ${t["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,r=i.div`
    background-color: ${t.bg};
    height: 100%;
    width: 100%;
`,g=i.div`
    height: 100%;
`,a=i.div`
    display: flex;
    align-items: center;
    background-color: ${t.bg};
    ${i=>i.$insetTop&&`padding-top: ${i.$insetTop}px;`}
`,c=i.h2`
    ${n["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${e["spacing-24"]} 0;
`,l=i(o.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${e["spacing-24"]} ${e["spacing-20"]};
`,p=i(o)`
    width: 100%;
`;export{p as FilterButton,l as FilterClearButton,a as FilterHeader,c as FilterTitle,g as FloatingWrapper,d as MobileContainer,r as MobileOverlayContainer};
//# sourceMappingURL=filter-modal.styles.js.map
