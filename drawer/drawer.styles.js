import i,{css as t}from"styled-components";import{ClickableIcon as e}from"../shared/clickable-icon/clickable-icon.js";import{Motion as o,Colour as a,Shadow as n,Radius as d,MediaQuery as s,Spacing as r,Font as l,Border as c}from"../theme/index.js";import{Typography as h}from"../typography/typography.js";const p=t`
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${o["duration-800"]};
        transition-timing-function: ${o["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${o["duration-800"]};
        transition-timing-function: ${o["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }
`,g=i.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${a.bg};
    box-shadow: ${n["lg-subtle"]};

    ${p}

    width: 40%;
    border-top-left-radius: ${d.md};
    border-bottom-left-radius: ${d.md};
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
    gap: ${r["spacing-16"]};
    padding: ${r["spacing-32"]} ${r["spacing-16"]}
        ${r["spacing-16"]}
        calc(${l.Spec["heading-lh-md"]} + ${r["spacing-32"]});
    background-color: ${a.bg};
    border-bottom: ${c["width-010"]} ${c.solid} ${a.border};

    ${i=>i.$stacked&&t`
            /* Stack the call-to-action below the heading when the drawer is too
               narrow to fit both on one line. */
            flex-direction: column;
            align-items: stretch;
            gap: ${r["spacing-16"]};
        `}

    ${s.MaxWidth.lg} {
        padding: ${r["spacing-32"]} ${r["spacing-20"]}
            ${r["spacing-16"]}
            calc(${l.Spec["heading-lh-md"]} + ${r["spacing-24"]});
    }
`,f=i.div`
    display: flex;
    /* Flush right, beside the heading. */
    margin-left: auto;

    ${i=>i.$stacked&&t`
            /* When stacked, flush left so the buttons line up with the heading
               (the header's left padding already clears the close icon). */
            margin-left: 0;
        `}
`,m=i(e)`
    color: ${a.icon};
    padding: 0;
    position: absolute;
    top: ${r["spacing-32"]};
    left: ${r["spacing-16"]};
    &:active,
    &:focus {
        color: ${a["icon-hover"]};
    }

    svg {
        height: ${l.Spec["heading-lh-md"]};
        width: ${l.Spec["heading-lh-md"]};
    }
`,b=i(h.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,u=i.div`
    flex: 1;
    overflow-y: auto;
`;export{f as CallToAction,m as CloseButton,g as Container,u as Content,$ as Header,b as Heading};
//# sourceMappingURL=drawer.styles.js.map
