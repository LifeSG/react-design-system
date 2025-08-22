import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,createContext as b,useContext as h,useCallback as m,version as f,useMemo as y,useImperativeHandle as p,useReducer as v}from"react";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import D,{css as w,keyframes as F,ThemeContext as $}from"styled-components";import{useFloatingTree as E,useFloating as C,autoUpdate as S,offset as B,flip as k,shift as A,limitShift as O,size as M,useTransitionStyles as Y,useClick as z,useDismiss as j,useInteractions as R,FloatingPortal as T,FloatingFocusManager as _}from"@floating-ui/react";import{findDOMNode as I}from"react-dom";import{ChevronLeftIcon as L}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as H}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as W}from"@lifesg/react-icons";function P(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U={exports:{}};U.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,b){var h,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var K=V(U.exports),Z=Array.isArray,J="object"==typeof N&&N&&N.Object===Object&&N,q="object"==typeof self&&self&&self.Object===Object&&self,X=J||q||Function("return this")(),G=X.Symbol,Q=G,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=Q?Q.toStringTag:void 0;var ae=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var a=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),a},ie=Object.prototype.toString;var oe=ae,se=function(e){return ie.call(e)},le=G?G.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?oe(e):se(e)};var ce=de,ue=function(e){return null!=e&&"object"==typeof e};var ge=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},be=Z,he=ge,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ye=function(e,r){if(be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!he(e))||(fe.test(e)||!me.test(e)||null!=r&&e in Object(r))};var pe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=de,xe=pe;var De,we=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Fe=X["__core-js_shared__"],$e=(De=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Ee=function(e){return!!$e&&$e in e},Ce=Function.prototype.toString;var Se=we,Be=Ee,ke=pe,Ae=function(e){if(null!=e){try{return Ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=/^\[object .+?Constructor\]$/,Me=Function.prototype,Ye=Object.prototype,ze=Me.toString,je=Ye.hasOwnProperty,Re=RegExp("^"+ze.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Te=function(e,r){return null==e?void 0:e[r]},_e=function(e){return!(!ke(e)||Be(e))&&(Se(e)?Re:Oe).test(Ae(e))},Ie=Te;var Le=function(e,r){var t=Ie(e,r);return _e(t)?t:void 0},He=Le(Object,"create"),We=He;var Pe=function(){this.__data__=We?We(null):{},this.size=0};var Ne=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ve=He,Ue=Object.prototype.hasOwnProperty;var Ke=function(e){var r=this.__data__;if(Ve){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ue.call(r,e)?r[e]:void 0},Ze=He,Je=Object.prototype.hasOwnProperty;var qe=function(e){var r=this.__data__;return Ze?void 0!==r[e]:Je.call(r,e)},Xe=He;var Ge=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Xe&&void 0===r?"__lodash_hash_undefined__":r,this},Qe=Pe,er=Ne,rr=Ke,tr=qe,nr=Ge;function ar(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ar.prototype.clear=Qe,ar.prototype.delete=er,ar.prototype.get=rr,ar.prototype.has=tr,ar.prototype.set=nr;var ir=ar;var or=function(){this.__data__=[],this.size=0};var sr=function(e,r){return e===r||e!=e&&r!=r};var lr=function(e,r){for(var t=e.length;t--;)if(sr(e[t][0],r))return t;return-1},dr=lr,cr=Array.prototype.splice;var ur=function(e){var r=this.__data__,t=dr(r,e);return!(t<0)&&(t==r.length-1?r.pop():cr.call(r,t,1),--this.size,!0)},gr=lr;var br=function(e){var r=this.__data__,t=gr(r,e);return t<0?void 0:r[t][1]},hr=lr;var mr=function(e){return hr(this.__data__,e)>-1},fr=lr;var yr=function(e,r){var t=this.__data__,n=fr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},pr=or,vr=ur,xr=br,Dr=mr,wr=yr;function Fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Fr.prototype.clear=pr,Fr.prototype.delete=vr,Fr.prototype.get=xr,Fr.prototype.has=Dr,Fr.prototype.set=wr;var $r=Fr,Er=Le(X,"Map"),Cr=ir,Sr=$r,Br=Er;var kr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Ar=function(e,r){var t=e.__data__;return kr(r)?t["string"==typeof r?"string":"hash"]:t.map},Or=Ar;var Mr=function(e){var r=Or(this,e).delete(e);return this.size-=r?1:0,r},Yr=Ar;var zr=function(e){return Yr(this,e).get(e)},jr=Ar;var Rr=function(e){return jr(this,e).has(e)},Tr=Ar;var _r=function(e,r){var t=Tr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Ir=function(){this.size=0,this.__data__={hash:new Cr,map:new(Br||Sr),string:new Cr}},Lr=Mr,Hr=zr,Wr=Rr,Pr=_r;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Ir,Nr.prototype.delete=Lr,Nr.prototype.get=Hr,Nr.prototype.has=Wr,Nr.prototype.set=Pr;var Vr=Nr;function Ur(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ur.Cache||Vr),t}Ur.Cache=Vr;var Kr=Ur;var Zr=function(e){var r=Kr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,Xr=Zr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Jr,(function(e,t,n,a){r.push(n?a.replace(qr,"$1"):t||e)})),r}));var Gr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Qr=Z,et=ge,rt=G?G.prototype:void 0,tt=rt?rt.toString:void 0;var nt=function e(r){if("string"==typeof r)return r;if(Qr(r))return Gr(r,e)+"";if(et(r))return tt?tt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},at=nt;var it=Z,ot=ye,st=Xr,lt=function(e){return null==e?"":at(e)};var dt=ge;var ct=function(e,r){return it(e)?e:ot(e,r)?[e]:st(lt(e))},ut=function(e){if("string"==typeof e||dt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var gt=function(e,r){for(var t=0,n=(r=ct(r,e)).length;null!=e&&t<n;)e=e[ut(r[t++])];return t&&t==n?e:void 0};var bt=V((function(e,r,t){var n=null==e?void 0:gt(e,r);return void 0===n?t:n}));const ht=(e,r,t)=>bt(t,r)||bt(e,r),mt=(e,r)=>{const t=r||e.defaultValue;return bt(e.collections,t)},ft={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},yt=e=>r=>{var t;const n=r.theme,a=mt(ft,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ht(a,e,n.overrides.border)}px`:`${a[e]}px`},pt={"width-005":yt("width-005"),"width-010":yt("width-010"),"width-020":yt("width-020"),"width-040":yt("width-040"),solid:(vt="solid",e=>{var r;const t=e.theme,n=mt(ft,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ht(n,vt,t.overrides.border):n[vt];return"function"==typeof a?a(e):a})};var vt;const xt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ct={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},St={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kt={collections:{lifesg:wt,bookingsg:xt,rbs:Ct,mylegacy:Ft,ccube:Dt,oneservice:$t,pa:Et,a11yplayground:St,supportgowhere:Bt},defaultValue:"lifesg"},At={collections:{lifesg:wt,bookingsg:xt,rbs:Ct,mylegacy:Ft,ccube:Dt,oneservice:$t,pa:Et,a11yplayground:St,supportgowhere:Bt},defaultValue:"lifesg"},Ot=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=mt(a?At:kt,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?ht(i,e,s):i[e]},Mt={"brand-10":Ot("brand-10"),"brand-20":Ot("brand-20"),"brand-30":Ot("brand-30"),"brand-40":Ot("brand-40"),"brand-50":Ot("brand-50"),"brand-60":Ot("brand-60"),"brand-70":Ot("brand-70"),"brand-80":Ot("brand-80"),"brand-90":Ot("brand-90"),"brand-95":Ot("brand-95"),"brand-100":Ot("brand-100"),"primary-10":Ot("primary-10"),"primary-20":Ot("primary-20"),"primary-30":Ot("primary-30"),"primary-40":Ot("primary-40"),"primary-50":Ot("primary-50"),"primary-60":Ot("primary-60"),"primary-70":Ot("primary-70"),"primary-80":Ot("primary-80"),"primary-90":Ot("primary-90"),"primary-95":Ot("primary-95"),"primary-100":Ot("primary-100"),"secondary-10":Ot("secondary-10"),"secondary-20":Ot("secondary-20"),"secondary-30":Ot("secondary-30"),"secondary-40":Ot("secondary-40"),"secondary-50":Ot("secondary-50"),"secondary-60":Ot("secondary-60"),"secondary-70":Ot("secondary-70"),"secondary-80":Ot("secondary-80"),"secondary-90":Ot("secondary-90"),"secondary-95":Ot("secondary-95"),"secondary-100":Ot("secondary-100"),"neutral-10":Ot("neutral-10"),"neutral-20":Ot("neutral-20"),"neutral-30":Ot("neutral-30"),"neutral-40":Ot("neutral-40"),"neutral-50":Ot("neutral-50"),"neutral-60":Ot("neutral-60"),"neutral-70":Ot("neutral-70"),"neutral-80":Ot("neutral-80"),"neutral-90":Ot("neutral-90"),"neutral-95":Ot("neutral-95"),"neutral-100":Ot("neutral-100"),"success-10":Ot("success-10"),"success-20":Ot("success-20"),"success-30":Ot("success-30"),"success-40":Ot("success-40"),"success-50":Ot("success-50"),"success-60":Ot("success-60"),"success-70":Ot("success-70"),"success-80":Ot("success-80"),"success-90":Ot("success-90"),"success-95":Ot("success-95"),"success-100":Ot("success-100"),"warning-10":Ot("warning-10"),"warning-20":Ot("warning-20"),"warning-30":Ot("warning-30"),"warning-40":Ot("warning-40"),"warning-50":Ot("warning-50"),"warning-60":Ot("warning-60"),"warning-70":Ot("warning-70"),"warning-80":Ot("warning-80"),"warning-90":Ot("warning-90"),"warning-95":Ot("warning-95"),"warning-100":Ot("warning-100"),"error-10":Ot("error-10"),"error-20":Ot("error-20"),"error-30":Ot("error-30"),"error-40":Ot("error-40"),"error-50":Ot("error-50"),"error-60":Ot("error-60"),"error-70":Ot("error-70"),"error-80":Ot("error-80"),"error-90":Ot("error-90"),"error-95":Ot("error-95"),"error-100":Ot("error-100"),"info-10":Ot("info-10"),"info-20":Ot("info-20"),"info-30":Ot("info-30"),"info-40":Ot("info-40"),"info-50":Ot("info-50"),"info-60":Ot("info-60"),"info-70":Ot("info-70"),"info-80":Ot("info-80"),"info-90":Ot("info-90"),"info-95":Ot("info-95"),"info-100":Ot("info-100"),white:Ot("white"),black:Ot("black"),"primary-inverse":Ot("primary-inverse")},Yt={text:Ot("neutral-20"),"text-subtle":Ot("neutral-30"),"text-subtler":Ot("neutral-50"),"text-subtlest":Ot("neutral-60"),"text-primary":Ot("primary-50"),"text-hover":Ot("primary-40"),"text-selected":Ot("primary-50"),"text-selected-hover":Ot("primary-40"),"text-disabled":Ot("neutral-50"),"text-disabled-subtle":Ot("neutral-60"),"text-disabled-subtlest":Ot("neutral-80"),"text-selected-disabled":Ot("neutral-20"),"text-success":Ot("success-40"),"text-warning":Ot("warning-40"),"text-error":Ot("error-40"),"text-info":Ot("info-40"),"text-inverse":Ot("white"),icon:Ot("neutral-50"),"icon-subtle":Ot("neutral-60"),"icon-strongest":Ot("neutral-20"),"icon-primary":Ot("primary-50"),"icon-primary-subtle":Ot("primary-60"),"icon-primary-subtlest":Ot("primary-70"),"icon-hover":Ot("primary-40"),"icon-selected":Ot("primary-50"),"icon-selected-hover":Ot("primary-40"),"icon-disabled":Ot("neutral-50"),"icon-disabled-subtle":Ot("neutral-60"),"icon-selected-disabled":Ot("neutral-60"),"icon-success":Ot("success-50"),"icon-warning":Ot("warning-60"),"icon-error":Ot("error-50"),"icon-error-strong":Ot("error-40"),"icon-info":Ot("info-50"),"icon-inverse":Ot("white"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-90"),"border-strong":Ot("neutral-70"),"border-stronger":Ot("neutral-50"),"border-primary":Ot("primary-50"),"border-primary-subtle":Ot("primary-60"),"border-hover":Ot("primary-90"),"border-hover-strong":Ot("primary-60"),"border-selected":Ot("primary-50"),"border-selected-subtle":Ot("primary-70"),"border-selected-subtlest":Ot("primary-90"),"border-selected-hover":Ot("primary-40"),"border-focus":Ot("primary-60"),"border-focus-strong":Ot("primary-50"),"border-disabled":Ot("neutral-90"),"border-selected-disabled":Ot("neutral-70"),"border-success":Ot("success-60"),"border-warning":Ot("warning-60"),"border-error":Ot("error-60"),"border-error-focus":Ot("error-60"),"border-error-focus-strong":Ot("error-40"),"border-error-strong":Ot("error-40"),"border-info":Ot("info-60"),bg:Ot("white"),"bg-strong":Ot("neutral-100"),"bg-stronger":Ot("neutral-95"),"bg-strongest":Ot("neutral-90"),"bg-hover":Ot("primary-95"),"bg-hover-strong":Ot("primary-90"),"bg-hover-subtle":Ot("primary-100"),"bg-hover-neutral":Ot("neutral-100"),"bg-hover-neutral-strong":Ot("neutral-90"),"bg-selected":Ot("primary-95"),"bg-selected-hover":Ot("primary-90"),"bg-selected-strong":Ot("primary-90"),"bg-selected-stronger":Ot("primary-70"),"bg-selected-strongest":Ot("primary-50"),"bg-selected-strongest-hover":Ot("primary-40"),"bg-disabled":Ot("neutral-95"),"bg-selected-disabled":Ot("neutral-95"),"bg-selected-stronger-disabled":Ot("neutral-70"),"bg-success":Ot("success-100"),"bg-success-hover":Ot("success-95"),"bg-success-strong":Ot("success-50"),"bg-success-strong-hover":Ot("success-40"),"bg-warning":Ot("warning-100"),"bg-warning-hover":Ot("warning-95"),"bg-warning-strong":Ot("warning-50"),"bg-warning-strong-hover":Ot("warning-40"),"bg-info":Ot("info-100"),"bg-info-hover":Ot("info-95"),"bg-info-strong":Ot("info-50"),"bg-info-strong-hover":Ot("info-40"),"bg-error":Ot("error-100"),"bg-error-hover":Ot("error-95"),"bg-error-strong":Ot("error-50"),"bg-error-strong-hover":Ot("error-40"),"bg-inverse":Ot("neutral-20"),"bg-inverse-subtle":Ot("neutral-30"),"bg-inverse-subtler":Ot("neutral-50"),"bg-inverse-subtlest":Ot("neutral-60"),"bg-inverse-hover":Ot("neutral-40"),"bg-primary":Ot("primary-50"),"bg-primary-subtle":Ot("primary-60"),"bg-primary-subtler":Ot("primary-95"),"bg-primary-subtlest":Ot("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ot("primary-40"),"bg-primary-subtlest-hover":Ot("primary-90"),"bg-primary-subtlest-selected":Ot("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ot("primary-50"),"hyperlink-hover":Ot("primary-40"),"hyperlink-visited":Ot("primary-40"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-50"),"focus-ring-inverse":Ot("white")},zt={text:Ot("neutral-100"),"text-subtle":Ot("neutral-80"),"text-subtler":Ot("neutral-60"),"text-subtlest":Ot("neutral-50"),"text-primary":Ot("primary-60"),"text-hover":Ot("primary-70"),"text-selected":Ot("primary-60"),"text-selected-hover":Ot("primary-70"),"text-disabled":Ot("neutral-60"),"text-disabled-subtle":Ot("neutral-50"),"text-disabled-subtlest":Ot("neutral-30"),"text-selected-disabled":Ot("neutral-90"),"text-success":Ot("success-70"),"text-warning":Ot("warning-70"),"text-error":Ot("error-70"),"text-info":Ot("info-70"),"text-inverse":Ot("black"),icon:Ot("neutral-60"),"icon-subtle":Ot("neutral-50"),"icon-strongest":Ot("neutral-90"),"icon-primary":Ot("primary-60"),"icon-primary-subtle":Ot("primary-50"),"icon-primary-subtlest":Ot("primary-40"),"icon-hover":Ot("primary-70"),"icon-selected":Ot("primary-60"),"icon-selected-hover":Ot("primary-70"),"icon-disabled":Ot("neutral-60"),"icon-disabled-subtle":Ot("neutral-50"),"icon-selected-disabled":Ot("neutral-50"),"icon-success":Ot("success-60"),"icon-warning":Ot("warning-50"),"icon-error":Ot("error-60"),"icon-error-strong":Ot("error-70"),"icon-info":Ot("info-60"),"icon-inverse":Ot("black"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-20"),"border-strong":Ot("neutral-40"),"border-stronger":Ot("neutral-60"),"border-primary":Ot("primary-60"),"border-primary-subtle":Ot("primary-50"),"border-hover":Ot("primary-20"),"border-hover-strong":Ot("primary-50"),"border-selected":Ot("primary-60"),"border-selected-subtle":Ot("primary-40"),"border-selected-subtlest":Ot("primary-20"),"border-selected-hover":Ot("primary-70"),"border-focus":Ot("primary-50"),"border-focus-strong":Ot("primary-60"),"border-disabled":Ot("neutral-20"),"border-selected-disabled":Ot("neutral-40"),"border-success":Ot("success-50"),"border-warning":Ot("warning-50"),"border-error":Ot("error-50"),"border-error-focus":Ot("error-50"),"border-error-focus-strong":Ot("error-70"),"border-error-strong":Ot("error-70"),"border-info":Ot("info-50"),bg:Ot("black"),"bg-strong":Ot("neutral-10"),"bg-stronger":Ot("neutral-20"),"bg-strongest":Ot("neutral-20"),"bg-hover":Ot("primary-20"),"bg-hover-strong":Ot("primary-20"),"bg-hover-subtle":Ot("primary-10"),"bg-hover-neutral":Ot("neutral-10"),"bg-hover-neutral-strong":Ot("neutral-20"),"bg-selected":Ot("primary-20"),"bg-selected-hover":Ot("primary-20"),"bg-selected-strong":Ot("primary-20"),"bg-selected-stronger":Ot("primary-40"),"bg-selected-strongest":Ot("primary-60"),"bg-selected-strongest-hover":Ot("primary-70"),"bg-disabled":Ot("neutral-20"),"bg-selected-disabled":Ot("neutral-20"),"bg-selected-stronger-disabled":Ot("neutral-40"),"bg-success":Ot("success-10"),"bg-success-hover":Ot("success-20"),"bg-success-strong":Ot("success-60"),"bg-success-strong-hover":Ot("success-70"),"bg-warning":Ot("warning-10"),"bg-warning-hover":Ot("warning-20"),"bg-warning-strong":Ot("warning-60"),"bg-warning-strong-hover":Ot("warning-70"),"bg-info":Ot("info-10"),"bg-info-hover":Ot("info-20"),"bg-info-strong":Ot("info-60"),"bg-info-strong-hover":Ot("info-70"),"bg-error":Ot("error-10"),"bg-error-hover":Ot("error-20"),"bg-error-strong":Ot("error-60"),"bg-error-strong-hover":Ot("error-70"),"bg-inverse":Ot("neutral-90"),"bg-inverse-subtle":Ot("neutral-80"),"bg-inverse-subtler":Ot("neutral-60"),"bg-inverse-subtlest":Ot("neutral-50"),"bg-inverse-hover":Ot("neutral-70"),"bg-primary":Ot("primary-60"),"bg-primary-subtle":Ot("primary-50"),"bg-primary-subtler":Ot("primary-20"),"bg-primary-subtlest":Ot("primary-10"),"bg-available":"#185339","bg-primary-hover":Ot("primary-70"),"bg-primary-subtlest-hover":Ot("primary-20"),"bg-primary-subtlest-selected":Ot("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ot("primary-60"),"hyperlink-hover":Ot("primary-70"),"hyperlink-visited":Ot("primary-70"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-60"),"focus-ring-inverse":Ot("black")},jt={text:Ot("neutral-30"),"text-subtle":Ot("neutral-40"),"text-subtler":Ot("neutral-50"),"text-subtlest":Ot("neutral-70"),"text-primary":Ot("neutral-10"),"text-hover":Ot("neutral-70"),"text-selected":Ot("neutral-20"),"text-selected-hover":Ot("neutral-10"),"text-disabled":Ot("neutral-50"),"text-disabled-subtle":Ot("neutral-60"),"text-disabled-subtlest":Ot("neutral-80"),"text-selected-disabled":Ot("neutral-40"),"text-success":Ot("success-40"),"text-warning":Ot("warning-40"),"text-error":Ot("brand-30"),"text-info":Ot("neutral-40"),"text-inverse":Ot("neutral-100"),icon:Ot("neutral-40"),"icon-subtle":Ot("neutral-50"),"icon-strongest":Ot("neutral-10"),"icon-primary":Ot("neutral-10"),"icon-primary-subtle":Ot("neutral-30"),"icon-primary-subtlest":Ot("neutral-60"),"icon-hover":Ot("neutral-70"),"icon-selected":Ot("brand-20"),"icon-selected-hover":Ot("brand-10"),"icon-disabled":Ot("neutral-50"),"icon-disabled-subtle":Ot("neutral-60"),"icon-selected-disabled":Ot("neutral-40"),"icon-success":Ot("success-40"),"icon-warning":Ot("warning-60"),"icon-error":Ot("brand-30"),"icon-error-strong":Ot("brand-10"),"icon-info":Ot("neutral-40"),"icon-inverse":Ot("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ot("neutral-90"),"border-strong":Ot("neutral-30"),"border-stronger":Ot("neutral-20"),"border-primary":Ot("neutral-40"),"border-primary-subtle":Ot("neutral-60"),"border-hover":Ot("neutral-80"),"border-hover-strong":Ot("neutral-10"),"border-selected":Ot("brand-20"),"border-selected-subtle":Ot("neutral-40"),"border-selected-subtlest":Ot("neutral-70"),"border-selected-hover":Ot("neutral-10"),"border-focus":Ot("neutral-20"),"border-focus-strong":Ot("neutral-10"),"border-disabled":Ot("neutral-90"),"border-selected-disabled":Ot("neutral-80"),"border-success":Ot("success-40"),"border-warning":Ot("warning-60"),"border-error":Ot("brand-30"),"border-error-focus":Ot("brand-20"),"border-error-focus-strong":Ot("brand-10"),"border-error-strong":Ot("brand-20"),"border-info":Ot("neutral-40"),bg:Ot("neutral-100"),"bg-strong":Ot("neutral-95"),"bg-stronger":Ot("neutral-90"),"bg-strongest":Ot("neutral-80"),"bg-hover":Ot("brand-90"),"bg-hover-strong":Ot("brand-80"),"bg-hover-subtle":Ot("neutral-90"),"bg-hover-neutral":Ot("neutral-90"),"bg-hover-neutral-strong":Ot("neutral-90"),"bg-selected":Ot("brand-100"),"bg-selected-hover":Ot("brand-30"),"bg-selected-strong":Ot("brand-50"),"bg-selected-stronger":Ot("brand-40"),"bg-selected-strongest":Ot("brand-20"),"bg-selected-strongest-hover":Ot("brand-10"),"bg-disabled":Ot("neutral-90"),"bg-selected-disabled":Ot("neutral-90"),"bg-selected-stronger-disabled":Ot("neutral-80"),"bg-success":Ot("success-100"),"bg-success-hover":Ot("success-95"),"bg-success-strong":Ot("success-50"),"bg-success-strong-hover":Ot("success-40"),"bg-warning":Ot("warning-100"),"bg-warning-hover":Ot("warning-95"),"bg-warning-strong":Ot("warning-50"),"bg-warning-strong-hover":Ot("warning-40"),"bg-info":Ot("neutral-95"),"bg-info-hover":Ot("info-95"),"bg-info-strong":Ot("info-50"),"bg-info-strong-hover":Ot("info-40"),"bg-error":Ot("brand-100"),"bg-error-hover":Ot("error-95"),"bg-error-strong":Ot("error-50"),"bg-error-strong-hover":Ot("error-40"),"bg-inverse":Ot("neutral-40"),"bg-inverse-subtle":Ot("neutral-60"),"bg-inverse-subtler":Ot("neutral-70"),"bg-inverse-subtlest":Ot("neutral-80"),"bg-inverse-hover":Ot("neutral-30"),"bg-primary":Ot("brand-20"),"bg-primary-subtle":Ot("brand-60"),"bg-primary-subtler":Ot("brand-80"),"bg-primary-subtlest":Ot("brand-100"),"bg-available":Ot("success-60"),"bg-primary-hover":Ot("brand-10"),"bg-primary-subtlest-hover":Ot("brand-80"),"bg-primary-subtlest-selected":Ot("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ot("neutral-10"),"hyperlink-hover":Ot("neutral-40"),"hyperlink-visited":Ot("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ot("primary-50"),"focus-ring-inverse":Ot("white")},Rt={text:Ot("neutral-20"),"text-subtle":Ot("neutral-30"),"text-subtler":Ot("neutral-50"),"text-subtlest":Ot("neutral-60"),"text-primary":Ot("primary-50"),"text-hover":Ot("primary-40"),"text-selected":Ot("primary-50"),"text-selected-hover":Ot("primary-40"),"text-disabled":Ot("neutral-50"),"text-disabled-subtle":Ot("neutral-60"),"text-disabled-subtlest":Ot("neutral-80"),"text-selected-disabled":Ot("neutral-20"),"text-success":Ot("success-40"),"text-warning":Ot("warning-40"),"text-error":Ot("error-40"),"text-info":Ot("info-40"),"text-inverse":Ot("white"),icon:Ot("neutral-50"),"icon-subtle":Ot("neutral-60"),"icon-strongest":Ot("neutral-20"),"icon-primary":Ot("primary-50"),"icon-primary-subtle":Ot("primary-60"),"icon-primary-subtlest":Ot("primary-70"),"icon-hover":Ot("primary-40"),"icon-selected":Ot("primary-50"),"icon-selected-hover":Ot("primary-40"),"icon-disabled":Ot("neutral-50"),"icon-disabled-subtle":Ot("neutral-60"),"icon-selected-disabled":Ot("neutral-60"),"icon-success":Ot("success-50"),"icon-warning":Ot("warning-60"),"icon-error":Ot("error-50"),"icon-error-strong":Ot("error-40"),"icon-info":Ot("info-50"),"icon-inverse":Ot("white"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-90"),"border-strong":Ot("neutral-70"),"border-stronger":Ot("neutral-50"),"border-primary":Ot("primary-50"),"border-primary-subtle":Ot("primary-60"),"border-hover":Ot("primary-90"),"border-hover-strong":Ot("primary-60"),"border-selected":Ot("primary-50"),"border-selected-subtle":Ot("primary-70"),"border-selected-subtlest":Ot("primary-90"),"border-selected-hover":Ot("primary-40"),"border-focus":Ot("primary-60"),"border-focus-strong":Ot("primary-50"),"border-disabled":Ot("neutral-90"),"border-selected-disabled":Ot("neutral-70"),"border-success":Ot("success-60"),"border-warning":Ot("warning-60"),"border-error":Ot("error-60"),"border-error-focus":Ot("error-60"),"border-error-focus-strong":Ot("error-40"),"border-error-strong":Ot("error-40"),"border-info":Ot("info-60"),bg:Ot("white"),"bg-strong":Ot("neutral-100"),"bg-stronger":Ot("neutral-95"),"bg-strongest":Ot("neutral-90"),"bg-hover":Ot("primary-95"),"bg-hover-strong":Ot("primary-90"),"bg-hover-subtle":Ot("primary-100"),"bg-hover-neutral":Ot("neutral-100"),"bg-hover-neutral-strong":Ot("neutral-90"),"bg-selected":Ot("primary-95"),"bg-selected-hover":Ot("primary-90"),"bg-selected-strong":Ot("primary-90"),"bg-selected-stronger":Ot("primary-70"),"bg-selected-strongest":Ot("primary-50"),"bg-selected-strongest-hover":Ot("primary-40"),"bg-disabled":Ot("neutral-95"),"bg-selected-disabled":Ot("neutral-95"),"bg-selected-stronger-disabled":Ot("neutral-70"),"bg-success":Ot("success-100"),"bg-success-hover":Ot("success-95"),"bg-success-strong":Ot("success-50"),"bg-success-strong-hover":Ot("success-40"),"bg-warning":Ot("warning-100"),"bg-warning-hover":Ot("warning-95"),"bg-warning-strong":Ot("warning-50"),"bg-warning-strong-hover":Ot("warning-40"),"bg-info":Ot("info-100"),"bg-info-hover":Ot("info-95"),"bg-info-strong":Ot("info-50"),"bg-info-strong-hover":Ot("info-40"),"bg-error":Ot("error-100"),"bg-error-hover":Ot("error-95"),"bg-error-strong":Ot("error-50"),"bg-error-strong-hover":Ot("error-40"),"bg-inverse":Ot("neutral-20"),"bg-inverse-subtle":Ot("neutral-30"),"bg-inverse-subtler":Ot("neutral-50"),"bg-inverse-subtlest":Ot("neutral-60"),"bg-inverse-hover":Ot("neutral-40"),"bg-primary":Ot("primary-50"),"bg-primary-subtle":Ot("primary-60"),"bg-primary-subtler":Ot("primary-95"),"bg-primary-subtlest":Ot("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ot("primary-40"),"bg-primary-subtlest-hover":Ot("primary-90"),"bg-primary-subtlest-selected":Ot("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ot("primary-50"),"hyperlink-hover":Ot("primary-40"),"hyperlink-visited":Ot("primary-40"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-50"),"focus-ring-inverse":Ot("white")},Tt={text:Ot("neutral-100"),"text-subtle":Ot("neutral-80"),"text-subtler":Ot("neutral-60"),"text-subtlest":Ot("neutral-50"),"text-primary":Ot("primary-60"),"text-hover":Ot("primary-70"),"text-selected":Ot("primary-60"),"text-selected-hover":Ot("primary-70"),"text-disabled":Ot("neutral-60"),"text-disabled-subtle":Ot("neutral-50"),"text-disabled-subtlest":Ot("neutral-30"),"text-selected-disabled":Ot("neutral-90"),"text-success":Ot("success-70"),"text-warning":Ot("warning-70"),"text-error":Ot("error-70"),"text-info":Ot("info-70"),"text-inverse":Ot("black"),icon:Ot("neutral-60"),"icon-subtle":Ot("neutral-50"),"icon-strongest":Ot("neutral-90"),"icon-primary":Ot("primary-60"),"icon-primary-subtle":Ot("primary-50"),"icon-primary-subtlest":Ot("primary-40"),"icon-hover":Ot("primary-70"),"icon-selected":Ot("primary-60"),"icon-selected-hover":Ot("primary-70"),"icon-disabled":Ot("neutral-60"),"icon-disabled-subtle":Ot("neutral-50"),"icon-selected-disabled":Ot("neutral-50"),"icon-success":Ot("success-60"),"icon-warning":Ot("warning-50"),"icon-error":Ot("error-60"),"icon-error-strong":Ot("error-70"),"icon-info":Ot("info-60"),"icon-inverse":Ot("black"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-20"),"border-strong":Ot("neutral-40"),"border-stronger":Ot("neutral-60"),"border-primary":Ot("primary-60"),"border-primary-subtle":Ot("primary-50"),"border-hover":Ot("primary-20"),"border-hover-strong":Ot("primary-50"),"border-selected":Ot("primary-60"),"border-selected-subtle":Ot("primary-40"),"border-selected-subtlest":Ot("primary-20"),"border-selected-hover":Ot("primary-70"),"border-focus":Ot("primary-50"),"border-focus-strong":Ot("primary-60"),"border-disabled":Ot("neutral-20"),"border-selected-disabled":Ot("neutral-40"),"border-success":Ot("success-50"),"border-warning":Ot("warning-50"),"border-error":Ot("error-50"),"border-error-focus":Ot("error-50"),"border-error-focus-strong":Ot("error-70"),"border-error-strong":Ot("error-70"),"border-info":Ot("info-50"),bg:Ot("black"),"bg-strong":Ot("neutral-10"),"bg-stronger":Ot("neutral-20"),"bg-strongest":Ot("neutral-20"),"bg-hover":Ot("primary-20"),"bg-hover-strong":Ot("primary-20"),"bg-hover-subtle":Ot("primary-10"),"bg-hover-neutral":Ot("neutral-10"),"bg-hover-neutral-strong":Ot("neutral-20"),"bg-selected":Ot("primary-20"),"bg-selected-hover":Ot("primary-20"),"bg-selected-strong":Ot("primary-20"),"bg-selected-stronger":Ot("primary-40"),"bg-selected-strongest":Ot("primary-60"),"bg-selected-strongest-hover":Ot("primary-70"),"bg-disabled":Ot("neutral-20"),"bg-selected-disabled":Ot("neutral-20"),"bg-selected-stronger-disabled":Ot("neutral-40"),"bg-success":Ot("success-10"),"bg-success-hover":Ot("success-20"),"bg-success-strong":Ot("success-60"),"bg-success-strong-hover":Ot("success-70"),"bg-warning":Ot("warning-10"),"bg-warning-hover":Ot("warning-20"),"bg-warning-strong":Ot("warning-60"),"bg-warning-strong-hover":Ot("warning-70"),"bg-info":Ot("info-10"),"bg-info-hover":Ot("info-20"),"bg-info-strong":Ot("info-60"),"bg-info-strong-hover":Ot("info-70"),"bg-error":Ot("error-10"),"bg-error-hover":Ot("error-20"),"bg-error-strong":Ot("error-60"),"bg-error-strong-hover":Ot("error-70"),"bg-inverse":Ot("neutral-90"),"bg-inverse-subtle":Ot("neutral-80"),"bg-inverse-subtler":Ot("neutral-60"),"bg-inverse-subtlest":Ot("neutral-50"),"bg-inverse-hover":Ot("neutral-70"),"bg-primary":Ot("primary-60"),"bg-primary-subtle":Ot("primary-50"),"bg-primary-subtler":Ot("primary-20"),"bg-primary-subtlest":Ot("primary-10"),"bg-available":"#185339","bg-primary-hover":Ot("primary-70"),"bg-primary-subtlest-hover":Ot("primary-20"),"bg-primary-subtlest-selected":Ot("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ot("primary-60"),"hyperlink-hover":Ot("primary-70"),"hyperlink-visited":Ot("primary-70"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-60"),"focus-ring-inverse":Ot("black")},_t={collections:{lifesg:Yt,bookingsg:Yt,rbs:Yt,mylegacy:Yt,ccube:Yt,oneservice:Yt,pa:jt,a11yplayground:Rt,supportgowhere:Yt},defaultValue:"lifesg"},It={collections:{lifesg:zt,bookingsg:zt,rbs:zt,mylegacy:zt,ccube:zt,oneservice:zt,pa:zt,a11yplayground:Tt,supportgowhere:zt},defaultValue:"lifesg"},Lt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=mt(a?It:_t,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?ht(i,e,s):i[e];return"function"==typeof l?l(r):l},Ht={text:Lt("text"),"text-subtle":Lt("text-subtle"),"text-subtler":Lt("text-subtler"),"text-subtlest":Lt("text-subtlest"),"text-primary":Lt("text-primary"),"text-hover":Lt("text-hover"),"text-selected":Lt("text-selected"),"text-selected-hover":Lt("text-selected-hover"),"text-disabled":Lt("text-disabled"),"text-disabled-subtle":Lt("text-disabled-subtle"),"text-disabled-subtlest":Lt("text-disabled-subtlest"),"text-selected-disabled":Lt("text-selected-disabled"),"text-success":Lt("text-success"),"text-warning":Lt("text-warning"),"text-error":Lt("text-error"),"text-info":Lt("text-info"),"text-inverse":Lt("text-inverse"),icon:Lt("icon"),"icon-subtle":Lt("icon-subtle"),"icon-strongest":Lt("icon-strongest"),"icon-primary":Lt("icon-primary"),"icon-primary-subtle":Lt("icon-primary-subtle"),"icon-primary-subtlest":Lt("icon-primary-subtlest"),"icon-hover":Lt("icon-hover"),"icon-selected":Lt("icon-selected"),"icon-selected-hover":Lt("icon-selected-hover"),"icon-disabled":Lt("icon-disabled"),"icon-disabled-subtle":Lt("icon-disabled-subtle"),"icon-selected-disabled":Lt("icon-selected-disabled"),"icon-success":Lt("icon-success"),"icon-warning":Lt("icon-warning"),"icon-error":Lt("icon-error"),"icon-error-strong":Lt("icon-error-strong"),"icon-info":Lt("icon-info"),"icon-inverse":Lt("icon-inverse"),"icon-primary-inverse":Lt("icon-primary-inverse"),border:Lt("border"),"border-strong":Lt("border-strong"),"border-stronger":Lt("border-stronger"),"border-primary":Lt("border-primary"),"border-primary-subtle":Lt("border-primary-subtle"),"border-hover":Lt("border-hover"),"border-hover-strong":Lt("border-hover-strong"),"border-selected":Lt("border-selected"),"border-selected-subtle":Lt("border-selected-subtle"),"border-selected-subtlest":Lt("border-selected-subtlest"),"border-selected-hover":Lt("border-selected-hover"),"border-focus":Lt("border-focus"),"border-focus-strong":Lt("border-focus-strong"),"border-disabled":Lt("border-disabled"),"border-selected-disabled":Lt("border-selected-disabled"),"border-success":Lt("border-success"),"border-warning":Lt("border-warning"),"border-error":Lt("border-error"),"border-error-focus":Lt("border-error-focus"),"border-error-focus-strong":Lt("border-error-focus-strong"),"border-error-strong":Lt("border-error-strong"),"border-info":Lt("border-info"),bg:Lt("bg"),"bg-strong":Lt("bg-strong"),"bg-stronger":Lt("bg-stronger"),"bg-strongest":Lt("bg-strongest"),"bg-hover":Lt("bg-hover"),"bg-hover-strong":Lt("bg-hover-strong"),"bg-hover-subtle":Lt("bg-hover-subtle"),"bg-hover-neutral":Lt("bg-hover-neutral"),"bg-hover-neutral-strong":Lt("bg-hover-neutral-strong"),"bg-selected":Lt("bg-selected"),"bg-selected-hover":Lt("bg-selected-hover"),"bg-selected-strong":Lt("bg-selected-strong"),"bg-selected-stronger":Lt("bg-selected-stronger"),"bg-selected-strongest":Lt("bg-selected-strongest"),"bg-selected-strongest-hover":Lt("bg-selected-strongest-hover"),"bg-disabled":Lt("bg-disabled"),"bg-selected-disabled":Lt("bg-selected-disabled"),"bg-selected-stronger-disabled":Lt("bg-selected-stronger-disabled"),"bg-success":Lt("bg-success"),"bg-success-hover":Lt("bg-success-hover"),"bg-success-strong":Lt("bg-success-strong"),"bg-success-strong-hover":Lt("bg-success-strong-hover"),"bg-warning":Lt("bg-warning"),"bg-warning-hover":Lt("bg-warning-hover"),"bg-warning-strong":Lt("bg-warning-strong"),"bg-warning-strong-hover":Lt("bg-warning-strong-hover"),"bg-info":Lt("bg-info"),"bg-info-hover":Lt("bg-info-hover"),"bg-info-strong":Lt("bg-info-strong"),"bg-info-strong-hover":Lt("bg-info-strong-hover"),"bg-error":Lt("bg-error"),"bg-error-hover":Lt("bg-error-hover"),"bg-error-strong":Lt("bg-error-strong"),"bg-error-strong-hover":Lt("bg-error-strong-hover"),"bg-inverse":Lt("bg-inverse"),"bg-inverse-subtle":Lt("bg-inverse-subtle"),"bg-inverse-subtler":Lt("bg-inverse-subtler"),"bg-inverse-subtlest":Lt("bg-inverse-subtlest"),"bg-inverse-hover":Lt("bg-inverse-hover"),"bg-primary":Lt("bg-primary"),"bg-primary-subtle":Lt("bg-primary-subtle"),"bg-primary-subtler":Lt("bg-primary-subtler"),"bg-primary-subtlest":Lt("bg-primary-subtlest"),"bg-available":Lt("bg-available"),"bg-primary-hover":Lt("bg-primary-hover"),"bg-primary-subtlest-hover":Lt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Lt("bg-primary-subtlest-selected"),"overlay-strong":Lt("overlay-strong"),"overlay-subtle":Lt("overlay-subtle"),hyperlink:Lt("hyperlink"),"hyperlink-hover":Lt("hyperlink-hover"),"hyperlink-visited":Lt("hyperlink-visited"),"hyperlink-inverse":Lt("hyperlink-inverse"),"focus-ring":Lt("focus-ring"),"focus-ring-inverse":Lt("focus-ring-inverse")},Wt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:pt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Ht.border(r),u=pt.solid;return w`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:pt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Ht.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return w`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Pt=e=>1===e.length&&"theme"in e[0],Nt=e=>(...r)=>t=>{const n=Pt(r)?[]:r,a=Pt(r)?r[0]:t,i=a.theme;return(0,mt(Wt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Vt={solid:Nt("solid"),"dashed-default":Nt("dashed-default")},Ut={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1024,"xl-min":1025,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Kt=e=>r=>{var t;const n=r.theme,a=mt(Ut,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ht(a,e,n.overrides.breakpoint):a[e],i},Zt={"xxs-min":Kt("xxs-min"),"xxs-max":Kt("xxs-max"),"xs-min":Kt("xs-min"),"xs-max":Kt("xs-max"),"sm-min":Kt("sm-min"),"sm-max":Kt("sm-max"),"md-min":Kt("md-min"),"md-max":Kt("md-max"),"lg-min":Kt("lg-min"),"lg-max":Kt("lg-max"),"xl-min":Kt("xl-min"),"xl-max":Kt("xl-max"),"xxl-min":Kt("xxl-min"),"xxs-column":Kt("xxs-column"),"xs-column":Kt("xs-column"),"sm-column":Kt("sm-column"),"md-column":Kt("md-column"),"lg-column":Kt("lg-column"),"xl-column":Kt("xl-column"),"xxl-column":Kt("xxl-column"),"xxs-gutter":Kt("xxs-gutter"),"xs-gutter":Kt("xs-gutter"),"sm-gutter":Kt("sm-gutter"),"md-gutter":Kt("md-gutter"),"lg-gutter":Kt("lg-gutter"),"xl-gutter":Kt("xl-gutter"),"xxl-gutter":Kt("xxl-gutter"),"xxs-margin":Kt("xxs-margin"),"xs-margin":Kt("xs-margin"),"sm-margin":Kt("sm-margin"),"md-margin":Kt("md-margin"),"lg-margin":Kt("lg-margin"),"xl-margin":Kt("xl-margin"),"xxl-margin":Kt("xxl-margin")},Jt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Zt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),qt={MaxWidth:Jt("max-width"),MinWidth:Jt("min-width")},Xt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Gt=e=>r=>{var t;const n=r.theme,a=mt(Xt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ht(a,e,n.overrides.fontSpec):a[e]},Qt={"heading-size-xxl":Gt("heading-size-xxl"),"heading-size-xl":Gt("heading-size-xl"),"heading-size-lg":Gt("heading-size-lg"),"heading-size-md":Gt("heading-size-md"),"heading-size-sm":Gt("heading-size-sm"),"heading-size-xs":Gt("heading-size-xs"),"heading-lh-xxl":Gt("heading-lh-xxl"),"heading-lh-xl":Gt("heading-lh-xl"),"heading-lh-lg":Gt("heading-lh-lg"),"heading-lh-md":Gt("heading-lh-md"),"heading-lh-sm":Gt("heading-lh-sm"),"heading-lh-xs":Gt("heading-lh-xs"),"heading-ls-xxl":Gt("heading-ls-xxl"),"heading-ls-xl":Gt("heading-ls-xl"),"heading-ls-lg":Gt("heading-ls-lg"),"heading-ls-md":Gt("heading-ls-md"),"heading-ls-sm":Gt("heading-ls-sm"),"heading-ls-xs":Gt("heading-ls-xs"),"weight-light":Gt("weight-light"),"weight-regular":Gt("weight-regular"),"weight-semibold":Gt("weight-semibold"),"weight-bold":Gt("weight-bold"),"font-family":Gt("font-family"),"body-size-baseline":Gt("body-size-baseline"),"body-size-md":Gt("body-size-md"),"body-size-sm":Gt("body-size-sm"),"body-size-xs":Gt("body-size-xs"),"body-lh-baseline":Gt("body-lh-baseline"),"body-lh-md":Gt("body-lh-md"),"body-lh-sm":Gt("body-lh-sm"),"body-lh-xs":Gt("body-lh-xs"),"body-ls-baseline":Gt("body-ls-baseline"),"body-ls-md":Gt("body-ls-md"),"body-ls-sm":Gt("body-ls-sm"),"body-ls-xs":Gt("body-ls-xs"),"form-label-size":Gt("form-label-size"),"form-description-size":Gt("form-description-size"),"form-label-lh":Gt("form-label-lh"),"form-description-lh":Gt("form-description-lh"),"form-label-ls":Gt("form-label-ls"),"form-description-ls":Gt("form-description-ls")},en=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return w`
        font-family: ${Gt("font-family")};
        font-size: ${Gt(e)};
        font-weight: ${Gt(r)};
        line-height: ${Gt(t)};
        letter-spacing: ${Gt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},rn=(e={})=>({"heading-xxl-light":en("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":en("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":en("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":en("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":en("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":en("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":en("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":en("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":en("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":en("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":en("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":en("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":en("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":en("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":en("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":en("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":en("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":en("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":en("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":en("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":en("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":en("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":en("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":en("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":en("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":en("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":en("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":en("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":en("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":en("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":en("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":en("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":en("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":en("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":en("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":en("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":en("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":en("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":en("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":en("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":en("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":en("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),tn=rn({disableLigatures:!0}),nn={collections:{default:rn(),bookingsg:tn,pa:rn({disableLigatures:!0}),a11yplayground:rn({disableLigatures:!0}),supportgowhere:rn({disableLigatures:!0})},defaultValue:"default"},an=e=>r=>{var t;const n=r.theme,a=mt(nn,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ht(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},on={"heading-xxl-light":an("heading-xxl-light"),"heading-xxl-regular":an("heading-xxl-regular"),"heading-xxl-semibold":an("heading-xxl-semibold"),"heading-xxl-bold":an("heading-xxl-bold"),"heading-xl-light":an("heading-xl-light"),"heading-xl-regular":an("heading-xl-regular"),"heading-xl-semibold":an("heading-xl-semibold"),"heading-xl-bold":an("heading-xl-bold"),"heading-lg-light":an("heading-lg-light"),"heading-lg-regular":an("heading-lg-regular"),"heading-lg-semibold":an("heading-lg-semibold"),"heading-lg-bold":an("heading-lg-bold"),"heading-md-light":an("heading-md-light"),"heading-md-regular":an("heading-md-regular"),"heading-md-semibold":an("heading-md-semibold"),"heading-md-bold":an("heading-md-bold"),"heading-sm-light":an("heading-sm-light"),"heading-sm-regular":an("heading-sm-regular"),"heading-sm-semibold":an("heading-sm-semibold"),"heading-sm-bold":an("heading-sm-bold"),"heading-xs-light":an("heading-xs-light"),"heading-xs-regular":an("heading-xs-regular"),"heading-xs-semibold":an("heading-xs-semibold"),"heading-xs-bold":an("heading-xs-bold"),"body-baseline-light":an("body-baseline-light"),"body-baseline-regular":an("body-baseline-regular"),"body-baseline-semibold":an("body-baseline-semibold"),"body-baseline-bold":an("body-baseline-bold"),"body-md-light":an("body-md-light"),"body-md-regular":an("body-md-regular"),"body-md-semibold":an("body-md-semibold"),"body-md-bold":an("body-md-bold"),"body-sm-light":an("body-sm-light"),"body-sm-regular":an("body-sm-regular"),"body-sm-semibold":an("body-sm-semibold"),"body-sm-bold":an("body-sm-bold"),"body-xs-light":an("body-xs-light"),"body-xs-regular":an("body-xs-regular"),"body-xs-semibold":an("body-xs-semibold"),"body-xs-bold":an("body-xs-bold"),"form-label":an("form-label"),"form-description":an("form-description")},sn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ln=e=>r=>{var t;const n=r.theme,a=mt(sn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ht(a,e,n.overrides.motion):a[e]},dn={"duration-150":ln("duration-150"),"duration-250":ln("duration-250"),"duration-350":ln("duration-350"),"duration-500":ln("duration-500"),"duration-800":ln("duration-800"),"duration-1000":ln("duration-1000"),"ease-default":ln("ease-default"),"ease-standard":ln("ease-standard"),"ease-entrance":ln("ease-entrance"),"ease-exit":ln("ease-exit")},cn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},un=e=>r=>{var t;const n=r.theme,a=mt(cn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ht(a,e,n.overrides.radius)}px`:`${a[e]}px`},gn={none:un("none"),xs:un("xs"),sm:un("sm"),md:un("md"),lg:un("lg"),full:un("full")},bn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},hn=e=>r=>{var t;const n=r.theme,a=mt(bn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ht(a,e,n.overrides.spacing)}px`:`${a[e]}px`},mn={"spacing-0":hn("spacing-0"),"spacing-4":hn("spacing-4"),"spacing-8":hn("spacing-8"),"spacing-12":hn("spacing-12"),"spacing-16":hn("spacing-16"),"spacing-20":hn("spacing-20"),"spacing-24":hn("spacing-24"),"spacing-32":hn("spacing-32"),"spacing-40":hn("spacing-40"),"spacing-48":hn("spacing-48"),"spacing-64":hn("spacing-64"),"spacing-72":hn("spacing-72"),"layout-xs":hn("layout-xs"),"layout-sm":hn("layout-sm"),"layout-md":hn("layout-md"),"layout-lg":hn("layout-lg"),"layout-xl":hn("layout-xl"),"layout-xxl":hn("layout-xxl"),"layout-xxxl":hn("layout-xxxl")},fn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),yn=Object.assign(Object.assign({},Ht),{Primitive:Mt}),pn=Object.assign(Object.assign({},on),{Spec:Qt}),vn=dn,xn=Object.assign(Object.assign({},pt),{Util:Vt}),Dn=mn,wn=gn,Fn=Zt,$n=qt,En={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Cn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Sn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Bn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},kn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},An={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},On={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Mn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Yn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},En),{light:fn(En,"light"),dark:fn(En,"dark")}),Object.assign(Object.assign({},Cn),{light:fn(Cn,"light"),dark:fn(Cn,"dark")}),Object.assign(Object.assign({},Sn),{light:fn(Sn,"light"),dark:fn(Sn,"dark")}),Object.assign(Object.assign({},Bn),{light:fn(Bn,"light"),dark:fn(Bn,"dark")}),Object.assign(Object.assign({},kn),{light:fn(kn,"light"),dark:fn(kn,"dark")}),Object.assign(Object.assign({},An),{light:fn(An,"light"),dark:fn(An,"dark")}),Object.assign(Object.assign({},On),{light:fn(On,"light"),dark:fn(On,"dark")}),Object.assign(Object.assign({},Mn),{light:fn(Mn,"light"),dark:fn(Mn,"dark")}),Object.assign(Object.assign({},Yn),{light:fn(Yn,"light"),dark:fn(Yn,"dark")});const zn=e=>"small"===e?2.5:3;D.div`
    position: relative;
    width: 100%;
    ${e=>{const r=zn(e.$variant);return w`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const jn=w`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Dn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>zn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${wn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${yn["border-focus"]};
    }
`,Rn=D.button`
    ${jn}
    cursor: pointer;
`;D.div`
    ${jn}
`;const Tn=F`
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
`;D.div`
    position: relative;
    border: ${xn["width-010"]} ${xn.solid} ${yn.border};
    border-radius: ${wn.sm};
    background: ${yn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${yn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${yn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?w`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:w`
                animation: ${Tn} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?w`
                background: ${yn["bg-disabled"]};

                ${Rn} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${yn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?w`
                border: none;
                background: transparent !important;

                ${Rn} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?w`
                border-color: ${yn["border-error"]};

                &:focus-within {
                    border-color: ${yn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${yn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,D.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${vn["duration-250"]} ${vn["ease-default"]};
    margin-left: ${Dn["spacing-16"]};
`,D(x)`
    color: ${yn.icon};
`,D.div`
    height: 1px;
    background: ${yn.border};
    margin: 0 ${Dn["spacing-8"]};
`,D.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return w`
                color: ${yn["text-disabled"]};
            `}}
`;D(D.div`
    ${e=>"small"===e.$variant?pn["body-md-regular"]:pn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return w`
                    ${r=1,w`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${yn["text-subtler"]};
`;var _n=function(e,r){return _n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},_n(e,r)};var In=function(){return In=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},In.apply(this,arguments)};var Ln="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Hn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Wn="object"==typeof Ln&&Ln&&Ln.Object===Object&&Ln,Pn="object"==typeof self&&self&&self.Object===Object&&self,Nn=Wn||Pn||Function("return this")(),Vn=Nn,Un=function(){return Vn.Date.now()},Kn=/\s/;var Zn=function(e){for(var r=e.length;r--&&Kn.test(e.charAt(r)););return r},Jn=/^\s+/;var qn=function(e){return e?e.slice(0,Zn(e)+1).replace(Jn,""):e},Xn=Nn.Symbol,Gn=Xn,Qn=Object.prototype,ea=Qn.hasOwnProperty,ra=Qn.toString,ta=Gn?Gn.toStringTag:void 0;var na=function(e){var r=ea.call(e,ta),t=e[ta];try{e[ta]=void 0;var n=!0}catch(e){}var a=ra.call(e);return n&&(r?e[ta]=t:delete e[ta]),a},aa=Object.prototype.toString;var ia=na,oa=function(e){return aa.call(e)},sa=Xn?Xn.toStringTag:void 0;var la=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":sa&&sa in Object(e)?ia(e):oa(e)},da=function(e){return null!=e&&"object"==typeof e};var ca=qn,ua=Hn,ga=function(e){return"symbol"==typeof e||da(e)&&"[object Symbol]"==la(e)},ba=/^[-+]0x[0-9a-f]+$/i,ha=/^0b[01]+$/i,ma=/^0o[0-7]+$/i,fa=parseInt;var ya=Hn,pa=Un,va=function(e){if("number"==typeof e)return e;if(ga(e))return NaN;if(ua(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ua(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ca(e);var t=ha.test(e);return t||ma.test(e)?fa(e.slice(2),t?2:8):ba.test(e)?NaN:+e},xa=Math.max,Da=Math.min;var wa=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=pa();if(h(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Da(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function y(){var e=pa(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=va(r)||0,ya(t)&&(c=!!t.leading,i=(u="maxWait"in t)?xa(va(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(pa())},y},Fa=wa,$a=Hn;var Ea=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return $a(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Fa(e,r,{leading:n,maxWait:r,trailing:a})},Ca=function(e,r,t,n){switch(r){case"debounce":return wa(e,t,n);case"throttle":return Ea(e,t,n);default:return e}},Sa=function(e){return"function"==typeof e},Ba=function(){return"undefined"==typeof window},ka=function(e){return e instanceof Element||e instanceof HTMLDocument},Aa=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Sa(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ba()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ba())return null;if(r)return document.querySelector(r);if(n&&ka(n))return n;if(t.targetRef&&ka(t.targetRef.current))return t.targetRef.current;var a=I(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Aa(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Ba()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Sa(r)?"renderProp":Sa(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Ba()||(t.resizeHandler=Ca(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}_n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ba()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Oa,Ma=Ba()?u:g;function Ya(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return Ma((function(){if(!Ba()){var e=Aa(m,w,c,g);v.current=Ca((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Ba()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),In({ref:p},D)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Oa||(Oa={}));const za=e=>"right"===e?"bottom-end":"bottom-start",ja=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Ra=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:m=!1,offset:f=0,alignment:y="left",fitAvailableHeight:p,rootNode:v})=>{var x;const D=h($),w=Fn["sm-max"]({theme:D}),F=i(null),{width:I=0}=Ya({targetRef:F,handleHeight:!1}),L={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:W,context:P}=C({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:S,placement:za(y),middleware:[B(f),k(),A({limiter:O()}),M({apply({availableHeight:e,elements:r}){!p||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),L]}),N=(()=>{const[e,r]=o(void 0),t=E();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Oa.Change,e),t.events.emit(Oa.Ready),()=>t.events.off(Oa.Change,e)}),[t]),e})(),{isMounted:V,styles:U}=Y(P,{initial:{opacity:0},open:{opacity:1},duration:300}),K=z(P,{enabled:n,toggle:m}),Z=j(P,{enabled:n}),{getReferenceProps:J,getFloatingProps:q}=R([K,Z]),X={elementWidth:I,styles:Object.assign(Object.assign(Object.assign({},U),W),{zIndex:null!==(x=null!=b?b:N)&&void 0!==x?x:50}),setFloatingRef:H.setFloating,getFloatingProps:q};return e(r,{children:[t("div",Object.assign({ref:e=>{F.current=e,H.setReference(e)}},J(),{children:c()})),V&&t(T,{root:v,children:t(_,{context:P,modal:!1,initialFocus:-1,returnFocus:!1,children:t(ja.Provider,{value:X,children:g(X)})})})]})},Ta=D.div`
    --vertical-inset: ${Dn["spacing-24"]};
    --horizontal-inset: ${Dn["spacing-20"]};
    --header-bottom-spacing: ${Dn["spacing-4"]};

    border: ${xn["width-010"]} ${xn.solid} ${yn.border};
    border-radius: ${wn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${$n.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var _a={exports:{}};_a.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,h,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,h,y,p,v,x)):new Date(m,f,h,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ia=V(_a.exports),La={exports:{}};La.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Ha=V(La.exports),Wa={exports:{}};Wa.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Pa=V(Wa.exports),Na={exports:{}};Na.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Va,Ua,Ka,Za=V(Na.exports),Ja={exports:{}},qa=V(Ja.exports=(Va={year:0,month:1,day:2,hour:3,minute:4,second:5},Ua={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Ua[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ua[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Va[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));K.extend(Ha),K.extend(Za),K.extend(Pa),K.extend(Ia),K.extend(qa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=K(r).startOf("week");return Xa(t).map((e=>Ga(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ga(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(K(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+K(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=K(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?K(n):void 0,a?K(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Ka||(Ka={}));const Xa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ga=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Qa=[1,3,5,7,8,10,12],ei=[4,6,9,11];var ri,ti,ni,ai;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Qa.includes(i)?Math.min(a,31).toString():ei.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=K(e,t);return K(r,t).diff(n,"minute")},e.toDayjs=e=>e?K(e):K(),e.addMinutesToTime=(e,r,t="HH:mm")=>K(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>K(e).isSame(K(r),t)}(ri||(ri={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!K(e).isBefore(n,"day"))||!(!a||!K(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(K(e).isValid())return e}return""}}(ti||(ti={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ni||(ni={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(ai||(ai={}));const ii=e=>{const[r,t]=o(e),n=i(e);return[r,m((e=>{n.current=e,t(e)}),[]),n]};D.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const oi=e=>{const r=f.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},si=D.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,li=F`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,di=D.div`
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
    animation: ${li} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ci=D(di)`
    animation-delay: -0.45s;
`,ui=D(di)`
    animation-delay: -0.3s;
`,gi=D(di)`
    animation-delay: -0.15s;
`,bi={Button:{"button-radius":gn.md,"button-default-colour-bg":Ht["bg-primary"],"button-default-colour-bg-hover":Ht["bg-primary-hover"],"button-default-colour-text":Ht["text-inverse"],"button-secondary-colour-border":Ht["border-primary"],"button-secondary-colour-text":Ht["text-primary"],"button-light-colour-text":Ht["text-primary"],"button-link-colour-text":Ht["text-primary"]}},hi={collections:{default:{Button:{"button-radius":gn.sm,"button-default-colour-bg":Ht["bg-primary"],"button-default-colour-bg-hover":Ht["bg-primary-hover"],"button-default-colour-text":Ht["text-inverse"],"button-secondary-colour-border":Ht["border-primary"],"button-secondary-colour-text":Ht["text-primary"],"button-light-colour-text":Ht["text-primary"],"button-link-colour-text":Ht["text-primary"]}},pa:{Button:{"button-radius":gn.full,"button-default-colour-bg":Ht["bg-primary"],"button-default-colour-bg-hover":Ht["bg-primary-hover"],"button-default-colour-text":Ht["text-inverse"],"button-secondary-colour-border":Ht["border-primary"],"button-secondary-colour-text":Ht["text-primary"],"button-light-colour-text":Ht["text-primary"],"button-link-colour-text":Ht["text-primary"]}},a11yplayground:bi},defaultValue:"default"},mi=(e,r)=>t=>{var n,a;const i=t.theme,o=mt(hi,null==i?void 0:i.componentScheme);return fi((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},fi=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},yi=mi("Button","button-radius"),pi=mi("Button","button-default-colour-bg"),vi=mi("Button","button-default-colour-bg-hover"),xi=mi("Button","button-default-colour-text"),Di=mi("Button","button-secondary-colour-border"),wi=mi("Button","button-secondary-colour-text"),Fi=mi("Button","button-light-colour-text"),$i=mi("Button","button-link-colour-text"),Ei=D.button`
    padding: ${Dn["spacing-8"]} ${Dn["spacing-16"]};
    min-width: 4rem;
    border: ${xn["width-010"]} ${xn.solid} transparent;
    transition: all ${vn["duration-250"]} ${vn["ease-default"]};
    border-radius: ${yi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${yn.bg};
                    border-color: ${e.$buttonIsDanger?yn["border-error-strong"]:Di};

                    color: ${e.$buttonIsDanger?yn["text-error"]:wi};

                    &:hover,
                    &:active {
                        background-color: ${yn["bg-hover-neutral"]};
                    }
                `;case"light":return w`
                    background-color: ${yn.bg};
                    border-color: ${yn.border};

                    color: ${e.$buttonIsDanger?yn["text-error"]:Fi};

                    &:hover,
                    &:active {
                        background-color: ${yn["bg-hover-neutral"]};
                    }
                `;case"link":return w`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?yn["text-error"]:$i};
                    &:hover,
                    &:active {
                        background-color: ${yn["bg-hover-neutral"]};
                    }
                `;case"disabled":return w`
                    background-color: ${yn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${yn["text-disabled"]};
                `;default:return w`
                    background-color: ${e.$buttonIsDanger?yn["bg-error-strong"]:pi};

                    ${$n.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${xi};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?yn["bg-error-strong-hover"]:vi};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return w`
                    height: 2.5rem;
                    ${pn["body-md-semibold"]}

                    ${$n.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return w`
                    height: 4rem;
                    ${pn["heading-md-semibold"]}

                    ${$n.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return w`
                    height: 3rem;
                    ${pn["heading-xs-semibold"]}

                    ${$n.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ci=D((({color:r,className:n,size:a})=>e(si,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(di,{id:"inner1"}),t(ci,{id:"inner2"}),t(ui,{id:"inner3"}),t(gi,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Si=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=P(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ei,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":o,onClick:i?void 0:c},g,u,{children:[o&&t(Ci,{}),t("span",{children:a})]}))};Si.displayName="Button.Default";const Bi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=P(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ei,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":o,onClick:i?void 0:c},g,u,{children:[o&&t(Ci,{}),t("span",{children:a})]}))};Bi.displayName="Button.Small";const ki=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=P(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ei,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":o,onClick:i?void 0:c},g,u,{children:[o&&t(Ci,{}),t("span",{children:a})]}))};ki.displayName="Button.Large";const Ai={Default:a.forwardRef(Si),Small:a.forwardRef(Bi),Large:a.forwardRef(ki)},Oi=D.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Dn["spacing-24"]};
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

        ${({$highlight:e})=>e&&w`
                background-color: ${yn["bg-hover-neutral"]};
            `}
    }
`,Mi=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=P(e,["children","focusHighlight","focusOutline","type"]);return t(Oi,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Yi=w`
    color: ${yn.icon};
    height: 1rem;
    width: 1rem;
`,zi=D(L)`
    ${Yi}
`,ji=D(H)`
    ${Yi}
`,Ri=D(x)`
    ${Yi}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ti=D.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,_i=D.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ii=D.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Li=D.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${yn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return w`
                display: none;
            `}}
`,Hi=D.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Wi=D.div`
    display: flex;
`,Pi=D.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?w`
                display: none;
            `:e.$expanded?w`
                ${Ri} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Ni=D.span`
    ${pn["body-md-regular"]}
    color: ${yn.text};
`,Vi=D.div`
    display: flex;
`,Ui=D(Mi)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,Ki=D.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Zi=D(Ai.Small)`
    flex: 1;
`,Ji=D.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,qi=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${wn.md};
    margin: 0 0.5rem;
    transition: ${vn["duration-150"]} ${vn["ease-default"]};

    // default styles
    ${pn["body-md-regular"]}
    border-radius: ${wn.md};
    border: ${xn["width-010"]} ${xn.solid} transparent;
    background-clip: border-box;
    color: ${yn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?w`
                cursor: pointer;
            `:e.$disabledDisplay?w`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?w`
                background: ${yn["bg-selected"]};
                border-color: ${yn["border-selected"]};
                color: ${yn["text-selected"]};
                font-weight: ${pn.Spec["weight-semibold"]};

                ${r&&w`
                    &:hover {
                        background: ${yn["bg-selected-hover"]};
                        border-color: ${yn["border-selected-hover"]};
                        color: ${yn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?w`
                color: ${yn["text-primary"]};
                font-weight: ${pn.Spec["weight-semibold"]};
            `:t?w`
                color: ${yn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?w`
                &:hover {
                    background: ${yn["bg-selected-hover"]};
                    border-color: ${yn["border-selected-hover"]};
                    color: ${yn["text-selected-hover"]};
                    font-weight: ${pn.Spec["weight-semibold"]};
                }
            `:w`
            &:hover {
                background: ${yn["bg-hover"]};
                color: ${yn["text-hover"]};
                font-weight: ${pn.Spec["weight-semibold"]};
            }
        `}}
`,Xi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const h=y((()=>Ka.generateMonths(K(e))),[e]),m=i(new Array(h.length).fill(null)),[f,p]=o(h.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==f&&(null===(e=m.current[f])||void 0===e||e.focus())}),[f,h]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},D=e=>{const r=e.format("MMMM"),t=(n=e,!Ka.isWithinRange(n,d?K(d):void 0,c?K(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":K().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return h.length?t(Ji,{onBlur:()=>{p(null)},children:h.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=D(e);return t(qi,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=h.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<h.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},Gi=D.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Qi=D.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${vn["duration-150"]} ${vn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${pn["body-md-regular"]}
    border-radius: ${wn.md};
    border: ${xn["width-010"]} ${xn.solid} transparent;
    background-clip: border-box;
    color: ${yn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?w`
                cursor: pointer;
            `:r?w`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?w`
                background: ${yn["bg-selected"]};
                border-color: ${yn["border-selected"]};
                color: ${yn["text-selected"]};
                font-weight: ${pn.Spec["weight-semibold"]};

                ${r&&w`
                    &:hover {
                        background: ${yn["bg-selected-hover"]};
                        border-color: ${yn["border-selected-hover"]};
                        color: ${yn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?w`
                color: ${yn["text-primary"]};
                font-weight: ${pn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?w`
                color: ${yn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?w`
                &:hover {
                    background: ${yn["bg-selected-hover"]};
                    border-color: ${yn["border-selected-hover"]};
                    color: ${yn["text-selected-hover"]};
                    font-weight: ${pn.Spec["weight-semibold"]};
                }
            `:w`
            &:hover {
                background: ${yn["bg-hover"]};
                color: ${yn["text-hover"]};
                font-weight: ${pn.Spec["weight-semibold"]};
            }
        `}}
`,eo=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:h})=>{const m=y((()=>Ka.generateDecadeOfYears(K(e))),[e]),f=i(new Array(m.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=m.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,m]);const x=(e,r)=>{r||b(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},w=e=>{const r=m.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!Ka.isWithinRange(i,d?K(d):void 0,c?K(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":K().isSame(e,"year")?"current-year":"default",l=s.year()>=m[0].year()&&s.year()<=m[m.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return m.length?t(Gi,{onBlur:()=>{v(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=w(e);return t(Qi,{ref:e=>{f.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),h(n),v(n))})(r,e,!a)},children:o},o)}))}):null},ro=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:h,selectWithinRange:m,dynamicHeight:f=!1,allowDisabledSelection:y,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:k,isFocusable:A=!1}=n,O=P(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,Y]=o(ri.toDayjs(l)),[z,j]=o(ri.toDayjs(l)),[R,T]=o("default"),_=i(null),I=i(null),L=i(null),H=i(null);p(a,(()=>({defaultView(){T("default")},resetView(){const e=ri.toDayjs(l);Y(e),j(e),T("default")},setCalendarDate(e){const r=ri.toDayjs(e);Y(r),j(r)}}))),u((()=>{const e=ri.toDayjs(l);Y(e),j(e)}),[l]),u((()=>{G(z)}),[z]);const W=()=>{var e;"month-options"!==R?(T("month-options"),null===(e=L.current)||void 0===e||e.focus()):(T("default"),Y(z))},N=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),W(),null===(r=H.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!Ka.isWithinRange(r,d?K(d):void 0,c?K(c):void 0,"month"))return;Y(r),"default"===R&&j(r)}},V=()=>{"default"!==R?(T("default"),Y(z)):T("year-options")},U=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===R?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!Ka.isWithinRange(r,d?K(d):void 0,c?K(c):void 0,"year"))return;Y(r),"default"===R&&j(r)}},Z=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=$?$(M):M.subtract(1,"month");switch(R){case"default":j(r),Y(r);break;case"month-options":Y((e=>e.subtract(1,"year")));break;case"year-options":Y((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=E?E(M):M.add(1,"month");switch(R){case"default":j(r),Y(r);break;case"month-options":Y((e=>e.add(1,"year")));break;case"year-options":Y((e=>e.add(10,"year")))}},q=e=>{Y(e),j(e),x||T("default")},X=()=>{const e=ri.toDayjs(l);Y(e),j(e),"default"===R?Q("reset"):T("default")},G=e=>{v&&v(e)},Q=e=>{w&&w(e)},ee=()=>{if(!d||y)return!1;const e=K(d);return"month-options"===R?!Ka.isPreviousYearWithinRange(M,e):"year-options"===R?!Ka.isPreviousDecadeWithinRange(M,e):C?C(M):!Ka.isPreviousMonthWithinRange(M,e)},re=()=>{if(!c||y)return!1;const e=K(c);return"month-options"===R?!Ka.isNextYearWithinRange(M,e):"year-options"===R?!Ka.isNextDecadeWithinRange(M,e):S?S(M):!Ka.isNextMonthWithinRange(M,e)},te=()=>{const n=B?B(M):M.format("MMM"),a=K(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===R){const{beginDecade:e,endDecade:r}=Ka.getStartEndDecade(M);return`${e} to ${r}`}return k?k(M):M.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Pi,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:W,onKeyDown:N,tabIndex:A?0:-1,children:[t(Ni,{children:n}),t(Ri,{})]}),e(Pi,{ref:H,"aria-label":o[R],type:"button",$expanded:"default"!==R,id:"year-dropdown",onClick:V,onKeyDown:U,tabIndex:A?0:-1,children:[t(Ni,{children:i}),t(Ri,{})]})]})},ne=()=>{switch(R){case"month-options":return t(Xi,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:z,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:y});case"year-options":return t(eo,{setCalendarDate:Y,calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:z,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:y});default:return null}};return e(Ti,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":z.format("MMMM, YYYY"),role:"group"},O,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[R];return e(Hi,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Wi,{children:te()}),e(Vi,{children:[t(Ui,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:Z,tabIndex:A?0:-1,children:t(zi,{})}),t(Ui,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:A?0:-1,children:t(ji,{})})]})]})})(),t(_i,{children:(()=>{const n="function"==typeof s?s({calendarDate:z,currentView:R}):s;if(f)return e(r,{children:["default"===R&&n,ne()]});{const a="default"===R;return e(r,{children:[t(Ii,{inert:oi(!a),children:n}),t(Li,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===R)&&D;return e(Ki,{children:[t(Zi,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X,children:"Cancel"}),t(Zi,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(Y(z),"default"===R?Q("confirmed"):T("default"))},disabled:r,children:"Done"})]})})()]}))})),to=D.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,no=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${pn["body-sm-semibold"]};
    color: ${yn.text};
`,ao=D.div`
    grid-column: 1 / -1;
    display: flex;
`,io=e=>{let r=yn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=yn["bg-hover"],t=yn["bg-hover"];break;case"hover":r=yn["bg-hover-strong"],t=yn["bg-hover-strong"];break;case"hover-outline":r=yn["bg-hover-subtle"],t=yn["border-hover"];break;case"selected-outline":r=yn["bg-selected"],t=yn["border-selected"];break;case"selected-outline-subtle":r=yn["bg-selected"],t=yn["border-selected-subtle"];break;case"selected-hover":r=yn["bg-selected-hover"];break;case"selected-hover-outline":r=yn["bg-selected-hover"],t=yn["border-selected-hover"]}return{color:r,borderColor:t}},oo=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,so=D.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${vn["duration-150"]} ${vn["ease-default"]};
    border: ${xn["width-010"]} ${xn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=io(e);return w`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,lo=D(so)`
    left: 0;
`,co=D(so)`
    right: 0;
`,uo=D.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${vn["duration-150"]} ${vn["ease-default"]};

    border: ${xn["width-010"]} ${xn.solid} transparent;
    border-radius: ${wn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=io(e);return w`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,go=D(uo)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,bo=D(uo)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,ho=D.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,mo=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${pn["body-md-regular"]}
    transition: ${vn["duration-150"]} ${vn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?w`
                    visibility: hidden;
                `:w`
                color: ${yn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return w`
                    font-weight: ${pn.Spec["weight-semibold"]};
                    color: ${yn["text-selected"]};
                `;case"selected-hover":return w`
                    font-weight: ${pn.Spec["weight-semibold"]};
                    color: ${yn["text-selected-hover"]};
                `;case"current":return w`
                    font-weight: ${pn.Spec["weight-semibold"]};
                    color: ${yn["text-primary"]};
                `;case"hover":return w`
                    font-weight: ${pn.Spec["weight-semibold"]};
                    color: ${yn["text-hover"]};
                `;case"unavailable":return w`
                    color: ${yn["text-disabled-subtlest"]};
                `;case"hidden":return w`
                    visibility: hidden;
                `;default:return w`
                    color: ${yn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,fo=D.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,yo=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:f,onKeyDown:y,focusDate:p,label:v,ariaHidden:x,tabIndex:D=-1,role:w="button"})=>{const F=K().isSame(g,"day"),$=!!p&&p.isSame(g,"day"),E=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=i(null);u((()=>{var e;$&&C.current&&(null===(e=C.current)||void 0===e||e.focus())}),[$]);return e(oo,{"aria-hidden":x,children:[t(lo,{$type:r}),t(go,{$type:a}),t(co,{$type:n}),t(bo,{$type:o}),t(ho,{$interactive:d,children:e(mo,{ref:C,tabIndex:D,role:w,"aria-label":v||E,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&F&&t(fo,{$disabled:l})]})})]})},po=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p})=>{const v=Ka.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{h(e,!x)},w=()=>{const e=K(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:K(s),tabIndex:p};return t(yo,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(K().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=w();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};K.extend(Ha);const vo=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:b,maxDate:h,allowDisabledSelection:f,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=m((()=>s&&K(s).isSame(r,"month")?K(s):l&&K(l).isSame(r,"month")?K(l):K().isSame(r,"month")?K():b&&r.isSame(K(b),"month")?K(b):K(r).startOf("month")),[s,r,l,b]),w=e=>{const t=K(e);if(Ka.isWithinRange(t,b?K(b):void 0,h?K(h):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=y((()=>Ka.generateDays(r)),[r]),$=y((()=>D()),[D]),[E,C]=o(""),[S,B]=o(""),k=(e,r)=>{r&&!f||d(e)},A=(e,r)=>{r&&!f||(B(e),c(e))},O=e=>{B(e),c(e)},M=()=>{B(""),c("")};return e(to,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(no,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(ao,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:M,children:e.map(((e,i)=>t(po,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:b,maxDate:h,disabledDates:a,allowDisabledSelection:f,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:k,onHover:A,onFocus:O,setFocusCell:w,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},xo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Ka.isDisabledDay(e,l,o,s),y=!f||d,{start:p,end:v}=n?Ka.getFixedRangeStartEnd(ri.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:D}=a?Ka.getFixedRangeStartEnd(ri.toDayjs(a),c):{start:void 0,end:void 0},w=!!n&&e.isBetween(p,v,"day","[]"),F=!!a&&e.isBetween(x,D,"day","[]"),$=w&&e.isSame(p,"day")||F&&e.isSame(x,"day"),E=w&&e.isSame(v,"day")||F&&e.isSame(D,"day"),C=`From ${K(x).format("D MMMM")} to ${K(D).format("D MMMM")}, ${f?"Unavailable":"Available"}`,S=()=>{u(e,!y)},B=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},k={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:S,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&S());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},focusDate:K(i),role:"gridcell",tabIndex:m,label:C};return t(yo,Object.assign({},k,(()=>{const t={};return w||F?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":K().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return F&&B(r,"hover",t===x,t===D),w&&B(r,"selected-outline",t===p,t===v),w&&F&&(B(r,"selected-hover-outline",$,E),t===x&&t!==p&&(r.circleLeft="selected-hover")),r})()))},Do=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,numberOfDays:b,setCalendarDate:h})=>{const f=i(null);u((()=>{if(f.current){const e=f.current;f.current=null,F(e)}}),[r]);const p=m((()=>a&&K(a).isSame(r,"month")?K(a):K().isSame(r,"month")?K():d&&r.isSame(K(d),"month")?K(d):K(r).startOf("month")),[a,r,d]),v=e=>{const t=K(e);if(Ka.isWithinRange(t,d?K(d):void 0,c?K(c):void 0)){if(!t.isSame(r,"month"))return null==h||h(e),void(f.current=e);F(e)}},x=y((()=>Ka.generateDays(r)),[r]),D=y((()=>p()),[p]),[w,F]=o(""),[$,E]=o(""),C=(e,r)=>{r&&!g||(s(e),e&&!K(e).isSame(e,"month")&&E(""))},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},k=()=>{E(""),l("")};return e(to,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(no,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),x.map(((e,i)=>t(ao,{role:"row",onMouseLeave:k,children:e.map(((e,i)=>t(xo,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:b,onFocus:B,setFocusCell:v,tabIndex:K(e).isSame(D,"day")?0:-1},`day-${i}`)))},i)))]})},wo=D.div`
    width: 100%;
    background: ${yn.bg};
`,Fo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Ka.isDisabledDay(e,l,o,s),y=!f||d,p=()=>{u(e,!y)},v={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:p,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&p());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:K(i),tabIndex:m};return t(yo,Object.assign({},v,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":K().isSame(e,"day")&&!f&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};K.extend(Ha);const $o=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,showActiveMonthDaysOnly:b,setCalendarDate:h})=>{const f=i(null);u((()=>{if(f.current){const e=f.current;f.current=null,F(e)}}),[r]);const p=m((()=>a&&K(a).isSame(r,"month")?K(a):K().isSame(r,"month")?K():d&&r.isSame(K(d),"month")?K(d):K(r).startOf("month")),[a,r,d]),v=e=>{const t=K(e);if(Ka.isWithinRange(t,d?K(d):void 0,c?K(c):void 0)){if(!t.isSame(r,"month"))return null==h||h(e),void(f.current=e);F(e)}},x=y((()=>Ka.generateDays(r)),[r]),D=y((()=>p()),[p]),[w,F]=o(""),[$,E]=o(""),C=(e,r)=>{r&&!g||s(e)},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},k=()=>{E(""),l("")};return e(to,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(no,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),x.map(((e,i)=>t(ao,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:k,children:e.map(((e,i)=>t(Fo,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,showActiveMonthDaysOnly:b,onSelect:C,onHover:S,onFocus:B,setFocusCell:v,tabIndex:K(e).isSame(D,"day")?0:-1},`day-${i}`)))},i)))]})},Eo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:g,setFocusCell:b,tabIndex:h})=>{const m=Ka.isDisabledDay(e,l,o,s),f=!m||d,{start:y,end:p}=Ka.getWeekStartEnd(ri.toDayjs(n)),{start:v,end:x}=Ka.getWeekStartEnd(ri.toDayjs(a)),{start:D,end:w}=Ka.getWeekStartEnd(e),F=e.isSame(D,"day"),$=n&&e.isBetween(y,p,"day","[]"),E=a&&e.isBetween(v,x,"day","[]"),C=$&&e.isSame(y)||E&&e.isSame(v),S=$&&e.isSame(p)||E&&e.isSame(x),B=`From ${K(D).format("D MMMM")} to ${K(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,k=()=>{c(e,!f)},A={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:k,onHover:()=>{u(e.format("YYYY-MM-DD"),!f)},onFocus:()=>{g(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(f&&k());(r=>{let t;const n={ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),b(t.format("YYYY-MM-DD")))})(r)},focusDate:K(i),tabIndex:h,label:B,ariaHidden:!F||void 0,role:F?"button":"none"};return t(yo,Object.assign({},A,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":K().isSame(e,"day")&&!m&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return $&&E?(r="selected-hover-outline",t="selected-hover"):$?(r="selected-outline",t="selected"):E&&(r="hover",t="hover"),r&&(e.labelType=t,C?e.circleLeft=r:e.bgLeft=r,S?e.circleRight=r:e.bgRight=r),e})()))},Co=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,setCalendarDate:b})=>{const h=i(null);u((()=>{if(h.current){const e=h.current;h.current=null,w(e)}}),[r]);const f=m((()=>a&&K(a).isSame(r,"month")?K(a):K().isSame(r,"month")?K().startOf("week"):d&&r.isSame(K(d),"month")?K(d):K(r).startOf("month")),[a,r,d]),p=e=>{const t=K(e);if(Ka.isWithinRange(t,d?K(d):void 0,c?K(c):void 0)){if(!t.isSame(r,"month"))return null==b||b(e),void(h.current=e);w(e)}},v=y((()=>Ka.generateDays(r)),[r]),x=y((()=>f()),[f]),[D,w]=o(""),[F,$]=o(""),E=(e,r)=>{if(r&&!g)return;const t=e.startOf("week");s(t),e&&!K(e).isSame(t,"month")&&$("")},C=(e,r)=>{r&&!g||($(e),l(e))},S=e=>{$(e),l(e)},B=()=>{$(""),l("")};return e(to,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),$(""),l(""))},"aria-label":"Week selection",children:[v[0].map(((e,r)=>t(no,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),v.map(((e,i)=>t(ao,{onMouseLeave:B,role:"group",children:e.map(((e,i)=>t(Eo,{date:e,calendarDate:r,selectedDate:a,hoverDate:F,focusDate:D,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:E,onHover:C,onFocus:S,setFocusCell:p,tabIndex:K(e).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},So=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:h,selectWithinRange:m=!0,initialCalendarDate:f,numberOfDays:y,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const w=i(null),F=i(void 0),$=i(null);p(D,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)},contains(e){var r;return(null===(r=$.current)||void 0===r?void 0:r.contains(e))||!1}})));const E=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),S(t)},C=e=>{B(e)},S=e=>{n&&n(e)},B=e=>{a&&a(e)},k=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(wo,{ref:$,children:t(ro,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:m,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=w.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),k(e)),F.current=e},initialCalendarDate:f,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const a=null===(n=w.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return t(Co,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,setCalendarDate:a});case"fixed-range":return t(Do,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,numberOfDays:y,setCalendarDate:a});case"single":return t($o,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a});default:return t(vo,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:m,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a})}})(r)})})})),Bo=a.forwardRef(((e,r)=>{const{elementWidth:n,setFloatingRef:a,getFloatingProps:i,styles:o}=h(ja);return t(Ta,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:a,style:o},i(),{children:t(So,Object.assign({ref:r},e))}))})),ko=D.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return w`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${pn.Spec["body-size-baseline"]} -
                            ${Dn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Dn["spacing-8"]};
                }
            `}}
`,Ao=D.div`
    width: 100%; // Force next flex item to break to next line
`,Oo=D.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Mo=D(W)`
    color: ${yn.icon};
    width: ${pn.Spec["body-size-baseline"]};
    height: ${pn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Dn["spacing-8"]};
    align-self: center;
`,Yo=D.div`
    position: absolute;
    background: ${e=>e.$error?yn["border-error-focus-strong"]:yn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Dn["spacing-8"]} - (${pn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${vn["duration-350"]} ${vn["ease-standard"]},
        opacity ${vn["duration-350"]} ${vn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return w`
                    opacity: 1;
                `;case"end":return w`
                    left: calc(50% + ${Dn["spacing-16"]});
                    opacity: 1;
                `;case"none":return w`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return w`
                display: none;
            `}}
`,zo=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(ko,{className:i,$wrap:o,children:[t(Oo,{"data-id":"range-container-elem1-container",children:s}),t(Mo,{}),o&&t(Ao,{}),t(Oo,{"data-id":"range-container-elem2-container",children:l}),t(Yo,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]})},jo=w`
    outline-offset: -1px;
    outline: ${xn["width-020"]} ${xn.solid} ${yn["border-focus"]};
`,Ro=w`
    outline-color: ${yn["border-focus"]};
`,To=w`
    outline-color: ${yn["border-disabled"]};
`,_o=w`
    outline-color: ${yn["border-error-focus"]};
`,Io=D(D.div`
    border: ${xn["width-010"]} ${xn.solid} ${yn.border};
    border-radius: ${wn.sm};
    background: ${yn.bg};

    &:focus-within {
        ${jo}
    }
    ${e=>e.$focused&&jo}

    ${e=>e.$readOnly?w`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Ro}
                }
                ${e.$focused&&Ro}
            `:e.$disabled?w`
                background: ${yn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${To}
                }
                ${e.$focused&&To}
            `:e.$error?w`
                border-color: ${yn["border-error"]};

                &:focus-within {
                    ${_o}
                }
                ${e.$focused&&_o}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Dn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Lo=D.input`
    ${e=>"small"===e.$variant?pn["body-md-regular"]:pn["body-baseline-regular"]}
    color: ${yn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${yn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${yn["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;D.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${xn["width-010"]} ${xn.solid}
            ${yn["border-focus"]};
        border-radius: ${wn.sm};
    }
`;const Ho=D.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Wo=D.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return w`
                ${Po}, ${Ko} {
                    color: ${yn["text-subtler"]};
                }
            `}}
`,Po=D(Lo)`
    background: transparent;
    text-align: center;
`,No=D(Po)`
    width: 2rem;
    margin-right: ${Dn["spacing-4"]};
`,Vo=D(Po)`
    width: 2.5rem;
`,Uo=D(Po)`
    width: 3rem;
    margin-left: ${Dn["spacing-4"]};
`,Ko=D.span`
    ${pn["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return w`
                color: ${yn.text};
            `}}
`,Zo=D.div`
    ${pn["body-baseline-regular"]}
    background-color: ${yn.bg};
    color: ${yn["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?w`
                background-color: ${yn["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?w`
                display: none;
            `:void 0}
`;K.extend(Ia);const Jo=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:b,onFocus:h,onBlur:m,hideInputKeyboard:f,inputLabels:y=["Date","Month","Year"]},v)=>{const x=f?"none":"numeric",[D,w,F]=ii(""),[$,E,C]=ii(""),[S,B,k]=ii(""),[A,O]=o("none"),[M,Y]=o(!1),z=i(null),j=i(null),R=i(null),T=i(null),[_,I,L]=U(d);u((()=>{var e;const[r="",t="",n=""]=U(s);w(r),E(t),B(n),r||t||n||!z.current||!z.current.contains(document.activeElement)||null===(e=j.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||O("none"),l&&(Y(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))}),[l]),p(v,(()=>({ref:z,resetPlaceholder(){Y(!1)},resetInput(){const[e="",r="",t=""]=U(s);w(e),E(r),B(t)},focusYearRef(){var e;null===(e=T.current)||void 0===e||e.focus()}})),[w,E,B,s]);const H=e=>{var r;e.preventDefault(),null===(r=j.current)||void 0===r||r.focus()},W=e=>{e.target.select();const r=e.target.name;O(r)},P=e=>{const[r,t,n]=a,i={[r]:F.current,[t]:C.current,[n]:k.current},o=e.target.name,s=i[o],l=o!==n?ai.padValue(s,!0):s;switch(o){case r:i[r]=l,w(l);break;case t:i[t]=l,E(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=K(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),z.current&&!z.current.contains(e.relatedTarget)&&(O("none"),null==m||m(u||c))},N=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:D,month:$,year:S};switch(n){case a[0]:o.day=i,w(i),2===i.length&&(null===(r=R.current)||void 0===r||r.focus());break;case a[1]:o.month=i,E(i),2===i.length&&(null===(t=T.current)||void 0===t||t.focus());break;case a[2]:o.year=i,B(i)}if(!o.day&&!o.month&&!o.year)return void b("");const s=`${o.year}-${o.month}-${o.day}`;K(s,"YYYY-MM-DD",!0).isValid()&&b(s)},V=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(A===a[1]&&0===$.length&&(null===(r=j.current)||void 0===r||r.focus()),A===a[2]&&0===S.length&&(null===(t=R.current)||void 0===t||t.focus()))};function U(e){if(e){const r=K(new Date(e));return r.isValid()?[ai.padValue(r.date().toString()),ai.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Ho,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(Y(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))},onFocus:e=>{r||(Y(!0),l||null==h||h(e))},children:[e(Wo,{ref:z,$hover:!!d,children:[t(No,{ref:j,name:a[0],maxLength:2,value:null!=_?_:D,onFocus:W,onBlur:P,onChange:N,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":y[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[0]||n?"DD":""}),t(Ko,{$inactive:0===D.length,children:"/"}),t(Vo,{ref:R,name:a[1],maxLength:2,value:null!=I?I:$,onFocus:W,onBlur:P,onChange:N,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":y[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[1]||n?"MM":""}),t(Ko,{$inactive:0===$.length,children:"/"}),t(Uo,{ref:T,name:a[2],maxLength:4,value:null!=L?L:S,onFocus:W,onBlur:P,onChange:N,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":y[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(Zo,{$hide:M,$disabled:r,onMouseDown:H,children:c})})()]})})),qo=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},Xo=D(Io)`
    ${e=>e.$wrap&&w`
            padding: ${Dn["spacing-12"]} ${Dn["spacing-16"]};
        `}
`,Go=D.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&w`
            height: fit-content;
        `}
`,Qo={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},es=r=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:g,valueEnd:b,onChange:h,onFocus:f,onBlur:y,onYearMonthDisplayChange:p,withButton:x=!0,variant:D="range",numberOfDays:w=7,readOnly:F,id:$,allowDisabledSelection:E,zIndex:C,dropdownRootNode:S}=r,B=P(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[k,A]=o(),[O,M]=o(void 0),Y="week"===D,z="fixed-range"===D,[j,R]=o(!1),[T,_]=o(!1),[{selectedStart:I,selectedEnd:L,currentFocus:H,calendarOpen:W,isStartDirty:N,isEndDirty:V,focused:U},Z]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=v(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&qo(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:Qo,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:Y?"none":z?"start":r,calendarOpen:!F,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),J=i(!1),q=i(null),X=i(null),G=i(null),Q=i(null),ee=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return Ya({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:m((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:q});u((()=>{Z.resetRange({start:ti.sanitizeInput(g),end:ti.sanitizeInput(b)})}),[g,b]),u((()=>{"start"===H?A(I):"end"===H&&L&&A(L)}),[H]);const re=e=>{var r,t,n;"Enter"!==e.code||x||(I&&L?(Z.done({start:I,end:L}),null==h||h(I,L)):(Z.dismiss(),null===(r=q.current)||void 0===r||r.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},te=e=>{var r;if(fe(e))return void(J.current=!0);if(Z.changeStart(e),e&&(null===(r=X.current)||void 0===r||r.setCalendarDate(e)),J.current=!1,!e)return void(x||L||!V||(Z.resetRange({start:"",end:""}),null==h||h("","")));if(!L)return void Z.focus("end");if(K(e).isAfter(L,"day"))Z.reselectEnd();else{if(V)return x?void 0:(Z.done({start:e,end:L}),void(null==h||h(e,L)));Z.focus("end")}},ne=e=>{var r,t,n;if(fe(e))return void(J.current=!0);if(K(e).isBefore(I,"day"))return Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),void Z.reselectEnd();if(Z.changeEnd(e),e&&(null===(t=X.current)||void 0===t||t.setCalendarDate(e)),e){if(I)return x?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),Z.done({start:I,end:e}),void(null==h||h(I,e)));Z.focus("start")}else x||I||!N||(Z.resetRange({start:"",end:""}),null==h||h("",""))},ae=e=>{var r,t;if(fe(e))return void(J.current=!0);if(Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),J.current=!1,!e)return void(x?Z.changeEnd(""):(Z.resetRange({start:"",end:""}),null==h||h("","")));const n=K(e).format("YYYY-MM-DD"),a=K(n).add(w-1,"day").format("YYYY-MM-DD");return Z.changeStart(n),Z.changeEnd(a),J.current=!1,x?void 0:(Z.done({start:n,end:a}),null===(t=G.current)||void 0===t||t.focusYearRef(),void(null==h||h(n,a)))},ie=()=>{(Y||z)&&_(!0),Y&&R(!0),F||s||U||(Z.focus("start"),null==f||f())},oe=e=>{var r,t,n,a;const i=e.relatedTarget,o=X.current&&X.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focusable]"))||(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focus-guard]"));(U&&!W&&!s&&!l||W&&!s&&!o&&!l)&&(Z.blur(),_(!1),R(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(a=Q.current)||void 0===a||a.resetPlaceholder(),me())},se=e=>r=>{r.stopPropagation(),F||(Z.focus(e),le(),de(),U||null==f||f())},le=()=>{if(Y){const e=ri.toDayjs(I).startOf("week").format("YYYY-MM-DD");R(!0),_(!0),A(e)}},de=()=>{z&&(_(!0),A(I))},ce=e=>{var r;e&&!J.current||(Z.resetStart(),null===(r=G.current)||void 0===r||r.resetInput())},ue=e=>{var r;e&&!J.current||(Z.resetEnd(),null===(r=Q.current)||void 0===r||r.resetInput())},ge=e=>{switch(D){case"week":(e=>{var r;const t=K(e).startOf("week").format("YYYY-MM-DD"),n=K(e).endOf("week").format("YYYY-MM-DD");if(Z.changeStart(t),Z.changeEnd(n),J.current=!1,!x)null===(r=Q.current)||void 0===r||r.focusYearRef(),Z.done({start:t,end:n}),null==h||h(t,n)})(e);break;case"fixed-range":ae(e);break;default:"start"===H?te(e):"end"===H&&ne(e)}},be=e=>{var r,t,n;switch(null===(r=q.current)||void 0===r||r.focus(),e){case"reset":Z.cancel();break;case"confirmed":if(Z.done({start:I,end:L}),null==h||h(I,L),Y)break;ye(I,L)&&("range"===D?null===(t=Q.current)||void 0===t||t.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{M(e)},me=()=>{y&&y()},fe=e=>!E&&e&&ti.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),ye=(e,r)=>!(!e||!r)&&K(e).isBefore(r,"day"),pe=e=>{let r={start:void 0,end:void 0};switch(D){case"range":r={start:"start"===H?O:void 0,end:"end"===H?O:void 0};break;case"week":if(!O)return;r={start:K(O).startOf("week").format("YYYY-MM-DD"),end:K(O).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!O)return;r={start:K(O).format("YYYY-MM-DD"),end:K(O).add(w-1,"day").format("YYYY-MM-DD")}}return r[e]};return t(Ra,{enabled:!F&&!s,isOpen:W,onClose:()=>{var e,r;Z.blur(),R(!1),_(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),me()},onDismiss:()=>{var e,r,t;Z.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder()},renderElement:()=>t(Xo,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ie,onBlur:oe,$focused:U,$disabled:s,$readOnly:F,$error:d,$wrap:ee,id:$,"data-testid":B["data-testid"],"aria-disabled":s,onKeyDown:re},B,{children:e(zo,{currentActive:H,wrap:ee,error:d,children:[t(Go,{$wrap:ee,children:t(Jo,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:I,disabled:s,readOnly:j||F,focused:"start"===H,hoverValue:pe("start"),onChange:z?ae:te,onFocus:se("start"),onBlur:ce,hideInputKeyboard:c})}),t(Go,{$wrap:ee,children:t(Jo,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:L,disabled:s,readOnly:T||F,focused:"end"===H,hoverValue:pe("end"),onChange:ne,onFocus:se("end"),onBlur:ue,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:e})=>t(Bo,{ref:X,variant:D,initialCalendarDate:k,withButton:x,value:I,endValue:L,selectWithinRange:N||V,currentFocus:H,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:E,onSelect:ge,onDismiss:be,onHover:he,onYearMonthDisplayChange:p,numberOfDays:w,width:e,isFocusable:!F&&!s}),customZIndex:C,offset:16,rootNode:S})};export{es as DateRangeInput};
//# sourceMappingURL=index.js.map
