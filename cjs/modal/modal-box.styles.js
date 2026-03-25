"use strict";var e=require("styled-components"),i=require("../shared/clickable-icon/clickable-icon.js"),t=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e);const a=r.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${t.V3_Colour.bg};
    box-shadow: ${t.V3_Shadow["lg-strong"]};
    border-radius: ${t.V3_Radius.lg};
    overflow: hidden;

    ${t.V3_MediaQuery.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,n=r.default(i.ClickableIcon)`
    position: absolute;
    top: var(--close-button-top-inset, ${t.V3_Spacing["spacing-16"]});
    right: var(--close-button-right-inset, ${t.V3_Spacing["spacing-16"]});
    padding: 0;
    color: ${t.V3_Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${t.V3_MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${t.V3_Spacing["spacing-20"]});
    }
`;exports.Box=a,exports.CloseButton=n;
//# sourceMappingURL=modal-box.styles.js.map
