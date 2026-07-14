"use strict";var e=require("styled-components"),r=require("../theme/index.js"),t=require("./form-label.style.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(e);const n=i.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${r.Spacing["spacing-4"]};
`,s=i.default.div`
    ${r.Font["body-sm-semibold"]}
    display: flex;
    flex: 1;
    margin-right: ${r.Spacing["spacing-12"]};
    gap: ${r.Spacing["spacing-4"]};
`,o=i.default(t.ErrorMessage)`
    margin-top: 0;
`;exports.ErrorMessageContainer=s,exports.ErrorMessageLabel=o,exports.LabelContainer=n;
//# sourceMappingURL=form-textarea.style.js.map
