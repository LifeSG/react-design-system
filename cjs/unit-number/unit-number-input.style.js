"use strict";var e=require("styled-components"),t=require("../input/input.js"),r=require("../typography/index.js"),i=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const o=a.default.div`
    margin-right: 0.5rem;
`,l=a.default(t.Input)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,d=a.default(l)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,u=a.default(r.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${t=>{if(t.$inactive)return e.css`
                color: ${i.V3_Colour["text-disabled"]};
            `}}
`,p=a.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,s=a.default(r.Typography.BodyBL)``;exports.FloorInput=l,exports.HashContainer=o,exports.ReadOnlyContainer=p,exports.ReadOnlyLabel=s,exports.UnitInput=d,exports.UnitNumberDivider=u;
//# sourceMappingURL=unit-number-input.style.js.map
