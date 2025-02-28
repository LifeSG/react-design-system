import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r from"react";import{CrossIcon as a}from"@lifesg/react-icons/cross";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as s}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,F="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,S=F||m||Function("return this")(),B=S.Symbol,y=B,b=Object.prototype,D=b.hasOwnProperty,$=b.toString,v=y?y.toStringTag:void 0;var H=function(e){var t=D.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var a=$.call(e);return r&&(t?e[v]=n:delete e[v]),a},E=Object.prototype.toString;var x=H,k=function(e){return E.call(e)},w=B?B.toStringTag:void 0;var z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?x(e):k(e)};var O=z,A=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==O(e)},_=p,P=C,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var I=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!P(e))||(T.test(e)||!W.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=z,R=j;var L,V=function(e){if(!R(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=S["__core-js_shared__"],X=(L=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var G=function(e){return!!X&&X in e},M=Function.prototype.toString;var U=V,Y=G,Z=j,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!Z(e)||Y(e))&&(U(e)?re:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=oe(e,t);return ae(n)?n:void 0},le=ie(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=le,he=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},fe=le,pe=Object.prototype.hasOwnProperty;var Fe=le;var me=de,Se=se,Be=ue,ye=function(e){var t=this.__data__;return fe?void 0!==t[e]:pe.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=me,De.prototype.delete=Se,De.prototype.get=Be,De.prototype.has=ye,De.prototype.set=be;var $e=De;var ve=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},xe=Ee,ke=Array.prototype.splice;var we=Ee;var ze=Ee;var Oe=Ee;var Ae=ve,Ce=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():ke.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=we(t,e);return n<0?void 0:t[n][1]},Pe=function(e){return ze(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,r=Oe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ae,Te.prototype.delete=Ce,Te.prototype.get=_e,Te.prototype.has=Pe,Te.prototype.set=We;var Ie=Te,je=ie(S,"Map"),Ne=$e,Re=Ie,Le=je;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},Xe=Je;var Ge=Je;var Me=Je;var Ue=Je;var Ye=function(){this.size=0,this.__data__={hash:new Ne,map:new(Le||Re),string:new Ne}},Ze=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ge(this,e).get(e)},Ke=function(e){return Me(this,e).has(e)},Qe=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ye,et.prototype.delete=Ze,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,n,r,a){t.push(r?a.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ct=p,dt=C,st=B?B.prototype:void 0,gt=st?st.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ut=ht;var ft=p,pt=I,Ft=it,mt=function(e){return null==e?"":ut(e)};var St=C;var Bt=function(e,t){return ft(e)?e:pt(e,t)?[e]:Ft(mt(e))},yt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var bt=function(e,t){for(var n=0,r=(t=Bt(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var Dt=f((function(e,t,n){var r=null==e?void 0:bt(e,t);return void 0===r?n:r}));const $t=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=vt(Et,n[Ht.colorScheme]);return n.options&&n.options.color?$t(r,e,n.options.color):$t(r,e)},kt={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}},wt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},zt=e=>Object.keys(wt).reduce(((t,n)=>{const r=wt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ot=zt("max-width"),At=(zt("min-width"),c.div`
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
`,_t=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ct} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Pt=c(_t)`
    animation-delay: -0.45s;
`,Wt=c(_t)`
    animation-delay: -0.3s;
`,Tt=c(_t)`
    animation-delay: -0.15s;
