"use strict";var e=require("styled-components"),r=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const t=o(e).default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${o=>{switch(o.$lineStyle){case"dashed":return o=>{let t;t="function"==typeof o.$color?o.$color(o):o.$color||r.V3_Colour.border(o);const n=encodeURIComponent(t),s=o.$thickness||1,c=s+1;return e.css`
        background-color: transparent;
        height: ${s}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${s}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${c}" stroke-dasharray="4 4" /></svg>');
    `};case"solid":return e.css`
                    height: ${o.$thickness}px;
                    background-color: ${o.$color||r.V3_Colour.border};
                `}}}
`;exports.Line=t;
//# sourceMappingURL=divider.style.js.map
