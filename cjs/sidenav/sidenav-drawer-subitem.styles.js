"use strict";var e=require("styled-components"),r=require("../theme/index.js"),t=require("../shared/input-wrapper/input-wrapper.js"),o=require("../shared/styles/index.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=u(e);const n=i.default.li``,s=i.default(t.BasicButton)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${r.Radius.md};

    ${r.Font["body-md-regular"]}
    color: ${r.Colour.text};
    ${o.lineClampCss(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${r.Colour["bg-hover"]};
        color: ${r.Colour["text-hover"]};
    }
`;exports.Container=n,exports.LinkButton=s;
//# sourceMappingURL=sidenav-drawer-subitem.styles.js.map
