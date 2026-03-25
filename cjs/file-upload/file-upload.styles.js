"use strict";var t=require("styled-components"),e=require("../alert/alert.js"),o=require("../button/button.js"),r=require("../shared/html-content/html-content.js"),i=require("../typography/index.js"),n=require("../v3_theme/index.js");function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=a(t);const d=l.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${n.V3_Spacing["spacing-32"]};
    gap: ${n.V3_Spacing["spacing-8"]};
`,p=l.default(i.Typography.BodyBL)``,s=l.default.div`
    color: ${n.V3_Colour.text};
    ${r.applyHtmlContentStyle({textSize:"body-baseline"})}
`,u=l.default(i.Typography.BodyMD)`
    color: ${n.V3_Colour["text-subtler"]};
`,x=l.default.div`
    color: ${n.V3_Colour.text};
    ${r.applyHtmlContentStyle({textSize:"body-md"})}
`,c=l.default(e.Alert)`
    margin-bottom: ${n.V3_Spacing["spacing-32"]};
`,y=l.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${n.V3_MediaQuery.MaxWidth.md} {
        align-items: flex-start;
    }
`,m=l.default(o.Button.Small)`
    width: 10rem;

    ${n.V3_MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`,g=l.default(i.Typography.BodyMD)`
    color: ${n.V3_Colour["text-subtler"]};
    margin-top: ${n.V3_Spacing["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${n.V3_MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,f=l.default(e.Alert)`
    margin-bottom: ${n.V3_Spacing["spacing-32"]};
`;exports.Description=u,exports.DescriptionContainer=x,exports.ErrorAlert=f,exports.TextContainer=d,exports.Title=p,exports.TitleContainer=s,exports.UploadButton=m,exports.UploadButtonContainer=y,exports.UploadButtonText=g,exports.WarningAlert=c;
//# sourceMappingURL=file-upload.styles.js.map
