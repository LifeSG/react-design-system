import i,{css as t}from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{Motion as a,Colour as e,Shadow as n,Radius as d,MediaQuery as r,Spacing as s,Font as l,Border as p}from"../theme/index.js";import{Typography as c}from"../typography/typography.js";const g=t`
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${a["duration-800"]};
        transition-timing-function: ${a["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${a["duration-800"]};
        transition-timing-function: ${a["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }
`,h=i.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${e.bg};
    box-shadow: ${n["lg-subtle"]};

    ${g}

    width: 40%;
    border-top-left-radius: ${d.md};
    border-bottom-left-radius: ${d.md};
    overflow: hidden;

    ${r.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${r.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,$=i.div`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${s["spacing-16"]};
    padding: ${s["spacing-32"]} ${s["spacing-16"]}
        ${s["spacing-16"]}
        calc(${l.Spec["heading-lh-md"]} + ${s["spacing-32"]});
    background-color: ${e.bg};
    border-bottom: ${p["width-010"]} ${p.solid} ${e.border};

    ${r.MaxWidth.lg} {
        gap: ${s["spacing-8"]};
        padding: ${s["spacing-32"]} ${s["spacing-20"]}
            ${s["spacing-16"]}
            calc(${l.Spec["heading-lh-md"]} + ${s["spacing-24"]});
    }
`,m=i(o)`
    color: ${e.icon};
    padding: 0;
    position: absolute;
    top: ${s["spacing-32"]};
    left: ${s["spacing-16"]};
    &:active,
    &:focus {
        color: ${e["icon-hover"]};
    }

    svg {
        height: ${l.Spec["heading-lh-md"]};
        width: ${l.Spec["heading-lh-md"]};
    }
`,b=i(c.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,f=i.div`
    flex: 1;
    overflow-y: auto;
`;export{m as CloseButton,h as Container,f as Content,$ as Header,b as Heading};
//# sourceMappingURL=drawer.styles.js.map
