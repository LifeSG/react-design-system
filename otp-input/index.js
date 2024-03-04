import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{keyframes as d,css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,$="object"==typeof self&&self&&self.Object===Object&&self,v=y||$||Function("return this")(),b=v.Symbol,F=b,S=Object.prototype,D=S.hasOwnProperty,B=S.toString,x=F?F.toStringTag:void 0;var w=function(e){var t=D.call(e,x),r=e[x];try{e[x]=void 0;var n=!0}catch(e){}var i=B.call(e);return n&&(t?e[x]=r:delete e[x]),i},E=Object.prototype.toString;var H=w,O=function(e){return E.call(e)},k=b?b.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?H(e):O(e)};var M=C,A=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==M(e)},z=m,_=T,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var N=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(L.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},I=C,j=W;var P,R=function(e){if(!j(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=v["__core-js_shared__"],Z=(P=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var U=function(e){return!!Z&&Z in e},X=Function.prototype.toString;var G=R,J=U,q=W,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,re=ee.toString,ne=te.hasOwnProperty,ie=RegExp("^"+re.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||J(e))&&(G(e)?ie:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var r=ae(e,t);return oe(r)?r:void 0},se=le(Object,"create"),de=se;var ce=function(){this.__data__=de?de(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=se,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return fe.call(t,e)?t[e]:void 0},pe=se,me=Object.prototype.hasOwnProperty;var ye=se;var $e=ce,ve=ue,be=ge,Fe=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}De.prototype.clear=$e,De.prototype.delete=ve,De.prototype.get=be,De.prototype.has=Fe,De.prototype.set=Se;var Be=De;var xe=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var r=e.length;r--;)if(we(e[r][0],t))return r;return-1},He=Ee,Oe=Array.prototype.splice;var ke=Ee;var Ce=Ee;var Me=Ee;var Ae=xe,Te=function(e){var t=this.__data__,r=He(t,e);return!(r<0)&&(r==t.length-1?t.pop():Oe.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=ke(t,e);return r<0?void 0:t[r][1]},_e=function(e){return Ce(this.__data__,e)>-1},Ye=function(e,t){var r=this.__data__,n=Me(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Le(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Le.prototype.clear=Ae,Le.prototype.delete=Te,Le.prototype.get=ze,Le.prototype.has=_e,Le.prototype.set=Ye;var Ne=Le,We=le(v,"Map"),Ie=Be,je=Ne,Pe=We;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ze=Ve;var Ue=Ve;var Xe=Ve;var Ge=Ve;var Je=function(){this.size=0,this.__data__={hash:new Ie,map:new(Pe||je),string:new Ie}},qe=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ue(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},et=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=Je,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var rt=tt;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(nt.Cache||rt),r}nt.Cache=rt;var it=nt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,lt=function(e){var t=it(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,r,n,i){t.push(n?i.replace(at,"$1"):r||e)})),t}));var st=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},dt=m,ct=T,ut=b?b.prototype:void 0,ht=ut?ut.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(dt(t))return st(t,e)+"";if(ct(t))return ht?ht.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},gt=ft;var pt=m,mt=N,yt=lt,$t=function(e){return null==e?"":gt(e)};var vt=T;var bt=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt($t(e))},Ft=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var r=0,n=(t=bt(t,e)).length;null!=e&&r<n;)e=e[Ft(t[r++])];return r&&r==n?e:void 0};var Dt=p((function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n}));const Bt=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,xt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const r=t.theme,n=xt(Et,r[wt.colorScheme]);return r.options&&r.options.color?Bt(n,e,r.options.color):Bt(n,e)},Ot={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(kt).reduce(((t,r)=>{const n=kt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Mt=Ct("max-width"),At=(Ct("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Tt=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zt=s.div`
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
    animation: ${Tt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_t=s(zt)`
    animation-delay: -0.45s;
`,Yt=s(zt)`
    animation-delay: -0.3s;
`,Lt=s(zt)`
    animation-delay: -0.15s;
`,Nt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wt={collections:{base:{D1:{fontFamily:Nt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},It=e=>t=>{const r=t.theme,n=xt(Wt,r[wt.textStyleScheme]);return r.options&&r.options.textStyle?Bt(n,e,r.options.textStyle):Bt(n,e)},jt={D1:{fontFamily:It("D1.fontFamily"),fontSize:It("D1.fontSize"),fontWeight:It("D1.fontWeight"),lineHeight:It("D1.lineHeight"),letterSpacing:It("D1.letterSpacing")},D2:{fontFamily:It("D2.fontFamily"),fontSize:It("D2.fontSize"),fontWeight:It("D2.fontWeight"),lineHeight:It("D2.lineHeight"),letterSpacing:It("D2.letterSpacing")},D3:{fontFamily:It("D3.fontFamily"),fontSize:It("D3.fontSize"),fontWeight:It("D3.fontWeight"),lineHeight:It("D3.lineHeight"),letterSpacing:It("D3.letterSpacing")},D4:{fontFamily:It("D4.fontFamily"),fontSize:It("D4.fontSize"),fontWeight:It("D4.fontWeight"),lineHeight:It("D4.lineHeight"),letterSpacing:It("D4.letterSpacing")},DBody:{fontFamily:It("DBody.fontFamily"),fontSize:It("DBody.fontSize"),fontWeight:It("DBody.fontWeight"),lineHeight:It("DBody.lineHeight"),letterSpacing:It("DBody.letterSpacing")},H1:{fontFamily:It("H1.fontFamily"),fontSize:It("H1.fontSize"),fontWeight:It("H1.fontWeight"),lineHeight:It("H1.lineHeight"),letterSpacing:It("H1.letterSpacing")},H2:{fontFamily:It("H2.fontFamily"),fontSize:It("H2.fontSize"),fontWeight:It("H2.fontWeight"),lineHeight:It("H2.lineHeight"),letterSpacing:It("H2.letterSpacing")},H3:{fontFamily:It("H3.fontFamily"),fontSize:It("H3.fontSize"),fontWeight:It("H3.fontWeight"),lineHeight:It("H3.lineHeight"),letterSpacing:It("H3.letterSpacing")},H4:{fontFamily:It("H4.fontFamily"),fontSize:It("H4.fontSize"),fontWeight:It("H4.fontWeight"),lineHeight:It("H4.lineHeight"),letterSpacing:It("H4.letterSpacing")},H5:{fontFamily:It("H5.fontFamily"),fontSize:It("H5.fontSize"),fontWeight:It("H5.fontWeight"),lineHeight:It("H5.lineHeight"),letterSpacing:It("H5.letterSpacing")},H6:{fontFamily:It("H6.fontFamily"),fontSize:It("H6.fontSize"),fontWeight:It("H6.fontWeight"),lineHeight:It("H6.lineHeight"),letterSpacing:It("H6.letterSpacing")},Body:{fontFamily:It("Body.fontFamily"),fontSize:It("Body.fontSize"),fontWeight:It("Body.fontWeight"),lineHeight:It("Body.lineHeight"),letterSpacing:It("Body.letterSpacing")},BodySmall:{fontFamily:It("BodySmall.fontFamily"),fontSize:It("BodySmall.fontSize"),fontWeight:It("BodySmall.fontWeight"),lineHeight:It("BodySmall.lineHeight"),letterSpacing:It("BodySmall.letterSpacing")},XSmall:{fontFamily:It("XSmall.fontFamily"),fontSize:It("XSmall.fontSize"),fontWeight:It("XSmall.fontWeight"),lineHeight:It("XSmall.lineHeight"),letterSpacing:It("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Nt.Bold;case 600:case"semibold":return Nt.Semibold;case 300:case"light":return Nt.Light;case 400:case"regular":return Nt.Regular;default:return""}},Rt=(e,t)=>r=>{var n;const i=jt[e].fontFamily(r),o=jt[e].fontWeight(r);return Object.values(Nt).includes(i)?c`
                font-family: ${Pt(t)||Pt(o)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(n=Vt(t)||o)&&void 0!==n?n:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ut=(e,t,r=!1)=>n=>{const i=jt[e],o=i.fontSize(n);return c`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${c`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Xt=(e=!1,t=!1,r=void 0)=>t?c`
            display: block;
            ${Zt(r)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Zt(r)}
        `;var Gt;!function(e){e.D1=s.h1`
        ${e=>c`
                ${Ut("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${Ut("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${Ut("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${Ut("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${Ut("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${Ut("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${Ut("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${Ut("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${Ut("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${Ut("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${Ut("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${Ut("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${Ut("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${Ut("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gt||(Gt={}));const Jt=s.a`
    ${e=>c`
            ${Ut(e.textStyle,e.weight)}
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
`,qt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Kt=r=>{var{external:n=!1,children:i}=r,o=f(r,["external","children"]);return e(Jt,Object.assign({},o,{children:[i,n&&t(qt,{})]}))};var Qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Qt||(Qt={}));const er={collections:{base:{InputBoxShadow:c`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},tr=e=>t=>{var r;const n=t.theme,i=xt(er,n[wt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Bt(i,e,n.options.designToken):Bt(i,e)},rr={InputBoxShadow:tr("InputBoxShadow"),InputErrorBoxShadow:tr("InputErrorBoxShadow"),ElevationBoxShadow:tr("ElevationBoxShadow"),Table:{Header:tr("Table.Header"),Cell:{Primary:tr("Table.Cell.Primary"),Secondary:tr("Table.Cell.Secondary"),Selected:tr("Table.Cell.Selected"),Hover:tr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:tr("Button.Danger.BackgroundColor"),Hover:tr("Button.Danger.Hover"),Primary:tr("Button.Danger.Primary"),Border:tr("Button.Danger.Border")}}},nr=s.button`
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
                        ${e.$buttonIsDanger?rr.Button.Danger.Border:Ot.Primary};

                    span {
                        color: ${e.$buttonIsDanger?rr.Button.Danger.Primary:Ot.Primary};
                    }
                `;case"light":return c`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid ${Ot.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?rr.Button.Danger.Primary:Ot.Primary};
                    }
                `;case"disabled":return c`
                    background-color: ${Ot.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ot.Neutral[3]};
                    }
                `;case"link":return c`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?rr.Button.Danger.Primary:Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?rr.Button.Danger.Hover:Ot.Secondary};
                        }
                    }
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?rr.Button.Danger.BackgroundColor:Ot.Primary};
                    border: 1px solid transparent;

                    ${Mt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ot.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?c`
                    height: 2.5rem;
                    span {
                        ${Ut("H5","semibold")}
                    }

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `:c`
                    height: 3rem;
                    span {
                        ${Ut("H4","semibold")}
                    }

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `}
`,ir=s((({color:r,className:n,size:i=18})=>e(At,Object.assign({className:n,$size:i,$color:r},{children:[t(zt,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(_t,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(Yt,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(Lt,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?rr.Button.Danger.Primary:Ot.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return c`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,or={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",danger:s=!1}=r,d=f(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(nr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(ir,Object.assign({},c)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",danger:s=!1}=r,d=f(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(nr,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(ir,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},ar=s.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ot.Accent.Light[1]};
        box-shadow: ${rr.InputBoxShadow};
    }

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?c`
                background: ${Ot.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ot.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ot.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ot.Validation.Red.Border};
                    box-shadow: ${rr.InputErrorBoxShadow};
                }
            `:void 0}
`;s.input`
    ${Ut("Body","regular")}
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
`;var lr={exports:{}};lr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var d=a[s],c=u[d],h=c&&c[0],f=c&&c[1];a[s]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,s=i.parser,d=e.slice(n),c=o.exec(d)[0];s.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var l=a[1];if("string"==typeof l){var s=!0===a[2],d=!0===a[3],c=s||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!s&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,l=n.hours,s=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,$=s||0,v=d||0,b=c||0;return u?new Date(Date.UTC(p,m,g,y,$,v,b+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,$,v,b)):new Date(p,m,g,y,$,v,b)}catch(e){return new Date("")}}(t,l,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){a[1]=l[g-1];var p=r.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var sr,dr,cr=p(lr.exports),ur={exports:{}},hr=p(ur.exports=(sr={year:0,month:1,day:2,hour:3,minute:4,second:5},dr={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=dr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),dr[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var l=n[a],s=l.type,d=l.value,c=sr[s];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var d=s.utcOffset();s=s.add(i-d,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,l=i||t||n,s=o(+r(),l);if("string"!=typeof e)return r(e).tz(l);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),s,l),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=l,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),fr={exports:{}};fr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",l="day",s="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},$={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,a=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:s,d:l,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=m;var F=function(e){return e instanceof x},S=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),r&&(b[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,i=l}return!n&&i&&(v=i),i||!n&&v},D=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},B=$;B.l=S,B.i=F,B.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=D(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,r){return B.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!B.u(t)||t,c=B.p(e),f=function(e,t){var i=B.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(l)},g=function(e,t){return B.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(c){case u:return n?f(1,0):f(31,11);case d:return n?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,b=(p<v?p+7:p)-v;return f(n?y-b:y+(6-b),m);case l:case h:return g($+"Hours",0);case a:return g($+"Minutes",1);case o:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,s=B.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[l]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[s],g=s===l?this.$D+(t-this.$W):t;if(s===d||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var g=B.p(c),p=function(e){var t=D(f);return B.w(t.date(t.date()+Math.round(e*n)),f)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,l=this.$M,s=r.weekdays,d=r.months,c=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},u=function(e){return B.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:c(r.monthsShort,l,d,3),MMMM:c(d,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,s,2),ddd:c(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:B.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=B.p(h),m=D(n),y=(m.utcOffset()-this.utcOffset())*t,$=this-m,v=B.m(this,m);return v=(g={},g[u]=v/12,g[d]=v,g[c]=v/3,g[s]=($-y)/6048e5,g[l]=($-y)/864e5,g[a]=$/r,g[o]=$/t,g[i]=$/e,g)[p]||$,f?v:B.a(v)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=x.prototype;return D.prototype=w,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",l],["$M",d],["$y",u],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,x,D),e.$i=!0),D},D.locale=S,D.isDayjs=F,D.unix=function(e){return D(1e3*e)},D.en=b[v],D.Ls=b,D.p={},D}();var gr=p(fr.exports),pr={exports:{}};pr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,n):!this.isBefore(o,n))&&(s?this.isBefore(a,n):!this.isAfter(a,n))||(l?this.isBefore(o,n):!this.isAfter(o,n))&&(s?this.isAfter(a,n):!this.isBefore(a,n))}};var mr=p(pr.exports),yr={exports:{}};yr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var $r=p(yr.exports),vr={exports:{}};vr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var br,Fr=p(vr.exports);gr.extend(mr),gr.extend($r),gr.extend(Fr),gr.extend(cr),gr.extend(hr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=gr(t).startOf("week");return Sr(r).map((e=>Dr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Dr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(gr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+gr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=gr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?gr(n):void 0,i?gr(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(br||(br={}));const Sr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Dr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Br=[1,3,5,7,8,10,12],xr=[4,6,9,11];var wr,Er,Hr,Or;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Br.includes(o)?Math.min(i,31).toString():xr.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=gr(e,r);return gr(t,r).diff(n,"minute")},e.toDayjs=e=>e?gr(e):gr(),e.addMinutesToTime=(e,t,r="HH:mm")=>gr(e,r).add(t,"minutes").format(r)}(wr||(wr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!gr(e).isBefore(n,"day"))||!(!i||!gr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(gr(e).isValid())return e}return""}}(Er||(Er={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hr||(Hr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Or||(Or={}));const kr=s.input`
    ${Ut("Body","regular")}
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
`,Cr=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,Mr=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ar=s.div`
    display: flex;
    width: 100%;
`,Tr=n.forwardRef(((n,a)=>{var{value:l,spacing:s,type:d,error:c,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:$="bordered"}=n,v=f(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=i();o(a,(()=>b.current),[]);const F=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,r.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(s,s)}}}}({ref:b,formatter:e=>Or.transformWithSpaces(e,s)}),S=e=>{g&&(B()?x(e):g(e))},D=()=>{p&&p(),b&&b.current&&b.current.focus()},B=()=>"tel"===d&&s,x=e=>{const{nextValue:t,updateCaretPosition:r}=F(),n=t.replace(/\s/g,"");e.target.value=n,g(e),r()},w=l?(e=>e?B()?Or.transformWithSpaces(e,s):e:"")(l):l,E=()=>e(r,{children:[t(kr,Object.assign({"data-testid":"input",ref:b,disabled:u,value:w,onChange:S,type:d,readOnly:h},v)),m&&!u&&!h&&!!l&&t(Cr,Object.assign({onClick:D,type:"button"},{children:t(Mr,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===$?t(Ar,Object.assign({className:y},{children:E()})):t(ar,Object.assign({$disabled:u,$error:c,$readOnly:h,className:y},{children:E()}))})})),zr=s.div`
    display: flex;
    flex-direction: column;
`,_r=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Yr=s(Tr)`
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
`,Lr=s(or.Small)`
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
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Mt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Nr=s.div`
    border-radius: 0.5rem;
    background: ${Ot.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Wr=s.button`
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
`,Ir=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t(Wr,Object.assign({ref:r,$outline:o,$highlight:i,type:a},l,{children:n}))})),jr=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ot.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Mt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Pr=s(Ir)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Ot.Accent.Light[1]};
    }
`,Rr=s(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ot.Neutral[3]};
`,Vr=(e,t)=>{const{textColor:r=Ot.Neutral[1]}=t||{};return c`
        // Text
        ${Ut(e,"regular")}
        color: ${r};

        a,
        strong {
            ${Ut(e,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
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
`,s((e=>{var{children:r}=e,n=f(e,["children"]);const i=n["data-testid"]||"card";return t(Nr,Object.assign({},n,{"data-testid":i},{children:"string"==typeof r?t(Gt.Body,{children:r}):r}))}))`
    ${Vr("BodySmall")}

    ${Mt.mobileL} {
        display: none;
    }
`,s((r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=r,l=f(r,["id","children","onClose","showCloseButton"]);return e(jr,Object.assign({"data-testid":n},l,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Pr,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(Rr,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,s.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${Vr("BodySmall")}
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
    ${Ut("H5","semibold")}
    color: ${Ot.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Ut("H5","semibold")}
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
`;const Zr=s(Gt.H6)`
    color: ${Ot.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(Gt.BodySmall)`
    color: ${Ot.Neutral[3]};
`;const Ur=e=>t(Zr,Object.assign({weight:"semibold"},e)),Xr=r=>{var{id:n,value:o=[],"data-testid":s,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=r,$=f(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=u?u:{},{disabled:b,onClick:F,styleType:S="secondary"}=v,D=f(v,["disabled","onClick","styleType"]),B=i([]),x=i(p),[w,E]=a(new Array(g).fill("")),[H,O]=a(c),[k,C]=a(new Date);l((()=>{var e;return null===(e=null==B?void 0:B.current[0])||void 0===e||e.focus(),document.addEventListener("paste",T),()=>document.removeEventListener("paste",T)}),[]),l((()=>{if(0!==c){m&&m();const e=Y();return()=>e()}}),[k]),l((()=>{x.current=p}),[p]),l((()=>{o.length===g&&E(o)}),[o]);const M=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(z(n)){const t=[...w];t[e]=n.substring(n.length-1),null===(r=B.current[e+1])||void 0===r||r.focus(),E(t),p&&p(t)}},A=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=B.current[e-1])||void 0===r||r.focus()),E(t),p&&p(t)}},T=e=>{const t=e.clipboardData.getData("text"),r=t.split("");t&&z(t,g)?(E(r),x.current&&x.current(r)):e.preventDefault()},z=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*c;return e<k.valueOf()+t},Y=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*c,n=Math.ceil((k.valueOf()+r-t)/1e3);O(n),n<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},L=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return e(zr,Object.assign({id:n,"data-testid":s,className:d},{children:[t(_r,{children:w.map(((e,r)=>t(Yr,Object.assign({id:L(r,"otp-input",n),"data-testid":L(r,"otp-input",s),ref:e=>B.current[r]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:M(r),onKeyDown:A(r)},$),r)))}),h&&t(Ur,{children:h}),t(Lr,Object.assign({styleType:S,type:"button"},D,{onClick:e=>{E(new Array(g).fill("")),_()||(C(new Date),O(c)),F&&F(e)},disabled:b||_()},{children:D.children?D.children:"Resend OTP"+(H?` in ${H} second${H>1?"s":""}`:"")}))]}))};export{Xr as OtpInput};
//# sourceMappingURL=index.js.map
