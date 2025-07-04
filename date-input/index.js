import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as o,useState as i,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,version as b,useCallback as h,useMemo as m,useImperativeHandle as f}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import p,{css as v,keyframes as x,useTheme as D}from"styled-components";import{useFloatingTree as w,useFloating as F,autoUpdate as $,offset as E,flip as C,shift as S,limitShift as B,size as A,useTransitionStyles as k,useClick as M,useDismiss as O,useInteractions as z,FloatingPortal as Y,FloatingFocusManager as j}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as R}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function I(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W={exports:{}};W.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",o="minute",i="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),o=t-a<0,i=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-a)/(o?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:i,m:o,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(a=o),t&&(x[o]=t,a=o);var i=r.split("-");if(!a&&i.length>1)return e(i[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case g:return h(p+"Hours",0);case i:return h(p+"Minutes",1);case o:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[i]=c+"Hours",t[o]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var f=(g={},g[o]=r,g[i]=t,g[a]=e,g)[h]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),o=this.$H,i=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,o){return e&&(e[t]||e(r,n))||a[t].slice(0,o)},g=function(e){return E.s(o%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(o,i,!0);case"A":return h(o,i,!1);case"m":return String(i);case"mm":return E.s(i,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,b){var h,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case i:h=v/t;break;case o:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",o],["$H",i],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var P=H(W.exports),N=Array.isArray,U="object"==typeof L&&L&&L.Object===Object&&L,V="object"==typeof self&&self&&self.Object===Object&&self,K=U||V||Function("return this")(),Z=K.Symbol,J=Z,q=Object.prototype,X=q.hasOwnProperty,G=q.toString,Q=J?J.toStringTag:void 0;var ee=function(e){var r=X.call(e,Q),t=e[Q];try{e[Q]=void 0;var n=!0}catch(e){}var a=G.call(e);return n&&(r?e[Q]=t:delete e[Q]),a},re=Object.prototype.toString;var te=ee,ne=function(e){return re.call(e)},ae=Z?Z.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?te(e):ne(e)};var ie=oe,se=function(e){return null!=e&&"object"==typeof e};var le=function(e){return"symbol"==typeof e||se(e)&&"[object Symbol]"==ie(e)},de=N,ce=le,ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/;var be=function(e,r){if(de(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ce(e))||(ge.test(e)||!ue.test(e)||null!=r&&e in Object(r))};var he=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},me=oe,fe=he;var ye,pe=function(e){if(!fe(e))return!1;var r=me(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ve=K["__core-js_shared__"],xe=(ye=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var De=function(e){return!!xe&&xe in e},we=Function.prototype.toString;var Fe=pe,$e=De,Ee=he,Ce=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=/^\[object .+?Constructor\]$/,Be=Function.prototype,Ae=Object.prototype,ke=Be.toString,Me=Ae.hasOwnProperty,Oe=RegExp("^"+ke.call(Me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ze=function(e,r){return null==e?void 0:e[r]},Ye=function(e){return!(!Ee(e)||$e(e))&&(Fe(e)?Oe:Se).test(Ce(e))},je=ze;var Te=function(e,r){var t=je(e,r);return Ye(t)?t:void 0},Re=Te(Object,"create"),_e=Re;var Ie=function(){this.__data__=_e?_e(null):{},this.size=0};var Le=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},He=Re,We=Object.prototype.hasOwnProperty;var Pe=function(e){var r=this.__data__;if(He){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return We.call(r,e)?r[e]:void 0},Ne=Re,Ue=Object.prototype.hasOwnProperty;var Ve=function(e){var r=this.__data__;return Ne?void 0!==r[e]:Ue.call(r,e)},Ke=Re;var Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ke&&void 0===r?"__lodash_hash_undefined__":r,this},Je=Ie,qe=Le,Xe=Pe,Ge=Ve,Qe=Ze;function er(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}er.prototype.clear=Je,er.prototype.delete=qe,er.prototype.get=Xe,er.prototype.has=Ge,er.prototype.set=Qe;var rr=er;var tr=function(){this.__data__=[],this.size=0};var nr=function(e,r){return e===r||e!=e&&r!=r};var ar=function(e,r){for(var t=e.length;t--;)if(nr(e[t][0],r))return t;return-1},or=ar,ir=Array.prototype.splice;var sr=function(e){var r=this.__data__,t=or(r,e);return!(t<0)&&(t==r.length-1?r.pop():ir.call(r,t,1),--this.size,!0)},lr=ar;var dr=function(e){var r=this.__data__,t=lr(r,e);return t<0?void 0:r[t][1]},cr=ar;var ur=function(e){return cr(this.__data__,e)>-1},gr=ar;var br=function(e,r){var t=this.__data__,n=gr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},hr=tr,mr=sr,fr=dr,yr=ur,pr=br;function vr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}vr.prototype.clear=hr,vr.prototype.delete=mr,vr.prototype.get=fr,vr.prototype.has=yr,vr.prototype.set=pr;var xr=vr,Dr=Te(K,"Map"),wr=rr,Fr=xr,$r=Dr;var Er=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Cr=function(e,r){var t=e.__data__;return Er(r)?t["string"==typeof r?"string":"hash"]:t.map},Sr=Cr;var Br=function(e){var r=Sr(this,e).delete(e);return this.size-=r?1:0,r},Ar=Cr;var kr=function(e){return Ar(this,e).get(e)},Mr=Cr;var Or=function(e){return Mr(this,e).has(e)},zr=Cr;var Yr=function(e,r){var t=zr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},jr=function(){this.size=0,this.__data__={hash:new wr,map:new($r||Fr),string:new wr}},Tr=Br,Rr=kr,_r=Or,Ir=Yr;function Lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Lr.prototype.clear=jr,Lr.prototype.delete=Tr,Lr.prototype.get=Rr,Lr.prototype.has=_r,Lr.prototype.set=Ir;var Hr=Lr;function Wr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=t.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return t.cache=o.set(a,i)||o,i};return t.cache=new(Wr.Cache||Hr),t}Wr.Cache=Hr;var Pr=Wr;var Nr=function(e){var r=Pr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vr=/\\(\\)?/g,Kr=Nr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ur,(function(e,t,n,a){r.push(n?a.replace(Vr,"$1"):t||e)})),r}));var Zr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Jr=N,qr=le,Xr=Z?Z.prototype:void 0,Gr=Xr?Xr.toString:void 0;var Qr=function e(r){if("string"==typeof r)return r;if(Jr(r))return Zr(r,e)+"";if(qr(r))return Gr?Gr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},et=Qr;var rt=N,tt=be,nt=Kr,at=function(e){return null==e?"":et(e)};var ot=le;var it=function(e,r){return rt(e)?e:tt(e,r)?[e]:nt(at(e))},st=function(e){if("string"==typeof e||ot(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var lt=function(e,r){for(var t=0,n=(r=it(r,e)).length;null!=e&&t<n;)e=e[st(r[t++])];return t&&t==n?e:void 0};var dt=H((function(e,r,t){var n=null==e?void 0:lt(e,r);return void 0===n?t:n}));const ct=(e,r,t)=>dt(t,r)||dt(e,r),ut=(e,r)=>{const t=r||e.defaultValue;return dt(e.collections,t)},gt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},bt=e=>r=>{var t;const n=r.theme,a=ut(gt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ct(a,e,n.overrides.border)}px`:`${a[e]}px`},ht={"width-005":bt("width-005"),"width-010":bt("width-010"),"width-020":bt("width-020"),"width-040":bt("width-040"),solid:(mt="solid",e=>{var r;const t=e.theme,n=ut(gt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ct(n,mt,t.overrides.border):n[mt];return"function"==typeof a?a(e):a})};var mt;const ft={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={collections:{lifesg:pt,bookingsg:ft,rbs:wt,mylegacy:vt,ccube:yt,oneservice:xt,pa:Dt,a11yplayground:Ft,supportgowhere:$t},defaultValue:"lifesg"},Ct={collections:{lifesg:pt,bookingsg:ft,rbs:wt,mylegacy:vt,ccube:yt,oneservice:xt,pa:Dt,a11yplayground:Ft,supportgowhere:$t},defaultValue:"lifesg"},St=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),o=ut(a?Ct:Et,null==n?void 0:n.colourScheme),i=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[i];return s?ct(o,e,s):o[e]},Bt={"brand-10":St("brand-10"),"brand-20":St("brand-20"),"brand-30":St("brand-30"),"brand-40":St("brand-40"),"brand-50":St("brand-50"),"brand-60":St("brand-60"),"brand-70":St("brand-70"),"brand-80":St("brand-80"),"brand-90":St("brand-90"),"brand-95":St("brand-95"),"brand-100":St("brand-100"),"primary-10":St("primary-10"),"primary-20":St("primary-20"),"primary-30":St("primary-30"),"primary-40":St("primary-40"),"primary-50":St("primary-50"),"primary-60":St("primary-60"),"primary-70":St("primary-70"),"primary-80":St("primary-80"),"primary-90":St("primary-90"),"primary-95":St("primary-95"),"primary-100":St("primary-100"),"secondary-10":St("secondary-10"),"secondary-20":St("secondary-20"),"secondary-30":St("secondary-30"),"secondary-40":St("secondary-40"),"secondary-50":St("secondary-50"),"secondary-60":St("secondary-60"),"secondary-70":St("secondary-70"),"secondary-80":St("secondary-80"),"secondary-90":St("secondary-90"),"secondary-95":St("secondary-95"),"secondary-100":St("secondary-100"),"neutral-10":St("neutral-10"),"neutral-20":St("neutral-20"),"neutral-30":St("neutral-30"),"neutral-40":St("neutral-40"),"neutral-50":St("neutral-50"),"neutral-60":St("neutral-60"),"neutral-70":St("neutral-70"),"neutral-80":St("neutral-80"),"neutral-90":St("neutral-90"),"neutral-95":St("neutral-95"),"neutral-100":St("neutral-100"),"success-10":St("success-10"),"success-20":St("success-20"),"success-30":St("success-30"),"success-40":St("success-40"),"success-50":St("success-50"),"success-60":St("success-60"),"success-70":St("success-70"),"success-80":St("success-80"),"success-90":St("success-90"),"success-95":St("success-95"),"success-100":St("success-100"),"warning-10":St("warning-10"),"warning-20":St("warning-20"),"warning-30":St("warning-30"),"warning-40":St("warning-40"),"warning-50":St("warning-50"),"warning-60":St("warning-60"),"warning-70":St("warning-70"),"warning-80":St("warning-80"),"warning-90":St("warning-90"),"warning-95":St("warning-95"),"warning-100":St("warning-100"),"error-10":St("error-10"),"error-20":St("error-20"),"error-30":St("error-30"),"error-40":St("error-40"),"error-50":St("error-50"),"error-60":St("error-60"),"error-70":St("error-70"),"error-80":St("error-80"),"error-90":St("error-90"),"error-95":St("error-95"),"error-100":St("error-100"),"info-10":St("info-10"),"info-20":St("info-20"),"info-30":St("info-30"),"info-40":St("info-40"),"info-50":St("info-50"),"info-60":St("info-60"),"info-70":St("info-70"),"info-80":St("info-80"),"info-90":St("info-90"),"info-95":St("info-95"),"info-100":St("info-100"),white:St("white"),black:St("black"),"primary-inverse":St("primary-inverse")},At={text:St("neutral-20"),"text-subtle":St("neutral-30"),"text-subtler":St("neutral-50"),"text-subtlest":St("neutral-60"),"text-primary":St("primary-50"),"text-hover":St("primary-40"),"text-selected":St("primary-50"),"text-selected-hover":St("primary-40"),"text-disabled":St("neutral-50"),"text-disabled-subtle":St("neutral-60"),"text-disabled-subtlest":St("neutral-80"),"text-selected-disabled":St("neutral-20"),"text-success":St("success-40"),"text-warning":St("warning-40"),"text-error":St("error-40"),"text-info":St("info-40"),"text-inverse":St("white"),icon:St("neutral-50"),"icon-subtle":St("neutral-60"),"icon-strongest":St("neutral-20"),"icon-primary":St("primary-50"),"icon-primary-subtle":St("primary-60"),"icon-primary-subtlest":St("primary-70"),"icon-hover":St("primary-40"),"icon-selected":St("primary-50"),"icon-selected-hover":St("primary-40"),"icon-disabled":St("neutral-50"),"icon-disabled-subtle":St("neutral-60"),"icon-selected-disabled":St("neutral-60"),"icon-success":St("success-50"),"icon-warning":St("warning-60"),"icon-error":St("error-50"),"icon-error-strong":St("error-40"),"icon-info":St("info-50"),"icon-inverse":St("white"),"icon-primary-inverse":St("primary-inverse"),border:St("neutral-90"),"border-strong":St("neutral-70"),"border-stronger":St("neutral-50"),"border-primary":St("primary-50"),"border-primary-subtle":St("primary-60"),"border-hover":St("primary-90"),"border-hover-strong":St("primary-60"),"border-selected":St("primary-50"),"border-selected-subtle":St("primary-70"),"border-selected-subtlest":St("primary-90"),"border-selected-hover":St("primary-40"),"border-focus":St("primary-60"),"border-focus-strong":St("primary-50"),"border-disabled":St("neutral-90"),"border-selected-disabled":St("neutral-70"),"border-success":St("success-60"),"border-warning":St("warning-60"),"border-error":St("error-60"),"border-error-focus":St("error-60"),"border-error-focus-strong":St("error-40"),"border-error-strong":St("error-40"),"border-info":St("info-60"),bg:St("white"),"bg-strong":St("neutral-100"),"bg-stronger":St("neutral-95"),"bg-strongest":St("neutral-90"),"bg-hover":St("primary-95"),"bg-hover-strong":St("primary-90"),"bg-hover-subtle":St("primary-100"),"bg-hover-neutral":St("neutral-100"),"bg-hover-neutral-strong":St("neutral-90"),"bg-selected":St("primary-95"),"bg-selected-hover":St("primary-90"),"bg-selected-strong":St("primary-90"),"bg-selected-stronger":St("primary-70"),"bg-selected-strongest":St("primary-50"),"bg-selected-strongest-hover":St("primary-40"),"bg-disabled":St("neutral-95"),"bg-selected-disabled":St("neutral-95"),"bg-selected-stronger-disabled":St("neutral-70"),"bg-success":St("success-100"),"bg-success-hover":St("success-95"),"bg-success-strong":St("success-50"),"bg-success-strong-hover":St("success-40"),"bg-warning":St("warning-100"),"bg-warning-hover":St("warning-95"),"bg-warning-strong":St("warning-50"),"bg-warning-strong-hover":St("warning-40"),"bg-info":St("info-100"),"bg-info-hover":St("info-95"),"bg-info-strong":St("info-50"),"bg-info-strong-hover":St("info-40"),"bg-error":St("error-100"),"bg-error-hover":St("error-95"),"bg-error-strong":St("error-50"),"bg-error-strong-hover":St("error-40"),"bg-inverse":St("neutral-20"),"bg-inverse-subtle":St("neutral-30"),"bg-inverse-subtler":St("neutral-50"),"bg-inverse-subtlest":St("neutral-60"),"bg-inverse-hover":St("neutral-40"),"bg-primary":St("primary-50"),"bg-primary-subtle":St("primary-60"),"bg-primary-subtler":St("primary-95"),"bg-primary-subtlest":St("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":St("primary-40"),"bg-primary-subtlest-hover":St("primary-90"),"bg-primary-subtlest-selected":St("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:St("primary-50"),"hyperlink-hover":St("primary-40"),"hyperlink-visited":St("primary-40"),"hyperlink-inverse":St("primary-inverse"),"focus-ring":St("black"),"focus-ring-inverse":St("white")},kt={text:St("neutral-100"),"text-subtle":St("neutral-80"),"text-subtler":St("neutral-60"),"text-subtlest":St("neutral-50"),"text-primary":St("primary-60"),"text-hover":St("primary-70"),"text-selected":St("primary-60"),"text-selected-hover":St("primary-70"),"text-disabled":St("neutral-60"),"text-disabled-subtle":St("neutral-50"),"text-disabled-subtlest":St("neutral-30"),"text-selected-disabled":St("neutral-90"),"text-success":St("success-70"),"text-warning":St("warning-70"),"text-error":St("error-70"),"text-info":St("info-70"),"text-inverse":St("black"),icon:St("neutral-60"),"icon-subtle":St("neutral-50"),"icon-strongest":St("neutral-90"),"icon-primary":St("primary-60"),"icon-primary-subtle":St("primary-50"),"icon-primary-subtlest":St("primary-40"),"icon-hover":St("primary-70"),"icon-selected":St("primary-60"),"icon-selected-hover":St("primary-70"),"icon-disabled":St("neutral-60"),"icon-disabled-subtle":St("neutral-50"),"icon-selected-disabled":St("neutral-50"),"icon-success":St("success-60"),"icon-warning":St("warning-50"),"icon-error":St("error-60"),"icon-error-strong":St("error-70"),"icon-info":St("info-60"),"icon-inverse":St("black"),"icon-primary-inverse":St("primary-inverse"),border:St("neutral-20"),"border-strong":St("neutral-40"),"border-stronger":St("neutral-60"),"border-primary":St("primary-60"),"border-primary-subtle":St("primary-50"),"border-hover":St("primary-20"),"border-hover-strong":St("primary-50"),"border-selected":St("primary-60"),"border-selected-subtle":St("primary-40"),"border-selected-subtlest":St("primary-20"),"border-selected-hover":St("primary-70"),"border-focus":St("primary-50"),"border-focus-strong":St("primary-60"),"border-disabled":St("neutral-20"),"border-selected-disabled":St("neutral-40"),"border-success":St("success-50"),"border-warning":St("warning-50"),"border-error":St("error-50"),"border-error-focus":St("error-50"),"border-error-focus-strong":St("error-70"),"border-error-strong":St("error-70"),"border-info":St("info-50"),bg:St("black"),"bg-strong":St("neutral-10"),"bg-stronger":St("neutral-20"),"bg-strongest":St("neutral-20"),"bg-hover":St("primary-20"),"bg-hover-strong":St("primary-20"),"bg-hover-subtle":St("primary-10"),"bg-hover-neutral":St("neutral-10"),"bg-hover-neutral-strong":St("neutral-20"),"bg-selected":St("primary-20"),"bg-selected-hover":St("primary-20"),"bg-selected-strong":St("primary-20"),"bg-selected-stronger":St("primary-40"),"bg-selected-strongest":St("primary-60"),"bg-selected-strongest-hover":St("primary-70"),"bg-disabled":St("neutral-20"),"bg-selected-disabled":St("neutral-20"),"bg-selected-stronger-disabled":St("neutral-40"),"bg-success":St("success-10"),"bg-success-hover":St("success-20"),"bg-success-strong":St("success-60"),"bg-success-strong-hover":St("success-70"),"bg-warning":St("warning-10"),"bg-warning-hover":St("warning-20"),"bg-warning-strong":St("warning-60"),"bg-warning-strong-hover":St("warning-70"),"bg-info":St("info-10"),"bg-info-hover":St("info-20"),"bg-info-strong":St("info-60"),"bg-info-strong-hover":St("info-70"),"bg-error":St("error-10"),"bg-error-hover":St("error-20"),"bg-error-strong":St("error-60"),"bg-error-strong-hover":St("error-70"),"bg-inverse":St("neutral-90"),"bg-inverse-subtle":St("neutral-80"),"bg-inverse-subtler":St("neutral-60"),"bg-inverse-subtlest":St("neutral-50"),"bg-inverse-hover":St("neutral-70"),"bg-primary":St("primary-60"),"bg-primary-subtle":St("primary-50"),"bg-primary-subtler":St("primary-20"),"bg-primary-subtlest":St("primary-10"),"bg-available":"#185339","bg-primary-hover":St("primary-70"),"bg-primary-subtlest-hover":St("primary-20"),"bg-primary-subtlest-selected":St("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:St("primary-60"),"hyperlink-hover":St("primary-70"),"hyperlink-visited":St("primary-70"),"hyperlink-inverse":St("primary-inverse"),"focus-ring":St("primary-60"),"focus-ring-inverse":St("black")},Mt={text:St("neutral-30"),"text-subtle":St("neutral-40"),"text-subtler":St("neutral-50"),"text-subtlest":St("neutral-70"),"text-primary":St("neutral-10"),"text-hover":St("neutral-70"),"text-selected":St("neutral-20"),"text-selected-hover":St("neutral-10"),"text-disabled":St("neutral-50"),"text-disabled-subtle":St("neutral-60"),"text-disabled-subtlest":St("neutral-80"),"text-selected-disabled":St("neutral-40"),"text-success":St("success-40"),"text-warning":St("warning-40"),"text-error":St("brand-30"),"text-info":St("neutral-40"),"text-inverse":St("neutral-100"),icon:St("neutral-40"),"icon-subtle":St("neutral-50"),"icon-strongest":St("neutral-10"),"icon-primary":St("neutral-10"),"icon-primary-subtle":St("neutral-30"),"icon-primary-subtlest":St("neutral-60"),"icon-hover":St("neutral-70"),"icon-selected":St("brand-20"),"icon-selected-hover":St("brand-10"),"icon-disabled":St("neutral-50"),"icon-disabled-subtle":St("neutral-60"),"icon-selected-disabled":St("neutral-40"),"icon-success":St("success-40"),"icon-warning":St("warning-60"),"icon-error":St("brand-30"),"icon-error-strong":St("brand-10"),"icon-info":St("neutral-40"),"icon-inverse":St("neutral-100"),"icon-primary-inverse":"#F9B371",border:St("neutral-90"),"border-strong":St("neutral-30"),"border-stronger":St("neutral-20"),"border-primary":St("neutral-40"),"border-primary-subtle":St("neutral-60"),"border-hover":St("neutral-80"),"border-hover-strong":St("neutral-10"),"border-selected":St("brand-20"),"border-selected-subtle":St("neutral-40"),"border-selected-subtlest":St("neutral-70"),"border-selected-hover":St("neutral-10"),"border-focus":St("neutral-20"),"border-focus-strong":St("neutral-10"),"border-disabled":St("neutral-90"),"border-selected-disabled":St("neutral-80"),"border-success":St("success-40"),"border-warning":St("warning-60"),"border-error":St("brand-30"),"border-error-focus":St("brand-20"),"border-error-focus-strong":St("brand-10"),"border-error-strong":St("brand-20"),"border-info":St("neutral-40"),bg:St("neutral-100"),"bg-strong":St("neutral-95"),"bg-stronger":St("neutral-90"),"bg-strongest":St("neutral-80"),"bg-hover":St("brand-90"),"bg-hover-strong":St("brand-80"),"bg-hover-subtle":St("neutral-90"),"bg-hover-neutral":St("neutral-90"),"bg-hover-neutral-strong":St("neutral-90"),"bg-selected":St("brand-100"),"bg-selected-hover":St("brand-30"),"bg-selected-strong":St("brand-50"),"bg-selected-stronger":St("brand-40"),"bg-selected-strongest":St("brand-20"),"bg-selected-strongest-hover":St("brand-10"),"bg-disabled":St("neutral-90"),"bg-selected-disabled":St("neutral-90"),"bg-selected-stronger-disabled":St("neutral-80"),"bg-success":St("success-100"),"bg-success-hover":St("success-95"),"bg-success-strong":St("success-50"),"bg-success-strong-hover":St("success-40"),"bg-warning":St("warning-100"),"bg-warning-hover":St("warning-95"),"bg-warning-strong":St("warning-50"),"bg-warning-strong-hover":St("warning-40"),"bg-info":St("neutral-95"),"bg-info-hover":St("info-95"),"bg-info-strong":St("info-50"),"bg-info-strong-hover":St("info-40"),"bg-error":St("brand-100"),"bg-error-hover":St("error-95"),"bg-error-strong":St("error-50"),"bg-error-strong-hover":St("error-40"),"bg-inverse":St("neutral-40"),"bg-inverse-subtle":St("neutral-60"),"bg-inverse-subtler":St("neutral-70"),"bg-inverse-subtlest":St("neutral-80"),"bg-inverse-hover":St("neutral-30"),"bg-primary":St("brand-20"),"bg-primary-subtle":St("brand-60"),"bg-primary-subtler":St("brand-80"),"bg-primary-subtlest":St("brand-100"),"bg-available":St("success-60"),"bg-primary-hover":St("brand-10"),"bg-primary-subtlest-hover":St("brand-80"),"bg-primary-subtlest-selected":St("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:St("neutral-10"),"hyperlink-hover":St("neutral-40"),"hyperlink-visited":St("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":St("black"),"focus-ring-inverse":St("white")},Ot={text:St("neutral-20"),"text-subtle":St("neutral-30"),"text-subtler":St("neutral-50"),"text-subtlest":St("neutral-60"),"text-primary":St("primary-50"),"text-hover":St("primary-40"),"text-selected":St("primary-50"),"text-selected-hover":St("primary-40"),"text-disabled":St("neutral-50"),"text-disabled-subtle":St("neutral-60"),"text-disabled-subtlest":St("neutral-80"),"text-selected-disabled":St("neutral-20"),"text-success":St("success-40"),"text-warning":St("warning-40"),"text-error":St("error-40"),"text-info":St("info-40"),"text-inverse":St("white"),icon:St("neutral-50"),"icon-subtle":St("neutral-60"),"icon-strongest":St("neutral-20"),"icon-primary":St("primary-50"),"icon-primary-subtle":St("primary-60"),"icon-primary-subtlest":St("primary-70"),"icon-hover":St("primary-40"),"icon-selected":St("primary-50"),"icon-selected-hover":St("primary-40"),"icon-disabled":St("neutral-50"),"icon-disabled-subtle":St("neutral-60"),"icon-selected-disabled":St("neutral-60"),"icon-success":St("success-50"),"icon-warning":St("warning-60"),"icon-error":St("error-50"),"icon-error-strong":St("error-40"),"icon-info":St("info-50"),"icon-inverse":St("white"),"icon-primary-inverse":St("primary-inverse"),border:St("neutral-90"),"border-strong":St("neutral-70"),"border-stronger":St("neutral-50"),"border-primary":St("primary-50"),"border-primary-subtle":St("primary-60"),"border-hover":St("primary-90"),"border-hover-strong":St("primary-60"),"border-selected":St("primary-50"),"border-selected-subtle":St("primary-70"),"border-selected-subtlest":St("primary-90"),"border-selected-hover":St("primary-40"),"border-focus":St("primary-60"),"border-focus-strong":St("primary-50"),"border-disabled":St("neutral-90"),"border-selected-disabled":St("neutral-70"),"border-success":St("success-60"),"border-warning":St("warning-60"),"border-error":St("error-60"),"border-error-focus":St("error-60"),"border-error-focus-strong":St("error-40"),"border-error-strong":St("error-40"),"border-info":St("info-60"),bg:St("white"),"bg-strong":St("neutral-100"),"bg-stronger":St("neutral-95"),"bg-strongest":St("neutral-90"),"bg-hover":St("primary-95"),"bg-hover-strong":St("primary-90"),"bg-hover-subtle":St("primary-100"),"bg-hover-neutral":St("neutral-100"),"bg-hover-neutral-strong":St("neutral-90"),"bg-selected":St("primary-95"),"bg-selected-hover":St("primary-90"),"bg-selected-strong":St("primary-90"),"bg-selected-stronger":St("primary-70"),"bg-selected-strongest":St("primary-50"),"bg-selected-strongest-hover":St("primary-40"),"bg-disabled":St("neutral-95"),"bg-selected-disabled":St("neutral-95"),"bg-selected-stronger-disabled":St("neutral-70"),"bg-success":St("success-100"),"bg-success-hover":St("success-95"),"bg-success-strong":St("success-50"),"bg-success-strong-hover":St("success-40"),"bg-warning":St("warning-100"),"bg-warning-hover":St("warning-95"),"bg-warning-strong":St("warning-50"),"bg-warning-strong-hover":St("warning-40"),"bg-info":St("info-100"),"bg-info-hover":St("info-95"),"bg-info-strong":St("info-50"),"bg-info-strong-hover":St("info-40"),"bg-error":St("error-100"),"bg-error-hover":St("error-95"),"bg-error-strong":St("error-50"),"bg-error-strong-hover":St("error-40"),"bg-inverse":St("neutral-20"),"bg-inverse-subtle":St("neutral-30"),"bg-inverse-subtler":St("neutral-50"),"bg-inverse-subtlest":St("neutral-60"),"bg-inverse-hover":St("neutral-40"),"bg-primary":St("primary-50"),"bg-primary-subtle":St("primary-60"),"bg-primary-subtler":St("primary-95"),"bg-primary-subtlest":St("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":St("primary-40"),"bg-primary-subtlest-hover":St("primary-90"),"bg-primary-subtlest-selected":St("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:St("primary-50"),"hyperlink-hover":St("primary-40"),"hyperlink-visited":St("primary-40"),"hyperlink-inverse":St("primary-inverse"),"focus-ring":St("black"),"focus-ring-inverse":St("white")},zt={text:St("neutral-100"),"text-subtle":St("neutral-80"),"text-subtler":St("neutral-60"),"text-subtlest":St("neutral-50"),"text-primary":St("primary-60"),"text-hover":St("primary-70"),"text-selected":St("primary-60"),"text-selected-hover":St("primary-70"),"text-disabled":St("neutral-60"),"text-disabled-subtle":St("neutral-50"),"text-disabled-subtlest":St("neutral-30"),"text-selected-disabled":St("neutral-90"),"text-success":St("success-70"),"text-warning":St("warning-70"),"text-error":St("error-70"),"text-info":St("info-70"),"text-inverse":St("black"),icon:St("neutral-60"),"icon-subtle":St("neutral-50"),"icon-strongest":St("neutral-90"),"icon-primary":St("primary-60"),"icon-primary-subtle":St("primary-50"),"icon-primary-subtlest":St("primary-40"),"icon-hover":St("primary-70"),"icon-selected":St("primary-60"),"icon-selected-hover":St("primary-70"),"icon-disabled":St("neutral-60"),"icon-disabled-subtle":St("neutral-50"),"icon-selected-disabled":St("neutral-50"),"icon-success":St("success-60"),"icon-warning":St("warning-50"),"icon-error":St("error-60"),"icon-error-strong":St("error-70"),"icon-info":St("info-60"),"icon-inverse":St("black"),"icon-primary-inverse":St("primary-inverse"),border:St("neutral-20"),"border-strong":St("neutral-40"),"border-stronger":St("neutral-60"),"border-primary":St("primary-60"),"border-primary-subtle":St("primary-50"),"border-hover":St("primary-20"),"border-hover-strong":St("primary-50"),"border-selected":St("primary-60"),"border-selected-subtle":St("primary-40"),"border-selected-subtlest":St("primary-20"),"border-selected-hover":St("primary-70"),"border-focus":St("primary-50"),"border-focus-strong":St("primary-60"),"border-disabled":St("neutral-20"),"border-selected-disabled":St("neutral-40"),"border-success":St("success-50"),"border-warning":St("warning-50"),"border-error":St("error-50"),"border-error-focus":St("error-50"),"border-error-focus-strong":St("error-70"),"border-error-strong":St("error-70"),"border-info":St("info-50"),bg:St("black"),"bg-strong":St("neutral-10"),"bg-stronger":St("neutral-20"),"bg-strongest":St("neutral-20"),"bg-hover":St("primary-20"),"bg-hover-strong":St("primary-20"),"bg-hover-subtle":St("primary-10"),"bg-hover-neutral":St("neutral-10"),"bg-hover-neutral-strong":St("neutral-20"),"bg-selected":St("primary-20"),"bg-selected-hover":St("primary-20"),"bg-selected-strong":St("primary-20"),"bg-selected-stronger":St("primary-40"),"bg-selected-strongest":St("primary-60"),"bg-selected-strongest-hover":St("primary-70"),"bg-disabled":St("neutral-20"),"bg-selected-disabled":St("neutral-20"),"bg-selected-stronger-disabled":St("neutral-40"),"bg-success":St("success-10"),"bg-success-hover":St("success-20"),"bg-success-strong":St("success-60"),"bg-success-strong-hover":St("success-70"),"bg-warning":St("warning-10"),"bg-warning-hover":St("warning-20"),"bg-warning-strong":St("warning-60"),"bg-warning-strong-hover":St("warning-70"),"bg-info":St("info-10"),"bg-info-hover":St("info-20"),"bg-info-strong":St("info-60"),"bg-info-strong-hover":St("info-70"),"bg-error":St("error-10"),"bg-error-hover":St("error-20"),"bg-error-strong":St("error-60"),"bg-error-strong-hover":St("error-70"),"bg-inverse":St("neutral-90"),"bg-inverse-subtle":St("neutral-80"),"bg-inverse-subtler":St("neutral-60"),"bg-inverse-subtlest":St("neutral-50"),"bg-inverse-hover":St("neutral-70"),"bg-primary":St("primary-60"),"bg-primary-subtle":St("primary-50"),"bg-primary-subtler":St("primary-20"),"bg-primary-subtlest":St("primary-10"),"bg-available":"#185339","bg-primary-hover":St("primary-70"),"bg-primary-subtlest-hover":St("primary-20"),"bg-primary-subtlest-selected":St("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:St("primary-60"),"hyperlink-hover":St("primary-70"),"hyperlink-visited":St("primary-70"),"hyperlink-inverse":St("primary-inverse"),"focus-ring":St("primary-60"),"focus-ring-inverse":St("black")},Yt={collections:{lifesg:At,bookingsg:At,rbs:At,mylegacy:At,ccube:At,oneservice:At,pa:Mt,a11yplayground:Ot,supportgowhere:At},defaultValue:"lifesg"},jt={collections:{lifesg:kt,bookingsg:kt,rbs:kt,mylegacy:kt,ccube:kt,oneservice:kt,pa:kt,a11yplayground:zt,supportgowhere:kt},defaultValue:"lifesg"},Tt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),o=ut(a?jt:Yt,null==n?void 0:n.colourScheme),i=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[i],l=s?ct(o,e,s):o[e];return"function"==typeof l?l(r):l},Rt={text:Tt("text"),"text-subtle":Tt("text-subtle"),"text-subtler":Tt("text-subtler"),"text-subtlest":Tt("text-subtlest"),"text-primary":Tt("text-primary"),"text-hover":Tt("text-hover"),"text-selected":Tt("text-selected"),"text-selected-hover":Tt("text-selected-hover"),"text-disabled":Tt("text-disabled"),"text-disabled-subtle":Tt("text-disabled-subtle"),"text-disabled-subtlest":Tt("text-disabled-subtlest"),"text-selected-disabled":Tt("text-selected-disabled"),"text-success":Tt("text-success"),"text-warning":Tt("text-warning"),"text-error":Tt("text-error"),"text-info":Tt("text-info"),"text-inverse":Tt("text-inverse"),icon:Tt("icon"),"icon-subtle":Tt("icon-subtle"),"icon-strongest":Tt("icon-strongest"),"icon-primary":Tt("icon-primary"),"icon-primary-subtle":Tt("icon-primary-subtle"),"icon-primary-subtlest":Tt("icon-primary-subtlest"),"icon-hover":Tt("icon-hover"),"icon-selected":Tt("icon-selected"),"icon-selected-hover":Tt("icon-selected-hover"),"icon-disabled":Tt("icon-disabled"),"icon-disabled-subtle":Tt("icon-disabled-subtle"),"icon-selected-disabled":Tt("icon-selected-disabled"),"icon-success":Tt("icon-success"),"icon-warning":Tt("icon-warning"),"icon-error":Tt("icon-error"),"icon-error-strong":Tt("icon-error-strong"),"icon-info":Tt("icon-info"),"icon-inverse":Tt("icon-inverse"),"icon-primary-inverse":Tt("icon-primary-inverse"),border:Tt("border"),"border-strong":Tt("border-strong"),"border-stronger":Tt("border-stronger"),"border-primary":Tt("border-primary"),"border-primary-subtle":Tt("border-primary-subtle"),"border-hover":Tt("border-hover"),"border-hover-strong":Tt("border-hover-strong"),"border-selected":Tt("border-selected"),"border-selected-subtle":Tt("border-selected-subtle"),"border-selected-subtlest":Tt("border-selected-subtlest"),"border-selected-hover":Tt("border-selected-hover"),"border-focus":Tt("border-focus"),"border-focus-strong":Tt("border-focus-strong"),"border-disabled":Tt("border-disabled"),"border-selected-disabled":Tt("border-selected-disabled"),"border-success":Tt("border-success"),"border-warning":Tt("border-warning"),"border-error":Tt("border-error"),"border-error-focus":Tt("border-error-focus"),"border-error-focus-strong":Tt("border-error-focus-strong"),"border-error-strong":Tt("border-error-strong"),"border-info":Tt("border-info"),bg:Tt("bg"),"bg-strong":Tt("bg-strong"),"bg-stronger":Tt("bg-stronger"),"bg-strongest":Tt("bg-strongest"),"bg-hover":Tt("bg-hover"),"bg-hover-strong":Tt("bg-hover-strong"),"bg-hover-subtle":Tt("bg-hover-subtle"),"bg-hover-neutral":Tt("bg-hover-neutral"),"bg-hover-neutral-strong":Tt("bg-hover-neutral-strong"),"bg-selected":Tt("bg-selected"),"bg-selected-hover":Tt("bg-selected-hover"),"bg-selected-strong":Tt("bg-selected-strong"),"bg-selected-stronger":Tt("bg-selected-stronger"),"bg-selected-strongest":Tt("bg-selected-strongest"),"bg-selected-strongest-hover":Tt("bg-selected-strongest-hover"),"bg-disabled":Tt("bg-disabled"),"bg-selected-disabled":Tt("bg-selected-disabled"),"bg-selected-stronger-disabled":Tt("bg-selected-stronger-disabled"),"bg-success":Tt("bg-success"),"bg-success-hover":Tt("bg-success-hover"),"bg-success-strong":Tt("bg-success-strong"),"bg-success-strong-hover":Tt("bg-success-strong-hover"),"bg-warning":Tt("bg-warning"),"bg-warning-hover":Tt("bg-warning-hover"),"bg-warning-strong":Tt("bg-warning-strong"),"bg-warning-strong-hover":Tt("bg-warning-strong-hover"),"bg-info":Tt("bg-info"),"bg-info-hover":Tt("bg-info-hover"),"bg-info-strong":Tt("bg-info-strong"),"bg-info-strong-hover":Tt("bg-info-strong-hover"),"bg-error":Tt("bg-error"),"bg-error-hover":Tt("bg-error-hover"),"bg-error-strong":Tt("bg-error-strong"),"bg-error-strong-hover":Tt("bg-error-strong-hover"),"bg-inverse":Tt("bg-inverse"),"bg-inverse-subtle":Tt("bg-inverse-subtle"),"bg-inverse-subtler":Tt("bg-inverse-subtler"),"bg-inverse-subtlest":Tt("bg-inverse-subtlest"),"bg-inverse-hover":Tt("bg-inverse-hover"),"bg-primary":Tt("bg-primary"),"bg-primary-subtle":Tt("bg-primary-subtle"),"bg-primary-subtler":Tt("bg-primary-subtler"),"bg-primary-subtlest":Tt("bg-primary-subtlest"),"bg-available":Tt("bg-available"),"bg-primary-hover":Tt("bg-primary-hover"),"bg-primary-subtlest-hover":Tt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Tt("bg-primary-subtlest-selected"),"overlay-strong":Tt("overlay-strong"),"overlay-subtle":Tt("overlay-subtle"),hyperlink:Tt("hyperlink"),"hyperlink-hover":Tt("hyperlink-hover"),"hyperlink-visited":Tt("hyperlink-visited"),"hyperlink-inverse":Tt("hyperlink-inverse"),"focus-ring":Tt("focus-ring"),"focus-ring-inverse":Tt("focus-ring-inverse")},_t={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:o,radius:i,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ht["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Rt.border(r),u=ht.solid;return v`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:o,radius:i,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ht["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Rt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return v`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},It=e=>1===e.length&&"theme"in e[0],Lt=e=>(...r)=>t=>{const n=It(r)?[]:r,a=It(r)?r[0]:t,o=a.theme;return(0,ut(_t,null==o?void 0:o.borderScheme)[e])(...n)(a)},Ht={solid:Lt("solid"),"dashed-default":Lt("dashed-default")},Wt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,a=ut(Wt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ct(a,e,n.overrides.breakpoint):a[e],o},Nt={"xxs-min":Pt("xxs-min"),"xxs-max":Pt("xxs-max"),"xs-min":Pt("xs-min"),"xs-max":Pt("xs-max"),"sm-min":Pt("sm-min"),"sm-max":Pt("sm-max"),"md-min":Pt("md-min"),"md-max":Pt("md-max"),"lg-min":Pt("lg-min"),"lg-max":Pt("lg-max"),"xl-min":Pt("xl-min"),"xl-max":Pt("xl-max"),"xxl-min":Pt("xxl-min"),"xxs-column":Pt("xxs-column"),"xs-column":Pt("xs-column"),"sm-column":Pt("sm-column"),"md-column":Pt("md-column"),"lg-column":Pt("lg-column"),"xl-column":Pt("xl-column"),"xxl-column":Pt("xxl-column"),"xxs-gutter":Pt("xxs-gutter"),"xs-gutter":Pt("xs-gutter"),"sm-gutter":Pt("sm-gutter"),"md-gutter":Pt("md-gutter"),"lg-gutter":Pt("lg-gutter"),"xl-gutter":Pt("xl-gutter"),"xxl-gutter":Pt("xxl-gutter"),"xxs-margin":Pt("xxs-margin"),"xs-margin":Pt("xs-margin"),"sm-margin":Pt("sm-margin"),"md-margin":Pt("md-margin"),"lg-margin":Pt("lg-margin"),"xl-margin":Pt("xl-margin"),"xxl-margin":Pt("xxl-margin")},Ut=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Nt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Vt={MaxWidth:Ut("max-width"),MinWidth:Ut("min-width")},Kt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,a=ut(Kt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ct(a,e,n.overrides.fontSpec):a[e]},Jt={"heading-size-xxl":Zt("heading-size-xxl"),"heading-size-xl":Zt("heading-size-xl"),"heading-size-lg":Zt("heading-size-lg"),"heading-size-md":Zt("heading-size-md"),"heading-size-sm":Zt("heading-size-sm"),"heading-size-xs":Zt("heading-size-xs"),"heading-lh-xxl":Zt("heading-lh-xxl"),"heading-lh-xl":Zt("heading-lh-xl"),"heading-lh-lg":Zt("heading-lh-lg"),"heading-lh-md":Zt("heading-lh-md"),"heading-lh-sm":Zt("heading-lh-sm"),"heading-lh-xs":Zt("heading-lh-xs"),"heading-ls-xxl":Zt("heading-ls-xxl"),"heading-ls-xl":Zt("heading-ls-xl"),"heading-ls-lg":Zt("heading-ls-lg"),"heading-ls-md":Zt("heading-ls-md"),"heading-ls-sm":Zt("heading-ls-sm"),"heading-ls-xs":Zt("heading-ls-xs"),"weight-light":Zt("weight-light"),"weight-regular":Zt("weight-regular"),"weight-semibold":Zt("weight-semibold"),"weight-bold":Zt("weight-bold"),"font-family":Zt("font-family"),"body-size-baseline":Zt("body-size-baseline"),"body-size-md":Zt("body-size-md"),"body-size-sm":Zt("body-size-sm"),"body-size-xs":Zt("body-size-xs"),"body-lh-baseline":Zt("body-lh-baseline"),"body-lh-md":Zt("body-lh-md"),"body-lh-sm":Zt("body-lh-sm"),"body-lh-xs":Zt("body-lh-xs"),"body-ls-baseline":Zt("body-ls-baseline"),"body-ls-md":Zt("body-ls-md"),"body-ls-sm":Zt("body-ls-sm"),"body-ls-xs":Zt("body-ls-xs"),"form-label-size":Zt("form-label-size"),"form-description-size":Zt("form-description-size"),"form-label-lh":Zt("form-label-lh"),"form-description-lh":Zt("form-description-lh"),"form-label-ls":Zt("form-label-ls"),"form-description-ls":Zt("form-description-ls")},qt=(e,r,t,n,a)=>{const{disableLigatures:o}=a||{};return v`
        font-family: ${Zt("font-family")};
        font-size: ${Zt(e)};
        font-weight: ${Zt(r)};
        line-height: ${Zt(t)};
        letter-spacing: ${Zt(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Xt=(e={})=>({"heading-xxl-light":qt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":qt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":qt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":qt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":qt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":qt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":qt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":qt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":qt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":qt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":qt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":qt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":qt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":qt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":qt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":qt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":qt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":qt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":qt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":qt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":qt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":qt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":qt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":qt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":qt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":qt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":qt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":qt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":qt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":qt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":qt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":qt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":qt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":qt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":qt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":qt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":qt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":qt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":qt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":qt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":qt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":qt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Gt=Xt({disableLigatures:!0}),Qt={collections:{default:Xt(),bookingsg:Gt,pa:Xt({disableLigatures:!0}),a11yplayground:Xt({disableLigatures:!0}),supportgowhere:Xt({disableLigatures:!0})},defaultValue:"default"},en=e=>r=>{var t;const n=r.theme,a=ut(Qt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ct(a,e,n.overrides.font):a[e];return"function"==typeof o?o(r):o},rn={"heading-xxl-light":en("heading-xxl-light"),"heading-xxl-regular":en("heading-xxl-regular"),"heading-xxl-semibold":en("heading-xxl-semibold"),"heading-xxl-bold":en("heading-xxl-bold"),"heading-xl-light":en("heading-xl-light"),"heading-xl-regular":en("heading-xl-regular"),"heading-xl-semibold":en("heading-xl-semibold"),"heading-xl-bold":en("heading-xl-bold"),"heading-lg-light":en("heading-lg-light"),"heading-lg-regular":en("heading-lg-regular"),"heading-lg-semibold":en("heading-lg-semibold"),"heading-lg-bold":en("heading-lg-bold"),"heading-md-light":en("heading-md-light"),"heading-md-regular":en("heading-md-regular"),"heading-md-semibold":en("heading-md-semibold"),"heading-md-bold":en("heading-md-bold"),"heading-sm-light":en("heading-sm-light"),"heading-sm-regular":en("heading-sm-regular"),"heading-sm-semibold":en("heading-sm-semibold"),"heading-sm-bold":en("heading-sm-bold"),"heading-xs-light":en("heading-xs-light"),"heading-xs-regular":en("heading-xs-regular"),"heading-xs-semibold":en("heading-xs-semibold"),"heading-xs-bold":en("heading-xs-bold"),"body-baseline-light":en("body-baseline-light"),"body-baseline-regular":en("body-baseline-regular"),"body-baseline-semibold":en("body-baseline-semibold"),"body-baseline-bold":en("body-baseline-bold"),"body-md-light":en("body-md-light"),"body-md-regular":en("body-md-regular"),"body-md-semibold":en("body-md-semibold"),"body-md-bold":en("body-md-bold"),"body-sm-light":en("body-sm-light"),"body-sm-regular":en("body-sm-regular"),"body-sm-semibold":en("body-sm-semibold"),"body-sm-bold":en("body-sm-bold"),"body-xs-light":en("body-xs-light"),"body-xs-regular":en("body-xs-regular"),"body-xs-semibold":en("body-xs-semibold"),"body-xs-bold":en("body-xs-bold"),"form-label":en("form-label"),"form-description":en("form-description")},tn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},nn=e=>r=>{var t;const n=r.theme,a=ut(tn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ct(a,e,n.overrides.motion):a[e]},an={"duration-150":nn("duration-150"),"duration-250":nn("duration-250"),"duration-350":nn("duration-350"),"duration-500":nn("duration-500"),"duration-800":nn("duration-800"),"duration-1000":nn("duration-1000"),"ease-default":nn("ease-default"),"ease-standard":nn("ease-standard"),"ease-entrance":nn("ease-entrance"),"ease-exit":nn("ease-exit")},on={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},sn=e=>r=>{var t;const n=r.theme,a=ut(on,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ct(a,e,n.overrides.radius)}px`:`${a[e]}px`},ln={none:sn("none"),xs:sn("xs"),sm:sn("sm"),md:sn("md"),lg:sn("lg"),full:sn("full")},dn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},cn=e=>r=>{var t;const n=r.theme,a=ut(dn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ct(a,e,n.overrides.spacing)}px`:`${a[e]}px`},un={"spacing-0":cn("spacing-0"),"spacing-4":cn("spacing-4"),"spacing-8":cn("spacing-8"),"spacing-12":cn("spacing-12"),"spacing-16":cn("spacing-16"),"spacing-20":cn("spacing-20"),"spacing-24":cn("spacing-24"),"spacing-32":cn("spacing-32"),"spacing-40":cn("spacing-40"),"spacing-48":cn("spacing-48"),"spacing-64":cn("spacing-64"),"spacing-72":cn("spacing-72"),"layout-xs":cn("layout-xs"),"layout-sm":cn("layout-sm"),"layout-md":cn("layout-md"),"layout-lg":cn("layout-lg"),"layout-xl":cn("layout-xl"),"layout-xxl":cn("layout-xxl"),"layout-xxxl":cn("layout-xxxl")},gn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),bn=Object.assign(Object.assign({},Rt),{Primitive:Bt}),hn=Object.assign(Object.assign({},rn),{Spec:Jt}),mn=an,fn=Object.assign(Object.assign({},ht),{Util:Ht}),yn=un,pn=ln,vn=Nt,xn=Vt,Dn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},wn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Fn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},$n={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},En={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Cn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Sn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Bn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},An={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Dn),{light:gn(Dn,"light"),dark:gn(Dn,"dark")}),Object.assign(Object.assign({},wn),{light:gn(wn,"light"),dark:gn(wn,"dark")}),Object.assign(Object.assign({},Fn),{light:gn(Fn,"light"),dark:gn(Fn,"dark")}),Object.assign(Object.assign({},$n),{light:gn($n,"light"),dark:gn($n,"dark")}),Object.assign(Object.assign({},En),{light:gn(En,"light"),dark:gn(En,"dark")}),Object.assign(Object.assign({},Cn),{light:gn(Cn,"light"),dark:gn(Cn,"dark")}),Object.assign(Object.assign({},Sn),{light:gn(Sn,"light"),dark:gn(Sn,"dark")}),Object.assign(Object.assign({},Bn),{light:gn(Bn,"light"),dark:gn(Bn,"dark")}),Object.assign(Object.assign({},An),{light:gn(An,"light"),dark:gn(An,"dark")});const kn=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=kn(e.$variant);return v`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Mn=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${yn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>kn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${pn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${bn["border-focus"]};
    }
`,On=p.button`
    ${Mn}
    cursor: pointer;
`;p.div`
    ${Mn}
`;const zn=x`
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
`;p.div`
    position: relative;
    border: ${fn["width-010"]} ${fn.solid} ${bn.border};
    border-radius: ${pn.sm};
    background: ${bn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${bn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${bn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${zn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?v`
                background: ${bn["bg-disabled"]};

                ${On} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${bn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${On} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?v`
                border-color: ${bn["border-error"]};

                :focus-within {
                    border-color: ${bn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${bn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${mn["duration-250"]} ${mn["ease-default"]};
    margin-left: ${yn["spacing-16"]};
`,p(y)`
    color: ${bn.icon};
`,p.div`
    height: 1px;
    background: ${bn.border};
    margin: 0 ${yn["spacing-8"]};
`,p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return v`
                color: ${bn["text-disabled"]};
            `}}
`;p(p.div`
    ${e=>"small"===e.$variant?hn["body-md-regular"]:hn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return v`
                    ${r=1,v`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${bn["text-subtler"]};
`;var Yn=function(e,r){return Yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Yn(e,r)};var jn=function(){return jn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},jn.apply(this,arguments)};var Tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Rn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},_n="object"==typeof Tn&&Tn&&Tn.Object===Object&&Tn,In="object"==typeof self&&self&&self.Object===Object&&self,Ln=_n||In||Function("return this")(),Hn=Ln,Wn=function(){return Hn.Date.now()},Pn=/\s/;var Nn=function(e){for(var r=e.length;r--&&Pn.test(e.charAt(r)););return r},Un=/^\s+/;var Vn=function(e){return e?e.slice(0,Nn(e)+1).replace(Un,""):e},Kn=Ln.Symbol,Zn=Kn,Jn=Object.prototype,qn=Jn.hasOwnProperty,Xn=Jn.toString,Gn=Zn?Zn.toStringTag:void 0;var Qn=function(e){var r=qn.call(e,Gn),t=e[Gn];try{e[Gn]=void 0;var n=!0}catch(e){}var a=Xn.call(e);return n&&(r?e[Gn]=t:delete e[Gn]),a},ea=Object.prototype.toString;var ra=Qn,ta=function(e){return ea.call(e)},na=Kn?Kn.toStringTag:void 0;var aa=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":na&&na in Object(e)?ra(e):ta(e)},oa=function(e){return null!=e&&"object"==typeof e};var ia=Vn,sa=Rn,la=function(e){return"symbol"==typeof e||oa(e)&&"[object Symbol]"==aa(e)},da=/^[-+]0x[0-9a-f]+$/i,ca=/^0b[01]+$/i,ua=/^0o[0-7]+$/i,ga=parseInt;var ba=Rn,ha=Wn,ma=function(e){if("number"==typeof e)return e;if(la(e))return NaN;if(sa(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=sa(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ia(e);var t=ca.test(e);return t||ua.test(e)?ga(e.slice(2),t?2:8):da.test(e)?NaN:+e},fa=Math.max,ya=Math.min;var pa=function(e,r,t){var n,a,o,i,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=a;return n=a=void 0,d=r,i=e.apply(o,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=ha();if(h(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?ya(t,o-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?b(e):(n=a=void 0,i)}function y(){var e=ha(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):i}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),i}return r=ma(r)||0,ba(t)&&(c=!!t.leading,o=(u="maxWait"in t)?fa(ma(t.maxWait)||0,r):o,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?i:f(ha())},y},va=pa,xa=Rn;var Da=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return xa(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),va(e,r,{leading:n,maxWait:r,trailing:a})},wa=function(e,r,t,n){switch(r){case"debounce":return pa(e,t,n);case"throttle":return Da(e,t,n);default:return e}},Fa=function(e){return"function"==typeof e},$a=function(){return"undefined"==typeof window},Ea=function(e){return e instanceof Element||e instanceof HTMLDocument},Ca=function(e,r,t,n){return function(a){var o=a.width,i=a.height;r((function(r){return r.width===o&&r.height===i||r.width===o&&!n||r.height===i&&!t?r:(e&&Fa(e)&&e(o,i),{width:o,height:i})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!$a()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if($a())return null;if(r)return document.querySelector(r);if(n&&Ea(n))return n;if(t.targetRef&&Ea(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,o=r.handleHeight,i=void 0===o||o,s=r.onResize;if(a||i){var l=Ca(s,t.setState.bind(t),a,i);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!$a()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Fa(r)?"renderProp":Fa(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,o=r.refreshRate,i=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,$a()||(t.resizeHandler=wa(t.createResizeHandler,a,i,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Yn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){$a()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,o=r.nodeType,i=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(i,null)}}}(c);var Sa,Ba=$a()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Sa||(Sa={}));p.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Aa=e=>{const r=b.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},ka=p.div`
    display: flex;
    flex-direction: column;
`,Ma=e=>"right"===e?"bottom-end":"bottom-start",Oa=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y,rootNode:p})=>{var v;const x=D(),T=vn["sm-max"]({theme:x}),R=o(null),_=o(null),{width:I=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,f=o(t),y=o(null),p=null!=b?b:y,v=o(),x=i({width:void 0,height:void 0}),D=x[0],w=x[1];return Ba((function(){if(!$a()){var e=Ca(m,w,c,g);v.current=wa((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!$a()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),jn({ref:p},D)}({targetRef:R,handleHeight:!1}),L={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<T;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:W,context:P}=F({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:$,placement:Ma(f),middleware:[E(m),C(),S({limiter:B()}),A({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),L]}),N=(()=>{const[e,r]=i(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Sa.Change,e),t.events.emit(Sa.Ready),()=>t.events.off(Sa.Change,e)}),[t]),e})(),{isMounted:U,styles:V}=k(P,{initial:{opacity:0},open:{opacity:1},duration:300}),K=M(P,{enabled:n,toggle:h}),Z=O(P,{enabled:n}),{getReferenceProps:J,getFloatingProps:q}=z([K,Z]);return e(r,{children:[t("div",Object.assign({ref:e=>{R.current=e,H.setReference(e)}},J(),{children:c()})),U&&t(Y,{root:p,children:t(j,{context:P,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:H.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=b?b:N)&&void 0!==v?v:50})},q(),{children:t(ka,{ref:_,style:Object.assign({},V),inert:Aa(V.opacity<1),children:g({elementWidth:I})})}))})})]})},za=p.div`
    --vertical-inset: ${yn["spacing-24"]};
    --horizontal-inset: ${yn["spacing-20"]};
    --header-bottom-spacing: ${yn["spacing-4"]};

    border: ${fn["width-010"]} ${fn.solid} ${bn.border};
    border-radius: ${pn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${xn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var Ya={exports:{}};Ya.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},i=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=i(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=o&&o.formats;for(var i=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||a[n]||e[n]||a[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=i.length,l=0;l<s;l+=1){var d=i[l],c=u[d],g=c&&c[0],b=c&&c[1];i[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=i[t];if("string"==typeof a)n+=a.length;else{var o=a.regex,l=a.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(i=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,i=e.args;this.$u=n;var s=i[1];if("string"==typeof s){var l=!0===i[2],d=!0===i[3],c=l||d,u=i[2];d&&(u=i[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,o=n.month,i=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=i||(a||o?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!o||(f=o>0?o-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,h,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,h,y,p,v,x)):new Date(m,f,h,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){i[1]=s[h-1];var m=t.apply(this,i);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var ja=H(Ya.exports),Ta={exports:{}};Ta.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var o=t(e),i=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(i,n):!this.isAfter(i,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(i,n):!this.isBefore(i,n))}};var Ra=H(Ta.exports),_a={exports:{}};_a.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Ia=H(_a.exports),La={exports:{}};La.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ha,Wa,Pa,Na=H(La.exports),Ua={exports:{}},Va=H(Ua.exports=(Ha={year:0,month:1,day:2,hour:3,minute:4,second:5},Wa={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Wa[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Wa[n]=a),a}(r,t);return a.formatToParts(n)},o=function(e,r){for(var n=a(e,r),o=[],i=0;i<n.length;i+=1){var s=n[i],l=s.type,d=s.value,c=Ha[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},i=r.prototype;i.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),o=this.toDate(),i=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(i))/1e3/60),l=t(i,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},i.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=i.startOf;i.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var i=a&&r,s=a||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=o(n,t);if(r===a)return[n,r];var i=o(n-=60*(a-r)*1e3,t);return a===i?[n,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(t.utc(e,i).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));P.extend(Ra),P.extend(Na),P.extend(Ia),P.extend(ja),P.extend(Va),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=P(r).startOf("week");return Ka(t).map((e=>Za(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Za(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(P(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+P(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=P(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const o=e.isWithinRange(r,n?P(n):void 0,a?P(a):void 0),i=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!i}}(Pa||(Pa={}));const Ka=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Za=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ja=[1,3,5,7,8,10,12],qa=[4,6,9,11];var Xa,Ga,Qa,eo;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),o=parseInt(t),i=parseInt(n);return 0==a?"1":Ja.includes(o)?Math.min(a,31).toString():qa.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=P(e,t);return P(r,t).diff(n,"minute")},e.toDayjs=e=>e?P(e):P(),e.addMinutesToTime=(e,r,t="HH:mm")=>P(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>P(e).isSame(P(r),t)}(Xa||(Xa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!P(e).isBefore(n,"day"))||!(!a||!P(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(P(e).isValid())return e}return""}}(Ga||(Ga={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Qa||(Qa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/a));const i=n+o;if(i<e.length){const r=Math.floor(i/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const o=Math.floor(.6*a),i=Math.floor(.2*a);return`${e.substring(0,o)}...${e.substring(e.length-i)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:o="•",maskRegex:i,maskTransformer:s}=t;if(s)return s(e);if(i)return e.replace(i,o);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(eo||(eo={}));const ro=e=>{const[r,t]=i(e),n=o(e);return[r,h((e=>{n.current=e,t(e)}),[]),n]},to=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,no=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ao=p.div`
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
    animation: ${no} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,oo=p(ao)`
    animation-delay: -0.45s;
`,io=p(ao)`
    animation-delay: -0.3s;
`,so=p(ao)`
    animation-delay: -0.15s;
`,lo={Button:{"button-radius":ln.md,"button-default-colour-bg":Rt["bg-primary"],"button-default-colour-bg-hover":Rt["bg-primary-hover"],"button-default-colour-text":Rt["text-inverse"],"button-secondary-colour-border":Rt["border-primary"],"button-secondary-colour-text":Rt["text-primary"],"button-light-colour-text":Rt["text-primary"],"button-link-colour-text":Rt["text-primary"]}},co={collections:{default:{Button:{"button-radius":ln.sm,"button-default-colour-bg":Rt["bg-primary"],"button-default-colour-bg-hover":Rt["bg-primary-hover"],"button-default-colour-text":Rt["text-inverse"],"button-secondary-colour-border":Rt["border-primary"],"button-secondary-colour-text":Rt["text-primary"],"button-light-colour-text":Rt["text-primary"],"button-link-colour-text":Rt["text-primary"]}},pa:{Button:{"button-radius":ln.full,"button-default-colour-bg":Rt["bg-primary"],"button-default-colour-bg-hover":Rt["bg-primary-hover"],"button-default-colour-text":Rt["text-inverse"],"button-secondary-colour-border":Rt["border-primary"],"button-secondary-colour-text":Rt["text-primary"],"button-light-colour-text":Rt["text-primary"],"button-link-colour-text":Rt["text-primary"]}},a11yplayground:lo},defaultValue:"default"},uo=(e,r)=>t=>{var n,a;const o=t.theme,i=ut(co,null==o?void 0:o.componentScheme);return go((null===(a=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||i[e][r],t)},go=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},bo=uo("Button","button-radius"),ho=uo("Button","button-default-colour-bg"),mo=uo("Button","button-default-colour-bg-hover"),fo=uo("Button","button-default-colour-text"),yo=uo("Button","button-secondary-colour-border"),po=uo("Button","button-secondary-colour-text"),vo=uo("Button","button-light-colour-text"),xo=uo("Button","button-link-colour-text"),Do=p.button`
    padding: ${yn["spacing-8"]} ${yn["spacing-16"]};
    min-width: 4rem;
    border: ${fn["width-010"]} ${fn.solid} transparent;
    transition: all ${mn["duration-250"]} ${mn["ease-default"]};
    border-radius: ${bo};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${bn.bg};
                    border-color: ${e.$buttonIsDanger?bn["border-error-strong"]:yo};

                    color: ${e.$buttonIsDanger?bn["text-error"]:po};

                    &:hover,
                    &:active {
                        background-color: ${bn["bg-hover-neutral"]};
                    }
                `;case"light":return v`
                    background-color: ${bn.bg};
                    border-color: ${bn.border};

                    color: ${e.$buttonIsDanger?bn["text-error"]:vo};

                    &:hover,
                    &:active {
                        background-color: ${bn["bg-hover-neutral"]};
                    }
                `;case"link":return v`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?bn["text-error"]:xo};
                    &:hover,
                    &:active {
                        background-color: ${bn["bg-hover-neutral"]};
                    }
                `;case"disabled":return v`
                    background-color: ${bn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${bn["text-disabled"]};
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?bn["bg-error-strong"]:ho};};

                    ${xn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${fo}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?bn["bg-error-strong-hover"]:mo}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return v`
                    height: 2.5rem;
                    ${hn["body-md-semibold"]}

                    ${xn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return v`
                    height: 4rem;
                    ${hn["heading-md-semibold"]}

                    ${xn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return v`
                    height: 3rem;
                    ${hn["heading-xs-semibold"]}

                    ${xn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,wo=p((({color:r,className:n,size:a})=>e(to,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ao,{id:"inner1"}),t(oo,{id:"inner2"}),t(io,{id:"inner3"}),t(so,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Fo=(r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:s="default",danger:l=!1}=r,d=I(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Do,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[i&&t(wo,{}),t("span",{children:a})]}))};Fo.displayName="Button.Default";const $o=(r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:s="default",danger:l=!1}=r,d=I(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Do,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[i&&t(wo,{}),t("span",{children:a})]}))};$o.displayName="Button.Small";const Eo=(r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:s="default",danger:l=!1}=r,d=I(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Do,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[i&&t(wo,{}),t("span",{children:a})]}))};Eo.displayName="Button.Large";const Co={Default:a.forwardRef(Fo),Small:a.forwardRef($o),Large:a.forwardRef(Eo)},So=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${yn["spacing-24"]};
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

        ${({$highlight:e})=>e&&v`
                background-color: ${bn["bg-hover-neutral"]};
            `}
    }
`,Bo=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:o="none",type:i="button"}=e,s=I(e,["children","focusHighlight","focusOutline","type"]);return t(So,Object.assign({ref:r,$outline:o,$highlight:a,type:i},s,{children:n}))})),Ao=v`
    color: ${bn.icon};
    height: 1rem;
    width: 1rem;
`,ko=p(R)`
    ${Ao}
`,Mo=p(_)`
    ${Ao}
`,Oo=p(y)`
    ${Ao}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,zo=p.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Yo=p.div`
    display: flex;
    flex: 1;
    position: relative;
`,jo=p.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,To=p.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${bn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return v`
                display: none;
            `}}
`,Ro=p.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,_o=p.div`
    display: flex;
`,Io=p.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?v`
                display: none;
            `:e.$expanded?v`
                ${Oo} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Lo=p.span`
    ${hn["body-md-regular"]}
    color: ${bn.text};
`,Ho=p.div`
    display: flex;
`,Wo=p(Bo)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Po=p.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,No=p(Co.Small)`
    flex: 1;
`,Uo=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Vo=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${pn.md};
    margin: 0 0.5rem;
    transition: ${mn["duration-150"]} ${mn["ease-default"]};

    // default styles
    ${hn["body-md-regular"]}
    border-radius: ${pn.md};
    border: ${fn["width-010"]} ${fn.solid} transparent;
    background-clip: border-box;
    color: ${bn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?v`
                cursor: pointer;
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?v`
                background: ${bn["bg-selected"]};
                border-color: ${bn["border-selected"]};
                color: ${bn["text-selected"]};
                font-weight: ${hn.Spec["weight-semibold"]};

                ${r&&v`
                    &:hover {
                        background: ${bn["bg-selected-hover"]};
                        border-color: ${bn["border-selected-hover"]};
                        color: ${bn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?v`
                color: ${bn["text-primary"]};
                font-weight: ${hn.Spec["weight-semibold"]};
            `:t?v`
                color: ${bn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?v`
                &:hover {
                    background: ${bn["bg-selected-hover"]};
                    border-color: ${bn["border-selected-hover"]};
                    color: ${bn["text-selected-hover"]};
                    font-weight: ${hn.Spec["weight-semibold"]};
                }
            `:v`
            &:hover {
                background: ${bn["bg-hover"]};
                color: ${bn["text-hover"]};
                font-weight: ${hn.Spec["weight-semibold"]};
            }
        `}}
`,Ko=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const h=m((()=>Pa.generateMonths(P(e))),[e]),f=o(new Array(h.length).fill(null)),[y,p]=i(h.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==y&&(null===(e=f.current[y])||void 0===e||e.focus())}),[y,h]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,o="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!o)},D=e=>{const r=e.format("MMMM"),t=(n=e,!Pa.isWithinRange(n,d?P(d):void 0,c?P(c):void 0,"month"));var n;const a=s.isSame(e,"month"),o=a?"selected-month":P().isSame(e,"month")?"current-month":"default",i=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:o,tabIndex:i}};return h.length?t(Uo,{onBlur:()=>{p(null)},children:h.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:o,month:i,tabIndex:s}=D(e);return t(Vo,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===o,$variant:o,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const o=h.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=o-1;break;case"ArrowRight":a=o+1;break;case"ArrowUp":a=o-2;break;case"ArrowDown":a=o+2}void 0!==a&&a>=0&&a<h.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:i},i)}))}):null},Zo=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Jo=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${mn["duration-150"]} ${mn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${hn["body-md-regular"]}
    border-radius: ${pn.md};
    border: ${fn["width-010"]} ${fn.solid} transparent;
    background-clip: border-box;
    color: ${bn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?v`
                cursor: pointer;
            `:r?v`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?v`
                background: ${bn["bg-selected"]};
                border-color: ${bn["border-selected"]};
                color: ${bn["text-selected"]};
                font-weight: ${hn.Spec["weight-semibold"]};

                ${r&&v`
                    &:hover {
                        background: ${bn["bg-selected-hover"]};
                        border-color: ${bn["border-selected-hover"]};
                        color: ${bn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?v`
                color: ${bn["text-primary"]};
                font-weight: ${hn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?v`
                color: ${bn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?v`
                &:hover {
                    background: ${bn["bg-selected-hover"]};
                    border-color: ${bn["border-selected-hover"]};
                    color: ${bn["text-selected-hover"]};
                    font-weight: ${hn.Spec["weight-semibold"]};
                }
            `:v`
            &:hover {
                background: ${bn["bg-hover"]};
                color: ${bn["text-hover"]};
                font-weight: ${hn.Spec["weight-semibold"]};
            }
        `}}
`,qo=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:h})=>{const f=m((()=>Pa.generateDecadeOfYears(P(e))),[e]),y=o(new Array(f.length).fill(null)),[p,v]=i(e);u((()=>{var e;if(null===p)return;const r=f.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=y.current[r])||void 0===e||e.focus())}),[p,f]);const x=(e,r)=>{r||b(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,o="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!o)},w=e=>{const r=f.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(o=e,!Pa.isWithinRange(o,d?P(d):void 0,c?P(c):void 0,"year"));var o;const i=t?"other-decade":s.isSame(e,"year")?"selected-year":P().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===i?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:i,tabIndex:l}};return f.length?t(Zo,{onBlur:()=>{v(null)},children:f.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:o,year:i,tabIndex:s}=w(e);return t(Jo,{ref:e=>{y.current[r]=e},tabIndex:s,role:"button","aria-label":`${i}`,"aria-disabled":!a,"aria-selected":"selected-year"===o,$variant:o,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),h(n),v(n))})(r,e,!a)},children:i},i)}))}):null},Xo=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:h,selectWithinRange:m,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A,isFocusable:k=!1}=n,M=I(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[O,z]=i(Xa.toDayjs(l)),[Y,j]=i(Xa.toDayjs(l)),[T,R]=i("default"),_=o(null),L=o(null),H=o(null),W=o(null);f(a,(()=>({defaultView(){R("default")},resetView(){const e=Xa.toDayjs(l);z(e),j(e),R("default")},setCalendarDate(e){const r=Xa.toDayjs(e);z(r),j(r)}}))),u((()=>{const e=Xa.toDayjs(l);z(e),j(e)}),[l]),u((()=>{G(Y)}),[Y]);const N=()=>{var e;"month-options"!==T?(R("month-options"),null===(e=H.current)||void 0===e||e.focus()):(R("default"),z(Y))},U=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(r=W.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?O.subtract(1,"month"):O.add(1,"month");if(!Pa.isWithinRange(r,d?P(d):void 0,c?P(c):void 0,"month"))return;z(r),"default"===T&&j(r)}},V=()=>{"default"!==T?(R("default"),z(Y)):R("year-options")},K=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===T?"ArrowUp"===e.key?O.subtract(10,"year"):O.add(10,"year"):"ArrowUp"===e.key?O.subtract(1,"year"):O.add(1,"year"),!Pa.isWithinRange(r,d?P(d):void 0,c?P(c):void 0,"year"))return;z(r),"default"===T&&j(r)}},Z=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=$?$(O):O.subtract(1,"month");switch(T){case"default":j(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=E?E(O):O.add(1,"month");switch(T){case"default":j(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},q=e=>{z(e),j(e),x||R("default")},X=()=>{const e=Xa.toDayjs(l);z(e),j(e),"default"===T?Q("reset"):R("default")},G=e=>{v&&v(e)},Q=e=>{w&&w(e)},ee=()=>{if(!d||p)return!1;const e=P(d);return"month-options"===T?!Pa.isPreviousYearWithinRange(O,e):"year-options"===T?!Pa.isPreviousDecadeWithinRange(O,e):C?C(O):!Pa.isPreviousMonthWithinRange(O,e)},re=()=>{if(!c||p)return!1;const e=P(c);return"month-options"===T?!Pa.isNextYearWithinRange(O,e):"year-options"===T?!Pa.isNextDecadeWithinRange(O,e):S?S(O):!Pa.isNextMonthWithinRange(O,e)},te=()=>{const n=B?B(O):O.format("MMM"),a=P(n,"MMM").format("MMMM"),o=(()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=Pa.getStartEndDecade(O);return`${e} to ${r}`}return A?A(O):O.format("YYYY")})(),i={"month-options":`${o}, Close month selection`,"year-options":`${o}, Close year selection`,default:`${o}, Select year`};return e(r,{children:[e(Io,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:N,onKeyDown:U,tabIndex:k?0:-1,children:[t(Lo,{children:n}),t(Oo,{})]}),e(Io,{ref:W,"aria-label":i[T],type:"button",$expanded:"default"!==T,id:"year-dropdown",onClick:V,onKeyDown:K,tabIndex:k?0:-1,children:[t(Lo,{children:o}),t(Oo,{})]})]})},ne=()=>{switch(T){case"month-options":return t(Ko,{calendarDate:O,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:p});case"year-options":return t(qo,{setCalendarDate:z,calendarDate:O,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:p});default:return null}};return e(zo,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},M,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[T];return e(Ro,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(_o,{children:te()}),e(Ho,{children:[t(Wo,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:Z,tabIndex:k?0:-1,children:t(ko,{})}),t(Wo,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:k?0:-1,children:t(Mo,{})})]})]})})(),t(Yo,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:T}):s;if(y)return e(r,{children:["default"===T&&n,ne()]});{const a="default"===T;return e(r,{children:[t(jo,{inert:Aa(!a),children:n}),t(To,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===T)&&D;return e(Po,{children:[t(No,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X,children:"Cancel"}),t(No,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(z(Y),"default"===T?Q("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),Go=p.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Qo=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${hn["body-sm-semibold"]};
    color: ${bn.text};
`,ei=p.div`
    grid-column: 1 / -1;
    display: flex;
`,ri=e=>{let r=bn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=bn["bg-hover"],t=bn["bg-hover"];break;case"hover":r=bn["bg-hover-strong"],t=bn["bg-hover-strong"];break;case"hover-outline":r=bn["bg-hover-subtle"],t=bn["border-hover"];break;case"selected-outline":r=bn["bg-selected"],t=bn["border-selected"];break;case"selected-outline-subtle":r=bn["bg-selected"],t=bn["border-selected-subtle"];break;case"selected-hover":r=bn["bg-selected-hover"];break;case"selected-hover-outline":r=bn["bg-selected-hover"],t=bn["border-selected-hover"]}return{color:r,borderColor:t}},ti=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,ni=p.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${mn["duration-150"]} ${mn["ease-default"]};
    border: ${fn["width-010"]} ${fn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=ri(e);return v`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,ai=p(ni)`
    left: 0;
`,oi=p(ni)`
    right: 0;
`,ii=p.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${mn["duration-150"]} ${mn["ease-default"]};

    border: ${fn["width-010"]} ${fn.solid} transparent;
    border-radius: ${pn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=ri(e);return v`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,si=p(ii)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,li=p(ii)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,di=p.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,ci=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${hn["body-md-regular"]}
    transition: ${mn["duration-150"]} ${mn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?v`
                    visibility: hidden;
                `:v`
                color: ${bn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return v`
                    font-weight: ${hn.Spec["weight-semibold"]};
                    color: ${bn["text-selected"]};
                `;case"selected-hover":return v`
                    font-weight: ${hn.Spec["weight-semibold"]};
                    color: ${bn["text-selected-hover"]};
                `;case"current":return v`
                    font-weight: ${hn.Spec["weight-semibold"]};
                    color: ${bn["text-primary"]};
                `;case"hover":return v`
                    font-weight: ${hn.Spec["weight-semibold"]};
                    color: ${bn["text-hover"]};
                `;case"unavailable":return v`
                    color: ${bn["text-disabled-subtlest"]};
                `;case"hidden":return v`
                    visibility: hidden;
                `;default:return v`
                    color: ${bn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ui=p.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,gi=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:i,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:f,onKeyDown:y,focusDate:p,label:v,ariaHidden:x,tabIndex:D=-1,role:w="button"})=>{const F=P().isSame(g,"day"),$=!!p&&p.isSame(g,"day"),E=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=o(null);u((()=>{var e;$&&C.current&&(null===(e=C.current)||void 0===e||e.focus())}),[$]);return e(ti,{"aria-hidden":x,children:[t(ai,{$type:r}),t(si,{$type:a}),t(oi,{$type:n}),t(li,{$type:i}),t(di,{$interactive:d,children:e(ci,{ref:C,tabIndex:D,role:w,"aria-label":v||E,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&F&&t(ui,{$disabled:l})]})})]})},bi=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:o,hoverDate:i,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p})=>{const v=Pa.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{h(e,!x)},w=()=>{const e=P(i),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===o&&a&&r&&(n&&t?(d=i,c=a):(s=i,l=n||a)),"end"===o&&n&&t&&(a&&r?(d=n,c=i):(s=a||n,l=i)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:P(s),tabIndex:p};return t(gi,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(P().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===o&&n&&e.isBefore(n),i="start"===o&&a&&e.isAfter(a);(r||i)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},o=e.isSame(n,"day"),i=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&o||a&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",o||(t.bgLeft="selected-outline-subtle"),i||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!i)return{};const r={},t=e.isSame(i,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:d}=w();if(t){const t=e.isSame(n,"day"),o=e.isSame(a,"day");t||o?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(o&&s){if(e.isBetween(o,s,"day","[]")){const t=e.isSame(o,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};P.extend(Ra);const hi=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:b,maxDate:f,allowDisabledSelection:y,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=o(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=h((()=>s&&P(s).isSame(r,"month")?P(s):l&&P(l).isSame(r,"month")?P(l):P().isSame(r,"month")?P():b&&r.isSame(P(b),"month")?P(b):P(r).startOf("month")),[s,r,l,b]),w=e=>{const t=P(e);if(Pa.isWithinRange(t,b?P(b):void 0,f?P(f):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=m((()=>Pa.generateDays(r)),[r]),$=m((()=>D()),[D]),[E,C]=i(""),[S,B]=i(""),A=(e,r)=>{r&&!y||d(e)},k=(e,r)=>{r&&!y||(B(e),c(e))},M=e=>{B(e),c(e)},O=()=>{B(""),c("")};return e(Go,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(Qo,{"aria-hidden":!0,children:P(e).format("ddd")},`week-day-${r}`))),F.map(((e,o)=>t(ei,{role:"row","aria-label":`Week ${o+1}`,onMouseLeave:O,children:e.map(((e,o)=>t(bi,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:b,maxDate:f,disabledDates:a,allowDisabledSelection:y,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:k,onFocus:M,setFocusCell:w,tabIndex:e.isSame($,"day")?0:-1},`day-${o}`)))},o)))]})},mi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:o,minDate:i,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Pa.isDisabledDay(e,l,i,s),y=!f||d,{start:p,end:v}=n?Pa.getFixedRangeStartEnd(Xa.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:D}=a?Pa.getFixedRangeStartEnd(Xa.toDayjs(a),c):{start:void 0,end:void 0},w=!!n&&e.isBetween(p,v,"day","[]"),F=!!a&&e.isBetween(x,D,"day","[]"),$=w&&e.isSame(p,"day")||F&&e.isSame(x,"day"),E=w&&e.isSame(v,"day")||F&&e.isSame(D,"day"),C=`From ${P(x).format("D MMMM")} to ${P(D).format("D MMMM")}, ${f?"Unavailable":"Available"}`,S=()=>{u(e,!y)},B=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},A={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:S,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&S());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},focusDate:P(o),role:"gridcell",tabIndex:m,label:C};return t(gi,Object.assign({},A,(()=>{const t={};return w||F?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":P().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return F&&B(r,"hover",t===x,t===D),w&&B(r,"selected-outline",t===p,t===v),w&&F&&(B(r,"selected-hover-outline",$,E),t===x&&t!==p&&(r.circleLeft="selected-hover")),r})()))},fi=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,numberOfDays:b,setCalendarDate:f})=>{const y=o(null);u((()=>{if(y.current){const e=y.current;y.current=null,F(e)}}),[r]);const p=h((()=>a&&P(a).isSame(r,"month")?P(a):P().isSame(r,"month")?P():d&&r.isSame(P(d),"month")?P(d):P(r).startOf("month")),[a,r,d]),v=e=>{const t=P(e);if(Pa.isWithinRange(t,d?P(d):void 0,c?P(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(y.current=e);F(e)}},x=m((()=>Pa.generateDays(r)),[r]),D=m((()=>p()),[p]),[w,F]=i(""),[$,E]=i(""),C=(e,r)=>{r&&!g||(s(e),e&&!P(e).isSame(e,"month")&&E(""))},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},A=()=>{E(""),l("")};return e(Go,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(Qo,{"aria-hidden":!0,children:P(e).format("ddd")},`week-day-${r}`))),x.map(((e,o)=>t(ei,{role:"row",onMouseLeave:A,children:e.map(((e,o)=>t(mi,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:b,onFocus:B,setFocusCell:v,tabIndex:P(e).isSame(D,"day")?0:-1},`day-${o}`)))},o)))]})},yi=p.div`
    width: 100%;
    background: ${bn.bg};
`,pi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:o,minDate:i,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Pa.isDisabledDay(e,l,i,s),y=!f||d,p=()=>{u(e,!y)},v={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:p,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&p());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:P(o),tabIndex:m};return t(gi,Object.assign({},v,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":P().isSame(e,"day")&&!f&&(t.labelType="current");const o=e.isSame(n,"day"),i=e.isSame(a,"day");return o&&i?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):o?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):i&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};P.extend(Ra);const vi=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,showActiveMonthDaysOnly:b,setCalendarDate:f})=>{const y=o(null);u((()=>{if(y.current){const e=y.current;y.current=null,F(e)}}),[r]);const p=h((()=>a&&P(a).isSame(r,"month")?P(a):P().isSame(r,"month")?P():d&&r.isSame(P(d),"month")?P(d):P(r).startOf("month")),[a,r,d]),v=e=>{const t=P(e);if(Pa.isWithinRange(t,d?P(d):void 0,c?P(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(y.current=e);F(e)}},x=m((()=>Pa.generateDays(r)),[r]),D=m((()=>p()),[p]),[w,F]=i(""),[$,E]=i(""),C=(e,r)=>{r&&!g||s(e)},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},A=()=>{E(""),l("")};return e(Go,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(Qo,{"aria-hidden":!0,children:P(e).format("ddd")},`week-day-${r}`))),x.map(((e,o)=>t(ei,{role:"row","aria-label":`Week ${o+1}`,onMouseLeave:A,children:e.map(((e,o)=>t(pi,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,showActiveMonthDaysOnly:b,onSelect:C,onHover:S,onFocus:B,setFocusCell:v,tabIndex:P(e).isSame(D,"day")?0:-1},`day-${o}`)))},o)))]})},xi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:o,minDate:i,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:g,setFocusCell:b,tabIndex:h})=>{const m=Pa.isDisabledDay(e,l,i,s),f=!m||d,{start:y,end:p}=Pa.getWeekStartEnd(Xa.toDayjs(n)),{start:v,end:x}=Pa.getWeekStartEnd(Xa.toDayjs(a)),{start:D,end:w}=Pa.getWeekStartEnd(e),F=e.isSame(D,"day"),$=n&&e.isBetween(y,p,"day","[]"),E=a&&e.isBetween(v,x,"day","[]"),C=$&&e.isSame(y)||E&&e.isSame(v),S=$&&e.isSame(p)||E&&e.isSame(x),B=`From ${P(D).format("D MMMM")} to ${P(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,A=()=>{c(e,!f)},k={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:A,onHover:()=>{u(e.format("YYYY-MM-DD"),!f)},onFocus:()=>{g(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(f&&A());(r=>{let t;const n={ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),b(t.format("YYYY-MM-DD")))})(r)},focusDate:P(o),tabIndex:h,label:B,ariaHidden:!F||void 0,role:F?"button":"none"};return t(gi,Object.assign({},k,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":P().isSame(e,"day")&&!m&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return $&&E?(r="selected-hover-outline",t="selected-hover"):$?(r="selected-outline",t="selected"):E&&(r="hover",t="hover"),r&&(e.labelType=t,C?e.circleLeft=r:e.bgLeft=r,S?e.circleRight=r:e.bgRight=r),e})()))},Di=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,setCalendarDate:b})=>{const f=o(null);u((()=>{if(f.current){const e=f.current;f.current=null,w(e)}}),[r]);const y=h((()=>a&&P(a).isSame(r,"month")?P(a):P().isSame(r,"month")?P().startOf("week"):d&&r.isSame(P(d),"month")?P(d):P(r).startOf("month")),[a,r,d]),p=e=>{const t=P(e);if(Pa.isWithinRange(t,d?P(d):void 0,c?P(c):void 0)){if(!t.isSame(r,"month"))return null==b||b(e),void(f.current=e);w(e)}},v=m((()=>Pa.generateDays(r)),[r]),x=m((()=>y()),[y]),[D,w]=i(""),[F,$]=i(""),E=(e,r)=>{if(r&&!g)return;const t=e.startOf("week");s(t),e&&!P(e).isSame(t,"month")&&$("")},C=(e,r)=>{r&&!g||($(e),l(e))},S=e=>{$(e),l(e)},B=()=>{$(""),l("")};return e(Go,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),$(""),l(""))},"aria-label":"Week selection",children:[v[0].map(((e,r)=>t(Qo,{"aria-hidden":!0,children:P(e).format("ddd")},`week-day-${r}`))),v.map(((e,o)=>t(ei,{onMouseLeave:B,role:"group",children:e.map(((e,o)=>t(xi,{date:e,calendarDate:r,selectedDate:a,hoverDate:F,focusDate:D,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:E,onHover:C,onFocus:S,setFocusCell:p,tabIndex:P(e).isSame(x,"day")?0:-1},`day-${o}`)))},o)))]})},wi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:i,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:h,selectWithinRange:m=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const w=o(null),F=o(void 0),$=o(null);f(D,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)},contains(e){var r;return(null===(r=$.current)||void 0===r?void 0:r.contains(e))||!1}})));const E=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),S(t)},C=e=>{B(e)},S=e=>{n&&n(e)},B=e=>{a&&a(e)},A=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(yi,{ref:$,children:t(Xo,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:g,maxDate:b,selectWithinRange:m,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=w.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),A(e)),F.current=e},initialCalendarDate:y,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const a=null===(n=w.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return t(Di,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,setCalendarDate:a});case"fixed-range":return t(fi,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,numberOfDays:p,setCalendarDate:a});case"single":return t(vi,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a});default:return t(hi,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:m,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a})}})(r)})})})),Fi=a.forwardRef(((e,r)=>{var{width:n}=e,a=I(e,["width"]);return t(za,{$width:n,"data-testid":"calendar-dropdown",children:t(wi,Object.assign({ref:r},a))})})),$i=v`
    outline-offset: -1px;
    outline: ${fn["width-020"]} ${fn.solid} ${bn["border-focus"]};
`,Ei=v`
    outline-color: ${bn["border-focus"]};
`,Ci=v`
    outline-color: ${bn["border-disabled"]};
`,Si=v`
    outline-color: ${bn["border-error-focus"]};
`,Bi=p(p.div`
    border: ${fn["width-010"]} ${fn.solid} ${bn.border};
    border-radius: ${pn.sm};
    background: ${bn.bg};

    :focus-within {
        ${$i}
    }
    ${e=>e.$focused&&$i}

    ${e=>e.$readOnly?v`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ei}
                }
                ${e.$focused&&Ei}
            `:e.$disabled?v`
                background: ${bn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ci}
                }
                ${e.$focused&&Ci}
            `:e.$error?v`
                border-color: ${bn["border-error"]};

                :focus-within {
                    ${Si}
                }
                ${e.$focused&&Si}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${yn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ai=p.input`
    ${e=>"small"===e.$variant?hn["body-md-regular"]:hn["body-baseline-regular"]}
    color: ${bn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${bn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${bn["text-subtler"]};
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
`;p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${fn["width-010"]} ${fn.solid}
            ${bn["border-focus"]};
        border-radius: ${pn.sm};
    }
