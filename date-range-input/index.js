import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import a,{useRef as i,useState as o,isValidElement as l,createRef as s,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,useCallback as f,useMemo as g,useImperativeHandle as p,useReducer as m}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import b,{css as v,keyframes as D}from"styled-components";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{useFloatingTree as S,useFloating as w,autoUpdate as F,offset as x,flip as B,shift as O,limitShift as H,size as k,useTransitionStyles as E,useClick as M,useDismiss as A,useInteractions as j,FloatingPortal as Y,FloatingFocusManager as C}from"@floating-ui/react";import{findDOMNode as z}from"react-dom";import{ChevronLeftIcon as L}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as R}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as T}from"@lifesg/react-icons";function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}};I.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:i,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",D={};D[v]=m;var $="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[$])},w=function e(t,n,r){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();D[i]&&(a=i),n&&(D[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var l=t.name;D[l]=t,a=l}return!r&&a&&(v=a),a||!r&&v},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},x=b;x.l=w,x.i=S,x.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,d=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,D=(p<v?p+7:p)-v;return f(r?y-D:y+(6-D),m);case l:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case i:return g(b+"Seconds",2);case a:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=x.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[i]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=x.p(d),p=function(e){var t=F(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=F(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,D=function(){return x.m(p,y)};switch(m){case u:g=D()/12;break;case c:g=D();break;case d:g=D()/3;break;case s:g=(v-b)/6048e5;break;case l:g=(v-b)/864e5;break;case o:g=v/n;break;case i:g=v/t;break;case a:g=v/e;break;default:g=v}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return D[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return F.prototype=O,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=w,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=D[v],F.Ls=D,F.p={},F}();var _=P(I.exports);var V=Array.isArray,J="object"==typeof N&&N&&N.Object===Object&&N,Z="object"==typeof self&&self&&self.Object===Object&&self,U=J||Z||Function("return this")(),X=U.Symbol,G=X,K=Object.prototype,q=K.hasOwnProperty,Q=K.toString,ee=G?G.toStringTag:void 0;var te=function(e){var t=q.call(e,ee),n=e[ee];try{e[ee]=void 0;var r=!0}catch(e){}var a=Q.call(e);return r&&(t?e[ee]=n:delete e[ee]),a},ne=Object.prototype.toString;var re=te,ae=function(e){return ne.call(e)},ie=X?X.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ie&&ie in Object(e)?re(e):ae(e)};var le=oe,se=function(e){return null!=e&&"object"==typeof e};var ce=function(e){return"symbol"==typeof e||se(e)&&"[object Symbol]"==le(e)},de=V,ue=ce,he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ge=function(e,t){if(de(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ue(e))||(fe.test(e)||!he.test(e)||null!=t&&e in Object(t))};var pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},me=oe,ye=pe;var be,ve=function(e){if(!ye(e))return!1;var t=me(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},De=U["__core-js_shared__"],$e=(be=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+be:"";var Se=function(e){return!!$e&&$e in e},we=Function.prototype.toString;var Fe=ve,xe=Se,Be=pe,Oe=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},He=/^\[object .+?Constructor\]$/,ke=Function.prototype,Ee=Object.prototype,Me=ke.toString,Ae=Ee.hasOwnProperty,je=RegExp("^"+Me.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!Be(e)||xe(e))&&(Fe(e)?je:He).test(Oe(e))},Ce=function(e,t){return null==e?void 0:e[t]};var ze=function(e,t){var n=Ce(e,t);return Ye(n)?n:void 0},Le=ze(Object,"create"),Re=Le;var Te=function(){this.__data__=Re?Re(null):{},this.size=0};var We=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ne=Le,Pe=Object.prototype.hasOwnProperty;var Ie=function(e){var t=this.__data__;if(Ne){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Pe.call(t,e)?t[e]:void 0},_e=Le,Ve=Object.prototype.hasOwnProperty;var Je=Le;var Ze=Te,Ue=We,Xe=Ie,Ge=function(e){var t=this.__data__;return _e?void 0!==t[e]:Ve.call(t,e)},Ke=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Je&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ze,qe.prototype.delete=Ue,qe.prototype.get=Xe,qe.prototype.has=Ge,qe.prototype.set=Ke;var Qe=qe;var et=function(){this.__data__=[],this.size=0};var tt=function(e,t){return e===t||e!=e&&t!=t};var nt=function(e,t){for(var n=e.length;n--;)if(tt(e[n][0],t))return n;return-1},rt=nt,at=Array.prototype.splice;var it=nt;var ot=nt;var lt=nt;var st=et,ct=function(e){var t=this.__data__,n=rt(t,e);return!(n<0)&&(n==t.length-1?t.pop():at.call(t,n,1),--this.size,!0)},dt=function(e){var t=this.__data__,n=it(t,e);return n<0?void 0:t[n][1]},ut=function(e){return ot(this.__data__,e)>-1},ht=function(e,t){var n=this.__data__,r=lt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ft(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ft.prototype.clear=st,ft.prototype.delete=ct,ft.prototype.get=dt,ft.prototype.has=ut,ft.prototype.set=ht;var gt=ft,pt=ze(U,"Map"),mt=Qe,yt=gt,bt=pt;var vt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Dt=function(e,t){var n=e.__data__;return vt(t)?n["string"==typeof t?"string":"hash"]:n.map},$t=Dt;var St=Dt;var wt=Dt;var Ft=Dt;var xt=function(e,t){var n=Ft(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Bt=function(){this.size=0,this.__data__={hash:new mt,map:new(bt||yt),string:new mt}},Ot=function(e){var t=$t(this,e).delete(e);return this.size-=t?1:0,t},Ht=function(e){return St(this,e).get(e)},kt=function(e){return wt(this,e).has(e)},Et=xt;function Mt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mt.prototype.clear=Bt,Mt.prototype.delete=Ot,Mt.prototype.get=Ht,Mt.prototype.has=kt,Mt.prototype.set=Et;var At=Mt;function jt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(jt.Cache||At),n}jt.Cache=At;var Yt=jt;var Ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zt=/\\(\\)?/g,Lt=function(e){var t=Yt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ct,(function(e,n,r,a){t.push(r?a.replace(zt,"$1"):n||e)})),t}));var Rt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},Tt=V,Wt=ce,Nt=X?X.prototype:void 0,Pt=Nt?Nt.toString:void 0;var It=function e(t){if("string"==typeof t)return t;if(Tt(t))return Rt(t,e)+"";if(Wt(t))return Pt?Pt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},_t=It;var Vt=V,Jt=ge,Zt=Lt,Ut=function(e){return null==e?"":_t(e)};var Xt=ce;var Gt=function(e,t){return Vt(e)?e:Jt(e,t)?[e]:Zt(Ut(e))},Kt=function(e){if("string"==typeof e||Xt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var qt=function(e,t){for(var n=0,r=(t=Gt(t,e)).length;null!=e&&n<r;)e=e[Kt(t[n++])];return n&&n==r?e:void 0};var Qt=P((function(e,t,n){var r=null==e?void 0:qt(e,t);return void 0===r?n:r}));const en=(e,t,n)=>t?Qt(n,t)||Qt(e,t):n||e,tn=(e,t)=>{const n=t||e.defaultValue;return Qt(e.collections,n)};var nn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nn||(nn={}));const rn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},an=e=>t=>{const n=t.theme,r=tn(rn,n[nn.colorScheme]);return n.options&&n.options.color?en(r,e,n.options.color):en(r,e)},on={Brand:{1:an("Brand.1"),2:an("Brand.2"),3:an("Brand.3"),4:an("Brand.4"),5:an("Brand.5"),6:an("Brand.6")},Primary:an("Primary"),PrimaryDark:an("PrimaryDark"),Secondary:an("Secondary"),Accent:{Light:{1:an("Accent.Light.1"),2:an("Accent.Light.2"),3:an("Accent.Light.3"),4:an("Accent.Light.4"),5:an("Accent.Light.5"),6:an("Accent.Light.6")},Dark:{1:an("Accent.Dark.1"),2:an("Accent.Dark.2"),3:an("Accent.Dark.3")}},Neutral:{1:an("Neutral.1"),2:an("Neutral.2"),3:an("Neutral.3"),4:an("Neutral.4"),5:an("Neutral.5"),6:an("Neutral.6"),7:an("Neutral.7"),8:an("Neutral.8")},Validation:{Green:{Text:an("Validation.Green.Text"),Icon:an("Validation.Green.Icon"),Border:an("Validation.Green.Border"),Background:an("Validation.Green.Background")},Orange:{Text:an("Validation.Orange.Text"),Icon:an("Validation.Orange.Icon"),Border:an("Validation.Orange.Border"),Background:an("Validation.Orange.Background"),Badge:an("Validation.Orange.Badge")},Red:{Text:an("Validation.Red.Text"),Icon:an("Validation.Red.Icon"),Border:an("Validation.Red.Border"),Background:an("Validation.Red.Background")},Blue:{Text:an("Validation.Blue.Text"),Icon:an("Validation.Blue.Icon"),Border:an("Validation.Blue.Border"),Background:an("Validation.Blue.Background")}},Shadow:{Accent:an("Shadow.Accent"),Red:an("Shadow.Red"),Elevation:an("Shadow.Elevation")}},ln={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${on.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${on.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${on.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${on.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${on.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${on.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},sn=e=>t=>{var n;const r=t.theme,a=tn(ln,r[nn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?en(a,e,r.options.designToken):en(a,e)},cn={InputBoxShadow:sn("InputBoxShadow"),InputErrorBoxShadow:sn("InputErrorBoxShadow"),ElevationBoxShadow:sn("ElevationBoxShadow"),Table:{Header:sn("Table.Header"),Cell:{Primary:sn("Table.Cell.Primary"),Secondary:sn("Table.Cell.Secondary"),Selected:sn("Table.Cell.Selected"),Hover:sn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:sn("Button.Danger.BackgroundColor"),Hover:sn("Button.Danger.Hover"),Primary:sn("Button.Danger.Primary"),Border:sn("Button.Danger.Border")}}},dn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},un={D1:{fontFamily:dn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:dn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:dn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:dn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:dn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:dn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:dn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:dn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},hn={D1:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:dn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:dn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:dn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:dn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:dn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},fn={collections:{base:un,oneservice:{D1:{fontFamily:dn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:dn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:dn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:dn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:dn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:dn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:dn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:dn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:dn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:dn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:dn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:dn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:hn},defaultValue:"base"},gn=e=>t=>{const n=t.theme,r=tn(fn,n[nn.textStyleScheme]);return n.options&&n.options.textStyle?en(r,e,n.options.textStyle):en(r,e)},pn={D1:{fontFamily:gn("D1.fontFamily"),fontSize:gn("D1.fontSize"),fontWeight:gn("D1.fontWeight"),lineHeight:gn("D1.lineHeight"),letterSpacing:gn("D1.letterSpacing"),fontVariant:gn("D1.fontVariant")},D2:{fontFamily:gn("D2.fontFamily"),fontSize:gn("D2.fontSize"),fontWeight:gn("D2.fontWeight"),lineHeight:gn("D2.lineHeight"),letterSpacing:gn("D2.letterSpacing"),fontVariant:gn("D2.fontVariant")},D3:{fontFamily:gn("D3.fontFamily"),fontSize:gn("D3.fontSize"),fontWeight:gn("D3.fontWeight"),lineHeight:gn("D3.lineHeight"),letterSpacing:gn("D3.letterSpacing"),fontVariant:gn("D3.fontVariant")},D4:{fontFamily:gn("D4.fontFamily"),fontSize:gn("D4.fontSize"),fontWeight:gn("D4.fontWeight"),lineHeight:gn("D4.lineHeight"),letterSpacing:gn("D4.letterSpacing"),fontVariant:gn("D4.fontVariant")},DBody:{fontFamily:gn("DBody.fontFamily"),fontSize:gn("DBody.fontSize"),fontWeight:gn("DBody.fontWeight"),lineHeight:gn("DBody.lineHeight"),letterSpacing:gn("DBody.letterSpacing"),fontVariant:gn("DBody.fontVariant")},H1:{fontFamily:gn("H1.fontFamily"),fontSize:gn("H1.fontSize"),fontWeight:gn("H1.fontWeight"),lineHeight:gn("H1.lineHeight"),letterSpacing:gn("H1.letterSpacing"),fontVariant:gn("H1.fontVariant")},H2:{fontFamily:gn("H2.fontFamily"),fontSize:gn("H2.fontSize"),fontWeight:gn("H2.fontWeight"),lineHeight:gn("H2.lineHeight"),letterSpacing:gn("H2.letterSpacing"),fontVariant:gn("H2.fontVariant")},H3:{fontFamily:gn("H3.fontFamily"),fontSize:gn("H3.fontSize"),fontWeight:gn("H3.fontWeight"),lineHeight:gn("H3.lineHeight"),letterSpacing:gn("H3.letterSpacing"),fontVariant:gn("H3.fontVariant")},H4:{fontFamily:gn("H4.fontFamily"),fontSize:gn("H4.fontSize"),fontWeight:gn("H4.fontWeight"),lineHeight:gn("H4.lineHeight"),letterSpacing:gn("H4.letterSpacing"),fontVariant:gn("H4.fontVariant")},H5:{fontFamily:gn("H5.fontFamily"),fontSize:gn("H5.fontSize"),fontWeight:gn("H5.fontWeight"),lineHeight:gn("H5.lineHeight"),letterSpacing:gn("H5.letterSpacing"),fontVariant:gn("H5.fontVariant")},H6:{fontFamily:gn("H6.fontFamily"),fontSize:gn("H6.fontSize"),fontWeight:gn("H6.fontWeight"),lineHeight:gn("H6.lineHeight"),letterSpacing:gn("H6.letterSpacing"),fontVariant:gn("H6.fontVariant")},Body:{fontFamily:gn("Body.fontFamily"),fontSize:gn("Body.fontSize"),fontWeight:gn("Body.fontWeight"),lineHeight:gn("Body.lineHeight"),letterSpacing:gn("Body.letterSpacing"),fontVariant:gn("Body.fontVariant")},BodySmall:{fontFamily:gn("BodySmall.fontFamily"),fontSize:gn("BodySmall.fontSize"),fontWeight:gn("BodySmall.fontWeight"),lineHeight:gn("BodySmall.lineHeight"),letterSpacing:gn("BodySmall.letterSpacing"),fontVariant:gn("BodySmall.fontVariant")},XSmall:{fontFamily:gn("XSmall.fontFamily"),fontSize:gn("XSmall.fontSize"),fontWeight:gn("XSmall.fontWeight"),lineHeight:gn("XSmall.lineHeight"),letterSpacing:gn("XSmall.letterSpacing"),fontVariant:gn("XSmall.fontVariant")}},mn=[dn.OpenSans,dn.PlusJakartaSans],yn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},bn=(e,t)=>n=>{var r;const a=pn[e].fontFamily(n),i=pn[e].fontWeight(n),o=mn.find((e=>Object.values(e).includes(a)));return o?v`
                font-family: ${yn(o,t)||yn(o,i)||a};
                font-weight: normal !important;
            `:v`
            font-family: ${a};
            font-weight: ${null!==(r=vn(t)||i)&&void 0!==r?r:"normal"};
        `},vn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Dn=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$n=(e,t,n=!1)=>r=>{const a=pn[e],i=a.fontSize(r);return v`
            ${bn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${v`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Sn=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${Dn(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Dn(n)}
        `;var wn;!function(e){e.D1=b.h1`
        ${e=>v`
                ${$n("D1",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=b.h1`
        ${e=>v`
                ${$n("D2",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=b.h1`
        ${e=>v`
                ${$n("D3",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=b.h1`
        ${e=>v`
                ${$n("D4",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=b.h1`
        ${e=>v`
                ${$n("DBody",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=b.h1`
        ${e=>v`
                ${$n("H1",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=b.h2`
        ${e=>v`
                ${$n("H2",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=b.h3`
        ${e=>v`
                ${$n("H3",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=b.h4`
        ${e=>v`
                ${$n("H4",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=b.h5`
        ${e=>v`
                ${$n("H5",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=b.h6`
        ${e=>v`
                ${$n("H6",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=b.p`
        ${e=>v`
                ${$n("Body",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=b.p`
        ${e=>v`
                ${$n("BodySmall",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=b.span`
        ${e=>v`
                ${$n("XSmall",e.weight,e.paragraph)}
                color: ${on.Neutral[1]};
                ${Sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Bn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Bn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wn||(wn={}));const Fn=b.a`
    ${e=>v`
            ${$n(e.textStyle,e.weight)}
            color: ${on.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${on.Secondary};

                svg {
                    color: ${on.Secondary};
                }
            }
        `}
`,xn=b($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Bn=n=>{var{external:r=!1,children:a}=n,i=W(n,["external","children"]);return e(Fn,Object.assign({},i,{children:[a,r&&t(xn,{})]}))};var On;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(On||(On={}));const Hn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",kn=e=>"small"===e?2.5:3;b.div`
    position: relative;
    width: 100%;
    ${e=>{const t=kn(e.$variant);return v`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const En=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>kn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${on.Accent.Light[3]};
    }
`,Mn=b.button`
    ${En}
    cursor: pointer;
`;b.div`
    ${En}
`;const An=D`
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
`;b.div`
    position: relative;
    border: 1px solid ${on.Neutral[5]};
    border-radius: ${"4px"};
    background: ${on.Neutral[8]};

    :focus-within {
        border: 1px solid ${on.Accent.Light[1]};
        box-shadow: ${cn.InputBoxShadow};
    }

    ${e=>e.expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${An} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?v`
                background: ${on.Neutral[6](e)};

                ${Mn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${on.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${Mn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?v`
                border: 1px solid ${on.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${on.Validation.Red.Border(e)};
                    box-shadow: ${cn.InputErrorBoxShadow};
                }
            `:void 0}
`,b.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Hn};
    margin-left: 1rem;
`,b(y)`
    color: ${on.Neutral[3]};
    ${e=>{let t=pn.Body.fontSize;return"small"===e.$variant&&(t=pn.BodySmall.fontSize),v`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,b.div`
    height: 1px;
    background: ${on.Neutral[5]};
    margin: 0 0.5rem;
`,b.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return v`
                color: ${on.Neutral[3]};
            `}}
`;const jn=b.div`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return v`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;b(jn)`
    color: ${on.Neutral[3]};
`;var Yn=function(e,t){return Yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Yn(e,t)};var Cn=function(){return Cn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Cn.apply(this,arguments)};var zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ln=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Rn="object"==typeof zn&&zn&&zn.Object===Object&&zn,Tn="object"==typeof self&&self&&self.Object===Object&&self,Wn=Rn||Tn||Function("return this")(),Nn=Wn,Pn=function(){return Nn.Date.now()},In=/\s/;var _n=function(e){for(var t=e.length;t--&&In.test(e.charAt(t)););return t},Vn=/^\s+/;var Jn=function(e){return e?e.slice(0,_n(e)+1).replace(Vn,""):e},Zn=Wn.Symbol,Un=Zn,Xn=Object.prototype,Gn=Xn.hasOwnProperty,Kn=Xn.toString,qn=Un?Un.toStringTag:void 0;var Qn=function(e){var t=Gn.call(e,qn),n=e[qn];try{e[qn]=void 0;var r=!0}catch(e){}var a=Kn.call(e);return r&&(t?e[qn]=n:delete e[qn]),a},er=Object.prototype.toString;var tr=Qn,nr=function(e){return er.call(e)},rr=Zn?Zn.toStringTag:void 0;var ar=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":rr&&rr in Object(e)?tr(e):nr(e)},ir=function(e){return null!=e&&"object"==typeof e};var or=Jn,lr=Ln,sr=function(e){return"symbol"==typeof e||ir(e)&&"[object Symbol]"==ar(e)},cr=/^[-+]0x[0-9a-f]+$/i,dr=/^0b[01]+$/i,ur=/^0o[0-7]+$/i,hr=parseInt;var fr=Ln,gr=Pn,pr=function(e){if("number"==typeof e)return e;if(sr(e))return NaN;if(lr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=lr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=or(e);var n=dr.test(e);return n||ur.test(e)?hr(e.slice(2),n?2:8):cr.test(e)?NaN:+e},mr=Math.max,yr=Math.min;var br=function(e,t,n){var r,a,i,o,l,s,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-c>=i}function p(){var e=gr();if(g(e))return m(e);l=setTimeout(p,function(e){var n=t-(e-s);return u?yr(n,i-(e-c)):n}(e))}function m(e){return l=void 0,h&&r?f(e):(r=a=void 0,o)}function y(){var e=gr(),n=g(e);if(r=arguments,a=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(p,t),d?f(e):o}(s);if(u)return clearTimeout(l),l=setTimeout(p,t),f(s)}return void 0===l&&(l=setTimeout(p,t)),o}return t=pr(t)||0,fr(n)&&(d=!!n.leading,i=(u="maxWait"in n)?mr(pr(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=a=l=void 0},y.flush=function(){return void 0===l?o:m(gr())},y},vr=br,Dr=Ln;var $r=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Dr(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),vr(e,t,{leading:r,maxWait:t,trailing:a})},Sr=function(e,t,n,r){switch(t){case"debounce":return br(e,n,r);case"throttle":return $r(e,n,r);default:return e}},wr=function(e){return"function"==typeof e},Fr=function(){return"undefined"==typeof window},xr=function(e){return e instanceof Element||e instanceof HTMLDocument},Br=function(e,t,n,r){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!r||t.height===o&&!n?t:(e&&wr(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Fr()){t&&t.current&&(n.targetRef.current=t.current);var a=n.getElement();a&&(n.observableElement&&n.observableElement===a||(n.observableElement=a,n.resizeObserver.observe(a,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Fr())return null;if(t)return document.querySelector(t);if(r&&xr(r))return r;if(n.targetRef&&xr(n.targetRef.current))return n.targetRef.current;var a=z(n);if(!a)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,a=void 0===r||r,i=t.handleHeight,o=void 0===i||i,l=t.onResize;if(a||o){var s=Br(l,n.setState.bind(n),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,a=t.height;!n.skipOnMount&&!Fr()&&s({width:r,height:a}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return wr(t)?"renderProp":wr(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,Fr()||(n.resizeHandler=Sr(n.createResizeHandler,a,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Yn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Fr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,a=t.children,i=t.nodeType,o=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=a)(s);case"child":if((e=a).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(s,["targetRef"]);return c(e,d)}return c(e,s);case"childArray":return(e=a).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(o,null)}}}(d);var Or=Fr()?u:h;function Hr(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,s=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,g=e.observerOptions,p=e.onResize,m=i(n),y=i(null),b=null!=f?f:y,v=i(),D=o({width:void 0,height:void 0}),$=D[0],S=D[1];return Or((function(){if(!Fr()){var e=Br(p,S,d,h);v.current=Sr((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,a=n.height;!m.current&&!Fr()&&e({width:r,height:a}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,d,h,p,g,b.current]),Cn({ref:b},$)}const kr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Er=e=>Object.keys(kr).reduce(((t,n)=>{const r=kr[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Mr=Er("max-width"),Ar=(Er("min-width"),kr);var jr;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(jr||(jr={}));const Yr=b.div`
    display: flex;
    flex-direction: column;
`,Cr=e=>"right"===e?"bottom-end":"bottom-start",zr=({enabled:r,isOpen:a,onOpen:l,onClose:s,onDismiss:c,renderElement:d,renderDropdown:h,customZIndex:f,clickToToggle:g=!1,offset:p=0,alignment:m="left",fitAvailableHeight:y})=>{var b;const v=i(null),D=i(null),{width:$}=Hr({targetRef:v,handleHeight:!1}),z={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<Ar.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:L,floatingStyles:R,context:T}=w({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!a?null==l||l():!e&&a&&(null==s||s(n))},whileElementsMounted:F,placement:Cr(m),middleware:[x(p),B(),O({limiter:H()}),k({apply({availableHeight:e}){D.current&&Object.assign(D.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),z]}),W=(()=>{const[e,t]=o(void 0),n=S();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(jr.Change,e),n.events.emit(jr.Ready),()=>n.events.off(jr.Change,e)}),[n]),e})(),{isMounted:N,styles:P}=E(T,{initial:{opacity:0},open:{opacity:1},duration:300}),I=M(T,{enabled:r,toggle:g}),_=A(T,{enabled:r}),{getReferenceProps:V,getFloatingProps:J}=j([I,_]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,L.setReference(e)}},V(),{children:d()})),N&&t(Y,{children:t(C,Object.assign({context:T,modal:!1,initialFocus:D,returnFocus:!1},{children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},R),{zIndex:null!==(b=null!=f?f:W)&&void 0!==b?b:50})},J(),{children:t(Yr,Object.assign({ref:D,style:Object.assign({},P),inert:P.opacity<1?"":void 0},{children:h({elementWidth:$})}))}))}))})]})},Lr=b.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Mr.mobileL} {
        min-width: 17.5rem;
    }
`;var Rr={exports:{}};Rr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,s=a.parser,c=e.slice(r),d=i.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!s&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var y=l||0,b=s||0,v=c||0,D=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,D+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,D)):new Date(p,m,g,y,b,v,D)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Tr=P(Rr.exports),Wr={exports:{}};Wr.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var Nr=P(Wr.exports),Pr={exports:{}};Pr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ir=P(Pr.exports),_r={exports:{}};_r.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Vr,Jr,Zr,Ur=P(_r.exports),Xr={exports:{}},Gr=P(Xr.exports=(Vr={year:0,month:1,day:2,hour:3,minute:4,second:5},Jr={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=Jr[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Jr[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,d=Vr[s];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(a-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,l=a||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));_.extend(Nr),_.extend(Ur),_.extend(Ir),_.extend(Tr),_.extend(Gr),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=_(t).startOf("week");return Kr(n).map((e=>qr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return qr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(_(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+_(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=_(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?_(r):void 0,a?_(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Zr||(Zr={}));const Kr=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},qr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Qr=[1,3,5,7,8,10,12],ea=[4,6,9,11];var ta,na,ra,aa;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":Qr.includes(i)?Math.min(a,31).toString():ea.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=_(e,n);return _(t,n).diff(r,"minute")},e.toDayjs=e=>e?_(e):_(),e.addMinutesToTime=(e,t,n="HH:mm")=>_(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>_(e).isSame(_(t),n)}(ta||(ta={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!_(e).isBefore(r,"day"))||!(!a||!_(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(_(e).isValid())return e}return""}}(na||(na={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ra||(ra={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(aa||(aa={}));const ia=e=>{const[t,n]=o(e),r=i(e);return[t,f((e=>{r.current=e,n(e)}),[]),r]},oa=b.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,la=D`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sa=b.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||on.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${la} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ca=b(sa)`
    animation-delay: -0.45s;
`,da=b(sa)`
    animation-delay: -0.3s;
`,ua=b(sa)`
    animation-delay: -0.15s;
`,ha=b.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${on.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?cn.Button.Danger.Border:on.Primary};

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:on.Primary};
                `;case"light":return v`
                    background-color: ${on.Neutral[8]};
                    border: 1px solid ${on.Neutral[5]};

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:on.Primary};
                `;case"disabled":return v`
                    background-color: ${on.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${on.Neutral[3]};
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:on.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?cn.Button.Danger.Hover:on.Secondary};
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?cn.Button.Danger.BackgroundColor:on.Primary};
                    border: 1px solid transparent;

                    ${Mr.mobileL} {
                        width: 100%;
                    }

                    color: ${on.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    ${$n("H5","semibold")}

                    ${Mr.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    ${$n("H4","semibold")}

                    ${Mr.mobileS} {
                        height: auto;
                    }
                `}
`,fa=b((({color:n,className:r,size:a=18})=>e(oa,Object.assign({className:r,$size:a,$color:n,"data-testid":"component-loading-spinner"},{children:[t(sa,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(ca,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(da,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(ua,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?cn.Button.Danger.Primary:on.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=on.Neutral[3](e);break;default:t=on.Neutral[8](e)}return v`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ga={Default:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=W(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(ha,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(fa,Object.assign({},d)),t("span",{children:a})]}))})),Small:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=W(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(ha,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(fa,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},pa=b.button`
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

        ${({$highlight:e})=>e&&v`
                background-color: ${on.Neutral[7]};
            `}
    }
`,ma=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,l=W(e,["children","focusHighlight","focusOutline","type"]);return t(pa,Object.assign({ref:n,$outline:i,$highlight:a,type:o},l,{children:r}))})),ya=v`
    color: ${on.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,ba=b(L)`
    ${ya}
`,va=b(R)`
    ${ya}
`,Da=b(y)`
    ${ya}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,$a=b.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Sa=b.div`
    display: flex;
    flex: 1;
    position: relative;
`,wa=b.div`
    isolation: isolate;
    width: 100%;
`,Fa=b.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${on.Neutral[8]};

    ${e=>{if(!e.$visible)return v`
                display: none;
            `}}
`,xa=b.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Ba=b.div`
    display: flex;
`,Oa=b.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?v`
                display: none;
            `:e.$expanded?v`
                ${Da} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Ha=b.p`
    ${$n("H5","regular")}
`,ka=b.div`
    display: flex;
`,Ea=b(ma)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ma=b.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Aa=b(ga.Small)`
    flex: 1;
`,ja=b.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return v`
                    gap: 0.5rem 2.5rem;
                `;case"input":return v`
                    gap: 0.5rem 1rem;
                `}}}
`,Ya=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?v`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${on.Shadow.Accent};
                    border: 1px solid ${on.Accent.Light[1]};
                }
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return v`
                    background-color: ${on.Accent.Light[6](e)};
                `;case"selected-month":return v`
                    background-color: ${on.Accent.Light[5](e)};
                    border: 1px solid ${on.Primary(e)};
                `}}}
`,Ca=b(wn.H5)`
    ${e=>{if(e.$disabledDisplay)return v`
                color: ${on.Neutral[4]};
            `;switch(e.$variant){case"current-month":return v`
                    color: ${on.Neutral[3](e)};
                `;case"selected-month":return v`
                    ${$n("H5","semibold")}
                    color: ${on.Primary(e)};
                `}}}
`,za=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=g((()=>Zr.generateMonths(_(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},p=e=>{const t=e.format("MMMM"),n=(r=e,!Zr.isWithinRange(r,s?_(s):void 0,c?_(c):void 0,"month"));var r;const a=i.isSame(e,"month")?"selected-month":_().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||d,month:t,variant:a}};return h.length?t(ja,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,month:i}=p(e);return t(Ya,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(e,!r)},{children:t(Ca,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n},{children:i}))}),i)}))})):null},La=b.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return v`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return v`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Ra=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?v`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${on.Shadow.Accent};
                    border: 1px solid ${on.Accent.Light[1]};
                }
            `:e.$disabledDisplay?v`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return v`
                    background: ${on.Accent.Light[6](e)};
                `;case"selected-year":return v`
                    background: ${on.Accent.Light[5](e)};
                    border: 1px solid ${on.Primary(e)};
                `}}};
`,Ta=b(wn.H5)`
    ${e=>{if(e.$disabledDisplay)return v`
                color: ${on.Neutral[4]};
            `;switch(e.$variant){case"current-year":return v`
                    color: ${on.Neutral[3](e)};
                `;case"selected-year":return v`
                    ${$n("H5","semibold")}
                    color: ${on.Primary(e)};
                `;case"other-decade":return v`
                    color: ${on.Neutral[4](e)};
                `}}}
`,Wa=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=g((()=>Zr.generateDecadeOfYears(_(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(a=e,!Zr.isWithinRange(a,s?_(s):void 0,c?_(c):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":_().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||d,year:n,variant:o}};return h.length?t(La,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,year:i}=p(e);return t(Ra,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(e,!r)},{children:t(Ta,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Na=a.forwardRef(((r,a)=>{var{children:l,initialCalendarDate:s,type:c,minDate:d,maxDate:h,currentFocus:f,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:D,withButton:$,doneButtonDisabled:S,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:x,getRightArrowDate:B,isLeftArrowDisabled:O,isRightArrowDisabled:H,getMonthHeaderLabel:k,getYearHeaderLabel:E}=r,M=W(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[A,j]=o(ta.toDayjs(s)),[Y,C]=o(ta.toDayjs(s)),[z,L]=o("default"),R=i(null),T=i(null),N=i();p(a,(()=>({defaultView(){L("default")},resetView(){const e=ta.toDayjs(s);j(e),C(e),L("default")},setCalendarDate(e){const t=ta.toDayjs(e);j(t),C(t)}}))),u((()=>{const e=ta.toDayjs(s);j(e),C(e)}),[s]),u((()=>{X(Y)}),[Y]);const P=()=>{"month-options"!==z?(L("month-options"),N.current.focus()):(L("default"),j(Y))},I=()=>{"default"!==z?(L("default"),j(Y)):L("year-options")},V=()=>{N.current.focus();const e=x?x(A):A.subtract(1,"month");switch(z){case"default":C(e),j(e);break;case"month-options":j((e=>e.subtract(1,"year")));break;case"year-options":j((e=>e.subtract(10,"year")))}},J=()=>{N.current.focus();const e=B?B(A):A.add(1,"month");switch(z){case"default":C(e),j(e);break;case"month-options":j((e=>e.add(1,"year")));break;case"year-options":j((e=>e.add(10,"year")))}},Z=e=>{j(e),C(e),$||L("default")},U=()=>{const e=ta.toDayjs(s);j(e),C(e),"default"===z?G("reset"):L("default")},X=e=>{D&&D(e)},G=e=>{w&&w(e)},K=()=>{if(!d||v)return!1;const e=_(d);return"month-options"===z?!Zr.isPreviousYearWithinRange(A,e):"year-options"===z?!Zr.isPreviousDecadeWithinRange(A,e):O?O(A):!Zr.isPreviousMonthWithinRange(A,e)},q=()=>{if(!h||v)return!1;const e=_(h);return"month-options"===z?!Zr.isNextYearWithinRange(A,e):"year-options"===z?!Zr.isNextDecadeWithinRange(A,e):H?H(A):!Zr.isNextMonthWithinRange(A,e)},Q=()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Zr.getStartEndDecade(A);return`${e} to ${t}`}return E?E(A):A.format("YYYY")},ee=()=>{const r=k?k(A):A.format("MMM");return e(n,{children:[e(Oa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:P},{children:[t(Ha,{children:r}),t(Da,{})]})),e(Oa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==z,id:"year-dropdown",onClick:I},{children:[t(Ha,{children:Q()}),t(Da,{})]}))]})},te=()=>{switch(z){case"month-options":return t(za,{type:c,calendarDate:A,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:y,onMonthSelect:Z,allowDisabledSelection:v});case"year-options":return t(Wa,{type:c,calendarDate:A,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:Y,isNewSelection:y,onYearSelect:Z,allowDisabledSelection:v});default:return null}};return e($a,Object.assign({ref:N,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[F&&e(xa,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Ba,{children:ee()}),e(ka,{children:[t(Ea,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(ba,{})})),t(Ea,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:J},{children:t(va,{})}))]})]})),t(Sa,{children:(()=>{const r="function"==typeof l?l({calendarDate:Y,currentView:z}):l;return e(n,b?{children:["default"===z&&r,te()]}:{children:[t(wa,{children:r}),t(Fa,Object.assign({$visible:"default"!==z},{children:te()}))]})})()}),(()=>{if(!$)return;const n=!!("default"===z)&&S;return e(Ma,{children:[t(Aa,Object.assign({ref:T,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Aa,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{n||(j(Y),"default"===z?G("confirmed"):L("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Pa=b.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ia=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,_a=b.div`
    grid-column: 1 / -1;
    display: flex;
`;b.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Va=b.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return v`
                    left: 0;
                `;case"right":return v`
                    right: 0;
                `}}}
`,Ja=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;b(wn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return v`
                ${$n("H5","semibold")};
                color: ${on.Accent.Light[2]};
            `;if(t)return v`
                color: ${on.Neutral[4]};
            `;if(n)return v`
                ${$n("H5","semibold")};
                color: ${on.Primary};
            `;switch(r){case"other-month":return v`
                    color: ${on.Neutral[4]};
                `;case"today":return v`
                    color: ${on.Neutral[3]};
                `;case"default":return v`
                    color: ${on.Neutral[1]};
                `}}}
`,b(Va)`
    ${e=>{const{$selected:t}=e;if(t)return v`
                border-top: 1px solid ${on.Accent.Light[4]};
                border-bottom: 1px solid ${on.Accent.Light[4]};
                background-color: ${on.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?v`
                border-top: 1px dashed ${on.Accent.Light[4]};
                border-bottom: 1px dashed ${on.Accent.Light[4]};
                background-color: ${on.Accent.Light[6]};
            `:n?v`
                background-color: ${on.Accent.Light[4]};
            `:void 0}}
`,b(Ja)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?v`
                background: ${on.Accent.Light[5]};
                border: 1px solid ${on.Primary};
            `:t?v`
                box-shadow: 0px 0px 4px 1px ${on.Shadow.Accent};
                border: 1px solid ${on.Accent.Light[1]};
                background-color: ${on.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?v`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${on.Shadow.Accent};
                    border: 1px solid ${on.Accent.Light[1]};
                    background-color: ${on.Neutral[8]};
                }
            `:n?v`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?v`
                border: 1px solid ${on.Accent.Light[1]};
                background: ${on.Accent.Light[4]};

                :hover {
                    background: ${on.Accent.Light[4]};
                }
            `:t?v`
                color: ${on.Neutral[4]};
            `:"today"===r?v`
                    background: ${on.Accent.Light[5]};
                `:void 0}}
`;const Za=e=>{let t=on.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=on.Accent.Light[5];break;case"hover-dash":t=on.Accent.Light[6],n=`1px dashed ${on.Accent.Light[4](e)}`;break;case"hover-current":t=on.Neutral[8],n=`1px solid ${on.Primary(e)}`;break;case"selected":t=on.Accent.Light[5],n=`1px solid ${on.Accent.Light[4](e)}`;break;case"selected-outline":t=on.Accent.Light[5],n=`1px solid ${on.Primary(e)}`;break;case"overlap":t=on.Accent.Light[4],n=`1px solid ${on.Accent.Light[4](e)}`;break;case"overlap-outline":t=on.Accent.Light[4],n=`1px solid ${on.Primary(e)}`}return{color:t,border:n}},Ua=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Xa=b.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Za(e);return v`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Ga=b(Xa)`
    left: 0;
`,Ka=b(Xa)`
    right: 0;
`,qa=b.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${on.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Qa=b(qa)`
    left: 0;
`,ei=b(qa)`
    right: 0;
`,ti=b.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Za(e);return v`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&v`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,ni=b(ti)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${on.Shadow.Accent};
    }
`,ri=b(ti)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${on.Shadow.Accent};
    }
`,ai=b(wn.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?v`
                    ${$n("H5","semibold")};
                    color: ${on.Accent.Light[2]};
                `:"hidden"===n?v`
                    visibility: hidden;
                `:v`
                color: ${on.Neutral[4]};
            `;switch(n){case"selected":return v`
                    ${$n("H5","semibold")};
                    color: ${on.Primary};
                `;case"current":return v`
                    color: ${on.Neutral[3]};
                `;case"unavailable":return v`
                    color: ${on.Neutral[4]};
                `;case"hidden":return v`
                    visibility: hidden;
                `;default:return v`
                    color: ${on.Neutral[1]};
                `}}}
`,ii=({bgLeft:n,bgRight:r,circleLeft:a,circleRight:i,shadow:o,circleShadow:l,labelType:s,disabled:c,interactive:d,date:u,onSelect:h,onHover:f,onHoverEnd:g})=>e(Ua,{children:[t(Qa,{$shadow:n&&o}),t(Ga,{$type:n,$shadow:n&&o}),t(ni,{$type:a,$shadow:a&&l}),t(ei,{$shadow:r&&o}),t(Ka,{$type:r,$shadow:r&&o}),t(ri,{$type:i,$shadow:i&&l}),t(ai,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{g&&g(u)}},{children:u.date()}))]}),oi=({date:e,calendarDate:n,startDate:r,endDate:a,currentFocus:i,hoverDate:o,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:f,onHover:g})=>{const p=Zr.isDisabledDay(e,c,l,s),m=!p||d,y=()=>{const e=_(o),t=e.isBefore(a,"day"),n=e.isAfter(r,"day");let l,s,c,d;return"start"===i&&a&&t&&(r&&n?(c=o,d=a):(l=o,s=r||a)),"end"===i&&r&&n&&(a&&t?(c=r,d=o):(l=a||r,s=o)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:d}},b={date:e,calendarDate:n,disabled:p,interactive:m,onSelect:()=>{f(e,!m)},onHover:()=>{g(e.format("YYYY-MM-DD"),!m)}};return t(ii,Object.assign({},b,(()=>{const t={};if(n.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(_().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const n="end"===i&&r&&e.isBefore(r),o="start"===i&&a&&e.isAfter(a);(n||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(r,"day"),o=e.isSame(a,"day");return h&&n.month()!==e.month()?(t.labelType="hidden",t):((r&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&a&&e.isBetween(r,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected"),o||(t.bgRight="selected")),t)})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:a,overlapEnd:i}=y();if(n&&r){if(e.isBetween(n,r,"day","[]")){const a=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const n=e.isSame(a,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};_.extend(Nr);const li=({calendarDate:n,currentFocus:r,disabledDates:a,selectedStartDate:i,selectedEndDate:l,onSelect:s,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:f,showActiveMonthDaysOnly:p})=>{const m=g((()=>Zr.generateDays(n)),[n]),[y,b]=o(""),v=(e,t)=>{t&&!f||s(e)},D=(e,t)=>{t&&!f||(b(e),c(e))},$=()=>{b(""),c("")};return e(Pa,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(Ia,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:_(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,o)=>t(_a,Object.assign({onMouseLeave:$},{children:e.map(((e,o)=>t(oi,{date:e,calendarDate:n,startDate:i,endDate:l,hoverDate:y,currentFocus:r,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:f,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:v,onHover:D},`day-${o}`)))}),o)))]}))},si=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Zr.isDisabledDay(e,l,i,o),f=!h||s,{start:g,end:p}=r?Zr.getFixedRangeStartEnd(ta.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:y}=a?Zr.getFixedRangeStartEnd(ta.toDayjs(a),c):{start:void 0,end:void 0},b=r&&e.isBetween(g,p,"day","[]"),v=a&&e.isBetween(m,y,"day","[]"),D=b&&e.isSame(g,"day")||v&&e.isSame(m,"day"),$=b&&e.isSame(p,"day")||v&&e.isSame(y,"day"),S=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},w={date:e,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{d(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(ii,Object.assign({},w,(()=>{const t={};return b||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":_().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return v&&S(t,"hover-dash",n===m,n===y),b&&S(t,"selected",n===g,n===p),b&&v&&S(t,"overlap",D,$),n===g&&(v?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=g&&m<p&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},ci=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:l,minDate:s,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=g((()=>Zr.generateDays(n)),[n]),[f,p]=o(""),m=(e,t)=>{t&&!d||(i(e),e&&!_(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!d||(p(e),l(e))},b=()=>{p(""),l("")};return e(Pa,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(Ia,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:_(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(_a,Object.assign({onMouseLeave:b},{children:e.map(((e,i)=>t(si,{date:e,calendarDate:n,selectedDate:a,hoverDate:f,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:m,onHover:y,numberOfDays:u},`day-${i}`)))}),i)))]}))},di=b.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${on.Neutral[8]};

    ${e=>{if("input"===e.$type)return v`
                border: 1px solid ${on.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,ui=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:d})=>{const u=Zr.isDisabledDay(e,l,i,o),h=!u||s,{start:f,end:g}=Zr.getWeekStartEnd(ta.toDayjs(r)),{start:p,end:m}=Zr.getWeekStartEnd(ta.toDayjs(a)),y=r&&e.isBetween(f,g,"day","[]"),b=a&&e.isBetween(p,m,"day","[]"),v=y&&e.isSame(f)||b&&e.isSame(p),D=y&&e.isSame(g)||b&&e.isSame(m),$={date:e,calendarDate:n,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(ii,Object.assign({},$,(()=>{const t={};return y||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":_().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&b?(t="hover-current",e.shadow=!0,e.circleShadow=v||D):y?t="selected-outline":b&&(t="hover-dash"),t&&(v?e.circleLeft=t:e.bgLeft=t,D?e.circleRight=t:e.bgRight=t),e})()))},hi=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:l,minDate:s,maxDate:c,allowDisabledSelection:d})=>{const u=g((()=>Zr.generateDays(n)),[n]),[h,f]=o(""),p=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");i(n),e&&!_(e).isSame(n,"month")&&f("")},m=(e,t)=>{t&&!d||(f(e),l(e))},y=()=>{f(""),l("")};return e(Pa,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,n)=>t(Ia,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:_(e).format("ddd")}))},`week-day-${n}`))),u.map(((e,i)=>t(_a,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(ui,{date:e,calendarDate:n,selectedDate:a,hoverDate:h,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:p,onHover:m},`day-${i}`)))}),i)))]}))},fi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:a,onDismiss:o,value:l,endValue:s,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:g,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:D=!1},$)=>{const S=i(),w=i(void 0);p($,(()=>({reset(){S.current.resetView()},setCalendarDate(e){S.current.setCalendarDate(e)}})));const F=e=>{const t=e.format("YYYY-MM-DD");S.current.setCalendarDate(t),B(t)},x=e=>{O(e)},B=e=>{r&&r(e)},O=e=>{a&&a(e)},H=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(di,Object.assign({$type:m},{children:t(Na,Object.assign({type:m,ref:S,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!s;break;case"week":e=!l&&!s}return e})(),onDismiss:o,minDate:h,maxDate:f,selectWithinRange:y,currentFocus:c,selectedStartDate:l,selectedEndDate:s,allowDisabledSelection:g,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||H(e),w.current=e},initialCalendarDate:b},{children:({calendarDate:n})=>(n=>{switch(u){case"week":return t(hi,{calendarDate:n,disabledDates:e,selectedStartDate:l,minDate:h,maxDate:f,allowDisabledSelection:g,onSelect:F,onHover:x});case"fixed-range":return t(ci,{calendarDate:n,disabledDates:e,selectedStartDate:l,minDate:h,maxDate:f,allowDisabledSelection:g,onSelect:F,onHover:x,numberOfDays:v});default:return t(li,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:l,selectedEndDate:s,minDate:h,maxDate:f,isNewSelection:y,allowDisabledSelection:g,showActiveMonthDaysOnly:D,onSelect:F,onHover:x})}})(n)}))}))})),gi=a.forwardRef(((e,n)=>{var{width:r}=e,a=W(e,["width"]);return t(Lr,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(fi,Object.assign({ref:n},a))}))})),pi=b.div`
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
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,mi=b.div`
    width: 100%; // Force next flex item to break to next line
