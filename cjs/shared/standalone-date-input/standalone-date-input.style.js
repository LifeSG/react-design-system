"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js"),r=require("../input-wrapper/input-wrapper.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e);const n=o.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,a=o.default.div`
    display: flex;
    align-items: center;

    ${r=>{if(r.$hover)return e.css`
                ${l}, ${p} {
                    color: ${t.V3_Colour["text-subtler"]};
                }
            `}}
`,l=o.default(r.BasicInput)`
    background: transparent;
    text-align: center;
`,s=o.default(l)`
    width: 2rem;
    margin-right: ${t.V3_Spacing["spacing-4"]};
`,u=o.default(l)`
    width: 2.5rem;
`,d=o.default(l)`
    width: 3rem;
    margin-left: ${t.V3_Spacing["spacing-4"]};
`,p=o.default.span`
    ${t.V3_Font["body-baseline-regular"]}
    ${r=>{if(r.$inactive)return e.css`
                color: ${t.V3_Colour.text};
            `}}
`,c=o.default.div`
    ${t.V3_Font["body-baseline-regular"]}
    background-color: ${t.V3_Colour.bg};
    color: ${t.V3_Colour["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${r=>r.$disabled?e.css`
                background-color: ${t.V3_Colour["bg-disabled"]};
                cursor: not-allowed;
            `:r.$hide?e.css`
                display: none;
            `:void 0}
`;exports.DayInput=s,exports.Divider=p,exports.InputContainer=a,exports.InputSection=n,exports.MonthInput=u,exports.Placeholder=c,exports.YearInput=d;
//# sourceMappingURL=standalone-date-input.style.js.map
