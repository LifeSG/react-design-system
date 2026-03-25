"use strict";var i=require("styled-components"),t=require("../v3_theme/index.js");function e(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var o=e(i);const s=o.default.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${i=>i.$zIndex};

    ${t=>{if(t.$show)return i.css`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,n=o.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${i=>i.$stacked?t.V3_Colour["overlay-subtle"]:t.V3_Colour["overlay-strong"]};
    backdrop-filter: ${i=>(i=>{let t="";return i&&(t+="blur(10px)"),t.length>0?t:"none"})(i.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=i.css`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=i.css`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=i.css`
                transition: none;
            `),e}};
`;exports.Root=s,exports.Wrapper=n;
//# sourceMappingURL=overlay.styles.js.map
