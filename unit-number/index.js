import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as a,useImperativeHandle as o,useState as i,useEffect as l}from"react";import s,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as d}from"@lifesg/react-icons/cross";function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,m="object"==typeof f&&f&&f.Object===Object&&f,F="object"==typeof self&&self&&self.Object===Object&&self,y=m||F||Function("return this")(),B=y.Symbol,v=B,D=Object.prototype,$=D.hasOwnProperty,S=D.toString,b=v?v.toStringTag:void 0;var x=function(e){var t=$.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var a=S.call(e);return r&&(t?e[b]=n:delete e[b]),a},w=Object.prototype.toString;var E=x,H=function(e){return w.call(e)},C=B?B.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":C&&C in Object(e)?E(e):H(e)};var O=k,A=function(e){return null!=e&&"object"==typeof e};var M=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==O(e)},z=p,_=M,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var W=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(Y.test(e)||!T.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},I=k,N=L;var R,j=function(e){if(!N(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=y["__core-js_shared__"],V=(R=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var Z=function(e){return!!V&&V in e},G=Function.prototype.toString;var U=j,X=Z,J=L,q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!J(e)||X(e))&&(U(e)?re:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=oe(e,t);return ae(n)?n:void 0},le=ie(Object,"create"),se=le;var ce=function(){this.__data__=se?se(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=le,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(de){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},ge=le,pe=Object.prototype.hasOwnProperty;var me=le;var Fe=ce,ye=ue,Be=fe,ve=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},De=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=Fe,$e.prototype.delete=ye,$e.prototype.get=Be,$e.prototype.has=ve,$e.prototype.set=De;var Se=$e;var be=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},Ee=we,He=Array.prototype.splice;var Ce=we;var ke=we;var Oe=we;var Ae=be,Me=function(e){var t=this.__data__,n=Ee(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=Ce(t,e);return n<0?void 0:t[n][1]},_e=function(e){return ke(this.__data__,e)>-1},Te=function(e,t){var n=this.__data__,r=Oe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Ae,Ye.prototype.delete=Me,Ye.prototype.get=ze,Ye.prototype.has=_e,Ye.prototype.set=Te;var We=Ye,Le=ie(y,"Map"),Ie=Se,Ne=We,Re=Le;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Pe;var Ze=Pe;var Ge=Pe;var Ue=Pe;var Xe=function(){this.size=0,this.__data__={hash:new Ie,map:new(Re||Ne),string:new Ie}},Je=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ze(this,e).get(e)},Ke=function(e){return Ge(this,e).has(e)},Qe=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Xe,et.prototype.delete=Je,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,n,r,a){t.push(r?a.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},st=p,ct=M,ut=B?B.prototype:void 0,dt=ut?ut.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(st(t))return lt(t,e)+"";if(ct(t))return dt?dt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ft=ht;var gt=p,pt=W,mt=it,Ft=function(e){return null==e?"":ft(e)};var yt=M;var Bt=function(e,t){return gt(e)?e:pt(e,t)?[e]:mt(Ft(e))},vt=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var n=0,r=(t=Bt(t,e)).length;null!=e&&n<r;)e=e[vt(t[n++])];return n&&n==r?e:void 0};var $t=g((function(e,t,n){var r=null==e?void 0:Dt(e,t);return void 0===r?n:r}));const St=(e,t,n)=>t?$t(n,t)||$t(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return $t(e.collections,n)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const n=t.theme,r=bt(wt,n[xt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},Ht={Brand:{1:Et("Brand.1"),2:Et("Brand.2"),3:Et("Brand.3"),4:Et("Brand.4"),5:Et("Brand.5"),6:Et("Brand.6")},Primary:Et("Primary"),PrimaryDark:Et("PrimaryDark"),Secondary:Et("Secondary"),Accent:{Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Neutral:{1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},Validation:{Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Shadow:{Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")}},Ct={collections:{base:{InputBoxShadow:c`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},kt=e=>t=>{var n;const r=t.theme,a=bt(Ct,r[xt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?St(a,e,r.options.designToken):St(a,e)},Ot=kt("InputBoxShadow"),At=kt("InputErrorBoxShadow"),Mt=(kt("ElevationBoxShadow"),kt("Table.Header"),kt("Table.Cell.Primary"),kt("Table.Cell.Secondary"),kt("Table.Cell.Selected"),kt("Table.Cell.Hover"),kt("Button.Danger.BackgroundColor"),kt("Button.Danger.Hover"),kt("Button.Danger.Primary"),kt("Button.Danger.Border"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),zt={collections:{base:{D1:{fontFamily:Mt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Mt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Mt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Mt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Mt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Mt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Mt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Mt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Mt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Mt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Mt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=bt(zt,n[xt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},Tt={D1:{fontFamily:_t("D1.fontFamily"),fontSize:_t("D1.fontSize"),fontWeight:_t("D1.fontWeight"),lineHeight:_t("D1.lineHeight"),letterSpacing:_t("D1.letterSpacing")},D2:{fontFamily:_t("D2.fontFamily"),fontSize:_t("D2.fontSize"),fontWeight:_t("D2.fontWeight"),lineHeight:_t("D2.lineHeight"),letterSpacing:_t("D2.letterSpacing")},D3:{fontFamily:_t("D3.fontFamily"),fontSize:_t("D3.fontSize"),fontWeight:_t("D3.fontWeight"),lineHeight:_t("D3.lineHeight"),letterSpacing:_t("D3.letterSpacing")},D4:{fontFamily:_t("D4.fontFamily"),fontSize:_t("D4.fontSize"),fontWeight:_t("D4.fontWeight"),lineHeight:_t("D4.lineHeight"),letterSpacing:_t("D4.letterSpacing")},DBody:{fontFamily:_t("DBody.fontFamily"),fontSize:_t("DBody.fontSize"),fontWeight:_t("DBody.fontWeight"),lineHeight:_t("DBody.lineHeight"),letterSpacing:_t("DBody.letterSpacing")},H1:{fontFamily:_t("H1.fontFamily"),fontSize:_t("H1.fontSize"),fontWeight:_t("H1.fontWeight"),lineHeight:_t("H1.lineHeight"),letterSpacing:_t("H1.letterSpacing")},H2:{fontFamily:_t("H2.fontFamily"),fontSize:_t("H2.fontSize"),fontWeight:_t("H2.fontWeight"),lineHeight:_t("H2.lineHeight"),letterSpacing:_t("H2.letterSpacing")},H3:{fontFamily:_t("H3.fontFamily"),fontSize:_t("H3.fontSize"),fontWeight:_t("H3.fontWeight"),lineHeight:_t("H3.lineHeight"),letterSpacing:_t("H3.letterSpacing")},H4:{fontFamily:_t("H4.fontFamily"),fontSize:_t("H4.fontSize"),fontWeight:_t("H4.fontWeight"),lineHeight:_t("H4.lineHeight"),letterSpacing:_t("H4.letterSpacing")},H5:{fontFamily:_t("H5.fontFamily"),fontSize:_t("H5.fontSize"),fontWeight:_t("H5.fontWeight"),lineHeight:_t("H5.lineHeight"),letterSpacing:_t("H5.letterSpacing")},H6:{fontFamily:_t("H6.fontFamily"),fontSize:_t("H6.fontSize"),fontWeight:_t("H6.fontWeight"),lineHeight:_t("H6.lineHeight"),letterSpacing:_t("H6.letterSpacing")},Body:{fontFamily:_t("Body.fontFamily"),fontSize:_t("Body.fontSize"),fontWeight:_t("Body.fontWeight"),lineHeight:_t("Body.lineHeight"),letterSpacing:_t("Body.letterSpacing")},BodySmall:{fontFamily:_t("BodySmall.fontFamily"),fontSize:_t("BodySmall.fontSize"),fontWeight:_t("BodySmall.fontWeight"),lineHeight:_t("BodySmall.lineHeight"),letterSpacing:_t("BodySmall.letterSpacing")},XSmall:{fontFamily:_t("XSmall.fontFamily"),fontSize:_t("XSmall.fontSize"),fontWeight:_t("XSmall.fontWeight"),lineHeight:_t("XSmall.lineHeight"),letterSpacing:_t("XSmall.letterSpacing")}},Yt=e=>{switch(e){case 700:case"bold":return Mt.Bold;case 600:case"semibold":return Mt.Semibold;case 300:case"light":return Mt.Light;case 400:case"regular":return Mt.Regular;default:return""}},Wt=(e,t)=>n=>{var r;const a=Tt[e].fontFamily(n),o=Tt[e].fontWeight(n);return Object.values(Mt).includes(a)?c`
                font-family: ${Yt(t)||Yt(o)||a};
                font-weight: normal !important;
            `:c`
            font-family: ${a};
            font-weight: ${null!==(r=Lt(t)||o)&&void 0!==r?r:"normal"};
        `},Lt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},It=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Nt=(e,t,n=!1)=>r=>{const a=Tt[e],o=a.fontSize(r);return c`
            ${Wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Rt=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${It(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${It(n)}
        `;var jt;!function(e){e.D1=s.h1`
        ${e=>c`
                ${Nt("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${Nt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${Nt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${Nt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${Nt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${Nt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${Nt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${Nt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${Nt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${Nt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${Nt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${Nt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${Nt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${Nt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Pt=s.a`
    ${e=>c`
            ${Nt(e.textStyle,e.weight)}
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
`,Vt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=n=>{var{external:r=!1,children:a}=n,o=h(n,["external","children"]);return e(Pt,Object.assign({},o,{children:[a,r&&t(Vt,{})]}))};var Gt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gt||(Gt={}));const Ut=c`
    border: 1px solid ${Ht.Accent.Light[1]};
    box-shadow: ${Ot};
`,Xt=c`
    border: 1px solid ${Ht.Accent.Light[1]};
    box-shadow: none;
`,Jt=c`
    border: 1px solid ${Ht.Neutral[5]};
    box-shadow: none;
`,qt=c`
    border: 1px solid ${Ht.Validation.Red.Border};
    box-shadow: ${At};
`,Kt=s.div`
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};

    :focus-within {
        ${Ut}
    }
    ${e=>e.$focused&&Ut}

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Xt}
                }
                ${e.$focused&&Xt}
            `:e.$disabled?c`
                background: ${Ht.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Jt}
                }
                ${e.$focused&&Jt}
            `:e.$error?c`
                border: 1px solid ${Ht.Validation.Red.Border};

                :focus-within {
                    ${qt}
                }
                ${e.$focused&&qt}
            `:void 0}
`,Qt=s(Kt)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;s.input`
    ${e=>Nt("small"===e.$variant?"BodySmall":"Body","regular")}
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
`,s.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Ht.Primary};
    }
`;var en={exports:{}};en.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},i=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=i(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,a;r=n,a=o&&o.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||a[r]||e[r]||a[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=i.length,s=0;s<l;s+=1){var c=i[s],u=d[c],h=u&&u[0],f=u&&u[1];i[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=i[n];if("string"==typeof a)r+=a.length;else{var o=a.regex,s=a.parser,c=e.slice(r),u=o.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(i=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var l=i[1];if("string"==typeof l){var s=!0===i[2],c=!0===i[3],u=s||c,d=i[2];c&&(d=i[2]),o=this.$locale(),!s&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,o=r.month,i=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=i||(a||o?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!o||(m=o>0?o-1:f.getMonth());var F=l||0,y=s||0,B=c||0,v=u||0;return d?new Date(Date.UTC(p,m,g,F,y,B,v+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,F,y,B,v)):new Date(p,m,g,F,y,B,v)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){i[1]=l[g-1];var p=n.apply(this,i);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var tn,nn,rn=g(en.exports),an={exports:{}},on=g(an.exports=(tn={year:0,month:1,day:2,hour:3,minute:4,second:5},nn={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=nn[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),nn[r]=a),a}(t,n);return a.formatToParts(r)},o=function(e,t){for(var r=a(e,t),o=[],i=0;i<r.length;i+=1){var l=r[i],s=l.type,c=l.value,u=tn[s];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},i=t.prototype;i.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),o=this.toDate(),i=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(i))/1e3/60),s=n(i,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(a-c,"minute")}return s.$x.$timezone=e,s},i.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=i.startOf;i.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var i=a&&t,l=a||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(n.utc(e,i).valueOf(),s,l),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),ln={exports:{}};ln.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",o="minute",i="hour",l="day",s="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},F=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:F,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+F(r,2,"0")+":"+F(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),o=n-a<0,i=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-a)/(o?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:h,h:i,m:o,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},B="en",v={};v[B]=m;var D="$isDayjsObject",$=function(e){return e instanceof w||!(!e||!e[D])},S=function e(t,n,r){var a;if(!t)return B;if("string"==typeof t){var o=t.toLowerCase();v[o]&&(a=o),n&&(v[o]=n,a=o);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var l=t.name;v[l]=t,a=l}return!r&&a&&(B=a),a||!r&&B},b=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},x=y;x.l=S,x.i=$,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var F=m.prototype;return F.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},F.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},F.$utils=function(){return x},F.isValid=function(){return!(this.$d.toString()===f)},F.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},F.isAfter=function(e,t){return b(e)<this.startOf(t)},F.isBefore=function(e,t){return this.endOf(t)<b(e)},F.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var B=this.$locale().weekStart||0,v=(p<B?p+7:p)-B;return f(r?F-v:F+(6-v),m);case l:case h:return g(y+"Hours",0);case i:return g(y+"Minutes",1);case o:return g(y+"Seconds",2);case a:return g(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(e){return this.startOf(e,!1)},F.$set=function(e,t){var n,s=x.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[o]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},F.set=function(e,t){return this.clone().$set(e,t)},F.get=function(e){return this[x.p(e)]()},F.add=function(r,u){var h,f=this;r=Number(r);var g=x.p(u),p=function(e){var t=b(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[o]=t,h[i]=n,h[a]=e,h)[g]||1,F=this.$d.getTime()+r*m;return x.w(F,this)},F.subtract=function(e,t){return this.add(-1*e,t)},F.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),o=this.$H,i=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,a,o){return e&&(e[n]||e(t,r))||a[n].slice(0,o)},h=function(e){return x.s(o%12||12,e,"0")},g=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(o);case"HH":return x.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,i,!0);case"A":return g(o,i,!1);case"m":return String(i);case"mm":return x.s(i,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,h,f){var g,p=this,m=x.p(h),F=b(r),y=(F.utcOffset()-this.utcOffset())*t,B=this-F,v=function(){return x.m(p,F)};switch(m){case d:g=v()/12;break;case c:g=v();break;case u:g=v()/3;break;case s:g=(B-y)/6048e5;break;case l:g=(B-y)/864e5;break;case i:g=B/n;break;case o:g=B/t;break;case a:g=B/e;break;default:g=B}return f?g:x.a(g)},F.daysInMonth=function(){return this.endOf(c).$D},F.$locale=function(){return v[this.$L]},F.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},F.clone=function(){return x.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),E=w.prototype;return b.prototype=E,[["$ms",r],["$s",a],["$m",o],["$H",i],["$W",l],["$M",c],["$y",d],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,w,b),e.$i=!0),b},b.locale=S,b.isDayjs=$,b.unix=function(e){return b(1e3*e)},b.en=v[B],b.Ls=v,b.p={},b}();var sn=g(ln.exports),cn={exports:{}};cn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var o=n(e),i=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(i,r):!this.isAfter(i,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(i,r):!this.isBefore(i,r))}};var un=g(cn.exports),dn={exports:{}};dn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var hn=g(dn.exports),fn={exports:{}};fn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var gn,pn=g(fn.exports);sn.extend(un),sn.extend(hn),sn.extend(pn),sn.extend(rn),sn.extend(on),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=sn(t).startOf("week");return mn(n).map((e=>Fn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Fn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(sn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+sn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=sn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const o=e.isWithinRange(t,r?sn(r):void 0,a?sn(a):void 0),i=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!i}}(gn||(gn={}));const mn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Fn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},yn=[1,3,5,7,8,10,12],Bn=[4,6,9,11];var vn,Dn,$n,Sn;function bn({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,a=t(r),o=r.substring(0,n.selectionEnd),i=t(o),l=o.length-i.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:a,updateCaretPosition:()=>{n.value=a,n.setSelectionRange(s,s)}}}}!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),o=parseInt(n),i=parseInt(r);return 0==a?"1":yn.includes(o)?Math.min(a,31).toString():Bn.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=sn(e,n);return sn(t,n).diff(r,"minute")},e.toDayjs=e=>e?sn(e):sn(),e.addMinutesToTime=(e,t,n="HH:mm")=>sn(e,n).add(t,"minutes").format(n)}(vn||(vn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!sn(e).isBefore(r,"day"))||!(!a||!sn(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(sn(e).isValid())return e}return""}}(Dn||(Dn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}($n||($n={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/a));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:o="•",maskRegex:i,maskTransformer:l}=n;if(l)return l(e);if(i)return e.replace(i,o);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Sn||(Sn={}));const xn=s.input`
    ${Nt("Body","regular")}
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
`,wn=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ht.Neutral[3]};
    background-color: transparent;
    border: none;
