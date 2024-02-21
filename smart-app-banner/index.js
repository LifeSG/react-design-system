import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n from"react";import{CrossIcon as a}from"@lifesg/react-icons/cross";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as s}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function h(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f=Array.isArray,m="object"==typeof u&&u&&u.Object===Object&&u,F="object"==typeof self&&self&&self.Object===Object&&self,y=m||F||Function("return this")(),B=y.Symbol,b=B,S=Object.prototype,$=S.hasOwnProperty,v=S.toString,D=b?b.toStringTag:void 0;var x=function(e){var t=$.call(e,D),r=e[D];try{e[D]=void 0;var n=!0}catch(e){}var a=v.call(e);return n&&(t?e[D]=r:delete e[D]),a},H=Object.prototype.toString;var E=x,w=function(e){return H.call(e)},k=B?B.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?E(e):w(e)};var _=A,z=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==_(e)},O=f,T=C,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var I=function(e,t){if(O(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!T(e))||(N.test(e)||!j.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=A,L=W;var R,V=function(e){if(!L(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=y["__core-js_shared__"],G=(R=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var M=function(e){return!!G&&G in e},U=Function.prototype.toString;var Y=V,Z=M,q=W,J=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,re=ee.hasOwnProperty,ne=RegExp("^"+te.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!q(e)||Z(e))&&(Y(e)?ne:K).test(J(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=oe(e,t);return ae(r)?r:void 0},le=ie(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=le,he=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(ge){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return he.call(t,e)?t[e]:void 0},pe=le,fe=Object.prototype.hasOwnProperty;var me=le;var Fe=de,ye=se,Be=ue,be=function(e){var t=this.__data__;return pe?void 0!==t[e]:fe.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$e.prototype.clear=Fe,$e.prototype.delete=ye,$e.prototype.get=Be,$e.prototype.has=be,$e.prototype.set=Se;var ve=$e;var De=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var r=e.length;r--;)if(xe(e[r][0],t))return r;return-1},Ee=He,we=Array.prototype.splice;var ke=He;var Ae=He;var _e=He;var ze=De,Ce=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():we.call(t,r,1),--this.size,!0)},Oe=function(e){var t=this.__data__,r=ke(t,e);return r<0?void 0:t[r][1]},Te=function(e){return Ae(this.__data__,e)>-1},je=function(e,t){var r=this.__data__,n=_e(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ne.prototype.clear=ze,Ne.prototype.delete=Ce,Ne.prototype.get=Oe,Ne.prototype.has=Te,Ne.prototype.set=je;var Ie=Ne,We=ie(y,"Map"),Pe=ve,Le=Ie,Re=We;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var r=e.__data__;return Ve(t)?r["string"==typeof t?"string":"hash"]:r.map},Ge=Xe;var Me=Xe;var Ue=Xe;var Ye=Xe;var Ze=function(){this.size=0,this.__data__={hash:new Pe,map:new(Re||Le),string:new Pe}},qe=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Me(this,e).get(e)},Ke=function(e){return Ue(this,e).has(e)},Qe=function(e,t){var r=Ye(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}et.prototype.clear=Ze,et.prototype.delete=qe,et.prototype.get=Je,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(rt.Cache||tt),r}rt.Cache=tt;var nt=rt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=function(e){var t=nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,r,n,a){t.push(n?a.replace(ot,"$1"):r||e)})),t}));var lt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ct=f,dt=C,st=B?B.prototype:void 0,gt=st?st.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return gt?gt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ut=ht;var pt=f,ft=I,mt=it,Ft=function(e){return null==e?"":ut(e)};var yt=C;var Bt=function(e,t){return pt(e)?e:ft(e,t)?[e]:mt(Ft(e))},bt=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var r=0,n=(t=Bt(t,e)).length;null!=e&&r<n;)e=e[bt(t[r++])];return r&&r==n?e:void 0};var $t=p((function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n}));const vt=(e,t,r)=>t?$t(r,t)||$t(e,t):r||e,Dt=(e,t)=>{const r=t||e.defaultValue;return $t(e.collections,r)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const r=t.theme,n=Dt(Ht,r[xt.colorScheme]);return r.options&&r.options.color?vt(n,e,r.options.color):vt(n,e)},wt={Brand:{1:Et("Brand.1"),2:Et("Brand.2"),3:Et("Brand.3"),4:Et("Brand.4"),5:Et("Brand.5"),6:Et("Brand.6")},Primary:Et("Primary"),PrimaryDark:Et("PrimaryDark"),Secondary:Et("Secondary"),Accent:{Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Neutral:{1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},Validation:{Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Shadow:{Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")}},kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},At=e=>Object.keys(kt).reduce(((t,r)=>{const n=kt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),_t=At("max-width"),zt=(At("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ct=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ot=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ct} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tt=c(Ot)`
    animation-delay: -0.45s;
`,jt=c(Ot)`
    animation-delay: -0.3s;
`,Nt=c(Ot)`
    animation-delay: -0.15s;
`,It={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wt={collections:{base:{D1:{fontFamily:It.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:It.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:It.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:It.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:It.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:It.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:It.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:It.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:It.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:It.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:It.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:It.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:It.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:It.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Pt=e=>t=>{const r=t.theme,n=Dt(Wt,r[xt.textStyleScheme]);return r.options&&r.options.textStyle?vt(n,e,r.options.textStyle):vt(n,e)},Lt={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Rt=e=>{switch(e){case 700:case"bold":return It.Bold;case 600:case"semibold":return It.Semibold;case 300:case"light":return It.Light;case 400:case"regular":return It.Regular;default:return""}},Vt=(e,t)=>r=>{var n;const a=Lt[e].fontFamily(r),o=Lt[e].fontWeight(r);return Object.values(It).includes(a)?s`
                font-family: ${Rt(t)||Rt(o)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(n=Xt(t)||o)&&void 0!==n?n:"normal"};
        `},Xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Gt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mt=(e,t,r=!1)=>n=>{const a=Lt[e],o=a.fontSize(n);return s`
            ${Vt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${s`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Ut=(e=!1,t=!1,r=void 0)=>t?s`
            display: block;
            ${Gt(r)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Gt(r)}
        `;var Yt;!function(e){e.D1=c.h1`
        ${e=>s`
                ${Mt("D1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${Mt("D2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${Mt("D3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${Mt("D4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${Mt("DBody",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${Mt("H1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${Mt("H2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${Mt("H3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${Mt("H4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${Mt("H5",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${Mt("H6",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${Mt("Body",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${Mt("BodySmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${Mt("XSmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Jt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Jt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Yt||(Yt={}));const Zt=c.a`
    ${e=>s`
            ${Mt(e.textStyle,e.weight)}
            color: ${wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${wt.Secondary};

                svg {
                    color: ${wt.Secondary};
                }
            }
        `}
`,qt=c(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Jt=r=>{var{external:n=!1,children:a}=r,o=h(r,["external","children"]);return e(Zt,Object.assign({},o,{children:[a,n&&t(qt,{})]}))};var Kt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kt||(Kt={}));const Qt={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${wt.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${wt.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${wt.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${wt.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},er=e=>t=>{var r;const n=t.theme,a=Dt(Qt,n[xt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?vt(a,e,n.options.designToken):vt(a,e)},tr={InputBoxShadow:er("InputBoxShadow"),InputErrorBoxShadow:er("InputErrorBoxShadow"),ElevationBoxShadow:er("ElevationBoxShadow"),Table:{Header:er("Table.Header"),Cell:{Primary:er("Table.Cell.Primary"),Secondary:er("Table.Cell.Secondary"),Selected:er("Table.Cell.Selected"),Hover:er("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:er("Button.Danger.BackgroundColor"),Hover:er("Button.Danger.Hover"),Primary:er("Button.Danger.Primary"),Border:er("Button.Danger.Border")}}},rr=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return s`
                    background-color: ${wt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?tr.Button.Danger.Border:wt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary};
                    }
                `;case"light":return s`
                    background-color: ${wt.Neutral[8]};
                    border: 1px solid ${wt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary};
                    }
                `;case"disabled":return s`
                    background-color: ${wt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${wt.Neutral[3]};
                    }
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?tr.Button.Danger.Hover:wt.Secondary};
                        }
                    }
                `;default:return s`
                    background-color: ${e.$buttonIsDanger?tr.Button.Danger.BackgroundColor:wt.Primary};
                    border: 1px solid transparent;

                    ${_t.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${wt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?s`
                    height: 2.5rem;
                    span {
                        ${Mt("H5","semibold")}
                    }

                    ${_t.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    span {
                        ${Mt("H4","semibold")}
                    }

                    ${_t.mobileS} {
                        height: auto;
                    }
                `}
`,nr=c((({color:r,className:n,size:a=18})=>e(zt,Object.assign({className:n,$size:a,$color:r},{children:[t(Ot,{id:"inner1",$size:a-2,$borderWidth:2}),t(Tt,{id:"inner2",$size:a-2,$borderWidth:2}),t(jt,{id:"inner3",$size:a-2,$borderWidth:2}),t(Nt,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=wt.Neutral[3](e);break;default:t=wt.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ar={Default:n.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,d=h(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(rr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(nr,Object.assign({},s)),t("span",{children:a})]}))})),Small:n.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,d=h(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(rr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(nr,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))},or=c.button`
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&s`
                background-color: ${wt.Neutral[7]};
            `}
    }
`,ir=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:o="none",type:i="button"}=e,l=h(e,["children","focusHighlight","focusOutline","type"]);return t(or,Object.assign({ref:r,$outline:o,$highlight:a,type:i},l,{children:n}))})),lr=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,cr=c.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${wt.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return s`
                animation: ${lr} 0.3s;
            `}}
`,dr=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,sr=c(ir)`
    padding: 0;
`,gr=c(a)`
    color: ${wt.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,hr=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,ur=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${_t.mobileM} {
        margin: 0 0.5rem;
    }
`,pr=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,fr=c.div`
    max-width: 30%;
`,mr=c(ar.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Mt("XSmall","semibold")};
    }
`,Fr=c(Yt.H6)`
    overflow-wrap: anywhere;
    ${_t.mobileM} {
        ${Mt("XSmall","semibold")}
    }
`,yr=c(Yt.XSmall)`
    overflow-wrap: anywhere;
`,Br=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,br=s`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,Sr=c(i)`
    ${br}
`,$r=c(l)`
    ${br}
`,vr=c(o)`
    ${br}
`,Dr="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",xr="smart-app-banner";const Hr=n.forwardRef((function(n,a){const{className:o,show:i,href:l,content:c,offset:d=0,icon:s=Dr,animated:g=!1,onDismiss:h,onClick:u}=n,{title:p,message:f,buttonLabel:m,buttonAriaLabel:F,numberOfStars:y}=c,B=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==u||u()};return t(r,{children:i&&e(cr,Object.assign({ref:a,$isAnimated:g,$offset:d,className:o},{children:[t(dr,Object.assign({onClick:h,id:`${xr}-dismiss`,"data-testid":`${xr}-dismiss-container`},{children:t(sr,Object.assign({"aria-label":"Dismiss"},{children:t(gr,{})}))})),e(hr,Object.assign({onClick:B,id:`${xr}-proceed`,"data-testid":`${xr}-proceed-container`},{children:[t(pr,{src:s,alt:"lifesg-app-icon"}),e(ur,{children:[t(Fr,{children:p}),t(yr,{children:f}),(()=>{if(isNaN(y)||y<0)return;const e=[],r=y-Math.floor(y)>=.4;for(let r=0;r<Math.floor(y);r++)e.push(t(Sr,{},`star${r}`));if(r&&e.push(t($r,{},"halfstar")),e.length<5){const r=5-e.length;for(let n=0;n<r;n++)e.push(t(vr,{},`emptystar${n}`))}return t(Br,{children:e.slice(0,5)})})()]}),t(fr,{children:t(mr,Object.assign({type:"button",onClick:B,"aria-label":F},{children:m}))})]}))]}))})}));export{Hr as SmartAppBanner};
//# sourceMappingURL=index.js.map
