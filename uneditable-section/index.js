import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g}from"react";import m,{css as h,useTheme as f,keyframes as b}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{EyeIcon as y}from"@lifesg/react-icons/eye";import{EyeSlashIcon as v}from"@lifesg/react-icons/eye-slash";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as w,FloatingTree as F,useFloatingNodeId as $,FloatingNode as C,useFloating as E,autoUpdate as D,offset as O,flip as S,shift as B,limitShift as A,useClick as k,useDismiss as M,useHover as z,useInteractions as j,FloatingPortal as _,FloatingFocusManager as T}from"@floating-ui/react";import L,{findDOMNode as R}from"react-dom";import{CrossIcon as I}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as P}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as Y}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as W}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as H}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as N}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as V}from"@lifesg/react-icons";function U(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Q=Array.isArray,X="object"==typeof q&&q&&q.Object===Object&&q,J="object"==typeof self&&self&&self.Object===Object&&self,G=X||J||Function("return this")(),K=G.Symbol,ee=K,re=Object.prototype,te=re.hasOwnProperty,ne=re.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var r=te.call(e,ie),t=e[ie];try{e[ie]=void 0;var n=!0}catch(e){}var i=ne.call(e);return n&&(r?e[ie]=t:delete e[ie]),i},ae=Object.prototype.toString;var se=oe,le=function(e){return ae.call(e)},de=K?K.toStringTag:void 0;var ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?se(e):le(e)};var ue=ce,ge=function(e){return null!=e&&"object"==typeof e};var me=function(e){return"symbol"==typeof e||ge(e)&&"[object Symbol]"==ue(e)},he=Q,fe=me,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var ye=function(e,r){if(he(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!fe(e))||(pe.test(e)||!be.test(e)||null!=r&&e in Object(r))};var ve=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},xe=ce,we=ve;var Fe,$e=function(e){if(!we(e))return!1;var r=xe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ce=G["__core-js_shared__"],Ee=(Fe=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var De=function(e){return!!Ee&&Ee in e},Oe=Function.prototype.toString;var Se=$e,Be=De,Ae=ve,ke=function(e){if(null!=e){try{return Oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=/^\[object .+?Constructor\]$/,ze=Function.prototype,je=Object.prototype,_e=ze.toString,Te=je.hasOwnProperty,Le=RegExp("^"+_e.call(Te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Re=function(e,r){return null==e?void 0:e[r]},Ie=function(e){return!(!Ae(e)||Be(e))&&(Se(e)?Le:Me).test(ke(e))},Pe=Re;var Ye=function(e,r){var t=Pe(e,r);return Ie(t)?t:void 0},We=Ye(Object,"create"),He=We;var Ne=function(){this.__data__=He?He(null):{},this.size=0};var Ve=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=We,qe=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ue){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return qe.call(r,e)?r[e]:void 0},Qe=We,Xe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Qe?void 0!==r[e]:Xe.call(r,e)},Ge=We;var Ke=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},er=Ne,rr=Ve,tr=Ze,nr=Je,ir=Ke;function or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}or.prototype.clear=er,or.prototype.delete=rr,or.prototype.get=tr,or.prototype.has=nr,or.prototype.set=ir;var ar=or;var sr=function(){this.__data__=[],this.size=0};var lr=function(e,r){return e===r||e!=e&&r!=r};var dr=function(e,r){for(var t=e.length;t--;)if(lr(e[t][0],r))return t;return-1},cr=dr,ur=Array.prototype.splice;var gr=function(e){var r=this.__data__,t=cr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ur.call(r,t,1),--this.size,!0)},mr=dr;var hr=function(e){var r=this.__data__,t=mr(r,e);return t<0?void 0:r[t][1]},fr=dr;var br=function(e){return fr(this.__data__,e)>-1},pr=dr;var yr=function(e,r){var t=this.__data__,n=pr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},vr=sr,xr=gr,wr=hr,Fr=br,$r=yr;function Cr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Cr.prototype.clear=vr,Cr.prototype.delete=xr,Cr.prototype.get=wr,Cr.prototype.has=Fr,Cr.prototype.set=$r;var Er=Cr,Dr=Ye(G,"Map"),Or=ar,Sr=Er,Br=Dr;var Ar=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var kr=function(e,r){var t=e.__data__;return Ar(r)?t["string"==typeof r?"string":"hash"]:t.map},Mr=kr;var zr=function(e){var r=Mr(this,e).delete(e);return this.size-=r?1:0,r},jr=kr;var _r=function(e){return jr(this,e).get(e)},Tr=kr;var Lr=function(e){return Tr(this,e).has(e)},Rr=kr;var Ir=function(e,r){var t=Rr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Pr=function(){this.size=0,this.__data__={hash:new Or,map:new(Br||Sr),string:new Or}},Yr=zr,Wr=_r,Hr=Lr,Nr=Ir;function Vr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Vr.prototype.clear=Pr,Vr.prototype.delete=Yr,Vr.prototype.get=Wr,Vr.prototype.has=Hr,Vr.prototype.set=Nr;var Ur=Vr;function qr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(qr.Cache||Ur),t}qr.Cache=Ur;var Zr=qr;var Qr=function(e){var r=Zr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Gr=Qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Xr,(function(e,t,n,i){r.push(n?i.replace(Jr,"$1"):t||e)})),r}));var Kr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},et=Q,rt=me,tt=K?K.prototype:void 0,nt=tt?tt.toString:void 0;var it=function e(r){if("string"==typeof r)return r;if(et(r))return Kr(r,e)+"";if(rt(r))return nt?nt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},ot=it;var at=Q,st=ye,lt=Gr,dt=function(e){return null==e?"":ot(e)};var ct=me;var ut=function(e,r){return at(e)?e:st(e,r)?[e]:lt(dt(e))},gt=function(e){if("string"==typeof e||ct(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var mt=function(e,r){for(var t=0,n=(r=ut(r,e)).length;null!=e&&t<n;)e=e[gt(r[t++])];return t&&t==n?e:void 0};var ht=Z((function(e,r,t){var n=null==e?void 0:mt(e,r);return void 0===n?t:n}));const ft=(e,r,t)=>ht(t,r)||ht(e,r),bt=(e,r)=>{const t=r||e.defaultValue;return ht(e.collections,t)},pt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},yt=e=>r=>{var t;const n=r.theme,i=bt(pt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ft(i,e,n.overrides.breakpoint):i[e],o},vt={"xxs-min":yt("xxs-min"),"xxs-max":yt("xxs-max"),"xs-min":yt("xs-min"),"xs-max":yt("xs-max"),"sm-min":yt("sm-min"),"sm-max":yt("sm-max"),"md-min":yt("md-min"),"md-max":yt("md-max"),"lg-min":yt("lg-min"),"lg-max":yt("lg-max"),"xl-min":yt("xl-min"),"xl-max":yt("xl-max"),"xxl-min":yt("xxl-min"),"xxs-column":yt("xxs-column"),"xs-column":yt("xs-column"),"sm-column":yt("sm-column"),"md-column":yt("md-column"),"lg-column":yt("lg-column"),"xl-column":yt("xl-column"),"xxl-column":yt("xxl-column"),"xxs-gutter":yt("xxs-gutter"),"xs-gutter":yt("xs-gutter"),"sm-gutter":yt("sm-gutter"),"md-gutter":yt("md-gutter"),"lg-gutter":yt("lg-gutter"),"xl-gutter":yt("xl-gutter"),"xxl-gutter":yt("xxl-gutter"),"xxs-margin":yt("xxs-margin"),"xs-margin":yt("xs-margin"),"sm-margin":yt("sm-margin"),"md-margin":yt("md-margin"),"lg-margin":yt("lg-margin"),"xl-margin":yt("xl-margin"),"xxl-margin":yt("xxl-margin")},xt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=vt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),wt={MaxWidth:xt("max-width"),MinWidth:xt("min-width")},Ft=m.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:t,$xlStart:n,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:g,$xxsStart:m,$xxsSpan:f}=e;return h`
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
                grid-column: ${u||"auto"} / span ${g||1};
            }

            ${wt.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${f||1};
            }
        `}}
