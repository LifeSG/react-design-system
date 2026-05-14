"use strict";var e=require("@lifesg/react-icons"),t=require("@react-spring/web"),o=require("styled-components"),i=require("../button/button.js"),r=require("../time-slot-bar/time-slot-bar.styles.js"),l=require("../typography/index.js"),n=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(o);const p=s.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${n.V3_Spacing["spacing-8"]};
    flex: 1;
`,d=s.default(l.Typography.BodyXS)`
    ${e=>e.$disabled&&o.css`
            color: ${n.V3_Colour["text-disabled-subtlest"]};
        `}
`,u=s.default.div`
    grid-column: 2 / -1;
    display: flex;
`,g=s.default.div`
    width: 100%;
`,c=s.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${n.V3_Spacing["spacing-4"]};
`,$=t.animated(s.default.div`
    grid-column: 2 / -1;
    overflow: hidden;
`),x=s.default.div`
    display: flex;
    gap: ${n.V3_Spacing["spacing-4"]};
    transition: all ${n.V3_Motion["duration-250"]} ${n.V3_Motion["ease-default"]};
    overflow: hidden;
`,f=s.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${n.V3_Spacing["spacing-4"]};
    width: 1.375rem;
    transition: all ${n.V3_Motion["duration-250"]} ${n.V3_Motion["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,h=s.default.div`
    min-height: 60px;
    &:last-child {
        min-height: 0;
    }
`,m=s.default.div`
    ${n.V3_Font["body-xs-bold"]}
    color: ${n.V3_Colour["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    &:first-line {
        font-size: ${n.V3_Font.Spec["body-size-sm"]};
    }
`,b=s.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${n.V3_Spacing["spacing-4"]};
`,C=s.default.div`
    display: flex;
    margin-top: ${n.V3_Spacing["spacing-8"]};
`,_=s.default(i.Button.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${n.V3_Spacing["spacing-8"]};
    }
`,y=s.default(e.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${n.V3_Motion["duration-250"]}
        ${n.V3_Motion["ease-default"]};
`,V=s.default(r.TimeSlot)`
    ${e=>{if("vertical"===e.$type)return o.css`
                position: relative;
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${n.V3_Radius.xs};
            `}}

    &:focus-within {
        outline: 2px solid ${n.V3_Colour["focus-ring"]};
        outline-offset: -2px;
    }

    ${e=>e.$halfFill?o.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${n.V3_Colour["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||n.V3_Colour["bg-strongest"]} 0px,\n                            ${e.$bgColor2||n.V3_Colour["bg-strongest"]} 10px,\n                            ${e.$bgColor||n.V3_Colour["bg-stronger"]} 10px,\n                            ${e.$bgColor||n.V3_Colour["bg-stronger"]} 20px\n                        )`};
            `:o.css`
                background-color: ${e.$bgColor};
            `}
`;exports.CellWeekText=d,exports.ChevronIcon=y,exports.CollapseExpandAllButton=_,exports.CollapseExpandAllWrapper=C,exports.ColumnWeekCell=x,exports.Expandable=$,exports.GridWrapper=c,exports.HeaderCellWeek=p,exports.HeaderCellWeekColumn=u,exports.TimeColumn=f,exports.TimeColumnText=m,exports.TimeColumnWrapper=h,exports.TimeSlotComponent=V,exports.TimeSlotWrapper=b,exports.Wrapper=g;
//# sourceMappingURL=time-slot-bar-week-days.style.js.map
