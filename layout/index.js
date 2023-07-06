import{jsx as t}from"react/jsx-runtime";import e from"react";import r,{css as i}from"styled-components";const a={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},n=t=>Object.keys(a).reduce(((e,r)=>{const i=a[r];return e[r]=`@media screen and (${t}: ${i}px)`,e}),{}),d=n("max-width"),o=(n("min-width"),e.forwardRef(((e,r)=>{const{children:i,"data-testid":a="container",type:n="flex",stretch:d=!1,...o}=e;return t(m,{ref:r,"data-testid":a,$type:n,$stretch:d,...o,children:i})}))),m=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?i`
                padding: 0 3rem;
            `:i`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${d.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${d.tablet} {
        max-width: 720px;
    }
    ${d.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return i`
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
                `;case"flex-column":return i`
                    display: flex;
                    flex-direction: column;
                `;default:return i`
                    display: flex;
                `}}}
`,c=e.forwardRef(((e,r)=>{const{children:i,"data-testid":a="section",stretch:n=!1,...d}=e;return t(s,{ref:r,"data-testid":a,$stretch:n,...d,children:i})})),s=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?i`
                ${d.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,l=e.forwardRef(((e,r)=>{const{children:i,"data-testid":a="content",className:n,type:d="flex",stretch:m=!1,...s}=e;return t(c,{ref:r,"data-testid":a,className:n,stretch:m,...s,children:t(o,{"data-testid":`${a}-container`,type:d,"data-id":"container",stretch:m,children:i})})})),p={Section:c,Container:o,Content:l};export{p as Layout};
//# sourceMappingURL=index.js.map
