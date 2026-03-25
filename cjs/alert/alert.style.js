"use strict";var e=require("@lifesg/react-icons"),r=require("styled-components"),o=require("../shared/html-content/html-content.js"),t=require("../typography/index.js"),n=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=i(r);const a=s.default.div`
    padding: ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-16"]};
    display: flex;

    ${e=>{let o,t;switch(e.$type){case"error":o=n.V3_Colour["bg-error"](e),t=n.V3_Colour["border-error"](e);break;case"success":o=n.V3_Colour["bg-success"](e),t=n.V3_Colour["border-success"](e);break;case"warning":default:o=n.V3_Colour["bg-warning"](e),t=n.V3_Colour["border-warning"](e);break;case"info":o=n.V3_Colour["bg-info"](e),t=n.V3_Colour["border-info"](e);break;case"description":o=n.V3_Colour["bg-strong"](e),t=n.V3_Colour["border-strong"](e)}return r.css`
            background: ${o};
            border-left: ${n.V3_Border["width-020"]} ${n.V3_Border.solid}
                ${t};
        `}}
`,l=s.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${n.V3_Spacing["spacing-8"]};

    ${e=>{let o;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":o=n.V3_Colour["icon-error"](e);break;case"success":o=n.V3_Colour["icon-success"](e);break;case"warning":default:o=n.V3_Colour["icon-warning"](e);break;case"info":o=n.V3_Colour["icon-info"](e);break;case"description":o=n.V3_Colour["icon-subtle"](e)}return r.css`
            svg {
                color: ${o};
                width: ${t};
                height: ${t};
            }
        `}}
`,c=s.default(t.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?r.css`
                ${n.V3_Font["body-sm-semibold"]}
                margin-top: ${n.V3_Spacing["spacing-4"]};
            `:r.css`
                ${n.V3_Font["body-md-semibold"]}
                margin-top: ${n.V3_Spacing["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${n.V3_Spacing["spacing-4"]};
    }
`,d=s.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,p=s.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return r.css`
                margin-bottom: ${n.V3_Spacing["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,g=s.default.div`
    color: ${n.V3_Colour.text};

    ${e=>"small"===e.$sizeType?o.applyHtmlContentStyle({textSize:"body-sm"}):o.applyHtmlContentStyle({textSize:"body-md"})}
`,u=s.default.button`
    ${e=>"small"===e.$sizeType?r.css`
                ${n.V3_Font["body-sm-semibold"]}
            `:r.css`
                ${n.V3_Font["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${n.V3_Spacing["spacing-4"]};
    margin-top: ${n.V3_Spacing["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${n.V3_Colour["text-primary"]};
`,m=s.default(e.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${n.V3_Motion["duration-350"]}
        ${n.V3_Motion["ease-standard"]};
`;exports.ActionLinkText=c,exports.AlertIconWrapper=l,exports.ChevronIcon=m,exports.ContentContainer=d,exports.ShowMoreButton=u,exports.TextWrapper=g,exports.TextWrapperContainer=p,exports.Wrapper=a;
//# sourceMappingURL=alert.style.js.map
