import{jsx as t,jsxs as e}from"react/jsx-runtime";import n,{useState as r,useRef as o,useEffect as i}from"react";import a from"react-dom";import c,{css as l}from"styled-components";import{CrossIcon as d}from"@lifesg/react-icons/cross";function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}const u=c.div`
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
`,h=c.div`
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
`,p=({show:e=!1,rootId:c,onOverlayClick:l,children:d,backgroundOpacity:s,backgroundBlur:p=!0,disableTransition:F=!1,enableOverlayClick:g=!1,zIndex:y,id:b})=>{const[m,B]=r(null),[w,E]=r(),_=o(),k=o(!1),O=o(null),D=d&&n.cloneElement(d,{ref:O}),C=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root";i((()=>{const t=!0===k.current;if(t||(k.current=!0),e){const t=x();if(A(t),!t){const t=setTimeout((()=>{S("add")}),200);return()=>clearTimeout(t)}}else{if(!t)return;if(!_.current){const t=setTimeout((()=>{S("remove")}),200);return()=>clearTimeout(t)}}}),[e]),i((()=>{B($());const t=x();return A(t),t||j(),()=>{S("remove")}}),[]);const A=t=>{_.current=t,E(t)},$=()=>document&&c?document.getElementById(c):document?document.body:null,x=()=>document.body.classList.contains(f),j=()=>{if(!document.getElementById(v)){const t=document.createElement("style");t.id=v;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${f} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${f}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},S=t=>{const e=document.body.classList.contains(f);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(f):document.body.classList.add(f)},T=t=>{var e;const n=null===(e=O.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||l&&g&&(t.preventDefault(),l())};return m?a.createPortal(t(u,Object.assign({id:C,"data-testid":C,$show:e,zIndex:y,$stacked:w},{children:d&&t(h,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:s||(w?.5:.8),$backgroundBlur:p,$disableTransition:F,$enableOverlayClick:g,onClick:T},{children:D}))})),m):null},v="lifesg-ds-overlay-stylesheet",f="lifesg-ds-overlay-open",F={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},g=t=>Object.keys(F).reduce(((e,n)=>{const r=F[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),y=g("max-width"),b=(g("min-width"),c.div`
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
`);var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},B=Array.isArray,w="object"==typeof m&&m&&m.Object===Object&&m,E="object"==typeof self&&self&&self.Object===Object&&self,_=w||E||Function("return this")(),k=_.Symbol,O=k,D=Object.prototype,C=D.hasOwnProperty,A=D.toString,$=O?O.toStringTag:void 0;var x=function(t){var e=C.call(t,$),n=t[$];try{t[$]=void 0;var r=!0}catch(t){}var o=A.call(t);return r&&(e?t[$]=n:delete t[$]),o},j=Object.prototype.toString;var S=x,T=function(t){return j.call(t)},I=k?k.toStringTag:void 0;var V=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":I&&I in Object(t)?S(t):T(t)};var z=V,L=function(t){return null!=t&&"object"==typeof t};var P=function(t){return"symbol"==typeof t||L(t)&&"[object Symbol]"==z(t)},R=B,N=P,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H=/^\w*$/;var M=function(t,e){if(R(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!N(t))||(H.test(t)||!G.test(t)||null!=e&&t in Object(e))};var K=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=V,U=K;var q,J=function(t){if(!U(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Q=_["__core-js_shared__"],X=(q=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"";var Y=function(t){return!!X&&X in t},Z=Function.prototype.toString;var tt=J,et=Y,nt=K,rt=function(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ot=/^\[object .+?Constructor\]$/,it=Function.prototype,at=Object.prototype,ct=it.toString,lt=at.hasOwnProperty,dt=RegExp("^"+ct.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var st=function(t){return!(!nt(t)||et(t))&&(tt(t)?dt:ot).test(rt(t))},ut=function(t,e){return null==t?void 0:t[e]};var ht=function(t,e){var n=ut(t,e);return st(n)?n:void 0},pt=ht(Object,"create"),vt=pt;var ft=function(){this.__data__=vt?vt(null):{},this.size=0};var Ft=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},gt=pt,yt=Object.prototype.hasOwnProperty;var bt=function(t){var e=this.__data__;if(gt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return yt.call(e,t)?e[t]:void 0},mt=pt,Bt=Object.prototype.hasOwnProperty;var wt=pt;var Et=ft,_t=Ft,kt=bt,Ot=function(t){var e=this.__data__;return mt?void 0!==e[t]:Bt.call(e,t)},Dt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=wt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=Et,Ct.prototype.delete=_t,Ct.prototype.get=kt,Ct.prototype.has=Ot,Ct.prototype.set=Dt;var At=Ct;var $t=function(){this.__data__=[],this.size=0};var xt=function(t,e){return t===e||t!=t&&e!=e};var jt=function(t,e){for(var n=t.length;n--;)if(xt(t[n][0],e))return n;return-1},St=jt,Tt=Array.prototype.splice;var It=jt;var Vt=jt;var zt=jt;var Lt=$t,Pt=function(t){var e=this.__data__,n=St(e,t);return!(n<0)&&(n==e.length-1?e.pop():Tt.call(e,n,1),--this.size,!0)},Rt=function(t){var e=this.__data__,n=It(e,t);return n<0?void 0:e[n][1]},Nt=function(t){return Vt(this.__data__,t)>-1},Gt=function(t,e){var n=this.__data__,r=zt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ht(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ht.prototype.clear=Lt,Ht.prototype.delete=Pt,Ht.prototype.get=Rt,Ht.prototype.has=Nt,Ht.prototype.set=Gt;var Mt=Ht,Kt=ht(_,"Map"),Wt=At,Ut=Mt,qt=Kt;var Jt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Qt=function(t,e){var n=t.__data__;return Jt(e)?n["string"==typeof e?"string":"hash"]:n.map},Xt=Qt;var Yt=Qt;var Zt=Qt;var te=Qt;var ee=function(){this.size=0,this.__data__={hash:new Wt,map:new(qt||Ut),string:new Wt}},ne=function(t){var e=Xt(this,t).delete(t);return this.size-=e?1:0,e},re=function(t){return Yt(this,t).get(t)},oe=function(t){return Zt(this,t).has(t)},ie=function(t,e){var n=te(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ae(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ae.prototype.clear=ee,ae.prototype.delete=ne,ae.prototype.get=re,ae.prototype.has=oe,ae.prototype.set=ie;var ce=ae;function le(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(le.Cache||ce),n}le.Cache=ce;var de=le;var se=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ue=/\\(\\)?/g,he=function(t){var e=de(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(se,(function(t,n,r,o){e.push(r?o.replace(ue,"$1"):n||t)})),e}));var pe=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},ve=B,fe=P,Fe=k?k.prototype:void 0,ge=Fe?Fe.toString:void 0;var ye=function t(e){if("string"==typeof e)return e;if(ve(e))return pe(e,t)+"";if(fe(e))return ge?ge.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},be=ye;var me=B,Be=M,we=he,Ee=function(t){return null==t?"":be(t)};var _e=P;var ke=function(t,e){return me(t)?t:Be(t,e)?[t]:we(Ee(t))},Oe=function(t){if("string"==typeof t||_e(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var De=function(t,e){for(var n=0,r=(e=ke(e,t)).length;null!=t&&n<r;)t=t[Oe(e[n++])];return n&&n==r?t:void 0};var Ce=function(t,e,n){var r=null==t?void 0:De(t,e);return void 0===r?n:r};const Ae=(t,e,n)=>e?Ce(n,e)||Ce(t,e):n||t;var $e;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}($e||($e={}));const xe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},je=t=>e=>{const n=e.theme,r=((t,e)=>{const n=e||t.defaultValue;return Ce(t.collections,n)})(xe,n[$e.colorScheme]);return n.options&&n.options.color?Ae(r,t,n.options.color):Ae(r,t)},Se=(je("Brand.1"),je("Brand.2"),je("Brand.3"),je("Brand.4"),je("Brand.5"),je("Brand.6"),je("Primary"),je("PrimaryDark"),je("Secondary"),{Light:{1:je("Accent.Light.1"),2:je("Accent.Light.2"),3:je("Accent.Light.3"),4:je("Accent.Light.4"),5:je("Accent.Light.5"),6:je("Accent.Light.6")},Dark:{1:je("Accent.Dark.1"),2:je("Accent.Dark.2"),3:je("Accent.Dark.3")}}),Te={1:je("Neutral.1"),2:je("Neutral.2"),3:je("Neutral.3"),4:je("Neutral.4"),5:je("Neutral.5"),6:je("Neutral.6"),7:je("Neutral.7"),8:je("Neutral.8")},Ie=(je("Validation.Green.Text"),je("Validation.Green.Icon"),je("Validation.Green.Border"),je("Validation.Green.Background"),je("Validation.Orange.Text"),je("Validation.Orange.Icon"),je("Validation.Orange.Border"),je("Validation.Orange.Background"),je("Validation.Orange.Badge"),je("Validation.Red.Text"),je("Validation.Red.Icon"),je("Validation.Red.Border"),je("Validation.Red.Background"),je("Validation.Blue.Text"),je("Validation.Blue.Icon"),je("Validation.Blue.Border"),je("Validation.Blue.Background"),je("Shadow.Accent"),je("Shadow.Red"),je("Shadow.Elevation"),c.button`
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
                background-color: ${Te[7]};
            `}
    }
`),Ve=n.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,c=s(e,["children","focusHighlight","focusOutline","type"]);return t(Ie,Object.assign({ref:n,$outline:i,$highlight:o,type:a},c,{children:r}))})),ze=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Te[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${y.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Le=c(Ve)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Se.Light[1]};
    }
