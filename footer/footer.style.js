import i from"styled-components";import{Divider as t}from"../divider/divider.js";import{Layout as o}from"../layout/index.js";import{Typography as n}from"../typography/index.js";import{V3_Spacing as a,V3_MediaQuery as l}from"../v3_theme/index.js";import{V3_ThemeFooter as r}from"../v3_theme/components/theme-helper.js";const e=i.footer`
    background: ${r["footer-colour-bg"]};
`,d=i(n.LinkMD)`
    color: ${r["footer-link-colour-text"]};

    &:hover {
        color: ${r["footer-link-colour-text-hover"]};
    }
`,c=i(t)`
    width: 100%;
`,g=i(o.Content)`
    padding: ${a["spacing-64"]} 0;

    ${l.MaxWidth.lg} {
        padding: ${a["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${a["spacing-32"]};
        }
    }
`,m=i.div`
    display: flex;
    width: fit-content;
    margin-right: ${a["spacing-64"]};

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${l.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`,p=i.div`
    display: flex;
    gap: ${a["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${a["spacing-32"]});

    ${l.MaxWidth.lg} {
        max-width: 100%;
    }
`,s=i.ul`
    flex: 1 1 50%;
    list-style-type: none;

    &:nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        &:not(:last-child) {
            margin-bottom: ${a["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${l.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${l.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,h=i.div`
    flex: 0 1 33%;
    margin-left: auto;

    ${l.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`,f=i(o.Content)`
    padding: ${a["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${a["spacing-32"]};
    }

    ${l.MaxWidth.lg} {
        border-top: none;
        padding: ${a["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`,x=i.div`
    flex: 1 1 50%;
    display: flex;

    ${l.MaxWidth.lg} {
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`,$=i(x)`
    justify-content: flex-end;

    ${l.MaxWidth.lg} {
        margin-top: ${a["spacing-16"]};
        justify-content: flex-start;
    }
`,u=i(n.BodyXS)`
    color: ${r["footer-colour-text"]};
`,y=i(n.LinkXS)`
    color: ${r["footer-disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${a["spacing-16"]};
    }

    &:hover {
        color: ${r["footer-disclaimer-link-colour-text-hover"]};
    }

    ${l.MaxWidth.lg} {
        margin-bottom: ${a["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${l.MaxWidth.lg} {
        margin-bottom: ${a["spacing-8"]};
    }
`;export{h as AddonSection,e as BaseFooter,f as BottomSection,x as BottomSectionContent,$ as CopyrightSection,u as CopyrightText,y as DisclaimerTextLink,c as FullWidthDivider,s as LinkSection,p as LinkSectionWrapper,m as LogoSection,d as StyledFooterLink,g as TopSection};
//# sourceMappingURL=footer.style.js.map
