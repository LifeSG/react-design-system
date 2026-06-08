"use strict";var e=require("@lifesg/react-icons/chevron-right"),r=require("@lifesg/react-icons/minus"),o=require("@lifesg/react-icons/plus"),t=require("@react-spring/web"),i=require("styled-components"),d=require("../theme/index.js"),l=require("../typography/typography.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(i);const s=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${d.Colour["icon-primary"]};
`,u=a.default.div`
    border-top: ${d.Border["width-010"]} ${d.Border.solid} ${d.Colour.border};
    border-bottom: ${d.Border["width-010"]} ${d.Border.solid} ${d.Colour.border};
`,p=a.default(l.Typography.HeadingSM)`
    color: ${d.Colour["text-primary"]};
    margin-bottom: 0.5rem;
`,c=a.default(l.Typography.HeadingXS)`
    color: ${d.Colour["text-primary"]};
`,$=a.default(e.ChevronRightIcon)`
    ${s}
`,m=a.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    &:not(:last-of-type) {
        border-bottom: ${d.Border["width-010"]} ${d.Border.solid} ${d.Colour.border};
    }

    &:hover {
        ${p},
        ${c},
        ${$} {
            color: ${d.Colour["text-hover"]};
        }
    }
`,f=a.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,g=a.default(l.Typography.BodyMD)`
    margin-top: 0.25rem;
`,x=t.animated(a.default.div`
    overflow: hidden;
`),h=a.default.div`
    ${e=>e.$border&&i.css`
            border-top: ${d.Border["width-010"]} ${d.Border.solid} ${d.Colour.border};
        `}
`,y=a.default(l.Typography.BodyMD)`
    color: ${d.Colour["text-primary"]};
`,b=a.default(o.PlusIcon)`
    ${s}
`,C=a.default(r.MinusIcon)`
    ${s}
`,v=a.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${d.Border["width-010"]} ${d.Border.solid} ${d.Colour.border};
    gap: 1rem;

    ${e=>e.$loading&&i.css`
            cursor: default;
            flex-direction: row-reverse;

            ${y},
            ${b},
            ${C} {
                color: ${d.Colour["text-disabled"]};
                text-decoration: none;
            }
        `}

    ${e=>!e.$loading&&i.css`
            &:hover {
                ${y},
                ${b},
                ${C} {
                    color: ${d.Colour["text-hover"]};
                    text-decoration: underline;
                }
            }
        `}
`;exports.Container=u,exports.Description=g,exports.Expandable=x,exports.ExpandableChild=h,exports.ItemContainer=m,exports.ItemContentContainer=f,exports.ItemIcon=$,exports.ItemTitleDefault=p,exports.ItemTitleSmall=c,exports.ToggleButton=v,exports.ToggleButtonLabel=y,exports.ViewLessIcon=C,exports.ViewMoreIcon=b;
//# sourceMappingURL=link-list.styles.js.map
