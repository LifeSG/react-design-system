import{jsx as t,jsxs as e}from"react/jsx-runtime";import n,{useState as r,useRef as o,useEffect as i}from"react";import a from"react-dom";import c,{css as l}from"styled-components";const d=c.div`
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
`,s=c.div`
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
`,u=({show:e=!1,rootId:c,onOverlayClick:l,children:u,backgroundOpacity:v,backgroundBlur:f=!0,disableTransition:g=!1,enableOverlayClick:y=!1,zIndex:m,id:b})=>{const[F,w]=r(null),[_,B]=r(),C=o(),$=o(null),k=u&&n.cloneElement(u,{ref:$}),x=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root";i((()=>{if(e){const t=O();if(E(t),!t){const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}}else if(!C.current){const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}}),[e]),i((()=>{w(D());const t=O();return E(t),t||A(),()=>{j("remove")}}),[]);const E=t=>{C.current=t,B(t)},D=()=>document&&c?document.getElementById(c):document?document.body:null,O=()=>document.body.classList.contains(p),A=()=>{if(!document.getElementById(h)){const t=document.createElement("style");t.id=h;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${p} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${p}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},j=t=>{const e=document.body.classList.contains(p);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(p):document.body.classList.add(p)},z=t=>{t.preventDefault();const e=$.current?.firstChild;e&&e.contains(t.target)||l&&y&&l()};return F?a.createPortal(t(d,{id:x,"data-testid":x,$show:e,zIndex:m,$stacked:_,children:u&&t(s,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:v||(_?.5:.8),$backgroundBlur:f,$disableTransition:g,$enableOverlayClick:y,onClick:z,children:k})}),F):null},h="lifesg-ds-overlay-stylesheet",p="lifesg-ds-overlay-open",v={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(v).reduce(((e,n)=>{const r=v[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),g=f("max-width"),y=(f("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.show,n=t.animationFrom||"bottom",e?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,n}}

    ${t=>t.verticalHeight?l`
                ${g.mobileL} {
                    height: calc(${t.verticalHeight}px * 100);
                }
            `:l`
                ${g.mobileL} {
                    height: calc(1vh * 100);
                }
            `}
