import{jsxs as t,jsx as e}from"react/jsx-runtime";import r from"styled-components";import{ImageWithFallback as i}from"../../shared/image-with-fallback/image-with-fallback.js";import{Spacing as o,Radius as a,Border as n,Colour as d,MediaQuery as l,Font as p}from"../../theme/index.js";import"../../util/calendar-helper.js";import"../../util/date-helper.js";import"../../util/date-input-helper.js";import{FileHelper as m}from"../../util/file-helper.js";import"react";import"../../util/simple-id-generator.js";import"../../util/string-helper.js";import"@react-aria/live-announcer";const s=({thumbnailImageDataUrl:r,fileType:i,"data-testid":o,renderReplaceButton:a,onReplaceClick:n})=>{const d=i===m.PDF_MIME_TYPE,l=d?r||m.PDF_ICON_URL:r||"";return t(c,{"data-testid":o,children:[e(h,{"data-testid":o?`${o}-image`:void 0,src:l,$isPdf:d}),a&&e(u,{type:"button",onClick:()=>{n&&n()},children:"Replace"})]})},c=r.div`
    width: auto;
    margin-right: ${o["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,h=r(i)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${a.sm};
    border: ${t=>t.$isPdf?"none":`${n["width-010"]} ${n.solid} ${d.border}`};
    object-fit: cover;

    ${l.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,u=r.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${o["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${p["body-md-semibold"]}
    color: ${d["text-primary"]};

    &:hover {
        color: ${d["text-hover"]};
    }
`;export{c as Container,s as FileListItemThumbnail,u as ReplaceButton,h as Thumbnail};
//# sourceMappingURL=file-list-item-thumbnail.js.map
