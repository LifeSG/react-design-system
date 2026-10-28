"use strict";var r=require("styled-components"),e=require("../theme/index.js"),o=require("../typography/typography.js");function t(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var i=t(r);const a=i.default.div`
    ${o=>o.$showDivider&&r.css`
            border-top: ${e.Border["width-010"]} ${e.Border.solid}
                ${e.Colour.border};
        `}
    padding: ${e.Spacing["spacing-8"]} 0;
`,s=i.default.ul`
    margin: 0;
    list-style: none;

    ${o=>o.$columns&&r.css`
            display: grid;
            grid-template-rows: repeat(${o.$gridRows}, auto);
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
            column-gap: ${e.Spacing["spacing-8"]};

            ${e.MediaQuery.MaxWidth.lg} {
                grid-template-rows: none;
                grid-auto-flow: row;
            }
        `}
`,p=i.default(o.Typography.BodyXS)`
    margin: 0 ${e.Spacing["spacing-16"]} ${e.Spacing["spacing-8"]};
    color: ${e.Colour["text-subtler"]};
`;exports.GRID_COLUMN_GAP_PX=8,exports.GRID_COLUMN_WIDTH_PX=383,exports.Label=p,exports.List=s,exports.SectionWrapper=a;
//# sourceMappingURL=menu-section.styles.js.map
