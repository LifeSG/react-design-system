import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as o,useEffect as i,useCallback as a}from"react";import l,{css as c}from"styled-components";var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,d="object"==typeof h&&h&&h.Object===Object&&h,u="object"==typeof self&&self&&self.Object===Object&&self,f=d||u||Function("return this")(),p=f.Symbol,s=p,y=Object.prototype,S=y.hasOwnProperty,F=y.toString,m=s?s.toStringTag:void 0;var B=function(e){var t=S.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(e){}var o=F.call(e);return r&&(t?e[m]=n:delete e[m]),o},v=Object.prototype.toString;var H=B,$=function(e){return v.call(e)},b=p?p.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?H(e):$(e)};var _=D,w=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==_(e)},x=g,C=z,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var A=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(E.test(e)||!k.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=D,O=W;var j,V=function(e){if(!O(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=f["__core-js_shared__"],I=(j=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var P=function(e){return!!I&&I in e},R=Function.prototype.toString;var L=V,X=P,G=W,M=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!G(e)||X(e))&&(L(e)?Q:Z).test(M(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Y(n)?n:void 0},ne=te(Object,"create"),re=ne;var oe=function(){this.__data__=re?re(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},he=ne,ge=Object.prototype.hasOwnProperty;var de=ne;var ue=oe,fe=ie,pe=ce,se=function(e){var t=this.__data__;return he?void 0!==t[e]:ge.call(t,e)},ye=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=ue,Se.prototype.delete=fe,Se.prototype.get=pe,Se.prototype.has=se,Se.prototype.set=ye;var Fe=Se;var me=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},He=ve,$e=Array.prototype.splice;var be=ve;var De=ve;var _e=ve;var we=me,ze=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=be(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return De(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=_e(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=we,Ee.prototype.delete=ze,Ee.prototype.get=xe,Ee.prototype.has=Ce,Ee.prototype.set=ke;var Ae=Ee,We=te(f,"Map"),Ne=Fe,Oe=Ae,je=We;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Te;var Pe=Te;var Re=Te;var Le=Te;var Xe=function(){this.size=0,this.__data__={hash:new Ne,map:new(je||Oe),string:new Ne}},Ge=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Pe(this,e).get(e)},Ze=function(e){return Re(this,e).has(e)},Ue=function(e,t){var n=Le(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Xe,qe.prototype.delete=Ge,qe.prototype.get=Me,qe.prototype.has=Ze,qe.prototype.set=Ue;var Je=qe;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ke.Cache||Je),n}Ke.Cache=Je;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,r,o){t.push(r?o.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},rt=g,ot=z,it=p?p.prototype:void 0,at=it?it.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(ot(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=lt;var ht=g,gt=A,dt=tt,ut=function(e){return null==e?"":ct(e)};var ft=z;var pt=function(e,t){return ht(e)?e:gt(e,t)?[e]:dt(ut(e))},st=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var yt=function(e,t){for(var n=0,r=(t=pt(t,e)).length;null!=e&&n<r;)e=e[st(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:yt(e,t);return void 0===r?n:r};const Ft=(e,t,n)=>t?St(n,t)||St(e,t):n||e,mt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=mt(vt,n[Bt.colorScheme]);return n.options&&n.options.color?Ft(r,e,n.options.color):Ft(r,e)},$t={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},bt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Dt={collections:{base:{D1:{fontFamily:bt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=mt(Dt,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?Ft(r,e,n.options.textStyle):Ft(r,e)},wt={D1:{fontFamily:_t("D1.fontFamily"),fontSize:_t("D1.fontSize"),fontWeight:_t("D1.fontWeight"),lineHeight:_t("D1.lineHeight"),letterSpacing:_t("D1.letterSpacing")},D2:{fontFamily:_t("D2.fontFamily"),fontSize:_t("D2.fontSize"),fontWeight:_t("D2.fontWeight"),lineHeight:_t("D2.lineHeight"),letterSpacing:_t("D2.letterSpacing")},D3:{fontFamily:_t("D3.fontFamily"),fontSize:_t("D3.fontSize"),fontWeight:_t("D3.fontWeight"),lineHeight:_t("D3.lineHeight"),letterSpacing:_t("D3.letterSpacing")},D4:{fontFamily:_t("D4.fontFamily"),fontSize:_t("D4.fontSize"),fontWeight:_t("D4.fontWeight"),lineHeight:_t("D4.lineHeight"),letterSpacing:_t("D4.letterSpacing")},DBody:{fontFamily:_t("DBody.fontFamily"),fontSize:_t("DBody.fontSize"),fontWeight:_t("DBody.fontWeight"),lineHeight:_t("DBody.lineHeight"),letterSpacing:_t("DBody.letterSpacing")},H1:{fontFamily:_t("H1.fontFamily"),fontSize:_t("H1.fontSize"),fontWeight:_t("H1.fontWeight"),lineHeight:_t("H1.lineHeight"),letterSpacing:_t("H1.letterSpacing")},H2:{fontFamily:_t("H2.fontFamily"),fontSize:_t("H2.fontSize"),fontWeight:_t("H2.fontWeight"),lineHeight:_t("H2.lineHeight"),letterSpacing:_t("H2.letterSpacing")},H3:{fontFamily:_t("H3.fontFamily"),fontSize:_t("H3.fontSize"),fontWeight:_t("H3.fontWeight"),lineHeight:_t("H3.lineHeight"),letterSpacing:_t("H3.letterSpacing")},H4:{fontFamily:_t("H4.fontFamily"),fontSize:_t("H4.fontSize"),fontWeight:_t("H4.fontWeight"),lineHeight:_t("H4.lineHeight"),letterSpacing:_t("H4.letterSpacing")},H5:{fontFamily:_t("H5.fontFamily"),fontSize:_t("H5.fontSize"),fontWeight:_t("H5.fontWeight"),lineHeight:_t("H5.lineHeight"),letterSpacing:_t("H5.letterSpacing")},H6:{fontFamily:_t("H6.fontFamily"),fontSize:_t("H6.fontSize"),fontWeight:_t("H6.fontWeight"),lineHeight:_t("H6.lineHeight"),letterSpacing:_t("H6.letterSpacing")},Body:{fontFamily:_t("Body.fontFamily"),fontSize:_t("Body.fontSize"),fontWeight:_t("Body.fontWeight"),lineHeight:_t("Body.lineHeight"),letterSpacing:_t("Body.letterSpacing")},BodySmall:{fontFamily:_t("BodySmall.fontFamily"),fontSize:_t("BodySmall.fontSize"),fontWeight:_t("BodySmall.fontWeight"),lineHeight:_t("BodySmall.lineHeight"),letterSpacing:_t("BodySmall.letterSpacing")},XSmall:{fontFamily:_t("XSmall.fontFamily"),fontSize:_t("XSmall.fontSize"),fontWeight:_t("XSmall.fontWeight"),lineHeight:_t("XSmall.lineHeight"),letterSpacing:_t("XSmall.letterSpacing")}},zt=e=>{switch(e){case 700:case"bold":return bt.Bold;case 600:case"semibold":return bt.Semibold;case 300:case"light":return bt.Light;case 400:case"regular":return bt.Regular;default:return""}},xt=(e,t)=>n=>{const r=wt[e].fontFamily(n),o=wt[e].fontWeight(n);return Object.values(bt).includes(r)?c`
                font-family: ${zt(t)||zt(o)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(Ct(t)||o)??"normal"};
        `},Ct=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=(e,t,n=!1)=>r=>{const o=wt[e],i=o.fontSize(r);return c`
            ${xt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Et=(e=!1,t=!1)=>t?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `;var At,Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});var Nt=e;const Ot=e=>Nt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Nt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var jt;Ot.displayName="ExternalIcon",At=Wt.ExternalIcon=Ot,function(e){e.D1=l.h1`
        ${e=>c`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>It({...e,textStyle:"Body"}),Small:e=>It({...e,textStyle:"BodySmall"})}}(jt||(jt={}));const Vt=l.a`
    ${e=>c`
            ${kt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Tt=l(At)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=({external:e=!1,children:r,...o})=>t(Vt,{...o,children:[r,e&&n(Tt,{})]});var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Rt=l.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6875rem 1rem;
    height: 3rem;
    min-width: 5rem;
    border-radius: 4px;
    border: 1px solid ${$t.Primary};
    background: ${$t.Neutral[8]};
    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px 1px ${$t.Shadow.Accent};
    }

    ${e=>e.disabled&&!e.$selected?c`
                background: ${$t.Neutral[6](e)};
                border: 1px solid ${$t.Neutral[6](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.disabled&&e.$selected?c`
                background: ${$t.Neutral[6](e)};
                border: 1px solid ${$t.Neutral[4](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.$selected?c`
                background: ${$t.Accent.Light[5](e)};
                padding: 0.6875rem 0.912rem; // Bold font takes bigger width
            `:0==e.$selected?c`
                border: 1px solid ${$t.Neutral[5](e)};
            `:void 0}
`,Lt=l.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Xt=l.span`
    ${e=>c`
            ${kt("H4",e.$weight)}
        `}
    color: ${$t.Neutral[1]};
    text-align: center;

    ${e=>e.disabled?c`
                color: ${$t.Neutral[3](e)};
            `:e.$selected?c`
                color: ${$t.Primary(e)};
            `:void 0}
`,Gt=({disabled:e,checked:l,onChange:c,type:h="checkbox",children:g,className:d,...u})=>{const[f,p]=r(l),s=o();i((()=>{p(l)}),[l]);const y=a((t=>{e||("radio"!==h||f||p(!0),"checkbox"===h&&p((e=>!e)),c&&c(t))}),[]);return t(Rt,{$selected:f,disabled:e,role:"checkbox","aria-checked":f,className:d,children:[n(Lt,{ref:s,type:"checkbox","data-testid":"toggle-button-input",disabled:e,onChange:y,checked:f,...u}),n(Xt,{$weight:f?"bold":"regular",$selected:f,disabled:e,"data-testid":"toggle-button-label",children:g})]})};export{Gt as ToggleButton};
//# sourceMappingURL=index.js.map
