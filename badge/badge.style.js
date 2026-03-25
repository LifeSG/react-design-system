import e,{css as r}from"styled-components";import{V3_Font as t,V3_Colour as o,V3_Radius as i,V3_Border as n}from"../v3_theme/index.js";const d=e.div`
    ${e=>e.$isOverlay&&r`
            position: relative;
            width: fit-content;
            height: fit-content;
        `}
`,s=e.div`
    ${e=>e.$isOverlay&&r`
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -25%)
                ${e.$offset?`translate(${e.$offset[0]},${e.$offset[1]})`:""};
        `}
`,a=r`
    min-width: 1.25rem;
    padding: 0.25rem 0.375rem;
    font-size: ${t.Spec["body-size-xs"]};
    font-weight: ${t.Spec["weight-bold"]};
    line-height: 1;
`,$=r`
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
`,c=e.div`
    background-color: ${({$color:e})=>"important"===e?o["icon-error"]:o["bg-primary"]};
    color: ${o["text-inverse"]};
    font-weight: ${t.Spec["weight-bold"]};
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    ${({$variant:e,$color:t})=>{switch(e){case"number":return r`
                    ${a}
                    border-radius: ${i.full};
                `;case"number-with-border":return r`
                    ${a}
                    border-radius: ${i.full};
                    box-shadow: 0 0 0 ${n["width-020"]}
                        ${o.bg};
                `;case"dot":return r`
                    ${$}
                `;case"dot-with-border":return r`
                    ${$}
                    box-shadow: 0 0 0  ${n["width-020"]} ${o.bg};
                `;case"square-number":return r`
                    ${a}
                    border-radius: ${i.sm};
                    padding: 0.25rem 0.4375rem;
                    ${"default"===t&&r`
                        background-color: ${o["bg-primary-subtler"]};
                        color: ${o["text-primary"]};
                    `}
                `;default:return""}}};
`;export{d as BadgeOverlay,s as BadgeWrapper,c as StyledBadge};
//# sourceMappingURL=badge.style.js.map
