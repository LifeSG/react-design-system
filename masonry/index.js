import{jsx as t}from"react/jsx-runtime";import e from"react";import r,{css as m}from"styled-components";const o={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},i=t=>Object.keys(o).reduce(((e,r)=>{const m=o[r];return e[r]=`@media screen and (${t}: ${m}px)`,e}),{}),l=i("max-width"),s=(i("min-width"),r.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${t=>{const{numOfCols:e}=t,r=e.lg||e.md,o=e.sm?e.sm<=2?e.sm:2:void 0,i=e.md||e.sm||2;return m`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${l.tablet} {
                grid-template-columns: repeat(
                    ${e.md||e.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${l.mobileL} {
                grid-template-columns: repeat(
                    ${o||"auto-fill"},
                    minmax(calc(${100/(o||1)}% - 2rem), 1fr)
                );
            }
        `}}
`),a=r.div`
    position: relative;
    ${t=>{const{startLg:e,colsLg:r,startMd:o,colsMd:i,startSm:s,colsSm:a}=t;return m`
            grid-column: ${e||o||"auto"} / span
                ${r||i||1};

            ${l.tablet} {
                grid-column: ${o||s||"auto"} / span
                    ${i||a||1};
            }

            ${l.mobileL} {
                grid-column: ${s||"auto"} / span ${a||1};
            }
        `}}
`,n={Grid:e.forwardRef(((e,r)=>{const{children:m,...o}=e;return t(s,{ref:r,...o,children:m})})),Tile:e.forwardRef(((e,r)=>{const{children:m,...o}=e;return t(a,{ref:r,...o,children:m})}))};export{n as Masonry};
//# sourceMappingURL=index.js.map