`,yi=b.div`
    display: flex;
    flex: 1;
    align-items: center;
`,bi=b(T)`
    color: ${on.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,vi=b.div`
    position: absolute;
    background: ${e=>e.$error?on.Validation.Red.Border(e):on.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return v`
                    opacity: 1;
                `;case"end":return v`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return v`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return v`
                display: none;
            `}}
`,Di=({children:n,currentActive:r,error:a,className:i,wrap:o})=>{const[l,s]=n;return e(pi,Object.assign({className:i,$wrap:o},{children:[t(yi,Object.assign({"data-id":"range-container-elem1-container"},{children:l})),t(bi,{}),o&&t(mi,{}),t(yi,Object.assign({"data-id":"range-container-elem2-container"},{children:s})),t(vi,{"data-id":"range-container-indicator",$position:r,$error:a,$wrap:o})]}))},$i=v`
    border: 1px solid ${on.Accent.Light[1]};
    box-shadow: ${cn.InputBoxShadow};
`,Si=v`
    border: 1px solid ${on.Accent.Light[1]};
    box-shadow: none;
`,wi=v`
    border: 1px solid ${on.Neutral[5]};
    box-shadow: none;
`,Fi=v`
    border: 1px solid ${on.Validation.Red.Border};
    box-shadow: ${cn.InputErrorBoxShadow};
`,xi=b.div`
    border: 1px solid ${on.Neutral[5]};
    border-radius: 4px;
    background: ${on.Neutral[8]};

    :focus-within {
        ${$i}
    }
    ${e=>e.$focused&&$i}

    ${e=>e.$readOnly?v`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Si}
                }
                ${e.$focused&&Si}
            `:e.$disabled?v`
                background: ${on.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${wi}
                }
                ${e.$focused&&wi}
            `:e.$error?v`
                border: 1px solid ${on.Validation.Red.Border};

                :focus-within {
                    ${Fi}
                }
                ${e.$focused&&Fi}
            `:void 0}
`,Bi=b(xi)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Oi=b.input`
    ${e=>$n("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${on.Neutral[1]};
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
        color: ${on.Neutral[3]};
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
`;b.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${on.Primary};
    }
