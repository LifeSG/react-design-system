import i,{css as t}from"styled-components";import{V3_Colour as e}from"../v3_theme/index.js";const o=i.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${i=>i.$zIndex};

    ${i=>{if(i.$show)return t`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,n=i.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${i=>i.$stacked?e["overlay-subtle"]:e["overlay-strong"]};
    backdrop-filter: ${i=>(i=>{let t="";return i&&(t+="blur(10px)"),t.length>0?t:"none"})(i.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${i=>{let e="";return i.$show?e+=t`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=t`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${i.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,i.$disableTransition&&(e+=t`
                transition: none;
            `),e}};
`;export{o as Root,n as Wrapper};
//# sourceMappingURL=overlay.styles.js.map
