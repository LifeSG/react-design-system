"use strict";var e=require("@lifesg/react-icons/chevron-up"),t=require("styled-components"),o=require("../shared/clickable-icon/clickable-icon.js"),r=require("../theme/index.js"),i=require("../theme/components/theme-helper.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(t);const l=a.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${r.MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,d=a.default.ul`
    display: none;
    list-style: none;

    ${r.MediaQuery.MaxWidth.lg} {
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

    ${r.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        width: 100%;
        margin-left: 0rem;
    }
`,c=t.css`
    ${e=>r.Font[`body-md-${e.$weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${i.ThemeNavbar["navbar-link-colour-text"]};
    height: 100%;
    gap: ${r.Spacing["spacing-16"]};

    &:active,
    &:hover,
    &:focus,
    &:focus-within {
        color: ${e=>e.$selected?i.ThemeNavbar["navbar-link-colour-text-selected-hover"]:i.ThemeNavbar["navbar-link-colour-text-hover"]};
    }

    ${r.MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 10px ${r.Spacing["spacing-24"]};
        text-align: left;
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
    background-color: ${r.Colour["border-selected"]};

    ${e=>e.$selected&&t.css`
            ${u}:active &,
            ${u}:hover &,
            ${u}:focus &,
            ${h}:active &,
            ${h}:hover &,
            ${h}:focus & {
                background-color: ${r.Colour["border-selected-hover"]};
            }
        `};

    ${r.MediaQuery.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,g=a.default.div`
    margin-right: -0.5rem;
`,$=a.default(o.ClickableIcon)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0;
`,m=a.default(e.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${r.Colour.icon};

    ${u}:active &,
    ${u}:hover &,
    ${u}:focus &,
    ${h}:active &,
    ${h}:hover &,
    ${h}:focus & {
        color: ${e=>e.$selected?r.Colour["icon-selected-hover"]:r.Colour["icon-hover"]};
    }
`,v=a.default(m)`
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;

    height: 1.125rem;
    width: 1.125rem;
`;exports.ChevronIcon=m,exports.ChevronIconDesktop=v,exports.ExpandCollapseButton=$,exports.Link=u,exports.LinkButton=h,exports.LinkIconContainer=g,exports.LinkIndicator=f,exports.LinkItem=s,exports.LinkLabel=p,exports.MobileWrapper=d,exports.Wrapper=l;
//# sourceMappingURL=navbar-items.styles.js.map
