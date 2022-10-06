import{jsx as t,jsxs as e}from"react/jsx-runtime";import{useState as r,useEffect as n}from"react";import a,{css as o}from"styled-components";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,l="object"==typeof i&&i&&i.Object===Object&&i,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),s=d.Symbol,h=s,p=Object.prototype,f=p.hasOwnProperty,v=p.toString,g=h?h.toStringTag:void 0;var y=function(t){var e=f.call(t,g),r=t[g];try{t[g]=void 0;var n=!0}catch(t){}var a=v.call(t);return n&&(e?t[g]=r:delete t[g]),a},F=Object.prototype.toString;var _=y,m=function(t){return F.call(t)},B=s?s.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?_(t):m(t)};var w=b,C=function(t){return null!=t&&"object"==typeof t};var D=function(t){return"symbol"==typeof t||C(t)&&"[object Symbol]"==w(t)},E=c,k=D,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var $=function(t,e){if(E(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!k(t))||(A.test(t)||!x.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=b,S=j;var z,N=function(t){if(!S(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=d["__core-js_shared__"],V=(z=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var T=function(t){return!!V&&V in t},I=Function.prototype.toString;var L=N,R=T,G=j,M=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},K=/^\[object .+?Constructor\]$/,Z=Function.prototype,H=Object.prototype,U=Z.toString,q=H.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!G(t)||R(t))&&(L(t)?J:K).test(M(t))},W=function(t,e){return null==t?void 0:t[e]};var X=function(t,e){var r=W(t,e);return Q(r)?r:void 0},Y=X(Object,"create"),tt=Y;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nt=Y,at=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(nt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return at.call(e,t)?e[t]:void 0},it=Y,ct=Object.prototype.hasOwnProperty;var lt=Y;var ut=et,dt=rt,st=ot,ht=function(t){var e=this.__data__;return it?void 0!==e[t]:ct.call(e,t)},pt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this};function ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ft.prototype.clear=ut,ft.prototype.delete=dt,ft.prototype.get=st,ft.prototype.has=ht,ft.prototype.set=pt;var vt=ft;var gt=function(){this.__data__=[],this.size=0};var yt=function(t,e){return t===e||t!=t&&e!=e};var Ft=function(t,e){for(var r=t.length;r--;)if(yt(t[r][0],e))return r;return-1},_t=Ft,mt=Array.prototype.splice;var Bt=Ft;var bt=Ft;var wt=Ft;var Ct=gt,Dt=function(t){var e=this.__data__,r=_t(e,t);return!(r<0)&&(r==e.length-1?e.pop():mt.call(e,r,1),--this.size,!0)},Et=function(t){var e=this.__data__,r=Bt(e,t);return r<0?void 0:e[r][1]},kt=function(t){return bt(this.__data__,t)>-1},xt=function(t,e){var r=this.__data__,n=wt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function At(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}At.prototype.clear=Ct,At.prototype.delete=Dt,At.prototype.get=Et,At.prototype.has=kt,At.prototype.set=xt;var $t=At,jt=X(d,"Map"),Ot=vt,St=$t,zt=jt;var Nt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pt=function(t,e){var r=t.__data__;return Nt(e)?r["string"==typeof e?"string":"hash"]:r.map},Vt=Pt;var Tt=Pt;var It=Pt;var Lt=Pt;var Rt=function(){this.size=0,this.__data__={hash:new Ot,map:new(zt||St),string:new Ot}},Gt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Tt(this,t).get(t)},Kt=function(t){return It(this,t).has(t)},Zt=function(t,e){var r=Lt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ht.prototype.clear=Rt,Ht.prototype.delete=Gt,Ht.prototype.get=Mt,Ht.prototype.has=Kt,Ht.prototype.set=Zt;var Ut=Ht;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(qt.Cache||Ut),r}qt.Cache=Ut;var Jt=qt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wt=/\\(\\)?/g,Xt=function(t){var e=Jt(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,r,n,a){e.push(n?a.replace(Wt,"$1"):r||t)})),e}));var Yt=function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a},te=c,ee=D,re=s?s.prototype:void 0,ne=re?re.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(te(e))return Yt(e,t)+"";if(ee(e))return ne?ne.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},oe=ae;var ie=c,ce=$,le=Xt,ue=function(t){return null==t?"":oe(t)};var de=D;var se=function(t,e){return ie(t)?t:ce(t,e)?[t]:le(ue(t))},he=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var r=0,n=(e=se(e,t)).length;null!=t&&r<n;)t=t[he(e[r++])];return r&&r==n?t:void 0};var fe=function(t,e,r){var n=null==t?void 0:pe(t,e);return void 0===n?r:n};const ve=(t,e,r)=>e?fe(r,e)||fe(t,e):r||t;var ge;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(ge||(ge={}));const ye={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Fe=t=>e=>{const r=e.theme,n=((t,e)=>{const r=e||t.defaultValue;return fe(t.collections,r)})(ye,r[ge.colorScheme]);return r.options&&r.options.color?ve(n,t,r.options.color):ve(n,t)},_e={Brand:{1:Fe("Brand.1"),2:Fe("Brand.2"),3:Fe("Brand.3"),4:Fe("Brand.4"),5:Fe("Brand.5"),6:Fe("Brand.6")},Primary:Fe("Primary"),PrimaryDark:Fe("PrimaryDark"),Secondary:Fe("Secondary"),Accent:{Light:{1:Fe("Accent.Light.1"),2:Fe("Accent.Light.2"),3:Fe("Accent.Light.3"),4:Fe("Accent.Light.4"),5:Fe("Accent.Light.5"),6:Fe("Accent.Light.6")},Dark:{1:Fe("Accent.Dark.1"),2:Fe("Accent.Dark.2"),3:Fe("Accent.Dark.3")}},Neutral:{1:Fe("Neutral.1"),2:Fe("Neutral.2"),3:Fe("Neutral.3"),4:Fe("Neutral.4"),5:Fe("Neutral.5"),6:Fe("Neutral.6"),7:Fe("Neutral.7"),8:Fe("Neutral.8")},Validation:{Green:{Text:Fe("Validation.Green.Text"),Icon:Fe("Validation.Green.Icon"),Border:Fe("Validation.Green.Border"),Background:Fe("Validation.Green.Background")},Orange:{Text:Fe("Validation.Orange.Text"),Icon:Fe("Validation.Orange.Icon"),Border:Fe("Validation.Orange.Border"),Background:Fe("Validation.Orange.Background"),Badge:Fe("Validation.Orange.Badge")},Red:{Text:Fe("Validation.Red.Text"),Icon:Fe("Validation.Red.Icon"),Border:Fe("Validation.Red.Border"),Background:Fe("Validation.Red.Background")}}},me=a.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${_e.Neutral[8]};
    }
