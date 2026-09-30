import i from"styled-components";import{Spacing as e,Font as n,Colour as t,Radius as o}from"../../theme/index.js";import{Typography as l}from"../../typography/typography.js";const s=i.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,a=i(l.BodyBL)`
    margin: 0;
`,r=i.span`
    display: flex;
    align-items: center;
    gap: ${e["spacing-8"]};
    width: 100%;
`,p=i.span`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    min-height: ${n.Spec["body-lh-baseline"]};
`,d=i.span`
    display: inline-flex;
    align-items: center;
    margin-left: auto;
`,g=i.li`
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
        background-color: ${i=>i.$isSelected?t["bg-primary"]:t["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${t["bg-hover-subtle"]};
    }
`,c=i.div`
    display: block;
    padding: ${e["spacing-16"]};
    padding-left: ${e["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${t["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${o.sm};
    }
`;export{p as LeftAddon,s as Nav,g as NavItem,c as NavItemContent,d as RightAddon,a as TextLabel,r as TitleContainer};
//# sourceMappingURL=local-nav-menu.styles.js.map
