import e,{jsx as t,jsxs as r,Fragment as n}from"react/jsx-runtime";import i,{css as o,keyframes as a}from"styled-components";import l,{useEffect as c,useState as s,useRef as d}from"react";import u from"react-dom";var h,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p={};Object.defineProperty(p,"__esModule",{value:!0});var g=e;const m=e=>g.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:g.jsx("path",{d:"M3.375 15C3.139 15 2.934 14.9133 2.76 14.74C2.58667 14.566 2.5 14.361 2.5 14.125C2.5 13.889 2.58667 13.684 2.76 13.51C2.934 13.3367 3.139 13.25 3.375 13.25H16.625C16.861 13.25 17.066 13.3367 17.24 13.51C17.4133 13.684 17.5 13.889 17.5 14.125C17.5 14.361 17.4133 14.566 17.24 14.74C17.066 14.9133 16.861 15 16.625 15H3.375ZM3.375 10.875C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H3.375ZM3.375 6.75C3.139 6.75 2.934 6.66333 2.76 6.49C2.58667 6.316 2.5 6.111 2.5 5.875C2.5 5.639 2.58667 5.434 2.76 5.26C2.934 5.08667 3.139 5 3.375 5H16.625C16.861 5 17.066 5.08667 17.24 5.26C17.4133 5.434 17.5 5.639 17.5 5.875C17.5 6.111 17.4133 6.316 17.24 6.49C17.066 6.66333 16.861 6.75 16.625 6.75H3.375Z",fill:"currentColor"})});m.displayName="MenuIcon",h=p.MenuIcon=m;var y=Array.isArray,b="object"==typeof f&&f&&f.Object===Object&&f,v=b,$="object"==typeof self&&self&&self.Object===Object&&self,w=v||$||Function("return this")(),S=w.Symbol,_=S,x=Object.prototype,F=x.hasOwnProperty,C=x.toString,B=_?_.toStringTag:void 0;var k=function(e){var t=F.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var i=C.call(e);return n&&(t?e[B]=r:delete e[B]),i},H=Object.prototype.toString;var j=k,D=function(e){return H.call(e)},z=S?S.toStringTag:void 0;var O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?j(e):D(e)};var A=function(e){return null!=e&&"object"==typeof e},E=O,N=A;var W=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==E(e)},L=y,I=W,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var R=function(e,t){if(L(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!I(e))||(P.test(e)||!T.test(e)||null!=t&&e in Object(t))};var V=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M=O,X=V;var G,U=function(e){if(!X(e))return!1;var t=M(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Z=w["__core-js_shared__"],q=(G=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Y=function(e){return!!q&&q in e},J=Function.prototype.toString;var K=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=U,ee=Y,te=V,re=K,ne=/^\[object .+?Constructor\]$/,ie=Function.prototype,oe=Object.prototype,ae=ie.toString,le=oe.hasOwnProperty,ce=RegExp("^"+ae.call(le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!te(e)||ee(e))&&(Q(e)?ce:ne).test(re(e))},de=function(e,t){return null==e?void 0:e[t]};var ue=function(e,t){var r=de(e,t);return se(r)?r:void 0},he=ue(Object,"create"),fe=he;var pe=function(){this.__data__=fe?fe(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},me=he,ye=Object.prototype.hasOwnProperty;var be=function(e){var t=this.__data__;if(me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ye.call(t,e)?t[e]:void 0},ve=he,$e=Object.prototype.hasOwnProperty;var we=he;var Se=pe,_e=ge,xe=be,Fe=function(e){var t=this.__data__;return ve?void 0!==t[e]:$e.call(t,e)},Ce=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=we&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=Se,Be.prototype.delete=_e,Be.prototype.get=xe,Be.prototype.has=Fe,Be.prototype.set=Ce;var ke=Be;var He=function(){this.__data__=[],this.size=0};var je=function(e,t){return e===t||e!=e&&t!=t},De=je;var ze=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},Oe=ze,Ae=Array.prototype.splice;var Ee=ze;var Ne=ze;var We=ze;var Le=He,Ie=function(e){var t=this.__data__,r=Oe(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ae.call(t,r,1),--this.size,!0)},Te=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},Pe=function(e){return Ne(this.__data__,e)>-1},Re=function(e,t){var r=this.__data__,n=We(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ve(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ve.prototype.clear=Le,Ve.prototype.delete=Ie,Ve.prototype.get=Te,Ve.prototype.has=Pe,Ve.prototype.set=Re;var Me=Ve,Xe=ue(w,"Map"),Ge=ke,Ue=Me,Ze=Xe;var qe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ye=function(e,t){var r=e.__data__;return qe(t)?r["string"==typeof t?"string":"hash"]:r.map},Je=Ye;var Ke=Ye;var Qe=Ye;var et=Ye;var tt=function(){this.size=0,this.__data__={hash:new Ge,map:new(Ze||Ue),string:new Ge}},rt=function(e){var t=Je(this,e).delete(e);return this.size-=t?1:0,t},nt=function(e){return Ke(this,e).get(e)},it=function(e){return Qe(this,e).has(e)},ot=function(e,t){var r=et(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}at.prototype.clear=tt,at.prototype.delete=rt,at.prototype.get=nt,at.prototype.has=it,at.prototype.set=ot;var lt=at,ct=lt;function st(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(st.Cache||ct),r}st.Cache=ct;var dt=st;var ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,ft=function(e){var t=dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ut,(function(e,r,n,i){t.push(n?i.replace(ht,"$1"):r||e)})),t}));var pt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},gt=y,mt=W,yt=S?S.prototype:void 0,bt=yt?yt.toString:void 0;var vt=function e(t){if("string"==typeof t)return t;if(gt(t))return pt(t,e)+"";if(mt(t))return bt?bt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},$t=vt;var wt=y,St=R,_t=ft,xt=function(e){return null==e?"":$t(e)};var Ft=function(e,t){return wt(e)?e:St(e,t)?[e]:_t(xt(e))},Ct=W;var Bt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},kt=Ft,Ht=Bt;var jt=function(e,t){for(var r=0,n=(t=kt(t,e)).length;null!=e&&r<n;)e=e[Ht(t[r++])];return r&&r==n?e:void 0},Dt=jt;var zt=function(e,t,r){var n=null==e?void 0:Dt(e,t);return void 0===n?r:n};const Ot=(e,t,r)=>t?zt(r,t)||zt(e,t):r||e,At=(e,t)=>{const r=t||e.defaultValue;return zt(e.collections,r)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(Et||(Et={}));const Nt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=At(Nt,r[Et.colorScheme]);return r.options&&r.options.color?Ot(n,e,r.options.color):Ot(n,e)},Lt={Brand:{1:Wt("Brand.1"),2:Wt("Brand.2"),3:Wt("Brand.3"),4:Wt("Brand.4"),5:Wt("Brand.5"),6:Wt("Brand.6")},Primary:Wt("Primary"),PrimaryDark:Wt("PrimaryDark"),Secondary:Wt("Secondary"),Accent:{Light:{1:Wt("Accent.Light.1"),2:Wt("Accent.Light.2"),3:Wt("Accent.Light.3"),4:Wt("Accent.Light.4"),5:Wt("Accent.Light.5"),6:Wt("Accent.Light.6")},Dark:{1:Wt("Accent.Dark.1"),2:Wt("Accent.Dark.2"),3:Wt("Accent.Dark.3")}},Neutral:{1:Wt("Neutral.1"),2:Wt("Neutral.2"),3:Wt("Neutral.3"),4:Wt("Neutral.4"),5:Wt("Neutral.5"),6:Wt("Neutral.6"),7:Wt("Neutral.7"),8:Wt("Neutral.8")},Validation:{Green:{Text:Wt("Validation.Green.Text"),Icon:Wt("Validation.Green.Icon"),Border:Wt("Validation.Green.Border"),Background:Wt("Validation.Green.Background")},Orange:{Text:Wt("Validation.Orange.Text"),Icon:Wt("Validation.Orange.Icon"),Border:Wt("Validation.Orange.Border"),Background:Wt("Validation.Orange.Background"),Badge:Wt("Validation.Orange.Badge")},Red:{Text:Wt("Validation.Red.Text"),Icon:Wt("Validation.Red.Icon"),Border:Wt("Validation.Red.Border"),Background:Wt("Validation.Red.Background")}},Shadow:{Accent:Wt("Shadow.Accent"),Red:Wt("Shadow.Red")}},It=i.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&o`
                background-color: ${Lt.Neutral[7]};
            `}
    }
`,Tt=l.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",...i},o)=>t(It,{ref:o,$outline:n,$highlight:r,...i,children:e}))),Pt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Rt=e=>Object.keys(Pt).reduce(((t,r)=>{const n=Pt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Vt=Rt("max-width"),Mt=(Rt("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Xt={notCompress:6,compress:4},Gt=i.div`
    position: ${e=>e.fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Ut=i.nav`
    height: ${e=>e.compress?Xt.compress:Xt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Mt};

    ${Vt.tablet} {
        height: ${3.5}rem;
    }
`,Zt=i.div`
    display: flex;
    height: 100%;
`,qt=i(Tt)`
    display: none;

    ${Vt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Yt=i(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Lt.Neutral[1]};
`,Jt=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="container",type:o="flex",...a}=e;return t(Kt,{ref:r,"data-testid":i,type:o,...a,children:n})})),Kt=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${Vt.desktopM} {
        max-width: 1140px;
    }

    ${Vt.tablet} {
        max-width: 720px;
    }

    ${Vt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.type){case"grid":return o`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Vt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Vt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,Qt=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="section",...o}=e;return t(er,{ref:r,"data-testid":i,...o,children:n})})),er=i.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,tr=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",...l}=e;return t(Qt,{ref:r,"data-testid":i,className:o,...l,children:t(Jt,{"data-testid":`${i}-container`,type:a,"data-id":"container",children:n})})})),rr={Section:Qt,Container:Jt,Content:tr},nr=i.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Vt.mobileL} {
        padding: 0;
    }
`,ir=()=>{c((()=>{e()||r()}),[]);const e=()=>document.getElementById(or),r=()=>{if(!document.getElementById(or)){const e=document.createElement("script");e.id=or,e.type="module",e.src=ar,document.head.appendChild(e)}};return t(nr,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},or="lifesg-ds-masthead-script",ar="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",lr=i.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return o`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,cr=i.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=o`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=o`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=o`
                transition: none;
            `),t}}
`,sr=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:h=!1,enableOverlayClick:f=!1,zIndex:p,id:g})=>{const[m,y]=s(null),[b,v]=s(),$=d(),w=d(null),S=i&&l.cloneElement(i,{ref:w}),_=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";c((()=>{if(e){const e=C();if(x(e),!e){const e=setTimeout((()=>{k("add")}),200);return()=>clearTimeout(e)}}else if(!$.current){const e=setTimeout((()=>{k("remove")}),200);return()=>clearTimeout(e)}}),[e]),c((()=>{y(F());const e=C();return x(e),e||B(),()=>{k("remove")}}),[]);const x=e=>{$.current=e,v(e)},F=()=>document&&r?document.getElementById(r):document?document.body:null,C=()=>document.body.classList.contains(ur),B=()=>{if(!document.getElementById(dr)){const e=document.createElement("style");e.id=dr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ur} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ur}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},k=e=>{const t=document.body.classList.contains(ur);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ur):document.body.classList.add(ur)},H=e=>{const t=w.current?.firstChild;t&&t.contains(e.target)||n&&f&&(e.preventDefault(),n())};return m?u.createPortal(t(lr,{id:_,"data-testid":_,$show:e,zIndex:p,$stacked:b,children:i&&t(cr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(b?.5:.8),$backgroundBlur:a,$disableTransition:h,$enableOverlayClick:f,onClick:H,children:S})}),m):null},dr="lifesg-ds-overlay-stylesheet",ur="lifesg-ds-overlay-open",hr=i.a`
    display: flex;
    justify-content: center;
    margin-right: 2rem;

    img {
        width: auto;
        height: ${e=>e.$compress?1.375:2}rem;
        transition: ${Mt};

        ${Vt.tablet} {
            height: 1.375rem;
        }
    }
`,fr=({resources:e,compress:r,onClick:n,"data-testid":i="navbar-brand"})=>t(hr,{role:"link","aria-label":e.brandName+"-app-home-page",onClick:n,$compress:r,tabIndex:0,"data-testid":i,children:t("img",{src:e.logoSrc,alt:e.brandName+"-app-logo"})});var pr,gr={};Object.defineProperty(gr,"__esModule",{value:!0});var mr=e;const yr=e=>mr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:mr.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});yr.displayName="CrossIcon",pr=gr.CrossIcon=yr;const br=i.div`
    display: none;

    ${Vt.tablet} {
        display: flex;
    }
`,vr=i.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?o`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:o`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return o`
            height: calc(${t} * 100);
        `}}

	${Vt.tablet} {
        width: 75%;
    }

    ${Vt.mobileL} {
        width: 100%;
    }
`,$r=i.div`
    display: flex;
    flex-direction: column;
`,wr=i.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1rem 2rem;
`,Sr=i(pr)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,_r=i(Tt)`
    position: absolute;
    right: -0.5rem;
    bottom: 0.65rem;
    color: ${Lt.Neutral[1]};

    :active,
    :focus {
        color: ${Lt.Primary};
    }
`,xr=l.forwardRef(((e,n)=>{const{show:i,resources:o,children:a,onClose:l,onBrandClick:d}=e,[u,h]=s(0);c((()=>(f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]);const f=()=>{if(window){const e=.01*window.innerHeight;h(e)}};return t(br,{ref:n,"data-testid":"drawer",children:t(vr,{$show:i,$viewHeight:u,children:r($r,{children:[r(wr,{children:[t(fr,{resources:o,onClick:d,"data-testid":"drawer__brand"}),t(_r,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:t(Sr,{})})]}),a]})})})}));var Fr=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Cr=Me;var Br=Me,kr=Xe,Hr=lt;var jr=Me,Dr=function(){this.__data__=new Cr,this.size=0},zr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Or=function(e){return this.__data__.get(e)},Ar=function(e){return this.__data__.has(e)},Er=function(e,t){var r=this.__data__;if(r instanceof Br){var n=r.__data__;if(!kr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Hr(n)}return r.set(e,t),this.size=r.size,this};function Nr(e){var t=this.__data__=new jr(e);this.size=t.size}Nr.prototype.clear=Dr,Nr.prototype.delete=zr,Nr.prototype.get=Or,Nr.prototype.has=Ar,Nr.prototype.set=Er;var Wr=Nr;var Lr=lt,Ir=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Tr=function(e){return this.__data__.has(e)};function Pr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Lr;++t<r;)this.add(e[t])}Pr.prototype.add=Pr.prototype.push=Ir,Pr.prototype.has=Tr;var Rr=Pr,Vr=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Mr=function(e,t){return e.has(t)};var Xr=function(e,t,r,n,i,o){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=o.get(e),d=o.get(t);if(s&&d)return s==t&&d==e;var u=-1,h=!0,f=2&r?new Rr:void 0;for(o.set(e,t),o.set(t,e);++u<l;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,o):n(p,g,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Vr(t,(function(e,t){if(!Mr(f,t)&&(p===e||i(p,e,r,n,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Gr=w.Uint8Array,Ur=je,Zr=Xr,qr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Yr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Jr=S?S.prototype:void 0,Kr=Jr?Jr.valueOf:void 0;var Qr=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Gr(e),new Gr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ur(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=qr;case"[object Set]":var c=1&n;if(l||(l=Yr),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;n|=2,a.set(e,t);var d=Zr(l(e),l(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(Kr)return Kr.call(e)==Kr.call(t)}return!1};var en=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},tn=y;var rn=function(e,t,r){var n=t(e);return tn(e)?n:en(n,r(e))};var nn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},on=function(){return[]},an=Object.prototype.propertyIsEnumerable,ln=Object.getOwnPropertySymbols,cn=ln?function(e){return null==e?[]:(e=Object(e),nn(ln(e),(function(t){return an.call(e,t)})))}:on;var sn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},dn=O,un=A;var hn=function(e){return un(e)&&"[object Arguments]"==dn(e)},fn=A,pn=Object.prototype,gn=pn.hasOwnProperty,mn=pn.propertyIsEnumerable,yn=hn(function(){return arguments}())?hn:function(e){return fn(e)&&gn.call(e,"callee")&&!mn.call(e,"callee")},bn={exports:{}};var vn=function(){return!1};!function(e,t){var r=w,n=vn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}(bn,bn.exports);var $n=/^(?:0|[1-9]\d*)$/;var wn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&$n.test(e))&&e>-1&&e%1==0&&e<t};var Sn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},_n=O,xn=Sn,Fn=A,Cn={};Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=!0,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=!1;var Bn=function(e){return Fn(e)&&xn(e.length)&&!!Cn[_n(e)]};var kn=function(e){return function(t){return e(t)}},Hn={exports:{}};!function(e,t){var r=b,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Hn,Hn.exports);var jn=Bn,Dn=kn,zn=Hn.exports,On=zn&&zn.isTypedArray,An=On?Dn(On):jn,En=sn,Nn=yn,Wn=y,Ln=bn.exports,In=wn,Tn=An,Pn=Object.prototype.hasOwnProperty;var Rn=function(e,t){var r=Wn(e),n=!r&&Nn(e),i=!r&&!n&&Ln(e),o=!r&&!n&&!i&&Tn(e),a=r||n||i||o,l=a?En(e.length,String):[],c=l.length;for(var s in e)!t&&!Pn.call(e,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||In(s,c))||l.push(s);return l},Vn=Object.prototype;var Mn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Vn)};var Xn=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Gn=Mn,Un=Xn,Zn=Object.prototype.hasOwnProperty;var qn=U,Yn=Sn;var Jn=Rn,Kn=function(e){if(!Gn(e))return Un(e);var t=[];for(var r in Object(e))Zn.call(e,r)&&"constructor"!=r&&t.push(r);return t},Qn=function(e){return null!=e&&Yn(e.length)&&!qn(e)};var ei=function(e){return Qn(e)?Jn(e):Kn(e)},ti=rn,ri=cn,ni=ei;var ii=function(e){return ti(e,ni,ri)},oi=Object.prototype.hasOwnProperty;var ai=function(e,t,r,n,i,o){var a=1&r,l=ii(e),c=l.length;if(c!=ii(t).length&&!a)return!1;for(var s=c;s--;){var d=l[s];if(!(a?d in t:oi.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++s<c;){var g=e[d=l[s]],m=t[d];if(n)var y=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return o.delete(e),o.delete(t),f},li=ue(w,"DataView"),ci=Xe,si=ue(w,"Promise"),di=ue(w,"Set"),ui=ue(w,"WeakMap"),hi=O,fi=K,pi=fi(li),gi=fi(ci),mi=fi(si),yi=fi(di),bi=fi(ui),vi=hi;(li&&"[object DataView]"!=vi(new li(new ArrayBuffer(1)))||ci&&"[object Map]"!=vi(new ci)||si&&"[object Promise]"!=vi(si.resolve())||di&&"[object Set]"!=vi(new di)||ui&&"[object WeakMap]"!=vi(new ui))&&(vi=function(e){var t=hi(e),r="[object Object]"==t?e.constructor:void 0,n=r?fi(r):"";if(n)switch(n){case pi:return"[object DataView]";case gi:return"[object Map]";case mi:return"[object Promise]";case yi:return"[object Set]";case bi:return"[object WeakMap]"}return t});var $i=Wr,wi=Xr,Si=Qr,_i=ai,xi=vi,Fi=y,Ci=bn.exports,Bi=An,ki="[object Object]",Hi=Object.prototype.hasOwnProperty;var ji=function(e,t,r,n,i,o){var a=Fi(e),l=Fi(t),c=a?"[object Array]":xi(e),s=l?"[object Array]":xi(t),d=(c="[object Arguments]"==c?ki:c)==ki,u=(s="[object Arguments]"==s?ki:s)==ki,h=c==s;if(h&&Ci(e)){if(!Ci(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new $i),a||Bi(e)?wi(e,t,r,n,i,o):Si(e,t,c,r,n,i,o);if(!(1&r)){var f=d&&Hi.call(e,"__wrapped__"),p=u&&Hi.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new $i),i(g,m,r,n,o)}}return!!h&&(o||(o=new $i),_i(e,t,r,n,i,o))},Di=A;var zi=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Di(t)&&!Di(r)?t!=t&&r!=r:ji(t,r,n,i,e,o))},Oi=Wr,Ai=zi;var Ei=V;var Ni=function(e){return e==e&&!Ei(e)},Wi=Ni,Li=ei;var Ii=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ti=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var l=r[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){var c=(l=r[i])[0],s=e[c],d=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var u=new Oi;if(n)var h=n(s,d,c,e,t,u);if(!(void 0===h?Ai(d,s,3,n,u):h))return!1}}return!0},Pi=function(e){for(var t=Li(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Wi(i)]}return t},Ri=Ii;var Vi=Ft,Mi=yn,Xi=y,Gi=wn,Ui=Sn,Zi=Bt;var qi=function(e,t){return null!=e&&t in Object(e)},Yi=function(e,t,r){for(var n=-1,i=(t=Vi(t,e)).length,o=!1;++n<i;){var a=Zi(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ui(i)&&Gi(a,i)&&(Xi(e)||Mi(e))};var Ji=zi,Ki=zt,Qi=function(e,t){return null!=e&&Yi(e,t,qi)},eo=R,to=Ni,ro=Ii,no=Bt;var io=jt;var oo=function(e){return function(t){return null==t?void 0:t[e]}},ao=function(e){return function(t){return io(t,e)}},lo=R,co=Bt;var so=function(e){var t=Pi(e);return 1==t.length&&t[0][2]?Ri(t[0][0],t[0][1]):function(r){return r===e||Ti(r,e,t)}},uo=function(e,t){return eo(e)&&to(t)?ro(no(e),t):function(r){var n=Ki(r,e);return void 0===n&&n===t?Qi(r,e):Ji(t,n,3)}},ho=function(e){return e},fo=y,po=function(e){return lo(e)?oo(co(e)):ao(e)};var go=/\s/;var mo=function(e){for(var t=e.length;t--&&go.test(e.charAt(t)););return t},yo=/^\s+/;var bo=function(e){return e?e.slice(0,mo(e)+1).replace(yo,""):e},vo=V,$o=W,wo=/^[-+]0x[0-9a-f]+$/i,So=/^0b[01]+$/i,_o=/^0o[0-7]+$/i,xo=parseInt;var Fo=function(e){if("number"==typeof e)return e;if($o(e))return NaN;if(vo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=vo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=bo(e);var r=So.test(e);return r||_o.test(e)?xo(e.slice(2),r?2:8):wo.test(e)?NaN:+e};var Co=function(e){return e?Infinity===(e=Fo(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Bo=Fr,ko=function(e){return"function"==typeof e?e:null==e?ho:"object"==typeof e?fo(e)?uo(e[0],e[1]):so(e):po(e)},Ho=function(e){var t=Co(e),r=t%1;return t==t?r?t-r:t:0},jo=Math.max;var Do=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Ho(r);return i<0&&(i=jo(n+i,0)),Bo(e,ko(t),i)};const zo=i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Oo=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ao=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Lt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Oo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Eo=i(Ao)`
    animation-delay: -0.45s;
`,No=i(Ao)`
    animation-delay: -0.3s;
`,Wo=i(Ao)`
    animation-delay: -0.15s;
`,Lo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Io={collections:{base:{D1:{fontFamily:Lo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},To=e=>t=>{const r=t.theme,n=At(Io,r[Et.textStyleScheme]);return r.options&&r.options.textStyle?Ot(n,e,r.options.textStyle):Ot(n,e)},Po={D1:{fontFamily:To("D1.fontFamily"),fontSize:To("D1.fontSize"),fontWeight:To("D1.fontWeight"),lineHeight:To("D1.lineHeight"),letterSpacing:To("D1.letterSpacing")},D2:{fontFamily:To("D2.fontFamily"),fontSize:To("D2.fontSize"),fontWeight:To("D2.fontWeight"),lineHeight:To("D2.lineHeight"),letterSpacing:To("D2.letterSpacing")},D3:{fontFamily:To("D3.fontFamily"),fontSize:To("D3.fontSize"),fontWeight:To("D3.fontWeight"),lineHeight:To("D3.lineHeight"),letterSpacing:To("D3.letterSpacing")},D4:{fontFamily:To("D4.fontFamily"),fontSize:To("D4.fontSize"),fontWeight:To("D4.fontWeight"),lineHeight:To("D4.lineHeight"),letterSpacing:To("D4.letterSpacing")},DBody:{fontFamily:To("DBody.fontFamily"),fontSize:To("DBody.fontSize"),fontWeight:To("DBody.fontWeight"),lineHeight:To("DBody.lineHeight"),letterSpacing:To("DBody.letterSpacing")},H1:{fontFamily:To("H1.fontFamily"),fontSize:To("H1.fontSize"),fontWeight:To("H1.fontWeight"),lineHeight:To("H1.lineHeight"),letterSpacing:To("H1.letterSpacing")},H2:{fontFamily:To("H2.fontFamily"),fontSize:To("H2.fontSize"),fontWeight:To("H2.fontWeight"),lineHeight:To("H2.lineHeight"),letterSpacing:To("H2.letterSpacing")},H3:{fontFamily:To("H3.fontFamily"),fontSize:To("H3.fontSize"),fontWeight:To("H3.fontWeight"),lineHeight:To("H3.lineHeight"),letterSpacing:To("H3.letterSpacing")},H4:{fontFamily:To("H4.fontFamily"),fontSize:To("H4.fontSize"),fontWeight:To("H4.fontWeight"),lineHeight:To("H4.lineHeight"),letterSpacing:To("H4.letterSpacing")},H5:{fontFamily:To("H5.fontFamily"),fontSize:To("H5.fontSize"),fontWeight:To("H5.fontWeight"),lineHeight:To("H5.lineHeight"),letterSpacing:To("H5.letterSpacing")},H6:{fontFamily:To("H6.fontFamily"),fontSize:To("H6.fontSize"),fontWeight:To("H6.fontWeight"),lineHeight:To("H6.lineHeight"),letterSpacing:To("H6.letterSpacing")},Body:{fontFamily:To("Body.fontFamily"),fontSize:To("Body.fontSize"),fontWeight:To("Body.fontWeight"),lineHeight:To("Body.lineHeight"),letterSpacing:To("Body.letterSpacing")},BodySmall:{fontFamily:To("BodySmall.fontFamily"),fontSize:To("BodySmall.fontSize"),fontWeight:To("BodySmall.fontWeight"),lineHeight:To("BodySmall.lineHeight"),letterSpacing:To("BodySmall.letterSpacing")},XSmall:{fontFamily:To("XSmall.fontFamily"),fontSize:To("XSmall.fontSize"),fontWeight:To("XSmall.fontWeight"),lineHeight:To("XSmall.lineHeight"),letterSpacing:To("XSmall.letterSpacing")}},Ro=e=>{switch(e){case 700:case"bold":return Lo.Bold;case 600:case"semibold":return Lo.Semibold;case 300:case"light":return Lo.Light;case 400:case"regular":return Lo.Regular;default:return""}},Vo=(e,t)=>r=>{const n=Po[e].fontFamily(r),i=Po[e].fontWeight(r);return Object.values(Lo).includes(n)?o`
                font-family: ${Ro(t)||Ro(i)||n};
                font-weight: normal !important;
            `:o`
            font-family: ${n};
            font-weight: ${(Mo(t)||i)??"normal"};
        `},Mo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xo=(e,t,r=!1)=>n=>{const i=Po[e],a=i.fontSize(n);return o`
            ${Vo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Go=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var Uo,Zo={};Object.defineProperty(Zo,"__esModule",{value:!0});var qo=e;const Yo=e=>qo.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:qo.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Jo;Yo.displayName="ExternalIcon",Uo=Zo.ExternalIcon=Yo,function(e){e.D1=i.h1`
        ${e=>o`
                ${Xo("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>o`
                ${Xo("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>o`
                ${Xo("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>o`
                ${Xo("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>o`
                ${Xo("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>o`
                ${Xo("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>o`
                ${Xo("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>o`
                ${Xo("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>o`
                ${Xo("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>o`
                ${Xo("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>o`
                ${Xo("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>o`
                ${Xo("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>o`
                ${Xo("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>o`
                ${Xo("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Go(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ea({...e,textStyle:"Body"}),Small:e=>ea({...e,textStyle:"BodySmall"})}}(Jo||(Jo={}));const Ko=i.a`
    ${e=>o`
            ${Xo(e.textStyle,e.weight)}
            color: ${Lt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Lt.Secondary};

                svg {
                    color: ${Lt.Secondary};
                }
            }
        `}
`,Qo=i(Uo)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ea=({external:e=!1,children:n,...i})=>r(Ko,{...i,children:[n,e&&t(Qo,{})]});var ta;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ta||(ta={}));const ra=i.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return o`
                    background-color: ${Lt.Neutral[8](e)};
                    border: 1px solid ${Lt.Primary(e)};

                    span {
                        color: ${Lt.Primary(e)};
                    }
                `;case"light":return o`
                    background-color: ${Lt.Neutral[8](e)};
                    border: 1px solid ${Lt.Neutral[5](e)};

                    span {
                        color: ${Lt.Primary(e)};
                    }
                `;case"disabled":return o`
                    background-color: ${Lt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Lt.Neutral[3](e)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Lt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Lt.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${Lt.Primary(e)};
                    border: 1px solid transparent;

                    ${Vt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Lt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${Xo("H5","semibold")}
                    }

                    ${Vt.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${Xo("H4","semibold")}
                    }

                    ${Vt.mobileS} {
                        height: auto;
                    }
                `}
`,na=i((({color:e,className:n,size:i=18})=>r(zo,{className:n,$size:i,$color:e,children:[t(Ao,{id:"inner1",$size:i-2,$borderWidth:2}),t(Eo,{id:"inner2",$size:i-2,$borderWidth:2}),t(No,{id:"inner3",$size:i-2,$borderWidth:2}),t(Wo,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Lt.Primary(e);break;case"disabled":t=Lt.Neutral[3](e);break;default:t=Lt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ia={Default:l.forwardRef(((e,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return r(ra,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&t(na,{...s}),t("span",{children:i})]})})),Small:l.forwardRef(((e,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return r(ra,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&t(na,{...s,size:16}),t("span",{children:i})]})}))},oa=i.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;

    ${Vt.tablet} {
        display: none;
    }
`,aa=i.ul`
    display: none;
    list-style: none;

    ${Vt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Vt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,la=i.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Vt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${Vt.mobileL} {
        padding: 0 1rem;
    }
`,ca=i(ia.Small)`
    ${Vt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,sa=i.div`
    display: none;

    ${Vt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,da=i(Jo.BodySmall)`
    margin-bottom: 0.5rem;
`,ua=i.div`
    display: flex;
`,ha=i.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Vt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Vt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,fa=({actionButtons:e,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},l=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},c=(n=!1)=>(n?(e=>{const t=Do(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(e):e).map(((e,i)=>{let o;switch(e.type){case"download":o=n?(c=e.args,r(sa,{children:[t(da,{weight:"semibold",children:c&&c.children||"Download the app"}),r(ua,{children:[t(ha,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),t(ha,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):t(ca,{onClick:l(e),...e.args,"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const r=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=t(ca,{...e.args,onClick:l(e),"data-testid":r});break}case"component":{const t=e.args;o=t&&t.render||null;break}default:o=null}var c;if(o)return t(la,{children:o},`action-button-${i+1}`)}));if(e&&e.length>0){return t(i?aa:oa,{children:c(i)})}return t(n,{})},pa=i.ul`
    display: flex;
    list-style: none;

    ${Vt.tablet} {
        display: none;
    }
`,ga=i.ul`
    display: none;
    list-style: none;

    ${Vt.tablet} {
        display: flex;
        flex-direction: column;
    }
`,ma=i.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Vt.tablet} {
        width: 100%;

        :not(:last-of-type) {
            margin-right: 0;
        }
    }
`,ya=i(Jo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Lt.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Lt.Neutral[1]};
    }

    ${Vt.tablet} {
        ${e=>Xo("H4",e.$selected?"bold":"regular")}
        width: 100%;
        padding: 0.625rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,ba=i.div`
    position: absolute;
    bottom: 0;
    height: 4px;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Lt.Primary};

    ${Vt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 4px;
        background-color: ${Lt.Accent.Light[1]};
    }
`,va=({items:e,selectedId:i,mobile:o=!1,onItemClick:a})=>{const l=e=>t=>{t.stopPropagation(),a(t,e)},c=(n=!1)=>e.map(((e,o)=>{const a=e.id===i,{children:c,options:s,...d}=e;return t(ma,{children:r(ya,{"data-testid":n?`link__mobile-${o+1}`:`link__${o+1}`,weight:a?n?"bold":"semibold":"regular",$selected:a,...d,onClick:l(e),...s,children:[c,a&&t(ba,{})]})},o)}));if(e&&e.length>0){return t(n,{children:t(o?ga:pa,{children:c(o)})})}return t(n,{})},$a=l.forwardRef((({items:e,id:n,selectedId:i,compress:o=!1,fixed:a=!0,resources:l=wa,hideNavElements:d=!1,drawerDismissalExclusions:u=[],actionButtons:h,onItemClick:f,onActionButtonClick:p,onBrandClick:g,...m},y)=>{const[b,v]=s(!1),[$,w]=s(!1);c((()=>(x(),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)})),[]);const S=()=>{v(!1),setTimeout((()=>{w(!1)}),550)},_=e=>b&&-1===u.indexOf(e),x=()=>{window.innerWidth<=Pt.tablet&&b&&S()},F=e=>{g&&(e.preventDefault(),g()),_("brand-click")&&S()},C=(e,t)=>{t.onClick?t.onClick(e):f&&(e.preventDefault(),f(t)),_("item-click")&&S()},B=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):p&&(e.preventDefault(),p(t)),_("item-click")&&S()},k=()=>{v(!0),w(!0)},H=()=>{_("close-button-click")&&S()};return r(Gt,{ref:y,fixed:a,id:n||"navbar-wrapper","data-testid":m["data-testid"]||"navbar-wrapper",children:[t(ir,{}),r(rr.Content,{children:[r(Ut,{compress:o,children:[t(fr,{resources:l,compress:o,onClick:F,"data-testid":"main__brand"}),!d&&r(Zt,{children:[t(va,{items:e.desktop,onItemClick:C,selectedId:i}),t(fa,{actionButtons:h&&h.desktop,onActionButtonClick:B}),t(qt,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:k,focusHighlight:!1,children:t(Yt,{})})]})]}),!d&&t(sr,{show:$,enableOverlayClick:!0,onOverlayClick:H,children:r(xr,{show:b,resources:l,onClose:H,onBrandClick:F,actionButtons:h,children:[t(va,{items:e.mobile||e.desktop,onItemClick:C,selectedId:i,mobile:!0}),t(fa,{actionButtons:h&&(h?.mobile||h.desktop),onActionButtonClick:B,mobile:!0})]})})]})]})})),wa={brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"},Sa=Xt,_a=3.5;export{$a as Navbar,Sa as NavbarHeight,_a as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
