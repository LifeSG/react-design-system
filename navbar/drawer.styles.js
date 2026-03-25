import{CrossIcon as i}from"@lifesg/react-icons/cross";import e,{css as o}from"styled-components";import{ClickableIcon as t}from"../shared/clickable-icon/clickable-icon.js";import{V3_MediaQuery as s,V3_Spacing as n,V3_Colour as a,V3_Shadow as l,V3_Motion as r}from"../v3_theme/index.js";const c=e.div`
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
    background-color: ${a.bg};
    box-shadow: ${l["xs-subtle"]};
    visibility: ${i=>i.$show?"visible":"hidden"};
    outline: none;

    ${i=>i.$show?o`
            right: 0;
            transition: all 300ms ${r["ease-entrance"]};
            transition-delay: 200ms;
        `:o`
        right: -100%;
        transition: all 300ms ${r["ease-exit"]};
    `}
    ${i=>{let e="1vh";return i.$viewHeight&&(e=`${i.$viewHeight}px`),o`
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
`,p=e(i)`
    height: 1.5rem;
    width: 1.5rem;
`,$=e(t)`
    position: absolute;
    right: -${n["spacing-4"]};
    color: ${a.icon};

    &:active,
    &:focus {
        color: ${a["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;export{$ as CloseButton,p as CloseIcon,d as Container,h as Content,g as TopBar,c as Wrapper};
//# sourceMappingURL=drawer.styles.js.map
