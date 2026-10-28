"use strict";var e=require("styled-components"),t=require("../theme/index.js"),i=require("../typography/typography.js"),o=require("../layout/index.js"),a=require("../divider/divider.js"),n=require("../theme/components/theme-helper.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=r(e);const l=d.default.footer`
    background: ${n.ThemeFooter["footer-colour-bg"]};
`,c=d.default(i.Typography.LinkMD)`
    color: ${n.ThemeFooter["footer-link-colour-text"]};

    &:hover {
        color: ${n.ThemeFooter["footer-link-colour-text-hover"]};
    }
`,p=d.default(a.Divider)`
    width: 100%;
`,g=d.default(o.Layout.Content)`
    padding: ${t.Spacing["spacing-64"]} 0;

    ${t.MediaQuery.MaxWidth.lg} {
        padding: ${t.Spacing["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${t.Spacing["spacing-32"]};
        }
    }
`,s=d.default.div`
    display: flex;
    width: fit-content;
    margin-right: ${t.Spacing["spacing-64"]};

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${t.MediaQuery.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`,u=d.default.div`
    display: flex;
    gap: ${t.Spacing["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${t.Spacing["spacing-32"]});

    ${t.MediaQuery.MaxWidth.lg} {
        max-width: 100%;
    }
`,h=d.default.ul`
    flex: 1 1 50%;
    list-style-type: none;

    &:nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        &:not(:last-child) {
            margin-bottom: ${t.Spacing["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${t.MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${t.MediaQuery.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,x=d.default.div`
    flex: 0 1 33%;
    margin-left: auto;

    ${t.MediaQuery.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`,f=d.default(o.Layout.Content)`
    padding: ${t.Spacing["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${t.Spacing["spacing-32"]};
    }

    ${t.MediaQuery.MaxWidth.lg} {
        border-top: none;
        padding: ${t.Spacing["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`,m=d.default.div`
    flex: 1 1 50%;
    display: flex;

    ${t.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`,y=d.default(m)`
    justify-content: flex-end;

    ${t.MediaQuery.MaxWidth.lg} {
        margin-top: ${t.Spacing["spacing-16"]};
        justify-content: flex-start;
    }
`,$=d.default(i.Typography.BodyXS)`
    color: ${n.ThemeFooter["footer-colour-text"]};
`,S=d.default(i.Typography.LinkXS)`
    color: ${n.ThemeFooter["footer-disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${t.Spacing["spacing-16"]};
    }

    &:hover {
        color: ${n.ThemeFooter["footer-disclaimer-link-colour-text-hover"]};
    }

    ${t.MediaQuery.MaxWidth.lg} {
        margin-bottom: ${t.Spacing["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${t.MediaQuery.MaxWidth.lg} {
        margin-bottom: ${t.Spacing["spacing-8"]};
    }
`;exports.AddonSection=x,exports.BaseFooter=l,exports.BottomSection=f,exports.BottomSectionContent=m,exports.CopyrightSection=y,exports.CopyrightText=$,exports.DisclaimerTextLink=S,exports.FullWidthDivider=p,exports.LinkSection=h,exports.LinkSectionWrapper=u,exports.LogoSection=s,exports.StyledFooterLink=c,exports.TopSection=g;
//# sourceMappingURL=footer.style.js.map
