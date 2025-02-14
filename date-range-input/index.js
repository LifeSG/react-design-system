import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as g,useImperativeHandle as m,useReducer as f}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import p,{css as v,keyframes as x,useTheme as D}from"styled-components";import{useFloatingTree as w,useFloating as $,autoUpdate as F,offset as E,flip as S,shift as C,limitShift as O,size as M,useTransitionStyles as B,useClick as A,useDismiss as k,useInteractions as z,FloatingPortal as Y,FloatingFocusManager as j}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as R}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as H}from"@lifesg/react-icons";function L(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P={exports:{}};P.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof S||!(!e||!e[D])},$=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},F=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=p;E.l=$,E.i=w,E.w=function(e,r){return F(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=F(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return F(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<F(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case h:return g(p+"Hours",0);case o:return g(p+"Minutes",1);case i:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),m=function(e){var r=F(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var g,m=this,f=E.p(h),y=F(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case s:g=(v-p)/864e5;break;case o:g=v/t;break;case i:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:E.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),C=S.prototype;return F.prototype=C,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){C[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),F.extend=function(e,r){return e.$i||(e(r,S,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=x[v],F.Ls=x,F.p={},F}();var N=W(P.exports),V=Array.isArray,Z="object"==typeof I&&I&&I.Object===Object&&I,U="object"==typeof self&&self&&self.Object===Object&&self,K=Z||U||Function("return this")(),J=K.Symbol,q=J,X=Object.prototype,G=X.hasOwnProperty,Q=X.toString,ee=q?q.toStringTag:void 0;var re=function(e){var r=G.call(e,ee),t=e[ee];try{e[ee]=void 0;var n=!0}catch(e){}var a=Q.call(e);return n&&(r?e[ee]=t:delete e[ee]),a},te=Object.prototype.toString;var ne=re,ae=function(e){return te.call(e)},ie=J?J.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ie&&ie in Object(e)?ne(e):ae(e)};var se=oe,le=function(e){return null!=e&&"object"==typeof e};var de=function(e){return"symbol"==typeof e||le(e)&&"[object Symbol]"==se(e)},ce=V,ue=de,he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,be=/^\w*$/;var ge=function(e,r){if(ce(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ue(e))||(be.test(e)||!he.test(e)||null!=r&&e in Object(r))};var me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},fe=oe,ye=me;var pe,ve=function(e){if(!ye(e))return!1;var r=fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},xe=K["__core-js_shared__"],De=(pe=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var we=function(e){return!!De&&De in e},$e=Function.prototype.toString;var Fe=ve,Ee=we,Se=me,Ce=function(e){if(null!=e){try{return $e.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=/^\[object .+?Constructor\]$/,Me=Function.prototype,Be=Object.prototype,Ae=Me.toString,ke=Be.hasOwnProperty,ze=RegExp("^"+Ae.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},je=function(e){return!(!Se(e)||Ee(e))&&(Fe(e)?ze:Oe).test(Ce(e))},Te=Ye;var Re=function(e,r){var t=Te(e,r);return je(t)?t:void 0},_e=Re(Object,"create"),He=_e;var Le=function(){this.__data__=He?He(null):{},this.size=0};var Ie=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},We=_e,Pe=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;if(We){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Pe.call(r,e)?r[e]:void 0},Ve=_e,Ze=Object.prototype.hasOwnProperty;var Ue=function(e){var r=this.__data__;return Ve?void 0!==r[e]:Ze.call(r,e)},Ke=_e;var Je=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ke&&void 0===r?"__lodash_hash_undefined__":r,this},qe=Le,Xe=Ie,Ge=Ne,Qe=Ue,er=Je;function rr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}rr.prototype.clear=qe,rr.prototype.delete=Xe,rr.prototype.get=Ge,rr.prototype.has=Qe,rr.prototype.set=er;var tr=rr;var nr=function(){this.__data__=[],this.size=0};var ar=function(e,r){return e===r||e!=e&&r!=r};var ir=function(e,r){for(var t=e.length;t--;)if(ar(e[t][0],r))return t;return-1},or=ir,sr=Array.prototype.splice;var lr=function(e){var r=this.__data__,t=or(r,e);return!(t<0)&&(t==r.length-1?r.pop():sr.call(r,t,1),--this.size,!0)},dr=ir;var cr=function(e){var r=this.__data__,t=dr(r,e);return t<0?void 0:r[t][1]},ur=ir;var hr=function(e){return ur(this.__data__,e)>-1},br=ir;var gr=function(e,r){var t=this.__data__,n=br(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},mr=nr,fr=lr,yr=cr,pr=hr,vr=gr;function xr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}xr.prototype.clear=mr,xr.prototype.delete=fr,xr.prototype.get=yr,xr.prototype.has=pr,xr.prototype.set=vr;var Dr=xr,wr=Re(K,"Map"),$r=tr,Fr=Dr,Er=wr;var Sr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Cr=function(e,r){var t=e.__data__;return Sr(r)?t["string"==typeof r?"string":"hash"]:t.map},Or=Cr;var Mr=function(e){var r=Or(this,e).delete(e);return this.size-=r?1:0,r},Br=Cr;var Ar=function(e){return Br(this,e).get(e)},kr=Cr;var zr=function(e){return kr(this,e).has(e)},Yr=Cr;var jr=function(e,r){var t=Yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Tr=function(){this.size=0,this.__data__={hash:new $r,map:new(Er||Fr),string:new $r}},Rr=Mr,_r=Ar,Hr=zr,Lr=jr;function Ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ir.prototype.clear=Tr,Ir.prototype.delete=Rr,Ir.prototype.get=_r,Ir.prototype.has=Hr,Ir.prototype.set=Lr;var Wr=Ir;function Pr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Pr.Cache||Wr),t}Pr.Cache=Wr;var Nr=Pr;var Vr=function(e){var r=Nr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g,Kr=Vr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Zr,(function(e,t,n,a){r.push(n?a.replace(Ur,"$1"):t||e)})),r}));var Jr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},qr=V,Xr=de,Gr=J?J.prototype:void 0,Qr=Gr?Gr.toString:void 0;var et=function e(r){if("string"==typeof r)return r;if(qr(r))return Jr(r,e)+"";if(Xr(r))return Qr?Qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},rt=et;var tt=V,nt=ge,at=Kr,it=function(e){return null==e?"":rt(e)};var ot=de;var st=function(e,r){return tt(e)?e:nt(e,r)?[e]:at(it(e))},lt=function(e){if("string"==typeof e||ot(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var dt=function(e,r){for(var t=0,n=(r=st(r,e)).length;null!=e&&t<n;)e=e[lt(r[t++])];return t&&t==n?e:void 0};var ct=W((function(e,r,t){var n=null==e?void 0:dt(e,r);return void 0===n?t:n}));const ut=(e,r,t)=>ct(t,r)||ct(e,r),ht=(e,r)=>{const t=r||e.defaultValue;return ct(e.collections,t)},bt={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},gt=e=>r=>{var t;const n=r.theme,a=ht(bt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ut(a,e,n.overrides.motion):a[e]},mt={"duration-150":gt("duration-150"),"duration-250":gt("duration-250"),"duration-350":gt("duration-350"),"duration-500":gt("duration-500"),"duration-800":gt("duration-800"),"duration-1000":gt("duration-1000"),"ease-default":gt("ease-default"),"ease-standard":gt("ease-standard"),"ease-entrance":gt("ease-entrance"),"ease-exit":gt("ease-exit")},ft={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,a=ht(ft,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?ut(a,e,n.overrides.primitiveColour):a[e]},pt={"brand-10":yt("brand-10"),"brand-20":yt("brand-20"),"brand-30":yt("brand-30"),"brand-40":yt("brand-40"),"brand-50":yt("brand-50"),"brand-60":yt("brand-60"),"brand-70":yt("brand-70"),"brand-80":yt("brand-80"),"brand-90":yt("brand-90"),"brand-95":yt("brand-95"),"brand-100":yt("brand-100"),"primary-10":yt("primary-10"),"primary-20":yt("primary-20"),"primary-30":yt("primary-30"),"primary-40":yt("primary-40"),"primary-50":yt("primary-50"),"primary-60":yt("primary-60"),"primary-70":yt("primary-70"),"primary-80":yt("primary-80"),"primary-90":yt("primary-90"),"primary-95":yt("primary-95"),"primary-100":yt("primary-100"),"secondary-10":yt("secondary-10"),"secondary-20":yt("secondary-20"),"secondary-30":yt("secondary-30"),"secondary-40":yt("secondary-40"),"secondary-50":yt("secondary-50"),"secondary-60":yt("secondary-60"),"secondary-70":yt("secondary-70"),"secondary-80":yt("secondary-80"),"secondary-90":yt("secondary-90"),"secondary-95":yt("secondary-95"),"secondary-100":yt("secondary-100"),"neutral-10":yt("neutral-10"),"neutral-20":yt("neutral-20"),"neutral-30":yt("neutral-30"),"neutral-40":yt("neutral-40"),"neutral-50":yt("neutral-50"),"neutral-60":yt("neutral-60"),"neutral-70":yt("neutral-70"),"neutral-80":yt("neutral-80"),"neutral-90":yt("neutral-90"),"neutral-95":yt("neutral-95"),"neutral-100":yt("neutral-100"),"success-10":yt("success-10"),"success-20":yt("success-20"),"success-30":yt("success-30"),"success-40":yt("success-40"),"success-50":yt("success-50"),"success-60":yt("success-60"),"success-70":yt("success-70"),"success-80":yt("success-80"),"success-90":yt("success-90"),"success-95":yt("success-95"),"success-100":yt("success-100"),"warning-10":yt("warning-10"),"warning-20":yt("warning-20"),"warning-30":yt("warning-30"),"warning-40":yt("warning-40"),"warning-50":yt("warning-50"),"warning-60":yt("warning-60"),"warning-70":yt("warning-70"),"warning-80":yt("warning-80"),"warning-90":yt("warning-90"),"warning-95":yt("warning-95"),"warning-100":yt("warning-100"),"error-10":yt("error-10"),"error-20":yt("error-20"),"error-30":yt("error-30"),"error-40":yt("error-40"),"error-50":yt("error-50"),"error-60":yt("error-60"),"error-70":yt("error-70"),"error-80":yt("error-80"),"error-90":yt("error-90"),"error-95":yt("error-95"),"error-100":yt("error-100"),"info-10":yt("info-10"),"info-20":yt("info-20"),"info-30":yt("info-30"),"info-40":yt("info-40"),"info-50":yt("info-50"),"info-60":yt("info-60"),"info-70":yt("info-70"),"info-80":yt("info-80"),"info-90":yt("info-90"),"info-95":yt("info-95"),"info-100":yt("info-100"),white:yt("white"),black:yt("black"),"primary-inverse":yt("primary-inverse")},vt={text:yt("neutral-20"),"text-subtle":yt("neutral-30"),"text-subtler":yt("neutral-50"),"text-subtlest":yt("neutral-60"),"text-primary":yt("primary-50"),"text-hover":yt("primary-40"),"text-selected":yt("primary-50"),"text-selected-hover":yt("primary-40"),"text-disabled":yt("neutral-50"),"text-disabled-subtle":yt("neutral-60"),"text-disabled-subtlest":yt("neutral-80"),"text-selected-disabled":yt("neutral-20"),"text-success":yt("success-40"),"text-warning":yt("warning-40"),"text-error":yt("error-40"),"text-info":yt("info-40"),"text-inverse":yt("white"),icon:yt("neutral-50"),"icon-subtle":yt("neutral-60"),"icon-strongest":yt("neutral-20"),"icon-primary":yt("primary-50"),"icon-primary-subtle":yt("primary-60"),"icon-primary-subtlest":yt("primary-70"),"icon-hover":yt("primary-40"),"icon-selected":yt("primary-50"),"icon-selected-hover":yt("primary-40"),"icon-disabled":yt("neutral-50"),"icon-disabled-subtle":yt("neutral-60"),"icon-selected-disabled":yt("neutral-60"),"icon-success":yt("success-50"),"icon-warning":yt("warning-60"),"icon-error":yt("error-50"),"icon-error-strong":yt("error-40"),"icon-info":yt("info-50"),"icon-inverse":yt("white"),"icon-primary-inverse":yt("primary-inverse"),border:yt("neutral-90"),"border-strong":yt("neutral-70"),"border-stronger":yt("neutral-50"),"border-primary":yt("primary-50"),"border-primary-subtle":yt("primary-60"),"border-hover":yt("primary-90"),"border-hover-strong":yt("primary-60"),"border-selected":yt("primary-50"),"border-selected-subtle":yt("primary-70"),"border-selected-subtlest":yt("primary-90"),"border-selected-hover":yt("primary-40"),"border-focus":yt("primary-60"),"border-focus-strong":yt("primary-50"),"border-disabled":yt("neutral-90"),"border-selected-disabled":yt("neutral-70"),"border-success":yt("success-60"),"border-warning":yt("warning-60"),"border-error":yt("error-60"),"border-error-focus":yt("error-60"),"border-error-focus-strong":yt("error-40"),"border-error-strong":yt("error-40"),"border-info":yt("info-60"),bg:yt("white"),"bg-strong":yt("neutral-100"),"bg-stronger":yt("neutral-95"),"bg-strongest":yt("neutral-90"),"bg-hover":yt("primary-95"),"bg-hover-strong":yt("primary-90"),"bg-hover-subtle":yt("primary-100"),"bg-hover-neutral":yt("neutral-100"),"bg-hover-neutral-strong":yt("neutral-90"),"bg-selected":yt("primary-95"),"bg-selected-hover":yt("primary-90"),"bg-selected-strong":yt("primary-90"),"bg-selected-stronger":yt("primary-70"),"bg-selected-strongest":yt("primary-50"),"bg-selected-strongest-hover":yt("primary-40"),"bg-disabled":yt("neutral-95"),"bg-selected-disabled":yt("neutral-95"),"bg-selected-stronger-disabled":yt("neutral-70"),"bg-success":yt("success-100"),"bg-success-hover":yt("success-95"),"bg-success-strong":yt("success-50"),"bg-success-strong-hover":yt("success-40"),"bg-warning":yt("warning-100"),"bg-warning-hover":yt("warning-95"),"bg-warning-strong":yt("warning-50"),"bg-warning-strong-hover":yt("warning-40"),"bg-info":yt("info-100"),"bg-info-hover":yt("info-95"),"bg-info-strong":yt("info-50"),"bg-info-strong-hover":yt("info-40"),"bg-error":yt("error-100"),"bg-error-hover":yt("error-95"),"bg-error-strong":yt("error-50"),"bg-error-strong-hover":yt("error-40"),"bg-inverse":yt("neutral-20"),"bg-inverse-subtle":yt("neutral-30"),"bg-inverse-subtler":yt("neutral-50"),"bg-inverse-subtlest":yt("neutral-60"),"bg-inverse-hover":yt("neutral-40"),"bg-primary":yt("primary-50"),"bg-primary-subtle":yt("primary-60"),"bg-primary-subtler":yt("primary-95"),"bg-primary-subtlest":yt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":yt("primary-40"),"bg-primary-subtlest-hover":yt("primary-90"),"bg-primary-subtlest-selected":yt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:yt("primary-50"),"hyperlink-hover":yt("primary-40"),"hyperlink-visited":yt("primary-40"),"hyperlink-inverse":yt("primary-inverse"),"focus-ring":yt("black"),"focus-ring-inverse":yt("white")},xt={collections:{lifesg:vt,bookingsg:vt,rbs:vt,mylegacy:vt,ccube:vt},defaultValue:"lifesg"},Dt=e=>r=>{var t;const n=r.theme,a=ht(xt,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?ut(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},wt={text:Dt("text"),"text-subtle":Dt("text-subtle"),"text-subtler":Dt("text-subtler"),"text-subtlest":Dt("text-subtlest"),"text-primary":Dt("text-primary"),"text-hover":Dt("text-hover"),"text-selected":Dt("text-selected"),"text-selected-hover":Dt("text-selected-hover"),"text-disabled":Dt("text-disabled"),"text-disabled-subtle":Dt("text-disabled-subtle"),"text-disabled-subtlest":Dt("text-disabled-subtlest"),"text-selected-disabled":Dt("text-selected-disabled"),"text-success":Dt("text-success"),"text-warning":Dt("text-warning"),"text-error":Dt("text-error"),"text-info":Dt("text-info"),"text-inverse":Dt("text-inverse"),icon:Dt("icon"),"icon-subtle":Dt("icon-subtle"),"icon-strongest":Dt("icon-strongest"),"icon-primary":Dt("icon-primary"),"icon-primary-subtle":Dt("icon-primary-subtle"),"icon-primary-subtlest":Dt("icon-primary-subtlest"),"icon-hover":Dt("icon-hover"),"icon-selected":Dt("icon-selected"),"icon-selected-hover":Dt("icon-selected-hover"),"icon-disabled":Dt("icon-disabled"),"icon-disabled-subtle":Dt("icon-disabled-subtle"),"icon-selected-disabled":Dt("icon-selected-disabled"),"icon-success":Dt("icon-success"),"icon-warning":Dt("icon-warning"),"icon-error":Dt("icon-error"),"icon-error-strong":Dt("icon-error-strong"),"icon-info":Dt("icon-info"),"icon-inverse":Dt("icon-inverse"),"icon-primary-inverse":Dt("icon-primary-inverse"),border:Dt("border"),"border-strong":Dt("border-strong"),"border-stronger":Dt("border-stronger"),"border-primary":Dt("border-primary"),"border-primary-subtle":Dt("border-primary-subtle"),"border-hover":Dt("border-hover"),"border-hover-strong":Dt("border-hover-strong"),"border-selected":Dt("border-selected"),"border-selected-subtle":Dt("border-selected-subtle"),"border-selected-subtlest":Dt("border-selected-subtlest"),"border-selected-hover":Dt("border-selected-hover"),"border-focus":Dt("border-focus"),"border-focus-strong":Dt("border-focus-strong"),"border-disabled":Dt("border-disabled"),"border-selected-disabled":Dt("border-selected-disabled"),"border-success":Dt("border-success"),"border-warning":Dt("border-warning"),"border-error":Dt("border-error"),"border-error-focus":Dt("border-error-focus"),"border-error-focus-strong":Dt("border-error-focus-strong"),"border-error-strong":Dt("border-error-strong"),"border-info":Dt("border-info"),bg:Dt("bg"),"bg-strong":Dt("bg-strong"),"bg-stronger":Dt("bg-stronger"),"bg-strongest":Dt("bg-strongest"),"bg-hover":Dt("bg-hover"),"bg-hover-strong":Dt("bg-hover-strong"),"bg-hover-subtle":Dt("bg-hover-subtle"),"bg-hover-neutral":Dt("bg-hover-neutral"),"bg-hover-neutral-strong":Dt("bg-hover-neutral-strong"),"bg-selected":Dt("bg-selected"),"bg-selected-hover":Dt("bg-selected-hover"),"bg-selected-strong":Dt("bg-selected-strong"),"bg-selected-stronger":Dt("bg-selected-stronger"),"bg-selected-strongest":Dt("bg-selected-strongest"),"bg-selected-strongest-hover":Dt("bg-selected-strongest-hover"),"bg-disabled":Dt("bg-disabled"),"bg-selected-disabled":Dt("bg-selected-disabled"),"bg-selected-stronger-disabled":Dt("bg-selected-stronger-disabled"),"bg-success":Dt("bg-success"),"bg-success-hover":Dt("bg-success-hover"),"bg-success-strong":Dt("bg-success-strong"),"bg-success-strong-hover":Dt("bg-success-strong-hover"),"bg-warning":Dt("bg-warning"),"bg-warning-hover":Dt("bg-warning-hover"),"bg-warning-strong":Dt("bg-warning-strong"),"bg-warning-strong-hover":Dt("bg-warning-strong-hover"),"bg-info":Dt("bg-info"),"bg-info-hover":Dt("bg-info-hover"),"bg-info-strong":Dt("bg-info-strong"),"bg-info-strong-hover":Dt("bg-info-strong-hover"),"bg-error":Dt("bg-error"),"bg-error-hover":Dt("bg-error-hover"),"bg-error-strong":Dt("bg-error-strong"),"bg-error-strong-hover":Dt("bg-error-strong-hover"),"bg-inverse":Dt("bg-inverse"),"bg-inverse-subtle":Dt("bg-inverse-subtle"),"bg-inverse-subtler":Dt("bg-inverse-subtler"),"bg-inverse-subtlest":Dt("bg-inverse-subtlest"),"bg-inverse-hover":Dt("bg-inverse-hover"),"bg-primary":Dt("bg-primary"),"bg-primary-subtle":Dt("bg-primary-subtle"),"bg-primary-subtler":Dt("bg-primary-subtler"),"bg-primary-subtlest":Dt("bg-primary-subtlest"),"bg-available":Dt("bg-available"),"bg-primary-hover":Dt("bg-primary-hover"),"bg-primary-subtlest-hover":Dt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Dt("bg-primary-subtlest-selected"),"overlay-strong":Dt("overlay-strong"),"overlay-subtle":Dt("overlay-subtle"),hyperlink:Dt("hyperlink"),"hyperlink-hover":Dt("hyperlink-hover"),"hyperlink-visited":Dt("hyperlink-visited"),"hyperlink-inverse":Dt("hyperlink-inverse"),"focus-ring":Dt("focus-ring"),"focus-ring-inverse":Dt("focus-ring-inverse")},$t={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:St["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:wt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return v`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},Ft=e=>r=>{var t;const n=r.theme,a=ht($t,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ut(a,e,n.overrides.border)}px`:`${a[e]}px`},Et=e=>1===e.length&&"theme"in e[0],St={"width-010":Ft("width-010"),"width-020":Ft("width-020"),"width-040":Ft("width-040"),solid:(Ct="solid",e=>{var r;const t=e.theme,n=ht($t,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ut(n,Ct,t.overrides.border):n[Ct];return"function"==typeof a?a(e):a}),"dashed-default":(e=>(...r)=>t=>{var n;const a=Et(r)?[]:r,i=Et(r)?r[0]:t,o=i.theme,s=ht($t,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?ut(s,e,o.overrides.border):s[e])(...a)(i)})("dashed-default")};var Ct;const Ot={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Mt=e=>r=>{var t;const n=r.theme,a=ht(Ot,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ut(a,e,n.overrides.breakpoint):a[e],i},Bt={"xxs-min":Mt("xxs-min"),"xxs-max":Mt("xxs-max"),"xs-min":Mt("xs-min"),"xs-max":Mt("xs-max"),"sm-min":Mt("sm-min"),"sm-max":Mt("sm-max"),"md-min":Mt("md-min"),"md-max":Mt("md-max"),"lg-min":Mt("lg-min"),"lg-max":Mt("lg-max"),"xl-min":Mt("xl-min"),"xl-max":Mt("xl-max"),"xxl-min":Mt("xxl-min"),"xxs-column":Mt("xxs-column"),"xs-column":Mt("xs-column"),"sm-column":Mt("sm-column"),"md-column":Mt("md-column"),"lg-column":Mt("lg-column"),"xl-column":Mt("xl-column"),"xxl-column":Mt("xxl-column"),"xxs-gutter":Mt("xxs-gutter"),"xs-gutter":Mt("xs-gutter"),"sm-gutter":Mt("sm-gutter"),"md-gutter":Mt("md-gutter"),"lg-gutter":Mt("lg-gutter"),"xl-gutter":Mt("xl-gutter"),"xxl-gutter":Mt("xxl-gutter"),"xxs-margin":Mt("xxs-margin"),"xs-margin":Mt("xs-margin"),"sm-margin":Mt("sm-margin"),"md-margin":Mt("md-margin"),"lg-margin":Mt("lg-margin"),"xl-margin":Mt("xl-margin"),"xxl-margin":Mt("xxl-margin")},At=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Bt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),kt={MaxWidth:At("max-width"),MinWidth:At("min-width")},zt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Yt={collections:{lifesg:zt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:zt,mylegacy:zt,ccube:zt},defaultValue:"lifesg"},jt=e=>r=>{var t;const n=r.theme,a=ht(Yt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ut(a,e,n.overrides.fontSpec):a[e]},Tt={"header-size-xxl":jt("header-size-xxl"),"header-size-xl":jt("header-size-xl"),"header-size-lg":jt("header-size-lg"),"header-size-md":jt("header-size-md"),"header-size-sm":jt("header-size-sm"),"header-size-xs":jt("header-size-xs"),"header-lh-xxl":jt("header-lh-xxl"),"header-lh-xl":jt("header-lh-xl"),"header-lh-lg":jt("header-lh-lg"),"header-lh-md":jt("header-lh-md"),"header-lh-sm":jt("header-lh-sm"),"header-lh-xs":jt("header-lh-xs"),"header-ls-xxl":jt("header-ls-xxl"),"header-ls-xl":jt("header-ls-xl"),"header-ls-lg":jt("header-ls-lg"),"header-ls-md":jt("header-ls-md"),"header-ls-sm":jt("header-ls-sm"),"header-ls-xs":jt("header-ls-xs"),"weight-light":jt("weight-light"),"weight-regular":jt("weight-regular"),"weight-semibold":jt("weight-semibold"),"weight-bold":jt("weight-bold"),"font-family":jt("font-family"),"body-size-baseline":jt("body-size-baseline"),"body-size-md":jt("body-size-md"),"body-size-sm":jt("body-size-sm"),"body-size-xs":jt("body-size-xs"),"body-lh-baseline":jt("body-lh-baseline"),"body-lh-md":jt("body-lh-md"),"body-lh-sm":jt("body-lh-sm"),"body-lh-xs":jt("body-lh-xs"),"body-ls-baseline":jt("body-ls-baseline"),"body-ls-md":jt("body-ls-md"),"body-ls-sm":jt("body-ls-sm"),"body-ls-xs":jt("body-ls-xs"),"formlabel-size-baseline":jt("formlabel-size-baseline"),"formlabel-size-lg":jt("formlabel-size-lg"),"formlabel-lh-baseline":jt("formlabel-lh-baseline"),"formlabel-lh-lg":jt("formlabel-lh-lg"),"formlabel-ls-baseline":jt("formlabel-ls-baseline"),"formlabel-ls-lg":jt("formlabel-ls-lg")},Rt={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,a=ht(Rt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ut(a,e,n.overrides.radius)}px`:`${a[e]}px`},Ht={none:_t("none"),xs:_t("xs"),sm:_t("sm"),md:_t("md"),lg:_t("lg"),full:_t("full")},Lt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},It=e=>r=>{var t;const n=r.theme,a=ht(Lt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ut(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Wt={"spacing-0":It("spacing-0"),"spacing-4":It("spacing-4"),"spacing-8":It("spacing-8"),"spacing-12":It("spacing-12"),"spacing-16":It("spacing-16"),"spacing-20":It("spacing-20"),"spacing-24":It("spacing-24"),"spacing-32":It("spacing-32"),"spacing-40":It("spacing-40"),"spacing-48":It("spacing-48"),"spacing-64":It("spacing-64"),"spacing-72":It("spacing-72"),"layout-xs":It("layout-xs"),"layout-sm":It("layout-sm"),"layout-md":It("layout-md"),"layout-lg":It("layout-lg"),"layout-xl":It("layout-xl"),"layout-xxl":It("layout-xxl"),"layout-xxxl":It("layout-xxxl")},Pt=(e,r,t,n)=>v`
    font-family: ${jt("font-family")};
    font-size: ${jt(e)};
    font-weight: ${jt(r)};
    line-height: ${jt(t)};
    letter-spacing: ${jt(n)};
`,Nt={"header-xxl-light":Pt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Pt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Pt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Pt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Pt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Pt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Pt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Pt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Pt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Pt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Pt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Pt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Pt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Pt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Pt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Pt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Pt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Pt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Pt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Pt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Pt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Pt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Pt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Pt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Pt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Pt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Pt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Pt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Pt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Pt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Pt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Pt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Pt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Pt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Pt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Pt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Pt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Pt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Pt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Pt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Pt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Pt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Vt={collections:{lifesg:Nt,bookingsg:Nt,rbs:Nt,mylegacy:Nt,ccube:Nt},defaultValue:"lifesg"},Zt=e=>r=>{var t;const n=r.theme,a=ht(Vt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ut(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Ut={"header-xxl-light":Zt("header-xxl-light"),"header-xxl-regular":Zt("header-xxl-regular"),"header-xxl-semibold":Zt("header-xxl-semibold"),"header-xxl-bold":Zt("header-xxl-bold"),"header-xl-light":Zt("header-xl-light"),"header-xl-regular":Zt("header-xl-regular"),"header-xl-semibold":Zt("header-xl-semibold"),"header-xl-bold":Zt("header-xl-bold"),"header-lg-light":Zt("header-lg-light"),"header-lg-regular":Zt("header-lg-regular"),"header-lg-semibold":Zt("header-lg-semibold"),"header-lg-bold":Zt("header-lg-bold"),"header-md-light":Zt("header-md-light"),"header-md-regular":Zt("header-md-regular"),"header-md-semibold":Zt("header-md-semibold"),"header-md-bold":Zt("header-md-bold"),"header-sm-light":Zt("header-sm-light"),"header-sm-regular":Zt("header-sm-regular"),"header-sm-semibold":Zt("header-sm-semibold"),"header-sm-bold":Zt("header-sm-bold"),"header-xs-light":Zt("header-xs-light"),"header-xs-regular":Zt("header-xs-regular"),"header-xs-semibold":Zt("header-xs-semibold"),"header-xs-bold":Zt("header-xs-bold"),"body-baseline-light":Zt("body-baseline-light"),"body-baseline-regular":Zt("body-baseline-regular"),"body-baseline-semibold":Zt("body-baseline-semibold"),"body-baseline-bold":Zt("body-baseline-bold"),"body-md-light":Zt("body-md-light"),"body-md-regular":Zt("body-md-regular"),"body-md-semibold":Zt("body-md-semibold"),"body-md-bold":Zt("body-md-bold"),"body-sm-light":Zt("body-sm-light"),"body-sm-regular":Zt("body-sm-regular"),"body-sm-semibold":Zt("body-sm-semibold"),"body-sm-bold":Zt("body-sm-bold"),"body-xs-light":Zt("body-xs-light"),"body-xs-regular":Zt("body-xs-regular"),"body-xs-semibold":Zt("body-xs-semibold"),"body-xs-bold":Zt("body-xs-bold"),"formlabel-baseline-semibold":Zt("formlabel-baseline-semibold"),"formlabel-lg-semibold":Zt("formlabel-lg-semibold")},Kt=Object.assign(Object.assign({},wt),{Primitive:pt}),Jt=Object.assign(Object.assign({},Ut),{Spec:Tt}),qt=mt,Xt=St,Gt=Wt,Qt=Ht,en=Bt,rn=kt,tn=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=tn(e.$variant);return v`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const nn=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Gt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>tn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Qt.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Kt["border-focus"]};
    }
`,an=p.button`
    ${nn}
    cursor: pointer;
`;p.div`
    ${nn}
`;const on=x`
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
    border: ${Xt["width-010"]} ${Xt.solid} ${Kt.border};
    border-radius: ${Qt.sm};
    background: ${Kt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Kt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Kt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${on} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?v`
                background: ${Kt["bg-disabled"]};

                ${an} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Kt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${an} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?v`
                border-color: ${Kt["border-error"]};

                :focus-within {
                    border-color: ${Kt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Kt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${qt["duration-250"]} ${qt["ease-default"]};
    margin-left: ${Gt["spacing-16"]};
`,p(y)`
    color: ${Kt.icon};
`,p.div`
    height: 1px;
    background: ${Kt.border};
    margin: 0 ${Gt["spacing-8"]};
`,p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return v`
                color: ${Kt["text-disabled"]};
            `}}
`;p(p.div`
    ${e=>"small"===e.$variant?Jt["body-md-regular"]:Jt["body-baseline-regular"]}
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
    color: ${Kt["text-subtler"]};
`;var sn=function(e,r){return sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},sn(e,r)};var ln=function(){return ln=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},ln.apply(this,arguments)};var dn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var cn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},un="object"==typeof dn&&dn&&dn.Object===Object&&dn,hn="object"==typeof self&&self&&self.Object===Object&&self,bn=un||hn||Function("return this")(),gn=bn,mn=function(){return gn.Date.now()},fn=/\s/;var yn=function(e){for(var r=e.length;r--&&fn.test(e.charAt(r)););return r},pn=/^\s+/;var vn=function(e){return e?e.slice(0,yn(e)+1).replace(pn,""):e},xn=bn.Symbol,Dn=xn,wn=Object.prototype,$n=wn.hasOwnProperty,Fn=wn.toString,En=Dn?Dn.toStringTag:void 0;var Sn=function(e){var r=$n.call(e,En),t=e[En];try{e[En]=void 0;var n=!0}catch(e){}var a=Fn.call(e);return n&&(r?e[En]=t:delete e[En]),a},Cn=Object.prototype.toString;var On=Sn,Mn=function(e){return Cn.call(e)},Bn=xn?xn.toStringTag:void 0;var An=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Bn&&Bn in Object(e)?On(e):Mn(e)},kn=function(e){return null!=e&&"object"==typeof e};var zn=vn,Yn=cn,jn=function(e){return"symbol"==typeof e||kn(e)&&"[object Symbol]"==An(e)},Tn=/^[-+]0x[0-9a-f]+$/i,Rn=/^0b[01]+$/i,_n=/^0o[0-7]+$/i,Hn=parseInt;var Ln=cn,In=mn,Wn=function(e){if("number"==typeof e)return e;if(jn(e))return NaN;if(Yn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Yn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=zn(e);var t=Rn.test(e);return t||_n.test(e)?Hn(e.slice(2),t?2:8):Tn.test(e)?NaN:+e},Pn=Math.max,Nn=Math.min;var Vn=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=In();if(g(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Nn(t,i-(e-d)):t}(e))}function f(e){return s=void 0,h&&n?b(e):(n=a=void 0,o)}function y(){var e=In(),t=g(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Wn(r)||0,Ln(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Pn(Wn(t.maxWait)||0,r):i,h="trailing"in t?!!t.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(In())},y},Zn=Vn,Un=cn;var Kn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Un(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Zn(e,r,{leading:n,maxWait:r,trailing:a})},Jn=function(e,r,t,n){switch(r){case"debounce":return Vn(e,t,n);case"throttle":return Kn(e,t,n);default:return e}},qn=function(e){return"function"==typeof e},Xn=function(){return"undefined"==typeof window},Gn=function(e){return e instanceof Element||e instanceof HTMLDocument},Qn=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&qn(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Xn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Xn())return null;if(r)return document.querySelector(r);if(n&&Gn(n))return n;if(t.targetRef&&Gn(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Qn(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Xn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return qn(r)?"renderProp":qn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Xn()||(t.resizeHandler=Jn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}sn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Xn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var ea,ra=Xn()?u:h;function ta(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return ra((function(){if(!Xn()){var e=Qn(m,w,c,h);v.current=Jn((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Xn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,m,g,p.current]),ln({ref:p},D)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ea||(ea={}));const na=p.div`
    display: flex;
    flex-direction: column;
`,aa=e=>"right"===e?"bottom-end":"bottom-start",ia=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:g=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const v=D(),x=en["sm-max"]({theme:v}),T=i(null),R=i(null),{width:_}=ta({targetRef:T,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:L,floatingStyles:I,context:W}=$({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:F,placement:aa(f),middleware:[E(m),S(),C({limiter:O()}),M({apply({availableHeight:e}){R.current&&Object.assign(R.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),H]}),P=(()=>{const[e,r]=o(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ea.Change,e),t.events.emit(ea.Ready),()=>t.events.off(ea.Change,e)}),[t]),e})(),{isMounted:N,styles:V}=B(W,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=A(W,{enabled:n,toggle:g}),U=k(W,{enabled:n}),{getReferenceProps:K,getFloatingProps:J}=z([Z,U]);return e(r,{children:[t("div",Object.assign({ref:e=>{T.current=e,L.setReference(e)}},K(),{children:c()})),N&&t(Y,{children:t(j,Object.assign({context:W,modal:!1,initialFocus:R,returnFocus:!1},{children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},I),{zIndex:null!==(p=null!=b?b:P)&&void 0!==p?p:50})},J(),{children:t(na,Object.assign({ref:R,style:Object.assign({},V),inert:V.opacity<1?"":void 0},{children:h({elementWidth:_})}))}))}))})]})},oa=p.div`
    --vertical-inset: ${Gt["spacing-24"]};
    --horizontal-inset: ${Gt["spacing-20"]};
    --header-bottom-spacing: ${Gt["spacing-4"]};

    border: ${Xt["width-010"]} ${Xt.solid} ${Kt.border};
    border-radius: ${Qt.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${rn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var sa={exports:{}};sa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],b=c&&c[1];o[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,g,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,g,y,p,v,x)):new Date(m,f,g,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){o[1]=s[g-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var la=W(sa.exports),da={exports:{}};da.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ca=W(da.exports),ua={exports:{}};ua.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ha=W(ua.exports),ba={exports:{}};ba.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ga,ma,fa,ya=W(ba.exports),pa={exports:{}},va=W(pa.exports=(ga={year:0,month:1,day:2,hour:3,minute:4,second:5},ma={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=ma[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ma[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ga[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));N.extend(ca),N.extend(ya),N.extend(ha),N.extend(la),N.extend(va),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=N(r).startOf("week");return xa(t).map((e=>Da(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Da(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(N(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+N(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=N(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?N(n):void 0,a?N(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(fa||(fa={}));const xa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Da=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},wa=[1,3,5,7,8,10,12],$a=[4,6,9,11];var Fa,Ea,Sa,Ca;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":wa.includes(i)?Math.min(a,31).toString():$a.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=N(e,t);return N(r,t).diff(n,"minute")},e.toDayjs=e=>e?N(e):N(),e.addMinutesToTime=(e,r,t="HH:mm")=>N(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>N(e).isSame(N(r),t)}(Fa||(Fa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!N(e).isBefore(n,"day"))||!(!a||!N(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(N(e).isValid())return e}return""}}(Ea||(Ea={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Sa||(Sa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Ca||(Ca={}));const Oa=e=>{const[r,t]=o(e),n=i(e);return[r,b((e=>{n.current=e,t(e)}),[]),n]},Ma=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ba=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Aa=p.div`
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
    animation: ${Ba} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ka=p(Aa)`
    animation-delay: -0.45s;
`,za=p(Aa)`
    animation-delay: -0.3s;
`,Ya=p(Aa)`
    animation-delay: -0.15s;
`,ja=p.button`
    padding: ${Gt["spacing-8"]} ${Gt["spacing-16"]};
    min-width: 4rem;
    border: ${Xt["width-010"]} ${Xt.solid} transparent;
    border-radius: ${Qt.sm};
    transition: all ${qt["duration-250"]} ${qt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${Kt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Kt["border-error-strong"]:Kt["border-primary"]};

                    color: ${e.$buttonIsDanger?Kt["text-error"]:Kt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Kt["bg-hover-neutral"]};
                    }
                `;case"light":return v`
                    background-color: ${Kt.bg};
                    border-color: ${Kt.border};

                    color: ${e.$buttonIsDanger?Kt["text-error"]:Kt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Kt["bg-hover-neutral"]};
                    }
                `;case"link":return v`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Kt["text-error"]:Kt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Kt["bg-hover-neutral"]};
                    }
                `;case"disabled":return v`
                    background-color: ${Kt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Kt["text-disabled"]};
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?Kt["bg-error-strong"]:Kt["bg-primary"]};

                    ${rn.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Kt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Kt["bg-error-strong-hover"]:Kt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return v`
                    height: 2.5rem;
                    ${Jt["body-md-semibold"]}

                    ${rn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return v`
                    height: 4rem;
                    ${Jt["header-md-semibold"]}

                    ${rn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return v`
                    height: 3rem;
                    ${Jt["header-xs-semibold"]}

                    ${rn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ta=p((({color:r,className:n,size:a})=>e(Ma,Object.assign({className:n,$size:a,$color:r},{children:[t(Aa,{id:"inner1"}),t(ka,{id:"inner2"}),t(za,{id:"inner3"}),t(Ya,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Ra=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=L(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ja,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Ta,{}),t("span",{children:a})]}))};Ra.displayName="Button.Default";const _a=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=L(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ja,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Ta,{}),t("span",{children:a})]}))};_a.displayName="Button.Small";const Ha=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=L(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(ja,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Ta,{}),t("span",{children:a})]}))};Ha.displayName="Button.Large";const La={Default:a.forwardRef(Ra),Small:a.forwardRef(_a),Large:a.forwardRef(Ha)},Ia=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Gt["spacing-32"]};
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
                background-color: ${Kt["bg-hover-neutral"]};
            `}
    }
`,Wa=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=L(e,["children","focusHighlight","focusOutline","type"]);return t(Ia,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Pa=v`
    color: ${Kt.icon};
    height: 1rem;
    width: 1rem;
`,Na=p(R)`
    ${Pa}
`,Va=p(_)`
    ${Pa}
`,Za=p(y)`
    ${Pa}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ua=p.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Ka=p.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ja=p.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,qa=p.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Kt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return v`
                display: none;
            `}}
`,Xa=p.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ga=p.div`
    display: flex;
`,Qa=p.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?v`
                display: none;
            `:e.$expanded?v`
                ${Za} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,ei=p.span`
    ${Jt["body-md-regular"]}
    color: ${Kt.text};
`,ri=p.div`
    display: flex;
`,ti=p(Wa)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ni=p.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,ai=p(La.Small)`
    flex: 1;
`,ii=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,oi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Qt.md};
    margin: 0 0.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    // default styles
    ${Jt["body-md-regular"]}
    border-radius: ${Qt.md};
    border: ${Xt["width-010"]} ${Xt.solid} transparent;
    background-clip: border-box;
    color: ${Kt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?v`
                cursor: pointer;
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?v`
                background: ${Kt["bg-selected"]};
                border-color: ${Kt["border-selected"]};
                color: ${Kt["text-selected"]};
                font-weight: ${Jt.Spec["weight-semibold"]};

                ${r&&v`
                    &:hover {
                        background: ${Kt["bg-selected-hover"]};
                        border-color: ${Kt["border-selected-hover"]};
                        color: ${Kt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?v`
                color: ${Kt["text-primary"]};
                font-weight: ${Jt.Spec["weight-semibold"]};
            `:t?v`
                color: ${Kt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?v`
                &:hover {
                    background: ${Kt["bg-selected-hover"]};
                    border-color: ${Kt["border-selected-hover"]};
                    color: ${Kt["text-selected-hover"]};
                    font-weight: ${Jt.Spec["weight-semibold"]};
                }
            `:v`
            &:hover {
                background: ${Kt["bg-hover"]};
                color: ${Kt["text-hover"]};
                font-weight: ${Jt.Spec["weight-semibold"]};
            }
        `}}
`,si=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onMonthSelect:c})=>{const u=g((()=>fa.generateMonths(N(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&o,i="end"===r&&n&&e.isBefore(n,"month")&&o;return t||i},b=e=>{const r=e.format("MMMM"),t=(n=e,!fa.isWithinRange(n,s?N(s):void 0,l?N(l):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":N().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||h(e),interactive:!t||d,month:r,variant:a}};return u.length?t(ii,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=b(e);return t(oi,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n)},{children:i}),i)}))}):null},li=p.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,di=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Jt["body-md-regular"]}
    border-radius: ${Qt.md};
    border: ${Xt["width-010"]} ${Xt.solid} transparent;
    background-clip: border-box;
    color: ${Kt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?v`
                cursor: pointer;
            `:r?v`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?v`
                background: ${Kt["bg-selected"]};
                border-color: ${Kt["border-selected"]};
                color: ${Kt["text-selected"]};
                font-weight: ${Jt.Spec["weight-semibold"]};

                ${r&&v`
                    &:hover {
                        background: ${Kt["bg-selected-hover"]};
                        border-color: ${Kt["border-selected-hover"]};
                        color: ${Kt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?v`
                color: ${Kt["text-primary"]};
                font-weight: ${Jt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?v`
                color: ${Kt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?v`
                &:hover {
                    background: ${Kt["bg-selected-hover"]};
                    border-color: ${Kt["border-selected-hover"]};
                    color: ${Kt["text-selected-hover"]};
                    font-weight: ${Jt.Spec["weight-semibold"]};
                }
            `:v`
            &:hover {
                background: ${Kt["bg-hover"]};
                color: ${Kt["text-hover"]};
                font-weight: ${Jt.Spec["weight-semibold"]};
            }
        `}}
`,ci=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onYearSelect:c})=>{const u=g((()=>fa.generateDecadeOfYears(N(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&o,i="end"===r&&n&&e.isBefore(n,"year")&&o;return t||i},b=e=>{const r=[0,11].includes(u.indexOf(e)),t=e.year(),n=(a=e,!fa.isWithinRange(a,s?N(s):void 0,l?N(l):void 0,"year"));var a;const o=r?"other-decade":i.isSame(e,"year")?"selected-year":N().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:t,variant:o}};return u.length?t(li,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=b(e);return t(di,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n)},{children:i}),i)}))}):null},ui=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:h,selectedStartDate:b,selectedEndDate:g,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:$=!0,getLeftArrowDate:F,getRightArrowDate:E,isLeftArrowDisabled:S,isRightArrowDisabled:C,getMonthHeaderLabel:O,getYearHeaderLabel:M}=n,B=L(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[A,k]=o(Fa.toDayjs(l)),[z,Y]=o(Fa.toDayjs(l)),[j,T]=o("default"),R=i(null),_=i(null),H=i();m(a,(()=>({defaultView(){T("default")},resetView(){const e=Fa.toDayjs(l);k(e),Y(e),T("default")},setCalendarDate(e){const r=Fa.toDayjs(e);k(r),Y(r)}}))),u((()=>{const e=Fa.toDayjs(l);k(e),Y(e)}),[l]),u((()=>{K(z)}),[z]);const I=()=>{"month-options"!==j?(T("month-options"),H.current.focus()):(T("default"),k(z))},W=()=>{"default"!==j?(T("default"),k(z)):T("year-options")},P=()=>{H.current.focus();const e=F?F(A):A.subtract(1,"month");switch(j){case"default":Y(e),k(e);break;case"month-options":k((e=>e.subtract(1,"year")));break;case"year-options":k((e=>e.subtract(10,"year")))}},V=()=>{H.current.focus();const e=E?E(A):A.add(1,"month");switch(j){case"default":Y(e),k(e);break;case"month-options":k((e=>e.add(1,"year")));break;case"year-options":k((e=>e.add(10,"year")))}},Z=e=>{k(e),Y(e),x||T("default")},U=()=>{const e=Fa.toDayjs(l);k(e),Y(e),"default"===j?J("reset"):T("default")},K=e=>{v&&v(e)},J=e=>{w&&w(e)},q=()=>{if(!d||p)return!1;const e=N(d);return"month-options"===j?!fa.isPreviousYearWithinRange(A,e):"year-options"===j?!fa.isPreviousDecadeWithinRange(A,e):S?S(A):!fa.isPreviousMonthWithinRange(A,e)},X=()=>{if(!c||p)return!1;const e=N(c);return"month-options"===j?!fa.isNextYearWithinRange(A,e):"year-options"===j?!fa.isNextDecadeWithinRange(A,e):C?C(A):!fa.isNextMonthWithinRange(A,e)},G=()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=fa.getStartEndDecade(A);return`${e} to ${r}`}return M?M(A):A.format("YYYY")},Q=()=>{const n=O?O(A):A.format("MMM");return e(r,{children:[e(Qa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:I},{children:[t(ei,{children:n}),t(Za,{})]})),e(Qa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:W},{children:[t(ei,{children:G()}),t(Za,{})]}))]})},ee=()=>{switch(j){case"month-options":return t(si,{calendarDate:A,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:g,viewCalendarDate:z,isNewSelection:f,onMonthSelect:Z,allowDisabledSelection:p});case"year-options":return t(ci,{calendarDate:A,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:g,viewCalendarDate:z,isNewSelection:f,onYearSelect:Z,allowDisabledSelection:p});default:return null}};return e(Ua,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container"},B,{children:[$&&e(Xa,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Ga,{children:Q()}),e(ri,{children:[t(ti,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:t(Na,{})})),t(ti,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Va,{})}))]})]})),t(Ka,{children:(()=>{const n="function"==typeof s?s({calendarDate:z,currentView:j}):s;return e(r,y?{children:["default"===j&&n,ee()]}:{children:[t(Ja,{children:n}),t(qa,Object.assign({$visible:"default"!==j},{children:ee()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===j)&&D;return e(ni,{children:[t(ai,Object.assign({ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(ai,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(k(z),"default"===j?J("confirmed"):T("default"))},disabled:r},{children:"Done"}))]})})()]}))})),hi=p.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,bi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Jt["body-sm-semibold"]};
    color: ${Kt.text};
`,gi=p.div`
    grid-column: 1 / -1;
    display: flex;
`,mi=e=>{let r=Kt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Kt["bg-hover"],t=Kt["bg-hover"];break;case"hover":r=Kt["bg-hover-strong"],t=Kt["bg-hover-strong"];break;case"hover-outline":r=Kt["bg-hover-subtle"],t=Kt["border-hover"];break;case"selected-outline":r=Kt["bg-selected"],t=Kt["border-selected"];break;case"selected-outline-subtle":r=Kt["bg-selected"],t=Kt["border-selected-subtle"];break;case"selected-hover":r=Kt["bg-selected-hover"];break;case"selected-hover-outline":r=Kt["bg-selected-hover"],t=Kt["border-selected-hover"]}return{color:r,borderColor:t}},fi=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,yi=p.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};
    border: ${Xt["width-010"]} ${Xt.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=mi(e);return v`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,pi=p(yi)`
    left: 0;
`,vi=p(yi)`
    right: 0;
`,xi=p.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    border: ${Xt["width-010"]} ${Xt.solid} transparent;
    border-radius: ${Qt.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=mi(e);return v`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,Di=p(xi)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,wi=p(xi)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,$i=p.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Jt["body-md-regular"]}
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return v`
                color: ${Kt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return v`
                    font-weight: ${Jt.Spec["weight-semibold"]};
                    color: ${Kt["text-selected"]};
                `;case"selected-hover":return v`
                    font-weight: ${Jt.Spec["weight-semibold"]};
                    color: ${Kt["text-selected-hover"]};
                `;case"current":return v`
                    font-weight: ${Jt.Spec["weight-semibold"]};
                    color: ${Kt["text-primary"]};
                `;case"hover":return v`
                    font-weight: ${Jt.Spec["weight-semibold"]};
                    color: ${Kt["text-hover"]};
                `;case"unavailable":return v`
                    color: ${Kt["text-disabled-subtlest"]};
                `;case"hidden":return v`
                    visibility: hidden;
                `;default:return v`
                    color: ${Kt.text};
                `}}}
`,Fi=p.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Ei=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:i,labelType:o,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=N().isSame(c,"day");return e(fi,{children:[t(pi,{$type:r}),t(Di,{$type:a}),t(vi,{$type:n}),t(wi,{$type:i}),e($i,Object.assign({$type:o,$disabled:s,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)}},{children:[c.date(),d&&g&&t(Fi,{$disabled:s})]}))]})},Si=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:b,onHover:g})=>{const m=fa.isDisabledDay(e,d,s,l),f=!m||c,y=()=>{const e=N(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:()=>{b(e,!f)},onHover:()=>{g(e.format("YYYY-MM-DD"),!f)}};return t(Ei,Object.assign({},p,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(N().isSame(e,"day")&&!m)t.labelType="current";else if(u){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return;const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=y();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};N.extend(ca);const Ci=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:h,allowDisabledSelection:b,showActiveMonthDaysOnly:m})=>{const f=g((()=>fa.generateDays(r)),[r]),[y,p]=o(""),v=(e,r)=>{r&&!b||l(e)},x=(e,r)=>{r&&!b||(p(e),d(e))},D=()=>{p(""),d("")};return e(hi,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,r)=>t(bi,{children:N(e).format("ddd")},`week-day-${r}`))),f.map(((e,o)=>t(gi,Object.assign({onMouseLeave:D},{children:e.map(((e,o)=>t(Si,{date:e,calendarDate:r,startDate:i,endDate:s,hoverDate:y,currentFocus:n,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:b,isNewSelection:c,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${o}`)))}),o)))]}))},Oi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=fa.isDisabledDay(e,s,i,o),b=!h||l,{start:g,end:m}=n?fa.getFixedRangeStartEnd(Fa.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?fa.getFixedRangeStartEnd(Fa.toDayjs(a),d):{start:void 0,end:void 0},p=n&&e.isBetween(g,m,"day","[]"),v=a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(g,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},$={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(Ei,Object.assign({},$,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!h&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===g,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==g&&(r.circleLeft="selected-hover")),r})()))},Mi=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const h=g((()=>fa.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!N(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(hi,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(bi,{children:N(e).format("ddd")},`week-day-${r}`))),h.map(((e,i)=>t(gi,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>t(Oi,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))}),i)))]}))},Bi=p.div`
    width: 100%;
    background: ${Kt.bg};
`,Ai=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const h=fa.isDisabledDay(e,s,i,o),b=!h||l,g={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(Ei,Object.assign({},g,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":N().isSame(e,"day")&&!h&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};N.extend(ca);const ki=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const h=g((()=>fa.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(hi,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(bi,{children:N(e).format("ddd")},`week-day-${r}`))),h.map(((e,i)=>t(gi,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>t(Ai,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))}),i)))]}))},zi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=fa.isDisabledDay(e,s,i,o),h=!u||l,{start:b,end:g}=fa.getWeekStartEnd(Fa.toDayjs(n)),{start:m,end:f}=fa.getWeekStartEnd(Fa.toDayjs(a)),y=n&&e.isBetween(b,g,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(b)||p&&e.isSame(m),x=y&&e.isSame(g)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return t(Ei,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Yi=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=g((()=>fa.generateDays(r)),[r]),[h,b]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!N(e).isSame(t,"month")&&b("")},f=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(hi,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,r)=>t(bi,{children:N(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(gi,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(zi,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))}),i)))]}))},ji=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:b,allowDisabledSelection:g,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const D=i(),w=i(void 0);m(x,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const $=e=>{const r=e.format("YYYY-MM-DD");D.current.setCalendarDate(r),E(r)},F=e=>{S(e)},E=e=>{n&&n(e)},S=e=>{a&&a(e)},C=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Bi,{children:t(ui,Object.assign({ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:b,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||C(e),w.current=e},initialCalendarDate:y},{children:({calendarDate:r})=>(r=>{switch(u){case"week":return t(Yi,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,onSelect:$,onHover:F});case"fixed-range":return t(Mi,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,onSelect:$,onHover:F,numberOfDays:p});case"single":return t(ki,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:$,onHover:F});default:return t(Ci,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:b,isNewSelection:f,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:$,onHover:F})}})(r)}))})})),Ti=a.forwardRef(((e,r)=>{var{width:n}=e,a=L(e,["width"]);return t(oa,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:t(ji,Object.assign({ref:r},a))}))})),Ri=p.div`
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
                        100% - ${Jt.Spec["body-size-baseline"]} -
                            ${Gt["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Gt["spacing-8"]};
                }
            `}}
`,_i=p.div`
    width: 100%; // Force next flex item to break to next line
`,Hi=p.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Li=p(H)`
    color: ${Kt.icon};
    width: ${Jt.Spec["body-size-baseline"]};
    height: ${Jt.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Gt["spacing-8"]};
    align-self: center;
`,Ii=p.div`
    position: absolute;
    background: ${e=>e.$error?Kt["border-error-focus-strong"]:Kt["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Gt["spacing-8"]} - (${Jt.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${qt["duration-350"]} ${qt["ease-standard"]},
        opacity ${qt["duration-350"]} ${qt["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return v`
                    opacity: 1;
                `;case"end":return v`
                    left: calc(50% + ${Gt["spacing-16"]});
                    opacity: 1;
                `;case"none":return v`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return v`
                display: none;
            `}}
`,Wi=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(Ri,Object.assign({className:i,$wrap:o},{children:[t(Hi,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Li,{}),o&&t(_i,{}),t(Hi,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Ii,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]}))},Pi=v`
    outline-offset: -1px;
    outline: ${Xt["width-020"]} ${Xt.solid} ${Kt["border-focus"]};
`,Ni=v`
    outline-color: ${Kt["border-focus"]};
`,Vi=v`
    outline-color: ${Kt["border-disabled"]};
`,Zi=v`
    outline-color: ${Kt["border-error-focus"]};
`,Ui=p(p.div`
    border: ${Xt["width-010"]} ${Xt.solid} ${Kt.border};
    border-radius: ${Qt.sm};
    background: ${Kt.bg};

    :focus-within {
        ${Pi}
    }
    ${e=>e.$focused&&Pi}

    ${e=>e.$readOnly?v`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ni}
                }
                ${e.$focused&&Ni}
            `:e.$disabled?v`
                background: ${Kt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Vi}
                }
                ${e.$focused&&Vi}
            `:e.$error?v`
                border-color: ${Kt["border-error"]};

                :focus-within {
                    ${Zi}
                }
                ${e.$focused&&Zi}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Gt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ki=p.input`
    ${e=>"small"===e.$variant?Jt["body-md-regular"]:Jt["body-baseline-regular"]}
    color: ${Kt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Kt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Kt["text-subtler"]};
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
        outline: ${Xt["width-010"]} ${Xt.solid}
            ${Kt["border-focus"]};
        border-radius: ${Qt.sm};
    }
`;const Ji=p.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,qi=p.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return v`
                ${Xi}, ${ro} {
                    color: ${Kt["text-subtler"]};
                }
            `}}
`,Xi=p(Ki)`
    background: transparent;
    text-align: center;
`,Gi=p(Xi)`
    width: 2rem;
    margin-right: ${Gt["spacing-4"]};
`,Qi=p(Xi)`
    width: 2.5rem;
`,eo=p(Xi)`
    width: 3rem;
    margin-left: ${Gt["spacing-4"]};
`,ro=p.span`
    ${Jt["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return v`
                color: ${Kt.text};
            `}}
`,to=p.div`
    ${Jt["body-baseline-regular"]}
    background-color: ${Kt.bg};
    color: ${Kt["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?v`
                background-color: ${Kt["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?v`
                display: none;
            `:void 0}
`;N.extend(la);const no=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:h,onChange:b,onFocus:g,onBlur:f,hideInputKeyboard:y},p)=>{const v=y?"none":"numeric",[x,D,w]=Oa(""),[$,F,E]=Oa(""),[S,C,O]=Oa(""),[M,B]=o("none"),[A,k]=o(!1),z=i(null),Y=i(null),j=i(null),T=i(null),[R,_,H]=Z(d);u((()=>{const[e="",r="",t=""]=Z(s);D(e),F(r),C(t),e||r||t||!z.current.contains(document.activeElement)||Y.current.focus()}),[s]),u((()=>{l||B("none"),l&&(k(!0),z.current.contains(document.activeElement)||Y.current.focus())}),[l]),m(p,(()=>({ref:z,resetPlaceholder(){k(!1)},resetInput(){const[e="",r="",t=""]=Z(s);D(e),F(r),C(t)}})),[s]);const L=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},I=e=>{e.target.select();const r=e.target.name;B(r)},W=e=>{const[r,t,n]=a,i={[r]:w.current,[t]:E.current,[n]:O.current},o=e.target.name,s=i[o],l=o!==n?Ca.padValue(s,!0):s;switch(o){case r:i[r]=l,D(l);break;case t:i[t]=l,F(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=N(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),z.current.contains(e.relatedTarget)||(B("none"),null==f||f(u||c))},P=e=>{if(d)return;const r=e.target.name,t=e.target.value.replace(/[^0-9]/g,""),n={day:x,month:$,year:S};switch(r){case a[0]:n.day=t,D(t),2===t.length&&j.current.focus();break;case a[1]:n.month=t,F(t),2===t.length&&T.current.focus();break;case a[2]:n.year=t,C(t)}if(!n.day&&!n.month&&!n.year)return void b("");const i=`${n.year}-${n.month}-${n.day}`;N(i,"YYYY-MM-DD",!0).isValid()&&b(i)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(M===a[1]&&0===$.length&&Y.current.focus(),M===a[2]&&0===S.length&&j.current.focus())};function Z(e){if(e){const r=N(new Date(e));return r.isValid()?[Ca.padValue(r.date().toString()),Ca.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Ji,Object.assign({role:"group","aria-label":h,onClick:()=>{r||n||(k(!0),z.current.contains(document.activeElement)||Y.current.focus())},onFocus:e=>{r||(k(!0),l||null==g||g(e))}},{children:[e(qi,Object.assign({ref:z,$hover:!!d},{children:[t(Gi,{ref:Y,name:a[0],maxLength:2,value:null!=R?R:x,onFocus:I,onBlur:W,onChange:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:M!==a[0]||n?"DD":""}),t(ro,Object.assign({$inactive:0===x.length},{children:"/"})),t(Qi,{ref:j,name:a[1],maxLength:2,value:null!=_?_:$,onFocus:I,onBlur:W,onChange:P,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:M!==a[1]||n?"MM":""}),t(ro,Object.assign({$inactive:0===$.length},{children:"/"})),t(eo,{ref:T,name:a[2],maxLength:4,value:null!=H?H:S,onFocus:I,onBlur:W,onChange:P,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:M!==a[2]||n?"YYYY":""})]})),(()=>{if(!s&&!n&&c)return t(to,Object.assign({$hide:A,$disabled:r,onMouseDown:L},{children:c}))})()]}))})),ao=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},io=p(Ui)`
    ${e=>e.$wrap&&v`
            padding: ${Gt["spacing-12"]} ${Gt["spacing-16"]};
        `}
`,oo=p.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&v`
            height: fit-content;
        `}
`,so={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},lo=r=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:h,valueEnd:g,onChange:m,onFocus:y,onBlur:p,onYearMonthDisplayChange:v,withButton:x=!0,variant:D="range",numberOfDays:w=7,readOnly:$,id:F,allowDisabledSelection:E,zIndex:S}=r,C=L(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[O,M]=o(),[B,A]=o(void 0),[k,z]=o(!1),[Y,j]=o(!1),T="week"===D,R="fixed-range"===D,[{selectedStart:_,selectedEnd:H,currentFocus:I,calendarOpen:W,isStartDirty:P,isEndDirty:V,focused:Z},U]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=f(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&ao(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:so,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:T?"none":R?"start":r,calendarOpen:!$,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),K=i(!1),J=i(),q=i(),X=i(),G=i(),Q=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return ta({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:b((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:J});u((()=>{U.resetRange({start:Ea.sanitizeInput(h),end:Ea.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===I?M(_):"end"===I&&M(H)}),[I]);const ee=e=>{"Enter"!==e.code||x||(_&&H?(U.done({start:_,end:H}),null==m||m(_,H)):(U.dismiss(),J.current.focus(),X.current.resetPlaceholder(),G.current.resetPlaceholder()))},re=e=>{if(ge(e))return void(K.current=!0);if(U.changeStart(e),q.current.setCalendarDate(e),K.current=!1,!e)return void(x||H||!V||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!H)return void U.focus("end");if(N(e).isAfter(H,"day"))U.reselectEnd();else{if(V)return x?void 0:(U.done({start:e,end:H}),void(null==m||m(e,H)));U.focus("end")}},te=e=>{if(ge(e))return void(K.current=!0);if(N(e).isBefore(_,"day"))return U.changeStart(e),q.current.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),q.current.setCalendarDate(e),e){if(_)return x?void 0:(U.done({start:_,end:e}),void(null==m||m(_,e)));U.focus("start")}else x||_||!P||(U.resetRange({start:"",end:""}),null==m||m("",""))},ne=e=>{if(ge(e))return void(K.current=!0);if(U.changeStart(e),q.current.setCalendarDate(e),K.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const r=N(e).format("YYYY-MM-DD"),t=N(r).add(w-1,"day").format("YYYY-MM-DD");return U.changeStart(r),U.changeEnd(t),K.current=!1,x?void 0:(U.done({start:r,end:t}),void(null==m||m(r,t)))},ae=()=>{$||s||Z||(U.focus("start"),null==y||y())},ie=e=>{!Z||W||J.current.contains(e.relatedTarget)||(U.blur(),z(!1),j(!1),X.current.resetPlaceholder(),G.current.resetPlaceholder(),null==p||p())},oe=e=>r=>{r.stopPropagation(),$||(U.focus(e),se(),le(),Z||null==y||y())},se=()=>{if(T){const e=Fa.toDayjs(_).startOf("week").format("YYYY-MM-DD");z(!0),j(!0),M(e)}},le=()=>{R&&(j(!0),M(_))},de=e=>{e&&!K.current||(U.resetStart(),X.current.resetInput())},ce=e=>{e&&!K.current||(U.resetEnd(),G.current.resetInput())},ue=e=>{switch(D){case"week":(e=>{const r=N(e).startOf("week").format("YYYY-MM-DD"),t=N(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(t),K.current=!1,!x)U.done({start:r,end:t}),null==m||m(r,t)})(e);break;case"fixed-range":ne(e);break;default:"start"===I?re(e):"end"===I&&te(e)}},he=e=>{switch(J.current.focus(),e){case"reset":U.cancel();break;case"confirmed":U.done({start:_,end:H}),null==m||m(_,H)}},be=e=>{A(e)},ge=e=>!E&&e&&Ea.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),me=e=>{let r={start:void 0,end:void 0};switch(D){case"range":r={start:"start"===I?B:void 0,end:"end"===I?B:void 0};break;case"week":if(!B)return;r={start:N(B).startOf("week").format("YYYY-MM-DD"),end:N(B).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!B)return;r={start:N(B).format("YYYY-MM-DD"),end:N(B).add(w-1,"day").format("YYYY-MM-DD")}}return r[e]};return t(ia,{enabled:!$&&!s,isOpen:W,onClose:()=>{U.blur(),z(!1),j(!1),X.current.resetPlaceholder(),G.current.resetPlaceholder(),null==p||p()},onDismiss:()=>{U.dismiss(),J.current.focus(),X.current.resetPlaceholder(),G.current.resetPlaceholder()},renderElement:()=>t(io,Object.assign({ref:J,tabIndex:-1,onFocus:ae,onBlur:ie,$focused:Z,$disabled:s,$readOnly:$,$error:d,$wrap:Q,id:F,"data-testid":C["data-testid"],onKeyDown:ee},C,{children:e(Wi,Object.assign({currentActive:I,wrap:Q,error:d},{children:[t(oo,Object.assign({$wrap:Q},{children:t(no,{ref:X,placeholder:"From",names:["start-day","start-month","start-year"],value:_,disabled:s,readOnly:k||$,focused:"start"===I,hoverValue:me("start"),onChange:R?ne:re,onFocus:oe("start"),onBlur:de,hideInputKeyboard:c})})),t(oo,Object.assign({$wrap:Q},{children:t(no,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:H,disabled:s,readOnly:Y||$,focused:"end"===I,hoverValue:me("end"),onChange:te,onFocus:oe("end"),onBlur:ce,hideInputKeyboard:c})}))]}))})),renderDropdown:({elementWidth:e})=>t(Ti,{ref:q,variant:D,initialCalendarDate:O,withButton:x,value:_,endValue:H,selectWithinRange:P||V,currentFocus:I,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:E,onSelect:ue,onDismiss:he,onHover:be,onYearMonthDisplayChange:v,numberOfDays:w,width:e}),customZIndex:S,offset:16})};export{lo as DateRangeInput};
//# sourceMappingURL=index.js.map
