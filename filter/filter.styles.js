import o from"styled-components";import{Button as t}from"../button/button.js";import{ClickableIcon as i}from"../shared/clickable-icon/clickable-icon.js";import{Colour as r,Spacing as e,Border as n}from"../theme/index.js";const c=o.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    color: ${r.text};
`,d=o(i)`
    padding: ${e["spacing-24"]} ${e["spacing-20"]};
    margin-right: auto;
    color: ${r.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${r["icon-hover"]};
    }
`,m=o.div`
    padding: ${e["spacing-24"]} ${e["spacing-20"]};
    background-color: ${r.bg};
    border-top: ${n["width-010"]} ${n.solid} ${r.border};
    ${o=>o.$insetBottom&&`padding-bottom: ${o.$insetBottom}px;`}
`,a=o(t.Default)`
    width: 100%;
`;export{c as FilterBody,a as FilterDoneButton,m as FilterFooter,d as FilterHeaderButton};
//# sourceMappingURL=filter.styles.js.map
