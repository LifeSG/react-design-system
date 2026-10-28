import{ChevronUpIcon as e}from"@lifesg/react-icons/chevron-up";import t,{css as i}from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{MediaQuery as r,Font as n,Spacing as l,Colour as a}from"../theme/index.js";import{ThemeNavbar as d}from"../theme/components/theme-helper.js";const c=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${r.MaxWidth.lg} {
        display: none;
    }
`,s=t.ul`
    display: none;
    list-style: none;

    ${r.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,h=t.li`
    display: flex;
    margin: 0 1rem;

    &:first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${r.MaxWidth.lg} {
        flex-direction: column;
        width: 100%;
        margin-left: 0rem;
    }
`,m=i`
    ${e=>n[`body-md-${e.$weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${d["navbar-link-colour-text"]};
    height: 100%;
    gap: ${l["spacing-16"]};

    &:active,
    &:hover,
    &:focus,
    &:focus-within {
        color: ${e=>e.$selected?d["navbar-link-colour-text-selected-hover"]:d["navbar-link-colour-text-hover"]};
    }

    ${r.MaxWidth.lg} {
        width: 100%;
        padding: 10px ${l["spacing-24"]};
        text-align: left;
    }
`,g=t.a`
    ${m}
`,$=t.button`
    ${m}
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    text-align: left;
    margin: 0;
    box-shadow: none;
    font: inherit;
    color: inherit;
`,p=t.div`
    flex: 1;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,f=t.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${a["border-selected"]};

    ${e=>e.$selected&&i`
            ${g}:active &,
            ${g}:hover &,
            ${g}:focus &,
            ${$}:active &,
            ${$}:hover &,
            ${$}:focus & {
                background-color: ${a["border-selected-hover"]};
            }
        `};

    ${r.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,v=t.div`
    margin-right: -0.5rem;
`,u=t(o)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0;
`,x=t(e)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${a.icon};

    ${g}:active &,
    ${g}:hover &,
    ${g}:focus &,
    ${$}:active &,
    ${$}:hover &,
    ${$}:focus & {
        color: ${e=>e.$selected?a["icon-selected-hover"]:a["icon-hover"]};
    }
`,b=t(x)`
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;

    height: 1.125rem;
    width: 1.125rem;
`;export{x as ChevronIcon,b as ChevronIconDesktop,u as ExpandCollapseButton,g as Link,$ as LinkButton,v as LinkIconContainer,f as LinkIndicator,h as LinkItem,p as LinkLabel,s as MobileWrapper,c as Wrapper};
//# sourceMappingURL=navbar-items.styles.js.map
