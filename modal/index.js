import t,{jsx as e,jsxs as r}from"react/jsx-runtime";import n,{useState as o,useRef as i,useEffect as a}from"react";import c from"react-dom";import l,{css as d}from"styled-components";const s=l.div`
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
`,u=l.div`
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
`,h=({show:t=!1,rootId:r,onOverlayClick:l,children:d,backgroundOpacity:h,backgroundBlur:F=!0,disableTransition:f=!1,enableOverlayClick:g=!1,zIndex:y,id:b})=>{const[m,B]=o(null),[w,E]=o(),_=i(),C=i(null),k=d&&n.cloneElement(d,{ref:C}),D=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root";a((()=>{if(t){const t=x();if(A(t),!t){const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}}else if(!_.current){const t=setTimeout((()=>{T("remove")}),200);return()=>clearTimeout(t)}}),[t]),a((()=>{B($());const t=x();return A(t),t||O(),()=>{T("remove")}}),[]);const A=t=>{_.current=t,E(t)},$=()=>document&&r?document.getElementById(r):document?document.body:null,x=()=>document.body.classList.contains(v),O=()=>{if(!document.getElementById(p)){const t=document.createElement("style");t.id=p;const e=document.documentElement.clientWidth,r=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${v} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${v}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},T=t=>{const e=document.body.classList.contains(v);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(v):document.body.classList.add(v)},j=t=>{const e=C.current?.firstChild;e&&e.contains(t.target)||l&&g&&(t.preventDefault(),l())};return m?c.createPortal(e(s,{id:D,"data-testid":D,$show:t,zIndex:y,$stacked:w,children:d&&e(u,{"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:h||(w?.5:.8),$backgroundBlur:F,$disableTransition:f,$enableOverlayClick:g,onClick:j,children:k})}),m):null},p="lifesg-ds-overlay-stylesheet",v="lifesg-ds-overlay-open",F={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(F).reduce(((e,r)=>{const n=F[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),g=f("max-width"),y=(f("min-width"),l.div`
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
`);var b,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},B={};Object.defineProperty(B,"__esModule",{value:!0});var w=t;const E=t=>w.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:w.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});E.displayName="CrossIcon",b=B.CrossIcon=E;var _=Array.isArray,C="object"==typeof m&&m&&m.Object===Object&&m,k="object"==typeof self&&self&&self.Object===Object&&self,D=C||k||Function("return this")(),A=D.Symbol,$=A,x=Object.prototype,O=x.hasOwnProperty,T=x.toString,j=$?$.toStringTag:void 0;var S=function(t){var e=O.call(t,j),r=t[j];try{t[j]=void 0;var n=!0}catch(t){}var o=T.call(t);return n&&(e?t[j]=r:delete t[j]),o},L=Object.prototype.toString;var I=S,V=function(t){return L.call(t)},z=A?A.toStringTag:void 0;var P=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?I(t):V(t)};var R=P,N=function(t){return null!=t&&"object"==typeof t};var G=function(t){return"symbol"==typeof t||N(t)&&"[object Symbol]"==R(t)},H=_,M=G,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var U=function(t,e){if(H(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!M(t))||(K.test(t)||!W.test(t)||null!=e&&t in Object(e))};var Z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},q=P,J=Z;var Q,X=function(t){if(!J(t))return!1;var e=q(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Y=D["__core-js_shared__"],tt=(Q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+Q:"";var et=function(t){return!!tt&&tt in t},rt=Function.prototype.toString;var nt=X,ot=et,it=Z,at=function(t){if(null!=t){try{return rt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ct=/^\[object .+?Constructor\]$/,lt=Function.prototype,dt=Object.prototype,st=lt.toString,ut=dt.hasOwnProperty,ht=RegExp("^"+st.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pt=function(t){return!(!it(t)||ot(t))&&(nt(t)?ht:ct).test(at(t))},vt=function(t,e){return null==t?void 0:t[e]};var Ft=function(t,e){var r=vt(t,e);return pt(r)?r:void 0},ft=Ft(Object,"create"),gt=ft;var yt=function(){this.__data__=gt?gt(null):{},this.size=0};var bt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},mt=ft,Bt=Object.prototype.hasOwnProperty;var wt=function(t){var e=this.__data__;if(mt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Bt.call(e,t)?e[t]:void 0},Et=ft,_t=Object.prototype.hasOwnProperty;var Ct=ft;var kt=yt,Dt=bt,At=wt,$t=function(t){var e=this.__data__;return Et?void 0!==e[t]:_t.call(e,t)},xt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ct&&void 0===e?"__lodash_hash_undefined__":e,this};function Ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ot.prototype.clear=kt,Ot.prototype.delete=Dt,Ot.prototype.get=At,Ot.prototype.has=$t,Ot.prototype.set=xt;var Tt=Ot;var jt=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var Lt=function(t,e){for(var r=t.length;r--;)if(St(t[r][0],e))return r;return-1},It=Lt,Vt=Array.prototype.splice;var zt=Lt;var Pt=Lt;var Rt=Lt;var Nt=jt,Gt=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():Vt.call(e,r,1),--this.size,!0)},Ht=function(t){var e=this.__data__,r=zt(e,t);return r<0?void 0:e[r][1]},Mt=function(t){return Pt(this.__data__,t)>-1},Wt=function(t,e){var r=this.__data__,n=Rt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Kt.prototype.clear=Nt,Kt.prototype.delete=Gt,Kt.prototype.get=Ht,Kt.prototype.has=Mt,Kt.prototype.set=Wt;var Ut=Kt,Zt=Ft(D,"Map"),qt=Tt,Jt=Ut,Qt=Zt;var Xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Yt=function(t,e){var r=t.__data__;return Xt(e)?r["string"==typeof e?"string":"hash"]:r.map},te=Yt;var ee=Yt;var re=Yt;var ne=Yt;var oe=function(){this.size=0,this.__data__={hash:new qt,map:new(Qt||Jt),string:new qt}},ie=function(t){var e=te(this,t).delete(t);return this.size-=e?1:0,e},ae=function(t){return ee(this,t).get(t)},ce=function(t){return re(this,t).has(t)},le=function(t,e){var r=ne(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function de(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}de.prototype.clear=oe,de.prototype.delete=ie,de.prototype.get=ae,de.prototype.has=ce,de.prototype.set=le;var se=de;function ue(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(ue.Cache||se),r}ue.Cache=se;var he=ue;var pe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ve=/\\(\\)?/g,Fe=function(t){var e=he(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(pe,(function(t,r,n,o){e.push(n?o.replace(ve,"$1"):r||t)})),e}));var fe=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},ge=_,ye=G,be=A?A.prototype:void 0,me=be?be.toString:void 0;var Be=function t(e){if("string"==typeof e)return e;if(ge(e))return fe(e,t)+"";if(ye(e))return me?me.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},we=Be;var Ee=_,_e=U,Ce=Fe,ke=function(t){return null==t?"":we(t)};var De=G;var Ae=function(t,e){return Ee(t)?t:_e(t,e)?[t]:Ce(ke(t))},$e=function(t){if("string"==typeof t||De(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var xe=function(t,e){for(var r=0,n=(e=Ae(e,t)).length;null!=t&&r<n;)t=t[$e(e[r++])];return r&&r==n?t:void 0};var Oe=function(t,e,r){var n=null==t?void 0:xe(t,e);return void 0===n?r:n};const Te=(t,e,r)=>e?Oe(r,e)||Oe(t,e):r||t;var je;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(je||(je={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Le=t=>e=>{const r=e.theme,n=((t,e)=>{const r=e||t.defaultValue;return Oe(t.collections,r)})(Se,r[je.colorScheme]);return r.options&&r.options.color?Te(n,t,r.options.color):Te(n,t)},Ie=(Le("Brand.1"),Le("Brand.2"),Le("Brand.3"),Le("Brand.4"),Le("Brand.5"),Le("Brand.6"),Le("Primary"),Le("PrimaryDark"),Le("Secondary"),{Light:{1:Le("Accent.Light.1"),2:Le("Accent.Light.2"),3:Le("Accent.Light.3"),4:Le("Accent.Light.4"),5:Le("Accent.Light.5"),6:Le("Accent.Light.6")},Dark:{1:Le("Accent.Dark.1"),2:Le("Accent.Dark.2"),3:Le("Accent.Dark.3")}}),Ve={1:Le("Neutral.1"),2:Le("Neutral.2"),3:Le("Neutral.3"),4:Le("Neutral.4"),5:Le("Neutral.5"),6:Le("Neutral.6"),7:Le("Neutral.7"),8:Le("Neutral.8")},ze=(Le("Validation.Green.Text"),Le("Validation.Green.Icon"),Le("Validation.Green.Border"),Le("Validation.Green.Background"),Le("Validation.Orange.Text"),Le("Validation.Orange.Icon"),Le("Validation.Orange.Border"),Le("Validation.Orange.Background"),Le("Validation.Orange.Badge"),Le("Validation.Red.Text"),Le("Validation.Red.Icon"),Le("Validation.Red.Border"),Le("Validation.Red.Background"),Le("Validation.Blue.Text"),Le("Validation.Blue.Icon"),Le("Validation.Blue.Border"),Le("Validation.Blue.Background"),Le("Shadow.Accent"),Le("Shadow.Red"),Le("Shadow.Elevation"),l.button`
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

        ${({$highlight:t})=>t&&d`
                background-color: ${Ve[7]};
            `}
    }
`),Pe=n.forwardRef((({children:t,focusHighlight:r=!0,focusOutline:n="none",type:o="button",...i},a)=>e(ze,{ref:a,$outline:n,$highlight:r,type:o,...i,children:t}))),Re=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ve[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${g.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Ne=l(Pe)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Ie.Light[1]};
    }
`,Ge=l(b)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ve[4]};
`,He=Object.assign((({id:t="modal",show:r,animationFrom:n="bottom",children:i,enableOverlayClick:c=!0,rootComponentId:l,zIndex:d,onOverlayClick:s,dismissKeyboardOnShow:u=!0,...p})=>{const[v,F]=o(),[f,g]=o();a((()=>window.visualViewport?(m(),window.visualViewport.addEventListener("resize",m),()=>{window.visualViewport.removeEventListener("resize",m)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),a((()=>{r&&u&&document.activeElement?.blur?.()}),[r]);const b=()=>{const t=.01*window.innerHeight;F(t)},m=()=>{const t=.01*window.visualViewport.height;F(t),g(window.visualViewport.offsetTop)};return e(h,{"data-testid":`${t}-overlay`,show:r,enableOverlayClick:c,onOverlayClick:s,id:t,rootId:l,zIndex:d,children:e(y,{show:r,animationFrom:n,"data-testid":t,verticalHeight:v,offsetTop:f,...p,children:i})})}),{Box:({id:t="modal-box",children:n,onClose:o,showCloseButton:i=!0,...a})=>r(Re,{"data-testid":t,...a,onClick:t=>{t.stopPropagation()},children:[i&&e(Ne,{onClick:o,"data-testid":"close-button",focusHighlight:!1,children:e(Ge,{})}),n]})});export{He as Modal};
//# sourceMappingURL=index.js.map
