import e,{css as r}from"styled-components";import{V3_Motion as t,V3_Font as o,V3_Radius as d,V3_Border as i,V3_Colour as l}from"../../v3_theme/index.js";const c=e.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,s=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${t["duration-150"]} ${t["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${o["body-md-regular"]}
    border-radius: ${d.md};
    border: ${i["width-010"]} ${i.solid} transparent;
    background-clip: border-box;
    color: ${l.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?r`
                cursor: pointer;
            `:t?r`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:d})=>"selected-year"===e?r`
                background: ${l["bg-selected"]};
                border-color: ${l["border-selected"]};
                color: ${l["text-selected"]};
                font-weight: ${o.Spec["weight-semibold"]};

                ${t&&r`
                    &:hover {
                        background: ${l["bg-selected-hover"]};
                        border-color: ${l["border-selected-hover"]};
                        color: ${l["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?r`
                color: ${l["text-primary"]};
                font-weight: ${o.Spec["weight-semibold"]};
            `:"other-decade"===e||d?r`
                color: ${l["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?r`
                &:hover {
                    background: ${l["bg-selected-hover"]};
                    border-color: ${l["border-selected-hover"]};
                    color: ${l["text-selected-hover"]};
                    font-weight: ${o.Spec["weight-semibold"]};
                }
            `:r`
            &:hover {
                background: ${l["bg-hover"]};
                color: ${l["text-hover"]};
                font-weight: ${o.Spec["weight-semibold"]};
            }
        `}}
`;export{c as Wrapper,s as YearCell};
//# sourceMappingURL=internal-calendar-year.style.js.map
