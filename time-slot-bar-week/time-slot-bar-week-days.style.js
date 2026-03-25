import{ChevronUpIcon as e}from"@lifesg/react-icons";import{animated as i}from"@react-spring/web";import t,{css as r}from"styled-components";import{Button as o}from"../button/button.js";import{TimeSlot as n}from"../time-slot-bar/time-slot-bar.styles.js";import{Typography as l}from"../typography/index.js";import{V3_Spacing as s,V3_Colour as a,V3_Motion as d,V3_Font as g,V3_Radius as p}from"../v3_theme/index.js";const $=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${s["spacing-8"]};
    flex: 1;
`,m=t(l.BodyXS)`
    ${e=>e.$disabled&&r`
            color: ${a["text-disabled-subtlest"]};
        `}
`,c=t.div`
    grid-column: 2 / -1;
    display: flex;
`,h=t.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${s["spacing-4"]};
`,f=i(t.div`
    grid-column: 2 / -1;
    overflow: hidden;
`),x=t.div`
    display: flex;
    gap: ${s["spacing-4"]};
    transition: all ${d["duration-250"]} ${d["ease-default"]};
    overflow: hidden;
`,b=t.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${s["spacing-4"]};
    width: 1.375rem;
    transition: all ${d["duration-250"]} ${d["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,u=t.div`
    min-height: 3.75rem;
    &:last-child {
        min-height: 0;
    }
`,y=t.div`
    ${g["body-xs-bold"]}
    color: ${a["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    &:first-line {
        font-size: ${g.Spec["body-size-sm"]};
    }
`,v=t.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${s["spacing-4"]};
`,w=t.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${s["spacing-8"]};
`,C=t(o.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${s["spacing-8"]};
    }
`,j=t(e)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${d["duration-250"]}
        ${d["ease-default"]};
`,S=t(n)`
    ${e=>{if("vertical"===e.$type)return r`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${p.xs};
            `}}

    ${e=>e.$halfFill?r`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${a["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||a["bg-strongest"]} 0px,\n                            ${e.$bgColor2||a["bg-strongest"]} 10px,\n                            ${e.$bgColor||a["bg-stronger"]} 10px,\n                            ${e.$bgColor||a["bg-stronger"]} 20px\n                        )`};
            `:r`
                background-color: ${e.$bgColor};
            `}
`;export{m as CellWeekText,j as ChevronIcon,C as CollapseExpandAllButton,w as CollapseExpandAllWrapper,x as ColumnWeekCell,f as Expandable,$ as HeaderCellWeek,c as HeaderCellWeekColumn,b as TimeColumn,y as TimeColumnText,u as TimeColumnWrapper,S as TimeSlotComponent,v as TimeSlotWrapper,h as Wrapper};
//# sourceMappingURL=time-slot-bar-week-days.style.js.map