`;const Hi=b.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ki=b.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return v`
                ${Ei}, ${Yi} {
                    color: ${on.Neutral[4]};
                }
            `}}
`,Ei=b(Oi)`
    background: transparent;
    text-align: center;
`,Mi=b(Ei)`
    width: 2rem;
    margin-right: 0.25rem;
`,Ai=b(Ei)`
    width: 2.5rem;
`,ji=b(Ei)`
    width: 3rem;
    margin-left: 0.25rem;
`,Yi=b(wn.Body)`
    ${e=>{if(e.$inactive)return v`
                color: ${on.Neutral[3](e)};
            `}}
`,Ci=b.div`
    ${$n("Body","regular")}
    background-color: ${on.Neutral[8]};
    color: ${on.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?v`
                background-color: ${on.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?v`
                display: none;
            `:void 0}
`;_.extend(Tr);const zi=a.forwardRef((({disabled:n,readOnly:r,names:a,value:l,focused:s,hoverValue:c,placeholder:d,label:h,onChange:f,onFocus:g,onBlur:m,hideInputKeyboard:y},b)=>{const v=y?"none":"numeric",[D,$,S]=ia(""),[w,F,x]=ia(""),[B,O,H]=ia(""),[k,E]=o("none"),[M,A]=o(!1),j=i(null),Y=i(null),C=i(null),z=i(null),[L,R,T]=J(c);u((()=>{const[e="",t="",n=""]=J(l);$(e),F(t),O(n),e||t||n||!j.current.contains(document.activeElement)||Y.current.focus()}),[l]),u((()=>{s||E("none"),s&&(A(!0),j.current.contains(document.activeElement)||Y.current.focus())}),[s]),p(b,(()=>({ref:j,resetPlaceholder(){A(!1)},resetInput(){const[e="",t="",n=""]=J(l);$(e),F(t),O(n)}})),[l]);const W=e=>{var t;e.preventDefault(),null===(t=Y.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;E(t)},P=e=>{const[t,n,r]=a,i={[t]:S.current,[n]:x.current,[r]:H.current},o=e.target.name,l=i[o],s=o!==r?aa.padValue(l,!0):l;switch(o){case t:i[t]=s,$(s);break;case n:i[n]=s,F(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,d=_(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[n]&&!i[r];d&&l!==s&&f(c),j.current.contains(e.relatedTarget)||(E("none"),null==m||m(u||d))},I=e=>{if(c)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:D,month:w,year:B};switch(t){case a[0]:r.day=n,$(n),2===n.length&&C.current.focus();break;case a[1]:r.month=n,F(n),2===n.length&&z.current.focus();break;case a[2]:r.year=n,O(n)}if(!r.day&&!r.month&&!r.year)return void f("");const i=`${r.year}-${r.month}-${r.day}`;_(i,"YYYY-MM-DD",!0).isValid()&&f(i)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===a[1]&&0===w.length&&Y.current.focus(),k===a[2]&&0===B.length&&C.current.focus())};function J(e){if(e){const t=_(new Date(e));return t.isValid()?[aa.padValue(t.date().toString()),aa.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Hi,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(A(!0),j.current.contains(document.activeElement)||Y.current.focus())},onFocus:e=>{n||(A(!0),s||null==g||g(e))}},{children:[e(ki,Object.assign({ref:j,$hover:!!c},{children:[t(Mi,{ref:Y,name:a[0],maxLength:2,value:null!=L?L:D,onFocus:N,onBlur:P,onChange:I,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==a[0]||r?"DD":""}),t(Yi,Object.assign({$inactive:0===D.length},{children:"/"})),t(Ai,{ref:C,name:a[1],maxLength:2,value:null!=R?R:w,onFocus:N,onBlur:P,onChange:I,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==a[1]||r?"MM":""}),t(Yi,Object.assign({$inactive:0===w.length},{children:"/"})),t(ji,{ref:z,name:a[2],maxLength:4,value:null!=T?T:B,onFocus:N,onBlur:P,onChange:I,onKeyDown:V,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==a[2]||r?"YYYY":""})]})),(()=>{if(!l&&!r&&d)return t(Ci,Object.assign({$hide:M,$disabled:n,onMouseDown:W},{children:d}))})()]}))})),Li=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Ri=b(Bi)`
    ${e=>e.$wrap&&v`
            padding: 0.75rem 1rem;
        `}
