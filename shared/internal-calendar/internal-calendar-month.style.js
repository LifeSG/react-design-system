import e,{css as r}from"styled-components";import{V3_Radius as t,V3_Motion as o,V3_Font as d,V3_Border as i,V3_Colour as l}from"../../v3_theme/index.js";const c=e.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,s=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${t.md};
    margin: 0 0.5rem;
    transition: ${o["duration-150"]} ${o["ease-default"]};

    // default styles
    ${d["body-md-regular"]}
    border-radius: ${t.md};
    border: ${i["width-010"]} ${i.solid} transparent;
    background-clip: border-box;
    color: ${l.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?r`
                cursor: pointer;
            `:e.$disabledDisplay?r`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:o})=>"selected-month"===e?r`
                background: ${l["bg-selected"]};
                border-color: ${l["border-selected"]};
                color: ${l["text-selected"]};
                font-weight: ${d.Spec["weight-semibold"]};

                ${t&&r`
                    &:hover {
                        background: ${l["bg-selected-hover"]};
                        border-color: ${l["border-selected-hover"]};
                        color: ${l["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?r`
                color: ${l["text-primary"]};
                font-weight: ${d.Spec["weight-semibold"]};
            `:o?r`
                color: ${l["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?r`
                &:hover {
                    background: ${l["bg-selected-hover"]};
                    border-color: ${l["border-selected-hover"]};
                    color: ${l["text-selected-hover"]};
                    font-weight: ${d.Spec["weight-semibold"]};
                }
            `:r`
            &:hover {
                background: ${l["bg-hover"]};
                color: ${l["text-hover"]};
                font-weight: ${d.Spec["weight-semibold"]};
            }
        `}}
`;export{s as MonthCell,c as Wrapper};
//# sourceMappingURL=internal-calendar-month.style.js.map
