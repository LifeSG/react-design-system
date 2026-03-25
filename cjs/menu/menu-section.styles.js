"use strict";var e=require("styled-components"),r=require("../typography/index.js"),o=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(e);const n=i.default.ul`
    ${r=>r.$showDivider&&e.css`
            border-top: ${o.V3_Border["width-010"]} ${o.V3_Border.solid}
                ${o.V3_Colour.border};
        `}
    padding: ${o.V3_Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`,s=i.default(r.Typography.BodyXS)`
    margin: 0 ${o.V3_Spacing["spacing-16"]} ${o.V3_Spacing["spacing-8"]};
    color: ${o.V3_Colour["text-subtler"]};
`;exports.Label=s,exports.Section=n;
//# sourceMappingURL=menu-section.styles.js.map
