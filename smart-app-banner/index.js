import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n from"react";import{CrossIcon as o}from"@lifesg/react-icons/cross";import{StarIcon as a}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as g}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";function h(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,B=p||m||Function("return this")(),y=B.Symbol,S=y,b=Object.prototype,D=b.hasOwnProperty,$=b.toString,v=S?S.toStringTag:void 0;var E=function(e){var t=D.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var o=$.call(e);return n&&(t?e[v]=r:delete e[v]),o},H=Object.prototype.toString;var x=E,w=function(e){return H.call(e)},A=y?y.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?x(e):w(e)};var k=C,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==k(e)},O=F,T=_,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var j=function(e,t){if(O(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!T(e))||(I.test(e)||!W.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=C,R=N;var L,V=function(e){if(!R(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=B["__core-js_shared__"],G=(L=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var M=function(e){return!!G&&G in e},U=Function.prototype.toString;var Y=V,Z=M,q=N,J=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,re=ee.hasOwnProperty,ne=RegExp("^"+te.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||Z(e))&&(Y(e)?ne:K).test(J(e))},ae=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=ae(e,t);return oe(r)?r:void 0},le=ie(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=le,he=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(se){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return he.call(t,e)?t[e]:void 0},fe=le,Fe=Object.prototype.hasOwnProperty;var pe=le;var me=de,Be=ge,ye=ue,Se=function(e){var t=this.__data__;return fe?void 0!==t[e]:Fe.call(t,e)},be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}De.prototype.clear=me,De.prototype.delete=Be,De.prototype.get=ye,De.prototype.has=Se,De.prototype.set=be;var $e=De;var ve=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var r=e.length;r--;)if(Ee(e[r][0],t))return r;return-1},xe=He,we=Array.prototype.splice;var Ae=He;var Ce=He;var ke=He;var ze=ve,_e=function(e){var t=this.__data__,r=xe(t,e);return!(r<0)&&(r==t.length-1?t.pop():we.call(t,r,1),--this.size,!0)},Oe=function(e){var t=this.__data__,r=Ae(t,e);return r<0?void 0:t[r][1]},Te=function(e){return Ce(this.__data__,e)>-1},We=function(e,t){var r=this.__data__,n=ke(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ie(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ie.prototype.clear=ze,Ie.prototype.delete=_e,Ie.prototype.get=Oe,Ie.prototype.has=Te,Ie.prototype.set=We;var je=Ie,Ne=ie(B,"Map"),Pe=$e,Re=je,Le=Ne;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var r=e.__data__;return Ve(t)?r["string"==typeof t?"string":"hash"]:r.map},Ge=Xe;var Me=Xe;var Ue=Xe;var Ye=Xe;var Ze=function(){this.size=0,this.__data__={hash:new Pe,map:new(Le||Re),string:new Pe}},qe=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Me(this,e).get(e)},Ke=function(e){return Ue(this,e).has(e)},Qe=function(e,t){var r=Ye(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}et.prototype.clear=Ze,et.prototype.delete=qe,et.prototype.get=Je,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(rt.Cache||tt),r}rt.Cache=tt;var nt=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,it=function(e){var t=nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,r,n,o){t.push(n?o.replace(at,"$1"):r||e)})),t}));var lt=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},ct=F,dt=_,gt=y?y.prototype:void 0,st=gt?gt.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return st?st.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ut=ht;var ft=F,Ft=j,pt=it,mt=function(e){return null==e?"":ut(e)};var Bt=_;var yt=function(e,t){return ft(e)?e:Ft(e,t)?[e]:pt(mt(e))},St=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var bt=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[St(t[r++])];return r&&r==n?e:void 0};var Dt=f((function(e,t,r){var n=null==e?void 0:bt(e,t);return void 0===n?r:n}));const $t=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const r=t.theme,n=vt(Ht,r[Et.colorScheme]);return r.options&&r.options.color?$t(n,e,r.options.color):$t(n,e)},wt={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}},At={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(At).reduce(((t,r)=>{const n=At[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),kt=Ct("max-width"),zt=(Ct("min-width"),c.div`
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
    border-color: ${e=>e.$color||wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${_t} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tt=c(Ot)`
    animation-delay: -0.45s;
`,Wt=c(Ot)`
    animation-delay: -0.3s;
`,It=c(Ot)`
    animation-delay: -0.15s;
`,jt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Nt={collections:{base:{D1:{fontFamily:jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:jt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:jt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:jt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:jt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:jt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:jt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:jt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Pt=e=>t=>{const r=t.theme,n=vt(Nt,r[Et.textStyleScheme]);return r.options&&r.options.textStyle?$t(n,e,r.options.textStyle):$t(n,e)},Rt={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Lt=e=>{switch(e){case 700:case"bold":return jt.Bold;case 600:case"semibold":return jt.Semibold;case 300:case"light":return jt.Light;case 400:case"regular":return jt.Regular;default:return""}},Vt=(e,t)=>r=>{var n;const o=Rt[e].fontFamily(r),a=Rt[e].fontWeight(r);return Object.values(jt).includes(o)?g`
                font-family: ${Lt(t)||Lt(a)||o};
                font-weight: normal !important;
            `:g`
            font-family: ${o};
            font-weight: ${null!==(n=Xt(t)||a)&&void 0!==n?n:"normal"};
        `},Xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Gt=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mt=(e,t,r=!1)=>n=>{const o=Rt[e],a=o.fontSize(n);return g`
            ${Vt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Ut=(e=!1,t=!1,r=void 0)=>t?g`
            display: block;
            ${Gt(r)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Gt(r)}
        `;var Yt;!function(e){e.D1=c.h1`
        ${e=>g`
                ${Mt("D1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>g`
                ${Mt("D2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>g`
                ${Mt("D3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>g`
                ${Mt("D4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>g`
                ${Mt("DBody",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>g`
                ${Mt("H1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>g`
                ${Mt("H2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>g`
                ${Mt("H3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>g`
                ${Mt("H4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>g`
                ${Mt("H5",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>g`
                ${Mt("H6",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>g`
                ${Mt("Body",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>g`
                ${Mt("BodySmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>g`
                ${Mt("XSmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Jt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Jt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Yt||(Yt={}));const Zt=c.a`
    ${e=>g`
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
`,qt=c(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Jt=r=>{var{external:n=!1,children:o}=r,a=h(r,["external","children"]);return e(Zt,Object.assign({},a,{children:[o,n&&t(qt,{})]}))};var Kt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kt||(Kt={}));const Qt={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${wt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${wt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${wt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${wt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},er=e=>t=>{var r;const n=t.theme,o=vt(Qt,n[Et.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?$t(o,e,n.options.designToken):$t(o,e)},tr={InputBoxShadow:er("InputBoxShadow"),InputErrorBoxShadow:er("InputErrorBoxShadow"),ElevationBoxShadow:er("ElevationBoxShadow"),Table:{Header:er("Table.Header"),Cell:{Primary:er("Table.Cell.Primary"),Secondary:er("Table.Cell.Secondary"),Selected:er("Table.Cell.Selected"),Hover:er("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:er("Button.Danger.BackgroundColor"),Hover:er("Button.Danger.Hover"),Primary:er("Button.Danger.Primary"),Border:er("Button.Danger.Border")}}},rr=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${wt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?tr.Button.Danger.Border:wt.Primary};

                    color: ${e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary};
                `;case"light":return g`
                    background-color: ${wt.Neutral[8]};
                    border: 1px solid ${wt.Neutral[5]};

                    color: ${e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary};
                `;case"disabled":return g`
                    background-color: ${wt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${wt.Neutral[3]};
                `;case"link":return g`
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
                        color: ${e.$buttonIsDanger?tr.Button.Danger.Hover:wt.Secondary};
                    }
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?tr.Button.Danger.BackgroundColor:wt.Primary};
                    border: 1px solid transparent;

                    ${kt.mobileL} {
                        width: 100%;
                    }

                    color: ${wt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    ${Mt("H5","semibold")}

                    ${kt.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    ${Mt("H4","semibold")}

                    ${kt.mobileS} {
                        height: auto;
                    }
                `}
`,nr=c((({color:r,className:n,size:o=18})=>e(zt,Object.assign({className:n,$size:o,$color:r},{children:[t(Ot,{id:"inner1",$size:o-2,$borderWidth:2,$color:r}),t(Tt,{id:"inner2",$size:o-2,$borderWidth:2,$color:r}),t(Wt,{id:"inner3",$size:o-2,$borderWidth:2,$color:r}),t(It,{id:"inner4",$size:o-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?tr.Button.Danger.Primary:wt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=wt.Neutral[3](e);break;default:t=wt.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,or={Default:n.forwardRef(((r,n)=>{const{children:o,disabled:a=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,d=h(r,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(rr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},g,d,{children:[i&&t(nr,Object.assign({},g)),t("span",{children:o})]}))})),Small:n.forwardRef(((r,n)=>{const{children:o,disabled:a=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,d=h(r,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(rr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},g,d,{children:[i&&t(nr,Object.assign({},g,{size:16})),t("span",{children:o})]}))}))},ar=c.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${wt.Neutral[7]};
            `}
    }
`,ir=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:a="none",type:i="button"}=e,l=h(e,["children","focusHighlight","focusOutline","type"]);return t(ar,Object.assign({ref:r,$outline:a,$highlight:o,type:i},l,{children:n}))})),lr=d`
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
    ${e=>{if(e.$isAnimated)return g`
                animation: ${lr} 0.3s;
            `}}
`,dr=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,gr=c(ir)`
    padding: 0;
`,sr=c(o)`
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
    ${kt.mobileM} {
        margin: 0 0.5rem;
    }
`,fr=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,Fr=c.div`
    max-width: 30%;
`,pr=c(or.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Mt("XSmall","semibold")};
    }
`,mr=c(Yt.H6)`
    overflow-wrap: anywhere;
    ${kt.mobileM} {
        ${Mt("XSmall","semibold")}
    }
`,Br=c(Yt.XSmall)`
    overflow-wrap: anywhere;
`,yr=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,Sr=g`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,br=c(i)`
    ${Sr}
`,Dr=c(l)`
    ${Sr}
`,$r=c(a)`
    ${Sr}
`,vr="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",Er="smart-app-banner";const Hr=n.forwardRef((function(n,o){const{className:a,show:i,href:l,content:c,offset:d=0,icon:g=vr,animated:s=!1,onDismiss:h,onClick:u}=n,{title:f,message:F,buttonLabel:p,buttonAriaLabel:m,numberOfStars:B}=c,y=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==u||u()};return t(r,{children:i&&e(cr,Object.assign({ref:o,$isAnimated:s,$offset:d,className:a},{children:[t(dr,Object.assign({onClick:h,id:`${Er}-dismiss`,"data-testid":`${Er}-dismiss-container`},{children:t(gr,Object.assign({"aria-label":"Dismiss"},{children:t(sr,{})}))})),e(hr,Object.assign({onClick:y,id:`${Er}-proceed`,"data-testid":`${Er}-proceed-container`},{children:[t(fr,{src:g,alt:"lifesg-app-icon"}),e(ur,{children:[t(mr,{children:f}),t(Br,{children:F}),(()=>{if(isNaN(B)||B<0)return;const e=[],r=B-Math.floor(B)>=.4;for(let r=0;r<Math.floor(B);r++)e.push(t(br,{},`star${r}`));if(r&&e.push(t(Dr,{},"halfstar")),e.length<5){const r=5-e.length;for(let n=0;n<r;n++)e.push(t($r,{},`emptystar${n}`))}return t(yr,{children:e.slice(0,5)})})()]}),t(Fr,{children:t(pr,Object.assign({type:"button",onClick:y,"aria-label":m},{children:p}))})]}))]}))})}));export{Hr as SmartAppBanner};
//# sourceMappingURL=index.js.map