`,It={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},jt={D1:{fontFamily:It.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:It.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:It.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:It.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:It.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:It.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:It.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:It.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:It.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:It.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:It.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:It.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:It.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:It.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Nt={D1:{fontFamily:It.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:It.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:It.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:It.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:It.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:It.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:It.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:It.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:It.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:It.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:It.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:It.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:It.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:It.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Rt={collections:{base:jt,oneservice:{D1:{fontFamily:It.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:It.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:It.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:It.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:It.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:It.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:It.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:It.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:It.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:It.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:It.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:It.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:It.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:It.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Nt},defaultValue:"base"},Lt=e=>t=>{const n=t.theme,r=vt(Rt,n[Ht.textStyleScheme]);return n.options&&n.options.textStyle?$t(r,e,n.options.textStyle):$t(r,e)},Vt={D1:{fontFamily:Lt("D1.fontFamily"),fontSize:Lt("D1.fontSize"),fontWeight:Lt("D1.fontWeight"),lineHeight:Lt("D1.lineHeight"),letterSpacing:Lt("D1.letterSpacing")},D2:{fontFamily:Lt("D2.fontFamily"),fontSize:Lt("D2.fontSize"),fontWeight:Lt("D2.fontWeight"),lineHeight:Lt("D2.lineHeight"),letterSpacing:Lt("D2.letterSpacing")},D3:{fontFamily:Lt("D3.fontFamily"),fontSize:Lt("D3.fontSize"),fontWeight:Lt("D3.fontWeight"),lineHeight:Lt("D3.lineHeight"),letterSpacing:Lt("D3.letterSpacing")},D4:{fontFamily:Lt("D4.fontFamily"),fontSize:Lt("D4.fontSize"),fontWeight:Lt("D4.fontWeight"),lineHeight:Lt("D4.lineHeight"),letterSpacing:Lt("D4.letterSpacing")},DBody:{fontFamily:Lt("DBody.fontFamily"),fontSize:Lt("DBody.fontSize"),fontWeight:Lt("DBody.fontWeight"),lineHeight:Lt("DBody.lineHeight"),letterSpacing:Lt("DBody.letterSpacing")},H1:{fontFamily:Lt("H1.fontFamily"),fontSize:Lt("H1.fontSize"),fontWeight:Lt("H1.fontWeight"),lineHeight:Lt("H1.lineHeight"),letterSpacing:Lt("H1.letterSpacing")},H2:{fontFamily:Lt("H2.fontFamily"),fontSize:Lt("H2.fontSize"),fontWeight:Lt("H2.fontWeight"),lineHeight:Lt("H2.lineHeight"),letterSpacing:Lt("H2.letterSpacing")},H3:{fontFamily:Lt("H3.fontFamily"),fontSize:Lt("H3.fontSize"),fontWeight:Lt("H3.fontWeight"),lineHeight:Lt("H3.lineHeight"),letterSpacing:Lt("H3.letterSpacing")},H4:{fontFamily:Lt("H4.fontFamily"),fontSize:Lt("H4.fontSize"),fontWeight:Lt("H4.fontWeight"),lineHeight:Lt("H4.lineHeight"),letterSpacing:Lt("H4.letterSpacing")},H5:{fontFamily:Lt("H5.fontFamily"),fontSize:Lt("H5.fontSize"),fontWeight:Lt("H5.fontWeight"),lineHeight:Lt("H5.lineHeight"),letterSpacing:Lt("H5.letterSpacing")},H6:{fontFamily:Lt("H6.fontFamily"),fontSize:Lt("H6.fontSize"),fontWeight:Lt("H6.fontWeight"),lineHeight:Lt("H6.lineHeight"),letterSpacing:Lt("H6.letterSpacing")},Body:{fontFamily:Lt("Body.fontFamily"),fontSize:Lt("Body.fontSize"),fontWeight:Lt("Body.fontWeight"),lineHeight:Lt("Body.lineHeight"),letterSpacing:Lt("Body.letterSpacing")},BodySmall:{fontFamily:Lt("BodySmall.fontFamily"),fontSize:Lt("BodySmall.fontSize"),fontWeight:Lt("BodySmall.fontWeight"),lineHeight:Lt("BodySmall.lineHeight"),letterSpacing:Lt("BodySmall.letterSpacing")},XSmall:{fontFamily:Lt("XSmall.fontFamily"),fontSize:Lt("XSmall.fontSize"),fontWeight:Lt("XSmall.fontWeight"),lineHeight:Lt("XSmall.lineHeight"),letterSpacing:Lt("XSmall.letterSpacing")}},Jt=[It.OpenSans,It.PlusJakartaSans],Xt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Gt=(e,t)=>n=>{var r;const a=Vt[e].fontFamily(n),o=Vt[e].fontWeight(n),i=Jt.find((e=>Object.values(e).includes(a)));return i?s`
                font-family: ${Xt(i,t)||Xt(i,o)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(r=Mt(t)||o)&&void 0!==r?r:"normal"};
        `},Mt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ut=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Yt=(e,t,n=!1)=>r=>{const a=Vt[e],o=a.fontSize(r);return s`
            ${Gt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Zt=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${Ut(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Ut(n)}
        `;var qt;!function(e){e.D1=c.h1`
        ${e=>s`
                ${Yt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${Yt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${Yt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${Yt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${Yt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${Yt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${Yt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${Yt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${Yt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${Yt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${Yt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${Yt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${Yt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${Yt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>en(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>en(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(qt||(qt={}));const Kt=c.a`
    ${e=>s`
            ${Yt(e.textStyle,e.weight)}
            color: ${kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt.Secondary};

                svg {
                    color: ${kt.Secondary};
                }
            }
        `}
`,Qt=c(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,en=n=>{var{external:r=!1,children:a}=n,o=h(n,["external","children"]);return e(Kt,Object.assign({},o,{children:[a,r&&t(Qt,{})]}))};var tn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(tn||(tn={}));const nn={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},rn=e=>t=>{var n;const r=t.theme,a=vt(nn,r[Ht.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?$t(a,e,r.options.designToken):$t(a,e)},an={InputBoxShadow:rn("InputBoxShadow"),InputErrorBoxShadow:rn("InputErrorBoxShadow"),ElevationBoxShadow:rn("ElevationBoxShadow"),Table:{Header:rn("Table.Header"),Cell:{Primary:rn("Table.Cell.Primary"),Secondary:rn("Table.Cell.Secondary"),Selected:rn("Table.Cell.Selected"),Hover:rn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:rn("Button.Danger.BackgroundColor"),Hover:rn("Button.Danger.Hover"),Primary:rn("Button.Danger.Primary"),Border:rn("Button.Danger.Border")}}},on=c.button`
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
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?an.Button.Danger.Border:kt.Primary};

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:kt.Primary};
                `;case"light":return s`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid ${kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:kt.Primary};
                `;case"disabled":return s`
                    background-color: ${kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${kt.Neutral[3]};
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?an.Button.Danger.Hover:kt.Secondary};
                    }
                `;default:return s`
                    background-color: ${e.$buttonIsDanger?an.Button.Danger.BackgroundColor:kt.Primary};
                    border: 1px solid transparent;

                    ${Ot.mobileL} {
                        width: 100%;
                    }

                    color: ${kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?s`
                    height: 2.5rem;
                    ${Yt("H5","semibold")}

                    ${Ot.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    ${Yt("H4","semibold")}

                    ${Ot.mobileS} {
                        height: auto;
                    }
                `}
