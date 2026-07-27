import o from"styled-components";import{lineClampCss as r}from"../shared/styles/index.js";import{Colour as e,Spacing as i,Border as t,Radius as s}from"../theme/index.js";import{Typography as p}from"../typography/typography.js";const n=o.li`
    display: flex;
    flex-direction: column;
`,c=o(p.LinkMD)`
    color: ${e.text};

    margin: 0 ${i["spacing-8"]};

    border: ${t.solid} transparent;
    border-width: ${i["spacing-8"]} ${i["spacing-8"]};

    border-radius: ${s.md};

    ${r(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${e["bg-hover"]};
        color: ${e.text};
    }

    &:focus-visible {
        outline: 2px solid ${e["focus-ring"]};
        outline-offset: 0;
    }
`;export{c as Link,n as MenuLinkDiv};
//# sourceMappingURL=menu-link.styles.js.map
