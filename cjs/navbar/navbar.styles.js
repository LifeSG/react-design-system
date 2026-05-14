"use strict";var e=require("@lifesg/react-icons/menu"),r=require("styled-components"),a=require("../shared/clickable-icon/clickable-icon.js"),i=require("../v3_theme/index.js"),o=require("../v3_theme/components/theme-helper.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(r);const l=n.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${o.V3_ThemeNavbar["navbar-colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    ${e=>{var a;return"dark"===(null===(a=e.theme)||void 0===a?void 0:a.colourMode)?r.css`
                  border-bottom: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
                      ${i.V3_Colour.border};
              `:r.css`
                  box-shadow: ${i.V3_Shadow["xs-subtle"]};
              `}}
`,d=n.default.nav`
    height: ${e=>{var r;const a=e.$compress?o.V3_ThemeNavbar["navbar-compressed-height"](e):o.V3_ThemeNavbar["navbar-full-height"](e);return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?`calc(${a} - 1px)`:`${a}`}};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${i.V3_Motion["duration-350"]} ${i.V3_Motion["ease-standard"]};

    ${i.V3_MediaQuery.MaxWidth.lg} {
        height: ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?`calc(${o.V3_ThemeNavbar["navbar-mobile-height"](e)} - 1px)`:`${o.V3_ThemeNavbar["navbar-mobile-height"](e)}`}};
    }
`,h=n.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${i.V3_MediaQuery.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,s=n.default(a.ClickableIcon)`
    display: none;

    ${i.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,u=n.default(e.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${o.V3_ThemeNavbar["navbar-colour-icon"]};
`,c=n.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?o.V3_ThemeNavbar["navbar-compressed-logo-height"]:o.V3_ThemeNavbar["navbar-full-logo-height"]};

    ${i.V3_MediaQuery.MaxWidth.lg} {
        height: ${o.V3_ThemeNavbar["navbar-mobile-logo-height"]};
    }

    ${i.V3_MediaQuery.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,m=n.default.div`
    display: flex;
    background-color: ${i.V3_Colour.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${i.V3_MediaQuery.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${i.V3_MediaQuery.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`;exports.MobileMenuButton=s,exports.MobileMenuIcon=u,exports.Nav=d,exports.NavBrandContainer=c,exports.NavElementsContainer=h,exports.NavSeparator=m,exports.Wrapper=l;
//# sourceMappingURL=navbar.styles.js.map
