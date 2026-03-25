"use strict";var e=require("styled-components"),t=require("../../../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e);const l=o.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,i=o.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${t.V3_Font["body-sm-semibold"]};
    color: ${t.V3_Colour.text};
`,n=o.default.div`
    grid-column: 1 / -1;
    display: flex;
`;exports.HeaderCell=i,exports.RowDayCell=n,exports.Wrapper=l;
//# sourceMappingURL=standard-calendar-day-view.style.js.map
