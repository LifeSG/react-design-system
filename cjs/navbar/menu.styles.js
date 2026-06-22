"use strict";var e=require("styled-components"),r=require("../shared/styles/index.js"),t=require("../theme/index.js"),o=require("../typography/typography.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(e);const l=a.default.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${t.Border["width-040"]} solid ${t.Colour["border-selected"]};
`,s=a.default.li`
    width: 100%;
    display: flex;
`,d=a.default(o.Typography.LinkBL)`
    width: 100%;
    text-align: left;
    color: ${t.Colour.text};

    margin: 0 ${t.Spacing["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${t.Border.solid} transparent;
    border-width: ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-8"]};
    border-radius: ${t.Radius.md};

    ${r.lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${t.Colour["bg-hover"]};
        color: ${t.Colour.text};
    }
`;exports.Link=d,exports.MenuItem=s,exports.MobileWrapper=l;
//# sourceMappingURL=menu.styles.js.map
