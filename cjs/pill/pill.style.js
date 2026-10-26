"use strict";var r=require("styled-components"),e=require("../theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var l=o(r);const t=l.default.div`
    border-radius: ${e.Radius.full};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${e.Font["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${o=>{let l,t,s;if("solid"===o.$type)switch(s=e.Colour["text-inverse"],o.$color){case"grey":l=e.Colour["bg-inverse-subtler"];break;case"green":l=e.Colour["bg-success-strong"];break;case"yellow":l=e.Colour["bg-warning-strong"];break;case"red":l=e.Colour["bg-error-strong"];break;case"blue":l=e.Colour["bg-info-strong"];break;case"primary":l=e.Colour["bg-primary"];break;default:l=e.Colour["bg-inverse"]}else switch(o.$color){case"grey":l=e.Colour["bg-stronger"],t=e.Colour["border-strong"],s=e.Colour["text-subtler"];break;case"green":l=e.Colour["bg-success"],t=e.Colour["border-success"],s=e.Colour["text-success"];break;case"yellow":l=e.Colour["bg-warning"],t=e.Colour["border-warning"],s=e.Colour["text-warning"];break;case"red":l=e.Colour["bg-error"],t=e.Colour["border-error"],s=e.Colour["text-error"];break;case"blue":l=e.Colour["bg-info"],t=e.Colour["border-info"],s=e.Colour["text-info"];break;case"primary":l=e.Colour["bg-primary-subtlest"],t=e.Colour["border-primary"],s=e.Colour["text-primary"];break;default:l=e.Colour.bg,t=e.Colour.border,s=e.Colour.text}return r.css`
            background: ${l};
            border: ${e.Border["width-010"]} ${e.Border.solid} ${t};
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
