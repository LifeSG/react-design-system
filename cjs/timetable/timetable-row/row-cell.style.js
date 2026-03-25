"use strict";var o=require("styled-components"),e=require("../../typography/index.js"),r=require("../../v3_theme/index.js");function l(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var t=l(o);const i=t.default.div`
    border-bottom: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
        ${r.V3_Colour.border};
    ${e=>{if(e.$isOnTheHour)return o.css`
                box-shadow: inset -0.5px 0px ${r.V3_Colour["border-primary"]};
            `}}
`,a=t.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,d=t.default.div`
    width: 2px;
    height: 100%;
`,s=t.default.div`
    height: 100%;
    width: ${({$width:o})=>`${o}px`};
    border-radius: ${r.V3_Radius.sm};
    box-sizing: border-box;
    padding: ${r.V3_Spacing["spacing-4"]};
    ${({$status:e,$mainColor:l,$isClickable:t,$altColor:i,$customMainColor:a,$customAltColor:d,$customHoverColor:s,$customAltHoverColor:n,$styleType:p})=>{const u={blocked:{mainColor:r.V3_Colour["bg-stronger"],altColor:r.V3_Colour["bg-strongest"],defaultStyleType:"stripes",nonClickablePointer:"not-allowed"},filled:{mainColor:l,defaultStyleType:"solid"},disabled:{mainColor:r.V3_Colour["bg-disabled"],defaultStyleType:"solid",nonClickablePointer:"not-allowed"},pending:{mainColor:l,altColor:i,defaultStyleType:"stripes",nonClickablePointer:"not-allowed"},default:{hoverColor:r.V3_Colour["bg-hover-subtle"],defaultStyleType:"solid"}}[e],c="default"!==p&&p?p:u.defaultStyleType,$=t?"pointer":u.nonClickablePointer||"default";return"stripes"===c?o.css`
                background: repeating-linear-gradient(
                    135deg,
                    ${a||u.mainColor||""} 0px 6px,
                    ${d||u.altColor||""} 6px 12px
                );
                &:hover {
                    ${t&&o.css`
                        background: repeating-linear-gradient(
                            135deg,
                            ${s||""} 0px 6px,
                            ${n||""} 6px 12px
                        );
                    `}
                    cursor: ${$};
                }
            `:o.css`
                background: ${a||u.mainColor};
                &:hover {
                    background-color: ${t?s||u.hoverColor:""};
                    cursor: ${$};
                }
            `}}
`,n=t.default(e.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,p=t.default(e.Typography.BodyXS)`
    color: ${r.V3_Colour["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;exports.Block=s,exports.BlockContainer=i,exports.BlockDescription=p,exports.BlockTitle=n,exports.Gap=d,exports.Wrapper=a;
//# sourceMappingURL=row-cell.style.js.map
