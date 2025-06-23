import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useCallback as b,useMemo as h,useImperativeHandle as m,useReducer as f}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import p,{css as v,keyframes as x,useTheme as w}from"styled-components";import{useFloatingTree as D,useFloating as F,autoUpdate as $,offset as E,flip as S,shift as C,limitShift as B,size as k,useTransitionStyles as A,useClick as O,useDismiss as M,useInteractions as z,FloatingPortal as Y,FloatingFocusManager as j}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as R}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as I}from"@lifesg/react-icons";function H(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P={exports:{}};P.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",D=function(e){return e instanceof S||!(!e||!e[w])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(D(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=p;E.l=F,E.i=D,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,b){var h,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),C=S.prototype;return $.prototype=C,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){C[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,S,$),e.$i=!0),$},$.locale=F,$.isDayjs=D,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var N=W(P.exports),V=Array.isArray,U="object"==typeof L&&L&&L.Object===Object&&L,Z="object"==typeof self&&self&&self.Object===Object&&self,K=U||Z||Function("return this")(),J=K.Symbol,q=J,X=Object.prototype,G=X.hasOwnProperty,Q=X.toString,ee=q?q.toStringTag:void 0;var re=function(e){var r=G.call(e,ee),t=e[ee];try{e[ee]=void 0;var n=!0}catch(e){}var a=Q.call(e);return n&&(r?e[ee]=t:delete e[ee]),a},te=Object.prototype.toString;var ne=re,ae=function(e){return te.call(e)},ie=J?J.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ie&&ie in Object(e)?ne(e):ae(e)};var se=oe,le=function(e){return null!=e&&"object"==typeof e};var de=function(e){return"symbol"==typeof e||le(e)&&"[object Symbol]"==se(e)},ce=V,ue=de,ge=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,be=/^\w*$/;var he=function(e,r){if(ce(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ue(e))||(be.test(e)||!ge.test(e)||null!=r&&e in Object(r))};var me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},fe=oe,ye=me;var pe,ve=function(e){if(!ye(e))return!1;var r=fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},xe=K["__core-js_shared__"],we=(pe=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var De=function(e){return!!we&&we in e},Fe=Function.prototype.toString;var $e=ve,Ee=De,Se=me,Ce=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Be=/^\[object .+?Constructor\]$/,ke=Function.prototype,Ae=Object.prototype,Oe=ke.toString,Me=Ae.hasOwnProperty,ze=RegExp("^"+Oe.call(Me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},je=function(e){return!(!Se(e)||Ee(e))&&($e(e)?ze:Be).test(Ce(e))},Te=Ye;var Re=function(e,r){var t=Te(e,r);return je(t)?t:void 0},_e=Re(Object,"create"),Ie=_e;var He=function(){this.__data__=Ie?Ie(null):{},this.size=0};var Le=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},We=_e,Pe=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;if(We){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Pe.call(r,e)?r[e]:void 0},Ve=_e,Ue=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;return Ve?void 0!==r[e]:Ue.call(r,e)},Ke=_e;var Je=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ke&&void 0===r?"__lodash_hash_undefined__":r,this},qe=He,Xe=Le,Ge=Ne,Qe=Ze,er=Je;function rr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}rr.prototype.clear=qe,rr.prototype.delete=Xe,rr.prototype.get=Ge,rr.prototype.has=Qe,rr.prototype.set=er;var tr=rr;var nr=function(){this.__data__=[],this.size=0};var ar=function(e,r){return e===r||e!=e&&r!=r};var ir=function(e,r){for(var t=e.length;t--;)if(ar(e[t][0],r))return t;return-1},or=ir,sr=Array.prototype.splice;var lr=function(e){var r=this.__data__,t=or(r,e);return!(t<0)&&(t==r.length-1?r.pop():sr.call(r,t,1),--this.size,!0)},dr=ir;var cr=function(e){var r=this.__data__,t=dr(r,e);return t<0?void 0:r[t][1]},ur=ir;var gr=function(e){return ur(this.__data__,e)>-1},br=ir;var hr=function(e,r){var t=this.__data__,n=br(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},mr=nr,fr=lr,yr=cr,pr=gr,vr=hr;function xr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}xr.prototype.clear=mr,xr.prototype.delete=fr,xr.prototype.get=yr,xr.prototype.has=pr,xr.prototype.set=vr;var wr=xr,Dr=Re(K,"Map"),Fr=tr,$r=wr,Er=Dr;var Sr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Cr=function(e,r){var t=e.__data__;return Sr(r)?t["string"==typeof r?"string":"hash"]:t.map},Br=Cr;var kr=function(e){var r=Br(this,e).delete(e);return this.size-=r?1:0,r},Ar=Cr;var Or=function(e){return Ar(this,e).get(e)},Mr=Cr;var zr=function(e){return Mr(this,e).has(e)},Yr=Cr;var jr=function(e,r){var t=Yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Tr=function(){this.size=0,this.__data__={hash:new Fr,map:new(Er||$r),string:new Fr}},Rr=kr,_r=Or,Ir=zr,Hr=jr;function Lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Lr.prototype.clear=Tr,Lr.prototype.delete=Rr,Lr.prototype.get=_r,Lr.prototype.has=Ir,Lr.prototype.set=Hr;var Wr=Lr;function Pr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Pr.Cache||Wr),t}Pr.Cache=Wr;var Nr=Pr;var Vr=function(e){var r=Nr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zr=/\\(\\)?/g,Kr=Vr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ur,(function(e,t,n,a){r.push(n?a.replace(Zr,"$1"):t||e)})),r}));var Jr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},qr=V,Xr=de,Gr=J?J.prototype:void 0,Qr=Gr?Gr.toString:void 0;var et=function e(r){if("string"==typeof r)return r;if(qr(r))return Jr(r,e)+"";if(Xr(r))return Qr?Qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},rt=et;var tt=V,nt=he,at=Kr,it=function(e){return null==e?"":rt(e)};var ot=de;var st=function(e,r){return tt(e)?e:nt(e,r)?[e]:at(it(e))},lt=function(e){if("string"==typeof e||ot(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var dt=function(e,r){for(var t=0,n=(r=st(r,e)).length;null!=e&&t<n;)e=e[lt(r[t++])];return t&&t==n?e:void 0};var ct=W((function(e,r,t){var n=null==e?void 0:dt(e,r);return void 0===n?t:n}));const ut=(e,r,t)=>ct(t,r)||ct(e,r),gt=(e,r)=>{const t=r||e.defaultValue;return ct(e.collections,t)},bt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ht=e=>r=>{var t;const n=r.theme,a=gt(bt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ut(a,e,n.overrides.border)}px`:`${a[e]}px`},mt={"width-005":ht("width-005"),"width-010":ht("width-010"),"width-020":ht("width-020"),"width-040":ht("width-040"),solid:(ft="solid",e=>{var r;const t=e.theme,n=gt(bt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ut(n,ft,t.overrides.border):n[ft];return"function"==typeof a?a(e):a})};var ft;const yt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={collections:{lifesg:vt,bookingsg:yt,rbs:Ft,mylegacy:xt,ccube:pt,oneservice:wt,pa:Dt,a11yplayground:$t},defaultValue:"lifesg"},St={collections:{lifesg:vt,bookingsg:yt,rbs:Ft,mylegacy:xt,ccube:pt,oneservice:wt,pa:Dt,a11yplayground:$t},defaultValue:"lifesg"},Ct=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=gt(a?St:Et,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?ut(i,e,s):i[e]},Bt={"brand-10":Ct("brand-10"),"brand-20":Ct("brand-20"),"brand-30":Ct("brand-30"),"brand-40":Ct("brand-40"),"brand-50":Ct("brand-50"),"brand-60":Ct("brand-60"),"brand-70":Ct("brand-70"),"brand-80":Ct("brand-80"),"brand-90":Ct("brand-90"),"brand-95":Ct("brand-95"),"brand-100":Ct("brand-100"),"primary-10":Ct("primary-10"),"primary-20":Ct("primary-20"),"primary-30":Ct("primary-30"),"primary-40":Ct("primary-40"),"primary-50":Ct("primary-50"),"primary-60":Ct("primary-60"),"primary-70":Ct("primary-70"),"primary-80":Ct("primary-80"),"primary-90":Ct("primary-90"),"primary-95":Ct("primary-95"),"primary-100":Ct("primary-100"),"secondary-10":Ct("secondary-10"),"secondary-20":Ct("secondary-20"),"secondary-30":Ct("secondary-30"),"secondary-40":Ct("secondary-40"),"secondary-50":Ct("secondary-50"),"secondary-60":Ct("secondary-60"),"secondary-70":Ct("secondary-70"),"secondary-80":Ct("secondary-80"),"secondary-90":Ct("secondary-90"),"secondary-95":Ct("secondary-95"),"secondary-100":Ct("secondary-100"),"neutral-10":Ct("neutral-10"),"neutral-20":Ct("neutral-20"),"neutral-30":Ct("neutral-30"),"neutral-40":Ct("neutral-40"),"neutral-50":Ct("neutral-50"),"neutral-60":Ct("neutral-60"),"neutral-70":Ct("neutral-70"),"neutral-80":Ct("neutral-80"),"neutral-90":Ct("neutral-90"),"neutral-95":Ct("neutral-95"),"neutral-100":Ct("neutral-100"),"success-10":Ct("success-10"),"success-20":Ct("success-20"),"success-30":Ct("success-30"),"success-40":Ct("success-40"),"success-50":Ct("success-50"),"success-60":Ct("success-60"),"success-70":Ct("success-70"),"success-80":Ct("success-80"),"success-90":Ct("success-90"),"success-95":Ct("success-95"),"success-100":Ct("success-100"),"warning-10":Ct("warning-10"),"warning-20":Ct("warning-20"),"warning-30":Ct("warning-30"),"warning-40":Ct("warning-40"),"warning-50":Ct("warning-50"),"warning-60":Ct("warning-60"),"warning-70":Ct("warning-70"),"warning-80":Ct("warning-80"),"warning-90":Ct("warning-90"),"warning-95":Ct("warning-95"),"warning-100":Ct("warning-100"),"error-10":Ct("error-10"),"error-20":Ct("error-20"),"error-30":Ct("error-30"),"error-40":Ct("error-40"),"error-50":Ct("error-50"),"error-60":Ct("error-60"),"error-70":Ct("error-70"),"error-80":Ct("error-80"),"error-90":Ct("error-90"),"error-95":Ct("error-95"),"error-100":Ct("error-100"),"info-10":Ct("info-10"),"info-20":Ct("info-20"),"info-30":Ct("info-30"),"info-40":Ct("info-40"),"info-50":Ct("info-50"),"info-60":Ct("info-60"),"info-70":Ct("info-70"),"info-80":Ct("info-80"),"info-90":Ct("info-90"),"info-95":Ct("info-95"),"info-100":Ct("info-100"),white:Ct("white"),black:Ct("black"),"primary-inverse":Ct("primary-inverse")},kt={text:Ct("neutral-20"),"text-subtle":Ct("neutral-30"),"text-subtler":Ct("neutral-50"),"text-subtlest":Ct("neutral-60"),"text-primary":Ct("primary-50"),"text-hover":Ct("primary-40"),"text-selected":Ct("primary-50"),"text-selected-hover":Ct("primary-40"),"text-disabled":Ct("neutral-50"),"text-disabled-subtle":Ct("neutral-60"),"text-disabled-subtlest":Ct("neutral-80"),"text-selected-disabled":Ct("neutral-20"),"text-success":Ct("success-40"),"text-warning":Ct("warning-40"),"text-error":Ct("error-40"),"text-info":Ct("info-40"),"text-inverse":Ct("white"),icon:Ct("neutral-50"),"icon-subtle":Ct("neutral-60"),"icon-strongest":Ct("neutral-20"),"icon-primary":Ct("primary-50"),"icon-primary-subtle":Ct("primary-60"),"icon-primary-subtlest":Ct("primary-70"),"icon-hover":Ct("primary-40"),"icon-selected":Ct("primary-50"),"icon-selected-hover":Ct("primary-40"),"icon-disabled":Ct("neutral-50"),"icon-disabled-subtle":Ct("neutral-60"),"icon-selected-disabled":Ct("neutral-60"),"icon-success":Ct("success-50"),"icon-warning":Ct("warning-60"),"icon-error":Ct("error-50"),"icon-error-strong":Ct("error-40"),"icon-info":Ct("info-50"),"icon-inverse":Ct("white"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-90"),"border-strong":Ct("neutral-70"),"border-stronger":Ct("neutral-50"),"border-primary":Ct("primary-50"),"border-primary-subtle":Ct("primary-60"),"border-hover":Ct("primary-90"),"border-hover-strong":Ct("primary-60"),"border-selected":Ct("primary-50"),"border-selected-subtle":Ct("primary-70"),"border-selected-subtlest":Ct("primary-90"),"border-selected-hover":Ct("primary-40"),"border-focus":Ct("primary-60"),"border-focus-strong":Ct("primary-50"),"border-disabled":Ct("neutral-90"),"border-selected-disabled":Ct("neutral-70"),"border-success":Ct("success-60"),"border-warning":Ct("warning-60"),"border-error":Ct("error-60"),"border-error-focus":Ct("error-60"),"border-error-focus-strong":Ct("error-40"),"border-error-strong":Ct("error-40"),"border-info":Ct("info-60"),bg:Ct("white"),"bg-strong":Ct("neutral-100"),"bg-stronger":Ct("neutral-95"),"bg-strongest":Ct("neutral-90"),"bg-hover":Ct("primary-95"),"bg-hover-strong":Ct("primary-90"),"bg-hover-subtle":Ct("primary-100"),"bg-hover-neutral":Ct("neutral-100"),"bg-hover-neutral-strong":Ct("neutral-90"),"bg-selected":Ct("primary-95"),"bg-selected-hover":Ct("primary-90"),"bg-selected-strong":Ct("primary-90"),"bg-selected-stronger":Ct("primary-70"),"bg-selected-strongest":Ct("primary-50"),"bg-selected-strongest-hover":Ct("primary-40"),"bg-disabled":Ct("neutral-95"),"bg-selected-disabled":Ct("neutral-95"),"bg-selected-stronger-disabled":Ct("neutral-70"),"bg-success":Ct("success-100"),"bg-success-hover":Ct("success-95"),"bg-success-strong":Ct("success-50"),"bg-success-strong-hover":Ct("success-40"),"bg-warning":Ct("warning-100"),"bg-warning-hover":Ct("warning-95"),"bg-warning-strong":Ct("warning-50"),"bg-warning-strong-hover":Ct("warning-40"),"bg-info":Ct("info-100"),"bg-info-hover":Ct("info-95"),"bg-info-strong":Ct("info-50"),"bg-info-strong-hover":Ct("info-40"),"bg-error":Ct("error-100"),"bg-error-hover":Ct("error-95"),"bg-error-strong":Ct("error-50"),"bg-error-strong-hover":Ct("error-40"),"bg-inverse":Ct("neutral-20"),"bg-inverse-subtle":Ct("neutral-30"),"bg-inverse-subtler":Ct("neutral-50"),"bg-inverse-subtlest":Ct("neutral-60"),"bg-inverse-hover":Ct("neutral-40"),"bg-primary":Ct("primary-50"),"bg-primary-subtle":Ct("primary-60"),"bg-primary-subtler":Ct("primary-95"),"bg-primary-subtlest":Ct("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ct("primary-40"),"bg-primary-subtlest-hover":Ct("primary-90"),"bg-primary-subtlest-selected":Ct("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ct("primary-50"),"hyperlink-hover":Ct("primary-40"),"hyperlink-visited":Ct("primary-40"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("black"),"focus-ring-inverse":Ct("white")},At={text:Ct("neutral-100"),"text-subtle":Ct("neutral-80"),"text-subtler":Ct("neutral-60"),"text-subtlest":Ct("neutral-50"),"text-primary":Ct("primary-60"),"text-hover":Ct("primary-70"),"text-selected":Ct("primary-60"),"text-selected-hover":Ct("primary-70"),"text-disabled":Ct("neutral-60"),"text-disabled-subtle":Ct("neutral-50"),"text-disabled-subtlest":Ct("neutral-30"),"text-selected-disabled":Ct("neutral-90"),"text-success":Ct("success-70"),"text-warning":Ct("warning-70"),"text-error":Ct("error-70"),"text-info":Ct("info-70"),"text-inverse":Ct("black"),icon:Ct("neutral-60"),"icon-subtle":Ct("neutral-50"),"icon-strongest":Ct("neutral-90"),"icon-primary":Ct("primary-60"),"icon-primary-subtle":Ct("primary-50"),"icon-primary-subtlest":Ct("primary-40"),"icon-hover":Ct("primary-70"),"icon-selected":Ct("primary-60"),"icon-selected-hover":Ct("primary-70"),"icon-disabled":Ct("neutral-60"),"icon-disabled-subtle":Ct("neutral-50"),"icon-selected-disabled":Ct("neutral-50"),"icon-success":Ct("success-60"),"icon-warning":Ct("warning-50"),"icon-error":Ct("error-60"),"icon-error-strong":Ct("error-70"),"icon-info":Ct("info-60"),"icon-inverse":Ct("black"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-20"),"border-strong":Ct("neutral-40"),"border-stronger":Ct("neutral-60"),"border-primary":Ct("primary-60"),"border-primary-subtle":Ct("primary-50"),"border-hover":Ct("primary-20"),"border-hover-strong":Ct("primary-50"),"border-selected":Ct("primary-60"),"border-selected-subtle":Ct("primary-40"),"border-selected-subtlest":Ct("primary-20"),"border-selected-hover":Ct("primary-70"),"border-focus":Ct("primary-50"),"border-focus-strong":Ct("primary-60"),"border-disabled":Ct("neutral-20"),"border-selected-disabled":Ct("neutral-40"),"border-success":Ct("success-50"),"border-warning":Ct("warning-50"),"border-error":Ct("error-50"),"border-error-focus":Ct("error-50"),"border-error-focus-strong":Ct("error-70"),"border-error-strong":Ct("error-70"),"border-info":Ct("info-50"),bg:Ct("black"),"bg-strong":Ct("neutral-10"),"bg-stronger":Ct("neutral-20"),"bg-strongest":Ct("neutral-20"),"bg-hover":Ct("primary-20"),"bg-hover-strong":Ct("primary-20"),"bg-hover-subtle":Ct("primary-10"),"bg-hover-neutral":Ct("neutral-10"),"bg-hover-neutral-strong":Ct("neutral-20"),"bg-selected":Ct("primary-20"),"bg-selected-hover":Ct("primary-20"),"bg-selected-strong":Ct("primary-20"),"bg-selected-stronger":Ct("primary-40"),"bg-selected-strongest":Ct("primary-60"),"bg-selected-strongest-hover":Ct("primary-70"),"bg-disabled":Ct("neutral-20"),"bg-selected-disabled":Ct("neutral-20"),"bg-selected-stronger-disabled":Ct("neutral-40"),"bg-success":Ct("success-10"),"bg-success-hover":Ct("success-20"),"bg-success-strong":Ct("success-60"),"bg-success-strong-hover":Ct("success-70"),"bg-warning":Ct("warning-10"),"bg-warning-hover":Ct("warning-20"),"bg-warning-strong":Ct("warning-60"),"bg-warning-strong-hover":Ct("warning-70"),"bg-info":Ct("info-10"),"bg-info-hover":Ct("info-20"),"bg-info-strong":Ct("info-60"),"bg-info-strong-hover":Ct("info-70"),"bg-error":Ct("error-10"),"bg-error-hover":Ct("error-20"),"bg-error-strong":Ct("error-60"),"bg-error-strong-hover":Ct("error-70"),"bg-inverse":Ct("neutral-90"),"bg-inverse-subtle":Ct("neutral-80"),"bg-inverse-subtler":Ct("neutral-60"),"bg-inverse-subtlest":Ct("neutral-50"),"bg-inverse-hover":Ct("neutral-70"),"bg-primary":Ct("primary-60"),"bg-primary-subtle":Ct("primary-50"),"bg-primary-subtler":Ct("primary-20"),"bg-primary-subtlest":Ct("primary-10"),"bg-available":"#185339","bg-primary-hover":Ct("primary-70"),"bg-primary-subtlest-hover":Ct("primary-20"),"bg-primary-subtlest-selected":Ct("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ct("primary-60"),"hyperlink-hover":Ct("primary-70"),"hyperlink-visited":Ct("primary-70"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("primary-60"),"focus-ring-inverse":Ct("black")},Ot={text:Ct("neutral-30"),"text-subtle":Ct("neutral-40"),"text-subtler":Ct("neutral-50"),"text-subtlest":Ct("neutral-70"),"text-primary":Ct("neutral-10"),"text-hover":Ct("neutral-70"),"text-selected":Ct("neutral-20"),"text-selected-hover":Ct("neutral-10"),"text-disabled":Ct("neutral-50"),"text-disabled-subtle":Ct("neutral-60"),"text-disabled-subtlest":Ct("neutral-80"),"text-selected-disabled":Ct("neutral-40"),"text-success":Ct("success-40"),"text-warning":Ct("warning-40"),"text-error":Ct("brand-30"),"text-info":Ct("neutral-40"),"text-inverse":Ct("neutral-100"),icon:Ct("neutral-40"),"icon-subtle":Ct("neutral-50"),"icon-strongest":Ct("neutral-10"),"icon-primary":Ct("neutral-10"),"icon-primary-subtle":Ct("neutral-30"),"icon-primary-subtlest":Ct("neutral-60"),"icon-hover":Ct("neutral-70"),"icon-selected":Ct("brand-20"),"icon-selected-hover":Ct("brand-10"),"icon-disabled":Ct("neutral-50"),"icon-disabled-subtle":Ct("neutral-60"),"icon-selected-disabled":Ct("neutral-40"),"icon-success":Ct("success-40"),"icon-warning":Ct("warning-60"),"icon-error":Ct("brand-30"),"icon-error-strong":Ct("brand-10"),"icon-info":Ct("neutral-40"),"icon-inverse":Ct("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ct("neutral-90"),"border-strong":Ct("neutral-30"),"border-stronger":Ct("neutral-20"),"border-primary":Ct("neutral-40"),"border-primary-subtle":Ct("neutral-60"),"border-hover":Ct("neutral-80"),"border-hover-strong":Ct("neutral-10"),"border-selected":Ct("brand-20"),"border-selected-subtle":Ct("neutral-40"),"border-selected-subtlest":Ct("neutral-70"),"border-selected-hover":Ct("neutral-10"),"border-focus":Ct("neutral-20"),"border-focus-strong":Ct("neutral-10"),"border-disabled":Ct("neutral-90"),"border-selected-disabled":Ct("neutral-80"),"border-success":Ct("success-40"),"border-warning":Ct("warning-60"),"border-error":Ct("brand-30"),"border-error-focus":Ct("brand-20"),"border-error-focus-strong":Ct("brand-10"),"border-error-strong":Ct("brand-20"),"border-info":Ct("neutral-40"),bg:Ct("neutral-100"),"bg-strong":Ct("neutral-95"),"bg-stronger":Ct("neutral-90"),"bg-strongest":Ct("neutral-80"),"bg-hover":Ct("brand-90"),"bg-hover-strong":Ct("brand-80"),"bg-hover-subtle":Ct("neutral-90"),"bg-hover-neutral":Ct("neutral-90"),"bg-hover-neutral-strong":Ct("neutral-90"),"bg-selected":Ct("brand-100"),"bg-selected-hover":Ct("brand-30"),"bg-selected-strong":Ct("brand-50"),"bg-selected-stronger":Ct("brand-40"),"bg-selected-strongest":Ct("brand-20"),"bg-selected-strongest-hover":Ct("brand-10"),"bg-disabled":Ct("neutral-90"),"bg-selected-disabled":Ct("neutral-90"),"bg-selected-stronger-disabled":Ct("neutral-80"),"bg-success":Ct("success-100"),"bg-success-hover":Ct("success-95"),"bg-success-strong":Ct("success-50"),"bg-success-strong-hover":Ct("success-40"),"bg-warning":Ct("warning-100"),"bg-warning-hover":Ct("warning-95"),"bg-warning-strong":Ct("warning-50"),"bg-warning-strong-hover":Ct("warning-40"),"bg-info":Ct("neutral-95"),"bg-info-hover":Ct("info-95"),"bg-info-strong":Ct("info-50"),"bg-info-strong-hover":Ct("info-40"),"bg-error":Ct("brand-100"),"bg-error-hover":Ct("error-95"),"bg-error-strong":Ct("error-50"),"bg-error-strong-hover":Ct("error-40"),"bg-inverse":Ct("neutral-40"),"bg-inverse-subtle":Ct("neutral-60"),"bg-inverse-subtler":Ct("neutral-70"),"bg-inverse-subtlest":Ct("neutral-80"),"bg-inverse-hover":Ct("neutral-30"),"bg-primary":Ct("brand-20"),"bg-primary-subtle":Ct("brand-60"),"bg-primary-subtler":Ct("brand-80"),"bg-primary-subtlest":Ct("brand-100"),"bg-available":Ct("success-60"),"bg-primary-hover":Ct("brand-10"),"bg-primary-subtlest-hover":Ct("brand-80"),"bg-primary-subtlest-selected":Ct("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ct("neutral-10"),"hyperlink-hover":Ct("neutral-40"),"hyperlink-visited":Ct("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ct("black"),"focus-ring-inverse":Ct("white")},Mt={text:Ct("neutral-20"),"text-subtle":Ct("neutral-30"),"text-subtler":Ct("neutral-50"),"text-subtlest":Ct("neutral-60"),"text-primary":Ct("primary-50"),"text-hover":Ct("primary-40"),"text-selected":Ct("primary-50"),"text-selected-hover":Ct("primary-40"),"text-disabled":Ct("neutral-50"),"text-disabled-subtle":Ct("neutral-60"),"text-disabled-subtlest":Ct("neutral-80"),"text-selected-disabled":Ct("neutral-20"),"text-success":Ct("success-40"),"text-warning":Ct("warning-40"),"text-error":Ct("error-40"),"text-info":Ct("info-40"),"text-inverse":Ct("white"),icon:Ct("neutral-50"),"icon-subtle":Ct("neutral-60"),"icon-strongest":Ct("neutral-20"),"icon-primary":Ct("primary-50"),"icon-primary-subtle":Ct("primary-60"),"icon-primary-subtlest":Ct("primary-70"),"icon-hover":Ct("primary-40"),"icon-selected":Ct("primary-50"),"icon-selected-hover":Ct("primary-40"),"icon-disabled":Ct("neutral-50"),"icon-disabled-subtle":Ct("neutral-60"),"icon-selected-disabled":Ct("neutral-60"),"icon-success":Ct("success-50"),"icon-warning":Ct("warning-60"),"icon-error":Ct("error-50"),"icon-error-strong":Ct("error-40"),"icon-info":Ct("info-50"),"icon-inverse":Ct("white"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-90"),"border-strong":Ct("neutral-70"),"border-stronger":Ct("neutral-50"),"border-primary":Ct("primary-50"),"border-primary-subtle":Ct("primary-60"),"border-hover":Ct("primary-90"),"border-hover-strong":Ct("primary-60"),"border-selected":Ct("primary-50"),"border-selected-subtle":Ct("primary-70"),"border-selected-subtlest":Ct("primary-90"),"border-selected-hover":Ct("primary-40"),"border-focus":Ct("primary-60"),"border-focus-strong":Ct("primary-50"),"border-disabled":Ct("neutral-90"),"border-selected-disabled":Ct("neutral-70"),"border-success":Ct("success-60"),"border-warning":Ct("warning-60"),"border-error":Ct("error-60"),"border-error-focus":Ct("error-60"),"border-error-focus-strong":Ct("error-40"),"border-error-strong":Ct("error-40"),"border-info":Ct("info-60"),bg:Ct("white"),"bg-strong":Ct("neutral-100"),"bg-stronger":Ct("neutral-95"),"bg-strongest":Ct("neutral-90"),"bg-hover":Ct("primary-95"),"bg-hover-strong":Ct("primary-90"),"bg-hover-subtle":Ct("primary-100"),"bg-hover-neutral":Ct("neutral-100"),"bg-hover-neutral-strong":Ct("neutral-90"),"bg-selected":Ct("primary-95"),"bg-selected-hover":Ct("primary-90"),"bg-selected-strong":Ct("primary-90"),"bg-selected-stronger":Ct("primary-70"),"bg-selected-strongest":Ct("primary-50"),"bg-selected-strongest-hover":Ct("primary-40"),"bg-disabled":Ct("neutral-95"),"bg-selected-disabled":Ct("neutral-95"),"bg-selected-stronger-disabled":Ct("neutral-70"),"bg-success":Ct("success-100"),"bg-success-hover":Ct("success-95"),"bg-success-strong":Ct("success-50"),"bg-success-strong-hover":Ct("success-40"),"bg-warning":Ct("warning-100"),"bg-warning-hover":Ct("warning-95"),"bg-warning-strong":Ct("warning-50"),"bg-warning-strong-hover":Ct("warning-40"),"bg-info":Ct("info-100"),"bg-info-hover":Ct("info-95"),"bg-info-strong":Ct("info-50"),"bg-info-strong-hover":Ct("info-40"),"bg-error":Ct("error-100"),"bg-error-hover":Ct("error-95"),"bg-error-strong":Ct("error-50"),"bg-error-strong-hover":Ct("error-40"),"bg-inverse":Ct("neutral-20"),"bg-inverse-subtle":Ct("neutral-30"),"bg-inverse-subtler":Ct("neutral-50"),"bg-inverse-subtlest":Ct("neutral-60"),"bg-inverse-hover":Ct("neutral-40"),"bg-primary":Ct("primary-50"),"bg-primary-subtle":Ct("primary-60"),"bg-primary-subtler":Ct("primary-95"),"bg-primary-subtlest":Ct("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ct("primary-40"),"bg-primary-subtlest-hover":Ct("primary-90"),"bg-primary-subtlest-selected":Ct("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ct("primary-50"),"hyperlink-hover":Ct("primary-40"),"hyperlink-visited":Ct("primary-40"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("black"),"focus-ring-inverse":Ct("white")},zt={text:Ct("neutral-100"),"text-subtle":Ct("neutral-80"),"text-subtler":Ct("neutral-60"),"text-subtlest":Ct("neutral-50"),"text-primary":Ct("primary-60"),"text-hover":Ct("primary-70"),"text-selected":Ct("primary-60"),"text-selected-hover":Ct("primary-70"),"text-disabled":Ct("neutral-60"),"text-disabled-subtle":Ct("neutral-50"),"text-disabled-subtlest":Ct("neutral-30"),"text-selected-disabled":Ct("neutral-90"),"text-success":Ct("success-70"),"text-warning":Ct("warning-70"),"text-error":Ct("error-70"),"text-info":Ct("info-70"),"text-inverse":Ct("black"),icon:Ct("neutral-60"),"icon-subtle":Ct("neutral-50"),"icon-strongest":Ct("neutral-90"),"icon-primary":Ct("primary-60"),"icon-primary-subtle":Ct("primary-50"),"icon-primary-subtlest":Ct("primary-40"),"icon-hover":Ct("primary-70"),"icon-selected":Ct("primary-60"),"icon-selected-hover":Ct("primary-70"),"icon-disabled":Ct("neutral-60"),"icon-disabled-subtle":Ct("neutral-50"),"icon-selected-disabled":Ct("neutral-50"),"icon-success":Ct("success-60"),"icon-warning":Ct("warning-50"),"icon-error":Ct("error-60"),"icon-error-strong":Ct("error-70"),"icon-info":Ct("info-60"),"icon-inverse":Ct("black"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-20"),"border-strong":Ct("neutral-40"),"border-stronger":Ct("neutral-60"),"border-primary":Ct("primary-60"),"border-primary-subtle":Ct("primary-50"),"border-hover":Ct("primary-20"),"border-hover-strong":Ct("primary-50"),"border-selected":Ct("primary-60"),"border-selected-subtle":Ct("primary-40"),"border-selected-subtlest":Ct("primary-20"),"border-selected-hover":Ct("primary-70"),"border-focus":Ct("primary-50"),"border-focus-strong":Ct("primary-60"),"border-disabled":Ct("neutral-20"),"border-selected-disabled":Ct("neutral-40"),"border-success":Ct("success-50"),"border-warning":Ct("warning-50"),"border-error":Ct("error-50"),"border-error-focus":Ct("error-50"),"border-error-focus-strong":Ct("error-70"),"border-error-strong":Ct("error-70"),"border-info":Ct("info-50"),bg:Ct("black"),"bg-strong":Ct("neutral-10"),"bg-stronger":Ct("neutral-20"),"bg-strongest":Ct("neutral-20"),"bg-hover":Ct("primary-20"),"bg-hover-strong":Ct("primary-20"),"bg-hover-subtle":Ct("primary-10"),"bg-hover-neutral":Ct("neutral-10"),"bg-hover-neutral-strong":Ct("neutral-20"),"bg-selected":Ct("primary-20"),"bg-selected-hover":Ct("primary-20"),"bg-selected-strong":Ct("primary-20"),"bg-selected-stronger":Ct("primary-40"),"bg-selected-strongest":Ct("primary-60"),"bg-selected-strongest-hover":Ct("primary-70"),"bg-disabled":Ct("neutral-20"),"bg-selected-disabled":Ct("neutral-20"),"bg-selected-stronger-disabled":Ct("neutral-40"),"bg-success":Ct("success-10"),"bg-success-hover":Ct("success-20"),"bg-success-strong":Ct("success-60"),"bg-success-strong-hover":Ct("success-70"),"bg-warning":Ct("warning-10"),"bg-warning-hover":Ct("warning-20"),"bg-warning-strong":Ct("warning-60"),"bg-warning-strong-hover":Ct("warning-70"),"bg-info":Ct("info-10"),"bg-info-hover":Ct("info-20"),"bg-info-strong":Ct("info-60"),"bg-info-strong-hover":Ct("info-70"),"bg-error":Ct("error-10"),"bg-error-hover":Ct("error-20"),"bg-error-strong":Ct("error-60"),"bg-error-strong-hover":Ct("error-70"),"bg-inverse":Ct("neutral-90"),"bg-inverse-subtle":Ct("neutral-80"),"bg-inverse-subtler":Ct("neutral-60"),"bg-inverse-subtlest":Ct("neutral-50"),"bg-inverse-hover":Ct("neutral-70"),"bg-primary":Ct("primary-60"),"bg-primary-subtle":Ct("primary-50"),"bg-primary-subtler":Ct("primary-20"),"bg-primary-subtlest":Ct("primary-10"),"bg-available":"#185339","bg-primary-hover":Ct("primary-70"),"bg-primary-subtlest-hover":Ct("primary-20"),"bg-primary-subtlest-selected":Ct("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ct("primary-60"),"hyperlink-hover":Ct("primary-70"),"hyperlink-visited":Ct("primary-70"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("primary-60"),"focus-ring-inverse":Ct("black")},Yt={collections:{lifesg:kt,bookingsg:kt,rbs:kt,mylegacy:kt,ccube:kt,oneservice:kt,pa:Ot,a11yplayground:Mt},defaultValue:"lifesg"},jt={collections:{lifesg:At,bookingsg:At,rbs:At,mylegacy:At,ccube:At,oneservice:At,pa:At,a11yplayground:zt},defaultValue:"lifesg"},Tt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=gt(a?jt:Yt,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?ut(i,e,s):i[e];return"function"==typeof l?l(r):l},Rt={text:Tt("text"),"text-subtle":Tt("text-subtle"),"text-subtler":Tt("text-subtler"),"text-subtlest":Tt("text-subtlest"),"text-primary":Tt("text-primary"),"text-hover":Tt("text-hover"),"text-selected":Tt("text-selected"),"text-selected-hover":Tt("text-selected-hover"),"text-disabled":Tt("text-disabled"),"text-disabled-subtle":Tt("text-disabled-subtle"),"text-disabled-subtlest":Tt("text-disabled-subtlest"),"text-selected-disabled":Tt("text-selected-disabled"),"text-success":Tt("text-success"),"text-warning":Tt("text-warning"),"text-error":Tt("text-error"),"text-info":Tt("text-info"),"text-inverse":Tt("text-inverse"),icon:Tt("icon"),"icon-subtle":Tt("icon-subtle"),"icon-strongest":Tt("icon-strongest"),"icon-primary":Tt("icon-primary"),"icon-primary-subtle":Tt("icon-primary-subtle"),"icon-primary-subtlest":Tt("icon-primary-subtlest"),"icon-hover":Tt("icon-hover"),"icon-selected":Tt("icon-selected"),"icon-selected-hover":Tt("icon-selected-hover"),"icon-disabled":Tt("icon-disabled"),"icon-disabled-subtle":Tt("icon-disabled-subtle"),"icon-selected-disabled":Tt("icon-selected-disabled"),"icon-success":Tt("icon-success"),"icon-warning":Tt("icon-warning"),"icon-error":Tt("icon-error"),"icon-error-strong":Tt("icon-error-strong"),"icon-info":Tt("icon-info"),"icon-inverse":Tt("icon-inverse"),"icon-primary-inverse":Tt("icon-primary-inverse"),border:Tt("border"),"border-strong":Tt("border-strong"),"border-stronger":Tt("border-stronger"),"border-primary":Tt("border-primary"),"border-primary-subtle":Tt("border-primary-subtle"),"border-hover":Tt("border-hover"),"border-hover-strong":Tt("border-hover-strong"),"border-selected":Tt("border-selected"),"border-selected-subtle":Tt("border-selected-subtle"),"border-selected-subtlest":Tt("border-selected-subtlest"),"border-selected-hover":Tt("border-selected-hover"),"border-focus":Tt("border-focus"),"border-focus-strong":Tt("border-focus-strong"),"border-disabled":Tt("border-disabled"),"border-selected-disabled":Tt("border-selected-disabled"),"border-success":Tt("border-success"),"border-warning":Tt("border-warning"),"border-error":Tt("border-error"),"border-error-focus":Tt("border-error-focus"),"border-error-focus-strong":Tt("border-error-focus-strong"),"border-error-strong":Tt("border-error-strong"),"border-info":Tt("border-info"),bg:Tt("bg"),"bg-strong":Tt("bg-strong"),"bg-stronger":Tt("bg-stronger"),"bg-strongest":Tt("bg-strongest"),"bg-hover":Tt("bg-hover"),"bg-hover-strong":Tt("bg-hover-strong"),"bg-hover-subtle":Tt("bg-hover-subtle"),"bg-hover-neutral":Tt("bg-hover-neutral"),"bg-hover-neutral-strong":Tt("bg-hover-neutral-strong"),"bg-selected":Tt("bg-selected"),"bg-selected-hover":Tt("bg-selected-hover"),"bg-selected-strong":Tt("bg-selected-strong"),"bg-selected-stronger":Tt("bg-selected-stronger"),"bg-selected-strongest":Tt("bg-selected-strongest"),"bg-selected-strongest-hover":Tt("bg-selected-strongest-hover"),"bg-disabled":Tt("bg-disabled"),"bg-selected-disabled":Tt("bg-selected-disabled"),"bg-selected-stronger-disabled":Tt("bg-selected-stronger-disabled"),"bg-success":Tt("bg-success"),"bg-success-hover":Tt("bg-success-hover"),"bg-success-strong":Tt("bg-success-strong"),"bg-success-strong-hover":Tt("bg-success-strong-hover"),"bg-warning":Tt("bg-warning"),"bg-warning-hover":Tt("bg-warning-hover"),"bg-warning-strong":Tt("bg-warning-strong"),"bg-warning-strong-hover":Tt("bg-warning-strong-hover"),"bg-info":Tt("bg-info"),"bg-info-hover":Tt("bg-info-hover"),"bg-info-strong":Tt("bg-info-strong"),"bg-info-strong-hover":Tt("bg-info-strong-hover"),"bg-error":Tt("bg-error"),"bg-error-hover":Tt("bg-error-hover"),"bg-error-strong":Tt("bg-error-strong"),"bg-error-strong-hover":Tt("bg-error-strong-hover"),"bg-inverse":Tt("bg-inverse"),"bg-inverse-subtle":Tt("bg-inverse-subtle"),"bg-inverse-subtler":Tt("bg-inverse-subtler"),"bg-inverse-subtlest":Tt("bg-inverse-subtlest"),"bg-inverse-hover":Tt("bg-inverse-hover"),"bg-primary":Tt("bg-primary"),"bg-primary-subtle":Tt("bg-primary-subtle"),"bg-primary-subtler":Tt("bg-primary-subtler"),"bg-primary-subtlest":Tt("bg-primary-subtlest"),"bg-available":Tt("bg-available"),"bg-primary-hover":Tt("bg-primary-hover"),"bg-primary-subtlest-hover":Tt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Tt("bg-primary-subtlest-selected"),"overlay-strong":Tt("overlay-strong"),"overlay-subtle":Tt("overlay-subtle"),hyperlink:Tt("hyperlink"),"hyperlink-hover":Tt("hyperlink-hover"),"hyperlink-visited":Tt("hyperlink-visited"),"hyperlink-inverse":Tt("hyperlink-inverse"),"focus-ring":Tt("focus-ring"),"focus-ring-inverse":Tt("focus-ring-inverse")},_t={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:mt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Rt.border(r),u=mt.solid;return v`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:mt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Rt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return v`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},It=e=>1===e.length&&"theme"in e[0],Ht=e=>(...r)=>t=>{const n=It(r)?[]:r,a=It(r)?r[0]:t,i=a.theme;return(0,gt(_t,null==i?void 0:i.borderScheme)[e])(...n)(a)},Lt={solid:Ht("solid"),"dashed-default":Ht("dashed-default")},Wt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,a=gt(Wt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ut(a,e,n.overrides.breakpoint):a[e],i},Nt={"xxs-min":Pt("xxs-min"),"xxs-max":Pt("xxs-max"),"xs-min":Pt("xs-min"),"xs-max":Pt("xs-max"),"sm-min":Pt("sm-min"),"sm-max":Pt("sm-max"),"md-min":Pt("md-min"),"md-max":Pt("md-max"),"lg-min":Pt("lg-min"),"lg-max":Pt("lg-max"),"xl-min":Pt("xl-min"),"xl-max":Pt("xl-max"),"xxl-min":Pt("xxl-min"),"xxs-column":Pt("xxs-column"),"xs-column":Pt("xs-column"),"sm-column":Pt("sm-column"),"md-column":Pt("md-column"),"lg-column":Pt("lg-column"),"xl-column":Pt("xl-column"),"xxl-column":Pt("xxl-column"),"xxs-gutter":Pt("xxs-gutter"),"xs-gutter":Pt("xs-gutter"),"sm-gutter":Pt("sm-gutter"),"md-gutter":Pt("md-gutter"),"lg-gutter":Pt("lg-gutter"),"xl-gutter":Pt("xl-gutter"),"xxl-gutter":Pt("xxl-gutter"),"xxs-margin":Pt("xxs-margin"),"xs-margin":Pt("xs-margin"),"sm-margin":Pt("sm-margin"),"md-margin":Pt("md-margin"),"lg-margin":Pt("lg-margin"),"xl-margin":Pt("xl-margin"),"xxl-margin":Pt("xxl-margin")},Vt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Nt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ut={MaxWidth:Vt("max-width"),MinWidth:Vt("min-width")},Zt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Kt=e=>r=>{var t;const n=r.theme,a=gt(Zt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ut(a,e,n.overrides.fontSpec):a[e]},Jt={"heading-size-xxl":Kt("heading-size-xxl"),"heading-size-xl":Kt("heading-size-xl"),"heading-size-lg":Kt("heading-size-lg"),"heading-size-md":Kt("heading-size-md"),"heading-size-sm":Kt("heading-size-sm"),"heading-size-xs":Kt("heading-size-xs"),"heading-lh-xxl":Kt("heading-lh-xxl"),"heading-lh-xl":Kt("heading-lh-xl"),"heading-lh-lg":Kt("heading-lh-lg"),"heading-lh-md":Kt("heading-lh-md"),"heading-lh-sm":Kt("heading-lh-sm"),"heading-lh-xs":Kt("heading-lh-xs"),"heading-ls-xxl":Kt("heading-ls-xxl"),"heading-ls-xl":Kt("heading-ls-xl"),"heading-ls-lg":Kt("heading-ls-lg"),"heading-ls-md":Kt("heading-ls-md"),"heading-ls-sm":Kt("heading-ls-sm"),"heading-ls-xs":Kt("heading-ls-xs"),"weight-light":Kt("weight-light"),"weight-regular":Kt("weight-regular"),"weight-semibold":Kt("weight-semibold"),"weight-bold":Kt("weight-bold"),"font-family":Kt("font-family"),"body-size-baseline":Kt("body-size-baseline"),"body-size-md":Kt("body-size-md"),"body-size-sm":Kt("body-size-sm"),"body-size-xs":Kt("body-size-xs"),"body-lh-baseline":Kt("body-lh-baseline"),"body-lh-md":Kt("body-lh-md"),"body-lh-sm":Kt("body-lh-sm"),"body-lh-xs":Kt("body-lh-xs"),"body-ls-baseline":Kt("body-ls-baseline"),"body-ls-md":Kt("body-ls-md"),"body-ls-sm":Kt("body-ls-sm"),"body-ls-xs":Kt("body-ls-xs"),"form-label-size":Kt("form-label-size"),"form-description-size":Kt("form-description-size"),"form-label-lh":Kt("form-label-lh"),"form-description-lh":Kt("form-description-lh"),"form-label-ls":Kt("form-label-ls"),"form-description-ls":Kt("form-description-ls")},qt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return v`
        font-family: ${Kt("font-family")};
        font-size: ${Kt(e)};
        font-weight: ${Kt(r)};
        line-height: ${Kt(t)};
        letter-spacing: ${Kt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Xt=(e={})=>({"heading-xxl-light":qt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":qt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":qt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":qt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":qt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":qt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":qt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":qt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":qt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":qt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":qt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":qt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":qt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":qt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":qt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":qt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":qt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":qt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":qt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":qt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":qt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":qt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":qt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":qt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":qt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":qt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":qt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":qt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":qt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":qt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":qt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":qt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":qt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":qt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":qt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":qt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":qt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":qt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":qt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":qt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":qt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":qt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Gt=Xt({disableLigatures:!0}),Qt={collections:{default:Xt(),bookingsg:Gt,pa:Xt({disableLigatures:!0}),a11yplayground:Xt({disableLigatures:!0})},defaultValue:"default"},en=e=>r=>{var t;const n=r.theme,a=gt(Qt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ut(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},rn={"heading-xxl-light":en("heading-xxl-light"),"heading-xxl-regular":en("heading-xxl-regular"),"heading-xxl-semibold":en("heading-xxl-semibold"),"heading-xxl-bold":en("heading-xxl-bold"),"heading-xl-light":en("heading-xl-light"),"heading-xl-regular":en("heading-xl-regular"),"heading-xl-semibold":en("heading-xl-semibold"),"heading-xl-bold":en("heading-xl-bold"),"heading-lg-light":en("heading-lg-light"),"heading-lg-regular":en("heading-lg-regular"),"heading-lg-semibold":en("heading-lg-semibold"),"heading-lg-bold":en("heading-lg-bold"),"heading-md-light":en("heading-md-light"),"heading-md-regular":en("heading-md-regular"),"heading-md-semibold":en("heading-md-semibold"),"heading-md-bold":en("heading-md-bold"),"heading-sm-light":en("heading-sm-light"),"heading-sm-regular":en("heading-sm-regular"),"heading-sm-semibold":en("heading-sm-semibold"),"heading-sm-bold":en("heading-sm-bold"),"heading-xs-light":en("heading-xs-light"),"heading-xs-regular":en("heading-xs-regular"),"heading-xs-semibold":en("heading-xs-semibold"),"heading-xs-bold":en("heading-xs-bold"),"body-baseline-light":en("body-baseline-light"),"body-baseline-regular":en("body-baseline-regular"),"body-baseline-semibold":en("body-baseline-semibold"),"body-baseline-bold":en("body-baseline-bold"),"body-md-light":en("body-md-light"),"body-md-regular":en("body-md-regular"),"body-md-semibold":en("body-md-semibold"),"body-md-bold":en("body-md-bold"),"body-sm-light":en("body-sm-light"),"body-sm-regular":en("body-sm-regular"),"body-sm-semibold":en("body-sm-semibold"),"body-sm-bold":en("body-sm-bold"),"body-xs-light":en("body-xs-light"),"body-xs-regular":en("body-xs-regular"),"body-xs-semibold":en("body-xs-semibold"),"body-xs-bold":en("body-xs-bold"),"form-label":en("form-label"),"form-description":en("form-description")},tn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},nn=e=>r=>{var t;const n=r.theme,a=gt(tn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ut(a,e,n.overrides.motion):a[e]},an={"duration-150":nn("duration-150"),"duration-250":nn("duration-250"),"duration-350":nn("duration-350"),"duration-500":nn("duration-500"),"duration-800":nn("duration-800"),"duration-1000":nn("duration-1000"),"ease-default":nn("ease-default"),"ease-standard":nn("ease-standard"),"ease-entrance":nn("ease-entrance"),"ease-exit":nn("ease-exit")},on={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},sn=e=>r=>{var t;const n=r.theme,a=gt(on,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ut(a,e,n.overrides.radius)}px`:`${a[e]}px`},ln={none:sn("none"),xs:sn("xs"),sm:sn("sm"),md:sn("md"),lg:sn("lg"),full:sn("full")},dn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},cn=e=>r=>{var t;const n=r.theme,a=gt(dn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ut(a,e,n.overrides.spacing)}px`:`${a[e]}px`},un={"spacing-0":cn("spacing-0"),"spacing-4":cn("spacing-4"),"spacing-8":cn("spacing-8"),"spacing-12":cn("spacing-12"),"spacing-16":cn("spacing-16"),"spacing-20":cn("spacing-20"),"spacing-24":cn("spacing-24"),"spacing-32":cn("spacing-32"),"spacing-40":cn("spacing-40"),"spacing-48":cn("spacing-48"),"spacing-64":cn("spacing-64"),"spacing-72":cn("spacing-72"),"layout-xs":cn("layout-xs"),"layout-sm":cn("layout-sm"),"layout-md":cn("layout-md"),"layout-lg":cn("layout-lg"),"layout-xl":cn("layout-xl"),"layout-xxl":cn("layout-xxl"),"layout-xxxl":cn("layout-xxxl")},gn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),bn=Object.assign(Object.assign({},Rt),{Primitive:Bt}),hn=Object.assign(Object.assign({},rn),{Spec:Jt}),mn=an,fn=Object.assign(Object.assign({},mt),{Util:Lt}),yn=un,pn=ln,vn=Nt,xn=Ut,wn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Dn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Fn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},$n={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},En={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Sn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Cn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Bn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"};Object.assign(Object.assign({},wn),{light:gn(wn,"light"),dark:gn(wn,"dark")}),Object.assign(Object.assign({},Dn),{light:gn(Dn,"light"),dark:gn(Dn,"dark")}),Object.assign(Object.assign({},Fn),{light:gn(Fn,"light"),dark:gn(Fn,"dark")}),Object.assign(Object.assign({},$n),{light:gn($n,"light"),dark:gn($n,"dark")}),Object.assign(Object.assign({},En),{light:gn(En,"light"),dark:gn(En,"dark")}),Object.assign(Object.assign({},Sn),{light:gn(Sn,"light"),dark:gn(Sn,"dark")}),Object.assign(Object.assign({},Cn),{light:gn(Cn,"light"),dark:gn(Cn,"dark")}),Object.assign(Object.assign({},Bn),{light:gn(Bn,"light"),dark:gn(Bn,"dark")});const kn=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=kn(e.$variant);return v`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const An=v`
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
    ${An}
    cursor: pointer;
`;p.div`
    ${An}
`;const Mn=x`
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
                animation: ${Mn} 0.5s ease-in-out;
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
`;var zn=function(e,r){return zn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},zn(e,r)};var Yn=function(){return Yn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},Yn.apply(this,arguments)};var jn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Tn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Rn="object"==typeof jn&&jn&&jn.Object===Object&&jn,_n="object"==typeof self&&self&&self.Object===Object&&self,In=Rn||_n||Function("return this")(),Hn=In,Ln=function(){return Hn.Date.now()},Wn=/\s/;var Pn=function(e){for(var r=e.length;r--&&Wn.test(e.charAt(r)););return r},Nn=/^\s+/;var Vn=function(e){return e?e.slice(0,Pn(e)+1).replace(Nn,""):e},Un=In.Symbol,Zn=Un,Kn=Object.prototype,Jn=Kn.hasOwnProperty,qn=Kn.toString,Xn=Zn?Zn.toStringTag:void 0;var Gn=function(e){var r=Jn.call(e,Xn),t=e[Xn];try{e[Xn]=void 0;var n=!0}catch(e){}var a=qn.call(e);return n&&(r?e[Xn]=t:delete e[Xn]),a},Qn=Object.prototype.toString;var ea=Gn,ra=function(e){return Qn.call(e)},ta=Un?Un.toStringTag:void 0;var na=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ta&&ta in Object(e)?ea(e):ra(e)},aa=function(e){return null!=e&&"object"==typeof e};var ia=Vn,oa=Tn,sa=function(e){return"symbol"==typeof e||aa(e)&&"[object Symbol]"==na(e)},la=/^[-+]0x[0-9a-f]+$/i,da=/^0b[01]+$/i,ca=/^0o[0-7]+$/i,ua=parseInt;var ga=Tn,ba=Ln,ha=function(e){if("number"==typeof e)return e;if(sa(e))return NaN;if(oa(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=oa(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ia(e);var t=da.test(e);return t||ca.test(e)?ua(e.slice(2),t?2:8):la.test(e)?NaN:+e},ma=Math.max,fa=Math.min;var ya=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=ba();if(h(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?fa(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function y(){var e=ba(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=ha(r)||0,ga(t)&&(c=!!t.leading,i=(u="maxWait"in t)?ma(ha(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(ba())},y},pa=ya,va=Tn;var xa=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return va(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),pa(e,r,{leading:n,maxWait:r,trailing:a})},wa=function(e,r,t,n){switch(r){case"debounce":return ya(e,t,n);case"throttle":return xa(e,t,n);default:return e}},Da=function(e){return"function"==typeof e},Fa=function(){return"undefined"==typeof window},$a=function(e){return e instanceof Element||e instanceof HTMLDocument},Ea=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Da(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Fa()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Fa())return null;if(r)return document.querySelector(r);if(n&&$a(n))return n;if(t.targetRef&&$a(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Ea(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Fa()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Da(r)?"renderProp":Da(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Fa()||(t.resizeHandler=wa(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}zn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Fa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Sa,Ca=Fa()?u:g;function Ba(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),w=x[0],D=x[1];return Ca((function(){if(!Fa()){var e=Ea(m,D,c,g);v.current=wa((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Fa()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),Yn({ref:p},w)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Sa||(Sa={}));const ka=p.div`
    display: flex;
    flex-direction: column;
`,Aa=e=>"right"===e?"bottom-end":"bottom-start",Oa=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y,rootNode:p})=>{var v;const x=w(),T=vn["sm-max"]({theme:x}),R=i(null),_=i(null),{width:I=0}=Ba({targetRef:R,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<T;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:L,floatingStyles:W,context:P}=F({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:$,placement:Aa(f),middleware:[E(m),S(),C({limiter:B()}),k({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),H]}),N=(()=>{const[e,r]=o(void 0),t=D();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Sa.Change,e),t.events.emit(Sa.Ready),()=>t.events.off(Sa.Change,e)}),[t]),e})(),{isMounted:V,styles:U}=A(P,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=O(P,{enabled:n,toggle:h}),K=M(P,{enabled:n}),{getReferenceProps:J,getFloatingProps:q}=z([Z,K]);return e(r,{children:[t("div",Object.assign({ref:e=>{R.current=e,L.setReference(e)}},J(),{children:c()})),V&&t(Y,{root:p,children:t(j,{context:P,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=b?b:N)&&void 0!==v?v:50})},q(),{children:t(ka,{ref:_,style:Object.assign({},U),inert:U.opacity<1?"":void 0,children:g({elementWidth:I})})}))})})]})},Ma=p.div`
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
`;var za={exports:{}};za.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,h,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,h,y,p,v,x)):new Date(m,f,h,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ya=W(za.exports),ja={exports:{}};ja.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Ta=W(ja.exports),Ra={exports:{}};Ra.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var _a=W(Ra.exports),Ia={exports:{}};Ia.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ha,La,Wa,Pa=W(Ia.exports),Na={exports:{}},Va=W(Na.exports=(Ha={year:0,month:1,day:2,hour:3,minute:4,second:5},La={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=La[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),La[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Ha[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));N.extend(Ta),N.extend(Pa),N.extend(_a),N.extend(Ya),N.extend(Va),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=N(r).startOf("week");return Ua(t).map((e=>Za(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Za(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(N(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+N(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=N(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?N(n):void 0,a?N(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Wa||(Wa={}));const Ua=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Za=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ka=[1,3,5,7,8,10,12],Ja=[4,6,9,11];var qa,Xa,Ga,Qa;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Ka.includes(i)?Math.min(a,31).toString():Ja.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=N(e,t);return N(r,t).diff(n,"minute")},e.toDayjs=e=>e?N(e):N(),e.addMinutesToTime=(e,r,t="HH:mm")=>N(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>N(e).isSame(N(r),t)}(qa||(qa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!N(e).isBefore(n,"day"))||!(!a||!N(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(N(e).isValid())return e}return""}}(Xa||(Xa={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ga||(Ga={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Qa||(Qa={}));const ei=e=>{const[r,t]=o(e),n=i(e);return[r,b((e=>{n.current=e,t(e)}),[]),n]},ri=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ti=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ni=p.div`
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
    animation: ${ti} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ai=p(ni)`
    animation-delay: -0.45s;
`,ii=p(ni)`
    animation-delay: -0.3s;
`,oi=p(ni)`
    animation-delay: -0.15s;
`,si={collections:{default:{Button:{"button-radius":ln.sm,"button-default-colour-bg":Rt["bg-primary"],"button-default-colour-bg-hover":Rt["bg-primary-hover"],"button-default-colour-text":Rt["text-inverse"],"button-secondary-colour-border":Rt["border-primary"],"button-secondary-colour-text":Rt["text-primary"],"button-light-colour-text":Rt["text-primary"],"button-link-colour-text":Rt["text-primary"]}},pa:{Button:{"button-radius":ln.full,"button-default-colour-bg":Rt["bg-primary"],"button-default-colour-bg-hover":Rt["bg-primary-hover"],"button-default-colour-text":Rt["text-inverse"],"button-secondary-colour-border":Rt["border-primary"],"button-secondary-colour-text":Rt["text-primary"],"button-light-colour-text":Rt["text-primary"],"button-link-colour-text":Rt["text-primary"]}}},defaultValue:"default"},li=(e,r)=>t=>{var n,a;const i=t.theme,o=gt(si,null==i?void 0:i.componentScheme);return di((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},di=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ci=li("Button","button-radius"),ui=li("Button","button-default-colour-bg"),gi=li("Button","button-default-colour-bg-hover"),bi=li("Button","button-default-colour-text"),hi=li("Button","button-secondary-colour-border"),mi=li("Button","button-secondary-colour-text"),fi=li("Button","button-light-colour-text"),yi=li("Button","button-link-colour-text"),pi=p.button`
    padding: ${yn["spacing-8"]} ${yn["spacing-16"]};
    min-width: 4rem;
    border: ${fn["width-010"]} ${fn.solid} transparent;
    transition: all ${mn["duration-250"]} ${mn["ease-default"]};
    border-radius: ${ci};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${bn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?bn["border-error-strong"]:hi};

                    color: ${e.$buttonIsDanger?bn["text-error"]:mi};

                    &:hover,
                    &:active {
                        background-color: ${bn["bg-hover-neutral"]};
                    }
                `;case"light":return v`
                    background-color: ${bn.bg};
                    border-color: ${bn.border};

                    color: ${e.$buttonIsDanger?bn["text-error"]:fi};

                    &:hover,
                    &:active {
                        background-color: ${bn["bg-hover-neutral"]};
                    }
                `;case"link":return v`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?bn["text-error"]:yi};
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
                    background-color: ${e.$buttonIsDanger?bn["bg-error-strong"]:ui};};

                    ${xn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${bi}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?bn["bg-error-strong-hover"]:gi}
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
`,vi=p((({color:r,className:n,size:a})=>e(ri,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ni,{id:"inner1"}),t(ai,{id:"inner2"}),t(ii,{id:"inner3"}),t(oi,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,xi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(vi,{}),t("span",{children:a})]}))};xi.displayName="Button.Default";const wi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(vi,{}),t("span",{children:a})]}))};wi.displayName="Button.Small";const Di=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(vi,{}),t("span",{children:a})]}))};Di.displayName="Button.Large";const Fi={Default:a.forwardRef(xi),Small:a.forwardRef(wi),Large:a.forwardRef(Di)},$i=p.button`
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
`,Ei=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=H(e,["children","focusHighlight","focusOutline","type"]);return t($i,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Si=v`
    color: ${bn.icon};
    height: 1rem;
    width: 1rem;
`,Ci=p(R)`
    ${Si}
`,Bi=p(_)`
    ${Si}
`,ki=p(y)`
    ${Si}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ai=p.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Oi=p.div`
    display: flex;
    flex: 1;
    position: relative;
`,Mi=p.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,zi=p.div`
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
`,Yi=p.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,ji=p.div`
    display: flex;
`,Ti=p.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?v`
                display: none;
            `:e.$expanded?v`
                ${ki} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Ri=p.span`
    ${hn["body-md-regular"]}
    color: ${bn.text};
`,_i=p.div`
    display: flex;
`,Ii=p(Ei)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Hi=p.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Li=p(Fi.Small)`
    flex: 1;
`,Wi=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Pi=p.div`
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
`,Ni=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const m=h((()=>Wa.generateMonths(N(e))),[e]),f=i(new Array(m.length).fill(null)),[y,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==y&&(null===(e=f.current[y])||void 0===e||e.focus())}),[y,m]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const r=e.format("MMMM"),t=(n=e,!Wa.isWithinRange(n,d?N(d):void 0,c?N(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":N().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(Wi,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=w(e);return t(Pi,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},Vi=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ui=p.div`
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
`,Zi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:m})=>{const f=h((()=>Wa.generateDecadeOfYears(N(e))),[e]),y=i(new Array(f.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=f.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=y.current[r])||void 0===e||e.focus())}),[p,f]);const x=(e,r)=>{r||b(e)},w=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},D=e=>{const r=f.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!Wa.isWithinRange(i,d?N(d):void 0,c?N(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":N().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||w(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return f.length?t(Vi,{onBlur:()=>{v(null)},children:f.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=D(e);return t(Ui,{ref:e=>{y.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Ki=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:h,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:D,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:S,isRightArrowDisabled:C,getMonthHeaderLabel:B,getYearHeaderLabel:k,isFocusable:A=!1}=n,O=H(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,z]=o(qa.toDayjs(l)),[Y,j]=o(qa.toDayjs(l)),[T,R]=o("default"),_=i(null),I=i(null),L=i(null),W=i(null);m(a,(()=>({defaultView(){R("default")},resetView(){const e=qa.toDayjs(l);z(e),j(e),R("default")},setCalendarDate(e){const r=qa.toDayjs(e);z(r),j(r)}}))),u((()=>{const e=qa.toDayjs(l);z(e),j(e)}),[l]),u((()=>{G(Y)}),[Y]);const P=()=>{var e;"month-options"!==T?(R("month-options"),null===(e=L.current)||void 0===e||e.focus()):(R("default"),z(Y))},V=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P(),null===(r=W.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!Wa.isWithinRange(r,d?N(d):void 0,c?N(c):void 0,"month"))return;z(r),"default"===T&&j(r)}},U=()=>{"default"!==T?(R("default"),z(Y)):R("year-options")},Z=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),U()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===T?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!Wa.isWithinRange(r,d?N(d):void 0,c?N(c):void 0,"year"))return;z(r),"default"===T&&j(r)}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=$?$(M):M.subtract(1,"month");switch(T){case"default":j(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=E?E(M):M.add(1,"month");switch(T){case"default":j(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},q=e=>{z(e),j(e),x||R("default")},X=()=>{const e=qa.toDayjs(l);z(e),j(e),"default"===T?Q("reset"):R("default")},G=e=>{v&&v(e)},Q=e=>{D&&D(e)},ee=()=>{if(!d||p)return!1;const e=N(d);return"month-options"===T?!Wa.isPreviousYearWithinRange(M,e):"year-options"===T?!Wa.isPreviousDecadeWithinRange(M,e):S?S(M):!Wa.isPreviousMonthWithinRange(M,e)},re=()=>{if(!c||p)return!1;const e=N(c);return"month-options"===T?!Wa.isNextYearWithinRange(M,e):"year-options"===T?!Wa.isNextDecadeWithinRange(M,e):C?C(M):!Wa.isNextMonthWithinRange(M,e)},te=()=>{const n=B?B(M):M.format("MMM"),a=N(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=Wa.getStartEndDecade(M);return`${e} to ${r}`}return k?k(M):M.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Ti,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:P,onKeyDown:V,tabIndex:A?0:-1,children:[t(Ri,{children:n}),t(ki,{})]}),e(Ti,{ref:W,"aria-label":o[T],type:"button",$expanded:"default"!==T,id:"year-dropdown",onClick:U,onKeyDown:Z,tabIndex:A?0:-1,children:[t(Ri,{children:i}),t(ki,{})]})]})},ne=()=>{switch(T){case"month-options":return t(Ni,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!f,onMonthSelect:q,allowDisabledSelection:p});case"year-options":return t(Zi,{setCalendarDate:z,calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!f,onYearSelect:q,allowDisabledSelection:p});default:return null}};return e(Ai,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},O,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[T];return e(Yi,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(ji,{children:te()}),e(_i,{children:[t(Ii,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:A?0:-1,children:t(Ci,{})}),t(Ii,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:A?0:-1,children:t(Bi,{})})]})]})})(),t(Oi,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:T}):s;if(y)return e(r,{children:["default"===T&&n,ne()]});{const a="default"===T;return e(r,{children:[t(Mi,{inert:a?void 0:"",children:n}),t(zi,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===T)&&w;return e(Hi,{children:[t(Li,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X,children:"Cancel"}),t(Li,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(z(Y),"default"===T?Q("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),Ji=p.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,qi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${hn["body-sm-semibold"]};
    color: ${bn.text};
`,Xi=p.div`
    grid-column: 1 / -1;
    display: flex;
`,Gi=e=>{let r=bn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=bn["bg-hover"],t=bn["bg-hover"];break;case"hover":r=bn["bg-hover-strong"],t=bn["bg-hover-strong"];break;case"hover-outline":r=bn["bg-hover-subtle"],t=bn["border-hover"];break;case"selected-outline":r=bn["bg-selected"],t=bn["border-selected"];break;case"selected-outline-subtle":r=bn["bg-selected"],t=bn["border-selected-subtle"];break;case"selected-hover":r=bn["bg-selected-hover"];break;case"selected-hover-outline":r=bn["bg-selected-hover"],t=bn["border-selected-hover"]}return{color:r,borderColor:t}},Qi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,eo=p.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${mn["duration-150"]} ${mn["ease-default"]};
    border: ${fn["width-010"]} ${fn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Gi(e);return v`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,ro=p(eo)`
    left: 0;
`,to=p(eo)`
    right: 0;
`,no=p.div`
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

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Gi(e);return v`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,ao=p(no)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,io=p(no)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,oo=p.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,so=p.div`
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
`,lo=p.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,co=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:f,onKeyDown:y,tabIndex:p=-1,role:v="button",focusDate:x})=>{const w=N().isSame(g,"day"),D=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Qi,{children:[t(ro,{$type:r}),t(ao,{$type:a}),t(to,{$type:n}),t(io,{$type:o}),t(oo,{$interactive:d,children:e(so,{ref:$,tabIndex:p,role:v,"aria-label":D,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&w&&t(lo,{$disabled:l})]})})]})},uo=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p=-1})=>{const v=Wa.isDisabledDay(e,c,l,d),x=!v||u,w=()=>{h(e,!x)},D=()=>{const e=N(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&w());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:N(s),tabIndex:p};return t(co,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(N().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=D();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};N.extend(Ta);const go=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:m,maxDate:f,allowDisabledSelection:y,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,S(e)}}),[r]);const w=b((()=>s&&N(s).isSame(r,"month")?N(s):l&&N(l).isSame(r,"month")?N(l):N().isSame(r,"month")?N():m&&r.isSame(N(m),"month")?N(m):N(r).startOf("month")),[s,r,l,m]),D=e=>{const t=N(e);if(Wa.isWithinRange(t,m?N(m):void 0,f?N(f):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);S(e)}},F=h((()=>Wa.generateDays(r)),[r]),$=h((()=>w()),[w]),[E,S]=o(""),[C,B]=o(""),k=(e,r)=>{r&&!y||d(e)},A=(e,r)=>{r&&!y||(B(e),c(e))},O=e=>{B(e),c(e)},M=()=>{B(""),c("")};return e(Ji,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(S(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(qi,{"aria-hidden":!0,children:N(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(Xi,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:M,children:e.map(((e,i)=>t(uo,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:C,focusDate:E,currentFocus:n,minDate:m,maxDate:f,disabledDates:a,allowDisabledSelection:y,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:k,onHover:A,onFocus:O,setFocusCell:D,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},bo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=Wa.isDisabledDay(e,s,i,o),b=!g||l,{start:h,end:m}=n?Wa.getFixedRangeStartEnd(qa.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?Wa.getFixedRangeStartEnd(qa.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(h,m,"day","[]"),v=!!a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(h,"day")||v&&e.isSame(f,"day"),w=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),D=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(co,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&D(r,"hover",t===f,t===y),p&&D(r,"selected-outline",t===h,t===m),p&&v&&(D(r,"selected-hover-outline",x,w),t===f&&t!==h&&(r.circleLeft="selected-hover")),r})()))},ho=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=h((()=>Wa.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!N(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ji,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(qi,{children:N(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Xi,{onMouseLeave:p,children:e.map(((e,i)=>t(bo,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))},i)))]})},mo=p.div`
    width: 100%;
    background: ${bn.bg};
`,fo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=Wa.isDisabledDay(e,s,i,o),b=!g||l,h={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(co,Object.assign({},h,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":N().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};N.extend(Ta);const yo=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=h((()=>Wa.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ji,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(qi,{children:N(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Xi,{onMouseLeave:p,children:e.map(((e,i)=>t(fo,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))},i)))]})},po=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Wa.isDisabledDay(e,s,i,o),g=!u||l,{start:b,end:h}=Wa.getWeekStartEnd(qa.toDayjs(n)),{start:m,end:f}=Wa.getWeekStartEnd(qa.toDayjs(a)),y=n&&e.isBetween(b,h,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(b)||p&&e.isSame(m),x=y&&e.isSame(h)||p&&e.isSame(f),w={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(co,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},vo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=h((()=>Wa.generateDays(r)),[r]),[g,b]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!N(e).isSame(t,"month")&&b("")},f=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(Ji,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(qi,{children:N(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Xi,{onMouseLeave:y,children:e.map(((e,i)=>t(po,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))},i)))]})},xo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:h,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const D=i(null),F=i(void 0);m(w,(()=>({reset(){var e;null===(e=D.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=D.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=D.current)||void 0===r||r.setCalendarDate(t),S(t)},E=e=>{C(e)},S=e=>{n&&n(e)},C=e=>{a&&a(e)},B=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(mo,{children:t(Ki,{ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=D.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),B(e)),F.current=e},initialCalendarDate:y,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(vo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:$,onHover:E});case"fixed-range":return t(ho,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(yo,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(go,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:f,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=D.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),wo=a.forwardRef(((e,r)=>{var{width:n}=e,a=H(e,["width"]);return t(Ma,{$width:n,"data-testid":"calendar-dropdown",children:t(xo,Object.assign({ref:r},a))})})),Do=p.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return v`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${hn.Spec["body-size-baseline"]} -
                            ${yn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${yn["spacing-8"]};
                }
            `}}
`,Fo=p.div`
    width: 100%; // Force next flex item to break to next line
`,$o=p.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Eo=p(I)`
    color: ${bn.icon};
    width: ${hn.Spec["body-size-baseline"]};
    height: ${hn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${yn["spacing-8"]};
    align-self: center;
`,So=p.div`
    position: absolute;
    background: ${e=>e.$error?bn["border-error-focus-strong"]:bn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${yn["spacing-8"]} - (${hn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${mn["duration-350"]} ${mn["ease-standard"]},
        opacity ${mn["duration-350"]} ${mn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return v`
                    opacity: 1;
                `;case"end":return v`
                    left: calc(50% + ${yn["spacing-16"]});
                    opacity: 1;
                `;case"none":return v`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return v`
                display: none;
            `}}
`,Co=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(Do,{className:i,$wrap:o,children:[t($o,{"data-id":"range-container-elem1-container",children:s}),t(Eo,{}),o&&t(Fo,{}),t($o,{"data-id":"range-container-elem2-container",children:l}),t(So,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]})},Bo=v`
    outline-offset: -1px;
    outline: ${fn["width-020"]} ${fn.solid} ${bn["border-focus"]};
`,ko=v`
    outline-color: ${bn["border-focus"]};
`,Ao=v`
    outline-color: ${bn["border-disabled"]};
`,Oo=v`
    outline-color: ${bn["border-error-focus"]};
`,Mo=p(p.div`
    border: ${fn["width-010"]} ${fn.solid} ${bn.border};
    border-radius: ${pn.sm};
    background: ${bn.bg};

    :focus-within {
        ${Bo}
    }
    ${e=>e.$focused&&Bo}

    ${e=>e.$readOnly?v`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ko}
                }
                ${e.$focused&&ko}
            `:e.$disabled?v`
                background: ${bn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ao}
                }
                ${e.$focused&&Ao}
            `:e.$error?v`
                border-color: ${bn["border-error"]};

                :focus-within {
                    ${Oo}
                }
                ${e.$focused&&Oo}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${yn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,zo=p.input`
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
`;const Yo=p.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,jo=p.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return v`
                ${To}, ${Ho} {
                    color: ${bn["text-subtler"]};
                }
            `}}
`,To=p(zo)`
    background: transparent;
    text-align: center;
`,Ro=p(To)`
    width: 2rem;
    margin-right: ${yn["spacing-4"]};
`,_o=p(To)`
    width: 2.5rem;
`,Io=p(To)`
    width: 3rem;
    margin-left: ${yn["spacing-4"]};
`,Ho=p.span`
    ${hn["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return v`
                color: ${bn.text};
            `}}
`,Lo=p.div`
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
`;N.extend(Ya);const Wo=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:b,onFocus:h,onBlur:f,hideInputKeyboard:y},p)=>{const v=y?"none":"numeric",[x,w,D]=ei(""),[F,$,E]=ei(""),[S,C,B]=ei(""),[k,A]=o("none"),[O,M]=o(!1),z=i(null),Y=i(null),j=i(null),T=i(null),[R,_,I]=U(d);u((()=>{var e;const[r="",t="",n=""]=U(s);w(r),$(t),C(n),r||t||n||!z.current||!z.current.contains(document.activeElement)||null===(e=Y.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||A("none"),l&&(M(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))}),[l]),m(p,(()=>({ref:z,resetPlaceholder(){M(!1)},resetInput(){const[e="",r="",t=""]=U(s);w(e),$(r),C(t)}})),[s]);const H=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},L=e=>{e.target.select();const r=e.target.name;A(r)},W=e=>{const[r,t,n]=a,i={[r]:D.current,[t]:E.current,[n]:B.current},o=e.target.name,s=i[o],l=o!==n?Qa.padValue(s,!0):s;switch(o){case r:i[r]=l,w(l);break;case t:i[t]=l,$(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=N(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),z.current&&!z.current.contains(e.relatedTarget)&&(A("none"),null==f||f(u||c))},P=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:x,month:F,year:S};switch(n){case a[0]:o.day=i,w(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case a[1]:o.month=i,$(i),2===i.length&&(null===(t=T.current)||void 0===t||t.focus());break;case a[2]:o.year=i,C(i)}if(!o.day&&!o.month&&!o.year)return void b("");const s=`${o.year}-${o.month}-${o.day}`;N(s,"YYYY-MM-DD",!0).isValid()&&b(s)},V=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(k===a[1]&&0===F.length&&(null===(r=Y.current)||void 0===r||r.focus()),k===a[2]&&0===S.length&&(null===(t=j.current)||void 0===t||t.focus()))};function U(e){if(e){const r=N(new Date(e));return r.isValid()?[Qa.padValue(r.date().toString()),Qa.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Yo,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(M(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==h||h(e))},children:[e(jo,{ref:z,$hover:!!d,children:[t(Ro,{ref:Y,name:a[0],maxLength:2,value:null!=R?R:x,onFocus:L,onBlur:W,onChange:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[0]||n?"DD":""}),t(Ho,{$inactive:0===x.length,children:"/"}),t(_o,{ref:j,name:a[1],maxLength:2,value:null!=_?_:F,onFocus:L,onBlur:W,onChange:P,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[1]||n?"MM":""}),t(Ho,{$inactive:0===F.length,children:"/"}),t(Io,{ref:T,name:a[2],maxLength:4,value:null!=I?I:S,onFocus:L,onBlur:W,onChange:P,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(Lo,{$hide:O,$disabled:r,onMouseDown:H,children:c})})()]})})),Po=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},No=p(Mo)`
    ${e=>e.$wrap&&v`
            padding: ${yn["spacing-12"]} ${yn["spacing-16"]};
        `}
`,Vo=p.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&v`
            height: fit-content;
        `}
