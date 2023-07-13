import{jsx as t,jsxs as e}from"react/jsx-runtime";import r,{useState as n,useRef as o,useEffect as i}from"react";import a from"react-dom";import c,{css as l}from"styled-components";import{CrossIcon as d}from"@lifesg/react-icons/cross";const s=c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return l`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,u=c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=l`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=l`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=l`
                transition: none;
            `),e}}
`,h=({show:e=!1,rootId:c,onOverlayClick:l,children:d,backgroundOpacity:h,backgroundBlur:v=!0,disableTransition:f=!1,enableOverlayClick:g=!1,zIndex:y,id:b})=>{const[m,B]=n(null),[w,E]=n(),_=o(),k=o(null),D=d&&r.cloneElement(d,{ref:k}),A=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root";i((()=>{if(e){const t=x();if($(t),!t){const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}}else if(!_.current){const t=setTimeout((()=>{T("remove")}),200);return()=>clearTimeout(t)}}),[e]),i((()=>{B(C());const t=x();return $(t),t||O(),()=>{T("remove")}}),[]);const $=t=>{_.current=t,E(t)},C=()=>document&&c?document.getElementById(c):document?document.body:null,x=()=>document.body.classList.contains(F),O=()=>{if(!document.getElementById(p)){const t=document.createElement("style");t.id=p;const e=document.documentElement.clientWidth,r=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${F} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${F}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},T=t=>{const e=document.body.classList.contains(F);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(F):document.body.classList.add(F)},S=t=>{const e=k.current?.firstChild;e&&e.contains(t.target)||l&&g&&(t.preventDefault(),l())};return m?a.createPortal(t(s,{id:A,"data-testid":A,$show:e,zIndex:y,$stacked:w,children:d&&t(u,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:h||(w?.5:.8),$backgroundBlur:v,$disableTransition:f,$enableOverlayClick:g,onClick:S,children:D})}),m):null},p="lifesg-ds-overlay-stylesheet",F="lifesg-ds-overlay-open",v={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(v).reduce(((e,r)=>{const n=v[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),g=f("max-width"),y=(f("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.show,r=t.animationFrom||"bottom",e?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,r}}

    ${g.mobileL} {
        height: calc(
            ${t=>t.verticalHeight?`${t.verticalHeight}px`:"1vh"} * 100
        );

        top: ${t=>t.offsetTop||0}px;
    }
