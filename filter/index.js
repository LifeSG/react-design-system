import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{ChevronDownIcon as r,FilterIcon as i,CrossIcon as o}from"@lifesg/react-icons";import a,{keyframes as s,css as l}from"styled-components";import*as c from"react";import u,{useRef as d,useState as f,isValidElement as h,createRef as p,cloneElement as m,PureComponent as g,useEffect as y,useLayoutEffect as v,forwardRef as b,useCallback as w,useContext as x,useMemo as $}from"react";import{ExternalIcon as S}from"@lifesg/react-icons/external";import*as F from"react-dom";import O,{findDOMNode as k,unstable_batchedUpdates as D,createPortal as B}from"react-dom";import{ICircleFillIcon as E}from"@lifesg/react-icons/i-circle-fill";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import{CircleIcon as j}from"@lifesg/react-icons/circle";import{CircleDotIcon as M}from"@lifesg/react-icons/circle-dot";import{SquareIcon as A}from"@lifesg/react-icons/square";import{SquareTickFillIcon as T}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as R}from"@lifesg/react-icons/tick";import{ChevronUpIcon as P}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as I}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as H}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as N}from"@lifesg/react-icons/tick-circle-fill";import{ChevronLeftIcon as L}from"@lifesg/react-icons/chevron-left";function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var q=Array.isArray,U="object"==typeof V&&V&&V.Object===Object&&V,Q="object"==typeof self&&self&&self.Object===Object&&self,Z=U||Q||Function("return this")(),G=Z.Symbol,X=G,J=Object.prototype,K=J.hasOwnProperty,ee=J.toString,te=X?X.toStringTag:void 0;var ne=function(e){var t=K.call(e,te),n=e[te];try{e[te]=void 0;var r=!0}catch(e){}var i=ee.call(e);return r&&(t?e[te]=n:delete e[te]),i},re=Object.prototype.toString;var ie=ne,oe=function(e){return re.call(e)},ae=G?G.toStringTag:void 0;var se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?ie(e):oe(e)};var le=se,ce=function(e){return null!=e&&"object"==typeof e};var ue=function(e){return"symbol"==typeof e||ce(e)&&"[object Symbol]"==le(e)},de=q,fe=ue,he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var me=function(e,t){if(de(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!fe(e))||(pe.test(e)||!he.test(e)||null!=t&&e in Object(t))};var ge=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ye=se,ve=ge;var be,we=function(e){if(!ve(e))return!1;var t=ye(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},xe=Z["__core-js_shared__"],$e=(be=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+be:"";var Se=function(e){return!!$e&&$e in e},Fe=Function.prototype.toString;var Oe=we,ke=Se,De=ge,Be=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ee=/^\[object .+?Constructor\]$/,_e=Function.prototype,Ce=Object.prototype,je=_e.toString,Me=Ce.hasOwnProperty,Ae=RegExp("^"+je.call(Me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Te=function(e){return!(!De(e)||ke(e))&&(Oe(e)?Ae:Ee).test(Be(e))},Re=function(e,t){return null==e?void 0:e[t]};var Pe=function(e,t){var n=Re(e,t);return Te(n)?n:void 0},Ie=Pe(Object,"create"),He=Ie;var ze=function(){this.__data__=He?He(null):{},this.size=0};var Ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le=Ie,We=Object.prototype.hasOwnProperty;var Ve=function(e){var t=this.__data__;if(Le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return We.call(t,e)?t[e]:void 0},Ye=Ie,qe=Object.prototype.hasOwnProperty;var Ue=Ie;var Qe=ze,Ze=Ne,Ge=Ve,Xe=function(e){var t=this.__data__;return Ye?void 0!==t[e]:qe.call(t,e)},Je=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Qe,Ke.prototype.delete=Ze,Ke.prototype.get=Ge,Ke.prototype.has=Xe,Ke.prototype.set=Je;var et=Ke;var tt=function(){this.__data__=[],this.size=0};var nt=function(e,t){return e===t||e!=e&&t!=t};var rt=function(e,t){for(var n=e.length;n--;)if(nt(e[n][0],t))return n;return-1},it=rt,ot=Array.prototype.splice;var at=function(e){var t=this.__data__,n=it(t,e);return!(n<0)&&(n==t.length-1?t.pop():ot.call(t,n,1),--this.size,!0)},st=rt;var lt=function(e){var t=this.__data__,n=st(t,e);return n<0?void 0:t[n][1]},ct=rt;var ut=rt;var dt=function(e,t){var n=this.__data__,r=ut(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},ft=tt,ht=at,pt=lt,mt=function(e){return ct(this.__data__,e)>-1},gt=dt;function yt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yt.prototype.clear=ft,yt.prototype.delete=ht,yt.prototype.get=pt,yt.prototype.has=mt,yt.prototype.set=gt;var vt=yt,bt=Pe(Z,"Map"),wt=et,xt=vt,$t=bt;var St=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ft=function(e,t){var n=e.__data__;return St(t)?n["string"==typeof t?"string":"hash"]:n.map},Ot=Ft;var kt=Ft;var Dt=Ft;var Bt=Ft;var Et=function(){this.size=0,this.__data__={hash:new wt,map:new($t||xt),string:new wt}},_t=function(e){var t=Ot(this,e).delete(e);return this.size-=t?1:0,t},Ct=function(e){return kt(this,e).get(e)},jt=function(e){return Dt(this,e).has(e)},Mt=function(e,t){var n=Bt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function At(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}At.prototype.clear=Et,At.prototype.delete=_t,At.prototype.get=Ct,At.prototype.has=jt,At.prototype.set=Mt;var Tt=At;function Rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Rt.Cache||Tt),n}Rt.Cache=Tt;var Pt=Rt;var It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ht=/\\(\\)?/g,zt=function(e){var t=Pt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(It,(function(e,n,r,i){t.push(r?i.replace(Ht,"$1"):n||e)})),t}));var Nt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Lt=Nt,Wt=q,Vt=ue,Yt=G?G.prototype:void 0,qt=Yt?Yt.toString:void 0;var Ut=function e(t){if("string"==typeof t)return t;if(Wt(t))return Lt(t,e)+"";if(Vt(t))return qt?qt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Qt=Ut;var Zt=q,Gt=me,Xt=zt,Jt=function(e){return null==e?"":Qt(e)};var Kt=ue;var en=function(e,t){return Zt(e)?e:Gt(e,t)?[e]:Xt(Jt(e))},tn=function(e){if("string"==typeof e||Kt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var nn=function(e,t){for(var n=0,r=(t=en(t,e)).length;null!=e&&n<r;)e=e[tn(t[n++])];return n&&n==r?e:void 0},rn=nn;var on=Y((function(e,t,n){var r=null==e?void 0:rn(e,t);return void 0===r?n:r}));const an=(e,t,n)=>t?on(n,t)||on(e,t):n||e,sn=(e,t)=>{const n=t||e.defaultValue;return on(e.collections,n)};var ln;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ln||(ln={}));const cn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},un=e=>t=>{const n=t.theme,r=sn(cn,n[ln.colorScheme]);return n.options&&n.options.color?an(r,e,n.options.color):an(r,e)},dn={Brand:{1:un("Brand.1"),2:un("Brand.2"),3:un("Brand.3"),4:un("Brand.4"),5:un("Brand.5"),6:un("Brand.6")},Primary:un("Primary"),PrimaryDark:un("PrimaryDark"),Secondary:un("Secondary"),Accent:{Light:{1:un("Accent.Light.1"),2:un("Accent.Light.2"),3:un("Accent.Light.3"),4:un("Accent.Light.4"),5:un("Accent.Light.5"),6:un("Accent.Light.6")},Dark:{1:un("Accent.Dark.1"),2:un("Accent.Dark.2"),3:un("Accent.Dark.3")}},Neutral:{1:un("Neutral.1"),2:un("Neutral.2"),3:un("Neutral.3"),4:un("Neutral.4"),5:un("Neutral.5"),6:un("Neutral.6"),7:un("Neutral.7"),8:un("Neutral.8")},Validation:{Green:{Text:un("Validation.Green.Text"),Icon:un("Validation.Green.Icon"),Border:un("Validation.Green.Border"),Background:un("Validation.Green.Background")},Orange:{Text:un("Validation.Orange.Text"),Icon:un("Validation.Orange.Icon"),Border:un("Validation.Orange.Border"),Background:un("Validation.Orange.Background"),Badge:un("Validation.Orange.Badge")},Red:{Text:un("Validation.Red.Text"),Icon:un("Validation.Red.Icon"),Border:un("Validation.Red.Border"),Background:un("Validation.Red.Background")},Blue:{Text:un("Validation.Blue.Text"),Icon:un("Validation.Blue.Icon"),Border:un("Validation.Blue.Border"),Background:un("Validation.Blue.Background")}},Shadow:{Accent:un("Shadow.Accent"),Red:un("Shadow.Red"),Elevation:un("Shadow.Elevation")}},fn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},hn=e=>Object.keys(fn).reduce(((t,n)=>{const r=fn[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),pn=hn("max-width"),mn=(hn("min-width"),fn),gn=a.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,yn=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,vn=a.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||dn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${yn} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,bn=a(vn)`
    animation-delay: -0.45s;
`,wn=a(vn)`
    animation-delay: -0.3s;
`,xn=a(vn)`
    animation-delay: -0.15s;
`,$n={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Sn={collections:{base:{D1:{fontFamily:$n.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:$n.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:$n.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$n.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$n.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:$n.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:$n.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:$n.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:$n.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:$n.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:$n.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:$n.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:$n.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:$n.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:$n.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:$n.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:$n.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$n.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$n.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:$n.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:$n.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:$n.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:$n.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:$n.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:$n.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:$n.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:$n.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:$n.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Fn=e=>t=>{const n=t.theme,r=sn(Sn,n[ln.textStyleScheme]);return n.options&&n.options.textStyle?an(r,e,n.options.textStyle):an(r,e)},On={D1:{fontFamily:Fn("D1.fontFamily"),fontSize:Fn("D1.fontSize"),fontWeight:Fn("D1.fontWeight"),lineHeight:Fn("D1.lineHeight"),letterSpacing:Fn("D1.letterSpacing")},D2:{fontFamily:Fn("D2.fontFamily"),fontSize:Fn("D2.fontSize"),fontWeight:Fn("D2.fontWeight"),lineHeight:Fn("D2.lineHeight"),letterSpacing:Fn("D2.letterSpacing")},D3:{fontFamily:Fn("D3.fontFamily"),fontSize:Fn("D3.fontSize"),fontWeight:Fn("D3.fontWeight"),lineHeight:Fn("D3.lineHeight"),letterSpacing:Fn("D3.letterSpacing")},D4:{fontFamily:Fn("D4.fontFamily"),fontSize:Fn("D4.fontSize"),fontWeight:Fn("D4.fontWeight"),lineHeight:Fn("D4.lineHeight"),letterSpacing:Fn("D4.letterSpacing")},DBody:{fontFamily:Fn("DBody.fontFamily"),fontSize:Fn("DBody.fontSize"),fontWeight:Fn("DBody.fontWeight"),lineHeight:Fn("DBody.lineHeight"),letterSpacing:Fn("DBody.letterSpacing")},H1:{fontFamily:Fn("H1.fontFamily"),fontSize:Fn("H1.fontSize"),fontWeight:Fn("H1.fontWeight"),lineHeight:Fn("H1.lineHeight"),letterSpacing:Fn("H1.letterSpacing")},H2:{fontFamily:Fn("H2.fontFamily"),fontSize:Fn("H2.fontSize"),fontWeight:Fn("H2.fontWeight"),lineHeight:Fn("H2.lineHeight"),letterSpacing:Fn("H2.letterSpacing")},H3:{fontFamily:Fn("H3.fontFamily"),fontSize:Fn("H3.fontSize"),fontWeight:Fn("H3.fontWeight"),lineHeight:Fn("H3.lineHeight"),letterSpacing:Fn("H3.letterSpacing")},H4:{fontFamily:Fn("H4.fontFamily"),fontSize:Fn("H4.fontSize"),fontWeight:Fn("H4.fontWeight"),lineHeight:Fn("H4.lineHeight"),letterSpacing:Fn("H4.letterSpacing")},H5:{fontFamily:Fn("H5.fontFamily"),fontSize:Fn("H5.fontSize"),fontWeight:Fn("H5.fontWeight"),lineHeight:Fn("H5.lineHeight"),letterSpacing:Fn("H5.letterSpacing")},H6:{fontFamily:Fn("H6.fontFamily"),fontSize:Fn("H6.fontSize"),fontWeight:Fn("H6.fontWeight"),lineHeight:Fn("H6.lineHeight"),letterSpacing:Fn("H6.letterSpacing")},Body:{fontFamily:Fn("Body.fontFamily"),fontSize:Fn("Body.fontSize"),fontWeight:Fn("Body.fontWeight"),lineHeight:Fn("Body.lineHeight"),letterSpacing:Fn("Body.letterSpacing")},BodySmall:{fontFamily:Fn("BodySmall.fontFamily"),fontSize:Fn("BodySmall.fontSize"),fontWeight:Fn("BodySmall.fontWeight"),lineHeight:Fn("BodySmall.lineHeight"),letterSpacing:Fn("BodySmall.letterSpacing")},XSmall:{fontFamily:Fn("XSmall.fontFamily"),fontSize:Fn("XSmall.fontSize"),fontWeight:Fn("XSmall.fontWeight"),lineHeight:Fn("XSmall.lineHeight"),letterSpacing:Fn("XSmall.letterSpacing")}},kn=e=>{switch(e){case 700:case"bold":return $n.Bold;case 600:case"semibold":return $n.Semibold;case 300:case"light":return $n.Light;case 400:case"regular":return $n.Regular;default:return""}},Dn=(e,t)=>n=>{var r;const i=On[e].fontFamily(n),o=On[e].fontWeight(n);return Object.values($n).includes(i)?l`
                font-family: ${kn(t)||kn(o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Bn(t)||o)&&void 0!==r?r:"normal"};
        `},Bn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},En=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_n=Dn,Cn=(e,t,n=!1)=>r=>{const i=On[e],o=i.fontSize(r);return l`
            ${Dn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},jn=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${En(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${En(n)}
        `;var Mn;!function(e){e.D1=a.h1`
        ${e=>l`
                ${Cn("D1",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${Cn("D2",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${Cn("D3",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${Cn("D4",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${Cn("DBody",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${Cn("H1",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${Cn("H2",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${Cn("H3",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${Cn("H4",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${Cn("H5",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${Cn("H6",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${Cn("Body",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${Cn("BodySmall",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${Cn("XSmall",e.weight,e.paragraph)}
                color: ${dn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Mn||(Mn={}));const An=a.a`
    ${e=>l`
            ${Cn(e.textStyle,e.weight)}
            color: ${dn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${dn.Secondary};

                svg {
                    color: ${dn.Secondary};
                }
            }
        `}
`,Tn=a(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rn=n=>{var{external:r=!1,children:i}=n,o=W(n,["external","children"]);return e(An,Object.assign({},o,{children:[i,r&&t(Tn,{})]}))};var Pn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pn||(Pn={}));const In={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${dn.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${dn.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${dn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${dn.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${dn.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${dn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Hn=e=>t=>{var n;const r=t.theme,i=sn(In,r[ln.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?an(i,e,r.options.designToken):an(i,e)},zn={InputBoxShadow:Hn("InputBoxShadow"),InputErrorBoxShadow:Hn("InputErrorBoxShadow"),ElevationBoxShadow:Hn("ElevationBoxShadow"),Table:{Header:Hn("Table.Header"),Cell:{Primary:Hn("Table.Cell.Primary"),Secondary:Hn("Table.Cell.Secondary"),Selected:Hn("Table.Cell.Selected"),Hover:Hn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Hn("Button.Danger.BackgroundColor"),Hover:Hn("Button.Danger.Hover"),Primary:Hn("Button.Danger.Primary"),Border:Hn("Button.Danger.Border")}}},Nn=a.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return l`
                    background-color: ${dn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?zn.Button.Danger.Border:dn.Primary};

                    color: ${e.$buttonIsDanger?zn.Button.Danger.Primary:dn.Primary};
                `;case"light":return l`
                    background-color: ${dn.Neutral[8]};
                    border: 1px solid ${dn.Neutral[5]};

                    color: ${e.$buttonIsDanger?zn.Button.Danger.Primary:dn.Primary};
                `;case"disabled":return l`
                    background-color: ${dn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${dn.Neutral[3]};
                `;case"link":return l`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?zn.Button.Danger.Primary:dn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?zn.Button.Danger.Hover:dn.Secondary};
                    }
                `;default:return l`
                    background-color: ${e.$buttonIsDanger?zn.Button.Danger.BackgroundColor:dn.Primary};
                    border: 1px solid transparent;

                    ${pn.mobileL} {
                        width: 100%;
                    }

                    color: ${dn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?l`
                    height: 2.5rem;
                    ${Cn("H5","semibold")}

                    ${pn.mobileS} {
                        height: auto;
                    }
                `:l`
                    height: 3rem;
                    ${Cn("H4","semibold")}

                    ${pn.mobileS} {
                        height: auto;
                    }
                `}
`,Ln=a((({color:n,className:r,size:i=18})=>e(gn,Object.assign({className:r,$size:i,$color:n},{children:[t(vn,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(bn,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(wn,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(xn,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?zn.Button.Danger.Primary:dn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=dn.Neutral[3](e);break;default:t=dn.Neutral[8](e)}return l`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Wn={Default:u.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=W(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Nn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(Ln,Object.assign({},u)),t("span",{children:i})]}))})),Small:u.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=W(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Nn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(Ln,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},Vn=a.button`
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

        ${({$highlight:e})=>e&&l`
                background-color: ${dn.Neutral[7]};
            `}
    }
`,Yn=u.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=W(e,["children","focusHighlight","focusOutline","type"]);return t(Vn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),qn=a(Nn)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?l`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:l`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,Un={Default:u.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,u=W(n,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(qn,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},d,u,{children:[l,t("span",{children:i})]}))})),Small:u.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,u=W(n,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(qn,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},d,u,{children:[l,t("span",{children:i})]}))}))},Qn=a.div`
    background-color: ${dn.Neutral[8]};
    border: 1px solid ${dn.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,Zn=a.div`
    background-color: ${dn.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Gn=a.div`
    background-color: ${dn.Neutral[8]};
    height: 100%;
    width: 100%;
`,Xn=a.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Jn=a.div`
    display: flex;
    align-items: center;

    background-color: ${dn.Neutral[8]};

    ${pn.tablet} {
        border-bottom: 1px solid ${dn.Neutral[5]};
    }
`,Kn=a(Mn.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${pn.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,er=a(Yn)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${dn.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${dn.Neutral[2]};
    }
`,tr=a(Wn.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${pn.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,nr=a(Un.Default)`
    width: 100%;
`,rr=a.div`
    padding: 1.5rem 1.25rem;
    background-color: ${dn.Neutral[8]};
    border-top: 1px solid ${dn.Neutral[5]};
`,ir=a(Wn.Default)`
    width: 100%;
`,or=u.createContext({mode:"default",rootNode:null});var ar=Y((function(e){return null==e})),sr=function(e,t){return sr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},sr(e,t)};var lr=function(){return lr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},lr.apply(this,arguments)};var cr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ur=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},dr="object"==typeof cr&&cr&&cr.Object===Object&&cr,fr="object"==typeof self&&self&&self.Object===Object&&self,hr=dr||fr||Function("return this")(),pr=hr,mr=function(){return pr.Date.now()},gr=/\s/;var yr=function(e){for(var t=e.length;t--&&gr.test(e.charAt(t)););return t},vr=yr,br=/^\s+/;var wr=function(e){return e?e.slice(0,vr(e)+1).replace(br,""):e},xr=hr.Symbol,$r=xr,Sr=Object.prototype,Fr=Sr.hasOwnProperty,Or=Sr.toString,kr=$r?$r.toStringTag:void 0;var Dr=function(e){var t=Fr.call(e,kr),n=e[kr];try{e[kr]=void 0;var r=!0}catch(e){}var i=Or.call(e);return r&&(t?e[kr]=n:delete e[kr]),i},Br=Object.prototype.toString;var Er=Dr,_r=function(e){return Br.call(e)},Cr=xr?xr.toStringTag:void 0;var jr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Cr&&Cr in Object(e)?Er(e):_r(e)},Mr=function(e){return null!=e&&"object"==typeof e};var Ar=wr,Tr=ur,Rr=function(e){return"symbol"==typeof e||Mr(e)&&"[object Symbol]"==jr(e)},Pr=/^[-+]0x[0-9a-f]+$/i,Ir=/^0b[01]+$/i,Hr=/^0o[0-7]+$/i,zr=parseInt;var Nr=ur,Lr=mr,Wr=function(e){if("number"==typeof e)return e;if(Rr(e))return NaN;if(Tr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Tr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ar(e);var n=Ir.test(e);return n||Hr.test(e)?zr(e.slice(2),n?2:8):Pr.test(e)?NaN:+e},Vr=Math.max,Yr=Math.min;var qr=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=Lr();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?Yr(n,o-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?h(e):(r=i=void 0,a)}function y(){var e=Lr(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),h(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Wr(t)||0,Nr(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Vr(Wr(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(Lr())},y},Ur=qr,Qr=ur;var Zr=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Qr(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ur(e,t,{leading:r,maxWait:t,trailing:i})},Gr=function(e,t,n,r){switch(t){case"debounce":return qr(e,n,r);case"throttle":return Zr(e,n,r);default:return e}},Xr=function(e){return"function"==typeof e},Jr=function(){return"undefined"==typeof window},Kr=function(e){return e instanceof Element||e instanceof HTMLDocument},ei=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Xr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Jr()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Jr())return null;if(t)return document.querySelector(t);if(r&&Kr(r))return r;if(n.targetRef&&Kr(n.targetRef.current))return n.targetRef.current;var i=k(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ei(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Jr()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Xr(t)?"renderProp":Xr(r)?"childFunction":h(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=p(),n.observableElement=null,Jr()||(n.resizeHandler=Gr(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}sr(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Jr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,o=void 0===i?"div":i,a=this.state,s={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=r)(s);case"child":if((e=r).type&&"string"==typeof e.type){var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(s,["targetRef"]);return m(e,l)}return m(e,s);case"childArray":return(e=r).map((function(e){return!!e&&m(e,s)}));default:return c.createElement(o,null)}}}(g);var ti=Jr()?y:v;function ni(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,c=e.handleHeight,u=void 0===c||c,h=e.targetRef,p=e.observerOptions,m=e.onResize,g=d(n),y=d(null),v=null!=h?h:y,b=d(),w=f({width:void 0,height:void 0}),x=w[0],$=w[1];return ti((function(){if(!Jr()){var e=ei(m,$,l,u);b.current=Gr((function(t){(l||u)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!Jr()&&e({width:r,height:i}),g.current=!1}))}),r,o,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,a,l,u,m,p,v.current]),lr({ref:v},x)}var ri=Object.defineProperty,ii={};((e,t)=>{for(var n in t)ri(e,n,{get:t[n],enumerable:!0})})(ii,{assign:()=>Pi,colors:()=>Ai,createStringInterpolator:()=>_i,skipAnimation:()=>Ti,to:()=>Ci,willAdvance:()=>Ri});var oi=xi(),ai=e=>yi(e,oi),si=xi();ai.write=e=>yi(e,si);var li=xi();ai.onStart=e=>yi(e,li);var ci=xi();ai.onFrame=e=>yi(e,ci);var ui=xi();ai.onFinish=e=>yi(e,ui);var di=[];ai.setTimeout=(e,t)=>{const n=ai.now()+t,r=()=>{const e=di.findIndex((e=>e.cancel==r));~e&&di.splice(e,1),mi-=~e?1:0},i={time:n,handler:e,cancel:r};return di.splice(fi(n),0,i),mi+=1,vi(),i};var fi=e=>~(~di.findIndex((t=>t.time>e))||~di.length);ai.cancel=e=>{li.delete(e),ci.delete(e),ui.delete(e),oi.delete(e),si.delete(e)},ai.sync=e=>{gi=!0,ai.batchedUpdates(e),gi=!1},ai.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ai.onStart(n)}return r.handler=e,r.cancel=()=>{li.delete(n),t=null},r};var hi="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ai.use=e=>hi=e,ai.now="undefined"!=typeof performance?()=>performance.now():Date.now,ai.batchedUpdates=e=>e(),ai.catch=console.error,ai.frameLoop="always",ai.advance=()=>{"demand"!==ai.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):wi()};var pi=-1,mi=0,gi=!1;function yi(e,t){gi?(t.delete(e),e(0)):(t.add(e),vi())}function vi(){pi<0&&(pi=0,"demand"!==ai.frameLoop&&hi(bi))}function bi(){~pi&&(hi(bi),ai.batchedUpdates(wi))}function wi(){const e=pi;pi=ai.now();const t=fi(pi);t&&($i(di.splice(0,t),(e=>e.handler())),mi-=t),mi?(li.flush(),oi.flush(e?Math.min(64,pi-e):16.667),ci.flush(),si.flush(),ui.flush()):pi=-1}function xi(){let e=new Set,t=e;return{add(n){mi+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(mi-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,mi-=t.size,$i(t,(t=>t(n)&&e.add(t))),mi+=e.size,t=e)}}}function $i(e,t){e.forEach((e=>{try{t(e)}catch(e){ai.catch(e)}}))}function Si(){}var Fi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Oi(e,t){if(Fi.arr(e)){if(!Fi.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var ki=(e,t)=>e.forEach(t);function Di(e,t,n){if(Fi.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Bi=e=>Fi.und(e)?[]:Fi.arr(e)?e:[e];function Ei(e,t){if(e.size){const n=Array.from(e);e.clear(),ki(n,t)}}var _i,Ci,ji=(e,...t)=>Ei(e,(e=>e(...t))),Mi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ai=null,Ti=!1,Ri=Si,Pi=e=>{e.to&&(Ci=e.to),e.now&&(ai.now=e.now),void 0!==e.colors&&(Ai=e.colors),null!=e.skipAnimation&&(Ti=e.skipAnimation),e.createStringInterpolator&&(_i=e.createStringInterpolator),e.requestAnimationFrame&&ai.use(e.requestAnimationFrame),e.batchedUpdates&&(ai.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ri=e.willAdvance),e.frameLoop&&(ai.frameLoop=e.frameLoop)},Ii=new Set,Hi=[],zi=[],Ni=0,Li={get idle(){return!Ii.size&&!Hi.length},start(e){Ni>e.priority?(Ii.add(e),ai.onStart(Wi)):(Vi(e),ai(qi))},advance:qi,sort(e){if(Ni)ai.onFrame((()=>Li.sort(e)));else{const t=Hi.indexOf(e);~t&&(Hi.splice(t,1),Yi(e))}},clear(){Hi=[],Ii.clear()}};function Wi(){Ii.forEach(Vi),Ii.clear(),ai(qi)}function Vi(e){Hi.includes(e)||Yi(e)}function Yi(e){Hi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Hi,(t=>t.priority>e.priority)),0,e)}function qi(e){const t=zi;for(let n=0;n<Hi.length;n++){const r=Hi[n];Ni=r.priority,r.idle||(Ri(r),r.advance(e),r.idle||t.push(r))}return Ni=0,(zi=Hi).length=0,(Hi=t).length>0}var Ui="[-+]?\\d*\\.?\\d+",Qi=Ui+"%";function Zi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Gi=new RegExp("rgb"+Zi(Ui,Ui,Ui)),Xi=new RegExp("rgba"+Zi(Ui,Ui,Ui,Ui)),Ji=new RegExp("hsl"+Zi(Ui,Qi,Qi)),Ki=new RegExp("hsla"+Zi(Ui,Qi,Qi,Ui)),eo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,to=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,no=/^#([0-9a-fA-F]{6})$/,ro=/^#([0-9a-fA-F]{8})$/;function io(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function oo(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=io(i,r,e+1/3),a=io(i,r,e),s=io(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ao(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function so(e){return(parseFloat(e)%360+360)%360/360}function lo(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function co(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function uo(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=no.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ai&&void 0!==Ai[e]?Ai[e]:(t=Gi.exec(e))?(ao(t[1])<<24|ao(t[2])<<16|ao(t[3])<<8|255)>>>0:(t=Xi.exec(e))?(ao(t[1])<<24|ao(t[2])<<16|ao(t[3])<<8|lo(t[4]))>>>0:(t=eo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ro.exec(e))?parseInt(t[1],16)>>>0:(t=to.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Ji.exec(e))?(255|oo(so(t[1]),co(t[2]),co(t[3])))>>>0:(t=Ki.exec(e))?(oo(so(t[1]),co(t[2]),co(t[3]))|lo(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var fo=(e,t,n)=>{if(Fi.fun(e))return e;if(Fi.arr(e))return fo({range:e,output:t,extrapolate:n});if(Fi.str(e.output[0]))return _i(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var ho=1.70158,po=1.525*ho,mo=ho+1,go=2*Math.PI/3,yo=2*Math.PI/4.5,vo=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},bo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>mo*e*e*e-ho*e*e,easeOutBack:e=>1+mo*Math.pow(e-1,3)+ho*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-po)/2:(Math.pow(2*e-2,2)*((po+1)*(2*e-2)+po)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*go),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*go)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*yo)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*yo)/2+1,easeInBounce:e=>1-vo(1-e),easeOutBounce:vo,easeInOutBounce:e=>e<.5?(1-vo(1-2*e))/2:(1+vo(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}},wo=Symbol.for("FluidValue.get"),xo=Symbol.for("FluidValue.observers"),$o=e=>Boolean(e&&e[wo]),So=e=>e&&e[wo]?e[wo]():e,Fo=e=>e[xo]||null;function Oo(e,t){const n=e[xo];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var ko=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Do(this,e)}},Do=(e,t)=>Co(e,wo,t);function Bo(e,t){if(e[wo]){let n=e[xo];n||Co(e,xo,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Eo(e,t){const n=e[xo];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[xo]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var _o,Co=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),jo=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Mo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ao=new RegExp(`(${jo.source})(%|[a-z]+)`,"i"),To=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ro=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Po=e=>{const[t,n]=Io(e);if(!t||Mi())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Ro.test(n)?Po(n):n||e},Io=e=>{const t=Ro.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Ho=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,zo=e=>{_o||(_o=Ai?new RegExp(`(${Object.keys(Ai).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>So(e).replace(Ro,Po).replace(Mo,uo).replace(_o,uo))),n=t.map((e=>e.match(jo).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>fo({...e,output:t})));return e=>{const n=!Ao.test(t[0])&&t.find((e=>Ao.test(e)))?.replace(jo,"");let i=0;return t[0].replace(jo,(()=>`${r[i++](e)}${n||""}`)).replace(To,Ho)}},No="react-spring: ",Lo=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${No}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Wo=Lo(console.warn);var Vo=Lo(console.warn);function Yo(e){return Fi.str(e)&&("#"==e[0]||/\d/.test(e)||!Mi()&&Ro.test(e)||e in(Ai||{}))}var qo=Mi()?y:v,Uo=()=>{const e=d(!1);return qo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Qo(){const e=f()[1],t=Uo();return()=>{t.current&&e(Math.random())}}var Zo=e=>y(e,Go),Go=[];function Xo(e){const t=d();return y((()=>{t.current=e})),t.current}var Jo=Symbol.for("Animated:node"),Ko=e=>e&&e[Jo],ea=(e,t)=>{return n=e,r=Jo,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ta=e=>e&&e[Jo]&&e[Jo].getPayload(),na=class{constructor(){ea(this,this)}getPayload(){return this.payload||[]}},ra=class extends na{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Fi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ra(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Fi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Fi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ia=class extends ra{constructor(e){super(0),this._string=null,this._toString=fo({output:[e,e]})}static create(e){return new ia(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Fi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=fo({output:[this.getValue(),e]})),this._value=0,super.reset()}},oa={dependencies:null},aa=class extends na{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Di(this.source,((n,r)=>{var i;(i=n)&&i[Jo]===i?t[r]=n.getValue(e):$o(n)?t[r]=So(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ki(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Di(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){oa.dependencies&&$o(e)&&oa.dependencies.add(e);const t=ta(e);t&&ki(t,(e=>this.add(e)))}},sa=class extends aa{constructor(e){super(e)}static create(e){return new sa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(la)),!0)}};function la(e){return(Yo(e)?ia:ra).create(e)}function ca(e){const t=Ko(e);return t?t.constructor:Fi.arr(e)?sa:Yo(e)?ia:ra}var ua=(e,t)=>{const n=!Fi.fun(e)||e.prototype&&e.prototype.isReactComponent;return b(((r,i)=>{const o=d(null),a=n&&w((e=>{o.current=function(e,t){e&&(Fi.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[s,l]=function(e,t){const n=new Set;oa.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new aa(e),oa.dependencies=null,[e,n]}(r,t),u=Qo(),f=()=>{const e=o.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&u()},h=new da(f,l),p=d();qo((()=>(p.current=h,ki(l,(e=>Bo(e,h))),()=>{p.current&&(ki(p.current.deps,(e=>Eo(e,p.current))),ai.cancel(p.current.update))}))),y(f,[]),Zo((()=>()=>{const e=p.current;ki(e.deps,(t=>Eo(t,e)))}));const m=t.getComponentProps(s.getValue());return c.createElement(e,{...m,ref:a})}))},da=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ai.write(this.update)}};var fa=Symbol.for("AnimatedComponent"),ha=e=>Fi.str(e)?e:e&&Fi.str(e.displayName)?e.displayName:Fi.fun(e)&&e.name||null;function pa(e,...t){return Fi.fun(e)?e(...t):e}var ma=(e,t)=>!0===e||!!(t&&e&&(Fi.fun(e)?e(t):Bi(e).includes(t))),ga=(e,t)=>Fi.obj(e)?t&&e[t]:e,ya=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,va=e=>e,ba=(e,t=va)=>{let n=wa;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Fi.und(n)||(r[i]=n)}return r},wa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],xa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function $a(e){const t=function(e){const t={};let n=0;if(Di(e,((e,r)=>{xa[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Di(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Sa(e){return e=So(e),Fi.arr(e)?e.map(Sa):Yo(e)?ii.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Fa(e){return Fi.fun(e)||Fi.arr(e)&&Fi.obj(e[0])}var Oa={tension:170,friction:26,mass:1,damping:1,easing:bo.linear,clamp:!1},ka=class{constructor(){this.velocity=0,Object.assign(this,Oa)}};function Da(e,t){if(Fi.und(t.decay)){const n=!Fi.und(t.tension)||!Fi.und(t.friction);!n&&Fi.und(t.frequency)&&Fi.und(t.damping)&&Fi.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Ba=[],Ea=class{constructor(){this.changed=!1,this.values=Ba,this.toValues=null,this.fromValues=Ba,this.config=new ka,this.immediate=!1}};function _a(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=ma(n.cancel??r?.cancel,t);if(u)h();else{Fi.und(n.pause)||(i.paused=ma(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||ma(e,t)),l=pa(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-ai.now()}function f(){l>0&&!ii.skipAnimation?(i.delayed=!0,c=ai.setTimeout(h,l),i.pauseQueue.add(d),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Ca=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Aa(e.get()):t.every((e=>e.noop))?ja(e.get()):Ma(e.get(),t.every((e=>e.finished))),ja=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ma=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Aa=e=>({value:e,cancelled:!0,finished:!1});function Ta(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ba(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const f=new Promise(((e,t)=>(u=e,d=t))),h=e=>{const t=i<=(n.cancelId||0)&&Aa(r)||i!==n.asyncId&&Ma(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Pa,a=new Ia;return(async()=>{if(ii.skipAnimation)throw Ra(n),a.result=Ma(r,!1),d(a),a;h(o);const s=Fi.obj(e)?{...e}:{...t,to:e};s.parentId=i,Di(c,((e,t)=>{Fi.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return h(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(ii.skipAnimation)return Ra(n),Ma(r,!1);try{let t;t=Fi.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),f]),m=Ma(r.get(),!0,!1)}catch(e){if(e instanceof Pa)m=e.result;else{if(!(e instanceof Ia))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Fi.fun(a)&&ai.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function Ra(e,t){Ei(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Pa=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ia=class extends Error{constructor(){super("SkipAnimationSignal")}},Ha=e=>e instanceof Na,za=1,Na=class extends ko{constructor(){super(...arguments),this.id=za++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ko(this);return e&&e.getValue()}to(...e){return ii.to(this,e)}interpolate(...e){return Wo(`${No}The "interpolate" function is deprecated in v9 (use "to" instead)`),ii.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Oo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Li.sort(this),Oo(this,{type:"priority",parent:this,priority:e})}},La=Symbol.for("SpringPhase"),Wa=e=>(1&e[La])>0,Va=e=>(2&e[La])>0,Ya=e=>(4&e[La])>0,qa=(e,t)=>t?e[La]|=3:e[La]&=-3,Ua=(e,t)=>t?e[La]|=4:e[La]&=-5,Qa=class extends Na{constructor(e,t){if(super(),this.animation=new Ea,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Fi.und(e)||!Fi.und(t)){const n=Fi.obj(e)?{...e}:{...t,from:e};Fi.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Va(this)||this._state.asyncTo)||Ya(this)}get goal(){return So(this.animation.to)}get velocity(){const e=Ko(this);return e instanceof ra?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Wa(this)}get isAnimating(){return Va(this)}get isPaused(){return Ya(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=ta(r.to);!a&&$o(r.to)&&(i=Bi(So(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ia?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Fi.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Fi.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=f,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,r=o.clamp?0:o.bounce,l=!Fi.und(r),h=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=f,!u));++e){l&&(m=d==c||d>c==h,m&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*g,d+=a*g}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=Ko(this),l=s.getValue();if(t){const e=So(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ai.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Va(this)){const{to:e,config:t}=this.animation;ai.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Fi.und(e)?(n=this.queue||[],this.queue=[]):n=[Fi.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ca(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ra(this._state,e&&this._lastCallId),ai.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Fi.obj(n)?n[t]:n,(null==n||Fa(n))&&(n=void 0),r=Fi.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Wa(this)||(e.reverse&&([n,r]=[r,n]),r=So(r),Fi.und(r)?Ko(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ba(e,((e,t)=>/^on/.test(t)?ga(e,n):e))),ts(this,e,"onProps"),ns(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return _a(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Ya(this)||(Ua(this,!0),ji(o.pauseQueue),ns(this,"onPause",Ma(this,Za(this,this.animation.to)),this))},resume:()=>{Ya(this)&&(Ua(this,!1),Va(this)&&this._resume(),ji(o.resumeQueue),ns(this,"onResume",Ma(this,Za(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Ga(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Aa(this));const r=!Fi.und(e.to),i=!Fi.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Aa(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Fi.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const f=!Oi(d,c);f&&(s.from=d),d=So(d);const h=!Oi(u,l);h&&this._focus(u);const p=Fa(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Da(n={...n},t),t={...n,...t}),Da(e,t),Object.assign(e,t);for(const t in Oa)null==e[t]&&(e[t]=Oa[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;Fi.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(m,pa(t.config,o),t.config!==a.config?pa(a.config,o):void 0);let v=Ko(this);if(!v||Fi.und(u))return n(Ma(this,!0));const b=Fi.und(t.reset)?i&&!t.default:!Fi.und(d)&&ma(t.reset,o),w=b?d:this.get(),x=Sa(u),$=Fi.num(x)||Fi.arr(x)||Yo(x),S=!p&&(!$||ma(a.immediate||t.immediate,o));if(h){const e=ca(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(x)}}const F=v.constructor;let O=$o(u),k=!1;if(!O){const e=b||!Wa(this)&&f;(h||e)&&(k=Oi(Sa(w),x),O=!k),(Oi(s.immediate,S)||S)&&Oi(m.decay,g)&&Oi(m.velocity,y)||(O=!0)}if(k&&Va(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||$o(l))&&(s.values=v.getPayload(),s.toValues=$o(u)?null:F==ia?[1]:Bi(x)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),O)){const{onRest:e}=s;ki(es,(e=>ts(this,t,e)));const r=Ma(this,Za(this,l));ji(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ai.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?pa(a.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),p?n(Ta(t.to,t,this._state,this)):O?this._start():Va(this)&&!h?this._pendingCalls.add(n):n(ja(w))}_focus(e){const t=this.animation;e!==t.to&&(Fo(this)&&this._detach(),t.to=e,Fo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;$o(t)&&(Bo(t,this),Ha(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;$o(e)&&Eo(e,this)}_set(e,t=!0){const n=So(e);if(!Fi.und(n)){const e=Ko(this);if(!e||!Oi(n,e.getValue())){const r=ca(n);e&&e.constructor==r?e.setValue(n):ea(this,r.create(n)),e&&ai.batchedUpdates((()=>{this._onChange(n,t)}))}}return Ko(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ns(this,"onStart",Ma(this,Za(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),pa(this.animation.onChange,e,this)),pa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ko(this).reset(So(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Va(this)||(qa(this,!0),Ya(this)||this._resume())}_resume(){ii.skipAnimation?this.finish():Li.start(this)}_stop(e,t){if(Va(this)){qa(this,!1);const n=this.animation;ki(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Oo(this,{type:"idle",parent:this});const r=t?Aa(this.get()):Ma(this.get(),Za(this,e??n.to));ji(this._pendingCalls,r),n.changed&&(n.changed=!1,ns(this,"onRest",r,this))}}};function Za(e,t){const n=Sa(t);return Oi(Sa(e.get()),n)}function Ga(e,t=e.loop,n=e.to){const r=pa(t);if(r){const i=!0!==r&&$a(r),o=(i||e).reverse,a=!i||i.reset;return Xa({...e,loop:t,default:!1,pause:void 0,to:!o||Fa(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function Xa(e){const{to:t,from:n}=e=$a(e),r=new Set;return Fi.obj(t)&&Ka(t,r),Fi.obj(n)&&Ka(n,r),e.keys=r.size?Array.from(r):null,e}function Ja(e){const t=Xa(e);return Fi.und(t.default)&&(t.default=ba(t)),t}function Ka(e,t){Di(e,((e,n)=>null!=e&&t.add(n)))}var es=["onStart","onRest","onChange","onPause","onResume"];function ts(e,t,n){e.animation[n]=t[n]!==ya(t,n)?ga(t[n],e.key):void 0}function ns(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var rs=["onStart","onChange","onRest"],is=1,os=class{constructor(e,t){this.id=is++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Fi.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Xa(e)),this}start(e){let{queue:t}=this;return e?t=Bi(e).map(Xa):this.queue=[],this._flush?this._flush(this,t):(fs(this,t),as(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;ki(Bi(t),(t=>n[t].stop(!!e)))}else Ra(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Fi.und(e))this.start({pause:!0});else{const t=this.springs;ki(Bi(e),(e=>t[e].pause()))}return this}resume(e){if(Fi.und(e))this.start({pause:!1});else{const t=this.springs;ki(Bi(e),(e=>t[e].resume()))}return this}each(e){Di(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ei(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ei(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ei(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ai.onFrame(this._onFrame)}};function as(e,t){return Promise.all(t.map((t=>ss(e,t)))).then((t=>Ca(e,t)))}async function ss(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Fi.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Fi.arr(i)||Fi.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):ki(rs,(n=>{const r=t[n];if(Fi.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ji(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const f=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),h=!0===t.cancel||!0===ya(t,"cancel");(u||h&&d.asyncId)&&f.push(_a(++e._lastAsyncId,{props:t,state:d,actions:{pause:Si,resume:Si,start(t,n){h?(Ra(d,e._lastAsyncId),n(Aa(e))):(t.onRest=s,n(Ta(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Ca(e,await Promise.all(f));if(a&&p.finished&&(!n||!p.noop)){const n=Ga(t,a,i);if(n)return fs(e,[n]),ss(e,n,!0)}return l&&ai.batchedUpdates((()=>l(p,e,e.item))),p}function ls(e,t){const n={...e.springs};return t&&ki(Bi(t),(e=>{Fi.und(e.keys)&&(e=Xa(e)),Fi.obj(e.to)||(e={...e,to:void 0}),ds(n,e,(e=>us(e)))})),cs(e,n),n}function cs(e,t){Di(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Bo(t,e))}))}function us(e,t){const n=new Qa;return n.key=e,t&&Bo(n,t),n}function ds(e,t,n){t.keys&&ki(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function fs(e,t){ki(t,(t=>{ds(e.springs,t,(t=>us(t,e)))}))}var hs,ps,ms=({children:e,...t})=>{const n=x(gs),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=function(e,t){const[n]=f((()=>({inputs:t,result:e()}))),r=d(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return y((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:r,immediate:i})),[r,i]);const{Provider:o}=gs;return c.createElement(o,{value:t},e)},gs=(hs=ms,ps={},Object.assign(hs,c.createContext(ps)),hs.Provider._context=hs,hs.Consumer._context=hs,hs);ms.Provider=gs.Provider,ms.Consumer=gs.Consumer;var ys=()=>{const e=[],t=function(t){Vo(`${No}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return ki(e,((e,i)=>{if(Fi.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return ki(e,(e=>e.pause(...arguments))),this},t.resume=function(){return ki(e,(e=>e.resume(...arguments))),this},t.set=function(t){ki(e,((e,n)=>{const r=Fi.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return ki(e,((e,r)=>{if(Fi.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return ki(e,(e=>e.stop(...arguments))),this},t.update=function(t){return ki(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Fi.fun(e)?e(n,t):e};return t._getProps=n,t};function vs(e,t){const n=Fi.fun(e),[[r],i]=function(e,t,n){const r=Fi.fun(t)&&t;r&&!n&&(n=[]);const i=$((()=>r||3==arguments.length?ys():void 0),[]),o=d(0),a=Qo(),s=$((()=>({ctrls:[],queue:[],flush(e,t){const n=ls(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?as(e,t):new Promise((r=>{cs(e,n),s.queue.push((()=>{r(as(e,t))})),a()}))}})),[]),l=d([...s.ctrls]),c=[],u=Xo(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=l.current[i]||(l.current[i]=new os(null,s.flush)),n=r?r(i,e):t[i];n&&(c[i]=Ja(n))}}$((()=>{ki(l.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,f(u,e)}),[e]),$((()=>{f(0,Math.min(u,e))}),n);const h=l.current.map(((e,t)=>ls(e,c[t]))),p=x(ms),m=Xo(p),g=p!==m&&function(e){for(const t in e)return!0;return!1}(p);qo((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],ki(e,(e=>e()))),ki(l.current,((e,t)=>{i?.add(e),g&&e.start({default:p});const n=c[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Zo((()=>()=>{ki(s.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var bs=class extends Na{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=fo(...t);const n=this._get(),r=ca(n);ea(this,r.create(n))}advance(e){const t=this._get();Oi(t,this.get())||(Ko(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&xs(this._active)&&$s(this)}_get(){const e=Fi.arr(this.source)?this.source.map(So):Bi(So(this.source));return this.calc(...e)}_start(){this.idle&&!xs(this._active)&&(this.idle=!1,ki(ta(this),(e=>{e.done=!1})),ii.skipAnimation?(ai.batchedUpdates((()=>this.advance())),$s(this)):Li.start(this))}_attach(){let e=1;ki(Bi(this.source),(t=>{$o(t)&&Bo(t,this),Ha(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){ki(Bi(this.source),(e=>{$o(e)&&Eo(e,this)})),this._active.clear(),$s(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Bi(this.source).reduce(((e,t)=>Math.max(e,(Ha(t)?t.priority:0)+1)),0))}};function ws(e){return!1!==e.idle}function xs(e){return!e.size||Array.from(e).every(ws)}function $s(e){e.idle||(e.idle=!0,ki(ta(e),(e=>{e.done=!0})),Oo(e,{type:"idle",parent:e}))}ii.assign({createStringInterpolator:zo,to:(e,t)=>new bs(e,t)});var Ss=/^--/;function Fs(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ss.test(e)||ks.hasOwnProperty(e)&&ks[e]?(""+t).trim():t+"px"}var Os={};var ks={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ds=["Webkit","Ms","Moz","O"];ks=Object.keys(ks).reduce(((e,t)=>(Ds.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ks);var Bs=/^(matrix|translate|scale|rotate|skew)/,Es=/^(translate)/,_s=/^(rotate|skew)/,Cs=(e,t)=>Fi.num(e)&&0!==e?e+t:e,js=(e,t)=>Fi.arr(e)?e.every((e=>js(e,t))):Fi.num(e)?e===t:parseFloat(e)===t,Ms=class extends aa{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Cs(e,"px"))).join(",")})`,js(e,0)]))),Di(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Bs.test(t)){if(delete r[t],Fi.und(e))return;const n=Es.test(t)?"px":_s.test(t)?"deg":"";i.push(Bi(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Cs(i,n)})`,js(i,0)]:e=>[`${t}(${e.map((e=>Cs(e,n))).join(",")})`,js(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new As(i,o)),super(r)}},As=class extends ko{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ki(this.inputs,((n,r)=>{const i=So(n[0]),[o,a]=this.transforms[r](Fi.arr(i)?i:n.map(So));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&ki(this.inputs,(e=>ki(e,(e=>$o(e)&&Bo(e,this)))))}observerRemoved(e){0==e&&ki(this.inputs,(e=>ki(e,(e=>$o(e)&&Eo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Oo(this,e)}};ii.assign({batchedUpdates:D,createStringInterpolator:zo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ts=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new aa(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ha(e)||"Anonymous";return(e=Fi.str(e)?o[e]||(o[e]=ua(e,i)):e[fa]||(e[fa]=ua(e,i))).displayName=`Animated(${t})`,e};return Di(e,((t,n)=>{Fi.arr(e)&&(n=ha(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Os[t]||(Os[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Fs(t,r[t]);Ss.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Ms(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Rs=Ts.animated;function Ps(e){return zs(e)?(e.nodeName||"").toLowerCase():"#document"}function Is(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Hs(e){var t;return null==(t=(zs(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function zs(e){return e instanceof Node||e instanceof Is(e).Node}function Ns(e){return e instanceof Element||e instanceof Is(e).Element}function Ls(e){return e instanceof HTMLElement||e instanceof Is(e).HTMLElement}function Ws(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Is(e).ShadowRoot)}function Vs(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Zs(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Ys(e){return["table","td","th"].includes(Ps(e))}function qs(e){const t=Us(),n=Zs(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Us(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Qs(e){return["html","body","#document"].includes(Ps(e))}function Zs(e){return Is(e).getComputedStyle(e)}function Gs(e){return Ns(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Xs(e){if("html"===Ps(e))return e;const t=e.assignedSlot||e.parentNode||Ws(e)&&e.host||Hs(e);return Ws(t)?t.host:t}function Js(e){const t=Xs(e);return Qs(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ls(t)&&Vs(t)?t:Js(t)}function Ks(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const i=Js(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),a=Is(i);return o?t.concat(a,a.visualViewport||[],Vs(i)?i:[],a.frameElement&&n?Ks(a.frameElement):[]):t.concat(i,Ks(i,[],n))}const el=Math.min,tl=Math.max,nl=Math.round,rl=Math.floor,il=e=>({x:e,y:e}),ol={left:"right",right:"left",bottom:"top",top:"bottom"},al={start:"end",end:"start"};function sl(e,t,n){return tl(e,el(t,n))}function ll(e,t){return"function"==typeof e?e(t):e}function cl(e){return e.split("-")[0]}function ul(e){return e.split("-")[1]}function dl(e){return"x"===e?"y":"x"}function fl(e){return"y"===e?"height":"width"}function hl(e){return["top","bottom"].includes(cl(e))?"y":"x"}function pl(e){return dl(hl(e))}function ml(e){return e.replace(/start|end/g,(e=>al[e]))}function gl(e){return e.replace(/left|right|bottom|top/g,(e=>ol[e]))}function yl(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function vl(e,t,n){let{reference:r,floating:i}=e;const o=hl(t),a=pl(t),s=fl(a),l=cl(t),c="y"===o,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2;let h;switch(l){case"top":h={x:u,y:r.y-i.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-i.width,y:d};break;default:h={x:r.x,y:r.y}}switch(ul(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function bl(e,t){var n;void 0===t&&(t={});const{x:r,y:i,platform:o,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=ll(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),m=s[f?"floating"===d?"reference":"floating":d],g=yl(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(m)))||n?m:m.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==o.getOffsetParent?void 0:o.getOffsetParent(s.floating)),b=await(null==o.isElement?void 0:o.isElement(v))&&await(null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},w=yl(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-w.top+p.top)/b.y,bottom:(w.bottom-g.bottom+p.bottom)/b.y,left:(g.left-w.left+p.left)/b.x,right:(w.right-g.right+p.right)/b.x}}function wl(e){const t=Zs(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Ls(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,s=nl(n)!==o||nl(r)!==a;return s&&(n=o,r=a),{width:n,height:r,$:s}}function xl(e){return Ns(e)?e:e.contextElement}function $l(e){const t=xl(e);if(!Ls(t))return il(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=wl(t);let a=(o?nl(n.width):n.width)/r,s=(o?nl(n.height):n.height)/i;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const Sl=il(0);function Fl(e){const t=Is(e);return Us()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Sl}function Ol(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const i=e.getBoundingClientRect(),o=xl(e);let a=il(1);t&&(r?Ns(r)&&(a=$l(r)):a=$l(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Is(e))&&t}(o,n,r)?Fl(o):il(0);let l=(i.left+s.x)/a.x,c=(i.top+s.y)/a.y,u=i.width/a.x,d=i.height/a.y;if(o){const e=Is(o),t=r&&Ns(r)?Is(r):r;let n=e,i=n.frameElement;for(;i&&r&&t!==n;){const e=$l(i),t=i.getBoundingClientRect(),r=Zs(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=o,c+=a,n=Is(i),i=n.frameElement}}return yl({width:u,height:d,x:l,y:c})}const kl=[":popover-open",":modal"];function Dl(e){return kl.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Bl(e){return Ol(Hs(e)).left+Gs(e).scrollLeft}function El(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Is(e),r=Hs(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,s=0,l=0;if(i){o=i.width,a=i.height;const e=Us();(!e||e&&"fixed"===t)&&(s=i.offsetLeft,l=i.offsetTop)}return{width:o,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Hs(e),n=Gs(e),r=e.ownerDocument.body,i=tl(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=tl(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Bl(e);const s=-n.scrollTop;return"rtl"===Zs(r).direction&&(a+=tl(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:s}}(Hs(e));else if(Ns(t))r=function(e,t){const n=Ol(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Ls(e)?$l(e):il(1);return{width:e.clientWidth*o.x,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{const n=Fl(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return yl(r)}function _l(e,t){const n=Xs(e);return!(n===t||!Ns(n)||Qs(n))&&("fixed"===Zs(n).position||_l(n,t))}function Cl(e,t,n){const r=Ls(t),i=Hs(t),o="fixed"===n,a=Ol(e,!0,o,t);let s={scrollLeft:0,scrollTop:0};const l=il(0);if(r||!r&&!o)if(("body"!==Ps(t)||Vs(i))&&(s=Gs(t)),r){const e=Ol(t,!0,o,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else i&&(l.x=Bl(i));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function jl(e){return"static"===Zs(e).position}function Ml(e,t){return Ls(e)&&"fixed"!==Zs(e).position?t?t(e):e.offsetParent:null}function Al(e,t){const n=Is(e);if(Dl(e))return n;if(!Ls(e)){let t=Xs(e);for(;t&&!Qs(t);){if(Ns(t)&&!jl(t))return t;t=Xs(t)}return n}let r=Ml(e,t);for(;r&&Ys(r)&&jl(r);)r=Ml(r,t);return r&&Qs(r)&&jl(r)&&!qs(r)?n:r||function(e){let t=Xs(e);for(;Ls(t)&&!Qs(t);){if(qs(t))return t;t=Xs(t)}return null}(e)||n}const Tl={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o="fixed"===i,a=Hs(r),s=!!t&&Dl(t.floating);if(r===a||s&&o)return n;let l={scrollLeft:0,scrollTop:0},c=il(1);const u=il(0),d=Ls(r);if((d||!d&&!o)&&(("body"!==Ps(r)||Vs(a))&&(l=Gs(r)),Ls(r))){const e=Ol(r);c=$l(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:Hs,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[..."clippingAncestors"===n?Dl(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Ks(e,[],!1).filter((e=>Ns(e)&&"body"!==Ps(e))),i=null;const o="fixed"===Zs(e).position;let a=o?Xs(e):e;for(;Ns(a)&&!Qs(a);){const t=Zs(a),n=qs(a);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Vs(a)&&!n&&_l(e,a))?r=r.filter((e=>e!==a)):i=t,a=Xs(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=o[0],s=o.reduce(((e,n)=>{const r=El(t,n,i);return e.top=tl(r.top,e.top),e.right=el(r.right,e.right),e.bottom=el(r.bottom,e.bottom),e.left=tl(r.left,e.left),e}),El(t,a,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Al,getElementRects:async function(e){const t=this.getOffsetParent||Al,n=this.getDimensions,r=await n(e.floating);return{reference:Cl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=wl(e);return{width:t,height:n}},getScale:$l,isElement:Ns,isRTL:function(e){return"rtl"===Zs(e).direction}};function Rl(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=xl(e),u=i||o?[...c?Ks(c):[],...Ks(t)]:[];u.forEach((e=>{i&&e.addEventListener("scroll",n,{passive:!0}),o&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const i=Hs(e);function o(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),o();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const h={rootMargin:-rl(u)+"px "+-rl(i.clientWidth-(c+d))+"px "+-rl(i.clientHeight-(u+f))+"px "+-rl(c)+"px",threshold:tl(0,el(1,l))||1};let p=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(m,{...h,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(m,h)}r.observe(e)}(!0),o}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!l&&p.observe(c),p.observe(t));let m=l?Ol(e):null;return l&&function t(){const r=Ol(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{i&&e.removeEventListener("scroll",n),o&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const Pl=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:i}=e,o=await(null==r.isRTL?void 0:r.isRTL(i.floating)),a=cl(n),s=ul(n),l="y"===hl(n),c=["left","top"].includes(a)?-1:1,u=o&&l?-1:1,d=ll(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof p&&(h="end"===s?-1*p:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:a}}}}},Il=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=ll(e,t),c={x:n,y:r},u=await bl(t,l),d=hl(cl(i)),f=dl(d);let h=c[f],p=c[d];if(o){const e="y"===f?"bottom":"right";h=sl(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=sl(p+u["y"===d?"top":"left"],p,p-u[e])}const m=s.fn({...t,[f]:h,[d]:p});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Hl=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=ll(e,t);if(null!=(n=o.arrow)&&n.alignmentOffset)return{};const y=cl(i),v=cl(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=f||(v||!m?[gl(s)]:function(e){const t=gl(e);return[ml(e),t,ml(t)]}(s));f||"none"===p||w.push(...function(e,t,n,r){const i=ul(e);let o=function(e,t,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?o:a;default:return[]}}(cl(e),"start"===n,r);return i&&(o=o.map((e=>e+"-"+i)),t&&(o=o.concat(o.map(ml)))),o}(s,m,p,b));const x=[s,...w],$=await bl(t,g),S=[];let F=(null==(r=o.flip)?void 0:r.overflows)||[];if(u&&S.push($[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=ul(e),i=pl(e),o=fl(i);let a="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=gl(a)),[a,gl(a)]}(i,a,b);S.push($[e[0]],$[e[1]])}if(F=[...F,{placement:i,overflows:S}],!S.every((e=>e<=0))){var O,k;const e=((null==(O=o.flip)?void 0:O.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(k=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:k.placement;if(!n)switch(h){case"bestFit":{var D;const e=null==(D=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(n=e);break}case"initialPlacement":n=s}if(i!==n)return{reset:{placement:n}}}return{}}}},zl=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=ll(e,t),u={x:n,y:r},d=hl(i),f=dl(d);let h=u[f],p=u[d];const m=ll(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=o.reference[f]-o.floating[e]+g.mainAxis,n=o.reference[f]+o.reference[e]-g.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(cl(i)),n=o.reference[d]-o.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=o.reference[d]+o.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},Nl=(e,t,n)=>{const r=new Map,i={platform:Tl,...n},o={...i.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,s=o.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=vl(c,r,l),f=r,h={},p=0;for(let n=0;n<s.length;n++){const{name:o,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,h={...h,[o]:{...h[o],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):b.rects),({x:u,y:d}=vl(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:h}})(e,t,{...i,platform:o})};var Ll="undefined"!=typeof document?v:y;function Wl(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Wl(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){const n=i[r];if(("_owner"!==n||!e.$$typeof)&&!Wl(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Vl(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Yl(e,t){const n=Vl(e);return Math.round(t*n)/n}function ql(e){const t=c.useRef(e);return Ll((()=>{t.current=e})),t}const Ul=(e,t)=>({...Il(e),options:[e,t]}),Ql=(e,t)=>({...zl(e),options:[e,t]}),Zl=(e,t)=>({...Hl(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var Gl=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Xl="undefined"==typeof Element,Jl=Xl?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Kl=!Xl&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},ec=function e(t,n){var r;void 0===n&&(n=!0);var i=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===i||"true"===i||n&&t&&e(t.parentNode)},tc=function e(t,n,r){for(var i=[],o=Array.from(t);o.length;){var a=o.shift();if(!ec(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?i.push.apply(i,l):i.push({scopeParent:a,candidates:l})}else{Jl.call(a,Gl)&&r.filter(a)&&(n||!t.includes(a))&&i.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!ec(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?i.push.apply(i,d):i.push({scopeParent:a,candidates:d})}else o.unshift.apply(o,a.children)}}return i},nc=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},rc=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!nc(e)?0:e.tabIndex},ic=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},oc=function(e){return"INPUT"===e.tagName},ac=function(e){return function(e){return oc(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Kl(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!i||i===e}(e)},sc=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},lc=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=Jl.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Jl.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return sc(e)}else{if("function"==typeof r){for(var o=e;e;){var a=e.parentElement,s=Kl(e);if(a&&!a.shadowRoot&&!0===r(a))return sc(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=o}if(function(e){var t,n,r,i,o=e&&Kl(e),a=null===(t=o)||void 0===t?void 0:t.host,s=!1;if(o&&o!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(i=e.ownerDocument)&&void 0!==i&&i.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=o=Kl(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},cc=function(e,t){return!(t.disabled||ec(t)||function(e){return oc(e)&&"hidden"===e.type}(t)||lc(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Jl.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},uc=function(e,t){return!(ac(t)||rc(t)<0||!cc(e,t))},dc=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},fc=function e(t){var n=[],r=[];return t.forEach((function(t,i){var o=!!t.scopeParent,a=o?t.scopeParent:t,s=function(e,t){var n=rc(e);return n<0&&t&&!nc(e)?0:n}(a,o),l=o?e(t.candidates):a;0===s?o?n.push.apply(n,l):n.push(a):r.push({documentOrder:i,tabIndex:s,item:t,isScope:o,content:l})})),r.sort(ic).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},hc=function(e,t){var n;return n=(t=t||{}).getShadowRoot?tc([e],t.includeContainer,{filter:uc.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:dc}):function(e,t,n){if(ec(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Gl));return t&&Jl.call(e,Gl)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,uc.bind(null,t)),fc(n)};const pc={...c},mc=pc.useInsertionEffect||(e=>e());var gc="undefined"!=typeof document?v:y;function yc(){return yc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yc.apply(this,arguments)}let vc=!1,bc=0;const wc=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+bc++;const xc=pc.useId||function(){const[e,t]=c.useState((()=>vc?wc():void 0));return gc((()=>{null==e&&t(wc())}),[]),c.useEffect((()=>{vc=!0}),[]),e};let $c;"production"!==process.env.NODE_ENV&&($c=new Set);const Sc=c.createContext(null),Fc=c.createContext(null),Oc=()=>{var e;return(null==(e=c.useContext(Sc))?void 0:e.id)||null};function kc(e){return"data-floating-ui-"+e}const Dc=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Bc(e,t){const n=hc(e,Dc());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(i=e)?void 0:i.ownerDocument)||document));var i;return n.slice(r+1)[0]}function Ec(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Ws(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function _c(e){hc(e,Dc()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Cc(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const jc={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Mc(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Ac=c.forwardRef((function(e,t){const[n,r]=c.useState();gc((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",Mc),()=>{document.removeEventListener("keydown",Mc)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[kc("focus-guard")]:"",style:jc};return c.createElement("span",yc({},e,i))})),Tc=c.createContext(null),Rc=kc("portal");function Pc(e){const{children:t,id:n,root:r=null,preserveTabOrder:i=!0}=e,o=function(e){void 0===e&&(e={});const{id:t,root:n}=e,r=xc(),i=Ic(),[o,a]=c.useState(null),s=c.useRef(null);return gc((()=>()=>{null==o||o.remove(),queueMicrotask((()=>{s.current=null}))}),[o]),gc((()=>{if(!r)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=r,n.setAttribute(Rc,""),e.appendChild(n),s.current=n,a(n)}),[t,r]),gc((()=>{if(!r)return;if(s.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Ns(e)&&(e=e.current),e=e||document.body;let o=null;t&&(o=document.createElement("div"),o.id=t,e.appendChild(o));const l=document.createElement("div");l.id=r,l.setAttribute(Rc,""),e=o||e,e.appendChild(l),s.current=l,a(l)}),[t,n,r,i]),o}({id:n,root:r}),[a,s]=c.useState(null),l=c.useRef(null),u=c.useRef(null),d=c.useRef(null),f=c.useRef(null),h=!!a&&!a.modal&&a.open&&i&&!(!r&&!o);return c.useEffect((()=>{if(o&&i&&(null==a||!a.modal))return o.addEventListener("focusin",e,!0),o.addEventListener("focusout",e,!0),()=>{o.removeEventListener("focusin",e,!0),o.removeEventListener("focusout",e,!0)};function e(e){if(o&&Ec(e)){("focusin"===e.type?Cc:_c)(o)}}}),[o,i,null==a?void 0:a.modal]),c.createElement(Tc.Provider,{value:c.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:l,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:o,setFocusManagerState:s})),[i,o])},h&&o&&c.createElement(Ac,{"data-type":"outside",ref:l,onFocus:e=>{if(Ec(e,o)){var t;null==(t=d.current)||t.focus()}else{const e=Bc(document.body,"prev")||(null==a?void 0:a.refs.domReference.current);null==e||e.focus()}}}),h&&o&&c.createElement("span",{"aria-owns":o.id,style:jc}),o&&B(t,o),h&&o&&c.createElement(Ac,{"data-type":"outside",ref:u,onFocus:e=>{if(Ec(e,o)){var t;null==(t=f.current)||t.focus()}else{const t=Bc(document.body,"next")||(null==a?void 0:a.refs.domReference.current);null==t||t.focus(),(null==a?void 0:a.closeOnFocusOut)&&(null==a||a.onOpenChange(!1,e.nativeEvent))}}}))}const Ic=()=>c.useContext(Tc);function Hc(e){const{open:t=!1,onOpenChange:n,elements:r}=e,i=xc(),o=c.useRef({}),[a]=c.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=Oc();if("production"!==process.env.NODE_ENV){const e=r.reference;e&&!Ns(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i="Floating UI: "+n.join(" ");var o;null!=(e=$c)&&e.has(i)||(null==(o=$c)||o.add(i),console.error(i))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[l,u]=c.useState(r.reference),d=function(e){const t=c.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return mc((()=>{t.current=e})),c.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,r)=>{o.current.openEvent=e?t:void 0,a.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),f=c.useMemo((()=>({setPositionReference:u})),[]),h=c.useMemo((()=>({reference:l||r.reference||null,floating:r.floating||null,domReference:r.reference})),[l,r.reference,r.floating]);return c.useMemo((()=>({dataRef:o,open:t,onOpenChange:d,elements:h,events:a,floatingId:i,refs:f})),[t,d,h,a,i,f])}function zc(e){void 0===e&&(e={});const{nodeId:t}=e,n=Hc({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,i=r.elements,[o,a]=c.useState(null),[s,l]=c.useState(null),u=(null==i?void 0:i.reference)||o,d=c.useRef(null),f=c.useContext(Fc);gc((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:a}={},transform:s=!0,whileElementsMounted:l,open:u}=e,[d,f]=c.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=c.useState(r);Wl(h,r)||p(r);const[m,g]=c.useState(null),[y,v]=c.useState(null),b=c.useCallback((e=>{e!==S.current&&(S.current=e,g(e))}),[]),w=c.useCallback((e=>{e!==O.current&&(O.current=e,v(e))}),[]),x=o||m,$=a||y,S=c.useRef(null),O=c.useRef(null),k=c.useRef(d),D=null!=l,B=ql(l),E=ql(i),_=c.useCallback((()=>{if(!S.current||!O.current)return;const e={placement:t,strategy:n,middleware:h};E.current&&(e.platform=E.current),Nl(S.current,O.current,e).then((e=>{const t={...e,isPositioned:!0};C.current&&!Wl(k.current,t)&&(k.current=t,F.flushSync((()=>{f(t)})))}))}),[h,t,n,E]);Ll((()=>{!1===u&&k.current.isPositioned&&(k.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const C=c.useRef(!1);Ll((()=>(C.current=!0,()=>{C.current=!1})),[]),Ll((()=>{if(x&&(S.current=x),$&&(O.current=$),x&&$){if(B.current)return B.current(x,$,_);_()}}),[x,$,_,B,D]);const j=c.useMemo((()=>({reference:S,floating:O,setReference:b,setFloating:w})),[b,w]),M=c.useMemo((()=>({reference:x,floating:$})),[x,$]),A=c.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Yl(M.floating,d.x),r=Yl(M.floating,d.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Vl(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,M.floating,d.x,d.y]);return c.useMemo((()=>({...d,update:_,refs:j,elements:M,floatingStyles:A})),[d,_,j,M,A])}({...e,elements:{...i,...s&&{reference:s}}}),p=c.useCallback((e=>{const t=Ns(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;l(t),h.refs.setReference(t)}),[h.refs]),m=c.useCallback((e=>{(Ns(e)||null===e)&&(d.current=e,a(e)),(Ns(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!Ns(e))&&h.refs.setReference(e)}),[h.refs]),g=c.useMemo((()=>({...h.refs,setReference:m,setPositionReference:p,domReference:d})),[h.refs,m,p]),y=c.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),v=c.useMemo((()=>({...h,...r,refs:g,elements:y,nodeId:t})),[h,g,y,t,r]);return gc((()=>{r.dataRef.current.floatingContext=v;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=v)})),c.useMemo((()=>({...h,context:v,refs:g,elements:y})),[h,g,y,v])}var Nc,Lc={exports:{}};Nc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o=this;if(i&&!n){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new o(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return m((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,i,o,c,w(u));var d=u(s,c,r,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,i,l,f,w(h));if(!h)return new p("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,f,r,i,l+"."+f,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case i:case a:case o:case f:return h;default:var g=h&&h.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var x=c,$=u,S=l,F=s,O=n,k=d,D=i,B=m,E=p,_=r,C=a,j=o,M=f,A=!1;function T(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=F,t.Element=O,t.ForwardRef=k,t.Fragment=D,t.Lazy=B,t.Memo=E,t.Portal=_,t.Profiler=C,t.StrictMode=j,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||w(e)===c},t.isConcurrentMode=T,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,i=e.onChange,a=r(e,["children","device","onChange"]),s=(0,o.default)(a,n,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=r(n(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=d();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Wc=Lc.exports=Nc(u),Vc={exports:{}};Vc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(i||o?1:h.getDate()),m=i||h.getFullYear(),g=0;i&&!o||(g=o>0?o-1:h.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Yc,qc,Uc=Y(Vc.exports),Qc={exports:{}},Zc=Y(Qc.exports=(Yc={year:0,month:1,day:2,hour:3,minute:4,second:5},qc={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=qc[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),qc[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Yc[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Gc={exports:{}};Gc.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[x])},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},F=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},O=v;O.l=S,O.i=$,O.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),h=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return h(r?y-w:y+(6-w),g);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=O.p(u),m=function(e){var t=F(h);return O.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(f={},f[o]=t,f[a]=n,f[i]=e,f)[p]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return O.s(o%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return O.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=this,g=O.p(f),y=F(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return O.m(m,y)};switch(g){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case o:p=b/t;break;case i:p=b/e;break;default:p=b}return h?p:O.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=k.prototype;return F.prototype=D,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,k,F),e.$i=!0),F},F.locale=S,F.isDayjs=$,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Xc=Y(Gc.exports),Jc={exports:{}};Jc.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Kc=Y(Jc.exports),eu={exports:{}};eu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var tu=Y(eu.exports),nu={exports:{}};nu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ru,iu=Y(nu.exports);Xc.extend(Kc),Xc.extend(tu),Xc.extend(iu),Xc.extend(Uc),Xc.extend(Zc),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Xc(t).startOf("week");return ou(n).map((e=>au(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return au(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Xc(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Xc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Xc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Xc(r):void 0,i?Xc(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(ru||(ru={}));const ou=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},au=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},su=[1,3,5,7,8,10,12],lu=[4,6,9,11];var cu,uu,du,fu;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":su.includes(o)?Math.min(i,31).toString():lu.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Xc(e,n);return Xc(t,n).diff(r,"minute")},e.toDayjs=e=>e?Xc(e):Xc(),e.addMinutesToTime=(e,t,n="HH:mm")=>Xc(e,n).add(t,"minutes").format(n)}(cu||(cu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Xc(e).isBefore(r,"day"))||!(!i||!Xc(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Xc(e).isValid())return e}return""}}(uu||(uu={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(du||(du={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(fu||(fu={}));const hu=a.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return l`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,pu=a.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=l`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=l`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=l`
                transition: none;
            `),t}}
`,mu=({show:e=!1,rootId:n,onOverlayClick:r,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:s=!1,enableOverlayClick:l=!1,zIndex:c,id:h})=>{const[p,m]=f(null),[g,v]=f(),[b]=f((()=>du.generate())),w=d(),x=d(null),$=i&&u.cloneElement(i,{ref:x}),S=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root";y((()=>(B(),m(k()),()=>{j(),_().length<1&&E("remove")})),[]),y((()=>{if(e){const e=D();F(e),C();const t=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(t)}{j();const e=setTimeout((()=>{_().length<1&&E("remove")}),200);return()=>clearTimeout(e)}}),[e]);const F=e=>{w.current=e,v(e)},k=()=>document&&n?document.getElementById(n):document?document.body:null,D=()=>_().length>0,B=()=>{if(!document.getElementById(gu)){const e=document.createElement("style");e.id=gu;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${yu} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${yu}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(yu);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(yu):document.body.classList.add(yu)},_=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},C=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},j=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},M=e=>{var t;const n=null===(t=x.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&l&&(e.preventDefault(),r())};return p?O.createPortal(t(hu,Object.assign({id:S,"data-testid":S,$show:e,zIndex:c,$stacked:g},{children:i&&t(pu,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(g?.5:.8),$backgroundBlur:a,$disableTransition:s,$enableOverlayClick:l,onClick:M},{children:$}))})),p):null},gu="lifesg-ds-overlay-stylesheet",yu="lifesg-ds-overlay-open",vu=a.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${pn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,bu=e=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:c,dismissKeyboardOnShow:u=!0}=e,d=W(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=f(),[m,g]=f();y((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),y((()=>{var e,t;r&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;p(e)},b=()=>{const e=.01*window.visualViewport.height;p(e),g(window.visualViewport.offsetTop)};return t(mu,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:c,id:n,rootId:s,zIndex:l},{children:t(vu,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:h,offsetTop:m},d,{children:o}))}))},wu=a.div`
    border-radius: 0.5rem;
    background: ${dn.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,xu=a.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${dn.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${pn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,$u=a(Yn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${dn.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${dn.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${pn.mobileL} {
        right: 1.25rem;
    }
`,Su=e=>{const{textSize:t}=e||{};return l`
        // Text styling
        ${t&&Cn(t,"regular")}

        strong {
            font-family: ${$n.Semibold};
            ${t&&Cn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${$n.Semibold};
            ${t&&Cn(t,"semibold")}
            color: ${dn.Primary};
            text-decoration: none;

            svg {
                color: ${dn.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${dn.Secondary};

                svg {
                    color: ${dn.Secondary};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},Fu=a.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ou=a((e=>{var{children:n}=e,r=W(e,["children"]);const i=r["data-testid"]||"card";return t(wu,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Mn.Body,{children:n}):n}))}))`
    color: ${dn.Neutral[1]};
    ${Su({textSize:"BodySmall"})}

    ${pn.mobileL} {
        display: none;
    }
`,ku=a((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=W(n,["id","children","onClose","showCloseButton"]);return e(xu,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t($u,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(_,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Du=a.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${dn.Neutral[1]};
    ${Su({textSize:"BodySmall"})}
`,Bu=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=W(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=Wc.useMediaQuery({maxWidth:fn.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof i?t(Mn.BodySmall,{children:i}):i;return e(n,{children:[o&&t(Fu,Object.assign({"data-testid":l},s,{children:t(Ou,{children:d()})})),c&&t(bu,Object.assign({show:o,onOverlayClick:u},{children:t(ku,Object.assign({onClose:u},{children:t(Du,{children:d()})}))}))]})},Eu=a.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,_u=r=>{var{children:i,popoverContent:o,trigger:a="click",position:s="top",zIndex:l,rootNode:c,onPopoverAppear:u,onPopoverDismiss:h}=r,p=W(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[m,g]=f(!1),v=d(),b=d(),w=Wc.useMediaQuery({maxWidth:mn.mobileL}),{refs:x,floatingStyles:$}=zc({open:m,placement:s,whileElementsMounted:Rl,middleware:[(S=16,{...Pl(S),options:[S,F]}),Zl(),Ul({limiter:Ql()})]});var S,F;y((()=>{if(!w&&m)return document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}}),[m]);const O=e=>{var t,n;(null===(t=v.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=b.current)||void 0===n?void 0:n.contains(e.target))||(g(!1),h&&h())},k=()=>{g(!1)};return e(n,{children:[m&&t(Pc,Object.assign({root:c},{children:t("div",Object.assign({ref:e=>{b.current=e,x.setFloating(e)},style:Object.assign(Object.assign({},$),{zIndex:l})},{children:"function"==typeof o?o():t(Bu,Object.assign({visible:!0,onMobileClose:k},{children:o}))}))})),t(Eu,Object.assign({ref:e=>{v.current=e,x.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||w)&&(g(!m),!m&&u&&u(),m&&h&&h())},onMouseEnter:()=>{"hover"!==a||w||g(!0)},onMouseLeave:()=>{"hover"===a&&m&&!w&&g(!1)}},p,{children:i}))]})},Cu=a.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${dn.Primary};
    }
`,ju=a.div`
    display: inline;
    position: relative;
    width: fit-content;
`,Mu=({addon:e,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=e;return t(_u,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:t(ju,{children:t(Cu,{children:o||t(E,{id:`${i}-icon`})})})}))},Au=a.div`
    background-color: ${e=>e.$collapsible?dn.Neutral[7](e):dn.Neutral[8](e)};

    ${pn.tablet} {
        background-color: ${dn.Neutral[7]};
    }
`,Tu=a.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${dn.Neutral[5]};

    ${pn.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Ru=a.div`
    display: flex;
    align-items: center;

    background-color: ${dn.Neutral[8]};

    ${pn.tablet} {
        background-color: transparent;
    }
`,Pu=a(Yn)`
    margin: 0 0 0 auto;
`,Iu=a(C)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${dn.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${dn.Neutral[2]};
    }
`,Hu=a(Mn.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${pn.tablet} {
        ${Cn("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,zu=a(Rs.div)`
    overflow: hidden;
`,Nu=a.div`
    padding: 1rem 1.25rem;
`,Lu=a(Rs.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Wu=a(Wn.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,Vu=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:o,onExpandChange:a,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:u=!0,title:d,addon:h,children:p}=n,m=W(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:g,rootNode:v}=x(or),b="mobile"===g,[w,$]=f(_()),[S,F]=f(s),O=!b&&r,k=ni(),D=ni(),B=vs({height:w?k.height:0}),E=S?null!=l?l:Math.min(.5*D.height,216):D.height;y((()=>{$(_())}),[r,o]);function _(){return!!b||(ar(o)?!r||i:o)}return e(Au,Object.assign({$collapsible:O},{children:[t(Tu,{$showDivider:c,$showMobileDivider:u}),(d||O)&&e(Ru,{children:[d&&e(Hu,Object.assign({weight:"semibold"},{children:[d," ",h&&("popover"===h.type?t(Mu,{addon:h,rootNode:b?v:void 0}):null)]})),O&&t(Pu,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;ar(o)&&$(e),a&&a(e)},"aria-label":w?"Collapse":"Expand"},{children:t(Iu,{$expanded:w})}))]}),t(zu,Object.assign({"data-testid":"expandable-container","data-expanded":w,style:B},{children:t("div",Object.assign({ref:k.ref},{children:e(Nu,Object.assign({},m,{children:[t(Lu,Object.assign({"data-testid":"minimisable-container",$height:E,$minimisable:s},{children:t("div",Object.assign({ref:D.ref},{children:t("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof p?p(g,{minimised:S}):p}))}))})),s&&e(Wu,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{F(!S)}},{children:["View ",S?"more":"less"]}))]}))}))}))]}))},Yu=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?l`
                    color: ${dn.Primary};
                `:l`
                    color: ${dn.Neutral[4]};
                `};
    }
`,qu=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?T:A,{});break;case"radio":o=t(n?M:j,{});break;case"tick":o=t(R,{});break;case"cross":o=t(_,{});break;default:o=null}return t(Yu,Object.assign({className:i,$active:n,disabled:r},{children:o}))},Uu=a.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=dn.Validation.Red.Background(e),n=dn.Validation.Red.Border(e);break;case"success":t=dn.Validation.Green.Background(e),n=dn.Validation.Green.Border(e);break;case"warning":default:t=dn.Validation.Orange.Background(e),n=dn.Validation.Orange.Border(e);break;case"info":t=dn.Validation.Blue.Background(e),n=dn.Validation.Blue.Border(e);break;case"description":t=dn.Neutral[7](e),n=dn.Neutral[4](e)}return l`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${dn.Neutral[1]};
    ${e=>"small"===e.$sizeType?Su({textSize:"H6"}):Su({textSize:"BodySmall"})}
`,Qu=a.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&l`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=dn.Validation.Red.Icon(e);break;case"success":t=dn.Validation.Green.Icon(e);break;case"warning":default:t=dn.Validation.Orange.Icon(e);break;case"info":t=dn.Validation.Blue.Icon(e);break;case"description":t=dn.Neutral[4](e)}return l`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Zu=a(Mn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?l`
                ${Cn("H6","semibold")}
                margin-top: 0.25rem;
            `:l`
                ${Cn("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${dn.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${dn.Primary};
    }
`,Gu=a.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Xu=a.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Ju=a.button`
    ${e=>"small"===e.$sizeType?l`
                ${Cn("H6","semibold")}
            `:l`
                ${Cn("H5","semibold")}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${dn.Primary};
`,Ku=a(r)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,ed=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,td=(a.ol`
    ${e=>ed(e.bottomMargin)}
    margin-left: ${3}rem;

    ${pn.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Cn(e.size,"regular")}
        position: relative;
        color: ${dn.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return l`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return l`
                counter-reset: list ${t?n+1:n-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,a.ul`
    ${e=>ed(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Cn(e.size,"regular")}
        color: ${dn.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),nd=e=>{var{size:n="Body",children:r}=e,i=W(e,["size","children"]);return t(td,Object.assign({size:n},i,{children:r}))},rd=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    // Content positioning style
    ${e=>{if(!e.$indicator)return l`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return l`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?l`
                        border-color: ${dn.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${dn.Shadow.Red};
                        }
                    `:e.$disabled?l`
                        border-color: transparent;
                    `:l`
                        border-color: transparent;

                        :hover {
                            background: ${dn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?l`
                        border-color: ${dn.Neutral[5]};
                    `:e.$disabled&&e.$selected?l`
                        border-color: ${dn.Neutral[4]};
                    `:e.$error?l`
                        border-color: ${dn.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${dn.Shadow.Red};
                        }
                    `:e.$selected?l`
                        border-color: ${dn.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${dn.Shadow.Accent};
                        }
                    `:l`
                        background: ${dn.Neutral[8]};
                        border-color: ${dn.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${dn.Shadow.Accent};
                            border-color: ${dn.Accent.Light[1]};
                        }
                    `}
`,id=a.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,od=a.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,ad=a.label`
    ${e=>e.$selected&&!e.$indicator?l`
                ${Cn("H4","semibold")}
            `:l`
                ${Cn("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${pn.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${pn.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${dn.Neutral[1]};

    ${e=>e.$disabled?l`
                color: ${dn.Neutral[3]};
            `:e.$selected?l`
                color: ${dn.Primary};
            `:void 0}
`,sd=a.div`
    ${Cn("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${_n("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?l`
                color: ${dn.Neutral[3]};
            `:e.$selected?l`
                color: ${dn.Primary};
            `:l`
                color: ${dn.Neutral[1]};
            `}
`,ld=a.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?l`
                        background: ${dn.Neutral[8]};
                    `:e.$disabled?l``:l`
                        :hover {
                            background: ${dn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?l`
                        background: ${dn.Neutral[6]};
                    `:e.$error?l`
                        background: ${dn.Neutral[8]};
                    `:e.$selected?l`
                        background: ${dn.Accent.Light[5]};
                    `:l`
                        background: ${dn.Neutral[8]};
                    `}
`,cd=a.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,ud=a.button`
    color: ${e=>e.$disabled?dn.Neutral[3]:dn.Validation.Red.Icon};
    white-space: nowrap;
    ${Cn("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,dd=a.button`
    color: ${e=>e.disabled?dn.Neutral[3]:dn.Primary};
    ${Cn("H4","semibold")}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,fd=a.div`
    width: 100%;
    color: ${e=>e.$disabled?dn.Neutral[3]:dn.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,hd=a((n=>{var{type:r,className:i,children:o,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:d}=n,h=W(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,m]=f(!1),[g,v]=f(!1),{height:b,ref:w}=ni();y((()=>{x()}),[d,b]);const x=()=>{m(!d),v($())},$=()=>!!d&&b>d;return e(Uu,Object.assign({className:i,$type:r,$sizeType:l,"data-testid":h["data-testid"]},{children:[c&&t(Qu,Object.assign({$sizeType:l,$type:r},{children:(()=>{if(r&&u)return u;switch(r){case"success":return t(N,{});case"warning":return t(z,{});case"error":return t(H,{});case"info":case"description":return t(E,{});default:return null}})()})),e(Gu,{children:[e(Xu,Object.assign({$maxCollapsedHeight:$()?d:void 0,$showMore:p,$hasActionLink:!!a},{children:[t("div",Object.assign({ref:w},{children:o})),a&&e(Zu,Object.assign({"data-testid":"action-link",$type:r,$sizeType:l},a,{children:[a.children,s||t(I,{})]}))]})),g&&e(Ju,Object.assign({$sizeType:l,$type:r,type:"button",onClick:()=>m(!p)},{children:["Show ",p?"less":"more",t(Ku,{$expanded:p})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,pd=a.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Su({textSize:"BodySmall"})}

    ${e=>e.$disabled?l`
                color: ${dn.Neutral[3]};
            `:e.$selected?l`
                color: ${dn.Primary};
            `:l`
                color: ${dn.Neutral[1]};
            `}
`,md=a(Mn.BodySmall)`
    color: ${e=>e.$disabled?dn.Neutral[3]:dn.Validation.Red.Text};
`,gd=a(nd)`
    li {
        color: ${e=>e.$disabled?dn.Neutral[3]:dn.Validation.Red.Text};
    }
`,yd=a(Vu)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${pn.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${pn.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,vd=a.div`
    display: flex;
    flex-direction: column;

    ${pn.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,bd=a.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${Cn("BodySmall","regular")}
    ${e=>e.$selected&&l`
            color: ${dn.Primary};
        `}
`,wd=a.input`
    appearance: none;
`,xd=a(qu)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${wd}:focus-visible + & {
        outline: 2px solid ${dn.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,$d=a((({type:r="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:c,disabled:u,error:h,name:p,id:m,className:g,compositeSection:v,removable:b,onRemove:w,"data-testid":x,onChange:S,useContentWidth:F})=>{const{collapsible:O=!0,errors:k,children:D,initialExpanded:B}=v||{},[E,_]=f(o),[j,M]=f(B),A=$((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[T]=f(du.generate()),R=m?`${m}`:`tg-${T}`,I=d();y((()=>{_(o)}),[o]),y((()=>{E&&M(null==B||B)}),[E]);const H=e=>{if(!u){if(S)return void S(e);switch(r){case"checkbox":_((e=>!e));break;case"radio":case"yes":case"no":E||_(!0)}}},z=()=>{u||M(!j)},N=()=>{u||!w||w()},L=()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(qu,{type:e,active:E,disabled:u})},W=()=>{if(!c)return null;let e;return e="function"==typeof c?c():c,t(sd,Object.assign({"data-id":"toggle-sublabel",$disabled:u,$selected:E},{children:e}))},V=()=>{const n=!j&&!A;return O&&e(dd,Object.assign({$paddingTopRequired:n,disabled:u,onClick:z,"data-testid":j?"collapse-button":"expand-button"},{children:[j?"Show less":"Show more",t(j?P:C,{"aria-hidden":!0})]}))},Y=r=>e(n,{children:[t(md,Object.assign({weight:"semibold",$disabled:u},{children:"Error"})),t(gd,Object.assign({$disabled:u},{children:null==r?void 0:r.map(((e,n)=>t("li",Object.assign({id:`${R}-error-list-item-${n}`},{children:t(md,Object.assign({weight:"semibold",$disabled:u},{children:e}))}),n)))}))]});return e(rd,Object.assign({$selected:E,$disabled:u,className:g,$styleType:a,$error:h,$indicator:i,$useContentWidth:F,id:m,"data-testid":x},{children:[e(ld,Object.assign({id:`${R}-header-container`,$disabled:u,$error:h,$selected:E,$indicator:i,$styleType:a},{children:[e(cd,Object.assign({$addPadding:b},{children:[t(id,{ref:I,name:p,id:`${R}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:H,checked:E}),i&&L(),e(od,{children:[t(ad,Object.assign({htmlFor:`${R}-input`,$selected:E,$indicator:i,$disabled:u,"data-testid":`${R}-toggle-label`,$maxLines:l},{children:s})),c&&W()]})]})),b&&t(ud,Object.assign({type:"button",$disabled:u,onClick:N,id:`${R}-remove-button`},{children:"Remove"}))]})),D&&e("div",{children:[(!O||j)&&t(pd,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:u},{children:D})),O&&!j&&A&&t(fd,Object.assign({$disabled:u,onClick:z,id:`${R}-error-alert`},{children:t(hd,Object.assign({type:u?"description":"error",className:g,showIcon:!0},{children:Array.isArray(k)?Y(k):k}))})),V()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,Sd=a(Wn.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${pn.tablet} {
        margin: 0 0 1rem 0;
    }
`,Fd=a.div`
    background-color: ${dn.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Od=Object.assign((r=>{var{toggleFilterButtonLabel:a="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:u,onDismiss:h,onDone:p,children:m}=r,g=W(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[v,b]=f(!1),w=d(null),x=d(null),$=Wc.useMediaQuery({maxWidth:fn.tablet});y((()=>{$||F()}),[$]);const S=()=>{b(!0)},F=()=>{b(!1),h&&h()},O=()=>{b(!1),p&&p()},k=()=>{u&&u()},D=e=>"function"==typeof m?m(e):m,B=n=>e(Jn,{children:["mobile"===n&&t(er,Object.assign({onClick:F,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:t(o,{})})),t(Kn,Object.assign({weight:"semibold"},{children:l})),t(tr,Object.assign({styleType:"link",type:"button",onClick:k,disabled:c},{children:"Clear"}))]});return t("div",Object.assign({},g,{children:t(or.Provider,$?Object.assign({value:{mode:"mobile",rootNode:w}},{children:e(n,{children:[t(nr,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:S,type:"button",icon:t(i,{})},{children:a})),t(mu,Object.assign({show:v,disableTransition:!0},{children:t(Gn,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e(Zn,Object.assign({ref:w},{children:[B("mobile"),t(Xn,{children:D("mobile")}),t(rr,{children:t(ir,Object.assign({onClick:O,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:x}},{children:e(Qn,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:x},{children:[B("default"),D("default")]}))}))}))}),{Item:Vu,Page:({onDismiss:n,onDone:r,children:i})=>e(Fd,{children:[t(er,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:t(L,{})})),t(Xn,{children:i}),t(rr,{children:t(ir,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:o,onSelect:a,labelExtractor:s,valueExtractor:l,useToggleContentWidth:c}=r,u=W(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:h}=x(or),[p,m]=f(i||[]),[g,v]=f(),[b,$]=f(o.length),S=d(),F=d(),O=e=>()=>{const t=[...p],n=p.findIndex((t=>B(t)===B(e)));n>=0?t.splice(n,1):t.push(e),m(t),null==a||a(t)},k=()=>{const e=p.length?[]:o;m(e),null==a||a(e)},D=e=>{var t;return s?s(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},B=e=>{var t;return l?l(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},E=w((()=>{if(!S.current)return void v(void 0);const e=Array.from(S.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}$(t),v(n>2?r-8:void 0)}),[]);y((()=>{i!==p&&m(i||[])}),[i]),y((()=>{"default"===h?(()=>{const e=F.current?F.current.offsetTop+F.current.clientHeight:void 0;v(e)})():E()}),[o]),ni({handleWidth:"mobile"===h,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:S,onResize:E});return t(yd,Object.assign({minimisable:o.length>5,minimisedHeight:g},u,{children:(r,{minimised:i})=>e(n,{children:[o.length<3?null:t(Sd,Object.assign({styleType:"link",type:"button",onClick:k},{children:p.length?"Clear all":"Select all"})),t(vd,Object.assign({role:"group","aria-label":u.title,ref:S},{children:o.map(((n,o)=>"default"===r?((n,r,i)=>{const o=D(n),a=B(n),s=!!p.find((e=>B(e)===a));return e(bd,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?F:void 0},{children:[t(wd,{type:"checkbox",checked:s,onChange:O(n)}),t(xd,{type:"checkbox",active:s}),o]}),a)})(n,o,i):((e,n,r)=>{const i=D(e),o=B(e),a=!!p.find((e=>B(e)===o));return t($d,Object.assign({type:"checkbox",checked:a,$visible:!r||g&&n<=b,onChange:O(e),useContentWidth:c},{children:i}),o)})(n,o,i)))}))]})}))}});export{Od as Filter};
//# sourceMappingURL=index.js.map
