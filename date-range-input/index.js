import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,version as b,useCallback as h,useMemo as m,useImperativeHandle as f,useReducer as y}from"react";import{ChevronDownIcon as p}from"@lifesg/react-icons/chevron-down";import v,{css as x,keyframes as D,useTheme as w}from"styled-components";import{useFloatingTree as F,useFloating as $,autoUpdate as E,offset as C,flip as S,shift as B,limitShift as A,size as k,useTransitionStyles as O,useClick as M,useDismiss as Y,useInteractions as z,FloatingPortal as j,FloatingFocusManager as R}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as _}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as I}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as L}from"@lifesg/react-icons";function H(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var W="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N={exports:{}};N.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,b){var h,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var V=P(N.exports),U=Array.isArray,K="object"==typeof W&&W&&W.Object===Object&&W,Z="object"==typeof self&&self&&self.Object===Object&&self,J=K||Z||Function("return this")(),q=J.Symbol,X=q,G=Object.prototype,Q=G.hasOwnProperty,ee=G.toString,re=X?X.toStringTag:void 0;var te=function(e){var r=Q.call(e,re),t=e[re];try{e[re]=void 0;var n=!0}catch(e){}var a=ee.call(e);return n&&(r?e[re]=t:delete e[re]),a},ne=Object.prototype.toString;var ae=te,ie=function(e){return ne.call(e)},oe=q?q.toStringTag:void 0;var se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":oe&&oe in Object(e)?ae(e):ie(e)};var le=se,de=function(e){return null!=e&&"object"==typeof e};var ce=function(e){return"symbol"==typeof e||de(e)&&"[object Symbol]"==le(e)},ue=U,ge=ce,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,he=/^\w*$/;var me=function(e,r){if(ue(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ge(e))||(he.test(e)||!be.test(e)||null!=r&&e in Object(r))};var fe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ye=se,pe=fe;var ve,xe=function(e){if(!pe(e))return!1;var r=ye(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},De=J["__core-js_shared__"],we=(ve=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+ve:"";var Fe=function(e){return!!we&&we in e},$e=Function.prototype.toString;var Ee=xe,Ce=Fe,Se=fe,Be=function(e){if(null!=e){try{return $e.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=/^\[object .+?Constructor\]$/,ke=Function.prototype,Oe=Object.prototype,Me=ke.toString,Ye=Oe.hasOwnProperty,ze=RegExp("^"+Me.call(Ye).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var je=function(e,r){return null==e?void 0:e[r]},Re=function(e){return!(!Se(e)||Ce(e))&&(Ee(e)?ze:Ae).test(Be(e))},Te=je;var _e=function(e,r){var t=Te(e,r);return Re(t)?t:void 0},Ie=_e(Object,"create"),Le=Ie;var He=function(){this.__data__=Le?Le(null):{},this.size=0};var We=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Pe=Ie,Ne=Object.prototype.hasOwnProperty;var Ve=function(e){var r=this.__data__;if(Pe){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ne.call(r,e)?r[e]:void 0},Ue=Ie,Ke=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;return Ue?void 0!==r[e]:Ke.call(r,e)},Je=Ie;var qe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Je&&void 0===r?"__lodash_hash_undefined__":r,this},Xe=He,Ge=We,Qe=Ve,er=Ze,rr=qe;function tr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}tr.prototype.clear=Xe,tr.prototype.delete=Ge,tr.prototype.get=Qe,tr.prototype.has=er,tr.prototype.set=rr;var nr=tr;var ar=function(){this.__data__=[],this.size=0};var ir=function(e,r){return e===r||e!=e&&r!=r};var or=function(e,r){for(var t=e.length;t--;)if(ir(e[t][0],r))return t;return-1},sr=or,lr=Array.prototype.splice;var dr=function(e){var r=this.__data__,t=sr(r,e);return!(t<0)&&(t==r.length-1?r.pop():lr.call(r,t,1),--this.size,!0)},cr=or;var ur=function(e){var r=this.__data__,t=cr(r,e);return t<0?void 0:r[t][1]},gr=or;var br=function(e){return gr(this.__data__,e)>-1},hr=or;var mr=function(e,r){var t=this.__data__,n=hr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},fr=ar,yr=dr,pr=ur,vr=br,xr=mr;function Dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Dr.prototype.clear=fr,Dr.prototype.delete=yr,Dr.prototype.get=pr,Dr.prototype.has=vr,Dr.prototype.set=xr;var wr=Dr,Fr=_e(J,"Map"),$r=nr,Er=wr,Cr=Fr;var Sr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Br=function(e,r){var t=e.__data__;return Sr(r)?t["string"==typeof r?"string":"hash"]:t.map},Ar=Br;var kr=function(e){var r=Ar(this,e).delete(e);return this.size-=r?1:0,r},Or=Br;var Mr=function(e){return Or(this,e).get(e)},Yr=Br;var zr=function(e){return Yr(this,e).has(e)},jr=Br;var Rr=function(e,r){var t=jr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Tr=function(){this.size=0,this.__data__={hash:new $r,map:new(Cr||Er),string:new $r}},_r=kr,Ir=Mr,Lr=zr,Hr=Rr;function Wr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Wr.prototype.clear=Tr,Wr.prototype.delete=_r,Wr.prototype.get=Ir,Wr.prototype.has=Lr,Wr.prototype.set=Hr;var Pr=Wr;function Nr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Nr.Cache||Pr),t}Nr.Cache=Pr;var Vr=Nr;var Ur=function(e){var r=Vr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Kr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zr=/\\(\\)?/g,Jr=Ur((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Kr,(function(e,t,n,a){r.push(n?a.replace(Zr,"$1"):t||e)})),r}));var qr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Xr=U,Gr=ce,Qr=q?q.prototype:void 0,et=Qr?Qr.toString:void 0;var rt=function e(r){if("string"==typeof r)return r;if(Xr(r))return qr(r,e)+"";if(Gr(r))return et?et.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},tt=rt;var nt=U,at=me,it=Jr,ot=function(e){return null==e?"":tt(e)};var st=ce;var lt=function(e,r){return nt(e)?e:at(e,r)?[e]:it(ot(e))},dt=function(e){if("string"==typeof e||st(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ct=function(e,r){for(var t=0,n=(r=lt(r,e)).length;null!=e&&t<n;)e=e[dt(r[t++])];return t&&t==n?e:void 0};var ut=P((function(e,r,t){var n=null==e?void 0:ct(e,r);return void 0===n?t:n}));const gt=(e,r,t)=>ut(t,r)||ut(e,r),bt=(e,r)=>{const t=r||e.defaultValue;return ut(e.collections,t)},ht={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},mt=e=>r=>{var t;const n=r.theme,a=bt(ht,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${gt(a,e,n.overrides.border)}px`:`${a[e]}px`},ft={"width-005":mt("width-005"),"width-010":mt("width-010"),"width-020":mt("width-020"),"width-040":mt("width-040"),solid:(yt="solid",e=>{var r;const t=e.theme,n=bt(ht,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?gt(n,yt,t.overrides.border):n[yt];return"function"==typeof a?a(e):a})};var yt;const pt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ft={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ct={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},St={collections:{lifesg:xt,bookingsg:pt,rbs:$t,mylegacy:Dt,ccube:vt,oneservice:wt,pa:Ft,a11yplayground:Et,supportgowhere:Ct},defaultValue:"lifesg"},Bt={collections:{lifesg:xt,bookingsg:pt,rbs:$t,mylegacy:Dt,ccube:vt,oneservice:wt,pa:Ft,a11yplayground:Et,supportgowhere:Ct},defaultValue:"lifesg"},At=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=bt(a?Bt:St,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?gt(i,e,s):i[e]},kt={"brand-10":At("brand-10"),"brand-20":At("brand-20"),"brand-30":At("brand-30"),"brand-40":At("brand-40"),"brand-50":At("brand-50"),"brand-60":At("brand-60"),"brand-70":At("brand-70"),"brand-80":At("brand-80"),"brand-90":At("brand-90"),"brand-95":At("brand-95"),"brand-100":At("brand-100"),"primary-10":At("primary-10"),"primary-20":At("primary-20"),"primary-30":At("primary-30"),"primary-40":At("primary-40"),"primary-50":At("primary-50"),"primary-60":At("primary-60"),"primary-70":At("primary-70"),"primary-80":At("primary-80"),"primary-90":At("primary-90"),"primary-95":At("primary-95"),"primary-100":At("primary-100"),"secondary-10":At("secondary-10"),"secondary-20":At("secondary-20"),"secondary-30":At("secondary-30"),"secondary-40":At("secondary-40"),"secondary-50":At("secondary-50"),"secondary-60":At("secondary-60"),"secondary-70":At("secondary-70"),"secondary-80":At("secondary-80"),"secondary-90":At("secondary-90"),"secondary-95":At("secondary-95"),"secondary-100":At("secondary-100"),"neutral-10":At("neutral-10"),"neutral-20":At("neutral-20"),"neutral-30":At("neutral-30"),"neutral-40":At("neutral-40"),"neutral-50":At("neutral-50"),"neutral-60":At("neutral-60"),"neutral-70":At("neutral-70"),"neutral-80":At("neutral-80"),"neutral-90":At("neutral-90"),"neutral-95":At("neutral-95"),"neutral-100":At("neutral-100"),"success-10":At("success-10"),"success-20":At("success-20"),"success-30":At("success-30"),"success-40":At("success-40"),"success-50":At("success-50"),"success-60":At("success-60"),"success-70":At("success-70"),"success-80":At("success-80"),"success-90":At("success-90"),"success-95":At("success-95"),"success-100":At("success-100"),"warning-10":At("warning-10"),"warning-20":At("warning-20"),"warning-30":At("warning-30"),"warning-40":At("warning-40"),"warning-50":At("warning-50"),"warning-60":At("warning-60"),"warning-70":At("warning-70"),"warning-80":At("warning-80"),"warning-90":At("warning-90"),"warning-95":At("warning-95"),"warning-100":At("warning-100"),"error-10":At("error-10"),"error-20":At("error-20"),"error-30":At("error-30"),"error-40":At("error-40"),"error-50":At("error-50"),"error-60":At("error-60"),"error-70":At("error-70"),"error-80":At("error-80"),"error-90":At("error-90"),"error-95":At("error-95"),"error-100":At("error-100"),"info-10":At("info-10"),"info-20":At("info-20"),"info-30":At("info-30"),"info-40":At("info-40"),"info-50":At("info-50"),"info-60":At("info-60"),"info-70":At("info-70"),"info-80":At("info-80"),"info-90":At("info-90"),"info-95":At("info-95"),"info-100":At("info-100"),white:At("white"),black:At("black"),"primary-inverse":At("primary-inverse")},Ot={text:At("neutral-20"),"text-subtle":At("neutral-30"),"text-subtler":At("neutral-50"),"text-subtlest":At("neutral-60"),"text-primary":At("primary-50"),"text-hover":At("primary-40"),"text-selected":At("primary-50"),"text-selected-hover":At("primary-40"),"text-disabled":At("neutral-50"),"text-disabled-subtle":At("neutral-60"),"text-disabled-subtlest":At("neutral-80"),"text-selected-disabled":At("neutral-20"),"text-success":At("success-40"),"text-warning":At("warning-40"),"text-error":At("error-40"),"text-info":At("info-40"),"text-inverse":At("white"),icon:At("neutral-50"),"icon-subtle":At("neutral-60"),"icon-strongest":At("neutral-20"),"icon-primary":At("primary-50"),"icon-primary-subtle":At("primary-60"),"icon-primary-subtlest":At("primary-70"),"icon-hover":At("primary-40"),"icon-selected":At("primary-50"),"icon-selected-hover":At("primary-40"),"icon-disabled":At("neutral-50"),"icon-disabled-subtle":At("neutral-60"),"icon-selected-disabled":At("neutral-60"),"icon-success":At("success-50"),"icon-warning":At("warning-60"),"icon-error":At("error-50"),"icon-error-strong":At("error-40"),"icon-info":At("info-50"),"icon-inverse":At("white"),"icon-primary-inverse":At("primary-inverse"),border:At("neutral-90"),"border-strong":At("neutral-70"),"border-stronger":At("neutral-50"),"border-primary":At("primary-50"),"border-primary-subtle":At("primary-60"),"border-hover":At("primary-90"),"border-hover-strong":At("primary-60"),"border-selected":At("primary-50"),"border-selected-subtle":At("primary-70"),"border-selected-subtlest":At("primary-90"),"border-selected-hover":At("primary-40"),"border-focus":At("primary-60"),"border-focus-strong":At("primary-50"),"border-disabled":At("neutral-90"),"border-selected-disabled":At("neutral-70"),"border-success":At("success-60"),"border-warning":At("warning-60"),"border-error":At("error-60"),"border-error-focus":At("error-60"),"border-error-focus-strong":At("error-40"),"border-error-strong":At("error-40"),"border-info":At("info-60"),bg:At("white"),"bg-strong":At("neutral-100"),"bg-stronger":At("neutral-95"),"bg-strongest":At("neutral-90"),"bg-hover":At("primary-95"),"bg-hover-strong":At("primary-90"),"bg-hover-subtle":At("primary-100"),"bg-hover-neutral":At("neutral-100"),"bg-hover-neutral-strong":At("neutral-90"),"bg-selected":At("primary-95"),"bg-selected-hover":At("primary-90"),"bg-selected-strong":At("primary-90"),"bg-selected-stronger":At("primary-70"),"bg-selected-strongest":At("primary-50"),"bg-selected-strongest-hover":At("primary-40"),"bg-disabled":At("neutral-95"),"bg-selected-disabled":At("neutral-95"),"bg-selected-stronger-disabled":At("neutral-70"),"bg-success":At("success-100"),"bg-success-hover":At("success-95"),"bg-success-strong":At("success-50"),"bg-success-strong-hover":At("success-40"),"bg-warning":At("warning-100"),"bg-warning-hover":At("warning-95"),"bg-warning-strong":At("warning-50"),"bg-warning-strong-hover":At("warning-40"),"bg-info":At("info-100"),"bg-info-hover":At("info-95"),"bg-info-strong":At("info-50"),"bg-info-strong-hover":At("info-40"),"bg-error":At("error-100"),"bg-error-hover":At("error-95"),"bg-error-strong":At("error-50"),"bg-error-strong-hover":At("error-40"),"bg-inverse":At("neutral-20"),"bg-inverse-subtle":At("neutral-30"),"bg-inverse-subtler":At("neutral-50"),"bg-inverse-subtlest":At("neutral-60"),"bg-inverse-hover":At("neutral-40"),"bg-primary":At("primary-50"),"bg-primary-subtle":At("primary-60"),"bg-primary-subtler":At("primary-95"),"bg-primary-subtlest":At("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":At("primary-40"),"bg-primary-subtlest-hover":At("primary-90"),"bg-primary-subtlest-selected":At("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:At("primary-50"),"hyperlink-hover":At("primary-40"),"hyperlink-visited":At("primary-40"),"hyperlink-inverse":At("primary-inverse"),"focus-ring":At("black"),"focus-ring-inverse":At("white")},Mt={text:At("neutral-100"),"text-subtle":At("neutral-80"),"text-subtler":At("neutral-60"),"text-subtlest":At("neutral-50"),"text-primary":At("primary-60"),"text-hover":At("primary-70"),"text-selected":At("primary-60"),"text-selected-hover":At("primary-70"),"text-disabled":At("neutral-60"),"text-disabled-subtle":At("neutral-50"),"text-disabled-subtlest":At("neutral-30"),"text-selected-disabled":At("neutral-90"),"text-success":At("success-70"),"text-warning":At("warning-70"),"text-error":At("error-70"),"text-info":At("info-70"),"text-inverse":At("black"),icon:At("neutral-60"),"icon-subtle":At("neutral-50"),"icon-strongest":At("neutral-90"),"icon-primary":At("primary-60"),"icon-primary-subtle":At("primary-50"),"icon-primary-subtlest":At("primary-40"),"icon-hover":At("primary-70"),"icon-selected":At("primary-60"),"icon-selected-hover":At("primary-70"),"icon-disabled":At("neutral-60"),"icon-disabled-subtle":At("neutral-50"),"icon-selected-disabled":At("neutral-50"),"icon-success":At("success-60"),"icon-warning":At("warning-50"),"icon-error":At("error-60"),"icon-error-strong":At("error-70"),"icon-info":At("info-60"),"icon-inverse":At("black"),"icon-primary-inverse":At("primary-inverse"),border:At("neutral-20"),"border-strong":At("neutral-40"),"border-stronger":At("neutral-60"),"border-primary":At("primary-60"),"border-primary-subtle":At("primary-50"),"border-hover":At("primary-20"),"border-hover-strong":At("primary-50"),"border-selected":At("primary-60"),"border-selected-subtle":At("primary-40"),"border-selected-subtlest":At("primary-20"),"border-selected-hover":At("primary-70"),"border-focus":At("primary-50"),"border-focus-strong":At("primary-60"),"border-disabled":At("neutral-20"),"border-selected-disabled":At("neutral-40"),"border-success":At("success-50"),"border-warning":At("warning-50"),"border-error":At("error-50"),"border-error-focus":At("error-50"),"border-error-focus-strong":At("error-70"),"border-error-strong":At("error-70"),"border-info":At("info-50"),bg:At("black"),"bg-strong":At("neutral-10"),"bg-stronger":At("neutral-20"),"bg-strongest":At("neutral-20"),"bg-hover":At("primary-20"),"bg-hover-strong":At("primary-20"),"bg-hover-subtle":At("primary-10"),"bg-hover-neutral":At("neutral-10"),"bg-hover-neutral-strong":At("neutral-20"),"bg-selected":At("primary-20"),"bg-selected-hover":At("primary-20"),"bg-selected-strong":At("primary-20"),"bg-selected-stronger":At("primary-40"),"bg-selected-strongest":At("primary-60"),"bg-selected-strongest-hover":At("primary-70"),"bg-disabled":At("neutral-20"),"bg-selected-disabled":At("neutral-20"),"bg-selected-stronger-disabled":At("neutral-40"),"bg-success":At("success-10"),"bg-success-hover":At("success-20"),"bg-success-strong":At("success-60"),"bg-success-strong-hover":At("success-70"),"bg-warning":At("warning-10"),"bg-warning-hover":At("warning-20"),"bg-warning-strong":At("warning-60"),"bg-warning-strong-hover":At("warning-70"),"bg-info":At("info-10"),"bg-info-hover":At("info-20"),"bg-info-strong":At("info-60"),"bg-info-strong-hover":At("info-70"),"bg-error":At("error-10"),"bg-error-hover":At("error-20"),"bg-error-strong":At("error-60"),"bg-error-strong-hover":At("error-70"),"bg-inverse":At("neutral-90"),"bg-inverse-subtle":At("neutral-80"),"bg-inverse-subtler":At("neutral-60"),"bg-inverse-subtlest":At("neutral-50"),"bg-inverse-hover":At("neutral-70"),"bg-primary":At("primary-60"),"bg-primary-subtle":At("primary-50"),"bg-primary-subtler":At("primary-20"),"bg-primary-subtlest":At("primary-10"),"bg-available":"#185339","bg-primary-hover":At("primary-70"),"bg-primary-subtlest-hover":At("primary-20"),"bg-primary-subtlest-selected":At("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:At("primary-60"),"hyperlink-hover":At("primary-70"),"hyperlink-visited":At("primary-70"),"hyperlink-inverse":At("primary-inverse"),"focus-ring":At("primary-60"),"focus-ring-inverse":At("black")},Yt={text:At("neutral-30"),"text-subtle":At("neutral-40"),"text-subtler":At("neutral-50"),"text-subtlest":At("neutral-70"),"text-primary":At("neutral-10"),"text-hover":At("neutral-70"),"text-selected":At("neutral-20"),"text-selected-hover":At("neutral-10"),"text-disabled":At("neutral-50"),"text-disabled-subtle":At("neutral-60"),"text-disabled-subtlest":At("neutral-80"),"text-selected-disabled":At("neutral-40"),"text-success":At("success-40"),"text-warning":At("warning-40"),"text-error":At("brand-30"),"text-info":At("neutral-40"),"text-inverse":At("neutral-100"),icon:At("neutral-40"),"icon-subtle":At("neutral-50"),"icon-strongest":At("neutral-10"),"icon-primary":At("neutral-10"),"icon-primary-subtle":At("neutral-30"),"icon-primary-subtlest":At("neutral-60"),"icon-hover":At("neutral-70"),"icon-selected":At("brand-20"),"icon-selected-hover":At("brand-10"),"icon-disabled":At("neutral-50"),"icon-disabled-subtle":At("neutral-60"),"icon-selected-disabled":At("neutral-40"),"icon-success":At("success-40"),"icon-warning":At("warning-60"),"icon-error":At("brand-30"),"icon-error-strong":At("brand-10"),"icon-info":At("neutral-40"),"icon-inverse":At("neutral-100"),"icon-primary-inverse":"#F9B371",border:At("neutral-90"),"border-strong":At("neutral-30"),"border-stronger":At("neutral-20"),"border-primary":At("neutral-40"),"border-primary-subtle":At("neutral-60"),"border-hover":At("neutral-80"),"border-hover-strong":At("neutral-10"),"border-selected":At("brand-20"),"border-selected-subtle":At("neutral-40"),"border-selected-subtlest":At("neutral-70"),"border-selected-hover":At("neutral-10"),"border-focus":At("neutral-20"),"border-focus-strong":At("neutral-10"),"border-disabled":At("neutral-90"),"border-selected-disabled":At("neutral-80"),"border-success":At("success-40"),"border-warning":At("warning-60"),"border-error":At("brand-30"),"border-error-focus":At("brand-20"),"border-error-focus-strong":At("brand-10"),"border-error-strong":At("brand-20"),"border-info":At("neutral-40"),bg:At("neutral-100"),"bg-strong":At("neutral-95"),"bg-stronger":At("neutral-90"),"bg-strongest":At("neutral-80"),"bg-hover":At("brand-90"),"bg-hover-strong":At("brand-80"),"bg-hover-subtle":At("neutral-90"),"bg-hover-neutral":At("neutral-90"),"bg-hover-neutral-strong":At("neutral-90"),"bg-selected":At("brand-100"),"bg-selected-hover":At("brand-30"),"bg-selected-strong":At("brand-50"),"bg-selected-stronger":At("brand-40"),"bg-selected-strongest":At("brand-20"),"bg-selected-strongest-hover":At("brand-10"),"bg-disabled":At("neutral-90"),"bg-selected-disabled":At("neutral-90"),"bg-selected-stronger-disabled":At("neutral-80"),"bg-success":At("success-100"),"bg-success-hover":At("success-95"),"bg-success-strong":At("success-50"),"bg-success-strong-hover":At("success-40"),"bg-warning":At("warning-100"),"bg-warning-hover":At("warning-95"),"bg-warning-strong":At("warning-50"),"bg-warning-strong-hover":At("warning-40"),"bg-info":At("neutral-95"),"bg-info-hover":At("info-95"),"bg-info-strong":At("info-50"),"bg-info-strong-hover":At("info-40"),"bg-error":At("brand-100"),"bg-error-hover":At("error-95"),"bg-error-strong":At("error-50"),"bg-error-strong-hover":At("error-40"),"bg-inverse":At("neutral-40"),"bg-inverse-subtle":At("neutral-60"),"bg-inverse-subtler":At("neutral-70"),"bg-inverse-subtlest":At("neutral-80"),"bg-inverse-hover":At("neutral-30"),"bg-primary":At("brand-20"),"bg-primary-subtle":At("brand-60"),"bg-primary-subtler":At("brand-80"),"bg-primary-subtlest":At("brand-100"),"bg-available":At("success-60"),"bg-primary-hover":At("brand-10"),"bg-primary-subtlest-hover":At("brand-80"),"bg-primary-subtlest-selected":At("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:At("neutral-10"),"hyperlink-hover":At("neutral-40"),"hyperlink-visited":At("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":At("black"),"focus-ring-inverse":At("white")},zt={text:At("neutral-20"),"text-subtle":At("neutral-30"),"text-subtler":At("neutral-50"),"text-subtlest":At("neutral-60"),"text-primary":At("primary-50"),"text-hover":At("primary-40"),"text-selected":At("primary-50"),"text-selected-hover":At("primary-40"),"text-disabled":At("neutral-50"),"text-disabled-subtle":At("neutral-60"),"text-disabled-subtlest":At("neutral-80"),"text-selected-disabled":At("neutral-20"),"text-success":At("success-40"),"text-warning":At("warning-40"),"text-error":At("error-40"),"text-info":At("info-40"),"text-inverse":At("white"),icon:At("neutral-50"),"icon-subtle":At("neutral-60"),"icon-strongest":At("neutral-20"),"icon-primary":At("primary-50"),"icon-primary-subtle":At("primary-60"),"icon-primary-subtlest":At("primary-70"),"icon-hover":At("primary-40"),"icon-selected":At("primary-50"),"icon-selected-hover":At("primary-40"),"icon-disabled":At("neutral-50"),"icon-disabled-subtle":At("neutral-60"),"icon-selected-disabled":At("neutral-60"),"icon-success":At("success-50"),"icon-warning":At("warning-60"),"icon-error":At("error-50"),"icon-error-strong":At("error-40"),"icon-info":At("info-50"),"icon-inverse":At("white"),"icon-primary-inverse":At("primary-inverse"),border:At("neutral-90"),"border-strong":At("neutral-70"),"border-stronger":At("neutral-50"),"border-primary":At("primary-50"),"border-primary-subtle":At("primary-60"),"border-hover":At("primary-90"),"border-hover-strong":At("primary-60"),"border-selected":At("primary-50"),"border-selected-subtle":At("primary-70"),"border-selected-subtlest":At("primary-90"),"border-selected-hover":At("primary-40"),"border-focus":At("primary-60"),"border-focus-strong":At("primary-50"),"border-disabled":At("neutral-90"),"border-selected-disabled":At("neutral-70"),"border-success":At("success-60"),"border-warning":At("warning-60"),"border-error":At("error-60"),"border-error-focus":At("error-60"),"border-error-focus-strong":At("error-40"),"border-error-strong":At("error-40"),"border-info":At("info-60"),bg:At("white"),"bg-strong":At("neutral-100"),"bg-stronger":At("neutral-95"),"bg-strongest":At("neutral-90"),"bg-hover":At("primary-95"),"bg-hover-strong":At("primary-90"),"bg-hover-subtle":At("primary-100"),"bg-hover-neutral":At("neutral-100"),"bg-hover-neutral-strong":At("neutral-90"),"bg-selected":At("primary-95"),"bg-selected-hover":At("primary-90"),"bg-selected-strong":At("primary-90"),"bg-selected-stronger":At("primary-70"),"bg-selected-strongest":At("primary-50"),"bg-selected-strongest-hover":At("primary-40"),"bg-disabled":At("neutral-95"),"bg-selected-disabled":At("neutral-95"),"bg-selected-stronger-disabled":At("neutral-70"),"bg-success":At("success-100"),"bg-success-hover":At("success-95"),"bg-success-strong":At("success-50"),"bg-success-strong-hover":At("success-40"),"bg-warning":At("warning-100"),"bg-warning-hover":At("warning-95"),"bg-warning-strong":At("warning-50"),"bg-warning-strong-hover":At("warning-40"),"bg-info":At("info-100"),"bg-info-hover":At("info-95"),"bg-info-strong":At("info-50"),"bg-info-strong-hover":At("info-40"),"bg-error":At("error-100"),"bg-error-hover":At("error-95"),"bg-error-strong":At("error-50"),"bg-error-strong-hover":At("error-40"),"bg-inverse":At("neutral-20"),"bg-inverse-subtle":At("neutral-30"),"bg-inverse-subtler":At("neutral-50"),"bg-inverse-subtlest":At("neutral-60"),"bg-inverse-hover":At("neutral-40"),"bg-primary":At("primary-50"),"bg-primary-subtle":At("primary-60"),"bg-primary-subtler":At("primary-95"),"bg-primary-subtlest":At("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":At("primary-40"),"bg-primary-subtlest-hover":At("primary-90"),"bg-primary-subtlest-selected":At("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:At("primary-50"),"hyperlink-hover":At("primary-40"),"hyperlink-visited":At("primary-40"),"hyperlink-inverse":At("primary-inverse"),"focus-ring":At("black"),"focus-ring-inverse":At("white")},jt={text:At("neutral-100"),"text-subtle":At("neutral-80"),"text-subtler":At("neutral-60"),"text-subtlest":At("neutral-50"),"text-primary":At("primary-60"),"text-hover":At("primary-70"),"text-selected":At("primary-60"),"text-selected-hover":At("primary-70"),"text-disabled":At("neutral-60"),"text-disabled-subtle":At("neutral-50"),"text-disabled-subtlest":At("neutral-30"),"text-selected-disabled":At("neutral-90"),"text-success":At("success-70"),"text-warning":At("warning-70"),"text-error":At("error-70"),"text-info":At("info-70"),"text-inverse":At("black"),icon:At("neutral-60"),"icon-subtle":At("neutral-50"),"icon-strongest":At("neutral-90"),"icon-primary":At("primary-60"),"icon-primary-subtle":At("primary-50"),"icon-primary-subtlest":At("primary-40"),"icon-hover":At("primary-70"),"icon-selected":At("primary-60"),"icon-selected-hover":At("primary-70"),"icon-disabled":At("neutral-60"),"icon-disabled-subtle":At("neutral-50"),"icon-selected-disabled":At("neutral-50"),"icon-success":At("success-60"),"icon-warning":At("warning-50"),"icon-error":At("error-60"),"icon-error-strong":At("error-70"),"icon-info":At("info-60"),"icon-inverse":At("black"),"icon-primary-inverse":At("primary-inverse"),border:At("neutral-20"),"border-strong":At("neutral-40"),"border-stronger":At("neutral-60"),"border-primary":At("primary-60"),"border-primary-subtle":At("primary-50"),"border-hover":At("primary-20"),"border-hover-strong":At("primary-50"),"border-selected":At("primary-60"),"border-selected-subtle":At("primary-40"),"border-selected-subtlest":At("primary-20"),"border-selected-hover":At("primary-70"),"border-focus":At("primary-50"),"border-focus-strong":At("primary-60"),"border-disabled":At("neutral-20"),"border-selected-disabled":At("neutral-40"),"border-success":At("success-50"),"border-warning":At("warning-50"),"border-error":At("error-50"),"border-error-focus":At("error-50"),"border-error-focus-strong":At("error-70"),"border-error-strong":At("error-70"),"border-info":At("info-50"),bg:At("black"),"bg-strong":At("neutral-10"),"bg-stronger":At("neutral-20"),"bg-strongest":At("neutral-20"),"bg-hover":At("primary-20"),"bg-hover-strong":At("primary-20"),"bg-hover-subtle":At("primary-10"),"bg-hover-neutral":At("neutral-10"),"bg-hover-neutral-strong":At("neutral-20"),"bg-selected":At("primary-20"),"bg-selected-hover":At("primary-20"),"bg-selected-strong":At("primary-20"),"bg-selected-stronger":At("primary-40"),"bg-selected-strongest":At("primary-60"),"bg-selected-strongest-hover":At("primary-70"),"bg-disabled":At("neutral-20"),"bg-selected-disabled":At("neutral-20"),"bg-selected-stronger-disabled":At("neutral-40"),"bg-success":At("success-10"),"bg-success-hover":At("success-20"),"bg-success-strong":At("success-60"),"bg-success-strong-hover":At("success-70"),"bg-warning":At("warning-10"),"bg-warning-hover":At("warning-20"),"bg-warning-strong":At("warning-60"),"bg-warning-strong-hover":At("warning-70"),"bg-info":At("info-10"),"bg-info-hover":At("info-20"),"bg-info-strong":At("info-60"),"bg-info-strong-hover":At("info-70"),"bg-error":At("error-10"),"bg-error-hover":At("error-20"),"bg-error-strong":At("error-60"),"bg-error-strong-hover":At("error-70"),"bg-inverse":At("neutral-90"),"bg-inverse-subtle":At("neutral-80"),"bg-inverse-subtler":At("neutral-60"),"bg-inverse-subtlest":At("neutral-50"),"bg-inverse-hover":At("neutral-70"),"bg-primary":At("primary-60"),"bg-primary-subtle":At("primary-50"),"bg-primary-subtler":At("primary-20"),"bg-primary-subtlest":At("primary-10"),"bg-available":"#185339","bg-primary-hover":At("primary-70"),"bg-primary-subtlest-hover":At("primary-20"),"bg-primary-subtlest-selected":At("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:At("primary-60"),"hyperlink-hover":At("primary-70"),"hyperlink-visited":At("primary-70"),"hyperlink-inverse":At("primary-inverse"),"focus-ring":At("primary-60"),"focus-ring-inverse":At("black")},Rt={collections:{lifesg:Ot,bookingsg:Ot,rbs:Ot,mylegacy:Ot,ccube:Ot,oneservice:Ot,pa:Yt,a11yplayground:zt,supportgowhere:Ot},defaultValue:"lifesg"},Tt={collections:{lifesg:Mt,bookingsg:Mt,rbs:Mt,mylegacy:Mt,ccube:Mt,oneservice:Mt,pa:Mt,a11yplayground:jt,supportgowhere:Mt},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=bt(a?Tt:Rt,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?gt(i,e,s):i[e];return"function"==typeof l?l(r):l},It={text:_t("text"),"text-subtle":_t("text-subtle"),"text-subtler":_t("text-subtler"),"text-subtlest":_t("text-subtlest"),"text-primary":_t("text-primary"),"text-hover":_t("text-hover"),"text-selected":_t("text-selected"),"text-selected-hover":_t("text-selected-hover"),"text-disabled":_t("text-disabled"),"text-disabled-subtle":_t("text-disabled-subtle"),"text-disabled-subtlest":_t("text-disabled-subtlest"),"text-selected-disabled":_t("text-selected-disabled"),"text-success":_t("text-success"),"text-warning":_t("text-warning"),"text-error":_t("text-error"),"text-info":_t("text-info"),"text-inverse":_t("text-inverse"),icon:_t("icon"),"icon-subtle":_t("icon-subtle"),"icon-strongest":_t("icon-strongest"),"icon-primary":_t("icon-primary"),"icon-primary-subtle":_t("icon-primary-subtle"),"icon-primary-subtlest":_t("icon-primary-subtlest"),"icon-hover":_t("icon-hover"),"icon-selected":_t("icon-selected"),"icon-selected-hover":_t("icon-selected-hover"),"icon-disabled":_t("icon-disabled"),"icon-disabled-subtle":_t("icon-disabled-subtle"),"icon-selected-disabled":_t("icon-selected-disabled"),"icon-success":_t("icon-success"),"icon-warning":_t("icon-warning"),"icon-error":_t("icon-error"),"icon-error-strong":_t("icon-error-strong"),"icon-info":_t("icon-info"),"icon-inverse":_t("icon-inverse"),"icon-primary-inverse":_t("icon-primary-inverse"),border:_t("border"),"border-strong":_t("border-strong"),"border-stronger":_t("border-stronger"),"border-primary":_t("border-primary"),"border-primary-subtle":_t("border-primary-subtle"),"border-hover":_t("border-hover"),"border-hover-strong":_t("border-hover-strong"),"border-selected":_t("border-selected"),"border-selected-subtle":_t("border-selected-subtle"),"border-selected-subtlest":_t("border-selected-subtlest"),"border-selected-hover":_t("border-selected-hover"),"border-focus":_t("border-focus"),"border-focus-strong":_t("border-focus-strong"),"border-disabled":_t("border-disabled"),"border-selected-disabled":_t("border-selected-disabled"),"border-success":_t("border-success"),"border-warning":_t("border-warning"),"border-error":_t("border-error"),"border-error-focus":_t("border-error-focus"),"border-error-focus-strong":_t("border-error-focus-strong"),"border-error-strong":_t("border-error-strong"),"border-info":_t("border-info"),bg:_t("bg"),"bg-strong":_t("bg-strong"),"bg-stronger":_t("bg-stronger"),"bg-strongest":_t("bg-strongest"),"bg-hover":_t("bg-hover"),"bg-hover-strong":_t("bg-hover-strong"),"bg-hover-subtle":_t("bg-hover-subtle"),"bg-hover-neutral":_t("bg-hover-neutral"),"bg-hover-neutral-strong":_t("bg-hover-neutral-strong"),"bg-selected":_t("bg-selected"),"bg-selected-hover":_t("bg-selected-hover"),"bg-selected-strong":_t("bg-selected-strong"),"bg-selected-stronger":_t("bg-selected-stronger"),"bg-selected-strongest":_t("bg-selected-strongest"),"bg-selected-strongest-hover":_t("bg-selected-strongest-hover"),"bg-disabled":_t("bg-disabled"),"bg-selected-disabled":_t("bg-selected-disabled"),"bg-selected-stronger-disabled":_t("bg-selected-stronger-disabled"),"bg-success":_t("bg-success"),"bg-success-hover":_t("bg-success-hover"),"bg-success-strong":_t("bg-success-strong"),"bg-success-strong-hover":_t("bg-success-strong-hover"),"bg-warning":_t("bg-warning"),"bg-warning-hover":_t("bg-warning-hover"),"bg-warning-strong":_t("bg-warning-strong"),"bg-warning-strong-hover":_t("bg-warning-strong-hover"),"bg-info":_t("bg-info"),"bg-info-hover":_t("bg-info-hover"),"bg-info-strong":_t("bg-info-strong"),"bg-info-strong-hover":_t("bg-info-strong-hover"),"bg-error":_t("bg-error"),"bg-error-hover":_t("bg-error-hover"),"bg-error-strong":_t("bg-error-strong"),"bg-error-strong-hover":_t("bg-error-strong-hover"),"bg-inverse":_t("bg-inverse"),"bg-inverse-subtle":_t("bg-inverse-subtle"),"bg-inverse-subtler":_t("bg-inverse-subtler"),"bg-inverse-subtlest":_t("bg-inverse-subtlest"),"bg-inverse-hover":_t("bg-inverse-hover"),"bg-primary":_t("bg-primary"),"bg-primary-subtle":_t("bg-primary-subtle"),"bg-primary-subtler":_t("bg-primary-subtler"),"bg-primary-subtlest":_t("bg-primary-subtlest"),"bg-available":_t("bg-available"),"bg-primary-hover":_t("bg-primary-hover"),"bg-primary-subtlest-hover":_t("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":_t("bg-primary-subtlest-selected"),"overlay-strong":_t("overlay-strong"),"overlay-subtle":_t("overlay-subtle"),hyperlink:_t("hyperlink"),"hyperlink-hover":_t("hyperlink-hover"),"hyperlink-visited":_t("hyperlink-visited"),"hyperlink-inverse":_t("hyperlink-inverse"),"focus-ring":_t("focus-ring"),"focus-ring-inverse":_t("focus-ring-inverse")},Lt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ft["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:It.border(r),u=ft.solid;return x`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ft["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:It.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return x`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Ht=e=>1===e.length&&"theme"in e[0],Wt=e=>(...r)=>t=>{const n=Ht(r)?[]:r,a=Ht(r)?r[0]:t,i=a.theme;return(0,bt(Lt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Pt={solid:Wt("solid"),"dashed-default":Wt("dashed-default")},Nt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Vt=e=>r=>{var t;const n=r.theme,a=bt(Nt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?gt(a,e,n.overrides.breakpoint):a[e],i},Ut={"xxs-min":Vt("xxs-min"),"xxs-max":Vt("xxs-max"),"xs-min":Vt("xs-min"),"xs-max":Vt("xs-max"),"sm-min":Vt("sm-min"),"sm-max":Vt("sm-max"),"md-min":Vt("md-min"),"md-max":Vt("md-max"),"lg-min":Vt("lg-min"),"lg-max":Vt("lg-max"),"xl-min":Vt("xl-min"),"xl-max":Vt("xl-max"),"xxl-min":Vt("xxl-min"),"xxs-column":Vt("xxs-column"),"xs-column":Vt("xs-column"),"sm-column":Vt("sm-column"),"md-column":Vt("md-column"),"lg-column":Vt("lg-column"),"xl-column":Vt("xl-column"),"xxl-column":Vt("xxl-column"),"xxs-gutter":Vt("xxs-gutter"),"xs-gutter":Vt("xs-gutter"),"sm-gutter":Vt("sm-gutter"),"md-gutter":Vt("md-gutter"),"lg-gutter":Vt("lg-gutter"),"xl-gutter":Vt("xl-gutter"),"xxl-gutter":Vt("xxl-gutter"),"xxs-margin":Vt("xxs-margin"),"xs-margin":Vt("xs-margin"),"sm-margin":Vt("sm-margin"),"md-margin":Vt("md-margin"),"lg-margin":Vt("lg-margin"),"xl-margin":Vt("xl-margin"),"xxl-margin":Vt("xxl-margin")},Kt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ut["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Zt={MaxWidth:Kt("max-width"),MinWidth:Kt("min-width")},Jt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},qt=e=>r=>{var t;const n=r.theme,a=bt(Jt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?gt(a,e,n.overrides.fontSpec):a[e]},Xt={"heading-size-xxl":qt("heading-size-xxl"),"heading-size-xl":qt("heading-size-xl"),"heading-size-lg":qt("heading-size-lg"),"heading-size-md":qt("heading-size-md"),"heading-size-sm":qt("heading-size-sm"),"heading-size-xs":qt("heading-size-xs"),"heading-lh-xxl":qt("heading-lh-xxl"),"heading-lh-xl":qt("heading-lh-xl"),"heading-lh-lg":qt("heading-lh-lg"),"heading-lh-md":qt("heading-lh-md"),"heading-lh-sm":qt("heading-lh-sm"),"heading-lh-xs":qt("heading-lh-xs"),"heading-ls-xxl":qt("heading-ls-xxl"),"heading-ls-xl":qt("heading-ls-xl"),"heading-ls-lg":qt("heading-ls-lg"),"heading-ls-md":qt("heading-ls-md"),"heading-ls-sm":qt("heading-ls-sm"),"heading-ls-xs":qt("heading-ls-xs"),"weight-light":qt("weight-light"),"weight-regular":qt("weight-regular"),"weight-semibold":qt("weight-semibold"),"weight-bold":qt("weight-bold"),"font-family":qt("font-family"),"body-size-baseline":qt("body-size-baseline"),"body-size-md":qt("body-size-md"),"body-size-sm":qt("body-size-sm"),"body-size-xs":qt("body-size-xs"),"body-lh-baseline":qt("body-lh-baseline"),"body-lh-md":qt("body-lh-md"),"body-lh-sm":qt("body-lh-sm"),"body-lh-xs":qt("body-lh-xs"),"body-ls-baseline":qt("body-ls-baseline"),"body-ls-md":qt("body-ls-md"),"body-ls-sm":qt("body-ls-sm"),"body-ls-xs":qt("body-ls-xs"),"form-label-size":qt("form-label-size"),"form-description-size":qt("form-description-size"),"form-label-lh":qt("form-label-lh"),"form-description-lh":qt("form-description-lh"),"form-label-ls":qt("form-label-ls"),"form-description-ls":qt("form-description-ls")},Gt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return x`
        font-family: ${qt("font-family")};
        font-size: ${qt(e)};
        font-weight: ${qt(r)};
        line-height: ${qt(t)};
        letter-spacing: ${qt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Qt=(e={})=>({"heading-xxl-light":Gt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Gt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Gt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Gt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Gt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Gt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Gt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Gt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Gt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Gt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Gt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Gt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Gt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Gt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Gt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Gt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Gt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Gt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Gt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Gt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Gt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Gt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Gt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Gt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Gt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Gt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Gt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Gt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Gt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Gt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Gt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Gt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Gt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Gt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Gt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Gt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Gt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Gt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Gt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Gt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Gt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Gt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),en=Qt({disableLigatures:!0}),rn={collections:{default:Qt(),bookingsg:en,pa:Qt({disableLigatures:!0}),a11yplayground:Qt({disableLigatures:!0}),supportgowhere:Qt({disableLigatures:!0})},defaultValue:"default"},tn=e=>r=>{var t;const n=r.theme,a=bt(rn,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?gt(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},nn={"heading-xxl-light":tn("heading-xxl-light"),"heading-xxl-regular":tn("heading-xxl-regular"),"heading-xxl-semibold":tn("heading-xxl-semibold"),"heading-xxl-bold":tn("heading-xxl-bold"),"heading-xl-light":tn("heading-xl-light"),"heading-xl-regular":tn("heading-xl-regular"),"heading-xl-semibold":tn("heading-xl-semibold"),"heading-xl-bold":tn("heading-xl-bold"),"heading-lg-light":tn("heading-lg-light"),"heading-lg-regular":tn("heading-lg-regular"),"heading-lg-semibold":tn("heading-lg-semibold"),"heading-lg-bold":tn("heading-lg-bold"),"heading-md-light":tn("heading-md-light"),"heading-md-regular":tn("heading-md-regular"),"heading-md-semibold":tn("heading-md-semibold"),"heading-md-bold":tn("heading-md-bold"),"heading-sm-light":tn("heading-sm-light"),"heading-sm-regular":tn("heading-sm-regular"),"heading-sm-semibold":tn("heading-sm-semibold"),"heading-sm-bold":tn("heading-sm-bold"),"heading-xs-light":tn("heading-xs-light"),"heading-xs-regular":tn("heading-xs-regular"),"heading-xs-semibold":tn("heading-xs-semibold"),"heading-xs-bold":tn("heading-xs-bold"),"body-baseline-light":tn("body-baseline-light"),"body-baseline-regular":tn("body-baseline-regular"),"body-baseline-semibold":tn("body-baseline-semibold"),"body-baseline-bold":tn("body-baseline-bold"),"body-md-light":tn("body-md-light"),"body-md-regular":tn("body-md-regular"),"body-md-semibold":tn("body-md-semibold"),"body-md-bold":tn("body-md-bold"),"body-sm-light":tn("body-sm-light"),"body-sm-regular":tn("body-sm-regular"),"body-sm-semibold":tn("body-sm-semibold"),"body-sm-bold":tn("body-sm-bold"),"body-xs-light":tn("body-xs-light"),"body-xs-regular":tn("body-xs-regular"),"body-xs-semibold":tn("body-xs-semibold"),"body-xs-bold":tn("body-xs-bold"),"form-label":tn("form-label"),"form-description":tn("form-description")},an={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},on=e=>r=>{var t;const n=r.theme,a=bt(an,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?gt(a,e,n.overrides.motion):a[e]},sn={"duration-150":on("duration-150"),"duration-250":on("duration-250"),"duration-350":on("duration-350"),"duration-500":on("duration-500"),"duration-800":on("duration-800"),"duration-1000":on("duration-1000"),"ease-default":on("ease-default"),"ease-standard":on("ease-standard"),"ease-entrance":on("ease-entrance"),"ease-exit":on("ease-exit")},ln={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},dn=e=>r=>{var t;const n=r.theme,a=bt(ln,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${gt(a,e,n.overrides.radius)}px`:`${a[e]}px`},cn={none:dn("none"),xs:dn("xs"),sm:dn("sm"),md:dn("md"),lg:dn("lg"),full:dn("full")},un={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},gn=e=>r=>{var t;const n=r.theme,a=bt(un,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${gt(a,e,n.overrides.spacing)}px`:`${a[e]}px`},bn={"spacing-0":gn("spacing-0"),"spacing-4":gn("spacing-4"),"spacing-8":gn("spacing-8"),"spacing-12":gn("spacing-12"),"spacing-16":gn("spacing-16"),"spacing-20":gn("spacing-20"),"spacing-24":gn("spacing-24"),"spacing-32":gn("spacing-32"),"spacing-40":gn("spacing-40"),"spacing-48":gn("spacing-48"),"spacing-64":gn("spacing-64"),"spacing-72":gn("spacing-72"),"layout-xs":gn("layout-xs"),"layout-sm":gn("layout-sm"),"layout-md":gn("layout-md"),"layout-lg":gn("layout-lg"),"layout-xl":gn("layout-xl"),"layout-xxl":gn("layout-xxl"),"layout-xxxl":gn("layout-xxxl")},hn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),mn=Object.assign(Object.assign({},It),{Primitive:kt}),fn=Object.assign(Object.assign({},nn),{Spec:Xt}),yn=sn,pn=Object.assign(Object.assign({},ft),{Util:Pt}),vn=bn,xn=cn,Dn=Ut,wn=Zt,Fn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},$n={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},En={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Cn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Sn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Bn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},An={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},kn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},On={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Fn),{light:hn(Fn,"light"),dark:hn(Fn,"dark")}),Object.assign(Object.assign({},$n),{light:hn($n,"light"),dark:hn($n,"dark")}),Object.assign(Object.assign({},En),{light:hn(En,"light"),dark:hn(En,"dark")}),Object.assign(Object.assign({},Cn),{light:hn(Cn,"light"),dark:hn(Cn,"dark")}),Object.assign(Object.assign({},Sn),{light:hn(Sn,"light"),dark:hn(Sn,"dark")}),Object.assign(Object.assign({},Bn),{light:hn(Bn,"light"),dark:hn(Bn,"dark")}),Object.assign(Object.assign({},An),{light:hn(An,"light"),dark:hn(An,"dark")}),Object.assign(Object.assign({},kn),{light:hn(kn,"light"),dark:hn(kn,"dark")}),Object.assign(Object.assign({},On),{light:hn(On,"light"),dark:hn(On,"dark")});const Mn=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Mn(e.$variant);return x`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Yn=x`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${vn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Mn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${xn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${mn["border-focus"]};
    }
`,zn=v.button`
    ${Yn}
    cursor: pointer;
`;v.div`
    ${Yn}
`;const jn=D`
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
`;v.div`
    position: relative;
    border: ${pn["width-010"]} ${pn.solid} ${mn.border};
    border-radius: ${xn.sm};
    background: ${mn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${mn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${mn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?x`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:x`
                animation: ${jn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?x`
                background: ${mn["bg-disabled"]};

                ${zn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${mn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${zn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?x`
                border-color: ${mn["border-error"]};

                :focus-within {
                    border-color: ${mn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${mn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${yn["duration-250"]} ${yn["ease-default"]};
    margin-left: ${vn["spacing-16"]};
`,v(p)`
    color: ${mn.icon};
`,v.div`
    height: 1px;
    background: ${mn.border};
    margin: 0 ${vn["spacing-8"]};
`,v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return x`
                color: ${mn["text-disabled"]};
            `}}
`;v(v.div`
    ${e=>"small"===e.$variant?fn["body-md-regular"]:fn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return x`
                    ${r=1,x`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${mn["text-subtler"]};
`;var Rn=function(e,r){return Rn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Rn(e,r)};var Tn=function(){return Tn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},Tn.apply(this,arguments)};var _n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var In=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ln="object"==typeof _n&&_n&&_n.Object===Object&&_n,Hn="object"==typeof self&&self&&self.Object===Object&&self,Wn=Ln||Hn||Function("return this")(),Pn=Wn,Nn=function(){return Pn.Date.now()},Vn=/\s/;var Un=function(e){for(var r=e.length;r--&&Vn.test(e.charAt(r)););return r},Kn=/^\s+/;var Zn=function(e){return e?e.slice(0,Un(e)+1).replace(Kn,""):e},Jn=Wn.Symbol,qn=Jn,Xn=Object.prototype,Gn=Xn.hasOwnProperty,Qn=Xn.toString,ea=qn?qn.toStringTag:void 0;var ra=function(e){var r=Gn.call(e,ea),t=e[ea];try{e[ea]=void 0;var n=!0}catch(e){}var a=Qn.call(e);return n&&(r?e[ea]=t:delete e[ea]),a},ta=Object.prototype.toString;var na=ra,aa=function(e){return ta.call(e)},ia=Jn?Jn.toStringTag:void 0;var oa=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ia&&ia in Object(e)?na(e):aa(e)},sa=function(e){return null!=e&&"object"==typeof e};var la=Zn,da=In,ca=function(e){return"symbol"==typeof e||sa(e)&&"[object Symbol]"==oa(e)},ua=/^[-+]0x[0-9a-f]+$/i,ga=/^0b[01]+$/i,ba=/^0o[0-7]+$/i,ha=parseInt;var ma=In,fa=Nn,ya=function(e){if("number"==typeof e)return e;if(ca(e))return NaN;if(da(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=da(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=la(e);var t=ga.test(e);return t||ba.test(e)?ha(e.slice(2),t?2:8):ua.test(e)?NaN:+e},pa=Math.max,va=Math.min;var xa=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=fa();if(h(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?va(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function y(){var e=fa(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=ya(r)||0,ma(t)&&(c=!!t.leading,i=(u="maxWait"in t)?pa(ya(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(fa())},y},Da=xa,wa=In;var Fa=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wa(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Da(e,r,{leading:n,maxWait:r,trailing:a})},$a=function(e,r,t,n){switch(r){case"debounce":return xa(e,t,n);case"throttle":return Fa(e,t,n);default:return e}},Ea=function(e){return"function"==typeof e},Ca=function(){return"undefined"==typeof window},Sa=function(e){return e instanceof Element||e instanceof HTMLDocument},Ba=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Ea(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ca()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ca())return null;if(r)return document.querySelector(r);if(n&&Sa(n))return n;if(t.targetRef&&Sa(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Ba(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Ca()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Ea(r)?"renderProp":Ea(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Ca()||(t.resizeHandler=$a(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Rn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ca()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Aa,ka=Ca()?u:g;function Oa(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return ka((function(){if(!Ca()){var e=Ba(m,w,c,g);v.current=$a((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Ca()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),Tn({ref:p},D)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Aa||(Aa={}));v.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Ma=e=>{const r=b.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},Ya=v.div`
    display: flex;
    flex-direction: column;
`,za=e=>"right"===e?"bottom-end":"bottom-start",ja=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y,rootNode:p})=>{var v;const x=w(),D=Dn["sm-max"]({theme:x}),T=i(null),_=i(null),{width:I=0}=Oa({targetRef:T,handleHeight:!1}),L={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<D;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:W,context:P}=$({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:E,placement:za(f),middleware:[C(m),S(),B({limiter:A()}),k({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),L]}),N=(()=>{const[e,r]=o(void 0),t=F();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Aa.Change,e),t.events.emit(Aa.Ready),()=>t.events.off(Aa.Change,e)}),[t]),e})(),{isMounted:V,styles:U}=O(P,{initial:{opacity:0},open:{opacity:1},duration:300}),K=M(P,{enabled:n,toggle:h}),Z=Y(P,{enabled:n}),{getReferenceProps:J,getFloatingProps:q}=z([K,Z]);return e(r,{children:[t("div",Object.assign({ref:e=>{T.current=e,H.setReference(e)}},J(),{children:c()})),V&&t(j,{root:p,children:t(R,{context:P,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:H.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=b?b:N)&&void 0!==v?v:50})},q(),{children:t(Ya,{ref:_,style:Object.assign({},U),inert:Ma(U.opacity<1),children:g({elementWidth:I})})}))})})]})},Ra=v.div`
    --vertical-inset: ${vn["spacing-24"]};
    --horizontal-inset: ${vn["spacing-20"]};
    --header-bottom-spacing: ${vn["spacing-4"]};

    border: ${pn["width-010"]} ${pn.solid} ${mn.border};
    border-radius: ${xn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${wn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var Ta={exports:{}};Ta.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,h,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,h,y,p,v,x)):new Date(m,f,h,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var _a=P(Ta.exports),Ia={exports:{}};Ia.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var La=P(Ia.exports),Ha={exports:{}};Ha.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Wa=P(Ha.exports),Pa={exports:{}};Pa.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Na,Va,Ua,Ka=P(Pa.exports),Za={exports:{}},Ja=P(Za.exports=(Na={year:0,month:1,day:2,hour:3,minute:4,second:5},Va={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Va[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Va[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Na[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));V.extend(La),V.extend(Ka),V.extend(Wa),V.extend(_a),V.extend(Ja),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=V(r).startOf("week");return qa(t).map((e=>Xa(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Xa(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(V(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+V(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=V(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?V(n):void 0,a?V(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Ua||(Ua={}));const qa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Xa=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ga=[1,3,5,7,8,10,12],Qa=[4,6,9,11];var ei,ri,ti,ni;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Ga.includes(i)?Math.min(a,31).toString():Qa.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=V(e,t);return V(r,t).diff(n,"minute")},e.toDayjs=e=>e?V(e):V(),e.addMinutesToTime=(e,r,t="HH:mm")=>V(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>V(e).isSame(V(r),t)}(ei||(ei={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!V(e).isBefore(n,"day"))||!(!a||!V(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(V(e).isValid())return e}return""}}(ri||(ri={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ti||(ti={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(ni||(ni={}));const ai=e=>{const[r,t]=o(e),n=i(e);return[r,h((e=>{n.current=e,t(e)}),[]),n]},ii=v.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,oi=D`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,si=v.div`
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
    animation: ${oi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,li=v(si)`
    animation-delay: -0.45s;
`,di=v(si)`
    animation-delay: -0.3s;
`,ci=v(si)`
    animation-delay: -0.15s;
`,ui={Button:{"button-radius":cn.md,"button-default-colour-bg":It["bg-primary"],"button-default-colour-bg-hover":It["bg-primary-hover"],"button-default-colour-text":It["text-inverse"],"button-secondary-colour-border":It["border-primary"],"button-secondary-colour-text":It["text-primary"],"button-light-colour-text":It["text-primary"],"button-link-colour-text":It["text-primary"]}},gi={collections:{default:{Button:{"button-radius":cn.sm,"button-default-colour-bg":It["bg-primary"],"button-default-colour-bg-hover":It["bg-primary-hover"],"button-default-colour-text":It["text-inverse"],"button-secondary-colour-border":It["border-primary"],"button-secondary-colour-text":It["text-primary"],"button-light-colour-text":It["text-primary"],"button-link-colour-text":It["text-primary"]}},pa:{Button:{"button-radius":cn.full,"button-default-colour-bg":It["bg-primary"],"button-default-colour-bg-hover":It["bg-primary-hover"],"button-default-colour-text":It["text-inverse"],"button-secondary-colour-border":It["border-primary"],"button-secondary-colour-text":It["text-primary"],"button-light-colour-text":It["text-primary"],"button-link-colour-text":It["text-primary"]}},a11yplayground:ui},defaultValue:"default"},bi=(e,r)=>t=>{var n,a;const i=t.theme,o=bt(gi,null==i?void 0:i.componentScheme);return hi((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},hi=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},mi=bi("Button","button-radius"),fi=bi("Button","button-default-colour-bg"),yi=bi("Button","button-default-colour-bg-hover"),pi=bi("Button","button-default-colour-text"),vi=bi("Button","button-secondary-colour-border"),xi=bi("Button","button-secondary-colour-text"),Di=bi("Button","button-light-colour-text"),wi=bi("Button","button-link-colour-text"),Fi=v.button`
    padding: ${vn["spacing-8"]} ${vn["spacing-16"]};
    min-width: 4rem;
    border: ${pn["width-010"]} ${pn.solid} transparent;
    transition: all ${yn["duration-250"]} ${yn["ease-default"]};
    border-radius: ${mi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${mn.bg};
                    border-color: ${e.$buttonIsDanger?mn["border-error-strong"]:vi};

                    color: ${e.$buttonIsDanger?mn["text-error"]:xi};

                    &:hover,
                    &:active {
                        background-color: ${mn["bg-hover-neutral"]};
                    }
                `;case"light":return x`
                    background-color: ${mn.bg};
                    border-color: ${mn.border};

                    color: ${e.$buttonIsDanger?mn["text-error"]:Di};

                    &:hover,
                    &:active {
                        background-color: ${mn["bg-hover-neutral"]};
                    }
                `;case"link":return x`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?mn["text-error"]:wi};
                    &:hover,
                    &:active {
                        background-color: ${mn["bg-hover-neutral"]};
                    }
                `;case"disabled":return x`
                    background-color: ${mn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${mn["text-disabled"]};
                `;default:return x`
                    background-color: ${e.$buttonIsDanger?mn["bg-error-strong"]:fi};};

                    ${wn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${pi}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?mn["bg-error-strong-hover"]:yi}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return x`
                    height: 2.5rem;
                    ${fn["body-md-semibold"]}

                    ${wn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return x`
                    height: 4rem;
                    ${fn["heading-md-semibold"]}

                    ${wn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return x`
                    height: 3rem;
                    ${fn["heading-xs-semibold"]}

                    ${wn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,$i=v((({color:r,className:n,size:a})=>e(ii,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(si,{id:"inner1"}),t(li,{id:"inner2"}),t(di,{id:"inner3"}),t(ci,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Ei=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Fi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t($i,{}),t("span",{children:a})]}))};Ei.displayName="Button.Default";const Ci=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Fi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t($i,{}),t("span",{children:a})]}))};Ci.displayName="Button.Small";const Si=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Fi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t($i,{}),t("span",{children:a})]}))};Si.displayName="Button.Large";const Bi={Default:a.forwardRef(Ei),Small:a.forwardRef(Ci),Large:a.forwardRef(Si)},Ai=v.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${vn["spacing-24"]};
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

        ${({$highlight:e})=>e&&x`
                background-color: ${mn["bg-hover-neutral"]};
            `}
    }
`,ki=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=H(e,["children","focusHighlight","focusOutline","type"]);return t(Ai,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Oi=x`
    color: ${mn.icon};
    height: 1rem;
    width: 1rem;
`,Mi=v(_)`
    ${Oi}
`,Yi=v(I)`
    ${Oi}
`,zi=v(p)`
    ${Oi}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ji=v.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Ri=v.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ti=v.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,_i=v.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${mn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return x`
                display: none;
            `}}
`,Ii=v.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Li=v.div`
    display: flex;
`,Hi=v.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?x`
                display: none;
            `:e.$expanded?x`
                ${zi} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Wi=v.span`
    ${fn["body-md-regular"]}
    color: ${mn.text};
`,Pi=v.div`
    display: flex;
`,Ni=v(ki)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Vi=v.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ui=v(Bi.Small)`
    flex: 1;
`,Ki=v.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Zi=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${xn.md};
    margin: 0 0.5rem;
    transition: ${yn["duration-150"]} ${yn["ease-default"]};

    // default styles
    ${fn["body-md-regular"]}
    border-radius: ${xn.md};
    border: ${pn["width-010"]} ${pn.solid} transparent;
    background-clip: border-box;
    color: ${mn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?x`
                cursor: pointer;
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?x`
                background: ${mn["bg-selected"]};
                border-color: ${mn["border-selected"]};
                color: ${mn["text-selected"]};
                font-weight: ${fn.Spec["weight-semibold"]};

                ${r&&x`
                    &:hover {
                        background: ${mn["bg-selected-hover"]};
                        border-color: ${mn["border-selected-hover"]};
                        color: ${mn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?x`
                color: ${mn["text-primary"]};
                font-weight: ${fn.Spec["weight-semibold"]};
            `:t?x`
                color: ${mn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?x`
                &:hover {
                    background: ${mn["bg-selected-hover"]};
                    border-color: ${mn["border-selected-hover"]};
                    color: ${mn["text-selected-hover"]};
                    font-weight: ${fn.Spec["weight-semibold"]};
                }
            `:x`
            &:hover {
                background: ${mn["bg-hover"]};
                color: ${mn["text-hover"]};
                font-weight: ${fn.Spec["weight-semibold"]};
            }
        `}}
`,Ji=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const h=m((()=>Ua.generateMonths(V(e))),[e]),f=i(new Array(h.length).fill(null)),[y,p]=o(h.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==y&&(null===(e=f.current[y])||void 0===e||e.focus())}),[y,h]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},D=e=>{const r=e.format("MMMM"),t=(n=e,!Ua.isWithinRange(n,d?V(d):void 0,c?V(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":V().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return h.length?t(Ki,{onBlur:()=>{p(null)},children:h.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=D(e);return t(Zi,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=h.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<h.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},qi=v.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Xi=v.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${yn["duration-150"]} ${yn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${fn["body-md-regular"]}
    border-radius: ${xn.md};
    border: ${pn["width-010"]} ${pn.solid} transparent;
    background-clip: border-box;
    color: ${mn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?x`
                cursor: pointer;
            `:r?x`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?x`
                background: ${mn["bg-selected"]};
                border-color: ${mn["border-selected"]};
                color: ${mn["text-selected"]};
                font-weight: ${fn.Spec["weight-semibold"]};

                ${r&&x`
                    &:hover {
                        background: ${mn["bg-selected-hover"]};
                        border-color: ${mn["border-selected-hover"]};
                        color: ${mn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?x`
                color: ${mn["text-primary"]};
                font-weight: ${fn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?x`
                color: ${mn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?x`
                &:hover {
                    background: ${mn["bg-selected-hover"]};
                    border-color: ${mn["border-selected-hover"]};
                    color: ${mn["text-selected-hover"]};
                    font-weight: ${fn.Spec["weight-semibold"]};
                }
            `:x`
            &:hover {
                background: ${mn["bg-hover"]};
                color: ${mn["text-hover"]};
                font-weight: ${fn.Spec["weight-semibold"]};
            }
        `}}
`,Gi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:h})=>{const f=m((()=>Ua.generateDecadeOfYears(V(e))),[e]),y=i(new Array(f.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=f.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=y.current[r])||void 0===e||e.focus())}),[p,f]);const x=(e,r)=>{r||b(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},w=e=>{const r=f.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!Ua.isWithinRange(i,d?V(d):void 0,c?V(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":V().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return f.length?t(qi,{onBlur:()=>{v(null)},children:f.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=w(e);return t(Xi,{ref:e=>{y.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),h(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Qi=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:h,selectWithinRange:m,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A,isFocusable:k=!1}=n,O=H(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,Y]=o(ei.toDayjs(l)),[z,j]=o(ei.toDayjs(l)),[R,T]=o("default"),_=i(null),I=i(null),L=i(null),W=i(null);f(a,(()=>({defaultView(){T("default")},resetView(){const e=ei.toDayjs(l);Y(e),j(e),T("default")},setCalendarDate(e){const r=ei.toDayjs(e);Y(r),j(r)}}))),u((()=>{const e=ei.toDayjs(l);Y(e),j(e)}),[l]),u((()=>{G(z)}),[z]);const P=()=>{var e;"month-options"!==R?(T("month-options"),null===(e=L.current)||void 0===e||e.focus()):(T("default"),Y(z))},N=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P(),null===(r=W.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!Ua.isWithinRange(r,d?V(d):void 0,c?V(c):void 0,"month"))return;Y(r),"default"===R&&j(r)}},U=()=>{"default"!==R?(T("default"),Y(z)):T("year-options")},K=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),U()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===R?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!Ua.isWithinRange(r,d?V(d):void 0,c?V(c):void 0,"year"))return;Y(r),"default"===R&&j(r)}},Z=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=$?$(M):M.subtract(1,"month");switch(R){case"default":j(r),Y(r);break;case"month-options":Y((e=>e.subtract(1,"year")));break;case"year-options":Y((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=E?E(M):M.add(1,"month");switch(R){case"default":j(r),Y(r);break;case"month-options":Y((e=>e.add(1,"year")));break;case"year-options":Y((e=>e.add(10,"year")))}},q=e=>{Y(e),j(e),x||T("default")},X=()=>{const e=ei.toDayjs(l);Y(e),j(e),"default"===R?Q("reset"):T("default")},G=e=>{v&&v(e)},Q=e=>{w&&w(e)},ee=()=>{if(!d||p)return!1;const e=V(d);return"month-options"===R?!Ua.isPreviousYearWithinRange(M,e):"year-options"===R?!Ua.isPreviousDecadeWithinRange(M,e):C?C(M):!Ua.isPreviousMonthWithinRange(M,e)},re=()=>{if(!c||p)return!1;const e=V(c);return"month-options"===R?!Ua.isNextYearWithinRange(M,e):"year-options"===R?!Ua.isNextDecadeWithinRange(M,e):S?S(M):!Ua.isNextMonthWithinRange(M,e)},te=()=>{const n=B?B(M):M.format("MMM"),a=V(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===R){const{beginDecade:e,endDecade:r}=Ua.getStartEndDecade(M);return`${e} to ${r}`}return A?A(M):M.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Hi,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:P,onKeyDown:N,tabIndex:k?0:-1,children:[t(Wi,{children:n}),t(zi,{})]}),e(Hi,{ref:W,"aria-label":o[R],type:"button",$expanded:"default"!==R,id:"year-dropdown",onClick:U,onKeyDown:K,tabIndex:k?0:-1,children:[t(Wi,{children:i}),t(zi,{})]})]})},ne=()=>{switch(R){case"month-options":return t(Ji,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:z,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:p});case"year-options":return t(Gi,{setCalendarDate:Y,calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:z,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:p});default:return null}};return e(ji,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":z.format("MMMM, YYYY"),role:"group"},O,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[R];return e(Ii,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Li,{children:te()}),e(Pi,{children:[t(Ni,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:Z,tabIndex:k?0:-1,children:t(Mi,{})}),t(Ni,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:re(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:k?0:-1,children:t(Yi,{})})]})]})})(),t(Ri,{children:(()=>{const n="function"==typeof s?s({calendarDate:z,currentView:R}):s;if(y)return e(r,{children:["default"===R&&n,ne()]});{const a="default"===R;return e(r,{children:[t(Ti,{inert:Ma(!a),children:n}),t(_i,{$visible:!a,children:ne()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===R)&&D;return e(Vi,{children:[t(Ui,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X,children:"Cancel"}),t(Ui,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(Y(z),"default"===R?Q("confirmed"):T("default"))},disabled:r,children:"Done"})]})})()]}))})),eo=v.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ro=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${fn["body-sm-semibold"]};
    color: ${mn.text};
`,to=v.div`
    grid-column: 1 / -1;
    display: flex;
`,no=e=>{let r=mn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=mn["bg-hover"],t=mn["bg-hover"];break;case"hover":r=mn["bg-hover-strong"],t=mn["bg-hover-strong"];break;case"hover-outline":r=mn["bg-hover-subtle"],t=mn["border-hover"];break;case"selected-outline":r=mn["bg-selected"],t=mn["border-selected"];break;case"selected-outline-subtle":r=mn["bg-selected"],t=mn["border-selected-subtle"];break;case"selected-hover":r=mn["bg-selected-hover"];break;case"selected-hover-outline":r=mn["bg-selected-hover"],t=mn["border-selected-hover"]}return{color:r,borderColor:t}},ao=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,io=v.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${yn["duration-150"]} ${yn["ease-default"]};
    border: ${pn["width-010"]} ${pn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=no(e);return x`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,oo=v(io)`
    left: 0;
`,so=v(io)`
    right: 0;
`,lo=v.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${yn["duration-150"]} ${yn["ease-default"]};

    border: ${pn["width-010"]} ${pn.solid} transparent;
    border-radius: ${xn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=no(e);return x`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,co=v(lo)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,uo=v(lo)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,go=v.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,bo=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${fn["body-md-regular"]}
    transition: ${yn["duration-150"]} ${yn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?x`
                    visibility: hidden;
                `:x`
                color: ${mn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return x`
                    font-weight: ${fn.Spec["weight-semibold"]};
                    color: ${mn["text-selected"]};
                `;case"selected-hover":return x`
                    font-weight: ${fn.Spec["weight-semibold"]};
                    color: ${mn["text-selected-hover"]};
                `;case"current":return x`
                    font-weight: ${fn.Spec["weight-semibold"]};
                    color: ${mn["text-primary"]};
                `;case"hover":return x`
                    font-weight: ${fn.Spec["weight-semibold"]};
                    color: ${mn["text-hover"]};
                `;case"unavailable":return x`
                    color: ${mn["text-disabled-subtlest"]};
                `;case"hidden":return x`
                    visibility: hidden;
                `;default:return x`
                    color: ${mn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ho=v.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,mo=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:f,onKeyDown:y,focusDate:p,label:v,ariaHidden:x,tabIndex:D=-1,role:w="button"})=>{const F=V().isSame(g,"day"),$=!!p&&p.isSame(g,"day"),E=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=i(null);u((()=>{var e;$&&C.current&&(null===(e=C.current)||void 0===e||e.focus())}),[$]);return e(ao,{"aria-hidden":x,children:[t(oo,{$type:r}),t(co,{$type:a}),t(so,{$type:n}),t(uo,{$type:o}),t(go,{$interactive:d,children:e(bo,{ref:C,tabIndex:D,role:w,"aria-label":v||E,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&F&&t(ho,{$disabled:l})]})})]})},fo=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p})=>{const v=Ua.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{h(e,!x)},w=()=>{const e=V(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:V(s),tabIndex:p};return t(mo,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(V().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=w();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};V.extend(La);const yo=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:b,maxDate:f,allowDisabledSelection:y,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=h((()=>s&&V(s).isSame(r,"month")?V(s):l&&V(l).isSame(r,"month")?V(l):V().isSame(r,"month")?V():b&&r.isSame(V(b),"month")?V(b):V(r).startOf("month")),[s,r,l,b]),w=e=>{const t=V(e);if(Ua.isWithinRange(t,b?V(b):void 0,f?V(f):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=m((()=>Ua.generateDays(r)),[r]),$=m((()=>D()),[D]),[E,C]=o(""),[S,B]=o(""),A=(e,r)=>{r&&!y||d(e)},k=(e,r)=>{r&&!y||(B(e),c(e))},O=e=>{B(e),c(e)},M=()=>{B(""),c("")};return e(eo,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(ro,{"aria-hidden":!0,children:V(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(to,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:M,children:e.map(((e,i)=>t(fo,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:b,maxDate:f,disabledDates:a,allowDisabledSelection:y,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:k,onFocus:O,setFocusCell:w,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},po=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Ua.isDisabledDay(e,l,o,s),y=!f||d,{start:p,end:v}=n?Ua.getFixedRangeStartEnd(ei.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:D}=a?Ua.getFixedRangeStartEnd(ei.toDayjs(a),c):{start:void 0,end:void 0},w=!!n&&e.isBetween(p,v,"day","[]"),F=!!a&&e.isBetween(x,D,"day","[]"),$=w&&e.isSame(p,"day")||F&&e.isSame(x,"day"),E=w&&e.isSame(v,"day")||F&&e.isSame(D,"day"),C=`From ${V(x).format("D MMMM")} to ${V(D).format("D MMMM")}, ${f?"Unavailable":"Available"}`,S=()=>{u(e,!y)},B=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},A={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:S,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&S());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},focusDate:V(i),role:"gridcell",tabIndex:m,label:C};return t(mo,Object.assign({},A,(()=>{const t={};return w||F?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":V().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return F&&B(r,"hover",t===x,t===D),w&&B(r,"selected-outline",t===p,t===v),w&&F&&(B(r,"selected-hover-outline",$,E),t===x&&t!==p&&(r.circleLeft="selected-hover")),r})()))},vo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,numberOfDays:b,setCalendarDate:f})=>{const y=i(null);u((()=>{if(y.current){const e=y.current;y.current=null,F(e)}}),[r]);const p=h((()=>a&&V(a).isSame(r,"month")?V(a):V().isSame(r,"month")?V():d&&r.isSame(V(d),"month")?V(d):V(r).startOf("month")),[a,r,d]),v=e=>{const t=V(e);if(Ua.isWithinRange(t,d?V(d):void 0,c?V(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(y.current=e);F(e)}},x=m((()=>Ua.generateDays(r)),[r]),D=m((()=>p()),[p]),[w,F]=o(""),[$,E]=o(""),C=(e,r)=>{r&&!g||(s(e),e&&!V(e).isSame(e,"month")&&E(""))},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},A=()=>{E(""),l("")};return e(eo,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(ro,{"aria-hidden":!0,children:V(e).format("ddd")},`week-day-${r}`))),x.map(((e,i)=>t(to,{role:"row",onMouseLeave:A,children:e.map(((e,i)=>t(po,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:b,onFocus:B,setFocusCell:v,tabIndex:V(e).isSame(D,"day")?0:-1},`day-${i}`)))},i)))]})},xo=v.div`
    width: 100%;
    background: ${mn.bg};
`,Do=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:g,onFocus:b,setFocusCell:h,tabIndex:m})=>{const f=Ua.isDisabledDay(e,l,o,s),y=!f||d,p=()=>{u(e,!y)},v={date:e,calendarDate:r,disabled:f,interactive:y,currentDateIndicator:!0,onSelect:p,onHover:()=>{g(e.format("YYYY-MM-DD"),!y)},onFocus:()=>{b(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(y&&p());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),h(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:V(i),tabIndex:m};return t(mo,Object.assign({},v,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":V().isSame(e,"day")&&!f&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};V.extend(La);const wo=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,showActiveMonthDaysOnly:b,setCalendarDate:f})=>{const y=i(null);u((()=>{if(y.current){const e=y.current;y.current=null,F(e)}}),[r]);const p=h((()=>a&&V(a).isSame(r,"month")?V(a):V().isSame(r,"month")?V():d&&r.isSame(V(d),"month")?V(d):V(r).startOf("month")),[a,r,d]),v=e=>{const t=V(e);if(Ua.isWithinRange(t,d?V(d):void 0,c?V(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(y.current=e);F(e)}},x=m((()=>Ua.generateDays(r)),[r]),D=m((()=>p()),[p]),[w,F]=o(""),[$,E]=o(""),C=(e,r)=>{r&&!g||s(e)},S=(e,r)=>{r&&!g||(E(e),l(e))},B=e=>{E(e),l(e)},A=()=>{E(""),l("")};return e(eo,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(F(""),E(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((e,r)=>t(ro,{"aria-hidden":!0,children:V(e).format("ddd")},`week-day-${r}`))),x.map(((e,i)=>t(to,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:A,children:e.map(((e,i)=>t(Do,{date:e,calendarDate:r,selectedDate:a,hoverDate:$,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,showActiveMonthDaysOnly:b,onSelect:C,onHover:S,onFocus:B,setFocusCell:v,tabIndex:V(e).isSame(D,"day")?0:-1},`day-${i}`)))},i)))]})},Fo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,focusDate:i,minDate:o,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:g,setFocusCell:b,tabIndex:h})=>{const m=Ua.isDisabledDay(e,l,o,s),f=!m||d,{start:y,end:p}=Ua.getWeekStartEnd(ei.toDayjs(n)),{start:v,end:x}=Ua.getWeekStartEnd(ei.toDayjs(a)),{start:D,end:w}=Ua.getWeekStartEnd(e),F=e.isSame(D,"day"),$=n&&e.isBetween(y,p,"day","[]"),E=a&&e.isBetween(v,x,"day","[]"),C=$&&e.isSame(y)||E&&e.isSame(v),S=$&&e.isSame(p)||E&&e.isSame(x),B=`From ${V(D).format("D MMMM")} to ${V(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,A=()=>{c(e,!f)},k={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:A,onHover:()=>{u(e.format("YYYY-MM-DD"),!f)},onFocus:()=>{g(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(f&&A());(r=>{let t;const n={ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.subtract(1,"month"),PageDown:()=>r.shiftKey?e.add(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),b(t.format("YYYY-MM-DD")))})(r)},focusDate:V(i),tabIndex:h,label:B,ariaHidden:!F||void 0,role:F?"button":"none"};return t(mo,Object.assign({},k,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":V().isSame(e,"day")&&!m&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return $&&E?(r="selected-hover-outline",t="selected-hover"):$?(r="selected-outline",t="selected"):E&&(r="hover",t="hover"),r&&(e.labelType=t,C?e.circleLeft=r:e.bgLeft=r,S?e.circleRight=r:e.bgRight=r),e})()))},$o=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:g,setCalendarDate:b})=>{const f=i(null);u((()=>{if(f.current){const e=f.current;f.current=null,w(e)}}),[r]);const y=h((()=>a&&V(a).isSame(r,"month")?V(a):V().isSame(r,"month")?V().startOf("week"):d&&r.isSame(V(d),"month")?V(d):V(r).startOf("month")),[a,r,d]),p=e=>{const t=V(e);if(Ua.isWithinRange(t,d?V(d):void 0,c?V(c):void 0)){if(!t.isSame(r,"month"))return null==b||b(e),void(f.current=e);w(e)}},v=m((()=>Ua.generateDays(r)),[r]),x=m((()=>y()),[y]),[D,w]=o(""),[F,$]=o(""),E=(e,r)=>{if(r&&!g)return;const t=e.startOf("week");s(t),e&&!V(e).isSame(t,"month")&&$("")},C=(e,r)=>{r&&!g||($(e),l(e))},S=e=>{$(e),l(e)},B=()=>{$(""),l("")};return e(eo,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),$(""),l(""))},"aria-label":"Week selection",children:[v[0].map(((e,r)=>t(ro,{"aria-hidden":!0,children:V(e).format("ddd")},`week-day-${r}`))),v.map(((e,i)=>t(to,{onMouseLeave:B,role:"group",children:e.map(((e,i)=>t(Fo,{date:e,calendarDate:r,selectedDate:a,hoverDate:F,focusDate:D,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:g,onSelect:E,onHover:C,onFocus:S,setFocusCell:p,tabIndex:V(e).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},Eo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:h,selectWithinRange:m=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const w=i(null),F=i(void 0),$=i(null);f(D,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)},contains(e){var r;return(null===(r=$.current)||void 0===r?void 0:r.contains(e))||!1}})));const E=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),S(t)},C=e=>{B(e)},S=e=>{n&&n(e)},B=e=>{a&&a(e)},A=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(xo,{ref:$,children:t(Qi,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:m,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=w.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),A(e)),F.current=e},initialCalendarDate:y,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const a=null===(n=w.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return t($o,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,setCalendarDate:a});case"fixed-range":return t(vo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:E,onHover:C,numberOfDays:p,setCalendarDate:a});case"single":return t(wo,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a});default:return t(yo,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:m,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:C,setCalendarDate:a})}})(r)})})})),Co=a.forwardRef(((e,r)=>{var{width:n}=e,a=H(e,["width"]);return t(Ra,{$width:n,"data-testid":"calendar-dropdown",children:t(Eo,Object.assign({ref:r},a))})})),So=v.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return x`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${fn.Spec["body-size-baseline"]} -
                            ${vn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${vn["spacing-8"]};
                }
            `}}
`,Bo=v.div`
    width: 100%; // Force next flex item to break to next line
`,Ao=v.div`
    display: flex;
    flex: 1;
    align-items: center;
`,ko=v(L)`
    color: ${mn.icon};
    width: ${fn.Spec["body-size-baseline"]};
    height: ${fn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${vn["spacing-8"]};
    align-self: center;
`,Oo=v.div`
    position: absolute;
    background: ${e=>e.$error?mn["border-error-focus-strong"]:mn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${vn["spacing-8"]} - (${fn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${yn["duration-350"]} ${yn["ease-standard"]},
        opacity ${yn["duration-350"]} ${yn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return x`
                    opacity: 1;
                `;case"end":return x`
                    left: calc(50% + ${vn["spacing-16"]});
                    opacity: 1;
                `;case"none":return x`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return x`
                display: none;
            `}}
`,Mo=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(So,{className:i,$wrap:o,children:[t(Ao,{"data-id":"range-container-elem1-container",children:s}),t(ko,{}),o&&t(Bo,{}),t(Ao,{"data-id":"range-container-elem2-container",children:l}),t(Oo,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]})},Yo=x`
    outline-offset: -1px;
    outline: ${pn["width-020"]} ${pn.solid} ${mn["border-focus"]};
`,zo=x`
    outline-color: ${mn["border-focus"]};
`,jo=x`
    outline-color: ${mn["border-disabled"]};
`,Ro=x`
    outline-color: ${mn["border-error-focus"]};
`,To=v(v.div`
    border: ${pn["width-010"]} ${pn.solid} ${mn.border};
    border-radius: ${xn.sm};
    background: ${mn.bg};

    :focus-within {
        ${Yo}
    }
    ${e=>e.$focused&&Yo}

    ${e=>e.$readOnly?x`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${zo}
                }
                ${e.$focused&&zo}
            `:e.$disabled?x`
                background: ${mn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${jo}
                }
                ${e.$focused&&jo}
            `:e.$error?x`
                border-color: ${mn["border-error"]};

                :focus-within {
                    ${Ro}
                }
                ${e.$focused&&Ro}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${vn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,_o=v.input`
    ${e=>"small"===e.$variant?fn["body-md-regular"]:fn["body-baseline-regular"]}
    color: ${mn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${mn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${mn["text-subtler"]};
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
`;v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${pn["width-010"]} ${pn.solid}
            ${mn["border-focus"]};
        border-radius: ${xn.sm};
    }
`;const Io=v.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Lo=v.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return x`
                ${Ho}, ${Vo} {
                    color: ${mn["text-subtler"]};
                }
            `}}
`,Ho=v(_o)`
    background: transparent;
    text-align: center;
`,Wo=v(Ho)`
    width: 2rem;
    margin-right: ${vn["spacing-4"]};
`,Po=v(Ho)`
    width: 2.5rem;
`,No=v(Ho)`
    width: 3rem;
    margin-left: ${vn["spacing-4"]};
`,Vo=v.span`
    ${fn["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return x`
                color: ${mn.text};
            `}}
`,Uo=v.div`
    ${fn["body-baseline-regular"]}
    background-color: ${mn.bg};
    color: ${mn["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?x`
                background-color: ${mn["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?x`
                display: none;
            `:void 0}
`;V.extend(_a);const Ko=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:b,onFocus:h,onBlur:m,hideInputKeyboard:y,inputLabels:p=["Date","Month","Year"]},v)=>{const x=y?"none":"numeric",[D,w,F]=ai(""),[$,E,C]=ai(""),[S,B,A]=ai(""),[k,O]=o("none"),[M,Y]=o(!1),z=i(null),j=i(null),R=i(null),T=i(null),[_,I,L]=K(d);u((()=>{var e;const[r="",t="",n=""]=K(s);w(r),E(t),B(n),r||t||n||!z.current||!z.current.contains(document.activeElement)||null===(e=j.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||O("none"),l&&(Y(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))}),[l]),f(v,(()=>({ref:z,resetPlaceholder(){Y(!1)},resetInput(){const[e="",r="",t=""]=K(s);w(e),E(r),B(t)},focusYearRef(){var e;null===(e=T.current)||void 0===e||e.focus()}})),[w,E,B,s]);const H=e=>{var r;e.preventDefault(),null===(r=j.current)||void 0===r||r.focus()},W=e=>{e.target.select();const r=e.target.name;O(r)},P=e=>{const[r,t,n]=a,i={[r]:F.current,[t]:C.current,[n]:A.current},o=e.target.name,s=i[o],l=o!==n?ni.padValue(s,!0):s;switch(o){case r:i[r]=l,w(l);break;case t:i[t]=l,E(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=V(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),z.current&&!z.current.contains(e.relatedTarget)&&(O("none"),null==m||m(u||c))},N=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:D,month:$,year:S};switch(n){case a[0]:o.day=i,w(i),2===i.length&&(null===(r=R.current)||void 0===r||r.focus());break;case a[1]:o.month=i,E(i),2===i.length&&(null===(t=T.current)||void 0===t||t.focus());break;case a[2]:o.year=i,B(i)}if(!o.day&&!o.month&&!o.year)return void b("");const s=`${o.year}-${o.month}-${o.day}`;V(s,"YYYY-MM-DD",!0).isValid()&&b(s)},U=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(k===a[1]&&0===$.length&&(null===(r=j.current)||void 0===r||r.focus()),k===a[2]&&0===S.length&&(null===(t=R.current)||void 0===t||t.focus()))};function K(e){if(e){const r=V(new Date(e));return r.isValid()?[ni.padValue(r.date().toString()),ni.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Io,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(Y(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))},onFocus:e=>{r||(Y(!0),l||null==h||h(e))},children:[e(Lo,{ref:z,$hover:!!d,children:[t(Wo,{ref:j,name:a[0],maxLength:2,value:null!=_?_:D,onFocus:W,onBlur:P,onChange:N,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":p[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[0]||n?"DD":""}),t(Vo,{$inactive:0===D.length,children:"/"}),t(Po,{ref:R,name:a[1],maxLength:2,value:null!=I?I:$,onFocus:W,onBlur:P,onChange:N,onKeyDown:U,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":p[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[1]||n?"MM":""}),t(Vo,{$inactive:0===$.length,children:"/"}),t(No,{ref:T,name:a[2],maxLength:4,value:null!=L?L:S,onFocus:W,onBlur:P,onChange:N,onKeyDown:U,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":p[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(Uo,{$hide:M,$disabled:r,onMouseDown:H,children:c})})()]})})),Zo=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},Jo=v(To)`
    ${e=>e.$wrap&&x`
            padding: ${vn["spacing-12"]} ${vn["spacing-16"]};
        `}
`,qo=v.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&x`
            height: fit-content;
        `}
`,Xo={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Go=r=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:g,valueEnd:b,onChange:m,onFocus:f,onBlur:p,onYearMonthDisplayChange:v,withButton:x=!0,variant:D="range",numberOfDays:w=7,readOnly:F,id:$,allowDisabledSelection:E,zIndex:C,dropdownRootNode:S}=r,B=H(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[A,k]=o(),[O,M]=o(void 0),Y="week"===D,z="fixed-range"===D,[j,R]=o(!1),[T,_]=o(!1),[{selectedStart:I,selectedEnd:L,currentFocus:W,calendarOpen:P,isStartDirty:N,isEndDirty:U,focused:K},Z]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=y(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&Zo(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:Xo,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:Y?"none":z?"start":r,calendarOpen:!F,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),J=i(!1),q=i(null),X=i(null),G=i(null),Q=i(null),ee=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return Oa({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:h((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:q});u((()=>{Z.resetRange({start:ri.sanitizeInput(g),end:ri.sanitizeInput(b)})}),[g,b]),u((()=>{"start"===W?k(I):"end"===W&&k(L)}),[W]);const re=e=>{var r,t,n;"Enter"!==e.code||x||(I&&L?(Z.done({start:I,end:L}),null==m||m(I,L)):(Z.dismiss(),null===(r=q.current)||void 0===r||r.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},te=e=>{var r;if(fe(e))return void(J.current=!0);if(Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),J.current=!1,!e)return void(x||L||!U||(Z.resetRange({start:"",end:""}),null==m||m("","")));if(!L)return void Z.focus("end");if(V(e).isAfter(L,"day"))Z.reselectEnd();else{if(U)return x?void 0:(Z.done({start:e,end:L}),void(null==m||m(e,L)));Z.focus("end")}},ne=e=>{var r,t,n;if(fe(e))return void(J.current=!0);if(V(e).isBefore(I,"day"))return Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),void Z.reselectEnd();if(Z.changeEnd(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),e){if(I)return x?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),Z.done({start:I,end:e}),void(null==m||m(I,e)));Z.focus("start")}else x||I||!N||(Z.resetRange({start:"",end:""}),null==m||m("",""))},ae=e=>{var r,t;if(fe(e))return void(J.current=!0);if(Z.changeStart(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),J.current=!1,!e)return void(x?Z.changeEnd(""):(Z.resetRange({start:"",end:""}),null==m||m("","")));const n=V(e).format("YYYY-MM-DD"),a=V(n).add(w-1,"day").format("YYYY-MM-DD");return Z.changeStart(n),Z.changeEnd(a),J.current=!1,x?void 0:(Z.done({start:n,end:a}),null===(t=G.current)||void 0===t||t.focusYearRef(),void(null==m||m(n,a)))},ie=()=>{(Y||z)&&_(!0),Y&&R(!0),F||s||K||(Z.focus("start"),null==f||f())},oe=e=>{var r,t,n,a;const i=e.relatedTarget,o=X.current&&X.current.contains(i),s=q.current&&q.current.contains(i),l=null===(t=null===(r=e.relatedTarget)||void 0===r?void 0:r.matches)||void 0===t?void 0:t.call(r,"[data-floating-ui-focus-guard]");(K&&!P&&!s||P&&!s&&!o&&!l)&&(Z.blur(),_(!1),R(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(a=Q.current)||void 0===a||a.resetPlaceholder(),me())},se=e=>r=>{r.stopPropagation(),F||(Z.focus(e),le(),de(),K||null==f||f())},le=()=>{if(Y){const e=ei.toDayjs(I).startOf("week").format("YYYY-MM-DD");R(!0),_(!0),k(e)}},de=()=>{z&&(_(!0),k(I))},ce=e=>{var r;e&&!J.current||(Z.resetStart(),null===(r=G.current)||void 0===r||r.resetInput())},ue=e=>{var r;e&&!J.current||(Z.resetEnd(),null===(r=Q.current)||void 0===r||r.resetInput())},ge=e=>{switch(D){case"week":(e=>{var r;const t=V(e).startOf("week").format("YYYY-MM-DD"),n=V(e).endOf("week").format("YYYY-MM-DD");if(Z.changeStart(t),Z.changeEnd(n),J.current=!1,!x)null===(r=Q.current)||void 0===r||r.focusYearRef(),Z.done({start:t,end:n}),null==m||m(t,n)})(e);break;case"fixed-range":ae(e);break;default:"start"===W?te(e):"end"===W&&ne(e)}},be=e=>{var r,t,n;switch(null===(r=q.current)||void 0===r||r.focus(),e){case"reset":Z.cancel();break;case"confirmed":if(Z.done({start:I,end:L}),null==m||m(I,L),Y)break;ye(I,L)&&("range"===D?null===(t=Q.current)||void 0===t||t.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{M(e)},me=()=>{p&&p()},fe=e=>!E&&e&&ri.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),ye=(e,r)=>!(!e||!r)&&V(e).isBefore(r,"day"),pe=e=>{let r={start:void 0,end:void 0};switch(D){case"range":r={start:"start"===W?O:void 0,end:"end"===W?O:void 0};break;case"week":if(!O)return;r={start:V(O).startOf("week").format("YYYY-MM-DD"),end:V(O).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!O)return;r={start:V(O).format("YYYY-MM-DD"),end:V(O).add(w-1,"day").format("YYYY-MM-DD")}}return r[e]};return t(ja,{enabled:!F&&!s,isOpen:P,onClose:()=>{var e,r;Z.blur(),R(!1),_(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),me()},onDismiss:()=>{var e,r,t;Z.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder()},renderElement:()=>t(Jo,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ie,onBlur:oe,$focused:K,$disabled:s,$readOnly:F,$error:d,$wrap:ee,id:$,"data-testid":B["data-testid"],"aria-disabled":s,onKeyDown:re},B,{children:e(Mo,{currentActive:W,wrap:ee,error:d,children:[t(qo,{$wrap:ee,children:t(Ko,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:I,disabled:s,readOnly:j||F,focused:"start"===W,hoverValue:pe("start"),onChange:z?ae:te,onFocus:se("start"),onBlur:ce,hideInputKeyboard:c})}),t(qo,{$wrap:ee,children:t(Ko,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:L,disabled:s,readOnly:T||F,focused:"end"===W,hoverValue:pe("end"),onChange:ne,onFocus:se("end"),onBlur:ue,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:e})=>t(Co,{ref:X,variant:D,initialCalendarDate:A,withButton:x,value:I,endValue:L,selectWithinRange:N||U,currentFocus:W,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:E,onSelect:ge,onDismiss:be,onHover:he,onYearMonthDisplayChange:v,numberOfDays:w,width:e,isFocusable:!F&&!s}),customZIndex:C,offset:16,rootNode:S})};export{Go as DateRangeInput};
//# sourceMappingURL=index.js.map
