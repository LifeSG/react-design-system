"use strict";var e=require("@lifesg/react-icons"),t=require("styled-components"),n=require("../../theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(t);const o=a.default.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return t.css`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${n.Font.Spec["body-size-baseline"]} -
                            ${n.Spacing["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${n.Spacing["spacing-8"]};
                }
            `}}
`,r=a.default.div`
    width: 100%; // Force next flex item to break to next line
`,s=a.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,c=a.default(e.ArrowRightIcon)`
    color: ${n.Colour.icon};
    width: ${n.Font.Spec["body-size-baseline"]};
    height: ${n.Font.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${n.Spacing["spacing-8"]};
    align-self: center;
`,d=a.default.div`
    position: absolute;
    background: ${e=>e.$error?n.Colour["border-error-focus-strong"]:n.Colour["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${n.Spacing["spacing-8"]} - (${n.Font.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${n.Motion["duration-350"]} ${n.Motion["ease-standard"]},
        opacity ${n.Motion["duration-350"]} ${n.Motion["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return t.css`
                    opacity: 1;
                `;case"end":return t.css`
                    left: calc(50% + ${n.Spacing["spacing-16"]});
                    opacity: 1;
                `;case"none":return t.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return t.css`
                display: none;
            `}}
`;exports.ArrowRight=c,exports.Break=r,exports.ElementContainer=s,exports.Indicator=d,exports.Wrapper=o;
//# sourceMappingURL=range-input-inner-container.styles.js.map
