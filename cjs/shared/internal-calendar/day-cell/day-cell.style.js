"use strict";var e=require("styled-components"),o=require("../../../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);const l=e=>{let t=o.Colour.bg,r="transparent";switch(e.$type){case"hover-subtle":t=o.Colour["bg-hover"],r=o.Colour["bg-hover"];break;case"hover":t=o.Colour["bg-hover-strong"],r=o.Colour["bg-hover-strong"];break;case"hover-outline":t=o.Colour["bg-hover-subtle"],r=o.Colour["border-hover"];break;case"selected-outline":t=o.Colour["bg-selected"],r=o.Colour["border-selected"];break;case"selected-outline-subtle":t=o.Colour["bg-selected"],r=o.Colour["border-selected-subtle"];break;case"selected-hover":t=o.Colour["bg-selected-hover"];break;case"selected-hover-outline":t=o.Colour["bg-selected-hover"],r=o.Colour["border-selected-hover"]}return{color:t,borderColor:r}},i=r.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,s=r.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};
    border: ${o.Border["width-010"]} ${o.Border.solid} transparent;
    border-left: none;
    border-right: none;

    ${o=>{if(!o.$type)return;const{color:t,borderColor:r}=l(o);return e.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,n=r.default(s)`
    left: 0;
`,d=r.default(s)`
    right: 0;
`,c=r.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};

    border: ${o.Border["width-010"]} ${o.Border.solid} transparent;
    border-radius: ${o.Radius.md};

    ${o=>{if(o.$type){const{color:t,borderColor:r}=l(o);return e.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,a=r.default(c)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,u=r.default(c)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,b=r.default.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,h=r.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${o.Font["body-md-regular"]}
    transition: ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${t=>{const{$disabled:r,$type:l}=t;if(r)return"hidden"===l?e.css`
                    visibility: hidden;
                `:e.css`
                color: ${o.Colour["text-disabled-subtlest"]};
            `;switch(l){case"selected":return e.css`
                    font-weight: ${o.Font.Spec["weight-semibold"]};
                    color: ${o.Colour["text-selected"]};
                `;case"selected-hover":return e.css`
                    font-weight: ${o.Font.Spec["weight-semibold"]};
                    color: ${o.Colour["text-selected-hover"]};
                `;case"current":return e.css`
                    font-weight: ${o.Font.Spec["weight-semibold"]};
                    color: ${o.Colour["text-primary"]};
                `;case"hover":return e.css`
                    font-weight: ${o.Font.Spec["weight-semibold"]};
                    color: ${o.Colour["text-hover"]};
                `;case"unavailable":return e.css`
                    color: ${o.Colour["text-disabled-subtlest"]};
                `;case"hidden":return e.css`
                    visibility: hidden;
                `;default:return e.css`
                    color: ${o.Colour.text};
                `}}}

    &:focus {
        outline: none;
    }
`,p=r.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`;exports.Cell=i,exports.Circle=c,exports.Indicator=p,exports.Label=h,exports.LabelWrapper=b,exports.LeftCircle=a,exports.LeftHalf=n,exports.RightCircle=u,exports.RightHalf=d;
//# sourceMappingURL=day-cell.style.js.map
