import e from"styled-components";import{V3_Colour as r,V3_Border as o,V3_Radius as d,V3_Spacing as t}from"../v3_theme/index.js";const i=r.border,l=r.text,a=e.div`
    overflow: auto;
    border: ${o["width-010"]} ${o.solid} ${i};
    border-radius: ${d.md};

    // Hide scrollbar
    &::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;a.displayName="Table.Container";const n=e.table`
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;n.displayName="Table.Table";const s=e.tbody`
    :where(tr:last-child) {
        td {
            border-bottom: none;
        }
    }
`,c=e.th`
    padding: ${t["spacing-20"]} ${t["spacing-16"]};
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${l};
    background-color: ${r["bg-stronger"]};
    height: 6rem;
    border-bottom: ${o["width-010"]} ${o.solid}
        ${i};

    &:where(&:first-child) {
        padding-left: ${t["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${t["spacing-24"]};
    }
`,g=e.tr`
    background-color: ${r.bg};
    border-top: ${o["width-010"]} ${o.solid} ${i};
`,b=e.td`
    padding: ${t["spacing-20"]} ${t["spacing-16"]};
    vertical-align: middle;
    color: ${l};
    border-bottom: ${o["width-010"]} ${o.solid}
        ${i};

    &:where(&:first-child) {
        padding-left: ${t["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${t["spacing-24"]};
    }
`;export{b as BodyCell,g as BodyRow,c as HeaderCell,s as TableBody,n as TableComponent,a as TableWrapper};
//# sourceMappingURL=table.styles.js.map
