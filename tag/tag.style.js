import e,{css as r}from"styled-components";import{Radius as o,Font as t,MediaQuery as s,Colour as i,Border as a}from"../theme/index.js";const b=e.div`
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

    ${e=>{let o,t,s,b;if("solid"===e.$type)switch(s=i["text-inverse"],e.$color){case"grey":o=i["bg-inverse-subtler"],b=i["bg-inverse-hover"];break;case"green":o=i["bg-success-strong"],b=i["bg-success-strong-hover"];break;case"yellow":o=i["bg-warning-strong"],b=i["bg-warning-strong-hover"];break;case"red":o=i["bg-error-strong"],b=i["bg-error-strong-hover"];break;case"blue":o=i["bg-info-strong"],b=i["bg-info-strong-hover"];break;case"primary":o=i["bg-primary"],b=i["bg-primary-hover"];break;default:o=i["bg-inverse"],b=i["bg-inverse-hover"]}else switch(e.$color){case"grey":o=i["bg-strong"],t=i["border-strong"],s=i["text-subtle"],b=i["bg-hover-neutral-strong"];break;case"green":o=i["bg-success"],t=i["border-success"],s=i["text-success"],b=i["bg-success-hover"];break;case"yellow":o=i["bg-warning"],t=i["border-warning"],s=i["text-warning"],b=i["bg-warning-hover"];break;case"red":o=i["bg-error"],t=i["border-error"],s=i["text-error"],b=i["bg-error-hover"];break;case"blue":o=i["bg-info"],t=i["border-info"],s=i["text-info"],b=i["bg-info-hover"];break;case"primary":o=i["bg-primary-subtlest"],t=i["border-primary"],s=i["text-primary"],b=i["bg-hover"];break;default:o=i.bg,t=i.border,s=i.text,b=i["bg-hover-neutral"]}return r`
            background: ${o};
            border: ${a["width-010"]} ${a.solid} ${t};
            color: ${s};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&b&&`background: ${b(e)};`}
                    ${e.$interactive&&void 0}
                }
            }
        `}}

    ${s.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return r`
                    ${t["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,n=e.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;export{n as Label,b as Wrapper};
//# sourceMappingURL=tag.style.js.map
