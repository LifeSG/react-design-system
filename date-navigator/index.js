import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useMemo as h,useImperativeHandle as b}from"react";import{ChevronDownIcon as m}from"@lifesg/react-icons/chevron-down";import f,{css as y,keyframes as p,useTheme as v}from"styled-components";import{useFloatingTree as x,useFloating as D,autoUpdate as w,offset as F,flip as $,shift as E,limitShift as C,size as S,useTransitionStyles as B,useClick as A,useDismiss as z,useInteractions as M,FloatingPortal as O,FloatingFocusManager as k}from"@floating-ui/react";import{findDOMNode as Y}from"react-dom";import{ChevronLeftIcon as T}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as j}from"@lifesg/react-icons/chevron-right";function _(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H={exports:{}};H.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,o=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();x[a]&&(i=a),t&&(x[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?y-x:y+(6-x),f);case s:case g:return b(p+"Hours",0);case o:return b(p+"Minutes",1);case a:return b(p+"Seconds",2);case i:return b(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,h=this;n=Number(n);var b=E.p(c),m=function(e){var r=$(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===s)return m(1);if(b===l)return m(7);var f=(g={},g[a]=r,g[o]=t,g[i]=e,g)[b]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return E.s(a%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(a,o,!0);case"A":return b(a,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,h){var b,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-p)/6048e5;break;case s:b=(v-p)/864e5;break;case o:b=v/t;break;case a:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:E.a(b)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var W=L(H.exports),I=Array.isArray,N="object"==typeof R&&R&&R.Object===Object&&R,P="object"==typeof self&&self&&self.Object===Object&&self,V=N||P||Function("return this")(),Z=V.Symbol,U=Z,J=Object.prototype,X=J.hasOwnProperty,q=J.toString,G=U?U.toStringTag:void 0;var Q=function(e){var r=X.call(e,G),t=e[G];try{e[G]=void 0;var n=!0}catch(e){}var i=q.call(e);return n&&(r?e[G]=t:delete e[G]),i},K=Object.prototype.toString;var ee=Q,re=function(e){return K.call(e)},te=Z?Z.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":te&&te in Object(e)?ee(e):re(e)};var ie=ne,ae=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ie(e)},se=I,le=oe,de=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;var ue=function(e,r){if(se(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!le(e))||(ce.test(e)||!de.test(e)||null!=r&&e in Object(r))};var ge=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},he=ne,be=ge;var me,fe=function(e){if(!be(e))return!1;var r=he(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ye=V["__core-js_shared__"],pe=(me=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var ve=function(e){return!!pe&&pe in e},xe=Function.prototype.toString;var De=fe,we=ve,Fe=ge,$e=function(e){if(null!=e){try{return xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ee=/^\[object .+?Constructor\]$/,Ce=Function.prototype,Se=Object.prototype,Be=Ce.toString,Ae=Se.hasOwnProperty,ze=RegExp("^"+Be.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},Oe=function(e){return!(!Fe(e)||we(e))&&(De(e)?ze:Ee).test($e(e))},ke=Me;var Ye=function(e,r){var t=ke(e,r);return Oe(t)?t:void 0},Te=Ye(Object,"create"),je=Te;var _e=function(){this.__data__=je?je(null):{},this.size=0};var Re=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Le=Te,He=Object.prototype.hasOwnProperty;var We=function(e){var r=this.__data__;if(Le){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return He.call(r,e)?r[e]:void 0},Ie=Te,Ne=Object.prototype.hasOwnProperty;var Pe=function(e){var r=this.__data__;return Ie?void 0!==r[e]:Ne.call(r,e)},Ve=Te;var Ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ve&&void 0===r?"__lodash_hash_undefined__":r,this},Ue=_e,Je=Re,Xe=We,qe=Pe,Ge=Ze;function Qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qe.prototype.clear=Ue,Qe.prototype.delete=Je,Qe.prototype.get=Xe,Qe.prototype.has=qe,Qe.prototype.set=Ge;var Ke=Qe;var er=function(){this.__data__=[],this.size=0};var rr=function(e,r){return e===r||e!=e&&r!=r};var tr=function(e,r){for(var t=e.length;t--;)if(rr(e[t][0],r))return t;return-1},nr=tr,ir=Array.prototype.splice;var ar=function(e){var r=this.__data__,t=nr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ir.call(r,t,1),--this.size,!0)},or=tr;var sr=function(e){var r=this.__data__,t=or(r,e);return t<0?void 0:r[t][1]},lr=tr;var dr=function(e){return lr(this.__data__,e)>-1},cr=tr;var ur=function(e,r){var t=this.__data__,n=cr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},gr=er,hr=ar,br=sr,mr=dr,fr=ur;function yr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}yr.prototype.clear=gr,yr.prototype.delete=hr,yr.prototype.get=br,yr.prototype.has=mr,yr.prototype.set=fr;var pr=yr,vr=Ye(V,"Map"),xr=Ke,Dr=pr,wr=vr;var Fr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var $r=function(e,r){var t=e.__data__;return Fr(r)?t["string"==typeof r?"string":"hash"]:t.map},Er=$r;var Cr=function(e){var r=Er(this,e).delete(e);return this.size-=r?1:0,r},Sr=$r;var Br=function(e){return Sr(this,e).get(e)},Ar=$r;var zr=function(e){return Ar(this,e).has(e)},Mr=$r;var Or=function(e,r){var t=Mr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},kr=function(){this.size=0,this.__data__={hash:new xr,map:new(wr||Dr),string:new xr}},Yr=Cr,Tr=Br,jr=zr,_r=Or;function Rr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Rr.prototype.clear=kr,Rr.prototype.delete=Yr,Rr.prototype.get=Tr,Rr.prototype.has=jr,Rr.prototype.set=_r;var Lr=Rr;function Hr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(Hr.Cache||Lr),t}Hr.Cache=Lr;var Wr=Hr;var Ir=function(e){var r=Wr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Nr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pr=/\\(\\)?/g,Vr=Ir((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Nr,(function(e,t,n,i){r.push(n?i.replace(Pr,"$1"):t||e)})),r}));var Zr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Ur=I,Jr=oe,Xr=Z?Z.prototype:void 0,qr=Xr?Xr.toString:void 0;var Gr=function e(r){if("string"==typeof r)return r;if(Ur(r))return Zr(r,e)+"";if(Jr(r))return qr?qr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Qr=Gr;var Kr=I,et=ue,rt=Vr,tt=function(e){return null==e?"":Qr(e)};var nt=oe;var it=function(e,r){return Kr(e)?e:et(e,r)?[e]:rt(tt(e))},at=function(e){if("string"==typeof e||nt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ot=function(e,r){for(var t=0,n=(r=it(r,e)).length;null!=e&&t<n;)e=e[at(r[t++])];return t&&t==n?e:void 0};var st=L((function(e,r,t){var n=null==e?void 0:ot(e,r);return void 0===n?t:n}));const lt=(e,r,t)=>st(t,r)||st(e,r),dt=(e,r)=>{const t=r||e.defaultValue;return st(e.collections,t)},ct={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ut=e=>r=>{var t;const n=r.theme,i=dt(ct,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${lt(i,e,n.overrides.border)}px`:`${i[e]}px`},gt={"width-005":ut("width-005"),"width-010":ut("width-010"),"width-020":ut("width-020"),"width-040":ut("width-040"),solid:(ht="solid",e=>{var r;const t=e.theme,n=dt(ct,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?lt(n,ht,t.overrides.border):n[ht];return"function"==typeof i?i(e):i})};var ht;const bt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},mt=e=>r=>{var t;const n=r.theme,i=dt(bt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?lt(i,e,n.overrides.primitiveColour):i[e]},ft={"brand-10":mt("brand-10"),"brand-20":mt("brand-20"),"brand-30":mt("brand-30"),"brand-40":mt("brand-40"),"brand-50":mt("brand-50"),"brand-60":mt("brand-60"),"brand-70":mt("brand-70"),"brand-80":mt("brand-80"),"brand-90":mt("brand-90"),"brand-95":mt("brand-95"),"brand-100":mt("brand-100"),"primary-10":mt("primary-10"),"primary-20":mt("primary-20"),"primary-30":mt("primary-30"),"primary-40":mt("primary-40"),"primary-50":mt("primary-50"),"primary-60":mt("primary-60"),"primary-70":mt("primary-70"),"primary-80":mt("primary-80"),"primary-90":mt("primary-90"),"primary-95":mt("primary-95"),"primary-100":mt("primary-100"),"secondary-10":mt("secondary-10"),"secondary-20":mt("secondary-20"),"secondary-30":mt("secondary-30"),"secondary-40":mt("secondary-40"),"secondary-50":mt("secondary-50"),"secondary-60":mt("secondary-60"),"secondary-70":mt("secondary-70"),"secondary-80":mt("secondary-80"),"secondary-90":mt("secondary-90"),"secondary-95":mt("secondary-95"),"secondary-100":mt("secondary-100"),"neutral-10":mt("neutral-10"),"neutral-20":mt("neutral-20"),"neutral-30":mt("neutral-30"),"neutral-40":mt("neutral-40"),"neutral-50":mt("neutral-50"),"neutral-60":mt("neutral-60"),"neutral-70":mt("neutral-70"),"neutral-80":mt("neutral-80"),"neutral-90":mt("neutral-90"),"neutral-95":mt("neutral-95"),"neutral-100":mt("neutral-100"),"success-10":mt("success-10"),"success-20":mt("success-20"),"success-30":mt("success-30"),"success-40":mt("success-40"),"success-50":mt("success-50"),"success-60":mt("success-60"),"success-70":mt("success-70"),"success-80":mt("success-80"),"success-90":mt("success-90"),"success-95":mt("success-95"),"success-100":mt("success-100"),"warning-10":mt("warning-10"),"warning-20":mt("warning-20"),"warning-30":mt("warning-30"),"warning-40":mt("warning-40"),"warning-50":mt("warning-50"),"warning-60":mt("warning-60"),"warning-70":mt("warning-70"),"warning-80":mt("warning-80"),"warning-90":mt("warning-90"),"warning-95":mt("warning-95"),"warning-100":mt("warning-100"),"error-10":mt("error-10"),"error-20":mt("error-20"),"error-30":mt("error-30"),"error-40":mt("error-40"),"error-50":mt("error-50"),"error-60":mt("error-60"),"error-70":mt("error-70"),"error-80":mt("error-80"),"error-90":mt("error-90"),"error-95":mt("error-95"),"error-100":mt("error-100"),"info-10":mt("info-10"),"info-20":mt("info-20"),"info-30":mt("info-30"),"info-40":mt("info-40"),"info-50":mt("info-50"),"info-60":mt("info-60"),"info-70":mt("info-70"),"info-80":mt("info-80"),"info-90":mt("info-90"),"info-95":mt("info-95"),"info-100":mt("info-100"),white:mt("white"),black:mt("black"),"primary-inverse":mt("primary-inverse")},yt={text:mt("neutral-20"),"text-subtle":mt("neutral-30"),"text-subtler":mt("neutral-50"),"text-subtlest":mt("neutral-60"),"text-primary":mt("primary-50"),"text-hover":mt("primary-40"),"text-selected":mt("primary-50"),"text-selected-hover":mt("primary-40"),"text-disabled":mt("neutral-50"),"text-disabled-subtle":mt("neutral-60"),"text-disabled-subtlest":mt("neutral-80"),"text-selected-disabled":mt("neutral-20"),"text-success":mt("success-40"),"text-warning":mt("warning-40"),"text-error":mt("error-40"),"text-info":mt("info-40"),"text-inverse":mt("white"),icon:mt("neutral-50"),"icon-subtle":mt("neutral-60"),"icon-strongest":mt("neutral-20"),"icon-primary":mt("primary-50"),"icon-primary-subtle":mt("primary-60"),"icon-primary-subtlest":mt("primary-70"),"icon-hover":mt("primary-40"),"icon-selected":mt("primary-50"),"icon-selected-hover":mt("primary-40"),"icon-disabled":mt("neutral-50"),"icon-disabled-subtle":mt("neutral-60"),"icon-selected-disabled":mt("neutral-60"),"icon-success":mt("success-50"),"icon-warning":mt("warning-60"),"icon-error":mt("error-50"),"icon-error-strong":mt("error-40"),"icon-info":mt("info-50"),"icon-inverse":mt("white"),"icon-primary-inverse":mt("primary-inverse"),border:mt("neutral-90"),"border-strong":mt("neutral-70"),"border-stronger":mt("neutral-50"),"border-primary":mt("primary-50"),"border-primary-subtle":mt("primary-60"),"border-hover":mt("primary-90"),"border-hover-strong":mt("primary-60"),"border-selected":mt("primary-50"),"border-selected-subtle":mt("primary-70"),"border-selected-subtlest":mt("primary-90"),"border-selected-hover":mt("primary-40"),"border-focus":mt("primary-60"),"border-focus-strong":mt("primary-50"),"border-disabled":mt("neutral-90"),"border-selected-disabled":mt("neutral-70"),"border-success":mt("success-60"),"border-warning":mt("warning-60"),"border-error":mt("error-60"),"border-error-focus":mt("error-60"),"border-error-focus-strong":mt("error-40"),"border-error-strong":mt("error-40"),"border-info":mt("info-60"),bg:mt("white"),"bg-strong":mt("neutral-100"),"bg-stronger":mt("neutral-95"),"bg-strongest":mt("neutral-90"),"bg-hover":mt("primary-95"),"bg-hover-strong":mt("primary-90"),"bg-hover-subtle":mt("primary-100"),"bg-hover-neutral":mt("neutral-100"),"bg-hover-neutral-strong":mt("neutral-90"),"bg-selected":mt("primary-95"),"bg-selected-hover":mt("primary-90"),"bg-selected-strong":mt("primary-90"),"bg-selected-stronger":mt("primary-70"),"bg-selected-strongest":mt("primary-50"),"bg-selected-strongest-hover":mt("primary-40"),"bg-disabled":mt("neutral-95"),"bg-selected-disabled":mt("neutral-95"),"bg-selected-stronger-disabled":mt("neutral-70"),"bg-success":mt("success-100"),"bg-success-hover":mt("success-95"),"bg-success-strong":mt("success-50"),"bg-success-strong-hover":mt("success-40"),"bg-warning":mt("warning-100"),"bg-warning-hover":mt("warning-95"),"bg-warning-strong":mt("warning-50"),"bg-warning-strong-hover":mt("warning-40"),"bg-info":mt("info-100"),"bg-info-hover":mt("info-95"),"bg-info-strong":mt("info-50"),"bg-info-strong-hover":mt("info-40"),"bg-error":mt("error-100"),"bg-error-hover":mt("error-95"),"bg-error-strong":mt("error-50"),"bg-error-strong-hover":mt("error-40"),"bg-inverse":mt("neutral-20"),"bg-inverse-subtle":mt("neutral-30"),"bg-inverse-subtler":mt("neutral-50"),"bg-inverse-subtlest":mt("neutral-60"),"bg-inverse-hover":mt("neutral-40"),"bg-primary":mt("primary-50"),"bg-primary-subtle":mt("primary-60"),"bg-primary-subtler":mt("primary-95"),"bg-primary-subtlest":mt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":mt("primary-40"),"bg-primary-subtlest-hover":mt("primary-90"),"bg-primary-subtlest-selected":mt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:mt("primary-50"),"hyperlink-hover":mt("primary-40"),"hyperlink-visited":mt("primary-40"),"hyperlink-inverse":mt("primary-inverse"),"focus-ring":mt("black"),"focus-ring-inverse":mt("white")},pt={collections:{lifesg:yt,bookingsg:yt,rbs:yt,mylegacy:yt,ccube:yt,oneservice:yt,pa:{text:mt("neutral-30"),"text-subtle":mt("neutral-40"),"text-subtler":mt("neutral-50"),"text-subtlest":mt("neutral-70"),"text-primary":mt("neutral-10"),"text-hover":mt("neutral-70"),"text-selected":mt("neutral-20"),"text-selected-hover":mt("neutral-10"),"text-disabled":mt("neutral-50"),"text-disabled-subtle":mt("neutral-60"),"text-disabled-subtlest":mt("neutral-80"),"text-selected-disabled":mt("neutral-40"),"text-success":mt("success-40"),"text-warning":mt("warning-40"),"text-error":mt("brand-30"),"text-info":mt("neutral-40"),"text-inverse":mt("neutral-100"),icon:mt("neutral-40"),"icon-subtle":mt("neutral-50"),"icon-strongest":mt("neutral-10"),"icon-primary":mt("neutral-10"),"icon-primary-subtle":mt("neutral-30"),"icon-primary-subtlest":mt("neutral-60"),"icon-hover":mt("neutral-70"),"icon-selected":mt("brand-20"),"icon-selected-hover":mt("brand-10"),"icon-disabled":mt("neutral-50"),"icon-disabled-subtle":mt("neutral-60"),"icon-selected-disabled":mt("neutral-40"),"icon-success":mt("success-40"),"icon-warning":mt("warning-60"),"icon-error":mt("brand-30"),"icon-error-strong":mt("brand-10"),"icon-info":mt("neutral-40"),"icon-inverse":mt("neutral-100"),"icon-primary-inverse":"#F9B371",border:mt("neutral-90"),"border-strong":mt("neutral-30"),"border-stronger":mt("neutral-20"),"border-primary":mt("neutral-40"),"border-primary-subtle":mt("neutral-60"),"border-hover":mt("neutral-80"),"border-hover-strong":mt("neutral-10"),"border-selected":mt("brand-20"),"border-selected-subtle":mt("neutral-40"),"border-selected-subtlest":mt("neutral-70"),"border-selected-hover":mt("neutral-10"),"border-focus":mt("neutral-20"),"border-focus-strong":mt("neutral-10"),"border-disabled":mt("neutral-90"),"border-selected-disabled":mt("neutral-80"),"border-success":mt("success-40"),"border-warning":mt("warning-60"),"border-error":mt("brand-30"),"border-error-focus":mt("brand-20"),"border-error-focus-strong":mt("brand-10"),"border-error-strong":mt("brand-20"),"border-info":mt("neutral-40"),bg:mt("neutral-100"),"bg-strong":mt("neutral-95"),"bg-stronger":mt("neutral-90"),"bg-strongest":mt("neutral-80"),"bg-hover":mt("brand-90"),"bg-hover-strong":mt("brand-80"),"bg-hover-subtle":mt("neutral-90"),"bg-hover-neutral":mt("neutral-90"),"bg-hover-neutral-strong":mt("neutral-90"),"bg-selected":mt("brand-100"),"bg-selected-hover":mt("brand-30"),"bg-selected-strong":mt("brand-50"),"bg-selected-stronger":mt("brand-40"),"bg-selected-strongest":mt("brand-20"),"bg-selected-strongest-hover":mt("brand-10"),"bg-disabled":mt("neutral-90"),"bg-selected-disabled":mt("neutral-90"),"bg-selected-stronger-disabled":mt("neutral-80"),"bg-success":mt("success-100"),"bg-success-hover":mt("success-95"),"bg-success-strong":mt("success-50"),"bg-success-strong-hover":mt("success-40"),"bg-warning":mt("warning-100"),"bg-warning-hover":mt("warning-95"),"bg-warning-strong":mt("warning-50"),"bg-warning-strong-hover":mt("warning-40"),"bg-info":mt("neutral-95"),"bg-info-hover":mt("info-95"),"bg-info-strong":mt("info-50"),"bg-info-strong-hover":mt("info-40"),"bg-error":mt("brand-100"),"bg-error-hover":mt("error-95"),"bg-error-strong":mt("error-50"),"bg-error-strong-hover":mt("error-40"),"bg-inverse":mt("neutral-40"),"bg-inverse-subtle":mt("neutral-60"),"bg-inverse-subtler":mt("neutral-70"),"bg-inverse-subtlest":mt("neutral-80"),"bg-inverse-hover":mt("neutral-30"),"bg-primary":mt("brand-20"),"bg-primary-subtle":mt("brand-60"),"bg-primary-subtler":mt("brand-80"),"bg-primary-subtlest":mt("brand-100"),"bg-available":mt("success-60"),"bg-primary-hover":mt("brand-10"),"bg-primary-subtlest-hover":mt("brand-80"),"bg-primary-subtlest-selected":mt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:mt("neutral-10"),"hyperlink-hover":mt("neutral-40"),"hyperlink-visited":mt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":mt("black"),"focus-ring-inverse":mt("white")}},defaultValue:"lifesg"},vt=e=>r=>{var t;const n=r.theme,i=dt(pt,null==n?void 0:n.colourScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?lt(i,e,n.overrides.semanticColour):i[e];return"function"==typeof a?a(r):a},xt={text:vt("text"),"text-subtle":vt("text-subtle"),"text-subtler":vt("text-subtler"),"text-subtlest":vt("text-subtlest"),"text-primary":vt("text-primary"),"text-hover":vt("text-hover"),"text-selected":vt("text-selected"),"text-selected-hover":vt("text-selected-hover"),"text-disabled":vt("text-disabled"),"text-disabled-subtle":vt("text-disabled-subtle"),"text-disabled-subtlest":vt("text-disabled-subtlest"),"text-selected-disabled":vt("text-selected-disabled"),"text-success":vt("text-success"),"text-warning":vt("text-warning"),"text-error":vt("text-error"),"text-info":vt("text-info"),"text-inverse":vt("text-inverse"),icon:vt("icon"),"icon-subtle":vt("icon-subtle"),"icon-strongest":vt("icon-strongest"),"icon-primary":vt("icon-primary"),"icon-primary-subtle":vt("icon-primary-subtle"),"icon-primary-subtlest":vt("icon-primary-subtlest"),"icon-hover":vt("icon-hover"),"icon-selected":vt("icon-selected"),"icon-selected-hover":vt("icon-selected-hover"),"icon-disabled":vt("icon-disabled"),"icon-disabled-subtle":vt("icon-disabled-subtle"),"icon-selected-disabled":vt("icon-selected-disabled"),"icon-success":vt("icon-success"),"icon-warning":vt("icon-warning"),"icon-error":vt("icon-error"),"icon-error-strong":vt("icon-error-strong"),"icon-info":vt("icon-info"),"icon-inverse":vt("icon-inverse"),"icon-primary-inverse":vt("icon-primary-inverse"),border:vt("border"),"border-strong":vt("border-strong"),"border-stronger":vt("border-stronger"),"border-primary":vt("border-primary"),"border-primary-subtle":vt("border-primary-subtle"),"border-hover":vt("border-hover"),"border-hover-strong":vt("border-hover-strong"),"border-selected":vt("border-selected"),"border-selected-subtle":vt("border-selected-subtle"),"border-selected-subtlest":vt("border-selected-subtlest"),"border-selected-hover":vt("border-selected-hover"),"border-focus":vt("border-focus"),"border-focus-strong":vt("border-focus-strong"),"border-disabled":vt("border-disabled"),"border-selected-disabled":vt("border-selected-disabled"),"border-success":vt("border-success"),"border-warning":vt("border-warning"),"border-error":vt("border-error"),"border-error-focus":vt("border-error-focus"),"border-error-focus-strong":vt("border-error-focus-strong"),"border-error-strong":vt("border-error-strong"),"border-info":vt("border-info"),bg:vt("bg"),"bg-strong":vt("bg-strong"),"bg-stronger":vt("bg-stronger"),"bg-strongest":vt("bg-strongest"),"bg-hover":vt("bg-hover"),"bg-hover-strong":vt("bg-hover-strong"),"bg-hover-subtle":vt("bg-hover-subtle"),"bg-hover-neutral":vt("bg-hover-neutral"),"bg-hover-neutral-strong":vt("bg-hover-neutral-strong"),"bg-selected":vt("bg-selected"),"bg-selected-hover":vt("bg-selected-hover"),"bg-selected-strong":vt("bg-selected-strong"),"bg-selected-stronger":vt("bg-selected-stronger"),"bg-selected-strongest":vt("bg-selected-strongest"),"bg-selected-strongest-hover":vt("bg-selected-strongest-hover"),"bg-disabled":vt("bg-disabled"),"bg-selected-disabled":vt("bg-selected-disabled"),"bg-selected-stronger-disabled":vt("bg-selected-stronger-disabled"),"bg-success":vt("bg-success"),"bg-success-hover":vt("bg-success-hover"),"bg-success-strong":vt("bg-success-strong"),"bg-success-strong-hover":vt("bg-success-strong-hover"),"bg-warning":vt("bg-warning"),"bg-warning-hover":vt("bg-warning-hover"),"bg-warning-strong":vt("bg-warning-strong"),"bg-warning-strong-hover":vt("bg-warning-strong-hover"),"bg-info":vt("bg-info"),"bg-info-hover":vt("bg-info-hover"),"bg-info-strong":vt("bg-info-strong"),"bg-info-strong-hover":vt("bg-info-strong-hover"),"bg-error":vt("bg-error"),"bg-error-hover":vt("bg-error-hover"),"bg-error-strong":vt("bg-error-strong"),"bg-error-strong-hover":vt("bg-error-strong-hover"),"bg-inverse":vt("bg-inverse"),"bg-inverse-subtle":vt("bg-inverse-subtle"),"bg-inverse-subtler":vt("bg-inverse-subtler"),"bg-inverse-subtlest":vt("bg-inverse-subtlest"),"bg-inverse-hover":vt("bg-inverse-hover"),"bg-primary":vt("bg-primary"),"bg-primary-subtle":vt("bg-primary-subtle"),"bg-primary-subtler":vt("bg-primary-subtler"),"bg-primary-subtlest":vt("bg-primary-subtlest"),"bg-available":vt("bg-available"),"bg-primary-hover":vt("bg-primary-hover"),"bg-primary-subtlest-hover":vt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":vt("bg-primary-subtlest-selected"),"overlay-strong":vt("overlay-strong"),"overlay-subtle":vt("overlay-subtle"),hyperlink:vt("hyperlink"),"hyperlink-hover":vt("hyperlink-hover"),"hyperlink-visited":vt("hyperlink-visited"),"hyperlink-inverse":vt("hyperlink-inverse"),"focus-ring":vt("focus-ring"),"focus-ring-inverse":vt("focus-ring-inverse")},Dt={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:a,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:gt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:xt.border(r),u=gt.solid;return y`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:a,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:gt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:xt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},wt=e=>1===e.length&&"theme"in e[0],Ft=e=>(...r)=>t=>{const n=wt(r)?[]:r,i=wt(r)?r[0]:t,a=i.theme;return(0,dt(Dt,null==a?void 0:a.borderScheme)[e])(...n)(i)},$t={solid:Ft("solid"),"dashed-default":Ft("dashed-default")},Et={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Ct=e=>r=>{var t;const n=r.theme,i=dt(Et,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?lt(i,e,n.overrides.breakpoint):i[e],a},St={"xxs-min":Ct("xxs-min"),"xxs-max":Ct("xxs-max"),"xs-min":Ct("xs-min"),"xs-max":Ct("xs-max"),"sm-min":Ct("sm-min"),"sm-max":Ct("sm-max"),"md-min":Ct("md-min"),"md-max":Ct("md-max"),"lg-min":Ct("lg-min"),"lg-max":Ct("lg-max"),"xl-min":Ct("xl-min"),"xl-max":Ct("xl-max"),"xxl-min":Ct("xxl-min"),"xxs-column":Ct("xxs-column"),"xs-column":Ct("xs-column"),"sm-column":Ct("sm-column"),"md-column":Ct("md-column"),"lg-column":Ct("lg-column"),"xl-column":Ct("xl-column"),"xxl-column":Ct("xxl-column"),"xxs-gutter":Ct("xxs-gutter"),"xs-gutter":Ct("xs-gutter"),"sm-gutter":Ct("sm-gutter"),"md-gutter":Ct("md-gutter"),"lg-gutter":Ct("lg-gutter"),"xl-gutter":Ct("xl-gutter"),"xxl-gutter":Ct("xxl-gutter"),"xxs-margin":Ct("xxs-margin"),"xs-margin":Ct("xs-margin"),"sm-margin":Ct("sm-margin"),"md-margin":Ct("md-margin"),"lg-margin":Ct("lg-margin"),"xl-margin":Ct("xl-margin"),"xxl-margin":Ct("xxl-margin")},Bt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=St["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),At={MaxWidth:Bt("max-width"),MinWidth:Bt("min-width")},zt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Mt=e=>r=>{var t;const n=r.theme,i=dt(zt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?lt(i,e,n.overrides.fontSpec):i[e]},Ot={"heading-size-xxl":Mt("heading-size-xxl"),"heading-size-xl":Mt("heading-size-xl"),"heading-size-lg":Mt("heading-size-lg"),"heading-size-md":Mt("heading-size-md"),"heading-size-sm":Mt("heading-size-sm"),"heading-size-xs":Mt("heading-size-xs"),"heading-lh-xxl":Mt("heading-lh-xxl"),"heading-lh-xl":Mt("heading-lh-xl"),"heading-lh-lg":Mt("heading-lh-lg"),"heading-lh-md":Mt("heading-lh-md"),"heading-lh-sm":Mt("heading-lh-sm"),"heading-lh-xs":Mt("heading-lh-xs"),"heading-ls-xxl":Mt("heading-ls-xxl"),"heading-ls-xl":Mt("heading-ls-xl"),"heading-ls-lg":Mt("heading-ls-lg"),"heading-ls-md":Mt("heading-ls-md"),"heading-ls-sm":Mt("heading-ls-sm"),"heading-ls-xs":Mt("heading-ls-xs"),"weight-light":Mt("weight-light"),"weight-regular":Mt("weight-regular"),"weight-semibold":Mt("weight-semibold"),"weight-bold":Mt("weight-bold"),"font-family":Mt("font-family"),"body-size-baseline":Mt("body-size-baseline"),"body-size-md":Mt("body-size-md"),"body-size-sm":Mt("body-size-sm"),"body-size-xs":Mt("body-size-xs"),"body-lh-baseline":Mt("body-lh-baseline"),"body-lh-md":Mt("body-lh-md"),"body-lh-sm":Mt("body-lh-sm"),"body-lh-xs":Mt("body-lh-xs"),"body-ls-baseline":Mt("body-ls-baseline"),"body-ls-md":Mt("body-ls-md"),"body-ls-sm":Mt("body-ls-sm"),"body-ls-xs":Mt("body-ls-xs"),"form-label-size":Mt("form-label-size"),"form-description-size":Mt("form-description-size"),"form-label-lh":Mt("form-label-lh"),"form-description-lh":Mt("form-description-lh"),"form-label-ls":Mt("form-label-ls"),"form-description-ls":Mt("form-description-ls")},kt=(e,r,t,n,i)=>{const{disableLigatures:a}=i||{};return y`
        font-family: ${Mt("font-family")};
        font-size: ${Mt(e)};
        font-weight: ${Mt(r)};
        line-height: ${Mt(t)};
        letter-spacing: ${Mt(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Yt=(e={})=>({"heading-xxl-light":kt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":kt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":kt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":kt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":kt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":kt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":kt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":kt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":kt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":kt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":kt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":kt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":kt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":kt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":kt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":kt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":kt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":kt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":kt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":kt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":kt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":kt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":kt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":kt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":kt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":kt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":kt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":kt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":kt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":kt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":kt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":kt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":kt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":kt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":kt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":kt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":kt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":kt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":kt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":kt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":kt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":kt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Tt=Yt({disableLigatures:!0}),jt={collections:{default:Yt(),bookingsg:Tt,pa:Yt({disableLigatures:!0})},defaultValue:"default"},_t=e=>r=>{var t;const n=r.theme,i=dt(jt,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?lt(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},Rt={"heading-xxl-light":_t("heading-xxl-light"),"heading-xxl-regular":_t("heading-xxl-regular"),"heading-xxl-semibold":_t("heading-xxl-semibold"),"heading-xxl-bold":_t("heading-xxl-bold"),"heading-xl-light":_t("heading-xl-light"),"heading-xl-regular":_t("heading-xl-regular"),"heading-xl-semibold":_t("heading-xl-semibold"),"heading-xl-bold":_t("heading-xl-bold"),"heading-lg-light":_t("heading-lg-light"),"heading-lg-regular":_t("heading-lg-regular"),"heading-lg-semibold":_t("heading-lg-semibold"),"heading-lg-bold":_t("heading-lg-bold"),"heading-md-light":_t("heading-md-light"),"heading-md-regular":_t("heading-md-regular"),"heading-md-semibold":_t("heading-md-semibold"),"heading-md-bold":_t("heading-md-bold"),"heading-sm-light":_t("heading-sm-light"),"heading-sm-regular":_t("heading-sm-regular"),"heading-sm-semibold":_t("heading-sm-semibold"),"heading-sm-bold":_t("heading-sm-bold"),"heading-xs-light":_t("heading-xs-light"),"heading-xs-regular":_t("heading-xs-regular"),"heading-xs-semibold":_t("heading-xs-semibold"),"heading-xs-bold":_t("heading-xs-bold"),"body-baseline-light":_t("body-baseline-light"),"body-baseline-regular":_t("body-baseline-regular"),"body-baseline-semibold":_t("body-baseline-semibold"),"body-baseline-bold":_t("body-baseline-bold"),"body-md-light":_t("body-md-light"),"body-md-regular":_t("body-md-regular"),"body-md-semibold":_t("body-md-semibold"),"body-md-bold":_t("body-md-bold"),"body-sm-light":_t("body-sm-light"),"body-sm-regular":_t("body-sm-regular"),"body-sm-semibold":_t("body-sm-semibold"),"body-sm-bold":_t("body-sm-bold"),"body-xs-light":_t("body-xs-light"),"body-xs-regular":_t("body-xs-regular"),"body-xs-semibold":_t("body-xs-semibold"),"body-xs-bold":_t("body-xs-bold"),"form-label":_t("form-label"),"form-description":_t("form-description")},Lt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ht=e=>r=>{var t;const n=r.theme,i=dt(Lt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?lt(i,e,n.overrides.motion):i[e]},Wt={"duration-150":Ht("duration-150"),"duration-250":Ht("duration-250"),"duration-350":Ht("duration-350"),"duration-500":Ht("duration-500"),"duration-800":Ht("duration-800"),"duration-1000":Ht("duration-1000"),"ease-default":Ht("ease-default"),"ease-standard":Ht("ease-standard"),"ease-entrance":Ht("ease-entrance"),"ease-exit":Ht("ease-exit")},It={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Nt=e=>r=>{var t;const n=r.theme,i=dt(It,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${lt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Pt={none:Nt("none"),xs:Nt("xs"),sm:Nt("sm"),md:Nt("md"),lg:Nt("lg"),full:Nt("full")},Vt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,i=dt(Vt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${lt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Ut={"spacing-0":Zt("spacing-0"),"spacing-4":Zt("spacing-4"),"spacing-8":Zt("spacing-8"),"spacing-12":Zt("spacing-12"),"spacing-16":Zt("spacing-16"),"spacing-20":Zt("spacing-20"),"spacing-24":Zt("spacing-24"),"spacing-32":Zt("spacing-32"),"spacing-40":Zt("spacing-40"),"spacing-48":Zt("spacing-48"),"spacing-64":Zt("spacing-64"),"spacing-72":Zt("spacing-72"),"layout-xs":Zt("layout-xs"),"layout-sm":Zt("layout-sm"),"layout-md":Zt("layout-md"),"layout-lg":Zt("layout-lg"),"layout-xl":Zt("layout-xl"),"layout-xxl":Zt("layout-xxl"),"layout-xxxl":Zt("layout-xxxl")},Jt=Object.assign(Object.assign({},xt),{Primitive:ft}),Xt=Object.assign(Object.assign({},Rt),{Spec:Ot}),qt=Wt,Gt=Object.assign(Object.assign({},gt),{Util:$t}),Qt=Ut,Kt=Pt,en=St,rn=At,tn=e=>"small"===e?2.5:3;f.div`
    position: relative;
    width: 100%;
    ${e=>{const r=tn(e.$variant);return y`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const nn=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Qt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>tn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Kt.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Jt["border-focus"]};
    }
`,an=f.button`
    ${nn}
    cursor: pointer;
`;f.div`
    ${nn}
`;const on=p`
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
    border: ${Gt["width-010"]} ${Gt.solid} ${Jt.border};
    border-radius: ${Kt.sm};
    background: ${Jt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Jt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Jt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${on} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Jt["bg-disabled"]};

                ${an} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Jt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${an} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border-color: ${Jt["border-error"]};

                :focus-within {
                    border-color: ${Jt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Jt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${qt["duration-250"]} ${qt["ease-default"]};
    margin-left: ${Qt["spacing-16"]};
`,f(m)`
    color: ${Jt.icon};
`,f.div`
    height: 1px;
    background: ${Jt.border};
    margin: 0 ${Qt["spacing-8"]};
`,f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${Jt["text-disabled"]};
            `}}
`;f(f.div`
    ${e=>"small"===e.$variant?Xt["body-md-regular"]:Xt["body-baseline-regular"]}
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
    color: ${Jt["text-subtler"]};
`;var sn=function(e,r){return sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},sn(e,r)};var ln=function(){return ln=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ln.apply(this,arguments)};var dn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var cn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},un="object"==typeof dn&&dn&&dn.Object===Object&&dn,gn="object"==typeof self&&self&&self.Object===Object&&self,hn=un||gn||Function("return this")(),bn=hn,mn=function(){return bn.Date.now()},fn=/\s/;var yn=function(e){for(var r=e.length;r--&&fn.test(e.charAt(r)););return r},pn=/^\s+/;var vn=function(e){return e?e.slice(0,yn(e)+1).replace(pn,""):e},xn=hn.Symbol,Dn=xn,wn=Object.prototype,Fn=wn.hasOwnProperty,$n=wn.toString,En=Dn?Dn.toStringTag:void 0;var Cn=function(e){var r=Fn.call(e,En),t=e[En];try{e[En]=void 0;var n=!0}catch(e){}var i=$n.call(e);return n&&(r?e[En]=t:delete e[En]),i},Sn=Object.prototype.toString;var Bn=Cn,An=function(e){return Sn.call(e)},zn=xn?xn.toStringTag:void 0;var Mn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":zn&&zn in Object(e)?Bn(e):An(e)},On=function(e){return null!=e&&"object"==typeof e};var kn=vn,Yn=cn,Tn=function(e){return"symbol"==typeof e||On(e)&&"[object Symbol]"==Mn(e)},jn=/^[-+]0x[0-9a-f]+$/i,_n=/^0b[01]+$/i,Rn=/^0o[0-7]+$/i,Ln=parseInt;var Hn=cn,Wn=mn,In=function(e){if("number"==typeof e)return e;if(Tn(e))return NaN;if(Yn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Yn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=kn(e);var t=_n.test(e);return t||Rn.test(e)?Ln(e.slice(2),t?2:8):jn.test(e)?NaN:+e},Nn=Math.max,Pn=Math.min;var Vn=function(e,r,t){var n,i,a,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,a=i;return n=i=void 0,d=r,o=e.apply(a,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=a}function m(){var e=Wn();if(b(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Pn(t,a-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?h(e):(n=i=void 0,o)}function y(){var e=Wn(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),h(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=In(r)||0,Hn(t)&&(c=!!t.leading,a=(u="maxWait"in t)?Nn(In(t.maxWait)||0,r):a,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?o:f(Wn())},y},Zn=Vn,Un=cn;var Jn=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Un(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Zn(e,r,{leading:n,maxWait:r,trailing:i})},Xn=function(e,r,t,n){switch(r){case"debounce":return Vn(e,t,n);case"throttle":return Jn(e,t,n);default:return e}},qn=function(e){return"function"==typeof e},Gn=function(){return"undefined"==typeof window},Qn=function(e){return e instanceof Element||e instanceof HTMLDocument},Kn=function(e,r,t,n){return function(i){var a=i.width,o=i.height;r((function(r){return r.width===a&&r.height===o||r.width===a&&!n||r.height===o&&!t?r:(e&&qn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Gn()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Gn())return null;if(r)return document.querySelector(r);if(n&&Qn(n))return n;if(t.targetRef&&Qn(t.targetRef.current))return t.targetRef.current;var i=Y(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,a=r.handleHeight,o=void 0===a||a,s=r.onResize;if(i||o){var l=Kn(s,t.setState.bind(t),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Gn()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return qn(r)?"renderProp":qn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,a=r.refreshRate,o=void 0===a?1e3:a,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Gn()||(t.resizeHandler=Xn(t.createResizeHandler,i,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}sn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Gn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,a=r.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var ei,ri=Gn()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ei||(ei={}));const ti=f.div`
    display: flex;
    flex-direction: column;
`,ni=e=>"right"===e?"bottom-end":"bottom-start",ii=({enabled:n,isOpen:i,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const Y=v(),T=en["sm-max"]({theme:Y}),j=a(null),_=a(null),{width:R=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,f=a(t),y=a(null),p=null!=h?h:y,v=a(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return ri((function(){if(!Gn()){var e=Kn(m,w,c,g);v.current=Xn((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!f.current&&!Gn()&&e({width:n,height:i}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,b,p.current]),ln({ref:p},D)}({targetRef:j,handleHeight:!1}),L={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<T;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:W,context:I}=D({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!i?null==s||s():!e&&i&&(null==l||l(t))},whileElementsMounted:w,placement:ni(f),middleware:[F(m),$(),E({limiter:C()}),S({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),L]}),N=(()=>{const[e,r]=o(void 0),t=x();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ei.Change,e),t.events.emit(ei.Ready),()=>t.events.off(ei.Change,e)}),[t]),e})(),{isMounted:P,styles:V}=B(I,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=A(I,{enabled:n,toggle:b}),U=z(I,{enabled:n}),{getReferenceProps:J,getFloatingProps:X}=M([Z,U]);return e(r,{children:[t("div",Object.assign({ref:e=>{j.current=e,H.setReference(e)}},J(),{children:c()})),P&&t(O,{children:t(k,{context:I,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:H.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(p=null!=h?h:N)&&void 0!==p?p:50})},X(),{children:t(ti,{ref:_,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:g({elementWidth:R})})}))})})]})},ai=f.div`
    --vertical-inset: ${Qt["spacing-24"]};
    --horizontal-inset: ${Qt["spacing-20"]};
    --header-bottom-spacing: ${Qt["spacing-4"]};

    border: ${Gt["width-010"]} ${Gt.solid} ${Jt.border};
    border-radius: ${Kt.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${rn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var oi={exports:{}};oi.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=o||(i||a?1:h.getDate()),m=i||h.getFullYear(),f=0;i&&!a||(f=a>0?a-1:h.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,b,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,b,y,p,v,x)):new Date(m,f,b,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,b=1;b<=h;b+=1){o[1]=s[b-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var si=L(oi.exports),li={exports:{}};li.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var di=L(li.exports),ci={exports:{}};ci.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ui=L(ci.exports),gi={exports:{}};gi.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var hi,bi,mi,fi=L(gi.exports),yi={exports:{}},pi=L(yi.exports=(hi={year:0,month:1,day:2,hour:3,minute:4,second:5},bi={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=bi[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),bi[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=hi[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));W.extend(di),W.extend(fi),W.extend(ui),W.extend(si),W.extend(pi),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=W(r).startOf("week");return vi(t).map((e=>xi(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return xi(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(W(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+W(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=W(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?W(n):void 0,i?W(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(mi||(mi={}));const vi=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},xi=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Di=[1,3,5,7,8,10,12],wi=[4,6,9,11];var Fi,$i,Ei,Ci;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":Di.includes(a)?Math.min(i,31).toString():wi.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=W(e,t);return W(r,t).diff(n,"minute")},e.toDayjs=e=>e?W(e):W(),e.addMinutesToTime=(e,r,t="HH:mm")=>W(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>W(e).isSame(W(r),t)}(Fi||(Fi={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!W(e).isBefore(n,"day"))||!(!i||!W(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(W(e).isValid())return e}return""}}($i||($i={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ei||(Ei={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Ci||(Ci={}));const Si=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Bi=p`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ai=f.div`
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
    animation: ${Bi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,zi=f(Ai)`
    animation-delay: -0.45s;
`,Mi=f(Ai)`
    animation-delay: -0.3s;
`,Oi=f(Ai)`
    animation-delay: -0.15s;
`,ki={collections:{default:{Button:{"button-radius":Pt.sm,"button-default-colour-bg":xt["bg-primary"],"button-default-colour-bg-hover":xt["bg-primary-hover"],"button-default-colour-text":xt["text-inverse"],"button-secondary-colour-border":xt["border-primary"],"button-secondary-colour-text":xt["text-primary"],"button-light-colour-text":xt["text-primary"],"button-link-colour-text":xt["text-primary"]}},pa:{Button:{"button-radius":Pt.full,"button-default-colour-bg":xt["bg-primary"],"button-default-colour-bg-hover":xt["bg-primary-hover"],"button-default-colour-text":xt["text-inverse"],"button-secondary-colour-border":xt["border-primary"],"button-secondary-colour-text":xt["text-primary"],"button-light-colour-text":xt["text-primary"],"button-link-colour-text":xt["text-primary"]}}},defaultValue:"default"},Yi=(e,r)=>t=>{var n,i;const a=t.theme,o=dt(ki,null==a?void 0:a.componentScheme);return Ti((null===(i=null===(n=null==a?void 0:a.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||o[e][r],t)},Ti=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ji=Yi("Button","button-radius"),_i=Yi("Button","button-default-colour-bg"),Ri=Yi("Button","button-default-colour-bg-hover"),Li=Yi("Button","button-default-colour-text"),Hi=Yi("Button","button-secondary-colour-border"),Wi=Yi("Button","button-secondary-colour-text"),Ii=Yi("Button","button-light-colour-text"),Ni=Yi("Button","button-link-colour-text"),Pi=f.button`
    padding: ${Qt["spacing-8"]} ${Qt["spacing-16"]};
    min-width: 4rem;
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    transition: all ${qt["duration-250"]} ${qt["ease-default"]};
    border-radius: ${ji};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Jt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Jt["border-error-strong"]:Hi};

                    color: ${e.$buttonIsDanger?Jt["text-error"]:Wi};

                    &:hover,
                    &:active {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Jt.bg};
                    border-color: ${Jt.border};

                    color: ${e.$buttonIsDanger?Jt["text-error"]:Ii};

                    &:hover,
                    &:active {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Jt["text-error"]:Ni};
                    &:hover,
                    &:active {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${Jt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Jt["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Jt["bg-error-strong"]:_i};};

                    ${rn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Li}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Jt["bg-error-strong-hover"]:Ri}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${Xt["body-md-semibold"]}

                    ${rn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${Xt["heading-md-semibold"]}

                    ${rn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${Xt["heading-xs-semibold"]}

                    ${rn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Vi=f((({color:r,className:n,size:i})=>e(Si,{className:n,$size:i,$color:r,"data-testid":"component-loading-spinner",children:[t(Ai,{id:"inner1"}),t(zi,{id:"inner2"}),t(Mi,{id:"inner3"}),t(Oi,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Zi=(r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(Vi,{}),t("span",{children:i})]}))};Zi.displayName="Button.Default";const Ui=(r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(Vi,{}),t("span",{children:i})]}))};Ui.displayName="Button.Small";const Ji=(r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=_(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(Vi,{}),t("span",{children:i})]}))};Ji.displayName="Button.Large";const Xi={Default:i.forwardRef(Zi),Small:i.forwardRef(Ui),Large:i.forwardRef(Ji)},qi=f.button`
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Jt["bg-hover-neutral"]};
            `}
    }
`,Gi=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(qi,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Qi=y`
    color: ${Jt.icon};
    height: 1rem;
    width: 1rem;
`,Ki=f(T)`
    ${Qi}
`,ea=f(j)`
    ${Qi}
`,ra=f(m)`
    ${Qi}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ta=f.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,na=f.div`
    display: flex;
    flex: 1;
    position: relative;
`,ia=f.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,aa=f.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Jt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return y`
                display: none;
            `}}
`,oa=f.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,sa=f.div`
    display: flex;
`,la=f.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?y`
                display: none;
            `:e.$expanded?y`
                ${ra} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,da=f.span`
    ${Xt["body-md-regular"]}
    color: ${Jt.text};
`,ca=f.div`
    display: flex;
`,ua=f(Gi)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ga=f.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,ha=f(Xi.Small)`
    flex: 1;
`,ba=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,ma=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Kt.md};
    margin: 0 0.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    // default styles
    ${Xt["body-md-regular"]}
    border-radius: ${Kt.md};
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    background-clip: border-box;
    color: ${Jt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?y`
                cursor: pointer;
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?y`
                background: ${Jt["bg-selected"]};
                border-color: ${Jt["border-selected"]};
                color: ${Jt["text-selected"]};
                font-weight: ${Xt.Spec["weight-semibold"]};

                ${r&&y`
                    &:hover {
                        background: ${Jt["bg-selected-hover"]};
                        border-color: ${Jt["border-selected-hover"]};
                        color: ${Jt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?y`
                color: ${Jt["text-primary"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            `:t?y`
                color: ${Jt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?y`
                &:hover {
                    background: ${Jt["bg-selected-hover"]};
                    border-color: ${Jt["border-selected-hover"]};
                    color: ${Jt["text-selected-hover"]};
                    font-weight: ${Xt.Spec["weight-semibold"]};
                }
            `:y`
            &:hover {
                background: ${Jt["bg-hover"]};
                color: ${Jt["text-hover"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            }
        `}}
`,fa=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:a,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onMonthSelect:c})=>{const u=h((()=>mi.generateMonths(W(e))),[e]),g=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&o,a="end"===r&&n&&e.isBefore(n,"month")&&o;return!(!t&&!a)},b=e=>{const r=e.format("MMMM"),t=(n=e,!mi.isWithinRange(n,s?W(s):void 0,l?W(l):void 0,"month"));var n;const i=a.isSame(e,"month")?"selected-month":W().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||g(e),interactive:!t||d,month:r,variant:i}};return u.length?t(ba,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,month:a}=b(e);return t(ma,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n),children:a},a)}))}):null},ya=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,pa=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Xt["body-md-regular"]}
    border-radius: ${Kt.md};
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    background-clip: border-box;
    color: ${Jt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?y`
                cursor: pointer;
            `:r?y`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?y`
                background: ${Jt["bg-selected"]};
                border-color: ${Jt["border-selected"]};
                color: ${Jt["text-selected"]};
                font-weight: ${Xt.Spec["weight-semibold"]};

                ${r&&y`
                    &:hover {
                        background: ${Jt["bg-selected-hover"]};
                        border-color: ${Jt["border-selected-hover"]};
                        color: ${Jt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?y`
                color: ${Jt["text-primary"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?y`
                color: ${Jt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?y`
                &:hover {
                    background: ${Jt["bg-selected-hover"]};
                    border-color: ${Jt["border-selected-hover"]};
                    color: ${Jt["text-selected-hover"]};
                    font-weight: ${Xt.Spec["weight-semibold"]};
                }
            `:y`
            &:hover {
                background: ${Jt["bg-hover"]};
                color: ${Jt["text-hover"]};
                font-weight: ${Xt.Spec["weight-semibold"]};
            }
        `}}
`,va=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:a,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onYearSelect:c})=>{const u=h((()=>mi.generateDecadeOfYears(W(e))),[e]),g=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&o,a="end"===r&&n&&e.isBefore(n,"year")&&o;return!(!t&&!a)},b=e=>{const r=[0,11].includes(u.indexOf(e)),t=e.year(),n=(i=e,!mi.isWithinRange(i,s?W(s):void 0,l?W(l):void 0,"year"));var i;const o=r?"other-decade":a.isSame(e,"year")?"selected-year":W().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||d,year:t,variant:o}};return u.length?t(ya,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,year:a}=b(e);return t(pa,{$variant:i,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,r)=>{r||c(e)})(e,!n),children:a},a)}))}):null},xa=i.forwardRef(((n,i)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:h,selectedEndDate:m,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A}=n,z=_(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,O]=o(Fi.toDayjs(l)),[k,Y]=o(Fi.toDayjs(l)),[T,j]=o("default"),R=a(null),L=a(null),H=a(null);b(i,(()=>({defaultView(){j("default")},resetView(){const e=Fi.toDayjs(l);O(e),Y(e),j("default")},setCalendarDate(e){const r=Fi.toDayjs(e);O(r),Y(r)}}))),u((()=>{const e=Fi.toDayjs(l);O(e),Y(e)}),[l]),u((()=>{J(k)}),[k]);const I=()=>{var e;"month-options"!==T?(j("month-options"),null===(e=H.current)||void 0===e||e.focus()):(j("default"),O(k))},N=()=>{"default"!==T?(j("default"),O(k)):j("year-options")},P=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=$?$(M):M.subtract(1,"month");switch(T){case"default":Y(r),O(r);break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},V=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=E?E(M):M.add(1,"month");switch(T){case"default":Y(r),O(r);break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},Z=e=>{O(e),Y(e),x||j("default")},U=()=>{const e=Fi.toDayjs(l);O(e),Y(e),"default"===T?X("reset"):j("default")},J=e=>{v&&v(e)},X=e=>{w&&w(e)},q=()=>{if(!d||p)return!1;const e=W(d);return"month-options"===T?!mi.isPreviousYearWithinRange(M,e):"year-options"===T?!mi.isPreviousDecadeWithinRange(M,e):C?C(M):!mi.isPreviousMonthWithinRange(M,e)},G=()=>{if(!c||p)return!1;const e=W(c);return"month-options"===T?!mi.isNextYearWithinRange(M,e):"year-options"===T?!mi.isNextDecadeWithinRange(M,e):S?S(M):!mi.isNextMonthWithinRange(M,e)},Q=()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=mi.getStartEndDecade(M);return`${e} to ${r}`}return A?A(M):M.format("YYYY")},K=()=>{const n=B?B(M):M.format("MMM");return e(r,{children:[e(la,{type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:I,children:[t(da,{children:n}),t(ra,{})]}),e(la,{type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:N,children:[t(da,{children:Q()}),t(ra,{})]})]})},ee=()=>{switch(T){case"month-options":return t(fa,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:k,isNewSelection:!!f,onMonthSelect:Z,allowDisabledSelection:p});case"year-options":return t(va,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:k,isNewSelection:!!f,onYearSelect:Z,allowDisabledSelection:p});default:return null}};return e(ta,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container"},z,{children:[F&&e(oa,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(sa,{children:K()}),e(ca,{children:[t(ua,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P,children:t(Ki,{})}),t(ua,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V,children:t(ea,{})})]})]}),t(na,{children:(()=>{const n="function"==typeof s?s({calendarDate:k,currentView:T}):s;return e(r,y?{children:["default"===T&&n,ee()]}:{children:[t(ia,{children:n}),t(aa,{$visible:"default"!==T,children:ee()})]})})()}),(()=>{if(!x)return;const r=!!("default"===T)&&D;return e(ga,{children:[t(ha,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U,children:"Cancel"}),t(ha,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(O(k),"default"===T?X("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),Da=f.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,wa=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Xt["body-sm-semibold"]};
    color: ${Jt.text};
`,Fa=f.div`
    grid-column: 1 / -1;
    display: flex;
`,$a=e=>{let r=Jt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Jt["bg-hover"],t=Jt["bg-hover"];break;case"hover":r=Jt["bg-hover-strong"],t=Jt["bg-hover-strong"];break;case"hover-outline":r=Jt["bg-hover-subtle"],t=Jt["border-hover"];break;case"selected-outline":r=Jt["bg-selected"],t=Jt["border-selected"];break;case"selected-outline-subtle":r=Jt["bg-selected"],t=Jt["border-selected-subtle"];break;case"selected-hover":r=Jt["bg-selected-hover"];break;case"selected-hover-outline":r=Jt["bg-selected-hover"],t=Jt["border-selected-hover"]}return{color:r,borderColor:t}},Ea=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ca=f.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};
    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=$a(e);return y`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Sa=f(Ca)`
    left: 0;
`,Ba=f(Ca)`
    right: 0;
`,Aa=f.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    border: ${Gt["width-010"]} ${Gt.solid} transparent;
    border-radius: ${Kt.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=$a(e);return y`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,za=f(Aa)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Ma=f(Aa)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Oa=f.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Xt["body-md-regular"]}
    transition: ${qt["duration-150"]} ${qt["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?y`
                    visibility: hidden;
                `:y`
                color: ${Jt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return y`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-selected"]};
                `;case"selected-hover":return y`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-selected-hover"]};
                `;case"current":return y`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-primary"]};
                `;case"hover":return y`
                    font-weight: ${Xt.Spec["weight-semibold"]};
                    color: ${Jt["text-hover"]};
                `;case"unavailable":return y`
                    color: ${Jt["text-disabled-subtlest"]};
                `;case"hidden":return y`
                    visibility: hidden;
                `;default:return y`
                    color: ${Jt.text};
                `}}}
`,ka=f.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Ya=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:a,labelType:o,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:g,onHoverEnd:h})=>{const b=W().isSame(c,"day");return e(Ea,{children:[t(Sa,{$type:r}),t(za,{$type:i}),t(Ba,{$type:n}),t(Ma,{$type:a}),e(Oa,{$type:o,$disabled:s,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{g(c)},onMouseLeave:()=>{h&&h(c)},children:[c.date(),d&&b&&t(ka,{$disabled:s})]})]})},Ta=({date:e,calendarDate:r,startDate:n,endDate:i,currentFocus:a,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:g,onSelect:h,onHover:b})=>{const m=mi.isDisabledDay(e,d,s,l),f=!m||c,y=()=>{const e=W(o),r=e.isBefore(i,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===a&&i&&r&&(n&&t?(d=o,c=i):(s=o,l=n||i)),"end"===a&&n&&t&&(i&&r?(d=n,c=o):(s=i||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:()=>{h(e,!f)},onHover:()=>{b(e.format("YYYY-MM-DD"),!f)}};return t(Ya,Object.assign({},p,(()=>{const t={};if(r.month()!==e.month())t.labelType=g?"hidden":"unavailable";else if(W().isSame(e,"day")&&!m)t.labelType="current";else if(u){const r="end"===a&&n&&e.isBefore(n),o="start"===a&&i&&e.isAfter(i);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},a=e.isSame(n,"day"),o=e.isSame(i,"day");return g&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&a||i&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&i&&e.isBetween(n,i,"day","[]")&&(t.labelType="selected",a||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:a,hoverEnd:s,overlapStart:l,overlapEnd:d}=y();if(t){const t=e.isSame(n,"day"),a=e.isSame(i,"day");t||a?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(a&&s){if(e.isBetween(a,s,"day","[]")){const t=e.isSame(a,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};W.extend(di);const ja=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:a,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:g,allowDisabledSelection:b,showActiveMonthDaysOnly:m})=>{const f=h((()=>mi.generateDays(r)),[r]),[y,p]=o(""),v=(e,r)=>{r&&!b||l(e)},x=(e,r)=>{r&&!b||(p(e),d(e))},D=()=>{p(""),d("")};return e(Da,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(wa,{children:W(e).format("ddd")},`week-day-${r}`))),f.map(((e,o)=>t(Fa,{onMouseLeave:D,children:e.map(((e,o)=>t(Ta,{date:e,calendarDate:r,startDate:a,endDate:s,hoverDate:y,currentFocus:n,minDate:u,maxDate:g,disabledDates:i,allowDisabledSelection:b,isNewSelection:c,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${o}`)))},o)))]})},_a=({date:e,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=mi.isDisabledDay(e,s,a,o),h=!g||l,{start:b,end:m}=n?mi.getFixedRangeStartEnd(Fi.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=i?mi.getFixedRangeStartEnd(Fi.toDayjs(i),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(b,m,"day","[]"),v=!!i&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(b,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Ya,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===b,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==b&&(r.circleLeft="selected-hover")),r})()))},Ra=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:a,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=h((()=>mi.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||(a(e),e&&!W(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Da,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(wa,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,a)=>t(Fa,{onMouseLeave:p,children:e.map(((e,a)=>t(_a,{date:e,calendarDate:r,selectedDate:i,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${a}`)))},a)))]})},La=f.div`
    width: 100%;
    background: ${Jt.bg};
`,Ha=({date:e,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=mi.isDisabledDay(e,s,a,o),h=!g||l,b={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Ya,Object.assign({},b,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":W().isSame(e,"day")&&!g&&(t.labelType="current");const a=e.isSame(n,"day"),o=e.isSame(i,"day");return a&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):a?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};W.extend(di);const Wa=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:a,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=h((()=>mi.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||a(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Da,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(wa,{children:W(e).format("ddd")},`week-day-${r}`))),g.map(((e,a)=>t(Fa,{onMouseLeave:p,children:e.map(((e,a)=>t(Ha,{date:e,calendarDate:r,selectedDate:i,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${a}`)))},a)))]})},Ia=({date:e,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=mi.isDisabledDay(e,s,a,o),g=!u||l,{start:h,end:b}=mi.getWeekStartEnd(Fi.toDayjs(n)),{start:m,end:f}=mi.getWeekStartEnd(Fi.toDayjs(i)),y=n&&e.isBetween(h,b,"day","[]"),p=i&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(h)||p&&e.isSame(m),x=y&&e.isSame(b)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(Ya,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":W().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Na=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:a,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=h((()=>mi.generateDays(r)),[r]),[g,b]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");a(t),e&&!W(e).isSame(t,"month")&&b("")},f=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(Da,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(wa,{children:W(e).format("ddd")},`week-day-${r}`))),u.map(((e,a)=>t(Fa,{onMouseLeave:y,children:e.map(((e,a)=>t(Ia,{date:e,calendarDate:r,selectedDate:i,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${a}`)))},a)))]})},Pa=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:h,allowDisabledSelection:m,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const D=a(null),w=a(void 0);b(x,(()=>({reset(){var e;null===(e=D.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=D.current)||void 0===r||r.setCalendarDate(e)}})));const F=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=D.current)||void 0===r||r.setCalendarDate(t),E(t)},$=e=>{C(e)},E=e=>{n&&n(e)},C=e=>{i&&i(e)},S=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(La,{children:t(xa,{ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:h,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||S(e),w.current=e},initialCalendarDate:y,children:({calendarDate:r})=>(r=>{switch(u){case"week":return t(Na,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:m,onSelect:F,onHover:$});case"fixed-range":return t(Ra,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:m,onSelect:F,onHover:$,numberOfDays:p});case"single":return t(Wa,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:h,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$});default:return t(ja,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:h,isNewSelection:f,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$})}})(r)})})})),Va=i.forwardRef(((e,r)=>{var{width:n}=e,i=_(e,["width"]);return t(ai,{$width:n,"data-testid":"calendar-dropdown",children:t(Pa,Object.assign({ref:r},i))})})),Za=f.button`
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
                    background-color: ${Jt.bg};
                    border: ${Gt["width-010"]} ${Gt.solid}
                        ${Jt["border-primary"]};
                    color: ${Jt["text-primary"]};

                    :hover {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Jt.bg};
                    border: ${Gt["width-010"]} ${Gt.solid}
                        ${Jt.border};
                    color: ${Jt["text-primary"]};

                    :hover {
                        background-color: ${Jt["bg-hover-neutral"]};
                    }
                `;default:return y`
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
`,Ua=f(i.forwardRef(((e,r)=>{var{"data-testid":n,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=e,l=_(e,["data-testid","styleType","children","sizeType","type"]);return t(Za,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:i},l,{children:a}))})))`
    margin: ${Qt["spacing-8"]};
`,Ja=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Jt["bg-strong"]};
    border-radius: ${Kt.sm};
`,Xa=f(Xi.Default)`
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

    ${e=>{if(e.$enableDateClick)return y`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,qa=r=>{var{selectedDate:n,minDate:i,maxDate:a,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:d,onLeftArrowClick:c,onRightArrowClick:u,onCalendarDateSelect:g}=r,h=_(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const b=Fi.toDayjs(n),m=Fi.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),f=Fi.isSame(n,W())&&d?"Today":b.format(l?"ddd":"dddd"),[y,p]=o(!1),v=e=>{g&&g(e),p(!y)},x=()=>{p(!1),c(n)},D=()=>{p(!1),u(n)};return t(ii,{enabled:!s,isOpen:y,renderElement:()=>e(Ja,Object.assign({},h,{children:[t(Ua,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(mi.isDisabledDay(b,void 0,i)||Fi.isSame(b,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small",children:t(Ki,{})}),t(Xa,{onClick:()=>!!g&&!s&&p(!y),$enableDateClick:!!g&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!g||s,children:`${m}, ${f}`}),t(Ua,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!a&&(mi.isDisabledDay(b,void 0,void 0,a)||Fi.isSame(b,a)),"aria-label":"Next day",onClick:D,styleType:"light",sizeType:"small",children:t(ea,{})})]})),renderDropdown:({elementWidth:e})=>t(Va,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:a,onSelect:v,width:e}),onDismiss:()=>p(!1),onClose:()=>p(!1),offset:8})};export{qa as DateNavigator};
//# sourceMappingURL=index.js.map
