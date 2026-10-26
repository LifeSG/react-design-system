"use strict";var e=require("react/jsx-runtime"),r=require("styled-components"),t=require("../../shared/image-with-fallback/image-with-fallback.js"),i=require("../../theme/index.js");require("../../util/calendar-helper.js"),require("../../util/date-helper.js"),require("../../util/date-input-helper.js");var a=require("../../util/file-helper.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("react"),require("../../util/simple-id-generator.js"),require("../../util/string-helper.js"),require("@react-aria/live-announcer");var o=l(r);const n=o.default.div`
    width: auto;
    margin-right: ${i.Spacing["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,d=o.default(t.ImageWithFallback)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${i.Radius.sm};
    border: ${e=>e.$isPdf?"none":`${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border}`};
    object-fit: cover;

    ${i.MediaQuery.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,u=o.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${i.Spacing["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${i.Font["body-md-semibold"]}
    color: ${i.Colour["text-primary"]};

    &:hover {
        color: ${i.Colour["text-hover"]};
    }
`;exports.Container=n,exports.FileListItemThumbnail=({thumbnailImageDataUrl:r,fileType:t,"data-testid":i,renderReplaceButton:l,onReplaceClick:o})=>{const s=t===a.FileHelper.PDF_MIME_TYPE,c=s?r||a.FileHelper.PDF_ICON_URL:r||"";return e.jsxs(n,{"data-testid":i,children:[e.jsx(d,{"data-testid":i?`${i}-image`:void 0,src:c,$isPdf:s}),l&&e.jsx(u,{type:"button",onClick:()=>{o&&o()},children:"Replace"})]})},exports.ReplaceButton=u,exports.Thumbnail=d;
//# sourceMappingURL=file-list-item-thumbnail.js.map