`,Ti=b.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&v`
            height: fit-content;
        `}
`,Wi={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Ni=n=>{var{minDate:r,maxDate:a,disabled:l,disabledDates:s,error:c,hideInputKeyboard:d,value:h,valueEnd:g,onChange:p,onFocus:y,onBlur:b,onYearMonthDisplayChange:v,withButton:D=!0,variant:$="range",numberOfDays:S=7,readOnly:w,id:F,allowDisabledSelection:x,zIndex:B}=n,O=W(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[H,k]=o(),[E,M]=o(void 0),[A,j]=o(!1),[Y,C]=o(!1),z="week"===$,L="fixed-range"===$,[{selectedStart:R,selectedEnd:T,currentFocus:N,calendarOpen:P,isStartDirty:I,isEndDirty:V,focused:J},Z]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[a,i]=m(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[a,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&Li(n,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Wi,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:z?"none":L?"start":t,calendarOpen:!w,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=i(!1),X=i(),G=i(),K=i(),q=i(),Q=(({maxWidth:e,targetRef:t})=>{const[n,r]=o(!1);return Hr({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:f((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:X});u((()=>{Z.resetRange({start:na.sanitizeInput(h),end:na.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===N?k(R):"end"===N&&k(T)}),[N]);const ee=e=>{"Enter"!==e.code||D||(R&&T?(Z.done({start:R,end:T}),null==p||p(R,T)):(Z.dismiss(),X.current.focus(),K.current.resetPlaceholder(),q.current.resetPlaceholder()))},te=e=>{if(ge(e))return void(U.current=!0);if(Z.changeStart(e),G.current.setCalendarDate(e),U.current=!1,!e)return void(D||T||!V||(Z.resetRange({start:"",end:""}),null==p||p("","")));if(!T)return void Z.focus("end");if(_(e).isAfter(T,"day"))Z.reselectEnd();else{if(V)return D?void 0:(Z.done({start:e,end:T}),void(null==p||p(e,T)));Z.focus("end")}},ne=e=>{if(ge(e))return void(U.current=!0);if(_(e).isBefore(R,"day"))return Z.changeStart(e),G.current.setCalendarDate(e),void Z.reselectEnd();if(Z.changeEnd(e),G.current.setCalendarDate(e),e){if(R)return D?void 0:(Z.done({start:R,end:e}),void(null==p||p(R,e)));Z.focus("start")}else D||R||!I||(Z.resetRange({start:"",end:""}),null==p||p("",""))},re=e=>{if(ge(e))return void(U.current=!0);if(Z.changeStart(e),G.current.setCalendarDate(e),U.current=!1,!e)return void(D?Z.changeEnd(""):(Z.resetRange({start:"",end:""}),null==p||p("","")));const t=_(e).format("YYYY-MM-DD"),n=_(t).add(S-1,"day").format("YYYY-MM-DD");return Z.changeStart(t),Z.changeEnd(n),U.current=!1,D?void 0:(Z.done({start:t,end:n}),void(null==p||p(t,n)))},ae=()=>{w||l||J||(Z.focus("start"),null==y||y())},ie=e=>{!J||P||X.current.contains(e.relatedTarget)||(Z.blur(),j(!1),C(!1),K.current.resetPlaceholder(),q.current.resetPlaceholder(),null==b||b())},oe=e=>t=>{t.stopPropagation(),w||(Z.focus(e),le(),se(),J||null==y||y())},le=()=>{if(z){const e=ta.toDayjs(R).startOf("week").format("YYYY-MM-DD");j(!0),C(!0),k(e)}},se=()=>{L&&(C(!0),k(R))},ce=e=>{e&&!U.current||(Z.resetStart(),K.current.resetInput())},de=e=>{e&&!U.current||(Z.resetEnd(),q.current.resetInput())},ue=e=>{switch($){case"week":(e=>{const t=_(e).startOf("week").format("YYYY-MM-DD"),n=_(e).endOf("week").format("YYYY-MM-DD");if(Z.changeStart(t),Z.changeEnd(n),U.current=!1,!D)Z.done({start:t,end:n}),null==p||p(t,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?te(e):"end"===N&&ne(e)}},he=e=>{switch(X.current.focus(),e){case"reset":Z.cancel();break;case"confirmed":Z.done({start:R,end:T}),null==p||p(R,T)}},fe=e=>{M(e)},ge=e=>!x&&e&&na.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:a}),pe=e=>{let t={start:void 0,end:void 0};switch($){case"range":t={start:"start"===N?E:void 0,end:"end"===N?E:void 0};break;case"week":if(!E)return;t={start:_(E).startOf("week").format("YYYY-MM-DD"),end:_(E).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!E)return;t={start:_(E).format("YYYY-MM-DD"),end:_(E).add(S-1,"day").format("YYYY-MM-DD")}}return t[e]};return t(zr,{enabled:!w&&!l,isOpen:P,onClose:()=>{Z.blur(),j(!1),C(!1),K.current.resetPlaceholder(),q.current.resetPlaceholder(),null==b||b()},onDismiss:()=>{Z.dismiss(),X.current.focus(),K.current.resetPlaceholder(),q.current.resetPlaceholder()},renderElement:()=>t(Ri,Object.assign({ref:X,tabIndex:-1,onFocus:ae,onBlur:ie,$focused:J,$disabled:l,$readOnly:w,$error:c,$wrap:Q,id:F,"data-testid":O["data-testid"],onKeyDown:ee},O,{children:e(Di,Object.assign({currentActive:N,wrap:Q,error:c},{children:[t(Ti,Object.assign({$wrap:Q},{children:t(zi,{ref:K,placeholder:"From",names:["start-day","start-month","start-year"],value:R,disabled:l,readOnly:A||w,focused:"start"===N,hoverValue:pe("start"),onChange:L?re:te,onFocus:oe("start"),onBlur:ce,hideInputKeyboard:d})})),t(Ti,Object.assign({$wrap:Q},{children:t(zi,{ref:q,placeholder:"To",names:["end-day","end-month","end-year"],value:T,disabled:l,readOnly:Y||w,focused:"end"===N,hoverValue:pe("end"),onChange:ne,onFocus:oe("end"),onBlur:de,hideInputKeyboard:d})}))]}))})),renderDropdown:({elementWidth:e})=>t(gi,{ref:G,type:"input",variant:$,initialCalendarDate:H,withButton:D,value:R,endValue:T,selectWithinRange:I||V,currentFocus:N,disabledDates:s,minDate:r,maxDate:a,allowDisabledSelection:x,onSelect:ue,onDismiss:he,onHover:fe,onYearMonthDisplayChange:v,numberOfDays:S,width:e}),customZIndex:B,offset:16})};export{Ni as DateRangeInput};
//# sourceMappingURL=index.js.map
