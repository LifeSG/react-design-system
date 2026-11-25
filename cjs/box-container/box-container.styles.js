"use strict";var e=require("@lifesg/react-icons/chevron-down"),i=require("@lifesg/react-icons/exclamation-circle-fill"),r=require("@react-spring/web"),a=require("styled-components"),n=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(a);const d=o.default.section`
    border: ${n.Border["width-010"]} ${n.Border.solid} ${n.Colour.border};
    border-radius: ${n.Radius.sm};
    margin-bottom: ${n.Spacing["spacing-32"]};
`,s=r.animated(o.default.div`
    overflow: hidden;
`),c=o.default.div`
    height: max-content;
`,l=o.default.div`
    border-top: ${n.Border["width-010"]} ${n.Border.solid} ${n.Colour.border};
`,p=o.default.div`
    padding: ${n.Spacing["spacing-16"]} ${n.Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${n.MediaQuery.MaxWidth.sm} {
        padding: ${n.Spacing["spacing-16"]} ${n.Spacing["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return a.css`
                cursor: pointer;
            `}}
`,g=o.default.div`
    ${n.Font["heading-sm-semibold"]}
    color: ${n.Colour.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${n.Spacing["spacing-16"]};
`,u=o.default.div`
    display: flex;
`,$=o.default(i.ExclamationCircleFillIcon)`
    height: ${n.Font.Spec["heading-size-sm"]};
    width: ${n.Font.Spec["heading-size-sm"]};
    align-self: center;
    margin-right: ${n.Spacing["spacing-40"]};
    flex-shrink: 0;

    ${n.MediaQuery.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return a.css`
                    color: ${n.Colour["icon-error"]};
                `;case"warning":return a.css`
                    color: ${n.Colour["icon-warning"]};
                `}}}
`,f=o.default.div`
    display: flex;
    margin-left: auto;
    ${n.MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return a.css`
                margin-right: ${n.Spacing["spacing-40"]};
                ${n.MediaQuery.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${n.Spacing["spacing-16"]};
                }
            `}}
`,m=o.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${n.Spacing["spacing-16"]};
    margin: -${n.Spacing["spacing-16"]};
    display: flex;
    align-items: center;

    ${n.MediaQuery.MaxWidth.sm} {
        margin: -${n.Spacing["spacing-16"]} -${n.Spacing["spacing-16"]} -${n.Spacing["spacing-16"]} 0;
        margin-left: auto;
    }
`,h=o.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${n.Motion["duration-250"]} ${n.Motion["ease-default"]};
`,x=o.default(e.ChevronDownIcon)`
    color: ${n.Colour.icon};
    height: ${n.Font.Spec["heading-size-sm"]};
    width: ${n.Font.Spec["heading-size-sm"]};
`;exports.AlertIcon=$,exports.CallToActionContainer=f,exports.ChildContainer=l,exports.Container=d,exports.Expandable=s,exports.Handle=m,exports.HandleIcon=x,exports.HandleIconContainer=h,exports.Header=p,exports.LabelText=g,exports.LabelWrapper=u,exports.NonExpandable=c;
//# sourceMappingURL=box-container.styles.js.map
