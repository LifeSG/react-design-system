"use strict";var t=require("styled-components"),e=require("../button/button.js"),i=require("../typography/index.js"),a=require("../v3_theme/index.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t);const r=o.default.li`
    display: flex;
    flex-direction: column;
    padding: ${a.V3_Spacing["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${a.V3_Border["width-010"]} ${a.V3_Border.solid}
            ${a.V3_Colour.border};
    }
`,d=o.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${a.V3_Spacing["spacing-16"]};
    width: 100%;
`,l=o.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,s=o.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${a.V3_Spacing["spacing-16"]};

    ${a.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,p=o.default(i.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${a.V3_Spacing["spacing-16"]};

    ${a.V3_MediaQuery.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${a.V3_Spacing["spacing-8"]};
    }
`,c=o.default(i.Typography.BodyMD)``,u=o.default.div`
    display: flex;
    ${a.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return t.css`
                margin-left: calc(
                    96px + ${a.V3_Spacing["spacing-32"]}
                ); // thumbnail width + right margin

                ${a.V3_MediaQuery.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,g=o.default(e.Button.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${a.V3_Spacing["spacing-16"]};
    }

    ${a.V3_MediaQuery.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${a.V3_Spacing["spacing-16"]};
        }
    }
`;exports.ActionButton=g,exports.ActionButtonsSection=u,exports.ContentSection=d,exports.DetailsSection=l,exports.FileNameText=p,exports.FileSizeText=c,exports.Item=r,exports.NameSection=s;
//# sourceMappingURL=file-item-edit.styles.js.map
