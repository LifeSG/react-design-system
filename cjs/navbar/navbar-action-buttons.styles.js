"use strict";var i=require("styled-components"),e=require("../button/button.js"),t=require("../typography/index.js"),a=require("../v3_theme/index.js");function n(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var p=n(i);const r=p.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${a.V3_Spacing["spacing-64"]};
    flex-shrink: 0;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,d=p.default.ul`
    display: none;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${a.V3_Spacing["spacing-64"]};
        flex-shrink: 0;
    }
`,l=p.default.ul`
    display: none;
    list-style: none;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${a.V3_Spacing["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${a.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,o=p.default.li`
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-right: ${a.V3_Spacing["spacing-16"]};
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${a.V3_Spacing["spacing-16"]};
        justify-content: center;

        &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${i=>i.$mobile?a.V3_Spacing["spacing-16"]:"0"};
        }
    }

    ${a.V3_MediaQuery.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 ${a.V3_Spacing["spacing-16"]};
                `}}
    }
`,s=p.default(e.Button.Small)`
    ${a.V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
    }
`,g=p.default.div`
    display: none;

    ${a.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${a.V3_Spacing["spacing-40"]};
    }
`,u=p.default(t.Typography.BodyMD)`
    margin-bottom: ${a.V3_Spacing["spacing-8"]};
`,c=p.default.div`
    display: flex;
`,m=p.default.a`
    &:not(:last-child) {
        margin-right: ${a.V3_Spacing["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${a.V3_MediaQuery.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${a.V3_MediaQuery.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`;exports.ActionButton=s,exports.ButtonItem=o,exports.DownloadAppImageLink=m,exports.DownloadAppImageLinkWrapper=c,exports.DownloadAppTitle=u,exports.DownloadAppWrapper=g,exports.DrawerWrapper=l,exports.MobileWrapper=d,exports.Wrapper=r;
//# sourceMappingURL=navbar-action-buttons.styles.js.map
