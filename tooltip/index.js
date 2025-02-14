import{jsxs as e,jsx as r}from"react/jsx-runtime";import{useState as n,useRef as a,useEffect as t}from"react";import{ExternalIcon as i}from"@lifesg/react-icons/external";import o,{css as l}from"styled-components";function s(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},h="object"==typeof d&&d&&d.Object===Object&&d,b="object"==typeof self&&self&&self.Object===Object&&self,m=h||b||Function("return this")(),u=m,y=function(){return u.Date.now()},F=/\s/;var p=function(e){for(var r=e.length;r--&&F.test(e.charAt(r)););return r},f=/^\s+/;var x=function(e){return e?e.slice(0,p(e)+1).replace(f,""):e},B=m.Symbol,v=B,E=Object.prototype,D=E.hasOwnProperty,w=E.toString,C=v?v.toStringTag:void 0;var S=function(e){var r=D.call(e,C),n=e[C];try{e[C]=void 0;var a=!0}catch(e){}var t=w.call(e);return a&&(r?e[C]=n:delete e[C]),t},A=Object.prototype.toString;var z=S,H=function(e){return A.call(e)},$=B?B.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?z(e):H(e)};var O=k,_=function(e){return null!=e&&"object"==typeof e};var W=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==O(e)},L=x,j=c,P=W,T=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,R=/^0o[0-7]+$/i,I=parseInt;var X=c,J=y,N=function(e){if("number"==typeof e)return e;if(P(e))return NaN;if(j(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=j(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=L(e);var n=V.test(e);return n||R.test(e)?I(e.slice(2),n?2:8):T.test(e)?NaN:+e},M=Math.max,G=Math.min;var Y=g((function(e,r,n){var a,t,i,o,l,s,d=0,g=!1,c=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var n=a,i=t;return a=t=void 0,d=r,o=e.apply(i,n)}function m(e){var n=e-s;return void 0===s||n>=r||n<0||c&&e-d>=i}function u(){var e=J();if(m(e))return y(e);l=setTimeout(u,function(e){var n=r-(e-s);return c?G(n,i-(e-d)):n}(e))}function y(e){return l=void 0,h&&a?b(e):(a=t=void 0,o)}function F(){var e=J(),n=m(e);if(a=arguments,t=this,s=e,n){if(void 0===l)return function(e){return d=e,l=setTimeout(u,r),g?b(e):o}(s);if(c)return clearTimeout(l),l=setTimeout(u,r),b(s)}return void 0===l&&(l=setTimeout(u,r)),o}return r=N(r)||0,X(n)&&(g=!!n.leading,i=(c="maxWait"in n)?M(N(n.maxWait)||0,r):i,h="trailing"in n?!!n.trailing:h),F.cancel=function(){void 0!==l&&clearTimeout(l),d=0,a=s=t=l=void 0},F.flush=function(){return void 0===l?o:y(J())},F}));var U=Array.isArray,q=U,K=W,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var ee=function(e,r){if(q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(Z.test(e)||!Q.test(e)||null!=r&&e in Object(r))},re=k,ne=c;var ae,te=function(e){if(!ne(e))return!1;var r=re(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ie=m["__core-js_shared__"],oe=(ae=/[^.]+$/.exec(ie&&ie.keys&&ie.keys.IE_PROTO||""))?"Symbol(src)_1."+ae:"";var le=function(e){return!!oe&&oe in e},se=Function.prototype.toString;var de=te,ge=le,ce=c,he=function(e){if(null!=e){try{return se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},be=/^\[object .+?Constructor\]$/,me=Function.prototype,ue=Object.prototype,ye=me.toString,Fe=ue.hasOwnProperty,pe=RegExp("^"+ye.call(Fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var fe=function(e){return!(!ce(e)||ge(e))&&(de(e)?pe:be).test(he(e))},xe=function(e,r){return null==e?void 0:e[r]};var Be=function(e,r){var n=xe(e,r);return fe(n)?n:void 0},ve=Be(Object,"create"),Ee=ve;var De=function(){this.__data__=Ee?Ee(null):{},this.size=0};var we=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ce=ve,Se=Object.prototype.hasOwnProperty;var Ae=function(e){var r=this.__data__;if(Ce){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Se.call(r,e)?r[e]:void 0},ze=ve,He=Object.prototype.hasOwnProperty;var $e=ve;var ke=De,Oe=we,_e=Ae,We=function(e){var r=this.__data__;return ze?void 0!==r[e]:He.call(r,e)},Le=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$e&&void 0===r?"__lodash_hash_undefined__":r,this};function je(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var a=e[r];this.set(a[0],a[1])}}je.prototype.clear=ke,je.prototype.delete=Oe,je.prototype.get=_e,je.prototype.has=We,je.prototype.set=Le;var Pe=je;var Te=function(){this.__data__=[],this.size=0};var Ve=function(e,r){return e===r||e!=e&&r!=r};var Re=function(e,r){for(var n=e.length;n--;)if(Ve(e[n][0],r))return n;return-1},Ie=Re,Xe=Array.prototype.splice;var Je=Re;var Ne=Re;var Me=Re;var Ge=Te,Ye=function(e){var r=this.__data__,n=Ie(r,e);return!(n<0)&&(n==r.length-1?r.pop():Xe.call(r,n,1),--this.size,!0)},Ue=function(e){var r=this.__data__,n=Je(r,e);return n<0?void 0:r[n][1]},qe=function(e){return Ne(this.__data__,e)>-1},Ke=function(e,r){var n=this.__data__,a=Me(n,e);return a<0?(++this.size,n.push([e,r])):n[a][1]=r,this};function Qe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var a=e[r];this.set(a[0],a[1])}}Qe.prototype.clear=Ge,Qe.prototype.delete=Ye,Qe.prototype.get=Ue,Qe.prototype.has=qe,Qe.prototype.set=Ke;var Ze=Qe,er=Be(m,"Map"),rr=Pe,nr=Ze,ar=er;var tr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ir=function(e,r){var n=e.__data__;return tr(r)?n["string"==typeof r?"string":"hash"]:n.map},or=ir;var lr=ir;var sr=ir;var dr=ir;var gr=function(){this.size=0,this.__data__={hash:new rr,map:new(ar||nr),string:new rr}},cr=function(e){var r=or(this,e).delete(e);return this.size-=r?1:0,r},hr=function(e){return lr(this,e).get(e)},br=function(e){return sr(this,e).has(e)},mr=function(e,r){var n=dr(this,e),a=n.size;return n.set(e,r),this.size+=n.size==a?0:1,this};function ur(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var a=e[r];this.set(a[0],a[1])}}ur.prototype.clear=gr,ur.prototype.delete=cr,ur.prototype.get=hr,ur.prototype.has=br,ur.prototype.set=mr;var yr=ur;function Fr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var a=arguments,t=r?r.apply(this,a):a[0],i=n.cache;if(i.has(t))return i.get(t);var o=e.apply(this,a);return n.cache=i.set(t,o)||i,o};return n.cache=new(Fr.Cache||yr),n}Fr.Cache=yr;var pr=Fr;var fr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/\\(\\)?/g,Br=function(e){var r=pr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(fr,(function(e,n,a,t){r.push(a?t.replace(xr,"$1"):n||e)})),r}));var vr=function(e,r){for(var n=-1,a=null==e?0:e.length,t=Array(a);++n<a;)t[n]=r(e[n],n,e);return t},Er=U,Dr=W,wr=B?B.prototype:void 0,Cr=wr?wr.toString:void 0;var Sr=function e(r){if("string"==typeof r)return r;if(Er(r))return vr(r,e)+"";if(Dr(r))return Cr?Cr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Ar=Sr;var zr=U,Hr=ee,$r=Br,kr=function(e){return null==e?"":Ar(e)};var Or=W;var _r=function(e,r){return zr(e)?e:Hr(e,r)?[e]:$r(kr(e))},Wr=function(e){if("string"==typeof e||Or(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Lr=function(e,r){for(var n=0,a=(r=_r(r,e)).length;null!=e&&n<a;)e=e[Wr(r[n++])];return n&&n==a?e:void 0};var jr=g((function(e,r,n){var a=null==e?void 0:Lr(e,r);return void 0===a?n:a}));const Pr=(e,r,n)=>r?jr(n,r)||jr(e,r):n||e,Tr=(e,r)=>{const n=r||e.defaultValue;return jr(e.collections,n)};var Vr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vr||(Vr={}));const Rr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ir=e=>r=>{var n;const a=(null===(n=r.theme)||void 0===n?void 0:n._v2)||r.theme,t=Tr(Rr,null==a?void 0:a[Vr.colorScheme]);return a.options&&a.options.color?Pr(t,e,a.options.color):Pr(t,e)},Xr=(Ir("Brand.1"),Ir("Brand.2"),Ir("Brand.3"),Ir("Brand.4"),Ir("Brand.5"),Ir("Brand.6"),Ir("Primary")),Jr=(Ir("PrimaryDark"),Ir("Secondary")),Nr=(Ir("Accent.Light.1"),Ir("Accent.Light.2"),Ir("Accent.Light.3"),Ir("Accent.Light.4"),Ir("Accent.Light.5"),Ir("Accent.Light.6"),Ir("Accent.Dark.1"),Ir("Accent.Dark.2"),Ir("Accent.Dark.3"),{1:Ir("Neutral.1"),2:Ir("Neutral.2"),3:Ir("Neutral.3"),4:Ir("Neutral.4"),5:Ir("Neutral.5"),6:Ir("Neutral.6"),7:Ir("Neutral.7"),8:Ir("Neutral.8")}),Mr=(Ir("Validation.Green.Text"),Ir("Validation.Green.Icon"),Ir("Validation.Green.Border"),Ir("Validation.Green.Background"),Ir("Validation.Orange.Text"),Ir("Validation.Orange.Icon"),Ir("Validation.Orange.Border"),Ir("Validation.Orange.Background"),Ir("Validation.Orange.Badge"),Ir("Validation.Red.Text"),Ir("Validation.Red.Icon"),Ir("Validation.Red.Border"),Ir("Validation.Red.Background"),Ir("Validation.Blue.Text"),Ir("Validation.Blue.Icon"),Ir("Validation.Blue.Border"),Ir("Validation.Blue.Background"),Ir("Shadow.Accent"),Ir("Shadow.Red"),Ir("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Gr={D1:{fontFamily:Mr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Yr={D1:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ur={collections:{base:Gr,oneservice:{D1:{fontFamily:Mr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Mr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Mr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Mr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Mr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Mr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Mr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Mr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Mr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Yr},defaultValue:"base"},qr=e=>r=>{var n;const a=(null===(n=r.theme)||void 0===n?void 0:n._v2)||r.theme,t=Tr(Ur,null==a?void 0:a[Vr.textStyleScheme]);return a.options&&a.options.textStyle?Pr(t,e,a.options.textStyle):Pr(t,e)},Kr={D1:{fontFamily:qr("D1.fontFamily"),fontSize:qr("D1.fontSize"),fontWeight:qr("D1.fontWeight"),lineHeight:qr("D1.lineHeight"),letterSpacing:qr("D1.letterSpacing")},D2:{fontFamily:qr("D2.fontFamily"),fontSize:qr("D2.fontSize"),fontWeight:qr("D2.fontWeight"),lineHeight:qr("D2.lineHeight"),letterSpacing:qr("D2.letterSpacing")},D3:{fontFamily:qr("D3.fontFamily"),fontSize:qr("D3.fontSize"),fontWeight:qr("D3.fontWeight"),lineHeight:qr("D3.lineHeight"),letterSpacing:qr("D3.letterSpacing")},D4:{fontFamily:qr("D4.fontFamily"),fontSize:qr("D4.fontSize"),fontWeight:qr("D4.fontWeight"),lineHeight:qr("D4.lineHeight"),letterSpacing:qr("D4.letterSpacing")},DBody:{fontFamily:qr("DBody.fontFamily"),fontSize:qr("DBody.fontSize"),fontWeight:qr("DBody.fontWeight"),lineHeight:qr("DBody.lineHeight"),letterSpacing:qr("DBody.letterSpacing")},H1:{fontFamily:qr("H1.fontFamily"),fontSize:qr("H1.fontSize"),fontWeight:qr("H1.fontWeight"),lineHeight:qr("H1.lineHeight"),letterSpacing:qr("H1.letterSpacing")},H2:{fontFamily:qr("H2.fontFamily"),fontSize:qr("H2.fontSize"),fontWeight:qr("H2.fontWeight"),lineHeight:qr("H2.lineHeight"),letterSpacing:qr("H2.letterSpacing")},H3:{fontFamily:qr("H3.fontFamily"),fontSize:qr("H3.fontSize"),fontWeight:qr("H3.fontWeight"),lineHeight:qr("H3.lineHeight"),letterSpacing:qr("H3.letterSpacing")},H4:{fontFamily:qr("H4.fontFamily"),fontSize:qr("H4.fontSize"),fontWeight:qr("H4.fontWeight"),lineHeight:qr("H4.lineHeight"),letterSpacing:qr("H4.letterSpacing")},H5:{fontFamily:qr("H5.fontFamily"),fontSize:qr("H5.fontSize"),fontWeight:qr("H5.fontWeight"),lineHeight:qr("H5.lineHeight"),letterSpacing:qr("H5.letterSpacing")},H6:{fontFamily:qr("H6.fontFamily"),fontSize:qr("H6.fontSize"),fontWeight:qr("H6.fontWeight"),lineHeight:qr("H6.lineHeight"),letterSpacing:qr("H6.letterSpacing")},Body:{fontFamily:qr("Body.fontFamily"),fontSize:qr("Body.fontSize"),fontWeight:qr("Body.fontWeight"),lineHeight:qr("Body.lineHeight"),letterSpacing:qr("Body.letterSpacing")},BodySmall:{fontFamily:qr("BodySmall.fontFamily"),fontSize:qr("BodySmall.fontSize"),fontWeight:qr("BodySmall.fontWeight"),lineHeight:qr("BodySmall.lineHeight"),letterSpacing:qr("BodySmall.letterSpacing")},XSmall:{fontFamily:qr("XSmall.fontFamily"),fontSize:qr("XSmall.fontSize"),fontWeight:qr("XSmall.fontWeight"),lineHeight:qr("XSmall.lineHeight"),letterSpacing:qr("XSmall.letterSpacing")}},Qr=[Mr.OpenSans,Mr.PlusJakartaSans],Zr=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},en=(e,r)=>n=>{var a;const t=Kr[e].fontFamily(n),i=Kr[e].fontWeight(n),o=Qr.find((e=>Object.values(e).includes(t)));return o?l`
                font-family: ${Zr(o,r)||Zr(o,i)||t};
                font-weight: normal !important;
            `:l`
            font-family: ${t};
            font-weight: ${null!==(a=rn(r)||i)&&void 0!==a?a:"normal"};
        `},rn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nn=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},an=(e,r,n=!1)=>a=>{const t=Kr[e],i=t.fontSize(a);return l`
            ${en(e,r)}
            font-size: ${i}rem !important;
            line-height: ${t.lineHeight}rem !important;
            letter-spacing: ${t.letterSpacing(a)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},tn=(e=!1,r=!1,n=void 0)=>r?l`
            display: block;
            ${nn(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${nn(n)}
        `;var on;!function(e){e.D1=o.h1`
        ${e=>l`
                ${an("D1",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${an("D2",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${an("D3",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${an("D4",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${an("DBody",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${an("H1",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${an("H2",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${an("H3",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${an("H4",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${an("H5",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${an("H6",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${an("Body",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${an("BodySmall",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${an("XSmall",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>dn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>dn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(on||(on={}));const ln=o.a`
    ${e=>l`
            ${an(e.textStyle,e.weight)}
            color: ${Xr};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Jr};

                svg {
                    color: ${Jr};
                }
            }
        `}
`,sn=o(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dn=n=>{var{external:a=!1,children:t}=n,i=s(n,["external","children"]);return e(ln,Object.assign({},i,{children:[t,a&&r(sn,{})]}))},gn=(e,r,n)=>jr(n,r)||jr(e,r),cn=(e,r)=>{const n=r||e.defaultValue;return jr(e.collections,n)},hn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},bn=e=>r=>{var n;const a=r.theme,t=cn(hn,null==a?void 0:a.colourScheme);return(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.primitiveColour)?gn(t,e,a.overrides.primitiveColour):t[e]},mn={"brand-10":bn("brand-10"),"brand-20":bn("brand-20"),"brand-30":bn("brand-30"),"brand-40":bn("brand-40"),"brand-50":bn("brand-50"),"brand-60":bn("brand-60"),"brand-70":bn("brand-70"),"brand-80":bn("brand-80"),"brand-90":bn("brand-90"),"brand-95":bn("brand-95"),"brand-100":bn("brand-100"),"primary-10":bn("primary-10"),"primary-20":bn("primary-20"),"primary-30":bn("primary-30"),"primary-40":bn("primary-40"),"primary-50":bn("primary-50"),"primary-60":bn("primary-60"),"primary-70":bn("primary-70"),"primary-80":bn("primary-80"),"primary-90":bn("primary-90"),"primary-95":bn("primary-95"),"primary-100":bn("primary-100"),"secondary-10":bn("secondary-10"),"secondary-20":bn("secondary-20"),"secondary-30":bn("secondary-30"),"secondary-40":bn("secondary-40"),"secondary-50":bn("secondary-50"),"secondary-60":bn("secondary-60"),"secondary-70":bn("secondary-70"),"secondary-80":bn("secondary-80"),"secondary-90":bn("secondary-90"),"secondary-95":bn("secondary-95"),"secondary-100":bn("secondary-100"),"neutral-10":bn("neutral-10"),"neutral-20":bn("neutral-20"),"neutral-30":bn("neutral-30"),"neutral-40":bn("neutral-40"),"neutral-50":bn("neutral-50"),"neutral-60":bn("neutral-60"),"neutral-70":bn("neutral-70"),"neutral-80":bn("neutral-80"),"neutral-90":bn("neutral-90"),"neutral-95":bn("neutral-95"),"neutral-100":bn("neutral-100"),"success-10":bn("success-10"),"success-20":bn("success-20"),"success-30":bn("success-30"),"success-40":bn("success-40"),"success-50":bn("success-50"),"success-60":bn("success-60"),"success-70":bn("success-70"),"success-80":bn("success-80"),"success-90":bn("success-90"),"success-95":bn("success-95"),"success-100":bn("success-100"),"warning-10":bn("warning-10"),"warning-20":bn("warning-20"),"warning-30":bn("warning-30"),"warning-40":bn("warning-40"),"warning-50":bn("warning-50"),"warning-60":bn("warning-60"),"warning-70":bn("warning-70"),"warning-80":bn("warning-80"),"warning-90":bn("warning-90"),"warning-95":bn("warning-95"),"warning-100":bn("warning-100"),"error-10":bn("error-10"),"error-20":bn("error-20"),"error-30":bn("error-30"),"error-40":bn("error-40"),"error-50":bn("error-50"),"error-60":bn("error-60"),"error-70":bn("error-70"),"error-80":bn("error-80"),"error-90":bn("error-90"),"error-95":bn("error-95"),"error-100":bn("error-100"),"info-10":bn("info-10"),"info-20":bn("info-20"),"info-30":bn("info-30"),"info-40":bn("info-40"),"info-50":bn("info-50"),"info-60":bn("info-60"),"info-70":bn("info-70"),"info-80":bn("info-80"),"info-90":bn("info-90"),"info-95":bn("info-95"),"info-100":bn("info-100"),white:bn("white"),black:bn("black"),"primary-inverse":bn("primary-inverse")},un={text:bn("neutral-20"),"text-subtle":bn("neutral-30"),"text-subtler":bn("neutral-50"),"text-subtlest":bn("neutral-60"),"text-primary":bn("primary-50"),"text-hover":bn("primary-40"),"text-selected":bn("primary-50"),"text-selected-hover":bn("primary-40"),"text-disabled":bn("neutral-50"),"text-disabled-subtle":bn("neutral-60"),"text-disabled-subtlest":bn("neutral-80"),"text-selected-disabled":bn("neutral-20"),"text-success":bn("success-40"),"text-warning":bn("warning-40"),"text-error":bn("error-40"),"text-info":bn("info-40"),"text-inverse":bn("white"),icon:bn("neutral-50"),"icon-subtle":bn("neutral-60"),"icon-strongest":bn("neutral-20"),"icon-primary":bn("primary-50"),"icon-primary-subtle":bn("primary-60"),"icon-primary-subtlest":bn("primary-70"),"icon-hover":bn("primary-40"),"icon-selected":bn("primary-50"),"icon-selected-hover":bn("primary-40"),"icon-disabled":bn("neutral-50"),"icon-disabled-subtle":bn("neutral-60"),"icon-selected-disabled":bn("neutral-60"),"icon-success":bn("success-50"),"icon-warning":bn("warning-60"),"icon-error":bn("error-50"),"icon-error-strong":bn("error-40"),"icon-info":bn("info-50"),"icon-inverse":bn("white"),"icon-primary-inverse":bn("primary-inverse"),border:bn("neutral-90"),"border-strong":bn("neutral-70"),"border-stronger":bn("neutral-50"),"border-primary":bn("primary-50"),"border-primary-subtle":bn("primary-60"),"border-hover":bn("primary-90"),"border-hover-strong":bn("primary-60"),"border-selected":bn("primary-50"),"border-selected-subtle":bn("primary-70"),"border-selected-subtlest":bn("primary-90"),"border-selected-hover":bn("primary-40"),"border-focus":bn("primary-60"),"border-focus-strong":bn("primary-50"),"border-disabled":bn("neutral-90"),"border-selected-disabled":bn("neutral-70"),"border-success":bn("success-60"),"border-warning":bn("warning-60"),"border-error":bn("error-60"),"border-error-focus":bn("error-60"),"border-error-focus-strong":bn("error-40"),"border-error-strong":bn("error-40"),"border-info":bn("info-60"),bg:bn("white"),"bg-strong":bn("neutral-100"),"bg-stronger":bn("neutral-95"),"bg-strongest":bn("neutral-90"),"bg-hover":bn("primary-95"),"bg-hover-strong":bn("primary-90"),"bg-hover-subtle":bn("primary-100"),"bg-hover-neutral":bn("neutral-100"),"bg-hover-neutral-strong":bn("neutral-90"),"bg-selected":bn("primary-95"),"bg-selected-hover":bn("primary-90"),"bg-selected-strong":bn("primary-90"),"bg-selected-stronger":bn("primary-70"),"bg-selected-strongest":bn("primary-50"),"bg-selected-strongest-hover":bn("primary-40"),"bg-disabled":bn("neutral-95"),"bg-selected-disabled":bn("neutral-95"),"bg-selected-stronger-disabled":bn("neutral-70"),"bg-success":bn("success-100"),"bg-success-hover":bn("success-95"),"bg-success-strong":bn("success-50"),"bg-success-strong-hover":bn("success-40"),"bg-warning":bn("warning-100"),"bg-warning-hover":bn("warning-95"),"bg-warning-strong":bn("warning-50"),"bg-warning-strong-hover":bn("warning-40"),"bg-info":bn("info-100"),"bg-info-hover":bn("info-95"),"bg-info-strong":bn("info-50"),"bg-info-strong-hover":bn("info-40"),"bg-error":bn("error-100"),"bg-error-hover":bn("error-95"),"bg-error-strong":bn("error-50"),"bg-error-strong-hover":bn("error-40"),"bg-inverse":bn("neutral-20"),"bg-inverse-subtle":bn("neutral-30"),"bg-inverse-subtler":bn("neutral-50"),"bg-inverse-subtlest":bn("neutral-60"),"bg-inverse-hover":bn("neutral-40"),"bg-primary":bn("primary-50"),"bg-primary-subtle":bn("primary-60"),"bg-primary-subtler":bn("primary-95"),"bg-primary-subtlest":bn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":bn("primary-40"),"bg-primary-subtlest-hover":bn("primary-90"),"bg-primary-subtlest-selected":bn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:bn("primary-50"),"hyperlink-hover":bn("primary-40"),"hyperlink-visited":bn("primary-40"),"hyperlink-inverse":bn("primary-inverse"),"focus-ring":bn("black"),"focus-ring-inverse":bn("white")},yn={collections:{lifesg:un,bookingsg:un,rbs:un,mylegacy:un,ccube:un},defaultValue:"lifesg"},Fn=e=>r=>{var n;const a=r.theme,t=cn(yn,null==a?void 0:a.colourScheme),i=(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.semanticColour)?gn(t,e,a.overrides.semanticColour):t[e];return"function"==typeof i?i(r):i},pn={text:Fn("text"),"text-subtle":Fn("text-subtle"),"text-subtler":Fn("text-subtler"),"text-subtlest":Fn("text-subtlest"),"text-primary":Fn("text-primary"),"text-hover":Fn("text-hover"),"text-selected":Fn("text-selected"),"text-selected-hover":Fn("text-selected-hover"),"text-disabled":Fn("text-disabled"),"text-disabled-subtle":Fn("text-disabled-subtle"),"text-disabled-subtlest":Fn("text-disabled-subtlest"),"text-selected-disabled":Fn("text-selected-disabled"),"text-success":Fn("text-success"),"text-warning":Fn("text-warning"),"text-error":Fn("text-error"),"text-info":Fn("text-info"),"text-inverse":Fn("text-inverse"),icon:Fn("icon"),"icon-subtle":Fn("icon-subtle"),"icon-strongest":Fn("icon-strongest"),"icon-primary":Fn("icon-primary"),"icon-primary-subtle":Fn("icon-primary-subtle"),"icon-primary-subtlest":Fn("icon-primary-subtlest"),"icon-hover":Fn("icon-hover"),"icon-selected":Fn("icon-selected"),"icon-selected-hover":Fn("icon-selected-hover"),"icon-disabled":Fn("icon-disabled"),"icon-disabled-subtle":Fn("icon-disabled-subtle"),"icon-selected-disabled":Fn("icon-selected-disabled"),"icon-success":Fn("icon-success"),"icon-warning":Fn("icon-warning"),"icon-error":Fn("icon-error"),"icon-error-strong":Fn("icon-error-strong"),"icon-info":Fn("icon-info"),"icon-inverse":Fn("icon-inverse"),"icon-primary-inverse":Fn("icon-primary-inverse"),border:Fn("border"),"border-strong":Fn("border-strong"),"border-stronger":Fn("border-stronger"),"border-primary":Fn("border-primary"),"border-primary-subtle":Fn("border-primary-subtle"),"border-hover":Fn("border-hover"),"border-hover-strong":Fn("border-hover-strong"),"border-selected":Fn("border-selected"),"border-selected-subtle":Fn("border-selected-subtle"),"border-selected-subtlest":Fn("border-selected-subtlest"),"border-selected-hover":Fn("border-selected-hover"),"border-focus":Fn("border-focus"),"border-focus-strong":Fn("border-focus-strong"),"border-disabled":Fn("border-disabled"),"border-selected-disabled":Fn("border-selected-disabled"),"border-success":Fn("border-success"),"border-warning":Fn("border-warning"),"border-error":Fn("border-error"),"border-error-focus":Fn("border-error-focus"),"border-error-focus-strong":Fn("border-error-focus-strong"),"border-error-strong":Fn("border-error-strong"),"border-info":Fn("border-info"),bg:Fn("bg"),"bg-strong":Fn("bg-strong"),"bg-stronger":Fn("bg-stronger"),"bg-strongest":Fn("bg-strongest"),"bg-hover":Fn("bg-hover"),"bg-hover-strong":Fn("bg-hover-strong"),"bg-hover-subtle":Fn("bg-hover-subtle"),"bg-hover-neutral":Fn("bg-hover-neutral"),"bg-hover-neutral-strong":Fn("bg-hover-neutral-strong"),"bg-selected":Fn("bg-selected"),"bg-selected-hover":Fn("bg-selected-hover"),"bg-selected-strong":Fn("bg-selected-strong"),"bg-selected-stronger":Fn("bg-selected-stronger"),"bg-selected-strongest":Fn("bg-selected-strongest"),"bg-selected-strongest-hover":Fn("bg-selected-strongest-hover"),"bg-disabled":Fn("bg-disabled"),"bg-selected-disabled":Fn("bg-selected-disabled"),"bg-selected-stronger-disabled":Fn("bg-selected-stronger-disabled"),"bg-success":Fn("bg-success"),"bg-success-hover":Fn("bg-success-hover"),"bg-success-strong":Fn("bg-success-strong"),"bg-success-strong-hover":Fn("bg-success-strong-hover"),"bg-warning":Fn("bg-warning"),"bg-warning-hover":Fn("bg-warning-hover"),"bg-warning-strong":Fn("bg-warning-strong"),"bg-warning-strong-hover":Fn("bg-warning-strong-hover"),"bg-info":Fn("bg-info"),"bg-info-hover":Fn("bg-info-hover"),"bg-info-strong":Fn("bg-info-strong"),"bg-info-strong-hover":Fn("bg-info-strong-hover"),"bg-error":Fn("bg-error"),"bg-error-hover":Fn("bg-error-hover"),"bg-error-strong":Fn("bg-error-strong"),"bg-error-strong-hover":Fn("bg-error-strong-hover"),"bg-inverse":Fn("bg-inverse"),"bg-inverse-subtle":Fn("bg-inverse-subtle"),"bg-inverse-subtler":Fn("bg-inverse-subtler"),"bg-inverse-subtlest":Fn("bg-inverse-subtlest"),"bg-inverse-hover":Fn("bg-inverse-hover"),"bg-primary":Fn("bg-primary"),"bg-primary-subtle":Fn("bg-primary-subtle"),"bg-primary-subtler":Fn("bg-primary-subtler"),"bg-primary-subtlest":Fn("bg-primary-subtlest"),"bg-available":Fn("bg-available"),"bg-primary-hover":Fn("bg-primary-hover"),"bg-primary-subtlest-hover":Fn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Fn("bg-primary-subtlest-selected"),"overlay-strong":Fn("overlay-strong"),"overlay-subtle":Fn("overlay-subtle"),hyperlink:Fn("hyperlink"),"hyperlink-hover":Fn("hyperlink-hover"),"hyperlink-visited":Fn("hyperlink-visited"),"hyperlink-inverse":Fn("hyperlink-inverse"),"focus-ring":Fn("focus-ring"),"focus-ring-inverse":Fn("focus-ring-inverse")},fn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},xn=e=>r=>{var n;const a=r.theme,t=cn(fn,null==a?void 0:a.breakpointScheme);let i;return i=(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.breakpoint)?gn(t,e,a.overrides.breakpoint):t[e],i},Bn={"xxs-min":xn("xxs-min"),"xxs-max":xn("xxs-max"),"xs-min":xn("xs-min"),"xs-max":xn("xs-max"),"sm-min":xn("sm-min"),"sm-max":xn("sm-max"),"md-min":xn("md-min"),"md-max":xn("md-max"),"lg-min":xn("lg-min"),"lg-max":xn("lg-max"),"xl-min":xn("xl-min"),"xl-max":xn("xl-max"),"xxl-min":xn("xxl-min"),"xxs-column":xn("xxs-column"),"xs-column":xn("xs-column"),"sm-column":xn("sm-column"),"md-column":xn("md-column"),"lg-column":xn("lg-column"),"xl-column":xn("xl-column"),"xxl-column":xn("xxl-column"),"xxs-gutter":xn("xxs-gutter"),"xs-gutter":xn("xs-gutter"),"sm-gutter":xn("sm-gutter"),"md-gutter":xn("md-gutter"),"lg-gutter":xn("lg-gutter"),"xl-gutter":xn("xl-gutter"),"xxl-gutter":xn("xxl-gutter"),"xxs-margin":xn("xxs-margin"),"xs-margin":xn("xs-margin"),"sm-margin":xn("sm-margin"),"md-margin":xn("md-margin"),"lg-margin":xn("lg-margin"),"xl-margin":xn("xl-margin"),"xxl-margin":xn("xxl-margin")},vn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Bn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const a=n(r);return`@media screen and (${e}: ${a}px)`}})(e,n),r)),{});vn("max-width"),vn("min-width");const En={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Dn={collections:{lifesg:En,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:En,mylegacy:En,ccube:En},defaultValue:"lifesg"},wn=e=>r=>{var n;const a=r.theme,t=cn(Dn,null==a?void 0:a.fontScheme);return(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.fontSpec)?gn(t,e,a.overrides.fontSpec):t[e]},Cn={"header-size-xxl":wn("header-size-xxl"),"header-size-xl":wn("header-size-xl"),"header-size-lg":wn("header-size-lg"),"header-size-md":wn("header-size-md"),"header-size-sm":wn("header-size-sm"),"header-size-xs":wn("header-size-xs"),"header-lh-xxl":wn("header-lh-xxl"),"header-lh-xl":wn("header-lh-xl"),"header-lh-lg":wn("header-lh-lg"),"header-lh-md":wn("header-lh-md"),"header-lh-sm":wn("header-lh-sm"),"header-lh-xs":wn("header-lh-xs"),"header-ls-xxl":wn("header-ls-xxl"),"header-ls-xl":wn("header-ls-xl"),"header-ls-lg":wn("header-ls-lg"),"header-ls-md":wn("header-ls-md"),"header-ls-sm":wn("header-ls-sm"),"header-ls-xs":wn("header-ls-xs"),"weight-light":wn("weight-light"),"weight-regular":wn("weight-regular"),"weight-semibold":wn("weight-semibold"),"weight-bold":wn("weight-bold"),"font-family":wn("font-family"),"body-size-baseline":wn("body-size-baseline"),"body-size-md":wn("body-size-md"),"body-size-sm":wn("body-size-sm"),"body-size-xs":wn("body-size-xs"),"body-lh-baseline":wn("body-lh-baseline"),"body-lh-md":wn("body-lh-md"),"body-lh-sm":wn("body-lh-sm"),"body-lh-xs":wn("body-lh-xs"),"body-ls-baseline":wn("body-ls-baseline"),"body-ls-md":wn("body-ls-md"),"body-ls-sm":wn("body-ls-sm"),"body-ls-xs":wn("body-ls-xs"),"formlabel-size-baseline":wn("formlabel-size-baseline"),"formlabel-size-lg":wn("formlabel-size-lg"),"formlabel-lh-baseline":wn("formlabel-lh-baseline"),"formlabel-lh-lg":wn("formlabel-lh-lg"),"formlabel-ls-baseline":wn("formlabel-ls-baseline"),"formlabel-ls-lg":wn("formlabel-ls-lg")},Sn={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},An=e=>r=>{var n;const a=r.theme,t=cn(Sn,null==a?void 0:a.radiusScheme);return(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.radius)?`${gn(t,e,a.overrides.radius)}px`:`${t[e]}px`},zn={none:An("none"),xs:An("xs"),sm:An("sm"),md:An("md"),lg:An("lg"),full:An("full")},Hn={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},$n=e=>r=>{var n;const a=r.theme,t=cn(Hn,null==a?void 0:a.spacingScheme);return(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.spacing)?`${gn(t,e,a.overrides.spacing)}px`:`${t[e]}px`},kn={"spacing-0":$n("spacing-0"),"spacing-4":$n("spacing-4"),"spacing-8":$n("spacing-8"),"spacing-12":$n("spacing-12"),"spacing-16":$n("spacing-16"),"spacing-20":$n("spacing-20"),"spacing-24":$n("spacing-24"),"spacing-32":$n("spacing-32"),"spacing-40":$n("spacing-40"),"spacing-48":$n("spacing-48"),"spacing-64":$n("spacing-64"),"spacing-72":$n("spacing-72"),"layout-xs":$n("layout-xs"),"layout-sm":$n("layout-sm"),"layout-md":$n("layout-md"),"layout-lg":$n("layout-lg"),"layout-xl":$n("layout-xl"),"layout-xxl":$n("layout-xxl"),"layout-xxxl":$n("layout-xxxl")},On=(e,r,n,a)=>l`
    font-family: ${wn("font-family")};
    font-size: ${wn(e)};
    font-weight: ${wn(r)};
    line-height: ${wn(n)};
    letter-spacing: ${wn(a)};
`,_n={"header-xxl-light":On("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":On("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":On("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":On("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":On("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":On("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":On("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":On("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":On("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":On("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":On("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":On("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":On("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":On("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":On("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":On("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":On("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":On("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":On("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":On("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":On("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":On("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":On("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":On("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":On("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":On("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":On("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":On("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":On("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":On("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":On("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":On("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":On("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":On("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":On("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":On("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":On("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":On("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":On("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":On("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":On("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":On("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Wn={collections:{lifesg:_n,bookingsg:_n,rbs:_n,mylegacy:_n,ccube:_n},defaultValue:"lifesg"},Ln=e=>r=>{var n;const a=r.theme,t=cn(Wn,null==a?void 0:a.fontScheme),i=(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.font)?gn(t,e,a.overrides.font):t[e];return"function"==typeof i?i(r):i},jn={"header-xxl-light":Ln("header-xxl-light"),"header-xxl-regular":Ln("header-xxl-regular"),"header-xxl-semibold":Ln("header-xxl-semibold"),"header-xxl-bold":Ln("header-xxl-bold"),"header-xl-light":Ln("header-xl-light"),"header-xl-regular":Ln("header-xl-regular"),"header-xl-semibold":Ln("header-xl-semibold"),"header-xl-bold":Ln("header-xl-bold"),"header-lg-light":Ln("header-lg-light"),"header-lg-regular":Ln("header-lg-regular"),"header-lg-semibold":Ln("header-lg-semibold"),"header-lg-bold":Ln("header-lg-bold"),"header-md-light":Ln("header-md-light"),"header-md-regular":Ln("header-md-regular"),"header-md-semibold":Ln("header-md-semibold"),"header-md-bold":Ln("header-md-bold"),"header-sm-light":Ln("header-sm-light"),"header-sm-regular":Ln("header-sm-regular"),"header-sm-semibold":Ln("header-sm-semibold"),"header-sm-bold":Ln("header-sm-bold"),"header-xs-light":Ln("header-xs-light"),"header-xs-regular":Ln("header-xs-regular"),"header-xs-semibold":Ln("header-xs-semibold"),"header-xs-bold":Ln("header-xs-bold"),"body-baseline-light":Ln("body-baseline-light"),"body-baseline-regular":Ln("body-baseline-regular"),"body-baseline-semibold":Ln("body-baseline-semibold"),"body-baseline-bold":Ln("body-baseline-bold"),"body-md-light":Ln("body-md-light"),"body-md-regular":Ln("body-md-regular"),"body-md-semibold":Ln("body-md-semibold"),"body-md-bold":Ln("body-md-bold"),"body-sm-light":Ln("body-sm-light"),"body-sm-regular":Ln("body-sm-regular"),"body-sm-semibold":Ln("body-sm-semibold"),"body-sm-bold":Ln("body-sm-bold"),"body-xs-light":Ln("body-xs-light"),"body-xs-regular":Ln("body-xs-regular"),"body-xs-semibold":Ln("body-xs-semibold"),"body-xs-bold":Ln("body-xs-bold"),"formlabel-baseline-semibold":Ln("formlabel-baseline-semibold"),"formlabel-lg-semibold":Ln("formlabel-lg-semibold")},Pn=Object.assign(Object.assign({},pn),{Primitive:mn}),Tn=Object.assign(Object.assign({},jn),{Spec:Cn}),Vn=kn,Rn=zn,In=(e,r,n=!1)=>{const a=`${e}-${r.toLowerCase()}`;return l`
        ${Tn[a]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Xn=(e,r)=>l`
    ${In(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Pn.text};
`;var Jn;!function(n){const a=(e,r,n)=>{const a=o(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Xn(r,e)}
        `;return a.displayName=`Typography.${n}`,a};n.HeaderXXL=a("h1","header-xxl","HeaderXXL"),n.HeaderXL=a("h2","header-xl","HeaderXL"),n.HeaderLG=a("h3","header-lg","HeaderLG"),n.HeaderMD=a("h4","header-md","HeaderMD"),n.HeaderSM=a("h5","header-sm","HeaderSM"),n.HeaderXS=a("h6","header-xs","HeaderXS");const t=(e,r)=>{const n=o.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Xn(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=t("body-baseline","BodyBL"),n.BodyMD=t("body-md","BodyMD"),n.BodySM=t("body-sm","BodySM"),n.BodyXS=t("body-xs","BodyXS");const i=(n,a)=>{const t=o.a`
            ${e=>l`
                ${In(n,e.weight||"regular")}
                color: ${Pn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Pn["text-hover"]};
                }
            `}
        `,i=n=>{var{external:a=!1,children:i}=n,o=s(n,["external","children"]);return e(t,Object.assign({},o,{children:[i,a&&r(Nn,{})]}))};return i.displayName=`Typography.${a}`,i};n.LinkBL=i("body-baseline","LinkBL"),n.LinkMD=i("body-md","LinkMD"),n.LinkSM=i("body-sm","LinkSM"),n.LinkXS=i("body-xs","LinkXS")}(Jn||(Jn={}));const Nn=o(i)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Mn=o.div`
    border-radius: ${Rn.md};
    background: ${Pn.bg};
    padding: ${Vn["spacing-16"]} ${Vn["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Gn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Yn=e=>Object.keys(Gn).reduce(((r,n)=>{const a=Gn[n];return r[n]=`@media screen and (${e}: ${a}px)`,r}),{}),Un=Yn("max-width"),qn=(Yn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Kn=o.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return l`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Un.mobileL} {
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

                ${Un.mobileL} {
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

                ${Un.mobileL} {
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

                ${Un.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?l`
            visibility: "visible";
            opacity: 1;
            transition: ${qn};
            z-index: 2;
        `:l`
            visibility: "hidden";
            opacity: 0;
            transition: ${qn};
            z-index: -1;
        `}
`,Qn=o((e=>{var{children:n}=e,a=s(e,["children"]);const t=a["data-testid"]||"card";return r(Mn,Object.assign({},a,{"data-testid":t},{children:"string"==typeof n?r(Jn.BodyBL,{children:n}):n}))}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,Zn=o.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return l`
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
                        border-color: ${Nr[8]} transparent
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
                        border-color: transparent ${Nr[8]}
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
                            ${Nr[8]};
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
                            ${Nr[8]} transparent;
                    }
                `}}}
`,ea=o.div`
    position: relative;
`,ra=i=>{var{visible:o,position:l="top",children:d}=i,g=s(i,["visible","position","children"]);const c=g["data-testid"]||"tooltip",[h,b]=n(l),m=a(null);t((()=>(y(),window.addEventListener("resize",Y(u,300)),()=>{window.removeEventListener("resize",Y(u,300))})),[]);const u=()=>{y()},y=()=>{if(m.current){const e=m.current.getBoundingClientRect();if(e.x<0)switch(l){case"left":case"top":case"bottom":b("right");break;case"right":b("top")}else if(e.x+e.width>window.outerWidth)switch(l){case"right":case"top":case"bottom":b("left");break;case"left":b("top")}else b(l)}};return e(Kn,Object.assign({position:h,"data-testid":c,visible:o,ref:m},g,{children:[r(Qn,{children:"string"==typeof d?r(on.BodySmall,{children:d}):d}),r(Zn,{position:h})]}))},na=(n,a)=>t=>{const{tooltipVisible:i,position:o}=t,l=s(t,["tooltipVisible","position"]);return e(ea,{children:[r(n,Object.assign({},l)),r(ra,Object.assign({visible:i,position:o},{children:a.content}))]})};export{ra as Tooltip,na as withTooltip};
//# sourceMappingURL=index.js.map
