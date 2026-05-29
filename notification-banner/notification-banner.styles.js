import e,{css as i}from"styled-components";import{Layout as r}from"../layout/index.js";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{Colour as t,Motion as n,Radius as a,Spacing as l,Font as s}from"../theme/index.js";import{Typography as p}from"../typography/typography.js";const d=i`
    color: ${t["hyperlink-inverse"]};

    svg {
        color: ${t["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${t["hyperlink-inverse"]};
        svg {
            color: ${t["icon-primary-inverse"]};
        }
    }
`,c=e.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${n["duration-800"]} ${n["ease-default"]};
    background: ${t["bg-inverse-subtle"]};
    border-radius: ${a.none};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,g=e(r.Content)``,m=e.div`
    flex: 1;
    align-items: flex-start;
    padding: ${l["spacing-24"]} 0;
`,$=e.div`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${s["body-baseline-regular"]}
    color: ${t["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${s["body-baseline-semibold"]}
        color: ${t["text-inverse"]};
    }

    a {
        ${s["body-baseline-regular"]}
        ${d}
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
`,b=e(p.LinkBL)`
    position: relative;

    ${d}
`,f=e(o)`
    margin-right: -${l["spacing-24"]};
    padding-left: ${l["spacing-16"]};
    height: max-content;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${t["icon-inverse"]};
    }
`,x=e.button`
    display: flex;
    align-items: center;
    gap: ${l["spacing-4"]};
    align-self: flex-start;
    margin-top: ${l["spacing-8"]};

    border: none;
    background: transparent;
    color: ${t["hyperlink-inverse"]};
    ${s["body-md-semibold"]};

    cursor: pointer;
`,y=e.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,k=e.div`
    height: 1.5rem;
    width: 1.5rem;
    margin: ${l["spacing-24"]} ${l["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${t["hyperlink-inverse"]};
    }
`;export{y as AccessibleBannerButton,x as ActionButton,g as Container,$ as Content,m as ContentContainer,b as ContentLink,v as ContentText,h as ContentWrapper,k as IconContainer,f as StyledIconButton,c as Wrapper};
//# sourceMappingURL=notification-banner.styles.js.map
