import e,{css as r}from"styled-components";import{Font as t,Colour as o,Radius as i,Border as n}from"../theme/index.js";const s=e.span`
    ${e=>e.$isOverlay&&r`
            position: relative;
            width: fit-content;
            height: fit-content;
        `}
`,a=e.span`
    ${e=>e.$isOverlay&&r`
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -25%)
                ${e.$offset?`translate(${e.$offset[0]},${e.$offset[1]})`:""};
        `}
`,d=r`
    min-width: 1.25rem;
    padding: 0.25rem 0.375rem;
    font-size: ${t.Spec["body-size-xs"]};
    font-weight: ${t.Spec["weight-bold"]};
    line-height: 1;
`,$=r`
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
`,c=e.span`
    background-color: ${({$color:e})=>"important"===e?o["icon-error"]:o["bg-primary"]};
    color: ${o["text-inverse"]};
    font-weight: ${t.Spec["weight-bold"]};
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    ${({$variant:e,$color:t})=>{switch(e){case"number":return r`
                    ${d}
                    border-radius: ${i.full};
                `;case"number-with-border":return r`
                    ${d}
                    border-radius: ${i.full};
                    box-shadow: 0 0 0 ${n["width-020"]} ${o.bg};
                `;case"dot":return r`
                    ${$}
                `;case"dot-with-border":return r`
                    ${$}
                    box-shadow: 0 0 0  ${n["width-020"]} ${o.bg};
                `;case"square-number":return r`
                    ${d}
                    border-radius: ${i.sm};
                    padding: 0.25rem 0.4375rem;
                    ${"default"===t&&r`
                        background-color: ${o["bg-primary-subtler"]};
                        color: ${o["text-primary"]};
                    `}
                `;default:return""}}};
`;export{s as BadgeOverlay,a as BadgeWrapper,c as StyledBadge};
//# sourceMappingURL=badge.style.js.map
