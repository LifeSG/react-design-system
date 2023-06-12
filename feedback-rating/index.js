import e,{jsxs as t,jsx as r}from"react/jsx-runtime";import n,{css as i,keyframes as a}from"styled-components";import o from"react";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,s="object"==typeof self&&self&&self.Object===Object&&self,u=g||s||Function("return this")(),f=u.Symbol,p=f,m=Object.prototype,y=m.hasOwnProperty,F=m.toString,S=p?p.toStringTag:void 0;var b=function(e){var t=y.call(e,S),r=e[S];try{e[S]=void 0;var n=!0}catch(e){}var i=F.call(e);return n&&(t?e[S]=r:delete e[S]),i},B=Object.prototype.toString;var $=b,v=function(e){return B.call(e)},C=f?f.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":C&&C in Object(e)?$(e):v(e)};var H=D,w=function(e){return null!=e&&"object"==typeof e};var x=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==H(e)},_=h,E=x,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var A=function(e,t){if(_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!E(e))||(k.test(e)||!z.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=D,W=L;var O,j=function(e){if(!W(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=u["__core-js_shared__"],I=(O=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var V=function(e){return!!I&&I in e},P=Function.prototype.toString;var R=j,M=V,X=L,G=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,Y=Object.prototype,q=U.toString,J=Y.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!X(e)||M(e))&&(R(e)?K:Z).test(G(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var r=ee(e,t);return Q(r)?r:void 0},re=te(Object,"create"),ne=re;var ie=function(){this.__data__=ne?ne(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},oe=re,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(oe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return le.call(t,e)?t[e]:void 0},de=re,he=Object.prototype.hasOwnProperty;var ge=re;var se=ie,ue=ae,fe=ce,pe=function(e){var t=this.__data__;return de?void 0!==t[e]:he.call(t,e)},me=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ye.prototype.clear=se,ye.prototype.delete=ue,ye.prototype.get=fe,ye.prototype.has=pe,ye.prototype.set=me;var Fe=ye;var Se=function(){this.__data__=[],this.size=0};var be=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var r=e.length;r--;)if(be(e[r][0],t))return r;return-1},$e=Be,ve=Array.prototype.splice;var Ce=Be;var De=Be;var He=Be;var we=Se,xe=function(e){var t=this.__data__,r=$e(t,e);return!(r<0)&&(r==t.length-1?t.pop():ve.call(t,r,1),--this.size,!0)},_e=function(e){var t=this.__data__,r=Ce(t,e);return r<0?void 0:t[r][1]},Ee=function(e){return De(this.__data__,e)>-1},ze=function(e,t){var r=this.__data__,n=He(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ke.prototype.clear=we,ke.prototype.delete=xe,ke.prototype.get=_e,ke.prototype.has=Ee,ke.prototype.set=ze;var Ae=ke,Le=te(u,"Map"),Ne=Fe,We=Ae,Oe=Le;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var r=e.__data__;return je(t)?r["string"==typeof t?"string":"hash"]:r.map},Ie=Te;var Ve=Te;var Pe=Te;var Re=Te;var Me=function(){this.size=0,this.__data__={hash:new Ne,map:new(Oe||We),string:new Ne}},Xe=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Ve(this,e).get(e)},Ze=function(e){return Pe(this,e).has(e)},Ue=function(e,t){var r=Re(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Me,Ye.prototype.delete=Xe,Ye.prototype.get=Ge,Ye.prototype.has=Ze,Ye.prototype.set=Ue;var qe=Ye;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Je.Cache||qe),r}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Ke(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,r,n,i){t.push(n?i.replace(et,"$1"):r||e)})),t}));var rt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},nt=h,it=x,at=f?f.prototype:void 0,ot=at?at.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(nt(t))return rt(t,e)+"";if(it(t))return ot?ot.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ct=lt;var dt=h,ht=A,gt=tt,st=function(e){return null==e?"":ct(e)};var ut=x;var ft=function(e,t){return dt(e)?e:ht(e,t)?[e]:gt(st(e))},pt=function(e){if("string"==typeof e||ut(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var r=0,n=(t=ft(t,e)).length;null!=e&&r<n;)e=e[pt(t[r++])];return r&&r==n?e:void 0};var yt=function(e,t,r){var n=null==e?void 0:mt(e,t);return void 0===n?r:n};const Ft=(e,t,r)=>t?yt(r,t)||yt(e,t):r||e,St=(e,t)=>{const r=t||e.defaultValue;return yt(e.collections,r)};var bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(bt||(bt={}));const Bt={collections:{base:c},defaultValue:"base"},$t=e=>t=>{const r=t.theme,n=St(Bt,r[bt.textStyleScheme]);return r.options&&r.options.textStyle?Ft(n,e,r.options.textStyle):Ft(n,e)},vt={D1:{fontFamily:$t("D1.fontFamily"),fontSize:$t("D1.fontSize"),fontWeight:$t("D1.fontWeight"),lineHeight:$t("D1.lineHeight"),letterSpacing:$t("D1.letterSpacing")},D2:{fontFamily:$t("D2.fontFamily"),fontSize:$t("D2.fontSize"),fontWeight:$t("D2.fontWeight"),lineHeight:$t("D2.lineHeight"),letterSpacing:$t("D2.letterSpacing")},D3:{fontFamily:$t("D3.fontFamily"),fontSize:$t("D3.fontSize"),fontWeight:$t("D3.fontWeight"),lineHeight:$t("D3.lineHeight"),letterSpacing:$t("D3.letterSpacing")},D4:{fontFamily:$t("D4.fontFamily"),fontSize:$t("D4.fontSize"),fontWeight:$t("D4.fontWeight"),lineHeight:$t("D4.lineHeight"),letterSpacing:$t("D4.letterSpacing")},DBody:{fontFamily:$t("DBody.fontFamily"),fontSize:$t("DBody.fontSize"),fontWeight:$t("DBody.fontWeight"),lineHeight:$t("DBody.lineHeight"),letterSpacing:$t("DBody.letterSpacing")},H1:{fontFamily:$t("H1.fontFamily"),fontSize:$t("H1.fontSize"),fontWeight:$t("H1.fontWeight"),lineHeight:$t("H1.lineHeight"),letterSpacing:$t("H1.letterSpacing")},H2:{fontFamily:$t("H2.fontFamily"),fontSize:$t("H2.fontSize"),fontWeight:$t("H2.fontWeight"),lineHeight:$t("H2.lineHeight"),letterSpacing:$t("H2.letterSpacing")},H3:{fontFamily:$t("H3.fontFamily"),fontSize:$t("H3.fontSize"),fontWeight:$t("H3.fontWeight"),lineHeight:$t("H3.lineHeight"),letterSpacing:$t("H3.letterSpacing")},H4:{fontFamily:$t("H4.fontFamily"),fontSize:$t("H4.fontSize"),fontWeight:$t("H4.fontWeight"),lineHeight:$t("H4.lineHeight"),letterSpacing:$t("H4.letterSpacing")},H5:{fontFamily:$t("H5.fontFamily"),fontSize:$t("H5.fontSize"),fontWeight:$t("H5.fontWeight"),lineHeight:$t("H5.lineHeight"),letterSpacing:$t("H5.letterSpacing")},H6:{fontFamily:$t("H6.fontFamily"),fontSize:$t("H6.fontSize"),fontWeight:$t("H6.fontWeight"),lineHeight:$t("H6.lineHeight"),letterSpacing:$t("H6.letterSpacing")},Body:{fontFamily:$t("Body.fontFamily"),fontSize:$t("Body.fontSize"),fontWeight:$t("Body.fontWeight"),lineHeight:$t("Body.lineHeight"),letterSpacing:$t("Body.letterSpacing")},BodySmall:{fontFamily:$t("BodySmall.fontFamily"),fontSize:$t("BodySmall.fontSize"),fontWeight:$t("BodySmall.fontWeight"),lineHeight:$t("BodySmall.lineHeight"),letterSpacing:$t("BodySmall.letterSpacing")},XSmall:{fontFamily:$t("XSmall.fontFamily"),fontSize:$t("XSmall.fontSize"),fontWeight:$t("XSmall.fontWeight"),lineHeight:$t("XSmall.lineHeight"),letterSpacing:$t("XSmall.letterSpacing")}},Ct=e=>{switch(e){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},Dt=(e,t)=>r=>{const n=vt[e].fontFamily(r),a=vt[e].fontWeight(r);return Object.values(l).includes(n)?i`
                font-family: ${Ct(t)||Ct(a)||n};
                font-weight: normal !important;
            `:i`
            font-family: ${n};
            font-weight: ${(Ht(t)||a)??"normal"};
        `},Ht=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wt=(e,t,r=!1)=>n=>{const a=vt[e],o=a.fontSize(n);return i`
            ${Dt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${i`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},xt=(e=!1,t=!1)=>t?i`
            display: block;
        `:e?i`
            display: inline;
        `:i`
            display: block;
        `;var _t,Et={};Object.defineProperty(Et,"__esModule",{value:!0});var zt=e;const kt=e=>zt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:zt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});kt.displayName="ExternalIcon",_t=Et.ExternalIcon=kt;const At={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Lt=e=>t=>{const r=t.theme,n=St(At,r[bt.colorScheme]);return r.options&&r.options.color?Ft(n,e,r.options.color):Ft(n,e)},Nt={Brand:{1:Lt("Brand.1"),2:Lt("Brand.2"),3:Lt("Brand.3"),4:Lt("Brand.4"),5:Lt("Brand.5"),6:Lt("Brand.6")},Primary:Lt("Primary"),PrimaryDark:Lt("PrimaryDark"),Secondary:Lt("Secondary"),Accent:{Light:{1:Lt("Accent.Light.1"),2:Lt("Accent.Light.2"),3:Lt("Accent.Light.3"),4:Lt("Accent.Light.4"),5:Lt("Accent.Light.5"),6:Lt("Accent.Light.6")},Dark:{1:Lt("Accent.Dark.1"),2:Lt("Accent.Dark.2"),3:Lt("Accent.Dark.3")}},Neutral:{1:Lt("Neutral.1"),2:Lt("Neutral.2"),3:Lt("Neutral.3"),4:Lt("Neutral.4"),5:Lt("Neutral.5"),6:Lt("Neutral.6"),7:Lt("Neutral.7"),8:Lt("Neutral.8")},Validation:{Green:{Text:Lt("Validation.Green.Text"),Icon:Lt("Validation.Green.Icon"),Border:Lt("Validation.Green.Border"),Background:Lt("Validation.Green.Background")},Orange:{Text:Lt("Validation.Orange.Text"),Icon:Lt("Validation.Orange.Icon"),Border:Lt("Validation.Orange.Border"),Background:Lt("Validation.Orange.Background"),Badge:Lt("Validation.Orange.Badge")},Red:{Text:Lt("Validation.Red.Text"),Icon:Lt("Validation.Red.Icon"),Border:Lt("Validation.Red.Border"),Background:Lt("Validation.Red.Background")},Blue:{Text:Lt("Validation.Blue.Text"),Icon:Lt("Validation.Blue.Icon"),Border:Lt("Validation.Blue.Border"),Background:Lt("Validation.Blue.Background")}},Shadow:{Accent:Lt("Shadow.Accent"),Red:Lt("Shadow.Red"),Elevation:Lt("Shadow.Elevation")}};var Wt;!function(e){e.D1=n.h1`
        ${e=>i`
                ${wt("D1",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>i`
                ${wt("D2",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>i`
                ${wt("D3",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>i`
                ${wt("D4",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>i`
                ${wt("DBody",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>i`
                ${wt("H1",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>i`
                ${wt("H2",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>i`
                ${wt("H3",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>i`
                ${wt("H4",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>i`
                ${wt("H5",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>i`
                ${wt("H6",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>i`
                ${wt("Body",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>i`
                ${wt("BodySmall",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>i`
                ${wt("XSmall",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Tt({...e,textStyle:"Body"}),Small:e=>Tt({...e,textStyle:"BodySmall"})}}(Wt||(Wt={}));const Ot=n.a`
    ${e=>i`
            ${wt(e.textStyle,e.weight)}
            color: ${Nt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Nt.Secondary};

                svg {
                    color: ${Nt.Secondary};
                }
            }
        `}
`,jt=n(_t)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tt=({external:e=!1,children:n,...i})=>t(Ot,{...i,children:[n,e&&r(jt,{})]});var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));const Vt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Pt="Submit",Rt="Rate your experience",Mt=5;var Xt,Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});var Zt=e;const Ut=e=>Zt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Zt.jsx("path",{d:"M7.33295 14.896L9.99995 13.312L12.688 14.896L11.979 11.896L14.292 9.917L11.229 9.646L9.99995 6.792L8.77095 9.646L5.70795 9.917L8.04195 11.896L7.33295 14.896ZM9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});Ut.displayName="StarIcon",Xt=Gt.StarIcon=Ut;var Yt,qt={};Object.defineProperty(qt,"__esModule",{value:!0});var Jt=e;const Kt=e=>Jt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Jt.jsx("path",{d:"M9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});Kt.displayName="StarFillIcon",Yt=qt.StarFillIcon=Kt;const Qt=n.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,er=i`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Nt.Primary};
    ${Qt}:focus-visible + & {
        outline: 0.125rem solid ${Nt.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,tr=n(Xt)`
    ${er}
`,rr=n(Yt)`
    ${er}
`,nr=n.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,ir=n.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,ar=e=>{const{description:n,rating:i,onRatingChange:a}=e,o=e=>{const t=`${e} star${1===e?"":"s"}`;return r(e<=i?rr:tr,{"aria-label":t})};return r(ir,{role:"radiogroup","aria-label":n,children:[...Array(Mt)].map(((e,n)=>{const l=n+1;return t(nr,{children:[r(Qt,{type:"radio",name:"star",checked:l===i,onChange:()=>(e=>{a(e)})(l)}),o(l)]},l)}))})},or={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},lr=e=>Object.keys(or).reduce(((t,r)=>{const n=or[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),cr=lr("max-width"),dr=(lr("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),hr=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,gr=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Nt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${hr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sr=n(gr)`
    animation-delay: -0.45s;
`,ur=n(gr)`
    animation-delay: -0.3s;
`,fr=n(gr)`
    animation-delay: -0.15s;
`,pr=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return i`
                    background-color: ${Nt.Neutral[8](e)};
                    border: 1px solid ${Nt.Primary(e)};

                    span {
                        color: ${Nt.Primary(e)};
                    }
                `;case"light":return i`
                    background-color: ${Nt.Neutral[8](e)};
                    border: 1px solid ${Nt.Neutral[5](e)};

                    span {
                        color: ${Nt.Primary(e)};
                    }
                `;case"disabled":return i`
                    background-color: ${Nt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Nt.Neutral[3](e)};
                    }
                `;case"link":return i`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Nt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Nt.Secondary};
                        }
                    }
                `;default:return i`
                    background-color: ${Nt.Primary(e)};
                    border: 1px solid transparent;

                    ${cr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Nt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i`
                    height: 2.5rem;
                    span {
                        ${wt("H5","semibold")}
                    }

                    ${cr.mobileS} {
                        height: auto;
                    }
                `:i`
                    height: 3rem;
                    span {
                        ${wt("H4","semibold")}
                    }

                    ${cr.mobileS} {
                        height: auto;
                    }
                `}
`,mr=n((({color:e,className:n,size:i=18})=>t(dr,{className:n,$size:i,$color:e,children:[r(gr,{id:"inner1",$size:i-2,$borderWidth:2}),r(sr,{id:"inner2",$size:i-2,$borderWidth:2}),r(ur,{id:"inner3",$size:i-2,$borderWidth:2}),r(fr,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Nt.Primary(e);break;case"disabled":t=Nt.Neutral[3](e);break;default:t=Nt.Neutral[8](e)}return i`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,yr={Default:o.forwardRef(((e,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return t(pr,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&r(mr,{...d}),r("span",{children:i})]})})),Small:o.forwardRef(((e,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return t(pr,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&r(mr,{...d,size:16}),r("span",{children:i})]})}))},Fr=n.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Sr=n.div`
    border-top: 1px solid ${Nt.Neutral[5]};
    border-bottom: 1px solid ${Nt.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    @media screen and (max-width: 38rem) {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,br=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 38rem) {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,Br=n(yr.Default)`
    margin-top: 1rem;
    width: 100%;
`,$r=e=>{const{imgSrc:n,buttonLabel:i,description:a,rating:o,className:l,onRatingChange:c,onSubmit:d}=e,h=n??Vt,g=a??Rt;return t(Sr,{className:l,children:[h&&r(Fr,{src:h,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),t(br,{children:[r(Wt.H3,{weight:"semibold",children:g}),r(ar,{description:g,rating:o,onRatingChange:c}),r(Br,{disabled:!o,onClick:d,children:i??Pt})]})]})};export{$r as FeedbackRating};
//# sourceMappingURL=index.js.map