`,En=s(d)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Hn=s.div`
    display: flex;
    width: 100%;
`,Cn=r.forwardRef(((r,i)=>{var{value:l,spacing:s,type:c,error:u,disabled:d,readOnly:f,onChange:g,onClear:p,allowClear:m=!1,className:F,styleType:y="bordered"}=r,B=h(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=a();o(i,(()=>v.current),[]);const D=bn({ref:v,formatter:e=>Sn.transformWithSpaces(e,s)}),$=e=>{g&&(b()?x(e):g(e))},S=()=>{p&&p(),v&&v.current&&v.current.focus()},b=()=>"tel"===c&&s,x=e=>{const{nextValue:t,updateCaretPosition:n}=D(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=l?(e=>e?b()?Sn.transformWithSpaces(e,s):e:"")(l):l,E=()=>e(n,{children:[t(xn,Object.assign({"data-testid":"input",ref:v,disabled:d,value:w,onChange:$,type:c,readOnly:f},B)),m&&!d&&!f&&!!l&&t(wn,Object.assign({onClick:S,type:"button"},{children:t(En,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(Hn,Object.assign({className:F},{children:E()})):t(Qt,Object.assign({$disabled:d,$error:u,$readOnly:f,className:F},{children:E()}))})}));s.div`
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
        box-shadow: ${Ot};
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
                    box-shadow: ${At};
                }
            `:void 0}
`,s(Cn)`
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
`;const kn=s.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Nt("Body","regular")}
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
`,On=s(kn)`
    margin-right: 0.25rem;
