"use strict";var e=require("styled-components"),t=require("../divider/divider.js"),i=require("../layout/index.js"),o=require("../typography/index.js"),a=require("../v3_theme/index.js"),n=require("../v3_theme/components/theme-helper.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=r(e);const l=d.default.footer`
    background: ${n.V3_ThemeFooter["footer-colour-bg"]};
`,c=d.default(o.Typography.LinkMD)`
    color: ${n.V3_ThemeFooter["footer-link-colour-text"]};

    &:hover {
        color: ${n.V3_ThemeFooter["footer-link-colour-text-hover"]};
    }
`,p=d.default(t.Divider)`
    width: 100%;
`,g=d.default(i.Layout.Content)`
    padding: ${a.V3_Spacing["spacing-64"]} 0;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        padding: ${a.V3_Spacing["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${a.V3_Spacing["spacing-32"]};
        }
    }
`,s=d.default.div`
    display: flex;
    width: fit-content;
    margin-right: ${a.V3_Spacing["spacing-64"]};

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`,u=d.default.div`
    display: flex;
    gap: ${a.V3_Spacing["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${a.V3_Spacing["spacing-32"]});

    ${a.V3_MediaQuery.MaxWidth.lg} {
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
            margin-bottom: ${a.V3_Spacing["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${a.V3_MediaQuery.MaxWidth.md} {
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

    ${a.V3_MediaQuery.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`,f=d.default(i.Layout.Content)`
    padding: ${a.V3_Spacing["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${a.V3_Spacing["spacing-32"]};
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        border-top: none;
        padding: ${a.V3_Spacing["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`,m=d.default.div`
    flex: 1 1 50%;
    display: flex;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`,y=d.default(m)`
    justify-content: flex-end;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        margin-top: ${a.V3_Spacing["spacing-16"]};
        justify-content: flex-start;
    }
`,_=d.default(o.Typography.BodyXS)`
    color: ${n.V3_ThemeFooter["footer-colour-text"]};
`,V=d.default(o.Typography.LinkXS)`
    color: ${n.V3_ThemeFooter["footer-disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${a.V3_Spacing["spacing-16"]};
    }

    &:hover {
        color: ${n.V3_ThemeFooter["footer-disclaimer-link-colour-text-hover"]};
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        margin-bottom: ${a.V3_Spacing["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        margin-bottom: ${a.V3_Spacing["spacing-8"]};
    }
`;exports.AddonSection=x,exports.BaseFooter=l,exports.BottomSection=f,exports.BottomSectionContent=m,exports.CopyrightSection=y,exports.CopyrightText=_,exports.DisclaimerTextLink=V,exports.FullWidthDivider=p,exports.LinkSection=h,exports.LinkSectionWrapper=u,exports.LogoSection=s,exports.StyledFooterLink=c,exports.TopSection=g;
//# sourceMappingURL=footer.style.js.map
