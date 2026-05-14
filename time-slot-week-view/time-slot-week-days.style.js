import e,{css as t}from"styled-components";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import"../theme/tokens/border.js";import{Colour as i}from"../theme/tokens/colour.js";import{Font as r}from"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";import{TimeSlot as o}from"../time-slot-bar/time-slot-bar.styles.js";const m=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,l=e.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,s=e.div`
    ${r["body-xs-semibold"]}
    color:${i.text};

    ${e=>e.$disabled&&t`
            color: ${i["text-disabled-subtlest"]};
        `};
`,n=e.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,d=e.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,p=e.div`
    ${r["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${i.text};
    span {
        display: block;
    }
`,a=e(o)`
    position: relative;

    &:focus-within {
        outline: 2px solid ${i["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`,c=e.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;export{d as ColumnWeekCell,s as DayLabel,m as HeaderCellWeek,l as HeaderRow,a as TimeSlotComponent,p as TimeSlotText,c as TimeSlotWrapper,n as Wrapper};
//# sourceMappingURL=time-slot-week-days.style.js.map
