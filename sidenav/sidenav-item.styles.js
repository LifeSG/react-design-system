import r,{css as o}from"styled-components";import{BasicButton as e}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as t}from"../shared/styles/index.js";import{Radius as i,Colour as d,Motion as s,Font as n,Border as a,Shadow as l}from"../theme/index.js";import{Typography as m}from"../typography/typography.js";const p=r.li`
    width: 100%;
`,$=r.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${i.md};
    color: ${d["icon-primary"]};
    transition: ${s["duration-250"]} ${s["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,h=r(m.BodyXS)`
    ${t(2)}
    margin-top: 0.25rem;
    transition: ${s["duration-250"]} ${s["ease-default"]};
`,c=r(e)`
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
            background-color: ${d["bg-hover"]};
        }

        ${h} {
            ${n["body-xs-semibold"]}
            color: ${d["text-hover"]};
        }
    }

    ${r=>r.$highlight&&o`
            ${$} {
                background-color: ${d["bg-hover"]};
            }

            ${h} {
                ${n["body-xs-semibold"]}
                color: ${d["text-selected"]};
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
    background-color: ${d["bg-primary-subtlest"]};
    border-top-right-radius: ${i.md};
    border-bottom-right-radius: ${i.md};
    border: ${a["width-010"]} ${a.solid} ${d.border};
    ${r=>r.$showShadow&&o`
            box-shadow: ${l["xs-subtle"]};
            clip-path: inset(0 -6px 0 0);
        `}
`;export{p as Container,c as DefaultButton,u as DesktopDrawer,$ as IconContainer,h as TitleText};
//# sourceMappingURL=sidenav-item.styles.js.map
