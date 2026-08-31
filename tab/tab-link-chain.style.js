import e,{css as t}from"styled-components";import{FadeWrapper as i}from"../shared/fade-wrapper/fade-wrapper.js";import{Border as r,Colour as o,MediaQuery as n,Spacing as d,Radius as a,Font as s}from"../theme/index.js";const l=e.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return t`
                &::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${r["width-040"]} ${r.solid}
                        ${o.border};
                }
            `}}
`,$=e.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${r["width-040"]} ${r.solid} ${o.border};

    ${e=>{if(e.$width)return t`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return t`
                border-color: ${o["border-primary"]};
            `}}

    ${n.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,c=t`
    padding: ${d["spacing-16"]} ${d["spacing-16"]}
        ${d["spacing-20"]};
`,f=t`
    display: flex;
    flex-direction: row;
    align-items: center;
`,p=e.div`
    /* position: relative; */
    ${f}
    flex-direction: ${e=>e.$reversed?"row-reverse":"row"};
    gap: 0.5rem;
    ${c}
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &:has(button:focus-visible) {
        outline: 2px solid ${o["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${a.sm};
    }
`,b=e.div`
    position: relative;
`,u=t`
    ${f}
    border: none;
    background: none;
`,m=e.div`
    ${u}
    position: absolute;
    ${s["body-baseline-regular"]}
    color: ${o["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return t`
                opacity: 0;
            `}}
`,h=e.button`
    ${u}
    ${s["body-baseline-semibold"]}
    color: ${o["text-primary"]};
    opacity: 0;
    outline: none;

    ${e=>{if(e.$active)return t`
                opacity: 1;
            `}}
`,y=e(i)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${d["spacing-4"]};
    }
`;export{h as BoldLabel,l as Chain,$ as ChainItem,p as ChainLink,y as CustomFadeWrapper,m as Label,b as LabelContainer};
//# sourceMappingURL=tab-link-chain.style.js.map