`,An=s(Cn)`
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
`,Mn=s(An)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,zn=s(jt.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return c`
                color: ${Ht.Neutral[3]};
            `}}
`,_n=s.div`
    display: flex;
`,Tn=s(jt.Body)`
    ${e=>{if(e.$inactive)return c`
                color: ${Ht.Neutral[3]};
            `}}
`,Yn=r=>{var{disabled:o,error:s,value:c,onChange:u,onBlur:d,onChangeRaw:f,onBlurRaw:g,readOnly:p,placeholder:m="00-8888"}=r,F=h(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder"]);const[y,B]=i(""),[v,D]=i(""),[$,S]=i("none"),b=a(null),x=a(null),w=a(null),E=a(y),H=a(v),C=a($),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),O=bn({ref:x,formatter:k}),A=bn({ref:w,formatter:k}),M=e=>{E.current=e,B(e)},z=e=>{H.current=e,D(e)},_=e=>{C.current=e,S(e)};l((()=>{"floor"===$&&3===y.length&&w.current&&w.current.focus()}),[y]),l((()=>{N(c)}),[c]);const T=e=>{_(e.target.name),e.target.select()},Y=e=>{const t=e.target.name,n=e.target.value,r=I(n);"floor"===t?(M(r),r!==y&&R(r,t)):(z(r),r!==v&&R(r,t))},W=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=O();n(),M(e),R(e,t)}else{const{nextValue:e,updateCaretPosition:n}=A();n(),z(e),R(e,t)}},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===v.length&&x.current.focus()},I=e=>/^[0-9]$/.test(e)?Sn.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==Wn)if(void 0===e||0===e.length)M(""),z("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];M("floor"===$?e:I(e)),z("unit"===$?n:I(n))}}},R=(e,t)=>{if(!u&&!f)return;const n={floor:E.current,unit:H.current};if(n[t]=e,u){const e=P(n);u(e)}f&&f([n.floor,n.unit])},j=()=>{if(!d&&!g)return;const e={floor:I(E.current),unit:I(H.current)};if(d){const t=P(e);d(t)}g&&g([e.floor,e.unit])},P=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":Wn},V=e=>e.split("-");return e(Qt,Object.assign({},F,{ref:b,onClick:()=>{"none"===$&&x.current&&x.current.focus()},$disabled:o,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{b.current&&b.current.contains(e.relatedTarget)||"none"!==C.current&&(_("none"),j())}},{children:[t(On,Object.assign({"data-testid":"addon",disabled:o,$readOnly:p},{children:"#"})),p&&c?(()=>{const n=c.split("-");return e(_n,{children:[t(Tn,{children:n[0]}),t(zn,{children:"-"}),t(Tn,{children:n[1]})]})})():e(n,{children:[t(An,{name:"floor",maxLength:3,value:y,ref:x,onFocus:T,onBlur:Y,onChange:W,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?V(m)[0]:""}),t(zn,Object.assign({$inactive:0===y.length},{children:"-"})),t(Mn,{name:"unit",maxLength:5,value:v,ref:w,onFocus:T,onBlur:Y,onChange:W,onKeyDown:L,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?V(m)[1]:""})]})]}))},Wn="Invalid unit number";export{Yn as UnitNumberInput};
//# sourceMappingURL=index.js.map
