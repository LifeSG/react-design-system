import{jsx as t}from"react/jsx-runtime";import e from"react";import i,{css as r}from"styled-components";const a={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},n=t=>Object.keys(a).reduce(((e,i)=>{const r=a[i];return e[i]=`@media screen and (${t}: ${r}px)`,e}),{}),d=n("max-width"),o=(n("min-width"),e.forwardRef(((e,i)=>{const{children:r,"data-testid":a="container",type:n="flex",...d}=e;return t(m,{ref:i,"data-testid":a,type:n,...d,children:r})}))),m=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${d.desktopM} {
        max-width: 1140px;
    }

    ${d.tablet} {
        max-width: 720px;
    }

    ${d.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.type){case"grid":return r`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${d.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${d.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return r`
                    display: flex;
                    flex-direction: column;
                `;default:return r`
                    display: flex;
                `}}}
`,l=e.forwardRef(((e,i)=>{const{children:r,"data-testid":a="section",...n}=e;return t(c,{ref:i,"data-testid":a,...n,children:r})})),c=i.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,s=e.forwardRef(((e,i)=>{const{children:r,"data-testid":a="content",className:n,type:d="flex",...m}=e;return t(l,{ref:i,"data-testid":a,className:n,...m,children:t(o,{"data-testid":`${a}-container`,type:d,"data-id":"container",children:r})})})),p={Section:l,Container:o,Content:s};export{p as Layout};
//# sourceMappingURL=index.js.map
