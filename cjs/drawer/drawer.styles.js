"use strict";var i=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),o=require("../theme/index.js"),e=require("../typography/typography.js");function a(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var n=a(i);const d=i.css`
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${o.Motion["duration-800"]};
        transition-timing-function: ${o.Motion["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${o.Motion["duration-800"]};
        transition-timing-function: ${o.Motion["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }
`,r=n.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${o.Colour.bg};
    box-shadow: ${o.Shadow["lg-subtle"]};

    ${d}

    width: 40%;
    border-top-left-radius: ${o.Radius.md};
    border-bottom-left-radius: ${o.Radius.md};
    overflow: hidden;

    ${o.MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${o.MediaQuery.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,s=n.default.div`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${o.Spacing["spacing-16"]};
    padding: ${o.Spacing["spacing-32"]} ${o.Spacing["spacing-16"]}
        ${o.Spacing["spacing-16"]}
        calc(${o.Font.Spec["heading-lh-md"]} + ${o.Spacing["spacing-32"]});
    background-color: ${o.Colour.bg};
    border-bottom: ${o.Border["width-010"]} ${o.Border.solid} ${o.Colour.border};

    ${o.MediaQuery.MaxWidth.lg} {
        gap: ${o.Spacing["spacing-8"]};
        padding: ${o.Spacing["spacing-32"]} ${o.Spacing["spacing-20"]}
            ${o.Spacing["spacing-16"]}
            calc(${o.Font.Spec["heading-lh-md"]} + ${o.Spacing["spacing-24"]});
    }
`,c=n.default(t.ClickableIcon)`
    color: ${o.Colour.icon};
    padding: 0;
    position: absolute;
    top: ${o.Spacing["spacing-32"]};
    left: ${o.Spacing["spacing-16"]};
    &:active,
    &:focus {
        color: ${o.Colour["icon-hover"]};
    }

    svg {
        height: ${o.Font.Spec["heading-lh-md"]};
        width: ${o.Font.Spec["heading-lh-md"]};
    }
`,l=n.default(e.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,p=n.default.div`
    flex: 1;
    overflow-y: auto;
`;exports.CloseButton=c,exports.Container=r,exports.Content=p,exports.Header=s,exports.Heading=l;
//# sourceMappingURL=drawer.styles.js.map
