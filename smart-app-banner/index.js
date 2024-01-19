import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n from"react";import{CrossIcon as a}from"@lifesg/react-icons/cross";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as s}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function h(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,f="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,F=f||m||Function("return this")(),y=F.Symbol,B=y,b=Object.prototype,S=b.hasOwnProperty,$=b.toString,v=B?B.toStringTag:void 0;var D=function(e){var t=S.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var a=$.call(e);return n&&(t?e[v]=r:delete e[v]),a},x=Object.prototype.toString;var H=D,E=function(e){return x.call(e)},w=y?y.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?H(e):E(e)};var A=k,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==A(e)},C=p,O=_,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var N=function(e,t){if(C(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!O(e))||(j.test(e)||!T.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=k,P=I;var L,R=function(e){if(!P(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=F["__core-js_shared__"],X=(L=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var G=function(e){return!!X&&X in e},M=Function.prototype.toString;var U=R,Y=G,Z=I,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,ee=K.toString,te=Q.hasOwnProperty,re=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!Z(e)||Y(e))&&(U(e)?re:J).test(q(e))},ae=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var r=ae(e,t);return ne(r)?r:void 0},ie=oe(Object,"create"),le=ie;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=ie,ge=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(se){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},ue=ie,pe=Object.prototype.hasOwnProperty;var fe=ie;var me=ce,Fe=de,ye=he,Be=function(e){var t=this.__data__;return ue?void 0!==t[e]:pe.call(t,e)},be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=me,Se.prototype.delete=Fe,Se.prototype.get=ye,Se.prototype.has=Be,Se.prototype.set=be;var $e=Se;var ve=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var xe=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},He=xe,Ee=Array.prototype.splice;var we=xe;var ke=xe;var Ae=xe;var ze=ve,_e=function(e){var t=this.__data__,r=He(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ee.call(t,r,1),--this.size,!0)},Ce=function(e){var t=this.__data__,r=we(t,e);return r<0?void 0:t[r][1]},Oe=function(e){return ke(this.__data__,e)>-1},Te=function(e,t){var r=this.__data__,n=Ae(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}je.prototype.clear=ze,je.prototype.delete=_e,je.prototype.get=Ce,je.prototype.has=Oe,je.prototype.set=Te;var Ne=je,Ie=oe(F,"Map"),We=$e,Pe=Ne,Le=Ie;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Ve;var Ge=Ve;var Me=Ve;var Ue=Ve;var Ye=function(){this.size=0,this.__data__={hash:new We,map:new(Le||Pe),string:new We}},Ze=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ge(this,e).get(e)},Je=function(e){return Me(this,e).has(e)},Ke=function(e,t){var r=Ue(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qe.prototype.clear=Ye,Qe.prototype.delete=Ze,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(tt.Cache||et),r}tt.Cache=et;var rt=tt;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,ot=function(e){var t=rt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,r,n,a){t.push(n?a.replace(at,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},lt=p,ct=_,dt=y?y.prototype:void 0,st=dt?dt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(lt(t))return it(t,e)+"";if(ct(t))return st?st.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ht=gt;var ut=p,pt=N,ft=ot,mt=function(e){return null==e?"":ht(e)};var Ft=_;var yt=function(e,t){return ut(e)?e:pt(e,t)?[e]:ft(mt(e))},Bt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[Bt(t[r++])];return r&&r==n?e:void 0};var St=function(e,t,r){var n=null==e?void 0:bt(e,t);return void 0===n?r:n};const $t=(e,t,r)=>t?St(r,t)||St(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const r=t.theme,n=vt(xt,r[Dt.colorScheme]);return r.options&&r.options.color?$t(n,e,r.options.color):$t(n,e)},Et={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},wt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},kt=e=>Object.keys(wt).reduce(((t,r)=>{const n=wt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),At=kt("max-width"),zt=(kt("min-width"),c.div`
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
`,Ct=c.div`
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
`,Ot=c(Ct)`
    animation-delay: -0.45s;
`,Tt=c(Ct)`
    animation-delay: -0.3s;
`,jt=c(Ct)`
    animation-delay: -0.15s;
`,Nt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},It={collections:{base:{D1:{fontFamily:Nt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=vt(It,r[Dt.textStyleScheme]);return r.options&&r.options.textStyle?$t(n,e,r.options.textStyle):$t(n,e)},Pt={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},Lt=e=>{switch(e){case 700:case"bold":return Nt.Bold;case 600:case"semibold":return Nt.Semibold;case 300:case"light":return Nt.Light;case 400:case"regular":return Nt.Regular;default:return""}},Rt=(e,t)=>r=>{var n;const a=Pt[e].fontFamily(r),o=Pt[e].fontWeight(r);return Object.values(Nt).includes(a)?s`
                font-family: ${Lt(t)||Lt(o)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(n=Vt(t)||o)&&void 0!==n?n:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Gt=(e,t,r=!1)=>n=>{const a=Pt[e],o=a.fontSize(n);return s`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${s`
                margin-bottom: ${o*(r?1.05:0)}rem;
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
`,qt=r=>{var{external:n=!1,children:a}=r,o=h(r,["external","children"]);return e(Yt,Object.assign({},o,{children:[a,n&&t(Zt,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const Kt={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Qt=e=>t=>{var r;const n=t.theme,a=vt(Kt,n[Dt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?$t(a,e,n.options.designToken):$t(a,e)},er={InputBoxShadow:Qt("InputBoxShadow"),InputErrorBoxShadow:Qt("InputErrorBoxShadow"),ElevationBoxShadow:Qt("ElevationBoxShadow"),Table:{Header:Qt("Table.Header"),Cell:{Primary:Qt("Table.Cell.Primary"),Secondary:Qt("Table.Cell.Secondary"),Selected:Qt("Table.Cell.Selected"),Hover:Qt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Qt("Button.Danger.BackgroundColor"),Hover:Qt("Button.Danger.Hover"),Primary:Qt("Button.Danger.Primary"),Border:Qt("Button.Danger.Border")}}},tr=c.button`
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
                    background-color: ${Et.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?er.Button.Danger.Border:Et.Primary};

                    span {
                        color: ${e.$buttonIsDanger?er.Button.Danger.Primary:Et.Primary};
                    }
                `;case"light":return s`
                    background-color: ${Et.Neutral[8]};
                    border: 1px solid ${Et.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?er.Button.Danger.Primary:Et.Primary};
                    }
                `;case"disabled":return s`
                    background-color: ${Et.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Et.Neutral[3]};
                    }
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?er.Button.Danger.Primary:Et.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?er.Button.Danger.Hover:Et.Secondary};
                        }
                    }
                `;default:return s`
                    background-color: ${e.$buttonIsDanger?er.Button.Danger.BackgroundColor:Et.Primary};
                    border: 1px solid transparent;

                    ${At.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Et.Neutral[8]};
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

                    ${At.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    span {
                        ${Gt("H4","semibold")}
                    }

                    ${At.mobileS} {
                        height: auto;
                    }
                `}
`,rr=c((({color:r,className:n,size:a=18})=>e(zt,Object.assign({className:n,$size:a,$color:r},{children:[t(Ct,{id:"inner1",$size:a-2,$borderWidth:2}),t(Ot,{id:"inner2",$size:a-2,$borderWidth:2}),t(Tt,{id:"inner3",$size:a-2,$borderWidth:2}),t(jt,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?er.Button.Danger.Primary:Et.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Et.Neutral[3](e);break;default:t=Et.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,nr={Default:n.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,d=h(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(tr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(rr,Object.assign({},s)),t("span",{children:a})]}))})),Small:n.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,d=h(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(tr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(rr,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))},ar=c.button`
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
                background-color: ${Et.Neutral[7]};
            `}
    }
`,or=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:o="none",type:i="button"}=e,l=h(e,["children","focusHighlight","focusOutline","type"]);return t(ar,Object.assign({ref:r,$outline:o,$highlight:a,type:i},l,{children:n}))})),ir=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,lr=c.div`
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
                animation: ${ir} 0.3s;
            `}}
`,cr=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,dr=c(or)`
    padding: 0;
`,sr=c(a)`
    color: ${Et.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,gr=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,hr=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${At.mobileM} {
        margin: 0 0.5rem;
    }
`,ur=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,pr=c.div`
    max-width: 30%;
`,fr=c(nr.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Gt("XSmall","semibold")};
    }
`,mr=c(Ut.H6)`
    overflow-wrap: anywhere;
    ${At.mobileM} {
        ${Gt("XSmall","semibold")}
    }
`,Fr=c(Ut.XSmall)`
    overflow-wrap: anywhere;
`,yr=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,Br=s`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,br=c(i)`
    ${Br}
`,Sr=c(l)`
    ${Br}
`,$r=c(o)`
    ${Br}
`,vr="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",Dr="smart-app-banner";const xr=n.forwardRef((function(n,a){const{className:o,show:i,href:l,content:c,offset:d=0,icon:s=vr,animated:g=!1,onDismiss:h,onClick:u}=n,{title:p,message:f,buttonLabel:m,buttonAriaLabel:F,numberOfStars:y}=c,B=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==u||u()};return t(r,{children:i&&e(lr,Object.assign({ref:a,$isAnimated:g,$offset:d,className:o},{children:[t(cr,Object.assign({onClick:h,id:`${Dr}-dismiss`,"data-testid":`${Dr}-dismiss-container`},{children:t(dr,Object.assign({"aria-label":"Dismiss"},{children:t(sr,{})}))})),e(gr,Object.assign({onClick:B,id:`${Dr}-proceed`,"data-testid":`${Dr}-proceed-container`},{children:[t(ur,{src:s,alt:"lifesg-app-icon"}),e(hr,{children:[t(mr,{children:p}),t(Fr,{children:f}),(()=>{if(isNaN(y)||y<0)return;const e=[],r=y-Math.floor(y)>=.4;for(let r=0;r<Math.floor(y);r++)e.push(t(br,{},`star${r}`));if(r&&e.push(t(Sr,{},"halfstar")),e.length<5){const r=5-e.length;for(let n=0;n<r;n++)e.push(t($r,{},`emptystar${n}`))}return t(yr,{children:e.slice(0,5)})})()]}),t(pr,{children:t(fr,Object.assign({type:"button",onClick:B,"aria-label":F},{children:m}))})]}))]}))})}));export{xr as SmartAppBanner};
//# sourceMappingURL=index.js.map
