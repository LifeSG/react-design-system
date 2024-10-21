import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import a,{css as i}from"styled-components";function r(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,g="object"==typeof o&&o&&o.Object===Object&&o,F="object"==typeof self&&self&&self.Object===Object&&self,f=g||F||Function("return this")(),h=f.Symbol,d=h,s=Object.prototype,u=s.hasOwnProperty,p=s.toString,S=d?d.toStringTag:void 0;var B=function(e){var t=u.call(e,S),n=e[S];try{e[S]=void 0;var a=!0}catch(e){}var i=p.call(e);return a&&(t?e[S]=n:delete e[S]),i},y=Object.prototype.toString;var m=B,D=function(e){return y.call(e)},H=h?h.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?m(e):D(e)};var v=E,b=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||b(e)&&"[object Symbol]"==v(e)},z=c,$=A,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var C=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!$(e))||(k.test(e)||!O.test(e)||null!=t&&e in Object(t))};var _=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},x=E,W=_;var w,P=function(e){if(!W(e))return!1;var t=x(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=f["__core-js_shared__"],T=(w=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var R=function(e){return!!T&&T in e},L=Function.prototype.toString;var I=P,V=R,J=_,N=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,K=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!J(e)||V(e))&&(I(e)?K:G).test(N(e))},Y=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},ee=Z(Object,"create"),te=ee;var ne=function(){this.__data__=te?te(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ee,re=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return re.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var ge=ee;var Fe=ne,fe=ae,he=oe,de=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}ue.prototype.clear=Fe,ue.prototype.delete=fe,ue.prototype.get=he,ue.prototype.has=de,ue.prototype.set=se;var pe=ue;var Se=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var ye=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},me=ye,De=Array.prototype.splice;var He=ye;var Ee=ye;var ve=ye;var be=Se,Ae=function(e){var t=this.__data__,n=me(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},$e=function(e){return Ee(this.__data__,e)>-1},Oe=function(e,t){var n=this.__data__,a=ve(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}ke.prototype.clear=be,ke.prototype.delete=Ae,ke.prototype.get=ze,ke.prototype.has=$e,ke.prototype.set=Oe;var Ce=ke,_e=Z(f,"Map"),xe=pe,We=Ce,we=_e;var Pe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Pe(t)?n["string"==typeof t?"string":"hash"]:n.map},Te=je;var Re=je;var Le=je;var Ie=je;var Ve=function(){this.size=0,this.__data__={hash:new xe,map:new(we||We),string:new xe}},Je=function(e){var t=Te(this,e).delete(e);return this.size-=t?1:0,t},Ne=function(e){return Re(this,e).get(e)},Ge=function(e){return Le(this,e).has(e)},Xe=function(e,t){var n=Ie(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Me.prototype.clear=Ve,Me.prototype.delete=Je,Me.prototype.get=Ne,Me.prototype.has=Ge,Me.prototype.set=Xe;var Ue=Me;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=t?t.apply(this,a):a[0],r=n.cache;if(r.has(i))return r.get(i);var o=e.apply(this,a);return n.cache=r.set(i,o)||r,o};return n.cache=new(qe.Cache||Ue),n}qe.Cache=Ue;var Ke=qe;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,Ze=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,a,i){t.push(a?i.replace(Ye,"$1"):n||e)})),t}));var et=function(e,t){for(var n=-1,a=null==e?0:e.length,i=Array(a);++n<a;)i[n]=t(e[n],n,e);return i},tt=c,nt=A,at=h?h.prototype:void 0,it=at?at.toString:void 0;var rt=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(nt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ot=rt;var lt=c,ct=C,gt=Ze,Ft=function(e){return null==e?"":ot(e)};var ft=A;var ht=function(e,t){return lt(e)?e:ct(e,t)?[e]:gt(Ft(e))},dt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var st=function(e,t){for(var n=0,a=(t=ht(t,e)).length;null!=e&&n<a;)e=e[dt(t[n++])];return n&&n==a?e:void 0};var ut=l((function(e,t,n){var a=null==e?void 0:st(e,t);return void 0===a?n:a}));const pt=(e,t,n)=>t?ut(n,t)||ut(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return ut(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},mt=e=>t=>{const n=t.theme,a=St(yt,n[Bt.colorScheme]);return n.options&&n.options.color?pt(a,e,n.options.color):pt(a,e)},Dt=(mt("Brand.1"),mt("Brand.2"),mt("Brand.3"),mt("Brand.4"),mt("Brand.5"),mt("Brand.6"),mt("Primary")),Ht=(mt("PrimaryDark"),mt("Secondary")),Et=(mt("Accent.Light.1"),mt("Accent.Light.2"),mt("Accent.Light.3"),mt("Accent.Light.4"),mt("Accent.Light.5"),mt("Accent.Light.6"),mt("Accent.Dark.1"),mt("Accent.Dark.2"),mt("Accent.Dark.3"),{1:mt("Neutral.1"),2:mt("Neutral.2"),3:mt("Neutral.3"),4:mt("Neutral.4"),5:mt("Neutral.5"),6:mt("Neutral.6"),7:mt("Neutral.7"),8:mt("Neutral.8")}),vt=(mt("Validation.Green.Text"),mt("Validation.Green.Icon"),mt("Validation.Green.Border"),mt("Validation.Green.Background"),mt("Validation.Orange.Text"),mt("Validation.Orange.Icon"),mt("Validation.Orange.Border"),mt("Validation.Orange.Background"),mt("Validation.Orange.Badge"),mt("Validation.Red.Text"),mt("Validation.Red.Icon"),mt("Validation.Red.Border"),mt("Validation.Red.Background"),mt("Validation.Blue.Text"),mt("Validation.Blue.Icon"),mt("Validation.Blue.Border"),mt("Validation.Blue.Background"),mt("Shadow.Accent"),mt("Shadow.Red"),mt("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),bt={D1:{fontFamily:vt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},At={D1:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:vt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},zt={collections:{base:bt,oneservice:{D1:{fontFamily:vt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:vt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:vt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:vt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:vt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:vt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:vt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:vt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:vt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:vt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:vt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:vt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:At},defaultValue:"base"},$t=e=>t=>{const n=t.theme,a=St(zt,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?pt(a,e,n.options.textStyle):pt(a,e)},Ot={D1:{fontFamily:$t("D1.fontFamily"),fontSize:$t("D1.fontSize"),fontWeight:$t("D1.fontWeight"),lineHeight:$t("D1.lineHeight"),letterSpacing:$t("D1.letterSpacing")},D2:{fontFamily:$t("D2.fontFamily"),fontSize:$t("D2.fontSize"),fontWeight:$t("D2.fontWeight"),lineHeight:$t("D2.lineHeight"),letterSpacing:$t("D2.letterSpacing")},D3:{fontFamily:$t("D3.fontFamily"),fontSize:$t("D3.fontSize"),fontWeight:$t("D3.fontWeight"),lineHeight:$t("D3.lineHeight"),letterSpacing:$t("D3.letterSpacing")},D4:{fontFamily:$t("D4.fontFamily"),fontSize:$t("D4.fontSize"),fontWeight:$t("D4.fontWeight"),lineHeight:$t("D4.lineHeight"),letterSpacing:$t("D4.letterSpacing")},DBody:{fontFamily:$t("DBody.fontFamily"),fontSize:$t("DBody.fontSize"),fontWeight:$t("DBody.fontWeight"),lineHeight:$t("DBody.lineHeight"),letterSpacing:$t("DBody.letterSpacing")},H1:{fontFamily:$t("H1.fontFamily"),fontSize:$t("H1.fontSize"),fontWeight:$t("H1.fontWeight"),lineHeight:$t("H1.lineHeight"),letterSpacing:$t("H1.letterSpacing")},H2:{fontFamily:$t("H2.fontFamily"),fontSize:$t("H2.fontSize"),fontWeight:$t("H2.fontWeight"),lineHeight:$t("H2.lineHeight"),letterSpacing:$t("H2.letterSpacing")},H3:{fontFamily:$t("H3.fontFamily"),fontSize:$t("H3.fontSize"),fontWeight:$t("H3.fontWeight"),lineHeight:$t("H3.lineHeight"),letterSpacing:$t("H3.letterSpacing")},H4:{fontFamily:$t("H4.fontFamily"),fontSize:$t("H4.fontSize"),fontWeight:$t("H4.fontWeight"),lineHeight:$t("H4.lineHeight"),letterSpacing:$t("H4.letterSpacing")},H5:{fontFamily:$t("H5.fontFamily"),fontSize:$t("H5.fontSize"),fontWeight:$t("H5.fontWeight"),lineHeight:$t("H5.lineHeight"),letterSpacing:$t("H5.letterSpacing")},H6:{fontFamily:$t("H6.fontFamily"),fontSize:$t("H6.fontSize"),fontWeight:$t("H6.fontWeight"),lineHeight:$t("H6.lineHeight"),letterSpacing:$t("H6.letterSpacing")},Body:{fontFamily:$t("Body.fontFamily"),fontSize:$t("Body.fontSize"),fontWeight:$t("Body.fontWeight"),lineHeight:$t("Body.lineHeight"),letterSpacing:$t("Body.letterSpacing")},BodySmall:{fontFamily:$t("BodySmall.fontFamily"),fontSize:$t("BodySmall.fontSize"),fontWeight:$t("BodySmall.fontWeight"),lineHeight:$t("BodySmall.lineHeight"),letterSpacing:$t("BodySmall.letterSpacing")},XSmall:{fontFamily:$t("XSmall.fontFamily"),fontSize:$t("XSmall.fontSize"),fontWeight:$t("XSmall.fontWeight"),lineHeight:$t("XSmall.lineHeight"),letterSpacing:$t("XSmall.letterSpacing")}},kt=[vt.OpenSans,vt.PlusJakartaSans],Ct=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},_t=(e,t)=>n=>{var a;const r=Ot[e].fontFamily(n),o=Ot[e].fontWeight(n),l=kt.find((e=>Object.values(e).includes(r)));return l?i`
                font-family: ${Ct(l,t)||Ct(l,o)||r};
                font-weight: normal !important;
            `:i`
            font-family: ${r};
            font-weight: ${null!==(a=xt(t)||o)&&void 0!==a?a:"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wt=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wt=(e,t,n=!1)=>a=>{const r=Ot[e],o=r.fontSize(a);return i`
            ${_t(e,t)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(a)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Pt=(e=!1,t=!1,n=void 0)=>t?i`
            display: block;
            ${Wt(n)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${Wt(n)}
        `;var jt;!function(e){e.D1=a.h1`
        ${e=>i`
                ${wt("D1",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>i`
                ${wt("D2",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>i`
                ${wt("D3",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>i`
                ${wt("D4",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>i`
                ${wt("DBody",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>i`
                ${wt("H1",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>i`
                ${wt("H2",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>i`
                ${wt("H3",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>i`
                ${wt("H4",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>i`
                ${wt("H5",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>i`
                ${wt("H6",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>i`
                ${wt("Body",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>i`
                ${wt("BodySmall",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>i`
                ${wt("XSmall",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Tt=a.a`
    ${e=>i`
            ${wt(e.textStyle,e.weight)}
            color: ${Dt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht};

                svg {
                    color: ${Ht};
                }
            }
        `}
`,Rt=a(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:a=!1,children:i}=n,o=r(n,["external","children"]);return e(Tt,Object.assign({},o,{children:[i,a&&t(Rt,{})]}))},It=a.div`
    border-radius: 0.5rem;
    background: ${Et[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Vt=e=>{var{children:n}=e,a=r(e,["children"]);const i=a["data-testid"]||"card";return t(It,Object.assign({},a,{"data-testid":i},{children:"string"==typeof n?t(jt.Body,{children:n}):n}))};export{Vt as Card};
//# sourceMappingURL=index.js.map
