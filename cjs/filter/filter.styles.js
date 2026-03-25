"use strict";var o=require("styled-components"),e=require("../button/button.js"),t=require("../shared/clickable-icon/clickable-icon.js"),r=require("../v3_theme/index.js");function i(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=i(o);const a=n.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,d=n.default(t.ClickableIcon)`
    padding: ${r.V3_Spacing["spacing-24"]} ${r.V3_Spacing["spacing-20"]};
    margin-right: auto;
    color: ${r.V3_Colour.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${r.V3_Colour["icon-hover"]};
    }
`,l=n.default.div`
    padding: ${r.V3_Spacing["spacing-24"]} ${r.V3_Spacing["spacing-20"]};
    background-color: ${r.V3_Colour.bg};
    border-top: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
        ${r.V3_Colour.border};
    ${o=>o.$insetBottom&&`padding-bottom: ${o.$insetBottom}px;`}
`,c=n.default(e.Button.Default)`
    width: 100%;
`;exports.FilterBody=a,exports.FilterDoneButton=c,exports.FilterFooter=l,exports.FilterHeaderButton=d;
//# sourceMappingURL=filter.styles.js.map
