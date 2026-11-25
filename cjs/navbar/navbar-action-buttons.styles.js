"use strict";var i=require("styled-components"),e=require("../button/button.js"),t=require("../theme/index.js"),a=require("../typography/typography.js");function n(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var p=n(i);const r=p.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${t.Spacing["spacing-64"]};
    flex-shrink: 0;

    ${t.MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,l=p.default.ul`
    display: none;

    ${t.MediaQuery.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${t.Spacing["spacing-64"]};
        flex-shrink: 0;
    }
`,d=p.default.ul`
    display: none;
    list-style: none;

    ${t.MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${t.Spacing["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${t.MediaQuery.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,o=p.default.li`
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-right: ${t.Spacing["spacing-16"]};
    }

    ${t.MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${t.Spacing["spacing-16"]};
        justify-content: center;

        &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${i=>i.$mobile?t.Spacing["spacing-16"]:"0"};
        }
    }

    ${t.MediaQuery.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 ${t.Spacing["spacing-16"]};
                `}}
    }
`,s=p.default(e.Button.Small)`
    ${t.MediaQuery.MaxWidth.lg} {
        width: 100%;
    }
`,g=p.default.div`
    display: none;

    ${t.MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${t.Spacing["spacing-40"]};
    }
`,u=p.default(a.Typography.BodyMD)`
    margin-bottom: ${t.Spacing["spacing-8"]};
`,c=p.default.div`
    display: flex;
`,m=p.default.a`
    &:not(:last-child) {
        margin-right: ${t.Spacing["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${t.MediaQuery.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${t.MediaQuery.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`;exports.ActionButton=s,exports.ButtonItem=o,exports.DownloadAppImageLink=m,exports.DownloadAppImageLinkWrapper=c,exports.DownloadAppTitle=u,exports.DownloadAppWrapper=g,exports.DrawerWrapper=d,exports.MobileWrapper=l,exports.Wrapper=r;
//# sourceMappingURL=navbar-action-buttons.styles.js.map
