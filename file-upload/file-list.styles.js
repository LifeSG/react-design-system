import t from"styled-components";import{Spacing as o,Border as i,Colour as r}from"../theme/index.js";const e=t.ul`
    list-style-type: none;
    margin-bottom: ${t=>t.$readOnly?"0":o["spacing-32"]};
`,n=t.li`
    border-top: ${i["width-010"]} ${i.solid} ${r.border};
    border-bottom: ${i["width-010"]} ${i.solid} ${r.border};

    &:not(:last-child) {
        margin-bottom: ${o["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${o["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;export{n as EditableItemsContainer,e as ListWrapper};
//# sourceMappingURL=file-list.styles.js.map