`;const ki=p.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Mi=p.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return v`
                ${Oi}, ${Ti} {
                    color: ${bn["text-subtler"]};
                }
            `}}
`,Oi=p(Ai)`
    background: transparent;
    text-align: center;
`,zi=p(Oi)`
    width: 2rem;
    margin-right: ${yn["spacing-4"]};
`,Yi=p(Oi)`
    width: 2.5rem;
`,ji=p(Oi)`
    width: 3rem;
    margin-left: ${yn["spacing-4"]};
`,Ti=p.span`
    ${hn["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return v`
                color: ${bn.text};
            `}}
`,Ri=p.div`
    ${hn["body-baseline-regular"]}
    background-color: ${bn.bg};
    color: ${bn["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?v`
                background-color: ${bn["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?v`
                display: none;
            `:void 0}
`;P.extend(ja);const _i=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:b,onFocus:h,onBlur:m,hideInputKeyboard:y,inputLabels:p=["Date","Month","Year"]},v)=>{const x=y?"none":"numeric",[D,w,F]=ro(""),[$,E,C]=ro(""),[S,B,A]=ro(""),[k,M]=i("none"),[O,z]=i(!1),Y=o(null),j=o(null),T=o(null),R=o(null),[_,I,L]=K(d);u((()=>{var e;const[r="",t="",n=""]=K(s);w(r),E(t),B(n),r||t||n||!Y.current||!Y.current.contains(document.activeElement)||null===(e=j.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||M("none"),l&&(z(!0),Y.current&&!Y.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))}),[l]),f(v,(()=>({ref:Y,resetPlaceholder(){z(!1)},resetInput(){const[e="",r="",t=""]=K(s);w(e),E(r),B(t)},focusYearRef(){var e;null===(e=R.current)||void 0===e||e.focus()}})),[w,E,B,s]);const H=e=>{var r;e.preventDefault(),null===(r=j.current)||void 0===r||r.focus()},W=e=>{e.target.select();const r=e.target.name;M(r)},N=e=>{const[r,t,n]=a,o={[r]:F.current,[t]:C.current,[n]:A.current},i=e.target.name,s=o[i],l=i!==n?eo.padValue(s,!0):s;switch(i){case r:o[r]=l,w(l);break;case t:o[t]=l,E(l)}const d=`${o[n]}-${o[t]}-${o[r]}`,c=P(d,"YYYY-MM-DD",!0).isValid(),u=!o[r]&&!o[t]&&!o[n];c&&s!==l&&b(d),Y.current&&!Y.current.contains(e.relatedTarget)&&(M("none"),null==m||m(u||c))},U=e=>{var r,t;if(d)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),i={day:D,month:$,year:S};switch(n){case a[0]:i.day=o,w(o),2===o.length&&(null===(r=T.current)||void 0===r||r.focus());break;case a[1]:i.month=o,E(o),2===o.length&&(null===(t=R.current)||void 0===t||t.focus());break;case a[2]:i.year=o,B(o)}if(!i.day&&!i.month&&!i.year)return void b("");const s=`${i.year}-${i.month}-${i.day}`;P(s,"YYYY-MM-DD",!0).isValid()&&b(s)},V=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(k===a[1]&&0===$.length&&(null===(r=j.current)||void 0===r||r.focus()),k===a[2]&&0===S.length&&(null===(t=T.current)||void 0===t||t.focus()))};function K(e){if(e){const r=P(new Date(e));return r.isValid()?[eo.padValue(r.date().toString()),eo.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(ki,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(z(!0),Y.current&&!Y.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))},onFocus:e=>{r||(z(!0),l||null==h||h(e))},children:[e(Mi,{ref:Y,$hover:!!d,children:[t(zi,{ref:j,name:a[0],maxLength:2,value:null!=_?_:D,onFocus:W,onBlur:N,onChange:U,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":p[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[0]||n?"DD":""}),t(Ti,{$inactive:0===D.length,children:"/"}),t(Yi,{ref:T,name:a[1],maxLength:2,value:null!=I?I:$,onFocus:W,onBlur:N,onChange:U,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":p[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[1]||n?"MM":""}),t(Ti,{$inactive:0===$.length,children:"/"}),t(ji,{ref:R,name:a[2],maxLength:4,value:null!=L?L:S,onFocus:W,onBlur:N,onChange:U,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":p[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(Ri,{$hide:O,$disabled:r,onMouseDown:H,children:c})})()]})})),Ii=p(Bi)`
    height: 3rem;
`,Li=e=>{var{minDate:r,maxDate:n,disabled:a,disabledDates:s,error:l,hideInputKeyboard:d,value:c,onChange:g,onFocus:b,onBlur:h,onYearMonthDisplayChange:m,withButton:f=!0,readOnly:y,id:p,allowDisabledSelection:v,zIndex:x,dropdownRootNode:D}=e,w=I(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[F,$]=i(Ga.sanitizeInput(c)),[E,C]=i(Ga.sanitizeInput(c)),[S,B]=i(void 0),[A,k]=i(!1),[M,O]=i(!1),z=o(null),Y=o(null),j=o(null);u((()=>{const e=Ga.sanitizeInput(c);$(e),C(e)}),[c]);const T=e=>{!v&&Ga.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(C(e),f||(N(e),$(e),e&&k(!1)))},R=e=>{var r;C(e),f||(N(e),$(e),e&&(null===(r=Y.current)||void 0===r||r.focusYearRef(),k(!1)),S&&B(void 0))},_=()=>{y||a||(k(!0),M||(O(!0),b&&b()))},L=e=>{var r,t,n;const a=e.relatedTarget,o=j.current&&j.current.contains(a),i=z.current&&z.current.contains(a),s=null===(t=null===(r=e.relatedTarget)||void 0===r?void 0:r.matches)||void 0===t?void 0:t.call(r,"[data-floating-ui-focus-guard]");(M&&!A&&!i||A&&!i&&!o&&!s)&&(null===(n=Y.current)||void 0===n||n.resetInput(),C(F),O(!1),k(!1),U())},H=e=>{B(e)},W=e=>{var r,t;switch(e){case"reset":C(F);break;case"confirmed":$(E),N(E)}P(E,"YYYY-MM-DD",!0).isValid()?null===(r=Y.current)||void 0===r||r.focusYearRef():null===(t=z.current)||void 0===t||t.focus(),k(!1)},N=e=>{g&&g(e)},U=()=>{h&&h()};return t(Oa,{enabled:!y&&!a,isOpen:A,renderElement:()=>t(Ii,Object.assign({role:"group",tabIndex:0,ref:z,onBlur:L,onFocus:_,$disabled:a,$readOnly:y,$focused:M,$error:l,id:p,"data-testid":w["data-testid"],"aria-disabled":a},w,{children:t(_i,{ref:Y,disabled:a,onChange:T,readOnly:y,focused:A,names:["start-day","start-month","start-year"],value:E,hoverValue:S,hideInputKeyboard:d})})),renderDropdown:({elementWidth:e})=>t(Fi,{variant:"single",ref:j,initialCalendarDate:E,withButton:f,value:E,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:v,onHover:H,onSelect:R,onDismiss:W,onYearMonthDisplayChange:m,width:e,isFocusable:!y&&!a}),onClose:()=>{var e;null===(e=Y.current)||void 0===e||e.resetInput(),C(F),k(!1),O(!1),U()},onDismiss:()=>{var e,r;null===(e=Y.current)||void 0===e||e.resetInput(),null===(r=z.current)||void 0===r||r.focus(),C(F),k(!1)},customZIndex:x,offset:16,rootNode:D})};export{Li as DateInput};
//# sourceMappingURL=index.js.map
