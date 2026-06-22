"use strict";var e=require("styled-components"),r=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(e);const t=r.Colour.border,a=r.Colour.text,i=d.default.div`
    overflow: auto;
    border: ${r.Border["width-010"]} ${r.Border.solid} ${t};
    border-radius: ${r.Radius.md};

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
    padding: ${r.Spacing["spacing-20"]} ${r.Spacing["spacing-16"]};
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${a};
    background-color: ${r.Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${r.Border["width-010"]} ${r.Border.solid} ${t};

    &:where(&:first-child) {
        padding-left: ${r.Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${r.Spacing["spacing-24"]};
    }
`,c=d.default.tr`
    background-color: ${r.Colour.bg};
    border-top: ${r.Border["width-010"]} ${r.Border.solid} ${t};
`,p=d.default.td`
    padding: ${r.Spacing["spacing-20"]} ${r.Spacing["spacing-16"]};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${r.Border["width-010"]} ${r.Border.solid} ${t};

    &:where(&:first-child) {
        padding-left: ${r.Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${r.Spacing["spacing-24"]};
    }
`;exports.BodyCell=p,exports.BodyRow=c,exports.HeaderCell=s,exports.TableBody=n,exports.TableComponent=l,exports.TableWrapper=i;
//# sourceMappingURL=table.styles.js.map
