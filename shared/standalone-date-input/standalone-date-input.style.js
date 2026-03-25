import e,{css as i}from"styled-components";import{V3_Colour as r,V3_Spacing as t,V3_Font as o}from"../../v3_theme/index.js";import{BasicInput as n}from"../input-wrapper/input-wrapper.js";const l=e.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,a=e.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i`
                ${s}, ${$} {
                    color: ${r["text-subtler"]};
                }
            `}}
`,s=e(n)`
    background: transparent;
    text-align: center;
`,d=e(s)`
    width: 2rem;
    margin-right: ${t["spacing-4"]};
`,p=e(s)`
    width: 2.5rem;
`,c=e(s)`
    width: 3rem;
    margin-left: ${t["spacing-4"]};
`,$=e.span`
    ${o["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return i`
                color: ${r.text};
            `}}
`,g=e.div`
    ${o["body-baseline-regular"]}
    background-color: ${r.bg};
    color: ${r["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i`
                background-color: ${r["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?i`
                display: none;
            `:void 0}
`;export{d as DayInput,$ as Divider,a as InputContainer,l as InputSection,p as MonthInput,g as Placeholder,c as YearInput};
//# sourceMappingURL=standalone-date-input.style.js.map
