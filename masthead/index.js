import{jsx as e}from"react/jsx-runtime";import{useEffect as t}from"react";import d from"styled-components";const n={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},s=e=>Object.keys(n).reduce(((t,d)=>{const s=n[d];return t[d]=`@media screen and (${e}: ${s}px)`,t}),{}),a=s("max-width"),m=(s("min-width"),d.div`
    // matches Layout.Container
    // not able to fully align with Layout.Section due to dynamic spacing
    --sgds-mainnav-max-width: 1320px;
    --sgds-mainnav-padding-x: 0.75rem;
    --sgds-mainnav-mobile-padding-x: 0.75rem;

    ${a.desktopM} {
        --sgds-mainnav-max-width: 1140px;
    }

    ${a.tablet} {
        --sgds-mainnav-max-width: 720px;
    }

    ${a.mobileL} {
        --sgds-mainnav-max-width: 100%;
    }
`),i=()=>{t((()=>{d()||n()}),[]);const d=()=>document.getElementById(o),n=()=>{if(!document.getElementById(o)){const e=document.createElement("script");e.id=o,e.type="module",e.src=r,document.head.appendChild(e)}};return e(m,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},o="lifesg-ds-masthead-script",r="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";export{i as Masthead};
//# sourceMappingURL=index.js.map
