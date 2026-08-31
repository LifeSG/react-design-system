import i from"styled-components";import{Button as t}from"../button/button.js";import{ButtonWithIcon as n}from"../button-with-icon/button-with-icon.js";import{Colour as o,Spacing as e,Font as a}from"../theme/index.js";const r=i.div`
    background-color: ${o["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,g=i.div`
    background-color: ${o.bg};
    height: 100%;
    width: 100%;
`,s=i.div`
    height: 100%;
`,c=i.div`
    display: flex;
    align-items: center;
    background-color: ${o.bg};
    ${i=>i.$insetTop&&`padding-top: ${i.$insetTop}px;`}
`,d=i.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e["spacing-8"]};
    margin: ${e["spacing-24"]} 0;
`,l=i.h2`
    ${a["heading-xs-semibold"]}
    color: ${o.text};
`,p=i.span`
    display: inline-flex;
    align-items: center;
    gap: ${e["spacing-8"]};
`,m=i(t.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${e["spacing-24"]} ${e["spacing-20"]};
`,h=i(n.Default)`
    width: 100%;
`;export{h as FilterButton,m as FilterClearButton,c as FilterHeader,l as FilterTitle,d as FilterTitleGroup,p as FilterToggleContent,s as FloatingWrapper,r as MobileContainer,g as MobileOverlayContainer};
//# sourceMappingURL=filter-modal.styles.js.map
