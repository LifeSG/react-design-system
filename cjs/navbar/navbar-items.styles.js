"use strict";var e=require("@lifesg/react-icons/chevron-up"),t=require("styled-components"),r=require("../shared/clickable-icon/clickable-icon.js"),o=require("../theme/index.js"),i=require("../theme/components/theme-helper.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(t);const l=a.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${o.MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,d=a.default.ul`
    display: none;
    list-style: none;

    ${o.MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,s=a.default.li`
    display: flex;
    margin: 0 1rem;

    &:first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${o.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,c=t.css`
    ${e=>o.Font[`body-md-${e.weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${i.ThemeNavbar["navbar-link-colour-text"]};
    height: 100%;

    &:active,
    &:hover,
    &:focus,
    &:focus-within {
        color: ${e=>e.$selected?i.ThemeNavbar["navbar-link-colour-text-selected-hover"]:i.ThemeNavbar["navbar-link-colour-text-hover"]};
    }

    ${o.MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,u=a.default.a`
    ${c}
`,h=a.default.button`
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
`,p=a.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,f=a.default.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${o.Colour["border-selected"]};

    ${e=>e.$selected&&t.css`
            ${u}:active &,
            ${u}:hover &,
            ${u}:focus &,
            ${h}:active &,
            ${h}:hover &,
            ${h}:focus & {
                background-color: ${o.Colour["border-selected-hover"]};
            }
        `};

    ${o.MediaQuery.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,m=a.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,g=a.default(r.ClickableIcon)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,$=a.default(e.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${o.Colour.icon};

    ${u}:active &,
    ${u}:hover &,
    ${u}:focus &,
    ${h}:active &,
    ${h}:hover &,
    ${h}:focus & {
        color: ${e=>e.$selected?o.Colour["icon-selected-hover"]:o.Colour["icon-hover"]};
    }
`;exports.ChevronIcon=$,exports.ExpandCollapseButton=g,exports.Link=u,exports.LinkButton=h,exports.LinkIconContainer=m,exports.LinkIndicator=f,exports.LinkItem=s,exports.LinkLabel=p,exports.MobileWrapper=d,exports.Wrapper=l;
//# sourceMappingURL=navbar-items.styles.js.map
