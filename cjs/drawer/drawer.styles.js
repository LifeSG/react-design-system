"use strict";var i=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),e=require("../theme/index.js"),o=require("../typography/typography.js");function a(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var n=a(i);const d=i.css`
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${e.Motion["duration-800"]};
        transition-timing-function: ${e.Motion["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${e.Motion["duration-800"]};
        transition-timing-function: ${e.Motion["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }
`,r=n.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${e.Colour.bg};
    box-shadow: ${e.Shadow["lg-subtle"]};

    ${d}

    width: 40%;
    border-top-left-radius: ${e.Radius.md};
    border-bottom-left-radius: ${e.Radius.md};
    overflow: hidden;

    ${e.MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${e.MediaQuery.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,s=n.default.div`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${e.Spacing["spacing-16"]};
    padding: ${e.Spacing["spacing-32"]} ${e.Spacing["spacing-16"]}
        ${e.Spacing["spacing-16"]}
        calc(${e.Font.Spec["heading-lh-md"]} + ${e.Spacing["spacing-32"]});
    background-color: ${e.Colour.bg};
    border-bottom: ${e.Border["width-010"]} ${e.Border.solid} ${e.Colour.border};

    ${t=>t.$stacked&&i.css`
            /* Stack the call-to-action below the heading when the drawer is too
               narrow to fit both on one line. */
            flex-direction: column;
            align-items: stretch;
            gap: ${e.Spacing["spacing-16"]};
        `}

    ${e.MediaQuery.MaxWidth.lg} {
        padding: ${e.Spacing["spacing-32"]} ${e.Spacing["spacing-20"]}
            ${e.Spacing["spacing-16"]}
            calc(${e.Font.Spec["heading-lh-md"]} + ${e.Spacing["spacing-24"]});
    }
`,l=n.default.div`
    display: flex;
    /* Flush right, beside the heading. */
    margin-left: auto;

    ${t=>t.$stacked&&i.css`
            /* When stacked, flush left so the buttons line up with the heading
               (the header's left padding already clears the close icon). */
            margin-left: 0;
        `}
`,c=n.default(t.ClickableIcon)`
    color: ${e.Colour.icon};
    padding: 0;
    position: absolute;
    top: ${e.Spacing["spacing-32"]};
    left: ${e.Spacing["spacing-16"]};
    &:active,
    &:focus {
        color: ${e.Colour["icon-hover"]};
    }

    svg {
        height: ${e.Font.Spec["heading-lh-md"]};
        width: ${e.Font.Spec["heading-lh-md"]};
    }
`,p=n.default(o.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,g=n.default.div`
    flex: 1;
    overflow-y: auto;
`;exports.CallToAction=l,exports.CloseButton=c,exports.Container=r,exports.Content=g,exports.Header=s,exports.Heading=p;
//# sourceMappingURL=drawer.styles.js.map
