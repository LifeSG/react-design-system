import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,createContext as b,useContext as h,version as m,useCallback as f,useMemo as y,useImperativeHandle as p,useReducer as v}from"react";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import D,{css as F,keyframes as w,ThemeContext as $}from"styled-components";import{useFloatingTree as E,useFloating as C,autoUpdate as S,offset as B,flip as A,shift as k,limitShift as O,size as M,useTransitionStyles as z,useClick as Y,useDismiss as j,useInteractions as R,FloatingPortal as T,FloatingFocusManager as _}from"@floating-ui/react";import{findDOMNode as I}from"react-dom";import{ChevronLeftIcon as L}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as H}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as W}from"@lifesg/react-icons";function P(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U={exports:{}};U.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",F=function(e){return e instanceof C||!(!e||!e[D])},w=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=w,E.i=F,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,b){var h,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=w(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=w,$.isDayjs=F,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var K=V(U.exports),Z=Array.isArray,J="object"==typeof N&&N&&N.Object===Object&&N,q="object"==typeof self&&self&&self.Object===Object&&self,X=J||q||Function("return this")(),G=X.Symbol,Q=G,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=Q?Q.toStringTag:void 0;var ae=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var a=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),a},ie=Object.prototype.toString;var oe=ae,se=function(e){return ie.call(e)},le=G?G.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?oe(e):se(e)};var ce=de,ue=function(e){return null!=e&&"object"==typeof e};var ge=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},be=Z,he=ge,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ye=function(e,r){if(be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!he(e))||(fe.test(e)||!me.test(e)||null!=r&&e in Object(r))};var pe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=de,xe=pe;var De,Fe=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},we=X["__core-js_shared__"],$e=(De=/[^.]+$/.exec(we&&we.keys&&we.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Ee=function(e){return!!$e&&$e in e},Ce=Function.prototype.toString;var Se=Fe,Be=Ee,Ae=pe,ke=function(e){if(null!=e){try{return Ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=/^\[object .+?Constructor\]$/,Me=Function.prototype,ze=Object.prototype,Ye=Me.toString,je=ze.hasOwnProperty,Re=RegExp("^"+Ye.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Te=function(e,r){return null==e?void 0:e[r]},_e=function(e){return!(!Ae(e)||Be(e))&&(Se(e)?Re:Oe).test(ke(e))},Ie=Te;var Le=function(e,r){var t=Ie(e,r);return _e(t)?t:void 0},He=Le(Object,"create"),We=He;var Pe=function(){this.__data__=We?We(null):{},this.size=0};var Ne=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ve=He,Ue=Object.prototype.hasOwnProperty;var Ke=function(e){var r=this.__data__;if(Ve){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ue.call(r,e)?r[e]:void 0},Ze=He,Je=Object.prototype.hasOwnProperty;var qe=function(e){var r=this.__data__;return Ze?void 0!==r[e]:Je.call(r,e)},Xe=He;var Ge=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Xe&&void 0===r?"__lodash_hash_undefined__":r,this},Qe=Pe,er=Ne,rr=Ke,tr=qe,nr=Ge;function ar(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ar.prototype.clear=Qe,ar.prototype.delete=er,ar.prototype.get=rr,ar.prototype.has=tr,ar.prototype.set=nr;var ir=ar;var or=function(){this.__data__=[],this.size=0};var sr=function(e,r){return e===r||e!=e&&r!=r};var lr=function(e,r){for(var t=e.length;t--;)if(sr(e[t][0],r))return t;return-1},dr=lr,cr=Array.prototype.splice;var ur=function(e){var r=this.__data__,t=dr(r,e);return!(t<0)&&(t==r.length-1?r.pop():cr.call(r,t,1),--this.size,!0)},gr=lr;var br=function(e){var r=this.__data__,t=gr(r,e);return t<0?void 0:r[t][1]},hr=lr;var mr=function(e){return hr(this.__data__,e)>-1},fr=lr;var yr=function(e,r){var t=this.__data__,n=fr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},pr=or,vr=ur,xr=br,Dr=mr,Fr=yr;function wr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}wr.prototype.clear=pr,wr.prototype.delete=vr,wr.prototype.get=xr,wr.prototype.has=Dr,wr.prototype.set=Fr;var $r=wr,Er=Le(X,"Map"),Cr=ir,Sr=$r,Br=Er;var Ar=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var kr=function(e,r){var t=e.__data__;return Ar(r)?t["string"==typeof r?"string":"hash"]:t.map},Or=kr;var Mr=function(e){var r=Or(this,e).delete(e);return this.size-=r?1:0,r},zr=kr;var Yr=function(e){return zr(this,e).get(e)},jr=kr;var Rr=function(e){return jr(this,e).has(e)},Tr=kr;var _r=function(e,r){var t=Tr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Ir=function(){this.size=0,this.__data__={hash:new Cr,map:new(Br||Sr),string:new Cr}},Lr=Mr,Hr=Yr,Wr=Rr,Pr=_r;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Ir,Nr.prototype.delete=Lr,Nr.prototype.get=Hr,Nr.prototype.has=Wr,Nr.prototype.set=Pr;var Vr=Nr;function Ur(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ur.Cache||Vr),t}Ur.Cache=Vr;var Kr=Ur;var Zr=function(e){var r=Kr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,Xr=Zr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Jr,(function(e,t,n,a){r.push(n?a.replace(qr,"$1"):t||e)})),r}));var Gr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Qr=Z,et=ge,rt=G?G.prototype:void 0,tt=rt?rt.toString:void 0;var nt=function e(r){if("string"==typeof r)return r;if(Qr(r))return Gr(r,e)+"";if(et(r))return tt?tt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},at=nt;var it=Z,ot=ye,st=Xr,lt=function(e){return null==e?"":at(e)};var dt=ge;var ct=function(e,r){return it(e)?e:ot(e,r)?[e]:st(lt(e))},ut=function(e){if("string"==typeof e||dt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var gt=function(e,r){for(var t=0,n=(r=ct(r,e)).length;null!=e&&t<n;)e=e[ut(r[t++])];return t&&t==n?e:void 0};var bt=V((function(e,r,t){var n=null==e?void 0:gt(e,r);return void 0===n?t:n}));const ht=(e,r,t)=>bt(t,r)||bt(e,r),mt=(e,r)=>{const t=r||e.defaultValue;return bt(e.collections,t)},ft={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},yt=e=>r=>{var t;const n=r.theme,a=mt(ft,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ht(a,e,n.overrides.border)}px`:`${a[e]}px`},pt={"width-005":yt("width-005"),"width-010":yt("width-010"),"width-020":yt("width-020"),"width-040":yt("width-040"),solid:(vt="solid",e=>{var r;const t=e.theme,n=mt(ft,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ht(n,vt,t.overrides.border):n[vt];return"function"==typeof a?a(e):a})};var vt;const xt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ct={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},St={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},At={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kt={collections:{lifesg:Ft,bookingsg:xt,rbs:Ct,mylegacy:wt,ccube:Dt,oneservice:$t,pa:Et,a11yplayground:St,supportgowhere:Bt,imda:At},defaultValue:"lifesg"},Ot={collections:{lifesg:Ft,bookingsg:xt,rbs:Ct,mylegacy:wt,ccube:Dt,oneservice:$t,pa:Et,a11yplayground:St,supportgowhere:Bt,imda:At},defaultValue:"lifesg"},Mt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=mt(a?Ot:kt,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?ht(i,e,s):i[e]},zt={"brand-10":Mt("brand-10"),"brand-20":Mt("brand-20"),"brand-30":Mt("brand-30"),"brand-40":Mt("brand-40"),"brand-50":Mt("brand-50"),"brand-60":Mt("brand-60"),"brand-70":Mt("brand-70"),"brand-80":Mt("brand-80"),"brand-90":Mt("brand-90"),"brand-95":Mt("brand-95"),"brand-100":Mt("brand-100"),"primary-10":Mt("primary-10"),"primary-20":Mt("primary-20"),"primary-30":Mt("primary-30"),"primary-40":Mt("primary-40"),"primary-50":Mt("primary-50"),"primary-60":Mt("primary-60"),"primary-70":Mt("primary-70"),"primary-80":Mt("primary-80"),"primary-90":Mt("primary-90"),"primary-95":Mt("primary-95"),"primary-100":Mt("primary-100"),"secondary-10":Mt("secondary-10"),"secondary-20":Mt("secondary-20"),"secondary-30":Mt("secondary-30"),"secondary-40":Mt("secondary-40"),"secondary-50":Mt("secondary-50"),"secondary-60":Mt("secondary-60"),"secondary-70":Mt("secondary-70"),"secondary-80":Mt("secondary-80"),"secondary-90":Mt("secondary-90"),"secondary-95":Mt("secondary-95"),"secondary-100":Mt("secondary-100"),"neutral-10":Mt("neutral-10"),"neutral-20":Mt("neutral-20"),"neutral-30":Mt("neutral-30"),"neutral-40":Mt("neutral-40"),"neutral-50":Mt("neutral-50"),"neutral-60":Mt("neutral-60"),"neutral-70":Mt("neutral-70"),"neutral-80":Mt("neutral-80"),"neutral-90":Mt("neutral-90"),"neutral-95":Mt("neutral-95"),"neutral-100":Mt("neutral-100"),"success-10":Mt("success-10"),"success-20":Mt("success-20"),"success-30":Mt("success-30"),"success-40":Mt("success-40"),"success-50":Mt("success-50"),"success-60":Mt("success-60"),"success-70":Mt("success-70"),"success-80":Mt("success-80"),"success-90":Mt("success-90"),"success-95":Mt("success-95"),"success-100":Mt("success-100"),"warning-10":Mt("warning-10"),"warning-20":Mt("warning-20"),"warning-30":Mt("warning-30"),"warning-40":Mt("warning-40"),"warning-50":Mt("warning-50"),"warning-60":Mt("warning-60"),"warning-70":Mt("warning-70"),"warning-80":Mt("warning-80"),"warning-90":Mt("warning-90"),"warning-95":Mt("warning-95"),"warning-100":Mt("warning-100"),"error-10":Mt("error-10"),"error-20":Mt("error-20"),"error-30":Mt("error-30"),"error-40":Mt("error-40"),"error-50":Mt("error-50"),"error-60":Mt("error-60"),"error-70":Mt("error-70"),"error-80":Mt("error-80"),"error-90":Mt("error-90"),"error-95":Mt("error-95"),"error-100":Mt("error-100"),"info-10":Mt("info-10"),"info-20":Mt("info-20"),"info-30":Mt("info-30"),"info-40":Mt("info-40"),"info-50":Mt("info-50"),"info-60":Mt("info-60"),"info-70":Mt("info-70"),"info-80":Mt("info-80"),"info-90":Mt("info-90"),"info-95":Mt("info-95"),"info-100":Mt("info-100"),white:Mt("white"),black:Mt("black"),"primary-inverse":Mt("primary-inverse")},Yt={text:Mt("neutral-20"),"text-subtle":Mt("neutral-30"),"text-subtler":Mt("neutral-50"),"text-subtlest":Mt("neutral-60"),"text-primary":Mt("primary-50"),"text-hover":Mt("primary-40"),"text-selected":Mt("primary-50"),"text-selected-hover":Mt("primary-40"),"text-disabled":Mt("neutral-50"),"text-disabled-subtle":Mt("neutral-60"),"text-disabled-subtlest":Mt("neutral-80"),"text-selected-disabled":Mt("neutral-20"),"text-success":Mt("success-40"),"text-warning":Mt("warning-40"),"text-error":Mt("error-40"),"text-info":Mt("info-40"),"text-inverse":Mt("white"),icon:Mt("neutral-50"),"icon-subtle":Mt("neutral-60"),"icon-strongest":Mt("neutral-20"),"icon-primary":Mt("primary-50"),"icon-primary-subtle":Mt("primary-60"),"icon-primary-subtlest":Mt("primary-70"),"icon-hover":Mt("primary-40"),"icon-selected":Mt("primary-50"),"icon-selected-hover":Mt("primary-40"),"icon-disabled":Mt("neutral-50"),"icon-disabled-subtle":Mt("neutral-60"),"icon-selected-disabled":Mt("neutral-60"),"icon-success":Mt("success-50"),"icon-warning":Mt("warning-60"),"icon-error":Mt("error-50"),"icon-error-strong":Mt("error-40"),"icon-info":Mt("info-50"),"icon-inverse":Mt("white"),"icon-primary-inverse":Mt("primary-inverse"),border:Mt("neutral-90"),"border-strong":Mt("neutral-70"),"border-stronger":Mt("neutral-50"),"border-primary":Mt("primary-50"),"border-primary-subtle":Mt("primary-60"),"border-hover":Mt("primary-90"),"border-hover-strong":Mt("primary-60"),"border-selected":Mt("primary-50"),"border-selected-subtle":Mt("primary-70"),"border-selected-subtlest":Mt("primary-90"),"border-selected-hover":Mt("primary-40"),"border-focus":Mt("primary-60"),"border-focus-strong":Mt("primary-50"),"border-disabled":Mt("neutral-90"),"border-selected-disabled":Mt("neutral-70"),"border-success":Mt("success-60"),"border-warning":Mt("warning-60"),"border-error":Mt("error-60"),"border-error-focus":Mt("error-60"),"border-error-focus-strong":Mt("error-40"),"border-error-strong":Mt("error-40"),"border-info":Mt("info-60"),bg:Mt("white"),"bg-strong":Mt("neutral-100"),"bg-stronger":Mt("neutral-95"),"bg-strongest":Mt("neutral-90"),"bg-hover":Mt("primary-95"),"bg-hover-strong":Mt("primary-90"),"bg-hover-subtle":Mt("primary-100"),"bg-hover-neutral":Mt("neutral-100"),"bg-hover-neutral-strong":Mt("neutral-90"),"bg-selected":Mt("primary-95"),"bg-selected-hover":Mt("primary-90"),"bg-selected-strong":Mt("primary-90"),"bg-selected-stronger":Mt("primary-70"),"bg-selected-strongest":Mt("primary-50"),"bg-selected-strongest-hover":Mt("primary-40"),"bg-disabled":Mt("neutral-95"),"bg-selected-disabled":Mt("neutral-95"),"bg-selected-stronger-disabled":Mt("neutral-70"),"bg-success":Mt("success-100"),"bg-success-hover":Mt("success-95"),"bg-success-strong":Mt("success-50"),"bg-success-strong-hover":Mt("success-40"),"bg-warning":Mt("warning-100"),"bg-warning-hover":Mt("warning-95"),"bg-warning-strong":Mt("warning-50"),"bg-warning-strong-hover":Mt("warning-40"),"bg-info":Mt("info-100"),"bg-info-hover":Mt("info-95"),"bg-info-strong":Mt("info-50"),"bg-info-strong-hover":Mt("info-40"),"bg-error":Mt("error-100"),"bg-error-hover":Mt("error-95"),"bg-error-strong":Mt("error-50"),"bg-error-strong-hover":Mt("error-40"),"bg-inverse":Mt("neutral-20"),"bg-inverse-subtle":Mt("neutral-30"),"bg-inverse-subtler":Mt("neutral-50"),"bg-inverse-subtlest":Mt("neutral-60"),"bg-inverse-hover":Mt("neutral-40"),"bg-primary":Mt("primary-50"),"bg-primary-subtle":Mt("primary-60"),"bg-primary-subtler":Mt("primary-95"),"bg-primary-subtlest":Mt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Mt("primary-40"),"bg-primary-subtlest-hover":Mt("primary-90"),"bg-primary-subtlest-selected":Mt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Mt("primary-50"),"hyperlink-hover":Mt("primary-40"),"hyperlink-visited":Mt("primary-40"),"hyperlink-inverse":Mt("primary-inverse"),"focus-ring":Mt("primary-50"),"focus-ring-inverse":Mt("white")},jt={text:Mt("neutral-100"),"text-subtle":Mt("neutral-80"),"text-subtler":Mt("neutral-60"),"text-subtlest":Mt("neutral-50"),"text-primary":Mt("primary-60"),"text-hover":Mt("primary-70"),"text-selected":Mt("primary-60"),"text-selected-hover":Mt("primary-70"),"text-disabled":Mt("neutral-60"),"text-disabled-subtle":Mt("neutral-50"),"text-disabled-subtlest":Mt("neutral-30"),"text-selected-disabled":Mt("neutral-90"),"text-success":Mt("success-70"),"text-warning":Mt("warning-70"),"text-error":Mt("error-70"),"text-info":Mt("info-70"),"text-inverse":Mt("black"),icon:Mt("neutral-60"),"icon-subtle":Mt("neutral-50"),"icon-strongest":Mt("neutral-90"),"icon-primary":Mt("primary-60"),"icon-primary-subtle":Mt("primary-50"),"icon-primary-subtlest":Mt("primary-40"),"icon-hover":Mt("primary-70"),"icon-selected":Mt("primary-60"),"icon-selected-hover":Mt("primary-70"),"icon-disabled":Mt("neutral-60"),"icon-disabled-subtle":Mt("neutral-50"),"icon-selected-disabled":Mt("neutral-50"),"icon-success":Mt("success-60"),"icon-warning":Mt("warning-50"),"icon-error":Mt("error-60"),"icon-error-strong":Mt("error-70"),"icon-info":Mt("info-60"),"icon-inverse":Mt("black"),"icon-primary-inverse":Mt("primary-inverse"),border:Mt("neutral-20"),"border-strong":Mt("neutral-40"),"border-stronger":Mt("neutral-60"),"border-primary":Mt("primary-60"),"border-primary-subtle":Mt("primary-50"),"border-hover":Mt("primary-20"),"border-hover-strong":Mt("primary-50"),"border-selected":Mt("primary-60"),"border-selected-subtle":Mt("primary-40"),"border-selected-subtlest":Mt("primary-20"),"border-selected-hover":Mt("primary-70"),"border-focus":Mt("primary-50"),"border-focus-strong":Mt("primary-60"),"border-disabled":Mt("neutral-20"),"border-selected-disabled":Mt("neutral-40"),"border-success":Mt("success-50"),"border-warning":Mt("warning-50"),"border-error":Mt("error-50"),"border-error-focus":Mt("error-50"),"border-error-focus-strong":Mt("error-70"),"border-error-strong":Mt("error-70"),"border-info":Mt("info-50"),bg:Mt("black"),"bg-strong":Mt("neutral-10"),"bg-stronger":Mt("neutral-20"),"bg-strongest":Mt("neutral-20"),"bg-hover":Mt("primary-20"),"bg-hover-strong":Mt("primary-20"),"bg-hover-subtle":Mt("primary-10"),"bg-hover-neutral":Mt("neutral-10"),"bg-hover-neutral-strong":Mt("neutral-20"),"bg-selected":Mt("primary-20"),"bg-selected-hover":Mt("primary-20"),"bg-selected-strong":Mt("primary-20"),"bg-selected-stronger":Mt("primary-40"),"bg-selected-strongest":Mt("primary-60"),"bg-selected-strongest-hover":Mt("primary-70"),"bg-disabled":Mt("neutral-20"),"bg-selected-disabled":Mt("neutral-20"),"bg-selected-stronger-disabled":Mt("neutral-40"),"bg-success":Mt("success-10"),"bg-success-hover":Mt("success-20"),"bg-success-strong":Mt("success-60"),"bg-success-strong-hover":Mt("success-70"),"bg-warning":Mt("warning-10"),"bg-warning-hover":Mt("warning-20"),"bg-warning-strong":Mt("warning-60"),"bg-warning-strong-hover":Mt("warning-70"),"bg-info":Mt("info-10"),"bg-info-hover":Mt("info-20"),"bg-info-strong":Mt("info-60"),"bg-info-strong-hover":Mt("info-70"),"bg-error":Mt("error-10"),"bg-error-hover":Mt("error-20"),"bg-error-strong":Mt("error-60"),"bg-error-strong-hover":Mt("error-70"),"bg-inverse":Mt("neutral-90"),"bg-inverse-subtle":Mt("neutral-80"),"bg-inverse-subtler":Mt("neutral-60"),"bg-inverse-subtlest":Mt("neutral-50"),"bg-inverse-hover":Mt("neutral-70"),"bg-primary":Mt("primary-60"),"bg-primary-subtle":Mt("primary-50"),"bg-primary-subtler":Mt("primary-20"),"bg-primary-subtlest":Mt("primary-10"),"bg-available":"#185339","bg-primary-hover":Mt("primary-70"),"bg-primary-subtlest-hover":Mt("primary-20"),"bg-primary-subtlest-selected":Mt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Mt("primary-60"),"hyperlink-hover":Mt("primary-70"),"hyperlink-visited":Mt("primary-70"),"hyperlink-inverse":Mt("primary-inverse"),"focus-ring":Mt("primary-60"),"focus-ring-inverse":Mt("black")},Rt={text:Mt("neutral-30"),"text-subtle":Mt("neutral-40"),"text-subtler":Mt("neutral-50"),"text-subtlest":Mt("neutral-70"),"text-primary":Mt("neutral-10"),"text-hover":Mt("neutral-70"),"text-selected":Mt("neutral-20"),"text-selected-hover":Mt("neutral-10"),"text-disabled":Mt("neutral-50"),"text-disabled-subtle":Mt("neutral-60"),"text-disabled-subtlest":Mt("neutral-80"),"text-selected-disabled":Mt("neutral-40"),"text-success":Mt("success-40"),"text-warning":Mt("warning-40"),"text-error":Mt("brand-30"),"text-info":Mt("neutral-40"),"text-inverse":Mt("neutral-100"),icon:Mt("neutral-40"),"icon-subtle":Mt("neutral-50"),"icon-strongest":Mt("neutral-10"),"icon-primary":Mt("neutral-10"),"icon-primary-subtle":Mt("neutral-30"),"icon-primary-subtlest":Mt("neutral-60"),"icon-hover":Mt("neutral-70"),"icon-selected":Mt("brand-20"),"icon-selected-hover":Mt("brand-10"),"icon-disabled":Mt("neutral-50"),"icon-disabled-subtle":Mt("neutral-60"),"icon-selected-disabled":Mt("neutral-40"),"icon-success":Mt("success-40"),"icon-warning":Mt("warning-60"),"icon-error":Mt("brand-30"),"icon-error-strong":Mt("brand-10"),"icon-info":Mt("neutral-40"),"icon-inverse":Mt("neutral-100"),"icon-primary-inverse":"#F9B371",border:Mt("neutral-90"),"border-strong":Mt("neutral-30"),"border-stronger":Mt("neutral-20"),"border-primary":Mt("neutral-40"),"border-primary-subtle":Mt("neutral-60"),"border-hover":Mt("neutral-80"),"border-hover-strong":Mt("neutral-10"),"border-selected":Mt("brand-20"),"border-selected-subtle":Mt("neutral-40"),"border-selected-subtlest":Mt("neutral-70"),"border-selected-hover":Mt("neutral-10"),"border-focus":Mt("neutral-20"),"border-focus-strong":Mt("neutral-10"),"border-disabled":Mt("neutral-90"),"border-selected-disabled":Mt("neutral-80"),"border-success":Mt("success-40"),"border-warning":Mt("warning-60"),"border-error":Mt("brand-30"),"border-error-focus":Mt("brand-20"),"border-error-focus-strong":Mt("brand-10"),"border-error-strong":Mt("brand-20"),"border-info":Mt("neutral-40"),bg:Mt("neutral-100"),"bg-strong":Mt("neutral-95"),"bg-stronger":Mt("neutral-90"),"bg-strongest":Mt("neutral-80"),"bg-hover":Mt("brand-90"),"bg-hover-strong":Mt("brand-80"),"bg-hover-subtle":Mt("neutral-90"),"bg-hover-neutral":Mt("neutral-90"),"bg-hover-neutral-strong":Mt("neutral-90"),"bg-selected":Mt("brand-100"),"bg-selected-hover":Mt("brand-30"),"bg-selected-strong":Mt("brand-50"),"bg-selected-stronger":Mt("brand-40"),"bg-selected-strongest":Mt("brand-20"),"bg-selected-strongest-hover":Mt("brand-10"),"bg-disabled":Mt("neutral-90"),"bg-selected-disabled":Mt("neutral-90"),"bg-selected-stronger-disabled":Mt("neutral-80"),"bg-success":Mt("success-100"),"bg-success-hover":Mt("success-95"),"bg-success-strong":Mt("success-50"),"bg-success-strong-hover":Mt("success-40"),"bg-warning":Mt("warning-100"),"bg-warning-hover":Mt("warning-95"),"bg-warning-strong":Mt("warning-50"),"bg-warning-strong-hover":Mt("warning-40"),"bg-info":Mt("neutral-95"),"bg-info-hover":Mt("info-95"),"bg-info-strong":Mt("info-50"),"bg-info-strong-hover":Mt("info-40"),"bg-error":Mt("brand-100"),"bg-error-hover":Mt("error-95"),"bg-error-strong":Mt("error-50"),"bg-error-strong-hover":Mt("error-40"),"bg-inverse":Mt("neutral-40"),"bg-inverse-subtle":Mt("neutral-60"),"bg-inverse-subtler":Mt("neutral-70"),"bg-inverse-subtlest":Mt("neutral-80"),"bg-inverse-hover":Mt("neutral-30"),"bg-primary":Mt("brand-20"),"bg-primary-subtle":Mt("brand-60"),"bg-primary-subtler":Mt("brand-80"),"bg-primary-subtlest":Mt("brand-100"),"bg-available":Mt("success-60"),"bg-primary-hover":Mt("brand-10"),"bg-primary-subtlest-hover":Mt("brand-80"),"bg-primary-subtlest-selected":Mt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Mt("neutral-10"),"hyperlink-hover":Mt("neutral-40"),"hyperlink-visited":Mt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Mt("primary-50"),"focus-ring-inverse":Mt("white")},Tt={text:Mt("neutral-20"),"text-subtle":Mt("neutral-30"),"text-subtler":Mt("neutral-50"),"text-subtlest":Mt("neutral-60"),"text-primary":Mt("primary-50"),"text-hover":Mt("primary-40"),"text-selected":Mt("primary-50"),"text-selected-hover":Mt("primary-40"),"text-disabled":Mt("neutral-50"),"text-disabled-subtle":Mt("neutral-60"),"text-disabled-subtlest":Mt("neutral-80"),"text-selected-disabled":Mt("neutral-20"),"text-success":Mt("success-40"),"text-warning":Mt("warning-40"),"text-error":Mt("error-40"),"text-info":Mt("info-40"),"text-inverse":Mt("white"),icon:Mt("neutral-50"),"icon-subtle":Mt("neutral-60"),"icon-strongest":Mt("neutral-20"),"icon-primary":Mt("primary-50"),"icon-primary-subtle":Mt("primary-60"),"icon-primary-subtlest":Mt("primary-70"),"icon-hover":Mt("primary-40"),"icon-selected":Mt("primary-50"),"icon-selected-hover":Mt("primary-40"),"icon-disabled":Mt("neutral-50"),"icon-disabled-subtle":Mt("neutral-60"),"icon-selected-disabled":Mt("neutral-60"),"icon-success":Mt("success-50"),"icon-warning":Mt("warning-60"),"icon-error":Mt("error-50"),"icon-error-strong":Mt("error-40"),"icon-info":Mt("info-50"),"icon-inverse":Mt("white"),"icon-primary-inverse":Mt("primary-inverse"),border:Mt("neutral-90"),"border-strong":Mt("neutral-70"),"border-stronger":Mt("neutral-50"),"border-primary":Mt("primary-50"),"border-primary-subtle":Mt("primary-60"),"border-hover":Mt("primary-90"),"border-hover-strong":Mt("primary-60"),"border-selected":Mt("primary-50"),"border-selected-subtle":Mt("primary-70"),"border-selected-subtlest":Mt("primary-90"),"border-selected-hover":Mt("primary-40"),"border-focus":Mt("primary-60"),"border-focus-strong":Mt("primary-50"),"border-disabled":Mt("neutral-90"),"border-selected-disabled":Mt("neutral-70"),"border-success":Mt("success-60"),"border-warning":Mt("warning-60"),"border-error":Mt("error-60"),"border-error-focus":Mt("error-60"),"border-error-focus-strong":Mt("error-40"),"border-error-strong":Mt("error-40"),"border-info":Mt("info-60"),bg:Mt("white"),"bg-strong":Mt("neutral-100"),"bg-stronger":Mt("neutral-95"),"bg-strongest":Mt("neutral-90"),"bg-hover":Mt("primary-95"),"bg-hover-strong":Mt("primary-90"),"bg-hover-subtle":Mt("primary-100"),"bg-hover-neutral":Mt("neutral-100"),"bg-hover-neutral-strong":Mt("neutral-90"),"bg-selected":Mt("primary-95"),"bg-selected-hover":Mt("primary-90"),"bg-selected-strong":Mt("primary-90"),"bg-selected-stronger":Mt("primary-70"),"bg-selected-strongest":Mt("primary-50"),"bg-selected-strongest-hover":Mt("primary-40"),"bg-disabled":Mt("neutral-95"),"bg-selected-disabled":Mt("neutral-95"),"bg-selected-stronger-disabled":Mt("neutral-70"),"bg-success":Mt("success-100"),"bg-success-hover":Mt("success-95"),"bg-success-strong":Mt("success-50"),"bg-success-strong-hover":Mt("success-40"),"bg-warning":Mt("warning-100"),"bg-warning-hover":Mt("warning-95"),"bg-warning-strong":Mt("warning-50"),"bg-warning-strong-hover":Mt("warning-40"),"bg-info":Mt("info-100"),"bg-info-hover":Mt("info-95"),"bg-info-strong":Mt("info-50"),"bg-info-strong-hover":Mt("info-40"),"bg-error":Mt("error-100"),"bg-error-hover":Mt("error-95"),"bg-error-strong":Mt("error-50"),"bg-error-strong-hover":Mt("error-40"),"bg-inverse":Mt("neutral-20"),"bg-inverse-subtle":Mt("neutral-30"),"bg-inverse-subtler":Mt("neutral-50"),"bg-inverse-subtlest":Mt("neutral-60"),"bg-inverse-hover":Mt("neutral-40"),"bg-primary":Mt("primary-50"),"bg-primary-subtle":Mt("primary-60"),"bg-primary-subtler":Mt("primary-95"),"bg-primary-subtlest":Mt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Mt("primary-40"),"bg-primary-subtlest-hover":Mt("primary-90"),"bg-primary-subtlest-selected":Mt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Mt("primary-50"),"hyperlink-hover":Mt("primary-40"),"hyperlink-visited":Mt("primary-40"),"hyperlink-inverse":Mt("primary-inverse"),"focus-ring":Mt("primary-50"),"focus-ring-inverse":Mt("white")},_t={text:Mt("neutral-100"),"text-subtle":Mt("neutral-80"),"text-subtler":Mt("neutral-60"),"text-subtlest":Mt("neutral-50"),"text-primary":Mt("primary-60"),"text-hover":Mt("primary-70"),"text-selected":Mt("primary-60"),"text-selected-hover":Mt("primary-70"),"text-disabled":Mt("neutral-60"),"text-disabled-subtle":Mt("neutral-50"),"text-disabled-subtlest":Mt("neutral-30"),"text-selected-disabled":Mt("neutral-90"),"text-success":Mt("success-70"),"text-warning":Mt("warning-70"),"text-error":Mt("error-70"),"text-info":Mt("info-70"),"text-inverse":Mt("black"),icon:Mt("neutral-60"),"icon-subtle":Mt("neutral-50"),"icon-strongest":Mt("neutral-90"),"icon-primary":Mt("primary-60"),"icon-primary-subtle":Mt("primary-50"),"icon-primary-subtlest":Mt("primary-40"),"icon-hover":Mt("primary-70"),"icon-selected":Mt("primary-60"),"icon-selected-hover":Mt("primary-70"),"icon-disabled":Mt("neutral-60"),"icon-disabled-subtle":Mt("neutral-50"),"icon-selected-disabled":Mt("neutral-50"),"icon-success":Mt("success-60"),"icon-warning":Mt("warning-50"),"icon-error":Mt("error-60"),"icon-error-strong":Mt("error-70"),"icon-info":Mt("info-60"),"icon-inverse":Mt("black"),"icon-primary-inverse":Mt("primary-inverse"),border:Mt("neutral-20"),"border-strong":Mt("neutral-40"),"border-stronger":Mt("neutral-60"),"border-primary":Mt("primary-60"),"border-primary-subtle":Mt("primary-50"),"border-hover":Mt("primary-20"),"border-hover-strong":Mt("primary-50"),"border-selected":Mt("primary-60"),"border-selected-subtle":Mt("primary-40"),"border-selected-subtlest":Mt("primary-20"),"border-selected-hover":Mt("primary-70"),"border-focus":Mt("primary-50"),"border-focus-strong":Mt("primary-60"),"border-disabled":Mt("neutral-20"),"border-selected-disabled":Mt("neutral-40"),"border-success":Mt("success-50"),"border-warning":Mt("warning-50"),"border-error":Mt("error-50"),"border-error-focus":Mt("error-50"),"border-error-focus-strong":Mt("error-70"),"border-error-strong":Mt("error-70"),"border-info":Mt("info-50"),bg:Mt("black"),"bg-strong":Mt("neutral-10"),"bg-stronger":Mt("neutral-20"),"bg-strongest":Mt("neutral-20"),"bg-hover":Mt("primary-20"),"bg-hover-strong":Mt("primary-20"),"bg-hover-subtle":Mt("primary-10"),"bg-hover-neutral":Mt("neutral-10"),"bg-hover-neutral-strong":Mt("neutral-20"),"bg-selected":Mt("primary-20"),"bg-selected-hover":Mt("primary-20"),"bg-selected-strong":Mt("primary-20"),"bg-selected-stronger":Mt("primary-40"),"bg-selected-strongest":Mt("primary-60"),"bg-selected-strongest-hover":Mt("primary-70"),"bg-disabled":Mt("neutral-20"),"bg-selected-disabled":Mt("neutral-20"),"bg-selected-stronger-disabled":Mt("neutral-40"),"bg-success":Mt("success-10"),"bg-success-hover":Mt("success-20"),"bg-success-strong":Mt("success-60"),"bg-success-strong-hover":Mt("success-70"),"bg-warning":Mt("warning-10"),"bg-warning-hover":Mt("warning-20"),"bg-warning-strong":Mt("warning-60"),"bg-warning-strong-hover":Mt("warning-70"),"bg-info":Mt("info-10"),"bg-info-hover":Mt("info-20"),"bg-info-strong":Mt("info-60"),"bg-info-strong-hover":Mt("info-70"),"bg-error":Mt("error-10"),"bg-error-hover":Mt("error-20"),"bg-error-strong":Mt("error-60"),"bg-error-strong-hover":Mt("error-70"),"bg-inverse":Mt("neutral-90"),"bg-inverse-subtle":Mt("neutral-80"),"bg-inverse-subtler":Mt("neutral-60"),"bg-inverse-subtlest":Mt("neutral-50"),"bg-inverse-hover":Mt("neutral-70"),"bg-primary":Mt("primary-60"),"bg-primary-subtle":Mt("primary-50"),"bg-primary-subtler":Mt("primary-20"),"bg-primary-subtlest":Mt("primary-10"),"bg-available":"#185339","bg-primary-hover":Mt("primary-70"),"bg-primary-subtlest-hover":Mt("primary-20"),"bg-primary-subtlest-selected":Mt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Mt("primary-60"),"hyperlink-hover":Mt("primary-70"),"hyperlink-visited":Mt("primary-70"),"hyperlink-inverse":Mt("primary-inverse"),"focus-ring":Mt("primary-60"),"focus-ring-inverse":Mt("black")},It={collections:{lifesg:Yt,bookingsg:Yt,rbs:Yt,mylegacy:Yt,ccube:Yt,oneservice:Yt,pa:Rt,a11yplayground:Tt,supportgowhere:Yt,imda:Yt},defaultValue:"lifesg"},Lt={collections:{lifesg:jt,bookingsg:jt,rbs:jt,mylegacy:jt,ccube:jt,oneservice:jt,pa:jt,a11yplayground:_t,supportgowhere:jt,imda:jt},defaultValue:"lifesg"},Ht=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=mt(a?Lt:It,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?ht(i,e,s):i[e];return"function"==typeof l?l(r):l},Wt={text:Ht("text"),"text-subtle":Ht("text-subtle"),"text-subtler":Ht("text-subtler"),"text-subtlest":Ht("text-subtlest"),"text-primary":Ht("text-primary"),"text-hover":Ht("text-hover"),"text-selected":Ht("text-selected"),"text-selected-hover":Ht("text-selected-hover"),"text-disabled":Ht("text-disabled"),"text-disabled-subtle":Ht("text-disabled-subtle"),"text-disabled-subtlest":Ht("text-disabled-subtlest"),"text-selected-disabled":Ht("text-selected-disabled"),"text-success":Ht("text-success"),"text-warning":Ht("text-warning"),"text-error":Ht("text-error"),"text-info":Ht("text-info"),"text-inverse":Ht("text-inverse"),icon:Ht("icon"),"icon-subtle":Ht("icon-subtle"),"icon-strongest":Ht("icon-strongest"),"icon-primary":Ht("icon-primary"),"icon-primary-subtle":Ht("icon-primary-subtle"),"icon-primary-subtlest":Ht("icon-primary-subtlest"),"icon-hover":Ht("icon-hover"),"icon-selected":Ht("icon-selected"),"icon-selected-hover":Ht("icon-selected-hover"),"icon-disabled":Ht("icon-disabled"),"icon-disabled-subtle":Ht("icon-disabled-subtle"),"icon-selected-disabled":Ht("icon-selected-disabled"),"icon-success":Ht("icon-success"),"icon-warning":Ht("icon-warning"),"icon-error":Ht("icon-error"),"icon-error-strong":Ht("icon-error-strong"),"icon-info":Ht("icon-info"),"icon-inverse":Ht("icon-inverse"),"icon-primary-inverse":Ht("icon-primary-inverse"),border:Ht("border"),"border-strong":Ht("border-strong"),"border-stronger":Ht("border-stronger"),"border-primary":Ht("border-primary"),"border-primary-subtle":Ht("border-primary-subtle"),"border-hover":Ht("border-hover"),"border-hover-strong":Ht("border-hover-strong"),"border-selected":Ht("border-selected"),"border-selected-subtle":Ht("border-selected-subtle"),"border-selected-subtlest":Ht("border-selected-subtlest"),"border-selected-hover":Ht("border-selected-hover"),"border-focus":Ht("border-focus"),"border-focus-strong":Ht("border-focus-strong"),"border-disabled":Ht("border-disabled"),"border-selected-disabled":Ht("border-selected-disabled"),"border-success":Ht("border-success"),"border-warning":Ht("border-warning"),"border-error":Ht("border-error"),"border-error-focus":Ht("border-error-focus"),"border-error-focus-strong":Ht("border-error-focus-strong"),"border-error-strong":Ht("border-error-strong"),"border-info":Ht("border-info"),bg:Ht("bg"),"bg-strong":Ht("bg-strong"),"bg-stronger":Ht("bg-stronger"),"bg-strongest":Ht("bg-strongest"),"bg-hover":Ht("bg-hover"),"bg-hover-strong":Ht("bg-hover-strong"),"bg-hover-subtle":Ht("bg-hover-subtle"),"bg-hover-neutral":Ht("bg-hover-neutral"),"bg-hover-neutral-strong":Ht("bg-hover-neutral-strong"),"bg-selected":Ht("bg-selected"),"bg-selected-hover":Ht("bg-selected-hover"),"bg-selected-strong":Ht("bg-selected-strong"),"bg-selected-stronger":Ht("bg-selected-stronger"),"bg-selected-strongest":Ht("bg-selected-strongest"),"bg-selected-strongest-hover":Ht("bg-selected-strongest-hover"),"bg-disabled":Ht("bg-disabled"),"bg-selected-disabled":Ht("bg-selected-disabled"),"bg-selected-stronger-disabled":Ht("bg-selected-stronger-disabled"),"bg-success":Ht("bg-success"),"bg-success-hover":Ht("bg-success-hover"),"bg-success-strong":Ht("bg-success-strong"),"bg-success-strong-hover":Ht("bg-success-strong-hover"),"bg-warning":Ht("bg-warning"),"bg-warning-hover":Ht("bg-warning-hover"),"bg-warning-strong":Ht("bg-warning-strong"),"bg-warning-strong-hover":Ht("bg-warning-strong-hover"),"bg-info":Ht("bg-info"),"bg-info-hover":Ht("bg-info-hover"),"bg-info-strong":Ht("bg-info-strong"),"bg-info-strong-hover":Ht("bg-info-strong-hover"),"bg-error":Ht("bg-error"),"bg-error-hover":Ht("bg-error-hover"),"bg-error-strong":Ht("bg-error-strong"),"bg-error-strong-hover":Ht("bg-error-strong-hover"),"bg-inverse":Ht("bg-inverse"),"bg-inverse-subtle":Ht("bg-inverse-subtle"),"bg-inverse-subtler":Ht("bg-inverse-subtler"),"bg-inverse-subtlest":Ht("bg-inverse-subtlest"),"bg-inverse-hover":Ht("bg-inverse-hover"),"bg-primary":Ht("bg-primary"),"bg-primary-subtle":Ht("bg-primary-subtle"),"bg-primary-subtler":Ht("bg-primary-subtler"),"bg-primary-subtlest":Ht("bg-primary-subtlest"),"bg-available":Ht("bg-available"),"bg-primary-hover":Ht("bg-primary-hover"),"bg-primary-subtlest-hover":Ht("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ht("bg-primary-subtlest-selected"),"overlay-strong":Ht("overlay-strong"),"overlay-subtle":Ht("overlay-subtle"),hyperlink:Ht("hyperlink"),"hyperlink-hover":Ht("hyperlink-hover"),"hyperlink-visited":Ht("hyperlink-visited"),"hyperlink-inverse":Ht("hyperlink-inverse"),"focus-ring":Ht("focus-ring"),"focus-ring-inverse":Ht("focus-ring-inverse")},Pt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:pt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Wt.border(r),u=pt.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:pt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Wt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Nt=e=>1===e.length&&"theme"in e[0],Vt=e=>(...r)=>t=>{const n=Nt(r)?[]:r,a=Nt(r)?r[0]:t,i=a.theme;return(0,mt(Pt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Ut={solid:Vt("solid"),"dashed-default":Vt("dashed-default")},Kt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,a=mt(Kt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ht(a,e,n.overrides.breakpoint):a[e],i},Jt={"xxs-min":Zt("xxs-min"),"xxs-max":Zt("xxs-max"),"xs-min":Zt("xs-min"),"xs-max":Zt("xs-max"),"sm-min":Zt("sm-min"),"sm-max":Zt("sm-max"),"md-min":Zt("md-min"),"md-max":Zt("md-max"),"lg-min":Zt("lg-min"),"lg-max":Zt("lg-max"),"xl-min":Zt("xl-min"),"xl-max":Zt("xl-max"),"xxl-min":Zt("xxl-min"),"xxs-column":Zt("xxs-column"),"xs-column":Zt("xs-column"),"sm-column":Zt("sm-column"),"md-column":Zt("md-column"),"lg-column":Zt("lg-column"),"xl-column":Zt("xl-column"),"xxl-column":Zt("xxl-column"),"xxs-gutter":Zt("xxs-gutter"),"xs-gutter":Zt("xs-gutter"),"sm-gutter":Zt("sm-gutter"),"md-gutter":Zt("md-gutter"),"lg-gutter":Zt("lg-gutter"),"xl-gutter":Zt("xl-gutter"),"xxl-gutter":Zt("xxl-gutter"),"xxs-margin":Zt("xxs-margin"),"xs-margin":Zt("xs-margin"),"sm-margin":Zt("sm-margin"),"md-margin":Zt("md-margin"),"lg-margin":Zt("lg-margin"),"xl-margin":Zt("xl-margin"),"xxl-margin":Zt("xxl-margin")},qt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Jt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Xt={MaxWidth:qt("max-width"),MinWidth:qt("min-width")},Gt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Qt=e=>r=>{var t;const n=r.theme,a=mt(Gt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ht(a,e,n.overrides.fontSpec):a[e]},en={"heading-size-xxl":Qt("heading-size-xxl"),"heading-size-xl":Qt("heading-size-xl"),"heading-size-lg":Qt("heading-size-lg"),"heading-size-md":Qt("heading-size-md"),"heading-size-sm":Qt("heading-size-sm"),"heading-size-xs":Qt("heading-size-xs"),"heading-lh-xxl":Qt("heading-lh-xxl"),"heading-lh-xl":Qt("heading-lh-xl"),"heading-lh-lg":Qt("heading-lh-lg"),"heading-lh-md":Qt("heading-lh-md"),"heading-lh-sm":Qt("heading-lh-sm"),"heading-lh-xs":Qt("heading-lh-xs"),"heading-ls-xxl":Qt("heading-ls-xxl"),"heading-ls-xl":Qt("heading-ls-xl"),"heading-ls-lg":Qt("heading-ls-lg"),"heading-ls-md":Qt("heading-ls-md"),"heading-ls-sm":Qt("heading-ls-sm"),"heading-ls-xs":Qt("heading-ls-xs"),"weight-light":Qt("weight-light"),"weight-regular":Qt("weight-regular"),"weight-semibold":Qt("weight-semibold"),"weight-bold":Qt("weight-bold"),"font-family":Qt("font-family"),"body-size-baseline":Qt("body-size-baseline"),"body-size-md":Qt("body-size-md"),"body-size-sm":Qt("body-size-sm"),"body-size-xs":Qt("body-size-xs"),"body-lh-baseline":Qt("body-lh-baseline"),"body-lh-md":Qt("body-lh-md"),"body-lh-sm":Qt("body-lh-sm"),"body-lh-xs":Qt("body-lh-xs"),"body-ls-baseline":Qt("body-ls-baseline"),"body-ls-md":Qt("body-ls-md"),"body-ls-sm":Qt("body-ls-sm"),"body-ls-xs":Qt("body-ls-xs"),"form-label-size":Qt("form-label-size"),"form-description-size":Qt("form-description-size"),"form-label-lh":Qt("form-label-lh"),"form-description-lh":Qt("form-description-lh"),"form-label-ls":Qt("form-label-ls"),"form-description-ls":Qt("form-description-ls")},rn=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return F`
        font-family: ${Qt("font-family")};
        font-size: ${Qt(e)};
        font-weight: ${Qt(r)};
        line-height: ${Qt(t)};
        letter-spacing: ${Qt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},tn=(e={})=>({"heading-xxl-light":rn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":rn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":rn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":rn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":rn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":rn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":rn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":rn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":rn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":rn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":rn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":rn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":rn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":rn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":rn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":rn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":rn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":rn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":rn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":rn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":rn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":rn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":rn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":rn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":rn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":rn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":rn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":rn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":rn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":rn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":rn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":rn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":rn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":rn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":rn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":rn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":rn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":rn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":rn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":rn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":rn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":rn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),nn=tn({disableLigatures:!0}),an={collections:{default:tn(),bookingsg:nn,pa:tn({disableLigatures:!0}),a11yplayground:tn({disableLigatures:!0}),supportgowhere:tn({disableLigatures:!0}),imda:tn({disableLigatures:!0})},defaultValue:"default"},on=e=>r=>{var t;const n=r.theme,a=mt(an,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ht(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},sn={"heading-xxl-light":on("heading-xxl-light"),"heading-xxl-regular":on("heading-xxl-regular"),"heading-xxl-semibold":on("heading-xxl-semibold"),"heading-xxl-bold":on("heading-xxl-bold"),"heading-xl-light":on("heading-xl-light"),"heading-xl-regular":on("heading-xl-regular"),"heading-xl-semibold":on("heading-xl-semibold"),"heading-xl-bold":on("heading-xl-bold"),"heading-lg-light":on("heading-lg-light"),"heading-lg-regular":on("heading-lg-regular"),"heading-lg-semibold":on("heading-lg-semibold"),"heading-lg-bold":on("heading-lg-bold"),"heading-md-light":on("heading-md-light"),"heading-md-regular":on("heading-md-regular"),"heading-md-semibold":on("heading-md-semibold"),"heading-md-bold":on("heading-md-bold"),"heading-sm-light":on("heading-sm-light"),"heading-sm-regular":on("heading-sm-regular"),"heading-sm-semibold":on("heading-sm-semibold"),"heading-sm-bold":on("heading-sm-bold"),"heading-xs-light":on("heading-xs-light"),"heading-xs-regular":on("heading-xs-regular"),"heading-xs-semibold":on("heading-xs-semibold"),"heading-xs-bold":on("heading-xs-bold"),"body-baseline-light":on("body-baseline-light"),"body-baseline-regular":on("body-baseline-regular"),"body-baseline-semibold":on("body-baseline-semibold"),"body-baseline-bold":on("body-baseline-bold"),"body-md-light":on("body-md-light"),"body-md-regular":on("body-md-regular"),"body-md-semibold":on("body-md-semibold"),"body-md-bold":on("body-md-bold"),"body-sm-light":on("body-sm-light"),"body-sm-regular":on("body-sm-regular"),"body-sm-semibold":on("body-sm-semibold"),"body-sm-bold":on("body-sm-bold"),"body-xs-light":on("body-xs-light"),"body-xs-regular":on("body-xs-regular"),"body-xs-semibold":on("body-xs-semibold"),"body-xs-bold":on("body-xs-bold"),"form-label":on("form-label"),"form-description":on("form-description")},ln={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},dn=e=>r=>{var t;const n=r.theme,a=mt(ln,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ht(a,e,n.overrides.motion):a[e]},cn={"duration-150":dn("duration-150"),"duration-250":dn("duration-250"),"duration-350":dn("duration-350"),"duration-500":dn("duration-500"),"duration-800":dn("duration-800"),"duration-1000":dn("duration-1000"),"ease-default":dn("ease-default"),"ease-standard":dn("ease-standard"),"ease-entrance":dn("ease-entrance"),"ease-exit":dn("ease-exit")},un={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},gn=e=>r=>{var t;const n=r.theme,a=mt(un,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ht(a,e,n.overrides.radius)}px`:`${a[e]}px`},bn={none:gn("none"),xs:gn("xs"),sm:gn("sm"),md:gn("md"),lg:gn("lg"),full:gn("full")},hn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},mn=e=>r=>{var t;const n=r.theme,a=mt(hn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ht(a,e,n.overrides.spacing)}px`:`${a[e]}px`},fn={"spacing-0":mn("spacing-0"),"spacing-4":mn("spacing-4"),"spacing-8":mn("spacing-8"),"spacing-12":mn("spacing-12"),"spacing-16":mn("spacing-16"),"spacing-20":mn("spacing-20"),"spacing-24":mn("spacing-24"),"spacing-32":mn("spacing-32"),"spacing-40":mn("spacing-40"),"spacing-48":mn("spacing-48"),"spacing-64":mn("spacing-64"),"spacing-72":mn("spacing-72"),"layout-xs":mn("layout-xs"),"layout-sm":mn("layout-sm"),"layout-md":mn("layout-md"),"layout-lg":mn("layout-lg"),"layout-xl":mn("layout-xl"),"layout-xxl":mn("layout-xxl"),"layout-xxxl":mn("layout-xxxl")},yn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),pn=Object.assign(Object.assign({},Wt),{Primitive:zt}),vn=Object.assign(Object.assign({},sn),{Spec:en}),xn=cn,Dn=Object.assign(Object.assign({},pt),{Util:Ut}),Fn=fn,wn=bn,$n=Jt,En=Xt,Cn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Sn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Bn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},An={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},kn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},On={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Mn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},zn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Yn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},jn={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"};Object.assign(Object.assign({},Cn),{light:yn(Cn,"light"),dark:yn(Cn,"dark")}),Object.assign(Object.assign({},Sn),{light:yn(Sn,"light"),dark:yn(Sn,"dark")}),Object.assign(Object.assign({},Bn),{light:yn(Bn,"light"),dark:yn(Bn,"dark")}),Object.assign(Object.assign({},An),{light:yn(An,"light"),dark:yn(An,"dark")}),Object.assign(Object.assign({},kn),{light:yn(kn,"light"),dark:yn(kn,"dark")}),Object.assign(Object.assign({},On),{light:yn(On,"light"),dark:yn(On,"dark")}),Object.assign(Object.assign({},Mn),{light:yn(Mn,"light"),dark:yn(Mn,"dark")}),Object.assign(Object.assign({},zn),{light:yn(zn,"light"),dark:yn(zn,"dark")}),Object.assign(Object.assign({},Yn),{light:yn(Yn,"light"),dark:yn(Yn,"dark")}),Object.assign(Object.assign({},jn),{light:yn(jn,"light"),dark:yn(jn,"dark")});const Rn=e=>"small"===e?2.5:3;D.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Rn(e.$variant);return F`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Tn=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Fn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Rn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${wn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${pn["border-focus"]};
    }
`,_n=D.button`
    ${Tn}
    cursor: pointer;
`;D.div`
    ${Tn}
`;const In=w`
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
    border: ${Dn["width-010"]} ${Dn.solid} ${pn.border};
    border-radius: ${wn.sm};
    background: ${pn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${pn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${pn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${In} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${pn["bg-disabled"]};

                ${_n} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${pn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${_n} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${pn["border-error"]};

                &:focus-within {
                    border-color: ${pn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${pn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,D.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${xn["duration-250"]} ${xn["ease-default"]};
    margin-left: ${Fn["spacing-16"]};
`,D(x)`
    color: ${pn.icon};
`,D.div`
    height: 1px;
    background: ${pn.border};
    margin: 0 ${Fn["spacing-8"]};
`,D.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${pn["text-disabled"]};
            `}}
`;D(D.div`
    ${e=>"small"===e.$variant?vn["body-md-regular"]:vn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${r=1,F`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${pn["text-subtler"]};
`;var Ln=function(e,r){return Ln=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Ln(e,r)};var Hn=function(){return Hn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},Hn.apply(this,arguments)};var Wn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Pn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Nn="object"==typeof Wn&&Wn&&Wn.Object===Object&&Wn,Vn="object"==typeof self&&self&&self.Object===Object&&self,Un=Nn||Vn||Function("return this")(),Kn=Un,Zn=function(){return Kn.Date.now()},Jn=/\s/;var qn=function(e){for(var r=e.length;r--&&Jn.test(e.charAt(r)););return r},Xn=/^\s+/;var Gn=function(e){return e?e.slice(0,qn(e)+1).replace(Xn,""):e},Qn=Un.Symbol,ea=Qn,ra=Object.prototype,ta=ra.hasOwnProperty,na=ra.toString,aa=ea?ea.toStringTag:void 0;var ia=function(e){var r=ta.call(e,aa),t=e[aa];try{e[aa]=void 0;var n=!0}catch(e){}var a=na.call(e);return n&&(r?e[aa]=t:delete e[aa]),a},oa=Object.prototype.toString;var sa=ia,la=function(e){return oa.call(e)},da=Qn?Qn.toStringTag:void 0;var ca=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":da&&da in Object(e)?sa(e):la(e)},ua=function(e){return null!=e&&"object"==typeof e};var ga=Gn,ba=Pn,ha=function(e){return"symbol"==typeof e||ua(e)&&"[object Symbol]"==ca(e)},ma=/^[-+]0x[0-9a-f]+$/i,fa=/^0b[01]+$/i,ya=/^0o[0-7]+$/i,pa=parseInt;var va=Pn,xa=Zn,Da=function(e){if("number"==typeof e)return e;if(ha(e))return NaN;if(ba(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ba(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ga(e);var t=fa.test(e);return t||ya.test(e)?pa(e.slice(2),t?2:8):ma.test(e)?NaN:+e},Fa=Math.max,wa=Math.min;var $a=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=xa();if(h(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?wa(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function y(){var e=xa(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Da(r)||0,va(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Fa(Da(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(xa())},y},Ea=$a,Ca=Pn;var Sa=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ca(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Ea(e,r,{leading:n,maxWait:r,trailing:a})},Ba=function(e,r,t,n){switch(r){case"debounce":return $a(e,t,n);case"throttle":return Sa(e,t,n);default:return e}},Aa=function(e){return"function"==typeof e},ka=function(){return"undefined"==typeof window},Oa=function(e){return e instanceof Element||e instanceof HTMLDocument},Ma=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Aa(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ka()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ka())return null;if(r)return document.querySelector(r);if(n&&Oa(n))return n;if(t.targetRef&&Oa(t.targetRef.current))return t.targetRef.current;var a=I(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Ma(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!ka()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Aa(r)?"renderProp":Aa(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,ka()||(t.resizeHandler=Ba(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Ln(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ka()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var za,Ya=ka()?u:g;function ja(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],F=x[1];return Ya((function(){if(!ka()){var e=Ma(m,F,c,g);v.current=Ba((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!ka()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),Hn({ref:p},D)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(za||(za={}));const Ra=e=>"right"===e?"bottom-end":"bottom-start",Ta=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),_a=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:m=!1,offset:f=0,alignment:y="left",fitAvailableHeight:p,rootNode:v,positionRef:x})=>{var D;const F=h($),w=$n["sm-max"]({theme:F}),I=i(null),{width:L=0}=ja({targetRef:null!=x?x:I,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:W,floatingStyles:P,context:N}=C({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:S,placement:Ra(y),middleware:[B(f),A(),k({limiter:O()}),M({apply({availableHeight:e,elements:r}){!p||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),H]}),V=(()=>{const[e,r]=o(void 0),t=E();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(za.Change,e),t.events.emit(za.Ready),()=>t.events.off(za.Change,e)}),[t]),e})(),{isMounted:U,styles:K}=z(N,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=Y(N,{enabled:n,toggle:m}),J=j(N,{enabled:n}),{getReferenceProps:q,getFloatingProps:X}=R([Z,J]),G={elementWidth:L,styles:Object.assign(Object.assign(Object.assign({},K),P),{zIndex:null!==(D=null!=b?b:V)&&void 0!==D?D:50}),setFloatingRef:W.setFloating,getFloatingProps:X};return e(r,{children:[t("div",Object.assign({ref:e=>{I.current=e,W.setReference(e)}},q(),{children:c()})),U&&t(T,{root:v,children:t(_,{context:N,modal:!1,initialFocus:-1,returnFocus:!1,children:t(Ta.Provider,{value:G,children:g(G)})})})]})},Ia=D.div`
    --vertical-inset: ${Fn["spacing-24"]};
    --horizontal-inset: ${Fn["spacing-20"]};
    --header-bottom-spacing: ${Fn["spacing-4"]};

    border: ${Dn["width-010"]} ${Dn.solid} ${pn.border};
    border-radius: ${wn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${En.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var La={exports:{}};La.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,h,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,h,y,p,v,x)):new Date(m,f,h,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ha=V(La.exports),Wa={exports:{}};Wa.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Pa=V(Wa.exports),Na={exports:{}};Na.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Va=V(Na.exports),Ua={exports:{}};Ua.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ka,Za,Ja,qa=V(Ua.exports),Xa={exports:{}},Ga=V(Xa.exports=(Ka={year:0,month:1,day:2,hour:3,minute:4,second:5},Za={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Za[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Za[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Ka[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));K.extend(Pa),K.extend(qa),K.extend(Va),K.extend(Ha),K.extend(Ga),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=K(r).startOf("week");return Qa(t).map((e=>ei(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ei(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(K(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+K(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=K(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?K(n):void 0,a?K(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Ja||(Ja={}));const Qa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ei=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},ri=[1,3,5,7,8,10,12],ti=[4,6,9,11];var ni,ai;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":ri.includes(i)?Math.min(a,31).toString():ti.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=K(e,t);return K(r,t).diff(n,"minute")},e.toDayjs=e=>e?K(e):K(),e.addMinutesToTime=(e,r,t="HH:mm")=>K(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>K(e).isSame(K(r),t)}(ni||(ni={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!K(e).isBefore(n,"day"))||!(!a||!K(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(K(e).isValid())return e}return""}}(ai||(ai={}));var ii,oi;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ii||(ii={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(oi||(oi={}));const si=e=>{const[r,t]=o(e),n=i(e);return[r,f((e=>{n.current=e,t(e)}),[]),n]};D.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const li=e=>(()=>{const e=m.split(".");return parseInt(e[0],10)>=19})()?e:e?"true":void 0,di=D.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ci=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ui=D.div`
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
    animation: ${ci} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,gi=D(ui)`
    animation-delay: -0.45s;
`,bi=D(ui)`
    animation-delay: -0.3s;
`,hi=D(ui)`
    animation-delay: -0.15s;
`,mi={Button:{"button-radius":bn.md,"button-default-colour-bg":Wt["bg-primary"],"button-default-colour-bg-hover":Wt["bg-primary-hover"],"button-default-colour-text":Wt["text-inverse"],"button-secondary-colour-border":Wt["border-primary"],"button-secondary-colour-text":Wt["text-primary"],"button-light-colour-text":Wt["text-primary"],"button-link-colour-text":Wt["text-primary"]},Animation:{"loading-dots-spinner-colour":Wt["icon-primary"]}},fi={Button:{"button-radius":bn.sm,"button-default-colour-bg":Wt["bg-primary"],"button-default-colour-bg-hover":Wt["bg-primary-hover"],"button-default-colour-text":Wt["text-inverse"],"button-secondary-colour-border":Wt["border-primary"],"button-secondary-colour-text":Wt["text-primary"],"button-light-colour-text":Wt["text-primary"],"button-link-colour-text":Wt["text-primary"]},Animation:{"loading-dots-spinner-colour":Wt["icon-primary"]}},yi={Button:{"button-radius":bn.sm,"button-default-colour-bg":Wt["bg-primary"],"button-default-colour-bg-hover":Wt["bg-primary-hover"],"button-default-colour-text":Wt["text-inverse"],"button-secondary-colour-border":Wt["border-primary"],"button-secondary-colour-text":Wt["text-primary"],"button-light-colour-text":Wt["text-primary"],"button-link-colour-text":Wt["text-primary"]},Animation:{"loading-dots-spinner-colour":pn.Primitive["brand-50"]}},pi={collections:{default:fi,pa:{Button:{"button-radius":bn.full,"button-default-colour-bg":Wt["bg-primary"],"button-default-colour-bg-hover":Wt["bg-primary-hover"],"button-default-colour-text":Wt["text-inverse"],"button-secondary-colour-border":Wt["border-primary"],"button-secondary-colour-text":Wt["text-primary"],"button-light-colour-text":Wt["text-primary"],"button-link-colour-text":Wt["text-primary"]},Animation:{"loading-dots-spinner-colour":Wt["icon-primary"]}},a11yplayground:mi,lifesg:yi},defaultValue:"default"},vi=(e,r)=>t=>{var n,a;const i=t.theme,o=mt(pi,null==i?void 0:i.componentScheme);return xi((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},xi=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Di=vi("Button","button-radius"),Fi=vi("Button","button-default-colour-bg"),wi=vi("Button","button-default-colour-bg-hover"),$i=vi("Button","button-default-colour-text"),Ei=vi("Button","button-secondary-colour-border"),Ci=vi("Button","button-secondary-colour-text"),Si=vi("Button","button-light-colour-text"),Bi=vi("Button","button-link-colour-text"),Ai=D.button`
    padding: ${Fn["spacing-8"]} ${Fn["spacing-16"]};
    min-width: 4rem;
    border: ${Dn["width-010"]} ${Dn.solid} transparent;
    transition: all ${xn["duration-250"]} ${xn["ease-default"]};
    border-radius: ${Di};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${pn.bg};
                    border-color: ${e.$buttonIsDanger?pn["border-error-strong"]:Ei};

                    color: ${e.$buttonIsDanger?pn["text-error"]:Ci};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${pn["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${pn.bg};
                    border-color: ${pn.border};

                    color: ${e.$buttonIsDanger?pn["text-error"]:Si};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${pn["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?pn["text-error"]:Bi};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${pn["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${pn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${pn["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?pn["bg-error-strong"]:Fi};

                    ${En.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${$i};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?pn["bg-error-strong-hover"]:wi};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${vn["body-md-semibold"]}

                    ${En.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${vn["heading-md-semibold"]}

                    ${En.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${vn["heading-xs-semibold"]}

                    ${En.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ki=D((({color:r,className:n,size:a})=>e(di,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ui,{id:"inner1"}),t(gi,{id:"inner2"}),t(bi,{id:"inner3"}),t(hi,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Oi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=P(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ai,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":o,onClick:i?void 0:c},g,u,{children:[o&&t(ki,{}),t("span",{children:a})]}))};Oi.displayName="Button.Default";const Mi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=P(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ai,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":o,onClick:i?void 0:c},g,u,{children:[o&&t(ki,{}),t("span",{children:a})]}))};Mi.displayName="Button.Small";const zi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=P(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ai,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":o,onClick:i?void 0:c},g,u,{children:[o&&t(ki,{}),t("span",{children:a})]}))};zi.displayName="Button.Large";const Yi={Default:a.forwardRef(Oi),Small:a.forwardRef(Mi),Large:a.forwardRef(zi)},ji=D.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Fn["spacing-24"]};
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

        ${({$highlight:e})=>e&&F`
                background-color: ${pn["bg-hover-neutral"]};
            `}
    }
`,Ri=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=P(e,["children","focusHighlight","focusOutline","type"]);return t(ji,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Ti=F`
    color: ${pn.icon};
    height: 1rem;
    width: 1rem;
`,_i=D(L)`
    ${Ti}
`,Ii=D(H)`
    ${Ti}
`,Li=D(x)`
    ${Ti}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Hi=D.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Wi=D.div`
    display: flex;
    flex: 1;
    position: relative;
`,Pi=D.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ni=D.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${pn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Vi=D.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ui=D.div`
    display: flex;
`,Ki=D.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${Li} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Zi=D.span`
    ${vn["body-md-regular"]}
    color: ${pn.text};
`,Ji=D.div`
    display: flex;
`,qi=D(Ri)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,Xi=D.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Gi=D(Yi.Small)`
    flex: 1;
`,Qi=D.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,eo=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${wn.md};
    margin: 0 0.5rem;
    transition: ${xn["duration-150"]} ${xn["ease-default"]};

    // default styles
    ${vn["body-md-regular"]}
    border-radius: ${wn.md};
    border: ${Dn["width-010"]} ${Dn.solid} transparent;
    background-clip: border-box;
    color: ${pn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?F`
                background: ${pn["bg-selected"]};
                border-color: ${pn["border-selected"]};
                color: ${pn["text-selected"]};
                font-weight: ${vn.Spec["weight-semibold"]};

                ${r&&F`
                    &:hover {
                        background: ${pn["bg-selected-hover"]};
                        border-color: ${pn["border-selected-hover"]};
                        color: ${pn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${pn["text-primary"]};
                font-weight: ${vn.Spec["weight-semibold"]};
            `:t?F`
                color: ${pn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?F`
                &:hover {
                    background: ${pn["bg-selected-hover"]};
                    border-color: ${pn["border-selected-hover"]};
                    color: ${pn["text-selected-hover"]};
                    font-weight: ${vn.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${pn["bg-hover"]};
                color: ${pn["text-hover"]};
                font-weight: ${vn.Spec["weight-semibold"]};
            }
        `}}
`,ro=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const h=y((()=>Ja.generateMonths(K(e))),[e]),m=i(new Array(h.length).fill(null)),[f,p]=o(h.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==f&&(null===(e=m.current[f])||void 0===e||e.focus())}),[f,h]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},D=e=>{const r=e.format("MMMM"),t=(n=e,!Ja.isWithinRange(n,d?K(d):void 0,c?K(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":K().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return h.length?t(Qi,{onBlur:()=>{p(null)},children:h.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=D(e);return t(eo,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=h.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<h.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},to=D.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,no=D.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${xn["duration-150"]} ${xn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${vn["body-md-regular"]}
    border-radius: ${wn.md};
    border: ${Dn["width-010"]} ${Dn.solid} transparent;
    background-clip: border-box;
    color: ${pn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?F`
                cursor: pointer;
            `:r?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?F`
                background: ${pn["bg-selected"]};
                border-color: ${pn["border-selected"]};
                color: ${pn["text-selected"]};
                font-weight: ${vn.Spec["weight-semibold"]};

                ${r&&F`
                    &:hover {
                        background: ${pn["bg-selected-hover"]};
                        border-color: ${pn["border-selected-hover"]};
                        color: ${pn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${pn["text-primary"]};
                font-weight: ${vn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?F`
                color: ${pn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?F`
                &:hover {
                    background: ${pn["bg-selected-hover"]};
                    border-color: ${pn["border-selected-hover"]};
                    color: ${pn["text-selected-hover"]};
                    font-weight: ${vn.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${pn["bg-hover"]};
                color: ${pn["text-hover"]};
                font-weight: ${vn.Spec["weight-semibold"]};
            }
        `}}
`,ao=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:h})=>{const m=y((()=>Ja.generateDecadeOfYears(K(e))),[e]),f=i(new Array(m.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=m.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,m]);const x=(e,r)=>{r||b(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},F=e=>{const r=m.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!Ja.isWithinRange(i,d?K(d):void 0,c?K(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":K().isSame(e,"year")?"current-year":"default",l=s.year()>=m[0].year()&&s.year()<=m[m.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return m.length?t(to,{onBlur:()=>{v(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=F(e);return t(no,{ref:e=>{f.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),h(n),v(n))})(r,e,!a)},children:o},o)}))}):null},io=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:h,selectWithinRange:m,dynamicHeight:f=!1,allowDisabledSelection:y,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:F,showNavigationHeader:w=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A,isFocusable:k=!1}=n,O=P(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,z]=o(ni.toDayjs(l)),[Y,j]=o(ni.toDayjs(l)),[R,T]=o("default"),_=i(null),I=i(null),L=i(null),H=i(null);p(a,(()=>({defaultView(){T("default")},resetView(){const e=ni.toDayjs(l);z(e),j(e),T("default")},setCalendarDate(e){const r=ni.toDayjs(e);z(r),j(r)}}))),u((()=>{const e=ni.toDayjs(l);z(e),j(e)}),[l]),u((()=>{G(Y)}),[Y]);const W=()=>{var e;"month-options"!==R?(T("month-options"),null===(e=L.current)||void 0===e||e.focus()):(T("default"),z(Y))},N=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),W(),null===(r=H.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!Ja.isWithinRange(r,d?K(d):void 0,c?K(c):void 0,"month"))return;z(r),"default"===R&&j(r)}},V=()=>{"default"!==R?(T("default"),z(Y)):T("year-options")},U=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===R?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!Ja.isWithinRange(r,d?K(d):void 0,c?K(c):void 0,"year"))return;z(r),"default"===R&&j(r)}},Z=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=$?$(M):M.subtract(1,"month");switch(R){case"default":j(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=E?E(M):M.add(1,"month");switch(R){case"default":j(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},q=e=>{z(e),j(e),x||T("default")},X=()=>{const e=ni.toDayjs(l);z(e),j(e),"default"===R?Q("reset"):T("default")},G=e=>{v&&v(e)},Q=e=>{F&&F(e)},ee=()=>{if(!d||y)return!1;const e=K(d);return"month-options"===R?!Ja.isPreviousYearWithinRange(M,e):"year-options"===R?!Ja.isPreviousDecadeWithinRange(M,e):C?C(M):!Ja.isPreviousMonthWithinRange(M,e)},re=()=>{if(!c||y)return!1;const e=K(c);return"month-options"===R?!Ja.isNextYearWithinRange(M,e):"year-options"===R?!Ja.isNextDecadeWithinRange(M,e):S?S(M):!Ja.isNextMonthWithinRange(M,e)},te=()=>{const n=B?B(M):M.format("MMM"),a=K(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===R){const{beginDecade:e,endDecade:r}=Ja.getStartEndDecade(M);return`${e} to ${r}`}return A?A(M):M.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Ki,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:W,onKeyDown:N,tabIndex:k?0:-1,children:[t(Zi,{children:n}),t(Li,{})]}),e(Ki,{ref:H,"aria-label":o[R],type:"button",$expanded:"default"!==R,id:"year-dropdown",onClick:V,onKeyDown:U,tabIndex:k?0:-1,children:[t(Zi,{children:i}),t(Li,{})]})]})},ne=()=>{switch(R){case"month-options":return t(ro,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:y});case"year-options":return t(ao,{setCalendarDate:z,calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:y});default:return null}};return e(Hi,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},O,{children:[w&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[R];return e(Vi,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Ui,{children:te()}),e(Ji,{children:[t(qi,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:Z,tabIndex:k?0:-1,children:t(_i,{})}),t(qi,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:k?0:-1,children:t(Ii,{})})]})]})})(),t(Wi,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:R}):s;if(f)return e(r,{children:["default"===R&&n,ne()]});{const a="default"===R;return e(r,{children:[t(Pi,{inert:li(!a),children:n}),t(Ni,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===R)&&D;return e(Xi,{children:[t(Gi,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X,children:"Cancel"}),t(Gi,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(z(Y),"default"===R?Q("confirmed"):T("default"))},disabled:r,children:"Done"})]})})()]}))})),oo=D.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,so=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${vn["body-sm-semibold"]};
    color: ${pn.text};
`,lo=D.div`
    grid-column: 1 / -1;
    display: flex;
`,co=e=>{let r=pn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=pn["bg-hover"],t=pn["bg-hover"];break;case"hover":r=pn["bg-hover-strong"],t=pn["bg-hover-strong"];break;case"hover-outline":r=pn["bg-hover-subtle"],t=pn["border-hover"];break;case"selected-outline":r=pn["bg-selected"],t=pn["border-selected"];break;case"selected-outline-subtle":r=pn["bg-selected"],t=pn["border-selected-subtle"];break;case"selected-hover":r=pn["bg-selected-hover"];break;case"selected-hover-outline":r=pn["bg-selected-hover"],t=pn["border-selected-hover"]}return{color:r,borderColor:t}},uo=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,go=D.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${xn["duration-150"]} ${xn["ease-default"]};
    border: ${Dn["width-010"]} ${Dn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=co(e);return F`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,bo=D(go)`
    left: 0;
`,ho=D(go)`
    right: 0;
`,mo=D.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${xn["duration-150"]} ${xn["ease-default"]};

    border: ${Dn["width-010"]} ${Dn.solid} transparent;
    border-radius: ${wn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=co(e);return F`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,fo=D(mo)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,yo=D(mo)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,po=D.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,vo=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${vn["body-md-regular"]}
    transition: ${xn["duration-150"]} ${xn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?F`
                    visibility: hidden;
                `:F`
                color: ${pn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return F`
                    font-weight: ${vn.Spec["weight-semibold"]};
                    color: ${pn["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${vn.Spec["weight-semibold"]};
                    color: ${pn["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${vn.Spec["weight-semibold"]};
                    color: ${pn["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${vn.Spec["weight-semibold"]};
                    color: ${pn["text-hover"]};
                `;case"unavailable":return F`
                    color: ${pn["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${pn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,xo=D.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,Do=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:f,onKeyDown:y,focusDate:p,label:v,ariaHidden:x,tabIndex:D=-1,role:F="button"})=>{const w=K().isSame(g,"day"),$=!!p&&p.isSame(g,"day"),E=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=i(null);u((()=>{var e;$&&C.current&&(null===(e=C.current)||void 0===e||e.focus())}),[$]);return e(uo,{"aria-hidden":x,children:[t(bo,{$type:r}),t(fo,{$type:a}),t(ho,{$type:n}),t(yo,{$type:o}),t(po,{$interactive:d,children:e(vo,{ref:C,tabIndex:D,role:F,"aria-label":v||E,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{null==b||b(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{null==h||h(g)},onMouseLeave:()=>{null==f||f(g)},onFocus:()=>{null==m||m(g)},children:[g.date(),c&&w&&t(xo,{$disabled:l})]})})]})},Fo=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p})=>{const v=Ja.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{h(e,!x)},F=()=>{const e=K(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},w={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:K(s),tabIndex:p};return t(Do,Object.assign({},w,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(K().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=F();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};K.extend(Pa);const wo=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:b,maxDate:h,allowDisabledSelection:m,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=f((()=>s&&K(s).isSame(r,"month")?K(s):l&&K(l).isSame(r,"month")?K(l):K().isSame(r,"month")?K():b&&r.isSame(K(b),"month")?K(b):K(r).startOf("month")),[s,r,l,b]),F=e=>{const t=K(e);if(Ja.isWithinRange(t,b?K(b):void 0,h?K(h):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},w=y((()=>Ja.generateDays(r)),[r]),$=y((()=>D()),[D]),[E,C]=o(""),[S,B]=o(""),A=(e,r)=>{r&&!m||d(e)},k=(e,r)=>{r&&!m||(B(e),c(e))},O=e=>{B(e),c(e)},M=()=>{B(""),c("")};return e(oo,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[w[0].map(((e,r)=>t(so,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),w.map(((e,i)=>t(lo,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:M,children:e.map(((e,i)=>t(Fo,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:b,maxDate:h,disabledDates:a,allowDisabledSelection:m,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:k,onFocus:O,setFocusCell:F,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},$o=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Ja.isDisabledDay(e,l,o,s),y=!f||d,{start:p,end:v}=n?Ja.getFixedRangeStartEnd(ni.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:D}=a?Ja.getFixedRangeStartEnd(ni.toDayjs(a),c):{start:void 0,end:void 0},F=!!n&&e.isBetween(p,v,"day","[]"),w=!!a&&e.isBetween(x,D,"day","[]"),$=F&&e.isSame(p,"day")||w&&e.isSame(x,"day"),E=F&&e.isSame(v,"day")||w&&e.isSame(D,"day"),C=`From ${K(x).format("D MMMM")} to ${K(D).format("D MMMM")}, ${f?"Unavailable":"Available"}`,S=()=>{u(e,!y)},B=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},A={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:S,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&S());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},focusDate:K(i),role:"gridcell",tabIndex:m,label:C};return t(Do,Object.assign({},A,(()=>{const t={};return F||w?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":K().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return w&&B(r,"hover",t===x,t===D),F&&B(r,"selected-outline",t===p,t===v),F&&w&&(B(r,"selected-hover-outline",$,E),t===x&&t!==p&&(r.circleLeft="selected-hover")),r})()))},Eo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,numberOfDays:b,setCalendarDate:h})=>{const m=i(null);u((()=>{if(m.current){const e=m.current;m.current=null,w(e)}}),[r]);const p=f((()=>a&&K(a).isSame(r,"month")?K(a):K().isSame(r,"month")?K():d&&r.isSame(K(d),"month")?K(d):K(r).startOf("month")),[a,r,d]),v=e=>{const t=K(e);if(Ja.isWithinRange(t,d?K(d):void 0,c?K(c):void 0)){if(!t.isSame(r,"month"))return null==h||h(e),void(m.current=e);w(e)}},x=y((()=>Ja.generateDays(r)),[r]),D=y((()=>p()),[p]),[F,w]=o(""),[$,E]=o(""),C=(e,r)=>{r&&!g||(s(e),e&&!K(e).isSame(e,"month")&&E(""))},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},A=()=>{E(""),l("")};return e(oo,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(so,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),x.map(((e,i)=>t(lo,{role:"row",onMouseLeave:A,children:e.map(((e,i)=>t($o,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:F,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:b,onFocus:B,setFocusCell:v,tabIndex:K(e).isSame(D,"day")?0:-1},`day-${i}`)))},i)))]})},Co=D.div`
    width: 100%;
    background: ${pn.bg};
`,So=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Ja.isDisabledDay(e,l,o,s),y=!f||d,p=()=>{u(e,!y)},v={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:p,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&p());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:K(i),tabIndex:m};return t(Do,Object.assign({},v,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":K().isSame(e,"day")&&!f&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};K.extend(Pa);const Bo=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,showActiveMonthDaysOnly:b,setCalendarDate:h})=>{const m=i(null);u((()=>{if(m.current){const e=m.current;m.current=null,w(e)}}),[r]);const p=f((()=>a&&K(a).isSame(r,"month")?K(a):K().isSame(r,"month")?K():d&&r.isSame(K(d),"month")?K(d):K(r).startOf("month")),[a,r,d]),v=e=>{const t=K(e);if(Ja.isWithinRange(t,d?K(d):void 0,c?K(c):void 0)){if(!t.isSame(r,"month"))return null==h||h(e),void(m.current=e);w(e)}},x=y((()=>Ja.generateDays(r)),[r]),D=y((()=>p()),[p]),[F,w]=o(""),[$,E]=o(""),C=(e,r)=>{r&&!g||s(e)},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},A=()=>{E(""),l("")};return e(oo,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(so,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),x.map(((e,i)=>t(lo,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:A,children:e.map(((e,i)=>t(So,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:F,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,showActiveMonthDaysOnly:b,onSelect:C,onHover:S,onFocus:B,setFocusCell:v,tabIndex:K(e).isSame(D,"day")?0:-1},`day-${i}`)))},i)))]})},Ao=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:g,setFocusCell:b,tabIndex:h})=>{const m=Ja.isDisabledDay(e,l,o,s),f=!m||d,{start:y,end:p}=Ja.getWeekStartEnd(ni.toDayjs(n)),{start:v,end:x}=Ja.getWeekStartEnd(ni.toDayjs(a)),{start:D,end:F}=Ja.getWeekStartEnd(e),w=e.isSame(D,"day"),$=n&&e.isBetween(y,p,"day","[]"),E=a&&e.isBetween(v,x,"day","[]"),C=$&&e.isSame(y)||E&&e.isSame(v),S=$&&e.isSame(p)||E&&e.isSame(x),B=`From ${K(D).format("D MMMM")} to ${K(F).format("D MMMM")}, ${m?"Unavailable":"Available"}`,A=()=>{c(e,!f)},k={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:A,onHover:()=>{u(e.format("YYYY-MM-DD"),!f)},onFocus:()=>{g(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(f&&A());(r=>{let t;const n={ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),b(t.format("YYYY-MM-DD")))})(r)},focusDate:K(i),tabIndex:h,label:B,ariaHidden:!w||void 0,role:w?"button":"none"};return t(Do,Object.assign({},k,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":K().isSame(e,"day")&&!m&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return $&&E?(r="selected-hover-outline",t="selected-hover"):$?(r="selected-outline",t="selected"):E&&(r="hover",t="hover"),r&&(e.labelType=t,C?e.circleLeft=r:e.bgLeft=r,S?e.circleRight=r:e.bgRight=r),e})()))},ko=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,setCalendarDate:b})=>{const h=i(null);u((()=>{if(h.current){const e=h.current;h.current=null,F(e)}}),[r]);const m=f((()=>a&&K(a).isSame(r,"month")?K(a):K().isSame(r,"month")?K().startOf("week"):d&&r.isSame(K(d),"month")?K(d):K(r).startOf("month")),[a,r,d]),p=e=>{const t=K(e);if(Ja.isWithinRange(t,d?K(d):void 0,c?K(c):void 0)){if(!t.isSame(r,"month"))return null==b||b(e),void(h.current=e);F(e)}},v=y((()=>Ja.generateDays(r)),[r]),x=y((()=>m()),[m]),[D,F]=o(""),[w,$]=o(""),E=(e,r)=>{if(r&&!g)return;const t=e.startOf("week");s(t),e&&!K(e).isSame(t,"month")&&$("")},C=(e,r)=>{r&&!g||($(e),l(e))},S=e=>{$(e),l(e)},B=()=>{$(""),l("")};return e(oo,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),$(""),l(""))},"aria-label":"Week selection",children:[v[0].map(((e,r)=>t(so,{"aria-hidden":!0,children:K(e).format("ddd")},`week-day-${r}`))),v.map(((e,i)=>t(lo,{onMouseLeave:B,role:"group",children:e.map(((e,i)=>t(Ao,{date:e,calendarDate:r,selectedDate:a,hoverDate:w,focusDate:D,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:E,onHover:C,onFocus:S,setFocusCell:p,tabIndex:K(e).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},Oo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:h,selectWithinRange:m=!0,initialCalendarDate:f,numberOfDays:y,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const F=i(null),w=i(void 0),$=i(null);p(D,(()=>({reset(){var e;null===(e=F.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=F.current)||void 0===r||r.setCalendarDate(e)},contains(e){var r;return(null===(r=$.current)||void 0===r?void 0:r.contains(e))||!1}})));const E=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=F.current)||void 0===r||r.setCalendarDate(t),S(t)},C=e=>{B(e)},S=e=>{n&&n(e)},B=e=>{a&&a(e)},A=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Co,{ref:$,children:t(io,{ref:F,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:m,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{var r;w.current&&w.current.isSame(e,"month")||(null===(r=F.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),A(e)),w.current=e},initialCalendarDate:f,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const a=null===(n=F.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return t(ko,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,setCalendarDate:a});case"fixed-range":return t(Eo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,numberOfDays:y,setCalendarDate:a});case"single":return t(Bo,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a});default:return t(wo,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:m,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a})}})(r)})})})),Mo=a.forwardRef(((e,r)=>{const{elementWidth:n,setFloatingRef:a,getFloatingProps:i,styles:o}=h(Ta);return t(Ia,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:a,style:o},i(),{children:t(Oo,Object.assign({ref:r},e))}))})),zo=D.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return F`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${vn.Spec["body-size-baseline"]} -
                            ${Fn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Fn["spacing-8"]};
                }
            `}}
`,Yo=D.div`
    width: 100%; // Force next flex item to break to next line
`,jo=D.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Ro=D(W)`
    color: ${pn.icon};
    width: ${vn.Spec["body-size-baseline"]};
    height: ${vn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Fn["spacing-8"]};
    align-self: center;
`,To=D.div`
    position: absolute;
    background: ${e=>e.$error?pn["border-error-focus-strong"]:pn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Fn["spacing-8"]} - (${vn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${xn["duration-350"]} ${xn["ease-standard"]},
        opacity ${xn["duration-350"]} ${xn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${Fn["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,_o=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(zo,{className:i,$wrap:o,children:[t(jo,{"data-id":"range-container-elem1-container",children:s}),t(Ro,{}),o&&t(Yo,{}),t(jo,{"data-id":"range-container-elem2-container",children:l}),t(To,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]})},Io=F`
    outline-offset: -1px;
    outline: ${Dn["width-020"]} ${Dn.solid} ${pn["border-focus"]};
`,Lo=F`
    outline-color: ${pn["border-focus"]};
`,Ho=F`
    outline-color: ${pn["border-disabled"]};
`,Wo=F`
    outline-color: ${pn["border-error-focus"]};
`,Po=D(D.div`
    border: ${Dn["width-010"]} ${Dn.solid} ${pn.border};
    border-radius: ${wn.sm};
    background: ${pn.bg};

    &:focus-within {
        ${Io}
    }
    ${e=>e.$focused&&Io}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Lo}
                }
                ${e.$focused&&Lo}
            `:e.$disabled?F`
                background: ${pn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Ho}
                }
                ${e.$focused&&Ho}
            `:e.$error?F`
                border-color: ${pn["border-error"]};

                &:focus-within {
                    ${Wo}
                }
                ${e.$focused&&Wo}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Fn["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Fn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,No=D.input`
    ${e=>"small"===e.$variant?vn["body-md-regular"]:vn["body-baseline-regular"]}
    color: ${pn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${pn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${pn["text-subtler"]};
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
        outline: ${Dn["width-010"]} ${Dn.solid}
            ${pn["border-focus"]};
        border-radius: ${wn.sm};
    }
`;const Vo=D.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Uo=D.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Ko}, ${Xo} {
                    color: ${pn["text-subtler"]};
                }
            `}}
`,Ko=D(No)`
    background: transparent;
    text-align: center;
`,Zo=D(Ko)`
    width: 2rem;
    margin-right: ${Fn["spacing-4"]};
`,Jo=D(Ko)`
    width: 2.5rem;
`,qo=D(Ko)`
    width: 3rem;
    margin-left: ${Fn["spacing-4"]};
`,Xo=D.span`
    ${vn["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${pn.text};
            `}}
`,Go=D.div`
    ${vn["body-baseline-regular"]}
    background-color: ${pn.bg};
    color: ${pn["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${pn["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;K.extend(Ha);const Qo=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:b,onFocus:h,onBlur:m,hideInputKeyboard:f,inputLabels:y=["Date","Month","Year"]},v)=>{const x=f?"none":"numeric",[D,F,w]=si(""),[$,E,C]=si(""),[S,B,A]=si(""),[k,O]=o("none"),[M,z]=o(!1),Y=i(null),j=i(null),R=i(null),T=i(null),[_,I,L]=U(d);u((()=>{var e;const[r="",t="",n=""]=U(s);F(r),E(t),B(n),r||t||n||!Y.current||!Y.current.contains(document.activeElement)||null===(e=j.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||O("none"),l&&(z(!0),Y.current&&!Y.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))}),[l]),p(v,(()=>({ref:Y,resetPlaceholder(){z(!1)},resetInput(){const[e="",r="",t=""]=U(s);F(e),E(r),B(t)},focusYearRef(){var e;null===(e=T.current)||void 0===e||e.focus()}})),[F,E,B,s]);const H=e=>{var r;e.preventDefault(),null===(r=j.current)||void 0===r||r.focus()},W=e=>{e.target.select();const r=e.target.name;O(r)},P=e=>{const[r,t,n]=a,i={[r]:w.current,[t]:C.current,[n]:A.current},o=e.target.name,s=i[o],l=o!==n?oi.padValue(s,!0):s;switch(o){case r:i[r]=l,F(l);break;case t:i[t]=l,E(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=K(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),Y.current&&!Y.current.contains(e.relatedTarget)&&(O("none"),null==m||m(u||c))},N=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:D,month:$,year:S};switch(n){case a[0]:o.day=i,F(i),2===i.length&&(null===(r=R.current)||void 0===r||r.focus());break;case a[1]:o.month=i,E(i),2===i.length&&(null===(t=T.current)||void 0===t||t.focus());break;case a[2]:o.year=i,B(i)}if(!o.day&&!o.month&&!o.year)return void b("");const s=`${o.year}-${o.month}-${o.day}`;K(s,"YYYY-MM-DD",!0).isValid()&&b(s)},V=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(k===a[1]&&0===$.length&&(null===(r=j.current)||void 0===r||r.focus()),k===a[2]&&0===S.length&&(null===(t=R.current)||void 0===t||t.focus()))};function U(e){if(e){const r=K(new Date(e));return r.isValid()?[oi.padValue(r.date().toString()),oi.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Vo,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(z(!0),Y.current&&!Y.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))},onFocus:e=>{r||(z(!0),l||null==h||h(e))},children:[e(Uo,{ref:Y,$hover:!!d,children:[t(Zo,{ref:j,name:a[0],maxLength:2,value:null!=_?_:D,onFocus:W,onBlur:P,onChange:N,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":y[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[0]||n?"DD":""}),t(Xo,{$inactive:0===D.length,children:"/"}),t(Jo,{ref:R,name:a[1],maxLength:2,value:null!=I?I:$,onFocus:W,onBlur:P,onChange:N,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":y[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[1]||n?"MM":""}),t(Xo,{$inactive:0===$.length,children:"/"}),t(qo,{ref:T,name:a[2],maxLength:4,value:null!=L?L:S,onFocus:W,onBlur:P,onChange:N,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":y[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(Go,{$hide:M,$disabled:r,onMouseDown:H,children:c})})()]})})),es=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},rs=D(Po)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?F`
                    padding: ${Fn["spacing-12"]} 0;
                `:F`
                padding: ${Fn["spacing-12"]} ${Fn["spacing-16"]};
            `}}
`,ts=D.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,ns={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},as=r=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:g,valueEnd:b,onChange:h,onFocus:m,onBlur:y,onYearMonthDisplayChange:p,withButton:x=!0,variant:D="range",numberOfDays:F=7,readOnly:w,id:$,allowDisabledSelection:E,zIndex:C,dropdownRootNode:S}=r,B=P(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[A,k]=o(),[O,M]=o(void 0),z="week"===D,Y="fixed-range"===D,[j,R]=o(!1),[T,_]=o(!1),[{selectedStart:I,selectedEnd:L,currentFocus:H,calendarOpen:W,isStartDirty:N,isEndDirty:V,focused:U},Z]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=v(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&es(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:ns,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:z?"none":Y?"start":r,calendarOpen:!w,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),J=i(!1),q=i(null),X=i(null),G=i(null),Q=i(null),ee=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return ja({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:f((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:q});u((()=>{Z.resetRange({start:ai.sanitizeInput(g),end:ai.sanitizeInput(b)})}),[g,b]),u((()=>{"start"===H?k(I):"end"===H&&L&&k(L)}),[H]);const re=e=>{var r,t,n;"Enter"!==e.code||x||(I&&L?(Z.done({start:I,end:L}),null==h||h(I,L)):(Z.dismiss(),null===(r=q.current)||void 0===r||r.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},te=e=>{var r;if(fe(e))return void(J.current=!0);if(Z.changeStart(e),e&&(null===(r=X.current)||void 0===r||r.setCalendarDate(e)),J.current=!1,!e)return void(x||L||!V||(Z.resetRange({start:"",end:""}),null==h||h("","")));if(!L)return void Z.focus("end");if(K(e).isAfter(L,"day"))Z.reselectEnd();else{if(V)return x?void 0:(Z.done({start:e,end:L}),void(null==h||h(e,L)));Z.focus("end")}},ne=e=>{var r,t,n;if(fe(e))return void(J.current=!0);if(K(e).isBefore(I,"day"))return Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),void Z.reselectEnd();if(Z.changeEnd(e),e&&(null===(t=X.current)||void 0===t||t.setCalendarDate(e)),e){if(I)return x?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),Z.done({start:I,end:e}),void(null==h||h(I,e)));Z.focus("start")}else x||I||!N||(Z.resetRange({start:"",end:""}),null==h||h("",""))},ae=e=>{var r,t;if(fe(e))return void(J.current=!0);if(Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),J.current=!1,!e)return void(x?Z.changeEnd(""):(Z.resetRange({start:"",end:""}),null==h||h("","")));const n=K(e).format("YYYY-MM-DD"),a=K(n).add(F-1,"day").format("YYYY-MM-DD");return Z.changeStart(n),Z.changeEnd(a),J.current=!1,x?void 0:(Z.done({start:n,end:a}),null===(t=G.current)||void 0===t||t.focusYearRef(),void(null==h||h(n,a)))},ie=()=>{(z||Y)&&_(!0),z&&R(!0),w||s||U||(Z.focus("start"),null==m||m())},oe=e=>{var r,t,n,a;const i=e.relatedTarget,o=X.current&&X.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focusable]"))||(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focus-guard]"));(U&&!W&&!s&&!l||W&&!s&&!o&&!l)&&(Z.blur(),_(!1),R(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(a=Q.current)||void 0===a||a.resetPlaceholder(),me())},se=e=>r=>{r.stopPropagation(),w||(Z.focus(e),le(),de(),U||null==m||m())},le=()=>{if(z){const e=ni.toDayjs(I).startOf("week").format("YYYY-MM-DD");R(!0),_(!0),k(e)}},de=()=>{Y&&(_(!0),k(I))},ce=e=>{var r;e&&!J.current||(Z.resetStart(),null===(r=G.current)||void 0===r||r.resetInput())},ue=e=>{var r;e&&!J.current||(Z.resetEnd(),null===(r=Q.current)||void 0===r||r.resetInput())},ge=e=>{switch(D){case"week":(e=>{var r;const t=K(e).startOf("week").format("YYYY-MM-DD"),n=K(e).endOf("week").format("YYYY-MM-DD");if(Z.changeStart(t),Z.changeEnd(n),J.current=!1,!x)null===(r=Q.current)||void 0===r||r.focusYearRef(),Z.done({start:t,end:n}),null==h||h(t,n)})(e);break;case"fixed-range":ae(e);break;default:"start"===H?te(e):"end"===H&&ne(e)}},be=e=>{var r,t,n;switch(null===(r=q.current)||void 0===r||r.focus(),e){case"reset":Z.cancel();break;case"confirmed":if(Z.done({start:I,end:L}),null==h||h(I,L),z)break;ye(I,L)&&("range"===D?null===(t=Q.current)||void 0===t||t.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{M(e)},me=()=>{y&&y()},fe=e=>!E&&e&&ai.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),ye=(e,r)=>!(!e||!r)&&K(e).isBefore(r,"day"),pe=e=>{let r={start:void 0,end:void 0};switch(D){case"range":r={start:"start"===H?O:void 0,end:"end"===H?O:void 0};break;case"week":if(!O)return;r={start:K(O).startOf("week").format("YYYY-MM-DD"),end:K(O).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!O)return;r={start:K(O).format("YYYY-MM-DD"),end:K(O).add(F-1,"day").format("YYYY-MM-DD")}}return r[e]};return t(_a,{enabled:!w&&!s,isOpen:W,onClose:()=>{var e,r;Z.blur(),R(!1),_(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),me()},onDismiss:()=>{var e,r,t;Z.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder()},renderElement:()=>t(rs,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ie,onBlur:oe,$focused:U,$disabled:s,$readOnly:w,$error:d,$wrap:ee,id:$,"data-testid":B["data-testid"],"aria-disabled":s,onKeyDown:re},B,{children:e(_o,{currentActive:H,wrap:ee,error:d,children:[t(ts,{$wrap:ee,children:t(Qo,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:I,disabled:s,readOnly:j||w,focused:"start"===H,hoverValue:pe("start"),onChange:Y?ae:te,onFocus:se("start"),onBlur:ce,hideInputKeyboard:c})}),t(ts,{$wrap:ee,children:t(Qo,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:L,disabled:s,readOnly:T||w,focused:"end"===H,hoverValue:pe("end"),onChange:ne,onFocus:se("end"),onBlur:ue,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:e})=>t(Mo,{ref:X,variant:D,initialCalendarDate:A,withButton:x,value:I,endValue:L,selectWithinRange:N||V,currentFocus:H,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:E,onSelect:ge,onDismiss:be,onHover:he,onYearMonthDisplayChange:p,numberOfDays:F,width:e,isFocusable:!w&&!s}),customZIndex:C,offset:16,rootNode:S})};export{as as DateRangeInput};
//# sourceMappingURL=index.js.map
