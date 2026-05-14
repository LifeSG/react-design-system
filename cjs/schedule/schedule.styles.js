"use strict";var r=require("styled-components"),e=require("../error-display/error-display.js"),o=require("../v3_theme/index.js"),i=require("./const.js");function d(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t=d(r);const a=t.default.div`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;
    ${e=>{if(e.$loading)return r.css`
                &:hover {
                    cursor: not-allowed;
                }
            `}}
`,n=t.default.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`,s=t.default.div`
    display: grid;
    overflow: auto;
    position: relative;
    grid-template-columns: ${i.MIN_COLUMN_WIDTH}px auto;
    border: ${o.V3_Border["width-010"]} ${o.V3_Border.solid} ${o.V3_Colour.border};
    border-radius: ${o.V3_Radius.md};
    background: ${o.V3_Colour.bg};
`,l=t.default(e.ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${o.V3_Spacing["spacing-72"]} 0;
`;exports.Container=a,exports.EmptyTableContainer=s,exports.NoResultsFound=l,exports.ScheduleBodyContainer=n;
//# sourceMappingURL=schedule.styles.js.map
