import i from"styled-components";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{V3_Colour as t,V3_Shadow as e,V3_Radius as r,V3_MediaQuery as n,V3_Spacing as s}from"../v3_theme/index.js";const a=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${t.bg};
    box-shadow: ${e["lg-strong"]};
    border-radius: ${r.lg};
    overflow: hidden;

    ${n.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,d=i(o)`
    position: absolute;
    top: var(--close-button-top-inset, ${s["spacing-16"]});
    right: var(--close-button-right-inset, ${s["spacing-16"]});
    padding: 0;
    color: ${t.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${n.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${s["spacing-20"]});
    }
`;export{a as Box,d as CloseButton};
//# sourceMappingURL=modal-box.styles.js.map
