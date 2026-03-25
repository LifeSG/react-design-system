"use strict";var e=require("styled-components"),t=require("../input/input.style.js"),r=require("../shared/input-wrapper/input-wrapper.js"),n=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=i(e);const a=p.default(t.ClearButton)`
    position: absolute;
    right: 0;
    padding-left: ${n.V3_Spacing["spacing-8"]};
    margin-right: 0;
`,u=p.default(r.InputWrapper)`
    height: 3rem;
`;exports.ClearIconContainer=a,exports.StyledInputWrapper=u;
//# sourceMappingURL=input-range-select.style.js.map
