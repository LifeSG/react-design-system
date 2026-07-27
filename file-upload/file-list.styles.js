import t from"styled-components";import{Spacing as o}from"../theme/index.js";const n=t.ul`
    list-style-type: none;
    margin-bottom: ${t=>t.$readOnly?"0":o["spacing-32"]};
`,e=t.li`
    &:not(:last-child) {
        margin-bottom: ${o["spacing-16"]};
    }

    ul {
        list-style-type: none;
    }
`;export{e as EditableItemsContainer,n as ListWrapper};
//# sourceMappingURL=file-list.styles.js.map
