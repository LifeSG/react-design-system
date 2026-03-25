import e,{css as i}from"styled-components";import{V3_Font as t,V3_Colour as l}from"../v3_theme/index.js";const o=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,d=e.div`
    ${t["body-xs-semibold"]}
    color:${l.text};

    ${e=>e.$disabled&&i`
            color: ${l["text-disabled-subtlest"]};
        `};
`,r=e.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,n=e.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,m=e.div`
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
`,s=e.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;export{n as ColumnWeekCell,d as DayLabel,o as HeaderCellWeek,m as TimeSlotText,s as TimeSlotWrapper,r as Wrapper};
//# sourceMappingURL=time-slot-week-days.style.js.map
