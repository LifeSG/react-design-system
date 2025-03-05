import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useMemo as b,useImperativeHandle as g}from"react";import{ChevronDownIcon as m}from"@lifesg/react-icons/chevron-down";import f,{css as y,keyframes as p,useTheme as v}from"styled-components";import{useFloatingTree as x,useFloating as D,autoUpdate as w,offset as F,flip as $,shift as E,limitShift as C,size as S,useTransitionStyles as B,useClick as A,useDismiss as O,useInteractions as z,FloatingPortal as M,FloatingFocusManager as k}from"@floating-ui/react";import{findDOMNode as j}from"react-dom";import{ChevronLeftIcon as Y}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as T}from"@lifesg/react-icons/chevron-right";function _(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L={exports:{}};L.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case h:return g(p+"Hours",0);case o:return g(p+"Minutes",1);case i:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var g,m=this,f=E.p(h),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case s:g=(v-p)/864e5;break;case o:g=v/t;break;case i:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:E.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var W=H(L.exports),I=Array.isArray,N="object"==typeof R&&R&&R.Object===Object&&R,P="object"==typeof self&&self&&self.Object===Object&&self,V=N||P||Function("return this")(),Z=V.Symbol,U=Z,J=Object.prototype,X=J.hasOwnProperty,q=J.toString,G=U?U.toStringTag:void 0;var Q=function(e){var r=X.call(e,G),t=e[G];try{e[G]=void 0;var n=!0}catch(e){}var a=q.call(e);return n&&(r?e[G]=t:delete e[G]),a},K=Object.prototype.toString;var ee=Q,re=function(e){return K.call(e)},te=Z?Z.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":te&&te in Object(e)?ee(e):re(e)};var ae=ne,ie=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||ie(e)&&"[object Symbol]"==ae(e)},se=I,le=oe,de=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;var ue=function(e,r){if(se(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!le(e))||(ce.test(e)||!de.test(e)||null!=r&&e in Object(r))};var he=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},be=ne,ge=he;var me,fe=function(e){if(!ge(e))return!1;var r=be(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ye=V["__core-js_shared__"],pe=(me=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var ve=function(e){return!!pe&&pe in e},xe=Function.prototype.toString;var De=fe,we=ve,Fe=he,$e=function(e){if(null!=e){try{return xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ee=/^\[object .+?Constructor\]$/,Ce=Function.prototype,Se=Object.prototype,Be=Ce.toString,Ae=Se.hasOwnProperty,Oe=RegExp("^"+Be.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ze=function(e,r){return null==e?void 0:e[r]},Me=function(e){return!(!Fe(e)||we(e))&&(De(e)?Oe:Ee).test($e(e))},ke=ze;var je=function(e,r){var t=ke(e,r);return Me(t)?t:void 0},Ye=je(Object,"create"),Te=Ye;var _e=function(){this.__data__=Te?Te(null):{},this.size=0};var Re=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},He=Ye,Le=Object.prototype.hasOwnProperty;var We=function(e){var r=this.__data__;if(He){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Le.call(r,e)?r[e]:void 0},Ie=Ye,Ne=Object.prototype.hasOwnProperty;var Pe=function(e){var r=this.__data__;return Ie?void 0!==r[e]:Ne.call(r,e)},Ve=Ye;var Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ve&&void 0===r?"__lodash_hash_undefined__":r,this},Ue=_e,Je=Re,Xe=We,qe=Pe,Ge=Ze;function Qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qe.prototype.clear=Ue,Qe.prototype.delete=Je,Qe.prototype.get=Xe,Qe.prototype.has=qe,Qe.prototype.set=Ge;var Ke=Qe;var er=function(){this.__data__=[],this.size=0};var rr=function(e,r){return e===r||e!=e&&r!=r};var tr=function(e,r){for(var t=e.length;t--;)if(rr(e[t][0],r))return t;return-1},nr=tr,ar=Array.prototype.splice;var ir=function(e){var r=this.__data__,t=nr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ar.call(r,t,1),--this.size,!0)},or=tr;var sr=function(e){var r=this.__data__,t=or(r,e);return t<0?void 0:r[t][1]},lr=tr;var dr=function(e){return lr(this.__data__,e)>-1},cr=tr;var ur=function(e,r){var t=this.__data__,n=cr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},hr=er,br=ir,gr=sr,mr=dr,fr=ur;function yr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}yr.prototype.clear=hr,yr.prototype.delete=br,yr.prototype.get=gr,yr.prototype.has=mr,yr.prototype.set=fr;var pr=yr,vr=je(V,"Map"),xr=Ke,Dr=pr,wr=vr;var Fr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var $r=function(e,r){var t=e.__data__;return Fr(r)?t["string"==typeof r?"string":"hash"]:t.map},Er=$r;var Cr=function(e){var r=Er(this,e).delete(e);return this.size-=r?1:0,r},Sr=$r;var Br=function(e){return Sr(this,e).get(e)},Ar=$r;var Or=function(e){return Ar(this,e).has(e)},zr=$r;var Mr=function(e,r){var t=zr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},kr=function(){this.size=0,this.__data__={hash:new xr,map:new(wr||Dr),string:new xr}},jr=Cr,Yr=Br,Tr=Or,_r=Mr;function Rr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Rr.prototype.clear=kr,Rr.prototype.delete=jr,Rr.prototype.get=Yr,Rr.prototype.has=Tr,Rr.prototype.set=_r;var Hr=Rr;function Lr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Lr.Cache||Hr),t}Lr.Cache=Hr;var Wr=Lr;var Ir=function(e){var r=Wr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Nr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pr=/\\(\\)?/g,Vr=Ir((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Nr,(function(e,t,n,a){r.push(n?a.replace(Pr,"$1"):t||e)})),r}));var Zr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Ur=I,Jr=oe,Xr=Z?Z.prototype:void 0,qr=Xr?Xr.toString:void 0;var Gr=function e(r){if("string"==typeof r)return r;if(Ur(r))return Zr(r,e)+"";if(Jr(r))return qr?qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Qr=Gr;var Kr=I,et=ue,rt=Vr,tt=function(e){return null==e?"":Qr(e)};var nt=oe;var at=function(e,r){return Kr(e)?e:et(e,r)?[e]:rt(tt(e))},it=function(e){if("string"==typeof e||nt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ot=function(e,r){for(var t=0,n=(r=at(r,e)).length;null!=e&&t<n;)e=e[it(r[t++])];return t&&t==n?e:void 0};var st=H((function(e,r,t){var n=null==e?void 0:ot(e,r);return void 0===n?t:n}));const lt=(e,r,t)=>st(t,r)||st(e,r),dt=(e,r)=>{const t=r||e.defaultValue;return st(e.collections,t)},ct={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},ut=e=>r=>{var t;const n=r.theme,a=dt(ct,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?lt(a,e,n.overrides.motion):a[e]},ht={"duration-150":ut("duration-150"),"duration-250":ut("duration-250"),"duration-350":ut("duration-350"),"duration-500":ut("duration-500"),"duration-800":ut("duration-800"),"duration-1000":ut("duration-1000"),"ease-default":ut("ease-default"),"ease-standard":ut("ease-standard"),"ease-entrance":ut("ease-entrance"),"ease-exit":ut("ease-exit")},bt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},gt=e=>r=>{var t;const n=r.theme,a=dt(bt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?lt(a,e,n.overrides.primitiveColour):a[e]},mt={"brand-10":gt("brand-10"),"brand-20":gt("brand-20"),"brand-30":gt("brand-30"),"brand-40":gt("brand-40"),"brand-50":gt("brand-50"),"brand-60":gt("brand-60"),"brand-70":gt("brand-70"),"brand-80":gt("brand-80"),"brand-90":gt("brand-90"),"brand-95":gt("brand-95"),"brand-100":gt("brand-100"),"primary-10":gt("primary-10"),"primary-20":gt("primary-20"),"primary-30":gt("primary-30"),"primary-40":gt("primary-40"),"primary-50":gt("primary-50"),"primary-60":gt("primary-60"),"primary-70":gt("primary-70"),"primary-80":gt("primary-80"),"primary-90":gt("primary-90"),"primary-95":gt("primary-95"),"primary-100":gt("primary-100"),"secondary-10":gt("secondary-10"),"secondary-20":gt("secondary-20"),"secondary-30":gt("secondary-30"),"secondary-40":gt("secondary-40"),"secondary-50":gt("secondary-50"),"secondary-60":gt("secondary-60"),"secondary-70":gt("secondary-70"),"secondary-80":gt("secondary-80"),"secondary-90":gt("secondary-90"),"secondary-95":gt("secondary-95"),"secondary-100":gt("secondary-100"),"neutral-10":gt("neutral-10"),"neutral-20":gt("neutral-20"),"neutral-30":gt("neutral-30"),"neutral-40":gt("neutral-40"),"neutral-50":gt("neutral-50"),"neutral-60":gt("neutral-60"),"neutral-70":gt("neutral-70"),"neutral-80":gt("neutral-80"),"neutral-90":gt("neutral-90"),"neutral-95":gt("neutral-95"),"neutral-100":gt("neutral-100"),"success-10":gt("success-10"),"success-20":gt("success-20"),"success-30":gt("success-30"),"success-40":gt("success-40"),"success-50":gt("success-50"),"success-60":gt("success-60"),"success-70":gt("success-70"),"success-80":gt("success-80"),"success-90":gt("success-90"),"success-95":gt("success-95"),"success-100":gt("success-100"),"warning-10":gt("warning-10"),"warning-20":gt("warning-20"),"warning-30":gt("warning-30"),"warning-40":gt("warning-40"),"warning-50":gt("warning-50"),"warning-60":gt("warning-60"),"warning-70":gt("warning-70"),"warning-80":gt("warning-80"),"warning-90":gt("warning-90"),"warning-95":gt("warning-95"),"warning-100":gt("warning-100"),"error-10":gt("error-10"),"error-20":gt("error-20"),"error-30":gt("error-30"),"error-40":gt("error-40"),"error-50":gt("error-50"),"error-60":gt("error-60"),"error-70":gt("error-70"),"error-80":gt("error-80"),"error-90":gt("error-90"),"error-95":gt("error-95"),"error-100":gt("error-100"),"info-10":gt("info-10"),"info-20":gt("info-20"),"info-30":gt("info-30"),"info-40":gt("info-40"),"info-50":gt("info-50"),"info-60":gt("info-60"),"info-70":gt("info-70"),"info-80":gt("info-80"),"info-90":gt("info-90"),"info-95":gt("info-95"),"info-100":gt("info-100"),white:gt("white"),black:gt("black"),"primary-inverse":gt("primary-inverse")},ft={text:gt("neutral-20"),"text-subtle":gt("neutral-30"),"text-subtler":gt("neutral-50"),"text-subtlest":gt("neutral-60"),"text-primary":gt("primary-50"),"text-hover":gt("primary-40"),"text-selected":gt("primary-50"),"text-selected-hover":gt("primary-40"),"text-disabled":gt("neutral-50"),"text-disabled-subtle":gt("neutral-60"),"text-disabled-subtlest":gt("neutral-80"),"text-selected-disabled":gt("neutral-20"),"text-success":gt("success-40"),"text-warning":gt("warning-40"),"text-error":gt("error-40"),"text-info":gt("info-40"),"text-inverse":gt("white"),icon:gt("neutral-50"),"icon-subtle":gt("neutral-60"),"icon-strongest":gt("neutral-20"),"icon-primary":gt("primary-50"),"icon-primary-subtle":gt("primary-60"),"icon-primary-subtlest":gt("primary-70"),"icon-hover":gt("primary-40"),"icon-selected":gt("primary-50"),"icon-selected-hover":gt("primary-40"),"icon-disabled":gt("neutral-50"),"icon-disabled-subtle":gt("neutral-60"),"icon-selected-disabled":gt("neutral-60"),"icon-success":gt("success-50"),"icon-warning":gt("warning-60"),"icon-error":gt("error-50"),"icon-error-strong":gt("error-40"),"icon-info":gt("info-50"),"icon-inverse":gt("white"),"icon-primary-inverse":gt("primary-inverse"),border:gt("neutral-90"),"border-strong":gt("neutral-70"),"border-stronger":gt("neutral-50"),"border-primary":gt("primary-50"),"border-primary-subtle":gt("primary-60"),"border-hover":gt("primary-90"),"border-hover-strong":gt("primary-60"),"border-selected":gt("primary-50"),"border-selected-subtle":gt("primary-70"),"border-selected-subtlest":gt("primary-90"),"border-selected-hover":gt("primary-40"),"border-focus":gt("primary-60"),"border-focus-strong":gt("primary-50"),"border-disabled":gt("neutral-90"),"border-selected-disabled":gt("neutral-70"),"border-success":gt("success-60"),"border-warning":gt("warning-60"),"border-error":gt("error-60"),"border-error-focus":gt("error-60"),"border-error-focus-strong":gt("error-40"),"border-error-strong":gt("error-40"),"border-info":gt("info-60"),bg:gt("white"),"bg-strong":gt("neutral-100"),"bg-stronger":gt("neutral-95"),"bg-strongest":gt("neutral-90"),"bg-hover":gt("primary-95"),"bg-hover-strong":gt("primary-90"),"bg-hover-subtle":gt("primary-100"),"bg-hover-neutral":gt("neutral-100"),"bg-hover-neutral-strong":gt("neutral-90"),"bg-selected":gt("primary-95"),"bg-selected-hover":gt("primary-90"),"bg-selected-strong":gt("primary-90"),"bg-selected-stronger":gt("primary-70"),"bg-selected-strongest":gt("primary-50"),"bg-selected-strongest-hover":gt("primary-40"),"bg-disabled":gt("neutral-95"),"bg-selected-disabled":gt("neutral-95"),"bg-selected-stronger-disabled":gt("neutral-70"),"bg-success":gt("success-100"),"bg-success-hover":gt("success-95"),"bg-success-strong":gt("success-50"),"bg-success-strong-hover":gt("success-40"),"bg-warning":gt("warning-100"),"bg-warning-hover":gt("warning-95"),"bg-warning-strong":gt("warning-50"),"bg-warning-strong-hover":gt("warning-40"),"bg-info":gt("info-100"),"bg-info-hover":gt("info-95"),"bg-info-strong":gt("info-50"),"bg-info-strong-hover":gt("info-40"),"bg-error":gt("error-100"),"bg-error-hover":gt("error-95"),"bg-error-strong":gt("error-50"),"bg-error-strong-hover":gt("error-40"),"bg-inverse":gt("neutral-20"),"bg-inverse-subtle":gt("neutral-30"),"bg-inverse-subtler":gt("neutral-50"),"bg-inverse-subtlest":gt("neutral-60"),"bg-inverse-hover":gt("neutral-40"),"bg-primary":gt("primary-50"),"bg-primary-subtle":gt("primary-60"),"bg-primary-subtler":gt("primary-95"),"bg-primary-subtlest":gt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":gt("primary-40"),"bg-primary-subtlest-hover":gt("primary-90"),"bg-primary-subtlest-selected":gt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:gt("primary-50"),"hyperlink-hover":gt("primary-40"),"hyperlink-visited":gt("primary-40"),"hyperlink-inverse":gt("primary-inverse"),"focus-ring":gt("black"),"focus-ring-inverse":gt("white")},yt={collections:{lifesg:ft,bookingsg:ft,rbs:ft,mylegacy:ft,ccube:ft,pa:ft},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,a=dt(yt,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?lt(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},vt={text:pt("text"),"text-subtle":pt("text-subtle"),"text-subtler":pt("text-subtler"),"text-subtlest":pt("text-subtlest"),"text-primary":pt("text-primary"),"text-hover":pt("text-hover"),"text-selected":pt("text-selected"),"text-selected-hover":pt("text-selected-hover"),"text-disabled":pt("text-disabled"),"text-disabled-subtle":pt("text-disabled-subtle"),"text-disabled-subtlest":pt("text-disabled-subtlest"),"text-selected-disabled":pt("text-selected-disabled"),"text-success":pt("text-success"),"text-warning":pt("text-warning"),"text-error":pt("text-error"),"text-info":pt("text-info"),"text-inverse":pt("text-inverse"),icon:pt("icon"),"icon-subtle":pt("icon-subtle"),"icon-strongest":pt("icon-strongest"),"icon-primary":pt("icon-primary"),"icon-primary-subtle":pt("icon-primary-subtle"),"icon-primary-subtlest":pt("icon-primary-subtlest"),"icon-hover":pt("icon-hover"),"icon-selected":pt("icon-selected"),"icon-selected-hover":pt("icon-selected-hover"),"icon-disabled":pt("icon-disabled"),"icon-disabled-subtle":pt("icon-disabled-subtle"),"icon-selected-disabled":pt("icon-selected-disabled"),"icon-success":pt("icon-success"),"icon-warning":pt("icon-warning"),"icon-error":pt("icon-error"),"icon-error-strong":pt("icon-error-strong"),"icon-info":pt("icon-info"),"icon-inverse":pt("icon-inverse"),"icon-primary-inverse":pt("icon-primary-inverse"),border:pt("border"),"border-strong":pt("border-strong"),"border-stronger":pt("border-stronger"),"border-primary":pt("border-primary"),"border-primary-subtle":pt("border-primary-subtle"),"border-hover":pt("border-hover"),"border-hover-strong":pt("border-hover-strong"),"border-selected":pt("border-selected"),"border-selected-subtle":pt("border-selected-subtle"),"border-selected-subtlest":pt("border-selected-subtlest"),"border-selected-hover":pt("border-selected-hover"),"border-focus":pt("border-focus"),"border-focus-strong":pt("border-focus-strong"),"border-disabled":pt("border-disabled"),"border-selected-disabled":pt("border-selected-disabled"),"border-success":pt("border-success"),"border-warning":pt("border-warning"),"border-error":pt("border-error"),"border-error-focus":pt("border-error-focus"),"border-error-focus-strong":pt("border-error-focus-strong"),"border-error-strong":pt("border-error-strong"),"border-info":pt("border-info"),bg:pt("bg"),"bg-strong":pt("bg-strong"),"bg-stronger":pt("bg-stronger"),"bg-strongest":pt("bg-strongest"),"bg-hover":pt("bg-hover"),"bg-hover-strong":pt("bg-hover-strong"),"bg-hover-subtle":pt("bg-hover-subtle"),"bg-hover-neutral":pt("bg-hover-neutral"),"bg-hover-neutral-strong":pt("bg-hover-neutral-strong"),"bg-selected":pt("bg-selected"),"bg-selected-hover":pt("bg-selected-hover"),"bg-selected-strong":pt("bg-selected-strong"),"bg-selected-stronger":pt("bg-selected-stronger"),"bg-selected-strongest":pt("bg-selected-strongest"),"bg-selected-strongest-hover":pt("bg-selected-strongest-hover"),"bg-disabled":pt("bg-disabled"),"bg-selected-disabled":pt("bg-selected-disabled"),"bg-selected-stronger-disabled":pt("bg-selected-stronger-disabled"),"bg-success":pt("bg-success"),"bg-success-hover":pt("bg-success-hover"),"bg-success-strong":pt("bg-success-strong"),"bg-success-strong-hover":pt("bg-success-strong-hover"),"bg-warning":pt("bg-warning"),"bg-warning-hover":pt("bg-warning-hover"),"bg-warning-strong":pt("bg-warning-strong"),"bg-warning-strong-hover":pt("bg-warning-strong-hover"),"bg-info":pt("bg-info"),"bg-info-hover":pt("bg-info-hover"),"bg-info-strong":pt("bg-info-strong"),"bg-info-strong-hover":pt("bg-info-strong-hover"),"bg-error":pt("bg-error"),"bg-error-hover":pt("bg-error-hover"),"bg-error-strong":pt("bg-error-strong"),"bg-error-strong-hover":pt("bg-error-strong-hover"),"bg-inverse":pt("bg-inverse"),"bg-inverse-subtle":pt("bg-inverse-subtle"),"bg-inverse-subtler":pt("bg-inverse-subtler"),"bg-inverse-subtlest":pt("bg-inverse-subtlest"),"bg-inverse-hover":pt("bg-inverse-hover"),"bg-primary":pt("bg-primary"),"bg-primary-subtle":pt("bg-primary-subtle"),"bg-primary-subtler":pt("bg-primary-subtler"),"bg-primary-subtlest":pt("bg-primary-subtlest"),"bg-available":pt("bg-available"),"bg-primary-hover":pt("bg-primary-hover"),"bg-primary-subtlest-hover":pt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":pt("bg-primary-subtlest-selected"),"overlay-strong":pt("overlay-strong"),"overlay-subtle":pt("overlay-subtle"),hyperlink:pt("hyperlink"),"hyperlink-hover":pt("hyperlink-hover"),"hyperlink-visited":pt("hyperlink-visited"),"hyperlink-inverse":pt("hyperlink-inverse"),"focus-ring":pt("focus-ring"),"focus-ring-inverse":pt("focus-ring-inverse")},xt={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Ft["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:vt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},Dt=e=>r=>{var t;const n=r.theme,a=dt(xt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${lt(a,e,n.overrides.border)}px`:`${a[e]}px`},wt=e=>1===e.length&&"theme"in e[0],Ft={"width-005":Dt("width-005"),"width-010":Dt("width-010"),"width-020":Dt("width-020"),"width-040":Dt("width-040"),solid:($t="solid",e=>{var r;const t=e.theme,n=dt(xt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?lt(n,$t,t.overrides.border):n[$t];return"function"==typeof a?a(e):a}),"dashed-default":(e=>(...r)=>t=>{var n;const a=wt(r)?[]:r,i=wt(r)?r[0]:t,o=i.theme,s=dt(xt,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?lt(s,e,o.overrides.border):s[e])(...a)(i)})("dashed-default")};var $t;const Et={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Ct=e=>r=>{var t;const n=r.theme,a=dt(Et,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?lt(a,e,n.overrides.breakpoint):a[e],i},St={"xxs-min":Ct("xxs-min"),"xxs-max":Ct("xxs-max"),"xs-min":Ct("xs-min"),"xs-max":Ct("xs-max"),"sm-min":Ct("sm-min"),"sm-max":Ct("sm-max"),"md-min":Ct("md-min"),"md-max":Ct("md-max"),"lg-min":Ct("lg-min"),"lg-max":Ct("lg-max"),"xl-min":Ct("xl-min"),"xl-max":Ct("xl-max"),"xxl-min":Ct("xxl-min"),"xxs-column":Ct("xxs-column"),"xs-column":Ct("xs-column"),"sm-column":Ct("sm-column"),"md-column":Ct("md-column"),"lg-column":Ct("lg-column"),"xl-column":Ct("xl-column"),"xxl-column":Ct("xxl-column"),"xxs-gutter":Ct("xxs-gutter"),"xs-gutter":Ct("xs-gutter"),"sm-gutter":Ct("sm-gutter"),"md-gutter":Ct("md-gutter"),"lg-gutter":Ct("lg-gutter"),"xl-gutter":Ct("xl-gutter"),"xxl-gutter":Ct("xxl-gutter"),"xxs-margin":Ct("xxs-margin"),"xs-margin":Ct("xs-margin"),"sm-margin":Ct("sm-margin"),"md-margin":Ct("md-margin"),"lg-margin":Ct("lg-margin"),"xl-margin":Ct("xl-margin"),"xxl-margin":Ct("xxl-margin")},Bt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=St["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),At={MaxWidth:Bt("max-width"),MinWidth:Bt("min-width")},Ot={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},zt={collections:{lifesg:Ot,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ot,mylegacy:Ot,ccube:Ot,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Mt=e=>r=>{var t;const n=r.theme,a=dt(zt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?lt(a,e,n.overrides.fontSpec):a[e]},kt={"header-size-xxl":Mt("header-size-xxl"),"header-size-xl":Mt("header-size-xl"),"header-size-lg":Mt("header-size-lg"),"header-size-md":Mt("header-size-md"),"header-size-sm":Mt("header-size-sm"),"header-size-xs":Mt("header-size-xs"),"header-lh-xxl":Mt("header-lh-xxl"),"header-lh-xl":Mt("header-lh-xl"),"header-lh-lg":Mt("header-lh-lg"),"header-lh-md":Mt("header-lh-md"),"header-lh-sm":Mt("header-lh-sm"),"header-lh-xs":Mt("header-lh-xs"),"header-ls-xxl":Mt("header-ls-xxl"),"header-ls-xl":Mt("header-ls-xl"),"header-ls-lg":Mt("header-ls-lg"),"header-ls-md":Mt("header-ls-md"),"header-ls-sm":Mt("header-ls-sm"),"header-ls-xs":Mt("header-ls-xs"),"weight-light":Mt("weight-light"),"weight-regular":Mt("weight-regular"),"weight-semibold":Mt("weight-semibold"),"weight-bold":Mt("weight-bold"),"font-family":Mt("font-family"),"body-size-baseline":Mt("body-size-baseline"),"body-size-md":Mt("body-size-md"),"body-size-sm":Mt("body-size-sm"),"body-size-xs":Mt("body-size-xs"),"body-lh-baseline":Mt("body-lh-baseline"),"body-lh-md":Mt("body-lh-md"),"body-lh-sm":Mt("body-lh-sm"),"body-lh-xs":Mt("body-lh-xs"),"body-ls-baseline":Mt("body-ls-baseline"),"body-ls-md":Mt("body-ls-md"),"body-ls-sm":Mt("body-ls-sm"),"body-ls-xs":Mt("body-ls-xs"),"formlabel-size-baseline":Mt("formlabel-size-baseline"),"formlabel-size-lg":Mt("formlabel-size-lg"),"formlabel-lh-baseline":Mt("formlabel-lh-baseline"),"formlabel-lh-lg":Mt("formlabel-lh-lg"),"formlabel-ls-baseline":Mt("formlabel-ls-baseline"),"formlabel-ls-lg":Mt("formlabel-ls-lg")},jt={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Yt=e=>r=>{var t;const n=r.theme,a=dt(jt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${lt(a,e,n.overrides.radius)}px`:`${a[e]}px`},Tt={none:Yt("none"),xs:Yt("xs"),sm:Yt("sm"),md:Yt("md"),lg:Yt("lg"),full:Yt("full")},_t={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Rt=e=>r=>{var t;const n=r.theme,a=dt(_t,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${lt(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Ht={"spacing-0":Rt("spacing-0"),"spacing-4":Rt("spacing-4"),"spacing-8":Rt("spacing-8"),"spacing-12":Rt("spacing-12"),"spacing-16":Rt("spacing-16"),"spacing-20":Rt("spacing-20"),"spacing-24":Rt("spacing-24"),"spacing-32":Rt("spacing-32"),"spacing-40":Rt("spacing-40"),"spacing-48":Rt("spacing-48"),"spacing-64":Rt("spacing-64"),"spacing-72":Rt("spacing-72"),"layout-xs":Rt("layout-xs"),"layout-sm":Rt("layout-sm"),"layout-md":Rt("layout-md"),"layout-lg":Rt("layout-lg"),"layout-xl":Rt("layout-xl"),"layout-xxl":Rt("layout-xxl"),"layout-xxxl":Rt("layout-xxxl")},Lt=(e,r,t,n)=>y`
    font-family: ${Mt("font-family")};
    font-size: ${Mt(e)};
    font-weight: ${Mt(r)};
    line-height: ${Mt(t)};
    letter-spacing: ${Mt(n)};
`,Wt={"header-xxl-light":Lt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Lt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Lt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Lt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Lt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Lt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Lt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Lt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Lt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Lt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Lt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Lt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Lt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Lt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Lt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Lt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Lt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Lt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Lt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Lt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Lt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Lt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Lt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Lt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Lt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Lt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Lt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Lt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Lt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Lt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Lt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Lt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Lt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Lt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Lt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Lt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Lt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Lt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Lt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Lt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Lt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Lt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},It={collections:{lifesg:Wt,bookingsg:Wt,rbs:Wt,mylegacy:Wt,ccube:Wt,pa:Wt},defaultValue:"lifesg"},Nt=e=>r=>{var t;const n=r.theme,a=dt(It,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?lt(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Pt={"header-xxl-light":Nt("header-xxl-light"),"header-xxl-regular":Nt("header-xxl-regular"),"header-xxl-semibold":Nt("header-xxl-semibold"),"header-xxl-bold":Nt("header-xxl-bold"),"header-xl-light":Nt("header-xl-light"),"header-xl-regular":Nt("header-xl-regular"),"header-xl-semibold":Nt("header-xl-semibold"),"header-xl-bold":Nt("header-xl-bold"),"header-lg-light":Nt("header-lg-light"),"header-lg-regular":Nt("header-lg-regular"),"header-lg-semibold":Nt("header-lg-semibold"),"header-lg-bold":Nt("header-lg-bold"),"header-md-light":Nt("header-md-light"),"header-md-regular":Nt("header-md-regular"),"header-md-semibold":Nt("header-md-semibold"),"header-md-bold":Nt("header-md-bold"),"header-sm-light":Nt("header-sm-light"),"header-sm-regular":Nt("header-sm-regular"),"header-sm-semibold":Nt("header-sm-semibold"),"header-sm-bold":Nt("header-sm-bold"),"header-xs-light":Nt("header-xs-light"),"header-xs-regular":Nt("header-xs-regular"),"header-xs-semibold":Nt("header-xs-semibold"),"header-xs-bold":Nt("header-xs-bold"),"body-baseline-light":Nt("body-baseline-light"),"body-baseline-regular":Nt("body-baseline-regular"),"body-baseline-semibold":Nt("body-baseline-semibold"),"body-baseline-bold":Nt("body-baseline-bold"),"body-md-light":Nt("body-md-light"),"body-md-regular":Nt("body-md-regular"),"body-md-semibold":Nt("body-md-semibold"),"body-md-bold":Nt("body-md-bold"),"body-sm-light":Nt("body-sm-light"),"body-sm-regular":Nt("body-sm-regular"),"body-sm-semibold":Nt("body-sm-semibold"),"body-sm-bold":Nt("body-sm-bold"),"body-xs-light":Nt("body-xs-light"),"body-xs-regular":Nt("body-xs-regular"),"body-xs-semibold":Nt("body-xs-semibold"),"body-xs-bold":Nt("body-xs-bold"),"formlabel-baseline-semibold":Nt("formlabel-baseline-semibold"),"formlabel-lg-semibold":Nt("formlabel-lg-semibold")},Vt=Object.assign(Object.assign({},vt),{Primitive:mt}),Zt=Object.assign(Object.assign({},Pt),{Spec:kt}),Ut=ht,Jt=Ft,Xt=Ht,qt=Tt,Gt=St,Qt=At,Kt=e=>"small"===e?2.5:3;f.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Kt(e.$variant);return y`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const en=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Xt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Kt(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${qt.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Vt["border-focus"]};
    }
`,rn=f.button`
    ${en}
    cursor: pointer;
`;f.div`
    ${en}
`;const tn=p`
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
    border: ${Jt["width-010"]} ${Jt.solid} ${Vt.border};
    border-radius: ${qt.sm};
    background: ${Vt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Vt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Vt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${tn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Vt["bg-disabled"]};

                ${rn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Vt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${rn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border-color: ${Vt["border-error"]};

                :focus-within {
                    border-color: ${Vt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Vt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ut["duration-250"]} ${Ut["ease-default"]};
    margin-left: ${Xt["spacing-16"]};
`,f(m)`
    color: ${Vt.icon};
`,f.div`
    height: 1px;
    background: ${Vt.border};
    margin: 0 ${Xt["spacing-8"]};
`,f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${Vt["text-disabled"]};
            `}}
`;f(f.div`
    ${e=>"small"===e.$variant?Zt["body-md-regular"]:Zt["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return y`
                    ${r=1,y`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${Vt["text-subtler"]};
`;var nn=function(e,r){return nn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},nn(e,r)};var an=function(){return an=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},an.apply(this,arguments)};var on="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var sn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ln="object"==typeof on&&on&&on.Object===Object&&on,dn="object"==typeof self&&self&&self.Object===Object&&self,cn=ln||dn||Function("return this")(),un=cn,hn=function(){return un.Date.now()},bn=/\s/;var gn=function(e){for(var r=e.length;r--&&bn.test(e.charAt(r)););return r},mn=/^\s+/;var fn=function(e){return e?e.slice(0,gn(e)+1).replace(mn,""):e},yn=cn.Symbol,pn=yn,vn=Object.prototype,xn=vn.hasOwnProperty,Dn=vn.toString,wn=pn?pn.toStringTag:void 0;var Fn=function(e){var r=xn.call(e,wn),t=e[wn];try{e[wn]=void 0;var n=!0}catch(e){}var a=Dn.call(e);return n&&(r?e[wn]=t:delete e[wn]),a},$n=Object.prototype.toString;var En=Fn,Cn=function(e){return $n.call(e)},Sn=yn?yn.toStringTag:void 0;var Bn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Sn&&Sn in Object(e)?En(e):Cn(e)},An=function(e){return null!=e&&"object"==typeof e};var On=fn,zn=sn,Mn=function(e){return"symbol"==typeof e||An(e)&&"[object Symbol]"==Bn(e)},kn=/^[-+]0x[0-9a-f]+$/i,jn=/^0b[01]+$/i,Yn=/^0o[0-7]+$/i,Tn=parseInt;var _n=sn,Rn=hn,Hn=function(e){if("number"==typeof e)return e;if(Mn(e))return NaN;if(zn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=zn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=On(e);var t=jn.test(e);return t||Yn.test(e)?Tn(e.slice(2),t?2:8):kn.test(e)?NaN:+e},Ln=Math.max,Wn=Math.min;var In=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=Rn();if(g(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Wn(t,i-(e-d)):t}(e))}function f(e){return s=void 0,h&&n?b(e):(n=a=void 0,o)}function y(){var e=Rn(),t=g(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Hn(r)||0,_n(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Ln(Hn(t.maxWait)||0,r):i,h="trailing"in t?!!t.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(Rn())},y},Nn=In,Pn=sn;var Vn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Pn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Nn(e,r,{leading:n,maxWait:r,trailing:a})},Zn=function(e,r,t,n){switch(r){case"debounce":return In(e,t,n);case"throttle":return Vn(e,t,n);default:return e}},Un=function(e){return"function"==typeof e},Jn=function(){return"undefined"==typeof window},Xn=function(e){return e instanceof Element||e instanceof HTMLDocument},qn=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Un(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Jn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Jn())return null;if(r)return document.querySelector(r);if(n&&Xn(n))return n;if(t.targetRef&&Xn(t.targetRef.current))return t.targetRef.current;var a=j(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=qn(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Jn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Un(r)?"renderProp":Un(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Jn()||(t.resizeHandler=Zn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}nn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Jn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Gn,Qn=Jn()?u:h;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Gn||(Gn={}));const Kn=f.div`
    display: flex;
    flex-direction: column;
`,ea=e=>"right"===e?"bottom-end":"bottom-start",ra=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:g=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const j=v(),Y=Gt["sm-max"]({theme:j}),T=i(null),_=i(null),{width:R}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return Qn((function(){if(!Jn()){var e=qn(m,w,c,h);v.current=Zn((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Jn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,m,g,p.current]),an({ref:p},D)}({targetRef:T,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<Y;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:L,floatingStyles:W,context:I}=D({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:w,placement:ea(f),middleware:[F(m),$(),E({limiter:C()}),S({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),H]}),N=(()=>{const[e,r]=o(void 0),t=x();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Gn.Change,e),t.events.emit(Gn.Ready),()=>t.events.off(Gn.Change,e)}),[t]),e})(),{isMounted:P,styles:V}=B(I,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=A(I,{enabled:n,toggle:g}),U=O(I,{enabled:n}),{getReferenceProps:J,getFloatingProps:X}=z([Z,U]);return e(r,{children:[t("div",Object.assign({ref:e=>{T.current=e,L.setReference(e)}},J(),{children:c()})),P&&t(M,{children:t(k,Object.assign({context:I,modal:!1,initialFocus:_,returnFocus:!1},{children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(p=null!=b?b:N)&&void 0!==p?p:50})},X(),{children:t(Kn,Object.assign({ref:_,style:Object.assign({},V),inert:V.opacity<1?"":void 0},{children:h({elementWidth:R})}))}))}))})]})},ta=f.div`
    --vertical-inset: ${Xt["spacing-24"]};
    --horizontal-inset: ${Xt["spacing-20"]};
    --header-bottom-spacing: ${Xt["spacing-4"]};

    border: ${Jt["width-010"]} ${Jt.solid} ${Vt.border};
    border-radius: ${qt.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Qt.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var na={exports:{}};na.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],b=c&&c[1];o[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,g,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,g,y,p,v,x)):new Date(m,f,g,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){o[1]=s[g-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var aa=H(na.exports),ia={exports:{}};ia.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var oa=H(ia.exports),sa={exports:{}};sa.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var la=H(sa.exports),da={exports:{}};da.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ca,ua,ha,ba=H(da.exports),ga={exports:{}},ma=H(ga.exports=(ca={year:0,month:1,day:2,hour:3,minute:4,second:5},ua={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=ua[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ua[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ca[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));W.extend(oa),W.extend(ba),W.extend(la),W.extend(aa),W.extend(ma),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=W(r).startOf("week");return fa(t).map((e=>ya(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ya(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(W(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+W(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=W(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?W(n):void 0,a?W(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(ha||(ha={}));const fa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ya=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},pa=[1,3,5,7,8,10,12],va=[4,6,9,11];var xa,Da,wa,Fa;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":pa.includes(i)?Math.min(a,31).toString():va.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=W(e,t);return W(r,t).diff(n,"minute")},e.toDayjs=e=>e?W(e):W(),e.addMinutesToTime=(e,r,t="HH:mm")=>W(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>W(e).isSame(W(r),t)}(xa||(xa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!W(e).isBefore(n,"day"))||!(!a||!W(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(W(e).isValid())return e}return""}}(Da||(Da={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(wa||(wa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Fa||(Fa={}));const $a=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ea=p`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ca=f.div`
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
    animation: ${Ea} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Sa=f(Ca)`
    animation-delay: -0.45s;
`,Ba=f(Ca)`
    animation-delay: -0.3s;
`,Aa=f(Ca)`
    animation-delay: -0.15s;
`,Oa=f.button`
    padding: ${Xt["spacing-8"]} ${Xt["spacing-16"]};
    min-width: 4rem;
    border: ${Jt["width-010"]} ${Jt.solid} transparent;
    border-radius: ${qt.sm};
    transition: all ${Ut["duration-250"]} ${Ut["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Vt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Vt["border-error-strong"]:Vt["border-primary"]};

                    color: ${e.$buttonIsDanger?Vt["text-error"]:Vt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Vt["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Vt.bg};
                    border-color: ${Vt.border};

                    color: ${e.$buttonIsDanger?Vt["text-error"]:Vt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Vt["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Vt["text-error"]:Vt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Vt["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${Vt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Vt["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Vt["bg-error-strong"]:Vt["bg-primary"]};

                    ${Qt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Vt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Vt["bg-error-strong-hover"]:Vt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${Zt["body-md-semibold"]}

                    ${Qt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${Zt["header-md-semibold"]}

                    ${Qt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${Zt["header-xs-semibold"]}

                    ${Qt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,za=f((({color:r,className:n,size:a})=>e($a,Object.assign({className:n,$size:a,$color:r},{children:[t(Ca,{id:"inner1"}),t(Sa,{id:"inner2"}),t(Ba,{id:"inner3"}),t(Aa,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Ma=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Oa,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(za,{}),t("span",{children:a})]}))};Ma.displayName="Button.Default";const ka=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Oa,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(za,{}),t("span",{children:a})]}))};ka.displayName="Button.Small";const ja=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Oa,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(za,{}),t("span",{children:a})]}))};ja.displayName="Button.Large";const Ya={Default:a.forwardRef(Ma),Small:a.forwardRef(ka),Large:a.forwardRef(ja)},Ta=f.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Xt["spacing-24"]};
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Vt["bg-hover-neutral"]};
            `}
    }
`,_a=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(Ta,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Ra=y`
    color: ${Vt.icon};
    height: 1rem;
    width: 1rem;
`,Ha=f(Y)`
    ${Ra}
`,La=f(T)`
    ${Ra}
`,Wa=f(m)`
    ${Ra}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ia=f.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Na=f.div`
    display: flex;
    flex: 1;
    position: relative;
`,Pa=f.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Va=f.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Vt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return y`
                display: none;
            `}}
`,Za=f.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ua=f.div`
    display: flex;
`,Ja=f.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?y`
                display: none;
            `:e.$expanded?y`
                ${Wa} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Xa=f.span`
    ${Zt["body-md-regular"]}
    color: ${Vt.text};
`,qa=f.div`
    display: flex;
`,Ga=f(_a)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Qa=f.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ka=f(Ya.Small)`
    flex: 1;
`,ei=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,ri=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${qt.md};
    margin: 0 0.5rem;
    transition: ${Ut["duration-150"]} ${Ut["ease-default"]};

    // default styles
    ${Zt["body-md-regular"]}
    border-radius: ${qt.md};
    border: ${Jt["width-010"]} ${Jt.solid} transparent;
    background-clip: border-box;
    color: ${Vt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?y`
                cursor: pointer;
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?y`
                background: ${Vt["bg-selected"]};
                border-color: ${Vt["border-selected"]};
                color: ${Vt["text-selected"]};
                font-weight: ${Zt.Spec["weight-semibold"]};

                ${r&&y`
                    &:hover {
                        background: ${Vt["bg-selected-hover"]};
                        border-color: ${Vt["border-selected-hover"]};
                        color: ${Vt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?y`
                color: ${Vt["text-primary"]};
                font-weight: ${Zt.Spec["weight-semibold"]};
            `:t?y`
                color: ${Vt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?y`
                &:hover {
                    background: ${Vt["bg-selected-hover"]};
                    border-color: ${Vt["border-selected-hover"]};
                    color: ${Vt["text-selected-hover"]};
                    font-weight: ${Zt.Spec["weight-semibold"]};
                }
            `:y`
            &:hover {
                background: ${Vt["bg-hover"]};
                color: ${Vt["text-hover"]};
                font-weight: ${Zt.Spec["weight-semibold"]};
            }
        `}}
`,ti=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onMonthSelect:c})=>{const u=b((()=>ha.generateMonths(W(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&o,i="end"===r&&n&&e.isBefore(n,"month")&&o;return t||i},g=e=>{const r=e.format("MMMM"),t=(n=e,!ha.isWithinRange(n,s?W(s):void 0,l?W(l):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":W().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||h(e),interactive:!t||d,month:r,variant:a}};return u.length?t(ei,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=g(e);return t(ri,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n)},{children:i}),i)}))}):null},ni=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,ai=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ut["duration-150"]} ${Ut["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Zt["body-md-regular"]}
    border-radius: ${qt.md};
    border: ${Jt["width-010"]} ${Jt.solid} transparent;
    background-clip: border-box;
    color: ${Vt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?y`
                cursor: pointer;
            `:r?y`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?y`
                background: ${Vt["bg-selected"]};
                border-color: ${Vt["border-selected"]};
                color: ${Vt["text-selected"]};
                font-weight: ${Zt.Spec["weight-semibold"]};

                ${r&&y`
                    &:hover {
                        background: ${Vt["bg-selected-hover"]};
                        border-color: ${Vt["border-selected-hover"]};
                        color: ${Vt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?y`
                color: ${Vt["text-primary"]};
                font-weight: ${Zt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?y`
                color: ${Vt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?y`
                &:hover {
                    background: ${Vt["bg-selected-hover"]};
                    border-color: ${Vt["border-selected-hover"]};
                    color: ${Vt["text-selected-hover"]};
                    font-weight: ${Zt.Spec["weight-semibold"]};
                }
            `:y`
            &:hover {
                background: ${Vt["bg-hover"]};
                color: ${Vt["text-hover"]};
                font-weight: ${Zt.Spec["weight-semibold"]};
            }
        `}}
`,ii=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onYearSelect:c})=>{const u=b((()=>ha.generateDecadeOfYears(W(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&o,i="end"===r&&n&&e.isBefore(n,"year")&&o;return t||i},g=e=>{const r=[0,11].includes(u.indexOf(e)),t=e.year(),n=(a=e,!ha.isWithinRange(a,s?W(s):void 0,l?W(l):void 0,"year"));var a;const o=r?"other-decade":i.isSame(e,"year")?"selected-year":W().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:t,variant:o}};return u.length?t(ni,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=g(e);return t(ai,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n)},{children:i}),i)}))}):null},oi=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:h,selectedStartDate:b,selectedEndDate:m,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A}=n,O=_(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[z,M]=o(xa.toDayjs(l)),[k,j]=o(xa.toDayjs(l)),[Y,T]=o("default"),R=i(null),H=i(null),L=i();g(a,(()=>({defaultView(){T("default")},resetView(){const e=xa.toDayjs(l);M(e),j(e),T("default")},setCalendarDate(e){const r=xa.toDayjs(e);M(r),j(r)}}))),u((()=>{const e=xa.toDayjs(l);M(e),j(e)}),[l]),u((()=>{J(k)}),[k]);const I=()=>{"month-options"!==Y?(T("month-options"),L.current.focus()):(T("default"),M(k))},N=()=>{"default"!==Y?(T("default"),M(k)):T("year-options")},P=()=>{L.current.focus();const e=$?$(z):z.subtract(1,"month");switch(Y){case"default":j(e),M(e);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},V=()=>{L.current.focus();const e=E?E(z):z.add(1,"month");switch(Y){case"default":j(e),M(e);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},Z=e=>{M(e),j(e),x||T("default")},U=()=>{const e=xa.toDayjs(l);M(e),j(e),"default"===Y?X("reset"):T("default")},J=e=>{v&&v(e)},X=e=>{w&&w(e)},q=()=>{if(!d||p)return!1;const e=W(d);return"month-options"===Y?!ha.isPreviousYearWithinRange(z,e):"year-options"===Y?!ha.isPreviousDecadeWithinRange(z,e):C?C(z):!ha.isPreviousMonthWithinRange(z,e)},G=()=>{if(!c||p)return!1;const e=W(c);return"month-options"===Y?!ha.isNextYearWithinRange(z,e):"year-options"===Y?!ha.isNextDecadeWithinRange(z,e):S?S(z):!ha.isNextMonthWithinRange(z,e)},Q=()=>{if("year-options"===Y){const{beginDecade:e,endDecade:r}=ha.getStartEndDecade(z);return`${e} to ${r}`}return A?A(z):z.format("YYYY")},K=()=>{const n=B?B(z):z.format("MMM");return e(r,{children:[e(Ja,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===Y,$visible:"default"===Y,id:"month-dropdown",onClick:I},{children:[t(Xa,{children:n}),t(Wa,{})]})),e(Ja,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==Y,id:"year-dropdown",onClick:N},{children:[t(Xa,{children:Q()}),t(Wa,{})]}))]})},ee=()=>{switch(Y){case"month-options":return t(ti,{calendarDate:z,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:m,viewCalendarDate:k,isNewSelection:f,onMonthSelect:Z,allowDisabledSelection:p});case"year-options":return t(ii,{calendarDate:z,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:m,viewCalendarDate:k,isNewSelection:f,onYearSelect:Z,allowDisabledSelection:p});default:return null}};return e(Ia,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container"},O,{children:[F&&e(Za,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Ua,{children:K()}),e(qa,{children:[t(Ga,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:t(Ha,{})})),t(Ga,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(La,{})}))]})]})),t(Na,{children:(()=>{const n="function"==typeof s?s({calendarDate:k,currentView:Y}):s;return e(r,y?{children:["default"===Y&&n,ee()]}:{children:[t(Pa,{children:n}),t(Va,Object.assign({$visible:"default"!==Y},{children:ee()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===Y)&&D;return e(Qa,{children:[t(Ka,Object.assign({ref:H,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Ka,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(M(k),"default"===Y?X("confirmed"):T("default"))},disabled:r},{children:"Done"}))]})})()]}))})),si=f.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,li=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Zt["body-sm-semibold"]};
    color: ${Vt.text};
`,di=f.div`
    grid-column: 1 / -1;
    display: flex;
`,ci=e=>{let r=Vt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Vt["bg-hover"],t=Vt["bg-hover"];break;case"hover":r=Vt["bg-hover-strong"],t=Vt["bg-hover-strong"];break;case"hover-outline":r=Vt["bg-hover-subtle"],t=Vt["border-hover"];break;case"selected-outline":r=Vt["bg-selected"],t=Vt["border-selected"];break;case"selected-outline-subtle":r=Vt["bg-selected"],t=Vt["border-selected-subtle"];break;case"selected-hover":r=Vt["bg-selected-hover"];break;case"selected-hover-outline":r=Vt["bg-selected-hover"],t=Vt["border-selected-hover"]}return{color:r,borderColor:t}},ui=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,hi=f.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ut["duration-150"]} ${Ut["ease-default"]};
    border: ${Jt["width-010"]} ${Jt.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=ci(e);return y`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,bi=f(hi)`
    left: 0;
`,gi=f(hi)`
    right: 0;
`,mi=f.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ut["duration-150"]} ${Ut["ease-default"]};

    border: ${Jt["width-010"]} ${Jt.solid} transparent;
    border-radius: ${qt.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=ci(e);return y`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,fi=f(mi)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,yi=f(mi)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,pi=f.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Zt["body-md-regular"]}
    transition: ${Ut["duration-150"]} ${Ut["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return y`
                color: ${Vt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return y`
                    font-weight: ${Zt.Spec["weight-semibold"]};
                    color: ${Vt["text-selected"]};
                `;case"selected-hover":return y`
                    font-weight: ${Zt.Spec["weight-semibold"]};
                    color: ${Vt["text-selected-hover"]};
                `;case"current":return y`
                    font-weight: ${Zt.Spec["weight-semibold"]};
                    color: ${Vt["text-primary"]};
                `;case"hover":return y`
                    font-weight: ${Zt.Spec["weight-semibold"]};
                    color: ${Vt["text-hover"]};
                `;case"unavailable":return y`
                    color: ${Vt["text-disabled-subtlest"]};
                `;case"hidden":return y`
                    visibility: hidden;
                `;default:return y`
                    color: ${Vt.text};
                `}}}
`,vi=f.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,xi=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:i,labelType:o,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=W().isSame(c,"day");return e(ui,{children:[t(bi,{$type:r}),t(fi,{$type:a}),t(gi,{$type:n}),t(yi,{$type:i}),e(pi,Object.assign({$type:o,$disabled:s,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)}},{children:[c.date(),d&&g&&t(vi,{$disabled:s})]}))]})},Di=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:b,onHover:g})=>{const m=ha.isDisabledDay(e,d,s,l),f=!m||c,y=()=>{const e=W(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:()=>{b(e,!f)},onHover:()=>{g(e.format("YYYY-MM-DD"),!f)}};return t(xi,Object.assign({},p,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(W().isSame(e,"day")&&!m)t.labelType="current";else if(u){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return;const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=y();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};W.extend(oa);const wi=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:m})=>{const f=b((()=>ha.generateDays(r)),[r]),[y,p]=o(""),v=(e,r)=>{r&&!g||l(e)},x=(e,r)=>{r&&!g||(p(e),d(e))},D=()=>{p(""),d("")};return e(si,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,r)=>t(li,{children:W(e).format("ddd")},`week-day-${r}`))),f.map(((e,o)=>t(di,Object.assign({onMouseLeave:D},{children:e.map(((e,o)=>t(Di,{date:e,calendarDate:r,startDate:i,endDate:s,hoverDate:y,currentFocus:n,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:g,isNewSelection:c,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${o}`)))}),o)))]}))},Fi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=ha.isDisabledDay(e,s,i,o),b=!h||l,{start:g,end:m}=n?ha.getFixedRangeStartEnd(xa.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?ha.getFixedRangeStartEnd(xa.toDayjs(a),d):{start:void 0,end:void 0},p=n&&e.isBetween(g,m,"day","[]"),v=a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(g,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(xi,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!h&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===g,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==g&&(r.circleLeft="selected-hover")),r})()))},$i=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const h=b((()=>ha.generateDays(r)),[r]),[g,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!W(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(si,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(li,{children:W(e).format("ddd")},`week-day-${r}`))),h.map(((e,i)=>t(di,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>t(Fi,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))}),i)))]}))},Ei=f.div`
    width: 100%;
    background: ${Vt.bg};
`,Ci=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const h=ha.isDisabledDay(e,s,i,o),b=!h||l,g={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(xi,Object.assign({},g,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":W().isSame(e,"day")&&!h&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};W.extend(oa);const Si=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const h=b((()=>ha.generateDays(r)),[r]),[g,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(si,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(li,{children:W(e).format("ddd")},`week-day-${r}`))),h.map(((e,i)=>t(di,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>t(Ci,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))}),i)))]}))},Bi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=ha.isDisabledDay(e,s,i,o),h=!u||l,{start:b,end:g}=ha.getWeekStartEnd(xa.toDayjs(n)),{start:m,end:f}=ha.getWeekStartEnd(xa.toDayjs(a)),y=n&&e.isBetween(b,g,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(b)||p&&e.isSame(m),x=y&&e.isSame(g)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return t(xi,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Ai=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=b((()=>ha.generateDays(r)),[r]),[h,g]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!W(e).isSame(t,"month")&&g("")},f=(e,r)=>{r&&!c||(g(e),s(e))},y=()=>{g(""),s("")};return e(si,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,r)=>t(li,{children:W(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(di,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Bi,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))}),i)))]}))},Oi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:b,allowDisabledSelection:m,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const D=i(),w=i(void 0);g(x,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const F=e=>{const r=e.format("YYYY-MM-DD");D.current.setCalendarDate(r),E(r)},$=e=>{C(e)},E=e=>{n&&n(e)},C=e=>{a&&a(e)},S=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Ei,{children:t(oi,Object.assign({ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:b,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||S(e),w.current=e},initialCalendarDate:y},{children:({calendarDate:r})=>(r=>{switch(u){case"week":return t(Ai,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:m,onSelect:F,onHover:$});case"fixed-range":return t($i,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:m,onSelect:F,onHover:$,numberOfDays:p});case"single":return t(Si,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:h,maxDate:b,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$});default:return t(wi,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:b,isNewSelection:f,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$})}})(r)}))})})),zi=a.forwardRef(((e,r)=>{var{width:n}=e,a=_(e,["width"]);return t(ta,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:t(Oi,Object.assign({ref:r},a))}))})),Mi=f.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return y`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return y`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return y`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return y`
                    background-color: ${Vt.bg};
                    border: ${Jt["width-010"]} ${Jt.solid}
                        ${Vt["border-primary"]};
                    color: ${Vt["text-primary"]};

                    :hover {
                        background-color: ${Vt["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Vt.bg};
                    border: ${Jt["width-010"]} ${Jt.solid}
                        ${Vt.border};
                    color: ${Vt["text-primary"]};

                    :hover {
                        background-color: ${Vt["bg-hover-neutral"]};
                    }
                `;default:return y`
                    background-color: ${Vt["bg-primary"]};
                    border: none;
                    color: ${Vt["text-inverse"]};

                    :hover {
                        background-color: ${Vt["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Vt["bg-disabled"]};
        border: ${Jt["width-010"]} ${Jt.solid}
            ${Vt["border-disabled"]};
        color: ${Vt["text-disabled"]};
        cursor: not-allowed;
    }
`,ki=f(a.forwardRef(((e,r)=>{var{"data-testid":n,styleType:a="primary",children:i,sizeType:o="default",type:s="button"}=e,l=_(e,["data-testid","styleType","children","sizeType","type"]);return t(Mi,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:a},l,{children:i}))})))`
    margin: ${Xt["spacing-8"]};
`,ji=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Vt["bg-strong"]};
    border-radius: ${qt.sm};
`,Yi=f(Ya.Default)`
    color: ${e=>e.$enableDateClick?Vt["text-primary"]:Vt.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return y`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,Ti=r=>{var{selectedDate:n,minDate:a,maxDate:i,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:d,onLeftArrowClick:c,onRightArrowClick:u,onCalendarDateSelect:h}=r,b=_(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const g=xa.toDayjs(n),m=xa.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),f=xa.isSame(n,W())&&d?"Today":g.format(l?"ddd":"dddd"),[y,p]=o(!1),v=e=>{h&&h(e),p(!y)},x=()=>{p(!1),c(n)},D=()=>{p(!1),u(n)};return t(ra,{enabled:!s,isOpen:y,renderElement:()=>e(ji,Object.assign({},b,{children:[t(ki,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!a&&(ha.isDisabledDay(g,void 0,a)||xa.isSame(g,a)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small"},{children:t(Ha,{})})),t(Yi,Object.assign({onClick:()=>!!h&&!s&&p(!y),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s},{children:`${m}, ${f}`})),t(ki,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!i&&(ha.isDisabledDay(g,void 0,void 0,i)||xa.isSame(g,i)),"aria-label":"Next day",onClick:D,styleType:"light",sizeType:"small"},{children:t(La,{})}))]})),renderDropdown:({elementWidth:e})=>t(zi,{variant:"single",initialCalendarDate:n,value:n,minDate:a,maxDate:i,onSelect:v,width:e}),onDismiss:()=>p(!1),onClose:()=>p(!1),offset:8})};export{Ti as DateNavigator};
//# sourceMappingURL=index.js.map
