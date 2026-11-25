"use strict";var r=require("styled-components"),o=require("../theme/index.js");function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t=e(r);const l=t.default.div`
    border-radius: ${o.Radius.sm};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${o.Font["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:r})=>r?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,l,s,i;if("solid"===e.$type)switch(s=o.Colour["text-inverse"],e.$color){case"grey":t=o.Colour["bg-inverse-subtler"],i=o.Colour["bg-inverse-hover"];break;case"green":t=o.Colour["bg-success-strong"],i=o.Colour["bg-success-strong-hover"];break;case"yellow":t=o.Colour["bg-warning-strong"],i=o.Colour["bg-warning-strong-hover"];break;case"red":t=o.Colour["bg-error-strong"],i=o.Colour["bg-error-strong-hover"];break;case"blue":t=o.Colour["bg-info-strong"],i=o.Colour["bg-info-strong-hover"];break;case"primary":t=o.Colour["bg-primary"],i=o.Colour["bg-primary-hover"];break;default:t=o.Colour["bg-inverse"],i=o.Colour["bg-inverse-hover"]}else switch(e.$color){case"grey":t=o.Colour["bg-strong"],l=o.Colour["border-strong"],s=o.Colour["text-subtle"],i=o.Colour["bg-hover-neutral-strong"];break;case"green":t=o.Colour["bg-success"],l=o.Colour["border-success"],s=o.Colour["text-success"],i=o.Colour["bg-success-hover"];break;case"yellow":t=o.Colour["bg-warning"],l=o.Colour["border-warning"],s=o.Colour["text-warning"],i=o.Colour["bg-warning-hover"];break;case"red":t=o.Colour["bg-error"],l=o.Colour["border-error"],s=o.Colour["text-error"],i=o.Colour["bg-error-hover"];break;case"blue":t=o.Colour["bg-info"],l=o.Colour["border-info"],s=o.Colour["text-info"],i=o.Colour["bg-info-hover"];break;case"primary":t=o.Colour["bg-primary-subtlest"],l=o.Colour["border-primary"],s=o.Colour["text-primary"],i=o.Colour["bg-hover"];break;default:t=o.Colour.bg,l=o.Colour.border,s=o.Colour.text,i=o.Colour["bg-hover-neutral"]}return r.css`
            background: ${t};
            border: ${o.Border["width-010"]} ${o.Border.solid} ${l};
            color: ${s};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&void 0}
                }
            }
        `}}

    ${o.MediaQuery.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return r.css`
                    ${o.Font["body-md-semibold"]}
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
