import e,{css as i}from"styled-components";import{Font as t,Colour as l}from"../theme/index.js";import{TimeSlot as o}from"../time-slot-bar/time-slot-bar.styles.js";const r=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,d=e.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,s=e.div`
    ${t["body-xs-semibold"]}
    color:${l.text};

    ${e=>e.$disabled&&i`
            color: ${l["text-disabled-subtlest"]};
        `};
`,n=e.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,m=e.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,a=e.div`
    ${t["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${l.text};
    span {
        display: block;
    }
`,c=e(o)`
    position: relative;

    &:focus-within {
        outline: 2px solid ${l["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`,p=e.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;export{m as ColumnWeekCell,s as DayLabel,r as HeaderCellWeek,d as HeaderRow,c as TimeSlotComponent,a as TimeSlotText,p as TimeSlotWrapper,n as Wrapper};
//# sourceMappingURL=time-slot-week-days.style.js.map
