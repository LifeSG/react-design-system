import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as g,useMemo as m,useImperativeHandle as b}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import p,{css as y,keyframes as F}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{useFloatingTree as x,useFloating as D,autoUpdate as w,offset as $,flip as S,shift as B,limitShift as E,size as C,useTransitionStyles as A,useClick as O,useDismiss as k,useInteractions as H,FloatingPortal as z,FloatingFocusManager as M}from"@floating-ui/react";import{findDOMNode as L}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as T}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N=Array.isArray,I="object"==typeof Y&&Y&&Y.Object===Object&&Y,_="object"==typeof self&&self&&self.Object===Object&&self,P=I||_||Function("return this")(),V=P.Symbol,J=V,Z=Object.prototype,U=Z.hasOwnProperty,X=Z.toString,G=J?J.toStringTag:void 0;var K=function(e){var r=U.call(e,G),t=e[G];try{e[G]=void 0;var n=!0}catch(e){}var a=X.call(e);return n&&(r?e[G]=t:delete e[G]),a},q=Object.prototype.toString;var Q=K,ee=function(e){return q.call(e)},re=V?V.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?Q(e):ee(e)};var ne=te,ae=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ne(e)},oe=N,se=ie,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ce=function(e,r){if(oe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!se(e))||(de.test(e)||!le.test(e)||null!=r&&e in Object(r))};var ue=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},he=te,ge=ue;var me,be=function(e){if(!ge(e))return!1;var r=he(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},fe=P["__core-js_shared__"],pe=(me=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var ye=function(e){return!!pe&&pe in e},Fe=Function.prototype.toString;var ve=be,xe=ye,De=ue,we=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=/^\[object .+?Constructor\]$/,Se=Function.prototype,Be=Object.prototype,Ee=Se.toString,Ce=Be.hasOwnProperty,Ae=RegExp("^"+Ee.call(Ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Oe=function(e){return!(!De(e)||xe(e))&&(ve(e)?Ae:$e).test(we(e))},ke=function(e,r){return null==e?void 0:e[r]};var He=function(e,r){var t=ke(e,r);return Oe(t)?t:void 0},ze=He(Object,"create"),Me=ze;var Le=function(){this.__data__=Me?Me(null):{},this.size=0};var je=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Te=ze,Re=Object.prototype.hasOwnProperty;var Ye=function(e){var r=this.__data__;if(Te){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Re.call(r,e)?r[e]:void 0},We=ze,Ne=Object.prototype.hasOwnProperty;var Ie=ze;var _e=Le,Pe=je,Ve=Ye,Je=function(e){var r=this.__data__;return We?void 0!==r[e]:Ne.call(r,e)},Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ie&&void 0===r?"__lodash_hash_undefined__":r,this};function Ue(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ue.prototype.clear=_e,Ue.prototype.delete=Pe,Ue.prototype.get=Ve,Ue.prototype.has=Je,Ue.prototype.set=Ze;var Xe=Ue;var Ge=function(){this.__data__=[],this.size=0};var Ke=function(e,r){return e===r||e!=e&&r!=r};var qe=function(e,r){for(var t=e.length;t--;)if(Ke(e[t][0],r))return t;return-1},Qe=qe,er=Array.prototype.splice;var rr=qe;var tr=qe;var nr=qe;var ar=Ge,ir=function(e){var r=this.__data__,t=Qe(r,e);return!(t<0)&&(t==r.length-1?r.pop():er.call(r,t,1),--this.size,!0)},or=function(e){var r=this.__data__,t=rr(r,e);return t<0?void 0:r[t][1]},sr=function(e){return tr(this.__data__,e)>-1},lr=function(e,r){var t=this.__data__,n=nr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}dr.prototype.clear=ar,dr.prototype.delete=ir,dr.prototype.get=or,dr.prototype.has=sr,dr.prototype.set=lr;var cr=dr,ur=He(P,"Map"),hr=Xe,gr=cr,mr=ur;var br=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var fr=function(e,r){var t=e.__data__;return br(r)?t["string"==typeof r?"string":"hash"]:t.map},pr=fr;var yr=fr;var Fr=fr;var vr=fr;var xr=function(e,r){var t=vr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Dr=function(){this.size=0,this.__data__={hash:new hr,map:new(mr||gr),string:new hr}},wr=function(e){var r=pr(this,e).delete(e);return this.size-=r?1:0,r},$r=function(e){return yr(this,e).get(e)},Sr=function(e){return Fr(this,e).has(e)},Br=xr;function Er(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Er.prototype.clear=Dr,Er.prototype.delete=wr,Er.prototype.get=$r,Er.prototype.has=Sr,Er.prototype.set=Br;var Cr=Er;function Ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ar.Cache||Cr),t}Ar.Cache=Cr;var Or=Ar;var kr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hr=/\\(\\)?/g,zr=function(e){var r=Or(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(kr,(function(e,t,n,a){r.push(n?a.replace(Hr,"$1"):t||e)})),r}));var Mr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Lr=N,jr=ie,Tr=V?V.prototype:void 0,Rr=Tr?Tr.toString:void 0;var Yr=function e(r){if("string"==typeof r)return r;if(Lr(r))return Mr(r,e)+"";if(jr(r))return Rr?Rr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Wr=Yr;var Nr=N,Ir=ce,_r=zr,Pr=function(e){return null==e?"":Wr(e)};var Vr=ie;var Jr=function(e,r){return Nr(e)?e:Ir(e,r)?[e]:_r(Pr(e))},Zr=function(e){if("string"==typeof e||Vr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Ur=function(e,r){for(var t=0,n=(r=Jr(r,e)).length;null!=e&&t<n;)e=e[Zr(r[t++])];return t&&t==n?e:void 0};var Xr=W((function(e,r,t){var n=null==e?void 0:Ur(e,r);return void 0===n?t:n}));const Gr=(e,r,t)=>r?Xr(t,r)||Xr(e,r):t||e,Kr=(e,r)=>{const t=r||e.defaultValue;return Xr(e.collections,t)};var qr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(qr||(qr={}));const Qr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},et=e=>r=>{const t=r.theme,n=Kr(Qr,t[qr.colorScheme]);return t.options&&t.options.color?Gr(n,e,t.options.color):Gr(n,e)},rt={Brand:{1:et("Brand.1"),2:et("Brand.2"),3:et("Brand.3"),4:et("Brand.4"),5:et("Brand.5"),6:et("Brand.6")},Primary:et("Primary"),PrimaryDark:et("PrimaryDark"),Secondary:et("Secondary"),Accent:{Light:{1:et("Accent.Light.1"),2:et("Accent.Light.2"),3:et("Accent.Light.3"),4:et("Accent.Light.4"),5:et("Accent.Light.5"),6:et("Accent.Light.6")},Dark:{1:et("Accent.Dark.1"),2:et("Accent.Dark.2"),3:et("Accent.Dark.3")}},Neutral:{1:et("Neutral.1"),2:et("Neutral.2"),3:et("Neutral.3"),4:et("Neutral.4"),5:et("Neutral.5"),6:et("Neutral.6"),7:et("Neutral.7"),8:et("Neutral.8")},Validation:{Green:{Text:et("Validation.Green.Text"),Icon:et("Validation.Green.Icon"),Border:et("Validation.Green.Border"),Background:et("Validation.Green.Background")},Orange:{Text:et("Validation.Orange.Text"),Icon:et("Validation.Orange.Icon"),Border:et("Validation.Orange.Border"),Background:et("Validation.Orange.Background"),Badge:et("Validation.Orange.Badge")},Red:{Text:et("Validation.Red.Text"),Icon:et("Validation.Red.Icon"),Border:et("Validation.Red.Border"),Background:et("Validation.Red.Background")},Blue:{Text:et("Validation.Blue.Text"),Icon:et("Validation.Blue.Icon"),Border:et("Validation.Blue.Border"),Background:et("Validation.Blue.Background")}},Shadow:{Accent:et("Shadow.Accent"),Red:et("Shadow.Red"),Elevation:et("Shadow.Elevation")}},tt={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${rt.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${rt.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${rt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${rt.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${rt.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${rt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},nt=e=>r=>{var t;const n=r.theme,a=Kr(tt,n[qr.designTokenScheme]);return(null===(t=n.options)||void 0===t?void 0:t.designToken)?Gr(a,e,n.options.designToken):Gr(a,e)},at=nt("InputBoxShadow"),it=nt("InputErrorBoxShadow"),ot=(nt("ElevationBoxShadow"),nt("Table.Header"),nt("Table.Cell.Primary"),nt("Table.Cell.Secondary"),nt("Table.Cell.Selected"),nt("Table.Cell.Hover"),nt("Button.Danger.BackgroundColor"),nt("Button.Danger.Hover"),nt("Button.Danger.Primary"),nt("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),st={D1:{fontFamily:ot.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ot.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ot.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ot.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ot.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ot.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ot.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ot.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ot.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ot.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ot.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ot.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},lt={D1:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ot.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:ot.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:ot.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:ot.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ot.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},dt={collections:{base:st,oneservice:{D1:{fontFamily:ot.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ot.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ot.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ot.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ot.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ot.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ot.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ot.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ot.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ot.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ot.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ot.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:lt},defaultValue:"base"},ct=e=>r=>{const t=r.theme,n=Kr(dt,t[qr.textStyleScheme]);return t.options&&t.options.textStyle?Gr(n,e,t.options.textStyle):Gr(n,e)},ut={D1:{fontFamily:ct("D1.fontFamily"),fontSize:ct("D1.fontSize"),fontWeight:ct("D1.fontWeight"),lineHeight:ct("D1.lineHeight"),letterSpacing:ct("D1.letterSpacing")},D2:{fontFamily:ct("D2.fontFamily"),fontSize:ct("D2.fontSize"),fontWeight:ct("D2.fontWeight"),lineHeight:ct("D2.lineHeight"),letterSpacing:ct("D2.letterSpacing")},D3:{fontFamily:ct("D3.fontFamily"),fontSize:ct("D3.fontSize"),fontWeight:ct("D3.fontWeight"),lineHeight:ct("D3.lineHeight"),letterSpacing:ct("D3.letterSpacing")},D4:{fontFamily:ct("D4.fontFamily"),fontSize:ct("D4.fontSize"),fontWeight:ct("D4.fontWeight"),lineHeight:ct("D4.lineHeight"),letterSpacing:ct("D4.letterSpacing")},DBody:{fontFamily:ct("DBody.fontFamily"),fontSize:ct("DBody.fontSize"),fontWeight:ct("DBody.fontWeight"),lineHeight:ct("DBody.lineHeight"),letterSpacing:ct("DBody.letterSpacing")},H1:{fontFamily:ct("H1.fontFamily"),fontSize:ct("H1.fontSize"),fontWeight:ct("H1.fontWeight"),lineHeight:ct("H1.lineHeight"),letterSpacing:ct("H1.letterSpacing")},H2:{fontFamily:ct("H2.fontFamily"),fontSize:ct("H2.fontSize"),fontWeight:ct("H2.fontWeight"),lineHeight:ct("H2.lineHeight"),letterSpacing:ct("H2.letterSpacing")},H3:{fontFamily:ct("H3.fontFamily"),fontSize:ct("H3.fontSize"),fontWeight:ct("H3.fontWeight"),lineHeight:ct("H3.lineHeight"),letterSpacing:ct("H3.letterSpacing")},H4:{fontFamily:ct("H4.fontFamily"),fontSize:ct("H4.fontSize"),fontWeight:ct("H4.fontWeight"),lineHeight:ct("H4.lineHeight"),letterSpacing:ct("H4.letterSpacing")},H5:{fontFamily:ct("H5.fontFamily"),fontSize:ct("H5.fontSize"),fontWeight:ct("H5.fontWeight"),lineHeight:ct("H5.lineHeight"),letterSpacing:ct("H5.letterSpacing")},H6:{fontFamily:ct("H6.fontFamily"),fontSize:ct("H6.fontSize"),fontWeight:ct("H6.fontWeight"),lineHeight:ct("H6.lineHeight"),letterSpacing:ct("H6.letterSpacing")},Body:{fontFamily:ct("Body.fontFamily"),fontSize:ct("Body.fontSize"),fontWeight:ct("Body.fontWeight"),lineHeight:ct("Body.lineHeight"),letterSpacing:ct("Body.letterSpacing")},BodySmall:{fontFamily:ct("BodySmall.fontFamily"),fontSize:ct("BodySmall.fontSize"),fontWeight:ct("BodySmall.fontWeight"),lineHeight:ct("BodySmall.lineHeight"),letterSpacing:ct("BodySmall.letterSpacing")},XSmall:{fontFamily:ct("XSmall.fontFamily"),fontSize:ct("XSmall.fontSize"),fontWeight:ct("XSmall.fontWeight"),lineHeight:ct("XSmall.lineHeight"),letterSpacing:ct("XSmall.letterSpacing")}},ht=[ot.OpenSans,ot.PlusJakartaSans],gt=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},mt=(e,r)=>t=>{var n;const a=ut[e].fontFamily(t),i=ut[e].fontWeight(t),o=ht.find((e=>Object.values(e).includes(a)));return o?y`
                font-family: ${gt(o,r)||gt(o,i)||a};
                font-weight: normal !important;
            `:y`
            font-family: ${a};
            font-weight: ${null!==(n=bt(r)||i)&&void 0!==n?n:"normal"};
        `},bt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ft=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},pt=(e,r,t=!1)=>n=>{const a=ut[e],i=a.fontSize(n);return y`
            ${mt(e,r)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${i*(t?1.05:0)}rem;
            `}
        `},yt=(e=!1,r=!1,t=void 0)=>r?y`
            display: block;
            ${ft(t)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${ft(t)}
        `;var Ft;!function(e){e.D1=p.h1`
        ${e=>y`
                ${pt("D1",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>y`
                ${pt("D2",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>y`
                ${pt("D3",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>y`
                ${pt("D4",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>y`
                ${pt("DBody",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>y`
                ${pt("H1",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>y`
                ${pt("H2",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>y`
                ${pt("H3",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>y`
                ${pt("H4",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>y`
                ${pt("H5",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>y`
                ${pt("H6",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>y`
                ${pt("Body",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>y`
                ${pt("BodySmall",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>y`
                ${pt("XSmall",e.weight,e.paragraph)}
                color: ${rt.Neutral[1]};
                ${yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Dt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Dt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ft||(Ft={}));const vt=p.a`
    ${e=>y`
            ${pt(e.textStyle,e.weight)}
            color: ${rt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${rt.Secondary};

                svg {
                    color: ${rt.Secondary};
                }
            }
        `}
`,xt=p(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Dt=t=>{var{external:n=!1,children:a}=t,i=R(t,["external","children"]);return e(vt,Object.assign({},i,{children:[a,n&&r(xt,{})]}))};var wt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(wt||(wt={}));const $t="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",St=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=St(e.$variant);return y`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Bt=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>St(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${rt.Accent.Light[3]};
    }
`,Et=p.button`
    ${Bt}
    cursor: pointer;
`;p.div`
    ${Bt}
`;const Ct=F`
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
`;p.div`
    position: relative;
    border: 1px solid ${rt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${rt.Neutral[8]};

    :focus-within {
        border: 1px solid ${rt.Accent.Light[1]};
        box-shadow: ${at};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Ct} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${rt.Neutral[6](e)};

                ${Et} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${rt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${Et} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${rt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${rt.Validation.Red.Border(e)};
                    box-shadow: ${it};
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${$t};
    margin-left: 1rem;
`,p(f)`
    color: ${rt.Neutral[3]};
    ${e=>{let r=ut.Body.fontSize;return"small"===e.$variant&&(r=ut.BodySmall.fontSize),y`
            height: ${r}rem;
            width: ${r}rem;
        `}}
`,p.div`
    height: 1px;
    background: ${rt.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const At=p.div`
    ${e=>pt("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(At)`
    color: ${rt.Neutral[3]};
`;var Ot=function(e,r){return Ot=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Ot(e,r)};var kt=function(){return kt=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},kt.apply(this,arguments)};var Ht="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var zt=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Mt="object"==typeof Ht&&Ht&&Ht.Object===Object&&Ht,Lt="object"==typeof self&&self&&self.Object===Object&&self,jt=Mt||Lt||Function("return this")(),Tt=jt,Rt=function(){return Tt.Date.now()},Yt=/\s/;var Wt=function(e){for(var r=e.length;r--&&Yt.test(e.charAt(r)););return r},Nt=/^\s+/;var It=function(e){return e?e.slice(0,Wt(e)+1).replace(Nt,""):e},_t=jt.Symbol,Pt=_t,Vt=Object.prototype,Jt=Vt.hasOwnProperty,Zt=Vt.toString,Ut=Pt?Pt.toStringTag:void 0;var Xt=function(e){var r=Jt.call(e,Ut),t=e[Ut];try{e[Ut]=void 0;var n=!0}catch(e){}var a=Zt.call(e);return n&&(r?e[Ut]=t:delete e[Ut]),a},Gt=Object.prototype.toString;var Kt=Xt,qt=function(e){return Gt.call(e)},Qt=_t?_t.toStringTag:void 0;var en=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Qt&&Qt in Object(e)?Kt(e):qt(e)},rn=function(e){return null!=e&&"object"==typeof e};var tn=It,nn=zt,an=function(e){return"symbol"==typeof e||rn(e)&&"[object Symbol]"==en(e)},on=/^[-+]0x[0-9a-f]+$/i,sn=/^0b[01]+$/i,ln=/^0o[0-7]+$/i,dn=parseInt;var cn=zt,un=Rt,hn=function(e){if("number"==typeof e)return e;if(an(e))return NaN;if(nn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=nn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=tn(e);var t=sn.test(e);return t||ln.test(e)?dn(e.slice(2),t?2:8):on.test(e)?NaN:+e},gn=Math.max,mn=Math.min;var bn=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function b(){var e=un();if(m(e))return f(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?mn(t,i-(e-d)):t}(e))}function f(e){return s=void 0,h&&n?g(e):(n=a=void 0,o)}function p(){var e=un(),t=m(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?g(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),g(l)}return void 0===s&&(s=setTimeout(b,r)),o}return r=hn(r)||0,cn(t)&&(c=!!t.leading,i=(u="maxWait"in t)?gn(hn(t.maxWait)||0,r):i,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},p.flush=function(){return void 0===s?o:f(un())},p},fn=bn,pn=zt;var yn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return pn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),fn(e,r,{leading:n,maxWait:r,trailing:a})},Fn=function(e,r,t,n){switch(r){case"debounce":return bn(e,t,n);case"throttle":return yn(e,t,n);default:return e}},vn=function(e){return"function"==typeof e},xn=function(){return"undefined"==typeof window},Dn=function(e){return e instanceof Element||e instanceof HTMLDocument},wn=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&vn(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!xn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(xn())return null;if(r)return document.querySelector(r);if(n&&Dn(n))return n;if(t.targetRef&&Dn(t.targetRef.current))return t.targetRef.current;var a=L(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=wn(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!xn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return vn(r)?"renderProp":vn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,xn()||(t.resizeHandler=Fn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Ot(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){xn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var $n=xn()?u:h;const Sn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Bn=e=>Object.keys(Sn).reduce(((r,t)=>{const n=Sn[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),En=Bn("max-width"),Cn=(Bn("min-width"),Sn);var An;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(An||(An={}));const On=p.div`
    display: flex;
    flex-direction: column;
`,kn=e=>"right"===e?"bottom-end":"bottom-start",Hn=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:b=0,alignment:f="left",fitAvailableHeight:p})=>{var y;const F=i(null),v=i(null),{width:L}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,b=e.onResize,f=i(t),p=i(null),y=null!=g?g:p,F=i(),v=o({width:void 0,height:void 0}),x=v[0],D=v[1];return $n((function(){if(!xn()){var e=wn(b,D,c,h);F.current=Fn((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!xn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(F.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=F.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,b,m,y.current]),kt({ref:y},x)}({targetRef:F,handleHeight:!1}),j={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<Cn.mobileL;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:T,floatingStyles:R,context:Y}=D({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:w,placement:kn(f),middleware:[$(b),S(),B({limiter:E()}),C({apply({availableHeight:e}){v.current&&Object.assign(v.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),j]}),W=(()=>{const[e,r]=o(void 0),t=x();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(An.Change,e),t.events.emit(An.Ready),()=>t.events.off(An.Change,e)}),[t]),e})(),{isMounted:N,styles:I}=A(Y,{initial:{opacity:0},open:{opacity:1},duration:300}),_=O(Y,{enabled:n,toggle:m}),P=k(Y,{enabled:n}),{getReferenceProps:V,getFloatingProps:J}=H([_,P]);return e(t,{children:[r("div",Object.assign({ref:e=>{F.current=e,T.setReference(e)}},V(),{children:c()})),N&&r(z,{children:r(M,Object.assign({context:Y,modal:!1,initialFocus:v,returnFocus:!1},{children:r("div",Object.assign({ref:T.setFloating,style:Object.assign(Object.assign({},R),{zIndex:null!==(y=null!=g?g:W)&&void 0!==y?y:50})},J(),{children:r(On,Object.assign({ref:v,style:Object.assign({},I),inert:I.opacity<1?"":void 0},{children:h({elementWidth:L})}))}))}))})]})},zn=p.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${En.mobileL} {
        min-width: 17.5rem;
    }
`;var Mn={exports:{}};Mn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",v={};v[F]=f;var x="$isDayjsObject",D=function(e){return e instanceof B||!(!e||!e[x])},w=function e(r,t,n){var a;if(!r)return F;if("string"==typeof r){var i=r.toLowerCase();v[i]&&(a=i),t&&(v[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;v[s]=r,a=s}return!n&&a&&(F=a),a||!n&&F},$=function(e,r){if(D(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new B(t)},S=y;S.l=w,S.i=D,S.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var B=function(){function f(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(S.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===g)},p.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return $(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<$(e)},p.$g=function(e,r,t){return S.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!S.u(r)||r,c=S.p(e),g=function(e,r){var a=S.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},m=function(e,r){return S.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var F=this.$locale().weekStart||0,v=(b<F?b+7:b)-F;return g(n?p-v:p+(6-v),f);case s:case h:return m(y+"Hours",0);case o:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case a:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=S.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[S.p(e)]()},p.add=function(n,c){var h,g=this;n=Number(n);var m=S.p(c),b=function(e){var r=$(g);return S.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[m]||1,p=this.$d.getTime()+n*f;return S.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return S.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return S.s(r.$y,4,"0");case"M":return s+1;case"MM":return S.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return S.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,o,!0);case"A":return m(i,o,!1);case"m":return String(o);case"mm":return S.s(o,2,"0");case"s":return String(r.$s);case"ss":return S.s(r.$s,2,"0");case"SSS":return S.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,g){var m,b=this,f=S.p(h),p=$(n),y=(p.utcOffset()-this.utcOffset())*r,F=this-p,v=function(){return S.m(b,p)};switch(f){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(F-y)/6048e5;break;case s:m=(F-y)/864e5;break;case o:m=F/t;break;case i:m=F/r;break;case a:m=F/e;break;default:m=F}return g?m:S.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=w(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),E=B.prototype;return $.prototype=E,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,B,$),e.$i=!0),$},$.locale=w,$.isDayjs=D,$.unix=function(e){return $(1e3*e)},$.en=v[F],$.Ls=v,$.p={},$}();var Ln=W(Mn.exports),jn={exports:{}};jn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],g=c&&c[1];o[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=o||(a||i?1:g.getDate()),b=a||g.getFullYear(),f=0;a&&!i||(f=i>0?i-1:g.getMonth());var p=s||0,y=l||0,F=d||0,v=c||0;return u?new Date(Date.UTC(b,f,m,p,y,F,v+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,F,v)):new Date(b,f,m,p,y,F,v)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Tn=W(jn.exports),Rn={exports:{}};Rn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Yn=W(Rn.exports),Wn={exports:{}};Wn.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Nn=W(Wn.exports),In={exports:{}};In.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var _n,Pn,Vn,Jn=W(In.exports),Zn={exports:{}},Un=W(Zn.exports=(_n={year:0,month:1,day:2,hour:3,minute:4,second:5},Pn={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Pn[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Pn[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=_n[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Ln.extend(Yn),Ln.extend(Jn),Ln.extend(Nn),Ln.extend(Tn),Ln.extend(Un),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Ln(r).startOf("week");return Xn(t).map((e=>Gn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Gn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Ln(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Ln(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Ln(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?Ln(n):void 0,a?Ln(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Vn||(Vn={}));const Xn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Gn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Kn=[1,3,5,7,8,10,12],qn=[4,6,9,11];var Qn,ea,ra,ta;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Kn.includes(i)?Math.min(a,31).toString():qn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Ln(e,t);return Ln(r,t).diff(n,"minute")},e.toDayjs=e=>e?Ln(e):Ln(),e.addMinutesToTime=(e,r,t="HH:mm")=>Ln(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Ln(e).isSame(Ln(r),t)}(Qn||(Qn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Ln(e).isBefore(n,"day"))||!(!a||!Ln(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Ln(e).isValid())return e}return""}}(ea||(ea={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ra||(ra={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(ta||(ta={}));const na=e=>{const[r,t]=o(e),n=i(e);return[r,g((e=>{n.current=e,t(e)}),[]),n]},aa=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ia=F`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,oa=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${ia} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sa=p(oa)`
    animation-delay: -0.45s;
`,la=p(oa)`
    animation-delay: -0.3s;
`,da=p(oa)`
    animation-delay: -0.15s;
`,ca=(e,r,t)=>Xr(t,r)||Xr(e,r),ua=(e,r)=>{const t=r||e.defaultValue;return Xr(e.collections,t)},ha={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},ga=e=>r=>{const t=r.theme,n=ua(ha,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?ca(n,e,t.overrides.primitiveColour):n[e]},ma={"primary-10":ga("primary-10"),"primary-20":ga("primary-20"),"primary-30":ga("primary-30"),"primary-40":ga("primary-40"),"primary-50":ga("primary-50"),"primary-60":ga("primary-60"),"primary-70":ga("primary-70"),"primary-80":ga("primary-80"),"primary-90":ga("primary-90"),"primary-95":ga("primary-95"),"primary-100":ga("primary-100"),"secondary-10":ga("secondary-10"),"secondary-20":ga("secondary-20"),"secondary-30":ga("secondary-30"),"secondary-40":ga("secondary-40"),"secondary-50":ga("secondary-50"),"secondary-60":ga("secondary-60"),"secondary-70":ga("secondary-70"),"secondary-80":ga("secondary-80"),"secondary-90":ga("secondary-90"),"secondary-95":ga("secondary-95"),"secondary-100":ga("secondary-100"),"neutral-10":ga("neutral-10"),"neutral-20":ga("neutral-20"),"neutral-30":ga("neutral-30"),"neutral-40":ga("neutral-40"),"neutral-50":ga("neutral-50"),"neutral-60":ga("neutral-60"),"neutral-70":ga("neutral-70"),"neutral-80":ga("neutral-80"),"neutral-90":ga("neutral-90"),"neutral-95":ga("neutral-95"),"neutral-100":ga("neutral-100"),"success-10":ga("success-10"),"success-20":ga("success-20"),"success-30":ga("success-30"),"success-40":ga("success-40"),"success-50":ga("success-50"),"success-60":ga("success-60"),"success-70":ga("success-70"),"success-80":ga("success-80"),"success-90":ga("success-90"),"success-95":ga("success-95"),"success-100":ga("success-100"),"warning-10":ga("warning-10"),"warning-20":ga("warning-20"),"warning-30":ga("warning-30"),"warning-40":ga("warning-40"),"warning-50":ga("warning-50"),"warning-60":ga("warning-60"),"warning-70":ga("warning-70"),"warning-80":ga("warning-80"),"warning-90":ga("warning-90"),"warning-95":ga("warning-95"),"warning-100":ga("warning-100"),"error-10":ga("error-10"),"error-20":ga("error-20"),"error-30":ga("error-30"),"error-40":ga("error-40"),"error-50":ga("error-50"),"error-60":ga("error-60"),"error-70":ga("error-70"),"error-80":ga("error-80"),"error-90":ga("error-90"),"error-95":ga("error-95"),"error-100":ga("error-100"),"info-10":ga("info-10"),"info-20":ga("info-20"),"info-30":ga("info-30"),"info-40":ga("info-40"),"info-50":ga("info-50"),"info-60":ga("info-60"),"info-70":ga("info-70"),"info-80":ga("info-80"),"info-90":ga("info-90"),"info-95":ga("info-95"),"info-100":ga("info-100"),white:ga("white"),black:ga("black")},ba={text:ga("neutral-20"),"text-subtle":ga("neutral-30"),"text-subtler":ga("neutral-50"),"text-subtlest":ga("neutral-60"),"text-primary":ga("primary-50"),"text-hover":ga("primary-40"),"text-selected":ga("primary-50"),"text-selected-hover":ga("primary-40"),"text-disabled":ga("neutral-50"),"text-disabled-subtle":ga("neutral-60"),"text-disabled-subtlest":ga("neutral-80"),"text-selected-disabled":ga("neutral-50"),"text-success":ga("success-40"),"text-warning":ga("warning-40"),"text-error":ga("error-40"),"text-info":ga("info-40"),"text-inverse":ga("white"),icon:ga("neutral-50"),"icon-subtle":ga("neutral-60"),"icon-strongest":ga("neutral-20"),"icon-primary":ga("primary-50"),"icon-primary-subtle":ga("primary-60"),"icon-primary-subtlest":ga("primary-70"),"icon-hover":ga("primary-40"),"icon-selected":ga("primary-50"),"icon-selected-hover":ga("primary-40"),"icon-disabled":ga("neutral-50"),"icon-disabled-subtle":ga("neutral-60"),"icon-selected-disabled":ga("neutral-60"),"icon-success":ga("success-50"),"icon-warning":ga("warning-60"),"icon-error":ga("error-50"),"icon-error-strong":ga("error-40"),"icon-info":ga("info-50"),"icon-inverse":ga("white"),"icon-primary-inverse":"#FEAB10",border:ga("neutral-90"),"border-strong":ga("neutral-70"),"border-stronger":ga("neutral-30"),"border-primary":ga("primary-50"),"border-primary-subtle":ga("primary-60"),"border-hover":ga("primary-90"),"border-hover-strong":ga("primary-60"),"border-selected":ga("primary-50"),"border-selected-subtle":ga("primary-70"),"border-selected-subtlest":ga("primary-90"),"border-selected-hover":ga("primary-40"),"border-focus":ga("primary-60"),"border-focus-strong":ga("primary-50"),"border-disabled":ga("neutral-90"),"border-selected-disabled":ga("neutral-70"),"border-success":ga("success-60"),"border-warning":ga("warning-60"),"border-error":ga("error-60"),"border-error-focus":ga("error-60"),"border-error-strong":ga("error-40"),"border-info":ga("info-60"),bg:ga("white"),"bg-strong":ga("neutral-100"),"bg-stronger":ga("neutral-95"),"bg-strongest":ga("neutral-90"),"bg-hover":ga("primary-95"),"bg-hover-strong":ga("primary-90"),"bg-hover-subtle":ga("primary-100"),"bg-hover-neutral":ga("neutral-95"),"bg-selected":ga("primary-95"),"bg-selected-hover":ga("primary-90"),"bg-selected-strong":ga("primary-90"),"bg-selected-strongest":ga("primary-90"),"bg-disabled":ga("neutral-95"),"bg-selected-disabled":ga("neutral-95"),"bg-success":ga("success-100"),"bg-success-strong":ga("success-50"),"bg-warning":ga("warning-100"),"bg-warning-strong":ga("warning-50"),"bg-info":ga("info-100"),"bg-info-strong":ga("info-50"),"bg-error":ga("error-100"),"bg-error-strong":ga("error-50"),"bg-error-strong-hover":ga("error-30"),"bg-inverse":ga("neutral-20"),"bg-inverse-subtle":ga("neutral-30"),"bg-inverse-subtler":ga("neutral-50"),"bg-inverse-subtlest":ga("neutral-60"),"bg-primary":ga("primary-50"),"bg-primary-subtle":ga("primary-60"),"bg-primary-subtler":ga("primary-80"),"bg-primary-subtlest":ga("primary-100"),"bg-primary-hover":ga("primary-40"),"bg-primary-subtlest-hover":ga("primary-90"),"bg-primary-subtlest-selected":ga("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ga("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":ga("black"),"focus-ring-inverse":ga("white")},fa={collections:{lifesg:ba,bookingsg:ba,rbs:ba,mylegacy:ba,ccube:ba},defaultValue:"lifesg"},pa=e=>r=>{const t=r.theme,n=ua(fa,t.colourScheme),a=t.overrides&&t.overrides.semanticColour?ca(n,e,t.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},ya={text:pa("text"),"text-subtle":pa("text-subtle"),"text-subtler":pa("text-subtler"),"text-subtlest":pa("text-subtlest"),"text-primary":pa("text-primary"),"text-hover":pa("text-hover"),"text-selected":pa("text-selected"),"text-selected-hover":pa("text-selected-hover"),"text-disabled":pa("text-disabled"),"text-disabled-subtle":pa("text-disabled-subtle"),"text-disabled-subtlest":pa("text-disabled-subtlest"),"text-selected-disabled":pa("text-selected-disabled"),"text-success":pa("text-success"),"text-warning":pa("text-warning"),"text-error":pa("text-error"),"text-info":pa("text-info"),"text-inverse":pa("text-inverse"),icon:pa("icon"),"icon-subtle":pa("icon-subtle"),"icon-strongest":pa("icon-strongest"),"icon-primary":pa("icon-primary"),"icon-primary-subtle":pa("icon-primary-subtle"),"icon-primary-subtlest":pa("icon-primary-subtlest"),"icon-hover":pa("icon-hover"),"icon-selected":pa("icon-selected"),"icon-selected-hover":pa("icon-selected-hover"),"icon-disabled":pa("icon-disabled"),"icon-disabled-subtle":pa("icon-disabled-subtle"),"icon-selected-disabled":pa("icon-selected-disabled"),"icon-success":pa("icon-success"),"icon-warning":pa("icon-warning"),"icon-error":pa("icon-error"),"icon-error-strong":pa("icon-error-strong"),"icon-info":pa("icon-info"),"icon-inverse":pa("icon-inverse"),"icon-primary-inverse":pa("icon-primary-inverse"),border:pa("border"),"border-strong":pa("border-strong"),"border-stronger":pa("border-stronger"),"border-primary":pa("border-primary"),"border-primary-subtle":pa("border-primary-subtle"),"border-hover":pa("border-hover"),"border-hover-strong":pa("border-hover-strong"),"border-selected":pa("border-selected"),"border-selected-subtle":pa("border-selected-subtle"),"border-selected-subtlest":pa("border-selected-subtlest"),"border-selected-hover":pa("border-selected-hover"),"border-focus":pa("border-focus"),"border-focus-strong":pa("border-focus-strong"),"border-disabled":pa("border-disabled"),"border-selected-disabled":pa("border-selected-disabled"),"border-success":pa("border-success"),"border-warning":pa("border-warning"),"border-error":pa("border-error"),"border-error-focus":pa("border-error-focus"),"border-error-strong":pa("border-error-strong"),"border-info":pa("border-info"),bg:pa("bg"),"bg-strong":pa("bg-strong"),"bg-stronger":pa("bg-stronger"),"bg-strongest":pa("bg-strongest"),"bg-hover":pa("bg-hover"),"bg-hover-strong":pa("bg-hover-strong"),"bg-hover-subtle":pa("bg-hover-subtle"),"bg-hover-neutral":pa("bg-hover-neutral"),"bg-selected":pa("bg-selected"),"bg-selected-hover":pa("bg-selected-hover"),"bg-selected-strong":pa("bg-selected-strong"),"bg-selected-strongest":pa("bg-selected-strongest"),"bg-disabled":pa("bg-disabled"),"bg-selected-disabled":pa("bg-selected-disabled"),"bg-success":pa("bg-success"),"bg-success-strong":pa("bg-success-strong"),"bg-warning":pa("bg-warning"),"bg-warning-strong":pa("bg-warning-strong"),"bg-info":pa("bg-info"),"bg-info-strong":pa("bg-info-strong"),"bg-error":pa("bg-error"),"bg-error-strong":pa("bg-error-strong"),"bg-error-strong-hover":pa("bg-error-strong-hover"),"bg-inverse":pa("bg-inverse"),"bg-inverse-subtle":pa("bg-inverse-subtle"),"bg-inverse-subtler":pa("bg-inverse-subtler"),"bg-inverse-subtlest":pa("bg-inverse-subtlest"),"bg-primary":pa("bg-primary"),"bg-primary-subtle":pa("bg-primary-subtle"),"bg-primary-subtler":pa("bg-primary-subtler"),"bg-primary-subtlest":pa("bg-primary-subtlest"),"bg-primary-hover":pa("bg-primary-hover"),"bg-primary-subtlest-hover":pa("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":pa("bg-primary-subtlest-selected"),"bg-available":pa("bg-available"),"overlay-strong":pa("overlay-strong"),"overlay-subtle":pa("overlay-subtle"),hyperlink:pa("hyperlink"),"hyperlink-inverse":pa("hyperlink-inverse"),"focus-ring":pa("focus-ring"),"focus-ring-inverse":pa("focus-ring-inverse")},Fa={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},va=e=>r=>{var t;const n=r.theme,a=ua(Fa,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ca(a,e,n.overrides.breakpoint):a[e],i},xa={"xxs-min":va("xxs-min"),"xxs-max":va("xxs-max"),"xs-min":va("xs-min"),"xs-max":va("xs-max"),"sm-min":va("sm-min"),"sm-max":va("sm-max"),"md-min":va("md-min"),"md-max":va("md-max"),"lg-min":va("lg-min"),"lg-max":va("lg-max"),"xl-min":va("xl-min"),"xl-max":va("xl-max"),"xxl-min":va("xxl-min"),"xxs-column":va("xxs-column"),"xs-column":va("xs-column"),"sm-column":va("sm-column"),"md-column":va("md-column"),"lg-column":va("lg-column"),"xl-column":va("xl-column"),"xxl-column":va("xxl-column"),"xxs-gutter":va("xxs-gutter"),"xs-gutter":va("xs-gutter"),"sm-gutter":va("sm-gutter"),"md-gutter":va("md-gutter"),"lg-gutter":va("lg-gutter"),"xl-gutter":va("xl-gutter"),"xxl-gutter":va("xxl-gutter"),"xxs-margin":va("xxs-margin"),"xs-margin":va("xs-margin"),"sm-margin":va("sm-margin"),"md-margin":va("md-margin"),"lg-margin":va("lg-margin"),"xl-margin":va("xl-margin"),"xxl-margin":va("xxl-margin")},Da=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=xa["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),wa={MaxWidth:Da("max-width"),MinWidth:Da("min-width")},$a={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Sa={collections:{lifesg:$a,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:$a,mylegacy:$a,ccube:$a},defaultValue:"lifesg"},Ba=e=>r=>{const t=r.theme,n=ua(Sa,t.fontScheme);return t.overrides&&t.overrides.fontSpec?ca(n,e,t.overrides.fontSpec):n[e]},Ea=(e,r,t,n)=>y`
    font-family: ${Ba("font-family")};
    font-size: ${Ba(e)};
    font-weight: ${Ba(r)};
    line-height: ${Ba(t)};
    letter-spacing: ${Ba(n)};
`,Ca={"header-xxl-light":Ea("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ea("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ea("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ea("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ea("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ea("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ea("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ea("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ea("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ea("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ea("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ea("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ea("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ea("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ea("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ea("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ea("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ea("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ea("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ea("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ea("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ea("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ea("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ea("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ea("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ea("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ea("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ea("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ea("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ea("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ea("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ea("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ea("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ea("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ea("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ea("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ea("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ea("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ea("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ea("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Ea("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Ea("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Aa={collections:{lifesg:Ca,bookingsg:Ca,rbs:Ca,mylegacy:Ca,ccube:Ca},defaultValue:"lifesg"},Oa=e=>r=>{const t=r.theme,n=ua(Aa,t.fontScheme),a=t.overrides&&t.overrides.font?ca(n,e,t.overrides.font):n[e];return"function"==typeof a?a(r):a},ka={"header-xxl-light":Oa("header-xxl-light"),"header-xxl-regular":Oa("header-xxl-regular"),"header-xxl-semibold":Oa("header-xxl-semibold"),"header-xxl-bold":Oa("header-xxl-bold"),"header-xl-light":Oa("header-xl-light"),"header-xl-regular":Oa("header-xl-regular"),"header-xl-semibold":Oa("header-xl-semibold"),"header-xl-bold":Oa("header-xl-bold"),"header-lg-light":Oa("header-lg-light"),"header-lg-regular":Oa("header-lg-regular"),"header-lg-semibold":Oa("header-lg-semibold"),"header-lg-bold":Oa("header-lg-bold"),"header-md-light":Oa("header-md-light"),"header-md-regular":Oa("header-md-regular"),"header-md-semibold":Oa("header-md-semibold"),"header-md-bold":Oa("header-md-bold"),"header-sm-light":Oa("header-sm-light"),"header-sm-regular":Oa("header-sm-regular"),"header-sm-semibold":Oa("header-sm-semibold"),"header-sm-bold":Oa("header-sm-bold"),"header-xs-light":Oa("header-xs-light"),"header-xs-regular":Oa("header-xs-regular"),"header-xs-semibold":Oa("header-xs-semibold"),"header-xs-bold":Oa("header-xs-bold"),"body-baseline-light":Oa("body-baseline-light"),"body-baseline-regular":Oa("body-baseline-regular"),"body-baseline-semibold":Oa("body-baseline-semibold"),"body-baseline-bold":Oa("body-baseline-bold"),"body-md-light":Oa("body-md-light"),"body-md-regular":Oa("body-md-regular"),"body-md-semibold":Oa("body-md-semibold"),"body-md-bold":Oa("body-md-bold"),"body-sm-light":Oa("body-sm-light"),"body-sm-regular":Oa("body-sm-regular"),"body-sm-semibold":Oa("body-sm-semibold"),"body-sm-bold":Oa("body-sm-bold"),"body-xs-light":Oa("body-xs-light"),"body-xs-regular":Oa("body-xs-regular"),"body-xs-semibold":Oa("body-xs-semibold"),"body-xs-bold":Oa("body-xs-bold"),"formlabel-baseline-semibold":Oa("formlabel-baseline-semibold"),"formlabel-lg-semibold":Oa("formlabel-lg-semibold")},Ha=Object.assign(Object.assign({},ya),{Primitive:ma}),za=ka,Ma=wa,La=p.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Ha.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ha["border-error-strong"]:Ha["border-primary"]};

                    color: ${e.$buttonIsDanger?Ha["text-error"]:Ha["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ha["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Ha.bg};
                    border: 1px solid ${Ha.border};

                    color: ${e.$buttonIsDanger?Ha["text-error"]:Ha["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ha["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?Ha["text-error"]:Ha["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Ha["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${Ha["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ha["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Ha["bg-error-strong"]:Ha["bg-primary"]};
                    border: 1px solid transparent;

                    ${Ma.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ha["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ha["bg-error-strong-hover"]:Ha["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${za["body-md-semibold"]}

                    ${Ma.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${za["header-md-semibold"]}

                    ${Ma.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${za["header-xs-semibold"]}

                    ${Ma.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ja=p((({color:t,className:n,size:a})=>e(aa,Object.assign({className:n,$size:a,$color:t},{children:[r(oa,{id:"inner1"}),r(sa,{id:"inner2"}),r(la,{id:"inner3"}),r(da,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Ta={Default:a.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=R(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(La,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(ja,{}),r("span",{children:a})]}))})),Small:a.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=R(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(La,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(ja,{}),r("span",{children:a})]}))})),Large:a.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=R(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(La,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(ja,{}),r("span",{children:a})]}))}))},Ra=p.button`
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
                background-color: ${rt.Neutral[7]};
            `}
    }
`,Ya=a.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return r(Ra,Object.assign({ref:t,$outline:i,$highlight:a,type:o},s,{children:n}))})),Wa=y`
    color: ${rt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Na=p(j)`
    ${Wa}
`,Ia=p(T)`
    ${Wa}
`,_a=p(f)`
    ${Wa}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Pa=p.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Va=p.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ja=p.div`
    isolation: isolate;
    width: 100%;
`,Za=p.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${rt.Neutral[8]};

    ${e=>{if(!e.$visible)return y`
                display: none;
            `}}
`,Ua=p.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Xa=p.div`
    display: flex;
`,Ga=p.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?y`
                display: none;
            `:e.$expanded?y`
                ${_a} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Ka=p.p`
    ${pt("H5","regular")}
`,qa=p.div`
    display: flex;
`,Qa=p(Ya)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ei=p.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,ri=p(Ta.Small)`
    flex: 1;
`,ti=p.div`
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
`,ni=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?y`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${rt.Shadow.Accent};
                    border: 1px solid ${rt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return y`
                    background-color: ${rt.Accent.Light[6](e)};
                `;case"selected-month":return y`
                    background-color: ${rt.Accent.Light[5](e)};
                    border: 1px solid ${rt.Primary(e)};
                `}}}
`,ai=p(Ft.H5)`
    ${e=>{if(e.$disabledDisplay)return y`
                color: ${rt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return y`
                    color: ${rt.Neutral[3](e)};
                `;case"selected-month":return y`
                    ${pt("H5","semibold")}
                    color: ${rt.Primary(e)};
                `}}}
`,ii=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const h=m((()=>Vn.generateMonths(Ln(e))),[e]),g=e=>{const r="start"===t&&a&&e.isAfter(a,"month")&&s,i="end"===t&&n&&e.isBefore(n,"month")&&s;return r||i},b=e=>{const r=e.format("MMMM"),t=(n=e,!Vn.isWithinRange(n,l?Ln(l):void 0,d?Ln(d):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":Ln().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||g(e),interactive:!t||c,month:r,variant:a}};return h.length?r(ti,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=b(e);return r(ni,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:r(ai,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t},{children:i}))}),i)}))})):null},oi=p.div`
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
`,si=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?y`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${rt.Shadow.Accent};
                    border: 1px solid ${rt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return y`
                    background: ${rt.Accent.Light[6](e)};
                `;case"selected-year":return y`
                    background: ${rt.Accent.Light[5](e)};
                    border: 1px solid ${rt.Primary(e)};
                `}}};
`,li=p(Ft.H5)`
    ${e=>{if(e.$disabledDisplay)return y`
                color: ${rt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return y`
                    color: ${rt.Neutral[3](e)};
                `;case"selected-year":return y`
                    ${pt("H5","semibold")}
                    color: ${rt.Primary(e)};
                `;case"other-decade":return y`
                    color: ${rt.Neutral[4](e)};
                `}}}
`,di=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u})=>{const h=m((()=>Vn.generateDecadeOfYears(Ln(e))),[e]),g=e=>{const r="start"===t&&a&&e.isAfter(a,"year")&&s,i="end"===t&&n&&e.isBefore(n,"year")&&s;return r||i},b=e=>{const r=[0,11].includes(h.indexOf(e)),t=e.year(),n=(a=e,!Vn.isWithinRange(a,l?Ln(l):void 0,d?Ln(d):void 0,"year"));var a;const o=r?"other-decade":i.isSame(e,"year")?"selected-year":Ln().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||c,year:t,variant:o}};return h.length?r(oi,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=b(e);return r(si,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:r(li,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t,$interactive:n},{children:i}))}),i)}))})):null},ci=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,type:d,minDate:c,maxDate:h,currentFocus:g,selectedStartDate:m,selectedEndDate:f,selectWithinRange:p,dynamicHeight:y=!1,allowDisabledSelection:F,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:$=!0,getLeftArrowDate:S,getRightArrowDate:B,isLeftArrowDisabled:E,isRightArrowDisabled:C,getMonthHeaderLabel:A,getYearHeaderLabel:O}=n,k=R(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[H,z]=o(Qn.toDayjs(l)),[M,L]=o(Qn.toDayjs(l)),[j,T]=o("default"),Y=i(null),W=i(null),N=i();b(a,(()=>({defaultView(){T("default")},resetView(){const e=Qn.toDayjs(l);z(e),L(e),T("default")},setCalendarDate(e){const r=Qn.toDayjs(e);z(r),L(r)}}))),u((()=>{const e=Qn.toDayjs(l);z(e),L(e)}),[l]),u((()=>{U(M)}),[M]);const I=()=>{"month-options"!==j?(T("month-options"),N.current.focus()):(T("default"),z(M))},_=()=>{"default"!==j?(T("default"),z(M)):T("year-options")},P=()=>{N.current.focus();const e=S?S(H):H.subtract(1,"month");switch(j){case"default":L(e),z(e);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},V=()=>{N.current.focus();const e=B?B(H):H.add(1,"month");switch(j){case"default":L(e),z(e);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},J=e=>{z(e),L(e),x||T("default")},Z=()=>{const e=Qn.toDayjs(l);z(e),L(e),"default"===j?X("reset"):T("default")},U=e=>{v&&v(e)},X=e=>{w&&w(e)},G=()=>{if(!c||F)return!1;const e=Ln(c);return"month-options"===j?!Vn.isPreviousYearWithinRange(H,e):"year-options"===j?!Vn.isPreviousDecadeWithinRange(H,e):E?E(H):!Vn.isPreviousMonthWithinRange(H,e)},K=()=>{if(!h||F)return!1;const e=Ln(h);return"month-options"===j?!Vn.isNextYearWithinRange(H,e):"year-options"===j?!Vn.isNextDecadeWithinRange(H,e):C?C(H):!Vn.isNextMonthWithinRange(H,e)},q=()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=Vn.getStartEndDecade(H);return`${e} to ${r}`}return O?O(H):H.format("YYYY")},Q=()=>{const n=A?A(H):H.format("MMM");return e(t,{children:[e(Ga,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:I},{children:[r(Ka,{children:n}),r(_a,{})]})),e(Ga,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:_},{children:[r(Ka,{children:q()}),r(_a,{})]}))]})},ee=()=>{switch(j){case"month-options":return r(ii,{type:d,calendarDate:H,currentFocus:g,minDate:c,maxDate:h,selectedStartDate:m,selectedEndDate:f,viewCalendarDate:M,isNewSelection:p,onMonthSelect:J,allowDisabledSelection:F});case"year-options":return r(di,{type:d,calendarDate:H,currentFocus:g,minDate:c,maxDate:h,selectedStartDate:m,selectedEndDate:f,viewCalendarDate:M,isNewSelection:p,onYearSelect:J,allowDisabledSelection:F});default:return null}};return e(Pa,Object.assign({ref:N,"data-id":"calendar-container","data-testid":"calendar-container"},k,{children:[$&&e(Ua,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r(Xa,{children:Q()}),e(qa,{children:[r(Qa,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:r(Na,{})})),r(Qa,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:r(Ia,{})}))]})]})),r(Va,{children:(()=>{const n="function"==typeof s?s({calendarDate:M,currentView:j}):s;return e(t,y?{children:["default"===j&&n,ee()]}:{children:[r(Ja,{children:n}),r(Za,Object.assign({$visible:"default"!==j},{children:ee()}))]})})()}),(()=>{if(!x)return;const t=!!("default"===j)&&D;return e(ei,{children:[r(ri,Object.assign({ref:W,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),r(ri,Object.assign({"data-testid":"done-button",ref:Y,type:"button",onClick:()=>{t||(z(M),"default"===j?X("confirmed"):T("default"))},disabled:t},{children:"Done"}))]})})()]}))})),ui=p.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,hi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,gi=p.div`
    grid-column: 1 / -1;
    display: flex;
`;p.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const mi=p.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return y`
                    left: 0;
                `;case"right":return y`
                    right: 0;
                `}}}
`,bi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;p(Ft.H5)`
    ${e=>{const{$disabledDisplay:r,$selected:t,$variant:n}=e;if(r&&t)return y`
                ${pt("H5","semibold")};
                color: ${rt.Accent.Light[2]};
            `;if(r)return y`
                color: ${rt.Neutral[4]};
            `;if(t)return y`
                ${pt("H5","semibold")};
                color: ${rt.Primary};
            `;switch(n){case"other-month":return y`
                    color: ${rt.Neutral[4]};
                `;case"today":return y`
                    color: ${rt.Neutral[3]};
                `;case"default":return y`
                    color: ${rt.Neutral[1]};
                `}}}
`,p(mi)`
    ${e=>{const{$selected:r}=e;if(r)return y`
                border-top: 1px solid ${rt.Accent.Light[4]};
                border-bottom: 1px solid ${rt.Accent.Light[4]};
                background-color: ${rt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:r,$overlap:t}=e;return r?y`
                border-top: 1px dashed ${rt.Accent.Light[4]};
                border-bottom: 1px dashed ${rt.Accent.Light[4]};
                background-color: ${rt.Accent.Light[6]};
            `:t?y`
                background-color: ${rt.Accent.Light[4]};
            `:void 0}}
`,p(bi)`
    ${e=>{const{$hovered:r,$selected:t}=e;return t?y`
                background: ${rt.Accent.Light[5]};
                border: 1px solid ${rt.Primary};
            `:r?y`
                box-shadow: 0px 0px 4px 1px ${rt.Shadow.Accent};
                border: 1px solid ${rt.Accent.Light[1]};
                background-color: ${rt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:r,$disabledDisplay:t}=e;return r?y`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${rt.Shadow.Accent};
                    border: 1px solid ${rt.Accent.Light[1]};
                    background-color: ${rt.Neutral[8]};
                }
            `:t?y`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:r,$overlap:t,$variant:n}=e;return t?y`
                border: 1px solid ${rt.Accent.Light[1]};
                background: ${rt.Accent.Light[4]};

                :hover {
                    background: ${rt.Accent.Light[4]};
                }
            `:r?y`
                color: ${rt.Neutral[4]};
            `:"today"===n?y`
                    background: ${rt.Accent.Light[5]};
                `:void 0}}
`;const fi=e=>{let r=rt.Neutral[8],t="1px solid transparent";switch(e.$type){case"current":r=rt.Accent.Light[5];break;case"hover-dash":r=rt.Accent.Light[6],t=`1px dashed ${rt.Accent.Light[4](e)}`;break;case"hover-current":r=rt.Neutral[8],t=`1px solid ${rt.Primary(e)}`;break;case"selected":r=rt.Accent.Light[5],t=`1px solid ${rt.Accent.Light[4](e)}`;break;case"selected-outline":r=rt.Accent.Light[5],t=`1px solid ${rt.Primary(e)}`;break;case"overlap":r=rt.Accent.Light[4],t=`1px solid ${rt.Accent.Light[4](e)}`;break;case"overlap-outline":r=rt.Accent.Light[4],t=`1px solid ${rt.Primary(e)}`}return{color:r,border:t}},pi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,yi=p.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:r,border:t}=fi(e);return y`
            background-color: ${r};
            background-clip: content-box;
            border-top: ${t};
            border-bottom: ${t};
        `}}
