import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useState as o,useEffect as a,useMemo as s,useRef as l,isValidElement as c,createRef as u,cloneElement as d,PureComponent as h,useLayoutEffect as f,forwardRef as p}from"react";import g,{css as m,keyframes as v}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as S}from"@lifesg/react-icons/square";import{SquareTickFillIcon as F}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{MagnifierIcon as w}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as D,useFloating as O,autoUpdate as k,offset as E,flip as M,shift as H,limitShift as z,size as T,useTransitionStyles as C,useClick as A,useDismiss as _,useInteractions as L,FloatingPortal as P,FloatingFocusManager as R}from"@floating-ui/react";import{findDOMNode as N}from"react-dom";function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const W={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},I={D1:{fontFamily:W.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:W.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:W.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:W.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:W.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:W.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:W.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:W.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:W.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:W.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:W.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:W.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Y={D1:{fontFamily:W.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:W.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:W.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:W.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:W.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:W.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:W.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:W.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:W.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},V={D1:{fontFamily:W.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:W.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:W.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:W.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:W.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:W.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:W.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:W.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:W.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:W.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:W.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:W.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:W.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var J=Array.isArray,Z="object"==typeof K&&K&&K.Object===Object&&K,X=Z,G="object"==typeof self&&self&&self.Object===Object&&self,q=X||G||Function("return this")(),Q=q.Symbol,ee=Q,te=Object.prototype,ne=te.hasOwnProperty,re=te.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var t=ne.call(e,ie),n=e[ie];try{e[ie]=void 0;var r=!0}catch(e){}var i=re.call(e);return r&&(t?e[ie]=n:delete e[ie]),i},ae=Object.prototype.toString;var se=oe,le=function(e){return ae.call(e)},ce=Q?Q.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?se(e):le(e)};var de=function(e){return null!=e&&"object"==typeof e},he=ue,fe=de;var pe=function(e){return"symbol"==typeof e||fe(e)&&"[object Symbol]"==he(e)},ge=J,me=pe,ve=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ye=/^\w*$/;var be=function(e,t){if(ge(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!me(e))||(ye.test(e)||!ve.test(e)||null!=t&&e in Object(t))};var Se=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Fe=ue,$e=Se;var xe,we=function(e){if(!$e(e))return!1;var t=Fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Be=q["__core-js_shared__"],De=(xe=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||""))?"Symbol(src)_1."+xe:"";var Oe=function(e){return!!De&&De in e},ke=Function.prototype.toString;var Ee=function(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=we,He=Oe,ze=Se,Te=Ee,Ce=/^\[object .+?Constructor\]$/,Ae=Function.prototype,_e=Object.prototype,Le=Ae.toString,Pe=_e.hasOwnProperty,Re=RegExp("^"+Le.call(Pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ne=function(e){return!(!ze(e)||He(e))&&(Me(e)?Re:Ce).test(Te(e))},je=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var n=je(e,t);return Ne(n)?n:void 0},Ie=We(Object,"create"),Ye=Ie;var Ve=function(){this.__data__=Ye?Ye(null):{},this.size=0};var Ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ue=Ie,Je=Object.prototype.hasOwnProperty;var Ze=function(e){var t=this.__data__;if(Ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Je.call(t,e)?t[e]:void 0},Xe=Ie,Ge=Object.prototype.hasOwnProperty;var qe=Ie;var Qe=Ve,et=Ke,tt=Ze,nt=function(e){var t=this.__data__;return Xe?void 0!==t[e]:Ge.call(t,e)},rt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qe&&void 0===t?"__lodash_hash_undefined__":t,this};function it(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}it.prototype.clear=Qe,it.prototype.delete=et,it.prototype.get=tt,it.prototype.has=nt,it.prototype.set=rt;var ot=it;var at=function(){this.__data__=[],this.size=0};var st=function(e,t){return e===t||e!=e&&t!=t};var lt=function(e,t){for(var n=e.length;n--;)if(st(e[n][0],t))return n;return-1},ct=lt,ut=Array.prototype.splice;var dt=lt;var ht=lt;var ft=lt;var pt=at,gt=function(e){var t=this.__data__,n=ct(t,e);return!(n<0)&&(n==t.length-1?t.pop():ut.call(t,n,1),--this.size,!0)},mt=function(e){var t=this.__data__,n=dt(t,e);return n<0?void 0:t[n][1]},vt=function(e){return ht(this.__data__,e)>-1},yt=function(e,t){var n=this.__data__,r=ft(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function bt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bt.prototype.clear=pt,bt.prototype.delete=gt,bt.prototype.get=mt,bt.prototype.has=vt,bt.prototype.set=yt;var St=bt,Ft=We(q,"Map"),$t=ot,xt=St,wt=Ft;var Bt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Dt=function(e,t){var n=e.__data__;return Bt(t)?n["string"==typeof t?"string":"hash"]:n.map},Ot=Dt;var kt=Dt;var Et=Dt;var Mt=Dt;var Ht=function(e,t){var n=Mt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},zt=function(){this.size=0,this.__data__={hash:new $t,map:new(wt||xt),string:new $t}},Tt=function(e){var t=Ot(this,e).delete(e);return this.size-=t?1:0,t},Ct=function(e){return kt(this,e).get(e)},At=function(e){return Et(this,e).has(e)},_t=Ht;function Lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Lt.prototype.clear=zt,Lt.prototype.delete=Tt,Lt.prototype.get=Ct,Lt.prototype.has=At,Lt.prototype.set=_t;var Pt=Lt,Rt=Pt;function Nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Nt.Cache||Rt),n}Nt.Cache=Rt;var jt=Nt;var Wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,It=/\\(\\)?/g,Yt=function(e){var t=jt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Wt,(function(e,n,r,i){t.push(r?i.replace(It,"$1"):n||e)})),t}));var Vt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Kt=J,Ut=pe,Jt=Q?Q.prototype:void 0,Zt=Jt?Jt.toString:void 0;var Xt=function e(t){if("string"==typeof t)return t;if(Kt(t))return Vt(t,e)+"";if(Ut(t))return Zt?Zt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Gt=Xt;var qt=J,Qt=be,en=Yt,tn=function(e){return null==e?"":Gt(e)};var nn=pe;var rn=function(e,t){return qt(e)?e:Qt(e,t)?[e]:en(tn(e))},on=function(e){if("string"==typeof e||nn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var an=function(e,t){for(var n=0,r=(t=rn(t,e)).length;null!=e&&n<r;)e=e[on(t[n++])];return n&&n==r?e:void 0};var sn=U((function(e,t,n){var r=null==e?void 0:an(e,t);return void 0===r?n:r}));const ln=(e,t,n)=>t?sn(n,t)||sn(e,t):n||e,cn=(e,t)=>{const n=t||e.defaultValue;return sn(e.collections,n)};var un;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(un||(un={}));const dn={collections:{base:I,oneservice:V,plusJakartaSans:Y},defaultValue:"base"},hn=e=>t=>{const n=t.theme,r=cn(dn,n[un.textStyleScheme]);return n.options&&n.options.textStyle?ln(r,e,n.options.textStyle):ln(r,e)},fn={D1:{fontFamily:hn("D1.fontFamily"),fontSize:hn("D1.fontSize"),fontWeight:hn("D1.fontWeight"),lineHeight:hn("D1.lineHeight"),letterSpacing:hn("D1.letterSpacing")},D2:{fontFamily:hn("D2.fontFamily"),fontSize:hn("D2.fontSize"),fontWeight:hn("D2.fontWeight"),lineHeight:hn("D2.lineHeight"),letterSpacing:hn("D2.letterSpacing")},D3:{fontFamily:hn("D3.fontFamily"),fontSize:hn("D3.fontSize"),fontWeight:hn("D3.fontWeight"),lineHeight:hn("D3.lineHeight"),letterSpacing:hn("D3.letterSpacing")},D4:{fontFamily:hn("D4.fontFamily"),fontSize:hn("D4.fontSize"),fontWeight:hn("D4.fontWeight"),lineHeight:hn("D4.lineHeight"),letterSpacing:hn("D4.letterSpacing")},DBody:{fontFamily:hn("DBody.fontFamily"),fontSize:hn("DBody.fontSize"),fontWeight:hn("DBody.fontWeight"),lineHeight:hn("DBody.lineHeight"),letterSpacing:hn("DBody.letterSpacing")},H1:{fontFamily:hn("H1.fontFamily"),fontSize:hn("H1.fontSize"),fontWeight:hn("H1.fontWeight"),lineHeight:hn("H1.lineHeight"),letterSpacing:hn("H1.letterSpacing")},H2:{fontFamily:hn("H2.fontFamily"),fontSize:hn("H2.fontSize"),fontWeight:hn("H2.fontWeight"),lineHeight:hn("H2.lineHeight"),letterSpacing:hn("H2.letterSpacing")},H3:{fontFamily:hn("H3.fontFamily"),fontSize:hn("H3.fontSize"),fontWeight:hn("H3.fontWeight"),lineHeight:hn("H3.lineHeight"),letterSpacing:hn("H3.letterSpacing")},H4:{fontFamily:hn("H4.fontFamily"),fontSize:hn("H4.fontSize"),fontWeight:hn("H4.fontWeight"),lineHeight:hn("H4.lineHeight"),letterSpacing:hn("H4.letterSpacing")},H5:{fontFamily:hn("H5.fontFamily"),fontSize:hn("H5.fontSize"),fontWeight:hn("H5.fontWeight"),lineHeight:hn("H5.lineHeight"),letterSpacing:hn("H5.letterSpacing")},H6:{fontFamily:hn("H6.fontFamily"),fontSize:hn("H6.fontSize"),fontWeight:hn("H6.fontWeight"),lineHeight:hn("H6.lineHeight"),letterSpacing:hn("H6.letterSpacing")},Body:{fontFamily:hn("Body.fontFamily"),fontSize:hn("Body.fontSize"),fontWeight:hn("Body.fontWeight"),lineHeight:hn("Body.lineHeight"),letterSpacing:hn("Body.letterSpacing")},BodySmall:{fontFamily:hn("BodySmall.fontFamily"),fontSize:hn("BodySmall.fontSize"),fontWeight:hn("BodySmall.fontWeight"),lineHeight:hn("BodySmall.lineHeight"),letterSpacing:hn("BodySmall.letterSpacing")},XSmall:{fontFamily:hn("XSmall.fontFamily"),fontSize:hn("XSmall.fontSize"),fontWeight:hn("XSmall.fontWeight"),lineHeight:hn("XSmall.lineHeight"),letterSpacing:hn("XSmall.letterSpacing")}},pn=[W.OpenSans,W.PlusJakartaSans],gn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},mn=(e,t)=>n=>{var r;const i=fn[e].fontFamily(n),o=fn[e].fontWeight(n),a=pn.find((e=>Object.values(e).includes(i)));return a?m`
                font-family: ${gn(a,t)||gn(a,o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=vn(t)||o)&&void 0!==r?r:"normal"};
        `},vn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yn=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},bn=(e,t,n=!1)=>r=>{const i=fn[e],o=i.fontSize(r);return m`
            ${mn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Sn=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${yn(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${yn(n)}
        `,Fn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},$n=e=>t=>{const n=t.theme,r=cn(Fn,n[un.colorScheme]);return n.options&&n.options.color?ln(r,e,n.options.color):ln(r,e)},xn={Brand:{1:$n("Brand.1"),2:$n("Brand.2"),3:$n("Brand.3"),4:$n("Brand.4"),5:$n("Brand.5"),6:$n("Brand.6")},Primary:$n("Primary"),PrimaryDark:$n("PrimaryDark"),Secondary:$n("Secondary"),Accent:{Light:{1:$n("Accent.Light.1"),2:$n("Accent.Light.2"),3:$n("Accent.Light.3"),4:$n("Accent.Light.4"),5:$n("Accent.Light.5"),6:$n("Accent.Light.6")},Dark:{1:$n("Accent.Dark.1"),2:$n("Accent.Dark.2"),3:$n("Accent.Dark.3")}},Neutral:{1:$n("Neutral.1"),2:$n("Neutral.2"),3:$n("Neutral.3"),4:$n("Neutral.4"),5:$n("Neutral.5"),6:$n("Neutral.6"),7:$n("Neutral.7"),8:$n("Neutral.8")},Validation:{Green:{Text:$n("Validation.Green.Text"),Icon:$n("Validation.Green.Icon"),Border:$n("Validation.Green.Border"),Background:$n("Validation.Green.Background")},Orange:{Text:$n("Validation.Orange.Text"),Icon:$n("Validation.Orange.Icon"),Border:$n("Validation.Orange.Border"),Background:$n("Validation.Orange.Background"),Badge:$n("Validation.Orange.Badge")},Red:{Text:$n("Validation.Red.Text"),Icon:$n("Validation.Red.Icon"),Border:$n("Validation.Red.Border"),Background:$n("Validation.Red.Background")},Blue:{Text:$n("Validation.Blue.Text"),Icon:$n("Validation.Blue.Icon"),Border:$n("Validation.Blue.Border"),Background:$n("Validation.Blue.Background")}},Shadow:{Accent:$n("Shadow.Accent"),Red:$n("Shadow.Red"),Elevation:$n("Shadow.Elevation")}};var wn;!function(e){e.D1=g.h1`
        ${e=>m`
                ${bn("D1",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=g.h1`
        ${e=>m`
                ${bn("D2",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=g.h1`
        ${e=>m`
                ${bn("D3",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=g.h1`
        ${e=>m`
                ${bn("D4",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=g.h1`
        ${e=>m`
                ${bn("DBody",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=g.h1`
        ${e=>m`
                ${bn("H1",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=g.h2`
        ${e=>m`
                ${bn("H2",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=g.h3`
        ${e=>m`
                ${bn("H3",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=g.h4`
        ${e=>m`
                ${bn("H4",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=g.h5`
        ${e=>m`
                ${bn("H5",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=g.h6`
        ${e=>m`
                ${bn("H6",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=g.p`
        ${e=>m`
                ${bn("Body",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=g.p`
        ${e=>m`
                ${bn("BodySmall",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=g.span`
        ${e=>m`
                ${bn("XSmall",e.weight,e.paragraph)}
                color: ${xn.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>On(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>On(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wn||(wn={}));const Bn=g.a`
    ${e=>m`
            ${bn(e.textStyle,e.weight)}
            color: ${xn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xn.Secondary};

                svg {
                    color: ${xn.Secondary};
                }
            }
        `}
`,Dn=g(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,On=n=>{var{external:r=!1,children:i}=n,o=j(n,["external","children"]);return e(Bn,Object.assign({},o,{children:[i,r&&t(Dn,{})]}))};var kn;function En(e,t){return En=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},En(e,t)}function Mn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Hn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function zn(e){return null!==e&&1===e.length?e[0]:e.slice()}function Tn(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Cn(e,t){return An(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function An(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(kn||(kn={}));let _n=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Tn(n.getMouseEventMap())}))}Mn(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Cn(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Tn(n.getKeyDownEventMap()),Mn(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Tn(n.getMouseEventMap()),Mn(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Tn(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:zn(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:zn(n.state.value)};return n.props.renderTrack(i,o)};let r=Hn(t.value);r.length||(r=Hn(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=Cn(r[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,En(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Hn(e.value);return n.length?t.pending?null:{value:n.map((t=>Cn(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return zn(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Cn(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Cn(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Cn(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Cn(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=An(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=An(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](zn(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(i.Component);_n.displayName="ReactSlider",_n.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Ln=_n;const Pn=g.div`
    isolation: isolate;
`,Rn=g.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Nn=g.div`
    margin-bottom: 1rem;
`,jn=g(wn.Body)`
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

        background-color: ${xn.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${xn.Neutral[4]};
        border-radius: 50%;
    }
`,Yn=g.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${In}:after {
        border: 1px solid ${xn.Primary};
    }
`,Vn=g.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||xn.Neutral[4](e)};
`,Kn=g.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Un=g.div`
    margin: 0 0.5rem;
`,Jn=g.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Zn=g.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${xn.Neutral[8]};

    ${e=>{let t=xn.Neutral[6];return e.$disabled&&e.$selected?t=xn.Neutral[4]:e.$disabled?t=xn.Neutral[5]:e.$selected&&(t=xn.Accent.Light[1]),m`
            background-color: ${t};
        `}}
`,Xn=g((n=>{var{value:r,min:i=0,max:s=100,step:l=1,minRange:c,numOfThumbs:u=2,colors:d,disabled:h,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:v,showIndicatorLabel:y,indicatorLabelPrefix:b,indicatorLabelSuffix:S,renderSliderLabel:F,onChange:$,onChangeEnd:x}=n,w=j(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[B,D]=o(k()),O=function(){const e=function(){const e=h||f?xn.Neutral[5]:xn.Neutral[4],t=h||f?xn.Neutral[4]:xn.Primary;if(1===u)return[t,e];const n=[];n.push(e);for(let e=0;e<u-1;e++)n.push(t);return n.push(e),n}();return new Array(u+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();a((()=>{r!==B&&D(k())}),[r]);function k(){if(r&&r.length===u)return r;const e=[];for(let t=0;t<u;t++)e.push(i+l*t);return e}const E=t=>F?F(t):e(jn,{children:[m,t,v]});return e(Pn,Object.assign({},w,{children:[y&&t(Nn,{children:(()=>{let t="";if(1===B.length)t=`${B[0]}`;else if(2===B.length)t=`${B[0]} - ${B[1]}`;else if(B.length>2){t=`${Math.min(...B)} - ${Math.max(...B)}`}return e(jn,{children:[b,t,S]})})()}),t(Wn,{step:l,min:i,max:s,value:B,disabled:h||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&B[t]===e[t])return;D(e),null==$||$(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==x||x(t)}else D(e),null==x||x(e)},minDistance:c,ariaLabel:p,renderThumb:(e,n)=>t(Yn,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:h?void 0:e.tabIndex},{children:t(In,{$disabled:h,$readOnly:f})})),renderTrack:(e,n)=>t(Vn,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:O[n.index]}))}),g&&e(Rn,{children:[t("div",{children:E(i)}),t("div",{children:E(s)})]})]}))}))`
    margin-top: -0.3125rem;
`,Gn=r=>{var{bins:i=[],interval:l,disabled:c,readOnly:u,value:d,showRangeLabels:h,rangeLabelPrefix:f,rangeLabelSuffix:p,ariaLabels:g,onChange:m,onChangeEnd:v,renderEmptyView:y,renderRangeLabel:b}=r,S=j(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const F=i.map((e=>e.count)),$=Math.max(...F),x=i.map((e=>e.minValue)),w=Math.max(...x),B=Math.min(...x),[D,O]=o(H()),k=s((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(w-B)/l+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===B+l*r));t?n.push(t):n.push({count:0,minValue:B+l*r})}return n}),[i,l]);a((()=>{d!==D&&O(H())}),[d]);const E=e=>{O(e),null==m||m(e)},M=e=>{O(e),null==v||v(e)};function H(){return null!=d?d:[B,B+l]}const z=t=>b?b(t):e(wn.Body,{children:[f,t,p]});return e("div",Object.assign({},S,{children:[h&&e(Kn,{children:[z(D[0]),t(Un,{children:"-"}),z(D[1])]}),k.every((e=>0===e.count))&&y?y():e(n,{children:[t(Jn,{children:k.map(((e,n)=>{const r=e.count/$;return t(Zn,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:e.minValue>=D[0]&&e.minValue<D[1],$disabled:c||u},n)}))}),t(Xn,{min:B,max:w+l,step:l,minRange:l,numOfThumbs:2,value:D,disabled:c,readOnly:u,ariaLabels:g,onChange:E,onChangeEnd:M})]})]}))};var qn=function(e,t){return qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},qn(e,t)};var Qn=function(){return Qn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Qn.apply(this,arguments)};var er="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var tr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nr="object"==typeof er&&er&&er.Object===Object&&er,rr="object"==typeof self&&self&&self.Object===Object&&self,ir=nr||rr||Function("return this")(),or=ir,ar=function(){return or.Date.now()},sr=/\s/;var lr=function(e){for(var t=e.length;t--&&sr.test(e.charAt(t)););return t},cr=/^\s+/;var ur=function(e){return e?e.slice(0,lr(e)+1).replace(cr,""):e},dr=ir.Symbol,hr=dr,fr=Object.prototype,pr=fr.hasOwnProperty,gr=fr.toString,mr=hr?hr.toStringTag:void 0;var vr=function(e){var t=pr.call(e,mr),n=e[mr];try{e[mr]=void 0;var r=!0}catch(e){}var i=gr.call(e);return r&&(t?e[mr]=n:delete e[mr]),i},yr=Object.prototype.toString;var br=vr,Sr=function(e){return yr.call(e)},Fr=dr?dr.toStringTag:void 0;var $r=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fr&&Fr in Object(e)?br(e):Sr(e)},xr=function(e){return null!=e&&"object"==typeof e};var wr=ur,Br=tr,Dr=function(e){return"symbol"==typeof e||xr(e)&&"[object Symbol]"==$r(e)},Or=/^[-+]0x[0-9a-f]+$/i,kr=/^0b[01]+$/i,Er=/^0o[0-7]+$/i,Mr=parseInt;var Hr=tr,zr=ar,Tr=function(e){if("number"==typeof e)return e;if(Dr(e))return NaN;if(Br(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Br(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=wr(e);var n=kr.test(e);return n||Er.test(e)?Mr(e.slice(2),n?2:8):Or.test(e)?NaN:+e},Cr=Math.max,Ar=Math.min;var _r=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=zr();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Ar(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function v(){var e=zr(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Tr(t)||0,Hr(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Cr(Tr(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?a:m(zr())},v},Lr=_r,Pr=tr;var Rr=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Pr(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Lr(e,t,{leading:r,maxWait:t,trailing:i})},Nr=function(e,t,n,r){switch(t){case"debounce":return _r(e,n,r);case"throttle":return Rr(e,n,r);default:return e}},jr=function(e){return"function"==typeof e},Wr=function(){return"undefined"==typeof window},Ir=function(e){return e instanceof Element||e instanceof HTMLDocument},Yr=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&jr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Wr()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Wr())return null;if(t)return document.querySelector(t);if(r&&Ir(r))return r;if(n.targetRef&&Ir(n.targetRef.current))return n.targetRef.current;var i=N(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Yr(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Wr()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return jr(t)?"renderProp":jr(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,Wr()||(n.resizeHandler=Nr(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}qn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Wr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return r.createElement(a,null)}}}(h);var Vr,Kr=Wr()?a:f;un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,un.colorScheme,un.textStyleScheme,un.designTokenScheme,un.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Vr||(Vr={}));const Ur=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Jr=g.div`
    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?xn.Primary:xn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ur}
`,Zr=g.div`
    color: ${xn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ur}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${bn("BodySmall","semibold")}
                `:m`
                    ${bn("Body","regular")}
                `}
`;g.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Jr} {
                        display: inline;
                    }

                    ${Zr} {
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
`;var Xr=St;var Gr=St,qr=Ft,Qr=Pt;var ei=St,ti=function(){this.__data__=new Xr,this.size=0},ni=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ri=function(e){return this.__data__.get(e)},ii=function(e){return this.__data__.has(e)},oi=function(e,t){var n=this.__data__;if(n instanceof Gr){var r=n.__data__;if(!qr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qr(r)}return n.set(e,t),this.size=n.size,this};function ai(e){var t=this.__data__=new ei(e);this.size=t.size}ai.prototype.clear=ti,ai.prototype.delete=ni,ai.prototype.get=ri,ai.prototype.has=ii,ai.prototype.set=oi;var si=Pt,li=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ci=function(e){return this.__data__.has(e)};function ui(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new si;++t<n;)this.add(e[t])}ui.prototype.add=ui.prototype.push=li,ui.prototype.has=ci,q.Uint8Array;var di=Q?Q.prototype:void 0;di&&di.valueOf;var hi=ue,fi=de;var pi=function(e){return fi(e)&&"[object Arguments]"==hi(e)},gi=Object.prototype;gi.hasOwnProperty,gi.propertyIsEnumerable;pi(function(){return arguments}());var mi={exports:{}};var vi=function(){return!1};!function(e,t){var n=q,r=vi,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(mi,mi.exports);var yi={exports:{}};!function(e,t){var n=Z,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(yi,yi.exports);var bi=yi.exports;bi&&bi.isTypedArray;var Si=We(q,"DataView"),Fi=Ft,$i=We(q,"Promise"),xi=We(q,"Set"),wi=We(q,"WeakMap"),Bi=ue,Di=Ee,Oi="[object Map]",ki="[object Promise]",Ei="[object Set]",Mi="[object WeakMap]",Hi="[object DataView]",zi=Di(Si),Ti=Di(Fi),Ci=Di($i),Ai=Di(xi),_i=Di(wi),Li=Bi;(Si&&Li(new Si(new ArrayBuffer(1)))!=Hi||Fi&&Li(new Fi)!=Oi||$i&&Li($i.resolve())!=ki||xi&&Li(new xi)!=Ei||wi&&Li(new wi)!=Mi)&&(Li=function(e){var t=Bi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Di(n):"";if(r)switch(r){case zi:return Hi;case Ti:return Oi;case Ci:return ki;case Ai:return Ei;case _i:return Mi}return t});var Pi={exports:{}};Pi.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var F="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[F])},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},w=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},B=y;B.l=x,B.i=$,B.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return w(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<w(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return f(r?v-S:v+(6-S),m);case s:case h:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case o:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=B.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var h,f=this;r=Number(r);var p=B.p(u),g=function(e){var t=w(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return B.s(o%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return B.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var p,g=this,m=B.p(h),v=w(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,S=function(){return B.m(g,v)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(b-y)/6048e5;break;case s:p=(b-y)/864e5;break;case a:p=b/n;break;case o:p=b/t;break;case i:p=b/e;break;default:p=b}return f?p:B.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),O=D.prototype;return w.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=x,w.isDayjs=$,w.unix=function(e){return w(1e3*e)},w.en=S[b],w.Ls=S,w.p={},w}();var Ri=U(Pi.exports),Ni={exports:{}};Ni.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var v=s||0,y=l||0,b=c||0,S=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,S)):new Date(g,m,p,v,y,b,S)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ji=U(Ni.exports),Wi={exports:{}};Wi.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Ii=U(Wi.exports),Yi={exports:{}};Yi.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vi=U(Yi.exports),Ki={exports:{}};Ki.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ui=U(Ki.exports),Ji={exports:{}};Ji.exports=function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,i){var o,a=function(e,n,r){void 0===r&&(r={});var i=new Date(e),o=function(e,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=e+"|"+r,o=t[i];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),t[i]=o),o}(n,r);return o.formatToParts(i)},s=function(t,n){for(var r=a(t,n),o=[],s=0;s<r.length;s+=1){var l=r[s],c=l.type,u=l.value,d=e[c];d>=0&&(o[d]=parseInt(u,10))}var h=o[3],f=24===h?0:h,p=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",g=+t;return(i.utc(p).valueOf()-(g-=g%1e3))/6e4},l=r.prototype;l.tz=function(e,t){void 0===e&&(e=o);var n=this.utcOffset(),r=this.toDate(),a=r.toLocaleString("en-US",{timeZone:e}),s=Math.round((r-new Date(a))/1e3/60),l=i(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(n-c,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var c=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var r=n&&t,a=n||t||o,l=s(+i(),a);if("string"!=typeof e)return i(e).tz(a);var c=function(e,t,n){var r=e-60*t*1e3,i=s(r,n);if(t===i)return[r,t];var o=s(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(e,r).valueOf(),l,a),u=c[0],d=c[1],h=i(u).utcOffset(d);return h.$x.$timezone=a,h},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){o=e}}}();var Zi,Xi=U(Ji.exports);Ri.extend(Ii),Ri.extend(Ui),Ri.extend(Vi),Ri.extend(ji),Ri.extend(Xi),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ri(t).startOf("week");return Gi(n).map((e=>qi(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return qi(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ri(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ri(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ri(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Ri(r):void 0,i?Ri(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Zi||(Zi={}));const Gi=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},qi=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Qi=[1,3,5,7,8,10,12],eo=[4,6,9,11];var to,no,ro;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Qi.includes(o)?Math.min(i,31).toString():eo.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ri(e,n);return Ri(t,n).diff(r,"minute")},e.toDayjs=e=>e?Ri(e):Ri(),e.addMinutesToTime=(e,t,n="HH:mm")=>Ri(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Ri(e).isSame(Ri(t),n)}(to||(to={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Ri(e).isBefore(r,"day"))||!(!i||!Ri(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ri(e).isValid())return e}return""}}(no||(no={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ro||(ro={}));const io=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),oo=({children:e})=>{const[n,r]=o(-1);return t(io.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},ao={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},so=e=>Object.keys(ao).reduce(((t,n)=>{const r=ao[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),lo=so("max-width"),co=(so("min-width"),ao),uo=g.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ho=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,fo=g.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${ho} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,po=g(fo)`
    animation-delay: -0.45s;
`,go=g(fo)`
    animation-delay: -0.3s;
`,mo=g(fo)`
    animation-delay: -0.15s;
`,vo={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${xn.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${xn.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${xn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${xn.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${xn.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${xn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},yo=e=>t=>{var n;const r=t.theme,i=cn(vo,r[un.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ln(i,e,r.options.designToken):ln(i,e)},bo=yo("InputBoxShadow"),So=yo("InputErrorBoxShadow"),Fo=(yo("ElevationBoxShadow"),yo("Table.Header"),yo("Table.Cell.Primary"),yo("Table.Cell.Secondary"),yo("Table.Cell.Selected"),yo("Table.Cell.Hover"),yo("Button.Danger.BackgroundColor"),yo("Button.Danger.Hover"),yo("Button.Danger.Primary"),yo("Button.Danger.Border"),m`
    border: 1px solid ${xn.Accent.Light[1]};
    box-shadow: ${bo};
`),$o=m`
    border: 1px solid ${xn.Accent.Light[1]};
    box-shadow: none;
`,xo=m`
    border: 1px solid ${xn.Neutral[5]};
    box-shadow: none;
`,wo=m`
    border: 1px solid ${xn.Validation.Red.Border};
    box-shadow: ${So};
`,Bo=g.div`
    border: 1px solid ${xn.Neutral[5]};
    border-radius: 4px;
    background: ${xn.Neutral[8]};

    :focus-within {
        ${Fo}
    }
    ${e=>e.$focused&&Fo}

    ${e=>e.$readOnly?m`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${$o}
                }
                ${e.$focused&&$o}
            `:e.$disabled?m`
                background: ${xn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${xo}
                }
                ${e.$focused&&xo}
            `:e.$error?m`
                border: 1px solid ${xn.Validation.Red.Border};

                :focus-within {
                    ${wo}
                }
                ${e.$focused&&wo}
            `:void 0}
`;g(Bo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Do=g.input`
    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${xn.Neutral[1]};
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
        color: ${xn.Neutral[3]};
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
`,Oo=g.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${xn.Primary};
    }
`;g.div`
    overflow: hidden;
    border: 1px solid ${xn.Neutral[5]};
    border-radius: 4px;
    background: ${xn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${lo.mobileL} {
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
        background: ${xn.Neutral[4]};
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

    outline-color: ${xn.Accent.Light[3]};

    ${e=>e.$active&&m`
            background: ${xn.Accent.Light[5]};
        `}
`,g($)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${xn.Primary};
`,g.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,g(F)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${xn.Primary};
`,g(S)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${xn.Accent.Light[2]};
`,g.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const ko=g(Oo)`
    ${e=>bn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${xn.Primary};
`;g(ko)`
    outline-offset: 0.25rem;
`,g(ko)`
    padding: 0.5rem 1rem;
`,g.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;

    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}
`,g(b)`
    ${e=>{const t="small"===e.$variant?1:1.125;return m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${xn.Validation.Red.Icon};
`,g((({color:n,className:r,size:i})=>e(uo,Object.assign({className:r,$size:i,$color:n},{children:[t(fo,{id:"inner1"}),t(po,{id:"inner2"}),t(go,{id:"inner3"}),t(mo,{id:"inner4"})]}))))`
    margin-right: 0.625rem;
    color: ${xn.Primary};
`;const Eo=g.button`
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
                background-color: ${xn.Neutral[7]};
            `}
    }
`,Mo=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=j(e,["children","focusHighlight","focusOutline","type"]);return t(Eo,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Ho=e=>"small"===e?1:1.125,zo=e=>m`
        height: ${Ho(e)}rem;
        width: ${Ho(e)}rem;
    `,To=g.div`
    background: ${xn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Co=g.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Ao=g(Do)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,_o=g(w)`
    color: ${xn.Neutral[3]};
    flex-shrink: 0;
    ${e=>zo(e.$variant)}
`,Lo=g(Mo)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${xn.Neutral[3]};
    cursor: pointer;

    ${e=>m`
            svg {
                ${zo(e.$variant)}
            }
        `}
`;p(((n,r)=>{var{value:i,variant:o,onClear:a}=n,s=j(n,["value","variant","onClear"]);return e(To,{children:[e(Co,{children:[t(_o,{$variant:o,"aria-hidden":!0}),t(Ao,Object.assign({ref:r,value:i,$variant:o},s))]}),i&&t(Lo,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:o},{children:t(x,{"aria-hidden":!0})}))]})}));const Po="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ro=g(Oo)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,No=g.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Po};

    svg {
        color: ${xn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?fn.BodySmall.fontSize:fn.Body.fontSize;return m`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,jo=p((({children:n,disabled:r,expanded:i,listboxId:o,readOnly:a,variant:s},l)=>e(Ro,Object.assign({ref:l,type:"button","aria-expanded":i,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":o,$variant:s},{children:[n,!a&&t(No,Object.assign({$expanded:i,$variant:s},{children:t(B,{"aria-hidden":!0})}))]})))),Wo=e=>"small"===e?2.5:3;g.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Wo(e.$variant);return m`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Io=m`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Wo(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${xn.Accent.Light[3]};
    }
`,Yo=g.button`
    ${Io}
    cursor: pointer;
`;g.div`
    ${Io}
`;const Vo=v`
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
    border: 1px solid ${xn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${xn.Neutral[8]};

    :focus-within {
        border: 1px solid ${xn.Accent.Light[1]};
        box-shadow: ${bo};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${Vo} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${xn.Neutral[6](e)};

                ${Yo} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${xn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${Yo} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${xn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${xn.Validation.Red.Border(e)};
                    box-shadow: ${So};
                }
            `:void 0}
`,g.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Po};
    margin-left: 1rem;
`,g(B)`
    color: ${xn.Neutral[3]};
    ${e=>{let t=fn.Body.fontSize;return"small"===e.$variant&&(t=fn.BodySmall.fontSize),m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,g.div`
    height: 1px;
    background: ${xn.Neutral[5]};
    margin: 0 0.5rem;
`;const Ko=g.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Uo=g.div`
    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;var Jo;g(Uo)`
    color: ${xn.Neutral[3]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Jo||(Jo={}));const Zo=g.div`
    display: flex;
    flex-direction: column;
`,Xo=e=>"right"===e?"bottom-end":"bottom-start",Go=({enabled:r,isOpen:i,onOpen:s,onClose:c,onDismiss:u,renderElement:d,renderDropdown:h,customZIndex:f,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=l(null),S=l(null),{width:F}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=l(n),v=l(null),y=null!=f?f:v,b=l(),S=o({width:void 0,height:void 0}),F=S[0],$=S[1];return Kr((function(){if(!Wr()){var e=Yr(g,$,u,h);b.current=Nr((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Wr()&&e({width:r,height:i}),m.current=!1}))}),r,a,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,a,s,u,h,g,p,y.current]),Qn({ref:y},F)}({targetRef:b,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<co.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:x,floatingStyles:w,context:B}=O({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==u||u():e&&!i?null==s||s():!e&&i&&(null==c||c(n))},whileElementsMounted:k,placement:Xo(m),middleware:[E(g),M(),H({limiter:z()}),T({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),$]}),N=(()=>{const[e,t]=o(void 0),n=D();return a((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Jo.Change,e),n.events.emit(Jo.Ready),()=>n.events.off(Jo.Change,e)}),[n]),e})(),{isMounted:j,styles:W}=C(B,{initial:{opacity:0},open:{opacity:1},duration:300}),I=A(B,{enabled:r,toggle:p}),Y=_(B,{enabled:r}),{getReferenceProps:V,getFloatingProps:K}=L([I,Y]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,x.setReference(e)}},V(),{children:d()})),j&&t(P,{children:t(R,Object.assign({context:B,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:x.setFloating,style:Object.assign(Object.assign({},w),{zIndex:null!==(y=null!=f?f:N)&&void 0!==y?y:50})},K(),{children:t(Zo,Object.assign({ref:S,style:Object.assign({},W),inert:W.opacity<1?"":void 0},{children:h({elementWidth:F})}))}))}))})]})},qo=g.div`
    overflow: hidden;
    border: 1px solid ${xn.Neutral[5]};
    border-radius: 4px;
    background: ${xn.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${lo.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,Qo=g.div`
    display: flex;
    align-items: baseline;
`,ea=g.div`
    margin: 0 0.5rem;
`,ta=g.div`
    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,na=g(ta)`
    color: ${xn.Neutral[3]};
`,ra=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:c,error:u,histogramSlider:d,id:h,onBlur:f,onChange:p,onChangeEnd:g,optionTruncationType:m="end",placeholder:v="Select",rangeLabelPrefix:y,rangeLabelSuffix:b,readOnly:S,renderRangeLabel:F,value:$}=n,x=j(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:B=[],renderEmptyView:D,ariaLabels:O}=d,[k,E]=o(K()),[M,H]=o(!1),[z,T]=o(!1),[C]=o((()=>ro.generate())),A=B.map((e=>e.minValue)),_=Math.min(...A),L=l(),P=l(),R=l(),N=x["data-testid"]||"select-histogram";a((()=>{$!==k&&E(K())}),[$]);const W=e=>{E(e),null==p||p(e)},I=e=>{E(e),null==g||g(e)},Y=()=>{z||M||T(!0)},V=e=>{!z||M||L.current.contains(e.relatedTarget)||(T(!1),null==f||f())};function K(){return null!=$?$:[_,_+w]}const U=t=>F?F(t):e(wn.Body,{children:[y,t,b]});return t(oo,{children:t(Go,{enabled:!S&&!s,isOpen:M,renderElement:()=>t(Bo,Object.assign({className:i,"data-testid":N,id:h,ref:L,tabIndex:-1,onFocus:Y,onBlur:V,$focused:z,$disabled:s,$readOnly:S,$error:u},{children:t(jo,Object.assign({ref:P,disabled:s,expanded:M,listboxId:C,readOnly:S,variant:"default"},{children:t(Ko,Object.assign({ref:R},{children:A&&0!==A.length?e(Qo,{children:[U(k[0]),t(ea,{children:"-"}),U(k[1])]}):t(na,Object.assign({truncateType:m,$variant:"default"},{children:v}))}))}))})),renderDropdown:({elementWidth:e})=>t(qo,Object.assign({style:{width:e}},{children:t(Gn,{interval:w,value:k,bins:B,onChange:W,onChangeEnd:I,showRangeLabels:!1,renderEmptyView:D,ariaLabels:O})})),onOpen:()=>{H(!0)},onClose:()=>{H(!1)},onDismiss:()=>{P.current.focus(),H(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:c})})};export{ra as SelectHistogram};
//# sourceMappingURL=index.js.map
