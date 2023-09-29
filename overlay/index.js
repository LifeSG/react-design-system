import{jsx as t}from"react/jsx-runtime";import e,{useState as n,useRef as i,useEffect as o}from"react";import r from"react-dom";import s,{css as d}from"styled-components";const l=s.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return d`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,a=s.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=d`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=d`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=d`
                transition: none;
            `),e}}
`,c=({show:s=!1,rootId:d,onOverlayClick:c,children:b,backgroundOpacity:y,backgroundBlur:h=!0,disableTransition:p=!1,enableOverlayClick:v=!1,zIndex:g,id:$})=>{const[f,w]=n(null),[k,x]=n(),T=i(),O=i(!1),C=i(null),I=b&&e.cloneElement(b,{ref:C}),B=$?`lifesg-ds-overlay-root-${$}`:"lifesg-ds-overlay-root";o((()=>{const t=!0===O.current;if(t||(O.current=!0),s){const t=z();if(E(t),!t){const t=setTimeout((()=>{W("add")}),200);return()=>clearTimeout(t)}}else{if(!t)return;if(!T.current){const t=setTimeout((()=>{W("remove")}),200);return()=>clearTimeout(t)}}}),[s]),o((()=>{w(L());const t=z();return E(t),t||j(),()=>{W("remove")}}),[]);const E=t=>{T.current=t,x(t)},L=()=>document&&d?document.getElementById(d):document?document.body:null,z=()=>document.body.classList.contains(m),j=()=>{if(!document.getElementById(u)){const t=document.createElement("style");t.id=u;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${m} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${m}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},W=t=>{const e=document.body.classList.contains(m);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(m):document.body.classList.add(m)},D=t=>{var e;const n=null===(e=C.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||c&&v&&(t.preventDefault(),c())};return f?r.createPortal(t(l,Object.assign({id:B,"data-testid":B,$show:s,zIndex:g,$stacked:k},{children:b&&t(a,Object.assign({"data-testid":"overlay-wrapper",$show:s,$backgroundOpacity:y||(k?.5:.8),$backgroundBlur:h,$disableTransition:p,$enableOverlayClick:v,onClick:D},{children:I}))})),f):null},u="lifesg-ds-overlay-stylesheet",m="lifesg-ds-overlay-open";export{c as Overlay};
//# sourceMappingURL=index.js.map
