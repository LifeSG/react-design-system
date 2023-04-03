import t,{jsx as e,jsxs as n}from"react/jsx-runtime";import r,{useState as o,useRef as i,useEffect as a}from"react";import c from"react-dom";import l,{css as d}from"styled-components";const s=l.div`
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
`,h=({show:t=!1,rootId:n,onOverlayClick:l,children:d,backgroundOpacity:h,backgroundBlur:f=!0,disableTransition:g=!1,enableOverlayClick:y=!1,zIndex:b,id:m})=>{const[F,w]=o(null),[_,B]=o(),C=i(),$=i(null),E=d&&r.cloneElement(d,{ref:$}),k=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";a((()=>{if(t){const t=D();if(x(t),!t){const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}}else if(!C.current){const t=setTimeout((()=>{j("remove")}),200);return()=>clearTimeout(t)}}),[t]),a((()=>{w(O());const t=D();return x(t),t||A(),()=>{j("remove")}}),[]);const x=t=>{C.current=t,B(t)},O=()=>document&&n?document.getElementById(n):document?document.body:null,D=()=>document.body.classList.contains(v),A=()=>{if(!document.getElementById(p)){const t=document.createElement("style");t.id=p;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${v} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${v}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},j=t=>{const e=document.body.classList.contains(v);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(v):document.body.classList.add(v)},L=t=>{const e=$.current?.firstChild;e&&e.contains(t.target)||l&&y&&(t.preventDefault(),l())};return F?c.createPortal(e(s,{id:k,"data-testid":k,$show:t,zIndex:b,$stacked:_,children:d&&e(u,{"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:h||(_?.5:.8),$backgroundBlur:f,$disableTransition:g,$enableOverlayClick:y,onClick:L,children:E})}),F):null},p="lifesg-ds-overlay-stylesheet",v="lifesg-ds-overlay-open",f={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},g=t=>Object.keys(f).reduce(((e,n)=>{const r=f[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),y=g("max-width"),b=(g("min-width"),l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.show,n=t.animationFrom||"bottom",e?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,n}}

    ${y.mobileL} {
        height: calc(
            ${t=>t.verticalHeight?`${t.verticalHeight}px`:"1vh"} * 100
        );

        top: ${t=>t.offsetTop||0}px;
    }
`);var m,F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w={};Object.defineProperty(w,"__esModule",{value:!0});var _=t;const B=t=>_.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:_.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});B.displayName="CrossIcon",m=w.CrossIcon=B;var C=Array.isArray,$="object"==typeof F&&F&&F.Object===Object&&F,E="object"==typeof self&&self&&self.Object===Object&&self,k=$||E||Function("return this")(),x=k.Symbol,O=x,D=Object.prototype,A=D.hasOwnProperty,j=D.toString,L=O?O.toStringTag:void 0;var S=function(t){var e=A.call(t,L),n=t[L];try{t[L]=void 0;var r=!0}catch(t){}var o=j.call(t);return r&&(e?t[L]=n:delete t[L]),o},T=Object.prototype.toString;var z=S,I=function(t){return T.call(t)},V=x?x.toStringTag:void 0;var P=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?z(t):I(t)};var N=P,R=function(t){return null!=t&&"object"==typeof t};var G=function(t){return"symbol"==typeof t||R(t)&&"[object Symbol]"==N(t)},H=C,M=G,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var U=function(t,e){if(H(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!M(t))||(K.test(t)||!W.test(t)||null!=e&&t in Object(e))};var Z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},q=P,J=Z;var Q,X=function(t){if(!J(t))return!1;var e=q(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Y=k["__core-js_shared__"],tt=(Q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+Q:"";var et=function(t){return!!tt&&tt in t},nt=Function.prototype.toString;var rt=X,ot=et,it=Z,at=function(t){if(null!=t){try{return nt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ct=/^\[object .+?Constructor\]$/,lt=Function.prototype,dt=Object.prototype,st=lt.toString,ut=dt.hasOwnProperty,ht=RegExp("^"+st.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pt=function(t){return!(!it(t)||ot(t))&&(rt(t)?ht:ct).test(at(t))},vt=function(t,e){return null==t?void 0:t[e]};var ft=function(t,e){var n=vt(t,e);return pt(n)?n:void 0},gt=ft(Object,"create"),yt=gt;var bt=function(){this.__data__=yt?yt(null):{},this.size=0};var mt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ft=gt,wt=Object.prototype.hasOwnProperty;var _t=function(t){var e=this.__data__;if(Ft){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return wt.call(e,t)?e[t]:void 0},Bt=gt,Ct=Object.prototype.hasOwnProperty;var $t=gt;var Et=bt,kt=mt,xt=_t,Ot=function(t){var e=this.__data__;return Bt?void 0!==e[t]:Ct.call(e,t)},Dt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=$t&&void 0===e?"__lodash_hash_undefined__":e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=Et,At.prototype.delete=kt,At.prototype.get=xt,At.prototype.has=Ot,At.prototype.set=Dt;var jt=At;var Lt=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var Tt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},zt=Tt,It=Array.prototype.splice;var Vt=Tt;var Pt=Tt;var Nt=Tt;var Rt=Lt,Gt=function(t){var e=this.__data__,n=zt(e,t);return!(n<0)&&(n==e.length-1?e.pop():It.call(e,n,1),--this.size,!0)},Ht=function(t){var e=this.__data__,n=Vt(e,t);return n<0?void 0:e[n][1]},Mt=function(t){return Pt(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,r=Nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kt.prototype.clear=Rt,Kt.prototype.delete=Gt,Kt.prototype.get=Ht,Kt.prototype.has=Mt,Kt.prototype.set=Wt;var Ut=Kt,Zt=ft(k,"Map"),qt=jt,Jt=Ut,Qt=Zt;var Xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Yt=function(t,e){var n=t.__data__;return Xt(e)?n["string"==typeof e?"string":"hash"]:n.map},te=Yt;var ee=Yt;var ne=Yt;var re=Yt;var oe=function(){this.size=0,this.__data__={hash:new qt,map:new(Qt||Jt),string:new qt}},ie=function(t){var e=te(this,t).delete(t);return this.size-=e?1:0,e},ae=function(t){return ee(this,t).get(t)},ce=function(t){return ne(this,t).has(t)},le=function(t,e){var n=re(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function de(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}de.prototype.clear=oe,de.prototype.delete=ie,de.prototype.get=ae,de.prototype.has=ce,de.prototype.set=le;var se=de;function ue(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(ue.Cache||se),n}ue.Cache=se;var he=ue;var pe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ve=/\\(\\)?/g,fe=function(t){var e=he(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(pe,(function(t,n,r,o){e.push(r?o.replace(ve,"$1"):n||t)})),e}));var ge=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},ye=C,be=G,me=x?x.prototype:void 0,Fe=me?me.toString:void 0;var we=function t(e){if("string"==typeof e)return e;if(ye(e))return ge(e,t)+"";if(be(e))return Fe?Fe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},_e=we;var Be=C,Ce=U,$e=fe,Ee=function(t){return null==t?"":_e(t)};var ke=G;var xe=function(t,e){return Be(t)?t:Ce(t,e)?[t]:$e(Ee(t))},Oe=function(t){if("string"==typeof t||ke(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var De=function(t,e){for(var n=0,r=(e=xe(e,t)).length;null!=t&&n<r;)t=t[Oe(e[n++])];return n&&n==r?t:void 0};var Ae=function(t,e,n){var r=null==t?void 0:De(t,e);return void 0===r?n:r};const je=(t,e,n)=>e?Ae(n,e)||Ae(t,e):n||t;var Le;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme"}(Le||(Le={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Te=t=>e=>{const n=e.theme,r=((t,e)=>{const n=e||t.defaultValue;return Ae(t.collections,n)})(Se,n[Le.colorScheme]);return n.options&&n.options.color?je(r,t,n.options.color):je(r,t)},ze=(Te("Brand.1"),Te("Brand.2"),Te("Brand.3"),Te("Brand.4"),Te("Brand.5"),Te("Brand.6"),Te("Primary"),Te("PrimaryDark"),Te("Secondary"),{Light:{1:Te("Accent.Light.1"),2:Te("Accent.Light.2"),3:Te("Accent.Light.3"),4:Te("Accent.Light.4"),5:Te("Accent.Light.5"),6:Te("Accent.Light.6")},Dark:{1:Te("Accent.Dark.1"),2:Te("Accent.Dark.2"),3:Te("Accent.Dark.3")}}),Ie={1:Te("Neutral.1"),2:Te("Neutral.2"),3:Te("Neutral.3"),4:Te("Neutral.4"),5:Te("Neutral.5"),6:Te("Neutral.6"),7:Te("Neutral.7"),8:Te("Neutral.8")},Ve=(Te("Validation.Green.Text"),Te("Validation.Green.Icon"),Te("Validation.Green.Border"),Te("Validation.Green.Background"),Te("Validation.Orange.Text"),Te("Validation.Orange.Icon"),Te("Validation.Orange.Border"),Te("Validation.Orange.Background"),Te("Validation.Orange.Badge"),Te("Validation.Red.Text"),Te("Validation.Red.Icon"),Te("Validation.Red.Border"),Te("Validation.Red.Background"),Te("Shadow.Accent"),Te("Shadow.Red"),Te("Shadow.Elevation"),l.button`
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
                background-color: ${Ie[7]};
            `}
    }
`),Pe=r.forwardRef((({children:t,focusHighlight:n=!0,focusOutline:r="none",...o},i)=>e(Ve,{ref:i,$outline:r,$highlight:n,...o,children:t}))),Ne=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ie[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${y.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Re=l(Pe)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${ze.Light[1]};
    }
`,Ge=l(m)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ie[4]};
`,He=Object.assign((({id:t="modal",show:n,animationFrom:r="bottom",children:i,enableOverlayClick:c=!0,rootComponentId:l,zIndex:d,onOverlayClick:s,dismissKeyboardOnShow:u=!0,...p})=>{const[v,f]=o(),[g,y]=o();a((()=>window.visualViewport?(F(),window.visualViewport.addEventListener("resize",F),()=>{window.visualViewport.removeEventListener("resize",F)}):(m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)})),[]),a((()=>{n&&u&&document.activeElement?.blur?.()}),[n]);const m=()=>{const t=.01*window.innerHeight;f(t)},F=()=>{const t=.01*window.visualViewport.height;f(t),y(window.visualViewport.offsetTop)};return e(h,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:c,onOverlayClick:s,id:t,rootId:l,zIndex:d,children:e(b,{show:n,animationFrom:r,"data-testid":t,verticalHeight:v,offsetTop:g,...p,children:i})})}),{Box:({id:t="modal-box",children:r,onClose:o,showCloseButton:i=!0,...a})=>n(Ne,{"data-testid":t,...a,onClick:t=>{t.stopPropagation()},children:[i&&e(Re,{type:"button",onClick:o,"data-testid":"close-button",focusHighlight:!1,children:e(Ge,{})}),r]})});export{He as Modal};
//# sourceMappingURL=index.js.map
