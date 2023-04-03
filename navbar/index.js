import e,{jsx as t,jsxs as r,Fragment as n}from"react/jsx-runtime";import i,{css as o,keyframes as a}from"styled-components";import l,{useEffect as c,useState as s,useRef as d}from"react";import u from"react-dom";var h,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f={};Object.defineProperty(f,"__esModule",{value:!0});var g=e;const m=e=>g.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:g.jsx("path",{d:"M3.375 15C3.139 15 2.934 14.9133 2.76 14.74C2.58667 14.566 2.5 14.361 2.5 14.125C2.5 13.889 2.58667 13.684 2.76 13.51C2.934 13.3367 3.139 13.25 3.375 13.25H16.625C16.861 13.25 17.066 13.3367 17.24 13.51C17.4133 13.684 17.5 13.889 17.5 14.125C17.5 14.361 17.4133 14.566 17.24 14.74C17.066 14.9133 16.861 15 16.625 15H3.375ZM3.375 10.875C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H3.375ZM3.375 6.75C3.139 6.75 2.934 6.66333 2.76 6.49C2.58667 6.316 2.5 6.111 2.5 5.875C2.5 5.639 2.58667 5.434 2.76 5.26C2.934 5.08667 3.139 5 3.375 5H16.625C16.861 5 17.066 5.08667 17.24 5.26C17.4133 5.434 17.5 5.639 17.5 5.875C17.5 6.111 17.4133 6.316 17.24 6.49C17.066 6.66333 16.861 6.75 16.625 6.75H3.375Z",fill:"currentColor"})});m.displayName="MenuIcon",h=f.MenuIcon=m;var y=Array.isArray,b="object"==typeof p&&p&&p.Object===Object&&p,v=b,$="object"==typeof self&&self&&self.Object===Object&&self,w=v||$||Function("return this")(),x=w.Symbol,S=x,_=Object.prototype,C=_.hasOwnProperty,k=_.toString,F=S?S.toStringTag:void 0;var B=function(e){var t=C.call(e,F),r=e[F];try{e[F]=void 0;var n=!0}catch(e){}var i=k.call(e);return n&&(t?e[F]=r:delete e[F]),i},H=Object.prototype.toString;var j=B,D=function(e){return H.call(e)},z=x?x.toStringTag:void 0;var O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?j(e):D(e)};var E=function(e){return null!=e&&"object"==typeof e},A=O,N=E;var I=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==A(e)},L=y,W=I,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var M=function(e,t){if(L(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!W(e))||(P.test(e)||!T.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=O,X=R;var G,U=function(e){if(!X(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Z=w["__core-js_shared__"],q=(G=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Y=function(e){return!!q&&q in e},J=Function.prototype.toString;var K=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=U,ee=Y,te=R,re=K,ne=/^\[object .+?Constructor\]$/,ie=Function.prototype,oe=Object.prototype,ae=ie.toString,le=oe.hasOwnProperty,ce=RegExp("^"+ae.call(le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!te(e)||ee(e))&&(Q(e)?ce:ne).test(re(e))},de=function(e,t){return null==e?void 0:e[t]};var ue=function(e,t){var r=de(e,t);return se(r)?r:void 0},he=ue(Object,"create"),pe=he;var fe=function(){this.__data__=pe?pe(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},me=he,ye=Object.prototype.hasOwnProperty;var be=function(e){var t=this.__data__;if(me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ye.call(t,e)?t[e]:void 0},ve=he,$e=Object.prototype.hasOwnProperty;var we=he;var xe=fe,Se=ge,_e=be,Ce=function(e){var t=this.__data__;return ve?void 0!==t[e]:$e.call(t,e)},ke=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=we&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=xe,Fe.prototype.delete=Se,Fe.prototype.get=_e,Fe.prototype.has=Ce,Fe.prototype.set=ke;var Be=Fe;var He=function(){this.__data__=[],this.size=0};var je=function(e,t){return e===t||e!=e&&t!=t},De=je;var ze=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},Oe=ze,Ee=Array.prototype.splice;var Ae=ze;var Ne=ze;var Ie=ze;var Le=He,We=function(e){var t=this.__data__,r=Oe(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ee.call(t,r,1),--this.size,!0)},Te=function(e){var t=this.__data__,r=Ae(t,e);return r<0?void 0:t[r][1]},Pe=function(e){return Ne(this.__data__,e)>-1},Me=function(e,t){var r=this.__data__,n=Ie(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Re(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Re.prototype.clear=Le,Re.prototype.delete=We,Re.prototype.get=Te,Re.prototype.has=Pe,Re.prototype.set=Me;var Ve=Re,Xe=ue(w,"Map"),Ge=Be,Ue=Ve,Ze=Xe;var qe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ye=function(e,t){var r=e.__data__;return qe(t)?r["string"==typeof t?"string":"hash"]:r.map},Je=Ye;var Ke=Ye;var Qe=Ye;var et=Ye;var tt=function(){this.size=0,this.__data__={hash:new Ge,map:new(Ze||Ue),string:new Ge}},rt=function(e){var t=Je(this,e).delete(e);return this.size-=t?1:0,t},nt=function(e){return Ke(this,e).get(e)},it=function(e){return Qe(this,e).has(e)},ot=function(e,t){var r=et(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}at.prototype.clear=tt,at.prototype.delete=rt,at.prototype.get=nt,at.prototype.has=it,at.prototype.set=ot;var lt=at,ct=lt;function st(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(st.Cache||ct),r}st.Cache=ct;var dt=st;var ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,pt=function(e){var t=dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ut,(function(e,r,n,i){t.push(n?i.replace(ht,"$1"):r||e)})),t}));var ft=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},gt=y,mt=I,yt=x?x.prototype:void 0,bt=yt?yt.toString:void 0;var vt=function e(t){if("string"==typeof t)return t;if(gt(t))return ft(t,e)+"";if(mt(t))return bt?bt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},$t=vt;var wt=y,xt=M,St=pt,_t=function(e){return null==e?"":$t(e)};var Ct=function(e,t){return wt(e)?e:xt(e,t)?[e]:St(_t(e))},kt=I;var Ft=function(e){if("string"==typeof e||kt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Bt=Ct,Ht=Ft;var jt=function(e,t){for(var r=0,n=(t=Bt(t,e)).length;null!=e&&r<n;)e=e[Ht(t[r++])];return r&&r==n?e:void 0},Dt=jt;var zt=function(e,t,r){var n=null==e?void 0:Dt(e,t);return void 0===n?r:n};const Ot=(e,t,r)=>t?zt(r,t)||zt(e,t):r||e,Et=(e,t)=>{const r=t||e.defaultValue;return zt(e.collections,r)};var At;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(At||(At={}));const Nt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},It=e=>t=>{const r=t.theme,n=Et(Nt,r[At.colorScheme]);return r.options&&r.options.color?Ot(n,e,r.options.color):Ot(n,e)},Lt={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")}},Shadow:{Accent:It("Shadow.Accent"),Red:It("Shadow.Red"),Elevation:It("Shadow.Elevation")}},Wt=i.button`
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
`,Tt=l.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",...i},o)=>t(Wt,{ref:o,$outline:n,$highlight:r,...i,children:e}))),Pt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Mt=e=>Object.keys(Pt).reduce(((t,r)=>{const n=Pt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Rt=Mt("max-width"),Vt=(Mt("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Xt={notCompress:6,compress:4},Gt=i.div`
    position: ${e=>e.$fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Ut=i.nav`
    height: ${e=>e.$compress?Xt.compress:Xt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Vt};

    ${Rt.tablet} {
        height: ${3.5}rem;
    }
`,Zt=i.div`
    display: flex;
    height: 100%;
    margin-left: 5rem;
    flex: 1;
    justify-content: flex-end;
    ${Rt.tablet} {
        margin-left: 0rem;
    }
`,qt=i(Tt)`
    display: none;

    ${Rt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Yt=i(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Lt.Neutral[1]};
`,Jt=i.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
`,Kt=i.div`
    display: flex;
    background-color: ${Lt.Neutral[5]};
    height: ${e=>e.$compress?2:2.5}rem;
    width: 1px;
    margin: 0 ${e=>e.$compress?1.5:1.125}rem;

    ${Rt.tablet} {
        height: 1.5rem;
        margin: 0 1rem;
    }
`,Qt=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="container",type:o="flex",...a}=e;return t(er,{ref:r,"data-testid":i,type:o,...a,children:n})})),er=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${Rt.desktopM} {
        max-width: 1140px;
    }

    ${Rt.tablet} {
        max-width: 720px;
    }

    ${Rt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.type){case"grid":return o`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Rt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Rt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,tr=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="section",...o}=e;return t(rr,{ref:r,"data-testid":i,...o,children:n})})),rr=i.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,nr=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",...l}=e;return t(tr,{ref:r,"data-testid":i,className:o,...l,children:t(Qt,{"data-testid":`${i}-container`,type:a,"data-id":"container",children:n})})})),ir={Section:tr,Container:Qt,Content:nr},or=i.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Rt.mobileL} {
        padding: 0;
    }
`,ar=()=>{c((()=>{e()||r()}),[]);const e=()=>document.getElementById(lr),r=()=>{if(!document.getElementById(lr)){const e=document.createElement("script");e.id=lr,e.type="module",e.src=cr,document.head.appendChild(e)}};return t(or,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},lr="lifesg-ds-masthead-script",cr="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",sr=i.div`
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
`,dr=i.div`
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
`,ur=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:h=!1,enableOverlayClick:p=!1,zIndex:f,id:g})=>{const[m,y]=s(null),[b,v]=s(),$=d(),w=d(null),x=i&&l.cloneElement(i,{ref:w}),S=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";c((()=>{if(e){const e=k();if(_(e),!e){const e=setTimeout((()=>{B("add")}),200);return()=>clearTimeout(e)}}else if(!$.current){const e=setTimeout((()=>{B("remove")}),200);return()=>clearTimeout(e)}}),[e]),c((()=>{y(C());const e=k();return _(e),e||F(),()=>{B("remove")}}),[]);const _=e=>{$.current=e,v(e)},C=()=>document&&r?document.getElementById(r):document?document.body:null,k=()=>document.body.classList.contains(pr),F=()=>{if(!document.getElementById(hr)){const e=document.createElement("style");e.id=hr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${pr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${pr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},B=e=>{const t=document.body.classList.contains(pr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(pr):document.body.classList.add(pr)},H=e=>{const t=w.current?.firstChild;t&&t.contains(e.target)||n&&p&&(e.preventDefault(),n())};return m?u.createPortal(t(sr,{id:S,"data-testid":S,$show:e,zIndex:f,$stacked:b,children:i&&t(dr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(b?.5:.8),$backgroundBlur:a,$disableTransition:h,$enableOverlayClick:p,onClick:H,children:x})}),m):null},hr="lifesg-ds-overlay-stylesheet",pr="lifesg-ds-overlay-open",fr=i.a`
    display: flex;
    justify-content: center;

    img {
        width: auto;
        height: ${e=>"primary"===e.$type?e.$compress?1.25:1.625:e.$compress?2:2.5}rem;
        transition: ${Vt};
        object-fit: contain;

        ${Rt.tablet} {
            height: ${e=>"primary"===e.$type?1:1.5}rem;
        }
    }
`,gr=({resources:e,compress:r,onClick:n,"data-testid":i="navbar-brand",type:o})=>t(fr,{role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{n&&n(e,o)},$compress:r,tabIndex:0,"data-testid":i,$type:o,children:t("img",{src:e.logoSrc,alt:e.brandName+"-app-logo"})});var mr,yr={};Object.defineProperty(yr,"__esModule",{value:!0});var br=e;const vr=e=>br.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:br.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});vr.displayName="CrossIcon",mr=yr.CrossIcon=vr;const $r=i.div`
    display: none;

    ${Rt.tablet} {
        display: flex;
    }
`,wr=i.div`
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

	${Rt.tablet} {
        width: 75%;
    }

    ${Rt.mobileL} {
        width: 100%;
    }
`,xr=i.div`
    display: flex;
    flex-direction: column;
`,Sr=i.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,_r=i(mr)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Cr=i(Tt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Lt.Neutral[1]};

    :active,
    :focus {
        color: ${Lt.Primary};
    }
`,kr=l.forwardRef(((e,i)=>{const{show:o,resources:a,children:l,onClose:d,onBrandClick:u}=e,[h,p]=s(0),{primary:f,secondary:g}=a;c((()=>(m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)})),[]);const m=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return t($r,{ref:i,"data-testid":"drawer",children:t(wr,{$show:o,$viewHeight:h,children:r(xr,{children:[r(Sr,{children:[r(Jt,{children:[t(gr,{resources:f,compress:!0,onClick:u,"data-testid":"drawer__brand",type:"primary"}),g&&r(n,{children:[t(Kt,{}),t(gr,{resources:g,compress:!0,onClick:u,"data-testid":"drawer__brand-secondary",type:"secondary"})]})]}),t(Cr,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:t(_r,{})})]}),l]})})})}));var Fr=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Br=Ve;var Hr=Ve,jr=Xe,Dr=lt;var zr=Ve,Or=function(){this.__data__=new Br,this.size=0},Er=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Ar=function(e){return this.__data__.get(e)},Nr=function(e){return this.__data__.has(e)},Ir=function(e,t){var r=this.__data__;if(r instanceof Hr){var n=r.__data__;if(!jr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Dr(n)}return r.set(e,t),this.size=r.size,this};function Lr(e){var t=this.__data__=new zr(e);this.size=t.size}Lr.prototype.clear=Or,Lr.prototype.delete=Er,Lr.prototype.get=Ar,Lr.prototype.has=Nr,Lr.prototype.set=Ir;var Wr=Lr;var Tr=lt,Pr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Mr=function(e){return this.__data__.has(e)};function Rr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Tr;++t<r;)this.add(e[t])}Rr.prototype.add=Rr.prototype.push=Pr,Rr.prototype.has=Mr;var Vr=Rr,Xr=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Gr=function(e,t){return e.has(t)};var Ur=function(e,t,r,n,i,o){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=o.get(e),d=o.get(t);if(s&&d)return s==t&&d==e;var u=-1,h=!0,p=2&r?new Vr:void 0;for(o.set(e,t),o.set(t,e);++u<l;){var f=e[u],g=t[u];if(n)var m=a?n(g,f,u,t,e,o):n(f,g,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Xr(t,(function(e,t){if(!Gr(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Zr=w.Uint8Array,qr=je,Yr=Ur,Jr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Kr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Qr=x?x.prototype:void 0,en=Qr?Qr.valueOf:void 0;var tn=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Zr(e),new Zr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=Jr;case"[object Set]":var c=1&n;if(l||(l=Kr),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;n|=2,a.set(e,t);var d=Yr(l(e),l(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(en)return en.call(e)==en.call(t)}return!1};var rn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},nn=y;var on=function(e,t,r){var n=t(e);return nn(e)?n:rn(n,r(e))};var an=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},ln=function(){return[]},cn=Object.prototype.propertyIsEnumerable,sn=Object.getOwnPropertySymbols,dn=sn?function(e){return null==e?[]:(e=Object(e),an(sn(e),(function(t){return cn.call(e,t)})))}:ln;var un=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},hn=O,pn=E;var fn=function(e){return pn(e)&&"[object Arguments]"==hn(e)},gn=E,mn=Object.prototype,yn=mn.hasOwnProperty,bn=mn.propertyIsEnumerable,vn=fn(function(){return arguments}())?fn:function(e){return gn(e)&&yn.call(e,"callee")&&!bn.call(e,"callee")},$n={exports:{}};var wn=function(){return!1};!function(e,t){var r=w,n=wn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}($n,$n.exports);var xn=/^(?:0|[1-9]\d*)$/;var Sn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&xn.test(e))&&e>-1&&e%1==0&&e<t};var _n=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Cn=O,kn=_n,Fn=E,Bn={};Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=!0,Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object Boolean]"]=Bn["[object DataView]"]=Bn["[object Date]"]=Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object WeakMap]"]=!1;var Hn=function(e){return Fn(e)&&kn(e.length)&&!!Bn[Cn(e)]};var jn=function(e){return function(t){return e(t)}},Dn={exports:{}};!function(e,t){var r=b,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Dn,Dn.exports);var zn=Hn,On=jn,En=Dn.exports,An=En&&En.isTypedArray,Nn=An?On(An):zn,In=un,Ln=vn,Wn=y,Tn=$n.exports,Pn=Sn,Mn=Nn,Rn=Object.prototype.hasOwnProperty;var Vn=function(e,t){var r=Wn(e),n=!r&&Ln(e),i=!r&&!n&&Tn(e),o=!r&&!n&&!i&&Mn(e),a=r||n||i||o,l=a?In(e.length,String):[],c=l.length;for(var s in e)!t&&!Rn.call(e,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Pn(s,c))||l.push(s);return l},Xn=Object.prototype;var Gn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Xn)};var Un=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Zn=Gn,qn=Un,Yn=Object.prototype.hasOwnProperty;var Jn=U,Kn=_n;var Qn=Vn,ei=function(e){if(!Zn(e))return qn(e);var t=[];for(var r in Object(e))Yn.call(e,r)&&"constructor"!=r&&t.push(r);return t},ti=function(e){return null!=e&&Kn(e.length)&&!Jn(e)};var ri=function(e){return ti(e)?Qn(e):ei(e)},ni=on,ii=dn,oi=ri;var ai=function(e){return ni(e,oi,ii)},li=Object.prototype.hasOwnProperty;var ci=function(e,t,r,n,i,o){var a=1&r,l=ai(e),c=l.length;if(c!=ai(t).length&&!a)return!1;for(var s=c;s--;){var d=l[s];if(!(a?d in t:li.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++s<c;){var g=e[d=l[s]],m=t[d];if(n)var y=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},si=ue(w,"DataView"),di=Xe,ui=ue(w,"Promise"),hi=ue(w,"Set"),pi=ue(w,"WeakMap"),fi=O,gi=K,mi=gi(si),yi=gi(di),bi=gi(ui),vi=gi(hi),$i=gi(pi),wi=fi;(si&&"[object DataView]"!=wi(new si(new ArrayBuffer(1)))||di&&"[object Map]"!=wi(new di)||ui&&"[object Promise]"!=wi(ui.resolve())||hi&&"[object Set]"!=wi(new hi)||pi&&"[object WeakMap]"!=wi(new pi))&&(wi=function(e){var t=fi(e),r="[object Object]"==t?e.constructor:void 0,n=r?gi(r):"";if(n)switch(n){case mi:return"[object DataView]";case yi:return"[object Map]";case bi:return"[object Promise]";case vi:return"[object Set]";case $i:return"[object WeakMap]"}return t});var xi=Wr,Si=Ur,_i=tn,Ci=ci,ki=wi,Fi=y,Bi=$n.exports,Hi=Nn,ji="[object Object]",Di=Object.prototype.hasOwnProperty;var zi=function(e,t,r,n,i,o){var a=Fi(e),l=Fi(t),c=a?"[object Array]":ki(e),s=l?"[object Array]":ki(t),d=(c="[object Arguments]"==c?ji:c)==ji,u=(s="[object Arguments]"==s?ji:s)==ji,h=c==s;if(h&&Bi(e)){if(!Bi(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new xi),a||Hi(e)?Si(e,t,r,n,i,o):_i(e,t,c,r,n,i,o);if(!(1&r)){var p=d&&Di.call(e,"__wrapped__"),f=u&&Di.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new xi),i(g,m,r,n,o)}}return!!h&&(o||(o=new xi),Ci(e,t,r,n,i,o))},Oi=E;var Ei=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Oi(t)&&!Oi(r)?t!=t&&r!=r:zi(t,r,n,i,e,o))},Ai=Wr,Ni=Ei;var Ii=R;var Li=function(e){return e==e&&!Ii(e)},Wi=Li,Ti=ri;var Pi=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Mi=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var l=r[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){var c=(l=r[i])[0],s=e[c],d=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var u=new Ai;if(n)var h=n(s,d,c,e,t,u);if(!(void 0===h?Ni(d,s,3,n,u):h))return!1}}return!0},Ri=function(e){for(var t=Ti(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Wi(i)]}return t},Vi=Pi;var Xi=Ct,Gi=vn,Ui=y,Zi=Sn,qi=_n,Yi=Ft;var Ji=function(e,t){return null!=e&&t in Object(e)},Ki=function(e,t,r){for(var n=-1,i=(t=Xi(t,e)).length,o=!1;++n<i;){var a=Yi(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&qi(i)&&Zi(a,i)&&(Ui(e)||Gi(e))};var Qi=Ei,eo=zt,to=function(e,t){return null!=e&&Ki(e,t,Ji)},ro=M,no=Li,io=Pi,oo=Ft;var ao=jt;var lo=function(e){return function(t){return null==t?void 0:t[e]}},co=function(e){return function(t){return ao(t,e)}},so=M,uo=Ft;var ho=function(e){var t=Ri(e);return 1==t.length&&t[0][2]?Vi(t[0][0],t[0][1]):function(r){return r===e||Mi(r,e,t)}},po=function(e,t){return ro(e)&&no(t)?io(oo(e),t):function(r){var n=eo(r,e);return void 0===n&&n===t?to(r,e):Qi(t,n,3)}},fo=function(e){return e},go=y,mo=function(e){return so(e)?lo(uo(e)):co(e)};var yo=/\s/;var bo=function(e){for(var t=e.length;t--&&yo.test(e.charAt(t)););return t},vo=/^\s+/;var $o=function(e){return e?e.slice(0,bo(e)+1).replace(vo,""):e},wo=R,xo=I,So=/^[-+]0x[0-9a-f]+$/i,_o=/^0b[01]+$/i,Co=/^0o[0-7]+$/i,ko=parseInt;var Fo=function(e){if("number"==typeof e)return e;if(xo(e))return NaN;if(wo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=wo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=$o(e);var r=_o.test(e);return r||Co.test(e)?ko(e.slice(2),r?2:8):So.test(e)?NaN:+e};var Bo=function(e){return e?Infinity===(e=Fo(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ho=Fr,jo=function(e){return"function"==typeof e?e:null==e?fo:"object"==typeof e?go(e)?po(e[0],e[1]):ho(e):mo(e)},Do=function(e){var t=Bo(e),r=t%1;return t==t?r?t-r:t:0},zo=Math.max;var Oo=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Do(r);return i<0&&(i=zo(n+i,0)),Ho(e,jo(t),i)};const Eo=i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ao=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,No=i.div`
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
    animation: ${Ao} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Io=i(No)`
    animation-delay: -0.45s;
`,Lo=i(No)`
    animation-delay: -0.3s;
`,Wo=i(No)`
    animation-delay: -0.15s;
`,To={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Po={collections:{base:{D1:{fontFamily:To.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:To.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:To.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:To.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:To.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:To.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:To.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:To.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:To.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:To.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:To.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:To.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:To.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:To.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Mo=e=>t=>{const r=t.theme,n=Et(Po,r[At.textStyleScheme]);return r.options&&r.options.textStyle?Ot(n,e,r.options.textStyle):Ot(n,e)},Ro={D1:{fontFamily:Mo("D1.fontFamily"),fontSize:Mo("D1.fontSize"),fontWeight:Mo("D1.fontWeight"),lineHeight:Mo("D1.lineHeight"),letterSpacing:Mo("D1.letterSpacing")},D2:{fontFamily:Mo("D2.fontFamily"),fontSize:Mo("D2.fontSize"),fontWeight:Mo("D2.fontWeight"),lineHeight:Mo("D2.lineHeight"),letterSpacing:Mo("D2.letterSpacing")},D3:{fontFamily:Mo("D3.fontFamily"),fontSize:Mo("D3.fontSize"),fontWeight:Mo("D3.fontWeight"),lineHeight:Mo("D3.lineHeight"),letterSpacing:Mo("D3.letterSpacing")},D4:{fontFamily:Mo("D4.fontFamily"),fontSize:Mo("D4.fontSize"),fontWeight:Mo("D4.fontWeight"),lineHeight:Mo("D4.lineHeight"),letterSpacing:Mo("D4.letterSpacing")},DBody:{fontFamily:Mo("DBody.fontFamily"),fontSize:Mo("DBody.fontSize"),fontWeight:Mo("DBody.fontWeight"),lineHeight:Mo("DBody.lineHeight"),letterSpacing:Mo("DBody.letterSpacing")},H1:{fontFamily:Mo("H1.fontFamily"),fontSize:Mo("H1.fontSize"),fontWeight:Mo("H1.fontWeight"),lineHeight:Mo("H1.lineHeight"),letterSpacing:Mo("H1.letterSpacing")},H2:{fontFamily:Mo("H2.fontFamily"),fontSize:Mo("H2.fontSize"),fontWeight:Mo("H2.fontWeight"),lineHeight:Mo("H2.lineHeight"),letterSpacing:Mo("H2.letterSpacing")},H3:{fontFamily:Mo("H3.fontFamily"),fontSize:Mo("H3.fontSize"),fontWeight:Mo("H3.fontWeight"),lineHeight:Mo("H3.lineHeight"),letterSpacing:Mo("H3.letterSpacing")},H4:{fontFamily:Mo("H4.fontFamily"),fontSize:Mo("H4.fontSize"),fontWeight:Mo("H4.fontWeight"),lineHeight:Mo("H4.lineHeight"),letterSpacing:Mo("H4.letterSpacing")},H5:{fontFamily:Mo("H5.fontFamily"),fontSize:Mo("H5.fontSize"),fontWeight:Mo("H5.fontWeight"),lineHeight:Mo("H5.lineHeight"),letterSpacing:Mo("H5.letterSpacing")},H6:{fontFamily:Mo("H6.fontFamily"),fontSize:Mo("H6.fontSize"),fontWeight:Mo("H6.fontWeight"),lineHeight:Mo("H6.lineHeight"),letterSpacing:Mo("H6.letterSpacing")},Body:{fontFamily:Mo("Body.fontFamily"),fontSize:Mo("Body.fontSize"),fontWeight:Mo("Body.fontWeight"),lineHeight:Mo("Body.lineHeight"),letterSpacing:Mo("Body.letterSpacing")},BodySmall:{fontFamily:Mo("BodySmall.fontFamily"),fontSize:Mo("BodySmall.fontSize"),fontWeight:Mo("BodySmall.fontWeight"),lineHeight:Mo("BodySmall.lineHeight"),letterSpacing:Mo("BodySmall.letterSpacing")},XSmall:{fontFamily:Mo("XSmall.fontFamily"),fontSize:Mo("XSmall.fontSize"),fontWeight:Mo("XSmall.fontWeight"),lineHeight:Mo("XSmall.lineHeight"),letterSpacing:Mo("XSmall.letterSpacing")}},Vo=e=>{switch(e){case 700:case"bold":return To.Bold;case 600:case"semibold":return To.Semibold;case 300:case"light":return To.Light;case 400:case"regular":return To.Regular;default:return""}},Xo=(e,t)=>r=>{const n=Ro[e].fontFamily(r),i=Ro[e].fontWeight(r);return Object.values(To).includes(n)?o`
                font-family: ${Vo(t)||Vo(i)||n};
                font-weight: normal !important;
            `:o`
            font-family: ${n};
            font-weight: ${(Go(t)||i)??"normal"};
        `},Go=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Uo=(e,t,r=!1)=>n=>{const i=Ro[e],a=i.fontSize(n);return o`
            ${Xo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Zo=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var qo,Yo={};Object.defineProperty(Yo,"__esModule",{value:!0});var Jo=e;const Ko=e=>Jo.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Jo.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Qo;Ko.displayName="ExternalIcon",qo=Yo.ExternalIcon=Ko,function(e){e.D1=i.h1`
        ${e=>o`
                ${Uo("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>o`
                ${Uo("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>o`
                ${Uo("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>o`
                ${Uo("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>o`
                ${Uo("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>o`
                ${Uo("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>o`
                ${Uo("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>o`
                ${Uo("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>o`
                ${Uo("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>o`
                ${Uo("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>o`
                ${Uo("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>o`
                ${Uo("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>o`
                ${Uo("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>o`
                ${Uo("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Zo(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ra({...e,textStyle:"Body"}),Small:e=>ra({...e,textStyle:"BodySmall"})}}(Qo||(Qo={}));const ea=i.a`
    ${e=>o`
            ${Uo(e.textStyle,e.weight)}
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
`,ta=i(qo)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ra=({external:e=!1,children:n,...i})=>r(ea,{...i,children:[n,e&&t(ta,{})]});var na;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(na||(na={}));const ia=i.button`
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

                    ${Rt.mobileL} {
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
                        ${Uo("H5","semibold")}
                    }

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${Uo("H4","semibold")}
                    }

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `}
`,oa=i((({color:e,className:n,size:i=18})=>r(Eo,{className:n,$size:i,$color:e,children:[t(No,{id:"inner1",$size:i-2,$borderWidth:2}),t(Io,{id:"inner2",$size:i-2,$borderWidth:2}),t(Lo,{id:"inner3",$size:i-2,$borderWidth:2}),t(Wo,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Lt.Primary(e);break;case"disabled":t=Lt.Neutral[3](e);break;default:t=Lt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,aa={Default:l.forwardRef(((e,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return r(ia,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&t(oa,{...s}),t("span",{children:i})]})})),Small:l.forwardRef(((e,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return r(ia,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&t(oa,{...s,size:16}),t("span",{children:i})]})}))},la=i.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Rt.tablet} {
        display: none;
    }
`,ca=i.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Rt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,sa=i.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Rt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${Rt.mobileL} {
        padding: 0 1rem;
    }
`,da=i(aa.Small)`
    ${Rt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,ua=i.div`
    display: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,ha=i(Qo.BodySmall)`
    margin-bottom: 0.5rem;
`,pa=i.div`
    display: flex;
`,fa=i.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Rt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Rt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,ga=({actionButtons:e,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},l=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},c=(n=!1)=>(n?(e=>{const t=Oo(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(e):e).map(((e,i)=>{let o;switch(e.type){case"download":o=n?(c=e.args,r(ua,{children:[t(ha,{weight:"semibold",children:c&&c.children||"Download the app"}),r(pa,{children:[t(fa,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),t(fa,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):t(da,{onClick:l(e),...e.args,"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const r=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=t(da,{...e.args,onClick:l(e),"data-testid":r});break}case"component":{const t=e.args;o=t&&t.render||null;break}default:o=null}var c;if(o)return t(sa,{children:o},`action-button-${i+1}`)}));if(e&&e.length>0){return t(i?ca:la,{children:c(i)})}return t(n,{})},ma={collections:{base:{InputBoxShadow:o`
        inset 0 0 6px 1px ${Lt.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 6px 1px ${Lt.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${Lt.Shadow.Elevation}
 `}},defaultValue:"base"},ya=e=>t=>{const r=t.theme,n=Et(ma,r[At.designTokenScheme]);return r.options?.designToken?Ot(n,e,r.options.designToken):Ot(n,e)},ba=(ya("InputBoxShadow"),ya("InputErrorBoxShadow"),ya("ElevationBoxShadow")),va=i.ul`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    max-height: 20rem;

    background: ${Lt.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${ba};
`,$a=i.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        border-left: 0.25rem solid ${Lt.Primary};
        display: flex;
        flex-direction: column;
    }
`,wa=i(Qo.Hyperlink.Small)`
    ${Uo("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Lt.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Lt.Primary};
    }
    :hover {
        color: ${Lt.Accent.Light[1]};
    }

    ${Rt.tablet} {
        ${Uo("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,xa=i.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 0;

    :first-child {
        padding-top: 1rem;
    }

    :last-child {
        padding-bottom: 1rem;
    }

    ${Rt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,Sa=({items:e,mobile:r=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(r=!1)=>e.map(((e,n)=>{const{children:i,options:a,...l}=e;return t(xa,{children:t(wa,{"data-testid":r?`link__mobile-${n+1}`:`link__${n+1}`,weight:"bold",...l,onClick:o(e),...a,children:i})},n)}));if(e&&e.length>0){return t(r?$a:va,{children:a(r)})}return t(n,{})};var _a,Ca={};Object.defineProperty(Ca,"__esModule",{value:!0});var ka=e;const Fa=e=>ka.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ka.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});Fa.displayName="ChevronUpIcon",_a=Ca.ChevronUpIcon=Fa;const Ba=i.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${Rt.tablet} {
        display: none;
    }
`,Ha=i.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,ja=i.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        margin-left: 0;
    }
    ${Rt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Da=i(Qo.Hyperlink.Small)`
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

    ${Rt.tablet} {
        color: ${Lt.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Lt.Neutral[1]};
        }
    }
`,za=i.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Oa=i.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Lt.Primary};

    ${Rt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Lt.Primary};
    }
`,Ea=i.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Aa=i(Tt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Na=i(_a)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Lt.Neutral[3]};
    :hover {
        color: ${Lt.Neutral[1]};
    }
`,Ia=({items:e,selectedId:i,mobile:o=!1,onItemClick:a})=>{const[l,u]=s(-1),[h,p]=s(!1),f=d(null);c((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&g()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const g=()=>{p(!1)},m=(e,t)=>r=>{r.stopPropagation(),u(t),p(!0),a(r,e)},y=(e,t)=>{e.stopPropagation(),a(e,t),p(!1)},b=()=>e.map(((e,n)=>{const a=(e=>{if(e.id===i)return!0;if(e?.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(e),{children:c,options:s,...d}=e,u=o?`link__mobile-${n+1}`:`link__${n+1}`,p=l>=0&&l===n&&h;return r(ja,{children:[r(Da,{"data-testid":u,weight:a?o?"bold":"semibold":"regular",$selected:a,...d,onClick:m(e,n),...s,children:[t(za,{children:c}),a&&t(Oa,{}),o&&e.subMenu&&t(Ea,{children:t(Aa,{"data-testid":`${u}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand",children:t(Na,{})})})]}),p&&t(Sa,{items:e.subMenu,mobile:o,onItemClick:y})]},n)}));if(e&&e.length>0){return t(o?Ha:Ba,{ref:f,children:b()})}return t(n,{})},La=l.forwardRef((({items:e,id:i,selectedId:o,compress:a=!1,fixed:l=!0,resources:d=Wa,hideNavElements:u=!1,drawerDismissalExclusions:h=[],actionButtons:p,onItemClick:f,onActionButtonClick:g,onBrandClick:m,...y},b)=>{const[v,$]=s(!1),[w,x]=s(!1),{primary:S=Wa.primary,secondary:_}=d;c((()=>(F(),window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)})),[]);const C=()=>{$(!1),setTimeout((()=>{x(!1)}),550)},k=e=>v&&-1===h.indexOf(e),F=()=>{window.innerWidth<=Pt.tablet&&v&&C()},B=(e,t)=>{m&&(e.preventDefault(),m(t)),k("brand-click")&&C()},H=(e,t)=>{t.onClick?t.onClick(e):f&&(e.preventDefault(),f(t)),!t?.subMenu&&k("item-click")&&C()},j=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):g&&(e.preventDefault(),g(t)),k("item-click")&&C()},D=()=>{$(!0),x(!0)},z=()=>{k("close-button-click")&&C()};return r(Gt,{ref:b,$fixed:l,id:i||"navbar-wrapper","data-testid":y["data-testid"]||"navbar-wrapper",children:[t(ar,{}),r(ir.Content,{children:[r(Ut,{$compress:a,children:[r(Jt,{children:[t(gr,{resources:S,compress:a,onClick:B,"data-testid":"main__brand",type:"primary"}),_&&r(n,{children:[t(Kt,{$compress:a}),t(gr,{resources:_,compress:a,onClick:B,"data-testid":"main__brand-secondary",type:"secondary"})]})]}),!u&&r(Zt,{children:[t(Ia,{items:e.desktop,onItemClick:H,selectedId:o}),t(ga,{actionButtons:p&&p.desktop,onActionButtonClick:j}),t(qt,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:D,focusHighlight:!1,children:t(Yt,{})})]})]}),!u&&t(ur,{show:w,enableOverlayClick:!0,onOverlayClick:z,children:r(kr,{show:v,resources:{primary:S,secondary:_},onClose:z,onBrandClick:B,actionButtons:p,children:[t(Ia,{items:e.mobile||e.desktop,onItemClick:H,selectedId:o,mobile:!0}),t(ga,{actionButtons:p&&(p?.mobile||p.desktop),onActionButtonClick:j,mobile:!0})]})})]})]})})),Wa={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},Ta=Xt,Pa=3.5;export{La as Navbar,Ta as NavbarHeight,Pa as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
