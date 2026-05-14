import{ChevronUpIcon as e}from"@lifesg/react-icons";import{animated as i}from"@react-spring/web";import t,{css as o}from"styled-components";import{Button as r}from"../button/button.js";import{TimeSlot as n}from"../time-slot-bar/time-slot-bar.styles.js";import{Typography as l}from"../typography/index.js";import{V3_Spacing as s,V3_Colour as a,V3_Motion as d,V3_Font as g,V3_Radius as p}from"../v3_theme/index.js";const $=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${s["spacing-8"]};
    flex: 1;
`,m=t(l.BodyXS)`
    ${e=>e.$disabled&&o`
            color: ${a["text-disabled-subtlest"]};
        `}
`,f=t.div`
    grid-column: 2 / -1;
    display: flex;
`,h=t.div`
    width: 100%;
`,c=t.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${s["spacing-4"]};
`,x=i(t.div`
    grid-column: 2 / -1;
    overflow: hidden;
`),u=t.div`
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
`,y=t.div`
    min-height: 60px;
    &:last-child {
        min-height: 0;
    }
`,v=t.div`
    ${g["body-xs-bold"]}
    color: ${a["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    &:first-line {
        font-size: ${g.Spec["body-size-sm"]};
    }
`,w=t.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${s["spacing-4"]};
`,C=t.div`
    display: flex;
    margin-top: ${s["spacing-8"]};
`,j=t(r.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${s["spacing-8"]};
    }
`,S=t(e)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${d["duration-250"]}
        ${d["ease-default"]};
`,k=t(n)`
    ${e=>{if("vertical"===e.$type)return o`
                position: relative;
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${p.xs};
            `}}

    &:focus-within {
        outline: 2px solid ${a["focus-ring"]};
        outline-offset: -2px;
    }

    ${e=>e.$halfFill?o`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${a["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||a["bg-strongest"]} 0px,\n                            ${e.$bgColor2||a["bg-strongest"]} 10px,\n                            ${e.$bgColor||a["bg-stronger"]} 10px,\n                            ${e.$bgColor||a["bg-stronger"]} 20px\n                        )`};
            `:o`
                background-color: ${e.$bgColor};
            `}
`;export{m as CellWeekText,S as ChevronIcon,j as CollapseExpandAllButton,C as CollapseExpandAllWrapper,u as ColumnWeekCell,x as Expandable,c as GridWrapper,$ as HeaderCellWeek,f as HeaderCellWeekColumn,b as TimeColumn,v as TimeColumnText,y as TimeColumnWrapper,k as TimeSlotComponent,w as TimeSlotWrapper,h as Wrapper};
//# sourceMappingURL=time-slot-bar-week-days.style.js.map
