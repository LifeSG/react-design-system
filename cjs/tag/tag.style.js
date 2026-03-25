"use strict";var r=require("styled-components"),o=require("../v3_theme/index.js");function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t=e(r);const l=t.default.div`
    border-radius: ${o.V3_Radius.sm};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${o.V3_Font["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:r})=>r?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,l,s,i;if("solid"===e.$type)switch(s=o.V3_Colour["text-inverse"],e.$color){case"grey":t=o.V3_Colour["bg-inverse-subtler"],i=o.V3_Colour["bg-inverse-hover"];break;case"green":t=o.V3_Colour["bg-success-strong"],i=o.V3_Colour["bg-success-strong-hover"];break;case"yellow":t=o.V3_Colour["bg-warning-strong"],i=o.V3_Colour["bg-warning-strong-hover"];break;case"red":t=o.V3_Colour["bg-error-strong"],i=o.V3_Colour["bg-error-strong-hover"];break;case"blue":t=o.V3_Colour["bg-info-strong"],i=o.V3_Colour["bg-info-strong-hover"];break;case"primary":t=o.V3_Colour["bg-primary"],i=o.V3_Colour["bg-primary-hover"];break;default:t=o.V3_Colour["bg-inverse"],i=o.V3_Colour["bg-inverse-hover"]}else switch(e.$color){case"grey":t=o.V3_Colour["bg-strong"],l=o.V3_Colour["border-strong"],s=o.V3_Colour["text-subtle"],i=o.V3_Colour["bg-hover-neutral-strong"];break;case"green":t=o.V3_Colour["bg-success"],l=o.V3_Colour["border-success"],s=o.V3_Colour["text-success"],i=o.V3_Colour["bg-success-hover"];break;case"yellow":t=o.V3_Colour["bg-warning"],l=o.V3_Colour["border-warning"],s=o.V3_Colour["text-warning"],i=o.V3_Colour["bg-warning-hover"];break;case"red":t=o.V3_Colour["bg-error"],l=o.V3_Colour["border-error"],s=o.V3_Colour["text-error"],i=o.V3_Colour["bg-error-hover"];break;case"blue":t=o.V3_Colour["bg-info"],l=o.V3_Colour["border-info"],s=o.V3_Colour["text-info"],i=o.V3_Colour["bg-info-hover"];break;case"primary":t=o.V3_Colour["bg-primary-subtlest"],l=o.V3_Colour["border-primary"],s=o.V3_Colour["text-primary"],i=o.V3_Colour["bg-primary-hover"];break;default:t=o.V3_Colour.bg,l=o.V3_Colour.border,s=o.V3_Colour.text,i=o.V3_Colour["bg-hover-neutral"]}return r.css`
            background: ${t};
            border: ${o.V3_Border["width-010"]} ${o.V3_Border.solid} ${l};
            color: ${s};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&undefined}
                }
            }
        `}}

    ${o.V3_MediaQuery.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return r.css`
                    ${o.V3_Font["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,s=t.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;exports.Label=s,exports.Wrapper=l;
//# sourceMappingURL=tag.style.js.map
