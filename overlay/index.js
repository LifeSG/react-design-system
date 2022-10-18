import{jsx as t}from"react/jsx-runtime";import e,{useState as n,useRef as i,useEffect as o}from"react";import r from"react-dom";import d,{css as s}from"styled-components";const l=d.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return s`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,a=d.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=s`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=s`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=s`
                transition: none;
            `),e}}
`,c=({show:d=!1,rootId:s,onOverlayClick:c,children:b,backgroundOpacity:y,backgroundBlur:h=!0,disableTransition:p=!1,enableOverlayClick:v=!1,zIndex:$,id:f})=>{const[g,w]=n(null),[k,x]=n(),T=i(),C=i(null),I=b&&e.cloneElement(b,{ref:C}),O=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";o((()=>{if(d){const t=L();if(B(t),!t){const t=setTimeout((()=>{W("add")}),200);return()=>clearTimeout(t)}}else if(!T.current){const t=setTimeout((()=>{W("add")}),200);return()=>clearTimeout(t)}}),[d]),o((()=>{w(E());const t=L();return B(t),t||z(),()=>{W("remove")}}),[]);const B=t=>{T.current=t,x(t)},E=()=>document&&s?document.getElementById(s):document?document.body:null,L=()=>document.body.classList.contains(m),z=()=>{if(!document.getElementById(u)){const t=document.createElement("style");t.id=u;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${m} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${m}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},W=t=>{const e=document.body.classList.contains(m);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(m):document.body.classList.add(m)},j=t=>{t.preventDefault();const e=C.current?.firstChild;e&&e.contains(t.target)||c&&v&&c()};return g?r.createPortal(t(l,{id:O,"data-testid":O,$show:d,zIndex:$,$stacked:k,children:b&&t(a,{"data-testid":"overlay-wrapper",$show:d,$backgroundOpacity:y||(k?.5:.8),$backgroundBlur:h,$disableTransition:p,$enableOverlayClick:v,onClick:j,children:I})}),g):null},u="lifesg-ds-overlay-stylesheet",m="lifesg-ds-overlay-open";export{c as Overlay};
//# sourceMappingURL=index.js.map
