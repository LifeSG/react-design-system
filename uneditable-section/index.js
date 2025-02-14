import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h}from"react";import m,{css as f,useTheme as g,keyframes as b}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{EyeIcon as y}from"@lifesg/react-icons/eye";import{EyeSlashIcon as v}from"@lifesg/react-icons/eye-slash";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as w,FloatingTree as $,useFloatingNodeId as F,FloatingNode as C,useFloating as E,autoUpdate as O,offset as D,flip as S,shift as M,limitShift as j,useClick as k,useDismiss as z,useHover as A,useInteractions as B,FloatingPortal as _,FloatingFocusManager as T}from"@floating-ui/react";import L,{findDOMNode as R}from"react-dom";import{CrossIcon as I}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as P}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as Y}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as W}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as H}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as N}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as V}from"@lifesg/react-icons";function U(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Q=Array.isArray,X="object"==typeof q&&q&&q.Object===Object&&q,J="object"==typeof self&&self&&self.Object===Object&&self,G=X||J||Function("return this")(),K=G.Symbol,ee=K,re=Object.prototype,te=re.hasOwnProperty,ne=re.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var r=te.call(e,ie),t=e[ie];try{e[ie]=void 0;var n=!0}catch(e){}var i=ne.call(e);return n&&(r?e[ie]=t:delete e[ie]),i},ae=Object.prototype.toString;var se=oe,le=function(e){return ae.call(e)},de=K?K.toStringTag:void 0;var ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?se(e):le(e)};var ue=ce,he=function(e){return null!=e&&"object"==typeof e};var me=function(e){return"symbol"==typeof e||he(e)&&"[object Symbol]"==ue(e)},fe=Q,ge=me,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var ye=function(e,r){if(fe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ge(e))||(pe.test(e)||!be.test(e)||null!=r&&e in Object(r))};var ve=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},xe=ce,we=ve;var $e,Fe=function(e){if(!we(e))return!1;var r=xe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ce=G["__core-js_shared__"],Ee=($e=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||""))?"Symbol(src)_1."+$e:"";var Oe=function(e){return!!Ee&&Ee in e},De=Function.prototype.toString;var Se=Fe,Me=Oe,je=ve,ke=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ze=/^\[object .+?Constructor\]$/,Ae=Function.prototype,Be=Object.prototype,_e=Ae.toString,Te=Be.hasOwnProperty,Le=RegExp("^"+_e.call(Te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Re=function(e,r){return null==e?void 0:e[r]},Ie=function(e){return!(!je(e)||Me(e))&&(Se(e)?Le:ze).test(ke(e))},Pe=Re;var Ye=function(e,r){var t=Pe(e,r);return Ie(t)?t:void 0},We=Ye(Object,"create"),He=We;var Ne=function(){this.__data__=He?He(null):{},this.size=0};var Ve=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=We,qe=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ue){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return qe.call(r,e)?r[e]:void 0},Qe=We,Xe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Qe?void 0!==r[e]:Xe.call(r,e)},Ge=We;var Ke=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},er=Ne,rr=Ve,tr=Ze,nr=Je,ir=Ke;function or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}or.prototype.clear=er,or.prototype.delete=rr,or.prototype.get=tr,or.prototype.has=nr,or.prototype.set=ir;var ar=or;var sr=function(){this.__data__=[],this.size=0};var lr=function(e,r){return e===r||e!=e&&r!=r};var dr=function(e,r){for(var t=e.length;t--;)if(lr(e[t][0],r))return t;return-1},cr=dr,ur=Array.prototype.splice;var hr=function(e){var r=this.__data__,t=cr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ur.call(r,t,1),--this.size,!0)},mr=dr;var fr=function(e){var r=this.__data__,t=mr(r,e);return t<0?void 0:r[t][1]},gr=dr;var br=function(e){return gr(this.__data__,e)>-1},pr=dr;var yr=function(e,r){var t=this.__data__,n=pr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},vr=sr,xr=hr,wr=fr,$r=br,Fr=yr;function Cr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Cr.prototype.clear=vr,Cr.prototype.delete=xr,Cr.prototype.get=wr,Cr.prototype.has=$r,Cr.prototype.set=Fr;var Er=Cr,Or=Ye(G,"Map"),Dr=ar,Sr=Er,Mr=Or;var jr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var kr=function(e,r){var t=e.__data__;return jr(r)?t["string"==typeof r?"string":"hash"]:t.map},zr=kr;var Ar=function(e){var r=zr(this,e).delete(e);return this.size-=r?1:0,r},Br=kr;var _r=function(e){return Br(this,e).get(e)},Tr=kr;var Lr=function(e){return Tr(this,e).has(e)},Rr=kr;var Ir=function(e,r){var t=Rr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Pr=function(){this.size=0,this.__data__={hash:new Dr,map:new(Mr||Sr),string:new Dr}},Yr=Ar,Wr=_r,Hr=Lr,Nr=Ir;function Vr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Vr.prototype.clear=Pr,Vr.prototype.delete=Yr,Vr.prototype.get=Wr,Vr.prototype.has=Hr,Vr.prototype.set=Nr;var Ur=Vr;function qr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(qr.Cache||Ur),t}qr.Cache=Ur;var Zr=qr;var Qr=function(e){var r=Zr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Gr=Qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Xr,(function(e,t,n,i){r.push(n?i.replace(Jr,"$1"):t||e)})),r}));var Kr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},et=Q,rt=me,tt=K?K.prototype:void 0,nt=tt?tt.toString:void 0;var it=function e(r){if("string"==typeof r)return r;if(et(r))return Kr(r,e)+"";if(rt(r))return nt?nt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},ot=it;var at=Q,st=ye,lt=Gr,dt=function(e){return null==e?"":ot(e)};var ct=me;var ut=function(e,r){return at(e)?e:st(e,r)?[e]:lt(dt(e))},ht=function(e){if("string"==typeof e||ct(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var mt=function(e,r){for(var t=0,n=(r=ut(r,e)).length;null!=e&&t<n;)e=e[ht(r[t++])];return t&&t==n?e:void 0};var ft=Z((function(e,r,t){var n=null==e?void 0:mt(e,r);return void 0===n?t:n}));const gt=(e,r,t)=>ft(t,r)||ft(e,r),bt=(e,r)=>{const t=r||e.defaultValue;return ft(e.collections,t)},pt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,i=bt(pt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?gt(i,e,n.overrides.breakpoint):i[e],o},vt={"xxs-min":yt("xxs-min"),"xxs-max":yt("xxs-max"),"xs-min":yt("xs-min"),"xs-max":yt("xs-max"),"sm-min":yt("sm-min"),"sm-max":yt("sm-max"),"md-min":yt("md-min"),"md-max":yt("md-max"),"lg-min":yt("lg-min"),"lg-max":yt("lg-max"),"xl-min":yt("xl-min"),"xl-max":yt("xl-max"),"xxl-min":yt("xxl-min"),"xxs-column":yt("xxs-column"),"xs-column":yt("xs-column"),"sm-column":yt("sm-column"),"md-column":yt("md-column"),"lg-column":yt("lg-column"),"xl-column":yt("xl-column"),"xxl-column":yt("xxl-column"),"xxs-gutter":yt("xxs-gutter"),"xs-gutter":yt("xs-gutter"),"sm-gutter":yt("sm-gutter"),"md-gutter":yt("md-gutter"),"lg-gutter":yt("lg-gutter"),"xl-gutter":yt("xl-gutter"),"xxl-gutter":yt("xxl-gutter"),"xxs-margin":yt("xxs-margin"),"xs-margin":yt("xs-margin"),"sm-margin":yt("sm-margin"),"md-margin":yt("md-margin"),"lg-margin":yt("lg-margin"),"xl-margin":yt("xl-margin"),"xxl-margin":yt("xxl-margin")},xt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=vt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),wt={MaxWidth:xt("max-width"),MinWidth:xt("min-width")},$t=m.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:t,$xlStart:n,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:h,$xxsStart:m,$xxsSpan:g}=e;return f`
            grid-column: ${r||"auto"} / span ${t||1};

            ${wt.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${i||1};
            }

            ${wt.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${a||1};
            }

            ${wt.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${wt.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${wt.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${wt.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${g||1};
            }
        `}}
