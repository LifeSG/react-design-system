"use strict";var e=require("styled-components"),r=require("../theme/index.js"),t=require("../typography/typography.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const a=i.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${r.MediaQuery.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${r.MediaQuery.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,l=i.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,d=i.default.div`
    height: 4px;
    margin-bottom: ${r.Spacing["spacing-8"]};
    border-radius: ${r.Radius.full};
    ${e=>{const{$highlighted:t}=e;return`\n            background-color: ${(t?r.Colour["bg-primary-subtle"]:r.Colour["bg-disabled"])(e)};\n        `}};
`,n=i.default(t.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{$highlighted:t}=e;return`color: ${(t?r.Colour["text-primary"]:r.Colour["text-disabled"])(e)};`}};
`,p=i.default(t.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${r.Colour.text};
`,s=i.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;exports.Content=l,exports.INDICATOR_BAR_MARGIN_RIGHT_TABLET=.5,exports.Indicator=s,exports.IndicatorBar=d,exports.IndicatorTitleDesktop=n,exports.IndicatorTitleTablet=p,exports.Wrapper=a;
//# sourceMappingURL=progress-indicator.style.js.map
