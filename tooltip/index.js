import{jsxs as e,jsx as r}from"react/jsx-runtime";import{useState as n,useRef as t,useEffect as a}from"react";import{ExternalIcon as i}from"@lifesg/react-icons/external";import o,{css as l}from"styled-components";function s(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},h="object"==typeof d&&d&&d.Object===Object&&d,m="object"==typeof self&&self&&self.Object===Object&&self,b=h||m||Function("return this")(),u=b,F=function(){return u.Date.now()},y=/\s/;var p=function(e){for(var r=e.length;r--&&y.test(e.charAt(r)););return r},f=/^\s+/;var x=function(e){return e?e.slice(0,p(e)+1).replace(f,""):e},B=b.Symbol,E=B,D=Object.prototype,v=D.hasOwnProperty,C=D.toString,w=E?E.toStringTag:void 0;var S=function(e){var r=v.call(e,w),n=e[w];try{e[w]=void 0;var t=!0}catch(e){}var a=C.call(e);return t&&(r?e[w]=n:delete e[w]),a},A=Object.prototype.toString;var z=S,H=function(e){return A.call(e)},$=B?B.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?z(e):H(e)};var O=k,_=function(e){return null!=e&&"object"==typeof e};var W=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==O(e)},L=x,P=g,T=W,j=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,R=/^0o[0-7]+$/i,I=parseInt;var X=g,J=F,N=function(e){if("number"==typeof e)return e;if(T(e))return NaN;if(P(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=P(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=L(e);var n=V.test(e);return n||R.test(e)?I(e.slice(2),n?2:8):j.test(e)?NaN:+e},M=Math.max,G=Math.min;var Y=c((function(e,r,n){var t,a,i,o,l,s,d=0,c=!1,g=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var n=t,i=a;return t=a=void 0,d=r,o=e.apply(i,n)}function b(e){var n=e-s;return void 0===s||n>=r||n<0||g&&e-d>=i}function u(){var e=J();if(b(e))return F(e);l=setTimeout(u,function(e){var n=r-(e-s);return g?G(n,i-(e-d)):n}(e))}function F(e){return l=void 0,h&&t?m(e):(t=a=void 0,o)}function y(){var e=J(),n=b(e);if(t=arguments,a=this,s=e,n){if(void 0===l)return function(e){return d=e,l=setTimeout(u,r),c?m(e):o}(s);if(g)return clearTimeout(l),l=setTimeout(u,r),m(s)}return void 0===l&&(l=setTimeout(u,r)),o}return r=N(r)||0,X(n)&&(c=!!n.leading,i=(g="maxWait"in n)?M(N(n.maxWait)||0,r):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),d=0,t=s=a=l=void 0},y.flush=function(){return void 0===l?o:F(J())},y}));var U=Array.isArray,q=U,K=W,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var ee=function(e,r){if(q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(Z.test(e)||!Q.test(e)||null!=r&&e in Object(r))},re=k,ne=g;var te,ae=function(e){if(!ne(e))return!1;var r=re(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ie=b["__core-js_shared__"],oe=(te=/[^.]+$/.exec(ie&&ie.keys&&ie.keys.IE_PROTO||""))?"Symbol(src)_1."+te:"";var le=function(e){return!!oe&&oe in e},se=Function.prototype.toString;var de=ae,ce=le,ge=g,he=function(e){if(null!=e){try{return se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,be=Function.prototype,ue=Object.prototype,Fe=be.toString,ye=ue.hasOwnProperty,pe=RegExp("^"+Fe.call(ye).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var fe=function(e){return!(!ge(e)||ce(e))&&(de(e)?pe:me).test(he(e))},xe=function(e,r){return null==e?void 0:e[r]};var Be=function(e,r){var n=xe(e,r);return fe(n)?n:void 0},Ee=Be(Object,"create"),De=Ee;var ve=function(){this.__data__=De?De(null):{},this.size=0};var Ce=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},we=Ee,Se=Object.prototype.hasOwnProperty;var Ae=function(e){var r=this.__data__;if(we){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Se.call(r,e)?r[e]:void 0},ze=Ee,He=Object.prototype.hasOwnProperty;var $e=Ee;var ke=ve,Oe=Ce,_e=Ae,We=function(e){var r=this.__data__;return ze?void 0!==r[e]:He.call(r,e)},Le=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$e&&void 0===r?"__lodash_hash_undefined__":r,this};function Pe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Pe.prototype.clear=ke,Pe.prototype.delete=Oe,Pe.prototype.get=_e,Pe.prototype.has=We,Pe.prototype.set=Le;var Te=Pe;var je=function(){this.__data__=[],this.size=0};var Ve=function(e,r){return e===r||e!=e&&r!=r};var Re=function(e,r){for(var n=e.length;n--;)if(Ve(e[n][0],r))return n;return-1},Ie=Re,Xe=Array.prototype.splice;var Je=Re;var Ne=Re;var Me=Re;var Ge=je,Ye=function(e){var r=this.__data__,n=Ie(r,e);return!(n<0)&&(n==r.length-1?r.pop():Xe.call(r,n,1),--this.size,!0)},Ue=function(e){var r=this.__data__,n=Je(r,e);return n<0?void 0:r[n][1]},qe=function(e){return Ne(this.__data__,e)>-1},Ke=function(e,r){var n=this.__data__,t=Me(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this};function Qe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Qe.prototype.clear=Ge,Qe.prototype.delete=Ye,Qe.prototype.get=Ue,Qe.prototype.has=qe,Qe.prototype.set=Ke;var Ze=Qe,er=Be(b,"Map"),rr=Te,nr=Ze,tr=er;var ar=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ir=function(e,r){var n=e.__data__;return ar(r)?n["string"==typeof r?"string":"hash"]:n.map},or=ir;var lr=ir;var sr=ir;var dr=ir;var cr=function(){this.size=0,this.__data__={hash:new rr,map:new(tr||nr),string:new rr}},gr=function(e){var r=or(this,e).delete(e);return this.size-=r?1:0,r},hr=function(e){return lr(this,e).get(e)},mr=function(e){return sr(this,e).has(e)},br=function(e,r){var n=dr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this};function ur(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}ur.prototype.clear=cr,ur.prototype.delete=gr,ur.prototype.get=hr,ur.prototype.has=mr,ur.prototype.set=br;var Fr=ur;function yr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,a=r?r.apply(this,t):t[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,t);return n.cache=i.set(a,o)||i,o};return n.cache=new(yr.Cache||Fr),n}yr.Cache=Fr;var pr=yr;var fr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/\\(\\)?/g,Br=function(e){var r=pr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(fr,(function(e,n,t,a){r.push(t?a.replace(xr,"$1"):n||e)})),r}));var Er=function(e,r){for(var n=-1,t=null==e?0:e.length,a=Array(t);++n<t;)a[n]=r(e[n],n,e);return a},Dr=U,vr=W,Cr=B?B.prototype:void 0,wr=Cr?Cr.toString:void 0;var Sr=function e(r){if("string"==typeof r)return r;if(Dr(r))return Er(r,e)+"";if(vr(r))return wr?wr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Ar=Sr;var zr=U,Hr=ee,$r=Br,kr=function(e){return null==e?"":Ar(e)};var Or=W;var _r=function(e,r){return zr(e)?e:Hr(e,r)?[e]:$r(kr(e))},Wr=function(e){if("string"==typeof e||Or(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Lr=function(e,r){for(var n=0,t=(r=_r(r,e)).length;null!=e&&n<t;)e=e[Wr(r[n++])];return n&&n==t?e:void 0};var Pr=c((function(e,r,n){var t=null==e?void 0:Lr(e,r);return void 0===t?n:t}));const Tr=(e,r,n)=>r?Pr(n,r)||Pr(e,r):n||e,jr=(e,r)=>{const n=r||e.defaultValue;return Pr(e.collections,n)};var Vr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vr||(Vr={}));const Rr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ir=e=>r=>{const n=r.theme,t=jr(Rr,n[Vr.colorScheme]);return n.options&&n.options.color?Tr(t,e,n.options.color):Tr(t,e)},Xr=(Ir("Brand.1"),Ir("Brand.2"),Ir("Brand.3"),Ir("Brand.4"),Ir("Brand.5"),Ir("Brand.6"),Ir("Primary")),Jr=(Ir("PrimaryDark"),Ir("Secondary")),Nr=(Ir("Accent.Light.1"),Ir("Accent.Light.2"),Ir("Accent.Light.3"),Ir("Accent.Light.4"),Ir("Accent.Light.5"),Ir("Accent.Light.6"),Ir("Accent.Dark.1"),Ir("Accent.Dark.2"),Ir("Accent.Dark.3"),{1:Ir("Neutral.1"),2:Ir("Neutral.2"),3:Ir("Neutral.3"),4:Ir("Neutral.4"),5:Ir("Neutral.5"),6:Ir("Neutral.6"),7:Ir("Neutral.7"),8:Ir("Neutral.8")}),Mr=(Ir("Validation.Green.Text"),Ir("Validation.Green.Icon"),Ir("Validation.Green.Border"),Ir("Validation.Green.Background"),Ir("Validation.Orange.Text"),Ir("Validation.Orange.Icon"),Ir("Validation.Orange.Border"),Ir("Validation.Orange.Background"),Ir("Validation.Orange.Badge"),Ir("Validation.Red.Text"),Ir("Validation.Red.Icon"),Ir("Validation.Red.Border"),Ir("Validation.Red.Background"),Ir("Validation.Blue.Text"),Ir("Validation.Blue.Icon"),Ir("Validation.Blue.Border"),Ir("Validation.Blue.Background"),Ir("Shadow.Accent"),Ir("Shadow.Red"),Ir("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Gr={D1:{fontFamily:Mr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Yr={D1:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Mr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ur={collections:{base:Gr,oneservice:{D1:{fontFamily:Mr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Mr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Mr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Mr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Mr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Mr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Mr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Mr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Mr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Mr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Mr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Yr},defaultValue:"base"},qr=e=>r=>{const n=r.theme,t=jr(Ur,n[Vr.textStyleScheme]);return n.options&&n.options.textStyle?Tr(t,e,n.options.textStyle):Tr(t,e)},Kr={D1:{fontFamily:qr("D1.fontFamily"),fontSize:qr("D1.fontSize"),fontWeight:qr("D1.fontWeight"),lineHeight:qr("D1.lineHeight"),letterSpacing:qr("D1.letterSpacing")},D2:{fontFamily:qr("D2.fontFamily"),fontSize:qr("D2.fontSize"),fontWeight:qr("D2.fontWeight"),lineHeight:qr("D2.lineHeight"),letterSpacing:qr("D2.letterSpacing")},D3:{fontFamily:qr("D3.fontFamily"),fontSize:qr("D3.fontSize"),fontWeight:qr("D3.fontWeight"),lineHeight:qr("D3.lineHeight"),letterSpacing:qr("D3.letterSpacing")},D4:{fontFamily:qr("D4.fontFamily"),fontSize:qr("D4.fontSize"),fontWeight:qr("D4.fontWeight"),lineHeight:qr("D4.lineHeight"),letterSpacing:qr("D4.letterSpacing")},DBody:{fontFamily:qr("DBody.fontFamily"),fontSize:qr("DBody.fontSize"),fontWeight:qr("DBody.fontWeight"),lineHeight:qr("DBody.lineHeight"),letterSpacing:qr("DBody.letterSpacing")},H1:{fontFamily:qr("H1.fontFamily"),fontSize:qr("H1.fontSize"),fontWeight:qr("H1.fontWeight"),lineHeight:qr("H1.lineHeight"),letterSpacing:qr("H1.letterSpacing")},H2:{fontFamily:qr("H2.fontFamily"),fontSize:qr("H2.fontSize"),fontWeight:qr("H2.fontWeight"),lineHeight:qr("H2.lineHeight"),letterSpacing:qr("H2.letterSpacing")},H3:{fontFamily:qr("H3.fontFamily"),fontSize:qr("H3.fontSize"),fontWeight:qr("H3.fontWeight"),lineHeight:qr("H3.lineHeight"),letterSpacing:qr("H3.letterSpacing")},H4:{fontFamily:qr("H4.fontFamily"),fontSize:qr("H4.fontSize"),fontWeight:qr("H4.fontWeight"),lineHeight:qr("H4.lineHeight"),letterSpacing:qr("H4.letterSpacing")},H5:{fontFamily:qr("H5.fontFamily"),fontSize:qr("H5.fontSize"),fontWeight:qr("H5.fontWeight"),lineHeight:qr("H5.lineHeight"),letterSpacing:qr("H5.letterSpacing")},H6:{fontFamily:qr("H6.fontFamily"),fontSize:qr("H6.fontSize"),fontWeight:qr("H6.fontWeight"),lineHeight:qr("H6.lineHeight"),letterSpacing:qr("H6.letterSpacing")},Body:{fontFamily:qr("Body.fontFamily"),fontSize:qr("Body.fontSize"),fontWeight:qr("Body.fontWeight"),lineHeight:qr("Body.lineHeight"),letterSpacing:qr("Body.letterSpacing")},BodySmall:{fontFamily:qr("BodySmall.fontFamily"),fontSize:qr("BodySmall.fontSize"),fontWeight:qr("BodySmall.fontWeight"),lineHeight:qr("BodySmall.lineHeight"),letterSpacing:qr("BodySmall.letterSpacing")},XSmall:{fontFamily:qr("XSmall.fontFamily"),fontSize:qr("XSmall.fontSize"),fontWeight:qr("XSmall.fontWeight"),lineHeight:qr("XSmall.lineHeight"),letterSpacing:qr("XSmall.letterSpacing")}},Qr=[Mr.OpenSans,Mr.PlusJakartaSans],Zr=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},en=(e,r)=>n=>{var t;const a=Kr[e].fontFamily(n),i=Kr[e].fontWeight(n),o=Qr.find((e=>Object.values(e).includes(a)));return o?l`
                font-family: ${Zr(o,r)||Zr(o,i)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(t=rn(r)||i)&&void 0!==t?t:"normal"};
        `},rn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nn=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},tn=(e,r,n=!1)=>t=>{const a=Kr[e],i=a.fontSize(t);return l`
            ${en(e,r)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(t)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},an=(e=!1,r=!1,n=void 0)=>r?l`
            display: block;
            ${nn(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${nn(n)}
        `;var on;!function(e){e.D1=o.h1`
        ${e=>l`
                ${tn("D1",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${tn("D2",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${tn("D3",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${tn("D4",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${tn("DBody",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${tn("H1",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${tn("H2",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${tn("H3",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${tn("H4",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${tn("H5",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${tn("H6",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${tn("Body",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${tn("BodySmall",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${tn("XSmall",e.weight,e.paragraph)}
                color: ${Nr[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>dn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>dn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(on||(on={}));const ln=o.a`
    ${e=>l`
            ${tn(e.textStyle,e.weight)}
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
`,dn=n=>{var{external:t=!1,children:a}=n,i=s(n,["external","children"]);return e(ln,Object.assign({},i,{children:[a,t&&r(sn,{})]}))},cn=(e,r,n)=>Pr(n,r)||Pr(e,r),gn=(e,r)=>{const n=r||e.defaultValue;return Pr(e.collections,n)},hn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},mn=e=>r=>{const n=r.theme,t=gn(hn,n.colourScheme);return n.overrides&&n.overrides.primitiveColour?cn(t,e,n.overrides.primitiveColour):t[e]},bn={"primary-10":mn("primary-10"),"primary-20":mn("primary-20"),"primary-30":mn("primary-30"),"primary-40":mn("primary-40"),"primary-50":mn("primary-50"),"primary-60":mn("primary-60"),"primary-70":mn("primary-70"),"primary-80":mn("primary-80"),"primary-90":mn("primary-90"),"primary-95":mn("primary-95"),"primary-100":mn("primary-100"),"secondary-10":mn("secondary-10"),"secondary-20":mn("secondary-20"),"secondary-30":mn("secondary-30"),"secondary-40":mn("secondary-40"),"secondary-50":mn("secondary-50"),"secondary-60":mn("secondary-60"),"secondary-70":mn("secondary-70"),"secondary-80":mn("secondary-80"),"secondary-90":mn("secondary-90"),"secondary-95":mn("secondary-95"),"secondary-100":mn("secondary-100"),"neutral-10":mn("neutral-10"),"neutral-20":mn("neutral-20"),"neutral-30":mn("neutral-30"),"neutral-40":mn("neutral-40"),"neutral-50":mn("neutral-50"),"neutral-60":mn("neutral-60"),"neutral-70":mn("neutral-70"),"neutral-80":mn("neutral-80"),"neutral-90":mn("neutral-90"),"neutral-95":mn("neutral-95"),"neutral-100":mn("neutral-100"),"success-10":mn("success-10"),"success-20":mn("success-20"),"success-30":mn("success-30"),"success-40":mn("success-40"),"success-50":mn("success-50"),"success-60":mn("success-60"),"success-70":mn("success-70"),"success-80":mn("success-80"),"success-90":mn("success-90"),"success-95":mn("success-95"),"success-100":mn("success-100"),"warning-10":mn("warning-10"),"warning-20":mn("warning-20"),"warning-30":mn("warning-30"),"warning-40":mn("warning-40"),"warning-50":mn("warning-50"),"warning-60":mn("warning-60"),"warning-70":mn("warning-70"),"warning-80":mn("warning-80"),"warning-90":mn("warning-90"),"warning-95":mn("warning-95"),"warning-100":mn("warning-100"),"error-10":mn("error-10"),"error-20":mn("error-20"),"error-30":mn("error-30"),"error-40":mn("error-40"),"error-50":mn("error-50"),"error-60":mn("error-60"),"error-70":mn("error-70"),"error-80":mn("error-80"),"error-90":mn("error-90"),"error-95":mn("error-95"),"error-100":mn("error-100"),"info-10":mn("info-10"),"info-20":mn("info-20"),"info-30":mn("info-30"),"info-40":mn("info-40"),"info-50":mn("info-50"),"info-60":mn("info-60"),"info-70":mn("info-70"),"info-80":mn("info-80"),"info-90":mn("info-90"),"info-95":mn("info-95"),"info-100":mn("info-100"),white:mn("white"),black:mn("black")},un={text:mn("neutral-20"),"text-subtle":mn("neutral-30"),"text-subtler":mn("neutral-50"),"text-subtlest":mn("neutral-60"),"text-primary":mn("primary-50"),"text-hover":mn("primary-40"),"text-selected":mn("primary-50"),"text-selected-hover":mn("primary-40"),"text-disabled":mn("neutral-50"),"text-disabled-subtle":mn("neutral-60"),"text-disabled-subtlest":mn("neutral-80"),"text-selected-disabled":mn("neutral-50"),"text-success":mn("success-40"),"text-warning":mn("warning-40"),"text-error":mn("error-40"),"text-info":mn("info-40"),"text-inverse":mn("white"),icon:mn("neutral-50"),"icon-subtle":mn("neutral-60"),"icon-strongest":mn("neutral-20"),"icon-primary":mn("primary-50"),"icon-primary-subtle":mn("primary-60"),"icon-primary-subtlest":mn("primary-70"),"icon-hover":mn("primary-40"),"icon-selected":mn("primary-50"),"icon-selected-hover":mn("primary-40"),"icon-disabled":mn("neutral-50"),"icon-disabled-subtle":mn("neutral-60"),"icon-selected-disabled":mn("neutral-60"),"icon-success":mn("success-50"),"icon-warning":mn("warning-60"),"icon-error":mn("error-50"),"icon-error-strong":mn("error-40"),"icon-info":mn("info-50"),"icon-inverse":mn("white"),"icon-primary-inverse":"#FEAB10",border:mn("neutral-90"),"border-strong":mn("neutral-70"),"border-stronger":mn("neutral-30"),"border-primary":mn("primary-50"),"border-primary-subtle":mn("primary-60"),"border-hover":mn("primary-90"),"border-hover-strong":mn("primary-60"),"border-selected":mn("primary-50"),"border-selected-subtle":mn("primary-70"),"border-selected-subtlest":mn("primary-90"),"border-selected-hover":mn("primary-40"),"border-focus":mn("primary-60"),"border-focus-strong":mn("primary-50"),"border-disabled":mn("neutral-90"),"border-selected-disabled":mn("neutral-70"),"border-success":mn("success-60"),"border-warning":mn("warning-60"),"border-error":mn("error-60"),"border-error-focus":mn("error-60"),"border-error-strong":mn("error-40"),"border-info":mn("info-60"),bg:mn("white"),"bg-strong":mn("neutral-100"),"bg-stronger":mn("neutral-95"),"bg-strongest":mn("neutral-90"),"bg-hover":mn("primary-95"),"bg-hover-strong":mn("primary-90"),"bg-hover-subtle":mn("primary-100"),"bg-hover-neutral":mn("neutral-95"),"bg-selected":mn("primary-95"),"bg-selected-hover":mn("primary-90"),"bg-selected-strong":mn("primary-90"),"bg-selected-strongest":mn("primary-90"),"bg-disabled":mn("neutral-95"),"bg-selected-disabled":mn("neutral-95"),"bg-success":mn("success-100"),"bg-success-strong":mn("success-50"),"bg-warning":mn("warning-100"),"bg-warning-strong":mn("warning-50"),"bg-info":mn("info-100"),"bg-info-strong":mn("info-50"),"bg-error":mn("error-100"),"bg-error-strong":mn("error-50"),"bg-error-strong-hover":mn("error-30"),"bg-inverse":mn("neutral-20"),"bg-inverse-subtle":mn("neutral-30"),"bg-inverse-subtler":mn("neutral-50"),"bg-inverse-subtlest":mn("neutral-60"),"bg-primary":mn("primary-50"),"bg-primary-subtle":mn("primary-60"),"bg-primary-subtler":mn("primary-80"),"bg-primary-subtlest":mn("primary-100"),"bg-primary-hover":mn("primary-40"),"bg-primary-subtlest-hover":mn("primary-90"),"bg-primary-subtlest-selected":mn("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:mn("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":mn("black"),"focus-ring-inverse":mn("white")},Fn={collections:{lifesg:un,bookingsg:un,rbs:un,mylegacy:un,ccube:un},defaultValue:"lifesg"},yn=e=>r=>{const n=r.theme,t=gn(Fn,n.colourScheme),a=n.overrides&&n.overrides.semanticColour?cn(t,e,n.overrides.semanticColour):t[e];return"function"==typeof a?a(r):a},pn={text:yn("text"),"text-subtle":yn("text-subtle"),"text-subtler":yn("text-subtler"),"text-subtlest":yn("text-subtlest"),"text-primary":yn("text-primary"),"text-hover":yn("text-hover"),"text-selected":yn("text-selected"),"text-selected-hover":yn("text-selected-hover"),"text-disabled":yn("text-disabled"),"text-disabled-subtle":yn("text-disabled-subtle"),"text-disabled-subtlest":yn("text-disabled-subtlest"),"text-selected-disabled":yn("text-selected-disabled"),"text-success":yn("text-success"),"text-warning":yn("text-warning"),"text-error":yn("text-error"),"text-info":yn("text-info"),"text-inverse":yn("text-inverse"),icon:yn("icon"),"icon-subtle":yn("icon-subtle"),"icon-strongest":yn("icon-strongest"),"icon-primary":yn("icon-primary"),"icon-primary-subtle":yn("icon-primary-subtle"),"icon-primary-subtlest":yn("icon-primary-subtlest"),"icon-hover":yn("icon-hover"),"icon-selected":yn("icon-selected"),"icon-selected-hover":yn("icon-selected-hover"),"icon-disabled":yn("icon-disabled"),"icon-disabled-subtle":yn("icon-disabled-subtle"),"icon-selected-disabled":yn("icon-selected-disabled"),"icon-success":yn("icon-success"),"icon-warning":yn("icon-warning"),"icon-error":yn("icon-error"),"icon-error-strong":yn("icon-error-strong"),"icon-info":yn("icon-info"),"icon-inverse":yn("icon-inverse"),"icon-primary-inverse":yn("icon-primary-inverse"),border:yn("border"),"border-strong":yn("border-strong"),"border-stronger":yn("border-stronger"),"border-primary":yn("border-primary"),"border-primary-subtle":yn("border-primary-subtle"),"border-hover":yn("border-hover"),"border-hover-strong":yn("border-hover-strong"),"border-selected":yn("border-selected"),"border-selected-subtle":yn("border-selected-subtle"),"border-selected-subtlest":yn("border-selected-subtlest"),"border-selected-hover":yn("border-selected-hover"),"border-focus":yn("border-focus"),"border-focus-strong":yn("border-focus-strong"),"border-disabled":yn("border-disabled"),"border-selected-disabled":yn("border-selected-disabled"),"border-success":yn("border-success"),"border-warning":yn("border-warning"),"border-error":yn("border-error"),"border-error-focus":yn("border-error-focus"),"border-error-strong":yn("border-error-strong"),"border-info":yn("border-info"),bg:yn("bg"),"bg-strong":yn("bg-strong"),"bg-stronger":yn("bg-stronger"),"bg-strongest":yn("bg-strongest"),"bg-hover":yn("bg-hover"),"bg-hover-strong":yn("bg-hover-strong"),"bg-hover-subtle":yn("bg-hover-subtle"),"bg-hover-neutral":yn("bg-hover-neutral"),"bg-selected":yn("bg-selected"),"bg-selected-hover":yn("bg-selected-hover"),"bg-selected-strong":yn("bg-selected-strong"),"bg-selected-strongest":yn("bg-selected-strongest"),"bg-disabled":yn("bg-disabled"),"bg-selected-disabled":yn("bg-selected-disabled"),"bg-success":yn("bg-success"),"bg-success-strong":yn("bg-success-strong"),"bg-warning":yn("bg-warning"),"bg-warning-strong":yn("bg-warning-strong"),"bg-info":yn("bg-info"),"bg-info-strong":yn("bg-info-strong"),"bg-error":yn("bg-error"),"bg-error-strong":yn("bg-error-strong"),"bg-error-strong-hover":yn("bg-error-strong-hover"),"bg-inverse":yn("bg-inverse"),"bg-inverse-subtle":yn("bg-inverse-subtle"),"bg-inverse-subtler":yn("bg-inverse-subtler"),"bg-inverse-subtlest":yn("bg-inverse-subtlest"),"bg-primary":yn("bg-primary"),"bg-primary-subtle":yn("bg-primary-subtle"),"bg-primary-subtler":yn("bg-primary-subtler"),"bg-primary-subtlest":yn("bg-primary-subtlest"),"bg-primary-hover":yn("bg-primary-hover"),"bg-primary-subtlest-hover":yn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":yn("bg-primary-subtlest-selected"),"bg-available":yn("bg-available"),"overlay-strong":yn("overlay-strong"),"overlay-subtle":yn("overlay-subtle"),hyperlink:yn("hyperlink"),"hyperlink-inverse":yn("hyperlink-inverse"),"focus-ring":yn("focus-ring"),"focus-ring-inverse":yn("focus-ring-inverse")},fn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},xn=e=>r=>{var n;const t=r.theme,a=gn(fn,null==t?void 0:t.breakpointScheme);let i;return i=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?cn(a,e,t.overrides.breakpoint):a[e],i},Bn={"xxs-min":xn("xxs-min"),"xxs-max":xn("xxs-max"),"xs-min":xn("xs-min"),"xs-max":xn("xs-max"),"sm-min":xn("sm-min"),"sm-max":xn("sm-max"),"md-min":xn("md-min"),"md-max":xn("md-max"),"lg-min":xn("lg-min"),"lg-max":xn("lg-max"),"xl-min":xn("xl-min"),"xl-max":xn("xl-max"),"xxl-min":xn("xxl-min"),"xxs-column":xn("xxs-column"),"xs-column":xn("xs-column"),"sm-column":xn("sm-column"),"md-column":xn("md-column"),"lg-column":xn("lg-column"),"xl-column":xn("xl-column"),"xxl-column":xn("xxl-column"),"xxs-gutter":xn("xxs-gutter"),"xs-gutter":xn("xs-gutter"),"sm-gutter":xn("sm-gutter"),"md-gutter":xn("md-gutter"),"lg-gutter":xn("lg-gutter"),"xl-gutter":xn("xl-gutter"),"xxl-gutter":xn("xxl-gutter"),"xxs-margin":xn("xxs-margin"),"xs-margin":xn("xs-margin"),"sm-margin":xn("sm-margin"),"md-margin":xn("md-margin"),"lg-margin":xn("lg-margin"),"xl-margin":xn("xl-margin"),"xxl-margin":xn("xxl-margin")},En=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Bn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{});En("max-width"),En("min-width");const Dn={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},vn={collections:{lifesg:Dn,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Dn,mylegacy:Dn,ccube:Dn},defaultValue:"lifesg"},Cn=e=>r=>{const n=r.theme,t=gn(vn,n.fontScheme);return n.overrides&&n.overrides.fontSpec?cn(t,e,n.overrides.fontSpec):t[e]},wn={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Sn=e=>r=>{const n=r.theme,t=gn(wn,n.radiusScheme);return n.overrides&&n.overrides.radius?`${cn(t,e,n.overrides.radius)}px`:`${t[e]}px`},An={none:Sn("none"),xs:Sn("xs"),sm:Sn("sm"),md:Sn("md"),lg:Sn("lg"),full:Sn("full")},zn={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Hn=e=>r=>{const n=r.theme,t=gn(zn,n.spacingScheme);return n.overrides&&n.overrides.spacing?`${cn(t,e,n.overrides.spacing)}px`:`${t[e]}px`},$n={"spacing-0":Hn("spacing-0"),"spacing-4":Hn("spacing-4"),"spacing-8":Hn("spacing-8"),"spacing-12":Hn("spacing-12"),"spacing-16":Hn("spacing-16"),"spacing-20":Hn("spacing-20"),"spacing-24":Hn("spacing-24"),"spacing-32":Hn("spacing-32"),"spacing-40":Hn("spacing-40"),"spacing-48":Hn("spacing-48"),"spacing-64":Hn("spacing-64"),"spacing-72":Hn("spacing-72"),"layout-xs":Hn("layout-xs"),"layout-sm":Hn("layout-sm"),"layout-md":Hn("layout-md"),"layout-lg":Hn("layout-lg"),"layout-xl":Hn("layout-xl"),"layout-xxl":Hn("layout-xxl"),"layout-xxxl":Hn("layout-xxxl")},kn=(e,r,n,t)=>l`
    font-family: ${Cn("font-family")};
    font-size: ${Cn(e)};
    font-weight: ${Cn(r)};
    line-height: ${Cn(n)};
    letter-spacing: ${Cn(t)};
`,On={"header-xxl-light":kn("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":kn("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":kn("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":kn("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":kn("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":kn("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":kn("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":kn("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":kn("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":kn("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":kn("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":kn("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":kn("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":kn("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":kn("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":kn("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":kn("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":kn("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":kn("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":kn("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":kn("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":kn("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":kn("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":kn("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":kn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":kn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":kn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":kn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":kn("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":kn("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":kn("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":kn("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":kn("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":kn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":kn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":kn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":kn("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":kn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":kn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":kn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":kn("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":kn("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},_n={collections:{lifesg:On,bookingsg:On,rbs:On,mylegacy:On,ccube:On},defaultValue:"lifesg"},Wn=e=>r=>{const n=r.theme,t=gn(_n,n.fontScheme),a=n.overrides&&n.overrides.font?cn(t,e,n.overrides.font):t[e];return"function"==typeof a?a(r):a},Ln={"header-xxl-light":Wn("header-xxl-light"),"header-xxl-regular":Wn("header-xxl-regular"),"header-xxl-semibold":Wn("header-xxl-semibold"),"header-xxl-bold":Wn("header-xxl-bold"),"header-xl-light":Wn("header-xl-light"),"header-xl-regular":Wn("header-xl-regular"),"header-xl-semibold":Wn("header-xl-semibold"),"header-xl-bold":Wn("header-xl-bold"),"header-lg-light":Wn("header-lg-light"),"header-lg-regular":Wn("header-lg-regular"),"header-lg-semibold":Wn("header-lg-semibold"),"header-lg-bold":Wn("header-lg-bold"),"header-md-light":Wn("header-md-light"),"header-md-regular":Wn("header-md-regular"),"header-md-semibold":Wn("header-md-semibold"),"header-md-bold":Wn("header-md-bold"),"header-sm-light":Wn("header-sm-light"),"header-sm-regular":Wn("header-sm-regular"),"header-sm-semibold":Wn("header-sm-semibold"),"header-sm-bold":Wn("header-sm-bold"),"header-xs-light":Wn("header-xs-light"),"header-xs-regular":Wn("header-xs-regular"),"header-xs-semibold":Wn("header-xs-semibold"),"header-xs-bold":Wn("header-xs-bold"),"body-baseline-light":Wn("body-baseline-light"),"body-baseline-regular":Wn("body-baseline-regular"),"body-baseline-semibold":Wn("body-baseline-semibold"),"body-baseline-bold":Wn("body-baseline-bold"),"body-md-light":Wn("body-md-light"),"body-md-regular":Wn("body-md-regular"),"body-md-semibold":Wn("body-md-semibold"),"body-md-bold":Wn("body-md-bold"),"body-sm-light":Wn("body-sm-light"),"body-sm-regular":Wn("body-sm-regular"),"body-sm-semibold":Wn("body-sm-semibold"),"body-sm-bold":Wn("body-sm-bold"),"body-xs-light":Wn("body-xs-light"),"body-xs-regular":Wn("body-xs-regular"),"body-xs-semibold":Wn("body-xs-semibold"),"body-xs-bold":Wn("body-xs-bold"),"formlabel-baseline-semibold":Wn("formlabel-baseline-semibold"),"formlabel-lg-semibold":Wn("formlabel-lg-semibold")},Pn=Object.assign(Object.assign({},pn),{Primitive:bn}),Tn=Ln,jn=$n,Vn=An,Rn=(e,r,n=!1)=>{const t=`${e}-${r.toLowerCase()}`;return l`
        ${Tn[t]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},In=(e,r)=>l`
    ${Rn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Pn.text};
`;var Xn;!function(n){const t=(e,r,n)=>{const t=o(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>In(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeaderXXL=t("h1","header-xxl","HeaderXXL"),n.HeaderXL=t("h2","header-xl","HeaderXL"),n.HeaderLG=t("h3","header-lg","HeaderLG"),n.HeaderMD=t("h4","header-md","HeaderMD"),n.HeaderSM=t("h5","header-sm","HeaderSM"),n.HeaderXS=t("h6","header-xs","HeaderXS");const a=(e,r)=>{const n=o.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>In(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=a("body-baseline","BodyBL"),n.BodyMD=a("body-md","BodyMD"),n.BodySM=a("body-sm","BodySM"),n.BodyXS=a("body-xs","BodyXS");const i=(n,t)=>{const a=o.a`
            ${e=>l`
                ${Rn(n,e.weight||"regular")}
                color: ${Pn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Pn["text-hover"]};
                }
            `}
        `,i=n=>{var{external:t=!1,children:i}=n,o=s(n,["external","children"]);return e(a,Object.assign({},o,{children:[i,t&&r(Jn,{})]}))};return i.displayName=`Typography.${t}`,i};n.LinkBL=i("body-baseline","LinkBL"),n.LinkMD=i("body-md","LinkMD"),n.LinkSM=i("body-sm","LinkSM"),n.LinkXS=i("body-xs","LinkXS")}(Xn||(Xn={}));const Jn=o(i)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Nn=o.div`
    border-radius: ${Vn.md};
    background: ${Pn.bg};
    padding: ${jn["spacing-16"]} ${jn["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Mn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gn=e=>Object.keys(Mn).reduce(((r,n)=>{const t=Mn[n];return r[n]=`@media screen and (${e}: ${t}px)`,r}),{}),Yn=Gn("max-width"),Un=(Gn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),qn=o.div`
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

                ${Yn.mobileL} {
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

                ${Yn.mobileL} {
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

                ${Yn.mobileL} {
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

                ${Yn.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?l`
            visibility: "visible";
            opacity: 1;
            transition: ${Un};
            z-index: 2;
        `:l`
            visibility: "hidden";
            opacity: 0;
            transition: ${Un};
            z-index: -1;
        `}
`,Kn=o((e=>{var{children:n}=e,t=s(e,["children"]);const a=t["data-testid"]||"card";return r(Nn,Object.assign({},t,{"data-testid":a},{children:"string"==typeof n?r(Xn.BodyBL,{children:n}):n}))}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,Qn=o.div`
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
`,Zn=o.div`
    position: relative;
`,et=i=>{var{visible:o,position:l="top",children:d}=i,c=s(i,["visible","position","children"]);const g=c["data-testid"]||"tooltip",[h,m]=n(l),b=t(null);a((()=>(F(),window.addEventListener("resize",Y(u,300)),()=>{window.removeEventListener("resize",Y(u,300))})),[]);const u=()=>{F()},F=()=>{if(b.current){const e=b.current.getBoundingClientRect();if(e.x<0)switch(l){case"left":case"top":case"bottom":m("right");break;case"right":m("top")}else if(e.x+e.width>window.outerWidth)switch(l){case"right":case"top":case"bottom":m("left");break;case"left":m("top")}else m(l)}};return e(qn,Object.assign({position:h,"data-testid":g,visible:o,ref:b},c,{children:[r(Kn,{children:"string"==typeof d?r(on.BodySmall,{children:d}):d}),r(Qn,{position:h})]}))},rt=(n,t)=>a=>{const{tooltipVisible:i,position:o}=a,l=s(a,["tooltipVisible","position"]);return e(Zn,{children:[r(n,Object.assign({},l)),r(et,Object.assign({visible:i,position:o},{children:t.content}))]})};export{et as Tooltip,rt as withTooltip};
//# sourceMappingURL=index.js.map
