import{CrossIcon as i}from"@lifesg/react-icons/cross";import e,{css as t}from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{MediaQuery as s,Spacing as n,Colour as l,Shadow as a,Motion as r}from"../theme/index.js";const c=e.div`
    display: none;

    ${s.MaxWidth.lg} {
        display: flex;
    }
`,d=e.nav`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${n["spacing-16"]};
    background-color: ${l.bg};
    box-shadow: ${a["xs-subtle"]};
    visibility: ${i=>i.$show?"visible":"hidden"};
    outline: none;

    ${i=>i.$show?t`
            right: 0;
            transition: all 300ms ${r["ease-entrance"]};
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms ${r["ease-exit"]};
    `}
    ${i=>{let e="1vh";return i.$viewHeight&&(e=`${i.$viewHeight}px`),t`
            height: calc(${e} * 100);
        `}}

	${s.MaxWidth.lg} {
        width: 75%;
    }

    ${s.MaxWidth.sm} {
        width: 100%;
    }
`,h=e.div`
    display: flex;
    flex-direction: column;
`,g=e.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${n["spacing-40"]} ${n["spacing-20"]}
        ${n["spacing-32"]};
`,p=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`,$=e(i)`
    height: 1.5rem;
    width: 1.5rem;
`,m=e(o)`
    position: absolute;
    right: -${n["spacing-4"]};
    color: ${l.icon};

    &:active,
    &:focus {
        color: ${l["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;export{p as BrandAddonContainer,m as CloseButton,$ as CloseIcon,d as Container,h as Content,g as TopBar,c as Wrapper};
//# sourceMappingURL=drawer.styles.js.map
