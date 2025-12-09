import{jsxs as t,jsx as e}from"react/jsx-runtime";import{forwardRef as n}from"react";import a,{css as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";function r(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g=Array.isArray,f="object"==typeof l&&l&&l.Object===Object&&l,F="object"==typeof self&&self&&self.Object===Object&&self,h=f||F||Function("return this")(),s=h.Symbol,d=s,u=Object.prototype,p=u.hasOwnProperty,S=u.toString,B=d?d.toStringTag:void 0;var m=function(t){var e=p.call(t,B),n=t[B];try{t[B]=void 0;var a=!0}catch(t){}var i=S.call(t);return a&&(e?t[B]=n:delete t[B]),i},y=Object.prototype.toString;var D=m,H=function(t){return y.call(t)},v=s?s.toStringTag:void 0;var E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?D(t):H(t)};var b=E,$=function(t){return null!=t&&"object"==typeof t};var A=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==b(t)},z=g,O=A,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var x=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!O(t))||(C.test(t)||!k.test(t)||null!=e&&t in Object(e))};var _=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},V=E,W=_;var w,P=function(t){if(!W(t))return!1;var e=V(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},T=h["__core-js_shared__"],j=(w=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var R=function(t){return!!j&&j in t},L=Function.prototype.toString;var I=P,J=R,N=_,X=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,K=U.hasOwnProperty,Q=RegExp("^"+q.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!N(t)||J(t))&&(I(t)?Q:G).test(X(t))},Z=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=Z(t,e);return Y(n)?n:void 0},et=tt(Object,"create"),nt=et;var at=function(){this.__data__=nt?nt(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot=et,rt=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return rt.call(e,t)?e[t]:void 0},ct=et,gt=Object.prototype.hasOwnProperty;var ft=et;var Ft=at,ht=it,st=lt,dt=function(t){var e=this.__data__;return ct?void 0!==e[t]:gt.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}pt.prototype.clear=Ft,pt.prototype.delete=ht,pt.prototype.get=st,pt.prototype.has=dt,pt.prototype.set=ut;var St=pt;var Bt=function(){this.__data__=[],this.size=0};var mt=function(t,e){return t===e||t!=t&&e!=e};var yt=function(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1},Dt=yt,Ht=Array.prototype.splice;var vt=yt;var Et=yt;var bt=yt;var $t=Bt,At=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},Ot=function(t){return Et(this.__data__,t)>-1},kt=function(t,e){var n=this.__data__,a=bt(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Ct.prototype.clear=$t,Ct.prototype.delete=At,Ct.prototype.get=zt,Ct.prototype.has=Ot,Ct.prototype.set=kt;var xt=Ct,_t=tt(h,"Map"),Vt=St,Wt=xt,wt=_t;var Pt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Tt=function(t,e){var n=t.__data__;return Pt(e)?n["string"==typeof e?"string":"hash"]:n.map},jt=Tt;var Rt=Tt;var Lt=Tt;var It=Tt;var Jt=function(){this.size=0,this.__data__={hash:new Vt,map:new(wt||Wt),string:new Vt}},Nt=function(t){var e=jt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return Rt(this,t).get(t)},Gt=function(t){return Lt(this,t).has(t)},Mt=function(t,e){var n=It(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Ut.prototype.clear=Jt,Ut.prototype.delete=Nt,Ut.prototype.get=Xt,Ut.prototype.has=Gt,Ut.prototype.set=Mt;var qt=Ut;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=e?e.apply(this,a):a[0],o=n.cache;if(o.has(i))return o.get(i);var r=t.apply(this,a);return n.cache=o.set(i,r)||o,r};return n.cache=new(Kt.Cache||qt),n}Kt.Cache=qt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zt=/\\(\\)?/g,te=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,a,i){e.push(a?i.replace(Zt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i},ne=g,ae=A,ie=s?s.prototype:void 0,oe=ie?ie.toString:void 0;var re=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(ae(e))return oe?oe.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},le=re;var ce=g,ge=x,fe=te,Fe=function(t){return null==t?"":le(t)};var he=A;var se=function(t,e){return ce(t)?t:ge(t,e)?[t]:fe(Fe(t))},de=function(t){if("string"==typeof t||he(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var ue=function(t,e){for(var n=0,a=(e=se(e,t)).length;null!=t&&n<a;)t=t[de(e[n++])];return n&&n==a?t:void 0};var pe=c((function(t,e,n){var a=null==t?void 0:ue(t,e);return void 0===a?n:a}));const Se=(t,e,n)=>e?pe(n,e)||pe(t,e):n||t,Be=(t,e)=>{const n=e||t.defaultValue;return pe(t.collections,n)};var me;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(me||(me={}));const ye={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,a=Be(ye,n[me.colorScheme]);return n.options&&n.options.color?Se(a,t,n.options.color):Se(a,t)},He=(De("Brand.1"),De("Brand.2"),De("Brand.3"),De("Brand.4"),De("Brand.5"),De("Brand.6"),De("Primary")),ve=(De("PrimaryDark"),De("Secondary")),Ee=(De("Accent.Light.1"),De("Accent.Light.2"),De("Accent.Light.3"),De("Accent.Light.4"),De("Accent.Light.5"),De("Accent.Light.6"),De("Accent.Dark.1"),De("Accent.Dark.2"),De("Accent.Dark.3"),{1:De("Neutral.1"),2:De("Neutral.2"),3:De("Neutral.3"),4:De("Neutral.4"),5:De("Neutral.5"),6:De("Neutral.6"),7:De("Neutral.7"),8:De("Neutral.8")}),be=(De("Validation.Green.Text"),De("Validation.Green.Icon"),De("Validation.Green.Border"),De("Validation.Green.Background"),De("Validation.Orange.Text"),De("Validation.Orange.Icon"),De("Validation.Orange.Border"),De("Validation.Orange.Background"),De("Validation.Orange.Badge"),De("Validation.Red.Text"),De("Validation.Red.Icon"),De("Validation.Red.Border"),De("Validation.Red.Background"),De("Validation.Blue.Text"),De("Validation.Blue.Icon"),De("Validation.Blue.Border"),De("Validation.Blue.Background"),De("Shadow.Accent"),De("Shadow.Red"),De("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),$e={D1:{fontFamily:be.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:be.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:be.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:be.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:be.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:be.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:be.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:be.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:be.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:be.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:be.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:be.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ae={D1:{fontFamily:be.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:be.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:be.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:be.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:be.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:be.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:be.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:be.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:be.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:be.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:be.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:be.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:be.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:be.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},ze={collections:{base:$e,oneservice:{D1:{fontFamily:be.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:be.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:be.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:be.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:be.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:be.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:be.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:be.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:be.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:be.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:be.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:be.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ae},defaultValue:"base"},Oe=t=>e=>{const n=e.theme,a=Be(ze,n[me.textStyleScheme]);return n.options&&n.options.textStyle?Se(a,t,n.options.textStyle):Se(a,t)},ke={D1:{fontFamily:Oe("D1.fontFamily"),fontSize:Oe("D1.fontSize"),fontWeight:Oe("D1.fontWeight"),lineHeight:Oe("D1.lineHeight"),letterSpacing:Oe("D1.letterSpacing"),fontVariant:Oe("D1.fontVariant")},D2:{fontFamily:Oe("D2.fontFamily"),fontSize:Oe("D2.fontSize"),fontWeight:Oe("D2.fontWeight"),lineHeight:Oe("D2.lineHeight"),letterSpacing:Oe("D2.letterSpacing"),fontVariant:Oe("D2.fontVariant")},D3:{fontFamily:Oe("D3.fontFamily"),fontSize:Oe("D3.fontSize"),fontWeight:Oe("D3.fontWeight"),lineHeight:Oe("D3.lineHeight"),letterSpacing:Oe("D3.letterSpacing"),fontVariant:Oe("D3.fontVariant")},D4:{fontFamily:Oe("D4.fontFamily"),fontSize:Oe("D4.fontSize"),fontWeight:Oe("D4.fontWeight"),lineHeight:Oe("D4.lineHeight"),letterSpacing:Oe("D4.letterSpacing"),fontVariant:Oe("D4.fontVariant")},DBody:{fontFamily:Oe("DBody.fontFamily"),fontSize:Oe("DBody.fontSize"),fontWeight:Oe("DBody.fontWeight"),lineHeight:Oe("DBody.lineHeight"),letterSpacing:Oe("DBody.letterSpacing"),fontVariant:Oe("DBody.fontVariant")},H1:{fontFamily:Oe("H1.fontFamily"),fontSize:Oe("H1.fontSize"),fontWeight:Oe("H1.fontWeight"),lineHeight:Oe("H1.lineHeight"),letterSpacing:Oe("H1.letterSpacing"),fontVariant:Oe("H1.fontVariant")},H2:{fontFamily:Oe("H2.fontFamily"),fontSize:Oe("H2.fontSize"),fontWeight:Oe("H2.fontWeight"),lineHeight:Oe("H2.lineHeight"),letterSpacing:Oe("H2.letterSpacing"),fontVariant:Oe("H2.fontVariant")},H3:{fontFamily:Oe("H3.fontFamily"),fontSize:Oe("H3.fontSize"),fontWeight:Oe("H3.fontWeight"),lineHeight:Oe("H3.lineHeight"),letterSpacing:Oe("H3.letterSpacing"),fontVariant:Oe("H3.fontVariant")},H4:{fontFamily:Oe("H4.fontFamily"),fontSize:Oe("H4.fontSize"),fontWeight:Oe("H4.fontWeight"),lineHeight:Oe("H4.lineHeight"),letterSpacing:Oe("H4.letterSpacing"),fontVariant:Oe("H4.fontVariant")},H5:{fontFamily:Oe("H5.fontFamily"),fontSize:Oe("H5.fontSize"),fontWeight:Oe("H5.fontWeight"),lineHeight:Oe("H5.lineHeight"),letterSpacing:Oe("H5.letterSpacing"),fontVariant:Oe("H5.fontVariant")},H6:{fontFamily:Oe("H6.fontFamily"),fontSize:Oe("H6.fontSize"),fontWeight:Oe("H6.fontWeight"),lineHeight:Oe("H6.lineHeight"),letterSpacing:Oe("H6.letterSpacing"),fontVariant:Oe("H6.fontVariant")},Body:{fontFamily:Oe("Body.fontFamily"),fontSize:Oe("Body.fontSize"),fontWeight:Oe("Body.fontWeight"),lineHeight:Oe("Body.lineHeight"),letterSpacing:Oe("Body.letterSpacing"),fontVariant:Oe("Body.fontVariant")},BodySmall:{fontFamily:Oe("BodySmall.fontFamily"),fontSize:Oe("BodySmall.fontSize"),fontWeight:Oe("BodySmall.fontWeight"),lineHeight:Oe("BodySmall.lineHeight"),letterSpacing:Oe("BodySmall.letterSpacing"),fontVariant:Oe("BodySmall.fontVariant")},XSmall:{fontFamily:Oe("XSmall.fontFamily"),fontSize:Oe("XSmall.fontSize"),fontWeight:Oe("XSmall.fontWeight"),lineHeight:Oe("XSmall.lineHeight"),letterSpacing:Oe("XSmall.letterSpacing"),fontVariant:Oe("XSmall.fontVariant")}},Ce=[be.OpenSans,be.PlusJakartaSans],xe=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},_e=(t,e)=>n=>{var a;const o=ke[t].fontFamily(n),r=ke[t].fontWeight(n),l=Ce.find((t=>Object.values(t).includes(o)));return l?i`
                font-family: ${xe(l,e)||xe(l,r)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(a=Ve(e)||r)&&void 0!==a?a:"normal"};
        `},Ve=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},We=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},we=(t,e,n=!1)=>a=>{const o=ke[t],r=o.fontSize(a);return i`
            ${_e(t,e)}
            font-size: ${r}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            font-variant: ${o.fontVariant(a)||"normal"};
            ${i`
                margin-bottom: ${r*(n?1.05:0)}rem;
            `}
        `},Pe=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${We(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${We(n)}
        `;var Te;!function(t){t.D1=a.h1`
        ${t=>i`
                ${we("D1",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=a.h1`
        ${t=>i`
                ${we("D2",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=a.h1`
        ${t=>i`
                ${we("D3",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=a.h1`
        ${t=>i`
                ${we("D4",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=a.h1`
        ${t=>i`
                ${we("DBody",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=a.h1`
        ${t=>i`
                ${we("H1",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=a.h2`
        ${t=>i`
                ${we("H2",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=a.h3`
        ${t=>i`
                ${we("H3",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=a.h4`
        ${t=>i`
                ${we("H4",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=a.h5`
        ${t=>i`
                ${we("H5",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=a.h6`
        ${t=>i`
                ${we("H6",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=a.p`
        ${t=>i`
                ${we("Body",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=a.p`
        ${t=>i`
                ${we("BodySmall",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=a.span`
        ${t=>i`
                ${we("XSmall",t.weight,t.paragraph)}
                color: ${Ee[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Le(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Le(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Te||(Te={}));const je=a.a`
    ${t=>i`
            ${we(t.textStyle,t.weight)}
            color: ${He};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ve};

                svg {
                    color: ${ve};
                }
            }
        `}
`,Re=a(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Le=n=>{var{external:a=!1,children:i}=n,o=r(n,["external","children"]);return t(je,Object.assign({},o,{children:[i,a&&e(Re,{})]}))};var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Je=a.div`
    ${t=>(t=>{const{textSize:e}=t||{};return i`
        // Text styling
        ${e&&we(e,"regular")}

        strong {
            font-family: ${be.OpenSans.Semibold};
            ${e&&we(e,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${be.OpenSans.Semibold};
            ${e&&we(e,"semibold")}
            color: ${He};
            text-decoration: none;

            svg {
                color: ${He};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${ve};

                svg {
                    color: ${ve};
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
    `})({textSize:t.$textSize})}
    ${t=>t.color&&i`
            color: ${t.color};
        `}
`,Ne=n(((t,n)=>{const{baseTextColor:a,baseTextSize:i,inline:o}=t,l=r(t,["baseTextColor","baseTextSize","inline"]);return e(Je,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:a},l))}));export{Ne as Markup};
//# sourceMappingURL=index.js.map
