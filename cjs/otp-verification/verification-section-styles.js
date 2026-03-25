"use strict";var e=require("styled-components"),i=require("../button/button.js"),t=require("../typography/index.js"),a=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=n(e);const r=p.default.div`
    display: flex;
    align-items: center;
    background-color: ${a.V3_Colour["bg-strong"]};
    padding: ${a.V3_Spacing["spacing-16"]} ${a.V3_Spacing["spacing-32"]};
    gap: ${a.V3_Spacing["spacing-32"]};
    ${a.V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${a.V3_Spacing["spacing-16"]};
        padding: ${a.V3_Spacing["spacing-16"]};
    }
`,o=p.default.div`
    display: flex;
    flex-direction: column;
    gap: ${a.V3_Spacing["spacing-16"]};
`,s=p.default(t.Typography.BodyMD)`
    color: ${a.V3_Colour["text-subtlest"]};
`,c=p.default.div`
    display: flex;
    gap: ${a.V3_Spacing["spacing-8"]};
    max-width: 472px;
`,d=p.default(i.Button.Default)`
    flex-shrink: 0;
    width: 83px;
`;exports.ReSendMessage=s,exports.SectionContainer=o,exports.VerificationSectionWrapper=r,exports.VerifyButton=d,exports.VerifyInputWrapper=c;
//# sourceMappingURL=verification-section-styles.js.map
