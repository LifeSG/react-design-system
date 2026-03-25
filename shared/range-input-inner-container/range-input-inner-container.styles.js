import{ArrowRightIcon as e}from"@lifesg/react-icons";import i,{css as n}from"styled-components";import{V3_Font as a,V3_Spacing as t,V3_Colour as r,V3_Motion as o}from"../../v3_theme/index.js";const s=i.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return n`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${a.Spec["body-size-baseline"]} -
                            ${t["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${t["spacing-8"]};
                }
            `}}
`,c=i.div`
    width: 100%; // Force next flex item to break to next line
`,d=i.div`
    display: flex;
    flex: 1;
    align-items: center;
`,l=i(e)`
    color: ${r.icon};
    width: ${a.Spec["body-size-baseline"]};
    height: ${a.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${t["spacing-8"]};
    align-self: center;
`,p=i.div`
    position: absolute;
    background: ${e=>e.$error?r["border-error-focus-strong"]:r["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${t["spacing-8"]} -
            (${a.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${o["duration-350"]} ${o["ease-standard"]},
        opacity ${o["duration-350"]} ${o["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return n`
                    opacity: 1;
                `;case"end":return n`
                    left: calc(50% + ${t["spacing-16"]});
                    opacity: 1;
                `;case"none":return n`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return n`
                display: none;
            `}}
`;export{l as ArrowRight,c as Break,d as ElementContainer,p as Indicator,s as Wrapper};
//# sourceMappingURL=range-input-inner-container.styles.js.map
