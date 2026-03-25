import{jsxs as t,jsx as e}from"react/jsx-runtime";import r from"styled-components";import{ImageWithFallback as i}from"../../shared/image-with-fallback/image-with-fallback.js";import{V3_Spacing as o,V3_Radius as a,V3_Border as d,V3_Colour as n,V3_MediaQuery as c,V3_Font as m}from"../../v3_theme/index.js";const h=({thumbnailImageDataUrl:r,"data-testid":i,renderReplaceButton:o,onReplaceClick:a})=>t(l,{"data-testid":i,children:[e(s,{"data-testid":i?`${i}-image`:void 0,src:r}),o&&e(p,{type:"button",onClick:()=>{a&&a()},children:"Replace"})]}),l=r.div`
    width: auto;
    margin-right: ${o["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,s=r(i)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${a.sm};
    border: ${d["width-010"]} ${d.solid}
        ${n.border};
    object-fit: cover;

    ${c.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,p=r.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${o["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${m["body-md-semibold"]}
    color: ${n["text-primary"]};

    &:hover {
        color: ${n["text-hover"]};
    }
`;export{l as Container,h as FileListItemThumbnail,p as ReplaceButton,s as Thumbnail};
//# sourceMappingURL=file-list-item-thumbnail.js.map
