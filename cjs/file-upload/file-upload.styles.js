"use strict";var t=require("styled-components"),e=require("../alert/alert.js"),r=require("../button/button.js"),o=require("../markup/markup.js"),i=require("../typography/index.js"),a=require("../v3_theme/index.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=n(t);const d=l.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${a.V3_Spacing["spacing-32"]};
    gap: ${a.V3_Spacing["spacing-8"]};
`,p=l.default(i.Typography.BodyBL)``,u=l.default(o.Markup)`
    color: ${a.V3_Colour.text};
`,s=l.default(i.Typography.BodyMD)`
    color: ${a.V3_Colour["text-subtler"]};
`,x=l.default(o.Markup)`
    color: ${a.V3_Colour.text};
`,c=l.default(e.Alert)`
    margin-bottom: ${a.V3_Spacing["spacing-32"]};
`,g=l.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${a.V3_MediaQuery.MaxWidth.md} {
        align-items: flex-start;
    }
`,m=l.default(r.Button.Small)`
    width: 10rem;

    ${a.V3_MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`,f=l.default(i.Typography.BodyMD)`
    color: ${a.V3_Colour["text-subtler"]};
    margin-top: ${a.V3_Spacing["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${a.V3_MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,y=l.default(e.Alert)`
    margin-bottom: ${a.V3_Spacing["spacing-32"]};
`;exports.Description=s,exports.DescriptionContainer=x,exports.ErrorAlert=y,exports.TextContainer=d,exports.Title=p,exports.TitleContainer=u,exports.UploadButton=m,exports.UploadButtonContainer=g,exports.UploadButtonText=f,exports.WarningAlert=c;
//# sourceMappingURL=file-upload.styles.js.map
