import e,{css as t}from"styled-components";import{TimeSlot as i}from"../shared/time-slot/time-slot.js";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import"../theme/tokens/border.js";import{Colour as r}from"../theme/tokens/colour.js";import{Font as o}from"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";import"../theme/utils/use-media-query.js";const m=e.div`
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
    ${o["body-xs-semibold"]}
    color:${r.text};

    ${e=>e.$disabled&&t`
            color: ${r["text-disabled-subtlest"]};
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
    ${o["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${r.text};
    span {
        display: block;
    }
`,a=e(i)`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1px 0px;
    position: relative;

    &:focus-within {
        outline: 2px solid ${r["focus-ring"]};
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
