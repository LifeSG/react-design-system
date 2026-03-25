import o from"styled-components";import{Button as t}from"../button/button.js";import{ClickableIcon as i}from"../shared/clickable-icon/clickable-icon.js";import{V3_Spacing as r,V3_Colour as e,V3_Border as n}from"../v3_theme/index.js";const d=o.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,c=o(i)`
    padding: ${r["spacing-24"]} ${r["spacing-20"]};
    margin-right: auto;
    color: ${e.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${e["icon-hover"]};
    }
`,m=o.div`
    padding: ${r["spacing-24"]} ${r["spacing-20"]};
    background-color: ${e.bg};
    border-top: ${n["width-010"]} ${n.solid}
        ${e.border};
    ${o=>o.$insetBottom&&`padding-bottom: ${o.$insetBottom}px;`}
`,a=o(t.Default)`
    width: 100%;
`;export{d as FilterBody,a as FilterDoneButton,m as FilterFooter,c as FilterHeaderButton};
//# sourceMappingURL=filter.styles.js.map
