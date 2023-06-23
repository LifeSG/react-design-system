import e,{jsx as t,jsxs as r,Fragment as n}from"react/jsx-runtime";import i,{css as o,keyframes as a}from"styled-components";import l,{useEffect as c,useState as s,useRef as d}from"react";import u from"react-dom";var h,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f={};Object.defineProperty(f,"__esModule",{value:!0});var g=e;const m=e=>g.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:g.jsx("path",{d:"M3.375 15C3.139 15 2.934 14.9133 2.76 14.74C2.58667 14.566 2.5 14.361 2.5 14.125C2.5 13.889 2.58667 13.684 2.76 13.51C2.934 13.3367 3.139 13.25 3.375 13.25H16.625C16.861 13.25 17.066 13.3367 17.24 13.51C17.4133 13.684 17.5 13.889 17.5 14.125C17.5 14.361 17.4133 14.566 17.24 14.74C17.066 14.9133 16.861 15 16.625 15H3.375ZM3.375 10.875C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H3.375ZM3.375 6.75C3.139 6.75 2.934 6.66333 2.76 6.49C2.58667 6.316 2.5 6.111 2.5 5.875C2.5 5.639 2.58667 5.434 2.76 5.26C2.934 5.08667 3.139 5 3.375 5H16.625C16.861 5 17.066 5.08667 17.24 5.26C17.4133 5.434 17.5 5.639 17.5 5.875C17.5 6.111 17.4133 6.316 17.24 6.49C17.066 6.66333 16.861 6.75 16.625 6.75H3.375Z",fill:"currentColor"})});m.displayName="MenuIcon",h=f.MenuIcon=m;var y=Array.isArray,b="object"==typeof p&&p&&p.Object===Object&&p,v=b,w="object"==typeof self&&self&&self.Object===Object&&self,$=v||w||Function("return this")(),F=$.Symbol,x=F,S=Object.prototype,B=S.hasOwnProperty,C=S.toString,k=x?x.toStringTag:void 0;var _=function(e){var t=B.call(e,k),r=e[k];try{e[k]=void 0;var n=!0}catch(e){}var i=C.call(e);return n&&(t?e[k]=r:delete e[k]),i},A=Object.prototype.toString;var H=_,E=function(e){return A.call(e)},D=F?F.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":D&&D in Object(e)?H(e):E(e)};var z=function(e){return null!=e&&"object"==typeof e},O=j,I=z;var N=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==O(e)},T=y,W=N,L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var R=function(e,t){if(T(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!W(e))||(P.test(e)||!L.test(e)||null!=t&&e in Object(t))};var V=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M=j,U=V;var Y,G=function(e){if(!U(e))return!1;var t=M(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Q=$["__core-js_shared__"],X=(Y=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+Y:"";var J=function(e){return!!X&&X in e},K=Function.prototype.toString;var q=function(e){if(null!=e){try{return K.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Z=G,ee=J,te=V,re=q,ne=/^\[object .+?Constructor\]$/,ie=Function.prototype,oe=Object.prototype,ae=ie.toString,le=oe.hasOwnProperty,ce=RegExp("^"+ae.call(le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!te(e)||ee(e))&&(Z(e)?ce:ne).test(re(e))},de=function(e,t){return null==e?void 0:e[t]};var ue=function(e,t){var r=de(e,t);return se(r)?r:void 0},he=ue(Object,"create"),pe=he;var fe=function(){this.__data__=pe?pe(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},me=he,ye=Object.prototype.hasOwnProperty;var be=function(e){var t=this.__data__;if(me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ye.call(t,e)?t[e]:void 0},ve=he,we=Object.prototype.hasOwnProperty;var $e=he;var Fe=fe,xe=ge,Se=be,Be=function(e){var t=this.__data__;return ve?void 0!==t[e]:we.call(t,e)},Ce=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ke.prototype.clear=Fe,ke.prototype.delete=xe,ke.prototype.get=Se,ke.prototype.has=Be,ke.prototype.set=Ce;var _e=ke;var Ae=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t},Ee=He;var De=function(e,t){for(var r=e.length;r--;)if(Ee(e[r][0],t))return r;return-1},je=De,ze=Array.prototype.splice;var Oe=De;var Ie=De;var Ne=De;var Te=Ae,We=function(e){var t=this.__data__,r=je(t,e);return!(r<0)&&(r==t.length-1?t.pop():ze.call(t,r,1),--this.size,!0)},Le=function(e){var t=this.__data__,r=Oe(t,e);return r<0?void 0:t[r][1]},Pe=function(e){return Ie(this.__data__,e)>-1},Re=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ve(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ve.prototype.clear=Te,Ve.prototype.delete=We,Ve.prototype.get=Le,Ve.prototype.has=Pe,Ve.prototype.set=Re;var Me=Ve,Ue=ue($,"Map"),Ye=_e,Ge=Me,Qe=Ue;var Xe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var r=e.__data__;return Xe(t)?r["string"==typeof t?"string":"hash"]:r.map},Ke=Je;var qe=Je;var Ze=Je;var et=Je;var tt=function(){this.size=0,this.__data__={hash:new Ye,map:new(Qe||Ge),string:new Ye}},rt=function(e){var t=Ke(this,e).delete(e);return this.size-=t?1:0,t},nt=function(e){return qe(this,e).get(e)},it=function(e){return Ze(this,e).has(e)},ot=function(e,t){var r=et(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}at.prototype.clear=tt,at.prototype.delete=rt,at.prototype.get=nt,at.prototype.has=it,at.prototype.set=ot;var lt=at,ct=lt;function st(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(st.Cache||ct),r}st.Cache=ct;var dt=st;var ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,pt=function(e){var t=dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ut,(function(e,r,n,i){t.push(n?i.replace(ht,"$1"):r||e)})),t}));var ft=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},gt=y,mt=N,yt=F?F.prototype:void 0,bt=yt?yt.toString:void 0;var vt=function e(t){if("string"==typeof t)return t;if(gt(t))return ft(t,e)+"";if(mt(t))return bt?bt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},wt=vt;var $t=y,Ft=R,xt=pt,St=function(e){return null==e?"":wt(e)};var Bt=function(e,t){return $t(e)?e:Ft(e,t)?[e]:xt(St(e))},Ct=N;var kt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},_t=Bt,At=kt;var Ht=function(e,t){for(var r=0,n=(t=_t(t,e)).length;null!=e&&r<n;)e=e[At(t[r++])];return r&&r==n?e:void 0},Et=Ht;var Dt=function(e,t,r){var n=null==e?void 0:Et(e,t);return void 0===n?r:n};const jt=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,zt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var Ot;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ot||(Ot={}));const It={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Nt=e=>t=>{const r=t.theme,n=zt(It,r[Ot.colorScheme]);return r.options&&r.options.color?jt(n,e,r.options.color):jt(n,e)},Tt={Brand:{1:Nt("Brand.1"),2:Nt("Brand.2"),3:Nt("Brand.3"),4:Nt("Brand.4"),5:Nt("Brand.5"),6:Nt("Brand.6")},Primary:Nt("Primary"),PrimaryDark:Nt("PrimaryDark"),Secondary:Nt("Secondary"),Accent:{Light:{1:Nt("Accent.Light.1"),2:Nt("Accent.Light.2"),3:Nt("Accent.Light.3"),4:Nt("Accent.Light.4"),5:Nt("Accent.Light.5"),6:Nt("Accent.Light.6")},Dark:{1:Nt("Accent.Dark.1"),2:Nt("Accent.Dark.2"),3:Nt("Accent.Dark.3")}},Neutral:{1:Nt("Neutral.1"),2:Nt("Neutral.2"),3:Nt("Neutral.3"),4:Nt("Neutral.4"),5:Nt("Neutral.5"),6:Nt("Neutral.6"),7:Nt("Neutral.7"),8:Nt("Neutral.8")},Validation:{Green:{Text:Nt("Validation.Green.Text"),Icon:Nt("Validation.Green.Icon"),Border:Nt("Validation.Green.Border"),Background:Nt("Validation.Green.Background")},Orange:{Text:Nt("Validation.Orange.Text"),Icon:Nt("Validation.Orange.Icon"),Border:Nt("Validation.Orange.Border"),Background:Nt("Validation.Orange.Background"),Badge:Nt("Validation.Orange.Badge")},Red:{Text:Nt("Validation.Red.Text"),Icon:Nt("Validation.Red.Icon"),Border:Nt("Validation.Red.Border"),Background:Nt("Validation.Red.Background")},Blue:{Text:Nt("Validation.Blue.Text"),Icon:Nt("Validation.Blue.Icon"),Border:Nt("Validation.Blue.Border"),Background:Nt("Validation.Blue.Background")}},Shadow:{Accent:Nt("Shadow.Accent"),Red:Nt("Shadow.Red"),Elevation:Nt("Shadow.Elevation")}},Wt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Lt=e=>Object.keys(Wt).reduce(((t,r)=>{const n=Wt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Pt=Lt("max-width"),Rt=(Lt("min-width"),i.button`
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
                background-color: ${Tt.Neutral[7]};
            `}
    }
`),Vt=l.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...o},a)=>t(Rt,{ref:a,$outline:n,$highlight:r,type:i,...o,children:e}))),Mt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ut={notCompress:6,compress:4},Yt=i.div`
    position: ${e=>e.$fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Gt=i.nav`
    height: ${e=>e.$compress?Ut.compress:Ut.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Mt};

    ${Pt.tablet} {
        height: ${3.5}rem;
    }
