import{ChevronDownIcon as e}from"@lifesg/react-icons";import r,{css as i}from"styled-components";import{applyHtmlContentStyle as t}from"../shared/html-content/html-content.js";import{Typography as o}from"../typography/index.js";import{V3_Spacing as s,V3_Colour as n,V3_Border as a,V3_Font as l,V3_Motion as c}from"../v3_theme/index.js";const d=r.div`
    padding: ${s["spacing-8"]} ${s["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=n["bg-error"](e),t=n["border-error"](e);break;case"success":r=n["bg-success"](e),t=n["border-success"](e);break;case"warning":default:r=n["bg-warning"](e),t=n["border-warning"](e);break;case"info":r=n["bg-info"](e),t=n["border-info"](e);break;case"description":r=n["bg-strong"](e),t=n["border-strong"](e)}return i`
            background: ${r};
            border-left: ${a["width-020"]} ${a.solid}
                ${t};
        `}}
`,m=r.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${s["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=n["icon-error"](e);break;case"success":r=n["icon-success"](e);break;case"warning":default:r=n["icon-warning"](e);break;case"info":r=n["icon-info"](e);break;case"description":r=n["icon-subtle"](e)}return i`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,g=r(o.LinkSM)`
    ${e=>"small"===e.$sizeType?i`
                ${l["body-sm-semibold"]}
                margin-top: ${s["spacing-4"]};
            `:i`
                ${l["body-md-semibold"]}
                margin-top: ${s["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${s["spacing-4"]};
    }
`,$=r.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,p=r.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i`
                margin-bottom: ${s["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,b=r.div`
    color: ${n.text};

    ${e=>"small"===e.$sizeType?t({textSize:"body-sm"}):t({textSize:"body-md"})}
`,f=r.button`
    ${e=>"small"===e.$sizeType?i`
                ${l["body-sm-semibold"]}
            `:i`
                ${l["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${s["spacing-4"]};
    margin-top: ${s["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${n["text-primary"]};
`,h=r(e)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${c["duration-350"]}
        ${c["ease-standard"]};
`;export{g as ActionLinkText,m as AlertIconWrapper,h as ChevronIcon,$ as ContentContainer,f as ShowMoreButton,b as TextWrapper,p as TextWrapperContainer,d as Wrapper};
//# sourceMappingURL=alert.style.js.map
