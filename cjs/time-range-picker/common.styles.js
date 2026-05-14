"use strict";var e=require("styled-components"),t=require("../shared/input-wrapper/input-wrapper.js"),r=require("../v3_theme/index.js");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=p(e);const a=i.default.div`
    position: relative;
`,n=i.default(t.InputWrapper)`
    height: 3rem;
    gap: ${r.V3_Spacing["spacing-8"]};
`,u=i.default(t.BasicInput)`
    display: block;
    width: 100%;
    flex: 1;
`;exports.SelectorInput=u,exports.TimeContainer=n,exports.Wrapper=a;
//# sourceMappingURL=common.styles.js.map
