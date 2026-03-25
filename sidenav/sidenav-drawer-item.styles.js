import{ChevronUpIcon as r}from"@lifesg/react-icons/chevron-up";import{animated as e}from"@react-spring/web";import o,{css as t}from"styled-components";import{BasicButton as n}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as i}from"../shared/styles/index.js";import{V3_Radius as s,V3_Font as m,V3_Colour as d,V3_Motion as a}from"../v3_theme/index.js";const p=e(o.li``),l=o(n)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${s.md};

    ${m["body-md-semibold"]}
    color: ${d.text};

    ${r=>r.$noChildren?t`
                  &:hover,
                  &:focus {
                      background: ${d["bg-hover"]};
                      color: ${d["text-hover"]};
                  }
              `:t`
                  &:hover,
                  &:focus {
                      background: ${d["bg-hover-strong"]};
                  }
              `}
`,c=e(o.div`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`),f=o(r)`
    flex-shrink: 0;
    color: ${d.icon};
    transform: rotate(${r=>r.$expanded?0:180}deg);
    transition: transform ${a["duration-150"]}
        ${a["ease-default"]};
`,$=o.span`
    ${i(2)}
    text-align: left;
`,g=e(o.ul``);export{f as ChevronIcon,p as Container,g as DrawerContent,c as DrawerSubitemContainer,l as LinkButton,$ as TextElement};
//# sourceMappingURL=sidenav-drawer-item.styles.js.map
