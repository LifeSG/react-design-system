"use strict";var t=require("styled-components"),e=require("../alert/alert.js"),o=require("../button/button.js"),r=require("../shared/html-content/html-content.js"),i=require("../theme/index.js"),a=require("../typography/typography.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=n(t);const d=l.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${i.Spacing["spacing-32"]};
    gap: ${i.Spacing["spacing-8"]};
`,p=l.default(a.Typography.BodyBL)``,s=l.default.div`
    color: ${i.Colour.text};
    ${r.applyHtmlContentStyle({textSize:"body-baseline"})}
`,u=l.default(a.Typography.BodyMD)`
    color: ${i.Colour["text-subtler"]};
`,x=l.default.div`
    color: ${i.Colour.text};
    ${r.applyHtmlContentStyle({textSize:"body-md"})}
`,c=l.default(e.Alert)`
    margin-bottom: ${i.Spacing["spacing-32"]};
`,y=l.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${i.MediaQuery.MaxWidth.md} {
        align-items: flex-start;
    }
`,g=l.default(o.Button.Small)`
    width: 10rem;

    ${i.MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`,m=l.default(a.Typography.BodyMD)`
    color: ${i.Colour["text-subtler"]};
    margin-top: ${i.Spacing["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${i.MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,f=l.default(e.Alert)`
    margin-bottom: ${i.Spacing["spacing-32"]};
`;exports.Description=u,exports.DescriptionContainer=x,exports.ErrorAlert=f,exports.TextContainer=d,exports.Title=p,exports.TitleContainer=s,exports.UploadButton=g,exports.UploadButtonContainer=y,exports.UploadButtonText=m,exports.WarningAlert=c;
//# sourceMappingURL=file-upload.styles.js.map
