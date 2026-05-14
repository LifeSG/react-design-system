"use strict";var e=require("styled-components");require("../animations/loading-dots/loading-dots.js");var r=require("../animations/loading-dots-spinner/loading-dots-spinner.js");require("../animations/loading-spinner/loading-spinner.js"),require("react/jsx-runtime"),require("react"),require("../theme/theme-provider/context.js");var o=require("../error-display/error-display.js");require("../_virtual/_tslib.js"),require("clsx");var i=require("../typography/index.js");require("../card/card.styles_1gh9gs3.css"),require("../markup/markup.js"),require("../modal-v2/index.js"),require("../theme/theme-provider/index.js");var t=require("../theme/tokens/border.js"),d=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js");var a=require("../theme/tokens/spacing.js");require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer"),require("../popover-v2/popover.styles_lslc72.css");var s=require("../popover-v2/popover-trigger.js");require("../popover-v2/popover-inline/popover-inline.styles_ziag9c.css");var l=require("../v3_theme/index.js"),n=require("./const.js");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=p(e);const c=u.default.div``,g=u.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${n.ROW_HEADER_WIDTH}px auto;
`,h=u.default.div`
    display: grid;
    align-content: start;
    overflow: scroll;
    position: relative;
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    isolation: isolate;
    ${r=>{if(r.$loading)return e.css`
                &:hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,$=u.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${l.V3_Colour.bg};
    width: ${n.ROW_HEADER_WIDTH}px;
    height: ${n.ROW_HEIGHT}px;
    z-index: 2;
    border-bottom: ${l.V3_Border["width-010"]} ${l.V3_Border.solid}
        ${l.V3_Colour.border};
    ${r=>r.$isScrolledX||r.$isScrolledY?e.css`
                box-shadow: ${l.V3_Shadow["md-subtle"]};
                clip-path: inset(
                    0 ${r.$isScrolledX?"-0.12px":"0"}
                        ${r.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:e.css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,m=u.default.div`
    display: grid;
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: ${d.Colour.bg};
    grid-template-columns: ${n.ROW_HEADER_WIDTH}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${n.ROW_HEIGHT}px;
`,x=u.default.div`
    display: grid;
    background-color: ${d.Colour.bg};
    height: ${n.ROW_HEIGHT}px;
    grid-template-columns: repeat(
        ${e=>e.$numOfColumns},
        ${e=>Math.max(4*e.$intervalWidth,n.MIN_HOURLY_INTERVAL_WIDTH)}px
    );
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${d.Colour.border};
    transition: all 0.5s ease-in-out;
    ${r=>{if(r.$isScrolled)return e.css`
                box-shadow: ${l.V3_Shadow["md-subtle"]};
            `}};
`,_=u.default.div`
    min-width: ${n.MIN_HOURLY_INTERVAL_WIDTH}px;
    display: flex;
    align-items: flex-end;
    padding-bottom: ${a.Spacing["spacing-4"]};
`,b=u.default(i.Typography.BodySM)`
    color: ${l.V3_Colour["text-subtler"]};
`,v=u.default.div`
    width: max-content;
    min-width: 100%;
`,f=u.default.div`
    display: grid;
    grid-template-columns: ${n.ROW_HEADER_WIDTH}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${n.ROW_HEIGHT}px;
`,w=u.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${d.Colour.bg};
    z-index: 3;
    width: ${n.ROW_HEADER_WIDTH}px;
    height: ${n.ROW_HEIGHT}px;
    text-align: right;
    padding: 0 ${l.V3_Spacing["spacing-16"]} 0 ${l.V3_Spacing["spacing-32"]};
    border-bottom: ${l.V3_Border["width-010"]} ${l.V3_Border.solid}
        ${l.V3_Colour.border};
    border-right: ${l.V3_Border["width-005"]} ${l.V3_Border.solid}
        ${l.V3_Colour["border-primary"]};
    border-left: ${l.V3_Border["width-010"]} ${l.V3_Border.solid}
        ${l.V3_Colour.border};
    transition: all 0.5s ease-in-out;
    ${r=>r.$isScrolled?e.css`
                box-shadow: ${l.V3_Shadow["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `:e.css`
                box-shadow: none;
            `};
`,y=u.default(i.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${l.V3_Colour["text-primary"]};
    &:hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,V=u.default(i.Typography.BodyXS)`
    display: inline-flex;
    gap: ${l.V3_Spacing["spacing-4"]};
    align-items: center;
    color: ${l.V3_Colour["text-subtler"]};
    ${r=>{if(!r.$show)return e.css`
                display: none;
            `}}
`,H=u.default(r.LoadingDotsSpinner)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,T=u.default(o.ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${l.V3_Spacing["spacing-72"]} 0;
`,C=u.default.div`
    display: flex;
    border-bottom: ${l.V3_Border["width-010"]} ${l.V3_Border.solid}
        ${l.V3_Colour.border};
`,q=u.default.div`
    border-right: ${l.V3_Border["width-005"]} ${l.V3_Border.solid}
        ${l.V3_Colour["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${l.V3_Spacing["spacing-20"]} ${l.V3_Spacing["spacing-12"]};
`,j=e.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,R=u.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${l.V3_Colour.Primitive["neutral-95"]} 8%,
        ${l.V3_Colour.Primitive["neutral-100"]} 18%,
        ${l.V3_Colour.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${j} 1.5s forwards infinite;
`,k=u.default(s.PopoverTrigger)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;exports.ClickableRowHeaderTitle=y,exports.ColumnHeader=_,exports.ColumnHeaderRow=x,exports.ColumnHeaderTitle=b,exports.Container=c,exports.EmptyTableContainer=g,exports.Loader=H,exports.LoadingBar=R,exports.LoadingCell=q,exports.LoadingWrapper=C,exports.NoResultsFound=T,exports.RowColumnHeader=$,exports.RowHeader=w,exports.RowHeaderSubtitle=V,exports.StyledPopoverTrigger=k,exports.TimeTableBody=v,exports.TimeTableContainer=h,exports.TimeTableHeaderRow=m,exports.TimeTableRow=f;
//# sourceMappingURL=timetable.style.js.map
