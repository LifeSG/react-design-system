"use strict";var e=require("styled-components"),r=require("../shared/styles/index.js"),i=require("../typography/index.js"),t=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(e);const s=l.default.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${t.V3_Border["width-040"]} solid ${t.V3_Colour["border-selected"]};
`,a=l.default.li`
    width: 100%;
    display: flex;
`,d=l.default(i.Typography.LinkBL)`
    width: 100%;
    text-align: left;
    color: ${t.V3_Colour.text};

    margin: 0 ${t.V3_Spacing["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${t.V3_Border.solid} transparent;
    border-width: ${t.V3_Spacing["spacing-12"]} ${t.V3_Spacing["spacing-8"]};
    border-radius: ${t.V3_Radius.md};

    ${r.lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${t.V3_Colour["bg-hover"]};
        color: ${t.V3_Colour.text};
    }
`;exports.Link=d,exports.MenuItem=a,exports.MobileWrapper=s;
//# sourceMappingURL=menu.styles.js.map
