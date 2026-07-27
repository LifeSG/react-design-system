"use strict";var e=require("styled-components"),t=require("../theme/index.js"),l=require("../time-slot-bar/time-slot-bar.styles.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const r=i.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,d=i.default.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,s=i.default.div`
    ${t.Font["body-xs-semibold"]}
    color:${t.Colour.text};

    ${l=>l.$disabled&&e.css`
            color: ${t.Colour["text-disabled-subtlest"]};
        `};
`,n=i.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,a=i.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,u=i.default.div`
    ${t.Font["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${t.Colour.text};
    span {
        display: block;
    }
`,m=i.default(l.TimeSlot)`
    position: relative;

    &:focus-within {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`,p=i.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;exports.ColumnWeekCell=a,exports.DayLabel=s,exports.HeaderCellWeek=r,exports.HeaderRow=d,exports.TimeSlotComponent=m,exports.TimeSlotText=u,exports.TimeSlotWrapper=p,exports.Wrapper=n;
//# sourceMappingURL=time-slot-week-days.style.js.map
