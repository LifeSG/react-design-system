"use strict";var i=require("styled-components"),a=require("../../shared/clickable-icon/clickable-icon.js"),e=require("../../v3_theme/index.js");function r(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var n=r(i);const t=n.default.div`
    width: 40rem;
    margin: ${e.V3_Spacing["spacing-64"]} auto;
    background: ${e.V3_Colour.bg};
    box-shadow: ${e.V3_Shadow["xs-strong"]};
    border-radius: ${e.V3_Radius.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${e.V3_Breakpoint["xxl-margin"]}px * 2);

    ${e.V3_MediaQuery.MaxWidth.xl} {
        max-width: calc(100% - ${e.V3_Breakpoint["xl-margin"]}px * 2);
    }

    ${e.V3_MediaQuery.MaxWidth.lg} {
        max-width: calc(100% - ${e.V3_Breakpoint["lg-margin"]}px * 2);
    }

    ${e.V3_MediaQuery.MaxWidth.md} {
        max-width: calc(100% - ${e.V3_Breakpoint["md-margin"]}px * 2);
    }

    ${e.V3_MediaQuery.MaxWidth.sm} {
        max-width: calc(100% - ${e.V3_Breakpoint["sm-margin"]}px * 2);
    }

    ${e.V3_MediaQuery.MaxWidth.xs} {
        max-width: calc(100% - ${e.V3_Breakpoint["xs-margin"]}px * 2);
    }

    ${e.V3_MediaQuery.MaxWidth.xxs} {
        max-width: calc(100% - ${e.V3_Breakpoint["xxs-margin"]}px * 2);
    }
`,c=n.default.div`
    margin-right: ${e.V3_Spacing["spacing-16"]};
    margin-left: auto;
    margin-top: ${e.V3_Spacing["spacing-16"]};
    margin-bottom: ${e.V3_Spacing["spacing-16"]};
`,g=n.default(a.ClickableIcon)`
    padding: 0;
    color: ${e.V3_Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,o=n.default.div`
    margin-right: ${e.V3_Spacing["spacing-64"]};
    margin-left: ${e.V3_Spacing["spacing-64"]};

    ${e.V3_MediaQuery.MaxWidth.sm} {
        margin-right: ${e.V3_Spacing["spacing-20"]};
        margin-left: ${e.V3_Spacing["spacing-20"]};
    }
`,d=n.default.div`
    margin-right: ${e.V3_Spacing["spacing-64"]};
    margin-left: ${e.V3_Spacing["spacing-64"]};

    ${e.V3_MediaQuery.MaxWidth.sm} {
        margin-right: ${e.V3_Spacing["spacing-20"]};
        margin-left: ${e.V3_Spacing["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${e.V3_Spacing["spacing-32"]};
    row-gap: ${e.V3_Spacing["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${e.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }
`,p=n.default.div`
    :where(& > ${o}:last-child) {
        margin-bottom: ${e.V3_Spacing["spacing-64"]};
    }

    :where(& > ${d}:not(:first-child)) {
        margin-top: ${e.V3_Spacing["spacing-32"]};
    }

    :where(& > ${d}:last-child) {
        margin-bottom: ${e.V3_Spacing["spacing-64"]};
    }

    ${a=>a.$hasCloseButton?i.css`
                  :where(& > ${o}:first-child),
                  :where(& > ${d}:first-child) {
                      margin-top: 0;
                  }
              `:i.css`
                  :where(& > ${o}:first-child),
                  :where(& > ${d}:first-child) {
                      margin-top: ${e.V3_Spacing["spacing-64"]};
                  }
              `}
`;exports.CloseButtonContainer=c,exports.ContentContainer=o,exports.FooterContainer=d,exports.ModalCard=t,exports.SlotSpacer=p,exports.StyledClickableIcon=g;
//# sourceMappingURL=slot-styles.js.map
