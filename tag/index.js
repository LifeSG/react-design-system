import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as a}from"styled-components";import{ExternalIcon as r}from"@lifesg/react-icons/external";function i(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,g="object"==typeof o&&o&&o.Object===Object&&o,d="object"==typeof self&&self&&self.Object===Object&&self,f=g||d||Function("return this")(),F=f.Symbol,h=F,u=Object.prototype,s=u.hasOwnProperty,p=u.toString,B=h?h.toStringTag:void 0;var S=function(e){var t=s.call(e,B),n=e[B];try{e[B]=void 0;var a=!0}catch(e){}var r=p.call(e);return a&&(t?e[B]=n:delete e[B]),r},y=Object.prototype.toString;var m=S,D=function(e){return y.call(e)},v=F?F.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?m(e):D(e)};var b=H,E=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==b(e)},$=c,x=k,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var z=function(e,t){if($(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!x(e))||(O.test(e)||!A.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_=H,w=C;var W,T=function(e){if(!w(e))return!1;var t=_(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=f["__core-js_shared__"],V=(W=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var N=function(e){return!!V&&V in e},R=Function.prototype.toString;var j=T,I=N,L=C,J=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,K=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!L(e)||I(e))&&(j(e)?K:G).test(J(e))},Y=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},ee=Z(Object,"create"),te=ee;var ne=function(){this.__data__=te?te(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},re=ee,ie=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(re){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ie.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var ge=ee;var de=ne,fe=ae,Fe=oe,he=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}se.prototype.clear=de,se.prototype.delete=fe,se.prototype.get=Fe,se.prototype.has=he,se.prototype.set=ue;var pe=se;var Be=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var ye=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},me=ye,De=Array.prototype.splice;var ve=ye;var He=ye;var be=ye;var Ee=Be,ke=function(e){var t=this.__data__,n=me(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},xe=function(e){return He(this.__data__,e)>-1},Ae=function(e,t){var n=this.__data__,a=be(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Oe.prototype.clear=Ee,Oe.prototype.delete=ke,Oe.prototype.get=$e,Oe.prototype.has=xe,Oe.prototype.set=Ae;var ze=Oe,Ce=Z(f,"Map"),_e=pe,we=ze,We=Ce;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Pe;var Ne=Pe;var Re=Pe;var je=Pe;var Ie=function(){this.size=0,this.__data__={hash:new _e,map:new(We||we),string:new _e}},Le=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ne(this,e).get(e)},Ge=function(e){return Re(this,e).has(e)},Xe=function(e,t){var n=je(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Me.prototype.clear=Ie,Me.prototype.delete=Le,Me.prototype.get=Je,Me.prototype.has=Ge,Me.prototype.set=Xe;var Ue=Me;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var o=e.apply(this,a);return n.cache=i.set(r,o)||i,o};return n.cache=new(qe.Cache||Ue),n}qe.Cache=Ue;var Ke=qe;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,Ze=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,a,r){t.push(a?r.replace(Ye,"$1"):n||e)})),t}));var et=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},tt=c,nt=k,at=F?F.prototype:void 0,rt=at?at.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(nt(t))return rt?rt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ot=it;var lt=c,ct=z,gt=Ze,dt=function(e){return null==e?"":ot(e)};var ft=k;var Ft=function(e,t){return lt(e)?e:ct(e,t)?[e]:gt(dt(e))},ht=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var ut=function(e,t){for(var n=0,a=(t=Ft(t,e)).length;null!=e&&n<a;)e=e[ht(t[n++])];return n&&n==a?e:void 0};var st=l((function(e,t,n){var a=null==e?void 0:ut(e,t);return void 0===a?n:a}));const pt=(e,t,n)=>t?st(n,t)||st(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return st(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},mt=e=>t=>{const n=t.theme,a=Bt(yt,n[St.colorScheme]);return n.options&&n.options.color?pt(a,e,n.options.color):pt(a,e)},Dt={Brand:{1:mt("Brand.1"),2:mt("Brand.2"),3:mt("Brand.3"),4:mt("Brand.4"),5:mt("Brand.5"),6:mt("Brand.6")},Primary:mt("Primary"),PrimaryDark:mt("PrimaryDark"),Secondary:mt("Secondary"),Accent:{Light:{1:mt("Accent.Light.1"),2:mt("Accent.Light.2"),3:mt("Accent.Light.3"),4:mt("Accent.Light.4"),5:mt("Accent.Light.5"),6:mt("Accent.Light.6")},Dark:{1:mt("Accent.Dark.1"),2:mt("Accent.Dark.2"),3:mt("Accent.Dark.3")}},Neutral:{1:mt("Neutral.1"),2:mt("Neutral.2"),3:mt("Neutral.3"),4:mt("Neutral.4"),5:mt("Neutral.5"),6:mt("Neutral.6"),7:mt("Neutral.7"),8:mt("Neutral.8")},Validation:{Green:{Text:mt("Validation.Green.Text"),Icon:mt("Validation.Green.Icon"),Border:mt("Validation.Green.Border"),Background:mt("Validation.Green.Background")},Orange:{Text:mt("Validation.Orange.Text"),Icon:mt("Validation.Orange.Icon"),Border:mt("Validation.Orange.Border"),Background:mt("Validation.Orange.Background"),Badge:mt("Validation.Orange.Badge")},Red:{Text:mt("Validation.Red.Text"),Icon:mt("Validation.Red.Icon"),Border:mt("Validation.Red.Border"),Background:mt("Validation.Red.Background")},Blue:{Text:mt("Validation.Blue.Text"),Icon:mt("Validation.Blue.Icon"),Border:mt("Validation.Blue.Border"),Background:mt("Validation.Blue.Background")}},Shadow:{Accent:mt("Shadow.Accent"),Red:mt("Shadow.Red"),Elevation:mt("Shadow.Elevation")}},vt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ht={D1:{fontFamily:vt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},bt={D1:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Et={collections:{base:Ht,oneservice:{D1:{fontFamily:vt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:vt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:vt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:vt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:vt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:vt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:vt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:vt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:vt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:vt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:vt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:bt},defaultValue:"base"},kt=e=>t=>{const n=t.theme,a=Bt(Et,n[St.textStyleScheme]);return n.options&&n.options.textStyle?pt(a,e,n.options.textStyle):pt(a,e)},$t={D1:{fontFamily:kt("D1.fontFamily"),fontSize:kt("D1.fontSize"),fontWeight:kt("D1.fontWeight"),lineHeight:kt("D1.lineHeight"),letterSpacing:kt("D1.letterSpacing")},D2:{fontFamily:kt("D2.fontFamily"),fontSize:kt("D2.fontSize"),fontWeight:kt("D2.fontWeight"),lineHeight:kt("D2.lineHeight"),letterSpacing:kt("D2.letterSpacing")},D3:{fontFamily:kt("D3.fontFamily"),fontSize:kt("D3.fontSize"),fontWeight:kt("D3.fontWeight"),lineHeight:kt("D3.lineHeight"),letterSpacing:kt("D3.letterSpacing")},D4:{fontFamily:kt("D4.fontFamily"),fontSize:kt("D4.fontSize"),fontWeight:kt("D4.fontWeight"),lineHeight:kt("D4.lineHeight"),letterSpacing:kt("D4.letterSpacing")},DBody:{fontFamily:kt("DBody.fontFamily"),fontSize:kt("DBody.fontSize"),fontWeight:kt("DBody.fontWeight"),lineHeight:kt("DBody.lineHeight"),letterSpacing:kt("DBody.letterSpacing")},H1:{fontFamily:kt("H1.fontFamily"),fontSize:kt("H1.fontSize"),fontWeight:kt("H1.fontWeight"),lineHeight:kt("H1.lineHeight"),letterSpacing:kt("H1.letterSpacing")},H2:{fontFamily:kt("H2.fontFamily"),fontSize:kt("H2.fontSize"),fontWeight:kt("H2.fontWeight"),lineHeight:kt("H2.lineHeight"),letterSpacing:kt("H2.letterSpacing")},H3:{fontFamily:kt("H3.fontFamily"),fontSize:kt("H3.fontSize"),fontWeight:kt("H3.fontWeight"),lineHeight:kt("H3.lineHeight"),letterSpacing:kt("H3.letterSpacing")},H4:{fontFamily:kt("H4.fontFamily"),fontSize:kt("H4.fontSize"),fontWeight:kt("H4.fontWeight"),lineHeight:kt("H4.lineHeight"),letterSpacing:kt("H4.letterSpacing")},H5:{fontFamily:kt("H5.fontFamily"),fontSize:kt("H5.fontSize"),fontWeight:kt("H5.fontWeight"),lineHeight:kt("H5.lineHeight"),letterSpacing:kt("H5.letterSpacing")},H6:{fontFamily:kt("H6.fontFamily"),fontSize:kt("H6.fontSize"),fontWeight:kt("H6.fontWeight"),lineHeight:kt("H6.lineHeight"),letterSpacing:kt("H6.letterSpacing")},Body:{fontFamily:kt("Body.fontFamily"),fontSize:kt("Body.fontSize"),fontWeight:kt("Body.fontWeight"),lineHeight:kt("Body.lineHeight"),letterSpacing:kt("Body.letterSpacing")},BodySmall:{fontFamily:kt("BodySmall.fontFamily"),fontSize:kt("BodySmall.fontSize"),fontWeight:kt("BodySmall.fontWeight"),lineHeight:kt("BodySmall.lineHeight"),letterSpacing:kt("BodySmall.letterSpacing")},XSmall:{fontFamily:kt("XSmall.fontFamily"),fontSize:kt("XSmall.fontSize"),fontWeight:kt("XSmall.fontWeight"),lineHeight:kt("XSmall.lineHeight"),letterSpacing:kt("XSmall.letterSpacing")}},xt=[vt.OpenSans,vt.PlusJakartaSans],At=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Ot=(e,t)=>n=>{var r;const i=$t[e].fontFamily(n),o=$t[e].fontWeight(n),l=xt.find((e=>Object.values(e).includes(i)));return l?a`
                font-family: ${At(l,t)||At(l,o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=zt(t)||o)&&void 0!==r?r:"normal"};
        `},zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ct=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,n=!1)=>r=>{const i=$t[e],o=i.fontSize(r);return a`
            ${Ot(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},wt=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${Ct(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${Ct(n)}
        `;var Wt;!function(e){e.D1=n.h1`
        ${e=>a`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>a`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>a`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>a`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>a`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>a`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>a`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>a`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>a`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>a`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>a`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>a`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>a`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>a`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const Tt=n.a`
    ${e=>a`
            ${_t(e.textStyle,e.weight)}
            color: ${Dt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dt.Secondary};

                svg {
                    color: ${Dt.Secondary};
                }
            }
        `}
`,Pt=n(r)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=n=>{var{external:a=!1,children:r}=n,o=i(n,["external","children"]);return e(Tt,Object.assign({},o,{children:[r,a&&t(Pt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const Rt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},jt=e=>Object.keys(Rt).reduce(((t,n)=>{const a=Rt[n];return t[n]=`@media screen and (${e}: ${a}px)`,t}),{}),It=jt("max-width"),Lt=(jt("min-width"),n.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${_t("XSmall","semibold")}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,i;if("solid"===e.$type)switch(r=Dt.Neutral[8],i=`0px 0px 4px 1px ${Dt.Neutral[4](e)}`,e.$color){case"grey":t=Dt.Neutral[3],n=Dt.Neutral[3];break;case"green":t=Dt.Validation.Green.Text,n=Dt.Validation.Green.Text;break;case"yellow":t=Dt.Validation.Orange.Text,n=Dt.Validation.Orange.Text;break;case"red":t=Dt.Validation.Red.Text,n=Dt.Validation.Red.Text;break;case"blue":t=Dt.Validation.Blue.Text,n=Dt.Validation.Blue.Text;break;default:t=Dt.Neutral[1],n=Dt.Neutral[1]}else switch(i="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=Dt.Neutral[6],n=Dt.Neutral[4],r=Dt.Neutral[3];break;case"green":t=Dt.Validation.Green.Background,n=Dt.Validation.Green.Border,r=Dt.Validation.Green.Text;break;case"yellow":t=Dt.Validation.Orange.Background,n=Dt.Validation.Orange.Border,r=Dt.Validation.Orange.Text;break;case"red":t=Dt.Validation.Red.Background,n=Dt.Validation.Red.Border,r=Dt.Validation.Red.Text;break;case"blue":t=Dt.Validation.Blue.Background,n=Dt.Validation.Blue.Border,r=Dt.Validation.Blue.Text;break;default:t=Dt.Neutral[8],n=Dt.Neutral[5],r=Dt.Neutral[1],i="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return a`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?i:"none"};
                }
            }
        `}}

    ${It.tablet} {
        ${({$interactive:e})=>{if(e)return a`
                    ${_t("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`),Jt=n.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,Gt=n=>{var{type:a,colorType:r="black",children:o,interactive:l=!1,icon:c}=n,g=i(n,["type","colorType","children","interactive","icon"]);return e(Lt,Object.assign({as:l?"button":"div",$type:a,$color:r,$interactive:l},g,{children:[c,t(Jt,{children:o})]}))};export{Gt as Tag};
//# sourceMappingURL=index.js.map
