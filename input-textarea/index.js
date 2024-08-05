import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as o,useEffect as a}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u=Array.isArray,h="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,s=h||f||Function("return this")(),B=s.Symbol,p=B,y=Object.prototype,S=y.hasOwnProperty,m=y.toString,D=p?p.toStringTag:void 0;var v=function(e){var t=S.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch(e){}var o=m.call(e);return r&&(t?e[D]=n:delete e[D]),o},b=Object.prototype.toString;var E=v,H=function(e){return b.call(e)},x=B?B.toStringTag:void 0;var $=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?E(e):H(e)};var C=$,A=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==C(e)},k=u,_=w,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var T=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(O.test(e)||!z.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=$,I=W;var L,N=function(e){if(!I(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=s["__core-js_shared__"],P=(L=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var V=function(e){return!!P&&P in e},G=Function.prototype.toString;var X=N,M=V,U=W,q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,Y=K.toString,Z=Q.hasOwnProperty,ee=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(X(e)?ee:J).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},oe=re(Object,"create"),ae=oe;var ie=function(){this.__data__=ae?ae(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=oe,de=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},Fe=oe,ue=Object.prototype.hasOwnProperty;var he=oe;var fe=ie,se=le,Be=ge,pe=function(e){var t=this.__data__;return Fe?void 0!==t[e]:ue.call(t,e)},ye=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=fe,Se.prototype.delete=se,Se.prototype.get=Be,Se.prototype.has=pe,Se.prototype.set=ye;var me=Se;var De=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1},Ee=be,He=Array.prototype.splice;var xe=be;var $e=be;var Ce=be;var Ae=De,we=function(e){var t=this.__data__,n=Ee(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},_e=function(e){return $e(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oe.prototype.clear=Ae,Oe.prototype.delete=we,Oe.prototype.get=ke,Oe.prototype.has=_e,Oe.prototype.set=ze;var Te=Oe,We=re(s,"Map"),je=me,Ie=Te,Le=We;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=Re;var Ve=Re;var Ge=Re;var Xe=Re;var Me=function(){this.size=0,this.__data__={hash:new je,map:new(Le||Ie),string:new je}},Ue=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ve(this,e).get(e)},Je=function(e){return Ge(this,e).has(e)},Ke=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Me,Qe.prototype.delete=Ue,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var Ye=Qe;function Ze(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Ze.Cache||Ye),n}Ze.Cache=Ye;var et=Ze;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,o){t.push(r?o.replace(nt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},at=u,it=w,lt=B?B.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(at(t))return ot(t,e)+"";if(it(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},gt=dt;var Ft=u,ut=T,ht=rt,ft=function(e){return null==e?"":gt(e)};var st=w;var Bt=function(e,t){return Ft(e)?e:ut(e,t)?[e]:ht(ft(e))},pt=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var yt=function(e,t){for(var n=0,r=(t=Bt(t,e)).length;null!=e&&n<r;)e=e[pt(t[n++])];return n&&n==r?e:void 0};var St=F((function(e,t,n){var r=null==e?void 0:yt(e,t);return void 0===r?n:r}));const mt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Dt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const n=t.theme,r=Dt(bt,n[vt.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},Ht={Brand:{1:Et("Brand.1"),2:Et("Brand.2"),3:Et("Brand.3"),4:Et("Brand.4"),5:Et("Brand.5"),6:Et("Brand.6")},Primary:Et("Primary"),PrimaryDark:Et("PrimaryDark"),Secondary:Et("Secondary"),Accent:{Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Neutral:{1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},Validation:{Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Shadow:{Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")}},xt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$t={collections:{base:{D1:{fontFamily:xt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:xt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:xt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:xt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:xt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:xt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:xt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:xt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:xt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:xt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:xt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:xt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:xt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:xt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:xt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:xt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:xt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:xt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:xt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,r=Dt($t,n[vt.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},At={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return xt.Bold;case 600:case"semibold":return xt.Semibold;case 300:case"light":return xt.Light;case 400:case"regular":return xt.Regular;default:return""}},kt=(e,t)=>n=>{var r;const o=At[e].fontFamily(n),a=At[e].fontWeight(n);return Object.values(xt).includes(o)?l`
                font-family: ${wt(t)||wt(a)||o};
                font-weight: normal !important;
            `:l`
            font-family: ${o};
            font-weight: ${null!==(r=_t(t)||a)&&void 0!==r?r:"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ot=(e,t,n=!1)=>r=>{const o=At[e],a=o.fontSize(r);return l`
            ${kt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${zt(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${zt(n)}
        `;var Wt;!function(e){e.D1=i.h1`
        ${e=>l`
                ${Ot("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${Ot("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${Ot("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${Ot("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${Ot("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${Ot("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${Ot("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${Ot("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${Ot("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${Ot("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${Ot("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${Ot("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${Ot("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${Ot("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const jt=i.a`
    ${e=>l`
            ${Ot(e.textStyle,e.weight)}
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
`,It=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:r=!1,children:o}=n,a=d(n,["external","children"]);return e(jt,Object.assign({},a,{children:[o,r&&t(It,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const Rt=i(Wt.H6)`
    text-align: right;
    color: ${Ht.Neutral[3]};

    ${e=>{if(e.disabled)return l`
                color: ${Ht.Neutral[4](e)};
            `}}
`,Pt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[d,g]=o("");a((()=>{g(F(`${e||""}`))}),[e,i]);const F=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(n,{children:r.isValidElement(d)?d:t(Rt,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:l},{children:d}))})},Vt={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Gt=e=>t=>{var n;const r=t.theme,o=Dt(Vt,r[vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?mt(o,e,r.options.designToken):mt(o,e)},Xt=Gt("InputBoxShadow"),Mt=Gt("InputErrorBoxShadow"),Ut=(Gt("ElevationBoxShadow"),Gt("Table.Header"),Gt("Table.Cell.Primary"),Gt("Table.Cell.Secondary"),Gt("Table.Cell.Selected"),Gt("Table.Cell.Hover"),Gt("Button.Danger.BackgroundColor"),Gt("Button.Danger.Hover"),Gt("Button.Danger.Primary"),Gt("Button.Danger.Border"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),qt=i.div`
    display: flex;
    flex-direction: column;
`,Jt=i.textarea`
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Ut};

    ${Ot("Body","regular")}
    color: ${Ht.Neutral[1]};
    background: ${Ht.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Xt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ht.Neutral[3]};
    }

    ${e=>e.readOnly?l`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?l`
                background: ${Ht.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${Mt};
                }
            `:void 0}
`;r.forwardRef(((e,n)=>{var{value:r,disabled:o,error:a,rows:i=5}=e,l=d(e,["value","disabled","error","rows"]);return t(Jt,Object.assign({ref:n,disabled:o,value:r,error:a,rows:i},l))}));const Kt=r.forwardRef(((n,r)=>{var{value:i,disabled:l,rows:c=5,onChange:g}=n,F=d(n,["value","disabled","rows","onChange"]);const[u,h]=o(i);a((()=>{h(i)}),[i]);return e(qt,{children:[t(Jt,Object.assign({ref:r,disabled:l,value:u,rows:c||5,onChange:e=>{const t=e.target.value;F.maxLength&&t.length>F.maxLength||(h(t),e.target.value=t,g&&g(e))}},F)),F.maxLength&&t(Pt,{disabled:l,value:u,maxLength:F.maxLength,renderCustomCounter:F.renderCustomCounter})]})}));export{Kt as Textarea};
//# sourceMappingURL=index.js.map
