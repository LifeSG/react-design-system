import o,{css as e}from"styled-components";import{Typography as r}from"../../typography/index.js";import{V3_Border as l,V3_Colour as t,V3_Radius as i,V3_Spacing as d}from"../../v3_theme/index.js";const n=o.div`
    border-bottom: ${l["width-010"]} ${l.solid}
        ${t.border};
    ${o=>{if(o.$isOnTheHour)return e`
                box-shadow: inset -0.5px 0px ${t["border-primary"]};
            `}}
`,a=o.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,s=o.div`
    width: 2px;
    height: 100%;
`,p=o.div`
    height: 100%;
    width: ${({$width:o})=>`${o}px`};
    border-radius: ${i.sm};
    box-sizing: border-box;
    padding: ${d["spacing-4"]};
    ${({$status:o,$mainColor:r,$isClickable:l,$altColor:i,$customMainColor:d,$customAltColor:n,$customHoverColor:a,$customAltHoverColor:s,$styleType:p})=>{const $={blocked:{mainColor:t["bg-stronger"],altColor:t["bg-strongest"],defaultStyleType:"stripes",nonClickablePointer:"not-allowed"},filled:{mainColor:r,defaultStyleType:"solid"},disabled:{mainColor:t["bg-disabled"],defaultStyleType:"solid",nonClickablePointer:"not-allowed"},pending:{mainColor:r,altColor:i,defaultStyleType:"stripes",nonClickablePointer:"not-allowed"},default:{hoverColor:t["bg-hover-subtle"],defaultStyleType:"solid"}}[o],b="default"!==p&&p?p:$.defaultStyleType,u=l?"pointer":$.nonClickablePointer||"default";return"stripes"===b?e`
                background: repeating-linear-gradient(
                    135deg,
                    ${d||$.mainColor||""} 0px 6px,
                    ${n||$.altColor||""} 6px 12px
                );
                &:hover {
                    ${l&&e`
                        background: repeating-linear-gradient(
                            135deg,
                            ${a||""} 0px 6px,
                            ${s||""} 6px 12px
                        );
                    `}
                    cursor: ${u};
                }
            `:e`
                background: ${d||$.mainColor};
                &:hover {
                    background-color: ${l?a||$.hoverColor:""};
                    cursor: ${u};
                }
            `}}
`,$=o(r.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,b=o(r.BodyXS)`
    color: ${t["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;export{p as Block,n as BlockContainer,b as BlockDescription,$ as BlockTitle,s as Gap,a as Wrapper};
//# sourceMappingURL=row-cell.style.js.map