`,ln=c((({color:n,className:r,size:a=18})=>e(At,Object.assign({className:r,$size:a,$color:n},{children:[t(_t,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(Pt,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(Wt,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(Tt,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?an.Button.Danger.Primary:kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=kt.Neutral[3](e);break;default:t=kt.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cn={Default:r.forwardRef(((n,r)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(on,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(ln,Object.assign({},s)),t("span",{children:a})]}))})),Small:r.forwardRef(((n,r)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(on,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(ln,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))},dn=c.button`
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
                background-color: ${kt.Neutral[7]};
            `}
    }
`,sn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:o="none",type:i="button"}=e,l=h(e,["children","focusHighlight","focusOutline","type"]);return t(dn,Object.assign({ref:n,$outline:o,$highlight:a,type:i},l,{children:r}))})),gn=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,hn=c.div`
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
    background: ${kt.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return s`
                animation: ${gn} 0.3s;
            `}}
`,un=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,fn=c(sn)`
    padding: 0;
`,pn=c(a)`
    color: ${kt.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,Fn=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,mn=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${Ot.mobileM} {
        margin: 0 0.5rem;
    }
`,Sn=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,Bn=c.div`
    max-width: 30%;
`,yn=c(cn.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Yt("XSmall","semibold")};
    }
`,bn=c(qt.H6)`
    overflow-wrap: anywhere;
    ${Ot.mobileM} {
        ${Yt("XSmall","semibold")}
    }
`,Dn=c(qt.XSmall)`
    overflow-wrap: anywhere;
`,$n=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,vn=s`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,Hn=c(i)`
    ${vn}
`,En=c(l)`
    ${vn}
`,xn=c(o)`
    ${vn}
`,kn="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",wn="smart-app-banner";const zn=r.forwardRef((function(r,a){const{className:o,show:i,href:l,content:c,offset:d=0,icon:s=kn,animated:g=!1,onDismiss:h,onClick:u}=r,{title:f,message:p,buttonLabel:F,buttonAriaLabel:m,numberOfStars:S}=c,B=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==u||u()};return t(n,{children:i&&e(hn,Object.assign({ref:a,$isAnimated:g,$offset:d,className:o},{children:[t(un,Object.assign({onClick:h,id:`${wn}-dismiss`,"data-testid":`${wn}-dismiss-container`},{children:t(fn,Object.assign({"aria-label":"Dismiss"},{children:t(pn,{})}))})),e(Fn,Object.assign({onClick:B,id:`${wn}-proceed`,"data-testid":`${wn}-proceed-container`},{children:[t(Sn,{src:s,alt:"lifesg-app-icon"}),e(mn,{children:[t(bn,{children:f}),t(Dn,{children:p}),(()=>{if(isNaN(S)||S<0)return;const e=[],n=S-Math.floor(S)>=.4;for(let n=0;n<Math.floor(S);n++)e.push(t(Hn,{},`star${n}`));if(n&&e.push(t(En,{},"halfstar")),e.length<5){const n=5-e.length;for(let r=0;r<n;r++)e.push(t(xn,{},`emptystar${r}`))}return t($n,{children:e.slice(0,5)})})()]}),t(Bn,{children:t(yn,Object.assign({type:"button",onClick:B,"aria-label":m},{children:F}))})]}))]}))})}));export{zn as SmartAppBanner};
//# sourceMappingURL=index.js.map
