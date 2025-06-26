import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useState as o,useEffect as a,useMemo as s,useRef as l,isValidElement as c,createRef as d,cloneElement as u,PureComponent as h,useLayoutEffect as f,forwardRef as p}from"react";import g,{css as m,keyframes as v}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as S}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as x}from"@lifesg/react-icons/tick";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{MagnifierIcon as w}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as D}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as k,useFloating as O,autoUpdate as E,offset as M,flip as H,shift as z,limitShift as T,size as C,useTransitionStyles as A,useClick as _,useDismiss as P,useInteractions as L,FloatingPortal as N,FloatingFocusManager as R}from"@floating-ui/react";import{findDOMNode as V}from"react-dom";function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const W={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},I={D1:{fontFamily:W.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:W.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:W.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:W.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:W.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:W.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:W.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:W.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:W.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:W.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:W.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:W.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Y={D1:{fontFamily:W.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:W.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:W.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:W.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:W.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:W.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:W.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:W.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},K={D1:{fontFamily:W.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:W.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:W.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:W.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:W.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:W.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:W.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:W.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:W.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:W.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:W.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:W.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z=Array.isArray,X="object"==typeof U&&U&&U.Object===Object&&U,G=X,q="object"==typeof self&&self&&self.Object===Object&&self,Q=G||q||Function("return this")(),ee=Q.Symbol,te=ee,ne=Object.prototype,re=ne.hasOwnProperty,ie=ne.toString,oe=te?te.toStringTag:void 0;var ae=function(e){var t=re.call(e,oe),n=e[oe];try{e[oe]=void 0;var r=!0}catch(e){}var i=ie.call(e);return r&&(t?e[oe]=n:delete e[oe]),i},se=Object.prototype.toString;var le=ae,ce=function(e){return se.call(e)},de=ee?ee.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?le(e):ce(e)};var he=function(e){return null!=e&&"object"==typeof e},fe=ue,pe=he;var ge=function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==fe(e)},me=Z,ve=ge,ye=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,be=/^\w*$/;var $e=function(e,t){if(me(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ve(e))||(be.test(e)||!ye.test(e)||null!=t&&e in Object(t))};var Se=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xe=ue,Fe=Se;var we,Be=function(e){if(!Fe(e))return!1;var t=xe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},De=Q["__core-js_shared__"],ke=(we=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var Oe=function(e){return!!ke&&ke in e},Ee=Function.prototype.toString;var Me=function(e){if(null!=e){try{return Ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},He=Be,ze=Oe,Te=Se,Ce=Me,Ae=/^\[object .+?Constructor\]$/,_e=Function.prototype,Pe=Object.prototype,Le=_e.toString,Ne=Pe.hasOwnProperty,Re=RegExp("^"+Le.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ve=function(e){return!(!Te(e)||ze(e))&&(He(e)?Re:Ae).test(Ce(e))},je=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var n=je(e,t);return Ve(n)?n:void 0},Ie=We(Object,"create"),Ye=Ie;var Ke=function(){this.__data__=Ye?Ye(null):{},this.size=0};var Ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Je=Ie,Ze=Object.prototype.hasOwnProperty;var Xe=function(e){var t=this.__data__;if(Je){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ze.call(t,e)?t[e]:void 0},Ge=Ie,qe=Object.prototype.hasOwnProperty;var Qe=Ie;var et=Ke,tt=Ue,nt=Xe,rt=function(e){var t=this.__data__;return Ge?void 0!==t[e]:qe.call(t,e)},it=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Qe&&void 0===t?"__lodash_hash_undefined__":t,this};function ot(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ot.prototype.clear=et,ot.prototype.delete=tt,ot.prototype.get=nt,ot.prototype.has=rt,ot.prototype.set=it;var at=ot;var st=function(){this.__data__=[],this.size=0};var lt=function(e,t){return e===t||e!=e&&t!=t};var ct=function(e,t){for(var n=e.length;n--;)if(lt(e[n][0],t))return n;return-1},dt=ct,ut=Array.prototype.splice;var ht=ct;var ft=ct;var pt=ct;var gt=st,mt=function(e){var t=this.__data__,n=dt(t,e);return!(n<0)&&(n==t.length-1?t.pop():ut.call(t,n,1),--this.size,!0)},vt=function(e){var t=this.__data__,n=ht(t,e);return n<0?void 0:t[n][1]},yt=function(e){return ft(this.__data__,e)>-1},bt=function(e,t){var n=this.__data__,r=pt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function $t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$t.prototype.clear=gt,$t.prototype.delete=mt,$t.prototype.get=vt,$t.prototype.has=yt,$t.prototype.set=bt;var St=$t,xt=We(Q,"Map"),Ft=at,wt=St,Bt=xt;var Dt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var kt=function(e,t){var n=e.__data__;return Dt(t)?n["string"==typeof t?"string":"hash"]:n.map},Ot=kt;var Et=kt;var Mt=kt;var Ht=kt;var zt=function(e,t){var n=Ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Tt=function(){this.size=0,this.__data__={hash:new Ft,map:new(Bt||wt),string:new Ft}},Ct=function(e){var t=Ot(this,e).delete(e);return this.size-=t?1:0,t},At=function(e){return Et(this,e).get(e)},_t=function(e){return Mt(this,e).has(e)},Pt=zt;function Lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Lt.prototype.clear=Tt,Lt.prototype.delete=Ct,Lt.prototype.get=At,Lt.prototype.has=_t,Lt.prototype.set=Pt;var Nt=Lt,Rt=Nt;function Vt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Vt.Cache||Rt),n}Vt.Cache=Rt;var jt=Vt;var Wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,It=/\\(\\)?/g,Yt=function(e){var t=jt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Wt,(function(e,n,r,i){t.push(r?i.replace(It,"$1"):n||e)})),t}));var Kt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ut=Z,Jt=ge,Zt=ee?ee.prototype:void 0,Xt=Zt?Zt.toString:void 0;var Gt=function e(t){if("string"==typeof t)return t;if(Ut(t))return Kt(t,e)+"";if(Jt(t))return Xt?Xt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},qt=Gt;var Qt=Z,en=$e,tn=Yt,nn=function(e){return null==e?"":qt(e)};var rn=ge;var on=function(e,t){return Qt(e)?e:en(e,t)?[e]:tn(nn(e))},an=function(e){if("string"==typeof e||rn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var sn=function(e,t){for(var n=0,r=(t=on(t,e)).length;null!=e&&n<r;)e=e[an(t[n++])];return n&&n==r?e:void 0};var ln=J((function(e,t,n){var r=null==e?void 0:sn(e,t);return void 0===r?n:r}));const cn=(e,t,n)=>t?ln(n,t)||ln(e,t):n||e,dn=(e,t)=>{const n=t||e.defaultValue;return ln(e.collections,n)};var un;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(un||(un={}));const hn={collections:{base:I,oneservice:K,plusJakartaSans:Y},defaultValue:"base"},fn=e=>t=>{const n=t.theme,r=dn(hn,n[un.textStyleScheme]);return n.options&&n.options.textStyle?cn(r,e,n.options.textStyle):cn(r,e)},pn={D1:{fontFamily:fn("D1.fontFamily"),fontSize:fn("D1.fontSize"),fontWeight:fn("D1.fontWeight"),lineHeight:fn("D1.lineHeight"),letterSpacing:fn("D1.letterSpacing"),fontVariant:fn("D1.fontVariant")},D2:{fontFamily:fn("D2.fontFamily"),fontSize:fn("D2.fontSize"),fontWeight:fn("D2.fontWeight"),lineHeight:fn("D2.lineHeight"),letterSpacing:fn("D2.letterSpacing"),fontVariant:fn("D2.fontVariant")},D3:{fontFamily:fn("D3.fontFamily"),fontSize:fn("D3.fontSize"),fontWeight:fn("D3.fontWeight"),lineHeight:fn("D3.lineHeight"),letterSpacing:fn("D3.letterSpacing"),fontVariant:fn("D3.fontVariant")},D4:{fontFamily:fn("D4.fontFamily"),fontSize:fn("D4.fontSize"),fontWeight:fn("D4.fontWeight"),lineHeight:fn("D4.lineHeight"),letterSpacing:fn("D4.letterSpacing"),fontVariant:fn("D4.fontVariant")},DBody:{fontFamily:fn("DBody.fontFamily"),fontSize:fn("DBody.fontSize"),fontWeight:fn("DBody.fontWeight"),lineHeight:fn("DBody.lineHeight"),letterSpacing:fn("DBody.letterSpacing"),fontVariant:fn("DBody.fontVariant")},H1:{fontFamily:fn("H1.fontFamily"),fontSize:fn("H1.fontSize"),fontWeight:fn("H1.fontWeight"),lineHeight:fn("H1.lineHeight"),letterSpacing:fn("H1.letterSpacing"),fontVariant:fn("H1.fontVariant")},H2:{fontFamily:fn("H2.fontFamily"),fontSize:fn("H2.fontSize"),fontWeight:fn("H2.fontWeight"),lineHeight:fn("H2.lineHeight"),letterSpacing:fn("H2.letterSpacing"),fontVariant:fn("H2.fontVariant")},H3:{fontFamily:fn("H3.fontFamily"),fontSize:fn("H3.fontSize"),fontWeight:fn("H3.fontWeight"),lineHeight:fn("H3.lineHeight"),letterSpacing:fn("H3.letterSpacing"),fontVariant:fn("H3.fontVariant")},H4:{fontFamily:fn("H4.fontFamily"),fontSize:fn("H4.fontSize"),fontWeight:fn("H4.fontWeight"),lineHeight:fn("H4.lineHeight"),letterSpacing:fn("H4.letterSpacing"),fontVariant:fn("H4.fontVariant")},H5:{fontFamily:fn("H5.fontFamily"),fontSize:fn("H5.fontSize"),fontWeight:fn("H5.fontWeight"),lineHeight:fn("H5.lineHeight"),letterSpacing:fn("H5.letterSpacing"),fontVariant:fn("H5.fontVariant")},H6:{fontFamily:fn("H6.fontFamily"),fontSize:fn("H6.fontSize"),fontWeight:fn("H6.fontWeight"),lineHeight:fn("H6.lineHeight"),letterSpacing:fn("H6.letterSpacing"),fontVariant:fn("H6.fontVariant")},Body:{fontFamily:fn("Body.fontFamily"),fontSize:fn("Body.fontSize"),fontWeight:fn("Body.fontWeight"),lineHeight:fn("Body.lineHeight"),letterSpacing:fn("Body.letterSpacing"),fontVariant:fn("Body.fontVariant")},BodySmall:{fontFamily:fn("BodySmall.fontFamily"),fontSize:fn("BodySmall.fontSize"),fontWeight:fn("BodySmall.fontWeight"),lineHeight:fn("BodySmall.lineHeight"),letterSpacing:fn("BodySmall.letterSpacing"),fontVariant:fn("BodySmall.fontVariant")},XSmall:{fontFamily:fn("XSmall.fontFamily"),fontSize:fn("XSmall.fontSize"),fontWeight:fn("XSmall.fontWeight"),lineHeight:fn("XSmall.lineHeight"),letterSpacing:fn("XSmall.letterSpacing"),fontVariant:fn("XSmall.fontVariant")}},gn=[W.OpenSans,W.PlusJakartaSans],mn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},vn=(e,t)=>n=>{var r;const i=pn[e].fontFamily(n),o=pn[e].fontWeight(n),a=gn.find((e=>Object.values(e).includes(i)));return a?m`
                font-family: ${mn(a,t)||mn(a,o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=yn(t)||o)&&void 0!==r?r:"normal"};
        `},yn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},bn=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$n=(e,t,n=!1)=>r=>{const i=pn[e],o=i.fontSize(r);return m`
            ${vn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            font-variant: ${i.fontVariant(r)||"normal"};
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Sn=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${bn(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${bn(n)}
        `,xn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Fn=e=>t=>{const n=t.theme,r=dn(xn,n[un.colorScheme]);return n.options&&n.options.color?cn(r,e,n.options.color):cn(r,e)},wn={Brand:{1:Fn("Brand.1"),2:Fn("Brand.2"),3:Fn("Brand.3"),4:Fn("Brand.4"),5:Fn("Brand.5"),6:Fn("Brand.6")},Primary:Fn("Primary"),PrimaryDark:Fn("PrimaryDark"),Secondary:Fn("Secondary"),Accent:{Light:{1:Fn("Accent.Light.1"),2:Fn("Accent.Light.2"),3:Fn("Accent.Light.3"),4:Fn("Accent.Light.4"),5:Fn("Accent.Light.5"),6:Fn("Accent.Light.6")},Dark:{1:Fn("Accent.Dark.1"),2:Fn("Accent.Dark.2"),3:Fn("Accent.Dark.3")}},Neutral:{1:Fn("Neutral.1"),2:Fn("Neutral.2"),3:Fn("Neutral.3"),4:Fn("Neutral.4"),5:Fn("Neutral.5"),6:Fn("Neutral.6"),7:Fn("Neutral.7"),8:Fn("Neutral.8")},Validation:{Green:{Text:Fn("Validation.Green.Text"),Icon:Fn("Validation.Green.Icon"),Border:Fn("Validation.Green.Border"),Background:Fn("Validation.Green.Background")},Orange:{Text:Fn("Validation.Orange.Text"),Icon:Fn("Validation.Orange.Icon"),Border:Fn("Validation.Orange.Border"),Background:Fn("Validation.Orange.Background"),Badge:Fn("Validation.Orange.Badge")},Red:{Text:Fn("Validation.Red.Text"),Icon:Fn("Validation.Red.Icon"),Border:Fn("Validation.Red.Border"),Background:Fn("Validation.Red.Background")},Blue:{Text:Fn("Validation.Blue.Text"),Icon:Fn("Validation.Blue.Icon"),Border:Fn("Validation.Blue.Border"),Background:Fn("Validation.Blue.Background")}},Shadow:{Accent:Fn("Shadow.Accent"),Red:Fn("Shadow.Red"),Elevation:Fn("Shadow.Elevation")}};var Bn;!function(e){e.D1=g.h1`
        ${e=>m`
                ${$n("D1",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=g.h1`
        ${e=>m`
                ${$n("D2",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=g.h1`
        ${e=>m`
                ${$n("D3",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=g.h1`
        ${e=>m`
                ${$n("D4",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=g.h1`
        ${e=>m`
                ${$n("DBody",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=g.h1`
        ${e=>m`
                ${$n("H1",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=g.h2`
        ${e=>m`
                ${$n("H2",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=g.h3`
        ${e=>m`
                ${$n("H3",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=g.h4`
        ${e=>m`
                ${$n("H4",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=g.h5`
        ${e=>m`
                ${$n("H5",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=g.h6`
        ${e=>m`
                ${$n("H6",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=g.p`
        ${e=>m`
                ${$n("Body",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=g.p`
        ${e=>m`
                ${$n("BodySmall",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=g.span`
        ${e=>m`
                ${$n("XSmall",e.weight,e.paragraph)}
                color: ${wn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>On(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>On(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Bn||(Bn={}));const Dn=g.a`
    ${e=>m`
            ${$n(e.textStyle,e.weight)}
            color: ${wn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${wn.Secondary};

                svg {
                    color: ${wn.Secondary};
                }
            }
        `}
`,kn=g(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,On=n=>{var{external:r=!1,children:i}=n,o=j(n,["external","children"]);return e(Dn,Object.assign({},o,{children:[i,r&&t(kn,{})]}))};var En;function Mn(e,t){return Mn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Mn(e,t)}function Hn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function zn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Tn(e){return null!==e&&1===e.length?e[0]:e.slice()}function Cn(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function An(e,t){return _n(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function _n(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(En||(En={}));let Pn=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Cn(n.getMouseEventMap())}))}Hn(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=An(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Cn(n.getKeyDownEventMap()),Hn(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Cn(n.getMouseEventMap()),Hn(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Cn(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:Tn(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:Tn(n.state.value)};return n.props.renderTrack(i,o)};let r=zn(t.value);r.length||(r=zn(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=An(r[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Mn(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=zn(e.value);return n.length?t.pending?null:{value:n.map((t=>An(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Tn(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return An(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=An(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=An(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=An(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=_n(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=_n(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Tn(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(i.Component);Pn.displayName="ReactSlider",Pn.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Ln=Pn;const Nn=g.div`
    isolation: isolate;
`,Rn=g.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Vn=g.div`
    margin-bottom: 1rem;
`,jn=g(Bn.Body)`
    overflow-wrap: anywhere;
`,Wn=g(Ln)`
    height: 0.875rem;
`,In=g.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?m`
                cursor: not-allowed;
            `:e.$readOnly?void 0:m`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${wn.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${wn.Neutral[4]};
        border-radius: 50%;
    }
`,Yn=g.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${In}:after {
        border: 1px solid ${wn.Primary};
    }
`,Kn=g.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||wn.Neutral[4](e)};
`,Un=g.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Jn=g.div`
    margin: 0 0.5rem;
`,Zn=g.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Xn=g.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${wn.Neutral[8]};

    ${e=>{let t=wn.Neutral[6];return e.$disabled&&e.$selected?t=wn.Neutral[4]:e.$disabled?t=wn.Neutral[5]:e.$selected&&(t=wn.Accent.Light[1]),m`
            background-color: ${t};
        `}}
`,Gn=g((n=>{var{value:r,min:i=0,max:s=100,step:l=1,minRange:c,numOfThumbs:d=2,colors:u,disabled:h,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:v,showIndicatorLabel:y,indicatorLabelPrefix:b,indicatorLabelSuffix:$,renderSliderLabel:S,onChange:x,onChangeEnd:F}=n,w=j(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[B,D]=o(O()),k=function(){const e=function(){const e=h||f?wn.Neutral[5]:wn.Neutral[4],t=h||f?wn.Neutral[4]:wn.Primary;if(1===d)return[t,e];const n=[];n.push(e);for(let e=0;e<d-1;e++)n.push(t);return n.push(e),n}();return new Array(d+1).fill(0).map(((t,n)=>(null==u?void 0:u[n])||e[n]))}();a((()=>{r!==B&&D(O())}),[r]);function O(){if(r&&r.length===d)return r;const e=[];for(let t=0;t<d;t++)e.push(i+l*t);return e}const E=t=>S?S(t):e(jn,{children:[m,t,v]});return e(Nn,Object.assign({},w,{children:[y&&t(Vn,{children:(()=>{let t="";if(1===B.length)t=`${B[0]}`;else if(2===B.length)t=`${B[0]} - ${B[1]}`;else if(B.length>2){t=`${Math.min(...B)} - ${Math.max(...B)}`}return e(jn,{children:[b,t,$]})})()}),t(Wn,{step:l,min:i,max:s,value:B,disabled:h||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==x||x(t)}else{if(t>-1&&B[t]===e[t])return;D(e),null==x||x(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==F||F(t)}else D(e),null==F||F(e)},minDistance:c,ariaLabel:p,renderThumb:(e,n)=>t(Yn,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:h?void 0:e.tabIndex},{children:t(In,{$disabled:h,$readOnly:f})})),renderTrack:(e,n)=>t(Kn,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:k[n.index]}))}),g&&e(Rn,{children:[t("div",{children:E(i)}),t("div",{children:E(s)})]})]}))}))`
    margin-top: -0.3125rem;
`,qn=r=>{var{bins:i=[],interval:l,disabled:c,readOnly:d,value:u,showRangeLabels:h,rangeLabelPrefix:f,rangeLabelSuffix:p,ariaLabels:g,onChange:m,onChangeEnd:v,renderEmptyView:y,renderRangeLabel:b}=r,$=j(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const S=i.map((e=>e.count)),x=Math.max(...S),F=i.map((e=>e.minValue)),w=Math.max(...F),B=Math.min(...F),[D,k]=o(H()),O=s((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(w-B)/l+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===B+l*r));t?n.push(t):n.push({count:0,minValue:B+l*r})}return n}),[i,l]);a((()=>{u!==D&&k(H())}),[u]);const E=e=>{k(e),null==m||m(e)},M=e=>{k(e),null==v||v(e)};function H(){return null!=u?u:[B,B+l]}const z=t=>b?b(t):e(Bn.Body,{children:[f,t,p]});return e("div",Object.assign({},$,{children:[h&&e(Un,{children:[z(D[0]),t(Jn,{children:"-"}),z(D[1])]}),O.every((e=>0===e.count))&&y?y():e(n,{children:[t(Zn,{children:O.map(((e,n)=>{const r=e.count/x;return t(Xn,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:e.minValue>=D[0]&&e.minValue<D[1],$disabled:c||d},n)}))}),t(Gn,{min:B,max:w+l,step:l,minRange:l,numOfThumbs:2,value:D,disabled:c,readOnly:d,ariaLabels:g,onChange:E,onChangeEnd:M})]})]}))};var Qn=function(e,t){return Qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Qn(e,t)};var er=function(){return er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},er.apply(this,arguments)};var tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var nr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},rr="object"==typeof tr&&tr&&tr.Object===Object&&tr,ir="object"==typeof self&&self&&self.Object===Object&&self,or=rr||ir||Function("return this")(),ar=or,sr=function(){return ar.Date.now()},lr=/\s/;var cr=function(e){for(var t=e.length;t--&&lr.test(e.charAt(t)););return t},dr=/^\s+/;var ur=function(e){return e?e.slice(0,cr(e)+1).replace(dr,""):e},hr=or.Symbol,fr=hr,pr=Object.prototype,gr=pr.hasOwnProperty,mr=pr.toString,vr=fr?fr.toStringTag:void 0;var yr=function(e){var t=gr.call(e,vr),n=e[vr];try{e[vr]=void 0;var r=!0}catch(e){}var i=mr.call(e);return r&&(t?e[vr]=n:delete e[vr]),i},br=Object.prototype.toString;var $r=yr,Sr=function(e){return br.call(e)},xr=hr?hr.toStringTag:void 0;var Fr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xr&&xr in Object(e)?$r(e):Sr(e)},wr=function(e){return null!=e&&"object"==typeof e};var Br=ur,Dr=nr,kr=function(e){return"symbol"==typeof e||wr(e)&&"[object Symbol]"==Fr(e)},Or=/^[-+]0x[0-9a-f]+$/i,Er=/^0b[01]+$/i,Mr=/^0o[0-7]+$/i,Hr=parseInt;var zr=nr,Tr=sr,Cr=function(e){if("number"==typeof e)return e;if(kr(e))return NaN;if(Dr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Dr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Br(e);var n=Er.test(e);return n||Mr.test(e)?Hr(e.slice(2),n?2:8):Or.test(e)?NaN:+e},Ar=Math.max,_r=Math.min;var Pr=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function g(){var e=Tr();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?_r(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function v(){var e=Tr(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Cr(t)||0,zr(n)&&(d=!!n.leading,o=(u="maxWait"in n)?Ar(Cr(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?a:m(Tr())},v},Lr=Pr,Nr=nr;var Rr=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nr(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Lr(e,t,{leading:r,maxWait:t,trailing:i})},Vr=function(e,t,n,r){switch(t){case"debounce":return Pr(e,n,r);case"throttle":return Rr(e,n,r);default:return e}},jr=function(e){return"function"==typeof e},Wr=function(){return"undefined"==typeof window},Ir=function(e){return e instanceof Element||e instanceof HTMLDocument},Yr=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&jr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Wr()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Wr())return null;if(t)return document.querySelector(t);if(r&&Ir(r))return r;if(n.targetRef&&Ir(n.targetRef.current))return n.targetRef.current;var i=V(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Yr(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Wr()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return jr(t)?"renderProp":jr(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=d(),n.observableElement=null,Wr()||(n.resizeHandler=Vr(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Qn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Wr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return u(e,c)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return r.createElement(a,null)}}}(h);var Kr,Ur=Wr()?a:f;un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Kr||(Kr={}));const Jr=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Zr=g.div`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?wn.Primary:wn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Jr}
`,Xr=g.div`
    color: ${wn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Jr}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${$n("BodySmall","semibold")}
                `:m`
                    ${$n("Body","regular")}
                `}
`;g.span`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","semibold")}
`,g.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Zr} {
                        display: inline;
                    }

                    ${Xr} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,g.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,g.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;var Gr=St;var qr=St,Qr=xt,ei=Nt;var ti=St,ni=function(){this.__data__=new Gr,this.size=0},ri=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ii=function(e){return this.__data__.get(e)},oi=function(e){return this.__data__.has(e)},ai=function(e,t){var n=this.__data__;if(n instanceof qr){var r=n.__data__;if(!Qr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ei(r)}return n.set(e,t),this.size=n.size,this};function si(e){var t=this.__data__=new ti(e);this.size=t.size}si.prototype.clear=ni,si.prototype.delete=ri,si.prototype.get=ii,si.prototype.has=oi,si.prototype.set=ai;var li=Nt,ci=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},di=function(e){return this.__data__.has(e)};function ui(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new li;++t<n;)this.add(e[t])}ui.prototype.add=ui.prototype.push=ci,ui.prototype.has=di,Q.Uint8Array;var hi=ee?ee.prototype:void 0;hi&&hi.valueOf;var fi=ue,pi=he;var gi=function(e){return pi(e)&&"[object Arguments]"==fi(e)},mi=Object.prototype;mi.hasOwnProperty,mi.propertyIsEnumerable;gi(function(){return arguments}());var vi={exports:{}};var yi=function(){return!1};!function(e,t){var n=Q,r=yi,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(vi,vi.exports);var bi={exports:{}};!function(e,t){var n=X,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(bi,bi.exports);var $i=bi.exports;$i&&$i.isTypedArray;var Si=We(Q,"DataView"),xi=xt,Fi=We(Q,"Promise"),wi=We(Q,"Set"),Bi=We(Q,"WeakMap"),Di=ue,ki=Me,Oi="[object Map]",Ei="[object Promise]",Mi="[object Set]",Hi="[object WeakMap]",zi="[object DataView]",Ti=ki(Si),Ci=ki(xi),Ai=ki(Fi),_i=ki(wi),Pi=ki(Bi),Li=Di;(Si&&Li(new Si(new ArrayBuffer(1)))!=zi||xi&&Li(new xi)!=Oi||Fi&&Li(Fi.resolve())!=Ei||wi&&Li(new wi)!=Mi||Bi&&Li(new Bi)!=Hi)&&(Li=function(e){var t=Di(e),n="[object Object]"==t?e.constructor:void 0,r=n?ki(n):"";if(r)switch(r){case Ti:return zi;case Ci:return Oi;case Ai:return Ei;case _i:return Mi;case Pi:return Hi}return t});const Ni={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${wn.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${wn.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${wn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${wn.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${wn.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${wn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ri=e=>t=>{var n;const r=t.theme,i=dn(Ni,r[un.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?cn(i,e,r.options.designToken):cn(i,e)},Vi={InputBoxShadow:Ri("InputBoxShadow"),InputErrorBoxShadow:Ri("InputErrorBoxShadow"),ElevationBoxShadow:Ri("ElevationBoxShadow"),Table:{Header:Ri("Table.Header"),Cell:{Primary:Ri("Table.Cell.Primary"),Secondary:Ri("Table.Cell.Secondary"),Selected:Ri("Table.Cell.Selected"),Hover:Ri("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ri("Button.Danger.BackgroundColor"),Hover:Ri("Button.Danger.Hover"),Primary:Ri("Button.Danger.Primary"),Border:Ri("Button.Danger.Border")}}},ji={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Wi=e=>Object.keys(ji).reduce(((t,n)=>{const r=ji[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ii=Wi("max-width"),Yi=(Wi("min-width"),ji),Ki=g.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ui=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ji=g.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||wn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ui} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Zi=g(Ji)`
    animation-delay: -0.45s;
`,Xi=g(Ji)`
    animation-delay: -0.3s;
`,Gi=g(Ji)`
    animation-delay: -0.15s;
`;g.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${wn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Vi.Button.Danger.Border:wn.Primary};

                    color: ${e.$buttonIsDanger?Vi.Button.Danger.Primary:wn.Primary};
                `;case"light":return m`
                    background-color: ${wn.Neutral[8]};
                    border: 1px solid ${wn.Neutral[5]};

                    color: ${e.$buttonIsDanger?Vi.Button.Danger.Primary:wn.Primary};
                `;case"disabled":return m`
                    background-color: ${wn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${wn.Neutral[3]};
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Vi.Button.Danger.Primary:wn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Vi.Button.Danger.Hover:wn.Secondary};
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Vi.Button.Danger.BackgroundColor:wn.Primary};
                    border: 1px solid transparent;

                    ${Ii.mobileL} {
                        width: 100%;
                    }

                    color: ${wn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    ${$n("H5","semibold")}

                    ${Ii.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    ${$n("H4","semibold")}

                    ${Ii.mobileS} {
                        height: auto;
                    }
                `}
`,g((({color:n,className:r,size:i=18})=>e(Ki,Object.assign({className:r,$size:i,$color:n,"data-testid":"component-loading-spinner"},{children:[t(Ji,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(Zi,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(Xi,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(Gi,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Vi.Button.Danger.Primary:wn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=wn.Neutral[3](e);break;default:t=wn.Neutral[8](e)}return m`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var qi={exports:{}};qi.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var S="$isDayjsObject",x=function(e){return e instanceof D||!(!e||!e[S])},F=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},w=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},B=y;B.l=F,B.i=x,B.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return w(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<w(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,d=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,$=(g<b?g+7:g)-b;return f(r?v-$:v+(6-$),m);case s:case h:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case o:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=B.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,d){var h,f=this;r=Number(r);var p=B.p(d),g=function(e){var t=w(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return B.s(o%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return B.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var p,g=this,m=B.p(h),v=w(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,$=function(){return B.m(g,v)};switch(m){case u:p=$()/12;break;case c:p=$();break;case d:p=$()/3;break;case l:p=(b-y)/6048e5;break;case s:p=(b-y)/864e5;break;case a:p=b/n;break;case o:p=b/t;break;case i:p=b/e;break;default:p=b}return f?p:B.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=F(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),k=D.prototype;return w.prototype=k,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=F,w.isDayjs=x,w.unix=function(e){return w(1e3*e)},w.en=$[b],w.Ls=$,w.p={},w}();var Qi=J(qi.exports),eo={exports:{}};eo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],d=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},h={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[o,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[i,l("week")],ww:[r,l("week")],M:[i,l("month")],MM:[r,l("month")],MMM:[o,function(e){var t=d("months"),n=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=h[c],u=d&&d[0],f=d&&d[1];o[l]=f?{regex:u,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=f(t)(e),o=i.year,a=i.month,s=i.day,l=i.hours,c=i.minutes,d=i.seconds,u=i.milliseconds,h=i.zone,p=i.week,g=new Date,m=s||(o||a?1:g.getDate()),v=o||g.getFullYear(),y=0;o&&!a||(y=a>0?a-1:g.getMonth());var b,$=l||0,S=c||0,x=d||0,F=u||0;return h?new Date(Date.UTC(v,y,m,$,S,x,F+60*h.offset*1e3)):n?new Date(Date.UTC(v,y,m,$,S,x,F)):(b=new Date(v,y,m,$,S,x,F),p&&(b=r(b).week(p).toDate()),b)}catch(e){return new Date("")}}(t,s,r,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var to=J(eo.exports),no={exports:{}};no.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var ro=J(no.exports),io={exports:{}};io.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var oo=J(io.exports),ao={exports:{}};ao.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var so,lo,co=J(ao.exports),uo={exports:{}};uo.exports=(so={year:0,month:1,day:2,hour:3,minute:4,second:5},lo={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=lo[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),lo[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=so[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i,o=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(s))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-l;if(Number(c)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var d=i.utcOffset();i=i.add(o-d,"minute")}}else i=this.utcOffset(0,t);return i.$x.$timezone=e,i},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var ho,fo=J(uo.exports);Qi.extend(ro),Qi.extend(co),Qi.extend(oo),Qi.extend(to),Qi.extend(fo),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Qi(t).startOf("week");return po(n).map((e=>go(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return go(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Qi(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Qi(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Qi(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Qi(r):void 0,i?Qi(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(ho||(ho={}));const po=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},go=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},mo=[1,3,5,7,8,10,12],vo=[4,6,9,11];var yo,bo,$o;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":mo.includes(o)?Math.min(i,31).toString():vo.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Qi(e,n);return Qi(t,n).diff(r,"minute")},e.toDayjs=e=>e?Qi(e):Qi(),e.addMinutesToTime=(e,t,n="HH:mm")=>Qi(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Qi(e).isSame(Qi(t),n)}(yo||(yo={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Qi(e).isBefore(r,"day"))||!(!i||!Qi(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Qi(e).isValid())return e}return""}}(bo||(bo={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}($o||($o={}));const So=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),xo=({children:e})=>{const[n,r]=o(-1);return t(So.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},Fo=m`
    border: 1px solid ${wn.Accent.Light[1]};
    box-shadow: ${Vi.InputBoxShadow};
`,wo=m`
    border: 1px solid ${wn.Accent.Light[1]};
    box-shadow: none;
`,Bo=m`
    border: 1px solid ${wn.Neutral[5]};
    box-shadow: none;
`,Do=m`
    border: 1px solid ${wn.Validation.Red.Border};
    box-shadow: ${Vi.InputErrorBoxShadow};
`,ko=g.div`
    border: 1px solid ${wn.Neutral[5]};
    border-radius: 4px;
    background: ${wn.Neutral[8]};

    :focus-within {
        ${Fo}
    }
    ${e=>e.$focused&&Fo}

    ${e=>e.$readOnly?m`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${wo}
                }
                ${e.$focused&&wo}
            `:e.$disabled?m`
                background: ${wn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Bo}
                }
                ${e.$focused&&Bo}
            `:e.$error?m`
                border: 1px solid ${wn.Validation.Red.Border};

                :focus-within {
                    ${Do}
                }
                ${e.$focused&&Do}
            `:void 0}
`;g(ko)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Oo=g.input`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${wn.Neutral[1]};
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
        color: ${wn.Neutral[3]};
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
`,Eo=g.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${wn.Primary};
    }
`;g.div`
    overflow: hidden;
    border: 1px solid ${wn.Neutral[5]};
    border-radius: 4px;
    background: ${wn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Ii.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${wn.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,g.div`
    background: transparent;
    padding: 0.5rem;
`,g.ul`
    list-style-type: none;
`,g.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${wn.Accent.Light[3]};

    ${e=>e.$active&&m`
            background: ${wn.Accent.Light[5]};
        `}
`,g(x)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${wn.Primary};
`,g.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,g(S)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${wn.Primary};
`,g($)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${wn.Accent.Light[2]};
`,g.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const Mo=g(Eo)`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${wn.Primary};
`;g(Mo)`
    outline-offset: 0.25rem;
`,g(Mo)`
    padding: 0.5rem 1rem;
`,g.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,g.div`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}
`,g(b)`
    ${e=>{const t="small"===e.$variant?1:1.125;return m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${wn.Validation.Red.Icon};
`;const Ho=g.button`
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

        ${({$highlight:e})=>e&&m`
                background-color: ${wn.Neutral[7]};
            `}
    }
`,zo=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=j(e,["children","focusHighlight","focusOutline","type"]);return t(Ho,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),To=e=>"small"===e?1:1.125,Co=e=>m`
        height: ${To(e)}rem;
        width: ${To(e)}rem;
    `,Ao=g.div`
    background: ${wn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,_o=g.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Po=g(Oo)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Lo=g(w)`
    color: ${wn.Neutral[3]};
    flex-shrink: 0;
    ${e=>Co(e.$variant)}
`,No=g(zo)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${wn.Neutral[3]};
    cursor: pointer;

    ${e=>m`
            svg {
                ${Co(e.$variant)}
            }
        `}
`;p(((n,r)=>{var{value:i,variant:o,onClear:a}=n,s=j(n,["value","variant","onClear"]);return e(Ao,{children:[e(_o,{children:[t(Lo,{$variant:o,"aria-hidden":!0}),t(Po,Object.assign({ref:r,value:i,$variant:o},s))]}),i&&t(No,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:o},{children:t(F,{"aria-hidden":!0})}))]})}));const Ro="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Vo=g(Eo)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,jo=g.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ro};

    svg {
        color: ${wn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?pn.BodySmall.fontSize:pn.Body.fontSize;return m`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,Wo=p((({children:n,disabled:r,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>e(Vo,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":o,$variant:l},{children:[n,!s&&t(jo,Object.assign({$expanded:i,$variant:l},{children:t(B,{"aria-hidden":!0})}))]}))));g.li`
    display: ${e=>e.$visible?"flex":"none"};
`,g.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${wn.Accent.Light[3]};

    ${e=>e.$active&&m`
            background: ${wn.Accent.Light[5]};
        `}
`,g.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,g.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${wn.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return m`
                    transform: rotate(90deg);
                `}}
    }
`,g.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,g.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,g(x)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${wn.Primary};
`,g(D)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${wn.Primary};
`;const Io=e=>"small"===e?2.5:3;g.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Io(e.$variant);return m`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Yo=m`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Io(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${wn.Accent.Light[3]};
    }
`,Ko=g.button`
    ${Yo}
    cursor: pointer;
`;g.div`
    ${Yo}
`;const Uo=v`
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
`;g.div`
    position: relative;
    border: 1px solid ${wn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${wn.Neutral[8]};

    :focus-within {
        border: 1px solid ${wn.Accent.Light[1]};
        box-shadow: ${Vi.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${Uo} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${wn.Neutral[6](e)};

                ${Ko} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${wn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${Ko} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${wn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${wn.Validation.Red.Border(e)};
                    box-shadow: ${Vi.InputErrorBoxShadow};
                }
            `:void 0}
`,g.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ro};
    margin-left: 1rem;
`,g(B)`
    color: ${wn.Neutral[3]};
    ${e=>{let t=pn.Body.fontSize;return"small"===e.$variant&&(t=pn.BodySmall.fontSize),m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,g.div`
    height: 1px;
    background: ${wn.Neutral[5]};
    margin: 0 0.5rem;
`;const Jo=g.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return m`
                color: ${wn.Neutral[3]};
            `}}
`,Zo=g.div`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;var Xo;g(Zo)`
    color: ${wn.Neutral[3]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Xo||(Xo={}));const Go=g.div`
    display: flex;
    flex-direction: column;
`,qo=e=>"right"===e?"bottom-end":"bottom-start",Qo=({enabled:r,isOpen:i,onOpen:s,onClose:c,onDismiss:d,renderElement:u,renderDropdown:h,customZIndex:f,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=l(null),$=l(null),{width:S}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,s=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=l(n),v=l(null),y=null!=f?f:v,b=l(),$=o({width:void 0,height:void 0}),S=$[0],x=$[1];return Ur((function(){if(!Wr()){var e=Yr(g,x,d,h);b.current=Vr((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Wr()&&e({width:r,height:i}),m.current=!1}))}),r,a,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,a,s,d,h,g,p,y.current]),er({ref:y},S)}({targetRef:b,handleHeight:!1}),x={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<Yi.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:F,floatingStyles:w,context:B}=O({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==d||d():e&&!i?null==s||s():!e&&i&&(null==c||c(n))},whileElementsMounted:E,placement:qo(m),middleware:[M(g),H(),z({limiter:T()}),C({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),x]}),D=(()=>{const[e,t]=o(void 0),n=k();return a((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Xo.Change,e),n.events.emit(Xo.Ready),()=>n.events.off(Xo.Change,e)}),[n]),e})(),{isMounted:V,styles:j}=A(B,{initial:{opacity:0},open:{opacity:1},duration:300}),W=_(B,{enabled:r,toggle:p}),I=P(B,{enabled:r}),{getReferenceProps:Y,getFloatingProps:K}=L([W,I]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,F.setReference(e)}},Y(),{children:u()})),V&&t(N,{children:t(R,Object.assign({context:B,modal:!1,initialFocus:$,returnFocus:!1},{children:t("div",Object.assign({ref:F.setFloating,style:Object.assign(Object.assign({},w),{zIndex:null!==(y=null!=f?f:D)&&void 0!==y?y:50})},K(),{children:t(Go,Object.assign({ref:$,style:Object.assign({},j),inert:j.opacity<1?"":void 0},{children:h({elementWidth:S})}))}))}))})]})},ea=g.div`
    overflow: hidden;
    border: 1px solid ${wn.Neutral[5]};
    border-radius: 4px;
    background: ${wn.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${Ii.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,ta=g.div`
    display: flex;
    align-items: baseline;
`,na=g.div`
    margin: 0 0.5rem;
`,ra=g.div`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,ia=g(ra)`
    color: ${wn.Neutral[3]};
`,oa=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:c,error:d,histogramSlider:u,id:h,onBlur:f,onChange:p,onChangeEnd:g,optionTruncationType:m="end",placeholder:v="Select",rangeLabelPrefix:y,rangeLabelSuffix:b,readOnly:$,renderRangeLabel:S,value:x}=n,F=j(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:B=[],renderEmptyView:D,ariaLabels:k}=u,[O,E]=o(K()),[M,H]=o(!1),[z,T]=o(!1),[C]=o((()=>$o.generate())),A=B.map((e=>e.minValue)),_=Math.min(...A),P=l(),L=l(),N=l(),R=F["data-testid"]||"select-histogram";a((()=>{x!==O&&E(K())}),[x]);const V=e=>{E(e),null==p||p(e)},W=e=>{E(e),null==g||g(e)},I=()=>{z||M||T(!0)},Y=e=>{z&&!M&&P.current&&!P.current.contains(e.relatedTarget)&&(T(!1),null==f||f())};function K(){return null!=x?x:[_,_+w]}const U=t=>S?S(t):e(Bn.Body,{children:[y,t,b]});return t(xo,{children:t(Qo,{enabled:!$&&!s,isOpen:M,renderElement:()=>t(ko,Object.assign({className:i,"data-testid":R,id:h,ref:P,tabIndex:-1,onFocus:I,onBlur:Y,$focused:z,$disabled:s,$readOnly:$,$error:d},{children:t(Wo,Object.assign({ref:L,disabled:s,expanded:M,listboxId:C,popupRole:"dialog",readOnly:$,variant:"default"},{children:t(Jo,Object.assign({ref:N,$disabled:s},{children:A&&0!==A.length?e(ta,{children:[U(O[0]),t(na,{children:"-"}),U(O[1])]}):t(ia,Object.assign({truncateType:m,$variant:"default"},{children:v}))}))}))})),renderDropdown:({elementWidth:e})=>t(ea,Object.assign({style:{width:e}},{children:t(qn,{interval:w,value:O,bins:B,onChange:V,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:D,ariaLabels:k})})),onOpen:()=>{H(!0)},onClose:()=>{H(!1)},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),H(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:c})})};export{oa as SelectHistogram};
//# sourceMappingURL=index.js.map
