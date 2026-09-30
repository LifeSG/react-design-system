"use strict";var e=require("@lifesg/react-icons"),r=require("styled-components"),o=require("../shared/html-content/html-content.js"),t=require("../theme/index.js"),n=require("../typography/typography.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(r);const i=s.default.div`
    padding: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-16"]};
    display: flex;

    ${e=>{let o,n;switch(e.$type){case"error":o=t.Colour["bg-error"](e),n=t.Colour["border-error"](e);break;case"success":o=t.Colour["bg-success"](e),n=t.Colour["border-success"](e);break;case"warning":default:o=t.Colour["bg-warning"](e),n=t.Colour["border-warning"](e);break;case"info":o=t.Colour["bg-info"](e),n=t.Colour["border-info"](e);break;case"description":o=t.Colour["bg-strong"](e),n=t.Colour["border-strong"](e)}return r.css`
            background: ${o};
            border-left: ${t.Border["width-020"]} ${t.Border.solid}
                ${n};
        `}}
`,l=s.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${t.Spacing["spacing-8"]};

    ${e=>{let o;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":o=t.Colour["icon-error"](e);break;case"success":o=t.Colour["icon-success"](e);break;case"warning":default:o=t.Colour["icon-warning"](e);break;case"info":o=t.Colour["icon-info"](e);break;case"description":o=t.Colour["icon-subtle"](e)}return r.css`
            svg {
                color: ${o};
                width: ${n};
                height: ${n};
            }
        `}}
`,c=s.default(n.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?r.css`
                ${t.Font["body-sm-semibold"]}
                margin-top: ${t.Spacing["spacing-4"]};
            `:r.css`
                ${t.Font["body-md-semibold"]}
                margin-top: ${t.Spacing["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${t.Spacing["spacing-4"]};
    }
`,p=s.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,d=s.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return r.css`
                margin-bottom: ${t.Spacing["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,g=s.default.div`
    color: ${t.Colour.text};

    ${e=>"small"===e.$sizeType?o.applyHtmlContentStyle({textSize:"body-sm"}):o.applyHtmlContentStyle({textSize:"body-md"})}
`,u=s.default.button`
    ${e=>"small"===e.$sizeType?r.css`
                ${t.Font["body-sm-semibold"]}
            `:r.css`
                ${t.Font["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${t.Spacing["spacing-4"]};
    margin-top: ${t.Spacing["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${t.Colour["text-primary"]};
`,m=s.default(e.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${t.Motion["duration-350"]} ${t.Motion["ease-standard"]};
`;exports.ActionLinkText=c,exports.AlertIconWrapper=l,exports.ChevronIcon=m,exports.ContentContainer=p,exports.ShowMoreButton=u,exports.TextWrapper=g,exports.TextWrapperContainer=d,exports.Wrapper=i;
//# sourceMappingURL=alert.style.js.map
