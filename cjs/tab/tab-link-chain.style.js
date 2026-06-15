"use strict";var e=require("styled-components"),t=require("../shared/fade-wrapper/fade-wrapper.js"),r=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const n=i.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${t=>{if(t.$fullWidthIndicatorLine)return e.css`
                &::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${r.Border["width-040"]} ${r.Border.solid}
                        ${r.Colour.border};
                }
            `}}
`,a=i.default.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${r.Border["width-040"]} ${r.Border.solid} ${r.Colour.border};

    ${t=>{if(t.$width)return e.css`
                width: ${t.$width};
            `}}

    ${t=>{if(t.$active)return e.css`
                border-color: ${r.Colour["border-primary"]};
            `}}

    ${r.MediaQuery.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,s=e.css`
    padding: ${r.Spacing["spacing-16"]} ${r.Spacing["spacing-16"]}
        ${r.Spacing["spacing-20"]};
`,d=e.css`
    display: flex;
    flex-direction: row;
    align-items: center;
`,l=i.default.div`
    /* position: relative; */
    ${d}
    flex-direction: ${e=>e.$reversed?"row-reverse":"row"};
    gap: 0.5rem;
    ${s}
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &:has(button:focus-visible) {
        outline: 2px solid ${r.Colour["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${r.Radius.sm};
    }
`,u=i.default.div`
    position: relative;
`,c=e.css`
    ${d}
    border: none;
    background: none;
`,p=i.default.div`
    ${c}
    position: absolute;
    ${r.Font["body-baseline-regular"]}
    color: ${r.Colour["text-subtler"]};
    opacity: 1;

    ${t=>{if(t.$active)return e.css`
                opacity: 0;
            `}}
`,f=i.default.button`
    ${c}
    ${r.Font["body-baseline-semibold"]}
    color: ${r.Colour["text-primary"]};
    opacity: 0;
    outline: none;

    ${t=>{if(t.$active)return e.css`
                opacity: 1;
            `}}
`,$=i.default(t.FadeWrapper)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${r.Spacing["spacing-4"]};
    }
`;exports.BoldLabel=f,exports.Chain=n,exports.ChainItem=a,exports.ChainLink=l,exports.CustomFadeWrapper=$,exports.Label=p,exports.LabelContainer=u;
//# sourceMappingURL=tab-link-chain.style.js.map
