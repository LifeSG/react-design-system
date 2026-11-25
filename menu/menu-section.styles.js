import o,{css as r}from"styled-components";import{Spacing as i,Border as t,Colour as a,MediaQuery as d}from"../theme/index.js";import{Typography as e}from"../typography/typography.js";const n=383,p=8,s=o.div`
    ${o=>o.$showDivider&&r`
            border-top: ${t["width-010"]} ${t.solid}
                ${a.border};
        `}
    padding: ${i["spacing-8"]} 0;
`,g=o.ul`
    margin: 0;
    list-style: none;

    ${o=>o.$columns&&r`
            display: grid;
            grid-template-rows: repeat(${o.$gridRows}, auto);
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
            column-gap: ${i["spacing-8"]};

            ${d.MaxWidth.lg} {
                grid-template-rows: none;
                grid-auto-flow: row;
            }
        `}
`,m=o(e.BodyXS)`
    margin: 0 ${i["spacing-16"]} ${i["spacing-8"]};
    color: ${a["text-subtler"]};
`;export{p as GRID_COLUMN_GAP_PX,n as GRID_COLUMN_WIDTH_PX,m as Label,g as List,s as SectionWrapper};
//# sourceMappingURL=menu-section.styles.js.map
