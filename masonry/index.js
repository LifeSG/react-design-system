import{jsx as e}from"react/jsx-runtime";import t from"react";import r,{css as o}from"styled-components";function n(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}const i={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},l=e=>Object.keys(i).reduce(((t,r)=>{const o=i[r];return t[r]=`@media screen and (${e}: ${o}px)`,t}),{}),m=l("max-width"),a=(l("min-width"),r.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return o`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${m.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
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
`),s=r.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:i,startSm:l,colsSm:a}=e;return o`
            grid-column: ${t||n||"auto"} / span
                ${r||i||1};

            ${m.tablet} {
                grid-column: ${n||l||"auto"} / span
                    ${i||a||1};
            }

            ${m.mobileL} {
                grid-column: ${l||"auto"} / span ${a||1};
            }
        `}}
`,c={Grid:t.forwardRef(((t,r)=>{const{children:o}=t,i=n(t,["children"]);return e(a,Object.assign({ref:r},i,{children:o}))})),Tile:t.forwardRef(((t,r)=>{const{children:o}=t,i=n(t,["children"]);return e(s,Object.assign({ref:r},i,{children:o}))}))};export{c as Masonry};
//# sourceMappingURL=index.js.map
