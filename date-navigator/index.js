import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useMemo as h,useImperativeHandle as b,useCallback as m}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import y,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as D,useFloating as w,autoUpdate as F,offset as $,flip as E,shift as C,limitShift as B,size as A,useTransitionStyles as S,useClick as k,useDismiss as M,useInteractions as z,FloatingPortal as O,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as R}from"@lifesg/react-icons/chevron-right";function _(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}};I.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?y-x:y+(6-x),f);case s:case g:return b(p+"Hours",0);case o:return b(p+"Minutes",1);case i:return b(p+"Seconds",2);case a:return b(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,h=this;n=Number(n);var b=E.p(c),m=function(e){var r=$(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===s)return m(1);if(b===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[b]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(i,o,!0);case"A":return b(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,h){var b,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-p)/6048e5;break;case s:b=(v-p)/864e5;break;case o:b=v/t;break;case i:b=v/r;break;case a:b=v/e;break;default:b=v}return h?b:E.a(b)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),B=C.prototype;return $.prototype=B,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var W=H(I.exports),N=Array.isArray,P="object"==typeof L&&L&&L.Object===Object&&L,U="object"==typeof self&&self&&self.Object===Object&&self,V=P||U||Function("return this")(),Z=V.Symbol,K=Z,J=Object.prototype,X=J.hasOwnProperty,q=J.toString,G=K?K.toStringTag:void 0;var Q=function(e){var r=X.call(e,G),t=e[G];try{e[G]=void 0;var n=!0}catch(e){}var a=q.call(e);return n&&(r?e[G]=t:delete e[G]),a},ee=Object.prototype.toString;var re=Q,te=function(e){return ee.call(e)},ne=Z?Z.toStringTag:void 0;var ae=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?re(e):te(e)};var ie=ae,oe=function(e){return null!=e&&"object"==typeof e};var se=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==ie(e)},le=N,de=se,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ue=/^\w*$/;var ge=function(e,r){if(le(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!de(e))||(ue.test(e)||!ce.test(e)||null!=r&&e in Object(r))};var he=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},be=ae,me=he;var fe,ye=function(e){if(!me(e))return!1;var r=be(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},pe=V["__core-js_shared__"],ve=(fe=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var xe=function(e){return!!ve&&ve in e},De=Function.prototype.toString;var we=ye,Fe=xe,$e=he,Ee=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ce=/^\[object .+?Constructor\]$/,Be=Function.prototype,Ae=Object.prototype,Se=Be.toString,ke=Ae.hasOwnProperty,Me=RegExp("^"+Se.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ze=function(e,r){return null==e?void 0:e[r]},Oe=function(e){return!(!$e(e)||Fe(e))&&(we(e)?Me:Ce).test(Ee(e))},Ye=ze;var Te=function(e,r){var t=Ye(e,r);return Oe(t)?t:void 0},je=Te(Object,"create"),Re=je;var _e=function(){this.__data__=Re?Re(null):{},this.size=0};var Le=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},He=je,Ie=Object.prototype.hasOwnProperty;var We=function(e){var r=this.__data__;if(He){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ie.call(r,e)?r[e]:void 0},Ne=je,Pe=Object.prototype.hasOwnProperty;var Ue=function(e){var r=this.__data__;return Ne?void 0!==r[e]:Pe.call(r,e)},Ve=je;var Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ve&&void 0===r?"__lodash_hash_undefined__":r,this},Ke=_e,Je=Le,Xe=We,qe=Ue,Ge=Ze;function Qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qe.prototype.clear=Ke,Qe.prototype.delete=Je,Qe.prototype.get=Xe,Qe.prototype.has=qe,Qe.prototype.set=Ge;var er=Qe;var rr=function(){this.__data__=[],this.size=0};var tr=function(e,r){return e===r||e!=e&&r!=r};var nr=function(e,r){for(var t=e.length;t--;)if(tr(e[t][0],r))return t;return-1},ar=nr,ir=Array.prototype.splice;var or=function(e){var r=this.__data__,t=ar(r,e);return!(t<0)&&(t==r.length-1?r.pop():ir.call(r,t,1),--this.size,!0)},sr=nr;var lr=function(e){var r=this.__data__,t=sr(r,e);return t<0?void 0:r[t][1]},dr=nr;var cr=function(e){return dr(this.__data__,e)>-1},ur=nr;var gr=function(e,r){var t=this.__data__,n=ur(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},hr=rr,br=or,mr=lr,fr=cr,yr=gr;function pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}pr.prototype.clear=hr,pr.prototype.delete=br,pr.prototype.get=mr,pr.prototype.has=fr,pr.prototype.set=yr;var vr=pr,xr=Te(V,"Map"),Dr=er,wr=vr,Fr=xr;var $r=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Er=function(e,r){var t=e.__data__;return $r(r)?t["string"==typeof r?"string":"hash"]:t.map},Cr=Er;var Br=function(e){var r=Cr(this,e).delete(e);return this.size-=r?1:0,r},Ar=Er;var Sr=function(e){return Ar(this,e).get(e)},kr=Er;var Mr=function(e){return kr(this,e).has(e)},zr=Er;var Or=function(e,r){var t=zr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Yr=function(){this.size=0,this.__data__={hash:new Dr,map:new(Fr||wr),string:new Dr}},Tr=Br,jr=Sr,Rr=Mr,_r=Or;function Lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Lr.prototype.clear=Yr,Lr.prototype.delete=Tr,Lr.prototype.get=jr,Lr.prototype.has=Rr,Lr.prototype.set=_r;var Hr=Lr;function Ir(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ir.Cache||Hr),t}Ir.Cache=Hr;var Wr=Ir;var Nr=function(e){var r=Wr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Pr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g,Vr=Nr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Pr,(function(e,t,n,a){r.push(n?a.replace(Ur,"$1"):t||e)})),r}));var Zr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Kr=N,Jr=se,Xr=Z?Z.prototype:void 0,qr=Xr?Xr.toString:void 0;var Gr=function e(r){if("string"==typeof r)return r;if(Kr(r))return Zr(r,e)+"";if(Jr(r))return qr?qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Qr=Gr;var et=N,rt=ge,tt=Vr,nt=function(e){return null==e?"":Qr(e)};var at=se;var it=function(e,r){return et(e)?e:rt(e,r)?[e]:tt(nt(e))},ot=function(e){if("string"==typeof e||at(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var st=function(e,r){for(var t=0,n=(r=it(r,e)).length;null!=e&&t<n;)e=e[ot(r[t++])];return t&&t==n?e:void 0};var lt=H((function(e,r,t){var n=null==e?void 0:st(e,r);return void 0===n?t:n}));const dt=(e,r,t)=>lt(t,r)||lt(e,r),ct=(e,r)=>{const t=r||e.defaultValue;return lt(e.collections,t)},ut={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},gt=e=>r=>{var t;const n=r.theme,a=ct(ut,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${dt(a,e,n.overrides.border)}px`:`${a[e]}px`},ht={"width-005":gt("width-005"),"width-010":gt("width-010"),"width-020":gt("width-020"),"width-040":gt("width-040"),solid:(bt="solid",e=>{var r;const t=e.theme,n=ct(ut,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?dt(n,bt,t.overrides.border):n[bt];return"function"==typeof a?a(e):a})};var bt;const mt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ft=e=>r=>{var t;const n=r.theme,a=ct(mt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?dt(a,e,n.overrides.primitiveColour):a[e]},yt={"brand-10":ft("brand-10"),"brand-20":ft("brand-20"),"brand-30":ft("brand-30"),"brand-40":ft("brand-40"),"brand-50":ft("brand-50"),"brand-60":ft("brand-60"),"brand-70":ft("brand-70"),"brand-80":ft("brand-80"),"brand-90":ft("brand-90"),"brand-95":ft("brand-95"),"brand-100":ft("brand-100"),"primary-10":ft("primary-10"),"primary-20":ft("primary-20"),"primary-30":ft("primary-30"),"primary-40":ft("primary-40"),"primary-50":ft("primary-50"),"primary-60":ft("primary-60"),"primary-70":ft("primary-70"),"primary-80":ft("primary-80"),"primary-90":ft("primary-90"),"primary-95":ft("primary-95"),"primary-100":ft("primary-100"),"secondary-10":ft("secondary-10"),"secondary-20":ft("secondary-20"),"secondary-30":ft("secondary-30"),"secondary-40":ft("secondary-40"),"secondary-50":ft("secondary-50"),"secondary-60":ft("secondary-60"),"secondary-70":ft("secondary-70"),"secondary-80":ft("secondary-80"),"secondary-90":ft("secondary-90"),"secondary-95":ft("secondary-95"),"secondary-100":ft("secondary-100"),"neutral-10":ft("neutral-10"),"neutral-20":ft("neutral-20"),"neutral-30":ft("neutral-30"),"neutral-40":ft("neutral-40"),"neutral-50":ft("neutral-50"),"neutral-60":ft("neutral-60"),"neutral-70":ft("neutral-70"),"neutral-80":ft("neutral-80"),"neutral-90":ft("neutral-90"),"neutral-95":ft("neutral-95"),"neutral-100":ft("neutral-100"),"success-10":ft("success-10"),"success-20":ft("success-20"),"success-30":ft("success-30"),"success-40":ft("success-40"),"success-50":ft("success-50"),"success-60":ft("success-60"),"success-70":ft("success-70"),"success-80":ft("success-80"),"success-90":ft("success-90"),"success-95":ft("success-95"),"success-100":ft("success-100"),"warning-10":ft("warning-10"),"warning-20":ft("warning-20"),"warning-30":ft("warning-30"),"warning-40":ft("warning-40"),"warning-50":ft("warning-50"),"warning-60":ft("warning-60"),"warning-70":ft("warning-70"),"warning-80":ft("warning-80"),"warning-90":ft("warning-90"),"warning-95":ft("warning-95"),"warning-100":ft("warning-100"),"error-10":ft("error-10"),"error-20":ft("error-20"),"error-30":ft("error-30"),"error-40":ft("error-40"),"error-50":ft("error-50"),"error-60":ft("error-60"),"error-70":ft("error-70"),"error-80":ft("error-80"),"error-90":ft("error-90"),"error-95":ft("error-95"),"error-100":ft("error-100"),"info-10":ft("info-10"),"info-20":ft("info-20"),"info-30":ft("info-30"),"info-40":ft("info-40"),"info-50":ft("info-50"),"info-60":ft("info-60"),"info-70":ft("info-70"),"info-80":ft("info-80"),"info-90":ft("info-90"),"info-95":ft("info-95"),"info-100":ft("info-100"),white:ft("white"),black:ft("black"),"primary-inverse":ft("primary-inverse")},pt={text:ft("neutral-20"),"text-subtle":ft("neutral-30"),"text-subtler":ft("neutral-50"),"text-subtlest":ft("neutral-60"),"text-primary":ft("primary-50"),"text-hover":ft("primary-40"),"text-selected":ft("primary-50"),"text-selected-hover":ft("primary-40"),"text-disabled":ft("neutral-50"),"text-disabled-subtle":ft("neutral-60"),"text-disabled-subtlest":ft("neutral-80"),"text-selected-disabled":ft("neutral-20"),"text-success":ft("success-40"),"text-warning":ft("warning-40"),"text-error":ft("error-40"),"text-info":ft("info-40"),"text-inverse":ft("white"),icon:ft("neutral-50"),"icon-subtle":ft("neutral-60"),"icon-strongest":ft("neutral-20"),"icon-primary":ft("primary-50"),"icon-primary-subtle":ft("primary-60"),"icon-primary-subtlest":ft("primary-70"),"icon-hover":ft("primary-40"),"icon-selected":ft("primary-50"),"icon-selected-hover":ft("primary-40"),"icon-disabled":ft("neutral-50"),"icon-disabled-subtle":ft("neutral-60"),"icon-selected-disabled":ft("neutral-60"),"icon-success":ft("success-50"),"icon-warning":ft("warning-60"),"icon-error":ft("error-50"),"icon-error-strong":ft("error-40"),"icon-info":ft("info-50"),"icon-inverse":ft("white"),"icon-primary-inverse":ft("primary-inverse"),border:ft("neutral-90"),"border-strong":ft("neutral-70"),"border-stronger":ft("neutral-50"),"border-primary":ft("primary-50"),"border-primary-subtle":ft("primary-60"),"border-hover":ft("primary-90"),"border-hover-strong":ft("primary-60"),"border-selected":ft("primary-50"),"border-selected-subtle":ft("primary-70"),"border-selected-subtlest":ft("primary-90"),"border-selected-hover":ft("primary-40"),"border-focus":ft("primary-60"),"border-focus-strong":ft("primary-50"),"border-disabled":ft("neutral-90"),"border-selected-disabled":ft("neutral-70"),"border-success":ft("success-60"),"border-warning":ft("warning-60"),"border-error":ft("error-60"),"border-error-focus":ft("error-60"),"border-error-focus-strong":ft("error-40"),"border-error-strong":ft("error-40"),"border-info":ft("info-60"),bg:ft("white"),"bg-strong":ft("neutral-100"),"bg-stronger":ft("neutral-95"),"bg-strongest":ft("neutral-90"),"bg-hover":ft("primary-95"),"bg-hover-strong":ft("primary-90"),"bg-hover-subtle":ft("primary-100"),"bg-hover-neutral":ft("neutral-100"),"bg-hover-neutral-strong":ft("neutral-90"),"bg-selected":ft("primary-95"),"bg-selected-hover":ft("primary-90"),"bg-selected-strong":ft("primary-90"),"bg-selected-stronger":ft("primary-70"),"bg-selected-strongest":ft("primary-50"),"bg-selected-strongest-hover":ft("primary-40"),"bg-disabled":ft("neutral-95"),"bg-selected-disabled":ft("neutral-95"),"bg-selected-stronger-disabled":ft("neutral-70"),"bg-success":ft("success-100"),"bg-success-hover":ft("success-95"),"bg-success-strong":ft("success-50"),"bg-success-strong-hover":ft("success-40"),"bg-warning":ft("warning-100"),"bg-warning-hover":ft("warning-95"),"bg-warning-strong":ft("warning-50"),"bg-warning-strong-hover":ft("warning-40"),"bg-info":ft("info-100"),"bg-info-hover":ft("info-95"),"bg-info-strong":ft("info-50"),"bg-info-strong-hover":ft("info-40"),"bg-error":ft("error-100"),"bg-error-hover":ft("error-95"),"bg-error-strong":ft("error-50"),"bg-error-strong-hover":ft("error-40"),"bg-inverse":ft("neutral-20"),"bg-inverse-subtle":ft("neutral-30"),"bg-inverse-subtler":ft("neutral-50"),"bg-inverse-subtlest":ft("neutral-60"),"bg-inverse-hover":ft("neutral-40"),"bg-primary":ft("primary-50"),"bg-primary-subtle":ft("primary-60"),"bg-primary-subtler":ft("primary-95"),"bg-primary-subtlest":ft("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ft("primary-40"),"bg-primary-subtlest-hover":ft("primary-90"),"bg-primary-subtlest-selected":ft("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ft("primary-50"),"hyperlink-hover":ft("primary-40"),"hyperlink-visited":ft("primary-40"),"hyperlink-inverse":ft("primary-inverse"),"focus-ring":ft("black"),"focus-ring-inverse":ft("white")},vt={collections:{lifesg:pt,bookingsg:pt,rbs:pt,mylegacy:pt,ccube:pt,oneservice:pt,pa:{text:ft("neutral-30"),"text-subtle":ft("neutral-40"),"text-subtler":ft("neutral-50"),"text-subtlest":ft("neutral-70"),"text-primary":ft("neutral-10"),"text-hover":ft("neutral-70"),"text-selected":ft("neutral-20"),"text-selected-hover":ft("neutral-10"),"text-disabled":ft("neutral-50"),"text-disabled-subtle":ft("neutral-60"),"text-disabled-subtlest":ft("neutral-80"),"text-selected-disabled":ft("neutral-40"),"text-success":ft("success-40"),"text-warning":ft("warning-40"),"text-error":ft("brand-30"),"text-info":ft("neutral-40"),"text-inverse":ft("neutral-100"),icon:ft("neutral-40"),"icon-subtle":ft("neutral-50"),"icon-strongest":ft("neutral-10"),"icon-primary":ft("neutral-10"),"icon-primary-subtle":ft("neutral-30"),"icon-primary-subtlest":ft("neutral-60"),"icon-hover":ft("neutral-70"),"icon-selected":ft("brand-20"),"icon-selected-hover":ft("brand-10"),"icon-disabled":ft("neutral-50"),"icon-disabled-subtle":ft("neutral-60"),"icon-selected-disabled":ft("neutral-40"),"icon-success":ft("success-40"),"icon-warning":ft("warning-60"),"icon-error":ft("brand-30"),"icon-error-strong":ft("brand-10"),"icon-info":ft("neutral-40"),"icon-inverse":ft("neutral-100"),"icon-primary-inverse":"#F9B371",border:ft("neutral-90"),"border-strong":ft("neutral-30"),"border-stronger":ft("neutral-20"),"border-primary":ft("neutral-40"),"border-primary-subtle":ft("neutral-60"),"border-hover":ft("neutral-80"),"border-hover-strong":ft("neutral-10"),"border-selected":ft("brand-20"),"border-selected-subtle":ft("neutral-40"),"border-selected-subtlest":ft("neutral-70"),"border-selected-hover":ft("neutral-10"),"border-focus":ft("neutral-20"),"border-focus-strong":ft("neutral-10"),"border-disabled":ft("neutral-90"),"border-selected-disabled":ft("neutral-80"),"border-success":ft("success-40"),"border-warning":ft("warning-60"),"border-error":ft("brand-30"),"border-error-focus":ft("brand-20"),"border-error-focus-strong":ft("brand-10"),"border-error-strong":ft("brand-20"),"border-info":ft("neutral-40"),bg:ft("neutral-100"),"bg-strong":ft("neutral-95"),"bg-stronger":ft("neutral-90"),"bg-strongest":ft("neutral-80"),"bg-hover":ft("brand-90"),"bg-hover-strong":ft("brand-80"),"bg-hover-subtle":ft("neutral-90"),"bg-hover-neutral":ft("neutral-90"),"bg-hover-neutral-strong":ft("neutral-90"),"bg-selected":ft("brand-100"),"bg-selected-hover":ft("brand-30"),"bg-selected-strong":ft("brand-50"),"bg-selected-stronger":ft("brand-40"),"bg-selected-strongest":ft("brand-20"),"bg-selected-strongest-hover":ft("brand-10"),"bg-disabled":ft("neutral-90"),"bg-selected-disabled":ft("neutral-90"),"bg-selected-stronger-disabled":ft("neutral-80"),"bg-success":ft("success-100"),"bg-success-hover":ft("success-95"),"bg-success-strong":ft("success-50"),"bg-success-strong-hover":ft("success-40"),"bg-warning":ft("warning-100"),"bg-warning-hover":ft("warning-95"),"bg-warning-strong":ft("warning-50"),"bg-warning-strong-hover":ft("warning-40"),"bg-info":ft("neutral-95"),"bg-info-hover":ft("info-95"),"bg-info-strong":ft("info-50"),"bg-info-strong-hover":ft("info-40"),"bg-error":ft("brand-100"),"bg-error-hover":ft("error-95"),"bg-error-strong":ft("error-50"),"bg-error-strong-hover":ft("error-40"),"bg-inverse":ft("neutral-40"),"bg-inverse-subtle":ft("neutral-60"),"bg-inverse-subtler":ft("neutral-70"),"bg-inverse-subtlest":ft("neutral-80"),"bg-inverse-hover":ft("neutral-30"),"bg-primary":ft("brand-20"),"bg-primary-subtle":ft("brand-60"),"bg-primary-subtler":ft("brand-80"),"bg-primary-subtlest":ft("brand-100"),"bg-available":ft("success-60"),"bg-primary-hover":ft("brand-10"),"bg-primary-subtlest-hover":ft("brand-80"),"bg-primary-subtlest-selected":ft("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ft("neutral-10"),"hyperlink-hover":ft("neutral-40"),"hyperlink-visited":ft("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ft("black"),"focus-ring-inverse":ft("white")},a11yplayground:pt},defaultValue:"lifesg"},xt=e=>r=>{var t;const n=r.theme,a=ct(vt,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?dt(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},Dt={text:xt("text"),"text-subtle":xt("text-subtle"),"text-subtler":xt("text-subtler"),"text-subtlest":xt("text-subtlest"),"text-primary":xt("text-primary"),"text-hover":xt("text-hover"),"text-selected":xt("text-selected"),"text-selected-hover":xt("text-selected-hover"),"text-disabled":xt("text-disabled"),"text-disabled-subtle":xt("text-disabled-subtle"),"text-disabled-subtlest":xt("text-disabled-subtlest"),"text-selected-disabled":xt("text-selected-disabled"),"text-success":xt("text-success"),"text-warning":xt("text-warning"),"text-error":xt("text-error"),"text-info":xt("text-info"),"text-inverse":xt("text-inverse"),icon:xt("icon"),"icon-subtle":xt("icon-subtle"),"icon-strongest":xt("icon-strongest"),"icon-primary":xt("icon-primary"),"icon-primary-subtle":xt("icon-primary-subtle"),"icon-primary-subtlest":xt("icon-primary-subtlest"),"icon-hover":xt("icon-hover"),"icon-selected":xt("icon-selected"),"icon-selected-hover":xt("icon-selected-hover"),"icon-disabled":xt("icon-disabled"),"icon-disabled-subtle":xt("icon-disabled-subtle"),"icon-selected-disabled":xt("icon-selected-disabled"),"icon-success":xt("icon-success"),"icon-warning":xt("icon-warning"),"icon-error":xt("icon-error"),"icon-error-strong":xt("icon-error-strong"),"icon-info":xt("icon-info"),"icon-inverse":xt("icon-inverse"),"icon-primary-inverse":xt("icon-primary-inverse"),border:xt("border"),"border-strong":xt("border-strong"),"border-stronger":xt("border-stronger"),"border-primary":xt("border-primary"),"border-primary-subtle":xt("border-primary-subtle"),"border-hover":xt("border-hover"),"border-hover-strong":xt("border-hover-strong"),"border-selected":xt("border-selected"),"border-selected-subtle":xt("border-selected-subtle"),"border-selected-subtlest":xt("border-selected-subtlest"),"border-selected-hover":xt("border-selected-hover"),"border-focus":xt("border-focus"),"border-focus-strong":xt("border-focus-strong"),"border-disabled":xt("border-disabled"),"border-selected-disabled":xt("border-selected-disabled"),"border-success":xt("border-success"),"border-warning":xt("border-warning"),"border-error":xt("border-error"),"border-error-focus":xt("border-error-focus"),"border-error-focus-strong":xt("border-error-focus-strong"),"border-error-strong":xt("border-error-strong"),"border-info":xt("border-info"),bg:xt("bg"),"bg-strong":xt("bg-strong"),"bg-stronger":xt("bg-stronger"),"bg-strongest":xt("bg-strongest"),"bg-hover":xt("bg-hover"),"bg-hover-strong":xt("bg-hover-strong"),"bg-hover-subtle":xt("bg-hover-subtle"),"bg-hover-neutral":xt("bg-hover-neutral"),"bg-hover-neutral-strong":xt("bg-hover-neutral-strong"),"bg-selected":xt("bg-selected"),"bg-selected-hover":xt("bg-selected-hover"),"bg-selected-strong":xt("bg-selected-strong"),"bg-selected-stronger":xt("bg-selected-stronger"),"bg-selected-strongest":xt("bg-selected-strongest"),"bg-selected-strongest-hover":xt("bg-selected-strongest-hover"),"bg-disabled":xt("bg-disabled"),"bg-selected-disabled":xt("bg-selected-disabled"),"bg-selected-stronger-disabled":xt("bg-selected-stronger-disabled"),"bg-success":xt("bg-success"),"bg-success-hover":xt("bg-success-hover"),"bg-success-strong":xt("bg-success-strong"),"bg-success-strong-hover":xt("bg-success-strong-hover"),"bg-warning":xt("bg-warning"),"bg-warning-hover":xt("bg-warning-hover"),"bg-warning-strong":xt("bg-warning-strong"),"bg-warning-strong-hover":xt("bg-warning-strong-hover"),"bg-info":xt("bg-info"),"bg-info-hover":xt("bg-info-hover"),"bg-info-strong":xt("bg-info-strong"),"bg-info-strong-hover":xt("bg-info-strong-hover"),"bg-error":xt("bg-error"),"bg-error-hover":xt("bg-error-hover"),"bg-error-strong":xt("bg-error-strong"),"bg-error-strong-hover":xt("bg-error-strong-hover"),"bg-inverse":xt("bg-inverse"),"bg-inverse-subtle":xt("bg-inverse-subtle"),"bg-inverse-subtler":xt("bg-inverse-subtler"),"bg-inverse-subtlest":xt("bg-inverse-subtlest"),"bg-inverse-hover":xt("bg-inverse-hover"),"bg-primary":xt("bg-primary"),"bg-primary-subtle":xt("bg-primary-subtle"),"bg-primary-subtler":xt("bg-primary-subtler"),"bg-primary-subtlest":xt("bg-primary-subtlest"),"bg-available":xt("bg-available"),"bg-primary-hover":xt("bg-primary-hover"),"bg-primary-subtlest-hover":xt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":xt("bg-primary-subtlest-selected"),"overlay-strong":xt("overlay-strong"),"overlay-subtle":xt("overlay-subtle"),hyperlink:xt("hyperlink"),"hyperlink-hover":xt("hyperlink-hover"),"hyperlink-visited":xt("hyperlink-visited"),"hyperlink-inverse":xt("hyperlink-inverse"),"focus-ring":xt("focus-ring"),"focus-ring-inverse":xt("focus-ring-inverse")},wt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ht["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Dt.border(r),u=ht.solid;return p`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ht["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Dt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Ft=e=>1===e.length&&"theme"in e[0],$t=e=>(...r)=>t=>{const n=Ft(r)?[]:r,a=Ft(r)?r[0]:t,i=a.theme;return(0,ct(wt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Et={solid:$t("solid"),"dashed-default":$t("dashed-default")},Ct={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Bt=e=>r=>{var t;const n=r.theme,a=ct(Ct,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?dt(a,e,n.overrides.breakpoint):a[e],i},At={"xxs-min":Bt("xxs-min"),"xxs-max":Bt("xxs-max"),"xs-min":Bt("xs-min"),"xs-max":Bt("xs-max"),"sm-min":Bt("sm-min"),"sm-max":Bt("sm-max"),"md-min":Bt("md-min"),"md-max":Bt("md-max"),"lg-min":Bt("lg-min"),"lg-max":Bt("lg-max"),"xl-min":Bt("xl-min"),"xl-max":Bt("xl-max"),"xxl-min":Bt("xxl-min"),"xxs-column":Bt("xxs-column"),"xs-column":Bt("xs-column"),"sm-column":Bt("sm-column"),"md-column":Bt("md-column"),"lg-column":Bt("lg-column"),"xl-column":Bt("xl-column"),"xxl-column":Bt("xxl-column"),"xxs-gutter":Bt("xxs-gutter"),"xs-gutter":Bt("xs-gutter"),"sm-gutter":Bt("sm-gutter"),"md-gutter":Bt("md-gutter"),"lg-gutter":Bt("lg-gutter"),"xl-gutter":Bt("xl-gutter"),"xxl-gutter":Bt("xxl-gutter"),"xxs-margin":Bt("xxs-margin"),"xs-margin":Bt("xs-margin"),"sm-margin":Bt("sm-margin"),"md-margin":Bt("md-margin"),"lg-margin":Bt("lg-margin"),"xl-margin":Bt("xl-margin"),"xxl-margin":Bt("xxl-margin")},St=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=At["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),kt={MaxWidth:St("max-width"),MinWidth:St("min-width")},Mt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},zt=e=>r=>{var t;const n=r.theme,a=ct(Mt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?dt(a,e,n.overrides.fontSpec):a[e]},Ot={"heading-size-xxl":zt("heading-size-xxl"),"heading-size-xl":zt("heading-size-xl"),"heading-size-lg":zt("heading-size-lg"),"heading-size-md":zt("heading-size-md"),"heading-size-sm":zt("heading-size-sm"),"heading-size-xs":zt("heading-size-xs"),"heading-lh-xxl":zt("heading-lh-xxl"),"heading-lh-xl":zt("heading-lh-xl"),"heading-lh-lg":zt("heading-lh-lg"),"heading-lh-md":zt("heading-lh-md"),"heading-lh-sm":zt("heading-lh-sm"),"heading-lh-xs":zt("heading-lh-xs"),"heading-ls-xxl":zt("heading-ls-xxl"),"heading-ls-xl":zt("heading-ls-xl"),"heading-ls-lg":zt("heading-ls-lg"),"heading-ls-md":zt("heading-ls-md"),"heading-ls-sm":zt("heading-ls-sm"),"heading-ls-xs":zt("heading-ls-xs"),"weight-light":zt("weight-light"),"weight-regular":zt("weight-regular"),"weight-semibold":zt("weight-semibold"),"weight-bold":zt("weight-bold"),"font-family":zt("font-family"),"body-size-baseline":zt("body-size-baseline"),"body-size-md":zt("body-size-md"),"body-size-sm":zt("body-size-sm"),"body-size-xs":zt("body-size-xs"),"body-lh-baseline":zt("body-lh-baseline"),"body-lh-md":zt("body-lh-md"),"body-lh-sm":zt("body-lh-sm"),"body-lh-xs":zt("body-lh-xs"),"body-ls-baseline":zt("body-ls-baseline"),"body-ls-md":zt("body-ls-md"),"body-ls-sm":zt("body-ls-sm"),"body-ls-xs":zt("body-ls-xs"),"form-label-size":zt("form-label-size"),"form-description-size":zt("form-description-size"),"form-label-lh":zt("form-label-lh"),"form-description-lh":zt("form-description-lh"),"form-label-ls":zt("form-label-ls"),"form-description-ls":zt("form-description-ls")},Yt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return p`
        font-family: ${zt("font-family")};
        font-size: ${zt(e)};
        font-weight: ${zt(r)};
        line-height: ${zt(t)};
        letter-spacing: ${zt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Tt=(e={})=>({"heading-xxl-light":Yt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Yt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Yt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Yt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Yt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Yt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Yt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Yt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Yt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Yt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Yt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Yt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Yt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Yt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Yt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Yt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Yt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Yt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Yt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Yt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Yt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Yt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Yt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Yt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Yt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Yt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Yt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Yt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Yt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Yt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Yt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Yt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Yt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Yt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Yt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Yt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Yt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Yt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Yt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Yt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Yt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Yt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),jt=Tt({disableLigatures:!0}),Rt={collections:{default:Tt(),bookingsg:jt,pa:Tt({disableLigatures:!0}),a11yplayground:Tt({disableLigatures:!0})},defaultValue:"default"},_t=e=>r=>{var t;const n=r.theme,a=ct(Rt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?dt(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Lt={"heading-xxl-light":_t("heading-xxl-light"),"heading-xxl-regular":_t("heading-xxl-regular"),"heading-xxl-semibold":_t("heading-xxl-semibold"),"heading-xxl-bold":_t("heading-xxl-bold"),"heading-xl-light":_t("heading-xl-light"),"heading-xl-regular":_t("heading-xl-regular"),"heading-xl-semibold":_t("heading-xl-semibold"),"heading-xl-bold":_t("heading-xl-bold"),"heading-lg-light":_t("heading-lg-light"),"heading-lg-regular":_t("heading-lg-regular"),"heading-lg-semibold":_t("heading-lg-semibold"),"heading-lg-bold":_t("heading-lg-bold"),"heading-md-light":_t("heading-md-light"),"heading-md-regular":_t("heading-md-regular"),"heading-md-semibold":_t("heading-md-semibold"),"heading-md-bold":_t("heading-md-bold"),"heading-sm-light":_t("heading-sm-light"),"heading-sm-regular":_t("heading-sm-regular"),"heading-sm-semibold":_t("heading-sm-semibold"),"heading-sm-bold":_t("heading-sm-bold"),"heading-xs-light":_t("heading-xs-light"),"heading-xs-regular":_t("heading-xs-regular"),"heading-xs-semibold":_t("heading-xs-semibold"),"heading-xs-bold":_t("heading-xs-bold"),"body-baseline-light":_t("body-baseline-light"),"body-baseline-regular":_t("body-baseline-regular"),"body-baseline-semibold":_t("body-baseline-semibold"),"body-baseline-bold":_t("body-baseline-bold"),"body-md-light":_t("body-md-light"),"body-md-regular":_t("body-md-regular"),"body-md-semibold":_t("body-md-semibold"),"body-md-bold":_t("body-md-bold"),"body-sm-light":_t("body-sm-light"),"body-sm-regular":_t("body-sm-regular"),"body-sm-semibold":_t("body-sm-semibold"),"body-sm-bold":_t("body-sm-bold"),"body-xs-light":_t("body-xs-light"),"body-xs-regular":_t("body-xs-regular"),"body-xs-semibold":_t("body-xs-semibold"),"body-xs-bold":_t("body-xs-bold"),"form-label":_t("form-label"),"form-description":_t("form-description")},Ht={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},It=e=>r=>{var t;const n=r.theme,a=ct(Ht,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?dt(a,e,n.overrides.motion):a[e]},Wt={"duration-150":It("duration-150"),"duration-250":It("duration-250"),"duration-350":It("duration-350"),"duration-500":It("duration-500"),"duration-800":It("duration-800"),"duration-1000":It("duration-1000"),"ease-default":It("ease-default"),"ease-standard":It("ease-standard"),"ease-entrance":It("ease-entrance"),"ease-exit":It("ease-exit")},Nt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,a=ct(Nt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${dt(a,e,n.overrides.radius)}px`:`${a[e]}px`},Ut={none:Pt("none"),xs:Pt("xs"),sm:Pt("sm"),md:Pt("md"),lg:Pt("lg"),full:Pt("full")},Vt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,a=ct(Vt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${dt(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Kt={"spacing-0":Zt("spacing-0"),"spacing-4":Zt("spacing-4"),"spacing-8":Zt("spacing-8"),"spacing-12":Zt("spacing-12"),"spacing-16":Zt("spacing-16"),"spacing-20":Zt("spacing-20"),"spacing-24":Zt("spacing-24"),"spacing-32":Zt("spacing-32"),"spacing-40":Zt("spacing-40"),"spacing-48":Zt("spacing-48"),"spacing-64":Zt("spacing-64"),"spacing-72":Zt("spacing-72"),"layout-xs":Zt("layout-xs"),"layout-sm":Zt("layout-sm"),"layout-md":Zt("layout-md"),"layout-lg":Zt("layout-lg"),"layout-xl":Zt("layout-xl"),"layout-xxl":Zt("layout-xxl"),"layout-xxxl":Zt("layout-xxxl")},Jt=Object.assign(Object.assign({},Dt),{Primitive:yt}),Xt=Object.assign(Object.assign({},Lt),{Spec:Ot}),qt=Wt,Gt=Object.assign(Object.assign({},ht),{Util:Et}),Qt=Kt,en=Ut,rn=At,tn=kt,nn=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const r=nn(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const an=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Qt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>nn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${en.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Jt["border-focus"]};
    }
`,on=y.button`
    ${an}
    cursor: pointer;
`;y.div`
    ${an}
`;const sn=v`
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
`;y.div`
    position: relative;
    border: ${Gt["width-010"]} ${Gt.solid} ${Jt.border};
    border-radius: ${en.sm};
    background: ${Jt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Jt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Jt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${sn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${Jt["bg-disabled"]};

                ${on} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Jt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${on} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${Jt["border-error"]};

                :focus-within {
                    border-color: ${Jt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Jt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${qt["duration-250"]} ${qt["ease-default"]};
    margin-left: ${Qt["spacing-16"]};
`,y(f)`
    color: ${Jt.icon};
`,y.div`
    height: 1px;
    background: ${Jt.border};
    margin: 0 ${Qt["spacing-8"]};
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${Jt["text-disabled"]};
            `}}
`;y(y.div`
    ${e=>"small"===e.$variant?Xt["body-md-regular"]:Xt["body-baseline-regular"]}
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
    color: ${Jt["text-subtler"]};
`;var ln=function(e,r){return ln=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ln(e,r)};var dn=function(){return dn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},dn.apply(this,arguments)};var cn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var un=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},gn="object"==typeof cn&&cn&&cn.Object===Object&&cn,hn="object"==typeof self&&self&&self.Object===Object&&self,bn=gn||hn||Function("return this")(),mn=bn,fn=function(){return mn.Date.now()},yn=/\s/;var pn=function(e){for(var r=e.length;r--&&yn.test(e.charAt(r)););return r},vn=/^\s+/;var xn=function(e){return e?e.slice(0,pn(e)+1).replace(vn,""):e},Dn=bn.Symbol,wn=Dn,Fn=Object.prototype,$n=Fn.hasOwnProperty,En=Fn.toString,Cn=wn?wn.toStringTag:void 0;var Bn=function(e){var r=$n.call(e,Cn),t=e[Cn];try{e[Cn]=void 0;var n=!0}catch(e){}var a=En.call(e);return n&&(r?e[Cn]=t:delete e[Cn]),a},An=Object.prototype.toString;var Sn=Bn,kn=function(e){return An.call(e)},Mn=Dn?Dn.toStringTag:void 0;var zn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Mn&&Mn in Object(e)?Sn(e):kn(e)},On=function(e){return null!=e&&"object"==typeof e};var Yn=xn,Tn=un,jn=function(e){return"symbol"==typeof e||On(e)&&"[object Symbol]"==zn(e)},Rn=/^[-+]0x[0-9a-f]+$/i,_n=/^0b[01]+$/i,Ln=/^0o[0-7]+$/i,Hn=parseInt;var In=un,Wn=fn,Nn=function(e){if("number"==typeof e)return e;if(jn(e))return NaN;if(Tn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Tn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Yn(e);var t=_n.test(e);return t||Ln.test(e)?Hn(e.slice(2),t?2:8):Rn.test(e)?NaN:+e},Pn=Math.max,Un=Math.min;var Vn=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=Wn();if(b(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Un(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?h(e):(n=a=void 0,o)}function y(){var e=Wn(),t=b(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),h(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Nn(r)||0,In(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Pn(Nn(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(Wn())},y},Zn=Vn,Kn=un;var Jn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Kn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Zn(e,r,{leading:n,maxWait:r,trailing:a})},Xn=function(e,r,t,n){switch(r){case"debounce":return Vn(e,t,n);case"throttle":return Jn(e,t,n);default:return e}},qn=function(e){return"function"==typeof e},Gn=function(){return"undefined"==typeof window},Qn=function(e){return e instanceof Element||e instanceof HTMLDocument},ea=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&qn(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Gn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Gn())return null;if(r)return document.querySelector(r);if(n&&Qn(n))return n;if(t.targetRef&&Qn(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=ea(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Gn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return qn(r)?"renderProp":qn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Gn()||(t.resizeHandler=Xn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ln(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Gn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var ra,ta=Gn()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ra||(ra={}));const na=y.div`
    display: flex;
    flex-direction: column;
`,aa=e=>"right"===e?"bottom-end":"bottom-start",ia=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y,rootNode:p})=>{var v;const T=x(),j=rn["sm-max"]({theme:T}),R=i(null),_=i(null),{width:L=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=h?h:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return ta((function(){if(!Gn()){var e=ea(m,w,c,g);v.current=Xn((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Gn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,b,p.current]),dn({ref:p},D)}({targetRef:R,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<j;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:I,floatingStyles:W,context:N}=w({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:F,placement:aa(f),middleware:[$(m),E(),C({limiter:B()}),A({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),H]}),P=(()=>{const[e,r]=o(void 0),t=D();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ra.Change,e),t.events.emit(ra.Ready),()=>t.events.off(ra.Change,e)}),[t]),e})(),{isMounted:U,styles:V}=S(N,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=k(N,{enabled:n,toggle:b}),K=M(N,{enabled:n}),{getReferenceProps:J,getFloatingProps:X}=z([Z,K]);return e(r,{children:[t("div",Object.assign({ref:e=>{R.current=e,I.setReference(e)}},J(),{children:c()})),U&&t(O,{root:p,children:t(Y,{context:N,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:I.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=h?h:P)&&void 0!==v?v:50})},X(),{children:t(na,{ref:_,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:g({elementWidth:L})})}))})})]})},oa=y.div`
    --vertical-inset: ${Qt["spacing-24"]};
    --horizontal-inset: ${Qt["spacing-20"]};
    --header-bottom-spacing: ${Qt["spacing-4"]};

    border: ${Gt["width-010"]} ${Gt.solid} ${Jt.border};
    border-radius: ${en.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${tn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var sa={exports:{}};sa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=o||(a||i?1:h.getDate()),m=a||h.getFullYear(),f=0;a&&!i||(f=i>0?i-1:h.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,b,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,b,y,p,v,x)):new Date(m,f,b,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,b=1;b<=h;b+=1){o[1]=s[b-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else a.call(this,e)}}}();var la=H(sa.exports),da={exports:{}};da.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ca=H(da.exports),ua={exports:{}};ua.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ga=H(ua.exports),ha={exports:{}};ha.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ba,ma,fa,ya=H(ha.exports),pa={exports:{}},va=H(pa.exports=(ba={year:0,month:1,day:2,hour:3,minute:4,second:5},ma={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=ma[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ma[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ba[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));W.extend(ca),W.extend(ya),W.extend(ga),W.extend(la),W.extend(va),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=W(r).startOf("week");return xa(t).map((e=>Da(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Da(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(W(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+W(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=W(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?W(n):void 0,a?W(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(fa||(fa={}));const xa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Da=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},wa=[1,3,5,7,8,10,12],Fa=[4,6,9,11];var $a,Ea,Ca,Ba;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":wa.includes(i)?Math.min(a,31).toString():Fa.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=W(e,t);return W(r,t).diff(n,"minute")},e.toDayjs=e=>e?W(e):W(),e.addMinutesToTime=(e,r,t="HH:mm")=>W(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>W(e).isSame(W(r),t)}($a||($a={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!W(e).isBefore(n,"day"))||!(!a||!W(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(W(e).isValid())return e}return""}}(Ea||(Ea={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ca||(Ca={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Ba||(Ba={}));const Aa=y.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Sa=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ka=y.div`
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
    animation: ${Sa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ma=y(ka)`
    animation-delay: -0.45s;
`,za=y(ka)`
    animation-delay: -0.3s;
`,Oa=y(ka)`
    animation-delay: -0.15s;
`,Ya={collections:{default:{Button:{"button-radius":Ut.sm,"button-default-colour-bg":Dt["bg-primary"],"button-default-colour-bg-hover":Dt["bg-primary-hover"],"button-default-colour-text":Dt["text-inverse"],"button-secondary-colour-border":Dt["border-primary"],"button-secondary-colour-text":Dt["text-primary"],"button-light-colour-text":Dt["text-primary"],"button-link-colour-text":Dt["text-primary"]}},pa:{Button:{"button-radius":Ut.full,"button-default-colour-bg":Dt["bg-primary"],"button-default-colour-bg-hover":Dt["bg-primary-hover"],"button-default-colour-text":Dt["text-inverse"],"button-secondary-colour-border":Dt["border-primary"],"button-secondary-colour-text":Dt["text-primary"],"button-light-colour-text":Dt["text-primary"],"button-link-colour-text":Dt["text-primary"]}}},defaultValue:"default"},Ta=(e,r)=>t=>{var n,a;const i=t.theme,o=ct(Ya,null==i?void 0:i.componentScheme);return ja((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},ja=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Ra=Ta("Button","button-radius"),_a=Ta("Button","button-default-colour-bg"),La=Ta("Button","button-default-colour-bg-hover"),Ha=Ta("Button","button-default-colour-text"),Ia=Ta("Button","button-secondary-colour-border"),Wa=Ta("Button","button-secondary-colour-text"),Na=Ta("Button","button-light-colour-text"),Pa=Ta("Button","button-link-colour-text"),Ua=y.button`
    padding: ${Qt["spacing-8"]} ${Qt["spacing-16"]};
    min-width: 4rem;
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    transition: all ${qt["duration-250"]} ${qt["ease-default"]};
    border-radius: ${Ra};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${Jt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Jt["border-error-strong"]:Ia};

                    color: ${e.$buttonIsDanger?Jt["text-error"]:Wa};

                    &:hover,
                    &:active {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${Jt.bg};
                    border-color: ${Jt.border};

                    color: ${e.$buttonIsDanger?Jt["text-error"]:Na};

                    &:hover,
                    &:active {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Jt["text-error"]:Pa};
                    &:hover,
                    &:active {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${Jt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Jt["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?Jt["bg-error-strong"]:_a};};

                    ${tn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ha}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Jt["bg-error-strong-hover"]:La}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${Xt["body-md-semibold"]}

                    ${tn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${Xt["heading-md-semibold"]}

                    ${tn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${Xt["heading-xs-semibold"]}

                    ${tn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Va=y((({color:r,className:n,size:a})=>e(Aa,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ka,{id:"inner1"}),t(Ma,{id:"inner2"}),t(za,{id:"inner3"}),t(Oa,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Za=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ua,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Va,{}),t("span",{children:a})]}))};Za.displayName="Button.Default";const Ka=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ua,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Va,{}),t("span",{children:a})]}))};Ka.displayName="Button.Small";const Ja=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ua,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Va,{}),t("span",{children:a})]}))};Ja.displayName="Button.Large";const Xa={Default:a.forwardRef(Za),Small:a.forwardRef(Ka),Large:a.forwardRef(Ja)},qa=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Qt["spacing-24"]};
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
                background-color: ${Jt["bg-hover-neutral"]};
            `}
    }
`,Ga=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(qa,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Qa=p`
    color: ${Jt.icon};
    height: 1rem;
    width: 1rem;
`,ei=y(j)`
    ${Qa}
`,ri=y(R)`
    ${Qa}
`,ti=y(f)`
    ${Qa}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ni=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,ai=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,ii=y.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,oi=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Jt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,si=y.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,li=y.div`
    display: flex;
`,di=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${ti} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,ci=y.span`
    ${Xt["body-md-regular"]}
    color: ${Jt.text};
`,ui=y.div`
    display: flex;
`,gi=y(Ga)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,hi=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,bi=y(Xa.Small)`
    flex: 1;
`,mi=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,fi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${en.md};
    margin: 0 0.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    // default styles
    ${Xt["body-md-regular"]}
    border-radius: ${en.md};
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    background-clip: border-box;
    color: ${Jt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${Jt["bg-selected"]};
                border-color: ${Jt["border-selected"]};
                color: ${Jt["text-selected"]};
                font-weight: ${Xt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Jt["bg-selected-hover"]};
                        border-color: ${Jt["border-selected-hover"]};
                        color: ${Jt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${Jt["text-primary"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            `:t?p`
                color: ${Jt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${Jt["bg-selected-hover"]};
                    border-color: ${Jt["border-selected-hover"]};
                    color: ${Jt["text-selected-hover"]};
                    font-weight: ${Xt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Jt["bg-hover"]};
                color: ${Jt["text-hover"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            }
        `}}
`,yi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const m=h((()=>fa.generateMonths(W(e))),[e]),f=i(new Array(m.length).fill(null)),[y,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==y&&(null===(e=f.current[y])||void 0===e||e.focus())}),[y,m]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},D=e=>{const r=e.format("MMMM"),t=(n=e,!fa.isWithinRange(n,d?W(d):void 0,c?W(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":W().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(mi,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=D(e);return t(fi,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},pi=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,vi=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Xt["body-md-regular"]}
    border-radius: ${en.md};
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    background-clip: border-box;
    color: ${Jt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${Jt["bg-selected"]};
                border-color: ${Jt["border-selected"]};
                color: ${Jt["text-selected"]};
                font-weight: ${Xt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Jt["bg-selected-hover"]};
                        border-color: ${Jt["border-selected-hover"]};
                        color: ${Jt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${Jt["text-primary"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${Jt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${Jt["bg-selected-hover"]};
                    border-color: ${Jt["border-selected-hover"]};
                    color: ${Jt["text-selected-hover"]};
                    font-weight: ${Xt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Jt["bg-hover"]};
                color: ${Jt["text-hover"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            }
        `}}
`,xi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:m})=>{const f=h((()=>fa.generateDecadeOfYears(W(e))),[e]),y=i(new Array(f.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=f.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=y.current[r])||void 0===e||e.focus())}),[p,f]);const x=(e,r)=>{r||b(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},w=e=>{const r=f.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!fa.isWithinRange(i,d?W(d):void 0,c?W(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":W().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return f.length?t(pi,{onBlur:()=>{v(null)},children:f.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=w(e);return t(vi,{ref:e=>{y.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Di=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:h,selectedEndDate:m,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:B,getMonthHeaderLabel:A,getYearHeaderLabel:S,isFocusable:k=!1}=n,M=_(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[z,O]=o($a.toDayjs(l)),[Y,T]=o($a.toDayjs(l)),[j,R]=o("default"),L=i(null),H=i(null),I=i(null),N=i(null);b(a,(()=>({defaultView(){R("default")},resetView(){const e=$a.toDayjs(l);O(e),T(e),R("default")},setCalendarDate(e){const r=$a.toDayjs(e);O(r),T(r)}}))),u((()=>{const e=$a.toDayjs(l);O(e),T(e)}),[l]),u((()=>{G(Y)}),[Y]);const P=()=>{var e;"month-options"!==j?(R("month-options"),null===(e=I.current)||void 0===e||e.focus()):(R("default"),O(Y))},U=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P(),null===(r=N.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?z.subtract(1,"month"):z.add(1,"month");if(!fa.isWithinRange(r,d?W(d):void 0,c?W(c):void 0,"month"))return;O(r),"default"===j&&T(r)}},V=()=>{"default"!==j?(R("default"),O(Y)):R("year-options")},Z=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===j?"ArrowUp"===e.key?z.subtract(10,"year"):z.add(10,"year"):"ArrowUp"===e.key?z.subtract(1,"year"):z.add(1,"year"),!fa.isWithinRange(r,d?W(d):void 0,c?W(c):void 0,"year"))return;O(r),"default"===j&&T(r)}},K=()=>{var e;null===(e=I.current)||void 0===e||e.focus();const r=$?$(z):z.subtract(1,"month");switch(j){case"default":T(r),O(r);break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=I.current)||void 0===e||e.focus();const r=E?E(z):z.add(1,"month");switch(j){case"default":T(r),O(r);break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},X=e=>{O(e),T(e),x||R("default")},q=()=>{const e=$a.toDayjs(l);O(e),T(e),"default"===j?Q("reset"):R("default")},G=e=>{v&&v(e)},Q=e=>{w&&w(e)},ee=()=>{if(!d||p)return!1;const e=W(d);return"month-options"===j?!fa.isPreviousYearWithinRange(z,e):"year-options"===j?!fa.isPreviousDecadeWithinRange(z,e):C?C(z):!fa.isPreviousMonthWithinRange(z,e)},re=()=>{if(!c||p)return!1;const e=W(c);return"month-options"===j?!fa.isNextYearWithinRange(z,e):"year-options"===j?!fa.isNextDecadeWithinRange(z,e):B?B(z):!fa.isNextMonthWithinRange(z,e)},te=()=>{const n=A?A(z):z.format("MMM"),a=W(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=fa.getStartEndDecade(z);return`${e} to ${r}`}return S?S(z):z.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(di,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:P,onKeyDown:U,tabIndex:k?0:-1,children:[t(ci,{children:n}),t(ti,{})]}),e(di,{ref:N,"aria-label":o[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:V,onKeyDown:Z,tabIndex:k?0:-1,children:[t(ci,{children:i}),t(ti,{})]})]})},ne=()=>{switch(j){case"month-options":return t(yi,{calendarDate:z,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:!!f,onMonthSelect:X,allowDisabledSelection:p});case"year-options":return t(xi,{setCalendarDate:O,calendarDate:z,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:!!f,onYearSelect:X,allowDisabledSelection:p});default:return null}};return e(ni,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},M,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return e(si,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(li,{children:te()}),e(ui,{children:[t(gi,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:k?0:-1,children:t(ei,{})}),t(gi,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:k?0:-1,children:t(ri,{})})]})]})})(),t(ai,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:j}):s;if(y)return e(r,{children:["default"===j&&n,ne()]});{const a="default"===j;return e(r,{children:[t(ii,{inert:a?void 0:"",children:n}),t(oi,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&D;return e(hi,{children:[t(bi,{ref:H,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),t(bi,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{r||(O(Y),"default"===j?Q("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),wi=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Fi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Xt["body-sm-semibold"]};
    color: ${Jt.text};
`,$i=y.div`
    grid-column: 1 / -1;
    display: flex;
`,Ei=e=>{let r=Jt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Jt["bg-hover"],t=Jt["bg-hover"];break;case"hover":r=Jt["bg-hover-strong"],t=Jt["bg-hover-strong"];break;case"hover-outline":r=Jt["bg-hover-subtle"],t=Jt["border-hover"];break;case"selected-outline":r=Jt["bg-selected"],t=Jt["border-selected"];break;case"selected-outline-subtle":r=Jt["bg-selected"],t=Jt["border-selected-subtle"];break;case"selected-hover":r=Jt["bg-selected-hover"];break;case"selected-hover-outline":r=Jt["bg-selected-hover"],t=Jt["border-selected-hover"]}return{color:r,borderColor:t}},Ci=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Bi=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Ei(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Ai=y(Bi)`
    left: 0;
`,Si=y(Bi)`
    right: 0;
`,ki=y.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    border-radius: ${en.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Ei(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,Mi=y(ki)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,zi=y(ki)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Oi=y.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Yi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Xt["body-md-regular"]}
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?p`
                    visibility: hidden;
                `:p`
                color: ${Jt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-hover"]};
                `;case"unavailable":return p`
                    color: ${Jt["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${Jt.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Ti=y.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,ji=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:h,onHover:b,onFocus:m,onHoverEnd:f,onKeyDown:y,tabIndex:p=-1,role:v="button",focusDate:x})=>{const D=W().isSame(g,"day"),w=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Ci,{children:[t(Ai,{$type:r}),t(Mi,{$type:a}),t(Si,{$type:n}),t(zi,{$type:o}),t(Oi,{$interactive:d,children:e(Yi,{ref:$,tabIndex:p,role:v,"aria-label":w,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{h(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{b(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&D&&t(Ti,{$disabled:l})]})})]})},Ri=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:h,onSelect:b,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p=-1})=>{const v=fa.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{b(e,!x)},w=()=>{const e=W(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:W(s),tabIndex:p};return t(ji,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(W().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=w();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};W.extend(ca);const _i=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:b,maxDate:f,allowDisabledSelection:y,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=m((()=>s&&W(s).isSame(r,"month")?W(s):l&&W(l).isSame(r,"month")?W(l):W().isSame(r,"month")?W():b&&r.isSame(W(b),"month")?W(b):W(r).startOf("month")),[s,r,l,b]),w=e=>{const t=W(e);if(fa.isWithinRange(t,b?W(b):void 0,f?W(f):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=h((()=>fa.generateDays(r)),[r]),$=h((()=>D()),[D]),[E,C]=o(""),[B,A]=o(""),S=(e,r)=>{r&&!y||d(e)},k=(e,r)=>{r&&!y||(A(e),c(e))},M=e=>{A(e),c(e)},z=()=>{A(""),c("")};return e(wi,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),A(""),c(""))},children:[F[0].map(((e,r)=>t(Fi,{"aria-hidden":!0,children:W(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t($i,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:z,children:e.map(((e,i)=>t(Ri,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:B,focusDate:E,currentFocus:n,minDate:b,maxDate:f,disabledDates:a,allowDisabledSelection:y,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:S,onHover:k,onFocus:M,setFocusCell:w,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},Li=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=fa.isDisabledDay(e,s,i,o),h=!g||l,{start:b,end:m}=n?fa.getFixedRangeStartEnd($a.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?fa.getFixedRangeStartEnd($a.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(b,m,"day","[]"),v=!!a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(b,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(ji,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===b,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==b&&(r.circleLeft="selected-hover")),r})()))},Hi=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=h((()=>fa.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!W(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(wi,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Fi,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t($i,{onMouseLeave:p,children:e.map(((e,i)=>t(Li,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))},i)))]})},Ii=y.div`
    width: 100%;
    background: ${Jt.bg};
`,Wi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=fa.isDisabledDay(e,s,i,o),h=!g||l,b={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(ji,Object.assign({},b,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};W.extend(ca);const Ni=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=h((()=>fa.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(wi,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(Fi,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t($i,{onMouseLeave:p,children:e.map(((e,i)=>t(Wi,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))},i)))]})},Pi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=fa.isDisabledDay(e,s,i,o),g=!u||l,{start:h,end:b}=fa.getWeekStartEnd($a.toDayjs(n)),{start:m,end:f}=fa.getWeekStartEnd($a.toDayjs(a)),y=n&&e.isBetween(h,b,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(h)||p&&e.isSame(m),x=y&&e.isSame(b)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(ji,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Ui=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=h((()=>fa.generateDays(r)),[r]),[g,b]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!W(e).isSame(t,"month")&&b("")},f=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(wi,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(Fi,{children:W(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t($i,{onMouseLeave:y,children:e.map(((e,i)=>t(Pi,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))},i)))]})},Vi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:h,allowDisabledSelection:m,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const w=i(null),F=i(void 0);b(D,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),C(t)},E=e=>{B(e)},C=e=>{n&&n(e)},B=e=>{a&&a(e)},A=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Ii,{children:t(Di,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:h,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=w.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),A(e)),F.current=e},initialCalendarDate:y,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(Ui,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:m,onSelect:$,onHover:E});case"fixed-range":return t(Hi,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:m,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(Ni,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:h,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(_i,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:h,isNewSelection:f,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=w.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),Zi=a.forwardRef(((e,r)=>{var{width:n}=e,a=_(e,["width"]);return t(oa,{$width:n,"data-testid":"calendar-dropdown",children:t(Vi,Object.assign({ref:r},a))})})),Ki=y.button`
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
                    background-color: ${Jt.bg};
                    border: ${Gt["width-010"]} ${Gt.solid}
                        ${Jt["border-primary"]};
                    color: ${Jt["text-primary"]};

                    :hover {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${Jt.bg};
                    border: ${Gt["width-010"]} ${Gt.solid}
                        ${Jt.border};
                    color: ${Jt["text-primary"]};

                    :hover {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;default:return p`
                    background-color: ${Jt["bg-primary"]};
                    border: none;
                    color: ${Jt["text-inverse"]};

                    :hover {
                        background-color: ${Jt["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Jt["bg-disabled"]};
        border: ${Gt["width-010"]} ${Gt.solid}
            ${Jt["border-disabled"]};
        color: ${Jt["text-disabled"]};
        cursor: not-allowed;
    }
`,Ji=y(a.forwardRef(((e,r)=>{var{"data-testid":n,styleType:a="primary",children:i,sizeType:o="default",type:s="button"}=e,l=_(e,["data-testid","styleType","children","sizeType","type"]);return t(Ki,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:a},l,{children:i}))})))`
    margin: ${Qt["spacing-8"]};
`,Xi=y.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Jt["bg-strong"]};
    border-radius: ${en.sm};
`,qi=y(Xa.Default)`
    color: ${e=>e.$enableDateClick?Jt["text-primary"]:Jt.text};
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
`,Gi=r=>{var{selectedDate:n,minDate:a,maxDate:i,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:d,onLeftArrowClick:c,onRightArrowClick:u,onCalendarDateSelect:g,dropdownRootNode:h}=r,b=_(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const m=$a.toDayjs(n),f=$a.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),y=$a.isSame(n,W())&&d?"Today":m.format(l?"ddd":"dddd"),[p,v]=o(!1),x=e=>{g&&g(e),v(!p)},D=()=>{v(!1),c(n)},w=()=>{v(!1),u(n)};return t(ia,{enabled:!s,isOpen:p,renderElement:()=>e(Xi,Object.assign({},b,{children:[t(Ji,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!a&&(fa.isDisabledDay(m,void 0,a)||$a.isSame(m,a)),"aria-label":"Previous day",onClick:D,styleType:"light",sizeType:"small",children:t(ei,{})}),t(qi,{onClick:()=>!!g&&!s&&v(!p),$enableDateClick:!!g&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!g||s,children:`${f}, ${y}`}),t(Ji,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!i&&(fa.isDisabledDay(m,void 0,void 0,i)||$a.isSame(m,i)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small",children:t(ri,{})})]})),renderDropdown:({elementWidth:e})=>t(Zi,{variant:"single",initialCalendarDate:n,value:n,minDate:a,maxDate:i,onSelect:x,width:e}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8,rootNode:h})};export{Gi as DateNavigator};
//# sourceMappingURL=index.js.map
