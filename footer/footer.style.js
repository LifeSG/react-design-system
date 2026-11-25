import i from"styled-components";import{Spacing as t,MediaQuery as o}from"../theme/index.js";import{Typography as n}from"../typography/typography.js";import{Layout as a}from"../layout/index.js";import{Divider as l}from"../divider/divider.js";import{ThemeFooter as r}from"../theme/components/theme-helper.js";const e=i.footer`
    background: ${r["footer-colour-bg"]};
`,d=i(n.LinkMD)`
    color: ${r["footer-link-colour-text"]};

    &:hover {
        color: ${r["footer-link-colour-text-hover"]};
    }
`,c=i(l)`
    width: 100%;
`,g=i(a.Content)`
    padding: ${t["spacing-64"]} 0;

    ${o.MaxWidth.lg} {
        padding: ${t["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${t["spacing-32"]};
        }
    }
`,p=i.div`
    display: flex;
    width: fit-content;
    margin-right: ${t["spacing-64"]};

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${o.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`,m=i.div`
    display: flex;
    gap: ${t["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${t["spacing-32"]});

    ${o.MaxWidth.lg} {
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
            margin-bottom: ${t["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${o.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${o.MaxWidth.md} {
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

    ${o.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`,f=i(a.Content)`
    padding: ${t["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${t["spacing-32"]};
    }

    ${o.MaxWidth.lg} {
        border-top: none;
        padding: ${t["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`,x=i.div`
    flex: 1 1 50%;
    display: flex;

    ${o.MaxWidth.lg} {
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`,$=i(x)`
    justify-content: flex-end;

    ${o.MaxWidth.lg} {
        margin-top: ${t["spacing-16"]};
        justify-content: flex-start;
    }
`,u=i(n.BodyXS)`
    color: ${r["footer-colour-text"]};
`,y=i(n.LinkXS)`
    color: ${r["footer-disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${t["spacing-16"]};
    }

    &:hover {
        color: ${r["footer-disclaimer-link-colour-text-hover"]};
    }

    ${o.MaxWidth.lg} {
        margin-bottom: ${t["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${o.MaxWidth.lg} {
        margin-bottom: ${t["spacing-8"]};
    }
`;export{h as AddonSection,e as BaseFooter,f as BottomSection,x as BottomSectionContent,$ as CopyrightSection,u as CopyrightText,y as DisclaimerTextLink,c as FullWidthDivider,s as LinkSection,m as LinkSectionWrapper,p as LogoSection,d as StyledFooterLink,g as TopSection};
//# sourceMappingURL=footer.style.js.map
