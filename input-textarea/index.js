import e,{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import o,{useState as a,useEffect as i}from"react";import l,{css as c}from"styled-components";var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,u="object"==typeof self&&self&&self.Object===Object&&self,f=g||u||Function("return this")(),p=f.Symbol,s=p,F=Object.prototype,y=F.hasOwnProperty,S=F.toString,B=s?s.toStringTag:void 0;var m=function(e){var t=y.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var o=S.call(e);return r&&(t?e[B]=n:delete e[B]),o},v=Object.prototype.toString;var H=m,D=function(e){return v.call(e)},b=p?p.toStringTag:void 0;var $=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?H(e):D(e)};var x=$,E=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==x(e)},w=h,_=C,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var k=function(e,t){if(w(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(z.test(e)||!A.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=$,N=W;var O,V=function(e){if(!N(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=f["__core-js_shared__"],j=(O=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var R=function(e){return!!j&&j in e},L=Function.prototype.toString;var P=V,G=R,X=W,M=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!X(e)||G(e))&&(P(e)?Q:Z).test(M(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Y(n)?n:void 0},ne=te(Object,"create"),re=ne;var oe=function(){this.__data__=re?re(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},de=ne,he=Object.prototype.hasOwnProperty;var ge=ne;var ue=oe,fe=ae,pe=ce,se=function(e){var t=this.__data__;return de?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=ue,ye.prototype.delete=fe,ye.prototype.get=pe,ye.prototype.has=se,ye.prototype.set=Fe;var Se=ye;var Be=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1},He=ve,De=Array.prototype.splice;var be=ve;var $e=ve;var xe=ve;var Ee=Be,Ce=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},we=function(e){var t=this.__data__,n=be(t,e);return n<0?void 0:t[n][1]},_e=function(e){return $e(this.__data__,e)>-1},Ae=function(e,t){var n=this.__data__,r=xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=Ee,ze.prototype.delete=Ce,ze.prototype.get=we,ze.prototype.has=_e,ze.prototype.set=Ae;var ke=ze,We=te(f,"Map"),Te=Se,Ne=ke,Oe=We;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Ie;var Re=Ie;var Le=Ie;var Pe=Ie;var Ge=function(){this.size=0,this.__data__={hash:new Te,map:new(Oe||Ne),string:new Te}},Xe=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Re(this,e).get(e)},Ze=function(e){return Le(this,e).has(e)},Ue=function(e,t){var n=Pe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ge,qe.prototype.delete=Xe,qe.prototype.get=Me,qe.prototype.has=Ze,qe.prototype.set=Ue;var Je=qe;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Ke.Cache||Je),n}Ke.Cache=Je;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,r,o){t.push(r?o.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},rt=h,ot=C,at=p?p.prototype:void 0,it=at?at.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(ot(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=lt;var dt=h,ht=k,gt=tt,ut=function(e){return null==e?"":ct(e)};var ft=C;var pt=function(e,t){return dt(e)?e:ht(e,t)?[e]:gt(ut(e))},st=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=pt(t,e)).length;null!=e&&n<r;)e=e[st(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=Bt(vt,n[mt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},Dt={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},bt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$t={collections:{base:{D1:{fontFamily:bt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=Bt($t,n[mt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},Et={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},Ct=e=>{switch(e){case 700:case"bold":return bt.Bold;case 600:case"semibold":return bt.Semibold;case 300:case"light":return bt.Light;case 400:case"regular":return bt.Regular;default:return""}},wt=(e,t)=>n=>{const r=Et[e].fontFamily(n),o=Et[e].fontWeight(n);return Object.values(bt).includes(r)?c`
                font-family: ${Ct(t)||Ct(o)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(_t(t)||o)??"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},At=(e,t,n=!1)=>r=>{const o=Et[e],a=o.fontSize(r);return c`
            ${wt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},zt=(e=!1,t=!1)=>t?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `;var kt,Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});var Tt=e;const Nt=e=>Tt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Tt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Ot;Nt.displayName="ExternalIcon",kt=Wt.ExternalIcon=Nt,function(e){e.D1=l.h1`
        ${e=>c`
                ${At("D1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${At("D2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${At("D3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${At("D4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${At("DBody",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${At("H1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${At("H2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${At("H3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${At("H4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${At("H5",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${At("H6",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${At("Body",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${At("BodySmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${At("XSmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>jt({...e,textStyle:"Body"}),Small:e=>jt({...e,textStyle:"BodySmall"})}}(Ot||(Ot={}));const Vt=l.a`
    ${e=>c`
            ${At(e.textStyle,e.weight)}
            color: ${Dt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dt.Secondary};

                svg {
                    color: ${Dt.Secondary};
                }
            }
        `}
`,It=l(kt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,jt=({external:e=!1,children:r,...o})=>t(Vt,{...o,children:[r,e&&n(It,{})]});var Rt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Rt||(Rt={}));const Lt=l(Ot.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return c`
                color: ${Dt.Neutral[4](e)};
            `}}
`,Pt=({value:e,maxLength:t,disabled:l,renderCustomCounter:c})=>{const[d,h]=a("");i((()=>{h(g(`${e||""}`))}),[e,t]);const g=e=>{if(c)return c(t,e.toString().length);{const n=t-e.toString().length;return n<=1?`${n} character left`:`${n.toLocaleString()} characters left`}};return n(r,{children:o.isValidElement(d)?d:n(Lt,{"data-testid":"counter-label",weight:"semibold",disabled:l,children:d})})},Gt={collections:{base:{InputBoxShadow:c`
        inset 0 0 6px 1px ${Dt.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 6px 1px ${Dt.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Dt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:c`
        inset 0 0 6px 1px ${Dt.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 6px 1px ${Dt.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Dt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Bt(Gt,n[mt.designTokenScheme]);return n.options?.designToken?St(r,e,n.options.designToken):St(r,e)},Mt=Xt("InputBoxShadow"),Zt=Xt("InputErrorBoxShadow"),Ut=(Xt("ElevationBoxShadow"),Xt("Table.Header"),Xt("Table.Cell.Primary"),Xt("Table.Cell.Secondary"),Xt("Table.Cell.Selected"),Xt("Table.Cell.Hover"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),qt=l.div`
    display: flex;
    flex-direction: column;
`,Jt=l.textarea`
    border: 1px solid ${Dt.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Ut};

    ${At("Body","regular")}
    color: ${Dt.Neutral[1]};
    background: ${Dt.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Dt.Accent.Light[1]};
        box-shadow: ${Mt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Dt.Neutral[3]};
    }

    ${e=>e.readOnly?c`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?c`
                background: ${Dt.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Dt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?c`
                border: 1px solid ${Dt.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Dt.Validation.Red.Border(e)};
                    box-shadow: ${Zt};
                }
            `:void 0}
`;o.forwardRef((({value:e,disabled:t,error:r,rows:o=5,...a},i)=>n(Jt,{ref:i,disabled:t,value:e,error:r,rows:o,...a})));const Kt=o.forwardRef((({value:e,disabled:r,rows:o=5,onChange:l,...c},d)=>{const[h,g]=a(e);i((()=>{g(e)}),[e]);return t(qt,{children:[n(Jt,{ref:d,disabled:r,value:h,rows:o||5,onChange:e=>{const t=e.target.value;c.maxLength&&t.length>c.maxLength||(g(t),e.target.value=t,l&&l(e))},...c}),c.maxLength&&n(Pt,{disabled:r,value:h,maxLength:c.maxLength,renderCustomCounter:c.renderCustomCounter})]})}));export{Kt as Textarea};
//# sourceMappingURL=index.js.map
