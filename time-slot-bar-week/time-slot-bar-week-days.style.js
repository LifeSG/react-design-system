import{ChevronUpIcon as e}from"@lifesg/react-icons";import{animated as i}from"@react-spring/web";import t,{css as o}from"styled-components";import{Button as r}from"../button/button.js";import{Spacing as n,Colour as l,Motion as s,Font as a,Radius as d}from"../theme/index.js";import{TimeSlot as g}from"../time-slot-bar/time-slot-bar.styles.js";import{Typography as p}from"../typography/typography.js";const $=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${n["spacing-8"]};
    flex: 1;
`,m=t(p.BodyXS)`
    ${e=>e.$disabled&&o`
            color: ${l["text-disabled-subtlest"]};
        `}
`,h=t.div`
    grid-column: 2 / -1;
    display: flex;
`,f=t.div`
    width: 100%;
`,c=t.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${n["spacing-4"]};
`,x=i(t.div`
    grid-column: 2 / -1;
    overflow: hidden;
`),u=t.div`
    display: flex;
    gap: ${n["spacing-4"]};
    transition: all ${s["duration-250"]} ${s["ease-default"]};
    overflow: hidden;
`,b=t.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${n["spacing-4"]};
    width: 1.375rem;
    transition: all ${s["duration-250"]} ${s["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,y=t.div`
    min-height: 60px;
    &:last-child {
        min-height: 0;
    }
`,v=t.div`
    ${a["body-xs-bold"]}
    color: ${l["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    &:first-line {
        font-size: ${a.Spec["body-size-sm"]};
    }
`,w=t.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${n["spacing-4"]};
`,C=t.div`
    display: flex;
    margin-top: ${n["spacing-8"]};
`,j=t(r.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${n["spacing-8"]};
    }
`,S=t(e)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${s["duration-250"]} ${s["ease-default"]};
`,k=t(g)`
    ${e=>{if("vertical"===e.$type)return o`
                position: relative;
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${d.xs};
            `}}

    &:focus-within {
        outline: 2px solid ${l["focus-ring"]};
        outline-offset: -2px;
    }

    ${e=>e.$halfFill?o`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${l["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||l["bg-strongest"]} 0px,\n                            ${e.$bgColor2||l["bg-strongest"]} 10px,\n                            ${e.$bgColor||l["bg-stronger"]} 10px,\n                            ${e.$bgColor||l["bg-stronger"]} 20px\n                        )`};
            `:o`
                background-color: ${e.$bgColor};
            `}
`;export{m as CellWeekText,S as ChevronIcon,j as CollapseExpandAllButton,C as CollapseExpandAllWrapper,u as ColumnWeekCell,x as Expandable,c as GridWrapper,$ as HeaderCellWeek,h as HeaderCellWeekColumn,b as TimeColumn,v as TimeColumnText,y as TimeColumnWrapper,k as TimeSlotComponent,w as TimeSlotWrapper,f as Wrapper};
//# sourceMappingURL=time-slot-bar-week-days.style.js.map