`,Ft=i.forwardRef(((r,t)=>{const n=g(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=r,u=U(r,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,n]=e;if(-1===n)return{start:t,span:r-t+1};return{start:t,span:Math.min(n-t,r)}}return{start:void 0,span:Math.min(e,r)}};return e($t,Object.assign({ref:t},(()=>{const e=vt["xxl-column"]({theme:n}),r=vt["xl-column"]({theme:n}),t=vt["lg-column"]({theme:n}),u=vt["md-column"]({theme:n}),m=vt["sm-column"]({theme:n}),f=vt["xs-column"]({theme:n}),g=vt["xxs-column"]({theme:n}),b=h(i||o||a||s||l||d||c,e,"xxl"),p=h(o||a||s||l||d||c,r,"xl"),y=h(a||s||l||d||c,t,"lg"),v=h(s||l||d||c,u,"md"),x=h(l||d||c,m,"sm"),w=h(d||c,f,"xs"),$=h(c,g,"xxs");return{$xxlStart:b.start,$xxlSpan:b.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:v.start,$mdSpan:v.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Ct={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,i=bt(Ct,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?gt(i,e,n.overrides.motion):i[e]},Ot={"duration-150":Et("duration-150"),"duration-250":Et("duration-250"),"duration-350":Et("duration-350"),"duration-500":Et("duration-500"),"duration-800":Et("duration-800"),"duration-1000":Et("duration-1000"),"ease-default":Et("ease-default"),"ease-standard":Et("ease-standard"),"ease-entrance":Et("ease-entrance"),"ease-exit":Et("ease-exit")},Dt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},St=e=>r=>{var t;const n=r.theme,i=bt(Dt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?gt(i,e,n.overrides.primitiveColour):i[e]},Mt={"brand-10":St("brand-10"),"brand-20":St("brand-20"),"brand-30":St("brand-30"),"brand-40":St("brand-40"),"brand-50":St("brand-50"),"brand-60":St("brand-60"),"brand-70":St("brand-70"),"brand-80":St("brand-80"),"brand-90":St("brand-90"),"brand-95":St("brand-95"),"brand-100":St("brand-100"),"primary-10":St("primary-10"),"primary-20":St("primary-20"),"primary-30":St("primary-30"),"primary-40":St("primary-40"),"primary-50":St("primary-50"),"primary-60":St("primary-60"),"primary-70":St("primary-70"),"primary-80":St("primary-80"),"primary-90":St("primary-90"),"primary-95":St("primary-95"),"primary-100":St("primary-100"),"secondary-10":St("secondary-10"),"secondary-20":St("secondary-20"),"secondary-30":St("secondary-30"),"secondary-40":St("secondary-40"),"secondary-50":St("secondary-50"),"secondary-60":St("secondary-60"),"secondary-70":St("secondary-70"),"secondary-80":St("secondary-80"),"secondary-90":St("secondary-90"),"secondary-95":St("secondary-95"),"secondary-100":St("secondary-100"),"neutral-10":St("neutral-10"),"neutral-20":St("neutral-20"),"neutral-30":St("neutral-30"),"neutral-40":St("neutral-40"),"neutral-50":St("neutral-50"),"neutral-60":St("neutral-60"),"neutral-70":St("neutral-70"),"neutral-80":St("neutral-80"),"neutral-90":St("neutral-90"),"neutral-95":St("neutral-95"),"neutral-100":St("neutral-100"),"success-10":St("success-10"),"success-20":St("success-20"),"success-30":St("success-30"),"success-40":St("success-40"),"success-50":St("success-50"),"success-60":St("success-60"),"success-70":St("success-70"),"success-80":St("success-80"),"success-90":St("success-90"),"success-95":St("success-95"),"success-100":St("success-100"),"warning-10":St("warning-10"),"warning-20":St("warning-20"),"warning-30":St("warning-30"),"warning-40":St("warning-40"),"warning-50":St("warning-50"),"warning-60":St("warning-60"),"warning-70":St("warning-70"),"warning-80":St("warning-80"),"warning-90":St("warning-90"),"warning-95":St("warning-95"),"warning-100":St("warning-100"),"error-10":St("error-10"),"error-20":St("error-20"),"error-30":St("error-30"),"error-40":St("error-40"),"error-50":St("error-50"),"error-60":St("error-60"),"error-70":St("error-70"),"error-80":St("error-80"),"error-90":St("error-90"),"error-95":St("error-95"),"error-100":St("error-100"),"info-10":St("info-10"),"info-20":St("info-20"),"info-30":St("info-30"),"info-40":St("info-40"),"info-50":St("info-50"),"info-60":St("info-60"),"info-70":St("info-70"),"info-80":St("info-80"),"info-90":St("info-90"),"info-95":St("info-95"),"info-100":St("info-100"),white:St("white"),black:St("black"),"primary-inverse":St("primary-inverse")},jt={text:St("neutral-20"),"text-subtle":St("neutral-30"),"text-subtler":St("neutral-50"),"text-subtlest":St("neutral-60"),"text-primary":St("primary-50"),"text-hover":St("primary-40"),"text-selected":St("primary-50"),"text-selected-hover":St("primary-40"),"text-disabled":St("neutral-50"),"text-disabled-subtle":St("neutral-60"),"text-disabled-subtlest":St("neutral-80"),"text-selected-disabled":St("neutral-20"),"text-success":St("success-40"),"text-warning":St("warning-40"),"text-error":St("error-40"),"text-info":St("info-40"),"text-inverse":St("white"),icon:St("neutral-50"),"icon-subtle":St("neutral-60"),"icon-strongest":St("neutral-20"),"icon-primary":St("primary-50"),"icon-primary-subtle":St("primary-60"),"icon-primary-subtlest":St("primary-70"),"icon-hover":St("primary-40"),"icon-selected":St("primary-50"),"icon-selected-hover":St("primary-40"),"icon-disabled":St("neutral-50"),"icon-disabled-subtle":St("neutral-60"),"icon-selected-disabled":St("neutral-60"),"icon-success":St("success-50"),"icon-warning":St("warning-60"),"icon-error":St("error-50"),"icon-error-strong":St("error-40"),"icon-info":St("info-50"),"icon-inverse":St("white"),"icon-primary-inverse":St("primary-inverse"),border:St("neutral-90"),"border-strong":St("neutral-70"),"border-stronger":St("neutral-50"),"border-primary":St("primary-50"),"border-primary-subtle":St("primary-60"),"border-hover":St("primary-90"),"border-hover-strong":St("primary-60"),"border-selected":St("primary-50"),"border-selected-subtle":St("primary-70"),"border-selected-subtlest":St("primary-90"),"border-selected-hover":St("primary-40"),"border-focus":St("primary-60"),"border-focus-strong":St("primary-50"),"border-disabled":St("neutral-90"),"border-selected-disabled":St("neutral-70"),"border-success":St("success-60"),"border-warning":St("warning-60"),"border-error":St("error-60"),"border-error-focus":St("error-60"),"border-error-focus-strong":St("error-40"),"border-error-strong":St("error-40"),"border-info":St("info-60"),bg:St("white"),"bg-strong":St("neutral-100"),"bg-stronger":St("neutral-95"),"bg-strongest":St("neutral-90"),"bg-hover":St("primary-95"),"bg-hover-strong":St("primary-90"),"bg-hover-subtle":St("primary-100"),"bg-hover-neutral":St("neutral-100"),"bg-hover-neutral-strong":St("neutral-90"),"bg-selected":St("primary-95"),"bg-selected-hover":St("primary-90"),"bg-selected-strong":St("primary-90"),"bg-selected-stronger":St("primary-70"),"bg-selected-strongest":St("primary-50"),"bg-selected-strongest-hover":St("primary-40"),"bg-disabled":St("neutral-95"),"bg-selected-disabled":St("neutral-95"),"bg-selected-stronger-disabled":St("neutral-70"),"bg-success":St("success-100"),"bg-success-hover":St("success-95"),"bg-success-strong":St("success-50"),"bg-success-strong-hover":St("success-40"),"bg-warning":St("warning-100"),"bg-warning-hover":St("warning-95"),"bg-warning-strong":St("warning-50"),"bg-warning-strong-hover":St("warning-40"),"bg-info":St("info-100"),"bg-info-hover":St("info-95"),"bg-info-strong":St("info-50"),"bg-info-strong-hover":St("info-40"),"bg-error":St("error-100"),"bg-error-hover":St("error-95"),"bg-error-strong":St("error-50"),"bg-error-strong-hover":St("error-40"),"bg-inverse":St("neutral-20"),"bg-inverse-subtle":St("neutral-30"),"bg-inverse-subtler":St("neutral-50"),"bg-inverse-subtlest":St("neutral-60"),"bg-inverse-hover":St("neutral-40"),"bg-primary":St("primary-50"),"bg-primary-subtle":St("primary-60"),"bg-primary-subtler":St("primary-95"),"bg-primary-subtlest":St("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":St("primary-40"),"bg-primary-subtlest-hover":St("primary-90"),"bg-primary-subtlest-selected":St("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:St("primary-50"),"hyperlink-hover":St("primary-40"),"hyperlink-visited":St("primary-40"),"hyperlink-inverse":St("primary-inverse"),"focus-ring":St("black"),"focus-ring-inverse":St("white")},kt={collections:{lifesg:jt,bookingsg:jt,rbs:jt,mylegacy:jt,ccube:jt},defaultValue:"lifesg"},zt=e=>r=>{var t;const n=r.theme,i=bt(kt,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?gt(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},At={text:zt("text"),"text-subtle":zt("text-subtle"),"text-subtler":zt("text-subtler"),"text-subtlest":zt("text-subtlest"),"text-primary":zt("text-primary"),"text-hover":zt("text-hover"),"text-selected":zt("text-selected"),"text-selected-hover":zt("text-selected-hover"),"text-disabled":zt("text-disabled"),"text-disabled-subtle":zt("text-disabled-subtle"),"text-disabled-subtlest":zt("text-disabled-subtlest"),"text-selected-disabled":zt("text-selected-disabled"),"text-success":zt("text-success"),"text-warning":zt("text-warning"),"text-error":zt("text-error"),"text-info":zt("text-info"),"text-inverse":zt("text-inverse"),icon:zt("icon"),"icon-subtle":zt("icon-subtle"),"icon-strongest":zt("icon-strongest"),"icon-primary":zt("icon-primary"),"icon-primary-subtle":zt("icon-primary-subtle"),"icon-primary-subtlest":zt("icon-primary-subtlest"),"icon-hover":zt("icon-hover"),"icon-selected":zt("icon-selected"),"icon-selected-hover":zt("icon-selected-hover"),"icon-disabled":zt("icon-disabled"),"icon-disabled-subtle":zt("icon-disabled-subtle"),"icon-selected-disabled":zt("icon-selected-disabled"),"icon-success":zt("icon-success"),"icon-warning":zt("icon-warning"),"icon-error":zt("icon-error"),"icon-error-strong":zt("icon-error-strong"),"icon-info":zt("icon-info"),"icon-inverse":zt("icon-inverse"),"icon-primary-inverse":zt("icon-primary-inverse"),border:zt("border"),"border-strong":zt("border-strong"),"border-stronger":zt("border-stronger"),"border-primary":zt("border-primary"),"border-primary-subtle":zt("border-primary-subtle"),"border-hover":zt("border-hover"),"border-hover-strong":zt("border-hover-strong"),"border-selected":zt("border-selected"),"border-selected-subtle":zt("border-selected-subtle"),"border-selected-subtlest":zt("border-selected-subtlest"),"border-selected-hover":zt("border-selected-hover"),"border-focus":zt("border-focus"),"border-focus-strong":zt("border-focus-strong"),"border-disabled":zt("border-disabled"),"border-selected-disabled":zt("border-selected-disabled"),"border-success":zt("border-success"),"border-warning":zt("border-warning"),"border-error":zt("border-error"),"border-error-focus":zt("border-error-focus"),"border-error-focus-strong":zt("border-error-focus-strong"),"border-error-strong":zt("border-error-strong"),"border-info":zt("border-info"),bg:zt("bg"),"bg-strong":zt("bg-strong"),"bg-stronger":zt("bg-stronger"),"bg-strongest":zt("bg-strongest"),"bg-hover":zt("bg-hover"),"bg-hover-strong":zt("bg-hover-strong"),"bg-hover-subtle":zt("bg-hover-subtle"),"bg-hover-neutral":zt("bg-hover-neutral"),"bg-hover-neutral-strong":zt("bg-hover-neutral-strong"),"bg-selected":zt("bg-selected"),"bg-selected-hover":zt("bg-selected-hover"),"bg-selected-strong":zt("bg-selected-strong"),"bg-selected-stronger":zt("bg-selected-stronger"),"bg-selected-strongest":zt("bg-selected-strongest"),"bg-selected-strongest-hover":zt("bg-selected-strongest-hover"),"bg-disabled":zt("bg-disabled"),"bg-selected-disabled":zt("bg-selected-disabled"),"bg-selected-stronger-disabled":zt("bg-selected-stronger-disabled"),"bg-success":zt("bg-success"),"bg-success-hover":zt("bg-success-hover"),"bg-success-strong":zt("bg-success-strong"),"bg-success-strong-hover":zt("bg-success-strong-hover"),"bg-warning":zt("bg-warning"),"bg-warning-hover":zt("bg-warning-hover"),"bg-warning-strong":zt("bg-warning-strong"),"bg-warning-strong-hover":zt("bg-warning-strong-hover"),"bg-info":zt("bg-info"),"bg-info-hover":zt("bg-info-hover"),"bg-info-strong":zt("bg-info-strong"),"bg-info-strong-hover":zt("bg-info-strong-hover"),"bg-error":zt("bg-error"),"bg-error-hover":zt("bg-error-hover"),"bg-error-strong":zt("bg-error-strong"),"bg-error-strong-hover":zt("bg-error-strong-hover"),"bg-inverse":zt("bg-inverse"),"bg-inverse-subtle":zt("bg-inverse-subtle"),"bg-inverse-subtler":zt("bg-inverse-subtler"),"bg-inverse-subtlest":zt("bg-inverse-subtlest"),"bg-inverse-hover":zt("bg-inverse-hover"),"bg-primary":zt("bg-primary"),"bg-primary-subtle":zt("bg-primary-subtle"),"bg-primary-subtler":zt("bg-primary-subtler"),"bg-primary-subtlest":zt("bg-primary-subtlest"),"bg-available":zt("bg-available"),"bg-primary-hover":zt("bg-primary-hover"),"bg-primary-subtlest-hover":zt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":zt("bg-primary-subtlest-selected"),"overlay-strong":zt("overlay-strong"),"overlay-subtle":zt("overlay-subtle"),hyperlink:zt("hyperlink"),"hyperlink-hover":zt("hyperlink-hover"),"hyperlink-visited":zt("hyperlink-visited"),"hyperlink-inverse":zt("hyperlink-inverse"),"focus-ring":zt("focus-ring"),"focus-ring-inverse":zt("focus-ring-inverse")},Bt={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Lt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:At.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,i=bt(Bt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${gt(i,e,n.overrides.border)}px`:`${i[e]}px`},Tt=e=>1===e.length&&"theme"in e[0],Lt={"width-010":_t("width-010"),"width-020":_t("width-020"),"width-040":_t("width-040"),solid:(Rt="solid",e=>{var r;const t=e.theme,n=bt(Bt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?gt(n,Rt,t.overrides.border):n[Rt];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=Tt(r)?[]:r,o=Tt(r)?r[0]:t,a=o.theme,s=bt(Bt,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?gt(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var Rt;const It={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Pt={collections:{lifesg:It,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:It,mylegacy:It,ccube:It},defaultValue:"lifesg"},Yt=e=>r=>{var t;const n=r.theme,i=bt(Pt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?gt(i,e,n.overrides.fontSpec):i[e]},Wt={"header-size-xxl":Yt("header-size-xxl"),"header-size-xl":Yt("header-size-xl"),"header-size-lg":Yt("header-size-lg"),"header-size-md":Yt("header-size-md"),"header-size-sm":Yt("header-size-sm"),"header-size-xs":Yt("header-size-xs"),"header-lh-xxl":Yt("header-lh-xxl"),"header-lh-xl":Yt("header-lh-xl"),"header-lh-lg":Yt("header-lh-lg"),"header-lh-md":Yt("header-lh-md"),"header-lh-sm":Yt("header-lh-sm"),"header-lh-xs":Yt("header-lh-xs"),"header-ls-xxl":Yt("header-ls-xxl"),"header-ls-xl":Yt("header-ls-xl"),"header-ls-lg":Yt("header-ls-lg"),"header-ls-md":Yt("header-ls-md"),"header-ls-sm":Yt("header-ls-sm"),"header-ls-xs":Yt("header-ls-xs"),"weight-light":Yt("weight-light"),"weight-regular":Yt("weight-regular"),"weight-semibold":Yt("weight-semibold"),"weight-bold":Yt("weight-bold"),"font-family":Yt("font-family"),"body-size-baseline":Yt("body-size-baseline"),"body-size-md":Yt("body-size-md"),"body-size-sm":Yt("body-size-sm"),"body-size-xs":Yt("body-size-xs"),"body-lh-baseline":Yt("body-lh-baseline"),"body-lh-md":Yt("body-lh-md"),"body-lh-sm":Yt("body-lh-sm"),"body-lh-xs":Yt("body-lh-xs"),"body-ls-baseline":Yt("body-ls-baseline"),"body-ls-md":Yt("body-ls-md"),"body-ls-sm":Yt("body-ls-sm"),"body-ls-xs":Yt("body-ls-xs"),"formlabel-size-baseline":Yt("formlabel-size-baseline"),"formlabel-size-lg":Yt("formlabel-size-lg"),"formlabel-lh-baseline":Yt("formlabel-lh-baseline"),"formlabel-lh-lg":Yt("formlabel-lh-lg"),"formlabel-ls-baseline":Yt("formlabel-ls-baseline"),"formlabel-ls-lg":Yt("formlabel-ls-lg")},Ht={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Nt=e=>r=>{var t;const n=r.theme,i=bt(Ht,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${gt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Vt={none:Nt("none"),xs:Nt("xs"),sm:Nt("sm"),md:Nt("md"),lg:Nt("lg"),full:Nt("full")},Ut={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},qt=e=>r=>{var t;const n=r.theme,i=bt(Ut,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${gt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Zt={"spacing-0":qt("spacing-0"),"spacing-4":qt("spacing-4"),"spacing-8":qt("spacing-8"),"spacing-12":qt("spacing-12"),"spacing-16":qt("spacing-16"),"spacing-20":qt("spacing-20"),"spacing-24":qt("spacing-24"),"spacing-32":qt("spacing-32"),"spacing-40":qt("spacing-40"),"spacing-48":qt("spacing-48"),"spacing-64":qt("spacing-64"),"spacing-72":qt("spacing-72"),"layout-xs":qt("layout-xs"),"layout-sm":qt("layout-sm"),"layout-md":qt("layout-md"),"layout-lg":qt("layout-lg"),"layout-xl":qt("layout-xl"),"layout-xxl":qt("layout-xxl"),"layout-xxxl":qt("layout-xxxl")},Qt=(e,r,t,n)=>f`
    font-family: ${Yt("font-family")};
    font-size: ${Yt(e)};
    font-weight: ${Yt(r)};
    line-height: ${Yt(t)};
    letter-spacing: ${Yt(n)};
`,Xt={"header-xxl-light":Qt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Qt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Qt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Qt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Qt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Qt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Qt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Qt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Qt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Qt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Qt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Qt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Qt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Qt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Qt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Qt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Qt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Qt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Qt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Qt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Qt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Qt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Qt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Qt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Qt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Qt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Qt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Qt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Qt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Qt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Qt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Qt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Qt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Qt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Qt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Qt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Qt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Qt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Qt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Qt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Qt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Qt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Jt={collections:{lifesg:Xt,bookingsg:Xt,rbs:Xt,mylegacy:Xt,ccube:Xt},defaultValue:"lifesg"},Gt=e=>r=>{var t;const n=r.theme,i=bt(Jt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?gt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Kt={"header-xxl-light":Gt("header-xxl-light"),"header-xxl-regular":Gt("header-xxl-regular"),"header-xxl-semibold":Gt("header-xxl-semibold"),"header-xxl-bold":Gt("header-xxl-bold"),"header-xl-light":Gt("header-xl-light"),"header-xl-regular":Gt("header-xl-regular"),"header-xl-semibold":Gt("header-xl-semibold"),"header-xl-bold":Gt("header-xl-bold"),"header-lg-light":Gt("header-lg-light"),"header-lg-regular":Gt("header-lg-regular"),"header-lg-semibold":Gt("header-lg-semibold"),"header-lg-bold":Gt("header-lg-bold"),"header-md-light":Gt("header-md-light"),"header-md-regular":Gt("header-md-regular"),"header-md-semibold":Gt("header-md-semibold"),"header-md-bold":Gt("header-md-bold"),"header-sm-light":Gt("header-sm-light"),"header-sm-regular":Gt("header-sm-regular"),"header-sm-semibold":Gt("header-sm-semibold"),"header-sm-bold":Gt("header-sm-bold"),"header-xs-light":Gt("header-xs-light"),"header-xs-regular":Gt("header-xs-regular"),"header-xs-semibold":Gt("header-xs-semibold"),"header-xs-bold":Gt("header-xs-bold"),"body-baseline-light":Gt("body-baseline-light"),"body-baseline-regular":Gt("body-baseline-regular"),"body-baseline-semibold":Gt("body-baseline-semibold"),"body-baseline-bold":Gt("body-baseline-bold"),"body-md-light":Gt("body-md-light"),"body-md-regular":Gt("body-md-regular"),"body-md-semibold":Gt("body-md-semibold"),"body-md-bold":Gt("body-md-bold"),"body-sm-light":Gt("body-sm-light"),"body-sm-regular":Gt("body-sm-regular"),"body-sm-semibold":Gt("body-sm-semibold"),"body-sm-bold":Gt("body-sm-bold"),"body-xs-light":Gt("body-xs-light"),"body-xs-regular":Gt("body-xs-regular"),"body-xs-semibold":Gt("body-xs-semibold"),"body-xs-bold":Gt("body-xs-bold"),"formlabel-baseline-semibold":Gt("formlabel-baseline-semibold"),"formlabel-lg-semibold":Gt("formlabel-lg-semibold")},en=Object.assign(Object.assign({},At),{Primitive:Mt}),rn=Object.assign(Object.assign({},Kt),{Spec:Wt}),tn=Ot,nn=Lt,on=Zt,an=Vt,sn=vt,ln=wt,dn=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?f`
                padding: 0 ${sn["xxl-margin"]}px;
            `:f`
                padding: 0 ${sn["xxl-margin"]}px;
                max-width: 1440px;

                ${ln.MaxWidth.xl} {
                    padding: 0 ${sn["xl-margin"]}px;
                }

                ${ln.MaxWidth.lg} {
                    padding: 0 ${sn["lg-margin"]}px;
                }

                ${ln.MaxWidth.md} {
                    padding: 0 ${sn["md-margin"]}px;
                }

                ${ln.MaxWidth.sm} {
                    padding: 0 ${sn["sm-margin"]}px;
                }

                ${ln.MaxWidth.xs} {
                    padding: 0 ${sn["xs-margin"]}px;
                }

                ${ln.MaxWidth.xxs} {
                    padding: 0 ${sn["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return f`
                    column-gap: ${sn["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${sn["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${ln.MaxWidth.xl} {
                        column-gap: ${sn["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${sn["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ln.MaxWidth.lg} {
                        column-gap: ${sn["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${sn["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ln.MaxWidth.md} {
                        column-gap: ${sn["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${sn["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ln.MaxWidth.sm} {
                        column-gap: ${sn["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${sn["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ln.MaxWidth.xs} {
                        column-gap: ${sn["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${sn["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ln.MaxWidth.xxs} {
                        column-gap: ${sn["xss-gutter"]}px;
                        grid-template-columns: repeat(
                            ${sn["xss-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return f`
                    display: flex;
                    flex-direction: column;
                `;default:return f`
                    display: flex;
                `}}}
`,cn=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=r,s=U(r,["children","data-testid","type","stretch"]);return e(dn,Object.assign({ref:t,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),un=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=r,a=U(r,["children","data-testid","stretch"]);return e(hn,Object.assign({ref:t,"data-testid":i,$stretch:o},a,{children:n}))})),hn=m.section`
    display: block;
    position: relative;
`,mn=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=r,l=U(r,["children","data-testid","className","type","stretch"]);return e(un,Object.assign({ref:t,"data-testid":i,className:o,stretch:s},l,{children:e(cn,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:n}))}))})),fn={Section:un,Container:cn,Content:mn,ColDiv:Ft},gn=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return f`
        ${rn[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},bn=(e,r)=>f`
    ${gn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?f`
            display: block;
        `:e?f`
            display: inline;
        `:f`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${en.text};
`;var pn;!function(t){const n=(e,r,t)=>{const n=m(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>bn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=m.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>bn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=m.a`
            ${e=>f`
                ${gn(t,e.weight||"regular")}
                color: ${en.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${en["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,a=U(t,["external","children"]);return r(i,Object.assign({},a,{children:[o,n&&e(yn,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(pn||(pn={}));const yn=m(p)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,vn=f`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${ln.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,xn=m(fn.Content)`
    background: ${({$background:e})=>e?en["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,wn=m(pn.HeaderSM)`
    margin-bottom: 1rem;
    ${vn}
`,$n=m(pn.BodyBL)`
    margin-bottom: 2rem;
    ${vn}
`,Fn=m.div`
    ${vn}
`,Cn=m.ul`
    ${vn}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${ln.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${ln.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,En=i.forwardRef(((r,t)=>{var{stretch:n}=r,i=U(r,["stretch"]);return e(Cn,Object.assign({ref:t,$stretch:n},i))}));var On,Dn={exports:{}};On=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var i=e.expressions.every((function(e){var t=e.feature,n=e.modifier,i=e.value,o=r[t];if(!o)return!1;switch(t){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!t||!i&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),o=r[1],a=r[2],s=r[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(i);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var r=e.replace(n,a);return o[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,r,t){var o=this;if(i&&!t){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,r,t){return new o(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))t.call(o,d)&&(s[d]=o[d]);if(r){a=r(o);for(var c=0;c<a.length;c++)n.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+t+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:g(d),arrayOf:function(e){return g((function(r,t,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new f("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:g((function(r,t,n,i,o){var a=r[t];return e(a)?null:new f("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,r,t,n,o){var a=e[r];return i.isValidElementType(a)?null:new f("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(r,t,n,i,o){if(!(r[t]instanceof e)){var a=e.name||u;return new f("Invalid "+i+" `"+o+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,r,t,n,i){return y(e[r])?null:new f("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(r,t,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new f("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(r,t,n,i,o){for(var a=r[t],s=0;s<e.length;s++)if(m(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new f("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(t)+" at index "+r+"."),d}return g((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(r,t,n,i,o){var s=r[t],l=v(s);if("object"!==l)return new f("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,x(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return g((function(r,t,n,i,l){var d=r[t],c=v(d);if("object"!==c)return new f("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var m=e[h];if(s(e,h)&&"function"!=typeof m)return p(n,i,l,h,x(m));if(!m)return new f("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=m(d,h,n,i,l+"."+h,a);if(g)return g}return null}))}};function m(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function f(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function g(e){var t={},i=0;function o(o,s,l,d,c,h,m){if(d=d||u,h=h||l,m!==a){if(r){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var b=d+":"+l;!t[b]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,i++)}}return null==s[l]?o?null===s[l]?new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function b(e){return g((function(r,t,n,i,o,a){var s=r[t];return v(s)!==e?new f("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,t,n,i){return new f((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(y);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function w(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,t)=>{var n=t(/*! react-is */"./node_modules/react-is/index.js");e.exports=t(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var m=e.type;switch(m){case d:case c:case i:case a:case o:case h:return m;default:var b=m&&m.$$typeof;switch(b){case l:case u:case g:case f:case s:return b;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=s,E=t,O=u,D=i,S=g,M=f,j=n,k=a,z=o,A=h,B=!1;function _(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=O,r.Fragment=D,r.Lazy=S,r.Memo=M,r.Portal=j,r.Profiler=k,r.StrictMode=z,r.Suspense=A,r.isAsyncMode=function(e){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||x(e)===d},r.isConcurrentMode=_,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===g},r.isMemo=function(e){return x(e)===f},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),i=t.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=t[o];if(e[a]!==r[a]||!Object.prototype.hasOwnProperty.call(r,a))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=i(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),s=(0,o.default)(a,t,i);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var o=n(t(/*! ./Component */"./src/Component.ts"));r.default=o.default;var a=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=a.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);r.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),m=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),f=u();return(0,i.useEffect)((function(){f&&t&&t(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Sn=Dn.exports=On(i),Mn={exports:{}};Mn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=b;var w="$isDayjsObject",$=function(e){return e instanceof O||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new O(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var O=function(){function b(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=b.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},f=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},g=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,b):m(0,b+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return m(n?p-x:p+(6-x),b);case s:case h:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],f=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[m](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var h,m=this;n=Number(n);var f=E.p(c),g=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return g(1);if(f===l)return g(7);var b=(h={},h[o]=r,h[a]=t,h[i]=e,h)[f]||1,p=this.$d.getTime()+n*b;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},f=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(o,a,!0);case"A":return f(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,m){var f,g=this,b=E.p(h),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(g,p)};switch(b){case u:f=x()/12;break;case d:f=x();break;case c:f=x()/3;break;case l:f=(v-y)/6048e5;break;case s:f=(v-y)/864e5;break;case a:f=v/t;break;case o:f=v/r;break;case i:f=v/e;break;default:f=v}return m?f:E.a(f)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),D=O.prototype;return C.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,O,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var jn=Z(Mn.exports),kn={exports:{}};kn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],m=c&&c[1];a[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,f=a||(i||o?1:m.getDate()),g=i||m.getFullYear(),b=0;i&&!o||(b=o>0?o-1:m.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,b,f,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(g,b,f,p,y,v,x)):new Date(g,b,f,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var m=s.length,f=1;f<=m;f+=1){a[1]=s[f-1];var g=t.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var zn=Z(kn.exports),An={exports:{}};An.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Bn=Z(An.exports),_n={exports:{}};_n.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Tn=Z(_n.exports),Ln={exports:{}};Ln.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Rn,In,Pn,Yn=Z(Ln.exports),Wn={exports:{}},Hn=Z(Wn.exports=(Rn={year:0,month:1,day:2,hour:3,minute:4,second:5},In={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=In[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),In[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Rn[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(t.utc(m).valueOf()-(f-=f%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));jn.extend(Bn),jn.extend(Yn),jn.extend(Tn),jn.extend(zn),jn.extend(Hn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=jn(r).startOf("week");return Nn(t).map((e=>Vn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Vn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(jn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+jn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=jn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?jn(n):void 0,i?jn(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(Pn||(Pn={}));const Nn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Vn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Un=[1,3,5,7,8,10,12],qn=[4,6,9,11];var Zn,Qn,Xn,Jn;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":Un.includes(o)?Math.min(i,31).toString():qn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=jn(e,t);return jn(r,t).diff(n,"minute")},e.toDayjs=e=>e?jn(e):jn(),e.addMinutesToTime=(e,r,t="HH:mm")=>jn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>jn(e).isSame(jn(r),t)}(Zn||(Zn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!jn(e).isBefore(n,"day"))||!(!i||!jn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(jn(e).isValid())return e}return""}}(Qn||(Qn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Xn||(Xn={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Jn||(Jn={}));var Gn=function(e,r){return Gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Gn(e,r)};var Kn=function(){return Kn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Kn.apply(this,arguments)};var ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ri=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ti="object"==typeof ei&&ei&&ei.Object===Object&&ei,ni="object"==typeof self&&self&&self.Object===Object&&self,ii=ti||ni||Function("return this")(),oi=ii,ai=function(){return oi.Date.now()},si=/\s/;var li=function(e){for(var r=e.length;r--&&si.test(e.charAt(r)););return r},di=/^\s+/;var ci=function(e){return e?e.slice(0,li(e)+1).replace(di,""):e},ui=ii.Symbol,hi=ui,mi=Object.prototype,fi=mi.hasOwnProperty,gi=mi.toString,bi=hi?hi.toStringTag:void 0;var pi=function(e){var r=fi.call(e,bi),t=e[bi];try{e[bi]=void 0;var n=!0}catch(e){}var i=gi.call(e);return n&&(r?e[bi]=t:delete e[bi]),i},yi=Object.prototype.toString;var vi=pi,xi=function(e){return yi.call(e)},wi=ui?ui.toStringTag:void 0;var $i=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":wi&&wi in Object(e)?vi(e):xi(e)},Fi=function(e){return null!=e&&"object"==typeof e};var Ci=ci,Ei=ri,Oi=function(e){return"symbol"==typeof e||Fi(e)&&"[object Symbol]"==$i(e)},Di=/^[-+]0x[0-9a-f]+$/i,Si=/^0b[01]+$/i,Mi=/^0o[0-7]+$/i,ji=parseInt;var ki=ri,zi=ai,Ai=function(e){if("number"==typeof e)return e;if(Oi(e))return NaN;if(Ei(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ei(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ci(e);var t=Si.test(e);return t||Mi.test(e)?ji(e.slice(2),t?2:8):Di.test(e)?NaN:+e},Bi=Math.max,_i=Math.min;var Ti=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function f(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function g(){var e=zi();if(f(e))return b(e);s=setTimeout(g,function(e){var t=r-(e-l);return u?_i(t,o-(e-d)):t}(e))}function b(e){return s=void 0,h&&n?m(e):(n=i=void 0,a)}function p(){var e=zi(),t=f(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(g,r),c?m(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,r),m(l)}return void 0===s&&(s=setTimeout(g,r)),a}return r=Ai(r)||0,ki(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Bi(Ai(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:b(zi())},p},Li=Ti,Ri=ri;var Ii=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ri(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Li(e,r,{leading:n,maxWait:r,trailing:i})},Pi=function(e,r,t,n){switch(r){case"debounce":return Ti(e,t,n);case"throttle":return Ii(e,t,n);default:return e}},Yi=function(e){return"function"==typeof e},Wi=function(){return"undefined"==typeof window},Hi=function(e){return e instanceof Element||e instanceof HTMLDocument},Ni=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Yi(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Wi()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Wi())return null;if(r)return document.querySelector(r);if(n&&Hi(n))return n;if(t.targetRef&&Hi(t.targetRef.current))return t.targetRef.current;var i=R(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Ni(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Wi()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Yi(r)?"renderProp":Yi(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Wi()||(t.resizeHandler=Pi(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Gn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Wi()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var Vi=Wi()?u:h;const Ui=m.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return f`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,qi=m.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?en["overlay-subtle"]:en["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=f`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=f`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=f`
                transition: none;
            `),r}}
`;var Zi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Zi||(Zi={}));const Qi=({show:r=!1,rootId:t,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:h=!1,zIndex:m,id:f})=>{const[g,b]=a(null),[p,y]=a(),[v]=a((()=>Xn.generate())),x=F(),$=o(),E=o(null),O=s&&i.cloneElement(s,{ref:E}),D=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root",S=null!=m?m:p?99999:99998;(e=>{const r=w();u((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Zi.Change,t)}),[r,e]),u((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Zi.Change,t)};return null==r||r.events.on(Zi.Ready,t),()=>null==r?void 0:r.events.off(Zi.Ready,t)}),[r,e])})(S),u((()=>(z(),b(j()),()=>{T(),B().length<1&&A("remove")})),[]),u((()=>{if(r){const e=k();M(e),_();const r=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{B().length<1&&A("remove")}),200);return()=>clearTimeout(e)}}),[r]);const M=e=>{$.current=e,y(e)},j=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>B().length>0,z=()=>{if(!document.getElementById(Ji)){const e=document.createElement("style");e.id=Ji;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Gi} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Gi}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},A=e=>{const r=document.body.classList.contains(Gi);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Gi):document.body.classList.add(Gi)},B=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},_=()=>{const e=B();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=B();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},R=e=>{var r;const t=null===(r=E.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return g?L.createPortal(e(Ui,Object.assign({id:D,"data-testid":D,$show:r,$zIndex:S},{children:s&&e(C,Object.assign({id:x},{children:e(qi,Object.assign({"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:R},{children:O}))}))})),g):null},Xi=r=>e($,{children:e(Qi,Object.assign({},r))}),Ji="lifesg-ds-overlay-stylesheet",Gi="lifesg-ds-overlay-open",Ki=m.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${ln.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,eo=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:h=!0}=r,m=U(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,g]=a(),[b,p]=a();u((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),u((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const y=()=>{const e=.01*window.innerHeight;g(e)},v=()=>{const e=.01*window.visualViewport.height;g(e),p(window.visualViewport.offsetTop)};return e(Xi,Object.assign({"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:c,id:t,rootId:l,zIndex:d},{children:e(Ki,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:f,offsetTop:b},m,{children:o}))}))},ro=m.div`
    border-radius: ${an.md};
    background: ${en.bg};
    padding: ${on["spacing-16"]} ${on["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,to=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${on["spacing-32"]};
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

        ${({$highlight:e})=>e&&f`
                background-color: ${en["bg-hover-neutral"]};
            `}
    }
`,no=i.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=U(r,["children","focusHighlight","focusOutline","type"]);return e(to,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),io=m.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${en.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ln.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,oo=m(no)`
    position: absolute;
    top: var(--close-button-top-inset, ${on["spacing-16"]});
    right: var(--close-button-right-inset, ${on["spacing-16"]});
    padding: 0;
    color: ${en.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ln.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${on["spacing-20"]});
    }
`,ao=e=>{const{textSize:r}=e||{};return f`
        // Text styling
        ${r&&rn[`${r}-regular`]}

        strong {
            font-weight: ${rn.Spec["weight-semibold"]};
            ${r&&rn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${rn.Spec["weight-semibold"]};
            ${r&&rn[`${r}-semibold`]}
            color: ${en.hyperlink};
            text-decoration: none;

            svg {
                color: ${en["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${en["hyperlink-hover"]};

                svg {
                    color: ${en["icon-hover"]};
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
    `},so=m.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,lo=m((r=>{var{children:t}=r,n=U(r,["children"]);const i=n["data-testid"]||"card";return e(ro,Object.assign({},n,{"data-testid":i},{children:"string"==typeof t?e(pn.BodyBL,{children:t}):t}))}))`
    color: ${en.text};
    ${ao({textSize:"body-md"})}

    ${ln.MaxWidth.sm} {
        display: none;
    }
`,co=m((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=U(t,["id","children","onClose","showCloseButton"]);return r(io,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(oo,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:e(I,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,uo=m.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${en.text};
    ${ao({textSize:"body-md"})}
`,ho=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=U(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",d=g(),c=sn["sm-max"]({theme:d}),u=Sn.useMediaQuery({maxWidth:c}),h=()=>{a&&a()},m=()=>"string"==typeof i?e(pn.BodyMD,{children:i}):i;return r(t,{children:[o&&e(so,Object.assign({"data-testid":l},s,{children:e(lo,{children:m()})})),u&&e(eo,Object.assign({show:o,onOverlayClick:h},{children:e(co,Object.assign({onClose:h},{children:e(uo,{children:m()})}))}))]})},mo=m.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,fo=n=>{var i,s,{children:l,popoverContent:d,trigger:c="click",position:h="top",zIndex:m,rootNode:f,customOffset:b,delay:p,onPopoverAppear:y,onPopoverDismiss:v}=n,x=U(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[$,F]=a(!1),C=o(),L=o(),R=g(),I=sn["sm-max"]({theme:R}),P=Sn.useMediaQuery({maxWidth:I}),{refs:Y,floatingStyles:W,context:H}=E({open:$,placement:h,whileElementsMounted:O,middleware:[D(null!=b?b:16),S(),M({limiter:j()})],onOpenChange:e=>{F(e),$!==e&&K(e)}}),N=(()=>{const[e,r]=a(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Zi.Change,e),t.events.emit(Zi.Ready),()=>t.events.off(Zi.Change,e)}),[t]),e})(),V=P?"click":c,q=k(H,{ignoreMouse:"hover"===V}),Z=z(H),Q=A(H,{enabled:"hover"===V,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(s=null==p?void 0:p.close)&&void 0!==s?s:500}}),{getReferenceProps:X,getFloatingProps:J}=B([q,Z,Q]),G=()=>{F(!1),K(!1)},K=e=>{e&&y&&y(),!e&&v&&v()};return r(t,{children:[e(mo,Object.assign({ref:e=>{C.current=e,Y.setReference(e)}},X({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),x,{children:l})),$&&e(_,Object.assign({root:f},{children:e(T,Object.assign({context:H},{children:e("div",Object.assign({ref:e=>{L.current=e,Y.setFloating(e)},style:Object.assign(Object.assign({},W),{outline:"none",zIndex:null!=m?m:N})},J(),{children:"function"==typeof d?d():e(ho,Object.assign({visible:!0,onMobileClose:G},{children:d}))}))}))}))]})},go=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},bo=m.span`
    color: ${en["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>go(e)}

    &:hover,
    &:focus-visible {
        color: ${en["text-hover"]};
        ${({$hoverStyle:e})=>go(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,po=m.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,yo=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=t,l=U(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(fo,Object.assign({},l,{children:r(bo,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:d?void 0:"More info"},{children:[i,o&&e(po,Object.assign({$standalone:!d},{children:o}))]}))}))},vo=m.div`
    padding-left: ${on["spacing-4"]};
    display: inline;
`,xo=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=r;return e(vo,{children:e(yo,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:t,zIndex:s,icon:null!=o?o:e(x,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},wo=m.label`
    color: ${en["text-subtle"]};
    margin-bottom: ${on["spacing-8"]};
    display: inline-block;

    ${ao({textSize:"body-md"})}
    font-weight: ${rn.Spec["weight-semibold"]};
`;m.p`
    ${rn["body-sm-semibold"]}
    color: ${en["text-error"]};
    margin-top: ${on["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;const $o=m.span`
    ${rn["body-sm-regular"]}
    color: ${en["text-subtler"]};
    display: block;
`,Fo=t=>{var{children:n,addon:i,subtitle:o,"data-testid":a}=t,s=U(t,["children","addon","subtitle","data-testid"]);return r(wo,Object.assign({},s,{children:[n,i&&i.type&&("popover"===i.type?e(xo,{addon:i}):null),"string"==typeof o?e($o,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},Co=m.div`
    padding: ${on[8]} ${on["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=en["bg-error"](e),t=en["border-error"](e);break;case"success":r=en["bg-success"](e),t=en["border-success"](e);break;case"warning":default:r=en["bg-warning"](e),t=en["border-warning"](e);break;case"info":r=en["bg-info"](e),t=en["border-info"](e);break;case"description":r=en["bg-strong"](e),t=en["border-strong"](e)}return f`
            background: ${r};
            border-left: ${nn["width-020"]} ${nn.solid}
                ${t};
        `}}

    color: ${en.text};
    ${e=>"small"===e.$sizeType?ao({textSize:"body-sm"}):ao({textSize:"body-md"})}
`,Eo=m.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${on["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=en["icon-error"](e);break;case"success":r=en["icon-success"](e);break;case"warning":default:r=en["icon-warning"](e);break;case"info":r=en["icon-info"](e);break;case"description":r=en["icon-subtle"](e)}return f`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Oo=m(pn.LinkSM)`
    ${e=>"small"===e.$sizeType?f`
                ${rn["body-sm-semibold"]}
                margin-top: ${on["spacing-4"]};
            `:f`
                ${rn["body-md-semibold"]}
                margin-top: ${on["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${on["spacing-4"]};
    }
`,Do=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,So=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return f`
                margin-bottom: ${on["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Mo=m.button`
    ${e=>"small"===e.$sizeType?f`
                ${rn["body-sm-semibold"]}
            `:f`
                ${rn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${on["spacing-4"]};
    margin-top: ${on["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${en["text-primary"]};
`,jo=m(V)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${tn["duration-350"]} ${tn["ease-standard"]};
`,ko=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,zo=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ao=m.div`
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
    animation: ${zo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Bo=m(Ao)`
    animation-delay: -0.45s;
`,_o=m(Ao)`
    animation-delay: -0.3s;
`,To=m(Ao)`
    animation-delay: -0.15s;
`,Lo=m.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return f`
                    grid-column: auto / span 4;
                `;case"full":return f`
                    grid-column: auto / span 8;
                `}}}

    ${ln.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,Ro=m.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${en["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${rn.Spec["body-size-baseline"]};
        height: ${rn.Spec["body-size-baseline"]};
    }
`,Io=m.button`
    ${rn["body-baseline-regular"]}
    color: ${en.text};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,Po=m.span`
    color: ${en["text-disabled"]};
`,Yo=m((({color:t,className:n,size:i})=>r(ko,Object.assign({className:n,$size:i,$color:t},{children:[e(Ao,{id:"inner1"}),e(Bo,{id:"inner2"}),e(_o,{id:"inner3"}),e(To,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
    color: ${en["text-disabled"]};
`,Wo=m(P)`
    color: ${en["icon-warning"]};
    margin-right: 0.5rem;
    height: ${rn.Spec["body-size-baseline"]};
    width: ${rn.Spec["body-size-baseline"]};
`,Ho=m.span`
    color: ${en["text-warning"]};
`,No=m.span`
    ${rn["body-baseline-semibold"]}
    color: ${en.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Vo=m((t=>{var{type:n,className:i,children:s,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:h=!1,customIcon:m,maxCollapsedHeight:f}=t,g=U(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,p]=a(!1),[y,v]=a(!1),{height:w,ref:$}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,m=e.targetRef,f=e.observerOptions,g=e.onResize,b=o(t),p=o(null),y=null!=m?m:p,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Vi((function(){if(!Wi()){var e=Ni(g,$,c,h);v.current=Pi((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!b.current&&!Wi()&&e({width:n,height:i}),b.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,f),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,g,f,y.current]),Kn({ref:y},w)}();u((()=>{F()}),[f,w]);const F=()=>{p(!f),v(C())},C=()=>!!f&&w>f;return r(Co,Object.assign({className:i,$type:n,$sizeType:c,"data-testid":g["data-testid"]},{children:[h&&e(Eo,Object.assign({$sizeType:c,$type:n},{children:(()=>{if(n&&m)return m;switch(n){case"success":return e(N,{});case"warning":return e(H,{});case"error":return e(W,{});case"info":case"description":return e(x,{});default:return null}})()})),r(Do,{children:[r(So,Object.assign({$maxCollapsedHeight:C()?f:void 0,$showMore:b,$hasActionLink:!!l},{children:[e("div",Object.assign({ref:$},{children:s})),l&&r(Oo,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||e(Y,{})]}))]})),y&&r(Mo,Object.assign({$sizeType:c,$type:n,type:"button",onClick:()=>p(!b)},{children:["Show ",b?"less":"more",e(jo,{$expanded:b})]}))]})]}))}))`
    margin-top: 0.5rem;
`,Uo=({label:n,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:d="•",maskRange:c,unmaskRange:h,maskRegex:m,disableMaskUnmask:f,alert:g,maskTransformer:b,onMask:p,onUnmask:x,onTryAgain:w})=>{const[$,F]=a(s);u((()=>{F(s)}),[s]);const C=()=>{switch("fail"===l&&w&&w(),$){case"masked":x&&x(),F("unmasked");break;case"unmasked":p&&p(),F("masked")}},E=()=>"string"!=typeof i?i:"masked"===$?Jn.maskValue(i,{maskChar:d,maskRange:c,unmaskRange:h,maskRegex:m,maskTransformer:b}):i,O=()=>{switch(l){case"fail":return r(t,{children:[e(Wo,{}),e(Ho,{children:"Error"}),e(No,{children:"Try again?"})]});case"loading":return r(t,{children:[e(Yo,{}),e(Po,{children:"Retrieving..."})]});default:return r(t,{children:[E(),e(Ro,{children:"masked"===$?e(y,{"data-testid":"masked-icon"}):e(v,{"data-testid":"unmasked-icon"})})]})}};return r(Lo,Object.assign({$widthStyle:o},{children:[e(Fo,{children:n}),"string"!=typeof i?i:$?f?e(pn.BodyBL,{children:E()}):e(Io,Object.assign({"data-testid":"clickable-label",onClick:C,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:O()})):e(pn.BodyBL,{children:i}),g&&e(Vo,Object.assign({sizeType:"small"},g))]}))},qo=Object.assign((n=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:d,background:c=!0,stretch:u,onMask:h,onUnmask:m,onTryAgain:f}=n,g=U(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const b=e=>()=>{h&&h(e)},p=e=>()=>{m&&m(e)},y=e=>()=>{f&&f(e)},v=()=>{if(i&&i.length>0){const r=i.map(((r,t)=>e(Uo,Object.assign({},r,{onMask:b(r),onUnmask:p(r),onTryAgain:y(r)}),t)));return e(Cn,Object.assign({$stretch:u},{children:r}))}return null};return e(xn,Object.assign({$background:c},g,{type:"grid"},{children:d||r(t,{children:[o&&e(wn,Object.assign({weight:"semibold",$stretch:u},{children:o})),a&&e($n,Object.assign({$stretch:u},{children:a})),s&&e(Fn,Object.assign({"data-id":"top-section",$stretch:u},{children:s})),v(),l&&e(Fn,Object.assign({"data-id":"bottom-section",$stretch:u},{children:l}))]})}))}),{ItemSection:En,Item:Uo});export{qo as UneditableSection};
//# sourceMappingURL=index.js.map
