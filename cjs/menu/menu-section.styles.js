"use strict";var e=require("styled-components"),r=require("../theme/index.js"),o=require("../typography/typography.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(e);const n=i.default.ul`
    ${o=>o.$showDivider&&e.css`
            border-top: ${r.Border["width-010"]} ${r.Border.solid}
                ${r.Colour.border};
        `}
    padding: ${r.Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`,a=i.default(o.Typography.BodyXS)`
    margin: 0 ${r.Spacing["spacing-16"]} ${r.Spacing["spacing-8"]};
    color: ${r.Colour["text-subtler"]};
`;exports.Label=a,exports.Section=n;
//# sourceMappingURL=menu-section.styles.js.map
