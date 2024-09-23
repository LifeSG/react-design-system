import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{ChevronDownIcon as r,FilterIcon as i,CrossIcon as o}from"@lifesg/react-icons";import a,{keyframes as s,css as l}from"styled-components";import*as c from"react";import d,{useRef as u,useState as h,isValidElement as f,createRef as p,cloneElement as m,PureComponent as g,useEffect as y,useLayoutEffect as b,forwardRef as v,useCallback as $,useContext as w,useMemo as S}from"react";import{ExternalIcon as x}from"@lifesg/react-icons/external";import F,{findDOMNode as O,unstable_batchedUpdates as k}from"react-dom";import{ICircleFillIcon as D}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as B,FloatingTree as _,useFloatingNodeId as j,FloatingNode as C,useFloating as E,autoUpdate as M,offset as P,flip as H,shift as T,limitShift as I,FloatingPortal as A}from"@floating-ui/react";import{CrossIcon as z}from"@lifesg/react-icons/cross";import{ChevronDownIcon as R}from"@lifesg/react-icons/chevron-down";import{CircleIcon as N}from"@lifesg/react-icons/circle";import{CircleDotIcon as L}from"@lifesg/react-icons/circle-dot";import{SquareIcon as W}from"@lifesg/react-icons/square";import{SquareTickFillIcon as V}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Y}from"@lifesg/react-icons/tick";import{ChevronUpIcon as q}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Q}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as U}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as J}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Z}from"@lifesg/react-icons/tick-circle-fill";import{ChevronLeftIcon as G}from"@lifesg/react-icons/chevron-left";function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var te=Array.isArray,ne="object"==typeof K&&K&&K.Object===Object&&K,re="object"==typeof self&&self&&self.Object===Object&&self,ie=ne||re||Function("return this")(),oe=ie.Symbol,ae=oe,se=Object.prototype,le=se.hasOwnProperty,ce=se.toString,de=ae?ae.toStringTag:void 0;var ue=function(e){var t=le.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch(e){}var i=ce.call(e);return r&&(t?e[de]=n:delete e[de]),i},he=Object.prototype.toString;var fe=ue,pe=function(e){return he.call(e)},me=oe?oe.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?fe(e):pe(e)};var ye=ge,be=function(e){return null!=e&&"object"==typeof e};var ve=function(e){return"symbol"==typeof e||be(e)&&"[object Symbol]"==ye(e)},$e=te,we=ve,Se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xe=/^\w*$/;var Fe=function(e,t){if($e(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!we(e))||(xe.test(e)||!Se.test(e)||null!=t&&e in Object(t))};var Oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ke=ge,De=Oe;var Be,_e=function(e){if(!De(e))return!1;var t=ke(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},je=ie["__core-js_shared__"],Ce=(Be=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var Ee=function(e){return!!Ce&&Ce in e},Me=Function.prototype.toString;var Pe=_e,He=Ee,Te=Oe,Ie=function(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=/^\[object .+?Constructor\]$/,ze=Function.prototype,Re=Object.prototype,Ne=ze.toString,Le=Re.hasOwnProperty,We=RegExp("^"+Ne.call(Le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ve=function(e){return!(!Te(e)||He(e))&&(Pe(e)?We:Ae).test(Ie(e))},Ye=function(e,t){return null==e?void 0:e[t]};var qe=function(e,t){var n=Ye(e,t);return Ve(n)?n:void 0},Qe=qe(Object,"create"),Ue=Qe;var Je=function(){this.__data__=Ue?Ue(null):{},this.size=0};var Ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ge=Qe,Xe=Object.prototype.hasOwnProperty;var Ke=function(e){var t=this.__data__;if(Ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Xe.call(t,e)?t[e]:void 0},et=Qe,tt=Object.prototype.hasOwnProperty;var nt=Qe;var rt=Je,it=Ze,ot=Ke,at=function(e){var t=this.__data__;return et?void 0!==t[e]:tt.call(t,e)},st=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nt&&void 0===t?"__lodash_hash_undefined__":t,this};function lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lt.prototype.clear=rt,lt.prototype.delete=it,lt.prototype.get=ot,lt.prototype.has=at,lt.prototype.set=st;var ct=lt;var dt=function(){this.__data__=[],this.size=0};var ut=function(e,t){return e===t||e!=e&&t!=t};var ht=function(e,t){for(var n=e.length;n--;)if(ut(e[n][0],t))return n;return-1},ft=ht,pt=Array.prototype.splice;var mt=ht;var gt=ht;var yt=ht;var bt=dt,vt=function(e){var t=this.__data__,n=ft(t,e);return!(n<0)&&(n==t.length-1?t.pop():pt.call(t,n,1),--this.size,!0)},$t=function(e){var t=this.__data__,n=mt(t,e);return n<0?void 0:t[n][1]},wt=function(e){return gt(this.__data__,e)>-1},St=function(e,t){var n=this.__data__,r=yt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function xt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xt.prototype.clear=bt,xt.prototype.delete=vt,xt.prototype.get=$t,xt.prototype.has=wt,xt.prototype.set=St;var Ft=xt,Ot=qe(ie,"Map"),kt=ct,Dt=Ft,Bt=Ot;var _t=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var jt=function(e,t){var n=e.__data__;return _t(t)?n["string"==typeof t?"string":"hash"]:n.map},Ct=jt;var Et=jt;var Mt=jt;var Pt=jt;var Ht=function(){this.size=0,this.__data__={hash:new kt,map:new(Bt||Dt),string:new kt}},Tt=function(e){var t=Ct(this,e).delete(e);return this.size-=t?1:0,t},It=function(e){return Et(this,e).get(e)},At=function(e){return Mt(this,e).has(e)},zt=function(e,t){var n=Pt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Rt.prototype.clear=Ht,Rt.prototype.delete=Tt,Rt.prototype.get=It,Rt.prototype.has=At,Rt.prototype.set=zt;var Nt=Rt;function Lt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Lt.Cache||Nt),n}Lt.Cache=Nt;var Wt=Lt;var Vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,qt=function(e){var t=Wt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Vt,(function(e,n,r,i){t.push(r?i.replace(Yt,"$1"):n||e)})),t}));var Qt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ut=te,Jt=ve,Zt=oe?oe.prototype:void 0,Gt=Zt?Zt.toString:void 0;var Xt=function e(t){if("string"==typeof t)return t;if(Ut(t))return Qt(t,e)+"";if(Jt(t))return Gt?Gt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Kt=Xt;var en=te,tn=Fe,nn=qt,rn=function(e){return null==e?"":Kt(e)};var on=ve;var an=function(e,t){return en(e)?e:tn(e,t)?[e]:nn(rn(e))},sn=function(e){if("string"==typeof e||on(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var ln=function(e,t){for(var n=0,r=(t=an(t,e)).length;null!=e&&n<r;)e=e[sn(t[n++])];return n&&n==r?e:void 0};var cn=ee((function(e,t,n){var r=null==e?void 0:ln(e,t);return void 0===r?n:r}));const dn=(e,t,n)=>t?cn(n,t)||cn(e,t):n||e,un=(e,t)=>{const n=t||e.defaultValue;return cn(e.collections,n)};var hn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(hn||(hn={}));const fn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},pn=e=>t=>{const n=t.theme,r=un(fn,n[hn.colorScheme]);return n.options&&n.options.color?dn(r,e,n.options.color):dn(r,e)},mn={Brand:{1:pn("Brand.1"),2:pn("Brand.2"),3:pn("Brand.3"),4:pn("Brand.4"),5:pn("Brand.5"),6:pn("Brand.6")},Primary:pn("Primary"),PrimaryDark:pn("PrimaryDark"),Secondary:pn("Secondary"),Accent:{Light:{1:pn("Accent.Light.1"),2:pn("Accent.Light.2"),3:pn("Accent.Light.3"),4:pn("Accent.Light.4"),5:pn("Accent.Light.5"),6:pn("Accent.Light.6")},Dark:{1:pn("Accent.Dark.1"),2:pn("Accent.Dark.2"),3:pn("Accent.Dark.3")}},Neutral:{1:pn("Neutral.1"),2:pn("Neutral.2"),3:pn("Neutral.3"),4:pn("Neutral.4"),5:pn("Neutral.5"),6:pn("Neutral.6"),7:pn("Neutral.7"),8:pn("Neutral.8")},Validation:{Green:{Text:pn("Validation.Green.Text"),Icon:pn("Validation.Green.Icon"),Border:pn("Validation.Green.Border"),Background:pn("Validation.Green.Background")},Orange:{Text:pn("Validation.Orange.Text"),Icon:pn("Validation.Orange.Icon"),Border:pn("Validation.Orange.Border"),Background:pn("Validation.Orange.Background"),Badge:pn("Validation.Orange.Badge")},Red:{Text:pn("Validation.Red.Text"),Icon:pn("Validation.Red.Icon"),Border:pn("Validation.Red.Border"),Background:pn("Validation.Red.Background")},Blue:{Text:pn("Validation.Blue.Text"),Icon:pn("Validation.Blue.Icon"),Border:pn("Validation.Blue.Border"),Background:pn("Validation.Blue.Background")}},Shadow:{Accent:pn("Shadow.Accent"),Red:pn("Shadow.Red"),Elevation:pn("Shadow.Elevation")}},gn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},yn=e=>Object.keys(gn).reduce(((t,n)=>{const r=gn[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),bn=yn("max-width"),vn=(yn("min-width"),gn),$n=a.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,wn=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Sn=a.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||mn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${wn} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,xn=a(Sn)`
    animation-delay: -0.45s;
`,Fn=a(Sn)`
    animation-delay: -0.3s;
`,On=a(Sn)`
    animation-delay: -0.15s;
`,kn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Dn={D1:{fontFamily:kn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:kn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:kn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:kn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:kn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:kn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:kn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:kn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Bn={D1:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:kn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:kn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:kn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},_n={collections:{base:Dn,oneservice:{D1:{fontFamily:kn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:kn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:kn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:kn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:kn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:kn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:kn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:kn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:kn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:kn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:kn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:kn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Bn},defaultValue:"base"},jn=e=>t=>{const n=t.theme,r=un(_n,n[hn.textStyleScheme]);return n.options&&n.options.textStyle?dn(r,e,n.options.textStyle):dn(r,e)},Cn={D1:{fontFamily:jn("D1.fontFamily"),fontSize:jn("D1.fontSize"),fontWeight:jn("D1.fontWeight"),lineHeight:jn("D1.lineHeight"),letterSpacing:jn("D1.letterSpacing")},D2:{fontFamily:jn("D2.fontFamily"),fontSize:jn("D2.fontSize"),fontWeight:jn("D2.fontWeight"),lineHeight:jn("D2.lineHeight"),letterSpacing:jn("D2.letterSpacing")},D3:{fontFamily:jn("D3.fontFamily"),fontSize:jn("D3.fontSize"),fontWeight:jn("D3.fontWeight"),lineHeight:jn("D3.lineHeight"),letterSpacing:jn("D3.letterSpacing")},D4:{fontFamily:jn("D4.fontFamily"),fontSize:jn("D4.fontSize"),fontWeight:jn("D4.fontWeight"),lineHeight:jn("D4.lineHeight"),letterSpacing:jn("D4.letterSpacing")},DBody:{fontFamily:jn("DBody.fontFamily"),fontSize:jn("DBody.fontSize"),fontWeight:jn("DBody.fontWeight"),lineHeight:jn("DBody.lineHeight"),letterSpacing:jn("DBody.letterSpacing")},H1:{fontFamily:jn("H1.fontFamily"),fontSize:jn("H1.fontSize"),fontWeight:jn("H1.fontWeight"),lineHeight:jn("H1.lineHeight"),letterSpacing:jn("H1.letterSpacing")},H2:{fontFamily:jn("H2.fontFamily"),fontSize:jn("H2.fontSize"),fontWeight:jn("H2.fontWeight"),lineHeight:jn("H2.lineHeight"),letterSpacing:jn("H2.letterSpacing")},H3:{fontFamily:jn("H3.fontFamily"),fontSize:jn("H3.fontSize"),fontWeight:jn("H3.fontWeight"),lineHeight:jn("H3.lineHeight"),letterSpacing:jn("H3.letterSpacing")},H4:{fontFamily:jn("H4.fontFamily"),fontSize:jn("H4.fontSize"),fontWeight:jn("H4.fontWeight"),lineHeight:jn("H4.lineHeight"),letterSpacing:jn("H4.letterSpacing")},H5:{fontFamily:jn("H5.fontFamily"),fontSize:jn("H5.fontSize"),fontWeight:jn("H5.fontWeight"),lineHeight:jn("H5.lineHeight"),letterSpacing:jn("H5.letterSpacing")},H6:{fontFamily:jn("H6.fontFamily"),fontSize:jn("H6.fontSize"),fontWeight:jn("H6.fontWeight"),lineHeight:jn("H6.lineHeight"),letterSpacing:jn("H6.letterSpacing")},Body:{fontFamily:jn("Body.fontFamily"),fontSize:jn("Body.fontSize"),fontWeight:jn("Body.fontWeight"),lineHeight:jn("Body.lineHeight"),letterSpacing:jn("Body.letterSpacing")},BodySmall:{fontFamily:jn("BodySmall.fontFamily"),fontSize:jn("BodySmall.fontSize"),fontWeight:jn("BodySmall.fontWeight"),lineHeight:jn("BodySmall.lineHeight"),letterSpacing:jn("BodySmall.letterSpacing")},XSmall:{fontFamily:jn("XSmall.fontFamily"),fontSize:jn("XSmall.fontSize"),fontWeight:jn("XSmall.fontWeight"),lineHeight:jn("XSmall.lineHeight"),letterSpacing:jn("XSmall.letterSpacing")}},En=[kn.OpenSans,kn.PlusJakartaSans],Mn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Pn=(e,t)=>n=>{var r;const i=Cn[e].fontFamily(n),o=Cn[e].fontWeight(n),a=En.find((e=>Object.values(e).includes(i)));return a?l`
                font-family: ${Mn(a,t)||Mn(a,o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Hn(t)||o)&&void 0!==r?r:"normal"};
        `},Hn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Tn=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},In=Pn,An=(e,t,n=!1)=>r=>{const i=Cn[e],o=i.fontSize(r);return l`
            ${Pn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},zn=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Tn(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Tn(n)}
        `;var Rn;!function(e){e.D1=a.h1`
        ${e=>l`
                ${An("D1",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${An("D2",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${An("D3",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${An("D4",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${An("DBody",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${An("H1",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${An("H2",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${An("H3",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${An("H4",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${An("H5",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${An("H6",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${An("Body",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${An("BodySmall",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${An("XSmall",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Wn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Wn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rn||(Rn={}));const Nn=a.a`
    ${e=>l`
            ${An(e.textStyle,e.weight)}
            color: ${mn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${mn.Secondary};

                svg {
                    color: ${mn.Secondary};
                }
            }
        `}
`,Ln=a(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Wn=n=>{var{external:r=!1,children:i}=n,o=X(n,["external","children"]);return e(Nn,Object.assign({},o,{children:[i,r&&t(Ln,{})]}))};var Vn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Vn||(Vn={}));const Yn={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${mn.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${mn.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${mn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${mn.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${mn.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${mn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},qn=e=>t=>{var n;const r=t.theme,i=un(Yn,r[hn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?dn(i,e,r.options.designToken):dn(i,e)},Qn={InputBoxShadow:qn("InputBoxShadow"),InputErrorBoxShadow:qn("InputErrorBoxShadow"),ElevationBoxShadow:qn("ElevationBoxShadow"),Table:{Header:qn("Table.Header"),Cell:{Primary:qn("Table.Cell.Primary"),Secondary:qn("Table.Cell.Secondary"),Selected:qn("Table.Cell.Selected"),Hover:qn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:qn("Button.Danger.BackgroundColor"),Hover:qn("Button.Danger.Hover"),Primary:qn("Button.Danger.Primary"),Border:qn("Button.Danger.Border")}}},Un=a.button`
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
                    background-color: ${mn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Qn.Button.Danger.Border:mn.Primary};

                    color: ${e.$buttonIsDanger?Qn.Button.Danger.Primary:mn.Primary};
                `;case"light":return l`
                    background-color: ${mn.Neutral[8]};
                    border: 1px solid ${mn.Neutral[5]};

                    color: ${e.$buttonIsDanger?Qn.Button.Danger.Primary:mn.Primary};
                `;case"disabled":return l`
                    background-color: ${mn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${mn.Neutral[3]};
                `;case"link":return l`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Qn.Button.Danger.Primary:mn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Qn.Button.Danger.Hover:mn.Secondary};
                    }
                `;default:return l`
                    background-color: ${e.$buttonIsDanger?Qn.Button.Danger.BackgroundColor:mn.Primary};
                    border: 1px solid transparent;

                    ${bn.mobileL} {
                        width: 100%;
                    }

                    color: ${mn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?l`
                    height: 2.5rem;
                    ${An("H5","semibold")}

                    ${bn.mobileS} {
                        height: auto;
                    }
                `:l`
                    height: 3rem;
                    ${An("H4","semibold")}

                    ${bn.mobileS} {
                        height: auto;
                    }
                `}
`,Jn=a((({color:n,className:r,size:i=18})=>e($n,Object.assign({className:r,$size:i,$color:n},{children:[t(Sn,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(xn,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(Fn,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(On,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Qn.Button.Danger.Primary:mn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=mn.Neutral[3](e);break;default:t=mn.Neutral[8](e)}return l`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Zn={Default:d.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=X(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Un,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&t(Jn,Object.assign({},d)),t("span",{children:i})]}))})),Small:d.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=X(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Un,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&t(Jn,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},Gn=a.button`
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
                background-color: ${mn.Neutral[7]};
            `}
    }
`,Xn=d.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=X(e,["children","focusHighlight","focusOutline","type"]);return t(Gn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Kn=a(Un)`
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
`,er={Default:d.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,d=X(n,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Kn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,t("span",{children:i})]}))})),Small:d.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,d=X(n,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Kn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,t("span",{children:i})]}))}))},tr=a.div`
    background-color: ${mn.Neutral[8]};
    border: 1px solid ${mn.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,nr=a.div`
    background-color: ${mn.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,rr=a.div`
    background-color: ${mn.Neutral[8]};
    height: 100%;
    width: 100%;
`,ir=a.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,or=a.div`
    display: flex;
    align-items: center;

    background-color: ${mn.Neutral[8]};

    ${bn.tablet} {
        border-bottom: 1px solid ${mn.Neutral[5]};
    }
`,ar=a(Rn.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${bn.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,sr=a(Xn)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${mn.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${mn.Neutral[2]};
    }
`,lr=a(Zn.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${bn.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,cr=a(er.Default)`
    width: 100%;
`,dr=a.div`
    padding: 1.5rem 1.25rem;
    background-color: ${mn.Neutral[8]};
    border-top: 1px solid ${mn.Neutral[5]};
`,ur=a(Zn.Default)`
    width: 100%;
`,hr=d.createContext({mode:"default",rootNode:null});var fr=ee((function(e){return null==e})),pr=function(e,t){return pr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},pr(e,t)};var mr=function(){return mr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},mr.apply(this,arguments)};var gr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var yr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},br="object"==typeof gr&&gr&&gr.Object===Object&&gr,vr="object"==typeof self&&self&&self.Object===Object&&self,$r=br||vr||Function("return this")(),wr=$r,Sr=function(){return wr.Date.now()},xr=/\s/;var Fr=function(e){for(var t=e.length;t--&&xr.test(e.charAt(t)););return t},Or=/^\s+/;var kr=function(e){return e?e.slice(0,Fr(e)+1).replace(Or,""):e},Dr=$r.Symbol,Br=Dr,_r=Object.prototype,jr=_r.hasOwnProperty,Cr=_r.toString,Er=Br?Br.toStringTag:void 0;var Mr=function(e){var t=jr.call(e,Er),n=e[Er];try{e[Er]=void 0;var r=!0}catch(e){}var i=Cr.call(e);return r&&(t?e[Er]=n:delete e[Er]),i},Pr=Object.prototype.toString;var Hr=Mr,Tr=function(e){return Pr.call(e)},Ir=Dr?Dr.toStringTag:void 0;var Ar=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ir&&Ir in Object(e)?Hr(e):Tr(e)},zr=function(e){return null!=e&&"object"==typeof e};var Rr=kr,Nr=yr,Lr=function(e){return"symbol"==typeof e||zr(e)&&"[object Symbol]"==Ar(e)},Wr=/^[-+]0x[0-9a-f]+$/i,Vr=/^0b[01]+$/i,Yr=/^0o[0-7]+$/i,qr=parseInt;var Qr=yr,Ur=Sr,Jr=function(e){if("number"==typeof e)return e;if(Lr(e))return NaN;if(Nr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Nr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Rr(e);var n=Vr.test(e);return n||Yr.test(e)?qr(e.slice(2),n?2:8):Wr.test(e)?NaN:+e},Zr=Math.max,Gr=Math.min;var Xr=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function m(){var e=Ur();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return u?Gr(n,o-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=Ur(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Jr(t)||0,Qr(n)&&(d=!!n.leading,o=(u="maxWait"in n)?Zr(Jr(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(Ur())},y},Kr=Xr,ei=yr;var ti=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ei(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Kr(e,t,{leading:r,maxWait:t,trailing:i})},ni=function(e,t,n,r){switch(t){case"debounce":return Xr(e,n,r);case"throttle":return ti(e,n,r);default:return e}},ri=function(e){return"function"==typeof e},ii=function(){return"undefined"==typeof window},oi=function(e){return e instanceof Element||e instanceof HTMLDocument},ai=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&ri(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ii()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ii())return null;if(t)return document.querySelector(t);if(r&&oi(r))return r;if(n.targetRef&&oi(n.targetRef.current))return n.targetRef.current;var i=O(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ai(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!ii()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ri(t)?"renderProp":ri(r)?"childFunction":f(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=p(),n.observableElement=null,ii()||(n.resizeHandler=ni(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}pr(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ii()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,o=void 0===i?"div":i,a=this.state,s={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=r)(s);case"child":if((e=r).type&&"string"==typeof e.type){var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(s,["targetRef"]);return m(e,l)}return m(e,s);case"childArray":return(e=r).map((function(e){return!!e&&m(e,s)}));default:return c.createElement(o,null)}}}(g);var si=ii()?y:b;function li(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,c=e.handleHeight,d=void 0===c||c,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=u(n),y=u(null),b=null!=f?f:y,v=u(),$=h({width:void 0,height:void 0}),w=$[0],S=$[1];return si((function(){if(!ii()){var e=ai(m,S,l,d);v.current=ni((function(t){(l||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!ii()&&e({width:r,height:i}),g.current=!1}))}),r,o,a);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,o,a,l,d,m,p,b.current]),mr({ref:b},w)}var ci=Object.defineProperty,di={};((e,t)=>{for(var n in t)ci(e,n,{get:t[n],enumerable:!0})})(di,{assign:()=>Wi,colors:()=>Ri,createStringInterpolator:()=>Ti,skipAnimation:()=>Ni,to:()=>Ii,willAdvance:()=>Li});var ui=Di(),hi=e=>xi(e,ui),fi=Di();hi.write=e=>xi(e,fi);var pi=Di();hi.onStart=e=>xi(e,pi);var mi=Di();hi.onFrame=e=>xi(e,mi);var gi=Di();hi.onFinish=e=>xi(e,gi);var yi=[];hi.setTimeout=(e,t)=>{const n=hi.now()+t,r=()=>{const e=yi.findIndex((e=>e.cancel==r));~e&&yi.splice(e,1),wi-=~e?1:0},i={time:n,handler:e,cancel:r};return yi.splice(bi(n),0,i),wi+=1,Fi(),i};var bi=e=>~(~yi.findIndex((t=>t.time>e))||~yi.length);hi.cancel=e=>{pi.delete(e),mi.delete(e),gi.delete(e),ui.delete(e),fi.delete(e)},hi.sync=e=>{Si=!0,hi.batchedUpdates(e),Si=!1},hi.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,hi.onStart(n)}return r.handler=e,r.cancel=()=>{pi.delete(n),t=null},r};var vi="undefined"!=typeof window?window.requestAnimationFrame:()=>{};hi.use=e=>vi=e,hi.now="undefined"!=typeof performance?()=>performance.now():Date.now,hi.batchedUpdates=e=>e(),hi.catch=console.error,hi.frameLoop="always",hi.advance=()=>{"demand"!==hi.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ki()};var $i=-1,wi=0,Si=!1;function xi(e,t){Si?(t.delete(e),e(0)):(t.add(e),Fi())}function Fi(){$i<0&&($i=0,"demand"!==hi.frameLoop&&vi(Oi))}function Oi(){~$i&&(vi(Oi),hi.batchedUpdates(ki))}function ki(){const e=$i;$i=hi.now();const t=bi($i);t&&(Bi(yi.splice(0,t),(e=>e.handler())),wi-=t),wi?(pi.flush(),ui.flush(e?Math.min(64,$i-e):16.667),mi.flush(),fi.flush(),gi.flush()):$i=-1}function Di(){let e=new Set,t=e;return{add(n){wi+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(wi-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,wi-=t.size,Bi(t,(t=>t(n)&&e.add(t))),wi+=e.size,t=e)}}}function Bi(e,t){e.forEach((e=>{try{t(e)}catch(e){hi.catch(e)}}))}function _i(){}var ji={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ci(e,t){if(ji.arr(e)){if(!ji.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Ei=(e,t)=>e.forEach(t);function Mi(e,t,n){if(ji.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Pi=e=>ji.und(e)?[]:ji.arr(e)?e:[e];function Hi(e,t){if(e.size){const n=Array.from(e);e.clear(),Ei(n,t)}}var Ti,Ii,Ai=(e,...t)=>Hi(e,(e=>e(...t))),zi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ri=null,Ni=!1,Li=_i,Wi=e=>{e.to&&(Ii=e.to),e.now&&(hi.now=e.now),void 0!==e.colors&&(Ri=e.colors),null!=e.skipAnimation&&(Ni=e.skipAnimation),e.createStringInterpolator&&(Ti=e.createStringInterpolator),e.requestAnimationFrame&&hi.use(e.requestAnimationFrame),e.batchedUpdates&&(hi.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Li=e.willAdvance),e.frameLoop&&(hi.frameLoop=e.frameLoop)},Vi=new Set,Yi=[],qi=[],Qi=0,Ui={get idle(){return!Vi.size&&!Yi.length},start(e){Qi>e.priority?(Vi.add(e),hi.onStart(Ji)):(Zi(e),hi(Xi))},advance:Xi,sort(e){if(Qi)hi.onFrame((()=>Ui.sort(e)));else{const t=Yi.indexOf(e);~t&&(Yi.splice(t,1),Gi(e))}},clear(){Yi=[],Vi.clear()}};function Ji(){Vi.forEach(Zi),Vi.clear(),hi(Xi)}function Zi(e){Yi.includes(e)||Gi(e)}function Gi(e){Yi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Yi,(t=>t.priority>e.priority)),0,e)}function Xi(e){const t=qi;for(let n=0;n<Yi.length;n++){const r=Yi[n];Qi=r.priority,r.idle||(Li(r),r.advance(e),r.idle||t.push(r))}return Qi=0,(qi=Yi).length=0,(Yi=t).length>0}var Ki="[-+]?\\d*\\.?\\d+",eo=Ki+"%";function to(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var no=new RegExp("rgb"+to(Ki,Ki,Ki)),ro=new RegExp("rgba"+to(Ki,Ki,Ki,Ki)),io=new RegExp("hsl"+to(Ki,eo,eo)),oo=new RegExp("hsla"+to(Ki,eo,eo,Ki)),ao=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,so=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,lo=/^#([0-9a-fA-F]{6})$/,co=/^#([0-9a-fA-F]{8})$/;function uo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ho(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=uo(i,r,e+1/3),a=uo(i,r,e),s=uo(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function fo(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function po(e){return(parseFloat(e)%360+360)%360/360}function mo(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function go(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function yo(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=lo.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ri&&void 0!==Ri[e]?Ri[e]:(t=no.exec(e))?(fo(t[1])<<24|fo(t[2])<<16|fo(t[3])<<8|255)>>>0:(t=ro.exec(e))?(fo(t[1])<<24|fo(t[2])<<16|fo(t[3])<<8|mo(t[4]))>>>0:(t=ao.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=co.exec(e))?parseInt(t[1],16)>>>0:(t=so.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=io.exec(e))?(255|ho(po(t[1]),go(t[2]),go(t[3])))>>>0:(t=oo.exec(e))?(ho(po(t[1]),go(t[2]),go(t[3]))|mo(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var bo=(e,t,n)=>{if(ji.fun(e))return e;if(ji.arr(e))return bo({range:e,output:t,extrapolate:n});if(ji.str(e.output[0]))return Ti(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var vo=1.70158,$o=1.525*vo,wo=vo+1,So=2*Math.PI/3,xo=2*Math.PI/4.5,Fo=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Oo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>wo*e*e*e-vo*e*e,easeOutBack:e=>1+wo*Math.pow(e-1,3)+vo*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-$o)/2:(Math.pow(2*e-2,2)*(($o+1)*(2*e-2)+$o)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*So),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*So)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*xo)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*xo)/2+1,easeInBounce:e=>1-Fo(1-e),easeOutBounce:Fo,easeInOutBounce:e=>e<.5?(1-Fo(1-2*e))/2:(1+Fo(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},ko=Symbol.for("FluidValue.get"),Do=Symbol.for("FluidValue.observers"),Bo=e=>Boolean(e&&e[ko]),_o=e=>e&&e[ko]?e[ko]():e,jo=e=>e[Do]||null;function Co(e,t){const n=e[Do];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Eo=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Mo(this,e)}},Mo=(e,t)=>Io(e,ko,t);function Po(e,t){if(e[ko]){let n=e[Do];n||Io(e,Do,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ho(e,t){const n=e[Do];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Do]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var To,Io=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ao=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,zo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ro=new RegExp(`(${Ao.source})(%|[a-z]+)`,"i"),No=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Lo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Wo=e=>{const[t,n]=Vo(e);if(!t||zi())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Lo.test(n)?Wo(n):n||e},Vo=e=>{const t=Lo.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Yo=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,qo=e=>{To||(To=Ri?new RegExp(`(${Object.keys(Ri).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>_o(e).replace(Lo,Wo).replace(zo,yo).replace(To,yo))),n=t.map((e=>e.match(Ao).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>bo({...e,output:t})));return e=>{const n=!Ro.test(t[0])&&t.find((e=>Ro.test(e)))?.replace(Ao,"");let i=0;return t[0].replace(Ao,(()=>`${r[i++](e)}${n||""}`)).replace(No,Yo)}},Qo="react-spring: ",Uo=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Qo}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Jo=Uo(console.warn);var Zo=Uo(console.warn);function Go(e){return ji.str(e)&&("#"==e[0]||/\d/.test(e)||!zi()&&Lo.test(e)||e in(Ri||{}))}var Xo=zi()?y:b,Ko=()=>{const e=u(!1);return Xo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ea(){const e=h()[1],t=Ko();return()=>{t.current&&e(Math.random())}}var ta=e=>y(e,na),na=[];function ra(e){const t=u();return y((()=>{t.current=e})),t.current}var ia=Symbol.for("Animated:node"),oa=e=>e&&e[ia],aa=(e,t)=>{return n=e,r=ia,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},sa=e=>e&&e[ia]&&e[ia].getPayload(),la=class{constructor(){aa(this,this)}getPayload(){return this.payload||[]}},ca=class extends la{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ji.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ca(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ji.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ji.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},da=class extends ca{constructor(e){super(0),this._string=null,this._toString=bo({output:[e,e]})}static create(e){return new da(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ji.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=bo({output:[this.getValue(),e]})),this._value=0,super.reset()}},ua={dependencies:null},ha=class extends la{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Mi(this.source,((n,r)=>{var i;(i=n)&&i[ia]===i?t[r]=n.getValue(e):Bo(n)?t[r]=_o(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ei(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Mi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ua.dependencies&&Bo(e)&&ua.dependencies.add(e);const t=sa(e);t&&Ei(t,(e=>this.add(e)))}},fa=class extends ha{constructor(e){super(e)}static create(e){return new fa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(pa)),!0)}};function pa(e){return(Go(e)?da:ca).create(e)}function ma(e){const t=oa(e);return t?t.constructor:ji.arr(e)?fa:Go(e)?da:ca}var ga=(e,t)=>{const n=!ji.fun(e)||e.prototype&&e.prototype.isReactComponent;return v(((r,i)=>{const o=u(null),a=n&&$((e=>{o.current=function(e,t){e&&(ji.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[s,l]=function(e,t){const n=new Set;ua.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ha(e),ua.dependencies=null,[e,n]}(r,t),d=ea(),h=()=>{const e=o.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&d()},f=new ya(h,l),p=u();Xo((()=>(p.current=f,Ei(l,(e=>Po(e,f))),()=>{p.current&&(Ei(p.current.deps,(e=>Ho(e,p.current))),hi.cancel(p.current.update))}))),y(h,[]),ta((()=>()=>{const e=p.current;Ei(e.deps,(t=>Ho(t,e)))}));const m=t.getComponentProps(s.getValue());return c.createElement(e,{...m,ref:a})}))},ya=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&hi.write(this.update)}};var ba=Symbol.for("AnimatedComponent"),va=e=>ji.str(e)?e:e&&ji.str(e.displayName)?e.displayName:ji.fun(e)&&e.name||null;function $a(e,...t){return ji.fun(e)?e(...t):e}var wa=(e,t)=>!0===e||!!(t&&e&&(ji.fun(e)?e(t):Pi(e).includes(t))),Sa=(e,t)=>ji.obj(e)?t&&e[t]:e,xa=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Fa=e=>e,Oa=(e,t=Fa)=>{let n=ka;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);ji.und(n)||(r[i]=n)}return r},ka=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Da={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ba(e){const t=function(e){const t={};let n=0;if(Mi(e,((e,r)=>{Da[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Mi(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function _a(e){return e=_o(e),ji.arr(e)?e.map(_a):Go(e)?di.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ja(e){return ji.fun(e)||ji.arr(e)&&ji.obj(e[0])}var Ca={tension:170,friction:26,mass:1,damping:1,easing:Oo.linear,clamp:!1},Ea=class{constructor(){this.velocity=0,Object.assign(this,Ca)}};function Ma(e,t){if(ji.und(t.decay)){const n=!ji.und(t.tension)||!ji.und(t.friction);!n&&ji.und(t.frequency)&&ji.und(t.damping)&&ji.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Pa=[],Ha=class{constructor(){this.changed=!1,this.values=Pa,this.toValues=null,this.fromValues=Pa,this.config=new Ea,this.immediate=!1}};function Ta(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=wa(n.cancel??r?.cancel,t);if(d)f();else{ji.und(n.pause)||(i.paused=wa(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||wa(e,t)),l=$a(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-hi.now()}function h(){l>0&&!di.skipAnimation?(i.delayed=!0,c=hi.setTimeout(f,l),i.pauseQueue.add(u),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...n,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Ia=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ra(e.get()):t.every((e=>e.noop))?Aa(e.get()):za(e.get(),t.every((e=>e.finished))),Aa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),za=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ra=e=>({value:e,cancelled:!0,finished:!1});function Na(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Oa(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=i<=(n.cancelId||0)&&Ra(r)||i!==n.asyncId&&za(r,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Wa,a=new Va;return(async()=>{if(di.skipAnimation)throw La(n),a.result=za(r,!1),u(a),a;f(o);const s=ji.obj(e)?{...e}:{...t,to:e};s.parentId=i,Mi(c,((e,t)=>{ji.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(di.skipAnimation)return La(n),za(r,!1);try{let t;t=ji.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(d),h]),m=za(r.get(),!0,!1)}catch(e){if(e instanceof Wa)m=e.result;else{if(!(e instanceof Va))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return ji.fun(a)&&hi.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function La(e,t){Hi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Wa=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Va=class extends Error{constructor(){super("SkipAnimationSignal")}},Ya=e=>e instanceof Qa,qa=1,Qa=class extends Eo{constructor(){super(...arguments),this.id=qa++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=oa(this);return e&&e.getValue()}to(...e){return di.to(this,e)}interpolate(...e){return Jo(`${Qo}The "interpolate" function is deprecated in v9 (use "to" instead)`),di.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Co(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ui.sort(this),Co(this,{type:"priority",parent:this,priority:e})}},Ua=Symbol.for("SpringPhase"),Ja=e=>(1&e[Ua])>0,Za=e=>(2&e[Ua])>0,Ga=e=>(4&e[Ua])>0,Xa=(e,t)=>t?e[Ua]|=3:e[Ua]&=-3,Ka=(e,t)=>t?e[Ua]|=4:e[Ua]&=-5,es=class extends Qa{constructor(e,t){if(super(),this.animation=new Ha,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ji.und(e)||!ji.und(t)){const n=ji.obj(e)?{...e}:{...t,from:e};ji.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Za(this)||this._state.asyncTo)||Ga(this)}get goal(){return _o(this.animation.to)}get velocity(){const e=oa(this);return e instanceof ca?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ja(this)}get isAnimating(){return Za(this)}get isPaused(){return Ga(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=sa(r.to);!a&&Bo(r.to)&&(i=Pi(_o(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==da?1:a?a[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=ji.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(ji.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!ji.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(m=u==c||u>c==f,m&&(a=-a*r,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*g,u+=a*g}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+o.easing(r)*(c-n),a=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(n=!0)}));const s=oa(this),l=s.getValue();if(t){const e=_o(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return hi.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Za(this)){const{to:e,config:t}=this.animation;hi.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return ji.und(e)?(n=this.queue||[],this.queue=[]):n=[ji.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ia(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),La(this._state,e&&this._lastCallId),hi.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=ji.obj(n)?n[t]:n,(null==n||ja(n))&&(n=void 0),r=ji.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ja(this)||(e.reverse&&([n,r]=[r,n]),r=_o(r),ji.und(r)?oa(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Oa(e,((e,t)=>/^on/.test(t)?Sa(e,n):e))),ss(this,e,"onProps"),ls(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Ta(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Ga(this)||(Ka(this,!0),Ai(o.pauseQueue),ls(this,"onPause",za(this,ts(this,this.animation.to)),this))},resume:()=>{Ga(this)&&(Ka(this,!1),Za(this)&&this._resume(),Ai(o.resumeQueue),ls(this,"onResume",za(this,ts(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ns(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ra(this));const r=!ji.und(e.to),i=!ji.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ra(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!ji.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Ci(u,c);h&&(s.from=u),u=_o(u);const f=!Ci(d,l);f&&this._focus(d);const p=ja(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ma(n={...n},t),t={...n,...t}),Ma(e,t),Object.assign(e,t);for(const t in Ca)null==e[t]&&(e[t]=Ca[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;ji.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(m,$a(t.config,o),t.config!==a.config?$a(a.config,o):void 0);let b=oa(this);if(!b||ji.und(d))return n(za(this,!0));const v=ji.und(t.reset)?i&&!t.default:!ji.und(u)&&wa(t.reset,o),$=v?u:this.get(),w=_a(d),S=ji.num(w)||ji.arr(w)||Go(w),x=!p&&(!S||wa(a.immediate||t.immediate,o));if(f){const e=ma(d);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const F=b.constructor;let O=Bo(d),k=!1;if(!O){const e=v||!Ja(this)&&h;(f||e)&&(k=Ci(_a($),w),O=!k),(Ci(s.immediate,x)||x)&&Ci(m.decay,g)&&Ci(m.velocity,y)||(O=!0)}if(k&&Za(this)&&(s.changed&&!v?O=!0:O||this._stop(l)),!p&&((O||Bo(l))&&(s.values=b.getPayload(),s.toValues=Bo(d)?null:F==da?[1]:Pi(w)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),O)){const{onRest:e}=s;Ei(as,(e=>ss(this,t,e)));const r=za(this,ts(this,l));Ai(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&hi.batchedUpdates((()=>{s.changed=!v,e?.(r,this),v?$a(a.onRest,r):s.onStart?.(r,this)}))}v&&this._set($),p?n(Na(t.to,t,this._state,this)):O?this._start():Za(this)&&!f?this._pendingCalls.add(n):n(Aa($))}_focus(e){const t=this.animation;e!==t.to&&(jo(this)&&this._detach(),t.to=e,jo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Bo(t)&&(Po(t,this),Ya(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Bo(e)&&Ho(e,this)}_set(e,t=!0){const n=_o(e);if(!ji.und(n)){const e=oa(this);if(!e||!Ci(n,e.getValue())){const r=ma(n);e&&e.constructor==r?e.setValue(n):aa(this,r.create(n)),e&&hi.batchedUpdates((()=>{this._onChange(n,t)}))}}return oa(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ls(this,"onStart",za(this,ts(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),$a(this.animation.onChange,e,this)),$a(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;oa(this).reset(_o(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Za(this)||(Xa(this,!0),Ga(this)||this._resume())}_resume(){di.skipAnimation?this.finish():Ui.start(this)}_stop(e,t){if(Za(this)){Xa(this,!1);const n=this.animation;Ei(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Co(this,{type:"idle",parent:this});const r=t?Ra(this.get()):za(this.get(),ts(this,e??n.to));Ai(this._pendingCalls,r),n.changed&&(n.changed=!1,ls(this,"onRest",r,this))}}};function ts(e,t){const n=_a(t);return Ci(_a(e.get()),n)}function ns(e,t=e.loop,n=e.to){const r=$a(t);if(r){const i=!0!==r&&Ba(r),o=(i||e).reverse,a=!i||i.reset;return rs({...e,loop:t,default:!1,pause:void 0,to:!o||ja(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function rs(e){const{to:t,from:n}=e=Ba(e),r=new Set;return ji.obj(t)&&os(t,r),ji.obj(n)&&os(n,r),e.keys=r.size?Array.from(r):null,e}function is(e){const t=rs(e);return ji.und(t.default)&&(t.default=Oa(t)),t}function os(e,t){Mi(e,((e,n)=>null!=e&&t.add(n)))}var as=["onStart","onRest","onChange","onPause","onResume"];function ss(e,t,n){e.animation[n]=t[n]!==xa(t,n)?Sa(t[n],e.key):void 0}function ls(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var cs=["onStart","onChange","onRest"],ds=1,us=class{constructor(e,t){this.id=ds++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];ji.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(rs(e)),this}start(e){let{queue:t}=this;return e?t=Pi(e).map(rs):this.queue=[],this._flush?this._flush(this,t):(bs(this,t),hs(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ei(Pi(t),(t=>n[t].stop(!!e)))}else La(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ji.und(e))this.start({pause:!0});else{const t=this.springs;Ei(Pi(e),(e=>t[e].pause()))}return this}resume(e){if(ji.und(e))this.start({pause:!1});else{const t=this.springs;Ei(Pi(e),(e=>t[e].resume()))}return this}each(e){Mi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Hi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Hi(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Hi(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}hi.onFrame(this._onFrame)}};function hs(e,t){return Promise.all(t.map((t=>fs(e,t)))).then((t=>Ia(e,t)))}async function fs(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=ji.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=ji.arr(i)||ji.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ei(cs,(n=>{const r=t[n];if(ji.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ai(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===xa(t,"cancel");(d||f&&u.asyncId)&&h.push(Ta(++e._lastAsyncId,{props:t,state:u,actions:{pause:_i,resume:_i,start(t,n){f?(La(u,e._lastAsyncId),n(Ra(e))):(t.onRest=s,n(Na(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Ia(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=ns(t,a,i);if(n)return bs(e,[n]),fs(e,n,!0)}return l&&hi.batchedUpdates((()=>l(p,e,e.item))),p}function ps(e,t){const n={...e.springs};return t&&Ei(Pi(t),(e=>{ji.und(e.keys)&&(e=rs(e)),ji.obj(e.to)||(e={...e,to:void 0}),ys(n,e,(e=>gs(e)))})),ms(e,n),n}function ms(e,t){Mi(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Po(t,e))}))}function gs(e,t){const n=new es;return n.key=e,t&&Po(n,t),n}function ys(e,t,n){t.keys&&Ei(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function bs(e,t){Ei(t,(t=>{ys(e.springs,t,(t=>gs(t,e)))}))}var vs,$s,ws=({children:e,...t})=>{const n=w(Ss),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=function(e,t){const[n]=h((()=>({inputs:t,result:e()}))),r=u(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return y((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:r,immediate:i})),[r,i]);const{Provider:o}=Ss;return c.createElement(o,{value:t},e)},Ss=(vs=ws,$s={},Object.assign(vs,c.createContext($s)),vs.Provider._context=vs,vs.Consumer._context=vs,vs);ws.Provider=Ss.Provider,ws.Consumer=Ss.Consumer;var xs=()=>{const e=[],t=function(t){Zo(`${Qo}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ei(e,((e,i)=>{if(ji.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ei(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ei(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ei(e,((e,n)=>{const r=ji.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Ei(e,((e,r)=>{if(ji.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ei(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ei(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return ji.fun(e)?e(n,t):e};return t._getProps=n,t};function Fs(e,t){const n=ji.fun(e),[[r],i]=function(e,t,n){const r=ji.fun(t)&&t;r&&!n&&(n=[]);const i=S((()=>r||3==arguments.length?xs():void 0),[]),o=u(0),a=ea(),s=S((()=>({ctrls:[],queue:[],flush(e,t){const n=ps(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?hs(e,t):new Promise((r=>{ms(e,n),s.queue.push((()=>{r(hs(e,t))})),a()}))}})),[]),l=u([...s.ctrls]),c=[],d=ra(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=l.current[i]||(l.current[i]=new us(null,s.flush)),n=r?r(i,e):t[i];n&&(c[i]=is(n))}}S((()=>{Ei(l.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,h(d,e)}),[e]),S((()=>{h(0,Math.min(d,e))}),n);const f=l.current.map(((e,t)=>ps(e,c[t]))),p=w(ws),m=ra(p),g=p!==m&&function(e){for(const t in e)return!0;return!1}(p);Xo((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],Ei(e,(e=>e()))),Ei(l.current,((e,t)=>{i?.add(e),g&&e.start({default:p});const n=c[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ta((()=>()=>{Ei(s.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var Os=class extends Qa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=bo(...t);const n=this._get(),r=ma(n);aa(this,r.create(n))}advance(e){const t=this._get();Ci(t,this.get())||(oa(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ds(this._active)&&Bs(this)}_get(){const e=ji.arr(this.source)?this.source.map(_o):Pi(_o(this.source));return this.calc(...e)}_start(){this.idle&&!Ds(this._active)&&(this.idle=!1,Ei(sa(this),(e=>{e.done=!1})),di.skipAnimation?(hi.batchedUpdates((()=>this.advance())),Bs(this)):Ui.start(this))}_attach(){let e=1;Ei(Pi(this.source),(t=>{Bo(t)&&Po(t,this),Ya(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ei(Pi(this.source),(e=>{Bo(e)&&Ho(e,this)})),this._active.clear(),Bs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Pi(this.source).reduce(((e,t)=>Math.max(e,(Ya(t)?t.priority:0)+1)),0))}};function ks(e){return!1!==e.idle}function Ds(e){return!e.size||Array.from(e).every(ks)}function Bs(e){e.idle||(e.idle=!0,Ei(sa(e),(e=>{e.done=!0})),Co(e,{type:"idle",parent:e}))}di.assign({createStringInterpolator:qo,to:(e,t)=>new Os(e,t)});var _s=/^--/;function js(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||_s.test(e)||Es.hasOwnProperty(e)&&Es[e]?(""+t).trim():t+"px"}var Cs={};var Es={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ms=["Webkit","Ms","Moz","O"];Es=Object.keys(Es).reduce(((e,t)=>(Ms.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Es);var Ps=/^(matrix|translate|scale|rotate|skew)/,Hs=/^(translate)/,Ts=/^(rotate|skew)/,Is=(e,t)=>ji.num(e)&&0!==e?e+t:e,As=(e,t)=>ji.arr(e)?e.every((e=>As(e,t))):ji.num(e)?e===t:parseFloat(e)===t,zs=class extends ha{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Is(e,"px"))).join(",")})`,As(e,0)]))),Mi(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Ps.test(t)){if(delete r[t],ji.und(e))return;const n=Hs.test(t)?"px":Ts.test(t)?"deg":"";i.push(Pi(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Is(i,n)})`,As(i,0)]:e=>[`${t}(${e.map((e=>Is(e,n))).join(",")})`,As(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Rs(i,o)),super(r)}},Rs=class extends Eo{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ei(this.inputs,((n,r)=>{const i=_o(n[0]),[o,a]=this.transforms[r](ji.arr(i)?i:n.map(_o));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ei(this.inputs,(e=>Ei(e,(e=>Bo(e)&&Po(e,this)))))}observerRemoved(e){0==e&&Ei(this.inputs,(e=>Ei(e,(e=>Bo(e)&&Ho(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Co(this,e)}};di.assign({batchedUpdates:k,createStringInterpolator:qo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ns,Ls=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ha(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=va(e)||"Anonymous";return(e=ji.str(e)?o[e]||(o[e]=ga(e,i)):e[ba]||(e[ba]=ga(e,i))).displayName=`Animated(${t})`,e};return Mi(e,((t,n)=>{ji.arr(e)&&(n=va(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Cs[t]||(Cs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=js(t,r[t]);_s.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new zs(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ws=Ls.animated,Vs={exports:{}};Ns=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=d(i),o=d(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,n,null,i)}catch(e){d=e}if(!d||d instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in o)){o[d.message]=!0;var h=l?l():"";r("Failed "+n+" type: "+d.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return b(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=v(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return m((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],l=v(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return y(r,i,o,c,$(d));var u=d(s,c,r,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],d=v(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=o({},t[n],e);for(var h in u){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,i,l,h,$(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,r,i,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,l,c,d,h,f){if(c=c||u,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return v(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+$(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[d]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!b(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case d:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case u:case m:case p:case s:return g;default:return t}}case r:return t}}}var w=c,S=d,x=l,F=s,O=n,k=u,D=i,B=m,_=p,j=r,C=a,E=o,M=h,P=!1;function H(e){return $(e)===d}t.AsyncMode=w,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=F,t.Element=O,t.ForwardRef=k,t.Fragment=D,t.Lazy=B,t.Memo=_,t.Portal=j,t.Profiler=C,t.StrictMode=E,t.Suspense=M,t.isAsyncMode=function(e){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),H(e)||$(e)===c},t.isConcurrentMode=H,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return $(e)===u},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===r},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===o},t.isSuspense=function(e){return $(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===y||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),h=r(r({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),f=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=u();return(0,i.useEffect)((function(){p&&n&&n(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Ys,qs=Vs.exports=Ns(d);!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ys||(Ys={}));var Qs={exports:{}};Qs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],f=d&&d[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(m,g,p,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,b,v,$)):new Date(m,g,p,y,b,v,$)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Us,Js,Zs=ee(Qs.exports),Gs={exports:{}},Xs=ee(Gs.exports=(Us={year:0,month:1,day:2,hour:3,minute:4,second:5},Js={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Js[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Js[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=Us[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Ks={exports:{}};Ks.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=g;var w="$isDayjsObject",S=function(e){return e instanceof k||!(!e||!e[w])},x=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},O=b;O.l=x,O.i=S,O.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,d=O.p(e),f=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var v=this.$locale().weekStart||0,$=(m<v?m+7:m)-v;return f(r?y-$:y+(6-$),g);case s:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case o:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var p=O.p(d),m=function(e){var t=F(f);return O.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return O.s(o%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return O.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=this,g=O.p(h),y=F(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return O.m(m,y)};switch(g){case u:p=$()/12;break;case c:p=$();break;case d:p=$()/3;break;case l:p=(v-b)/6048e5;break;case s:p=(v-b)/864e5;break;case a:p=v/n;break;case o:p=v/t;break;case i:p=v/e;break;default:p=v}return f?p:O.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=k.prototype;return F.prototype=D,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,k,F),e.$i=!0),F},F.locale=x,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=$[v],F.Ls=$,F.p={},F}();var el=ee(Ks.exports),tl={exports:{}};tl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var nl=ee(tl.exports),rl={exports:{}};rl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var il=ee(rl.exports),ol={exports:{}};ol.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var al,sl=ee(ol.exports);el.extend(nl),el.extend(il),el.extend(sl),el.extend(Zs),el.extend(Xs),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=el(t).startOf("week");return ll(n).map((e=>cl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return cl(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(el(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+el(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=el(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?el(r):void 0,i?el(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(al||(al={}));const ll=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},cl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},dl=[1,3,5,7,8,10,12],ul=[4,6,9,11];var hl,fl,pl,ml;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":dl.includes(o)?Math.min(i,31).toString():ul.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=el(e,n);return el(t,n).diff(r,"minute")},e.toDayjs=e=>e?el(e):el(),e.addMinutesToTime=(e,t,n="HH:mm")=>el(e,n).add(t,"minutes").format(n)}(hl||(hl={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!el(e).isBefore(r,"day"))||!(!i||!el(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(el(e).isValid())return e}return""}}(fl||(fl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(pl||(pl={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ml||(ml={}));const gl=a.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return l`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,yl=a.div`
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
`,bl=({show:e=!1,rootId:n,onOverlayClick:r,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:s=!1,enableOverlayClick:l=!1,zIndex:c,id:f})=>{const[p,m]=h(null),[g,b]=h(),[v]=h((()=>pl.generate())),$=j(),w=u(),S=u(null),x=i&&d.cloneElement(i,{ref:S}),O=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root",k=(null!=c?c:g)?99999:99998;(e=>{const t=B();y((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Ys.Change,n)}),[t,e]),y((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Ys.Change,n)};return null==t||t.events.on(Ys.Ready,n),()=>null==t?void 0:t.events.off(Ys.Ready,n)}),[t,e])})(k),y((()=>(M(),m(_()),()=>{I(),H().length<1&&P("remove")})),[]),y((()=>{if(e){const e=E();D(e),T();const t=setTimeout((()=>{P("add")}),200);return()=>clearTimeout(t)}{I();const e=setTimeout((()=>{H().length<1&&P("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{w.current=e,b(e)},_=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>H().length>0,M=()=>{if(!document.getElementById($l)){const e=document.createElement("style");e.id=$l;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${wl} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${wl}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},P=e=>{const t=document.body.classList.contains(wl);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(wl):document.body.classList.add(wl)},H=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},T=()=>{const e=H();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},I=()=>{const e=H();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},A=e=>{var t;const n=null===(t=S.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&l&&(e.preventDefault(),r())};return p?F.createPortal(t(gl,Object.assign({id:O,"data-testid":O,$show:e,$zIndex:k},{children:i&&t(C,Object.assign({id:$},{children:t(yl,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(g?.5:.8),$backgroundBlur:a,$disableTransition:s,onClick:A},{children:x}))}))})),p):null},vl=e=>t(_,{children:t(bl,Object.assign({},e))}),$l="lifesg-ds-overlay-stylesheet",wl="lifesg-ds-overlay-open",Sl=a.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${bn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,xl=e=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:c,dismissKeyboardOnShow:d=!0}=e,u=X(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,p]=h(),[m,g]=h();y((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),y((()=>{var e,t;r&&d&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{const e=.01*window.visualViewport.height;p(e),g(window.visualViewport.offsetTop)};return t(vl,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:c,id:n,rootId:s,zIndex:l},{children:t(Sl,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:f,offsetTop:m},u,{children:o}))}))},Fl=a.div`
    border-radius: 0.5rem;
    background: ${mn.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Ol=a.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${mn.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${bn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,kl=a(Xn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${mn.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${mn.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${bn.mobileL} {
        right: 1.25rem;
    }
`,Dl=e=>{const{textSize:t}=e||{};return l`
        // Text styling
        ${t&&An(t,"regular")}

        strong {
            font-family: ${kn.OpenSans.Semibold};
            ${t&&An(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${kn.OpenSans.Semibold};
            ${t&&An(t,"semibold")}
            color: ${mn.Primary};
            text-decoration: none;

            svg {
                color: ${mn.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${mn.Secondary};

                svg {
                    color: ${mn.Secondary};
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
    `},Bl=a.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,_l=a((e=>{var{children:n}=e,r=X(e,["children"]);const i=r["data-testid"]||"card";return t(Fl,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Rn.Body,{children:n}):n}))}))`
    color: ${mn.Neutral[1]};
    ${Dl({textSize:"BodySmall"})}

    ${bn.mobileL} {
        display: none;
    }
`,jl=a((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=X(n,["id","children","onClose","showCloseButton"]);return e(Ol,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(kl,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(z,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Cl=a.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${mn.Neutral[1]};
    ${Dl({textSize:"BodySmall"})}
`,El=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=X(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=qs.useMediaQuery({maxWidth:gn.mobileL}),d=()=>{a&&a()},u=()=>"string"==typeof i?t(Rn.BodySmall,{children:i}):i;return e(n,{children:[o&&t(Bl,Object.assign({"data-testid":l},s,{children:t(_l,{children:u()})})),c&&t(xl,Object.assign({show:o,onOverlayClick:d},{children:t(jl,Object.assign({onClose:d},{children:t(Cl,{children:u()})}))}))]})},Ml=a.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Pl=r=>{var{children:i,popoverContent:o,trigger:a="click",position:s="top",zIndex:l,rootNode:c,onPopoverAppear:d,onPopoverDismiss:f}=r,p=X(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[m,g]=h(!1),b=u(),v=u(),$=qs.useMediaQuery({maxWidth:vn.mobileL}),{refs:w,floatingStyles:S}=E({open:m,placement:s,whileElementsMounted:M,middleware:[P(16),H(),T({limiter:I()})]}),x=(()=>{const[e,t]=h(void 0),n=B();return y((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Ys.Change,e),n.events.emit(Ys.Ready),()=>n.events.off(Ys.Change,e)}),[n]),e})();y((()=>{if(!$&&m)return document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}}),[m]);const F=e=>{var t,n;(null===(t=b.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=v.current)||void 0===n?void 0:n.contains(e.target))||(g(!1),f&&f())},O=()=>{g(!1)};return e(n,{children:[m&&t(A,Object.assign({root:c},{children:t("div",Object.assign({ref:e=>{v.current=e,w.setFloating(e)},style:Object.assign(Object.assign({},S),{zIndex:null!=l?l:x})},{children:"function"==typeof o?o():t(El,Object.assign({visible:!0,onMobileClose:O},{children:o}))}))})),t(Ml,Object.assign({ref:e=>{b.current=e,w.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||$)&&(g(!m),!m&&d&&d(),m&&f&&f())},onMouseEnter:()=>{"hover"!==a||$||g(!0)},onMouseLeave:()=>{"hover"===a&&m&&!$&&g(!1)}},p,{children:i}))]})},Hl=a.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${mn.Primary};
    }
`,Tl=a.div`
    display: inline;
    position: relative;
    width: fit-content;
`,Il=({addon:e,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=e;return t(Pl,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:t(Tl,{children:t(Hl,{children:o||t(D,{id:`${i}-icon`})})})}))},Al=a.div`
    background-color: ${e=>e.$collapsible?mn.Neutral[7](e):mn.Neutral[8](e)};

    ${bn.tablet} {
        background-color: ${mn.Neutral[7]};
    }
`,zl=a.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${mn.Neutral[5]};

    ${bn.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Rl=a.div`
    display: flex;
    align-items: center;

    background-color: ${mn.Neutral[8]};

    ${bn.tablet} {
        background-color: transparent;
    }
`,Nl=a(Xn)`
    margin: 0 0 0 auto;
`,Ll=a(R)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${mn.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${mn.Neutral[2]};
    }
`,Wl=a(Rn.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${bn.tablet} {
        ${An("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,Vl=a(Ws.div)`
    overflow: hidden;
`,Yl=a.div`
    padding: 1rem 1.25rem;
`,ql=a(Ws.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Ql=a(Zn.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,Ul=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:o,onExpandChange:a,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:d=!0,title:u,addon:f,children:p}=n,m=X(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:g,rootNode:b}=w(hr),v="mobile"===g,[$,S]=h(j()),[x,F]=h(s),O=!v&&r,k=li(),D=li(),B=Fs({height:$?k.height:0}),_=x?null!=l?l:Math.min(.5*D.height,216):D.height;y((()=>{S(j())}),[r,o]);function j(){return!!v||(fr(o)?!r||i:o)}return e(Al,Object.assign({$collapsible:O},{children:[t(zl,{$showDivider:c,$showMobileDivider:d}),(u||O)&&e(Rl,{children:[u&&e(Wl,Object.assign({weight:"semibold"},{children:[u," ",f&&("popover"===f.type?t(Il,{addon:f,rootNode:v?b:void 0}):null)]})),O&&t(Nl,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;fr(o)&&S(e),a&&a(e)},"aria-label":$?"Collapse":"Expand"},{children:t(Ll,{$expanded:$})}))]}),t(Vl,Object.assign({"data-testid":"expandable-container","data-expanded":$,style:B},{children:t("div",Object.assign({ref:k.ref},{children:e(Yl,Object.assign({},m,{children:[t(ql,Object.assign({"data-testid":"minimisable-container",$height:_,$minimisable:s},{children:t("div",Object.assign({ref:D.ref},{children:t("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof p?p(g,{minimised:x}):p}))}))})),s&&e(Ql,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{F(!x)}},{children:["View ",x?"more":"less"]}))]}))}))}))]}))},Jl=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?l`
                    color: ${mn.Primary};
                `:l`
                    color: ${mn.Neutral[4]};
                `};
    }
`,Zl=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?V:W,{});break;case"radio":o=t(n?L:N,{});break;case"tick":o=t(Y,{});break;case"cross":o=t(z,{});break;default:o=null}return t(Jl,Object.assign({className:i,$active:n,disabled:r},{children:o}))},Gl=a.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=mn.Validation.Red.Background(e),n=mn.Validation.Red.Border(e);break;case"success":t=mn.Validation.Green.Background(e),n=mn.Validation.Green.Border(e);break;case"warning":default:t=mn.Validation.Orange.Background(e),n=mn.Validation.Orange.Border(e);break;case"info":t=mn.Validation.Blue.Background(e),n=mn.Validation.Blue.Border(e);break;case"description":t=mn.Neutral[7](e),n=mn.Neutral[4](e)}return l`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${mn.Neutral[1]};
    ${e=>"small"===e.$sizeType?Dl({textSize:"H6"}):Dl({textSize:"BodySmall"})}
`,Xl=a.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&l`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=mn.Validation.Red.Icon(e);break;case"success":t=mn.Validation.Green.Icon(e);break;case"warning":default:t=mn.Validation.Orange.Icon(e);break;case"info":t=mn.Validation.Blue.Icon(e);break;case"description":t=mn.Neutral[4](e)}return l`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Kl=a(Rn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?l`
                ${An("H6","semibold")}
                margin-top: 0.25rem;
            `:l`
                ${An("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${mn.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${mn.Primary};
    }
`,ec=a.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,tc=a.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,nc=a.button`
    ${e=>"small"===e.$sizeType?l`
                ${An("H6","semibold")}
            `:l`
                ${An("H5","semibold")}
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

    color: ${mn.Primary};
`,rc=a(r)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,ic=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,oc=(a.ol`
    ${e=>ic(e.bottomMargin)}
    margin-left: ${3}rem;

    ${bn.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>An(e.size,"regular")}
        position: relative;
        color: ${mn.Neutral[1]};
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
    ${e=>ic(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>An(e.size,"regular")}
        color: ${mn.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),ac=e=>{var{size:n="Body",children:r}=e,i=X(e,["size","children"]);return t(oc,Object.assign({size:n},i,{children:r}))},sc=a.div`
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
                        border-color: ${mn.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${mn.Shadow.Red};
                        }
                    `:e.$disabled?l`
                        border-color: transparent;
                    `:l`
                        border-color: transparent;

                        :hover {
                            background: ${mn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?l`
                        border-color: ${mn.Neutral[5]};
                    `:e.$disabled&&e.$selected?l`
                        border-color: ${mn.Neutral[4]};
                    `:e.$error?l`
                        border-color: ${mn.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${mn.Shadow.Red};
                        }
                    `:e.$selected?l`
                        border-color: ${mn.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${mn.Shadow.Accent};
                        }
                    `:l`
                        background: ${mn.Neutral[8]};
                        border-color: ${mn.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${mn.Shadow.Accent};
                            border-color: ${mn.Accent.Light[1]};
                        }
                    `}
`,lc=a.input`
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
`,cc=a.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,dc=a.label`
    ${e=>e.$selected&&!e.$indicator?l`
                ${An("H4","semibold")}
            `:l`
                ${An("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${bn.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${bn.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${mn.Neutral[1]};

    ${e=>e.$disabled?l`
                color: ${mn.Neutral[3]};
            `:e.$selected?l`
                color: ${mn.Primary};
            `:void 0}
`,uc=a.div`
    ${An("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${In("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?l`
                color: ${mn.Neutral[3]};
            `:e.$selected?l`
                color: ${mn.Primary};
            `:l`
                color: ${mn.Neutral[1]};
            `}
`,hc=a.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?l`
                        background: ${mn.Neutral[8]};
                    `:e.$disabled?l``:l`
                        :hover {
                            background: ${mn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?l`
                        background: ${mn.Neutral[6]};
                    `:e.$error?l`
                        background: ${mn.Neutral[8]};
                    `:e.$selected?l`
                        background: ${mn.Accent.Light[5]};
                    `:l`
                        background: ${mn.Neutral[8]};
                    `}
`,fc=a.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,pc=a.button`
    color: ${e=>e.$disabled?mn.Neutral[3]:mn.Validation.Red.Icon};
    white-space: nowrap;
    ${An("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,mc=a.button`
    color: ${e=>e.disabled?mn.Neutral[3]:mn.Primary};
    ${An("H4","semibold")}
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
`,gc=a.div`
    width: 100%;
    color: ${e=>e.$disabled?mn.Neutral[3]:mn.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,yc=a((n=>{var{type:r,className:i,children:o,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:c=!1,customIcon:d,maxCollapsedHeight:u}=n,f=X(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,m]=h(!1),[g,b]=h(!1),{height:v,ref:$}=li();y((()=>{w()}),[u,v]);const w=()=>{m(!u),b(S())},S=()=>!!u&&v>u;return e(Gl,Object.assign({className:i,$type:r,$sizeType:l,"data-testid":f["data-testid"]},{children:[c&&t(Xl,Object.assign({$sizeType:l,$type:r},{children:(()=>{if(r&&d)return d;switch(r){case"success":return t(Z,{});case"warning":return t(J,{});case"error":return t(U,{});case"info":case"description":return t(D,{});default:return null}})()})),e(ec,{children:[e(tc,Object.assign({$maxCollapsedHeight:S()?u:void 0,$showMore:p,$hasActionLink:!!a},{children:[t("div",Object.assign({ref:$},{children:o})),a&&e(Kl,Object.assign({"data-testid":"action-link",$type:r,$sizeType:l},a,{children:[a.children,s||t(Q,{})]}))]})),g&&e(nc,Object.assign({$sizeType:l,$type:r,type:"button",onClick:()=>m(!p)},{children:["Show ",p?"less":"more",t(rc,{$expanded:p})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,bc=a.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Dl({textSize:"BodySmall"})}

    ${e=>e.$disabled?l`
                color: ${mn.Neutral[3]};
            `:e.$selected?l`
                color: ${mn.Primary};
            `:l`
                color: ${mn.Neutral[1]};
            `}
`,vc=a(Rn.BodySmall)`
    color: ${e=>e.$disabled?mn.Neutral[3]:mn.Validation.Red.Text};
`,$c=a(ac)`
    li {
        color: ${e=>e.$disabled?mn.Neutral[3]:mn.Validation.Red.Text};
    }
`,wc=a(Ul)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${bn.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${bn.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,Sc=a.div`
    display: flex;
    flex-direction: column;

    ${bn.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,xc=a.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${An("BodySmall","regular")}
    ${e=>e.$selected&&l`
            color: ${mn.Primary};
        `}
`,Fc=a.input`
    appearance: none;
`,Oc=a(Zl)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${Fc}:focus-visible + & {
        outline: 2px solid ${mn.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,kc=a((({type:r="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:f,name:p,id:m,className:g,compositeSection:b,removable:v,onRemove:$,"data-testid":w,onChange:x,useContentWidth:F})=>{const{collapsible:O=!0,errors:k,children:D,initialExpanded:B}=b||{},[_,j]=h(o),[C,E]=h(B),M=S((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[P]=h(pl.generate()),H=m?`${m}`:`tg-${P}`,T=u();y((()=>{j(o)}),[o]),y((()=>{_&&E(null==B||B)}),[_]);const I=e=>{if(!d){if(x)return void x(e);switch(r){case"checkbox":j((e=>!e));break;case"radio":case"yes":case"no":_||j(!0)}}},A=()=>{d||E(!C)},z=()=>{d||!$||$()},N=()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(Zl,{type:e,active:_,disabled:d})},L=()=>{if(!c)return null;let e;return e="function"==typeof c?c():c,t(uc,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:_},{children:e}))},W=()=>{const n=!C&&!M;return O&&e(mc,Object.assign({$paddingTopRequired:n,disabled:d,onClick:A,"data-testid":C?"collapse-button":"expand-button"},{children:[C?"Show less":"Show more",t(C?q:R,{"aria-hidden":!0})]}))},V=r=>e(n,{children:[t(vc,Object.assign({weight:"semibold",$disabled:d},{children:"Error"})),t($c,Object.assign({$disabled:d},{children:null==r?void 0:r.map(((e,n)=>t("li",Object.assign({id:`${H}-error-list-item-${n}`},{children:t(vc,Object.assign({weight:"semibold",$disabled:d},{children:e}))}),n)))}))]});return e(sc,Object.assign({$selected:_,$disabled:d,className:g,$styleType:a,$error:f,$indicator:i,$useContentWidth:F,id:m,"data-testid":w},{children:[e(hc,Object.assign({id:`${H}-header-container`,$disabled:d,$error:f,$selected:_,$indicator:i,$styleType:a},{children:[e(fc,Object.assign({$addPadding:v},{children:[t(lc,{ref:T,name:p,id:`${H}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:I,checked:_}),i&&N(),e(cc,{children:[t(dc,Object.assign({htmlFor:`${H}-input`,$selected:_,$indicator:i,$disabled:d,"data-testid":`${H}-toggle-label`,$maxLines:l},{children:s})),c&&L()]})]})),v&&t(pc,Object.assign({type:"button",$disabled:d,onClick:z,id:`${H}-remove-button`},{children:"Remove"}))]})),D&&e("div",{children:[(!O||C)&&t(bc,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:d},{children:D})),O&&!C&&M&&t(gc,Object.assign({$disabled:d,onClick:A,id:`${H}-error-alert`},{children:t(yc,Object.assign({type:d?"description":"error",className:g,showIcon:!0},{children:Array.isArray(k)?V(k):k}))})),W()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,Dc=a(Zn.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${bn.tablet} {
        margin: 0 0 1rem 0;
    }
`,Bc=a.div`
    background-color: ${mn.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_c=Object.assign((r=>{var{toggleFilterButtonLabel:a="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:f,onDone:p,children:m}=r,g=X(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[b,v]=h(!1),$=u(null),w=u(null),S=qs.useMediaQuery({maxWidth:gn.tablet});y((()=>{S||F()}),[S]);const x=()=>{v(!0)},F=()=>{v(!1),f&&f()},O=()=>{v(!1),p&&p()},k=()=>{d&&d()},D=e=>"function"==typeof m?m(e):m,B=n=>e(or,{children:["mobile"===n&&t(sr,Object.assign({onClick:F,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:t(o,{})})),t(ar,Object.assign({weight:"semibold"},{children:l})),t(lr,Object.assign({styleType:"link",type:"button",onClick:k,disabled:c},{children:"Clear"}))]});return t("div",Object.assign({},g,{children:t(hr.Provider,S?Object.assign({value:{mode:"mobile",rootNode:$}},{children:e(n,{children:[t(cr,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:x,type:"button",icon:t(i,{})},{children:a})),t(vl,Object.assign({show:b,disableTransition:!0},{children:t(rr,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e(nr,Object.assign({ref:$},{children:[B("mobile"),t(ir,{children:D("mobile")}),t(dr,{children:t(ur,Object.assign({onClick:O,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:w}},{children:e(tr,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w},{children:[B("default"),D("default")]}))}))}))}),{Item:Ul,Page:({onDismiss:n,onDone:r,children:i})=>e(Bc,{children:[t(sr,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:t(G,{})})),t(ir,{children:i}),t(dr,{children:t(ur,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:o,onSelect:a,labelExtractor:s,valueExtractor:l,useToggleContentWidth:c}=r,d=X(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:f}=w(hr),[p,m]=h(i||[]),[g,b]=h(),[v,S]=h(o.length),x=u(),F=u(),O=e=>()=>{const t=[...p],n=p.findIndex((t=>B(t)===B(e)));n>=0?t.splice(n,1):t.push(e),m(t),null==a||a(t)},k=()=>{const e=p.length?[]:o;m(e),null==a||a(e)},D=e=>{var t;return s?s(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},B=e=>{var t;return l?l(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},_=$((()=>{if(!x.current)return void b(void 0);const e=Array.from(x.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}S(t),b(n>2?r-8:void 0)}),[]);y((()=>{i!==p&&m(i||[])}),[i]),y((()=>{"default"===f?(()=>{const e=F.current?F.current.offsetTop+F.current.clientHeight:void 0;b(e)})():_()}),[o]),li({handleWidth:"mobile"===f,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:x,onResize:_});return t(wc,Object.assign({minimisable:o.length>5,minimisedHeight:g},d,{children:(r,{minimised:i})=>e(n,{children:[o.length<3?null:t(Dc,Object.assign({styleType:"link",type:"button",onClick:k},{children:p.length?"Clear all":"Select all"})),t(Sc,Object.assign({role:"group","aria-label":d.title,ref:x},{children:o.map(((n,o)=>"default"===r?((n,r,i)=>{const o=D(n),a=B(n),s=!!p.find((e=>B(e)===a));return e(xc,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?F:void 0},{children:[t(Fc,{type:"checkbox",checked:s,onChange:O(n)}),t(Oc,{type:"checkbox",active:s}),o]}),a)})(n,o,i):((e,n,r)=>{const i=D(e),o=B(e),a=!!p.find((e=>B(e)===o));return t(kc,Object.assign({type:"checkbox",checked:a,$visible:!r||g&&n<=v,onChange:O(e),useContentWidth:c},{children:i}),o)})(n,o,i)))}))]})}))}});export{_c as Filter};
//# sourceMappingURL=index.js.map
