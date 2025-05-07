import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as a,useEffect as i}from"react";import{ExternalIcon as o}from"@lifesg/react-icons/external";import r,{css as l}from"styled-components";function c(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},d="object"==typeof f&&f&&f.Object===Object&&f,h="object"==typeof self&&self&&self.Object===Object&&self,p=d||h||Function("return this")(),u=p,F=function(){return u.Date.now()},m=/\s/;var S=function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e},y=/^\s+/;var B=function(t){return t?t.slice(0,S(t)+1).replace(y,""):t},b=p.Symbol,D=b,v=Object.prototype,x=v.hasOwnProperty,H=v.toString,E=D?D.toStringTag:void 0;var w=function(t){var e=x.call(t,E),n=t[E];try{t[E]=void 0;var a=!0}catch(t){}var i=H.call(t);return a&&(e?t[E]=n:delete t[E]),i},$=Object.prototype.toString;var k=w,z=function(t){return $.call(t)},A=b?b.toStringTag:void 0;var O=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?k(t):z(t)};var C=O,_=function(t){return null!=t&&"object"==typeof t};var V=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==C(t)},W=B,P=g,T=V,j=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,R=/^0o[0-7]+$/i,I=parseInt;var J=g,N=F,X=function(t){if("number"==typeof t)return t;if(T(t))return NaN;if(P(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=P(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=W(t);var n=L.test(t);return n||R.test(t)?I(t.slice(2),n?2:8):j.test(t)?NaN:+t},G=Math.max,M=Math.min;var Y=s((function(t,e,n){var a,i,o,r,l,c,f=0,s=!1,g=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=a,o=i;return a=i=void 0,f=e,r=t.apply(o,n)}function p(t){var n=t-c;return void 0===c||n>=e||n<0||g&&t-f>=o}function u(){var t=N();if(p(t))return F(t);l=setTimeout(u,function(t){var n=e-(t-c);return g?M(n,o-(t-f)):n}(t))}function F(t){return l=void 0,d&&a?h(t):(a=i=void 0,r)}function m(){var t=N(),n=p(t);if(a=arguments,i=this,c=t,n){if(void 0===l)return function(t){return f=t,l=setTimeout(u,e),s?h(t):r}(c);if(g)return clearTimeout(l),l=setTimeout(u,e),h(c)}return void 0===l&&(l=setTimeout(u,e)),r}return e=X(e)||0,J(n)&&(s=!!n.leading,o=(g="maxWait"in n)?G(X(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==l&&clearTimeout(l),f=0,a=c=i=l=void 0},m.flush=function(){return void 0===l?r:F(N())},m}));var U=Array.isArray,q=U,K=V,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var tt=function(t,e){if(q(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!K(t))||(Z.test(t)||!Q.test(t)||null!=e&&t in Object(e))},et=O,nt=g;var at,it=function(t){if(!nt(t))return!1;var e=et(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},ot=p["__core-js_shared__"],rt=(at=/[^.]+$/.exec(ot&&ot.keys&&ot.keys.IE_PROTO||""))?"Symbol(src)_1."+at:"";var lt=function(t){return!!rt&&rt in t},ct=Function.prototype.toString;var ft=it,st=lt,gt=g,dt=function(t){if(null!=t){try{return ct.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ht=/^\[object .+?Constructor\]$/,pt=Function.prototype,ut=Object.prototype,Ft=pt.toString,mt=ut.hasOwnProperty,St=RegExp("^"+Ft.call(mt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var yt=function(t){return!(!gt(t)||st(t))&&(ft(t)?St:ht).test(dt(t))},Bt=function(t,e){return null==t?void 0:t[e]};var bt=function(t,e){var n=Bt(t,e);return yt(n)?n:void 0},Dt=bt(Object,"create"),vt=Dt;var xt=function(){this.__data__=vt?vt(null):{},this.size=0};var Ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Et=Dt,wt=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;if(Et){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return wt.call(e,t)?e[t]:void 0},kt=Dt,zt=Object.prototype.hasOwnProperty;var At=Dt;var Ot=xt,Ct=Ht,_t=$t,Vt=function(t){var e=this.__data__;return kt?void 0!==e[t]:zt.call(e,t)},Wt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=At&&void 0===e?"__lodash_hash_undefined__":e,this};function Pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Pt.prototype.clear=Ot,Pt.prototype.delete=Ct,Pt.prototype.get=_t,Pt.prototype.has=Vt,Pt.prototype.set=Wt;var Tt=Pt;var jt=function(){this.__data__=[],this.size=0};var Lt=function(t,e){return t===e||t!=t&&e!=e};var Rt=function(t,e){for(var n=t.length;n--;)if(Lt(t[n][0],e))return n;return-1},It=Rt,Jt=Array.prototype.splice;var Nt=Rt;var Xt=Rt;var Gt=Rt;var Mt=jt,Yt=function(t){var e=this.__data__,n=It(e,t);return!(n<0)&&(n==e.length-1?e.pop():Jt.call(e,n,1),--this.size,!0)},Ut=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},qt=function(t){return Xt(this.__data__,t)>-1},Kt=function(t,e){var n=this.__data__,a=Gt(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Qt.prototype.clear=Mt,Qt.prototype.delete=Yt,Qt.prototype.get=Ut,Qt.prototype.has=qt,Qt.prototype.set=Kt;var Zt=Qt,te=bt(p,"Map"),ee=Tt,ne=Zt,ae=te;var ie=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var oe=function(t,e){var n=t.__data__;return ie(e)?n["string"==typeof e?"string":"hash"]:n.map},re=oe;var le=oe;var ce=oe;var fe=oe;var se=function(){this.size=0,this.__data__={hash:new ee,map:new(ae||ne),string:new ee}},ge=function(t){var e=re(this,t).delete(t);return this.size-=e?1:0,e},de=function(t){return le(this,t).get(t)},he=function(t){return ce(this,t).has(t)},pe=function(t,e){var n=fe(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this};function ue(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}ue.prototype.clear=se,ue.prototype.delete=ge,ue.prototype.get=de,ue.prototype.has=he,ue.prototype.set=pe;var Fe=ue;function me(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=e?e.apply(this,a):a[0],o=n.cache;if(o.has(i))return o.get(i);var r=t.apply(this,a);return n.cache=o.set(i,r)||o,r};return n.cache=new(me.Cache||Fe),n}me.Cache=Fe;var Se=me;var ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Be=/\\(\\)?/g,be=function(t){var e=Se(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ye,(function(t,n,a,i){e.push(a?i.replace(Be,"$1"):n||t)})),e}));var De=function(t,e){for(var n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i},ve=U,xe=V,He=b?b.prototype:void 0,Ee=He?He.toString:void 0;var we=function t(e){if("string"==typeof e)return e;if(ve(e))return De(e,t)+"";if(xe(e))return Ee?Ee.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},$e=we;var ke=U,ze=tt,Ae=be,Oe=function(t){return null==t?"":$e(t)};var Ce=V;var _e=function(t,e){return ke(t)?t:ze(t,e)?[t]:Ae(Oe(t))},Ve=function(t){if("string"==typeof t||Ce(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var We=function(t,e){for(var n=0,a=(e=_e(e,t)).length;null!=t&&n<a;)t=t[Ve(e[n++])];return n&&n==a?t:void 0};var Pe=s((function(t,e,n){var a=null==t?void 0:We(t,e);return void 0===a?n:a}));const Te=(t,e,n)=>e?Pe(n,e)||Pe(t,e):n||t,je=(t,e)=>{const n=e||t.defaultValue;return Pe(t.collections,n)};var Le;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Le||(Le={}));const Re={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ie=t=>e=>{const n=e.theme,a=je(Re,n[Le.colorScheme]);return n.options&&n.options.color?Te(a,t,n.options.color):Te(a,t)},Je=(Ie("Brand.1"),Ie("Brand.2"),Ie("Brand.3"),Ie("Brand.4"),Ie("Brand.5"),Ie("Brand.6"),Ie("Primary")),Ne=(Ie("PrimaryDark"),Ie("Secondary")),Xe=(Ie("Accent.Light.1"),Ie("Accent.Light.2"),Ie("Accent.Light.3"),Ie("Accent.Light.4"),Ie("Accent.Light.5"),Ie("Accent.Light.6"),Ie("Accent.Dark.1"),Ie("Accent.Dark.2"),Ie("Accent.Dark.3"),{1:Ie("Neutral.1"),2:Ie("Neutral.2"),3:Ie("Neutral.3"),4:Ie("Neutral.4"),5:Ie("Neutral.5"),6:Ie("Neutral.6"),7:Ie("Neutral.7"),8:Ie("Neutral.8")}),Ge=(Ie("Validation.Green.Text"),Ie("Validation.Green.Icon"),Ie("Validation.Green.Border"),Ie("Validation.Green.Background"),Ie("Validation.Orange.Text"),Ie("Validation.Orange.Icon"),Ie("Validation.Orange.Border"),Ie("Validation.Orange.Background"),Ie("Validation.Orange.Badge"),Ie("Validation.Red.Text"),Ie("Validation.Red.Icon"),Ie("Validation.Red.Border"),Ie("Validation.Red.Background"),Ie("Validation.Blue.Text"),Ie("Validation.Blue.Icon"),Ie("Validation.Blue.Border"),Ie("Validation.Blue.Background"),Ie("Shadow.Accent"),Ie("Shadow.Red"),Ie("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Me={D1:{fontFamily:Ge.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ge.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ge.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ge.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ge.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ge.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ge.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ye={D1:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Ge.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Ge.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Ue={collections:{base:Me,oneservice:{D1:{fontFamily:Ge.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ge.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ge.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ge.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ge.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ge.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ge.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ge.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ge.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ge.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ye},defaultValue:"base"},qe=t=>e=>{const n=e.theme,a=je(Ue,n[Le.textStyleScheme]);return n.options&&n.options.textStyle?Te(a,t,n.options.textStyle):Te(a,t)},Ke={D1:{fontFamily:qe("D1.fontFamily"),fontSize:qe("D1.fontSize"),fontWeight:qe("D1.fontWeight"),lineHeight:qe("D1.lineHeight"),letterSpacing:qe("D1.letterSpacing"),fontVariant:qe("D1.fontVariant")},D2:{fontFamily:qe("D2.fontFamily"),fontSize:qe("D2.fontSize"),fontWeight:qe("D2.fontWeight"),lineHeight:qe("D2.lineHeight"),letterSpacing:qe("D2.letterSpacing"),fontVariant:qe("D2.fontVariant")},D3:{fontFamily:qe("D3.fontFamily"),fontSize:qe("D3.fontSize"),fontWeight:qe("D3.fontWeight"),lineHeight:qe("D3.lineHeight"),letterSpacing:qe("D3.letterSpacing"),fontVariant:qe("D3.fontVariant")},D4:{fontFamily:qe("D4.fontFamily"),fontSize:qe("D4.fontSize"),fontWeight:qe("D4.fontWeight"),lineHeight:qe("D4.lineHeight"),letterSpacing:qe("D4.letterSpacing"),fontVariant:qe("D4.fontVariant")},DBody:{fontFamily:qe("DBody.fontFamily"),fontSize:qe("DBody.fontSize"),fontWeight:qe("DBody.fontWeight"),lineHeight:qe("DBody.lineHeight"),letterSpacing:qe("DBody.letterSpacing"),fontVariant:qe("DBody.fontVariant")},H1:{fontFamily:qe("H1.fontFamily"),fontSize:qe("H1.fontSize"),fontWeight:qe("H1.fontWeight"),lineHeight:qe("H1.lineHeight"),letterSpacing:qe("H1.letterSpacing"),fontVariant:qe("H1.fontVariant")},H2:{fontFamily:qe("H2.fontFamily"),fontSize:qe("H2.fontSize"),fontWeight:qe("H2.fontWeight"),lineHeight:qe("H2.lineHeight"),letterSpacing:qe("H2.letterSpacing"),fontVariant:qe("H2.fontVariant")},H3:{fontFamily:qe("H3.fontFamily"),fontSize:qe("H3.fontSize"),fontWeight:qe("H3.fontWeight"),lineHeight:qe("H3.lineHeight"),letterSpacing:qe("H3.letterSpacing"),fontVariant:qe("H3.fontVariant")},H4:{fontFamily:qe("H4.fontFamily"),fontSize:qe("H4.fontSize"),fontWeight:qe("H4.fontWeight"),lineHeight:qe("H4.lineHeight"),letterSpacing:qe("H4.letterSpacing"),fontVariant:qe("H4.fontVariant")},H5:{fontFamily:qe("H5.fontFamily"),fontSize:qe("H5.fontSize"),fontWeight:qe("H5.fontWeight"),lineHeight:qe("H5.lineHeight"),letterSpacing:qe("H5.letterSpacing"),fontVariant:qe("H5.fontVariant")},H6:{fontFamily:qe("H6.fontFamily"),fontSize:qe("H6.fontSize"),fontWeight:qe("H6.fontWeight"),lineHeight:qe("H6.lineHeight"),letterSpacing:qe("H6.letterSpacing"),fontVariant:qe("H6.fontVariant")},Body:{fontFamily:qe("Body.fontFamily"),fontSize:qe("Body.fontSize"),fontWeight:qe("Body.fontWeight"),lineHeight:qe("Body.lineHeight"),letterSpacing:qe("Body.letterSpacing"),fontVariant:qe("Body.fontVariant")},BodySmall:{fontFamily:qe("BodySmall.fontFamily"),fontSize:qe("BodySmall.fontSize"),fontWeight:qe("BodySmall.fontWeight"),lineHeight:qe("BodySmall.lineHeight"),letterSpacing:qe("BodySmall.letterSpacing"),fontVariant:qe("BodySmall.fontVariant")},XSmall:{fontFamily:qe("XSmall.fontFamily"),fontSize:qe("XSmall.fontSize"),fontWeight:qe("XSmall.fontWeight"),lineHeight:qe("XSmall.lineHeight"),letterSpacing:qe("XSmall.letterSpacing"),fontVariant:qe("XSmall.fontVariant")}},Qe=[Ge.OpenSans,Ge.PlusJakartaSans],Ze=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},tn=(t,e)=>n=>{var a;const i=Ke[t].fontFamily(n),o=Ke[t].fontWeight(n),r=Qe.find((t=>Object.values(t).includes(i)));return r?l`
                font-family: ${Ze(r,e)||Ze(r,o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(a=en(e)||o)&&void 0!==a?a:"normal"};
        `},en=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nn=t=>{if(t>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},an=(t,e,n=!1)=>a=>{const i=Ke[t],o=i.fontSize(a);return l`
            ${tn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            font-variant: ${i.fontVariant(a)||"normal"};
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},on=(t=!1,e=!1,n=void 0)=>e?l`
            display: block;
            ${nn(n)}
        `:t?l`
            display: inline;
        `:l`
            display: block;
            ${nn(n)}
        `;var rn;!function(t){t.D1=r.h1`
        ${t=>l`
                ${an("D1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>l`
                ${an("D2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>l`
                ${an("D3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>l`
                ${an("D4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>l`
                ${an("DBody",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>l`
                ${an("H1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>l`
                ${an("H2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>l`
                ${an("H3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>l`
                ${an("H4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>l`
                ${an("H5",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>l`
                ${an("H6",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>l`
                ${an("Body",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>l`
                ${an("BodySmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>l`
                ${an("XSmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>fn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>fn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(rn||(rn={}));const ln=r.a`
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
`,cn=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,fn=n=>{var{external:a=!1,children:i}=n,o=c(n,["external","children"]);return t(ln,Object.assign({},o,{children:[i,a&&e(cn,{})]}))},sn=r.div`
    border-radius: 0.5rem;
    background: ${Xe[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,gn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},dn=t=>Object.keys(gn).reduce(((e,n)=>{const a=gn[n];return e[n]=`@media screen and (${t}: ${a}px)`,e}),{}),hn=dn("max-width"),pn=(dn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),un=r.div`
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
`,Fn=r((t=>{var{children:n}=t,a=c(t,["children"]);const i=a["data-testid"]||"card";return e(sn,Object.assign({},a,{"data-testid":i},{children:"string"==typeof n?e(rn.Body,{children:n}):n}))}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,mn=r.div`
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
`,Sn=r.div`
    position: relative;
`,yn=o=>{var{visible:r,position:l="top",children:f}=o,s=c(o,["visible","position","children"]);const g=s["data-testid"]||"tooltip",[d,h]=n(l),p=a(null);i((()=>(F(),window.addEventListener("resize",Y(u,300)),()=>{window.removeEventListener("resize",Y(u,300))})),[]);const u=()=>{F()},F=()=>{if(p.current){const t=p.current.getBoundingClientRect();if(t.x<0)switch(l){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(t.x+t.width>window.outerWidth)switch(l){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(l)}};return t(un,Object.assign({position:d,"data-testid":g,visible:r,ref:p},s,{children:[e(Fn,{children:"string"==typeof f?e(rn.BodySmall,{children:f}):f}),e(mn,{position:d})]}))},Bn=(n,a)=>i=>{const{tooltipVisible:o,position:r}=i,l=c(i,["tooltipVisible","position"]);return t(Sn,{children:[e(n,Object.assign({},l)),e(yn,Object.assign({visible:o,position:r},{children:a.content}))]})};export{yn as Tooltip,Bn as withTooltip};
//# sourceMappingURL=index.js.map
