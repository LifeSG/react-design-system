"use strict";var o=require("styled-components");require("../animations/loading-dots/loading-dots.js");var e=require("../animations/loading-dots-spinner/loading-dots-spinner.js");require("../animations/loading-spinner/loading-spinner.js"),require("react/jsx-runtime"),require("react");var r=require("../error-display/error-display.js"),i=require("../v3_theme/index.js");require("../_virtual/_tslib.js"),require("../modal-v2/index.js");var t=require("../typography/index.js");require("../popover-v2/popover.styles.js");var d=require("../popover-v2/popover-trigger.js");require("../popover-v2/popover-inline/popover-inline.styles.js");var a=require("./const.js");function l(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=l(o);const s=n.default.div``,p=n.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${a.ROW_HEADER_WIDTH}px auto;
`,u=n.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${a.ROW_HEADER_WIDTH}px fit-content(100%);
    padding-bottom: ${o=>o.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return o.css`
                &:hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,c=n.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${i.V3_Colour.bg};
    width: ${a.ROW_HEADER_WIDTH}px;
    z-index: 2;
    border-bottom: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?o.css`
                box-shadow: ${i.V3_Shadow["md-subtle"]};
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:o.css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,g=n.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${i.V3_Colour.bg};
    grid-template-rows: repeat(${o=>o.$numOfRows}, ${a.ROW_HEIGHT}px);
`,$=n.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${i.V3_Colour.bg};
    grid-template-columns: repeat(${o=>o.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return o.css`
                box-shadow: ${i.V3_Shadow["md-subtle"]};
            `}};
`,x=n.default.div`
    min-width: ${a.MIN_HOURLY_INTERVAL_WIDTH}px;
    align-content: end;
    margin-bottom: ${i.V3_Spacing["spacing-4"]};
`,m=n.default(t.Typography.BodySM)`
    color: ${i.V3_Colour["text-subtler"]};
`,_=n.default.div`
    display: grid;
    grid-template-rows: repeat(${o=>o.$numOfRows}, ${a.ROW_HEIGHT}px);
`,h=n.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${i.V3_Colour.bg};
    width: ${a.ROW_HEADER_WIDTH}px;
    height: ${a.ROW_HEIGHT}px;
    text-align: right;
    padding: 0 ${i.V3_Spacing["spacing-16"]} 0 ${i.V3_Spacing["spacing-32"]};
    border-bottom: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    border-right: ${i.V3_Border["width-005"]} ${i.V3_Border.solid}
        ${i.V3_Colour["border-primary"]};
    border-left: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?o.css`
                box-shadow: ${i.V3_Shadow["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `:o.css`
                box-shadow: none;
            `};
`,b=n.default(t.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${i.V3_Colour["text-primary"]};
    &:hover {
        cursor: ${o=>o.$isClickable?"pointer":"default"};
    }
`,f=n.default(t.Typography.BodyXS)`
    display: inline-flex;
    gap: ${i.V3_Spacing["spacing-4"]};
    align-items: center;
    color: ${i.V3_Colour["text-subtler"]};
    ${e=>{if(!e.$show)return o.css`
                display: none;
            `}}
`,w=n.default(e.LoadingDotsSpinner)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${o=>o.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,v=n.default(r.ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${i.V3_Spacing["spacing-72"]} 0;
`,y=n.default.div`
    display: flex;
    border-bottom: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
`,V=n.default.div`
    border-right: ${i.V3_Border["width-005"]} ${i.V3_Border.solid}
        ${i.V3_Colour["border-primary"]};
    width: ${o=>`${o.$width}px`};
    height: 100%;
    padding: ${i.V3_Spacing["spacing-20"]} ${i.V3_Spacing["spacing-12"]};
`,C=o.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,H=n.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${i.V3_Colour.Primitive["neutral-95"]} 8%,
        ${i.V3_Colour.Primitive["neutral-100"]} 18%,
        ${i.V3_Colour.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${C} 1.5s forwards infinite;
`,R=n.default(d.PopoverTrigger)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;exports.ClickableRowHeaderTitle=b,exports.ColumnHeader=x,exports.ColumnHeaderRow=$,exports.ColumnHeaderTitle=m,exports.Container=s,exports.ContentContainer=_,exports.EmptyTableContainer=p,exports.Loader=w,exports.LoadingBar=H,exports.LoadingCell=V,exports.LoadingWrapper=y,exports.NoResultsFound=v,exports.RowColumnHeader=c,exports.RowHeader=h,exports.RowHeaderColumn=g,exports.RowHeaderSubtitle=f,exports.StyledPopoverTrigger=R,exports.TimeTableContainer=u;
//# sourceMappingURL=timetable.style.js.map
