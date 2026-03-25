import e,{css as r}from"styled-components";import{V3_Radius as o,V3_Font as t,V3_MediaQuery as s,V3_Colour as i,V3_Border as a}from"../v3_theme/index.js";const n=e.div`
    border-radius: ${o.sm};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${t["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let o,t,s,n;if("solid"===e.$type)switch(s=i["text-inverse"],e.$color){case"grey":o=i["bg-inverse-subtler"],n=i["bg-inverse-hover"];break;case"green":o=i["bg-success-strong"],n=i["bg-success-strong-hover"];break;case"yellow":o=i["bg-warning-strong"],n=i["bg-warning-strong-hover"];break;case"red":o=i["bg-error-strong"],n=i["bg-error-strong-hover"];break;case"blue":o=i["bg-info-strong"],n=i["bg-info-strong-hover"];break;case"primary":o=i["bg-primary"],n=i["bg-primary-hover"];break;default:o=i["bg-inverse"],n=i["bg-inverse-hover"]}else switch(e.$color){case"grey":o=i["bg-strong"],t=i["border-strong"],s=i["text-subtle"],n=i["bg-hover-neutral-strong"];break;case"green":o=i["bg-success"],t=i["border-success"],s=i["text-success"],n=i["bg-success-hover"];break;case"yellow":o=i["bg-warning"],t=i["border-warning"],s=i["text-warning"],n=i["bg-warning-hover"];break;case"red":o=i["bg-error"],t=i["border-error"],s=i["text-error"],n=i["bg-error-hover"];break;case"blue":o=i["bg-info"],t=i["border-info"],s=i["text-info"],n=i["bg-info-hover"];break;case"primary":o=i["bg-primary-subtlest"],t=i["border-primary"],s=i["text-primary"],n=i["bg-primary-hover"];break;default:o=i.bg,t=i.border,s=i.text,n=i["bg-hover-neutral"]}return r`
            background: ${o};
            border: ${a["width-010"]} ${a.solid} ${t};
            color: ${s};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&n&&`background: ${n(e)};`}
                    ${e.$interactive&&undefined}
                }
            }
        `}}

    ${s.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return r`
                    ${t["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,b=e.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;export{b as Label,n as Wrapper};
//# sourceMappingURL=tag.style.js.map
