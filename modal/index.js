import{jsx as t,jsxs as e}from"react/jsx-runtime";import r,{useState as n,useRef as o,useEffect as i}from"react";import a from"react-dom";import c,{css as l}from"styled-components";const s=c.div`
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
`,d=c.div`
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
`,u=({show:e=!1,rootId:c,onOverlayClick:l,children:u,backgroundOpacity:v,backgroundBlur:f=!0,disableTransition:g=!1,enableOverlayClick:y=!1,zIndex:m,id:b})=>{const[F,w]=n(null),[C,_]=n(),B=o(),$=o(null),k=u&&r.cloneElement(u,{ref:$}),x=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root";i((()=>{if(e){const t=L();if(E(t),!t){const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}}else if(!B.current){const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}}),[e]),i((()=>{w(D());const t=L();return E(t),t||O(),()=>{A("remove")}}),[]);const E=t=>{B.current=t,_(t)},D=()=>document&&c?document.getElementById(c):document?document.body:null,L=()=>document.body.classList.contains(p),O=()=>{if(!document.getElementById(h)){const t=document.createElement("style");t.id=h;const e=document.documentElement.clientWidth,r=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${p} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${p}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},A=t=>{const e=document.body.classList.contains(p);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(p):document.body.classList.add(p)},j=t=>{t.preventDefault();const e=$.current?.firstChild;e&&e.contains(t.target)||l&&y&&l()};return F?a.createPortal(t(s,{id:x,"data-testid":x,$show:e,zIndex:m,$stacked:C,children:u&&t(d,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:v||(C?.5:.8),$backgroundBlur:f,$disableTransition:g,$enableOverlayClick:y,onClick:j,children:k})}),F):null},h="lifesg-ds-overlay-stylesheet",p="lifesg-ds-overlay-open",v={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(v).reduce(((e,r)=>{const n=v[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),g=f("max-width"),y=(f("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.show,r=t.animationFrom||"bottom",e?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,r}}

    ${t=>t.verticalHeight?l`
                ${g.mobileL} {
                    height: calc(${t.verticalHeight}px * 100);
                }
            `:l`
                ${g.mobileL} {
                    height: calc(1vh * 100);
                }
            `}
