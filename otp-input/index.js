import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useRef as i,useImperativeHandle as a,useState as o,useEffect as s}from"react";import l,{keyframes as c,css as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,b="object"==typeof self&&self&&self.Object===Object&&self,$=y||b||Function("return this")(),v=$.Symbol,F=v,S=Object.prototype,D=S.hasOwnProperty,B=S.toString,x=F?F.toStringTag:void 0;var w=function(e){var t=D.call(e,x),r=e[x];try{e[x]=void 0;var n=!0}catch(e){}var i=B.call(e);return n&&(t?e[x]=r:delete e[x]),i},k=Object.prototype.toString;var E=w,H=function(e){return k.call(e)},O=v?v.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?E(e):H(e)};var M=C,A=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==M(e)},z=m,_=T,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var L=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(I.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=C,j=N;var P,R=function(e){if(!j(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=$["__core-js_shared__"],Z=(P=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var U=function(e){return!!Z&&Z in e},X=Function.prototype.toString;var G=R,J=U,q=N,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,re=ee.toString,ne=te.hasOwnProperty,ie=RegExp("^"+re.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!q(e)||J(e))&&(G(e)?ie:Q).test(K(e))},oe=function(e,t){return null==e?void 0:e[t]};var se=function(e,t){var r=oe(e,t);return ae(r)?r:void 0},le=se(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=le,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return fe.call(t,e)?t[e]:void 0},pe=le,me=Object.prototype.hasOwnProperty;var ye=le;var be=de,$e=ue,ve=ge,Fe=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}De.prototype.clear=be,De.prototype.delete=$e,De.prototype.get=ve,De.prototype.has=Fe,De.prototype.set=Se;var Be=De;var xe=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var ke=function(e,t){for(var r=e.length;r--;)if(we(e[r][0],t))return r;return-1},Ee=ke,He=Array.prototype.splice;var Oe=ke;var Ce=ke;var Me=ke;var Ae=xe,Te=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=Oe(t,e);return r<0?void 0:t[r][1]},_e=function(e){return Ce(this.__data__,e)>-1},Ye=function(e,t){var r=this.__data__,n=Me(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ie(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ie.prototype.clear=Ae,Ie.prototype.delete=Te,Ie.prototype.get=ze,Ie.prototype.has=_e,Ie.prototype.set=Ye;var Le=Ie,Ne=se($,"Map"),We=Be,je=Le,Pe=Ne;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ze=Ve;var Ue=Ve;var Xe=Ve;var Ge=Ve;var Je=function(){this.size=0,this.__data__={hash:new We,map:new(Pe||je),string:new We}},qe=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ue(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},et=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=Je,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var rt=tt;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(nt.Cache||rt),r}nt.Cache=rt;var it=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,st=function(e){var t=it(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,r,n,i){t.push(n?i.replace(ot,"$1"):r||e)})),t}));var lt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ct=m,dt=T,ut=v?v.prototype:void 0,ht=ut?ut.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return ht?ht.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},gt=ft;var pt=m,mt=L,yt=st,bt=function(e){return null==e?"":gt(e)};var $t=T;var vt=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(bt(e))},Ft=function(e){if("string"==typeof e||$t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var r=0,n=(t=vt(t,e)).length;null!=e&&r<n;)e=e[Ft(t[r++])];return r&&r==n?e:void 0};var Dt=p((function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n}));const Bt=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,xt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const r=t.theme,n=xt(kt,r[wt.colorScheme]);return r.options&&r.options.color?Bt(n,e,r.options.color):Bt(n,e)},Ht={Brand:{1:Et("Brand.1"),2:Et("Brand.2"),3:Et("Brand.3"),4:Et("Brand.4"),5:Et("Brand.5"),6:Et("Brand.6")},Primary:Et("Primary"),PrimaryDark:Et("PrimaryDark"),Secondary:Et("Secondary"),Accent:{Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Neutral:{1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},Validation:{Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Shadow:{Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")}},Ot={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(Ot).reduce(((t,r)=>{const n=Ot[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Mt=Ct("max-width"),At=(Ct("min-width"),l.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Tt=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zt=l.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ht.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Tt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_t=l(zt)`
    animation-delay: -0.45s;
`,Yt=l(zt)`
    animation-delay: -0.3s;
`,It=l(zt)`
    animation-delay: -0.15s;
`,Lt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Nt={collections:{base:{D1:{fontFamily:Lt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=xt(Nt,r[wt.textStyleScheme]);return r.options&&r.options.textStyle?Bt(n,e,r.options.textStyle):Bt(n,e)},jt={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Lt.Bold;case 600:case"semibold":return Lt.Semibold;case 300:case"light":return Lt.Light;case 400:case"regular":return Lt.Regular;default:return""}},Rt=(e,t)=>r=>{var n;const i=jt[e].fontFamily(r),a=jt[e].fontWeight(r);return Object.values(Lt).includes(i)?d`
                font-family: ${Pt(t)||Pt(a)||i};
                font-weight: normal !important;
            `:d`
            font-family: ${i};
            font-weight: ${null!==(n=Vt(t)||a)&&void 0!==n?n:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=e=>{if(e>0)return d`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ut=Rt,Xt=(e,t,r=!1)=>n=>{const i=jt[e],a=i.fontSize(n);return d`
            ${Rt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${d`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1,r=void 0)=>t?d`
            display: block;
            ${Zt(r)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${Zt(r)}
        `;var Jt;!function(e){e.D1=l.h1`
        ${e=>d`
                ${Xt("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>d`
                ${Xt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>d`
                ${Xt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>d`
                ${Xt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>d`
                ${Xt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>d`
                ${Xt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>d`
                ${Xt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>d`
                ${Xt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>d`
                ${Xt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>d`
                ${Xt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>d`
                ${Xt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>d`
                ${Xt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>d`
                ${Xt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>d`
                ${Xt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Jt||(Jt={}));const qt=l.a`
    ${e=>d`
            ${Xt(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        `}
`,Kt=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qt=r=>{var{external:n=!1,children:i}=r,a=f(r,["external","children"]);return e(qt,Object.assign({},a,{children:[i,n&&t(Kt,{})]}))};var er;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(er||(er={}));const tr={collections:{base:{InputBoxShadow:d`
        inset 0 0 4px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 4px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:d`
        inset 0 0 3px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 3px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},rr=e=>t=>{var r;const n=t.theme,i=xt(tr,n[wt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Bt(i,e,n.options.designToken):Bt(i,e)},nr={InputBoxShadow:rr("InputBoxShadow"),InputErrorBoxShadow:rr("InputErrorBoxShadow"),ElevationBoxShadow:rr("ElevationBoxShadow"),Table:{Header:rr("Table.Header"),Cell:{Primary:rr("Table.Cell.Primary"),Secondary:rr("Table.Cell.Secondary"),Selected:rr("Table.Cell.Selected"),Hover:rr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:rr("Button.Danger.BackgroundColor"),Hover:rr("Button.Danger.Hover"),Primary:rr("Button.Danger.Primary"),Border:rr("Button.Danger.Border")}}},ir=l.button`
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
                    background-color: ${Ht.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?nr.Button.Danger.Border:Ht.Primary};

                    color: ${e.$buttonIsDanger?nr.Button.Danger.Primary:Ht.Primary};
                `;case"light":return d`
                    background-color: ${Ht.Neutral[8]};
                    border: 1px solid ${Ht.Neutral[5]};

                    color: ${e.$buttonIsDanger?nr.Button.Danger.Primary:Ht.Primary};
                `;case"disabled":return d`
                    background-color: ${Ht.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ht.Neutral[3]};
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?nr.Button.Danger.Primary:Ht.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?nr.Button.Danger.Hover:Ht.Secondary};
                    }
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?nr.Button.Danger.BackgroundColor:Ht.Primary};
                    border: 1px solid transparent;

                    ${Mt.mobileL} {
                        width: 100%;
                    }

                    color: ${Ht.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    ${Xt("H5","semibold")}

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    ${Xt("H4","semibold")}

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `}
`,ar=l((({color:r,className:n,size:i=18})=>e(At,Object.assign({className:n,$size:i,$color:r},{children:[t(zt,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(_t,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(Yt,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(It,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?nr.Button.Danger.Primary:Ht.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ht.Neutral[3](e);break;default:t=Ht.Neutral[8](e)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,or={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=f(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ir,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(ar,Object.assign({},d)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=f(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ir,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(ar,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},sr=l.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${nr.InputBoxShadow};
    }

    ${e=>e.$readOnly?d`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?d`
                background: ${Ht.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${Ht.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border};
                    box-shadow: ${nr.InputErrorBoxShadow};
                }
            `:void 0}
`;l.input`
    ${e=>Xt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Ht.Neutral[1]};
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
        color: ${Ht.Neutral[3]};
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
`;var lr={exports:{}};lr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,$=c||0,v=d||0;return u?new Date(Date.UTC(p,m,g,y,b,$,v+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,b,$,v)):new Date(p,m,g,y,b,$,v)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var cr,dr,ur=p(lr.exports),hr={exports:{}},fr=p(hr.exports=(cr={year:0,month:1,day:2,hour:3,minute:4,second:5},dr={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=dr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),dr[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=cr[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),gr={exports:{}};gr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",v={};v[$]=m;var F="$isDayjsObject",S=function(e){return e instanceof w||!(!e||!e[F])},D=function e(t,r,n){var i;if(!t)return $;if("string"==typeof t){var a=t.toLowerCase();v[a]&&(i=a),r&&(v[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;v[s]=t,i=s}return!n&&i&&($=i),i||!n&&$},B=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},x=b;x.l=D,x.i=S,x.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=B(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return B(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<B(e)},y.$g=function(e,t,r){return x.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!x.u(t)||t,d=x.p(e),f=function(e,t){var i=x.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return x.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var $=this.$locale().weekStart||0,v=(p<$?p+7:p)-$;return f(n?y-v:y+(6-v),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=x.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=x.p(d),p=function(e){var t=B(f);return x.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return x.s(a%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=this,m=x.p(h),y=B(n),b=(y.utcOffset()-this.utcOffset())*t,$=this-y,v=function(){return x.m(p,y)};switch(m){case u:g=v()/12;break;case c:g=v();break;case d:g=v()/3;break;case l:g=($-b)/6048e5;break;case s:g=($-b)/864e5;break;case o:g=$/r;break;case a:g=$/t;break;case i:g=$/e;break;default:g=$}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=D(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=w.prototype;return B.prototype=k,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,w,B),e.$i=!0),B},B.locale=D,B.isDayjs=S,B.unix=function(e){return B(1e3*e)},B.en=v[$],B.Ls=v,B.p={},B}();var pr=p(gr.exports),mr={exports:{}};mr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var yr=p(mr.exports),br={exports:{}};br.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var $r=p(br.exports),vr={exports:{}};vr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Fr,Sr=p(vr.exports);pr.extend(yr),pr.extend($r),pr.extend(Sr),pr.extend(ur),pr.extend(fr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=pr(t).startOf("week");return Dr(r).map((e=>Br(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Br(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(pr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+pr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=pr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?pr(n):void 0,i?pr(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Fr||(Fr={}));const Dr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Br=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},xr=[1,3,5,7,8,10,12],wr=[4,6,9,11];var kr,Er,Hr,Or;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":xr.includes(a)?Math.min(i,31).toString():wr.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=pr(e,r);return pr(t,r).diff(n,"minute")},e.toDayjs=e=>e?pr(e):pr(),e.addMinutesToTime=(e,t,r="HH:mm")=>pr(e,r).add(t,"minutes").format(r)}(kr||(kr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!pr(e).isBefore(n,"day"))||!(!i||!pr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(pr(e).isValid())return e}return""}}(Er||(Er={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hr||(Hr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Or||(Or={}));const Cr=l.input`
    ${Xt("Body","regular")}
    color: ${Ht.Neutral[1]};

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
        color: ${Ht.Neutral[3]};
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
`,Mr=l.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ht.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ar=l(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Tr=l.div`
    display: flex;
    width: 100%;
`,zr=n.forwardRef(((n,o)=>{var{value:s,spacing:l,type:c,error:d,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:b="bordered"}=n,$=f(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=i();a(o,(()=>v.current),[]);const F=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),a=n.substring(0,r.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>Or.transformWithSpaces(e,l)}),S=e=>{g&&(B()?x(e):g(e))},D=()=>{p&&p(),v&&v.current&&v.current.focus()},B=()=>"tel"===c&&l,x=e=>{const{nextValue:t,updateCaretPosition:r}=F(),n=t.replace(/\s/g,"");e.target.value=n,g(e),r()},w=s?(e=>e?B()?Or.transformWithSpaces(e,l):e:"")(s):s,k=()=>e(r,{children:[t(Cr,Object.assign({"data-testid":"input",ref:v,disabled:u,value:w,onChange:S,type:c,readOnly:h},$)),m&&!u&&!h&&!!s&&t(Mr,Object.assign({onClick:D,type:"button"},{children:t(Ar,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===b?t(Tr,Object.assign({className:y},{children:k()})):t(sr,Object.assign({$disabled:u,$error:d,$readOnly:h,className:y},{children:k()}))})})),_r=l.div`
    display: flex;
    flex-direction: column;
`,Yr=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Ir=l(zr)`
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

    ${Mt.mobileM} {
        padding: 0 0.5rem;
    }
`,Lr=l(or.Small)`
    margin: 2rem 0rem;
`;l.div`
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
`,l.div`
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
`;l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Mt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Nr=l.div`
    border-radius: 0.5rem;
    background: ${Ht.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Wr=l.button`
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
                background-color: ${Ht.Neutral[7]};
            `}
    }
`,jr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return t(Wr,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Pr=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ht.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Mt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Rr=l(jr)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Ht.Accent.Light[1]};
    }
`,Vr=l(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ht.Neutral[3]};
`,Zr=e=>{const{textSize:t}=e||{};return d`
        // Text styling
        ${t&&Xt(t,"regular")}

        strong {
            font-family: ${Lt.Semibold};
            ${t&&Xt(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Lt.Semibold};
            ${t&&Xt(t,"semibold")}
            color: ${Ht.Primary};
            text-decoration: none;

            svg {
                color: ${Ht.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
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
    `};l.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,l((e=>{var{children:r}=e,n=f(e,["children"]);const i=n["data-testid"]||"card";return t(Nr,Object.assign({},n,{"data-testid":i},{children:"string"==typeof r?t(Jt.Body,{children:r}):r}))}))`
    color: ${Ht.Neutral[1]};
    ${Zr({textSize:"BodySmall"})}

    ${Mt.mobileL} {
        display: none;
    }
`,l((r=>{var{id:n="modal-box",children:i,onClose:a,showCloseButton:o=!0}=r,s=f(r,["id","children","onClose","showCloseButton"]);return e(Pr,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[o&&t(Rr,Object.assign({onClick:a,"data-testid":"close-button",focusHighlight:!1},{children:t(Vr,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ht.Neutral[1]};
    ${Zr({textSize:"BodySmall"})}
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,l.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Ht.Primary};
    }
`,l.div`
    display: inline;
    position: relative;
    width: fit-content;
`,l.label`
    ${Xt("H5","semibold")}
    color: ${Ht.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Xt("H5","semibold")}
    }

    a {
        color: ${Ht.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Ht.Secondary};

            svg {
                color: ${Ht.Secondary};
            }
        }
    }
`;const Ur=l(Jt.H6)`
    color: ${Ht.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;l(Jt.BodySmall)`
    && {
        color: ${Ht.Neutral[3]};
        ${Ut("BodySmall","regular")}
    }
`;const Xr=e=>t(Ur,Object.assign({weight:"semibold"},e)),Gr=r=>{var{id:n,value:a=[],"data-testid":l,className:c,cooldownDuration:d,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=r,b=f(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const $=null!=u?u:{},{disabled:v,onClick:F,styleType:S="secondary"}=$,D=f($,["disabled","onClick","styleType"]),B=i([]),x=i(p),[w,k]=o(new Array(g).fill("")),[E,H]=o(d),[O,C]=o(new Date);s((()=>{var e;return null===(e=null==B?void 0:B.current[0])||void 0===e||e.focus(),document.addEventListener("paste",T),()=>document.removeEventListener("paste",T)}),[]),s((()=>{if(0!==d){m&&m();const e=Y();return()=>e()}}),[O]),s((()=>{x.current=p}),[p]),s((()=>{a.length===g&&k(a)}),[a]);const M=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(z(n)){const t=[...w];t[e]=n.substring(n.length-1),null===(r=B.current[e+1])||void 0===r||r.focus(),k(t),p&&p(t)}},A=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=B.current[e-1])||void 0===r||r.focus()),k(t),p&&p(t)}},T=e=>{const t=e.clipboardData.getData("text"),r=t.split("");t&&z(t,g)?(k(r),x.current&&x.current(r)):e.preventDefault()},z=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*d;return e<O.valueOf()+t},Y=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*d,n=Math.ceil((O.valueOf()+r-t)/1e3);H(n),n<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},I=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return e(_r,Object.assign({id:n,"data-testid":l,className:c},{children:[t(Yr,{children:w.map(((e,r)=>t(Ir,Object.assign({id:I(r,"otp-input",n),"data-testid":I(r,"otp-input",l),ref:e=>B.current[r]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:M(r),onKeyDown:A(r)},b),r)))}),h&&t(Xr,{children:h}),t(Lr,Object.assign({styleType:S,type:"button"},D,{onClick:e=>{k(new Array(g).fill("")),_()||(C(new Date),H(d)),F&&F(e)},disabled:v||_()},{children:D.children?D.children:"Resend OTP"+(E?` in ${E} second${E>1?"s":""}`:"")}))]}))};export{Gr as OtpInput};
//# sourceMappingURL=index.js.map
