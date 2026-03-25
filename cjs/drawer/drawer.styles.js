"use strict";var i=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),o=require("../typography/index.js"),e=require("../v3_theme/index.js");function a(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var n=a(i);const d=i.css`
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${e.V3_Motion["duration-800"]};
        transition-timing-function: ${e.V3_Motion["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${e.V3_Motion["duration-800"]};
        transition-timing-function: ${e.V3_Motion["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }
`,r=n.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${e.V3_Colour.bg};
    box-shadow: ${e.V3_Shadow["lg-subtle"]};

    ${d}

    width: 40%;
    border-top-left-radius: ${e.V3_Radius.md};
    border-bottom-left-radius: ${e.V3_Radius.md};
    overflow: hidden;

    ${e.V3_MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${e.V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,s=n.default.div`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${e.V3_Spacing["spacing-16"]};
    padding: ${e.V3_Spacing["spacing-32"]} ${e.V3_Spacing["spacing-16"]}
        ${e.V3_Spacing["spacing-16"]}
        calc(${e.V3_Font.Spec["heading-lh-md"]} + ${e.V3_Spacing["spacing-32"]});
    background-color: ${e.V3_Colour.bg};
    border-bottom: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
        ${e.V3_Colour.border};

    ${e.V3_MediaQuery.MaxWidth.lg} {
        gap: ${e.V3_Spacing["spacing-8"]};
        padding: ${e.V3_Spacing["spacing-32"]} ${e.V3_Spacing["spacing-20"]}
            ${e.V3_Spacing["spacing-16"]}
            calc(${e.V3_Font.Spec["heading-lh-md"]} + ${e.V3_Spacing["spacing-24"]});
    }
`,c=n.default(t.ClickableIcon)`
    color: ${e.V3_Colour.icon};
    padding: 0;
    position: absolute;
    top: ${e.V3_Spacing["spacing-32"]};
    left: ${e.V3_Spacing["spacing-16"]};
    &:active,
    &:focus {
        color: ${e.V3_Colour["icon-hover"]};
    }

    svg {
        height: ${e.V3_Font.Spec["heading-lh-md"]};
        width: ${e.V3_Font.Spec["heading-lh-md"]};
    }
`,l=n.default(o.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,p=n.default.div`
    flex: 1;
    overflow-y: auto;
`;exports.CloseButton=c,exports.Container=r,exports.Content=p,exports.Header=s,exports.Heading=l;
//# sourceMappingURL=drawer.styles.js.map
