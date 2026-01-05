import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import a,{useState as r,useEffect as o}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u=Array.isArray,s="object"==typeof d&&d&&d.Object===Object&&d,h="object"==typeof self&&self&&self.Object===Object&&self,F=s||h||Function("return this")(),p=F.Symbol,B=p,S=Object.prototype,m=S.hasOwnProperty,y=S.toString,D=B?B.toStringTag:void 0;var v=function(e){var t=m.call(e,D),n=e[D];try{e[D]=void 0;var a=!0}catch(e){}var r=y.call(e);return a&&(t?e[D]=n:delete e[D]),r},H=Object.prototype.toString;var b=v,E=function(e){return H.call(e)},x=p?p.toStringTag:void 0;var $=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?b(e):E(e)};var C=$,A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==C(e)},O=u,w=k,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;var _=function(e,t){if(O(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!w(e))||(V.test(e)||!z.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=$,T=W;var j,L=function(e){if(!T(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=F["__core-js_shared__"],I=(j=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var N=function(e){return!!I&&I in e},J=Function.prototype.toString;var G=L,X=N,M=W,q=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,U=Function.prototype,Q=Object.prototype,Y=U.toString,Z=Q.hasOwnProperty,ee=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!M(e)||X(e))&&(G(e)?ee:K).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=ne(e,t);return te(n)?n:void 0},re=ae(Object,"create"),oe=re;var ie=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=re,ge=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},fe=re,ue=Object.prototype.hasOwnProperty;var se=re;var he=ie,Fe=le,pe=de,Be=function(e){var t=this.__data__;return fe?void 0!==t[e]:ue.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}me.prototype.clear=he,me.prototype.delete=Fe,me.prototype.get=pe,me.prototype.has=Be,me.prototype.set=Se;var ye=me;var De=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1},be=He,Ee=Array.prototype.splice;var xe=He;var $e=He;var Ce=He;var Ae=De,ke=function(e){var t=this.__data__,n=be(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},Oe=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},we=function(e){return $e(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,a=Ce(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function Ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ve.prototype.clear=Ae,Ve.prototype.delete=ke,Ve.prototype.get=Oe,Ve.prototype.has=we,Ve.prototype.set=ze;var _e=Ve,We=ae(F,"Map"),Pe=ye,Te=_e,je=We;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Re;var Ne=Re;var Je=Re;var Ge=Re;var Xe=function(){this.size=0,this.__data__={hash:new Pe,map:new(je||Te),string:new Pe}},Me=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ne(this,e).get(e)},Ke=function(e){return Je(this,e).has(e)},Ue=function(e,t){var n=Ge(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Qe.prototype.clear=Xe,Qe.prototype.delete=Me,Qe.prototype.get=qe,Qe.prototype.has=Ke,Qe.prototype.set=Ue;var Ye=Qe;function Ze(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var i=e.apply(this,a);return n.cache=o.set(r,i)||o,i};return n.cache=new(Ze.Cache||Ye),n}Ze.Cache=Ye;var et=Ze;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,at=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,a,r){t.push(a?r.replace(nt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},ot=u,it=k,lt=p?p.prototype:void 0,ct=lt?lt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(ot(t))return rt(t,e)+"";if(it(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},dt=gt;var ft=u,ut=_,st=at,ht=function(e){return null==e?"":dt(e)};var Ft=k;var pt=function(e,t){return ft(e)?e:ut(e,t)?[e]:st(ht(e))},Bt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var n=0,a=(t=pt(t,e)).length;null!=e&&n<a;)e=e[Bt(t[n++])];return n&&n==a?e:void 0};var mt=f((function(e,t,n){var a=null==e?void 0:St(e,t);return void 0===a?n:a}));const yt=(e,t,n)=>t?mt(n,t)||mt(e,t):n||e,Dt=(e,t)=>{const n=t||e.defaultValue;return mt(e.collections,n)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,a=Dt(Ht,n[vt.colorScheme]);return n.options&&n.options.color?yt(a,e,n.options.color):yt(a,e)},Et={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},xt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},$t={D1:{fontFamily:xt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:xt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:xt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:xt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:xt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:xt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:xt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:xt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:xt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:xt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:xt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:xt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ct={D1:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:xt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:xt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:xt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:xt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:xt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},At={collections:{base:$t,oneservice:{D1:{fontFamily:xt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:xt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:xt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:xt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:xt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:xt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:xt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:xt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:xt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:xt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:xt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:xt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ct},defaultValue:"base"},kt=e=>t=>{const n=t.theme,a=Dt(At,n[vt.textStyleScheme]);return n.options&&n.options.textStyle?yt(a,e,n.options.textStyle):yt(a,e)},Ot={D1:{fontFamily:kt("D1.fontFamily"),fontSize:kt("D1.fontSize"),fontWeight:kt("D1.fontWeight"),lineHeight:kt("D1.lineHeight"),letterSpacing:kt("D1.letterSpacing"),fontVariant:kt("D1.fontVariant")},D2:{fontFamily:kt("D2.fontFamily"),fontSize:kt("D2.fontSize"),fontWeight:kt("D2.fontWeight"),lineHeight:kt("D2.lineHeight"),letterSpacing:kt("D2.letterSpacing"),fontVariant:kt("D2.fontVariant")},D3:{fontFamily:kt("D3.fontFamily"),fontSize:kt("D3.fontSize"),fontWeight:kt("D3.fontWeight"),lineHeight:kt("D3.lineHeight"),letterSpacing:kt("D3.letterSpacing"),fontVariant:kt("D3.fontVariant")},D4:{fontFamily:kt("D4.fontFamily"),fontSize:kt("D4.fontSize"),fontWeight:kt("D4.fontWeight"),lineHeight:kt("D4.lineHeight"),letterSpacing:kt("D4.letterSpacing"),fontVariant:kt("D4.fontVariant")},DBody:{fontFamily:kt("DBody.fontFamily"),fontSize:kt("DBody.fontSize"),fontWeight:kt("DBody.fontWeight"),lineHeight:kt("DBody.lineHeight"),letterSpacing:kt("DBody.letterSpacing"),fontVariant:kt("DBody.fontVariant")},H1:{fontFamily:kt("H1.fontFamily"),fontSize:kt("H1.fontSize"),fontWeight:kt("H1.fontWeight"),lineHeight:kt("H1.lineHeight"),letterSpacing:kt("H1.letterSpacing"),fontVariant:kt("H1.fontVariant")},H2:{fontFamily:kt("H2.fontFamily"),fontSize:kt("H2.fontSize"),fontWeight:kt("H2.fontWeight"),lineHeight:kt("H2.lineHeight"),letterSpacing:kt("H2.letterSpacing"),fontVariant:kt("H2.fontVariant")},H3:{fontFamily:kt("H3.fontFamily"),fontSize:kt("H3.fontSize"),fontWeight:kt("H3.fontWeight"),lineHeight:kt("H3.lineHeight"),letterSpacing:kt("H3.letterSpacing"),fontVariant:kt("H3.fontVariant")},H4:{fontFamily:kt("H4.fontFamily"),fontSize:kt("H4.fontSize"),fontWeight:kt("H4.fontWeight"),lineHeight:kt("H4.lineHeight"),letterSpacing:kt("H4.letterSpacing"),fontVariant:kt("H4.fontVariant")},H5:{fontFamily:kt("H5.fontFamily"),fontSize:kt("H5.fontSize"),fontWeight:kt("H5.fontWeight"),lineHeight:kt("H5.lineHeight"),letterSpacing:kt("H5.letterSpacing"),fontVariant:kt("H5.fontVariant")},H6:{fontFamily:kt("H6.fontFamily"),fontSize:kt("H6.fontSize"),fontWeight:kt("H6.fontWeight"),lineHeight:kt("H6.lineHeight"),letterSpacing:kt("H6.letterSpacing"),fontVariant:kt("H6.fontVariant")},Body:{fontFamily:kt("Body.fontFamily"),fontSize:kt("Body.fontSize"),fontWeight:kt("Body.fontWeight"),lineHeight:kt("Body.lineHeight"),letterSpacing:kt("Body.letterSpacing"),fontVariant:kt("Body.fontVariant")},BodySmall:{fontFamily:kt("BodySmall.fontFamily"),fontSize:kt("BodySmall.fontSize"),fontWeight:kt("BodySmall.fontWeight"),lineHeight:kt("BodySmall.lineHeight"),letterSpacing:kt("BodySmall.letterSpacing"),fontVariant:kt("BodySmall.fontVariant")},XSmall:{fontFamily:kt("XSmall.fontFamily"),fontSize:kt("XSmall.fontSize"),fontWeight:kt("XSmall.fontWeight"),lineHeight:kt("XSmall.lineHeight"),letterSpacing:kt("XSmall.letterSpacing"),fontVariant:kt("XSmall.fontVariant")}},wt=[xt.OpenSans,xt.PlusJakartaSans],zt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Vt=(e,t)=>n=>{var a;const r=Ot[e].fontFamily(n),o=Ot[e].fontWeight(n),i=wt.find((e=>Object.values(e).includes(r)));return i?l`
                font-family: ${zt(i,t)||zt(i,o)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${null!==(a=_t(t)||o)&&void 0!==a?a:"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pt=(e,t,n=!1)=>a=>{const r=Ot[e],o=r.fontSize(a);return l`
            ${Vt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(a)||0}rem !important;
            font-variant: ${r.fontVariant(a)||"normal"};
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Wt(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Wt(n)}
        `;var jt;!function(e){e.D1=i.h1`
        ${e=>l`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>It(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>It(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Lt=i.a`
    ${e=>l`
            ${Pt(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,Rt=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=n=>{var{external:a=!1,children:r}=n,o=g(n,["external","children"]);return e(Lt,Object.assign({},o,{children:[r,a&&t(Rt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const Jt=i(jt.H6)`
    text-align: right;
    color: ${Et.Neutral[3]};

    ${e=>{if(e.disabled)return l`
                color: ${Et.Neutral[4](e)};
            `}}
`,Gt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[g,d]=r("");o((()=>{d(f(`${e||""}`))}),[e,i]);const f=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(n,{children:a.isValidElement(g)?g:t(Jt,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:l},{children:g}))})},Xt={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Mt=e=>t=>{var n;const a=t.theme,r=Dt(Xt,a[vt.designTokenScheme]);return(null===(n=a.options)||void 0===n?void 0:n.designToken)?yt(r,e,a.options.designToken):yt(r,e)},qt=Mt("InputBoxShadow"),Kt=Mt("InputErrorBoxShadow"),Ut=(Mt("ElevationBoxShadow"),Mt("Table.Header"),Mt("Table.Cell.Primary"),Mt("Table.Cell.Secondary"),Mt("Table.Cell.Selected"),Mt("Table.Cell.Hover"),Mt("Button.Danger.BackgroundColor"),Mt("Button.Danger.Hover"),Mt("Button.Danger.Primary"),Mt("Button.Danger.Border"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Qt=i.div`
    display: flex;
    flex-direction: column;
`,Yt=i.textarea`
    border: 1px solid ${Et.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Ut};

    ${Pt("Body","regular")}
    color: ${Et.Neutral[1]};
    background: ${Et.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Et.Accent.Light[1]};
        box-shadow: ${qt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Et.Neutral[3]};
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
                background: ${Et.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Et.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${Et.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Et.Validation.Red.Border(e)};
                    box-shadow: ${Kt};
                }
            `:void 0}
`,Zt=a.forwardRef(((e,n)=>{var{value:a,disabled:i,error:l,rows:c=5,prefix:d,transformValue:f,onChange:u,maxLength:s}=e,h=g(e,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[F,p]=r(a);o((()=>{p(a)}),[a]);return t(Yt,Object.assign({ref:n,disabled:i,value:d?d+(null!=F?F:""):F,onChange:e=>{let t=e.target.value;if(d){t.startsWith(d)||(t=d+t.trimStart()),t.length<d.length&&(t=d);if((e.target.selectionStart||0)<d.length)return void e.preventDefault();const n=t.slice(d.length),a=f?f(n):n;if(p(a),e.target.value=d+a,u){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:a})});u(t)}}else{const n=f?f(null!=t?t:""):t;p(n),e.target.value=n,u&&u(e)}},onKeyDown:e=>{if(!d)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=d.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=d.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(d.length,d.length)})))},error:l,rows:c,maxLength:d?d.length+s:s},h))})),en=a.forwardRef(((n,a)=>{var{value:i,disabled:l,rows:c=5,onChange:d,transformValue:f,prefix:u,maxLength:s,renderCustomCounter:h}=n,F=g(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,B]=r(i);o((()=>{B(i)}),[i]);return e(Qt,{children:[t(Zt,Object.assign({ref:a,disabled:l,value:p,rows:c||5,onChange:e=>{const t=e.target.value;B(t),d&&d(e)},prefix:u,transformValue:f,maxLength:s},F)),s&&t(Gt,{disabled:l,value:p,maxLength:s,renderCustomCounter:h})]})}));export{en as Textarea};
//# sourceMappingURL=index.js.map
