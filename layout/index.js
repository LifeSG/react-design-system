import{jsx as t}from"react/jsx-runtime";import e from"react";import i,{css as a}from"styled-components";const r={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},d=t=>Object.keys(r).reduce(((e,i)=>{const a=r[i];return e[i]=`@media screen and (${t}: ${a}px)`,e}),{}),n=d("max-width"),o=(d("min-width"),e.forwardRef(((e,i)=>{const{children:a,"data-testid":r="container",type:d="flex",...n}=e;return t(m,{ref:i,"data-testid":r,type:d,...n,children:a})}))),m=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;

    /* Max width restrictions */
    max-width: 1344px;

    ${n.desktopM} {
        max-width: 1152px;
    }

    ${n.tablet} {
        max-width: 960px;
    }

    ${n.mobileL} {
        width: 100%;
        max-width: unset;
    }

    ${t=>"grid"===t.type?a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    height: auto;

                    ${n.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${n.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `:a`
                    display: flex;
                    height: auto;
                `}
`,l=e.forwardRef(((e,i)=>{const{children:a,"data-testid":r="section",...d}=e;return t(s,{ref:i,"data-testid":r,...d,children:a})})),s=i.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,p=e.forwardRef(((e,i)=>{const{children:a,"data-testid":r="content",className:d,type:n="flex",...m}=e;return t(l,{ref:i,"data-testid":r,className:d,...m,children:t(o,{"data-testid":`${r}-container`,type:n,"data-id":"container",children:a})})})),c={Section:l,Container:o,Content:p};export{c as Layout};
//# sourceMappingURL=index.js.map
