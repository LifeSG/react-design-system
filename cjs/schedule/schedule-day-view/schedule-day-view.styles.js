"use strict";var o=require("styled-components"),e=require("../../theme/index.js"),r=require("../../typography/typography.js"),t=require("../const.js"),i=require("../../icon-button/icon-button.js"),d=require("../../shared/styles/index.js");function n(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var l=n(o);const s=l.default(i.IconButton)`
    color: ${e.Colour.icon};
`,a=l.default.div`
    width: 2rem;
`,u=l.default.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,p=l.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${e.Border["width-010"]} ${e.Border.solid} ${e.Colour.border};
    border-radius: ${e.Radius.md};
    background: ${e.Colour.bg};
`,c=l.default.div`
    z-index: 3;
    max-height: ${t.HEADER_HEIGHT}px;
    border-top-right-radius: ${e.Radius.md};
    border-top-left-radius: ${e.Radius.md};
    position: sticky;
    border: ${e.Border["width-010"]} ${e.Border.solid} ${e.Colour.border};
    overflow-x: hidden;
    overflow-y: hidden;

    ${e=>e.$isMobile?o.css`
                  display: block;
                  overflow: hidden;
              `:o.css`
                  display: grid;
                  grid-template-columns: ${t.TIME_INDICATOR_WIDTH}px 1fr;
              `}
`,g=l.default.div`
    min-width: ${t.TIME_INDICATOR_WIDTH}px;
    background: ${e.Colour["bg-strong"]};
    position: sticky;
    left: 0;
`,$=l.default.div`
    display: grid;
    grid-template-columns: repeat(${o=>o.$columnCount}, 1fr);
`,b=l.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${t.MIN_COLUMN_WIDTH}px;
    padding: ${e.Spacing["spacing-16"]} ${e.Spacing["spacing-8"]};
    background: ${e.Colour["bg-strong"]};
    border-right: ${e.Border["width-010"]} ${e.Border.solid} ${e.Colour.border};
    &:last-child {
        border-right: none;
    }
`,h=l.default.div`
    width: 15rem;
    padding-left: ${e.Spacing["spacing-16"]};
`,x=l.default(r.Typography.BodyMD)`
    color: ${e.Colour["text-primary"]};
    font-weight: ${e.Font.Spec["weight-semibold"]};
    margin-top: 0;
    ${d.lineClampCss(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`,f=l.default(r.Typography.BodySM)`
    margin-top: ${e.Spacing["spacing-8"]};
    background-color: ${e.Colour["bg-success-hover"]};
    border-radius: ${e.Radius.full};
    width: fit-content;
    padding: ${e.Spacing["spacing-4"]} ${e.Spacing["spacing-8"]};
    color: ${e.Colour["text-success"]};
    font-weight: ${e.Font.Spec["weight-regular"]};
    span {
        font-weight: ${e.Font.Spec["weight-semibold"]};
    }
`,m=l.default.div`
    display: grid;
    grid-template-columns: ${t.TIME_INDICATOR_WIDTH}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${e.Border["width-010"]} ${e.Border.solid} ${e.Colour.border};
    border-top: none;
    border-bottom-right-radius: ${e.Radius.md};
    border-bottom-left-radius: ${e.Radius.md};
`,C=l.default.div`
    display: grid;
    grid-template-columns: repeat(${o=>o.$columnCount}, 1fr);
    min-width: max-content;
    position: relative;
`,w=l.default.div`
    display: flex;
    flex-direction: column;
    min-width: ${t.MIN_COLUMN_WIDTH}px;
    min-height: fit-content;
    border-right: ${e.Border["width-010"]} ${e.Border.solid} ${e.Colour.border};
    &:last-child {
        border-right: none;
    }
`,y=l.default.div`
    min-height: ${t.CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${e.Border["width-010"]} solid ${e.Colour.border};
    ${e=>e.$dashed&&o.css`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,v=l.default(r.Typography.BodyXS)`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${e.Spacing["spacing-8"]};
    position: absolute;
    top: ${o=>o.$offsetTop||0}px;
    ${e.Font["body-xs-semibold"]};
    border-radius: ${e.Radius.sm};
    z-index: 1;
    height: ${o=>o.$duration?o.$duration/30*t.CELL_HEIGHT-1+"px":t.CELL_HEIGHT-1+"px"};
    display: flex;
    justify-content: space-between;
    background: ${r=>{switch(r.$status){case"pending":return o.css`
                    repeating-linear-gradient(
                        135deg,
                        ${e.Colour["bg-warning"]},
                        ${e.Colour["bg-warning"]} 5px,
                        ${e.Colour["bg-warning-hover"]} 5px,
                        ${e.Colour["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return e.Colour["bg-inverse-subtle"];case"available":return e.Colour["bg-success-hover"];case"booked":return e.Colour["bg-primary-subtler"];default:return e.Colour.bg}}};

    color: ${o=>"blocked"===o.$status?e.Colour["text-inverse"]:e.Colour["text-subtle"]};

    border-left: ${e.Border["width-040"]} solid
        ${o=>"available"===o.$status?e.Colour["icon-success"]:"none"};
`,S=l.default.span`
    ${e.Font["body-xs-regular"]};
`,T=l.default.span`
    ${e.Font["body-xs-semibold"]};
`,I=l.default.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${e.Colour["icon-primary"]};
    top: ${o=>o.$top}px;
    z-index: 2;
`,B=l.default.div`
    width: 100%;
    height: ${t.CELL_HEIGHT-1}px;
`;exports.ArrowButton=s,exports.ArrowContainer=a,exports.BlankCell=g,exports.BodyContainer=m,exports.Description=f,exports.EmptySlot=B,exports.HeaderContainer=c,exports.LoadingContainer=p,exports.ScheduleContainer=u,exports.ServiceColumn=b,exports.ServiceContainer=$,exports.ServiceHeaderContainer=h,exports.SlotAvailability=T,exports.SlotCell=y,exports.SlotColumn=w,exports.SlotContent=v,exports.SlotGrid=C,exports.SlotTime=S,exports.Timeline=I,exports.Title=x;
//# sourceMappingURL=schedule-day-view.styles.js.map
