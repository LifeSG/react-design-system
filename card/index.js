import{jsxs as t,jsx as e}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import a,{css as i}from"styled-components";function o(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c=Array.isArray,g="object"==typeof r&&r&&r.Object===Object&&r,f="object"==typeof self&&self&&self.Object===Object&&self,F=g||f||Function("return this")(),h=F.Symbol,d=h,s=Object.prototype,u=s.hasOwnProperty,p=s.toString,S=d?d.toStringTag:void 0;var B=function(t){var e=u.call(t,S),n=t[S];try{t[S]=void 0;var a=!0}catch(t){}var i=p.call(t);return a&&(e?t[S]=n:delete t[S]),i},y=Object.prototype.toString;var m=B,D=function(t){return y.call(t)},H=h?h.toStringTag:void 0;var v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?m(t):D(t)};var E=v,b=function(t){return null!=t&&"object"==typeof t};var A=function(t){return"symbol"==typeof t||b(t)&&"[object Symbol]"==E(t)},$=c,z=A,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var C=function(t,e){if($(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(k.test(t)||!O.test(t)||null!=e&&t in Object(e))};var _=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},V=v,x=_;var W,w=function(t){if(!x(t))return!1;var e=V(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=F["__core-js_shared__"],j=(W=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var T=function(t){return!!j&&j in t},R=Function.prototype.toString;var L=w,I=T,J=_,N=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,G=Function.prototype,M=Object.prototype,U=G.toString,q=M.hasOwnProperty,K=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!J(t)||I(t))&&(L(t)?K:X).test(N(t))},Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},tt=Z(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var at=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=tt,ot=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var gt=tt;var ft=nt,Ft=at,ht=rt,dt=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},st=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}ut.prototype.clear=ft,ut.prototype.delete=Ft,ut.prototype.get=ht,ut.prototype.has=dt,ut.prototype.set=st;var pt=ut;var St=function(){this.__data__=[],this.size=0};var Bt=function(t,e){return t===e||t!=t&&e!=e};var yt=function(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1},mt=yt,Dt=Array.prototype.splice;var Ht=yt;var vt=yt;var Et=yt;var bt=St,At=function(t){var e=this.__data__,n=mt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},$t=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},zt=function(t){return vt(this.__data__,t)>-1},Ot=function(t,e){var n=this.__data__,a=Et(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}kt.prototype.clear=bt,kt.prototype.delete=At,kt.prototype.get=$t,kt.prototype.has=zt,kt.prototype.set=Ot;var Ct=kt,_t=Z(F,"Map"),Vt=pt,xt=Ct,Wt=_t;var wt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pt=function(t,e){var n=t.__data__;return wt(e)?n["string"==typeof e?"string":"hash"]:n.map},jt=Pt;var Tt=Pt;var Rt=Pt;var Lt=Pt;var It=function(){this.size=0,this.__data__={hash:new Vt,map:new(Wt||xt),string:new Vt}},Jt=function(t){var e=jt(this,t).delete(t);return this.size-=e?1:0,e},Nt=function(t){return Tt(this,t).get(t)},Xt=function(t){return Rt(this,t).has(t)},Gt=function(t,e){var n=Lt(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this};function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Mt.prototype.clear=It,Mt.prototype.delete=Jt,Mt.prototype.get=Nt,Mt.prototype.has=Xt,Mt.prototype.set=Gt;var Ut=Mt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=e?e.apply(this,a):a[0],o=n.cache;if(o.has(i))return o.get(i);var r=t.apply(this,a);return n.cache=o.set(i,r)||o,r};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Kt=qt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Zt=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,a,i){e.push(a?i.replace(Yt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i},ee=c,ne=A,ae=h?h.prototype:void 0,ie=ae?ae.toString:void 0;var oe=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},re=oe;var le=c,ce=C,ge=Zt,fe=function(t){return null==t?"":re(t)};var Fe=A;var he=function(t,e){return le(t)?t:ce(t,e)?[t]:ge(fe(t))},de=function(t){if("string"==typeof t||Fe(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var se=function(t,e){for(var n=0,a=(e=he(e,t)).length;null!=t&&n<a;)t=t[de(e[n++])];return n&&n==a?t:void 0};var ue=l((function(t,e,n){var a=null==t?void 0:se(t,e);return void 0===a?n:a}));const pe=(t,e,n)=>e?ue(n,e)||ue(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return ue(t.collections,n)};var Be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Be||(Be={}));const ye={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},me=t=>e=>{const n=e.theme,a=Se(ye,n[Be.colorScheme]);return n.options&&n.options.color?pe(a,t,n.options.color):pe(a,t)},De=(me("Brand.1"),me("Brand.2"),me("Brand.3"),me("Brand.4"),me("Brand.5"),me("Brand.6"),me("Primary")),He=(me("PrimaryDark"),me("Secondary")),ve=(me("Accent.Light.1"),me("Accent.Light.2"),me("Accent.Light.3"),me("Accent.Light.4"),me("Accent.Light.5"),me("Accent.Light.6"),me("Accent.Dark.1"),me("Accent.Dark.2"),me("Accent.Dark.3"),{1:me("Neutral.1"),2:me("Neutral.2"),3:me("Neutral.3"),4:me("Neutral.4"),5:me("Neutral.5"),6:me("Neutral.6"),7:me("Neutral.7"),8:me("Neutral.8")}),Ee=(me("Validation.Green.Text"),me("Validation.Green.Icon"),me("Validation.Green.Border"),me("Validation.Green.Background"),me("Validation.Orange.Text"),me("Validation.Orange.Icon"),me("Validation.Orange.Border"),me("Validation.Orange.Background"),me("Validation.Orange.Badge"),me("Validation.Red.Text"),me("Validation.Red.Icon"),me("Validation.Red.Border"),me("Validation.Red.Background"),me("Validation.Blue.Text"),me("Validation.Blue.Icon"),me("Validation.Blue.Border"),me("Validation.Blue.Background"),me("Shadow.Accent"),me("Shadow.Red"),me("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),be={D1:{fontFamily:Ee.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ee.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ee.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ee.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ee.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ee.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ee.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ee.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ee.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ee.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ee.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ee.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ee.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ee.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ae={D1:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Ee.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Ee.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Ee.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Ee.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Ee.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},$e={collections:{base:be,oneservice:{D1:{fontFamily:Ee.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ee.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ee.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ee.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ee.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ee.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ee.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ee.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ee.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ee.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ee.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ee.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ee.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ee.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ae},defaultValue:"base"},ze=t=>e=>{const n=e.theme,a=Se($e,n[Be.textStyleScheme]);return n.options&&n.options.textStyle?pe(a,t,n.options.textStyle):pe(a,t)},Oe={D1:{fontFamily:ze("D1.fontFamily"),fontSize:ze("D1.fontSize"),fontWeight:ze("D1.fontWeight"),lineHeight:ze("D1.lineHeight"),letterSpacing:ze("D1.letterSpacing"),fontVariant:ze("D1.fontVariant")},D2:{fontFamily:ze("D2.fontFamily"),fontSize:ze("D2.fontSize"),fontWeight:ze("D2.fontWeight"),lineHeight:ze("D2.lineHeight"),letterSpacing:ze("D2.letterSpacing"),fontVariant:ze("D2.fontVariant")},D3:{fontFamily:ze("D3.fontFamily"),fontSize:ze("D3.fontSize"),fontWeight:ze("D3.fontWeight"),lineHeight:ze("D3.lineHeight"),letterSpacing:ze("D3.letterSpacing"),fontVariant:ze("D3.fontVariant")},D4:{fontFamily:ze("D4.fontFamily"),fontSize:ze("D4.fontSize"),fontWeight:ze("D4.fontWeight"),lineHeight:ze("D4.lineHeight"),letterSpacing:ze("D4.letterSpacing"),fontVariant:ze("D4.fontVariant")},DBody:{fontFamily:ze("DBody.fontFamily"),fontSize:ze("DBody.fontSize"),fontWeight:ze("DBody.fontWeight"),lineHeight:ze("DBody.lineHeight"),letterSpacing:ze("DBody.letterSpacing"),fontVariant:ze("DBody.fontVariant")},H1:{fontFamily:ze("H1.fontFamily"),fontSize:ze("H1.fontSize"),fontWeight:ze("H1.fontWeight"),lineHeight:ze("H1.lineHeight"),letterSpacing:ze("H1.letterSpacing"),fontVariant:ze("H1.fontVariant")},H2:{fontFamily:ze("H2.fontFamily"),fontSize:ze("H2.fontSize"),fontWeight:ze("H2.fontWeight"),lineHeight:ze("H2.lineHeight"),letterSpacing:ze("H2.letterSpacing"),fontVariant:ze("H2.fontVariant")},H3:{fontFamily:ze("H3.fontFamily"),fontSize:ze("H3.fontSize"),fontWeight:ze("H3.fontWeight"),lineHeight:ze("H3.lineHeight"),letterSpacing:ze("H3.letterSpacing"),fontVariant:ze("H3.fontVariant")},H4:{fontFamily:ze("H4.fontFamily"),fontSize:ze("H4.fontSize"),fontWeight:ze("H4.fontWeight"),lineHeight:ze("H4.lineHeight"),letterSpacing:ze("H4.letterSpacing"),fontVariant:ze("H4.fontVariant")},H5:{fontFamily:ze("H5.fontFamily"),fontSize:ze("H5.fontSize"),fontWeight:ze("H5.fontWeight"),lineHeight:ze("H5.lineHeight"),letterSpacing:ze("H5.letterSpacing"),fontVariant:ze("H5.fontVariant")},H6:{fontFamily:ze("H6.fontFamily"),fontSize:ze("H6.fontSize"),fontWeight:ze("H6.fontWeight"),lineHeight:ze("H6.lineHeight"),letterSpacing:ze("H6.letterSpacing"),fontVariant:ze("H6.fontVariant")},Body:{fontFamily:ze("Body.fontFamily"),fontSize:ze("Body.fontSize"),fontWeight:ze("Body.fontWeight"),lineHeight:ze("Body.lineHeight"),letterSpacing:ze("Body.letterSpacing"),fontVariant:ze("Body.fontVariant")},BodySmall:{fontFamily:ze("BodySmall.fontFamily"),fontSize:ze("BodySmall.fontSize"),fontWeight:ze("BodySmall.fontWeight"),lineHeight:ze("BodySmall.lineHeight"),letterSpacing:ze("BodySmall.letterSpacing"),fontVariant:ze("BodySmall.fontVariant")},XSmall:{fontFamily:ze("XSmall.fontFamily"),fontSize:ze("XSmall.fontSize"),fontWeight:ze("XSmall.fontWeight"),lineHeight:ze("XSmall.lineHeight"),letterSpacing:ze("XSmall.letterSpacing"),fontVariant:ze("XSmall.fontVariant")}},ke=[Ee.OpenSans,Ee.PlusJakartaSans],Ce=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},_e=(t,e)=>n=>{var a;const o=Oe[t].fontFamily(n),r=Oe[t].fontWeight(n),l=ke.find((t=>Object.values(t).includes(o)));return l?i`
                font-family: ${Ce(l,e)||Ce(l,r)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(a=Ve(e)||r)&&void 0!==a?a:"normal"};
        `},Ve=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xe=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},We=(t,e,n=!1)=>a=>{const o=Oe[t],r=o.fontSize(a);return i`
            ${_e(t,e)}
            font-size: ${r}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            font-variant: ${o.fontVariant(a)||"normal"};
            ${i`
                margin-bottom: ${r*(n?1.05:0)}rem;
            `}
        `},we=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${xe(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${xe(n)}
        `;var Pe;!function(t){t.D1=a.h1`
        ${t=>i`
                ${We("D1",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=a.h1`
        ${t=>i`
                ${We("D2",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=a.h1`
        ${t=>i`
                ${We("D3",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=a.h1`
        ${t=>i`
                ${We("D4",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=a.h1`
        ${t=>i`
                ${We("DBody",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=a.h1`
        ${t=>i`
                ${We("H1",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=a.h2`
        ${t=>i`
                ${We("H2",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=a.h3`
        ${t=>i`
                ${We("H3",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=a.h4`
        ${t=>i`
                ${We("H4",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=a.h5`
        ${t=>i`
                ${We("H5",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=a.h6`
        ${t=>i`
                ${We("H6",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=a.p`
        ${t=>i`
                ${We("Body",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=a.p`
        ${t=>i`
                ${We("BodySmall",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=a.span`
        ${t=>i`
                ${We("XSmall",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Re(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Re(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Pe||(Pe={}));const je=a.a`
    ${t=>i`
            ${We(t.textStyle,t.weight)}
            color: ${De};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${He};

                svg {
                    color: ${He};
                }
            }
        `}
`,Te=a(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Re=n=>{var{external:a=!1,children:i}=n,r=o(n,["external","children"]);return t(je,Object.assign({},r,{children:[i,a&&e(Te,{})]}))},Le=a.div`
    border-radius: 0.5rem;
    background: ${ve[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Ie=t=>{var{children:n}=t,a=o(t,["children"]);const i=a["data-testid"]||"card";return e(Le,Object.assign({},a,{"data-testid":i},{children:"string"==typeof n?e(Pe.Body,{children:n}):n}))};export{Ie as Card};
//# sourceMappingURL=index.js.map
