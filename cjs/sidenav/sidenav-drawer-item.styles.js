"use strict";var e=require("@lifesg/react-icons/chevron-up"),r=require("@react-spring/web"),t=require("styled-components"),o=require("../shared/input-wrapper/input-wrapper.js"),n=require("../shared/styles/index.js"),a=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=i(t);const d=r.animated(s.default.li``),u=s.default(o.BasicButton)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${a.V3_Radius.md};

    ${a.V3_Font["body-md-semibold"]}
    color: ${a.V3_Colour.text};

    ${e=>e.$noChildren?t.css`
                  &:hover,
                  &:focus {
                      background: ${a.V3_Colour["bg-hover"]};
                      color: ${a.V3_Colour["text-hover"]};
                  }
              `:t.css`
                  &:hover,
                  &:focus {
                      background: ${a.V3_Colour["bg-hover-strong"]};
                  }
              `}
`,l=r.animated(s.default.div`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`),c=s.default(e.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${a.V3_Colour.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${a.V3_Motion["duration-150"]}
        ${a.V3_Motion["ease-default"]};
`,p=s.default.span`
    ${n.lineClampCss(2)}
    text-align: left;
`,f=r.animated(s.default.ul``);exports.ChevronIcon=c,exports.Container=d,exports.DrawerContent=f,exports.DrawerSubitemContainer=l,exports.LinkButton=u,exports.TextElement=p;
//# sourceMappingURL=sidenav-drawer-item.styles.js.map