`);var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,B="object"==typeof b&&b&&b.Object===Object&&b,w="object"==typeof self&&self&&self.Object===Object&&self,E=B||w||Function("return this")(),_=E.Symbol,k=_,D=Object.prototype,A=D.hasOwnProperty,$=D.toString,C=k?k.toStringTag:void 0;var x=function(t){var e=A.call(t,C),r=t[C];try{t[C]=void 0;var n=!0}catch(t){}var o=$.call(t);return n&&(e?t[C]=r:delete t[C]),o},O=Object.prototype.toString;var T=x,S=function(t){return O.call(t)},j=_?_.toStringTag:void 0;var I=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?T(t):S(t)};var V=I,z=function(t){return null!=t&&"object"==typeof t};var L=function(t){return"symbol"==typeof t||z(t)&&"[object Symbol]"==V(t)},P=m,R=L,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var H=function(t,e){if(P(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!R(t))||(G.test(t)||!N.test(t)||null!=e&&t in Object(e))};var M=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=I,K=M;var U,q=function(t){if(!K(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},J=E["__core-js_shared__"],Q=(U=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"";var X=function(t){return!!Q&&Q in t},Y=Function.prototype.toString;var Z=q,tt=X,et=M,rt=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=/^\[object .+?Constructor\]$/,ot=Function.prototype,it=Object.prototype,at=ot.toString,ct=it.hasOwnProperty,lt=RegExp("^"+at.call(ct).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var dt=function(t){return!(!et(t)||tt(t))&&(Z(t)?lt:nt).test(rt(t))},st=function(t,e){return null==t?void 0:t[e]};var ut=function(t,e){var r=st(t,e);return dt(r)?r:void 0},ht=ut(Object,"create"),pt=ht;var Ft=function(){this.__data__=pt?pt(null):{},this.size=0};var vt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft=ht,gt=Object.prototype.hasOwnProperty;var yt=function(t){var e=this.__data__;if(ft){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return gt.call(e,t)?e[t]:void 0},bt=ht,mt=Object.prototype.hasOwnProperty;var Bt=ht;var wt=Ft,Et=vt,_t=yt,kt=function(t){var e=this.__data__;return bt?void 0!==e[t]:mt.call(e,t)},Dt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Bt&&void 0===e?"__lodash_hash_undefined__":e,this};function At(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}At.prototype.clear=wt,At.prototype.delete=Et,At.prototype.get=_t,At.prototype.has=kt,At.prototype.set=Dt;var $t=At;var Ct=function(){this.__data__=[],this.size=0};var xt=function(t,e){return t===e||t!=t&&e!=e};var Ot=function(t,e){for(var r=t.length;r--;)if(xt(t[r][0],e))return r;return-1},Tt=Ot,St=Array.prototype.splice;var jt=Ot;var It=Ot;var Vt=Ot;var zt=Ct,Lt=function(t){var e=this.__data__,r=Tt(e,t);return!(r<0)&&(r==e.length-1?e.pop():St.call(e,r,1),--this.size,!0)},Pt=function(t){var e=this.__data__,r=jt(e,t);return r<0?void 0:e[r][1]},Rt=function(t){return It(this.__data__,t)>-1},Nt=function(t,e){var r=this.__data__,n=Vt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Gt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Gt.prototype.clear=zt,Gt.prototype.delete=Lt,Gt.prototype.get=Pt,Gt.prototype.has=Rt,Gt.prototype.set=Nt;var Ht=Gt,Mt=ut(E,"Map"),Wt=$t,Kt=Ht,Ut=Mt;var qt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Jt=function(t,e){var r=t.__data__;return qt(e)?r["string"==typeof e?"string":"hash"]:r.map},Qt=Jt;var Xt=Jt;var Yt=Jt;var Zt=Jt;var te=function(){this.size=0,this.__data__={hash:new Wt,map:new(Ut||Kt),string:new Wt}},ee=function(t){var e=Qt(this,t).delete(t);return this.size-=e?1:0,e},re=function(t){return Xt(this,t).get(t)},ne=function(t){return Yt(this,t).has(t)},oe=function(t,e){var r=Zt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function ie(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ie.prototype.clear=te,ie.prototype.delete=ee,ie.prototype.get=re,ie.prototype.has=ne,ie.prototype.set=oe;var ae=ie;function ce(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(ce.Cache||ae),r}ce.Cache=ae;var le=ce;var de=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,se=/\\(\\)?/g,ue=function(t){var e=le(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(de,(function(t,r,n,o){e.push(n?o.replace(se,"$1"):r||t)})),e}));var he=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},pe=m,Fe=L,ve=_?_.prototype:void 0,fe=ve?ve.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(pe(e))return he(e,t)+"";if(Fe(e))return fe?fe.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},ye=ge;var be=m,me=H,Be=ue,we=function(t){return null==t?"":ye(t)};var Ee=L;var _e=function(t,e){return be(t)?t:me(t,e)?[t]:Be(we(t))},ke=function(t){if("string"==typeof t||Ee(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var De=function(t,e){for(var r=0,n=(e=_e(e,t)).length;null!=t&&r<n;)t=t[ke(e[r++])];return r&&r==n?t:void 0};var Ae=function(t,e,r){var n=null==t?void 0:De(t,e);return void 0===n?r:n};const $e=(t,e,r)=>e?Ae(r,e)||Ae(t,e):r||t;var Ce;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ce||(Ce={}));const xe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Oe=t=>e=>{const r=e.theme,n=((t,e)=>{const r=e||t.defaultValue;return Ae(t.collections,r)})(xe,r[Ce.colorScheme]);return r.options&&r.options.color?$e(n,t,r.options.color):$e(n,t)},Te=(Oe("Brand.1"),Oe("Brand.2"),Oe("Brand.3"),Oe("Brand.4"),Oe("Brand.5"),Oe("Brand.6"),Oe("Primary"),Oe("PrimaryDark"),Oe("Secondary"),{Light:{1:Oe("Accent.Light.1"),2:Oe("Accent.Light.2"),3:Oe("Accent.Light.3"),4:Oe("Accent.Light.4"),5:Oe("Accent.Light.5"),6:Oe("Accent.Light.6")},Dark:{1:Oe("Accent.Dark.1"),2:Oe("Accent.Dark.2"),3:Oe("Accent.Dark.3")}}),Se={1:Oe("Neutral.1"),2:Oe("Neutral.2"),3:Oe("Neutral.3"),4:Oe("Neutral.4"),5:Oe("Neutral.5"),6:Oe("Neutral.6"),7:Oe("Neutral.7"),8:Oe("Neutral.8")},je=(Oe("Validation.Green.Text"),Oe("Validation.Green.Icon"),Oe("Validation.Green.Border"),Oe("Validation.Green.Background"),Oe("Validation.Orange.Text"),Oe("Validation.Orange.Icon"),Oe("Validation.Orange.Border"),Oe("Validation.Orange.Background"),Oe("Validation.Orange.Badge"),Oe("Validation.Red.Text"),Oe("Validation.Red.Icon"),Oe("Validation.Red.Border"),Oe("Validation.Red.Background"),Oe("Validation.Blue.Text"),Oe("Validation.Blue.Icon"),Oe("Validation.Blue.Border"),Oe("Validation.Blue.Background"),Oe("Shadow.Accent"),Oe("Shadow.Red"),Oe("Shadow.Elevation"),c.button`
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

        ${({$highlight:t})=>t&&l`
                background-color: ${Se[7]};
            `}
    }
