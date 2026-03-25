import t,{css as m}from"styled-components";import{V2_MediaQuery as a}from"../v2_media/media.js";const e=t.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${t=>{const{numOfCols:e}=t,i=e.lg||e.md,r=e.sm?e.sm<=2?e.sm:2:void 0,o=e.md||e.sm||2;return m`
            grid-template-columns: repeat(${i||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${a.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${e.md||e.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${a.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,i=t.div`
    position: relative;
    ${t=>{const{startLg:e,colsLg:i,startMd:r,colsMd:o,startSm:l,colsSm:s}=t;return m`
            grid-column: ${e||r||"auto"} / span
                ${i||o||1};

            ${a.MaxWidth.tablet} {
                grid-column: ${r||l||"auto"} / span
                    ${o||s||1};
            }

            ${a.MaxWidth.mobileL} {
                grid-column: ${l||"auto"} / span ${s||1};
            }
        `}}
`;export{e as GridContainer,i as TileContainer};
//# sourceMappingURL=masonry.style.js.map