`,Qt=i.div`
    display: flex;
    height: 100%;
    margin-left: 5rem;
    flex: 1;
    justify-content: flex-end;
    ${Pt.tablet} {
        margin-left: 0rem;
    }
`,Xt=i(Vt)`
    display: none;

    ${Pt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Jt=i(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Tt.Neutral[1]};
`,Kt=i.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
`,qt=i.div`
    display: flex;
    background-color: ${Tt.Neutral[5]};
    height: ${e=>e.$compress?2:2.5}rem;
    width: 1px;
    margin: 0 ${e=>e.$compress?1.125:1.5}rem;

    ${Pt.tablet} {
        height: 1.5rem;
        margin: 0 1rem;
    }
`,Zt=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1,...l}=e;return t(er,{ref:r,"data-testid":i,$type:o,$stretch:a,...l,children:n})})),er=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?o`
                padding: 0 3rem;
            `:o`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Pt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Pt.tablet} {
        max-width: 720px;
    }
    ${Pt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return o`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Pt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Pt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,tr=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1,...a}=e;return t(rr,{ref:r,"data-testid":i,$stretch:o,...a,children:n})})),rr=i.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?o`
                ${Pt.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:o`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,nr=l.forwardRef(((e,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:l=!1,...c}=e;return t(tr,{ref:r,"data-testid":i,className:o,stretch:l,...c,children:t(Zt,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:l,children:n})})})),ir={Section:tr,Container:Zt,Content:nr},or=i.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Pt.mobileL} {
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
`,ur=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:h=!1,enableOverlayClick:p=!1,zIndex:f,id:g})=>{const[m,y]=s(null),[b,v]=s(),w=d(),$=d(null),F=i&&l.cloneElement(i,{ref:$}),x=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";c((()=>{if(e){const e=C();if(S(e),!e){const e=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(e)}}else if(!w.current){const e=setTimeout((()=>{_("remove")}),200);return()=>clearTimeout(e)}}),[e]),c((()=>{y(B());const e=C();return S(e),e||k(),()=>{_("remove")}}),[]);const S=e=>{w.current=e,v(e)},B=()=>document&&r?document.getElementById(r):document?document.body:null,C=()=>document.body.classList.contains(pr),k=()=>{if(!document.getElementById(hr)){const e=document.createElement("style");e.id=hr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${pr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${pr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(pr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(pr):document.body.classList.add(pr)},A=e=>{const t=$.current?.firstChild;t&&t.contains(e.target)||n&&p&&(e.preventDefault(),n())};return m?u.createPortal(t(sr,{id:x,"data-testid":x,$show:e,zIndex:f,$stacked:b,children:i&&t(dr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(b?.5:.8),$backgroundBlur:a,$disableTransition:h,$enableOverlayClick:p,onClick:A,children:F})}),m):null},hr="lifesg-ds-overlay-stylesheet",pr="lifesg-ds-overlay-open",fr=i.a`
    display: flex;
    justify-content: center;

    img {
        width: auto;
        height: ${e=>"primary"===e.$type?e.$compress?1.25:1.625:e.$compress?2:2.5}rem;
        transition: ${Mt};
        object-fit: contain;

        ${Pt.tablet} {
            height: ${e=>"primary"===e.$type?1:1.5}rem;
        }
    }
`;const gr=({imgSrc:e,alt:r})=>t("img",{src:e,alt:r||"",onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),mr=({resources:e,compress:r,onClick:n,"data-testid":i="navbar-brand",type:o})=>t(fr,{role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{n&&n(e,o)},$compress:r,tabIndex:0,"data-testid":i,$type:o,children:t(gr,{imgSrc:e.logoSrc,alt:e.brandName+"-app-logo"})});var yr,br={};Object.defineProperty(br,"__esModule",{value:!0});var vr=e;const wr=e=>vr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:vr.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});wr.displayName="CrossIcon",yr=br.CrossIcon=wr;const $r=i.div`
    display: none;

    ${Pt.tablet} {
        display: flex;
    }
`,Fr=i.div`
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

	${Pt.tablet} {
        width: 75%;
    }

    ${Pt.mobileL} {
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
`,Br=i(yr)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Cr=i(Vt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Tt.Neutral[1]};

    :active,
    :focus {
        color: ${Tt.Primary};
    }
`,kr=l.forwardRef(((e,i)=>{const{show:o,resources:a,children:l,onClose:d,onBrandClick:u}=e,[h,p]=s(0),{primary:f,secondary:g}=a;c((()=>(m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)})),[]);const m=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return t($r,{ref:i,"data-testid":"drawer",children:t(Fr,{$show:o,$viewHeight:h,children:r(xr,{children:[r(Sr,{children:[r(Kt,{children:[t(mr,{resources:f,compress:!0,onClick:u,"data-testid":"drawer__brand",type:"primary"}),g&&r(n,{children:[t(qt,{}),t(mr,{resources:g,compress:!0,onClick:u,"data-testid":"drawer__brand-secondary",type:"secondary"})]})]}),t(Cr,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:t(Br,{})})]}),l]})})})}));var _r=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Ar=Me;var Hr=Me,Er=Ue,Dr=lt;var jr=Me,zr=function(){this.__data__=new Ar,this.size=0},Or=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Ir=function(e){return this.__data__.get(e)},Nr=function(e){return this.__data__.has(e)},Tr=function(e,t){var r=this.__data__;if(r instanceof Hr){var n=r.__data__;if(!Er||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Dr(n)}return r.set(e,t),this.size=r.size,this};function Wr(e){var t=this.__data__=new jr(e);this.size=t.size}Wr.prototype.clear=zr,Wr.prototype.delete=Or,Wr.prototype.get=Ir,Wr.prototype.has=Nr,Wr.prototype.set=Tr;var Lr=Wr;var Pr=lt,Rr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Vr=function(e){return this.__data__.has(e)};function Mr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Pr;++t<r;)this.add(e[t])}Mr.prototype.add=Mr.prototype.push=Rr,Mr.prototype.has=Vr;var Ur=Mr,Yr=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Gr=function(e,t){return e.has(t)};var Qr=function(e,t,r,n,i,o){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=o.get(e),d=o.get(t);if(s&&d)return s==t&&d==e;var u=-1,h=!0,p=2&r?new Ur:void 0;for(o.set(e,t),o.set(t,e);++u<l;){var f=e[u],g=t[u];if(n)var m=a?n(g,f,u,t,e,o):n(f,g,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Yr(t,(function(e,t){if(!Gr(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Xr=$.Uint8Array,Jr=He,Kr=Qr,qr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Zr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},en=F?F.prototype:void 0,tn=en?en.valueOf:void 0;var rn=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Xr(e),new Xr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Jr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=qr;case"[object Set]":var c=1&n;if(l||(l=Zr),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;n|=2,a.set(e,t);var d=Kr(l(e),l(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(tn)return tn.call(e)==tn.call(t)}return!1};var nn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},on=y;var an=function(e,t,r){var n=t(e);return on(e)?n:nn(n,r(e))};var ln=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},cn=function(){return[]},sn=Object.prototype.propertyIsEnumerable,dn=Object.getOwnPropertySymbols,un=dn?function(e){return null==e?[]:(e=Object(e),ln(dn(e),(function(t){return sn.call(e,t)})))}:cn;var hn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},pn=j,fn=z;var gn=function(e){return fn(e)&&"[object Arguments]"==pn(e)},mn=z,yn=Object.prototype,bn=yn.hasOwnProperty,vn=yn.propertyIsEnumerable,wn=gn(function(){return arguments}())?gn:function(e){return mn(e)&&bn.call(e,"callee")&&!vn.call(e,"callee")},$n={exports:{}};var Fn=function(){return!1};!function(e,t){var r=$,n=Fn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}($n,$n.exports);var xn=/^(?:0|[1-9]\d*)$/;var Sn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&xn.test(e))&&e>-1&&e%1==0&&e<t};var Bn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Cn=j,kn=Bn,_n=z,An={};An["[object Float32Array]"]=An["[object Float64Array]"]=An["[object Int8Array]"]=An["[object Int16Array]"]=An["[object Int32Array]"]=An["[object Uint8Array]"]=An["[object Uint8ClampedArray]"]=An["[object Uint16Array]"]=An["[object Uint32Array]"]=!0,An["[object Arguments]"]=An["[object Array]"]=An["[object ArrayBuffer]"]=An["[object Boolean]"]=An["[object DataView]"]=An["[object Date]"]=An["[object Error]"]=An["[object Function]"]=An["[object Map]"]=An["[object Number]"]=An["[object Object]"]=An["[object RegExp]"]=An["[object Set]"]=An["[object String]"]=An["[object WeakMap]"]=!1;var Hn=function(e){return _n(e)&&kn(e.length)&&!!An[Cn(e)]};var En=function(e){return function(t){return e(t)}},Dn={exports:{}};!function(e,t){var r=b,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Dn,Dn.exports);var jn=Hn,zn=En,On=Dn.exports,In=On&&On.isTypedArray,Nn=In?zn(In):jn,Tn=hn,Wn=wn,Ln=y,Pn=$n.exports,Rn=Sn,Vn=Nn,Mn=Object.prototype.hasOwnProperty;var Un=function(e,t){var r=Ln(e),n=!r&&Wn(e),i=!r&&!n&&Pn(e),o=!r&&!n&&!i&&Vn(e),a=r||n||i||o,l=a?Tn(e.length,String):[],c=l.length;for(var s in e)!t&&!Mn.call(e,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Rn(s,c))||l.push(s);return l},Yn=Object.prototype;var Gn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Yn)};var Qn=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Xn=Gn,Jn=Qn,Kn=Object.prototype.hasOwnProperty;var qn=G,Zn=Bn;var ei=Un,ti=function(e){if(!Xn(e))return Jn(e);var t=[];for(var r in Object(e))Kn.call(e,r)&&"constructor"!=r&&t.push(r);return t},ri=function(e){return null!=e&&Zn(e.length)&&!qn(e)};var ni=function(e){return ri(e)?ei(e):ti(e)},ii=an,oi=un,ai=ni;var li=function(e){return ii(e,ai,oi)},ci=Object.prototype.hasOwnProperty;var si=function(e,t,r,n,i,o){var a=1&r,l=li(e),c=l.length;if(c!=li(t).length&&!a)return!1;for(var s=c;s--;){var d=l[s];if(!(a?d in t:ci.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++s<c;){var g=e[d=l[s]],m=t[d];if(n)var y=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},di=ue($,"DataView"),ui=Ue,hi=ue($,"Promise"),pi=ue($,"Set"),fi=ue($,"WeakMap"),gi=j,mi=q,yi="[object Map]",bi="[object Promise]",vi="[object Set]",wi="[object WeakMap]",$i="[object DataView]",Fi=mi(di),xi=mi(ui),Si=mi(hi),Bi=mi(pi),Ci=mi(fi),ki=gi;(di&&ki(new di(new ArrayBuffer(1)))!=$i||ui&&ki(new ui)!=yi||hi&&ki(hi.resolve())!=bi||pi&&ki(new pi)!=vi||fi&&ki(new fi)!=wi)&&(ki=function(e){var t=gi(e),r="[object Object]"==t?e.constructor:void 0,n=r?mi(r):"";if(n)switch(n){case Fi:return $i;case xi:return yi;case Si:return bi;case Bi:return vi;case Ci:return wi}return t});var _i=Lr,Ai=Qr,Hi=rn,Ei=si,Di=ki,ji=y,zi=$n.exports,Oi=Nn,Ii="[object Arguments]",Ni="[object Array]",Ti="[object Object]",Wi=Object.prototype.hasOwnProperty;var Li=function(e,t,r,n,i,o){var a=ji(e),l=ji(t),c=a?Ni:Di(e),s=l?Ni:Di(t),d=(c=c==Ii?Ti:c)==Ti,u=(s=s==Ii?Ti:s)==Ti,h=c==s;if(h&&zi(e)){if(!zi(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new _i),a||Oi(e)?Ai(e,t,r,n,i,o):Hi(e,t,c,r,n,i,o);if(!(1&r)){var p=d&&Wi.call(e,"__wrapped__"),f=u&&Wi.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new _i),i(g,m,r,n,o)}}return!!h&&(o||(o=new _i),Ei(e,t,r,n,i,o))},Pi=z;var Ri=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Pi(t)&&!Pi(r)?t!=t&&r!=r:Li(t,r,n,i,e,o))},Vi=Lr,Mi=Ri;var Ui=V;var Yi=function(e){return e==e&&!Ui(e)},Gi=Yi,Qi=ni;var Xi=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ji=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var l=r[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){var c=(l=r[i])[0],s=e[c],d=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var u=new Vi;if(n)var h=n(s,d,c,e,t,u);if(!(void 0===h?Mi(d,s,3,n,u):h))return!1}}return!0},Ki=function(e){for(var t=Qi(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Gi(i)]}return t},qi=Xi;var Zi=Bt,eo=wn,to=y,ro=Sn,no=Bn,io=kt;var oo=function(e,t){return null!=e&&t in Object(e)},ao=function(e,t,r){for(var n=-1,i=(t=Zi(t,e)).length,o=!1;++n<i;){var a=io(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&no(i)&&ro(a,i)&&(to(e)||eo(e))};var lo=Ri,co=Dt,so=function(e,t){return null!=e&&ao(e,t,oo)},uo=R,ho=Yi,po=Xi,fo=kt;var go=Ht;var mo=function(e){return function(t){return null==t?void 0:t[e]}},yo=function(e){return function(t){return go(t,e)}},bo=R,vo=kt;var wo=function(e){var t=Ki(e);return 1==t.length&&t[0][2]?qi(t[0][0],t[0][1]):function(r){return r===e||Ji(r,e,t)}},$o=function(e,t){return uo(e)&&ho(t)?po(fo(e),t):function(r){var n=co(r,e);return void 0===n&&n===t?so(r,e):lo(t,n,3)}},Fo=function(e){return e},xo=y,So=function(e){return bo(e)?mo(vo(e)):yo(e)};var Bo=/\s/;var Co=function(e){for(var t=e.length;t--&&Bo.test(e.charAt(t)););return t},ko=/^\s+/;var _o=function(e){return e?e.slice(0,Co(e)+1).replace(ko,""):e},Ao=V,Ho=N,Eo=/^[-+]0x[0-9a-f]+$/i,Do=/^0b[01]+$/i,jo=/^0o[0-7]+$/i,zo=parseInt;var Oo=function(e){if("number"==typeof e)return e;if(Ho(e))return NaN;if(Ao(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ao(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_o(e);var r=Do.test(e);return r||jo.test(e)?zo(e.slice(2),r?2:8):Eo.test(e)?NaN:+e},Io=1/0;var No=function(e){return e?(e=Oo(e))===Io||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var To=_r,Wo=function(e){return"function"==typeof e?e:null==e?Fo:"object"==typeof e?xo(e)?$o(e[0],e[1]):wo(e):So(e)},Lo=function(e){var t=No(e),r=t%1;return t==t?r?t-r:t:0},Po=Math.max;var Ro=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Lo(r);return i<0&&(i=Po(n+i,0)),To(e,Wo(t),i)};const Vo=i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Mo=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Uo=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Tt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Mo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Yo=i(Uo)`
    animation-delay: -0.45s;
`,Go=i(Uo)`
    animation-delay: -0.3s;
`,Qo=i(Uo)`
    animation-delay: -0.15s;
`,Xo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Jo={collections:{base:{D1:{fontFamily:Xo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ko=e=>t=>{const r=t.theme,n=zt(Jo,r[Ot.textStyleScheme]);return r.options&&r.options.textStyle?jt(n,e,r.options.textStyle):jt(n,e)},qo={D1:{fontFamily:Ko("D1.fontFamily"),fontSize:Ko("D1.fontSize"),fontWeight:Ko("D1.fontWeight"),lineHeight:Ko("D1.lineHeight"),letterSpacing:Ko("D1.letterSpacing")},D2:{fontFamily:Ko("D2.fontFamily"),fontSize:Ko("D2.fontSize"),fontWeight:Ko("D2.fontWeight"),lineHeight:Ko("D2.lineHeight"),letterSpacing:Ko("D2.letterSpacing")},D3:{fontFamily:Ko("D3.fontFamily"),fontSize:Ko("D3.fontSize"),fontWeight:Ko("D3.fontWeight"),lineHeight:Ko("D3.lineHeight"),letterSpacing:Ko("D3.letterSpacing")},D4:{fontFamily:Ko("D4.fontFamily"),fontSize:Ko("D4.fontSize"),fontWeight:Ko("D4.fontWeight"),lineHeight:Ko("D4.lineHeight"),letterSpacing:Ko("D4.letterSpacing")},DBody:{fontFamily:Ko("DBody.fontFamily"),fontSize:Ko("DBody.fontSize"),fontWeight:Ko("DBody.fontWeight"),lineHeight:Ko("DBody.lineHeight"),letterSpacing:Ko("DBody.letterSpacing")},H1:{fontFamily:Ko("H1.fontFamily"),fontSize:Ko("H1.fontSize"),fontWeight:Ko("H1.fontWeight"),lineHeight:Ko("H1.lineHeight"),letterSpacing:Ko("H1.letterSpacing")},H2:{fontFamily:Ko("H2.fontFamily"),fontSize:Ko("H2.fontSize"),fontWeight:Ko("H2.fontWeight"),lineHeight:Ko("H2.lineHeight"),letterSpacing:Ko("H2.letterSpacing")},H3:{fontFamily:Ko("H3.fontFamily"),fontSize:Ko("H3.fontSize"),fontWeight:Ko("H3.fontWeight"),lineHeight:Ko("H3.lineHeight"),letterSpacing:Ko("H3.letterSpacing")},H4:{fontFamily:Ko("H4.fontFamily"),fontSize:Ko("H4.fontSize"),fontWeight:Ko("H4.fontWeight"),lineHeight:Ko("H4.lineHeight"),letterSpacing:Ko("H4.letterSpacing")},H5:{fontFamily:Ko("H5.fontFamily"),fontSize:Ko("H5.fontSize"),fontWeight:Ko("H5.fontWeight"),lineHeight:Ko("H5.lineHeight"),letterSpacing:Ko("H5.letterSpacing")},H6:{fontFamily:Ko("H6.fontFamily"),fontSize:Ko("H6.fontSize"),fontWeight:Ko("H6.fontWeight"),lineHeight:Ko("H6.lineHeight"),letterSpacing:Ko("H6.letterSpacing")},Body:{fontFamily:Ko("Body.fontFamily"),fontSize:Ko("Body.fontSize"),fontWeight:Ko("Body.fontWeight"),lineHeight:Ko("Body.lineHeight"),letterSpacing:Ko("Body.letterSpacing")},BodySmall:{fontFamily:Ko("BodySmall.fontFamily"),fontSize:Ko("BodySmall.fontSize"),fontWeight:Ko("BodySmall.fontWeight"),lineHeight:Ko("BodySmall.lineHeight"),letterSpacing:Ko("BodySmall.letterSpacing")},XSmall:{fontFamily:Ko("XSmall.fontFamily"),fontSize:Ko("XSmall.fontSize"),fontWeight:Ko("XSmall.fontWeight"),lineHeight:Ko("XSmall.lineHeight"),letterSpacing:Ko("XSmall.letterSpacing")}},Zo=e=>{switch(e){case 700:case"bold":return Xo.Bold;case 600:case"semibold":return Xo.Semibold;case 300:case"light":return Xo.Light;case 400:case"regular":return Xo.Regular;default:return""}},ea=(e,t)=>r=>{const n=qo[e].fontFamily(r),i=qo[e].fontWeight(r);return Object.values(Xo).includes(n)?o`
                font-family: ${Zo(t)||Zo(i)||n};
                font-weight: normal !important;
            `:o`
            font-family: ${n};
            font-weight: ${(ta(t)||i)??"normal"};
        `},ta=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ra=(e,t,r=!1)=>n=>{const i=qo[e],a=i.fontSize(n);return o`
            ${ea(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},na=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var ia,oa={};Object.defineProperty(oa,"__esModule",{value:!0});var aa=e;const la=e=>aa.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:aa.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var ca;la.displayName="ExternalIcon",ia=oa.ExternalIcon=la,function(e){e.D1=i.h1`
        ${e=>o`
                ${ra("D1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>o`
                ${ra("D2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>o`
                ${ra("D3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>o`
                ${ra("D4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>o`
                ${ra("DBody",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>o`
                ${ra("H1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>o`
                ${ra("H2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>o`
                ${ra("H3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>o`
                ${ra("H4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>o`
                ${ra("H5",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>o`
                ${ra("H6",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>o`
                ${ra("Body",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>o`
                ${ra("BodySmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>o`
                ${ra("XSmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${na(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ua({...e,textStyle:"Body"}),Small:e=>ua({...e,textStyle:"BodySmall"})}}(ca||(ca={}));const sa=i.a`
    ${e=>o`
            ${ra(e.textStyle,e.weight)}
            color: ${Tt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Tt.Secondary};

                svg {
                    color: ${Tt.Secondary};
                }
            }
        `}
`,da=i(ia)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ua=({external:e=!1,children:n,...i})=>r(sa,{...i,children:[n,e&&t(da,{})]});var ha;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ha||(ha={}));const pa=i.button`
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
                    background-color: ${Tt.Neutral[8](e)};
                    border: 1px solid ${Tt.Primary(e)};

                    span {
                        color: ${Tt.Primary(e)};
                    }
                `;case"light":return o`
                    background-color: ${Tt.Neutral[8](e)};
                    border: 1px solid ${Tt.Neutral[5](e)};

                    span {
                        color: ${Tt.Primary(e)};
                    }
                `;case"disabled":return o`
                    background-color: ${Tt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Tt.Neutral[3](e)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Tt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Tt.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${Tt.Primary(e)};
                    border: 1px solid transparent;

                    ${Pt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Tt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${ra("H5","semibold")}
                    }

                    ${Pt.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${ra("H4","semibold")}
                    }

                    ${Pt.mobileS} {
                        height: auto;
                    }
                `}
`,fa=i((({color:e,className:n,size:i=18})=>r(Vo,{className:n,$size:i,$color:e,children:[t(Uo,{id:"inner1",$size:i-2,$borderWidth:2}),t(Yo,{id:"inner2",$size:i-2,$borderWidth:2}),t(Go,{id:"inner3",$size:i-2,$borderWidth:2}),t(Qo,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Tt.Primary(e);break;case"disabled":t=Tt.Neutral[3](e);break;default:t=Tt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ga={Default:l.forwardRef(((e,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return r(pa,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&t(fa,{...s}),t("span",{children:i})]})})),Small:l.forwardRef(((e,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return r(pa,{ref:n,"data-testid":c["data-testid"]||"button",disabled:o,...s,...c,children:[a&&t(fa,{...s,size:16}),t("span",{children:i})]})}))},ma=i.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Pt.tablet} {
        display: none;
    }
`,ya=i.ul`
    display: none;
    list-style: none;

    ${Pt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Pt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,ba=i.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Pt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${Pt.mobileL} {
        padding: 0 1rem;
    }
`,va=i(ga.Small)`
    ${Pt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,wa=i.div`
    display: none;

    ${Pt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,$a=i(ca.BodySmall)`
    margin-bottom: 0.5rem;
`,Fa=i.div`
    display: flex;
`,xa=i.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Pt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Pt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,Sa=({actionButtons:e,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},l=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},c=(n=!1)=>(n?(e=>{const t=Ro(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(e):e).map(((e,i)=>{let o;switch(e.type){case"download":o=n?(c=e.args,r(wa,{children:[t($a,{weight:"semibold",children:c&&c.children||"Download the app"}),r(Fa,{children:[t(xa,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),t(xa,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):t(va,{onClick:l(e),...e.args,"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const r=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=t(va,{...e.args,onClick:l(e),"data-testid":r});break}case"component":{const t=e.args;o=t&&t.render||null;break}default:o=null}var c;if(o)return t(ba,{children:o},`action-button-${i+1}`)}));if(e&&e.length>0){return t(i?ya:ma,{children:c(i)})}return t(n,{})},Ba={collections:{base:{InputBoxShadow:o`
        inset 0 0 6px 1px ${Tt.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 6px 1px ${Tt.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${Tt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:o`
        inset 0 0 6px 1px ${Tt.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 6px 1px ${Tt.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${Tt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Ca=e=>t=>{const r=t.theme,n=zt(Ba,r[Ot.designTokenScheme]);return r.options?.designToken?jt(n,e,r.options.designToken):jt(n,e)},ka=(Ca("InputBoxShadow"),Ca("InputErrorBoxShadow"),Ca("ElevationBoxShadow")),_a=(Ca("Table.Header"),Ca("Table.Cell.Primary"),Ca("Table.Cell.Secondary"),Ca("Table.Cell.Selected"),Ca("Table.Cell.Hover"),i.ul`
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

    background: ${Tt.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${ka};
`),Aa=i.ul`
    display: none;
    list-style: none;

    ${Pt.tablet} {
        border-left: 0.25rem solid ${Tt.Primary};
        display: flex;
        flex-direction: column;
    }
`,Ha=i(ca.Hyperlink.Small)`
    ${ra("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Tt.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Tt.Primary};
    }
    :hover {
        color: ${Tt.Accent.Light[1]};
    }

    ${Pt.tablet} {
        ${ra("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,Ea=i.li`
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

    ${Pt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,Da=({items:e,mobile:r=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(r=!1)=>e.map(((e,n)=>{const{children:i,options:a,...l}=e;return t(Ea,{children:t(Ha,{"data-testid":r?`link__mobile-${n+1}`:`link__${n+1}`,weight:"bold",...l,onClick:o(e),...a,children:i})},n)}));if(e&&e.length>0){return t(r?Aa:_a,{children:a(r)})}return t(n,{})};var ja,za={};Object.defineProperty(za,"__esModule",{value:!0});var Oa=e;const Ia=e=>Oa.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Oa.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});Ia.displayName="ChevronUpIcon",ja=za.ChevronUpIcon=Ia;const Na=i.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${Pt.tablet} {
        display: none;
    }
`,Ta=i.ul`
    display: none;
    list-style: none;

    ${Pt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Wa=i.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        margin-left: 0;
    }
    ${Pt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,La=i(ca.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Tt.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Tt.Neutral[1]};
    }

    ${Pt.tablet} {
        color: ${Tt.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Tt.Neutral[1]};
        }
    }
`,Pa=i.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Ra=i.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Tt.Primary};

    ${Pt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Tt.Primary};
    }
`,Va=i.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Ma=i(Vt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Ua=i(ja)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Tt.Neutral[3]};
    :hover {
        color: ${Tt.Neutral[1]};
    }
`,Ya=({items:e,selectedId:i,mobile:o=!1,onItemClick:a})=>{const[l,u]=s(-1),[h,p]=s(!1),f=d(null);c((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&g()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const g=()=>{p(!1)},m=(e,t)=>r=>{r.stopPropagation(),u(t),p(!0),a(r,e)},y=(e,t)=>{e.stopPropagation(),a(e,t),p(!1)},b=()=>e.map(((e,n)=>{const a=(e=>{if(e.id===i)return!0;if(e?.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(e),{children:c,options:s,...d}=e,u=o?`link__mobile-${n+1}`:`link__${n+1}`,p=l>=0&&l===n&&h;return r(Wa,{children:[r(La,{"data-testid":u,weight:a?o?"bold":"semibold":"regular",$selected:a,...d,onClick:m(e,n),...s,children:[t(Pa,{children:c}),a&&t(Ra,{}),o&&e.subMenu&&t(Va,{children:t(Ma,{"data-testid":`${u}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand",children:t(Ua,{})})})]}),p&&t(Da,{items:e.subMenu,mobile:o,onItemClick:y})]},n)}));if(e&&e.length>0){return t(o?Ta:Na,{ref:f,children:b()})}return t(n,{})},Ga=l.forwardRef((({items:e,id:i,selectedId:o,compress:a=!1,fixed:l=!0,resources:d=Qa,hideNavElements:u=!1,drawerDismissalExclusions:h=[],actionButtons:p,onItemClick:f,onActionButtonClick:g,onBrandClick:m,masthead:y=!0,layout:b="default",...v},w)=>{const[$,F]=s(!1),[x,S]=s(!1),B="stretch"===b,{primary:C=Qa.primary,secondary:k}=d;c((()=>(H(),window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H)})),[]);const _=()=>{F(!1),setTimeout((()=>{S(!1)}),550)},A=e=>$&&-1===h.indexOf(e),H=()=>{window.innerWidth<=Wt.tablet&&$&&_()},E=(e,t)=>{m&&(e.preventDefault(),m(t)),A("brand-click")&&_()},D=(e,t)=>{t.onClick?t.onClick(e):f&&(e.preventDefault(),f(t)),!t?.subMenu&&A("item-click")&&_()},j=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):g&&(e.preventDefault(),g(t)),A("item-click")&&_()},z=()=>{F(!0),S(!0)},O=()=>{A("close-button-click")&&_()};return r(Yt,{ref:w,$fixed:l,id:i||"navbar-wrapper","data-testid":v["data-testid"]||"navbar-wrapper",children:[y&&t(ar,{}),r(ir.Content,{stretch:B,children:[r(Gt,{$compress:a,children:[r(Kt,{children:[t(mr,{resources:C,compress:a,onClick:E,"data-testid":"main__brand",type:"primary"}),k&&r(n,{children:[t(qt,{$compress:a}),t(mr,{resources:k,compress:a,onClick:E,"data-testid":"main__brand-secondary",type:"secondary"})]})]}),!u&&r(Qt,{children:[t(Ya,{items:e.desktop,onItemClick:D,selectedId:o}),t(Sa,{actionButtons:p&&p.desktop,onActionButtonClick:j}),t(Xt,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:z,focusHighlight:!1,children:t(Jt,{})})]})]}),!u&&t(ur,{show:x,enableOverlayClick:!0,onOverlayClick:O,children:r(kr,{show:$,resources:{primary:C,secondary:k},onClose:O,onBrandClick:E,actionButtons:p,children:[t(Ya,{items:e.mobile||e.desktop,onItemClick:D,selectedId:o,mobile:!0}),t(Sa,{actionButtons:p&&(p?.mobile||p.desktop),onActionButtonClick:j,mobile:!0})]})})]})]})})),Qa={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},Xa=Ut,Ja=3.5;export{Ga as Navbar,Xa as NavbarHeight,Ja as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
