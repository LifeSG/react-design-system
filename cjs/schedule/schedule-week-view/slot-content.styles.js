"use strict";var e=require("styled-components"),t=require("../../typography/index.js"),o=require("../../v3_theme/index.js"),r=require("../const.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(e);const s=n.default(t.Typography.BodyXS)`
    width: calc(100% - 1px);
    height: ${e=>e.$duration?e.$duration/30*r.CELL_HEIGHT-1+"px":r.CELL_HEIGHT-1+"px"};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${o.V3_Spacing["spacing-4"]};
    position: absolute;
    top: ${e=>e.$offsetTop||0}px;
    border-radius: ${o.V3_Radius.sm};

    background: ${t=>{switch(t.$status){case"pending":return e.css`
                    repeating-linear-gradient(
                        135deg,
                        ${o.V3_Colour["bg-warning"]},
                        ${o.V3_Colour["bg-warning"]} 5px,
                        ${o.V3_Colour["bg-warning-hover"]} 5px,
                        ${o.V3_Colour["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return o.V3_Colour["bg-inverse-subtle"];case"available":return o.V3_Colour["bg-success-hover"];case"booked":return o.V3_Colour["bg-primary-subtler"];default:return o.V3_Colour.bg}}};

    color: ${e=>"blocked"===e.$status?o.V3_Colour["text-inverse"]:"inherit"};

    border-left: ${o.V3_Border["width-040"]} solid
        ${e=>"available"===e.$status?o.V3_Colour["icon-success"]:"none"};
`,a=n.default.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${o.V3_Font.Spec["weight-regular"]};
`,l=n.default.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${o.V3_Font.Spec["weight-semibold"]};
`;exports.SlotAvailability=l,exports.SlotContentContainer=s,exports.SlotServiceName=a;
//# sourceMappingURL=slot-content.styles.js.map
