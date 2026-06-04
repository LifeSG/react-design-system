"use strict";var e=require("styled-components"),t=require("../shared/time-slot/time-slot.js");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js"),require("../theme/tokens/border.js");var r=require("../theme/tokens/colour.js"),i=require("../theme/tokens/font.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../theme/tokens/media-query.js"),require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer"),require("../theme/utils/use-media-query.js");var o=l(e);const s=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,n=o.default.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,d=o.default.div`
    ${i.Font["body-xs-semibold"]}
    color:${r.Colour.text};

    ${t=>t.$disabled&&e.css`
            color: ${r.Colour["text-disabled-subtlest"]};
        `};
`,a=o.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,u=o.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,m=o.default.div`
    ${i.Font["body-xs-semibold"]}
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
`,p=o.default(t.TimeSlot)`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1px 0px;
    position: relative;

    &:focus-within {
        outline: 2px solid ${r.Colour["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`,c=o.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;exports.ColumnWeekCell=u,exports.DayLabel=d,exports.HeaderCellWeek=s,exports.HeaderRow=n,exports.TimeSlotComponent=p,exports.TimeSlotText=m,exports.TimeSlotWrapper=c,exports.Wrapper=a;
//# sourceMappingURL=time-slot-week-days.style.js.map
