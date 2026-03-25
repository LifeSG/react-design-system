"use strict";var e=require("styled-components"),t=require("../shared/fade-wrapper/fade-wrapper.js"),r=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e);const n=o.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${t=>{if(t.$fullWidthIndicatorLine)return e.css`
                &::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${r.V3_Border["width-040"]} ${r.V3_Border.solid}
                        ${r.V3_Colour.border};
                }
            `}}
`,a=o.default.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${r.V3_Border["width-040"]} ${r.V3_Border.solid}
        ${r.V3_Colour.border};

    ${t=>{if(t.$width)return e.css`
                width: ${t.$width};
            `}}

    ${t=>{if(t.$active)return e.css`
                border-color: ${r.V3_Colour["border-primary"]};
            `}}

    ${r.V3_MediaQuery.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,s=e.css`
    padding: ${r.V3_Spacing["spacing-16"]} ${r.V3_Spacing["spacing-16"]}
        ${r.V3_Spacing["spacing-20"]};
`,d=e.css`
    display: flex;
    flex-direction: row;
    align-items: center;
`,l=o.default.div`
    /* position: relative; */
    ${d}
    flex-direction: ${e=>e.$reversed?"row-reverse":"row"};
    gap: 0.5rem;
    ${s}
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &:has(button:focus-visible) {
        outline: 2px solid ${r.V3_Colour["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${r.V3_Radius.sm};
    }
`,c=o.default.div`
    position: relative;
`,u=e.css`
    ${d}
    border: none;
    background: none;
`,p=o.default.div`
    ${u}
    position: absolute;
    color: ${r.V3_Colour["text-subtler"]};
    opacity: 1;

    ${t=>{if(t.$active)return e.css`
                opacity: 0;
            `}}
`,f=o.default.button`
    ${u}
    color: ${r.V3_Colour["text-primary"]};
    opacity: 0;
    outline: none;

    ${t=>{if(t.$active)return e.css`
                opacity: 1;
            `}}
`,$=o.default(t.FadeWrapper)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${r.V3_Spacing["spacing-4"]};
    }
`;exports.BoldLabel=f,exports.Chain=n,exports.ChainItem=a,exports.ChainLink=l,exports.CustomFadeWrapper=$,exports.Label=p,exports.LabelContainer=c;
//# sourceMappingURL=tab-link-chain.style.js.map
