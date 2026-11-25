import r from"styled-components";import{Radius as o,Font as e,Colour as t}from"../theme/index.js";import{BasicButton as d}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as i}from"../shared/styles/index.js";const m=r.li``,p=r(d)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${o.md};
    cursor: pointer;

    ${e["body-md-regular"]}
    color: ${t.text};
    ${i(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${t["bg-hover"]};
        color: ${t["text-hover"]};
    }
`;export{m as Container,p as LinkButton};
//# sourceMappingURL=sidenav-drawer-subitem.styles.js.map
