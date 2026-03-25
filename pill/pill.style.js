import e,{css as r}from"styled-components";import{V3_Radius as t,V3_Font as s,V3_Colour as o,V3_Border as b}from"../v3_theme/index.js";const a=e.div`
    border-radius: ${t.full};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${s["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,s,a;if("solid"===e.$type)switch(a=o["text-inverse"],e.$color){case"grey":t=o["bg-inverse-subtler"];break;case"green":t=o["bg-success-strong"];break;case"yellow":t=o["bg-warning-strong"];break;case"red":t=o["bg-error-strong"];break;case"blue":t=o["bg-info-strong"];break;case"primary":t=o["bg-primary"];break;default:t=o["bg-inverse"]}else switch(e.$color){case"grey":t=o["bg-stronger"],s=o["border-strong"],a=o["text-subtler"];break;case"green":t=o["bg-success"],s=o["border-success"],a=o["text-success"];break;case"yellow":t=o["bg-warning"],s=o["border-warning"],a=o["text-warning"];break;case"red":t=o["bg-error"],s=o["border-error"],a=o["text-error"];break;case"blue":t=o["bg-info"],s=o["border-info"],a=o["text-info"];break;case"primary":t=o["bg-primary-subtlest"],s=o["border-primary"],a=o["text-primary"];break;default:t=o.bg,s=o.border,a=o.text}return r`
            background: ${t};
            border: ${b["width-010"]} ${b.solid} ${s};
            color: ${a};
        `}}
`,i=e.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;export{i as Label,a as Wrapper};
//# sourceMappingURL=pill.style.js.map
