import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import*as t from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g}from"react";import m,{css as h,useTheme as f,keyframes as b}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{EyeIcon as y}from"@lifesg/react-icons/eye";import{EyeSlashIcon as v}from"@lifesg/react-icons/eye-slash";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as F,FloatingTree as w,useFloatingNodeId as $,FloatingNode as E,useFloating as C,autoUpdate as D,offset as B,flip as O,shift as A,limitShift as S,useClick as k,useDismiss as M,useHover as z,useInteractions as j,FloatingPortal as _,FloatingFocusManager as T}from"@floating-ui/react";import L,{findDOMNode as R}from"react-dom";import{CrossIcon as I}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as P}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as Y}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as W}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as H}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as N}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as V}from"@lifesg/react-icons";function U(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Q=Array.isArray,X="object"==typeof q&&q&&q.Object===Object&&q,J="object"==typeof self&&self&&self.Object===Object&&self,G=X||J||Function("return this")(),K=G.Symbol,ee=K,re=Object.prototype,ne=re.hasOwnProperty,te=re.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var r=ne.call(e,ie),n=e[ie];try{e[ie]=void 0;var t=!0}catch(e){}var i=te.call(e);return t&&(r?e[ie]=n:delete e[ie]),i},ae=Object.prototype.toString;var se=oe,le=function(e){return ae.call(e)},de=K?K.toStringTag:void 0;var ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?se(e):le(e)};var ue=ce,ge=function(e){return null!=e&&"object"==typeof e};var me=function(e){return"symbol"==typeof e||ge(e)&&"[object Symbol]"==ue(e)},he=Q,fe=me,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var ye=function(e,r){if(he(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!fe(e))||(pe.test(e)||!be.test(e)||null!=r&&e in Object(r))};var ve=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},xe=ce,Fe=ve;var we,$e=function(e){if(!Fe(e))return!1;var r=xe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ee=G["__core-js_shared__"],Ce=(we=/[^.]+$/.exec(Ee&&Ee.keys&&Ee.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var De=function(e){return!!Ce&&Ce in e},Be=Function.prototype.toString;var Oe=$e,Ae=De,Se=ve,ke=function(e){if(null!=e){try{return Be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=/^\[object .+?Constructor\]$/,ze=Function.prototype,je=Object.prototype,_e=ze.toString,Te=je.hasOwnProperty,Le=RegExp("^"+_e.call(Te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Re=function(e,r){return null==e?void 0:e[r]},Ie=function(e){return!(!Se(e)||Ae(e))&&(Oe(e)?Le:Me).test(ke(e))},Pe=Re;var Ye=function(e,r){var n=Pe(e,r);return Ie(n)?n:void 0},We=Ye(Object,"create"),He=We;var Ne=function(){this.__data__=He?He(null):{},this.size=0};var Ve=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=We,qe=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ue){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return qe.call(r,e)?r[e]:void 0},Qe=We,Xe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Qe?void 0!==r[e]:Xe.call(r,e)},Ge=We;var Ke=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},er=Ne,rr=Ve,nr=Ze,tr=Je,ir=Ke;function or(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}or.prototype.clear=er,or.prototype.delete=rr,or.prototype.get=nr,or.prototype.has=tr,or.prototype.set=ir;var ar=or;var sr=function(){this.__data__=[],this.size=0};var lr=function(e,r){return e===r||e!=e&&r!=r};var dr=function(e,r){for(var n=e.length;n--;)if(lr(e[n][0],r))return n;return-1},cr=dr,ur=Array.prototype.splice;var gr=function(e){var r=this.__data__,n=cr(r,e);return!(n<0)&&(n==r.length-1?r.pop():ur.call(r,n,1),--this.size,!0)},mr=dr;var hr=function(e){var r=this.__data__,n=mr(r,e);return n<0?void 0:r[n][1]},fr=dr;var br=function(e){return fr(this.__data__,e)>-1},pr=dr;var yr=function(e,r){var n=this.__data__,t=pr(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},vr=sr,xr=gr,Fr=hr,wr=br,$r=yr;function Er(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Er.prototype.clear=vr,Er.prototype.delete=xr,Er.prototype.get=Fr,Er.prototype.has=wr,Er.prototype.set=$r;var Cr=Er,Dr=Ye(G,"Map"),Br=ar,Or=Cr,Ar=Dr;var Sr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var kr=function(e,r){var n=e.__data__;return Sr(r)?n["string"==typeof r?"string":"hash"]:n.map},Mr=kr;var zr=function(e){var r=Mr(this,e).delete(e);return this.size-=r?1:0,r},jr=kr;var _r=function(e){return jr(this,e).get(e)},Tr=kr;var Lr=function(e){return Tr(this,e).has(e)},Rr=kr;var Ir=function(e,r){var n=Rr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Pr=function(){this.size=0,this.__data__={hash:new Br,map:new(Ar||Or),string:new Br}},Yr=zr,Wr=_r,Hr=Lr,Nr=Ir;function Vr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Vr.prototype.clear=Pr,Vr.prototype.delete=Yr,Vr.prototype.get=Wr,Vr.prototype.has=Hr,Vr.prototype.set=Nr;var Ur=Vr;function qr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(qr.Cache||Ur),n}qr.Cache=Ur;var Zr=qr;var Qr=function(e){var r=Zr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Gr=Qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Xr,(function(e,n,t,i){r.push(t?i.replace(Jr,"$1"):n||e)})),r}));var Kr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},en=Q,rn=me,nn=K?K.prototype:void 0,tn=nn?nn.toString:void 0;var on=function e(r){if("string"==typeof r)return r;if(en(r))return Kr(r,e)+"";if(rn(r))return tn?tn.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},an=on;var sn=Q,ln=ye,dn=Gr,cn=function(e){return null==e?"":an(e)};var un=me;var gn=function(e,r){return sn(e)?e:ln(e,r)?[e]:dn(cn(e))},mn=function(e){if("string"==typeof e||un(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var hn=function(e,r){for(var n=0,t=(r=gn(r,e)).length;null!=e&&n<t;)e=e[mn(r[n++])];return n&&n==t?e:void 0};var fn=Z((function(e,r,n){var t=null==e?void 0:hn(e,r);return void 0===t?n:t}));const bn=(e,r,n)=>fn(n,r)||fn(e,r),pn=(e,r)=>{const n=r||e.defaultValue;return fn(e.collections,n)},yn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},vn=e=>r=>{var n;const t=r.theme,i=pn(yn,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?bn(i,e,t.overrides.breakpoint):i[e],o},xn={"xxs-min":vn("xxs-min"),"xxs-max":vn("xxs-max"),"xs-min":vn("xs-min"),"xs-max":vn("xs-max"),"sm-min":vn("sm-min"),"sm-max":vn("sm-max"),"md-min":vn("md-min"),"md-max":vn("md-max"),"lg-min":vn("lg-min"),"lg-max":vn("lg-max"),"xl-min":vn("xl-min"),"xl-max":vn("xl-max"),"xxl-min":vn("xxl-min"),"xxs-column":vn("xxs-column"),"xs-column":vn("xs-column"),"sm-column":vn("sm-column"),"md-column":vn("md-column"),"lg-column":vn("lg-column"),"xl-column":vn("xl-column"),"xxl-column":vn("xxl-column"),"xxs-gutter":vn("xxs-gutter"),"xs-gutter":vn("xs-gutter"),"sm-gutter":vn("sm-gutter"),"md-gutter":vn("md-gutter"),"lg-gutter":vn("lg-gutter"),"xl-gutter":vn("xl-gutter"),"xxl-gutter":vn("xxl-gutter"),"xxs-margin":vn("xxs-margin"),"xs-margin":vn("xs-margin"),"sm-margin":vn("sm-margin"),"md-margin":vn("md-margin"),"lg-margin":vn("lg-margin"),"xl-margin":vn("xl-margin"),"xxl-margin":vn("xxl-margin")},Fn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=xn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),wn={MaxWidth:Fn("max-width"),MinWidth:Fn("min-width")},$n=m.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:t,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:g,$xxsStart:m,$xxsSpan:f}=e;return h`
            grid-column: ${r||"auto"} / span ${n||1};

            ${wn.MaxWidth.xl} {
                grid-column: ${t||"auto"} / span ${i||1};
            }

            ${wn.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${a||1};
            }

            ${wn.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${wn.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${wn.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${g||1};
            }

            ${wn.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${f||1};
            }
        `}}
`,En=i.forwardRef(((r,n)=>{const t=f(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=r,u=U(r,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),g=(e,r,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${n}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,t]=e;if(-1===t)return{start:n,span:r-n+1};return{start:n,span:Math.min(t-n,r)}}return{start:void 0,span:Math.min(e,r)}};return e($n,Object.assign({ref:n},(()=>{const e=xn["xxl-column"]({theme:t}),r=xn["xl-column"]({theme:t}),n=xn["lg-column"]({theme:t}),u=xn["md-column"]({theme:t}),m=xn["sm-column"]({theme:t}),h=xn["xs-column"]({theme:t}),f=xn["xxs-column"]({theme:t}),b=g(i||o||a||s||l||d||c,e,"xxl"),p=g(o||a||s||l||d||c,r,"xl"),y=g(a||s||l||d||c,n,"lg"),v=g(s||l||d||c,u,"md"),x=g(l||d||c,m,"sm"),F=g(d||c,h,"xs"),w=g(c,f,"xxs");return{$xxlStart:b.start,$xxlSpan:b.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:v.start,$mdSpan:v.span,$smStart:x.start,$smSpan:x.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:w.start,$xxsSpan:w.span}})(),u))})),Cn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Dn=e=>r=>{var n;const t=r.theme,i=pn(Cn,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${bn(i,e,t.overrides.border)}px`:`${i[e]}px`},Bn={"width-005":Dn("width-005"),"width-010":Dn("width-010"),"width-020":Dn("width-020"),"width-040":Dn("width-040"),solid:(On="solid",e=>{var r;const n=e.theme,t=pn(Cn,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?bn(t,On,n.overrides.border):t[On];return"function"==typeof i?i(e):i})};var On;const An={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Sn=e=>r=>{var n;const t=r.theme,i=pn(An,null==t?void 0:t.colourScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.primitiveColour)?bn(i,e,t.overrides.primitiveColour):i[e]},kn={"brand-10":Sn("brand-10"),"brand-20":Sn("brand-20"),"brand-30":Sn("brand-30"),"brand-40":Sn("brand-40"),"brand-50":Sn("brand-50"),"brand-60":Sn("brand-60"),"brand-70":Sn("brand-70"),"brand-80":Sn("brand-80"),"brand-90":Sn("brand-90"),"brand-95":Sn("brand-95"),"brand-100":Sn("brand-100"),"primary-10":Sn("primary-10"),"primary-20":Sn("primary-20"),"primary-30":Sn("primary-30"),"primary-40":Sn("primary-40"),"primary-50":Sn("primary-50"),"primary-60":Sn("primary-60"),"primary-70":Sn("primary-70"),"primary-80":Sn("primary-80"),"primary-90":Sn("primary-90"),"primary-95":Sn("primary-95"),"primary-100":Sn("primary-100"),"secondary-10":Sn("secondary-10"),"secondary-20":Sn("secondary-20"),"secondary-30":Sn("secondary-30"),"secondary-40":Sn("secondary-40"),"secondary-50":Sn("secondary-50"),"secondary-60":Sn("secondary-60"),"secondary-70":Sn("secondary-70"),"secondary-80":Sn("secondary-80"),"secondary-90":Sn("secondary-90"),"secondary-95":Sn("secondary-95"),"secondary-100":Sn("secondary-100"),"neutral-10":Sn("neutral-10"),"neutral-20":Sn("neutral-20"),"neutral-30":Sn("neutral-30"),"neutral-40":Sn("neutral-40"),"neutral-50":Sn("neutral-50"),"neutral-60":Sn("neutral-60"),"neutral-70":Sn("neutral-70"),"neutral-80":Sn("neutral-80"),"neutral-90":Sn("neutral-90"),"neutral-95":Sn("neutral-95"),"neutral-100":Sn("neutral-100"),"success-10":Sn("success-10"),"success-20":Sn("success-20"),"success-30":Sn("success-30"),"success-40":Sn("success-40"),"success-50":Sn("success-50"),"success-60":Sn("success-60"),"success-70":Sn("success-70"),"success-80":Sn("success-80"),"success-90":Sn("success-90"),"success-95":Sn("success-95"),"success-100":Sn("success-100"),"warning-10":Sn("warning-10"),"warning-20":Sn("warning-20"),"warning-30":Sn("warning-30"),"warning-40":Sn("warning-40"),"warning-50":Sn("warning-50"),"warning-60":Sn("warning-60"),"warning-70":Sn("warning-70"),"warning-80":Sn("warning-80"),"warning-90":Sn("warning-90"),"warning-95":Sn("warning-95"),"warning-100":Sn("warning-100"),"error-10":Sn("error-10"),"error-20":Sn("error-20"),"error-30":Sn("error-30"),"error-40":Sn("error-40"),"error-50":Sn("error-50"),"error-60":Sn("error-60"),"error-70":Sn("error-70"),"error-80":Sn("error-80"),"error-90":Sn("error-90"),"error-95":Sn("error-95"),"error-100":Sn("error-100"),"info-10":Sn("info-10"),"info-20":Sn("info-20"),"info-30":Sn("info-30"),"info-40":Sn("info-40"),"info-50":Sn("info-50"),"info-60":Sn("info-60"),"info-70":Sn("info-70"),"info-80":Sn("info-80"),"info-90":Sn("info-90"),"info-95":Sn("info-95"),"info-100":Sn("info-100"),white:Sn("white"),black:Sn("black"),"primary-inverse":Sn("primary-inverse")},Mn={text:Sn("neutral-20"),"text-subtle":Sn("neutral-30"),"text-subtler":Sn("neutral-50"),"text-subtlest":Sn("neutral-60"),"text-primary":Sn("primary-50"),"text-hover":Sn("primary-40"),"text-selected":Sn("primary-50"),"text-selected-hover":Sn("primary-40"),"text-disabled":Sn("neutral-50"),"text-disabled-subtle":Sn("neutral-60"),"text-disabled-subtlest":Sn("neutral-80"),"text-selected-disabled":Sn("neutral-20"),"text-success":Sn("success-40"),"text-warning":Sn("warning-40"),"text-error":Sn("error-40"),"text-info":Sn("info-40"),"text-inverse":Sn("white"),icon:Sn("neutral-50"),"icon-subtle":Sn("neutral-60"),"icon-strongest":Sn("neutral-20"),"icon-primary":Sn("primary-50"),"icon-primary-subtle":Sn("primary-60"),"icon-primary-subtlest":Sn("primary-70"),"icon-hover":Sn("primary-40"),"icon-selected":Sn("primary-50"),"icon-selected-hover":Sn("primary-40"),"icon-disabled":Sn("neutral-50"),"icon-disabled-subtle":Sn("neutral-60"),"icon-selected-disabled":Sn("neutral-60"),"icon-success":Sn("success-50"),"icon-warning":Sn("warning-60"),"icon-error":Sn("error-50"),"icon-error-strong":Sn("error-40"),"icon-info":Sn("info-50"),"icon-inverse":Sn("white"),"icon-primary-inverse":Sn("primary-inverse"),border:Sn("neutral-90"),"border-strong":Sn("neutral-70"),"border-stronger":Sn("neutral-50"),"border-primary":Sn("primary-50"),"border-primary-subtle":Sn("primary-60"),"border-hover":Sn("primary-90"),"border-hover-strong":Sn("primary-60"),"border-selected":Sn("primary-50"),"border-selected-subtle":Sn("primary-70"),"border-selected-subtlest":Sn("primary-90"),"border-selected-hover":Sn("primary-40"),"border-focus":Sn("primary-60"),"border-focus-strong":Sn("primary-50"),"border-disabled":Sn("neutral-90"),"border-selected-disabled":Sn("neutral-70"),"border-success":Sn("success-60"),"border-warning":Sn("warning-60"),"border-error":Sn("error-60"),"border-error-focus":Sn("error-60"),"border-error-focus-strong":Sn("error-40"),"border-error-strong":Sn("error-40"),"border-info":Sn("info-60"),bg:Sn("white"),"bg-strong":Sn("neutral-100"),"bg-stronger":Sn("neutral-95"),"bg-strongest":Sn("neutral-90"),"bg-hover":Sn("primary-95"),"bg-hover-strong":Sn("primary-90"),"bg-hover-subtle":Sn("primary-100"),"bg-hover-neutral":Sn("neutral-100"),"bg-hover-neutral-strong":Sn("neutral-90"),"bg-selected":Sn("primary-95"),"bg-selected-hover":Sn("primary-90"),"bg-selected-strong":Sn("primary-90"),"bg-selected-stronger":Sn("primary-70"),"bg-selected-strongest":Sn("primary-50"),"bg-selected-strongest-hover":Sn("primary-40"),"bg-disabled":Sn("neutral-95"),"bg-selected-disabled":Sn("neutral-95"),"bg-selected-stronger-disabled":Sn("neutral-70"),"bg-success":Sn("success-100"),"bg-success-hover":Sn("success-95"),"bg-success-strong":Sn("success-50"),"bg-success-strong-hover":Sn("success-40"),"bg-warning":Sn("warning-100"),"bg-warning-hover":Sn("warning-95"),"bg-warning-strong":Sn("warning-50"),"bg-warning-strong-hover":Sn("warning-40"),"bg-info":Sn("info-100"),"bg-info-hover":Sn("info-95"),"bg-info-strong":Sn("info-50"),"bg-info-strong-hover":Sn("info-40"),"bg-error":Sn("error-100"),"bg-error-hover":Sn("error-95"),"bg-error-strong":Sn("error-50"),"bg-error-strong-hover":Sn("error-40"),"bg-inverse":Sn("neutral-20"),"bg-inverse-subtle":Sn("neutral-30"),"bg-inverse-subtler":Sn("neutral-50"),"bg-inverse-subtlest":Sn("neutral-60"),"bg-inverse-hover":Sn("neutral-40"),"bg-primary":Sn("primary-50"),"bg-primary-subtle":Sn("primary-60"),"bg-primary-subtler":Sn("primary-95"),"bg-primary-subtlest":Sn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Sn("primary-40"),"bg-primary-subtlest-hover":Sn("primary-90"),"bg-primary-subtlest-selected":Sn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Sn("primary-50"),"hyperlink-hover":Sn("primary-40"),"hyperlink-visited":Sn("primary-40"),"hyperlink-inverse":Sn("primary-inverse"),"focus-ring":Sn("black"),"focus-ring-inverse":Sn("white")},zn={collections:{lifesg:Mn,bookingsg:Mn,rbs:Mn,mylegacy:Mn,ccube:Mn,oneservice:Mn,pa:{text:Sn("neutral-30"),"text-subtle":Sn("neutral-40"),"text-subtler":Sn("neutral-50"),"text-subtlest":Sn("neutral-70"),"text-primary":Sn("neutral-10"),"text-hover":Sn("neutral-70"),"text-selected":Sn("neutral-20"),"text-selected-hover":Sn("neutral-10"),"text-disabled":Sn("neutral-50"),"text-disabled-subtle":Sn("neutral-60"),"text-disabled-subtlest":Sn("neutral-80"),"text-selected-disabled":Sn("neutral-40"),"text-success":Sn("success-40"),"text-warning":Sn("warning-40"),"text-error":Sn("brand-30"),"text-info":Sn("neutral-40"),"text-inverse":Sn("neutral-100"),icon:Sn("neutral-40"),"icon-subtle":Sn("neutral-50"),"icon-strongest":Sn("neutral-10"),"icon-primary":Sn("neutral-10"),"icon-primary-subtle":Sn("neutral-30"),"icon-primary-subtlest":Sn("neutral-60"),"icon-hover":Sn("neutral-70"),"icon-selected":Sn("brand-20"),"icon-selected-hover":Sn("brand-10"),"icon-disabled":Sn("neutral-50"),"icon-disabled-subtle":Sn("neutral-60"),"icon-selected-disabled":Sn("neutral-40"),"icon-success":Sn("success-40"),"icon-warning":Sn("warning-60"),"icon-error":Sn("brand-30"),"icon-error-strong":Sn("brand-10"),"icon-info":Sn("neutral-40"),"icon-inverse":Sn("neutral-100"),"icon-primary-inverse":"#F9B371",border:Sn("neutral-90"),"border-strong":Sn("neutral-30"),"border-stronger":Sn("neutral-20"),"border-primary":Sn("neutral-40"),"border-primary-subtle":Sn("neutral-60"),"border-hover":Sn("neutral-80"),"border-hover-strong":Sn("neutral-10"),"border-selected":Sn("brand-20"),"border-selected-subtle":Sn("neutral-40"),"border-selected-subtlest":Sn("neutral-70"),"border-selected-hover":Sn("neutral-10"),"border-focus":Sn("neutral-20"),"border-focus-strong":Sn("neutral-10"),"border-disabled":Sn("neutral-90"),"border-selected-disabled":Sn("neutral-80"),"border-success":Sn("success-40"),"border-warning":Sn("warning-60"),"border-error":Sn("brand-30"),"border-error-focus":Sn("brand-20"),"border-error-focus-strong":Sn("brand-10"),"border-error-strong":Sn("brand-20"),"border-info":Sn("neutral-40"),bg:Sn("neutral-100"),"bg-strong":Sn("neutral-95"),"bg-stronger":Sn("neutral-90"),"bg-strongest":Sn("neutral-80"),"bg-hover":Sn("brand-90"),"bg-hover-strong":Sn("brand-80"),"bg-hover-subtle":Sn("neutral-90"),"bg-hover-neutral":Sn("neutral-90"),"bg-hover-neutral-strong":Sn("neutral-90"),"bg-selected":Sn("brand-100"),"bg-selected-hover":Sn("brand-30"),"bg-selected-strong":Sn("brand-50"),"bg-selected-stronger":Sn("brand-40"),"bg-selected-strongest":Sn("brand-20"),"bg-selected-strongest-hover":Sn("brand-10"),"bg-disabled":Sn("neutral-90"),"bg-selected-disabled":Sn("neutral-90"),"bg-selected-stronger-disabled":Sn("neutral-80"),"bg-success":Sn("success-100"),"bg-success-hover":Sn("success-95"),"bg-success-strong":Sn("success-50"),"bg-success-strong-hover":Sn("success-40"),"bg-warning":Sn("warning-100"),"bg-warning-hover":Sn("warning-95"),"bg-warning-strong":Sn("warning-50"),"bg-warning-strong-hover":Sn("warning-40"),"bg-info":Sn("neutral-95"),"bg-info-hover":Sn("info-95"),"bg-info-strong":Sn("info-50"),"bg-info-strong-hover":Sn("info-40"),"bg-error":Sn("brand-100"),"bg-error-hover":Sn("error-95"),"bg-error-strong":Sn("error-50"),"bg-error-strong-hover":Sn("error-40"),"bg-inverse":Sn("neutral-40"),"bg-inverse-subtle":Sn("neutral-60"),"bg-inverse-subtler":Sn("neutral-70"),"bg-inverse-subtlest":Sn("neutral-80"),"bg-inverse-hover":Sn("neutral-30"),"bg-primary":Sn("brand-20"),"bg-primary-subtle":Sn("brand-60"),"bg-primary-subtler":Sn("brand-80"),"bg-primary-subtlest":Sn("brand-100"),"bg-available":Sn("success-60"),"bg-primary-hover":Sn("brand-10"),"bg-primary-subtlest-hover":Sn("brand-80"),"bg-primary-subtlest-selected":Sn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Sn("neutral-10"),"hyperlink-hover":Sn("neutral-40"),"hyperlink-visited":Sn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Sn("black"),"focus-ring-inverse":Sn("white")},a11yplayground:Mn},defaultValue:"lifesg"},jn=e=>r=>{var n;const t=r.theme,i=pn(zn,null==t?void 0:t.colourScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.semanticColour)?bn(i,e,t.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},_n={text:jn("text"),"text-subtle":jn("text-subtle"),"text-subtler":jn("text-subtler"),"text-subtlest":jn("text-subtlest"),"text-primary":jn("text-primary"),"text-hover":jn("text-hover"),"text-selected":jn("text-selected"),"text-selected-hover":jn("text-selected-hover"),"text-disabled":jn("text-disabled"),"text-disabled-subtle":jn("text-disabled-subtle"),"text-disabled-subtlest":jn("text-disabled-subtlest"),"text-selected-disabled":jn("text-selected-disabled"),"text-success":jn("text-success"),"text-warning":jn("text-warning"),"text-error":jn("text-error"),"text-info":jn("text-info"),"text-inverse":jn("text-inverse"),icon:jn("icon"),"icon-subtle":jn("icon-subtle"),"icon-strongest":jn("icon-strongest"),"icon-primary":jn("icon-primary"),"icon-primary-subtle":jn("icon-primary-subtle"),"icon-primary-subtlest":jn("icon-primary-subtlest"),"icon-hover":jn("icon-hover"),"icon-selected":jn("icon-selected"),"icon-selected-hover":jn("icon-selected-hover"),"icon-disabled":jn("icon-disabled"),"icon-disabled-subtle":jn("icon-disabled-subtle"),"icon-selected-disabled":jn("icon-selected-disabled"),"icon-success":jn("icon-success"),"icon-warning":jn("icon-warning"),"icon-error":jn("icon-error"),"icon-error-strong":jn("icon-error-strong"),"icon-info":jn("icon-info"),"icon-inverse":jn("icon-inverse"),"icon-primary-inverse":jn("icon-primary-inverse"),border:jn("border"),"border-strong":jn("border-strong"),"border-stronger":jn("border-stronger"),"border-primary":jn("border-primary"),"border-primary-subtle":jn("border-primary-subtle"),"border-hover":jn("border-hover"),"border-hover-strong":jn("border-hover-strong"),"border-selected":jn("border-selected"),"border-selected-subtle":jn("border-selected-subtle"),"border-selected-subtlest":jn("border-selected-subtlest"),"border-selected-hover":jn("border-selected-hover"),"border-focus":jn("border-focus"),"border-focus-strong":jn("border-focus-strong"),"border-disabled":jn("border-disabled"),"border-selected-disabled":jn("border-selected-disabled"),"border-success":jn("border-success"),"border-warning":jn("border-warning"),"border-error":jn("border-error"),"border-error-focus":jn("border-error-focus"),"border-error-focus-strong":jn("border-error-focus-strong"),"border-error-strong":jn("border-error-strong"),"border-info":jn("border-info"),bg:jn("bg"),"bg-strong":jn("bg-strong"),"bg-stronger":jn("bg-stronger"),"bg-strongest":jn("bg-strongest"),"bg-hover":jn("bg-hover"),"bg-hover-strong":jn("bg-hover-strong"),"bg-hover-subtle":jn("bg-hover-subtle"),"bg-hover-neutral":jn("bg-hover-neutral"),"bg-hover-neutral-strong":jn("bg-hover-neutral-strong"),"bg-selected":jn("bg-selected"),"bg-selected-hover":jn("bg-selected-hover"),"bg-selected-strong":jn("bg-selected-strong"),"bg-selected-stronger":jn("bg-selected-stronger"),"bg-selected-strongest":jn("bg-selected-strongest"),"bg-selected-strongest-hover":jn("bg-selected-strongest-hover"),"bg-disabled":jn("bg-disabled"),"bg-selected-disabled":jn("bg-selected-disabled"),"bg-selected-stronger-disabled":jn("bg-selected-stronger-disabled"),"bg-success":jn("bg-success"),"bg-success-hover":jn("bg-success-hover"),"bg-success-strong":jn("bg-success-strong"),"bg-success-strong-hover":jn("bg-success-strong-hover"),"bg-warning":jn("bg-warning"),"bg-warning-hover":jn("bg-warning-hover"),"bg-warning-strong":jn("bg-warning-strong"),"bg-warning-strong-hover":jn("bg-warning-strong-hover"),"bg-info":jn("bg-info"),"bg-info-hover":jn("bg-info-hover"),"bg-info-strong":jn("bg-info-strong"),"bg-info-strong-hover":jn("bg-info-strong-hover"),"bg-error":jn("bg-error"),"bg-error-hover":jn("bg-error-hover"),"bg-error-strong":jn("bg-error-strong"),"bg-error-strong-hover":jn("bg-error-strong-hover"),"bg-inverse":jn("bg-inverse"),"bg-inverse-subtle":jn("bg-inverse-subtle"),"bg-inverse-subtler":jn("bg-inverse-subtler"),"bg-inverse-subtlest":jn("bg-inverse-subtlest"),"bg-inverse-hover":jn("bg-inverse-hover"),"bg-primary":jn("bg-primary"),"bg-primary-subtle":jn("bg-primary-subtle"),"bg-primary-subtler":jn("bg-primary-subtler"),"bg-primary-subtlest":jn("bg-primary-subtlest"),"bg-available":jn("bg-available"),"bg-primary-hover":jn("bg-primary-hover"),"bg-primary-subtlest-hover":jn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":jn("bg-primary-subtlest-selected"),"overlay-strong":jn("overlay-strong"),"overlay-subtle":jn("overlay-subtle"),hyperlink:jn("hyperlink"),"hyperlink-hover":jn("hyperlink-hover"),"hyperlink-visited":jn("hyperlink-visited"),"hyperlink-inverse":jn("hyperlink-inverse"),"focus-ring":jn("focus-ring"),"focus-ring-inverse":jn("focus-ring-inverse")},Tn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:Bn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:_n.border(r),u=Bn.solid;return h`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:Bn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:_n.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return h`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Ln=e=>1===e.length&&"theme"in e[0],Rn=e=>(...r)=>n=>{const t=Ln(r)?[]:r,i=Ln(r)?r[0]:n,o=i.theme;return(0,pn(Tn,null==o?void 0:o.borderScheme)[e])(...t)(i)},In={solid:Rn("solid"),"dashed-default":Rn("dashed-default")},Pn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Yn=e=>r=>{var n;const t=r.theme,i=pn(Pn,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?bn(i,e,t.overrides.fontSpec):i[e]},Wn={"heading-size-xxl":Yn("heading-size-xxl"),"heading-size-xl":Yn("heading-size-xl"),"heading-size-lg":Yn("heading-size-lg"),"heading-size-md":Yn("heading-size-md"),"heading-size-sm":Yn("heading-size-sm"),"heading-size-xs":Yn("heading-size-xs"),"heading-lh-xxl":Yn("heading-lh-xxl"),"heading-lh-xl":Yn("heading-lh-xl"),"heading-lh-lg":Yn("heading-lh-lg"),"heading-lh-md":Yn("heading-lh-md"),"heading-lh-sm":Yn("heading-lh-sm"),"heading-lh-xs":Yn("heading-lh-xs"),"heading-ls-xxl":Yn("heading-ls-xxl"),"heading-ls-xl":Yn("heading-ls-xl"),"heading-ls-lg":Yn("heading-ls-lg"),"heading-ls-md":Yn("heading-ls-md"),"heading-ls-sm":Yn("heading-ls-sm"),"heading-ls-xs":Yn("heading-ls-xs"),"weight-light":Yn("weight-light"),"weight-regular":Yn("weight-regular"),"weight-semibold":Yn("weight-semibold"),"weight-bold":Yn("weight-bold"),"font-family":Yn("font-family"),"body-size-baseline":Yn("body-size-baseline"),"body-size-md":Yn("body-size-md"),"body-size-sm":Yn("body-size-sm"),"body-size-xs":Yn("body-size-xs"),"body-lh-baseline":Yn("body-lh-baseline"),"body-lh-md":Yn("body-lh-md"),"body-lh-sm":Yn("body-lh-sm"),"body-lh-xs":Yn("body-lh-xs"),"body-ls-baseline":Yn("body-ls-baseline"),"body-ls-md":Yn("body-ls-md"),"body-ls-sm":Yn("body-ls-sm"),"body-ls-xs":Yn("body-ls-xs"),"form-label-size":Yn("form-label-size"),"form-description-size":Yn("form-description-size"),"form-label-lh":Yn("form-label-lh"),"form-description-lh":Yn("form-description-lh"),"form-label-ls":Yn("form-label-ls"),"form-description-ls":Yn("form-description-ls")},Hn=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return h`
        font-family: ${Yn("font-family")};
        font-size: ${Yn(e)};
        font-weight: ${Yn(r)};
        line-height: ${Yn(n)};
        letter-spacing: ${Yn(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Nn=(e={})=>({"heading-xxl-light":Hn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Hn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Hn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Hn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Hn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Hn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Hn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Hn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Hn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Hn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Hn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Hn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Hn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Hn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Hn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Hn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Hn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Hn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Hn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Hn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Hn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Hn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Hn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Hn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Hn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Hn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Hn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Hn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Hn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Hn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Hn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Hn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Hn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Hn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Hn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Hn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Hn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Hn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Hn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Hn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Hn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Hn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Vn=Nn({disableLigatures:!0}),Un={collections:{default:Nn(),bookingsg:Vn,pa:Nn({disableLigatures:!0}),a11yplayground:Nn({disableLigatures:!0})},defaultValue:"default"},qn=e=>r=>{var n;const t=r.theme,i=pn(Un,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?bn(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},Zn={"heading-xxl-light":qn("heading-xxl-light"),"heading-xxl-regular":qn("heading-xxl-regular"),"heading-xxl-semibold":qn("heading-xxl-semibold"),"heading-xxl-bold":qn("heading-xxl-bold"),"heading-xl-light":qn("heading-xl-light"),"heading-xl-regular":qn("heading-xl-regular"),"heading-xl-semibold":qn("heading-xl-semibold"),"heading-xl-bold":qn("heading-xl-bold"),"heading-lg-light":qn("heading-lg-light"),"heading-lg-regular":qn("heading-lg-regular"),"heading-lg-semibold":qn("heading-lg-semibold"),"heading-lg-bold":qn("heading-lg-bold"),"heading-md-light":qn("heading-md-light"),"heading-md-regular":qn("heading-md-regular"),"heading-md-semibold":qn("heading-md-semibold"),"heading-md-bold":qn("heading-md-bold"),"heading-sm-light":qn("heading-sm-light"),"heading-sm-regular":qn("heading-sm-regular"),"heading-sm-semibold":qn("heading-sm-semibold"),"heading-sm-bold":qn("heading-sm-bold"),"heading-xs-light":qn("heading-xs-light"),"heading-xs-regular":qn("heading-xs-regular"),"heading-xs-semibold":qn("heading-xs-semibold"),"heading-xs-bold":qn("heading-xs-bold"),"body-baseline-light":qn("body-baseline-light"),"body-baseline-regular":qn("body-baseline-regular"),"body-baseline-semibold":qn("body-baseline-semibold"),"body-baseline-bold":qn("body-baseline-bold"),"body-md-light":qn("body-md-light"),"body-md-regular":qn("body-md-regular"),"body-md-semibold":qn("body-md-semibold"),"body-md-bold":qn("body-md-bold"),"body-sm-light":qn("body-sm-light"),"body-sm-regular":qn("body-sm-regular"),"body-sm-semibold":qn("body-sm-semibold"),"body-sm-bold":qn("body-sm-bold"),"body-xs-light":qn("body-xs-light"),"body-xs-regular":qn("body-xs-regular"),"body-xs-semibold":qn("body-xs-semibold"),"body-xs-bold":qn("body-xs-bold"),"form-label":qn("form-label"),"form-description":qn("form-description")},Qn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Xn=e=>r=>{var n;const t=r.theme,i=pn(Qn,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?bn(i,e,t.overrides.motion):i[e]},Jn={"duration-150":Xn("duration-150"),"duration-250":Xn("duration-250"),"duration-350":Xn("duration-350"),"duration-500":Xn("duration-500"),"duration-800":Xn("duration-800"),"duration-1000":Xn("duration-1000"),"ease-default":Xn("ease-default"),"ease-standard":Xn("ease-standard"),"ease-entrance":Xn("ease-entrance"),"ease-exit":Xn("ease-exit")},Gn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Kn=e=>r=>{var n;const t=r.theme,i=pn(Gn,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${bn(i,e,t.overrides.radius)}px`:`${i[e]}px`},et={none:Kn("none"),xs:Kn("xs"),sm:Kn("sm"),md:Kn("md"),lg:Kn("lg"),full:Kn("full")},rt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},nt=e=>r=>{var n;const t=r.theme,i=pn(rt,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${bn(i,e,t.overrides.spacing)}px`:`${i[e]}px`},tt={"spacing-0":nt("spacing-0"),"spacing-4":nt("spacing-4"),"spacing-8":nt("spacing-8"),"spacing-12":nt("spacing-12"),"spacing-16":nt("spacing-16"),"spacing-20":nt("spacing-20"),"spacing-24":nt("spacing-24"),"spacing-32":nt("spacing-32"),"spacing-40":nt("spacing-40"),"spacing-48":nt("spacing-48"),"spacing-64":nt("spacing-64"),"spacing-72":nt("spacing-72"),"layout-xs":nt("layout-xs"),"layout-sm":nt("layout-sm"),"layout-md":nt("layout-md"),"layout-lg":nt("layout-lg"),"layout-xl":nt("layout-xl"),"layout-xxl":nt("layout-xxl"),"layout-xxxl":nt("layout-xxxl")},it=Object.assign(Object.assign({},_n),{Primitive:kn}),ot=Object.assign(Object.assign({},Zn),{Spec:Wn}),at=Jn,st=Object.assign(Object.assign({},Bn),{Util:In}),lt=tt,dt=et,ct=xn,ut=wn,gt=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?h`
                padding: 0 ${ct["xxl-margin"]}px;
            `:h`
                padding: 0 ${ct["xxl-margin"]}px;
                max-width: 1440px;

                ${ut.MaxWidth.xl} {
                    padding: 0 ${ct["xl-margin"]}px;
                }

                ${ut.MaxWidth.lg} {
                    padding: 0 ${ct["lg-margin"]}px;
                }

                ${ut.MaxWidth.md} {
                    padding: 0 ${ct["md-margin"]}px;
                }

                ${ut.MaxWidth.sm} {
                    padding: 0 ${ct["sm-margin"]}px;
                }

                ${ut.MaxWidth.xs} {
                    padding: 0 ${ct["xs-margin"]}px;
                }

                ${ut.MaxWidth.xxs} {
                    padding: 0 ${ct["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return h`
                    column-gap: ${ct["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${ct["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${ut.MaxWidth.xl} {
                        column-gap: ${ct["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ct["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ut.MaxWidth.lg} {
                        column-gap: ${ct["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ct["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ut.MaxWidth.md} {
                        column-gap: ${ct["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ct["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ut.MaxWidth.sm} {
                        column-gap: ${ct["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ct["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ut.MaxWidth.xs} {
                        column-gap: ${ct["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ct["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${ut.MaxWidth.xxs} {
                        column-gap: ${ct["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ct["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return h`
                    display: flex;
                    flex-direction: column;
                `;default:return h`
                    display: flex;
                `}}}
`,mt=i.forwardRef(((r,n)=>{const{children:t,"data-testid":i="container",type:o="flex",stretch:a=!1}=r,s=U(r,["children","data-testid","type","stretch"]);return e(gt,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:t}))})),ht=i.forwardRef(((r,n)=>{const{children:t,"data-testid":i="section",stretch:o=!1}=r,a=U(r,["children","data-testid","stretch"]);return e(ft,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:t}))})),ft=m.section`
    display: block;
    position: relative;
`,bt=i.forwardRef(((r,n)=>{const{children:t,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=r,l=U(r,["children","data-testid","className","type","stretch"]);return e(ht,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(mt,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:t})}))})),pt={Section:ht,Container:mt,Content:bt,ColDiv:En},yt=(e,r,n=!1)=>h`
        ${ot[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,vt=e=>{if(e)return h`
            ${r=e,h`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},xt=(e,r)=>h`
    ${yt(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?h`
            display: block;
            ${vt(n)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${vt(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${it.text};
`;var Ft;!function(n){const t=(e,r,n)=>{const t=m(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>xt(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=m.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>xt(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const o=(n,t)=>{const i=m.a`
            ${e=>h`
                ${yt(n,e.weight||"regular")}
                color: ${it.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${it["text-hover"]};
                }
            `}
        `,o=n=>{var{external:t=!1,children:o}=n,a=U(n,["external","children"]);return r(i,Object.assign({},a,{children:[o,t&&e(wt,{})]}))};return o.displayName=`Typography.${t}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(Ft||(Ft={}));const wt=m(p)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,$t=h`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${ut.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,Et=m(pt.Content)`
    background: ${({$background:e})=>e?it["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Ct=m(Ft.HeadingSM)`
    margin-bottom: 1rem;
    ${$t}
`,Dt=m(Ft.BodyBL)`
    margin-bottom: 2rem;
    ${$t}
`,Bt=m.div`
    ${$t}
`,Ot=m.ul`
    ${$t}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${ut.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${ut.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,At=i.forwardRef(((r,n)=>{var{stretch:t}=r,i=U(r,["stretch"]);return e(Ot,Object.assign({ref:n,$stretch:t},i))}));var St,kt={exports:{}};St=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var n=e.inverse,t="all"===e.type||r.type===e.type;if(t&&n||!t&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,t=e.modifier,i=e.value,o=r[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(t){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},r.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(n),o=r[1],a=r[2],s=r[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(t),n=r[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:r[2]}})),l}))}function l(e){var r,n=Number(e);return n||(n=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),n}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var r=e.replace(t,a);return o[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,n)=>{var t=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,r,n){var o=this;if(i&&!n){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=t(e,r),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,r,n){return new o(e,r,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))n.call(o,d)&&(s[d]=o[d]);if(r){a=r(o);for(var c=0;c<a.length;c++)t.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,n)=>{var t,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,n,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+n+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,n,null,i)}catch(e){c=e}if(!c||c instanceof Error||t((s||"React class")+": type specification of "+n+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var g=l?l():"";t("Failed "+n+" type: "+c.message+(null!=g?g:""))}}}t=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,n)=>{var t,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}t=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var n="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:h(d),arrayOf:function(e){return h((function(r,n,t,i,o){if("function"!=typeof e)return new m("Property `"+o+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var s=r[n];if(!Array.isArray(s))return new m("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+t+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,t,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:h((function(r,n,t,i,o){var a=r[n];return e(a)?null:new m("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:h((function(e,r,n,t,o){var a=e[r];return i.isValidElementType(a)?null:new m("Invalid "+t+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(r,n,t,i,o){if(!(r[n]instanceof e)){var a=e.name||c;return new m("Invalid "+i+" `"+o+"` of type `"+((s=r[n]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+t+"`, expected instance of `"+a+"`.")}var s;return null}))},node:h((function(e,r,n,t,i){return p(e[r])?null:new m("Invalid "+t+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(r,n,t,i,o){if("function"!=typeof e)return new m("Property `"+o+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var l=r[n],d=y(l);if("object"!==d)return new m("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+t+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,t,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(r,n,t,i,o){for(var a=r[n],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new m("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+t+"`, expected one of "+l+".")})):(t(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return t("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var n=e[r];if("function"!=typeof n)return t("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+r+"."),d}return h((function(r,n,t,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,n,t,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new m("Invalid "+i+" `"+o+"` supplied to `"+t+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(r,n,t,i,o){var s=r[n],l=y(s);if("object"!==l)return new m("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+t+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(t,i,o,d,v(c));var u=c(s,d,t,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return h((function(r,n,t,i,l){var d=r[n],c=y(d);if("object"!==c)return new m("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+t+"`, expected `object`.");var u=o({},r[n],e);for(var g in u){var h=e[g];if(s(e,g)&&"function"!=typeof h)return b(t,i,l,g,v(h));if(!h)return new m("Invalid "+i+" `"+l+"` key `"+g+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(r[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=h(d,g,t,i,l+"."+g,a);if(f)return f}return null}))}};function g(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function m(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function h(e){var n={},i=0;function o(o,s,l,d,u,g,h){if(d=d||c,g=g||l,h!==a){if(r){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var b=d+":"+l;!n[b]&&i<3&&(t("You are manually calling a React.PropTypes validation function for the `"+g+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[b]=!0,i++)}}return null==s[l]?o?null===s[l]?new m("The "+u+" `"+g+"` is marked as required in `"+d+"`, but its value is `null`."):new m("The "+u+" `"+g+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,u,g)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function f(e){return h((function(r,n,t,i,o,a){var s=r[n];return y(s)!==e?new m("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+t+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,n,t,i){return new m((e||"React class")+": "+r+" type `"+n+"."+t+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function p(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(p);if(null===r||e(r))return!0;var t=function(e){var r=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!t)return!1;var i,o=t.call(r);if(t!==r.entries){for(;!(i=o.next()).done;)if(!p(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!p(a[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return m.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,n)=>{var t=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(t.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:var m=e.type;switch(m){case d:case c:case i:case a:case o:case g:return m;default:var b=m&&m.$$typeof;switch(b){case l:case u:case f:case h:case s:return b;default:return r}}case t:return r}}}var F=d,w=c,$=l,E=s,C=n,D=u,B=i,O=f,A=h,S=t,k=a,M=o,z=g,j=!1;function _(e){return x(e)===c}r.AsyncMode=F,r.ConcurrentMode=w,r.ContextConsumer=$,r.ContextProvider=E,r.Element=C,r.ForwardRef=D,r.Fragment=B,r.Lazy=O,r.Memo=A,r.Portal=S,r.Profiler=k,r.StrictMode=M,r.Suspense=z,r.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||x(e)===d},r.isConcurrentMode=_,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===f},r.isMemo=function(e){return x(e)===h},r.isPortal=function(e){return x(e)===t},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===g},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===g||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,n)=>{function t(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=Object.keys(e),t=Object.keys(r),i=n.length;if(t.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==r[a]||!Object.prototype.hasOwnProperty.call(r,a))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=e.length;if(r.length!==n)return!1;for(var t=0;t<n;t++)if(e[t]!==r[t])return!1;return!0}n.r(r),n.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>t})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,n){var t=this&&this.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=i(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,n=e.device,i=e.onChange,a=t(e,["children","device","onChange"]),s=(0,o.default)(a,n,i);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=(0,n(/*! react */"react").createContext)(void 0);r.default=t},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=t(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var o=t(n(/*! ./Component */"./src/Component.ts"));r.default=o.default;var a=t(n(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=a.default;var s=t(n(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,n){var t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},t.apply(this,arguments)},i=this&&this.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=t({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),g=t(t({},l),u);r.default={all:g,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=t(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(n){var t=e[n];null!=t&&r.push(function(e,r){var n=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?n:!1===r?"not ".concat(n):"(".concat(n,": ").concat(r,")")}(n,t))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(/*! react */"react"),o=t(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=t(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=t(n(/*! ./toQuery */"./src/toQuery.ts")),d=t(n(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,n){return r[(0,a.default)(n)]=e[n],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},g=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(r),t=n[0],o=n[1];return(0,i.useEffect)((function(){var e=r();t!==e&&o(e)}),[e]),t};r.default=function(e,r,n){var t=function(e){var r=(0,i.useContext)(d.default),n=function(){return c(e)||c(r)},t=(0,i.useState)(n),o=t[0],a=t[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=g(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var n=function(){return(0,o.default)(e,r||{},!!r)},t=(0,i.useState)(n),a=t[0],s=t[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,t),m=function(e){var r=(0,i.useState)(e.matches),n=r[0],t=r[1];return(0,i.useEffect)((function(){var r=function(e){t(e.matches)};return e.addListener(r),t(e.matches),function(){e.removeListener(r)}}),[e]),n}(l),h=u();return(0,i.useEffect)((function(){h&&n&&n(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},n={};function t(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return r[e].call(o.exports,o,o.exports,t),o.exports}return t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t("./src/index.ts")})();var Mt=kt.exports=St(i),zt={exports:{}};zt.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},y={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,a=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=b;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!t&&i&&(v=i),i||!t&&v},E=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},C=y;C.l=$,C.i=w,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=b.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(h);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return C},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return E(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<E(e)},p.$g=function(e,r,n){return C.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!C.u(r)||r,c=C.p(e),m=function(e,r){var i=C.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(s)},h=function(e,r){return C.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},f=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return t?m(1,0):m(31,11);case d:return t?m(1,b):m(0,b+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return m(t?p-x:p+(6-x),b);case s:case g:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case o:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=C.p(e),c="set"+(this.$u?"UTC":""),m=(n={},n[s]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(g,1);f.$d[m](h),f.init(),this.$d=f.set(g,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[C.p(e)]()},p.add=function(t,c){var g,m=this;t=Number(t);var h=C.p(c),f=function(e){var r=E(m);return C.w(r.date(r.date()+Math.round(e*t)),m)};if(h===d)return this.set(d,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===s)return f(1);if(h===l)return f(7);var b=(g={},g[o]=r,g[a]=n,g[i]=e,g)[h]||1,p=this.$d.getTime()+t*b;return C.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return C.s(o%12||12,e,"0")},h=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(f,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return C.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(o,a,!0);case"A":return h(o,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,g,m){var h,f=this,b=C.p(g),p=E(t),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return C.m(f,p)};switch(b){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-y)/6048e5;break;case s:h=(v-y)/864e5;break;case a:h=v/n;break;case o:h=v/r;break;case i:h=v/e;break;default:h=v}return m?h:C.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return C.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),B=D.prototype;return E.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,D,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var jt=Z(zt.exports),_t={exports:{}};_t.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,s("seconds")],ss:[t,s("seconds")],m:[t,s("minutes")],mm:[t,s("minutes")],H:[t,s("hours")],h:[t,s("hours")],HH:[t,s("hours")],hh:[t,s("hours")],D:[t,s("day")],DD:[n,s("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,s("month")],MM:[n,s("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var a=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],m=c&&c[1];a[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<s;n+=1){var i=a[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,a=e.args;this.$u=t;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,a=t.day,s=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,m=new Date,h=a||(i||o?1:m.getDate()),f=i||m.getFullYear(),b=0;i&&!o||(b=o>0?o-1:m.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,b,h,p,y,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(f,b,h,p,y,v,x)):new Date(f,b,h,p,y,v,x)}catch(e){return new Date("")}}(r,s,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var m=s.length,h=1;h<=m;h+=1){a[1]=s[h-1];var f=n.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}h===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Tt=Z(_t.exports),Lt={exports:{}};Lt.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),a=n(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(a,t):!this.isAfter(a,t))||(s?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(a,t):!this.isBefore(a,t))}};var Rt=Z(Lt.exports),It={exports:{}};It.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Pt=Z(It.exports),Yt={exports:{}};Yt.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Wt,Ht,Nt,Vt=Z(Yt.exports),Ut={exports:{}},qt=Z(Ut.exports=(Wt={year:0,month:1,day:2,hour:3,minute:4,second:5},Ht={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=Ht[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ht[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],a=0;a<t.length;a+=1){var s=t[a],l=s.type,d=s.value,c=Wt[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",h=+e;return(n.utc(m).valueOf()-(h-=h%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var a=i&&r,s=i||r||t,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var a=o(t-=60*(i-r)*1e3,n);return i===a?[t,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=s,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));jt.extend(Rt),jt.extend(Vt),jt.extend(Pt),jt.extend(Tt),jt.extend(qt),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=jt(r).startOf("week");return Zt(n).map((e=>Qt(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Qt(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(jt(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+jt(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=jt(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?jt(t):void 0,i?jt(i):void 0),a=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(Nt||(Nt={}));const Zt=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},Qt=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},Xt=[1,3,5,7,8,10,12],Jt=[4,6,9,11];var Gt,Kt,ei,ri;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),a=parseInt(t);return 0==i?"1":Xt.includes(o)?Math.min(i,31).toString():Jt.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=jt(e,n);return jt(r,n).diff(t,"minute")},e.toDayjs=e=>e?jt(e):jt(),e.addMinutesToTime=(e,r,n="HH:mm")=>jt(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>jt(e).isSame(jt(r),n)}(Gt||(Gt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!jt(e).isBefore(t,"day"))||!(!i||!jt(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(jt(e).isValid())return e}return""}}(Kt||(Kt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ei||(ei={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const a=t+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`}}(ri||(ri={}));var ni=function(e,r){return ni=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},ni(e,r)};var ti=function(){return ti=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ti.apply(this,arguments)};var ii="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var oi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ai="object"==typeof ii&&ii&&ii.Object===Object&&ii,si="object"==typeof self&&self&&self.Object===Object&&self,li=ai||si||Function("return this")(),di=li,ci=function(){return di.Date.now()},ui=/\s/;var gi=function(e){for(var r=e.length;r--&&ui.test(e.charAt(r)););return r},mi=/^\s+/;var hi=function(e){return e?e.slice(0,gi(e)+1).replace(mi,""):e},fi=li.Symbol,bi=fi,pi=Object.prototype,yi=pi.hasOwnProperty,vi=pi.toString,xi=bi?bi.toStringTag:void 0;var Fi=function(e){var r=yi.call(e,xi),n=e[xi];try{e[xi]=void 0;var t=!0}catch(e){}var i=vi.call(e);return t&&(r?e[xi]=n:delete e[xi]),i},wi=Object.prototype.toString;var $i=Fi,Ei=function(e){return wi.call(e)},Ci=fi?fi.toStringTag:void 0;var Di=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ci&&Ci in Object(e)?$i(e):Ei(e)},Bi=function(e){return null!=e&&"object"==typeof e};var Oi=hi,Ai=oi,Si=function(e){return"symbol"==typeof e||Bi(e)&&"[object Symbol]"==Di(e)},ki=/^[-+]0x[0-9a-f]+$/i,Mi=/^0b[01]+$/i,zi=/^0o[0-7]+$/i,ji=parseInt;var _i=oi,Ti=ci,Li=function(e){if("number"==typeof e)return e;if(Si(e))return NaN;if(Ai(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ai(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Oi(e);var n=Mi.test(e);return n||zi.test(e)?ji(e.slice(2),n?2:8):ki.test(e)?NaN:+e},Ri=Math.max,Ii=Math.min;var Pi=function(e,r,n){var t,i,o,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var n=t,o=i;return t=i=void 0,d=r,a=e.apply(o,n)}function h(e){var n=e-l;return void 0===l||n>=r||n<0||u&&e-d>=o}function f(){var e=Ti();if(h(e))return b(e);s=setTimeout(f,function(e){var n=r-(e-l);return u?Ii(n,o-(e-d)):n}(e))}function b(e){return s=void 0,g&&t?m(e):(t=i=void 0,a)}function p(){var e=Ti(),n=h(e);if(t=arguments,i=this,l=e,n){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?m(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),m(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=Li(r)||0,_i(n)&&(c=!!n.leading,o=(u="maxWait"in n)?Ri(Li(n.maxWait)||0,r):o,g="trailing"in n?!!n.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,t=l=i=s=void 0},p.flush=function(){return void 0===s?a:b(Ti())},p},Yi=Pi,Wi=oi;var Hi=function(e,r,n){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Wi(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),Yi(e,r,{leading:t,maxWait:r,trailing:i})},Ni=function(e,r,n,t){switch(r){case"debounce":return Pi(e,n,t);case"throttle":return Hi(e,n,t);default:return e}},Vi=function(e){return"function"==typeof e},Ui=function(){return"undefined"==typeof window},qi=function(e){return e instanceof Element||e instanceof HTMLDocument},Zi=function(e,r,n,t){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!t||r.height===a&&!n?r:(e&&Vi(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var n=e.call(this,r)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,r=e.targetRef,t=e.observerOptions;if(!Ui()){r&&r.current&&(n.targetRef.current=r.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,t)))}},n.getElement=function(){var e=n.props,r=e.querySelector,t=e.targetDomEl;if(Ui())return null;if(r)return document.querySelector(r);if(t&&qi(t))return t;if(n.targetRef&&qi(n.targetRef.current))return n.targetRef.current;var i=R(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var r=n.props,t=r.handleWidth,i=void 0===t||t,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Zi(s,n.setState.bind(n),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},t=r.width,i=r.height;!n.skipOnMount&&!Ui()&&l({width:t,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,r=e.render,t=e.children;return Vi(r)?"renderProp":Vi(t)?"childFunction":s(t)?"child":Array.isArray(t)?"childArray":"parent"};var t=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=t,n.targetRef=l(),n.observableElement=null,Ui()||(n.resizeHandler=Ni(n.createResizeHandler,i,a,d),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}ni(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ui()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return t.createElement(a,null)}}}(c);var Qi=Ui()?u:g;const Xi=m.div`
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
    background-color: ${e=>e.$stacked?it["overlay-subtle"]:it["overlay-strong"]};
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
`;var Gi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Gi||(Gi={}));const Ki=({show:r=!1,rootId:n,onOverlayClick:t,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:g=!1,zIndex:m,id:h})=>{const[f,b]=a(null),[p,y]=a(),[v]=a((()=>ei.generate())),x=$(),w=o(),C=o(null),D=s&&i.cloneElement(s,{ref:C}),B=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",O=null!=m?m:p?99999:99998;(e=>{const r=F();u((()=>{if(!r)return;const n={zIndex:e};r.events.emit(Gi.Change,n)}),[r,e]),u((()=>{if(!r)return;const n=()=>{const n={zIndex:e};r.events.emit(Gi.Change,n)};return null==r||r.events.on(Gi.Ready,n),()=>null==r?void 0:r.events.off(Gi.Ready,n)}),[r,e])})(O),u((()=>(M(),b(S()),()=>{T(),j().length<1&&z("remove")})),[]),u((()=>{if(r){const e=k();A(e),_();const r=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{j().length<1&&z("remove")}),200);return()=>clearTimeout(e)}}),[r]);const A=e=>{w.current=e,y(e)},S=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>j().length>0,M=()=>{if(!document.getElementById(ro)){const e=document.createElement("style");e.id=ro;const r=document.documentElement.clientWidth,n=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${no} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${no}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},z=e=>{const r=document.body.classList.contains(no);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(no):document.body.classList.add(no)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},_=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},R=e=>{var r;const n=null===(r=C.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&g&&(e.preventDefault(),t())};return f?L.createPortal(e(Xi,{id:B,"data-testid":B,$show:r,$zIndex:O,children:s&&e(E,{id:x,children:e(Ji,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:R,children:D})})}),f):null},eo=r=>e(w,{children:e(Ki,Object.assign({},r))}),ro="lifesg-ds-overlay-stylesheet",no="lifesg-ds-overlay-open",to=m.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,n=e.animationFrom||"bottom",r?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,n}}

    ${ut.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,io=r=>{var{id:n="modal",show:t,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:g=!0}=r,m=U(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,f]=a(),[b,p]=a();u((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),u((()=>{var e,r;t&&g&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[t]);const y=()=>{const e=.01*window.innerHeight;f(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),p(window.visualViewport.offsetTop)}};return e(eo,{"data-testid":`${n}-overlay`,show:t,enableOverlayClick:s,onOverlayClick:c,id:n,rootId:l,zIndex:d,children:e(to,Object.assign({show:t,animationFrom:i,"data-testid":n,verticalHeight:h,offsetTop:b},m,{children:o}))})},oo=m.div`
    border-radius: ${dt.md};
    background: ${it.bg};
    padding: ${lt["spacing-16"]} ${lt["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,ao=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${lt["spacing-24"]};
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
                background-color: ${it["bg-hover-neutral"]};
            `}
    }
`,so=i.forwardRef(((r,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=U(r,["children","focusHighlight","focusOutline","type"]);return e(ao,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:t}))})),lo=m.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${it.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ut.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,co=m(so)`
    position: absolute;
    top: var(--close-button-top-inset, ${lt["spacing-16"]});
    right: var(--close-button-right-inset, ${lt["spacing-16"]});
    padding: 0;
    color: ${it.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ut.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${lt["spacing-20"]});
    }
`,uo=e=>{const{textSize:r}=e||{};return h`
        // Text styling
        ${r&&ot[`${r}-regular`]}

        strong {
            font-weight: ${ot.Spec["weight-semibold"]};
            ${r&&ot[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ot.Spec["weight-semibold"]};
            ${r&&ot[`${r}-semibold`]}
            color: ${it.hyperlink};
            text-decoration: none;

            svg {
                color: ${it["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${it["hyperlink-hover"]};

                svg {
                    color: ${it["icon-hover"]};
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
`,mo=m((r=>{var{children:n}=r,t=U(r,["children"]);const i=t["data-testid"]||"card";return e(oo,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?e(Ft.BodyBL,{children:n}):n}))}))`
    color: ${it.text};
    ${uo({textSize:"body-md"})}

    ${ut.MaxWidth.sm} {
        display: none;
    }
`,ho=m((n=>{var{id:t="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=U(n,["id","children","onClose","showCloseButton"]);return r(lo,Object.assign({"data-testid":t},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(co,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(I,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,fo=m.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${it.text};
    ${uo({textSize:"body-md"})}
`,bo=t=>{var{children:i,visible:o,onMobileClose:a}=t,s=U(t,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",d=f(),c=ct["sm-max"]({theme:d}),u=Mt.useMediaQuery({maxWidth:c}),g=()=>{a&&a()},m=()=>"string"==typeof i?e(Ft.BodyMD,{children:i}):i;return r(n,{children:[o&&e(go,Object.assign({"data-testid":l},s,{children:e(mo,{children:m()})})),u&&e(io,{show:null!=o&&o,onOverlayClick:g,children:e(ho,{onClose:g,children:e(fo,{children:m()})})})]})},po=m.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,yo=t=>{var i,s,{children:l,popoverContent:d,trigger:c="click",position:g="top",zIndex:m,rootNode:h,customOffset:b,delay:p,onPopoverAppear:y,onPopoverDismiss:v}=t,x=U(t,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[w,$]=a(!1),E=o(null),L=o(null),R=f(),I=ct["sm-max"]({theme:R}),P=Mt.useMediaQuery({maxWidth:I}),{refs:Y,floatingStyles:W,context:H}=C({open:w,placement:g,whileElementsMounted:D,middleware:[B(null!=b?b:16),O(),A({limiter:S()})],onOpenChange:e=>{$(e),w!==e&&K(e)}}),N=(()=>{const[e,r]=a(void 0),n=F();return u((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(Gi.Change,e),n.events.emit(Gi.Ready),()=>n.events.off(Gi.Change,e)}),[n]),e})(),V=P?"click":c,q=k(H,{ignoreMouse:"hover"===V}),Z=M(H),Q=z(H,{enabled:"hover"===V,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(s=null==p?void 0:p.close)&&void 0!==s?s:500}}),{getReferenceProps:X,getFloatingProps:J}=j([q,Z,Q]),G=()=>{$(!1),K(!1)},K=e=>{e&&y&&y(),!e&&v&&v()};return r(n,{children:[e(po,Object.assign({ref:e=>{E.current=e,Y.setReference(e)}},X({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),x,{children:l})),w&&e(_,{root:h,children:e(T,{context:H,children:e("div",Object.assign({ref:e=>{L.current=e,Y.setFloating(e)},style:Object.assign(Object.assign({},W),{outline:"none",zIndex:null!=m?m:N})},J(),{children:"function"==typeof d?d():e(bo,{visible:!0,onMobileClose:G,children:d})}))})})]})},vo=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},xo=m.span`
    color: ${it["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>vo(e)}

    &:hover,
    &:focus-visible {
        color: ${it["text-hover"]};
        ${({$hoverStyle:e})=>vo(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Fo=m.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,wo=n=>{var{ariaLabel:t,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=n,l=U(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(yo,Object.assign({},l,{children:r(xo,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=t?t:d?void 0:"More info",children:[i,o&&e(Fo,{$standalone:!d,children:o})]})}))},$o=m.div`
    padding-left: ${lt["spacing-4"]};
    display: inline;
`,Eo=({addon:r,rootNode:n})=>{const{content:t,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=r;return e($o,{children:e(wo,{trigger:"click",id:a,"data-testid":l,popoverContent:t,rootNode:n,zIndex:s,icon:null!=o?o:e(x,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Co=m.label`
    color: ${it["text-subtle"]};
    margin-bottom: ${lt["spacing-8"]};
    display: inline-block;

    ${ot["form-label"]}
    ${uo()}
    font-weight: ${ot.Spec["weight-semibold"]};
`;m.p`
    ${ot["body-sm-semibold"]}
    color: ${it["text-error"]};
    margin-top: ${lt["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;const Do=m.span`
    ${ot["form-description"]}
    color: ${it["text-subtler"]};
    display: block;
`,Bo=n=>{var{children:t,addon:i,subtitle:o,"data-testid":a}=n,s=U(n,["children","addon","subtitle","data-testid"]);return r(Co,Object.assign({},s,{children:[t,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(Eo,{addon:i}):null),"string"==typeof o?e(Do,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},Oo=m.div`
    padding: ${lt["spacing-8"]} ${lt["spacing-16"]};
    display: flex;

    ${e=>{let r,n;switch(e.$type){case"error":r=it["bg-error"](e),n=it["border-error"](e);break;case"success":r=it["bg-success"](e),n=it["border-success"](e);break;case"warning":default:r=it["bg-warning"](e),n=it["border-warning"](e);break;case"info":r=it["bg-info"](e),n=it["border-info"](e);break;case"description":r=it["bg-strong"](e),n=it["border-strong"](e)}return h`
            background: ${r};
            border-left: ${st["width-020"]} ${st.solid}
                ${n};
        `}}

    color: ${it.text};
    ${e=>"small"===e.$sizeType?uo({textSize:"body-sm"}):uo({textSize:"body-md"})}
`,Ao=m.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${lt["spacing-8"]};

    ${e=>{let r;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=it["icon-error"](e);break;case"success":r=it["icon-success"](e);break;case"warning":default:r=it["icon-warning"](e);break;case"info":r=it["icon-info"](e);break;case"description":r=it["icon-subtle"](e)}return h`
            svg {
                color: ${r};
                width: ${n};
                height: ${n};
            }
        `}}
`,So=m(Ft.LinkSM)`
    ${e=>"small"===e.$sizeType?h`
                ${ot["body-sm-semibold"]}
                margin-top: ${lt["spacing-4"]};
            `:h`
                ${ot["body-md-semibold"]}
                margin-top: ${lt["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${lt["spacing-4"]};
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
                margin-bottom: ${lt["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,zo=m.button`
    ${e=>"small"===e.$sizeType?h`
                ${ot["body-sm-semibold"]}
            `:h`
                ${ot["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${lt["spacing-4"]};
    margin-top: ${lt["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${it["text-primary"]};
`,jo=m(V)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${at["duration-350"]} ${at["ease-standard"]};
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

    ${ut.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,Wo=m.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${it["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${ot.Spec["body-size-baseline"]};
        height: ${ot.Spec["body-size-baseline"]};
    }
`,Ho=m.button`
    ${ot["body-baseline-regular"]}
    color: ${it.text};
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
    color: ${it["text-disabled"]};
`,Vo=m((({color:n,className:t,size:i})=>r(_o,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(Lo,{id:"inner1"}),e(Ro,{id:"inner2"}),e(Io,{id:"inner3"}),e(Po,{id:"inner4"})]})))`
    margin-right: 0.5rem;
    color: ${it["text-disabled"]};
`,Uo=m(P)`
    color: ${it["icon-warning"]};
    margin-right: 0.5rem;
    height: ${ot.Spec["body-size-baseline"]};
    width: ${ot.Spec["body-size-baseline"]};
`,qo=m.span`
    color: ${it["text-warning"]};
`,Zo=m.span`
    ${ot["body-baseline-semibold"]}
    color: ${it.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Qo=m((n=>{var{type:t,className:i,children:s,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:g=!1,customIcon:m,maxCollapsedHeight:h}=n,f=U(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,p]=a(!1),[y,v]=a(!1),{height:F,ref:w}=function(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,t=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,m=e.targetRef,h=e.observerOptions,f=e.onResize,b=o(n),p=o(null),y=null!=m?m:p,v=o(),x=a({width:void 0,height:void 0}),F=x[0],w=x[1];return Qi((function(){if(!Ui()){var e=Zi(f,w,c,g);v.current=Ni((function(r){(c||g)&&r.forEach((function(r){var n=r&&r.contentRect||{},t=n.width,i=n.height;!b.current&&!Ui()&&e({width:t,height:i}),b.current=!1}))}),t,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[t,s,l,c,g,f,h,y.current]),ti({ref:y},F)}();u((()=>{$()}),[h,F]);const $=()=>{p(!h),v(E())},E=()=>!(!F||!h)&&F>h;return r(Oo,{className:i,$type:t,$sizeType:c,"data-testid":f["data-testid"],children:[g&&e(Ao,{$sizeType:c,$type:t,children:(()=>{if(t&&m)return m;switch(t){case"success":return e(N,{});case"warning":return e(H,{});case"error":return e(W,{});case"info":case"description":return e(x,{});default:return null}})()}),r(ko,{children:[r(Mo,{$maxCollapsedHeight:E()?h:void 0,$showMore:b,$hasActionLink:!!l,children:[e("div",{ref:w,children:s}),l?r(So,Object.assign({"data-testid":"action-link",$type:t,$sizeType:c},l,{children:[l.children,d||e(Y,{})]})):null]}),y&&r(zo,{$sizeType:c,$type:t,type:"button",onClick:()=>p(!b),children:["Show ",b?"less":"more",e(jo,{$expanded:b})]})]})]})}))`
    margin-top: 0.5rem;
`,Xo=({label:t,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:d="•",maskRange:c,unmaskRange:g,maskRegex:m,disableMaskUnmask:h,alert:f,maskTransformer:b,onMask:p,onUnmask:x,onTryAgain:F})=>{const[w,$]=a(s);u((()=>{$(s)}),[s]);const E=()=>{switch("fail"===l&&F&&F(),w){case"masked":x&&x(),$("unmasked");break;case"unmasked":p&&p(),$("masked")}},C=()=>"string"!=typeof i?i:"masked"===w?ri.maskValue(i,{maskChar:d,maskRange:c,unmaskRange:g,maskRegex:m,maskTransformer:b}):i,D=()=>{switch(l){case"fail":return r(n,{children:[e(Uo,{}),e(qo,{children:"Error"}),e(Zo,{children:"Try again?"})]});case"loading":return r(n,{children:[e(Vo,{}),e(No,{children:"Retrieving..."})]});default:return r(n,{children:[C(),e(Wo,{children:"masked"===w?e(y,{"data-testid":"masked-icon"}):e(v,{"data-testid":"unmasked-icon"})})]})}};return r(Yo,{$widthStyle:o,children:[e(Bo,{children:t}),"string"!=typeof i?i:w?h?e(Ft.BodyBL,{children:C()}):e(Ho,{"data-testid":"clickable-label",onClick:E,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:D()}):e(Ft.BodyBL,{children:i}),f&&e(Qo,Object.assign({sizeType:"small"},f))]})},Jo=Object.assign((t=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:d,background:c=!0,stretch:u,onMask:g,onUnmask:m,onTryAgain:h}=t,f=U(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const b=e=>()=>{g&&g(e)},p=e=>()=>{m&&m(e)},y=e=>()=>{h&&h(e)},v=()=>{if(i&&i.length>0){const r=i.map(((r,n)=>e(Xo,Object.assign({},r,{onMask:b(r),onUnmask:p(r),onTryAgain:y(r)}),n)));return e(Ot,{$stretch:u,children:r})}return null};return e(Et,Object.assign({$background:c},f,{type:"grid",children:d||r(n,{children:[o&&e(Ct,{weight:"semibold",$stretch:u,children:o}),a&&e(Dt,{$stretch:u,children:a}),s&&e(Bt,{"data-id":"top-section",$stretch:u,children:s}),v(),l&&e(Bt,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:At,Item:Xo});export{Jo as UneditableSection};
//# sourceMappingURL=index.js.map
