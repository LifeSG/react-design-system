import e,{jsxs as t,jsx as r}from"react/jsx-runtime";import{useState as n,useRef as o,useEffect as a}from"react";import i,{css as l}from"styled-components";let c;const d=new Uint8Array(16);function h(){if(!c&&(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(d)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));var g={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function u(e,t,r){if(g.randomUUID&&!t&&!e)return g.randomUUID();const n=(e=e||{}).random||(e.rng||h)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}(n)}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,y="object"==typeof f&&f&&f.Object===Object&&f,m="object"==typeof self&&self&&self.Object===Object&&self,C=y||m||Function("return this")(),v=C.Symbol,S=v,F=Object.prototype,$=F.hasOwnProperty,b=F.toString,B=S?S.toStringTag:void 0;var H=function(e){var t=$.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var o=b.call(e);return n&&(t?e[B]=r:delete e[B]),o},w=Object.prototype.toString;var D=H,x=function(e){return w.call(e)},_=v?v.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?D(e):x(e)};var z=k,j=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||j(e)&&"[object Symbol]"==z(e)},A=p,N=E,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var O=function(e,t){if(A(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!N(e))||(I.test(e)||!V.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L=k,T=W;var P,R=function(e){if(!T(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},M=C["__core-js_shared__"],Z=(P=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var U=function(e){return!!Z&&Z in e},X=Function.prototype.toString;var G=R,q=U,J=W,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,Y=Function.prototype,ee=Object.prototype,te=Y.toString,re=ee.hasOwnProperty,ne=RegExp("^"+te.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!J(e)||q(e))&&(G(e)?ne:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=ae(e,t);return oe(r)?r:void 0},le=ie(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var he=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=le,ge=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(se){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},fe=le,pe=Object.prototype.hasOwnProperty;var ye=le;var me=de,Ce=he,ve=ue,Se=function(e){var t=this.__data__;return fe?void 0!==t[e]:pe.call(t,e)},Fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$e.prototype.clear=me,$e.prototype.delete=Ce,$e.prototype.get=ve,$e.prototype.has=Se,$e.prototype.set=Fe;var be=$e;var Be=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},De=we,xe=Array.prototype.splice;var _e=we;var ke=we;var ze=we;var je=Be,Ee=function(e){var t=this.__data__,r=De(t,e);return!(r<0)&&(r==t.length-1?t.pop():xe.call(t,r,1),--this.size,!0)},Ae=function(e){var t=this.__data__,r=_e(t,e);return r<0?void 0:t[r][1]},Ne=function(e){return ke(this.__data__,e)>-1},Ve=function(e,t){var r=this.__data__,n=ze(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ie(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ie.prototype.clear=je,Ie.prototype.delete=Ee,Ie.prototype.get=Ae,Ie.prototype.has=Ne,Ie.prototype.set=Ve;var Oe=Ie,We=ie(C,"Map"),Le=be,Te=Oe,Pe=We;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Me=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ze=Me;var Ue=Me;var Xe=Me;var Ge=Me;var qe=function(){this.size=0,this.__data__={hash:new Le,map:new(Pe||Te),string:new Le}},Je=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ue(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},Ye=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}et.prototype.clear=qe,et.prototype.delete=Je,et.prototype.get=Ke,et.prototype.has=Qe,et.prototype.set=Ye;var tt=et;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(rt.Cache||tt),r}rt.Cache=tt;var nt=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,it=function(e){var t=nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,r,n,o){t.push(n?o.replace(at,"$1"):r||e)})),t}));var lt=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},ct=p,dt=E,ht=v?v.prototype:void 0,st=ht?ht.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return st?st.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ut=gt;var ft=p,pt=O,yt=it,mt=function(e){return null==e?"":ut(e)};var Ct=E;var vt=function(e,t){return ft(e)?e:pt(e,t)?[e]:yt(mt(e))},St=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var r=0,n=(t=vt(t,e)).length;null!=e&&r<n;)e=e[St(t[r++])];return r&&r==n?e:void 0};var $t=function(e,t,r){var n=null==e?void 0:Ft(e,t);return void 0===n?r:n};const bt=(e,t,r)=>t?$t(r,t)||$t(e,t):r||e,Bt=(e,t)=>{const r=t||e.defaultValue;return $t(e.collections,r)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const r=t.theme,n=Bt(wt,r[Ht.colorScheme]);return r.options&&r.options.color?bt(n,e,r.options.color):bt(n,e)},xt={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}},_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},kt={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zt=e=>t=>{const r=t.theme,n=Bt(kt,r[Ht.textStyleScheme]);return r.options&&r.options.textStyle?bt(n,e,r.options.textStyle):bt(n,e)},jt={D1:{fontFamily:zt("D1.fontFamily"),fontSize:zt("D1.fontSize"),fontWeight:zt("D1.fontWeight"),lineHeight:zt("D1.lineHeight"),letterSpacing:zt("D1.letterSpacing")},D2:{fontFamily:zt("D2.fontFamily"),fontSize:zt("D2.fontSize"),fontWeight:zt("D2.fontWeight"),lineHeight:zt("D2.lineHeight"),letterSpacing:zt("D2.letterSpacing")},D3:{fontFamily:zt("D3.fontFamily"),fontSize:zt("D3.fontSize"),fontWeight:zt("D3.fontWeight"),lineHeight:zt("D3.lineHeight"),letterSpacing:zt("D3.letterSpacing")},D4:{fontFamily:zt("D4.fontFamily"),fontSize:zt("D4.fontSize"),fontWeight:zt("D4.fontWeight"),lineHeight:zt("D4.lineHeight"),letterSpacing:zt("D4.letterSpacing")},DBody:{fontFamily:zt("DBody.fontFamily"),fontSize:zt("DBody.fontSize"),fontWeight:zt("DBody.fontWeight"),lineHeight:zt("DBody.lineHeight"),letterSpacing:zt("DBody.letterSpacing")},H1:{fontFamily:zt("H1.fontFamily"),fontSize:zt("H1.fontSize"),fontWeight:zt("H1.fontWeight"),lineHeight:zt("H1.lineHeight"),letterSpacing:zt("H1.letterSpacing")},H2:{fontFamily:zt("H2.fontFamily"),fontSize:zt("H2.fontSize"),fontWeight:zt("H2.fontWeight"),lineHeight:zt("H2.lineHeight"),letterSpacing:zt("H2.letterSpacing")},H3:{fontFamily:zt("H3.fontFamily"),fontSize:zt("H3.fontSize"),fontWeight:zt("H3.fontWeight"),lineHeight:zt("H3.lineHeight"),letterSpacing:zt("H3.letterSpacing")},H4:{fontFamily:zt("H4.fontFamily"),fontSize:zt("H4.fontSize"),fontWeight:zt("H4.fontWeight"),lineHeight:zt("H4.lineHeight"),letterSpacing:zt("H4.letterSpacing")},H5:{fontFamily:zt("H5.fontFamily"),fontSize:zt("H5.fontSize"),fontWeight:zt("H5.fontWeight"),lineHeight:zt("H5.lineHeight"),letterSpacing:zt("H5.letterSpacing")},H6:{fontFamily:zt("H6.fontFamily"),fontSize:zt("H6.fontSize"),fontWeight:zt("H6.fontWeight"),lineHeight:zt("H6.lineHeight"),letterSpacing:zt("H6.letterSpacing")},Body:{fontFamily:zt("Body.fontFamily"),fontSize:zt("Body.fontSize"),fontWeight:zt("Body.fontWeight"),lineHeight:zt("Body.lineHeight"),letterSpacing:zt("Body.letterSpacing")},BodySmall:{fontFamily:zt("BodySmall.fontFamily"),fontSize:zt("BodySmall.fontSize"),fontWeight:zt("BodySmall.fontWeight"),lineHeight:zt("BodySmall.lineHeight"),letterSpacing:zt("BodySmall.letterSpacing")},XSmall:{fontFamily:zt("XSmall.fontFamily"),fontSize:zt("XSmall.fontSize"),fontWeight:zt("XSmall.fontWeight"),lineHeight:zt("XSmall.lineHeight"),letterSpacing:zt("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},At=(e,t)=>r=>{const n=jt[e].fontFamily(r),o=jt[e].fontWeight(r);return Object.values(_t).includes(n)?l`
                font-family: ${Et(t)||Et(o)||n};
                font-weight: normal !important;
            `:l`
            font-family: ${n};
            font-weight: ${(Nt(t)||o)??"normal"};
        `},Nt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vt=(e,t,r=!1)=>n=>{const o=jt[e],a=o.fontSize(n);return l`
            ${At(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${l`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},It=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var Ot,Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});var Lt=e;const Tt=e=>Lt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Lt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Pt;Tt.displayName="ExternalIcon",Ot=Wt.ExternalIcon=Tt,function(e){e.D1=i.h1`
        ${e=>l`
                ${Vt("D1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${Vt("D2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${Vt("D3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${Vt("D4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${Vt("DBody",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${Vt("H1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${Vt("H2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${Vt("H3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${Vt("H4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${Vt("H5",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${Vt("H6",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${Vt("Body",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${Vt("BodySmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${Vt("XSmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Zt({...e,textStyle:"Body"}),Small:e=>Zt({...e,textStyle:"BodySmall"})}}(Pt||(Pt={}));const Rt=i.a`
    ${e=>l`
            ${Vt(e.textStyle,e.weight)}
            color: ${xt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xt.Secondary};

                svg {
                    color: ${xt.Secondary};
                }
            }
        `}
`,Mt=i(Ot)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=({external:e=!1,children:n,...o})=>t(Rt,{...o,children:[n,e&&r(Mt,{})]});var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Xt=i.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return l`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?l`
                        border-color: ${xt.Validation.Red.Icon};
                        background: ${xt.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xt.Shadow.Red};
                        }
                    `:e.$disabled?l`
                        border-color: transparent;
                    `:l`
                        border-color: transparent;

                        :hover {
                            background: ${xt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?l`
                        background: ${xt.Neutral[6]};
                        border-color: ${xt.Neutral[5]};
                    `:e.$disabled&&e.$selected?l`
                        background: ${xt.Neutral[6]};
                        border-color: ${xt.Neutral[4]};
                    `:e.$error?l`
                        background: ${xt.Neutral[8]};
                        border-color: ${xt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xt.Shadow.Red};
                        }
                    `:e.$selected?l`
                        background: ${xt.Accent.Light[5]};
                        border-color: ${xt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xt.Shadow.Accent};
                        }
                    `:l`
                        background: ${xt.Neutral[8]};
                        border-color: ${xt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xt.Shadow.Accent};
                            border-color: ${xt.Accent.Light[1]};
                        }
                    `}
`,Gt=i.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,qt=i.div`
    display: flex;
    flex-direction: column;
`,Jt=i.label`
    ${e=>e.$selected&&!e.$indicator?l`
                ${Vt("H4","semibold")}
            `:l`
                ${Vt("H4","regular")}
            `}

    color: ${xt.Neutral[1]};

    ${e=>e.$disabled?l`
                color: ${xt.Neutral[3](e)};
            `:e.$selected?l`
                color: ${xt.Primary(e)};
            `:void 0}
`;var Kt,Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});var Yt=e;const er=e=>Yt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Yt.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});er.displayName="CircleIcon",Kt=Qt.CircleIcon=er;var tr,rr={};Object.defineProperty(rr,"__esModule",{value:!0});var nr=e;const or=e=>nr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:nr.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});or.displayName="CircleDotIcon",tr=rr.CircleDotIcon=or;var ar,ir={};Object.defineProperty(ir,"__esModule",{value:!0});var lr=e;const cr=e=>lr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:lr.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});cr.displayName="CrossIcon",ar=ir.CrossIcon=cr;var dr,hr={};Object.defineProperty(hr,"__esModule",{value:!0});var sr=e;const gr=e=>sr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:sr.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});gr.displayName="SquareIcon",dr=hr.SquareIcon=gr;var ur,fr={};Object.defineProperty(fr,"__esModule",{value:!0});var pr=e;const yr=e=>pr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:pr.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});yr.displayName="SquareTickFillIcon",ur=fr.SquareTickFillIcon=yr;var mr,Cr={};Object.defineProperty(Cr,"__esModule",{value:!0});var vr=e;const Sr=e=>vr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:vr.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Sr.displayName="TickIcon",mr=Cr.TickIcon=Sr;const Fr=i.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?l`
                    color: ${xt.Primary};
                `:l`
                    color: ${xt.Neutral[4]};
                `};
    }
