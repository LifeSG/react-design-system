import{jsx as t}from"react/jsx-runtime";import e from"react";import r,{css as a}from"styled-components";function i(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(r[a[i]]=t[a[i]])}return r}const n={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},d=t=>Object.keys(n).reduce(((e,r)=>{const a=n[r];return e[r]=`@media screen and (${t}: ${a}px)`,e}),{}),o=d("max-width"),c=(d("min-width"),e.forwardRef(((e,r)=>{const{children:a,"data-testid":n="container",type:d="flex",stretch:o=!1}=e,c=i(e,["children","data-testid","type","stretch"]);return t(s,Object.assign({ref:r,"data-testid":n,$type:d,$stretch:o},c,{children:a}))}))),s=r.div`
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

                ${o.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${o.tablet} {
        max-width: 720px;
    }
    ${o.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${o.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${o.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return a`
                    display: flex;
                    flex-direction: column;
                `;default:return a`
                    display: flex;
                `}}}
`,l=e.forwardRef(((e,r)=>{const{children:a,"data-testid":n="section",stretch:d=!1}=e,o=i(e,["children","data-testid","stretch"]);return t(m,Object.assign({ref:r,"data-testid":n,$stretch:d},o,{children:a}))})),m=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?a`
                ${o.tablet} {
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
`,p=e.forwardRef(((e,r)=>{const{children:a,"data-testid":n="content",className:d,type:o="flex",stretch:s=!1}=e,m=i(e,["children","data-testid","className","type","stretch"]);return t(l,Object.assign({ref:r,"data-testid":n,className:d,stretch:s},m,{children:t(c,Object.assign({"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:s},{children:a}))}))})),h={Section:l,Container:c,Content:p};export{h as Layout};
//# sourceMappingURL=index.js.map
