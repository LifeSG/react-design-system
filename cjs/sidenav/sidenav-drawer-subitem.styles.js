"use strict";var e=require("styled-components"),r=require("../shared/input-wrapper/input-wrapper.js"),t=require("../shared/styles/index.js"),o=require("../v3_theme/index.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=u(e);const n=i.default.li``,s=i.default(r.BasicButton)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${o.V3_Radius.md};

    ${o.V3_Font["body-md-regular"]}
    color: ${o.V3_Colour.text};
    ${t.lineClampCss(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${o.V3_Colour["bg-hover"]};
        color: ${o.V3_Colour["text-hover"]};
    }
`;exports.Container=n,exports.LinkButton=s;
//# sourceMappingURL=sidenav-drawer-subitem.styles.js.map
