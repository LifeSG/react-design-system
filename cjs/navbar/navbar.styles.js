"use strict";var e=require("@lifesg/react-icons/menu"),r=require("styled-components"),a=require("../shared/clickable-icon/clickable-icon.js"),i=require("../theme/index.js"),t=require("../theme/components/theme-helper.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(r);const d=n.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${t.ThemeNavbar["navbar-colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    ${e=>{var a;return"dark"===(null===(a=e.theme)||void 0===a?void 0:a.colourMode)?r.css`
                  border-bottom: ${i.Border["width-010"]} ${i.Border.solid}
                      ${i.Colour.border};
              `:r.css`
                  box-shadow: ${i.Shadow["xs-subtle"]};
              `}}
`,l=n.default.nav`
    height: ${e=>{var r;const a=e.$compress?t.ThemeNavbar["navbar-compressed-height"](e):t.ThemeNavbar["navbar-full-height"](e);return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?`calc(${a} - 1px)`:`${a}`}};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${i.Motion["duration-350"]} ${i.Motion["ease-standard"]};

    ${i.MediaQuery.MaxWidth.lg} {
        height: ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?`calc(${t.ThemeNavbar["navbar-mobile-height"](e)} - 1px)`:`${t.ThemeNavbar["navbar-mobile-height"](e)}`}};
    }
`,h=n.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${i.MediaQuery.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,s=n.default(a.ClickableIcon)`
    display: none;

    ${i.MediaQuery.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,c=n.default(e.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${t.ThemeNavbar["navbar-colour-icon"]};
`,u=n.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?t.ThemeNavbar["navbar-compressed-logo-height"]:t.ThemeNavbar["navbar-full-logo-height"]};

    ${i.MediaQuery.MaxWidth.lg} {
        height: ${t.ThemeNavbar["navbar-mobile-logo-height"]};
    }

    ${i.MediaQuery.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,m=n.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`,v=n.default.div`
    display: flex;
    background-color: ${i.Colour.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${i.MediaQuery.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${i.MediaQuery.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`;exports.HeaderBrandAddonContainer=m,exports.MobileMenuButton=s,exports.MobileMenuIcon=c,exports.Nav=l,exports.NavBrandContainer=u,exports.NavElementsContainer=h,exports.NavSeparator=v,exports.Wrapper=d;
//# sourceMappingURL=navbar.styles.js.map
