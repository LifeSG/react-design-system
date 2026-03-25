"use strict";var e=require("styled-components"),r=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(e);const t=r.V3_Colour.border,a=r.V3_Colour.text,i=d.default.div`
    overflow: auto;
    border: ${r.V3_Border["width-010"]} ${r.V3_Border.solid} ${t};
    border-radius: ${r.V3_Radius.md};

    // Hide scrollbar
    &::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;i.displayName="Table.Container";const l=d.default.table`
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;l.displayName="Table.Table";const n=d.default.tbody`
    :where(tr:last-child) {
        td {
            border-bottom: none;
        }
    }
`,s=d.default.th`
    padding: ${r.V3_Spacing["spacing-20"]} ${r.V3_Spacing["spacing-16"]};
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${a};
    background-color: ${r.V3_Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
        ${t};

    &:where(&:first-child) {
        padding-left: ${r.V3_Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${r.V3_Spacing["spacing-24"]};
    }
`,c=d.default.tr`
    background-color: ${r.V3_Colour.bg};
    border-top: ${r.V3_Border["width-010"]} ${r.V3_Border.solid} ${t};
`,p=d.default.td`
    padding: ${r.V3_Spacing["spacing-20"]} ${r.V3_Spacing["spacing-16"]};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
        ${t};

    &:where(&:first-child) {
        padding-left: ${r.V3_Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${r.V3_Spacing["spacing-24"]};
    }
`;exports.BodyCell=p,exports.BodyRow=c,exports.HeaderCell=s,exports.TableBody=n,exports.TableComponent=l,exports.TableWrapper=i;
//# sourceMappingURL=table.styles.js.map
