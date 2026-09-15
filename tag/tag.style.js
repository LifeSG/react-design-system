import e,{css as r}from"styled-components";import{Radius as o,Font as t,MediaQuery as s,Colour as i,Border as n}from"../theme/index.js";const a=e.div`
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

    ${e=>{let o,t,s,a;if("solid"===e.$type)switch(s=i["text-inverse"],e.$color){case"grey":o=i["bg-inverse-subtler"],a=i["bg-inverse-hover"];break;case"green":o=i["bg-success-strong"],a=i["bg-success-strong-hover"];break;case"yellow":o=i["bg-warning-strong"],a=i["bg-warning-strong-hover"];break;case"red":o=i["bg-error-strong"],a=i["bg-error-strong-hover"];break;case"blue":o=i["bg-info-strong"],a=i["bg-info-strong-hover"];break;case"primary":o=i["bg-primary"],a=i["bg-primary-hover"];break;default:o=i["bg-inverse"],a=i["bg-inverse-hover"]}else switch(e.$color){case"grey":o=i["bg-strong"],t=i["border-strong"],s=i["text-subtle"],a=i["bg-hover-neutral-strong"];break;case"green":o=i["bg-success"],t=i["border-success"],s=i["text-success"],a=i["bg-success-hover"];break;case"yellow":o=i["bg-warning"],t=i["border-warning"],s=i["text-warning"],a=i["bg-warning-hover"];break;case"red":o=i["bg-error"],t=i["border-error"],s=i["text-error"],a=i["bg-error-hover"];break;case"blue":o=i["bg-info"],t=i["border-info"],s=i["text-info"],a=i["bg-info-hover"];break;case"primary":o=i["bg-primary-subtlest"],t=i["border-primary"],s=i["text-primary"],a=i["bg-hover"];break;default:o=i.bg,t=i.border,s=i.text,a=i["bg-hover-neutral"]}return r`
            background: ${o};
            border: ${n["width-010"]} ${n.solid} ${t};
            color: ${s};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&a&&`background: ${a(e)};`}
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
`;export{b as Label,a as Wrapper};
//# sourceMappingURL=tag.style.js.map
