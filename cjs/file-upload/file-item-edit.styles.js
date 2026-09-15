"use strict";var t=require("styled-components"),e=require("../button/button.js"),i=require("../theme/index.js"),a=require("../typography/typography.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t);const r=o.default.li`
    display: flex;
    flex-direction: column;
    padding: ${i.Spacing["spacing-32"]};
    background: ${i.Colour["bg-primary-subtlest"]};
    border: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    border-radius: ${i.Radius.sm};

    &:not(:last-child) {
        margin-bottom: ${i.Spacing["spacing-16"]};
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
`,s=o.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${i.Spacing["spacing-16"]};

    ${i.MediaQuery.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,p=o.default(a.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${i.Spacing["spacing-16"]};

    ${i.MediaQuery.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${i.Spacing["spacing-8"]};
    }
`,c=o.default(a.Typography.BodyMD)`
    color: ${i.Colour["text-subtler"]};
`,u=o.default.div`
    display: flex;
    justify-content: flex-end;
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
`;exports.ActionButton=g,exports.ActionButtonsSection=u,exports.ContentSection=d,exports.DetailsSection=l,exports.FileNameText=p,exports.FileSizeText=c,exports.Item=r,exports.NameSection=s;
//# sourceMappingURL=file-item-edit.styles.js.map
