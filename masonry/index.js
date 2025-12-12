import{jsx as e}from"react/jsx-runtime";import r from"react";import t,{css as o}from"styled-components";function n(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;const i={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},l=e=>Object.keys(i).reduce(((r,t)=>{const o=i[t];return r[t]=`@media screen and (${e}: ${o}px)`,r}),{}),m=l("max-width"),s=(l("min-width"),t.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:r}=e,t=r.lg||r.md,n=r.sm?r.sm<=2?r.sm:2:void 0,i=r.md||r.sm||2;return o`
            grid-template-columns: repeat(${t||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${m.tablet} {
                grid-template-columns: repeat(
                    ${r.md||r.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${m.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`),a=t.div`
    position: relative;
    ${e=>{const{startLg:r,colsLg:t,startMd:n,colsMd:i,startSm:l,colsSm:s}=e;return o`
            grid-column: ${r||n||"auto"} / span
                ${t||i||1};

            ${m.tablet} {
                grid-column: ${n||l||"auto"} / span
                    ${i||s||1};
            }

            ${m.mobileL} {
                grid-column: ${l||"auto"} / span ${s||1};
            }
        `}}
`,c={Grid:r.forwardRef(((r,t)=>{const{children:o}=r,i=n(r,["children"]);return e(s,Object.assign({ref:t},i,{children:o}))})),Tile:r.forwardRef(((r,t)=>{const{children:o}=r,i=n(r,["children"]);return e(a,Object.assign({ref:t},i,{children:o}))}))};export{c as Masonry};
//# sourceMappingURL=index.js.map
