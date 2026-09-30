import t from"styled-components";import{MediaQuery as o,Spacing as i}from"../theme/index.js";import{Typography as e}from"../typography/typography.js";import{ThemeFooter as r}from"../theme/components/theme-helper.js";const p=t.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${o.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,a=t(e.BodyMD)`
    margin-bottom: ${i["spacing-16"]};
    color: ${r["footer-colour-text"]};
`,m=t.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${i["spacing-16"]};
    column-gap: ${i["spacing-16"]};
`,l=t.a`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${o.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;export{m as AppButtonsWrapper,l as AppStoreLink,a as Label,p as Wrapper};
//# sourceMappingURL=footer-download-app.style.js.map
