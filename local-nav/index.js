import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import a,{useRef as i,useState as r,useImperativeHandle as o,useEffect as l}from"react";import{ChevronDownIcon as c}from"@lifesg/react-icons/chevron-down";import{TickIcon as d}from"@lifesg/react-icons/tick";import s,{css as g}from"styled-components";import{ExternalIcon as f}from"@lifesg/react-icons/external";var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p=Array.isArray,F="object"==typeof h&&h&&h.Object===Object&&h,m="object"==typeof self&&self&&self.Object===Object&&self,S=F||m||Function("return this")(),y=S.Symbol,B=y,D=Object.prototype,v=D.hasOwnProperty,H=D.toString,b=B?B.toStringTag:void 0;var $=function(t){var e=v.call(t,b),n=t[b];try{t[b]=void 0;var a=!0}catch(t){}var i=H.call(t);return a&&(e?t[b]=n:delete t[b]),i},E=Object.prototype.toString;var x=$,k=function(t){return E.call(t)},w=y?y.toStringTag:void 0;var A=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?x(t):k(t)};var O=A,z=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||z(t)&&"[object Symbol]"==O(t)},_=p,V=C,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var I=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!V(t))||(P.test(t)||!W.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},L=A,N=j;var T,R=function(t){if(!N(t))return!1;var e=L(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},J=S["__core-js_shared__"],M=(T=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var G=function(t){return!!M&&M in t},X=Function.prototype.toString;var U=R,q=G,K=j,Q=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Y=/^\[object .+?Constructor\]$/,Z=Function.prototype,tt=Object.prototype,et=Z.toString,nt=tt.hasOwnProperty,at=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!K(t)||q(t))&&(U(t)?at:Y).test(Q(t))},rt=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var n=rt(t,e);return it(n)?n:void 0},lt=ot(Object,"create"),ct=lt;var dt=function(){this.__data__=ct?ct(null):{},this.size=0};var st=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},gt=lt,ft=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(gt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ft.call(e,t)?e[t]:void 0},ut=lt,pt=Object.prototype.hasOwnProperty;var Ft=lt;var mt=dt,St=st,yt=ht,Bt=function(t){var e=this.__data__;return ut?void 0!==e[t]:pt.call(e,t)},Dt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ft&&void 0===e?"__lodash_hash_undefined__":e,this};function vt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}vt.prototype.clear=mt,vt.prototype.delete=St,vt.prototype.get=yt,vt.prototype.has=Bt,vt.prototype.set=Dt;var Ht=vt;var bt=function(){this.__data__=[],this.size=0};var $t=function(t,e){return t===e||t!=t&&e!=e};var Et=function(t,e){for(var n=t.length;n--;)if($t(t[n][0],e))return n;return-1},xt=Et,kt=Array.prototype.splice;var wt=Et;var At=Et;var Ot=Et;var zt=bt,Ct=function(t){var e=this.__data__,n=xt(e,t);return!(n<0)&&(n==e.length-1?e.pop():kt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},Vt=function(t){return At(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,a=Ot(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this};function Pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Pt.prototype.clear=zt,Pt.prototype.delete=Ct,Pt.prototype.get=_t,Pt.prototype.has=Vt,Pt.prototype.set=Wt;var It=Pt,jt=ot(S,"Map"),Lt=Ht,Nt=It,Tt=jt;var Rt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Jt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map},Mt=Jt;var Gt=Jt;var Xt=Jt;var Ut=Jt;var qt=function(){this.size=0,this.__data__={hash:new Lt,map:new(Tt||Nt),string:new Lt}},Kt=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e},Qt=function(t){return Gt(this,t).get(t)},Yt=function(t){return Xt(this,t).has(t)},Zt=function(t,e){var n=Ut(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}te.prototype.clear=qt,te.prototype.delete=Kt,te.prototype.get=Qt,te.prototype.has=Yt,te.prototype.set=Zt;var ee=te;function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=e?e.apply(this,a):a[0],r=n.cache;if(r.has(i))return r.get(i);var o=t.apply(this,a);return n.cache=r.set(i,o)||r,o};return n.cache=new(ne.Cache||ee),n}ne.Cache=ee;var ae=ne;var ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/\\(\\)?/g,oe=function(t){var e=ae(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ie,(function(t,n,a,i){e.push(a?i.replace(re,"$1"):n||t)})),e}));var le=function(t,e){for(var n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i},ce=p,de=C,se=y?y.prototype:void 0,ge=se?se.toString:void 0;var fe=function t(e){if("string"==typeof e)return e;if(ce(e))return le(e,t)+"";if(de(e))return ge?ge.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},he=fe;var ue=p,pe=I,Fe=oe,me=function(t){return null==t?"":he(t)};var Se=C;var ye=function(t,e){return ue(t)?t:pe(t,e)?[t]:Fe(me(t))},Be=function(t){if("string"==typeof t||Se(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var De=function(t,e){for(var n=0,a=(e=ye(e,t)).length;null!=t&&n<a;)t=t[Be(e[n++])];return n&&n==a?t:void 0};var ve=u((function(t,e,n){var a=null==t?void 0:De(t,e);return void 0===a?n:a}));const He=(t,e,n)=>e?ve(n,e)||ve(t,e):n||t,be=(t,e)=>{const n=e||t.defaultValue;return ve(t.collections,n)};var $e;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}($e||($e={}));const Ee={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xe=t=>e=>{const n=e.theme,a=be(Ee,n[$e.colorScheme]);return n.options&&n.options.color?He(a,t,n.options.color):He(a,t)},ke={Brand:{1:xe("Brand.1"),2:xe("Brand.2"),3:xe("Brand.3"),4:xe("Brand.4"),5:xe("Brand.5"),6:xe("Brand.6")},Primary:xe("Primary"),PrimaryDark:xe("PrimaryDark"),Secondary:xe("Secondary"),Accent:{Light:{1:xe("Accent.Light.1"),2:xe("Accent.Light.2"),3:xe("Accent.Light.3"),4:xe("Accent.Light.4"),5:xe("Accent.Light.5"),6:xe("Accent.Light.6")},Dark:{1:xe("Accent.Dark.1"),2:xe("Accent.Dark.2"),3:xe("Accent.Dark.3")}},Neutral:{1:xe("Neutral.1"),2:xe("Neutral.2"),3:xe("Neutral.3"),4:xe("Neutral.4"),5:xe("Neutral.5"),6:xe("Neutral.6"),7:xe("Neutral.7"),8:xe("Neutral.8")},Validation:{Green:{Text:xe("Validation.Green.Text"),Icon:xe("Validation.Green.Icon"),Border:xe("Validation.Green.Border"),Background:xe("Validation.Green.Background")},Orange:{Text:xe("Validation.Orange.Text"),Icon:xe("Validation.Orange.Icon"),Border:xe("Validation.Orange.Border"),Background:xe("Validation.Orange.Background"),Badge:xe("Validation.Orange.Badge")},Red:{Text:xe("Validation.Red.Text"),Icon:xe("Validation.Red.Icon"),Border:xe("Validation.Red.Border"),Background:xe("Validation.Red.Background")},Blue:{Text:xe("Validation.Blue.Text"),Icon:xe("Validation.Blue.Icon"),Border:xe("Validation.Blue.Border"),Background:xe("Validation.Blue.Background")}},Shadow:{Accent:xe("Shadow.Accent"),Red:xe("Shadow.Red"),Elevation:xe("Shadow.Elevation")}};"function"==typeof SuppressedError&&SuppressedError;const we={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ae={D1:{fontFamily:we.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:we.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:we.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:we.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:we.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:we.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:we.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:we.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:we.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:we.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:we.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:we.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:we.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:we.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Oe={D1:{fontFamily:we.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:we.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:we.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:we.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:we.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:we.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:we.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:we.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:we.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:we.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:we.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:we.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:we.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:we.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},ze={collections:{base:Ae,oneservice:{D1:{fontFamily:we.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:we.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:we.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:we.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:we.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:we.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:we.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:we.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:we.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:we.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:we.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:we.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:we.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:we.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Oe},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,a=be(ze,n[$e.textStyleScheme]);return n.options&&n.options.textStyle?He(a,t,n.options.textStyle):He(a,t)},_e={D1:{fontFamily:Ce("D1.fontFamily"),fontSize:Ce("D1.fontSize"),fontWeight:Ce("D1.fontWeight"),lineHeight:Ce("D1.lineHeight"),letterSpacing:Ce("D1.letterSpacing"),fontVariant:Ce("D1.fontVariant")},D2:{fontFamily:Ce("D2.fontFamily"),fontSize:Ce("D2.fontSize"),fontWeight:Ce("D2.fontWeight"),lineHeight:Ce("D2.lineHeight"),letterSpacing:Ce("D2.letterSpacing"),fontVariant:Ce("D2.fontVariant")},D3:{fontFamily:Ce("D3.fontFamily"),fontSize:Ce("D3.fontSize"),fontWeight:Ce("D3.fontWeight"),lineHeight:Ce("D3.lineHeight"),letterSpacing:Ce("D3.letterSpacing"),fontVariant:Ce("D3.fontVariant")},D4:{fontFamily:Ce("D4.fontFamily"),fontSize:Ce("D4.fontSize"),fontWeight:Ce("D4.fontWeight"),lineHeight:Ce("D4.lineHeight"),letterSpacing:Ce("D4.letterSpacing"),fontVariant:Ce("D4.fontVariant")},DBody:{fontFamily:Ce("DBody.fontFamily"),fontSize:Ce("DBody.fontSize"),fontWeight:Ce("DBody.fontWeight"),lineHeight:Ce("DBody.lineHeight"),letterSpacing:Ce("DBody.letterSpacing"),fontVariant:Ce("DBody.fontVariant")},H1:{fontFamily:Ce("H1.fontFamily"),fontSize:Ce("H1.fontSize"),fontWeight:Ce("H1.fontWeight"),lineHeight:Ce("H1.lineHeight"),letterSpacing:Ce("H1.letterSpacing"),fontVariant:Ce("H1.fontVariant")},H2:{fontFamily:Ce("H2.fontFamily"),fontSize:Ce("H2.fontSize"),fontWeight:Ce("H2.fontWeight"),lineHeight:Ce("H2.lineHeight"),letterSpacing:Ce("H2.letterSpacing"),fontVariant:Ce("H2.fontVariant")},H3:{fontFamily:Ce("H3.fontFamily"),fontSize:Ce("H3.fontSize"),fontWeight:Ce("H3.fontWeight"),lineHeight:Ce("H3.lineHeight"),letterSpacing:Ce("H3.letterSpacing"),fontVariant:Ce("H3.fontVariant")},H4:{fontFamily:Ce("H4.fontFamily"),fontSize:Ce("H4.fontSize"),fontWeight:Ce("H4.fontWeight"),lineHeight:Ce("H4.lineHeight"),letterSpacing:Ce("H4.letterSpacing"),fontVariant:Ce("H4.fontVariant")},H5:{fontFamily:Ce("H5.fontFamily"),fontSize:Ce("H5.fontSize"),fontWeight:Ce("H5.fontWeight"),lineHeight:Ce("H5.lineHeight"),letterSpacing:Ce("H5.letterSpacing"),fontVariant:Ce("H5.fontVariant")},H6:{fontFamily:Ce("H6.fontFamily"),fontSize:Ce("H6.fontSize"),fontWeight:Ce("H6.fontWeight"),lineHeight:Ce("H6.lineHeight"),letterSpacing:Ce("H6.letterSpacing"),fontVariant:Ce("H6.fontVariant")},Body:{fontFamily:Ce("Body.fontFamily"),fontSize:Ce("Body.fontSize"),fontWeight:Ce("Body.fontWeight"),lineHeight:Ce("Body.lineHeight"),letterSpacing:Ce("Body.letterSpacing"),fontVariant:Ce("Body.fontVariant")},BodySmall:{fontFamily:Ce("BodySmall.fontFamily"),fontSize:Ce("BodySmall.fontSize"),fontWeight:Ce("BodySmall.fontWeight"),lineHeight:Ce("BodySmall.lineHeight"),letterSpacing:Ce("BodySmall.letterSpacing"),fontVariant:Ce("BodySmall.fontVariant")},XSmall:{fontFamily:Ce("XSmall.fontFamily"),fontSize:Ce("XSmall.fontSize"),fontWeight:Ce("XSmall.fontWeight"),lineHeight:Ce("XSmall.lineHeight"),letterSpacing:Ce("XSmall.letterSpacing"),fontVariant:Ce("XSmall.fontVariant")}},Ve=[we.OpenSans,we.PlusJakartaSans],We=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},Pe=(t,e)=>n=>{var a;const i=_e[t].fontFamily(n),r=_e[t].fontWeight(n),o=Ve.find((t=>Object.values(t).includes(i)));return o?g`
                font-family: ${We(o,e)||We(o,r)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(a=Ie(e)||r)&&void 0!==a?a:"normal"};
        `},Ie=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},je=t=>{if(t>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Le=(t,e,n=!1)=>a=>{const i=_e[t],r=i.fontSize(a);return g`
            ${Pe(t,e)}
            font-size: ${r}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            font-variant: ${i.fontVariant(a)||"normal"};
            ${g`
                margin-bottom: ${r*(n?1.05:0)}rem;
            `}
        `},Ne=(t=!1,e=!1,n=void 0)=>e?g`
            display: block;
            ${je(n)}
        `:t?g`
            display: inline;
        `:g`
            display: block;
            ${je(n)}
        `;var Te;!function(t){t.D1=s.h1`
        ${t=>g`
                ${Le("D1",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=s.h1`
        ${t=>g`
                ${Le("D2",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=s.h1`
        ${t=>g`
                ${Le("D3",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=s.h1`
        ${t=>g`
                ${Le("D4",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=s.h1`
        ${t=>g`
                ${Le("DBody",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=s.h1`
        ${t=>g`
                ${Le("H1",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=s.h2`
        ${t=>g`
                ${Le("H2",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=s.h3`
        ${t=>g`
                ${Le("H3",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=s.h4`
        ${t=>g`
                ${Le("H4",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=s.h5`
        ${t=>g`
                ${Le("H5",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=s.h6`
        ${t=>g`
                ${Le("H6",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=s.p`
        ${t=>g`
                ${Le("Body",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=s.p`
        ${t=>g`
                ${Le("BodySmall",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=s.span`
        ${t=>g`
                ${Le("XSmall",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Me(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Me(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Te||(Te={}));const Re=s.a`
    ${t=>g`
            ${Le(t.textStyle,t.weight)}
            color: ${ke.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ke.Secondary};

                svg {
                    color: ${ke.Secondary};
                }
            }
        `}
`,Je=s(f)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Me=n=>{var{external:a=!1,children:i}=n,r=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}(n,["external","children"]);return t(Re,Object.assign({},r,{children:[i,a&&e(Je,{})]}))},Ge=s.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${ke.Neutral[1]}D9;
    z-index: -1;
`,Xe=s(Te.BodySmall)`
    margin: 0;
    ${t=>t.$isSelected&&g`
            color: ${ke.Primary};
        `}
`,Ue=s(d)`
    color: ${ke.Primary};
    margin: 0 8px;
`,qe=s(c)`
    color: ${ke.Primary};
    transition: transform 250ms ease-in-out;
    transform: rotate(${t=>t.$isDropdownExpanded?180:0}deg);
`,Ke=s.div`
    cursor: pointer;
    background: ${ke.Neutral[8]};
    padding: 12px 16px;
    box-shadow: 0px 0px 1px 1px ${ke.Neutral[5]};
    overflow: hidden;
    border-radius: ${t=>t.$isDropdownExpanded?"4px 4px 0 0":"4px"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms linear;
`,Qe=s.li`
    padding: ${t=>t.$isSelected?"12px 8px 12px 0":"12px 8px 12px 32px"};
    background: ${t=>t.$isSelected?ke.Accent.Light[5]:ke.Neutral[8]};
    position: relative; /* Ensures that the tick mark is positioned relative to the selected item */
    display: flex;
    align-items: center; /* Vertically align text and tick */
`,Ye=s.ul`
    transition: all 300ms;
    transform-origin: top;
    list-style-type: none;
    padding: 0px 8px 0px 8px;
    margin: 0;
    background: ${ke.Neutral[8]};
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px ${ke.Neutral[5]};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    overflow-y: auto; /* Enables vertical scrolling */
    max-height: ${t=>t.$viewportHeight}px; /* Set a max height for the dropdown list */
`,Ze=s.nav`
    display: block;
    position: sticky;
    top: ${t=>t.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${t=>t.$isStickied&&`${Ke} {\n            ${t.$sideMargin&&`margin: 0 -${t.$sideMargin}px;`}\n\t\t\tpadding: 12px 16px;\n\t\t\tborder-radius: 0;\n\t\t}\n\n\t\t${Ye} {\n            ${t.$sideMargin&&`margin-left: -${t.$sideMargin}px;`}\n            ${t.$sideMargin&&`margin-right: -${t.$sideMargin}px;`}\n\t\t\tborder-radius-bottom-left: 4px;\n\t\t\tborder-radius-bottom-right: 4px;\n\n\t\t}\n\n\t\t`}
`,tn=a.forwardRef((({defaultLabel:a,stickyOffset:c=0,onNavItemSelect:d,items:s,selectedItemIndex:g,id:f,"data-testid":h,className:u,renderItem:p},F)=>{const m=i(null),S=i(null),y=i(null),[B,D]=r(!1),[v,H]=r(!1),[b,$]=r(0),[E,x]=r(0),[k,w]=r(0),A=h||"local-nav-dropdown";o(F,(()=>y.current));const O=g>=0&&B?s[g].title:a;l((()=>{if(S.current){const t=S.current.getBoundingClientRect().height;x(t)}}),[]),l((()=>(z(),()=>{C("remove")})),[]),l((()=>{C(v&&B?"add":"remove")}),[v,B]),l((()=>{$(window.innerHeight);const t=()=>{$(window.innerHeight)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),l((()=>{const t=new IntersectionObserver((t=>{const[e]=t;D(!e.isIntersecting)}),{threshold:1,rootMargin:`-${c}px 0px 0px 0px`});return m.current&&t.observe(m.current),()=>t.disconnect()}),[c]),l((()=>{const t=()=>{const t=null==y?void 0:y.current;if(t){const e=t.getBoundingClientRect(),n=document.body.clientWidth-e.right,a=e.left,i=Math.max(n,a);w(i)}};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]);const z=()=>{if(!document.getElementById(en)){const t=document.createElement("style");t.id=en;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${nn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${nn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},C=t=>{const e=document.body.classList.contains(nn);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(nn):document.body.classList.add(nn)};return t(n,{children:[e("span",{ref:m,"data-testid":"sticky-ref"}),t(Ze,Object.assign({$isStickied:B,$sideMargin:k,$stickyOffset:c,ref:y,id:f,"data-testid":A,className:u},{children:[t(Ke,Object.assign({ref:S,onClick:()=>{H((t=>!t))},"data-testid":`${A}-label`,$isDropdownExpanded:v},{children:[e(Xe,Object.assign({weight:"semibold"},{children:O})),e(qe,{$isDropdownExpanded:v})]})),v&&e(Ye,Object.assign({"data-testid":`${A}-dropdown-list`,$viewportHeight:b-E-c},{children:s.map(((n,a)=>(({handleClick:n,isSelected:a,item:i,renderItem:r})=>{const{id:o,title:l}=i;return r?e("li",Object.assign({id:o,onClick:n},{children:r(i,{selected:a,stickied:B})})):t(Qe,Object.assign({id:o,$isSelected:a&&B,onClick:n},{children:[a&&e(Ue,{}),e(Xe,Object.assign({$isSelected:a},{children:l}))]}))})({handleClick:t=>((t,e,n)=>{d&&d(t,e,n),H(!1)})(t,n,a),isSelected:a===g,item:n,renderItem:p})))})),v&&B&&e(Ge,{onClick:()=>{H(!1)}})]}))]})})),en="lifesg-ds-local-nav-dropdown-stylesheet",nn="lifesg-ds-local-nav-dropdown-open",an=s.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,rn=s(Te.Body)`
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
        background-color: ${t=>t.$isSelected?ke.Primary:ke.Accent.Light[5]};
        transition: all 250ms linear;
    }

    &:hover {
        background-color: ${ke.Accent.Light[6]};
    }
`,ln=a.forwardRef((({onNavItemSelect:t,items:n,selectedItemIndex:a,id:i,"data-testid":r,className:o,renderItem:l},c)=>{const d=r||"local-nav-menu";return e(an,Object.assign({ref:c,id:i,className:o,"data-testid":d},{children:n.map(((n,i)=>(({handleClick:t,isSelected:n,item:a,renderItem:i})=>{const{id:r,title:o}=a;return e(on,Object.assign({id:r,$isSelected:n,onClick:t},{children:i?i(a,{selected:n}):e(rn,Object.assign({weight:n?"semibold":"regular"},{children:o}))}))})({handleClick:e=>t(e,n,i),isSelected:i===a,item:n,renderItem:l})))}))}));export{tn as LocalNavDropdown,ln as LocalNavMenu};
//# sourceMappingURL=index.js.map
