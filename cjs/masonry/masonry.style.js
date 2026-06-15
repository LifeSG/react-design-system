"use strict";var t=require("styled-components"),e=require("../v2_media/media.js");function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=a(t);const i=r.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${a=>{const{numOfCols:r}=a,i=r.lg||r.md,s=r.sm?r.sm<=2?r.sm:2:void 0,m=r.md||r.sm||2;return t.css`
            grid-template-columns: repeat(${i||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${e.V2_MediaQuery.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${r.md||r.sm||"auto-fill"},
                    minmax(calc(${100/m}% - 2rem), 1fr)
                );
            }

            ${e.V2_MediaQuery.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${s||"auto-fill"},
                    minmax(calc(${100/(s||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,s=r.default.div`
    position: relative;
    ${a=>{const{startLg:r,colsLg:i,startMd:s,colsMd:m,startSm:l,colsSm:o}=a;return t.css`
            grid-column: ${r||s||"auto"} / span
                ${i||m||1};

            ${e.V2_MediaQuery.MaxWidth.tablet} {
                grid-column: ${s||l||"auto"} / span
                    ${m||o||1};
            }

            ${e.V2_MediaQuery.MaxWidth.mobileL} {
                grid-column: ${l||"auto"} / span ${o||1};
            }
        `}}
`;exports.GridContainer=i,exports.TileContainer=s;
//# sourceMappingURL=masonry.style.js.map
