"use strict";var e=require("styled-components"),i=require("../../typography/index.js"),o=require("../../v3_theme/index.js"),t=require("../const.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e);const l=n.default.div`
    position: sticky;
    z-index: 3;
`,p=n.default.div`
    display: flex;
    flex-direction: column;
    min-width: ${t.TIME_INDICATOR_WIDTH}px;
    background: ${o.V3_Colour.bg};
    border-right: ${o.V3_Border["width-010"]} ${o.V3_Border.solid}
        ${o.V3_Colour.border};
`,d=n.default(i.Typography.BodySM)`
    min-height: ${2*t.CELL_HEIGHT}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${o.V3_Colour["text-subtler"]};
    padding-right: ${o.V3_Spacing["spacing-8"]};
    font-weight: ${o.V3_Font.Spec["weight-bold"]};
    position: relative;
`,s=n.default.span`
    position: absolute;
    top: -18px;
`,a=n.default.div`
    position: absolute;
    right: -6px;
    top: ${e=>e.$top-6}px;
    width: ${o.V3_Spacing["spacing-12"]};
    height: ${o.V3_Spacing["spacing-12"]};
    border-radius: ${o.V3_Radius.full};
    background: ${o.V3_Colour["icon-primary"]};
    z-index: 4;
    display: ${e=>e.$isWeekView?"none":"block"};
`;exports.HourDisplay=s,exports.TimeColumn=p,exports.TimeColumnWrapper=l,exports.TimeLabel=d,exports.TimelineCircle=a;
//# sourceMappingURL=time-indicator.styles.js.map
