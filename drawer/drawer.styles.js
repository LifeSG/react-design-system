import i,{css as t}from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{Typography as e}from"../typography/index.js";import{V3_Motion as n,V3_Colour as a,V3_Shadow as d,V3_Radius as r,V3_MediaQuery as s,V3_Spacing as l,V3_Font as c,V3_Border as p}from"../v3_theme/index.js";const g=t`
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${n["duration-800"]};
        transition-timing-function: ${n["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${n["duration-800"]};
        transition-timing-function: ${n["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }
`,h=i.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${a.bg};
    box-shadow: ${d["lg-subtle"]};

    ${g}

    width: 40%;
    border-top-left-radius: ${r.md};
    border-bottom-left-radius: ${r.md};
    overflow: hidden;

    ${s.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${s.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,$=i.div`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${l["spacing-16"]};
    padding: ${l["spacing-32"]} ${l["spacing-16"]}
        ${l["spacing-16"]}
        calc(${c.Spec["heading-lh-md"]} + ${l["spacing-32"]});
    background-color: ${a.bg};
    border-bottom: ${p["width-010"]} ${p.solid}
        ${a.border};

    ${s.MaxWidth.lg} {
        gap: ${l["spacing-8"]};
        padding: ${l["spacing-32"]} ${l["spacing-20"]}
            ${l["spacing-16"]}
            calc(${c.Spec["heading-lh-md"]} + ${l["spacing-24"]});
    }
`,m=i(o)`
    color: ${a.icon};
    padding: 0;
    position: absolute;
    top: ${l["spacing-32"]};
    left: ${l["spacing-16"]};
    &:active,
    &:focus {
        color: ${a["icon-hover"]};
    }

    svg {
        height: ${c.Spec["heading-lh-md"]};
        width: ${c.Spec["heading-lh-md"]};
    }
`,b=i(e.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,f=i.div`
    flex: 1;
    overflow-y: auto;
`;export{m as CloseButton,h as Container,f as Content,$ as Header,b as Heading};
//# sourceMappingURL=drawer.styles.js.map
