import i from"styled-components";import{Colour as o,Border as t,Spacing as e,Font as p,Radius as n}from"../../theme/index.js";import{Typography as r}from"../../typography/typography.js";import{TIME_INDICATOR_WIDTH as s,CELL_HEIGHT as d}from"../const.js";const l=i.div`
    position: sticky;
    z-index: 3;
`,a=i.div`
    display: flex;
    flex-direction: column;
    min-width: ${s}px;
    background: ${o.bg};
    border-right: ${t["width-010"]} ${t.solid} ${o.border};
`,c=i(r.BodySM)`
    min-height: ${2*d}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${o["text-subtler"]};
    padding-right: ${e["spacing-8"]};
    font-weight: ${p.Spec["weight-bold"]};
    position: relative;
`,g=i.span`
    position: absolute;
    top: -18px;
`,$=i.div`
    position: absolute;
    right: -6px;
    top: ${i=>i.$top-6}px;
    width: ${e["spacing-12"]};
    height: ${e["spacing-12"]};
    border-radius: ${n.full};
    background: ${o["icon-primary"]};
    z-index: 4;
    display: ${i=>i.$isWeekView?"none":"block"};
`;export{g as HourDisplay,a as TimeColumn,l as TimeColumnWrapper,c as TimeLabel,$ as TimelineCircle};
//# sourceMappingURL=time-indicator.styles.js.map
