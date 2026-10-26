import e,{css as t}from"styled-components";import{Spacing as i,Colour as o,Font as r}from"../../theme/index.js";import{BasicInput as n}from"../input-wrapper/input-wrapper.js";const l=e.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,a=e.div`
    display: flex;
    align-items: center;
    gap: ${i["spacing-4"]};

    ${e=>{if(e.$hover)return t`
                ${b}, ${f} {
                    color: ${o["text-subtler"]};
                }
            `}}
`,s=e.span`
    display: inline-block;
    position: relative;

    &::after {
        ${r["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`,d=e(s)`
    &::after {
        content: "DD";
    }
`,p=e(s)`
    &::after {
        content: "MM";
    }
`,c=e(s)`
    &::after {
        content: "YYYY";
    }
`,b=e(n)`
    background: transparent;
    text-align: center;
    position: absolute;
    inset: 0;
`,$=e(b)``,g=e(b)``,u=e(b)``,f=e.span`
    ${r["body-baseline-regular"]}
    color: ${o.text};
    ${e=>e.$disabled?t`
                color: ${o["text-disabled"]};
            `:e.$inactive?t`
                color: ${o["text-subtler"]};
            `:void 0}
`,x=e.div`
    ${r["body-baseline-regular"]}
    background-color: ${o.bg};
    color: ${o["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?t`
                background-color: ${o["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?t`
                display: none;
            `:void 0}
`;export{$ as DayInput,d as DayInputSizer,f as Divider,a as InputContainer,l as InputSection,g as MonthInput,p as MonthInputSizer,x as Placeholder,u as YearInput,c as YearInputSizer};
//# sourceMappingURL=standalone-date-input.style.js.map
