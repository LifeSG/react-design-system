"use strict";var e=require("styled-components"),o=require("../../icon-button/icon-button.js"),r=require("../../shared/styles/index.js"),t=require("../../typography/index.js"),i=require("../../v3_theme/index.js"),d=require("../const.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(e);const s=l.default(o.IconButton)`
    color: ${i.V3_Colour.icon};
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
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    border-radius: ${i.V3_Radius.md};
    background: ${i.V3_Colour.bg};
`,c=l.default.div`
    z-index: 3;
    max-height: ${d.HEADER_HEIGHT}px;
    border-top-right-radius: ${i.V3_Radius.md};
    border-top-left-radius: ${i.V3_Radius.md};
    position: sticky;
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    overflow-x: hidden;
    overflow-y: hidden;

    ${o=>o.$isMobile?e.css`
                  display: block;
                  overflow: hidden;
              `:e.css`
                  display: grid;
                  grid-template-columns: ${d.TIME_INDICATOR_WIDTH}px 1fr;
              `}
`,g=l.default.div`
    min-width: ${d.TIME_INDICATOR_WIDTH}px;
    background: ${i.V3_Colour["bg-strong"]};
    position: sticky;
    left: 0;
`,$=l.default.div`
    display: grid;
    grid-template-columns: repeat(${e=>e.$columnCount}, 1fr);
`,_=l.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${d.MIN_COLUMN_WIDTH}px;
    padding: ${i.V3_Spacing["spacing-16"]} ${i.V3_Spacing["spacing-8"]};
    background: ${i.V3_Colour["bg-strong"]};
    border-right: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    &:last-child {
        border-right: none;
    }
`,b=l.default.div`
    width: 15rem;
    padding-left: ${i.V3_Spacing["spacing-16"]};
`,h=l.default(t.Typography.BodyMD)`
    color: ${i.V3_Colour["text-primary"]};
    font-weight: ${i.V3_Font.Spec["weight-semibold"]};
    margin-top: 0;
    ${r.lineClampCss(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`,x=l.default(t.Typography.BodySM)`
    margin-top: ${i.V3_Spacing["spacing-8"]};
    background-color: ${i.V3_Colour["bg-success-hover"]};
    border-radius: ${i.V3_Radius.full};
    width: fit-content;
    padding: ${i.V3_Spacing["spacing-4"]} ${i.V3_Spacing["spacing-8"]};
    color: ${i.V3_Colour["text-success"]};
    font-weight: ${i.V3_Font.Spec["weight-regular"]};
    span {
        font-weight: ${i.V3_Font.Spec["weight-semibold"]};
    }
`,f=l.default.div`
    display: grid;
    grid-template-columns: ${d.TIME_INDICATOR_WIDTH}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    border-top: none;
    border-bottom-right-radius: ${i.V3_Radius.md};
    border-bottom-left-radius: ${i.V3_Radius.md};
`,V=l.default.div`
    display: grid;
    grid-template-columns: repeat(${e=>e.$columnCount}, 1fr);
    min-width: max-content;
    position: relative;
`,m=l.default.div`
    display: flex;
    flex-direction: column;
    min-width: ${d.MIN_COLUMN_WIDTH}px;
    min-height: fit-content;
    border-right: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    &:last-child {
        border-right: none;
    }
`,C=l.default.div`
    min-height: ${d.CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${i.V3_Border["width-010"]} solid ${i.V3_Colour.border};
    ${o=>o.$dashed&&e.css`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,w=l.default(t.Typography.BodyXS)`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${i.V3_Spacing["spacing-8"]};
    position: absolute;
    top: ${e=>e.$offsetTop||0}px;
    ${i.V3_Font["body-xs-semibold"]};
    border-radius: ${i.V3_Radius.sm};
    z-index: 1;
    height: ${e=>e.$duration?e.$duration/30*d.CELL_HEIGHT-1+"px":d.CELL_HEIGHT-1+"px"};
    display: flex;
    justify-content: space-between;
    background: ${o=>{switch(o.$status){case"pending":return e.css`
                    repeating-linear-gradient(
                        135deg,
                        ${i.V3_Colour["bg-warning"]},
                        ${i.V3_Colour["bg-warning"]} 5px,
                        ${i.V3_Colour["bg-warning-hover"]} 5px,
                        ${i.V3_Colour["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return i.V3_Colour["bg-inverse-subtle"];case"available":return i.V3_Colour["bg-success-hover"];case"booked":return i.V3_Colour["bg-primary-subtler"];default:return i.V3_Colour.bg}}};

    color: ${e=>"blocked"===e.$status?i.V3_Colour["text-inverse"]:i.V3_Colour["text-subtle"]};

    border-left: ${i.V3_Border["width-040"]} solid
        ${e=>"available"===e.$status?i.V3_Colour["icon-success"]:"none"};
`,y=l.default.span`
    ${i.V3_Font["body-xs-regular"]};
`,v=l.default.span`
    ${i.V3_Font["body-xs-semibold"]};
`,S=l.default.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${i.V3_Colour["icon-primary"]};
    top: ${e=>e.$top}px;
    z-index: 2;
`,T=l.default.div`
    width: 100%;
    height: ${d.CELL_HEIGHT-1}px;
`;exports.ArrowButton=s,exports.ArrowContainer=a,exports.BlankCell=g,exports.BodyContainer=f,exports.Description=x,exports.EmptySlot=T,exports.HeaderContainer=c,exports.LoadingContainer=p,exports.ScheduleContainer=u,exports.ServiceColumn=_,exports.ServiceContainer=$,exports.ServiceHeaderContainer=b,exports.SlotAvailability=v,exports.SlotCell=C,exports.SlotColumn=m,exports.SlotContent=w,exports.SlotGrid=V,exports.SlotTime=y,exports.Timeline=S,exports.Title=h;
//# sourceMappingURL=schedule-day-view.styles.js.map
