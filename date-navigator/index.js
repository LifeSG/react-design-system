import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import a,{useRef as i,useState as o,isValidElement as l,createRef as s,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,useMemo as f,useImperativeHandle as g}from"react";import{ChevronDownIcon as p}from"@lifesg/react-icons/chevron-down";import m,{css as y,keyframes as b}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{useFloatingTree as D,useFloating as $,autoUpdate as S,offset as F,flip as w,shift as x,limitShift as B,size as O,useTransitionStyles as H,useClick as k,useDismiss as E,useInteractions as A,FloatingPortal as M,FloatingFocusManager as C}from"@floating-ui/react";import{findDOMNode as z}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as L}from"@lifesg/react-icons/chevron-right";function T(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W={exports:{}};W.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:i,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",D={};D[v]=m;var $="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[$])},F=function e(t,n,r){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();D[i]&&(a=i),n&&(D[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var l=t.name;D[l]=t,a=l}return!r&&a&&(v=a),a||!r&&v},w=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},x=b;x.l=F,x.i=S,x.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,d=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,D=(p<v?p+7:p)-v;return f(r?y-D:y+(6-D),m);case l:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case i:return g(b+"Seconds",2);case a:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=x.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[i]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=x.p(d),p=function(e){var t=w(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=w(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,D=function(){return x.m(p,y)};switch(m){case u:g=D()/12;break;case c:g=D();break;case d:g=D()/3;break;case s:g=(v-b)/6048e5;break;case l:g=(v-b)/864e5;break;case o:g=v/n;break;case i:g=v/t;break;case a:g=v/e;break;default:g=v}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return D[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=F(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return w.prototype=O,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,B,w),e.$i=!0),w},w.locale=F,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=D[v],w.Ls=D,w.p={},w}();var N=Y(W.exports);var _=Array.isArray,P="object"==typeof R&&R&&R.Object===Object&&R,I="object"==typeof self&&self&&self.Object===Object&&self,V=P||I||Function("return this")(),J=V.Symbol,Z=J,U=Object.prototype,X=U.hasOwnProperty,G=U.toString,q=Z?Z.toStringTag:void 0;var Q=function(e){var t=X.call(e,q),n=e[q];try{e[q]=void 0;var r=!0}catch(e){}var a=G.call(e);return r&&(t?e[q]=n:delete e[q]),a},K=Object.prototype.toString;var ee=Q,te=function(e){return K.call(e)},ne=J?J.toStringTag:void 0;var re=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?ee(e):te(e)};var ae=re,ie=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||ie(e)&&"[object Symbol]"==ae(e)},le=_,se=oe,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ue=function(e,t){if(le(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!se(e))||(de.test(e)||!ce.test(e)||null!=t&&e in Object(t))};var he=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fe=re,ge=he;var pe,me=function(e){if(!ge(e))return!1;var t=fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ye=V["__core-js_shared__"],be=(pe=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var ve=function(e){return!!be&&be in e},De=Function.prototype.toString;var $e=me,Se=ve,Fe=he,we=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=/^\[object .+?Constructor\]$/,Be=Function.prototype,Oe=Object.prototype,He=Be.toString,ke=Oe.hasOwnProperty,Ee=RegExp("^"+He.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ae=function(e){return!(!Fe(e)||Se(e))&&($e(e)?Ee:xe).test(we(e))},Me=function(e,t){return null==e?void 0:e[t]};var Ce=function(e,t){var n=Me(e,t);return Ae(n)?n:void 0},ze=Ce(Object,"create"),je=ze;var Le=function(){this.__data__=je?je(null):{},this.size=0};var Te=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Re=ze,Ye=Object.prototype.hasOwnProperty;var We=function(e){var t=this.__data__;if(Re){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ye.call(t,e)?t[e]:void 0},Ne=ze,_e=Object.prototype.hasOwnProperty;var Pe=ze;var Ie=Le,Ve=Te,Je=We,Ze=function(e){var t=this.__data__;return Ne?void 0!==t[e]:_e.call(t,e)},Ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=Ie,Xe.prototype.delete=Ve,Xe.prototype.get=Je,Xe.prototype.has=Ze,Xe.prototype.set=Ue;var Ge=Xe;var qe=function(){this.__data__=[],this.size=0};var Qe=function(e,t){return e===t||e!=e&&t!=t};var Ke=function(e,t){for(var n=e.length;n--;)if(Qe(e[n][0],t))return n;return-1},et=Ke,tt=Array.prototype.splice;var nt=Ke;var rt=Ke;var at=Ke;var it=qe,ot=function(e){var t=this.__data__,n=et(t,e);return!(n<0)&&(n==t.length-1?t.pop():tt.call(t,n,1),--this.size,!0)},lt=function(e){var t=this.__data__,n=nt(t,e);return n<0?void 0:t[n][1]},st=function(e){return rt(this.__data__,e)>-1},ct=function(e,t){var n=this.__data__,r=at(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dt.prototype.clear=it,dt.prototype.delete=ot,dt.prototype.get=lt,dt.prototype.has=st,dt.prototype.set=ct;var ut=dt,ht=Ce(V,"Map"),ft=Ge,gt=ut,pt=ht;var mt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var yt=function(e,t){var n=e.__data__;return mt(t)?n["string"==typeof t?"string":"hash"]:n.map},bt=yt;var vt=yt;var Dt=yt;var $t=yt;var St=function(e,t){var n=$t(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ft=function(){this.size=0,this.__data__={hash:new ft,map:new(pt||gt),string:new ft}},wt=function(e){var t=bt(this,e).delete(e);return this.size-=t?1:0,t},xt=function(e){return vt(this,e).get(e)},Bt=function(e){return Dt(this,e).has(e)},Ot=St;function Ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ht.prototype.clear=Ft,Ht.prototype.delete=wt,Ht.prototype.get=xt,Ht.prototype.has=Bt,Ht.prototype.set=Ot;var kt=Ht;function Et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Et.Cache||kt),n}Et.Cache=kt;var At=Et;var Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,zt=function(e){var t=At(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Mt,(function(e,n,r,a){t.push(r?a.replace(Ct,"$1"):n||e)})),t}));var jt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},Lt=_,Tt=oe,Rt=J?J.prototype:void 0,Yt=Rt?Rt.toString:void 0;var Wt=function e(t){if("string"==typeof t)return t;if(Lt(t))return jt(t,e)+"";if(Tt(t))return Yt?Yt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Nt=Wt;var _t=_,Pt=ue,It=zt,Vt=function(e){return null==e?"":Nt(e)};var Jt=oe;var Zt=function(e,t){return _t(e)?e:Pt(e,t)?[e]:It(Vt(e))},Ut=function(e){if("string"==typeof e||Jt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Xt=function(e,t){for(var n=0,r=(t=Zt(t,e)).length;null!=e&&n<r;)e=e[Ut(t[n++])];return n&&n==r?e:void 0};var Gt=Y((function(e,t,n){var r=null==e?void 0:Xt(e,t);return void 0===r?n:r}));const qt=(e,t,n)=>t?Gt(n,t)||Gt(e,t):n||e,Qt=(e,t)=>{const n=t||e.defaultValue;return Gt(e.collections,n)};var Kt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Kt||(Kt={}));const en={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},tn=e=>t=>{const n=t.theme,r=Qt(en,n[Kt.colorScheme]);return n.options&&n.options.color?qt(r,e,n.options.color):qt(r,e)},nn={Brand:{1:tn("Brand.1"),2:tn("Brand.2"),3:tn("Brand.3"),4:tn("Brand.4"),5:tn("Brand.5"),6:tn("Brand.6")},Primary:tn("Primary"),PrimaryDark:tn("PrimaryDark"),Secondary:tn("Secondary"),Accent:{Light:{1:tn("Accent.Light.1"),2:tn("Accent.Light.2"),3:tn("Accent.Light.3"),4:tn("Accent.Light.4"),5:tn("Accent.Light.5"),6:tn("Accent.Light.6")},Dark:{1:tn("Accent.Dark.1"),2:tn("Accent.Dark.2"),3:tn("Accent.Dark.3")}},Neutral:{1:tn("Neutral.1"),2:tn("Neutral.2"),3:tn("Neutral.3"),4:tn("Neutral.4"),5:tn("Neutral.5"),6:tn("Neutral.6"),7:tn("Neutral.7"),8:tn("Neutral.8")},Validation:{Green:{Text:tn("Validation.Green.Text"),Icon:tn("Validation.Green.Icon"),Border:tn("Validation.Green.Border"),Background:tn("Validation.Green.Background")},Orange:{Text:tn("Validation.Orange.Text"),Icon:tn("Validation.Orange.Icon"),Border:tn("Validation.Orange.Border"),Background:tn("Validation.Orange.Background"),Badge:tn("Validation.Orange.Badge")},Red:{Text:tn("Validation.Red.Text"),Icon:tn("Validation.Red.Icon"),Border:tn("Validation.Red.Border"),Background:tn("Validation.Red.Background")},Blue:{Text:tn("Validation.Blue.Text"),Icon:tn("Validation.Blue.Icon"),Border:tn("Validation.Blue.Border"),Background:tn("Validation.Blue.Background")}},Shadow:{Accent:tn("Shadow.Accent"),Red:tn("Shadow.Red"),Elevation:tn("Shadow.Elevation")}},rn={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${nn.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${nn.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${nn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${nn.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${nn.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${nn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},an=e=>t=>{var n;const r=t.theme,a=Qt(rn,r[Kt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?qt(a,e,r.options.designToken):qt(a,e)},on={InputBoxShadow:an("InputBoxShadow"),InputErrorBoxShadow:an("InputErrorBoxShadow"),ElevationBoxShadow:an("ElevationBoxShadow"),Table:{Header:an("Table.Header"),Cell:{Primary:an("Table.Cell.Primary"),Secondary:an("Table.Cell.Secondary"),Selected:an("Table.Cell.Selected"),Hover:an("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:an("Button.Danger.BackgroundColor"),Hover:an("Button.Danger.Hover"),Primary:an("Button.Danger.Primary"),Border:an("Button.Danger.Border")}}},ln={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},sn={D1:{fontFamily:ln.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ln.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ln.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ln.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ln.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ln.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ln.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ln.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ln.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ln.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},cn={D1:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:ln.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:ln.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:ln.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:ln.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:ln.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},dn={collections:{base:sn,oneservice:{D1:{fontFamily:ln.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ln.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ln.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ln.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ln.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ln.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ln.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ln.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ln.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ln.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ln.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:cn},defaultValue:"base"},un=e=>t=>{const n=t.theme,r=Qt(dn,n[Kt.textStyleScheme]);return n.options&&n.options.textStyle?qt(r,e,n.options.textStyle):qt(r,e)},hn={D1:{fontFamily:un("D1.fontFamily"),fontSize:un("D1.fontSize"),fontWeight:un("D1.fontWeight"),lineHeight:un("D1.lineHeight"),letterSpacing:un("D1.letterSpacing"),fontVariant:un("D1.fontVariant")},D2:{fontFamily:un("D2.fontFamily"),fontSize:un("D2.fontSize"),fontWeight:un("D2.fontWeight"),lineHeight:un("D2.lineHeight"),letterSpacing:un("D2.letterSpacing"),fontVariant:un("D2.fontVariant")},D3:{fontFamily:un("D3.fontFamily"),fontSize:un("D3.fontSize"),fontWeight:un("D3.fontWeight"),lineHeight:un("D3.lineHeight"),letterSpacing:un("D3.letterSpacing"),fontVariant:un("D3.fontVariant")},D4:{fontFamily:un("D4.fontFamily"),fontSize:un("D4.fontSize"),fontWeight:un("D4.fontWeight"),lineHeight:un("D4.lineHeight"),letterSpacing:un("D4.letterSpacing"),fontVariant:un("D4.fontVariant")},DBody:{fontFamily:un("DBody.fontFamily"),fontSize:un("DBody.fontSize"),fontWeight:un("DBody.fontWeight"),lineHeight:un("DBody.lineHeight"),letterSpacing:un("DBody.letterSpacing"),fontVariant:un("DBody.fontVariant")},H1:{fontFamily:un("H1.fontFamily"),fontSize:un("H1.fontSize"),fontWeight:un("H1.fontWeight"),lineHeight:un("H1.lineHeight"),letterSpacing:un("H1.letterSpacing"),fontVariant:un("H1.fontVariant")},H2:{fontFamily:un("H2.fontFamily"),fontSize:un("H2.fontSize"),fontWeight:un("H2.fontWeight"),lineHeight:un("H2.lineHeight"),letterSpacing:un("H2.letterSpacing"),fontVariant:un("H2.fontVariant")},H3:{fontFamily:un("H3.fontFamily"),fontSize:un("H3.fontSize"),fontWeight:un("H3.fontWeight"),lineHeight:un("H3.lineHeight"),letterSpacing:un("H3.letterSpacing"),fontVariant:un("H3.fontVariant")},H4:{fontFamily:un("H4.fontFamily"),fontSize:un("H4.fontSize"),fontWeight:un("H4.fontWeight"),lineHeight:un("H4.lineHeight"),letterSpacing:un("H4.letterSpacing"),fontVariant:un("H4.fontVariant")},H5:{fontFamily:un("H5.fontFamily"),fontSize:un("H5.fontSize"),fontWeight:un("H5.fontWeight"),lineHeight:un("H5.lineHeight"),letterSpacing:un("H5.letterSpacing"),fontVariant:un("H5.fontVariant")},H6:{fontFamily:un("H6.fontFamily"),fontSize:un("H6.fontSize"),fontWeight:un("H6.fontWeight"),lineHeight:un("H6.lineHeight"),letterSpacing:un("H6.letterSpacing"),fontVariant:un("H6.fontVariant")},Body:{fontFamily:un("Body.fontFamily"),fontSize:un("Body.fontSize"),fontWeight:un("Body.fontWeight"),lineHeight:un("Body.lineHeight"),letterSpacing:un("Body.letterSpacing"),fontVariant:un("Body.fontVariant")},BodySmall:{fontFamily:un("BodySmall.fontFamily"),fontSize:un("BodySmall.fontSize"),fontWeight:un("BodySmall.fontWeight"),lineHeight:un("BodySmall.lineHeight"),letterSpacing:un("BodySmall.letterSpacing"),fontVariant:un("BodySmall.fontVariant")},XSmall:{fontFamily:un("XSmall.fontFamily"),fontSize:un("XSmall.fontSize"),fontWeight:un("XSmall.fontWeight"),lineHeight:un("XSmall.lineHeight"),letterSpacing:un("XSmall.letterSpacing"),fontVariant:un("XSmall.fontVariant")}},fn=[ln.OpenSans,ln.PlusJakartaSans],gn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},pn=(e,t)=>n=>{var r;const a=hn[e].fontFamily(n),i=hn[e].fontWeight(n),o=fn.find((e=>Object.values(e).includes(a)));return o?y`
                font-family: ${gn(o,t)||gn(o,i)||a};
                font-weight: normal !important;
            `:y`
            font-family: ${a};
            font-weight: ${null!==(r=mn(t)||i)&&void 0!==r?r:"normal"};
        `},mn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yn=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},bn=(e,t,n=!1)=>r=>{const a=hn[e],i=a.fontSize(r);return y`
            ${pn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},vn=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${yn(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${yn(n)}
        `;var Dn;!function(e){e.D1=m.h1`
        ${e=>y`
                ${bn("D1",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>y`
                ${bn("D2",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>y`
                ${bn("D3",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>y`
                ${bn("D4",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>y`
                ${bn("DBody",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>y`
                ${bn("H1",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>y`
                ${bn("H2",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>y`
                ${bn("H3",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>y`
                ${bn("H4",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>y`
                ${bn("H5",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>y`
                ${bn("H6",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>y`
                ${bn("Body",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>y`
                ${bn("BodySmall",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>y`
                ${bn("XSmall",e.weight,e.paragraph)}
                color: ${nn.Neutral[1]};
                ${vn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Fn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Fn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Dn||(Dn={}));const $n=m.a`
    ${e=>y`
            ${bn(e.textStyle,e.weight)}
            color: ${nn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${nn.Secondary};

                svg {
                    color: ${nn.Secondary};
                }
            }
        `}
`,Sn=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Fn=n=>{var{external:r=!1,children:a}=n,i=T(n,["external","children"]);return e($n,Object.assign({},i,{children:[a,r&&t(Sn,{})]}))};var wn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(wn||(wn={}));const xn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Bn=e=>"small"===e?2.5:3;m.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Bn(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const On=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Bn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${nn.Accent.Light[3]};
    }
`,Hn=m.button`
    ${On}
    cursor: pointer;
`;m.div`
    ${On}
`;const kn=b`
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
`;m.div`
    position: relative;
    border: 1px solid ${nn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${nn.Neutral[8]};

    :focus-within {
        border: 1px solid ${nn.Accent.Light[1]};
        box-shadow: ${on.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${kn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${nn.Neutral[6](e)};

                ${Hn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${nn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${Hn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${nn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${nn.Validation.Red.Border(e)};
                    box-shadow: ${on.InputErrorBoxShadow};
                }
            `:void 0}
`,m.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${xn};
    margin-left: 1rem;
`,m(p)`
    color: ${nn.Neutral[3]};
    ${e=>{let t=hn.Body.fontSize;return"small"===e.$variant&&(t=hn.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,m.div`
    height: 1px;
    background: ${nn.Neutral[5]};
    margin: 0 0.5rem;
`,m.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${nn.Neutral[3]};
            `}}
`;const En=m.div`
    ${e=>bn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;m(En)`
    color: ${nn.Neutral[3]};
`;var An=function(e,t){return An=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},An(e,t)};var Mn=function(){return Mn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Mn.apply(this,arguments)};var Cn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var zn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},jn="object"==typeof Cn&&Cn&&Cn.Object===Object&&Cn,Ln="object"==typeof self&&self&&self.Object===Object&&self,Tn=jn||Ln||Function("return this")(),Rn=Tn,Yn=function(){return Rn.Date.now()},Wn=/\s/;var Nn=function(e){for(var t=e.length;t--&&Wn.test(e.charAt(t)););return t},_n=/^\s+/;var Pn=function(e){return e?e.slice(0,Nn(e)+1).replace(_n,""):e},In=Tn.Symbol,Vn=In,Jn=Object.prototype,Zn=Jn.hasOwnProperty,Un=Jn.toString,Xn=Vn?Vn.toStringTag:void 0;var Gn=function(e){var t=Zn.call(e,Xn),n=e[Xn];try{e[Xn]=void 0;var r=!0}catch(e){}var a=Un.call(e);return r&&(t?e[Xn]=n:delete e[Xn]),a},qn=Object.prototype.toString;var Qn=Gn,Kn=function(e){return qn.call(e)},er=In?In.toStringTag:void 0;var tr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":er&&er in Object(e)?Qn(e):Kn(e)},nr=function(e){return null!=e&&"object"==typeof e};var rr=Pn,ar=zn,ir=function(e){return"symbol"==typeof e||nr(e)&&"[object Symbol]"==tr(e)},or=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,sr=/^0o[0-7]+$/i,cr=parseInt;var dr=zn,ur=Yn,hr=function(e){if("number"==typeof e)return e;if(ir(e))return NaN;if(ar(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ar(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=rr(e);var n=lr.test(e);return n||sr.test(e)?cr(e.slice(2),n?2:8):or.test(e)?NaN:+e},fr=Math.max,gr=Math.min;var pr=function(e,t,n){var r,a,i,o,l,s,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-c>=i}function p(){var e=ur();if(g(e))return m(e);l=setTimeout(p,function(e){var n=t-(e-s);return u?gr(n,i-(e-c)):n}(e))}function m(e){return l=void 0,h&&r?f(e):(r=a=void 0,o)}function y(){var e=ur(),n=g(e);if(r=arguments,a=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(p,t),d?f(e):o}(s);if(u)return clearTimeout(l),l=setTimeout(p,t),f(s)}return void 0===l&&(l=setTimeout(p,t)),o}return t=hr(t)||0,dr(n)&&(d=!!n.leading,i=(u="maxWait"in n)?fr(hr(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=a=l=void 0},y.flush=function(){return void 0===l?o:m(ur())},y},mr=pr,yr=zn;var br=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return yr(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),mr(e,t,{leading:r,maxWait:t,trailing:a})},vr=function(e,t,n,r){switch(t){case"debounce":return pr(e,n,r);case"throttle":return br(e,n,r);default:return e}},Dr=function(e){return"function"==typeof e},$r=function(){return"undefined"==typeof window},Sr=function(e){return e instanceof Element||e instanceof HTMLDocument},Fr=function(e,t,n,r){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!r||t.height===o&&!n?t:(e&&Dr(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!$r()){t&&t.current&&(n.targetRef.current=t.current);var a=n.getElement();a&&(n.observableElement&&n.observableElement===a||(n.observableElement=a,n.resizeObserver.observe(a,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if($r())return null;if(t)return document.querySelector(t);if(r&&Sr(r))return r;if(n.targetRef&&Sr(n.targetRef.current))return n.targetRef.current;var a=z(n);if(!a)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,a=void 0===r||r,i=t.handleHeight,o=void 0===i||i,l=t.onResize;if(a||o){var s=Fr(l,n.setState.bind(n),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,a=t.height;!n.skipOnMount&&!$r()&&s({width:r,height:a}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Dr(t)?"renderProp":Dr(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,$r()||(n.resizeHandler=vr(n.createResizeHandler,a,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}An(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){$r()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,a=t.children,i=t.nodeType,o=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=a)(s);case"child":if((e=a).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(s,["targetRef"]);return c(e,d)}return c(e,s);case"childArray":return(e=a).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(o,null)}}}(d);var wr=$r()?u:h;const xr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Br=e=>Object.keys(xr).reduce(((t,n)=>{const r=xr[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Or=Br("max-width"),Hr=(Br("min-width"),xr);var kr;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(kr||(kr={}));const Er=m.div`
    display: flex;
    flex-direction: column;
`,Ar=e=>"right"===e?"bottom-end":"bottom-start",Mr=({enabled:r,isOpen:a,onOpen:l,onClose:s,onDismiss:c,renderElement:d,renderDropdown:h,customZIndex:f,clickToToggle:g=!1,offset:p=0,alignment:m="left",fitAvailableHeight:y})=>{var b;const v=i(null),z=i(null),{width:j}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,s=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,g=e.observerOptions,p=e.onResize,m=i(n),y=i(null),b=null!=f?f:y,v=i(),D=o({width:void 0,height:void 0}),$=D[0],S=D[1];return wr((function(){if(!$r()){var e=Fr(p,S,d,h);v.current=vr((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,a=n.height;!m.current&&!$r()&&e({width:r,height:a}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,d,h,p,g,b.current]),Mn({ref:b},$)}({targetRef:v,handleHeight:!1}),L={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<Hr.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:T,floatingStyles:R,context:Y}=$({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!a?null==l||l():!e&&a&&(null==s||s(n))},whileElementsMounted:S,placement:Ar(m),middleware:[F(p),w(),x({limiter:B()}),O({apply({availableHeight:e}){z.current&&Object.assign(z.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),L]}),W=(()=>{const[e,t]=o(void 0),n=D();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(kr.Change,e),n.events.emit(kr.Ready),()=>n.events.off(kr.Change,e)}),[n]),e})(),{isMounted:N,styles:_}=H(Y,{initial:{opacity:0},open:{opacity:1},duration:300}),P=k(Y,{enabled:r,toggle:g}),I=E(Y,{enabled:r}),{getReferenceProps:V,getFloatingProps:J}=A([P,I]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,T.setReference(e)}},V(),{children:d()})),N&&t(M,{children:t(C,Object.assign({context:Y,modal:!1,initialFocus:z,returnFocus:!1},{children:t("div",Object.assign({ref:T.setFloating,style:Object.assign(Object.assign({},R),{zIndex:null!==(b=null!=f?f:W)&&void 0!==b?b:50})},J(),{children:t(Er,Object.assign({ref:z,style:Object.assign({},_),inert:_.opacity<1?"":void 0},{children:h({elementWidth:j})}))}))}))})]})},Cr=m.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Or.mobileL} {
        min-width: 17.5rem;
    }
`;var zr={exports:{}};zr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,s=a.parser,c=e.slice(r),d=i.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!s&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var y=l||0,b=s||0,v=c||0,D=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,D+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,D)):new Date(p,m,g,y,b,v,D)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var jr=Y(zr.exports),Lr={exports:{}};Lr.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var Tr=Y(Lr.exports),Rr={exports:{}};Rr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Yr=Y(Rr.exports),Wr={exports:{}};Wr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Nr,_r,Pr,Ir=Y(Wr.exports),Vr={exports:{}},Jr=Y(Vr.exports=(Nr={year:0,month:1,day:2,hour:3,minute:4,second:5},_r={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=_r[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),_r[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,d=Nr[s];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(a-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,l=a||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));N.extend(Tr),N.extend(Ir),N.extend(Yr),N.extend(jr),N.extend(Jr),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=N(t).startOf("week");return Zr(n).map((e=>Ur(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ur(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(N(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+N(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=N(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?N(r):void 0,a?N(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Pr||(Pr={}));const Zr=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ur=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Xr=[1,3,5,7,8,10,12],Gr=[4,6,9,11];var qr,Qr,Kr,ea;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":Xr.includes(i)?Math.min(a,31).toString():Gr.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=N(e,n);return N(t,n).diff(r,"minute")},e.toDayjs=e=>e?N(e):N(),e.addMinutesToTime=(e,t,n="HH:mm")=>N(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>N(e).isSame(N(t),n)}(qr||(qr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!N(e).isBefore(r,"day"))||!(!a||!N(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(N(e).isValid())return e}return""}}(Qr||(Qr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Kr||(Kr={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ea||(ea={}));const ta=m.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,na=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ra=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||nn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${na} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,aa=m(ra)`
    animation-delay: -0.45s;
`,ia=m(ra)`
    animation-delay: -0.3s;
`,oa=m(ra)`
    animation-delay: -0.15s;
`,la=m.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${nn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?on.Button.Danger.Border:nn.Primary};

                    color: ${e.$buttonIsDanger?on.Button.Danger.Primary:nn.Primary};
                `;case"light":return y`
                    background-color: ${nn.Neutral[8]};
                    border: 1px solid ${nn.Neutral[5]};

                    color: ${e.$buttonIsDanger?on.Button.Danger.Primary:nn.Primary};
                `;case"disabled":return y`
                    background-color: ${nn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${nn.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?on.Button.Danger.Primary:nn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?on.Button.Danger.Hover:nn.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?on.Button.Danger.BackgroundColor:nn.Primary};
                    border: 1px solid transparent;

                    ${Or.mobileL} {
                        width: 100%;
                    }

                    color: ${nn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${bn("H5","semibold")}

                    ${Or.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${bn("H4","semibold")}

                    ${Or.mobileS} {
                        height: auto;
                    }
                `}
`,sa=m((({color:n,className:r,size:a=18})=>e(ta,Object.assign({className:r,$size:a,$color:n,"data-testid":"component-loading-spinner"},{children:[t(ra,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(aa,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(ia,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(oa,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?on.Button.Danger.Primary:nn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=nn.Neutral[3](e);break;default:t=nn.Neutral[8](e)}return y`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ca={Default:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=T(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(la,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(sa,Object.assign({},d)),t("span",{children:a})]}))})),Small:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=T(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(la,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(sa,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},da=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
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
                background-color: ${nn.Neutral[7]};
            `}
    }
`,ua=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,l=T(e,["children","focusHighlight","focusOutline","type"]);return t(da,Object.assign({ref:n,$outline:i,$highlight:a,type:o},l,{children:r}))})),ha=y`
    color: ${nn.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,fa=m(j)`
    ${ha}
`,ga=m(L)`
    ${ha}
`,pa=m(p)`
    ${ha}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ma=m.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,ya=m.div`
    display: flex;
    flex: 1;
    position: relative;
`,ba=m.div`
    isolation: isolate;
    width: 100%;
`,va=m.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${nn.Neutral[8]};

    ${e=>{if(!e.$visible)return y`
                display: none;
            `}}
`,Da=m.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,$a=m.div`
    display: flex;
`,Sa=m.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?y`
                display: none;
            `:e.$expanded?y`
                ${pa} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Fa=m.p`
    ${bn("H5","regular")}
`,wa=m.div`
    display: flex;
`,xa=m(ua)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ba=m.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Oa=m(ca.Small)`
    flex: 1;
`,Ha=m.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return y`
                    gap: 0.5rem 2.5rem;
                `;case"input":return y`
                    gap: 0.5rem 1rem;
                `}}}
`,ka=m.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?y`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${nn.Shadow.Accent};
                    border: 1px solid ${nn.Accent.Light[1]};
                }
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return y`
                    background-color: ${nn.Accent.Light[6](e)};
                `;case"selected-month":return y`
                    background-color: ${nn.Accent.Light[5](e)};
                    border: 1px solid ${nn.Primary(e)};
                `}}}
`,Ea=m(Dn.H5)`
    ${e=>{if(e.$disabledDisplay)return y`
                color: ${nn.Neutral[4]};
            `;switch(e.$variant){case"current-month":return y`
                    color: ${nn.Neutral[3](e)};
                `;case"selected-month":return y`
                    ${bn("H5","semibold")}
                    color: ${nn.Primary(e)};
                `}}}
`,Aa=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=f((()=>Pr.generateMonths(N(e))),[e]),g=e=>{const t="start"===n&&a&&e.isAfter(a,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},p=e=>{const t=e.format("MMMM"),n=(r=e,!Pr.isWithinRange(r,s?N(s):void 0,c?N(c):void 0,"month"));var r;const a=i.isSame(e,"month")?"selected-month":N().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||g(e),interactive:!n||d,month:t,variant:a}};return h.length?t(Ha,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,month:i}=p(e);return t(ka,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(e,!r)},{children:t(Ea,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n},{children:i}))}),i)}))})):null},Ma=m.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return y`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return y`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Ca=m.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?y`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${nn.Shadow.Accent};
                    border: 1px solid ${nn.Accent.Light[1]};
                }
            `:e.$disabledDisplay?y`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return y`
                    background: ${nn.Accent.Light[6](e)};
                `;case"selected-year":return y`
                    background: ${nn.Accent.Light[5](e)};
                    border: 1px solid ${nn.Primary(e)};
                `}}};
`,za=m(Dn.H5)`
    ${e=>{if(e.$disabledDisplay)return y`
                color: ${nn.Neutral[4]};
            `;switch(e.$variant){case"current-year":return y`
                    color: ${nn.Neutral[3](e)};
                `;case"selected-year":return y`
                    ${bn("H5","semibold")}
                    color: ${nn.Primary(e)};
                `;case"other-decade":return y`
                    color: ${nn.Neutral[4](e)};
                `}}}
`,ja=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=f((()=>Pr.generateDecadeOfYears(N(e))),[e]),g=e=>{const t="start"===n&&a&&e.isAfter(a,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(a=e,!Pr.isWithinRange(a,s?N(s):void 0,c?N(c):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":N().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||g(e),interactive:!r||d,year:n,variant:o}};return h.length?t(Ma,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,year:i}=p(e);return t(Ca,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(e,!r)},{children:t(za,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},La=a.forwardRef(((r,a)=>{var{children:l,initialCalendarDate:s,type:c,minDate:d,maxDate:h,currentFocus:f,selectedStartDate:p,selectedEndDate:m,selectWithinRange:y,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:D,withButton:$,doneButtonDisabled:S,onDismiss:F,showNavigationHeader:w=!0,getLeftArrowDate:x,getRightArrowDate:B,isLeftArrowDisabled:O,isRightArrowDisabled:H,getMonthHeaderLabel:k,getYearHeaderLabel:E}=r,A=T(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,C]=o(qr.toDayjs(s)),[z,j]=o(qr.toDayjs(s)),[L,R]=o("default"),Y=i(null),W=i(null),_=i();g(a,(()=>({defaultView(){R("default")},resetView(){const e=qr.toDayjs(s);C(e),j(e),R("default")},setCalendarDate(e){const t=qr.toDayjs(e);C(t),j(t)}}))),u((()=>{const e=qr.toDayjs(s);C(e),j(e)}),[s]),u((()=>{X(z)}),[z]);const P=()=>{var e;"month-options"!==L?(R("month-options"),null===(e=_.current)||void 0===e||e.focus()):(R("default"),C(z))},I=()=>{"default"!==L?(R("default"),C(z)):R("year-options")},V=()=>{var e;null===(e=_.current)||void 0===e||e.focus();const t=x?x(M):M.subtract(1,"month");switch(L){case"default":j(t),C(t);break;case"month-options":C((e=>e.subtract(1,"year")));break;case"year-options":C((e=>e.subtract(10,"year")))}},J=()=>{var e;null===(e=_.current)||void 0===e||e.focus();const t=B?B(M):M.add(1,"month");switch(L){case"default":j(t),C(t);break;case"month-options":C((e=>e.add(1,"year")));break;case"year-options":C((e=>e.add(10,"year")))}},Z=e=>{C(e),j(e),$||R("default")},U=()=>{const e=qr.toDayjs(s);C(e),j(e),"default"===L?G("reset"):R("default")},X=e=>{D&&D(e)},G=e=>{F&&F(e)},q=()=>{if(!d||v)return!1;const e=N(d);return"month-options"===L?!Pr.isPreviousYearWithinRange(M,e):"year-options"===L?!Pr.isPreviousDecadeWithinRange(M,e):O?O(M):!Pr.isPreviousMonthWithinRange(M,e)},Q=()=>{if(!h||v)return!1;const e=N(h);return"month-options"===L?!Pr.isNextYearWithinRange(M,e):"year-options"===L?!Pr.isNextDecadeWithinRange(M,e):H?H(M):!Pr.isNextMonthWithinRange(M,e)},K=()=>{if("year-options"===L){const{beginDecade:e,endDecade:t}=Pr.getStartEndDecade(M);return`${e} to ${t}`}return E?E(M):M.format("YYYY")},ee=()=>{const r=k?k(M):M.format("MMM");return e(n,{children:[e(Sa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===L,$visible:"default"===L,id:"month-dropdown",onClick:P},{children:[t(Fa,{children:r}),t(pa,{})]})),e(Sa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==L,id:"year-dropdown",onClick:I},{children:[t(Fa,{children:K()}),t(pa,{})]}))]})},te=()=>{switch(L){case"month-options":return t(Aa,{type:c,calendarDate:M,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:z,isNewSelection:y,onMonthSelect:Z,allowDisabledSelection:v});case"year-options":return t(ja,{type:c,calendarDate:M,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:z,isNewSelection:y,onYearSelect:Z,allowDisabledSelection:v});default:return null}};return e(ma,Object.assign({ref:_,"data-id":"calendar-container","data-testid":"calendar-container"},A,{children:[w&&e(Da,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t($a,{children:ee()}),e(wa,{children:[t(xa,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(fa,{})})),t(xa,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:J},{children:t(ga,{})}))]})]})),t(ya,{children:(()=>{const r="function"==typeof l?l({calendarDate:z,currentView:L}):l;return e(n,b?{children:["default"===L&&r,te()]}:{children:[t(ba,{children:r}),t(va,Object.assign({$visible:"default"!==L},{children:te()}))]})})()}),(()=>{if(!$)return;const n=!!("default"===L)&&S;return e(Ba,{children:[t(Oa,Object.assign({ref:W,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Oa,Object.assign({"data-testid":"done-button",ref:Y,type:"button",onClick:()=>{n||(C(z),"default"===L?G("confirmed"):R("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Ta=m.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ra=m.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Ya=m.div`
    grid-column: 1 / -1;
    display: flex;
`;m.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Wa=m.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return y`
                    left: 0;
                `;case"right":return y`
                    right: 0;
                `}}}
`,Na=m.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;m(Dn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return y`
                ${bn("H5","semibold")};
                color: ${nn.Accent.Light[2]};
            `;if(t)return y`
                color: ${nn.Neutral[4]};
            `;if(n)return y`
                ${bn("H5","semibold")};
                color: ${nn.Primary};
            `;switch(r){case"other-month":return y`
                    color: ${nn.Neutral[4]};
                `;case"today":return y`
                    color: ${nn.Neutral[3]};
                `;case"default":return y`
                    color: ${nn.Neutral[1]};
                `}}}
`,m(Wa)`
    ${e=>{const{$selected:t}=e;if(t)return y`
                border-top: 1px solid ${nn.Accent.Light[4]};
                border-bottom: 1px solid ${nn.Accent.Light[4]};
                background-color: ${nn.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?y`
                border-top: 1px dashed ${nn.Accent.Light[4]};
                border-bottom: 1px dashed ${nn.Accent.Light[4]};
                background-color: ${nn.Accent.Light[6]};
            `:n?y`
                background-color: ${nn.Accent.Light[4]};
            `:void 0}}
`,m(Na)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?y`
                background: ${nn.Accent.Light[5]};
                border: 1px solid ${nn.Primary};
            `:t?y`
                box-shadow: 0px 0px 4px 1px ${nn.Shadow.Accent};
                border: 1px solid ${nn.Accent.Light[1]};
                background-color: ${nn.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?y`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${nn.Shadow.Accent};
                    border: 1px solid ${nn.Accent.Light[1]};
                    background-color: ${nn.Neutral[8]};
                }
            `:n?y`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?y`
                border: 1px solid ${nn.Accent.Light[1]};
                background: ${nn.Accent.Light[4]};

                :hover {
                    background: ${nn.Accent.Light[4]};
                }
            `:t?y`
                color: ${nn.Neutral[4]};
            `:"today"===r?y`
                    background: ${nn.Accent.Light[5]};
                `:void 0}}
`;const _a=e=>{let t=nn.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=nn.Accent.Light[5];break;case"hover-dash":t=nn.Accent.Light[6],n=`1px dashed ${nn.Accent.Light[4](e)}`;break;case"hover-current":t=nn.Neutral[8],n=`1px solid ${nn.Primary(e)}`;break;case"selected":t=nn.Accent.Light[5],n=`1px solid ${nn.Accent.Light[4](e)}`;break;case"selected-outline":t=nn.Accent.Light[5],n=`1px solid ${nn.Primary(e)}`;break;case"overlap":t=nn.Accent.Light[4],n=`1px solid ${nn.Accent.Light[4](e)}`;break;case"overlap-outline":t=nn.Accent.Light[4],n=`1px solid ${nn.Primary(e)}`}return{color:t,border:n}},Pa=m.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ia=m.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=_a(e);return y`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Va=m(Ia)`
    left: 0;
`,Ja=m(Ia)`
    right: 0;
`,Za=m.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${nn.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Ua=m(Za)`
    left: 0;
`,Xa=m(Za)`
    right: 0;
`,Ga=m.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=_a(e);return y`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&y`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,qa=m(Ga)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${nn.Shadow.Accent};
    }
`,Qa=m(Ga)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${nn.Shadow.Accent};
    }
`,Ka=m(Dn.H5)`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?y`
                    ${bn("H5","semibold")};
                    color: ${nn.Accent.Light[2]};
                `:"hidden"===n?y`
                    visibility: hidden;
                `:y`
                color: ${nn.Neutral[4]};
            `;switch(n){case"selected":return y`
                    ${bn("H5","semibold")};
                    color: ${nn.Primary};
                `;case"current":return y`
                    color: ${nn.Neutral[3]};
                `;case"unavailable":return y`
                    color: ${nn.Neutral[4]};
                `;case"hidden":return y`
                    visibility: hidden;
                `;default:return y`
                    color: ${nn.Neutral[1]};
                `}}}
`,ei=({bgLeft:n,bgRight:r,circleLeft:a,circleRight:i,shadow:o,circleShadow:l,labelType:s,disabled:c,interactive:d,date:u,onSelect:h,onHover:f,onHoverEnd:g})=>e(Pa,{children:[t(Ua,{$shadow:n&&o}),t(Va,{$type:n,$shadow:n&&o}),t(qa,{$type:a,$shadow:a&&l}),t(Xa,{$shadow:r&&o}),t(Ja,{$type:r,$shadow:r&&o}),t(Qa,{$type:i,$shadow:i&&l}),t(Ka,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{g&&g(u)}},{children:u.date()}))]}),ti=({date:e,calendarDate:n,startDate:r,endDate:a,currentFocus:i,hoverDate:o,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:f,onHover:g})=>{const p=Pr.isDisabledDay(e,c,l,s),m=!p||d,y=()=>{const e=N(o),t=e.isBefore(a,"day"),n=e.isAfter(r,"day");let l,s,c,d;return"start"===i&&a&&t&&(r&&n?(c=o,d=a):(l=o,s=r||a)),"end"===i&&r&&n&&(a&&t?(c=r,d=o):(l=a||r,s=o)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:d}},b={date:e,calendarDate:n,disabled:p,interactive:m,onSelect:()=>{f(e,!m)},onHover:()=>{g(e.format("YYYY-MM-DD"),!m)}};return t(ei,Object.assign({},b,(()=>{const t={};if(n.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(N().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const n="end"===i&&r&&e.isBefore(r),o="start"===i&&a&&e.isAfter(a);(n||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(r,"day"),o=e.isSame(a,"day");return h&&n.month()!==e.month()?(t.labelType="hidden",t):((r&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&a&&e.isBetween(r,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected"),o||(t.bgRight="selected")),t)})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:a,overlapEnd:i}=y();if(n&&r){if(e.isBetween(n,r,"day","[]")){const a=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const n=e.isSame(a,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};N.extend(Tr);const ni=({calendarDate:n,currentFocus:r,disabledDates:a,selectedStartDate:i,selectedEndDate:l,onSelect:s,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:p})=>{const m=f((()=>Pr.generateDays(n)),[n]),[y,b]=o(""),v=(e,t)=>{t&&!g||s(e)},D=(e,t)=>{t&&!g||(b(e),c(e))},$=()=>{b(""),c("")};return e(Ta,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(Ra,{children:t(Dn.H6,Object.assign({weight:"semibold"},{children:N(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,o)=>t(Ya,Object.assign({onMouseLeave:$},{children:e.map(((e,o)=>t(ti,{date:e,calendarDate:n,startDate:i,endDate:l,hoverDate:y,currentFocus:r,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:g,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:v,onHover:D},`day-${o}`)))}),o)))]}))},ri=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Pr.isDisabledDay(e,l,i,o),f=!h||s,{start:g,end:p}=r?Pr.getFixedRangeStartEnd(qr.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:y}=a?Pr.getFixedRangeStartEnd(qr.toDayjs(a),c):{start:void 0,end:void 0},b=r&&e.isBetween(g,p,"day","[]"),v=a&&e.isBetween(m,y,"day","[]"),D=b&&e.isSame(g,"day")||v&&e.isSame(m,"day"),$=b&&e.isSame(p,"day")||v&&e.isSame(y,"day"),S=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},F={date:e,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{d(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(ei,Object.assign({},F,(()=>{const t={};return b||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return v&&S(t,"hover-dash",n===m,n===y),b&&S(t,"selected",n===g,n===p),b&&v&&S(t,"overlap",D,$),n===g&&(v?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=g&&m<p&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},ai=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:l,minDate:s,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=f((()=>Pr.generateDays(n)),[n]),[g,p]=o(""),m=(e,t)=>{t&&!d||(i(e),e&&!N(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!d||(p(e),l(e))},b=()=>{p(""),l("")};return e(Ta,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(Ra,{children:t(Dn.H6,Object.assign({weight:"semibold"},{children:N(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(Ya,Object.assign({onMouseLeave:b},{children:e.map(((e,i)=>t(ri,{date:e,calendarDate:n,selectedDate:a,hoverDate:g,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:m,onHover:y,numberOfDays:u},`day-${i}`)))}),i)))]}))},ii=m.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${nn.Neutral[8]};

    ${e=>{if("input"===e.$type)return y`
                border: 1px solid ${nn.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,oi=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:d})=>{const u=Pr.isDisabledDay(e,l,i,o),h=!u||s,{start:f,end:g}=Pr.getWeekStartEnd(qr.toDayjs(r)),{start:p,end:m}=Pr.getWeekStartEnd(qr.toDayjs(a)),y=r&&e.isBetween(f,g,"day","[]"),b=a&&e.isBetween(p,m,"day","[]"),v=y&&e.isSame(f)||b&&e.isSame(p),D=y&&e.isSame(g)||b&&e.isSame(m),$={date:e,calendarDate:n,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(ei,Object.assign({},$,(()=>{const t={};return y||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":N().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&b?(t="hover-current",e.shadow=!0,e.circleShadow=v||D):y?t="selected-outline":b&&(t="hover-dash"),t&&(v?e.circleLeft=t:e.bgLeft=t,D?e.circleRight=t:e.bgRight=t),e})()))},li=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:l,minDate:s,maxDate:c,allowDisabledSelection:d})=>{const u=f((()=>Pr.generateDays(n)),[n]),[h,g]=o(""),p=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");i(n),e&&!N(e).isSame(n,"month")&&g("")},m=(e,t)=>{t&&!d||(g(e),l(e))},y=()=>{g(""),l("")};return e(Ta,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,n)=>t(Ra,{children:t(Dn.H6,Object.assign({weight:"semibold"},{children:N(e).format("ddd")}))},`week-day-${n}`))),u.map(((e,i)=>t(Ya,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(oi,{date:e,calendarDate:n,selectedDate:a,hoverDate:h,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:p,onHover:m},`day-${i}`)))}),i)))]}))},si=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:a,onDismiss:o,value:l,endValue:s,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:D=!1},$)=>{const S=i(),F=i(void 0);g($,(()=>({reset(){var e;null===(e=S.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=S.current)||void 0===t||t.setCalendarDate(e)}})));const w=e=>{var t;const n=e.format("YYYY-MM-DD");null===(t=S.current)||void 0===t||t.setCalendarDate(n),B(n)},x=e=>{O(e)},B=e=>{r&&r(e)},O=e=>{a&&a(e)},H=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(ii,Object.assign({$type:m},{children:t(La,Object.assign({type:m,ref:S,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!s;break;case"week":e=!l&&!s}return e})(),onDismiss:o,minDate:h,maxDate:f,selectWithinRange:y,currentFocus:c,selectedStartDate:l,selectedEndDate:s,allowDisabledSelection:p,onCalendarDateChange:e=>{F.current&&F.current.isSame(e,"month")||H(e),F.current=e},initialCalendarDate:b},{children:({calendarDate:n})=>(n=>{switch(u){case"week":return t(li,{calendarDate:n,disabledDates:e,selectedStartDate:l,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:w,onHover:x});case"fixed-range":return t(ai,{calendarDate:n,disabledDates:e,selectedStartDate:l,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:w,onHover:x,numberOfDays:v});default:return t(ni,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:l,selectedEndDate:s,minDate:h,maxDate:f,isNewSelection:y,allowDisabledSelection:p,showActiveMonthDaysOnly:D,onSelect:w,onHover:x})}})(n)}))}))})),ci=a.forwardRef(((e,n)=>{var{width:r}=e,a=T(e,["width"]);return t(Cr,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(si,Object.assign({ref:n},a))}))})),di=m(ua)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${nn.Neutral[5]};
    background-color: ${nn.Neutral[8]};
    :hover {
        background-color: ${nn.Neutral[7]};
    }
    :disabled {
        cursor: not-allowed;
        background-color: ${nn.Neutral[6]};
    }
`,ui=m.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${nn.Neutral[7]};
    border-radius: 0.25rem;
`,hi=m(ca.Default)`
    color: ${e=>e.$enableDateClick?nn.Primary:nn.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0;
    ${e=>e.$enableDateClick?y`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `:y`
            background-color: ${nn.Neutral[7]};
            :hover {
                cursor: default;
            }
        `}
`,fi=n=>{var{selectedDate:r,minDate:a,maxDate:i,loading:l,showDateAsShortForm:s,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=n,f=T(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const g=qr.toDayjs(r),p=qr.toDayjs(r).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),m=qr.isSame(r,N())&&c?"Today":g.format(s?"ddd":"dddd"),[y,b]=o(!1),v=e=>{h&&h(e),b(!y)},D=()=>{b(!1),d(r)},$=()=>{b(!1),u(r)};return t(Mr,{enabled:!l,isOpen:y,renderElement:()=>e(ui,Object.assign({},f,{children:[t(di,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:l||!!a&&(Pr.isDisabledDay(g,void 0,a)||qr.isSame(g,a)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:D},{children:t(fa,{})})),t(hi,Object.assign({onClick:()=>!!h&&!l&&b(!y),$enableDateClick:!!h&&!l,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||l},{children:`${p}, ${m}`})),t(di,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:l||!!i&&(Pr.isDisabledDay(g,void 0,void 0,i)||qr.isSame(g,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:$},{children:t(ga,{})}))]})),renderDropdown:({elementWidth:e})=>t(ci,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:a,maxDate:i,onSelect:v,width:e}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})};export{fi as DateNavigator};
//# sourceMappingURL=index.js.map
