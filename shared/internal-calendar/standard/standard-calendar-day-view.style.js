import e from"styled-components";import{Font as t,Colour as i}from"../../../theme/index.js";const o=e.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,r=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${t["body-sm-semibold"]};
    color: ${i.text};
`,n=e.div`
    grid-column: 1 / -1;
    display: flex;
`;export{r as HeaderCell,n as RowDayCell,o as Wrapper};
//# sourceMappingURL=standard-calendar-day-view.style.js.map
