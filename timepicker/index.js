import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as s,useState as o,isValidElement as a,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,forwardRef as m,useCallback as g,useContext as b,useMemo as p}from"react";import f,{css as y,keyframes as v}from"styled-components";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as w}from"@lifesg/react-icons/chevron-up";import{findDOMNode as $,unstable_batchedUpdates as F}from"react-dom";import{ArrowRightIcon as C}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as E}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as D}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as k}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as M}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as _}from"@lifesg/react-icons";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CircleIcon as A}from"@lifesg/react-icons/circle";import{CircleDotIcon as S}from"@lifesg/react-icons/circle-dot";import{CrossIcon as z}from"@lifesg/react-icons/cross";import{SquareIcon as B}from"@lifesg/react-icons/square";import{SquareTickFillIcon as I}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as j}from"@lifesg/react-icons/tick";function T(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var R=Array.isArray,H="object"==typeof P&&P&&P.Object===Object&&P,V="object"==typeof self&&self&&self.Object===Object&&self,Y=H||V||Function("return this")(),N=Y.Symbol,W=N,U=Object.prototype,q=U.hasOwnProperty,Q=U.toString,Z=W?W.toStringTag:void 0;var X=function(e){var r=q.call(e,Z),t=e[Z];try{e[Z]=void 0;var n=!0}catch(e){}var i=Q.call(e);return n&&(r?e[Z]=t:delete e[Z]),i},G=Object.prototype.toString;var J=X,K=function(e){return G.call(e)},ee=N?N.toStringTag:void 0;var re=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?J(e):K(e)};var te=re,ne=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==te(e)},se=R,oe=ie,ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var de=function(e,r){if(se(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!oe(e))||(le.test(e)||!ae.test(e)||null!=r&&e in Object(r))};var ce=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ue=re,he=ce;var me,ge=function(e){if(!he(e))return!1;var r=ue(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},be=Y["__core-js_shared__"],pe=(me=/[^.]+$/.exec(be&&be.keys&&be.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var fe=function(e){return!!pe&&pe in e},ye=Function.prototype.toString;var ve=ge,xe=fe,we=ce,$e=function(e){if(null!=e){try{return ye.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,Ce=Function.prototype,Ee=Object.prototype,De=Ce.toString,ke=Ee.hasOwnProperty,Me=RegExp("^"+De.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _e=function(e,r){return null==e?void 0:e[r]},Oe=function(e){return!(!we(e)||xe(e))&&(ve(e)?Me:Fe).test($e(e))},Ae=_e;var Se=function(e,r){var t=Ae(e,r);return Oe(t)?t:void 0},ze=Se(Object,"create"),Be=ze;var Ie=function(){this.__data__=Be?Be(null):{},this.size=0};var je=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Te=ze,Pe=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;if(Te){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Pe.call(r,e)?r[e]:void 0},Re=ze,He=Object.prototype.hasOwnProperty;var Ve=function(e){var r=this.__data__;return Re?void 0!==r[e]:He.call(r,e)},Ye=ze;var Ne=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ye&&void 0===r?"__lodash_hash_undefined__":r,this},We=Ie,Ue=je,qe=Le,Qe=Ve,Ze=Ne;function Xe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Xe.prototype.clear=We,Xe.prototype.delete=Ue,Xe.prototype.get=qe,Xe.prototype.has=Qe,Xe.prototype.set=Ze;var Ge=Xe;var Je=function(){this.__data__=[],this.size=0};var Ke=function(e,r){return e===r||e!=e&&r!=r};var er=function(e,r){for(var t=e.length;t--;)if(Ke(e[t][0],r))return t;return-1},rr=er,tr=Array.prototype.splice;var nr=function(e){var r=this.__data__,t=rr(r,e);return!(t<0)&&(t==r.length-1?r.pop():tr.call(r,t,1),--this.size,!0)},ir=er;var sr=function(e){var r=this.__data__,t=ir(r,e);return t<0?void 0:r[t][1]},or=er;var ar=function(e){return or(this.__data__,e)>-1},lr=er;var dr=function(e,r){var t=this.__data__,n=lr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},cr=Je,ur=nr,hr=sr,mr=ar,gr=dr;function br(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}br.prototype.clear=cr,br.prototype.delete=ur,br.prototype.get=hr,br.prototype.has=mr,br.prototype.set=gr;var pr=br,fr=Se(Y,"Map"),yr=Ge,vr=pr,xr=fr;var wr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var $r=function(e,r){var t=e.__data__;return wr(r)?t["string"==typeof r?"string":"hash"]:t.map},Fr=$r;var Cr=function(e){var r=Fr(this,e).delete(e);return this.size-=r?1:0,r},Er=$r;var Dr=function(e){return Er(this,e).get(e)},kr=$r;var Mr=function(e){return kr(this,e).has(e)},_r=$r;var Or=function(e,r){var t=_r(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Ar=function(){this.size=0,this.__data__={hash:new yr,map:new(xr||vr),string:new yr}},Sr=Cr,zr=Dr,Br=Mr,Ir=Or;function jr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}jr.prototype.clear=Ar,jr.prototype.delete=Sr,jr.prototype.get=zr,jr.prototype.has=Br,jr.prototype.set=Ir;var Tr=jr;function Pr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var o=e.apply(this,n);return t.cache=s.set(i,o)||s,o};return t.cache=new(Pr.Cache||Tr),t}Pr.Cache=Tr;var Lr=Pr;var Rr=function(e){var r=Lr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vr=/\\(\\)?/g,Yr=Rr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Hr,(function(e,t,n,i){r.push(n?i.replace(Vr,"$1"):t||e)})),r}));var Nr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Wr=R,Ur=ie,qr=N?N.prototype:void 0,Qr=qr?qr.toString:void 0;var Zr=function e(r){if("string"==typeof r)return r;if(Wr(r))return Nr(r,e)+"";if(Ur(r))return Qr?Qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Xr=Zr;var Gr=R,Jr=de,Kr=Yr,et=function(e){return null==e?"":Xr(e)};var rt=ie;var tt=function(e,r){return Gr(e)?e:Jr(e,r)?[e]:Kr(et(e))},nt=function(e){if("string"==typeof e||rt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var it=function(e,r){for(var t=0,n=(r=tt(r,e)).length;null!=e&&t<n;)e=e[nt(r[t++])];return t&&t==n?e:void 0};var st=L((function(e,r,t){var n=null==e?void 0:it(e,r);return void 0===n?t:n}));const ot=(e,r,t)=>st(t,r)||st(e,r),at=(e,r)=>{const t=r||e.defaultValue;return st(e.collections,t)},lt={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},dt=e=>r=>{var t;const n=r.theme,i=at(lt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ot(i,e,n.overrides.motion):i[e]},ct={"duration-150":dt("duration-150"),"duration-250":dt("duration-250"),"duration-350":dt("duration-350"),"duration-500":dt("duration-500"),"duration-800":dt("duration-800"),"duration-1000":dt("duration-1000"),"ease-default":dt("ease-default"),"ease-standard":dt("ease-standard"),"ease-entrance":dt("ease-entrance"),"ease-exit":dt("ease-exit")},ut={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ht=e=>r=>{var t;const n=r.theme,i=at(ut,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?ot(i,e,n.overrides.primitiveColour):i[e]},mt={"brand-10":ht("brand-10"),"brand-20":ht("brand-20"),"brand-30":ht("brand-30"),"brand-40":ht("brand-40"),"brand-50":ht("brand-50"),"brand-60":ht("brand-60"),"brand-70":ht("brand-70"),"brand-80":ht("brand-80"),"brand-90":ht("brand-90"),"brand-95":ht("brand-95"),"brand-100":ht("brand-100"),"primary-10":ht("primary-10"),"primary-20":ht("primary-20"),"primary-30":ht("primary-30"),"primary-40":ht("primary-40"),"primary-50":ht("primary-50"),"primary-60":ht("primary-60"),"primary-70":ht("primary-70"),"primary-80":ht("primary-80"),"primary-90":ht("primary-90"),"primary-95":ht("primary-95"),"primary-100":ht("primary-100"),"secondary-10":ht("secondary-10"),"secondary-20":ht("secondary-20"),"secondary-30":ht("secondary-30"),"secondary-40":ht("secondary-40"),"secondary-50":ht("secondary-50"),"secondary-60":ht("secondary-60"),"secondary-70":ht("secondary-70"),"secondary-80":ht("secondary-80"),"secondary-90":ht("secondary-90"),"secondary-95":ht("secondary-95"),"secondary-100":ht("secondary-100"),"neutral-10":ht("neutral-10"),"neutral-20":ht("neutral-20"),"neutral-30":ht("neutral-30"),"neutral-40":ht("neutral-40"),"neutral-50":ht("neutral-50"),"neutral-60":ht("neutral-60"),"neutral-70":ht("neutral-70"),"neutral-80":ht("neutral-80"),"neutral-90":ht("neutral-90"),"neutral-95":ht("neutral-95"),"neutral-100":ht("neutral-100"),"success-10":ht("success-10"),"success-20":ht("success-20"),"success-30":ht("success-30"),"success-40":ht("success-40"),"success-50":ht("success-50"),"success-60":ht("success-60"),"success-70":ht("success-70"),"success-80":ht("success-80"),"success-90":ht("success-90"),"success-95":ht("success-95"),"success-100":ht("success-100"),"warning-10":ht("warning-10"),"warning-20":ht("warning-20"),"warning-30":ht("warning-30"),"warning-40":ht("warning-40"),"warning-50":ht("warning-50"),"warning-60":ht("warning-60"),"warning-70":ht("warning-70"),"warning-80":ht("warning-80"),"warning-90":ht("warning-90"),"warning-95":ht("warning-95"),"warning-100":ht("warning-100"),"error-10":ht("error-10"),"error-20":ht("error-20"),"error-30":ht("error-30"),"error-40":ht("error-40"),"error-50":ht("error-50"),"error-60":ht("error-60"),"error-70":ht("error-70"),"error-80":ht("error-80"),"error-90":ht("error-90"),"error-95":ht("error-95"),"error-100":ht("error-100"),"info-10":ht("info-10"),"info-20":ht("info-20"),"info-30":ht("info-30"),"info-40":ht("info-40"),"info-50":ht("info-50"),"info-60":ht("info-60"),"info-70":ht("info-70"),"info-80":ht("info-80"),"info-90":ht("info-90"),"info-95":ht("info-95"),"info-100":ht("info-100"),white:ht("white"),black:ht("black"),"primary-inverse":ht("primary-inverse")},gt={text:ht("neutral-20"),"text-subtle":ht("neutral-30"),"text-subtler":ht("neutral-50"),"text-subtlest":ht("neutral-60"),"text-primary":ht("primary-50"),"text-hover":ht("primary-40"),"text-selected":ht("primary-50"),"text-selected-hover":ht("primary-40"),"text-disabled":ht("neutral-50"),"text-disabled-subtle":ht("neutral-60"),"text-disabled-subtlest":ht("neutral-80"),"text-selected-disabled":ht("neutral-20"),"text-success":ht("success-40"),"text-warning":ht("warning-40"),"text-error":ht("error-40"),"text-info":ht("info-40"),"text-inverse":ht("white"),icon:ht("neutral-50"),"icon-subtle":ht("neutral-60"),"icon-strongest":ht("neutral-20"),"icon-primary":ht("primary-50"),"icon-primary-subtle":ht("primary-60"),"icon-primary-subtlest":ht("primary-70"),"icon-hover":ht("primary-40"),"icon-selected":ht("primary-50"),"icon-selected-hover":ht("primary-40"),"icon-disabled":ht("neutral-50"),"icon-disabled-subtle":ht("neutral-60"),"icon-selected-disabled":ht("neutral-60"),"icon-success":ht("success-50"),"icon-warning":ht("warning-60"),"icon-error":ht("error-50"),"icon-error-strong":ht("error-40"),"icon-info":ht("info-50"),"icon-inverse":ht("white"),"icon-primary-inverse":ht("primary-inverse"),border:ht("neutral-90"),"border-strong":ht("neutral-70"),"border-stronger":ht("neutral-50"),"border-primary":ht("primary-50"),"border-primary-subtle":ht("primary-60"),"border-hover":ht("primary-90"),"border-hover-strong":ht("primary-60"),"border-selected":ht("primary-50"),"border-selected-subtle":ht("primary-70"),"border-selected-subtlest":ht("primary-90"),"border-selected-hover":ht("primary-40"),"border-focus":ht("primary-60"),"border-focus-strong":ht("primary-50"),"border-disabled":ht("neutral-90"),"border-selected-disabled":ht("neutral-70"),"border-success":ht("success-60"),"border-warning":ht("warning-60"),"border-error":ht("error-60"),"border-error-focus":ht("error-60"),"border-error-focus-strong":ht("error-40"),"border-error-strong":ht("error-40"),"border-info":ht("info-60"),bg:ht("white"),"bg-strong":ht("neutral-100"),"bg-stronger":ht("neutral-95"),"bg-strongest":ht("neutral-90"),"bg-hover":ht("primary-95"),"bg-hover-strong":ht("primary-90"),"bg-hover-subtle":ht("primary-100"),"bg-hover-neutral":ht("neutral-100"),"bg-hover-neutral-strong":ht("neutral-90"),"bg-selected":ht("primary-95"),"bg-selected-hover":ht("primary-90"),"bg-selected-strong":ht("primary-90"),"bg-selected-stronger":ht("primary-70"),"bg-selected-strongest":ht("primary-50"),"bg-selected-strongest-hover":ht("primary-40"),"bg-disabled":ht("neutral-95"),"bg-selected-disabled":ht("neutral-95"),"bg-selected-stronger-disabled":ht("neutral-70"),"bg-success":ht("success-100"),"bg-success-hover":ht("success-95"),"bg-success-strong":ht("success-50"),"bg-success-strong-hover":ht("success-40"),"bg-warning":ht("warning-100"),"bg-warning-hover":ht("warning-95"),"bg-warning-strong":ht("warning-50"),"bg-warning-strong-hover":ht("warning-40"),"bg-info":ht("info-100"),"bg-info-hover":ht("info-95"),"bg-info-strong":ht("info-50"),"bg-info-strong-hover":ht("info-40"),"bg-error":ht("error-100"),"bg-error-hover":ht("error-95"),"bg-error-strong":ht("error-50"),"bg-error-strong-hover":ht("error-40"),"bg-inverse":ht("neutral-20"),"bg-inverse-subtle":ht("neutral-30"),"bg-inverse-subtler":ht("neutral-50"),"bg-inverse-subtlest":ht("neutral-60"),"bg-inverse-hover":ht("neutral-40"),"bg-primary":ht("primary-50"),"bg-primary-subtle":ht("primary-60"),"bg-primary-subtler":ht("primary-95"),"bg-primary-subtlest":ht("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ht("primary-40"),"bg-primary-subtlest-hover":ht("primary-90"),"bg-primary-subtlest-selected":ht("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ht("primary-50"),"hyperlink-hover":ht("primary-40"),"hyperlink-visited":ht("primary-40"),"hyperlink-inverse":ht("primary-inverse"),"focus-ring":ht("black"),"focus-ring-inverse":ht("white")},bt={collections:{lifesg:gt,bookingsg:gt,rbs:gt,mylegacy:gt,ccube:gt},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,i=at(bt,null==n?void 0:n.colourScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?ot(i,e,n.overrides.semanticColour):i[e];return"function"==typeof s?s(r):s},ft={text:pt("text"),"text-subtle":pt("text-subtle"),"text-subtler":pt("text-subtler"),"text-subtlest":pt("text-subtlest"),"text-primary":pt("text-primary"),"text-hover":pt("text-hover"),"text-selected":pt("text-selected"),"text-selected-hover":pt("text-selected-hover"),"text-disabled":pt("text-disabled"),"text-disabled-subtle":pt("text-disabled-subtle"),"text-disabled-subtlest":pt("text-disabled-subtlest"),"text-selected-disabled":pt("text-selected-disabled"),"text-success":pt("text-success"),"text-warning":pt("text-warning"),"text-error":pt("text-error"),"text-info":pt("text-info"),"text-inverse":pt("text-inverse"),icon:pt("icon"),"icon-subtle":pt("icon-subtle"),"icon-strongest":pt("icon-strongest"),"icon-primary":pt("icon-primary"),"icon-primary-subtle":pt("icon-primary-subtle"),"icon-primary-subtlest":pt("icon-primary-subtlest"),"icon-hover":pt("icon-hover"),"icon-selected":pt("icon-selected"),"icon-selected-hover":pt("icon-selected-hover"),"icon-disabled":pt("icon-disabled"),"icon-disabled-subtle":pt("icon-disabled-subtle"),"icon-selected-disabled":pt("icon-selected-disabled"),"icon-success":pt("icon-success"),"icon-warning":pt("icon-warning"),"icon-error":pt("icon-error"),"icon-error-strong":pt("icon-error-strong"),"icon-info":pt("icon-info"),"icon-inverse":pt("icon-inverse"),"icon-primary-inverse":pt("icon-primary-inverse"),border:pt("border"),"border-strong":pt("border-strong"),"border-stronger":pt("border-stronger"),"border-primary":pt("border-primary"),"border-primary-subtle":pt("border-primary-subtle"),"border-hover":pt("border-hover"),"border-hover-strong":pt("border-hover-strong"),"border-selected":pt("border-selected"),"border-selected-subtle":pt("border-selected-subtle"),"border-selected-subtlest":pt("border-selected-subtlest"),"border-selected-hover":pt("border-selected-hover"),"border-focus":pt("border-focus"),"border-focus-strong":pt("border-focus-strong"),"border-disabled":pt("border-disabled"),"border-selected-disabled":pt("border-selected-disabled"),"border-success":pt("border-success"),"border-warning":pt("border-warning"),"border-error":pt("border-error"),"border-error-focus":pt("border-error-focus"),"border-error-focus-strong":pt("border-error-focus-strong"),"border-error-strong":pt("border-error-strong"),"border-info":pt("border-info"),bg:pt("bg"),"bg-strong":pt("bg-strong"),"bg-stronger":pt("bg-stronger"),"bg-strongest":pt("bg-strongest"),"bg-hover":pt("bg-hover"),"bg-hover-strong":pt("bg-hover-strong"),"bg-hover-subtle":pt("bg-hover-subtle"),"bg-hover-neutral":pt("bg-hover-neutral"),"bg-hover-neutral-strong":pt("bg-hover-neutral-strong"),"bg-selected":pt("bg-selected"),"bg-selected-hover":pt("bg-selected-hover"),"bg-selected-strong":pt("bg-selected-strong"),"bg-selected-stronger":pt("bg-selected-stronger"),"bg-selected-strongest":pt("bg-selected-strongest"),"bg-selected-strongest-hover":pt("bg-selected-strongest-hover"),"bg-disabled":pt("bg-disabled"),"bg-selected-disabled":pt("bg-selected-disabled"),"bg-selected-stronger-disabled":pt("bg-selected-stronger-disabled"),"bg-success":pt("bg-success"),"bg-success-hover":pt("bg-success-hover"),"bg-success-strong":pt("bg-success-strong"),"bg-success-strong-hover":pt("bg-success-strong-hover"),"bg-warning":pt("bg-warning"),"bg-warning-hover":pt("bg-warning-hover"),"bg-warning-strong":pt("bg-warning-strong"),"bg-warning-strong-hover":pt("bg-warning-strong-hover"),"bg-info":pt("bg-info"),"bg-info-hover":pt("bg-info-hover"),"bg-info-strong":pt("bg-info-strong"),"bg-info-strong-hover":pt("bg-info-strong-hover"),"bg-error":pt("bg-error"),"bg-error-hover":pt("bg-error-hover"),"bg-error-strong":pt("bg-error-strong"),"bg-error-strong-hover":pt("bg-error-strong-hover"),"bg-inverse":pt("bg-inverse"),"bg-inverse-subtle":pt("bg-inverse-subtle"),"bg-inverse-subtler":pt("bg-inverse-subtler"),"bg-inverse-subtlest":pt("bg-inverse-subtlest"),"bg-inverse-hover":pt("bg-inverse-hover"),"bg-primary":pt("bg-primary"),"bg-primary-subtle":pt("bg-primary-subtle"),"bg-primary-subtler":pt("bg-primary-subtler"),"bg-primary-subtlest":pt("bg-primary-subtlest"),"bg-available":pt("bg-available"),"bg-primary-hover":pt("bg-primary-hover"),"bg-primary-subtlest-hover":pt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":pt("bg-primary-subtlest-selected"),"overlay-strong":pt("overlay-strong"),"overlay-subtle":pt("overlay-subtle"),hyperlink:pt("hyperlink"),"hyperlink-hover":pt("hyperlink-hover"),"hyperlink-visited":pt("hyperlink-visited"),"hyperlink-inverse":pt("hyperlink-inverse"),"focus-ring":pt("focus-ring"),"focus-ring-inverse":pt("focus-ring-inverse")},yt={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:s,radius:o,colour:a}=e||{},l=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:wt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ft.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},vt=e=>r=>{var t;const n=r.theme,i=at(yt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ot(i,e,n.overrides.border)}px`:`${i[e]}px`},xt=e=>1===e.length&&"theme"in e[0],wt={"width-010":vt("width-010"),"width-020":vt("width-020"),"width-040":vt("width-040"),solid:($t="solid",e=>{var r;const t=e.theme,n=at(yt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ot(n,$t,t.overrides.border):n[$t];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=xt(r)?[]:r,s=xt(r)?r[0]:t,o=s.theme,a=at(yt,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?ot(a,e,o.overrides.border):a[e])(...i)(s)})("dashed-default")};var $t;const Ft={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Ct=e=>r=>{var t;const n=r.theme,i=at(Ft,null==n?void 0:n.breakpointScheme);let s;return s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ot(i,e,n.overrides.breakpoint):i[e],s},Et={"xxs-min":Ct("xxs-min"),"xxs-max":Ct("xxs-max"),"xs-min":Ct("xs-min"),"xs-max":Ct("xs-max"),"sm-min":Ct("sm-min"),"sm-max":Ct("sm-max"),"md-min":Ct("md-min"),"md-max":Ct("md-max"),"lg-min":Ct("lg-min"),"lg-max":Ct("lg-max"),"xl-min":Ct("xl-min"),"xl-max":Ct("xl-max"),"xxl-min":Ct("xxl-min"),"xxs-column":Ct("xxs-column"),"xs-column":Ct("xs-column"),"sm-column":Ct("sm-column"),"md-column":Ct("md-column"),"lg-column":Ct("lg-column"),"xl-column":Ct("xl-column"),"xxl-column":Ct("xxl-column"),"xxs-gutter":Ct("xxs-gutter"),"xs-gutter":Ct("xs-gutter"),"sm-gutter":Ct("sm-gutter"),"md-gutter":Ct("md-gutter"),"lg-gutter":Ct("lg-gutter"),"xl-gutter":Ct("xl-gutter"),"xxl-gutter":Ct("xxl-gutter"),"xxs-margin":Ct("xxs-margin"),"xs-margin":Ct("xs-margin"),"sm-margin":Ct("sm-margin"),"md-margin":Ct("md-margin"),"lg-margin":Ct("lg-margin"),"xl-margin":Ct("xl-margin"),"xxl-margin":Ct("xxl-margin")},Dt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Et["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),kt={MaxWidth:Dt("max-width"),MinWidth:Dt("min-width")},Mt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},_t={collections:{lifesg:Mt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Mt,mylegacy:Mt,ccube:Mt},defaultValue:"lifesg"},Ot=e=>r=>{var t;const n=r.theme,i=at(_t,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ot(i,e,n.overrides.fontSpec):i[e]},At={"header-size-xxl":Ot("header-size-xxl"),"header-size-xl":Ot("header-size-xl"),"header-size-lg":Ot("header-size-lg"),"header-size-md":Ot("header-size-md"),"header-size-sm":Ot("header-size-sm"),"header-size-xs":Ot("header-size-xs"),"header-lh-xxl":Ot("header-lh-xxl"),"header-lh-xl":Ot("header-lh-xl"),"header-lh-lg":Ot("header-lh-lg"),"header-lh-md":Ot("header-lh-md"),"header-lh-sm":Ot("header-lh-sm"),"header-lh-xs":Ot("header-lh-xs"),"header-ls-xxl":Ot("header-ls-xxl"),"header-ls-xl":Ot("header-ls-xl"),"header-ls-lg":Ot("header-ls-lg"),"header-ls-md":Ot("header-ls-md"),"header-ls-sm":Ot("header-ls-sm"),"header-ls-xs":Ot("header-ls-xs"),"weight-light":Ot("weight-light"),"weight-regular":Ot("weight-regular"),"weight-semibold":Ot("weight-semibold"),"weight-bold":Ot("weight-bold"),"font-family":Ot("font-family"),"body-size-baseline":Ot("body-size-baseline"),"body-size-md":Ot("body-size-md"),"body-size-sm":Ot("body-size-sm"),"body-size-xs":Ot("body-size-xs"),"body-lh-baseline":Ot("body-lh-baseline"),"body-lh-md":Ot("body-lh-md"),"body-lh-sm":Ot("body-lh-sm"),"body-lh-xs":Ot("body-lh-xs"),"body-ls-baseline":Ot("body-ls-baseline"),"body-ls-md":Ot("body-ls-md"),"body-ls-sm":Ot("body-ls-sm"),"body-ls-xs":Ot("body-ls-xs"),"formlabel-size-baseline":Ot("formlabel-size-baseline"),"formlabel-size-lg":Ot("formlabel-size-lg"),"formlabel-lh-baseline":Ot("formlabel-lh-baseline"),"formlabel-lh-lg":Ot("formlabel-lh-lg"),"formlabel-ls-baseline":Ot("formlabel-ls-baseline"),"formlabel-ls-lg":Ot("formlabel-ls-lg")},St={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},zt=e=>r=>{var t;const n=r.theme,i=at(St,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ot(i,e,n.overrides.radius)}px`:`${i[e]}px`},Bt={none:zt("none"),xs:zt("xs"),sm:zt("sm"),md:zt("md"),lg:zt("lg"),full:zt("full")},It={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},jt=e=>r=>{var t;const n=r.theme,i=at(It,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ot(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Tt={"spacing-0":jt("spacing-0"),"spacing-4":jt("spacing-4"),"spacing-8":jt("spacing-8"),"spacing-12":jt("spacing-12"),"spacing-16":jt("spacing-16"),"spacing-20":jt("spacing-20"),"spacing-24":jt("spacing-24"),"spacing-32":jt("spacing-32"),"spacing-40":jt("spacing-40"),"spacing-48":jt("spacing-48"),"spacing-64":jt("spacing-64"),"spacing-72":jt("spacing-72"),"layout-xs":jt("layout-xs"),"layout-sm":jt("layout-sm"),"layout-md":jt("layout-md"),"layout-lg":jt("layout-lg"),"layout-xl":jt("layout-xl"),"layout-xxl":jt("layout-xxl"),"layout-xxxl":jt("layout-xxxl")},Pt=(e,r,t,n)=>y`
    font-family: ${Ot("font-family")};
    font-size: ${Ot(e)};
    font-weight: ${Ot(r)};
    line-height: ${Ot(t)};
    letter-spacing: ${Ot(n)};
`,Lt={"header-xxl-light":Pt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Pt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Pt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Pt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Pt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Pt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Pt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Pt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Pt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Pt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Pt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Pt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Pt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Pt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Pt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Pt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Pt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Pt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Pt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Pt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Pt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Pt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Pt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Pt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Pt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Pt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Pt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Pt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Pt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Pt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Pt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Pt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Pt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Pt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Pt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Pt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Pt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Pt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Pt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Pt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Pt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Pt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Rt={collections:{lifesg:Lt,bookingsg:Lt,rbs:Lt,mylegacy:Lt,ccube:Lt},defaultValue:"lifesg"},Ht=e=>r=>{var t;const n=r.theme,i=at(Rt,null==n?void 0:n.fontScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ot(i,e,n.overrides.font):i[e];return"function"==typeof s?s(r):s},Vt={"header-xxl-light":Ht("header-xxl-light"),"header-xxl-regular":Ht("header-xxl-regular"),"header-xxl-semibold":Ht("header-xxl-semibold"),"header-xxl-bold":Ht("header-xxl-bold"),"header-xl-light":Ht("header-xl-light"),"header-xl-regular":Ht("header-xl-regular"),"header-xl-semibold":Ht("header-xl-semibold"),"header-xl-bold":Ht("header-xl-bold"),"header-lg-light":Ht("header-lg-light"),"header-lg-regular":Ht("header-lg-regular"),"header-lg-semibold":Ht("header-lg-semibold"),"header-lg-bold":Ht("header-lg-bold"),"header-md-light":Ht("header-md-light"),"header-md-regular":Ht("header-md-regular"),"header-md-semibold":Ht("header-md-semibold"),"header-md-bold":Ht("header-md-bold"),"header-sm-light":Ht("header-sm-light"),"header-sm-regular":Ht("header-sm-regular"),"header-sm-semibold":Ht("header-sm-semibold"),"header-sm-bold":Ht("header-sm-bold"),"header-xs-light":Ht("header-xs-light"),"header-xs-regular":Ht("header-xs-regular"),"header-xs-semibold":Ht("header-xs-semibold"),"header-xs-bold":Ht("header-xs-bold"),"body-baseline-light":Ht("body-baseline-light"),"body-baseline-regular":Ht("body-baseline-regular"),"body-baseline-semibold":Ht("body-baseline-semibold"),"body-baseline-bold":Ht("body-baseline-bold"),"body-md-light":Ht("body-md-light"),"body-md-regular":Ht("body-md-regular"),"body-md-semibold":Ht("body-md-semibold"),"body-md-bold":Ht("body-md-bold"),"body-sm-light":Ht("body-sm-light"),"body-sm-regular":Ht("body-sm-regular"),"body-sm-semibold":Ht("body-sm-semibold"),"body-sm-bold":Ht("body-sm-bold"),"body-xs-light":Ht("body-xs-light"),"body-xs-regular":Ht("body-xs-regular"),"body-xs-semibold":Ht("body-xs-semibold"),"body-xs-bold":Ht("body-xs-bold"),"formlabel-baseline-semibold":Ht("formlabel-baseline-semibold"),"formlabel-lg-semibold":Ht("formlabel-lg-semibold")},Yt=Object.assign(Object.assign({},ft),{Primitive:mt}),Nt=Object.assign(Object.assign({},Vt),{Spec:At}),Wt=ct,Ut=wt,qt=Tt,Qt=Bt,Zt=kt,Xt=y`
    outline-offset: -1px;
    outline: ${Ut["width-020"]} ${Ut.solid} ${Yt["border-focus"]};
`,Gt=y`
    outline-color: ${Yt["border-focus"]};
`,Jt=y`
    outline-color: ${Yt["border-disabled"]};
`,Kt=y`
    outline-color: ${Yt["border-error-focus"]};
`,en=f.div`
    border: ${Ut["width-010"]} ${Ut.solid} ${Yt.border};
    border-radius: ${Qt.sm};
    background: ${Yt.bg};

    :focus-within {
        ${Xt}
    }
    ${e=>e.$focused&&Xt}

    ${e=>e.$readOnly?y`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Gt}
                }
                ${e.$focused&&Gt}
            `:e.$disabled?y`
                background: ${Yt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Jt}
                }
                ${e.$focused&&Jt}
            `:e.$error?y`
                border-color: ${Yt["border-error"]};

                :focus-within {
                    ${Kt}
                }
                ${e.$focused&&Kt}
            `:void 0}
`,rn=f(en)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${qt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,tn=f.input`
    ${e=>"small"===e.$variant?Nt["body-md-regular"]:Nt["body-baseline-regular"]}
    color: ${Yt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Yt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Yt["text-subtler"]};
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
`;f.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Ut["width-010"]} ${Ut.solid}
            ${Yt["border-focus"]};
        border-radius: ${Qt.sm};
    }
`;var nn=function(e,r){return nn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},nn(e,r)};var sn=function(){return sn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},sn.apply(this,arguments)};var on="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var an=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ln="object"==typeof on&&on&&on.Object===Object&&on,dn="object"==typeof self&&self&&self.Object===Object&&self,cn=ln||dn||Function("return this")(),un=cn,hn=function(){return un.Date.now()},mn=/\s/;var gn=function(e){for(var r=e.length;r--&&mn.test(e.charAt(r)););return r},bn=/^\s+/;var pn=function(e){return e?e.slice(0,gn(e)+1).replace(bn,""):e},fn=cn.Symbol,yn=fn,vn=Object.prototype,xn=vn.hasOwnProperty,wn=vn.toString,$n=yn?yn.toStringTag:void 0;var Fn=function(e){var r=xn.call(e,$n),t=e[$n];try{e[$n]=void 0;var n=!0}catch(e){}var i=wn.call(e);return n&&(r?e[$n]=t:delete e[$n]),i},Cn=Object.prototype.toString;var En=Fn,Dn=function(e){return Cn.call(e)},kn=fn?fn.toStringTag:void 0;var Mn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":kn&&kn in Object(e)?En(e):Dn(e)},_n=function(e){return null!=e&&"object"==typeof e};var On=pn,An=an,Sn=function(e){return"symbol"==typeof e||_n(e)&&"[object Symbol]"==Mn(e)},zn=/^[-+]0x[0-9a-f]+$/i,Bn=/^0b[01]+$/i,In=/^0o[0-7]+$/i,jn=parseInt;var Tn=an,Pn=hn,Ln=function(e){if("number"==typeof e)return e;if(Sn(e))return NaN;if(An(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=An(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=On(e);var t=Bn.test(e);return t||In.test(e)?jn(e.slice(2),t?2:8):zn.test(e)?NaN:+e},Rn=Math.max,Hn=Math.min;var Vn=function(e,r,t){var n,i,s,o,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,s=i;return n=i=void 0,d=r,o=e.apply(s,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=s}function b(){var e=Pn();if(g(e))return p(e);a=setTimeout(b,function(e){var t=r-(e-l);return u?Hn(t,s-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?m(e):(n=i=void 0,o)}function f(){var e=Pn(),t=g(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(b,r),c?m(e):o}(l);if(u)return clearTimeout(a),a=setTimeout(b,r),m(l)}return void 0===a&&(a=setTimeout(b,r)),o}return r=Ln(r)||0,Tn(t)&&(c=!!t.leading,s=(u="maxWait"in t)?Rn(Ln(t.maxWait)||0,r):s,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?o:p(Pn())},f},Yn=Vn,Nn=an;var Wn=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nn(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Yn(e,r,{leading:n,maxWait:r,trailing:i})},Un=function(e,r,t,n){switch(r){case"debounce":return Vn(e,t,n);case"throttle":return Wn(e,t,n);default:return e}},qn=function(e){return"function"==typeof e},Qn=function(){return"undefined"==typeof window},Zn=function(e){return e instanceof Element||e instanceof HTMLDocument},Xn=function(e,r,t,n){return function(i){var s=i.width,o=i.height;r((function(r){return r.width===s&&r.height===o||r.width===s&&!n||r.height===o&&!t?r:(e&&qn(e)&&e(s,o),{width:s,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Qn()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Qn())return null;if(r)return document.querySelector(r);if(n&&Zn(n))return n;if(t.targetRef&&Zn(t.targetRef.current))return t.targetRef.current;var i=$(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,s=r.handleHeight,o=void 0===s||s,a=r.onResize;if(i||o){var l=Xn(a,t.setState.bind(t),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Qn()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return qn(r)?"renderProp":qn(n)?"childFunction":a(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,s=r.refreshRate,o=void 0===s?1e3:s,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Qn()||(t.resizeHandler=Un(t.createResizeHandler,i,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}nn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Qn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,s=r.nodeType,o=void 0===s?"div":s,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Gn=Qn()?u:h;function Jn(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,m=e.targetRef,g=e.observerOptions,b=e.onResize,p=s(t),f=s(null),y=null!=m?m:f,v=s(),x=o({width:void 0,height:void 0}),w=x[0],$=x[1];return Gn((function(){if(!Qn()){var e=Xn(b,$,c,h);v.current=Un((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Qn()&&e({width:n,height:i}),p.current=!1}))}),n,a,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,a,l,c,h,b,g,y.current]),sn({ref:y},w)}var Kn=Object.defineProperty,ei={};((e,r)=>{for(var t in r)Kn(e,t,{get:r[t],enumerable:!0})})(ei,{assign:()=>zi,colors:()=>Oi,createStringInterpolator:()=>Di,skipAnimation:()=>Ai,to:()=>ki,willAdvance:()=>Si});var ri=fi(),ti=e=>mi(e,ri),ni=fi();ti.write=e=>mi(e,ni);var ii=fi();ti.onStart=e=>mi(e,ii);var si=fi();ti.onFrame=e=>mi(e,si);var oi=fi();ti.onFinish=e=>mi(e,oi);var ai=[];ti.setTimeout=(e,r)=>{const t=ti.now()+r,n=()=>{const e=ai.findIndex((e=>e.cancel==n));~e&&ai.splice(e,1),ui-=~e?1:0},i={time:t,handler:e,cancel:n};return ai.splice(li(t),0,i),ui+=1,gi(),i};var li=e=>~(~ai.findIndex((r=>r.time>e))||~ai.length);ti.cancel=e=>{ii.delete(e),si.delete(e),oi.delete(e),ri.delete(e),ni.delete(e)},ti.sync=e=>{hi=!0,ti.batchedUpdates(e),hi=!1},ti.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,ti.onStart(t)}return n.handler=e,n.cancel=()=>{ii.delete(t),r=null},n};var di="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ti.use=e=>di=e,ti.now="undefined"!=typeof performance?()=>performance.now():Date.now,ti.batchedUpdates=e=>e(),ti.catch=console.error,ti.frameLoop="always",ti.advance=()=>{"demand"!==ti.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):pi()};var ci=-1,ui=0,hi=!1;function mi(e,r){hi?(r.delete(e),e(0)):(r.add(e),gi())}function gi(){ci<0&&(ci=0,"demand"!==ti.frameLoop&&di(bi))}function bi(){~ci&&(di(bi),ti.batchedUpdates(pi))}function pi(){const e=ci;ci=ti.now();const r=li(ci);r&&(yi(ai.splice(0,r),(e=>e.handler())),ui-=r),ui?(ii.flush(),ri.flush(e?Math.min(64,ci-e):16.667),si.flush(),ni.flush(),oi.flush()):ci=-1}function fi(){let e=new Set,r=e;return{add(t){ui+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(ui-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,ui-=r.size,yi(r,(r=>r(t)&&e.add(r))),ui+=e.size,r=e)}}}function yi(e,r){e.forEach((e=>{try{r(e)}catch(e){ti.catch(e)}}))}function vi(){}var xi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function wi(e,r){if(xi.arr(e)){if(!xi.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var $i=(e,r)=>e.forEach(r);function Fi(e,r,t){if(xi.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var Ci=e=>xi.und(e)?[]:xi.arr(e)?e:[e];function Ei(e,r){if(e.size){const t=Array.from(e);e.clear(),$i(t,r)}}var Di,ki,Mi=(e,...r)=>Ei(e,(e=>e(...r))),_i=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Oi=null,Ai=!1,Si=vi,zi=e=>{e.to&&(ki=e.to),e.now&&(ti.now=e.now),void 0!==e.colors&&(Oi=e.colors),null!=e.skipAnimation&&(Ai=e.skipAnimation),e.createStringInterpolator&&(Di=e.createStringInterpolator),e.requestAnimationFrame&&ti.use(e.requestAnimationFrame),e.batchedUpdates&&(ti.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Si=e.willAdvance),e.frameLoop&&(ti.frameLoop=e.frameLoop)},Bi=new Set,Ii=[],ji=[],Ti=0,Pi={get idle(){return!Bi.size&&!Ii.length},start(e){Ti>e.priority?(Bi.add(e),ti.onStart(Li)):(Ri(e),ti(Vi))},advance:Vi,sort(e){if(Ti)ti.onFrame((()=>Pi.sort(e)));else{const r=Ii.indexOf(e);~r&&(Ii.splice(r,1),Hi(e))}},clear(){Ii=[],Bi.clear()}};function Li(){Bi.forEach(Ri),Bi.clear(),ti(Vi)}function Ri(e){Ii.includes(e)||Hi(e)}function Hi(e){Ii.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(Ii,(r=>r.priority>e.priority)),0,e)}function Vi(e){const r=ji;for(let t=0;t<Ii.length;t++){const n=Ii[t];Ti=n.priority,n.idle||(Si(n),n.advance(e),n.idle||r.push(n))}return Ti=0,(ji=Ii).length=0,(Ii=r).length>0}var Yi="[-+]?\\d*\\.?\\d+",Ni=Yi+"%";function Wi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ui=new RegExp("rgb"+Wi(Yi,Yi,Yi)),qi=new RegExp("rgba"+Wi(Yi,Yi,Yi,Yi)),Qi=new RegExp("hsl"+Wi(Yi,Ni,Ni)),Zi=new RegExp("hsla"+Wi(Yi,Ni,Ni,Yi)),Xi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Gi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ji=/^#([0-9a-fA-F]{6})$/,Ki=/^#([0-9a-fA-F]{8})$/;function es(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function rs(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,s=es(i,n,e+1/3),o=es(i,n,e),a=es(i,n,e-1/3);return Math.round(255*s)<<24|Math.round(255*o)<<16|Math.round(255*a)<<8}function ts(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function ns(e){return(parseFloat(e)%360+360)%360/360}function is(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function ss(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function os(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Ji.exec(e))?parseInt(r[1]+"ff",16)>>>0:Oi&&void 0!==Oi[e]?Oi[e]:(r=Ui.exec(e))?(ts(r[1])<<24|ts(r[2])<<16|ts(r[3])<<8|255)>>>0:(r=qi.exec(e))?(ts(r[1])<<24|ts(r[2])<<16|ts(r[3])<<8|is(r[4]))>>>0:(r=Xi.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=Ki.exec(e))?parseInt(r[1],16)>>>0:(r=Gi.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Qi.exec(e))?(255|rs(ns(r[1]),ss(r[2]),ss(r[3])))>>>0:(r=Zi.exec(e))?(rs(ns(r[1]),ss(r[2]),ss(r[3]))|is(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var as=(e,r,t)=>{if(xi.fun(e))return e;if(xi.arr(e))return as({range:e,output:r,extrapolate:t});if(xi.str(e.output[0]))return Di(e);const n=e,i=n.output,s=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,s);return function(e,r,t,n,i,s,o,a,l){let d=l?l(e):e;if(d<r){if("identity"===o)return d;"clamp"===o&&(d=r)}if(d>t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=s(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,s[r],s[r+1],i[r],i[r+1],l,o,a,n.map)}};var ls=1.70158,ds=1.525*ls,cs=ls+1,us=2*Math.PI/3,hs=2*Math.PI/4.5,ms=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},gs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>cs*e*e*e-ls*e*e,easeOutBack:e=>1+cs*Math.pow(e-1,3)+ls*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ds)/2:(Math.pow(2*e-2,2)*((ds+1)*(2*e-2)+ds)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*us),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*us)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*hs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*hs)/2+1,easeInBounce:e=>1-ms(1-e),easeOutBounce:ms,easeInOutBounce:e=>e<.5?(1-ms(1-2*e))/2:(1+ms(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return s=0,o=1,a=i/e,Math.min(Math.max(a,s),o);var s,o,a}},bs=Symbol.for("FluidValue.get"),ps=Symbol.for("FluidValue.observers"),fs=e=>Boolean(e&&e[bs]),ys=e=>e&&e[bs]?e[bs]():e,vs=e=>e[ps]||null;function xs(e,r){const t=e[ps];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var ws=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");$s(this,e)}},$s=(e,r)=>Ds(e,bs,r);function Fs(e,r){if(e[bs]){let t=e[ps];t||Ds(e,ps,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function Cs(e,r){const t=e[ps];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[ps]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var Es,Ds=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),ks=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ms=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,_s=new RegExp(`(${ks.source})(%|[a-z]+)`,"i"),Os=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,As=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ss=e=>{const[r,t]=zs(e);if(!r||_i())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&As.test(t)?Ss(t):t||e},zs=e=>{const r=As.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},Bs=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,Is=e=>{Es||(Es=Oi?new RegExp(`(${Object.keys(Oi).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>ys(e).replace(As,Ss).replace(Ms,os).replace(Es,os))),t=r.map((e=>e.match(ks).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>as({...e,output:r})));return e=>{const t=!_s.test(r[0])&&r.find((e=>_s.test(e)))?.replace(ks,"");let i=0;return r[0].replace(ks,(()=>`${n[i++](e)}${t||""}`)).replace(Os,Bs)}},js="react-spring: ",Ts=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${js}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Ps=Ts(console.warn);var Ls=Ts(console.warn);function Rs(e){return xi.str(e)&&("#"==e[0]||/\d/.test(e)||!_i()&&As.test(e)||e in(Oi||{}))}var Hs=_i()?u:h,Vs=()=>{const e=s(!1);return Hs((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ys(){const e=o()[1],r=Vs();return()=>{r.current&&e(Math.random())}}var Ns=e=>u(e,Ws),Ws=[];function Us(e){const r=s();return u((()=>{r.current=e})),r.current}var qs=Symbol.for("Animated:node"),Qs=e=>e&&e[qs],Zs=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,qs,r),Xs=e=>e&&e[qs]&&e[qs].getPayload(),Gs=class{constructor(){Zs(this,this)}getPayload(){return this.payload||[]}},Js=class extends Gs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,xi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Js(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return xi.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,xi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ks=class extends Js{constructor(e){super(0),this._string=null,this._toString=as({output:[e,e]})}static create(e){return new Ks(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(xi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=as({output:[this.getValue(),e]})),this._value=0,super.reset()}},eo={dependencies:null},ro=class extends Gs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return Fi(this.source,((t,n)=>{var i;(i=t)&&i[qs]===i?r[n]=t.getValue(e):fs(t)?r[n]=ys(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&$i(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return Fi(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){eo.dependencies&&fs(e)&&eo.dependencies.add(e);const r=Xs(e);r&&$i(r,(e=>this.add(e)))}},to=class extends ro{constructor(e){super(e)}static create(e){return new to(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(no)),!0)}};function no(e){return(Rs(e)?Ks:Js).create(e)}function io(e){const r=Qs(e);return r?r.constructor:xi.arr(e)?to:Rs(e)?Ks:Js}var so=(e,r)=>{const t=!xi.fun(e)||e.prototype&&e.prototype.isReactComponent;return m(((i,o)=>{const a=s(null),l=t&&g((e=>{a.current=function(e,r){e&&(xi.fun(e)?e(r):e.current=r);return r}(o,e)}),[o]),[d,c]=function(e,r){const t=new Set;eo.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new ro(e),eo.dependencies=null,[e,t]}(i,r),h=Ys(),m=()=>{const e=a.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,d.getValue(!0)))&&h()},b=new oo(m,c),p=s();Hs((()=>(p.current=b,$i(c,(e=>Fs(e,b))),()=>{p.current&&($i(p.current.deps,(e=>Cs(e,p.current))),ti.cancel(p.current.update))}))),u(m,[]),Ns((()=>()=>{const e=p.current;$i(e.deps,(r=>Cs(r,e)))}));const f=r.getComponentProps(d.getValue());return n.createElement(e,{...f,ref:l})}))},oo=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&ti.write(this.update)}};var ao=Symbol.for("AnimatedComponent"),lo=e=>xi.str(e)?e:e&&xi.str(e.displayName)?e.displayName:xi.fun(e)&&e.name||null;function co(e,...r){return xi.fun(e)?e(...r):e}var uo=(e,r)=>!0===e||!!(r&&e&&(xi.fun(e)?e(r):Ci(e).includes(r))),ho=(e,r)=>xi.obj(e)?r&&e[r]:e,mo=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,go=e=>e,bo=(e,r=go)=>{let t=po;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);xi.und(t)||(n[i]=t)}return n},po=["config","onProps","onStart","onChange","onPause","onResume","onRest"],fo={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function yo(e){const r=function(e){const r={};let t=0;if(Fi(e,((e,n)=>{fo[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return Fi(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function vo(e){return e=ys(e),xi.arr(e)?e.map(vo):Rs(e)?ei.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function xo(e){return xi.fun(e)||xi.arr(e)&&xi.obj(e[0])}var wo={tension:170,friction:26,mass:1,damping:1,easing:gs.linear,clamp:!1},$o=class{constructor(){this.velocity=0,Object.assign(this,wo)}};function Fo(e,r){if(xi.und(r.decay)){const t=!xi.und(r.tension)||!xi.und(r.friction);!t&&xi.und(r.frequency)&&xi.und(r.damping)&&xi.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var Co=[],Eo=class{constructor(){this.changed=!1,this.values=Co,this.toValues=null,this.fromValues=Co,this.config=new $o,this.immediate=!1}};function Do(e,{key:r,props:t,defaultProps:n,state:i,actions:s}){return new Promise(((o,a)=>{let l,d,c=uo(t.cancel??n?.cancel,r);if(c)m();else{xi.und(t.pause)||(i.paused=uo(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||uo(e,r)),l=co(t.delay||0,r),e?(i.resumeQueue.add(h),s.pause()):(s.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-ti.now()}function h(){l>0&&!ei.skipAnimation?(i.delayed=!0,d=ti.setTimeout(m,l),i.pauseQueue.add(u),i.timeouts.add(d)):m()}function m(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{s.start({...t,callId:e,cancel:c},o)}catch(e){a(e)}}}))}var ko=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?Oo(e.get()):r.every((e=>e.noop))?Mo(e.get()):_o(e.get(),r.every((e=>e.finished))),Mo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),_o=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),Oo=e=>({value:e,cancelled:!0,finished:!1});function Ao(e,r,t,n){const{callId:i,parentId:s,onRest:o}=r,{asyncTo:a,promise:l}=t;return s||e!==a||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=bo(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),m=e=>{const r=i<=(t.cancelId||0)&&Oo(n)||i!==t.asyncId&&_o(n,!1);if(r)throw e.result=r,u(e),e},g=(e,r)=>{const s=new zo,o=new Bo;return(async()=>{if(ei.skipAnimation)throw So(t),o.result=_o(n,!1),u(o),o;m(s);const a=xi.obj(e)?{...e}:{...r,to:e};a.parentId=i,Fi(d,((e,r)=>{xi.und(a[r])&&(a[r]=e)}));const l=await n.start(a);return m(s),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let b;if(ei.skipAnimation)return So(t),_o(n,!1);try{let r;r=xi.arr(e)?(async e=>{for(const r of e)await g(r)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([r.then(c),h]),b=_o(n.get(),!0,!1)}catch(e){if(e instanceof zo)b=e.result;else{if(!(e instanceof Bo))throw e;b=e.result}}finally{i==t.asyncId&&(t.asyncId=s,t.asyncTo=s?a:void 0,t.promise=s?l:void 0)}return xi.fun(o)&&ti.batchedUpdates((()=>{o(b,n,n.item)})),b})():l}function So(e,r){Ei(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var zo=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Bo=class extends Error{constructor(){super("SkipAnimationSignal")}},Io=e=>e instanceof To,jo=1,To=class extends ws{constructor(){super(...arguments),this.id=jo++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Qs(this);return e&&e.getValue()}to(...e){return ei.to(this,e)}interpolate(...e){return Ps(`${js}The "interpolate" function is deprecated in v9 (use "to" instead)`),ei.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){xs(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Pi.sort(this),xs(this,{type:"priority",parent:this,priority:e})}},Po=Symbol.for("SpringPhase"),Lo=e=>(1&e[Po])>0,Ro=e=>(2&e[Po])>0,Ho=e=>(4&e[Po])>0,Vo=(e,r)=>r?e[Po]|=3:e[Po]&=-3,Yo=(e,r)=>r?e[Po]|=4:e[Po]&=-5,No=class extends To{constructor(e,r){if(super(),this.animation=new Eo,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!xi.und(e)||!xi.und(r)){const t=xi.obj(e)?{...e}:{...r,from:e};xi.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(Ro(this)||this._state.asyncTo)||Ho(this)}get goal(){return ys(this.animation.to)}get velocity(){const e=Qs(this);return e instanceof Js?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Lo(this)}get isAnimating(){return Ro(this)}get isPaused(){return Ho(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:s}=n,o=Xs(n.to);!o&&fs(n.to)&&(i=Ci(ys(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Ks?1:o?o[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,s.tension<=0)return void(a.done=!0);let r=a.elapsedTime+=e;const t=n.fromValues[l],i=null!=a.v0?a.v0:a.v0=xi.arr(s.velocity)?s.velocity[l]:s.velocity;let o;const h=s.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(xi.und(s.duration))if(s.decay){const e=!0===s.decay?.998:s.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,o=i*n}else{o=null==a.lastVelocity?i:a.lastVelocity;const r=s.restVelocity||h/10,n=s.clamp?0:s.bounce,l=!xi.und(n),m=t==d?a.v0>0:t<d;let g,b=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(g=Math.abs(o)>r,g||(c=Math.abs(d-u)<=h,!c));++e){l&&(b=u==d||u>d==m,b&&(o=-o*n,u=d));o+=(1e-6*-s.tension*(u-d)+.001*-s.friction*o)/s.mass*p,u+=o*p}}else{let n=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,a.durationProgress>0&&(a.elapsedTime=s.duration*a.durationProgress,r=a.elapsedTime+=e)),n=(s.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=t+s.easing(n)*(d-t),o=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?a.done=!0:r=!1,a.setValue(u,s.round)&&(t=!0)}));const a=Qs(this),l=a.getValue();if(r){const e=ys(n.to);l===e&&!t||s.decay?t&&s.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return ti.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ro(this)){const{to:e,config:r}=this.animation;ti.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return xi.und(e)?(t=this.queue||[],this.queue=[]):t=[xi.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>ko(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),So(this._state,e&&this._lastCallId),ti.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=xi.obj(t)?t[r]:t,(null==t||xo(t))&&(t=void 0),n=xi.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Lo(this)||(e.reverse&&([t,n]=[n,t]),n=ys(n),xi.und(n)?Qs(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,bo(e,((e,r)=>/^on/.test(r)?ho(e,t):e))),Go(this,e,"onProps"),Jo(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return Do(++this._lastCallId,{key:t,props:e,defaultProps:n,state:s,actions:{pause:()=>{Ho(this)||(Yo(this,!0),Mi(s.pauseQueue),Jo(this,"onPause",_o(this,Wo(this,this.animation.to)),this))},resume:()=>{Ho(this)&&(Yo(this,!1),Ro(this)&&this._resume(),Mi(s.resumeQueue),Jo(this,"onResume",_o(this,Wo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=Uo(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(Oo(this));const n=!xi.und(e.to),i=!xi.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(Oo(this));this._lastToId=r.callId}const{key:s,defaultProps:o,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!i||n||r.default&&!xi.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!wi(u,d);h&&(a.from=u),u=ys(u);const m=!wi(c,l);m&&this._focus(c);const g=xo(r.to),{config:b}=a,{decay:p,velocity:f}=b;(n||i)&&(b.velocity=0),r.config&&!g&&function(e,r,t){t&&(Fo(t={...t},r),r={...t,...r}),Fo(e,r),Object.assign(e,r);for(const r in wo)null==e[r]&&(e[r]=wo[r]);let{frequency:n,damping:i}=e;const{mass:s}=e;xi.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*s,e.friction=4*Math.PI*i*s/n)}(b,co(r.config,s),r.config!==o.config?co(o.config,s):void 0);let y=Qs(this);if(!y||xi.und(c))return t(_o(this,!0));const v=xi.und(r.reset)?i&&!r.default:!xi.und(u)&&uo(r.reset,s),x=v?u:this.get(),w=vo(c),$=xi.num(w)||xi.arr(w)||Rs(w),F=!g&&(!$||uo(o.immediate||r.immediate,s));if(m){const e=io(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=fs(c),D=!1;if(!E){const e=v||!Lo(this)&&h;(m||e)&&(D=wi(vo(x),w),E=!D),(wi(a.immediate,F)||F)&&wi(b.decay,p)&&wi(b.velocity,f)||(E=!0)}if(D&&Ro(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!g&&((E||fs(l))&&(a.values=y.getPayload(),a.toValues=fs(c)?null:C==Ks?[1]:Ci(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;$i(Xo,(e=>Go(this,r,e)));const n=_o(this,Wo(this,l));Mi(this._pendingCalls,n),this._pendingCalls.add(t),a.changed&&ti.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?co(o.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),g?t(Ao(r.to,r,this._state,this)):E?this._start():Ro(this)&&!m?this._pendingCalls.add(t):t(Mo(x))}_focus(e){const r=this.animation;e!==r.to&&(vs(this)&&this._detach(),r.to=e,vs(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;fs(r)&&(Fs(r,this),Io(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;fs(e)&&Cs(e,this)}_set(e,r=!0){const t=ys(e);if(!xi.und(t)){const e=Qs(this);if(!e||!wi(t,e.getValue())){const n=io(t);e&&e.constructor==n?e.setValue(t):Zs(this,n.create(t)),e&&ti.batchedUpdates((()=>{this._onChange(t,r)}))}}return Qs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Jo(this,"onStart",_o(this,Wo(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),co(this.animation.onChange,e,this)),co(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Qs(this).reset(ys(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ro(this)||(Vo(this,!0),Ho(this)||this._resume())}_resume(){ei.skipAnimation?this.finish():Pi.start(this)}_stop(e,r){if(Ro(this)){Vo(this,!1);const t=this.animation;$i(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),xs(this,{type:"idle",parent:this});const n=r?Oo(this.get()):_o(this.get(),Wo(this,e??t.to));Mi(this._pendingCalls,n),t.changed&&(t.changed=!1,Jo(this,"onRest",n,this))}}};function Wo(e,r){const t=vo(r);return wi(vo(e.get()),t)}function Uo(e,r=e.loop,t=e.to){const n=co(r);if(n){const i=!0!==n&&yo(n),s=(i||e).reverse,o=!i||i.reset;return qo({...e,loop:r,default:!1,pause:void 0,to:!s||xo(t)?t:void 0,from:o?e.from:void 0,reset:o,...i})}}function qo(e){const{to:r,from:t}=e=yo(e),n=new Set;return xi.obj(r)&&Zo(r,n),xi.obj(t)&&Zo(t,n),e.keys=n.size?Array.from(n):null,e}function Qo(e){const r=qo(e);return xi.und(r.default)&&(r.default=bo(r)),r}function Zo(e,r){Fi(e,((e,t)=>null!=e&&r.add(t)))}var Xo=["onStart","onRest","onChange","onPause","onResume"];function Go(e,r,t){e.animation[t]=r[t]!==mo(r,t)?ho(r[t],e.key):void 0}function Jo(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var Ko=["onStart","onChange","onRest"],ea=1,ra=class{constructor(e,r){this.id=ea++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];xi.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(qo(e)),this}start(e){let{queue:r}=this;return e?r=Ci(e).map(qo):this.queue=[],this._flush?this._flush(this,r):(la(this,r),ta(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;$i(Ci(r),(r=>t[r].stop(!!e)))}else So(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(xi.und(e))this.start({pause:!0});else{const r=this.springs;$i(Ci(e),(e=>r[e].pause()))}return this}resume(e){if(xi.und(e))this.start({pause:!1});else{const r=this.springs;$i(Ci(e),(e=>r[e].resume()))}return this}each(e){Fi(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ei(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const s=!n&&this._started,o=i||s&&t.size?this.get():null;i&&r.size&&Ei(r,(([e,r])=>{r.value=o,e(r,this,this._item)})),s&&(this._started=!1,Ei(t,(([e,r])=>{r.value=o,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ti.onFrame(this._onFrame)}};function ta(e,r){return Promise.all(r.map((r=>na(e,r)))).then((r=>ko(e,r)))}async function na(e,r,t){const{keys:n,to:i,from:s,loop:o,onRest:a,onResolve:l}=r,d=xi.obj(r.default)&&r.default;o&&(r.loop=!1),!1===i&&(r.to=null),!1===s&&(r.from=null);const c=xi.arr(i)||xi.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):$i(Ko,(t=>{const n=r[t];if(xi.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,Mi(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),m=!0===r.cancel||!0===mo(r,"cancel");(c||m&&u.asyncId)&&h.push(Do(++e._lastAsyncId,{props:r,state:u,actions:{pause:vi,resume:vi,start(r,t){m?(So(u,e._lastAsyncId),t(Oo(e))):(r.onRest=a,t(Ao(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=ko(e,await Promise.all(h));if(o&&g.finished&&(!t||!g.noop)){const t=Uo(r,o,i);if(t)return la(e,[t]),na(e,t,!0)}return l&&ti.batchedUpdates((()=>l(g,e,e.item))),g}function ia(e,r){const t={...e.springs};return r&&$i(Ci(r),(e=>{xi.und(e.keys)&&(e=qo(e)),xi.obj(e.to)||(e={...e,to:void 0}),aa(t,e,(e=>oa(e)))})),sa(e,t),t}function sa(e,r){Fi(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,Fs(r,e))}))}function oa(e,r){const t=new No;return t.key=e,r&&Fs(t,r),t}function aa(e,r,t){r.keys&&$i(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function la(e,r){$i(r,(r=>{aa(e.springs,r,(r=>oa(r,e)))}))}var da,ca,ua=({children:e,...r})=>{const t=b(ha),i=r.pause||!!t.pause,a=r.immediate||!!t.immediate;r=function(e,r){const[t]=o((()=>({inputs:r,result:e()}))),n=s(),i=n.current;let a=i;a?Boolean(r&&a.inputs&&function(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(r,a.inputs))||(a={inputs:r,result:e()}):a=t;return u((()=>{n.current=a,i==t&&(t.inputs=t.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:l}=ha;return n.createElement(l,{value:r},e)},ha=(da=ua,ca={},Object.assign(da,n.createContext(ca)),da.Provider._context=da,da.Consumer._context=da,da);ua.Provider=ha.Provider,ua.Consumer=ha.Consumer;var ma=()=>{const e=[],r=function(r){Ls(`${js}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return $i(e,((e,i)=>{if(xi.und(r))n.push(e.start());else{const s=t(r,e,i);s&&n.push(e.start(s))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return $i(e,(e=>e.pause(...arguments))),this},r.resume=function(){return $i(e,(e=>e.resume(...arguments))),this},r.set=function(r){$i(e,((e,t)=>{const n=xi.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return $i(e,((e,n)=>{if(xi.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return $i(e,(e=>e.stop(...arguments))),this},r.update=function(r){return $i(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return xi.fun(e)?e(t,r):e};return r._getProps=t,r};function ga(e,r){const t=xi.fun(e),[[n],i]=function(e,r,t){const n=xi.fun(r)&&r;n&&!t&&(t=[]);const i=p((()=>n||3==arguments.length?ma():void 0),[]),o=s(0),a=Ys(),l=p((()=>({ctrls:[],queue:[],flush(e,r){const t=ia(e,r),n=o.current>0&&!l.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?ta(e,r):new Promise((n=>{sa(e,t),l.queue.push((()=>{n(ta(e,r))})),a()}))}})),[]),d=s([...l.ctrls]),c=[],u=Us(e)||0;function h(e,t){for(let i=e;i<t;i++){const e=d.current[i]||(d.current[i]=new ra(null,l.flush)),t=n?n(i,e):r[i];t&&(c[i]=Qo(t))}}p((()=>{$i(d.current.slice(e,u),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),t);const m=d.current.map(((e,r)=>ia(e,c[r]))),g=b(ua),f=Us(g),y=g!==f&&function(e){for(const r in e)return!0;return!1}(g);Hs((()=>{o.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],$i(e,(e=>e()))),$i(d.current,((e,r)=>{i?.add(e),y&&e.start({default:g});const t=c[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),Ns((()=>()=>{$i(l.ctrls,(e=>e.stop(!0)))}));const v=m.map((e=>({...e})));return i?[v,i]:v}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var ba=class extends To{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=as(...r);const t=this._get(),n=io(t);Zs(this,n.create(t))}advance(e){const r=this._get();wi(r,this.get())||(Qs(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&fa(this._active)&&ya(this)}_get(){const e=xi.arr(this.source)?this.source.map(ys):Ci(ys(this.source));return this.calc(...e)}_start(){this.idle&&!fa(this._active)&&(this.idle=!1,$i(Xs(this),(e=>{e.done=!1})),ei.skipAnimation?(ti.batchedUpdates((()=>this.advance())),ya(this)):Pi.start(this))}_attach(){let e=1;$i(Ci(this.source),(r=>{fs(r)&&Fs(r,this),Io(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){$i(Ci(this.source),(e=>{fs(e)&&Cs(e,this)})),this._active.clear(),ya(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ci(this.source).reduce(((e,r)=>Math.max(e,(Io(r)?r.priority:0)+1)),0))}};function pa(e){return!1!==e.idle}function fa(e){return!e.size||Array.from(e).every(pa)}function ya(e){e.idle||(e.idle=!0,$i(Xs(e),(e=>{e.done=!0})),xs(e,{type:"idle",parent:e}))}ei.assign({createStringInterpolator:Is,to:(e,r)=>new ba(e,r)});var va=/^--/;function xa(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||va.test(e)||$a.hasOwnProperty(e)&&$a[e]?(""+r).trim():r+"px"}var wa={};var $a={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fa=["Webkit","Ms","Moz","O"];$a=Object.keys($a).reduce(((e,r)=>(Fa.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),$a);var Ca=/^(matrix|translate|scale|rotate|skew)/,Ea=/^(translate)/,Da=/^(rotate|skew)/,ka=(e,r)=>xi.num(e)&&0!==e?e+r:e,Ma=(e,r)=>xi.arr(e)?e.every((e=>Ma(e,r))):xi.num(e)?e===r:parseFloat(e)===r,_a=class extends ro{constructor({x:e,y:r,z:t,...n}){const i=[],s=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),s.push((e=>[`translate3d(${e.map((e=>ka(e,"px"))).join(",")})`,Ma(e,0)]))),Fi(n,((e,r)=>{if("transform"===r)i.push([e||""]),s.push((e=>[e,""===e]));else if(Ca.test(r)){if(delete n[r],xi.und(e))return;const t=Ea.test(r)?"px":Da.test(r)?"deg":"";i.push(Ci(e)),s.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${ka(i,t)})`,Ma(i,0)]:e=>[`${r}(${e.map((e=>ka(e,t))).join(",")})`,Ma(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Oa(i,s)),super(n)}},Oa=class extends ws{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return $i(this.inputs,((t,n)=>{const i=ys(t[0]),[s,o]=this.transforms[n](xi.arr(i)?i:t.map(ys));e+=" "+s,r=r&&o})),r?"none":e}observerAdded(e){1==e&&$i(this.inputs,(e=>$i(e,(e=>fs(e)&&Fs(e,this)))))}observerRemoved(e){0==e&&$i(this.inputs,(e=>$i(e,(e=>fs(e)&&Cs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),xs(this,e)}};ei.assign({batchedUpdates:F,createStringInterpolator:Is,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Aa,Sa=((e,{applyAnimatedValues:r=(()=>!1),createAnimatedStyle:t=(e=>new ro(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},s=e=>{const r=lo(e)||"Anonymous";return(e=xi.str(e)?s[e]||(s[e]=so(e,i)):e[ao]||(e[ao]=so(e,i))).displayName=`Animated(${r})`,e};return Fi(e,((r,t)=>{xi.arr(e)&&(t=lo(r)),s[t]=s(r)})),{animated:s}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:s,scrollLeft:o,viewBox:a,...l}=r,d=Object.values(l),c=Object.keys(l).map((r=>t||e.hasAttribute(r)?r:wa[r]||(wa[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in n)if(n.hasOwnProperty(r)){const t=xa(r,n[r]);va.test(r)?e.style.setProperty(r,t):e.style[r]=t}c.forEach(((r,t)=>{e.setAttribute(r,d[t])})),void 0!==s&&(e.scrollTop=s),void 0!==o&&(e.scrollLeft=o),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new _a(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),za=Sa.animated;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let s=0;r>t&&(s=Math.floor((r-t)/i));const o=n+s;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const s=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,s)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:s="•",maskRegex:o,maskTransformer:a}=t;if(a)return a(e);if(o)return e.replace(o,s);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+s.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return s.repeat(e.substring(0,t).length)+e.substring(t,n+1)+s.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Aa||(Aa={}));var Ba={exports:{}};Ba.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",s="minute",o="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),s=t-i<0,o=r.clone().add(n+(s?-1:1),d);return+(-(n+(t-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:o,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var s=r.toLowerCase();x[s]&&(i=s),t&&(x[s]=t,i=s);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===m)},f.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return m(n?f-x:f+(6-x),p);case a:case h:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case s:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[s]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[m](g),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,m=this;n=Number(n);var g=E.p(c),b=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===a)return b(1);if(g===l)return b(7);var p=(h={},h[s]=r,h[o]=t,h[i]=e,h)[g]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),s=this.$H,o=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,s){return e&&(e[t]||e(r,n))||i[t].slice(0,s)},h=function(e){return E.s(s%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(s);case"HH":return E.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(s,o,!0);case"A":return g(s,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,m){var g,b=this,p=E.p(h),f=C(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(b,f)};switch(p){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-y)/6048e5;break;case a:g=(v-y)/864e5;break;case o:g=v/t;break;case s:g=v/r;break;case i:g=v/e;break;default:g=v}return m?g:E.a(g)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",o],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Ia,ja,Ta=L(Ba.exports);!function(e){e.AM="AM",e.PM="PM"}(Ia||(Ia={})),function(e){e.roundToNearestHour=(e,r)=>{const t=Ta(e,"HH:mm");return(0===t.minute()?t:r?t.minute(0).add(1,"hour"):t.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,r,t="ha")=>{const n="HH:mm";let i=Ta(e,n),s=Ta(r,n);i.isSame(s)&&(s=s.add(1,"day"));const o=[];for(;i.isBefore(s);)o.push(i.format(t)),i=i.add(1,"hour");return o},e.getTimeValues=(e,r)=>{const t={hour:"",minute:"",period:Ia.AM};if(!r)return t;try{if("24hr"===e){const n=Ra(r,e);t.minute=Aa.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(t.period=Ia.AM,t.hour=0===i?"12":Aa.padValue(i.toString())):(t.period=Ia.PM,t.hour=12===i?i.toString():Aa.padValue((i-12).toString()))}else{const n=Ra(r,e);t.hour=Aa.padValue(n.hour),t.minute=Aa.padValue(n.minute),t.period="am"===n.period.toLowerCase()?Ia.AM:Ia.PM}return t}catch(e){return t}},e.updateMinutes=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Aa.padValue("0"):"55";const n=Math.floor(t/5),i=(("add"===r?n+1:t%5==0?n-1:n)%12+12)%12;return Aa.padValue((5*i).toString())},e.updateHours=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Aa.padValue("1"):"12";const n="add"===r?t+1:t-1;return n<=12&&n>0?Aa.padValue(n.toString()):13===n?Aa.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let t;return t=e.period===Ia.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${t}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),t=r%12==0?12..toString():(r%12).toString();return Aa.padValue(t)},e.formatDisplayValue=(e,r)=>{try{const t=Ra(e,r),n=Aa.padValue(t.hour);let i=`${n}:${Aa.padValue(t.minute)}`;return"12hr"===r?(i+=t.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,t]=e.split(/(am|pm)/i),[n,i]=r.split(":").map(Number);let s=n;return"pm"===t&&s<12&&(s+=12),"am"===t&&12===s&&(s=0),Ha(s,i)}return e},e.generateTimings=(r,t="12hr",n,i)=>{const s=[];let o=0,a=1440-r;for(n&&(o=e.timeToMinutes(n)),i&&(a=e.timeToMinutes(i));o<=a;){let e=Math.floor(o/60);const n=o%60;if("12hr"===t){const r=e>=12?"pm":"am";e%=12,e=e||12;const t=Ha(e,n,r);s.push(t)}else{const r=Ha(e,n);s.push(r)}o+=r}return s},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const t=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(t);if(!n)return;let i=parseInt(n[1]||"0",10);const s=parseInt(n[3]||"0",10);let o=n[4];if(void 0===n[1]||i>24||s>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===r)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),Ha(i,s);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Ha(i,s,o)},e.findClosestFlooredTime=(r,t)=>{if(!r)return r;const n=e.timeToMinutes(r);let i="",s=1/0;for(const r of t){const t=e.timeToMinutes(r)-n;if(t<=0&&Math.abs(t)<s)s=Math.abs(t),i=r;else if(t>0)break}return i},e.timeToMinutes=e=>{const[r,t]=e.toLowerCase().split(/(am|pm)/),[n,i]=r.split(":").map(Number);let s=n;return"pm"===t&&12!==s&&(s+=12),"am"===t&&12===s&&(s=0),60*s+i}}(ja||(ja={}));const Pa=(e,r)=>{const t=parseInt(e);return"24hr"===r?t>=0&&t<=23:t>=1&&t<=12},La=e=>{const r=parseInt(e);return r>=0&&r<=59},Ra=(e,r)=>{const t=e.split(":"),n=new Error("Invalid format");if("12hr"===r){if(2!==t.length||4!==t[1].length)throw n;const e=t[1].substring(0,2),s=t[1].substring(2);if(!Pa(t[0],r)||!La(e)||"am"!==(i=s).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:t[0],minute:e,period:t[1].substring(2)}}if(2!==t.length)throw n;if(!Pa(t[0],r)||!La(t[1]))throw n;return{hour:t[0],minute:t[1]};var i},Ha=(e,r,t)=>t?`${e}:${r.toString().padStart(2,"0")}${t}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`,Va=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ya=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Na=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Ya} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Wa=f(Na)`
    animation-delay: -0.45s;
`,Ua=f(Na)`
    animation-delay: -0.3s;
`,qa=f(Na)`
    animation-delay: -0.15s;
`,Qa=f.button`
    padding: ${qt["spacing-8"]} ${qt["spacing-16"]};
    min-width: 4rem;
    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    border-radius: ${Qt.sm};
    transition: all ${Wt["duration-250"]} ${Wt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Yt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Yt["border-error-strong"]:Yt["border-primary"]};

                    color: ${e.$buttonIsDanger?Yt["text-error"]:Yt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Yt["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Yt.bg};
                    border-color: ${Yt.border};

                    color: ${e.$buttonIsDanger?Yt["text-error"]:Yt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Yt["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Yt["text-error"]:Yt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Yt["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${Yt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Yt["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Yt["bg-error-strong"]:Yt["bg-primary"]};

                    ${Zt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Yt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Yt["bg-error-strong-hover"]:Yt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${Nt["body-md-semibold"]}

                    ${Zt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${Nt["header-md-semibold"]}

                    ${Zt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${Nt["header-xs-semibold"]}

                    ${Zt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Za=f((({color:t,className:n,size:i})=>e(Va,Object.assign({className:n,$size:i,$color:t},{children:[r(Na,{id:"inner1"}),r(Wa,{id:"inner2"}),r(Ua,{id:"inner3"}),r(qa,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Xa=(t,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,d=T(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Qa,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[o&&r(Za,{}),r("span",{children:i})]}))};Xa.displayName="Button.Default";const Ga=(t,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,d=T(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Qa,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[o&&r(Za,{}),r("span",{children:i})]}))};Ga.displayName="Button.Small";const Ja=(t,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,d=T(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Qa,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[o&&r(Za,{}),r("span",{children:i})]}))};Ja.displayName="Button.Large";const Ka={Default:i.forwardRef(Xa),Small:i.forwardRef(Ga),Large:i.forwardRef(Ja)};var el={exports:{}};el.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,s={},o=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=s[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=s.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=s.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=s&&s.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var s=n&&n.toUpperCase();return t||i[n]||e[n]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=o.length,l=0;l<a;l+=1){var d=o[l],c=u[d],h=c&&c[0],m=c&&c[1];o[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var s=i.regex,l=i.parser,d=e.slice(n),c=s.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var a=o[1];if("string"==typeof a){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),s=this.$locale(),!l&&u&&(s=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,s=n.month,o=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,g=o||(i||s?1:m.getDate()),b=i||m.getFullYear(),p=0;i&&!s||(p=s>0?s-1:m.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,p,g,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,p,g,f,y,v,x)):new Date(b,p,g,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var m=a.length,g=1;g<=m;g+=1){o[1]=a[g-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}g===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var rl=L(el.exports),tl={exports:{}};tl.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var s=t(e),o=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(s,n):!this.isBefore(s,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(a?this.isBefore(s,n):!this.isAfter(s,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var nl=L(tl.exports),il={exports:{}};il.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var sl=L(il.exports),ol={exports:{}};ol.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var al,ll,dl,cl=L(ol.exports),ul={exports:{}},hl=L(ul.exports=(al={year:0,month:1,day:2,hour:3,minute:4,second:5},ll={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=ll[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ll[n]=i),i}(r,t);return i.formatToParts(n)},s=function(e,r){for(var n=i(e,r),s=[],o=0;o<n.length;o+=1){var a=n[o],l=a.type,d=a.value,c=al[l];c>=0&&(s[c]=parseInt(d,10))}var u=s[3],h=24===u?0:u,m=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",g=+e;return(t.utc(m).valueOf()-(g-=g%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),s=this.toDate(),o=s.toLocaleString("en-US",{timeZone:e}),a=Math.round((s-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,a=i||r||n,l=s(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=s(n,t);if(r===i)return[n,r];var o=s(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Ta.extend(nl),Ta.extend(cl),Ta.extend(sl),Ta.extend(rl),Ta.extend(hl),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Ta(r).startOf("week");return ml(t).map((e=>gl(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return gl(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Ta(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Ta(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Ta(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const s=e.isWithinRange(r,n?Ta(n):void 0,i?Ta(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!s||!!o}}(dl||(dl={}));const ml=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},gl=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},bl=[1,3,5,7,8,10,12],pl=[4,6,9,11];var fl,yl,vl;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),s=parseInt(t),o=parseInt(n);return 0==i?"1":bl.includes(s)?Math.min(i,31).toString():pl.includes(s)?Math.min(i,30).toString():2===s?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Ta(e,t);return Ta(r,t).diff(n,"minute")},e.toDayjs=e=>e?Ta(e):Ta(),e.addMinutesToTime=(e,r,t="HH:mm")=>Ta(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Ta(e).isSame(Ta(r),t)}(fl||(fl={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Ta(e).isBefore(n,"day"))||!(!i||!Ta(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ta(e).isValid())return e}return""}}(yl||(yl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(vl||(vl={}));const xl=(e,r,t="window",n)=>{const i=s();u((()=>{i.current=r}),[r]),u((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!(r&&r.addEventListener))return;const s=e=>i.current(e);return r.addEventListener(e,s,n),()=>{r.removeEventListener(e,s,n)}}),[e,t])},wl=e=>{const{textSize:r}=e||{};return y`
        // Text styling
        ${r&&Nt[`${r}-regular`]}

        strong {
            font-weight: ${Nt.Spec["weight-semibold"]};
            ${r&&Nt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Nt.Spec["weight-semibold"]};
            ${r&&Nt[`${r}-semibold`]}
            color: ${Yt.hyperlink};
            text-decoration: none;

            svg {
                color: ${Yt["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Yt["hyperlink-hover"]};

                svg {
                    color: ${Yt["icon-hover"]};
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
    `},$l=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return y`
        ${Nt[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Fl=(e,r)=>y`
    ${$l(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?y`
            display: block;
        `:e?y`
            display: inline;
        `:y`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Yt.text};
`;var Cl;!function(t){const n=(e,r,t)=>{const n=f(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Fl(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=f.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Fl(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const s=(t,n)=>{const i=f.a`
            ${e=>y`
                ${$l(t,e.weight||"regular")}
                color: ${Yt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Yt["text-hover"]};
                }
            `}
        `,s=t=>{var{external:n=!1,children:s}=t,o=T(t,["external","children"]);return e(i,Object.assign({},o,{children:[s,n&&r(El,{})]}))};return s.displayName=`Typography.${n}`,s};t.LinkBL=s("body-baseline","LinkBL"),t.LinkMD=s("body-md","LinkMD"),t.LinkSM=s("body-sm","LinkSM"),t.LinkXS=s("body-xs","LinkXS")}(Cl||(Cl={}));const El=f(O)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Dl=f.div`
    padding: ${qt[8]} ${qt["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=Yt["bg-error"](e),t=Yt["border-error"](e);break;case"success":r=Yt["bg-success"](e),t=Yt["border-success"](e);break;case"warning":default:r=Yt["bg-warning"](e),t=Yt["border-warning"](e);break;case"info":r=Yt["bg-info"](e),t=Yt["border-info"](e);break;case"description":r=Yt["bg-strong"](e),t=Yt["border-strong"](e)}return y`
            background: ${r};
            border-left: ${Ut["width-020"]} ${Ut.solid}
                ${t};
        `}}

    color: ${Yt.text};
    ${e=>"small"===e.$sizeType?wl({textSize:"body-sm"}):wl({textSize:"body-md"})}
`,kl=f.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${qt["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Yt["icon-error"](e);break;case"success":r=Yt["icon-success"](e);break;case"warning":default:r=Yt["icon-warning"](e);break;case"info":r=Yt["icon-info"](e);break;case"description":r=Yt["icon-subtle"](e)}return y`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Ml=f(Cl.LinkSM)`
    ${e=>"small"===e.$sizeType?y`
                ${Nt["body-sm-semibold"]}
                margin-top: ${qt["spacing-4"]};
            `:y`
                ${Nt["body-md-semibold"]}
                margin-top: ${qt["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${qt["spacing-4"]};
    }
`,_l=f.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ol=f.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return y`
                margin-bottom: ${qt["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Al=f.button`
    ${e=>"small"===e.$sizeType?y`
                ${Nt["body-sm-semibold"]}
            `:y`
                ${Nt["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${qt["spacing-4"]};
    margin-top: ${qt["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Yt["text-primary"]};
`,Sl=f(_)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wt["duration-350"]} ${Wt["ease-standard"]};
`,zl=f.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?y`
                    color: ${Yt["icon-selected-disabled"]};
                `:y`
                    color: ${Yt["icon-disabled-subtle"]};
                `:e.$active?y`
                color: ${Yt["icon-selected"]};
            `:y`
            color: ${Yt["icon-subtle"]};
        `};
`,Bl=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Il=(f.ol`
    ${e=>Bl(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Zt.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Nt[`${e.size}-regular`]}
        position: relative;
        color: ${Yt.text};
    }

    ${e=>{const{reversed:r}=e,t=e.counterType||"decimal",n=e.counterSeparator||")";return y`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return y`
                counter-reset: list ${r?t+1:t-1};
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
`,f.ul`
    ${e=>Bl(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Nt[`${e.size}-regular`]}
        color: ${Yt.text};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),jl=e=>{var{size:t="body-baseline",children:n}=e,i=T(e,["size","children"]);return r(Il,Object.assign({size:t},i,{children:n}))},Tl=f.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Yt.bg};

    ${e=>{if(!e.$indicator)return y`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return y`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?y`
                            border-color: ${Yt["border-error"]};
                        `:y`
                            border-color: ${Yt["border-error"]};

                            &:has(${Vl}:hover) {
                                background: ${Yt["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?y`
                            border: none;
                            background: ${Yt["bg-selected-disabled"]};
                        `:y`
                            border: none;
                        `:e.$selected?y`
                        border: none;
                        background: ${Yt["bg-selected"]};

                        &:has(${Vl}:hover) {
                            background: ${Yt["bg-selected-hover"]};

                            & ${Ll} {
                                color: ${Yt["text-selected-hover"]};
                            }

                            & ${Gl} {
                                color: ${Yt["icon-selected-hover"]};
                            }
                        }
                    `:y`
                    border: none;

                    &:has(${Vl}:hover) {
                        background: ${Yt["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?y`
                            border-color: ${Yt["border-error"]};
                        `:y`
                            border-color: ${Yt["border-error"]};

                            &:has(${Vl}:hover) {
                                background: ${Yt["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?y`
                            border-color: ${Yt["border-selected-disabled"]};
                            background: ${Yt["bg-selected-disabled"]};
                        `:y`
                            border-color: ${Yt["border-disabled"]};
                            background: ${Yt["bg-disabled"]};
                        `:e.$selected?y`
                        border-color: ${Yt["border-selected"]};
                        background: ${Yt["bg-selected"]};

                        &:has(${Vl}:hover) {
                            background: ${Yt["bg-selected-hover"]};

                            & ${Ll} {
                                color: ${Yt["text-selected-hover"]};
                            }

                            & ${Gl} {
                                color: ${Yt["icon-selected-hover"]};
                            }
                        }
                    `:y`
                    border-color: ${Yt.border};

                    &:has(${Vl}:hover) {
                        background: ${Yt["bg-hover-subtle"]};
                    }
                `}
`,Pl=f.input`
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
`,Ll=f.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?y`
                    color: ${Yt["text-selected-disabled"]};
                `:y`
                    color: ${Yt["text-disabled"]};
                `:e.$selected?y`
                color: ${Yt["text-selected"]};
            `:y`
            color: ${Yt.text};
        `}
`,Rl=f.label`
    ${Nt["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${Zt.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${Zt.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,Hl=f.div`
    ${Nt["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Nt["body-md-semibold"]}
    }
`,Vl=f.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Yl=f.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Nl=f.button`
    color: ${e=>e.$disabled?Yt["text-disabled"]:Yt["text-error"]};
    white-space: nowrap;
    ${Nt["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Wl=f.button`
    color: ${e=>e.disabled?Yt["text-disabled"]:Yt["text-primary"]};
    ${Nt["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Yt.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Ul=f.div`
    width: 100%;
    color: ${e=>e.$disabled?Yt["text-disabled"]:Yt["text-error"]};
    border: none;
    background: ${Yt.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ql=f((t=>{var{type:n,className:i,children:s,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:h,maxCollapsedHeight:m}=t,g=T(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,p]=o(!1),[f,y]=o(!1),{height:v,ref:x}=Jn();u((()=>{w()}),[m,v]);const w=()=>{p(!m),y($())},$=()=>!!m&&v>m;return e(Dl,Object.assign({className:i,$type:n,$sizeType:d,"data-testid":g["data-testid"]},{children:[c&&r(kl,Object.assign({$sizeType:d,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return r(M,{});case"warning":return r(D,{});case"error":return r(E,{});case"info":case"description":return r(k,{});default:return null}})()})),e(_l,{children:[e(Ol,Object.assign({$maxCollapsedHeight:$()?m:void 0,$showMore:b,$hasActionLink:!!a},{children:[r("div",Object.assign({ref:x},{children:s})),a&&e(Ml,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d},a,{children:[a.children,l||r(C,{})]}))]})),f&&e(Al,Object.assign({$sizeType:d,$type:n,type:"button",onClick:()=>p(!b)},{children:["Show ",b?"less":"more",r(Sl,{$expanded:b})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,Ql=f.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Yt.bg};
    ${wl({textSize:"body-md"})}

    ${e=>e.$disabled?y`
                color: ${Yt["text-disabled"]};
            `:e.$selected?y`
                color: ${Yt["text-selected"]};
            `:y`
                color: ${Yt.text};
            `}
`,Zl=f(Cl.BodyMD)`
    color: ${e=>e.$disabled?Yt["text-disabled"]:Yt["text-error"]};
`,Xl=f(jl)`
    color: ${e=>e.$disabled?Yt["text-disabled"]:Yt["text-error"]};
`,Gl=f((({type:e,active:t=!1,disabled:n,className:i})=>{let s;switch(e){case"checkbox":s=r(t?I:B,{});break;case"radio":s=r(t?S:A,{});break;case"tick":s=r(j,{});break;case"cross":s=r(z,{});break;default:s=null}return r(zl,Object.assign({className:i,$active:t,$disabled:n},{children:s}))}))`
    ${e=>e.$disabled?e.$selected?y`
                    color: ${Yt["icon-selected-disabled"]};
                `:y`
                    color: ${Yt["icon-disabled-subtle"]};
                `:e.$selected?y`
                color: ${Yt["icon-selected"]};
            `:y`
            color: ${Yt["icon-subtle"]};
        `};
`,Jl=f.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${qt["spacing-32"]};
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
                background-color: ${Yt["bg-hover-neutral"]};
            `}
    }
`,Kl=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:s="none",type:o="button"}=e,a=T(e,["children","focusHighlight","focusOutline","type"]);return r(Jl,Object.assign({ref:t,$outline:s,$highlight:i,type:o},a,{children:n}))})),ed=f(za.div)`
    position: absolute;
    top: calc(3rem + ${qt["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Zt.MaxWidth.xxs} {
        max-width: 100%;
    }
`,rd=f.div`
    position: relative;
    width: 100%;
    padding: ${qt["spacing-8"]} ${qt["spacing-20"]}
        ${qt["spacing-24"]} ${qt["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Yt.bg};
    border: ${Ut["width-010"]} ${Ut.solid} ${Yt.border};
    border-radius: ${Qt.sm};
`,td=f.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Zt.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,nd=f.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${qt["spacing-16"]};
    gap: ${qt["spacing-8"]} ${qt["spacing-16"]};

    ${Zt.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${qt["spacing-32"]};
    }
`,id=f.div`
    display: flex;
    align-items: center;
    margin-right: ${qt["spacing-32"]};

    ${Zt.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,sd=f.div`
    display: flex;
    gap: ${qt["spacing-8"]};

    ${Zt.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Zt.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,od=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Zt.MaxWidth.xxs} {
        width: 6rem;
    }
`,ad=f(Kl)`
    width: 5rem;
    padding: ${qt["spacing-16"]} 0;
    color: ${Yt.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Yt["icon-hover"]};
    }
`,ld=f(Cl.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,dd=f(en)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Zt.MaxWidth.xxs} {
        width: 100%;
    }
`,cd=f(tn)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,ud=f((({type:n="checkbox",indicator:i,checked:a,styleType:l="default",children:d,childrenMaxLines:c,subLabel:h,disabled:m,error:g,name:b,id:f,className:y,compositeSection:v,removable:$,onRemove:F,"data-testid":C,onChange:E,useContentWidth:D})=>{const{collapsible:k=!0,errors:M,children:_,initialExpanded:O}=v||{},[A,S]=o(a),[z,B]=o(O),I=p((()=>{const e=Array.isArray(M)&&(null==M?void 0:M.length)>0,r=!Array.isArray(M)&&!!M;return e||r}),[M]),[j]=o(vl.generate()),T=f?`${f}`:`tg-${j}`,P=s();u((()=>{S(a)}),[a]),u((()=>{A&&B(null==O||O)}),[A]);const L=e=>{if(!m){if(E)return void E(e);switch(n){case"checkbox":S((e=>!e));break;case"radio":case"yes":case"no":A||S(!0)}}},R=()=>{m||B(!z)},H=()=>{m||!F||F()},V=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return r(Gl,{type:e,active:A,disabled:m,$selected:A,$disabled:m})},Y=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,r(Hl,Object.assign({"data-id":"toggle-sublabel"},{children:e}))},N=()=>{const t=!z&&!I;return k&&e(Wl,Object.assign({$paddingTopRequired:t,disabled:m,onClick:R,"data-testid":z?"collapse-button":"expand-button"},{children:[z?"Show less":"Show more",r(z?w:x,{"aria-hidden":!0})]}))},W=n=>e(t,{children:[r(Zl,Object.assign({weight:"semibold",$disabled:m},{children:"Error"})),r(Xl,Object.assign({$disabled:m},{children:null==n?void 0:n.map(((e,t)=>r("li",Object.assign({id:`${T}-error-list-item-${t}`},{children:r(Zl,Object.assign({weight:"semibold",$disabled:m},{children:e}))}),t)))}))]});return e(Tl,Object.assign({$selected:A,$disabled:m,className:y,$styleType:l,$error:g,$indicator:i,$useContentWidth:D,id:f,"data-testid":C},{children:[e(Vl,Object.assign({id:`${T}-header-container`,$disabled:m,$error:g,$selected:A,$indicator:i,$styleType:l},{children:[e(Yl,Object.assign({$addPadding:$},{children:[r(Pl,{ref:P,name:b,id:`${T}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:L,checked:A}),i&&V(),e(Ll,Object.assign({$selected:A,$disabled:m},{children:[r(Rl,Object.assign({htmlFor:`${T}-input`,"data-testid":`${T}-toggle-label`,$maxLines:c},{children:d})),h&&Y()]}))]})),$&&r(Nl,Object.assign({type:"button",$disabled:m,onClick:H,id:`${T}-remove-button`},{children:"Remove"}))]})),_&&e("div",{children:[(!k||z)&&r(Ql,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:m},{children:_})),k&&!z&&I&&r(Ul,Object.assign({$disabled:m,onClick:R,id:`${T}-error-alert`},{children:r(ql,Object.assign({type:m?"description":"error",className:y,showIcon:!0},{children:Array.isArray(M)?W(M):M}))})),N()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,hd=f(Ka.Small)`
    width: 7rem;

    ${Zt.MaxWidth.sm} {
        flex: 1;
    }

    ${Zt.MaxWidth.xxs} {
        width: 100%;
    }
`;var md,gd,bd;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(md||(md={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(gd||(gd={})),function(e){e.AM="am",e.PM="pm"}(bd||(bd={}));const pd=({id:t,value:n,show:i,format:a,onChange:l,onCancel:d})=>{const c=ja.getTimeValues(a,n),[h,m]=o(c.hour),[b,p]=o(c.minute),[f,y]=o(c.period),v=s(),$=s(),F=Jn();u((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:r,period:t}=ja.getTimeValues(a,n);m(e),p(r),y(t)}}),[i,n,a]),u((()=>{const e=v.current,r=$.current;return e&&e.addEventListener("keydown",C),r&&r.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),r&&r.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},E=g((e=>{switch(e.currentTarget.name){case md.MINUTE_UP:p(ja.updateMinutes(b,"add"));break;case md.MINUTE_DOWN:p(ja.updateMinutes(b,"minus"));break;case md.HOUR_UP:m(ja.updateHours(h,"add"));break;case md.HOUR_DOWN:m(ja.updateHours(h,"minus"))}}),[h,b]),D=e=>{e.target.select()},k=e=>{const r=e.target.value;switch(e.target.name){case gd.HOUR:r.length<=2&&m(r);break;case gd.MINUTE:r.length<=2&&p(r)}},M=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case gd.HOUR:{const t=r>23||r<0?c.hour:ja.convertHourTo12HourFormat(e.target.value);m(t);break}case gd.MINUTE:{const t=r>59||r<0?c.minute:e.target.value;p(Aa.padValue(t));break}}},_=e=>{switch(e.target.name){case bd.AM:y(Ia.AM);break;case bd.PM:y(Ia.PM)}},O=e=>t?`${t}-${e}`:e,A=ga({opacity:i?1:0,height:i?F.height+32+2:0});return r(ed,Object.assign({"data-testid":"animated-dropdown-wrapper",style:A},{children:e(rd,Object.assign({ref:F.ref,"data-testid":O("timepicker-dropdown"),inert:i?void 0:""},{children:[e(td,{children:[e(id,{children:[e(od,{children:[r(ad,Object.assign({"aria-label":"increase hour",name:md.HOUR_UP,tabIndex:-1,onClick:E,"data-testid":O("hour-increment-button")},{children:r(w,{})})),r(dd,{children:r(cd,{"aria-label":"hour",type:"number",name:gd.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:D,onChange:k,onBlur:M,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),r(ad,Object.assign({"aria-label":"decrease hour",name:md.HOUR_DOWN,tabIndex:-1,onClick:E,"data-testid":O("hour-decrement-button")},{children:r(x,{})}))]}),r(ld,{children:":"}),e(od,{children:[r(ad,Object.assign({"aria-label":"increase minute",name:md.MINUTE_UP,tabIndex:-1,onClick:E,"data-testid":O("minute-increment-button")},{children:r(w,{})})),r(dd,{children:r(cd,{"aria-label":"minute",type:"number",name:gd.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:$,value:b,onChange:k,onBlur:M,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),r(ad,Object.assign({"aria-label":"decrease minute",name:md.MINUTE_DOWN,tabIndex:-1,onClick:E,"data-testid":O("minute-decrement-button")},{children:r(x,{})}))]})]}),e(sd,{children:[r(ud,Object.assign({checked:f===Ia.AM,name:bd.AM,type:"radio",onChange:_,"data-testid":O("am-toggle"),"aria-label":"AM"},{children:"AM"})),r(ud,Object.assign({checked:f===Ia.PM,name:bd.PM,type:"radio",onChange:_,"data-testid":O("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(nd,{children:[r(hd,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":O("cancel-button")},{children:"Cancel"})),r(hd,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?ja.convertTo24HourFormat({hour:h,minute:b,period:f}):`${h}:${b}${f}`,l(e)},disabled:""===h||""===b,"data-testid":O("confirm-button")},{children:"Done"}))]})]}))}))};f.div`
    position: relative;
`;const fd=f(tn)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,yd=t=>{var{id:n,disabled:i=!1,readOnly:a=!1,error:l,value:d,placeholder:c,format:u="24hr",onChange:h,onFocus:m,onBlur:b}=t,p=T(t,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[f,y]=o(!1),v=s();xl("mousedown",(function(e){i||a||$(e)}),"document"),xl("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||a||f||(y(!0),m&&m())};const w=()=>{y(!1),b&&b()},$=e=>{v&&!v.current.contains(e.target)&&f&&w()},F=g((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return e(rn,Object.assign({ref:v,id:n,$readOnly:a,$disabled:i,$error:l},p,{children:[r(fd,{onFocus:x,focused:f,readOnly:!0,placeholder:c||F(),value:ja.formatDisplayValue(d,u),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),r(pd,{id:n,show:f,value:d,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))};export{yd as Timepicker};
//# sourceMappingURL=index.js.map
