"use strict";var t=require("styled-components"),e=require("../button/button.js"),i=require("../theme/index.js"),a=require("../typography/typography.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t);const r=o.default.li`
    display: flex;
    flex-direction: column;
    padding: ${i.Spacing["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    }
`,d=o.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${i.Spacing["spacing-16"]};
    width: 100%;
`,l=o.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,p=o.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${i.Spacing["spacing-16"]};

    ${i.MediaQuery.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,s=o.default(a.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${i.Spacing["spacing-16"]};

    ${i.MediaQuery.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${i.Spacing["spacing-8"]};
    }
`,c=o.default(a.Typography.BodyMD)``,u=o.default.div`
    display: flex;
    ${i.MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return t.css`
                margin-left: calc(
                    96px + ${i.Spacing["spacing-32"]}
                ); // thumbnail width + right margin

                ${i.MediaQuery.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,g=o.default(e.Button.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${i.Spacing["spacing-16"]};
    }

    ${i.MediaQuery.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${i.Spacing["spacing-16"]};
        }
    }
`;exports.ActionButton=g,exports.ActionButtonsSection=u,exports.ContentSection=d,exports.DetailsSection=l,exports.FileNameText=s,exports.FileSizeText=c,exports.Item=r,exports.NameSection=p;
//# sourceMappingURL=file-item-edit.styles.js.map
