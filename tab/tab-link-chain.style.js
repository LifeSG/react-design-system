import t,{css as e}from"styled-components";import{FadeWrapper as i}from"../shared/fade-wrapper/fade-wrapper.js";import{V3_Border as r,V3_Colour as o,V3_MediaQuery as n,V3_Spacing as d,V3_Radius as a}from"../v3_theme/index.js";const s=t.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${t=>{if(t.$fullWidthIndicatorLine)return e`
                &::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${r["width-040"]} ${r.solid}
                        ${o.border};
                }
            `}}
`,l=t.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${r["width-040"]} ${r.solid}
        ${o.border};

    ${t=>{if(t.$width)return e`
                width: ${t.$width};
            `}}

    ${t=>{if(t.$active)return e`
                border-color: ${o["border-primary"]};
            `}}

    ${n.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,$=e`
    padding: ${d["spacing-16"]} ${d["spacing-16"]}
        ${d["spacing-20"]};
`,c=e`
    display: flex;
    flex-direction: row;
    align-items: center;
`,f=t.div`
    /* position: relative; */
    ${c}
    flex-direction: ${t=>t.$reversed?"row-reverse":"row"};
    gap: 0.5rem;
    ${$}
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &:has(button:focus-visible) {
        outline: 2px solid ${o["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${a.sm};
    }
`,p=t.div`
    position: relative;
`,u=e`
    ${c}
    border: none;
    background: none;
`,b=t.div`
    ${u}
    position: absolute;
    color: ${o["text-subtler"]};
    opacity: 1;

    ${t=>{if(t.$active)return e`
                opacity: 0;
            `}}
`,h=t.button`
    ${u}
    color: ${o["text-primary"]};
    opacity: 0;
    outline: none;

    ${t=>{if(t.$active)return e`
                opacity: 1;
            `}}
`,m=t(i)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${d["spacing-4"]};
    }
`;export{h as BoldLabel,s as Chain,l as ChainItem,f as ChainLink,m as CustomFadeWrapper,b as Label,p as LabelContainer};
//# sourceMappingURL=tab-link-chain.style.js.map
