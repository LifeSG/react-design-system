"use strict";var e=require("@lifesg/react-icons/chevron-right"),r=require("@lifesg/react-icons/minus"),o=require("@lifesg/react-icons/plus"),t=require("@react-spring/web"),i=require("styled-components"),d=require("../typography/index.js"),n=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(i);const s=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${n.V3_Colour["icon-primary"]};
`,u=a.default.div`
    border-top: ${n.V3_Border["width-010"]} ${n.V3_Border.solid} ${n.V3_Colour.border};
    border-bottom: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};
`,p=a.default(d.Typography.HeadingSM)`
    color: ${n.V3_Colour["text-primary"]};
    margin-bottom: 0.5rem;
`,c=a.default(d.Typography.HeadingXS)`
    color: ${n.V3_Colour["text-primary"]};
`,$=a.default(e.ChevronRightIcon)`
    ${s}
`,m=a.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    &:not(:last-of-type) {
        border-bottom: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
            ${n.V3_Colour.border};
    }

    &:hover {
        ${p},
        ${c},
        ${$} {
            color: ${n.V3_Colour["text-hover"]};
        }
    }
`,f=a.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,g=a.default(d.Typography.BodyMD)`
    margin-top: 0.25rem;
`,x=t.animated(a.default.div`
    overflow: hidden;
`),h=a.default.div`
    ${e=>e.$border&&i.css`
            border-top: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
                ${n.V3_Colour.border};
        `}
`,b=a.default(d.Typography.BodyMD)`
    color: ${n.V3_Colour["text-primary"]};
`,y=a.default(o.PlusIcon)`
    ${s}
`,V=a.default(r.MinusIcon)`
    ${s}
`,_=a.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${n.V3_Border["width-010"]} ${n.V3_Border.solid} ${n.V3_Colour.border};
    gap: 1rem;

    ${e=>e.$loading&&i.css`
            cursor: default;
            flex-direction: row-reverse;

            ${b},
            ${y},
            ${V} {
                color: ${n.V3_Colour["text-disabled"]};
                text-decoration: none;
            }
        `}

    ${e=>!e.$loading&&i.css`
            &:hover {
                ${b},
                ${y},
                ${V} {
                    color: ${n.V3_Colour["text-hover"]};
                    text-decoration: underline;
                }
            }
        `}
`;exports.Container=u,exports.Description=g,exports.Expandable=x,exports.ExpandableChild=h,exports.ItemContainer=m,exports.ItemContentContainer=f,exports.ItemIcon=$,exports.ItemTitleDefault=p,exports.ItemTitleSmall=c,exports.ToggleButton=_,exports.ToggleButtonLabel=b,exports.ViewLessIcon=V,exports.ViewMoreIcon=y;
//# sourceMappingURL=link-list.styles.js.map
