import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useRef as a,useImperativeHandle as o,useState as i,useEffect as s}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as d}from"@lifesg/react-icons/cross";function h(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,m="object"==typeof f&&f&&f.Object===Object&&f,y="object"==typeof self&&self&&self.Object===Object&&self,F=m||y||Function("return this")(),v=F.Symbol,$=v,D=Object.prototype,B=D.hasOwnProperty,S=D.toString,b=$?$.toStringTag:void 0;var x=function(e){var t=B.call(e,b),r=e[b];try{e[b]=void 0;var n=!0}catch(e){}var a=S.call(e);return n&&(t?e[b]=r:delete e[b]),a},w=Object.prototype.toString;var E=x,H=function(e){return w.call(e)},O=v?v.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?E(e):H(e)};var C=k,M=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==C(e)},_=p,T=A,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var L=function(e,t){if(_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!T(e))||(Y.test(e)||!z.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=k,I=W;var R,j=function(e){if(!I(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=F["__core-js_shared__"],P=(R=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var Z=function(e){return!!P&&P in e},U=Function.prototype.toString;var G=j,X=Z,J=W,q=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,re=ee.hasOwnProperty,ne=RegExp("^"+te.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!J(e)||X(e))&&(G(e)?ne:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=oe(e,t);return ae(r)?r:void 0},se=ie(Object,"create"),le=se;var ce=function(){this.__data__=le?le(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=se,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return he.call(t,e)?t[e]:void 0},ge=se,pe=Object.prototype.hasOwnProperty;var me=se;var ye=ce,Fe=ue,ve=fe,$e=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},De=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=ye,Be.prototype.delete=Fe,Be.prototype.get=ve,Be.prototype.has=$e,Be.prototype.set=De;var Se=Be;var be=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var r=e.length;r--;)if(xe(e[r][0],t))return r;return-1},Ee=we,He=Array.prototype.splice;var Oe=we;var ke=we;var Ce=we;var Me=be,Ae=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},_e=function(e){var t=this.__data__,r=Oe(t,e);return r<0?void 0:t[r][1]},Te=function(e){return ke(this.__data__,e)>-1},ze=function(e,t){var r=this.__data__,n=Ce(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Me,Ye.prototype.delete=Ae,Ye.prototype.get=_e,Ye.prototype.has=Te,Ye.prototype.set=ze;var Le=Ye,We=ie(F,"Map"),Ne=Se,Ie=Le,Re=We;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return je(t)?r["string"==typeof t?"string":"hash"]:r.map},Pe=Ve;var Ze=Ve;var Ue=Ve;var Ge=Ve;var Xe=function(){this.size=0,this.__data__={hash:new Ne,map:new(Re||Ie),string:new Ne}},Je=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ze(this,e).get(e)},Ke=function(e){return Ue(this,e).has(e)},Qe=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}et.prototype.clear=Xe,et.prototype.delete=Je,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(rt.Cache||tt),r}rt.Cache=tt;var nt=rt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=function(e){var t=nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,r,n,a){t.push(n?a.replace(ot,"$1"):r||e)})),t}));var st=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},lt=p,ct=A,ut=v?v.prototype:void 0,dt=ut?ut.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(lt(t))return st(t,e)+"";if(ct(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ft=ht;var gt=p,pt=L,mt=it,yt=function(e){return null==e?"":ft(e)};var Ft=A;var vt=function(e,t){return gt(e)?e:pt(e,t)?[e]:mt(yt(e))},$t=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var r=0,n=(t=vt(t,e)).length;null!=e&&r<n;)e=e[$t(t[r++])];return r&&r==n?e:void 0};var Bt=g((function(e,t,r){var n=null==e?void 0:Dt(e,t);return void 0===n?r:n}));const St=(e,t,r)=>t?Bt(r,t)||Bt(e,t):r||e,bt=(e,t)=>{const r=t||e.defaultValue;return Bt(e.collections,r)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const r=t.theme,n=bt(wt,r[xt.colorScheme]);return r.options&&r.options.color?St(n,e,r.options.color):St(n,e)},Ht={Brand:{1:Et("Brand.1"),2:Et("Brand.2"),3:Et("Brand.3"),4:Et("Brand.4"),5:Et("Brand.5"),6:Et("Brand.6")},Primary:Et("Primary"),PrimaryDark:Et("PrimaryDark"),Secondary:Et("Secondary"),Accent:{Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Neutral:{1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},Validation:{Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Shadow:{Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")}},Ot={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},kt=e=>t=>{var r;const n=t.theme,a=bt(Ot,n[xt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?St(a,e,n.options.designToken):St(a,e)},Ct=kt("InputBoxShadow"),Mt=kt("InputErrorBoxShadow"),At=(kt("ElevationBoxShadow"),kt("Table.Header"),kt("Table.Cell.Primary"),kt("Table.Cell.Secondary"),kt("Table.Cell.Selected"),kt("Table.Cell.Hover"),kt("Button.Danger.BackgroundColor"),kt("Button.Danger.Hover"),kt("Button.Danger.Primary"),kt("Button.Danger.Border"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),_t={collections:{base:{D1:{fontFamily:At.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:At.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:At.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:At.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:At.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:At.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:At.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:At.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:At.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:At.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:At.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:At.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:At.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:At.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,n=bt(_t,r[xt.textStyleScheme]);return r.options&&r.options.textStyle?St(n,e,r.options.textStyle):St(n,e)},zt={D1:{fontFamily:Tt("D1.fontFamily"),fontSize:Tt("D1.fontSize"),fontWeight:Tt("D1.fontWeight"),lineHeight:Tt("D1.lineHeight"),letterSpacing:Tt("D1.letterSpacing")},D2:{fontFamily:Tt("D2.fontFamily"),fontSize:Tt("D2.fontSize"),fontWeight:Tt("D2.fontWeight"),lineHeight:Tt("D2.lineHeight"),letterSpacing:Tt("D2.letterSpacing")},D3:{fontFamily:Tt("D3.fontFamily"),fontSize:Tt("D3.fontSize"),fontWeight:Tt("D3.fontWeight"),lineHeight:Tt("D3.lineHeight"),letterSpacing:Tt("D3.letterSpacing")},D4:{fontFamily:Tt("D4.fontFamily"),fontSize:Tt("D4.fontSize"),fontWeight:Tt("D4.fontWeight"),lineHeight:Tt("D4.lineHeight"),letterSpacing:Tt("D4.letterSpacing")},DBody:{fontFamily:Tt("DBody.fontFamily"),fontSize:Tt("DBody.fontSize"),fontWeight:Tt("DBody.fontWeight"),lineHeight:Tt("DBody.lineHeight"),letterSpacing:Tt("DBody.letterSpacing")},H1:{fontFamily:Tt("H1.fontFamily"),fontSize:Tt("H1.fontSize"),fontWeight:Tt("H1.fontWeight"),lineHeight:Tt("H1.lineHeight"),letterSpacing:Tt("H1.letterSpacing")},H2:{fontFamily:Tt("H2.fontFamily"),fontSize:Tt("H2.fontSize"),fontWeight:Tt("H2.fontWeight"),lineHeight:Tt("H2.lineHeight"),letterSpacing:Tt("H2.letterSpacing")},H3:{fontFamily:Tt("H3.fontFamily"),fontSize:Tt("H3.fontSize"),fontWeight:Tt("H3.fontWeight"),lineHeight:Tt("H3.lineHeight"),letterSpacing:Tt("H3.letterSpacing")},H4:{fontFamily:Tt("H4.fontFamily"),fontSize:Tt("H4.fontSize"),fontWeight:Tt("H4.fontWeight"),lineHeight:Tt("H4.lineHeight"),letterSpacing:Tt("H4.letterSpacing")},H5:{fontFamily:Tt("H5.fontFamily"),fontSize:Tt("H5.fontSize"),fontWeight:Tt("H5.fontWeight"),lineHeight:Tt("H5.lineHeight"),letterSpacing:Tt("H5.letterSpacing")},H6:{fontFamily:Tt("H6.fontFamily"),fontSize:Tt("H6.fontSize"),fontWeight:Tt("H6.fontWeight"),lineHeight:Tt("H6.lineHeight"),letterSpacing:Tt("H6.letterSpacing")},Body:{fontFamily:Tt("Body.fontFamily"),fontSize:Tt("Body.fontSize"),fontWeight:Tt("Body.fontWeight"),lineHeight:Tt("Body.lineHeight"),letterSpacing:Tt("Body.letterSpacing")},BodySmall:{fontFamily:Tt("BodySmall.fontFamily"),fontSize:Tt("BodySmall.fontSize"),fontWeight:Tt("BodySmall.fontWeight"),lineHeight:Tt("BodySmall.lineHeight"),letterSpacing:Tt("BodySmall.letterSpacing")},XSmall:{fontFamily:Tt("XSmall.fontFamily"),fontSize:Tt("XSmall.fontSize"),fontWeight:Tt("XSmall.fontWeight"),lineHeight:Tt("XSmall.lineHeight"),letterSpacing:Tt("XSmall.letterSpacing")}},Yt=e=>{switch(e){case 700:case"bold":return At.Bold;case 600:case"semibold":return At.Semibold;case 300:case"light":return At.Light;case 400:case"regular":return At.Regular;default:return""}},Lt=(e,t)=>r=>{var n;const a=zt[e].fontFamily(r),o=zt[e].fontWeight(r);return Object.values(At).includes(a)?c`
                font-family: ${Yt(t)||Yt(o)||a};
                font-weight: normal !important;
            `:c`
            font-family: ${a};
            font-weight: ${null!==(n=Wt(t)||o)&&void 0!==n?n:"normal"};
        `},Wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},It=(e,t,r=!1)=>n=>{const a=zt[e],o=a.fontSize(n);return c`
            ${Lt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${c`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Rt=(e=!1,t=!1,r=void 0)=>t?c`
            display: block;
            ${Nt(r)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Nt(r)}
        `;var jt;!function(e){e.D1=l.h1`
        ${e=>c`
                ${It("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${It("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${It("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${It("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${It("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${It("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${It("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${It("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${It("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${It("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${It("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${It("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${It("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${It("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Vt=l.a`
    ${e=>c`
            ${It(e.textStyle,e.weight)}
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
`,Pt=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=r=>{var{external:n=!1,children:a}=r,o=h(r,["external","children"]);return e(Vt,Object.assign({},o,{children:[a,n&&t(Pt,{})]}))};var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Gt=l.div`
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
        box-shadow: ${Ct};
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
                background: ${Ht.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ht.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border};
                    box-shadow: ${Mt};
                }
            `:void 0}
`;l.input`
    ${It("Body","regular")}
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
`;var Xt={exports:{}};Xt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},i=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=i(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=o&&o.formats;for(var i=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||a[n]||e[n]||a[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=i.length,l=0;l<s;l+=1){var c=i[l],u=d[c],h=u&&u[0],f=u&&u[1];i[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=i[r];if("string"==typeof a)n+=a.length;else{var o=a.regex,l=a.parser,c=e.slice(n),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(i=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,i=e.args;this.$u=n;var s=i[1];if("string"==typeof s){var l=!0===i[2],c=!0===i[3],u=l||c,d=i[2];c&&(d=i[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,o=n.month,i=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,g=i||(a||o?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,F=l||0,v=c||0,$=u||0;return d?new Date(Date.UTC(p,m,g,y,F,v,$+60*d.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,F,v,$)):new Date(p,m,g,y,F,v,$)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){i[1]=s[g-1];var p=r.apply(this,i);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Jt,qt,Kt=g(Xt.exports),Qt={exports:{}},er=g(Qt.exports=(Jt={year:0,month:1,day:2,hour:3,minute:4,second:5},qt={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=qt[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),qt[n]=a),a}(t,r);return a.formatToParts(n)},o=function(e,t){for(var n=a(e,t),o=[],i=0;i<n.length;i+=1){var s=n[i],l=s.type,c=s.value,u=Jt[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},i=t.prototype;i.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),o=this.toDate(),i=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(i))/1e3/60),l=r(i,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},i.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=i.startOf;i.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var i=a&&t,s=a||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=o(n,r);if(t===a)return[n,t];var i=o(n-=60*(a-t)*1e3,r);return a===i?[n,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(r.utc(e,i).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),tr={exports:{}};tr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",o="minute",i="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},F={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),o=r-a<0,i=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-a)/(o?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:i,m:o,s:a,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var D="$isDayjsObject",B=function(e){return e instanceof w||!(!e||!e[D])},S=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(a=o),r&&($[o]=r,a=o);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var s=t.name;$[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},b=function(e,t){if(B(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},x=F;x.l=S,x.i=B,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var a=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return b(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<b(e)},y.$g=function(e,t,r){return x.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!x.u(t)||t,u=x.p(e),f=function(e,t){var a=x.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},g=function(e,t){return x.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(n?y-$:y+(6-$),m);case s:case h:return g(F+"Hours",0);case i:return g(F+"Minutes",1);case o:return g(F+"Seconds",2);case a:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=x.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[i]=u+"Hours",r[o]=u+"Minutes",r[a]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var g=x.p(u),p=function(e){var t=b(f);return x.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===d)return this.set(d,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[o]=t,h[i]=r,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),o=this.$H,i=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,a,o){return e&&(e[r]||e(t,n))||a[r].slice(0,o)},h=function(e){return x.s(o%12||12,e,"0")},g=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return x.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,i,!0);case"A":return g(o,i,!1);case"m":return String(i);case"mm":return x.s(i,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=this,m=x.p(h),y=b(n),F=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return x.m(p,y)};switch(m){case d:g=$()/12;break;case c:g=$();break;case u:g=$()/3;break;case l:g=(v-F)/6048e5;break;case s:g=(v-F)/864e5;break;case i:g=v/r;break;case o:g=v/t;break;case a:g=v/e;break;default:g=v}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),E=w.prototype;return b.prototype=E,[["$ms",n],["$s",a],["$m",o],["$H",i],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,w,b),e.$i=!0),b},b.locale=S,b.isDayjs=B,b.unix=function(e){return b(1e3*e)},b.en=$[v],b.Ls=$,b.p={},b}();var rr=g(tr.exports),nr={exports:{}};nr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var o=r(e),i=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(i,n):!this.isAfter(i,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(i,n):!this.isBefore(i,n))}};var ar=g(nr.exports),or={exports:{}};or.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ir=g(or.exports),sr={exports:{}};sr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var lr,cr=g(sr.exports);rr.extend(ar),rr.extend(ir),rr.extend(cr),rr.extend(Kt),rr.extend(er),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=rr(t).startOf("week");return ur(r).map((e=>dr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return dr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(rr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+rr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=rr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,a)=>{const o=e.isWithinRange(t,n?rr(n):void 0,a?rr(a):void 0),i=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!i}}(lr||(lr={}));const ur=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},dr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},hr=[1,3,5,7,8,10,12],fr=[4,6,9,11];var gr,pr,mr,yr;function Fr({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,a=t(n),o=n.substring(0,r.selectionEnd),i=t(o),s=o.length-i.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(l,l)}}}}!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),o=parseInt(r),i=parseInt(n);return 0==a?"1":hr.includes(o)?Math.min(a,31).toString():fr.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=rr(e,r);return rr(t,r).diff(n,"minute")},e.toDayjs=e=>e?rr(e):rr(),e.addMinutesToTime=(e,t,r="HH:mm")=>rr(e,r).add(t,"minutes").format(r)}(gr||(gr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!rr(e).isBefore(n,"day"))||!(!a||!rr(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(rr(e).isValid())return e}return""}}(pr||(pr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(mr||(mr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/a));const i=n+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:o="•",maskRegex:i,maskTransformer:s}=r;if(s)return s(e);if(i)return e.replace(i,o);if(n){const{startIndex:r,endIndex:a}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,a+1).length)+e.substring(a+1)}if(a){const{startIndex:r,endIndex:n}=t(a[0],a[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(yr||(yr={}));const vr=l.input`
    ${It("Body","regular")}
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
`,$r=l.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ht.Neutral[3]};
    background-color: transparent;
    border: none;
`,Dr=l(d)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Br=l.div`
    display: flex;
    width: 100%;
`,Sr=n.forwardRef(((n,i)=>{var{value:s,spacing:l,type:c,error:u,disabled:d,readOnly:f,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:F="bordered"}=n,v=h(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=a();o(i,(()=>$.current),[]);const D=Fr({ref:$,formatter:e=>yr.transformWithSpaces(e,l)}),B=e=>{g&&(b()?x(e):g(e))},S=()=>{p&&p(),$&&$.current&&$.current.focus()},b=()=>"tel"===c&&l,x=e=>{const{nextValue:t,updateCaretPosition:r}=D(),n=t.replace(/\s/g,"");e.target.value=n,g(e),r()},w=s?(e=>e?b()?yr.transformWithSpaces(e,l):e:"")(s):s,E=()=>e(r,{children:[t(vr,Object.assign({"data-testid":"input",ref:$,disabled:d,value:w,onChange:B,type:c,readOnly:f},v)),m&&!d&&!f&&!!s&&t($r,Object.assign({onClick:S,type:"button"},{children:t(Dr,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===F?t(Br,Object.assign({className:y},{children:E()})):t(Gt,Object.assign({$disabled:d,$error:u,$readOnly:f,className:y},{children:E()}))})}));l.div`
    display: flex;
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
        box-shadow: ${Ct};
    }

    ${e=>e.$readOnly?c`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?c`
                background: ${Ht.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${Mt};
                }
            `:void 0}
`,l(Sr)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;const br=l.div`
    position: relative;
    display: flex;
    align-items: center;

    ${It("Body","regular")}
    color: ${Ht.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ht.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return c`
                color: ${Ht.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ht.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?c`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:c`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`,xr=l(br)`
    margin-right: 0.25rem;
`,wr=l(Sr)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,Er=l(wr)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,Hr=l(jt.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return c`
                color: ${Ht.Neutral[3]};
            `}}
`,Or=l.div`
    display: flex;
`,kr=l(jt.Body)`
    ${e=>{if(e.$inactive)return c`
                color: ${Ht.Neutral[3]};
            `}}
`,Cr=n=>{var{disabled:o,error:l,value:c,onChange:u,onBlur:d,onChangeRaw:f,onBlurRaw:g,readOnly:p,placeholder:m="00-8888"}=n,y=h(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder"]);const[F,v]=i(""),[$,D]=i(""),[B,S]=i("none"),b=a(null),x=a(null),w=a(null),E=a(F),H=a($),O=a(B),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),C=Fr({ref:x,formatter:k}),M=Fr({ref:w,formatter:k}),A=e=>{E.current=e,v(e)},_=e=>{H.current=e,D(e)},T=e=>{O.current=e,S(e)};s((()=>{"floor"===B&&3===F.length&&w.current&&w.current.focus()}),[F]),s((()=>{I(c)}),[c]);const z=e=>{T(e.target.name),e.target.select()},Y=e=>{const t=e.target.name,r=e.target.value,n=N(r);"floor"===t?(A(n),n!==F&&R(n,t)):(_(n),n!==$&&R(n,t))},L=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:r}=C();r(),A(e),R(e,t)}else{const{nextValue:e,updateCaretPosition:r}=M();r(),_(e),R(e,t)}},W=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===B&&0===$.length&&x.current.focus()},N=e=>/^[0-9]$/.test(e)?yr.padValue(e,!0):e.toLocaleUpperCase(),I=e=>{if(e!==Mr)if(void 0===e||0===e.length)A(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];A("floor"===B?e:N(e)),_("unit"===B?r:N(r))}}},R=(e,t)=>{if(!u&&!f)return;const r={floor:E.current,unit:H.current};if(r[t]=e,u){const e=V(r);u(e)}f&&f([r.floor,r.unit])},j=()=>{if(!d&&!g)return;const e={floor:N(E.current),unit:N(H.current)};if(d){const t=V(e);d(t)}g&&g([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":Mr},P=e=>e.split("-");return e(Gt,Object.assign({},y,{ref:b,onClick:()=>{"none"===B&&x.current&&x.current.focus()},$disabled:o,$error:l,$readOnly:p,tabIndex:-1,onBlur:e=>{b.current&&b.current.contains(e.relatedTarget)||"none"!==O.current&&(T("none"),j())}},{children:[t(xr,Object.assign({"data-testid":"addon",disabled:o,$readOnly:p},{children:"#"})),p&&c?(()=>{const r=c.split("-");return e(Or,{children:[t(kr,{children:r[0]}),t(Hr,{children:"-"}),t(kr,{children:r[1]})]})})():e(r,{children:[t(wr,{name:"floor",maxLength:3,value:F,ref:x,onFocus:z,onBlur:Y,onChange:L,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==B||p?P(m)[0]:""}),t(Hr,Object.assign({$inactive:0===F.length},{children:"-"})),t(Er,{name:"unit",maxLength:5,value:$,ref:w,onFocus:z,onBlur:Y,onChange:L,onKeyDown:W,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==B||p?P(m)[1]:""})]})]}))},Mr="Invalid unit number";export{Cr as UnitNumberInput};
//# sourceMappingURL=index.js.map
