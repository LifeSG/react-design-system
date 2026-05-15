import{ChevronUpIcon as e}from"@lifesg/react-icons/chevron-up";import t,{css as i}from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{MediaQuery as r,Font as n,Colour as l}from"../theme/index.js";import{ThemeNavbar as a}from"../theme/components/theme-helper.js";const d=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${r.MaxWidth.lg} {
        display: none;
    }
`,m=t.ul`
    display: none;
    list-style: none;

    ${r.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,s=t.li`
    display: flex;
    margin: 0 1rem;

    &:first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${r.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,c=i`
    ${e=>n[`body-md-${e.weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${a["navbar-link-colour-text"]};
    height: 100%;

    &:active,
    &:hover,
    &:focus {
        color: ${e=>e.$selected?a["navbar-link-colour-text-selected-hover"]:a["navbar-link-colour-text-hover"]};
    }

    ${r.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,h=t.a`
    ${c}
`,g=t.button`
    ${c}
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
    margin-top: 0.25rem;

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
    background-color: ${l["border-selected"]};

    &:hover {
        ${e=>e.$selected&&l["border-selected-hover"]};
    }

    ${r.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,x=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,$=t(o)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,v=t(e)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${l.icon};
    &:hover {
        ${e=>e.$selected?l["icon-selected-hover"]:l["icon-hover"]};
    }
`;export{v as ChevronIcon,$ as ExpandCollapseButton,h as Link,g as LinkButton,x as LinkIconContainer,f as LinkIndicator,s as LinkItem,p as LinkLabel,m as MobileWrapper,d as Wrapper};
//# sourceMappingURL=navbar-items.styles.js.map
