import e,{css as i}from"styled-components";import{Layout as r}from"../layout/index.js";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{Typography as t}from"../typography/index.js";import{V3_Colour as n,V3_Motion as a,V3_Radius as l,V3_Spacing as s,V3_Font as d}from"../v3_theme/index.js";const p=i`
    color: ${n["hyperlink-inverse"]};

    svg {
        color: ${n["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${n["hyperlink-inverse"]};
        svg {
            color: ${n["icon-primary-inverse"]};
        }
    }
`,c=e.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${a["duration-800"]} ${a["ease-default"]};
    background: ${n["bg-inverse-subtle"]};
    border-radius: ${l.none};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,g=e(r.Content)``,m=e.div`
    flex: 1;
    align-items: flex-start;
    padding: ${s["spacing-24"]} 0;
`,$=e.div`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${d["body-baseline-regular"]}
    color: ${n["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${d["body-baseline-semibold"]}
        color: ${n["text-inverse"]};
    }

    a {
        ${d["body-baseline-regular"]}
        ${p}
    }
`,h=e.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,v=e.div`
    flex: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${r};
                mask-image: ${r};
            `}}
`,b=e(t.LinkBL)`
    position: relative;

    ${p}
`,f=e(o)`
    margin-right: -${s["spacing-24"]};
    padding-left: ${s["spacing-16"]};
    height: max-content;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${n["icon-inverse"]};
    }
`,x=e.button`
    display: flex;
    align-items: center;
    gap: ${s["spacing-4"]};
    align-self: flex-start;
    margin-top: ${s["spacing-8"]};

    border: none;
    background: transparent;
    color: ${n["hyperlink-inverse"]};
    ${d["body-md-semibold"]};

    cursor: pointer;
`,k=e.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,y=e.div`
    height: 1.5rem;
    width: 1.5rem;
    margin: ${s["spacing-24"]} ${s["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${n["hyperlink-inverse"]};
    }
`;export{k as AccessibleBannerButton,x as ActionButton,g as Container,$ as Content,m as ContentContainer,b as ContentLink,v as ContentText,h as ContentWrapper,y as IconContainer,f as StyledIconButton,c as Wrapper};
//# sourceMappingURL=notification-banner.styles.js.map
