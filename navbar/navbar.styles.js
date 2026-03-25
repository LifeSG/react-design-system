import{MenuIcon as e}from"@lifesg/react-icons/menu";import i,{css as r}from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{V3_Border as t,V3_Colour as a,V3_Shadow as l,V3_Motion as n,V3_MediaQuery as d}from"../v3_theme/index.js";import{V3_ThemeNavbar as h}from"../v3_theme/components/theme-helper.js";const m=i.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${h["navbar-colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    ${e=>{var i;return"dark"===(null===(i=e.theme)||void 0===i?void 0:i.colourMode)?r`
                  border-bottom: ${t["width-010"]} ${t.solid}
                      ${a.border};
              `:r`
                  box-shadow: ${l["xs-subtle"]};
              `}}
`,s=i.nav`
    height: ${e=>{var i;const r=e.$compress?h["navbar-compressed-height"](e):h["navbar-full-height"](e);return"dark"===(null===(i=e.theme)||void 0===i?void 0:i.colourMode)?`calc(${r} - 1px)`:`${r}`}};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${n["duration-350"]} ${n["ease-standard"]};

    ${d.MaxWidth.lg} {
        height: ${e=>{var i;return"dark"===(null===(i=e.theme)||void 0===i?void 0:i.colourMode)?`calc(${h["navbar-mobile-height"](e)} - 1px)`:`${h["navbar-mobile-height"](e)}`}};
    }
`,c=i.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${d.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,g=i(o)`
    display: none;

    ${d.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,$=i(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${h["navbar-colour-icon"]};
`,p=i.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?h["navbar-compressed-logo-height"]:h["navbar-full-logo-height"]};

    ${d.MaxWidth.lg} {
        height: ${h["navbar-mobile-logo-height"]};
    }

    ${d.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,v=i.div`
    display: flex;
    background-color: ${a.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${d.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${d.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`;export{g as MobileMenuButton,$ as MobileMenuIcon,s as Nav,p as NavBrandContainer,c as NavElementsContainer,v as NavSeparator,m as Wrapper};
//# sourceMappingURL=navbar.styles.js.map
