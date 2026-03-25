import t from"styled-components";import{Typography as o}from"../typography/index.js";import{V3_MediaQuery as i,V3_Spacing as e}from"../v3_theme/index.js";import{V3_ThemeFooter as r}from"../v3_theme/components/theme-helper.js";const m=t.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${i.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,a=t(o.BodyMD)`
    margin-bottom: ${e["spacing-16"]};
    color: ${r["footer-colour-text"]};
`,p=t.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${e["spacing-16"]};
    column-gap: ${e["spacing-16"]};
`,n=t.a`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${i.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;export{p as AppButtonsWrapper,n as AppStoreLink,a as Label,m as Wrapper};
//# sourceMappingURL=footer-download-app.style.js.map
