"use strict";var e=require("styled-components"),t=require("../theme/index.js"),r=require("../typography/typography.js"),a=require("../theme/components/theme-helper.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e);const p=o.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${t.MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,n=o.default(r.Typography.BodyMD)`
    margin-bottom: ${t.Spacing["spacing-16"]};
    color: ${a.ThemeFooter["footer-colour-text"]};
`,l=o.default.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${t.Spacing["spacing-16"]};
    column-gap: ${t.Spacing["spacing-16"]};
`,s=o.default.a`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${t.MediaQuery.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;exports.AppButtonsWrapper=l,exports.AppStoreLink=s,exports.Label=n,exports.Wrapper=p;
//# sourceMappingURL=footer-download-app.style.js.map
