"use strict";var e=require("styled-components"),r=require("../typography/index.js"),t=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const a=i.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${t.V3_MediaQuery.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${t.V3_MediaQuery.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,l=i.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,d=i.default.div`
    height: 4px;
    margin-bottom: ${t.V3_Spacing["spacing-8"]};
    border-radius: ${t.V3_Radius.full};
    ${e=>{const{$highlighted:r}=e;return`\n            background-color: ${(r?t.V3_Colour["bg-primary-subtle"]:t.V3_Colour["bg-disabled"])(e)};\n        `}};
`,n=i.default(r.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{$highlighted:r}=e;return`color: ${(r?t.V3_Colour["text-primary"]:t.V3_Colour["text-disabled"])(e)};`}};
`,s=i.default(r.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${t.V3_Colour.text};
`,u=i.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;exports.Content=l,exports.INDICATOR_BAR_MARGIN_RIGHT_TABLET=.5,exports.Indicator=u,exports.IndicatorBar=d,exports.IndicatorTitleDesktop=n,exports.IndicatorTitleTablet=s,exports.Wrapper=a;
//# sourceMappingURL=progress-indicator.style.js.map
