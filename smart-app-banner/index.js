import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n from"react";import{CrossIcon as i}from"@lifesg/react-icons/cross";import{StarIcon as a}from"@lifesg/react-icons/star";import{StarFillIcon as o}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as s}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function h(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,y=p||m||Function("return this")(),F=y.Symbol,b=F,S=Object.prototype,B=S.hasOwnProperty,$=S.toString,v=b?b.toStringTag:void 0;var D=function(e){var t=B.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var i=$.call(e);return n&&(t?e[v]=r:delete e[v]),i},H=Object.prototype.toString;var x=D,E=function(e){return H.call(e)},w=F?F.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?x(e):E(e)};var k=A,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==k(e)},O=f,C=_,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var T=function(e,t){if(O(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!C(e))||(N.test(e)||!j.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L=A,I=W;var P,R=function(e){if(!I(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=y["__core-js_shared__"],X=(P=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var G=function(e){return!!X&&X in e},M=Function.prototype.toString;var U=R,Y=G,Z=W,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,ee=K.toString,te=Q.hasOwnProperty,re=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!Z(e)||Y(e))&&(U(e)?re:J).test(q(e))},ie=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var r=ie(e,t);return ne(r)?r:void 0},oe=ae(Object,"create"),le=oe;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=oe,ge=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(se){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},ue=oe,fe=Object.prototype.hasOwnProperty;var pe=oe;var me=ce,ye=de,Fe=he,be=function(e){var t=this.__data__;return ue?void 0!==t[e]:fe.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=me,Be.prototype.delete=ye,Be.prototype.get=Fe,Be.prototype.has=be,Be.prototype.set=Se;var $e=Be;var ve=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},xe=He,Ee=Array.prototype.splice;var we=He;var Ae=He;var ke=He;var ze=ve,_e=function(e){var t=this.__data__,r=xe(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ee.call(t,r,1),--this.size,!0)},Oe=function(e){var t=this.__data__,r=we(t,e);return r<0?void 0:t[r][1]},Ce=function(e){return Ae(this.__data__,e)>-1},je=function(e,t){var r=this.__data__,n=ke(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ne.prototype.clear=ze,Ne.prototype.delete=_e,Ne.prototype.get=Oe,Ne.prototype.has=Ce,Ne.prototype.set=je;var Te=Ne,We=ae(y,"Map"),Le=$e,Ie=Te,Pe=We;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Ve;var Ge=Ve;var Me=Ve;var Ue=Ve;var Ye=function(){this.size=0,this.__data__={hash:new Le,map:new(Pe||Ie),string:new Le}},Ze=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ge(this,e).get(e)},Je=function(e){return Me(this,e).has(e)},Ke=function(e,t){var r=Ue(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qe.prototype.clear=Ye,Qe.prototype.delete=Ze,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(tt.Cache||et),r}tt.Cache=et;var rt=tt;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,r,n,i){t.push(n?i.replace(it,"$1"):r||e)})),t}));var ot=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},lt=f,ct=_,dt=F?F.prototype:void 0,st=dt?dt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(lt(t))return ot(t,e)+"";if(ct(t))return st?st.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ht=gt;var ut=f,ft=T,pt=at,mt=function(e){return null==e?"":ht(e)};var yt=_;var Ft=function(e,t){return ut(e)?e:ft(e,t)?[e]:pt(mt(e))},bt=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[bt(t[r++])];return r&&r==n?e:void 0};var Bt=function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n};const $t=(e,t,r)=>t?Bt(r,t)||Bt(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return Bt(e.collections,r)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const r=t.theme,n=vt(Ht,r[Dt.colorScheme]);return r.options&&r.options.color?$t(n,e,r.options.color):$t(n,e)},Et={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}},wt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},At=e=>Object.keys(wt).reduce(((t,r)=>{const n=wt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),kt=At("max-width"),zt=(At("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),_t=d`
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
    border-color: ${e=>e.$color||Et.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${_t} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ct=c(Ot)`
    animation-delay: -0.45s;
`,jt=c(Ot)`
    animation-delay: -0.3s;
`,Nt=c(Ot)`
    animation-delay: -0.15s;
`,Tt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wt={collections:{base:{D1:{fontFamily:Tt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Tt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Tt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Tt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Tt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Tt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Tt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Tt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Tt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Tt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Lt=e=>t=>{const r=t.theme,n=vt(Wt,r[Dt.textStyleScheme]);return r.options&&r.options.textStyle?$t(n,e,r.options.textStyle):$t(n,e)},It={D1:{fontFamily:Lt("D1.fontFamily"),fontSize:Lt("D1.fontSize"),fontWeight:Lt("D1.fontWeight"),lineHeight:Lt("D1.lineHeight"),letterSpacing:Lt("D1.letterSpacing")},D2:{fontFamily:Lt("D2.fontFamily"),fontSize:Lt("D2.fontSize"),fontWeight:Lt("D2.fontWeight"),lineHeight:Lt("D2.lineHeight"),letterSpacing:Lt("D2.letterSpacing")},D3:{fontFamily:Lt("D3.fontFamily"),fontSize:Lt("D3.fontSize"),fontWeight:Lt("D3.fontWeight"),lineHeight:Lt("D3.lineHeight"),letterSpacing:Lt("D3.letterSpacing")},D4:{fontFamily:Lt("D4.fontFamily"),fontSize:Lt("D4.fontSize"),fontWeight:Lt("D4.fontWeight"),lineHeight:Lt("D4.lineHeight"),letterSpacing:Lt("D4.letterSpacing")},DBody:{fontFamily:Lt("DBody.fontFamily"),fontSize:Lt("DBody.fontSize"),fontWeight:Lt("DBody.fontWeight"),lineHeight:Lt("DBody.lineHeight"),letterSpacing:Lt("DBody.letterSpacing")},H1:{fontFamily:Lt("H1.fontFamily"),fontSize:Lt("H1.fontSize"),fontWeight:Lt("H1.fontWeight"),lineHeight:Lt("H1.lineHeight"),letterSpacing:Lt("H1.letterSpacing")},H2:{fontFamily:Lt("H2.fontFamily"),fontSize:Lt("H2.fontSize"),fontWeight:Lt("H2.fontWeight"),lineHeight:Lt("H2.lineHeight"),letterSpacing:Lt("H2.letterSpacing")},H3:{fontFamily:Lt("H3.fontFamily"),fontSize:Lt("H3.fontSize"),fontWeight:Lt("H3.fontWeight"),lineHeight:Lt("H3.lineHeight"),letterSpacing:Lt("H3.letterSpacing")},H4:{fontFamily:Lt("H4.fontFamily"),fontSize:Lt("H4.fontSize"),fontWeight:Lt("H4.fontWeight"),lineHeight:Lt("H4.lineHeight"),letterSpacing:Lt("H4.letterSpacing")},H5:{fontFamily:Lt("H5.fontFamily"),fontSize:Lt("H5.fontSize"),fontWeight:Lt("H5.fontWeight"),lineHeight:Lt("H5.lineHeight"),letterSpacing:Lt("H5.letterSpacing")},H6:{fontFamily:Lt("H6.fontFamily"),fontSize:Lt("H6.fontSize"),fontWeight:Lt("H6.fontWeight"),lineHeight:Lt("H6.lineHeight"),letterSpacing:Lt("H6.letterSpacing")},Body:{fontFamily:Lt("Body.fontFamily"),fontSize:Lt("Body.fontSize"),fontWeight:Lt("Body.fontWeight"),lineHeight:Lt("Body.lineHeight"),letterSpacing:Lt("Body.letterSpacing")},BodySmall:{fontFamily:Lt("BodySmall.fontFamily"),fontSize:Lt("BodySmall.fontSize"),fontWeight:Lt("BodySmall.fontWeight"),lineHeight:Lt("BodySmall.lineHeight"),letterSpacing:Lt("BodySmall.letterSpacing")},XSmall:{fontFamily:Lt("XSmall.fontFamily"),fontSize:Lt("XSmall.fontSize"),fontWeight:Lt("XSmall.fontWeight"),lineHeight:Lt("XSmall.lineHeight"),letterSpacing:Lt("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Tt.Bold;case 600:case"semibold":return Tt.Semibold;case 300:case"light":return Tt.Light;case 400:case"regular":return Tt.Regular;default:return""}},Rt=(e,t)=>r=>{var n;const i=It[e].fontFamily(r),a=It[e].fontWeight(r);return Object.values(Tt).includes(i)?s`
                font-family: ${Pt(t)||Pt(a)||i};
                font-weight: normal !important;
            `:s`
            font-family: ${i};
            font-weight: ${null!==(n=Vt(t)||a)&&void 0!==n?n:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Gt=(e,t,r=!1)=>n=>{const i=It[e],a=i.fontSize(n);return s`
            ${Rt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${s`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Mt=(e=!1,t=!1,r=void 0)=>t?s`
            display: block;
            ${Xt(r)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Xt(r)}
        `;var Ut;!function(e){e.D1=c.h1`
        ${e=>s`
                ${Gt("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${Gt("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${Gt("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${Gt("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${Gt("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${Gt("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${Gt("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${Gt("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${Gt("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${Gt("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${Gt("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${Gt("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${Gt("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${Gt("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ut||(Ut={}));const Yt=c.a`
    ${e=>s`
            ${Gt(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,Zt=c(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qt=r=>{var{external:n=!1,children:i}=r,a=h(r,["external","children"]);return e(Yt,Object.assign({},a,{children:[i,n&&t(Zt,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const Kt=c.button`
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
                    background-color: ${Et.Neutral[8](e)};
                    border: 1px solid ${Et.Primary(e)};

                    span {
                        color: ${Et.Primary(e)};
                    }
                `;case"light":return s`
                    background-color: ${Et.Neutral[8](e)};
                    border: 1px solid ${Et.Neutral[5](e)};

                    span {
                        color: ${Et.Primary(e)};
                    }
                `;case"disabled":return s`
                    background-color: ${Et.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Et.Neutral[3](e)};
                    }
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Et.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Et.Secondary};
                        }
                    }
                `;default:return s`
                    background-color: ${Et.Primary(e)};
                    border: 1px solid transparent;

                    ${kt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Et.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?s`
                    height: 2.5rem;
                    span {
                        ${Gt("H5","semibold")}
                    }

                    ${kt.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    span {
                        ${Gt("H4","semibold")}
                    }

                    ${kt.mobileS} {
                        height: auto;
                    }
                `}
`,Qt=c((({color:r,className:n,size:i=18})=>e(zt,Object.assign({className:n,$size:i,$color:r},{children:[t(Ot,{id:"inner1",$size:i-2,$borderWidth:2}),t(Ct,{id:"inner2",$size:i-2,$borderWidth:2}),t(jt,{id:"inner3",$size:i-2,$borderWidth:2}),t(Nt,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Et.Primary(e);break;case"disabled":t=Et.Neutral[3](e);break;default:t=Et.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,er={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=h(r,["children","disabled","loading","styleType"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(Kt,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(Qt,Object.assign({},d)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=h(r,["children","disabled","loading","styleType"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(Kt,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(Qt,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},tr=c.button`
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
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&s`
                background-color: ${Et.Neutral[7]};
            `}
    }
`,rr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,l=h(e,["children","focusHighlight","focusOutline","type"]);return t(tr,Object.assign({ref:r,$outline:a,$highlight:i,type:o},l,{children:n}))})),nr=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,ir=c.div`
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
    background: ${Et.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return s`
                animation: ${nr} 0.3s;
            `}}
`,ar=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,or=c(rr)`
    padding: 0;
`,lr=c(i)`
    color: ${Et.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,cr=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,dr=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${kt.mobileM} {
        margin: 0 0.5rem;
    }
`,sr=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,gr=c.div`
    max-width: 30%;
`,hr=c(er.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Gt("XSmall","semibold")};
    }
`,ur=c(Ut.H6)`
    overflow-wrap: anywhere;
    ${kt.mobileM} {
        ${Gt("XSmall","semibold")}
    }
`,fr=c(Ut.XSmall)`
    overflow-wrap: anywhere;
`,pr=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,mr=s`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,yr=c(o)`
    ${mr}
`,Fr=c(l)`
    ${mr}
`,br=c(a)`
    ${mr}
`,Sr="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",Br="smart-app-banner";const $r=n.forwardRef((function(n,i){const{className:a,show:o,href:l,content:c,offset:d=0,icon:s=Sr,animated:g=!1,onDismiss:h,onClick:u}=n,{title:f,message:p,buttonLabel:m,buttonAriaLabel:y,numberOfStars:F}=c,b=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==u||u()};return t(r,{children:o&&e(ir,Object.assign({ref:i,$isAnimated:g,$offset:d,className:a},{children:[t(ar,Object.assign({onClick:h,id:`${Br}-dismiss`,"data-testid":`${Br}-dismiss-container`},{children:t(or,Object.assign({"aria-label":"Dismiss"},{children:t(lr,{})}))})),e(cr,Object.assign({onClick:b,id:`${Br}-proceed`,"data-testid":`${Br}-proceed-container`},{children:[t(sr,{src:s,alt:"lifesg-app-icon"}),e(dr,{children:[t(ur,{children:f}),t(fr,{children:p}),(()=>{if(isNaN(F)||F<0)return;const e=[],r=F-Math.floor(F)>=.4;for(let r=0;r<Math.floor(F);r++)e.push(t(yr,{},`star${r}`));if(r&&e.push(t(Fr,{},"halfstar")),e.length<5){const r=5-e.length;for(let n=0;n<r;n++)e.push(t(br,{},`emptystar${n}`))}return t(pr,{children:e.slice(0,5)})})()]}),t(gr,{children:t(hr,Object.assign({type:"button",onClick:b,"aria-label":y},{children:m}))})]}))]}))})}));export{$r as SmartAppBanner};
//# sourceMappingURL=index.js.map
