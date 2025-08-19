import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as a,useImperativeHandle as o,useState as i,useEffect as l}from"react";import s,{css as u}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";import{CrossIcon as d}from"@lifesg/react-icons/cross";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,m="object"==typeof h&&h&&h.Object===Object&&h,F="object"==typeof self&&self&&self.Object===Object&&self,y=m||F||Function("return this")(),S=y.Symbol,B=S,v=Object.prototype,D=v.hasOwnProperty,$=v.toString,b=B?B.toStringTag:void 0;var x=function(e){var t=D.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var a=$.call(e);return r&&(t?e[b]=n:delete e[b]),a},w=Object.prototype.toString;var H=x,O=function(e){return w.call(e)},E=S?S.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?H(e):O(e)};var C=k,A=function(e){return null!=e&&"object"==typeof e};var M=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==C(e)},z=p,_=M,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var V=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(T.test(e)||!W.test(e)||null!=t&&e in Object(t))};var Y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L=k,I=Y;var R,N=function(e){if(!I(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=y["__core-js_shared__"],j=(R=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var J=function(e){return!!j&&j in e},Z=Function.prototype.toString;var X=N,G=J,U=Y,Q=function(e){if(null!=e){try{return Z.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,K=Function.prototype,ee=Object.prototype,te=K.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!U(e)||G(e))&&(X(e)?re:q).test(Q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=oe(e,t);return ae(n)?n:void 0},le=ie(Object,"create"),se=le;var ue=function(){this.__data__=se?se(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=le,fe=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(de){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},ge=le,pe=Object.prototype.hasOwnProperty;var me=le;var Fe=ue,ye=ce,Se=he,Be=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=Fe,De.prototype.delete=ye,De.prototype.get=Se,De.prototype.has=Be,De.prototype.set=ve;var $e=De;var be=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},He=we,Oe=Array.prototype.splice;var Ee=we;var ke=we;var Ce=we;var Ae=be,Me=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():Oe.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},_e=function(e){return ke(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ae,Te.prototype.delete=Me,Te.prototype.get=ze,Te.prototype.has=_e,Te.prototype.set=We;var Ve=Te,Ye=ie(y,"Map"),Le=$e,Ie=Ve,Re=Ye;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Pe;var Je=Pe;var Ze=Pe;var Xe=Pe;var Ge=function(){this.size=0,this.__data__={hash:new Le,map:new(Re||Ie),string:new Le}},Ue=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Je(this,e).get(e)},qe=function(e){return Ze(this,e).has(e)},Ke=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ge,et.prototype.delete=Ue,et.prototype.get=Qe,et.prototype.has=qe,et.prototype.set=Ke;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,n,r,a){t.push(r?a.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},st=p,ut=M,ct=S?S.prototype:void 0,dt=ct?ct.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(st(t))return lt(t,e)+"";if(ut(t))return dt?dt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ht=ft;var gt=p,pt=V,mt=it,Ft=function(e){return null==e?"":ht(e)};var yt=M;var St=function(e,t){return gt(e)?e:pt(e,t)?[e]:mt(Ft(e))},Bt=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var vt=function(e,t){for(var n=0,r=(t=St(t,e)).length;null!=e&&n<r;)e=e[Bt(t[n++])];return n&&n==r?e:void 0};var Dt=g((function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r}));const $t=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=bt(wt,n[xt.colorScheme]);return n.options&&n.options.color?$t(r,e,n.options.color):$t(r,e)},Ot={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},Et={collections:{base:{InputBoxShadow:u`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:u`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:u`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:u`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},kt=e=>t=>{var n;const r=t.theme,a=bt(Et,r[xt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?$t(a,e,r.options.designToken):$t(a,e)},Ct=kt("InputBoxShadow"),At=kt("InputErrorBoxShadow"),Mt=(kt("ElevationBoxShadow"),kt("Table.Header"),kt("Table.Cell.Primary"),kt("Table.Cell.Secondary"),kt("Table.Cell.Selected"),kt("Table.Cell.Hover"),kt("Button.Danger.BackgroundColor"),kt("Button.Danger.Hover"),kt("Button.Danger.Primary"),kt("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),zt={D1:{fontFamily:Mt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},_t={D1:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Mt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Mt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Mt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Mt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Mt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Wt={collections:{base:zt,oneservice:{D1:{fontFamily:Mt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Mt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Mt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Mt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Mt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Mt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Mt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Mt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Mt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Mt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Mt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Mt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:_t},defaultValue:"base"},Tt=e=>t=>{const n=t.theme,r=bt(Wt,n[xt.textStyleScheme]);return n.options&&n.options.textStyle?$t(r,e,n.options.textStyle):$t(r,e)},Vt={D1:{fontFamily:Tt("D1.fontFamily"),fontSize:Tt("D1.fontSize"),fontWeight:Tt("D1.fontWeight"),lineHeight:Tt("D1.lineHeight"),letterSpacing:Tt("D1.letterSpacing"),fontVariant:Tt("D1.fontVariant")},D2:{fontFamily:Tt("D2.fontFamily"),fontSize:Tt("D2.fontSize"),fontWeight:Tt("D2.fontWeight"),lineHeight:Tt("D2.lineHeight"),letterSpacing:Tt("D2.letterSpacing"),fontVariant:Tt("D2.fontVariant")},D3:{fontFamily:Tt("D3.fontFamily"),fontSize:Tt("D3.fontSize"),fontWeight:Tt("D3.fontWeight"),lineHeight:Tt("D3.lineHeight"),letterSpacing:Tt("D3.letterSpacing"),fontVariant:Tt("D3.fontVariant")},D4:{fontFamily:Tt("D4.fontFamily"),fontSize:Tt("D4.fontSize"),fontWeight:Tt("D4.fontWeight"),lineHeight:Tt("D4.lineHeight"),letterSpacing:Tt("D4.letterSpacing"),fontVariant:Tt("D4.fontVariant")},DBody:{fontFamily:Tt("DBody.fontFamily"),fontSize:Tt("DBody.fontSize"),fontWeight:Tt("DBody.fontWeight"),lineHeight:Tt("DBody.lineHeight"),letterSpacing:Tt("DBody.letterSpacing"),fontVariant:Tt("DBody.fontVariant")},H1:{fontFamily:Tt("H1.fontFamily"),fontSize:Tt("H1.fontSize"),fontWeight:Tt("H1.fontWeight"),lineHeight:Tt("H1.lineHeight"),letterSpacing:Tt("H1.letterSpacing"),fontVariant:Tt("H1.fontVariant")},H2:{fontFamily:Tt("H2.fontFamily"),fontSize:Tt("H2.fontSize"),fontWeight:Tt("H2.fontWeight"),lineHeight:Tt("H2.lineHeight"),letterSpacing:Tt("H2.letterSpacing"),fontVariant:Tt("H2.fontVariant")},H3:{fontFamily:Tt("H3.fontFamily"),fontSize:Tt("H3.fontSize"),fontWeight:Tt("H3.fontWeight"),lineHeight:Tt("H3.lineHeight"),letterSpacing:Tt("H3.letterSpacing"),fontVariant:Tt("H3.fontVariant")},H4:{fontFamily:Tt("H4.fontFamily"),fontSize:Tt("H4.fontSize"),fontWeight:Tt("H4.fontWeight"),lineHeight:Tt("H4.lineHeight"),letterSpacing:Tt("H4.letterSpacing"),fontVariant:Tt("H4.fontVariant")},H5:{fontFamily:Tt("H5.fontFamily"),fontSize:Tt("H5.fontSize"),fontWeight:Tt("H5.fontWeight"),lineHeight:Tt("H5.lineHeight"),letterSpacing:Tt("H5.letterSpacing"),fontVariant:Tt("H5.fontVariant")},H6:{fontFamily:Tt("H6.fontFamily"),fontSize:Tt("H6.fontSize"),fontWeight:Tt("H6.fontWeight"),lineHeight:Tt("H6.lineHeight"),letterSpacing:Tt("H6.letterSpacing"),fontVariant:Tt("H6.fontVariant")},Body:{fontFamily:Tt("Body.fontFamily"),fontSize:Tt("Body.fontSize"),fontWeight:Tt("Body.fontWeight"),lineHeight:Tt("Body.lineHeight"),letterSpacing:Tt("Body.letterSpacing"),fontVariant:Tt("Body.fontVariant")},BodySmall:{fontFamily:Tt("BodySmall.fontFamily"),fontSize:Tt("BodySmall.fontSize"),fontWeight:Tt("BodySmall.fontWeight"),lineHeight:Tt("BodySmall.lineHeight"),letterSpacing:Tt("BodySmall.letterSpacing"),fontVariant:Tt("BodySmall.fontVariant")},XSmall:{fontFamily:Tt("XSmall.fontFamily"),fontSize:Tt("XSmall.fontSize"),fontWeight:Tt("XSmall.fontWeight"),lineHeight:Tt("XSmall.lineHeight"),letterSpacing:Tt("XSmall.letterSpacing"),fontVariant:Tt("XSmall.fontVariant")}},Yt=[Mt.OpenSans,Mt.PlusJakartaSans],Lt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},It=(e,t)=>n=>{var r;const a=Vt[e].fontFamily(n),o=Vt[e].fontWeight(n),i=Yt.find((e=>Object.values(e).includes(a)));return i?u`
                font-family: ${Lt(i,t)||Lt(i,o)||a};
                font-weight: normal !important;
            `:u`
            font-family: ${a};
            font-weight: ${null!==(r=Rt(t)||o)&&void 0!==r?r:"normal"};
        `},Rt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nt=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pt=(e,t,n=!1)=>r=>{const a=Vt[e],o=a.fontSize(r);return u`
            ${It(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${u`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},jt=(e=!1,t=!1,n=void 0)=>t?u`
            display: block;
            ${Nt(n)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${Nt(n)}
        `;var Jt;!function(e){e.D1=s.h1`
        ${e=>u`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>u`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>u`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>u`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>u`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>u`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>u`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>u`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>u`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>u`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>u`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>u`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>u`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>u`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Jt||(Jt={}));const Zt=s.a`
    ${e=>u`
            ${Pt(e.textStyle,e.weight)}
            color: ${Ot.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        `}
`,Xt=s(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gt=n=>{var{external:r=!1,children:a}=n,o=f(n,["external","children"]);return e(Zt,Object.assign({},o,{children:[a,r&&t(Xt,{})]}))};var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Qt=u`
    border: 1px solid ${Ot.Accent.Light[1]};
    box-shadow: ${Ct};
`,qt=u`
    border: 1px solid ${Ot.Accent.Light[1]};
    box-shadow: none;
`,Kt=u`
    border: 1px solid ${Ot.Neutral[5]};
    box-shadow: none;
`,en=u`
    border: 1px solid ${Ot.Validation.Red.Border};
    box-shadow: ${At};
`,tn=s.div`
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};

    :focus-within {
        ${Qt}
    }
    ${e=>e.$focused&&Qt}

    ${e=>e.$readOnly?u`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${qt}
                }
                ${e.$focused&&qt}
            `:e.$disabled?u`
                background: ${Ot.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Kt}
                }
                ${e.$focused&&Kt}
            `:e.$error?u`
                border: 1px solid ${Ot.Validation.Red.Border};

                :focus-within {
                    ${en}
                }
                ${e.$focused&&en}
            `:void 0}
`,nn=s(tn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;s.input`
    ${e=>Pt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Ot.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ot.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,s.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Ot.Primary};
    }
`;var rn={exports:{}};rn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",o="minute",i="hour",l="day",s="week",u="month",c="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},F=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:F,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+F(r,2,"0")+":"+F(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,u),o=n-a<0,i=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-a)/(o?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:s,d:l,D:f,h:i,m:o,s:a,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},S="en",B={};B[S]=m;var v="$isDayjsObject",D=function(e){return e instanceof w||!(!e||!e[v])},$=function e(t,n,r){var a;if(!t)return S;if("string"==typeof t){var o=t.toLowerCase();B[o]&&(a=o),n&&(B[o]=n,a=o);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var l=t.name;B[l]=t,a=l}return!r&&a&&(S=a),a||!r&&S},b=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},x=y;x.l=$,x.i=D,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var F=m.prototype;return F.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},F.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},F.$utils=function(){return x},F.isValid=function(){return!(this.$d.toString()===h)},F.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},F.isAfter=function(e,t){return b(e)<this.startOf(t)},F.isBefore=function(e,t){return this.endOf(t)<b(e)},F.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(e,t){var n=this,r=!!x.u(t)||t,c=x.p(e),h=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case d:return r?h(1,0):h(31,11);case u:return r?h(1,m):h(0,m+1);case s:var S=this.$locale().weekStart||0,B=(p<S?p+7:p)-S;return h(r?F-B:F+(6-B),m);case l:case f:return g(y+"Hours",0);case i:return g(y+"Minutes",1);case o:return g(y+"Seconds",2);case a:return g(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(e){return this.startOf(e,!1)},F.$set=function(e,t){var n,s=x.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[l]=c+"Date",n[f]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[i]=c+"Hours",n[o]=c+"Minutes",n[a]=c+"Seconds",n[r]=c+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===u||s===d){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},F.set=function(e,t){return this.clone().$set(e,t)},F.get=function(e){return this[x.p(e)]()},F.add=function(r,c){var f,h=this;r=Number(r);var g=x.p(c),p=function(e){var t=b(h);return x.w(t.date(t.date()+Math.round(e*r)),h)};if(g===u)return this.set(u,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(f={},f[o]=t,f[i]=n,f[a]=e,f)[g]||1,F=this.$d.getTime()+r*m;return x.w(F,this)},F.subtract=function(e,t){return this.add(-1*e,t)},F.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),o=this.$H,i=this.$m,l=this.$M,s=n.weekdays,u=n.months,c=n.meridiem,d=function(e,n,a,o){return e&&(e[n]||e(t,r))||a[n].slice(0,o)},f=function(e){return x.s(o%12||12,e,"0")},g=c||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,u,3);case"MMMM":return d(u,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(o);case"HH":return x.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,i,!0);case"A":return g(o,i,!1);case"m":return String(i);case"mm":return x.s(i,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,f,h){var g,p=this,m=x.p(f),F=b(r),y=(F.utcOffset()-this.utcOffset())*t,S=this-F,B=function(){return x.m(p,F)};switch(m){case d:g=B()/12;break;case u:g=B();break;case c:g=B()/3;break;case s:g=(S-y)/6048e5;break;case l:g=(S-y)/864e5;break;case i:g=S/n;break;case o:g=S/t;break;case a:g=S/e;break;default:g=S}return h?g:x.a(g)},F.daysInMonth=function(){return this.endOf(u).$D},F.$locale=function(){return B[this.$L]},F.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},F.clone=function(){return x.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return b.prototype=H,[["$ms",r],["$s",a],["$m",o],["$H",i],["$W",l],["$M",u],["$y",d],["$D",f]].forEach((function(e){H[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,w,b),e.$i=!0),b},b.locale=$,b.isDayjs=D,b.unix=function(e){return b(1e3*e)},b.en=B[S],b.Ls=B,b.p={},b}();var an=g(rn.exports),on={exports:{}};on.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,a=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},l=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[a,s("seconds")],ss:[a,s("seconds")],m:[a,s("minutes")],mm:[a,s("minutes")],H:[a,s("hours")],h:[a,s("hours")],HH:[a,s("hours")],hh:[a,s("hours")],D:[a,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[a,s("week")],ww:[r,s("week")],M:[a,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=l(e)}],YYYY:[/\d{4}/,s("year")],Z:u,ZZ:u};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||a[r]||e[r]||a[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var u=o[s],c=f[u],d=c&&c[0],h=c&&c[1];o[s]=h?{regex:d,parser:h}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,s=a.parser,u=e.slice(r),c=i.exec(u)[0];s.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(l=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],u=!0===o[3],c=s||u,d=o[2];u&&(d=o[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var a=h(t)(e),o=a.year,i=a.month,l=a.day,s=a.hours,u=a.minutes,c=a.seconds,d=a.milliseconds,f=a.zone,g=a.week,p=new Date,m=l||(o||i?1:p.getDate()),F=o||p.getFullYear(),y=0;o&&!i||(y=i>0?i-1:p.getMonth());var S,B=s||0,v=u||0,D=c||0,$=d||0;return f?new Date(Date.UTC(F,y,m,B,v,D,$+60*f.offset*1e3)):n?new Date(Date.UTC(F,y,m,B,v,D,$)):(S=new Date(F,y,m,B,v,D,$),g&&(S=r(S).week(g).toDate()),S)}catch(e){return new Date("")}}(t,l,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var ln=g(on.exports),sn={exports:{}};sn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var o=n(e),i=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(i,r):!this.isAfter(i,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(i,r):!this.isBefore(i,r))}};var un=g(sn.exports),cn={exports:{}};cn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var dn=g(cn.exports),fn={exports:{}};fn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var hn,gn,pn,mn=g(fn.exports),Fn={exports:{}},yn=g(Fn.exports=(hn={year:0,month:1,day:2,hour:3,minute:4,second:5},gn={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=gn[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),gn[r]=a),a}(t,n);return a.formatToParts(r)},o=function(e,t){for(var r=a(e,t),o=[],i=0;i<r.length;i+=1){var l=r[i],s=l.type,u=l.value,c=hn[s];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},i=t.prototype;i.tz=function(e,t){void 0===e&&(e=r);var a,o=this.utcOffset(),i=this.toDate(),l=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(l))/1e3/60),u=15*-Math.round(i.getTimezoneOffset()/15)-s;if(Number(u)){if(a=n(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(u,!0),t){var c=a.utcOffset();a=a.add(o-c,"minute")}}else a=this.utcOffset(0,t);return a.$x.$timezone=e,a},i.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=i.startOf;i.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var i=a&&t,l=a||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var u=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(n.utc(e,i).valueOf(),s,l),c=u[0],d=u[1],f=n(c).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));an.extend(un),an.extend(mn),an.extend(dn),an.extend(ln),an.extend(yn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=an(t).startOf("week");return Sn(n).map((e=>Bn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Bn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(an(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+an(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=an(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const o=e.isWithinRange(t,r?an(r):void 0,a?an(a):void 0),i=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!i}}(pn||(pn={}));const Sn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Bn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},vn=[1,3,5,7,8,10,12],Dn=[4,6,9,11];var $n,bn,xn,wn;function Hn({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,a=t(r),o=r.substring(0,n.selectionEnd),i=t(o),l=o.length-i.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:a,updateCaretPosition:()=>{n.value=a,n.setSelectionRange(s,s)}}}}!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),o=parseInt(n),i=parseInt(r);return 0==a?"1":vn.includes(o)?Math.min(a,31).toString():Dn.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=an(e,n);return an(t,n).diff(r,"minute")},e.toDayjs=e=>e?an(e):an(),e.addMinutesToTime=(e,t,n="HH:mm")=>an(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>an(e).isSame(an(t),n)}($n||($n={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!an(e).isBefore(r,"day"))||!(!a||!an(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(an(e).isValid())return e}return""}}(bn||(bn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(xn||(xn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/a));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const o=Math.floor(.6*a),i=Math.floor(.2*a);return`${e.substring(0,o)}...${e.substring(e.length-i)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:o="•",maskRegex:i,maskTransformer:l}=n;if(l)return l(e);if(i)return e.replace(i,o);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(wn||(wn={}));const On=s.input`
    ${Pt("Body","regular")}
    color: ${Ot.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ot.Neutral[3]};
    }

    ${e=>"number"===e.type?u`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?u`
                cursor: not-allowed;
            `:void 0}
`,En=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,kn=s(d)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Cn=s.div`
    display: flex;
    width: 100%;
`,An=r.forwardRef(((r,i)=>{var{value:l,spacing:s,type:u,error:c,disabled:d,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:F,styleType:y="bordered"}=r,S=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const B=a();o(i,(()=>B.current),[]);const v=Hn({ref:B,formatter:e=>wn.transformWithSpaces(e,s)}),D=e=>{g&&(b()?x(e):g(e))},$=()=>{p&&p(),B&&B.current&&B.current.focus()},b=()=>"tel"===u&&s,x=e=>{const{nextValue:t,updateCaretPosition:n}=v(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=l?(e=>e?b()?wn.transformWithSpaces(e,s):e:"")(l):l,H=()=>e(n,{children:[t(On,Object.assign({"data-testid":"input",ref:B,disabled:d,value:w,onChange:D,type:u,readOnly:h},S)),m&&!d&&!h&&!!l&&t(En,Object.assign({onClick:$,type:"button"},{children:t(kn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(Cn,Object.assign({className:F},{children:H()})):t(nn,Object.assign({$disabled:d,$error:c,$readOnly:h,className:F},{children:H()}))})}));s.div`
    display: flex;
    position: relative;
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ot.Accent.Light[1]};
        box-shadow: ${Ct};
    }

    ${e=>e.$readOnly?u`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?u`
                background: ${Ot.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ot.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?u`
                border: 1px solid ${Ot.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ot.Validation.Red.Border(e)};
                    box-shadow: ${At};
                }
            `:void 0}
`,s(An)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;const Mn=s.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Pt("Body","regular")}
    color: ${Ot.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ot.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return u`
                color: ${Ot.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ot.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?u`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:u`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`,zn=s(Mn)`
    margin-right: 0.25rem;
`,_n=s(An)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,Wn=s(_n)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,Tn=s(Jt.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return u`
                color: ${Ot.Neutral[3]};
            `}}
`,Vn=s.div`
    display: flex;
`,Yn=s(Jt.Body)`
    ${e=>{if(e.$inactive)return u`
                color: ${Ot.Neutral[3]};
            `}}
`,Ln=r=>{var{disabled:o,error:s,value:u,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:g,readOnly:p,placeholder:m="00-8888",autoComplete:F}=r,y=f(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[S,B]=i(""),[v,D]=i(""),[$,b]=i("none"),x=a(null),w=a(null),H=a(null),O=a(S),E=a(v),k=a($),C=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),A=Hn({ref:w,formatter:C}),M=Hn({ref:H,formatter:C}),z=e=>{O.current=e,B(e)},_=e=>{E.current=e,D(e)},W=e=>{k.current=e,b(e)};l((()=>{"floor"===$&&3===S.length&&H.current&&H.current.focus()}),[S]),l((()=>{R(u)}),[u]);const T=e=>{W(e.target.name),e.target.select()},V=e=>{const t=e.target.name,n=e.target.value,r=I(n);"floor"===t?(z(r),r!==S&&N(r,t)):(_(r),r!==v&&N(r,t))},Y=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=A();n(),z(e),N(e,t)}else{const{nextValue:e,updateCaretPosition:n}=M();n(),_(e),N(e,t)}},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||w.current&&"unit"===$&&0===v.length&&w.current.focus()},I=e=>/^[0-9]$/.test(e)?wn.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==In)if(void 0===e||0===e.length)z(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];z("floor"===$?e:I(e)),_("unit"===$?n:I(n))}}},N=(e,t)=>{if(!c&&!h)return;const n={floor:O.current,unit:E.current};if(n[t]=e,c){const e=j(n);c(e)}h&&h([n.floor,n.unit])},P=()=>{if(!d&&!g)return;const e={floor:I(O.current),unit:I(E.current)};if(d){const t=j(e);d(t)}g&&g([e.floor,e.unit])},j=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":In},J=e=>e.split("-");return e(nn,Object.assign({},y,{ref:x,onClick:()=>{"none"===$&&w.current&&w.current.focus()},$disabled:o,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==k.current&&(W("none"),P())}},{children:[t(zn,Object.assign({"data-testid":"addon",disabled:o,$readOnly:p},{children:"#"})),p&&u?(()=>{const n=u.split("-");return e(Vn,{children:[t(Yn,{children:n[0]}),t(Tn,{children:"-"}),t(Yn,{children:n[1]})]})})():e(n,{children:[t(_n,{name:"floor",maxLength:3,value:S,ref:w,onFocus:T,onBlur:V,onChange:Y,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?J(m)[0]:"",autoComplete:F}),t(Tn,Object.assign({$inactive:0===S.length},{children:"-"})),t(Wn,{name:"unit",maxLength:5,value:v,ref:H,onFocus:T,onBlur:V,onChange:Y,onKeyDown:L,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?J(m)[1]:"",autoComplete:F})]})]}))},In="Invalid unit number";export{Ln as UnitNumberInput};
//# sourceMappingURL=index.js.map
