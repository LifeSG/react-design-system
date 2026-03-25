import o from"styled-components";import{lineClampCss as r}from"../shared/styles/index.js";import{Typography as e}from"../typography/index.js";import{V3_Colour as i,V3_Spacing as t,V3_Border as s,V3_Radius as n}from"../v3_theme/index.js";const p=o.li`
    display: flex;
    flex-direction: column;
`,c=o(e.LinkMD)`
    color: ${i.text};

    margin: 0 ${t["spacing-8"]};

    border: ${s.solid} transparent;
    border-width: ${t["spacing-8"]} ${t["spacing-8"]};

    border-radius: ${n.md};

    ${r(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${i["bg-hover"]};
        color: ${i.text};
    }

    &:focus-visible {
        outline: 2px solid ${i["focus-ring"]};
        outline-offset: 0;
    }
`;export{c as Link,p as MenuLinkDiv};
//# sourceMappingURL=menu-link.styles.js.map
