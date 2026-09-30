import o,{css as e}from"styled-components";import{Border as r,Colour as l,Radius as t,Spacing as i}from"../../theme/index.js";import{Typography as d}from"../../typography/typography.js";const a=o.div`
    border-bottom: ${r["width-010"]} ${r.solid} ${l.border};
    ${o=>{if(o.$isOnTheHour)return e`
                box-shadow: inset -0.5px 0px ${l["border-primary"]};
            `}}
`,n=o.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,p=o.div`
    width: 2px;
    height: 100%;
`,s=o.div`
    height: 100%;
    width: ${({$width:o})=>`${o}px`};
    border-radius: ${t.sm};
    box-sizing: border-box;
    padding: ${i["spacing-4"]};
    ${({$status:o,$mainColor:r,$isClickable:t,$altColor:i,$customMainColor:d,$customAltColor:a,$customHoverColor:n,$customAltHoverColor:p,$styleType:s})=>{const $={blocked:{mainColor:l["bg-stronger"],altColor:l["bg-strongest"],defaultStyleType:"stripes",nonClickablePointer:"not-allowed"},filled:{mainColor:r,defaultStyleType:"solid"},disabled:{mainColor:l["bg-disabled"],defaultStyleType:"solid",nonClickablePointer:"not-allowed"},pending:{mainColor:r,altColor:i,defaultStyleType:"stripes",nonClickablePointer:"not-allowed"},default:{hoverColor:l["bg-hover-subtle"],defaultStyleType:"solid"}}[o],b="default"!==s&&s?s:$.defaultStyleType,g=t?"pointer":$.nonClickablePointer||"default";return"stripes"===b?e`
                background: repeating-linear-gradient(
                    135deg,
                    ${d||$.mainColor||""} 0px 6px,
                    ${a||$.altColor||""} 6px 12px
                );
                &:hover {
                    ${t&&e`
                        background: repeating-linear-gradient(
                            135deg,
                            ${n||""} 0px 6px,
                            ${p||""} 6px 12px
                        );
                    `}
                    cursor: ${g};
                }
            `:e`
                background: ${d||$.mainColor};
                &:hover {
                    background-color: ${t?n||$.hoverColor:""};
                    cursor: ${g};
                }
            `}}
`,$=o(d.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,b=o(d.BodyXS)`
    color: ${l["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;export{s as Block,a as BlockContainer,b as BlockDescription,$ as BlockTitle,p as Gap,n as Wrapper};
//# sourceMappingURL=row-cell.style.js.map
