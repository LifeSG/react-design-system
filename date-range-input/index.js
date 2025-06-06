import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useCallback as h,useMemo as b,useImperativeHandle as m,useReducer as f}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import p,{css as v,keyframes as x,useTheme as D}from"styled-components";import{useFloatingTree as w,useFloating as F,autoUpdate as $,offset as E,flip as C,shift as S,limitShift as B,size as A,useTransitionStyles as O,useClick as M,useDismiss as k,useInteractions as z,FloatingPortal as Y,FloatingFocusManager as j}from"@floating-ui/react";import{findDOMNode as R}from"react-dom";import{ChevronLeftIcon as T}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as I}from"@lifesg/react-icons";function H(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P={exports:{}};P.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?y-x:y+(6-x),f);case s:case g:return b(p+"Hours",0);case o:return b(p+"Minutes",1);case i:return b(p+"Seconds",2);case a:return b(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,h=this;n=Number(n);var b=E.p(c),m=function(e){var r=$(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===s)return m(1);if(b===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[b]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(i,o,!0);case"A":return b(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,h){var b,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-p)/6048e5;break;case s:b=(v-p)/864e5;break;case o:b=v/t;break;case i:b=v/r;break;case a:b=v/e;break;default:b=v}return h?b:E.a(b)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var N=W(P.exports),V=Array.isArray,U="object"==typeof L&&L&&L.Object===Object&&L,Z="object"==typeof self&&self&&self.Object===Object&&self,K=U||Z||Function("return this")(),J=K.Symbol,q=J,X=Object.prototype,G=X.hasOwnProperty,Q=X.toString,ee=q?q.toStringTag:void 0;var re=function(e){var r=G.call(e,ee),t=e[ee];try{e[ee]=void 0;var n=!0}catch(e){}var a=Q.call(e);return n&&(r?e[ee]=t:delete e[ee]),a},te=Object.prototype.toString;var ne=re,ae=function(e){return te.call(e)},ie=J?J.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ie&&ie in Object(e)?ne(e):ae(e)};var se=oe,le=function(e){return null!=e&&"object"==typeof e};var de=function(e){return"symbol"==typeof e||le(e)&&"[object Symbol]"==se(e)},ce=V,ue=de,ge=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,he=/^\w*$/;var be=function(e,r){if(ce(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ue(e))||(he.test(e)||!ge.test(e)||null!=r&&e in Object(r))};var me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},fe=oe,ye=me;var pe,ve=function(e){if(!ye(e))return!1;var r=fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},xe=K["__core-js_shared__"],De=(pe=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var we=function(e){return!!De&&De in e},Fe=Function.prototype.toString;var $e=ve,Ee=we,Ce=me,Se=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Be=/^\[object .+?Constructor\]$/,Ae=Function.prototype,Oe=Object.prototype,Me=Ae.toString,ke=Oe.hasOwnProperty,ze=RegExp("^"+Me.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},je=function(e){return!(!Ce(e)||Ee(e))&&($e(e)?ze:Be).test(Se(e))},Re=Ye;var Te=function(e,r){var t=Re(e,r);return je(t)?t:void 0},_e=Te(Object,"create"),Ie=_e;var He=function(){this.__data__=Ie?Ie(null):{},this.size=0};var Le=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},We=_e,Pe=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;if(We){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Pe.call(r,e)?r[e]:void 0},Ve=_e,Ue=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;return Ve?void 0!==r[e]:Ue.call(r,e)},Ke=_e;var Je=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ke&&void 0===r?"__lodash_hash_undefined__":r,this},qe=He,Xe=Le,Ge=Ne,Qe=Ze,er=Je;function rr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}rr.prototype.clear=qe,rr.prototype.delete=Xe,rr.prototype.get=Ge,rr.prototype.has=Qe,rr.prototype.set=er;var tr=rr;var nr=function(){this.__data__=[],this.size=0};var ar=function(e,r){return e===r||e!=e&&r!=r};var ir=function(e,r){for(var t=e.length;t--;)if(ar(e[t][0],r))return t;return-1},or=ir,sr=Array.prototype.splice;var lr=function(e){var r=this.__data__,t=or(r,e);return!(t<0)&&(t==r.length-1?r.pop():sr.call(r,t,1),--this.size,!0)},dr=ir;var cr=function(e){var r=this.__data__,t=dr(r,e);return t<0?void 0:r[t][1]},ur=ir;var gr=function(e){return ur(this.__data__,e)>-1},hr=ir;var br=function(e,r){var t=this.__data__,n=hr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},mr=nr,fr=lr,yr=cr,pr=gr,vr=br;function xr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}xr.prototype.clear=mr,xr.prototype.delete=fr,xr.prototype.get=yr,xr.prototype.has=pr,xr.prototype.set=vr;var Dr=xr,wr=Te(K,"Map"),Fr=tr,$r=Dr,Er=wr;var Cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Sr=function(e,r){var t=e.__data__;return Cr(r)?t["string"==typeof r?"string":"hash"]:t.map},Br=Sr;var Ar=function(e){var r=Br(this,e).delete(e);return this.size-=r?1:0,r},Or=Sr;var Mr=function(e){return Or(this,e).get(e)},kr=Sr;var zr=function(e){return kr(this,e).has(e)},Yr=Sr;var jr=function(e,r){var t=Yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Rr=function(){this.size=0,this.__data__={hash:new Fr,map:new(Er||$r),string:new Fr}},Tr=Ar,_r=Mr,Ir=zr,Hr=jr;function Lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Lr.prototype.clear=Rr,Lr.prototype.delete=Tr,Lr.prototype.get=_r,Lr.prototype.has=Ir,Lr.prototype.set=Hr;var Wr=Lr;function Pr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Pr.Cache||Wr),t}Pr.Cache=Wr;var Nr=Pr;var Vr=function(e){var r=Nr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zr=/\\(\\)?/g,Kr=Vr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ur,(function(e,t,n,a){r.push(n?a.replace(Zr,"$1"):t||e)})),r}));var Jr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},qr=V,Xr=de,Gr=J?J.prototype:void 0,Qr=Gr?Gr.toString:void 0;var et=function e(r){if("string"==typeof r)return r;if(qr(r))return Jr(r,e)+"";if(Xr(r))return Qr?Qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},rt=et;var tt=V,nt=be,at=Kr,it=function(e){return null==e?"":rt(e)};var ot=de;var st=function(e,r){return tt(e)?e:nt(e,r)?[e]:at(it(e))},lt=function(e){if("string"==typeof e||ot(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var dt=function(e,r){for(var t=0,n=(r=st(r,e)).length;null!=e&&t<n;)e=e[lt(r[t++])];return t&&t==n?e:void 0};var ct=W((function(e,r,t){var n=null==e?void 0:dt(e,r);return void 0===n?t:n}));const ut=(e,r,t)=>ct(t,r)||ct(e,r),gt=(e,r)=>{const t=r||e.defaultValue;return ct(e.collections,t)},ht={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},bt=e=>r=>{var t;const n=r.theme,a=gt(ht,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ut(a,e,n.overrides.border)}px`:`${a[e]}px`},mt={"width-005":bt("width-005"),"width-010":bt("width-010"),"width-020":bt("width-020"),"width-040":bt("width-040"),solid:(ft="solid",e=>{var r;const t=e.theme,n=gt(ht,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ut(n,ft,t.overrides.border):n[ft];return"function"==typeof a?a(e):a})};var ft;const yt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,a=gt(yt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?ut(a,e,n.overrides.primitiveColour):a[e]},vt={"brand-10":pt("brand-10"),"brand-20":pt("brand-20"),"brand-30":pt("brand-30"),"brand-40":pt("brand-40"),"brand-50":pt("brand-50"),"brand-60":pt("brand-60"),"brand-70":pt("brand-70"),"brand-80":pt("brand-80"),"brand-90":pt("brand-90"),"brand-95":pt("brand-95"),"brand-100":pt("brand-100"),"primary-10":pt("primary-10"),"primary-20":pt("primary-20"),"primary-30":pt("primary-30"),"primary-40":pt("primary-40"),"primary-50":pt("primary-50"),"primary-60":pt("primary-60"),"primary-70":pt("primary-70"),"primary-80":pt("primary-80"),"primary-90":pt("primary-90"),"primary-95":pt("primary-95"),"primary-100":pt("primary-100"),"secondary-10":pt("secondary-10"),"secondary-20":pt("secondary-20"),"secondary-30":pt("secondary-30"),"secondary-40":pt("secondary-40"),"secondary-50":pt("secondary-50"),"secondary-60":pt("secondary-60"),"secondary-70":pt("secondary-70"),"secondary-80":pt("secondary-80"),"secondary-90":pt("secondary-90"),"secondary-95":pt("secondary-95"),"secondary-100":pt("secondary-100"),"neutral-10":pt("neutral-10"),"neutral-20":pt("neutral-20"),"neutral-30":pt("neutral-30"),"neutral-40":pt("neutral-40"),"neutral-50":pt("neutral-50"),"neutral-60":pt("neutral-60"),"neutral-70":pt("neutral-70"),"neutral-80":pt("neutral-80"),"neutral-90":pt("neutral-90"),"neutral-95":pt("neutral-95"),"neutral-100":pt("neutral-100"),"success-10":pt("success-10"),"success-20":pt("success-20"),"success-30":pt("success-30"),"success-40":pt("success-40"),"success-50":pt("success-50"),"success-60":pt("success-60"),"success-70":pt("success-70"),"success-80":pt("success-80"),"success-90":pt("success-90"),"success-95":pt("success-95"),"success-100":pt("success-100"),"warning-10":pt("warning-10"),"warning-20":pt("warning-20"),"warning-30":pt("warning-30"),"warning-40":pt("warning-40"),"warning-50":pt("warning-50"),"warning-60":pt("warning-60"),"warning-70":pt("warning-70"),"warning-80":pt("warning-80"),"warning-90":pt("warning-90"),"warning-95":pt("warning-95"),"warning-100":pt("warning-100"),"error-10":pt("error-10"),"error-20":pt("error-20"),"error-30":pt("error-30"),"error-40":pt("error-40"),"error-50":pt("error-50"),"error-60":pt("error-60"),"error-70":pt("error-70"),"error-80":pt("error-80"),"error-90":pt("error-90"),"error-95":pt("error-95"),"error-100":pt("error-100"),"info-10":pt("info-10"),"info-20":pt("info-20"),"info-30":pt("info-30"),"info-40":pt("info-40"),"info-50":pt("info-50"),"info-60":pt("info-60"),"info-70":pt("info-70"),"info-80":pt("info-80"),"info-90":pt("info-90"),"info-95":pt("info-95"),"info-100":pt("info-100"),white:pt("white"),black:pt("black"),"primary-inverse":pt("primary-inverse")},xt={text:pt("neutral-20"),"text-subtle":pt("neutral-30"),"text-subtler":pt("neutral-50"),"text-subtlest":pt("neutral-60"),"text-primary":pt("primary-50"),"text-hover":pt("primary-40"),"text-selected":pt("primary-50"),"text-selected-hover":pt("primary-40"),"text-disabled":pt("neutral-50"),"text-disabled-subtle":pt("neutral-60"),"text-disabled-subtlest":pt("neutral-80"),"text-selected-disabled":pt("neutral-20"),"text-success":pt("success-40"),"text-warning":pt("warning-40"),"text-error":pt("error-40"),"text-info":pt("info-40"),"text-inverse":pt("white"),icon:pt("neutral-50"),"icon-subtle":pt("neutral-60"),"icon-strongest":pt("neutral-20"),"icon-primary":pt("primary-50"),"icon-primary-subtle":pt("primary-60"),"icon-primary-subtlest":pt("primary-70"),"icon-hover":pt("primary-40"),"icon-selected":pt("primary-50"),"icon-selected-hover":pt("primary-40"),"icon-disabled":pt("neutral-50"),"icon-disabled-subtle":pt("neutral-60"),"icon-selected-disabled":pt("neutral-60"),"icon-success":pt("success-50"),"icon-warning":pt("warning-60"),"icon-error":pt("error-50"),"icon-error-strong":pt("error-40"),"icon-info":pt("info-50"),"icon-inverse":pt("white"),"icon-primary-inverse":pt("primary-inverse"),border:pt("neutral-90"),"border-strong":pt("neutral-70"),"border-stronger":pt("neutral-50"),"border-primary":pt("primary-50"),"border-primary-subtle":pt("primary-60"),"border-hover":pt("primary-90"),"border-hover-strong":pt("primary-60"),"border-selected":pt("primary-50"),"border-selected-subtle":pt("primary-70"),"border-selected-subtlest":pt("primary-90"),"border-selected-hover":pt("primary-40"),"border-focus":pt("primary-60"),"border-focus-strong":pt("primary-50"),"border-disabled":pt("neutral-90"),"border-selected-disabled":pt("neutral-70"),"border-success":pt("success-60"),"border-warning":pt("warning-60"),"border-error":pt("error-60"),"border-error-focus":pt("error-60"),"border-error-focus-strong":pt("error-40"),"border-error-strong":pt("error-40"),"border-info":pt("info-60"),bg:pt("white"),"bg-strong":pt("neutral-100"),"bg-stronger":pt("neutral-95"),"bg-strongest":pt("neutral-90"),"bg-hover":pt("primary-95"),"bg-hover-strong":pt("primary-90"),"bg-hover-subtle":pt("primary-100"),"bg-hover-neutral":pt("neutral-100"),"bg-hover-neutral-strong":pt("neutral-90"),"bg-selected":pt("primary-95"),"bg-selected-hover":pt("primary-90"),"bg-selected-strong":pt("primary-90"),"bg-selected-stronger":pt("primary-70"),"bg-selected-strongest":pt("primary-50"),"bg-selected-strongest-hover":pt("primary-40"),"bg-disabled":pt("neutral-95"),"bg-selected-disabled":pt("neutral-95"),"bg-selected-stronger-disabled":pt("neutral-70"),"bg-success":pt("success-100"),"bg-success-hover":pt("success-95"),"bg-success-strong":pt("success-50"),"bg-success-strong-hover":pt("success-40"),"bg-warning":pt("warning-100"),"bg-warning-hover":pt("warning-95"),"bg-warning-strong":pt("warning-50"),"bg-warning-strong-hover":pt("warning-40"),"bg-info":pt("info-100"),"bg-info-hover":pt("info-95"),"bg-info-strong":pt("info-50"),"bg-info-strong-hover":pt("info-40"),"bg-error":pt("error-100"),"bg-error-hover":pt("error-95"),"bg-error-strong":pt("error-50"),"bg-error-strong-hover":pt("error-40"),"bg-inverse":pt("neutral-20"),"bg-inverse-subtle":pt("neutral-30"),"bg-inverse-subtler":pt("neutral-50"),"bg-inverse-subtlest":pt("neutral-60"),"bg-inverse-hover":pt("neutral-40"),"bg-primary":pt("primary-50"),"bg-primary-subtle":pt("primary-60"),"bg-primary-subtler":pt("primary-95"),"bg-primary-subtlest":pt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":pt("primary-40"),"bg-primary-subtlest-hover":pt("primary-90"),"bg-primary-subtlest-selected":pt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:pt("primary-50"),"hyperlink-hover":pt("primary-40"),"hyperlink-visited":pt("primary-40"),"hyperlink-inverse":pt("primary-inverse"),"focus-ring":pt("black"),"focus-ring-inverse":pt("white")},Dt={collections:{lifesg:xt,bookingsg:xt,rbs:xt,mylegacy:xt,ccube:xt,oneservice:xt,pa:{text:pt("neutral-30"),"text-subtle":pt("neutral-40"),"text-subtler":pt("neutral-50"),"text-subtlest":pt("neutral-70"),"text-primary":pt("neutral-10"),"text-hover":pt("neutral-70"),"text-selected":pt("neutral-20"),"text-selected-hover":pt("neutral-10"),"text-disabled":pt("neutral-50"),"text-disabled-subtle":pt("neutral-60"),"text-disabled-subtlest":pt("neutral-80"),"text-selected-disabled":pt("neutral-40"),"text-success":pt("success-40"),"text-warning":pt("warning-40"),"text-error":pt("brand-30"),"text-info":pt("neutral-40"),"text-inverse":pt("neutral-100"),icon:pt("neutral-40"),"icon-subtle":pt("neutral-50"),"icon-strongest":pt("neutral-10"),"icon-primary":pt("neutral-10"),"icon-primary-subtle":pt("neutral-30"),"icon-primary-subtlest":pt("neutral-60"),"icon-hover":pt("neutral-70"),"icon-selected":pt("brand-20"),"icon-selected-hover":pt("brand-10"),"icon-disabled":pt("neutral-50"),"icon-disabled-subtle":pt("neutral-60"),"icon-selected-disabled":pt("neutral-40"),"icon-success":pt("success-40"),"icon-warning":pt("warning-60"),"icon-error":pt("brand-30"),"icon-error-strong":pt("brand-10"),"icon-info":pt("neutral-40"),"icon-inverse":pt("neutral-100"),"icon-primary-inverse":"#F9B371",border:pt("neutral-90"),"border-strong":pt("neutral-30"),"border-stronger":pt("neutral-20"),"border-primary":pt("neutral-40"),"border-primary-subtle":pt("neutral-60"),"border-hover":pt("neutral-80"),"border-hover-strong":pt("neutral-10"),"border-selected":pt("brand-20"),"border-selected-subtle":pt("neutral-40"),"border-selected-subtlest":pt("neutral-70"),"border-selected-hover":pt("neutral-10"),"border-focus":pt("neutral-20"),"border-focus-strong":pt("neutral-10"),"border-disabled":pt("neutral-90"),"border-selected-disabled":pt("neutral-80"),"border-success":pt("success-40"),"border-warning":pt("warning-60"),"border-error":pt("brand-30"),"border-error-focus":pt("brand-20"),"border-error-focus-strong":pt("brand-10"),"border-error-strong":pt("brand-20"),"border-info":pt("neutral-40"),bg:pt("neutral-100"),"bg-strong":pt("neutral-95"),"bg-stronger":pt("neutral-90"),"bg-strongest":pt("neutral-80"),"bg-hover":pt("brand-90"),"bg-hover-strong":pt("brand-80"),"bg-hover-subtle":pt("neutral-90"),"bg-hover-neutral":pt("neutral-90"),"bg-hover-neutral-strong":pt("neutral-90"),"bg-selected":pt("brand-100"),"bg-selected-hover":pt("brand-30"),"bg-selected-strong":pt("brand-50"),"bg-selected-stronger":pt("brand-40"),"bg-selected-strongest":pt("brand-20"),"bg-selected-strongest-hover":pt("brand-10"),"bg-disabled":pt("neutral-90"),"bg-selected-disabled":pt("neutral-90"),"bg-selected-stronger-disabled":pt("neutral-80"),"bg-success":pt("success-100"),"bg-success-hover":pt("success-95"),"bg-success-strong":pt("success-50"),"bg-success-strong-hover":pt("success-40"),"bg-warning":pt("warning-100"),"bg-warning-hover":pt("warning-95"),"bg-warning-strong":pt("warning-50"),"bg-warning-strong-hover":pt("warning-40"),"bg-info":pt("neutral-95"),"bg-info-hover":pt("info-95"),"bg-info-strong":pt("info-50"),"bg-info-strong-hover":pt("info-40"),"bg-error":pt("brand-100"),"bg-error-hover":pt("error-95"),"bg-error-strong":pt("error-50"),"bg-error-strong-hover":pt("error-40"),"bg-inverse":pt("neutral-40"),"bg-inverse-subtle":pt("neutral-60"),"bg-inverse-subtler":pt("neutral-70"),"bg-inverse-subtlest":pt("neutral-80"),"bg-inverse-hover":pt("neutral-30"),"bg-primary":pt("brand-20"),"bg-primary-subtle":pt("brand-60"),"bg-primary-subtler":pt("brand-80"),"bg-primary-subtlest":pt("brand-100"),"bg-available":pt("success-60"),"bg-primary-hover":pt("brand-10"),"bg-primary-subtlest-hover":pt("brand-80"),"bg-primary-subtlest-selected":pt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:pt("neutral-10"),"hyperlink-hover":pt("neutral-40"),"hyperlink-visited":pt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":pt("black"),"focus-ring-inverse":pt("white")},a11yplayground:xt},defaultValue:"lifesg"},wt=e=>r=>{var t;const n=r.theme,a=gt(Dt,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?ut(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},Ft={text:wt("text"),"text-subtle":wt("text-subtle"),"text-subtler":wt("text-subtler"),"text-subtlest":wt("text-subtlest"),"text-primary":wt("text-primary"),"text-hover":wt("text-hover"),"text-selected":wt("text-selected"),"text-selected-hover":wt("text-selected-hover"),"text-disabled":wt("text-disabled"),"text-disabled-subtle":wt("text-disabled-subtle"),"text-disabled-subtlest":wt("text-disabled-subtlest"),"text-selected-disabled":wt("text-selected-disabled"),"text-success":wt("text-success"),"text-warning":wt("text-warning"),"text-error":wt("text-error"),"text-info":wt("text-info"),"text-inverse":wt("text-inverse"),icon:wt("icon"),"icon-subtle":wt("icon-subtle"),"icon-strongest":wt("icon-strongest"),"icon-primary":wt("icon-primary"),"icon-primary-subtle":wt("icon-primary-subtle"),"icon-primary-subtlest":wt("icon-primary-subtlest"),"icon-hover":wt("icon-hover"),"icon-selected":wt("icon-selected"),"icon-selected-hover":wt("icon-selected-hover"),"icon-disabled":wt("icon-disabled"),"icon-disabled-subtle":wt("icon-disabled-subtle"),"icon-selected-disabled":wt("icon-selected-disabled"),"icon-success":wt("icon-success"),"icon-warning":wt("icon-warning"),"icon-error":wt("icon-error"),"icon-error-strong":wt("icon-error-strong"),"icon-info":wt("icon-info"),"icon-inverse":wt("icon-inverse"),"icon-primary-inverse":wt("icon-primary-inverse"),border:wt("border"),"border-strong":wt("border-strong"),"border-stronger":wt("border-stronger"),"border-primary":wt("border-primary"),"border-primary-subtle":wt("border-primary-subtle"),"border-hover":wt("border-hover"),"border-hover-strong":wt("border-hover-strong"),"border-selected":wt("border-selected"),"border-selected-subtle":wt("border-selected-subtle"),"border-selected-subtlest":wt("border-selected-subtlest"),"border-selected-hover":wt("border-selected-hover"),"border-focus":wt("border-focus"),"border-focus-strong":wt("border-focus-strong"),"border-disabled":wt("border-disabled"),"border-selected-disabled":wt("border-selected-disabled"),"border-success":wt("border-success"),"border-warning":wt("border-warning"),"border-error":wt("border-error"),"border-error-focus":wt("border-error-focus"),"border-error-focus-strong":wt("border-error-focus-strong"),"border-error-strong":wt("border-error-strong"),"border-info":wt("border-info"),bg:wt("bg"),"bg-strong":wt("bg-strong"),"bg-stronger":wt("bg-stronger"),"bg-strongest":wt("bg-strongest"),"bg-hover":wt("bg-hover"),"bg-hover-strong":wt("bg-hover-strong"),"bg-hover-subtle":wt("bg-hover-subtle"),"bg-hover-neutral":wt("bg-hover-neutral"),"bg-hover-neutral-strong":wt("bg-hover-neutral-strong"),"bg-selected":wt("bg-selected"),"bg-selected-hover":wt("bg-selected-hover"),"bg-selected-strong":wt("bg-selected-strong"),"bg-selected-stronger":wt("bg-selected-stronger"),"bg-selected-strongest":wt("bg-selected-strongest"),"bg-selected-strongest-hover":wt("bg-selected-strongest-hover"),"bg-disabled":wt("bg-disabled"),"bg-selected-disabled":wt("bg-selected-disabled"),"bg-selected-stronger-disabled":wt("bg-selected-stronger-disabled"),"bg-success":wt("bg-success"),"bg-success-hover":wt("bg-success-hover"),"bg-success-strong":wt("bg-success-strong"),"bg-success-strong-hover":wt("bg-success-strong-hover"),"bg-warning":wt("bg-warning"),"bg-warning-hover":wt("bg-warning-hover"),"bg-warning-strong":wt("bg-warning-strong"),"bg-warning-strong-hover":wt("bg-warning-strong-hover"),"bg-info":wt("bg-info"),"bg-info-hover":wt("bg-info-hover"),"bg-info-strong":wt("bg-info-strong"),"bg-info-strong-hover":wt("bg-info-strong-hover"),"bg-error":wt("bg-error"),"bg-error-hover":wt("bg-error-hover"),"bg-error-strong":wt("bg-error-strong"),"bg-error-strong-hover":wt("bg-error-strong-hover"),"bg-inverse":wt("bg-inverse"),"bg-inverse-subtle":wt("bg-inverse-subtle"),"bg-inverse-subtler":wt("bg-inverse-subtler"),"bg-inverse-subtlest":wt("bg-inverse-subtlest"),"bg-inverse-hover":wt("bg-inverse-hover"),"bg-primary":wt("bg-primary"),"bg-primary-subtle":wt("bg-primary-subtle"),"bg-primary-subtler":wt("bg-primary-subtler"),"bg-primary-subtlest":wt("bg-primary-subtlest"),"bg-available":wt("bg-available"),"bg-primary-hover":wt("bg-primary-hover"),"bg-primary-subtlest-hover":wt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":wt("bg-primary-subtlest-selected"),"overlay-strong":wt("overlay-strong"),"overlay-subtle":wt("overlay-subtle"),hyperlink:wt("hyperlink"),"hyperlink-hover":wt("hyperlink-hover"),"hyperlink-visited":wt("hyperlink-visited"),"hyperlink-inverse":wt("hyperlink-inverse"),"focus-ring":wt("focus-ring"),"focus-ring-inverse":wt("focus-ring-inverse")},$t={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:mt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Ft.border(r),u=mt.solid;return v`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:mt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Ft.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return v`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Et=e=>1===e.length&&"theme"in e[0],Ct=e=>(...r)=>t=>{const n=Et(r)?[]:r,a=Et(r)?r[0]:t,i=a.theme;return(0,gt($t,null==i?void 0:i.borderScheme)[e])(...n)(a)},St={solid:Ct("solid"),"dashed-default":Ct("dashed-default")},Bt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},At=e=>r=>{var t;const n=r.theme,a=gt(Bt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ut(a,e,n.overrides.breakpoint):a[e],i},Ot={"xxs-min":At("xxs-min"),"xxs-max":At("xxs-max"),"xs-min":At("xs-min"),"xs-max":At("xs-max"),"sm-min":At("sm-min"),"sm-max":At("sm-max"),"md-min":At("md-min"),"md-max":At("md-max"),"lg-min":At("lg-min"),"lg-max":At("lg-max"),"xl-min":At("xl-min"),"xl-max":At("xl-max"),"xxl-min":At("xxl-min"),"xxs-column":At("xxs-column"),"xs-column":At("xs-column"),"sm-column":At("sm-column"),"md-column":At("md-column"),"lg-column":At("lg-column"),"xl-column":At("xl-column"),"xxl-column":At("xxl-column"),"xxs-gutter":At("xxs-gutter"),"xs-gutter":At("xs-gutter"),"sm-gutter":At("sm-gutter"),"md-gutter":At("md-gutter"),"lg-gutter":At("lg-gutter"),"xl-gutter":At("xl-gutter"),"xxl-gutter":At("xxl-gutter"),"xxs-margin":At("xxs-margin"),"xs-margin":At("xs-margin"),"sm-margin":At("sm-margin"),"md-margin":At("md-margin"),"lg-margin":At("lg-margin"),"xl-margin":At("xl-margin"),"xxl-margin":At("xxl-margin")},Mt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ot["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),kt={MaxWidth:Mt("max-width"),MinWidth:Mt("min-width")},zt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Yt=e=>r=>{var t;const n=r.theme,a=gt(zt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ut(a,e,n.overrides.fontSpec):a[e]},jt={"heading-size-xxl":Yt("heading-size-xxl"),"heading-size-xl":Yt("heading-size-xl"),"heading-size-lg":Yt("heading-size-lg"),"heading-size-md":Yt("heading-size-md"),"heading-size-sm":Yt("heading-size-sm"),"heading-size-xs":Yt("heading-size-xs"),"heading-lh-xxl":Yt("heading-lh-xxl"),"heading-lh-xl":Yt("heading-lh-xl"),"heading-lh-lg":Yt("heading-lh-lg"),"heading-lh-md":Yt("heading-lh-md"),"heading-lh-sm":Yt("heading-lh-sm"),"heading-lh-xs":Yt("heading-lh-xs"),"heading-ls-xxl":Yt("heading-ls-xxl"),"heading-ls-xl":Yt("heading-ls-xl"),"heading-ls-lg":Yt("heading-ls-lg"),"heading-ls-md":Yt("heading-ls-md"),"heading-ls-sm":Yt("heading-ls-sm"),"heading-ls-xs":Yt("heading-ls-xs"),"weight-light":Yt("weight-light"),"weight-regular":Yt("weight-regular"),"weight-semibold":Yt("weight-semibold"),"weight-bold":Yt("weight-bold"),"font-family":Yt("font-family"),"body-size-baseline":Yt("body-size-baseline"),"body-size-md":Yt("body-size-md"),"body-size-sm":Yt("body-size-sm"),"body-size-xs":Yt("body-size-xs"),"body-lh-baseline":Yt("body-lh-baseline"),"body-lh-md":Yt("body-lh-md"),"body-lh-sm":Yt("body-lh-sm"),"body-lh-xs":Yt("body-lh-xs"),"body-ls-baseline":Yt("body-ls-baseline"),"body-ls-md":Yt("body-ls-md"),"body-ls-sm":Yt("body-ls-sm"),"body-ls-xs":Yt("body-ls-xs"),"form-label-size":Yt("form-label-size"),"form-description-size":Yt("form-description-size"),"form-label-lh":Yt("form-label-lh"),"form-description-lh":Yt("form-description-lh"),"form-label-ls":Yt("form-label-ls"),"form-description-ls":Yt("form-description-ls")},Rt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return v`
        font-family: ${Yt("font-family")};
        font-size: ${Yt(e)};
        font-weight: ${Yt(r)};
        line-height: ${Yt(t)};
        letter-spacing: ${Yt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Tt=(e={})=>({"heading-xxl-light":Rt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Rt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Rt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Rt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Rt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Rt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Rt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Rt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Rt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Rt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Rt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Rt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Rt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Rt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Rt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Rt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Rt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Rt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Rt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Rt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Rt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Rt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Rt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Rt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Rt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Rt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Rt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Rt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Rt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Rt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Rt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Rt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Rt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Rt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Rt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Rt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Rt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Rt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Rt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Rt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Rt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Rt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),_t=Tt({disableLigatures:!0}),It={collections:{default:Tt(),bookingsg:_t,pa:Tt({disableLigatures:!0}),a11yplayground:Tt({disableLigatures:!0})},defaultValue:"default"},Ht=e=>r=>{var t;const n=r.theme,a=gt(It,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ut(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Lt={"heading-xxl-light":Ht("heading-xxl-light"),"heading-xxl-regular":Ht("heading-xxl-regular"),"heading-xxl-semibold":Ht("heading-xxl-semibold"),"heading-xxl-bold":Ht("heading-xxl-bold"),"heading-xl-light":Ht("heading-xl-light"),"heading-xl-regular":Ht("heading-xl-regular"),"heading-xl-semibold":Ht("heading-xl-semibold"),"heading-xl-bold":Ht("heading-xl-bold"),"heading-lg-light":Ht("heading-lg-light"),"heading-lg-regular":Ht("heading-lg-regular"),"heading-lg-semibold":Ht("heading-lg-semibold"),"heading-lg-bold":Ht("heading-lg-bold"),"heading-md-light":Ht("heading-md-light"),"heading-md-regular":Ht("heading-md-regular"),"heading-md-semibold":Ht("heading-md-semibold"),"heading-md-bold":Ht("heading-md-bold"),"heading-sm-light":Ht("heading-sm-light"),"heading-sm-regular":Ht("heading-sm-regular"),"heading-sm-semibold":Ht("heading-sm-semibold"),"heading-sm-bold":Ht("heading-sm-bold"),"heading-xs-light":Ht("heading-xs-light"),"heading-xs-regular":Ht("heading-xs-regular"),"heading-xs-semibold":Ht("heading-xs-semibold"),"heading-xs-bold":Ht("heading-xs-bold"),"body-baseline-light":Ht("body-baseline-light"),"body-baseline-regular":Ht("body-baseline-regular"),"body-baseline-semibold":Ht("body-baseline-semibold"),"body-baseline-bold":Ht("body-baseline-bold"),"body-md-light":Ht("body-md-light"),"body-md-regular":Ht("body-md-regular"),"body-md-semibold":Ht("body-md-semibold"),"body-md-bold":Ht("body-md-bold"),"body-sm-light":Ht("body-sm-light"),"body-sm-regular":Ht("body-sm-regular"),"body-sm-semibold":Ht("body-sm-semibold"),"body-sm-bold":Ht("body-sm-bold"),"body-xs-light":Ht("body-xs-light"),"body-xs-regular":Ht("body-xs-regular"),"body-xs-semibold":Ht("body-xs-semibold"),"body-xs-bold":Ht("body-xs-bold"),"form-label":Ht("form-label"),"form-description":Ht("form-description")},Wt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,a=gt(Wt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ut(a,e,n.overrides.motion):a[e]},Nt={"duration-150":Pt("duration-150"),"duration-250":Pt("duration-250"),"duration-350":Pt("duration-350"),"duration-500":Pt("duration-500"),"duration-800":Pt("duration-800"),"duration-1000":Pt("duration-1000"),"ease-default":Pt("ease-default"),"ease-standard":Pt("ease-standard"),"ease-entrance":Pt("ease-entrance"),"ease-exit":Pt("ease-exit")},Vt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Ut=e=>r=>{var t;const n=r.theme,a=gt(Vt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ut(a,e,n.overrides.radius)}px`:`${a[e]}px`},Zt={none:Ut("none"),xs:Ut("xs"),sm:Ut("sm"),md:Ut("md"),lg:Ut("lg"),full:Ut("full")},Kt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Jt=e=>r=>{var t;const n=r.theme,a=gt(Kt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ut(a,e,n.overrides.spacing)}px`:`${a[e]}px`},qt={"spacing-0":Jt("spacing-0"),"spacing-4":Jt("spacing-4"),"spacing-8":Jt("spacing-8"),"spacing-12":Jt("spacing-12"),"spacing-16":Jt("spacing-16"),"spacing-20":Jt("spacing-20"),"spacing-24":Jt("spacing-24"),"spacing-32":Jt("spacing-32"),"spacing-40":Jt("spacing-40"),"spacing-48":Jt("spacing-48"),"spacing-64":Jt("spacing-64"),"spacing-72":Jt("spacing-72"),"layout-xs":Jt("layout-xs"),"layout-sm":Jt("layout-sm"),"layout-md":Jt("layout-md"),"layout-lg":Jt("layout-lg"),"layout-xl":Jt("layout-xl"),"layout-xxl":Jt("layout-xxl"),"layout-xxxl":Jt("layout-xxxl")},Xt=Object.assign(Object.assign({},Ft),{Primitive:vt}),Gt=Object.assign(Object.assign({},Lt),{Spec:jt}),Qt=Nt,en=Object.assign(Object.assign({},mt),{Util:St}),rn=qt,tn=Zt,nn=Ot,an=kt,on=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=on(e.$variant);return v`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const sn=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${rn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>on(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${tn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Xt["border-focus"]};
    }
`,ln=p.button`
    ${sn}
    cursor: pointer;
`;p.div`
    ${sn}
`;const dn=x`
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
    border: ${en["width-010"]} ${en.solid} ${Xt.border};
    border-radius: ${tn.sm};
    background: ${Xt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Xt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Xt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${dn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?v`
                background: ${Xt["bg-disabled"]};

                ${ln} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Xt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${ln} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?v`
                border-color: ${Xt["border-error"]};

                :focus-within {
                    border-color: ${Xt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Xt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Qt["duration-250"]} ${Qt["ease-default"]};
    margin-left: ${rn["spacing-16"]};
`,p(y)`
    color: ${Xt.icon};
`,p.div`
    height: 1px;
    background: ${Xt.border};
    margin: 0 ${rn["spacing-8"]};
`,p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return v`
                color: ${Xt["text-disabled"]};
            `}}
`;p(p.div`
    ${e=>"small"===e.$variant?Gt["body-md-regular"]:Gt["body-baseline-regular"]}
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
    color: ${Xt["text-subtler"]};
`;var cn=function(e,r){return cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},cn(e,r)};var un=function(){return un=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},un.apply(this,arguments)};var gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var hn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},bn="object"==typeof gn&&gn&&gn.Object===Object&&gn,mn="object"==typeof self&&self&&self.Object===Object&&self,fn=bn||mn||Function("return this")(),yn=fn,pn=function(){return yn.Date.now()},vn=/\s/;var xn=function(e){for(var r=e.length;r--&&vn.test(e.charAt(r)););return r},Dn=/^\s+/;var wn=function(e){return e?e.slice(0,xn(e)+1).replace(Dn,""):e},Fn=fn.Symbol,$n=Fn,En=Object.prototype,Cn=En.hasOwnProperty,Sn=En.toString,Bn=$n?$n.toStringTag:void 0;var An=function(e){var r=Cn.call(e,Bn),t=e[Bn];try{e[Bn]=void 0;var n=!0}catch(e){}var a=Sn.call(e);return n&&(r?e[Bn]=t:delete e[Bn]),a},On=Object.prototype.toString;var Mn=An,kn=function(e){return On.call(e)},zn=Fn?Fn.toStringTag:void 0;var Yn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":zn&&zn in Object(e)?Mn(e):kn(e)},jn=function(e){return null!=e&&"object"==typeof e};var Rn=wn,Tn=hn,_n=function(e){return"symbol"==typeof e||jn(e)&&"[object Symbol]"==Yn(e)},In=/^[-+]0x[0-9a-f]+$/i,Hn=/^0b[01]+$/i,Ln=/^0o[0-7]+$/i,Wn=parseInt;var Pn=hn,Nn=pn,Vn=function(e){if("number"==typeof e)return e;if(_n(e))return NaN;if(Tn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Tn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Rn(e);var t=Hn.test(e);return t||Ln.test(e)?Wn(e.slice(2),t?2:8):In.test(e)?NaN:+e},Un=Math.max,Zn=Math.min;var Kn=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=Nn();if(b(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Zn(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?h(e):(n=a=void 0,o)}function y(){var e=Nn(),t=b(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),h(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Vn(r)||0,Pn(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Un(Vn(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(Nn())},y},Jn=Kn,qn=hn;var Xn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Jn(e,r,{leading:n,maxWait:r,trailing:a})},Gn=function(e,r,t,n){switch(r){case"debounce":return Kn(e,t,n);case"throttle":return Xn(e,t,n);default:return e}},Qn=function(e){return"function"==typeof e},ea=function(){return"undefined"==typeof window},ra=function(e){return e instanceof Element||e instanceof HTMLDocument},ta=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Qn(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ea()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ea())return null;if(r)return document.querySelector(r);if(n&&ra(n))return n;if(t.targetRef&&ra(t.targetRef.current))return t.targetRef.current;var a=R(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=ta(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!ea()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Qn(r)?"renderProp":Qn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,ea()||(t.resizeHandler=Gn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}cn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ea()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var na,aa=ea()?u:g;function ia(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=h?h:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return aa((function(){if(!ea()){var e=ta(m,w,c,g);v.current=Gn((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!ea()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,b,p.current]),un({ref:p},D)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(na||(na={}));const oa=p.div`
    display: flex;
    flex-direction: column;
`,sa=e=>"right"===e?"bottom-end":"bottom-start",la=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const v=D(),x=nn["sm-max"]({theme:v}),R=i(null),T=i(null),{width:_=0}=ia({targetRef:R,handleHeight:!1}),I={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:L,context:W}=F({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:$,placement:sa(f),middleware:[E(m),C(),S({limiter:B()}),A({apply({availableHeight:e}){T.current&&Object.assign(T.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),I]}),P=(()=>{const[e,r]=o(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(na.Change,e),t.events.emit(na.Ready),()=>t.events.off(na.Change,e)}),[t]),e})(),{isMounted:N,styles:V}=O(W,{initial:{opacity:0},open:{opacity:1},duration:300}),U=M(W,{enabled:n,toggle:b}),Z=k(W,{enabled:n}),{getReferenceProps:K,getFloatingProps:J}=z([U,Z]);return e(r,{children:[t("div",Object.assign({ref:e=>{R.current=e,H.setReference(e)}},K(),{children:c()})),N&&t(Y,{children:t(j,{context:W,modal:!1,initialFocus:T,returnFocus:!1,children:t("div",Object.assign({ref:H.setFloating,style:Object.assign(Object.assign({},L),{zIndex:null!==(p=null!=h?h:P)&&void 0!==p?p:50})},J(),{children:t(oa,{ref:T,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:g({elementWidth:_})})}))})})]})},da=p.div`
    --vertical-inset: ${rn["spacing-24"]};
    --horizontal-inset: ${rn["spacing-20"]};
    --header-bottom-spacing: ${rn["spacing-4"]};

    border: ${en["width-010"]} ${en.solid} ${Xt.border};
    border-radius: ${tn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${an.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var ca={exports:{}};ca.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=o||(a||i?1:h.getDate()),m=a||h.getFullYear(),f=0;a&&!i||(f=i>0?i-1:h.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,b,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,b,y,p,v,x)):new Date(m,f,b,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,b=1;b<=h;b+=1){o[1]=s[b-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else a.call(this,e)}}}();var ua=W(ca.exports),ga={exports:{}};ga.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ha=W(ga.exports),ba={exports:{}};ba.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ma=W(ba.exports),fa={exports:{}};fa.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ya,pa,va,xa=W(fa.exports),Da={exports:{}},wa=W(Da.exports=(ya={year:0,month:1,day:2,hour:3,minute:4,second:5},pa={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=pa[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),pa[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ya[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));N.extend(ha),N.extend(xa),N.extend(ma),N.extend(ua),N.extend(wa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=N(r).startOf("week");return Fa(t).map((e=>$a(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return $a(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(N(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+N(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=N(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?N(n):void 0,a?N(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(va||(va={}));const Fa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},$a=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ea=[1,3,5,7,8,10,12],Ca=[4,6,9,11];var Sa,Ba,Aa,Oa;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Ea.includes(i)?Math.min(a,31).toString():Ca.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=N(e,t);return N(r,t).diff(n,"minute")},e.toDayjs=e=>e?N(e):N(),e.addMinutesToTime=(e,r,t="HH:mm")=>N(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>N(e).isSame(N(r),t)}(Sa||(Sa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!N(e).isBefore(n,"day"))||!(!a||!N(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(N(e).isValid())return e}return""}}(Ba||(Ba={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Aa||(Aa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Oa||(Oa={}));const Ma=e=>{const[r,t]=o(e),n=i(e);return[r,h((e=>{n.current=e,t(e)}),[]),n]},ka=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,za=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ya=p.div`
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
    animation: ${za} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ja=p(Ya)`
    animation-delay: -0.45s;
`,Ra=p(Ya)`
    animation-delay: -0.3s;
`,Ta=p(Ya)`
    animation-delay: -0.15s;
`,_a={collections:{default:{Button:{"button-radius":Zt.sm,"button-default-colour-bg":Ft["bg-primary"],"button-default-colour-bg-hover":Ft["bg-primary-hover"],"button-default-colour-text":Ft["text-inverse"],"button-secondary-colour-border":Ft["border-primary"],"button-secondary-colour-text":Ft["text-primary"],"button-light-colour-text":Ft["text-primary"],"button-link-colour-text":Ft["text-primary"]}},pa:{Button:{"button-radius":Zt.full,"button-default-colour-bg":Ft["bg-primary"],"button-default-colour-bg-hover":Ft["bg-primary-hover"],"button-default-colour-text":Ft["text-inverse"],"button-secondary-colour-border":Ft["border-primary"],"button-secondary-colour-text":Ft["text-primary"],"button-light-colour-text":Ft["text-primary"],"button-link-colour-text":Ft["text-primary"]}}},defaultValue:"default"},Ia=(e,r)=>t=>{var n,a;const i=t.theme,o=gt(_a,null==i?void 0:i.componentScheme);return Ha((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},Ha=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},La=Ia("Button","button-radius"),Wa=Ia("Button","button-default-colour-bg"),Pa=Ia("Button","button-default-colour-bg-hover"),Na=Ia("Button","button-default-colour-text"),Va=Ia("Button","button-secondary-colour-border"),Ua=Ia("Button","button-secondary-colour-text"),Za=Ia("Button","button-light-colour-text"),Ka=Ia("Button","button-link-colour-text"),Ja=p.button`
    padding: ${rn["spacing-8"]} ${rn["spacing-16"]};
    min-width: 4rem;
    border: ${en["width-010"]} ${en.solid} transparent;
    transition: all ${Qt["duration-250"]} ${Qt["ease-default"]};
    border-radius: ${La};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${Xt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Xt["border-error-strong"]:Va};

                    color: ${e.$buttonIsDanger?Xt["text-error"]:Ua};

                    &:hover,
                    &:active {
                        background-color: ${Xt["bg-hover-neutral"]};
                    }
                `;case"light":return v`
                    background-color: ${Xt.bg};
                    border-color: ${Xt.border};

                    color: ${e.$buttonIsDanger?Xt["text-error"]:Za};

                    &:hover,
                    &:active {
                        background-color: ${Xt["bg-hover-neutral"]};
                    }
                `;case"link":return v`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Xt["text-error"]:Ka};
                    &:hover,
                    &:active {
                        background-color: ${Xt["bg-hover-neutral"]};
                    }
                `;case"disabled":return v`
                    background-color: ${Xt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Xt["text-disabled"]};
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?Xt["bg-error-strong"]:Wa};};

                    ${an.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Na}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Xt["bg-error-strong-hover"]:Pa}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return v`
                    height: 2.5rem;
                    ${Gt["body-md-semibold"]}

                    ${an.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return v`
                    height: 4rem;
                    ${Gt["heading-md-semibold"]}

                    ${an.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return v`
                    height: 3rem;
                    ${Gt["heading-xs-semibold"]}

                    ${an.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,qa=p((({color:r,className:n,size:a})=>e(ka,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(Ya,{id:"inner1"}),t(ja,{id:"inner2"}),t(Ra,{id:"inner3"}),t(Ta,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Xa=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ja,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(qa,{}),t("span",{children:a})]}))};Xa.displayName="Button.Default";const Ga=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ja,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(qa,{}),t("span",{children:a})]}))};Ga.displayName="Button.Small";const Qa=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ja,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(qa,{}),t("span",{children:a})]}))};Qa.displayName="Button.Large";const ei={Default:a.forwardRef(Xa),Small:a.forwardRef(Ga),Large:a.forwardRef(Qa)},ri=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rn["spacing-24"]};
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
                background-color: ${Xt["bg-hover-neutral"]};
            `}
    }
`,ti=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=H(e,["children","focusHighlight","focusOutline","type"]);return t(ri,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),ni=v`
    color: ${Xt.icon};
    height: 1rem;
    width: 1rem;
`,ai=p(T)`
    ${ni}
`,ii=p(_)`
    ${ni}
`,oi=p(y)`
    ${ni}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,si=p.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,li=p.div`
    display: flex;
    flex: 1;
    position: relative;
`,di=p.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,ci=p.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Xt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return v`
                display: none;
            `}}
`,ui=p.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,gi=p.div`
    display: flex;
`,hi=p.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?v`
                display: none;
            `:e.$expanded?v`
                ${oi} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,bi=p.span`
    ${Gt["body-md-regular"]}
    color: ${Xt.text};
`,mi=p.div`
    display: flex;
`,fi=p(ti)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,yi=p.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,pi=p(ei.Small)`
    flex: 1;
`,vi=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,xi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${tn.md};
    margin: 0 0.5rem;
    transition: ${Qt["duration-150"]} ${Qt["ease-default"]};

    // default styles
    ${Gt["body-md-regular"]}
    border-radius: ${tn.md};
    border: ${en["width-010"]} ${en.solid} transparent;
    background-clip: border-box;
    color: ${Xt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?v`
                cursor: pointer;
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?v`
                background: ${Xt["bg-selected"]};
                border-color: ${Xt["border-selected"]};
                color: ${Xt["text-selected"]};
                font-weight: ${Gt.Spec["weight-semibold"]};

                ${r&&v`
                    &:hover {
                        background: ${Xt["bg-selected-hover"]};
                        border-color: ${Xt["border-selected-hover"]};
                        color: ${Xt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?v`
                color: ${Xt["text-primary"]};
                font-weight: ${Gt.Spec["weight-semibold"]};
            `:t?v`
                color: ${Xt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?v`
                &:hover {
                    background: ${Xt["bg-selected-hover"]};
                    border-color: ${Xt["border-selected-hover"]};
                    color: ${Xt["text-selected-hover"]};
                    font-weight: ${Gt.Spec["weight-semibold"]};
                }
            `:v`
            &:hover {
                background: ${Xt["bg-hover"]};
                color: ${Xt["text-hover"]};
                font-weight: ${Gt.Spec["weight-semibold"]};
            }
        `}}
`,Di=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:h})=>{const m=b((()=>va.generateMonths(N(e))),[e]),f=i(new Array(m.length).fill(null)),[y,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==y&&(null===(e=f.current[y])||void 0===e||e.focus())}),[y,m]);const v=(e,r)=>{r||h(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},D=e=>{const r=e.format("MMMM"),t=(n=e,!va.isWithinRange(n,d?N(d):void 0,c?N(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":N().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(vi,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=D(e);return t(xi,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},wi=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Fi=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Qt["duration-150"]} ${Qt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Gt["body-md-regular"]}
    border-radius: ${tn.md};
    border: ${en["width-010"]} ${en.solid} transparent;
    background-clip: border-box;
    color: ${Xt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?v`
                cursor: pointer;
            `:r?v`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?v`
                background: ${Xt["bg-selected"]};
                border-color: ${Xt["border-selected"]};
                color: ${Xt["text-selected"]};
                font-weight: ${Gt.Spec["weight-semibold"]};

                ${r&&v`
                    &:hover {
                        background: ${Xt["bg-selected-hover"]};
                        border-color: ${Xt["border-selected-hover"]};
                        color: ${Xt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?v`
                color: ${Xt["text-primary"]};
                font-weight: ${Gt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?v`
                color: ${Xt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?v`
                &:hover {
                    background: ${Xt["bg-selected-hover"]};
                    border-color: ${Xt["border-selected-hover"]};
                    color: ${Xt["text-selected-hover"]};
                    font-weight: ${Gt.Spec["weight-semibold"]};
                }
            `:v`
            &:hover {
                background: ${Xt["bg-hover"]};
                color: ${Xt["text-hover"]};
                font-weight: ${Gt.Spec["weight-semibold"]};
            }
        `}}
`,$i=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:h,setCalendarDate:m})=>{const f=b((()=>va.generateDecadeOfYears(N(e))),[e]),y=i(new Array(f.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=f.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=y.current[r])||void 0===e||e.focus())}),[p,f]);const x=(e,r)=>{r||h(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},w=e=>{const r=f.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!va.isWithinRange(i,d?N(d):void 0,c?N(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":N().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return f.length?t(wi,{onBlur:()=>{v(null)},children:f.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=w(e);return t(Fi,{ref:e=>{y.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Ei=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:h,selectedEndDate:b,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A,isFocusable:O=!1}=n,M=H(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[k,z]=o(Sa.toDayjs(l)),[Y,j]=o(Sa.toDayjs(l)),[R,T]=o("default"),_=i(null),I=i(null),L=i(null),W=i(null);m(a,(()=>({defaultView(){T("default")},resetView(){const e=Sa.toDayjs(l);z(e),j(e),T("default")},setCalendarDate(e){const r=Sa.toDayjs(e);z(r),j(r)}}))),u((()=>{const e=Sa.toDayjs(l);z(e),j(e)}),[l]),u((()=>{G(Y)}),[Y]);const P=()=>{var e;"month-options"!==R?(T("month-options"),null===(e=L.current)||void 0===e||e.focus()):(T("default"),z(Y))},V=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P(),null===(r=W.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?k.subtract(1,"month"):k.add(1,"month");if(!va.isWithinRange(r,d?N(d):void 0,c?N(c):void 0,"month"))return;z(r),"default"===R&&j(r)}},U=()=>{"default"!==R?(T("default"),z(Y)):T("year-options")},Z=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),U()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===R?"ArrowUp"===e.key?k.subtract(10,"year"):k.add(10,"year"):"ArrowUp"===e.key?k.subtract(1,"year"):k.add(1,"year"),!va.isWithinRange(r,d?N(d):void 0,c?N(c):void 0,"year"))return;z(r),"default"===R&&j(r)}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=$?$(k):k.subtract(1,"month");switch(R){case"default":j(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=E?E(k):k.add(1,"month");switch(R){case"default":j(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},q=e=>{z(e),j(e),x||T("default")},X=()=>{const e=Sa.toDayjs(l);z(e),j(e),"default"===R?Q("reset"):T("default")},G=e=>{v&&v(e)},Q=e=>{w&&w(e)},ee=()=>{if(!d||p)return!1;const e=N(d);return"month-options"===R?!va.isPreviousYearWithinRange(k,e):"year-options"===R?!va.isPreviousDecadeWithinRange(k,e):C?C(k):!va.isPreviousMonthWithinRange(k,e)},re=()=>{if(!c||p)return!1;const e=N(c);return"month-options"===R?!va.isNextYearWithinRange(k,e):"year-options"===R?!va.isNextDecadeWithinRange(k,e):S?S(k):!va.isNextMonthWithinRange(k,e)},te=()=>{const n=B?B(k):k.format("MMM"),a=N(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===R){const{beginDecade:e,endDecade:r}=va.getStartEndDecade(k);return`${e} to ${r}`}return A?A(k):k.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(hi,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:P,onKeyDown:V,tabIndex:O?0:-1,children:[t(bi,{children:n}),t(oi,{})]}),e(hi,{ref:W,"aria-label":o[R],type:"button",$expanded:"default"!==R,id:"year-dropdown",onClick:U,onKeyDown:Z,tabIndex:O?0:-1,children:[t(bi,{children:i}),t(oi,{})]})]})},ne=()=>{switch(R){case"month-options":return t(Di,{calendarDate:k,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:b,viewCalendarDate:Y,isNewSelection:!!f,onMonthSelect:q,allowDisabledSelection:p});case"year-options":return t($i,{setCalendarDate:z,calendarDate:k,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:b,viewCalendarDate:Y,isNewSelection:!!f,onYearSelect:q,allowDisabledSelection:p});default:return null}};return e(si,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},M,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[R];return e(ui,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(gi,{children:te()}),e(mi,{children:[t(fi,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:t(ai,{})}),t(fi,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:O?0:-1,children:t(ii,{})})]})]})})(),t(li,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:R}):s;if(y)return e(r,{children:["default"===R&&n,ne()]});{const a="default"===R;return e(r,{children:[t(di,{inert:a?void 0:"",children:n}),t(ci,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===R)&&D;return e(yi,{children:[t(pi,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X,children:"Cancel"}),t(pi,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(z(Y),"default"===R?Q("confirmed"):T("default"))},disabled:r,children:"Done"})]})})()]}))})),Ci=p.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Si=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Gt["body-sm-semibold"]};
    color: ${Xt.text};
`,Bi=p.div`
    grid-column: 1 / -1;
    display: flex;
`,Ai=e=>{let r=Xt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Xt["bg-hover"],t=Xt["bg-hover"];break;case"hover":r=Xt["bg-hover-strong"],t=Xt["bg-hover-strong"];break;case"hover-outline":r=Xt["bg-hover-subtle"],t=Xt["border-hover"];break;case"selected-outline":r=Xt["bg-selected"],t=Xt["border-selected"];break;case"selected-outline-subtle":r=Xt["bg-selected"],t=Xt["border-selected-subtle"];break;case"selected-hover":r=Xt["bg-selected-hover"];break;case"selected-hover-outline":r=Xt["bg-selected-hover"],t=Xt["border-selected-hover"]}return{color:r,borderColor:t}},Oi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Mi=p.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Qt["duration-150"]} ${Qt["ease-default"]};
    border: ${en["width-010"]} ${en.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Ai(e);return v`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,ki=p(Mi)`
    left: 0;
`,zi=p(Mi)`
    right: 0;
`,Yi=p.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Qt["duration-150"]} ${Qt["ease-default"]};

    border: ${en["width-010"]} ${en.solid} transparent;
    border-radius: ${tn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Ai(e);return v`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,ji=p(Yi)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Ri=p(Yi)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Ti=p.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,_i=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Gt["body-md-regular"]}
    transition: ${Qt["duration-150"]} ${Qt["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?v`
                    visibility: hidden;
                `:v`
                color: ${Xt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return v`
                    font-weight: ${Gt.Spec["weight-semibold"]};
                    color: ${Xt["text-selected"]};
                `;case"selected-hover":return v`
                    font-weight: ${Gt.Spec["weight-semibold"]};
                    color: ${Xt["text-selected-hover"]};
                `;case"current":return v`
                    font-weight: ${Gt.Spec["weight-semibold"]};
                    color: ${Xt["text-primary"]};
                `;case"hover":return v`
                    font-weight: ${Gt.Spec["weight-semibold"]};
                    color: ${Xt["text-hover"]};
                `;case"unavailable":return v`
                    color: ${Xt["text-disabled-subtlest"]};
                `;case"hidden":return v`
                    visibility: hidden;
                `;default:return v`
                    color: ${Xt.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Ii=p.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Hi=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:h,onHover:b,onFocus:m,onHoverEnd:f,onKeyDown:y,tabIndex:p=-1,role:v="button",focusDate:x})=>{const D=N().isSame(g,"day"),w=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Oi,{children:[t(ki,{$type:r}),t(ji,{$type:a}),t(zi,{$type:n}),t(Ri,{$type:o}),t(Ti,{$interactive:d,children:e(_i,{ref:$,tabIndex:p,role:v,"aria-label":w,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{h(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{b(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&D&&t(Ii,{$disabled:l})]})})]})},Li=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:h,onSelect:b,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p=-1})=>{const v=va.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{b(e,!x)},w=()=>{const e=N(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:N(s),tabIndex:p};return t(Hi,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(N().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=w();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};N.extend(ha);const Wi=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:m,maxDate:f,allowDisabledSelection:y,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=h((()=>s&&N(s).isSame(r,"month")?N(s):l&&N(l).isSame(r,"month")?N(l):N().isSame(r,"month")?N():m&&r.isSame(N(m),"month")?N(m):N(r).startOf("month")),[s,r,l,m]),w=e=>{const t=N(e);if(va.isWithinRange(t,m?N(m):void 0,f?N(f):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=b((()=>va.generateDays(r)),[r]),$=b((()=>D()),[D]),[E,C]=o(""),[S,B]=o(""),A=(e,r)=>{r&&!y||d(e)},O=(e,r)=>{r&&!y||(B(e),c(e))},M=e=>{B(e),c(e)},k=()=>{B(""),c("")};return e(Ci,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(Si,{"aria-hidden":!0,children:N(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(Bi,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:k,children:e.map(((e,i)=>t(Li,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:m,maxDate:f,disabledDates:a,allowDisabledSelection:y,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:O,onFocus:M,setFocusCell:w,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},Pi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=va.isDisabledDay(e,s,i,o),h=!g||l,{start:b,end:m}=n?va.getFixedRangeStartEnd(Sa.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?va.getFixedRangeStartEnd(Sa.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(b,m,"day","[]"),v=!!a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(b,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Hi,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===b,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==b&&(r.circleLeft="selected-hover")),r})()))},Ni=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=b((()=>va.generateDays(r)),[r]),[h,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!N(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ci,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Si,{children:N(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Bi,{onMouseLeave:p,children:e.map(((e,i)=>t(Pi,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))},i)))]})},Vi=p.div`
    width: 100%;
    background: ${Xt.bg};
`,Ui=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=va.isDisabledDay(e,s,i,o),h=!g||l,b={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Hi,Object.assign({},b,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":N().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};N.extend(ha);const Zi=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=b((()=>va.generateDays(r)),[r]),[h,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ci,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Si,{children:N(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Bi,{onMouseLeave:p,children:e.map(((e,i)=>t(Ui,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))},i)))]})},Ki=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=va.isDisabledDay(e,s,i,o),g=!u||l,{start:h,end:b}=va.getWeekStartEnd(Sa.toDayjs(n)),{start:m,end:f}=va.getWeekStartEnd(Sa.toDayjs(a)),y=n&&e.isBetween(h,b,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(h)||p&&e.isSame(m),x=y&&e.isSame(b)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(Hi,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Ji=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=b((()=>va.generateDays(r)),[r]),[g,h]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!N(e).isSame(t,"month")&&h("")},f=(e,r)=>{r&&!c||(h(e),s(e))},y=()=>{h(""),s("")};return e(Ci,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(Si,{children:N(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Bi,{onMouseLeave:y,children:e.map(((e,i)=>t(Ki,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))},i)))]})},qi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:h,allowDisabledSelection:b,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const w=i(null),F=i(void 0);m(D,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),C(t)},E=e=>{S(e)},C=e=>{n&&n(e)},S=e=>{a&&a(e)},B=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Vi,{children:t(Ei,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:h,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:b,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=w.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),B(e)),F.current=e},initialCalendarDate:y,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(Ji,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:b,onSelect:$,onHover:E});case"fixed-range":return t(Ni,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:b,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(Zi,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:h,allowDisabledSelection:b,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(Wi,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:h,isNewSelection:f,allowDisabledSelection:b,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=w.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),Xi=a.forwardRef(((e,r)=>{var{width:n}=e,a=H(e,["width"]);return t(da,{$width:n,"data-testid":"calendar-dropdown",children:t(qi,Object.assign({ref:r},a))})})),Gi=p.div`
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
                        100% - ${Gt.Spec["body-size-baseline"]} -
                            ${rn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${rn["spacing-8"]};
                }
            `}}
`,Qi=p.div`
    width: 100%; // Force next flex item to break to next line
`,eo=p.div`
    display: flex;
    flex: 1;
    align-items: center;
`,ro=p(I)`
    color: ${Xt.icon};
    width: ${Gt.Spec["body-size-baseline"]};
    height: ${Gt.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${rn["spacing-8"]};
    align-self: center;
`,to=p.div`
    position: absolute;
    background: ${e=>e.$error?Xt["border-error-focus-strong"]:Xt["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${rn["spacing-8"]} - (${Gt.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Qt["duration-350"]} ${Qt["ease-standard"]},
        opacity ${Qt["duration-350"]} ${Qt["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return v`
                    opacity: 1;
                `;case"end":return v`
                    left: calc(50% + ${rn["spacing-16"]});
                    opacity: 1;
                `;case"none":return v`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return v`
                display: none;
            `}}
`,no=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(Gi,{className:i,$wrap:o,children:[t(eo,{"data-id":"range-container-elem1-container",children:s}),t(ro,{}),o&&t(Qi,{}),t(eo,{"data-id":"range-container-elem2-container",children:l}),t(to,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]})},ao=v`
    outline-offset: -1px;
    outline: ${en["width-020"]} ${en.solid} ${Xt["border-focus"]};
`,io=v`
    outline-color: ${Xt["border-focus"]};
`,oo=v`
    outline-color: ${Xt["border-disabled"]};
`,so=v`
    outline-color: ${Xt["border-error-focus"]};
`,lo=p(p.div`
    border: ${en["width-010"]} ${en.solid} ${Xt.border};
    border-radius: ${tn.sm};
    background: ${Xt.bg};

    :focus-within {
        ${ao}
    }
    ${e=>e.$focused&&ao}

    ${e=>e.$readOnly?v`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${io}
                }
                ${e.$focused&&io}
            `:e.$disabled?v`
                background: ${Xt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${oo}
                }
                ${e.$focused&&oo}
            `:e.$error?v`
                border-color: ${Xt["border-error"]};

                :focus-within {
                    ${so}
                }
                ${e.$focused&&so}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${rn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,co=p.input`
    ${e=>"small"===e.$variant?Gt["body-md-regular"]:Gt["body-baseline-regular"]}
    color: ${Xt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Xt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Xt["text-subtler"]};
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
        outline: ${en["width-010"]} ${en.solid}
            ${Xt["border-focus"]};
        border-radius: ${tn.sm};
    }
`;const uo=p.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,go=p.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return v`
                ${ho}, ${yo} {
                    color: ${Xt["text-subtler"]};
                }
            `}}
`,ho=p(co)`
    background: transparent;
    text-align: center;
`,bo=p(ho)`
    width: 2rem;
    margin-right: ${rn["spacing-4"]};
`,mo=p(ho)`
    width: 2.5rem;
`,fo=p(ho)`
    width: 3rem;
    margin-left: ${rn["spacing-4"]};
`,yo=p.span`
    ${Gt["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return v`
                color: ${Xt.text};
            `}}
`,po=p.div`
    ${Gt["body-baseline-regular"]}
    background-color: ${Xt.bg};
    color: ${Xt["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?v`
                background-color: ${Xt["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?v`
                display: none;
            `:void 0}
`;N.extend(ua);const vo=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:h,onFocus:b,onBlur:f,hideInputKeyboard:y},p)=>{const v=y?"none":"numeric",[x,D,w]=Ma(""),[F,$,E]=Ma(""),[C,S,B]=Ma(""),[A,O]=o("none"),[M,k]=o(!1),z=i(null),Y=i(null),j=i(null),R=i(null),[T,_,I]=U(d);u((()=>{var e;const[r="",t="",n=""]=U(s);D(r),$(t),S(n),r||t||n||!z.current||!z.current.contains(document.activeElement)||null===(e=Y.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||O("none"),l&&(k(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))}),[l]),m(p,(()=>({ref:z,resetPlaceholder(){k(!1)},resetInput(){const[e="",r="",t=""]=U(s);D(e),$(r),S(t)}})),[s]);const H=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},L=e=>{e.target.select();const r=e.target.name;O(r)},W=e=>{const[r,t,n]=a,i={[r]:w.current,[t]:E.current,[n]:B.current},o=e.target.name,s=i[o],l=o!==n?Oa.padValue(s,!0):s;switch(o){case r:i[r]=l,D(l);break;case t:i[t]=l,$(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=N(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&h(d),z.current&&!z.current.contains(e.relatedTarget)&&(O("none"),null==f||f(u||c))},P=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:x,month:F,year:C};switch(n){case a[0]:o.day=i,D(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case a[1]:o.month=i,$(i),2===i.length&&(null===(t=R.current)||void 0===t||t.focus());break;case a[2]:o.year=i,S(i)}if(!o.day&&!o.month&&!o.year)return void h("");const s=`${o.year}-${o.month}-${o.day}`;N(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(A===a[1]&&0===F.length&&(null===(r=Y.current)||void 0===r||r.focus()),A===a[2]&&0===C.length&&(null===(t=j.current)||void 0===t||t.focus()))};function U(e){if(e){const r=N(new Date(e));return r.isValid()?[Oa.padValue(r.date().toString()),Oa.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(uo,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(k(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))},onFocus:e=>{r||(k(!0),l||null==b||b(e))},children:[e(go,{ref:z,$hover:!!d,children:[t(bo,{ref:Y,name:a[0],maxLength:2,value:null!=T?T:x,onFocus:L,onBlur:W,onChange:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[0]||n?"DD":""}),t(yo,{$inactive:0===x.length,children:"/"}),t(mo,{ref:j,name:a[1],maxLength:2,value:null!=_?_:F,onFocus:L,onBlur:W,onChange:P,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[1]||n?"MM":""}),t(yo,{$inactive:0===F.length,children:"/"}),t(fo,{ref:R,name:a[2],maxLength:4,value:null!=I?I:C,onFocus:L,onBlur:W,onChange:P,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(po,{$hide:M,$disabled:r,onMouseDown:H,children:c})})()]})})),xo=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},Do=p(lo)`
    ${e=>e.$wrap&&v`
            padding: ${rn["spacing-12"]} ${rn["spacing-16"]};
        `}
`,wo=p.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&v`
            height: fit-content;
        `}
`,Fo={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},$o=r=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:g,valueEnd:b,onChange:m,onFocus:y,onBlur:p,onYearMonthDisplayChange:v,withButton:x=!0,variant:D="range",numberOfDays:w=7,readOnly:F,id:$,allowDisabledSelection:E,zIndex:C}=r,S=H(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[B,A]=o(),[O,M]=o(void 0),[k,z]=o(!1),[Y,j]=o(!1),R="week"===D,T="fixed-range"===D,[{selectedStart:_,selectedEnd:I,currentFocus:L,calendarOpen:W,isStartDirty:P,isEndDirty:V,focused:U},Z]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=f(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&xo(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:Fo,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":T?"start":r,calendarOpen:!F,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),K=i(!1),J=i(null),q=i(null),X=i(null),G=i(null),Q=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return ia({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:h((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:J});u((()=>{Z.resetRange({start:Ba.sanitizeInput(g),end:Ba.sanitizeInput(b)})}),[g,b]),u((()=>{"start"===L?A(_):"end"===L&&A(I)}),[L]);const ee=e=>{var r,t,n;"Enter"!==e.code||x||(_&&I?(Z.done({start:_,end:I}),null==m||m(_,I)):(Z.dismiss(),null===(r=J.current)||void 0===r||r.focus(),null===(t=X.current)||void 0===t||t.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder()))},re=e=>{var r;if(be(e))return void(K.current=!0);if(Z.changeStart(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),K.current=!1,!e)return void(x||I||!V||(Z.resetRange({start:"",end:""}),null==m||m("","")));if(!I)return void Z.focus("end");if(N(e).isAfter(I,"day"))Z.reselectEnd();else{if(V)return x?void 0:(Z.done({start:e,end:I}),void(null==m||m(e,I)));Z.focus("end")}},te=e=>{var r,t;if(be(e))return void(K.current=!0);if(N(e).isBefore(_,"day"))return Z.changeStart(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),void Z.reselectEnd();if(Z.changeEnd(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),e){if(_)return x?void 0:(Z.done({start:_,end:e}),void(null==m||m(_,e)));Z.focus("start")}else x||_||!P||(Z.resetRange({start:"",end:""}),null==m||m("",""))},ne=e=>{var r;if(be(e))return void(K.current=!0);if(Z.changeStart(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),K.current=!1,!e)return void(x?Z.changeEnd(""):(Z.resetRange({start:"",end:""}),null==m||m("","")));const t=N(e).format("YYYY-MM-DD"),n=N(t).add(w-1,"day").format("YYYY-MM-DD");return Z.changeStart(t),Z.changeEnd(n),K.current=!1,x?void 0:(Z.done({start:t,end:n}),void(null==m||m(t,n)))},ae=()=>{F||s||U||(Z.focus("start"),null==y||y())},ie=e=>{var r,t;U&&!W&&J.current&&J.current.contains(e.relatedTarget)&&(Z.blur(),z(!1),j(!1),null===(r=X.current)||void 0===r||r.resetPlaceholder(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null==p||p())},oe=e=>r=>{r.stopPropagation(),F||(Z.focus(e),se(),le(),U||null==y||y())},se=()=>{if(R){const e=Sa.toDayjs(_).startOf("week").format("YYYY-MM-DD");z(!0),j(!0),A(e)}},le=()=>{T&&(j(!0),A(_))},de=e=>{var r;e&&!K.current||(Z.resetStart(),null===(r=X.current)||void 0===r||r.resetInput())},ce=e=>{var r;e&&!K.current||(Z.resetEnd(),null===(r=G.current)||void 0===r||r.resetInput())},ue=e=>{switch(D){case"week":(e=>{const r=N(e).startOf("week").format("YYYY-MM-DD"),t=N(e).endOf("week").format("YYYY-MM-DD");if(Z.changeStart(r),Z.changeEnd(t),K.current=!1,!x)Z.done({start:r,end:t}),null==m||m(r,t)})(e);break;case"fixed-range":ne(e);break;default:"start"===L?re(e):"end"===L&&te(e)}},ge=e=>{var r;switch(null===(r=J.current)||void 0===r||r.focus(),e){case"reset":Z.cancel();break;case"confirmed":Z.done({start:_,end:I}),null==m||m(_,I)}},he=e=>{M(e)},be=e=>!E&&e&&Ba.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),me=e=>{let r={start:void 0,end:void 0};switch(D){case"range":r={start:"start"===L?O:void 0,end:"end"===L?O:void 0};break;case"week":if(!O)return;r={start:N(O).startOf("week").format("YYYY-MM-DD"),end:N(O).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!O)return;r={start:N(O).format("YYYY-MM-DD"),end:N(O).add(w-1,"day").format("YYYY-MM-DD")}}return r[e]};return t(la,{enabled:!F&&!s,isOpen:W,onClose:()=>{var e,r;Z.blur(),z(!1),j(!1),null===(e=X.current)||void 0===e||e.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null==p||p()},onDismiss:()=>{var e,r,t;Z.dismiss(),null===(e=J.current)||void 0===e||e.focus(),null===(r=X.current)||void 0===r||r.resetPlaceholder(),null===(t=G.current)||void 0===t||t.resetPlaceholder()},renderElement:()=>t(Do,Object.assign({ref:J,tabIndex:-1,onFocus:ae,onBlur:ie,$focused:U,$disabled:s,$readOnly:F,$error:d,$wrap:Q,id:$,"data-testid":S["data-testid"],onKeyDown:ee},S,{children:e(no,{currentActive:L,wrap:Q,error:d,children:[t(wo,{$wrap:Q,children:t(vo,{ref:X,placeholder:"From",names:["start-day","start-month","start-year"],value:_,disabled:s,readOnly:k||F,focused:"start"===L,hoverValue:me("start"),onChange:T?ne:re,onFocus:oe("start"),onBlur:de,hideInputKeyboard:c})}),t(wo,{$wrap:Q,children:t(vo,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:I,disabled:s,readOnly:Y||F,focused:"end"===L,hoverValue:me("end"),onChange:te,onFocus:oe("end"),onBlur:ce,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:e})=>t(Xi,{ref:q,variant:D,initialCalendarDate:B,withButton:x,value:_,endValue:I,selectWithinRange:P||V,currentFocus:L,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:E,onSelect:ue,onDismiss:ge,onHover:he,onYearMonthDisplayChange:v,numberOfDays:w,width:e}),customZIndex:C,offset:16})};export{$o as DateRangeInput};
//# sourceMappingURL=index.js.map
