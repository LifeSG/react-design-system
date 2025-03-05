import{jsx as t}from"react/jsx-runtime";import e from"react";import r,{css as a}from"styled-components";function n(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]])}return r}"function"==typeof SuppressedError&&SuppressedError;const i={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},o=t=>Object.keys(i).reduce(((e,r)=>{const a=i[r];return e[r]=`@media screen and (${t}: ${a}px)`,e}),{}),s=o("max-width"),d=(o("min-width"),r.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:r,$tabletStart:n,$tabletSpan:i,$mobileStart:o,$mobileSpan:d}=t;return a`
            grid-column: ${e||"auto"} / span ${r||1};

            ${s.tablet} {
                grid-column: ${n||"auto"} / span
                    ${i||1};
            }

            ${s.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${d||1};
            }
        `}}
`),l=e.forwardRef(((e,r)=>{const{mobileCols:a,tabletCols:i,desktopCols:o}=e,s=n(e,["mobileCols","tabletCols","desktopCols"]);return t(d,Object.assign({ref:r},(()=>{const t=i||a,e=a,r=p(o||i||a),n=p(t),s=p(e);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:n.span,$tabletStart:n.start}})(),s))})),p=t=>{if(Array.isArray(t)&&t.length>1){const[e,r]=t,a=e<=r?e:r,n=e<=r?r:e;let i;return i=n===a?1:n-a,{start:a,span:i}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},c=e.forwardRef(((e,r)=>{const{children:a,"data-testid":i="container",type:o="flex",stretch:s=!1}=e,d=n(e,["children","data-testid","type","stretch"]);return t(m,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:s},d,{children:a}))})),m=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?a`
                padding: 0 3rem;
            `:a`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${s.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${s.tablet} {
        max-width: 720px;
    }
    ${s.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${s.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${s.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return a`
                    display: flex;
                    flex-direction: column;
                `;default:return a`
                    display: flex;
                `}}}
`,f=e.forwardRef(((e,r)=>{const{children:a,"data-testid":i="section",stretch:o=!1}=e,s=n(e,["children","data-testid","stretch"]);return t(u,Object.assign({ref:r,"data-testid":i,$stretch:o},s,{children:a}))})),u=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?a`
                ${s.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:a`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,h=e.forwardRef(((e,r)=>{const{children:a,"data-testid":i="content",className:o,type:s="flex",stretch:d=!1}=e,l=n(e,["children","data-testid","className","type","stretch"]);return t(f,Object.assign({ref:r,"data-testid":i,className:o,stretch:d},l,{children:t(c,Object.assign({"data-testid":`${i}-container`,type:s,"data-id":"container",stretch:d},{children:a}))}))})),$={Section:f,Container:c,Content:h,ColDiv:l};export{$ as V2_Layout};
//# sourceMappingURL=index.js.map
