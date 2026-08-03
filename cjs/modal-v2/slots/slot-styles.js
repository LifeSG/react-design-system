"use strict";var i=require("styled-components"),a=require("../../shared/clickable-icon/clickable-icon.js"),e=require("../../theme/index.js");function r(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var n=r(i);const t=n.default.div`
    width: 40rem;
    margin: ${e.Spacing["spacing-64"]} auto;
    background: ${e.Colour.bg};
    box-shadow: ${e.Shadow["xs-strong"]};
    border-radius: ${e.Radius.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${e.Breakpoint["xxl-margin"]}px * 2);

    ${e.MediaQuery.MaxWidth.xl} {
        max-width: calc(100% - ${e.Breakpoint["xl-margin"]}px * 2);
    }

    ${e.MediaQuery.MaxWidth.lg} {
        max-width: calc(100% - ${e.Breakpoint["lg-margin"]}px * 2);
    }

    ${e.MediaQuery.MaxWidth.md} {
        max-width: calc(100% - ${e.Breakpoint["md-margin"]}px * 2);
    }

    ${e.MediaQuery.MaxWidth.sm} {
        max-width: calc(100% - ${e.Breakpoint["sm-margin"]}px * 2);
    }

    ${e.MediaQuery.MaxWidth.xs} {
        max-width: calc(100% - ${e.Breakpoint["xs-margin"]}px * 2);
    }

    ${e.MediaQuery.MaxWidth.xxs} {
        max-width: calc(100% - ${e.Breakpoint["xxs-margin"]}px * 2);
    }
`,c=n.default.div`
    margin-right: ${e.Spacing["spacing-16"]};
    margin-left: auto;
    margin-top: ${e.Spacing["spacing-16"]};
    margin-bottom: ${e.Spacing["spacing-16"]};
`,g=n.default(a.ClickableIcon)`
    padding: 0;
    color: ${e.Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,o=n.default.div`
    margin-right: ${e.Spacing["spacing-64"]};
    margin-left: ${e.Spacing["spacing-64"]};

    ${e.MediaQuery.MaxWidth.sm} {
        margin-right: ${e.Spacing["spacing-20"]};
        margin-left: ${e.Spacing["spacing-20"]};
    }
`,d=n.default.div`
    margin-right: ${e.Spacing["spacing-64"]};
    margin-left: ${e.Spacing["spacing-64"]};

    ${e.MediaQuery.MaxWidth.sm} {
        margin-right: ${e.Spacing["spacing-20"]};
        margin-left: ${e.Spacing["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${e.Spacing["spacing-32"]};
    row-gap: ${e.Spacing["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${e.MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }
`,p=n.default.div`
    :where(& > ${o}:last-child) {
        margin-bottom: ${e.Spacing["spacing-64"]};
    }

    :where(& > ${d}:not(:first-child)) {
        margin-top: ${e.Spacing["spacing-32"]};
    }

    :where(& > ${d}:last-child) {
        margin-bottom: ${e.Spacing["spacing-64"]};
    }

    ${a=>a.$hasCloseButton?i.css`
                  :where(& > ${o}:first-child),
                  :where(& > ${d}:first-child) {
                      margin-top: 0;
                  }
              `:i.css`
                  :where(& > ${o}:first-child),
                  :where(& > ${d}:first-child) {
                      margin-top: ${e.Spacing["spacing-64"]};
                  }
              `}
`;exports.CloseButtonContainer=c,exports.ContentContainer=o,exports.FooterContainer=d,exports.ModalCard=t,exports.SlotSpacer=p,exports.StyledClickableIcon=g;
//# sourceMappingURL=slot-styles.js.map
