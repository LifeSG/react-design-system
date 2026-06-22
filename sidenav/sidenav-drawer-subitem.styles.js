import r from"styled-components";import{Radius as o,Font as e,Colour as t}from"../theme/index.js";import{BasicButton as d}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as m}from"../shared/styles/index.js";const i=r.li``,p=r(d)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${o.md};

    ${e["body-md-regular"]}
    color: ${t.text};
    ${m(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${t["bg-hover"]};
        color: ${t["text-hover"]};
    }
`;export{i as Container,p as LinkButton};
//# sourceMappingURL=sidenav-drawer-subitem.styles.js.map