`,Uo={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Zo=r=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:g,valueEnd:h,onChange:m,onFocus:y,onBlur:p,onYearMonthDisplayChange:v,withButton:x=!0,variant:w="range",numberOfDays:D=7,readOnly:F,id:$,allowDisabledSelection:E,zIndex:S,dropdownRootNode:C}=r,B=H(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[k,A]=o(),[O,M]=o(void 0),[z,Y]=o(!1),[j,T]=o(!1),R="week"===w,_="fixed-range"===w,[{selectedStart:I,selectedEnd:L,currentFocus:W,calendarOpen:P,isStartDirty:V,isEndDirty:U,focused:Z},K]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=f(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&Po(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:Uo,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":_?"start":r,calendarOpen:!F,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),J=i(!1),q=i(null),X=i(null),G=i(null),Q=i(null),ee=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return Ba({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:b((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:q});u((()=>{K.resetRange({start:Xa.sanitizeInput(g),end:Xa.sanitizeInput(h)})}),[g,h]),u((()=>{"start"===W?A(I):"end"===W&&A(L)}),[W]);const re=e=>{var r,t,n;"Enter"!==e.code||x||(I&&L?(K.done({start:I,end:L}),null==m||m(I,L)):(K.dismiss(),null===(r=q.current)||void 0===r||r.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},te=e=>{var r;if(me(e))return void(J.current=!0);if(K.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),J.current=!1,!e)return void(x||L||!U||(K.resetRange({start:"",end:""}),null==m||m("","")));if(!L)return void K.focus("end");if(N(e).isAfter(L,"day"))K.reselectEnd();else{if(U)return x?void 0:(K.done({start:e,end:L}),void(null==m||m(e,L)));K.focus("end")}},ne=e=>{var r,t;if(me(e))return void(J.current=!0);if(N(e).isBefore(I,"day"))return K.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),void K.reselectEnd();if(K.changeEnd(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),e){if(I)return x?void 0:(K.done({start:I,end:e}),void(null==m||m(I,e)));K.focus("start")}else x||I||!V||(K.resetRange({start:"",end:""}),null==m||m("",""))},ae=e=>{var r;if(me(e))return void(J.current=!0);if(K.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),J.current=!1,!e)return void(x?K.changeEnd(""):(K.resetRange({start:"",end:""}),null==m||m("","")));const t=N(e).format("YYYY-MM-DD"),n=N(t).add(D-1,"day").format("YYYY-MM-DD");return K.changeStart(t),K.changeEnd(n),J.current=!1,x?void 0:(K.done({start:t,end:n}),void(null==m||m(t,n)))},ie=()=>{F||s||Z||(K.focus("start"),null==y||y())},oe=e=>{var r,t;Z&&!P&&q.current&&q.current.contains(e.relatedTarget)&&(K.blur(),Y(!1),T(!1),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null==p||p())},se=e=>r=>{r.stopPropagation(),F||(K.focus(e),le(),de(),Z||null==y||y())},le=()=>{if(R){const e=qa.toDayjs(I).startOf("week").format("YYYY-MM-DD");Y(!0),T(!0),A(e)}},de=()=>{_&&(T(!0),A(I))},ce=e=>{var r;e&&!J.current||(K.resetStart(),null===(r=G.current)||void 0===r||r.resetInput())},ue=e=>{var r;e&&!J.current||(K.resetEnd(),null===(r=Q.current)||void 0===r||r.resetInput())},ge=e=>{switch(w){case"week":(e=>{const r=N(e).startOf("week").format("YYYY-MM-DD"),t=N(e).endOf("week").format("YYYY-MM-DD");if(K.changeStart(r),K.changeEnd(t),J.current=!1,!x)K.done({start:r,end:t}),null==m||m(r,t)})(e);break;case"fixed-range":ae(e);break;default:"start"===W?te(e):"end"===W&&ne(e)}},be=e=>{var r;switch(null===(r=q.current)||void 0===r||r.focus(),e){case"reset":K.cancel();break;case"confirmed":K.done({start:I,end:L}),null==m||m(I,L)}},he=e=>{M(e)},me=e=>!E&&e&&Xa.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),fe=e=>{let r={start:void 0,end:void 0};switch(w){case"range":r={start:"start"===W?O:void 0,end:"end"===W?O:void 0};break;case"week":if(!O)return;r={start:N(O).startOf("week").format("YYYY-MM-DD"),end:N(O).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!O)return;r={start:N(O).format("YYYY-MM-DD"),end:N(O).add(D-1,"day").format("YYYY-MM-DD")}}return r[e]};return t(Oa,{enabled:!F&&!s,isOpen:P,onClose:()=>{var e,r;K.blur(),Y(!1),T(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),null==p||p()},onDismiss:()=>{var e,r,t;K.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder()},renderElement:()=>t(No,Object.assign({ref:q,tabIndex:-1,onFocus:ie,onBlur:oe,$focused:Z,$disabled:s,$readOnly:F,$error:d,$wrap:ee,id:$,"data-testid":B["data-testid"],onKeyDown:re},B,{children:e(Co,{currentActive:W,wrap:ee,error:d,children:[t(Vo,{$wrap:ee,children:t(Wo,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],value:I,disabled:s,readOnly:z||F,focused:"start"===W,hoverValue:fe("start"),onChange:_?ae:te,onFocus:se("start"),onBlur:ce,hideInputKeyboard:c})}),t(Vo,{$wrap:ee,children:t(Wo,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],value:L,disabled:s,readOnly:j||F,focused:"end"===W,hoverValue:fe("end"),onChange:ne,onFocus:se("end"),onBlur:ue,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:e})=>t(wo,{ref:X,variant:w,initialCalendarDate:k,withButton:x,value:I,endValue:L,selectWithinRange:V||U,currentFocus:W,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:E,onSelect:ge,onDismiss:be,onHover:he,onYearMonthDisplayChange:v,numberOfDays:D,width:e}),customZIndex:S,offset:16,rootNode:C})};export{Zo as DateRangeInput};
//# sourceMappingURL=index.js.map
