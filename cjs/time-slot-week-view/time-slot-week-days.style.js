"use strict";var e=require("styled-components");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js"),require("../theme/tokens/border.js");var r=require("../theme/tokens/colour.js"),t=require("../theme/tokens/font.js");require("../theme/tokens/media-query.js"),require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer");var i=require("../time-slot-bar/time-slot-bar.styles.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(e);const s=l.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,n=l.default.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,d=l.default.div`
    ${t.Font["body-xs-semibold"]}
    color:${r.Colour.text};

    ${t=>t.$disabled&&e.css`
            color: ${r.Colour["text-disabled-subtlest"]};
        `};
`,a=l.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,u=l.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,m=l.default.div`
    ${t.Font["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${r.Colour.text};
    span {
        display: block;
    }
`,p=l.default(i.TimeSlot)`
    position: relative;

    &:focus-within {
        outline: 2px solid ${r.Colour["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`,c=l.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;exports.ColumnWeekCell=u,exports.DayLabel=d,exports.HeaderCellWeek=s,exports.HeaderRow=n,exports.TimeSlotComponent=p,exports.TimeSlotText=m,exports.TimeSlotWrapper=c,exports.Wrapper=a;
//# sourceMappingURL=time-slot-week-days.style.js.map
