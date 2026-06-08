"use strict";var e=require("styled-components"),t=require("../../theme/index.js"),r=require("../styles/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(e);const a=i.default.div`
    position: relative;
    width: 100%;
    ${t=>{const r="small"===t.$variant?2.5:3;return e.css`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,s=i.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${r=>{if(r.$disabled)return e.css`
                color: ${t.Colour["text-disabled"]};
            `}}
`,o=i.default.div`
    ${e=>"small"===e.$variant?t.Font["body-md-regular"]:t.Font["body-baseline-regular"]}
    text-align: left;
    ${t=>{if("middle"!==t.$truncateType)return e.css`
                    ${r.lineClampCss(1)}
                `}}
    overflow: hidden;
`,n=i.default(o)`
    color: ${t.Colour["text-subtler"]};
`;exports.LabelContainer=s,exports.PlaceholderLabel=n,exports.ValueLabel=o,exports.Wrapper=a;
//# sourceMappingURL=dropdown-wrapper.styles.js.map
