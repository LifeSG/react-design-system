import{jsxs as e,jsx as t}from"react/jsx-runtime";import{forwardRef as n}from"react";import a,{css as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";function r(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,f="object"==typeof l&&l&&l.Object===Object&&l,F="object"==typeof self&&self&&self.Object===Object&&self,h=f||F||Function("return this")(),s=h.Symbol,d=s,u=Object.prototype,p=u.hasOwnProperty,S=u.toString,B=d?d.toStringTag:void 0;var y=function(e){var t=p.call(e,B),n=e[B];try{e[B]=void 0;var a=!0}catch(e){}var i=S.call(e);return a&&(t?e[B]=n:delete e[B]),i},m=Object.prototype.toString;var D=y,H=function(e){return m.call(e)},v=s?s.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?D(e):H(e)};var b=E,$=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==b(e)},z=g,O=A,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var x=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(C.test(e)||!k.test(e)||null!=t&&e in Object(t))};var _=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=E,w=_;var P,T=function(e){if(!w(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=h["__core-js_shared__"],R=(P=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var L=function(e){return!!R&&R in e},I=Function.prototype.toString;var V=T,J=L,N=_,G=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,K=U.hasOwnProperty,Q=RegExp("^"+q.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!N(e)||J(e))&&(V(e)?Q:X).test(G(e))},Z=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Z(e,t);return Y(n)?n:void 0},te=ee(Object,"create"),ne=te;var ae=function(){this.__data__=ne?ne(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},oe=te,re=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return re.call(t,e)?t[e]:void 0},ce=te,ge=Object.prototype.hasOwnProperty;var fe=te;var Fe=ae,he=ie,se=le,de=function(e){var t=this.__data__;return ce?void 0!==t[e]:ge.call(t,e)},ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}pe.prototype.clear=Fe,pe.prototype.delete=he,pe.prototype.get=se,pe.prototype.has=de,pe.prototype.set=ue;var Se=pe;var Be=function(){this.__data__=[],this.size=0};var ye=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(ye(e[n][0],t))return n;return-1},De=me,He=Array.prototype.splice;var ve=me;var Ee=me;var be=me;var $e=Be,Ae=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return Ee(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,a=be(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ce.prototype.clear=$e,Ce.prototype.delete=Ae,Ce.prototype.get=ze,Ce.prototype.has=Oe,Ce.prototype.set=ke;var xe=Ce,_e=ee(h,"Map"),We=Se,we=xe,Pe=_e;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=je;var Le=je;var Ie=je;var Ve=je;var Je=function(){this.size=0,this.__data__={hash:new We,map:new(Pe||we),string:new We}},Ne=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Le(this,e).get(e)},Xe=function(e){return Ie(this,e).has(e)},Me=function(e,t){var n=Ve(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ue.prototype.clear=Je,Ue.prototype.delete=Ne,Ue.prototype.get=Ge,Ue.prototype.has=Xe,Ue.prototype.set=Me;var qe=Ue;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=t?t.apply(this,a):a[0],o=n.cache;if(o.has(i))return o.get(i);var r=e.apply(this,a);return n.cache=o.set(i,r)||o,r};return n.cache=new(Ke.Cache||qe),n}Ke.Cache=qe;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ze=/\\(\\)?/g,et=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,a,i){t.push(a?i.replace(Ze,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,a=null==e?0:e.length,i=Array(a);++n<a;)i[n]=t(e[n],n,e);return i},nt=g,at=A,it=s?s.prototype:void 0,ot=it?it.toString:void 0;var rt=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(at(t))return ot?ot.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},lt=rt;var ct=g,gt=x,ft=et,Ft=function(e){return null==e?"":lt(e)};var ht=A;var st=function(e,t){return ct(e)?e:gt(e,t)?[e]:ft(Ft(e))},dt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var ut=function(e,t){for(var n=0,a=(t=st(t,e)).length;null!=e&&n<a;)e=e[dt(t[n++])];return n&&n==a?e:void 0};var pt=c((function(e,t,n){var a=null==e?void 0:ut(e,t);return void 0===a?n:a}));const St=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(yt||(yt={}));const mt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,a=Bt(mt,n[yt.colorScheme]);return n.options&&n.options.color?St(a,e,n.options.color):St(a,e)},Ht=(Dt("Brand.1"),Dt("Brand.2"),Dt("Brand.3"),Dt("Brand.4"),Dt("Brand.5"),Dt("Brand.6"),Dt("Primary")),vt=(Dt("PrimaryDark"),Dt("Secondary")),Et=(Dt("Accent.Light.1"),Dt("Accent.Light.2"),Dt("Accent.Light.3"),Dt("Accent.Light.4"),Dt("Accent.Light.5"),Dt("Accent.Light.6"),Dt("Accent.Dark.1"),Dt("Accent.Dark.2"),Dt("Accent.Dark.3"),{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")}),bt=(Dt("Validation.Green.Text"),Dt("Validation.Green.Icon"),Dt("Validation.Green.Border"),Dt("Validation.Green.Background"),Dt("Validation.Orange.Text"),Dt("Validation.Orange.Icon"),Dt("Validation.Orange.Border"),Dt("Validation.Orange.Background"),Dt("Validation.Orange.Badge"),Dt("Validation.Red.Text"),Dt("Validation.Red.Icon"),Dt("Validation.Red.Border"),Dt("Validation.Red.Background"),Dt("Validation.Blue.Text"),Dt("Validation.Blue.Icon"),Dt("Validation.Blue.Border"),Dt("Validation.Blue.Background"),Dt("Shadow.Accent"),Dt("Shadow.Red"),Dt("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),$t={D1:{fontFamily:bt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},At={D1:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:bt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:bt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:bt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},zt={collections:{base:$t,oneservice:{D1:{fontFamily:bt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:bt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:bt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:bt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:bt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:bt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:bt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:bt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:bt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:bt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:bt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:bt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:At},defaultValue:"base"},Ot=e=>t=>{const n=t.theme,a=Bt(zt,n[yt.textStyleScheme]);return n.options&&n.options.textStyle?St(a,e,n.options.textStyle):St(a,e)},kt={D1:{fontFamily:Ot("D1.fontFamily"),fontSize:Ot("D1.fontSize"),fontWeight:Ot("D1.fontWeight"),lineHeight:Ot("D1.lineHeight"),letterSpacing:Ot("D1.letterSpacing")},D2:{fontFamily:Ot("D2.fontFamily"),fontSize:Ot("D2.fontSize"),fontWeight:Ot("D2.fontWeight"),lineHeight:Ot("D2.lineHeight"),letterSpacing:Ot("D2.letterSpacing")},D3:{fontFamily:Ot("D3.fontFamily"),fontSize:Ot("D3.fontSize"),fontWeight:Ot("D3.fontWeight"),lineHeight:Ot("D3.lineHeight"),letterSpacing:Ot("D3.letterSpacing")},D4:{fontFamily:Ot("D4.fontFamily"),fontSize:Ot("D4.fontSize"),fontWeight:Ot("D4.fontWeight"),lineHeight:Ot("D4.lineHeight"),letterSpacing:Ot("D4.letterSpacing")},DBody:{fontFamily:Ot("DBody.fontFamily"),fontSize:Ot("DBody.fontSize"),fontWeight:Ot("DBody.fontWeight"),lineHeight:Ot("DBody.lineHeight"),letterSpacing:Ot("DBody.letterSpacing")},H1:{fontFamily:Ot("H1.fontFamily"),fontSize:Ot("H1.fontSize"),fontWeight:Ot("H1.fontWeight"),lineHeight:Ot("H1.lineHeight"),letterSpacing:Ot("H1.letterSpacing")},H2:{fontFamily:Ot("H2.fontFamily"),fontSize:Ot("H2.fontSize"),fontWeight:Ot("H2.fontWeight"),lineHeight:Ot("H2.lineHeight"),letterSpacing:Ot("H2.letterSpacing")},H3:{fontFamily:Ot("H3.fontFamily"),fontSize:Ot("H3.fontSize"),fontWeight:Ot("H3.fontWeight"),lineHeight:Ot("H3.lineHeight"),letterSpacing:Ot("H3.letterSpacing")},H4:{fontFamily:Ot("H4.fontFamily"),fontSize:Ot("H4.fontSize"),fontWeight:Ot("H4.fontWeight"),lineHeight:Ot("H4.lineHeight"),letterSpacing:Ot("H4.letterSpacing")},H5:{fontFamily:Ot("H5.fontFamily"),fontSize:Ot("H5.fontSize"),fontWeight:Ot("H5.fontWeight"),lineHeight:Ot("H5.lineHeight"),letterSpacing:Ot("H5.letterSpacing")},H6:{fontFamily:Ot("H6.fontFamily"),fontSize:Ot("H6.fontSize"),fontWeight:Ot("H6.fontWeight"),lineHeight:Ot("H6.lineHeight"),letterSpacing:Ot("H6.letterSpacing")},Body:{fontFamily:Ot("Body.fontFamily"),fontSize:Ot("Body.fontSize"),fontWeight:Ot("Body.fontWeight"),lineHeight:Ot("Body.lineHeight"),letterSpacing:Ot("Body.letterSpacing")},BodySmall:{fontFamily:Ot("BodySmall.fontFamily"),fontSize:Ot("BodySmall.fontSize"),fontWeight:Ot("BodySmall.fontWeight"),lineHeight:Ot("BodySmall.lineHeight"),letterSpacing:Ot("BodySmall.letterSpacing")},XSmall:{fontFamily:Ot("XSmall.fontFamily"),fontSize:Ot("XSmall.fontSize"),fontWeight:Ot("XSmall.fontWeight"),lineHeight:Ot("XSmall.lineHeight"),letterSpacing:Ot("XSmall.letterSpacing")}},Ct=[bt.OpenSans,bt.PlusJakartaSans],xt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},_t=(e,t)=>n=>{var a;const o=kt[e].fontFamily(n),r=kt[e].fontWeight(n),l=Ct.find((e=>Object.values(e).includes(o)));return l?i`
                font-family: ${xt(l,t)||xt(l,r)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(a=Wt(t)||r)&&void 0!==a?a:"normal"};
        `},Wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wt=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pt=(e,t,n=!1)=>a=>{const o=kt[e],r=o.fontSize(a);return i`
            ${_t(e,t)}
            font-size: ${r}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            ${i`
                margin-bottom: ${r*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,n=void 0)=>t?i`
            display: block;
            ${wt(n)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${wt(n)}
        `;var jt;!function(e){e.D1=a.h1`
        ${e=>i`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>i`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>i`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>i`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>i`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>i`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>i`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>i`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>i`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>i`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>i`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>i`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>i`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>i`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>It(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>It(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Rt=a.a`
    ${e=>i`
            ${Pt(e.textStyle,e.weight)}
            color: ${Ht};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${vt};

                svg {
                    color: ${vt};
                }
            }
        `}
`,Lt=a(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=n=>{var{external:a=!1,children:i}=n,o=r(n,["external","children"]);return e(Rt,Object.assign({},o,{children:[i,a&&t(Lt,{})]}))};var Vt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Vt||(Vt={}));const Jt=a.div`
    ${e=>(e=>{const{textSize:t}=e||{};return i`
        // Text styling
        ${t&&Pt(t,"regular")}

        strong {
            font-family: ${bt.OpenSans.Semibold};
            ${t&&Pt(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${bt.OpenSans.Semibold};
            ${t&&Pt(t,"semibold")}
            color: ${Ht};
            text-decoration: none;

            svg {
                color: ${Ht};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${vt};

                svg {
                    color: ${vt};
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
    `})({textSize:e.$textSize})}
    ${e=>e.color&&i`
            color: ${e.color};
        `}
`,Nt=n(((e,n)=>{const{baseTextColor:a,baseTextSize:i,inline:o}=e,l=r(e,["baseTextColor","baseTextSize","inline"]);return t(Jt,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:a},l))}));export{Nt as Markup};
//# sourceMappingURL=index.js.map
