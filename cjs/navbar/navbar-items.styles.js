"use strict";var e=require("@lifesg/react-icons/chevron-up"),t=require("styled-components"),r=require("../shared/clickable-icon/clickable-icon.js"),i=require("../v3_theme/index.js"),o=require("../v3_theme/components/theme-helper.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(t);const a=l.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${i.V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,d=l.default.ul`
    display: none;
    list-style: none;

    ${i.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,s=l.default.li`
    display: flex;
    margin: 0 1rem;

    &:first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${i.V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,c=t.css`
    ${e=>i.V3_Font[`body-md-${e.weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${o.V3_ThemeNavbar["navbar-link-colour-text"]};
    height: 100%;

    &:active,
    &:hover,
    &:focus {
        color: ${e=>e.$selected?o.V3_ThemeNavbar["navbar-link-colour-text-selected-hover"]:o.V3_ThemeNavbar["navbar-link-colour-text-hover"]};
    }

    ${i.V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,u=l.default.a`
    ${c}
`,h=l.default.button`
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
`,p=l.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,m=l.default.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${i.V3_Colour["border-selected"]};

    &:hover {
        ${e=>e.$selected&&i.V3_Colour["border-selected-hover"]};
    }

    ${i.V3_MediaQuery.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,g=l.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,f=l.default(r.ClickableIcon)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,x=l.default(e.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${i.V3_Colour.icon};
    &:hover {
        ${e=>e.$selected?i.V3_Colour["icon-selected-hover"]:i.V3_Colour["icon-hover"]};
    }
`;exports.ChevronIcon=x,exports.ExpandCollapseButton=f,exports.Link=u,exports.LinkButton=h,exports.LinkIconContainer=g,exports.LinkIndicator=m,exports.LinkItem=s,exports.LinkLabel=p,exports.MobileWrapper=d,exports.Wrapper=a;
//# sourceMappingURL=navbar-items.styles.js.map
