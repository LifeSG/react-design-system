"use strict";var e=require("styled-components"),t=require("../layout/col-div.js"),i=require("../v2_layout/col-div.js"),o=require("../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=r(e);const n=e.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${o.V3_Spacing["spacing-32"]};
    }
`,a=l.default.div`
    ${n}
`,s=l.default(t.ColDiv)`
    ${n}
`,u=l.default(i.V2_ColDiv)`
    ${n}
`;exports.ColDivContainer=s,exports.Container=a,exports.V2_ColDivContainer=u;
//# sourceMappingURL=form-wrapper.style.js.map
