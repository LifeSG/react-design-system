import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import a,{useRef as i,useState as o,isValidElement as l,createRef as s,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,useCallback as f,useMemo as g,useImperativeHandle as p}from"react";import{ChevronDownIcon as m}from"@lifesg/react-icons/chevron-down";import y,{css as b,keyframes as v}from"styled-components";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{useFloatingTree as D,useFloating as S,autoUpdate as w,offset as F,flip as x,shift as B,limitShift as O,size as H,useTransitionStyles as k,useClick as E,useDismiss as A,useInteractions as M,FloatingPortal as C,FloatingFocusManager as z}from"@floating-ui/react";import{findDOMNode as L}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as T}from"@lifesg/react-icons/chevron-right";function R(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N=Array.isArray,I="object"==typeof Y&&Y&&Y.Object===Object&&Y,_="object"==typeof self&&self&&self.Object===Object&&self,P=I||_||Function("return this")(),V=P.Symbol,J=V,Z=Object.prototype,U=Z.hasOwnProperty,X=Z.toString,G=J?J.toStringTag:void 0;var K=function(e){var t=U.call(e,G),n=e[G];try{e[G]=void 0;var r=!0}catch(e){}var a=X.call(e);return r&&(t?e[G]=n:delete e[G]),a},q=Object.prototype.toString;var Q=K,ee=function(e){return q.call(e)},te=V?V.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":te&&te in Object(e)?Q(e):ee(e)};var re=ne,ae=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==re(e)},oe=N,le=ie,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;var de=function(e,t){if(oe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!le(e))||(ce.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},he=ne,fe=ue;var ge,pe=function(e){if(!fe(e))return!1;var t=he(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=P["__core-js_shared__"],ye=(ge=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var be=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var $e=pe,De=be,Se=ue,we=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,xe=Function.prototype,Be=Object.prototype,Oe=xe.toString,He=Be.hasOwnProperty,ke=RegExp("^"+Oe.call(He).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ee=function(e){return!(!Se(e)||De(e))&&($e(e)?ke:Fe).test(we(e))},Ae=function(e,t){return null==e?void 0:e[t]};var Me=function(e,t){var n=Ae(e,t);return Ee(n)?n:void 0},Ce=Me(Object,"create"),ze=Ce;var Le=function(){this.__data__=ze?ze(null):{},this.size=0};var je=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Te=Ce,Re=Object.prototype.hasOwnProperty;var Ye=function(e){var t=this.__data__;if(Te){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Re.call(t,e)?t[e]:void 0},We=Ce,Ne=Object.prototype.hasOwnProperty;var Ie=Ce;var _e=Le,Pe=je,Ve=Ye,Je=function(e){var t=this.__data__;return We?void 0!==t[e]:Ne.call(t,e)},Ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=_e,Ue.prototype.delete=Pe,Ue.prototype.get=Ve,Ue.prototype.has=Je,Ue.prototype.set=Ze;var Xe=Ue;var Ge=function(){this.__data__=[],this.size=0};var Ke=function(e,t){return e===t||e!=e&&t!=t};var qe=function(e,t){for(var n=e.length;n--;)if(Ke(e[n][0],t))return n;return-1},Qe=qe,et=Array.prototype.splice;var tt=qe;var nt=qe;var rt=qe;var at=Ge,it=function(e){var t=this.__data__,n=Qe(t,e);return!(n<0)&&(n==t.length-1?t.pop():et.call(t,n,1),--this.size,!0)},ot=function(e){var t=this.__data__,n=tt(t,e);return n<0?void 0:t[n][1]},lt=function(e){return nt(this.__data__,e)>-1},st=function(e,t){var n=this.__data__,r=rt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=at,ct.prototype.delete=it,ct.prototype.get=ot,ct.prototype.has=lt,ct.prototype.set=st;var dt=ct,ut=Me(P,"Map"),ht=Xe,ft=dt,gt=ut;var pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var n=e.__data__;return pt(t)?n["string"==typeof t?"string":"hash"]:n.map},yt=mt;var bt=mt;var vt=mt;var $t=mt;var Dt=function(e,t){var n=$t(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},St=function(){this.size=0,this.__data__={hash:new ht,map:new(gt||ft),string:new ht}},wt=function(e){var t=yt(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return bt(this,e).get(e)},xt=function(e){return vt(this,e).has(e)},Bt=Dt;function Ot(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ot.prototype.clear=St,Ot.prototype.delete=wt,Ot.prototype.get=Ft,Ot.prototype.has=xt,Ot.prototype.set=Bt;var Ht=Ot;function kt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(kt.Cache||Ht),n}kt.Cache=Ht;var Et=kt;var At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/\\(\\)?/g,Ct=function(e){var t=Et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(At,(function(e,n,r,a){t.push(r?a.replace(Mt,"$1"):n||e)})),t}));var zt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},Lt=N,jt=ie,Tt=V?V.prototype:void 0,Rt=Tt?Tt.toString:void 0;var Yt=function e(t){if("string"==typeof t)return t;if(Lt(t))return zt(t,e)+"";if(jt(t))return Rt?Rt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Wt=Yt;var Nt=N,It=de,_t=Ct,Pt=function(e){return null==e?"":Wt(e)};var Vt=ie;var Jt=function(e,t){return Nt(e)?e:It(e,t)?[e]:_t(Pt(e))},Zt=function(e){if("string"==typeof e||Vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ut=function(e,t){for(var n=0,r=(t=Jt(t,e)).length;null!=e&&n<r;)e=e[Zt(t[n++])];return n&&n==r?e:void 0};var Xt=W((function(e,t,n){var r=null==e?void 0:Ut(e,t);return void 0===r?n:r}));const Gt=(e,t,n)=>t?Xt(n,t)||Xt(e,t):n||e,Kt=(e,t)=>{const n=t||e.defaultValue;return Xt(e.collections,n)};var qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(qt||(qt={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},en=e=>t=>{const n=t.theme,r=Kt(Qt,n[qt.colorScheme]);return n.options&&n.options.color?Gt(r,e,n.options.color):Gt(r,e)},tn={Brand:{1:en("Brand.1"),2:en("Brand.2"),3:en("Brand.3"),4:en("Brand.4"),5:en("Brand.5"),6:en("Brand.6")},Primary:en("Primary"),PrimaryDark:en("PrimaryDark"),Secondary:en("Secondary"),Accent:{Light:{1:en("Accent.Light.1"),2:en("Accent.Light.2"),3:en("Accent.Light.3"),4:en("Accent.Light.4"),5:en("Accent.Light.5"),6:en("Accent.Light.6")},Dark:{1:en("Accent.Dark.1"),2:en("Accent.Dark.2"),3:en("Accent.Dark.3")}},Neutral:{1:en("Neutral.1"),2:en("Neutral.2"),3:en("Neutral.3"),4:en("Neutral.4"),5:en("Neutral.5"),6:en("Neutral.6"),7:en("Neutral.7"),8:en("Neutral.8")},Validation:{Green:{Text:en("Validation.Green.Text"),Icon:en("Validation.Green.Icon"),Border:en("Validation.Green.Border"),Background:en("Validation.Green.Background")},Orange:{Text:en("Validation.Orange.Text"),Icon:en("Validation.Orange.Icon"),Border:en("Validation.Orange.Border"),Background:en("Validation.Orange.Background"),Badge:en("Validation.Orange.Badge")},Red:{Text:en("Validation.Red.Text"),Icon:en("Validation.Red.Icon"),Border:en("Validation.Red.Border"),Background:en("Validation.Red.Background")},Blue:{Text:en("Validation.Blue.Text"),Icon:en("Validation.Blue.Icon"),Border:en("Validation.Blue.Border"),Background:en("Validation.Blue.Background")}},Shadow:{Accent:en("Shadow.Accent"),Red:en("Shadow.Red"),Elevation:en("Shadow.Elevation")}},nn={collections:{base:{InputBoxShadow:b`
        inset 0 0 4px 0px ${tn.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 4px 0px ${tn.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${tn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:b`
        inset 0 0 3px 0px ${tn.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 3px 0px ${tn.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${tn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},rn=e=>t=>{var n;const r=t.theme,a=Kt(nn,r[qt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Gt(a,e,r.options.designToken):Gt(a,e)},an={InputBoxShadow:rn("InputBoxShadow"),InputErrorBoxShadow:rn("InputErrorBoxShadow"),ElevationBoxShadow:rn("ElevationBoxShadow"),Table:{Header:rn("Table.Header"),Cell:{Primary:rn("Table.Cell.Primary"),Secondary:rn("Table.Cell.Secondary"),Selected:rn("Table.Cell.Selected"),Hover:rn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:rn("Button.Danger.BackgroundColor"),Hover:rn("Button.Danger.Hover"),Primary:rn("Button.Danger.Primary"),Border:rn("Button.Danger.Border")}}},on={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},ln={D1:{fontFamily:on.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:on.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:on.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:on.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:on.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:on.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:on.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:on.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:on.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:on.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:on.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:on.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:on.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:on.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},sn={D1:{fontFamily:on.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:on.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:on.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:on.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:on.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:on.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:on.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:on.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:on.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:on.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:on.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:on.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:on.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:on.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},cn={collections:{base:ln,oneservice:{D1:{fontFamily:on.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:on.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:on.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:on.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:on.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:on.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:on.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:on.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:on.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:on.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:on.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:on.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:on.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:on.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:sn},defaultValue:"base"},dn=e=>t=>{const n=t.theme,r=Kt(cn,n[qt.textStyleScheme]);return n.options&&n.options.textStyle?Gt(r,e,n.options.textStyle):Gt(r,e)},un={D1:{fontFamily:dn("D1.fontFamily"),fontSize:dn("D1.fontSize"),fontWeight:dn("D1.fontWeight"),lineHeight:dn("D1.lineHeight"),letterSpacing:dn("D1.letterSpacing")},D2:{fontFamily:dn("D2.fontFamily"),fontSize:dn("D2.fontSize"),fontWeight:dn("D2.fontWeight"),lineHeight:dn("D2.lineHeight"),letterSpacing:dn("D2.letterSpacing")},D3:{fontFamily:dn("D3.fontFamily"),fontSize:dn("D3.fontSize"),fontWeight:dn("D3.fontWeight"),lineHeight:dn("D3.lineHeight"),letterSpacing:dn("D3.letterSpacing")},D4:{fontFamily:dn("D4.fontFamily"),fontSize:dn("D4.fontSize"),fontWeight:dn("D4.fontWeight"),lineHeight:dn("D4.lineHeight"),letterSpacing:dn("D4.letterSpacing")},DBody:{fontFamily:dn("DBody.fontFamily"),fontSize:dn("DBody.fontSize"),fontWeight:dn("DBody.fontWeight"),lineHeight:dn("DBody.lineHeight"),letterSpacing:dn("DBody.letterSpacing")},H1:{fontFamily:dn("H1.fontFamily"),fontSize:dn("H1.fontSize"),fontWeight:dn("H1.fontWeight"),lineHeight:dn("H1.lineHeight"),letterSpacing:dn("H1.letterSpacing")},H2:{fontFamily:dn("H2.fontFamily"),fontSize:dn("H2.fontSize"),fontWeight:dn("H2.fontWeight"),lineHeight:dn("H2.lineHeight"),letterSpacing:dn("H2.letterSpacing")},H3:{fontFamily:dn("H3.fontFamily"),fontSize:dn("H3.fontSize"),fontWeight:dn("H3.fontWeight"),lineHeight:dn("H3.lineHeight"),letterSpacing:dn("H3.letterSpacing")},H4:{fontFamily:dn("H4.fontFamily"),fontSize:dn("H4.fontSize"),fontWeight:dn("H4.fontWeight"),lineHeight:dn("H4.lineHeight"),letterSpacing:dn("H4.letterSpacing")},H5:{fontFamily:dn("H5.fontFamily"),fontSize:dn("H5.fontSize"),fontWeight:dn("H5.fontWeight"),lineHeight:dn("H5.lineHeight"),letterSpacing:dn("H5.letterSpacing")},H6:{fontFamily:dn("H6.fontFamily"),fontSize:dn("H6.fontSize"),fontWeight:dn("H6.fontWeight"),lineHeight:dn("H6.lineHeight"),letterSpacing:dn("H6.letterSpacing")},Body:{fontFamily:dn("Body.fontFamily"),fontSize:dn("Body.fontSize"),fontWeight:dn("Body.fontWeight"),lineHeight:dn("Body.lineHeight"),letterSpacing:dn("Body.letterSpacing")},BodySmall:{fontFamily:dn("BodySmall.fontFamily"),fontSize:dn("BodySmall.fontSize"),fontWeight:dn("BodySmall.fontWeight"),lineHeight:dn("BodySmall.lineHeight"),letterSpacing:dn("BodySmall.letterSpacing")},XSmall:{fontFamily:dn("XSmall.fontFamily"),fontSize:dn("XSmall.fontSize"),fontWeight:dn("XSmall.fontWeight"),lineHeight:dn("XSmall.lineHeight"),letterSpacing:dn("XSmall.letterSpacing")}},hn=[on.OpenSans,on.PlusJakartaSans],fn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},gn=(e,t)=>n=>{var r;const a=un[e].fontFamily(n),i=un[e].fontWeight(n),o=hn.find((e=>Object.values(e).includes(a)));return o?b`
                font-family: ${fn(o,t)||fn(o,i)||a};
                font-weight: normal !important;
            `:b`
            font-family: ${a};
            font-weight: ${null!==(r=pn(t)||i)&&void 0!==r?r:"normal"};
        `},pn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},mn=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},yn=(e,t,n=!1)=>r=>{const a=un[e],i=a.fontSize(r);return b`
            ${gn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${b`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},bn=(e=!1,t=!1,n=void 0)=>t?b`
            display: block;
            ${mn(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${mn(n)}
        `;var vn;!function(e){e.D1=y.h1`
        ${e=>b`
                ${yn("D1",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>b`
                ${yn("D2",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>b`
                ${yn("D3",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>b`
                ${yn("D4",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>b`
                ${yn("DBody",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>b`
                ${yn("H1",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>b`
                ${yn("H2",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>b`
                ${yn("H3",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>b`
                ${yn("H4",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>b`
                ${yn("H5",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>b`
                ${yn("H6",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>b`
                ${yn("Body",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>b`
                ${yn("BodySmall",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>b`
                ${yn("XSmall",e.weight,e.paragraph)}
                color: ${tn.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Sn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Sn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(vn||(vn={}));const $n=y.a`
    ${e=>b`
            ${yn(e.textStyle,e.weight)}
            color: ${tn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${tn.Secondary};

                svg {
                    color: ${tn.Secondary};
                }
            }
        `}
`,Dn=y($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Sn=n=>{var{external:r=!1,children:a}=n,i=R(n,["external","children"]);return e($n,Object.assign({},i,{children:[a,r&&t(Dn,{})]}))};var wn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(wn||(wn={}));const Fn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",xn=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const t=xn(e.$variant);return b`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Bn=b`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>xn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${tn.Accent.Light[3]};
    }
`,On=y.button`
    ${Bn}
    cursor: pointer;
`;y.div`
    ${Bn}
`;const Hn=v`
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
    border: 1px solid ${tn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${tn.Neutral[8]};

    :focus-within {
        border: 1px solid ${tn.Accent.Light[1]};
        box-shadow: ${an.InputBoxShadow};
    }

    ${e=>e.expanded?b`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:b`
                animation: ${Hn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?b`
                background: ${tn.Neutral[6](e)};

                ${On} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${tn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?b`
                border: none;
                background: transparent !important;

                ${On} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?b`
                border: 1px solid ${tn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${tn.Validation.Red.Border(e)};
                    box-shadow: ${an.InputErrorBoxShadow};
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Fn};
    margin-left: 1rem;
`,y(m)`
    color: ${tn.Neutral[3]};
    ${e=>{let t=un.Body.fontSize;return"small"===e.$variant&&(t=un.BodySmall.fontSize),b`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,y.div`
    height: 1px;
    background: ${tn.Neutral[5]};
    margin: 0 0.5rem;
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return b`
                color: ${tn.Neutral[3]};
            `}}
`;const kn=y.div`
    ${e=>yn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return b`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;y(kn)`
    color: ${tn.Neutral[3]};
`;var En=function(e,t){return En=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},En(e,t)};var An=function(){return An=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},An.apply(this,arguments)};var Mn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Cn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},zn="object"==typeof Mn&&Mn&&Mn.Object===Object&&Mn,Ln="object"==typeof self&&self&&self.Object===Object&&self,jn=zn||Ln||Function("return this")(),Tn=jn,Rn=function(){return Tn.Date.now()},Yn=/\s/;var Wn=function(e){for(var t=e.length;t--&&Yn.test(e.charAt(t)););return t},Nn=/^\s+/;var In=function(e){return e?e.slice(0,Wn(e)+1).replace(Nn,""):e},_n=jn.Symbol,Pn=_n,Vn=Object.prototype,Jn=Vn.hasOwnProperty,Zn=Vn.toString,Un=Pn?Pn.toStringTag:void 0;var Xn=function(e){var t=Jn.call(e,Un),n=e[Un];try{e[Un]=void 0;var r=!0}catch(e){}var a=Zn.call(e);return r&&(t?e[Un]=n:delete e[Un]),a},Gn=Object.prototype.toString;var Kn=Xn,qn=function(e){return Gn.call(e)},Qn=_n?_n.toStringTag:void 0;var er=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Qn&&Qn in Object(e)?Kn(e):qn(e)},tr=function(e){return null!=e&&"object"==typeof e};var nr=In,rr=Cn,ar=function(e){return"symbol"==typeof e||tr(e)&&"[object Symbol]"==er(e)},ir=/^[-+]0x[0-9a-f]+$/i,or=/^0b[01]+$/i,lr=/^0o[0-7]+$/i,sr=parseInt;var cr=Cn,dr=Rn,ur=function(e){if("number"==typeof e)return e;if(ar(e))return NaN;if(rr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=rr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=nr(e);var n=or.test(e);return n||lr.test(e)?sr(e.slice(2),n?2:8):ir.test(e)?NaN:+e},hr=Math.max,fr=Math.min;var gr=function(e,t,n){var r,a,i,o,l,s,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-c>=i}function p(){var e=dr();if(g(e))return m(e);l=setTimeout(p,function(e){var n=t-(e-s);return u?fr(n,i-(e-c)):n}(e))}function m(e){return l=void 0,h&&r?f(e):(r=a=void 0,o)}function y(){var e=dr(),n=g(e);if(r=arguments,a=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(p,t),d?f(e):o}(s);if(u)return clearTimeout(l),l=setTimeout(p,t),f(s)}return void 0===l&&(l=setTimeout(p,t)),o}return t=ur(t)||0,cr(n)&&(d=!!n.leading,i=(u="maxWait"in n)?hr(ur(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=a=l=void 0},y.flush=function(){return void 0===l?o:m(dr())},y},pr=gr,mr=Cn;var yr=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return mr(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),pr(e,t,{leading:r,maxWait:t,trailing:a})},br=function(e,t,n,r){switch(t){case"debounce":return gr(e,n,r);case"throttle":return yr(e,n,r);default:return e}},vr=function(e){return"function"==typeof e},$r=function(){return"undefined"==typeof window},Dr=function(e){return e instanceof Element||e instanceof HTMLDocument},Sr=function(e,t,n,r){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!r||t.height===o&&!n?t:(e&&vr(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!$r()){t&&t.current&&(n.targetRef.current=t.current);var a=n.getElement();a&&(n.observableElement&&n.observableElement===a||(n.observableElement=a,n.resizeObserver.observe(a,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if($r())return null;if(t)return document.querySelector(t);if(r&&Dr(r))return r;if(n.targetRef&&Dr(n.targetRef.current))return n.targetRef.current;var a=L(n);if(!a)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,a=void 0===r||r,i=t.handleHeight,o=void 0===i||i,l=t.onResize;if(a||o){var s=Sr(l,n.setState.bind(n),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,a=t.height;!n.skipOnMount&&!$r()&&s({width:r,height:a}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return vr(t)?"renderProp":vr(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,$r()||(n.resizeHandler=br(n.createResizeHandler,a,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}En(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){$r()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,a=t.children,i=t.nodeType,o=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=a)(s);case"child":if((e=a).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(s,["targetRef"]);return c(e,d)}return c(e,s);case"childArray":return(e=a).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(o,null)}}}(d);var wr=$r()?u:h;const Fr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},xr=e=>Object.keys(Fr).reduce(((t,n)=>{const r=Fr[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Br=xr("max-width"),Or=(xr("min-width"),Fr);var Hr;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Hr||(Hr={}));const kr=y.div`
    display: flex;
    flex-direction: column;
`,Er=e=>"right"===e?"bottom-end":"bottom-start",Ar=({enabled:r,isOpen:a,onOpen:l,onClose:s,onDismiss:c,renderElement:d,renderDropdown:h,customZIndex:f,clickToToggle:g=!1,offset:p=0,alignment:m="left",fitAvailableHeight:y})=>{var b;const v=i(null),$=i(null),{width:L}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,s=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,g=e.observerOptions,p=e.onResize,m=i(n),y=i(null),b=null!=f?f:y,v=i(),$=o({width:void 0,height:void 0}),D=$[0],S=$[1];return wr((function(){if(!$r()){var e=Sr(p,S,d,h);v.current=br((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,a=n.height;!m.current&&!$r()&&e({width:r,height:a}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,d,h,p,g,b.current]),An({ref:b},D)}({targetRef:v,handleHeight:!1}),j={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<Or.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:T,floatingStyles:R,context:Y}=S({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!a?null==l||l():!e&&a&&(null==s||s(n))},whileElementsMounted:w,placement:Er(m),middleware:[F(p),x(),B({limiter:O()}),H({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),j]}),W=(()=>{const[e,t]=o(void 0),n=D();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Hr.Change,e),n.events.emit(Hr.Ready),()=>n.events.off(Hr.Change,e)}),[n]),e})(),{isMounted:N,styles:I}=k(Y,{initial:{opacity:0},open:{opacity:1},duration:300}),_=E(Y,{enabled:r,toggle:g}),P=A(Y,{enabled:r}),{getReferenceProps:V,getFloatingProps:J}=M([_,P]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,T.setReference(e)}},V(),{children:d()})),N&&t(C,{children:t(z,Object.assign({context:Y,modal:!1,initialFocus:$,returnFocus:!1},{children:t("div",Object.assign({ref:T.setFloating,style:Object.assign(Object.assign({},R),{zIndex:null!==(b=null!=f?f:W)&&void 0!==b?b:50})},J(),{children:t(kr,Object.assign({ref:$,style:Object.assign({},I),inert:I.opacity<1?"":void 0},{children:h({elementWidth:L})}))}))}))})]})},Mr=y.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Br.mobileL} {
        min-width: 17.5rem;
    }
`;var Cr={exports:{}};Cr.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:i,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var D="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[D])},w=function e(t,n,r){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(a=i),n&&($[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var l=t.name;$[l]=t,a=l}return!r&&a&&(v=a),a||!r&&v},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},x=b;x.l=w,x.i=S,x.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,d=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case l:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case i:return g(b+"Seconds",2);case a:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=x.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[i]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=x.p(d),p=function(e){var t=F(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=F(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return x.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case s:g=(v-b)/6048e5;break;case l:g=(v-b)/864e5;break;case o:g=v/n;break;case i:g=v/t;break;case a:g=v/e;break;default:g=v}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return F.prototype=O,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=w,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=$[v],F.Ls=$,F.p={},F}();var zr=W(Cr.exports),Lr={exports:{}};Lr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,s=a.parser,c=e.slice(r),d=i.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!s&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var y=l||0,b=s||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var jr=W(Lr.exports),Tr={exports:{}};Tr.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var Rr=W(Tr.exports),Yr={exports:{}};Yr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Wr=W(Yr.exports),Nr={exports:{}};Nr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ir,_r,Pr,Vr=W(Nr.exports),Jr={exports:{}},Zr=W(Jr.exports=(Ir={year:0,month:1,day:2,hour:3,minute:4,second:5},_r={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=_r[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),_r[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,d=Ir[s];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(a-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,l=a||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));zr.extend(Rr),zr.extend(Vr),zr.extend(Wr),zr.extend(jr),zr.extend(Zr),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=zr(t).startOf("week");return Ur(n).map((e=>Xr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Xr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(zr(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+zr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=zr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?zr(r):void 0,a?zr(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Pr||(Pr={}));const Ur=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Xr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Gr=[1,3,5,7,8,10,12],Kr=[4,6,9,11];var qr,Qr,ea,ta;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":Gr.includes(i)?Math.min(a,31).toString():Kr.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=zr(e,n);return zr(t,n).diff(r,"minute")},e.toDayjs=e=>e?zr(e):zr(),e.addMinutesToTime=(e,t,n="HH:mm")=>zr(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>zr(e).isSame(zr(t),n)}(qr||(qr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!zr(e).isBefore(r,"day"))||!(!a||!zr(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(zr(e).isValid())return e}return""}}(Qr||(Qr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ea||(ea={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ta||(ta={}));const na=e=>{const[t,n]=o(e),r=i(e);return[t,f((e=>{r.current=e,n(e)}),[]),r]},ra=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,aa=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ia=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||tn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${aa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,oa=y(ia)`
    animation-delay: -0.45s;
`,la=y(ia)`
    animation-delay: -0.3s;
`,sa=y(ia)`
    animation-delay: -0.15s;
`,ca=y.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${tn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?an.Button.Danger.Border:tn.Primary};

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:tn.Primary};
                `;case"light":return b`
                    background-color: ${tn.Neutral[8]};
                    border: 1px solid ${tn.Neutral[5]};

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:tn.Primary};
                `;case"disabled":return b`
                    background-color: ${tn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${tn.Neutral[3]};
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:tn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?an.Button.Danger.Hover:tn.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?an.Button.Danger.BackgroundColor:tn.Primary};
                    border: 1px solid transparent;

                    ${Br.mobileL} {
                        width: 100%;
                    }

                    color: ${tn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${yn("H5","semibold")}

                    ${Br.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${yn("H4","semibold")}

                    ${Br.mobileS} {
                        height: auto;
                    }
                `}
`,da=y((({color:n,className:r,size:a=18})=>e(ra,Object.assign({className:r,$size:a,$color:n},{children:[t(ia,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(oa,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(la,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(sa,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?an.Button.Danger.Primary:tn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=tn.Neutral[3](e);break;default:t=tn.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ua={Default:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=R(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(ca,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(da,Object.assign({},d)),t("span",{children:a})]}))})),Small:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=R(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(ca,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(da,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},ha=y.button`
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

        ${({$highlight:e})=>e&&b`
                background-color: ${tn.Neutral[7]};
            `}
    }
`,fa=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,l=R(e,["children","focusHighlight","focusOutline","type"]);return t(ha,Object.assign({ref:n,$outline:i,$highlight:a,type:o},l,{children:r}))})),ga=b`
    color: ${tn.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,pa=y(j)`
    ${ga}
`,ma=y(T)`
    ${ga}
`,ya=y(m)`
    ${ga}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ba=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,va=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,$a=y.div`
    isolation: isolate;
    width: 100%;
`,Da=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${tn.Neutral[8]};

    ${e=>{if(!e.$visible)return b`
                display: none;
            `}}
`,Sa=y.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,wa=y.div`
    display: flex;
`,Fa=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?b`
                display: none;
            `:e.$expanded?b`
                ${ya} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,xa=y.p`
    ${yn("H5","regular")}
`,Ba=y.div`
    display: flex;
`,Oa=y(fa)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ha=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,ka=y(ua.Small)`
    flex: 1;
`,Ea=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return b`
                    gap: 0.5rem 2.5rem;
                `;case"input":return b`
                    gap: 0.5rem 1rem;
                `}}}
`,Aa=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?b`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${tn.Shadow.Accent};
                    border: 1px solid ${tn.Accent.Light[1]};
                }
            `:e.$disabledDisplay?b`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return b`
                    background-color: ${tn.Accent.Light[6](e)};
                `;case"selected-month":return b`
                    background-color: ${tn.Accent.Light[5](e)};
                    border: 1px solid ${tn.Primary(e)};
                `}}}
`,Ma=y(vn.H5)`
    ${e=>{if(e.$disabledDisplay)return b`
                color: ${tn.Neutral[4]};
            `;switch(e.$variant){case"current-month":return b`
                    color: ${tn.Neutral[3](e)};
                `;case"selected-month":return b`
                    ${yn("H5","semibold")}
                    color: ${tn.Primary(e)};
                `}}}
`,Ca=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=g((()=>Pr.generateMonths(zr(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},p=e=>{const t=e.format("MMMM"),n=(r=e,!Pr.isWithinRange(r,s?zr(s):void 0,c?zr(c):void 0,"month"));var r;const a=i.isSame(e,"month")?"selected-month":zr().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||d,month:t,variant:a}};return h.length?t(Ea,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,month:i}=p(e);return t(Aa,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(e,!r)},{children:t(Ma,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n},{children:i}))}),i)}))})):null},za=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return b`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return b`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,La=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?b`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${tn.Shadow.Accent};
                    border: 1px solid ${tn.Accent.Light[1]};
                }
            `:e.$disabledDisplay?b`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return b`
                    background: ${tn.Accent.Light[6](e)};
                `;case"selected-year":return b`
                    background: ${tn.Accent.Light[5](e)};
                    border: 1px solid ${tn.Primary(e)};
                `}}};
`,ja=y(vn.H5)`
    ${e=>{if(e.$disabledDisplay)return b`
                color: ${tn.Neutral[4]};
            `;switch(e.$variant){case"current-year":return b`
                    color: ${tn.Neutral[3](e)};
                `;case"selected-year":return b`
                    ${yn("H5","semibold")}
                    color: ${tn.Primary(e)};
                `;case"other-decade":return b`
                    color: ${tn.Neutral[4](e)};
                `}}}
`,Ta=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=g((()=>Pr.generateDecadeOfYears(zr(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(a=e,!Pr.isWithinRange(a,s?zr(s):void 0,c?zr(c):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":zr().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||d,year:n,variant:o}};return h.length?t(za,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,year:i}=p(e);return t(La,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(e,!r)},{children:t(ja,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Ra=a.forwardRef(((r,a)=>{var{children:l,initialCalendarDate:s,type:c,minDate:d,maxDate:h,currentFocus:f,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:$,withButton:D,doneButtonDisabled:S,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:x,getRightArrowDate:B,isLeftArrowDisabled:O,isRightArrowDisabled:H,getMonthHeaderLabel:k,getYearHeaderLabel:E}=r,A=R(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,C]=o(qr.toDayjs(s)),[z,L]=o(qr.toDayjs(s)),[j,T]=o("default"),Y=i(null),W=i(null),N=i();p(a,(()=>({defaultView(){T("default")},resetView(){const e=qr.toDayjs(s);C(e),L(e),T("default")},setCalendarDate(e){const t=qr.toDayjs(e);C(t),L(t)}}))),u((()=>{const e=qr.toDayjs(s);C(e),L(e)}),[s]),u((()=>{U(z)}),[z]);const I=()=>{"month-options"!==j?(T("month-options"),N.current.focus()):(T("default"),C(z))},_=()=>{"default"!==j?(T("default"),C(z)):T("year-options")},P=()=>{N.current.focus();const e=x?x(M):M.subtract(1,"month");switch(j){case"default":L(e),C(e);break;case"month-options":C((e=>e.subtract(1,"year")));break;case"year-options":C((e=>e.subtract(10,"year")))}},V=()=>{N.current.focus();const e=B?B(M):M.add(1,"month");switch(j){case"default":L(e),C(e);break;case"month-options":C((e=>e.add(1,"year")));break;case"year-options":C((e=>e.add(10,"year")))}},J=e=>{C(e),L(e),D||T("default")},Z=()=>{const e=qr.toDayjs(s);C(e),L(e),"default"===j?X("reset"):T("default")},U=e=>{$&&$(e)},X=e=>{w&&w(e)},G=()=>{if(!d||v)return!1;const e=zr(d);return"month-options"===j?!Pr.isPreviousYearWithinRange(M,e):"year-options"===j?!Pr.isPreviousDecadeWithinRange(M,e):O?O(M):!Pr.isPreviousMonthWithinRange(M,e)},K=()=>{if(!h||v)return!1;const e=zr(h);return"month-options"===j?!Pr.isNextYearWithinRange(M,e):"year-options"===j?!Pr.isNextDecadeWithinRange(M,e):H?H(M):!Pr.isNextMonthWithinRange(M,e)},q=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=Pr.getStartEndDecade(M);return`${e} to ${t}`}return E?E(M):M.format("YYYY")},Q=()=>{const r=k?k(M):M.format("MMM");return e(n,{children:[e(Fa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:I},{children:[t(xa,{children:r}),t(ya,{})]})),e(Fa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:_},{children:[t(xa,{children:q()}),t(ya,{})]}))]})},ee=()=>{switch(j){case"month-options":return t(Ca,{type:c,calendarDate:M,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:z,isNewSelection:y,onMonthSelect:J,allowDisabledSelection:v});case"year-options":return t(Ta,{type:c,calendarDate:M,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:z,isNewSelection:y,onYearSelect:J,allowDisabledSelection:v});default:return null}};return e(ba,Object.assign({ref:N,"data-id":"calendar-container","data-testid":"calendar-container"},A,{children:[F&&e(Sa,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(wa,{children:Q()}),e(Ba,{children:[t(Oa,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:t(pa,{})})),t(Oa,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(ma,{})}))]})]})),t(va,{children:(()=>{const r="function"==typeof l?l({calendarDate:z,currentView:j}):l;return e(n,b?{children:["default"===j&&r,ee()]}:{children:[t($a,{children:r}),t(Da,Object.assign({$visible:"default"!==j},{children:ee()}))]})})()}),(()=>{if(!D)return;const n=!!("default"===j)&&S;return e(Ha,{children:[t(ka,Object.assign({ref:W,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(ka,Object.assign({"data-testid":"done-button",ref:Y,type:"button",onClick:()=>{n||(C(z),"default"===j?X("confirmed"):T("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Ya=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Wa=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Na=y.div`
    grid-column: 1 / -1;
    display: flex;
`;y.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Ia=y.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return b`
                    left: 0;
                `;case"right":return b`
                    right: 0;
                `}}}
`,_a=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;y(vn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return b`
                ${yn("H5","semibold")};
                color: ${tn.Accent.Light[2]};
            `;if(t)return b`
                color: ${tn.Neutral[4]};
            `;if(n)return b`
                ${yn("H5","semibold")};
                color: ${tn.Primary};
            `;switch(r){case"other-month":return b`
                    color: ${tn.Neutral[4]};
                `;case"today":return b`
                    color: ${tn.Neutral[3]};
                `;case"default":return b`
                    color: ${tn.Neutral[1]};
                `}}}
`,y(Ia)`
    ${e=>{const{$selected:t}=e;if(t)return b`
                border-top: 1px solid ${tn.Accent.Light[4]};
                border-bottom: 1px solid ${tn.Accent.Light[4]};
                background-color: ${tn.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?b`
                border-top: 1px dashed ${tn.Accent.Light[4]};
                border-bottom: 1px dashed ${tn.Accent.Light[4]};
                background-color: ${tn.Accent.Light[6]};
            `:n?b`
                background-color: ${tn.Accent.Light[4]};
            `:void 0}}
`,y(_a)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?b`
                background: ${tn.Accent.Light[5]};
                border: 1px solid ${tn.Primary};
            `:t?b`
                box-shadow: 0px 0px 4px 1px ${tn.Shadow.Accent};
                border: 1px solid ${tn.Accent.Light[1]};
                background-color: ${tn.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?b`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${tn.Shadow.Accent};
                    border: 1px solid ${tn.Accent.Light[1]};
                    background-color: ${tn.Neutral[8]};
                }
            `:n?b`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?b`
                border: 1px solid ${tn.Accent.Light[1]};
                background: ${tn.Accent.Light[4]};

                :hover {
                    background: ${tn.Accent.Light[4]};
                }
            `:t?b`
                color: ${tn.Neutral[4]};
            `:"today"===r?b`
                    background: ${tn.Accent.Light[5]};
                `:void 0}}
`;const Pa=e=>{let t=tn.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=tn.Accent.Light[5];break;case"hover-dash":t=tn.Accent.Light[6],n=`1px dashed ${tn.Accent.Light[4](e)}`;break;case"hover-current":t=tn.Neutral[8],n=`1px solid ${tn.Primary(e)}`;break;case"selected":t=tn.Accent.Light[5],n=`1px solid ${tn.Accent.Light[4](e)}`;break;case"selected-outline":t=tn.Accent.Light[5],n=`1px solid ${tn.Primary(e)}`;break;case"overlap":t=tn.Accent.Light[4],n=`1px solid ${tn.Accent.Light[4](e)}`;break;case"overlap-outline":t=tn.Accent.Light[4],n=`1px solid ${tn.Primary(e)}`}return{color:t,border:n}},Va=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ja=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Pa(e);return b`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Za=y(Ja)`
    left: 0;
`,Ua=y(Ja)`
    right: 0;
`,Xa=y.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${tn.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Ga=y(Xa)`
    left: 0;
`,Ka=y(Xa)`
    right: 0;
`,qa=y.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Pa(e);return b`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&b`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Qa=y(qa)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${tn.Shadow.Accent};
    }
`,ei=y(qa)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${tn.Shadow.Accent};
    }
`,ti=y(vn.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?b`
                    ${yn("H5","semibold")};
                    color: ${tn.Accent.Light[2]};
                `:"hidden"===n?b`
                    visibility: hidden;
                `:b`
                color: ${tn.Neutral[4]};
            `;switch(n){case"selected":return b`
                    ${yn("H5","semibold")};
                    color: ${tn.Primary};
                `;case"current":return b`
                    color: ${tn.Neutral[3]};
                `;case"unavailable":return b`
                    color: ${tn.Neutral[4]};
                `;case"hidden":return b`
                    visibility: hidden;
                `;default:return b`
                    color: ${tn.Neutral[1]};
                `}}}
`,ni=({bgLeft:n,bgRight:r,circleLeft:a,circleRight:i,shadow:o,circleShadow:l,labelType:s,disabled:c,interactive:d,date:u,onSelect:h,onHover:f,onHoverEnd:g})=>e(Va,{children:[t(Ga,{$shadow:n&&o}),t(Za,{$type:n,$shadow:n&&o}),t(Qa,{$type:a,$shadow:a&&l}),t(Ka,{$shadow:r&&o}),t(Ua,{$type:r,$shadow:r&&o}),t(ei,{$type:i,$shadow:i&&l}),t(ti,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{g&&g(u)}},{children:u.date()}))]}),ri=({date:e,calendarDate:n,startDate:r,endDate:a,currentFocus:i,hoverDate:o,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:f,onHover:g})=>{const p=Pr.isDisabledDay(e,c,l,s),m=!p||d,y=()=>{const e=zr(o),t=e.isBefore(a,"day"),n=e.isAfter(r,"day");let l,s,c,d;return"start"===i&&a&&t&&(r&&n?(c=o,d=a):(l=o,s=r||a)),"end"===i&&r&&n&&(a&&t?(c=r,d=o):(l=a||r,s=o)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:d}},b={date:e,calendarDate:n,disabled:p,interactive:m,onSelect:()=>{f(e,!m)},onHover:()=>{g(e.format("YYYY-MM-DD"),!m)}};return t(ni,Object.assign({},b,(()=>{const t={};if(n.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(zr().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const n="end"===i&&r&&e.isBefore(r),o="start"===i&&a&&e.isAfter(a);(n||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(r,"day"),o=e.isSame(a,"day");return h&&n.month()!==e.month()?(t.labelType="hidden",t):((r&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&a&&e.isBetween(r,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected"),o||(t.bgRight="selected")),t)})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:a,overlapEnd:i}=y();if(n&&r){if(e.isBetween(n,r,"day","[]")){const a=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const n=e.isSame(a,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};zr.extend(Rr);const ai=({calendarDate:n,currentFocus:r,disabledDates:a,selectedStartDate:i,selectedEndDate:l,onSelect:s,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:f,showActiveMonthDaysOnly:p})=>{const m=g((()=>Pr.generateDays(n)),[n]),[y,b]=o(""),v=(e,t)=>{t&&!f||s(e)},$=(e,t)=>{t&&!f||(b(e),c(e))},D=()=>{b(""),c("")};return e(Ya,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(Wa,{children:t(vn.H6,Object.assign({weight:"semibold"},{children:zr(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,o)=>t(Na,Object.assign({onMouseLeave:D},{children:e.map(((e,o)=>t(ri,{date:e,calendarDate:n,startDate:i,endDate:l,hoverDate:y,currentFocus:r,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:f,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:v,onHover:$},`day-${o}`)))}),o)))]}))},ii=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Pr.isDisabledDay(e,l,i,o),f=!h||s,{start:g,end:p}=r?Pr.getFixedRangeStartEnd(qr.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:y}=a?Pr.getFixedRangeStartEnd(qr.toDayjs(a),c):{start:void 0,end:void 0},b=r&&e.isBetween(g,p,"day","[]"),v=a&&e.isBetween(m,y,"day","[]"),$=b&&e.isSame(g,"day")||v&&e.isSame(m,"day"),D=b&&e.isSame(p,"day")||v&&e.isSame(y,"day"),S=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},w={date:e,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{d(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(ni,Object.assign({},w,(()=>{const t={};return b||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":zr().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return v&&S(t,"hover-dash",n===m,n===y),b&&S(t,"selected",n===g,n===p),b&&v&&S(t,"overlap",$,D),n===g&&(v?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=g&&m<p&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},oi=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:l,minDate:s,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=g((()=>Pr.generateDays(n)),[n]),[f,p]=o(""),m=(e,t)=>{t&&!d||(i(e),e&&!zr(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!d||(p(e),l(e))},b=()=>{p(""),l("")};return e(Ya,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(Wa,{children:t(vn.H6,Object.assign({weight:"semibold"},{children:zr(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(Na,Object.assign({onMouseLeave:b},{children:e.map(((e,i)=>t(ii,{date:e,calendarDate:n,selectedDate:a,hoverDate:f,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:m,onHover:y,numberOfDays:u},`day-${i}`)))}),i)))]}))},li=y.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${tn.Neutral[8]};

    ${e=>{if("input"===e.$type)return b`
                border: 1px solid ${tn.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,si=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:d})=>{const u=Pr.isDisabledDay(e,l,i,o),h=!u||s,{start:f,end:g}=Pr.getWeekStartEnd(qr.toDayjs(r)),{start:p,end:m}=Pr.getWeekStartEnd(qr.toDayjs(a)),y=r&&e.isBetween(f,g,"day","[]"),b=a&&e.isBetween(p,m,"day","[]"),v=y&&e.isSame(f)||b&&e.isSame(p),$=y&&e.isSame(g)||b&&e.isSame(m),D={date:e,calendarDate:n,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(ni,Object.assign({},D,(()=>{const t={};return y||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":zr().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&b?(t="hover-current",e.shadow=!0,e.circleShadow=v||$):y?t="selected-outline":b&&(t="hover-dash"),t&&(v?e.circleLeft=t:e.bgLeft=t,$?e.circleRight=t:e.bgRight=t),e})()))},ci=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:l,minDate:s,maxDate:c,allowDisabledSelection:d})=>{const u=g((()=>Pr.generateDays(n)),[n]),[h,f]=o(""),p=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");i(n),e&&!zr(e).isSame(n,"month")&&f("")},m=(e,t)=>{t&&!d||(f(e),l(e))},y=()=>{f(""),l("")};return e(Ya,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,n)=>t(Wa,{children:t(vn.H6,Object.assign({weight:"semibold"},{children:zr(e).format("ddd")}))},`week-day-${n}`))),u.map(((e,i)=>t(Na,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(si,{date:e,calendarDate:n,selectedDate:a,hoverDate:h,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:p,onHover:m},`day-${i}`)))}),i)))]}))},di=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:a,onDismiss:o,value:l,endValue:s,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:g,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:$=!1},D)=>{const S=i(),w=i(void 0);p(D,(()=>({reset(){S.current.resetView()},setCalendarDate(e){S.current.setCalendarDate(e)}})));const F=e=>{const t=e.format("YYYY-MM-DD");S.current.setCalendarDate(t),B(t)},x=e=>{O(e)},B=e=>{r&&r(e)},O=e=>{a&&a(e)},H=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(li,Object.assign({$type:m},{children:t(Ra,Object.assign({type:m,ref:S,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!s;break;case"week":e=!l&&!s}return e})(),onDismiss:o,minDate:h,maxDate:f,selectWithinRange:y,currentFocus:c,selectedStartDate:l,selectedEndDate:s,allowDisabledSelection:g,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||H(e),w.current=e},initialCalendarDate:b},{children:({calendarDate:n})=>(n=>{switch(u){case"week":return t(ci,{calendarDate:n,disabledDates:e,selectedStartDate:l,minDate:h,maxDate:f,allowDisabledSelection:g,onSelect:F,onHover:x});case"fixed-range":return t(oi,{calendarDate:n,disabledDates:e,selectedStartDate:l,minDate:h,maxDate:f,allowDisabledSelection:g,onSelect:F,onHover:x,numberOfDays:v});default:return t(ai,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:l,selectedEndDate:s,minDate:h,maxDate:f,isNewSelection:y,allowDisabledSelection:g,showActiveMonthDaysOnly:$,onSelect:F,onHover:x})}})(n)}))}))})),ui=a.forwardRef(((e,n)=>{var{width:r}=e,a=R(e,["width"]);return t(Mr,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(di,Object.assign({ref:n},a))}))})),hi=b`
    border: 1px solid ${tn.Accent.Light[1]};
    box-shadow: ${an.InputBoxShadow};
`,fi=b`
    border: 1px solid ${tn.Accent.Light[1]};
    box-shadow: none;
`,gi=b`
    border: 1px solid ${tn.Neutral[5]};
    box-shadow: none;
`,pi=b`
    border: 1px solid ${tn.Validation.Red.Border};
    box-shadow: ${an.InputErrorBoxShadow};
`,mi=y.div`
    border: 1px solid ${tn.Neutral[5]};
    border-radius: 4px;
    background: ${tn.Neutral[8]};

    :focus-within {
        ${hi}
    }
    ${e=>e.$focused&&hi}

    ${e=>e.$readOnly?b`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${fi}
                }
                ${e.$focused&&fi}
            `:e.$disabled?b`
                background: ${tn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${gi}
                }
                ${e.$focused&&gi}
            `:e.$error?b`
                border: 1px solid ${tn.Validation.Red.Border};

                :focus-within {
                    ${pi}
                }
                ${e.$focused&&pi}
            `:void 0}
`,yi=y(mi)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,bi=y.input`
    ${e=>yn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${tn.Neutral[1]};
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
        color: ${tn.Neutral[3]};
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
        outline: 2px auto ${tn.Primary};
    }
`;const vi=y.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,$i=y.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return b`
                ${Di}, ${xi} {
                    color: ${tn.Neutral[4]};
                }
            `}}
`,Di=y(bi)`
    background: transparent;
    text-align: center;
`,Si=y(Di)`
    width: 2rem;
    margin-right: 0.25rem;
`,wi=y(Di)`
    width: 2.5rem;
`,Fi=y(Di)`
    width: 3rem;
    margin-left: 0.25rem;
`,xi=y(vn.Body)`
    ${e=>{if(e.$inactive)return b`
                color: ${tn.Neutral[3](e)};
            `}}
`,Bi=y.div`
    ${yn("Body","regular")}
    background-color: ${tn.Neutral[8]};
    color: ${tn.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?b`
                background-color: ${tn.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?b`
                display: none;
            `:void 0}
`;zr.extend(jr);const Oi=a.forwardRef((({disabled:n,readOnly:r,names:a,value:l,focused:s,hoverValue:c,placeholder:d,label:h,onChange:f,onFocus:g,onBlur:m,hideInputKeyboard:y},b)=>{const v=y?"none":"numeric",[$,D,S]=na(""),[w,F,x]=na(""),[B,O,H]=na(""),[k,E]=o("none"),[A,M]=o(!1),C=i(null),z=i(null),L=i(null),j=i(null),[T,R,Y]=V(c);u((()=>{const[e="",t="",n=""]=V(l);D(e),F(t),O(n),e||t||n||!C.current.contains(document.activeElement)||z.current.focus()}),[l]),u((()=>{s||E("none"),s&&(M(!0),C.current.contains(document.activeElement)||z.current.focus())}),[s]),p(b,(()=>({ref:C,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",n=""]=V(l);D(e),F(t),O(n)}})),[l]);const W=e=>{var t;e.preventDefault(),null===(t=z.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;E(t)},I=e=>{const[t,n,r]=a,i={[t]:S.current,[n]:x.current,[r]:H.current},o=e.target.name,l=i[o],s=o!==r?ta.padValue(l,!0):l;switch(o){case t:i[t]=s,D(s);break;case n:i[n]=s,F(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,d=zr(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[n]&&!i[r];d&&l!==s&&f(c),C.current.contains(e.relatedTarget)||(E("none"),null==m||m(u||d))},_=e=>{if(c)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:$,month:w,year:B};switch(t){case a[0]:r.day=n,D(n),2===n.length&&L.current.focus();break;case a[1]:r.month=n,F(n),2===n.length&&j.current.focus();break;case a[2]:r.year=n,O(n)}if(!r.day&&!r.month&&!r.year)return void f("");const i=`${r.year}-${r.month}-${r.day}`;zr(i,"YYYY-MM-DD",!0).isValid()&&f(i)},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===a[1]&&0===w.length&&z.current.focus(),k===a[2]&&0===B.length&&L.current.focus())};function V(e){if(e){const t=zr(new Date(e));return t.isValid()?[ta.padValue(t.date().toString()),ta.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(vi,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(M(!0),C.current.contains(document.activeElement)||z.current.focus())},onFocus:e=>{n||(M(!0),s||null==g||g(e))}},{children:[e($i,Object.assign({ref:C,$hover:!!c},{children:[t(Si,{ref:z,name:a[0],maxLength:2,value:null!=T?T:$,onFocus:N,onBlur:I,onChange:_,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==a[0]||r?"DD":""}),t(xi,Object.assign({$inactive:0===$.length},{children:"/"})),t(wi,{ref:L,name:a[1],maxLength:2,value:null!=R?R:w,onFocus:N,onBlur:I,onChange:_,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==a[1]||r?"MM":""}),t(xi,Object.assign({$inactive:0===w.length},{children:"/"})),t(Fi,{ref:j,name:a[2],maxLength:4,value:null!=Y?Y:B,onFocus:N,onBlur:I,onChange:_,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==a[2]||r?"YYYY":""})]})),(()=>{if(!l&&!r&&d)return t(Bi,Object.assign({$hide:A,$disabled:n,onMouseDown:W},{children:d}))})()]}))})),Hi=y(yi)`
    height: 3rem;
`,ki=e=>{var{minDate:n,maxDate:r,disabled:a,disabledDates:l,error:s,hideInputKeyboard:c,value:d,onChange:h,onFocus:f,onBlur:g,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:y,id:b,allowDisabledSelection:v,zIndex:$}=e,D=R(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[S,w]=o(Qr.sanitizeInput(d)),[F,x]=o(Qr.sanitizeInput(d)),[B,O]=o(void 0),[H,k]=o(!1),[E,A]=o(!1),M=i(null),C=i();u((()=>{const e=Qr.sanitizeInput(d);w(e),x(e)}),[d]);const z=e=>{!v&&Qr.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:r})||(x(e),m||(N(e),w(e),e&&k(!1)))},L=e=>{x(e),m||(N(e),w(e),e&&(M.current.focus(),k(!1)),B&&O(void 0))},j=()=>{y||a||(k(!0),E||(A(!0),f&&f()))},T=e=>{!E||H||M.current.contains(e.relatedTarget)||(C.current.resetInput(),x(S),A(!1),I())},Y=e=>{O(e)},W=e=>{switch(e){case"reset":x(S);break;case"confirmed":w(F),N(F)}M.current.focus(),k(!1)},N=e=>{h&&h(e)},I=()=>{g&&g()};return t(Ar,{enabled:!y&&!a,isOpen:H,renderElement:()=>t(Hi,Object.assign({tabIndex:-1,ref:M,onBlur:T,onFocus:j,$disabled:a,$readOnly:y,$focused:E,$error:s,id:b,"data-testid":D["data-testid"]},D,{children:t(Oi,{ref:C,disabled:a,onChange:z,readOnly:y,focused:H,names:["start-day","start-month","start-year"],value:F,hoverValue:B,hideInputKeyboard:c})})),renderDropdown:({elementWidth:e})=>t(ui,{type:"input",variant:"single",initialCalendarDate:F,withButton:m,value:F,disabledDates:l,minDate:n,maxDate:r,allowDisabledSelection:v,onHover:Y,onSelect:L,onDismiss:W,onYearMonthDisplayChange:p,width:e}),onClose:()=>{C.current.resetInput(),x(S),k(!1),A(!1),I()},onDismiss:()=>{C.current.resetInput(),M.current.focus(),x(S),k(!1)},customZIndex:$,offset:16})};export{ki as DateInput};
//# sourceMappingURL=index.js.map