`,Be=e=>t(me,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("g",{fill:"none",fillRule:"evenodd",children:t("g",{id:"path",fillRule:"nonzero",children:t("g",{children:t("g",{children:t("g",{children:t("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),be=e=>t(me,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),we=e=>t(me,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Ce=e=>t(me,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...e,children:t("g",{id:"search",children:t("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),De=a.span`
    font-size: 1rem;
`,Ee=a.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${t=>{let e,r;if("small"===t.$displaySize)e="1.5rem",r="1.5rem";else e="2rem",r="2rem";return o`
            height: ${e};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${_e.Accent.Light[2]};
    background: transparent;

    ${t=>{let e,r;return t.selected&&(e=_e.Primary(t),r=_e.Primary(t)),t.disabled&&(e=_e.Neutral[6](t),r=_e.Neutral[6](t)),`\n\t\t\tborder: 1px solid ${e};\n\t\t\tbackground: ${r};\n\t\t`}}
`,ke=a.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
`,xe=a((({type:e,...r})=>{switch(e){case"arrow-right":return t(Be,{...r});case"info":return t(be,{...r});case"search":return t(Ce,{...r});case"play-alt":return t(we,{...r});default:{const n=`sgds-icon sgds-icon-${e}`,a=r.className?`${n} ${r.className}`:n;return t(De,{...r,className:a})}}}))`
    ${t=>{let e;if("small"===t.$displaySize)e="1.3rem";else e="1.5rem";return o`
            font-size: ${e};
        `}}
    font-weight: bold;
    color: ${t=>t.disabled?_e.Neutral[4]:_e.Neutral[8]};
`,Ae=({className:a,checked:o,disabled:i,onClick:c,onKeyPress:l,displaySize:u="default",...d})=>{const[s,h]=r(o);n((()=>{h(o)}),[o]);const p=t=>{i||(c&&c(t),l&&l(t))};return e(Ee,{selected:s,disabled:i,className:a,"data-testid":"checkbox",onKeyPress:p,tabIndex:i?-1:0,role:"checkbox",$displaySize:u,children:[t(ke,{type:"checkbox","data-testid":"checkbox-input",onClick:p,disabled:i,tabIndex:-1,...d}),s&&t(xe,{type:"check",id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:u})]})};export{Ae as Checkbox};
//# sourceMappingURL=index.js.map
