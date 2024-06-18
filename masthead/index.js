import{jsx as e}from"react/jsx-runtime";import{useEffect as t}from"react";import d from"styled-components";const s={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},n=e=>Object.keys(s).reduce(((t,d)=>{const n=s[d];return t[d]=`@media screen and (${e}: ${n}px)`,t}),{}),m=n("max-width"),o=(n("min-width"),d.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${m.mobileL} {
        padding: 0;
    }
`),r=()=>{t((()=>{d()||s()}),[]);const d=()=>document.getElementById(i),s=()=>{if(!document.getElementById(i)){const e=document.createElement("script");e.id=i,e.type="module",e.src=c,document.head.appendChild(e)}};return e(o,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},i="lifesg-ds-masthead-script",c="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";export{r as Masthead};
//# sourceMappingURL=index.js.map
