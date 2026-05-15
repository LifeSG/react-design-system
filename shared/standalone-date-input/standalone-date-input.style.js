import e,{css as t}from"styled-components";import{Spacing as i,Colour as n,Font as o}from"../../theme/index.js";import{BasicInput as r}from"../input-wrapper/input-wrapper.js";const a=e.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,l=e.div`
    display: flex;
    align-items: center;
    gap: ${i["spacing-4"]};

    ${e=>{if(e.$hover)return t`
                ${b}, ${f} {
                    color: ${n["text-subtler"]};
                }
            `}}
`,s=e.span`
    display: inline-block;
    position: relative;

    &::after {
        ${o["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`,p=e(s)`
    &::after {
        content: "DD";
    }
`,d=e(s)`
    &::after {
        content: "MM";
    }
`,c=e(s)`
    &::after {
        content: "YYYY";
    }
`,b=e(r)`
    background: transparent;
    text-align: center;
    position: absolute;
    inset: 0;
`,$=e(b)``,g=e(b)``,u=e(b)``,f=e.span`
    ${o["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return t`
                color: ${n.text};
            `}}
`,m=e.div`
    ${o["body-baseline-regular"]}
    background-color: ${n.bg};
    color: ${n["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?t`
                background-color: ${n["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?t`
                display: none;
            `:void 0}
`;export{$ as DayInput,p as DayInputSizer,f as Divider,l as InputContainer,a as InputSection,g as MonthInput,d as MonthInputSizer,m as Placeholder,u as YearInput,c as YearInputSizer};
//# sourceMappingURL=standalone-date-input.style.js.map
