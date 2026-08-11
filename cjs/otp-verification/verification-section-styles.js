"use strict";var e=require("styled-components"),t=require("../typography/typography.js"),i=require("../theme/index.js"),a=require("../button/button.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=n(e);const r=p.default.div`
    display: flex;
    align-items: center;
    background-color: ${i.Colour["bg-strong"]};
    padding: ${i.Spacing["spacing-16"]} ${i.Spacing["spacing-32"]};
    gap: ${i.Spacing["spacing-32"]};
    ${i.MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${i.Spacing["spacing-16"]};
        padding: ${i.Spacing["spacing-16"]};
    }
`,o=p.default.div`
    display: flex;
    flex-direction: column;
    gap: ${i.Spacing["spacing-16"]};
`,s=p.default(t.Typography.BodyMD)`
    color: ${i.Colour["text-subtlest"]};
`,c=p.default.div`
    display: flex;
    gap: ${i.Spacing["spacing-8"]};
    max-width: 472px;
`,g=p.default(a.Button.Default)`
    flex-shrink: 0;
    width: 83px;
`;exports.ReSendMessage=s,exports.SectionContainer=o,exports.VerificationSectionWrapper=r,exports.VerifyButton=g,exports.VerifyInputWrapper=c;
//# sourceMappingURL=verification-section-styles.js.map
