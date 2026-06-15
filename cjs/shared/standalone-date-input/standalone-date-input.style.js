"use strict";var e=require("styled-components"),t=require("../../theme/index.js"),o=require("../input-wrapper/input-wrapper.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e);const i=n.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,l=n.default.div`
    display: flex;
    align-items: center;
    gap: ${t.Spacing["spacing-4"]};

    ${o=>{if(o.$hover)return e.css`
                ${p}, ${x} {
                    color: ${t.Colour["text-subtler"]};
                }
            `}}
`,a=n.default.span`
    display: inline-block;
    position: relative;

    &::after {
        ${t.Font["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`,s=n.default(a)`
    &::after {
        content: "DD";
    }
`,u=n.default(a)`
    &::after {
        content: "MM";
    }
`,d=n.default(a)`
    &::after {
        content: "YYYY";
    }
`,p=n.default(o.BasicInput)`
    background: transparent;
    text-align: center;
    position: absolute;
    inset: 0;
`,c=n.default(p)``,f=n.default(p)``,b=n.default(p)``,x=n.default.span`
    ${t.Font["body-baseline-regular"]}
    color: ${t.Colour.text};
    ${o=>o.$disabled?e.css`
                color: ${t.Colour["text-disabled"]};
            `:o.$inactive?e.css`
                color: ${t.Colour["text-subtler"]};
            `:void 0}
`,$=n.default.div`
    ${t.Font["body-baseline-regular"]}
    background-color: ${t.Colour.bg};
    color: ${t.Colour["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${o=>o.$disabled?e.css`
                background-color: ${t.Colour["bg-disabled"]};
                cursor: not-allowed;
            `:o.$hide?e.css`
                display: none;
            `:void 0}
`;exports.DayInput=c,exports.DayInputSizer=s,exports.Divider=x,exports.InputContainer=l,exports.InputSection=i,exports.MonthInput=f,exports.MonthInputSizer=u,exports.Placeholder=$,exports.YearInput=b,exports.YearInputSizer=d;
//# sourceMappingURL=standalone-date-input.style.js.map
