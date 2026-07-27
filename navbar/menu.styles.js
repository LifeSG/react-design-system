import e from"styled-components";import{lineClampCss as r}from"../shared/styles/index.js";import{Border as o,Colour as t,Spacing as i,Radius as s}from"../theme/index.js";import{Typography as d}from"../typography/typography.js";const l=e.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${o["width-040"]} solid ${t["border-selected"]};
`,a=e.li`
    width: 100%;
    display: flex;
`,n=e(d.LinkBL)`
    width: 100%;
    text-align: left;
    color: ${t.text};

    margin: 0 ${i["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${o.solid} transparent;
    border-width: ${i["spacing-12"]} ${i["spacing-8"]};
    border-radius: ${s.md};

    ${r(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${t["bg-hover"]};
        color: ${t.text};
    }
`;export{n as Link,a as MenuItem,l as MobileWrapper};
//# sourceMappingURL=menu.styles.js.map
