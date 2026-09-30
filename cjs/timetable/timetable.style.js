"use strict";var e=require("styled-components");require("../animations/loading-spinner/loading-spinner.js"),require("../animations/loading-dots/loading-dots.js");var o=require("../animations/loading-dots-spinner/loading-dots-spinner.js");require("react/jsx-runtime"),require("react");var r=require("../error-display/error-display.js");require("../error-display/helper.js"),require("../_virtual/_tslib.js");var i=require("../theme/index.js"),t=require("../typography/typography.js");require("../popover-v2/popover.styles.js"),require("../modal-v2/index.js");var d=require("../popover-v2/popover-trigger.js");require("../popover-v2/popover-inline/popover-inline.styles.js");var a=require("./const.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=l(e);const s=n.default.div``,p=n.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${a.ROW_HEADER_WIDTH}px auto;
`,u=n.default.div`
    display: grid;
    align-content: start;
    overflow: scroll;
    position: relative;
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    isolation: isolate;
    ${o=>{if(o.$loading)return e.css`
                &:hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,c=n.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${i.Colour.bg};
    width: ${a.ROW_HEADER_WIDTH}px;
    height: ${a.ROW_HEIGHT}px;
    z-index: 2;
    border-bottom: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    ${o=>o.$isScrolledX||o.$isScrolledY?e.css`
                box-shadow: ${i.Shadow["md-subtle"]};
                clip-path: inset(
                    0 ${o.$isScrolledX?"-0.12px":"0"}
                        ${o.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:e.css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,g=n.default.div`
    display: grid;
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: ${i.Colour.bg};
    grid-template-columns: ${a.ROW_HEADER_WIDTH}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${a.ROW_HEIGHT}px;
`,$=n.default.div`
    display: grid;
    background-color: ${i.Colour.bg};
    height: ${a.ROW_HEIGHT}px;
    grid-template-columns: repeat(
        ${e=>e.$numOfColumns},
        ${e=>Math.max(4*e.$intervalWidth,a.MIN_HOURLY_INTERVAL_WIDTH)}px
    );
    border-bottom: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    transition: all 0.5s ease-in-out;
    ${o=>{if(o.$isScrolled)return e.css`
                box-shadow: ${i.Shadow["md-subtle"]};
            `}};
`,x=n.default.div`
    min-width: ${a.MIN_HOURLY_INTERVAL_WIDTH}px;
    display: flex;
    align-items: flex-end;
    padding-bottom: ${i.Spacing["spacing-4"]};
`,h=n.default(t.Typography.BodySM)`
    color: ${i.Colour["text-subtler"]};
`,m=n.default.div`
    width: max-content;
    min-width: 100%;
`,b=n.default.div`
    display: grid;
    grid-template-columns: ${a.ROW_HEADER_WIDTH}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${a.ROW_HEIGHT}px;
`,w=n.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${i.Colour.bg};
    z-index: 3;
    width: ${a.ROW_HEADER_WIDTH}px;
    height: ${a.ROW_HEIGHT}px;
    text-align: right;
    padding: 0 ${i.Spacing["spacing-16"]} 0 ${i.Spacing["spacing-32"]};
    border-bottom: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    border-right: ${i.Border["width-005"]} ${i.Border.solid}
        ${i.Colour["border-primary"]};
    border-left: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    transition: all 0.5s ease-in-out;
    ${o=>o.$isScrolled?e.css`
                box-shadow: ${i.Shadow["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `:e.css`
                box-shadow: none;
            `};
`,f=n.default(t.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${i.Colour["text-primary"]};
    &:hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,v=n.default(t.Typography.BodyXS)`
    display: inline-flex;
    gap: ${i.Spacing["spacing-4"]};
    align-items: center;
    color: ${i.Colour["text-subtler"]};
    ${o=>{if(!o.$show)return e.css`
                display: none;
            `}}
`,y=n.default(o.LoadingDotsSpinner)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,H=n.default(r.ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${i.Spacing["spacing-72"]} 0;
`,T=n.default.div`
    display: flex;
    border-bottom: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
`,C=n.default.div`
    border-right: ${i.Border["width-005"]} ${i.Border.solid}
        ${i.Colour["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${i.Spacing["spacing-20"]} ${i.Spacing["spacing-12"]};
`,R=e.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,_=n.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${i.Colour.Primitive["neutral-95"]} 8%,
        ${i.Colour.Primitive["neutral-100"]} 18%,
        ${i.Colour.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${R} 1.5s forwards infinite;
`,S=n.default(d.PopoverTrigger)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;exports.ClickableRowHeaderTitle=f,exports.ColumnHeader=x,exports.ColumnHeaderRow=$,exports.ColumnHeaderTitle=h,exports.Container=s,exports.EmptyTableContainer=p,exports.Loader=y,exports.LoadingBar=_,exports.LoadingCell=C,exports.LoadingWrapper=T,exports.NoResultsFound=H,exports.RowColumnHeader=c,exports.RowHeader=w,exports.RowHeaderSubtitle=v,exports.StyledPopoverTrigger=S,exports.TimeTableBody=m,exports.TimeTableContainer=u,exports.TimeTableHeaderRow=g,exports.TimeTableRow=b;
//# sourceMappingURL=timetable.style.js.map
