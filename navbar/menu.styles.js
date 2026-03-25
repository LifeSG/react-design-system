import e from"styled-components";import{lineClampCss as r}from"../shared/styles/index.js";import{Typography as i}from"../typography/index.js";import{V3_Border as o,V3_Colour as t,V3_Spacing as s,V3_Radius as d}from"../v3_theme/index.js";const l=e.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${o["width-040"]} solid ${t["border-selected"]};
`,n=e.li`
    width: 100%;
    display: flex;
`,a=e(i.LinkBL)`
    width: 100%;
    text-align: left;
    color: ${t.text};

    margin: 0 ${s["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${o.solid} transparent;
    border-width: ${s["spacing-12"]} ${s["spacing-8"]};
    border-radius: ${d.md};

    ${r(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${t["bg-hover"]};
        color: ${t.text};
    }
`;export{a as Link,n as MenuItem,l as MobileWrapper};
//# sourceMappingURL=menu.styles.js.map
