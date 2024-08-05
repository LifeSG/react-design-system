import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as l,useState as s,isValidElement as c,createRef as u,cloneElement as d,PureComponent as f,useCallback as h,useMemo as p,useImperativeHandle as g}from"react";import{ChevronDownIcon as m}from"@lifesg/react-icons/chevron-down";import v,{css as y,keyframes as b}from"styled-components";import{ExternalIcon as w}from"@lifesg/react-icons/external";import*as D from"react-dom";import{createPortal as x,findDOMNode as $}from"react-dom";import{ChevronLeftIcon as S}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k=Array.isArray,A="object"==typeof E&&E&&E.Object===Object&&E,R="object"==typeof self&&self&&self.Object===Object&&self,H=A||R||Function("return this")(),C=H.Symbol,M=C,L=Object.prototype,T=L.hasOwnProperty,N=L.toString,j=M?M.toStringTag:void 0;var z=function(e){var t=T.call(e,j),n=e[j];try{e[j]=void 0;var r=!0}catch(e){}var o=N.call(e);return r&&(t?e[j]=n:delete e[j]),o},I=Object.prototype.toString;var P=z,Y=function(e){return I.call(e)},W=C?C.toStringTag:void 0;var _=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?P(e):Y(e)};var V=_,U=function(e){return null!=e&&"object"==typeof e};var Z=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==V(e)},K=k,X=Z,q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var J=function(e,t){if(K(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!X(e))||(G.test(e)||!q.test(e)||null!=t&&e in Object(t))};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ee=_,te=Q;var ne,re=function(e){if(!te(e))return!1;var t=ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},oe=H["__core-js_shared__"],ie=(ne=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||""))?"Symbol(src)_1."+ne:"";var ae=function(e){return!!ie&&ie in e},le=Function.prototype.toString;var se=re,ce=ae,ue=Q,de=function(e){if(null!=e){try{return le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},fe=/^\[object .+?Constructor\]$/,he=Function.prototype,pe=Object.prototype,ge=he.toString,me=pe.hasOwnProperty,ve=RegExp("^"+ge.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e){return!(!ue(e)||ce(e))&&(se(e)?ve:fe).test(de(e))},be=function(e,t){return null==e?void 0:e[t]};var we=function(e,t){var n=be(e,t);return ye(n)?n:void 0},De=we(Object,"create"),xe=De;var $e=function(){this.__data__=xe?xe(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fe=De,Be=Object.prototype.hasOwnProperty;var Ee=function(e){var t=this.__data__;if(Fe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},Oe=De,ke=Object.prototype.hasOwnProperty;var Ae=De;var Re=$e,He=Se,Ce=Ee,Me=function(e){var t=this.__data__;return Oe?void 0!==t[e]:ke.call(t,e)},Le=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ae&&void 0===t?"__lodash_hash_undefined__":t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Re,Te.prototype.delete=He,Te.prototype.get=Ce,Te.prototype.has=Me,Te.prototype.set=Le;var Ne=Te;var je=function(){this.__data__=[],this.size=0};var ze=function(e,t){return e===t||e!=e&&t!=t};var Ie=function(e,t){for(var n=e.length;n--;)if(ze(e[n][0],t))return n;return-1},Pe=Ie,Ye=Array.prototype.splice;var We=function(e){var t=this.__data__,n=Pe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ye.call(t,n,1),--this.size,!0)},_e=Ie;var Ve=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Ue=Ie;var Ze=Ie;var Ke=function(e,t){var n=this.__data__,r=Ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Xe=je,qe=We,Ge=Ve,Je=function(e){return Ue(this.__data__,e)>-1},Qe=Ke;function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Xe,et.prototype.delete=qe,et.prototype.get=Ge,et.prototype.has=Je,et.prototype.set=Qe;var tt=et,nt=we(H,"Map"),rt=Ne,ot=tt,it=nt;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return at(t)?n["string"==typeof t?"string":"hash"]:n.map},st=lt;var ct=lt;var ut=lt;var dt=lt;var ft=function(e,t){var n=dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},ht=function(){this.size=0,this.__data__={hash:new rt,map:new(it||ot),string:new rt}},pt=function(e){var t=st(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ct(this,e).get(e)},mt=function(e){return ut(this,e).has(e)},vt=ft;function yt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yt.prototype.clear=ht,yt.prototype.delete=pt,yt.prototype.get=gt,yt.prototype.has=mt,yt.prototype.set=vt;var bt=yt;function wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(wt.Cache||bt),n}wt.Cache=bt;var Dt=wt;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/\\(\\)?/g,St=function(e){var t=Dt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xt,(function(e,n,r,o){t.push(r?o.replace($t,"$1"):n||e)})),t}));var Ft=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Bt=Ft,Et=k,Ot=Z,kt=C?C.prototype:void 0,At=kt?kt.toString:void 0;var Rt=function e(t){if("string"==typeof t)return t;if(Et(t))return Bt(t,e)+"";if(Ot(t))return At?At.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Ht=Rt;var Ct=k,Mt=J,Lt=St,Tt=function(e){return null==e?"":Ht(e)};var Nt=Z;var jt=function(e,t){return Ct(e)?e:Mt(e,t)?[e]:Lt(Tt(e))},zt=function(e){if("string"==typeof e||Nt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var It=function(e,t){for(var n=0,r=(t=jt(t,e)).length;null!=e&&n<r;)e=e[zt(t[n++])];return n&&n==r?e:void 0},Pt=It;var Yt=O((function(e,t,n){var r=null==e?void 0:Pt(e,t);return void 0===r?n:r}));const Wt=(e,t,n)=>t?Yt(n,t)||Yt(e,t):n||e,_t=(e,t)=>{const n=t||e.defaultValue;return Yt(e.collections,n)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Ut={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Zt=e=>t=>{const n=t.theme,r=_t(Ut,n[Vt.colorScheme]);return n.options&&n.options.color?Wt(r,e,n.options.color):Wt(r,e)},Kt={Brand:{1:Zt("Brand.1"),2:Zt("Brand.2"),3:Zt("Brand.3"),4:Zt("Brand.4"),5:Zt("Brand.5"),6:Zt("Brand.6")},Primary:Zt("Primary"),PrimaryDark:Zt("PrimaryDark"),Secondary:Zt("Secondary"),Accent:{Light:{1:Zt("Accent.Light.1"),2:Zt("Accent.Light.2"),3:Zt("Accent.Light.3"),4:Zt("Accent.Light.4"),5:Zt("Accent.Light.5"),6:Zt("Accent.Light.6")},Dark:{1:Zt("Accent.Dark.1"),2:Zt("Accent.Dark.2"),3:Zt("Accent.Dark.3")}},Neutral:{1:Zt("Neutral.1"),2:Zt("Neutral.2"),3:Zt("Neutral.3"),4:Zt("Neutral.4"),5:Zt("Neutral.5"),6:Zt("Neutral.6"),7:Zt("Neutral.7"),8:Zt("Neutral.8")},Validation:{Green:{Text:Zt("Validation.Green.Text"),Icon:Zt("Validation.Green.Icon"),Border:Zt("Validation.Green.Border"),Background:Zt("Validation.Green.Background")},Orange:{Text:Zt("Validation.Orange.Text"),Icon:Zt("Validation.Orange.Icon"),Border:Zt("Validation.Orange.Border"),Background:Zt("Validation.Orange.Background"),Badge:Zt("Validation.Orange.Badge")},Red:{Text:Zt("Validation.Red.Text"),Icon:Zt("Validation.Red.Icon"),Border:Zt("Validation.Red.Border"),Background:Zt("Validation.Red.Background")},Blue:{Text:Zt("Validation.Blue.Text"),Icon:Zt("Validation.Blue.Icon"),Border:Zt("Validation.Blue.Border"),Background:Zt("Validation.Blue.Background")}},Shadow:{Accent:Zt("Shadow.Accent"),Red:Zt("Shadow.Red"),Elevation:Zt("Shadow.Elevation")}},Xt={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Kt.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Kt.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Kt.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Kt.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},qt=e=>t=>{var n;const r=t.theme,o=_t(Xt,r[Vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Wt(o,e,r.options.designToken):Wt(o,e)},Gt={InputBoxShadow:qt("InputBoxShadow"),InputErrorBoxShadow:qt("InputErrorBoxShadow"),ElevationBoxShadow:qt("ElevationBoxShadow"),Table:{Header:qt("Table.Header"),Cell:{Primary:qt("Table.Cell.Primary"),Secondary:qt("Table.Cell.Secondary"),Selected:qt("Table.Cell.Selected"),Hover:qt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:qt("Button.Danger.BackgroundColor"),Hover:qt("Button.Danger.Hover"),Primary:qt("Button.Danger.Primary"),Border:qt("Button.Danger.Border")}}},Jt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Qt={collections:{base:{D1:{fontFamily:Jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Jt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Jt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Jt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Jt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Jt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Jt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},en=e=>t=>{const n=t.theme,r=_t(Qt,n[Vt.textStyleScheme]);return n.options&&n.options.textStyle?Wt(r,e,n.options.textStyle):Wt(r,e)},tn={D1:{fontFamily:en("D1.fontFamily"),fontSize:en("D1.fontSize"),fontWeight:en("D1.fontWeight"),lineHeight:en("D1.lineHeight"),letterSpacing:en("D1.letterSpacing")},D2:{fontFamily:en("D2.fontFamily"),fontSize:en("D2.fontSize"),fontWeight:en("D2.fontWeight"),lineHeight:en("D2.lineHeight"),letterSpacing:en("D2.letterSpacing")},D3:{fontFamily:en("D3.fontFamily"),fontSize:en("D3.fontSize"),fontWeight:en("D3.fontWeight"),lineHeight:en("D3.lineHeight"),letterSpacing:en("D3.letterSpacing")},D4:{fontFamily:en("D4.fontFamily"),fontSize:en("D4.fontSize"),fontWeight:en("D4.fontWeight"),lineHeight:en("D4.lineHeight"),letterSpacing:en("D4.letterSpacing")},DBody:{fontFamily:en("DBody.fontFamily"),fontSize:en("DBody.fontSize"),fontWeight:en("DBody.fontWeight"),lineHeight:en("DBody.lineHeight"),letterSpacing:en("DBody.letterSpacing")},H1:{fontFamily:en("H1.fontFamily"),fontSize:en("H1.fontSize"),fontWeight:en("H1.fontWeight"),lineHeight:en("H1.lineHeight"),letterSpacing:en("H1.letterSpacing")},H2:{fontFamily:en("H2.fontFamily"),fontSize:en("H2.fontSize"),fontWeight:en("H2.fontWeight"),lineHeight:en("H2.lineHeight"),letterSpacing:en("H2.letterSpacing")},H3:{fontFamily:en("H3.fontFamily"),fontSize:en("H3.fontSize"),fontWeight:en("H3.fontWeight"),lineHeight:en("H3.lineHeight"),letterSpacing:en("H3.letterSpacing")},H4:{fontFamily:en("H4.fontFamily"),fontSize:en("H4.fontSize"),fontWeight:en("H4.fontWeight"),lineHeight:en("H4.lineHeight"),letterSpacing:en("H4.letterSpacing")},H5:{fontFamily:en("H5.fontFamily"),fontSize:en("H5.fontSize"),fontWeight:en("H5.fontWeight"),lineHeight:en("H5.lineHeight"),letterSpacing:en("H5.letterSpacing")},H6:{fontFamily:en("H6.fontFamily"),fontSize:en("H6.fontSize"),fontWeight:en("H6.fontWeight"),lineHeight:en("H6.lineHeight"),letterSpacing:en("H6.letterSpacing")},Body:{fontFamily:en("Body.fontFamily"),fontSize:en("Body.fontSize"),fontWeight:en("Body.fontWeight"),lineHeight:en("Body.lineHeight"),letterSpacing:en("Body.letterSpacing")},BodySmall:{fontFamily:en("BodySmall.fontFamily"),fontSize:en("BodySmall.fontSize"),fontWeight:en("BodySmall.fontWeight"),lineHeight:en("BodySmall.lineHeight"),letterSpacing:en("BodySmall.letterSpacing")},XSmall:{fontFamily:en("XSmall.fontFamily"),fontSize:en("XSmall.fontSize"),fontWeight:en("XSmall.fontWeight"),lineHeight:en("XSmall.lineHeight"),letterSpacing:en("XSmall.letterSpacing")}},nn=e=>{switch(e){case 700:case"bold":return Jt.Bold;case 600:case"semibold":return Jt.Semibold;case 300:case"light":return Jt.Light;case 400:case"regular":return Jt.Regular;default:return""}},rn=(e,t)=>n=>{var r;const o=tn[e].fontFamily(n),i=tn[e].fontWeight(n);return Object.values(Jt).includes(o)?y`
                font-family: ${nn(t)||nn(i)||o};
                font-weight: normal !important;
            `:y`
            font-family: ${o};
            font-weight: ${null!==(r=on(t)||i)&&void 0!==r?r:"normal"};
        `},on=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},an=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ln=(e,t,n=!1)=>r=>{const o=tn[e],i=o.fontSize(r);return y`
            ${rn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},sn=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${an(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${an(n)}
        `;var cn;!function(e){e.D1=v.h1`
        ${e=>y`
                ${ln("D1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${ln("D2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${ln("D3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${ln("D4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${ln("DBody",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${ln("H1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${ln("H2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${ln("H3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${ln("H4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${ln("H5",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${ln("H6",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${ln("Body",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${ln("BodySmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${ln("XSmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>fn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>fn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(cn||(cn={}));const un=v.a`
    ${e=>y`
            ${ln(e.textStyle,e.weight)}
            color: ${Kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Kt.Secondary};

                svg {
                    color: ${Kt.Secondary};
                }
            }
        `}
`,dn=v(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,fn=n=>{var{external:r=!1,children:o}=n,i=B(n,["external","children"]);return e(un,Object.assign({},i,{children:[o,r&&t(dn,{})]}))};var hn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(hn||(hn={}));const pn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",gn=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=gn(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const mn=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>gn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Kt.Accent.Light[3]};
    }
`,vn=v.button`
    ${mn}
    cursor: pointer;
`;v.div`
    ${mn}
`;const yn=b`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`;v.div`
    position: relative;
    border: 1px solid ${Kt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Kt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Kt.Accent.Light[1]};
        box-shadow: ${Gt.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${yn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Kt.Neutral[6](e)};

                ${vn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Kt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${vn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${Kt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Kt.Validation.Red.Border(e)};
                    box-shadow: ${Gt.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${pn};
    margin-left: 1rem;
`,v(m)`
    color: ${Kt.Neutral[3]};
    ${e=>{let t=tn.Body.fontSize;return"small"===e.$variant&&(t=tn.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${Kt.Neutral[5]};
    margin: 0 0.5rem;
`,v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const bn=v.div`
    ${e=>ln("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;function wn(e){return $n(e)?(e.nodeName||"").toLowerCase():"#document"}function Dn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function xn(e){var t;return null==(t=($n(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function $n(e){return e instanceof Node||e instanceof Dn(e).Node}function Sn(e){return e instanceof Element||e instanceof Dn(e).Element}function Fn(e){return e instanceof HTMLElement||e instanceof Dn(e).HTMLElement}function Bn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Dn(e).ShadowRoot)}function En(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Hn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function On(e){return["table","td","th"].includes(wn(e))}function kn(e){const t=An(),n=Hn(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function An(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Rn(e){return["html","body","#document"].includes(wn(e))}function Hn(e){return Dn(e).getComputedStyle(e)}function Cn(e){return Sn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Mn(e){if("html"===wn(e))return e;const t=e.assignedSlot||e.parentNode||Bn(e)&&e.host||xn(e);return Bn(t)?t.host:t}function Ln(e){const t=Mn(e);return Rn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fn(t)&&En(t)?t:Ln(t)}function Tn(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=Ln(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Dn(o);return i?t.concat(a,a.visualViewport||[],En(o)?o:[],a.frameElement&&n?Tn(a.frameElement):[]):t.concat(o,Tn(o,[],n))}function Nn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function jn(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Bn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function zn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function In(e){return!zn().includes("jsdom/")&&(!Pn()&&0===e.width&&0===e.height||Pn()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function Pn(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(zn())}function Yn(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Wn(e){return(null==e?void 0:e.ownerDocument)||document}function _n(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function Vn(e){return"composedPath"in e?e.composedPath()[0]:e.target}v(bn)`
    color: ${Kt.Neutral[3]};
`;const Un="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Zn(e){return Fn(e)&&e.matches(Un)}function Kn(e){e.preventDefault(),e.stopPropagation()}const Xn=Math.min,qn=Math.max,Gn=Math.round,Jn=Math.floor,Qn=e=>({x:e,y:e}),er={left:"right",right:"left",bottom:"top",top:"bottom"},tr={start:"end",end:"start"};function nr(e,t,n){return qn(e,Xn(t,n))}function rr(e,t){return"function"==typeof e?e(t):e}function or(e){return e.split("-")[0]}function ir(e){return e.split("-")[1]}function ar(e){return"x"===e?"y":"x"}function lr(e){return"y"===e?"height":"width"}function sr(e){return["top","bottom"].includes(or(e))?"y":"x"}function cr(e){return ar(sr(e))}function ur(e){return e.replace(/start|end/g,(e=>tr[e]))}function dr(e){return e.replace(/left|right|bottom|top/g,(e=>er[e]))}function fr(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function hr(e,t,n){let{reference:r,floating:o}=e;const i=sr(t),a=cr(t),l=lr(a),s=or(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(s){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(ir(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function pr(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=rr(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=fr(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=fr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:s}):v);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function gr(e){const t=Hn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Fn(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Gn(n)!==i||Gn(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function mr(e){return Sn(e)?e:e.contextElement}function vr(e){const t=mr(e);if(!Fn(t))return Qn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=gr(t);let a=(i?Gn(n.width):n.width)/r,l=(i?Gn(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const yr=Qn(0);function br(e){const t=Dn(e);return An()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:yr}function wr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=mr(e);let a=Qn(1);t&&(r?Sn(r)&&(a=vr(r)):a=vr(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Dn(e))&&t}(i,n,r)?br(i):Qn(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Dn(i),t=r&&Sn(r)?Dn(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=vr(o),t=o.getBoundingClientRect(),r=Hn(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=i,c+=a,n=Dn(o),o=n.frameElement}}return fr({width:u,height:d,x:s,y:c})}const Dr=[":popover-open",":modal"];function xr(e){return Dr.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function $r(e){return wr(xn(e)).left+Cn(e).scrollLeft}function Sr(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Dn(e),r=xn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=An();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=xn(e),n=Cn(e),r=e.ownerDocument.body,o=qn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=qn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+$r(e);const l=-n.scrollTop;return"rtl"===Hn(r).direction&&(a+=qn(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(xn(e));else if(Sn(t))r=function(e,t){const n=wr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Fn(e)?vr(e):Qn(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=br(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return fr(r)}function Fr(e,t){const n=Mn(e);return!(n===t||!Sn(n)||Rn(n))&&("fixed"===Hn(n).position||Fr(n,t))}function Br(e,t,n){const r=Fn(t),o=xn(t),i="fixed"===n,a=wr(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=Qn(0);if(r||!r&&!i)if(("body"!==wn(t)||En(o))&&(l=Cn(t)),r){const e=wr(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=$r(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function Er(e){return"static"===Hn(e).position}function Or(e,t){return Fn(e)&&"fixed"!==Hn(e).position?t?t(e):e.offsetParent:null}function kr(e,t){const n=Dn(e);if(xr(e))return n;if(!Fn(e)){let t=Mn(e);for(;t&&!Rn(t);){if(Sn(t)&&!Er(t))return t;t=Mn(t)}return n}let r=Or(e,t);for(;r&&On(r)&&Er(r);)r=Or(r,t);return r&&Rn(r)&&Er(r)&&!kn(r)?n:r||function(e){let t=Mn(e);for(;Fn(t)&&!Rn(t);){if(kn(t))return t;t=Mn(t)}return null}(e)||n}const Ar={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=xn(r),l=!!t&&xr(t.floating);if(r===a||l&&i)return n;let s={scrollLeft:0,scrollTop:0},c=Qn(1);const u=Qn(0),d=Fn(r);if((d||!d&&!i)&&(("body"!==wn(r)||En(a))&&(s=Cn(r)),Fn(r))){const e=wr(r);c=vr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:xn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?xr(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Tn(e,[],!1).filter((e=>Sn(e)&&"body"!==wn(e))),o=null;const i="fixed"===Hn(e).position;let a=i?Mn(e):e;for(;Sn(a)&&!Rn(a);){const t=Hn(a),n=kn(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||En(a)&&!n&&Fr(e,a))?r=r.filter((e=>e!==a)):o=t,a=Mn(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=Sr(t,n,o);return e.top=qn(r.top,e.top),e.right=Xn(r.right,e.right),e.bottom=Xn(r.bottom,e.bottom),e.left=qn(r.left,e.left),e}),Sr(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:kr,getElementRects:async function(e){const t=this.getOffsetParent||kr,n=this.getDimensions,r=await n(e.floating);return{reference:Br(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=gr(e);return{width:t,height:n}},getScale:vr,isElement:Sn,isRTL:function(e){return"rtl"===Hn(e).direction}};function Rr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=mr(e),u=o||i?[...c?Tn(c):[],...Tn(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&l?function(e,t){let n,r=null;const o=xn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-Jn(u)+"px "+-Jn(o.clientWidth-(c+d))+"px "+-Jn(o.clientHeight-(u+f))+"px "+-Jn(c)+"px",threshold:qn(0,Xn(1,s))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!s&&p.observe(c),p.observe(t));let g=s?wr(e):null;return s&&function t(){const r=wr(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,s&&cancelAnimationFrame(f)}}const Hr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=or(n),l=ir(n),s="y"===sr(n),c=["left","top"].includes(a)?-1:1,u=i&&s?-1:1,d=rr(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),s?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}},Cr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=rr(e,t),c={x:n,y:r},u=await pr(t,s),d=sr(or(o)),f=ar(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=nr(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=nr(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Mr=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=rr(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=or(o),y=or(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),w=f||(y||!g?[dr(l)]:function(e){const t=dr(e);return[ur(e),t,ur(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=ir(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(or(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(ur)))),i}(l,g,p,b));const D=[l,...w],x=await pr(t,m),$=[];let S=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(x[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=ir(e),o=cr(e),i=lr(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=dr(a)),[a,dr(a)]}(o,a,b);$.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:o,overflows:$}],!$.every((e=>e<=0))){var F,B;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(B=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},Lr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=rr(e,t),s=await pr(t,l),c=or(n),u=ir(n),d="y"===sr(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===u?"top":"bottom");const m=h-s.top-s.bottom,v=f-s.left-s.right,y=Xn(h-s[p],m),b=Xn(f-s[g],v),w=!t.middlewareData.shift;let D=y,x=b;if(d?x=u||w?Xn(b,v):v:D=u||w?Xn(y,m):m,w&&!u){const e=qn(s.left,0),t=qn(s.right,0),n=qn(s.top,0),r=qn(s.bottom,0);d?x=f-2*(0!==e||0!==t?e+t:qn(s.left,s.right)):D=h-2*(0!==n||0!==r?n+r:qn(s.top,s.bottom))}await a({...t,availableWidth:x,availableHeight:D});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},Tr=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=rr(e,t),u={x:n,y:r},d=sr(o),f=ar(d);let h=u[f],p=u[d];const g=rr(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes(or(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},Nr=(e,t,n)=>{const r=new Map,o={platform:Ar,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=hr(c,r,s),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:v,data:y,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,h={...h,[i]:{...h[i],...y}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=hr(c,f,s))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var jr="undefined"!=typeof document?i:a;function zr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!zr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!zr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Ir(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Pr(e,t){const n=Ir(e);return Math.round(t*n)/n}function Yr(e){const t=r.useRef(e);return jr((()=>{t.current=e})),t}const Wr=(e,t)=>({...Cr(e),options:[e,t]}),_r=(e,t)=>({...Tr(e),options:[e,t]}),Vr=(e,t)=>({...Mr(e),options:[e,t]}),Ur=(e,t)=>({...Lr(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var Zr=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Kr="undefined"==typeof Element,Xr=Kr?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,qr=!Kr&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Gr=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Jr=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Gr(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{Xr.call(a,Zr)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Gr(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Qr=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},eo=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Qr(e)?0:e.tabIndex},to=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},no=function(e){return"INPUT"===e.tagName},ro=function(e){return function(e){return no(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||qr(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},oo=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},io=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Xr.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Xr.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return oo(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=qr(e);if(a&&!a.shadowRoot&&!0===r(a))return oo(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&qr(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,u;l=!(null===(c=a=null===(s=i=qr(a))||void 0===s?void 0:s.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},ao=function(e,t){return!(t.disabled||Gr(t)||function(e){return no(e)&&"hidden"===e.type}(t)||io(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Xr.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},lo=function(e,t){return!(ro(t)||eo(t)<0||!ao(e,t))},so=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},co=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=eo(e);return n<0&&t&&!Qr(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(to).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},uo=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Jr([e],t.includeContainer,{filter:lo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:so}):function(e,t,n){if(Gr(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Zr));return t&&Xr.call(e,Zr)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,lo.bind(null,t)),co(n)},fo=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==Xr.call(e,Zr)&&lo(t,e)};const ho={...r},po=ho.useInsertionEffect||(e=>e());function go(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return po((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let mo=0;function vo(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(mo);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():mo=requestAnimationFrame(i)}var yo="undefined"!=typeof document?i:a;function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}let wo=!1,Do=0;const xo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Do++;const $o=ho.useId||function(){const[e,t]=r.useState((()=>wo?xo():void 0));return yo((()=>{null==e&&t(xo())}),[]),r.useEffect((()=>{wo=!0}),[]),e};let So;"production"!==process.env.NODE_ENV&&(So=new Set);const Fo=r.createContext(null),Bo=r.createContext(null),Eo=()=>{var e;return(null==(e=r.useContext(Fo))?void 0:e.id)||null},Oo=()=>r.useContext(Bo);function ko(e){return"data-floating-ui-"+e}function Ao(e){const t=l(e);return yo((()=>{t.current=e})),t}function Ro(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Ho=new WeakMap,Co=new WeakSet,Mo={},Lo=0;const To=e=>e&&(e.host||To(e.parentNode)),No=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=To(t);return e.contains(n)?n:null})).filter((e=>null!=e));function jo(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=Wn(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=No(t,e),l=new Set,s=new Set(a),c=[];Mo[o]||(Mo[o]=new WeakMap);const u=Mo[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==wn(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Ho.get(t)||0)+1,a=(u.get(t)||0)+1;Ho.set(t,r),u.set(t,a),c.push(t),1===r&&n&&Co.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),Lo++,()=>{c.forEach((e=>{const t=(Ho.get(e)||0)-1,n=(u.get(e)||0)-1;Ho.set(e,t),u.set(e,n),t||(!Co.has(e)&&i&&e.removeAttribute(i),Co.delete(e)),n||e.removeAttribute(o)})),Lo--,Lo||(Ho=new WeakMap,Ho=new WeakMap,Co=new WeakSet,Mo={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const zo=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Io(e,t){const n=uo(e,zo());"prev"===t&&n.reverse();const r=n.indexOf(Nn(Wn(e)));return n.slice(r+1)[0]}function Po(){return Io(document.body,"next")}function Yo(){return Io(document.body,"prev")}function Wo(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!jn(n,r)}function _o(e){uo(e,zo()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Vo(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Uo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Zo(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Ko=r.forwardRef((function(e,t){const[n,o]=r.useState();yo((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",Zo),()=>{document.removeEventListener("keydown",Zo)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[ko("focus-guard")]:"",style:Uo};return r.createElement("span",bo({},e,i))})),Xo=r.createContext(null),qo=ko("portal");function Go(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=$o(),i=Jo(),[a,l]=r.useState(null),s=r.useRef(null);return yo((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{s.current=null}))}),[a]),yo((()=>{if(!o)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(qo,""),e.appendChild(n),s.current=n,l(n)}),[t,o]),yo((()=>{if(!o)return;if(s.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Sn(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(qo,""),e=r||e,e.appendChild(a),s.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,s]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&Wo(e)){("focusin"===e.type?Vo:_o)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(Xo.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:s})),[i,a])},h&&a&&r.createElement(Ko,{"data-type":"outside",ref:c,onFocus:e=>{if(Wo(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=Yo()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:Uo}),a&&x(t,a),h&&a&&r.createElement(Ko,{"data-type":"outside",ref:u,onFocus:e=>{if(Wo(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=Po()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const Jo=()=>r.useContext(Xo),Qo=20;let ei=[];function ti(e){ei=ei.filter((e=>e.isConnected));let t=e;if(t&&"body"!==wn(t)){if(!fo(t,zo())){const e=uo(t,zo())[0];e&&(t=e)}ei.push(t),ei.length>Qo&&(ei=ei.slice(-Qo))}}function ni(){return ei.slice().reverse().find((e=>e.isConnected))}const ri=r.forwardRef((function(e,t){return r.createElement("button",bo({},e,{type:"button",ref:t,tabIndex:-1,style:Uo}))}));function oi(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:s=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:v,elements:{domReference:y,floating:b}}=t,w="number"==typeof l&&l<0,D=!!(x=y)&&"combobox"===x.getAttribute("role")&&Zn(x)&&w;var x;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,S=Ao(i),F=Ao(l),B=Ao(s),E=Oo(),O=Jo(),k=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),H=r.useRef(!1),C=null!=O,M=r.useCallback((function(e){return void 0===e&&(e=b),e?uo(e,zo()):[]}),[b]),L=r.useCallback((e=>{const t=M(e);return S.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,S,M]);function T(e){return!o&&u&&c?r.createElement(ri,{ref:"start"===e?k:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){jn(b,Nn(Wn(b)))&&0===M().length&&!D&&Kn(e);const t=L(),n=Vn(e);"reference"===S.current[0]&&n===y&&(Kn(e),e.shiftKey?vo(t[t.length-1]):vo(t[1])),"floating"===S.current[1]&&n===b&&e.shiftKey&&(Kn(e),vo(t[0]))}}const t=Wn(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,y,b,c,S,D,M,L]),r.useEffect((()=>{if(!o&&d)return b&&Fn(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){H.current=!0,setTimeout((()=>{H.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(jn(y,t)||jn(b,t)||jn(t,b)||jn(null==O?void 0:O.portalNode,t)||null!=t&&t.hasAttribute(ko("focus-guard"))||E&&(Ro(E.nodesRef.current,p).find((e=>{var n,r;return jn(null==(n=e.context)?void 0:n.elements.floating,t)||jn(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!H.current&&t!==ni()&&(R.current=!0,g(!1,e))}))}}),[o,y,b,c,p,E,O,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==O||null==(e=O.portalNode)?void 0:e.querySelectorAll("["+ko("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,A.current,S.current.includes("reference")||D?y:null].filter((e=>null!=e)),n=c||D?jo(e,$,!$):jo(e);return()=>{n()}}}),[o,y,b,c,S,O,D,$]),yo((()=>{if(o||!b)return;const e=Nn(Wn(b));queueMicrotask((()=>{const t=L(b),n=F.current,r=("number"==typeof n?t[n]:n.current)||b,o=jn(b,e);w||o||!f||vo(r,{preventScroll:r===b})}))}),[o,f,b,w,L,F]),yo((()=>{if(o||!b)return;let e=!1;const t=Wn(b),n=Nn(t);let r=v.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&ti(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(Pn()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||In(i)))}return ti(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=Nn(t),o=jn(b,n)||E&&Ro(E.nodesRef.current,p).some((e=>{var t;return jn(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&ti(h.domReference.current);const a=ni();B.current&&!R.current&&Fn(a)&&(a===n||n===t.body||o)&&vo(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,v,h,m,E,p]),yo((()=>{if(!o&&O)return O.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{O.setFocusManagerState(null)}}),[o,O,c,f,g,h,d]),yo((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");S.current.includes("floating")||Nn(Wn(b))!==h.domReference.current&&0===M().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,S,M,w]);const N=!o&&$&&(C||c);return r.createElement(r.Fragment,null,N&&r.createElement(Ko,{"data-type":"inside",ref:null==O?void 0:O.beforeInsideRef,onFocus:e=>{if(c){const e=L();vo("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(R.current=!1,Wo(e,O.portalNode)){const e=Po()||y;null==e||e.focus()}else{var t;null==(t=O.beforeOutsideRef.current)||t.focus()}}}),!D&&T("start"),n,T("end"),N&&r.createElement(Ko,{"data-type":"inside",ref:null==O?void 0:O.afterInsideRef,onFocus:e=>{if(c)vo(L()[0]);else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(d&&(R.current=!0),Wo(e,O.portalNode)){const e=Yo()||y;null==e||e.focus()}else{var t;null==(t=O.afterOutsideRef.current)||t.focus()}}}))}function ii(e){return Fn(e.target)&&"BUTTON"===e.target.tagName}function ai(e){return Zn(e)}const li={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},si={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},ci=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function ui(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=$o(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=Eo();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!Sn(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=So)&&e.has(o)||(null==(i=So)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=go(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function di(e){void 0===e&&(e={});const{nodeId:t}=e,n=ui({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[s,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Oo();yo((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);zr(h,o)||p(o);const[g,m]=r.useState(null),[v,y]=r.useState(null),b=r.useCallback((e=>{e!==S.current&&(S.current=e,m(e))}),[]),w=r.useCallback((e=>{e!==F.current&&(F.current=e,y(e))}),[]),x=a||g,$=l||v,S=r.useRef(null),F=r.useRef(null),B=r.useRef(d),E=null!=c,O=Yr(c),k=Yr(i),A=r.useCallback((()=>{if(!S.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),Nr(S.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!zr(B.current,t)&&(B.current=t,D.flushSync((()=>{f(t)})))}))}),[h,t,n,k]);jr((()=>{!1===u&&B.current.isPositioned&&(B.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);jr((()=>(R.current=!0,()=>{R.current=!1})),[]),jr((()=>{if(x&&(S.current=x),$&&(F.current=$),x&&$){if(O.current)return O.current(x,$,A);A()}}),[x,$,A,O,E]);const H=r.useMemo((()=>({reference:S,floating:F,setReference:b,setFloating:w})),[b,w]),C=r.useMemo((()=>({reference:x,floating:$})),[x,$]),M=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!C.floating)return e;const t=Pr(C.floating,d.x),r=Pr(C.floating,d.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Ir(C.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,C.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:H,elements:C,floatingStyles:M})),[d,A,H,C,M])}({...e,elements:{...i,...s&&{reference:s}}}),p=r.useCallback((e=>{const t=Sn(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(Sn(e)||null===e)&&(d.current=e,l(e)),(Sn(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!Sn(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),v=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),y=r.useMemo((()=>({...h,...o,refs:m,elements:v,nodeId:t})),[h,m,v,t,o]);return yo((()=>{o.dataRef.current.floatingContext=y;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=y)})),r.useMemo((()=>({...h,context:y,refs:m,elements:v})),[h,m,v,y])}const fi="active",hi="selected";function pi(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[fi]:t,[hi]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[fi,hi].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const gi=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function mi(e,t){return"function"==typeof e?e(t):e}function vi(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,s]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==l||s("unmounted"),yo((()=>{if(o){if(n){s("initial");const e=requestAnimationFrame((()=>{s("open")}));return()=>{cancelAnimationFrame(e)}}s("close")}}),[n,o]),{isMounted:c,status:l}}var yi=function(e,t){return yi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},yi(e,t)};var bi=function(){return bi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},bi.apply(this,arguments)};var wi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Di=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xi="object"==typeof wi&&wi&&wi.Object===Object&&wi,$i="object"==typeof self&&self&&self.Object===Object&&self,Si=xi||$i||Function("return this")(),Fi=Si,Bi=function(){return Fi.Date.now()},Ei=/\s/;var Oi=function(e){for(var t=e.length;t--&&Ei.test(e.charAt(t)););return t},ki=Oi,Ai=/^\s+/;var Ri=function(e){return e?e.slice(0,ki(e)+1).replace(Ai,""):e},Hi=Si.Symbol,Ci=Hi,Mi=Object.prototype,Li=Mi.hasOwnProperty,Ti=Mi.toString,Ni=Ci?Ci.toStringTag:void 0;var ji=function(e){var t=Li.call(e,Ni),n=e[Ni];try{e[Ni]=void 0;var r=!0}catch(e){}var o=Ti.call(e);return r&&(t?e[Ni]=n:delete e[Ni]),o},zi=Object.prototype.toString;var Ii=ji,Pi=function(e){return zi.call(e)},Yi=Hi?Hi.toStringTag:void 0;var Wi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Yi&&Yi in Object(e)?Ii(e):Pi(e)},_i=function(e){return null!=e&&"object"==typeof e};var Vi=Ri,Ui=Di,Zi=function(e){return"symbol"==typeof e||_i(e)&&"[object Symbol]"==Wi(e)},Ki=/^[-+]0x[0-9a-f]+$/i,Xi=/^0b[01]+$/i,qi=/^0o[0-7]+$/i,Gi=parseInt;var Ji=Di,Qi=Bi,ea=function(e){if("number"==typeof e)return e;if(Zi(e))return NaN;if(Ui(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ui(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Vi(e);var n=Xi.test(e);return n||qi.test(e)?Gi(e.slice(2),n?2:8):Ki.test(e)?NaN:+e},ta=Math.max,na=Math.min;var ra=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function g(){var e=Qi();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-s);return d?na(n,i-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Qi(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(g,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=ea(t)||0,Ji(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ta(ea(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:m(Qi())},v},oa=ra,ia=Di;var aa=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ia(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),oa(e,t,{leading:r,maxWait:t,trailing:o})},la=function(e,t,n,r){switch(t){case"debounce":return ra(e,n,r);case"throttle":return aa(e,n,r);default:return e}},sa=function(e){return"function"==typeof e},ca=function(){return"undefined"==typeof window},ua=function(e){return e instanceof Element||e instanceof HTMLDocument},da=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&sa(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ca()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ca())return null;if(t)return document.querySelector(t);if(r&&ua(r))return r;if(n.targetRef&&ua(n.targetRef.current))return n.targetRef.current;var o=$(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=da(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ca()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return sa(t)?"renderProp":sa(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,ca()||(n.resizeHandler=la(n.createResizeHandler,o,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}yi(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ca()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return d(e,c)}return d(e,s);case"childArray":return(e=o).map((function(e){return!!e&&d(e,s)}));default:return r.createElement(a,null)}}}(f);var fa=ca()?a:i;const ha=v.div`
    display: flex;
    flex-direction: column;
`,pa=e=>"right"===e?"bottom-end":"bottom-start",ga=({enabled:o,isOpen:i,onOpen:a,onClose:c,onDismiss:u,renderElement:d,renderDropdown:f,zIndex:h=50,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{const y=l(null),b=l(null),{width:w}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=l(n),v=l(null),y=null!=h?h:v,b=l(),w=s({width:void 0,height:void 0}),D=w[0],x=w[1];return fa((function(){if(!ca()){var e=da(g,x,u,f);b.current=la((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!ca()&&e({width:r,height:o}),m.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,u,f,g,p,y.current]),bi({ref:y},D)}({targetRef:y,handleHeight:!1}),{refs:D,floatingStyles:x,context:$}=di({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==u||u():e&&!i?null==a||a():!e&&i&&(null==c||c(n))},whileElementsMounted:Rr,placement:pa(m),middleware:[(S=g,{...Hr(S),options:[S,F]}),Vr(),Wr({limiter:_r()}),Ur({apply({availableHeight:e}){b.current&&Object.assign(b.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}})]});var S,F;const{isMounted:B,styles:E}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,s=e.placement,c=s.split("-")[0],u=r.useMemo((()=>({side:c,placement:s})),[c,s]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...mi(a,u),...mi(n,u)}))),{isMounted:m,status:v}=vi(e,{duration:l}),y=Ao(n),b=Ao(o),w=Ao(i),D=Ao(a);return yo((()=>{const e=mi(y.current,u),t=mi(w.current,u),n=mi(D.current,u),r=mi(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&g({transitionProperty:Object.keys(r).map(gi).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;g({transitionProperty:Object.keys(r).map(gi).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,y,b,D,f,v,u]),{isMounted:m,styles:p}}($,{initial:{opacity:0},open:{opacity:1},duration:300}),O=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(Yn(f.current,!0)&&u||"click"!==s&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===s&&f.current?f.current=void 0:Yn(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||ii(e)||(" "!==e.key||ai(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||ii(e)||ai(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[l,i,s,u,d,a,c,n,o])}($,{enabled:o,toggle:p}),k=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:s}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:v}=t,y=Oo(),b=go("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,D=r.useRef(!1),x=r.useRef(!1),{escapeKey:$,outsidePress:S}=ci(m),{escapeKey:F,outsidePress:B}=ci(v),E=go((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=s.current.floatingContext)?void 0:t.nodeId,i=y?Ro(y.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),O=go((e=>{var t;const n=()=>{var t;E(e),null==(t=Vn(e))||t.removeEventListener("keydown",n)};null==(t=Vn(e))||t.addEventListener("keydown",n)})),k=go((e=>{var t;const n=D.current;D.current=!1;const r=x.current;if(x.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=Vn(e),c="["+ko("inert")+"]",u=Wn(l).querySelectorAll(c);let d=Sn(i)?i:null;for(;d&&!Rn(d);){const e=Mn(d);if(Rn(e)||!Sn(e))break;d=e}if(u.length&&Sn(i)&&!i.matches("html,body")&&!jn(i,l)&&Array.from(u).every((e=>!jn(d,e))))return;if(Fn(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===Hn(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=s.current.floatingContext)?void 0:t.nodeId,p=y&&Ro(y.nodesRef.current,h).some((t=>{var n;return _n(e,null==(n=t.context)?void 0:n.elements.floating)}));if(_n(e,l)||_n(e,a)||p)return;const g=y?Ro(y.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=go((e=>{var t;const n=()=>{var t;k(e),null==(t=Vn(e))||t.removeEventListener(f,n)};null==(t=Vn(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}s.current.__escapeKeyBubbles=$,s.current.__outsidePressBubbles=S;const t=Wn(l);u&&t.addEventListener("keydown",F?O:E,F),w&&t.addEventListener(f,B?A:k,B);let r=[];return g&&(Sn(a)&&(r=Tn(a)),Sn(l)&&(r=r.concat(Tn(l))),!Sn(i)&&i&&i.contextElement&&(r=r.concat(Tn(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",F?O:E,F),w&&t.removeEventListener(f,B?A:k,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[s,l,a,i,u,w,f,n,o,g,c,$,S,E,F,O,k,B,A]),r.useEffect((()=>{D.current=!1}),[w,f]),r.useMemo((()=>c?{reference:{onKeyDown:E,[li[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){x.current=!0},onMouseUp(){x.current=!0},[si[f]]:()=>{D.current=!0}}}:{}),[c,h,f,p,o,E])}($,{enabled:o}),{getReferenceProps:A,getFloatingProps:R}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>pi(t,e,"reference")),t),o=r.useCallback((t=>pi(t,e,"floating")),t),i=r.useCallback((t=>pi(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([O,k]);return e(n,{children:[t("div",Object.assign({ref:e=>{y.current=e,D.setReference(e)}},A(),{children:d()})),B&&t(Go,{children:t(oi,Object.assign({context:$,modal:!1,initialFocus:b,returnFocus:!1},{children:t("div",Object.assign({ref:D.setFloating,style:Object.assign(Object.assign({},x),{zIndex:h})},R(),{children:t(ha,Object.assign({ref:b,style:Object.assign({},E),inert:E.opacity<1?"":void 0},{children:f({elementWidth:w})}))}))}))})]})},ma={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},va=e=>Object.keys(ma).reduce(((t,n)=>{const r=ma[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ya=va("max-width"),ba=(va("min-width"),v.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${ya.mobileL} {
        min-width: 17.5rem;
    }
`);var wa={exports:{}};wa.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var D="$isDayjsObject",x=function(e){return e instanceof B||!(!e||!e[D])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},F=y;F.l=$,F.i=x,F.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return F},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),h=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?v-w:v+(6-w),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=F.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[F.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=F.p(u),g=function(e){var t=S(h);return F.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return F.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return F.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return l+1;case"MM":return F.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return F.s(a,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=F.p(f),v=S(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,w=function(){return F.m(g,v)};switch(m){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case s:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:F.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return F.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return S.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,B,S),e.$i=!0),S},S.locale=$,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var Da=O(wa.exports),xa={exports:{}};xa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],h=u&&u[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),u=i.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=l||0,y=s||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,w)):new Date(g,m,p,v,y,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var $a,Sa,Fa=O(xa.exports),Ba={exports:{}},Ea=O(Ba.exports=($a={year:0,month:1,day:2,hour:3,minute:4,second:5},Sa={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Sa[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Sa[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=$a[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Oa={exports:{}};Oa.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var ka=O(Oa.exports),Aa={exports:{}};Aa.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ra=O(Aa.exports),Ha={exports:{}};Ha.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ca,Ma=O(Ha.exports);Da.extend(ka),Da.extend(Ra),Da.extend(Ma),Da.extend(Fa),Da.extend(Ea),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Da(t).startOf("week");return La(n).map((e=>Ta(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ta(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Da(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Da(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Da(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Da(r):void 0,o?Da(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ca||(Ca={}));const La=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ta=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Na=[1,3,5,7,8,10,12],ja=[4,6,9,11];var za,Ia,Pa,Ya;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Na.includes(i)?Math.min(o,31).toString():ja.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Da(e,n);return Da(t,n).diff(r,"minute")},e.toDayjs=e=>e?Da(e):Da(),e.addMinutesToTime=(e,t,n="HH:mm")=>Da(e,n).add(t,"minutes").format(n)}(za||(za={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Da(e).isBefore(r,"day"))||!(!o||!Da(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Da(e).isValid())return e}return""}}(Ia||(Ia={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Pa||(Pa={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ya||(Ya={}));const Wa=e=>{const[t,n]=s(e),r=l(e);return[t,h((e=>{r.current=e,n(e)}),[]),r]},_a=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Va=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ua=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Va} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Za=v(Ua)`
    animation-delay: -0.45s;
`,Ka=v(Ua)`
    animation-delay: -0.3s;
`,Xa=v(Ua)`
    animation-delay: -0.15s;
`,qa=v.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Gt.Button.Danger.Border:Kt.Primary};

                    color: ${e.$buttonIsDanger?Gt.Button.Danger.Primary:Kt.Primary};
                `;case"light":return y`
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid ${Kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Gt.Button.Danger.Primary:Kt.Primary};
                `;case"disabled":return y`
                    background-color: ${Kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Kt.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Gt.Button.Danger.Primary:Kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Gt.Button.Danger.Hover:Kt.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Gt.Button.Danger.BackgroundColor:Kt.Primary};
                    border: 1px solid transparent;

                    ${ya.mobileL} {
                        width: 100%;
                    }

                    color: ${Kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${ln("H5","semibold")}

                    ${ya.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${ln("H4","semibold")}

                    ${ya.mobileS} {
                        height: auto;
                    }
                `}
`,Ga=v((({color:n,className:r,size:o=18})=>e(_a,Object.assign({className:r,$size:o,$color:n},{children:[t(Ua,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Za,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Ka,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Xa,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Gt.Button.Danger.Primary:Kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Kt.Neutral[3](e);break;default:t=Kt.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Ja={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(qa,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Ga,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(qa,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Ga,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},Qa=v.button`
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Kt.Neutral[7]};
            `}
    }
`,el=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=B(e,["children","focusHighlight","focusOutline","type"]);return t(Qa,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),tl=y`
    color: ${Kt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,nl=v(S)`
    ${tl}
`,rl=v(F)`
    ${tl}
`,ol=v(m)`
    ${tl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,il=v.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,al=v.div`
    display: flex;
    flex: 1;
    position: relative;
`,ll=v.div`
    isolation: isolate;
    width: 100%;
`,sl=v.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Kt.Neutral[8]};

    ${e=>{if(!e.$visible)return y`
                display: none;
            `}}
`,cl=v.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,ul=v.div`
    display: flex;
`,dl=v.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?y`
                display: none;
            `:e.$expanded?y`
                ${ol} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,fl=v.p`
    ${ln("H5","regular")}
`,hl=v.div`
    display: flex;
`,pl=v(el)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,gl=v.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,ml=v(Ja.Small)`
    flex: 1;
`,vl=v.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return y`
                    gap: 0.5rem 2.5rem;
                `;case"input":return y`
                    gap: 0.5rem 1rem;
                `}}}
`,yl=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?y`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Kt.Shadow.Accent};
                    border: 1px solid ${Kt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return y`
                    background-color: ${Kt.Accent.Light[6](e)};
                `;case"selected-month":return y`
                    background-color: ${Kt.Accent.Light[5](e)};
                    border: 1px solid ${Kt.Primary(e)};
                `}}}
`,bl=v(cn.H5)`
    ${e=>{if(e.$disabledDisplay)return y`
                color: ${Kt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return y`
                    color: ${Kt.Neutral[3](e)};
                `;case"selected-month":return y`
                    ${ln("H5","semibold")}
                    color: ${Kt.Primary(e)};
                `}}}
`,wl=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const f=p((()=>Ca.generateMonths(Da(e))),[e]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},g=e=>{const t=e.format("MMMM"),n=(r=e,!Ca.isWithinRange(r,s?Da(s):void 0,c?Da(c):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":Da().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||u,month:t,variant:o}};return f.length?t(vl,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=g(e);return t(yl,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(bl,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},Dl=v.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return y`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return y`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,xl=v.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?y`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Kt.Shadow.Accent};
                    border: 1px solid ${Kt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return y`
                    background: ${Kt.Accent.Light[6](e)};
                `;case"selected-year":return y`
                    background: ${Kt.Accent.Light[5](e)};
                    border: 1px solid ${Kt.Primary(e)};
                `}}};
`,$l=v(cn.H5)`
    ${e=>{if(e.$disabledDisplay)return y`
                color: ${Kt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return y`
                    color: ${Kt.Neutral[3](e)};
                `;case"selected-year":return y`
                    ${ln("H5","semibold")}
                    color: ${Kt.Primary(e)};
                `;case"other-decade":return y`
                    color: ${Kt.Neutral[4](e)};
                `}}}
`,Sl=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const f=p((()=>Ca.generateDecadeOfYears(Da(e))),[e]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},g=e=>{const t=[0,11].includes(f.indexOf(e)),n=e.year(),r=(o=e,!Ca.isWithinRange(o,s?Da(s):void 0,c?Da(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":Da().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||u,year:n,variant:a}};return f.length?t(Dl,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=g(e);return t(xl,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t($l,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Fl=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:c,type:u,minDate:d,maxDate:f,currentFocus:h,selectedStartDate:p,selectedEndDate:m,selectWithinRange:v,dynamicHeight:y=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:D,doneButtonDisabled:x,onDismiss:$,showNavigationHeader:S=!0,getLeftArrowDate:F,getRightArrowDate:E,isLeftArrowDisabled:O,isRightArrowDisabled:k,getMonthHeaderLabel:A,getYearHeaderLabel:R}=r,H=B(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,M]=s(za.toDayjs(c)),[L,T]=s(za.toDayjs(c)),[N,j]=s("default"),z=l(null),I=l(null),P=l();g(o,(()=>({defaultView(){j("default")},resetView(){const e=za.toDayjs(c);M(e),T(e),j("default")},setCalendarDate(e){const t=za.toDayjs(e);M(t),T(t)}}))),a((()=>{const e=za.toDayjs(c);M(e),T(e)}),[c]),a((()=>{K(L)}),[L]);const Y=()=>{"month-options"!==N?(j("month-options"),P.current.focus()):(j("default"),M(L))},W=()=>{"default"!==N?(j("default"),M(L)):j("year-options")},_=()=>{P.current.focus();const e=F?F(C):C.subtract(1,"month");switch(N){case"default":T(e),M(e);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},V=()=>{P.current.focus();const e=E?E(C):C.add(1,"month");switch(N){case"default":T(e),M(e);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},U=e=>{M(e),T(e),D||j("default")},Z=()=>{const e=za.toDayjs(c);M(e),T(e),"default"===N?X("reset"):j("default")},K=e=>{w&&w(e)},X=e=>{$&&$(e)},q=()=>{if(!d||b)return!1;const e=Da(d);return"month-options"===N?!Ca.isPreviousYearWithinRange(C,e):"year-options"===N?!Ca.isPreviousDecadeWithinRange(C,e):O?O(C):!Ca.isPreviousMonthWithinRange(C,e)},G=()=>{if(!f||b)return!1;const e=Da(f);return"month-options"===N?!Ca.isNextYearWithinRange(C,e):"year-options"===N?!Ca.isNextDecadeWithinRange(C,e):k?k(C):!Ca.isNextMonthWithinRange(C,e)},J=()=>{if("year-options"===N){const{beginDecade:e,endDecade:t}=Ca.getStartEndDecade(C);return`${e} to ${t}`}return R?R(C):C.format("YYYY")},Q=()=>{const r=A?A(C):C.format("MMM");return e(n,{children:[e(dl,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===N,$visible:"default"===N,id:"month-dropdown",onClick:Y},{children:[t(fl,{children:r}),t(ol,{})]})),e(dl,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==N,id:"year-dropdown",onClick:W},{children:[t(fl,{children:J()}),t(ol,{})]}))]})},ee=()=>{switch(N){case"month-options":return t(wl,{type:u,calendarDate:C,currentFocus:h,minDate:d,maxDate:f,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:L,isNewSelection:v,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t(Sl,{type:u,calendarDate:C,currentFocus:h,minDate:d,maxDate:f,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:L,isNewSelection:v,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(il,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},H,{children:[S&&e(cl,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(ul,{children:Q()}),e(hl,{children:[t(pl,Object.assign({"data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:_},{children:t(nl,{})})),t(pl,Object.assign({"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(rl,{})}))]})]})),t(al,{children:(()=>{const r="function"==typeof i?i({calendarDate:L,currentView:N}):i;return e(n,y?{children:["default"===N&&r,ee()]}:{children:[t(ll,{children:r}),t(sl,Object.assign({$visible:"default"!==N},{children:ee()}))]})})()}),(()=>{if(!D)return;const n=!!("default"===N)&&x;return e(gl,{children:[t(ml,Object.assign({ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(ml,Object.assign({"data-testid":"done-button",ref:z,type:"button",onClick:()=>{n||(M(L),"default"===N?X("confirmed"):j("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Bl=v.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,El=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Ol=v.div`
    grid-column: 1 / -1;
    display: flex;
`;v.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const kl=v.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return y`
                    left: 0;
                `;case"right":return y`
                    right: 0;
                `}}}
`,Al=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;v(cn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return y`
                ${ln("H5","semibold")};
                color: ${Kt.Accent.Light[2]};
            `;if(t)return y`
                color: ${Kt.Neutral[4]};
            `;if(n)return y`
                ${ln("H5","semibold")};
                color: ${Kt.Primary};
            `;switch(r){case"other-month":return y`
                    color: ${Kt.Neutral[4]};
                `;case"today":return y`
                    color: ${Kt.Neutral[3]};
                `;case"default":return y`
                    color: ${Kt.Neutral[1]};
                `}}}
`,v(kl)`
    ${e=>{const{$selected:t}=e;if(t)return y`
                border-top: 1px solid ${Kt.Accent.Light[4]};
                border-bottom: 1px solid ${Kt.Accent.Light[4]};
                background-color: ${Kt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?y`
                border-top: 1px dashed ${Kt.Accent.Light[4]};
                border-bottom: 1px dashed ${Kt.Accent.Light[4]};
                background-color: ${Kt.Accent.Light[6]};
            `:n?y`
                background-color: ${Kt.Accent.Light[4]};
            `:void 0}}
`,v(Al)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?y`
                background: ${Kt.Accent.Light[5]};
                border: 1px solid ${Kt.Primary};
            `:t?y`
                box-shadow: 0px 0px 4px 1px ${Kt.Shadow.Accent};
                border: 1px solid ${Kt.Accent.Light[1]};
                background-color: ${Kt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?y`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Kt.Shadow.Accent};
                    border: 1px solid ${Kt.Accent.Light[1]};
                    background-color: ${Kt.Neutral[8]};
                }
            `:n?y`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?y`
                border: 1px solid ${Kt.Accent.Light[1]};
                background: ${Kt.Accent.Light[4]};

                :hover {
                    background: ${Kt.Accent.Light[4]};
                }
            `:t?y`
                color: ${Kt.Neutral[4]};
            `:"today"===r?y`
                    background: ${Kt.Accent.Light[5]};
                `:void 0}}
`;const Rl=e=>{let t=Kt.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Kt.Accent.Light[5];break;case"hover-dash":t=Kt.Accent.Light[6],n=`1px dashed ${Kt.Accent.Light[4](e)}`;break;case"hover-current":t=Kt.Neutral[8],n=`1px solid ${Kt.Primary(e)}`;break;case"selected":t=Kt.Accent.Light[5],n=`1px solid ${Kt.Accent.Light[4](e)}`;break;case"selected-outline":t=Kt.Accent.Light[5],n=`1px solid ${Kt.Primary(e)}`;break;case"overlap":t=Kt.Accent.Light[4],n=`1px solid ${Kt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Kt.Accent.Light[4],n=`1px solid ${Kt.Primary(e)}`}return{color:t,border:n}},Hl=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Cl=v.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Rl(e);return y`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Ml=v(Cl)`
    left: 0;
`,Ll=v(Cl)`
    right: 0;
`,Tl=v.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Kt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Nl=v(Tl)`
    left: 0;
`,jl=v(Tl)`
    right: 0;
`,zl=v.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Rl(e);return y`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&y`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Il=v(zl)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Kt.Shadow.Accent};
    }
`,Pl=v(zl)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Kt.Shadow.Accent};
    }
`,Yl=v(cn.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?y`
                    ${ln("H5","semibold")};
                    color: ${Kt.Accent.Light[2]};
                `:y`
                color: ${Kt.Neutral[4]};
            `;switch(n){case"selected":return y`
                    ${ln("H5","semibold")};
                    color: ${Kt.Primary};
                `;case"current":return y`
                    color: ${Kt.Neutral[3]};
                `;case"unavailable":return y`
                    color: ${Kt.Neutral[4]};
                `;default:return y`
                    color: ${Kt.Neutral[1]};
                `}}}
`,Wl=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:l,labelType:s,disabled:c,interactive:u,date:d,onSelect:f,onHover:h,onHoverEnd:p})=>e(Hl,{children:[t(Nl,{$shadow:n&&a}),t(Ml,{$type:n,$shadow:n&&a}),t(Il,{$type:o,$shadow:o&&l}),t(jl,{$shadow:r&&a}),t(Ll,{$type:r,$shadow:r&&a}),t(Pl,{$type:i,$shadow:i&&l}),t(Yl,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:u,onClick:()=>{f(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),_l=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,onSelect:f,onHover:h})=>{const p=Ca.isDisabledDay(e,c,l,s),g=!p||u,m=()=>{const e=Da(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let l,s,c,u;return"start"===i&&o&&t&&(r&&n?(c=a,u=o):(l=a,s=r||o)),"end"===i&&r&&n&&(o&&t?(c=r,u=a):(l=o||r,s=a)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:u}},v={date:e,calendarDate:n,disabled:p,interactive:g,onSelect:()=>{f(e,!g)},onHover:()=>{h(e.format("YYYY-MM-DD"),!g)}};return t(Wl,Object.assign({},v,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(Da().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(o,"day");return(r&&n||o&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=m();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};Da.extend(ka);const Vl=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:f,allowDisabledSelection:h})=>{const g=p((()=>Ca.generateDays(n)),[n]),[m,v]=s(""),y=(e,t)=>{t&&!h||l(e)},b=(e,t)=>{t&&!h||(v(e),c(e))},w=()=>{v(""),c("")};return e(Bl,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,n)=>t(El,{children:t(cn.H6,Object.assign({weight:"semibold"},{children:Da(e).format("ddd")}))},`week-day-${n}`))),g.map(((e,l)=>t(Ol,Object.assign({onMouseLeave:w},{children:e.map(((e,l)=>t(_l,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:m,currentFocus:r,minDate:d,maxDate:f,disabledDates:o,allowDisabledSelection:h,isNewSelection:u,onSelect:y,onHover:b},`day-${l}`)))}),l)))]}))},Ul=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:u,onHover:d})=>{const f=Ca.isDisabledDay(e,l,i,a),h=!f||s,{start:p,end:g}=r?Ca.getFixedRangeStartEnd(za.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:v}=o?Ca.getFixedRangeStartEnd(za.toDayjs(o),c):{start:void 0,end:void 0},y=r&&e.isBetween(p,g,"day","[]"),b=o&&e.isBetween(m,v,"day","[]"),w=y&&e.isSame(p,"day")||b&&e.isSame(m,"day"),D=y&&e.isSame(g,"day")||b&&e.isSame(v,"day"),x=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},$={date:e,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Wl,Object.assign({},$,(()=>{const t={};return y||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":Da().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&x(t,"hover-dash",n===m,n===v),y&&x(t,"selected",n===p,n===g),y&&b&&x(t,"overlap",w,D),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=p&&m<g&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Zl=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u,numberOfDays:d})=>{const f=p((()=>Ca.generateDays(n)),[n]),[h,g]=s(""),m=(e,t)=>{t&&!u||(i(e),e&&!Da(e).isSame(e,"month")&&g(""))},v=(e,t)=>{t&&!u||(g(e),a(e))},y=()=>{g(""),a("")};return e(Bl,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(El,{children:t(cn.H6,Object.assign({weight:"semibold"},{children:Da(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(Ol,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Ul,{date:e,calendarDate:n,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:v,numberOfDays:d},`day-${i}`)))}),i)))]}))},Kl=v.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Kt.Neutral[8]};

    ${e=>{if("input"===e.$type)return y`
                border: 1px solid ${Kt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Xl=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:u})=>{const d=Ca.isDisabledDay(e,l,i,a),f=!d||s,{start:h,end:p}=Ca.getWeekStartEnd(za.toDayjs(r)),{start:g,end:m}=Ca.getWeekStartEnd(za.toDayjs(o)),v=r&&e.isBetween(h,p,"day","[]"),y=o&&e.isBetween(g,m,"day","[]"),b=v&&e.isSame(h)||y&&e.isSame(g),w=v&&e.isSame(p)||y&&e.isSame(m),D={date:e,calendarDate:n,disabled:d,interactive:f,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Wl,Object.assign({},D,(()=>{const t={};return v||y?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":Da().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return v&&y?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):v?t="selected-outline":y&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},ql=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u})=>{const d=p((()=>Ca.generateDays(n)),[n]),[f,h]=s(""),g=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!Da(e).isSame(n,"month")&&h("")},m=(e,t)=>{t&&!u||(h(e),a(e))},v=()=>{h(""),a("")};return e(Bl,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,n)=>t(El,{children:t(cn.H6,Object.assign({weight:"semibold"},{children:Da(e).format("ddd")}))},`week-day-${n}`))),d.map(((e,i)=>t(Ol,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(Xl,{date:e,calendarDate:n,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:g,onHover:m},`day-${i}`)))}),i)))]}))},Gl=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:s,currentFocus:c,withButton:u,variant:d,minDate:f,maxDate:h,allowDisabledSelection:p,type:m="standalone",selectWithinRange:v=!0,initialCalendarDate:y,numberOfDays:b},w)=>{const D=l(),x=l(void 0);g(w,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const $=e=>{const t=e.format("YYYY-MM-DD");D.current.setCalendarDate(t),F(t)},S=e=>{B(e)},F=e=>{r&&r(e)},B=e=>{o&&o(e)},E=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(Kl,Object.assign({$type:m},{children:t(Fl,Object.assign({type:m,ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!s;break;case"week":e=!a&&!s}return e})(),onDismiss:i,minDate:f,maxDate:h,selectWithinRange:v,currentFocus:c,selectedStartDate:a,selectedEndDate:s,allowDisabledSelection:p,onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"month")||E(e),x.current=e},initialCalendarDate:y},{children:({calendarDate:n})=>(n=>{switch(d){case"week":return t(ql,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:S});case"fixed-range":return t(Zl,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:S,numberOfDays:b});default:return t(Vl,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:s,minDate:f,maxDate:h,isNewSelection:v,allowDisabledSelection:p,onSelect:$,onHover:S})}})(n)}))}))})),Jl=o.forwardRef(((e,n)=>{var{width:r}=e,o=B(e,["width"]);return t(ba,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(Gl,Object.assign({ref:n},o))}))})),Ql=y`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: ${Gt.InputBoxShadow};
`,es=y`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: none;
`,ts=y`
    border: 1px solid ${Kt.Neutral[5]};
    box-shadow: none;
`,ns=y`
    border: 1px solid ${Kt.Validation.Red.Border};
    box-shadow: ${Gt.InputErrorBoxShadow};
`,rs=v.div`
    border: 1px solid ${Kt.Neutral[5]};
    border-radius: 4px;
    background: ${Kt.Neutral[8]};

    :focus-within {
        ${Ql}
    }
    ${e=>e.$focused&&Ql}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${es}
                }
                ${e.$focused&&es}
            `:e.$disabled?y`
                background: ${Kt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${ts}
                }
                ${e.$focused&&ts}
            `:e.$error?y`
                border: 1px solid ${Kt.Validation.Red.Border};

                :focus-within {
                    ${ns}
                }
                ${e.$focused&&ns}
            `:void 0}
`,os=v(rs)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,is=v.input`
    ${e=>ln("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Kt.Neutral[1]};
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
        color: ${Kt.Neutral[3]};
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
`;v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Kt.Primary};
    }
`;const as=v.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ls=v.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return y`
                ${ss}, ${fs} {
                    color: ${Kt.Neutral[4]};
                }
            `}}
`,ss=v(is)`
    background: transparent;
    text-align: center;
`,cs=v(ss)`
    width: 2rem;
    margin-right: 0.25rem;
`,us=v(ss)`
    width: 2.5rem;
`,ds=v(ss)`
    width: 3rem;
    margin-left: 0.25rem;
`,fs=v(cn.Body)`
    ${e=>{if(e.$inactive)return y`
                color: ${Kt.Neutral[3](e)};
            `}}
`,hs=v.div`
    ${ln("Body","regular")}
    background-color: ${Kt.Neutral[8]};
    color: ${Kt.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?y`
                background-color: ${Kt.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?y`
                display: none;
            `:void 0}
`;Da.extend(Fa);const ps=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:c,hoverValue:u,placeholder:d,label:f,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:v},y)=>{const b=v?"none":"numeric",[w,D,x]=Wa(""),[$,S,F]=Wa(""),[B,E,O]=Wa(""),[k,A]=s("none"),[R,H]=s(!1),C=l(null),M=l(null),L=l(null),T=l(null),[N,j,z]=V(u);a((()=>{const[e="",t="",n=""]=V(i);D(e),S(t),E(n)}),[i]),a((()=>{c||A("none"),c&&(H(!0),C.current.contains(document.activeElement)||M.current.focus())}),[c]),g(y,(()=>({ref:C,resetPlaceholder(){H(!1)},resetInput(){const[e="",t="",n=""]=V(i);D(e),S(t),E(n)}})),[i]);const I=e=>{var t;e.preventDefault(),null===(t=M.current)||void 0===t||t.focus()},P=e=>{e.target.select();const t=e.target.name;A(t)},Y=e=>{const[t,n,r]=o,i={[t]:x.current,[n]:F.current,[r]:O.current},a=e.target.name,l=i[a],s=a!==r?Ya.padValue(l,!0):l;switch(a){case t:i[t]=s,D(s);break;case n:i[n]=s,S(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,u=Da(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&l!==s&&h(c),C.current.contains(e.relatedTarget)||(A("none"),null==m||m(d||u))},W=e=>{if(u)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:$,year:B};switch(t){case o[0]:r.day=n,D(n),2===n.length&&L.current.focus();break;case o[1]:r.month=n,S(n),2===n.length&&T.current.focus();break;case o[2]:r.year=n,E(n)}if(!r.day&&!r.month&&!r.year)return void h("");const i=`${r.year}-${r.month}-${r.day}`;Da(i,"YYYY-MM-DD",!0).isValid()&&h(i)},_=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===o[1]&&0===$.length&&M.current.focus(),k===o[2]&&0===B.length&&L.current.focus())};function V(e){if(e){const t=Da(new Date(e));return t.isValid()?[Ya.padValue(t.date().toString()),Ya.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(as,Object.assign({role:"group","aria-label":f,onClick:()=>{n||r||(H(!0),C.current.contains(document.activeElement)||M.current.focus())},onFocus:e=>{n||(H(!0),c||null==p||p(e))}},{children:[e(ls,Object.assign({ref:C,$hover:!!u},{children:[t(cs,{ref:M,name:o[0],maxLength:2,value:null!=N?N:w,onFocus:P,onBlur:Y,onChange:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[0]||r?"DD":""}),t(fs,Object.assign({$inactive:0===w.length},{children:"/"})),t(us,{ref:L,name:o[1],maxLength:2,value:null!=j?j:$,onFocus:P,onBlur:Y,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[1]||r?"MM":""}),t(fs,Object.assign({$inactive:0===$.length},{children:"/"})),t(ds,{ref:T,name:o[2],maxLength:4,value:null!=z?z:B,onFocus:P,onBlur:Y,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&d)return t(hs,Object.assign({$hide:R,$disabled:n,onMouseDown:I},{children:d}))})()]}))})),gs=v(os)`
    height: 3rem;
`,ms=e=>{var{minDate:n,maxDate:r,disabled:o,disabledDates:i,error:c,hideInputKeyboard:u,value:d,onChange:f,onFocus:h,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:v,id:y,allowDisabledSelection:b,zIndex:w=50}=e,D=B(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,$]=s(Ia.sanitizeInput(d)),[S,F]=s(Ia.sanitizeInput(d)),[E,O]=s(void 0),[k,A]=s(!1),[R,H]=s(!1),C=l(null),M=l();a((()=>{const e=Ia.sanitizeInput(d);$(e),F(e)}),[d]);const L=e=>{!b&&Ia.isDateDisabled(e,{disabledDates:i,minDate:n,maxDate:r})||(F(e),m||(P(e),$(e),e&&A(!1)))},T=e=>{F(e),m||(P(e),$(e),e&&(C.current.focus(),A(!1)),E&&O(void 0))},N=()=>{v||o||(A(!0),R||(H(!0),h&&h()))},j=e=>{!R||k||C.current.contains(e.relatedTarget)||(M.current.resetInput(),F(x),H(!1),Y())},z=e=>{O(e)},I=e=>{switch(e){case"reset":F(x);break;case"confirmed":$(S),P(S)}C.current.focus(),A(!1)},P=e=>{f&&f(e)},Y=()=>{p&&p()};return t(ga,{enabled:!v&&!o,isOpen:k,renderElement:()=>t(gs,Object.assign({tabIndex:-1,ref:C,onBlur:j,onFocus:N,$disabled:o,$readOnly:v,$focused:R,$error:c,id:y,"data-testid":D["data-testid"]},D,{children:t(ps,{ref:M,disabled:o,onChange:L,readOnly:v,focused:k,names:["start-day","start-month","start-year"],value:S,hoverValue:E,hideInputKeyboard:u})})),renderDropdown:({elementWidth:e})=>t(Jl,{type:"input",variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:i,minDate:n,maxDate:r,allowDisabledSelection:b,onHover:z,onSelect:T,onDismiss:I,onYearMonthDisplayChange:g,width:e}),onClose:()=>{M.current.resetInput(),F(x),A(!1),H(!1),Y()},onDismiss:()=>{M.current.resetInput(),C.current.focus(),F(x),A(!1)},zIndex:w,offset:16})};export{ms as DateInput};
//# sourceMappingURL=index.js.map
