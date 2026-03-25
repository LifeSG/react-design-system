"use strict";var e=require("styled-components"),t=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=l(e);const i=r.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,o=r.default.div`
    ${t.V3_Font["body-xs-semibold"]}
    color:${t.V3_Colour.text};

    ${l=>l.$disabled&&e.css`
            color: ${t.V3_Colour["text-disabled-subtlest"]};
        `};
`,d=r.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,n=r.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,s=r.default.div`
    ${t.V3_Font["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${t.V3_Colour.text};
    span {
        display: block;
    }
`,a=r.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;exports.ColumnWeekCell=n,exports.DayLabel=o,exports.HeaderCellWeek=i,exports.TimeSlotText=s,exports.TimeSlotWrapper=a,exports.Wrapper=d;
//# sourceMappingURL=time-slot-week-days.style.js.map
