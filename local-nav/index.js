import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import i,{useRef as r,useState as a,useImperativeHandle as o,useEffect as l}from"react";import{ChevronDownIcon as c}from"@lifesg/react-icons/chevron-down";import{TickIcon as d}from"@lifesg/react-icons/tick";import s,{css as g}from"styled-components";import{ExternalIcon as h}from"@lifesg/react-icons/external";var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,F="object"==typeof f&&f&&f.Object===Object&&f,m="object"==typeof self&&self&&self.Object===Object&&self,S=F||m||Function("return this")(),y=S.Symbol,B=y,D=Object.prototype,v=D.hasOwnProperty,b=D.toString,H=B?B.toStringTag:void 0;var $=function(e){var t=v.call(e,H),n=e[H];try{e[H]=void 0;var i=!0}catch(e){}var r=b.call(e);return i&&(t?e[H]=n:delete e[H]),r},E=Object.prototype.toString;var x=$,k=function(e){return E.call(e)},w=y?y.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?x(e):k(e)};var O=A,z=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==O(e)},_=p,W=C,P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var j=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(I.test(e)||!P.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=A,T=L;var R,V=function(e){if(!T(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=S["__core-js_shared__"],M=(R=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var G=function(e){return!!M&&M in e},X=Function.prototype.toString;var U=V,q=G,K=L,Q=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Y=/^\[object .+?Constructor\]$/,Z=Function.prototype,ee=Object.prototype,te=Z.toString,ne=ee.hasOwnProperty,ie=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!K(e)||q(e))&&(U(e)?ie:Y).test(Q(e))},ae=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var n=ae(e,t);return re(n)?n:void 0},le=oe(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=le,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},ue=le,pe=Object.prototype.hasOwnProperty;var Fe=le;var me=de,Se=se,ye=fe,Be=function(e){var t=this.__data__;return ue?void 0!==t[e]:pe.call(t,e)},De=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ve.prototype.clear=me,ve.prototype.delete=Se,ve.prototype.get=ye,ve.prototype.has=Be,ve.prototype.set=De;var be=ve;var He=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},xe=Ee,ke=Array.prototype.splice;var we=Ee;var Ae=Ee;var Oe=Ee;var ze=He,Ce=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():ke.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=we(t,e);return n<0?void 0:t[n][1]},We=function(e){return Ae(this.__data__,e)>-1},Pe=function(e,t){var n=this.__data__,i=Oe(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Ie.prototype.clear=ze,Ie.prototype.delete=Ce,Ie.prototype.get=_e,Ie.prototype.has=We,Ie.prototype.set=Pe;var je=Ie,Le=oe(S,"Map"),Ne=be,Te=je,Re=Le;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},Me=Je;var Ge=Je;var Xe=Je;var Ue=Je;var qe=function(){this.size=0,this.__data__={hash:new Ne,map:new(Re||Te),string:new Ne}},Ke=function(e){var t=Me(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Ge(this,e).get(e)},Ye=function(e){return Xe(this,e).has(e)},Ze=function(e,t){var n=Ue(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}et.prototype.clear=qe,et.prototype.delete=Ke,et.prototype.get=Qe,et.prototype.has=Ye,et.prototype.set=Ze;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=e.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var it=nt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,ot=function(e){var t=it(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,n,i,r){t.push(i?r.replace(at,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r},ct=p,dt=C,st=y?y.prototype:void 0,gt=st?st.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ft=ht;var ut=p,pt=j,Ft=ot,mt=function(e){return null==e?"":ft(e)};var St=C;var yt=function(e,t){return ut(e)?e:pt(e,t)?[e]:Ft(mt(e))},Bt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var n=0,i=(t=yt(t,e)).length;null!=e&&n<i;)e=e[Bt(t[n++])];return n&&n==i?e:void 0};var vt=u((function(e,t,n){var i=null==e?void 0:Dt(e,t);return void 0===i?n:i}));const bt=(e,t,n)=>t?vt(n,t)||vt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return vt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,i=Ht(Et,n[$t.colorScheme]);return n.options&&n.options.color?bt(i,e,n.options.color):bt(i,e)},kt={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}};"function"==typeof SuppressedError&&SuppressedError;const wt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},At={D1:{fontFamily:wt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:wt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:wt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ot={D1:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:wt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:wt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:wt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:wt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},zt={collections:{base:At,oneservice:{D1:{fontFamily:wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:wt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:wt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:wt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:wt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:wt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ot},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,i=Ht(zt,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?bt(i,e,n.options.textStyle):bt(i,e)},_t={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},Wt=[wt.OpenSans,wt.PlusJakartaSans],Pt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},It=(e,t)=>n=>{var i;const r=_t[e].fontFamily(n),a=_t[e].fontWeight(n),o=Wt.find((e=>Object.values(e).includes(r)));return o?g`
                font-family: ${Pt(o,t)||Pt(o,a)||r};
                font-weight: normal !important;
            `:g`
            font-family: ${r};
            font-weight: ${null!==(i=jt(t)||a)&&void 0!==i?i:"normal"};
        `},jt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Lt=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Nt=(e,t,n=!1)=>i=>{const r=_t[e],a=r.fontSize(i);return g`
            ${It(e,t)}
            font-size: ${a}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${g`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,n=void 0)=>t?g`
            display: block;
            ${Lt(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Lt(n)}
        `;var Rt;!function(e){e.D1=s.h1`
        ${e=>g`
                ${Nt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>g`
                ${Nt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>g`
                ${Nt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>g`
                ${Nt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>g`
                ${Nt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>g`
                ${Nt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>g`
                ${Nt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>g`
                ${Nt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>g`
                ${Nt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>g`
                ${Nt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>g`
                ${Nt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>g`
                ${Nt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>g`
                ${Nt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>g`
                ${Nt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Mt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Mt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Vt=s.a`
    ${e=>g`
            ${Nt(e.textStyle,e.weight)}
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
`,Jt=s(h)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mt=n=>{var{external:i=!1,children:r}=n,a=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(n,["external","children"]);return e(Vt,Object.assign({},a,{children:[r,i&&t(Jt,{})]}))},Gt=s.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${kt.Neutral[1]}D9;
    z-index: -1;
`,Xt=s(Rt.BodySmall)`
    margin: 0;
    ${e=>e.$isSelected&&g`
            color: ${kt.Primary};
        `}
`,Ut=s(d)`
    color: ${kt.Primary};
    margin: 0 8px;
`,qt=s(c)`
    color: ${kt.Primary};
    transition: transform 250ms ease-in-out;
    transform: rotate(${e=>e.$isDropdownExpanded?180:0}deg);
`,Kt=s.div`
    cursor: pointer;
    background: ${kt.Neutral[8]};
    padding: 12px 16px;
    box-shadow: 0px 0px 1px 1px ${kt.Neutral[5]};
    overflow: hidden;
    border-radius: ${e=>e.$isDropdownExpanded?"4px 4px 0 0":"4px"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms linear;
`,Qt=s.li`
    padding: ${e=>e.$isSelected?"12px 8px 12px 0":"12px 8px 12px 32px"};
    background: ${e=>e.$isSelected?kt.Accent.Light[5]:kt.Neutral[8]};
    position: relative; /* Ensures that the tick mark is positioned relative to the selected item */
    display: flex;
    align-items: center; /* Vertically align text and tick */
`,Yt=s.ul`
    transition: all 300ms;
    transform-origin: top;
    list-style-type: none;
    padding: 0px 8px 0px 8px;
    margin: 0;
    background: ${kt.Neutral[8]};
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px ${kt.Neutral[5]};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    overflow-y: auto; /* Enables vertical scrolling */
    max-height: ${e=>e.$viewportHeight}px; /* Set a max height for the dropdown list */
`,Zt=s.nav`
    display: block;
    position: sticky;
    top: ${e=>e.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${e=>e.$isStickied&&`${Kt} {\n            ${e.$sideMargin&&`margin: 0 -${e.$sideMargin}px;`}\n\t\t\tpadding: 12px 16px;\n\t\t\tborder-radius: 0;\n\t\t}\n\n\t\t${Yt} {\n            ${e.$sideMargin&&`margin-left: -${e.$sideMargin}px;`}\n            ${e.$sideMargin&&`margin-right: -${e.$sideMargin}px;`}\n\t\t\tborder-radius-bottom-left: 4px;\n\t\t\tborder-radius-bottom-right: 4px;\n\n\t\t}\n\n\t\t`}
`,en=i.forwardRef((({defaultLabel:i,stickyOffset:c=0,onNavItemSelect:d,items:s,selectedItemIndex:g,id:h,"data-testid":f,className:u,renderItem:p},F)=>{const m=r(null),S=r(null),y=r(null),[B,D]=a(!1),[v,b]=a(!1),[H,$]=a(0),[E,x]=a(0),[k,w]=a(0),A=f||"local-nav-dropdown";o(F,(()=>y.current));const O=g>=0&&B?s[g].title:i;l((()=>{if(S.current){const e=S.current.getBoundingClientRect().height;x(e)}}),[]),l((()=>(z(),()=>{C("remove")})),[]),l((()=>{C(v&&B?"add":"remove")}),[v,B]),l((()=>{$(window.innerHeight);const e=()=>{$(window.innerHeight)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),l((()=>{const e=new IntersectionObserver((e=>{const[t]=e;D(!t.isIntersecting)}),{threshold:1,rootMargin:`-${c}px 0px 0px 0px`});return m.current&&e.observe(m.current),()=>e.disconnect()}),[c]),l((()=>{const e=()=>{const e=null==y?void 0:y.current;if(e){const t=e.getBoundingClientRect(),n=document.body.clientWidth-t.right,i=t.left,r=Math.max(n,i);w(r)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const z=()=>{if(!document.getElementById(tn)){const e=document.createElement("style");e.id=tn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${nn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${nn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(nn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(nn):document.body.classList.add(nn)};return e(n,{children:[t("span",{ref:m,"data-testid":"sticky-ref"}),e(Zt,Object.assign({$isStickied:B,$sideMargin:k,$stickyOffset:c,ref:y,id:h,"data-testid":A,className:u},{children:[e(Kt,Object.assign({ref:S,onClick:()=>{b((e=>!e))},"data-testid":`${A}-label`,$isDropdownExpanded:v},{children:[t(Xt,Object.assign({weight:"semibold"},{children:O})),t(qt,{$isDropdownExpanded:v})]})),v&&t(Yt,Object.assign({"data-testid":`${A}-dropdown-list`,$viewportHeight:H-E-c},{children:s.map(((i,r)=>(({handleClick:i,isSelected:r,item:a,renderItem:o})=>{const{id:l,title:c}=a;return t(Qt,Object.assign({id:l,$isSelected:r,onClick:i},{children:o?o(a,{selected:r}):e(n,{children:[r&&t(Ut,{}),t(Xt,Object.assign({$isSelected:r},{children:c}))]})}))})({handleClick:e=>((e,t,n)=>{d&&d(e,t,n),b(!1)})(e,i,r),isSelected:r===g&&B,item:i,renderItem:p})))})),v&&B&&t(Gt,{onClick:()=>{b(!1)}})]}))]})})),tn="lifesg-ds-local-nav-dropdown-stylesheet",nn="lifesg-ds-local-nav-dropdown-open",rn=s.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,an=s(Rt.Body)`
    margin: 0;
`,on=s.li`
    position: relative;
    margin: 0;
    padding: 1rem;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        top: 0;
        background-color: ${e=>e.$isSelected?kt.Primary:kt.Accent.Light[5]};
        transition: all 250ms linear;
    }

    &:hover {
        background-color: ${kt.Accent.Light[6]};
    }
`,ln=i.forwardRef((({onNavItemSelect:e,items:n,selectedItemIndex:i,id:r,"data-testid":a,className:o,renderItem:l},c)=>{const d=a||"local-nav-menu";return t(rn,Object.assign({ref:c,id:r,className:o,"data-testid":d},{children:n.map(((n,r)=>(({handleClick:e,isSelected:n,item:i,renderItem:r})=>{const{id:a,title:o}=i;return t(on,Object.assign({id:a,$isSelected:n,onClick:e},{children:r?r(i,{selected:n}):t(an,Object.assign({weight:n?"semibold":"regular"},{children:o}))}))})({handleClick:t=>e(t,n,r),isSelected:r===i,item:n,renderItem:l})))}))}));export{en as LocalNavDropdown,ln as LocalNavMenu};
//# sourceMappingURL=index.js.map