`);var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=Array.isArray,F="object"==typeof m&&m&&m.Object===Object&&m,w="object"==typeof self&&self&&self.Object===Object&&self,_=F||w||Function("return this")(),B=_.Symbol,C=B,$=Object.prototype,k=$.hasOwnProperty,x=$.toString,E=C?C.toStringTag:void 0;var D=function(t){var e=k.call(t,E),n=t[E];try{t[E]=void 0;var r=!0}catch(t){}var o=x.call(t);return r&&(e?t[E]=n:delete t[E]),o},O=Object.prototype.toString;var A=D,j=function(t){return O.call(t)},z=B?B.toStringTag:void 0;var L=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?A(t):j(t)};var T=L,I=function(t){return null!=t&&"object"==typeof t};var S=function(t){return"symbol"==typeof t||I(t)&&"[object Symbol]"==T(t)},V=b,P=S,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var M=function(t,e){if(V(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!P(t))||(N.test(t)||!R.test(t)||null!=e&&t in Object(e))};var G=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},H=L,W=G;var Z,U=function(t){if(!W(t))return!1;var e=H(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},q=_["__core-js_shared__"],J=(Z=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"";var K=function(t){return!!J&&J in t},Q=Function.prototype.toString;var X=U,Y=K,tt=G,et=function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=/^\[object .+?Constructor\]$/,rt=Function.prototype,ot=Object.prototype,it=rt.toString,at=ot.hasOwnProperty,ct=RegExp("^"+it.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lt=function(t){return!(!tt(t)||Y(t))&&(X(t)?ct:nt).test(et(t))},dt=function(t,e){return null==t?void 0:t[e]};var st=function(t,e){var n=dt(t,e);return lt(n)?n:void 0},ut=st(Object,"create"),ht=ut;var pt=function(){this.__data__=ht?ht(null):{},this.size=0};var vt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft=ut,gt=Object.prototype.hasOwnProperty;var yt=function(t){var e=this.__data__;if(ft){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},mt=ut,bt=Object.prototype.hasOwnProperty;var Ft=ut;var wt=pt,_t=vt,Bt=yt,Ct=function(t){var e=this.__data__;return mt?void 0!==e[t]:bt.call(e,t)},$t=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ft&&void 0===e?"__lodash_hash_undefined__":e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=wt,kt.prototype.delete=_t,kt.prototype.get=Bt,kt.prototype.has=Ct,kt.prototype.set=$t;var xt=kt;var Et=function(){this.__data__=[],this.size=0};var Dt=function(t,e){return t===e||t!=t&&e!=e};var Ot=function(t,e){for(var n=t.length;n--;)if(Dt(t[n][0],e))return n;return-1},At=Ot,jt=Array.prototype.splice;var zt=Ot;var Lt=Ot;var Tt=Ot;var It=Et,St=function(t){var e=this.__data__,n=At(e,t);return!(n<0)&&(n==e.length-1?e.pop():jt.call(e,n,1),--this.size,!0)},Vt=function(t){var e=this.__data__,n=zt(e,t);return n<0?void 0:e[n][1]},Pt=function(t){return Lt(this.__data__,t)>-1},Rt=function(t,e){var n=this.__data__,r=Tt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nt.prototype.clear=It,Nt.prototype.delete=St,Nt.prototype.get=Vt,Nt.prototype.has=Pt,Nt.prototype.set=Rt;var Mt=Nt,Gt=st(_,"Map"),Ht=xt,Wt=Mt,Zt=Gt;var Ut=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var qt=function(t,e){var n=t.__data__;return Ut(e)?n["string"==typeof e?"string":"hash"]:n.map},Jt=qt;var Kt=qt;var Qt=qt;var Xt=qt;var Yt=function(){this.size=0,this.__data__={hash:new Ht,map:new(Zt||Wt),string:new Ht}},te=function(t){var e=Jt(this,t).delete(t);return this.size-=e?1:0,e},ee=function(t){return Kt(this,t).get(t)},ne=function(t){return Qt(this,t).has(t)},re=function(t,e){var n=Xt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function oe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}oe.prototype.clear=Yt,oe.prototype.delete=te,oe.prototype.get=ee,oe.prototype.has=ne,oe.prototype.set=re;var ie=oe;function ae(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(ae.Cache||ie),n}ae.Cache=ie;var ce=ae;var le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,de=/\\(\\)?/g,se=function(t){var e=ce(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(le,(function(t,n,r,o){e.push(r?o.replace(de,"$1"):n||t)})),e}));var ue=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},he=b,pe=S,ve=B?B.prototype:void 0,fe=ve?ve.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(he(e))return ue(e,t)+"";if(pe(e))return fe?fe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ye=ge;var me=b,be=M,Fe=se,we=function(t){return null==t?"":ye(t)};var _e=S;var Be=function(t,e){return me(t)?t:be(t,e)?[t]:Fe(we(t))},Ce=function(t){if("string"==typeof t||_e(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var $e=function(t,e){for(var n=0,r=(e=Be(e,t)).length;null!=t&&n<r;)t=t[Ce(e[n++])];return n&&n==r?t:void 0};var ke=function(t,e,n){var r=null==t?void 0:$e(t,e);return void 0===r?n:r};const xe=(t,e,n)=>e?ke(n,e)||ke(t,e):n||t;var Ee;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Ee||(Ee={}));const De={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Oe=t=>e=>{const n=e.theme,r=((t,e)=>{const n=e||t.defaultValue;return ke(t.collections,n)})(De,n[Ee.colorScheme]);return n.options&&n.options.color?xe(r,t,n.options.color):xe(r,t)},Ae=(Oe("Brand.1"),Oe("Brand.2"),Oe("Brand.3"),Oe("Brand.4"),Oe("Brand.5"),Oe("Brand.6"),Oe("Primary"),Oe("PrimaryDark"),Oe("Secondary"),{Light:{1:Oe("Accent.Light.1"),2:Oe("Accent.Light.2"),3:Oe("Accent.Light.3"),4:Oe("Accent.Light.4"),5:Oe("Accent.Light.5"),6:Oe("Accent.Light.6")},Dark:{1:Oe("Accent.Dark.1"),2:Oe("Accent.Dark.2"),3:Oe("Accent.Dark.3")}}),je={1:Oe("Neutral.1"),2:Oe("Neutral.2"),3:Oe("Neutral.3"),4:Oe("Neutral.4"),5:Oe("Neutral.5"),6:Oe("Neutral.6"),7:Oe("Neutral.7"),8:Oe("Neutral.8")},ze=(Oe("Validation.Green.Text"),Oe("Validation.Green.Icon"),Oe("Validation.Green.Border"),Oe("Validation.Green.Background"),Oe("Validation.Orange.Text"),Oe("Validation.Orange.Icon"),Oe("Validation.Orange.Border"),Oe("Validation.Orange.Background"),Oe("Validation.Orange.Badge"),Oe("Validation.Red.Text"),Oe("Validation.Red.Icon"),Oe("Validation.Red.Border"),Oe("Validation.Red.Background"),c.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${je[8]};
    }
`),Le=e=>t(ze,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("g",{fill:"none",fillRule:"evenodd",children:t("g",{id:"path",fillRule:"nonzero",children:t("g",{children:t("g",{children:t("g",{children:t("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),Te=e=>t(ze,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ie=e=>t(ze,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Se=e=>t(ze,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...e,children:t("g",{id:"search",children:t("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),Ve=({type:e,...n})=>{switch(e){case"arrow-right":return t(Le,{...n});case"info":return t(Te,{...n});case"search":return t(Se,{...n});case"play-alt":return t(Ie,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,o=n.className?`${r} ${n.className}`:r;return t(Pe,{...n,className:o})}}},Pe=c.span`
    font-size: 1rem;
`,Re=c.button`
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
`,Ne=n.forwardRef((({children:e,iconType:n,...r},o)=>{let i;if(e)i=e;else{if(!n)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;i=t(Ve,{type:n})}return t(Re,{ref:o,...r,children:i})})),Me=c.div`
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
`,Ge=c(Ne)`
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
`,He=c(Ve)`
    font-size: 2rem;
    color: ${je[4]};
`,We=Object.assign((({id:e="modal",show:n,animationFrom:o="bottom",children:a,enableOverlayClick:c=!0,rootComponentId:l,zIndex:d,onOverlayClick:s,...h})=>{const[p,v]=r();i((()=>(v(.01*window.innerHeight),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]);const f=()=>{const t=.01*window.innerHeight;v(t)};return t(u,{"data-testid":`${e}-overlay`,show:n,enableOverlayClick:c,onOverlayClick:s,id:e,rootId:l,zIndex:d,children:t(y,{show:n,animationFrom:o,"data-testid":e,verticalHeight:p,...h,children:a})})}),{Box:({id:n="modal-box",children:r,onClose:o,showCloseButton:i=!0,...a})=>e(Me,{"data-testid":n,...a,onClick:t=>{t.stopPropagation()},children:[i&&t(Ge,{type:"button",onClick:o,"data-testid":"close-button",children:t(He,{type:"cross"})}),r]})});export{We as Modal};
//# sourceMappingURL=index.js.map
