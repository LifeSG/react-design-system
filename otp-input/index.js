import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as a,useState as o,useEffect as l}from"react";import s,{keyframes as d,css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,F="object"==typeof self&&self&&self.Object===Object&&self,S=y||F||Function("return this")(),$=S.Symbol,b=$,v=Object.prototype,B=v.hasOwnProperty,D=v.toString,x=b?b.toStringTag:void 0;var w=function(e){var t=B.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var i=D.call(e);return r&&(t?e[x]=n:delete e[x]),i},H=Object.prototype.toString;var k=w,O=function(e){return H.call(e)},E=$?$.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?k(e):O(e)};var z=C,M=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==z(e)},T=m,W=A,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var L=function(e,t){if(T(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(I.test(e)||!_.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=C,N=P;var R,j=function(e){if(!N(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=S["__core-js_shared__"],J=(R=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var Z=function(e){return!!J&&J in e},X=Function.prototype.toString;var U=j,G=Z,q=P,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,ie=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!q(e)||G(e))&&(U(e)?ie:Q).test(K(e))},oe=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=oe(e,t);return ae(n)?n:void 0},se=le(Object,"create"),de=se;var ce=function(){this.__data__=de?de(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=se,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},pe=se,me=Object.prototype.hasOwnProperty;var ye=se;var Fe=ce,Se=ue,$e=ge,be=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=Fe,Be.prototype.delete=Se,Be.prototype.get=$e,Be.prototype.has=be,Be.prototype.set=ve;var De=Be;var xe=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(we(e[n][0],t))return n;return-1},ke=He,Oe=Array.prototype.splice;var Ee=He;var Ce=He;var ze=He;var Me=xe,Ae=function(e){var t=this.__data__,n=ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():Oe.call(t,n,1),--this.size,!0)},Te=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},We=function(e){return Ce(this.__data__,e)>-1},_e=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=Me,Ie.prototype.delete=Ae,Ie.prototype.get=Te,Ie.prototype.has=We,Ie.prototype.set=_e;var Le=Ie,Pe=le(S,"Map"),Ye=De,Ne=Le,Re=Pe;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Je=Ve;var Ze=Ve;var Xe=Ve;var Ue=Ve;var Ge=function(){this.size=0,this.__data__={hash:new Ye,map:new(Re||Ne),string:new Ye}},qe=function(e){var t=Je(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ze(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},et=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(rt.Cache||nt),n}rt.Cache=nt;var it=rt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,lt=function(e){var t=it(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},dt=m,ct=A,ut=$?$.prototype:void 0,ht=ut?ut.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(dt(t))return st(t,e)+"";if(ct(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},gt=ft;var pt=m,mt=L,yt=lt,Ft=function(e){return null==e?"":gt(e)};var St=A;var $t=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(Ft(e))},bt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var vt=function(e,t){for(var n=0,r=(t=$t(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var Bt=p((function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r}));const Dt=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,xt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},kt=e=>t=>{const n=t.theme,r=xt(Ht,n[wt.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Ot={Brand:{1:kt("Brand.1"),2:kt("Brand.2"),3:kt("Brand.3"),4:kt("Brand.4"),5:kt("Brand.5"),6:kt("Brand.6")},Primary:kt("Primary"),PrimaryDark:kt("PrimaryDark"),Secondary:kt("Secondary"),Accent:{Light:{1:kt("Accent.Light.1"),2:kt("Accent.Light.2"),3:kt("Accent.Light.3"),4:kt("Accent.Light.4"),5:kt("Accent.Light.5"),6:kt("Accent.Light.6")},Dark:{1:kt("Accent.Dark.1"),2:kt("Accent.Dark.2"),3:kt("Accent.Dark.3")}},Neutral:{1:kt("Neutral.1"),2:kt("Neutral.2"),3:kt("Neutral.3"),4:kt("Neutral.4"),5:kt("Neutral.5"),6:kt("Neutral.6"),7:kt("Neutral.7"),8:kt("Neutral.8")},Validation:{Green:{Text:kt("Validation.Green.Text"),Icon:kt("Validation.Green.Icon"),Border:kt("Validation.Green.Border"),Background:kt("Validation.Green.Background")},Orange:{Text:kt("Validation.Orange.Text"),Icon:kt("Validation.Orange.Icon"),Border:kt("Validation.Orange.Border"),Background:kt("Validation.Orange.Background"),Badge:kt("Validation.Orange.Badge")},Red:{Text:kt("Validation.Red.Text"),Icon:kt("Validation.Red.Icon"),Border:kt("Validation.Red.Border"),Background:kt("Validation.Red.Background")},Blue:{Text:kt("Validation.Blue.Text"),Icon:kt("Validation.Blue.Icon"),Border:kt("Validation.Blue.Border"),Background:kt("Validation.Blue.Background")}},Shadow:{Accent:kt("Shadow.Accent"),Red:kt("Shadow.Red"),Elevation:kt("Shadow.Elevation")}},Et={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(Et).reduce(((t,n)=>{const r=Et[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),zt=Ct("max-width"),Mt=(Ct("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),At=d`
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
    border-color: ${e=>e.$color||Ot.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${At} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Wt=s(Tt)`
    animation-delay: -0.45s;
`,_t=s(Tt)`
    animation-delay: -0.3s;
`,It=s(Tt)`
    animation-delay: -0.15s;
`,Lt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Pt={D1:{fontFamily:Lt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Yt={D1:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Lt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Lt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Lt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Nt={collections:{base:Pt,oneservice:{D1:{fontFamily:Lt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Lt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Lt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Lt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Lt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Lt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Lt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Lt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Lt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Lt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Lt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Lt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Yt},defaultValue:"base"},Rt=e=>t=>{const n=t.theme,r=xt(Nt,n[wt.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},jt={D1:{fontFamily:Rt("D1.fontFamily"),fontSize:Rt("D1.fontSize"),fontWeight:Rt("D1.fontWeight"),lineHeight:Rt("D1.lineHeight"),letterSpacing:Rt("D1.letterSpacing")},D2:{fontFamily:Rt("D2.fontFamily"),fontSize:Rt("D2.fontSize"),fontWeight:Rt("D2.fontWeight"),lineHeight:Rt("D2.lineHeight"),letterSpacing:Rt("D2.letterSpacing")},D3:{fontFamily:Rt("D3.fontFamily"),fontSize:Rt("D3.fontSize"),fontWeight:Rt("D3.fontWeight"),lineHeight:Rt("D3.lineHeight"),letterSpacing:Rt("D3.letterSpacing")},D4:{fontFamily:Rt("D4.fontFamily"),fontSize:Rt("D4.fontSize"),fontWeight:Rt("D4.fontWeight"),lineHeight:Rt("D4.lineHeight"),letterSpacing:Rt("D4.letterSpacing")},DBody:{fontFamily:Rt("DBody.fontFamily"),fontSize:Rt("DBody.fontSize"),fontWeight:Rt("DBody.fontWeight"),lineHeight:Rt("DBody.lineHeight"),letterSpacing:Rt("DBody.letterSpacing")},H1:{fontFamily:Rt("H1.fontFamily"),fontSize:Rt("H1.fontSize"),fontWeight:Rt("H1.fontWeight"),lineHeight:Rt("H1.lineHeight"),letterSpacing:Rt("H1.letterSpacing")},H2:{fontFamily:Rt("H2.fontFamily"),fontSize:Rt("H2.fontSize"),fontWeight:Rt("H2.fontWeight"),lineHeight:Rt("H2.lineHeight"),letterSpacing:Rt("H2.letterSpacing")},H3:{fontFamily:Rt("H3.fontFamily"),fontSize:Rt("H3.fontSize"),fontWeight:Rt("H3.fontWeight"),lineHeight:Rt("H3.lineHeight"),letterSpacing:Rt("H3.letterSpacing")},H4:{fontFamily:Rt("H4.fontFamily"),fontSize:Rt("H4.fontSize"),fontWeight:Rt("H4.fontWeight"),lineHeight:Rt("H4.lineHeight"),letterSpacing:Rt("H4.letterSpacing")},H5:{fontFamily:Rt("H5.fontFamily"),fontSize:Rt("H5.fontSize"),fontWeight:Rt("H5.fontWeight"),lineHeight:Rt("H5.lineHeight"),letterSpacing:Rt("H5.letterSpacing")},H6:{fontFamily:Rt("H6.fontFamily"),fontSize:Rt("H6.fontSize"),fontWeight:Rt("H6.fontWeight"),lineHeight:Rt("H6.lineHeight"),letterSpacing:Rt("H6.letterSpacing")},Body:{fontFamily:Rt("Body.fontFamily"),fontSize:Rt("Body.fontSize"),fontWeight:Rt("Body.fontWeight"),lineHeight:Rt("Body.lineHeight"),letterSpacing:Rt("Body.letterSpacing")},BodySmall:{fontFamily:Rt("BodySmall.fontFamily"),fontSize:Rt("BodySmall.fontSize"),fontWeight:Rt("BodySmall.fontWeight"),lineHeight:Rt("BodySmall.lineHeight"),letterSpacing:Rt("BodySmall.letterSpacing")},XSmall:{fontFamily:Rt("XSmall.fontFamily"),fontSize:Rt("XSmall.fontSize"),fontWeight:Rt("XSmall.fontWeight"),lineHeight:Rt("XSmall.lineHeight"),letterSpacing:Rt("XSmall.letterSpacing")}},Vt=[Lt.OpenSans,Lt.PlusJakartaSans],Jt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Zt=(e,t)=>n=>{var r;const i=jt[e].fontFamily(n),a=jt[e].fontWeight(n),o=Vt.find((e=>Object.values(e).includes(i)));return o?c`
                font-family: ${Jt(o,t)||Jt(o,a)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Xt(t)||a)&&void 0!==r?r:"normal"};
        `},Xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ut=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Gt=Zt,qt=(e,t,n=!1)=>r=>{const i=jt[e],a=i.fontSize(r);return c`
            ${Zt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Kt=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${Ut(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Ut(n)}
        `;var Qt;!function(e){e.D1=s.h1`
        ${e=>c`
                ${qt("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${qt("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${qt("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${qt("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${qt("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${qt("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${qt("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${qt("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${qt("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${qt("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${qt("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${qt("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${qt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${qt("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>nn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>nn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Qt||(Qt={}));const en=s.a`
    ${e=>c`
            ${qt(e.textStyle,e.weight)}
            color: ${Ot.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        `}
`,tn=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,nn=n=>{var{external:r=!1,children:i}=n,a=f(n,["external","children"]);return e(en,Object.assign({},a,{children:[i,r&&t(tn,{})]}))};var rn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(rn||(rn={}));const an={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},on=e=>t=>{var n;const r=t.theme,i=xt(an,r[wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Dt(i,e,r.options.designToken):Dt(i,e)},ln={InputBoxShadow:on("InputBoxShadow"),InputErrorBoxShadow:on("InputErrorBoxShadow"),ElevationBoxShadow:on("ElevationBoxShadow"),Table:{Header:on("Table.Header"),Cell:{Primary:on("Table.Cell.Primary"),Secondary:on("Table.Cell.Secondary"),Selected:on("Table.Cell.Selected"),Hover:on("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:on("Button.Danger.BackgroundColor"),Hover:on("Button.Danger.Hover"),Primary:on("Button.Danger.Primary"),Border:on("Button.Danger.Border")}}},sn=s.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ln.Button.Danger.Border:Ot.Primary};

                    color: ${e.$buttonIsDanger?ln.Button.Danger.Primary:Ot.Primary};
                `;case"light":return c`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid ${Ot.Neutral[5]};

                    color: ${e.$buttonIsDanger?ln.Button.Danger.Primary:Ot.Primary};
                `;case"disabled":return c`
                    background-color: ${Ot.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ot.Neutral[3]};
                `;case"link":return c`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ln.Button.Danger.Primary:Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ln.Button.Danger.Hover:Ot.Secondary};
                    }
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?ln.Button.Danger.BackgroundColor:Ot.Primary};
                    border: 1px solid transparent;

                    ${zt.mobileL} {
                        width: 100%;
                    }

                    color: ${Ot.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?c`
                    height: 2.5rem;
                    ${qt("H5","semibold")}

                    ${zt.mobileS} {
                        height: auto;
                    }
                `:c`
                    height: 3rem;
                    ${qt("H4","semibold")}

                    ${zt.mobileS} {
                        height: auto;
                    }
                `}
`,dn=s((({color:n,className:r,size:i=18})=>e(Mt,Object.assign({className:r,$size:i,$color:n},{children:[t(Tt,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(Wt,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(_t,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(It,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ln.Button.Danger.Primary:Ot.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return c`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cn={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,d=f(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(sn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(dn,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,d=f(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(sn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(dn,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},un=c`
    border: 1px solid ${Ot.Accent.Light[1]};
    box-shadow: ${ln.InputBoxShadow};
`,hn=c`
    border: 1px solid ${Ot.Accent.Light[1]};
    box-shadow: none;
`,fn=c`
    border: 1px solid ${Ot.Neutral[5]};
    box-shadow: none;
`,gn=c`
    border: 1px solid ${Ot.Validation.Red.Border};
    box-shadow: ${ln.InputErrorBoxShadow};
`,pn=s.div`
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};

    :focus-within {
        ${un}
    }
    ${e=>e.$focused&&un}

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${hn}
                }
                ${e.$focused&&hn}
            `:e.$disabled?c`
                background: ${Ot.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${fn}
                }
                ${e.$focused&&fn}
            `:e.$error?c`
                border: 1px solid ${Ot.Validation.Red.Border};

                :focus-within {
                    ${gn}
                }
                ${e.$focused&&gn}
            `:void 0}
`,mn=s(pn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;s.input`
    ${e=>qt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Ot.Neutral[1]};
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
        color: ${Ot.Neutral[3]};
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
        outline: 2px auto ${Ot.Primary};
    }
`;var yn={exports:{}};yn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],d=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=d("months"),n=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var d=o[s],c=u[d],h=c&&c[0],f=c&&c[1];o[s]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,s=i.parser,d=e.slice(r),c=a.exec(d)[0];s.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],d=!0===o[3],c=s||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!s&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,l=r.hours,s=r.minutes,d=r.seconds,c=r.milliseconds,u=r.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=l||0,F=s||0,S=d||0,$=c||0;return u?new Date(Date.UTC(p,m,g,y,F,S,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,S,$)):new Date(p,m,g,y,F,S,$)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Fn,Sn,$n=p(yn.exports),bn={exports:{}},vn=p(bn.exports=(Fn={year:0,month:1,day:2,hour:3,minute:4,second:5},Sn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Sn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Sn[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,d=l.value,c=Fn[s];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-l,!0);if(t){var d=s.utcOffset();s=s.add(i-d,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,l=i||t||r,s=a(+n(),l);if("string"!=typeof e)return n(e).tz(l);var d=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),s,l),c=d[0],u=d[1],h=n(c).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Bn={exports:{}};Bn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},F={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,d),a=n-i<0,o=t.clone().add(r+(a?-1:1),d);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:s,d:l,D:h,h:o,m:a,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},S="en",$={};$[S]=m;var b="$isDayjsObject",v=function(e){return e instanceof w||!(!e||!e[b])},B=function e(t,n,r){var i;if(!t)return S;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var l=t.name;$[l]=t,i=l}return!r&&i&&(S=i),i||!r&&S},D=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},x=F;x.l=B,x.i=v,x.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,c=x.p(e),f=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(c){case u:return r?f(1,0):f(31,11);case d:return r?f(1,m):f(0,m+1);case s:var S=this.$locale().weekStart||0,$=(p<S?p+7:p)-S;return f(r?y-$:y+(6-$),m);case l:case h:return g(F+"Hours",0);case o:return g(F+"Minutes",1);case a:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=x.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[l]=c+"Date",n[h]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[o]=c+"Hours",n[a]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===d||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var g=x.p(c),p=function(e){var t=D(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===d)return this.set(d,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return x.s(a%12||12,e,"0")},g=c||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,d,3);case"MMMM":return u(d,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=D(r),F=(y.utcOffset()-this.utcOffset())*t,S=this-y,$=function(){return x.m(p,y)};switch(m){case u:g=$()/12;break;case d:g=$();break;case c:g=$()/3;break;case s:g=(S-F)/6048e5;break;case l:g=(S-F)/864e5;break;case o:g=S/n;break;case a:g=S/t;break;case i:g=S/e;break;default:g=S}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=B(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return D.prototype=H,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",d],["$y",u],["$D",h]].forEach((function(e){H[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,w,D),e.$i=!0),D},D.locale=B,D.isDayjs=v,D.unix=function(e){return D(1e3*e)},D.en=$[S],D.Ls=$,D.p={},D}();var Dn=p(Bn.exports),xn={exports:{}};xn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(a,r):!this.isBefore(a,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(a,r):!this.isAfter(a,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var wn=p(xn.exports),Hn={exports:{}};Hn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var kn=p(Hn.exports),On={exports:{}};On.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var En,Cn=p(On.exports);Dn.extend(wn),Dn.extend(kn),Dn.extend(Cn),Dn.extend($n),Dn.extend(vn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Dn(t).startOf("week");return zn(n).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Mn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Dn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Dn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Dn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Dn(r):void 0,i?Dn(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(En||(En={}));const zn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Mn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},An=[1,3,5,7,8,10,12],Tn=[4,6,9,11];var Wn,_n,In,Ln;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":An.includes(a)?Math.min(i,31).toString():Tn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Dn(e,n);return Dn(t,n).diff(r,"minute")},e.toDayjs=e=>e?Dn(e):Dn(),e.addMinutesToTime=(e,t,n="HH:mm")=>Dn(e,n).add(t,"minutes").format(n)}(Wn||(Wn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Dn(e).isBefore(r,"day"))||!(!i||!Dn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Dn(e).isValid())return e}return""}}(_n||(_n={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(In||(In={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ln||(Ln={}));const Pn=s.input`
    ${qt("Body","regular")}
    color: ${Ot.Neutral[1]};

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
        color: ${Ot.Neutral[3]};
    }

    ${e=>"number"===e.type?c`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?c`
                cursor: not-allowed;
            `:void 0}
`,Yn=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,Nn=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Rn=s.div`
    display: flex;
    width: 100%;
`,jn=r.forwardRef(((r,o)=>{var{value:l,spacing:s,type:d,error:c,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:F="bordered"}=r,S=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=i();a(o,(()=>$.current),[]);const b=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),a=r.substring(0,n.selectionEnd),o=t(a),l=a.length-o.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}({ref:$,formatter:e=>Ln.transformWithSpaces(e,s)}),v=e=>{g&&(D()?x(e):g(e))},B=()=>{p&&p(),$&&$.current&&$.current.focus()},D=()=>"tel"===d&&s,x=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=l?(e=>e?D()?Ln.transformWithSpaces(e,s):e:"")(l):l,H=()=>e(n,{children:[t(Pn,Object.assign({"data-testid":"input",ref:$,disabled:u,value:w,onChange:v,type:d,readOnly:h},S)),m&&!u&&!h&&!!l&&t(Yn,Object.assign({onClick:B,type:"button"},{children:t(Nn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===F?t(Rn,Object.assign({className:y},{children:H()})):t(mn,Object.assign({$disabled:u,$error:c,$readOnly:h,className:y},{children:H()}))})})),Vn=s.div`
    display: flex;
    flex-direction: column;
`,Jn=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Zn=s(jn)`
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

    ${zt.mobileM} {
        padding: 0 0.5rem;
    }
`,Xn=s(cn.Small)`
    margin: 2rem 0rem;
`;s.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return c`
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

    ${e=>{let t="";return e.$show?t+=c`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=c`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=c`
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

    ${zt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Un=s.div`
    border-radius: 0.5rem;
    background: ${Ot.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Gn=s.button`
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

        ${({$highlight:e})=>e&&c`
                background-color: ${Ot.Neutral[7]};
            `}
    }
`,qn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t(Gn,Object.assign({ref:n,$outline:a,$highlight:i,type:o},l,{children:r}))})),Kn=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ot.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${zt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Qn=s(qn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Ot.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Ot.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${zt.mobileL} {
        right: 1.25rem;
    }
`,er=e=>{const{textSize:t}=e||{};return c`
        // Text styling
        ${t&&qt(t,"regular")}

        strong {
            font-family: ${Lt.OpenSans.Semibold};
            ${t&&qt(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Lt.OpenSans.Semibold};
            ${t&&qt(t,"semibold")}
            color: ${Ot.Primary};
            text-decoration: none;

            svg {
                color: ${Ot.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
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
`,s((e=>{var{children:n}=e,r=f(e,["children"]);const i=r["data-testid"]||"card";return t(Un,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Qt.Body,{children:n}):n}))}))`
    color: ${Ot.Neutral[1]};
    ${er({textSize:"BodySmall"})}

    ${zt.mobileL} {
        display: none;
    }
`,s((n=>{var{id:r="modal-box",children:i,onClose:a,showCloseButton:o=!0}=n,l=f(n,["id","children","onClose","showCloseButton"]);return e(Kn,Object.assign({"data-testid":r},l,{onClick:e=>{e.stopPropagation()}},{children:[o&&t(Qn,Object.assign({onClick:a,"data-testid":"close-button",focusHighlight:!1},{children:t(h,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,s.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ot.Neutral[1]};
    ${er({textSize:"BodySmall"})}
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
        color: ${Ot.Primary};
    }
`,s.div`
    display: inline;
    position: relative;
    width: fit-content;
`,s.label`
    ${qt("H5","semibold")}
    color: ${Ot.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${qt("H5","semibold")}
    }

    a {
        color: ${Ot.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Ot.Secondary};

            svg {
                color: ${Ot.Secondary};
            }
        }
    }
`;const tr=s(Qt.H6)`
    color: ${Ot.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(Qt.BodySmall)`
    && {
        color: ${Ot.Neutral[3]};
        ${Gt("BodySmall","regular")}
    }
`;const nr=e=>t(tr,Object.assign({weight:"semibold"},e)),rr=n=>{var{id:r,value:a=[],"data-testid":s,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=n,F=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const S=null!=u?u:{},{disabled:$,onClick:b,styleType:v="secondary"}=S,B=f(S,["disabled","onClick","styleType"]),D=i([]),x=i(p),[w,H]=o(new Array(g).fill("")),[k,O]=o(c),[E,C]=o(new Date);l((()=>{var e;return null===(e=null==D?void 0:D.current[0])||void 0===e||e.focus(),document.addEventListener("paste",A),()=>document.removeEventListener("paste",A)}),[]),l((()=>{if(0!==c){m&&m();const e=_();return()=>e()}}),[E]),l((()=>{x.current=p}),[p]),l((()=>{a.length===g&&H(a)}),[a]);const z=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(T(r)){const t=[...w];t[e]=r.substring(r.length-1),null===(n=D.current[e+1])||void 0===n||n.focus(),H(t),p&&p(t)}},M=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=D.current[e-1])||void 0===n||n.focus()),H(t),p&&p(t)}},A=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&T(t,g)?(H(n),x.current&&x.current(n)):e.preventDefault()},T=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),W=()=>{const e=Date.now(),t=1e3*c;return e<E.valueOf()+t},_=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((E.valueOf()+n-t)/1e3);O(r),r<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},I=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e(Vn,Object.assign({id:r,"data-testid":s,className:d},{children:[t(Jn,{children:w.map(((e,n)=>t(Zn,Object.assign({id:I(n,"otp-input",r),"data-testid":I(n,"otp-input",s),ref:e=>D.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:z(n),onKeyDown:M(n)},F),n)))}),h&&t(nr,{children:h}),t(Xn,Object.assign({styleType:v,type:"button"},B,{onClick:e=>{H(new Array(g).fill("")),W()||(C(new Date),O(c)),b&&b(e)},disabled:$||W()},{children:B.children?B.children:"Resend OTP"+(k?` in ${k} second${k>1?"s":""}`:"")}))]}))};export{rr as OtpInput};
//# sourceMappingURL=index.js.map
