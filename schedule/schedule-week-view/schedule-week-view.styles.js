import i from"styled-components";import{Border as e,Colour as t,Radius as r,Spacing as o,Font as d}from"../../theme/index.js";import{Typography as n}from"../../typography/typography.js";import{TIME_INDICATOR_WIDTH as p,HEADER_HEIGHT as l}from"../const.js";const s=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${e["width-010"]} ${e.solid} ${t.border};
    border-radius: ${r.md};
    background: ${t.bg};
`,a=i.div`
    display: grid;
    grid-template-columns: ${p}px repeat(7, 1fr);
    max-height: ${l}px;
`,m=i.div`
    min-width: ${p}px;
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
    padding: ${o["spacing-24"]};
    color: ${t["text-primary"]};
`,h=i(n.BodyMD)`
    font-weight: ${d.Spec["weight-semibold"]};
`,$=i.div`
    display: grid;
    grid-template-columns: ${p}px repeat(7, 1fr);
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${e["width-010"]} ${e.solid} ${t.border};
`,x=i.div`
    grid-column-start: 2;
    grid-column-end: 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    min-width: max-content;
`,f=i.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${t["icon-primary"]};
    top: ${i=>i.$top}px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        width: ${o["spacing-12"]};
        height: ${o["spacing-12"]};
        border-radius: ${r.full};
        background: ${t["icon-primary"]};
        z-index: 1;
    }
`,u=i.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-right: ${e["width-010"]} ${e.solid} ${t.border};
    &:last-child {
        border-right: none;
    }
`;export{m as BlankCell,$ as BodyContainer,h as Description,a as HeaderContainer,s as LoadingContainer,c as ServiceContainer,g as ServiceHeader,u as SlotColumn,x as SlotGrid,f as Timeline};
//# sourceMappingURL=schedule-week-view.styles.js.map
