"use strict";var e=require("react/jsx-runtime"),t=require("styled-components"),r=require("../../shared/image-with-fallback/image-with-fallback.js"),i=require("../../theme/index.js"),a=require("../helper.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(t);const n=d.default.div`
    width: auto;
    margin-right: ${i.Spacing["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,l=d.default(r.ImageWithFallback)`
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
`,s=d.default.button`
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
`;exports.Container=n,exports.FileListItemThumbnail=({thumbnailImageDataUrl:t,fileType:r,"data-testid":i,renderReplaceButton:o,onReplaceClick:d})=>{const c=r===a.FileUploadHelper.PDF_MIME_TYPE,u=c?t||a.FileUploadHelper.PDF_ICON_URL:t||"";return e.jsxs(n,{"data-testid":i,children:[e.jsx(l,{"data-testid":i?`${i}-image`:void 0,src:u,$isPdf:c}),o&&e.jsx(s,{type:"button",onClick:()=>{d&&d()},children:"Replace"})]})},exports.ReplaceButton=s,exports.Thumbnail=l;
//# sourceMappingURL=file-list-item-thumbnail.js.map