`,Fi=p(yi)`
    left: 0;
`,vi=p(yi)`
    right: 0;
`,xi=p.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${rt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Di=p(xi)`
    left: 0;
`,wi=p(xi)`
    right: 0;
`,$i=p.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:r,border:t}=fi(e);return y`
                background-color: ${r};
                background-clip: content-box;
                border: ${t};
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
`,Si=p($i)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${rt.Shadow.Accent};
    }
`,Bi=p($i)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${rt.Shadow.Accent};
    }
`,Ei=p(Ft.H5)`
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

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"selected"===t?y`
                    ${pt("H5","semibold")};
                    color: ${rt.Accent.Light[2]};
                `:y`
                color: ${rt.Neutral[4]};
            `;switch(t){case"selected":return y`
                    ${pt("H5","semibold")};
                    color: ${rt.Primary};
                `;case"current":return y`
                    color: ${rt.Neutral[3]};
                `;case"unavailable":return y`
                    color: ${rt.Neutral[4]};
                `;case"hidden":return y`
                    visibility: hidden;
                `;default:return y`
                    color: ${rt.Neutral[1]};
                `}}}
`,Ci=({bgLeft:t,bgRight:n,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:l,disabled:d,interactive:c,date:u,onSelect:h,onHover:g,onHoverEnd:m})=>e(pi,{children:[r(Di,{$shadow:t&&o}),r(Fi,{$type:t,$shadow:t&&o}),r(Si,{$type:a,$shadow:a&&s}),r(wi,{$shadow:n&&o}),r(vi,{$type:n,$shadow:n&&o}),r(Bi,{$type:i,$shadow:i&&s}),r(Ei,Object.assign({weight:"regular",$type:l,$disabled:d,$interactive:c,onClick:()=>{h(u)},onMouseEnter:()=>{g(u)},onMouseLeave:()=>{m&&m(u)}},{children:u.date()}))]}),Ai=({date:e,calendarDate:t,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:g,onHover:m})=>{const b=Vn.isDisabledDay(e,d,s,l),f=!b||c,p=()=>{const e=Ln(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},y={date:e,calendarDate:t,disabled:b,interactive:f,onSelect:()=>{g(e,!f)},onHover:()=>{m(e.format("YYYY-MM-DD"),!f)}};return r(Ci,Object.assign({},y,(()=>{const r={};if(t.month()!==e.month())r.labelType=h?"hidden":"unavailable";else if(Ln().isSame(e,"day")&&!b)r.labelType="current",r.circleLeft="current",r.circleRight="current";else if(u){const t="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(t||o)&&(r.labelType="unavailable")}return r})(),(()=>{const r={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&t.month()!==e.month()?(r.labelType="hidden",r):((n&&i||a&&o)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(r.labelType="selected",i||(r.bgLeft="selected"),o||(r.bgRight="selected")),r)})(),(()=>{if(!o)return;const r={};e.isSame(o,"day")&&(r.circleShadow=!0,r.circleLeft="hover-current",r.circleRight="hover-current");const{hoverStart:t,hoverEnd:n,overlapStart:a,overlapEnd:i}=p();if(t&&n){if(e.isBetween(t,n,"day","[]")){const a=e.isSame(t,"day"),i=e.isSame(n,"day");r.labelType="selected",a||(r.bgLeft="hover-dash"),i||(r.bgRight="hover-dash")}return r}if(a&&i){if(e.isBetween(a,i,"day","[]")){const t=e.isSame(a,"day"),n=e.isSame(i,"day");r.labelType="selected",(t||n)&&(r.circleShadow=!0,r.circleLeft="overlap-outline",r.circleRight="overlap-outline"),t||(r.bgLeft="overlap"),n||(r.bgRight="overlap")}return r}return r})()))};Ln.extend(Yn);const Oi=({calendarDate:t,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:b})=>{const f=m((()=>Vn.generateDays(t)),[t]),[p,y]=o(""),F=(e,r)=>{r&&!g||l(e)},v=(e,r)=>{r&&!g||(y(e),d(e))},x=()=>{y(""),d("")};return e(ui,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,t)=>r(hi,{children:r(Ft.H6,Object.assign({weight:"semibold"},{children:Ln(e).format("ddd")}))},`week-day-${t}`))),f.map(((e,o)=>r(gi,Object.assign({onMouseLeave:x},{children:e.map(((e,o)=>r(Ai,{date:e,calendarDate:t,startDate:i,endDate:s,hoverDate:p,currentFocus:n,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:g,isNewSelection:c,showActiveMonthDaysOnly:b,onSelect:F,onHover:v},`day-${o}`)))}),o)))]}))},ki=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=Vn.isDisabledDay(e,s,i,o),g=!h||l,{start:m,end:b}=n?Vn.getFixedRangeStartEnd(Qn.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:p}=a?Vn.getFixedRangeStartEnd(Qn.toDayjs(a),d):{start:void 0,end:void 0},y=n&&e.isBetween(m,b,"day","[]"),F=a&&e.isBetween(f,p,"day","[]"),v=y&&e.isSame(m,"day")||F&&e.isSame(f,"day"),x=y&&e.isSame(b,"day")||F&&e.isSame(p,"day"),D=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},w={date:e,calendarDate:t,disabled:h,interactive:g,onSelect:()=>{c(e,!g)},onHover:()=>{u(e.format("YYYY-MM-DD"),!g)}};return r(Ci,Object.assign({},w,(()=>{const r={};return y||F?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":Ln().isSame(e,"day")&&!h&&(r.labelType="current",r.circleLeft="current",r.circleRight="current"),r})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return F&&D(r,"hover-dash",t===f,t===p),y&&D(r,"selected",t===m,t===b),y&&F&&D(r,"overlap",v,x),t===m&&(F?(r.circleLeft="overlap-outline",r.circleRight="overlap-outline"):(r.circleRight="selected-outline",r.circleLeft="selected-outline")),t===f&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0,f>=m&&f<b&&(r.circleLeft="overlap-outline",r.circleRight="overlap-outline")),r})()))},Hi=({calendarDate:t,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const h=m((()=>Vn.generateDays(t)),[t]),[g,b]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!Ln(e).isSame(e,"month")&&b(""))},p=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(ui,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,t)=>r(hi,{children:r(Ft.H6,Object.assign({weight:"semibold"},{children:Ln(e).format("ddd")}))},`week-day-${t}`))),h.map(((e,i)=>r(gi,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>r(ki,{date:e,calendarDate:t,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:p,numberOfDays:u},`day-${i}`)))}),i)))]}))},zi=p.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${rt.Neutral[8]};

    ${e=>{if("input"===e.$type)return y`
                border: 1px solid ${rt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Mi=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Vn.isDisabledDay(e,s,i,o),h=!u||l,{start:g,end:m}=Vn.getWeekStartEnd(Qn.toDayjs(n)),{start:b,end:f}=Vn.getWeekStartEnd(Qn.toDayjs(a)),p=n&&e.isBetween(g,m,"day","[]"),y=a&&e.isBetween(b,f,"day","[]"),F=p&&e.isSame(g)||y&&e.isSame(b),v=p&&e.isSame(m)||y&&e.isSame(f),x={date:e,calendarDate:t,disabled:u,interactive:h,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return r(Ci,Object.assign({},x,(()=>{const r={};return p||y?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":Ln().isSame(e,"day")&&!u&&(r.labelType="current",r.circleLeft="current",r.circleRight="current"),r})(),(()=>{const e={};let r;return p&&y?(r="hover-current",e.shadow=!0,e.circleShadow=F||v):p?r="selected-outline":y&&(r="hover-dash"),r&&(F?e.circleLeft=r:e.bgLeft=r,v?e.circleRight=r:e.bgRight=r),e})()))},Li=({calendarDate:t,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=m((()=>Vn.generateDays(t)),[t]),[h,g]=o(""),b=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!Ln(e).isSame(t,"month")&&g("")},f=(e,r)=>{r&&!c||(g(e),s(e))},p=()=>{g(""),s("")};return e(ui,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,t)=>r(hi,{children:r(Ft.H6,Object.assign({weight:"semibold"},{children:Ln(e).format("ddd")}))},`week-day-${t}`))),u.map(((e,i)=>r(gi,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>r(Mi,{date:e,calendarDate:t,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:b,onHover:f},`day-${i}`)))}),i)))]}))},ji=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:g,allowDisabledSelection:m,type:f="standalone",selectWithinRange:p=!0,initialCalendarDate:y,numberOfDays:F,showActiveMonthDaysOnly:v=!1},x)=>{const D=i(),w=i(void 0);b(x,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const $=e=>{const r=e.format("YYYY-MM-DD");D.current.setCalendarDate(r),B(r)},S=e=>{E(e)},B=e=>{n&&n(e)},E=e=>{a&&a(e)},C=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r(zi,Object.assign({$type:f},{children:r(ci,Object.assign({type:f,ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:g,selectWithinRange:p,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||C(e),w.current=e},initialCalendarDate:y},{children:({calendarDate:t})=>(t=>{switch(u){case"week":return r(Li,{calendarDate:t,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:m,onSelect:$,onHover:S});case"fixed-range":return r(Hi,{calendarDate:t,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:m,onSelect:$,onHover:S,numberOfDays:F});default:return r(Oi,{calendarDate:t,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:p,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:S})}})(t)}))}))})),Ti=a.forwardRef(((e,t)=>{var{width:n}=e,a=R(e,["width"]);return r(zn,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:r(ji,Object.assign({ref:t},a))}))})),Ri=y`
    border: 1px solid ${rt.Accent.Light[1]};
    box-shadow: ${at};
`,Yi=y`
    border: 1px solid ${rt.Accent.Light[1]};
    box-shadow: none;
`,Wi=y`
    border: 1px solid ${rt.Neutral[5]};
    box-shadow: none;
`,Ni=y`
    border: 1px solid ${rt.Validation.Red.Border};
    box-shadow: ${it};
`,Ii=p.div`
    border: 1px solid ${rt.Neutral[5]};
    border-radius: 4px;
    background: ${rt.Neutral[8]};

    :focus-within {
        ${Ri}
    }
    ${e=>e.$focused&&Ri}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Yi}
                }
                ${e.$focused&&Yi}
            `:e.$disabled?y`
                background: ${rt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Wi}
                }
                ${e.$focused&&Wi}
            `:e.$error?y`
                border: 1px solid ${rt.Validation.Red.Border};

                :focus-within {
                    ${Ni}
                }
                ${e.$focused&&Ni}
            `:void 0}
`,_i=p(Ii)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Pi=p.input`
    ${e=>pt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${rt.Neutral[1]};
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
        color: ${rt.Neutral[3]};
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
`;p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${rt.Primary};
    }
`;const Vi=p.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Ji=p.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return y`
                ${Zi}, ${Ki} {
                    color: ${rt.Neutral[4]};
                }
            `}}
`,Zi=p(Pi)`
    background: transparent;
    text-align: center;
`,Ui=p(Zi)`
    width: 2rem;
    margin-right: 0.25rem;
`,Xi=p(Zi)`
    width: 2.5rem;
`,Gi=p(Zi)`
    width: 3rem;
    margin-left: 0.25rem;
`,Ki=p(Ft.Body)`
    ${e=>{if(e.$inactive)return y`
                color: ${rt.Neutral[3](e)};
            `}}
`,qi=p.div`
    ${pt("Body","regular")}
    background-color: ${rt.Neutral[8]};
    color: ${rt.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?y`
                background-color: ${rt.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?y`
                display: none;
            `:void 0}
`;Ln.extend(Tn);const Qi=a.forwardRef((({disabled:t,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:h,onChange:g,onFocus:m,onBlur:f,hideInputKeyboard:p},y)=>{const F=p?"none":"numeric",[v,x,D]=na(""),[w,$,S]=na(""),[B,E,C]=na(""),[A,O]=o("none"),[k,H]=o(!1),z=i(null),M=i(null),L=i(null),j=i(null),[T,R,Y]=V(d);u((()=>{const[e="",r="",t=""]=V(s);x(e),$(r),E(t),e||r||t||!z.current.contains(document.activeElement)||M.current.focus()}),[s]),u((()=>{l||O("none"),l&&(H(!0),z.current.contains(document.activeElement)||M.current.focus())}),[l]),b(y,(()=>({ref:z,resetPlaceholder(){H(!1)},resetInput(){const[e="",r="",t=""]=V(s);x(e),$(r),E(t)}})),[s]);const W=e=>{var r;e.preventDefault(),null===(r=M.current)||void 0===r||r.focus()},N=e=>{e.target.select();const r=e.target.name;O(r)},I=e=>{const[r,t,n]=a,i={[r]:D.current,[t]:S.current,[n]:C.current},o=e.target.name,s=i[o],l=o!==n?ta.padValue(s,!0):s;switch(o){case r:i[r]=l,x(l);break;case t:i[t]=l,$(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=Ln(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&g(d),z.current.contains(e.relatedTarget)||(O("none"),null==f||f(u||c))},_=e=>{if(d)return;const r=e.target.name,t=e.target.value.replace(/[^0-9]/g,""),n={day:v,month:w,year:B};switch(r){case a[0]:n.day=t,x(t),2===t.length&&L.current.focus();break;case a[1]:n.month=t,$(t),2===t.length&&j.current.focus();break;case a[2]:n.year=t,E(t)}if(!n.day&&!n.month&&!n.year)return void g("");const i=`${n.year}-${n.month}-${n.day}`;Ln(i,"YYYY-MM-DD",!0).isValid()&&g(i)},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(A===a[1]&&0===w.length&&M.current.focus(),A===a[2]&&0===B.length&&L.current.focus())};function V(e){if(e){const r=Ln(new Date(e));return r.isValid()?[ta.padValue(r.date().toString()),ta.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Vi,Object.assign({role:"group","aria-label":h,onClick:()=>{t||n||(H(!0),z.current.contains(document.activeElement)||M.current.focus())},onFocus:e=>{t||(H(!0),l||null==m||m(e))}},{children:[e(Ji,Object.assign({ref:z,$hover:!!d},{children:[r(Ui,{ref:M,name:a[0],maxLength:2,value:null!=T?T:v,onFocus:N,onBlur:I,onChange:_,type:"text",inputMode:F,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:t,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[0]||n?"DD":""}),r(Ki,Object.assign({$inactive:0===v.length},{children:"/"})),r(Xi,{ref:L,name:a[1],maxLength:2,value:null!=R?R:w,onFocus:N,onBlur:I,onChange:_,onKeyDown:P,type:"text",inputMode:F,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:t,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[1]||n?"MM":""}),r(Ki,Object.assign({$inactive:0===w.length},{children:"/"})),r(Gi,{ref:j,name:a[2],maxLength:4,value:null!=Y?Y:B,onFocus:N,onBlur:I,onChange:_,onKeyDown:P,type:"text",inputMode:F,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:t,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[2]||n?"YYYY":""})]})),(()=>{if(!s&&!n&&c)return r(qi,Object.assign({$hide:k,$disabled:t,onMouseDown:W},{children:c}))})()]}))})),eo=p(_i)`
    height: 3rem;
`,ro=e=>{var{minDate:t,maxDate:n,disabled:a,disabledDates:s,error:l,hideInputKeyboard:d,value:c,onChange:h,onFocus:g,onBlur:m,onYearMonthDisplayChange:b,withButton:f=!0,readOnly:p,id:y,allowDisabledSelection:F,zIndex:v}=e,x=R(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[D,w]=o(ea.sanitizeInput(c)),[$,S]=o(ea.sanitizeInput(c)),[B,E]=o(void 0),[C,A]=o(!1),[O,k]=o(!1),H=i(null),z=i();u((()=>{const e=ea.sanitizeInput(c);w(e),S(e)}),[c]);const M=e=>{!F&&ea.isDateDisabled(e,{disabledDates:s,minDate:t,maxDate:n})||(S(e),f||(N(e),w(e),e&&A(!1)))},L=e=>{S(e),f||(N(e),w(e),e&&(H.current.focus(),A(!1)),B&&E(void 0))},j=()=>{p||a||(A(!0),O||(k(!0),g&&g()))},T=e=>{!O||C||H.current.contains(e.relatedTarget)||(z.current.resetInput(),S(D),k(!1),I())},Y=e=>{E(e)},W=e=>{switch(e){case"reset":S(D);break;case"confirmed":w($),N($)}H.current.focus(),A(!1)},N=e=>{h&&h(e)},I=()=>{m&&m()};return r(Hn,{enabled:!p&&!a,isOpen:C,renderElement:()=>r(eo,Object.assign({tabIndex:-1,ref:H,onBlur:T,onFocus:j,$disabled:a,$readOnly:p,$focused:O,$error:l,id:y,"data-testid":x["data-testid"]},x,{children:r(Qi,{ref:z,disabled:a,onChange:M,readOnly:p,focused:C,names:["start-day","start-month","start-year"],value:$,hoverValue:B,hideInputKeyboard:d})})),renderDropdown:({elementWidth:e})=>r(Ti,{type:"input",variant:"single",initialCalendarDate:$,withButton:f,value:$,disabledDates:s,minDate:t,maxDate:n,allowDisabledSelection:F,onHover:Y,onSelect:L,onDismiss:W,onYearMonthDisplayChange:b,width:e}),onClose:()=>{z.current.resetInput(),S(D),A(!1),k(!1),I()},onDismiss:()=>{z.current.resetInput(),H.current.focus(),S(D),A(!1)},customZIndex:v,offset:16})};export{ro as DateInput};
//# sourceMappingURL=index.js.map
