"use strict";var e=require("styled-components"),i=require("../shared/clickable-icon/clickable-icon.js"),t=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e);const a=r.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${t.Colour.bg};
    box-shadow: ${t.Shadow["lg-strong"]};
    border-radius: ${t.Radius.lg};
    overflow: hidden;

    ${t.MediaQuery.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,n=r.default(i.ClickableIcon)`
    position: absolute;
    top: var(--close-button-top-inset, ${t.Spacing["spacing-16"]});
    right: var(--close-button-right-inset, ${t.Spacing["spacing-16"]});
    padding: 0;
    color: ${t.Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${t.MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${t.Spacing["spacing-20"]});
    }
`;exports.Box=a,exports.CloseButton=n;
//# sourceMappingURL=modal-box.styles.js.map
