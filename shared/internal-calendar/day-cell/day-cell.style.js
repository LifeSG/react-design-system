import e,{css as t}from"styled-components";import{V3_Motion as r,V3_Border as o,V3_Radius as i,V3_Font as n,V3_Colour as l}from"../../../v3_theme/index.js";const s=e=>{let t=l.bg,r="transparent";switch(e.$type){case"hover-subtle":t=l["bg-hover"],r=l["bg-hover"];break;case"hover":t=l["bg-hover-strong"],r=l["bg-hover-strong"];break;case"hover-outline":t=l["bg-hover-subtle"],r=l["border-hover"];break;case"selected-outline":t=l["bg-selected"],r=l["border-selected"];break;case"selected-outline-subtle":t=l["bg-selected"],r=l["border-selected-subtle"];break;case"selected-hover":t=l["bg-selected-hover"];break;case"selected-hover-outline":t=l["bg-selected-hover"],r=l["border-selected-hover"]}return{color:t,borderColor:r}},d=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,c=e.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${r["duration-150"]} ${r["ease-default"]};
    border: ${o["width-010"]} ${o.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:o}=s(e);return t`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${o};
            border-bottom-color: ${o};
        `}}
`,a=e(c)`
    left: 0;
`,b=e(c)`
    right: 0;
`,h=e.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${r["duration-150"]} ${r["ease-default"]};

    border: ${o["width-010"]} ${o.solid} transparent;
    border-radius: ${i.md};

    ${e=>{if(e.$type){const{color:r,borderColor:o}=s(e);return t`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${o};
            `}}}
`,u=e(h)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,p=e(h)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,$=e.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,g=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${n["body-md-regular"]}
    transition: ${r["duration-150"]} ${r["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:o}=e;if(r)return"hidden"===o?t`
                    visibility: hidden;
                `:t`
                color: ${l["text-disabled-subtlest"]};
            `;switch(o){case"selected":return t`
                    font-weight: ${n.Spec["weight-semibold"]};
                    color: ${l["text-selected"]};
                `;case"selected-hover":return t`
                    font-weight: ${n.Spec["weight-semibold"]};
                    color: ${l["text-selected-hover"]};
                `;case"current":return t`
                    font-weight: ${n.Spec["weight-semibold"]};
                    color: ${l["text-primary"]};
                `;case"hover":return t`
                    font-weight: ${n.Spec["weight-semibold"]};
                    color: ${l["text-hover"]};
                `;case"unavailable":return t`
                    color: ${l["text-disabled-subtlest"]};
                `;case"hidden":return t`
                    visibility: hidden;
                `;default:return t`
                    color: ${l.text};
                `}}}

    &:focus {
        outline: none;
    }
`,v=e.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`;export{d as Cell,h as Circle,v as Indicator,g as Label,$ as LabelWrapper,u as LeftCircle,a as LeftHalf,p as RightCircle,b as RightHalf};
//# sourceMappingURL=day-cell.style.js.map
