import o from"styled-components";import{Colour as i,Spacing as t,Radius as r}from"../../theme/index.js";import{Typography as e}from"../../typography/typography.js";const n=o.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,p=o(e.BodyBL)`
    margin: 0;
`,s=o.li`
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        top: 0;
        background-color: ${o=>o.$isSelected?i["bg-primary"]:i["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${i["bg-hover-subtle"]};
    }
`,l=o.div`
    display: block;
    padding: ${t["spacing-16"]};
    padding-left: ${t["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${i["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${r.sm};
    }
`;export{n as Nav,s as NavItem,l as NavItemContent,p as TextLabel};
//# sourceMappingURL=local-nav-menu.styles.js.map
