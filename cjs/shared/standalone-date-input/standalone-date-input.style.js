"use strict";var e=require("styled-components"),t=require("../../theme/index.js"),r=require("../input-wrapper/input-wrapper.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e);const i=n.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,a=n.default.div`
    display: flex;
    align-items: center;
    gap: ${t.Spacing["spacing-4"]};

    ${r=>{if(r.$hover)return e.css`
                ${d}, ${x} {
                    color: ${t.Colour["text-subtler"]};
                }
            `}}
`,l=n.default.span`
    display: inline-block;
    position: relative;

    &::after {
        ${t.Font["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`,s=n.default(l)`
    &::after {
        content: "DD";
    }
`,u=n.default(l)`
    &::after {
        content: "MM";
    }
`,p=n.default(l)`
    &::after {
        content: "YYYY";
    }
`,d=n.default(r.BasicInput)`
    background: transparent;
    text-align: center;
    position: absolute;
    inset: 0;
`,c=n.default(d)``,f=n.default(d)``,b=n.default(d)``,x=n.default.span`
    ${t.Font["body-baseline-regular"]}
    ${r=>{if(r.$inactive)return e.css`
                color: ${t.Colour.text};
            `}}
`,$=n.default.div`
    ${t.Font["body-baseline-regular"]}
    background-color: ${t.Colour.bg};
    color: ${t.Colour["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${r=>r.$disabled?e.css`
                background-color: ${t.Colour["bg-disabled"]};
                cursor: not-allowed;
            `:r.$hide?e.css`
                display: none;
            `:void 0}
`;exports.DayInput=c,exports.DayInputSizer=s,exports.Divider=x,exports.InputContainer=a,exports.InputSection=i,exports.MonthInput=f,exports.MonthInputSizer=u,exports.Placeholder=$,exports.YearInput=b,exports.YearInputSizer=p;
//# sourceMappingURL=standalone-date-input.style.js.map
