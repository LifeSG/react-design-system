"use strict";var e=require("styled-components"),r=require("../v3_theme/index.js"),a=require("./form-label.style.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(e);const n=i.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${r.V3_Spacing["spacing-4"]};
`,s=i.default.div`
    display: flex;
    flex: 1;
    margin-right: ${r.V3_Spacing["spacing-12"]};
    gap: ${r.V3_Spacing["spacing-4"]};
`,o=i.default(a.ErrorMessage)`
    margin-top: 0;
`;exports.ErrorMessageContainer=s,exports.ErrorMessageLabel=o,exports.LabelContainer=n;
//# sourceMappingURL=form-textarea.style.js.map