`);var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=Array.isArray,F="object"==typeof m&&m&&m.Object===Object&&m,w="object"==typeof self&&self&&self.Object===Object&&self,C=F||w||Function("return this")(),_=C.Symbol,B=_,$=Object.prototype,k=$.hasOwnProperty,x=$.toString,E=B?B.toStringTag:void 0;var D=function(t){var e=k.call(t,E),r=t[E];try{t[E]=void 0;var n=!0}catch(t){}var o=x.call(t);return n&&(e?t[E]=r:delete t[E]),o},L=Object.prototype.toString;var O=D,A=function(t){return L.call(t)},j=_?_.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?O(t):A(t)};var T=z,I=function(t){return null!=t&&"object"==typeof t};var S=function(t){return"symbol"==typeof t||I(t)&&"[object Symbol]"==T(t)},V=b,P=S,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var M=function(t,e){if(V(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!P(t))||(R.test(t)||!N.test(t)||null!=e&&t in Object(e))};var G=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},H=z,Z=G;var W,U=function(t){if(!Z(t))return!1;var e=H(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},q=C["__core-js_shared__"],J=(W=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var K=function(t){return!!J&&J in t},Q=Function.prototype.toString;var X=U,Y=K,tt=G,et=function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},rt=/^\[object .+?Constructor\]$/,nt=Function.prototype,ot=Object.prototype,it=nt.toString,at=ot.hasOwnProperty,ct=RegExp("^"+it.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lt=function(t){return!(!tt(t)||Y(t))&&(X(t)?ct:rt).test(et(t))},st=function(t,e){return null==t?void 0:t[e]};var dt=function(t,e){var r=st(t,e);return lt(r)?r:void 0},ut=dt(Object,"create"),ht=ut;var pt=function(){this.__data__=ht?ht(null):{},this.size=0};var vt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft=ut,gt=Object.prototype.hasOwnProperty;var yt=function(t){var e=this.__data__;if(ft){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return gt.call(e,t)?e[t]:void 0},mt=ut,bt=Object.prototype.hasOwnProperty;var Ft=ut;var wt=pt,Ct=vt,_t=yt,Bt=function(t){var e=this.__data__;return mt?void 0!==e[t]:bt.call(e,t)},$t=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ft&&void 0===e?"__lodash_hash_undefined__":e,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=wt,kt.prototype.delete=Ct,kt.prototype.get=_t,kt.prototype.has=Bt,kt.prototype.set=$t;var xt=kt;var Et=function(){this.__data__=[],this.size=0};var Dt=function(t,e){return t===e||t!=t&&e!=e};var Lt=function(t,e){for(var r=t.length;r--;)if(Dt(t[r][0],e))return r;return-1},Ot=Lt,At=Array.prototype.splice;var jt=Lt;var zt=Lt;var Tt=Lt;var It=Et,St=function(t){var e=this.__data__,r=Ot(e,t);return!(r<0)&&(r==e.length-1?e.pop():At.call(e,r,1),--this.size,!0)},Vt=function(t){var e=this.__data__,r=jt(e,t);return r<0?void 0:e[r][1]},Pt=function(t){return zt(this.__data__,t)>-1},Nt=function(t,e){var r=this.__data__,n=Tt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Rt.prototype.clear=It,Rt.prototype.delete=St,Rt.prototype.get=Vt,Rt.prototype.has=Pt,Rt.prototype.set=Nt;var Mt=Rt,Gt=dt(C,"Map"),Ht=xt,Zt=Mt,Wt=Gt;var Ut=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var qt=function(t,e){var r=t.__data__;return Ut(e)?r["string"==typeof e?"string":"hash"]:r.map},Jt=qt;var Kt=qt;var Qt=qt;var Xt=qt;var Yt=function(){this.size=0,this.__data__={hash:new Ht,map:new(Wt||Zt),string:new Ht}},te=function(t){var e=Jt(this,t).delete(t);return this.size-=e?1:0,e},ee=function(t){return Kt(this,t).get(t)},re=function(t){return Qt(this,t).has(t)},ne=function(t,e){var r=Xt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function oe(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}oe.prototype.clear=Yt,oe.prototype.delete=te,oe.prototype.get=ee,oe.prototype.has=re,oe.prototype.set=ne;var ie=oe;function ae(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(ae.Cache||ie),r}ae.Cache=ie;var ce=ae;var le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,se=/\\(\\)?/g,de=function(t){var e=ce(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(le,(function(t,r,n,o){e.push(n?o.replace(se,"$1"):r||t)})),e}));var ue=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},he=b,pe=S,ve=_?_.prototype:void 0,fe=ve?ve.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(he(e))return ue(e,t)+"";if(pe(e))return fe?fe.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},ye=ge;var me=b,be=M,Fe=de,we=function(t){return null==t?"":ye(t)};var Ce=S;var _e=function(t,e){return me(t)?t:be(t,e)?[t]:Fe(we(t))},Be=function(t){if("string"==typeof t||Ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var $e=function(t,e){for(var r=0,n=(e=_e(e,t)).length;null!=t&&r<n;)t=t[Be(e[r++])];return r&&r==n?t:void 0};var ke=function(t,e,r){var n=null==t?void 0:$e(t,e);return void 0===n?r:n};const xe=(t,e,r)=>e?ke(r,e)||ke(t,e):r||t;var Ee;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Ee||(Ee={}));const De={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Le=t=>e=>{const r=e.theme,n=((t,e)=>{const r=e||t.defaultValue;return ke(t.collections,r)})(De,r[Ee.colorScheme]);return r.options&&r.options.color?xe(n,t,r.options.color):xe(n,t)},Oe=(Le("Brand.1"),Le("Brand.2"),Le("Brand.3"),Le("Brand.4"),Le("Brand.5"),Le("Brand.6"),Le("Primary")),Ae=(Le("PrimaryDark"),Le("Secondary"),{Light:{1:Le("Accent.Light.1"),2:Le("Accent.Light.2"),3:Le("Accent.Light.3"),4:Le("Accent.Light.4"),5:Le("Accent.Light.5"),6:Le("Accent.Light.6")},Dark:{1:Le("Accent.Dark.1"),2:Le("Accent.Dark.2"),3:Le("Accent.Dark.3")}}),je={1:Le("Neutral.1"),2:Le("Neutral.2"),3:Le("Neutral.3"),4:Le("Neutral.4"),5:Le("Neutral.5"),6:Le("Neutral.6"),7:Le("Neutral.7"),8:Le("Neutral.8")},ze=(Le("Validation.Green.Text"),Le("Validation.Green.Icon"),Le("Validation.Green.Border"),Le("Validation.Green.Background"),Le("Validation.Orange.Text"),Le("Validation.Orange.Icon"),Le("Validation.Orange.Border"),Le("Validation.Orange.Background"),Le("Validation.Orange.Badge"),Le("Validation.Red.Text"),Le("Validation.Red.Icon"),Le("Validation.Red.Border"),Le("Validation.Red.Background"),c.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Oe};
`),Te=e=>t(ze,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Ie=e=>t(ze,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Se=e=>t(ze,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ve=e=>t(ze,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Pe=e=>t(ze,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Ne=({type:e,...r})=>{switch(e){case"arrow-right":return t(Te,{...r});case"info":return t(Se,{...r});case"cross":return t(Ie,{...r});case"play":return t(Ve,{...r});case"search":return t(Pe,{...r});default:{const n=`sgds-icon sgds-icon-${e}`,o=r.className?`${n} ${r.className}`:n;return t(Re,{...r,className:o})}}},Re=c.span`
    font-size: 1rem;
`,Me=c.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: ${je[8]};
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:focus {
        outline: none;
        background-color: ${je[7]};
    }
`,Ge=r.forwardRef((({children:e,iconType:r,...n},o)=>{let i;if(e)i=e;else{if(!r)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;i=t(Ne,{type:r})}return t(Me,{ref:o,...n,children:i})})),He=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${je[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${g.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Ze=c(Ge)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    background: transparent;
    :focus-visible,
    :focus,
    :active {
        background: transparent;
    }
    :focus-visible {
        outline: 4px solid ${Ae.Light[1]};
    }
`,We=c(Ne)`
    font-size: 2rem;
    color: ${je[4]};
`,Ue=Object.assign((({id:e="modal",show:r,animationFrom:o="bottom",children:a,enableOverlayClick:c=!0,rootComponentId:l,zIndex:s,onOverlayClick:d,...h})=>{const[p,v]=n();i((()=>(v(.01*window.innerHeight),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]);const f=()=>{const t=.01*window.innerHeight;v(t)};return t(u,{"data-testid":`${e}-overlay`,show:r,enableOverlayClick:c,onOverlayClick:d,id:e,rootId:l,zIndex:s,children:t(y,{show:r,animationFrom:o,"data-testid":e,verticalHeight:p,...h,children:a})})}),{Box:({id:r="modal-box",children:n,onClose:o,showCloseButton:i=!0,...a})=>e(He,{"data-testid":r,...a,onClick:t=>{t.stopPropagation()},children:[i&&t(Ze,{type:"button",onClick:o,"data-testid":"close-button",children:t(We,{type:"cross"})}),n]})});export{Ue as Modal};
//# sourceMappingURL=index.js.map
