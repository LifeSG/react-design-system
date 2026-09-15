import{ChevronDownIcon as e}from"@lifesg/react-icons";import r,{css as i}from"styled-components";import{applyHtmlContentStyle as t}from"../shared/html-content/html-content.js";import{Spacing as o,Colour as s,Border as n,Font as a,Motion as l}from"../theme/index.js";import{Typography as c}from"../typography/typography.js";const d=r.div`
    padding: ${o["spacing-8"]} ${o["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=s["bg-error"](e),t=s["border-error"](e);break;case"success":r=s["bg-success"](e),t=s["border-success"](e);break;case"warning":default:r=s["bg-warning"](e),t=s["border-warning"](e);break;case"info":r=s["bg-info"](e),t=s["border-info"](e);break;case"description":r=s["bg-strong"](e),t=s["border-strong"](e)}return i`
            background: ${r};
            border-left: ${n["width-020"]} ${n.solid}
                ${t};
        `}}
`,m=r.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${o["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=s["icon-error"](e);break;case"success":r=s["icon-success"](e);break;case"warning":default:r=s["icon-warning"](e);break;case"info":r=s["icon-info"](e);break;case"description":r=s["icon-subtle"](e)}return i`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,g=r(c.LinkSM)`
    ${e=>"small"===e.$sizeType?i`
                ${a["body-sm-semibold"]}
                margin-top: ${o["spacing-4"]};
            `:i`
                ${a["body-md-semibold"]}
                margin-top: ${o["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${o["spacing-4"]};
    }
`,p=r.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,$=r.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i`
                margin-bottom: ${o["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,b=r.div`
    color: ${s.text};

    ${e=>"small"===e.$sizeType?t({textSize:"body-sm"}):t({textSize:"body-md"})}
`,f=r.button`
    ${e=>"small"===e.$sizeType?i`
                ${a["body-sm-semibold"]}
            `:i`
                ${a["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${o["spacing-4"]};
    margin-top: ${o["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${s["text-primary"]};
`,h=r(e)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${l["duration-350"]} ${l["ease-standard"]};
`;export{g as ActionLinkText,m as AlertIconWrapper,h as ChevronIcon,p as ContentContainer,f as ShowMoreButton,b as TextWrapper,$ as TextWrapperContainer,d as Wrapper};
//# sourceMappingURL=alert.style.js.map