`,$t=i.forwardRef(((r,t)=>{const n=f(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=r,u=U(r,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),g=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,n]=e;if(-1===n)return{start:t,span:r-t+1};return{start:t,span:Math.min(n-t,r)}}return{start:void 0,span:Math.min(e,r)}};return e(Ft,Object.assign({ref:t},(()=>{const e=vt["xxl-column"]({theme:n}),r=vt["xl-column"]({theme:n}),t=vt["lg-column"]({theme:n}),u=vt["md-column"]({theme:n}),m=vt["sm-column"]({theme:n}),h=vt["xs-column"]({theme:n}),f=vt["xxs-column"]({theme:n}),b=g(i||o||a||s||l||d||c,e,"xxl"),p=g(o||a||s||l||d||c,r,"xl"),y=g(a||s||l||d||c,t,"lg"),v=g(s||l||d||c,u,"md"),x=g(l||d||c,m,"sm"),w=g(d||c,h,"xs"),F=g(c,f,"xxs");return{$xxlStart:b.start,$xxlSpan:b.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:v.start,$mdSpan:v.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:F.start,$xxsSpan:F.span}})(),u))})),Ct={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Et=e=>r=>{var t;const n=r.theme,i=bt(Ct,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ft(i,e,n.overrides.border)}px`:`${i[e]}px`},Dt={"width-005":Et("width-005"),"width-010":Et("width-010"),"width-020":Et("width-020"),"width-040":Et("width-040"),solid:(Ot="solid",e=>{var r;const t=e.theme,n=bt(Ct,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ft(n,Ot,t.overrides.border):n[Ot];return"function"==typeof i?i(e):i})};var Ot;const St={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Bt=e=>r=>{var t;const n=r.theme,i=bt(St,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?ft(i,e,n.overrides.primitiveColour):i[e]},At={"brand-10":Bt("brand-10"),"brand-20":Bt("brand-20"),"brand-30":Bt("brand-30"),"brand-40":Bt("brand-40"),"brand-50":Bt("brand-50"),"brand-60":Bt("brand-60"),"brand-70":Bt("brand-70"),"brand-80":Bt("brand-80"),"brand-90":Bt("brand-90"),"brand-95":Bt("brand-95"),"brand-100":Bt("brand-100"),"primary-10":Bt("primary-10"),"primary-20":Bt("primary-20"),"primary-30":Bt("primary-30"),"primary-40":Bt("primary-40"),"primary-50":Bt("primary-50"),"primary-60":Bt("primary-60"),"primary-70":Bt("primary-70"),"primary-80":Bt("primary-80"),"primary-90":Bt("primary-90"),"primary-95":Bt("primary-95"),"primary-100":Bt("primary-100"),"secondary-10":Bt("secondary-10"),"secondary-20":Bt("secondary-20"),"secondary-30":Bt("secondary-30"),"secondary-40":Bt("secondary-40"),"secondary-50":Bt("secondary-50"),"secondary-60":Bt("secondary-60"),"secondary-70":Bt("secondary-70"),"secondary-80":Bt("secondary-80"),"secondary-90":Bt("secondary-90"),"secondary-95":Bt("secondary-95"),"secondary-100":Bt("secondary-100"),"neutral-10":Bt("neutral-10"),"neutral-20":Bt("neutral-20"),"neutral-30":Bt("neutral-30"),"neutral-40":Bt("neutral-40"),"neutral-50":Bt("neutral-50"),"neutral-60":Bt("neutral-60"),"neutral-70":Bt("neutral-70"),"neutral-80":Bt("neutral-80"),"neutral-90":Bt("neutral-90"),"neutral-95":Bt("neutral-95"),"neutral-100":Bt("neutral-100"),"success-10":Bt("success-10"),"success-20":Bt("success-20"),"success-30":Bt("success-30"),"success-40":Bt("success-40"),"success-50":Bt("success-50"),"success-60":Bt("success-60"),"success-70":Bt("success-70"),"success-80":Bt("success-80"),"success-90":Bt("success-90"),"success-95":Bt("success-95"),"success-100":Bt("success-100"),"warning-10":Bt("warning-10"),"warning-20":Bt("warning-20"),"warning-30":Bt("warning-30"),"warning-40":Bt("warning-40"),"warning-50":Bt("warning-50"),"warning-60":Bt("warning-60"),"warning-70":Bt("warning-70"),"warning-80":Bt("warning-80"),"warning-90":Bt("warning-90"),"warning-95":Bt("warning-95"),"warning-100":Bt("warning-100"),"error-10":Bt("error-10"),"error-20":Bt("error-20"),"error-30":Bt("error-30"),"error-40":Bt("error-40"),"error-50":Bt("error-50"),"error-60":Bt("error-60"),"error-70":Bt("error-70"),"error-80":Bt("error-80"),"error-90":Bt("error-90"),"error-95":Bt("error-95"),"error-100":Bt("error-100"),"info-10":Bt("info-10"),"info-20":Bt("info-20"),"info-30":Bt("info-30"),"info-40":Bt("info-40"),"info-50":Bt("info-50"),"info-60":Bt("info-60"),"info-70":Bt("info-70"),"info-80":Bt("info-80"),"info-90":Bt("info-90"),"info-95":Bt("info-95"),"info-100":Bt("info-100"),white:Bt("white"),black:Bt("black"),"primary-inverse":Bt("primary-inverse")},kt={text:Bt("neutral-20"),"text-subtle":Bt("neutral-30"),"text-subtler":Bt("neutral-50"),"text-subtlest":Bt("neutral-60"),"text-primary":Bt("primary-50"),"text-hover":Bt("primary-40"),"text-selected":Bt("primary-50"),"text-selected-hover":Bt("primary-40"),"text-disabled":Bt("neutral-50"),"text-disabled-subtle":Bt("neutral-60"),"text-disabled-subtlest":Bt("neutral-80"),"text-selected-disabled":Bt("neutral-20"),"text-success":Bt("success-40"),"text-warning":Bt("warning-40"),"text-error":Bt("error-40"),"text-info":Bt("info-40"),"text-inverse":Bt("white"),icon:Bt("neutral-50"),"icon-subtle":Bt("neutral-60"),"icon-strongest":Bt("neutral-20"),"icon-primary":Bt("primary-50"),"icon-primary-subtle":Bt("primary-60"),"icon-primary-subtlest":Bt("primary-70"),"icon-hover":Bt("primary-40"),"icon-selected":Bt("primary-50"),"icon-selected-hover":Bt("primary-40"),"icon-disabled":Bt("neutral-50"),"icon-disabled-subtle":Bt("neutral-60"),"icon-selected-disabled":Bt("neutral-60"),"icon-success":Bt("success-50"),"icon-warning":Bt("warning-60"),"icon-error":Bt("error-50"),"icon-error-strong":Bt("error-40"),"icon-info":Bt("info-50"),"icon-inverse":Bt("white"),"icon-primary-inverse":Bt("primary-inverse"),border:Bt("neutral-90"),"border-strong":Bt("neutral-70"),"border-stronger":Bt("neutral-50"),"border-primary":Bt("primary-50"),"border-primary-subtle":Bt("primary-60"),"border-hover":Bt("primary-90"),"border-hover-strong":Bt("primary-60"),"border-selected":Bt("primary-50"),"border-selected-subtle":Bt("primary-70"),"border-selected-subtlest":Bt("primary-90"),"border-selected-hover":Bt("primary-40"),"border-focus":Bt("primary-60"),"border-focus-strong":Bt("primary-50"),"border-disabled":Bt("neutral-90"),"border-selected-disabled":Bt("neutral-70"),"border-success":Bt("success-60"),"border-warning":Bt("warning-60"),"border-error":Bt("error-60"),"border-error-focus":Bt("error-60"),"border-error-focus-strong":Bt("error-40"),"border-error-strong":Bt("error-40"),"border-info":Bt("info-60"),bg:Bt("white"),"bg-strong":Bt("neutral-100"),"bg-stronger":Bt("neutral-95"),"bg-strongest":Bt("neutral-90"),"bg-hover":Bt("primary-95"),"bg-hover-strong":Bt("primary-90"),"bg-hover-subtle":Bt("primary-100"),"bg-hover-neutral":Bt("neutral-100"),"bg-hover-neutral-strong":Bt("neutral-90"),"bg-selected":Bt("primary-95"),"bg-selected-hover":Bt("primary-90"),"bg-selected-strong":Bt("primary-90"),"bg-selected-stronger":Bt("primary-70"),"bg-selected-strongest":Bt("primary-50"),"bg-selected-strongest-hover":Bt("primary-40"),"bg-disabled":Bt("neutral-95"),"bg-selected-disabled":Bt("neutral-95"),"bg-selected-stronger-disabled":Bt("neutral-70"),"bg-success":Bt("success-100"),"bg-success-hover":Bt("success-95"),"bg-success-strong":Bt("success-50"),"bg-success-strong-hover":Bt("success-40"),"bg-warning":Bt("warning-100"),"bg-warning-hover":Bt("warning-95"),"bg-warning-strong":Bt("warning-50"),"bg-warning-strong-hover":Bt("warning-40"),"bg-info":Bt("info-100"),"bg-info-hover":Bt("info-95"),"bg-info-strong":Bt("info-50"),"bg-info-strong-hover":Bt("info-40"),"bg-error":Bt("error-100"),"bg-error-hover":Bt("error-95"),"bg-error-strong":Bt("error-50"),"bg-error-strong-hover":Bt("error-40"),"bg-inverse":Bt("neutral-20"),"bg-inverse-subtle":Bt("neutral-30"),"bg-inverse-subtler":Bt("neutral-50"),"bg-inverse-subtlest":Bt("neutral-60"),"bg-inverse-hover":Bt("neutral-40"),"bg-primary":Bt("primary-50"),"bg-primary-subtle":Bt("primary-60"),"bg-primary-subtler":Bt("primary-95"),"bg-primary-subtlest":Bt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Bt("primary-40"),"bg-primary-subtlest-hover":Bt("primary-90"),"bg-primary-subtlest-selected":Bt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Bt("primary-50"),"hyperlink-hover":Bt("primary-40"),"hyperlink-visited":Bt("primary-40"),"hyperlink-inverse":Bt("primary-inverse"),"focus-ring":Bt("black"),"focus-ring-inverse":Bt("white")},Mt={collections:{lifesg:kt,bookingsg:kt,rbs:kt,mylegacy:kt,ccube:kt,oneservice:kt,pa:{text:Bt("neutral-30"),"text-subtle":Bt("neutral-40"),"text-subtler":Bt("neutral-50"),"text-subtlest":Bt("neutral-70"),"text-primary":Bt("neutral-10"),"text-hover":Bt("neutral-70"),"text-selected":Bt("neutral-20"),"text-selected-hover":Bt("neutral-10"),"text-disabled":Bt("neutral-50"),"text-disabled-subtle":Bt("neutral-60"),"text-disabled-subtlest":Bt("neutral-80"),"text-selected-disabled":Bt("neutral-40"),"text-success":Bt("success-40"),"text-warning":Bt("warning-40"),"text-error":Bt("brand-30"),"text-info":Bt("neutral-40"),"text-inverse":Bt("neutral-100"),icon:Bt("neutral-40"),"icon-subtle":Bt("neutral-50"),"icon-strongest":Bt("neutral-10"),"icon-primary":Bt("neutral-10"),"icon-primary-subtle":Bt("neutral-30"),"icon-primary-subtlest":Bt("neutral-60"),"icon-hover":Bt("neutral-70"),"icon-selected":Bt("brand-20"),"icon-selected-hover":Bt("brand-10"),"icon-disabled":Bt("neutral-50"),"icon-disabled-subtle":Bt("neutral-60"),"icon-selected-disabled":Bt("neutral-40"),"icon-success":Bt("success-40"),"icon-warning":Bt("warning-60"),"icon-error":Bt("brand-30"),"icon-error-strong":Bt("brand-10"),"icon-info":Bt("neutral-40"),"icon-inverse":Bt("neutral-100"),"icon-primary-inverse":"#F9B371",border:Bt("neutral-90"),"border-strong":Bt("neutral-30"),"border-stronger":Bt("neutral-20"),"border-primary":Bt("neutral-40"),"border-primary-subtle":Bt("neutral-60"),"border-hover":Bt("neutral-80"),"border-hover-strong":Bt("neutral-10"),"border-selected":Bt("brand-20"),"border-selected-subtle":Bt("neutral-40"),"border-selected-subtlest":Bt("neutral-70"),"border-selected-hover":Bt("neutral-10"),"border-focus":Bt("neutral-20"),"border-focus-strong":Bt("neutral-10"),"border-disabled":Bt("neutral-90"),"border-selected-disabled":Bt("neutral-80"),"border-success":Bt("success-40"),"border-warning":Bt("warning-60"),"border-error":Bt("brand-30"),"border-error-focus":Bt("brand-20"),"border-error-focus-strong":Bt("brand-10"),"border-error-strong":Bt("brand-20"),"border-info":Bt("neutral-40"),bg:Bt("neutral-100"),"bg-strong":Bt("neutral-95"),"bg-stronger":Bt("neutral-90"),"bg-strongest":Bt("neutral-80"),"bg-hover":Bt("brand-90"),"bg-hover-strong":Bt("brand-80"),"bg-hover-subtle":Bt("neutral-90"),"bg-hover-neutral":Bt("neutral-90"),"bg-hover-neutral-strong":Bt("neutral-90"),"bg-selected":Bt("brand-100"),"bg-selected-hover":Bt("brand-30"),"bg-selected-strong":Bt("brand-50"),"bg-selected-stronger":Bt("brand-40"),"bg-selected-strongest":Bt("brand-20"),"bg-selected-strongest-hover":Bt("brand-10"),"bg-disabled":Bt("neutral-90"),"bg-selected-disabled":Bt("neutral-90"),"bg-selected-stronger-disabled":Bt("neutral-80"),"bg-success":Bt("success-100"),"bg-success-hover":Bt("success-95"),"bg-success-strong":Bt("success-50"),"bg-success-strong-hover":Bt("success-40"),"bg-warning":Bt("warning-100"),"bg-warning-hover":Bt("warning-95"),"bg-warning-strong":Bt("warning-50"),"bg-warning-strong-hover":Bt("warning-40"),"bg-info":Bt("neutral-95"),"bg-info-hover":Bt("info-95"),"bg-info-strong":Bt("info-50"),"bg-info-strong-hover":Bt("info-40"),"bg-error":Bt("brand-100"),"bg-error-hover":Bt("error-95"),"bg-error-strong":Bt("error-50"),"bg-error-strong-hover":Bt("error-40"),"bg-inverse":Bt("neutral-40"),"bg-inverse-subtle":Bt("neutral-60"),"bg-inverse-subtler":Bt("neutral-70"),"bg-inverse-subtlest":Bt("neutral-80"),"bg-inverse-hover":Bt("neutral-30"),"bg-primary":Bt("brand-20"),"bg-primary-subtle":Bt("brand-60"),"bg-primary-subtler":Bt("brand-80"),"bg-primary-subtlest":Bt("brand-100"),"bg-available":Bt("success-60"),"bg-primary-hover":Bt("brand-10"),"bg-primary-subtlest-hover":Bt("brand-80"),"bg-primary-subtlest-selected":Bt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Bt("neutral-10"),"hyperlink-hover":Bt("neutral-40"),"hyperlink-visited":Bt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Bt("black"),"focus-ring-inverse":Bt("white")}},defaultValue:"lifesg"},zt=e=>r=>{var t;const n=r.theme,i=bt(Mt,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?ft(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},jt={text:zt("text"),"text-subtle":zt("text-subtle"),"text-subtler":zt("text-subtler"),"text-subtlest":zt("text-subtlest"),"text-primary":zt("text-primary"),"text-hover":zt("text-hover"),"text-selected":zt("text-selected"),"text-selected-hover":zt("text-selected-hover"),"text-disabled":zt("text-disabled"),"text-disabled-subtle":zt("text-disabled-subtle"),"text-disabled-subtlest":zt("text-disabled-subtlest"),"text-selected-disabled":zt("text-selected-disabled"),"text-success":zt("text-success"),"text-warning":zt("text-warning"),"text-error":zt("text-error"),"text-info":zt("text-info"),"text-inverse":zt("text-inverse"),icon:zt("icon"),"icon-subtle":zt("icon-subtle"),"icon-strongest":zt("icon-strongest"),"icon-primary":zt("icon-primary"),"icon-primary-subtle":zt("icon-primary-subtle"),"icon-primary-subtlest":zt("icon-primary-subtlest"),"icon-hover":zt("icon-hover"),"icon-selected":zt("icon-selected"),"icon-selected-hover":zt("icon-selected-hover"),"icon-disabled":zt("icon-disabled"),"icon-disabled-subtle":zt("icon-disabled-subtle"),"icon-selected-disabled":zt("icon-selected-disabled"),"icon-success":zt("icon-success"),"icon-warning":zt("icon-warning"),"icon-error":zt("icon-error"),"icon-error-strong":zt("icon-error-strong"),"icon-info":zt("icon-info"),"icon-inverse":zt("icon-inverse"),"icon-primary-inverse":zt("icon-primary-inverse"),border:zt("border"),"border-strong":zt("border-strong"),"border-stronger":zt("border-stronger"),"border-primary":zt("border-primary"),"border-primary-subtle":zt("border-primary-subtle"),"border-hover":zt("border-hover"),"border-hover-strong":zt("border-hover-strong"),"border-selected":zt("border-selected"),"border-selected-subtle":zt("border-selected-subtle"),"border-selected-subtlest":zt("border-selected-subtlest"),"border-selected-hover":zt("border-selected-hover"),"border-focus":zt("border-focus"),"border-focus-strong":zt("border-focus-strong"),"border-disabled":zt("border-disabled"),"border-selected-disabled":zt("border-selected-disabled"),"border-success":zt("border-success"),"border-warning":zt("border-warning"),"border-error":zt("border-error"),"border-error-focus":zt("border-error-focus"),"border-error-focus-strong":zt("border-error-focus-strong"),"border-error-strong":zt("border-error-strong"),"border-info":zt("border-info"),bg:zt("bg"),"bg-strong":zt("bg-strong"),"bg-stronger":zt("bg-stronger"),"bg-strongest":zt("bg-strongest"),"bg-hover":zt("bg-hover"),"bg-hover-strong":zt("bg-hover-strong"),"bg-hover-subtle":zt("bg-hover-subtle"),"bg-hover-neutral":zt("bg-hover-neutral"),"bg-hover-neutral-strong":zt("bg-hover-neutral-strong"),"bg-selected":zt("bg-selected"),"bg-selected-hover":zt("bg-selected-hover"),"bg-selected-strong":zt("bg-selected-strong"),"bg-selected-stronger":zt("bg-selected-stronger"),"bg-selected-strongest":zt("bg-selected-strongest"),"bg-selected-strongest-hover":zt("bg-selected-strongest-hover"),"bg-disabled":zt("bg-disabled"),"bg-selected-disabled":zt("bg-selected-disabled"),"bg-selected-stronger-disabled":zt("bg-selected-stronger-disabled"),"bg-success":zt("bg-success"),"bg-success-hover":zt("bg-success-hover"),"bg-success-strong":zt("bg-success-strong"),"bg-success-strong-hover":zt("bg-success-strong-hover"),"bg-warning":zt("bg-warning"),"bg-warning-hover":zt("bg-warning-hover"),"bg-warning-strong":zt("bg-warning-strong"),"bg-warning-strong-hover":zt("bg-warning-strong-hover"),"bg-info":zt("bg-info"),"bg-info-hover":zt("bg-info-hover"),"bg-info-strong":zt("bg-info-strong"),"bg-info-strong-hover":zt("bg-info-strong-hover"),"bg-error":zt("bg-error"),"bg-error-hover":zt("bg-error-hover"),"bg-error-strong":zt("bg-error-strong"),"bg-error-strong-hover":zt("bg-error-strong-hover"),"bg-inverse":zt("bg-inverse"),"bg-inverse-subtle":zt("bg-inverse-subtle"),"bg-inverse-subtler":zt("bg-inverse-subtler"),"bg-inverse-subtlest":zt("bg-inverse-subtlest"),"bg-inverse-hover":zt("bg-inverse-hover"),"bg-primary":zt("bg-primary"),"bg-primary-subtle":zt("bg-primary-subtle"),"bg-primary-subtler":zt("bg-primary-subtler"),"bg-primary-subtlest":zt("bg-primary-subtlest"),"bg-available":zt("bg-available"),"bg-primary-hover":zt("bg-primary-hover"),"bg-primary-subtlest-hover":zt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":zt("bg-primary-subtlest-selected"),"overlay-strong":zt("overlay-strong"),"overlay-subtle":zt("overlay-subtle"),hyperlink:zt("hyperlink"),"hyperlink-hover":zt("hyperlink-hover"),"hyperlink-visited":zt("hyperlink-visited"),"hyperlink-inverse":zt("hyperlink-inverse"),"focus-ring":zt("focus-ring"),"focus-ring-inverse":zt("focus-ring-inverse")},_t={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Dt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:jt.border(r),u=Dt.solid;return h`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Dt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:jt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return h`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Tt=e=>1===e.length&&"theme"in e[0],Lt=e=>(...r)=>t=>{const n=Tt(r)?[]:r,i=Tt(r)?r[0]:t,o=i.theme;return(0,bt(_t,null==o?void 0:o.borderScheme)[e])(...n)(i)},Rt={solid:Lt("solid"),"dashed-default":Lt("dashed-default")},It={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,i=bt(It,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ft(i,e,n.overrides.fontSpec):i[e]},Yt={"heading-size-xxl":Pt("heading-size-xxl"),"heading-size-xl":Pt("heading-size-xl"),"heading-size-lg":Pt("heading-size-lg"),"heading-size-md":Pt("heading-size-md"),"heading-size-sm":Pt("heading-size-sm"),"heading-size-xs":Pt("heading-size-xs"),"heading-lh-xxl":Pt("heading-lh-xxl"),"heading-lh-xl":Pt("heading-lh-xl"),"heading-lh-lg":Pt("heading-lh-lg"),"heading-lh-md":Pt("heading-lh-md"),"heading-lh-sm":Pt("heading-lh-sm"),"heading-lh-xs":Pt("heading-lh-xs"),"heading-ls-xxl":Pt("heading-ls-xxl"),"heading-ls-xl":Pt("heading-ls-xl"),"heading-ls-lg":Pt("heading-ls-lg"),"heading-ls-md":Pt("heading-ls-md"),"heading-ls-sm":Pt("heading-ls-sm"),"heading-ls-xs":Pt("heading-ls-xs"),"weight-light":Pt("weight-light"),"weight-regular":Pt("weight-regular"),"weight-semibold":Pt("weight-semibold"),"weight-bold":Pt("weight-bold"),"font-family":Pt("font-family"),"body-size-baseline":Pt("body-size-baseline"),"body-size-md":Pt("body-size-md"),"body-size-sm":Pt("body-size-sm"),"body-size-xs":Pt("body-size-xs"),"body-lh-baseline":Pt("body-lh-baseline"),"body-lh-md":Pt("body-lh-md"),"body-lh-sm":Pt("body-lh-sm"),"body-lh-xs":Pt("body-lh-xs"),"body-ls-baseline":Pt("body-ls-baseline"),"body-ls-md":Pt("body-ls-md"),"body-ls-sm":Pt("body-ls-sm"),"body-ls-xs":Pt("body-ls-xs"),"form-label-size":Pt("form-label-size"),"form-description-size":Pt("form-description-size"),"form-label-lh":Pt("form-label-lh"),"form-description-lh":Pt("form-description-lh"),"form-label-ls":Pt("form-label-ls"),"form-description-ls":Pt("form-description-ls")},Wt=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return h`
        font-family: ${Pt("font-family")};
        font-size: ${Pt(e)};
        font-weight: ${Pt(r)};
        line-height: ${Pt(t)};
        letter-spacing: ${Pt(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Ht=(e={})=>({"heading-xxl-light":Wt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Wt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Wt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Wt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Wt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Wt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Wt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Wt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Wt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Wt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Wt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Wt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Wt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Wt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Wt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Wt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Wt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Wt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Wt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Wt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Wt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Wt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Wt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Wt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Wt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Wt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Wt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Wt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Wt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Wt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Wt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Wt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Wt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Wt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Wt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Wt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Wt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Wt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Wt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Wt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Wt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Wt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Nt=Ht({disableLigatures:!0}),Vt={collections:{default:Ht(),bookingsg:Nt,pa:Ht({disableLigatures:!0})},defaultValue:"default"},Ut=e=>r=>{var t;const n=r.theme,i=bt(Vt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ft(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},qt={"heading-xxl-light":Ut("heading-xxl-light"),"heading-xxl-regular":Ut("heading-xxl-regular"),"heading-xxl-semibold":Ut("heading-xxl-semibold"),"heading-xxl-bold":Ut("heading-xxl-bold"),"heading-xl-light":Ut("heading-xl-light"),"heading-xl-regular":Ut("heading-xl-regular"),"heading-xl-semibold":Ut("heading-xl-semibold"),"heading-xl-bold":Ut("heading-xl-bold"),"heading-lg-light":Ut("heading-lg-light"),"heading-lg-regular":Ut("heading-lg-regular"),"heading-lg-semibold":Ut("heading-lg-semibold"),"heading-lg-bold":Ut("heading-lg-bold"),"heading-md-light":Ut("heading-md-light"),"heading-md-regular":Ut("heading-md-regular"),"heading-md-semibold":Ut("heading-md-semibold"),"heading-md-bold":Ut("heading-md-bold"),"heading-sm-light":Ut("heading-sm-light"),"heading-sm-regular":Ut("heading-sm-regular"),"heading-sm-semibold":Ut("heading-sm-semibold"),"heading-sm-bold":Ut("heading-sm-bold"),"heading-xs-light":Ut("heading-xs-light"),"heading-xs-regular":Ut("heading-xs-regular"),"heading-xs-semibold":Ut("heading-xs-semibold"),"heading-xs-bold":Ut("heading-xs-bold"),"body-baseline-light":Ut("body-baseline-light"),"body-baseline-regular":Ut("body-baseline-regular"),"body-baseline-semibold":Ut("body-baseline-semibold"),"body-baseline-bold":Ut("body-baseline-bold"),"body-md-light":Ut("body-md-light"),"body-md-regular":Ut("body-md-regular"),"body-md-semibold":Ut("body-md-semibold"),"body-md-bold":Ut("body-md-bold"),"body-sm-light":Ut("body-sm-light"),"body-sm-regular":Ut("body-sm-regular"),"body-sm-semibold":Ut("body-sm-semibold"),"body-sm-bold":Ut("body-sm-bold"),"body-xs-light":Ut("body-xs-light"),"body-xs-regular":Ut("body-xs-regular"),"body-xs-semibold":Ut("body-xs-semibold"),"body-xs-bold":Ut("body-xs-bold"),"form-label":Ut("form-label"),"form-description":Ut("form-description")},Zt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Qt=e=>r=>{var t;const n=r.theme,i=bt(Zt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ft(i,e,n.overrides.motion):i[e]},Xt={"duration-150":Qt("duration-150"),"duration-250":Qt("duration-250"),"duration-350":Qt("duration-350"),"duration-500":Qt("duration-500"),"duration-800":Qt("duration-800"),"duration-1000":Qt("duration-1000"),"ease-default":Qt("ease-default"),"ease-standard":Qt("ease-standard"),"ease-entrance":Qt("ease-entrance"),"ease-exit":Qt("ease-exit")},Jt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Gt=e=>r=>{var t;const n=r.theme,i=bt(Jt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ft(i,e,n.overrides.radius)}px`:`${i[e]}px`},Kt={none:Gt("none"),xs:Gt("xs"),sm:Gt("sm"),md:Gt("md"),lg:Gt("lg"),full:Gt("full")},en={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},rn=e=>r=>{var t;const n=r.theme,i=bt(en,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ft(i,e,n.overrides.spacing)}px`:`${i[e]}px`},tn={"spacing-0":rn("spacing-0"),"spacing-4":rn("spacing-4"),"spacing-8":rn("spacing-8"),"spacing-12":rn("spacing-12"),"spacing-16":rn("spacing-16"),"spacing-20":rn("spacing-20"),"spacing-24":rn("spacing-24"),"spacing-32":rn("spacing-32"),"spacing-40":rn("spacing-40"),"spacing-48":rn("spacing-48"),"spacing-64":rn("spacing-64"),"spacing-72":rn("spacing-72"),"layout-xs":rn("layout-xs"),"layout-sm":rn("layout-sm"),"layout-md":rn("layout-md"),"layout-lg":rn("layout-lg"),"layout-xl":rn("layout-xl"),"layout-xxl":rn("layout-xxl"),"layout-xxxl":rn("layout-xxxl")},nn=Object.assign(Object.assign({},jt),{Primitive:At}),on=Object.assign(Object.assign({},qt),{Spec:Yt}),an=Xt,sn=Object.assign(Object.assign({},Dt),{Util:Rt}),ln=tn,dn=Kt,cn=vt,un=wt,gn=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?h`
                padding: 0 ${cn["xxl-margin"]}px;
            `:h`
                padding: 0 ${cn["xxl-margin"]}px;
                max-width: 1440px;

                ${un.MaxWidth.xl} {
                    padding: 0 ${cn["xl-margin"]}px;
                }

                ${un.MaxWidth.lg} {
                    padding: 0 ${cn["lg-margin"]}px;
                }

                ${un.MaxWidth.md} {
                    padding: 0 ${cn["md-margin"]}px;
                }

                ${un.MaxWidth.sm} {
                    padding: 0 ${cn["sm-margin"]}px;
                }

                ${un.MaxWidth.xs} {
                    padding: 0 ${cn["xs-margin"]}px;
                }

                ${un.MaxWidth.xxs} {
                    padding: 0 ${cn["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return h`
                    column-gap: ${cn["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${cn["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${un.MaxWidth.xl} {
                        column-gap: ${cn["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${cn["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${un.MaxWidth.lg} {
                        column-gap: ${cn["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${cn["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${un.MaxWidth.md} {
                        column-gap: ${cn["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${cn["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${un.MaxWidth.sm} {
                        column-gap: ${cn["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${cn["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${un.MaxWidth.xs} {
                        column-gap: ${cn["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${cn["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${un.MaxWidth.xxs} {
                        column-gap: ${cn["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${cn["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return h`
                    display: flex;
                    flex-direction: column;
                `;default:return h`
                    display: flex;
                `}}}
`,mn=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=r,s=U(r,["children","data-testid","type","stretch"]);return e(gn,Object.assign({ref:t,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),hn=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=r,a=U(r,["children","data-testid","stretch"]);return e(fn,Object.assign({ref:t,"data-testid":i,$stretch:o},a,{children:n}))})),fn=m.section`
    display: block;
    position: relative;
`,bn=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=r,l=U(r,["children","data-testid","className","type","stretch"]);return e(hn,Object.assign({ref:t,"data-testid":i,className:o,stretch:s},l,{children:e(mn,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),pn={Section:hn,Container:mn,Content:bn,ColDiv:$t},yn=(e,r,t=!1)=>h`
        ${on[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,vn=e=>{if(e)return h`
            ${r=e,h`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},xn=(e,r)=>h`
    ${yn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?h`
            display: block;
            ${vn(t)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${vn(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${nn.text};
`;var wn;!function(t){const n=(e,r,t)=>{const n=m(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>xn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=m.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>xn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=m.a`
            ${e=>h`
                ${yn(t,e.weight||"regular")}
                color: ${nn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${nn["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,a=U(t,["external","children"]);return r(i,Object.assign({},a,{children:[o,n&&e(Fn,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(wn||(wn={}));const Fn=m(p)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,$n=h`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${un.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,Cn=m(pn.Content)`
    background: ${({$background:e})=>e?nn["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,En=m(wn.HeadingSM)`
    margin-bottom: 1rem;
    ${$n}
`,Dn=m(wn.BodyBL)`
    margin-bottom: 2rem;
    ${$n}
`,On=m.div`
    ${$n}
`,Sn=m.ul`
    ${$n}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${un.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${un.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,Bn=i.forwardRef(((r,t)=>{var{stretch:n}=r,i=U(r,["stretch"]);return e(Sn,Object.assign({ref:t,$stretch:n},i))}));var An,kn={exports:{}};An=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var g=l?l():"";n("Failed "+t+" type: "+c.message+(null!=g?g:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",g={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:f(d),arrayOf:function(e){return f((function(r,t,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new h("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:f((function(r,t,n,i,o){var a=r[t];return e(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:f((function(e,r,t,n,o){var a=e[r];return i.isValidElementType(a)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(r,t,n,i,o){if(!(r[t]instanceof e)){var a=e.name||u;return new h("Invalid "+i+" `"+o+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,r,t,n,i){return y(e[r])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(r,t,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new h("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(r,t,n,i,o){for(var a=r[t],s=0;s<e.length;s++)if(m(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(t)+" at index "+r+"."),d}return f((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new h("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(r,t,n,i,o){var s=r[t],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,i,o,d,x(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return f((function(r,t,n,i,l){var d=r[t],c=v(d);if("object"!==c)return new h("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var g in u){var m=e[g];if(s(e,g)&&"function"!=typeof m)return p(n,i,l,g,x(m));if(!m)return new h("Invalid "+i+" `"+l+"` key `"+g+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=m(d,g,n,i,l+"."+g,a);if(f)return f}return null}))}};function m(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function h(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function f(e){var t={},i=0;function o(o,s,l,d,c,g,m){if(d=d||u,g=g||l,m!==a){if(r){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var b=d+":"+l;!t[b]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+g+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,i++)}}return null==s[l]?o?null===s[l]?new h("The "+c+" `"+g+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+c+" `"+g+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,g)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function b(e){return f((function(r,t,n,i,o,a){var s=r[t];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,t,n,i){return new h((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(y);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function w(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return h.prototype=Error.prototype,g.checkPropTypes=l,g.resetWarningCache=l.resetWarningCache,g.PropTypes=g,g}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var m=e.type;switch(m){case d:case c:case i:case a:case o:case g:return m;default:var b=m&&m.$$typeof;switch(b){case l:case u:case f:case h:case s:return b;default:return r}}case n:return r}}}var w=d,F=c,$=l,C=s,E=t,D=u,O=i,S=f,B=h,A=n,k=a,M=o,z=g,j=!1;function _(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=F,r.ContextConsumer=$,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=O,r.Lazy=S,r.Memo=B,r.Portal=A,r.Profiler=k,r.StrictMode=M,r.Suspense=z,r.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||x(e)===d},r.isConcurrentMode=_,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===f},r.isMemo=function(e){return x(e)===h},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===g},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===g||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),g=n(n({},l),u);r.default={all:g,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},g=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=g(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),m=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),h=u();return(0,i.useEffect)((function(){h&&t&&t(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Mn=kn.exports=An(i),zn={exports:{}};zn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=b;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=b.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,b):m(0,b+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return m(n?p-x:p+(6-x),b);case s:case g:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case o:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(g,1);f.$d[m](h),f.init(),this.$d=f.set(g,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,m=this;n=Number(n);var h=E.p(c),f=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return f(1);if(h===l)return f(7);var b=(g={},g[o]=r,g[a]=t,g[i]=e,g)[h]||1,p=this.$d.getTime()+n*b;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},g=function(e){return E.s(o%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(o,a,!0);case"A":return h(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,m){var h,f=this,b=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(f,p)};switch(b){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-y)/6048e5;break;case s:h=(v-y)/864e5;break;case a:h=v/t;break;case o:h=v/r;break;case i:h=v/e;break;default:h=v}return m?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),O=D.prototype;return C.prototype=O,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){O[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var jn=Z(zn.exports),_n={exports:{}};_n.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],m=c&&c[1];a[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,h=a||(i||o?1:m.getDate()),f=i||m.getFullYear(),b=0;i&&!o||(b=o>0?o-1:m.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,b,h,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,b,h,p,y,v,x)):new Date(f,b,h,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var m=s.length,h=1;h<=m;h+=1){a[1]=s[h-1];var f=t.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}h===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Tn=Z(_n.exports),Ln={exports:{}};Ln.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Rn=Z(Ln.exports),In={exports:{}};In.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Pn=Z(In.exports),Yn={exports:{}};Yn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Wn,Hn,Nn,Vn=Z(Yn.exports),Un={exports:{}},qn=Z(Un.exports=(Wn={year:0,month:1,day:2,hour:3,minute:4,second:5},Hn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Hn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Hn[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Wn[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",h=+e;return(t.utc(m).valueOf()-(h-=h%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));jn.extend(Rn),jn.extend(Vn),jn.extend(Pn),jn.extend(Tn),jn.extend(qn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=jn(r).startOf("week");return Zn(t).map((e=>Qn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Qn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(jn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+jn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=jn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?jn(n):void 0,i?jn(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(Nn||(Nn={}));const Zn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Qn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Xn=[1,3,5,7,8,10,12],Jn=[4,6,9,11];var Gn,Kn,ei,ri;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":Xn.includes(o)?Math.min(i,31).toString():Jn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=jn(e,t);return jn(r,t).diff(n,"minute")},e.toDayjs=e=>e?jn(e):jn(),e.addMinutesToTime=(e,r,t="HH:mm")=>jn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>jn(e).isSame(jn(r),t)}(Gn||(Gn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!jn(e).isBefore(n,"day"))||!(!i||!jn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(jn(e).isValid())return e}return""}}(Kn||(Kn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ei||(ei={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(ri||(ri={}));var ti=function(e,r){return ti=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ti(e,r)};var ni=function(){return ni=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ni.apply(this,arguments)};var ii="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var oi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ai="object"==typeof ii&&ii&&ii.Object===Object&&ii,si="object"==typeof self&&self&&self.Object===Object&&self,li=ai||si||Function("return this")(),di=li,ci=function(){return di.Date.now()},ui=/\s/;var gi=function(e){for(var r=e.length;r--&&ui.test(e.charAt(r)););return r},mi=/^\s+/;var hi=function(e){return e?e.slice(0,gi(e)+1).replace(mi,""):e},fi=li.Symbol,bi=fi,pi=Object.prototype,yi=pi.hasOwnProperty,vi=pi.toString,xi=bi?bi.toStringTag:void 0;var wi=function(e){var r=yi.call(e,xi),t=e[xi];try{e[xi]=void 0;var n=!0}catch(e){}var i=vi.call(e);return n&&(r?e[xi]=t:delete e[xi]),i},Fi=Object.prototype.toString;var $i=wi,Ci=function(e){return Fi.call(e)},Ei=fi?fi.toStringTag:void 0;var Di=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ei&&Ei in Object(e)?$i(e):Ci(e)},Oi=function(e){return null!=e&&"object"==typeof e};var Si=hi,Bi=oi,Ai=function(e){return"symbol"==typeof e||Oi(e)&&"[object Symbol]"==Di(e)},ki=/^[-+]0x[0-9a-f]+$/i,Mi=/^0b[01]+$/i,zi=/^0o[0-7]+$/i,ji=parseInt;var _i=oi,Ti=ci,Li=function(e){if("number"==typeof e)return e;if(Ai(e))return NaN;if(Bi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Bi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Si(e);var t=Mi.test(e);return t||zi.test(e)?ji(e.slice(2),t?2:8):ki.test(e)?NaN:+e},Ri=Math.max,Ii=Math.min;var Pi=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function f(){var e=Ti();if(h(e))return b(e);s=setTimeout(f,function(e){var t=r-(e-l);return u?Ii(t,o-(e-d)):t}(e))}function b(e){return s=void 0,g&&n?m(e):(n=i=void 0,a)}function p(){var e=Ti(),t=h(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?m(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),m(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=Li(r)||0,_i(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Ri(Li(t.maxWait)||0,r):o,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:b(Ti())},p},Yi=Pi,Wi=oi;var Hi=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Wi(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Yi(e,r,{leading:n,maxWait:r,trailing:i})},Ni=function(e,r,t,n){switch(r){case"debounce":return Pi(e,t,n);case"throttle":return Hi(e,t,n);default:return e}},Vi=function(e){return"function"==typeof e},Ui=function(){return"undefined"==typeof window},qi=function(e){return e instanceof Element||e instanceof HTMLDocument},Zi=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Vi(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ui()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ui())return null;if(r)return document.querySelector(r);if(n&&qi(n))return n;if(t.targetRef&&qi(t.targetRef.current))return t.targetRef.current;var i=R(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Zi(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Ui()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Vi(r)?"renderProp":Vi(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Ui()||(t.resizeHandler=Ni(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ti(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ui()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var Qi=Ui()?u:g;const Xi=m.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return h`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Ji=m.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?nn["overlay-subtle"]:nn["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=h`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=h`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=h`
                transition: none;
            `),r}}
`;var Gi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Gi||(Gi={}));const Ki=({show:r=!1,rootId:t,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:g=!1,zIndex:m,id:h})=>{const[f,b]=a(null),[p,y]=a(),[v]=a((()=>ei.generate())),x=$(),F=o(),E=o(null),D=s&&i.cloneElement(s,{ref:E}),O=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",S=null!=m?m:p?99999:99998;(e=>{const r=w();u((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Gi.Change,t)}),[r,e]),u((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Gi.Change,t)};return null==r||r.events.on(Gi.Ready,t),()=>null==r?void 0:r.events.off(Gi.Ready,t)}),[r,e])})(S),u((()=>(M(),b(A()),()=>{T(),j().length<1&&z("remove")})),[]),u((()=>{if(r){const e=k();B(e),_();const r=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{j().length<1&&z("remove")}),200);return()=>clearTimeout(e)}}),[r]);const B=e=>{F.current=e,y(e)},A=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>j().length>0,M=()=>{if(!document.getElementById(ro)){const e=document.createElement("style");e.id=ro;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${to} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${to}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},z=e=>{const r=document.body.classList.contains(to);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(to):document.body.classList.add(to)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},_=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},R=e=>{var r;const t=null===(r=E.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&g&&(e.preventDefault(),n())};return f?L.createPortal(e(Xi,{id:O,"data-testid":O,$show:r,$zIndex:S,children:s&&e(C,{id:x,children:e(Ji,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:R,children:D})})}),f):null},eo=r=>e(F,{children:e(Ki,Object.assign({},r))}),ro="lifesg-ds-overlay-stylesheet",to="lifesg-ds-overlay-open",no=m.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${un.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,io=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:g=!0}=r,m=U(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,f]=a(),[b,p]=a();u((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),u((()=>{var e,r;n&&g&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const y=()=>{const e=.01*window.innerHeight;f(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),p(window.visualViewport.offsetTop)}};return e(eo,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:c,id:t,rootId:l,zIndex:d,children:e(no,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:h,offsetTop:b},m,{children:o}))})},oo=m.div`
    border-radius: ${dn.md};
    background: ${nn.bg};
    padding: ${ln["spacing-16"]} ${ln["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,ao=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ln["spacing-24"]};
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

        ${({$highlight:e})=>e&&h`
                background-color: ${nn["bg-hover-neutral"]};
            `}
    }
`,so=i.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=U(r,["children","focusHighlight","focusOutline","type"]);return e(ao,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),lo=m.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${nn.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${un.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,co=m(so)`
    position: absolute;
    top: var(--close-button-top-inset, ${ln["spacing-16"]});
    right: var(--close-button-right-inset, ${ln["spacing-16"]});
    padding: 0;
    color: ${nn.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${un.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ln["spacing-20"]});
    }
`,uo=e=>{const{textSize:r}=e||{};return h`
        // Text styling
        ${r&&on[`${r}-regular`]}

        strong {
            font-weight: ${on.Spec["weight-semibold"]};
            ${r&&on[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${on.Spec["weight-semibold"]};
            ${r&&on[`${r}-semibold`]}
            color: ${nn.hyperlink};
            text-decoration: none;

            svg {
                color: ${nn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${nn["hyperlink-hover"]};

                svg {
                    color: ${nn["icon-hover"]};
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
    `},go=m.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,mo=m((r=>{var{children:t}=r,n=U(r,["children"]);const i=n["data-testid"]||"card";return e(oo,Object.assign({},n,{"data-testid":i,children:"string"==typeof t?e(wn.BodyBL,{children:t}):t}))}))`
    color: ${nn.text};
    ${uo({textSize:"body-md"})}

    ${un.MaxWidth.sm} {
        display: none;
    }
`,ho=m((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=U(t,["id","children","onClose","showCloseButton"]);return r(lo,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(co,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(I,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,fo=m.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${nn.text};
    ${uo({textSize:"body-md"})}
`,bo=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=U(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",d=f(),c=cn["sm-max"]({theme:d}),u=Mn.useMediaQuery({maxWidth:c}),g=()=>{a&&a()},m=()=>"string"==typeof i?e(wn.BodyMD,{children:i}):i;return r(t,{children:[o&&e(go,Object.assign({"data-testid":l},s,{children:e(mo,{children:m()})})),u&&e(io,{show:null!=o&&o,onOverlayClick:g,children:e(ho,{onClose:g,children:e(fo,{children:m()})})})]})},po=m.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,yo=n=>{var i,s,{children:l,popoverContent:d,trigger:c="click",position:g="top",zIndex:m,rootNode:h,customOffset:b,delay:p,onPopoverAppear:y,onPopoverDismiss:v}=n,x=U(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[F,$]=a(!1),C=o(null),L=o(null),R=f(),I=cn["sm-max"]({theme:R}),P=Mn.useMediaQuery({maxWidth:I}),{refs:Y,floatingStyles:W,context:H}=E({open:F,placement:g,whileElementsMounted:D,middleware:[O(null!=b?b:16),S(),B({limiter:A()})],onOpenChange:e=>{$(e),F!==e&&K(e)}}),N=(()=>{const[e,r]=a(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Gi.Change,e),t.events.emit(Gi.Ready),()=>t.events.off(Gi.Change,e)}),[t]),e})(),V=P?"click":c,q=k(H,{ignoreMouse:"hover"===V}),Z=M(H),Q=z(H,{enabled:"hover"===V,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(s=null==p?void 0:p.close)&&void 0!==s?s:500}}),{getReferenceProps:X,getFloatingProps:J}=j([q,Z,Q]),G=()=>{$(!1),K(!1)},K=e=>{e&&y&&y(),!e&&v&&v()};return r(t,{children:[e(po,Object.assign({ref:e=>{C.current=e,Y.setReference(e)}},X({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),x,{children:l})),F&&e(_,{root:h,children:e(T,{context:H,children:e("div",Object.assign({ref:e=>{L.current=e,Y.setFloating(e)},style:Object.assign(Object.assign({},W),{outline:"none",zIndex:null!=m?m:N})},J(),{children:"function"==typeof d?d():e(bo,{visible:!0,onMobileClose:G,children:d})}))})})]})},vo=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},xo=m.span`
    color: ${nn["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>vo(e)}

    &:hover,
    &:focus-visible {
        color: ${nn["text-hover"]};
        ${({$hoverStyle:e})=>vo(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,wo=m.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Fo=t=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=t,l=U(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(yo,Object.assign({},l,{children:r(xo,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:d?void 0:"More info",children:[i,o&&e(wo,{$standalone:!d,children:o})]})}))},$o=m.div`
    padding-left: ${ln["spacing-4"]};
    display: inline;
`,Co=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=r;return e($o,{children:e(Fo,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:t,zIndex:s,icon:null!=o?o:e(x,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Eo=m.label`
    color: ${nn["text-subtle"]};
    margin-bottom: ${ln["spacing-8"]};
    display: inline-block;

    ${on["form-label"]}
    ${uo()}
    font-weight: ${on.Spec["weight-semibold"]};
`;m.p`
    ${on["body-sm-semibold"]}
    color: ${nn["text-error"]};
    margin-top: ${ln["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;const Do=m.span`
    ${on["form-description"]}
    color: ${nn["text-subtler"]};
    display: block;
`,Oo=t=>{var{children:n,addon:i,subtitle:o,"data-testid":a}=t,s=U(t,["children","addon","subtitle","data-testid"]);return r(Eo,Object.assign({},s,{children:[n,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(Co,{addon:i}):null),"string"==typeof o?e(Do,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},So=m.div`
    padding: ${ln["spacing-8"]} ${ln["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=nn["bg-error"](e),t=nn["border-error"](e);break;case"success":r=nn["bg-success"](e),t=nn["border-success"](e);break;case"warning":default:r=nn["bg-warning"](e),t=nn["border-warning"](e);break;case"info":r=nn["bg-info"](e),t=nn["border-info"](e);break;case"description":r=nn["bg-strong"](e),t=nn["border-strong"](e)}return h`
            background: ${r};
            border-left: ${sn["width-020"]} ${sn.solid}
                ${t};
        `}}

    color: ${nn.text};
    ${e=>"small"===e.$sizeType?uo({textSize:"body-sm"}):uo({textSize:"body-md"})}
`,Bo=m.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ln["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=nn["icon-error"](e);break;case"success":r=nn["icon-success"](e);break;case"warning":default:r=nn["icon-warning"](e);break;case"info":r=nn["icon-info"](e);break;case"description":r=nn["icon-subtle"](e)}return h`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Ao=m(wn.LinkSM)`
    ${e=>"small"===e.$sizeType?h`
                ${on["body-sm-semibold"]}
                margin-top: ${ln["spacing-4"]};
            `:h`
                ${on["body-md-semibold"]}
                margin-top: ${ln["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ln["spacing-4"]};
    }
`,ko=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Mo=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return h`
                margin-bottom: ${ln["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,zo=m.button`
    ${e=>"small"===e.$sizeType?h`
                ${on["body-sm-semibold"]}
            `:h`
                ${on["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ln["spacing-4"]};
    margin-top: ${ln["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${nn["text-primary"]};
`,jo=m(V)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${an["duration-350"]} ${an["ease-standard"]};
`,_o=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,To=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Lo=m.div`
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
    animation: ${To} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ro=m(Lo)`
    animation-delay: -0.45s;
`,Io=m(Lo)`
    animation-delay: -0.3s;
`,Po=m(Lo)`
    animation-delay: -0.15s;
`,Yo=m.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return h`
                    grid-column: auto / span 4;
                `;case"full":return h`
                    grid-column: auto / span 8;
                `}}}

    ${un.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,Wo=m.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${nn["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${on.Spec["body-size-baseline"]};
        height: ${on.Spec["body-size-baseline"]};
    }
`,Ho=m.button`
    ${on["body-baseline-regular"]}
    color: ${nn.text};
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
`,No=m.span`
    color: ${nn["text-disabled"]};
`,Vo=m((({color:t,className:n,size:i})=>r(_o,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(Lo,{id:"inner1"}),e(Ro,{id:"inner2"}),e(Io,{id:"inner3"}),e(Po,{id:"inner4"})]})))`
    margin-right: 0.5rem;
    color: ${nn["text-disabled"]};
`,Uo=m(P)`
    color: ${nn["icon-warning"]};
    margin-right: 0.5rem;
    height: ${on.Spec["body-size-baseline"]};
    width: ${on.Spec["body-size-baseline"]};
`,qo=m.span`
    color: ${nn["text-warning"]};
`,Zo=m.span`
    ${on["body-baseline-semibold"]}
    color: ${nn.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Qo=m((t=>{var{type:n,className:i,children:s,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:g=!1,customIcon:m,maxCollapsedHeight:h}=t,f=U(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,p]=a(!1),[y,v]=a(!1),{height:w,ref:F}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,m=e.targetRef,h=e.observerOptions,f=e.onResize,b=o(t),p=o(null),y=null!=m?m:p,v=o(),x=a({width:void 0,height:void 0}),w=x[0],F=x[1];return Qi((function(){if(!Ui()){var e=Zi(f,F,c,g);v.current=Ni((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!b.current&&!Ui()&&e({width:n,height:i}),b.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,f,h,y.current]),ni({ref:y},w)}();u((()=>{$()}),[h,w]);const $=()=>{p(!h),v(C())},C=()=>!(!w||!h)&&w>h;return r(So,{className:i,$type:n,$sizeType:c,"data-testid":f["data-testid"],children:[g&&e(Bo,{$sizeType:c,$type:n,children:(()=>{if(n&&m)return m;switch(n){case"success":return e(N,{});case"warning":return e(H,{});case"error":return e(W,{});case"info":case"description":return e(x,{});default:return null}})()}),r(ko,{children:[r(Mo,{$maxCollapsedHeight:C()?h:void 0,$showMore:b,$hasActionLink:!!l,children:[e("div",{ref:F,children:s}),l?r(Ao,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||e(Y,{})]})):null]}),y&&r(zo,{$sizeType:c,$type:n,type:"button",onClick:()=>p(!b),children:["Show ",b?"less":"more",e(jo,{$expanded:b})]})]})]})}))`
    margin-top: 0.5rem;
`,Xo=({label:n,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:d="•",maskRange:c,unmaskRange:g,maskRegex:m,disableMaskUnmask:h,alert:f,maskTransformer:b,onMask:p,onUnmask:x,onTryAgain:w})=>{const[F,$]=a(s);u((()=>{$(s)}),[s]);const C=()=>{switch("fail"===l&&w&&w(),F){case"masked":x&&x(),$("unmasked");break;case"unmasked":p&&p(),$("masked")}},E=()=>"string"!=typeof i?i:"masked"===F?ri.maskValue(i,{maskChar:d,maskRange:c,unmaskRange:g,maskRegex:m,maskTransformer:b}):i,D=()=>{switch(l){case"fail":return r(t,{children:[e(Uo,{}),e(qo,{children:"Error"}),e(Zo,{children:"Try again?"})]});case"loading":return r(t,{children:[e(Vo,{}),e(No,{children:"Retrieving..."})]});default:return r(t,{children:[E(),e(Wo,{children:"masked"===F?e(y,{"data-testid":"masked-icon"}):e(v,{"data-testid":"unmasked-icon"})})]})}};return r(Yo,{$widthStyle:o,children:[e(Oo,{children:n}),"string"!=typeof i?i:F?h?e(wn.BodyBL,{children:E()}):e(Ho,{"data-testid":"clickable-label",onClick:C,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:D()}):e(wn.BodyBL,{children:i}),f&&e(Qo,Object.assign({sizeType:"small"},f))]})},Jo=Object.assign((n=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:d,background:c=!0,stretch:u,onMask:g,onUnmask:m,onTryAgain:h}=n,f=U(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const b=e=>()=>{g&&g(e)},p=e=>()=>{m&&m(e)},y=e=>()=>{h&&h(e)},v=()=>{if(i&&i.length>0){const r=i.map(((r,t)=>e(Xo,Object.assign({},r,{onMask:b(r),onUnmask:p(r),onTryAgain:y(r)}),t)));return e(Sn,{$stretch:u,children:r})}return null};return e(Cn,Object.assign({$background:c},f,{type:"grid",children:d||r(t,{children:[o&&e(En,{weight:"semibold",$stretch:u,children:o}),a&&e(Dn,{$stretch:u,children:a}),s&&e(On,{"data-id":"top-section",$stretch:u,children:s}),v(),l&&e(On,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:Bn,Item:Xo});export{Jo as UneditableSection};
//# sourceMappingURL=index.js.map
