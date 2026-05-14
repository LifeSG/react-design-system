import o from"styled-components";import{Typography as i}from"../../typography/index.js";import{V3_Colour as t,V3_Spacing as e,V3_Radius as r}from"../../v3_theme/index.js";const n=o.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,s=o(i.BodyBL)`
    margin: 0;
`,p=o.li`
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
        background-color: ${o=>o.$isSelected?t["bg-primary"]:t["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${t["bg-hover-subtle"]};
    }
`,l=o.div`
    display: block;
    padding: ${e["spacing-16"]};
    padding-left: ${e["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${t["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${r.sm};
    }
`;export{n as Nav,p as NavItem,l as NavItemContent,s as TextLabel};
//# sourceMappingURL=local-nav-menu.styles.js.map
