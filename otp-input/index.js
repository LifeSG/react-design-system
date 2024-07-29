import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{keyframes as c,css as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,F="object"==typeof self&&self&&self.Object===Object&&self,$=y||F||Function("return this")(),b=$.Symbol,v=b,S=Object.prototype,B=S.hasOwnProperty,D=S.toString,x=v?v.toStringTag:void 0;var w=function(e){var t=B.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var i=D.call(e);return r&&(t?e[x]=n:delete e[x]),i},E=Object.prototype.toString;var H=w,k=function(e){return E.call(e)},O=b?b.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?H(e):k(e)};var A=C,M=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==A(e)},T=m,_=z,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var Y=function(e,t){if(T(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(I.test(e)||!W.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=C,j=L;var P,R=function(e){if(!j(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=$["__core-js_shared__"],Z=(P=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var X=function(e){return!!Z&&Z in e},U=Function.prototype.toString;var G=R,J=X,q=L,K=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,ie=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||J(e))&&(G(e)?ie:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=ae(e,t);return oe(n)?n:void 0},se=le(Object,"create"),ce=se;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=se,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},pe=se,me=Object.prototype.hasOwnProperty;var ye=se;var Fe=de,$e=ue,be=ge,ve=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=Fe,Be.prototype.delete=$e,Be.prototype.get=be,Be.prototype.has=ve,Be.prototype.set=Se;var De=Be;var xe=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(we(e[n][0],t))return n;return-1},He=Ee,ke=Array.prototype.splice;var Oe=Ee;var Ce=Ee;var Ae=Ee;var Me=xe,ze=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():ke.call(t,n,1),--this.size,!0)},Te=function(e){var t=this.__data__,n=Oe(t,e);return n<0?void 0:t[n][1]},_e=function(e){return Ce(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=Me,Ie.prototype.delete=ze,Ie.prototype.get=Te,Ie.prototype.has=_e,Ie.prototype.set=We;var Ye=Ie,Le=le($,"Map"),Ne=De,je=Ye,Pe=Le;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Ze=Ve;var Xe=Ve;var Ue=Ve;var Ge=Ve;var Je=function(){this.size=0,this.__data__={hash:new Ne,map:new(Pe||je),string:new Ne}},qe=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Xe(this,e).get(e)},Qe=function(e){return Ue(this,e).has(e)},et=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Je,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(rt.Cache||nt),n}rt.Cache=nt;var it=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,lt=function(e){var t=it(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,r,i){t.push(r?i.replace(at,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ct=m,dt=z,ut=b?b.prototype:void 0,ht=ut?ut.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(ct(t))return st(t,e)+"";if(dt(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},gt=ft;var pt=m,mt=Y,yt=lt,Ft=function(e){return null==e?"":gt(e)};var $t=z;var bt=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(Ft(e))},vt=function(e){if("string"==typeof e||$t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var n=0,r=(t=bt(t,e)).length;null!=e&&n<r;)e=e[vt(t[n++])];return n&&n==r?e:void 0};var Bt=p((function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r}));const Dt=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,xt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=xt(Et,n[wt.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},kt={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},Ot={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(Ot).reduce(((t,n)=>{const r=Ot[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),At=Ct("max-width"),Mt=(Ct("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),zt=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Tt=s.div`
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
    animation: ${zt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_t=s(Tt)`
    animation-delay: -0.45s;
`,Wt=s(Tt)`
    animation-delay: -0.3s;
`,It=s(Tt)`
    animation-delay: -0.15s;
`,Yt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Lt={collections:{base:{D1:{fontFamily:Yt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Yt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Yt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Yt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Yt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Yt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Yt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Yt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Yt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Yt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Yt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Yt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Yt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Yt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Yt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Yt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Nt=e=>t=>{const n=t.theme,r=xt(Lt,n[wt.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},jt={D1:{fontFamily:Nt("D1.fontFamily"),fontSize:Nt("D1.fontSize"),fontWeight:Nt("D1.fontWeight"),lineHeight:Nt("D1.lineHeight"),letterSpacing:Nt("D1.letterSpacing")},D2:{fontFamily:Nt("D2.fontFamily"),fontSize:Nt("D2.fontSize"),fontWeight:Nt("D2.fontWeight"),lineHeight:Nt("D2.lineHeight"),letterSpacing:Nt("D2.letterSpacing")},D3:{fontFamily:Nt("D3.fontFamily"),fontSize:Nt("D3.fontSize"),fontWeight:Nt("D3.fontWeight"),lineHeight:Nt("D3.lineHeight"),letterSpacing:Nt("D3.letterSpacing")},D4:{fontFamily:Nt("D4.fontFamily"),fontSize:Nt("D4.fontSize"),fontWeight:Nt("D4.fontWeight"),lineHeight:Nt("D4.lineHeight"),letterSpacing:Nt("D4.letterSpacing")},DBody:{fontFamily:Nt("DBody.fontFamily"),fontSize:Nt("DBody.fontSize"),fontWeight:Nt("DBody.fontWeight"),lineHeight:Nt("DBody.lineHeight"),letterSpacing:Nt("DBody.letterSpacing")},H1:{fontFamily:Nt("H1.fontFamily"),fontSize:Nt("H1.fontSize"),fontWeight:Nt("H1.fontWeight"),lineHeight:Nt("H1.lineHeight"),letterSpacing:Nt("H1.letterSpacing")},H2:{fontFamily:Nt("H2.fontFamily"),fontSize:Nt("H2.fontSize"),fontWeight:Nt("H2.fontWeight"),lineHeight:Nt("H2.lineHeight"),letterSpacing:Nt("H2.letterSpacing")},H3:{fontFamily:Nt("H3.fontFamily"),fontSize:Nt("H3.fontSize"),fontWeight:Nt("H3.fontWeight"),lineHeight:Nt("H3.lineHeight"),letterSpacing:Nt("H3.letterSpacing")},H4:{fontFamily:Nt("H4.fontFamily"),fontSize:Nt("H4.fontSize"),fontWeight:Nt("H4.fontWeight"),lineHeight:Nt("H4.lineHeight"),letterSpacing:Nt("H4.letterSpacing")},H5:{fontFamily:Nt("H5.fontFamily"),fontSize:Nt("H5.fontSize"),fontWeight:Nt("H5.fontWeight"),lineHeight:Nt("H5.lineHeight"),letterSpacing:Nt("H5.letterSpacing")},H6:{fontFamily:Nt("H6.fontFamily"),fontSize:Nt("H6.fontSize"),fontWeight:Nt("H6.fontWeight"),lineHeight:Nt("H6.lineHeight"),letterSpacing:Nt("H6.letterSpacing")},Body:{fontFamily:Nt("Body.fontFamily"),fontSize:Nt("Body.fontSize"),fontWeight:Nt("Body.fontWeight"),lineHeight:Nt("Body.lineHeight"),letterSpacing:Nt("Body.letterSpacing")},BodySmall:{fontFamily:Nt("BodySmall.fontFamily"),fontSize:Nt("BodySmall.fontSize"),fontWeight:Nt("BodySmall.fontWeight"),lineHeight:Nt("BodySmall.lineHeight"),letterSpacing:Nt("BodySmall.letterSpacing")},XSmall:{fontFamily:Nt("XSmall.fontFamily"),fontSize:Nt("XSmall.fontSize"),fontWeight:Nt("XSmall.fontWeight"),lineHeight:Nt("XSmall.lineHeight"),letterSpacing:Nt("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Yt.Bold;case 600:case"semibold":return Yt.Semibold;case 300:case"light":return Yt.Light;case 400:case"regular":return Yt.Regular;default:return""}},Rt=(e,t)=>n=>{var r;const i=jt[e].fontFamily(n),o=jt[e].fontWeight(n);return Object.values(Yt).includes(i)?d`
                font-family: ${Pt(t)||Pt(o)||i};
                font-weight: normal !important;
            `:d`
            font-family: ${i};
            font-weight: ${null!==(r=Vt(t)||o)&&void 0!==r?r:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=e=>{if(e>0)return d`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Xt=Rt,Ut=(e,t,n=!1)=>r=>{const i=jt[e],o=i.fontSize(r);return d`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1,n=void 0)=>t?d`
            display: block;
            ${Zt(n)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${Zt(n)}
        `;var Jt;!function(e){e.D1=s.h1`
        ${e=>d`
                ${Ut("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>d`
                ${Ut("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>d`
                ${Ut("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>d`
                ${Ut("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>d`
                ${Ut("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>d`
                ${Ut("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>d`
                ${Ut("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>d`
                ${Ut("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>d`
                ${Ut("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>d`
                ${Ut("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>d`
                ${Ut("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>d`
                ${Ut("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>d`
                ${Ut("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>d`
                ${Ut("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Jt||(Jt={}));const qt=s.a`
    ${e=>d`
            ${Ut(e.textStyle,e.weight)}
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
`,Kt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qt=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return e(qt,Object.assign({},o,{children:[i,r&&t(Kt,{})]}))};var en;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(en||(en={}));const tn={collections:{base:{InputBoxShadow:d`
        inset 0 0 4px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 4px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:d`
        inset 0 0 3px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 3px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},nn=e=>t=>{var n;const r=t.theme,i=xt(tn,r[wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Dt(i,e,r.options.designToken):Dt(i,e)},rn={InputBoxShadow:nn("InputBoxShadow"),InputErrorBoxShadow:nn("InputErrorBoxShadow"),ElevationBoxShadow:nn("ElevationBoxShadow"),Table:{Header:nn("Table.Header"),Cell:{Primary:nn("Table.Cell.Primary"),Secondary:nn("Table.Cell.Secondary"),Selected:nn("Table.Cell.Selected"),Hover:nn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:nn("Button.Danger.BackgroundColor"),Hover:nn("Button.Danger.Hover"),Primary:nn("Button.Danger.Primary"),Border:nn("Button.Danger.Border")}}},on=s.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return d`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?rn.Button.Danger.Border:kt.Primary};

                    color: ${e.$buttonIsDanger?rn.Button.Danger.Primary:kt.Primary};
                `;case"light":return d`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid ${kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?rn.Button.Danger.Primary:kt.Primary};
                `;case"disabled":return d`
                    background-color: ${kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${kt.Neutral[3]};
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?rn.Button.Danger.Primary:kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?rn.Button.Danger.Hover:kt.Secondary};
                    }
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?rn.Button.Danger.BackgroundColor:kt.Primary};
                    border: 1px solid transparent;

                    ${At.mobileL} {
                        width: 100%;
                    }

                    color: ${kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    ${Ut("H5","semibold")}

                    ${At.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    ${Ut("H4","semibold")}

                    ${At.mobileS} {
                        height: auto;
                    }
                `}
`,an=s((({color:n,className:r,size:i=18})=>e(Mt,Object.assign({className:r,$size:i,$color:n},{children:[t(Tt,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(_t,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(Wt,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(It,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?rn.Button.Danger.Primary:kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=kt.Neutral[3](e);break;default:t=kt.Neutral[8](e)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ln={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=f(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(on,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&t(an,Object.assign({},d)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=f(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(on,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&t(an,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},sn=d`
    border: 1px solid ${kt.Accent.Light[1]};
    box-shadow: ${rn.InputBoxShadow};
`,cn=d`
    border: 1px solid ${kt.Accent.Light[1]};
    box-shadow: none;
`,dn=d`
    border: 1px solid ${kt.Neutral[5]};
    box-shadow: none;
`,un=d`
    border: 1px solid ${kt.Validation.Red.Border};
    box-shadow: ${rn.InputErrorBoxShadow};
`,hn=s.div`
    border: 1px solid ${kt.Neutral[5]};
    border-radius: 4px;
    background: ${kt.Neutral[8]};

    :focus-within {
        ${sn}
    }
    ${e=>e.$focused&&sn}

    ${e=>e.$readOnly?d`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${cn}
                }
                ${e.$focused&&cn}
            `:e.$disabled?d`
                background: ${kt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${dn}
                }
                ${e.$focused&&dn}
            `:e.$error?d`
                border: 1px solid ${kt.Validation.Red.Border};

                :focus-within {
                    ${un}
                }
                ${e.$focused&&un}
            `:void 0}
`,fn=s(hn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;s.input`
    ${e=>Ut("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${kt.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${kt.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,s.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${kt.Primary};
    }
`;var gn={exports:{}};gn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],d=u[c],h=d&&d[0],f=d&&d[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(r),d=o.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],d=s||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!s&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,F=s||0,$=c||0,b=d||0;return u?new Date(Date.UTC(p,m,g,y,F,$,b+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,$,b)):new Date(p,m,g,y,F,$,b)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){a[1]=l[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var pn,mn,yn=p(gn.exports),Fn={exports:{}},$n=p(Fn.exports=(pn={year:0,month:1,day:2,hour:3,minute:4,second:5},mn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=mn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),mn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,d=pn[s];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,l=i||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),bn={exports:{}};bn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},F={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",b={};b[$]=m;var v="$isDayjsObject",S=function(e){return e instanceof w||!(!e||!e[v])},B=function e(t,n,r){var i;if(!t)return $;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),n&&(b[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,i=l}return!r&&i&&($=i),i||!r&&$},D=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},x=F;x.l=B,x.i=S,x.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,d=x.p(e),f=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var $=this.$locale().weekStart||0,b=(p<$?p+7:p)-$;return f(r?y-b:y+(6-b),m);case l:case h:return g(F+"Hours",0);case a:return g(F+"Minutes",1);case o:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=x.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=x.p(d),p=function(e){var t=D(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return x.s(o%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(o);case"HH":return x.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=D(r),F=(y.utcOffset()-this.utcOffset())*t,$=this-y,b=function(){return x.m(p,y)};switch(m){case u:g=b()/12;break;case c:g=b();break;case d:g=b()/3;break;case s:g=($-F)/6048e5;break;case l:g=($-F)/864e5;break;case a:g=$/n;break;case o:g=$/t;break;case i:g=$/e;break;default:g=$}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=B(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),E=w.prototype;return D.prototype=E,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,w,D),e.$i=!0),D},D.locale=B,D.isDayjs=S,D.unix=function(e){return D(1e3*e)},D.en=b[$],D.Ls=b,D.p={},D}();var vn=p(bn.exports),Sn={exports:{}};Sn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var Bn=p(Sn.exports),Dn={exports:{}};Dn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var xn=p(Dn.exports),wn={exports:{}};wn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var En,Hn=p(wn.exports);vn.extend(Bn),vn.extend(xn),vn.extend(Hn),vn.extend(yn),vn.extend($n),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=vn(t).startOf("week");return kn(n).map((e=>On(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return On(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(vn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+vn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=vn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?vn(r):void 0,i?vn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(En||(En={}));const kn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},On=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Cn=[1,3,5,7,8,10,12],An=[4,6,9,11];var Mn,zn,Tn,_n;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Cn.includes(o)?Math.min(i,31).toString():An.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=vn(e,n);return vn(t,n).diff(r,"minute")},e.toDayjs=e=>e?vn(e):vn(),e.addMinutesToTime=(e,t,n="HH:mm")=>vn(e,n).add(t,"minutes").format(n)}(Mn||(Mn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!vn(e).isBefore(r,"day"))||!(!i||!vn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(vn(e).isValid())return e}return""}}(zn||(zn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Tn||(Tn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(_n||(_n={}));const Wn=s.input`
    ${Ut("Body","regular")}
    color: ${kt.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${kt.Neutral[3]};
    }

    ${e=>"number"===e.type?d`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?d`
                cursor: not-allowed;
            `:void 0}
`,In=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${kt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Yn=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ln=s.div`
    display: flex;
    width: 100%;
`,Nn=r.forwardRef(((r,a)=>{var{value:l,spacing:s,type:c,error:d,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:F="bordered"}=r,$=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=i();o(a,(()=>b.current),[]);const v=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}({ref:b,formatter:e=>_n.transformWithSpaces(e,s)}),S=e=>{g&&(D()?x(e):g(e))},B=()=>{p&&p(),b&&b.current&&b.current.focus()},D=()=>"tel"===c&&s,x=e=>{const{nextValue:t,updateCaretPosition:n}=v(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=l?(e=>e?D()?_n.transformWithSpaces(e,s):e:"")(l):l,E=()=>e(n,{children:[t(Wn,Object.assign({"data-testid":"input",ref:b,disabled:u,value:w,onChange:S,type:c,readOnly:h},$)),m&&!u&&!h&&!!l&&t(In,Object.assign({onClick:B,type:"button"},{children:t(Yn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===F?t(Ln,Object.assign({className:y},{children:E()})):t(fn,Object.assign({$disabled:u,$error:d,$readOnly:h,className:y},{children:E()}))})})),jn=s.div`
    display: flex;
    flex-direction: column;
`,Pn=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Rn=s(Nn)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }

    ${At.mobileM} {
        padding: 0 0.5rem;
    }
`,Vn=s(ln.Small)`
    margin: 2rem 0rem;
`;s.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return d`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,s.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=d`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=d`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=d`
                transition: none;
            `),t}}
`;s.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${At.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Zn=s.div`
    border-radius: 0.5rem;
    background: ${kt.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Xn=s.button`
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

        ${({$highlight:e})=>e&&d`
                background-color: ${kt.Neutral[7]};
            `}
    }
`,Un=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t(Xn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),Gn=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${kt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${At.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Jn=s(Un)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${kt.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${kt.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${At.mobileL} {
        right: 1.25rem;
    }
`,qn=e=>{const{textSize:t}=e||{};return d`
        // Text styling
        ${t&&Ut(t,"regular")}

        strong {
            font-family: ${Yt.Semibold};
            ${t&&Ut(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Yt.Semibold};
            ${t&&Ut(t,"semibold")}
            color: ${kt.Primary};
            text-decoration: none;

            svg {
                color: ${kt.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${kt.Secondary};

                svg {
                    color: ${kt.Secondary};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `};s.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,s((e=>{var{children:n}=e,r=f(e,["children"]);const i=r["data-testid"]||"card";return t(Zn,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Jt.Body,{children:n}):n}))}))`
    color: ${kt.Neutral[1]};
    ${qn({textSize:"BodySmall"})}

    ${At.mobileL} {
        display: none;
    }
`,s((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,l=f(n,["id","children","onClose","showCloseButton"]);return e(Gn,Object.assign({"data-testid":r},l,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Jn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(h,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,s.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${kt.Neutral[1]};
    ${qn({textSize:"BodySmall"})}
`,s.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,s.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${kt.Primary};
    }
`,s.div`
    display: inline;
    position: relative;
    width: fit-content;
`,s.label`
    ${Ut("H5","semibold")}
    color: ${kt.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Ut("H5","semibold")}
    }

    a {
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
    }
`;const Kn=s(Jt.H6)`
    color: ${kt.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(Jt.BodySmall)`
    && {
        color: ${kt.Neutral[3]};
        ${Xt("BodySmall","regular")}
    }
`;const Qn=e=>t(Kn,Object.assign({weight:"semibold"},e)),er=n=>{var{id:r,value:o=[],"data-testid":s,className:c,cooldownDuration:d,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=n,F=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const $=null!=u?u:{},{disabled:b,onClick:v,styleType:S="secondary"}=$,B=f($,["disabled","onClick","styleType"]),D=i([]),x=i(p),[w,E]=a(new Array(g).fill("")),[H,k]=a(d),[O,C]=a(new Date);l((()=>{var e;return null===(e=null==D?void 0:D.current[0])||void 0===e||e.focus(),document.addEventListener("paste",z),()=>document.removeEventListener("paste",z)}),[]),l((()=>{if(0!==d){m&&m();const e=W();return()=>e()}}),[O]),l((()=>{x.current=p}),[p]),l((()=>{o.length===g&&E(o)}),[o]);const A=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(T(r)){const t=[...w];t[e]=r.substring(r.length-1),null===(n=D.current[e+1])||void 0===n||n.focus(),E(t),p&&p(t)}},M=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=D.current[e-1])||void 0===n||n.focus()),E(t),p&&p(t)}},z=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&T(t,g)?(E(n),x.current&&x.current(n)):e.preventDefault()},T=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*d;return e<O.valueOf()+t},W=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*d,r=Math.ceil((O.valueOf()+n-t)/1e3);k(r),r<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},I=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e(jn,Object.assign({id:r,"data-testid":s,className:c},{children:[t(Pn,{children:w.map(((e,n)=>t(Rn,Object.assign({id:I(n,"otp-input",r),"data-testid":I(n,"otp-input",s),ref:e=>D.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:A(n),onKeyDown:M(n)},F),n)))}),h&&t(Qn,{children:h}),t(Vn,Object.assign({styleType:S,type:"button"},B,{onClick:e=>{E(new Array(g).fill("")),_()||(C(new Date),k(d)),v&&v(e)},disabled:b||_()},{children:B.children?B.children:"Resend OTP"+(H?` in ${H} second${H>1?"s":""}`:"")}))]}))};export{er as OtpInput};
//# sourceMappingURL=index.js.map
