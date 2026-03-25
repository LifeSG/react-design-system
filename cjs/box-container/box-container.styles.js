"use strict";var e=require("@lifesg/react-icons/chevron-down"),i=require("@lifesg/react-icons/exclamation-circle-fill"),r=require("@react-spring/web"),a=require("styled-components"),n=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(a);const d=o.default.section`
    border: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};
    border-radius: ${n.V3_Radius.sm};
    margin-bottom: ${n.V3_Spacing["spacing-32"]};
`,s=r.animated(o.default.div`
    overflow: hidden;
`),c=o.default.div`
    height: max-content;
`,l=o.default.div`
    border-top: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};
`,p=o.default.div`
    padding: ${n.V3_Spacing["spacing-16"]} ${n.V3_Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${n.V3_MediaQuery.MaxWidth.sm} {
        padding: ${n.V3_Spacing["spacing-16"]} ${n.V3_Spacing["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return a.css`
                cursor: pointer;
            `}}
`,g=o.default.div`
    ${n.V3_Font["heading-sm-semibold"]}
    color: ${n.V3_Colour.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${n.V3_Spacing["spacing-16"]};
`,u=o.default.div`
    display: flex;
`,$=o.default(i.ExclamationCircleFillIcon)`
    height: ${n.V3_Font.Spec["heading-size-sm"]};
    width: ${n.V3_Font.Spec["heading-size-sm"]};
    align-self: center;
    margin-right: ${n.V3_Spacing["spacing-40"]};
    flex-shrink: 0;

    ${n.V3_MediaQuery.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return a.css`
                    color: ${n.V3_Colour["icon-error"]};
                `;case"warning":return a.css`
                    color: ${n.V3_Colour["icon-warning"]};
                `}}}
`,_=o.default.div`
    display: flex;
    margin-left: auto;
    ${n.V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return a.css`
                margin-right: ${n.V3_Spacing["spacing-40"]};
                ${n.V3_MediaQuery.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${n.V3_Spacing["spacing-16"]};
                }
            `}}
`,V=o.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${n.V3_Spacing["spacing-16"]};
    margin: -${n.V3_Spacing["spacing-16"]};
    display: flex;
    align-items: center;

    ${n.V3_MediaQuery.MaxWidth.sm} {
        margin: -${n.V3_Spacing["spacing-16"]} -${n.V3_Spacing["spacing-16"]} -${n.V3_Spacing["spacing-16"]} 0;
        margin-left: auto;
    }
`,f=o.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${n.V3_Motion["duration-250"]} ${n.V3_Motion["ease-default"]};
`,m=o.default(e.ChevronDownIcon)`
    color: ${n.V3_Colour.icon};
    height: ${n.V3_Font.Spec["heading-size-sm"]};
    width: ${n.V3_Font.Spec["heading-size-sm"]};
`;exports.AlertIcon=$,exports.CallToActionContainer=_,exports.ChildContainer=l,exports.Container=d,exports.Expandable=s,exports.Handle=V,exports.HandleIcon=m,exports.HandleIconContainer=f,exports.Header=p,exports.LabelText=g,exports.LabelWrapper=u,exports.NonExpandable=c;
//# sourceMappingURL=box-container.styles.js.map