`,$r=({type:e,active:t=!1,disabled:n,className:o})=>{let a;switch(e){case"checkbox":a=r(t?ur:dr,{});break;case"radio":a=r(t?tr:Kt,{});break;case"tick":a=r(mr,{});break;case"cross":a=r(ar,{});break;default:a=null}return r(Fr,{className:o,$active:t,disabled:n,children:a})},br=({type:e="checkbox",indicator:i,checked:l,styleType:c="default",children:d,disabled:h,error:s,name:g,id:f,className:p,"data-testid":y,onChange:m})=>{const[C,v]=n(l),[S]=n((()=>u())),F=f?`${f}-input`:S,$=o();a((()=>{v(l)}),[l]);return t(Xt,{$selected:C,$disabled:h,className:p,$styleType:c,$error:s,$indicator:i,id:f,"data-testid":y,children:[i&&(()=>{let t;switch(e){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=e}return r($r,{type:t,active:C,disabled:h})})(),r(Gt,{ref:$,name:g,id:F,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:t=>{if(!h){switch(e){case"checkbox":C||v((e=>!e));break;case"radio":case"yes":case"no":C||v(!0)}m&&m(t)}},checked:C}),r(qt,{children:r(Jt,{htmlFor:F,$selected:C,$indicator:i,$disabled:h,"data-testid":"toggle-label",children:d})})]})};export{br as Toggle};
//# sourceMappingURL=index.js.map
