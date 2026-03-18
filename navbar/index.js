import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import s,{useContext as t,useEffect as a,useState as i,useRef as o,useLayoutEffect as d,useCallback as l,createContext as g,cloneElement as c,forwardRef as u,useImperativeHandle as m}from"react";import h,{css as b,ThemeContext as p,keyframes as f,isStyledComponent as y}from"styled-components";import{useFloatingTree as v,FloatingTree as x,useFloatingNodeId as w,FloatingNode as F,useFloating as $,useTransitionStatus as C,useDismiss as E,useInteractions as D,FloatingFocusManager as k,autoUpdate as S,offset as B,flip as A,shift as z,limitShift as O,size as M,useClick as j,useHover as _,useFocus as P,FloatingPortal as L}from"@floating-ui/react";import I from"react-dom";import{CrossIcon as W}from"@lifesg/react-icons/cross";import{MenuIcon as T}from"@lifesg/react-icons/menu";import{ExternalIcon as N}from"@lifesg/react-icons/external";import{ChevronUpIcon as Y}from"@lifesg/react-icons/chevron-up";function R(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(s=Object.getOwnPropertySymbols(e);t<s.length;t++)r.indexOf(s[t])<0&&Object.prototype.propertyIsEnumerable.call(e,s[t])&&(n[s[t]]=e[s[t]])}return n}"function"==typeof SuppressedError&&SuppressedError;var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=Array.isArray,Q="object"==typeof H&&H&&H.Object===Object&&H,q=Q,J="object"==typeof self&&self&&self.Object===Object&&self,X=q||J||Function("return this")(),G=X.Symbol,Z=G,K=Object.prototype,ee=K.hasOwnProperty,re=K.toString,ne=Z?Z.toStringTag:void 0;var se=function(e){var r=ee.call(e,ne),n=e[ne];try{e[ne]=void 0;var s=!0}catch(e){}var t=re.call(e);return s&&(r?e[ne]=n:delete e[ne]),t},te=Object.prototype.toString;var ae=se,ie=function(e){return te.call(e)},oe=G?G.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":oe&&oe in Object(e)?ae(e):ie(e)};var le=function(e){return null!=e&&"object"==typeof e},ge=de,ce=le;var ue=function(e){return"symbol"==typeof e||ce(e)&&"[object Symbol]"==ge(e)},me=U,he=ue,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var fe=function(e,r){if(me(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!he(e))||(pe.test(e)||!be.test(e)||null!=r&&e in Object(r))};var ye=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=de,xe=ye;var we,Fe=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},$e=X["__core-js_shared__"],Ce=(we=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var Ee=function(e){return!!Ce&&Ce in e},De=Function.prototype.toString;var ke=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=Fe,Be=Ee,Ae=ye,ze=ke,Oe=/^\[object .+?Constructor\]$/,Me=Function.prototype,je=Object.prototype,_e=Me.toString,Pe=je.hasOwnProperty,Le=RegExp("^"+_e.call(Pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ie=function(e,r){return null==e?void 0:e[r]},We=function(e){return!(!Ae(e)||Be(e))&&(Se(e)?Le:Oe).test(ze(e))},Te=Ie;var Ne=function(e,r){var n=Te(e,r);return We(n)?n:void 0},Ye=Ne(Object,"create"),Re=Ye;var He=function(){this.__data__=Re?Re(null):{},this.size=0};var Ve=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=Ye,Qe=Object.prototype.hasOwnProperty;var qe=function(e){var r=this.__data__;if(Ue){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Qe.call(r,e)?r[e]:void 0},Je=Ye,Xe=Object.prototype.hasOwnProperty;var Ge=function(e){var r=this.__data__;return Je?void 0!==r[e]:Xe.call(r,e)},Ze=Ye;var Ke=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ze&&void 0===r?"__lodash_hash_undefined__":r,this},er=He,rr=Ve,nr=qe,sr=Ge,tr=Ke;function ar(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var s=e[r];this.set(s[0],s[1])}}ar.prototype.clear=er,ar.prototype.delete=rr,ar.prototype.get=nr,ar.prototype.has=sr,ar.prototype.set=tr;var ir=ar;var or=function(){this.__data__=[],this.size=0};var dr=function(e,r){return e===r||e!=e&&r!=r},lr=dr;var gr=function(e,r){for(var n=e.length;n--;)if(lr(e[n][0],r))return n;return-1},cr=gr,ur=Array.prototype.splice;var mr=function(e){var r=this.__data__,n=cr(r,e);return!(n<0)&&(n==r.length-1?r.pop():ur.call(r,n,1),--this.size,!0)},hr=gr;var br=function(e){var r=this.__data__,n=hr(r,e);return n<0?void 0:r[n][1]},pr=gr;var fr=function(e){return pr(this.__data__,e)>-1},yr=gr;var vr=function(e,r){var n=this.__data__,s=yr(n,e);return s<0?(++this.size,n.push([e,r])):n[s][1]=r,this},xr=or,wr=mr,Fr=br,$r=fr,Cr=vr;function Er(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var s=e[r];this.set(s[0],s[1])}}Er.prototype.clear=xr,Er.prototype.delete=wr,Er.prototype.get=Fr,Er.prototype.has=$r,Er.prototype.set=Cr;var Dr=Er,kr=Ne(X,"Map"),Sr=ir,Br=Dr,Ar=kr;var zr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Or=function(e,r){var n=e.__data__;return zr(r)?n["string"==typeof r?"string":"hash"]:n.map},Mr=Or;var jr=function(e){var r=Mr(this,e).delete(e);return this.size-=r?1:0,r},_r=Or;var Pr=function(e){return _r(this,e).get(e)},Lr=Or;var Ir=function(e){return Lr(this,e).has(e)},Wr=Or;var Tr=function(e,r){var n=Wr(this,e),s=n.size;return n.set(e,r),this.size+=n.size==s?0:1,this},Nr=function(){this.size=0,this.__data__={hash:new Sr,map:new(Ar||Br),string:new Sr}},Yr=jr,Rr=Pr,Hr=Ir,Vr=Tr;function Ur(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var s=e[r];this.set(s[0],s[1])}}Ur.prototype.clear=Nr,Ur.prototype.delete=Yr,Ur.prototype.get=Rr,Ur.prototype.has=Hr,Ur.prototype.set=Vr;var Qr=Ur,qr=Qr;function Jr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var s=arguments,t=r?r.apply(this,s):s[0],a=n.cache;if(a.has(t))return a.get(t);var i=e.apply(this,s);return n.cache=a.set(t,i)||a,i};return n.cache=new(Jr.Cache||qr),n}Jr.Cache=qr;var Xr=Jr;var Gr=function(e){var r=Xr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,en=Gr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Zr,(function(e,n,s,t){r.push(s?t.replace(Kr,"$1"):n||e)})),r}));var rn=function(e,r){for(var n=-1,s=null==e?0:e.length,t=Array(s);++n<s;)t[n]=r(e[n],n,e);return t},nn=U,sn=ue,tn=G?G.prototype:void 0,an=tn?tn.toString:void 0;var on=function e(r){if("string"==typeof r)return r;if(nn(r))return rn(r,e)+"";if(sn(r))return an?an.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},dn=on;var ln=U,gn=fe,cn=en,un=function(e){return null==e?"":dn(e)};var mn=function(e,r){return ln(e)?e:gn(e,r)?[e]:cn(un(e))},hn=ue;var bn=function(e){if("string"==typeof e||hn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},pn=mn,fn=bn;var yn=function(e,r){for(var n=0,s=(r=pn(r,e)).length;null!=e&&n<s;)e=e[fn(r[n++])];return n&&n==s?e:void 0},vn=yn;var xn=function(e,r,n){var s=null==e?void 0:vn(e,r);return void 0===s?n:s},wn=V(xn);const Fn=(e,r,n)=>wn(n,r)||wn(e,r),$n=(e,r)=>{const n=r||e.defaultValue;return wn(e.collections,n)},Cn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},En=e=>r=>{var n;const s=r.theme,t=$n(Cn,null==s?void 0:s.breakpointScheme);let a;return a=(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.breakpoint)?Fn(t,e,s.overrides.breakpoint):t[e],a},Dn={"xxs-min":En("xxs-min"),"xxs-max":En("xxs-max"),"xs-min":En("xs-min"),"xs-max":En("xs-max"),"sm-min":En("sm-min"),"sm-max":En("sm-max"),"md-min":En("md-min"),"md-max":En("md-max"),"lg-min":En("lg-min"),"lg-max":En("lg-max"),"xl-min":En("xl-min"),"xl-max":En("xl-max"),"xxl-min":En("xxl-min"),"xxs-column":En("xxs-column"),"xs-column":En("xs-column"),"sm-column":En("sm-column"),"md-column":En("md-column"),"lg-column":En("lg-column"),"xl-column":En("xl-column"),"xxl-column":En("xxl-column"),"xxs-gutter":En("xxs-gutter"),"xs-gutter":En("xs-gutter"),"sm-gutter":En("sm-gutter"),"md-gutter":En("md-gutter"),"lg-gutter":En("lg-gutter"),"xl-gutter":En("xl-gutter"),"xxl-gutter":En("xxl-gutter"),"xxs-margin":En("xxs-margin"),"xs-margin":En("xs-margin"),"sm-margin":En("sm-margin"),"md-margin":En("md-margin"),"lg-margin":En("lg-margin"),"xl-margin":En("xl-margin"),"xxl-margin":En("xxl-margin")},kn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Dn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const s=n(r);return`@media screen and (${e}: ${s}px)`}})(e,n),r)),{}),Sn={MaxWidth:kn("max-width"),MinWidth:kn("min-width")},Bn=h.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:s,$xlSpan:t,$lgStart:a,$lgSpan:i,$mdStart:o,$mdSpan:d,$smStart:l,$smSpan:g,$xsStart:c,$xsSpan:u,$xxsStart:m,$xxsSpan:h}=e;return b`
            grid-column: ${r||"auto"} / span ${n||1};

            ${Sn.MaxWidth.xl} {
                grid-column: ${s||"auto"} / span ${t||1};
            }

            ${Sn.MaxWidth.lg} {
                grid-column: ${a||"auto"} / span ${i||1};
            }

            ${Sn.MaxWidth.md} {
                grid-column: ${o||"auto"} / span ${d||1};
            }

            ${Sn.MaxWidth.sm} {
                grid-column: ${l||"auto"} / span ${g||1};
            }

            ${Sn.MaxWidth.xs} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${Sn.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${h||1};
            }
        `}}
`,An=s.forwardRef(((r,n)=>{const s=t(p),{xxlCols:a,xlCols:i,lgCols:o,mdCols:d,smCols:l,xsCols:g,xxsCols:c}=r,u=R(r,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),m=(e,r,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${n}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,s]=e;if(-1===s)return{start:n,span:r-n+1};return{start:n,span:Math.min(s-n,r)}}return{start:void 0,span:Math.min(e,r)}};return e(Bn,Object.assign({ref:n},(()=>{const e=Dn["xxl-column"]({theme:s}),r=Dn["xl-column"]({theme:s}),n=Dn["lg-column"]({theme:s}),t=Dn["md-column"]({theme:s}),u=Dn["sm-column"]({theme:s}),h=Dn["xs-column"]({theme:s}),b=Dn["xxs-column"]({theme:s}),p=m(a||i||o||d||l||g||c,e,"xxl"),f=m(i||o||d||l||g||c,r,"xl"),y=m(o||d||l||g||c,n,"lg"),v=m(d||l||g||c,t,"md"),x=m(l||g||c,u,"sm"),w=m(g||c,h,"xs"),F=m(c,b,"xxs");return{$xxlStart:p.start,$xxlSpan:p.span,$xlStart:f.start,$xlSpan:f.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:v.start,$mdSpan:v.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:F.start,$xxsSpan:F.span}})(),u))})),zn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},On=e=>r=>{var n;const s=r.theme,t=$n(zn,null==s?void 0:s.borderScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?`${Fn(t,e,s.overrides.border)}px`:`${t[e]}px`},Mn={"width-005":On("width-005"),"width-010":On("width-010"),"width-020":On("width-020"),"width-040":On("width-040"),solid:(jn="solid",e=>{var r;const n=e.theme,s=$n(zn,null==n?void 0:n.borderScheme),t=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?Fn(s,jn,n.overrides.border):s[jn];return"function"==typeof t?t(e):t})};var jn;const _n={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Pn={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ln={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},In={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Wn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Tn={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Nn={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Rn={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Hn={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},Un={collections:{lifesg:Ln,bookingsg:_n,rbs:Nn,mylegacy:In,ccube:Pn,oneservice:Wn,pa:Tn,a11yplayground:Yn,supportgowhere:Rn,imda:Hn,spf:Vn},defaultValue:"lifesg"},Qn={collections:{lifesg:Ln,bookingsg:_n,rbs:Nn,mylegacy:In,ccube:Pn,oneservice:Wn,pa:Tn,a11yplayground:Yn,supportgowhere:Rn,imda:Hn,spf:Vn},defaultValue:"lifesg"},qn=e=>r=>{var n;const s=r.theme,t="dark"===(null==s?void 0:s.colourMode),a=$n(t?Qn:Un,null==s?void 0:s.colourScheme),i=t?"primitiveColourDark":"primitiveColour",o=null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n[i];return o?Fn(a,e,o):a[e]},Jn={"brand-10":qn("brand-10"),"brand-20":qn("brand-20"),"brand-30":qn("brand-30"),"brand-40":qn("brand-40"),"brand-50":qn("brand-50"),"brand-60":qn("brand-60"),"brand-70":qn("brand-70"),"brand-80":qn("brand-80"),"brand-90":qn("brand-90"),"brand-95":qn("brand-95"),"brand-100":qn("brand-100"),"primary-10":qn("primary-10"),"primary-20":qn("primary-20"),"primary-30":qn("primary-30"),"primary-40":qn("primary-40"),"primary-50":qn("primary-50"),"primary-60":qn("primary-60"),"primary-70":qn("primary-70"),"primary-80":qn("primary-80"),"primary-90":qn("primary-90"),"primary-95":qn("primary-95"),"primary-100":qn("primary-100"),"secondary-10":qn("secondary-10"),"secondary-20":qn("secondary-20"),"secondary-30":qn("secondary-30"),"secondary-40":qn("secondary-40"),"secondary-50":qn("secondary-50"),"secondary-60":qn("secondary-60"),"secondary-70":qn("secondary-70"),"secondary-80":qn("secondary-80"),"secondary-90":qn("secondary-90"),"secondary-95":qn("secondary-95"),"secondary-100":qn("secondary-100"),"neutral-10":qn("neutral-10"),"neutral-20":qn("neutral-20"),"neutral-30":qn("neutral-30"),"neutral-40":qn("neutral-40"),"neutral-50":qn("neutral-50"),"neutral-60":qn("neutral-60"),"neutral-70":qn("neutral-70"),"neutral-80":qn("neutral-80"),"neutral-90":qn("neutral-90"),"neutral-95":qn("neutral-95"),"neutral-100":qn("neutral-100"),"success-10":qn("success-10"),"success-20":qn("success-20"),"success-30":qn("success-30"),"success-40":qn("success-40"),"success-50":qn("success-50"),"success-60":qn("success-60"),"success-70":qn("success-70"),"success-80":qn("success-80"),"success-90":qn("success-90"),"success-95":qn("success-95"),"success-100":qn("success-100"),"warning-10":qn("warning-10"),"warning-20":qn("warning-20"),"warning-30":qn("warning-30"),"warning-40":qn("warning-40"),"warning-50":qn("warning-50"),"warning-60":qn("warning-60"),"warning-70":qn("warning-70"),"warning-80":qn("warning-80"),"warning-90":qn("warning-90"),"warning-95":qn("warning-95"),"warning-100":qn("warning-100"),"error-10":qn("error-10"),"error-20":qn("error-20"),"error-30":qn("error-30"),"error-40":qn("error-40"),"error-50":qn("error-50"),"error-60":qn("error-60"),"error-70":qn("error-70"),"error-80":qn("error-80"),"error-90":qn("error-90"),"error-95":qn("error-95"),"error-100":qn("error-100"),"info-10":qn("info-10"),"info-20":qn("info-20"),"info-30":qn("info-30"),"info-40":qn("info-40"),"info-50":qn("info-50"),"info-60":qn("info-60"),"info-70":qn("info-70"),"info-80":qn("info-80"),"info-90":qn("info-90"),"info-95":qn("info-95"),"info-100":qn("info-100"),white:qn("white"),black:qn("black"),"primary-inverse":qn("primary-inverse")},Xn={text:qn("neutral-20"),"text-subtle":qn("neutral-30"),"text-subtler":qn("neutral-50"),"text-subtlest":qn("neutral-60"),"text-primary":qn("primary-50"),"text-primary-strongest":qn("primary-20"),"text-hover":qn("primary-40"),"text-selected":qn("primary-50"),"text-selected-hover":qn("primary-40"),"text-disabled":qn("neutral-50"),"text-disabled-subtle":qn("neutral-60"),"text-disabled-subtlest":qn("neutral-80"),"text-selected-disabled":qn("neutral-20"),"text-success":qn("success-40"),"text-warning":qn("warning-40"),"text-error":qn("error-40"),"text-info":qn("info-40"),"text-inverse":qn("white"),icon:qn("neutral-50"),"icon-subtle":qn("neutral-60"),"icon-strongest":qn("neutral-20"),"icon-primary":qn("primary-50"),"icon-primary-subtle":qn("primary-60"),"icon-primary-subtlest":qn("primary-70"),"icon-hover":qn("primary-40"),"icon-selected":qn("primary-50"),"icon-selected-hover":qn("primary-40"),"icon-disabled":qn("neutral-50"),"icon-disabled-subtle":qn("neutral-60"),"icon-selected-disabled":qn("neutral-60"),"icon-success":qn("success-50"),"icon-warning":qn("warning-60"),"icon-error":qn("error-50"),"icon-error-strong":qn("error-40"),"icon-info":qn("info-50"),"icon-inverse":qn("white"),"icon-primary-inverse":qn("primary-inverse"),border:qn("neutral-90"),"border-strong":qn("neutral-70"),"border-stronger":qn("neutral-50"),"border-primary":qn("primary-50"),"border-primary-subtle":qn("primary-60"),"border-hover":qn("primary-90"),"border-hover-strong":qn("primary-60"),"border-selected":qn("primary-50"),"border-selected-subtle":qn("primary-70"),"border-selected-subtlest":qn("primary-90"),"border-selected-hover":qn("primary-40"),"border-focus":qn("primary-60"),"border-focus-strong":qn("primary-50"),"border-disabled":qn("neutral-90"),"border-selected-disabled":qn("neutral-70"),"border-success":qn("success-60"),"border-warning":qn("warning-60"),"border-error":qn("error-60"),"border-error-focus":qn("error-60"),"border-error-focus-strong":qn("error-40"),"border-error-strong":qn("error-40"),"border-info":qn("info-60"),bg:qn("white"),"bg-strong":qn("neutral-100"),"bg-stronger":qn("neutral-95"),"bg-strongest":qn("neutral-90"),"bg-hover":qn("primary-95"),"bg-hover-strong":qn("primary-90"),"bg-hover-subtle":qn("primary-100"),"bg-hover-neutral":qn("neutral-100"),"bg-hover-neutral-strong":qn("neutral-90"),"bg-selected":qn("primary-95"),"bg-selected-hover":qn("primary-90"),"bg-selected-strong":qn("primary-90"),"bg-selected-stronger":qn("primary-70"),"bg-selected-strongest":qn("primary-50"),"bg-selected-strongest-hover":qn("primary-40"),"bg-disabled":qn("neutral-95"),"bg-selected-disabled":qn("neutral-95"),"bg-selected-stronger-disabled":qn("neutral-70"),"bg-success":qn("success-100"),"bg-success-hover":qn("success-95"),"bg-success-strong":qn("success-50"),"bg-success-strong-hover":qn("success-40"),"bg-warning":qn("warning-100"),"bg-warning-hover":qn("warning-95"),"bg-warning-strong":qn("warning-50"),"bg-warning-strong-hover":qn("warning-40"),"bg-info":qn("info-100"),"bg-info-hover":qn("info-95"),"bg-info-strong":qn("info-50"),"bg-info-strong-hover":qn("info-40"),"bg-error":qn("error-100"),"bg-error-hover":qn("error-95"),"bg-error-strong":qn("error-50"),"bg-error-strong-hover":qn("error-40"),"bg-inverse":qn("neutral-20"),"bg-inverse-subtle":qn("neutral-30"),"bg-inverse-subtler":qn("neutral-50"),"bg-inverse-subtlest":qn("neutral-60"),"bg-inverse-hover":qn("neutral-40"),"bg-primary":qn("primary-50"),"bg-primary-subtle":qn("primary-60"),"bg-primary-subtler":qn("primary-95"),"bg-primary-subtlest":qn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":qn("primary-40"),"bg-primary-subtlest-hover":qn("primary-90"),"bg-primary-subtlest-selected":qn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:qn("primary-50"),"hyperlink-hover":qn("primary-40"),"hyperlink-visited":qn("primary-40"),"hyperlink-inverse":qn("primary-inverse"),"focus-ring":qn("primary-50"),"focus-ring-inverse":qn("white")},Gn={text:qn("neutral-100"),"text-subtle":qn("neutral-80"),"text-subtler":qn("neutral-60"),"text-subtlest":qn("neutral-50"),"text-primary":qn("primary-60"),"text-primary-strongest":qn("primary-90"),"text-hover":qn("primary-70"),"text-selected":qn("primary-60"),"text-selected-hover":qn("primary-70"),"text-disabled":qn("neutral-60"),"text-disabled-subtle":qn("neutral-50"),"text-disabled-subtlest":qn("neutral-30"),"text-selected-disabled":qn("neutral-90"),"text-success":qn("success-70"),"text-warning":qn("warning-70"),"text-error":qn("error-70"),"text-info":qn("info-70"),"text-inverse":qn("black"),icon:qn("neutral-60"),"icon-subtle":qn("neutral-50"),"icon-strongest":qn("neutral-90"),"icon-primary":qn("primary-60"),"icon-primary-subtle":qn("primary-50"),"icon-primary-subtlest":qn("primary-40"),"icon-hover":qn("primary-70"),"icon-selected":qn("primary-60"),"icon-selected-hover":qn("primary-70"),"icon-disabled":qn("neutral-60"),"icon-disabled-subtle":qn("neutral-50"),"icon-selected-disabled":qn("neutral-50"),"icon-success":qn("success-60"),"icon-warning":qn("warning-50"),"icon-error":qn("error-60"),"icon-error-strong":qn("error-70"),"icon-info":qn("info-60"),"icon-inverse":qn("black"),"icon-primary-inverse":qn("primary-inverse"),border:qn("neutral-20"),"border-strong":qn("neutral-40"),"border-stronger":qn("neutral-60"),"border-primary":qn("primary-60"),"border-primary-subtle":qn("primary-50"),"border-hover":qn("primary-20"),"border-hover-strong":qn("primary-50"),"border-selected":qn("primary-60"),"border-selected-subtle":qn("primary-40"),"border-selected-subtlest":qn("primary-20"),"border-selected-hover":qn("primary-70"),"border-focus":qn("primary-50"),"border-focus-strong":qn("primary-60"),"border-disabled":qn("neutral-20"),"border-selected-disabled":qn("neutral-40"),"border-success":qn("success-50"),"border-warning":qn("warning-50"),"border-error":qn("error-50"),"border-error-focus":qn("error-50"),"border-error-focus-strong":qn("error-70"),"border-error-strong":qn("error-70"),"border-info":qn("info-50"),bg:qn("black"),"bg-strong":qn("neutral-10"),"bg-stronger":qn("neutral-20"),"bg-strongest":qn("neutral-20"),"bg-hover":qn("primary-20"),"bg-hover-strong":qn("primary-20"),"bg-hover-subtle":qn("primary-10"),"bg-hover-neutral":qn("neutral-10"),"bg-hover-neutral-strong":qn("neutral-20"),"bg-selected":qn("primary-20"),"bg-selected-hover":qn("primary-20"),"bg-selected-strong":qn("primary-20"),"bg-selected-stronger":qn("primary-40"),"bg-selected-strongest":qn("primary-60"),"bg-selected-strongest-hover":qn("primary-70"),"bg-disabled":qn("neutral-20"),"bg-selected-disabled":qn("neutral-20"),"bg-selected-stronger-disabled":qn("neutral-40"),"bg-success":qn("success-10"),"bg-success-hover":qn("success-20"),"bg-success-strong":qn("success-60"),"bg-success-strong-hover":qn("success-70"),"bg-warning":qn("warning-10"),"bg-warning-hover":qn("warning-20"),"bg-warning-strong":qn("warning-60"),"bg-warning-strong-hover":qn("warning-70"),"bg-info":qn("info-10"),"bg-info-hover":qn("info-20"),"bg-info-strong":qn("info-60"),"bg-info-strong-hover":qn("info-70"),"bg-error":qn("error-10"),"bg-error-hover":qn("error-20"),"bg-error-strong":qn("error-60"),"bg-error-strong-hover":qn("error-70"),"bg-inverse":qn("neutral-90"),"bg-inverse-subtle":qn("neutral-80"),"bg-inverse-subtler":qn("neutral-60"),"bg-inverse-subtlest":qn("neutral-50"),"bg-inverse-hover":qn("neutral-70"),"bg-primary":qn("primary-60"),"bg-primary-subtle":qn("primary-50"),"bg-primary-subtler":qn("primary-20"),"bg-primary-subtlest":qn("primary-10"),"bg-available":"#185339","bg-primary-hover":qn("primary-70"),"bg-primary-subtlest-hover":qn("primary-20"),"bg-primary-subtlest-selected":qn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:qn("primary-60"),"hyperlink-hover":qn("primary-70"),"hyperlink-visited":qn("primary-70"),"hyperlink-inverse":qn("primary-inverse"),"focus-ring":qn("primary-60"),"focus-ring-inverse":qn("black")},Zn={text:qn("neutral-30"),"text-subtle":qn("neutral-40"),"text-subtler":qn("neutral-50"),"text-subtlest":qn("neutral-70"),"text-primary":qn("neutral-10"),"text-primary-strongest":qn("neutral-10"),"text-hover":qn("neutral-70"),"text-selected":qn("neutral-20"),"text-selected-hover":qn("neutral-10"),"text-disabled":qn("neutral-50"),"text-disabled-subtle":qn("neutral-70"),"text-disabled-subtlest":qn("neutral-80"),"text-selected-disabled":qn("neutral-40"),"text-success":qn("success-40"),"text-warning":qn("warning-40"),"text-error":qn("brand-30"),"text-info":qn("neutral-40"),"text-inverse":qn("neutral-100"),icon:qn("neutral-40"),"icon-subtle":qn("neutral-50"),"icon-strongest":qn("neutral-10"),"icon-primary":qn("neutral-10"),"icon-primary-subtle":qn("neutral-30"),"icon-primary-subtlest":qn("neutral-60"),"icon-hover":qn("neutral-70"),"icon-selected":qn("brand-20"),"icon-selected-hover":qn("brand-10"),"icon-disabled":qn("neutral-50"),"icon-disabled-subtle":qn("neutral-70"),"icon-selected-disabled":qn("neutral-40"),"icon-success":qn("success-40"),"icon-warning":qn("warning-60"),"icon-error":qn("brand-30"),"icon-error-strong":qn("brand-10"),"icon-info":qn("neutral-40"),"icon-inverse":qn("neutral-100"),"icon-primary-inverse":"#F9B371",border:qn("neutral-90"),"border-strong":qn("neutral-30"),"border-stronger":qn("neutral-20"),"border-primary":qn("neutral-40"),"border-primary-subtle":qn("neutral-60"),"border-hover":qn("neutral-80"),"border-hover-strong":qn("neutral-10"),"border-selected":qn("brand-20"),"border-selected-subtle":qn("neutral-40"),"border-selected-subtlest":qn("neutral-70"),"border-selected-hover":qn("neutral-10"),"border-focus":qn("neutral-20"),"border-focus-strong":qn("neutral-10"),"border-disabled":qn("neutral-90"),"border-selected-disabled":qn("neutral-80"),"border-success":qn("success-40"),"border-warning":qn("warning-60"),"border-error":qn("brand-30"),"border-error-focus":qn("brand-20"),"border-error-focus-strong":qn("brand-10"),"border-error-strong":qn("brand-20"),"border-info":qn("neutral-40"),bg:qn("neutral-100"),"bg-strong":qn("neutral-95"),"bg-stronger":qn("neutral-90"),"bg-strongest":qn("neutral-80"),"bg-hover":qn("brand-90"),"bg-hover-strong":qn("brand-80"),"bg-hover-subtle":qn("neutral-90"),"bg-hover-neutral":qn("neutral-90"),"bg-hover-neutral-strong":qn("neutral-90"),"bg-selected":qn("brand-100"),"bg-selected-hover":qn("brand-30"),"bg-selected-strong":qn("brand-50"),"bg-selected-stronger":qn("brand-40"),"bg-selected-strongest":qn("brand-20"),"bg-selected-strongest-hover":qn("brand-10"),"bg-disabled":qn("neutral-90"),"bg-selected-disabled":qn("neutral-90"),"bg-selected-stronger-disabled":qn("neutral-80"),"bg-success":qn("success-100"),"bg-success-hover":qn("success-95"),"bg-success-strong":qn("success-50"),"bg-success-strong-hover":qn("success-40"),"bg-warning":qn("warning-100"),"bg-warning-hover":qn("warning-95"),"bg-warning-strong":qn("warning-50"),"bg-warning-strong-hover":qn("warning-40"),"bg-info":qn("neutral-95"),"bg-info-hover":qn("info-95"),"bg-info-strong":qn("info-50"),"bg-info-strong-hover":qn("info-40"),"bg-error":qn("brand-100"),"bg-error-hover":qn("error-95"),"bg-error-strong":qn("error-50"),"bg-error-strong-hover":qn("error-40"),"bg-inverse":qn("neutral-40"),"bg-inverse-subtle":qn("neutral-60"),"bg-inverse-subtler":qn("neutral-70"),"bg-inverse-subtlest":qn("neutral-80"),"bg-inverse-hover":qn("neutral-30"),"bg-primary":qn("brand-20"),"bg-primary-subtle":qn("brand-60"),"bg-primary-subtler":qn("brand-80"),"bg-primary-subtlest":qn("brand-100"),"bg-available":qn("success-60"),"bg-primary-hover":qn("brand-10"),"bg-primary-subtlest-hover":qn("brand-80"),"bg-primary-subtlest-selected":qn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:qn("neutral-10"),"hyperlink-hover":qn("neutral-40"),"hyperlink-visited":qn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":qn("primary-50"),"focus-ring-inverse":qn("white")},Kn={text:qn("neutral-20"),"text-subtle":qn("neutral-30"),"text-subtler":qn("neutral-50"),"text-subtlest":qn("neutral-60"),"text-primary":qn("primary-50"),"text-primary-strongest":qn("primary-20"),"text-hover":qn("primary-40"),"text-selected":qn("primary-50"),"text-selected-hover":qn("primary-40"),"text-disabled":qn("neutral-50"),"text-disabled-subtle":qn("neutral-60"),"text-disabled-subtlest":qn("neutral-80"),"text-selected-disabled":qn("neutral-20"),"text-success":qn("success-40"),"text-warning":qn("warning-40"),"text-error":qn("error-40"),"text-info":qn("info-40"),"text-inverse":qn("white"),icon:qn("neutral-50"),"icon-subtle":qn("neutral-60"),"icon-strongest":qn("neutral-20"),"icon-primary":qn("primary-50"),"icon-primary-subtle":qn("primary-60"),"icon-primary-subtlest":qn("primary-70"),"icon-hover":qn("primary-40"),"icon-selected":qn("primary-50"),"icon-selected-hover":qn("primary-40"),"icon-disabled":qn("neutral-50"),"icon-disabled-subtle":qn("neutral-60"),"icon-selected-disabled":qn("neutral-60"),"icon-success":qn("success-50"),"icon-warning":qn("warning-60"),"icon-error":qn("error-50"),"icon-error-strong":qn("error-40"),"icon-info":qn("info-50"),"icon-inverse":qn("white"),"icon-primary-inverse":qn("primary-inverse"),border:qn("neutral-90"),"border-strong":qn("neutral-70"),"border-stronger":qn("neutral-50"),"border-primary":qn("primary-50"),"border-primary-subtle":qn("primary-60"),"border-hover":qn("primary-90"),"border-hover-strong":qn("primary-60"),"border-selected":qn("primary-50"),"border-selected-subtle":qn("primary-70"),"border-selected-subtlest":qn("primary-90"),"border-selected-hover":qn("primary-40"),"border-focus":qn("primary-60"),"border-focus-strong":qn("primary-50"),"border-disabled":qn("neutral-90"),"border-selected-disabled":qn("neutral-70"),"border-success":qn("success-60"),"border-warning":qn("warning-60"),"border-error":qn("error-60"),"border-error-focus":qn("error-60"),"border-error-focus-strong":qn("error-40"),"border-error-strong":qn("error-40"),"border-info":qn("info-60"),bg:qn("white"),"bg-strong":qn("neutral-100"),"bg-stronger":qn("neutral-95"),"bg-strongest":qn("neutral-90"),"bg-hover":qn("primary-95"),"bg-hover-strong":qn("primary-90"),"bg-hover-subtle":qn("primary-100"),"bg-hover-neutral":qn("neutral-100"),"bg-hover-neutral-strong":qn("neutral-90"),"bg-selected":qn("primary-95"),"bg-selected-hover":qn("primary-90"),"bg-selected-strong":qn("primary-90"),"bg-selected-stronger":qn("primary-70"),"bg-selected-strongest":qn("primary-50"),"bg-selected-strongest-hover":qn("primary-40"),"bg-disabled":qn("neutral-95"),"bg-selected-disabled":qn("neutral-95"),"bg-selected-stronger-disabled":qn("neutral-70"),"bg-success":qn("success-100"),"bg-success-hover":qn("success-95"),"bg-success-strong":qn("success-50"),"bg-success-strong-hover":qn("success-40"),"bg-warning":qn("warning-100"),"bg-warning-hover":qn("warning-95"),"bg-warning-strong":qn("warning-50"),"bg-warning-strong-hover":qn("warning-40"),"bg-info":qn("info-100"),"bg-info-hover":qn("info-95"),"bg-info-strong":qn("info-50"),"bg-info-strong-hover":qn("info-40"),"bg-error":qn("error-100"),"bg-error-hover":qn("error-95"),"bg-error-strong":qn("error-50"),"bg-error-strong-hover":qn("error-40"),"bg-inverse":qn("neutral-20"),"bg-inverse-subtle":qn("neutral-30"),"bg-inverse-subtler":qn("neutral-50"),"bg-inverse-subtlest":qn("neutral-60"),"bg-inverse-hover":qn("neutral-40"),"bg-primary":qn("primary-50"),"bg-primary-subtle":qn("primary-60"),"bg-primary-subtler":qn("primary-95"),"bg-primary-subtlest":qn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":qn("primary-40"),"bg-primary-subtlest-hover":qn("primary-90"),"bg-primary-subtlest-selected":qn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:qn("primary-50"),"hyperlink-hover":qn("primary-40"),"hyperlink-visited":qn("primary-40"),"hyperlink-inverse":qn("primary-inverse"),"focus-ring":qn("primary-50"),"focus-ring-inverse":qn("white")},es={text:qn("neutral-100"),"text-subtle":qn("neutral-80"),"text-subtler":qn("neutral-60"),"text-subtlest":qn("neutral-50"),"text-primary":qn("primary-60"),"text-primary-strongest":qn("primary-90"),"text-hover":qn("primary-70"),"text-selected":qn("primary-60"),"text-selected-hover":qn("primary-70"),"text-disabled":qn("neutral-60"),"text-disabled-subtle":qn("neutral-50"),"text-disabled-subtlest":qn("neutral-30"),"text-selected-disabled":qn("neutral-90"),"text-success":qn("success-70"),"text-warning":qn("warning-70"),"text-error":qn("error-70"),"text-info":qn("info-70"),"text-inverse":qn("black"),icon:qn("neutral-60"),"icon-subtle":qn("neutral-50"),"icon-strongest":qn("neutral-90"),"icon-primary":qn("primary-60"),"icon-primary-subtle":qn("primary-50"),"icon-primary-subtlest":qn("primary-40"),"icon-hover":qn("primary-70"),"icon-selected":qn("primary-60"),"icon-selected-hover":qn("primary-70"),"icon-disabled":qn("neutral-60"),"icon-disabled-subtle":qn("neutral-50"),"icon-selected-disabled":qn("neutral-50"),"icon-success":qn("success-60"),"icon-warning":qn("warning-50"),"icon-error":qn("error-60"),"icon-error-strong":qn("error-70"),"icon-info":qn("info-60"),"icon-inverse":qn("black"),"icon-primary-inverse":qn("primary-inverse"),border:qn("neutral-20"),"border-strong":qn("neutral-40"),"border-stronger":qn("neutral-60"),"border-primary":qn("primary-60"),"border-primary-subtle":qn("primary-50"),"border-hover":qn("primary-20"),"border-hover-strong":qn("primary-50"),"border-selected":qn("primary-60"),"border-selected-subtle":qn("primary-40"),"border-selected-subtlest":qn("primary-20"),"border-selected-hover":qn("primary-70"),"border-focus":qn("primary-50"),"border-focus-strong":qn("primary-60"),"border-disabled":qn("neutral-20"),"border-selected-disabled":qn("neutral-40"),"border-success":qn("success-50"),"border-warning":qn("warning-50"),"border-error":qn("error-50"),"border-error-focus":qn("error-50"),"border-error-focus-strong":qn("error-70"),"border-error-strong":qn("error-70"),"border-info":qn("info-50"),bg:qn("black"),"bg-strong":qn("neutral-10"),"bg-stronger":qn("neutral-20"),"bg-strongest":qn("neutral-20"),"bg-hover":qn("primary-20"),"bg-hover-strong":qn("primary-20"),"bg-hover-subtle":qn("primary-10"),"bg-hover-neutral":qn("neutral-10"),"bg-hover-neutral-strong":qn("neutral-20"),"bg-selected":qn("primary-20"),"bg-selected-hover":qn("primary-20"),"bg-selected-strong":qn("primary-20"),"bg-selected-stronger":qn("primary-40"),"bg-selected-strongest":qn("primary-60"),"bg-selected-strongest-hover":qn("primary-70"),"bg-disabled":qn("neutral-20"),"bg-selected-disabled":qn("neutral-20"),"bg-selected-stronger-disabled":qn("neutral-40"),"bg-success":qn("success-10"),"bg-success-hover":qn("success-20"),"bg-success-strong":qn("success-60"),"bg-success-strong-hover":qn("success-70"),"bg-warning":qn("warning-10"),"bg-warning-hover":qn("warning-20"),"bg-warning-strong":qn("warning-60"),"bg-warning-strong-hover":qn("warning-70"),"bg-info":qn("info-10"),"bg-info-hover":qn("info-20"),"bg-info-strong":qn("info-60"),"bg-info-strong-hover":qn("info-70"),"bg-error":qn("error-10"),"bg-error-hover":qn("error-20"),"bg-error-strong":qn("error-60"),"bg-error-strong-hover":qn("error-70"),"bg-inverse":qn("neutral-90"),"bg-inverse-subtle":qn("neutral-80"),"bg-inverse-subtler":qn("neutral-60"),"bg-inverse-subtlest":qn("neutral-50"),"bg-inverse-hover":qn("neutral-70"),"bg-primary":qn("primary-60"),"bg-primary-subtle":qn("primary-50"),"bg-primary-subtler":qn("primary-20"),"bg-primary-subtlest":qn("primary-10"),"bg-available":"#185339","bg-primary-hover":qn("primary-70"),"bg-primary-subtlest-hover":qn("primary-20"),"bg-primary-subtlest-selected":qn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:qn("primary-60"),"hyperlink-hover":qn("primary-70"),"hyperlink-visited":qn("primary-70"),"hyperlink-inverse":qn("primary-inverse"),"focus-ring":qn("primary-60"),"focus-ring-inverse":qn("black")},rs={collections:{lifesg:Xn,bookingsg:Xn,rbs:Xn,mylegacy:Xn,ccube:Xn,oneservice:Xn,pa:Zn,a11yplayground:Kn,supportgowhere:Xn,imda:Xn,spf:Xn},defaultValue:"lifesg"},ns={collections:{lifesg:Gn,bookingsg:Gn,rbs:Gn,mylegacy:Gn,ccube:Gn,oneservice:Gn,pa:Gn,a11yplayground:es,supportgowhere:Gn,imda:Gn,spf:Gn},defaultValue:"lifesg"},ss=e=>r=>{var n;const s=r.theme,t="dark"===(null==s?void 0:s.colourMode),a=$n(t?ns:rs,null==s?void 0:s.colourScheme),i=t?"semanticColourDark":"semanticColour",o=null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n[i],d=o?Fn(a,e,o):a[e];return"function"==typeof d?d(r):d},ts={text:ss("text"),"text-subtle":ss("text-subtle"),"text-subtler":ss("text-subtler"),"text-subtlest":ss("text-subtlest"),"text-primary":ss("text-primary"),"text-primary-strongest":ss("text-primary-strongest"),"text-hover":ss("text-hover"),"text-selected":ss("text-selected"),"text-selected-hover":ss("text-selected-hover"),"text-disabled":ss("text-disabled"),"text-disabled-subtle":ss("text-disabled-subtle"),"text-disabled-subtlest":ss("text-disabled-subtlest"),"text-selected-disabled":ss("text-selected-disabled"),"text-success":ss("text-success"),"text-warning":ss("text-warning"),"text-error":ss("text-error"),"text-info":ss("text-info"),"text-inverse":ss("text-inverse"),icon:ss("icon"),"icon-subtle":ss("icon-subtle"),"icon-strongest":ss("icon-strongest"),"icon-primary":ss("icon-primary"),"icon-primary-subtle":ss("icon-primary-subtle"),"icon-primary-subtlest":ss("icon-primary-subtlest"),"icon-hover":ss("icon-hover"),"icon-selected":ss("icon-selected"),"icon-selected-hover":ss("icon-selected-hover"),"icon-disabled":ss("icon-disabled"),"icon-disabled-subtle":ss("icon-disabled-subtle"),"icon-selected-disabled":ss("icon-selected-disabled"),"icon-success":ss("icon-success"),"icon-warning":ss("icon-warning"),"icon-error":ss("icon-error"),"icon-error-strong":ss("icon-error-strong"),"icon-info":ss("icon-info"),"icon-inverse":ss("icon-inverse"),"icon-primary-inverse":ss("icon-primary-inverse"),border:ss("border"),"border-strong":ss("border-strong"),"border-stronger":ss("border-stronger"),"border-primary":ss("border-primary"),"border-primary-subtle":ss("border-primary-subtle"),"border-hover":ss("border-hover"),"border-hover-strong":ss("border-hover-strong"),"border-selected":ss("border-selected"),"border-selected-subtle":ss("border-selected-subtle"),"border-selected-subtlest":ss("border-selected-subtlest"),"border-selected-hover":ss("border-selected-hover"),"border-focus":ss("border-focus"),"border-focus-strong":ss("border-focus-strong"),"border-disabled":ss("border-disabled"),"border-selected-disabled":ss("border-selected-disabled"),"border-success":ss("border-success"),"border-warning":ss("border-warning"),"border-error":ss("border-error"),"border-error-focus":ss("border-error-focus"),"border-error-focus-strong":ss("border-error-focus-strong"),"border-error-strong":ss("border-error-strong"),"border-info":ss("border-info"),bg:ss("bg"),"bg-strong":ss("bg-strong"),"bg-stronger":ss("bg-stronger"),"bg-strongest":ss("bg-strongest"),"bg-hover":ss("bg-hover"),"bg-hover-strong":ss("bg-hover-strong"),"bg-hover-subtle":ss("bg-hover-subtle"),"bg-hover-neutral":ss("bg-hover-neutral"),"bg-hover-neutral-strong":ss("bg-hover-neutral-strong"),"bg-selected":ss("bg-selected"),"bg-selected-hover":ss("bg-selected-hover"),"bg-selected-strong":ss("bg-selected-strong"),"bg-selected-stronger":ss("bg-selected-stronger"),"bg-selected-strongest":ss("bg-selected-strongest"),"bg-selected-strongest-hover":ss("bg-selected-strongest-hover"),"bg-disabled":ss("bg-disabled"),"bg-selected-disabled":ss("bg-selected-disabled"),"bg-selected-stronger-disabled":ss("bg-selected-stronger-disabled"),"bg-success":ss("bg-success"),"bg-success-hover":ss("bg-success-hover"),"bg-success-strong":ss("bg-success-strong"),"bg-success-strong-hover":ss("bg-success-strong-hover"),"bg-warning":ss("bg-warning"),"bg-warning-hover":ss("bg-warning-hover"),"bg-warning-strong":ss("bg-warning-strong"),"bg-warning-strong-hover":ss("bg-warning-strong-hover"),"bg-info":ss("bg-info"),"bg-info-hover":ss("bg-info-hover"),"bg-info-strong":ss("bg-info-strong"),"bg-info-strong-hover":ss("bg-info-strong-hover"),"bg-error":ss("bg-error"),"bg-error-hover":ss("bg-error-hover"),"bg-error-strong":ss("bg-error-strong"),"bg-error-strong-hover":ss("bg-error-strong-hover"),"bg-inverse":ss("bg-inverse"),"bg-inverse-subtle":ss("bg-inverse-subtle"),"bg-inverse-subtler":ss("bg-inverse-subtler"),"bg-inverse-subtlest":ss("bg-inverse-subtlest"),"bg-inverse-hover":ss("bg-inverse-hover"),"bg-primary":ss("bg-primary"),"bg-primary-subtle":ss("bg-primary-subtle"),"bg-primary-subtler":ss("bg-primary-subtler"),"bg-primary-subtlest":ss("bg-primary-subtlest"),"bg-available":ss("bg-available"),"bg-primary-hover":ss("bg-primary-hover"),"bg-primary-subtlest-hover":ss("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ss("bg-primary-subtlest-selected"),"overlay-strong":ss("overlay-strong"),"overlay-subtle":ss("overlay-subtle"),hyperlink:ss("hyperlink"),"hyperlink-hover":ss("hyperlink-hover"),"hyperlink-visited":ss("hyperlink-visited"),"hyperlink-inverse":ss("hyperlink-inverse"),"focus-ring":ss("focus-ring"),"focus-ring-inverse":ss("focus-ring-inverse")},as={collections:{default:{solid:e=>r=>{var n,s,t;const{thickness:a,radius:i,colour:o}=e||{},d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:Mn["width-010"](r),l=null!==(s="function"==typeof i?i(r):i+"px")&&void 0!==s?s:0,g=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ts.border(r),c=Mn.solid;return b`
            border: ${d} ${c} ${g};
            border-radius: ${l};
        `},"dashed-default":e=>r=>{var n,s,t;const{thickness:a,radius:i,colour:o}=e||{},d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:Mn["width-010"](r),l=null!==(s="function"==typeof i?i(r):i)&&void 0!==s?s:0,g=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ts.border(r),c=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${l}' ry='${l}' stroke='${g}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return b`
            background-image: url("data:image/svg+xml,${c}");
            border-radius: ${l};
        `}}},defaultValue:"default"},is=e=>1===e.length&&"theme"in e[0],os=e=>(...r)=>n=>{const s=is(r)?[]:r,t=is(r)?r[0]:n,a=t.theme;return(0,$n(as,null==a?void 0:a.borderScheme)[e])(...s)(t)},ds={solid:os("solid"),"dashed-default":os("dashed-default")},ls={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},gs=e=>r=>{var n;const s=r.theme,t=$n(ls,null==s?void 0:s.radiusScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.radius)?`${Fn(t,e,s.overrides.radius)}px`:`${t[e]}px`},cs={none:gs("none"),xs:gs("xs"),sm:gs("sm"),md:gs("md"),lg:gs("lg"),full:gs("full")},us={Button:{"button-radius":cs.md,"button-default-colour-bg":ts["bg-primary"],"button-default-colour-bg-hover":ts["bg-primary-hover"],"button-default-colour-text":ts["text-inverse"],"button-secondary-colour-border":ts["border-primary"],"button-secondary-colour-text":ts["text-primary"],"button-light-colour-text":ts["text-primary"],"button-link-colour-text":ts["text-primary"]},Animation:{"loading-dots-spinner-colour":ts["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ts.bg,"navbar-colour-icon":ts.icon,"navbar-link-colour-text":ts.text,"navbar-link-colour-text-hover":ts["text-hover"],"navbar-link-colour-text-selected-hover":ts["text-selected-hover"]},Footer:{"footer-colour-bg":ts["bg-strong"],"footer-colour-text":ts.text,"footer-link-colour-text":ts.text,"footer-link-colour-text-hover":ts["text-hover"],"footer-disclaimer-link-colour-text":ts.text,"footer-disclaimer-link-colour-text-hover":ts["text-subtler"]}},ms={Button:{"button-radius":cs.sm,"button-default-colour-bg":ts["bg-primary"],"button-default-colour-bg-hover":ts["bg-primary-hover"],"button-default-colour-text":ts["text-inverse"],"button-secondary-colour-border":ts["border-primary"],"button-secondary-colour-text":ts["text-primary"],"button-light-colour-text":ts["text-primary"],"button-link-colour-text":ts["text-primary"]},Animation:{"loading-dots-spinner-colour":ts["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ts.bg,"navbar-colour-icon":ts.icon,"navbar-link-colour-text":ts.text,"navbar-link-colour-text-hover":ts["text-hover"],"navbar-link-colour-text-selected-hover":ts["text-selected-hover"]},Footer:{"footer-colour-bg":ts["bg-strong"],"footer-colour-text":ts.text,"footer-link-colour-text":ts.text,"footer-link-colour-text-hover":ts["text-hover"],"footer-disclaimer-link-colour-text":ts.text,"footer-disclaimer-link-colour-text-hover":ts["text-subtler"]}},hs={Button:{"button-radius":cs.sm,"button-default-colour-bg":ts["bg-primary"],"button-default-colour-bg-hover":ts["bg-primary-hover"],"button-default-colour-text":ts["text-inverse"],"button-secondary-colour-border":ts["border-primary"],"button-secondary-colour-text":ts["text-primary"],"button-light-colour-text":ts["text-primary"],"button-link-colour-text":ts["text-primary"]},Animation:{"loading-dots-spinner-colour":Jn["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ts.bg,"navbar-colour-icon":ts.icon,"navbar-link-colour-text":ts.text,"navbar-link-colour-text-hover":ts["text-hover"],"navbar-link-colour-text-selected-hover":ts["text-selected-hover"]},Footer:{"footer-colour-bg":ts["bg-strong"],"footer-colour-text":ts.text,"footer-link-colour-text":ts.text,"footer-link-colour-text-hover":ts["text-hover"],"footer-disclaimer-link-colour-text":ts.text,"footer-disclaimer-link-colour-text-hover":ts["text-subtler"]}},bs={collections:{default:ms,pa:{Button:{"button-radius":cs.full,"button-default-colour-bg":ts["bg-primary"],"button-default-colour-bg-hover":ts["bg-primary-hover"],"button-default-colour-text":ts["text-inverse"],"button-secondary-colour-border":ts["border-primary"],"button-secondary-colour-text":ts["text-primary"],"button-light-colour-text":ts["text-primary"],"button-link-colour-text":ts["text-primary"]},Animation:{"loading-dots-spinner-colour":ts["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ts.bg,"navbar-colour-icon":ts.icon,"navbar-link-colour-text":ts.text,"navbar-link-colour-text-hover":ts["text-hover"],"navbar-link-colour-text-selected-hover":ts["text-selected-hover"]},Footer:{"footer-colour-bg":ts["bg-strong"],"footer-colour-text":ts.text,"footer-link-colour-text":ts.text,"footer-link-colour-text-hover":ts["text-hover"],"footer-disclaimer-link-colour-text":ts.text,"footer-disclaimer-link-colour-text-hover":ts["text-subtler"]}},a11yplayground:us,lifesg:hs,spf:{Button:{"button-radius":cs.md,"button-default-colour-bg":ts["bg-primary"],"button-default-colour-bg-hover":ts["bg-primary-hover"],"button-default-colour-text":ts["text-inverse"],"button-secondary-colour-border":ts["border-primary"],"button-secondary-colour-text":ts["text-primary"],"button-light-colour-text":ts["text-primary"],"button-link-colour-text":ts["text-primary"]},Animation:{"loading-dots-spinner-colour":ts["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":ts.bg,"navbar-colour-icon":ts.icon,"navbar-link-colour-text":ts["text-primary-strongest"],"navbar-link-colour-text-hover":ts["text-subtler"],"navbar-link-colour-text-selected-hover":ts["text-subtler"]},Footer:{"footer-colour-bg":ts["bg-inverse"],"footer-colour-text":ts["text-inverse"],"footer-link-colour-text":ts["text-inverse"],"footer-link-colour-text-hover":ts["text-inverse"],"footer-disclaimer-link-colour-text":ts["text-inverse"],"footer-disclaimer-link-colour-text-hover":ts["text-inverse"]}}},defaultValue:"default"},ps=(e,r)=>n=>{var s,t;const a=n.theme,i=$n(bs,null==a?void 0:a.componentScheme);return fs((null===(t=null===(s=null==a?void 0:a.componentOverrides)||void 0===s?void 0:s[e])||void 0===t?void 0:t[r])||i[e][r],n)},fs=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ys=ps("Button","button-radius"),vs=ps("Button","button-default-colour-bg"),xs=ps("Button","button-default-colour-bg-hover"),ws=ps("Button","button-default-colour-text"),Fs=ps("Button","button-secondary-colour-border"),$s=ps("Button","button-secondary-colour-text"),Cs=ps("Button","button-light-colour-text"),Es=ps("Button","button-link-colour-text"),Ds={"navbar-full-height":ps("Navbar","navbar-full-height"),"navbar-full-logo-height":ps("Navbar","navbar-full-logo-height"),"navbar-compressed-height":ps("Navbar","navbar-compressed-height"),"navbar-compressed-logo-height":ps("Navbar","navbar-compressed-logo-height"),"navbar-mobile-height":ps("Navbar","navbar-mobile-height"),"navbar-mobile-logo-height":ps("Navbar","navbar-mobile-logo-height"),"navbar-colour-bg":ps("Navbar","navbar-colour-bg"),"navbar-colour-icon":ps("Navbar","navbar-colour-icon"),"navbar-link-colour-text":ps("Navbar","navbar-link-colour-text"),"navbar-link-colour-text-hover":ps("Navbar","navbar-link-colour-text-hover"),"navbar-link-colour-text-selected-hover":ps("Navbar","navbar-link-colour-text-selected-hover")},ks={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ss=e=>r=>{var n;const s=r.theme,t=$n(ks,null==s?void 0:s.fontScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.fontSpec)?Fn(t,e,s.overrides.fontSpec):t[e]},Bs={"heading-size-xxl":Ss("heading-size-xxl"),"heading-size-xl":Ss("heading-size-xl"),"heading-size-lg":Ss("heading-size-lg"),"heading-size-md":Ss("heading-size-md"),"heading-size-sm":Ss("heading-size-sm"),"heading-size-xs":Ss("heading-size-xs"),"heading-lh-xxl":Ss("heading-lh-xxl"),"heading-lh-xl":Ss("heading-lh-xl"),"heading-lh-lg":Ss("heading-lh-lg"),"heading-lh-md":Ss("heading-lh-md"),"heading-lh-sm":Ss("heading-lh-sm"),"heading-lh-xs":Ss("heading-lh-xs"),"heading-ls-xxl":Ss("heading-ls-xxl"),"heading-ls-xl":Ss("heading-ls-xl"),"heading-ls-lg":Ss("heading-ls-lg"),"heading-ls-md":Ss("heading-ls-md"),"heading-ls-sm":Ss("heading-ls-sm"),"heading-ls-xs":Ss("heading-ls-xs"),"weight-light":Ss("weight-light"),"weight-regular":Ss("weight-regular"),"weight-semibold":Ss("weight-semibold"),"weight-bold":Ss("weight-bold"),"font-family":Ss("font-family"),"body-size-baseline":Ss("body-size-baseline"),"body-size-md":Ss("body-size-md"),"body-size-sm":Ss("body-size-sm"),"body-size-xs":Ss("body-size-xs"),"body-lh-baseline":Ss("body-lh-baseline"),"body-lh-md":Ss("body-lh-md"),"body-lh-sm":Ss("body-lh-sm"),"body-lh-xs":Ss("body-lh-xs"),"body-ls-baseline":Ss("body-ls-baseline"),"body-ls-md":Ss("body-ls-md"),"body-ls-sm":Ss("body-ls-sm"),"body-ls-xs":Ss("body-ls-xs"),"form-label-size":Ss("form-label-size"),"form-description-size":Ss("form-description-size"),"form-label-lh":Ss("form-label-lh"),"form-description-lh":Ss("form-description-lh"),"form-label-ls":Ss("form-label-ls"),"form-description-ls":Ss("form-description-ls")},As=(e,r,n,s,t)=>{const{disableLigatures:a}=t||{};return b`
        font-family: ${Ss("font-family")};
        font-size: ${Ss(e)};
        font-weight: ${Ss(r)};
        line-height: ${Ss(n)};
        letter-spacing: ${Ss(s)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},zs=(e={})=>({"heading-xxl-light":As("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":As("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":As("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":As("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":As("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":As("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":As("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":As("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":As("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":As("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":As("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":As("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":As("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":As("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":As("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":As("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":As("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":As("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":As("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":As("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":As("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":As("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":As("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":As("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":As("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":As("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":As("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":As("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":As("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":As("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":As("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":As("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":As("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":As("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":As("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":As("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":As("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":As("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":As("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":As("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":As("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":As("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Os=zs({disableLigatures:!0}),Ms=zs(),js=zs({disableLigatures:!0}),_s=zs({disableLigatures:!0}),Ps=zs({disableLigatures:!0}),Ls={collections:{default:Ms,bookingsg:Os,mylegacy:Ms,pa:js,a11yplayground:_s,supportgowhere:Ps,sgwdigitallobby:Ps,imda:zs({disableLigatures:!0}),spf:zs({disableLigatures:!0}),oneservice:zs()},defaultValue:"default"},Is=e=>r=>{var n;const s=r.theme,t=$n(Ls,null==s?void 0:s.fontScheme),a=(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.font)?Fn(t,e,s.overrides.font):t[e];return"function"==typeof a?a(r):a},Ws={"heading-xxl-light":Is("heading-xxl-light"),"heading-xxl-regular":Is("heading-xxl-regular"),"heading-xxl-semibold":Is("heading-xxl-semibold"),"heading-xxl-bold":Is("heading-xxl-bold"),"heading-xl-light":Is("heading-xl-light"),"heading-xl-regular":Is("heading-xl-regular"),"heading-xl-semibold":Is("heading-xl-semibold"),"heading-xl-bold":Is("heading-xl-bold"),"heading-lg-light":Is("heading-lg-light"),"heading-lg-regular":Is("heading-lg-regular"),"heading-lg-semibold":Is("heading-lg-semibold"),"heading-lg-bold":Is("heading-lg-bold"),"heading-md-light":Is("heading-md-light"),"heading-md-regular":Is("heading-md-regular"),"heading-md-semibold":Is("heading-md-semibold"),"heading-md-bold":Is("heading-md-bold"),"heading-sm-light":Is("heading-sm-light"),"heading-sm-regular":Is("heading-sm-regular"),"heading-sm-semibold":Is("heading-sm-semibold"),"heading-sm-bold":Is("heading-sm-bold"),"heading-xs-light":Is("heading-xs-light"),"heading-xs-regular":Is("heading-xs-regular"),"heading-xs-semibold":Is("heading-xs-semibold"),"heading-xs-bold":Is("heading-xs-bold"),"body-baseline-light":Is("body-baseline-light"),"body-baseline-regular":Is("body-baseline-regular"),"body-baseline-semibold":Is("body-baseline-semibold"),"body-baseline-bold":Is("body-baseline-bold"),"body-md-light":Is("body-md-light"),"body-md-regular":Is("body-md-regular"),"body-md-semibold":Is("body-md-semibold"),"body-md-bold":Is("body-md-bold"),"body-sm-light":Is("body-sm-light"),"body-sm-regular":Is("body-sm-regular"),"body-sm-semibold":Is("body-sm-semibold"),"body-sm-bold":Is("body-sm-bold"),"body-xs-light":Is("body-xs-light"),"body-xs-regular":Is("body-xs-regular"),"body-xs-semibold":Is("body-xs-semibold"),"body-xs-bold":Is("body-xs-bold"),"form-label":Is("form-label"),"form-description":Is("form-description")},Ts={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ns=e=>r=>{var n;const s=r.theme,t=$n(Ts,null==s?void 0:s.motionScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.motion)?Fn(t,e,s.overrides.motion):t[e]},Ys={"duration-150":Ns("duration-150"),"duration-250":Ns("duration-250"),"duration-350":Ns("duration-350"),"duration-500":Ns("duration-500"),"duration-800":Ns("duration-800"),"duration-1000":Ns("duration-1000"),"ease-default":Ns("ease-default"),"ease-standard":Ns("ease-standard"),"ease-entrance":Ns("ease-entrance"),"ease-exit":Ns("ease-exit")},Rs=(e,r,n)=>s=>{const t=ss(r)(s)||qn(r)(s);return`${e} rgba(from ${t} r g b / ${100*n}%)`},Hs={collections:{default:{"xs-subtle":Rs("0 0 4px 1px","neutral-50",.24),"xs-strong":Rs("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Rs("0 0 4px 1px","border-focus",.5),"xs-error-strong":Rs("0 0 4px 1px","border-error",.5),"sm-subtle":Rs("0 2px 4px 0","neutral-50",.24),"sm-strong":Rs("0 2px 4px 0","neutral-50",.5),"md-subtle":Rs("0 2px 8px 0","neutral-50",.24),"md-strong":Rs("0 2px 8px 0","neutral-50",.5),"lg-subtle":Rs("0 2px 12px 1px","neutral-50",.24),"lg-strong":Rs("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Vs=e=>r=>{var n;const s=r.theme,t=$n(Hs,null==s?void 0:s.shadowScheme),a=(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.shadow)?Fn(t,e,s.overrides.shadow):t[e];return"function"==typeof a?a(r):a},Us={"xs-subtle":Vs("xs-subtle"),"xs-strong":Vs("xs-strong"),"xs-focus-strong":Vs("xs-focus-strong"),"xs-error-strong":Vs("xs-error-strong"),"sm-subtle":Vs("sm-subtle"),"sm-strong":Vs("sm-strong"),"md-subtle":Vs("md-subtle"),"md-strong":Vs("md-strong"),"lg-subtle":Vs("lg-subtle"),"lg-strong":Vs("lg-strong")},Qs={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},qs=e=>r=>{var n;const s=r.theme,t=$n(Qs,null==s?void 0:s.spacingScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.spacing)?`${Fn(t,e,s.overrides.spacing)}px`:`${t[e]}px`},Js={"spacing-0":qs("spacing-0"),"spacing-4":qs("spacing-4"),"spacing-8":qs("spacing-8"),"spacing-12":qs("spacing-12"),"spacing-16":qs("spacing-16"),"spacing-20":qs("spacing-20"),"spacing-24":qs("spacing-24"),"spacing-32":qs("spacing-32"),"spacing-40":qs("spacing-40"),"spacing-48":qs("spacing-48"),"spacing-64":qs("spacing-64"),"spacing-72":qs("spacing-72"),"layout-xs":qs("layout-xs"),"layout-sm":qs("layout-sm"),"layout-md":qs("layout-md"),"layout-lg":qs("layout-lg"),"layout-xl":qs("layout-xl"),"layout-xxl":qs("layout-xxl"),"layout-xxxl":qs("layout-xxxl")},Xs=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Gs=Object.assign(Object.assign({},ts),{Primitive:Jn}),Zs=Object.assign(Object.assign({},Ws),{Spec:Bs}),Ks=Ys,et=Object.assign(Object.assign({},Mn),{Util:ds}),rt=Js,nt=cs,st=Us,tt=Dn,at=Sn,it={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ot={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},dt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},lt={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},gt={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ct={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ut={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},mt={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ht={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},bt={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},pt={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},ft={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},it),{light:Xs(it,"light"),dark:Xs(it,"dark")}),Object.assign(Object.assign({},ot),{light:Xs(ot,"light"),dark:Xs(ot,"dark")}),Object.assign(Object.assign({},dt),{light:Xs(dt,"light"),dark:Xs(dt,"dark")}),Object.assign(Object.assign({},lt),{light:Xs(lt,"light"),dark:Xs(lt,"dark")}),Object.assign(Object.assign({},gt),{light:Xs(gt,"light"),dark:Xs(gt,"dark")}),Object.assign(Object.assign({},ct),{light:Xs(ct,"light"),dark:Xs(ct,"dark")}),Object.assign(Object.assign({},ut),{light:Xs(ut,"light"),dark:Xs(ut,"dark")}),Object.assign(Object.assign({},mt),{light:Xs(mt,"light"),dark:Xs(mt,"dark")}),Object.assign(Object.assign({},ht),{light:Xs(ht,"light"),dark:Xs(ht,"dark")}),Object.assign(Object.assign({},bt),{light:Xs(bt,"light"),dark:Xs(bt,"dark")}),Object.assign(Object.assign({},pt),{light:Xs(pt,"light"),dark:Xs(pt,"dark")}),Object.assign(Object.assign({},ft),{light:Xs(ft,"light"),dark:Xs(ft,"dark")});const yt=h.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    padding: 0 ${tt["xxl-margin"]}px;

    ${at.MaxWidth.xl} {
        padding: 0 ${tt["xl-margin"]}px;
    }

    ${at.MaxWidth.lg} {
        padding: 0 ${tt["lg-margin"]}px;
    }

    ${at.MaxWidth.md} {
        padding: 0 ${tt["md-margin"]}px;
    }

    ${at.MaxWidth.sm} {
        padding: 0 ${tt["sm-margin"]}px;
    }

    ${at.MaxWidth.xs} {
        padding: 0 ${tt["xs-margin"]}px;
    }

    ${at.MaxWidth.xxs} {
        padding: 0 ${tt["xxs-margin"]}px;
    }

    ${e=>{if(!e.$stretch)return b`
                max-width: 1440px;
            `}}

    ${e=>{switch(e.$type){case"grid":return b`
                    column-gap: ${tt["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${tt["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${at.MaxWidth.xl} {
                        column-gap: ${tt["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${tt["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${at.MaxWidth.lg} {
                        column-gap: ${tt["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${tt["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${at.MaxWidth.md} {
                        column-gap: ${tt["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${tt["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${at.MaxWidth.sm} {
                        column-gap: ${tt["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${tt["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${at.MaxWidth.xs} {
                        column-gap: ${tt["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${tt["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${at.MaxWidth.xxs} {
                        column-gap: ${tt["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${tt["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return b`
                    display: flex;
                    flex-direction: column;
                `;default:return b`
                    display: flex;
                `}}}
`,vt=s.forwardRef(((r,n)=>{const{children:s,"data-testid":t="container",type:a="flex",stretch:i=!1}=r,o=R(r,["children","data-testid","type","stretch"]);return e(yt,Object.assign({ref:n,"data-testid":t,$type:a,$stretch:i},o,{children:s}))})),xt=s.forwardRef(((r,n)=>{const{children:s,"data-testid":t="section",stretch:a=!1}=r,i=R(r,["children","data-testid","stretch"]);return e(wt,Object.assign({ref:n,"data-testid":t,$stretch:a},i,{children:s}))})),wt=h.section`
    display: block;
    position: relative;
`,Ft=s.forwardRef(((r,n)=>{const{children:s,"data-testid":t="content",className:a,type:i="flex",stretch:o=!1}=r,d=R(r,["children","data-testid","className","type","stretch"]);return e(xt,Object.assign({ref:n,"data-testid":t,className:a,stretch:o},d,{children:e(vt,{"data-testid":`${t}-container`,type:i,"data-id":"container",stretch:o,children:s})}))})),$t={Section:xt,Container:vt,Content:Ft,ColDiv:An};!function(e,r){if("undefined"!=typeof document&&e){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");if(s.type="text/css",r){if(document.getElementById(r))return;s.id=r}n.appendChild(s),s.appendChild(document.createTextNode(e))}}(':root {\n  /* Primitive - Product Primary Color */\n  --sgds-product-primary-100: #f4f2fe;\n  --sgds-product-primary-200: #e1dbfb;\n  --sgds-product-primary-300: #c8bdf7;\n  --sgds-product-primary-400: #a999f3;\n  --sgds-product-primary-500: #8a72ef;\n  --sgds-product-primary-600: #6b4feb;\n  --sgds-product-primary-700: #523abc;\n  --sgds-product-primary-800: #3c2b8a;\n  --sgds-product-primary-900: #2a1e61;\n\n  /* Primitive - Purple Color */\n  --sgds-purple-100: #fbf0fe;\n  --sgds-purple-200: #f2d6fc;\n  --sgds-purple-300: #e6adf9;\n  --sgds-purple-400: #d983f6;\n  --sgds-purple-500: #c94cf2;\n  --sgds-purple-600: #ac1cdb;\n  --sgds-purple-700: #8516a9;\n  --sgds-purple-800: #641180;\n  --sgds-purple-900: #460c5a;\n\n  /* Primitive - Cyan Color */\n  --sgds-cyan-100: #DBf9fd;\n  --sgds-cyan-200: #94edfa;\n  --sgds-cyan-300: #24d5ee;\n  --sgds-cyan-400: #1fb5ca;\n  --sgds-cyan-500: #1993a4;\n  --sgds-cyan-600: #147583;\n  --sgds-cyan-700: #0f5a65;\n  --sgds-cyan-800: #0b434b;\n  --sgds-cyan-900: #082e34;\n\n  /* Primitive - Green Color */\n  --sgds-green-100: #e3f9ed;\n  --sgds-green-200: #b1edcb;\n  --sgds-green-300: #62db96;\n  --sgds-green-400: #16bd5e;\n  --sgds-green-500: #129a4d;\n  --sgds-green-600: #0e7c3d;\n  --sgds-green-700: #0b5e2f;\n  --sgds-green-800: #084523;\n  --sgds-green-900: #063119;\n\n  /* Primitive - Blue Color */\n  --sgds-blue-100: #ecf5fe;\n  --sgds-blue-200: #c8e2fb;\n  --sgds-blue-300: #96c7f7;\n  --sgds-blue-400: #60aaf4;\n  --sgds-blue-500: #1e87ef;\n  --sgds-blue-600: #0269d0;\n  --sgds-blue-700: #0151a0;\n  --sgds-blue-800: #013c77;\n  --sgds-blue-900: #012a54;\n\n  /* Primitive - Yellow Color */\n  --sgds-yellow-100: #fef4cb;\n  --sgds-yellow-200: #fcde63;\n  --sgds-yellow-300: #e5bf29;\n  --sgds-yellow-400: #c2a223;\n  --sgds-yellow-500: #9d841c;\n  --sgds-yellow-600: #7e6917;\n  --sgds-yellow-700: #605111;\n  --sgds-yellow-800: #483c0d;\n  --sgds-yellow-900: #322909;\n\n  /* Primitive - Red Color */\n  --sgds-red-100: #fcf1f1;\n  --sgds-red-200: #f8d7d7;\n  --sgds-red-300: #f1b2b2;\n  --sgds-red-400: #e98b8b;\n  --sgds-red-500: #e05959;\n  --sgds-red-600: #cf2323;\n  --sgds-red-700: #a11b1b;\n  --sgds-red-800: #791414;\n  --sgds-red-900: #550e0e;\n\n  /* Primitive - Gray Color */\n  --sgds-gray-000: #ffffff;\n  --sgds-gray-100: #f3f3f3;\n  --sgds-gray-200: #dfdfdf;\n  --sgds-gray-300: #c6c6c6;\n  --sgds-gray-400: #a5a5a5;\n  --sgds-gray-500: #868686;\n  --sgds-gray-600: #6b6b6b;\n  --sgds-gray-700: #525252;\n  --sgds-gray-800: #3b3b3b;\n  --sgds-gray-900: #2a2a2a;\n  --sgds-gray-1000: #1a1a1a;\n  --sgds-gray-1100: #0e0e0e;\n\n  /* Primitive - Border Width */\n  --sgds-border-width-0: 0px;\n  --sgds-border-width-1: 1px;\n  --sgds-border-width-2: 2px;\n  --sgds-border-width-3: 3px;\n  --sgds-border-width-4: 4px;\n  --sgds-form-border-width-default: var(--sgds-border-width-1);\n  --sgds-form-border-width-thick: var(--sgds-border-width-2);\n\n  /* Primitive - Border Radius */\n  --sgds-border-radius-none: 0px;\n  --sgds-border-radius-xs: 2px;\n  --sgds-border-radius-sm: 4px;\n  --sgds-border-radius-md: 8px;\n  --sgds-border-radius-lg: 12px;\n  --sgds-border-radius-xl: 16px;\n  --sgds-border-radius-2-xl: 24px;\n  --sgds-border-radius-full: 999px;\n  --sgds-form-border-radius-none: var(--sgds-border-radius-none);\n  --sgds-form-border-radius-xs: var(--sgds-border-radius-xs);\n  --sgds-form-border-radius-sm: var(--sgds-border-radius-sm);\n  --sgds-form-border-radius-md: var(--sgds-border-radius-md);\n  --sgds-form-border-radius-full: var(--sgds-border-radius-full);\n\n  /* Primitive - Breakpoint */\n  --sgds-breakpoint-xs: var(--sgds-dimension-320);\n  --sgds-breakpoint-sm: var(--sgds-dimension-512);\n  --sgds-breakpoint-md: var(--sgds-dimension-768);\n  --sgds-breakpoint-lg: var(--sgds-dimension-1024);\n  --sgds-breakpoint-xl: var(--sgds-dimension-1280);\n  --sgds-breakpoint-2-xl: var(--sgds-dimension-1440);\n\n  /* Primitive - Font Family */\n  --sgds-font-family-brand: "Inter", system-ui, sans-serif;\n\n  /* Primitive - Font Weight */\n  --sgds-font-weight-light: 300;\n  --sgds-font-weight-regular: 400;\n  --sgds-font-weight-semibold: 600;\n  --sgds-font-weight-bold: 700;\n\n  /* Primitive - Font Size */\n  --sgds-font-size-1: 0.875rem;\n  --sgds-font-size-2: 1rem;\n  --sgds-font-size-3: 1.25rem;\n  --sgds-font-size-4: 1.5rem;\n  --sgds-font-size-5: 1.75rem;\n  --sgds-font-size-6: 2rem;\n  --sgds-font-size-7: 2.5rem;\n  --sgds-font-size-8: 3rem;\n  --sgds-font-size-9: 3.5rem;\n\n  /* Primitive - Icon Size */\n  --sgds-icon-size-sm: 1rem;\n  --sgds-icon-size-md: 1.25rem;\n  --sgds-icon-size-lg: 1.5rem;\n  --sgds-icon-size-xl: 2rem;\n  --sgds-icon-size-2-xl: 3rem;\n  --sgds-icon-size-3-xl: 4rem;\n\n  /* Primitive - Letter Spacing */\n  --sgds-letter-spacing-tighter: -1px;\n  --sgds-letter-spacing-tight: -0.4px;\n  --sgds-letter-spacing-normal: 0px;\n  --sgds-letter-spacing-wide: 1px;\n  --sgds-letter-spacing-wider: 2px;\n\n  /* Primitive - Line Height */\n  --sgds-line-height-body: 1.5;\n  --sgds-line-height-heading: 1.2;\n  --sgds-line-height-min: 20px;\n\n  /* Primitive - Opacity */\n  --sgds-opacity-0: 0;\n  --sgds-opacity-5: 0.05;\n  --sgds-opacity-10: 0.1;\n  --sgds-opacity-20: 0.2;\n  --sgds-opacity-30: 0.3;\n  --sgds-opacity-40: 0.4;\n  --sgds-opacity-50: 0.5;\n  --sgds-opacity-60: 0.6;\n  --sgds-opacity-70: 0.7;\n  --sgds-opacity-80: 0.8;\n  --sgds-opacity-90: 0.9;\n  --sgds-opacity-100: 1;\n\n  /* Primitive - Paragraph Spacing */\n  --sgds-paragraph-spacing-none: 0;\n  --sgds-paragraph-spacing-sm: 0.5rem;\n  --sgds-paragraph-spacing-md: 1rem;\n  --sgds-paragraph-spacing-lg: 1.5rem;\n  --sgds-paragraph-spacing-xl: 2rem;\n\n  /* Primitive - Spacer */\n  --sgds-spacer-0: 0rem;\n  --sgds-spacer-1: 0.125rem;\n  --sgds-spacer-2: 0.25rem;\n  --sgds-spacer-3: 0.5rem;\n  --sgds-spacer-4: 0.75rem;\n  --sgds-spacer-5: 1rem;\n  --sgds-spacer-6: 1.25rem;\n  --sgds-spacer-7: 1.5rem;\n  --sgds-spacer-8: 2rem;\n  --sgds-spacer-9: 3rem;\n  --sgds-spacer-10: 4rem;\n  --sgds-spacer-11: 6rem;\n  --sgds-spacer-12: 8rem;\n\n  /* Primitive - Dimension */\n  --sgds-dimension-0: 0px;\n  --sgds-dimension-1: 1px;\n  --sgds-dimension-2: 2px;\n  --sgds-dimension-4: 4px;\n  --sgds-dimension-8: 8px;\n  --sgds-dimension-12: 12px;\n  --sgds-dimension-16: 16px;\n  --sgds-dimension-20: 20px;\n  --sgds-dimension-24: 24px;\n  --sgds-dimension-32: 32px;\n  --sgds-dimension-40: 40px;\n  --sgds-dimension-48: 48px;\n  --sgds-dimension-52: 52px;\n  --sgds-dimension-56: 56px;\n  --sgds-dimension-60: 60px;\n  --sgds-dimension-64: 64px;\n  --sgds-dimension-72: 72px;\n  --sgds-dimension-76: 76px;\n  --sgds-dimension-80: 80px;\n  --sgds-dimension-88: 88px;\n  --sgds-dimension-96: 96px;\n  --sgds-dimension-112: 112px;\n  --sgds-dimension-120: 120px;\n  --sgds-dimension-128: 128px;\n  --sgds-dimension-132: 132px;\n  --sgds-dimension-136: 136px;\n  --sgds-dimension-144: 144px;\n  --sgds-dimension-168: 168px;\n  --sgds-dimension-192: 192px;\n  --sgds-dimension-224: 224px;\n  --sgds-dimension-256: 256px;\n  --sgds-dimension-280: 280px;\n  --sgds-dimension-288: 288px;\n  --sgds-dimension-320: 320px;\n  --sgds-dimension-328: 328px;\n  --sgds-dimension-340: 340px;\n  --sgds-dimension-384: 384px;\n  --sgds-dimension-480: 480px;\n  --sgds-dimension-512: 512px;\n  --sgds-dimension-688: 688px;\n  --sgds-dimension-768: 768px;\n  --sgds-dimension-1024: 1024px;\n  --sgds-dimension-1280: 1280px;\n  --sgds-dimension-1440: 1440px;\n\n  /* Semantic - Padding */\n  --sgds-padding-none: var(--sgds-spacer-0);\n  --sgds-padding-3-xs: var(--sgds-spacer-1);\n  --sgds-padding-2-xs: var(--sgds-spacer-2);\n  --sgds-padding-xs: var(--sgds-spacer-3);\n  --sgds-padding-sm: var(--sgds-spacer-4);\n  --sgds-padding-md: var(--sgds-spacer-5);\n  --sgds-padding-lg: var(--sgds-spacer-6);\n  --sgds-padding-xl: var(--sgds-spacer-7);\n  --sgds-padding-2-xl: var(--sgds-spacer-8);\n  --sgds-padding-3-xl: var(--sgds-spacer-9);\n  --sgds-padding-4-xl: var(--sgds-spacer-10);\n  --sgds-padding-5-xl: var(--sgds-spacer-11);\n  --sgds-form-padding-x: var(--sgds-padding-md);\n  --sgds-form-padding-y: var(--sgds-padding-sm);\n  --sgds-form-padding-inline-xs: var(--sgds-padding-3-xs);\n  --sgds-form-padding-inline-sm: var(--sgds-padding-2-xs);\n  --sgds-form-padding-inline-md: var(--sgds-padding-xs);\n  --sgds-form-padding-inline-lg: var(--sgds-padding-sm);\n  --sgds-form-padding-inline-xl: var(--sgds-padding-md);\n\n  --sgds-margin-none: var(--sgds-spacer-0);\n  --sgds-margin-3-xs: var(--sgds-spacer-3);\n  --sgds-margin-2-xs: var(--sgds-spacer-5);\n  --sgds-margin-xs: var(--sgds-spacer-6);\n  --sgds-margin-sm: var(--sgds-spacer-7);\n  --sgds-margin-md: var(--sgds-spacer-8);\n  --sgds-margin-lg: var(--sgds-spacer-9);\n  --sgds-margin-xl: var(--sgds-spacer-10);\n  --sgds-margin-2-xl: var(--sgds-spacer-11);\n  --sgds-margin-3-xl: var(--sgds-spacer-12);\n\n  --sgds-gap-none: var(--sgds-spacer-0);\n  --sgds-gap-2-xs: var(--sgds-spacer-2);\n  --sgds-gap-xs: var(--sgds-spacer-3);\n  --sgds-gap-sm: var(--sgds-spacer-4);\n  --sgds-gap-md: var(--sgds-spacer-5);\n  --sgds-gap-lg: var(--sgds-spacer-6);\n  --sgds-gap-xl: var(--sgds-spacer-7);\n  --sgds-gap-2-xl: var(--sgds-spacer-8);\n  --sgds-form-gap-sm: var(--sgds-gap-2-xs);\n  --sgds-form-gap-md: var(--sgds-gap-xs);\n  --sgds-form-gap-lg: var(--sgds-gap-sm);\n  --sgds-form-gap-xl: var(--sgds-gap-md);\n  --sgds-form-gap-2-xl: var(--sgds-gap-xl);\n\n  --sgds-form-height-3-xs: var(--sgds-dimension-12);\n  --sgds-form-height-2-xs: var(--sgds-dimension-16);\n  --sgds-form-height-xs: var(--sgds-dimension-20);\n  --sgds-form-height-sm: var(--sgds-dimension-24);\n  --sgds-form-height-md: var(--sgds-dimension-32);\n  --sgds-form-height-lg: var(--sgds-dimension-40);\n  --sgds-form-height-xl: var(--sgds-dimension-48);\n  --sgds-form-height-2-xl: var(--sgds-dimension-56);\n\n  --sgds-form-width-3-xs: var(--sgds-dimension-12);\n  --sgds-form-width-2-xs: var(--sgds-dimension-16);\n  --sgds-form-width-xs: var(--sgds-dimension-24);\n  --sgds-form-width-sm: var(--sgds-dimension-32);\n  --sgds-form-width-md: var(--sgds-dimension-40);\n  --sgds-form-width-lg: var(--sgds-dimension-48);\n  --sgds-form-width-xl: var(--sgds-dimension-56);\n  --sgds-form-width-2-xl: var(--sgds-dimension-64);\n  --sgds-form-width-3-xl: var(--sgds-dimension-72);\n  --sgds-form-width-4-xl: var(--sgds-dimension-80);\n\n  /* Semantic - Form Icon Size */\n  --sgds-form-icon-size-sm: var(--sgds-icon-size-sm);\n  --sgds-form-icon-size-md: var(--sgds-icon-size-md);\n  --sgds-form-icon-size-lg: var(--sgds-icon-size-lg);\n\n  --sgds-box-shadow-focus: 0px 0px 0px 4px var(--sgds-blue-400);\n  --sgds-form-box-shadow-focus: var(--sgds-box-shadow-focus);\n\n  /* Masthead and Mainnav Max Width and Padding */\n  --sgds-mainnav-max-width: 1440px;\n  --sgds-mainnav-padding-x: 2rem;\n  --sgds-mainnav-mobile-padding-x: 1.25rem;\n}\n:root {\n  color-scheme: only light;\n\n  /* Semantic - Default Colors */\n  --sgds-bg-default: var(--sgds-gray-000);\n  --sgds-bg-alternate: var(--sgds-gray-100);\n  --sgds-bg-fixed-light: var(--sgds-gray-000);\n  --sgds-bg-fixed-dark: var(--sgds-gray-1100);\n  --sgds-bg-overlay: oklch(from var(--sgds-gray-1100) l c h / 0.4);\n  --sgds-bg-translucent: oklch(from var(--sgds-gray-1100) l c h / 0.1);\n  --sgds-bg-translucent-subtle: oklch(from var(--sgds-gray-1100) l c h / 0.05);\n  --sgds-bg-transparent: transparent;\n  --sgds-surface-default: var(--sgds-gray-000);\n  --sgds-surface-raised: var(--sgds-gray-100);\n  --sgds-surface-inverse: var(--sgds-gray-900);\n  --sgds-surface-fixed-light: var(--sgds-gray-000);\n  --sgds-surface-fixed-dark: var(--sgds-gray-900);\n  --sgds-color-default: var(--sgds-gray-1000);\n  --sgds-color-subtle: var(--sgds-gray-700);\n  --sgds-color-muted: var(--sgds-gray-300);\n  --sgds-color-inverse: var(--sgds-gray-100);\n  --sgds-color-fixed-light: var(--sgds-gray-100);\n  --sgds-color-fixed-dark: var(--sgds-gray-1000);\n  --sgds-color-transparent: transparent;\n  --sgds-border-color-default: var(--sgds-gray-500);\n  --sgds-border-color-emphasis: var(--sgds-gray-800);\n  --sgds-border-color-muted: var(--sgds-gray-200);\n  --sgds-border-color-fixed-light: var(--sgds-gray-000);\n  --sgds-border-color-fixed-dark: var(--sgds-gray-1000);\n  --sgds-border-color-translucent: oklch(from var(--sgds-gray-1100) l c h / 0.05);\n  --sgds-border-color-transparent: transparent;\n\n  /* Semantic - Primary Colors */\n  --sgds-primary-bg-default: var(--sgds-product-primary-700);\n  --sgds-primary-bg-muted: var(--sgds-product-primary-100);\n  --sgds-primary-bg-translucent: oklch(from var(--sgds-product-primary-700) l c h / 0.1);\n  --sgds-primary-surface-default: var(--sgds-product-primary-700);\n  --sgds-primary-surface-emphasis: var(--sgds-product-primary-800);\n  --sgds-primary-surface-muted: var(--sgds-product-primary-100);\n  --sgds-primary-surface-translucent: oklch(from var(--sgds-product-primary-700) l c h / 0.1);\n  --sgds-primary-color-default: var(--sgds-product-primary-600);\n  --sgds-primary-color-emphasis: var(--sgds-product-primary-700);\n  --sgds-primary-color-fixed-light: var(--sgds-product-primary-400);\n  --sgds-primary-color-fixed-dark: var(--sgds-product-primary-700);\n  --sgds-primary-border-color-default: var(--sgds-product-primary-500);\n  --sgds-primary-border-color-emphasis: var(--sgds-product-primary-700);\n  --sgds-primary-border-color-muted: var(--sgds-product-primary-300);\n\n  /* Semantic - Success Colors */\n  --sgds-success-bg-default: var(--sgds-green-700);\n  --sgds-success-bg-muted: var(--sgds-green-100);\n  --sgds-success-surface-default: var(--sgds-green-700);\n  --sgds-success-surface-emphasis: var(--sgds-green-800);\n  --sgds-success-surface-muted: var(--sgds-green-100);\n  --sgds-success-color-default: var(--sgds-green-600);\n  --sgds-success-color-emphasis: var(--sgds-green-700);\n  --sgds-success-color-fixed-light: var(--sgds-green-400);\n  --sgds-success-color-fixed-dark: var(--sgds-green-700);\n  --sgds-success-border-color-default: var(--sgds-green-500);\n  --sgds-success-border-color-emphasis: var(--sgds-green-700);\n  --sgds-success-border-color-muted: var(--sgds-green-300);\n\n  /* Semantic - Danger Colors */\n  --sgds-danger-bg-default: var(--sgds-red-700);\n  --sgds-danger-bg-muted: var(--sgds-red-100);\n  --sgds-danger-surface-default: var(--sgds-red-700);\n  --sgds-danger-surface-emphasis: var(--sgds-red-800);\n  --sgds-danger-surface-muted: var(--sgds-red-100);\n  --sgds-danger-color-default: var(--sgds-red-600);\n  --sgds-danger-color-emphasis: var(--sgds-red-700);\n  --sgds-danger-color-fixed-light: var(--sgds-red-400);\n  --sgds-danger-color-fixed-dark: var(--sgds-red-700);\n  --sgds-danger-border-color-default: var(--sgds-red-500);\n  --sgds-danger-border-color-emphasis: var(--sgds-red-700);\n  --sgds-danger-border-color-muted: var(--sgds-red-300);\n\n  /* Semantic - Warning Colors */\n  --sgds-warning-bg-default: var(--sgds-yellow-200);\n  --sgds-warning-bg-muted: var(--sgds-yellow-100);\n  --sgds-warning-surface-default: var(--sgds-yellow-200);\n  --sgds-warning-surface-emphasis: var(--sgds-yellow-700);\n  --sgds-warning-surface-muted: var(--sgds-yellow-100);\n  --sgds-warning-color-default: var(--sgds-yellow-600);\n  --sgds-warning-color-emphasis: var(--sgds-yellow-700);\n  --sgds-warning-color-fixed-light: var(--sgds-yellow-300);\n  --sgds-warning-color-fixed-dark: var(--sgds-yellow-700);\n  --sgds-warning-border-color-default: var(--sgds-yellow-500);\n  --sgds-warning-border-color-emphasis: var(--sgds-yellow-700);\n  --sgds-warning-border-color-muted: var(--sgds-yellow-300);\n\n  /* Semantic - Neutral Colors */\n  --sgds-neutral-bg-default: var(--sgds-gray-700);\n  --sgds-neutral-bg-muted: var(--sgds-gray-100);\n  --sgds-neutral-surface-default: var(--sgds-gray-800);\n  --sgds-neutral-surface-emphasis: var(--sgds-gray-800);\n  --sgds-neutral-surface-muted: var(--sgds-gray-100);\n  --sgds-neutral-color-default: var(--sgds-gray-600);\n  --sgds-neutral-color-emphasis: var(--sgds-gray-700);\n  --sgds-neutral-color-fixed-light: var(--sgds-gray-400);\n  --sgds-neutral-color-fixed-dark: var(--sgds-gray-700);\n  --sgds-neutral-border-color-default: var(--sgds-gray-500);\n  --sgds-neutral-border-color-emphasis: var(--sgds-gray-700);\n  --sgds-neutral-border-color-subtle: var(--sgds-gray-300);\n\n  /* Semantic - Display Colors */\n  --sgds-display-color-default: var(--sgds-gray-1000);\n  --sgds-display-color-subtle: var(--sgds-gray-800);\n\n  /* Semantic - Header Colors */\n  --sgds-header-color-default: var(--sgds-gray-900);\n  --sgds-header-color-subtle: var(--sgds-gray-800);\n\n  /* Semantic - Body Colors */\n  --sgds-body-color-default: var(--sgds-gray-1000);\n  --sgds-body-color-subtle: var(--sgds-gray-700);\n\n  /* Semantic - Label Colors */\n  --sgds-label-color-default: var(--sgds-gray-900);\n  --sgds-label-color-subtle: var(--sgds-gray-700);\n\n  /* Semantic - Caption Color */\n  --sgds-caption-color: var(--sgds-gray-600);\n\n  /* Semantic - Link Color */\n  --sgds-link-color-default: var(--sgds-blue-600);\n  --sgds-link-color-emphasis: var(--sgds-blue-700);\n\n  /* Semantic - Form Color */\n  --sgds-form-surface-default: var(--sgds-gray-000);\n  --sgds-form-surface-emphasis: var(--sgds-gray-700);\n  --sgds-form-surface-subtle: var(--sgds-gray-400);\n  --sgds-form-surface-muted: var(--sgds-gray-200);\n  --sgds-form-surface-inverse: var(--sgds-gray-900);\n  --sgds-form-surface-fixed-light: var(--sgds-gray-000);\n  --sgds-form-surface-fixed-dark: var(--sgds-gray-900);\n  --sgds-form-color-default: var(--sgds-gray-900);\n  --sgds-form-color-subtle: var(--sgds-gray-700);\n  --sgds-form-color-muted: var(--sgds-gray-300);\n  --sgds-form-color-inverse: var(--sgds-gray-100);\n  --sgds-form-color-fixed-light: var(--sgds-gray-000);\n  --sgds-form-color-fixed-dark: var(--sgds-gray-1100);\n  --sgds-form-primary-surface-default: var(--sgds-product-primary-700);\n  --sgds-form-primary-surface-emphasis: var(--sgds-product-primary-800);\n  --sgds-form-primary-color-default: var(--sgds-product-primary-700);\n  --sgds-form-success-surface-default: var(--sgds-green-700);\n  --sgds-form-success-color-default: var(--sgds-green-600);\n  --sgds-form-success-border-color-default: var(--sgds-green-500);\n  --sgds-form-danger-surface-default: var(--sgds-red-700);\n  --sgds-form-danger-color-default: var(--sgds-red-600);\n  --sgds-form-danger-border-color-default: var(--sgds-red-500);\n}\n',"lifesg-ds-masthead-stylesheet-day");!function(e,r){if("undefined"!=typeof document&&e){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");if(s.type="text/css",r){if(document.getElementById(r))return;s.id=r}n.appendChild(s),s.appendChild(document.createTextNode(e))}}(':root {\n  /* Primitive - Product Primary Color */\n  --sgds-product-primary-100: #f4f2fe;\n  --sgds-product-primary-200: #e1dbfb;\n  --sgds-product-primary-300: #c8bdf7;\n  --sgds-product-primary-400: #a999f3;\n  --sgds-product-primary-500: #8a72ef;\n  --sgds-product-primary-600: #6b4feb;\n  --sgds-product-primary-700: #523abc;\n  --sgds-product-primary-800: #3c2b8a;\n  --sgds-product-primary-900: #2a1e61;\n\n  /* Primitive - Purple Color */\n  --sgds-purple-100: #fbf0fe;\n  --sgds-purple-200: #f2d6fc;\n  --sgds-purple-300: #e6adf9;\n  --sgds-purple-400: #d983f6;\n  --sgds-purple-500: #c94cf2;\n  --sgds-purple-600: #ac1cdb;\n  --sgds-purple-700: #8516a9;\n  --sgds-purple-800: #641180;\n  --sgds-purple-900: #460c5a;\n\n  /* Primitive - Cyan Color */\n  --sgds-cyan-100: #DBf9fd;\n  --sgds-cyan-200: #94edfa;\n  --sgds-cyan-300: #24d5ee;\n  --sgds-cyan-400: #1fb5ca;\n  --sgds-cyan-500: #1993a4;\n  --sgds-cyan-600: #147583;\n  --sgds-cyan-700: #0f5a65;\n  --sgds-cyan-800: #0b434b;\n  --sgds-cyan-900: #082e34;\n\n  /* Primitive - Green Color */\n  --sgds-green-100: #e3f9ed;\n  --sgds-green-200: #b1edcb;\n  --sgds-green-300: #62db96;\n  --sgds-green-400: #16bd5e;\n  --sgds-green-500: #129a4d;\n  --sgds-green-600: #0e7c3d;\n  --sgds-green-700: #0b5e2f;\n  --sgds-green-800: #084523;\n  --sgds-green-900: #063119;\n\n  /* Primitive - Blue Color */\n  --sgds-blue-100: #ecf5fe;\n  --sgds-blue-200: #c8e2fb;\n  --sgds-blue-300: #96c7f7;\n  --sgds-blue-400: #60aaf4;\n  --sgds-blue-500: #1e87ef;\n  --sgds-blue-600: #0269d0;\n  --sgds-blue-700: #0151a0;\n  --sgds-blue-800: #013c77;\n  --sgds-blue-900: #012a54;\n\n  /* Primitive - Yellow Color */\n  --sgds-yellow-100: #fef4cb;\n  --sgds-yellow-200: #fcde63;\n  --sgds-yellow-300: #e5bf29;\n  --sgds-yellow-400: #c2a223;\n  --sgds-yellow-500: #9d841c;\n  --sgds-yellow-600: #7e6917;\n  --sgds-yellow-700: #605111;\n  --sgds-yellow-800: #483c0d;\n  --sgds-yellow-900: #322909;\n\n  /* Primitive - Red Color */\n  --sgds-red-100: #fcf1f1;\n  --sgds-red-200: #f8d7d7;\n  --sgds-red-300: #f1b2b2;\n  --sgds-red-400: #e98b8b;\n  --sgds-red-500: #e05959;\n  --sgds-red-600: #cf2323;\n  --sgds-red-700: #a11b1b;\n  --sgds-red-800: #791414;\n  --sgds-red-900: #550e0e;\n\n  /* Primitive - Gray Color */\n  --sgds-gray-000: #ffffff;\n  --sgds-gray-100: #f3f3f3;\n  --sgds-gray-200: #dfdfdf;\n  --sgds-gray-300: #c6c6c6;\n  --sgds-gray-400: #a5a5a5;\n  --sgds-gray-500: #868686;\n  --sgds-gray-600: #6b6b6b;\n  --sgds-gray-700: #525252;\n  --sgds-gray-800: #3b3b3b;\n  --sgds-gray-900: #2a2a2a;\n  --sgds-gray-1000: #1a1a1a;\n  --sgds-gray-1100: #0e0e0e;\n\n  /* Primitive - Border Width */\n  --sgds-border-width-0: 0px;\n  --sgds-border-width-1: 1px;\n  --sgds-border-width-2: 2px;\n  --sgds-border-width-3: 3px;\n  --sgds-border-width-4: 4px;\n  --sgds-form-border-width-default: var(--sgds-border-width-1);\n  --sgds-form-border-width-thick: var(--sgds-border-width-2);\n\n  /* Primitive - Border Radius */\n  --sgds-border-radius-none: 0px;\n  --sgds-border-radius-xs: 2px;\n  --sgds-border-radius-sm: 4px;\n  --sgds-border-radius-md: 8px;\n  --sgds-border-radius-lg: 12px;\n  --sgds-border-radius-xl: 16px;\n  --sgds-border-radius-2-xl: 24px;\n  --sgds-border-radius-full: 999px;\n  --sgds-form-border-radius-none: var(--sgds-border-radius-none);\n  --sgds-form-border-radius-xs: var(--sgds-border-radius-xs);\n  --sgds-form-border-radius-sm: var(--sgds-border-radius-sm);\n  --sgds-form-border-radius-md: var(--sgds-border-radius-md);\n  --sgds-form-border-radius-full: var(--sgds-border-radius-full);\n\n  /* Primitive - Breakpoint */\n  --sgds-breakpoint-xs: var(--sgds-dimension-320);\n  --sgds-breakpoint-sm: var(--sgds-dimension-512);\n  --sgds-breakpoint-md: var(--sgds-dimension-768);\n  --sgds-breakpoint-lg: var(--sgds-dimension-1024);\n  --sgds-breakpoint-xl: var(--sgds-dimension-1280);\n  --sgds-breakpoint-2-xl: var(--sgds-dimension-1440);\n\n  /* Primitive - Font Family */\n  --sgds-font-family-brand: "Inter", system-ui, sans-serif;\n\n  /* Primitive - Font Weight */\n  --sgds-font-weight-light: 300;\n  --sgds-font-weight-regular: 400;\n  --sgds-font-weight-semibold: 600;\n  --sgds-font-weight-bold: 700;\n\n  /* Primitive - Font Size */\n  --sgds-font-size-1: 0.875rem;\n  --sgds-font-size-2: 1rem;\n  --sgds-font-size-3: 1.25rem;\n  --sgds-font-size-4: 1.5rem;\n  --sgds-font-size-5: 1.75rem;\n  --sgds-font-size-6: 2rem;\n  --sgds-font-size-7: 2.5rem;\n  --sgds-font-size-8: 3rem;\n  --sgds-font-size-9: 3.5rem;\n\n  /* Primitive - Icon Size */\n  --sgds-icon-size-sm: 1rem;\n  --sgds-icon-size-md: 1.25rem;\n  --sgds-icon-size-lg: 1.5rem;\n  --sgds-icon-size-xl: 2rem;\n  --sgds-icon-size-2-xl: 3rem;\n  --sgds-icon-size-3-xl: 4rem;\n\n  /* Primitive - Letter Spacing */\n  --sgds-letter-spacing-tighter: -1px;\n  --sgds-letter-spacing-tight: -0.4px;\n  --sgds-letter-spacing-normal: 0px;\n  --sgds-letter-spacing-wide: 1px;\n  --sgds-letter-spacing-wider: 2px;\n\n  /* Primitive - Line Height */\n  --sgds-line-height-body: 1.5;\n  --sgds-line-height-heading: 1.2;\n  --sgds-line-height-min: 20px;\n\n  /* Primitive - Opacity */\n  --sgds-opacity-0: 0;\n  --sgds-opacity-5: 0.05;\n  --sgds-opacity-10: 0.1;\n  --sgds-opacity-20: 0.2;\n  --sgds-opacity-30: 0.3;\n  --sgds-opacity-40: 0.4;\n  --sgds-opacity-50: 0.5;\n  --sgds-opacity-60: 0.6;\n  --sgds-opacity-70: 0.7;\n  --sgds-opacity-80: 0.8;\n  --sgds-opacity-90: 0.9;\n  --sgds-opacity-100: 1;\n\n  /* Primitive - Paragraph Spacing */\n  --sgds-paragraph-spacing-none: 0;\n  --sgds-paragraph-spacing-sm: 0.5rem;\n  --sgds-paragraph-spacing-md: 1rem;\n  --sgds-paragraph-spacing-lg: 1.5rem;\n  --sgds-paragraph-spacing-xl: 2rem;\n\n  /* Primitive - Spacer */\n  --sgds-spacer-0: 0rem;\n  --sgds-spacer-1: 0.125rem;\n  --sgds-spacer-2: 0.25rem;\n  --sgds-spacer-3: 0.5rem;\n  --sgds-spacer-4: 0.75rem;\n  --sgds-spacer-5: 1rem;\n  --sgds-spacer-6: 1.25rem;\n  --sgds-spacer-7: 1.5rem;\n  --sgds-spacer-8: 2rem;\n  --sgds-spacer-9: 3rem;\n  --sgds-spacer-10: 4rem;\n  --sgds-spacer-11: 6rem;\n  --sgds-spacer-12: 8rem;\n\n  /* Primitive - Dimension */\n  --sgds-dimension-0: 0px;\n  --sgds-dimension-1: 1px;\n  --sgds-dimension-2: 2px;\n  --sgds-dimension-4: 4px;\n  --sgds-dimension-8: 8px;\n  --sgds-dimension-12: 12px;\n  --sgds-dimension-16: 16px;\n  --sgds-dimension-20: 20px;\n  --sgds-dimension-24: 24px;\n  --sgds-dimension-32: 32px;\n  --sgds-dimension-40: 40px;\n  --sgds-dimension-48: 48px;\n  --sgds-dimension-52: 52px;\n  --sgds-dimension-56: 56px;\n  --sgds-dimension-60: 60px;\n  --sgds-dimension-64: 64px;\n  --sgds-dimension-72: 72px;\n  --sgds-dimension-76: 76px;\n  --sgds-dimension-80: 80px;\n  --sgds-dimension-88: 88px;\n  --sgds-dimension-96: 96px;\n  --sgds-dimension-112: 112px;\n  --sgds-dimension-120: 120px;\n  --sgds-dimension-128: 128px;\n  --sgds-dimension-132: 132px;\n  --sgds-dimension-136: 136px;\n  --sgds-dimension-144: 144px;\n  --sgds-dimension-168: 168px;\n  --sgds-dimension-192: 192px;\n  --sgds-dimension-224: 224px;\n  --sgds-dimension-256: 256px;\n  --sgds-dimension-280: 280px;\n  --sgds-dimension-288: 288px;\n  --sgds-dimension-320: 320px;\n  --sgds-dimension-328: 328px;\n  --sgds-dimension-340: 340px;\n  --sgds-dimension-384: 384px;\n  --sgds-dimension-480: 480px;\n  --sgds-dimension-512: 512px;\n  --sgds-dimension-688: 688px;\n  --sgds-dimension-768: 768px;\n  --sgds-dimension-1024: 1024px;\n  --sgds-dimension-1280: 1280px;\n  --sgds-dimension-1440: 1440px;\n\n  /* Semantic - Padding */\n  --sgds-padding-none: var(--sgds-spacer-0);\n  --sgds-padding-3-xs: var(--sgds-spacer-1);\n  --sgds-padding-2-xs: var(--sgds-spacer-2);\n  --sgds-padding-xs: var(--sgds-spacer-3);\n  --sgds-padding-sm: var(--sgds-spacer-4);\n  --sgds-padding-md: var(--sgds-spacer-5);\n  --sgds-padding-lg: var(--sgds-spacer-6);\n  --sgds-padding-xl: var(--sgds-spacer-7);\n  --sgds-padding-2-xl: var(--sgds-spacer-8);\n  --sgds-padding-3-xl: var(--sgds-spacer-9);\n  --sgds-padding-4-xl: var(--sgds-spacer-10);\n  --sgds-padding-5-xl: var(--sgds-spacer-11);\n  --sgds-form-padding-x: var(--sgds-padding-md);\n  --sgds-form-padding-y: var(--sgds-padding-sm);\n  --sgds-form-padding-inline-xs: var(--sgds-padding-3-xs);\n  --sgds-form-padding-inline-sm: var(--sgds-padding-2-xs);\n  --sgds-form-padding-inline-md: var(--sgds-padding-xs);\n  --sgds-form-padding-inline-lg: var(--sgds-padding-sm);\n  --sgds-form-padding-inline-xl: var(--sgds-padding-md);\n\n  --sgds-margin-none: var(--sgds-spacer-0);\n  --sgds-margin-3-xs: var(--sgds-spacer-3);\n  --sgds-margin-2-xs: var(--sgds-spacer-5);\n  --sgds-margin-xs: var(--sgds-spacer-6);\n  --sgds-margin-sm: var(--sgds-spacer-7);\n  --sgds-margin-md: var(--sgds-spacer-8);\n  --sgds-margin-lg: var(--sgds-spacer-9);\n  --sgds-margin-xl: var(--sgds-spacer-10);\n  --sgds-margin-2-xl: var(--sgds-spacer-11);\n  --sgds-margin-3-xl: var(--sgds-spacer-12);\n\n  --sgds-gap-none: var(--sgds-spacer-0);\n  --sgds-gap-2-xs: var(--sgds-spacer-2);\n  --sgds-gap-xs: var(--sgds-spacer-3);\n  --sgds-gap-sm: var(--sgds-spacer-4);\n  --sgds-gap-md: var(--sgds-spacer-5);\n  --sgds-gap-lg: var(--sgds-spacer-6);\n  --sgds-gap-xl: var(--sgds-spacer-7);\n  --sgds-gap-2-xl: var(--sgds-spacer-8);\n  --sgds-form-gap-sm: var(--sgds-gap-2-xs);\n  --sgds-form-gap-md: var(--sgds-gap-xs);\n  --sgds-form-gap-lg: var(--sgds-gap-sm);\n  --sgds-form-gap-xl: var(--sgds-gap-md);\n  --sgds-form-gap-2-xl: var(--sgds-gap-xl);\n\n  --sgds-form-height-3-xs: var(--sgds-dimension-12);\n  --sgds-form-height-2-xs: var(--sgds-dimension-16);\n  --sgds-form-height-xs: var(--sgds-dimension-20);\n  --sgds-form-height-sm: var(--sgds-dimension-24);\n  --sgds-form-height-md: var(--sgds-dimension-32);\n  --sgds-form-height-lg: var(--sgds-dimension-40);\n  --sgds-form-height-xl: var(--sgds-dimension-48);\n  --sgds-form-height-2-xl: var(--sgds-dimension-56);\n\n  --sgds-form-width-3-xs: var(--sgds-dimension-12);\n  --sgds-form-width-2-xs: var(--sgds-dimension-16);\n  --sgds-form-width-xs: var(--sgds-dimension-24);\n  --sgds-form-width-sm: var(--sgds-dimension-32);\n  --sgds-form-width-md: var(--sgds-dimension-40);\n  --sgds-form-width-lg: var(--sgds-dimension-48);\n  --sgds-form-width-xl: var(--sgds-dimension-56);\n  --sgds-form-width-2-xl: var(--sgds-dimension-64);\n  --sgds-form-width-3-xl: var(--sgds-dimension-72);\n  --sgds-form-width-4-xl: var(--sgds-dimension-80);\n\n  /* Semantic - Form Icon Size */\n  --sgds-form-icon-size-sm: var(--sgds-icon-size-sm);\n  --sgds-form-icon-size-md: var(--sgds-icon-size-md);\n  --sgds-form-icon-size-lg: var(--sgds-icon-size-lg);\n\n  --sgds-box-shadow-focus: 0px 0px 0px 4px var(--sgds-blue-400);\n  --sgds-form-box-shadow-focus: var(--sgds-box-shadow-focus);\n\n  /* Masthead and Mainnav Max Width and Padding */\n  --sgds-mainnav-max-width: 1440px;\n  --sgds-mainnav-padding-x: 2rem;\n  --sgds-mainnav-mobile-padding-x: 1.25rem;\n}\n:root.sgds-night-theme {\n  color-scheme: only dark;\n\n  /* Semantic - Default Colors */\n  --sgds-bg-default: var(--sgds-gray-1100);\n  --sgds-bg-alternate: var(--sgds-gray-1000);\n  --sgds-bg-fixed-light: var(--sgds-gray-000);\n  --sgds-bg-fixed-dark: var(--sgds-gray-1100);\n  --sgds-bg-overlay: oklch(from var(--sgds-gray-1100) l c h / 0.4);\n  --sgds-bg-translucent: oklch(from var(--sgds-gray-000) l c h / 0.1);\n  --sgds-bg-translucent-subtle: oklch(from var(--sgds-gray-000) l c h / 0.1);\n  --sgds-bg-transparent: transparent;\n  --sgds-surface-default: var(--sgds-gray-900);\n  --sgds-surface-raised: var(--sgds-gray-800);\n  --sgds-surface-inverse: var(--sgds-gray-000);\n  --sgds-surface-fixed-light: var(--sgds-gray-000);\n  --sgds-surface-fixed-dark: var(--sgds-gray-900);\n  --sgds-color-default: var(--sgds-gray-100);\n  --sgds-color-subtle: var(--sgds-gray-400);\n  --sgds-color-muted: var(--sgds-gray-800);\n  --sgds-color-inverse: var(--sgds-gray-1000);\n  --sgds-color-fixed-light: var(--sgds-gray-100);\n  --sgds-color-fixed-dark: var(--sgds-gray-1000);\n  --sgds-color-transparent: transparent;\n  --sgds-border-color-default: var(--sgds-gray-500);\n  --sgds-border-color-emphasis: var(--sgds-gray-200);\n  --sgds-border-color-muted: var(--sgds-gray-800);\n  --sgds-border-color-fixed-light: var(--sgds-gray-000);\n  --sgds-border-color-fixed-dark: var(--sgds-gray-1000);\n  --sgds-border-color-translucent: oklch(from var(--sgds-gray-000) l c h / 0.1);\n  --sgds-border-color-transparent: transparent;\n\n  /* Semantic - Primary Colors */\n  --sgds-primary-bg-default: var(--sgds-product-primary-600);\n  --sgds-primary-bg-muted: var(--sgds-product-primary-200);\n  --sgds-primary-bg-translucent: oklch(from var(--sgds-product-primary-100) l c h / 0.05);\n  --sgds-primary-surface-default: var(--sgds-product-primary-600);\n  --sgds-primary-surface-emphasis: var(--sgds-product-primary-700);\n  --sgds-primary-surface-muted: var(--sgds-product-primary-200);\n  --sgds-primary-surface-translucent: oklch(from var(--sgds-product-primary-100) l c h / 0.1);\n  --sgds-primary-color-default: var(--sgds-product-primary-400);\n  --sgds-primary-color-emphasis: var(--sgds-product-primary-300);\n  --sgds-primary-color-fixed-light: var(--sgds-product-primary-400);\n  --sgds-primary-color-fixed-dark: var(--sgds-product-primary-700);\n  --sgds-primary-border-color-default: var(--sgds-product-primary-500);\n  --sgds-primary-border-color-emphasis: var(--sgds-product-primary-300);\n  --sgds-primary-border-color-muted: var(--sgds-product-primary-700);\n\n  /* Semantic - Success Colors */\n  --sgds-success-bg-default: var(--sgds-green-600);\n  --sgds-success-bg-muted: var(--sgds-green-200);\n  --sgds-success-surface-default: var(--sgds-green-600);\n  --sgds-success-surface-emphasis: var(--sgds-green-700);\n  --sgds-success-surface-muted: var(--sgds-green-200);\n  --sgds-success-color-default: var(--sgds-green-400);\n  --sgds-success-color-emphasis: var(--sgds-green-300);\n  --sgds-success-color-fixed-light: var(--sgds-green-400);\n  --sgds-success-color-fixed-dark: var(--sgds-green-700);\n  --sgds-success-border-color-default: var(--sgds-green-500);\n  --sgds-success-border-color-emphasis: var(--sgds-green-300);\n  --sgds-success-border-color-muted: var(--sgds-green-700);\n\n  /* Semantic - Danger Colors */\n  --sgds-danger-bg-default: var(--sgds-red-600);\n  --sgds-danger-bg-muted: var(--sgds-red-200);\n  --sgds-danger-surface-default: var(--sgds-red-600);\n  --sgds-danger-surface-emphasis: var(--sgds-red-700);\n  --sgds-danger-surface-muted: var(--sgds-red-200);\n  --sgds-danger-color-default: var(--sgds-red-400);\n  --sgds-danger-color-emphasis: var(--sgds-red-300);\n  --sgds-danger-color-fixed-light: var(--sgds-red-400);\n  --sgds-danger-color-fixed-dark: var(--sgds-red-700);\n  --sgds-danger-border-color-default: var(--sgds-red-500);\n  --sgds-danger-border-color-emphasis: var(--sgds-red-300);\n  --sgds-danger-border-color-subtle: var(--sgds-red-700);\n\n  /* Semantic - Warning Colors */\n  --sgds-warning-bg-default: var(--sgds-yellow-300);\n  --sgds-warning-bg-muted: var(--sgds-yellow-200);\n  --sgds-warning-surface-default: var(--sgds-yellow-300);\n  --sgds-warning-surface-emphasis: var(--sgds-yellow-600);\n  --sgds-warning-surface-muted: var(--sgds-yellow-100);\n  --sgds-warning-color-default: var(--sgds-yellow-300);\n  --sgds-warning-color-emphasis: var(--sgds-yellow-200);\n  --sgds-warning-color-fixed-light: var(--sgds-yellow-300);\n  --sgds-warning-color-fixed-dark: var(--sgds-yellow-700);\n  --sgds-warning-border-color-default: var(--sgds-yellow-500);\n  --sgds-warning-border-color-emphasis: var(--sgds-yellow-300);\n  --sgds-warning-border-color-subtle: var(--sgds-yellow-700);\n\n  /* Semantic - Neutral Colors */\n  --sgds-neutral-bg-default: var(--sgds-gray-600);\n  --sgds-neutral-bg-muted: var(--sgds-gray-200);\n  --sgds-neutral-surface-default: var(--sgds-gray-700);\n  --sgds-neutral-surface-emphasis: var(--sgds-gray-700);\n  --sgds-neutral-surface-muted: var(--sgds-gray-200);\n  --sgds-neutral-color-default: var(--sgds-gray-400);\n  --sgds-neutral-color-emphasis: var(--sgds-gray-300);\n  --sgds-neutral-color-fixed-light: var(--sgds-gray-400);\n  --sgds-neutral-color-fixed-dark: var(--sgds-gray-700);\n  --sgds-neutral-border-color-default: var(--sgds-gray-500);\n  --sgds-neutral-border-color-emphasis: var(--sgds-gray-300);\n  --sgds-neutral-border-color-subtle: var(--sgds-gray-700);\n\n  /* Semantic - Display Colors */\n  --sgds-display-color-default: var(--sgds-gray-000);\n  --sgds-display-color-subtle: var(--sgds-gray-200);\n\n  /* Semantic - Header Colors */\n  --sgds-header-color-default: var(--sgds-gray-100);\n  --sgds-header-color-subtle: var(--sgds-gray-200);\n\n  /* Semantic - Body Colors */\n  --sgds-body-color-default: var(--sgds-gray-000);\n  --sgds-body-color-subtle: var(--sgds-gray-300);\n\n  /* Semantic - Label Colors */\n  --sgds-label-color-default: var(--sgds-gray-100);\n  --sgds-label-color-subtle: var(--sgds-gray-300);\n\n  /* Semantic - Caption Color */\n  --sgds-caption-color: var(--sgds-gray-300);\n\n  /* Semantic - Link Color */\n  --sgds-link-color-default: var(--sgds-blue-400);\n  --sgds-link-color-emphasis: var(--sgds-blue-300);\n\n  /* Semantic - Form Color */\n  --sgds-form-surface-default: var(--sgds-gray-900);\n  --sgds-form-surface-emphasis: var(--sgds-gray-200);\n  --sgds-form-surface-subtle: var(--sgds-gray-500);\n  --sgds-form-surface-muted: var(--sgds-gray-700);\n  --sgds-form-surface-inverse: var(--sgds-gray-000);\n  --sgds-form-surface-fixed-light: var(--sgds-gray-000);\n  --sgds-form-surface-fixed-dark: var(--sgds-gray-900);\n  --sgds-form-color-default: var(--sgds-gray-100);\n  --sgds-form-color-subtle: var(--sgds-gray-300);\n  --sgds-form-color-muted: var(--sgds-gray-700);\n  --sgds-form-color-inverse: var(--sgds-gray-900);\n  --sgds-form-color-fixed-light: var(--sgds-gray-000);\n  --sgds-form-color-fixed-dark: var(--sgds-gray-1100);\n  --sgds-form-primary-surface-default: var(--sgds-product-primary-600);\n  --sgds-form-primary-surface-emphasis: var(--sgds-product-primary-700);\n  --sgds-form-primary-color-default: var(--sgds-product-primary-400);\n  --sgds-form-success-surface-default: var(--sgds-green-600);\n  --sgds-form-success-color-default: var(--sgds-green-500);\n  --sgds-form-success-border-color-default: var(--sgds-green-500);\n  --sgds-form-danger-surface-default: var(--sgds-red-600);\n  --sgds-form-danger-color-default: var(--sgds-red-500);\n  --sgds-form-danger-border-color-default: var(--sgds-red-500);\n}\n',"lifesg-ds-masthead-stylesheet-night");const Ct=h.div`
    // matches Layout.Container
    --sgds-mainnav-padding-x: ${tt["xxl-margin"]}px;
    --sgds-mainnav-mobile-padding-x: ${tt["xxl-margin"]}px;

    ${at.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${tt["xl-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${tt["xl-margin"]}px;
    }

    ${at.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${tt["lg-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${tt["lg-margin"]}px;
    }

    ${at.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${tt["md-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${tt["md-margin"]}px;
    }

    ${at.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${tt["sm-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${tt["sm-margin"]}px;
    }

    ${at.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${tt["xs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${tt["xs-margin"]}px;
    }

    ${at.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${tt["xxs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${tt["xxs-margin"]}px;
    }

    ${e=>e.$stretch?b`
                --sgds-mainnav-max-width: calc(infinity * 1px);
            `:b`
                --sgds-mainnav-max-width: 1440px;
            `}
`,Et=({stretch:r=!1})=>{const n=t(p),s="dark"===(null==n?void 0:n.colourMode);a((()=>{i()||o()}),[]),a((()=>{s?document.documentElement.classList.add(St):document.documentElement.classList.remove(St)}),[s]);const i=()=>document.getElementById(Dt),o=()=>{if(!document.getElementById(Dt)){const e=document.createElement("script");e.id=Dt,e.type="module",e.src=kt,document.head.appendChild(e)}};return e(Ct,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:r})},Dt="lifesg-ds-masthead-script",kt="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component@3/components/Masthead/index.umd.js",St="sgds-night-theme";var Bt={exports:{}};Bt.exports=function(){var e=1e3,r=6e4,n=36e5,s="millisecond",t="second",a="minute",i="hour",o="day",d="week",l="month",g="quarter",c="year",u="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var s=String(e);return!s||s.length>=r?e:""+Array(r+1-s.length).join(n)+e},y={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),s=Math.floor(n/60),t=n%60;return(r<=0?"+":"-")+f(s,2,"0")+":"+f(t,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var s=12*(n.year()-r.year())+(n.month()-r.month()),t=r.clone().add(s,l),a=n-t<0,i=r.clone().add(s+(a?-1:1),l);return+(-(s+(n-t)/(a?t-i:i-t))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:d,d:o,D:u,h:i,m:a,s:t,ms:s,Q:g}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},$=function e(r,n,s){var t;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();x[a]&&(t=a),n&&(x[a]=n,t=a);var i=r.split("-");if(!t&&i.length>1)return e(i[0])}else{var o=r.name;x[o]=r,t=o}return!s&&t&&(v=t),t||!s&&v},C=function(e,r){if(F(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var s=r.match(h);if(s){var t=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],t,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],t,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===m)},f.isSame=function(e,r){var n=C(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return C(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<C(e)},f.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,s=!!E.u(r)||r,g=E.p(e),m=function(e,r){var t=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return s?t:t.endOf(o)},h=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},b=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(g){case c:return s?m(1,0):m(31,11);case l:return s?m(1,p):m(0,p+1);case d:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return m(s?f-x:f+(6-x),p);case o:case u:return h(y+"Hours",0);case i:return h(y+"Minutes",1);case a:return h(y+"Seconds",2);case t:return h(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,d=E.p(e),g="set"+(this.$u?"UTC":""),m=(n={},n[o]=g+"Date",n[u]=g+"Date",n[l]=g+"Month",n[c]=g+"FullYear",n[i]=g+"Hours",n[a]=g+"Minutes",n[t]=g+"Seconds",n[s]=g+"Milliseconds",n)[d],h=d===o?this.$D+(r-this.$W):r;if(d===l||d===c){var b=this.clone().set(u,1);b.$d[m](h),b.init(),this.$d=b.set(u,Math.min(this.$D,b.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(s,g){var u,m=this;s=Number(s);var h=E.p(g),b=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*s)),m)};if(h===l)return this.set(l,this.$M+s);if(h===c)return this.set(c,this.$y+s);if(h===o)return b(1);if(h===d)return b(7);var p=(u={},u[a]=r,u[i]=n,u[t]=e,u)[h]||1,f=this.$d.getTime()+s*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var s=e||"YYYY-MM-DDTHH:mm:ssZ",t=E.z(this),a=this.$H,i=this.$m,o=this.$M,d=n.weekdays,l=n.months,g=n.meridiem,c=function(e,n,t,a){return e&&(e[n]||e(r,s))||t[n].slice(0,a)},u=function(e){return E.s(a%12||12,e,"0")},h=g||function(e,r,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(b,(function(e,s){return s||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return c(n.monthsShort,o,l,3);case"MMMM":return c(l,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return c(n.weekdaysMin,r.$W,d,2);case"ddd":return c(n.weekdaysShort,r.$W,d,3);case"dddd":return d[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(a,i,!0);case"A":return h(a,i,!1);case"m":return String(i);case"mm":return E.s(i,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return t}return null}(e)||t.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(s,u,m){var h,b=this,p=E.p(u),f=C(s),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(b,f)};switch(p){case c:h=x()/12;break;case l:h=x();break;case g:h=x()/3;break;case d:h=(v-y)/6048e5;break;case o:h=(v-y)/864e5;break;case i:h=v/n;break;case a:h=v/r;break;case t:h=v/e;break;default:h=v}return m?h:E.a(h)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),s=$(e,r,!0);return s&&(n.$L=s),n},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return C.prototype=k,[["$ms",s],["$s",t],["$m",a],["$H",i],["$W",o],["$M",l],["$y",c],["$D",u]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var At=V(Bt.exports),zt={exports:{}};zt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,s=/\d\d?/,t=/\d*[^-_:/,()\s\d]+/,a={},i=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],l=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},g=function(e,r){var n,s=a.meridiem;if(s){for(var t=1;t<=24;t+=1)if(e.indexOf(s(t,0,r))>-1){n=t>12;break}}else n=e===(r?"pm":"PM");return n},c={A:[t,function(e){this.afternoon=g(e,!1)}],a:[t,function(e){this.afternoon=g(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[s,o("seconds")],ss:[s,o("seconds")],m:[s,o("minutes")],mm:[s,o("minutes")],H:[s,o("hours")],h:[s,o("hours")],HH:[s,o("hours")],hh:[s,o("hours")],D:[s,o("day")],DD:[n,o("day")],Do:[t,function(e){var r=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var s=1;s<=31;s+=1)r(s).replace(/\[|\]/g,"")===e&&(this.day=s)}],M:[s,o("month")],MM:[n,o("month")],MMM:[t,function(e){var r=l("months"),n=(l("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[t,function(e){var r=l("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(e){this.year=i(e)}],YYYY:[/\d{4}/,o("year")],Z:d,ZZ:d};function u(n){var s,t;s=n,t=a&&a.formats;for(var i=(n=s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,s){var a=s&&s.toUpperCase();return n||t[s]||e[s]||t[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),o=i.length,d=0;d<o;d+=1){var l=i[d],g=c[l],u=g&&g[0],m=g&&g[1];i[d]=m?{regex:u,parser:m}:l.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,s=0;n<o;n+=1){var t=i[n];if("string"==typeof t)s+=t.length;else{var a=t.regex,d=t.parser,l=e.slice(s),g=a.exec(l)[0];d.call(r,g),e=e.replace(g,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(i=e.parseTwoDigitYear);var s=r.prototype,t=s.parse;s.parse=function(e){var r=e.date,s=e.utc,i=e.args;this.$u=s;var o=i[1];if("string"==typeof o){var d=!0===i[2],l=!0===i[3],g=d||l,c=i[2];l&&(c=i[2]),a=this.$locale(),!d&&c&&(a=n.Ls[c]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var s=u(r)(e),t=s.year,a=s.month,i=s.day,o=s.hours,d=s.minutes,l=s.seconds,g=s.milliseconds,c=s.zone,m=new Date,h=i||(t||a?1:m.getDate()),b=t||m.getFullYear(),p=0;t&&!a||(p=a>0?a-1:m.getMonth());var f=o||0,y=d||0,v=l||0,x=g||0;return c?new Date(Date.UTC(b,p,h,f,y,v,x+60*c.offset*1e3)):n?new Date(Date.UTC(b,p,h,f,y,v,x)):new Date(b,p,h,f,y,v,x)}catch(e){return new Date("")}}(r,o,s),this.init(),c&&!0!==c&&(this.$L=this.locale(c).$L),g&&r!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var m=o.length,h=1;h<=m;h+=1){i[1]=o[h-1];var b=n.apply(this,i);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}h===m&&(this.$d=new Date(""))}else t.call(this,e)}}}();var Ot=V(zt.exports),Mt={exports:{}};Mt.exports=function(e,r,n){r.prototype.isBetween=function(e,r,s,t){var a=n(e),i=n(r),o="("===(t=t||"()")[0],d=")"===t[1];return(o?this.isAfter(a,s):!this.isBefore(a,s))&&(d?this.isBefore(i,s):!this.isAfter(i,s))||(o?this.isBefore(a,s):!this.isAfter(a,s))&&(d?this.isAfter(i,s):!this.isBefore(i,s))}};var jt=V(Mt.exports),_t={exports:{}};_t.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Pt=V(_t.exports),Lt={exports:{}};Lt.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var It,Wt,Tt,Nt=V(Lt.exports),Yt={exports:{}},Rt=V(Yt.exports=(It={year:0,month:1,day:2,hour:3,minute:4,second:5},Wt={},function(e,r,n){var s,t=function(e,r,n){void 0===n&&(n={});var s=new Date(e),t=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",s=e+"|"+n,t=Wt[s];return t||(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Wt[s]=t),t}(r,n);return t.formatToParts(s)},a=function(e,r){for(var s=t(e,r),a=[],i=0;i<s.length;i+=1){var o=s[i],d=o.type,l=o.value,g=It[d];g>=0&&(a[g]=parseInt(l,10))}var c=a[3],u=24===c?0:c,m=a[0]+"-"+a[1]+"-"+a[2]+" "+u+":"+a[4]+":"+a[5]+":000",h=+e;return(n.utc(m).valueOf()-(h-=h%1e3))/6e4},i=r.prototype;i.tz=function(e,r){void 0===e&&(e=s);var t=this.utcOffset(),a=this.toDate(),i=a.toLocaleString("en-US",{timeZone:e}),o=Math.round((a-new Date(i))/1e3/60),d=n(i,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-o,!0);if(r){var l=d.utcOffset();d=d.add(t-l,"minute")}return d.$x.$timezone=e,d},i.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),s=t(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return s&&s.value};var o=i.startOf;i.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var s=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(s,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,t){var i=t&&r,o=t||r||s,d=a(+n(),o);if("string"!=typeof e)return n(e).tz(o);var l=function(e,r,n){var s=e-60*r*1e3,t=a(s,n);if(r===t)return[s,r];var i=a(s-=60*(t-r)*1e3,n);return t===i?[s,t]:[e-60*Math.min(t,i)*1e3,Math.max(t,i)]}(n.utc(e,i).valueOf(),d,o),g=l[0],c=l[1],u=n(g).utcOffset(c);return u.$x.$timezone=o,u},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){s=e}}));At.extend(jt),At.extend(Nt),At.extend(Pt),At.extend(Ot),At.extend(Rt),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=At(r).startOf("week");return Ht(n).map((e=>Vt(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Vt(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const s=e.month(n);r.push(At(s))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),s=e.year(n),t=[s.subtract(1,"year"),s];for(let e=1;e<11;e++)t.push(s.add(e,"year"));return t},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+At(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=At(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,s="day")=>!r&&!n||(r&&n?e.isBetween(r,n,s,"[]"):r?e.isSameOrAfter(r,s):e.isSameOrBefore(n,s)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:s}=e.getStartEndDecade(r);return e.isWithinRange(r.year(s).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:s}=e.getStartEndDecade(r);return e.isWithinRange(r.year(s).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,s,t)=>{const a=e.isWithinRange(r,s?At(s):void 0,t?At(t):void 0),i=n&&n.includes(r.format("YYYY-MM-DD"));return!a||!!i}}(Tt||(Tt={}));const Ht=e=>{const r=[e];for(let n=1;n<6;n++){const s=e.add(n,"week");r.push(s)}return r},Vt=e=>{const r=[];for(let n=0;n<7;n++){const s=e.add(n,"day");r.push(s)}return r},Ut=[1,3,5,7,8,10,12],Qt=[4,6,9,11];var qt,Jt,Xt,Gt;!function(e){e.clampDay=(r,n,s)=>{const t=parseInt(r),a=parseInt(n),i=parseInt(s);return 0==t?"1":Ut.includes(a)?Math.min(t,31).toString():Qt.includes(a)?Math.min(t,30).toString():2===a?e.isLeapYear(i)?Math.min(t,29).toString():Math.min(t,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const s=At(e,n);return At(r,n).diff(s,"minute")},e.toDayjs=e=>e?At(e):At(),e.addMinutesToTime=(e,r,n="HH:mm")=>At(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>At(e).isSame(At(r),n)}(qt||(qt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:s,maxDate:t}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!s||!At(e).isBefore(s,"day"))||!(!t||!At(e).isAfter(t,"day")))},e.sanitizeInput=e=>{if(e){const n=r(e);if(At(n,"YYYY-MM-DD",!0).isValid())return n}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,n,s,t]=r;if(n.length<=2||parseInt(n,10)<100)return"";return`${n.padStart(4,"0")}-${s.padStart(2,"0")}-${t.padStart(2,"0")}`}}(Jt||(Jt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Xt||(Xt={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,s,t=8)=>{let a=0;r>n&&(a=Math.floor((r-n)/t));const i=s+a;if(i<e.length){const r=Math.floor(i/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,s=1.2)=>{const t=Math.floor(2*r/(.6*n))*(2/s);if(e.length<=t)return e;const a=Math.floor(.6*t),i=Math.floor(.2*t);return`${e.substring(0,a)}...${e.substring(e.length-i)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const s=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");s.font=n;return s.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:s,unmaskRange:t,maskChar:a="•",maskRegex:i,maskTransformer:o}=n;if(o)return o(e);if(i)return e.replace(i,a);if(s){const{startIndex:n,endIndex:t}=r(s[0],s[1]);return e.substring(0,n)+a.repeat(e.substring(n,t+1).length)+e.substring(t+1)}if(t){const{startIndex:n,endIndex:s}=r(t[0],t[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,s+1)+a.repeat(e.substring(s+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),s=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${s.get(r)}`},e.getMaskedDescription=(e,r,n)=>{if(!e||"masked"!==r||!n)return"";const[s,t]=n,a=s>0,i=t<e.length-1,o=a?e.substring(0,s):"",d=i?e.substring(t+1):"";return a&&i?`Starting with ${o} and ending with ${d}`:a?`Starting with ${o}`:i?`Ending with ${d}`:""}}(Gt||(Gt={}));const Zt=h.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return b`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Kt=h.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Gs["overlay-subtle"]:Gs["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=b`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=b`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=b`
                transition: none;
            `),r}};
`;var ea;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ea||(ea={}));const ra=({show:r=!1,rootId:n,onOverlayClick:t,children:d,backgroundOpacity:l,backgroundBlur:g=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:m,id:h})=>{const[b,p]=i(null),[f,y]=i(),[x]=i((()=>Xt.generate())),$=w(),C=o(),E=o(null),D=d&&s.cloneElement(d,{ref:E}),k=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",S=null!=m?m:f?99999:99998;(e=>{const r=v();a((()=>{if(!r)return;const n={zIndex:e};r.events.emit(ea.Change,n)}),[r,e]),a((()=>{if(!r)return;const n=()=>{const n={zIndex:e};r.events.emit(ea.Change,n)};return null==r||r.events.on(ea.Ready,n),()=>null==r?void 0:r.events.off(ea.Ready,n)}),[r,e])})(S),a((()=>(M(),p(z()),()=>{L(),_().length<1&&(A()&&(W("remove"),N()),j("remove"))})),[]),a((()=>{if(r){const e=O();B(e),P(),A()&&1===_().length&&(T(),W("add"));const r=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(r)}{L(),A()&&_().length<1&&(W("remove"),N());const e=setTimeout((()=>{_().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[r]);const B=e=>{C.current=e,y(e)},A=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),z=()=>document&&n?document.getElementById(n):document?document.body:null,O=()=>_().length>0,M=()=>{if(!document.getElementById(sa)){const e=document.createElement("style");e.id=sa;const r=document.documentElement.clientWidth,n=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${ta} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ta}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${aa} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${ia}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const r=document.body.classList.contains(ta);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ta):document.body.classList.add(ta)},_=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},P=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=[...e,x].join(",")},L=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==x)).join(",")},W=e=>{if(!A())return;const r=document.body.classList.contains(aa);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(aa):document.body.classList.add(aa)},T=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(ia,r)},N=()=>{if(!A())return;const e=document.body.style.getPropertyValue(ia);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},Y=e=>{var r;const n=null===(r=E.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&u&&(e.preventDefault(),t())};return b?I.createPortal(e(Zt,{id:k,"data-testid":k,$show:r,$zIndex:S,children:d&&e(F,{id:$,children:e(Kt,{"data-testid":"overlay-wrapper",$show:r,$stacked:f,$backgroundBlur:g,$disableTransition:c,onClick:Y,children:D})})}),b):null},na=r=>e(x,{children:e(ra,Object.assign({},r))}),sa="lifesg-ds-overlay-stylesheet",ta="lifesg-ds-overlay-open",aa="lifesg-ds-overlay-scroll-lock",ia="--lifesg-ds-overlay-scroll-y",oa=h.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
        object-fit: contain;
    }
`;const da=({src:r,alt:n,className:s,"data-testid":t})=>e("img",{src:r,alt:n||"",className:s,"data-testid":t,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),la=({resources:r,onClick:n,"data-id":s,"data-testid":t="navbar-brand",type:a})=>{const i=!!n,o=i?"primary"===a?`Go to ${r.brandName} homepage`:`Go to ${r.brandName}`:r.brandName,d=i?{role:"link",tabIndex:0,onClick:e=>{n&&(e.preventDefault(),n(e,a))}}:{};return e(oa,Object.assign({"data-id":s,"data-testid":t,$type:a,as:i?"a":"div"},d,{children:e(da,{src:r.logoSrc,alt:o})}))},ga=h.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rt["spacing-24"]};
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
                background-color: ${Gs["bg-hover-neutral"]};
            `}
    }
`,ca=s.forwardRef(((r,n)=>{var{children:s,focusHighlight:t=!0,focusOutline:a="none",type:i="button"}=r,o=R(r,["children","focusHighlight","focusOutline","type"]);return e(ga,Object.assign({ref:n,$outline:a,$highlight:t,type:i},o,{children:s}))})),ua=h.div`
    display: none;

    ${at.MaxWidth.lg} {
        display: flex;
    }
`,ma=h.nav`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${rt["spacing-16"]};
    background-color: ${Gs.bg};
    box-shadow: ${st["xs-subtle"]};
    visibility: ${e=>e.$show?"visible":"hidden"};
    outline: none;

    ${e=>e.$show?b`
            right: 0;
            transition: all 300ms ${Ks["ease-entrance"]};
            transition-delay: 200ms;
        `:b`
        right: -100%;
        transition: all 300ms ${Ks["ease-exit"]};
    `}
    ${e=>{let r="1vh";return e.$viewHeight&&(r=`${e.$viewHeight}px`),b`
            height: calc(${r} * 100);
        `}}

	${at.MaxWidth.lg} {
        width: 75%;
    }

    ${at.MaxWidth.sm} {
        width: 100%;
    }
`,ha=h.div`
    display: flex;
    flex-direction: column;
`,ba=h.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${rt["spacing-40"]} ${rt["spacing-20"]}
        ${rt["spacing-32"]};
`,pa=h(W)`
    height: 1.5rem;
    width: 1.5rem;
`,fa=h(ca)`
    position: absolute;
    right: -${rt["spacing-4"]};
    color: ${Gs.icon};

    &:active,
    &:focus {
        color: ${Gs["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,ya=h.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${Ds["navbar-colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?b`
                  border-bottom: ${et["width-010"]} ${et.solid}
                      ${Gs.border};
              `:b`
                  box-shadow: ${st["xs-subtle"]};
              `}}
`,va=h.nav`
    height: ${e=>{var r;const n=e.$compress?Ds["navbar-compressed-height"](e):Ds["navbar-full-height"](e);return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?`calc(${n} - 1px)`:`${n}`}};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Ks["duration-350"]} ${Ks["ease-standard"]};

    ${at.MaxWidth.lg} {
        height: ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?`calc(${Ds["navbar-mobile-height"](e)} - 1px)`:`${Ds["navbar-mobile-height"](e)}`}};
    }
`,xa=h.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${at.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,wa=h(ca)`
    display: none;

    ${at.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Fa=h(T)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ds["navbar-colour-icon"]};
`,$a=h.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?Ds["navbar-compressed-logo-height"]:Ds["navbar-full-logo-height"]};

    ${at.MaxWidth.lg} {
        height: ${Ds["navbar-mobile-logo-height"]};
    }

    ${at.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,Ca=h.div`
    display: flex;
    background-color: ${Gs.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${at.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${at.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,Ea=s.forwardRef(((s,t)=>{const{show:l,resources:g={},children:c,hideNavBranding:u,onClose:m,onBrandClick:h,drawerLabel:b="Mobile navigation menu",mobileMenuRef:p}=s,[f,y]=i(0),v=o(null),{primary:x,secondary:w}=g,F=()=>{if(window){const e=.01*window.innerHeight;y(e)}};a((()=>(F(),window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)})),[]),d((()=>{if(l){const e=setTimeout((()=>{v.current&&v.current.focus({preventScroll:!0})}),550);return()=>clearTimeout(e)}}),[l]);return e(ua,{ref:t,"data-testid":"drawer",children:e(ma,{ref:v,$show:l,$viewHeight:f,onKeyDown:e=>{l&&"Escape"===e.key&&(e.preventDefault(),null==m||m(),setTimeout((()=>{var e;null===(e=null==p?void 0:p.current)||void 0===e||e.focus()}),300))},tabIndex:l?0:-1,"aria-label":b,children:r(ha,{children:[r(ba,{children:[e($a,{"data-id":"drawer-brand-container",children:!u&&r(n,{children:[x&&e(la,{resources:x,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),w&&r(n,{children:[e(Ca,{}),e(la,{resources:w,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e(fa,{onClick:m,focusHighlight:!1,"aria-label":"Close nav menu",children:e(pa,{})})]}),c]})})})}));var Da=function(e,r,n,s){for(var t=e.length,a=n+(s?1:-1);s?a--:++a<t;)if(r(e[a],a,e))return a;return-1},ka=Dr;var Sa=function(e){var r=this.__data__,n=r.delete(e);return this.size=r.size,n};var Ba=function(e){return this.__data__.get(e)};var Aa=function(e){return this.__data__.has(e)},za=Dr,Oa=kr,Ma=Qr;var ja=function(e,r){var n=this.__data__;if(n instanceof za){var s=n.__data__;if(!Oa||s.length<199)return s.push([e,r]),this.size=++n.size,this;n=this.__data__=new Ma(s)}return n.set(e,r),this.size=n.size,this},_a=Dr,Pa=function(){this.__data__=new ka,this.size=0},La=Sa,Ia=Ba,Wa=Aa,Ta=ja;function Na(e){var r=this.__data__=new _a(e);this.size=r.size}Na.prototype.clear=Pa,Na.prototype.delete=La,Na.prototype.get=Ia,Na.prototype.has=Wa,Na.prototype.set=Ta;var Ya=Na;var Ra=Qr,Ha=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Va=function(e){return this.__data__.has(e)};function Ua(e){var r=-1,n=null==e?0:e.length;for(this.__data__=new Ra;++r<n;)this.add(e[r])}Ua.prototype.add=Ua.prototype.push=Ha,Ua.prototype.has=Va;var Qa=function(e,r){return e.has(r)},qa=Ua,Ja=function(e,r){for(var n=-1,s=null==e?0:e.length;++n<s;)if(r(e[n],n,e))return!0;return!1},Xa=Qa;var Ga=function(e,r,n,s,t,a){var i=1&n,o=e.length,d=r.length;if(o!=d&&!(i&&d>o))return!1;var l=a.get(e),g=a.get(r);if(l&&g)return l==r&&g==e;var c=-1,u=!0,m=2&n?new qa:void 0;for(a.set(e,r),a.set(r,e);++c<o;){var h=e[c],b=r[c];if(s)var p=i?s(b,h,c,r,e,a):s(h,b,c,e,r,a);if(void 0!==p){if(p)continue;u=!1;break}if(m){if(!Ja(r,(function(e,r){if(!Xa(m,r)&&(h===e||t(h,e,n,s,a)))return m.push(r)}))){u=!1;break}}else if(h!==b&&!t(h,b,n,s,a)){u=!1;break}}return a.delete(e),a.delete(r),u};var Za=function(e){var r=-1,n=Array(e.size);return e.forEach((function(e,s){n[++r]=[s,e]})),n};var Ka=X.Uint8Array,ei=dr,ri=Ga,ni=Za,si=function(e){var r=-1,n=Array(e.size);return e.forEach((function(e){n[++r]=e})),n},ti=G?G.prototype:void 0,ai=ti?ti.valueOf:void 0;var ii=function(e,r,n,s,t,a,i){switch(n){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new Ka(e),new Ka(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ei(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=ni;case"[object Set]":var d=1&s;if(o||(o=si),e.size!=r.size&&!d)return!1;var l=i.get(e);if(l)return l==r;s|=2,i.set(e,r);var g=ri(o(e),o(r),s,t,a,i);return i.delete(e),g;case"[object Symbol]":if(ai)return ai.call(e)==ai.call(r)}return!1};var oi=function(e,r){for(var n=-1,s=r.length,t=e.length;++n<s;)e[t+n]=r[n];return e},di=oi,li=U;var gi=function(e,r,n){var s=r(e);return li(e)?s:di(s,n(e))};var ci=function(e,r){for(var n=-1,s=null==e?0:e.length,t=0,a=[];++n<s;){var i=e[n];r(i,n,e)&&(a[t++]=i)}return a},ui=function(){return[]},mi=Object.prototype.propertyIsEnumerable,hi=Object.getOwnPropertySymbols,bi=hi?function(e){return null==e?[]:(e=Object(e),ci(hi(e),(function(r){return mi.call(e,r)})))}:ui;var pi=function(e,r){for(var n=-1,s=Array(e);++n<e;)s[n]=r(n);return s},fi=de,yi=le;var vi=function(e){return yi(e)&&"[object Arguments]"==fi(e)},xi=le,wi=Object.prototype,Fi=wi.hasOwnProperty,$i=wi.propertyIsEnumerable,Ci=vi(function(){return arguments}())?vi:function(e){return xi(e)&&Fi.call(e,"callee")&&!$i.call(e,"callee")},Ei={exports:{}};var Di=function(){return!1};!function(e,r){var n=X,s=Di,t=r&&!r.nodeType&&r,a=t&&e&&!e.nodeType&&e,i=a&&a.exports===t?n.Buffer:void 0,o=(i?i.isBuffer:void 0)||s;e.exports=o}(Ei,Ei.exports);var ki=Ei.exports,Si=/^(?:0|[1-9]\d*)$/;var Bi=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&Si.test(e))&&e>-1&&e%1==0&&e<r};var Ai=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},zi=de,Oi=Ai,Mi=le,ji={};ji["[object Float32Array]"]=ji["[object Float64Array]"]=ji["[object Int8Array]"]=ji["[object Int16Array]"]=ji["[object Int32Array]"]=ji["[object Uint8Array]"]=ji["[object Uint8ClampedArray]"]=ji["[object Uint16Array]"]=ji["[object Uint32Array]"]=!0,ji["[object Arguments]"]=ji["[object Array]"]=ji["[object ArrayBuffer]"]=ji["[object Boolean]"]=ji["[object DataView]"]=ji["[object Date]"]=ji["[object Error]"]=ji["[object Function]"]=ji["[object Map]"]=ji["[object Number]"]=ji["[object Object]"]=ji["[object RegExp]"]=ji["[object Set]"]=ji["[object String]"]=ji["[object WeakMap]"]=!1;var _i=function(e){return Mi(e)&&Oi(e.length)&&!!ji[zi(e)]};var Pi=function(e){return function(r){return e(r)}},Li={exports:{}};!function(e,r){var n=Q,s=r&&!r.nodeType&&r,t=s&&e&&!e.nodeType&&e,a=t&&t.exports===s&&n.process,i=function(){try{var e=t&&t.require&&t.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i}(Li,Li.exports);var Ii=Li.exports,Wi=_i,Ti=Pi,Ni=Ii&&Ii.isTypedArray,Yi=Ni?Ti(Ni):Wi,Ri=pi,Hi=Ci,Vi=U,Ui=ki,Qi=Bi,qi=Yi,Ji=Object.prototype.hasOwnProperty;var Xi=function(e,r){var n=Vi(e),s=!n&&Hi(e),t=!n&&!s&&Ui(e),a=!n&&!s&&!t&&qi(e),i=n||s||t||a,o=i?Ri(e.length,String):[],d=o.length;for(var l in e)!r&&!Ji.call(e,l)||i&&("length"==l||t&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Qi(l,d))||o.push(l);return o},Gi=Object.prototype;var Zi=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Gi)};var Ki=function(e,r){return function(n){return e(r(n))}}(Object.keys,Object),eo=Zi,ro=Ki,no=Object.prototype.hasOwnProperty;var so=function(e){if(!eo(e))return ro(e);var r=[];for(var n in Object(e))no.call(e,n)&&"constructor"!=n&&r.push(n);return r},to=Fe,ao=Ai;var io=Xi,oo=so,lo=function(e){return null!=e&&ao(e.length)&&!to(e)};var go=function(e){return lo(e)?io(e):oo(e)},co=gi,uo=bi,mo=go;var ho=function(e){return co(e,mo,uo)},bo=Object.prototype.hasOwnProperty;var po=function(e,r,n,s,t,a){var i=1&n,o=ho(e),d=o.length;if(d!=ho(r).length&&!i)return!1;for(var l=d;l--;){var g=o[l];if(!(i?g in r:bo.call(r,g)))return!1}var c=a.get(e),u=a.get(r);if(c&&u)return c==r&&u==e;var m=!0;a.set(e,r),a.set(r,e);for(var h=i;++l<d;){var b=e[g=o[l]],p=r[g];if(s)var f=i?s(p,b,g,r,e,a):s(b,p,g,e,r,a);if(!(void 0===f?b===p||t(b,p,n,s,a):f)){m=!1;break}h||(h="constructor"==g)}if(m&&!h){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(m=!1)}return a.delete(e),a.delete(r),m},fo=Ne(X,"DataView"),yo=kr,vo=Ne(X,"Promise"),xo=Ne(X,"Set"),wo=Ne(X,"WeakMap"),Fo=de,$o=ke,Co="[object Map]",Eo="[object Promise]",Do="[object Set]",ko="[object WeakMap]",So="[object DataView]",Bo=$o(fo),Ao=$o(yo),zo=$o(vo),Oo=$o(xo),Mo=$o(wo),jo=Fo;(fo&&jo(new fo(new ArrayBuffer(1)))!=So||yo&&jo(new yo)!=Co||vo&&jo(vo.resolve())!=Eo||xo&&jo(new xo)!=Do||wo&&jo(new wo)!=ko)&&(jo=function(e){var r=Fo(e),n="[object Object]"==r?e.constructor:void 0,s=n?$o(n):"";if(s)switch(s){case Bo:return So;case Ao:return Co;case zo:return Eo;case Oo:return Do;case Mo:return ko}return r});var _o=Ya,Po=Ga,Lo=ii,Io=po,Wo=jo,To=U,No=ki,Yo=Yi,Ro="[object Arguments]",Ho="[object Array]",Vo="[object Object]",Uo=Object.prototype.hasOwnProperty;var Qo=function(e,r,n,s,t,a){var i=To(e),o=To(r),d=i?Ho:Wo(e),l=o?Ho:Wo(r),g=(d=d==Ro?Vo:d)==Vo,c=(l=l==Ro?Vo:l)==Vo,u=d==l;if(u&&No(e)){if(!No(r))return!1;i=!0,g=!1}if(u&&!g)return a||(a=new _o),i||Yo(e)?Po(e,r,n,s,t,a):Lo(e,r,d,n,s,t,a);if(!(1&n)){var m=g&&Uo.call(e,"__wrapped__"),h=c&&Uo.call(r,"__wrapped__");if(m||h){var b=m?e.value():e,p=h?r.value():r;return a||(a=new _o),t(b,p,n,s,a)}}return!!u&&(a||(a=new _o),Io(e,r,n,s,t,a))},qo=le;var Jo=function e(r,n,s,t,a){return r===n||(null==r||null==n||!qo(r)&&!qo(n)?r!=r&&n!=n:Qo(r,n,s,t,e,a))},Xo=Ya,Go=Jo;var Zo=function(e,r,n,s){var t=n.length,a=t,i=!s;if(null==e)return!a;for(e=Object(e);t--;){var o=n[t];if(i&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++t<a;){var d=(o=n[t])[0],l=e[d],g=o[1];if(i&&o[2]){if(void 0===l&&!(d in e))return!1}else{var c=new Xo;if(s)var u=s(l,g,d,e,r,c);if(!(void 0===u?Go(g,l,3,s,c):u))return!1}}return!0},Ko=ye;var ed=function(e){return e==e&&!Ko(e)},rd=ed,nd=go;var sd=function(e){for(var r=nd(e),n=r.length;n--;){var s=r[n],t=e[s];r[n]=[s,t,rd(t)]}return r};var td=function(e,r){return function(n){return null!=n&&(n[e]===r&&(void 0!==r||e in Object(n)))}},ad=Zo,id=sd,od=td;var dd=function(e,r){return null!=e&&r in Object(e)},ld=mn,gd=Ci,cd=U,ud=Bi,md=Ai,hd=bn;var bd=function(e,r,n){for(var s=-1,t=(r=ld(r,e)).length,a=!1;++s<t;){var i=hd(r[s]);if(!(a=null!=e&&n(e,i)))break;e=e[i]}return a||++s!=t?a:!!(t=null==e?0:e.length)&&md(t)&&ud(i,t)&&(cd(e)||gd(e))},pd=dd,fd=bd;var yd=Jo,vd=xn,xd=function(e,r){return null!=e&&fd(e,r,pd)},wd=fe,Fd=ed,$d=td,Cd=bn;var Ed=function(e){return function(r){return null==r?void 0:r[e]}},Dd=yn;var kd=Ed,Sd=function(e){return function(r){return Dd(r,e)}},Bd=fe,Ad=bn;var zd=function(e){var r=id(e);return 1==r.length&&r[0][2]?od(r[0][0],r[0][1]):function(n){return n===e||ad(n,e,r)}},Od=function(e,r){return wd(e)&&Fd(r)?$d(Cd(e),r):function(n){var s=vd(n,e);return void 0===s&&s===r?xd(n,e):yd(r,s,3)}},Md=function(e){return e},jd=U,_d=function(e){return Bd(e)?kd(Ad(e)):Sd(e)};var Pd=/\s/;var Ld=function(e){for(var r=e.length;r--&&Pd.test(e.charAt(r)););return r},Id=/^\s+/;var Wd=function(e){return e?e.slice(0,Ld(e)+1).replace(Id,""):e},Td=ye,Nd=ue,Yd=/^[-+]0x[0-9a-f]+$/i,Rd=/^0b[01]+$/i,Hd=/^0o[0-7]+$/i,Vd=parseInt;var Ud=function(e){if("number"==typeof e)return e;if(Nd(e))return NaN;if(Td(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Td(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Wd(e);var n=Rd.test(e);return n||Hd.test(e)?Vd(e.slice(2),n?2:8):Yd.test(e)?NaN:+e},Qd=1/0;var qd=function(e){return e?(e=Ud(e))===Qd||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Jd=Da,Xd=function(e){return"function"==typeof e?e:null==e?Md:"object"==typeof e?jd(e)?Od(e[0],e[1]):zd(e):_d(e)},Gd=function(e){var r=qd(e),n=r%1;return r==r?n?r-n:r:0},Zd=Math.max;var Kd=V((function(e,r,n){var s=null==e?0:e.length;if(!s)return-1;var t=null==n?0:Gd(n);return t<0&&(t=Zd(s+t,0)),Jd(e,Xd(r),t)}));const el=h.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,rl=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,nl=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: ${rl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sl=h(nl)`
    animation-delay: -0.45s;
`,tl=h(nl)`
    animation-delay: -0.3s;
`,al=h(nl)`
    animation-delay: -0.15s;
`,il=h.button`
    padding: ${rt["spacing-8"]} ${rt["spacing-16"]};
    min-width: 4rem;
    border: ${et["width-010"]} ${et.solid} transparent;
    transition: all ${Ks["duration-250"]} ${Ks["ease-default"]};
    border-radius: ${ys};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${Gs.bg};
                    border-color: ${e.$buttonIsDanger?Gs["border-error-strong"]:Fs};

                    color: ${e.$buttonIsDanger?Gs["text-error"]:$s};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Gs["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return b`
                    background-color: ${Gs.bg};
                    border-color: ${Gs.border};

                    color: ${e.$buttonIsDanger?Gs["text-error"]:Cs};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Gs["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return b`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Gs["text-error"]:Es};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Gs["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return b`
                    background-color: ${Gs["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Gs["text-disabled"]};
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?Gs["bg-error-strong"]:vs};

                    ${at.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${ws};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Gs["bg-error-strong-hover"]:xs};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return b`
                    height: 2.5rem;
                    ${Zs["body-md-semibold"]}

                    ${at.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return b`
                    height: 4rem;
                    ${Zs["heading-md-semibold"]}

                    ${at.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return b`
                    height: 3rem;
                    ${Zs["heading-xs-semibold"]}

                    ${at.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ol=h((({color:n,className:s,size:t})=>r(el,{className:s,$size:t,$color:n,"data-testid":"component-loading-spinner",children:[e(nl,{id:"inner1"}),e(sl,{id:"inner2"}),e(tl,{id:"inner3"}),e(al,{id:"inner4"})]})))`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,dl=e=>s.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),ll=(n,s)=>{const{children:t,disabled:a=!1,loading:i=!1,styleType:o="default",danger:d=!1,focusableWhenDisabled:l=!1,onClick:g}=n,c=R(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),u={$buttonStyle:a?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:d};return r(il,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:a&&!l,"aria-disabled":a,"aria-busy":i,onClick:a?void 0:g},u,c,{children:[i&&e(ol,{$hasChildren:dl(t)}),e("span",{children:t})]}))};ll.displayName="Button.Default";const gl=(n,s)=>{const{children:t,disabled:a=!1,loading:i=!1,styleType:o="default",danger:d=!1,focusableWhenDisabled:l=!1,onClick:g}=n,c=R(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),u={$buttonStyle:a?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:d};return r(il,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:a&&!l,"aria-disabled":a,"aria-busy":i,onClick:a?void 0:g},u,c,{children:[i&&e(ol,{$hasChildren:dl(t)}),e("span",{children:t})]}))};gl.displayName="Button.Small";const cl=(n,s)=>{const{children:t,disabled:a=!1,loading:i=!1,styleType:o="default",danger:d=!1,focusableWhenDisabled:l=!1,onClick:g}=n,c=R(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),u={$buttonStyle:a?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:d};return r(il,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:a&&!l,"aria-disabled":a,"aria-busy":i,onClick:a?void 0:g},u,c,{children:[i&&e(ol,{$hasChildren:dl(t)}),e("span",{children:t})]}))};cl.displayName="Button.Large";const ul={Default:s.forwardRef(ll),Small:s.forwardRef(gl),Large:s.forwardRef(cl)},ml=e=>b`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,hl=(e,r,n=!1)=>b`
        ${Zs[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,bl=e=>{if(e)return b`
            ${ml(e)}
        `},pl=(e,r,n,s,t)=>b`
    ${hl(e,r||"regular",s)}
    ${((e=!1,r=!1,n)=>r?b`
            display: block;
            ${bl(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${bl(n)}
        `)(n,s,t)}
    color: ${Gs.text};
`,fl=h.div`
    ${e=>pl(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,yl=h.a`
    ${e=>{var r;return b`
        ${hl(e.$textStyle,e.$weight||"regular")}
        color: ${Gs.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Gs["text-hover"]};
        }
    `}}
`,vl=h(N)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var xl;!function(n){const t=(r,n,t)=>{const a=(s,t)=>{var{weight:a,inline:i,paragraph:o,maxLines:d}=s,l=R(s,["weight","inline","paragraph","maxLines"]);return e(fl,Object.assign({ref:t,as:i?"span":r,$textStyle:n,$weight:a,$inline:i,$paragraph:o,$maxLines:d},l))};return a.displayName=`Typography.${t}`,s.forwardRef(a)};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const a=(r,n)=>{const t=(n,s)=>{var{weight:t,inline:a,paragraph:i,maxLines:o}=n,d=R(n,["weight","inline","paragraph","maxLines"]);return e(fl,Object.assign({ref:s,as:a?"span":"p",$textStyle:r,$weight:t,$inline:a,$paragraph:i,$maxLines:o},d))};return t.displayName=`Typography.${n}`,s.forwardRef(t)};n.BodyBL=a("body-baseline","BodyBL"),n.BodyMD=a("body-md","BodyMD"),n.BodySM=a("body-sm","BodySM"),n.BodyXS=a("body-xs","BodyXS");const i=(n,t)=>{const a=(s,t)=>{var{weight:a,children:i,external:o,underlineStyle:d="underline"}=s,l=R(s,["weight","children","external","underlineStyle"]);return r(yl,Object.assign({ref:t,$textStyle:n,$weight:a,$underlineStyle:d},l,{children:[i,o&&e(vl,{})]}))};return a.displayName=`Typography.${t}`,s.forwardRef(a)};n.LinkBL=i("body-baseline","LinkBL"),n.LinkMD=i("body-md","LinkMD"),n.LinkSM=i("body-sm","LinkSM"),n.LinkXS=i("body-xs","LinkXS")}(xl||(xl={}));const wl=h.ul`
    display: flex;
    list-style: none;
    margin-left: ${rt["spacing-64"]};
    flex-shrink: 0;

    ${at.MaxWidth.lg} {
        display: none;
    }
`,Fl=h.ul`
    display: none;

    ${at.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${rt["spacing-64"]};
        flex-shrink: 0;
    }
`,$l=h.ul`
    display: none;
    list-style: none;

    ${at.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${rt["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${at.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Cl=h.li`
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-right: ${rt["spacing-16"]};
    }

    ${at.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${rt["spacing-16"]};
        justify-content: center;

        &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?rt["spacing-16"]:"0"};
        }
    }

    ${at.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return b`
                    padding: 0 ${rt["spacing-16"]};
                `}}
    }
`,El=h(ul.Small)`
    ${at.MaxWidth.lg} {
        width: 100%;
    }
`,Dl=h.div`
    display: none;

    ${at.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${rt["spacing-40"]};
    }
`,kl=h(xl.BodyMD)`
    margin-bottom: ${rt["spacing-8"]};
`,Sl=h.div`
    display: flex;
`,Bl=h.a`
    &:not(:last-child) {
        margin-right: ${rt["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${at.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${at.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,Al=({actionButtons:s,mobile:t=!1,onActionButtonClick:a})=>{const i=e=>{e.stopPropagation()},o=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),a(r,e)},d=(n,s)=>{const t=n?(e=>{const r=Kd(e,(e=>"download"===e.type));if(r>-1){const n=[...e],s=n.splice(r,1);return[...n,s[0]]}return e})(s):s;return t.map(((s,t)=>{let a;switch(s.type){case"download":a=n?(d=s.args,r(Dl,{children:[e(kl,{weight:"semibold",children:d&&d.children||"Download the app"}),r(Sl,{children:[e(Bl,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(Bl,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(El,Object.assign({},s.args,{type:"button",onClick:o(s),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const r=s.args["data-testid"]?`action-button__${s.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${t+1}`;a=e(El,Object.assign({},s.args,{type:"button",onClick:o(s),"data-testid":r}));break}case"component":{const e=s.args;a=e&&e.render||null;break}default:a=null}var d;if(a)return e(Cl,{$mobile:n,children:a},`action-button-${t+1}`)}))};if(s){const a=(null==s?void 0:s.mobile)||s.desktop,i=a.filter((e=>!!e.uncollapsible)),o=a.filter((e=>!e.uncollapsible));return t?e(n,{children:o.length>0&&e($l,{children:d(t,o)})}):r(n,{children:[i.length>0&&e(Fl,{children:d(!1,i)}),s.desktop.length>0&&e(wl,{children:d(t,s.desktop)})]})}return e(n,{})};var zl;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const r=e;return!r.itemType||"link"===r.itemType}}(zl||(zl={}));var Ol,Ml={exports:{}};Ol=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return o(e).some((function(e){var n=e.inverse,s="all"===e.type||r.type===e.type;if(s&&n||!s&&!n)return!1;var t=e.expressions.every((function(e){var n=e.feature,s=e.modifier,t=e.value,a=r[n];if(!a)return!1;switch(n){case"orientation":case"scan":return a.toLowerCase()===t.toLowerCase();case"width":case"height":case"device-width":case"device-height":t=g(t),a=g(a);break;case"resolution":t=l(t),a=l(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":t=d(t),a=d(a);break;case"grid":case"color":case"color-index":case"monochrome":t=parseInt(t,10)||1,a=parseInt(a,10)||0}switch(s){case"min":return a>=t;case"max":return a<=t;default:return a===t}}));return t&&!n||!t&&n}))},r.parse=o;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,t=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function o(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(n),a=r[1],i=r[2],o=r[3]||"",d={};return d.inverse=!!a&&"not"===a.toLowerCase(),d.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],d.expressions=o.map((function(e){var r=e.match(s),n=r[1].toLowerCase().match(t);return{modifier:n[1],feature:n[2],value:r[2]}})),d}))}function d(e){var r,n=Number(e);return n||(n=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),n}function l(e){var r=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function g(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,n)=>{n.r(r),n.d(r,{default:()=>o});var s=/[A-Z]/g,t=/^ms-/,a={};function i(e){return"-"+e.toLowerCase()}const o=function(e){if(a.hasOwnProperty(e))return a[e];var r=e.replace(s,i);return a[e]=t.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,n)=>{var s=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,t="undefined"!=typeof window?window.matchMedia:null;function a(e,r,n){var a=this;if(t&&!n){var i=t.call(window,e);this.matches=i.matches,this.media=i.media,i.addListener(o)}else this.matches=s(e,r),this.media=e;function o(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(o)}}e.exports=function(e,r,n){return new a(e,r,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(e){s[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var a,i,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),d=1;d<arguments.length;d++){for(var l in a=Object(arguments[d]))n.call(a,l)&&(o[l]=a[l]);if(r){i=r(a);for(var g=0;g<i.length;g++)s.call(a,i[g])&&(o[i[g]]=a[i[g]])}}return o}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,n)=>{var s,t=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},i=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function o(e,r,n,o,d){for(var l in e)if(i(e,l)){var g;try{if("function"!=typeof e[l]){var c=Error((o||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}g=e[l](r,l,o,n,null,t)}catch(e){g=e}if(!g||g instanceof Error||s((o||"React class")+": type specification of "+n+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof g+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),g instanceof Error&&!(g.message in a)){a[g.message]=!0;var u=d?d():"";s("Failed "+n+" type: "+g.message+(null!=u?u:""))}}}s=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},o.resetWarningCache=function(){a={}},e.exports=o},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,n)=>{var s,t=n(/*! react-is */"./node_modules/react-is/index.js"),a=n(/*! object-assign */"./node_modules/object-assign/index.js"),i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),d=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function l(){return null}s=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var n="function"==typeof Symbol&&Symbol.iterator,g="<<anonymous>>",c={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:h(l),arrayOf:function(e){return h((function(r,n,s,t,a){if("function"!=typeof e)return new m("Property `"+a+"` of component `"+s+"` has invalid PropType notation inside arrayOf.");var o=r[n];if(!Array.isArray(o))return new m("Invalid "+t+" `"+a+"` of type `"+y(o)+"` supplied to `"+s+"`, expected an array.");for(var d=0;d<o.length;d++){var l=e(o,d,s,t,a+"["+d+"]",i);if(l instanceof Error)return l}return null}))},element:h((function(r,n,s,t,a){var i=r[n];return e(i)?null:new m("Invalid "+t+" `"+a+"` of type `"+y(i)+"` supplied to `"+s+"`, expected a single ReactElement.")})),elementType:h((function(e,r,n,s,a){var i=e[r];return t.isValidElementType(i)?null:new m("Invalid "+s+" `"+a+"` of type `"+y(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(r,n,s,t,a){if(!(r[n]instanceof e)){var i=e.name||g;return new m("Invalid "+t+" `"+a+"` of type `"+((o=r[n]).constructor&&o.constructor.name?o.constructor.name:g)+"` supplied to `"+s+"`, expected instance of `"+i+"`.")}var o;return null}))},node:h((function(e,r,n,s,t){return f(e[r])?null:new m("Invalid "+s+" `"+t+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(r,n,s,t,a){if("function"!=typeof e)return new m("Property `"+a+"` of component `"+s+"` has invalid PropType notation inside objectOf.");var d=r[n],l=y(d);if("object"!==l)return new m("Invalid "+t+" `"+a+"` of type `"+l+"` supplied to `"+s+"`, expected an object.");for(var g in d)if(o(d,g)){var c=e(d,g,s,t,a+"."+g,i);if(c instanceof Error)return c}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(r,n,s,t,a){for(var i=r[n],o=0;o<e.length;o++)if(u(i,e[o]))return null;var d=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new m("Invalid "+t+" `"+a+"` of value `"+String(i)+"` supplied to `"+s+"`, expected one of "+d+".")})):(s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(e){if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var r=0;r<e.length;r++){var n=e[r];if("function"!=typeof n)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+r+"."),l}return h((function(r,n,s,t,a){for(var d=[],l=0;l<e.length;l++){var g=(0,e[l])(r,n,s,t,a,i);if(null==g)return null;g.data&&o(g.data,"expectedType")&&d.push(g.data.expectedType)}return new m("Invalid "+t+" `"+a+"` supplied to `"+s+"`"+(d.length>0?", expected one of type ["+d.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(r,n,s,t,a){var o=r[n],d=y(o);if("object"!==d)return new m("Invalid "+t+" `"+a+"` of type `"+d+"` supplied to `"+s+"`, expected `object`.");for(var l in e){var g=e[l];if("function"!=typeof g)return p(s,t,a,l,v(g));var c=g(o,l,s,t,a+"."+l,i);if(c)return c}return null}))},exact:function(e){return h((function(r,n,s,t,d){var l=r[n],g=y(l);if("object"!==g)return new m("Invalid "+t+" `"+d+"` of type `"+g+"` supplied to `"+s+"`, expected `object`.");var c=a({},r[n],e);for(var u in c){var h=e[u];if(o(e,u)&&"function"!=typeof h)return p(s,t,d,u,v(h));if(!h)return new m("Invalid "+t+" `"+d+"` key `"+u+"` supplied to `"+s+"`.\nBad object: "+JSON.stringify(r[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=h(l,u,s,t,d+"."+u,i);if(b)return b}return null}))}};function u(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function m(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function h(e){var n={},t=0;function a(a,o,d,l,c,u,h){if(l=l||g,u=u||d,h!==i){if(r){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}if("undefined"!=typeof console){var p=l+":"+d;!n[p]&&t<3&&(s("You are manually calling a React.PropTypes validation function for the `"+u+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[p]=!0,t++)}}return null==o[d]?a?null===o[d]?new m("The "+c+" `"+u+"` is marked as required in `"+l+"`, but its value is `null`."):new m("The "+c+" `"+u+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(o,d,l,c,u)}var o=a.bind(null,!1);return o.isRequired=a.bind(null,!0),o}function b(e){return h((function(r,n,s,t,a,i){var o=r[n];return y(o)!==e?new m("Invalid "+t+" `"+a+"` of type `"+v(o)+"` supplied to `"+s+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,r,n,s,t){return new m((e||"React class")+": "+r+" type `"+n+"."+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+t+"`.")}function f(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(f);if(null===r||e(r))return!0;var s=function(e){var r=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!s)return!1;var t,a=s.call(r);if(s!==r.entries){for(;!(t=a.next()).done;)if(!f(t.value))return!1}else for(;!(t=a.next()).done;){var i=t.value;if(i&&!f(i[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return m.prototype=Error.prototype,c.checkPropTypes=d,c.resetWarningCache=d.resetWarningCache,c.PropTypes=c,c}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,n)=>{var s=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(s.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,s=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:var m=e.type;switch(m){case l:case g:case t:case i:case a:case u:return m;default:var p=m&&m.$$typeof;switch(p){case d:case c:case b:case h:case o:return p;default:return r}}case s:return r}}}var w=l,F=g,$=d,C=o,E=n,D=c,k=t,S=b,B=h,A=s,z=i,O=a,M=u,j=!1;function _(e){return x(e)===g}r.AsyncMode=w,r.ConcurrentMode=F,r.ContextConsumer=$,r.ContextProvider=C,r.Element=E,r.ForwardRef=D,r.Fragment=k,r.Lazy=S,r.Memo=B,r.Portal=A,r.Profiler=z,r.StrictMode=O,r.Suspense=M,r.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||x(e)===l},r.isConcurrentMode=_,r.isContextConsumer=function(e){return x(e)===d},r.isContextProvider=function(e){return x(e)===o},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return x(e)===c},r.isFragment=function(e){return x(e)===t},r.isLazy=function(e){return x(e)===b},r.isMemo=function(e){return x(e)===h},r.isPortal=function(e){return x(e)===s},r.isProfiler=function(e){return x(e)===i},r.isStrictMode=function(e){return x(e)===a},r.isSuspense=function(e){return x(e)===u},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===t||e===g||e===i||e===a||e===u||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===o||e.$$typeof===d||e.$$typeof===c||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,n)=>{function s(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=Object.keys(e),s=Object.keys(r),t=n.length;if(s.length!==t)return!1;for(var a=0;a<t;a++){var i=n[a];if(e[i]!==r[i]||!Object.prototype.hasOwnProperty.call(r,i))return!1}return!0}function t(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=e.length;if(r.length!==n)return!1;for(var s=0;s<n;s++)if(e[s]!==r[s])return!1;return!0}n.r(r),n.d(r,{shallowEqualArrays:()=>t,shallowEqualObjects:()=>s})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,n){var s=this&&this.__rest||function(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(s=Object.getOwnPropertySymbols(e);t<s.length;t++)r.indexOf(s[t])<0&&Object.prototype.propertyIsEnumerable.call(e,s[t])&&(n[s[t]]=e[s[t]])}return n},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=t(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,n=e.device,t=e.onChange,i=s(e,["children","device","onChange"]),o=(0,a.default)(i,n,t);return"function"==typeof r?r(o):o?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0});var s=(0,n(/*! react */"react").createContext)(void 0);r.default=s},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var t=s(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=t.default;var a=s(n(/*! ./Component */"./src/Component.ts"));r.default=a.default;var i=s(n(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=i.default;var o=s(n(/*! ./Context */"./src/Context.ts"));r.Context=o.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,n){var s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++)for(var t in r=arguments[n])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},s.apply(this,arguments)},t=this&&this.__rest||function(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(s=Object.getOwnPropertySymbols(e);t<s.length;t++)r.indexOf(s[t])<0&&Object.prototype.propertyIsEnumerable.call(e,s[t])&&(n[s[t]]=e[s[t]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=a(n(/*! prop-types */"./node_modules/prop-types/index.js")),o=i.default.oneOfType([i.default.string,i.default.number]),d={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},l={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:o,deviceHeight:o,width:o,deviceWidth:o,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:o,type:Object.keys(d)},g=t(l,["type"]),c=s({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:o,maxHeight:o,minDeviceHeight:o,maxDeviceHeight:o,minWidth:o,maxWidth:o,minDeviceWidth:o,maxDeviceWidth:o,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:o,maxResolution:o},g),u=s(s({},d),c);r.default={all:u,types:d,matchers:l,features:c}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var t=s(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=s(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(a.default.all).forEach((function(n){var s=e[n];null!=s&&r.push(function(e,r){var n=(0,t.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?n:!1===r?"not ".concat(n):"(".concat(n,": ").concat(r,")")}(n,s))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var t=n(/*! react */"react"),a=s(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),i=s(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),d=s(n(/*! ./toQuery */"./src/toQuery.ts")),l=s(n(/*! ./Context */"./src/Context.ts")),g=function(e){if(e)return Object.keys(e).reduce((function(r,n){return r[(0,i.default)(n)]=e[n],r}),{})},c=function(){var e=(0,t.useRef)(!1);return(0,t.useEffect)((function(){e.current=!0}),[]),e.current},u=function(e){var r=function(){return function(e){return e.query||(0,d.default)(e)}(e)},n=(0,t.useState)(r),s=n[0],a=n[1];return(0,t.useEffect)((function(){var e=r();s!==e&&a(e)}),[e]),s};r.default=function(e,r,n){var s=function(e){var r=(0,t.useContext)(l.default),n=function(){return g(e)||g(r)},s=(0,t.useState)(n),a=s[0],i=s[1];return(0,t.useEffect)((function(){var e=n();(0,o.shallowEqualObjects)(a,e)||i(e)}),[e,r]),a}(r),i=u(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var d=function(e,r){var n=function(){return(0,a.default)(e,r||{},!!r)},s=(0,t.useState)(n),i=s[0],o=s[1],d=c();return(0,t.useEffect)((function(){if(d){var e=n();return o(e),function(){e&&e.dispose()}}}),[e,r]),i}(i,s),m=function(e){var r=(0,t.useState)(e.matches),n=r[0],s=r[1];return(0,t.useEffect)((function(){var r=function(e){s(e.matches)};return e.addListener(r),s(e.matches),function(){e.removeListener(r)}}),[e]),n}(d),h=c();return(0,t.useEffect)((function(){h&&n&&n(m)}),[m]),(0,t.useEffect)((function(){return function(){d&&d.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,s),a.exports}return s.d=(e,r)=>{for(var n in r)s.o(r,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s("./src/index.ts")})();var jl=Ml.exports=Ol(s);const _l=h.div`
    border-radius: ${nt.md};
    background: ${Gs.bg};
    padding: ${rt["spacing-16"]} ${rt["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?b`
                  border: ${et["width-010"]} ${et.solid}
                      ${Gs.border};
              `:b`
                  box-shadow: ${st["md-subtle"]};
              `}}
`,Pl=h.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Gs.bg};
    box-shadow: ${st["lg-strong"]};
    border-radius: ${nt.lg};
    overflow: hidden;

    ${at.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Ll=h(ca)`
    position: absolute;
    top: var(--close-button-top-inset, ${rt["spacing-16"]});
    right: var(--close-button-right-inset, ${rt["spacing-16"]});
    padding: 0;
    color: ${Gs.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${at.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${rt["spacing-20"]});
    }
`,Il=e=>{const{textSize:r}=e||{};return b`
        // Text styling
        ${r&&Zs[`${r}-regular`]}

        strong {
            font-weight: ${Zs.Spec["weight-semibold"]};
            ${r&&Zs[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Zs.Spec["weight-semibold"]};
            ${r&&Zs[`${r}-semibold`]}
            color: ${Gs.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Gs["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Gs["hyperlink-hover"]};

                svg {
                    color: ${Gs["icon-hover"]};
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
    `},Wl=h.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,Tl=h((r=>{var{children:n}=r,s=R(r,["children"]);const t=s["data-testid"]||"card";return e(_l,Object.assign({},s,{"data-testid":t,children:"string"==typeof n?e(xl.BodyBL,{children:n}):n}))}))`
    color: ${Gs.text};
    ${Il({textSize:"body-md"})}

    ${at.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Gs["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${nt.full};
        background-clip: padding-box;
    }
`;h((n=>{var{id:s="modal-box",children:t,onClose:a,showCloseButton:i=!0}=n,o=R(n,["id","children","onClose","showCloseButton"]);return r(Pl,Object.assign({"data-testid":s},o,{onClick:e=>{e.stopPropagation()},children:[i&&e(Ll,{onClick:a,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(W,{})}),t]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,h.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Gs.text};
    ${Il({textSize:"body-md"})}
`;const Nl=g({onClose:()=>{}}),Yl=h.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${at.MaxWidth.sm} {
        ${e=>b`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>b`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${Ks["duration-250"]}
                ${Ks["ease-entrance"]}
            transition-delay: ${Ks["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${Ks["duration-250"]}
                ${Ks["ease-exit"]};
        }
    `}
`,Rl=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,Hl=h.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Vl=h.div`
    width: 40rem;
    margin: ${rt["spacing-64"]} auto;
    background: ${Gs.bg};
    box-shadow: ${st["xs-strong"]};
    border-radius: ${nt.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${tt["xxl-margin"]}px * 2);

    ${at.MaxWidth.xl} {
        max-width: calc(100% - ${tt["xl-margin"]}px * 2);
    }

    ${at.MaxWidth.lg} {
        max-width: calc(100% - ${tt["lg-margin"]}px * 2);
    }

    ${at.MaxWidth.md} {
        max-width: calc(100% - ${tt["md-margin"]}px * 2);
    }

    ${at.MaxWidth.sm} {
        max-width: calc(100% - ${tt["sm-margin"]}px * 2);
    }

    ${at.MaxWidth.xs} {
        max-width: calc(100% - ${tt["xs-margin"]}px * 2);
    }

    ${at.MaxWidth.xxs} {
        max-width: calc(100% - ${tt["xxs-margin"]}px * 2);
    }
`,Ul=h.div`
    margin-right: ${rt["spacing-16"]};
    margin-left: auto;
    margin-top: ${rt["spacing-16"]};
    margin-bottom: ${rt["spacing-16"]};
`,Ql=h(ca)`
    padding: 0;
    color: ${Gs.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,ql=h.div`
    margin-right: ${rt["spacing-64"]};
    margin-left: ${rt["spacing-64"]};

    ${at.MaxWidth.sm} {
        margin-right: ${rt["spacing-20"]};
        margin-left: ${rt["spacing-20"]};
    }
`,Jl=h.div`
    margin-right: ${rt["spacing-64"]};
    margin-left: ${rt["spacing-64"]};

    ${at.MaxWidth.sm} {
        margin-right: ${rt["spacing-20"]};
        margin-left: ${rt["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${rt["spacing-32"]};
    row-gap: ${rt["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${at.MaxWidth.md} {
        flex-direction: column;
    }
`,Xl=h.div`
    :where(& > ${ql}:last-child) {
        margin-bottom: ${rt["spacing-64"]};
    }

    :where(& > ${Jl}:not(:first-child)) {
        margin-top: ${rt["spacing-32"]};
    }

    :where(& > ${Jl}:last-child) {
        margin-bottom: ${rt["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?b`
                  :where(& > ${ql}:first-child),
                  :where(& > ${Jl}:first-child) {
                      margin-top: 0;
                  }
              `:b`
                  :where(& > ${ql}:first-child),
                  :where(& > ${Jl}:first-child) {
                      margin-top: ${rt["spacing-64"]};
                  }
              `}
`,Gl=r=>{var{"data-testid":n="modal-close-button"}=r,s=R(r,["data-testid"]);const{onClose:a}=t(Nl);return e(Ul,Object.assign({"data-testid":n},s,{children:e(Ql,{onClick:a,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(W,{"aria-hidden":!0})})}))};Gl.displayName="ModalV2.CloseButton";const Zl=r=>{var{"data-testid":n="modal-content",children:s}=r,t=R(r,["data-testid","children"]);return e(ql,Object.assign({"data-testid":n},t,{children:s}))};Zl.displayName="ModalV2.Content";const Kl=e=>{var{"data-testid":n="modal-footer",primaryButton:s,secondaryButton:t}=e,a=R(e,["data-testid","primaryButton","secondaryButton"]);return r(Jl,Object.assign({"data-testid":n},a,{children:[s,t]}))};Kl.displayName="ModalV2.Footer";const eg=e=>{var{id:n,"data-testid":t="modal-card",children:a}=e,i=R(e,["id","data-testid","children"]);const o=e=>s.Children.toArray(a).find((r=>((e,r)=>y(e.type)?e.type.target===r:e.type===r)(r,e))),d=o(Gl),l=o(Zl),g=o(Kl),c=!!d;return r(Vl,Object.assign({id:n,"data-testid":t},i,{onClick:e=>{e.stopPropagation()},children:[r(Xl,{$hasCloseButton:c,children:[l,g]}),c&&d]}))};eg.displayName="ModalV2.Card";const rg=Object.assign((r=>{var{id:n,show:s,onClose:t,animationFrom:o="bottom",children:d,enableOverlayClick:g=!0,rootComponentId:c,zIndex:u,onOverlayClick:m,dismissKeyboardOnShow:h=!0,"data-testid":b="modal"}=r,p=R(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:f,offsetTop:y}=(()=>{const[e,r]=i(),[n,s]=i(),t=l((()=>{const e=.01*window.innerHeight;r(e)}),[]),o=l((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),s(window.visualViewport.offsetTop)}}),[]);return a((()=>window.visualViewport?(o(),window.visualViewport.addEventListener("resize",o),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",o)}):(t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)})),[]),{verticalHeight:e,offsetTop:n}})(),{refs:v,context:x}=$({open:s,onOpenChange:e=>{e||null==t||t()}}),{isMounted:w,status:F}=C(x,{duration:300}),S=E(x,{outsidePress:!1,enabled:!!t}),{getFloatingProps:B}=D([S]);return a((()=>{var e,r;s&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[h,s]),e(na,{"data-testid":`${b}-overlay`,show:w,enableOverlayClick:g,onOverlayClick:m,id:n,rootId:c,zIndex:u,children:e(Yl,Object.assign({$show:w,$animationFrom:o,"data-testid":b,$verticalHeight:f,$offsetTop:y},p,{"data-status":F,children:e(Nl.Provider,{value:{onClose:t},children:w&&e(k,{context:x,initialFocus:v.floating,children:e(Rl,{children:e(Hl,Object.assign({ref:v.setFloating},B(),{"aria-modal":!0,role:"dialog",children:d}))})})})}))})}),{Card:eg,CloseButton:Gl,Content:Zl,Footer:Kl}),ng=s=>{var{children:a,visible:i,onMobileClose:o,maxHeight:d,overflow:l,ariaLabel:g,id:c}=s,u=R(s,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const m=u["data-testid"]||"popover",h=t(p),b=tt["sm-max"]({theme:h}),f=jl.useMediaQuery({maxWidth:b}),y=()=>{o&&o()},v=()=>"string"==typeof a?e(xl.BodyMD,{children:a}):a;return r(n,{children:[i&&e(Wl,Object.assign({tabIndex:0,"data-testid":m},u,{id:c,role:"dialog","aria-label":null!=g?g:"More information",children:e(Tl,{$maxHeight:d,$overflow:l,children:v()})})),f&&e(rg,{show:null!=i&&i,onOverlayClick:y,onClose:y,id:c,role:"dialog","aria-label":null!=g?g:"More information",children:r(rg.Card,{children:[e(rg.Content,{children:v()}),e(rg.CloseButton,{})]})})]})},sg=h.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,tg=s=>{var d,l,{children:g,popoverContent:c,trigger:u="click",position:m="top",zIndex:h,rootNode:b,customOffset:f,delay:y,onPopoverAppear:x,onPopoverDismiss:w,popoverAriaLabel:F,enableFlip:C=!0,enableResize:I=!1,overflow:W="auto",triggerOnFocus:T=!1,isModal:N=!0}=s,Y=R(s,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[H,V]=i(!1),U=o(null),Q=o(null),q=t(p),J=tt["sm-max"]({theme:q}),X=jl.useMediaQuery({maxWidth:J}),[G,Z]=i(0),K=`${o(Xt.generate()).current}-popover`,{refs:ee,floatingStyles:re,context:ne}=$({open:H,placement:m,whileElementsMounted:S,middleware:[B(null!=f?f:16),C&&A(),z({limiter:O()}),I&&M({apply({availableHeight:e}){Z(e)}})],onOpenChange:e=>{V(e),H!==e&&ue(e)}}),se=(()=>{const[e,r]=i(void 0),n=v();return a((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(ea.Change,e),n.events.emit(ea.Ready),()=>n.events.off(ea.Change,e)}),[n]),e})(),te="hover"===(X?"click":u),ae=j(ne,{ignoreMouse:te}),ie=E(ne),oe=_(ne,{enabled:te,delay:{open:null!==(d=null==y?void 0:y.open)&&void 0!==d?d:0,close:null!==(l=null==y?void 0:y.close)&&void 0!==l?l:500}}),de=P(ne,{enabled:T}),{getReferenceProps:le,getFloatingProps:ge}=D([ae,ie,oe,de]),ce=()=>{V(!1),ue(!1)},ue=e=>{e&&x&&x(),!e&&w&&w()};return r(n,{children:[e(sg,Object.assign({ref:e=>{U.current=e,ee.setReference(e)}},le({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),Y,{children:g})),H&&e(L,{root:b,children:e(k,Object.assign({context:ne},!N&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{Q.current=e,ee.setFloating(e)},onBlur:e=>{var r;const n=null!==(r=e.relatedTarget)&&void 0!==r?r:document.activeElement;n&&(e=>{var r;if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const n=U.current,s=null===(r=Q.current)||void 0===r?void 0:r.parentElement;return!!n&&n.contains(e)||!!s&&s.contains(e)})(n)||(V(!1),ue(!1))},style:Object.assign(Object.assign({},re),{outline:"none",zIndex:null!=h?h:se})},ge(),{children:"function"==typeof c?c(I?{maxHeight:G,overflow:W}:{}):e(ng,{visible:!0,onMobileClose:ce,maxHeight:I?G:void 0,overflow:I?W:void 0,ariaLabel:F,id:K,children:c})}))}))})]})},ag=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};h.span`
    color: ${Gs["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ag(e)}

    &:hover,
    &:focus-visible {
        color: ${Gs["text-hover"]};
        ${({$hoverStyle:e})=>ag(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,h.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`;const ig=h.div`
    border-radius: ${nt.md};
    border: ${et["width-010"]} ${et.solid} ${Gs.border};
    background: ${Gs.bg};
    box-shadow: ${st["md-subtle"]};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${at.MaxWidth.sm} {
        --x-spacing: ${tt["sm-margin"]}px;
    }

    ${at.MaxWidth.xs} {
        --x-spacing: ${tt["xs-margin"]}px;
    }

    ${at.MaxWidth.xxs} {
        --x-spacing: ${tt["xxs-margin"]}px;
    }

    min-width: min(15rem, var(--available-width));
    max-width: min(24rem, var(--available-width));

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &:focus {
        outline: none;
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Gs["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${nt.full};
        background-clip: padding-box;
    }
`,og=r=>{var{children:n,"data-testid":s="menu-content",overflow:t,maxHeight:a}=r,i=R(r,["children","data-testid","overflow","maxHeight"]);return e(ig,Object.assign({$overflow:t,$maxHeight:a,"data-testid":s,tabIndex:-1,onKeyDown:e=>{var r;const n="ArrowDown"===e.key||"ArrowRight"===e.key,s="ArrowUp"===e.key||"ArrowLeft"===e.key;if(!n&&!s)return;const t=(e=>Array.from(e.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter((e=>!e.hasAttribute("disabled"))))(e.currentTarget);if(!t.length)return;const a=document.activeElement,i=a?t.indexOf(a):-1;e.preventDefault();const o=n?1:-1;null===(r=t[-1===i?n?0:t.length-1:(i+o+t.length)%t.length])||void 0===r||r.focus()}},i,{children:n}))};og.displayName="Menu.Content";const dg=h.li`
    display: flex;
    flex-direction: column;
    padding: ${rt["spacing-8"]} ${rt["spacing-16"]};
`,lg=h(xl.BodySM)`
    color: ${Gs["text-subtler"]};
`,gg=n=>{var{label:s,subLabel:t,children:a,"data-testid":i="menu-item"}=n,o=R(n,["label","subLabel","children","data-testid"]);return r(dg,Object.assign({"data-testid":i},o,{children:[s&&e(xl.BodyMD,{weight:"semibold",children:s}),t&&e(lg,{children:t}),a]}))};gg.displayName="Menu.Item";const cg=h.li`
    display: flex;
    flex-direction: column;
`,ug=h(xl.LinkMD)`
    color: ${Gs.text};

    margin: 0 ${rt["spacing-8"]};

    border: ${et.solid} transparent;
    border-width: ${rt["spacing-8"]} ${rt["spacing-8"]};

    border-radius: ${nt.md};

    ${ml(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${Gs["bg-hover"]};
        color: ${Gs.text};
    }

    &:focus-visible {
        outline: 2px solid ${Gs["focus-ring"]};
        outline-offset: 0;
    }
`,mg=r=>{var{children:n,"data-testid":s="menu-link"}=r,t=R(r,["children","data-testid"]);return e(cg,{children:e(ug,Object.assign({"data-testid":s,underlineStyle:"none"},t,{children:n}))})};mg.displayName="Menu.Link";const hg=h.ul`
    ${e=>e.$showDivider&&b`
            border-top: ${et["width-010"]} ${et.solid}
                ${Gs.border};
        `}
    padding: ${rt["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`,bg=h(xl.BodyXS)`
    margin: 0 ${rt["spacing-16"]} ${rt["spacing-8"]};
    color: ${Gs["text-subtler"]};
`,pg=n=>{var{children:s,label:t,showDivider:a=!0,"data-testid":o="menu-section"}=n,d=R(n,["children","label","showDivider","data-testid"]);const[l]=i((()=>Xt.generate()));return r(hg,Object.assign({$showDivider:a,"data-testid":o,"aria-labelledby":l},d,{children:[t&&e(bg,{weight:"semibold",id:l,children:t}),s]}))};pg.displayName="Menu.Section";const fg=Object.assign((r=>{var{children:n,position:s="bottom-start",menuContent:t,"data-testid":a="menu"}=r,i=R(r,["children","position","menuContent","data-testid"]);return e(tg,Object.assign({position:s,popoverContent:e=>c(t,{overflow:e.overflow,maxHeight:e.maxHeight}),"data-testid":a},i,{children:n}))}),{Content:og,Section:pg,Item:gg,Link:mg}),yg=h.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${et["width-040"]} solid ${Gs["border-selected"]};
`,vg=h.li`
    width: 100%;
    display: flex;
`,xg=h(xl.LinkBL)`
    width: 100%;
    text-align: left;
    color: ${Gs.text};

    margin: 0 ${rt["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${et.solid} transparent;
    border-width: ${rt["spacing-12"]} ${rt["spacing-8"]};
    border-radius: ${nt.md};

    ${ml(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${Gs["bg-hover"]};
        color: ${Gs.text};
    }
`,wg=({items:r,onItemClick:s})=>{const t=e=>r=>{r.stopPropagation(),s(r,e)};return(null==r?void 0:r.length)?e(yg,{children:r.map(((r,n)=>{const{children:s,options:a}=r,i=R(r,["children","options"]),o=`menu__mobile-${n+1}`;return e(vg,{children:e(xg,Object.assign({"data-testid":o},i,a,{onClick:t(r),underlineStyle:"none",children:s}))},n)}))}):e(n,{})},Fg=h.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${at.MaxWidth.lg} {
        display: none;
    }
`,$g=h.ul`
    display: none;
    list-style: none;

    ${at.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Cg=h.li`
    display: flex;
    margin: 0 1rem;

    &:first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${at.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Eg=b`
    ${e=>Zs[`body-md-${e.weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Ds["navbar-link-colour-text"]};
    height: 100%;

    &:active,
    &:hover,
    &:focus {
        color: ${e=>e.$selected?Ds["navbar-link-colour-text-selected-hover"]:Ds["navbar-link-colour-text-hover"]};
    }

    ${at.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,Dg=h.a`
    ${Eg}
`,kg=h.button`
    ${Eg}
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    text-align: left;
    margin: 0;
    box-shadow: none;
    font: inherit;
    color: inherit;
`,Sg=h.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Bg=h.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${Gs["border-selected"]};

    &:hover {
        ${e=>e.$selected&&Gs["border-selected-hover"]};
    }

    ${at.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,Ag=h.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,zg=h(ca)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Og=h(Y)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Gs.icon};
    &:hover {
        ${e=>e.$selected?Gs["icon-selected-hover"]:Gs["icon-hover"]};
    }
`,Mg=({items:s,selectedId:t,mobile:d=!1,hideNavBranding:l,hideLinkIndicator:g=!1,onItemClick:c})=>{const[u,m]=i(-1),[h,b]=i(!1),[p,f]=i(null),y=o(null),[v]=i((()=>Xt.generate()));a((()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&(b(!1),m(-1),f(null))};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const x=(e,r)=>n=>{var s;if(n.stopPropagation(),d&&(null===(s=e.subMenu)||void 0===s?void 0:s.length)){const e=!(u===r&&h);m(r),b(e)}c(n,e)},w=(e,r)=>{e.stopPropagation(),c(e,r),b(!1),m(-1)},F=(r,n)=>e(fg.Content,{id:n,children:e(fg.Section,{showDivider:!1,children:r.map(((r,n)=>e(fg.Link,{href:r.href,children:r.children},`${r.id}-${n}`)))})}),$=r=>e(wg,{items:r,onItemClick:w}),C=(s,a)=>{const{children:i,options:o,subMenu:c}=s,m=R(s,["children","options","subMenu"]),b=!!(null==c?void 0:c.length),y=(e=>{var r;return e.id===t||!!(null===(r=e.subMenu)||void 0===r?void 0:r.length)&&!!e.subMenu.find((e=>e.id===t))})(s),w=d&&b&&u===a&&h,C=!d&&b&&p===a||w,E=null!==p?p===a:y,D=!g&&E,k=E?d?"bold":"semibold":"regular",S=d?`link__mobile-${a+1}`:`link__${a+1}`,B=()=>D?e(Bg,{"data-testid":`${S}-indicator`,$selected:E}):null;return e(Cg,{$hiddenBranding:l,children:b?(()=>{const t=`navbar-submenu-${v}-${s.id}`;return d?r(n,{children:[r(Dg,Object.assign({"data-testid":S,weight:k,$selected:E,underlineStyle:"none"},m,{"aria-current":y?"page":void 0,"aria-haspopup":"menu","aria-expanded":C,onClick:x(s,a)},o,{children:[e(Sg,{children:i}),B(),d&&b?e(Ag,{children:e(zg,{"data-testid":`${S}-expand-collapse-button`,$selected:w,focusHighlight:!1,focusOutline:"browser","aria-label":w?"Collapse":"Expand",children:e(Og,{$selected:E})})}):null]})),w&&$(c)]}):e(fg,{position:"bottom",customOffset:0,menuContent:F(c,t),triggerOnFocus:!0,isModal:!1,onPopoverAppear:()=>f(a),onPopoverDismiss:()=>{f((e=>e===a?null:e))},children:r(kg,Object.assign({type:"button",tabIndex:0,"data-testid":S,weight:k,$selected:E,"aria-haspopup":"menu","aria-expanded":C},o,{children:[e(Sg,{children:i}),B()]}))})})():r(Dg,Object.assign({tabIndex:0,"data-testid":S,weight:k,$selected:E,underlineStyle:"none"},m,{"aria-current":y?"page":void 0,onClick:x(s,a)},o,{children:[e(Sg,{children:i}),B()]}))},a)},E=()=>s.map(((r,n)=>{var s;return"component"===r.itemType?e("li",{children:null!==(s=r.children)&&void 0!==s?s:null},n):C(r,n)}));return s&&s.length>0?d?e($g,{ref:y,children:E()}):e(Fg,{ref:y,$alignLeft:l,children:E()}):e(n,{})},jg={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},_g={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},Pg={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},Lg={primary:{brandName:"IMDA",logoSrc:"https://assets.life.gov.sg/react-design-system/img/logo/imda-logo.svg"}},Ig={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},Wg={primary:{brandName:"SPF",logoSrc:"https://assets.life.gov.sg/react-design-system/img/logo/spf-logo.png"}},Tg={primary:{brandName:"SupportGoWhere",logoSrc:"https://assets.life.gov.sg/react-design-system/img/logo/sgw-logo.png"}},Ng=u(((s,d)=>{var{items:l,className:g,id:c,selectedId:u,compress:h=!1,fixed:b=!0,resources:f,hideNavElements:y=!1,hideNavBranding:v=!1,hideLinkIndicator:x=!1,drawerDismissalExclusions:w=[],actionButtons:F,onItemClick:$,onActionButtonClick:C,onBrandClick:E,masthead:D=!0,layout:k="default",headerLabel:S="Main navigation menu",drawerLabel:B}=s,A=R(s,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","hideLinkIndicator","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout","headerLabel","drawerLabel"]);const[z,O]=i(!1),[M,j]=i(!1),_=o(null),P="stretch"===k,L=o(null),I=t(p),W=(e=>{switch(e){case"bookingsg":return _g;case"mylegacy":return Ig;case"ccube":return Pg;case"spf":return Wg;case"supportgowhere":return Tg;case"imda":return Lg;default:return jg}})(null==I?void 0:I.resourceScheme),T=tt["lg-max"]({theme:I}),N=(null==f?void 0:f.primary)||W.primary,Y=null==f?void 0:f.secondary;m(d,(()=>Object.assign(L.current,{dismissDrawer:()=>{H()}})),[z]),a((()=>(U(),window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U)})),[]);const H=()=>{O(!1),setTimeout((()=>{j(!1)}),550)},V=e=>z&&-1===w.indexOf(e),U=()=>{window.innerWidth<=T&&z&&H()},Q=(e,r)=>{E&&E(r),V("brand-click")&&H()},q=(e,r)=>{zl.isNavItemCommon(r)&&r.onClick?r.onClick(e):$&&(e.preventDefault(),$(r)),zl.isNavItemLink(r)&&!r.subMenu&&V("item-click")&&H()},J=(e,r)=>{var n;"button"!==r.type&&"download"!==r.type||!(null===(n=r.args)||void 0===n?void 0:n.onClick)?C&&(e.preventDefault(),C(r)):r.args.onClick(e),V("item-click")&&H()},X=()=>{O(!0),j(!0)},G=()=>{V("close-button-click")&&H()},Z=()=>{const r=l.mobile||l.desktop;return r&&r.length>0||F&&(e=>{const r=e.mobile||e.desktop;return!!r&&r.length&&r.some((e=>!e.uncollapsible))})(F)?e(wa,{ref:_,"aria-label":z?"Close nav menu":"Open nav menu","aria-expanded":z,"data-testid":"button__mobile-menu",onClick:X,focusHighlight:!1,children:e(Fa,{})}):null};return r(ya,{ref:L,$fixed:b,className:g,id:c||"navbar-wrapper","data-testid":A["data-testid"]||"navbar-wrapper",children:[D&&e(Et,{stretch:P}),r($t.Content,{stretch:P,children:[r(va,{$compress:h,"aria-label":S,children:[!v&&r($a,{$compress:h,"data-id":"brand-container",children:[N&&e(la,{resources:N,onClick:Q,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),Y&&r(n,{children:[e(Ca,{$compress:h}),e(la,{resources:Y,onClick:Q,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!y&&r(xa,{$hideNavBranding:v,children:[e(Mg,{items:l.desktop,onItemClick:q,selectedId:u,hideNavBranding:v,hideLinkIndicator:x}),e(Al,{actionButtons:F,onActionButtonClick:J}),Z()]})]}),!y&&e(na,{show:M,enableOverlayClick:!0,onOverlayClick:G,children:r(Ea,{show:z,resources:{primary:N,secondary:Y},onClose:G,onBrandClick:Q,actionButtons:F,hideNavBranding:v,mobileMenuRef:_,drawerLabel:B,children:[e(Mg,{items:l.mobile||l.desktop,onItemClick:q,selectedId:u,mobile:!0,hideLinkIndicator:x}),e(Al,{actionButtons:F,onActionButtonClick:J,mobile:!0})]})})]})]})}));export{Ng as Navbar};
//# sourceMappingURL=index.js.map
