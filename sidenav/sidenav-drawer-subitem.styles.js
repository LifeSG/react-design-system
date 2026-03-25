import r from"styled-components";import{BasicButton as o}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as e}from"../shared/styles/index.js";import{V3_Radius as t,V3_Font as d,V3_Colour as m}from"../v3_theme/index.js";const i=r.li``,p=r(o)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${t.md};

    ${d["body-md-regular"]}
    color: ${m.text};
    ${e(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${m["bg-hover"]};
        color: ${m["text-hover"]};
    }
`;export{i as Container,p as LinkButton};
//# sourceMappingURL=sidenav-drawer-subitem.styles.js.map
