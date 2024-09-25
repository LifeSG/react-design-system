import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as l,useState as s,isValidElement as c,createRef as u,cloneElement as d,PureComponent as f,useCallback as h,useMemo as p,useImperativeHandle as g}from"react";import{ChevronDownIcon as m}from"@lifesg/react-icons/chevron-down";import y,{css as v,keyframes as b}from"styled-components";import{ExternalIcon as w}from"@lifesg/react-icons/external";import*as D from"react-dom";import{createPortal as S,findDOMNode as x}from"react-dom";import{ChevronLeftIcon as $}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k=Array.isArray,A="object"==typeof E&&E&&E.Object===Object&&E,R="object"==typeof self&&self&&self.Object===Object&&self,H=A||R||Function("return this")(),M=H.Symbol,C=M,L=Object.prototype,T=L.hasOwnProperty,z=L.toString,N=C?C.toStringTag:void 0;var P=function(e){var t=T.call(e,N),n=e[N];try{e[N]=void 0;var r=!0}catch(e){}var o=z.call(e);return r&&(t?e[N]=n:delete e[N]),o},j=Object.prototype.toString;var I=P,W=function(e){return j.call(e)},Y=M?M.toStringTag:void 0;var _=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Y&&Y in Object(e)?I(e):W(e)};var V=_,U=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==V(e)},Z=k,X=J,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/;var G=function(e,t){if(Z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!X(e))||(q.test(e)||!K.test(e)||null!=t&&e in Object(t))};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ee=_,te=Q;var ne,re=function(e){if(!te(e))return!1;var t=ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},oe=H["__core-js_shared__"],ie=(ne=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||""))?"Symbol(src)_1."+ne:"";var ae=function(e){return!!ie&&ie in e},le=Function.prototype.toString;var se=re,ce=ae,ue=Q,de=function(e){if(null!=e){try{return le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},fe=/^\[object .+?Constructor\]$/,he=Function.prototype,pe=Object.prototype,ge=he.toString,me=pe.hasOwnProperty,ye=RegExp("^"+ge.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ve=function(e){return!(!ue(e)||ce(e))&&(se(e)?ye:fe).test(de(e))},be=function(e,t){return null==e?void 0:e[t]};var we=function(e,t){var n=be(e,t);return ve(n)?n:void 0},De=we(Object,"create"),Se=De;var xe=function(){this.__data__=Se?Se(null):{},this.size=0};var $e=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fe=De,Be=Object.prototype.hasOwnProperty;var Ee=function(e){var t=this.__data__;if(Fe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},Oe=De,ke=Object.prototype.hasOwnProperty;var Ae=De;var Re=xe,He=$e,Me=Ee,Ce=function(e){var t=this.__data__;return Oe?void 0!==t[e]:ke.call(t,e)},Le=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ae&&void 0===t?"__lodash_hash_undefined__":t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Re,Te.prototype.delete=He,Te.prototype.get=Me,Te.prototype.has=Ce,Te.prototype.set=Le;var ze=Te;var Ne=function(){this.__data__=[],this.size=0};var Pe=function(e,t){return e===t||e!=e&&t!=t};var je=function(e,t){for(var n=e.length;n--;)if(Pe(e[n][0],t))return n;return-1},Ie=je,We=Array.prototype.splice;var Ye=function(e){var t=this.__data__,n=Ie(t,e);return!(n<0)&&(n==t.length-1?t.pop():We.call(t,n,1),--this.size,!0)},_e=je;var Ve=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Ue=je;var Je=je;var Ze=function(e,t){var n=this.__data__,r=Je(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Xe=Ne,Ke=Ye,qe=Ve,Ge=function(e){return Ue(this.__data__,e)>-1},Qe=Ze;function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Xe,et.prototype.delete=Ke,et.prototype.get=qe,et.prototype.has=Ge,et.prototype.set=Qe;var tt=et,nt=we(H,"Map"),rt=ze,ot=tt,it=nt;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return at(t)?n["string"==typeof t?"string":"hash"]:n.map},st=lt;var ct=lt;var ut=lt;var dt=lt;var ft=function(e,t){var n=dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},ht=function(){this.size=0,this.__data__={hash:new rt,map:new(it||ot),string:new rt}},pt=function(e){var t=st(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ct(this,e).get(e)},mt=function(e){return ut(this,e).has(e)},yt=ft;function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ht,vt.prototype.delete=pt,vt.prototype.get=gt,vt.prototype.has=mt,vt.prototype.set=yt;var bt=vt;function wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(wt.Cache||bt),n}wt.Cache=bt;var Dt=wt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,$t=function(e){var t=Dt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,o){t.push(r?o.replace(xt,"$1"):n||e)})),t}));var Ft=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Bt=Ft,Et=k,Ot=J,kt=M?M.prototype:void 0,At=kt?kt.toString:void 0;var Rt=function e(t){if("string"==typeof t)return t;if(Et(t))return Bt(t,e)+"";if(Ot(t))return At?At.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Ht=Rt;var Mt=k,Ct=G,Lt=$t,Tt=function(e){return null==e?"":Ht(e)};var zt=J;var Nt=function(e,t){return Mt(e)?e:Ct(e,t)?[e]:Lt(Tt(e))},Pt=function(e){if("string"==typeof e||zt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var jt=function(e,t){for(var n=0,r=(t=Nt(t,e)).length;null!=e&&n<r;)e=e[Pt(t[n++])];return n&&n==r?e:void 0},It=jt;var Wt=O((function(e,t,n){var r=null==e?void 0:It(e,t);return void 0===r?n:r}));const Yt=(e,t,n)=>t?Wt(n,t)||Wt(e,t):n||e,_t=(e,t)=>{const n=t||e.defaultValue;return Wt(e.collections,n)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Ut={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jt=e=>t=>{const n=t.theme,r=_t(Ut,n[Vt.colorScheme]);return n.options&&n.options.color?Yt(r,e,n.options.color):Yt(r,e)},Zt={Brand:{1:Jt("Brand.1"),2:Jt("Brand.2"),3:Jt("Brand.3"),4:Jt("Brand.4"),5:Jt("Brand.5"),6:Jt("Brand.6")},Primary:Jt("Primary"),PrimaryDark:Jt("PrimaryDark"),Secondary:Jt("Secondary"),Accent:{Light:{1:Jt("Accent.Light.1"),2:Jt("Accent.Light.2"),3:Jt("Accent.Light.3"),4:Jt("Accent.Light.4"),5:Jt("Accent.Light.5"),6:Jt("Accent.Light.6")},Dark:{1:Jt("Accent.Dark.1"),2:Jt("Accent.Dark.2"),3:Jt("Accent.Dark.3")}},Neutral:{1:Jt("Neutral.1"),2:Jt("Neutral.2"),3:Jt("Neutral.3"),4:Jt("Neutral.4"),5:Jt("Neutral.5"),6:Jt("Neutral.6"),7:Jt("Neutral.7"),8:Jt("Neutral.8")},Validation:{Green:{Text:Jt("Validation.Green.Text"),Icon:Jt("Validation.Green.Icon"),Border:Jt("Validation.Green.Border"),Background:Jt("Validation.Green.Background")},Orange:{Text:Jt("Validation.Orange.Text"),Icon:Jt("Validation.Orange.Icon"),Border:Jt("Validation.Orange.Border"),Background:Jt("Validation.Orange.Background"),Badge:Jt("Validation.Orange.Badge")},Red:{Text:Jt("Validation.Red.Text"),Icon:Jt("Validation.Red.Icon"),Border:Jt("Validation.Red.Border"),Background:Jt("Validation.Red.Background")},Blue:{Text:Jt("Validation.Blue.Text"),Icon:Jt("Validation.Blue.Icon"),Border:Jt("Validation.Blue.Border"),Background:Jt("Validation.Blue.Background")}},Shadow:{Accent:Jt("Shadow.Accent"),Red:Jt("Shadow.Red"),Elevation:Jt("Shadow.Elevation")}},Xt={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${Zt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${Zt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Zt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${Zt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${Zt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Zt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Kt=e=>t=>{var n;const r=t.theme,o=_t(Xt,r[Vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Yt(o,e,r.options.designToken):Yt(o,e)},qt={InputBoxShadow:Kt("InputBoxShadow"),InputErrorBoxShadow:Kt("InputErrorBoxShadow"),ElevationBoxShadow:Kt("ElevationBoxShadow"),Table:{Header:Kt("Table.Header"),Cell:{Primary:Kt("Table.Cell.Primary"),Secondary:Kt("Table.Cell.Secondary"),Selected:Kt("Table.Cell.Selected"),Hover:Kt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Kt("Button.Danger.BackgroundColor"),Hover:Kt("Button.Danger.Hover"),Primary:Kt("Button.Danger.Primary"),Border:Kt("Button.Danger.Border")}}},Gt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Qt={D1:{fontFamily:Gt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},en={D1:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Gt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Gt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Gt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},tn={collections:{base:Qt,oneservice:{D1:{fontFamily:Gt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Gt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Gt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Gt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Gt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Gt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Gt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Gt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Gt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Gt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Gt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Gt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:en},defaultValue:"base"},nn=e=>t=>{const n=t.theme,r=_t(tn,n[Vt.textStyleScheme]);return n.options&&n.options.textStyle?Yt(r,e,n.options.textStyle):Yt(r,e)},rn={D1:{fontFamily:nn("D1.fontFamily"),fontSize:nn("D1.fontSize"),fontWeight:nn("D1.fontWeight"),lineHeight:nn("D1.lineHeight"),letterSpacing:nn("D1.letterSpacing")},D2:{fontFamily:nn("D2.fontFamily"),fontSize:nn("D2.fontSize"),fontWeight:nn("D2.fontWeight"),lineHeight:nn("D2.lineHeight"),letterSpacing:nn("D2.letterSpacing")},D3:{fontFamily:nn("D3.fontFamily"),fontSize:nn("D3.fontSize"),fontWeight:nn("D3.fontWeight"),lineHeight:nn("D3.lineHeight"),letterSpacing:nn("D3.letterSpacing")},D4:{fontFamily:nn("D4.fontFamily"),fontSize:nn("D4.fontSize"),fontWeight:nn("D4.fontWeight"),lineHeight:nn("D4.lineHeight"),letterSpacing:nn("D4.letterSpacing")},DBody:{fontFamily:nn("DBody.fontFamily"),fontSize:nn("DBody.fontSize"),fontWeight:nn("DBody.fontWeight"),lineHeight:nn("DBody.lineHeight"),letterSpacing:nn("DBody.letterSpacing")},H1:{fontFamily:nn("H1.fontFamily"),fontSize:nn("H1.fontSize"),fontWeight:nn("H1.fontWeight"),lineHeight:nn("H1.lineHeight"),letterSpacing:nn("H1.letterSpacing")},H2:{fontFamily:nn("H2.fontFamily"),fontSize:nn("H2.fontSize"),fontWeight:nn("H2.fontWeight"),lineHeight:nn("H2.lineHeight"),letterSpacing:nn("H2.letterSpacing")},H3:{fontFamily:nn("H3.fontFamily"),fontSize:nn("H3.fontSize"),fontWeight:nn("H3.fontWeight"),lineHeight:nn("H3.lineHeight"),letterSpacing:nn("H3.letterSpacing")},H4:{fontFamily:nn("H4.fontFamily"),fontSize:nn("H4.fontSize"),fontWeight:nn("H4.fontWeight"),lineHeight:nn("H4.lineHeight"),letterSpacing:nn("H4.letterSpacing")},H5:{fontFamily:nn("H5.fontFamily"),fontSize:nn("H5.fontSize"),fontWeight:nn("H5.fontWeight"),lineHeight:nn("H5.lineHeight"),letterSpacing:nn("H5.letterSpacing")},H6:{fontFamily:nn("H6.fontFamily"),fontSize:nn("H6.fontSize"),fontWeight:nn("H6.fontWeight"),lineHeight:nn("H6.lineHeight"),letterSpacing:nn("H6.letterSpacing")},Body:{fontFamily:nn("Body.fontFamily"),fontSize:nn("Body.fontSize"),fontWeight:nn("Body.fontWeight"),lineHeight:nn("Body.lineHeight"),letterSpacing:nn("Body.letterSpacing")},BodySmall:{fontFamily:nn("BodySmall.fontFamily"),fontSize:nn("BodySmall.fontSize"),fontWeight:nn("BodySmall.fontWeight"),lineHeight:nn("BodySmall.lineHeight"),letterSpacing:nn("BodySmall.letterSpacing")},XSmall:{fontFamily:nn("XSmall.fontFamily"),fontSize:nn("XSmall.fontSize"),fontWeight:nn("XSmall.fontWeight"),lineHeight:nn("XSmall.lineHeight"),letterSpacing:nn("XSmall.letterSpacing")}},on=[Gt.OpenSans,Gt.PlusJakartaSans],an=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},ln=(e,t)=>n=>{var r;const o=rn[e].fontFamily(n),i=rn[e].fontWeight(n),a=on.find((e=>Object.values(e).includes(o)));return a?v`
                font-family: ${an(a,t)||an(a,i)||o};
                font-weight: normal !important;
            `:v`
            font-family: ${o};
            font-weight: ${null!==(r=sn(t)||i)&&void 0!==r?r:"normal"};
        `},sn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},cn=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},un=(e,t,n=!1)=>r=>{const o=rn[e],i=o.fontSize(r);return v`
            ${ln(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},dn=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${cn(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${cn(n)}
        `;var fn;!function(e){e.D1=y.h1`
        ${e=>v`
                ${un("D1",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${un("D2",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${un("D3",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${un("D4",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${un("DBody",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${un("H1",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${un("H2",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${un("H3",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${un("H4",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${un("H5",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${un("H6",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${un("Body",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${un("BodySmall",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${un("XSmall",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>gn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>gn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(fn||(fn={}));const hn=y.a`
    ${e=>v`
            ${un(e.textStyle,e.weight)}
            color: ${Zt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Zt.Secondary};

                svg {
                    color: ${Zt.Secondary};
                }
            }
        `}
`,pn=y(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,gn=n=>{var{external:r=!1,children:o}=n,i=B(n,["external","children"]);return e(hn,Object.assign({},i,{children:[o,r&&t(pn,{})]}))};var mn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(mn||(mn={}));const yn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",vn=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const t=vn(e.$variant);return v`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const bn=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>vn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Zt.Accent.Light[3]};
    }
`,wn=y.button`
    ${bn}
    cursor: pointer;
`;y.div`
    ${bn}
`;const Dn=b`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`;y.div`
    position: relative;
    border: 1px solid ${Zt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Zt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Zt.Accent.Light[1]};
        box-shadow: ${qt.InputBoxShadow};
    }

    ${e=>e.expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${Dn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?v`
                background: ${Zt.Neutral[6](e)};

                ${wn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Zt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${wn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?v`
                border: 1px solid ${Zt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Zt.Validation.Red.Border(e)};
                    box-shadow: ${qt.InputErrorBoxShadow};
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${yn};
    margin-left: 1rem;
`,y(m)`
    color: ${Zt.Neutral[3]};
    ${e=>{let t=rn.Body.fontSize;return"small"===e.$variant&&(t=rn.BodySmall.fontSize),v`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,y.div`
    height: 1px;
    background: ${Zt.Neutral[5]};
    margin: 0 0.5rem;
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const Sn=y.div`
    ${e=>un("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return v`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;function xn(e){return Bn(e)?(e.nodeName||"").toLowerCase():"#document"}function $n(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Fn(e){var t;return null==(t=(Bn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Bn(e){return e instanceof Node||e instanceof $n(e).Node}function En(e){return e instanceof Element||e instanceof $n(e).Element}function On(e){return e instanceof HTMLElement||e instanceof $n(e).HTMLElement}function kn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof $n(e).ShadowRoot)}function An(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Ln(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Rn(e){return["table","td","th"].includes(xn(e))}function Hn(e){const t=Mn(),n=Ln(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Mn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Cn(e){return["html","body","#document"].includes(xn(e))}function Ln(e){return $n(e).getComputedStyle(e)}function Tn(e){return En(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function zn(e){if("html"===xn(e))return e;const t=e.assignedSlot||e.parentNode||kn(e)&&e.host||Fn(e);return kn(t)?t.host:t}function Nn(e){const t=zn(e);return Cn(t)?e.ownerDocument?e.ownerDocument.body:e.body:On(t)&&An(t)?t:Nn(t)}function Pn(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=Nn(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=$n(o);return i?t.concat(a,a.visualViewport||[],An(o)?o:[],a.frameElement&&n?Pn(a.frameElement):[]):t.concat(o,Pn(o,[],n))}function jn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function In(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&kn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Wn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function Yn(e){return!Wn().includes("jsdom/")&&(!_n()&&0===e.width&&0===e.height||_n()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function _n(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(Wn())}function Vn(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Un(e){return(null==e?void 0:e.ownerDocument)||document}function Jn(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function Zn(e){return"composedPath"in e?e.composedPath()[0]:e.target}y(Sn)`
    color: ${Zt.Neutral[3]};
`;const Xn="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Kn(e){return On(e)&&e.matches(Xn)}function qn(e){e.preventDefault(),e.stopPropagation()}const Gn=Math.min,Qn=Math.max,er=Math.round,tr=Math.floor,nr=e=>({x:e,y:e}),rr={left:"right",right:"left",bottom:"top",top:"bottom"},or={start:"end",end:"start"};function ir(e,t,n){return Qn(e,Gn(t,n))}function ar(e,t){return"function"==typeof e?e(t):e}function lr(e){return e.split("-")[0]}function sr(e){return e.split("-")[1]}function cr(e){return"x"===e?"y":"x"}function ur(e){return"y"===e?"height":"width"}function dr(e){return["top","bottom"].includes(lr(e))?"y":"x"}function fr(e){return cr(dr(e))}function hr(e){return e.replace(/start|end/g,(e=>or[e]))}function pr(e){return e.replace(/left|right|bottom|top/g,(e=>rr[e]))}function gr(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function mr(e,t,n){let{reference:r,floating:o}=e;const i=dr(t),a=fr(t),l=ur(a),s=lr(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(s){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(sr(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function yr(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=ar(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=gr(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),y="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=gr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:s}):y);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function vr(e){const t=Ln(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=On(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=er(n)!==i||er(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function br(e){return En(e)?e:e.contextElement}function wr(e){const t=br(e);if(!On(t))return nr(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=vr(t);let a=(i?er(n.width):n.width)/r,l=(i?er(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Dr=nr(0);function Sr(e){const t=$n(e);return Mn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Dr}function xr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=br(e);let a=nr(1);t&&(r?En(r)&&(a=wr(r)):a=wr(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==$n(e))&&t}(i,n,r)?Sr(i):nr(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=$n(i),t=r&&En(r)?$n(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=wr(o),t=o.getBoundingClientRect(),r=Ln(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=i,c+=a,n=$n(o),o=n.frameElement}}return gr({width:u,height:d,x:s,y:c})}const $r=[":popover-open",":modal"];function Fr(e){return $r.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Br(e){return xr(Fn(e)).left+Tn(e).scrollLeft}function Er(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=$n(e),r=Fn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=Mn();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=Fn(e),n=Tn(e),r=e.ownerDocument.body,o=Qn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Qn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Br(e);const l=-n.scrollTop;return"rtl"===Ln(r).direction&&(a+=Qn(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(Fn(e));else if(En(t))r=function(e,t){const n=xr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=On(e)?wr(e):nr(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Sr(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return gr(r)}function Or(e,t){const n=zn(e);return!(n===t||!En(n)||Cn(n))&&("fixed"===Ln(n).position||Or(n,t))}function kr(e,t,n){const r=On(t),o=Fn(t),i="fixed"===n,a=xr(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=nr(0);if(r||!r&&!i)if(("body"!==xn(t)||An(o))&&(l=Tn(t)),r){const e=xr(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=Br(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function Ar(e){return"static"===Ln(e).position}function Rr(e,t){return On(e)&&"fixed"!==Ln(e).position?t?t(e):e.offsetParent:null}function Hr(e,t){const n=$n(e);if(Fr(e))return n;if(!On(e)){let t=zn(e);for(;t&&!Cn(t);){if(En(t)&&!Ar(t))return t;t=zn(t)}return n}let r=Rr(e,t);for(;r&&Rn(r)&&Ar(r);)r=Rr(r,t);return r&&Cn(r)&&Ar(r)&&!Hn(r)?n:r||function(e){let t=zn(e);for(;On(t)&&!Cn(t);){if(Hn(t))return t;t=zn(t)}return null}(e)||n}const Mr={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Fn(r),l=!!t&&Fr(t.floating);if(r===a||l&&i)return n;let s={scrollLeft:0,scrollTop:0},c=nr(1);const u=nr(0),d=On(r);if((d||!d&&!i)&&(("body"!==xn(r)||An(a))&&(s=Tn(r)),On(r))){const e=xr(r);c=wr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:Fn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Fr(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Pn(e,[],!1).filter((e=>En(e)&&"body"!==xn(e))),o=null;const i="fixed"===Ln(e).position;let a=i?zn(e):e;for(;En(a)&&!Cn(a);){const t=Ln(a),n=Hn(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||An(a)&&!n&&Or(e,a))?r=r.filter((e=>e!==a)):o=t,a=zn(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=Er(t,n,o);return e.top=Qn(r.top,e.top),e.right=Gn(r.right,e.right),e.bottom=Gn(r.bottom,e.bottom),e.left=Qn(r.left,e.left),e}),Er(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Hr,getElementRects:async function(e){const t=this.getOffsetParent||Hr,n=this.getDimensions,r=await n(e.floating);return{reference:kr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=vr(e);return{width:t,height:n}},getScale:wr,isElement:En,isRTL:function(e){return"rtl"===Ln(e).direction}};function Cr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=br(e),u=o||i?[...c?Pn(c):[],...Pn(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&l?function(e,t){let n,r=null;const o=Fn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-tr(u)+"px "+-tr(o.clientWidth-(c+d))+"px "+-tr(o.clientHeight-(u+f))+"px "+-tr(c)+"px",threshold:Qn(0,Gn(1,s))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!s&&p.observe(c),p.observe(t));let g=s?xr(e):null;return s&&function t(){const r=xr(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,s&&cancelAnimationFrame(f)}}const Lr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=lr(n),l=sr(n),s="y"===dr(n),c=["left","top"].includes(a)?-1:1,u=i&&s?-1:1,d=ar(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),s?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}},Tr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=ar(e,t),c={x:n,y:r},u=await yr(t,s),d=dr(lr(o)),f=cr(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=ir(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=ir(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},zr=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=ar(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=lr(o),v=lr(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),w=f||(v||!g?[pr(l)]:function(e){const t=pr(e);return[hr(e),t,hr(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=sr(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(lr(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(hr)))),i}(l,g,p,b));const D=[l,...w],S=await yr(t,m),x=[];let $=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&x.push(S[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=sr(e),o=fr(e),i=ur(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=pr(a)),[a,pr(a)]}(o,a,b);x.push(S[e[0]],S[e[1]])}if($=[...$,{placement:o,overflows:x}],!x.every((e=>e<=0))){var F,B;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:$},reset:{placement:t}};let n=null==(B=$.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=$.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},Nr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=ar(e,t),s=await yr(t,l),c=lr(n),u=sr(n),d="y"===dr(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===u?"top":"bottom");const m=h-s.top-s.bottom,y=f-s.left-s.right,v=Gn(h-s[p],m),b=Gn(f-s[g],y),w=!t.middlewareData.shift;let D=v,S=b;if(d?S=u||w?Gn(b,y):y:D=u||w?Gn(v,m):m,w&&!u){const e=Qn(s.left,0),t=Qn(s.right,0),n=Qn(s.top,0),r=Qn(s.bottom,0);d?S=f-2*(0!==e||0!==t?e+t:Qn(s.left,s.right)):D=h-2*(0!==n||0!==r?n+r:Qn(s.top,s.bottom))}await a({...t,availableWidth:S,availableHeight:D});const x=await o.getDimensions(i.floating);return f!==x.width||h!==x.height?{reset:{rects:!0}}:{}}}},Pr=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=ar(e,t),u={x:n,y:r},d=dr(o),f=cr(d);let h=u[f],p=u[d];const g=ar(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(lr(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},jr=(e,t,n)=>{const r=new Map,o={platform:Mr,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=mr(c,r,s),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:y,data:v,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=y?y:d,h={...h,[i]:{...h[i],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=mr(c,f,s))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var Ir="undefined"!=typeof document?i:a;function Wr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Wr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Wr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Yr(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function _r(e,t){const n=Yr(e);return Math.round(t*n)/n}function Vr(e){const t=r.useRef(e);return Ir((()=>{t.current=e})),t}const Ur=(e,t)=>({...Tr(e),options:[e,t]}),Jr=(e,t)=>({...Pr(e),options:[e,t]}),Zr=(e,t)=>({...zr(e),options:[e,t]}),Xr=(e,t)=>({...Nr(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var Kr=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),qr="undefined"==typeof Element,Gr=qr?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Qr=!qr&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},eo=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},to=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!eo(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{Gr.call(a,Kr)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!eo(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},no=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},ro=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!no(e)?0:e.tabIndex},oo=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},io=function(e){return"INPUT"===e.tagName},ao=function(e){return function(e){return io(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Qr(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},lo=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},so=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Gr.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Gr.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return lo(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=Qr(e);if(a&&!a.shadowRoot&&!0===r(a))return lo(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&Qr(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,u;l=!(null===(c=a=null===(s=i=Qr(a))||void 0===s?void 0:s.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},co=function(e,t){return!(t.disabled||eo(t)||function(e){return io(e)&&"hidden"===e.type}(t)||so(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Gr.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},uo=function(e,t){return!(ao(t)||ro(t)<0||!co(e,t))},fo=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},ho=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=ro(e);return n<0&&t&&!no(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(oo).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},po=function(e,t){var n;return n=(t=t||{}).getShadowRoot?to([e],t.includeContainer,{filter:uo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:fo}):function(e,t,n){if(eo(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Kr));return t&&Gr.call(e,Kr)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,uo.bind(null,t)),ho(n)},go=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==Gr.call(e,Kr)&&uo(t,e)};const mo={...r},yo=mo.useInsertionEffect||(e=>e());function vo(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return yo((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let bo=0;function wo(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(bo);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():bo=requestAnimationFrame(i)}var Do="undefined"!=typeof document?i:a;function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}let xo=!1,$o=0;const Fo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+$o++;const Bo=mo.useId||function(){const[e,t]=r.useState((()=>xo?Fo():void 0));return Do((()=>{null==e&&t(Fo())}),[]),r.useEffect((()=>{xo=!0}),[]),e};let Eo;"production"!==process.env.NODE_ENV&&(Eo=new Set);const Oo=r.createContext(null),ko=r.createContext(null),Ao=()=>{var e;return(null==(e=r.useContext(Oo))?void 0:e.id)||null},Ro=()=>r.useContext(ko);function Ho(e){return"data-floating-ui-"+e}function Mo(e){const t=l(e);return Do((()=>{t.current=e})),t}function Co(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Lo=new WeakMap,To=new WeakSet,zo={},No=0;const Po=e=>e&&(e.host||Po(e.parentNode)),jo=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=Po(t);return e.contains(n)?n:null})).filter((e=>null!=e));function Io(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=Un(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=jo(t,e),l=new Set,s=new Set(a),c=[];zo[o]||(zo[o]=new WeakMap);const u=zo[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==xn(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Lo.get(t)||0)+1,a=(u.get(t)||0)+1;Lo.set(t,r),u.set(t,a),c.push(t),1===r&&n&&To.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),No++,()=>{c.forEach((e=>{const t=(Lo.get(e)||0)-1,n=(u.get(e)||0)-1;Lo.set(e,t),u.set(e,n),t||(!To.has(e)&&i&&e.removeAttribute(i),To.delete(e)),n||e.removeAttribute(o)})),No--,No||(Lo=new WeakMap,Lo=new WeakMap,To=new WeakSet,zo={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Wo=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Yo(e,t){const n=po(e,Wo());"prev"===t&&n.reverse();const r=n.indexOf(jn(Un(e)));return n.slice(r+1)[0]}function _o(){return Yo(document.body,"next")}function Vo(){return Yo(document.body,"prev")}function Uo(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!In(n,r)}function Jo(e){po(e,Wo()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Zo(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Xo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Ko(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const qo=r.forwardRef((function(e,t){const[n,o]=r.useState();Do((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",Ko),()=>{document.removeEventListener("keydown",Ko)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Ho("focus-guard")]:"",style:Xo};return r.createElement("span",So({},e,i))})),Go=r.createContext(null),Qo=Ho("portal");function ei(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Bo(),i=ti(),[a,l]=r.useState(null),s=r.useRef(null);return Do((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{s.current=null}))}),[a]),Do((()=>{if(!o)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(Qo,""),e.appendChild(n),s.current=n,l(n)}),[t,o]),Do((()=>{if(!o)return;if(s.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!En(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(Qo,""),e=r||e,e.appendChild(a),s.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,s]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&Uo(e)){("focusin"===e.type?Zo:Jo)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(Go.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:s})),[i,a])},h&&a&&r.createElement(qo,{"data-type":"outside",ref:c,onFocus:e=>{if(Uo(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=Vo()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:Xo}),a&&S(t,a),h&&a&&r.createElement(qo,{"data-type":"outside",ref:u,onFocus:e=>{if(Uo(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=_o()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const ti=()=>r.useContext(Go),ni=20;let ri=[];function oi(e){ri=ri.filter((e=>e.isConnected));let t=e;if(t&&"body"!==xn(t)){if(!go(t,Wo())){const e=po(t,Wo())[0];e&&(t=e)}ri.push(t),ri.length>ni&&(ri=ri.slice(-ni))}}function ii(){return ri.slice().reverse().find((e=>e.isConnected))}const ai=r.forwardRef((function(e,t){return r.createElement("button",So({},e,{type:"button",ref:t,tabIndex:-1,style:Xo}))}));function li(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:s=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:y,elements:{domReference:v,floating:b}}=t,w="number"==typeof l&&l<0,D=!!(S=v)&&"combobox"===S.getAttribute("role")&&Kn(S)&&w;var S;const x="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,$=Mo(i),F=Mo(l),B=Mo(s),E=Ro(),O=ti(),k=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),H=r.useRef(!1),M=null!=O,C=r.useCallback((function(e){return void 0===e&&(e=b),e?po(e,Wo()):[]}),[b]),L=r.useCallback((e=>{const t=C(e);return $.current.map((e=>v&&"reference"===e?v:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[v,b,$,C]);function T(e){return!o&&u&&c?r.createElement(ai,{ref:"start"===e?k:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){In(b,jn(Un(b)))&&0===C().length&&!D&&qn(e);const t=L(),n=Zn(e);"reference"===$.current[0]&&n===v&&(qn(e),e.shiftKey?wo(t[t.length-1]):wo(t[1])),"floating"===$.current[1]&&n===b&&e.shiftKey&&(qn(e),wo(t[0]))}}const t=Un(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,v,b,c,$,D,C,L]),r.useEffect((()=>{if(!o&&d)return b&&On(v)?(v.addEventListener("focusout",t),v.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{v.removeEventListener("focusout",t),v.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){H.current=!0,setTimeout((()=>{H.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(In(v,t)||In(b,t)||In(t,b)||In(null==O?void 0:O.portalNode,t)||null!=t&&t.hasAttribute(Ho("focus-guard"))||E&&(Co(E.nodesRef.current,p).find((e=>{var n,r;return In(null==(n=e.context)?void 0:n.elements.floating,t)||In(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!H.current&&t!==ii()&&(R.current=!0,g(!1,e))}))}}),[o,v,b,c,p,E,O,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==O||null==(e=O.portalNode)?void 0:e.querySelectorAll("["+Ho("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,A.current,$.current.includes("reference")||D?v:null].filter((e=>null!=e)),n=c||D?Io(e,x,!x):Io(e);return()=>{n()}}}),[o,v,b,c,$,O,D,x]),Do((()=>{if(o||!b)return;const e=jn(Un(b));queueMicrotask((()=>{const t=L(b),n=F.current,r=("number"==typeof n?t[n]:n.current)||b,o=In(b,e);w||o||!f||wo(r,{preventScroll:r===b})}))}),[o,f,b,w,L,F]),Do((()=>{if(o||!b)return;let e=!1;const t=Un(b),n=jn(t);let r=y.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&oi(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(_n()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||Yn(i)))}return oi(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=jn(t),o=In(b,n)||E&&Co(E.nodesRef.current,p).some((e=>{var t;return In(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&oi(h.domReference.current);const a=ii();B.current&&!R.current&&On(a)&&(a===n||n===t.body||o)&&wo(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,y,h,m,E,p]),Do((()=>{if(!o&&O)return O.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{O.setFocusManagerState(null)}}),[o,O,c,f,g,h,d]),Do((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");$.current.includes("floating")||jn(Un(b))!==h.domReference.current&&0===C().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,$,C,w]);const z=!o&&x&&(M||c);return r.createElement(r.Fragment,null,z&&r.createElement(qo,{"data-type":"inside",ref:null==O?void 0:O.beforeInsideRef,onFocus:e=>{if(c){const e=L();wo("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(R.current=!1,Uo(e,O.portalNode)){const e=_o()||v;null==e||e.focus()}else{var t;null==(t=O.beforeOutsideRef.current)||t.focus()}}}),!D&&T("start"),n,T("end"),z&&r.createElement(qo,{"data-type":"inside",ref:null==O?void 0:O.afterInsideRef,onFocus:e=>{if(c)wo(L()[0]);else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(d&&(R.current=!0),Uo(e,O.portalNode)){const e=Vo()||v;null==e||e.focus()}else{var t;null==(t=O.afterOutsideRef.current)||t.focus()}}}))}function si(e){return On(e.target)&&"BUTTON"===e.target.tagName}function ci(e){return Kn(e)}const ui={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},di={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},fi=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function hi(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Bo(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=Ao();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!En(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Eo)&&e.has(o)||(null==(i=Eo)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=vo(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function pi(e){void 0===e&&(e={});const{nodeId:t}=e,n=hi({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[s,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Ro();Do((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);Wr(h,o)||p(o);const[g,m]=r.useState(null),[y,v]=r.useState(null),b=r.useCallback((e=>{e!==$.current&&($.current=e,m(e))}),[]),w=r.useCallback((e=>{e!==F.current&&(F.current=e,v(e))}),[]),S=a||g,x=l||y,$=r.useRef(null),F=r.useRef(null),B=r.useRef(d),E=null!=c,O=Vr(c),k=Vr(i),A=r.useCallback((()=>{if(!$.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),jr($.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!Wr(B.current,t)&&(B.current=t,D.flushSync((()=>{f(t)})))}))}),[h,t,n,k]);Ir((()=>{!1===u&&B.current.isPositioned&&(B.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);Ir((()=>(R.current=!0,()=>{R.current=!1})),[]),Ir((()=>{if(S&&($.current=S),x&&(F.current=x),S&&x){if(O.current)return O.current(S,x,A);A()}}),[S,x,A,O,E]);const H=r.useMemo((()=>({reference:$,floating:F,setReference:b,setFloating:w})),[b,w]),M=r.useMemo((()=>({reference:S,floating:x})),[S,x]),C=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=_r(M.floating,d.x),r=_r(M.floating,d.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Yr(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,M.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:H,elements:M,floatingStyles:C})),[d,A,H,M,C])}({...e,elements:{...i,...s&&{reference:s}}}),p=r.useCallback((e=>{const t=En(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(En(e)||null===e)&&(d.current=e,l(e)),(En(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!En(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),y=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),v=r.useMemo((()=>({...h,...o,refs:m,elements:y,nodeId:t})),[h,m,y,t,o]);return Do((()=>{o.dataRef.current.floatingContext=v;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=v)})),r.useMemo((()=>({...h,context:v,refs:m,elements:y})),[h,m,y,v])}const gi="active",mi="selected";function yi(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[gi]:t,[mi]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[gi,mi].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const vi=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function bi(e,t){return"function"==typeof e?e(t):e}function wi(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,s]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==l||s("unmounted"),Do((()=>{if(o){if(n){s("initial");const e=requestAnimationFrame((()=>{s("open")}));return()=>{cancelAnimationFrame(e)}}s("close")}}),[n,o]),{isMounted:c,status:l}}var Di=function(e,t){return Di=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Di(e,t)};var Si=function(){return Si=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Si.apply(this,arguments)};var xi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var $i=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Fi="object"==typeof xi&&xi&&xi.Object===Object&&xi,Bi="object"==typeof self&&self&&self.Object===Object&&self,Ei=Fi||Bi||Function("return this")(),Oi=Ei,ki=function(){return Oi.Date.now()},Ai=/\s/;var Ri=function(e){for(var t=e.length;t--&&Ai.test(e.charAt(t)););return t},Hi=Ri,Mi=/^\s+/;var Ci=function(e){return e?e.slice(0,Hi(e)+1).replace(Mi,""):e},Li=Ei.Symbol,Ti=Li,zi=Object.prototype,Ni=zi.hasOwnProperty,Pi=zi.toString,ji=Ti?Ti.toStringTag:void 0;var Ii=function(e){var t=Ni.call(e,ji),n=e[ji];try{e[ji]=void 0;var r=!0}catch(e){}var o=Pi.call(e);return r&&(t?e[ji]=n:delete e[ji]),o},Wi=Object.prototype.toString;var Yi=Ii,_i=function(e){return Wi.call(e)},Vi=Li?Li.toStringTag:void 0;var Ui=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Vi&&Vi in Object(e)?Yi(e):_i(e)},Ji=function(e){return null!=e&&"object"==typeof e};var Zi=Ci,Xi=$i,Ki=function(e){return"symbol"==typeof e||Ji(e)&&"[object Symbol]"==Ui(e)},qi=/^[-+]0x[0-9a-f]+$/i,Gi=/^0b[01]+$/i,Qi=/^0o[0-7]+$/i,ea=parseInt;var ta=$i,na=ki,ra=function(e){if("number"==typeof e)return e;if(Ki(e))return NaN;if(Xi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Xi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zi(e);var n=Gi.test(e);return n||Qi.test(e)?ea(e.slice(2),n?2:8):qi.test(e)?NaN:+e},oa=Math.max,ia=Math.min;var aa=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function g(){var e=na();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-s);return d?ia(n,i-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function y(){var e=na(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(g,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=ra(t)||0,ta(n)&&(u=!!n.leading,i=(d="maxWait"in n)?oa(ra(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},y.flush=function(){return void 0===l?a:m(na())},y},la=aa,sa=$i;var ca=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return sa(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),la(e,t,{leading:r,maxWait:t,trailing:o})},ua=function(e,t,n,r){switch(t){case"debounce":return aa(e,n,r);case"throttle":return ca(e,n,r);default:return e}},da=function(e){return"function"==typeof e},fa=function(){return"undefined"==typeof window},ha=function(e){return e instanceof Element||e instanceof HTMLDocument},pa=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&da(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!fa()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(fa())return null;if(t)return document.querySelector(t);if(r&&ha(r))return r;if(n.targetRef&&ha(n.targetRef.current))return n.targetRef.current;var o=x(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=pa(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!fa()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return da(t)?"renderProp":da(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,fa()||(n.resizeHandler=ua(n.createResizeHandler,o,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Di(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){fa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return d(e,c)}return d(e,s);case"childArray":return(e=o).map((function(e){return!!e&&d(e,s)}));default:return r.createElement(a,null)}}}(f);var ga=fa()?a:i;const ma=y.div`
    display: flex;
    flex-direction: column;
`,ya=e=>"right"===e?"bottom-end":"bottom-start",va=({enabled:o,isOpen:i,onOpen:a,onClose:c,onDismiss:u,renderElement:d,renderDropdown:f,zIndex:h=50,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:y})=>{const v=l(null),b=l(null),{width:w}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=l(n),y=l(null),v=null!=h?h:y,b=l(),w=s({width:void 0,height:void 0}),D=w[0],S=w[1];return ga((function(){if(!fa()){var e=pa(g,S,u,f);b.current=ua((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!fa()&&e({width:r,height:o}),m.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,u,f,g,p,v.current]),Si({ref:v},D)}({targetRef:v,handleHeight:!1}),{refs:D,floatingStyles:S,context:x}=pi({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==u||u():e&&!i?null==a||a():!e&&i&&(null==c||c(n))},whileElementsMounted:Cr,placement:ya(m),middleware:[($=g,{...Lr($),options:[$,F]}),Zr(),Ur({limiter:Jr()}),Xr({apply({availableHeight:e}){b.current&&Object.assign(b.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}})]});var $,F;const{isMounted:B,styles:E}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,s=e.placement,c=s.split("-")[0],u=r.useMemo((()=>({side:c,placement:s})),[c,s]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...bi(a,u),...bi(n,u)}))),{isMounted:m,status:y}=wi(e,{duration:l}),v=Mo(n),b=Mo(o),w=Mo(i),D=Mo(a);return Do((()=>{const e=bi(v.current,u),t=bi(w.current,u),n=bi(D.current,u),r=bi(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===y&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===y&&g({transitionProperty:Object.keys(r).map(vi).join(","),transitionDuration:f+"ms",...n,...r}),"close"===y){const r=t||e;g({transitionProperty:Object.keys(r).map(vi).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,v,b,D,f,y,u]),{isMounted:m,styles:p}}(x,{initial:{opacity:0},open:{opacity:1},duration:300}),O=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(Vn(f.current,!0)&&u||"click"!==s&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===s&&f.current?f.current=void 0:Vn(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||si(e)||(" "!==e.key||ci(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||si(e)||ci(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[l,i,s,u,d,a,c,n,o])}(x,{enabled:o,toggle:p}),k=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:s}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:y}=t,v=Ro(),b=vo("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,D=r.useRef(!1),S=r.useRef(!1),{escapeKey:x,outsidePress:$}=fi(m),{escapeKey:F,outsidePress:B}=fi(y),E=vo((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=s.current.floatingContext)?void 0:t.nodeId,i=v?Co(v.nodesRef.current,r):[];if(!x&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),O=vo((e=>{var t;const n=()=>{var t;E(e),null==(t=Zn(e))||t.removeEventListener("keydown",n)};null==(t=Zn(e))||t.addEventListener("keydown",n)})),k=vo((e=>{var t;const n=D.current;D.current=!1;const r=S.current;if(S.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=Zn(e),c="["+Ho("inert")+"]",u=Un(l).querySelectorAll(c);let d=En(i)?i:null;for(;d&&!Cn(d);){const e=zn(d);if(Cn(e)||!En(e))break;d=e}if(u.length&&En(i)&&!i.matches("html,body")&&!In(i,l)&&Array.from(u).every((e=>!In(d,e))))return;if(On(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===Ln(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=s.current.floatingContext)?void 0:t.nodeId,p=v&&Co(v.nodesRef.current,h).some((t=>{var n;return Jn(e,null==(n=t.context)?void 0:n.elements.floating)}));if(Jn(e,l)||Jn(e,a)||p)return;const g=v?Co(v.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=vo((e=>{var t;const n=()=>{var t;k(e),null==(t=Zn(e))||t.removeEventListener(f,n)};null==(t=Zn(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}s.current.__escapeKeyBubbles=x,s.current.__outsidePressBubbles=$;const t=Un(l);u&&t.addEventListener("keydown",F?O:E,F),w&&t.addEventListener(f,B?A:k,B);let r=[];return g&&(En(a)&&(r=Pn(a)),En(l)&&(r=r.concat(Pn(l))),!En(i)&&i&&i.contextElement&&(r=r.concat(Pn(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",F?O:E,F),w&&t.removeEventListener(f,B?A:k,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[s,l,a,i,u,w,f,n,o,g,c,x,$,E,F,O,k,B,A]),r.useEffect((()=>{D.current=!1}),[w,f]),r.useMemo((()=>c?{reference:{onKeyDown:E,[ui[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[di[f]]:()=>{D.current=!0}}}:{}),[c,h,f,p,o,E])}(x,{enabled:o}),{getReferenceProps:A,getFloatingProps:R}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>yi(t,e,"reference")),t),o=r.useCallback((t=>yi(t,e,"floating")),t),i=r.useCallback((t=>yi(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([O,k]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,D.setReference(e)}},A(),{children:d()})),B&&t(ei,{children:t(li,Object.assign({context:x,modal:!1,initialFocus:b,returnFocus:!1},{children:t("div",Object.assign({ref:D.setFloating,style:Object.assign(Object.assign({},S),{zIndex:h})},R(),{children:t(ma,Object.assign({ref:b,style:Object.assign({},E),inert:E.opacity<1?"":void 0},{children:f({elementWidth:w})}))}))}))})]})},ba={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},wa=e=>Object.keys(ba).reduce(((t,n)=>{const r=ba[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Da=wa("max-width"),Sa=(wa("min-width"),y.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Da.mobileL} {
        min-width: 17.5rem;
    }
`);var xa={exports:{}};xa.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var D="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[D])},x=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},$=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},F=v;F.l=x,F.i=S,F.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return $(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<$(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),h=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?y-w:y+(6-w),m);case l:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=F.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=F.p(u),g=function(e){var t=$(h);return F.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return F.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return l+1;case"MM":return F.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return F.s(a,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,g=this,m=F.p(f),y=$(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return F.m(g,y)};switch(m){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case s:p=(b-v)/6048e5;break;case l:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:F.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return $.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,B,$),e.$i=!0),$},$.locale=x,$.isDayjs=S,$.unix=function(e){return $(1e3*e)},$.en=w[b],$.Ls=w,$.p={},$}();var $a=O(xa.exports),Fa={exports:{}};Fa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],h=u&&u[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),u=i.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var y=l||0,v=s||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ba,Ea,Oa=O(Fa.exports),ka={exports:{}},Aa=O(ka.exports=(Ba={year:0,month:1,day:2,hour:3,minute:4,second:5},Ea={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Ea[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ea[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Ba[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Ra={exports:{}};Ra.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var Ha=O(Ra.exports),Ma={exports:{}};Ma.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ca=O(Ma.exports),La={exports:{}};La.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ta,za=O(La.exports);$a.extend(Ha),$a.extend(Ca),$a.extend(za),$a.extend(Oa),$a.extend(Aa),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=$a(t).startOf("week");return Na(n).map((e=>Pa(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Pa(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push($a(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+$a(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=$a(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?$a(r):void 0,o?$a(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ta||(Ta={}));const Na=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Pa=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},ja=[1,3,5,7,8,10,12],Ia=[4,6,9,11];var Wa,Ya,_a,Va;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":ja.includes(i)?Math.min(o,31).toString():Ia.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=$a(e,n);return $a(t,n).diff(r,"minute")},e.toDayjs=e=>e?$a(e):$a(),e.addMinutesToTime=(e,t,n="HH:mm")=>$a(e,n).add(t,"minutes").format(n)}(Wa||(Wa={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!$a(e).isBefore(r,"day"))||!(!o||!$a(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if($a(e).isValid())return e}return""}}(Ya||(Ya={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(_a||(_a={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Va||(Va={}));const Ua=e=>{const[t,n]=s(e),r=l(e);return[t,h((e=>{r.current=e,n(e)}),[]),r]},Ja=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Za=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Xa=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Zt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Za} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ka=y(Xa)`
    animation-delay: -0.45s;
`,qa=y(Xa)`
    animation-delay: -0.3s;
`,Ga=y(Xa)`
    animation-delay: -0.15s;
`,Qa=y.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${Zt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?qt.Button.Danger.Border:Zt.Primary};

                    color: ${e.$buttonIsDanger?qt.Button.Danger.Primary:Zt.Primary};
                `;case"light":return v`
                    background-color: ${Zt.Neutral[8]};
                    border: 1px solid ${Zt.Neutral[5]};

                    color: ${e.$buttonIsDanger?qt.Button.Danger.Primary:Zt.Primary};
                `;case"disabled":return v`
                    background-color: ${Zt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Zt.Neutral[3]};
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?qt.Button.Danger.Primary:Zt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?qt.Button.Danger.Hover:Zt.Secondary};
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?qt.Button.Danger.BackgroundColor:Zt.Primary};
                    border: 1px solid transparent;

                    ${Da.mobileL} {
                        width: 100%;
                    }

                    color: ${Zt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    ${un("H5","semibold")}

                    ${Da.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    ${un("H4","semibold")}

                    ${Da.mobileS} {
                        height: auto;
                    }
                `}
`,el=y((({color:n,className:r,size:o=18})=>e(Ja,Object.assign({className:r,$size:o,$color:n},{children:[t(Xa,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Ka,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(qa,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Ga,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?qt.Button.Danger.Primary:Zt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Zt.Neutral[3](e);break;default:t=Zt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,tl={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Qa,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(el,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Qa,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(el,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},nl=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&v`
                background-color: ${Zt.Neutral[7]};
            `}
    }
`,rl=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=B(e,["children","focusHighlight","focusOutline","type"]);return t(nl,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),ol=v`
    color: ${Zt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,il=y($)`
    ${ol}
`,al=y(F)`
    ${ol}
`,ll=y(m)`
    ${ol}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,sl=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,cl=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,ul=y.div`
    isolation: isolate;
    width: 100%;
`,dl=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Zt.Neutral[8]};

    ${e=>{if(!e.$visible)return v`
                display: none;
            `}}
`,fl=y.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,hl=y.div`
    display: flex;
`,pl=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?v`
                display: none;
            `:e.$expanded?v`
                ${ll} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,gl=y.p`
    ${un("H5","regular")}
`,ml=y.div`
    display: flex;
`,yl=y(rl)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,vl=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,bl=y(tl.Small)`
    flex: 1;
`,wl=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return v`
                    gap: 0.5rem 2.5rem;
                `;case"input":return v`
                    gap: 0.5rem 1rem;
                `}}}
`,Dl=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?v`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Zt.Shadow.Accent};
                    border: 1px solid ${Zt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return v`
                    background-color: ${Zt.Accent.Light[6](e)};
                `;case"selected-month":return v`
                    background-color: ${Zt.Accent.Light[5](e)};
                    border: 1px solid ${Zt.Primary(e)};
                `}}}
`,Sl=y(fn.H5)`
    ${e=>{if(e.$disabledDisplay)return v`
                color: ${Zt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return v`
                    color: ${Zt.Neutral[3](e)};
                `;case"selected-month":return v`
                    ${un("H5","semibold")}
                    color: ${Zt.Primary(e)};
                `}}}
`,xl=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const f=p((()=>Ta.generateMonths($a(e))),[e]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},g=e=>{const t=e.format("MMMM"),n=(r=e,!Ta.isWithinRange(r,s?$a(s):void 0,c?$a(c):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":$a().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||u,month:t,variant:o}};return f.length?t(wl,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=g(e);return t(Dl,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Sl,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},$l=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return v`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return v`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Fl=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?v`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Zt.Shadow.Accent};
                    border: 1px solid ${Zt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return v`
                    background: ${Zt.Accent.Light[6](e)};
                `;case"selected-year":return v`
                    background: ${Zt.Accent.Light[5](e)};
                    border: 1px solid ${Zt.Primary(e)};
                `}}};
`,Bl=y(fn.H5)`
    ${e=>{if(e.$disabledDisplay)return v`
                color: ${Zt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return v`
                    color: ${Zt.Neutral[3](e)};
                `;case"selected-year":return v`
                    ${un("H5","semibold")}
                    color: ${Zt.Primary(e)};
                `;case"other-decade":return v`
                    color: ${Zt.Neutral[4](e)};
                `}}}
`,El=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const f=p((()=>Ta.generateDecadeOfYears($a(e))),[e]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},g=e=>{const t=[0,11].includes(f.indexOf(e)),n=e.year(),r=(o=e,!Ta.isWithinRange(o,s?$a(s):void 0,c?$a(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":$a().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||u,year:n,variant:a}};return f.length?t($l,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=g(e);return t(Fl,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Bl,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Ol=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:c,type:u,minDate:d,maxDate:f,currentFocus:h,selectedStartDate:p,selectedEndDate:m,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:D,doneButtonDisabled:S,onDismiss:x,showNavigationHeader:$=!0,getLeftArrowDate:F,getRightArrowDate:E,isLeftArrowDisabled:O,isRightArrowDisabled:k,getMonthHeaderLabel:A,getYearHeaderLabel:R}=r,H=B(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,C]=s(Wa.toDayjs(c)),[L,T]=s(Wa.toDayjs(c)),[z,N]=s("default"),P=l(null),j=l(null),I=l();g(o,(()=>({defaultView(){N("default")},resetView(){const e=Wa.toDayjs(c);C(e),T(e),N("default")},setCalendarDate(e){const t=Wa.toDayjs(e);C(t),T(t)}}))),a((()=>{const e=Wa.toDayjs(c);C(e),T(e)}),[c]),a((()=>{Z(L)}),[L]);const W=()=>{"month-options"!==z?(N("month-options"),I.current.focus()):(N("default"),C(L))},Y=()=>{"default"!==z?(N("default"),C(L)):N("year-options")},_=()=>{I.current.focus();const e=F?F(M):M.subtract(1,"month");switch(z){case"default":T(e),C(e);break;case"month-options":C((e=>e.subtract(1,"year")));break;case"year-options":C((e=>e.subtract(10,"year")))}},V=()=>{I.current.focus();const e=E?E(M):M.add(1,"month");switch(z){case"default":T(e),C(e);break;case"month-options":C((e=>e.add(1,"year")));break;case"year-options":C((e=>e.add(10,"year")))}},U=e=>{C(e),T(e),D||N("default")},J=()=>{const e=Wa.toDayjs(c);C(e),T(e),"default"===z?X("reset"):N("default")},Z=e=>{w&&w(e)},X=e=>{x&&x(e)},K=()=>{if(!d||b)return!1;const e=$a(d);return"month-options"===z?!Ta.isPreviousYearWithinRange(M,e):"year-options"===z?!Ta.isPreviousDecadeWithinRange(M,e):O?O(M):!Ta.isPreviousMonthWithinRange(M,e)},q=()=>{if(!f||b)return!1;const e=$a(f);return"month-options"===z?!Ta.isNextYearWithinRange(M,e):"year-options"===z?!Ta.isNextDecadeWithinRange(M,e):k?k(M):!Ta.isNextMonthWithinRange(M,e)},G=()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Ta.getStartEndDecade(M);return`${e} to ${t}`}return R?R(M):M.format("YYYY")},Q=()=>{const r=A?A(M):M.format("MMM");return e(n,{children:[e(pl,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:W},{children:[t(gl,{children:r}),t(ll,{})]})),e(pl,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==z,id:"year-dropdown",onClick:Y},{children:[t(gl,{children:G()}),t(ll,{})]}))]})},ee=()=>{switch(z){case"month-options":return t(xl,{type:u,calendarDate:M,currentFocus:h,minDate:d,maxDate:f,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:L,isNewSelection:y,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t(El,{type:u,calendarDate:M,currentFocus:h,minDate:d,maxDate:f,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:L,isNewSelection:y,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(sl,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container"},H,{children:[$&&e(fl,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(hl,{children:Q()}),e(ml,{children:[t(yl,Object.assign({"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:_},{children:t(il,{})})),t(yl,Object.assign({"data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(al,{})}))]})]})),t(cl,{children:(()=>{const r="function"==typeof i?i({calendarDate:L,currentView:z}):i;return e(n,v?{children:["default"===z&&r,ee()]}:{children:[t(ul,{children:r}),t(dl,Object.assign({$visible:"default"!==z},{children:ee()}))]})})()}),(()=>{if(!D)return;const n=!!("default"===z)&&S;return e(vl,{children:[t(bl,Object.assign({ref:j,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:J},{children:"Cancel"})),t(bl,Object.assign({"data-testid":"done-button",ref:P,type:"button",onClick:()=>{n||(C(L),"default"===z?X("confirmed"):N("default"))},disabled:n},{children:"Done"}))]})})()]}))})),kl=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Al=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Rl=y.div`
    grid-column: 1 / -1;
    display: flex;
`;y.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Hl=y.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return v`
                    left: 0;
                `;case"right":return v`
                    right: 0;
                `}}}
`,Ml=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;y(fn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return v`
                ${un("H5","semibold")};
                color: ${Zt.Accent.Light[2]};
            `;if(t)return v`
                color: ${Zt.Neutral[4]};
            `;if(n)return v`
                ${un("H5","semibold")};
                color: ${Zt.Primary};
            `;switch(r){case"other-month":return v`
                    color: ${Zt.Neutral[4]};
                `;case"today":return v`
                    color: ${Zt.Neutral[3]};
                `;case"default":return v`
                    color: ${Zt.Neutral[1]};
                `}}}
`,y(Hl)`
    ${e=>{const{$selected:t}=e;if(t)return v`
                border-top: 1px solid ${Zt.Accent.Light[4]};
                border-bottom: 1px solid ${Zt.Accent.Light[4]};
                background-color: ${Zt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?v`
                border-top: 1px dashed ${Zt.Accent.Light[4]};
                border-bottom: 1px dashed ${Zt.Accent.Light[4]};
                background-color: ${Zt.Accent.Light[6]};
            `:n?v`
                background-color: ${Zt.Accent.Light[4]};
            `:void 0}}
`,y(Ml)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?v`
                background: ${Zt.Accent.Light[5]};
                border: 1px solid ${Zt.Primary};
            `:t?v`
                box-shadow: 0px 0px 4px 1px ${Zt.Shadow.Accent};
                border: 1px solid ${Zt.Accent.Light[1]};
                background-color: ${Zt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?v`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Zt.Shadow.Accent};
                    border: 1px solid ${Zt.Accent.Light[1]};
                    background-color: ${Zt.Neutral[8]};
                }
            `:n?v`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?v`
                border: 1px solid ${Zt.Accent.Light[1]};
                background: ${Zt.Accent.Light[4]};

                :hover {
                    background: ${Zt.Accent.Light[4]};
                }
            `:t?v`
                color: ${Zt.Neutral[4]};
            `:"today"===r?v`
                    background: ${Zt.Accent.Light[5]};
                `:void 0}}
`;const Cl=e=>{let t=Zt.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Zt.Accent.Light[5];break;case"hover-dash":t=Zt.Accent.Light[6],n=`1px dashed ${Zt.Accent.Light[4](e)}`;break;case"hover-current":t=Zt.Neutral[8],n=`1px solid ${Zt.Primary(e)}`;break;case"selected":t=Zt.Accent.Light[5],n=`1px solid ${Zt.Accent.Light[4](e)}`;break;case"selected-outline":t=Zt.Accent.Light[5],n=`1px solid ${Zt.Primary(e)}`;break;case"overlap":t=Zt.Accent.Light[4],n=`1px solid ${Zt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Zt.Accent.Light[4],n=`1px solid ${Zt.Primary(e)}`}return{color:t,border:n}},Ll=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Tl=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Cl(e);return v`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,zl=y(Tl)`
    left: 0;
`,Nl=y(Tl)`
    right: 0;
`,Pl=y.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Zt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,jl=y(Pl)`
    left: 0;
`,Il=y(Pl)`
    right: 0;
`,Wl=y.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Cl(e);return v`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&v`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Yl=y(Wl)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Zt.Shadow.Accent};
    }
`,_l=y(Wl)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Zt.Shadow.Accent};
    }
`,Vl=y(fn.H5)`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?v`
                    ${un("H5","semibold")};
                    color: ${Zt.Accent.Light[2]};
                `:v`
                color: ${Zt.Neutral[4]};
            `;switch(n){case"selected":return v`
                    ${un("H5","semibold")};
                    color: ${Zt.Primary};
                `;case"current":return v`
                    color: ${Zt.Neutral[3]};
                `;case"unavailable":return v`
                    color: ${Zt.Neutral[4]};
                `;case"hidden":return v`
                    visibility: hidden;
                `;default:return v`
                    color: ${Zt.Neutral[1]};
                `}}}
`,Ul=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:l,labelType:s,disabled:c,interactive:u,date:d,onSelect:f,onHover:h,onHoverEnd:p})=>e(Ll,{children:[t(jl,{$shadow:n&&a}),t(zl,{$type:n,$shadow:n&&a}),t(Yl,{$type:o,$shadow:o&&l}),t(Il,{$shadow:r&&a}),t(Nl,{$type:r,$shadow:r&&a}),t(_l,{$type:i,$shadow:i&&l}),t(Vl,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:u,onClick:()=>{f(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),Jl=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=Ta.isDisabledDay(e,c,l,s),m=!g||u,y=()=>{const e=$a(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let l,s,c,u;return"start"===i&&o&&t&&(r&&n?(c=a,u=o):(l=a,s=r||o)),"end"===i&&r&&n&&(o&&t?(c=r,u=a):(l=o||r,s=a)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:u}},v={date:e,calendarDate:n,disabled:g,interactive:m,onSelect:()=>{h(e,!m)},onHover:()=>{p(e.format("YYYY-MM-DD"),!m)}};return t(Ul,Object.assign({},v,(()=>{const t={};if(n.month()!==e.month())t.labelType=f?"hidden":"unavailable";else if($a().isSame(e,"day")&&!g)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(r,"day"),a=e.isSame(o,"day");return f&&n.month()!==e.month()?(t.labelType="hidden",t):((r&&i||o&&a)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected"),a||(t.bgRight="selected")),t)})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=y();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};$a.extend(Ha);const Zl=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:g})=>{const m=p((()=>Ta.generateDays(n)),[n]),[y,v]=s(""),b=(e,t)=>{t&&!h||l(e)},w=(e,t)=>{t&&!h||(v(e),c(e))},D=()=>{v(""),c("")};return e(kl,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(Al,{children:t(fn.H6,Object.assign({weight:"semibold"},{children:$a(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,l)=>t(Rl,Object.assign({onMouseLeave:D},{children:e.map(((e,l)=>t(Jl,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:y,currentFocus:r,minDate:d,maxDate:f,disabledDates:o,allowDisabledSelection:h,isNewSelection:u,showActiveMonthDaysOnly:g,onSelect:b,onHover:w},`day-${l}`)))}),l)))]}))},Xl=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:u,onHover:d})=>{const f=Ta.isDisabledDay(e,l,i,a),h=!f||s,{start:p,end:g}=r?Ta.getFixedRangeStartEnd(Wa.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:y}=o?Ta.getFixedRangeStartEnd(Wa.toDayjs(o),c):{start:void 0,end:void 0},v=r&&e.isBetween(p,g,"day","[]"),b=o&&e.isBetween(m,y,"day","[]"),w=v&&e.isSame(p,"day")||b&&e.isSame(m,"day"),D=v&&e.isSame(g,"day")||b&&e.isSame(y,"day"),S=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},x={date:e,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Ul,Object.assign({},x,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":$a().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&S(t,"hover-dash",n===m,n===y),v&&S(t,"selected",n===p,n===g),v&&b&&S(t,"overlap",w,D),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=p&&m<g&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Kl=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u,numberOfDays:d})=>{const f=p((()=>Ta.generateDays(n)),[n]),[h,g]=s(""),m=(e,t)=>{t&&!u||(i(e),e&&!$a(e).isSame(e,"month")&&g(""))},y=(e,t)=>{t&&!u||(g(e),a(e))},v=()=>{g(""),a("")};return e(kl,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(Al,{children:t(fn.H6,Object.assign({weight:"semibold"},{children:$a(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(Rl,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(Xl,{date:e,calendarDate:n,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:y,numberOfDays:d},`day-${i}`)))}),i)))]}))},ql=y.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Zt.Neutral[8]};

    ${e=>{if("input"===e.$type)return v`
                border: 1px solid ${Zt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Gl=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:u})=>{const d=Ta.isDisabledDay(e,l,i,a),f=!d||s,{start:h,end:p}=Ta.getWeekStartEnd(Wa.toDayjs(r)),{start:g,end:m}=Ta.getWeekStartEnd(Wa.toDayjs(o)),y=r&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(g,m,"day","[]"),b=y&&e.isSame(h)||v&&e.isSame(g),w=y&&e.isSame(p)||v&&e.isSame(m),D={date:e,calendarDate:n,disabled:d,interactive:f,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Ul,Object.assign({},D,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":$a().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},Ql=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u})=>{const d=p((()=>Ta.generateDays(n)),[n]),[f,h]=s(""),g=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!$a(e).isSame(n,"month")&&h("")},m=(e,t)=>{t&&!u||(h(e),a(e))},y=()=>{h(""),a("")};return e(kl,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,n)=>t(Al,{children:t(fn.H6,Object.assign({weight:"semibold"},{children:$a(e).format("ddd")}))},`week-day-${n}`))),d.map(((e,i)=>t(Rl,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Gl,{date:e,calendarDate:n,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:g,onHover:m},`day-${i}`)))}),i)))]}))},es=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:s,currentFocus:c,withButton:u,variant:d,minDate:f,maxDate:h,allowDisabledSelection:p,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:v,numberOfDays:b,showActiveMonthDaysOnly:w=!1},D)=>{const S=l(),x=l(void 0);g(D,(()=>({reset(){S.current.resetView()},setCalendarDate(e){S.current.setCalendarDate(e)}})));const $=e=>{const t=e.format("YYYY-MM-DD");S.current.setCalendarDate(t),B(t)},F=e=>{E(e)},B=e=>{r&&r(e)},E=e=>{o&&o(e)},O=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(ql,Object.assign({$type:m},{children:t(Ol,Object.assign({type:m,ref:S,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!s;break;case"week":e=!a&&!s}return e})(),onDismiss:i,minDate:f,maxDate:h,selectWithinRange:y,currentFocus:c,selectedStartDate:a,selectedEndDate:s,allowDisabledSelection:p,onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"month")||O(e),x.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(d){case"week":return t(Ql,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:F});case"fixed-range":return t(Kl,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:F,numberOfDays:b});default:return t(Zl,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:s,minDate:f,maxDate:h,isNewSelection:y,allowDisabledSelection:p,showActiveMonthDaysOnly:w,onSelect:$,onHover:F})}})(n)}))}))})),ts=o.forwardRef(((e,n)=>{var{width:r}=e,o=B(e,["width"]);return t(Sa,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(es,Object.assign({ref:n},o))}))})),ns=v`
    border: 1px solid ${Zt.Accent.Light[1]};
    box-shadow: ${qt.InputBoxShadow};
`,rs=v`
    border: 1px solid ${Zt.Accent.Light[1]};
    box-shadow: none;
`,os=v`
    border: 1px solid ${Zt.Neutral[5]};
    box-shadow: none;
`,is=v`
    border: 1px solid ${Zt.Validation.Red.Border};
    box-shadow: ${qt.InputErrorBoxShadow};
`,as=y.div`
    border: 1px solid ${Zt.Neutral[5]};
    border-radius: 4px;
    background: ${Zt.Neutral[8]};

    :focus-within {
        ${ns}
    }
    ${e=>e.$focused&&ns}

    ${e=>e.$readOnly?v`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${rs}
                }
                ${e.$focused&&rs}
            `:e.$disabled?v`
                background: ${Zt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${os}
                }
                ${e.$focused&&os}
            `:e.$error?v`
                border: 1px solid ${Zt.Validation.Red.Border};

                :focus-within {
                    ${is}
                }
                ${e.$focused&&is}
            `:void 0}
`,ls=y(as)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,ss=y.input`
    ${e=>un("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Zt.Neutral[1]};
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
        color: ${Zt.Neutral[3]};
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
`;y.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Zt.Primary};
    }
`;const cs=y.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,us=y.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return v`
                ${ds}, ${gs} {
                    color: ${Zt.Neutral[4]};
                }
            `}}
`,ds=y(ss)`
    background: transparent;
    text-align: center;
`,fs=y(ds)`
    width: 2rem;
    margin-right: 0.25rem;
`,hs=y(ds)`
    width: 2.5rem;
`,ps=y(ds)`
    width: 3rem;
    margin-left: 0.25rem;
`,gs=y(fn.Body)`
    ${e=>{if(e.$inactive)return v`
                color: ${Zt.Neutral[3](e)};
            `}}
`,ms=y.div`
    ${un("Body","regular")}
    background-color: ${Zt.Neutral[8]};
    color: ${Zt.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?v`
                background-color: ${Zt.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?v`
                display: none;
            `:void 0}
`;$a.extend(Oa);const ys=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:c,hoverValue:u,placeholder:d,label:f,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:y},v)=>{const b=y?"none":"numeric",[w,D,S]=Ua(""),[x,$,F]=Ua(""),[B,E,O]=Ua(""),[k,A]=s("none"),[R,H]=s(!1),M=l(null),C=l(null),L=l(null),T=l(null),[z,N,P]=V(u);a((()=>{const[e="",t="",n=""]=V(i);D(e),$(t),E(n),e||t||n||!M.current.contains(document.activeElement)||C.current.focus()}),[i]),a((()=>{c||A("none"),c&&(H(!0),M.current.contains(document.activeElement)||C.current.focus())}),[c]),g(v,(()=>({ref:M,resetPlaceholder(){H(!1)},resetInput(){const[e="",t="",n=""]=V(i);D(e),$(t),E(n)}})),[i]);const j=e=>{var t;e.preventDefault(),null===(t=C.current)||void 0===t||t.focus()},I=e=>{e.target.select();const t=e.target.name;A(t)},W=e=>{const[t,n,r]=o,i={[t]:S.current,[n]:F.current,[r]:O.current},a=e.target.name,l=i[a],s=a!==r?Va.padValue(l,!0):l;switch(a){case t:i[t]=s,D(s);break;case n:i[n]=s,$(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,u=$a(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&l!==s&&h(c),M.current.contains(e.relatedTarget)||(A("none"),null==m||m(d||u))},Y=e=>{if(u)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:x,year:B};switch(t){case o[0]:r.day=n,D(n),2===n.length&&L.current.focus();break;case o[1]:r.month=n,$(n),2===n.length&&T.current.focus();break;case o[2]:r.year=n,E(n)}if(!r.day&&!r.month&&!r.year)return void h("");const i=`${r.year}-${r.month}-${r.day}`;$a(i,"YYYY-MM-DD",!0).isValid()&&h(i)},_=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===o[1]&&0===x.length&&C.current.focus(),k===o[2]&&0===B.length&&L.current.focus())};function V(e){if(e){const t=$a(new Date(e));return t.isValid()?[Va.padValue(t.date().toString()),Va.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(cs,Object.assign({role:"group","aria-label":f,onClick:()=>{n||r||(H(!0),M.current.contains(document.activeElement)||C.current.focus())},onFocus:e=>{n||(H(!0),c||null==p||p(e))}},{children:[e(us,Object.assign({ref:M,$hover:!!u},{children:[t(fs,{ref:C,name:o[0],maxLength:2,value:null!=z?z:w,onFocus:I,onBlur:W,onChange:Y,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[0]||r?"DD":""}),t(gs,Object.assign({$inactive:0===w.length},{children:"/"})),t(hs,{ref:L,name:o[1],maxLength:2,value:null!=N?N:x,onFocus:I,onBlur:W,onChange:Y,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[1]||r?"MM":""}),t(gs,Object.assign({$inactive:0===x.length},{children:"/"})),t(ps,{ref:T,name:o[2],maxLength:4,value:null!=P?P:B,onFocus:I,onBlur:W,onChange:Y,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&d)return t(ms,Object.assign({$hide:R,$disabled:n,onMouseDown:j},{children:d}))})()]}))})),vs=y(ls)`
    height: 3rem;
`,bs=e=>{var{minDate:n,maxDate:r,disabled:o,disabledDates:i,error:c,hideInputKeyboard:u,value:d,onChange:f,onFocus:h,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:y,id:v,allowDisabledSelection:b,zIndex:w=50}=e,D=B(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[S,x]=s(Ya.sanitizeInput(d)),[$,F]=s(Ya.sanitizeInput(d)),[E,O]=s(void 0),[k,A]=s(!1),[R,H]=s(!1),M=l(null),C=l();a((()=>{const e=Ya.sanitizeInput(d);x(e),F(e)}),[d]);const L=e=>{!b&&Ya.isDateDisabled(e,{disabledDates:i,minDate:n,maxDate:r})||(F(e),m||(I(e),x(e),e&&A(!1)))},T=e=>{F(e),m||(I(e),x(e),e&&(M.current.focus(),A(!1)),E&&O(void 0))},z=()=>{y||o||(A(!0),R||(H(!0),h&&h()))},N=e=>{!R||k||M.current.contains(e.relatedTarget)||(C.current.resetInput(),F(S),H(!1),W())},P=e=>{O(e)},j=e=>{switch(e){case"reset":F(S);break;case"confirmed":x($),I($)}M.current.focus(),A(!1)},I=e=>{f&&f(e)},W=()=>{p&&p()};return t(va,{enabled:!y&&!o,isOpen:k,renderElement:()=>t(vs,Object.assign({tabIndex:-1,ref:M,onBlur:N,onFocus:z,$disabled:o,$readOnly:y,$focused:R,$error:c,id:v,"data-testid":D["data-testid"]},D,{children:t(ys,{ref:C,disabled:o,onChange:L,readOnly:y,focused:k,names:["start-day","start-month","start-year"],value:$,hoverValue:E,hideInputKeyboard:u})})),renderDropdown:({elementWidth:e})=>t(ts,{type:"input",variant:"single",initialCalendarDate:$,withButton:m,value:$,disabledDates:i,minDate:n,maxDate:r,allowDisabledSelection:b,onHover:P,onSelect:T,onDismiss:j,onYearMonthDisplayChange:g,width:e}),onClose:()=>{C.current.resetInput(),F(S),A(!1),H(!1),W()},onDismiss:()=>{C.current.resetInput(),M.current.focus(),F(S),A(!1)},zIndex:w,offset:16})};export{bs as DateInput};
//# sourceMappingURL=index.js.map
