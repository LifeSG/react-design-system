"use strict";var e=require("styled-components"),t=require("../button/button.js"),n=require("../input/input.js"),i=require("../theme/index.js"),r=require("../typography/typography.js");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=p(e);const o=a.default.div`
    display: flex;
    flex-direction: column;
`,u=a.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${i.Spacing["spacing-8"]};
`,l=a.default(n.Input)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`,s=a.default(t.Button.Small)`
    margin: ${i.Spacing["spacing-32"]} 0;
`,d=a.default(r.Typography.BodyBL)`
    flex-shrink: 0;
`;exports.CTAButton=s,exports.InputContainer=u,exports.InputField=l,exports.Prefix=d,exports.Wrapper=o;
//# sourceMappingURL=otp-input.styles.js.map
