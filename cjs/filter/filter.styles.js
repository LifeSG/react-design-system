"use strict";var o=require("styled-components"),e=require("../button/button.js"),t=require("../shared/clickable-icon/clickable-icon.js"),r=require("../theme/index.js");function i(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=i(o);const a=n.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,d=n.default(t.ClickableIcon)`
    padding: ${r.Spacing["spacing-24"]} ${r.Spacing["spacing-20"]};
    margin-right: auto;
    color: ${r.Colour.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${r.Colour["icon-hover"]};
    }
`,l=n.default.div`
    padding: ${r.Spacing["spacing-24"]} ${r.Spacing["spacing-20"]};
    background-color: ${r.Colour.bg};
    border-top: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    ${o=>o.$insetBottom&&`padding-bottom: ${o.$insetBottom}px;`}
`,c=n.default(e.Button.Default)`
    width: 100%;
`;exports.FilterBody=a,exports.FilterDoneButton=c,exports.FilterFooter=l,exports.FilterHeaderButton=d;
//# sourceMappingURL=filter.styles.js.map
