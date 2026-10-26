"use strict";var r=require("styled-components"),e=require("./const.js"),o=require("../error-display/error-display.js");require("../error-display/helper.js");var i=require("../theme/index.js");function d(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t=d(r);const a=t.default.div`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;
    ${e=>{if(e.$loading)return r.css`
                &:hover {
                    cursor: not-allowed;
                }
            `}}
`,s=t.default.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`,n=t.default.div`
    display: grid;
    overflow: auto;
    position: relative;
    grid-template-columns: ${e.MIN_COLUMN_WIDTH}px auto;
    border: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    border-radius: ${i.Radius.md};
    background: ${i.Colour.bg};
`,l=t.default(o.ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${i.Spacing["spacing-72"]} 0;
`;exports.Container=a,exports.EmptyTableContainer=n,exports.NoResultsFound=l,exports.ScheduleBodyContainer=s;
//# sourceMappingURL=schedule.styles.js.map
