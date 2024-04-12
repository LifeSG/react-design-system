import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{EyeIcon as r}from"@lifesg/react-icons/eye";import{EyeSlashIcon as o}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as i}from"@lifesg/react-icons/exclamation-triangle";import a,{keyframes as s,css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";import{ICircleFillIcon as u}from"@lifesg/react-icons/i-circle-fill";import*as d from"react";import f,{useLayoutEffect as p,useEffect as h,useState as m,useRef as g}from"react";import*as y from"react-dom";import v,{createPortal as b}from"react-dom";import{CrossIcon as x}from"@lifesg/react-icons/cross";function w(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,D="object"==typeof S&&S&&S.Object===Object&&S,O="object"==typeof self&&self&&self.Object===Object&&self,E=D||O||Function("return this")(),B=E.Symbol,k=B,C=Object.prototype,A=C.hasOwnProperty,j=C.toString,M=k?k.toStringTag:void 0;var R=function(e){var t=A.call(e,M),n=e[M];try{e[M]=void 0;var r=!0}catch(e){}var o=j.call(e);return r&&(t?e[M]=n:delete e[M]),o},_=Object.prototype.toString;var T=R,H=function(e){return _.call(e)},L=B?B.toStringTag:void 0;var I=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?T(e):H(e)};var P=I,z=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==P(e)},W=F,Y=N,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/;var q=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Y(e))||(U.test(e)||!V.test(e)||null!=t&&e in Object(t))};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Q=I,X=Z;var G,J=function(e){if(!X(e))return!1;var t=Q(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=E["__core-js_shared__"],ee=(G=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=J,oe=te,ie=Z,ae=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=/^\[object .+?Constructor\]$/,le=Function.prototype,ce=Object.prototype,ue=le.toString,de=ce.hasOwnProperty,fe=RegExp("^"+ue.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e){return!(!ie(e)||oe(e))&&(re(e)?fe:se).test(ae(e))},he=function(e,t){return null==e?void 0:e[t]};var me=function(e,t){var n=he(e,t);return pe(n)?n:void 0},ge=me(Object,"create"),ye=ge;var ve=function(){this.__data__=ye?ye(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},xe=ge,we=Object.prototype.hasOwnProperty;var Se=function(e){var t=this.__data__;if(xe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return we.call(t,e)?t[e]:void 0},$e=ge,Fe=Object.prototype.hasOwnProperty;var De=ge;var Oe=ve,Ee=be,Be=Se,ke=function(e){var t=this.__data__;return $e?void 0!==t[e]:Fe.call(t,e)},Ce=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=De&&void 0===t?"__lodash_hash_undefined__":t,this};function Ae(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ae.prototype.clear=Oe,Ae.prototype.delete=Ee,Ae.prototype.get=Be,Ae.prototype.has=ke,Ae.prototype.set=Ce;var je=Ae;var Me=function(){this.__data__=[],this.size=0};var Re=function(e,t){return e===t||e!=e&&t!=t};var _e=function(e,t){for(var n=e.length;n--;)if(Re(e[n][0],t))return n;return-1},Te=_e,He=Array.prototype.splice;var Le=function(e){var t=this.__data__,n=Te(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},Ie=_e;var Pe=function(e){var t=this.__data__,n=Ie(t,e);return n<0?void 0:t[n][1]},ze=_e;var Ne=_e;var We=function(e,t){var n=this.__data__,r=Ne(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Ye=Me,Ve=Le,Ue=Pe,qe=function(e){return ze(this.__data__,e)>-1},Ze=We;function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Ye,Qe.prototype.delete=Ve,Qe.prototype.get=Ue,Qe.prototype.has=qe,Qe.prototype.set=Ze;var Xe=Qe,Ge=me(E,"Map"),Je=je,Ke=Xe,et=Ge;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var ot=nt;var it=nt;var at=nt;var st=function(){this.size=0,this.__data__={hash:new Je,map:new(et||Ke),string:new Je}},lt=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ct=function(e){return ot(this,e).get(e)},ut=function(e){return it(this,e).has(e)},dt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ft(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ft.prototype.clear=st,ft.prototype.delete=lt,ft.prototype.get=ct,ft.prototype.has=ut,ft.prototype.set=dt;var pt=ft;function ht(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(ht.Cache||pt),n}ht.Cache=pt;var mt=ht;var gt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/\\(\\)?/g,vt=function(e){var t=mt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(gt,(function(e,n,r,o){t.push(r?o.replace(yt,"$1"):n||e)})),t}));var bt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},xt=bt,wt=F,St=N,$t=B?B.prototype:void 0,Ft=$t?$t.toString:void 0;var Dt=function e(t){if("string"==typeof t)return t;if(wt(t))return xt(t,e)+"";if(St(t))return Ft?Ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Ot=Dt;var Et=F,Bt=q,kt=vt,Ct=function(e){return null==e?"":Ot(e)};var At=N;var jt=function(e,t){return Et(e)?e:Bt(e,t)?[e]:kt(Ct(e))},Mt=function(e){if("string"==typeof e||At(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Rt=function(e,t){for(var n=0,r=(t=jt(t,e)).length;null!=e&&n<r;)e=e[Mt(t[n++])];return n&&n==r?e:void 0},_t=Rt;var Tt=$((function(e,t,n){var r=null==e?void 0:_t(e,t);return void 0===r?n:r}));const Ht=(e,t,n)=>t?Tt(n,t)||Tt(e,t):n||e,Lt=(e,t)=>{const n=t||e.defaultValue;return Tt(e.collections,n)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=Lt(Pt,n[It.colorScheme]);return n.options&&n.options.color?Ht(r,e,n.options.color):Ht(r,e)},Nt={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")},Blue:{Text:zt("Validation.Blue.Text"),Icon:zt("Validation.Blue.Icon"),Border:zt("Validation.Blue.Border"),Background:zt("Validation.Blue.Background")}},Shadow:{Accent:zt("Shadow.Accent"),Red:zt("Shadow.Red"),Elevation:zt("Shadow.Elevation")}},Wt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Yt=e=>Object.keys(Wt).reduce(((t,n)=>{const r=Wt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Vt=Yt("max-width"),Ut=(Yt("min-width"),Wt),qt=a.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Zt=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Qt=a.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Nt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Zt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Xt=a(Qt)`
    animation-delay: -0.45s;
`,Gt=a(Qt)`
    animation-delay: -0.3s;
`,Jt=a(Qt)`
    animation-delay: -0.15s;
`,Kt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},en={collections:{base:{D1:{fontFamily:Kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},tn=e=>t=>{const n=t.theme,r=Lt(en,n[It.textStyleScheme]);return n.options&&n.options.textStyle?Ht(r,e,n.options.textStyle):Ht(r,e)},nn={D1:{fontFamily:tn("D1.fontFamily"),fontSize:tn("D1.fontSize"),fontWeight:tn("D1.fontWeight"),lineHeight:tn("D1.lineHeight"),letterSpacing:tn("D1.letterSpacing")},D2:{fontFamily:tn("D2.fontFamily"),fontSize:tn("D2.fontSize"),fontWeight:tn("D2.fontWeight"),lineHeight:tn("D2.lineHeight"),letterSpacing:tn("D2.letterSpacing")},D3:{fontFamily:tn("D3.fontFamily"),fontSize:tn("D3.fontSize"),fontWeight:tn("D3.fontWeight"),lineHeight:tn("D3.lineHeight"),letterSpacing:tn("D3.letterSpacing")},D4:{fontFamily:tn("D4.fontFamily"),fontSize:tn("D4.fontSize"),fontWeight:tn("D4.fontWeight"),lineHeight:tn("D4.lineHeight"),letterSpacing:tn("D4.letterSpacing")},DBody:{fontFamily:tn("DBody.fontFamily"),fontSize:tn("DBody.fontSize"),fontWeight:tn("DBody.fontWeight"),lineHeight:tn("DBody.lineHeight"),letterSpacing:tn("DBody.letterSpacing")},H1:{fontFamily:tn("H1.fontFamily"),fontSize:tn("H1.fontSize"),fontWeight:tn("H1.fontWeight"),lineHeight:tn("H1.lineHeight"),letterSpacing:tn("H1.letterSpacing")},H2:{fontFamily:tn("H2.fontFamily"),fontSize:tn("H2.fontSize"),fontWeight:tn("H2.fontWeight"),lineHeight:tn("H2.lineHeight"),letterSpacing:tn("H2.letterSpacing")},H3:{fontFamily:tn("H3.fontFamily"),fontSize:tn("H3.fontSize"),fontWeight:tn("H3.fontWeight"),lineHeight:tn("H3.lineHeight"),letterSpacing:tn("H3.letterSpacing")},H4:{fontFamily:tn("H4.fontFamily"),fontSize:tn("H4.fontSize"),fontWeight:tn("H4.fontWeight"),lineHeight:tn("H4.lineHeight"),letterSpacing:tn("H4.letterSpacing")},H5:{fontFamily:tn("H5.fontFamily"),fontSize:tn("H5.fontSize"),fontWeight:tn("H5.fontWeight"),lineHeight:tn("H5.lineHeight"),letterSpacing:tn("H5.letterSpacing")},H6:{fontFamily:tn("H6.fontFamily"),fontSize:tn("H6.fontSize"),fontWeight:tn("H6.fontWeight"),lineHeight:tn("H6.lineHeight"),letterSpacing:tn("H6.letterSpacing")},Body:{fontFamily:tn("Body.fontFamily"),fontSize:tn("Body.fontSize"),fontWeight:tn("Body.fontWeight"),lineHeight:tn("Body.lineHeight"),letterSpacing:tn("Body.letterSpacing")},BodySmall:{fontFamily:tn("BodySmall.fontFamily"),fontSize:tn("BodySmall.fontSize"),fontWeight:tn("BodySmall.fontWeight"),lineHeight:tn("BodySmall.lineHeight"),letterSpacing:tn("BodySmall.letterSpacing")},XSmall:{fontFamily:tn("XSmall.fontFamily"),fontSize:tn("XSmall.fontSize"),fontWeight:tn("XSmall.fontWeight"),lineHeight:tn("XSmall.lineHeight"),letterSpacing:tn("XSmall.letterSpacing")}},rn=e=>{switch(e){case 700:case"bold":return Kt.Bold;case 600:case"semibold":return Kt.Semibold;case 300:case"light":return Kt.Light;case 400:case"regular":return Kt.Regular;default:return""}},on=(e,t)=>n=>{var r;const o=nn[e].fontFamily(n),i=nn[e].fontWeight(n);return Object.values(Kt).includes(o)?l`
                font-family: ${rn(t)||rn(i)||o};
                font-weight: normal !important;
            `:l`
            font-family: ${o};
            font-weight: ${null!==(r=an(t)||i)&&void 0!==r?r:"normal"};
        `},an=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},sn=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ln=(e,t,n=!1)=>r=>{const o=nn[e],i=o.fontSize(r);return l`
            ${on(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},cn=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${sn(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${sn(n)}
        `;var un;!function(e){e.D1=a.h1`
        ${e=>l`
                ${ln("D1",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${ln("D2",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${ln("D3",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${ln("D4",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${ln("DBody",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${ln("H1",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${ln("H2",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${ln("H3",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${ln("H4",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${ln("H5",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${ln("H6",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${ln("Body",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${ln("BodySmall",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${ln("XSmall",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${cn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>pn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>pn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(un||(un={}));const dn=a.a`
    ${e=>l`
            ${ln(e.textStyle,e.weight)}
            color: ${Nt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Nt.Secondary};

                svg {
                    color: ${Nt.Secondary};
                }
            }
        `}
`,fn=a(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,pn=n=>{var{external:r=!1,children:o}=n,i=w(n,["external","children"]);return e(dn,Object.assign({},i,{children:[o,r&&t(fn,{})]}))};var hn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(hn||(hn={}));const mn=a.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return l`
                    grid-column: auto / span 4;
                `;case"full":return l`
                    grid-column: auto / span 8;
                `}}}

    ${Vt.tablet} {
        grid-column: auto / span 8;
    }

    ${Vt.mobileL} {
        grid-column: auto / span 4;
    }
`,gn=a.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Nt.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,yn=a.button`
    ${ln("Body","regular")}
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,vn=a.span`
    color: ${Nt.Neutral[3]};
`,bn=a((({color:n,className:r,size:o=18})=>e(qt,Object.assign({className:r,$size:o,$color:n},{children:[t(Qt,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Xt,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Gt,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Jt,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Nt.Neutral[3]} transparent transparent transparent;
    }
`,xn=a(i)`
    color: ${Nt.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,wn=a.span`
    color: ${Nt.Validation.Orange.Text};
`,Sn=a.span`
    ${ln("Body","semibold")}
    color: ${Nt.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`;function $n(e){return On(e)?(e.nodeName||"").toLowerCase():"#document"}function Fn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Dn(e){var t;return null==(t=(On(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function On(e){return e instanceof Node||e instanceof Fn(e).Node}function En(e){return e instanceof Element||e instanceof Fn(e).Element}function Bn(e){return e instanceof HTMLElement||e instanceof Fn(e).HTMLElement}function kn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Fn(e).ShadowRoot)}function Cn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=_n(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function An(e){return["table","td","th"].includes($n(e))}function jn(e){const t=Mn(),n=_n(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Mn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Rn(e){return["html","body","#document"].includes($n(e))}function _n(e){return Fn(e).getComputedStyle(e)}function Tn(e){return En(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Hn(e){if("html"===$n(e))return e;const t=e.assignedSlot||e.parentNode||kn(e)&&e.host||Dn(e);return kn(t)?t.host:t}function Ln(e){const t=Hn(e);return Rn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Bn(t)&&Cn(t)?t:Ln(t)}function In(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=Ln(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Fn(o);return i?t.concat(a,a.visualViewport||[],Cn(o)?o:[],a.frameElement&&n?In(a.frameElement):[]):t.concat(o,In(o,[],n))}const Pn=Math.min,zn=Math.max,Nn=Math.round,Wn=Math.floor,Yn=e=>({x:e,y:e}),Vn={left:"right",right:"left",bottom:"top",top:"bottom"},Un={start:"end",end:"start"};function qn(e,t,n){return zn(e,Pn(t,n))}function Zn(e,t){return"function"==typeof e?e(t):e}function Qn(e){return e.split("-")[0]}function Xn(e){return e.split("-")[1]}function Gn(e){return"x"===e?"y":"x"}function Jn(e){return"y"===e?"height":"width"}function Kn(e){return["top","bottom"].includes(Qn(e))?"y":"x"}function er(e){return Gn(Kn(e))}function tr(e){return e.replace(/start|end/g,(e=>Un[e]))}function nr(e){return e.replace(/left|right|bottom|top/g,(e=>Vn[e]))}function rr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function or(e,t,n){let{reference:r,floating:o}=e;const i=Kn(t),a=er(t),s=Jn(a),l=Qn(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let p;switch(l){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Xn(t)){case"start":p[a]-=f*(n&&c?-1:1);break;case"end":p[a]+=f*(n&&c?-1:1)}return p}async function ir(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Zn(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=s[f?"floating"===d?"reference":"floating":d],g=rr(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{...a.floating,x:r,y:o}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},x=rr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-x.top+h.top)/b.y,bottom:(x.bottom-g.bottom+h.bottom)/b.y,left:(g.left-x.left+h.left)/b.x,right:(x.right-g.right+h.right)/b.x}}const ar=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Qn(n),s=Xn(n),l="y"===Kn(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=Zn(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof h&&(p="end"===s?-1*h:h),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}};function sr(e){const t=_n(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Bn(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=Nn(n)!==i||Nn(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function lr(e){return En(e)?e:e.contextElement}function cr(e){const t=lr(e);if(!Bn(t))return Yn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=sr(t);let a=(i?Nn(n.width):n.width)/r,s=(i?Nn(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const ur=Yn(0);function dr(e){const t=Fn(e);return Mn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ur}function fr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=lr(e);let a=Yn(1);t&&(r?En(r)&&(a=cr(r)):a=cr(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Fn(e))&&t}(i,n,r)?dr(i):Yn(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Fn(i),t=r&&En(r)?Fn(r):r;let n=e.frameElement;for(;n&&r&&t!==e;){const e=cr(n),t=n.getBoundingClientRect(),r=_n(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=o,c+=i,n=Fn(n).frameElement}}return rr({width:u,height:d,x:l,y:c})}function pr(e){return fr(Dn(e)).left+Tn(e).scrollLeft}function hr(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Fn(e),r=Dn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=Mn();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Dn(e),n=Tn(e),r=e.ownerDocument.body,o=zn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=zn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+pr(e);const s=-n.scrollTop;return"rtl"===_n(r).direction&&(a+=zn(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(Dn(e));else if(En(t))r=function(e,t){const n=fr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Bn(e)?cr(e):Yn(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=dr(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return rr(r)}function mr(e,t){const n=Hn(e);return!(n===t||!En(n)||Rn(n))&&("fixed"===_n(n).position||mr(n,t))}function gr(e,t,n){const r=Bn(t),o=Dn(t),i="fixed"===n,a=fr(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=Yn(0);if(r||!r&&!i)if(("body"!==$n(t)||Cn(o))&&(s=Tn(t)),r){const e=fr(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=pr(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function yr(e,t){return Bn(e)&&"fixed"!==_n(e).position?t?t(e):e.offsetParent:null}function vr(e,t){const n=Fn(e);if(!Bn(e))return n;let r=yr(e,t);for(;r&&An(r)&&"static"===_n(r).position;)r=yr(r,t);return r&&("html"===$n(r)||"body"===$n(r)&&"static"===_n(r).position&&!jn(r))?n:r||function(e){let t=Hn(e);for(;Bn(t)&&!Rn(t);){if(jn(t))return t;t=Hn(t)}return null}(e)||n}const br={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Bn(n),i=Dn(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},s=Yn(1);const l=Yn(0);if((o||!o&&"fixed"!==r)&&(("body"!==$n(n)||Cn(i))&&(a=Tn(n)),Bn(n))){const e=fr(n);s=cr(n),l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+l.x,y:t.y*s.y-a.scrollTop*s.y+l.y}},getDocumentElement:Dn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=In(e,[],!1).filter((e=>En(e)&&"body"!==$n(e))),o=null;const i="fixed"===_n(e).position;let a=i?Hn(e):e;for(;En(a)&&!Rn(a);){const t=_n(a),n=jn(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Cn(a)&&!n&&mr(e,a))?r=r.filter((e=>e!==a)):o=t,a=Hn(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=hr(t,n,o);return e.top=zn(r.top,e.top),e.right=Pn(r.right,e.right),e.bottom=Pn(r.bottom,e.bottom),e.left=zn(r.left,e.left),e}),hr(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:vr,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||vr,i=this.getDimensions;return{reference:gr(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=sr(e);return{width:t,height:n}},getScale:cr,isElement:En,isRTL:function(e){return"rtl"===_n(e).direction}};function xr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=lr(e),u=o||i?[...c?In(c):[],...In(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=Dn(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const p={rootMargin:-Wn(u)+"px "+-Wn(o.clientWidth-(c+d))+"px "+-Wn(o.clientHeight-(u+f))+"px "+-Wn(c)+"px",threshold:zn(0,Pn(1,l))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(c,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{h&&h.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?fr(e):null;return l&&function t(){const r=fr(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),d&&d(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const wr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Zn(e,t),c={x:n,y:r},u=await ir(t,l),d=Kn(Qn(o)),f=Gn(d);let p=c[f],h=c[d];if(i){const e="y"===f?"bottom":"right";p=qn(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=qn(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Sr=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=Zn(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=Qn(o),v=Qn(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),x=f||(v||!m?[nr(s)]:function(e){const t=nr(e);return[tr(e),t,tr(t)]}(s));f||"none"===h||x.push(...function(e,t,n,r){const o=Xn(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Qn(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(tr)))),i}(s,m,h,b));const w=[s,...x],S=await ir(t,g),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(S[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Xn(e),o=er(e),i=Jn(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=nr(a)),[a,nr(a)]}(o,a,b);$.push(S[e[0]],S[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var D,O;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=w[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(O=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},$r=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=Zn(e,t),u={x:n,y:r},d=Kn(o),f=Gn(d);let p=u[f],h=u[d];const m=Zn(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(Qn(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[f]:p,[d]:h}}}},Fr=(e,t,n)=>{const r=new Map,o={platform:br,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=or(c,r,l),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p={...p,[i]:{...p[i],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=or(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var Dr="undefined"!=typeof document?p:h;function Or(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Or(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Or(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Er(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Br(e,t){const n=Er(e);return Math.round(t*n)/n}function kr(e){const t=d.useRef(e);return Dr((()=>{t.current=e})),t}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Cr=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Ar="undefined"==typeof Element,jr=Ar?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Mr=!Ar&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Rr=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},_r=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Rr(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{jr.call(a,Cr)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Rr(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Tr=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Hr=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Tr(e)?0:e.tabIndex},Lr=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ir=function(e){return"INPUT"===e.tagName},Pr=function(e){return function(e){return Ir(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Mr(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},zr=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Nr=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=jr.call(e,"details>summary:first-of-type")?e.parentElement:e;if(jr.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return zr(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=Mr(e);if(a&&!a.shadowRoot&&!0===r(a))return zr(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&Mr(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=Mr(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Wr=function(e,t){return!(t.disabled||Rr(t)||function(e){return Ir(e)&&"hidden"===e.type}(t)||Nr(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!jr.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Yr=function(e,t){return!(Pr(t)||Hr(t)<0||!Wr(e,t))},Vr=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ur=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=Hr(e);return n<0&&t&&!Tr(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(Lr).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},qr=function(e,t){var n;return n=(t=t||{}).getShadowRoot?_r([e],t.includeContainer,{filter:Yr.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Vr}):function(e,t,n){if(Rr(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Cr));return t&&jr.call(e,Cr)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Yr.bind(null,t)),Ur(n)};const Zr=d["useInsertionEffect".toString()]||(e=>e());var Qr="undefined"!=typeof document?p:h;function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}let Gr=!1,Jr=0;const Kr=()=>"floating-ui-"+Jr++;const eo=d["useId".toString()]||function(){const[e,t]=d.useState((()=>Gr?Kr():void 0));return Qr((()=>{null==e&&t(Kr())}),[]),d.useEffect((()=>{Gr||(Gr=!0)}),[]),e};const to=d.createContext(null),no=d.createContext(null);function ro(e){return"data-floating-ui-"+e}const oo=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function io(e,t){const n=qr(e,oo());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(o=e)?void 0:o.ownerDocument)||document));var o;return n.slice(r+1)[0]}function ao(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&kn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function so(e){qr(e,oo()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function lo(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const co={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function uo(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const fo=d.forwardRef((function(e,t){const[n,r]=d.useState();Qr((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",uo),()=>{document.removeEventListener("keydown",uo)})),[]);const o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[ro("focus-guard")]:"",style:co};return d.createElement("span",Xr({},e,o))})),po=d.createContext(null);function ho(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const i=function(e){let{id:t,root:n}=void 0===e?{}:e;const[r,o]=d.useState(null),i=eo(),a=mo(),s=d.useMemo((()=>({id:t,root:n,portalContext:a,uniqueId:i})),[t,n,a,i]),l=d.useRef();return Qr((()=>()=>{null==r||r.remove()}),[r,s]),Qr((()=>{if(l.current===s)return;l.current=s;const{id:e,root:t,portalContext:n,uniqueId:r}=s,i=e?document.getElementById(e):null,a=ro("portal");if(i){const e=document.createElement("div");e.id=r,e.setAttribute(a,""),i.appendChild(e),o(e)}else{let i=t||(null==n?void 0:n.portalNode);i&&!En(i)&&(i=i.current),i=i||document.body;let s=null;e&&(s=document.createElement("div"),s.id=e,i.appendChild(s));const l=document.createElement("div");l.id=r,l.setAttribute(a,""),i=s||i,i.appendChild(l),o(l)}}),[s]),r}({id:n,root:r}),[a,s]=d.useState(null),l=d.useRef(null),c=d.useRef(null),u=d.useRef(null),f=d.useRef(null),p=!!a&&!a.modal&&a.open&&o&&!(!r&&!i);return d.useEffect((()=>{if(i&&o&&(null==a||!a.modal))return i.addEventListener("focusin",e,!0),i.addEventListener("focusout",e,!0),()=>{i.removeEventListener("focusin",e,!0),i.removeEventListener("focusout",e,!0)};function e(e){if(i&&ao(e)){("focusin"===e.type?lo:so)(i)}}}),[i,o,null==a?void 0:a.modal]),d.createElement(po.Provider,{value:d.useMemo((()=>({preserveTabOrder:o,beforeOutsideRef:l,afterOutsideRef:c,beforeInsideRef:u,afterInsideRef:f,portalNode:i,setFocusManagerState:s})),[o,i])},p&&i&&d.createElement(fo,{"data-type":"outside",ref:l,onFocus:e=>{if(ao(e,i)){var t;null==(t=u.current)||t.focus()}else{const e=io(document.body,"prev")||(null==a?void 0:a.refs.domReference.current);null==e||e.focus()}}}),p&&i&&d.createElement("span",{"aria-owns":i.id,style:co}),i&&b(t,i),p&&i&&d.createElement(fo,{"data-type":"outside",ref:c,onFocus:e=>{if(ao(e,i)){var t;null==(t=f.current)||t.focus()}else{const t=io(document.body,"next")||(null==a?void 0:a.refs.domReference.current);null==t||t.focus(),(null==a?void 0:a.closeOnFocusOut)&&(null==a||a.onOpenChange(!1,e.nativeEvent))}}}))}const mo=()=>d.useContext(po);let go;function yo(e){var t;void 0===e&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e;if("production"!==process.env.NODE_ENV){var i;const t="Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";var a,s;if(null!=(i=e.elements)&&i.reference&&!En(e.elements.reference))if(null==(a=go)||!a.has(t))null==(s=go)||s.add(t),console.error(t)}const[l,c]=d.useState(null),u=(null==(t=e.elements)?void 0:t.reference)||l,f=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:l,open:c}=e,[u,f]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=d.useState(r);Or(p,r)||h(r);const[m,g]=d.useState(null),[v,b]=d.useState(null),x=d.useCallback((e=>{e!==F.current&&(F.current=e,g(e))}),[]),w=d.useCallback((e=>{e!==D.current&&(D.current=e,b(e))}),[]),S=i||m,$=a||v,F=d.useRef(null),D=d.useRef(null),O=d.useRef(u),E=null!=l,B=kr(l),k=kr(o),C=d.useCallback((()=>{if(!F.current||!D.current)return;const e={placement:t,strategy:n,middleware:p};k.current&&(e.platform=k.current),Fr(F.current,D.current,e).then((e=>{const t={...e,isPositioned:!0};A.current&&!Or(O.current,t)&&(O.current=t,y.flushSync((()=>{f(t)})))}))}),[p,t,n,k]);Dr((()=>{!1===c&&O.current.isPositioned&&(O.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[c]);const A=d.useRef(!1);Dr((()=>(A.current=!0,()=>{A.current=!1})),[]),Dr((()=>{if(S&&(F.current=S),$&&(D.current=$),S&&$){if(B.current)return B.current(S,$,C);C()}}),[S,$,C,B,E]);const j=d.useMemo((()=>({reference:F,floating:D,setReference:x,setFloating:w})),[x,w]),M=d.useMemo((()=>({reference:S,floating:$})),[S,$]),R=d.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Br(M.floating,u.x),r=Br(M.floating,u.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Er(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,M.floating,u.x,u.y]);return d.useMemo((()=>({...u,update:C,refs:j,elements:M,floatingStyles:R})),[u,C,j,M,R])}(e),p=d.useContext(no),h=null!=((null==(m=d.useContext(to))?void 0:m.id)||null);var m;const g=function(e){const t=d.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Zr((()=>{t.current=e})),d.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,n)=>{e&&(b.current.openEvent=t),x.emit("openchange",{open:e,event:t,reason:n,nested:h}),null==r||r(e,t,n)})),v=d.useRef(null),b=d.useRef({}),x=d.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}()))[0],w=eo(),S=d.useCallback((e=>{const t=En(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;f.refs.setReference(t)}),[f.refs]),$=d.useCallback((e=>{(En(e)||null===e)&&(v.current=e,c(e)),(En(f.refs.reference.current)||null===f.refs.reference.current||null!==e&&!En(e))&&f.refs.setReference(e)}),[f.refs]),F=d.useMemo((()=>({...f.refs,setReference:$,setPositionReference:S,domReference:v})),[f.refs,$,S]),D=d.useMemo((()=>({...f.elements,domReference:u})),[f.elements,u]),O=d.useMemo((()=>({...f,refs:F,elements:D,dataRef:b,nodeId:o,floatingId:w,events:x,open:n,onOpenChange:g})),[f,o,w,x,n,g,F,D]);return Qr((()=>{const e=null==p?void 0:p.nodesRef.current.find((e=>e.id===o));e&&(e.context=O)})),d.useMemo((()=>({...f,context:O,refs:F,elements:D})),[f,F,D,O])}"production"!==process.env.NODE_ENV&&(go=new Set);var vo,bo={exports:{}};vo=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,x(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new h("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return y(r,o,l,f,x(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,o,l+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,f,p){if(c=c||d,f=f||l,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case l:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var w=c,S=u,$=l,F=s,D=n,O=d,E=o,B=m,k=h,C=r,A=a,j=i,M=f,R=!1;function _(e){return x(e)===u}t.AsyncMode=w,t.ConcurrentMode=S,t.ContextConsumer=$,t.ContextProvider=F,t.Element=D,t.ForwardRef=O,t.Fragment=E,t.Lazy=B,t.Memo=k,t.Portal=C,t.Profiler=A,t.StrictMode=j,t.Suspense=M,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||x(e)===c},t.isConcurrentMode=_,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),s=(0,i.default)(a,n,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),h=d();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var xo=bo.exports=vo(f),wo={exports:{}};wo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],p=u&&u[1];a[l]=p?{regex:f,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var y=s||0,v=l||0,b=c||0,x=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,x+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,x)):new Date(m,g,h,y,v,b,x)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var So,$o,Fo=$(wo.exports),Do={exports:{}},Oo=$(Do.exports=(So={year:0,month:1,day:2,hour:3,minute:4,second:5},$o={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=$o[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$o[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=So[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Eo={exports:{}};Eo.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",x={};x[b]=g;var w=function(e){return e instanceof D},S=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),n&&(x[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},$=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=S,F.i=w,F.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return $(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<$(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),p=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case l:var b=this.$locale().weekStart||0,x=(m<b?m+7:m)-b;return p(r?y-x:y+(6-x),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case i:return h(v+"Seconds",2);case o:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=F.p(u),m=function(e){var t=$(p);return F.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,y=this.$d.getTime()+r*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},d=function(e){return F.s(i%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:F.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:o};return r.replace(m,(function(e,t){return t||h[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=F.p(f),g=$(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=F.m(this,g);return b=(h={},h[d]=b/12,h[c]=b,h[u]=b/3,h[l]=(v-y)/6048e5,h[s]=(v-y)/864e5,h[a]=v/n,h[i]=v/t,h[o]=v/e,h)[m]||v,p?b:F.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return $.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,D,$),e.$i=!0),$},$.locale=S,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[b],$.Ls=x,$.p={},$}();var Bo=$(Eo.exports),ko={exports:{}};ko.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Co=$(ko.exports),Ao={exports:{}};Ao.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var jo=$(Ao.exports),Mo={exports:{}};Mo.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ro,_o=$(Mo.exports);Bo.extend(Co),Bo.extend(jo),Bo.extend(_o),Bo.extend(Fo),Bo.extend(Oo),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Bo(t).startOf("week");return To(n).map((e=>Ho(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ho(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Bo(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bo(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bo(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Bo(r):void 0,o?Bo(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ro||(Ro={}));const To=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ho=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Lo=[1,3,5,7,8,10,12],Io=[4,6,9,11];var Po,zo,No,Wo;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Lo.includes(i)?Math.min(o,31).toString():Io.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Bo(e,n);return Bo(t,n).diff(r,"minute")},e.toDayjs=e=>e?Bo(e):Bo(),e.addMinutesToTime=(e,t,n="HH:mm")=>Bo(e,n).add(t,"minutes").format(n)}(Po||(Po={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Bo(e).isBefore(r,"day"))||!(!o||!Bo(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Bo(e).isValid())return e}return""}}(zo||(zo={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(No||(No={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Wo||(Wo={}));const Yo=a.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return l`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Vo=a.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=l`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=l`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=l`
                transition: none;
            `),t}}
`,Uo=({show:e=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:i,backgroundBlur:a=!0,disableTransition:s=!1,enableOverlayClick:l=!1,zIndex:c,id:u})=>{const[d,p]=m(null),[y,b]=m(),[x]=m((()=>No.generate())),w=g(),S=g(null),$=o&&f.cloneElement(o,{ref:S}),F=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root";h((()=>(B(),p(O()),()=>{j(),C().length<1&&k("remove")})),[]),h((()=>{if(e){const e=E();D(e),A();const t=setTimeout((()=>{k("add")}),200);return()=>clearTimeout(t)}{j();const e=setTimeout((()=>{C().length<1&&k("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{w.current=e,b(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>C().length>0,B=()=>{if(!document.getElementById(qo)){const e=document.createElement("style");e.id=qo;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Zo} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Zo}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},k=e=>{const t=document.body.classList.contains(Zo);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Zo):document.body.classList.add(Zo)},C=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},A=()=>{const e=C();document.body.dataset.lifesgDsOverlayOrder=[...e,x].join(",")},j=()=>{const e=C();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==x)).join(",")},M=e=>{var t;const n=null===(t=S.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&l&&(e.preventDefault(),r())};return d?v.createPortal(t(Yo,Object.assign({id:F,"data-testid":F,$show:e,zIndex:c,$stacked:y},{children:o&&t(Vo,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:i||(y?.5:.8),$backgroundBlur:a,$disableTransition:s,$enableOverlayClick:l,onClick:M},{children:$}))})),d):null},qo="lifesg-ds-overlay-stylesheet",Zo="lifesg-ds-overlay-open",Qo=a.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Vt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Xo=e=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:c,dismissKeyboardOnShow:u=!0}=e,d=w(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,p]=m(),[g,y]=m();h((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),h((()=>{var e,t;r&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;p(e)},b=()=>{const e=.01*window.visualViewport.height;p(e),y(window.visualViewport.offsetTop)};return t(Uo,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:c,id:n,rootId:s,zIndex:l},{children:t(Qo,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:f,offsetTop:g},d,{children:i}))}))},Go=a.div`
    border-radius: 0.5rem;
    background: ${Nt.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Jo=a.button`
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

        ${({$highlight:e})=>e&&l`
                background-color: ${Nt.Neutral[7]};
            `}
    }
`,Ko=f.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=w(e,["children","focusHighlight","focusOutline","type"]);return t(Jo,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),ei=a.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Nt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Vt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,ti=a(Ko)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Nt.Accent.Light[1]};
    }
`,ni=a(x)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Nt.Neutral[3]};
`,ri=(e,t)=>{const{textColor:n=Nt.Neutral[1]}=t||{};return l`
        // Text
        ${ln(e,"regular")}
        color: ${n};

        a,
        strong {
            ${ln(e,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            color: ${Nt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Nt.Secondary};

                svg {
                    color: ${Nt.Secondary};
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
    `},oi=a.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,ii=a((e=>{var{children:n}=e,r=w(e,["children"]);const o=r["data-testid"]||"card";return t(Go,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?t(un.Body,{children:n}):n}))}))`
    ${ri("BodySmall")}

    ${Vt.mobileL} {
        display: none;
    }
`,ai=a((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=w(n,["id","children","onClose","showCloseButton"]);return e(ei,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(ti,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(ni,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,si=a.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${ri("BodySmall")}
`,li=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=w(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=xo.useMediaQuery({maxWidth:Wt.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?t(un.BodySmall,{children:o}):o;return e(n,{children:[i&&t(oi,Object.assign({"data-testid":l},s,{children:t(ii,{children:d()})})),c&&t(Xo,Object.assign({show:i,onOverlayClick:u},{children:t(ai,Object.assign({onClose:u},{children:t(si,{children:d()})}))}))]})},ci=a.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ui=r=>{var{children:o,popoverContent:i,trigger:a="click",position:s="top",zIndex:l,rootNode:c,onPopoverAppear:u,onPopoverDismiss:d}=r,f=w(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[p,y]=m(!1),v=g(),b=xo.useMediaQuery({maxWidth:Ut.mobileL}),{refs:x,floatingStyles:S}=yo({open:p,placement:s,whileElementsMounted:xr,middleware:[ar(16),Sr(),wr({limiter:$r()})]});h((()=>{if(!b&&p)return document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}}),[p]);const $=e=>{v&&!v.current.contains(e.target)&&(y(!1),d&&d())},F=()=>{y(!1)};return e(n,{children:[p&&t(ho,Object.assign({root:c},{children:t("div",Object.assign({ref:x.setFloating,style:Object.assign(Object.assign({},S),{zIndex:l})},{children:"function"==typeof i?i():t(li,Object.assign({visible:!0,onMobileClose:F},{children:i}))}))})),t(ci,Object.assign({ref:e=>{v.current=e,x.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||b)&&(y(!p),!p&&u&&u(),p&&d&&d())},onMouseEnter:()=>{"hover"!==a||b||y(!0)},onMouseLeave:()=>{"hover"===a&&p&&!b&&y(!1)}},f,{children:o}))]})},di=a.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Nt.Primary};
    }
`,fi=a.div`
    display: inline;
    position: relative;
    width: fit-content;
`,pi=({addon:e,rootNode:n})=>{const{content:r,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=e;return t(ui,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:t(fi,{children:t(di,{children:i||t(u,{id:`${o}-icon`})})})}))},hi=a.label`
    ${ln("H5","semibold")}
    color: ${Nt.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${ln("H5","semibold")}
    }

    a {
        color: ${Nt.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Nt.Secondary};

            svg {
                color: ${Nt.Secondary};
            }
        }
    }
`;a(un.H6)`
    color: ${Nt.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const mi=a(un.BodySmall)`
    color: ${Nt.Neutral[3]};
`,gi=n=>{var{children:r,addon:o,subtitle:i,"data-testid":a}=n,s=w(n,["children","addon","subtitle","data-testid"]);return e(hi,Object.assign({},s,{children:[r,o&&o.type&&("popover"===o.type?t(pi,{addon:o}):null),"string"==typeof i?t(mi,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},yi=({label:i,value:a,displayWidth:s="full",maskState:l,maskLoadingState:c,maskChar:u="•",maskRange:d,unmaskRange:f,maskRegex:p,disableMaskUnmask:g,maskTransformer:y,onMask:v,onUnmask:b,onTryAgain:x})=>{const[w,S]=m(l);h((()=>{S(l)}),[l]);const $=()=>{switch("fail"===c&&x&&x(),w){case"masked":b&&b(),S("unmasked");break;case"unmasked":v&&v(),S("masked")}},F=()=>"masked"===w?Wo.maskValue(a,{maskChar:u,maskRange:d,unmaskRange:f,maskRegex:p,maskTransformer:y}):a,D=()=>{switch(c){case"fail":return e(n,{children:[t(xn,{}),t(wn,{children:"Error"}),t(Sn,{children:"Try again?"})]});case"loading":return e(n,{children:[t(bn,{}),t(vn,{children:"Retrieving..."})]});default:return e(n,{children:[F(),t(gn,{children:"masked"===w?t(r,{"data-testid":"masked-icon"}):t(o,{"data-testid":"unmasked-icon"})})]})}};return e(mn,Object.assign({$widthStyle:s},{children:[t(gi,{children:i}),w?g?t(un.Body,{children:F()}):t(yn,Object.assign({"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===c,"aria-live":"polite"},{children:D()})):t(un.Body,{children:a})]}))},vi=a.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return l`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Vt.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Vt.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`,bi=f.forwardRef(((e,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=e,a=w(e,["mobileCols","tabletCols","desktopCols"]);return t(vi,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=xi(i||o||r),a=xi(e),s=xi(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),xi=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},wi=f.forwardRef(((e,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=e,s=w(e,["children","data-testid","type","stretch"]);return t(Si,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},s,{children:r}))})),Si=a.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?l`
                padding: 0 3rem;
            `:l`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Vt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Vt.tablet} {
        max-width: 720px;
    }
    ${Vt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return l`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Vt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Vt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return l`
                    display: flex;
                    flex-direction: column;
                `;default:return l`
                    display: flex;
                `}}}
`,$i=f.forwardRef(((e,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=e,a=w(e,["children","data-testid","stretch"]);return t(Fi,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Fi=a.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?l`
                ${Vt.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:l`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Di=f.forwardRef(((e,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:s=!1}=e,l=w(e,["children","data-testid","className","type","stretch"]);return t($i,Object.assign({ref:n,"data-testid":o,className:i,stretch:s},l,{children:t(wi,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),Oi=a({Section:$i,Container:wi,Content:Di,ColDiv:bi}.Content)`
    background: ${({$background:e})=>e?Nt.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Ei=a(un.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,Bi=a(un.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,ki=a.div`
    grid-column: span 8;
`,Ci=a.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Vt.tablet} {
        column-gap: 1.5rem;
    }

    ${Vt.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,Ai=Object.assign((r=>{var{items:o,title:i,description:a,topSection:s,bottomSection:l,children:c,background:u=!0,onMask:d,onUnmask:f,onTryAgain:p}=r,h=w(r,["items","title","description","topSection","bottomSection","children","background","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{d&&d(e)},g=e=>()=>{f&&f(e)},y=e=>()=>{p&&p(e)},v=()=>{if(o&&o.length>0){const e=o.map(((e,n)=>t(yi,Object.assign({},e,{onMask:m(e),onUnmask:g(e),onTryAgain:y(e)}),n)));return t(Ci,{children:e})}return null};return t(Oi,Object.assign({$background:u},h,{type:"grid"},{children:c||e(n,{children:[i&&t(Ei,Object.assign({weight:"semibold"},{children:i})),a&&t(Bi,{children:a}),s&&t(ki,Object.assign({"data-id":"top-section"},{children:s})),v(),l&&t(ki,Object.assign({"data-id":"bottom-section"},{children:l}))]})}))}),{ItemSection:Ci,Item:yi});export{Ai as UneditableSection};
//# sourceMappingURL=index.js.map
