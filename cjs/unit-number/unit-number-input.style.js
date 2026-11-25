"use strict";var e=require("styled-components"),t=require("../input/input.js"),r=require("../input-group/input-group.style.js"),n=require("../theme/index.js"),i=require("../typography/typography.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e);const u=a.default(r.LabelAddonContainer)`
    margin-right: 0.5rem;
`,l=a.default(t.Input)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,p=a.default(l)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,d=a.default(i.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${t=>{if(t.$inactive)return e.css`
                color: ${n.Colour["text-disabled"]};
            `}}
`,s=a.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,h=a.default(i.Typography.BodyBL)``;exports.FloorInput=l,exports.HashContainer=u,exports.ReadOnlyContainer=s,exports.ReadOnlyLabel=h,exports.UnitInput=p,exports.UnitNumberDivider=d;
//# sourceMappingURL=unit-number-input.style.js.map
