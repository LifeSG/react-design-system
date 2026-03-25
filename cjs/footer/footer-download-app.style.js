"use strict";var e=require("styled-components"),t=require("../typography/index.js"),i=require("../v3_theme/index.js"),r=require("../v3_theme/components/theme-helper.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e);const p=o.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${i.V3_MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,n=o.default(t.Typography.BodyMD)`
    margin-bottom: ${i.V3_Spacing["spacing-16"]};
    color: ${r.V3_ThemeFooter["footer-colour-text"]};
`,l=o.default.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${i.V3_Spacing["spacing-16"]};
    column-gap: ${i.V3_Spacing["spacing-16"]};
`,d=o.default.a`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${i.V3_MediaQuery.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;exports.AppButtonsWrapper=l,exports.AppStoreLink=d,exports.Label=n,exports.Wrapper=p;
//# sourceMappingURL=footer-download-app.style.js.map
