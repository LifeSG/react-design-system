import i from"styled-components";import{Typography as o}from"../../typography/index.js";import{V3_Colour as t,V3_Border as e,V3_Spacing as n,V3_Font as p,V3_Radius as r}from"../../v3_theme/index.js";import{TIME_INDICATOR_WIDTH as d,CELL_HEIGHT as s}from"../const.js";const l=i.div`
    position: sticky;
    z-index: 3;
`,a=i.div`
    display: flex;
    flex-direction: column;
    min-width: ${d}px;
    background: ${t.bg};
    border-right: ${e["width-010"]} ${e.solid}
        ${t.border};
`,c=i(o.BodySM)`
    min-height: ${2*s}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${t["text-subtler"]};
    padding-right: ${n["spacing-8"]};
    font-weight: ${p.Spec["weight-bold"]};
    position: relative;
`,$=i.span`
    position: absolute;
    top: -18px;
`,g=i.div`
    position: absolute;
    right: -6px;
    top: ${i=>i.$top-6}px;
    width: ${n["spacing-12"]};
    height: ${n["spacing-12"]};
    border-radius: ${r.full};
    background: ${t["icon-primary"]};
    z-index: 4;
    display: ${i=>i.$isWeekView?"none":"block"};
`;export{$ as HourDisplay,a as TimeColumn,l as TimeColumnWrapper,c as TimeLabel,g as TimelineCircle};
//# sourceMappingURL=time-indicator.styles.js.map
