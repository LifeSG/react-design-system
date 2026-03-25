import i from"styled-components";import{Typography as e}from"../../typography/index.js";import{V3_Border as t,V3_Colour as r,V3_Radius as o,V3_Spacing as d,V3_Font as n}from"../../v3_theme/index.js";import{TIME_INDICATOR_WIDTH as l,HEADER_HEIGHT as p}from"../const.js";const s=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${t["width-010"]} ${t.solid} ${r.border};
    border-radius: ${o.md};
    background: ${r.bg};
`,a=i.div`
    display: grid;
    grid-template-columns: ${l}px repeat(7, 1fr);
    max-height: ${p}px;
`,m=i.div`
    min-width: ${l}px;
    position: sticky;
    z-index: 2;
`,c=i.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-start: 2;
    grid-column-end: 9;
`,g=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: ${d["spacing-24"]};
    color: ${r["text-primary"]};
`,h=i(e.BodyMD)`
    font-weight: ${n.Spec["weight-semibold"]};
`,x=i.div`
    display: grid;
    grid-template-columns: ${l}px repeat(7, 1fr);
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${t["width-010"]} ${t.solid} ${r.border};
`,$=i.div`
    grid-column-start: 2;
    grid-column-end: 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    min-width: max-content;
`,f=i.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${r["icon-primary"]};
    top: ${i=>i.$top}px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        width: ${d["spacing-12"]};
        height: ${d["spacing-12"]};
        border-radius: ${o.full};
        background: ${r["icon-primary"]};
        z-index: 1;
    }
`,u=i.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-right: ${t["width-010"]} ${t.solid}
        ${r.border};
    &:last-child {
        border-right: none;
    }
`;export{m as BlankCell,x as BodyContainer,h as Description,a as HeaderContainer,s as LoadingContainer,c as ServiceContainer,g as ServiceHeader,u as SlotColumn,$ as SlotGrid,f as Timeline};
//# sourceMappingURL=schedule-week-view.styles.js.map
