"use strict";var e=require("styled-components"),t=require("../../theme/index.js"),r=require("../styles/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(e);const o=i.default.div`
    position: relative;
    width: 100%;
    ${t=>{const r="small"===t.$variant?2.5:3;return e.css`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,a=i.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${r=>{if(r.$disabled)return e.css`
                color: ${t.Colour["text-disabled"]};
            `}}
`,s=i.default.div`
    ${e=>"small"===e.$variant?t.Font["body-md-regular"]:t.Font["body-baseline-regular"]}
    color: ${t.Colour.text};
    text-align: left;
    ${t=>{if("middle"!==t.$truncateType)return e.css`
                    ${r.lineClampCss(1)}
                `}}
    overflow: hidden;
`,n=i.default(s)`
    color: ${t.Colour["text-subtler"]};
`;exports.LabelContainer=a,exports.PlaceholderLabel=n,exports.ValueLabel=s,exports.Wrapper=o;
//# sourceMappingURL=dropdown-wrapper.styles.js.map
