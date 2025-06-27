import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useMemo as b,useImperativeHandle as h,useCallback as m}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import f,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as w,useFloating as D,autoUpdate as F,offset as $,flip as E,shift as C,limitShift as S,size as B,useTransitionStyles as A,useClick as k,useDismiss as z,useInteractions as O,FloatingPortal as M,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}};I.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var w="$isDayjsObject",D=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(D(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=D,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var y=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,f=this.$d.getTime()+n*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,b){var h,m=this,y=E.p(g),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=D,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var W=H(I.exports),N=Array.isArray,P="object"==typeof L&&L&&L.Object===Object&&L,U="object"==typeof self&&self&&self.Object===Object&&self,V=P||U||Function("return this")(),Z=V.Symbol,K=Z,J=Object.prototype,X=J.hasOwnProperty,q=J.toString,G=K?K.toStringTag:void 0;var Q=function(e){var r=X.call(e,G),t=e[G];try{e[G]=void 0;var n=!0}catch(e){}var a=q.call(e);return n&&(r?e[G]=t:delete e[G]),a},ee=Object.prototype.toString;var re=Q,te=function(e){return ee.call(e)},ne=Z?Z.toStringTag:void 0;var ae=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?re(e):te(e)};var ie=ae,oe=function(e){return null!=e&&"object"==typeof e};var se=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==ie(e)},le=N,de=se,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ue=/^\w*$/;var ge=function(e,r){if(le(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!de(e))||(ue.test(e)||!ce.test(e)||null!=r&&e in Object(r))};var be=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},he=ae,me=be;var ye,fe=function(e){if(!me(e))return!1;var r=he(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},pe=V["__core-js_shared__"],ve=(ye=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var xe=function(e){return!!ve&&ve in e},we=Function.prototype.toString;var De=fe,Fe=xe,$e=be,Ee=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ce=/^\[object .+?Constructor\]$/,Se=Function.prototype,Be=Object.prototype,Ae=Se.toString,ke=Be.hasOwnProperty,ze=RegExp("^"+Ae.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Oe=function(e,r){return null==e?void 0:e[r]},Me=function(e){return!(!$e(e)||Fe(e))&&(De(e)?ze:Ce).test(Ee(e))},Ye=Oe;var Te=function(e,r){var t=Ye(e,r);return Me(t)?t:void 0},je=Te(Object,"create"),_e=je;var Re=function(){this.__data__=_e?_e(null):{},this.size=0};var Le=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},He=je,Ie=Object.prototype.hasOwnProperty;var We=function(e){var r=this.__data__;if(He){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ie.call(r,e)?r[e]:void 0},Ne=je,Pe=Object.prototype.hasOwnProperty;var Ue=function(e){var r=this.__data__;return Ne?void 0!==r[e]:Pe.call(r,e)},Ve=je;var Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ve&&void 0===r?"__lodash_hash_undefined__":r,this},Ke=Re,Je=Le,Xe=We,qe=Ue,Ge=Ze;function Qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qe.prototype.clear=Ke,Qe.prototype.delete=Je,Qe.prototype.get=Xe,Qe.prototype.has=qe,Qe.prototype.set=Ge;var er=Qe;var rr=function(){this.__data__=[],this.size=0};var tr=function(e,r){return e===r||e!=e&&r!=r};var nr=function(e,r){for(var t=e.length;t--;)if(tr(e[t][0],r))return t;return-1},ar=nr,ir=Array.prototype.splice;var or=function(e){var r=this.__data__,t=ar(r,e);return!(t<0)&&(t==r.length-1?r.pop():ir.call(r,t,1),--this.size,!0)},sr=nr;var lr=function(e){var r=this.__data__,t=sr(r,e);return t<0?void 0:r[t][1]},dr=nr;var cr=function(e){return dr(this.__data__,e)>-1},ur=nr;var gr=function(e,r){var t=this.__data__,n=ur(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},br=rr,hr=or,mr=lr,yr=cr,fr=gr;function pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}pr.prototype.clear=br,pr.prototype.delete=hr,pr.prototype.get=mr,pr.prototype.has=yr,pr.prototype.set=fr;var vr=pr,xr=Te(V,"Map"),wr=er,Dr=vr,Fr=xr;var $r=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Er=function(e,r){var t=e.__data__;return $r(r)?t["string"==typeof r?"string":"hash"]:t.map},Cr=Er;var Sr=function(e){var r=Cr(this,e).delete(e);return this.size-=r?1:0,r},Br=Er;var Ar=function(e){return Br(this,e).get(e)},kr=Er;var zr=function(e){return kr(this,e).has(e)},Or=Er;var Mr=function(e,r){var t=Or(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Yr=function(){this.size=0,this.__data__={hash:new wr,map:new(Fr||Dr),string:new wr}},Tr=Sr,jr=Ar,_r=zr,Rr=Mr;function Lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Lr.prototype.clear=Yr,Lr.prototype.delete=Tr,Lr.prototype.get=jr,Lr.prototype.has=_r,Lr.prototype.set=Rr;var Hr=Lr;function Ir(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ir.Cache||Hr),t}Ir.Cache=Hr;var Wr=Ir;var Nr=function(e){var r=Wr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Pr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g,Vr=Nr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Pr,(function(e,t,n,a){r.push(n?a.replace(Ur,"$1"):t||e)})),r}));var Zr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Kr=N,Jr=se,Xr=Z?Z.prototype:void 0,qr=Xr?Xr.toString:void 0;var Gr=function e(r){if("string"==typeof r)return r;if(Kr(r))return Zr(r,e)+"";if(Jr(r))return qr?qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Qr=Gr;var et=N,rt=ge,tt=Vr,nt=function(e){return null==e?"":Qr(e)};var at=se;var it=function(e,r){return et(e)?e:rt(e,r)?[e]:tt(nt(e))},ot=function(e){if("string"==typeof e||at(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var st=function(e,r){for(var t=0,n=(r=it(r,e)).length;null!=e&&t<n;)e=e[ot(r[t++])];return t&&t==n?e:void 0};var lt=H((function(e,r,t){var n=null==e?void 0:st(e,r);return void 0===n?t:n}));const dt=(e,r,t)=>lt(t,r)||lt(e,r),ct=(e,r)=>{const t=r||e.defaultValue;return lt(e.collections,t)},ut={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},gt=e=>r=>{var t;const n=r.theme,a=ct(ut,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${dt(a,e,n.overrides.border)}px`:`${a[e]}px`},bt={"width-005":gt("width-005"),"width-010":gt("width-010"),"width-020":gt("width-020"),"width-040":gt("width-040"),solid:(ht="solid",e=>{var r;const t=e.theme,n=ct(ut,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?dt(n,ht,t.overrides.border):n[ht];return"function"==typeof a?a(e):a})};var ht;const mt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ft={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={collections:{lifesg:ft,bookingsg:mt,rbs:wt,mylegacy:pt,ccube:yt,oneservice:vt,pa:xt,a11yplayground:Dt,supportgowhere:Ft},defaultValue:"lifesg"},Et={collections:{lifesg:ft,bookingsg:mt,rbs:wt,mylegacy:pt,ccube:yt,oneservice:vt,pa:xt,a11yplayground:Dt,supportgowhere:Ft},defaultValue:"lifesg"},Ct=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=ct(a?Et:$t,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?dt(i,e,s):i[e]},St={"brand-10":Ct("brand-10"),"brand-20":Ct("brand-20"),"brand-30":Ct("brand-30"),"brand-40":Ct("brand-40"),"brand-50":Ct("brand-50"),"brand-60":Ct("brand-60"),"brand-70":Ct("brand-70"),"brand-80":Ct("brand-80"),"brand-90":Ct("brand-90"),"brand-95":Ct("brand-95"),"brand-100":Ct("brand-100"),"primary-10":Ct("primary-10"),"primary-20":Ct("primary-20"),"primary-30":Ct("primary-30"),"primary-40":Ct("primary-40"),"primary-50":Ct("primary-50"),"primary-60":Ct("primary-60"),"primary-70":Ct("primary-70"),"primary-80":Ct("primary-80"),"primary-90":Ct("primary-90"),"primary-95":Ct("primary-95"),"primary-100":Ct("primary-100"),"secondary-10":Ct("secondary-10"),"secondary-20":Ct("secondary-20"),"secondary-30":Ct("secondary-30"),"secondary-40":Ct("secondary-40"),"secondary-50":Ct("secondary-50"),"secondary-60":Ct("secondary-60"),"secondary-70":Ct("secondary-70"),"secondary-80":Ct("secondary-80"),"secondary-90":Ct("secondary-90"),"secondary-95":Ct("secondary-95"),"secondary-100":Ct("secondary-100"),"neutral-10":Ct("neutral-10"),"neutral-20":Ct("neutral-20"),"neutral-30":Ct("neutral-30"),"neutral-40":Ct("neutral-40"),"neutral-50":Ct("neutral-50"),"neutral-60":Ct("neutral-60"),"neutral-70":Ct("neutral-70"),"neutral-80":Ct("neutral-80"),"neutral-90":Ct("neutral-90"),"neutral-95":Ct("neutral-95"),"neutral-100":Ct("neutral-100"),"success-10":Ct("success-10"),"success-20":Ct("success-20"),"success-30":Ct("success-30"),"success-40":Ct("success-40"),"success-50":Ct("success-50"),"success-60":Ct("success-60"),"success-70":Ct("success-70"),"success-80":Ct("success-80"),"success-90":Ct("success-90"),"success-95":Ct("success-95"),"success-100":Ct("success-100"),"warning-10":Ct("warning-10"),"warning-20":Ct("warning-20"),"warning-30":Ct("warning-30"),"warning-40":Ct("warning-40"),"warning-50":Ct("warning-50"),"warning-60":Ct("warning-60"),"warning-70":Ct("warning-70"),"warning-80":Ct("warning-80"),"warning-90":Ct("warning-90"),"warning-95":Ct("warning-95"),"warning-100":Ct("warning-100"),"error-10":Ct("error-10"),"error-20":Ct("error-20"),"error-30":Ct("error-30"),"error-40":Ct("error-40"),"error-50":Ct("error-50"),"error-60":Ct("error-60"),"error-70":Ct("error-70"),"error-80":Ct("error-80"),"error-90":Ct("error-90"),"error-95":Ct("error-95"),"error-100":Ct("error-100"),"info-10":Ct("info-10"),"info-20":Ct("info-20"),"info-30":Ct("info-30"),"info-40":Ct("info-40"),"info-50":Ct("info-50"),"info-60":Ct("info-60"),"info-70":Ct("info-70"),"info-80":Ct("info-80"),"info-90":Ct("info-90"),"info-95":Ct("info-95"),"info-100":Ct("info-100"),white:Ct("white"),black:Ct("black"),"primary-inverse":Ct("primary-inverse")},Bt={text:Ct("neutral-20"),"text-subtle":Ct("neutral-30"),"text-subtler":Ct("neutral-50"),"text-subtlest":Ct("neutral-60"),"text-primary":Ct("primary-50"),"text-hover":Ct("primary-40"),"text-selected":Ct("primary-50"),"text-selected-hover":Ct("primary-40"),"text-disabled":Ct("neutral-50"),"text-disabled-subtle":Ct("neutral-60"),"text-disabled-subtlest":Ct("neutral-80"),"text-selected-disabled":Ct("neutral-20"),"text-success":Ct("success-40"),"text-warning":Ct("warning-40"),"text-error":Ct("error-40"),"text-info":Ct("info-40"),"text-inverse":Ct("white"),icon:Ct("neutral-50"),"icon-subtle":Ct("neutral-60"),"icon-strongest":Ct("neutral-20"),"icon-primary":Ct("primary-50"),"icon-primary-subtle":Ct("primary-60"),"icon-primary-subtlest":Ct("primary-70"),"icon-hover":Ct("primary-40"),"icon-selected":Ct("primary-50"),"icon-selected-hover":Ct("primary-40"),"icon-disabled":Ct("neutral-50"),"icon-disabled-subtle":Ct("neutral-60"),"icon-selected-disabled":Ct("neutral-60"),"icon-success":Ct("success-50"),"icon-warning":Ct("warning-60"),"icon-error":Ct("error-50"),"icon-error-strong":Ct("error-40"),"icon-info":Ct("info-50"),"icon-inverse":Ct("white"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-90"),"border-strong":Ct("neutral-70"),"border-stronger":Ct("neutral-50"),"border-primary":Ct("primary-50"),"border-primary-subtle":Ct("primary-60"),"border-hover":Ct("primary-90"),"border-hover-strong":Ct("primary-60"),"border-selected":Ct("primary-50"),"border-selected-subtle":Ct("primary-70"),"border-selected-subtlest":Ct("primary-90"),"border-selected-hover":Ct("primary-40"),"border-focus":Ct("primary-60"),"border-focus-strong":Ct("primary-50"),"border-disabled":Ct("neutral-90"),"border-selected-disabled":Ct("neutral-70"),"border-success":Ct("success-60"),"border-warning":Ct("warning-60"),"border-error":Ct("error-60"),"border-error-focus":Ct("error-60"),"border-error-focus-strong":Ct("error-40"),"border-error-strong":Ct("error-40"),"border-info":Ct("info-60"),bg:Ct("white"),"bg-strong":Ct("neutral-100"),"bg-stronger":Ct("neutral-95"),"bg-strongest":Ct("neutral-90"),"bg-hover":Ct("primary-95"),"bg-hover-strong":Ct("primary-90"),"bg-hover-subtle":Ct("primary-100"),"bg-hover-neutral":Ct("neutral-100"),"bg-hover-neutral-strong":Ct("neutral-90"),"bg-selected":Ct("primary-95"),"bg-selected-hover":Ct("primary-90"),"bg-selected-strong":Ct("primary-90"),"bg-selected-stronger":Ct("primary-70"),"bg-selected-strongest":Ct("primary-50"),"bg-selected-strongest-hover":Ct("primary-40"),"bg-disabled":Ct("neutral-95"),"bg-selected-disabled":Ct("neutral-95"),"bg-selected-stronger-disabled":Ct("neutral-70"),"bg-success":Ct("success-100"),"bg-success-hover":Ct("success-95"),"bg-success-strong":Ct("success-50"),"bg-success-strong-hover":Ct("success-40"),"bg-warning":Ct("warning-100"),"bg-warning-hover":Ct("warning-95"),"bg-warning-strong":Ct("warning-50"),"bg-warning-strong-hover":Ct("warning-40"),"bg-info":Ct("info-100"),"bg-info-hover":Ct("info-95"),"bg-info-strong":Ct("info-50"),"bg-info-strong-hover":Ct("info-40"),"bg-error":Ct("error-100"),"bg-error-hover":Ct("error-95"),"bg-error-strong":Ct("error-50"),"bg-error-strong-hover":Ct("error-40"),"bg-inverse":Ct("neutral-20"),"bg-inverse-subtle":Ct("neutral-30"),"bg-inverse-subtler":Ct("neutral-50"),"bg-inverse-subtlest":Ct("neutral-60"),"bg-inverse-hover":Ct("neutral-40"),"bg-primary":Ct("primary-50"),"bg-primary-subtle":Ct("primary-60"),"bg-primary-subtler":Ct("primary-95"),"bg-primary-subtlest":Ct("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ct("primary-40"),"bg-primary-subtlest-hover":Ct("primary-90"),"bg-primary-subtlest-selected":Ct("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ct("primary-50"),"hyperlink-hover":Ct("primary-40"),"hyperlink-visited":Ct("primary-40"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("black"),"focus-ring-inverse":Ct("white")},At={text:Ct("neutral-100"),"text-subtle":Ct("neutral-80"),"text-subtler":Ct("neutral-60"),"text-subtlest":Ct("neutral-50"),"text-primary":Ct("primary-60"),"text-hover":Ct("primary-70"),"text-selected":Ct("primary-60"),"text-selected-hover":Ct("primary-70"),"text-disabled":Ct("neutral-60"),"text-disabled-subtle":Ct("neutral-50"),"text-disabled-subtlest":Ct("neutral-30"),"text-selected-disabled":Ct("neutral-90"),"text-success":Ct("success-70"),"text-warning":Ct("warning-70"),"text-error":Ct("error-70"),"text-info":Ct("info-70"),"text-inverse":Ct("black"),icon:Ct("neutral-60"),"icon-subtle":Ct("neutral-50"),"icon-strongest":Ct("neutral-90"),"icon-primary":Ct("primary-60"),"icon-primary-subtle":Ct("primary-50"),"icon-primary-subtlest":Ct("primary-40"),"icon-hover":Ct("primary-70"),"icon-selected":Ct("primary-60"),"icon-selected-hover":Ct("primary-70"),"icon-disabled":Ct("neutral-60"),"icon-disabled-subtle":Ct("neutral-50"),"icon-selected-disabled":Ct("neutral-50"),"icon-success":Ct("success-60"),"icon-warning":Ct("warning-50"),"icon-error":Ct("error-60"),"icon-error-strong":Ct("error-70"),"icon-info":Ct("info-60"),"icon-inverse":Ct("black"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-20"),"border-strong":Ct("neutral-40"),"border-stronger":Ct("neutral-60"),"border-primary":Ct("primary-60"),"border-primary-subtle":Ct("primary-50"),"border-hover":Ct("primary-20"),"border-hover-strong":Ct("primary-50"),"border-selected":Ct("primary-60"),"border-selected-subtle":Ct("primary-40"),"border-selected-subtlest":Ct("primary-20"),"border-selected-hover":Ct("primary-70"),"border-focus":Ct("primary-50"),"border-focus-strong":Ct("primary-60"),"border-disabled":Ct("neutral-20"),"border-selected-disabled":Ct("neutral-40"),"border-success":Ct("success-50"),"border-warning":Ct("warning-50"),"border-error":Ct("error-50"),"border-error-focus":Ct("error-50"),"border-error-focus-strong":Ct("error-70"),"border-error-strong":Ct("error-70"),"border-info":Ct("info-50"),bg:Ct("black"),"bg-strong":Ct("neutral-10"),"bg-stronger":Ct("neutral-20"),"bg-strongest":Ct("neutral-20"),"bg-hover":Ct("primary-20"),"bg-hover-strong":Ct("primary-20"),"bg-hover-subtle":Ct("primary-10"),"bg-hover-neutral":Ct("neutral-10"),"bg-hover-neutral-strong":Ct("neutral-20"),"bg-selected":Ct("primary-20"),"bg-selected-hover":Ct("primary-20"),"bg-selected-strong":Ct("primary-20"),"bg-selected-stronger":Ct("primary-40"),"bg-selected-strongest":Ct("primary-60"),"bg-selected-strongest-hover":Ct("primary-70"),"bg-disabled":Ct("neutral-20"),"bg-selected-disabled":Ct("neutral-20"),"bg-selected-stronger-disabled":Ct("neutral-40"),"bg-success":Ct("success-10"),"bg-success-hover":Ct("success-20"),"bg-success-strong":Ct("success-60"),"bg-success-strong-hover":Ct("success-70"),"bg-warning":Ct("warning-10"),"bg-warning-hover":Ct("warning-20"),"bg-warning-strong":Ct("warning-60"),"bg-warning-strong-hover":Ct("warning-70"),"bg-info":Ct("info-10"),"bg-info-hover":Ct("info-20"),"bg-info-strong":Ct("info-60"),"bg-info-strong-hover":Ct("info-70"),"bg-error":Ct("error-10"),"bg-error-hover":Ct("error-20"),"bg-error-strong":Ct("error-60"),"bg-error-strong-hover":Ct("error-70"),"bg-inverse":Ct("neutral-90"),"bg-inverse-subtle":Ct("neutral-80"),"bg-inverse-subtler":Ct("neutral-60"),"bg-inverse-subtlest":Ct("neutral-50"),"bg-inverse-hover":Ct("neutral-70"),"bg-primary":Ct("primary-60"),"bg-primary-subtle":Ct("primary-50"),"bg-primary-subtler":Ct("primary-20"),"bg-primary-subtlest":Ct("primary-10"),"bg-available":"#185339","bg-primary-hover":Ct("primary-70"),"bg-primary-subtlest-hover":Ct("primary-20"),"bg-primary-subtlest-selected":Ct("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ct("primary-60"),"hyperlink-hover":Ct("primary-70"),"hyperlink-visited":Ct("primary-70"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("primary-60"),"focus-ring-inverse":Ct("black")},kt={text:Ct("neutral-30"),"text-subtle":Ct("neutral-40"),"text-subtler":Ct("neutral-50"),"text-subtlest":Ct("neutral-70"),"text-primary":Ct("neutral-10"),"text-hover":Ct("neutral-70"),"text-selected":Ct("neutral-20"),"text-selected-hover":Ct("neutral-10"),"text-disabled":Ct("neutral-50"),"text-disabled-subtle":Ct("neutral-60"),"text-disabled-subtlest":Ct("neutral-80"),"text-selected-disabled":Ct("neutral-40"),"text-success":Ct("success-40"),"text-warning":Ct("warning-40"),"text-error":Ct("brand-30"),"text-info":Ct("neutral-40"),"text-inverse":Ct("neutral-100"),icon:Ct("neutral-40"),"icon-subtle":Ct("neutral-50"),"icon-strongest":Ct("neutral-10"),"icon-primary":Ct("neutral-10"),"icon-primary-subtle":Ct("neutral-30"),"icon-primary-subtlest":Ct("neutral-60"),"icon-hover":Ct("neutral-70"),"icon-selected":Ct("brand-20"),"icon-selected-hover":Ct("brand-10"),"icon-disabled":Ct("neutral-50"),"icon-disabled-subtle":Ct("neutral-60"),"icon-selected-disabled":Ct("neutral-40"),"icon-success":Ct("success-40"),"icon-warning":Ct("warning-60"),"icon-error":Ct("brand-30"),"icon-error-strong":Ct("brand-10"),"icon-info":Ct("neutral-40"),"icon-inverse":Ct("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ct("neutral-90"),"border-strong":Ct("neutral-30"),"border-stronger":Ct("neutral-20"),"border-primary":Ct("neutral-40"),"border-primary-subtle":Ct("neutral-60"),"border-hover":Ct("neutral-80"),"border-hover-strong":Ct("neutral-10"),"border-selected":Ct("brand-20"),"border-selected-subtle":Ct("neutral-40"),"border-selected-subtlest":Ct("neutral-70"),"border-selected-hover":Ct("neutral-10"),"border-focus":Ct("neutral-20"),"border-focus-strong":Ct("neutral-10"),"border-disabled":Ct("neutral-90"),"border-selected-disabled":Ct("neutral-80"),"border-success":Ct("success-40"),"border-warning":Ct("warning-60"),"border-error":Ct("brand-30"),"border-error-focus":Ct("brand-20"),"border-error-focus-strong":Ct("brand-10"),"border-error-strong":Ct("brand-20"),"border-info":Ct("neutral-40"),bg:Ct("neutral-100"),"bg-strong":Ct("neutral-95"),"bg-stronger":Ct("neutral-90"),"bg-strongest":Ct("neutral-80"),"bg-hover":Ct("brand-90"),"bg-hover-strong":Ct("brand-80"),"bg-hover-subtle":Ct("neutral-90"),"bg-hover-neutral":Ct("neutral-90"),"bg-hover-neutral-strong":Ct("neutral-90"),"bg-selected":Ct("brand-100"),"bg-selected-hover":Ct("brand-30"),"bg-selected-strong":Ct("brand-50"),"bg-selected-stronger":Ct("brand-40"),"bg-selected-strongest":Ct("brand-20"),"bg-selected-strongest-hover":Ct("brand-10"),"bg-disabled":Ct("neutral-90"),"bg-selected-disabled":Ct("neutral-90"),"bg-selected-stronger-disabled":Ct("neutral-80"),"bg-success":Ct("success-100"),"bg-success-hover":Ct("success-95"),"bg-success-strong":Ct("success-50"),"bg-success-strong-hover":Ct("success-40"),"bg-warning":Ct("warning-100"),"bg-warning-hover":Ct("warning-95"),"bg-warning-strong":Ct("warning-50"),"bg-warning-strong-hover":Ct("warning-40"),"bg-info":Ct("neutral-95"),"bg-info-hover":Ct("info-95"),"bg-info-strong":Ct("info-50"),"bg-info-strong-hover":Ct("info-40"),"bg-error":Ct("brand-100"),"bg-error-hover":Ct("error-95"),"bg-error-strong":Ct("error-50"),"bg-error-strong-hover":Ct("error-40"),"bg-inverse":Ct("neutral-40"),"bg-inverse-subtle":Ct("neutral-60"),"bg-inverse-subtler":Ct("neutral-70"),"bg-inverse-subtlest":Ct("neutral-80"),"bg-inverse-hover":Ct("neutral-30"),"bg-primary":Ct("brand-20"),"bg-primary-subtle":Ct("brand-60"),"bg-primary-subtler":Ct("brand-80"),"bg-primary-subtlest":Ct("brand-100"),"bg-available":Ct("success-60"),"bg-primary-hover":Ct("brand-10"),"bg-primary-subtlest-hover":Ct("brand-80"),"bg-primary-subtlest-selected":Ct("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ct("neutral-10"),"hyperlink-hover":Ct("neutral-40"),"hyperlink-visited":Ct("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ct("black"),"focus-ring-inverse":Ct("white")},zt={text:Ct("neutral-20"),"text-subtle":Ct("neutral-30"),"text-subtler":Ct("neutral-50"),"text-subtlest":Ct("neutral-60"),"text-primary":Ct("primary-50"),"text-hover":Ct("primary-40"),"text-selected":Ct("primary-50"),"text-selected-hover":Ct("primary-40"),"text-disabled":Ct("neutral-50"),"text-disabled-subtle":Ct("neutral-60"),"text-disabled-subtlest":Ct("neutral-80"),"text-selected-disabled":Ct("neutral-20"),"text-success":Ct("success-40"),"text-warning":Ct("warning-40"),"text-error":Ct("error-40"),"text-info":Ct("info-40"),"text-inverse":Ct("white"),icon:Ct("neutral-50"),"icon-subtle":Ct("neutral-60"),"icon-strongest":Ct("neutral-20"),"icon-primary":Ct("primary-50"),"icon-primary-subtle":Ct("primary-60"),"icon-primary-subtlest":Ct("primary-70"),"icon-hover":Ct("primary-40"),"icon-selected":Ct("primary-50"),"icon-selected-hover":Ct("primary-40"),"icon-disabled":Ct("neutral-50"),"icon-disabled-subtle":Ct("neutral-60"),"icon-selected-disabled":Ct("neutral-60"),"icon-success":Ct("success-50"),"icon-warning":Ct("warning-60"),"icon-error":Ct("error-50"),"icon-error-strong":Ct("error-40"),"icon-info":Ct("info-50"),"icon-inverse":Ct("white"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-90"),"border-strong":Ct("neutral-70"),"border-stronger":Ct("neutral-50"),"border-primary":Ct("primary-50"),"border-primary-subtle":Ct("primary-60"),"border-hover":Ct("primary-90"),"border-hover-strong":Ct("primary-60"),"border-selected":Ct("primary-50"),"border-selected-subtle":Ct("primary-70"),"border-selected-subtlest":Ct("primary-90"),"border-selected-hover":Ct("primary-40"),"border-focus":Ct("primary-60"),"border-focus-strong":Ct("primary-50"),"border-disabled":Ct("neutral-90"),"border-selected-disabled":Ct("neutral-70"),"border-success":Ct("success-60"),"border-warning":Ct("warning-60"),"border-error":Ct("error-60"),"border-error-focus":Ct("error-60"),"border-error-focus-strong":Ct("error-40"),"border-error-strong":Ct("error-40"),"border-info":Ct("info-60"),bg:Ct("white"),"bg-strong":Ct("neutral-100"),"bg-stronger":Ct("neutral-95"),"bg-strongest":Ct("neutral-90"),"bg-hover":Ct("primary-95"),"bg-hover-strong":Ct("primary-90"),"bg-hover-subtle":Ct("primary-100"),"bg-hover-neutral":Ct("neutral-100"),"bg-hover-neutral-strong":Ct("neutral-90"),"bg-selected":Ct("primary-95"),"bg-selected-hover":Ct("primary-90"),"bg-selected-strong":Ct("primary-90"),"bg-selected-stronger":Ct("primary-70"),"bg-selected-strongest":Ct("primary-50"),"bg-selected-strongest-hover":Ct("primary-40"),"bg-disabled":Ct("neutral-95"),"bg-selected-disabled":Ct("neutral-95"),"bg-selected-stronger-disabled":Ct("neutral-70"),"bg-success":Ct("success-100"),"bg-success-hover":Ct("success-95"),"bg-success-strong":Ct("success-50"),"bg-success-strong-hover":Ct("success-40"),"bg-warning":Ct("warning-100"),"bg-warning-hover":Ct("warning-95"),"bg-warning-strong":Ct("warning-50"),"bg-warning-strong-hover":Ct("warning-40"),"bg-info":Ct("info-100"),"bg-info-hover":Ct("info-95"),"bg-info-strong":Ct("info-50"),"bg-info-strong-hover":Ct("info-40"),"bg-error":Ct("error-100"),"bg-error-hover":Ct("error-95"),"bg-error-strong":Ct("error-50"),"bg-error-strong-hover":Ct("error-40"),"bg-inverse":Ct("neutral-20"),"bg-inverse-subtle":Ct("neutral-30"),"bg-inverse-subtler":Ct("neutral-50"),"bg-inverse-subtlest":Ct("neutral-60"),"bg-inverse-hover":Ct("neutral-40"),"bg-primary":Ct("primary-50"),"bg-primary-subtle":Ct("primary-60"),"bg-primary-subtler":Ct("primary-95"),"bg-primary-subtlest":Ct("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ct("primary-40"),"bg-primary-subtlest-hover":Ct("primary-90"),"bg-primary-subtlest-selected":Ct("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ct("primary-50"),"hyperlink-hover":Ct("primary-40"),"hyperlink-visited":Ct("primary-40"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("black"),"focus-ring-inverse":Ct("white")},Ot={text:Ct("neutral-100"),"text-subtle":Ct("neutral-80"),"text-subtler":Ct("neutral-60"),"text-subtlest":Ct("neutral-50"),"text-primary":Ct("primary-60"),"text-hover":Ct("primary-70"),"text-selected":Ct("primary-60"),"text-selected-hover":Ct("primary-70"),"text-disabled":Ct("neutral-60"),"text-disabled-subtle":Ct("neutral-50"),"text-disabled-subtlest":Ct("neutral-30"),"text-selected-disabled":Ct("neutral-90"),"text-success":Ct("success-70"),"text-warning":Ct("warning-70"),"text-error":Ct("error-70"),"text-info":Ct("info-70"),"text-inverse":Ct("black"),icon:Ct("neutral-60"),"icon-subtle":Ct("neutral-50"),"icon-strongest":Ct("neutral-90"),"icon-primary":Ct("primary-60"),"icon-primary-subtle":Ct("primary-50"),"icon-primary-subtlest":Ct("primary-40"),"icon-hover":Ct("primary-70"),"icon-selected":Ct("primary-60"),"icon-selected-hover":Ct("primary-70"),"icon-disabled":Ct("neutral-60"),"icon-disabled-subtle":Ct("neutral-50"),"icon-selected-disabled":Ct("neutral-50"),"icon-success":Ct("success-60"),"icon-warning":Ct("warning-50"),"icon-error":Ct("error-60"),"icon-error-strong":Ct("error-70"),"icon-info":Ct("info-60"),"icon-inverse":Ct("black"),"icon-primary-inverse":Ct("primary-inverse"),border:Ct("neutral-20"),"border-strong":Ct("neutral-40"),"border-stronger":Ct("neutral-60"),"border-primary":Ct("primary-60"),"border-primary-subtle":Ct("primary-50"),"border-hover":Ct("primary-20"),"border-hover-strong":Ct("primary-50"),"border-selected":Ct("primary-60"),"border-selected-subtle":Ct("primary-40"),"border-selected-subtlest":Ct("primary-20"),"border-selected-hover":Ct("primary-70"),"border-focus":Ct("primary-50"),"border-focus-strong":Ct("primary-60"),"border-disabled":Ct("neutral-20"),"border-selected-disabled":Ct("neutral-40"),"border-success":Ct("success-50"),"border-warning":Ct("warning-50"),"border-error":Ct("error-50"),"border-error-focus":Ct("error-50"),"border-error-focus-strong":Ct("error-70"),"border-error-strong":Ct("error-70"),"border-info":Ct("info-50"),bg:Ct("black"),"bg-strong":Ct("neutral-10"),"bg-stronger":Ct("neutral-20"),"bg-strongest":Ct("neutral-20"),"bg-hover":Ct("primary-20"),"bg-hover-strong":Ct("primary-20"),"bg-hover-subtle":Ct("primary-10"),"bg-hover-neutral":Ct("neutral-10"),"bg-hover-neutral-strong":Ct("neutral-20"),"bg-selected":Ct("primary-20"),"bg-selected-hover":Ct("primary-20"),"bg-selected-strong":Ct("primary-20"),"bg-selected-stronger":Ct("primary-40"),"bg-selected-strongest":Ct("primary-60"),"bg-selected-strongest-hover":Ct("primary-70"),"bg-disabled":Ct("neutral-20"),"bg-selected-disabled":Ct("neutral-20"),"bg-selected-stronger-disabled":Ct("neutral-40"),"bg-success":Ct("success-10"),"bg-success-hover":Ct("success-20"),"bg-success-strong":Ct("success-60"),"bg-success-strong-hover":Ct("success-70"),"bg-warning":Ct("warning-10"),"bg-warning-hover":Ct("warning-20"),"bg-warning-strong":Ct("warning-60"),"bg-warning-strong-hover":Ct("warning-70"),"bg-info":Ct("info-10"),"bg-info-hover":Ct("info-20"),"bg-info-strong":Ct("info-60"),"bg-info-strong-hover":Ct("info-70"),"bg-error":Ct("error-10"),"bg-error-hover":Ct("error-20"),"bg-error-strong":Ct("error-60"),"bg-error-strong-hover":Ct("error-70"),"bg-inverse":Ct("neutral-90"),"bg-inverse-subtle":Ct("neutral-80"),"bg-inverse-subtler":Ct("neutral-60"),"bg-inverse-subtlest":Ct("neutral-50"),"bg-inverse-hover":Ct("neutral-70"),"bg-primary":Ct("primary-60"),"bg-primary-subtle":Ct("primary-50"),"bg-primary-subtler":Ct("primary-20"),"bg-primary-subtlest":Ct("primary-10"),"bg-available":"#185339","bg-primary-hover":Ct("primary-70"),"bg-primary-subtlest-hover":Ct("primary-20"),"bg-primary-subtlest-selected":Ct("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ct("primary-60"),"hyperlink-hover":Ct("primary-70"),"hyperlink-visited":Ct("primary-70"),"hyperlink-inverse":Ct("primary-inverse"),"focus-ring":Ct("primary-60"),"focus-ring-inverse":Ct("black")},Mt={collections:{lifesg:Bt,bookingsg:Bt,rbs:Bt,mylegacy:Bt,ccube:Bt,oneservice:Bt,pa:kt,a11yplayground:zt,supportgowhere:Bt},defaultValue:"lifesg"},Yt={collections:{lifesg:At,bookingsg:At,rbs:At,mylegacy:At,ccube:At,oneservice:At,pa:At,a11yplayground:Ot,supportgowhere:At},defaultValue:"lifesg"},Tt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=ct(a?Yt:Mt,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?dt(i,e,s):i[e];return"function"==typeof l?l(r):l},jt={text:Tt("text"),"text-subtle":Tt("text-subtle"),"text-subtler":Tt("text-subtler"),"text-subtlest":Tt("text-subtlest"),"text-primary":Tt("text-primary"),"text-hover":Tt("text-hover"),"text-selected":Tt("text-selected"),"text-selected-hover":Tt("text-selected-hover"),"text-disabled":Tt("text-disabled"),"text-disabled-subtle":Tt("text-disabled-subtle"),"text-disabled-subtlest":Tt("text-disabled-subtlest"),"text-selected-disabled":Tt("text-selected-disabled"),"text-success":Tt("text-success"),"text-warning":Tt("text-warning"),"text-error":Tt("text-error"),"text-info":Tt("text-info"),"text-inverse":Tt("text-inverse"),icon:Tt("icon"),"icon-subtle":Tt("icon-subtle"),"icon-strongest":Tt("icon-strongest"),"icon-primary":Tt("icon-primary"),"icon-primary-subtle":Tt("icon-primary-subtle"),"icon-primary-subtlest":Tt("icon-primary-subtlest"),"icon-hover":Tt("icon-hover"),"icon-selected":Tt("icon-selected"),"icon-selected-hover":Tt("icon-selected-hover"),"icon-disabled":Tt("icon-disabled"),"icon-disabled-subtle":Tt("icon-disabled-subtle"),"icon-selected-disabled":Tt("icon-selected-disabled"),"icon-success":Tt("icon-success"),"icon-warning":Tt("icon-warning"),"icon-error":Tt("icon-error"),"icon-error-strong":Tt("icon-error-strong"),"icon-info":Tt("icon-info"),"icon-inverse":Tt("icon-inverse"),"icon-primary-inverse":Tt("icon-primary-inverse"),border:Tt("border"),"border-strong":Tt("border-strong"),"border-stronger":Tt("border-stronger"),"border-primary":Tt("border-primary"),"border-primary-subtle":Tt("border-primary-subtle"),"border-hover":Tt("border-hover"),"border-hover-strong":Tt("border-hover-strong"),"border-selected":Tt("border-selected"),"border-selected-subtle":Tt("border-selected-subtle"),"border-selected-subtlest":Tt("border-selected-subtlest"),"border-selected-hover":Tt("border-selected-hover"),"border-focus":Tt("border-focus"),"border-focus-strong":Tt("border-focus-strong"),"border-disabled":Tt("border-disabled"),"border-selected-disabled":Tt("border-selected-disabled"),"border-success":Tt("border-success"),"border-warning":Tt("border-warning"),"border-error":Tt("border-error"),"border-error-focus":Tt("border-error-focus"),"border-error-focus-strong":Tt("border-error-focus-strong"),"border-error-strong":Tt("border-error-strong"),"border-info":Tt("border-info"),bg:Tt("bg"),"bg-strong":Tt("bg-strong"),"bg-stronger":Tt("bg-stronger"),"bg-strongest":Tt("bg-strongest"),"bg-hover":Tt("bg-hover"),"bg-hover-strong":Tt("bg-hover-strong"),"bg-hover-subtle":Tt("bg-hover-subtle"),"bg-hover-neutral":Tt("bg-hover-neutral"),"bg-hover-neutral-strong":Tt("bg-hover-neutral-strong"),"bg-selected":Tt("bg-selected"),"bg-selected-hover":Tt("bg-selected-hover"),"bg-selected-strong":Tt("bg-selected-strong"),"bg-selected-stronger":Tt("bg-selected-stronger"),"bg-selected-strongest":Tt("bg-selected-strongest"),"bg-selected-strongest-hover":Tt("bg-selected-strongest-hover"),"bg-disabled":Tt("bg-disabled"),"bg-selected-disabled":Tt("bg-selected-disabled"),"bg-selected-stronger-disabled":Tt("bg-selected-stronger-disabled"),"bg-success":Tt("bg-success"),"bg-success-hover":Tt("bg-success-hover"),"bg-success-strong":Tt("bg-success-strong"),"bg-success-strong-hover":Tt("bg-success-strong-hover"),"bg-warning":Tt("bg-warning"),"bg-warning-hover":Tt("bg-warning-hover"),"bg-warning-strong":Tt("bg-warning-strong"),"bg-warning-strong-hover":Tt("bg-warning-strong-hover"),"bg-info":Tt("bg-info"),"bg-info-hover":Tt("bg-info-hover"),"bg-info-strong":Tt("bg-info-strong"),"bg-info-strong-hover":Tt("bg-info-strong-hover"),"bg-error":Tt("bg-error"),"bg-error-hover":Tt("bg-error-hover"),"bg-error-strong":Tt("bg-error-strong"),"bg-error-strong-hover":Tt("bg-error-strong-hover"),"bg-inverse":Tt("bg-inverse"),"bg-inverse-subtle":Tt("bg-inverse-subtle"),"bg-inverse-subtler":Tt("bg-inverse-subtler"),"bg-inverse-subtlest":Tt("bg-inverse-subtlest"),"bg-inverse-hover":Tt("bg-inverse-hover"),"bg-primary":Tt("bg-primary"),"bg-primary-subtle":Tt("bg-primary-subtle"),"bg-primary-subtler":Tt("bg-primary-subtler"),"bg-primary-subtlest":Tt("bg-primary-subtlest"),"bg-available":Tt("bg-available"),"bg-primary-hover":Tt("bg-primary-hover"),"bg-primary-subtlest-hover":Tt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Tt("bg-primary-subtlest-selected"),"overlay-strong":Tt("overlay-strong"),"overlay-subtle":Tt("overlay-subtle"),hyperlink:Tt("hyperlink"),"hyperlink-hover":Tt("hyperlink-hover"),"hyperlink-visited":Tt("hyperlink-visited"),"hyperlink-inverse":Tt("hyperlink-inverse"),"focus-ring":Tt("focus-ring"),"focus-ring-inverse":Tt("focus-ring-inverse")},_t={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:bt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:jt.border(r),u=bt.solid;return p`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:bt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:jt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Rt=e=>1===e.length&&"theme"in e[0],Lt=e=>(...r)=>t=>{const n=Rt(r)?[]:r,a=Rt(r)?r[0]:t,i=a.theme;return(0,ct(_t,null==i?void 0:i.borderScheme)[e])(...n)(a)},Ht={solid:Lt("solid"),"dashed-default":Lt("dashed-default")},It={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,a=ct(It,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?dt(a,e,n.overrides.breakpoint):a[e],i},Nt={"xxs-min":Wt("xxs-min"),"xxs-max":Wt("xxs-max"),"xs-min":Wt("xs-min"),"xs-max":Wt("xs-max"),"sm-min":Wt("sm-min"),"sm-max":Wt("sm-max"),"md-min":Wt("md-min"),"md-max":Wt("md-max"),"lg-min":Wt("lg-min"),"lg-max":Wt("lg-max"),"xl-min":Wt("xl-min"),"xl-max":Wt("xl-max"),"xxl-min":Wt("xxl-min"),"xxs-column":Wt("xxs-column"),"xs-column":Wt("xs-column"),"sm-column":Wt("sm-column"),"md-column":Wt("md-column"),"lg-column":Wt("lg-column"),"xl-column":Wt("xl-column"),"xxl-column":Wt("xxl-column"),"xxs-gutter":Wt("xxs-gutter"),"xs-gutter":Wt("xs-gutter"),"sm-gutter":Wt("sm-gutter"),"md-gutter":Wt("md-gutter"),"lg-gutter":Wt("lg-gutter"),"xl-gutter":Wt("xl-gutter"),"xxl-gutter":Wt("xxl-gutter"),"xxs-margin":Wt("xxs-margin"),"xs-margin":Wt("xs-margin"),"sm-margin":Wt("sm-margin"),"md-margin":Wt("md-margin"),"lg-margin":Wt("lg-margin"),"xl-margin":Wt("xl-margin"),"xxl-margin":Wt("xxl-margin")},Pt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Nt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ut={MaxWidth:Pt("max-width"),MinWidth:Pt("min-width")},Vt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,a=ct(Vt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?dt(a,e,n.overrides.fontSpec):a[e]},Kt={"heading-size-xxl":Zt("heading-size-xxl"),"heading-size-xl":Zt("heading-size-xl"),"heading-size-lg":Zt("heading-size-lg"),"heading-size-md":Zt("heading-size-md"),"heading-size-sm":Zt("heading-size-sm"),"heading-size-xs":Zt("heading-size-xs"),"heading-lh-xxl":Zt("heading-lh-xxl"),"heading-lh-xl":Zt("heading-lh-xl"),"heading-lh-lg":Zt("heading-lh-lg"),"heading-lh-md":Zt("heading-lh-md"),"heading-lh-sm":Zt("heading-lh-sm"),"heading-lh-xs":Zt("heading-lh-xs"),"heading-ls-xxl":Zt("heading-ls-xxl"),"heading-ls-xl":Zt("heading-ls-xl"),"heading-ls-lg":Zt("heading-ls-lg"),"heading-ls-md":Zt("heading-ls-md"),"heading-ls-sm":Zt("heading-ls-sm"),"heading-ls-xs":Zt("heading-ls-xs"),"weight-light":Zt("weight-light"),"weight-regular":Zt("weight-regular"),"weight-semibold":Zt("weight-semibold"),"weight-bold":Zt("weight-bold"),"font-family":Zt("font-family"),"body-size-baseline":Zt("body-size-baseline"),"body-size-md":Zt("body-size-md"),"body-size-sm":Zt("body-size-sm"),"body-size-xs":Zt("body-size-xs"),"body-lh-baseline":Zt("body-lh-baseline"),"body-lh-md":Zt("body-lh-md"),"body-lh-sm":Zt("body-lh-sm"),"body-lh-xs":Zt("body-lh-xs"),"body-ls-baseline":Zt("body-ls-baseline"),"body-ls-md":Zt("body-ls-md"),"body-ls-sm":Zt("body-ls-sm"),"body-ls-xs":Zt("body-ls-xs"),"form-label-size":Zt("form-label-size"),"form-description-size":Zt("form-description-size"),"form-label-lh":Zt("form-label-lh"),"form-description-lh":Zt("form-description-lh"),"form-label-ls":Zt("form-label-ls"),"form-description-ls":Zt("form-description-ls")},Jt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return p`
        font-family: ${Zt("font-family")};
        font-size: ${Zt(e)};
        font-weight: ${Zt(r)};
        line-height: ${Zt(t)};
        letter-spacing: ${Zt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Xt=(e={})=>({"heading-xxl-light":Jt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Jt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Jt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Jt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Jt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Jt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Jt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Jt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Jt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Jt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Jt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Jt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Jt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Jt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Jt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Jt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Jt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Jt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Jt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Jt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Jt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Jt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Jt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Jt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Jt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Jt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Jt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Jt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Jt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Jt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Jt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Jt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Jt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Jt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Jt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Jt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Jt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Jt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Jt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Jt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Jt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Jt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),qt=Xt({disableLigatures:!0}),Gt={collections:{default:Xt(),bookingsg:qt,pa:Xt({disableLigatures:!0}),a11yplayground:Xt({disableLigatures:!0}),supportgowhere:Xt({disableLigatures:!0})},defaultValue:"default"},Qt=e=>r=>{var t;const n=r.theme,a=ct(Gt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?dt(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},en={"heading-xxl-light":Qt("heading-xxl-light"),"heading-xxl-regular":Qt("heading-xxl-regular"),"heading-xxl-semibold":Qt("heading-xxl-semibold"),"heading-xxl-bold":Qt("heading-xxl-bold"),"heading-xl-light":Qt("heading-xl-light"),"heading-xl-regular":Qt("heading-xl-regular"),"heading-xl-semibold":Qt("heading-xl-semibold"),"heading-xl-bold":Qt("heading-xl-bold"),"heading-lg-light":Qt("heading-lg-light"),"heading-lg-regular":Qt("heading-lg-regular"),"heading-lg-semibold":Qt("heading-lg-semibold"),"heading-lg-bold":Qt("heading-lg-bold"),"heading-md-light":Qt("heading-md-light"),"heading-md-regular":Qt("heading-md-regular"),"heading-md-semibold":Qt("heading-md-semibold"),"heading-md-bold":Qt("heading-md-bold"),"heading-sm-light":Qt("heading-sm-light"),"heading-sm-regular":Qt("heading-sm-regular"),"heading-sm-semibold":Qt("heading-sm-semibold"),"heading-sm-bold":Qt("heading-sm-bold"),"heading-xs-light":Qt("heading-xs-light"),"heading-xs-regular":Qt("heading-xs-regular"),"heading-xs-semibold":Qt("heading-xs-semibold"),"heading-xs-bold":Qt("heading-xs-bold"),"body-baseline-light":Qt("body-baseline-light"),"body-baseline-regular":Qt("body-baseline-regular"),"body-baseline-semibold":Qt("body-baseline-semibold"),"body-baseline-bold":Qt("body-baseline-bold"),"body-md-light":Qt("body-md-light"),"body-md-regular":Qt("body-md-regular"),"body-md-semibold":Qt("body-md-semibold"),"body-md-bold":Qt("body-md-bold"),"body-sm-light":Qt("body-sm-light"),"body-sm-regular":Qt("body-sm-regular"),"body-sm-semibold":Qt("body-sm-semibold"),"body-sm-bold":Qt("body-sm-bold"),"body-xs-light":Qt("body-xs-light"),"body-xs-regular":Qt("body-xs-regular"),"body-xs-semibold":Qt("body-xs-semibold"),"body-xs-bold":Qt("body-xs-bold"),"form-label":Qt("form-label"),"form-description":Qt("form-description")},rn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},tn=e=>r=>{var t;const n=r.theme,a=ct(rn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?dt(a,e,n.overrides.motion):a[e]},nn={"duration-150":tn("duration-150"),"duration-250":tn("duration-250"),"duration-350":tn("duration-350"),"duration-500":tn("duration-500"),"duration-800":tn("duration-800"),"duration-1000":tn("duration-1000"),"ease-default":tn("ease-default"),"ease-standard":tn("ease-standard"),"ease-entrance":tn("ease-entrance"),"ease-exit":tn("ease-exit")},an={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},on=e=>r=>{var t;const n=r.theme,a=ct(an,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${dt(a,e,n.overrides.radius)}px`:`${a[e]}px`},sn={none:on("none"),xs:on("xs"),sm:on("sm"),md:on("md"),lg:on("lg"),full:on("full")},ln={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},dn=e=>r=>{var t;const n=r.theme,a=ct(ln,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${dt(a,e,n.overrides.spacing)}px`:`${a[e]}px`},cn={"spacing-0":dn("spacing-0"),"spacing-4":dn("spacing-4"),"spacing-8":dn("spacing-8"),"spacing-12":dn("spacing-12"),"spacing-16":dn("spacing-16"),"spacing-20":dn("spacing-20"),"spacing-24":dn("spacing-24"),"spacing-32":dn("spacing-32"),"spacing-40":dn("spacing-40"),"spacing-48":dn("spacing-48"),"spacing-64":dn("spacing-64"),"spacing-72":dn("spacing-72"),"layout-xs":dn("layout-xs"),"layout-sm":dn("layout-sm"),"layout-md":dn("layout-md"),"layout-lg":dn("layout-lg"),"layout-xl":dn("layout-xl"),"layout-xxl":dn("layout-xxl"),"layout-xxxl":dn("layout-xxxl")},un=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),gn=Object.assign(Object.assign({},jt),{Primitive:St}),bn=Object.assign(Object.assign({},en),{Spec:Kt}),hn=nn,mn=Object.assign(Object.assign({},bt),{Util:Ht}),yn=cn,fn=sn,pn=Nt,vn=Ut,xn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},wn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Dn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Fn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},$n={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},En={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Cn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Sn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Bn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},xn),{light:un(xn,"light"),dark:un(xn,"dark")}),Object.assign(Object.assign({},wn),{light:un(wn,"light"),dark:un(wn,"dark")}),Object.assign(Object.assign({},Dn),{light:un(Dn,"light"),dark:un(Dn,"dark")}),Object.assign(Object.assign({},Fn),{light:un(Fn,"light"),dark:un(Fn,"dark")}),Object.assign(Object.assign({},$n),{light:un($n,"light"),dark:un($n,"dark")}),Object.assign(Object.assign({},En),{light:un(En,"light"),dark:un(En,"dark")}),Object.assign(Object.assign({},Cn),{light:un(Cn,"light"),dark:un(Cn,"dark")}),Object.assign(Object.assign({},Sn),{light:un(Sn,"light"),dark:un(Sn,"dark")}),Object.assign(Object.assign({},Bn),{light:un(Bn,"light"),dark:un(Bn,"dark")});const An=e=>"small"===e?2.5:3;f.div`
    position: relative;
    width: 100%;
    ${e=>{const r=An(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const kn=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${yn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>An(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${fn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${gn["border-focus"]};
    }
`,zn=f.button`
    ${kn}
    cursor: pointer;
`;f.div`
    ${kn}
`;const On=v`
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
`;f.div`
    position: relative;
    border: ${mn["width-010"]} ${mn.solid} ${gn.border};
    border-radius: ${fn.sm};
    background: ${gn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${gn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${gn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${On} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${gn["bg-disabled"]};

                ${zn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${gn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${zn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${gn["border-error"]};

                :focus-within {
                    border-color: ${gn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${gn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${hn["duration-250"]} ${hn["ease-default"]};
    margin-left: ${yn["spacing-16"]};
`,f(y)`
    color: ${gn.icon};
`,f.div`
    height: 1px;
    background: ${gn.border};
    margin: 0 ${yn["spacing-8"]};
`,f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${gn["text-disabled"]};
            `}}
`;f(f.div`
    ${e=>"small"===e.$variant?bn["body-md-regular"]:bn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return p`
                    ${r=1,p`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${gn["text-subtler"]};
`;var Mn=function(e,r){return Mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Mn(e,r)};var Yn=function(){return Yn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},Yn.apply(this,arguments)};var Tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var jn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},_n="object"==typeof Tn&&Tn&&Tn.Object===Object&&Tn,Rn="object"==typeof self&&self&&self.Object===Object&&self,Ln=_n||Rn||Function("return this")(),Hn=Ln,In=function(){return Hn.Date.now()},Wn=/\s/;var Nn=function(e){for(var r=e.length;r--&&Wn.test(e.charAt(r)););return r},Pn=/^\s+/;var Un=function(e){return e?e.slice(0,Nn(e)+1).replace(Pn,""):e},Vn=Ln.Symbol,Zn=Vn,Kn=Object.prototype,Jn=Kn.hasOwnProperty,Xn=Kn.toString,qn=Zn?Zn.toStringTag:void 0;var Gn=function(e){var r=Jn.call(e,qn),t=e[qn];try{e[qn]=void 0;var n=!0}catch(e){}var a=Xn.call(e);return n&&(r?e[qn]=t:delete e[qn]),a},Qn=Object.prototype.toString;var ea=Gn,ra=function(e){return Qn.call(e)},ta=Vn?Vn.toStringTag:void 0;var na=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ta&&ta in Object(e)?ea(e):ra(e)},aa=function(e){return null!=e&&"object"==typeof e};var ia=Un,oa=jn,sa=function(e){return"symbol"==typeof e||aa(e)&&"[object Symbol]"==na(e)},la=/^[-+]0x[0-9a-f]+$/i,da=/^0b[01]+$/i,ca=/^0o[0-7]+$/i,ua=parseInt;var ga=jn,ba=In,ha=function(e){if("number"==typeof e)return e;if(sa(e))return NaN;if(oa(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=oa(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ia(e);var t=da.test(e);return t||ca.test(e)?ua(e.slice(2),t?2:8):la.test(e)?NaN:+e},ma=Math.max,ya=Math.min;var fa=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=ba();if(h(e))return y(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?ya(t,i-(e-d)):t}(e))}function y(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function f(){var e=ba(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=ha(r)||0,ga(t)&&(c=!!t.leading,i=(u="maxWait"in t)?ma(ha(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},f.flush=function(){return void 0===s?o:y(ba())},f},pa=fa,va=jn;var xa=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return va(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),pa(e,r,{leading:n,maxWait:r,trailing:a})},wa=function(e,r,t,n){switch(r){case"debounce":return fa(e,t,n);case"throttle":return xa(e,t,n);default:return e}},Da=function(e){return"function"==typeof e},Fa=function(){return"undefined"==typeof window},$a=function(e){return e instanceof Element||e instanceof HTMLDocument},Ea=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Da(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Fa()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Fa())return null;if(r)return document.querySelector(r);if(n&&$a(n))return n;if(t.targetRef&&$a(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Ea(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Fa()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Da(r)?"renderProp":Da(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Fa()||(t.resizeHandler=wa(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Mn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Fa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Ca,Sa=Fa()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ca||(Ca={}));const Ba=f.div`
    display: flex;
    flex-direction: column;
`,Aa=e=>"right"===e?"bottom-end":"bottom-start",ka=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:m=0,alignment:y="left",fitAvailableHeight:f,rootNode:p})=>{var v;const T=x(),j=pn["sm-max"]({theme:T}),_=i(null),R=i(null),{width:L=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,y=i(t),f=i(null),p=null!=b?b:f,v=i(),x=o({width:void 0,height:void 0}),w=x[0],D=x[1];return Sa((function(){if(!Fa()){var e=Ea(m,D,c,g);v.current=wa((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!y.current&&!Fa()&&e({width:n,height:a}),y.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),Yn({ref:p},w)}({targetRef:_,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<j;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:I,floatingStyles:W,context:N}=D({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:F,placement:Aa(y),middleware:[$(m),E(),C({limiter:S()}),B({apply({availableHeight:e}){R.current&&Object.assign(R.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),H]}),P=(()=>{const[e,r]=o(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Ca.Change,e),t.events.emit(Ca.Ready),()=>t.events.off(Ca.Change,e)}),[t]),e})(),{isMounted:U,styles:V}=A(N,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=k(N,{enabled:n,toggle:h}),K=z(N,{enabled:n}),{getReferenceProps:J,getFloatingProps:X}=O([Z,K]);return e(r,{children:[t("div",Object.assign({ref:e=>{_.current=e,I.setReference(e)}},J(),{children:c()})),U&&t(M,{root:p,children:t(Y,{context:N,modal:!1,initialFocus:R,returnFocus:!1,children:t("div",Object.assign({ref:I.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=b?b:P)&&void 0!==v?v:50})},X(),{children:t(Ba,{ref:R,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:g({elementWidth:L})})}))})})]})},za=f.div`
    --vertical-inset: ${yn["spacing-24"]};
    --horizontal-inset: ${yn["spacing-20"]};
    --header-bottom-spacing: ${yn["spacing-4"]};

    border: ${mn["width-010"]} ${mn.solid} ${gn.border};
    border-radius: ${fn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${vn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var Oa={exports:{}};Oa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),y=0;a&&!i||(y=i>0?i-1:b.getMonth());var f=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,h,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,h,f,p,v,x)):new Date(m,y,h,f,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ma=H(Oa.exports),Ya={exports:{}};Ya.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Ta=H(Ya.exports),ja={exports:{}};ja.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var _a=H(ja.exports),Ra={exports:{}};Ra.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var La,Ha,Ia,Wa=H(Ra.exports),Na={exports:{}},Pa=H(Na.exports=(La={year:0,month:1,day:2,hour:3,minute:4,second:5},Ha={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Ha[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ha[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=La[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));W.extend(Ta),W.extend(Wa),W.extend(_a),W.extend(Ma),W.extend(Pa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=W(r).startOf("week");return Ua(t).map((e=>Va(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Va(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(W(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+W(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=W(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?W(n):void 0,a?W(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Ia||(Ia={}));const Ua=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Va=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Za=[1,3,5,7,8,10,12],Ka=[4,6,9,11];var Ja,Xa,qa,Ga;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Za.includes(i)?Math.min(a,31).toString():Ka.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=W(e,t);return W(r,t).diff(n,"minute")},e.toDayjs=e=>e?W(e):W(),e.addMinutesToTime=(e,r,t="HH:mm")=>W(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>W(e).isSame(W(r),t)}(Ja||(Ja={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!W(e).isBefore(n,"day"))||!(!a||!W(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(W(e).isValid())return e}return""}}(Xa||(Xa={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(qa||(qa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Ga||(Ga={}));const Qa=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ei=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ri=f.div`
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
    animation: ${ei} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ti=f(ri)`
    animation-delay: -0.45s;
`,ni=f(ri)`
    animation-delay: -0.3s;
`,ai=f(ri)`
    animation-delay: -0.15s;
`,ii={Button:{"button-radius":sn.md,"button-default-colour-bg":jt["bg-primary"],"button-default-colour-bg-hover":jt["bg-primary-hover"],"button-default-colour-text":jt["text-inverse"],"button-secondary-colour-border":jt["border-primary"],"button-secondary-colour-text":jt["text-primary"],"button-light-colour-text":jt["text-primary"],"button-link-colour-text":jt["text-primary"]}},oi={collections:{default:{Button:{"button-radius":sn.sm,"button-default-colour-bg":jt["bg-primary"],"button-default-colour-bg-hover":jt["bg-primary-hover"],"button-default-colour-text":jt["text-inverse"],"button-secondary-colour-border":jt["border-primary"],"button-secondary-colour-text":jt["text-primary"],"button-light-colour-text":jt["text-primary"],"button-link-colour-text":jt["text-primary"]}},pa:{Button:{"button-radius":sn.full,"button-default-colour-bg":jt["bg-primary"],"button-default-colour-bg-hover":jt["bg-primary-hover"],"button-default-colour-text":jt["text-inverse"],"button-secondary-colour-border":jt["border-primary"],"button-secondary-colour-text":jt["text-primary"],"button-light-colour-text":jt["text-primary"],"button-link-colour-text":jt["text-primary"]}},a11yplayground:ii},defaultValue:"default"},si=(e,r)=>t=>{var n,a;const i=t.theme,o=ct(oi,null==i?void 0:i.componentScheme);return li((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},li=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},di=si("Button","button-radius"),ci=si("Button","button-default-colour-bg"),ui=si("Button","button-default-colour-bg-hover"),gi=si("Button","button-default-colour-text"),bi=si("Button","button-secondary-colour-border"),hi=si("Button","button-secondary-colour-text"),mi=si("Button","button-light-colour-text"),yi=si("Button","button-link-colour-text"),fi=f.button`
    padding: ${yn["spacing-8"]} ${yn["spacing-16"]};
    min-width: 4rem;
    border: ${mn["width-010"]} ${mn.solid} transparent;
    transition: all ${hn["duration-250"]} ${hn["ease-default"]};
    border-radius: ${di};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${gn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?gn["border-error-strong"]:bi};

                    color: ${e.$buttonIsDanger?gn["text-error"]:hi};

                    &:hover,
                    &:active {
                        background-color: ${gn["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${gn.bg};
                    border-color: ${gn.border};

                    color: ${e.$buttonIsDanger?gn["text-error"]:mi};

                    &:hover,
                    &:active {
                        background-color: ${gn["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?gn["text-error"]:yi};
                    &:hover,
                    &:active {
                        background-color: ${gn["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${gn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${gn["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?gn["bg-error-strong"]:ci};};

                    ${vn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${gi}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?gn["bg-error-strong-hover"]:ui}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${bn["body-md-semibold"]}

                    ${vn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${bn["heading-md-semibold"]}

                    ${vn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${bn["heading-xs-semibold"]}

                    ${vn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,pi=f((({color:r,className:n,size:a})=>e(Qa,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ri,{id:"inner1"}),t(ti,{id:"inner2"}),t(ni,{id:"inner3"}),t(ai,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,vi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(fi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(pi,{}),t("span",{children:a})]}))};vi.displayName="Button.Default";const xi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(fi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(pi,{}),t("span",{children:a})]}))};xi.displayName="Button.Small";const wi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(fi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(pi,{}),t("span",{children:a})]}))};wi.displayName="Button.Large";const Di={Default:a.forwardRef(vi),Small:a.forwardRef(xi),Large:a.forwardRef(wi)},Fi=f.button`
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

        ${({$highlight:e})=>e&&p`
                background-color: ${gn["bg-hover-neutral"]};
            `}
    }
`,$i=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return t(Fi,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Ei=p`
    color: ${gn.icon};
    height: 1rem;
    width: 1rem;
`,Ci=f(j)`
    ${Ei}
`,Si=f(_)`
    ${Ei}
`,Bi=f(y)`
    ${Ei}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ai=f.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,ki=f.div`
    display: flex;
    flex: 1;
    position: relative;
`,zi=f.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Oi=f.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${gn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,Mi=f.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Yi=f.div`
    display: flex;
`,Ti=f.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${Bi} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,ji=f.span`
    ${bn["body-md-regular"]}
    color: ${gn.text};
`,_i=f.div`
    display: flex;
`,Ri=f($i)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Li=f.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Hi=f(Di.Small)`
    flex: 1;
`,Ii=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Wi=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${fn.md};
    margin: 0 0.5rem;
    transition: ${hn["duration-150"]} ${hn["ease-default"]};

    // default styles
    ${bn["body-md-regular"]}
    border-radius: ${fn.md};
    border: ${mn["width-010"]} ${mn.solid} transparent;
    background-clip: border-box;
    color: ${gn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${gn["bg-selected"]};
                border-color: ${gn["border-selected"]};
                color: ${gn["text-selected"]};
                font-weight: ${bn.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${gn["bg-selected-hover"]};
                        border-color: ${gn["border-selected-hover"]};
                        color: ${gn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${gn["text-primary"]};
                font-weight: ${bn.Spec["weight-semibold"]};
            `:t?p`
                color: ${gn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${gn["bg-selected-hover"]};
                    border-color: ${gn["border-selected-hover"]};
                    color: ${gn["text-selected-hover"]};
                    font-weight: ${bn.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${gn["bg-hover"]};
                color: ${gn["text-hover"]};
                font-weight: ${bn.Spec["weight-semibold"]};
            }
        `}}
`,Ni=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:h})=>{const m=b((()=>Ia.generateMonths(W(e))),[e]),y=i(new Array(m.length).fill(null)),[f,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==f&&(null===(e=y.current[f])||void 0===e||e.focus())}),[f,m]);const v=(e,r)=>{r||h(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const r=e.format("MMMM"),t=(n=e,!Ia.isWithinRange(n,d?W(d):void 0,c?W(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":W().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(Ii,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=w(e);return t(Wi,{ref:e=>y.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},Pi=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ui=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${hn["duration-150"]} ${hn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${bn["body-md-regular"]}
    border-radius: ${fn.md};
    border: ${mn["width-010"]} ${mn.solid} transparent;
    background-clip: border-box;
    color: ${gn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${gn["bg-selected"]};
                border-color: ${gn["border-selected"]};
                color: ${gn["text-selected"]};
                font-weight: ${bn.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${gn["bg-selected-hover"]};
                        border-color: ${gn["border-selected-hover"]};
                        color: ${gn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${gn["text-primary"]};
                font-weight: ${bn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${gn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${gn["bg-selected-hover"]};
                    border-color: ${gn["border-selected-hover"]};
                    color: ${gn["text-selected-hover"]};
                    font-weight: ${bn.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${gn["bg-hover"]};
                color: ${gn["text-hover"]};
                font-weight: ${bn.Spec["weight-semibold"]};
            }
        `}}
`,Vi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:h,setCalendarDate:m})=>{const y=b((()=>Ia.generateDecadeOfYears(W(e))),[e]),f=i(new Array(y.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=y.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,y]);const x=(e,r)=>{r||h(e)},w=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},D=e=>{const r=y.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!Ia.isWithinRange(i,d?W(d):void 0,c?W(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":W().isSame(e,"year")?"current-year":"default",l=s.year()>=y[0].year()&&s.year()<=y[y.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||w(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return y.length?t(Pi,{onBlur:()=>{v(null)},children:y.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=D(e);return t(Ui,{ref:e=>{f.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Zi=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:m,selectWithinRange:y,dynamicHeight:f=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:D,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A,isFocusable:k=!1}=n,z=R(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[O,M]=o(Ja.toDayjs(l)),[Y,T]=o(Ja.toDayjs(l)),[j,_]=o("default"),L=i(null),H=i(null),I=i(null),N=i(null);h(a,(()=>({defaultView(){_("default")},resetView(){const e=Ja.toDayjs(l);M(e),T(e),_("default")},setCalendarDate(e){const r=Ja.toDayjs(e);M(r),T(r)}}))),u((()=>{const e=Ja.toDayjs(l);M(e),T(e)}),[l]),u((()=>{G(Y)}),[Y]);const P=()=>{var e;"month-options"!==j?(_("month-options"),null===(e=I.current)||void 0===e||e.focus()):(_("default"),M(Y))},U=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P(),null===(r=N.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?O.subtract(1,"month"):O.add(1,"month");if(!Ia.isWithinRange(r,d?W(d):void 0,c?W(c):void 0,"month"))return;M(r),"default"===j&&T(r)}},V=()=>{"default"!==j?(_("default"),M(Y)):_("year-options")},Z=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===j?"ArrowUp"===e.key?O.subtract(10,"year"):O.add(10,"year"):"ArrowUp"===e.key?O.subtract(1,"year"):O.add(1,"year"),!Ia.isWithinRange(r,d?W(d):void 0,c?W(c):void 0,"year"))return;M(r),"default"===j&&T(r)}},K=()=>{var e;null===(e=I.current)||void 0===e||e.focus();const r=$?$(O):O.subtract(1,"month");switch(j){case"default":T(r),M(r);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=I.current)||void 0===e||e.focus();const r=E?E(O):O.add(1,"month");switch(j){case"default":T(r),M(r);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},X=e=>{M(e),T(e),x||_("default")},q=()=>{const e=Ja.toDayjs(l);M(e),T(e),"default"===j?Q("reset"):_("default")},G=e=>{v&&v(e)},Q=e=>{D&&D(e)},ee=()=>{if(!d||p)return!1;const e=W(d);return"month-options"===j?!Ia.isPreviousYearWithinRange(O,e):"year-options"===j?!Ia.isPreviousDecadeWithinRange(O,e):C?C(O):!Ia.isPreviousMonthWithinRange(O,e)},re=()=>{if(!c||p)return!1;const e=W(c);return"month-options"===j?!Ia.isNextYearWithinRange(O,e):"year-options"===j?!Ia.isNextDecadeWithinRange(O,e):S?S(O):!Ia.isNextMonthWithinRange(O,e)},te=()=>{const n=B?B(O):O.format("MMM"),a=W(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=Ia.getStartEndDecade(O);return`${e} to ${r}`}return A?A(O):O.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Ti,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:P,onKeyDown:U,tabIndex:k?0:-1,children:[t(ji,{children:n}),t(Bi,{})]}),e(Ti,{ref:N,"aria-label":o[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:V,onKeyDown:Z,tabIndex:k?0:-1,children:[t(ji,{children:i}),t(Bi,{})]})]})},ne=()=>{switch(j){case"month-options":return t(Ni,{calendarDate:O,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:!!y,onMonthSelect:X,allowDisabledSelection:p});case"year-options":return t(Vi,{setCalendarDate:M,calendarDate:O,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:!!y,onYearSelect:X,allowDisabledSelection:p});default:return null}};return e(Ai,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},z,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return e(Mi,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Yi,{children:te()}),e(_i,{children:[t(Ri,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:k?0:-1,children:t(Ci,{})}),t(Ri,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:k?0:-1,children:t(Si,{})})]})]})})(),t(ki,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:j}):s;if(f)return e(r,{children:["default"===j&&n,ne()]});{const a="default"===j;return e(r,{children:[t(zi,{inert:a?void 0:"",children:n}),t(Oi,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return e(Li,{children:[t(Hi,{ref:H,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),t(Hi,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{r||(M(Y),"default"===j?Q("confirmed"):_("default"))},disabled:r,children:"Done"})]})})()]}))})),Ki=f.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ji=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${bn["body-sm-semibold"]};
    color: ${gn.text};
`,Xi=f.div`
    grid-column: 1 / -1;
    display: flex;
`,qi=e=>{let r=gn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=gn["bg-hover"],t=gn["bg-hover"];break;case"hover":r=gn["bg-hover-strong"],t=gn["bg-hover-strong"];break;case"hover-outline":r=gn["bg-hover-subtle"],t=gn["border-hover"];break;case"selected-outline":r=gn["bg-selected"],t=gn["border-selected"];break;case"selected-outline-subtle":r=gn["bg-selected"],t=gn["border-selected-subtle"];break;case"selected-hover":r=gn["bg-selected-hover"];break;case"selected-hover-outline":r=gn["bg-selected-hover"],t=gn["border-selected-hover"]}return{color:r,borderColor:t}},Gi=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Qi=f.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${hn["duration-150"]} ${hn["ease-default"]};
    border: ${mn["width-010"]} ${mn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=qi(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,eo=f(Qi)`
    left: 0;
`,ro=f(Qi)`
    right: 0;
`,to=f.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${hn["duration-150"]} ${hn["ease-default"]};

    border: ${mn["width-010"]} ${mn.solid} transparent;
    border-radius: ${fn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=qi(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,no=f(to)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,ao=f(to)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,io=f.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,oo=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${bn["body-md-regular"]}
    transition: ${hn["duration-150"]} ${hn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?p`
                    visibility: hidden;
                `:p`
                color: ${gn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${bn.Spec["weight-semibold"]};
                    color: ${gn["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${bn.Spec["weight-semibold"]};
                    color: ${gn["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${bn.Spec["weight-semibold"]};
                    color: ${gn["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${bn.Spec["weight-semibold"]};
                    color: ${gn["text-hover"]};
                `;case"unavailable":return p`
                    color: ${gn["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${gn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,so=f.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,lo=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:y,onKeyDown:f,tabIndex:p=-1,role:v="button",focusDate:x})=>{const w=W().isSame(g,"day"),D=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Gi,{children:[t(eo,{$type:r}),t(no,{$type:a}),t(ro,{$type:n}),t(ao,{$type:o}),t(io,{$interactive:d,children:e(oo,{ref:$,tabIndex:p,role:v,"aria-label":D,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{f&&f(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{y&&y(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&w&&t(so,{$disabled:l})]})})]})},co=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:y,setFocusCell:f,tabIndex:p=-1})=>{const v=Ia.isDisabledDay(e,c,l,d),x=!v||u,w=()=>{h(e,!x)},D=()=>{const e=W(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{y(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&w());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),f(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:W(s),tabIndex:p};return t(lo,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(W().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=D();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};W.extend(Ta);const uo=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:h,maxDate:y,allowDisabledSelection:f,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const w=m((()=>s&&W(s).isSame(r,"month")?W(s):l&&W(l).isSame(r,"month")?W(l):W().isSame(r,"month")?W():h&&r.isSame(W(h),"month")?W(h):W(r).startOf("month")),[s,r,l,h]),D=e=>{const t=W(e);if(Ia.isWithinRange(t,h?W(h):void 0,y?W(y):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=b((()=>Ia.generateDays(r)),[r]),$=b((()=>w()),[w]),[E,C]=o(""),[S,B]=o(""),A=(e,r)=>{r&&!f||d(e)},k=(e,r)=>{r&&!f||(B(e),c(e))},z=e=>{B(e),c(e)},O=()=>{B(""),c("")};return e(Ki,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(Ji,{"aria-hidden":!0,children:W(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(Xi,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:e.map(((e,i)=>t(co,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:h,maxDate:y,disabledDates:a,allowDisabledSelection:f,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:k,onFocus:z,setFocusCell:D,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},go=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=Ia.isDisabledDay(e,s,i,o),b=!g||l,{start:h,end:m}=n?Ia.getFixedRangeStartEnd(Ja.toDayjs(n),d):{start:void 0,end:void 0},{start:y,end:f}=a?Ia.getFixedRangeStartEnd(Ja.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(h,m,"day","[]"),v=!!a&&e.isBetween(y,f,"day","[]"),x=p&&e.isSame(h,"day")||v&&e.isSame(y,"day"),w=p&&e.isSame(m,"day")||v&&e.isSame(f,"day"),D=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(lo,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&D(r,"hover",t===y,t===f),p&&D(r,"selected-outline",t===h,t===m),p&&v&&(D(r,"selected-hover-outline",x,w),t===y&&t!==h&&(r.circleLeft="selected-hover")),r})()))},bo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=b((()=>Ia.generateDays(r)),[r]),[h,m]=o(""),y=(e,r)=>{r&&!c||(i(e),e&&!W(e).isSame(e,"month")&&m(""))},f=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ki,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Ji,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Xi,{onMouseLeave:p,children:e.map(((e,i)=>t(go,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:y,onHover:f,numberOfDays:u},`day-${i}`)))},i)))]})},ho=f.div`
    width: 100%;
    background: ${gn.bg};
`,mo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=Ia.isDisabledDay(e,s,i,o),b=!g||l,h={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(lo,Object.assign({},h,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};W.extend(Ta);const yo=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=b((()=>Ia.generateDays(r)),[r]),[h,m]=o(""),y=(e,r)=>{r&&!c||i(e)},f=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ki,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Ji,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Xi,{onMouseLeave:p,children:e.map(((e,i)=>t(mo,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:y,onHover:f},`day-${i}`)))},i)))]})},fo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Ia.isDisabledDay(e,s,i,o),g=!u||l,{start:b,end:h}=Ia.getWeekStartEnd(Ja.toDayjs(n)),{start:m,end:y}=Ia.getWeekStartEnd(Ja.toDayjs(a)),f=n&&e.isBetween(b,h,"day","[]"),p=a&&e.isBetween(m,y,"day","[]"),v=f&&e.isSame(b)||p&&e.isSame(m),x=f&&e.isSame(h)||p&&e.isSame(y),w={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(lo,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return f&&p?(r="selected-hover-outline",t="selected-hover"):f?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},po=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=b((()=>Ia.generateDays(r)),[r]),[g,h]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!W(e).isSame(t,"month")&&h("")},y=(e,r)=>{r&&!c||(h(e),s(e))},f=()=>{h(""),s("")};return e(Ki,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(Ji,{children:W(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Xi,{onMouseLeave:f,children:e.map(((e,i)=>t(fo,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:y},`day-${i}`)))},i)))]})},vo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:m,selectWithinRange:y=!0,initialCalendarDate:f,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const D=i(null),F=i(void 0);h(w,(()=>({reset(){var e;null===(e=D.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=D.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=D.current)||void 0===r||r.setCalendarDate(t),C(t)},E=e=>{S(e)},C=e=>{n&&n(e)},S=e=>{a&&a(e)},B=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(ho,{children:t(Zi,{ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:y,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=D.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),B(e)),F.current=e},initialCalendarDate:f,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(po,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:m,onSelect:$,onHover:E});case"fixed-range":return t(bo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:m,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(yo,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(uo,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:y,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=D.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),xo=a.forwardRef(((e,r)=>{var{width:n}=e,a=R(e,["width"]);return t(za,{$width:n,"data-testid":"calendar-dropdown",children:t(vo,Object.assign({ref:r},a))})})),wo=f.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return p`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return p`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return p`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return p`
                    background-color: ${gn.bg};
                    border: ${mn["width-010"]} ${mn.solid}
                        ${gn["border-primary"]};
                    color: ${gn["text-primary"]};

                    :hover {
                        background-color: ${gn["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${gn.bg};
                    border: ${mn["width-010"]} ${mn.solid}
                        ${gn.border};
                    color: ${gn["text-primary"]};

                    :hover {
                        background-color: ${gn["bg-hover-neutral"]};
                    }
                `;default:return p`
                    background-color: ${gn["bg-primary"]};
                    border: none;
                    color: ${gn["text-inverse"]};

                    :hover {
                        background-color: ${gn["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${gn["bg-disabled"]};
        border: ${mn["width-010"]} ${mn.solid}
            ${gn["border-disabled"]};
        color: ${gn["text-disabled"]};
        cursor: not-allowed;
    }
`,Do=f(a.forwardRef(((e,r)=>{var{"data-testid":n,styleType:a="primary",children:i,sizeType:o="default",type:s="button"}=e,l=R(e,["data-testid","styleType","children","sizeType","type"]);return t(wo,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:a},l,{children:i}))})))`
    margin: ${yn["spacing-8"]};
`,Fo=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${gn["bg-strong"]};
    border-radius: ${fn.sm};
`,$o=f(Di.Default)`
    color: ${e=>e.$enableDateClick?gn["text-primary"]:gn.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return p`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,Eo=r=>{var{selectedDate:n,minDate:a,maxDate:i,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:d,onLeftArrowClick:c,onRightArrowClick:u,onCalendarDateSelect:g,dropdownRootNode:b}=r,h=R(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const m=Ja.toDayjs(n),y=Ja.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),f=Ja.isSame(n,W())&&d?"Today":m.format(l?"ddd":"dddd"),[p,v]=o(!1),x=e=>{g&&g(e),v(!p)},w=()=>{v(!1),c(n)},D=()=>{v(!1),u(n)};return t(ka,{enabled:!s,isOpen:p,renderElement:()=>e(Fo,Object.assign({},h,{children:[t(Do,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!a&&(Ia.isDisabledDay(m,void 0,a)||Ja.isSame(m,a)),"aria-label":"Previous day",onClick:w,styleType:"light",sizeType:"small",children:t(Ci,{})}),t($o,{onClick:()=>!!g&&!s&&v(!p),$enableDateClick:!!g&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!g||s,children:`${y}, ${f}`}),t(Do,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!i&&(Ia.isDisabledDay(m,void 0,void 0,i)||Ja.isSame(m,i)),"aria-label":"Next day",onClick:D,styleType:"light",sizeType:"small",children:t(Si,{})})]})),renderDropdown:({elementWidth:e})=>t(xo,{variant:"single",initialCalendarDate:n,value:n,minDate:a,maxDate:i,onSelect:x,width:e}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8,rootNode:b})};export{Eo as DateNavigator};
//# sourceMappingURL=index.js.map