`,Pe=c(d)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Te[4]};
`,Re=Object.assign((e=>{var{id:n="modal",show:o,animationFrom:a="bottom",children:c,enableOverlayClick:l=!0,rootComponentId:d,zIndex:u,onOverlayClick:h,dismissKeyboardOnShow:v=!0}=e,f=s(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[F,g]=r(),[y,m]=r();i((()=>window.visualViewport?(w(),window.visualViewport.addEventListener("resize",w),()=>{window.visualViewport.removeEventListener("resize",w)}):(B(),window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B)})),[]),i((()=>{var t,e;o&&v&&(null===(e=null===(t=document.activeElement)||void 0===t?void 0:t.blur)||void 0===e||e.call(t))}),[o]);const B=()=>{const t=.01*window.innerHeight;g(t)},w=()=>{const t=.01*window.visualViewport.height;g(t),m(window.visualViewport.offsetTop)};return t(p,Object.assign({"data-testid":`${n}-overlay`,show:o,enableOverlayClick:l,onOverlayClick:h,id:n,rootId:d,zIndex:u},{children:t(b,Object.assign({show:o,animationFrom:a,"data-testid":n,verticalHeight:F,offsetTop:y},f,{children:c}))}))}),{Box:n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,c=s(n,["id","children","onClose","showCloseButton"]);return e(ze,Object.assign({"data-testid":r},c,{onClick:t=>{t.stopPropagation()}},{children:[a&&t(Le,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(Pe,{})})),o]}))}});export{Re as Modal};
//# sourceMappingURL=index.js.map
