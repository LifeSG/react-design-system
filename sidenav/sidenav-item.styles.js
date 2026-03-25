import r,{css as e}from"styled-components";import{BasicButton as o}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as t}from"../shared/styles/index.js";import{Typography as i}from"../typography/index.js";import{V3_Radius as d,V3_Colour as s,V3_Motion as n,V3_Font as a,V3_Border as l,V3_Shadow as m}from"../v3_theme/index.js";const p=r.li`
    width: 100%;
`,$=r.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${d.md};
    color: ${s["icon-primary"]};
    transition: ${n["duration-250"]} ${n["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,c=r(i.BodyXS)`
    ${t(2)}
    margin-top: 0.25rem;
    transition: ${n["duration-250"]} ${n["ease-default"]};
`,h=r(o)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${$} {
            background-color: ${s["bg-hover"]};
        }

        ${c} {
            ${a["body-xs-semibold"]}
            color: ${s["text-hover"]};
        }
    }

    ${r=>r.$highlight&&e`
            ${$} {
                background-color: ${s["bg-hover"]};
            }

            ${c} {
                ${a["body-xs-semibold"]}
                color: ${s["text-selected"]};
            }
        `}
`,u=r.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 15rem;
    height: 100%;
    padding: 1rem 0.5rem;
    background-color: ${s["bg-primary-subtlest"]};
    border-top-right-radius: ${d.md};
    border-bottom-right-radius: ${d.md};
    border: ${l["width-010"]} ${l.solid} ${s.border};
    ${r=>r.$showShadow&&e`
            box-shadow: ${m["xs-subtle"]};
            clip-path: inset(0 -6px 0 0);
        `}
`;export{p as Container,h as DefaultButton,u as DesktopDrawer,$ as IconContainer,c as TitleText};
//# sourceMappingURL=sidenav-item.styles.js.map
