import{jsxs as e,jsx as t}from"react/jsx-runtime";import r from"react";import n,{keyframes as o,css as a}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,u="object"==typeof c&&c&&c.Object===Object&&c,s="object"==typeof self&&self&&self.Object===Object&&self,h=u||s||Function("return this")(),F=h.Symbol,p=F,f=Object.prototype,B=f.hasOwnProperty,y=f.toString,m=p?p.toStringTag:void 0;var S=function(e){var t=B.call(e,m),r=e[m];try{e[m]=void 0;var n=!0}catch(e){}var o=y.call(e);return n&&(t?e[m]=r:delete e[m]),o},b=Object.prototype.toString;var D=S,$=function(e){return b.call(e)},v=F?F.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?D(e):$(e)};var x=E,H=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||H(e)&&"[object Symbol]"==x(e)},A=g,C=w,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var z=function(e,t){if(A(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!C(e))||(_.test(e)||!k.test(e)||null!=t&&e in Object(t))};var O=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=E,I=O;var W,j=function(e){if(!I(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=h["__core-js_shared__"],N=(W=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var L=function(e){return!!N&&N in e},R=Function.prototype.toString;var V=j,G=L,X=O,M=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,Z=Function.prototype,Y=Object.prototype,q=Z.toString,J=Y.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!X(e)||G(e))&&(V(e)?K:U).test(M(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var r=ee(e,t);return Q(r)?r:void 0},re=te(Object,"create"),ne=re;var oe=function(){this.__data__=ne?ne(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=re,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ie){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return le.call(t,e)?t[e]:void 0},de=re,ge=Object.prototype.hasOwnProperty;var ue=re;var se=oe,he=ae,Fe=ce,pe=function(e){var t=this.__data__;return de?void 0!==t[e]:ge.call(t,e)},fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=se,Be.prototype.delete=he,Be.prototype.get=Fe,Be.prototype.has=pe,Be.prototype.set=fe;var ye=Be;var me=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var r=e.length;r--;)if(Se(e[r][0],t))return r;return-1},De=be,$e=Array.prototype.splice;var ve=be;var Ee=be;var xe=be;var He=me,we=function(e){var t=this.__data__,r=De(t,e);return!(r<0)&&(r==t.length-1?t.pop():$e.call(t,r,1),--this.size,!0)},Ae=function(e){var t=this.__data__,r=ve(t,e);return r<0?void 0:t[r][1]},Ce=function(e){return Ee(this.__data__,e)>-1},ke=function(e,t){var r=this.__data__,n=xe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function _e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_e.prototype.clear=He,_e.prototype.delete=we,_e.prototype.get=Ae,_e.prototype.has=Ce,_e.prototype.set=ke;var ze=_e,Oe=te(h,"Map"),Te=ye,Ie=ze,We=Oe;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var r=e.__data__;return je(t)?r["string"==typeof t?"string":"hash"]:r.map},Ne=Pe;var Le=Pe;var Re=Pe;var Ve=Pe;var Ge=function(){this.size=0,this.__data__={hash:new Te,map:new(We||Ie),string:new Te}},Xe=function(e){var t=Ne(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Le(this,e).get(e)},Ue=function(e){return Re(this,e).has(e)},Ze=function(e,t){var r=Ve(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Ge,Ye.prototype.delete=Xe,Ye.prototype.get=Me,Ye.prototype.has=Ue,Ye.prototype.set=Ze;var qe=Ye;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Je.Cache||qe),r}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Ke(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,r,n,o){t.push(n?o.replace(et,"$1"):r||e)})),t}));var rt=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},nt=g,ot=w,at=F?F.prototype:void 0,it=at?at.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(nt(t))return rt(t,e)+"";if(ot(t))return it?it.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ct=lt;var dt=g,gt=z,ut=tt,st=function(e){return null==e?"":ct(e)};var ht=w;var Ft=function(e,t){return dt(e)?e:gt(e,t)?[e]:ut(st(e))},pt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[pt(t[r++])];return r&&r==n?e:void 0};var Bt=d((function(e,t,r){var n=null==e?void 0:ft(e,t);return void 0===n?r:n}));const yt=(e,t,r)=>t?Bt(r,t)||Bt(e,t):r||e,mt=(e,t)=>{const r=t||e.defaultValue;return Bt(e.collections,r)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const r=t.theme,n=mt(bt,r[St.colorScheme]);return r.options&&r.options.color?yt(n,e,r.options.color):yt(n,e)},$t={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}},vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Et=e=>Object.keys(vt).reduce(((t,r)=>{const n=vt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),xt=Et("max-width"),Ht=(Et("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),wt=o`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,At=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||$t.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${wt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ct=n(At)`
    animation-delay: -0.45s;
`,kt=n(At)`
    animation-delay: -0.3s;
`,_t=n(At)`
    animation-delay: -0.15s;
`,zt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ot={collections:{base:{D1:{fontFamily:zt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:zt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:zt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:zt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:zt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:zt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:zt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:zt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:zt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:zt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,n=mt(Ot,r[St.textStyleScheme]);return r.options&&r.options.textStyle?yt(n,e,r.options.textStyle):yt(n,e)},It={D1:{fontFamily:Tt("D1.fontFamily"),fontSize:Tt("D1.fontSize"),fontWeight:Tt("D1.fontWeight"),lineHeight:Tt("D1.lineHeight"),letterSpacing:Tt("D1.letterSpacing")},D2:{fontFamily:Tt("D2.fontFamily"),fontSize:Tt("D2.fontSize"),fontWeight:Tt("D2.fontWeight"),lineHeight:Tt("D2.lineHeight"),letterSpacing:Tt("D2.letterSpacing")},D3:{fontFamily:Tt("D3.fontFamily"),fontSize:Tt("D3.fontSize"),fontWeight:Tt("D3.fontWeight"),lineHeight:Tt("D3.lineHeight"),letterSpacing:Tt("D3.letterSpacing")},D4:{fontFamily:Tt("D4.fontFamily"),fontSize:Tt("D4.fontSize"),fontWeight:Tt("D4.fontWeight"),lineHeight:Tt("D4.lineHeight"),letterSpacing:Tt("D4.letterSpacing")},DBody:{fontFamily:Tt("DBody.fontFamily"),fontSize:Tt("DBody.fontSize"),fontWeight:Tt("DBody.fontWeight"),lineHeight:Tt("DBody.lineHeight"),letterSpacing:Tt("DBody.letterSpacing")},H1:{fontFamily:Tt("H1.fontFamily"),fontSize:Tt("H1.fontSize"),fontWeight:Tt("H1.fontWeight"),lineHeight:Tt("H1.lineHeight"),letterSpacing:Tt("H1.letterSpacing")},H2:{fontFamily:Tt("H2.fontFamily"),fontSize:Tt("H2.fontSize"),fontWeight:Tt("H2.fontWeight"),lineHeight:Tt("H2.lineHeight"),letterSpacing:Tt("H2.letterSpacing")},H3:{fontFamily:Tt("H3.fontFamily"),fontSize:Tt("H3.fontSize"),fontWeight:Tt("H3.fontWeight"),lineHeight:Tt("H3.lineHeight"),letterSpacing:Tt("H3.letterSpacing")},H4:{fontFamily:Tt("H4.fontFamily"),fontSize:Tt("H4.fontSize"),fontWeight:Tt("H4.fontWeight"),lineHeight:Tt("H4.lineHeight"),letterSpacing:Tt("H4.letterSpacing")},H5:{fontFamily:Tt("H5.fontFamily"),fontSize:Tt("H5.fontSize"),fontWeight:Tt("H5.fontWeight"),lineHeight:Tt("H5.lineHeight"),letterSpacing:Tt("H5.letterSpacing")},H6:{fontFamily:Tt("H6.fontFamily"),fontSize:Tt("H6.fontSize"),fontWeight:Tt("H6.fontWeight"),lineHeight:Tt("H6.lineHeight"),letterSpacing:Tt("H6.letterSpacing")},Body:{fontFamily:Tt("Body.fontFamily"),fontSize:Tt("Body.fontSize"),fontWeight:Tt("Body.fontWeight"),lineHeight:Tt("Body.lineHeight"),letterSpacing:Tt("Body.letterSpacing")},BodySmall:{fontFamily:Tt("BodySmall.fontFamily"),fontSize:Tt("BodySmall.fontSize"),fontWeight:Tt("BodySmall.fontWeight"),lineHeight:Tt("BodySmall.lineHeight"),letterSpacing:Tt("BodySmall.letterSpacing")},XSmall:{fontFamily:Tt("XSmall.fontFamily"),fontSize:Tt("XSmall.fontSize"),fontWeight:Tt("XSmall.fontWeight"),lineHeight:Tt("XSmall.lineHeight"),letterSpacing:Tt("XSmall.letterSpacing")}},Wt=e=>{switch(e){case 700:case"bold":return zt.Bold;case 600:case"semibold":return zt.Semibold;case 300:case"light":return zt.Light;case 400:case"regular":return zt.Regular;default:return""}},jt=(e,t)=>r=>{var n;const o=It[e].fontFamily(r),i=It[e].fontWeight(r);return Object.values(zt).includes(o)?a`
                font-family: ${Wt(t)||Wt(i)||o};
                font-weight: normal !important;
            `:a`
            font-family: ${o};
            font-weight: ${null!==(n=Pt(t)||i)&&void 0!==n?n:"normal"};
        `},Pt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nt=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Lt=(e,t,r=!1)=>n=>{const o=It[e],i=o.fontSize(n);return a`
            ${jt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${a`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Rt=(e=!1,t=!1,r=void 0)=>t?a`
            display: block;
            ${Nt(r)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${Nt(r)}
        `;var Vt;!function(e){e.D1=n.h1`
        ${e=>a`
                ${Lt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>a`
                ${Lt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>a`
                ${Lt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>a`
                ${Lt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>a`
                ${Lt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>a`
                ${Lt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>a`
                ${Lt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>a`
                ${Lt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>a`
                ${Lt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>a`
                ${Lt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>a`
                ${Lt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>a`
                ${Lt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>a`
                ${Lt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>a`
                ${Lt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Mt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Mt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Vt||(Vt={}));const Gt=n.a`
    ${e=>a`
            ${Lt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Xt=n(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mt=r=>{var{external:n=!1,children:o}=r,a=l(r,["external","children"]);return e(Gt,Object.assign({},a,{children:[o,n&&t(Xt,{})]}))};var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Zt={collections:{base:{InputBoxShadow:a`
        inset 0 0 4px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:a`
        inset 0 0 4px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:a`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:a`
        inset 0 0 3px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:a`
        inset 0 0 3px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:a`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Yt=e=>t=>{var r;const n=t.theme,o=mt(Zt,n[St.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?yt(o,e,n.options.designToken):yt(o,e)},qt={InputBoxShadow:Yt("InputBoxShadow"),InputErrorBoxShadow:Yt("InputErrorBoxShadow"),ElevationBoxShadow:Yt("ElevationBoxShadow"),Table:{Header:Yt("Table.Header"),Cell:{Primary:Yt("Table.Cell.Primary"),Secondary:Yt("Table.Cell.Secondary"),Selected:Yt("Table.Cell.Selected"),Hover:Yt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Yt("Button.Danger.BackgroundColor"),Hover:Yt("Button.Danger.Hover"),Primary:Yt("Button.Danger.Primary"),Border:Yt("Button.Danger.Border")}}},Jt=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return a`
                    background-color: ${$t.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?qt.Button.Danger.Border:$t.Primary};

                    color: ${e.$buttonIsDanger?qt.Button.Danger.Primary:$t.Primary};
                `;case"light":return a`
                    background-color: ${$t.Neutral[8]};
                    border: 1px solid ${$t.Neutral[5]};

                    color: ${e.$buttonIsDanger?qt.Button.Danger.Primary:$t.Primary};
                `;case"disabled":return a`
                    background-color: ${$t.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$t.Neutral[3]};
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?qt.Button.Danger.Primary:$t.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?qt.Button.Danger.Hover:$t.Secondary};
                    }
                `;default:return a`
                    background-color: ${e.$buttonIsDanger?qt.Button.Danger.BackgroundColor:$t.Primary};
                    border: 1px solid transparent;

                    ${xt.mobileL} {
                        width: 100%;
                    }

                    color: ${$t.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    ${Lt("H5","semibold")}

                    ${xt.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    ${Lt("H4","semibold")}

                    ${xt.mobileS} {
                        height: auto;
                    }
                `}
`,Kt=n((({color:r,className:n,size:o=18})=>e(Ht,Object.assign({className:n,$size:o,$color:r},{children:[t(At,{id:"inner1",$size:o-2,$borderWidth:2,$color:r}),t(Ct,{id:"inner2",$size:o-2,$borderWidth:2,$color:r}),t(kt,{id:"inner3",$size:o-2,$borderWidth:2,$color:r}),t(_t,{id:"inner4",$size:o-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?qt.Button.Danger.Primary:$t.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Qt={Default:r.forwardRef(((r,n)=>{const{children:o,disabled:a=!1,loading:i=!1,styleType:c="default",danger:d=!1}=r,g=l(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":c,$buttonSizeStyle:"default",$buttonIsDanger:d};return e(Jt,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:a},u,g,{children:[i&&t(Kt,Object.assign({},u)),t("span",{children:o})]}))})),Small:r.forwardRef(((r,n)=>{const{children:o,disabled:a=!1,loading:i=!1,styleType:c="default",danger:d=!1}=r,g=l(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":c,$buttonSizeStyle:"small",$buttonIsDanger:d};return e(Jt,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:a},u,g,{children:[i&&t(Kt,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))};export{Qt as Button};
//# sourceMappingURL=index.js.map
