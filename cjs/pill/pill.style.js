"use strict";var r=require("styled-components"),e=require("../v3_theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var l=o(r);const t=l.default.div`
    border-radius: ${e.V3_Radius.full};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${e.V3_Font["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${o=>{let l,t,s;if("solid"===o.$type)switch(s=e.V3_Colour["text-inverse"],o.$color){case"grey":l=e.V3_Colour["bg-inverse-subtler"];break;case"green":l=e.V3_Colour["bg-success-strong"];break;case"yellow":l=e.V3_Colour["bg-warning-strong"];break;case"red":l=e.V3_Colour["bg-error-strong"];break;case"blue":l=e.V3_Colour["bg-info-strong"];break;case"primary":l=e.V3_Colour["bg-primary"];break;default:l=e.V3_Colour["bg-inverse"]}else switch(o.$color){case"grey":l=e.V3_Colour["bg-stronger"],t=e.V3_Colour["border-strong"],s=e.V3_Colour["text-subtler"];break;case"green":l=e.V3_Colour["bg-success"],t=e.V3_Colour["border-success"],s=e.V3_Colour["text-success"];break;case"yellow":l=e.V3_Colour["bg-warning"],t=e.V3_Colour["border-warning"],s=e.V3_Colour["text-warning"];break;case"red":l=e.V3_Colour["bg-error"],t=e.V3_Colour["border-error"],s=e.V3_Colour["text-error"];break;case"blue":l=e.V3_Colour["bg-info"],t=e.V3_Colour["border-info"],s=e.V3_Colour["text-info"];break;case"primary":l=e.V3_Colour["bg-primary-subtlest"],t=e.V3_Colour["border-primary"],s=e.V3_Colour["text-primary"];break;default:l=e.V3_Colour.bg,t=e.V3_Colour.border,s=e.V3_Colour.text}return r.css`
            background: ${l};
            border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid} ${t};
            color: ${s};
        `}}
`,s=l.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;exports.Label=s,exports.Wrapper=t;
//# sourceMappingURL=pill.style.js.map
