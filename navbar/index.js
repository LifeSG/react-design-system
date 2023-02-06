import t,{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import i,{css as o,keyframes as a}from"styled-components";import l,{useEffect as c,useState as s,useRef as d}from"react";import u from"react-dom";var h,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p={};Object.defineProperty(p,"__esModule",{value:!0});var g=t;const m=t=>g.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:g.jsx("path",{d:"M3.375 15C3.139 15 2.934 14.9133 2.76 14.74C2.58667 14.566 2.5 14.361 2.5 14.125C2.5 13.889 2.58667 13.684 2.76 13.51C2.934 13.3367 3.139 13.25 3.375 13.25H16.625C16.861 13.25 17.066 13.3367 17.24 13.51C17.4133 13.684 17.5 13.889 17.5 14.125C17.5 14.361 17.4133 14.566 17.24 14.74C17.066 14.9133 16.861 15 16.625 15H3.375ZM3.375 10.875C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H3.375ZM3.375 6.75C3.139 6.75 2.934 6.66333 2.76 6.49C2.58667 6.316 2.5 6.111 2.5 5.875C2.5 5.639 2.58667 5.434 2.76 5.26C2.934 5.08667 3.139 5 3.375 5H16.625C16.861 5 17.066 5.08667 17.24 5.26C17.4133 5.434 17.5 5.639 17.5 5.875C17.5 6.111 17.4133 6.316 17.24 6.49C17.066 6.66333 16.861 6.75 16.625 6.75H3.375Z",fill:"currentColor"})});m.displayName="MenuIcon",h=p.MenuIcon=m;var y=Array.isArray,b="object"==typeof f&&f&&f.Object===Object&&f,v=b,$="object"==typeof self&&self&&self.Object===Object&&self,w=v||$||Function("return this")(),S=w.Symbol,_=S,x=Object.prototype,F=x.hasOwnProperty,C=x.toString,B=_?_.toStringTag:void 0;var k=function(t){var e=F.call(t,B),r=t[B];try{t[B]=void 0;var n=!0}catch(t){}var i=C.call(t);return n&&(e?t[B]=r:delete t[B]),i},H=Object.prototype.toString;var j=k,D=function(t){return H.call(t)},z=S?S.toStringTag:void 0;var O=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?j(t):D(t)};var E=function(t){return null!=t&&"object"==typeof t},A=O,N=E;var W=function(t){return"symbol"==typeof t||N(t)&&"[object Symbol]"==A(t)},L=y,I=W,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var V=function(t,e){if(L(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!I(t))||(P.test(t)||!T.test(t)||null!=e&&t in Object(e))};var M=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},R=O,X=M;var G,U=function(t){if(!X(t))return!1;var e=R(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Z=w["__core-js_shared__"],q=(G=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Y=function(t){return!!q&&q in t},J=Function.prototype.toString;var K=function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Q=U,tt=Y,et=M,rt=K,nt=/^\[object .+?Constructor\]$/,it=Function.prototype,ot=Object.prototype,at=it.toString,lt=ot.hasOwnProperty,ct=RegExp("^"+at.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var st=function(t){return!(!et(t)||tt(t))&&(Q(t)?ct:nt).test(rt(t))},dt=function(t,e){return null==t?void 0:t[e]};var ut=function(t,e){var r=dt(t,e);return st(r)?r:void 0},ht=ut(Object,"create"),ft=ht;var pt=function(){this.__data__=ft?ft(null):{},this.size=0};var gt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},mt=ht,yt=Object.prototype.hasOwnProperty;var bt=function(t){var e=this.__data__;if(mt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return yt.call(e,t)?e[t]:void 0},vt=ht,$t=Object.prototype.hasOwnProperty;var wt=ht;var St=pt,_t=gt,xt=bt,Ft=function(t){var e=this.__data__;return vt?void 0!==e[t]:$t.call(e,t)},Ct=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=wt&&void 0===e?"__lodash_hash_undefined__":e,this};function Bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Bt.prototype.clear=St,Bt.prototype.delete=_t,Bt.prototype.get=xt,Bt.prototype.has=Ft,Bt.prototype.set=Ct;var kt=Bt;var Ht=function(){this.__data__=[],this.size=0};var jt=function(t,e){return t===e||t!=t&&e!=e},Dt=jt;var zt=function(t,e){for(var r=t.length;r--;)if(Dt(t[r][0],e))return r;return-1},Ot=zt,Et=Array.prototype.splice;var At=zt;var Nt=zt;var Wt=zt;var Lt=Ht,It=function(t){var e=this.__data__,r=Ot(e,t);return!(r<0)&&(r==e.length-1?e.pop():Et.call(e,r,1),--this.size,!0)},Tt=function(t){var e=this.__data__,r=At(e,t);return r<0?void 0:e[r][1]},Pt=function(t){return Nt(this.__data__,t)>-1},Vt=function(t,e){var r=this.__data__,n=Wt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Mt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Mt.prototype.clear=Lt,Mt.prototype.delete=It,Mt.prototype.get=Tt,Mt.prototype.has=Pt,Mt.prototype.set=Vt;var Rt=Mt,Xt=ut(w,"Map"),Gt=kt,Ut=Rt,Zt=Xt;var qt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Yt=function(t,e){var r=t.__data__;return qt(e)?r["string"==typeof e?"string":"hash"]:r.map},Jt=Yt;var Kt=Yt;var Qt=Yt;var te=Yt;var ee=function(){this.size=0,this.__data__={hash:new Gt,map:new(Zt||Ut),string:new Gt}},re=function(t){var e=Jt(this,t).delete(t);return this.size-=e?1:0,e},ne=function(t){return Kt(this,t).get(t)},ie=function(t){return Qt(this,t).has(t)},oe=function(t,e){var r=te(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function ae(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ae.prototype.clear=ee,ae.prototype.delete=re,ae.prototype.get=ne,ae.prototype.has=ie,ae.prototype.set=oe;var le=ae,ce=le;function se(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(se.Cache||ce),r}se.Cache=ce;var de=se;var ue=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,he=/\\(\\)?/g,fe=function(t){var e=de(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ue,(function(t,r,n,i){e.push(n?i.replace(he,"$1"):r||t)})),e}));var pe=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},ge=y,me=W,ye=S?S.prototype:void 0,be=ye?ye.toString:void 0;var ve=function t(e){if("string"==typeof e)return e;if(ge(e))return pe(e,t)+"";if(me(e))return be?be.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},$e=ve;var we=y,Se=V,_e=fe,xe=function(t){return null==t?"":$e(t)};var Fe=function(t,e){return we(t)?t:Se(t,e)?[t]:_e(xe(t))},Ce=W;var Be=function(t){if("string"==typeof t||Ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},ke=Fe,He=Be;var je=function(t,e){for(var r=0,n=(e=ke(e,t)).length;null!=t&&r<n;)t=t[He(e[r++])];return r&&r==n?t:void 0},De=je;var ze=function(t,e,r){var n=null==t?void 0:De(t,e);return void 0===n?r:n};const Oe=(t,e,r)=>e?ze(r,e)||ze(t,e):r||t,Ee=(t,e)=>{const r=e||t.defaultValue;return ze(t.collections,r)};var Ae;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Ae||(Ae={}));const Ne={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},We=t=>e=>{const r=e.theme,n=Ee(Ne,r[Ae.colorScheme]);return r.options&&r.options.color?Oe(n,t,r.options.color):Oe(n,t)},Le={Brand:{1:We("Brand.1"),2:We("Brand.2"),3:We("Brand.3"),4:We("Brand.4"),5:We("Brand.5"),6:We("Brand.6")},Primary:We("Primary"),PrimaryDark:We("PrimaryDark"),Secondary:We("Secondary"),Accent:{Light:{1:We("Accent.Light.1"),2:We("Accent.Light.2"),3:We("Accent.Light.3"),4:We("Accent.Light.4"),5:We("Accent.Light.5"),6:We("Accent.Light.6")},Dark:{1:We("Accent.Dark.1"),2:We("Accent.Dark.2"),3:We("Accent.Dark.3")}},Neutral:{1:We("Neutral.1"),2:We("Neutral.2"),3:We("Neutral.3"),4:We("Neutral.4"),5:We("Neutral.5"),6:We("Neutral.6"),7:We("Neutral.7"),8:We("Neutral.8")},Validation:{Green:{Text:We("Validation.Green.Text"),Icon:We("Validation.Green.Icon"),Border:We("Validation.Green.Border"),Background:We("Validation.Green.Background")},Orange:{Text:We("Validation.Orange.Text"),Icon:We("Validation.Orange.Icon"),Border:We("Validation.Orange.Border"),Background:We("Validation.Orange.Background"),Badge:We("Validation.Orange.Badge")},Red:{Text:We("Validation.Red.Text"),Icon:We("Validation.Red.Icon"),Border:We("Validation.Red.Border"),Background:We("Validation.Red.Background")}}},Ie=i.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&o`
                background-color: ${Le.Neutral[7]};
            `}
    }
`,Te=l.forwardRef((({children:t,focusHighlight:r=!0,focusOutline:n="none",...i},o)=>e(Ie,{ref:o,$outline:n,$highlight:r,...i,children:t}))),Pe={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ve=t=>Object.keys(Pe).reduce(((e,r)=>{const n=Pe[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),Me=Ve("max-width"),Re=(Ve("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Xe={notCompress:6,compress:4},Ge=i.div`
    position: ${t=>t.fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Ue=i.nav`
    height: ${t=>t.compress?Xe.compress:Xe.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Re};

    ${Me.tablet} {
        height: ${3.5}rem;
    }
`,Ze=i.div`
    display: flex;
    height: 100%;
`,qe=i(Te)`
    display: none;

    ${Me.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Ye=i(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Le.Neutral[1]};
`,Je=l.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",...a}=t;return e(Ke,{ref:r,"data-testid":i,type:o,...a,children:n})})),Ke=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${Me.desktopM} {
        max-width: 1140px;
    }

    ${Me.tablet} {
        max-width: 720px;
    }

    ${Me.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.type){case"grid":return o`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Me.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Me.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,Qe=l.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",...o}=t;return e(tr,{ref:r,"data-testid":i,...o,children:n})})),tr=i.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,er=l.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",...l}=t;return e(Qe,{ref:r,"data-testid":i,className:o,...l,children:e(Je,{"data-testid":`${i}-container`,type:a,"data-id":"container",children:n})})})),rr={Section:Qe,Container:Je,Content:er},nr=i.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Me.mobileL} {
        padding: 0;
    }
`,ir=()=>{c((()=>{t()||r()}),[]);const t=()=>document.getElementById(or),r=()=>{if(!document.getElementById(or)){const t=document.createElement("script");t.id=or,t.type="module",t.src=ar,document.head.appendChild(t)}};return e(nr,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},or="lifesg-ds-masthead-script",ar="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",lr=i.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return o`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,cr=i.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=o`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=o`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=o`
                transition: none;
            `),e}}
`,sr=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:h=!1,enableOverlayClick:f=!1,zIndex:p,id:g})=>{const[m,y]=s(null),[b,v]=s(),$=d(),w=d(null),S=i&&l.cloneElement(i,{ref:w}),_=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";c((()=>{if(t){const t=C();if(x(t),!t){const t=setTimeout((()=>{k("add")}),200);return()=>clearTimeout(t)}}else if(!$.current){const t=setTimeout((()=>{k("remove")}),200);return()=>clearTimeout(t)}}),[t]),c((()=>{y(F());const t=C();return x(t),t||B(),()=>{k("remove")}}),[]);const x=t=>{$.current=t,v(t)},F=()=>document&&r?document.getElementById(r):document?document.body:null,C=()=>document.body.classList.contains(ur),B=()=>{if(!document.getElementById(dr)){const t=document.createElement("style");t.id=dr;const e=document.documentElement.clientWidth,r=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${ur} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ur}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},k=t=>{const e=document.body.classList.contains(ur);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(ur):document.body.classList.add(ur)},H=t=>{t.preventDefault();const e=w.current?.firstChild;e&&e.contains(t.target)||n&&f&&n()};return m?u.createPortal(e(lr,{id:_,"data-testid":_,$show:t,zIndex:p,$stacked:b,children:i&&e(cr,{"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:o||(b?.5:.8),$backgroundBlur:a,$disableTransition:h,$enableOverlayClick:f,onClick:H,children:S})}),m):null},dr="lifesg-ds-overlay-stylesheet",ur="lifesg-ds-overlay-open",hr=i.a`
    display: flex;
    justify-content: center;
    margin-right: 2rem;

    img {
        width: auto;
        height: ${t=>t.$compress?1.375:2}rem;
        transition: ${Re};

        ${Me.tablet} {
            height: 1.375rem;
        }
    }
`,fr=({resources:t,compress:r,onClick:n,"data-testid":i="navbar-brand"})=>e(hr,{role:"link","aria-label":t.brandName+"-app-home-page",onClick:n,$compress:r,tabIndex:0,"data-testid":i,children:e("img",{src:t.logoSrc,alt:t.brandName+"-app-logo"})});var pr,gr={};Object.defineProperty(gr,"__esModule",{value:!0});var mr=t;const yr=t=>mr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:mr.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});yr.displayName="CrossIcon",pr=gr.CrossIcon=yr;const br=i.div`
    display: none;

    ${Me.tablet} {
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
    visibility: ${t=>t.$show?"visible":"hidden"};

    ${t=>t.$show?o`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:o`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${t=>{const e=`${t.$viewHeight}px`||"1vh";return o`
            height: calc(${e} * 100);
        `}}

	${Me.tablet} {
        width: 75%;
    }

    ${Me.mobileL} {
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
`,_r=i(Te)`
    position: absolute;
    right: -0.5rem;
    bottom: 0.65rem;
    color: ${Le.Neutral[1]};

    :active,
    :focus {
        color: ${Le.Primary};
    }
`,xr=l.forwardRef(((t,n)=>{const{show:i,resources:o,children:a,onClose:l,onBrandClick:d}=t,[u,h]=s(0);c((()=>(f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]);const f=()=>{if(window){const t=.01*window.innerHeight;h(t)}};return e(br,{ref:n,"data-testid":"drawer",children:e(vr,{$show:i,$viewHeight:u,children:r($r,{children:[r(wr,{children:[e(fr,{resources:o,onClick:d,"data-testid":"drawer__brand"}),e(_r,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:e(Sr,{})})]}),a]})})})}));var Fr=function(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1},Cr=Rt;var Br=Rt,kr=Xt,Hr=le;var jr=Rt,Dr=function(){this.__data__=new Cr,this.size=0},zr=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Or=function(t){return this.__data__.get(t)},Er=function(t){return this.__data__.has(t)},Ar=function(t,e){var r=this.__data__;if(r instanceof Br){var n=r.__data__;if(!kr||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Hr(n)}return r.set(t,e),this.size=r.size,this};function Nr(t){var e=this.__data__=new jr(t);this.size=e.size}Nr.prototype.clear=Dr,Nr.prototype.delete=zr,Nr.prototype.get=Or,Nr.prototype.has=Er,Nr.prototype.set=Ar;var Wr=Nr;var Lr=le,Ir=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Tr=function(t){return this.__data__.has(t)};function Pr(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Lr;++e<r;)this.add(t[e])}Pr.prototype.add=Pr.prototype.push=Ir,Pr.prototype.has=Tr;var Vr=Pr,Mr=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1},Rr=function(t,e){return t.has(e)};var Xr=function(t,e,r,n,i,o){var a=1&r,l=t.length,c=e.length;if(l!=c&&!(a&&c>l))return!1;var s=o.get(t),d=o.get(e);if(s&&d)return s==e&&d==t;var u=-1,h=!0,f=2&r?new Vr:void 0;for(o.set(t,e),o.set(e,t);++u<l;){var p=t[u],g=e[u];if(n)var m=a?n(g,p,u,e,t,o):n(p,g,u,t,e,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Mr(e,(function(t,e){if(!Rr(f,e)&&(p===t||i(p,t,r,n,o)))return f.push(e)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){h=!1;break}}return o.delete(t),o.delete(e),h};var Gr=w.Uint8Array,Ur=jt,Zr=Xr,qr=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r},Yr=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r},Jr=S?S.prototype:void 0,Kr=Jr?Jr.valueOf:void 0;var Qr=function(t,e,r,n,i,o,a){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!o(new Gr(t),new Gr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ur(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var l=qr;case"[object Set]":var c=1&n;if(l||(l=Yr),t.size!=e.size&&!c)return!1;var s=a.get(t);if(s)return s==e;n|=2,a.set(t,e);var d=Zr(l(t),l(e),n,i,o,a);return a.delete(t),d;case"[object Symbol]":if(Kr)return Kr.call(t)==Kr.call(e)}return!1};var tn=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t},en=y;var rn=function(t,e,r){var n=e(t);return en(t)?n:tn(n,r(t))};var nn=function(t,e){for(var r=-1,n=null==t?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o},on=function(){return[]},an=Object.prototype.propertyIsEnumerable,ln=Object.getOwnPropertySymbols,cn=ln?function(t){return null==t?[]:(t=Object(t),nn(ln(t),(function(e){return an.call(t,e)})))}:on;var sn=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},dn=O,un=E;var hn=function(t){return un(t)&&"[object Arguments]"==dn(t)},fn=E,pn=Object.prototype,gn=pn.hasOwnProperty,mn=pn.propertyIsEnumerable,yn=hn(function(){return arguments}())?hn:function(t){return fn(t)&&gn.call(t,"callee")&&!mn.call(t,"callee")},bn={exports:{}};var vn=function(){return!1};!function(t,e){var r=w,n=vn,i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;t.exports=l}(bn,bn.exports);var $n=/^(?:0|[1-9]\d*)$/;var wn=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&$n.test(t))&&t>-1&&t%1==0&&t<e};var Sn=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},_n=O,xn=Sn,Fn=E,Cn={};Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=!0,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=!1;var Bn=function(t){return Fn(t)&&xn(t.length)&&!!Cn[_n(t)]};var kn=function(t){return function(e){return t(e)}},Hn={exports:{}};!function(t,e){var r=b,n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,o=i&&i.exports===n&&r.process,a=function(){try{var t=i&&i.require&&i.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a}(Hn,Hn.exports);var jn=Bn,Dn=kn,zn=Hn.exports,On=zn&&zn.isTypedArray,En=On?Dn(On):jn,An=sn,Nn=yn,Wn=y,Ln=bn.exports,In=wn,Tn=En,Pn=Object.prototype.hasOwnProperty;var Vn=function(t,e){var r=Wn(t),n=!r&&Nn(t),i=!r&&!n&&Ln(t),o=!r&&!n&&!i&&Tn(t),a=r||n||i||o,l=a?An(t.length,String):[],c=l.length;for(var s in t)!e&&!Pn.call(t,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||In(s,c))||l.push(s);return l},Mn=Object.prototype;var Rn=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Mn)};var Xn=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Gn=Rn,Un=Xn,Zn=Object.prototype.hasOwnProperty;var qn=U,Yn=Sn;var Jn=Vn,Kn=function(t){if(!Gn(t))return Un(t);var e=[];for(var r in Object(t))Zn.call(t,r)&&"constructor"!=r&&e.push(r);return e},Qn=function(t){return null!=t&&Yn(t.length)&&!qn(t)};var ti=function(t){return Qn(t)?Jn(t):Kn(t)},ei=rn,ri=cn,ni=ti;var ii=function(t){return ei(t,ni,ri)},oi=Object.prototype.hasOwnProperty;var ai=function(t,e,r,n,i,o){var a=1&r,l=ii(t),c=l.length;if(c!=ii(e).length&&!a)return!1;for(var s=c;s--;){var d=l[s];if(!(a?d in e:oi.call(e,d)))return!1}var u=o.get(t),h=o.get(e);if(u&&h)return u==e&&h==t;var f=!0;o.set(t,e),o.set(e,t);for(var p=a;++s<c;){var g=t[d=l[s]],m=e[d];if(n)var y=a?n(m,g,d,e,t,o):n(g,m,d,t,e,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var b=t.constructor,v=e.constructor;b==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return o.delete(t),o.delete(e),f},li=ut(w,"DataView"),ci=Xt,si=ut(w,"Promise"),di=ut(w,"Set"),ui=ut(w,"WeakMap"),hi=O,fi=K,pi=fi(li),gi=fi(ci),mi=fi(si),yi=fi(di),bi=fi(ui),vi=hi;(li&&"[object DataView]"!=vi(new li(new ArrayBuffer(1)))||ci&&"[object Map]"!=vi(new ci)||si&&"[object Promise]"!=vi(si.resolve())||di&&"[object Set]"!=vi(new di)||ui&&"[object WeakMap]"!=vi(new ui))&&(vi=function(t){var e=hi(t),r="[object Object]"==e?t.constructor:void 0,n=r?fi(r):"";if(n)switch(n){case pi:return"[object DataView]";case gi:return"[object Map]";case mi:return"[object Promise]";case yi:return"[object Set]";case bi:return"[object WeakMap]"}return e});var $i=Wr,wi=Xr,Si=Qr,_i=ai,xi=vi,Fi=y,Ci=bn.exports,Bi=En,ki="[object Object]",Hi=Object.prototype.hasOwnProperty;var ji=function(t,e,r,n,i,o){var a=Fi(t),l=Fi(e),c=a?"[object Array]":xi(t),s=l?"[object Array]":xi(e),d=(c="[object Arguments]"==c?ki:c)==ki,u=(s="[object Arguments]"==s?ki:s)==ki,h=c==s;if(h&&Ci(t)){if(!Ci(e))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new $i),a||Bi(t)?wi(t,e,r,n,i,o):Si(t,e,c,r,n,i,o);if(!(1&r)){var f=d&&Hi.call(t,"__wrapped__"),p=u&&Hi.call(e,"__wrapped__");if(f||p){var g=f?t.value():t,m=p?e.value():e;return o||(o=new $i),i(g,m,r,n,o)}}return!!h&&(o||(o=new $i),_i(t,e,r,n,i,o))},Di=E;var zi=function t(e,r,n,i,o){return e===r||(null==e||null==r||!Di(e)&&!Di(r)?e!=e&&r!=r:ji(e,r,n,i,t,o))},Oi=Wr,Ei=zi;var Ai=M;var Ni=function(t){return t==t&&!Ai(t)},Wi=Ni,Li=ti;var Ii=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}},Ti=function(t,e,r,n){var i=r.length,o=i,a=!n;if(null==t)return!o;for(t=Object(t);i--;){var l=r[i];if(a&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<o;){var c=(l=r[i])[0],s=t[c],d=l[1];if(a&&l[2]){if(void 0===s&&!(c in t))return!1}else{var u=new Oi;if(n)var h=n(s,d,c,t,e,u);if(!(void 0===h?Ei(d,s,3,n,u):h))return!1}}return!0},Pi=function(t){for(var e=Li(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Wi(i)]}return e},Vi=Ii;var Mi=Fe,Ri=yn,Xi=y,Gi=wn,Ui=Sn,Zi=Be;var qi=function(t,e){return null!=t&&e in Object(t)},Yi=function(t,e,r){for(var n=-1,i=(e=Mi(e,t)).length,o=!1;++n<i;){var a=Zi(e[n]);if(!(o=null!=t&&r(t,a)))break;t=t[a]}return o||++n!=i?o:!!(i=null==t?0:t.length)&&Ui(i)&&Gi(a,i)&&(Xi(t)||Ri(t))};var Ji=zi,Ki=ze,Qi=function(t,e){return null!=t&&Yi(t,e,qi)},to=V,eo=Ni,ro=Ii,no=Be;var io=je;var oo=function(t){return function(e){return null==e?void 0:e[t]}},ao=function(t){return function(e){return io(e,t)}},lo=V,co=Be;var so=function(t){var e=Pi(t);return 1==e.length&&e[0][2]?Vi(e[0][0],e[0][1]):function(r){return r===t||Ti(r,t,e)}},uo=function(t,e){return to(t)&&eo(e)?ro(no(t),e):function(r){var n=Ki(r,t);return void 0===n&&n===e?Qi(r,t):Ji(e,n,3)}},ho=function(t){return t},fo=y,po=function(t){return lo(t)?oo(co(t)):ao(t)};var go=/\s/;var mo=function(t){for(var e=t.length;e--&&go.test(t.charAt(e)););return e},yo=/^\s+/;var bo=function(t){return t?t.slice(0,mo(t)+1).replace(yo,""):t},vo=M,$o=W,wo=/^[-+]0x[0-9a-f]+$/i,So=/^0b[01]+$/i,_o=/^0o[0-7]+$/i,xo=parseInt;var Fo=function(t){if("number"==typeof t)return t;if($o(t))return NaN;if(vo(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=vo(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=bo(t);var r=So.test(t);return r||_o.test(t)?xo(t.slice(2),r?2:8):wo.test(t)?NaN:+t};var Co=function(t){return t?Infinity===(t=Fo(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Bo=Fr,ko=function(t){return"function"==typeof t?t:null==t?ho:"object"==typeof t?fo(t)?uo(t[0],t[1]):so(t):po(t)},Ho=function(t){var e=Co(t),r=e%1;return e==e?r?e-r:e:0},jo=Math.max;var Do=function(t,e,r){var n=null==t?0:t.length;if(!n)return-1;var i=null==r?0:Ho(r);return i<0&&(i=jo(n+i,0)),Bo(t,ko(e),i)};const zo=i.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`,Oo=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Eo=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Le.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${Oo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ao=i(Eo)`
    animation-delay: -0.45s;
`,No=i(Eo)`
    animation-delay: -0.3s;
`,Wo=i(Eo)`
    animation-delay: -0.15s;
`,Lo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Io={collections:{base:{D1:{fontFamily:Lo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},To=t=>e=>{const r=e.theme,n=Ee(Io,r[Ae.textStyleScheme]);return r.options&&r.options.textStyle?Oe(n,t,r.options.textStyle):Oe(n,t)},Po={D1:{fontFamily:To("D1.fontFamily"),fontSize:To("D1.fontSize"),fontWeight:To("D1.fontWeight"),lineHeight:To("D1.lineHeight"),letterSpacing:To("D1.letterSpacing")},D2:{fontFamily:To("D2.fontFamily"),fontSize:To("D2.fontSize"),fontWeight:To("D2.fontWeight"),lineHeight:To("D2.lineHeight"),letterSpacing:To("D2.letterSpacing")},D3:{fontFamily:To("D3.fontFamily"),fontSize:To("D3.fontSize"),fontWeight:To("D3.fontWeight"),lineHeight:To("D3.lineHeight"),letterSpacing:To("D3.letterSpacing")},D4:{fontFamily:To("D4.fontFamily"),fontSize:To("D4.fontSize"),fontWeight:To("D4.fontWeight"),lineHeight:To("D4.lineHeight"),letterSpacing:To("D4.letterSpacing")},DBody:{fontFamily:To("DBody.fontFamily"),fontSize:To("DBody.fontSize"),fontWeight:To("DBody.fontWeight"),lineHeight:To("DBody.lineHeight"),letterSpacing:To("DBody.letterSpacing")},H1:{fontFamily:To("H1.fontFamily"),fontSize:To("H1.fontSize"),fontWeight:To("H1.fontWeight"),lineHeight:To("H1.lineHeight"),letterSpacing:To("H1.letterSpacing")},H2:{fontFamily:To("H2.fontFamily"),fontSize:To("H2.fontSize"),fontWeight:To("H2.fontWeight"),lineHeight:To("H2.lineHeight"),letterSpacing:To("H2.letterSpacing")},H3:{fontFamily:To("H3.fontFamily"),fontSize:To("H3.fontSize"),fontWeight:To("H3.fontWeight"),lineHeight:To("H3.lineHeight"),letterSpacing:To("H3.letterSpacing")},H4:{fontFamily:To("H4.fontFamily"),fontSize:To("H4.fontSize"),fontWeight:To("H4.fontWeight"),lineHeight:To("H4.lineHeight"),letterSpacing:To("H4.letterSpacing")},H5:{fontFamily:To("H5.fontFamily"),fontSize:To("H5.fontSize"),fontWeight:To("H5.fontWeight"),lineHeight:To("H5.lineHeight"),letterSpacing:To("H5.letterSpacing")},H6:{fontFamily:To("H6.fontFamily"),fontSize:To("H6.fontSize"),fontWeight:To("H6.fontWeight"),lineHeight:To("H6.lineHeight"),letterSpacing:To("H6.letterSpacing")},Body:{fontFamily:To("Body.fontFamily"),fontSize:To("Body.fontSize"),fontWeight:To("Body.fontWeight"),lineHeight:To("Body.lineHeight"),letterSpacing:To("Body.letterSpacing")},BodySmall:{fontFamily:To("BodySmall.fontFamily"),fontSize:To("BodySmall.fontSize"),fontWeight:To("BodySmall.fontWeight"),lineHeight:To("BodySmall.lineHeight"),letterSpacing:To("BodySmall.letterSpacing")},XSmall:{fontFamily:To("XSmall.fontFamily"),fontSize:To("XSmall.fontSize"),fontWeight:To("XSmall.fontWeight"),lineHeight:To("XSmall.lineHeight"),letterSpacing:To("XSmall.letterSpacing")}},Vo=t=>{switch(t){case 700:case"bold":return Lo.Bold;case 600:case"semibold":return Lo.Semibold;case 300:case"light":return Lo.Light;case 400:case"regular":return Lo.Regular;default:return""}},Mo=(t,e)=>r=>{const n=Po[t].fontFamily(r),i=Po[t].fontWeight(r);return Object.values(Lo).includes(n)?o`
                font-family: ${Vo(e)||Vo(i)||n};
                font-weight: normal !important;
            `:o`
            font-family: ${n};
            font-weight: ${(Ro(e)||i)??"normal"};
        `},Ro=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xo=(t,e,r=!1)=>n=>{const i=Po[t],a=i.fontSize(n);return o`
            ${Mo(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Go=(t=!1,e=!1)=>e?o`
            display: block;
        `:t?o`
            display: inline;
        `:o`
            display: block;
        `;var Uo,Zo={};Object.defineProperty(Zo,"__esModule",{value:!0});var qo=t;const Yo=t=>qo.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:qo.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Jo;Yo.displayName="ExternalIcon",Uo=Zo.ExternalIcon=Yo,function(t){t.D1=i.h1`
        ${t=>o`
                ${Xo("D1",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.D2=i.h1`
        ${t=>o`
                ${Xo("D2",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.D3=i.h1`
        ${t=>o`
                ${Xo("D3",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.D4=i.h1`
        ${t=>o`
                ${Xo("D4",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.DBody=i.h1`
        ${t=>o`
                ${Xo("DBody",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.H1=i.h1`
        ${t=>o`
                ${Xo("H1",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.H2=i.h2`
        ${t=>o`
                ${Xo("H2",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.H3=i.h3`
        ${t=>o`
                ${Xo("H3",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.H4=i.h4`
        ${t=>o`
                ${Xo("H4",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.H5=i.h5`
        ${t=>o`
                ${Xo("H5",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.H6=i.h6`
        ${t=>o`
                ${Xo("H6",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.Body=i.p`
        ${t=>o`
                ${Xo("Body",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=i.p`
        ${t=>o`
                ${Xo("BodySmall",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.XSmall=i.span`
        ${t=>o`
                ${Xo("XSmall",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${Go(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>ta({...t,textStyle:"Body"}),Small:t=>ta({...t,textStyle:"BodySmall"})}}(Jo||(Jo={}));const Ko=i.a`
    ${t=>o`
            ${Xo(t.textStyle,t.weight)}
            color: ${Le.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Le.Secondary};

                svg {
                    color: ${Le.Secondary};
                }
            }
        `}
`,Qo=i(Uo)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ta=({external:t=!1,children:n,...i})=>r(Ko,{...i,children:[n,t&&e(Qo,{})]});var ea;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(ea||(ea={}));const ra=i.button`
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
    ${t=>{switch(t.$buttonStyle){case"secondary":return o`
                    background-color: ${Le.Neutral[8](t)};
                    border: 1px solid ${Le.Primary(t)};

                    span {
                        color: ${Le.Primary(t)};
                    }
                `;case"light":return o`
                    background-color: ${Le.Neutral[8](t)};
                    border: 1px solid ${Le.Neutral[5](t)};

                    span {
                        color: ${Le.Primary(t)};
                    }
                `;case"disabled":return o`
                    background-color: ${Le.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Le.Neutral[3](t)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Le.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Le.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${Le.Primary(t)};
                    border: 1px solid transparent;

                    ${Me.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Le.Neutral[8](t)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${Xo("H5","semibold")}
                    }

                    ${Me.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${Xo("H4","semibold")}
                    }

                    ${Me.mobileS} {
                        height: auto;
                    }
                `}
`,na=i((({color:t,className:n,size:i=18})=>r(zo,{className:n,$size:i,$color:t,children:[e(Eo,{id:"inner1",$size:i-2,$borderWidth:2}),e(Ao,{id:"inner2",$size:i-2,$borderWidth:2}),e(No,{id:"inner3",$size:i-2,$borderWidth:2}),e(Wo,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=Le.Primary(t);break;case"disabled":e=Le.Neutral[3](t);break;default:e=Le.Neutral[8](t)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,ia={Default:l.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=t,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return r(ra,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&e(na,{...s}),e("span",{children:i})]})})),Small:l.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=t,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return r(ra,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&e(na,{...s,size:16}),e("span",{children:i})]})}))},oa=i.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;

    ${Me.tablet} {
        display: none;
    }
`,aa=i.ul`
    display: none;
    list-style: none;

    ${Me.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Me.mobileL} {
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

    ${Me.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${Me.mobileL} {
        padding: 0 1rem;
    }
`,ca=i(ia.Small)`
    ${Me.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,sa=i.div`
    display: none;

    ${Me.tablet} {
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

    ${Me.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Me.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,fa=({actionButtons:t,mobile:i=!1,onActionButtonClick:o})=>{const a=t=>{t.stopPropagation()},l=t=>e=>{e.stopPropagation(),"download"===t.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(e,t)},c=(n=!1)=>(n?(t=>{const e=Do(t,(t=>"download"===t.type));if(e>-1){const r=[...t],n=r.splice(e,1);return[...r,n[0]]}return t})(t):t).map(((t,i)=>{let o;switch(t.type){case"download":o=n?(c=t.args,r(sa,{children:[e(da,{weight:"semibold",children:c&&c.children||"Download the app"}),r(ua,{children:[e(ha,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(ha,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(ca,{onClick:l(t),...t.args,"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const r=t.args["data-testid"]?`action-button__${t.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=e(ca,{...t.args,onClick:l(t),"data-testid":r});break}case"component":{const e=t.args;o=e&&e.render||null;break}default:o=null}var c;if(o)return e(la,{children:o},`action-button-${i+1}`)}));if(t&&t.length>0){return e(i?aa:oa,{children:c(i)})}return e(n,{})},pa=i.ul`
    display: flex;
    list-style: none;

    ${Me.tablet} {
        display: none;
    }
`,ga=i.ul`
    display: none;
    list-style: none;

    ${Me.tablet} {
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

    ${Me.tablet} {
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
    color: ${Le.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Le.Neutral[1]};
    }

    ${Me.tablet} {
        ${t=>Xo("H4",t.$selected?"bold":"regular")}
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
    background-color: ${Le.Primary};

    ${Me.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 4px;
        background-color: ${Le.Accent.Light[1]};
    }
`,va=({items:t,selectedId:i,mobile:o=!1,onItemClick:a})=>{const l=t=>e=>{e.stopPropagation(),a(e,t)},c=(n=!1)=>t.map(((t,o)=>{const a=t.id===i,{children:c,options:s,...d}=t;return e(ma,{children:r(ya,{"data-testid":n?`link__mobile-${o+1}`:`link__${o+1}`,weight:a?n?"bold":"semibold":"regular",$selected:a,...d,onClick:l(t),...s,children:[c,a&&e(ba,{})]})},o)}));if(t&&t.length>0){return e(n,{children:e(o?ga:pa,{children:c(o)})})}return e(n,{})},$a=l.forwardRef((({items:t,id:n,selectedId:i,compress:o=!1,fixed:a=!0,resources:l=wa,hideNavElements:d=!1,drawerDismissalExclusions:u=[],actionButtons:h,onItemClick:f,onActionButtonClick:p,onBrandClick:g,...m},y)=>{const[b,v]=s(!1),[$,w]=s(!1);c((()=>(x(),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)})),[]);const S=()=>{v(!1),setTimeout((()=>{w(!1)}),550)},_=t=>b&&-1===u.indexOf(t),x=()=>{window.innerWidth<=Pe.tablet&&b&&S()},F=t=>{g&&(t.preventDefault(),g()),_("brand-click")&&S()},C=(t,e)=>{e.onClick?e.onClick(t):f&&(t.preventDefault(),f(e)),_("item-click")&&S()},B=(t,e)=>{e.args&&e.args.onClick?e.args.onClick(t):p&&(t.preventDefault(),p(e)),_("item-click")&&S()},k=()=>{v(!0),w(!0)},H=()=>{_("close-button-click")&&S()};return r(Ge,{ref:y,fixed:a,id:n||"navbar-wrapper","data-testid":m["data-testid"]||"navbar-wrapper",children:[e(ir,{}),r(rr.Content,{children:[r(Ue,{compress:o,children:[e(fr,{resources:l,compress:o,onClick:F,"data-testid":"main__brand"}),!d&&r(Ze,{children:[e(va,{items:t.desktop,onItemClick:C,selectedId:i}),e(fa,{actionButtons:h&&h.desktop,onActionButtonClick:B}),e(qe,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:k,focusHighlight:!1,children:e(Ye,{})})]})]}),!d&&e(sr,{show:$,enableOverlayClick:!0,onOverlayClick:H,children:r(xr,{show:b,resources:l,onClose:H,onBrandClick:F,actionButtons:h,children:[e(va,{items:t.mobile||t.desktop,onItemClick:C,selectedId:i,mobile:!0}),e(fa,{actionButtons:h&&(h?.mobile||h.desktop),onActionButtonClick:B,mobile:!0})]})})]})]})})),wa={brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"},Sa=Xe,_a=3.5;export{$a as Navbar,Sa as NavbarHeight,_a as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
