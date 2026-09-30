"use strict";var e=require("styled-components"),t=require("../../theme/index.js"),o=require("../../typography/typography.js"),r=require("../const.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(e);const a=n.default(o.Typography.BodyXS)`
    width: calc(100% - 1px);
    height: ${e=>e.$duration?e.$duration/30*r.CELL_HEIGHT-1+"px":r.CELL_HEIGHT-1+"px"};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${t.Spacing["spacing-4"]};
    position: absolute;
    top: ${e=>e.$offsetTop||0}px;
    border-radius: ${t.Radius.sm};

    background: ${o=>{switch(o.$status){case"pending":return e.css`
                    repeating-linear-gradient(
                        135deg,
                        ${t.Colour["bg-warning"]},
                        ${t.Colour["bg-warning"]} 5px,
                        ${t.Colour["bg-warning-hover"]} 5px,
                        ${t.Colour["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return t.Colour["bg-inverse-subtle"];case"available":return t.Colour["bg-success-hover"];case"booked":return t.Colour["bg-primary-subtler"];default:return t.Colour.bg}}};

    color: ${e=>"blocked"===e.$status?t.Colour["text-inverse"]:"inherit"};

    border-left: ${t.Border["width-040"]} solid
        ${e=>"available"===e.$status?t.Colour["icon-success"]:"none"};
`,s=n.default.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${t.Font.Spec["weight-regular"]};
`,l=n.default.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${t.Font.Spec["weight-semibold"]};
`;exports.SlotAvailability=l,exports.SlotContentContainer=a,exports.SlotServiceName=s;
//# sourceMappingURL=slot-content.styles.js.map