`),Ie=r.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:o="button",...i},a)=>t(je,{ref:a,$outline:n,$highlight:r,type:o,...i,children:e}))),Ve=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Se[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${g.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,ze=c(Ie)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Te.Light[1]};
    }
`,Le=c(d)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Se[4]};
`,Pe=Object.assign((({id:e="modal",show:r,animationFrom:o="bottom",children:a,enableOverlayClick:c=!0,rootComponentId:l,zIndex:d,onOverlayClick:s,dismissKeyboardOnShow:u=!0,...p})=>{const[F,v]=n(),[f,g]=n();i((()=>window.visualViewport?(m(),window.visualViewport.addEventListener("resize",m),()=>{window.visualViewport.removeEventListener("resize",m)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),i((()=>{r&&u&&document.activeElement?.blur?.()}),[r]);const b=()=>{const t=.01*window.innerHeight;v(t)},m=()=>{const t=.01*window.visualViewport.height;v(t),g(window.visualViewport.offsetTop)};return t(h,{"data-testid":`${e}-overlay`,show:r,enableOverlayClick:c,onOverlayClick:s,id:e,rootId:l,zIndex:d,children:t(y,{show:r,animationFrom:o,"data-testid":e,verticalHeight:F,offsetTop:f,...p,children:a})})}),{Box:({id:r="modal-box",children:n,onClose:o,showCloseButton:i=!0,...a})=>e(Ve,{"data-testid":r,...a,onClick:t=>{t.stopPropagation()},children:[i&&t(ze,{onClick:o,"data-testid":"close-button",focusHighlight:!1,children:t(Le,{})}),n]})});export{Pe as Modal};
//# sourceMappingURL=index.js.map
