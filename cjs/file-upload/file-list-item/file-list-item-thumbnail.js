"use strict";var e=require("react/jsx-runtime"),t=require("styled-components"),r=require("../../shared/image-with-fallback/image-with-fallback.js"),i=require("../../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(t);const d=o.default.div`
    width: auto;
    margin-right: ${i.V3_Spacing["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,n=o.default(r.ImageWithFallback)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${i.V3_Radius.sm};
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    object-fit: cover;

    ${i.V3_MediaQuery.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,l=o.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${i.V3_Spacing["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${i.V3_Font["body-md-semibold"]}
    color: ${i.V3_Colour["text-primary"]};

    &:hover {
        color: ${i.V3_Colour["text-hover"]};
    }
`;exports.Container=d,exports.FileListItemThumbnail=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:i,onReplaceClick:a})=>e.jsxs(d,{"data-testid":r,children:[e.jsx(n,{"data-testid":r?`${r}-image`:void 0,src:t}),i&&e.jsx(l,{type:"button",onClick:()=>{a&&a()},children:"Replace"})]}),exports.ReplaceButton=l,exports.Thumbnail=n;
//# sourceMappingURL=file-list-item-thumbnail.js.map
