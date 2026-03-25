import i,{css as a}from"styled-components";import{ClickableIcon as r}from"../../shared/clickable-icon/clickable-icon.js";import{V3_Spacing as t,V3_Colour as n,V3_Shadow as g,V3_Radius as m,V3_Breakpoint as c,V3_MediaQuery as s}from"../../v3_theme/index.js";const e=i.div`
    width: 40rem;
    margin: ${t["spacing-64"]} auto;
    background: ${n.bg};
    box-shadow: ${g["xs-strong"]};
    border-radius: ${m.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${c["xxl-margin"]}px * 2);

    ${s.MaxWidth.xl} {
        max-width: calc(100% - ${c["xl-margin"]}px * 2);
    }

    ${s.MaxWidth.lg} {
        max-width: calc(100% - ${c["lg-margin"]}px * 2);
    }

    ${s.MaxWidth.md} {
        max-width: calc(100% - ${c["md-margin"]}px * 2);
    }

    ${s.MaxWidth.sm} {
        max-width: calc(100% - ${c["sm-margin"]}px * 2);
    }

    ${s.MaxWidth.xs} {
        max-width: calc(100% - ${c["xs-margin"]}px * 2);
    }

    ${s.MaxWidth.xxs} {
        max-width: calc(100% - ${c["xxs-margin"]}px * 2);
    }
`,d=i.div`
    margin-right: ${t["spacing-16"]};
    margin-left: auto;
    margin-top: ${t["spacing-16"]};
    margin-bottom: ${t["spacing-16"]};
`,$=i(r)`
    padding: 0;
    color: ${n.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,o=i.div`
    margin-right: ${t["spacing-64"]};
    margin-left: ${t["spacing-64"]};

    ${s.MaxWidth.sm} {
        margin-right: ${t["spacing-20"]};
        margin-left: ${t["spacing-20"]};
    }
`,l=i.div`
    margin-right: ${t["spacing-64"]};
    margin-left: ${t["spacing-64"]};

    ${s.MaxWidth.sm} {
        margin-right: ${t["spacing-20"]};
        margin-left: ${t["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${t["spacing-32"]};
    row-gap: ${t["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${s.MaxWidth.md} {
        flex-direction: column;
    }
`,h=i.div`
    :where(& > ${o}:last-child) {
        margin-bottom: ${t["spacing-64"]};
    }

    :where(& > ${l}:not(:first-child)) {
        margin-top: ${t["spacing-32"]};
    }

    :where(& > ${l}:last-child) {
        margin-bottom: ${t["spacing-64"]};
    }

    ${i=>i.$hasCloseButton?a`
                  :where(& > ${o}:first-child),
                  :where(& > ${l}:first-child) {
                      margin-top: 0;
                  }
              `:a`
                  :where(& > ${o}:first-child),
                  :where(& > ${l}:first-child) {
                      margin-top: ${t["spacing-64"]};
                  }
              `}
`;export{d as CloseButtonContainer,o as ContentContainer,l as FooterContainer,e as ModalCard,h as SlotSpacer,$ as StyledClickableIcon};
//# sourceMappingURL=slot-styles.js.map
