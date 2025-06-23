import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useMemo as b,useImperativeHandle as h,useCallback as m}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import f,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as w,useFloating as D,autoUpdate as F,offset as $,flip as E,shift as C,limitShift as S,size as A,useTransitionStyles as B,useClick as k,useDismiss as M,useInteractions as O,FloatingPortal as z,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}};I.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var w="$isDayjsObject",D=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(D(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=D,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var y=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,f=this.$d.getTime()+n*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,b){var h,m=this,y=E.p(g),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=D,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var W=H(I.exports),N=Array.isArray,P="object"==typeof L&&L&&L.Object===Object&&L,U="object"==typeof self&&self&&self.Object===Object&&self,V=P||U||Function("return this")(),Z=V.Symbol,K=Z,J=Object.prototype,X=J.hasOwnProperty,q=J.toString,G=K?K.toStringTag:void 0;var Q=function(e){var r=X.call(e,G),t=e[G];try{e[G]=void 0;var n=!0}catch(e){}var a=q.call(e);return n&&(r?e[G]=t:delete e[G]),a},ee=Object.prototype.toString;var re=Q,te=function(e){return ee.call(e)},ne=Z?Z.toStringTag:void 0;var ae=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?re(e):te(e)};var ie=ae,oe=function(e){return null!=e&&"object"==typeof e};var se=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==ie(e)},le=N,de=se,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ue=/^\w*$/;var ge=function(e,r){if(le(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!de(e))||(ue.test(e)||!ce.test(e)||null!=r&&e in Object(r))};var be=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},he=ae,me=be;var ye,fe=function(e){if(!me(e))return!1;var r=he(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},pe=V["__core-js_shared__"],ve=(ye=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var xe=function(e){return!!ve&&ve in e},we=Function.prototype.toString;var De=fe,Fe=xe,$e=be,Ee=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ce=/^\[object .+?Constructor\]$/,Se=Function.prototype,Ae=Object.prototype,Be=Se.toString,ke=Ae.hasOwnProperty,Me=RegExp("^"+Be.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Oe=function(e,r){return null==e?void 0:e[r]},ze=function(e){return!(!$e(e)||Fe(e))&&(De(e)?Me:Ce).test(Ee(e))},Ye=Oe;var Te=function(e,r){var t=Ye(e,r);return ze(t)?t:void 0},je=Te(Object,"create"),_e=je;var Re=function(){this.__data__=_e?_e(null):{},this.size=0};var Le=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},He=je,Ie=Object.prototype.hasOwnProperty;var We=function(e){var r=this.__data__;if(He){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ie.call(r,e)?r[e]:void 0},Ne=je,Pe=Object.prototype.hasOwnProperty;var Ue=function(e){var r=this.__data__;return Ne?void 0!==r[e]:Pe.call(r,e)},Ve=je;var Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ve&&void 0===r?"__lodash_hash_undefined__":r,this},Ke=Re,Je=Le,Xe=We,qe=Ue,Ge=Ze;function Qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qe.prototype.clear=Ke,Qe.prototype.delete=Je,Qe.prototype.get=Xe,Qe.prototype.has=qe,Qe.prototype.set=Ge;var er=Qe;var rr=function(){this.__data__=[],this.size=0};var tr=function(e,r){return e===r||e!=e&&r!=r};var nr=function(e,r){for(var t=e.length;t--;)if(tr(e[t][0],r))return t;return-1},ar=nr,ir=Array.prototype.splice;var or=function(e){var r=this.__data__,t=ar(r,e);return!(t<0)&&(t==r.length-1?r.pop():ir.call(r,t,1),--this.size,!0)},sr=nr;var lr=function(e){var r=this.__data__,t=sr(r,e);return t<0?void 0:r[t][1]},dr=nr;var cr=function(e){return dr(this.__data__,e)>-1},ur=nr;var gr=function(e,r){var t=this.__data__,n=ur(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},br=rr,hr=or,mr=lr,yr=cr,fr=gr;function pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}pr.prototype.clear=br,pr.prototype.delete=hr,pr.prototype.get=mr,pr.prototype.has=yr,pr.prototype.set=fr;var vr=pr,xr=Te(V,"Map"),wr=er,Dr=vr,Fr=xr;var $r=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Er=function(e,r){var t=e.__data__;return $r(r)?t["string"==typeof r?"string":"hash"]:t.map},Cr=Er;var Sr=function(e){var r=Cr(this,e).delete(e);return this.size-=r?1:0,r},Ar=Er;var Br=function(e){return Ar(this,e).get(e)},kr=Er;var Mr=function(e){return kr(this,e).has(e)},Or=Er;var zr=function(e,r){var t=Or(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Yr=function(){this.size=0,this.__data__={hash:new wr,map:new(Fr||Dr),string:new wr}},Tr=Sr,jr=Br,_r=Mr,Rr=zr;function Lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Lr.prototype.clear=Yr,Lr.prototype.delete=Tr,Lr.prototype.get=jr,Lr.prototype.has=_r,Lr.prototype.set=Rr;var Hr=Lr;function Ir(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ir.Cache||Hr),t}Ir.Cache=Hr;var Wr=Ir;var Nr=function(e){var r=Wr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Pr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g,Vr=Nr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Pr,(function(e,t,n,a){r.push(n?a.replace(Ur,"$1"):t||e)})),r}));var Zr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Kr=N,Jr=se,Xr=Z?Z.prototype:void 0,qr=Xr?Xr.toString:void 0;var Gr=function e(r){if("string"==typeof r)return r;if(Kr(r))return Zr(r,e)+"";if(Jr(r))return qr?qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Qr=Gr;var et=N,rt=ge,tt=Vr,nt=function(e){return null==e?"":Qr(e)};var at=se;var it=function(e,r){return et(e)?e:rt(e,r)?[e]:tt(nt(e))},ot=function(e){if("string"==typeof e||at(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var st=function(e,r){for(var t=0,n=(r=it(r,e)).length;null!=e&&t<n;)e=e[ot(r[t++])];return t&&t==n?e:void 0};var lt=H((function(e,r,t){var n=null==e?void 0:st(e,r);return void 0===n?t:n}));const dt=(e,r,t)=>lt(t,r)||lt(e,r),ct=(e,r)=>{const t=r||e.defaultValue;return lt(e.collections,t)},ut={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},gt=e=>r=>{var t;const n=r.theme,a=ct(ut,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${dt(a,e,n.overrides.border)}px`:`${a[e]}px`},bt={"width-005":gt("width-005"),"width-010":gt("width-010"),"width-020":gt("width-020"),"width-040":gt("width-040"),solid:(ht="solid",e=>{var r;const t=e.theme,n=ct(ut,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?dt(n,ht,t.overrides.border):n[ht];return"function"==typeof a?a(e):a})};var ht;const mt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ft={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={collections:{lifesg:ft,bookingsg:mt,rbs:wt,mylegacy:pt,ccube:yt,oneservice:vt,pa:xt,a11yplayground:Dt},defaultValue:"lifesg"},$t={collections:{lifesg:ft,bookingsg:mt,rbs:wt,mylegacy:pt,ccube:yt,oneservice:vt,pa:xt,a11yplayground:Dt},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=ct(a?$t:Ft,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?dt(i,e,s):i[e]},Ct={"brand-10":Et("brand-10"),"brand-20":Et("brand-20"),"brand-30":Et("brand-30"),"brand-40":Et("brand-40"),"brand-50":Et("brand-50"),"brand-60":Et("brand-60"),"brand-70":Et("brand-70"),"brand-80":Et("brand-80"),"brand-90":Et("brand-90"),"brand-95":Et("brand-95"),"brand-100":Et("brand-100"),"primary-10":Et("primary-10"),"primary-20":Et("primary-20"),"primary-30":Et("primary-30"),"primary-40":Et("primary-40"),"primary-50":Et("primary-50"),"primary-60":Et("primary-60"),"primary-70":Et("primary-70"),"primary-80":Et("primary-80"),"primary-90":Et("primary-90"),"primary-95":Et("primary-95"),"primary-100":Et("primary-100"),"secondary-10":Et("secondary-10"),"secondary-20":Et("secondary-20"),"secondary-30":Et("secondary-30"),"secondary-40":Et("secondary-40"),"secondary-50":Et("secondary-50"),"secondary-60":Et("secondary-60"),"secondary-70":Et("secondary-70"),"secondary-80":Et("secondary-80"),"secondary-90":Et("secondary-90"),"secondary-95":Et("secondary-95"),"secondary-100":Et("secondary-100"),"neutral-10":Et("neutral-10"),"neutral-20":Et("neutral-20"),"neutral-30":Et("neutral-30"),"neutral-40":Et("neutral-40"),"neutral-50":Et("neutral-50"),"neutral-60":Et("neutral-60"),"neutral-70":Et("neutral-70"),"neutral-80":Et("neutral-80"),"neutral-90":Et("neutral-90"),"neutral-95":Et("neutral-95"),"neutral-100":Et("neutral-100"),"success-10":Et("success-10"),"success-20":Et("success-20"),"success-30":Et("success-30"),"success-40":Et("success-40"),"success-50":Et("success-50"),"success-60":Et("success-60"),"success-70":Et("success-70"),"success-80":Et("success-80"),"success-90":Et("success-90"),"success-95":Et("success-95"),"success-100":Et("success-100"),"warning-10":Et("warning-10"),"warning-20":Et("warning-20"),"warning-30":Et("warning-30"),"warning-40":Et("warning-40"),"warning-50":Et("warning-50"),"warning-60":Et("warning-60"),"warning-70":Et("warning-70"),"warning-80":Et("warning-80"),"warning-90":Et("warning-90"),"warning-95":Et("warning-95"),"warning-100":Et("warning-100"),"error-10":Et("error-10"),"error-20":Et("error-20"),"error-30":Et("error-30"),"error-40":Et("error-40"),"error-50":Et("error-50"),"error-60":Et("error-60"),"error-70":Et("error-70"),"error-80":Et("error-80"),"error-90":Et("error-90"),"error-95":Et("error-95"),"error-100":Et("error-100"),"info-10":Et("info-10"),"info-20":Et("info-20"),"info-30":Et("info-30"),"info-40":Et("info-40"),"info-50":Et("info-50"),"info-60":Et("info-60"),"info-70":Et("info-70"),"info-80":Et("info-80"),"info-90":Et("info-90"),"info-95":Et("info-95"),"info-100":Et("info-100"),white:Et("white"),black:Et("black"),"primary-inverse":Et("primary-inverse")},St={text:Et("neutral-20"),"text-subtle":Et("neutral-30"),"text-subtler":Et("neutral-50"),"text-subtlest":Et("neutral-60"),"text-primary":Et("primary-50"),"text-hover":Et("primary-40"),"text-selected":Et("primary-50"),"text-selected-hover":Et("primary-40"),"text-disabled":Et("neutral-50"),"text-disabled-subtle":Et("neutral-60"),"text-disabled-subtlest":Et("neutral-80"),"text-selected-disabled":Et("neutral-20"),"text-success":Et("success-40"),"text-warning":Et("warning-40"),"text-error":Et("error-40"),"text-info":Et("info-40"),"text-inverse":Et("white"),icon:Et("neutral-50"),"icon-subtle":Et("neutral-60"),"icon-strongest":Et("neutral-20"),"icon-primary":Et("primary-50"),"icon-primary-subtle":Et("primary-60"),"icon-primary-subtlest":Et("primary-70"),"icon-hover":Et("primary-40"),"icon-selected":Et("primary-50"),"icon-selected-hover":Et("primary-40"),"icon-disabled":Et("neutral-50"),"icon-disabled-subtle":Et("neutral-60"),"icon-selected-disabled":Et("neutral-60"),"icon-success":Et("success-50"),"icon-warning":Et("warning-60"),"icon-error":Et("error-50"),"icon-error-strong":Et("error-40"),"icon-info":Et("info-50"),"icon-inverse":Et("white"),"icon-primary-inverse":Et("primary-inverse"),border:Et("neutral-90"),"border-strong":Et("neutral-70"),"border-stronger":Et("neutral-50"),"border-primary":Et("primary-50"),"border-primary-subtle":Et("primary-60"),"border-hover":Et("primary-90"),"border-hover-strong":Et("primary-60"),"border-selected":Et("primary-50"),"border-selected-subtle":Et("primary-70"),"border-selected-subtlest":Et("primary-90"),"border-selected-hover":Et("primary-40"),"border-focus":Et("primary-60"),"border-focus-strong":Et("primary-50"),"border-disabled":Et("neutral-90"),"border-selected-disabled":Et("neutral-70"),"border-success":Et("success-60"),"border-warning":Et("warning-60"),"border-error":Et("error-60"),"border-error-focus":Et("error-60"),"border-error-focus-strong":Et("error-40"),"border-error-strong":Et("error-40"),"border-info":Et("info-60"),bg:Et("white"),"bg-strong":Et("neutral-100"),"bg-stronger":Et("neutral-95"),"bg-strongest":Et("neutral-90"),"bg-hover":Et("primary-95"),"bg-hover-strong":Et("primary-90"),"bg-hover-subtle":Et("primary-100"),"bg-hover-neutral":Et("neutral-100"),"bg-hover-neutral-strong":Et("neutral-90"),"bg-selected":Et("primary-95"),"bg-selected-hover":Et("primary-90"),"bg-selected-strong":Et("primary-90"),"bg-selected-stronger":Et("primary-70"),"bg-selected-strongest":Et("primary-50"),"bg-selected-strongest-hover":Et("primary-40"),"bg-disabled":Et("neutral-95"),"bg-selected-disabled":Et("neutral-95"),"bg-selected-stronger-disabled":Et("neutral-70"),"bg-success":Et("success-100"),"bg-success-hover":Et("success-95"),"bg-success-strong":Et("success-50"),"bg-success-strong-hover":Et("success-40"),"bg-warning":Et("warning-100"),"bg-warning-hover":Et("warning-95"),"bg-warning-strong":Et("warning-50"),"bg-warning-strong-hover":Et("warning-40"),"bg-info":Et("info-100"),"bg-info-hover":Et("info-95"),"bg-info-strong":Et("info-50"),"bg-info-strong-hover":Et("info-40"),"bg-error":Et("error-100"),"bg-error-hover":Et("error-95"),"bg-error-strong":Et("error-50"),"bg-error-strong-hover":Et("error-40"),"bg-inverse":Et("neutral-20"),"bg-inverse-subtle":Et("neutral-30"),"bg-inverse-subtler":Et("neutral-50"),"bg-inverse-subtlest":Et("neutral-60"),"bg-inverse-hover":Et("neutral-40"),"bg-primary":Et("primary-50"),"bg-primary-subtle":Et("primary-60"),"bg-primary-subtler":Et("primary-95"),"bg-primary-subtlest":Et("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Et("primary-40"),"bg-primary-subtlest-hover":Et("primary-90"),"bg-primary-subtlest-selected":Et("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Et("primary-50"),"hyperlink-hover":Et("primary-40"),"hyperlink-visited":Et("primary-40"),"hyperlink-inverse":Et("primary-inverse"),"focus-ring":Et("black"),"focus-ring-inverse":Et("white")},At={text:Et("neutral-100"),"text-subtle":Et("neutral-80"),"text-subtler":Et("neutral-60"),"text-subtlest":Et("neutral-50"),"text-primary":Et("primary-60"),"text-hover":Et("primary-70"),"text-selected":Et("primary-60"),"text-selected-hover":Et("primary-70"),"text-disabled":Et("neutral-60"),"text-disabled-subtle":Et("neutral-50"),"text-disabled-subtlest":Et("neutral-30"),"text-selected-disabled":Et("neutral-90"),"text-success":Et("success-70"),"text-warning":Et("warning-70"),"text-error":Et("error-70"),"text-info":Et("info-70"),"text-inverse":Et("black"),icon:Et("neutral-60"),"icon-subtle":Et("neutral-50"),"icon-strongest":Et("neutral-90"),"icon-primary":Et("primary-60"),"icon-primary-subtle":Et("primary-50"),"icon-primary-subtlest":Et("primary-40"),"icon-hover":Et("primary-70"),"icon-selected":Et("primary-60"),"icon-selected-hover":Et("primary-70"),"icon-disabled":Et("neutral-60"),"icon-disabled-subtle":Et("neutral-50"),"icon-selected-disabled":Et("neutral-50"),"icon-success":Et("success-60"),"icon-warning":Et("warning-50"),"icon-error":Et("error-60"),"icon-error-strong":Et("error-70"),"icon-info":Et("info-60"),"icon-inverse":Et("black"),"icon-primary-inverse":Et("primary-inverse"),border:Et("neutral-20"),"border-strong":Et("neutral-40"),"border-stronger":Et("neutral-60"),"border-primary":Et("primary-60"),"border-primary-subtle":Et("primary-50"),"border-hover":Et("primary-20"),"border-hover-strong":Et("primary-50"),"border-selected":Et("primary-60"),"border-selected-subtle":Et("primary-40"),"border-selected-subtlest":Et("primary-20"),"border-selected-hover":Et("primary-70"),"border-focus":Et("primary-50"),"border-focus-strong":Et("primary-60"),"border-disabled":Et("neutral-20"),"border-selected-disabled":Et("neutral-40"),"border-success":Et("success-50"),"border-warning":Et("warning-50"),"border-error":Et("error-50"),"border-error-focus":Et("error-50"),"border-error-focus-strong":Et("error-70"),"border-error-strong":Et("error-70"),"border-info":Et("info-50"),bg:Et("black"),"bg-strong":Et("neutral-10"),"bg-stronger":Et("neutral-20"),"bg-strongest":Et("neutral-20"),"bg-hover":Et("primary-20"),"bg-hover-strong":Et("primary-20"),"bg-hover-subtle":Et("primary-10"),"bg-hover-neutral":Et("neutral-10"),"bg-hover-neutral-strong":Et("neutral-20"),"bg-selected":Et("primary-20"),"bg-selected-hover":Et("primary-20"),"bg-selected-strong":Et("primary-20"),"bg-selected-stronger":Et("primary-40"),"bg-selected-strongest":Et("primary-60"),"bg-selected-strongest-hover":Et("primary-70"),"bg-disabled":Et("neutral-20"),"bg-selected-disabled":Et("neutral-20"),"bg-selected-stronger-disabled":Et("neutral-40"),"bg-success":Et("success-10"),"bg-success-hover":Et("success-20"),"bg-success-strong":Et("success-60"),"bg-success-strong-hover":Et("success-70"),"bg-warning":Et("warning-10"),"bg-warning-hover":Et("warning-20"),"bg-warning-strong":Et("warning-60"),"bg-warning-strong-hover":Et("warning-70"),"bg-info":Et("info-10"),"bg-info-hover":Et("info-20"),"bg-info-strong":Et("info-60"),"bg-info-strong-hover":Et("info-70"),"bg-error":Et("error-10"),"bg-error-hover":Et("error-20"),"bg-error-strong":Et("error-60"),"bg-error-strong-hover":Et("error-70"),"bg-inverse":Et("neutral-90"),"bg-inverse-subtle":Et("neutral-80"),"bg-inverse-subtler":Et("neutral-60"),"bg-inverse-subtlest":Et("neutral-50"),"bg-inverse-hover":Et("neutral-70"),"bg-primary":Et("primary-60"),"bg-primary-subtle":Et("primary-50"),"bg-primary-subtler":Et("primary-20"),"bg-primary-subtlest":Et("primary-10"),"bg-available":"#185339","bg-primary-hover":Et("primary-70"),"bg-primary-subtlest-hover":Et("primary-20"),"bg-primary-subtlest-selected":Et("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Et("primary-60"),"hyperlink-hover":Et("primary-70"),"hyperlink-visited":Et("primary-70"),"hyperlink-inverse":Et("primary-inverse"),"focus-ring":Et("primary-60"),"focus-ring-inverse":Et("black")},Bt={text:Et("neutral-30"),"text-subtle":Et("neutral-40"),"text-subtler":Et("neutral-50"),"text-subtlest":Et("neutral-70"),"text-primary":Et("neutral-10"),"text-hover":Et("neutral-70"),"text-selected":Et("neutral-20"),"text-selected-hover":Et("neutral-10"),"text-disabled":Et("neutral-50"),"text-disabled-subtle":Et("neutral-60"),"text-disabled-subtlest":Et("neutral-80"),"text-selected-disabled":Et("neutral-40"),"text-success":Et("success-40"),"text-warning":Et("warning-40"),"text-error":Et("brand-30"),"text-info":Et("neutral-40"),"text-inverse":Et("neutral-100"),icon:Et("neutral-40"),"icon-subtle":Et("neutral-50"),"icon-strongest":Et("neutral-10"),"icon-primary":Et("neutral-10"),"icon-primary-subtle":Et("neutral-30"),"icon-primary-subtlest":Et("neutral-60"),"icon-hover":Et("neutral-70"),"icon-selected":Et("brand-20"),"icon-selected-hover":Et("brand-10"),"icon-disabled":Et("neutral-50"),"icon-disabled-subtle":Et("neutral-60"),"icon-selected-disabled":Et("neutral-40"),"icon-success":Et("success-40"),"icon-warning":Et("warning-60"),"icon-error":Et("brand-30"),"icon-error-strong":Et("brand-10"),"icon-info":Et("neutral-40"),"icon-inverse":Et("neutral-100"),"icon-primary-inverse":"#F9B371",border:Et("neutral-90"),"border-strong":Et("neutral-30"),"border-stronger":Et("neutral-20"),"border-primary":Et("neutral-40"),"border-primary-subtle":Et("neutral-60"),"border-hover":Et("neutral-80"),"border-hover-strong":Et("neutral-10"),"border-selected":Et("brand-20"),"border-selected-subtle":Et("neutral-40"),"border-selected-subtlest":Et("neutral-70"),"border-selected-hover":Et("neutral-10"),"border-focus":Et("neutral-20"),"border-focus-strong":Et("neutral-10"),"border-disabled":Et("neutral-90"),"border-selected-disabled":Et("neutral-80"),"border-success":Et("success-40"),"border-warning":Et("warning-60"),"border-error":Et("brand-30"),"border-error-focus":Et("brand-20"),"border-error-focus-strong":Et("brand-10"),"border-error-strong":Et("brand-20"),"border-info":Et("neutral-40"),bg:Et("neutral-100"),"bg-strong":Et("neutral-95"),"bg-stronger":Et("neutral-90"),"bg-strongest":Et("neutral-80"),"bg-hover":Et("brand-90"),"bg-hover-strong":Et("brand-80"),"bg-hover-subtle":Et("neutral-90"),"bg-hover-neutral":Et("neutral-90"),"bg-hover-neutral-strong":Et("neutral-90"),"bg-selected":Et("brand-100"),"bg-selected-hover":Et("brand-30"),"bg-selected-strong":Et("brand-50"),"bg-selected-stronger":Et("brand-40"),"bg-selected-strongest":Et("brand-20"),"bg-selected-strongest-hover":Et("brand-10"),"bg-disabled":Et("neutral-90"),"bg-selected-disabled":Et("neutral-90"),"bg-selected-stronger-disabled":Et("neutral-80"),"bg-success":Et("success-100"),"bg-success-hover":Et("success-95"),"bg-success-strong":Et("success-50"),"bg-success-strong-hover":Et("success-40"),"bg-warning":Et("warning-100"),"bg-warning-hover":Et("warning-95"),"bg-warning-strong":Et("warning-50"),"bg-warning-strong-hover":Et("warning-40"),"bg-info":Et("neutral-95"),"bg-info-hover":Et("info-95"),"bg-info-strong":Et("info-50"),"bg-info-strong-hover":Et("info-40"),"bg-error":Et("brand-100"),"bg-error-hover":Et("error-95"),"bg-error-strong":Et("error-50"),"bg-error-strong-hover":Et("error-40"),"bg-inverse":Et("neutral-40"),"bg-inverse-subtle":Et("neutral-60"),"bg-inverse-subtler":Et("neutral-70"),"bg-inverse-subtlest":Et("neutral-80"),"bg-inverse-hover":Et("neutral-30"),"bg-primary":Et("brand-20"),"bg-primary-subtle":Et("brand-60"),"bg-primary-subtler":Et("brand-80"),"bg-primary-subtlest":Et("brand-100"),"bg-available":Et("success-60"),"bg-primary-hover":Et("brand-10"),"bg-primary-subtlest-hover":Et("brand-80"),"bg-primary-subtlest-selected":Et("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Et("neutral-10"),"hyperlink-hover":Et("neutral-40"),"hyperlink-visited":Et("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Et("black"),"focus-ring-inverse":Et("white")},kt={text:Et("neutral-20"),"text-subtle":Et("neutral-30"),"text-subtler":Et("neutral-50"),"text-subtlest":Et("neutral-60"),"text-primary":Et("primary-50"),"text-hover":Et("primary-40"),"text-selected":Et("primary-50"),"text-selected-hover":Et("primary-40"),"text-disabled":Et("neutral-50"),"text-disabled-subtle":Et("neutral-60"),"text-disabled-subtlest":Et("neutral-80"),"text-selected-disabled":Et("neutral-20"),"text-success":Et("success-40"),"text-warning":Et("warning-40"),"text-error":Et("error-40"),"text-info":Et("info-40"),"text-inverse":Et("white"),icon:Et("neutral-50"),"icon-subtle":Et("neutral-60"),"icon-strongest":Et("neutral-20"),"icon-primary":Et("primary-50"),"icon-primary-subtle":Et("primary-60"),"icon-primary-subtlest":Et("primary-70"),"icon-hover":Et("primary-40"),"icon-selected":Et("primary-50"),"icon-selected-hover":Et("primary-40"),"icon-disabled":Et("neutral-50"),"icon-disabled-subtle":Et("neutral-60"),"icon-selected-disabled":Et("neutral-60"),"icon-success":Et("success-50"),"icon-warning":Et("warning-60"),"icon-error":Et("error-50"),"icon-error-strong":Et("error-40"),"icon-info":Et("info-50"),"icon-inverse":Et("white"),"icon-primary-inverse":Et("primary-inverse"),border:Et("neutral-90"),"border-strong":Et("neutral-70"),"border-stronger":Et("neutral-50"),"border-primary":Et("primary-50"),"border-primary-subtle":Et("primary-60"),"border-hover":Et("primary-90"),"border-hover-strong":Et("primary-60"),"border-selected":Et("primary-50"),"border-selected-subtle":Et("primary-70"),"border-selected-subtlest":Et("primary-90"),"border-selected-hover":Et("primary-40"),"border-focus":Et("primary-60"),"border-focus-strong":Et("primary-50"),"border-disabled":Et("neutral-90"),"border-selected-disabled":Et("neutral-70"),"border-success":Et("success-60"),"border-warning":Et("warning-60"),"border-error":Et("error-60"),"border-error-focus":Et("error-60"),"border-error-focus-strong":Et("error-40"),"border-error-strong":Et("error-40"),"border-info":Et("info-60"),bg:Et("white"),"bg-strong":Et("neutral-100"),"bg-stronger":Et("neutral-95"),"bg-strongest":Et("neutral-90"),"bg-hover":Et("primary-95"),"bg-hover-strong":Et("primary-90"),"bg-hover-subtle":Et("primary-100"),"bg-hover-neutral":Et("neutral-100"),"bg-hover-neutral-strong":Et("neutral-90"),"bg-selected":Et("primary-95"),"bg-selected-hover":Et("primary-90"),"bg-selected-strong":Et("primary-90"),"bg-selected-stronger":Et("primary-70"),"bg-selected-strongest":Et("primary-50"),"bg-selected-strongest-hover":Et("primary-40"),"bg-disabled":Et("neutral-95"),"bg-selected-disabled":Et("neutral-95"),"bg-selected-stronger-disabled":Et("neutral-70"),"bg-success":Et("success-100"),"bg-success-hover":Et("success-95"),"bg-success-strong":Et("success-50"),"bg-success-strong-hover":Et("success-40"),"bg-warning":Et("warning-100"),"bg-warning-hover":Et("warning-95"),"bg-warning-strong":Et("warning-50"),"bg-warning-strong-hover":Et("warning-40"),"bg-info":Et("info-100"),"bg-info-hover":Et("info-95"),"bg-info-strong":Et("info-50"),"bg-info-strong-hover":Et("info-40"),"bg-error":Et("error-100"),"bg-error-hover":Et("error-95"),"bg-error-strong":Et("error-50"),"bg-error-strong-hover":Et("error-40"),"bg-inverse":Et("neutral-20"),"bg-inverse-subtle":Et("neutral-30"),"bg-inverse-subtler":Et("neutral-50"),"bg-inverse-subtlest":Et("neutral-60"),"bg-inverse-hover":Et("neutral-40"),"bg-primary":Et("primary-50"),"bg-primary-subtle":Et("primary-60"),"bg-primary-subtler":Et("primary-95"),"bg-primary-subtlest":Et("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Et("primary-40"),"bg-primary-subtlest-hover":Et("primary-90"),"bg-primary-subtlest-selected":Et("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Et("primary-50"),"hyperlink-hover":Et("primary-40"),"hyperlink-visited":Et("primary-40"),"hyperlink-inverse":Et("primary-inverse"),"focus-ring":Et("black"),"focus-ring-inverse":Et("white")},Mt={text:Et("neutral-100"),"text-subtle":Et("neutral-80"),"text-subtler":Et("neutral-60"),"text-subtlest":Et("neutral-50"),"text-primary":Et("primary-60"),"text-hover":Et("primary-70"),"text-selected":Et("primary-60"),"text-selected-hover":Et("primary-70"),"text-disabled":Et("neutral-60"),"text-disabled-subtle":Et("neutral-50"),"text-disabled-subtlest":Et("neutral-30"),"text-selected-disabled":Et("neutral-90"),"text-success":Et("success-70"),"text-warning":Et("warning-70"),"text-error":Et("error-70"),"text-info":Et("info-70"),"text-inverse":Et("black"),icon:Et("neutral-60"),"icon-subtle":Et("neutral-50"),"icon-strongest":Et("neutral-90"),"icon-primary":Et("primary-60"),"icon-primary-subtle":Et("primary-50"),"icon-primary-subtlest":Et("primary-40"),"icon-hover":Et("primary-70"),"icon-selected":Et("primary-60"),"icon-selected-hover":Et("primary-70"),"icon-disabled":Et("neutral-60"),"icon-disabled-subtle":Et("neutral-50"),"icon-selected-disabled":Et("neutral-50"),"icon-success":Et("success-60"),"icon-warning":Et("warning-50"),"icon-error":Et("error-60"),"icon-error-strong":Et("error-70"),"icon-info":Et("info-60"),"icon-inverse":Et("black"),"icon-primary-inverse":Et("primary-inverse"),border:Et("neutral-20"),"border-strong":Et("neutral-40"),"border-stronger":Et("neutral-60"),"border-primary":Et("primary-60"),"border-primary-subtle":Et("primary-50"),"border-hover":Et("primary-20"),"border-hover-strong":Et("primary-50"),"border-selected":Et("primary-60"),"border-selected-subtle":Et("primary-40"),"border-selected-subtlest":Et("primary-20"),"border-selected-hover":Et("primary-70"),"border-focus":Et("primary-50"),"border-focus-strong":Et("primary-60"),"border-disabled":Et("neutral-20"),"border-selected-disabled":Et("neutral-40"),"border-success":Et("success-50"),"border-warning":Et("warning-50"),"border-error":Et("error-50"),"border-error-focus":Et("error-50"),"border-error-focus-strong":Et("error-70"),"border-error-strong":Et("error-70"),"border-info":Et("info-50"),bg:Et("black"),"bg-strong":Et("neutral-10"),"bg-stronger":Et("neutral-20"),"bg-strongest":Et("neutral-20"),"bg-hover":Et("primary-20"),"bg-hover-strong":Et("primary-20"),"bg-hover-subtle":Et("primary-10"),"bg-hover-neutral":Et("neutral-10"),"bg-hover-neutral-strong":Et("neutral-20"),"bg-selected":Et("primary-20"),"bg-selected-hover":Et("primary-20"),"bg-selected-strong":Et("primary-20"),"bg-selected-stronger":Et("primary-40"),"bg-selected-strongest":Et("primary-60"),"bg-selected-strongest-hover":Et("primary-70"),"bg-disabled":Et("neutral-20"),"bg-selected-disabled":Et("neutral-20"),"bg-selected-stronger-disabled":Et("neutral-40"),"bg-success":Et("success-10"),"bg-success-hover":Et("success-20"),"bg-success-strong":Et("success-60"),"bg-success-strong-hover":Et("success-70"),"bg-warning":Et("warning-10"),"bg-warning-hover":Et("warning-20"),"bg-warning-strong":Et("warning-60"),"bg-warning-strong-hover":Et("warning-70"),"bg-info":Et("info-10"),"bg-info-hover":Et("info-20"),"bg-info-strong":Et("info-60"),"bg-info-strong-hover":Et("info-70"),"bg-error":Et("error-10"),"bg-error-hover":Et("error-20"),"bg-error-strong":Et("error-60"),"bg-error-strong-hover":Et("error-70"),"bg-inverse":Et("neutral-90"),"bg-inverse-subtle":Et("neutral-80"),"bg-inverse-subtler":Et("neutral-60"),"bg-inverse-subtlest":Et("neutral-50"),"bg-inverse-hover":Et("neutral-70"),"bg-primary":Et("primary-60"),"bg-primary-subtle":Et("primary-50"),"bg-primary-subtler":Et("primary-20"),"bg-primary-subtlest":Et("primary-10"),"bg-available":"#185339","bg-primary-hover":Et("primary-70"),"bg-primary-subtlest-hover":Et("primary-20"),"bg-primary-subtlest-selected":Et("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Et("primary-60"),"hyperlink-hover":Et("primary-70"),"hyperlink-visited":Et("primary-70"),"hyperlink-inverse":Et("primary-inverse"),"focus-ring":Et("primary-60"),"focus-ring-inverse":Et("black")},Ot={collections:{lifesg:St,bookingsg:St,rbs:St,mylegacy:St,ccube:St,oneservice:St,pa:Bt,a11yplayground:kt},defaultValue:"lifesg"},zt={collections:{lifesg:At,bookingsg:At,rbs:At,mylegacy:At,ccube:At,oneservice:At,pa:At,a11yplayground:Mt},defaultValue:"lifesg"},Yt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=ct(a?zt:Ot,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?dt(i,e,s):i[e];return"function"==typeof l?l(r):l},Tt={text:Yt("text"),"text-subtle":Yt("text-subtle"),"text-subtler":Yt("text-subtler"),"text-subtlest":Yt("text-subtlest"),"text-primary":Yt("text-primary"),"text-hover":Yt("text-hover"),"text-selected":Yt("text-selected"),"text-selected-hover":Yt("text-selected-hover"),"text-disabled":Yt("text-disabled"),"text-disabled-subtle":Yt("text-disabled-subtle"),"text-disabled-subtlest":Yt("text-disabled-subtlest"),"text-selected-disabled":Yt("text-selected-disabled"),"text-success":Yt("text-success"),"text-warning":Yt("text-warning"),"text-error":Yt("text-error"),"text-info":Yt("text-info"),"text-inverse":Yt("text-inverse"),icon:Yt("icon"),"icon-subtle":Yt("icon-subtle"),"icon-strongest":Yt("icon-strongest"),"icon-primary":Yt("icon-primary"),"icon-primary-subtle":Yt("icon-primary-subtle"),"icon-primary-subtlest":Yt("icon-primary-subtlest"),"icon-hover":Yt("icon-hover"),"icon-selected":Yt("icon-selected"),"icon-selected-hover":Yt("icon-selected-hover"),"icon-disabled":Yt("icon-disabled"),"icon-disabled-subtle":Yt("icon-disabled-subtle"),"icon-selected-disabled":Yt("icon-selected-disabled"),"icon-success":Yt("icon-success"),"icon-warning":Yt("icon-warning"),"icon-error":Yt("icon-error"),"icon-error-strong":Yt("icon-error-strong"),"icon-info":Yt("icon-info"),"icon-inverse":Yt("icon-inverse"),"icon-primary-inverse":Yt("icon-primary-inverse"),border:Yt("border"),"border-strong":Yt("border-strong"),"border-stronger":Yt("border-stronger"),"border-primary":Yt("border-primary"),"border-primary-subtle":Yt("border-primary-subtle"),"border-hover":Yt("border-hover"),"border-hover-strong":Yt("border-hover-strong"),"border-selected":Yt("border-selected"),"border-selected-subtle":Yt("border-selected-subtle"),"border-selected-subtlest":Yt("border-selected-subtlest"),"border-selected-hover":Yt("border-selected-hover"),"border-focus":Yt("border-focus"),"border-focus-strong":Yt("border-focus-strong"),"border-disabled":Yt("border-disabled"),"border-selected-disabled":Yt("border-selected-disabled"),"border-success":Yt("border-success"),"border-warning":Yt("border-warning"),"border-error":Yt("border-error"),"border-error-focus":Yt("border-error-focus"),"border-error-focus-strong":Yt("border-error-focus-strong"),"border-error-strong":Yt("border-error-strong"),"border-info":Yt("border-info"),bg:Yt("bg"),"bg-strong":Yt("bg-strong"),"bg-stronger":Yt("bg-stronger"),"bg-strongest":Yt("bg-strongest"),"bg-hover":Yt("bg-hover"),"bg-hover-strong":Yt("bg-hover-strong"),"bg-hover-subtle":Yt("bg-hover-subtle"),"bg-hover-neutral":Yt("bg-hover-neutral"),"bg-hover-neutral-strong":Yt("bg-hover-neutral-strong"),"bg-selected":Yt("bg-selected"),"bg-selected-hover":Yt("bg-selected-hover"),"bg-selected-strong":Yt("bg-selected-strong"),"bg-selected-stronger":Yt("bg-selected-stronger"),"bg-selected-strongest":Yt("bg-selected-strongest"),"bg-selected-strongest-hover":Yt("bg-selected-strongest-hover"),"bg-disabled":Yt("bg-disabled"),"bg-selected-disabled":Yt("bg-selected-disabled"),"bg-selected-stronger-disabled":Yt("bg-selected-stronger-disabled"),"bg-success":Yt("bg-success"),"bg-success-hover":Yt("bg-success-hover"),"bg-success-strong":Yt("bg-success-strong"),"bg-success-strong-hover":Yt("bg-success-strong-hover"),"bg-warning":Yt("bg-warning"),"bg-warning-hover":Yt("bg-warning-hover"),"bg-warning-strong":Yt("bg-warning-strong"),"bg-warning-strong-hover":Yt("bg-warning-strong-hover"),"bg-info":Yt("bg-info"),"bg-info-hover":Yt("bg-info-hover"),"bg-info-strong":Yt("bg-info-strong"),"bg-info-strong-hover":Yt("bg-info-strong-hover"),"bg-error":Yt("bg-error"),"bg-error-hover":Yt("bg-error-hover"),"bg-error-strong":Yt("bg-error-strong"),"bg-error-strong-hover":Yt("bg-error-strong-hover"),"bg-inverse":Yt("bg-inverse"),"bg-inverse-subtle":Yt("bg-inverse-subtle"),"bg-inverse-subtler":Yt("bg-inverse-subtler"),"bg-inverse-subtlest":Yt("bg-inverse-subtlest"),"bg-inverse-hover":Yt("bg-inverse-hover"),"bg-primary":Yt("bg-primary"),"bg-primary-subtle":Yt("bg-primary-subtle"),"bg-primary-subtler":Yt("bg-primary-subtler"),"bg-primary-subtlest":Yt("bg-primary-subtlest"),"bg-available":Yt("bg-available"),"bg-primary-hover":Yt("bg-primary-hover"),"bg-primary-subtlest-hover":Yt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Yt("bg-primary-subtlest-selected"),"overlay-strong":Yt("overlay-strong"),"overlay-subtle":Yt("overlay-subtle"),hyperlink:Yt("hyperlink"),"hyperlink-hover":Yt("hyperlink-hover"),"hyperlink-visited":Yt("hyperlink-visited"),"hyperlink-inverse":Yt("hyperlink-inverse"),"focus-ring":Yt("focus-ring"),"focus-ring-inverse":Yt("focus-ring-inverse")},jt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:bt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Tt.border(r),u=bt.solid;return p`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:bt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Tt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},_t=e=>1===e.length&&"theme"in e[0],Rt=e=>(...r)=>t=>{const n=_t(r)?[]:r,a=_t(r)?r[0]:t,i=a.theme;return(0,ct(jt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Lt={solid:Rt("solid"),"dashed-default":Rt("dashed-default")},Ht={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},It=e=>r=>{var t;const n=r.theme,a=ct(Ht,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?dt(a,e,n.overrides.breakpoint):a[e],i},Wt={"xxs-min":It("xxs-min"),"xxs-max":It("xxs-max"),"xs-min":It("xs-min"),"xs-max":It("xs-max"),"sm-min":It("sm-min"),"sm-max":It("sm-max"),"md-min":It("md-min"),"md-max":It("md-max"),"lg-min":It("lg-min"),"lg-max":It("lg-max"),"xl-min":It("xl-min"),"xl-max":It("xl-max"),"xxl-min":It("xxl-min"),"xxs-column":It("xxs-column"),"xs-column":It("xs-column"),"sm-column":It("sm-column"),"md-column":It("md-column"),"lg-column":It("lg-column"),"xl-column":It("xl-column"),"xxl-column":It("xxl-column"),"xxs-gutter":It("xxs-gutter"),"xs-gutter":It("xs-gutter"),"sm-gutter":It("sm-gutter"),"md-gutter":It("md-gutter"),"lg-gutter":It("lg-gutter"),"xl-gutter":It("xl-gutter"),"xxl-gutter":It("xxl-gutter"),"xxs-margin":It("xxs-margin"),"xs-margin":It("xs-margin"),"sm-margin":It("sm-margin"),"md-margin":It("md-margin"),"lg-margin":It("lg-margin"),"xl-margin":It("xl-margin"),"xxl-margin":It("xxl-margin")},Nt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Wt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Pt={MaxWidth:Nt("max-width"),MinWidth:Nt("min-width")},Ut={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Vt=e=>r=>{var t;const n=r.theme,a=ct(Ut,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?dt(a,e,n.overrides.fontSpec):a[e]},Zt={"heading-size-xxl":Vt("heading-size-xxl"),"heading-size-xl":Vt("heading-size-xl"),"heading-size-lg":Vt("heading-size-lg"),"heading-size-md":Vt("heading-size-md"),"heading-size-sm":Vt("heading-size-sm"),"heading-size-xs":Vt("heading-size-xs"),"heading-lh-xxl":Vt("heading-lh-xxl"),"heading-lh-xl":Vt("heading-lh-xl"),"heading-lh-lg":Vt("heading-lh-lg"),"heading-lh-md":Vt("heading-lh-md"),"heading-lh-sm":Vt("heading-lh-sm"),"heading-lh-xs":Vt("heading-lh-xs"),"heading-ls-xxl":Vt("heading-ls-xxl"),"heading-ls-xl":Vt("heading-ls-xl"),"heading-ls-lg":Vt("heading-ls-lg"),"heading-ls-md":Vt("heading-ls-md"),"heading-ls-sm":Vt("heading-ls-sm"),"heading-ls-xs":Vt("heading-ls-xs"),"weight-light":Vt("weight-light"),"weight-regular":Vt("weight-regular"),"weight-semibold":Vt("weight-semibold"),"weight-bold":Vt("weight-bold"),"font-family":Vt("font-family"),"body-size-baseline":Vt("body-size-baseline"),"body-size-md":Vt("body-size-md"),"body-size-sm":Vt("body-size-sm"),"body-size-xs":Vt("body-size-xs"),"body-lh-baseline":Vt("body-lh-baseline"),"body-lh-md":Vt("body-lh-md"),"body-lh-sm":Vt("body-lh-sm"),"body-lh-xs":Vt("body-lh-xs"),"body-ls-baseline":Vt("body-ls-baseline"),"body-ls-md":Vt("body-ls-md"),"body-ls-sm":Vt("body-ls-sm"),"body-ls-xs":Vt("body-ls-xs"),"form-label-size":Vt("form-label-size"),"form-description-size":Vt("form-description-size"),"form-label-lh":Vt("form-label-lh"),"form-description-lh":Vt("form-description-lh"),"form-label-ls":Vt("form-label-ls"),"form-description-ls":Vt("form-description-ls")},Kt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return p`
        font-family: ${Vt("font-family")};
        font-size: ${Vt(e)};
        font-weight: ${Vt(r)};
        line-height: ${Vt(t)};
        letter-spacing: ${Vt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Jt=(e={})=>({"heading-xxl-light":Kt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Kt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Kt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Kt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Kt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Kt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Kt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Kt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Kt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Kt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Kt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Kt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Kt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Kt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Kt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Kt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Kt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Kt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Kt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Kt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Kt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Kt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Kt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Kt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Kt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Kt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Kt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Kt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Kt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Kt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Kt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Kt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Kt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Kt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Kt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Kt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Kt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Kt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Kt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Kt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Kt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Kt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Xt=Jt({disableLigatures:!0}),qt={collections:{default:Jt(),bookingsg:Xt,pa:Jt({disableLigatures:!0}),a11yplayground:Jt({disableLigatures:!0})},defaultValue:"default"},Gt=e=>r=>{var t;const n=r.theme,a=ct(qt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?dt(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Qt={"heading-xxl-light":Gt("heading-xxl-light"),"heading-xxl-regular":Gt("heading-xxl-regular"),"heading-xxl-semibold":Gt("heading-xxl-semibold"),"heading-xxl-bold":Gt("heading-xxl-bold"),"heading-xl-light":Gt("heading-xl-light"),"heading-xl-regular":Gt("heading-xl-regular"),"heading-xl-semibold":Gt("heading-xl-semibold"),"heading-xl-bold":Gt("heading-xl-bold"),"heading-lg-light":Gt("heading-lg-light"),"heading-lg-regular":Gt("heading-lg-regular"),"heading-lg-semibold":Gt("heading-lg-semibold"),"heading-lg-bold":Gt("heading-lg-bold"),"heading-md-light":Gt("heading-md-light"),"heading-md-regular":Gt("heading-md-regular"),"heading-md-semibold":Gt("heading-md-semibold"),"heading-md-bold":Gt("heading-md-bold"),"heading-sm-light":Gt("heading-sm-light"),"heading-sm-regular":Gt("heading-sm-regular"),"heading-sm-semibold":Gt("heading-sm-semibold"),"heading-sm-bold":Gt("heading-sm-bold"),"heading-xs-light":Gt("heading-xs-light"),"heading-xs-regular":Gt("heading-xs-regular"),"heading-xs-semibold":Gt("heading-xs-semibold"),"heading-xs-bold":Gt("heading-xs-bold"),"body-baseline-light":Gt("body-baseline-light"),"body-baseline-regular":Gt("body-baseline-regular"),"body-baseline-semibold":Gt("body-baseline-semibold"),"body-baseline-bold":Gt("body-baseline-bold"),"body-md-light":Gt("body-md-light"),"body-md-regular":Gt("body-md-regular"),"body-md-semibold":Gt("body-md-semibold"),"body-md-bold":Gt("body-md-bold"),"body-sm-light":Gt("body-sm-light"),"body-sm-regular":Gt("body-sm-regular"),"body-sm-semibold":Gt("body-sm-semibold"),"body-sm-bold":Gt("body-sm-bold"),"body-xs-light":Gt("body-xs-light"),"body-xs-regular":Gt("body-xs-regular"),"body-xs-semibold":Gt("body-xs-semibold"),"body-xs-bold":Gt("body-xs-bold"),"form-label":Gt("form-label"),"form-description":Gt("form-description")},en={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},rn=e=>r=>{var t;const n=r.theme,a=ct(en,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?dt(a,e,n.overrides.motion):a[e]},tn={"duration-150":rn("duration-150"),"duration-250":rn("duration-250"),"duration-350":rn("duration-350"),"duration-500":rn("duration-500"),"duration-800":rn("duration-800"),"duration-1000":rn("duration-1000"),"ease-default":rn("ease-default"),"ease-standard":rn("ease-standard"),"ease-entrance":rn("ease-entrance"),"ease-exit":rn("ease-exit")},nn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},an=e=>r=>{var t;const n=r.theme,a=ct(nn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${dt(a,e,n.overrides.radius)}px`:`${a[e]}px`},on={none:an("none"),xs:an("xs"),sm:an("sm"),md:an("md"),lg:an("lg"),full:an("full")},sn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},ln=e=>r=>{var t;const n=r.theme,a=ct(sn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${dt(a,e,n.overrides.spacing)}px`:`${a[e]}px`},dn={"spacing-0":ln("spacing-0"),"spacing-4":ln("spacing-4"),"spacing-8":ln("spacing-8"),"spacing-12":ln("spacing-12"),"spacing-16":ln("spacing-16"),"spacing-20":ln("spacing-20"),"spacing-24":ln("spacing-24"),"spacing-32":ln("spacing-32"),"spacing-40":ln("spacing-40"),"spacing-48":ln("spacing-48"),"spacing-64":ln("spacing-64"),"spacing-72":ln("spacing-72"),"layout-xs":ln("layout-xs"),"layout-sm":ln("layout-sm"),"layout-md":ln("layout-md"),"layout-lg":ln("layout-lg"),"layout-xl":ln("layout-xl"),"layout-xxl":ln("layout-xxl"),"layout-xxxl":ln("layout-xxxl")},cn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),un=Object.assign(Object.assign({},Tt),{Primitive:Ct}),gn=Object.assign(Object.assign({},Qt),{Spec:Zt}),bn=tn,hn=Object.assign(Object.assign({},bt),{Util:Lt}),mn=dn,yn=on,fn=Wt,pn=Pt,vn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},xn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},wn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Dn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Fn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},$n={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},En={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Cn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"};Object.assign(Object.assign({},vn),{light:cn(vn,"light"),dark:cn(vn,"dark")}),Object.assign(Object.assign({},xn),{light:cn(xn,"light"),dark:cn(xn,"dark")}),Object.assign(Object.assign({},wn),{light:cn(wn,"light"),dark:cn(wn,"dark")}),Object.assign(Object.assign({},Dn),{light:cn(Dn,"light"),dark:cn(Dn,"dark")}),Object.assign(Object.assign({},Fn),{light:cn(Fn,"light"),dark:cn(Fn,"dark")}),Object.assign(Object.assign({},$n),{light:cn($n,"light"),dark:cn($n,"dark")}),Object.assign(Object.assign({},En),{light:cn(En,"light"),dark:cn(En,"dark")}),Object.assign(Object.assign({},Cn),{light:cn(Cn,"light"),dark:cn(Cn,"dark")});const Sn=e=>"small"===e?2.5:3;f.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Sn(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const An=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${mn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Sn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${yn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${un["border-focus"]};
    }
`,Bn=f.button`
    ${An}
    cursor: pointer;
`;f.div`
    ${An}
`;const kn=v`
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
    border: ${hn["width-010"]} ${hn.solid} ${un.border};
    border-radius: ${yn.sm};
    background: ${un.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${un["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${un["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${kn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${un["bg-disabled"]};

                ${Bn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${un.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${Bn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${un["border-error"]};

                :focus-within {
                    border-color: ${un["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${un["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${bn["duration-250"]} ${bn["ease-default"]};
    margin-left: ${mn["spacing-16"]};
`,f(y)`
    color: ${un.icon};
`,f.div`
    height: 1px;
    background: ${un.border};
    margin: 0 ${mn["spacing-8"]};
`,f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${un["text-disabled"]};
            `}}
`;f(f.div`
    ${e=>"small"===e.$variant?gn["body-md-regular"]:gn["body-baseline-regular"]}
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
    color: ${un["text-subtler"]};
`;var Mn=function(e,r){return Mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Mn(e,r)};var On=function(){return On=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},On.apply(this,arguments)};var zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Yn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Tn="object"==typeof zn&&zn&&zn.Object===Object&&zn,jn="object"==typeof self&&self&&self.Object===Object&&self,_n=Tn||jn||Function("return this")(),Rn=_n,Ln=function(){return Rn.Date.now()},Hn=/\s/;var In=function(e){for(var r=e.length;r--&&Hn.test(e.charAt(r)););return r},Wn=/^\s+/;var Nn=function(e){return e?e.slice(0,In(e)+1).replace(Wn,""):e},Pn=_n.Symbol,Un=Pn,Vn=Object.prototype,Zn=Vn.hasOwnProperty,Kn=Vn.toString,Jn=Un?Un.toStringTag:void 0;var Xn=function(e){var r=Zn.call(e,Jn),t=e[Jn];try{e[Jn]=void 0;var n=!0}catch(e){}var a=Kn.call(e);return n&&(r?e[Jn]=t:delete e[Jn]),a},qn=Object.prototype.toString;var Gn=Xn,Qn=function(e){return qn.call(e)},ea=Pn?Pn.toStringTag:void 0;var ra=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ea&&ea in Object(e)?Gn(e):Qn(e)},ta=function(e){return null!=e&&"object"==typeof e};var na=Nn,aa=Yn,ia=function(e){return"symbol"==typeof e||ta(e)&&"[object Symbol]"==ra(e)},oa=/^[-+]0x[0-9a-f]+$/i,sa=/^0b[01]+$/i,la=/^0o[0-7]+$/i,da=parseInt;var ca=Yn,ua=Ln,ga=function(e){if("number"==typeof e)return e;if(ia(e))return NaN;if(aa(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=aa(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=na(e);var t=sa.test(e);return t||la.test(e)?da(e.slice(2),t?2:8):oa.test(e)?NaN:+e},ba=Math.max,ha=Math.min;var ma=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=ua();if(h(e))return y(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?ha(t,i-(e-d)):t}(e))}function y(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function f(){var e=ua(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=ga(r)||0,ca(t)&&(c=!!t.leading,i=(u="maxWait"in t)?ba(ga(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},f.flush=function(){return void 0===s?o:y(ua())},f},ya=ma,fa=Yn;var pa=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return fa(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),ya(e,r,{leading:n,maxWait:r,trailing:a})},va=function(e,r,t,n){switch(r){case"debounce":return ma(e,t,n);case"throttle":return pa(e,t,n);default:return e}},xa=function(e){return"function"==typeof e},wa=function(){return"undefined"==typeof window},Da=function(e){return e instanceof Element||e instanceof HTMLDocument},Fa=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&xa(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!wa()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(wa())return null;if(r)return document.querySelector(r);if(n&&Da(n))return n;if(t.targetRef&&Da(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Fa(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!wa()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return xa(r)?"renderProp":xa(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,wa()||(t.resizeHandler=va(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Mn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){wa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var $a,Ea=wa()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}($a||($a={}));const Ca=f.div`
    display: flex;
    flex-direction: column;
`,Sa=e=>"right"===e?"bottom-end":"bottom-start",Aa=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:m=0,alignment:y="left",fitAvailableHeight:f,rootNode:p})=>{var v;const T=x(),j=fn["sm-max"]({theme:T}),_=i(null),R=i(null),{width:L=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,y=i(t),f=i(null),p=null!=b?b:f,v=i(),x=o({width:void 0,height:void 0}),w=x[0],D=x[1];return Ea((function(){if(!wa()){var e=Fa(m,D,c,g);v.current=va((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!y.current&&!wa()&&e({width:n,height:a}),y.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),On({ref:p},w)}({targetRef:_,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<j;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:I,floatingStyles:W,context:N}=D({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:F,placement:Sa(y),middleware:[$(m),E(),C({limiter:S()}),A({apply({availableHeight:e}){R.current&&Object.assign(R.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),H]}),P=(()=>{const[e,r]=o(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on($a.Change,e),t.events.emit($a.Ready),()=>t.events.off($a.Change,e)}),[t]),e})(),{isMounted:U,styles:V}=B(N,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=k(N,{enabled:n,toggle:h}),K=M(N,{enabled:n}),{getReferenceProps:J,getFloatingProps:X}=O([Z,K]);return e(r,{children:[t("div",Object.assign({ref:e=>{_.current=e,I.setReference(e)}},J(),{children:c()})),U&&t(z,{root:p,children:t(Y,{context:N,modal:!1,initialFocus:R,returnFocus:!1,children:t("div",Object.assign({ref:I.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=b?b:P)&&void 0!==v?v:50})},X(),{children:t(Ca,{ref:R,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:g({elementWidth:L})})}))})})]})},Ba=f.div`
    --vertical-inset: ${mn["spacing-24"]};
    --horizontal-inset: ${mn["spacing-20"]};
    --header-bottom-spacing: ${mn["spacing-4"]};

    border: ${hn["width-010"]} ${hn.solid} ${un.border};
    border-radius: ${yn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${pn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var ka={exports:{}};ka.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),y=0;a&&!i||(y=i>0?i-1:b.getMonth());var f=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,h,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,h,f,p,v,x)):new Date(m,y,h,f,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ma=H(ka.exports),Oa={exports:{}};Oa.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var za=H(Oa.exports),Ya={exports:{}};Ya.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Ta=H(Ya.exports),ja={exports:{}};ja.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var _a,Ra,La,Ha=H(ja.exports),Ia={exports:{}},Wa=H(Ia.exports=(_a={year:0,month:1,day:2,hour:3,minute:4,second:5},Ra={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Ra[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ra[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=_a[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));W.extend(za),W.extend(Ha),W.extend(Ta),W.extend(Ma),W.extend(Wa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=W(r).startOf("week");return Na(t).map((e=>Pa(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Pa(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(W(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+W(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=W(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?W(n):void 0,a?W(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(La||(La={}));const Na=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Pa=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ua=[1,3,5,7,8,10,12],Va=[4,6,9,11];var Za,Ka,Ja,Xa;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Ua.includes(i)?Math.min(a,31).toString():Va.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=W(e,t);return W(r,t).diff(n,"minute")},e.toDayjs=e=>e?W(e):W(),e.addMinutesToTime=(e,r,t="HH:mm")=>W(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>W(e).isSame(W(r),t)}(Za||(Za={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!W(e).isBefore(n,"day"))||!(!a||!W(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(W(e).isValid())return e}return""}}(Ka||(Ka={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ja||(Ja={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Xa||(Xa={}));const qa=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ga=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Qa=f.div`
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
    animation: ${Ga} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ei=f(Qa)`
    animation-delay: -0.45s;
`,ri=f(Qa)`
    animation-delay: -0.3s;
`,ti=f(Qa)`
    animation-delay: -0.15s;
`,ni={collections:{default:{Button:{"button-radius":on.sm,"button-default-colour-bg":Tt["bg-primary"],"button-default-colour-bg-hover":Tt["bg-primary-hover"],"button-default-colour-text":Tt["text-inverse"],"button-secondary-colour-border":Tt["border-primary"],"button-secondary-colour-text":Tt["text-primary"],"button-light-colour-text":Tt["text-primary"],"button-link-colour-text":Tt["text-primary"]}},pa:{Button:{"button-radius":on.full,"button-default-colour-bg":Tt["bg-primary"],"button-default-colour-bg-hover":Tt["bg-primary-hover"],"button-default-colour-text":Tt["text-inverse"],"button-secondary-colour-border":Tt["border-primary"],"button-secondary-colour-text":Tt["text-primary"],"button-light-colour-text":Tt["text-primary"],"button-link-colour-text":Tt["text-primary"]}}},defaultValue:"default"},ai=(e,r)=>t=>{var n,a;const i=t.theme,o=ct(ni,null==i?void 0:i.componentScheme);return ii((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},ii=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},oi=ai("Button","button-radius"),si=ai("Button","button-default-colour-bg"),li=ai("Button","button-default-colour-bg-hover"),di=ai("Button","button-default-colour-text"),ci=ai("Button","button-secondary-colour-border"),ui=ai("Button","button-secondary-colour-text"),gi=ai("Button","button-light-colour-text"),bi=ai("Button","button-link-colour-text"),hi=f.button`
    padding: ${mn["spacing-8"]} ${mn["spacing-16"]};
    min-width: 4rem;
    border: ${hn["width-010"]} ${hn.solid} transparent;
    transition: all ${bn["duration-250"]} ${bn["ease-default"]};
    border-radius: ${oi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${un.Primitive.white};
                    border-color: ${e.$buttonIsDanger?un["border-error-strong"]:ci};

                    color: ${e.$buttonIsDanger?un["text-error"]:ui};

                    &:hover,
                    &:active {
                        background-color: ${un["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${un.bg};
                    border-color: ${un.border};

                    color: ${e.$buttonIsDanger?un["text-error"]:gi};

                    &:hover,
                    &:active {
                        background-color: ${un["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?un["text-error"]:bi};
                    &:hover,
                    &:active {
                        background-color: ${un["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${un["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${un["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?un["bg-error-strong"]:si};};

                    ${pn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${di}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?un["bg-error-strong-hover"]:li}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${gn["body-md-semibold"]}

                    ${pn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${gn["heading-md-semibold"]}

                    ${pn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${gn["heading-xs-semibold"]}

                    ${pn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,mi=f((({color:r,className:n,size:a})=>e(qa,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(Qa,{id:"inner1"}),t(ei,{id:"inner2"}),t(ri,{id:"inner3"}),t(ti,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,yi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(hi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(mi,{}),t("span",{children:a})]}))};yi.displayName="Button.Default";const fi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(hi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(mi,{}),t("span",{children:a})]}))};fi.displayName="Button.Small";const pi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(hi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(mi,{}),t("span",{children:a})]}))};pi.displayName="Button.Large";const vi={Default:a.forwardRef(yi),Small:a.forwardRef(fi),Large:a.forwardRef(pi)},xi=f.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${mn["spacing-24"]};
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
                background-color: ${un["bg-hover-neutral"]};
            `}
    }
`,wi=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return t(xi,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Di=p`
    color: ${un.icon};
    height: 1rem;
    width: 1rem;
`,Fi=f(j)`
    ${Di}
`,$i=f(_)`
    ${Di}
`,Ei=f(y)`
    ${Di}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ci=f.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Si=f.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ai=f.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Bi=f.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${un.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,ki=f.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Mi=f.div`
    display: flex;
`,Oi=f.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${Ei} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,zi=f.span`
    ${gn["body-md-regular"]}
    color: ${un.text};
`,Yi=f.div`
    display: flex;
`,Ti=f(wi)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ji=f.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,_i=f(vi.Small)`
    flex: 1;
`,Ri=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Li=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${yn.md};
    margin: 0 0.5rem;
    transition: ${bn["duration-150"]} ${bn["ease-default"]};

    // default styles
    ${gn["body-md-regular"]}
    border-radius: ${yn.md};
    border: ${hn["width-010"]} ${hn.solid} transparent;
    background-clip: border-box;
    color: ${un.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${un["bg-selected"]};
                border-color: ${un["border-selected"]};
                color: ${un["text-selected"]};
                font-weight: ${gn.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${un["bg-selected-hover"]};
                        border-color: ${un["border-selected-hover"]};
                        color: ${un["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${un["text-primary"]};
                font-weight: ${gn.Spec["weight-semibold"]};
            `:t?p`
                color: ${un["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${un["bg-selected-hover"]};
                    border-color: ${un["border-selected-hover"]};
                    color: ${un["text-selected-hover"]};
                    font-weight: ${gn.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${un["bg-hover"]};
                color: ${un["text-hover"]};
                font-weight: ${gn.Spec["weight-semibold"]};
            }
        `}}
`,Hi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:h})=>{const m=b((()=>La.generateMonths(W(e))),[e]),y=i(new Array(m.length).fill(null)),[f,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==f&&(null===(e=y.current[f])||void 0===e||e.focus())}),[f,m]);const v=(e,r)=>{r||h(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const r=e.format("MMMM"),t=(n=e,!La.isWithinRange(n,d?W(d):void 0,c?W(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":W().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(Ri,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=w(e);return t(Li,{ref:e=>y.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},Ii=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Wi=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${bn["duration-150"]} ${bn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${gn["body-md-regular"]}
    border-radius: ${yn.md};
    border: ${hn["width-010"]} ${hn.solid} transparent;
    background-clip: border-box;
    color: ${un.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${un["bg-selected"]};
                border-color: ${un["border-selected"]};
                color: ${un["text-selected"]};
                font-weight: ${gn.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${un["bg-selected-hover"]};
                        border-color: ${un["border-selected-hover"]};
                        color: ${un["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${un["text-primary"]};
                font-weight: ${gn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${un["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${un["bg-selected-hover"]};
                    border-color: ${un["border-selected-hover"]};
                    color: ${un["text-selected-hover"]};
                    font-weight: ${gn.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${un["bg-hover"]};
                color: ${un["text-hover"]};
                font-weight: ${gn.Spec["weight-semibold"]};
            }
        `}}
`,Ni=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:h,setCalendarDate:m})=>{const y=b((()=>La.generateDecadeOfYears(W(e))),[e]),f=i(new Array(y.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=y.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,y]);const x=(e,r)=>{r||h(e)},w=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},D=e=>{const r=y.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!La.isWithinRange(i,d?W(d):void 0,c?W(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":W().isSame(e,"year")?"current-year":"default",l=s.year()>=y[0].year()&&s.year()<=y[y.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||w(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return y.length?t(Ii,{onBlur:()=>{v(null)},children:y.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=D(e);return t(Wi,{ref:e=>{f.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Pi=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:m,selectWithinRange:y,dynamicHeight:f=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:D,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:A,getYearHeaderLabel:B,isFocusable:k=!1}=n,M=R(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[O,z]=o(Za.toDayjs(l)),[Y,T]=o(Za.toDayjs(l)),[j,_]=o("default"),L=i(null),H=i(null),I=i(null),N=i(null);h(a,(()=>({defaultView(){_("default")},resetView(){const e=Za.toDayjs(l);z(e),T(e),_("default")},setCalendarDate(e){const r=Za.toDayjs(e);z(r),T(r)}}))),u((()=>{const e=Za.toDayjs(l);z(e),T(e)}),[l]),u((()=>{G(Y)}),[Y]);const P=()=>{var e;"month-options"!==j?(_("month-options"),null===(e=I.current)||void 0===e||e.focus()):(_("default"),z(Y))},U=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P(),null===(r=N.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?O.subtract(1,"month"):O.add(1,"month");if(!La.isWithinRange(r,d?W(d):void 0,c?W(c):void 0,"month"))return;z(r),"default"===j&&T(r)}},V=()=>{"default"!==j?(_("default"),z(Y)):_("year-options")},Z=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===j?"ArrowUp"===e.key?O.subtract(10,"year"):O.add(10,"year"):"ArrowUp"===e.key?O.subtract(1,"year"):O.add(1,"year"),!La.isWithinRange(r,d?W(d):void 0,c?W(c):void 0,"year"))return;z(r),"default"===j&&T(r)}},K=()=>{var e;null===(e=I.current)||void 0===e||e.focus();const r=$?$(O):O.subtract(1,"month");switch(j){case"default":T(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=I.current)||void 0===e||e.focus();const r=E?E(O):O.add(1,"month");switch(j){case"default":T(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},X=e=>{z(e),T(e),x||_("default")},q=()=>{const e=Za.toDayjs(l);z(e),T(e),"default"===j?Q("reset"):_("default")},G=e=>{v&&v(e)},Q=e=>{D&&D(e)},ee=()=>{if(!d||p)return!1;const e=W(d);return"month-options"===j?!La.isPreviousYearWithinRange(O,e):"year-options"===j?!La.isPreviousDecadeWithinRange(O,e):C?C(O):!La.isPreviousMonthWithinRange(O,e)},re=()=>{if(!c||p)return!1;const e=W(c);return"month-options"===j?!La.isNextYearWithinRange(O,e):"year-options"===j?!La.isNextDecadeWithinRange(O,e):S?S(O):!La.isNextMonthWithinRange(O,e)},te=()=>{const n=A?A(O):O.format("MMM"),a=W(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=La.getStartEndDecade(O);return`${e} to ${r}`}return B?B(O):O.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Oi,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:P,onKeyDown:U,tabIndex:k?0:-1,children:[t(zi,{children:n}),t(Ei,{})]}),e(Oi,{ref:N,"aria-label":o[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:V,onKeyDown:Z,tabIndex:k?0:-1,children:[t(zi,{children:i}),t(Ei,{})]})]})},ne=()=>{switch(j){case"month-options":return t(Hi,{calendarDate:O,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:!!y,onMonthSelect:X,allowDisabledSelection:p});case"year-options":return t(Ni,{setCalendarDate:z,calendarDate:O,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:!!y,onYearSelect:X,allowDisabledSelection:p});default:return null}};return e(Ci,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},M,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return e(ki,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Mi,{children:te()}),e(Yi,{children:[t(Ti,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:k?0:-1,children:t(Fi,{})}),t(Ti,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:k?0:-1,children:t($i,{})})]})]})})(),t(Si,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:j}):s;if(f)return e(r,{children:["default"===j&&n,ne()]});{const a="default"===j;return e(r,{children:[t(Ai,{inert:a?void 0:"",children:n}),t(Bi,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return e(ji,{children:[t(_i,{ref:H,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),t(_i,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{r||(z(Y),"default"===j?Q("confirmed"):_("default"))},disabled:r,children:"Done"})]})})()]}))})),Ui=f.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Vi=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${gn["body-sm-semibold"]};
    color: ${un.text};
`,Zi=f.div`
    grid-column: 1 / -1;
    display: flex;
`,Ki=e=>{let r=un.bg,t="transparent";switch(e.$type){case"hover-subtle":r=un["bg-hover"],t=un["bg-hover"];break;case"hover":r=un["bg-hover-strong"],t=un["bg-hover-strong"];break;case"hover-outline":r=un["bg-hover-subtle"],t=un["border-hover"];break;case"selected-outline":r=un["bg-selected"],t=un["border-selected"];break;case"selected-outline-subtle":r=un["bg-selected"],t=un["border-selected-subtle"];break;case"selected-hover":r=un["bg-selected-hover"];break;case"selected-hover-outline":r=un["bg-selected-hover"],t=un["border-selected-hover"]}return{color:r,borderColor:t}},Ji=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Xi=f.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${bn["duration-150"]} ${bn["ease-default"]};
    border: ${hn["width-010"]} ${hn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Ki(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,qi=f(Xi)`
    left: 0;
`,Gi=f(Xi)`
    right: 0;
`,Qi=f.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${bn["duration-150"]} ${bn["ease-default"]};

    border: ${hn["width-010"]} ${hn.solid} transparent;
    border-radius: ${yn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Ki(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,eo=f(Qi)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,ro=f(Qi)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,to=f.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,no=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${gn["body-md-regular"]}
    transition: ${bn["duration-150"]} ${bn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?p`
                    visibility: hidden;
                `:p`
                color: ${un["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${gn.Spec["weight-semibold"]};
                    color: ${un["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${gn.Spec["weight-semibold"]};
                    color: ${un["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${gn.Spec["weight-semibold"]};
                    color: ${un["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${gn.Spec["weight-semibold"]};
                    color: ${un["text-hover"]};
                `;case"unavailable":return p`
                    color: ${un["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${un.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ao=f.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,io=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:y,onKeyDown:f,tabIndex:p=-1,role:v="button",focusDate:x})=>{const w=W().isSame(g,"day"),D=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Ji,{children:[t(qi,{$type:r}),t(eo,{$type:a}),t(Gi,{$type:n}),t(ro,{$type:o}),t(to,{$interactive:d,children:e(no,{ref:$,tabIndex:p,role:v,"aria-label":D,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{f&&f(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{y&&y(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&w&&t(ao,{$disabled:l})]})})]})},oo=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:y,setFocusCell:f,tabIndex:p=-1})=>{const v=La.isDisabledDay(e,c,l,d),x=!v||u,w=()=>{h(e,!x)},D=()=>{const e=W(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{y(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&w());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),f(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:W(s),tabIndex:p};return t(io,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(W().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=D();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};W.extend(za);const so=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:h,maxDate:y,allowDisabledSelection:f,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const w=m((()=>s&&W(s).isSame(r,"month")?W(s):l&&W(l).isSame(r,"month")?W(l):W().isSame(r,"month")?W():h&&r.isSame(W(h),"month")?W(h):W(r).startOf("month")),[s,r,l,h]),D=e=>{const t=W(e);if(La.isWithinRange(t,h?W(h):void 0,y?W(y):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=b((()=>La.generateDays(r)),[r]),$=b((()=>w()),[w]),[E,C]=o(""),[S,A]=o(""),B=(e,r)=>{r&&!f||d(e)},k=(e,r)=>{r&&!f||(A(e),c(e))},M=e=>{A(e),c(e)},O=()=>{A(""),c("")};return e(Ui,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),A(""),c(""))},children:[F[0].map(((e,r)=>t(Vi,{"aria-hidden":!0,children:W(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(Zi,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:e.map(((e,i)=>t(oo,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:h,maxDate:y,disabledDates:a,allowDisabledSelection:f,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:B,onHover:k,onFocus:M,setFocusCell:D,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},lo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=La.isDisabledDay(e,s,i,o),b=!g||l,{start:h,end:m}=n?La.getFixedRangeStartEnd(Za.toDayjs(n),d):{start:void 0,end:void 0},{start:y,end:f}=a?La.getFixedRangeStartEnd(Za.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(h,m,"day","[]"),v=!!a&&e.isBetween(y,f,"day","[]"),x=p&&e.isSame(h,"day")||v&&e.isSame(y,"day"),w=p&&e.isSame(m,"day")||v&&e.isSame(f,"day"),D=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(io,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&D(r,"hover",t===y,t===f),p&&D(r,"selected-outline",t===h,t===m),p&&v&&(D(r,"selected-hover-outline",x,w),t===y&&t!==h&&(r.circleLeft="selected-hover")),r})()))},co=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=b((()=>La.generateDays(r)),[r]),[h,m]=o(""),y=(e,r)=>{r&&!c||(i(e),e&&!W(e).isSame(e,"month")&&m(""))},f=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ui,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Vi,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Zi,{onMouseLeave:p,children:e.map(((e,i)=>t(lo,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:y,onHover:f,numberOfDays:u},`day-${i}`)))},i)))]})},uo=f.div`
    width: 100%;
    background: ${un.bg};
`,go=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=La.isDisabledDay(e,s,i,o),b=!g||l,h={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(io,Object.assign({},h,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};W.extend(za);const bo=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=b((()=>La.generateDays(r)),[r]),[h,m]=o(""),y=(e,r)=>{r&&!c||i(e)},f=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ui,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Vi,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Zi,{onMouseLeave:p,children:e.map(((e,i)=>t(go,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:y,onHover:f},`day-${i}`)))},i)))]})},ho=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=La.isDisabledDay(e,s,i,o),g=!u||l,{start:b,end:h}=La.getWeekStartEnd(Za.toDayjs(n)),{start:m,end:y}=La.getWeekStartEnd(Za.toDayjs(a)),f=n&&e.isBetween(b,h,"day","[]"),p=a&&e.isBetween(m,y,"day","[]"),v=f&&e.isSame(b)||p&&e.isSame(m),x=f&&e.isSame(h)||p&&e.isSame(y),w={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(io,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return f&&p?(r="selected-hover-outline",t="selected-hover"):f?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},mo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=b((()=>La.generateDays(r)),[r]),[g,h]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!W(e).isSame(t,"month")&&h("")},y=(e,r)=>{r&&!c||(h(e),s(e))},f=()=>{h(""),s("")};return e(Ui,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(Vi,{children:W(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Zi,{onMouseLeave:f,children:e.map(((e,i)=>t(ho,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:y},`day-${i}`)))},i)))]})},yo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:m,selectWithinRange:y=!0,initialCalendarDate:f,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const D=i(null),F=i(void 0);h(w,(()=>({reset(){var e;null===(e=D.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=D.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=D.current)||void 0===r||r.setCalendarDate(t),C(t)},E=e=>{S(e)},C=e=>{n&&n(e)},S=e=>{a&&a(e)},A=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(uo,{children:t(Pi,{ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:y,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=D.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),A(e)),F.current=e},initialCalendarDate:f,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(mo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:m,onSelect:$,onHover:E});case"fixed-range":return t(co,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:m,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(bo,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(so,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:y,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=D.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),fo=a.forwardRef(((e,r)=>{var{width:n}=e,a=R(e,["width"]);return t(Ba,{$width:n,"data-testid":"calendar-dropdown",children:t(yo,Object.assign({ref:r},a))})})),po=f.button`
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
                    background-color: ${un.bg};
                    border: ${hn["width-010"]} ${hn.solid}
                        ${un["border-primary"]};
                    color: ${un["text-primary"]};

                    :hover {
                        background-color: ${un["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${un.bg};
                    border: ${hn["width-010"]} ${hn.solid}
                        ${un.border};
                    color: ${un["text-primary"]};

                    :hover {
                        background-color: ${un["bg-hover-neutral"]};
                    }
                `;default:return p`
                    background-color: ${un["bg-primary"]};
                    border: none;
                    color: ${un["text-inverse"]};

                    :hover {
                        background-color: ${un["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${un["bg-disabled"]};
        border: ${hn["width-010"]} ${hn.solid}
            ${un["border-disabled"]};
        color: ${un["text-disabled"]};
        cursor: not-allowed;
    }
`,vo=f(a.forwardRef(((e,r)=>{var{"data-testid":n,styleType:a="primary",children:i,sizeType:o="default",type:s="button"}=e,l=R(e,["data-testid","styleType","children","sizeType","type"]);return t(po,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:a},l,{children:i}))})))`
    margin: ${mn["spacing-8"]};
`,xo=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${un["bg-strong"]};
    border-radius: ${yn.sm};
`,wo=f(vi.Default)`
    color: ${e=>e.$enableDateClick?un["text-primary"]:un.text};
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
`,Do=r=>{var{selectedDate:n,minDate:a,maxDate:i,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:d,onLeftArrowClick:c,onRightArrowClick:u,onCalendarDateSelect:g,dropdownRootNode:b}=r,h=R(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const m=Za.toDayjs(n),y=Za.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),f=Za.isSame(n,W())&&d?"Today":m.format(l?"ddd":"dddd"),[p,v]=o(!1),x=e=>{g&&g(e),v(!p)},w=()=>{v(!1),c(n)},D=()=>{v(!1),u(n)};return t(Aa,{enabled:!s,isOpen:p,renderElement:()=>e(xo,Object.assign({},h,{children:[t(vo,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!a&&(La.isDisabledDay(m,void 0,a)||Za.isSame(m,a)),"aria-label":"Previous day",onClick:w,styleType:"light",sizeType:"small",children:t(Fi,{})}),t(wo,{onClick:()=>!!g&&!s&&v(!p),$enableDateClick:!!g&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!g||s,children:`${y}, ${f}`}),t(vo,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!i&&(La.isDisabledDay(m,void 0,void 0,i)||Za.isSame(m,i)),"aria-label":"Next day",onClick:D,styleType:"light",sizeType:"small",children:t($i,{})})]})),renderDropdown:({elementWidth:e})=>t(fo,{variant:"single",initialCalendarDate:n,value:n,minDate:a,maxDate:i,onSelect:x,width:e}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8,rootNode:b})};export{Do as DateNavigator};
//# sourceMappingURL=index.js.map
