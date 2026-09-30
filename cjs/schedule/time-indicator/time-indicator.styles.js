"use strict";var e=require("styled-components"),i=require("../../theme/index.js"),o=require("../../typography/typography.js"),t=require("../const.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e);const p=n.default.div`
    position: sticky;
    z-index: 3;
`,l=n.default.div`
    display: flex;
    flex-direction: column;
    min-width: ${t.TIME_INDICATOR_WIDTH}px;
    background: ${i.Colour.bg};
    border-right: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
`,d=n.default(o.Typography.BodySM)`
    min-height: ${2*t.CELL_HEIGHT}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${i.Colour["text-subtler"]};
    padding-right: ${i.Spacing["spacing-8"]};
    font-weight: ${i.Font.Spec["weight-bold"]};
    position: relative;
`,s=n.default.span`
    position: absolute;
    top: -18px;
`,a=n.default.div`
    position: absolute;
    right: -6px;
    top: ${e=>e.$top-6}px;
    width: ${i.Spacing["spacing-12"]};
    height: ${i.Spacing["spacing-12"]};
    border-radius: ${i.Radius.full};
    background: ${i.Colour["icon-primary"]};
    z-index: 4;
    display: ${e=>e.$isWeekView?"none":"block"};
`;exports.HourDisplay=s,exports.TimeColumn=l,exports.TimeColumnWrapper=p,exports.TimeLabel=d,exports.TimelineCircle=a;
//# sourceMappingURL=time-indicator.styles.js.map
