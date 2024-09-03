import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as i,useEffect as a}from"react";import{ExternalIcon as r}from"@lifesg/react-icons/external";import o,{css as l}from"styled-components";function c(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(n[i[a]]=t[i[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},f="object"==typeof s&&s&&s.Object===Object&&s,h="object"==typeof self&&self&&self.Object===Object&&self,p=f||h||Function("return this")(),u=p,F=function(){return u.Date.now()},m=/\s/;var S=function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e},y=/^\s+/;var B=function(t){return t?t.slice(0,S(t)+1).replace(y,""):t},b=p.Symbol,D=b,v=Object.prototype,x=v.hasOwnProperty,H=v.toString,E=D?D.toStringTag:void 0;var w=function(t){var e=x.call(t,E),n=t[E];try{t[E]=void 0;var i=!0}catch(t){}var a=H.call(t);return i&&(e?t[E]=n:delete t[E]),a},$=Object.prototype.toString;var k=w,z=function(t){return $.call(t)},A=b?b.toStringTag:void 0;var O=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?k(t):z(t)};var C=O,_=function(t){return null!=t&&"object"==typeof t};var W=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==C(t)},P=B,T=d,j=W,L=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,I=/^0o[0-7]+$/i,V=parseInt;var J=d,N=F,X=function(t){if("number"==typeof t)return t;if(j(t))return NaN;if(T(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=T(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=P(t);var n=R.test(t);return n||I.test(t)?V(t.slice(2),n?2:8):L.test(t)?NaN:+t},G=Math.max,M=Math.min;var Y=g((function(t,e,n){var i,a,r,o,l,c,s=0,g=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=i,r=a;return i=a=void 0,s=e,o=t.apply(r,n)}function p(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-s>=r}function u(){var t=N();if(p(t))return F(t);l=setTimeout(u,function(t){var n=e-(t-c);return d?M(n,r-(t-s)):n}(t))}function F(t){return l=void 0,f&&i?h(t):(i=a=void 0,o)}function m(){var t=N(),n=p(t);if(i=arguments,a=this,c=t,n){if(void 0===l)return function(t){return s=t,l=setTimeout(u,e),g?h(t):o}(c);if(d)return clearTimeout(l),l=setTimeout(u,e),h(c)}return void 0===l&&(l=setTimeout(u,e)),o}return e=X(e)||0,J(n)&&(g=!!n.leading,r=(d="maxWait"in n)?G(X(n.maxWait)||0,e):r,f="trailing"in n?!!n.trailing:f),m.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=c=a=l=void 0},m.flush=function(){return void 0===l?o:F(N())},m}));var U=Array.isArray,q=U,K=W,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var tt=function(t,e){if(q(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!K(t))||(Z.test(t)||!Q.test(t)||null!=e&&t in Object(e))},et=O,nt=d;var it,at=function(t){if(!nt(t))return!1;var e=et(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},rt=p["__core-js_shared__"],ot=(it=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||""))?"Symbol(src)_1."+it:"";var lt=function(t){return!!ot&&ot in t},ct=Function.prototype.toString;var st=at,gt=lt,dt=d,ft=function(t){if(null!=t){try{return ct.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ht=/^\[object .+?Constructor\]$/,pt=Function.prototype,ut=Object.prototype,Ft=pt.toString,mt=ut.hasOwnProperty,St=RegExp("^"+Ft.call(mt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var yt=function(t){return!(!dt(t)||gt(t))&&(st(t)?St:ht).test(ft(t))},Bt=function(t,e){return null==t?void 0:t[e]};var bt=function(t,e){var n=Bt(t,e);return yt(n)?n:void 0},Dt=bt(Object,"create"),vt=Dt;var xt=function(){this.__data__=vt?vt(null):{},this.size=0};var Ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Et=Dt,wt=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;if(Et){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return wt.call(e,t)?e[t]:void 0},kt=Dt,zt=Object.prototype.hasOwnProperty;var At=Dt;var Ot=xt,Ct=Ht,_t=$t,Wt=function(t){var e=this.__data__;return kt?void 0!==e[t]:zt.call(e,t)},Pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=At&&void 0===e?"__lodash_hash_undefined__":e,this};function Tt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Tt.prototype.clear=Ot,Tt.prototype.delete=Ct,Tt.prototype.get=_t,Tt.prototype.has=Wt,Tt.prototype.set=Pt;var jt=Tt;var Lt=function(){this.__data__=[],this.size=0};var Rt=function(t,e){return t===e||t!=t&&e!=e};var It=function(t,e){for(var n=t.length;n--;)if(Rt(t[n][0],e))return n;return-1},Vt=It,Jt=Array.prototype.splice;var Nt=It;var Xt=It;var Gt=It;var Mt=Lt,Yt=function(t){var e=this.__data__,n=Vt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Jt.call(e,n,1),--this.size,!0)},Ut=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},qt=function(t){return Xt(this.__data__,t)>-1},Kt=function(t,e){var n=this.__data__,i=Gt(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Qt.prototype.clear=Mt,Qt.prototype.delete=Yt,Qt.prototype.get=Ut,Qt.prototype.has=qt,Qt.prototype.set=Kt;var Zt=Qt,te=bt(p,"Map"),ee=jt,ne=Zt,ie=te;var ae=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var re=function(t,e){var n=t.__data__;return ae(e)?n["string"==typeof e?"string":"hash"]:n.map},oe=re;var le=re;var ce=re;var se=re;var ge=function(){this.size=0,this.__data__={hash:new ee,map:new(ie||ne),string:new ee}},de=function(t){var e=oe(this,t).delete(t);return this.size-=e?1:0,e},fe=function(t){return le(this,t).get(t)},he=function(t){return ce(this,t).has(t)},pe=function(t,e){var n=se(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function ue(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ue.prototype.clear=ge,ue.prototype.delete=de,ue.prototype.get=fe,ue.prototype.has=he,ue.prototype.set=pe;var Fe=ue;function me(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,a=e?e.apply(this,i):i[0],r=n.cache;if(r.has(a))return r.get(a);var o=t.apply(this,i);return n.cache=r.set(a,o)||r,o};return n.cache=new(me.Cache||Fe),n}me.Cache=Fe;var Se=me;var ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Be=/\\(\\)?/g,be=function(t){var e=Se(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ye,(function(t,n,i,a){e.push(i?a.replace(Be,"$1"):n||t)})),e}));var De=function(t,e){for(var n=-1,i=null==t?0:t.length,a=Array(i);++n<i;)a[n]=e(t[n],n,t);return a},ve=U,xe=W,He=b?b.prototype:void 0,Ee=He?He.toString:void 0;var we=function t(e){if("string"==typeof e)return e;if(ve(e))return De(e,t)+"";if(xe(e))return Ee?Ee.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},$e=we;var ke=U,ze=tt,Ae=be,Oe=function(t){return null==t?"":$e(t)};var Ce=W;var _e=function(t,e){return ke(t)?t:ze(t,e)?[t]:Ae(Oe(t))},We=function(t){if("string"==typeof t||Ce(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Pe=function(t,e){for(var n=0,i=(e=_e(e,t)).length;null!=t&&n<i;)t=t[We(e[n++])];return n&&n==i?t:void 0};var Te=g((function(t,e,n){var i=null==t?void 0:Pe(t,e);return void 0===i?n:i}));const je=(t,e,n)=>e?Te(n,e)||Te(t,e):n||t,Le=(t,e)=>{const n=e||t.defaultValue;return Te(t.collections,n)};var Re;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Re||(Re={}));const Ie={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ve=t=>e=>{const n=e.theme,i=Le(Ie,n[Re.colorScheme]);return n.options&&n.options.color?je(i,t,n.options.color):je(i,t)},Je=(Ve("Brand.1"),Ve("Brand.2"),Ve("Brand.3"),Ve("Brand.4"),Ve("Brand.5"),Ve("Brand.6"),Ve("Primary")),Ne=(Ve("PrimaryDark"),Ve("Secondary")),Xe=(Ve("Accent.Light.1"),Ve("Accent.Light.2"),Ve("Accent.Light.3"),Ve("Accent.Light.4"),Ve("Accent.Light.5"),Ve("Accent.Light.6"),Ve("Accent.Dark.1"),Ve("Accent.Dark.2"),Ve("Accent.Dark.3"),{1:Ve("Neutral.1"),2:Ve("Neutral.2"),3:Ve("Neutral.3"),4:Ve("Neutral.4"),5:Ve("Neutral.5"),6:Ve("Neutral.6"),7:Ve("Neutral.7"),8:Ve("Neutral.8")}),Ge=(Ve("Validation.Green.Text"),Ve("Validation.Green.Icon"),Ve("Validation.Green.Border"),Ve("Validation.Green.Background"),Ve("Validation.Orange.Text"),Ve("Validation.Orange.Icon"),Ve("Validation.Orange.Border"),Ve("Validation.Orange.Background"),Ve("Validation.Orange.Badge"),Ve("Validation.Red.Text"),Ve("Validation.Red.Icon"),Ve("Validation.Red.Border"),Ve("Validation.Red.Background"),Ve("Validation.Blue.Text"),Ve("Validation.Blue.Icon"),Ve("Validation.Blue.Border"),Ve("Validation.Blue.Background"),Ve("Shadow.Accent"),Ve("Shadow.Red"),Ve("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Me={D1:{fontFamily:Ge.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ge.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ge.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ge.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ge.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ge.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ge.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ye={D1:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ue={collections:{base:Me,oneservice:{D1:{fontFamily:Ge.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ge.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ge.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ge.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ge.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ge.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ge.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ye},defaultValue:"base"},qe=t=>e=>{const n=e.theme,i=Le(Ue,n[Re.textStyleScheme]);return n.options&&n.options.textStyle?je(i,t,n.options.textStyle):je(i,t)},Ke={D1:{fontFamily:qe("D1.fontFamily"),fontSize:qe("D1.fontSize"),fontWeight:qe("D1.fontWeight"),lineHeight:qe("D1.lineHeight"),letterSpacing:qe("D1.letterSpacing")},D2:{fontFamily:qe("D2.fontFamily"),fontSize:qe("D2.fontSize"),fontWeight:qe("D2.fontWeight"),lineHeight:qe("D2.lineHeight"),letterSpacing:qe("D2.letterSpacing")},D3:{fontFamily:qe("D3.fontFamily"),fontSize:qe("D3.fontSize"),fontWeight:qe("D3.fontWeight"),lineHeight:qe("D3.lineHeight"),letterSpacing:qe("D3.letterSpacing")},D4:{fontFamily:qe("D4.fontFamily"),fontSize:qe("D4.fontSize"),fontWeight:qe("D4.fontWeight"),lineHeight:qe("D4.lineHeight"),letterSpacing:qe("D4.letterSpacing")},DBody:{fontFamily:qe("DBody.fontFamily"),fontSize:qe("DBody.fontSize"),fontWeight:qe("DBody.fontWeight"),lineHeight:qe("DBody.lineHeight"),letterSpacing:qe("DBody.letterSpacing")},H1:{fontFamily:qe("H1.fontFamily"),fontSize:qe("H1.fontSize"),fontWeight:qe("H1.fontWeight"),lineHeight:qe("H1.lineHeight"),letterSpacing:qe("H1.letterSpacing")},H2:{fontFamily:qe("H2.fontFamily"),fontSize:qe("H2.fontSize"),fontWeight:qe("H2.fontWeight"),lineHeight:qe("H2.lineHeight"),letterSpacing:qe("H2.letterSpacing")},H3:{fontFamily:qe("H3.fontFamily"),fontSize:qe("H3.fontSize"),fontWeight:qe("H3.fontWeight"),lineHeight:qe("H3.lineHeight"),letterSpacing:qe("H3.letterSpacing")},H4:{fontFamily:qe("H4.fontFamily"),fontSize:qe("H4.fontSize"),fontWeight:qe("H4.fontWeight"),lineHeight:qe("H4.lineHeight"),letterSpacing:qe("H4.letterSpacing")},H5:{fontFamily:qe("H5.fontFamily"),fontSize:qe("H5.fontSize"),fontWeight:qe("H5.fontWeight"),lineHeight:qe("H5.lineHeight"),letterSpacing:qe("H5.letterSpacing")},H6:{fontFamily:qe("H6.fontFamily"),fontSize:qe("H6.fontSize"),fontWeight:qe("H6.fontWeight"),lineHeight:qe("H6.lineHeight"),letterSpacing:qe("H6.letterSpacing")},Body:{fontFamily:qe("Body.fontFamily"),fontSize:qe("Body.fontSize"),fontWeight:qe("Body.fontWeight"),lineHeight:qe("Body.lineHeight"),letterSpacing:qe("Body.letterSpacing")},BodySmall:{fontFamily:qe("BodySmall.fontFamily"),fontSize:qe("BodySmall.fontSize"),fontWeight:qe("BodySmall.fontWeight"),lineHeight:qe("BodySmall.lineHeight"),letterSpacing:qe("BodySmall.letterSpacing")},XSmall:{fontFamily:qe("XSmall.fontFamily"),fontSize:qe("XSmall.fontSize"),fontWeight:qe("XSmall.fontWeight"),lineHeight:qe("XSmall.lineHeight"),letterSpacing:qe("XSmall.letterSpacing")}},Qe=[Ge.OpenSans,Ge.PlusJakartaSans],Ze=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},tn=(t,e)=>n=>{var i;const a=Ke[t].fontFamily(n),r=Ke[t].fontWeight(n),o=Qe.find((t=>Object.values(t).includes(a)));return o?l`
                font-family: ${Ze(o,e)||Ze(o,r)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(i=en(e)||r)&&void 0!==i?i:"normal"};
        `},en=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nn=t=>{if(t>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},an=(t,e,n=!1)=>i=>{const a=Ke[t],r=a.fontSize(i);return l`
            ${tn(t,e)}
            font-size: ${r}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${l`
                margin-bottom: ${r*(n?1.05:0)}rem;
            `}
        `},rn=(t=!1,e=!1,n=void 0)=>e?l`
            display: block;
            ${nn(n)}
        `:t?l`
            display: inline;
        `:l`
            display: block;
            ${nn(n)}
        `;var on;!function(t){t.D1=o.h1`
        ${t=>l`
                ${an("D1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=o.h1`
        ${t=>l`
                ${an("D2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=o.h1`
        ${t=>l`
                ${an("D3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=o.h1`
        ${t=>l`
                ${an("D4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=o.h1`
        ${t=>l`
                ${an("DBody",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=o.h1`
        ${t=>l`
                ${an("H1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=o.h2`
        ${t=>l`
                ${an("H2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=o.h3`
        ${t=>l`
                ${an("H3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=o.h4`
        ${t=>l`
                ${an("H4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=o.h5`
        ${t=>l`
                ${an("H5",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=o.h6`
        ${t=>l`
                ${an("H6",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=o.p`
        ${t=>l`
                ${an("Body",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=o.p`
        ${t=>l`
                ${an("BodySmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=o.span`
        ${t=>l`
                ${an("XSmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>sn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>sn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(on||(on={}));const ln=o.a`
    ${t=>l`
            ${an(t.textStyle,t.weight)}
            color: ${Je};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ne};

                svg {
                    color: ${Ne};
                }
            }
        `}
`,cn=o(r)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,sn=n=>{var{external:i=!1,children:a}=n,r=c(n,["external","children"]);return t(ln,Object.assign({},r,{children:[a,i&&e(cn,{})]}))},gn=o.div`
    border-radius: 0.5rem;
    background: ${Xe[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,dn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},fn=t=>Object.keys(dn).reduce(((e,n)=>{const i=dn[n];return e[n]=`@media screen and (${t}: ${i}px)`,e}),{}),hn=fn("max-width"),pn=(fn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),un=o.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${t=>(t=>{switch(t){case"left":return l`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${hn.mobileL} {
                    width: auto;
                }
            `;case"right":return l`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${hn.mobileL} {
                    width: auto;
                }
            `;case"bottom":return l`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${hn.mobileL} {
                    max-width: 80vw;
                }
            `;default:return l`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${hn.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?l`
            visibility: "visible";
            opacity: 1;
            transition: ${pn};
            z-index: 2;
        `:l`
            visibility: "hidden";
            opacity: 0;
            transition: ${pn};
            z-index: -1;
        `}
`,Fn=o((t=>{var{children:n}=t,i=c(t,["children"]);const a=i["data-testid"]||"card";return e(gn,Object.assign({},i,{"data-testid":a},{children:"string"==typeof n?e(on.Body,{children:n}):n}))}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,mn=o.div`
    position: absolute;
    overflow: hidden;

    ${t=>{switch(t.position){case"top":default:return l`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${Xe[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return l`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${Xe[8]}
                            transparent transparent;
                    }
                `;case"left":return l`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${Xe[8]};
                    }
                `;case"bottom":return l`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${Xe[8]} transparent;
                    }
                `}}}
`,Sn=o.div`
    position: relative;
`,yn=r=>{var{visible:o,position:l="top",children:s}=r,g=c(r,["visible","position","children"]);const d=g["data-testid"]||"tooltip",[f,h]=n(l),p=i(null);a((()=>(F(),window.addEventListener("resize",Y(u,300)),()=>{window.removeEventListener("resize",Y(u,300))})),[]);const u=()=>{F()},F=()=>{if(p.current){const t=p.current.getBoundingClientRect();if(t.x<0)switch(l){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(t.x+t.width>window.outerWidth)switch(l){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(l)}};return t(un,Object.assign({position:f,"data-testid":d,visible:o,ref:p},g,{children:[e(Fn,{children:"string"==typeof s?e(on.BodySmall,{children:s}):s}),e(mn,{position:f})]}))},Bn=(n,i)=>a=>{const{tooltipVisible:r,position:o}=a,l=c(a,["tooltipVisible","position"]);return t(Sn,{children:[e(n,Object.assign({},l)),e(yn,Object.assign({visible:r,position:o},{children:i.content}))]})};export{yn as Tooltip,Bn as withTooltip};
//# sourceMappingURL=index.js.map
