import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as g,useMemo as m,useImperativeHandle as b,useReducer as f}from"react";import{ChevronDownIcon as p}from"@lifesg/react-icons/chevron-down";import y,{css as F,keyframes as v}from"styled-components";import{ExternalIcon as D}from"@lifesg/react-icons/external";import{useFloatingTree as x,useFloating as w,autoUpdate as $,offset as S,flip as B,shift as E,limitShift as C,size as O,useTransitionStyles as A,useClick as k,useDismiss as H,useInteractions as z,FloatingPortal as M,FloatingFocusManager as j}from"@floating-ui/react";import{findDOMNode as Y}from"react-dom";import{ChevronLeftIcon as R}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as L}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as T}from"@lifesg/react-icons";function W(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}};I.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",v={};v[F]=f;var D="$isDayjsObject",x=function(e){return e instanceof B||!(!e||!e[D])},w=function e(r,t,n){var a;if(!r)return F;if("string"==typeof r){var i=r.toLowerCase();v[i]&&(a=i),t&&(v[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;v[s]=r,a=s}return!n&&a&&(F=a),a||!n&&F},$=function(e,r){if(x(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new B(t)},S=y;S.l=w,S.i=x,S.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var B=function(){function f(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(S.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===g)},p.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return $(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<$(e)},p.$g=function(e,r,t){return S.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!S.u(r)||r,c=S.p(e),g=function(e,r){var a=S.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},m=function(e,r){return S.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var F=this.$locale().weekStart||0,v=(b<F?b+7:b)-F;return g(n?p-v:p+(6-v),f);case s:case h:return m(y+"Hours",0);case o:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case a:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=S.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[S.p(e)]()},p.add=function(n,c){var h,g=this;n=Number(n);var m=S.p(c),b=function(e){var r=$(g);return S.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[m]||1,p=this.$d.getTime()+n*f;return S.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return S.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return S.s(r.$y,4,"0");case"M":return s+1;case"MM":return S.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return S.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,o,!0);case"A":return m(i,o,!1);case"m":return String(o);case"mm":return S.s(o,2,"0");case"s":return String(r.$s);case"ss":return S.s(r.$s,2,"0");case"SSS":return S.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,g){var m,b=this,f=S.p(h),p=$(n),y=(p.utcOffset()-this.utcOffset())*r,F=this-p,v=function(){return S.m(b,p)};switch(f){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(F-y)/6048e5;break;case s:m=(F-y)/864e5;break;case o:m=F/t;break;case i:m=F/r;break;case a:m=F/e;break;default:m=F}return g?m:S.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=w(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),E=B.prototype;return $.prototype=E,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,B,$),e.$i=!0),$},$.locale=w,$.isDayjs=x,$.unix=function(e){return $(1e3*e)},$.en=v[F],$.Ls=v,$.p={},$}();var _=P(I.exports);var V=Array.isArray,J="object"==typeof N&&N&&N.Object===Object&&N,Z="object"==typeof self&&self&&self.Object===Object&&self,U=J||Z||Function("return this")(),X=U.Symbol,G=X,K=Object.prototype,q=K.hasOwnProperty,Q=K.toString,ee=G?G.toStringTag:void 0;var re=function(e){var r=q.call(e,ee),t=e[ee];try{e[ee]=void 0;var n=!0}catch(e){}var a=Q.call(e);return n&&(r?e[ee]=t:delete e[ee]),a},te=Object.prototype.toString;var ne=re,ae=function(e){return te.call(e)},ie=X?X.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ie&&ie in Object(e)?ne(e):ae(e)};var se=oe,le=function(e){return null!=e&&"object"==typeof e};var de=function(e){return"symbol"==typeof e||le(e)&&"[object Symbol]"==se(e)},ce=V,ue=de,he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/;var me=function(e,r){if(ce(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ue(e))||(ge.test(e)||!he.test(e)||null!=r&&e in Object(r))};var be=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},fe=oe,pe=be;var ye,Fe=function(e){if(!pe(e))return!1;var r=fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ve=U["__core-js_shared__"],De=(ye=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var xe=function(e){return!!De&&De in e},we=Function.prototype.toString;var $e=Fe,Se=xe,Be=be,Ee=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ce=/^\[object .+?Constructor\]$/,Oe=Function.prototype,Ae=Object.prototype,ke=Oe.toString,He=Ae.hasOwnProperty,ze=RegExp("^"+ke.call(He).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e){return!(!Be(e)||Se(e))&&($e(e)?ze:Ce).test(Ee(e))},je=function(e,r){return null==e?void 0:e[r]};var Ye=function(e,r){var t=je(e,r);return Me(t)?t:void 0},Re=Ye(Object,"create"),Le=Re;var Te=function(){this.__data__=Le?Le(null):{},this.size=0};var We=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ne=Re,Pe=Object.prototype.hasOwnProperty;var Ie=function(e){var r=this.__data__;if(Ne){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Pe.call(r,e)?r[e]:void 0},_e=Re,Ve=Object.prototype.hasOwnProperty;var Je=Re;var Ze=Te,Ue=We,Xe=Ie,Ge=function(e){var r=this.__data__;return _e?void 0!==r[e]:Ve.call(r,e)},Ke=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Je&&void 0===r?"__lodash_hash_undefined__":r,this};function qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}qe.prototype.clear=Ze,qe.prototype.delete=Ue,qe.prototype.get=Xe,qe.prototype.has=Ge,qe.prototype.set=Ke;var Qe=qe;var er=function(){this.__data__=[],this.size=0};var rr=function(e,r){return e===r||e!=e&&r!=r};var tr=function(e,r){for(var t=e.length;t--;)if(rr(e[t][0],r))return t;return-1},nr=tr,ar=Array.prototype.splice;var ir=tr;var or=tr;var sr=tr;var lr=er,dr=function(e){var r=this.__data__,t=nr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ar.call(r,t,1),--this.size,!0)},cr=function(e){var r=this.__data__,t=ir(r,e);return t<0?void 0:r[t][1]},ur=function(e){return or(this.__data__,e)>-1},hr=function(e,r){var t=this.__data__,n=sr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function gr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}gr.prototype.clear=lr,gr.prototype.delete=dr,gr.prototype.get=cr,gr.prototype.has=ur,gr.prototype.set=hr;var mr=gr,br=Ye(U,"Map"),fr=Qe,pr=mr,yr=br;var Fr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var vr=function(e,r){var t=e.__data__;return Fr(r)?t["string"==typeof r?"string":"hash"]:t.map},Dr=vr;var xr=vr;var wr=vr;var $r=vr;var Sr=function(e,r){var t=$r(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Br=function(){this.size=0,this.__data__={hash:new fr,map:new(yr||pr),string:new fr}},Er=function(e){var r=Dr(this,e).delete(e);return this.size-=r?1:0,r},Cr=function(e){return xr(this,e).get(e)},Or=function(e){return wr(this,e).has(e)},Ar=Sr;function kr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}kr.prototype.clear=Br,kr.prototype.delete=Er,kr.prototype.get=Cr,kr.prototype.has=Or,kr.prototype.set=Ar;var Hr=kr;function zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(zr.Cache||Hr),t}zr.Cache=Hr;var Mr=zr;var jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yr=/\\(\\)?/g,Rr=function(e){var r=Mr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(jr,(function(e,t,n,a){r.push(n?a.replace(Yr,"$1"):t||e)})),r}));var Lr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Tr=V,Wr=de,Nr=X?X.prototype:void 0,Pr=Nr?Nr.toString:void 0;var Ir=function e(r){if("string"==typeof r)return r;if(Tr(r))return Lr(r,e)+"";if(Wr(r))return Pr?Pr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},_r=Ir;var Vr=V,Jr=me,Zr=Rr,Ur=function(e){return null==e?"":_r(e)};var Xr=de;var Gr=function(e,r){return Vr(e)?e:Jr(e,r)?[e]:Zr(Ur(e))},Kr=function(e){if("string"==typeof e||Xr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var qr=function(e,r){for(var t=0,n=(r=Gr(r,e)).length;null!=e&&t<n;)e=e[Kr(r[t++])];return t&&t==n?e:void 0};var Qr=P((function(e,r,t){var n=null==e?void 0:qr(e,r);return void 0===n?t:n}));const et=(e,r,t)=>r?Qr(t,r)||Qr(e,r):t||e,rt=(e,r)=>{const t=r||e.defaultValue;return Qr(e.collections,t)};var tt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(tt||(tt={}));const nt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},at=e=>r=>{const t=r.theme,n=rt(nt,t[tt.colorScheme]);return t.options&&t.options.color?et(n,e,t.options.color):et(n,e)},it={Brand:{1:at("Brand.1"),2:at("Brand.2"),3:at("Brand.3"),4:at("Brand.4"),5:at("Brand.5"),6:at("Brand.6")},Primary:at("Primary"),PrimaryDark:at("PrimaryDark"),Secondary:at("Secondary"),Accent:{Light:{1:at("Accent.Light.1"),2:at("Accent.Light.2"),3:at("Accent.Light.3"),4:at("Accent.Light.4"),5:at("Accent.Light.5"),6:at("Accent.Light.6")},Dark:{1:at("Accent.Dark.1"),2:at("Accent.Dark.2"),3:at("Accent.Dark.3")}},Neutral:{1:at("Neutral.1"),2:at("Neutral.2"),3:at("Neutral.3"),4:at("Neutral.4"),5:at("Neutral.5"),6:at("Neutral.6"),7:at("Neutral.7"),8:at("Neutral.8")},Validation:{Green:{Text:at("Validation.Green.Text"),Icon:at("Validation.Green.Icon"),Border:at("Validation.Green.Border"),Background:at("Validation.Green.Background")},Orange:{Text:at("Validation.Orange.Text"),Icon:at("Validation.Orange.Icon"),Border:at("Validation.Orange.Border"),Background:at("Validation.Orange.Background"),Badge:at("Validation.Orange.Badge")},Red:{Text:at("Validation.Red.Text"),Icon:at("Validation.Red.Icon"),Border:at("Validation.Red.Border"),Background:at("Validation.Red.Background")},Blue:{Text:at("Validation.Blue.Text"),Icon:at("Validation.Blue.Icon"),Border:at("Validation.Blue.Border"),Background:at("Validation.Blue.Background")}},Shadow:{Accent:at("Shadow.Accent"),Red:at("Shadow.Red"),Elevation:at("Shadow.Elevation")}},ot={collections:{base:{InputBoxShadow:F`
        inset 0 0 4px 0px ${it.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 4px 0px ${it.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${it.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:F`
        inset 0 0 3px 0px ${it.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 3px 0px ${it.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${it.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},st=e=>r=>{var t;const n=r.theme,a=rt(ot,n[tt.designTokenScheme]);return(null===(t=n.options)||void 0===t?void 0:t.designToken)?et(a,e,n.options.designToken):et(a,e)},lt=st("InputBoxShadow"),dt=st("InputErrorBoxShadow"),ct=(st("ElevationBoxShadow"),st("Table.Header"),st("Table.Cell.Primary"),st("Table.Cell.Secondary"),st("Table.Cell.Selected"),st("Table.Cell.Hover"),st("Button.Danger.BackgroundColor"),st("Button.Danger.Hover"),st("Button.Danger.Primary"),st("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),ut={D1:{fontFamily:ct.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ct.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ct.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ct.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ct.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ct.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ct.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ct.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ct.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ct.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ct.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ct.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ct.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ct.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ht={D1:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ct.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:ct.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:ct.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:ct.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ct.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},gt={collections:{base:ut,oneservice:{D1:{fontFamily:ct.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ct.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ct.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ct.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ct.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ct.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ct.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ct.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ct.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ct.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ct.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ct.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ct.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ct.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:ht},defaultValue:"base"},mt=e=>r=>{const t=r.theme,n=rt(gt,t[tt.textStyleScheme]);return t.options&&t.options.textStyle?et(n,e,t.options.textStyle):et(n,e)},bt={D1:{fontFamily:mt("D1.fontFamily"),fontSize:mt("D1.fontSize"),fontWeight:mt("D1.fontWeight"),lineHeight:mt("D1.lineHeight"),letterSpacing:mt("D1.letterSpacing")},D2:{fontFamily:mt("D2.fontFamily"),fontSize:mt("D2.fontSize"),fontWeight:mt("D2.fontWeight"),lineHeight:mt("D2.lineHeight"),letterSpacing:mt("D2.letterSpacing")},D3:{fontFamily:mt("D3.fontFamily"),fontSize:mt("D3.fontSize"),fontWeight:mt("D3.fontWeight"),lineHeight:mt("D3.lineHeight"),letterSpacing:mt("D3.letterSpacing")},D4:{fontFamily:mt("D4.fontFamily"),fontSize:mt("D4.fontSize"),fontWeight:mt("D4.fontWeight"),lineHeight:mt("D4.lineHeight"),letterSpacing:mt("D4.letterSpacing")},DBody:{fontFamily:mt("DBody.fontFamily"),fontSize:mt("DBody.fontSize"),fontWeight:mt("DBody.fontWeight"),lineHeight:mt("DBody.lineHeight"),letterSpacing:mt("DBody.letterSpacing")},H1:{fontFamily:mt("H1.fontFamily"),fontSize:mt("H1.fontSize"),fontWeight:mt("H1.fontWeight"),lineHeight:mt("H1.lineHeight"),letterSpacing:mt("H1.letterSpacing")},H2:{fontFamily:mt("H2.fontFamily"),fontSize:mt("H2.fontSize"),fontWeight:mt("H2.fontWeight"),lineHeight:mt("H2.lineHeight"),letterSpacing:mt("H2.letterSpacing")},H3:{fontFamily:mt("H3.fontFamily"),fontSize:mt("H3.fontSize"),fontWeight:mt("H3.fontWeight"),lineHeight:mt("H3.lineHeight"),letterSpacing:mt("H3.letterSpacing")},H4:{fontFamily:mt("H4.fontFamily"),fontSize:mt("H4.fontSize"),fontWeight:mt("H4.fontWeight"),lineHeight:mt("H4.lineHeight"),letterSpacing:mt("H4.letterSpacing")},H5:{fontFamily:mt("H5.fontFamily"),fontSize:mt("H5.fontSize"),fontWeight:mt("H5.fontWeight"),lineHeight:mt("H5.lineHeight"),letterSpacing:mt("H5.letterSpacing")},H6:{fontFamily:mt("H6.fontFamily"),fontSize:mt("H6.fontSize"),fontWeight:mt("H6.fontWeight"),lineHeight:mt("H6.lineHeight"),letterSpacing:mt("H6.letterSpacing")},Body:{fontFamily:mt("Body.fontFamily"),fontSize:mt("Body.fontSize"),fontWeight:mt("Body.fontWeight"),lineHeight:mt("Body.lineHeight"),letterSpacing:mt("Body.letterSpacing")},BodySmall:{fontFamily:mt("BodySmall.fontFamily"),fontSize:mt("BodySmall.fontSize"),fontWeight:mt("BodySmall.fontWeight"),lineHeight:mt("BodySmall.lineHeight"),letterSpacing:mt("BodySmall.letterSpacing")},XSmall:{fontFamily:mt("XSmall.fontFamily"),fontSize:mt("XSmall.fontSize"),fontWeight:mt("XSmall.fontWeight"),lineHeight:mt("XSmall.lineHeight"),letterSpacing:mt("XSmall.letterSpacing")}},ft=[ct.OpenSans,ct.PlusJakartaSans],pt=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},yt=(e,r)=>t=>{var n;const a=bt[e].fontFamily(t),i=bt[e].fontWeight(t),o=ft.find((e=>Object.values(e).includes(a)));return o?F`
                font-family: ${pt(o,r)||pt(o,i)||a};
                font-weight: normal !important;
            `:F`
            font-family: ${a};
            font-weight: ${null!==(n=Ft(r)||i)&&void 0!==n?n:"normal"};
        `},Ft=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},vt=e=>{if(e>0)return F`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Dt=(e,r,t=!1)=>n=>{const a=bt[e],i=a.fontSize(n);return F`
            ${yt(e,r)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${F`
                margin-bottom: ${i*(t?1.05:0)}rem;
            `}
        `},xt=(e=!1,r=!1,t=void 0)=>r?F`
            display: block;
            ${vt(t)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${vt(t)}
        `;var wt;!function(e){e.D1=y.h1`
        ${e=>F`
                ${Dt("D1",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>F`
                ${Dt("D2",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>F`
                ${Dt("D3",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>F`
                ${Dt("D4",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>F`
                ${Dt("DBody",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>F`
                ${Dt("H1",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>F`
                ${Dt("H2",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>F`
                ${Dt("H3",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>F`
                ${Dt("H4",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>F`
                ${Dt("H5",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>F`
                ${Dt("H6",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>F`
                ${Dt("Body",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>F`
                ${Dt("BodySmall",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>F`
                ${Dt("XSmall",e.weight,e.paragraph)}
                color: ${it.Neutral[1]};
                ${xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Bt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Bt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wt||(wt={}));const $t=y.a`
    ${e=>F`
            ${Dt(e.textStyle,e.weight)}
            color: ${it.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${it.Secondary};

                svg {
                    color: ${it.Secondary};
                }
            }
        `}
`,St=y(D)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Bt=t=>{var{external:n=!1,children:a}=t,i=W(t,["external","children"]);return e($t,Object.assign({},i,{children:[a,n&&r(St,{})]}))};var Et;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Et||(Et={}));const Ct="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ot=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ot(e.$variant);return F`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const At=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Ot(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${it.Accent.Light[3]};
    }
`,kt=y.button`
    ${At}
    cursor: pointer;
`;y.div`
    ${At}
`;const Ht=v`
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
    border: 1px solid ${it.Neutral[5]};
    border-radius: ${"4px"};
    background: ${it.Neutral[8]};

    :focus-within {
        border: 1px solid ${it.Accent.Light[1]};
        box-shadow: ${lt};
    }

    ${e=>e.expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Ht} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?F`
                background: ${it.Neutral[6](e)};

                ${kt} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${it.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${kt} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?F`
                border: 1px solid ${it.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${it.Validation.Red.Border(e)};
                    box-shadow: ${dt};
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ct};
    margin-left: 1rem;
`,y(p)`
    color: ${it.Neutral[3]};
    ${e=>{let r=bt.Body.fontSize;return"small"===e.$variant&&(r=bt.BodySmall.fontSize),F`
            height: ${r}rem;
            width: ${r}rem;
        `}}
`,y.div`
    height: 1px;
    background: ${it.Neutral[5]};
    margin: 0 0.5rem;
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const zt=y.div`
    ${e=>Dt("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return F`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;y(zt)`
    color: ${it.Neutral[3]};
`;var Mt=function(e,r){return Mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Mt(e,r)};var jt=function(){return jt=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},jt.apply(this,arguments)};var Yt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Rt=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Lt="object"==typeof Yt&&Yt&&Yt.Object===Object&&Yt,Tt="object"==typeof self&&self&&self.Object===Object&&self,Wt=Lt||Tt||Function("return this")(),Nt=Wt,Pt=function(){return Nt.Date.now()},It=/\s/;var _t=function(e){for(var r=e.length;r--&&It.test(e.charAt(r)););return r},Vt=/^\s+/;var Jt=function(e){return e?e.slice(0,_t(e)+1).replace(Vt,""):e},Zt=Wt.Symbol,Ut=Zt,Xt=Object.prototype,Gt=Xt.hasOwnProperty,Kt=Xt.toString,qt=Ut?Ut.toStringTag:void 0;var Qt=function(e){var r=Gt.call(e,qt),t=e[qt];try{e[qt]=void 0;var n=!0}catch(e){}var a=Kt.call(e);return n&&(r?e[qt]=t:delete e[qt]),a},en=Object.prototype.toString;var rn=Qt,tn=function(e){return en.call(e)},nn=Zt?Zt.toStringTag:void 0;var an=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":nn&&nn in Object(e)?rn(e):tn(e)},on=function(e){return null!=e&&"object"==typeof e};var sn=Jt,ln=Rt,dn=function(e){return"symbol"==typeof e||on(e)&&"[object Symbol]"==an(e)},cn=/^[-+]0x[0-9a-f]+$/i,un=/^0b[01]+$/i,hn=/^0o[0-7]+$/i,gn=parseInt;var mn=Rt,bn=Pt,fn=function(e){if("number"==typeof e)return e;if(dn(e))return NaN;if(ln(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ln(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=sn(e);var t=un.test(e);return t||hn.test(e)?gn(e.slice(2),t?2:8):cn.test(e)?NaN:+e},pn=Math.max,yn=Math.min;var Fn=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function b(){var e=bn();if(m(e))return f(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?yn(t,i-(e-d)):t}(e))}function f(e){return s=void 0,h&&n?g(e):(n=a=void 0,o)}function p(){var e=bn(),t=m(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?g(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),g(l)}return void 0===s&&(s=setTimeout(b,r)),o}return r=fn(r)||0,mn(t)&&(c=!!t.leading,i=(u="maxWait"in t)?pn(fn(t.maxWait)||0,r):i,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},p.flush=function(){return void 0===s?o:f(bn())},p},vn=Fn,Dn=Rt;var xn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Dn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),vn(e,r,{leading:n,maxWait:r,trailing:a})},wn=function(e,r,t,n){switch(r){case"debounce":return Fn(e,t,n);case"throttle":return xn(e,t,n);default:return e}},$n=function(e){return"function"==typeof e},Sn=function(){return"undefined"==typeof window},Bn=function(e){return e instanceof Element||e instanceof HTMLDocument},En=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&$n(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Sn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Sn())return null;if(r)return document.querySelector(r);if(n&&Bn(n))return n;if(t.targetRef&&Bn(t.targetRef.current))return t.targetRef.current;var a=Y(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=En(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Sn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return $n(r)?"renderProp":$n(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Sn()||(t.resizeHandler=wn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Mt(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Sn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Cn=Sn()?u:h;function On(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,b=e.onResize,f=i(t),p=i(null),y=null!=g?g:p,F=i(),v=o({width:void 0,height:void 0}),D=v[0],x=v[1];return Cn((function(){if(!Sn()){var e=En(b,x,c,h);F.current=wn((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Sn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(F.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=F.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,b,m,y.current]),jt({ref:y},D)}const An={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},kn=e=>Object.keys(An).reduce(((r,t)=>{const n=An[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),Hn=kn("max-width"),zn=(kn("min-width"),An);var Mn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Mn||(Mn={}));const jn=y.div`
    display: flex;
    flex-direction: column;
`,Yn=e=>"right"===e?"bottom-end":"bottom-start",Rn=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:b=0,alignment:f="left",fitAvailableHeight:p})=>{var y;const F=i(null),v=i(null),{width:D}=On({targetRef:F,handleHeight:!1}),Y={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<zn.mobileL;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:R,floatingStyles:L,context:T}=w({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:$,placement:Yn(f),middleware:[S(b),B(),E({limiter:C()}),O({apply({availableHeight:e}){v.current&&Object.assign(v.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),Y]}),W=(()=>{const[e,r]=o(void 0),t=x();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Mn.Change,e),t.events.emit(Mn.Ready),()=>t.events.off(Mn.Change,e)}),[t]),e})(),{isMounted:N,styles:P}=A(T,{initial:{opacity:0},open:{opacity:1},duration:300}),I=k(T,{enabled:n,toggle:m}),_=H(T,{enabled:n}),{getReferenceProps:V,getFloatingProps:J}=z([I,_]);return e(t,{children:[r("div",Object.assign({ref:e=>{F.current=e,R.setReference(e)}},V(),{children:c()})),N&&r(M,{children:r(j,Object.assign({context:T,modal:!1,initialFocus:v,returnFocus:!1},{children:r("div",Object.assign({ref:R.setFloating,style:Object.assign(Object.assign({},L),{zIndex:null!==(y=null!=g?g:W)&&void 0!==y?y:50})},J(),{children:r(jn,Object.assign({ref:v,style:Object.assign({},P),inert:P.opacity<1?"":void 0},{children:h({elementWidth:D})}))}))}))})]})},Ln=y.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Hn.mobileL} {
        min-width: 17.5rem;
    }
`;var Tn={exports:{}};Tn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],g=c&&c[1];o[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=o||(a||i?1:g.getDate()),b=a||g.getFullYear(),f=0;a&&!i||(f=i>0?i-1:g.getMonth());var p=s||0,y=l||0,F=d||0,v=c||0;return u?new Date(Date.UTC(b,f,m,p,y,F,v+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,F,v)):new Date(b,f,m,p,y,F,v)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Wn=P(Tn.exports),Nn={exports:{}};Nn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Pn=P(Nn.exports),In={exports:{}};In.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var _n=P(In.exports),Vn={exports:{}};Vn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Jn,Zn,Un,Xn=P(Vn.exports),Gn={exports:{}},Kn=P(Gn.exports=(Jn={year:0,month:1,day:2,hour:3,minute:4,second:5},Zn={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Zn[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Zn[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Jn[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));_.extend(Pn),_.extend(Xn),_.extend(_n),_.extend(Wn),_.extend(Kn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=_(r).startOf("week");return qn(t).map((e=>Qn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Qn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(_(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+_(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=_(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?_(n):void 0,a?_(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Un||(Un={}));const qn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Qn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},ea=[1,3,5,7,8,10,12],ra=[4,6,9,11];var ta,na,aa,ia;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":ea.includes(i)?Math.min(a,31).toString():ra.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=_(e,t);return _(r,t).diff(n,"minute")},e.toDayjs=e=>e?_(e):_(),e.addMinutesToTime=(e,r,t="HH:mm")=>_(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>_(e).isSame(_(r),t)}(ta||(ta={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!_(e).isBefore(n,"day"))||!(!a||!_(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(_(e).isValid())return e}return""}}(na||(na={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(aa||(aa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(ia||(ia={}));const oa=e=>{const[r,t]=o(e),n=i(e);return[r,g((e=>{n.current=e,t(e)}),[]),n]},sa=y.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,la=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,da=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${la} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ca=y(da)`
    animation-delay: -0.45s;
`,ua=y(da)`
    animation-delay: -0.3s;
`,ha=y(da)`
    animation-delay: -0.15s;
`,ga=(e,r,t)=>Qr(t,r)||Qr(e,r),ma=(e,r)=>{const t=r||e.defaultValue;return Qr(e.collections,t)},ba={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},fa=e=>r=>{const t=r.theme,n=ma(ba,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?ga(n,e,t.overrides.primitiveColour):n[e]},pa={"primary-10":fa("primary-10"),"primary-20":fa("primary-20"),"primary-30":fa("primary-30"),"primary-40":fa("primary-40"),"primary-50":fa("primary-50"),"primary-60":fa("primary-60"),"primary-70":fa("primary-70"),"primary-80":fa("primary-80"),"primary-90":fa("primary-90"),"primary-95":fa("primary-95"),"primary-100":fa("primary-100"),"secondary-10":fa("secondary-10"),"secondary-20":fa("secondary-20"),"secondary-30":fa("secondary-30"),"secondary-40":fa("secondary-40"),"secondary-50":fa("secondary-50"),"secondary-60":fa("secondary-60"),"secondary-70":fa("secondary-70"),"secondary-80":fa("secondary-80"),"secondary-90":fa("secondary-90"),"secondary-95":fa("secondary-95"),"secondary-100":fa("secondary-100"),"neutral-10":fa("neutral-10"),"neutral-20":fa("neutral-20"),"neutral-30":fa("neutral-30"),"neutral-40":fa("neutral-40"),"neutral-50":fa("neutral-50"),"neutral-60":fa("neutral-60"),"neutral-70":fa("neutral-70"),"neutral-80":fa("neutral-80"),"neutral-90":fa("neutral-90"),"neutral-95":fa("neutral-95"),"neutral-100":fa("neutral-100"),"success-10":fa("success-10"),"success-20":fa("success-20"),"success-30":fa("success-30"),"success-40":fa("success-40"),"success-50":fa("success-50"),"success-60":fa("success-60"),"success-70":fa("success-70"),"success-80":fa("success-80"),"success-90":fa("success-90"),"success-95":fa("success-95"),"success-100":fa("success-100"),"warning-10":fa("warning-10"),"warning-20":fa("warning-20"),"warning-30":fa("warning-30"),"warning-40":fa("warning-40"),"warning-50":fa("warning-50"),"warning-60":fa("warning-60"),"warning-70":fa("warning-70"),"warning-80":fa("warning-80"),"warning-90":fa("warning-90"),"warning-95":fa("warning-95"),"warning-100":fa("warning-100"),"error-10":fa("error-10"),"error-20":fa("error-20"),"error-30":fa("error-30"),"error-40":fa("error-40"),"error-50":fa("error-50"),"error-60":fa("error-60"),"error-70":fa("error-70"),"error-80":fa("error-80"),"error-90":fa("error-90"),"error-95":fa("error-95"),"error-100":fa("error-100"),"info-10":fa("info-10"),"info-20":fa("info-20"),"info-30":fa("info-30"),"info-40":fa("info-40"),"info-50":fa("info-50"),"info-60":fa("info-60"),"info-70":fa("info-70"),"info-80":fa("info-80"),"info-90":fa("info-90"),"info-95":fa("info-95"),"info-100":fa("info-100"),white:fa("white"),black:fa("black")},ya={text:fa("neutral-20"),"text-subtle":fa("neutral-30"),"text-subtler":fa("neutral-50"),"text-subtlest":fa("neutral-60"),"text-primary":fa("primary-50"),"text-hover":fa("primary-40"),"text-selected":fa("primary-50"),"text-selected-hover":fa("primary-40"),"text-disabled":fa("neutral-50"),"text-disabled-subtle":fa("neutral-60"),"text-disabled-subtlest":fa("neutral-80"),"text-selected-disabled":fa("neutral-50"),"text-success":fa("success-40"),"text-warning":fa("warning-40"),"text-error":fa("error-40"),"text-info":fa("info-40"),"text-inverse":fa("white"),icon:fa("neutral-50"),"icon-subtle":fa("neutral-60"),"icon-strongest":fa("neutral-20"),"icon-primary":fa("primary-50"),"icon-primary-subtle":fa("primary-60"),"icon-primary-subtlest":fa("primary-70"),"icon-hover":fa("primary-40"),"icon-selected":fa("primary-50"),"icon-selected-hover":fa("primary-40"),"icon-disabled":fa("neutral-50"),"icon-disabled-subtle":fa("neutral-60"),"icon-selected-disabled":fa("neutral-60"),"icon-success":fa("success-50"),"icon-warning":fa("warning-60"),"icon-error":fa("error-50"),"icon-error-strong":fa("error-40"),"icon-info":fa("info-50"),"icon-inverse":fa("white"),"icon-primary-inverse":"#FEAB10",border:fa("neutral-90"),"border-strong":fa("neutral-70"),"border-stronger":fa("neutral-30"),"border-primary":fa("primary-50"),"border-primary-subtle":fa("primary-60"),"border-hover":fa("primary-90"),"border-hover-strong":fa("primary-60"),"border-selected":fa("primary-50"),"border-selected-subtle":fa("primary-70"),"border-selected-subtlest":fa("primary-90"),"border-selected-hover":fa("primary-40"),"border-focus":fa("primary-60"),"border-focus-strong":fa("primary-50"),"border-disabled":fa("neutral-90"),"border-selected-disabled":fa("neutral-70"),"border-success":fa("success-60"),"border-warning":fa("warning-60"),"border-error":fa("error-60"),"border-error-focus":fa("error-60"),"border-error-strong":fa("error-40"),"border-info":fa("info-60"),bg:fa("white"),"bg-strong":fa("neutral-100"),"bg-stronger":fa("neutral-95"),"bg-strongest":fa("neutral-90"),"bg-hover":fa("primary-95"),"bg-hover-strong":fa("primary-90"),"bg-hover-subtle":fa("primary-100"),"bg-hover-neutral":fa("neutral-95"),"bg-selected":fa("primary-95"),"bg-selected-hover":fa("primary-90"),"bg-selected-strong":fa("primary-90"),"bg-selected-strongest":fa("primary-90"),"bg-disabled":fa("neutral-95"),"bg-selected-disabled":fa("neutral-95"),"bg-success":fa("success-100"),"bg-success-strong":fa("success-50"),"bg-warning":fa("warning-100"),"bg-warning-strong":fa("warning-50"),"bg-info":fa("info-100"),"bg-info-strong":fa("info-50"),"bg-error":fa("error-100"),"bg-error-strong":fa("error-50"),"bg-error-strong-hover":fa("error-30"),"bg-inverse":fa("neutral-20"),"bg-inverse-subtle":fa("neutral-30"),"bg-inverse-subtler":fa("neutral-50"),"bg-inverse-subtlest":fa("neutral-60"),"bg-primary":fa("primary-50"),"bg-primary-subtle":fa("primary-60"),"bg-primary-subtler":fa("primary-80"),"bg-primary-subtlest":fa("primary-100"),"bg-primary-hover":fa("primary-40"),"bg-primary-subtlest-hover":fa("primary-90"),"bg-primary-subtlest-selected":fa("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:fa("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":fa("black"),"focus-ring-inverse":fa("white")},Fa={collections:{lifesg:ya,bookingsg:ya,rbs:ya,mylegacy:ya,ccube:ya},defaultValue:"lifesg"},va=e=>r=>{const t=r.theme,n=ma(Fa,t.colourScheme),a=t.overrides&&t.overrides.semanticColour?ga(n,e,t.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},Da={text:va("text"),"text-subtle":va("text-subtle"),"text-subtler":va("text-subtler"),"text-subtlest":va("text-subtlest"),"text-primary":va("text-primary"),"text-hover":va("text-hover"),"text-selected":va("text-selected"),"text-selected-hover":va("text-selected-hover"),"text-disabled":va("text-disabled"),"text-disabled-subtle":va("text-disabled-subtle"),"text-disabled-subtlest":va("text-disabled-subtlest"),"text-selected-disabled":va("text-selected-disabled"),"text-success":va("text-success"),"text-warning":va("text-warning"),"text-error":va("text-error"),"text-info":va("text-info"),"text-inverse":va("text-inverse"),icon:va("icon"),"icon-subtle":va("icon-subtle"),"icon-strongest":va("icon-strongest"),"icon-primary":va("icon-primary"),"icon-primary-subtle":va("icon-primary-subtle"),"icon-primary-subtlest":va("icon-primary-subtlest"),"icon-hover":va("icon-hover"),"icon-selected":va("icon-selected"),"icon-selected-hover":va("icon-selected-hover"),"icon-disabled":va("icon-disabled"),"icon-disabled-subtle":va("icon-disabled-subtle"),"icon-selected-disabled":va("icon-selected-disabled"),"icon-success":va("icon-success"),"icon-warning":va("icon-warning"),"icon-error":va("icon-error"),"icon-error-strong":va("icon-error-strong"),"icon-info":va("icon-info"),"icon-inverse":va("icon-inverse"),"icon-primary-inverse":va("icon-primary-inverse"),border:va("border"),"border-strong":va("border-strong"),"border-stronger":va("border-stronger"),"border-primary":va("border-primary"),"border-primary-subtle":va("border-primary-subtle"),"border-hover":va("border-hover"),"border-hover-strong":va("border-hover-strong"),"border-selected":va("border-selected"),"border-selected-subtle":va("border-selected-subtle"),"border-selected-subtlest":va("border-selected-subtlest"),"border-selected-hover":va("border-selected-hover"),"border-focus":va("border-focus"),"border-focus-strong":va("border-focus-strong"),"border-disabled":va("border-disabled"),"border-selected-disabled":va("border-selected-disabled"),"border-success":va("border-success"),"border-warning":va("border-warning"),"border-error":va("border-error"),"border-error-focus":va("border-error-focus"),"border-error-strong":va("border-error-strong"),"border-info":va("border-info"),bg:va("bg"),"bg-strong":va("bg-strong"),"bg-stronger":va("bg-stronger"),"bg-strongest":va("bg-strongest"),"bg-hover":va("bg-hover"),"bg-hover-strong":va("bg-hover-strong"),"bg-hover-subtle":va("bg-hover-subtle"),"bg-hover-neutral":va("bg-hover-neutral"),"bg-selected":va("bg-selected"),"bg-selected-hover":va("bg-selected-hover"),"bg-selected-strong":va("bg-selected-strong"),"bg-selected-strongest":va("bg-selected-strongest"),"bg-disabled":va("bg-disabled"),"bg-selected-disabled":va("bg-selected-disabled"),"bg-success":va("bg-success"),"bg-success-strong":va("bg-success-strong"),"bg-warning":va("bg-warning"),"bg-warning-strong":va("bg-warning-strong"),"bg-info":va("bg-info"),"bg-info-strong":va("bg-info-strong"),"bg-error":va("bg-error"),"bg-error-strong":va("bg-error-strong"),"bg-error-strong-hover":va("bg-error-strong-hover"),"bg-inverse":va("bg-inverse"),"bg-inverse-subtle":va("bg-inverse-subtle"),"bg-inverse-subtler":va("bg-inverse-subtler"),"bg-inverse-subtlest":va("bg-inverse-subtlest"),"bg-primary":va("bg-primary"),"bg-primary-subtle":va("bg-primary-subtle"),"bg-primary-subtler":va("bg-primary-subtler"),"bg-primary-subtlest":va("bg-primary-subtlest"),"bg-primary-hover":va("bg-primary-hover"),"bg-primary-subtlest-hover":va("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":va("bg-primary-subtlest-selected"),"bg-available":va("bg-available"),"overlay-strong":va("overlay-strong"),"overlay-subtle":va("overlay-subtle"),hyperlink:va("hyperlink"),"hyperlink-inverse":va("hyperlink-inverse"),"focus-ring":va("focus-ring"),"focus-ring-inverse":va("focus-ring-inverse")},xa={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},wa=e=>r=>{var t;const n=r.theme,a=ma(xa,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ga(a,e,n.overrides.breakpoint):a[e],i},$a={"xxs-min":wa("xxs-min"),"xxs-max":wa("xxs-max"),"xs-min":wa("xs-min"),"xs-max":wa("xs-max"),"sm-min":wa("sm-min"),"sm-max":wa("sm-max"),"md-min":wa("md-min"),"md-max":wa("md-max"),"lg-min":wa("lg-min"),"lg-max":wa("lg-max"),"xl-min":wa("xl-min"),"xl-max":wa("xl-max"),"xxl-min":wa("xxl-min"),"xxs-column":wa("xxs-column"),"xs-column":wa("xs-column"),"sm-column":wa("sm-column"),"md-column":wa("md-column"),"lg-column":wa("lg-column"),"xl-column":wa("xl-column"),"xxl-column":wa("xxl-column"),"xxs-gutter":wa("xxs-gutter"),"xs-gutter":wa("xs-gutter"),"sm-gutter":wa("sm-gutter"),"md-gutter":wa("md-gutter"),"lg-gutter":wa("lg-gutter"),"xl-gutter":wa("xl-gutter"),"xxl-gutter":wa("xxl-gutter"),"xxs-margin":wa("xxs-margin"),"xs-margin":wa("xs-margin"),"sm-margin":wa("sm-margin"),"md-margin":wa("md-margin"),"lg-margin":wa("lg-margin"),"xl-margin":wa("xl-margin"),"xxl-margin":wa("xxl-margin")},Sa=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=$a["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ba={MaxWidth:Sa("max-width"),MinWidth:Sa("min-width")},Ea={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Ca={collections:{lifesg:Ea,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ea,mylegacy:Ea,ccube:Ea},defaultValue:"lifesg"},Oa=e=>r=>{const t=r.theme,n=ma(Ca,t.fontScheme);return t.overrides&&t.overrides.fontSpec?ga(n,e,t.overrides.fontSpec):n[e]},Aa=(e,r,t,n)=>F`
    font-family: ${Oa("font-family")};
    font-size: ${Oa(e)};
    font-weight: ${Oa(r)};
    line-height: ${Oa(t)};
    letter-spacing: ${Oa(n)};
`,ka={"header-xxl-light":Aa("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Aa("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Aa("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Aa("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Aa("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Aa("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Aa("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Aa("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Aa("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Aa("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Aa("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Aa("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Aa("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Aa("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Aa("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Aa("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Aa("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Aa("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Aa("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Aa("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Aa("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Aa("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Aa("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Aa("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Aa("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Aa("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Aa("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Aa("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Aa("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Aa("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Aa("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Aa("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Aa("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Aa("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Aa("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Aa("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Aa("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Aa("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Aa("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Aa("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Aa("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Aa("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Ha={collections:{lifesg:ka,bookingsg:ka,rbs:ka,mylegacy:ka,ccube:ka},defaultValue:"lifesg"},za=e=>r=>{const t=r.theme,n=ma(Ha,t.fontScheme),a=t.overrides&&t.overrides.font?ga(n,e,t.overrides.font):n[e];return"function"==typeof a?a(r):a},Ma={"header-xxl-light":za("header-xxl-light"),"header-xxl-regular":za("header-xxl-regular"),"header-xxl-semibold":za("header-xxl-semibold"),"header-xxl-bold":za("header-xxl-bold"),"header-xl-light":za("header-xl-light"),"header-xl-regular":za("header-xl-regular"),"header-xl-semibold":za("header-xl-semibold"),"header-xl-bold":za("header-xl-bold"),"header-lg-light":za("header-lg-light"),"header-lg-regular":za("header-lg-regular"),"header-lg-semibold":za("header-lg-semibold"),"header-lg-bold":za("header-lg-bold"),"header-md-light":za("header-md-light"),"header-md-regular":za("header-md-regular"),"header-md-semibold":za("header-md-semibold"),"header-md-bold":za("header-md-bold"),"header-sm-light":za("header-sm-light"),"header-sm-regular":za("header-sm-regular"),"header-sm-semibold":za("header-sm-semibold"),"header-sm-bold":za("header-sm-bold"),"header-xs-light":za("header-xs-light"),"header-xs-regular":za("header-xs-regular"),"header-xs-semibold":za("header-xs-semibold"),"header-xs-bold":za("header-xs-bold"),"body-baseline-light":za("body-baseline-light"),"body-baseline-regular":za("body-baseline-regular"),"body-baseline-semibold":za("body-baseline-semibold"),"body-baseline-bold":za("body-baseline-bold"),"body-md-light":za("body-md-light"),"body-md-regular":za("body-md-regular"),"body-md-semibold":za("body-md-semibold"),"body-md-bold":za("body-md-bold"),"body-sm-light":za("body-sm-light"),"body-sm-regular":za("body-sm-regular"),"body-sm-semibold":za("body-sm-semibold"),"body-sm-bold":za("body-sm-bold"),"body-xs-light":za("body-xs-light"),"body-xs-regular":za("body-xs-regular"),"body-xs-semibold":za("body-xs-semibold"),"body-xs-bold":za("body-xs-bold"),"formlabel-baseline-semibold":za("formlabel-baseline-semibold"),"formlabel-lg-semibold":za("formlabel-lg-semibold")},ja=Object.assign(Object.assign({},Da),{Primitive:pa}),Ya=Ma,Ra=Ba,La=y.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${ja.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?ja["border-error-strong"]:ja["border-primary"]};

                    color: ${e.$buttonIsDanger?ja["text-error"]:ja["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ja["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${ja.bg};
                    border: 1px solid ${ja.border};

                    color: ${e.$buttonIsDanger?ja["text-error"]:ja["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ja["bg-hover-neutral"]};
                    }
                `;case"link":return F`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?ja["text-error"]:ja["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${ja["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${ja["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ja["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?ja["bg-error-strong"]:ja["bg-primary"]};
                    border: 1px solid transparent;

                    ${Ra.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${ja["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?ja["bg-error-strong-hover"]:ja["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Ya["body-md-semibold"]}

                    ${Ra.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Ya["header-md-semibold"]}

                    ${Ra.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Ya["header-xs-semibold"]}

                    ${Ra.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ta=y((({color:t,className:n,size:a})=>e(sa,Object.assign({className:n,$size:a,$color:t},{children:[r(da,{id:"inner1"}),r(ca,{id:"inner2"}),r(ua,{id:"inner3"}),r(ha,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Wa={Default:a.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=W(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(La,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Ta,{}),r("span",{children:a})]}))})),Small:a.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=W(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(La,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Ta,{}),r("span",{children:a})]}))})),Large:a.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=W(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(La,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Ta,{}),r("span",{children:a})]}))}))},Na=y.button`
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

        ${({$highlight:e})=>e&&F`
                background-color: ${it.Neutral[7]};
            `}
    }
`,Pa=a.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=W(e,["children","focusHighlight","focusOutline","type"]);return r(Na,Object.assign({ref:t,$outline:i,$highlight:a,type:o},s,{children:n}))})),Ia=F`
    color: ${it.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,_a=y(R)`
    ${Ia}
`,Va=y(L)`
    ${Ia}
`,Ja=y(p)`
    ${Ia}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Za=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ua=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,Xa=y.div`
    isolation: isolate;
    width: 100%;
`,Ga=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${it.Neutral[8]};

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Ka=y.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,qa=y.div`
    display: flex;
`,Qa=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${Ja} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ei=y.p`
    ${Dt("H5","regular")}
`,ri=y.div`
    display: flex;
`,ti=y(Pa)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ni=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,ai=y(Wa.Small)`
    flex: 1;
`,ii=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return F`
                    gap: 0.5rem 2.5rem;
                `;case"input":return F`
                    gap: 0.5rem 1rem;
                `}}}
`,oi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?F`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${it.Shadow.Accent};
                    border: 1px solid ${it.Accent.Light[1]};
                }
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return F`
                    background-color: ${it.Accent.Light[6](e)};
                `;case"selected-month":return F`
                    background-color: ${it.Accent.Light[5](e)};
                    border: 1px solid ${it.Primary(e)};
                `}}}
`,si=y(wt.H5)`
    ${e=>{if(e.$disabledDisplay)return F`
                color: ${it.Neutral[4]};
            `;switch(e.$variant){case"current-month":return F`
                    color: ${it.Neutral[3](e)};
                `;case"selected-month":return F`
                    ${Dt("H5","semibold")}
                    color: ${it.Primary(e)};
                `}}}
`,li=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const h=m((()=>Un.generateMonths(_(e))),[e]),g=e=>{const r="start"===t&&a&&e.isAfter(a,"month")&&s,i="end"===t&&n&&e.isBefore(n,"month")&&s;return r||i},b=e=>{const r=e.format("MMMM"),t=(n=e,!Un.isWithinRange(n,l?_(l):void 0,d?_(d):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":_().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||g(e),interactive:!t||c,month:r,variant:a}};return h.length?r(ii,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=b(e);return r(oi,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:r(si,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t},{children:i}))}),i)}))})):null},di=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return F`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return F`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,ci=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?F`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${it.Shadow.Accent};
                    border: 1px solid ${it.Accent.Light[1]};
                }
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return F`
                    background: ${it.Accent.Light[6](e)};
                `;case"selected-year":return F`
                    background: ${it.Accent.Light[5](e)};
                    border: 1px solid ${it.Primary(e)};
                `}}};
`,ui=y(wt.H5)`
    ${e=>{if(e.$disabledDisplay)return F`
                color: ${it.Neutral[4]};
            `;switch(e.$variant){case"current-year":return F`
                    color: ${it.Neutral[3](e)};
                `;case"selected-year":return F`
                    ${Dt("H5","semibold")}
                    color: ${it.Primary(e)};
                `;case"other-decade":return F`
                    color: ${it.Neutral[4](e)};
                `}}}
`,hi=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u})=>{const h=m((()=>Un.generateDecadeOfYears(_(e))),[e]),g=e=>{const r="start"===t&&a&&e.isAfter(a,"year")&&s,i="end"===t&&n&&e.isBefore(n,"year")&&s;return r||i},b=e=>{const r=[0,11].includes(h.indexOf(e)),t=e.year(),n=(a=e,!Un.isWithinRange(a,l?_(l):void 0,d?_(d):void 0,"year"));var a;const o=r?"other-decade":i.isSame(e,"year")?"selected-year":_().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||c,year:t,variant:o}};return h.length?r(di,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=b(e);return r(ci,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:r(ui,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t,$interactive:n},{children:i}))}),i)}))})):null},gi=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,type:d,minDate:c,maxDate:h,currentFocus:g,selectedStartDate:m,selectedEndDate:f,selectWithinRange:p,dynamicHeight:y=!1,allowDisabledSelection:F,onCalendarDateChange:v,withButton:D,doneButtonDisabled:x,onDismiss:w,showNavigationHeader:$=!0,getLeftArrowDate:S,getRightArrowDate:B,isLeftArrowDisabled:E,isRightArrowDisabled:C,getMonthHeaderLabel:O,getYearHeaderLabel:A}=n,k=W(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[H,z]=o(ta.toDayjs(l)),[M,j]=o(ta.toDayjs(l)),[Y,R]=o("default"),L=i(null),T=i(null),N=i();b(a,(()=>({defaultView(){R("default")},resetView(){const e=ta.toDayjs(l);z(e),j(e),R("default")},setCalendarDate(e){const r=ta.toDayjs(e);z(r),j(r)}}))),u((()=>{const e=ta.toDayjs(l);z(e),j(e)}),[l]),u((()=>{X(M)}),[M]);const P=()=>{"month-options"!==Y?(R("month-options"),N.current.focus()):(R("default"),z(M))},I=()=>{"default"!==Y?(R("default"),z(M)):R("year-options")},V=()=>{N.current.focus();const e=S?S(H):H.subtract(1,"month");switch(Y){case"default":j(e),z(e);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},J=()=>{N.current.focus();const e=B?B(H):H.add(1,"month");switch(Y){case"default":j(e),z(e);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},Z=e=>{z(e),j(e),D||R("default")},U=()=>{const e=ta.toDayjs(l);z(e),j(e),"default"===Y?G("reset"):R("default")},X=e=>{v&&v(e)},G=e=>{w&&w(e)},K=()=>{if(!c||F)return!1;const e=_(c);return"month-options"===Y?!Un.isPreviousYearWithinRange(H,e):"year-options"===Y?!Un.isPreviousDecadeWithinRange(H,e):E?E(H):!Un.isPreviousMonthWithinRange(H,e)},q=()=>{if(!h||F)return!1;const e=_(h);return"month-options"===Y?!Un.isNextYearWithinRange(H,e):"year-options"===Y?!Un.isNextDecadeWithinRange(H,e):C?C(H):!Un.isNextMonthWithinRange(H,e)},Q=()=>{if("year-options"===Y){const{beginDecade:e,endDecade:r}=Un.getStartEndDecade(H);return`${e} to ${r}`}return A?A(H):H.format("YYYY")},ee=()=>{const n=O?O(H):H.format("MMM");return e(t,{children:[e(Qa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===Y,$visible:"default"===Y,id:"month-dropdown",onClick:P},{children:[r(ei,{children:n}),r(Ja,{})]})),e(Qa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==Y,id:"year-dropdown",onClick:I},{children:[r(ei,{children:Q()}),r(Ja,{})]}))]})},re=()=>{switch(Y){case"month-options":return r(li,{type:d,calendarDate:H,currentFocus:g,minDate:c,maxDate:h,selectedStartDate:m,selectedEndDate:f,viewCalendarDate:M,isNewSelection:p,onMonthSelect:Z,allowDisabledSelection:F});case"year-options":return r(hi,{type:d,calendarDate:H,currentFocus:g,minDate:c,maxDate:h,selectedStartDate:m,selectedEndDate:f,viewCalendarDate:M,isNewSelection:p,onYearSelect:Z,allowDisabledSelection:F});default:return null}};return e(Za,Object.assign({ref:N,"data-id":"calendar-container","data-testid":"calendar-container"},k,{children:[$&&e(Ka,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r(qa,{children:ee()}),e(ri,{children:[r(ti,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:r(_a,{})})),r(ti,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:J},{children:r(Va,{})}))]})]})),r(Ua,{children:(()=>{const n="function"==typeof s?s({calendarDate:M,currentView:Y}):s;return e(t,y?{children:["default"===Y&&n,re()]}:{children:[r(Xa,{children:n}),r(Ga,Object.assign({$visible:"default"!==Y},{children:re()}))]})})()}),(()=>{if(!D)return;const t=!!("default"===Y)&&x;return e(ni,{children:[r(ai,Object.assign({ref:T,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),r(ai,Object.assign({"data-testid":"done-button",ref:L,type:"button",onClick:()=>{t||(z(M),"default"===Y?G("confirmed"):R("default"))},disabled:t},{children:"Done"}))]})})()]}))})),mi=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,bi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,fi=y.div`
    grid-column: 1 / -1;
    display: flex;
`;y.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const pi=y.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return F`
                    left: 0;
                `;case"right":return F`
                    right: 0;
                `}}}
`,yi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;y(wt.H5)`
    ${e=>{const{$disabledDisplay:r,$selected:t,$variant:n}=e;if(r&&t)return F`
                ${Dt("H5","semibold")};
                color: ${it.Accent.Light[2]};
            `;if(r)return F`
                color: ${it.Neutral[4]};
            `;if(t)return F`
                ${Dt("H5","semibold")};
                color: ${it.Primary};
            `;switch(n){case"other-month":return F`
                    color: ${it.Neutral[4]};
                `;case"today":return F`
                    color: ${it.Neutral[3]};
                `;case"default":return F`
                    color: ${it.Neutral[1]};
                `}}}
`,y(pi)`
    ${e=>{const{$selected:r}=e;if(r)return F`
                border-top: 1px solid ${it.Accent.Light[4]};
                border-bottom: 1px solid ${it.Accent.Light[4]};
                background-color: ${it.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:r,$overlap:t}=e;return r?F`
                border-top: 1px dashed ${it.Accent.Light[4]};
                border-bottom: 1px dashed ${it.Accent.Light[4]};
                background-color: ${it.Accent.Light[6]};
            `:t?F`
                background-color: ${it.Accent.Light[4]};
            `:void 0}}
`,y(yi)`
    ${e=>{const{$hovered:r,$selected:t}=e;return t?F`
                background: ${it.Accent.Light[5]};
                border: 1px solid ${it.Primary};
            `:r?F`
                box-shadow: 0px 0px 4px 1px ${it.Shadow.Accent};
                border: 1px solid ${it.Accent.Light[1]};
                background-color: ${it.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:r,$disabledDisplay:t}=e;return r?F`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${it.Shadow.Accent};
                    border: 1px solid ${it.Accent.Light[1]};
                    background-color: ${it.Neutral[8]};
                }
            `:t?F`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:r,$overlap:t,$variant:n}=e;return t?F`
                border: 1px solid ${it.Accent.Light[1]};
                background: ${it.Accent.Light[4]};

                :hover {
                    background: ${it.Accent.Light[4]};
                }
            `:r?F`
                color: ${it.Neutral[4]};
            `:"today"===n?F`
                    background: ${it.Accent.Light[5]};
                `:void 0}}
`;const Fi=e=>{let r=it.Neutral[8],t="1px solid transparent";switch(e.$type){case"current":r=it.Accent.Light[5];break;case"hover-dash":r=it.Accent.Light[6],t=`1px dashed ${it.Accent.Light[4](e)}`;break;case"hover-current":r=it.Neutral[8],t=`1px solid ${it.Primary(e)}`;break;case"selected":r=it.Accent.Light[5],t=`1px solid ${it.Accent.Light[4](e)}`;break;case"selected-outline":r=it.Accent.Light[5],t=`1px solid ${it.Primary(e)}`;break;case"overlap":r=it.Accent.Light[4],t=`1px solid ${it.Accent.Light[4](e)}`;break;case"overlap-outline":r=it.Accent.Light[4],t=`1px solid ${it.Primary(e)}`}return{color:r,border:t}},vi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Di=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:r,border:t}=Fi(e);return F`
            background-color: ${r};
            background-clip: content-box;
            border-top: ${t};
            border-bottom: ${t};
        `}}
`,xi=y(Di)`
    left: 0;
`,wi=y(Di)`
    right: 0;
`,$i=y.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${it.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Si=y($i)`
    left: 0;
`,Bi=y($i)`
    right: 0;
`,Ei=y.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:r,border:t}=Fi(e);return F`
                background-color: ${r};
                background-clip: content-box;
                border: ${t};
            `}}}

    ${e=>e.$shadow&&F`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Ci=y(Ei)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${it.Shadow.Accent};
    }
`,Oi=y(Ei)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${it.Shadow.Accent};
    }
`,Ai=y(wt.H5)`
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

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"selected"===t?F`
                    ${Dt("H5","semibold")};
                    color: ${it.Accent.Light[2]};
                `:F`
                color: ${it.Neutral[4]};
            `;switch(t){case"selected":return F`
                    ${Dt("H5","semibold")};
                    color: ${it.Primary};
                `;case"current":return F`
                    color: ${it.Neutral[3]};
                `;case"unavailable":return F`
                    color: ${it.Neutral[4]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${it.Neutral[1]};
                `}}}
`,ki=({bgLeft:t,bgRight:n,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:l,disabled:d,interactive:c,date:u,onSelect:h,onHover:g,onHoverEnd:m})=>e(vi,{children:[r(Si,{$shadow:t&&o}),r(xi,{$type:t,$shadow:t&&o}),r(Ci,{$type:a,$shadow:a&&s}),r(Bi,{$shadow:n&&o}),r(wi,{$type:n,$shadow:n&&o}),r(Oi,{$type:i,$shadow:i&&s}),r(Ai,Object.assign({weight:"regular",$type:l,$disabled:d,$interactive:c,onClick:()=>{h(u)},onMouseEnter:()=>{g(u)},onMouseLeave:()=>{m&&m(u)}},{children:u.date()}))]}),Hi=({date:e,calendarDate:t,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:g,onHover:m})=>{const b=Un.isDisabledDay(e,d,s,l),f=!b||c,p=()=>{const e=_(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},y={date:e,calendarDate:t,disabled:b,interactive:f,onSelect:()=>{g(e,!f)},onHover:()=>{m(e.format("YYYY-MM-DD"),!f)}};return r(ki,Object.assign({},y,(()=>{const r={};if(t.month()!==e.month())r.labelType=h?"hidden":"unavailable";else if(_().isSame(e,"day")&&!b)r.labelType="current",r.circleLeft="current",r.circleRight="current";else if(u){const t="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(t||o)&&(r.labelType="unavailable")}return r})(),(()=>{const r={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&t.month()!==e.month()?(r.labelType="hidden",r):((n&&i||a&&o)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(r.labelType="selected",i||(r.bgLeft="selected"),o||(r.bgRight="selected")),r)})(),(()=>{if(!o)return;const r={};e.isSame(o,"day")&&(r.circleShadow=!0,r.circleLeft="hover-current",r.circleRight="hover-current");const{hoverStart:t,hoverEnd:n,overlapStart:a,overlapEnd:i}=p();if(t&&n){if(e.isBetween(t,n,"day","[]")){const a=e.isSame(t,"day"),i=e.isSame(n,"day");r.labelType="selected",a||(r.bgLeft="hover-dash"),i||(r.bgRight="hover-dash")}return r}if(a&&i){if(e.isBetween(a,i,"day","[]")){const t=e.isSame(a,"day"),n=e.isSame(i,"day");r.labelType="selected",(t||n)&&(r.circleShadow=!0,r.circleLeft="overlap-outline",r.circleRight="overlap-outline"),t||(r.bgLeft="overlap"),n||(r.bgRight="overlap")}return r}return r})()))};_.extend(Pn);const zi=({calendarDate:t,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:b})=>{const f=m((()=>Un.generateDays(t)),[t]),[p,y]=o(""),F=(e,r)=>{r&&!g||l(e)},v=(e,r)=>{r&&!g||(y(e),d(e))},D=()=>{y(""),d("")};return e(mi,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,t)=>r(bi,{children:r(wt.H6,Object.assign({weight:"semibold"},{children:_(e).format("ddd")}))},`week-day-${t}`))),f.map(((e,o)=>r(fi,Object.assign({onMouseLeave:D},{children:e.map(((e,o)=>r(Hi,{date:e,calendarDate:t,startDate:i,endDate:s,hoverDate:p,currentFocus:n,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:g,isNewSelection:c,showActiveMonthDaysOnly:b,onSelect:F,onHover:v},`day-${o}`)))}),o)))]}))},Mi=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=Un.isDisabledDay(e,s,i,o),g=!h||l,{start:m,end:b}=n?Un.getFixedRangeStartEnd(ta.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:p}=a?Un.getFixedRangeStartEnd(ta.toDayjs(a),d):{start:void 0,end:void 0},y=n&&e.isBetween(m,b,"day","[]"),F=a&&e.isBetween(f,p,"day","[]"),v=y&&e.isSame(m,"day")||F&&e.isSame(f,"day"),D=y&&e.isSame(b,"day")||F&&e.isSame(p,"day"),x=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},w={date:e,calendarDate:t,disabled:h,interactive:g,onSelect:()=>{c(e,!g)},onHover:()=>{u(e.format("YYYY-MM-DD"),!g)}};return r(ki,Object.assign({},w,(()=>{const r={};return y||F?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":_().isSame(e,"day")&&!h&&(r.labelType="current",r.circleLeft="current",r.circleRight="current"),r})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return F&&x(r,"hover-dash",t===f,t===p),y&&x(r,"selected",t===m,t===b),y&&F&&x(r,"overlap",v,D),t===m&&(F?(r.circleLeft="overlap-outline",r.circleRight="overlap-outline"):(r.circleRight="selected-outline",r.circleLeft="selected-outline")),t===f&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0,f>=m&&f<b&&(r.circleLeft="overlap-outline",r.circleRight="overlap-outline")),r})()))},ji=({calendarDate:t,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const h=m((()=>Un.generateDays(t)),[t]),[g,b]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!_(e).isSame(e,"month")&&b(""))},p=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(mi,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,t)=>r(bi,{children:r(wt.H6,Object.assign({weight:"semibold"},{children:_(e).format("ddd")}))},`week-day-${t}`))),h.map(((e,i)=>r(fi,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>r(Mi,{date:e,calendarDate:t,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:p,numberOfDays:u},`day-${i}`)))}),i)))]}))},Yi=y.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${it.Neutral[8]};

    ${e=>{if("input"===e.$type)return F`
                border: 1px solid ${it.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Ri=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Un.isDisabledDay(e,s,i,o),h=!u||l,{start:g,end:m}=Un.getWeekStartEnd(ta.toDayjs(n)),{start:b,end:f}=Un.getWeekStartEnd(ta.toDayjs(a)),p=n&&e.isBetween(g,m,"day","[]"),y=a&&e.isBetween(b,f,"day","[]"),F=p&&e.isSame(g)||y&&e.isSame(b),v=p&&e.isSame(m)||y&&e.isSame(f),D={date:e,calendarDate:t,disabled:u,interactive:h,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return r(ki,Object.assign({},D,(()=>{const r={};return p||y?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":_().isSame(e,"day")&&!u&&(r.labelType="current",r.circleLeft="current",r.circleRight="current"),r})(),(()=>{const e={};let r;return p&&y?(r="hover-current",e.shadow=!0,e.circleShadow=F||v):p?r="selected-outline":y&&(r="hover-dash"),r&&(F?e.circleLeft=r:e.bgLeft=r,v?e.circleRight=r:e.bgRight=r),e})()))},Li=({calendarDate:t,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=m((()=>Un.generateDays(t)),[t]),[h,g]=o(""),b=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!_(e).isSame(t,"month")&&g("")},f=(e,r)=>{r&&!c||(g(e),s(e))},p=()=>{g(""),s("")};return e(mi,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,t)=>r(bi,{children:r(wt.H6,Object.assign({weight:"semibold"},{children:_(e).format("ddd")}))},`week-day-${t}`))),u.map(((e,i)=>r(fi,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>r(Ri,{date:e,calendarDate:t,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:b,onHover:f},`day-${i}`)))}),i)))]}))},Ti=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:g,allowDisabledSelection:m,type:f="standalone",selectWithinRange:p=!0,initialCalendarDate:y,numberOfDays:F,showActiveMonthDaysOnly:v=!1},D)=>{const x=i(),w=i(void 0);b(D,(()=>({reset(){x.current.resetView()},setCalendarDate(e){x.current.setCalendarDate(e)}})));const $=e=>{const r=e.format("YYYY-MM-DD");x.current.setCalendarDate(r),B(r)},S=e=>{E(e)},B=e=>{n&&n(e)},E=e=>{a&&a(e)},C=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r(Yi,Object.assign({$type:f},{children:r(gi,Object.assign({type:f,ref:x,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:g,selectWithinRange:p,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||C(e),w.current=e},initialCalendarDate:y},{children:({calendarDate:t})=>(t=>{switch(u){case"week":return r(Li,{calendarDate:t,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:m,onSelect:$,onHover:S});case"fixed-range":return r(ji,{calendarDate:t,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:m,onSelect:$,onHover:S,numberOfDays:F});default:return r(zi,{calendarDate:t,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:p,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:$,onHover:S})}})(t)}))}))})),Wi=a.forwardRef(((e,t)=>{var{width:n}=e,a=W(e,["width"]);return r(Ln,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:r(Ti,Object.assign({ref:t},a))}))})),Ni=y.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return F`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,Pi=y.div`
    width: 100%; // Force next flex item to break to next line
`,Ii=y.div`
    display: flex;
    flex: 1;
    align-items: center;
`,_i=y(T)`
    color: ${it.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Vi=y.div`
    position: absolute;
    background: ${e=>e.$error?it.Validation.Red.Border(e):it.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,Ji=({children:t,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=t;return e(Ni,Object.assign({className:i,$wrap:o},{children:[r(Ii,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),r(_i,{}),o&&r(Pi,{}),r(Ii,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),r(Vi,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]}))},Zi=F`
    border: 1px solid ${it.Accent.Light[1]};
    box-shadow: ${lt};
`,Ui=F`
    border: 1px solid ${it.Accent.Light[1]};
    box-shadow: none;
`,Xi=F`
    border: 1px solid ${it.Neutral[5]};
    box-shadow: none;
`,Gi=F`
    border: 1px solid ${it.Validation.Red.Border};
    box-shadow: ${dt};
`,Ki=y.div`
    border: 1px solid ${it.Neutral[5]};
    border-radius: 4px;
    background: ${it.Neutral[8]};

    :focus-within {
        ${Zi}
    }
    ${e=>e.$focused&&Zi}

    ${e=>e.$readOnly?F`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ui}
                }
                ${e.$focused&&Ui}
            `:e.$disabled?F`
                background: ${it.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Xi}
                }
                ${e.$focused&&Xi}
            `:e.$error?F`
                border: 1px solid ${it.Validation.Red.Border};

                :focus-within {
                    ${Gi}
                }
                ${e.$focused&&Gi}
            `:void 0}
`,qi=y(Ki)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Qi=y.input`
    ${e=>Dt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${it.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${it.Neutral[3]};
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
`;y.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${it.Primary};
    }
`;const eo=y.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ro=y.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${to}, ${oo} {
                    color: ${it.Neutral[4]};
                }
            `}}
`,to=y(Qi)`
    background: transparent;
    text-align: center;
`,no=y(to)`
    width: 2rem;
    margin-right: 0.25rem;
`,ao=y(to)`
    width: 2.5rem;
`,io=y(to)`
    width: 3rem;
    margin-left: 0.25rem;
`,oo=y(wt.Body)`
    ${e=>{if(e.$inactive)return F`
                color: ${it.Neutral[3](e)};
            `}}
`,so=y.div`
    ${Dt("Body","regular")}
    background-color: ${it.Neutral[8]};
    color: ${it.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${it.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;_.extend(Wn);const lo=a.forwardRef((({disabled:t,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:h,onChange:g,onFocus:m,onBlur:f,hideInputKeyboard:p},y)=>{const F=p?"none":"numeric",[v,D,x]=oa(""),[w,$,S]=oa(""),[B,E,C]=oa(""),[O,A]=o("none"),[k,H]=o(!1),z=i(null),M=i(null),j=i(null),Y=i(null),[R,L,T]=J(d);u((()=>{const[e="",r="",t=""]=J(s);D(e),$(r),E(t),e||r||t||!z.current.contains(document.activeElement)||M.current.focus()}),[s]),u((()=>{l||A("none"),l&&(H(!0),z.current.contains(document.activeElement)||M.current.focus())}),[l]),b(y,(()=>({ref:z,resetPlaceholder(){H(!1)},resetInput(){const[e="",r="",t=""]=J(s);D(e),$(r),E(t)}})),[s]);const W=e=>{var r;e.preventDefault(),null===(r=M.current)||void 0===r||r.focus()},N=e=>{e.target.select();const r=e.target.name;A(r)},P=e=>{const[r,t,n]=a,i={[r]:x.current,[t]:S.current,[n]:C.current},o=e.target.name,s=i[o],l=o!==n?ia.padValue(s,!0):s;switch(o){case r:i[r]=l,D(l);break;case t:i[t]=l,$(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=_(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&g(d),z.current.contains(e.relatedTarget)||(A("none"),null==f||f(u||c))},I=e=>{if(d)return;const r=e.target.name,t=e.target.value.replace(/[^0-9]/g,""),n={day:v,month:w,year:B};switch(r){case a[0]:n.day=t,D(t),2===t.length&&j.current.focus();break;case a[1]:n.month=t,$(t),2===t.length&&Y.current.focus();break;case a[2]:n.year=t,E(t)}if(!n.day&&!n.month&&!n.year)return void g("");const i=`${n.year}-${n.month}-${n.day}`;_(i,"YYYY-MM-DD",!0).isValid()&&g(i)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(O===a[1]&&0===w.length&&M.current.focus(),O===a[2]&&0===B.length&&j.current.focus())};function J(e){if(e){const r=_(new Date(e));return r.isValid()?[ia.padValue(r.date().toString()),ia.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(eo,Object.assign({role:"group","aria-label":h,onClick:()=>{t||n||(H(!0),z.current.contains(document.activeElement)||M.current.focus())},onFocus:e=>{t||(H(!0),l||null==m||m(e))}},{children:[e(ro,Object.assign({ref:z,$hover:!!d},{children:[r(no,{ref:M,name:a[0],maxLength:2,value:null!=R?R:v,onFocus:N,onBlur:P,onChange:I,type:"text",inputMode:F,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:t,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==a[0]||n?"DD":""}),r(oo,Object.assign({$inactive:0===v.length},{children:"/"})),r(ao,{ref:j,name:a[1],maxLength:2,value:null!=L?L:w,onFocus:N,onBlur:P,onChange:I,onKeyDown:V,type:"text",inputMode:F,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:t,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==a[1]||n?"MM":""}),r(oo,Object.assign({$inactive:0===w.length},{children:"/"})),r(io,{ref:Y,name:a[2],maxLength:4,value:null!=T?T:B,onFocus:N,onBlur:P,onChange:I,onKeyDown:V,type:"text",inputMode:F,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:t,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==a[2]||n?"YYYY":""})]})),(()=>{if(!s&&!n&&c)return r(so,Object.assign({$hide:k,$disabled:t,onMouseDown:W},{children:c}))})()]}))})),co=(e,r,t)=>{const n=[];e&&n.push(`[${e}]`),n.push(r,t),console.log(...n)},uo=y(qi)`
    ${e=>e.$wrap&&F`
            padding: 0.75rem 1rem;
        `}
`,ho=y.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,go={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},mo=t=>{var{minDate:n,maxDate:a,disabled:s,disabledDates:l,error:d,hideInputKeyboard:c,value:h,valueEnd:m,onChange:b,onFocus:p,onBlur:y,onYearMonthDisplayChange:F,withButton:v=!0,variant:D="range",numberOfDays:x=7,readOnly:w,id:$,allowDisabledSelection:S,zIndex:B}=t,E=W(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[C,O]=o(),[A,k]=o(void 0),[H,z]=o(!1),[M,j]=o(!1),Y="week"===D,R="fixed-range"===D,[{selectedStart:L,selectedEnd:T,currentFocus:N,calendarOpen:P,isStartDirty:I,isEndDirty:V,focused:J},Z]=(({initialState:e,reducers:r,name:t,debug:n})=>{const[a,i]=f(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,r=>{n&&co(t,e,r),i({type:e,payload:r})}])))]})({name:"date-range-input",initialState:go,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r,isStartDirty:!0}),changeEnd:(e,r)=>Object.assign(Object.assign({},e),{selectedEnd:r,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,r)=>Object.assign(Object.assign({},e),{currentFocus:Y?"none":R?"start":r,calendarOpen:!w,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,r)=>Object.assign(Object.assign({},e),{selectedStart:r.start,selectedEnd:r.end,initialStart:r.start,initialEnd:r.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,r)=>Object.assign(Object.assign({},e),{initialStart:r.start,selectedStart:r.start,initialEnd:r.end,selectedEnd:r.end})}}),U=i(!1),X=i(),G=i(),K=i(),q=i(),Q=(({maxWidth:e,targetRef:r})=>{const[t,n]=o(!1);return On({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:g((r=>{n(r<=e)}),[e])}),t})({maxWidth:320,targetRef:X});u((()=>{Z.resetRange({start:na.sanitizeInput(h),end:na.sanitizeInput(m)})}),[h,m]),u((()=>{"start"===N?O(L):"end"===N&&O(T)}),[N]);const ee=e=>{"Enter"!==e.code||v||(L&&T?(Z.done({start:L,end:T}),null==b||b(L,T)):(Z.dismiss(),X.current.focus(),K.current.resetPlaceholder(),q.current.resetPlaceholder()))},re=e=>{if(me(e))return void(U.current=!0);if(Z.changeStart(e),G.current.setCalendarDate(e),U.current=!1,!e)return void(v||T||!V||(Z.resetRange({start:"",end:""}),null==b||b("","")));if(!T)return void Z.focus("end");if(_(e).isAfter(T,"day"))Z.reselectEnd();else{if(V)return v?void 0:(Z.done({start:e,end:T}),void(null==b||b(e,T)));Z.focus("end")}},te=e=>{if(me(e))return void(U.current=!0);if(_(e).isBefore(L,"day"))return Z.changeStart(e),G.current.setCalendarDate(e),void Z.reselectEnd();if(Z.changeEnd(e),G.current.setCalendarDate(e),e){if(L)return v?void 0:(Z.done({start:L,end:e}),void(null==b||b(L,e)));Z.focus("start")}else v||L||!I||(Z.resetRange({start:"",end:""}),null==b||b("",""))},ne=e=>{if(me(e))return void(U.current=!0);if(Z.changeStart(e),G.current.setCalendarDate(e),U.current=!1,!e)return void(v?Z.changeEnd(""):(Z.resetRange({start:"",end:""}),null==b||b("","")));const r=_(e).format("YYYY-MM-DD"),t=_(r).add(x-1,"day").format("YYYY-MM-DD");return Z.changeStart(r),Z.changeEnd(t),U.current=!1,v?void 0:(Z.done({start:r,end:t}),void(null==b||b(r,t)))},ae=()=>{w||s||J||(Z.focus("start"),null==p||p())},ie=e=>{!J||P||X.current.contains(e.relatedTarget)||(Z.blur(),z(!1),j(!1),K.current.resetPlaceholder(),q.current.resetPlaceholder(),null==y||y())},oe=e=>r=>{r.stopPropagation(),w||(Z.focus(e),se(),le(),J||null==p||p())},se=()=>{if(Y){const e=ta.toDayjs(L).startOf("week").format("YYYY-MM-DD");z(!0),j(!0),O(e)}},le=()=>{R&&(j(!0),O(L))},de=e=>{e&&!U.current||(Z.resetStart(),K.current.resetInput())},ce=e=>{e&&!U.current||(Z.resetEnd(),q.current.resetInput())},ue=e=>{switch(D){case"week":(e=>{const r=_(e).startOf("week").format("YYYY-MM-DD"),t=_(e).endOf("week").format("YYYY-MM-DD");if(Z.changeStart(r),Z.changeEnd(t),U.current=!1,!v)Z.done({start:r,end:t}),null==b||b(r,t)})(e);break;case"fixed-range":ne(e);break;default:"start"===N?re(e):"end"===N&&te(e)}},he=e=>{switch(X.current.focus(),e){case"reset":Z.cancel();break;case"confirmed":Z.done({start:L,end:T}),null==b||b(L,T)}},ge=e=>{k(e)},me=e=>!S&&e&&na.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:a}),be=e=>{let r={start:void 0,end:void 0};switch(D){case"range":r={start:"start"===N?A:void 0,end:"end"===N?A:void 0};break;case"week":if(!A)return;r={start:_(A).startOf("week").format("YYYY-MM-DD"),end:_(A).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!A)return;r={start:_(A).format("YYYY-MM-DD"),end:_(A).add(x-1,"day").format("YYYY-MM-DD")}}return r[e]};return r(Rn,{enabled:!w&&!s,isOpen:P,onClose:()=>{Z.blur(),z(!1),j(!1),K.current.resetPlaceholder(),q.current.resetPlaceholder(),null==y||y()},onDismiss:()=>{Z.dismiss(),X.current.focus(),K.current.resetPlaceholder(),q.current.resetPlaceholder()},renderElement:()=>r(uo,Object.assign({ref:X,tabIndex:-1,onFocus:ae,onBlur:ie,$focused:J,$disabled:s,$readOnly:w,$error:d,$wrap:Q,id:$,"data-testid":E["data-testid"],onKeyDown:ee},E,{children:e(Ji,Object.assign({currentActive:N,wrap:Q,error:d},{children:[r(ho,Object.assign({$wrap:Q},{children:r(lo,{ref:K,placeholder:"From",names:["start-day","start-month","start-year"],value:L,disabled:s,readOnly:H||w,focused:"start"===N,hoverValue:be("start"),onChange:R?ne:re,onFocus:oe("start"),onBlur:de,hideInputKeyboard:c})})),r(ho,Object.assign({$wrap:Q},{children:r(lo,{ref:q,placeholder:"To",names:["end-day","end-month","end-year"],value:T,disabled:s,readOnly:M||w,focused:"end"===N,hoverValue:be("end"),onChange:te,onFocus:oe("end"),onBlur:ce,hideInputKeyboard:c})}))]}))})),renderDropdown:({elementWidth:e})=>r(Wi,{ref:G,type:"input",variant:D,initialCalendarDate:C,withButton:v,value:L,endValue:T,selectWithinRange:I||V,currentFocus:N,disabledDates:l,minDate:n,maxDate:a,allowDisabledSelection:S,onSelect:ue,onDismiss:he,onHover:ge,onYearMonthDisplayChange:F,numberOfDays:x,width:e}),customZIndex:B,offset:16})};export{mo as DateRangeInput};
//# sourceMappingURL=index.js.map
