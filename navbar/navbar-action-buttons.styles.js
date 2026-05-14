import i,{css as t}from"styled-components";import{Button as n}from"../button/button.js";import{Typography as a}from"../typography/index.js";import{V3_Spacing as e,V3_MediaQuery as l}from"../v3_theme/index.js";const o=i.ul`
    display: flex;
    list-style: none;
    margin-left: ${e["spacing-64"]};
    flex-shrink: 0;

    ${l.MaxWidth.lg} {
        display: none;
    }
`,s=i.ul`
    display: none;

    ${l.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${e["spacing-64"]};
        flex-shrink: 0;
    }
`,d=i.ul`
    display: none;
    list-style: none;

    ${l.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${e["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${l.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,m=i.li`
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-right: ${e["spacing-16"]};
    }

    ${l.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${e["spacing-16"]};
        justify-content: center;

        &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${i=>i.$mobile?e["spacing-16"]:"0"};
        }
    }

    ${l.MaxWidth.sm} {
        ${i=>{if(i.$mobile)return t`
                    padding: 0 ${e["spacing-16"]};
                `}}
    }
`,g=i(n.Small)`
    ${l.MaxWidth.lg} {
        width: 100%;
    }
`,p=i.div`
    display: none;

    ${l.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${e["spacing-40"]};
    }
`,r=i(a.BodyMD)`
    margin-bottom: ${e["spacing-8"]};
`,h=i.div`
    display: flex;
`,x=i.a`
    &:not(:last-child) {
        margin-right: ${e["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${l.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${l.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`;export{g as ActionButton,m as ButtonItem,x as DownloadAppImageLink,h as DownloadAppImageLinkWrapper,r as DownloadAppTitle,p as DownloadAppWrapper,d as DrawerWrapper,s as MobileWrapper,o as Wrapper};
//# sourceMappingURL=navbar-action-buttons.styles.js.map
