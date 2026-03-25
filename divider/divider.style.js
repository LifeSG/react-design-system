import e,{css as o}from"styled-components";import{V3_Colour as r}from"../v3_theme/index.js";const t=e.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||r.border(e);const n=encodeURIComponent(t),s=e.$thickness||1;return o`
        background-color: transparent;
        height: ${s}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${s}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${s+1}" stroke-dasharray="4 4" /></svg>');
    `};case"solid":return o`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||r.border};
                `}}}
`;export{t as Line};
//# sourceMappingURL=divider.style.js.map
