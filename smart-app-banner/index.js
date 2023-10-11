import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n from"react";import{CrossIcon as i}from"@lifesg/react-icons/cross";import{StarIcon as a}from"@lifesg/react-icons/star";import{StarFillIcon as o}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as s}from"styled-components";import{ExternalIcon as h}from"@lifesg/react-icons/external";function g(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,p="object"==typeof f&&f&&f.Object===Object&&f,m="object"==typeof self&&self&&self.Object===Object&&self,y=p||m||Function("return this")(),F=y.Symbol,b=F,S=Object.prototype,$=S.hasOwnProperty,B=S.toString,v=b?b.toStringTag:void 0;var D=function(e){var t=$.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var i=B.call(e);return n&&(t?e[v]=r:delete e[v]),i},H=Object.prototype.toString;var w=D,x=function(e){return H.call(e)},E=F?F.toStringTag:void 0;var z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?w(e):x(e)};var _=z,O=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==_(e)},A=u,j=k,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var C=function(e,t){if(A(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!j(e))||(W.test(e)||!N.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=z,I=T;var R,V=function(e){if(!I(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=y["__core-js_shared__"],X=(R=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var G=function(e){return!!X&&X in e},M=Function.prototype.toString;var U=V,Y=G,Z=T,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,ee=K.toString,te=Q.hasOwnProperty,re=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!Z(e)||Y(e))&&(U(e)?re:J).test(q(e))},ie=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var r=ie(e,t);return ne(r)?r:void 0},oe=ae(Object,"create"),le=oe;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=oe,he=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(se){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return he.call(t,e)?t[e]:void 0},fe=oe,ue=Object.prototype.hasOwnProperty;var pe=oe;var me=ce,ye=de,Fe=ge,be=function(e){var t=this.__data__;return fe?void 0!==t[e]:ue.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$e.prototype.clear=me,$e.prototype.delete=ye,$e.prototype.get=Fe,$e.prototype.has=be,$e.prototype.set=Se;var Be=$e;var ve=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},we=He,xe=Array.prototype.splice;var Ee=He;var ze=He;var _e=He;var Oe=ve,ke=function(e){var t=this.__data__,r=we(t,e);return!(r<0)&&(r==t.length-1?t.pop():xe.call(t,r,1),--this.size,!0)},Ae=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},je=function(e){return ze(this.__data__,e)>-1},Ne=function(e,t){var r=this.__data__,n=_e(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function We(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}We.prototype.clear=Oe,We.prototype.delete=ke,We.prototype.get=Ae,We.prototype.has=je,We.prototype.set=Ne;var Ce=We,Te=ae(y,"Map"),Pe=Be,Ie=Ce,Re=Te;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var r=e.__data__;return Ve(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Le;var Ge=Le;var Me=Le;var Ue=Le;var Ye=function(){this.size=0,this.__data__={hash:new Pe,map:new(Re||Ie),string:new Pe}},Ze=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ge(this,e).get(e)},Je=function(e){return Me(this,e).has(e)},Ke=function(e,t){var r=Ue(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qe.prototype.clear=Ye,Qe.prototype.delete=Ze,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(tt.Cache||et),r}tt.Cache=et;var rt=tt;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,r,n,i){t.push(n?i.replace(it,"$1"):r||e)})),t}));var ot=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},lt=u,ct=k,dt=F?F.prototype:void 0,st=dt?dt.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(lt(t))return ot(t,e)+"";if(ct(t))return st?st.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},gt=ht;var ft=u,ut=C,pt=at,mt=function(e){return null==e?"":gt(e)};var yt=k;var Ft=function(e,t){return ft(e)?e:ut(e,t)?[e]:pt(mt(e))},bt=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[bt(t[r++])];return r&&r==n?e:void 0};var $t=function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n};const Bt=(e,t,r)=>t?$t(r,t)||$t(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return $t(e.collections,r)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},wt=e=>t=>{const r=t.theme,n=vt(Ht,r[Dt.colorScheme]);return r.options&&r.options.color?Bt(n,e,r.options.color):Bt(n,e)},xt={Brand:{1:wt("Brand.1"),2:wt("Brand.2"),3:wt("Brand.3"),4:wt("Brand.4"),5:wt("Brand.5"),6:wt("Brand.6")},Primary:wt("Primary"),PrimaryDark:wt("PrimaryDark"),Secondary:wt("Secondary"),Accent:{Light:{1:wt("Accent.Light.1"),2:wt("Accent.Light.2"),3:wt("Accent.Light.3"),4:wt("Accent.Light.4"),5:wt("Accent.Light.5"),6:wt("Accent.Light.6")},Dark:{1:wt("Accent.Dark.1"),2:wt("Accent.Dark.2"),3:wt("Accent.Dark.3")}},Neutral:{1:wt("Neutral.1"),2:wt("Neutral.2"),3:wt("Neutral.3"),4:wt("Neutral.4"),5:wt("Neutral.5"),6:wt("Neutral.6"),7:wt("Neutral.7"),8:wt("Neutral.8")},Validation:{Green:{Text:wt("Validation.Green.Text"),Icon:wt("Validation.Green.Icon"),Border:wt("Validation.Green.Border"),Background:wt("Validation.Green.Background")},Orange:{Text:wt("Validation.Orange.Text"),Icon:wt("Validation.Orange.Icon"),Border:wt("Validation.Orange.Border"),Background:wt("Validation.Orange.Background"),Badge:wt("Validation.Orange.Badge")},Red:{Text:wt("Validation.Red.Text"),Icon:wt("Validation.Red.Icon"),Border:wt("Validation.Red.Border"),Background:wt("Validation.Red.Background")},Blue:{Text:wt("Validation.Blue.Text"),Icon:wt("Validation.Blue.Icon"),Border:wt("Validation.Blue.Border"),Background:wt("Validation.Blue.Background")}},Shadow:{Accent:wt("Shadow.Accent"),Red:wt("Shadow.Red"),Elevation:wt("Shadow.Elevation")}},Et={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},zt=e=>Object.keys(Et).reduce(((t,r)=>{const n=Et[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),_t=zt("max-width"),Ot=(zt("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),kt=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,At=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||xt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${kt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,jt=c(At)`
    animation-delay: -0.45s;
`,Nt=c(At)`
    animation-delay: -0.3s;
`,Wt=c(At)`
    animation-delay: -0.15s;
`,Ct={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Tt={collections:{base:{D1:{fontFamily:Ct.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ct.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ct.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ct.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ct.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ct.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ct.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ct.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ct.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ct.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ct.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ct.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ct.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ct.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Pt=e=>t=>{const r=t.theme,n=vt(Tt,r[Dt.textStyleScheme]);return r.options&&r.options.textStyle?Bt(n,e,r.options.textStyle):Bt(n,e)},It={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Rt=e=>{switch(e){case 700:case"bold":return Ct.Bold;case 600:case"semibold":return Ct.Semibold;case 300:case"light":return Ct.Light;case 400:case"regular":return Ct.Regular;default:return""}},Vt=(e,t)=>r=>{var n;const i=It[e].fontFamily(r),a=It[e].fontWeight(r);return Object.values(Ct).includes(i)?s`
                font-family: ${Rt(t)||Rt(a)||i};
                font-weight: normal !important;
            `:s`
            font-family: ${i};
            font-weight: ${null!==(n=Lt(t)||a)&&void 0!==n?n:"normal"};
        `},Lt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=(e,t,r=!1)=>n=>{const i=It[e],a=i.fontSize(n);return s`
            ${Vt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${s`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1)=>t?s`
            display: block;
        `:e?s`
            display: inline;
        `:s`
            display: block;
        `;var Mt;!function(e){e.D1=c.h1`
        ${e=>s`
                ${Xt("D1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${Xt("D2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${Xt("D3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${Xt("D4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${Xt("DBody",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${Xt("H1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${Xt("H2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${Xt("H3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${Xt("H4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${Xt("H5",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${Xt("H6",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${Xt("Body",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${Xt("BodySmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${Xt("XSmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Mt||(Mt={}));const Ut=c.a`
    ${e=>s`
            ${Xt(e.textStyle,e.weight)}
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
`,Yt=c(h)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=r=>{var{external:n=!1,children:i}=r,a=g(r,["external","children"]);return e(Ut,Object.assign({},a,{children:[i,n&&t(Yt,{})]}))};var qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(qt||(qt={}));const Jt=c.button`
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
                    background-color: ${xt.Neutral[8](e)};
                    border: 1px solid ${xt.Primary(e)};

                    span {
                        color: ${xt.Primary(e)};
                    }
                `;case"light":return s`
                    background-color: ${xt.Neutral[8](e)};
                    border: 1px solid ${xt.Neutral[5](e)};

                    span {
                        color: ${xt.Primary(e)};
                    }
                `;case"disabled":return s`
                    background-color: ${xt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${xt.Neutral[3](e)};
                    }
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${xt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${xt.Secondary};
                        }
                    }
                `;default:return s`
                    background-color: ${xt.Primary(e)};
                    border: 1px solid transparent;

                    ${_t.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${xt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?s`
                    height: 2.5rem;
                    span {
                        ${Xt("H5","semibold")}
                    }

                    ${_t.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    span {
                        ${Xt("H4","semibold")}
                    }

                    ${_t.mobileS} {
                        height: auto;
                    }
                `}
`,Kt=c((({color:r,className:n,size:i=18})=>e(Ot,Object.assign({className:n,$size:i,$color:r},{children:[t(At,{id:"inner1",$size:i-2,$borderWidth:2}),t(jt,{id:"inner2",$size:i-2,$borderWidth:2}),t(Nt,{id:"inner3",$size:i-2,$borderWidth:2}),t(Wt,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=xt.Primary(e);break;case"disabled":t=xt.Neutral[3](e);break;default:t=xt.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Qt={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=g(r,["children","disabled","loading","styleType"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(Jt,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(Kt,Object.assign({},d)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=g(r,["children","disabled","loading","styleType"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(Jt,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(Kt,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},er=c.button`
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
                background-color: ${xt.Neutral[7]};
            `}
    }
`,tr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,l=g(e,["children","focusHighlight","focusOutline","type"]);return t(er,Object.assign({ref:r,$outline:a,$highlight:i,type:o},l,{children:n}))})),rr=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,nr=c.div`
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
    background: ${xt.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return s`
                animation: ${rr} 0.3s;
            `}}
`,ir=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,ar=c(tr)`
    padding: 0;
`,or=c(i)`
    color: ${xt.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,lr=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,cr=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${_t.mobileM} {
        margin: 0 0.5rem;
    }
`,dr=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,sr=c.div`
    max-width: 30%;
`,hr=c(Qt.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Xt("XSmall","semibold")};
    }
`,gr=c(Mt.H6)`
    overflow-wrap: anywhere;
    ${_t.mobileM} {
        ${Xt("XSmall","semibold")}
    }
`,fr=c(Mt.XSmall)`
    overflow-wrap: anywhere;
`,ur=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,pr=s`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,mr=c(o)`
    ${pr}
`,yr=c(l)`
    ${pr}
`,Fr=c(a)`
    ${pr}
`,br="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",Sr="smart-app-banner";const $r=n.forwardRef((function(n,i){const{className:a,show:o,href:l,content:c,offset:d=0,icon:s=br,animated:h=!1,onDismiss:g,onClick:f}=n,{title:u,message:p,buttonLabel:m,buttonAriaLabel:y,numberOfStars:F}=c,b=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==f||f()};return t(r,{children:o&&e(nr,Object.assign({ref:i,$isAnimated:h,$offset:d,className:a},{children:[t(ir,Object.assign({onClick:g,id:`${Sr}-dismiss`,"data-testid":`${Sr}-dismiss-container`},{children:t(ar,Object.assign({"aria-label":"Dismiss"},{children:t(or,{})}))})),e(lr,Object.assign({onClick:b,id:`${Sr}-proceed`,"data-testid":`${Sr}-proceed-container`},{children:[t(dr,{src:s,alt:"lifesg-app-icon"}),e(cr,{children:[t(gr,{children:u}),t(fr,{children:p}),(()=>{if(isNaN(F)||F<0)return;const e=[],r=F-Math.floor(F)>=.4;for(let r=0;r<Math.floor(F);r++)e.push(t(mr,{},`star${r}`));if(r&&e.push(t(yr,{},"halfstar")),e.length<5){const r=5-e.length;for(let n=0;n<r;n++)e.push(t(Fr,{},`emptystar${n}`))}return t(ur,{children:e.slice(0,5)})})()]}),t(sr,{children:t(hr,Object.assign({type:"button",onClick:b,"aria-label":y},{children:m}))})]}))]}))})}));export{$r as SmartAppBanner};
//# sourceMappingURL=index.js.map
