import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as h,useLayoutEffect as f,useCallback as p,createContext as g,useContext as m,Children as b,useMemo as v,useImperativeHandle as y,useReducer as x,lazy as w,Suspense as $,createElement as C,forwardRef as S}from"react";import{ICircleFillIcon as k}from"@lifesg/react-icons/i-circle-fill";import D,{css as F,isStyledComponent as _,ThemeContext as E,keyframes as O,useTheme as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import{CrossIcon as M}from"@lifesg/react-icons/cross";import{useFloatingTree as A,FloatingTree as B,useFloatingNodeId as z,FloatingNode as j,useFloating as L,useTransitionStatus as R,useDismiss as P,useInteractions as N,FloatingFocusManager as H,autoUpdate as W,offset as Y,flip as V,shift as U,limitShift as K,size as q,useClick as Z,useHover as G,useFocus as Q,FloatingPortal as X,useTransitionStyles as J}from"@floating-ui/react";import ee,{findDOMNode as te,unstable_batchedUpdates as re}from"react-dom";import{ExclamationCircleFillIcon as ne}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as oe}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ie}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as ae}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as se,PencilIcon as le,EraserIcon as de,TickCircleFillIcon as ce,SquareIcon as ue,SquareFillIcon as he,SquareTickFillIcon as fe,MinusSquareFillIcon as pe,CrossIcon as ge,ChevronDownIcon as me}from"@lifesg/react-icons";import{SquareIcon as be}from"@lifesg/react-icons/square";import{SquareFillIcon as ve}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as ye}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as xe}from"@lifesg/react-icons/tick";import{MagnifierIcon as we}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as $e}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ce}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as Se}from"@lifesg/react-icons/eye";import{EyeSlashIcon as ke}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as De}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as Fe}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as _e}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Ee}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Oe}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Te}from"@lifesg/react-icons/circle";import{CircleDotIcon as Ie}from"@lifesg/react-icons/circle-dot";function Me(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function Ae(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var je={exports:{}};je.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,a=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,c=k.p(e),f=function(e,t){var o=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?f(1,0):f(31,11);case d:return n?f(1,m):f(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return f(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,c){var h,f=this;n=Number(n);var p=k.p(c),g=function(e){var t=S(f);return k.w(t.date(t.date()+Math.round(e*n)),f)};if(p===d)return this.set(d,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[i]=t,h[a]=r,h[o]=e,h)[p]||1,b=this.$d.getTime()+n*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return k.s(i%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,g=this,m=k.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(g,b)};switch(m){case u:p=x()/12;break;case d:p=x();break;case c:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:k.a(p)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),F=D.prototype;return S.prototype=F,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Le=ze(je.exports),Re={exports:{}};Re.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,f=new Date,p=a||(o||i?1:f.getDate()),g=o||f.getFullYear(),m=0;o&&!i||(m=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Pe=ze(Re.exports),Ne={exports:{}};Ne.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var He=ze(Ne.exports),We={exports:{}};We.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ye=ze(We.exports),Ve={exports:{}};Ve.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ue,Ke,qe=ze(Ve.exports),Ze={exports:{}};Ze.exports=(Ue={year:0,month:1,day:2,hour:3,minute:4,second:5},Ke={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Ke[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ke[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Ue[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ge,Qe=ze(Ze.exports);Le.extend(He),Le.extend(qe),Le.extend(Ye),Le.extend(Pe),Le.extend(Qe),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Le(t).startOf("week");return Xe(r).map((e=>Je(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Je(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Le(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Le(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Le(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Le(n):void 0,o?Le(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ge||(Ge={}));const Xe=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Je=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},et=[1,3,5,7,8,10,12],tt=[4,6,9,11];var rt,nt;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":et.includes(i)?Math.min(o,31).toString():tt.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Le(e,r);return Le(t,r).diff(n,"minute")},e.toDayjs=e=>e?Le(e):Le(),e.addMinutesToTime=(e,t,r="HH:mm")=>Le(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Le(e).isSame(Le(t),r)}(rt||(rt={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Le(e).isBefore(n,"day"))||!(!o||!Le(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const r=t(e);if(Le(r,"YYYY-MM-DD",!0).isValid())return r}return""};const t=e=>{const t=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";const[,r,n,o]=t;if(r.length<=2||parseInt(r,10)<100)return"";return`${r.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(nt||(nt={}));const ot=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},it=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(ot())return()=>{for(const e of r)e()}};var at,st;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(at||(at={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(st||(st={}));var lt=function(e,t){return lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},lt(e,t)};var dt=function(){return dt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},dt.apply(this,arguments)};var ct="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ut=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ht="object"==typeof ct&&ct&&ct.Object===Object&&ct,ft="object"==typeof self&&self&&self.Object===Object&&self,pt=ht||ft||Function("return this")(),gt=pt,mt=function(){return gt.Date.now()},bt=/\s/;var vt=function(e){for(var t=e.length;t--&&bt.test(e.charAt(t)););return t},yt=/^\s+/;var xt=function(e){return e?e.slice(0,vt(e)+1).replace(yt,""):e},wt=pt.Symbol,$t=wt,Ct=Object.prototype,St=Ct.hasOwnProperty,kt=Ct.toString,Dt=$t?$t.toStringTag:void 0;var Ft=function(e){var t=St.call(e,Dt),r=e[Dt];try{e[Dt]=void 0;var n=!0}catch(e){}var o=kt.call(e);return n&&(t?e[Dt]=r:delete e[Dt]),o},_t=Object.prototype.toString;var Et=Ft,Ot=function(e){return _t.call(e)},Tt=wt?wt.toStringTag:void 0;var It=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Tt&&Tt in Object(e)?Et(e):Ot(e)},Mt=function(e){return null!=e&&"object"==typeof e};var At=xt,Bt=ut,zt=function(e){return"symbol"==typeof e||Mt(e)&&"[object Symbol]"==It(e)},jt=/^[-+]0x[0-9a-f]+$/i,Lt=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,Pt=parseInt;var Nt=ut,Ht=mt,Wt=function(e){if("number"==typeof e)return e;if(zt(e))return NaN;if(Bt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Bt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=At(e);var r=Lt.test(e);return r||Rt.test(e)?Pt(e.slice(2),r?2:8):jt.test(e)?NaN:+e},Yt=Math.max,Vt=Math.min;var Ut=function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function g(){var e=Ht();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Vt(r,i-(e-d)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Ht(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(g,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Wt(t)||0,Nt(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Yt(Wt(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Ht())},b},Kt=Ut,qt=ut;var Zt=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qt(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Kt(e,t,{leading:n,maxWait:t,trailing:o})},Gt=function(e,t,r,n){switch(t){case"debounce":return Ut(e,r,n);case"throttle":return Zt(e,r,n);default:return e}},Qt=function(e){return"function"==typeof e},Xt=function(){return"undefined"==typeof window},Jt=function(e){return e instanceof Element||e instanceof HTMLDocument},er=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Qt(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Xt()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Xt())return null;if(t)return document.querySelector(t);if(n&&Jt(n))return n;if(r.targetRef&&Jt(r.targetRef.current))return r.targetRef.current;var o=te(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=er(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Xt()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Qt(t)?"renderProp":Qt(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Xt()||(r.resizeHandler=Gt(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}lt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Xt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var tr=Xt()?h:f;function rr(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(r),b=a(null),v=null!=f?f:b,y=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return tr((function(){if(!Xt()){var e=er(g,$,c,h);y.current=Gt((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Xt()&&e({width:n,height:o}),m.current=!1}))}),n,i,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,h,g,p,v.current]),dt({ref:v},w)}function nr(e){const t=a(null);f((()=>{t.current=e}),[e]);return p(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const or=(e,t,r="window",n)=>{const o=a();h((()=>{o.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},ir=()=>{const[e,t]=s(!1);return h((()=>{t(!0)}),[]),e};function ar({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const sr=e=>{const t=(e=>{const t=a(e),r=a();return h((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},lr=e=>{const[t,r]=s(e),n=a(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]};var dr,cr={exports:{}};dr=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),i=c(i);break;case"resolution":o=d(o),i=d(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function d(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in i=Object(arguments[l]))r.call(i,d)&&(s[d]=i[d]);if(t){a=t(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+r+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](t,d,s,r,null,o)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+r+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(d),arrayOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,o,i+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:p((function(t,r,n,o,i){var a=t[r];return e(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new f("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||c;return new f("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new f("Invalid "+o+" `"+i+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,o,i+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new f("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),d}return p((function(t,r,n,o,i){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,o,i,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,o,i){var s=t[r],l=v(s);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return m(n,o,i,d,y(c));var u=c(s,d,n,o,i+"."+d,a);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,o,l){var d=t[r],c=v(d);if("object"!==c)return new f("Invalid "+o+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return m(n,o,l,h,y(p));if(!p)return new f("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(d,h,n,o,l+"."+h,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},o=0;function i(i,s,l,d,u,h,p){if(d=d||c,h=h||l,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=d+":"+l;!r[m]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new f("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new f("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case d:case c:case o:case a:case i:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=d,$=c,C=l,S=s,k=r,D=u,F=o,_=g,E=p,O=n,T=a,I=i,M=h,A=!1;function B(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=D,t.Fragment=F,t.Lazy=_,t.Memo=E,t.Portal=O,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,r,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=o(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);t.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),f=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=u();return(0,o.useEffect)((function(){p&&r&&r(f)}),[f]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ur=cr.exports=dr(o),hr=Array.isArray,fr="object"==typeof Be&&Be&&Be.Object===Object&&Be,pr=fr,gr="object"==typeof self&&self&&self.Object===Object&&self,mr=pr||gr||Function("return this")(),br=mr.Symbol,vr=br,yr=Object.prototype,xr=yr.hasOwnProperty,wr=yr.toString,$r=vr?vr.toStringTag:void 0;var Cr=function(e){var t=xr.call(e,$r),r=e[$r];try{e[$r]=void 0;var n=!0}catch(e){}var o=wr.call(e);return n&&(t?e[$r]=r:delete e[$r]),o},Sr=Object.prototype.toString;var kr=Cr,Dr=function(e){return Sr.call(e)},Fr=br?br.toStringTag:void 0;var _r=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fr&&Fr in Object(e)?kr(e):Dr(e)};var Er=function(e){return null!=e&&"object"==typeof e},Or=_r,Tr=Er;var Ir=function(e){return"symbol"==typeof e||Tr(e)&&"[object Symbol]"==Or(e)},Mr=hr,Ar=Ir,Br=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zr=/^\w*$/;var jr=function(e,t){if(Mr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ar(e))||(zr.test(e)||!Br.test(e)||null!=t&&e in Object(t))};var Lr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Rr=_r,Pr=Lr;var Nr,Hr=function(e){if(!Pr(e))return!1;var t=Rr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Wr=mr["__core-js_shared__"],Yr=(Nr=/[^.]+$/.exec(Wr&&Wr.keys&&Wr.keys.IE_PROTO||""))?"Symbol(src)_1."+Nr:"";var Vr=function(e){return!!Yr&&Yr in e},Ur=Function.prototype.toString;var Kr=function(e){if(null!=e){try{return Ur.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qr=Hr,Zr=Vr,Gr=Lr,Qr=Kr,Xr=/^\[object .+?Constructor\]$/,Jr=Function.prototype,en=Object.prototype,tn=Jr.toString,rn=en.hasOwnProperty,nn=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var on=function(e,t){return null==e?void 0:e[t]},an=function(e){return!(!Gr(e)||Zr(e))&&(qr(e)?nn:Xr).test(Qr(e))},sn=on;var ln=function(e,t){var r=sn(e,t);return an(r)?r:void 0},dn=ln(Object,"create"),cn=dn;var un=function(){this.__data__=cn?cn(null):{},this.size=0};var hn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},fn=dn,pn=Object.prototype.hasOwnProperty;var gn=function(e){var t=this.__data__;if(fn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pn.call(t,e)?t[e]:void 0},mn=dn,bn=Object.prototype.hasOwnProperty;var vn=function(e){var t=this.__data__;return mn?void 0!==t[e]:bn.call(t,e)},yn=dn;var xn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yn&&void 0===t?"__lodash_hash_undefined__":t,this},wn=un,$n=hn,Cn=gn,Sn=vn,kn=xn;function Dn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Dn.prototype.clear=wn,Dn.prototype.delete=$n,Dn.prototype.get=Cn,Dn.prototype.has=Sn,Dn.prototype.set=kn;var Fn=Dn;var _n=function(){this.__data__=[],this.size=0};var En=function(e,t){return e===t||e!=e&&t!=t},On=En;var Tn=function(e,t){for(var r=e.length;r--;)if(On(e[r][0],t))return r;return-1},In=Tn,Mn=Array.prototype.splice;var An=function(e){var t=this.__data__,r=In(t,e);return!(r<0)&&(r==t.length-1?t.pop():Mn.call(t,r,1),--this.size,!0)},Bn=Tn;var zn=function(e){var t=this.__data__,r=Bn(t,e);return r<0?void 0:t[r][1]},jn=Tn;var Ln=function(e){return jn(this.__data__,e)>-1},Rn=Tn;var Pn=function(e,t){var r=this.__data__,n=Rn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Nn=_n,Hn=An,Wn=zn,Yn=Ln,Vn=Pn;function Un(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Un.prototype.clear=Nn,Un.prototype.delete=Hn,Un.prototype.get=Wn,Un.prototype.has=Yn,Un.prototype.set=Vn;var Kn=Un,qn=ln(mr,"Map"),Zn=Fn,Gn=Kn,Qn=qn;var Xn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Jn=function(e,t){var r=e.__data__;return Xn(t)?r["string"==typeof t?"string":"hash"]:r.map},eo=Jn;var to=function(e){var t=eo(this,e).delete(e);return this.size-=t?1:0,t},ro=Jn;var no=function(e){return ro(this,e).get(e)},oo=Jn;var io=function(e){return oo(this,e).has(e)},ao=Jn;var so=function(e,t){var r=ao(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},lo=function(){this.size=0,this.__data__={hash:new Zn,map:new(Qn||Gn),string:new Zn}},co=to,uo=no,ho=io,fo=so;function po(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}po.prototype.clear=lo,po.prototype.delete=co,po.prototype.get=uo,po.prototype.has=ho,po.prototype.set=fo;var go=po,mo=go;function bo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(bo.Cache||mo),r}bo.Cache=mo;var vo=bo;var yo=function(e){var t=vo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},xo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wo=/\\(\\)?/g,$o=yo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xo,(function(e,r,n,o){t.push(n?o.replace(wo,"$1"):r||e)})),t}));var Co=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},So=hr,ko=Ir,Do=br?br.prototype:void 0,Fo=Do?Do.toString:void 0;var _o=function e(t){if("string"==typeof t)return t;if(So(t))return Co(t,e)+"";if(ko(t))return Fo?Fo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Eo=_o;var Oo=hr,To=jr,Io=$o,Mo=function(e){return null==e?"":Eo(e)};var Ao=function(e,t){return Oo(e)?e:To(e,t)?[e]:Io(Mo(e))},Bo=Ir;var zo=function(e){if("string"==typeof e||Bo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},jo=Ao,Lo=zo;var Ro=function(e,t){for(var r=0,n=(t=jo(t,e)).length;null!=e&&r<n;)e=e[Lo(t[r++])];return r&&r==n?e:void 0},Po=Ro;var No=function(e,t,r){var n=null==e?void 0:Po(e,t);return void 0===n?r:n},Ho=ze(No);const Wo=(e,t,r)=>Ho(r,t)||Ho(e,t),Yo=(e,t)=>{const r=t||e.defaultValue;return Ho(e.collections,r)},Vo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Uo=e=>t=>{var r;const n=t.theme,o=Yo(Vo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Wo(o,e,n.overrides.border)}px`:`${o[e]}px`},Ko={"width-005":Uo("width-005"),"width-010":Uo("width-010"),"width-020":Uo("width-020"),"width-040":Uo("width-040"),solid:(qo="solid",e=>{var t;const r=e.theme,n=Yo(Vo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Wo(n,qo,r.overrides.border):n[qo];return"function"==typeof o?o(e):o})};var qo;const Zo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Go={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ti={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ri={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ni={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oi={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ii={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},ai={collections:{lifesg:Qo,bookingsg:Zo,rbs:ti,mylegacy:Xo,ccube:Go,oneservice:Jo,pa:ei,a11yplayground:ri,supportgowhere:ni,imda:oi,spf:ii},defaultValue:"lifesg"},si={collections:{lifesg:Qo,bookingsg:Zo,rbs:ti,mylegacy:Xo,ccube:Go,oneservice:Jo,pa:ei,a11yplayground:ri,supportgowhere:ni,imda:oi,spf:ii},defaultValue:"lifesg"},li=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Yo(o?si:ai,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Wo(i,e,s):i[e]},di={"brand-10":li("brand-10"),"brand-20":li("brand-20"),"brand-30":li("brand-30"),"brand-40":li("brand-40"),"brand-50":li("brand-50"),"brand-60":li("brand-60"),"brand-70":li("brand-70"),"brand-80":li("brand-80"),"brand-90":li("brand-90"),"brand-95":li("brand-95"),"brand-100":li("brand-100"),"primary-10":li("primary-10"),"primary-20":li("primary-20"),"primary-30":li("primary-30"),"primary-40":li("primary-40"),"primary-50":li("primary-50"),"primary-60":li("primary-60"),"primary-70":li("primary-70"),"primary-80":li("primary-80"),"primary-90":li("primary-90"),"primary-95":li("primary-95"),"primary-100":li("primary-100"),"secondary-10":li("secondary-10"),"secondary-20":li("secondary-20"),"secondary-30":li("secondary-30"),"secondary-40":li("secondary-40"),"secondary-50":li("secondary-50"),"secondary-60":li("secondary-60"),"secondary-70":li("secondary-70"),"secondary-80":li("secondary-80"),"secondary-90":li("secondary-90"),"secondary-95":li("secondary-95"),"secondary-100":li("secondary-100"),"neutral-10":li("neutral-10"),"neutral-20":li("neutral-20"),"neutral-30":li("neutral-30"),"neutral-40":li("neutral-40"),"neutral-50":li("neutral-50"),"neutral-60":li("neutral-60"),"neutral-70":li("neutral-70"),"neutral-80":li("neutral-80"),"neutral-90":li("neutral-90"),"neutral-95":li("neutral-95"),"neutral-100":li("neutral-100"),"success-10":li("success-10"),"success-20":li("success-20"),"success-30":li("success-30"),"success-40":li("success-40"),"success-50":li("success-50"),"success-60":li("success-60"),"success-70":li("success-70"),"success-80":li("success-80"),"success-90":li("success-90"),"success-95":li("success-95"),"success-100":li("success-100"),"warning-10":li("warning-10"),"warning-20":li("warning-20"),"warning-30":li("warning-30"),"warning-40":li("warning-40"),"warning-50":li("warning-50"),"warning-60":li("warning-60"),"warning-70":li("warning-70"),"warning-80":li("warning-80"),"warning-90":li("warning-90"),"warning-95":li("warning-95"),"warning-100":li("warning-100"),"error-10":li("error-10"),"error-20":li("error-20"),"error-30":li("error-30"),"error-40":li("error-40"),"error-50":li("error-50"),"error-60":li("error-60"),"error-70":li("error-70"),"error-80":li("error-80"),"error-90":li("error-90"),"error-95":li("error-95"),"error-100":li("error-100"),"info-10":li("info-10"),"info-20":li("info-20"),"info-30":li("info-30"),"info-40":li("info-40"),"info-50":li("info-50"),"info-60":li("info-60"),"info-70":li("info-70"),"info-80":li("info-80"),"info-90":li("info-90"),"info-95":li("info-95"),"info-100":li("info-100"),white:li("white"),black:li("black"),"primary-inverse":li("primary-inverse")},ci={text:li("neutral-20"),"text-subtle":li("neutral-30"),"text-subtler":li("neutral-50"),"text-subtlest":li("neutral-60"),"text-primary":li("primary-50"),"text-primary-strongest":li("primary-20"),"text-hover":li("primary-40"),"text-selected":li("primary-50"),"text-selected-hover":li("primary-40"),"text-disabled":li("neutral-50"),"text-disabled-subtle":li("neutral-60"),"text-disabled-subtlest":li("neutral-80"),"text-selected-disabled":li("neutral-20"),"text-success":li("success-40"),"text-warning":li("warning-40"),"text-error":li("error-40"),"text-info":li("info-40"),"text-inverse":li("white"),icon:li("neutral-50"),"icon-subtle":li("neutral-60"),"icon-strongest":li("neutral-20"),"icon-primary":li("primary-50"),"icon-primary-subtle":li("primary-60"),"icon-primary-subtlest":li("primary-70"),"icon-hover":li("primary-40"),"icon-selected":li("primary-50"),"icon-selected-hover":li("primary-40"),"icon-disabled":li("neutral-50"),"icon-disabled-subtle":li("neutral-60"),"icon-selected-disabled":li("neutral-60"),"icon-success":li("success-50"),"icon-warning":li("warning-60"),"icon-error":li("error-50"),"icon-error-strong":li("error-40"),"icon-info":li("info-50"),"icon-inverse":li("white"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-90"),"border-strong":li("neutral-70"),"border-stronger":li("neutral-50"),"border-primary":li("primary-50"),"border-primary-subtle":li("primary-60"),"border-hover":li("primary-90"),"border-hover-strong":li("primary-60"),"border-selected":li("primary-50"),"border-selected-subtle":li("primary-70"),"border-selected-subtlest":li("primary-90"),"border-selected-hover":li("primary-40"),"border-focus":li("primary-60"),"border-focus-strong":li("primary-50"),"border-disabled":li("neutral-90"),"border-selected-disabled":li("neutral-70"),"border-success":li("success-60"),"border-warning":li("warning-60"),"border-error":li("error-60"),"border-error-focus":li("error-60"),"border-error-focus-strong":li("error-40"),"border-error-strong":li("error-40"),"border-info":li("info-60"),bg:li("white"),"bg-strong":li("neutral-100"),"bg-stronger":li("neutral-95"),"bg-strongest":li("neutral-90"),"bg-hover":li("primary-95"),"bg-hover-strong":li("primary-90"),"bg-hover-subtle":li("primary-100"),"bg-hover-neutral":li("neutral-100"),"bg-hover-neutral-strong":li("neutral-90"),"bg-selected":li("primary-95"),"bg-selected-hover":li("primary-90"),"bg-selected-strong":li("primary-90"),"bg-selected-stronger":li("primary-70"),"bg-selected-strongest":li("primary-50"),"bg-selected-strongest-hover":li("primary-40"),"bg-disabled":li("neutral-95"),"bg-selected-disabled":li("neutral-95"),"bg-selected-stronger-disabled":li("neutral-70"),"bg-success":li("success-100"),"bg-success-hover":li("success-95"),"bg-success-strong":li("success-50"),"bg-success-strong-hover":li("success-40"),"bg-warning":li("warning-100"),"bg-warning-hover":li("warning-95"),"bg-warning-strong":li("warning-50"),"bg-warning-strong-hover":li("warning-40"),"bg-info":li("info-100"),"bg-info-hover":li("info-95"),"bg-info-strong":li("info-50"),"bg-info-strong-hover":li("info-40"),"bg-error":li("error-100"),"bg-error-hover":li("error-95"),"bg-error-strong":li("error-50"),"bg-error-strong-hover":li("error-40"),"bg-inverse":li("neutral-20"),"bg-inverse-subtle":li("neutral-30"),"bg-inverse-subtler":li("neutral-50"),"bg-inverse-subtlest":li("neutral-60"),"bg-inverse-hover":li("neutral-40"),"bg-primary":li("primary-50"),"bg-primary-subtle":li("primary-60"),"bg-primary-subtler":li("primary-95"),"bg-primary-subtlest":li("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":li("primary-40"),"bg-primary-subtlest-hover":li("primary-90"),"bg-primary-subtlest-selected":li("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:li("primary-50"),"hyperlink-hover":li("primary-40"),"hyperlink-visited":li("primary-40"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-50"),"focus-ring-inverse":li("white")},ui={text:li("neutral-100"),"text-subtle":li("neutral-80"),"text-subtler":li("neutral-60"),"text-subtlest":li("neutral-50"),"text-primary":li("primary-60"),"text-primary-strongest":li("primary-90"),"text-hover":li("primary-70"),"text-selected":li("primary-60"),"text-selected-hover":li("primary-70"),"text-disabled":li("neutral-60"),"text-disabled-subtle":li("neutral-50"),"text-disabled-subtlest":li("neutral-30"),"text-selected-disabled":li("neutral-90"),"text-success":li("success-70"),"text-warning":li("warning-70"),"text-error":li("error-70"),"text-info":li("info-70"),"text-inverse":li("black"),icon:li("neutral-60"),"icon-subtle":li("neutral-50"),"icon-strongest":li("neutral-90"),"icon-primary":li("primary-60"),"icon-primary-subtle":li("primary-50"),"icon-primary-subtlest":li("primary-40"),"icon-hover":li("primary-70"),"icon-selected":li("primary-60"),"icon-selected-hover":li("primary-70"),"icon-disabled":li("neutral-60"),"icon-disabled-subtle":li("neutral-50"),"icon-selected-disabled":li("neutral-50"),"icon-success":li("success-60"),"icon-warning":li("warning-50"),"icon-error":li("error-60"),"icon-error-strong":li("error-70"),"icon-info":li("info-60"),"icon-inverse":li("black"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-20"),"border-strong":li("neutral-40"),"border-stronger":li("neutral-60"),"border-primary":li("primary-60"),"border-primary-subtle":li("primary-50"),"border-hover":li("primary-20"),"border-hover-strong":li("primary-50"),"border-selected":li("primary-60"),"border-selected-subtle":li("primary-40"),"border-selected-subtlest":li("primary-20"),"border-selected-hover":li("primary-70"),"border-focus":li("primary-50"),"border-focus-strong":li("primary-60"),"border-disabled":li("neutral-20"),"border-selected-disabled":li("neutral-40"),"border-success":li("success-50"),"border-warning":li("warning-50"),"border-error":li("error-50"),"border-error-focus":li("error-50"),"border-error-focus-strong":li("error-70"),"border-error-strong":li("error-70"),"border-info":li("info-50"),bg:li("black"),"bg-strong":li("neutral-10"),"bg-stronger":li("neutral-20"),"bg-strongest":li("neutral-20"),"bg-hover":li("primary-20"),"bg-hover-strong":li("primary-20"),"bg-hover-subtle":li("primary-10"),"bg-hover-neutral":li("neutral-10"),"bg-hover-neutral-strong":li("neutral-20"),"bg-selected":li("primary-20"),"bg-selected-hover":li("primary-20"),"bg-selected-strong":li("primary-20"),"bg-selected-stronger":li("primary-40"),"bg-selected-strongest":li("primary-60"),"bg-selected-strongest-hover":li("primary-70"),"bg-disabled":li("neutral-20"),"bg-selected-disabled":li("neutral-20"),"bg-selected-stronger-disabled":li("neutral-40"),"bg-success":li("success-10"),"bg-success-hover":li("success-20"),"bg-success-strong":li("success-60"),"bg-success-strong-hover":li("success-70"),"bg-warning":li("warning-10"),"bg-warning-hover":li("warning-20"),"bg-warning-strong":li("warning-60"),"bg-warning-strong-hover":li("warning-70"),"bg-info":li("info-10"),"bg-info-hover":li("info-20"),"bg-info-strong":li("info-60"),"bg-info-strong-hover":li("info-70"),"bg-error":li("error-10"),"bg-error-hover":li("error-20"),"bg-error-strong":li("error-60"),"bg-error-strong-hover":li("error-70"),"bg-inverse":li("neutral-90"),"bg-inverse-subtle":li("neutral-80"),"bg-inverse-subtler":li("neutral-60"),"bg-inverse-subtlest":li("neutral-50"),"bg-inverse-hover":li("neutral-70"),"bg-primary":li("primary-60"),"bg-primary-subtle":li("primary-50"),"bg-primary-subtler":li("primary-20"),"bg-primary-subtlest":li("primary-10"),"bg-available":"#185339","bg-primary-hover":li("primary-70"),"bg-primary-subtlest-hover":li("primary-20"),"bg-primary-subtlest-selected":li("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:li("primary-60"),"hyperlink-hover":li("primary-70"),"hyperlink-visited":li("primary-70"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-60"),"focus-ring-inverse":li("black")},hi={text:li("neutral-30"),"text-subtle":li("neutral-40"),"text-subtler":li("neutral-50"),"text-subtlest":li("neutral-70"),"text-primary":li("neutral-10"),"text-primary-strongest":li("neutral-10"),"text-hover":li("neutral-70"),"text-selected":li("neutral-20"),"text-selected-hover":li("neutral-10"),"text-disabled":li("neutral-50"),"text-disabled-subtle":li("neutral-70"),"text-disabled-subtlest":li("neutral-80"),"text-selected-disabled":li("neutral-40"),"text-success":li("success-40"),"text-warning":li("warning-40"),"text-error":li("brand-30"),"text-info":li("neutral-40"),"text-inverse":li("neutral-100"),icon:li("neutral-40"),"icon-subtle":li("neutral-50"),"icon-strongest":li("neutral-10"),"icon-primary":li("neutral-10"),"icon-primary-subtle":li("neutral-30"),"icon-primary-subtlest":li("neutral-60"),"icon-hover":li("neutral-70"),"icon-selected":li("brand-20"),"icon-selected-hover":li("brand-10"),"icon-disabled":li("neutral-50"),"icon-disabled-subtle":li("neutral-70"),"icon-selected-disabled":li("neutral-40"),"icon-success":li("success-40"),"icon-warning":li("warning-60"),"icon-error":li("brand-30"),"icon-error-strong":li("brand-10"),"icon-info":li("neutral-40"),"icon-inverse":li("neutral-100"),"icon-primary-inverse":"#F9B371",border:li("neutral-90"),"border-strong":li("neutral-30"),"border-stronger":li("neutral-20"),"border-primary":li("neutral-40"),"border-primary-subtle":li("neutral-60"),"border-hover":li("neutral-80"),"border-hover-strong":li("neutral-10"),"border-selected":li("brand-20"),"border-selected-subtle":li("neutral-40"),"border-selected-subtlest":li("neutral-70"),"border-selected-hover":li("neutral-10"),"border-focus":li("neutral-20"),"border-focus-strong":li("neutral-10"),"border-disabled":li("neutral-90"),"border-selected-disabled":li("neutral-80"),"border-success":li("success-40"),"border-warning":li("warning-60"),"border-error":li("brand-30"),"border-error-focus":li("brand-20"),"border-error-focus-strong":li("brand-10"),"border-error-strong":li("brand-20"),"border-info":li("neutral-40"),bg:li("neutral-100"),"bg-strong":li("neutral-95"),"bg-stronger":li("neutral-90"),"bg-strongest":li("neutral-80"),"bg-hover":li("brand-90"),"bg-hover-strong":li("brand-80"),"bg-hover-subtle":li("neutral-90"),"bg-hover-neutral":li("neutral-90"),"bg-hover-neutral-strong":li("neutral-90"),"bg-selected":li("brand-100"),"bg-selected-hover":li("brand-30"),"bg-selected-strong":li("brand-50"),"bg-selected-stronger":li("brand-40"),"bg-selected-strongest":li("brand-20"),"bg-selected-strongest-hover":li("brand-10"),"bg-disabled":li("neutral-90"),"bg-selected-disabled":li("neutral-90"),"bg-selected-stronger-disabled":li("neutral-80"),"bg-success":li("success-100"),"bg-success-hover":li("success-95"),"bg-success-strong":li("success-50"),"bg-success-strong-hover":li("success-40"),"bg-warning":li("warning-100"),"bg-warning-hover":li("warning-95"),"bg-warning-strong":li("warning-50"),"bg-warning-strong-hover":li("warning-40"),"bg-info":li("neutral-95"),"bg-info-hover":li("info-95"),"bg-info-strong":li("info-50"),"bg-info-strong-hover":li("info-40"),"bg-error":li("brand-100"),"bg-error-hover":li("error-95"),"bg-error-strong":li("error-50"),"bg-error-strong-hover":li("error-40"),"bg-inverse":li("neutral-40"),"bg-inverse-subtle":li("neutral-60"),"bg-inverse-subtler":li("neutral-70"),"bg-inverse-subtlest":li("neutral-80"),"bg-inverse-hover":li("neutral-30"),"bg-primary":li("brand-20"),"bg-primary-subtle":li("brand-60"),"bg-primary-subtler":li("brand-80"),"bg-primary-subtlest":li("brand-100"),"bg-available":li("success-60"),"bg-primary-hover":li("brand-10"),"bg-primary-subtlest-hover":li("brand-80"),"bg-primary-subtlest-selected":li("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:li("neutral-10"),"hyperlink-hover":li("neutral-40"),"hyperlink-visited":li("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":li("primary-50"),"focus-ring-inverse":li("white")},fi={text:li("neutral-20"),"text-subtle":li("neutral-30"),"text-subtler":li("neutral-50"),"text-subtlest":li("neutral-60"),"text-primary":li("primary-50"),"text-primary-strongest":li("primary-20"),"text-hover":li("primary-40"),"text-selected":li("primary-50"),"text-selected-hover":li("primary-40"),"text-disabled":li("neutral-50"),"text-disabled-subtle":li("neutral-60"),"text-disabled-subtlest":li("neutral-80"),"text-selected-disabled":li("neutral-20"),"text-success":li("success-40"),"text-warning":li("warning-40"),"text-error":li("error-40"),"text-info":li("info-40"),"text-inverse":li("white"),icon:li("neutral-50"),"icon-subtle":li("neutral-60"),"icon-strongest":li("neutral-20"),"icon-primary":li("primary-50"),"icon-primary-subtle":li("primary-60"),"icon-primary-subtlest":li("primary-70"),"icon-hover":li("primary-40"),"icon-selected":li("primary-50"),"icon-selected-hover":li("primary-40"),"icon-disabled":li("neutral-50"),"icon-disabled-subtle":li("neutral-60"),"icon-selected-disabled":li("neutral-60"),"icon-success":li("success-50"),"icon-warning":li("warning-60"),"icon-error":li("error-50"),"icon-error-strong":li("error-40"),"icon-info":li("info-50"),"icon-inverse":li("white"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-90"),"border-strong":li("neutral-70"),"border-stronger":li("neutral-50"),"border-primary":li("primary-50"),"border-primary-subtle":li("primary-60"),"border-hover":li("primary-90"),"border-hover-strong":li("primary-60"),"border-selected":li("primary-50"),"border-selected-subtle":li("primary-70"),"border-selected-subtlest":li("primary-90"),"border-selected-hover":li("primary-40"),"border-focus":li("primary-60"),"border-focus-strong":li("primary-50"),"border-disabled":li("neutral-90"),"border-selected-disabled":li("neutral-70"),"border-success":li("success-60"),"border-warning":li("warning-60"),"border-error":li("error-60"),"border-error-focus":li("error-60"),"border-error-focus-strong":li("error-40"),"border-error-strong":li("error-40"),"border-info":li("info-60"),bg:li("white"),"bg-strong":li("neutral-100"),"bg-stronger":li("neutral-95"),"bg-strongest":li("neutral-90"),"bg-hover":li("primary-95"),"bg-hover-strong":li("primary-90"),"bg-hover-subtle":li("primary-100"),"bg-hover-neutral":li("neutral-100"),"bg-hover-neutral-strong":li("neutral-90"),"bg-selected":li("primary-95"),"bg-selected-hover":li("primary-90"),"bg-selected-strong":li("primary-90"),"bg-selected-stronger":li("primary-70"),"bg-selected-strongest":li("primary-50"),"bg-selected-strongest-hover":li("primary-40"),"bg-disabled":li("neutral-95"),"bg-selected-disabled":li("neutral-95"),"bg-selected-stronger-disabled":li("neutral-70"),"bg-success":li("success-100"),"bg-success-hover":li("success-95"),"bg-success-strong":li("success-50"),"bg-success-strong-hover":li("success-40"),"bg-warning":li("warning-100"),"bg-warning-hover":li("warning-95"),"bg-warning-strong":li("warning-50"),"bg-warning-strong-hover":li("warning-40"),"bg-info":li("info-100"),"bg-info-hover":li("info-95"),"bg-info-strong":li("info-50"),"bg-info-strong-hover":li("info-40"),"bg-error":li("error-100"),"bg-error-hover":li("error-95"),"bg-error-strong":li("error-50"),"bg-error-strong-hover":li("error-40"),"bg-inverse":li("neutral-20"),"bg-inverse-subtle":li("neutral-30"),"bg-inverse-subtler":li("neutral-50"),"bg-inverse-subtlest":li("neutral-60"),"bg-inverse-hover":li("neutral-40"),"bg-primary":li("primary-50"),"bg-primary-subtle":li("primary-60"),"bg-primary-subtler":li("primary-95"),"bg-primary-subtlest":li("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":li("primary-40"),"bg-primary-subtlest-hover":li("primary-90"),"bg-primary-subtlest-selected":li("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:li("primary-50"),"hyperlink-hover":li("primary-40"),"hyperlink-visited":li("primary-40"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-50"),"focus-ring-inverse":li("white")},pi={text:li("neutral-100"),"text-subtle":li("neutral-80"),"text-subtler":li("neutral-60"),"text-subtlest":li("neutral-50"),"text-primary":li("primary-60"),"text-primary-strongest":li("primary-90"),"text-hover":li("primary-70"),"text-selected":li("primary-60"),"text-selected-hover":li("primary-70"),"text-disabled":li("neutral-60"),"text-disabled-subtle":li("neutral-50"),"text-disabled-subtlest":li("neutral-30"),"text-selected-disabled":li("neutral-90"),"text-success":li("success-70"),"text-warning":li("warning-70"),"text-error":li("error-70"),"text-info":li("info-70"),"text-inverse":li("black"),icon:li("neutral-60"),"icon-subtle":li("neutral-50"),"icon-strongest":li("neutral-90"),"icon-primary":li("primary-60"),"icon-primary-subtle":li("primary-50"),"icon-primary-subtlest":li("primary-40"),"icon-hover":li("primary-70"),"icon-selected":li("primary-60"),"icon-selected-hover":li("primary-70"),"icon-disabled":li("neutral-60"),"icon-disabled-subtle":li("neutral-50"),"icon-selected-disabled":li("neutral-50"),"icon-success":li("success-60"),"icon-warning":li("warning-50"),"icon-error":li("error-60"),"icon-error-strong":li("error-70"),"icon-info":li("info-60"),"icon-inverse":li("black"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-20"),"border-strong":li("neutral-40"),"border-stronger":li("neutral-60"),"border-primary":li("primary-60"),"border-primary-subtle":li("primary-50"),"border-hover":li("primary-20"),"border-hover-strong":li("primary-50"),"border-selected":li("primary-60"),"border-selected-subtle":li("primary-40"),"border-selected-subtlest":li("primary-20"),"border-selected-hover":li("primary-70"),"border-focus":li("primary-50"),"border-focus-strong":li("primary-60"),"border-disabled":li("neutral-20"),"border-selected-disabled":li("neutral-40"),"border-success":li("success-50"),"border-warning":li("warning-50"),"border-error":li("error-50"),"border-error-focus":li("error-50"),"border-error-focus-strong":li("error-70"),"border-error-strong":li("error-70"),"border-info":li("info-50"),bg:li("black"),"bg-strong":li("neutral-10"),"bg-stronger":li("neutral-20"),"bg-strongest":li("neutral-20"),"bg-hover":li("primary-20"),"bg-hover-strong":li("primary-20"),"bg-hover-subtle":li("primary-10"),"bg-hover-neutral":li("neutral-10"),"bg-hover-neutral-strong":li("neutral-20"),"bg-selected":li("primary-20"),"bg-selected-hover":li("primary-20"),"bg-selected-strong":li("primary-20"),"bg-selected-stronger":li("primary-40"),"bg-selected-strongest":li("primary-60"),"bg-selected-strongest-hover":li("primary-70"),"bg-disabled":li("neutral-20"),"bg-selected-disabled":li("neutral-20"),"bg-selected-stronger-disabled":li("neutral-40"),"bg-success":li("success-10"),"bg-success-hover":li("success-20"),"bg-success-strong":li("success-60"),"bg-success-strong-hover":li("success-70"),"bg-warning":li("warning-10"),"bg-warning-hover":li("warning-20"),"bg-warning-strong":li("warning-60"),"bg-warning-strong-hover":li("warning-70"),"bg-info":li("info-10"),"bg-info-hover":li("info-20"),"bg-info-strong":li("info-60"),"bg-info-strong-hover":li("info-70"),"bg-error":li("error-10"),"bg-error-hover":li("error-20"),"bg-error-strong":li("error-60"),"bg-error-strong-hover":li("error-70"),"bg-inverse":li("neutral-90"),"bg-inverse-subtle":li("neutral-80"),"bg-inverse-subtler":li("neutral-60"),"bg-inverse-subtlest":li("neutral-50"),"bg-inverse-hover":li("neutral-70"),"bg-primary":li("primary-60"),"bg-primary-subtle":li("primary-50"),"bg-primary-subtler":li("primary-20"),"bg-primary-subtlest":li("primary-10"),"bg-available":"#185339","bg-primary-hover":li("primary-70"),"bg-primary-subtlest-hover":li("primary-20"),"bg-primary-subtlest-selected":li("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:li("primary-60"),"hyperlink-hover":li("primary-70"),"hyperlink-visited":li("primary-70"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-60"),"focus-ring-inverse":li("black")},gi={collections:{lifesg:ci,bookingsg:ci,rbs:ci,mylegacy:ci,ccube:ci,oneservice:ci,pa:hi,a11yplayground:fi,supportgowhere:ci,imda:ci,spf:ci},defaultValue:"lifesg"},mi={collections:{lifesg:ui,bookingsg:ui,rbs:ui,mylegacy:ui,ccube:ui,oneservice:ui,pa:ui,a11yplayground:pi,supportgowhere:ui,imda:ui,spf:ui},defaultValue:"lifesg"},bi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Yo(o?mi:gi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Wo(i,e,s):i[e];return"function"==typeof l?l(t):l},vi={text:bi("text"),"text-subtle":bi("text-subtle"),"text-subtler":bi("text-subtler"),"text-subtlest":bi("text-subtlest"),"text-primary":bi("text-primary"),"text-primary-strongest":bi("text-primary-strongest"),"text-hover":bi("text-hover"),"text-selected":bi("text-selected"),"text-selected-hover":bi("text-selected-hover"),"text-disabled":bi("text-disabled"),"text-disabled-subtle":bi("text-disabled-subtle"),"text-disabled-subtlest":bi("text-disabled-subtlest"),"text-selected-disabled":bi("text-selected-disabled"),"text-success":bi("text-success"),"text-warning":bi("text-warning"),"text-error":bi("text-error"),"text-info":bi("text-info"),"text-inverse":bi("text-inverse"),icon:bi("icon"),"icon-subtle":bi("icon-subtle"),"icon-strongest":bi("icon-strongest"),"icon-primary":bi("icon-primary"),"icon-primary-subtle":bi("icon-primary-subtle"),"icon-primary-subtlest":bi("icon-primary-subtlest"),"icon-hover":bi("icon-hover"),"icon-selected":bi("icon-selected"),"icon-selected-hover":bi("icon-selected-hover"),"icon-disabled":bi("icon-disabled"),"icon-disabled-subtle":bi("icon-disabled-subtle"),"icon-selected-disabled":bi("icon-selected-disabled"),"icon-success":bi("icon-success"),"icon-warning":bi("icon-warning"),"icon-error":bi("icon-error"),"icon-error-strong":bi("icon-error-strong"),"icon-info":bi("icon-info"),"icon-inverse":bi("icon-inverse"),"icon-primary-inverse":bi("icon-primary-inverse"),border:bi("border"),"border-strong":bi("border-strong"),"border-stronger":bi("border-stronger"),"border-primary":bi("border-primary"),"border-primary-subtle":bi("border-primary-subtle"),"border-hover":bi("border-hover"),"border-hover-strong":bi("border-hover-strong"),"border-selected":bi("border-selected"),"border-selected-subtle":bi("border-selected-subtle"),"border-selected-subtlest":bi("border-selected-subtlest"),"border-selected-hover":bi("border-selected-hover"),"border-focus":bi("border-focus"),"border-focus-strong":bi("border-focus-strong"),"border-disabled":bi("border-disabled"),"border-selected-disabled":bi("border-selected-disabled"),"border-success":bi("border-success"),"border-warning":bi("border-warning"),"border-error":bi("border-error"),"border-error-focus":bi("border-error-focus"),"border-error-focus-strong":bi("border-error-focus-strong"),"border-error-strong":bi("border-error-strong"),"border-info":bi("border-info"),bg:bi("bg"),"bg-strong":bi("bg-strong"),"bg-stronger":bi("bg-stronger"),"bg-strongest":bi("bg-strongest"),"bg-hover":bi("bg-hover"),"bg-hover-strong":bi("bg-hover-strong"),"bg-hover-subtle":bi("bg-hover-subtle"),"bg-hover-neutral":bi("bg-hover-neutral"),"bg-hover-neutral-strong":bi("bg-hover-neutral-strong"),"bg-selected":bi("bg-selected"),"bg-selected-hover":bi("bg-selected-hover"),"bg-selected-strong":bi("bg-selected-strong"),"bg-selected-stronger":bi("bg-selected-stronger"),"bg-selected-strongest":bi("bg-selected-strongest"),"bg-selected-strongest-hover":bi("bg-selected-strongest-hover"),"bg-disabled":bi("bg-disabled"),"bg-selected-disabled":bi("bg-selected-disabled"),"bg-selected-stronger-disabled":bi("bg-selected-stronger-disabled"),"bg-success":bi("bg-success"),"bg-success-hover":bi("bg-success-hover"),"bg-success-strong":bi("bg-success-strong"),"bg-success-strong-hover":bi("bg-success-strong-hover"),"bg-warning":bi("bg-warning"),"bg-warning-hover":bi("bg-warning-hover"),"bg-warning-strong":bi("bg-warning-strong"),"bg-warning-strong-hover":bi("bg-warning-strong-hover"),"bg-info":bi("bg-info"),"bg-info-hover":bi("bg-info-hover"),"bg-info-strong":bi("bg-info-strong"),"bg-info-strong-hover":bi("bg-info-strong-hover"),"bg-error":bi("bg-error"),"bg-error-hover":bi("bg-error-hover"),"bg-error-strong":bi("bg-error-strong"),"bg-error-strong-hover":bi("bg-error-strong-hover"),"bg-inverse":bi("bg-inverse"),"bg-inverse-subtle":bi("bg-inverse-subtle"),"bg-inverse-subtler":bi("bg-inverse-subtler"),"bg-inverse-subtlest":bi("bg-inverse-subtlest"),"bg-inverse-hover":bi("bg-inverse-hover"),"bg-primary":bi("bg-primary"),"bg-primary-subtle":bi("bg-primary-subtle"),"bg-primary-subtler":bi("bg-primary-subtler"),"bg-primary-subtlest":bi("bg-primary-subtlest"),"bg-available":bi("bg-available"),"bg-primary-hover":bi("bg-primary-hover"),"bg-primary-subtlest-hover":bi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":bi("bg-primary-subtlest-selected"),"overlay-strong":bi("overlay-strong"),"overlay-subtle":bi("overlay-subtle"),hyperlink:bi("hyperlink"),"hyperlink-hover":bi("hyperlink-hover"),"hyperlink-visited":bi("hyperlink-visited"),"hyperlink-inverse":bi("hyperlink-inverse"),"focus-ring":bi("focus-ring"),"focus-ring-inverse":bi("focus-ring-inverse")},yi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i+"px")&&void 0!==r?r:Ko["width-010"](t),d=null!==(n="function"==typeof a?a(t):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:vi.border(t),u=Ko.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ko["width-010"](t),d=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:vi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},xi=e=>1===e.length&&"theme"in e[0],wi=e=>(...t)=>r=>{const n=xi(t)?[]:t,o=xi(t)?t[0]:r,i=o.theme;return(0,Yo(yi,null==i?void 0:i.borderScheme)[e])(...n)(o)},$i={solid:wi("solid"),"dashed-default":wi("dashed-default")},Ci={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Si=e=>t=>{var r;const n=t.theme,o=Yo(Ci,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Wo(o,e,n.overrides.breakpoint):o[e],i},ki={"xxs-min":Si("xxs-min"),"xxs-max":Si("xxs-max"),"xs-min":Si("xs-min"),"xs-max":Si("xs-max"),"sm-min":Si("sm-min"),"sm-max":Si("sm-max"),"md-min":Si("md-min"),"md-max":Si("md-max"),"lg-min":Si("lg-min"),"lg-max":Si("lg-max"),"xl-min":Si("xl-min"),"xl-max":Si("xl-max"),"xxl-min":Si("xxl-min"),"xxs-column":Si("xxs-column"),"xs-column":Si("xs-column"),"sm-column":Si("sm-column"),"md-column":Si("md-column"),"lg-column":Si("lg-column"),"xl-column":Si("xl-column"),"xxl-column":Si("xxl-column"),"xxs-gutter":Si("xxs-gutter"),"xs-gutter":Si("xs-gutter"),"sm-gutter":Si("sm-gutter"),"md-gutter":Si("md-gutter"),"lg-gutter":Si("lg-gutter"),"xl-gutter":Si("xl-gutter"),"xxl-gutter":Si("xxl-gutter"),"xxs-margin":Si("xxs-margin"),"xs-margin":Si("xs-margin"),"sm-margin":Si("sm-margin"),"md-margin":Si("md-margin"),"lg-margin":Si("lg-margin"),"xl-margin":Si("xl-margin"),"xxl-margin":Si("xxl-margin")},Di=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=ki["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Fi={MaxWidth:Di("max-width"),MinWidth:Di("min-width")},_i={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ei=e=>t=>{var r;const n=t.theme,o=Yo(_i,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Wo(o,e,n.overrides.fontSpec):o[e]},Oi={"heading-size-xxl":Ei("heading-size-xxl"),"heading-size-xl":Ei("heading-size-xl"),"heading-size-lg":Ei("heading-size-lg"),"heading-size-md":Ei("heading-size-md"),"heading-size-sm":Ei("heading-size-sm"),"heading-size-xs":Ei("heading-size-xs"),"heading-lh-xxl":Ei("heading-lh-xxl"),"heading-lh-xl":Ei("heading-lh-xl"),"heading-lh-lg":Ei("heading-lh-lg"),"heading-lh-md":Ei("heading-lh-md"),"heading-lh-sm":Ei("heading-lh-sm"),"heading-lh-xs":Ei("heading-lh-xs"),"heading-ls-xxl":Ei("heading-ls-xxl"),"heading-ls-xl":Ei("heading-ls-xl"),"heading-ls-lg":Ei("heading-ls-lg"),"heading-ls-md":Ei("heading-ls-md"),"heading-ls-sm":Ei("heading-ls-sm"),"heading-ls-xs":Ei("heading-ls-xs"),"weight-light":Ei("weight-light"),"weight-regular":Ei("weight-regular"),"weight-semibold":Ei("weight-semibold"),"weight-bold":Ei("weight-bold"),"font-family":Ei("font-family"),"body-size-baseline":Ei("body-size-baseline"),"body-size-md":Ei("body-size-md"),"body-size-sm":Ei("body-size-sm"),"body-size-xs":Ei("body-size-xs"),"body-lh-baseline":Ei("body-lh-baseline"),"body-lh-md":Ei("body-lh-md"),"body-lh-sm":Ei("body-lh-sm"),"body-lh-xs":Ei("body-lh-xs"),"body-ls-baseline":Ei("body-ls-baseline"),"body-ls-md":Ei("body-ls-md"),"body-ls-sm":Ei("body-ls-sm"),"body-ls-xs":Ei("body-ls-xs"),"form-label-size":Ei("form-label-size"),"form-description-size":Ei("form-description-size"),"form-label-lh":Ei("form-label-lh"),"form-description-lh":Ei("form-description-lh"),"form-label-ls":Ei("form-label-ls"),"form-description-ls":Ei("form-description-ls")},Ti=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${Ei("font-family")};
        font-size: ${Ei(e)};
        font-weight: ${Ei(t)};
        line-height: ${Ei(r)};
        letter-spacing: ${Ei(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Ii=(e={})=>({"heading-xxl-light":Ti("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ti("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ti("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ti("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ti("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ti("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ti("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ti("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ti("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ti("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ti("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ti("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ti("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ti("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ti("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ti("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ti("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ti("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ti("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ti("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ti("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ti("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ti("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ti("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ti("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ti("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ti("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ti("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ti("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ti("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ti("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ti("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ti("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ti("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ti("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ti("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ti("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ti("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ti("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ti("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ti("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ti("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Mi=Ii({disableLigatures:!0}),Ai=Ii(),Bi=Ii({disableLigatures:!0}),zi=Ii({disableLigatures:!0}),ji=Ii({disableLigatures:!0}),Li={collections:{default:Ai,bookingsg:Mi,mylegacy:Ai,pa:Bi,a11yplayground:zi,supportgowhere:ji,sgwdigitallobby:ji,imda:Ii({disableLigatures:!0}),spf:Ii({disableLigatures:!0}),oneservice:Ii()},defaultValue:"default"},Ri=e=>t=>{var r;const n=t.theme,o=Yo(Li,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Wo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Pi={"heading-xxl-light":Ri("heading-xxl-light"),"heading-xxl-regular":Ri("heading-xxl-regular"),"heading-xxl-semibold":Ri("heading-xxl-semibold"),"heading-xxl-bold":Ri("heading-xxl-bold"),"heading-xl-light":Ri("heading-xl-light"),"heading-xl-regular":Ri("heading-xl-regular"),"heading-xl-semibold":Ri("heading-xl-semibold"),"heading-xl-bold":Ri("heading-xl-bold"),"heading-lg-light":Ri("heading-lg-light"),"heading-lg-regular":Ri("heading-lg-regular"),"heading-lg-semibold":Ri("heading-lg-semibold"),"heading-lg-bold":Ri("heading-lg-bold"),"heading-md-light":Ri("heading-md-light"),"heading-md-regular":Ri("heading-md-regular"),"heading-md-semibold":Ri("heading-md-semibold"),"heading-md-bold":Ri("heading-md-bold"),"heading-sm-light":Ri("heading-sm-light"),"heading-sm-regular":Ri("heading-sm-regular"),"heading-sm-semibold":Ri("heading-sm-semibold"),"heading-sm-bold":Ri("heading-sm-bold"),"heading-xs-light":Ri("heading-xs-light"),"heading-xs-regular":Ri("heading-xs-regular"),"heading-xs-semibold":Ri("heading-xs-semibold"),"heading-xs-bold":Ri("heading-xs-bold"),"body-baseline-light":Ri("body-baseline-light"),"body-baseline-regular":Ri("body-baseline-regular"),"body-baseline-semibold":Ri("body-baseline-semibold"),"body-baseline-bold":Ri("body-baseline-bold"),"body-md-light":Ri("body-md-light"),"body-md-regular":Ri("body-md-regular"),"body-md-semibold":Ri("body-md-semibold"),"body-md-bold":Ri("body-md-bold"),"body-sm-light":Ri("body-sm-light"),"body-sm-regular":Ri("body-sm-regular"),"body-sm-semibold":Ri("body-sm-semibold"),"body-sm-bold":Ri("body-sm-bold"),"body-xs-light":Ri("body-xs-light"),"body-xs-regular":Ri("body-xs-regular"),"body-xs-semibold":Ri("body-xs-semibold"),"body-xs-bold":Ri("body-xs-bold"),"form-label":Ri("form-label"),"form-description":Ri("form-description")},Ni={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Hi=e=>t=>{var r;const n=t.theme,o=Yo(Ni,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Wo(o,e,n.overrides.motion):o[e]},Wi={"duration-150":Hi("duration-150"),"duration-250":Hi("duration-250"),"duration-350":Hi("duration-350"),"duration-500":Hi("duration-500"),"duration-800":Hi("duration-800"),"duration-1000":Hi("duration-1000"),"ease-default":Hi("ease-default"),"ease-standard":Hi("ease-standard"),"ease-entrance":Hi("ease-entrance"),"ease-exit":Hi("ease-exit")},Yi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Vi=e=>t=>{var r;const n=t.theme,o=Yo(Yi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Wo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ui={none:Vi("none"),xs:Vi("xs"),sm:Vi("sm"),md:Vi("md"),lg:Vi("lg"),full:Vi("full")},Ki=(e,t,r)=>n=>{const o=bi(t)(n)||li(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},qi={collections:{default:{"xs-subtle":Ki("0 0 4px 1px","neutral-50",.24),"xs-strong":Ki("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Ki("0 0 4px 1px","border-focus",.5),"xs-error-strong":Ki("0 0 4px 1px","border-error",.5),"sm-subtle":Ki("0 2px 4px 0","neutral-50",.24),"sm-strong":Ki("0 2px 4px 0","neutral-50",.5),"md-subtle":Ki("0 2px 8px 0","neutral-50",.24),"md-strong":Ki("0 2px 8px 0","neutral-50",.5),"lg-subtle":Ki("0 2px 12px 1px","neutral-50",.24),"lg-strong":Ki("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Zi=e=>t=>{var r;const n=t.theme,o=Yo(qi,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Wo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Gi={"xs-subtle":Zi("xs-subtle"),"xs-strong":Zi("xs-strong"),"xs-focus-strong":Zi("xs-focus-strong"),"xs-error-strong":Zi("xs-error-strong"),"sm-subtle":Zi("sm-subtle"),"sm-strong":Zi("sm-strong"),"md-subtle":Zi("md-subtle"),"md-strong":Zi("md-strong"),"lg-subtle":Zi("lg-subtle"),"lg-strong":Zi("lg-strong")},Qi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Xi=e=>t=>{var r;const n=t.theme,o=Yo(Qi,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Wo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ji={"spacing-0":Xi("spacing-0"),"spacing-4":Xi("spacing-4"),"spacing-8":Xi("spacing-8"),"spacing-12":Xi("spacing-12"),"spacing-16":Xi("spacing-16"),"spacing-20":Xi("spacing-20"),"spacing-24":Xi("spacing-24"),"spacing-32":Xi("spacing-32"),"spacing-40":Xi("spacing-40"),"spacing-48":Xi("spacing-48"),"spacing-64":Xi("spacing-64"),"spacing-72":Xi("spacing-72"),"layout-xs":Xi("layout-xs"),"layout-sm":Xi("layout-sm"),"layout-md":Xi("layout-md"),"layout-lg":Xi("layout-lg"),"layout-xl":Xi("layout-xl"),"layout-xxl":Xi("layout-xxl"),"layout-xxxl":Xi("layout-xxxl")},ea=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),ta=Object.assign(Object.assign({},vi),{Primitive:di}),ra=Object.assign(Object.assign({},Pi),{Spec:Oi}),na=Wi,oa=Object.assign(Object.assign({},Ko),{Util:$i}),ia=Ji,aa=Ui,sa=Gi,la=ki,da=Fi,ca={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ua={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ha={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},fa={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},pa={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ga={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ma={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ba={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},va={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ya={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},xa={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},wa={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ca),{light:ea(ca,"light"),dark:ea(ca,"dark")}),Object.assign(Object.assign({},ua),{light:ea(ua,"light"),dark:ea(ua,"dark")}),Object.assign(Object.assign({},ha),{light:ea(ha,"light"),dark:ea(ha,"dark")}),Object.assign(Object.assign({},fa),{light:ea(fa,"light"),dark:ea(fa,"dark")}),Object.assign(Object.assign({},pa),{light:ea(pa,"light"),dark:ea(pa,"dark")}),Object.assign(Object.assign({},ga),{light:ea(ga,"light"),dark:ea(ga,"dark")}),Object.assign(Object.assign({},ma),{light:ea(ma,"light"),dark:ea(ma,"dark")}),Object.assign(Object.assign({},ba),{light:ea(ba,"light"),dark:ea(ba,"dark")}),Object.assign(Object.assign({},va),{light:ea(va,"light"),dark:ea(va,"dark")}),Object.assign(Object.assign({},ya),{light:ea(ya,"light"),dark:ea(ya,"dark")}),Object.assign(Object.assign({},xa),{light:ea(xa,"light"),dark:ea(xa,"dark")}),Object.assign(Object.assign({},wa),{light:ea(wa,"light"),dark:ea(wa,"dark")});const $a=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ca=(e,t,r=!1)=>F`
        ${ra[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Sa=e=>{if(e)return F`
            ${$a(e)}
        `},ka=(e,t,r,n,o)=>F`
    ${Ca(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${Sa(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Sa(r)}
        `)(r,n,o)}
    color: ${ta.text};
`,Da=D.div`
    ${e=>ka(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Fa=D.a`
    ${e=>{var t;return F`
        ${Ca(e.$textStyle,e.$weight||"regular")}
        color: ${ta.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${ta["text-hover"]};
        }
    `}}
`,_a=D(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ea;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=Me(n,["weight","inline","paragraph","maxLines"]);return e(Da,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=Me(r,["weight","inline","paragraph","maxLines"]);return e(Da,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=Me(n,["weight","children","external","underlineStyle"]);return t(Fa,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},d,{children:[a,s&&e(_a,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Ea||(Ea={}));const Oa=D.div`
    border-radius: ${aa.md};
    background: ${ta.bg};
    padding: ${ia["spacing-16"]} ${ia["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?F`
                  border: ${oa["width-010"]} ${oa.solid}
                      ${ta.border};
              `:F`
                  box-shadow: ${sa["md-subtle"]};
              `}}
`,Ta=D.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ia["spacing-24"]};
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
                background-color: ${ta["bg-hover-neutral"]};
            `}
    }
`,Ia=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=Me(t,["children","focusHighlight","focusOutline","type"]);return e(Ta,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ma=D.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ta.bg};
    box-shadow: ${sa["lg-strong"]};
    border-radius: ${aa.lg};
    overflow: hidden;

    ${da.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Aa=D(Ia)`
    position: absolute;
    top: var(--close-button-top-inset, ${ia["spacing-16"]});
    right: var(--close-button-right-inset, ${ia["spacing-16"]});
    padding: 0;
    color: ${ta.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${da.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ia["spacing-20"]});
    }
`,Ba=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=Me(r,["id","children","onClose","showCloseButton"]);return t(Ma,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Aa,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(M,{})}),o]}))},za=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&ra[`${t}-regular`]}

        strong {
            font-weight: ${ra.Spec["weight-semibold"]};
            ${t&&ra[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ra.Spec["weight-semibold"]};
            ${t&&ra[`${t}-semibold`]}
            color: ${ta.hyperlink};
            text-decoration: underline;

            svg {
                color: ${ta["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${ta["hyperlink-hover"]};

                svg {
                    color: ${ta["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},ja=D.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,La=D((t=>{var{children:r}=t,n=Me(t,["children"]);const o=n["data-testid"]||"card";return e(Oa,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(Ea.BodyBL,{children:r}):r}))}))`
    color: ${ta.text};
    ${za({textSize:"body-md"})}

    ${da.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ta["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${aa.full};
        background-clip: padding-box;
    }
`;D(Ba)`
    padding: 3.5rem 1.25rem 2.5rem;
`,D.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ta.text};
    ${za({textSize:"body-md"})}
`;const Ra=D.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return F`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Pa=D.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?ta["overlay-subtle"]:ta["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=F`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=F`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=F`
                transition: none;
            `),t}};
`;var Na;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Na||(Na={}));const Ha=()=>{const[e,t]=s(void 0),r=A();return h((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Na.Change,e),r.events.emit(Na.Ready),()=>r.events.off(Na.Change,e)}),[r]),e},Wa=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:f,id:p})=>{const[g,m]=s(null),[b,v]=s(),[y]=s((()=>at.generate())),x=z(),w=a(),$=a(null),C=i&&o.cloneElement(i,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=f?f:b?99999:99998;(e=>{const t=A();h((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Na.Change,r)}),[t,e]),h((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Na.Change,r)};return null==t||t.events.on(Na.Ready,r),()=>null==t?void 0:t.events.off(Na.Ready,r)}),[t,e])})(k),h((()=>(O(),m(_()),()=>{B(),I().length<1&&(L("remove"),P(),T("remove"))})),[]),h((()=>{if(t){const e=E();D(e),M(),F()&&1===I().length&&(R(),L("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{B(),F()&&I().length<1&&(L("remove"),P());const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{w.current=e,v(e)},F=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),_=()=>document&&r?document.getElementById(r):document?document.body:null,E=()=>I().length>0,O=()=>{if(!document.getElementById(Va)){const e=document.createElement("style");e.id=Va;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ua} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ua}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ka} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${qa}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Ua);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ua):document.body.classList.add(Ua)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},B=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},L=e=>{if(!F())return;const t=document.body.classList.contains(Ka);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ka):document.body.classList.add(Ka)},R=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(qa,t)},P=()=>{const e=document.body.style.getPropertyValue(qa);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},N=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return g?ee.createPortal(e(Ra,{id:S,"data-testid":S,$show:t,$zIndex:k,children:i&&e(j,{id:x,children:e(Pa,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:d,$disableTransition:c,onClick:N,children:C})})}),g):null},Ya=t=>e(B,{children:e(Wa,Object.assign({},t))}),Va="lifesg-ds-overlay-stylesheet",Ua="lifesg-ds-overlay-open",Ka="lifesg-ds-overlay-scroll-lock",qa="--lifesg-ds-overlay-scroll-y",Za=()=>{const[e,t]=s(),[r,n]=s(),o=p((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=p((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return h((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}},Ga=g({onClose:()=>{}}),Qa=D.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${da.MaxWidth.sm} {
        ${e=>F`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>F`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${na["duration-250"]}
                ${na["ease-entrance"]}
            transition-delay: ${na["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${na["duration-250"]}
                ${na["ease-exit"]};
        }
    `}
`,Xa=D.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,Ja=D.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,es=D.div`
    width: 40rem;
    margin: ${ia["spacing-64"]} auto;
    background: ${ta.bg};
    box-shadow: ${sa["xs-strong"]};
    border-radius: ${aa.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${la["xxl-margin"]}px * 2);

    ${da.MaxWidth.xl} {
        max-width: calc(100% - ${la["xl-margin"]}px * 2);
    }

    ${da.MaxWidth.lg} {
        max-width: calc(100% - ${la["lg-margin"]}px * 2);
    }

    ${da.MaxWidth.md} {
        max-width: calc(100% - ${la["md-margin"]}px * 2);
    }

    ${da.MaxWidth.sm} {
        max-width: calc(100% - ${la["sm-margin"]}px * 2);
    }

    ${da.MaxWidth.xs} {
        max-width: calc(100% - ${la["xs-margin"]}px * 2);
    }

    ${da.MaxWidth.xxs} {
        max-width: calc(100% - ${la["xxs-margin"]}px * 2);
    }
`,ts=D.div`
    margin-right: ${ia["spacing-16"]};
    margin-left: auto;
    margin-top: ${ia["spacing-16"]};
    margin-bottom: ${ia["spacing-16"]};
`,rs=D(Ia)`
    padding: 0;
    color: ${ta.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,ns=D.div`
    margin-right: ${ia["spacing-64"]};
    margin-left: ${ia["spacing-64"]};

    ${da.MaxWidth.sm} {
        margin-right: ${ia["spacing-20"]};
        margin-left: ${ia["spacing-20"]};
    }
`,os=D.div`
    margin-right: ${ia["spacing-64"]};
    margin-left: ${ia["spacing-64"]};

    ${da.MaxWidth.sm} {
        margin-right: ${ia["spacing-20"]};
        margin-left: ${ia["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${ia["spacing-32"]};
    row-gap: ${ia["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${da.MaxWidth.md} {
        flex-direction: column;
    }
`,is=D.div`
    :where(& > ${ns}:last-child) {
        margin-bottom: ${ia["spacing-64"]};
    }

    :where(& > ${os}:not(:first-child)) {
        margin-top: ${ia["spacing-32"]};
    }

    :where(& > ${os}:last-child) {
        margin-bottom: ${ia["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?F`
                  :where(& > ${ns}:first-child),
                  :where(& > ${os}:first-child) {
                      margin-top: 0;
                  }
              `:F`
                  :where(& > ${ns}:first-child),
                  :where(& > ${os}:first-child) {
                      margin-top: ${ia["spacing-64"]};
                  }
              `}
`,as=t=>{var{"data-testid":r="modal-close-button"}=t,n=Me(t,["data-testid"]);const{onClose:o}=m(Ga);return e(ts,Object.assign({"data-testid":r},n,{children:e(rs,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(M,{"aria-hidden":!0})})}))};as.displayName="ModalV2.CloseButton";const ss=t=>{var{"data-testid":r="modal-content",children:n}=t,o=Me(t,["data-testid","children"]);return e(ns,Object.assign({"data-testid":r},o,{children:n}))};ss.displayName="ModalV2.Content";const ls=e=>{var{"data-testid":r="modal-footer",primaryButton:n,secondaryButton:o}=e,i=Me(e,["data-testid","primaryButton","secondaryButton"]);return t(os,Object.assign({"data-testid":r},i,{children:[n,o]}))};ls.displayName="ModalV2.Footer";const ds=e=>{var{id:r,"data-testid":n="modal-card",children:i}=e,a=Me(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((t=>((e,t)=>_(e.type)?e.type.target===t:e.type===t)(t,e))),l=s(as),d=s(ss),c=s(ls),u=!!l;return t(es,Object.assign({id:r,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[t(is,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};ds.displayName="ModalV2.Card";const cs=Object.assign((t=>{var{id:r,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0,"data-testid":f="modal"}=t,p=Me(t,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:g,offsetTop:m}=Za(),{refs:b,context:v}=L({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:y,status:x}=R(v,{duration:300}),w=P(v,{outsidePress:!1,enabled:!!o}),{getFloatingProps:$}=N([w]);return h((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[u,n]),e(Ya,{"data-testid":`${f}-overlay`,show:y,enableOverlayClick:s,onOverlayClick:c,id:r,rootId:l,zIndex:d,children:e(Qa,Object.assign({$show:y,$animationFrom:i,"data-testid":f,$verticalHeight:g,$offsetTop:m},p,{"data-status":x,children:e(Ga.Provider,{value:{onClose:o},children:y&&e(H,{context:v,initialFocus:b.floating,children:e(Xa,{children:e(Ja,Object.assign({ref:b.setFloating},$(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:ds,CloseButton:as,Content:ss,Footer:ls}),us=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:d,id:c}=n,u=Me(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",f=m(E),p=la["sm-max"]({theme:f}),g=ur.useMediaQuery({maxWidth:p}),b=()=>{a&&a()},v=()=>"string"==typeof o?e(Ea.BodyMD,{children:o}):o;return t(r,{children:[i&&e(ja,Object.assign({tabIndex:0,"data-testid":h},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(La,{$maxHeight:s,$overflow:l,children:v()})})),g&&e(cs,{show:null!=i&&i,onOverlayClick:b,onClose:b,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:t(cs.Card,{children:[e(cs.Content,{children:v()}),e(cs.CloseButton,{})]})})]})},hs=D.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,fs=n=>{var o,i,{children:l,popoverContent:d,trigger:c="click",position:u="top",zIndex:h,rootNode:f,customOffset:p,delay:g,onPopoverAppear:b,onPopoverDismiss:v,popoverAriaLabel:y,enableFlip:x=!0,enableResize:w=!1,overflow:$="auto",triggerOnFocus:C=!1,isModal:S=!0}=n,k=Me(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[D,F]=s(!1),_=a(null),O=a(null),T=m(E),I=la["sm-max"]({theme:T}),M=ur.useMediaQuery({maxWidth:I}),[A,B]=s(0),z=`${a(at.generate()).current}-popover`,{refs:j,floatingStyles:R,context:J}=L({open:D,placement:u,whileElementsMounted:W,middleware:[Y(null!=p?p:16),x&&V(),U({limiter:K()}),w&&q({apply({availableHeight:e}){B(e)}})],onOpenChange:e=>{F(e),D!==e&&de(e)}}),ee=Ha(),te="hover"===(M?"click":c),re=Z(J,{ignoreMouse:te}),ne=P(J),oe=G(J,{enabled:te,delay:{open:null!==(o=null==g?void 0:g.open)&&void 0!==o?o:0,close:null!==(i=null==g?void 0:g.close)&&void 0!==i?i:500}}),ie=Q(J,{enabled:C}),{getReferenceProps:ae,getFloatingProps:se}=N([re,ne,oe,ie]),le=()=>{F(!1),de(!1)},de=e=>{e&&b&&b(),!e&&v&&v()};return t(r,{children:[e(hs,Object.assign({ref:e=>{_.current=e,j.setReference(e)}},ae({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),k,{children:l})),D&&e(X,{root:f,children:e(H,Object.assign({context:J},!S&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{O.current=e,j.setFloating(e)},onBlur:e=>{var t;const r=null!==(t=e.relatedTarget)&&void 0!==t?t:document.activeElement;r&&(e=>{if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const t=_.current,r=O.current;return!!t&&t.contains(e)||!!r&&r.contains(e)})(r)||(F(!1),de(!1))},style:Object.assign(Object.assign({},R),{outline:"none",zIndex:null!=h?h:ee})},se(),{children:"function"==typeof d?d(w?{maxHeight:A,overflow:$}:{}):e(us,{visible:!0,onMobileClose:le,maxHeight:w?A:void 0,overflow:w?$:void 0,ariaLabel:y,id:z,children:d})}))}))})]})},ps=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},gs=D.span`
    color: ${ta["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ps(e)}

    &:hover,
    &:focus-visible {
        color: ${ta["text-hover"]};
        ${({$hoverStyle:e})=>ps(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,ms=D.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,bs=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=Me(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!o;return e(fs,Object.assign({},l,{children:t(gs,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[o,i&&e(ms,{$standalone:!d,children:i})]})}))},vs=D.div`
    padding-left: ${ia["spacing-4"]};
    display: inline;
`,ys=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(vs,{children:e(bs,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(k,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},xs=D.div`
    margin-bottom: ${ia["spacing-8"]};
`,ws=D.label`
    color: ${ta["text-subtle"]};
    display: inline-block;

    ${ra["form-label"]}
    ${za()}
    font-weight: ${ra.Spec["weight-semibold"]};
`,$s=D(ne)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${ta["icon-error-strong"]};
`,Cs=D.div`
    ${ra["body-sm-semibold"]}
    display: flex;
    gap: ${ia["spacing-4"]};
    margin-top: ${ia["spacing-8"]};
`,Ss=D.p`
    color: ${ta["text-error"]};
    margin-bottom: 0;
    outline: none;
`,ks=D.span`
    ${ra["form-description"]}
    color: ${ta["text-subtler"]};
    display: block;
`,Ds=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:d}=r,c=Me(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(xs,{className:l,style:d,"data-testid":s,children:[t(ws,Object.assign({id:n},c,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(ys,{addon:i}):null)]})),"string"==typeof a?e(ks,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},Fs=r=>t(Cs,{children:[e($s,{"aria-hidden":!0}),e(Ss,Object.assign({},r))]}),_s=D.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:p}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Fi.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Fi.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${Fi.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${Fi.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${Fi.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${Fi.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${p||1};
            }
        `}}
`,Es=o.forwardRef(((t,r)=>{const n=m(E),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=t,u=Me(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(_s,Object.assign({ref:r},(()=>{const e=ki["xxl-column"]({theme:n}),t=ki["xl-column"]({theme:n}),r=ki["lg-column"]({theme:n}),u=ki["md-column"]({theme:n}),f=ki["sm-column"]({theme:n}),p=ki["xs-column"]({theme:n}),g=ki["xxs-column"]({theme:n}),m=h(o||i||a||s||l||d||c,e,"xxl"),b=h(i||a||s||l||d||c,t,"xl"),v=h(a||s||l||d||c,r,"lg"),y=h(s||l||d||c,u,"md"),x=h(l||d||c,f,"sm"),w=h(d||c,p,"xs"),$=h(c,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Os={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ts=e=>Object.keys(Os).reduce(((t,r)=>{const n=Os[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Is=Ts("max-width"),Ms=(Ts("min-width"),D.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Is.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Is.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),As=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=Me(t,["mobileCols","tabletCols","desktopCols"]);return e(Ms,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Bs(i||o||n),a=Bs(e),s=Bs(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Bs=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},zs=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${ia["spacing-32"]};
    }
`,js=D.div`
    ${zs}
`,Ls=D(Es)`
    ${zs}
`,Rs=D(As)`
    ${zs}
`,Ps=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:l,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:v,xlCols:y,xxlCols:x,"data-testid":w,"data-error-testid":$})=>{const C=!l&&(d||u||h)?"v2-grid":!l&&(f||p||g||m||v||y||x)?"grid":l||"flex",S="string"==typeof n?n.trim():n,[k]=s((()=>at.generate())),D=`${null!=o?o:k}-label`,F=`${null!=o?o:k}-label-subtitle`,_=`${null!=o?o:k}-error-message`;const E=(e=>{switch(e){case"v2-grid":return Rs;case"grid":return Ls;case"flex":return js}})(C);return t(E,Object.assign({"data-testid":w},(e=>{switch(e){case"v2-grid":return{mobileCols:d,tabletCols:u,desktopCols:h};case"grid":return{xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:v,xlCols:y,xxlCols:x};case"flex":return}})(C),{children:[r&&e(Ds,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:D,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:D,disabled:i},r)),(()=>{const e={"aria-invalid":!!n,"aria-describedby":[S?_:void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?F:void 0].filter(Boolean).join(" ")||void 0,"aria-labelledby":r?D:void 0};return b.map(a,(t=>c(t,e)))})(),S&&t(Cs,{children:[e($s,{"aria-hidden":!0}),e(Ss,{id:_,tabIndex:0,"data-testid":null!=$?$:o?`${o}-error-message`:"error-message",children:S})]})]}))},Ns=e=>"small"===e?2.5:3,Hs=D.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Ns(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Ws=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ia["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ns(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${aa.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${ta["border-focus"]};
    }
`,Ys=D.button`
    ${Ws}
    cursor: pointer;
`;D.div`
    ${Ws}
`;const Vs=O`
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
`,Us=D.div`
    position: relative;
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    background: ${ta.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${ta["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${ta["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Vs} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${ta["bg-disabled"]};

                ${Ys} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${ta.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${Ys} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${ta["border-error"]};

                &:focus-within {
                    border-color: ${ta["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${ta["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;D.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${na["duration-250"]} ${na["ease-default"]};
    margin-left: ${ia["spacing-16"]};
`,D(oe)`
    color: ${ta.icon};
`;const Ks=D.div`
    height: 1px;
    background: ${ta.border};
    margin: 0 ${ia["spacing-8"]};
`,qs=D.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${ta["text-disabled"]};
            `}}
`,Zs=D.div`
    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${$a(1)}
                `}}
    overflow: hidden;
`,Gs=D(Zs)`
    color: ${ta["text-subtler"]};
`,Qs=({children:t,show:r,error:n,disabled:o,testId:i,onBlur:s,readOnly:l,className:d,variant:c})=>{const u=a(null);return or("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(Hs,{className:d,$variant:c,children:e(Us,{ref:u,$error:n&&!r,$disabled:o,$readOnly:l,$expanded:r,"data-testid":i,children:t})})},Xs=e=>"right"===e?"bottom-end":"bottom-start",Js=g({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),el=()=>m(Js),tl=({enabled:n,isOpen:o,onOpen:i,onClose:s,onDismiss:l,renderElement:d,renderDropdown:c,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:p="left",fitAvailableHeight:g,rootNode:b,positionRef:v})=>{var y;const x=m(E),w=la["sm-max"]({theme:x}),$=a(null),{width:C=0}=rr({targetRef:null!=v?v:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:k,floatingStyles:D,context:F}=L({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==s||s(r))},whileElementsMounted:W,placement:Xs(p),middleware:[Y(f),V(),U({limiter:K()}),q({apply({availableHeight:e,elements:t}){!g||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),_=Ha(),{isMounted:O,styles:T}=J(F,{initial:{opacity:0},open:{opacity:1},duration:300}),I=Z(F,{enabled:n,toggle:h,keyboardHandlers:h}),M=P(F,{enabled:n}),{getReferenceProps:A,getFloatingProps:B}=N([I,M]),z={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),D),{zIndex:null!==(y=null!=u?u:_)&&void 0!==y?y:50}),setFloatingRef:k.setFloating,getFloatingProps:B};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,k.setReference(e)}},A(),{children:d()})),O&&e(X,{root:b,children:e(H,{context:F,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Js.Provider,{value:z,children:c(z)})})})]})},rl=D.div`
    --vertical-inset: ${ia["spacing-24"]};
    --horizontal-inset: ${ia["spacing-20"]};
    --header-bottom-spacing: ${ia["spacing-4"]};

    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${da.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,nl=D.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,ol=e=>ot()?e:e?"true":void 0,il=(...e)=>e.filter((e=>!!e)).join(" "),al=D.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,sl=O`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ll=D.div`
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
    animation: ${sl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,dl=D(ll)`
    animation-delay: -0.45s;
`,cl=D(ll)`
    animation-delay: -0.3s;
`,ul=D(ll)`
    animation-delay: -0.15s;
`,hl=({color:r,className:n,size:o})=>t(al,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(ll,{id:"inner1"}),e(dl,{id:"inner2"}),e(cl,{id:"inner3"}),e(ul,{id:"inner4"})]}),fl={Button:{"button-radius":Ui.md,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},pl={Button:{"button-radius":Ui.sm,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},gl={Button:{"button-radius":Ui.sm,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":ta.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},ml={collections:{default:pl,pa:{Button:{"button-radius":Ui.full,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},a11yplayground:fl,lifesg:gl,spf:{Button:{"button-radius":Ui.md,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi["text-primary-strongest"],"navbar-link-colour-text-hover":vi["text-subtler"],"navbar-link-colour-text-selected-hover":vi["text-subtler"]},Footer:{"footer-colour-bg":vi["bg-inverse"],"footer-colour-text":vi["text-inverse"],"footer-link-colour-text":vi["text-inverse"],"footer-link-colour-text-hover":vi["text-inverse"],"footer-disclaimer-link-colour-text":vi["text-inverse"],"footer-disclaimer-link-colour-text-hover":vi["text-inverse"]}}},defaultValue:"default"},bl=(e,t)=>r=>{var n,o;const i=r.theme,a=Yo(ml,null==i?void 0:i.componentScheme);return vl((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},vl=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},yl=bl("Button","button-radius"),xl=bl("Button","button-default-colour-bg"),wl=bl("Button","button-default-colour-bg-hover"),$l=bl("Button","button-default-colour-text"),Cl=bl("Button","button-secondary-colour-border"),Sl=bl("Button","button-secondary-colour-text"),kl=bl("Button","button-light-colour-text"),Dl=bl("Button","button-link-colour-text"),Fl=D.button`
    padding: ${ia["spacing-8"]} ${ia["spacing-16"]};
    min-width: 4rem;
    border: ${oa["width-010"]} ${oa.solid} transparent;
    transition: all ${na["duration-250"]} ${na["ease-default"]};
    border-radius: ${yl};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${ta.bg};
                    border-color: ${e.$buttonIsDanger?ta["border-error-strong"]:Cl};

                    color: ${e.$buttonIsDanger?ta["text-error"]:Sl};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ta["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${ta.bg};
                    border-color: ${ta.border};

                    color: ${e.$buttonIsDanger?ta["text-error"]:kl};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ta["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?ta["text-error"]:Dl};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ta["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${ta["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ta["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?ta["bg-error-strong"]:xl};

                    ${da.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${$l};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?ta["bg-error-strong-hover"]:wl};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${ra["body-md-semibold"]}

                    ${da.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${ra["heading-md-semibold"]}

                    ${da.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${ra["heading-xs-semibold"]}

                    ${da.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,_l=D(hl)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,El=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Ol=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=Me(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Fl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(_l,{$hasChildren:El(o)}),e("span",{children:o})]}))};Ol.displayName="Button.Default";const Tl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=Me(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Fl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(_l,{$hasChildren:El(o)}),e("span",{children:o})]}))};Tl.displayName="Button.Small";const Il=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=Me(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Fl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(_l,{$hasChildren:El(o)}),e("span",{children:o})]}))};Il.displayName="Button.Large";const Ml={Default:o.forwardRef(Ol),Small:o.forwardRef(Tl),Large:o.forwardRef(Il)},Al=F`
    color: ${ta.icon};
    height: 1rem;
    width: 1rem;
`,Bl=D(ie)`
    ${Al}
`,zl=D(ae)`
    ${Al}
`,jl=D(oe)`
    ${Al}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ll=D.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Rl=D.div`
    display: flex;
    flex: 1;
    position: relative;
`,Pl=D.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Nl=D.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ta.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Hl=D.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Wl=D.div`
    display: flex;
`,Yl=D.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${jl} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Vl=D.span`
    ${ra["body-md-regular"]}
    color: ${ta.text};
`,Ul=D.div`
    display: flex;
`,Kl=D(Ia)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,ql=D.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Zl=D(Ml.Small)`
    flex: 1;
`,Gl=D.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Ql=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${aa.md};
    margin: 0 0.5rem;
    transition: ${na["duration-150"]} ${na["ease-default"]};

    // default styles
    ${ra["body-md-regular"]}
    border-radius: ${aa.md};
    border: ${oa["width-010"]} ${oa.solid} transparent;
    background-clip: border-box;
    color: ${ta.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?F`
                background: ${ta["bg-selected"]};
                border-color: ${ta["border-selected"]};
                color: ${ta["text-selected"]};
                font-weight: ${ra.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${ta["bg-selected-hover"]};
                        border-color: ${ta["border-selected-hover"]};
                        color: ${ta["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${ta["text-primary"]};
                font-weight: ${ra.Spec["weight-semibold"]};
            `:r?F`
                color: ${ta["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${ta["bg-selected-hover"]};
                    border-color: ${ta["border-selected-hover"]};
                    color: ${ta["text-selected-hover"]};
                    font-weight: ${ra.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${ta["bg-hover"]};
                color: ${ta["text-hover"]};
                font-weight: ${ra.Spec["weight-semibold"]};
            }
        `}}
`,Xl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onMonthSelect:f})=>{const p=v((()=>Ge.generateMonths(Le(t))),[t]),g=a(new Array(p.length).fill(null)),[m,b]=s(p.findIndex((e=>e.isSame(i,"month"))));h((()=>{var e;null!==m&&(null===(e=g.current[m])||void 0===e||e.focus())}),[m,p]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Ge.isWithinRange(n,d?Le(d):void 0,c?Le(c):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":Le().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||u,month:t,variant:a,tabIndex:s}};return p.length?e(Gl,{onBlur:()=>{b(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(Ql,{ref:e=>g.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),b(o))})(e,t,!o)},children:a},a)}))}):null},Jl=D.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,ed=D.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${na["duration-150"]} ${na["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${ra["body-md-regular"]}
    border-radius: ${aa.md};
    border: ${oa["width-010"]} ${oa.solid} transparent;
    background-clip: border-box;
    color: ${ta.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?F`
                background: ${ta["bg-selected"]};
                border-color: ${ta["border-selected"]};
                color: ${ta["text-selected"]};
                font-weight: ${ra.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${ta["bg-selected-hover"]};
                        border-color: ${ta["border-selected-hover"]};
                        color: ${ta["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${ta["text-primary"]};
                font-weight: ${ra.Spec["weight-semibold"]};
            `:"other-decade"===e||r?F`
                color: ${ta["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${ta["bg-selected-hover"]};
                    border-color: ${ta["border-selected-hover"]};
                    color: ${ta["text-selected-hover"]};
                    font-weight: ${ra.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${ta["bg-hover"]};
                color: ${ta["text-hover"]};
                font-weight: ${ra.Spec["weight-semibold"]};
            }
        `}}
`,td=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onYearSelect:f,setCalendarDate:p})=>{const g=v((()=>Ge.generateDecadeOfYears(Le(t))),[t]),m=a(new Array(g.length).fill(null)),[b,y]=s(t);h((()=>{var e;if(null===b)return;const t=g.findIndex((e=>e.isSame(b,"year")));t>=0&&(null===(e=m.current[t])||void 0===e||e.focus())}),[b,g]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=g.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!Ge.isWithinRange(a,d?Le(d):void 0,c?Le(c):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":Le().isSame(e,"year")?"current-year":"default",l=i.year()>=g[0].year()&&i.year()<=g[g.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||u,year:n,variant:s,tabIndex:l}};return g.length?e(Jl,{onBlur:()=>{y(null)},children:g.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(ed,{ref:e=>{m.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},rd=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:u,selectedStartDate:f,selectedEndDate:p,selectWithinRange:g,dynamicHeight:m=!1,allowDisabledSelection:b,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:F,getMonthHeaderLabel:_,getYearHeaderLabel:E,isFocusable:O=!1}=n,T=Me(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=s(rt.toDayjs(l)),[A,B]=s(rt.toDayjs(l)),[z,j]=s("default"),L=a(null),R=a(null),P=a(null),N=a(null);y(o,(()=>({defaultView(){j("default")},resetView(){const e=rt.toDayjs(l);M(e),B(e),j("default")},setCalendarDate(e){const t=rt.toDayjs(e);M(t),B(t)}}))),h((()=>{const e=rt.toDayjs(l);M(e),B(e)}),[l]),h((()=>{G(A)}),[A]);const H=()=>{var e;"month-options"!==z?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!Ge.isWithinRange(t,d?Le(d):void 0,c?Le(c):void 0,"month"))return;M(t),"default"===z&&B(t)}},Y=()=>{"default"!==z?(j("default"),M(A)):j("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===z?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!Ge.isWithinRange(t,d?Le(d):void 0,c?Le(c):void 0,"year"))return;M(t),"default"===z&&B(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=k?k(I):I.add(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),B(e),x||j("default")},Z=()=>{const e=rt.toDayjs(l);M(e),B(e),"default"===z?Q("reset"):j("default")},G=e=>{v&&v(e)},Q=e=>{$&&$(e)},X=()=>{if(!d||b)return!1;const e=Le(d);return"month-options"===z?!Ge.isPreviousYearWithinRange(I,e):"year-options"===z?!Ge.isPreviousDecadeWithinRange(I,e):D?D(I):!Ge.isPreviousMonthWithinRange(I,e)},J=()=>{if(!c||b)return!1;const e=Le(c);return"month-options"===z?!Ge.isNextYearWithinRange(I,e):"year-options"===z?!Ge.isNextDecadeWithinRange(I,e):F?F(I):!Ge.isNextMonthWithinRange(I,e)},ee=()=>{const n=_?_(I):I.format("MMM"),o=Le(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Ge.getStartEndDecade(I);return`${e} to ${t}`}return E?E(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(Yl,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:O?0:-1,children:[e(Vl,{children:n}),e(jl,{})]}),t(Yl,{ref:N,"aria-label":a[z],type:"button",$expanded:"default"!==z,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:O?0:-1,children:[e(Vl,{children:i}),e(jl,{})]})]})},te=()=>{switch(z){case"month-options":return e(Xl,{calendarDate:I,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onMonthSelect:q,allowDisabledSelection:b});case"year-options":return e(td,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onYearSelect:q,allowDisabledSelection:b});default:return null}};return t(Ll,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[z];return t(Hl,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Wl,{children:ee()}),t(Ul,{children:[e(Kl,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(Bl,{})}),e(Kl,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:e(zl,{})})]})]})})(),e(Rl,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:z}):i;if(m)return t(r,{children:["default"===z&&n,te()]});{const o="default"===z;return t(r,{children:[e(Pl,{inert:ol(!o),children:n}),e(Nl,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===z)&&w;return t(ql,{children:[e(Zl,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),e(Zl,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{r||(M(A),"default"===z?Q("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),nd=D.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,od=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${ra["body-sm-semibold"]};
    color: ${ta.text};
`,id=D.div`
    grid-column: 1 / -1;
    display: flex;
`,ad=e=>{let t=ta.bg,r="transparent";switch(e.$type){case"hover-subtle":t=ta["bg-hover"],r=ta["bg-hover"];break;case"hover":t=ta["bg-hover-strong"],r=ta["bg-hover-strong"];break;case"hover-outline":t=ta["bg-hover-subtle"],r=ta["border-hover"];break;case"selected-outline":t=ta["bg-selected"],r=ta["border-selected"];break;case"selected-outline-subtle":t=ta["bg-selected"],r=ta["border-selected-subtle"];break;case"selected-hover":t=ta["bg-selected-hover"];break;case"selected-hover-outline":t=ta["bg-selected-hover"],r=ta["border-selected-hover"]}return{color:t,borderColor:r}},sd=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,ld=D.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${na["duration-150"]} ${na["ease-default"]};
    border: ${oa["width-010"]} ${oa.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=ad(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,dd=D(ld)`
    left: 0;
`,cd=D(ld)`
    right: 0;
`,ud=D.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${na["duration-150"]} ${na["ease-default"]};

    border: ${oa["width-010"]} ${oa.solid} transparent;
    border-radius: ${aa.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=ad(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,hd=D(ud)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,fd=D(ud)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,pd=D.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,gd=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${ra["body-md-regular"]}
    transition: ${na["duration-150"]} ${na["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?F`
                    visibility: hidden;
                `:F`
                color: ${ta["text-disabled-subtlest"]};
            `;switch(r){case"selected":return F`
                    font-weight: ${ra.Spec["weight-semibold"]};
                    color: ${ta["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${ra.Spec["weight-semibold"]};
                    color: ${ta["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${ra.Spec["weight-semibold"]};
                    color: ${ta["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${ra.Spec["weight-semibold"]};
                    color: ${ta["text-hover"]};
                `;case"unavailable":return F`
                    color: ${ta["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${ta.text};
                `}}}

    &:focus {
        outline: none;
    }
`,md=D.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,bd=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:u,onSelect:f,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=Le().isSame(u,"day"),S=!!v&&v.isSame(u,"day"),k=`${u.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,D=a(null);h((()=>{var e;S&&D.current&&(null===(e=D.current)||void 0===e||e.focus())}),[S]);return t(sd,{"aria-hidden":x,children:[e(dd,{$type:r}),e(hd,{$type:o}),e(cd,{$type:n}),e(fd,{$type:i}),e(pd,{$interactive:d,children:t(gd,{ref:D,tabIndex:w,role:$,"aria-label":y||k,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{null==f||f(u)},onKeyDown:e=>{null==b||b(e)},onMouseEnter:()=>{null==p||p(u)},onMouseLeave:()=>{null==m||m(u)},onFocus:()=>{null==g||g(u)},children:[u.date(),c&&C&&e(md,{$disabled:l})]})})]})},vd=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=Ge.isDisabledDay(t,c,l,d),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=Le(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&o&&t&&(n&&r?(d=a,c=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(d=n,c=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Le(s),tabIndex:v};return e(bd,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Le().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&d?(t.isBetween(l,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Le.extend(He);const yd=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:f,maxDate:g,allowDisabledSelection:m,showActiveMonthDaysOnly:b,setCalendarDate:y})=>{const x=a(null);h((()=>{if(x.current){const e=x.current;x.current=null,D(e)}}),[r]);const w=p((()=>i&&Le(i).isSame(r,"month")?Le(i):l&&Le(l).isSame(r,"month")?Le(l):Le().isSame(r,"month")?Le():f&&r.isSame(Le(f),"month")?Le(f):Le(r).startOf("month")),[i,r,l,f]),$=e=>{const t=Le(e);if(Ge.isWithinRange(t,f?Le(f):void 0,g?Le(g):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);D(e)}},C=v((()=>Ge.generateDays(r)),[r]),S=v((()=>w()),[w]),[k,D]=s(""),[F,_]=s(""),E=(e,t)=>{t&&!m||d(e)},O=(e,t)=>{t&&!m||(_(e),c(e))},T=e=>{_(e),c(e)},I=()=>{_(""),c("")};return t(nd,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(D(""),_(""),c(""))},children:[C[0].map(((t,r)=>e(od,{"aria-hidden":!0,children:Le(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(id,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(vd,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:F,focusDate:k,currentFocus:n,minDate:f,maxDate:g,disabledDates:o,allowDisabledSelection:m,isNewSelection:u,showActiveMonthDaysOnly:b,onSelect:E,onHover:O,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},xd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=Ge.isDisabledDay(t,l,a,s),b=!m||d,{start:v,end:y}=n?Ge.getFixedRangeStartEnd(rt.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:w}=o?Ge.getFixedRangeStartEnd(rt.toDayjs(o),c):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),k=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),D=`From ${Le(x).format("D MMMM")} to ${Le(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,F=()=>{u(t,!b)},_=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},E={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:F,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&F());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:Le(i),role:"gridcell",tabIndex:g,label:D};return e(bd,Object.assign({},E,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Le().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&_(e,"hover",r===x,r===w),$&&_(e,"selected-outline",r===v,r===y),$&&C&&(_(e,"selected-hover-outline",S,k),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},wd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:f,setCalendarDate:g})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,C(e)}}),[r]);const b=p((()=>o&&Le(o).isSame(r,"month")?Le(o):Le().isSame(r,"month")?Le():d&&r.isSame(Le(d),"month")?Le(d):Le(r).startOf("month")),[o,r,d]),y=e=>{const t=Le(e);if(Ge.isWithinRange(t,d?Le(d):void 0,c?Le(c):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(m.current=e);C(e)}},x=v((()=>Ge.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,k]=s(""),D=(e,t)=>{t&&!u||(i(e),e&&!Le(e).isSame(e,"month")&&k(""))},F=(e,t)=>{t&&!u||(k(e),l(e))},_=e=>{k(e),l(e)},E=()=>{k(""),l("")};return t(nd,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),k(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(od,{"aria-hidden":!0,children:Le(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(id,{role:"row",onMouseLeave:E,children:t.map(((t,i)=>e(xd,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:D,onHover:F,numberOfDays:f,onFocus:_,setFocusCell:y,tabIndex:Le(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},$d=D.div`
    width: 100%;
    background: ${ta.bg};
`,Cd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=Ge.isDisabledDay(t,l,a,s),b=!m||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Le(i),tabIndex:g};return e(bd,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Le().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Le.extend(He);const Sd=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:f,setCalendarDate:g})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,C(e)}}),[r]);const b=p((()=>o&&Le(o).isSame(r,"month")?Le(o):Le().isSame(r,"month")?Le():d&&r.isSame(Le(d),"month")?Le(d):Le(r).startOf("month")),[o,r,d]),y=e=>{const t=Le(e);if(Ge.isWithinRange(t,d?Le(d):void 0,c?Le(c):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(m.current=e);C(e)}},x=v((()=>Ge.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,k]=s(""),D=(e,t)=>{t&&!u||i(e)},F=(e,t)=>{t&&!u||(k(e),l(e))},_=e=>{k(e),l(e)},E=()=>{k(""),l("")};return t(nd,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),k(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(od,{"aria-hidden":!0,children:Le(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(id,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:E,children:t.map(((t,i)=>e(Cd,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:f,onSelect:D,onHover:F,onFocus:_,setFocusCell:y,tabIndex:Le(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},kd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:h,setFocusCell:f,tabIndex:p})=>{const g=Ge.isDisabledDay(t,l,a,s),m=!g||d,{start:b,end:v}=Ge.getWeekStartEnd(rt.toDayjs(n)),{start:y,end:x}=Ge.getWeekStartEnd(rt.toDayjs(o)),{start:w,end:$}=Ge.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),k=o&&t.isBetween(y,x,"day","[]"),D=S&&t.isSame(b)||k&&t.isSame(y),F=S&&t.isSame(v)||k&&t.isSame(x),_=`From ${Le(w).format("D MMMM")} to ${Le($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,E=()=>{c(t,!m)},O={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:E,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&E());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),f(r.format("YYYY-MM-DD")))})(e)},focusDate:Le(i),tabIndex:p,label:_,ariaHidden:!C||void 0,role:C?"button":"none"};return e(bd,Object.assign({},O,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Le().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&k?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):k&&(t="hover",r="hover"),t&&(e.labelType=r,D?e.circleLeft=t:e.bgLeft=t,F?e.circleRight=t:e.bgRight=t),e})()))},Dd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,setCalendarDate:f})=>{const g=a(null);h((()=>{if(g.current){const e=g.current;g.current=null,$(e)}}),[r]);const m=p((()=>o&&Le(o).isSame(r,"month")?Le(o):Le().isSame(r,"month")?Le().startOf("week"):d&&r.isSame(Le(d),"month")?Le(d):Le(r).startOf("month")),[o,r,d]),b=e=>{const t=Le(e);if(Ge.isWithinRange(t,d?Le(d):void 0,c?Le(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(g.current=e);$(e)}},y=v((()=>Ge.generateDays(r)),[r]),x=v((()=>m()),[m]),[w,$]=s(""),[C,S]=s(""),k=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!Le(e).isSame(r,"month")&&S("")},D=(e,t)=>{t&&!u||(S(e),l(e))},F=e=>{S(e),l(e)},_=()=>{S(""),l("")};return t(nd,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(od,{"aria-hidden":!0,children:Le(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(id,{onMouseLeave:_,role:"group",children:t.map(((t,i)=>e(kd,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:k,onHover:D,onFocus:F,setFocusCell:b,tabIndex:Le(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},Fd=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const $=a(null),C=a(void 0),S=a(null);y(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const k=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),F(r)},D=e=>{_(e)},F=e=>{n&&n(e)},_=e=>{o&&o(e)},E=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e($d,{ref:S,children:e(rd,{ref:$,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),E(e)),C.current=e},initialCalendarDate:m,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(Dd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:k,onHover:D,setCalendarDate:o});case"fixed-range":return e(wd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:k,onHover:D,numberOfDays:b,setCalendarDate:o});case"single":return e(Sd,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:k,onHover:D,setCalendarDate:o});default:return e(yd,{calendarDate:r,currentFocus:d,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:k,onHover:D,setCalendarDate:o})}})(r)})})})),_d=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=el();return e(rl,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(Fd,Object.assign({ref:r},t))}))})),Ed=F`
    outline-offset: -1px;
    outline: ${oa["width-020"]} ${oa.solid} ${ta["border-focus"]};
`,Od=F`
    outline-color: ${ta["border-focus"]};
`,Td=F`
    outline-color: ${ta["border-disabled"]};
`,Id=F`
    outline-color: ${ta["border-error-focus"]};
`,Md=F`
    outline: none;
`,Ad=D.div`
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    background: ${ta.bg};

    &:focus-within {
        ${Ed}
    }
    ${e=>e.$focused&&!e.$noBorder&&Ed}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Od}
                }
                ${e.$focused&&Od}
            `:e.$disabled?F`
                background: ${ta["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Td}
                }
                ${e.$focused&&Td}
            `:e.$error?F`
                border-color: ${ta["border-error"]};

                &:focus-within {
                    ${Id}
                }
                ${e.$focused&&Id}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Md}
                }
            `}}
`,Bd=D(Ad)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ia["spacing-16"]} 0
        ${e=>e.$readOnly?"0":ia["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,zd=D.input`
    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}
    color: ${ta.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${ta["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${ta["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,jd=D.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${oa["width-010"]} ${oa.solid}
            ${ta["border-focus"]};
        border-radius: ${aa.sm};
    }
`,Ld=D.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Rd=D.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Pd}, ${Yd} {
                    color: ${ta["text-subtler"]};
                }
            `}}
`,Pd=D(zd)`
    background: transparent;
    text-align: center;
`,Nd=D(Pd)`
    width: 2rem;
    margin-right: ${ia["spacing-4"]};
`,Hd=D(Pd)`
    width: 2.5rem;
`,Wd=D(Pd)`
    width: 3rem;
    margin-left: ${ia["spacing-4"]};
`,Yd=D.span`
    ${ra["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${ta.text};
            `}}
`,Vd=D.div`
    ${ra["body-baseline-regular"]}
    background-color: ${ta.bg};
    color: ${ta["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${ta["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Le.extend(Pe);const Ud=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:l,hoverValue:d,placeholder:c,label:u,onChange:f,onFocus:p,onBlur:g,hideInputKeyboard:m,inputLabels:b=["Date","Month","Year"]},v)=>{const x=m?"none":"numeric",[w,$,C]=lr(""),[S,k,D]=lr(""),[F,_,E]=lr(""),[O,T]=s("none"),[I,M]=s(!1),A=a(null),B=a(null),z=a(null),j=a(null),[L,R,P]=U(d);h((()=>{var e;const[t="",r="",n=""]=U(i);$(t),k(r),_(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=B.current)||void 0===e||e.focus()}),[i]),h((()=>{var e;l||T("none"),l&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))}),[l]),y(v,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),k(t),_(r)},focusYearRef(){var e;null===(e=j.current)||void 0===e||e.focus()}})),[$,k,_,i]);const N=e=>{var t;e.preventDefault(),null===(t=B.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:D.current,[n]:E.current},a=e.target.name,s=i[a],l=a!==n?st.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,k(l)}const d=`${i[n]}-${i[r]}-${i[t]}`,c=Le(d,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];c&&s!==l&&f(d),A.current&&!A.current.contains(e.relatedTarget)&&(T("none"),null==g||g(u||c))},Y=e=>{var t,r;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:F};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=z.current)||void 0===t||t.focus());break;case o[1]:a.month=i,k(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case o[2]:a.year=i,_(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;Le(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===S.length&&(null===(t=B.current)||void 0===t||t.focus()),O===o[2]&&0===F.length&&(null===(r=z.current)||void 0===r||r.focus()))};function U(e){if(e){const t=nt.sanitizeInput(e);if(!t)return[void 0,void 0,void 0];const r=Le(t,"YYYY-MM-DD",!0);return[st.padValue(r.date().toString()),st.padValue((r.month()+1).toString()),r.year().toString()]}return[void 0,void 0,void 0]}return t(Ld,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==p||p(e))},children:[t(Rd,{ref:A,$hover:!!d,children:[e(Nd,{ref:B,name:o[0],maxLength:2,value:null!=L?L:w,onFocus:H,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":b[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[0]||n?"DD":""}),e(Yd,{$inactive:0===w.length,children:"/"}),e(Hd,{ref:z,name:o[1],maxLength:2,value:null!=R?R:S,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":b[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[1]||n?"MM":""}),e(Yd,{$inactive:0===S.length,children:"/"}),e(Wd,{ref:j,name:o[2],maxLength:4,value:null!=P?P:F,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":b[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&c)return e(Vd,{$hide:I,$disabled:r,onMouseDown:N,children:c})})()]})})),Kd=D(Bd)`
    height: 3rem;
`,qd=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:l,hideInputKeyboard:d,value:c,onChange:u,onFocus:f,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=Me(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=s(nt.sanitizeInput(c)),[k,D]=s(nt.sanitizeInput(c)),[F,_]=s(void 0),[E,O]=s(!1),[T,I]=s(!1),M=a(null),A=a(null),B=a(null);h((()=>{const e=nt.sanitizeInput(c);S(e),D(e)}),[c]);const z=e=>{!y&&nt.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(D(e),m||(H(e),S(e),e&&O(!1)))},j=e=>{var t;D(e),m||(H(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),O(!1)),_(void 0))},L=()=>{b||o||(O(!0),T||(I(!0),f&&f()))},R=e=>{var t,r,n;const o=e.relatedTarget,i=B.current&&B.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!E&&!a&&!s||E&&!a&&!i&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),D(C),I(!1),O(!1),W())},P=e=>{_(e)},N=e=>{var t,r;switch(e){case"reset":D(C);break;case"confirmed":S(k),H(k)}Le(k,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),O(!1)},H=e=>{u&&u(e)},W=()=>{p&&p()};return e(tl,{enabled:!b&&!o,isOpen:E,renderElement:()=>e(Kd,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:R,onFocus:L,$disabled:o,$readOnly:b,$focused:T,$error:l,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(Ud,{ref:A,disabled:o,onChange:z,readOnly:b,focused:E,names:["start-day","start-month","start-year"],value:k,hoverValue:F,hideInputKeyboard:d})})),renderDropdown:({elementWidth:t})=>e(_d,{variant:"single",ref:B,initialCalendarDate:k,withButton:m,value:k,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:j,onDismiss:N,onYearMonthDisplayChange:g,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),D(C),O(!1),I(!1),W(),_(void 0)},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),D(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},Zd=D.div`
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
                    max-width: calc(
                        100% - ${ra.Spec["body-size-baseline"]} -
                            ${ia["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${ia["spacing-8"]};
                }
            `}}
`,Gd=D.div`
    width: 100%; // Force next flex item to break to next line
`,Qd=D.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Xd=D(se)`
    color: ${ta.icon};
    width: ${ra.Spec["body-size-baseline"]};
    height: ${ra.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${ia["spacing-8"]};
    align-self: center;
`,Jd=D.div`
    position: absolute;
    background: ${e=>e.$error?ta["border-error-focus-strong"]:ta["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${ia["spacing-8"]} - (${ra.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${na["duration-350"]} ${na["ease-standard"]},
        opacity ${na["duration-350"]} ${na["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${ia["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,ec=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Zd,{className:i,$wrap:a,children:[e(Qd,{"data-id":"range-container-elem1-container",children:s}),e(Xd,{}),a&&e(Gd,{}),e(Qd,{"data-id":"range-container-elem2-container",children:l}),e(Jd,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},tc=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},rc=D(Bd)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?F`
                    padding: ${ia["spacing-12"]} 0;
                `:F`
                padding: ${ia["spacing-12"]} ${ia["spacing-16"]};
            `}}
`,nc=D.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,oc={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},ic=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:l,error:d,hideInputKeyboard:c,value:u,valueEnd:f,onChange:g,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:D,dropdownRootNode:F}=r,_=Me(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[E,O]=s(),[T,I]=s(void 0),M="week"===w,A="fixed-range"===w,[B,z]=s(!1),[j,L]=s(!1),[{selectedStart:R,selectedEnd:P,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&tc(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:oc,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=a(!1),q=a(null),Z=a(null),G=a(null),Q=a(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=s(!1);return rr({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});h((()=>{U.resetRange({start:nt.sanitizeInput(u),end:nt.sanitizeInput(f)})}),[u,f]),h((()=>{"start"===N?O(R):"end"===N&&P&&O(P)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(R&&P?(U.done({start:R,end:P}),null==g||g(R,P)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=Z.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(y||P||!Y||(U.resetRange({start:"",end:""}),null==g||g("","")));if(!P)return void U.focus("end");if(Le(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:P}),void(null==g||g(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(Le(e).isBefore(R,"day"))return U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=Z.current)||void 0===r||r.setCalendarDate(e)),e){if(R)return y?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),U.done({start:R,end:e}),void(null==g||g(R,e)));U.focus("start")}else y||R||!W||(U.resetRange({start:"",end:""}),null==g||g("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==g||g("","")));const n=Le(e).format("YYYY-MM-DD"),o=Le(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,y?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==g||g(n,o)))},ne=()=>{(M||A)&&L(!0),M&&z(!0),C||i||V||(U.focus("start"),null==m||m())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=Z.current&&Z.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!H&&!s&&!l||H&&!s&&!a&&!l)&&(U.blur(),L(!1),z(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=Q.current)||void 0===o||o.resetPlaceholder(),fe())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==m||m())},ae=()=>{if(M){const e=rt.toDayjs(R).startOf("week").format("YYYY-MM-DD");z(!0),L(!0),O(e)}},se=()=>{A&&(L(!0),O(R))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},de=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{var t;const r=Le(e).startOf("week").format("YYYY-MM-DD"),n=Le(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!y)null===(t=Q.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==g||g(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:R,end:P}),null==g||g(R,P),M)break;ge(R,P)&&("range"===w?null===(r=Q.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{I(e)},fe=()=>{b&&b()},pe=e=>!k&&e&&nt.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&Le(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?T:void 0,end:"end"===N?T:void 0};break;case"week":if(!T)return;t={start:Le(T).startOf("week").format("YYYY-MM-DD"),end:Le(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Le(T).format("YYYY-MM-DD"),end:Le(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(tl,{enabled:!C&&!i,isOpen:H,onClose:()=>{var e,t;U.blur(),z(!1),L(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),fe()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(rc,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:d,$wrap:X,id:S,"data-testid":_["data-testid"],"aria-disabled":i,onKeyDown:J},_,{children:t(ec,{currentActive:N,wrap:X,error:d,children:[e(nc,{$wrap:X,children:e(Ud,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:R,disabled:i,readOnly:B||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:c})}),e(nc,{$wrap:X,children:e(Ud,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:j||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:de,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:t})=>e(_d,{ref:Z,variant:w,initialCalendarDate:E,withButton:y,value:R,endValue:P,selectWithinRange:W||Y,currentFocus:N,disabledDates:l,minDate:n,maxDate:o,allowDisabledSelection:k,onSelect:ce,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:D,offset:16,rootNode:F})},ac=D(Fl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,sc=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=Me(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(ac,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(hl,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};sc.displayName="ButtonWithIcon.Default";const lc=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=Me(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(ac,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(hl,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};lc.displayName="ButtonWithIcon.Small";const dc={Default:o.forwardRef(sc),Small:o.forwardRef(lc)},cc=({className:t,progress:r,color:n,"data-testid":o})=>e(uc,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),uc=D.div`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):ta["icon-primary-subtle"](e),F`
            border: ${oa["width-010"]} ${oa.solid} ${r};
            border-radius: ${aa.sm};

            &:after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${r};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,hc=D.button`
    align-items: center;
    border-radius: ${aa.sm};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return F`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return F`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return F`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return F`
                    background-color: ${ta.bg};
                    border: ${oa["width-010"]} ${oa.solid}
                        ${ta["border-primary"]};
                    color: ${ta["text-primary"]};

                    &:hover {
                        background-color: ${ta["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${ta.bg};
                    border: ${oa["width-010"]} ${oa.solid}
                        ${ta.border};
                    color: ${ta["text-primary"]};

                    &:hover {
                        background-color: ${ta["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${ta["bg-disabled"]};
                    border: ${oa["width-010"]} ${oa.solid}
                        ${ta["border-disabled"]};
                    color: ${ta["text-disabled"]};
                    cursor: not-allowed;
                `;default:return F`
                    background-color: ${ta["bg-primary"]};
                    border: none;
                    color: ${ta["text-inverse"]};

                    &:hover {
                        background-color: ${ta["bg-primary-hover"]};
                    }
                `}}}
`,fc=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button",disabled:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=Me(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(hc,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$styleType:l?"disabled":o,$sizeType:a,"aria-disabled":l,disabled:l&&!d,onClick:l?void 0:c},u,{children:i}))})),pc=D.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${da.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,gc=Object.assign((t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=Me(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:f,offsetTop:p}=Za();return h((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(Ya,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:e(pc,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:f,$offsetTop:p},u,{children:i}))})}),{Box:Ba}),mc=F`
    ${e=>`\n        ${da.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${la["sm-max"](e)}px)\n    `}
`,bc=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${la["sm-max"](e)}px)\n    `}
`,vc=D.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${oa.Util["dashed-default"]({radius:aa.sm,thickness:oa["width-040"],colour:e.$disabled?ta["border-disabled"]:ta.border})}

            background-color: ${e.$disabled?ta["bg-disabled"]:ta.bg};
        `}
    height: 14.125rem;
`,yc=D(Ml.Default)`
    width: fit-content;
    margin: 0 ${ia["spacing-20"]};

    &:disabled {
        border-color: ${ta["border-strong"]};
    }
`,xc=D(fc)`
    position: absolute;
    top: ${ia["spacing-16"]};
    right: ${ia["spacing-16"]};

    &:disabled {
        border-color: ${ta["border-strong"]};
    }
`,wc=D.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${ia["spacing-16"]}) * 2);
    height: 100%;
`,$c=D.div`
    background: ${ta["bg-primary-subtlest"]};
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    margin: 0 ${ia["spacing-20"]};
    padding: ${ia["spacing-16"]};
    display: flex;
    gap: ${ia["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Cc=D(Ea.BodySM)`
    margin-top: ${ia["spacing-16"]};
`,Sc=D(gc)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,kc=D.div`
    width: 100%;
    margin: auto;
    padding: ${ia["layout-xxl"]} ${ia["layout-sm"]};

    ${mc} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Dc=D(gc.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${ia["spacing-16"]};

    ${mc} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${ia["spacing-8"]};
        --close-button-right-inset: ${ia["spacing-20"]};
    }
`,Fc=D.h2`
    ${ra["body-baseline-semibold"]}
    color: ${ta.text};
    margin-bottom: ${ia["spacing-16"]};
    text-align: center;

    ${mc} {
        ${ra["body-md-semibold"]}
        margin: ${ia["spacing-12"]} 0;
    }
`,_c=D.div`
    width: 100%;
    height: 20rem;
    border-radius: ${aa.lg};
    overflow: hidden;

    ${mc} {
        border-radius: 0;
        flex: 1;
    }

    ${bc} {
        background: ${ta["bg-strong"]};
    }
`,Ec=D.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ta["bg-stronger"]};
    margin: auto;

    ${mc} {
        aspect-ratio: 4/3;
    }
    ${da.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${bc} {
        width: auto;
        height: 100%;
    }
`,Oc=D.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ta["border-strong"]};
    pointer-events: none;

    ${mc} {
        width: calc(100% - ${ia["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Tc=D.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${ia["spacing-16"]};

    ${da.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${ia["spacing-16"]} ${ia["spacing-24"]}
            ${ia["spacing-48"]};
        gap: ${ia["spacing-16"]};
    }

    ${bc} {
        flex-direction: row;
        margin: ${ia["spacing-16"]} ${ia["spacing-20"]};
    }
`,Ic=D(Ml.Default)`
    width: 8.5rem;
    ${da.MaxWidth.sm} {
        width: 100%;
    }
    ${bc} {
        height: 2.5rem;
    }
`,Mc=D.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ac=D.canvas`
    cursor: crosshair;
`,Bc=w((()=>Ae(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.0456ca96.js")).ESignatureCanvas}})))),zc=n=>{const{description:o,id:i,loadingProgress:l,loadingLabel:d="Uploading...",onChange:c,value:u,disabled:f}=n,p=Me(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[g,b]=s(!1),v=a(null),[y,x]=s(u),w=m(E),C=la["sm-max"]({theme:w}),S=ur.useMediaQuery({maxWidth:C}),k=ur.useMediaQuery({maxHeight:C,orientation:"landscape"}),D=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},F=()=>{if(v.current){const e=v.current.export();x(e),b(!1),null==c||c(e)}};h((()=>{x(u)}),[u]);return t("div",Object.assign({},p,{children:[e(vc,{$disabled:f,children:"number"==typeof l?t($c,{children:[d&&e(Ea.BodyMD,{children:d}),e(cc,{progress:null!=l?l:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(wc,{src:y,alt:"Signature preview"}),e(xc,{styleType:"light",onClick:()=>b(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(le,{})})]}):e(yc,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>b(!0),disabled:f,children:"Add signature"})}),e(Sc,{"data-testid":"signature-modal",show:g,children:e(kc,{children:t(Dc,{onClose:()=>b(!1),children:[e(Fc,{children:"Signature"}),e(_c,{children:t(Ec,{children:[e(Oc,{}),e($,{fallback:null,children:g&&e(Bc,{ref:v,baseImageDataURL:y})})]})}),t(Tc,{children:[e(Ic,{as:k?dc.Small:dc.Default,type:"button",styleType:S&&!k?"light":"link",icon:e(de,{}),onClick:D,children:"Clear"}),e(Ic,{as:k?Ml.Small:Ml.Default,type:"button",onClick:F,children:"Save"})]})]})})}),o?e(Cc,{children:o}):null]}))};function jc(e,t){return jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},jc(e,t)}function Lc(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Rc(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Pc(e){return null!==e&&1===e.length?e[0]:e.slice()}function Nc(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Hc(e,t){return Wc(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Wc(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Yc=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Nc(r.getMouseEventMap())}))}Lc(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Hc(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Nc(r.getKeyDownEventMap()),Lc(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Nc(r.getMouseEventMap()),Lc(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Nc(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Pc(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Pc(r.state.value)};return r.props.renderTrack(o,i)};let n=Rc(t.value);n.length||(n=Rc(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Hc(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,jc(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Rc(e.value);return r.length?t.pending?null:{value:r.map((t=>Hc(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Pc(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Hc(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,d=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:d,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Hc(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Hc(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Hc(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Wc(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Wc(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Pc(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Yc.displayName="ReactSlider",Yc.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Vc=Yc;const Uc=D.div`
    isolation: isolate;
`,Kc=D.div`
    margin-top: ${ia["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ia["spacing-8"]};
`,qc=D.div`
    margin-bottom: ${ia["spacing-8"]};
`,Zc=D(Ea.BodyBL)`
    overflow-wrap: anywhere;
`,Gc=D(Vc)`
    height: 0.875rem;
`,Qc=D.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$readOnly?void 0:F`
                cursor: grab;
                &:active {
                    cursor: grabbing;
                }
            `}

    &:after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${ta.bg};
        box-shadow: ${sa["sm-subtle"]};
        border: ${oa["width-010"]} ${oa.solid}
            ${e=>e.$disabled?ta["border-selected-disabled"]:ta["border-strong"]};
        border-radius: ${aa.full};
    }
`,Xc=D.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Qc}:after {
        outline-offset: -1px;
        outline: ${oa["width-040"]} ${oa.solid}
            ${ta["border-selected"]};
    }
`,Jc=D.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${aa.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ta["border-strong"](e)};
`,eu=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:l,numOfThumbs:d=2,colors:c,disabled:u,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=Me(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,D]=s(_()),F=function(){const e=function(){const e=u||f?ta["border-disabled"]:ta["border-strong"],t=u||f?ta["border-selected-disabled"]:ta["border-selected"];if(1===d)return[t,e];const r=[];r.push(e);for(let e=0;e<d-1;e++)r.push(t);return r.push(e),r}();return new Array(d+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();h((()=>{n!==k&&D(_())}),[n]);function _(){if(n&&n.length===d)return n;const e=[];for(let t=0;t<d;t++)e.push(o+a*t);return e}const E=e=>w?w(e):t(Zc,{children:[m,e,b]});return t(Uc,Object.assign({},S,{children:[v&&e(qc,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(Zc,{children:[y,e,x]})})()}),e(Gc,{step:a,min:o,max:i,value:k,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const r=[...e];D(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==C||C(t)}else{const t=[...e];D(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(Xc,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(Qc,{$disabled:u,$readOnly:f})})),renderTrack:(t,r)=>e(Jc,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:F[r.index]}))}),g&&t(Kc,{children:[e("div",{children:E(o)}),e("div",{children:E(i)})]})]}))},tu=D.div`
    display: flex;
    margin-bottom: ${ia["spacing-16"]};
    align-items: baseline;
`,ru=D.div`
    margin: 0 0.5rem;
`,nu=D.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,ou=D.div`
    flex: 1;
    border-radius: ${aa.sm} ${aa.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=ta["bg-strongest"];return e.$disabled&&e.$selected?t=ta["bg-selected-stronger-disabled"]:e.$disabled?t=ta["bg-disabled"]:e.$selected&&(t=ta["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,iu=D(eu)`
    margin-top: -0.3125rem;
`,au=n=>{var{bins:o=[],interval:i,disabled:a,readOnly:l,value:d,showRangeLabels:c,rangeLabelPrefix:u,rangeLabelSuffix:f,ariaLabels:p,onChange:g,onChangeEnd:m,renderEmptyView:b,renderRangeLabel:y}=n,x=Me(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[D,F]=s(T()),_=v((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===k+i*n));t?r.push(t):r.push({count:0,minValue:k+i*n})}return r}),[o,i]);h((()=>{d!==D&&F(T())}),[d]);const E=e=>{const[t,r]=e,n=[t,r];F(n),null==g||g(n)},O=e=>{const[t,r]=e,n=[t,r];F(n),null==m||m(n)};function T(){return null!=d?d:[k,k+i]}const I=e=>y?y(e):t(Ea.BodyBL,{children:[u,e,f]});return t("div",Object.assign({},x,{children:[c&&t(tu,{children:[I(D[0]),e(ru,{children:"-"}),I(D[1])]}),_.every((e=>0===e.count))&&b?b():t(r,{children:[e(nu,{children:_.map(((t,r)=>{const n=t.count/$;return e(ou,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=D[0]&&t.minValue<D[1],$disabled:a||l},r)}))}),e(iu,{min:k,max:S+i,step:i,minRange:i,numOfThumbs:2,value:D,disabled:a,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:O})]})]}))},su=D(zd)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:ia["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:ia["spacing-16"]};
        `}
`,lu=D(jd)`
    height: auto;
    padding: ${ia["spacing-12"]} ${ia["spacing-16"]};

    cursor: pointer;
    color: ${ta.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${ia["spacing-12"]};
        `}
`,du=D(M)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,cu=D.div`
    display: flex;
    width: 100%;
`,uu=D(Ad)`
    display: flex;
    align-items: center;
    width: 100%;
`,hu=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:h,onClear:f,allowClear:p=!1,className:g,styleType:m="bordered"}=n,b=Me(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,t)=>"tel"===e&&!!t)(l,s),x=a(null);y(o,(()=>x.current),[]);const w=ar({ref:x,formatter:e=>v?st.transformWithSpaces(e,s):e}),$=e=>{h&&(v?S(e):h(e))},C=()=>{f&&f(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},k=i?(e=>e?v?st.transformWithSpaces(e,s):e:"")(i):i,D=p&&!c&&!u&&!!i,F=()=>t(r,{children:[e(su,Object.assign({"data-testid":"input",ref:x,"aria-disabled":c,value:k,onChange:$,type:l,readOnly:u||c,$showClear:D,$styleType:m,$visuallyReadOnly:u},b)),D&&e(lu,{onClick:C,type:"button","aria-label":"Clear input",$styleType:m,children:e(du,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===m?e(cu,{className:g,children:F()}):e(uu,{$disabled:c,$error:d,$readOnly:u,className:g,children:F()})})})),fu=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${at.generate()}`)),$=null!=i?i:w;return e(Ps,{id:$,"data-testid":l,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(hu,Object.assign({id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,ref:r,error:!!o},x))})})),pu=D.div`
    font-weight: ${e=>e.$bold?ra.Spec["weight-semibold"]:ra.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${ta["text-disabled"]};
            `:e.$selected?F`
                color: ${ta["text-selected"]};
            `:F`
                color: ${ta.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&$a(e.$maxLines||2)}
    overflow-wrap: break-word;
`,gu=D.div`
    color: ${ta["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&$a(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${ra["body-md-semibold"]}
                `:F`
                    ${ra["body-baseline-regular"]}
                `}
`,mu=D.span`
    font-weight: ${ra.Spec["weight-semibold"]};
`,bu=D.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${pu} {
                        display: inline;
                    }

                    ${gu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,vu=D.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,yu=D.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,xu=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const f=m(E),g="small"===h?ra.Spec["body-size-md"]({theme:f}):ra.Spec["body-size-baseline"]({theme:f}),b=ra.Spec["font-family"]({theme:f}),{ref:y,width:x}=rr(),w=p((e=>{if("inline"!==o||!x)return!1;return st.getTextWidth(e,`${g} '${b}'`)>x*s-50}),[x,o,g,b,s]),$=v((()=>w(i)),[w,i]),C=v((()=>c&&w(c)),[w,c]),S=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:t(r,{children:[i.slice(0,s),e(mu,{$variant:h,children:i.slice(s,l)}),i.slice(l)]})},k=n=>t(r,{children:[e(vu,{$maxLines:s,"aria-hidden":!0,children:S(n)}),e(yu,{$maxLines:s,"aria-hidden":!0,children:S(n)})]});return t(bu,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:h,children:[e(pu,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?k(i):S(i)}),c&&e(gu,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&C?k(c):c})]})};var wu=Kn;var $u=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Cu=function(e){return this.__data__.get(e)};var Su=function(e){return this.__data__.has(e)},ku=Kn,Du=qn,Fu=go;var _u=function(e,t){var r=this.__data__;if(r instanceof ku){var n=r.__data__;if(!Du||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Fu(n)}return r.set(e,t),this.size=r.size,this},Eu=Kn,Ou=function(){this.__data__=new wu,this.size=0},Tu=$u,Iu=Cu,Mu=Su,Au=_u;function Bu(e){var t=this.__data__=new Eu(e);this.size=t.size}Bu.prototype.clear=Ou,Bu.prototype.delete=Tu,Bu.prototype.get=Iu,Bu.prototype.has=Mu,Bu.prototype.set=Au;var zu=Bu;var ju=go,Lu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ru=function(e){return this.__data__.has(e)};function Pu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ju;++t<r;)this.add(e[t])}Pu.prototype.add=Pu.prototype.push=Lu,Pu.prototype.has=Ru;var Nu=function(e,t){return e.has(t)},Hu=Pu,Wu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Yu=Nu;var Vu=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,f=2&r?new Hu:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Wu(t,(function(e,t){if(!Yu(f,t)&&(p===e||o(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Uu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Ku=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},qu=mr.Uint8Array,Zu=En,Gu=Vu,Qu=Uu,Xu=Ku,Ju=br?br.prototype:void 0,eh=Ju?Ju.valueOf:void 0;var th=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new qu(e),new qu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Zu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Qu;case"[object Set]":var l=1&n;if(s||(s=Xu),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=Gu(s(e),s(t),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(eh)return eh.call(e)==eh.call(t)}return!1};var rh=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},nh=rh,oh=hr;var ih=function(e,t,r){var n=t(e);return oh(e)?n:nh(n,r(e))};var ah=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},sh=function(){return[]},lh=Object.prototype.propertyIsEnumerable,dh=Object.getOwnPropertySymbols,ch=dh?function(e){return null==e?[]:(e=Object(e),ah(dh(e),(function(t){return lh.call(e,t)})))}:sh;var uh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},hh=_r,fh=Er;var ph=function(e){return fh(e)&&"[object Arguments]"==hh(e)},gh=Er,mh=Object.prototype,bh=mh.hasOwnProperty,vh=mh.propertyIsEnumerable,yh=ph(function(){return arguments}())?ph:function(e){return gh(e)&&bh.call(e,"callee")&&!vh.call(e,"callee")},xh={exports:{}};var wh=function(){return!1};!function(e,t){var r=mr,n=wh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(xh,xh.exports);var $h=xh.exports,Ch=/^(?:0|[1-9]\d*)$/;var Sh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Ch.test(e))&&e>-1&&e%1==0&&e<t};var kh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Dh=_r,Fh=kh,_h=Er,Eh={};Eh["[object Float32Array]"]=Eh["[object Float64Array]"]=Eh["[object Int8Array]"]=Eh["[object Int16Array]"]=Eh["[object Int32Array]"]=Eh["[object Uint8Array]"]=Eh["[object Uint8ClampedArray]"]=Eh["[object Uint16Array]"]=Eh["[object Uint32Array]"]=!0,Eh["[object Arguments]"]=Eh["[object Array]"]=Eh["[object ArrayBuffer]"]=Eh["[object Boolean]"]=Eh["[object DataView]"]=Eh["[object Date]"]=Eh["[object Error]"]=Eh["[object Function]"]=Eh["[object Map]"]=Eh["[object Number]"]=Eh["[object Object]"]=Eh["[object RegExp]"]=Eh["[object Set]"]=Eh["[object String]"]=Eh["[object WeakMap]"]=!1;var Oh=function(e){return _h(e)&&Fh(e.length)&&!!Eh[Dh(e)]};var Th=function(e){return function(t){return e(t)}},Ih={exports:{}};!function(e,t){var r=fr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ih,Ih.exports);var Mh=Ih.exports,Ah=Oh,Bh=Th,zh=Mh&&Mh.isTypedArray,jh=zh?Bh(zh):Ah,Lh=uh,Rh=yh,Ph=hr,Nh=$h,Hh=Sh,Wh=jh,Yh=Object.prototype.hasOwnProperty;var Vh=function(e,t){var r=Ph(e),n=!r&&Rh(e),o=!r&&!n&&Nh(e),i=!r&&!n&&!o&&Wh(e),a=r||n||o||i,s=a?Lh(e.length,String):[],l=s.length;for(var d in e)!t&&!Yh.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Hh(d,l))||s.push(d);return s},Uh=Object.prototype;var Kh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Uh)};var qh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Zh=Kh,Gh=qh,Qh=Object.prototype.hasOwnProperty;var Xh=function(e){if(!Zh(e))return Gh(e);var t=[];for(var r in Object(e))Qh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Jh=Hr,ef=kh;var tf=function(e){return null!=e&&ef(e.length)&&!Jh(e)},rf=Vh,nf=Xh,of=tf;var af=function(e){return of(e)?rf(e):nf(e)},sf=ih,lf=ch,df=af;var cf=function(e){return sf(e,df,lf)},uf=Object.prototype.hasOwnProperty;var hf=function(e,t,r,n,o,i){var a=1&r,s=cf(e),l=s.length;if(l!=cf(t).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in t:uf.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++d<l;){var g=e[c=s[d]],m=t[c];if(n)var b=a?n(m,g,c,t,e,i):n(g,m,c,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},ff=ln(mr,"DataView"),pf=qn,gf=ln(mr,"Promise"),mf=ln(mr,"Set"),bf=ln(mr,"WeakMap"),vf=_r,yf=Kr,xf="[object Map]",wf="[object Promise]",$f="[object Set]",Cf="[object WeakMap]",Sf="[object DataView]",kf=yf(ff),Df=yf(pf),Ff=yf(gf),_f=yf(mf),Ef=yf(bf),Of=vf;(ff&&Of(new ff(new ArrayBuffer(1)))!=Sf||pf&&Of(new pf)!=xf||gf&&Of(gf.resolve())!=wf||mf&&Of(new mf)!=$f||bf&&Of(new bf)!=Cf)&&(Of=function(e){var t=vf(e),r="[object Object]"==t?e.constructor:void 0,n=r?yf(r):"";if(n)switch(n){case kf:return Sf;case Df:return xf;case Ff:return wf;case _f:return $f;case Ef:return Cf}return t});var Tf=Of,If=zu,Mf=Vu,Af=th,Bf=hf,zf=Tf,jf=hr,Lf=$h,Rf=jh,Pf="[object Arguments]",Nf="[object Array]",Hf="[object Object]",Wf=Object.prototype.hasOwnProperty;var Yf=function(e,t,r,n,o,i){var a=jf(e),s=jf(t),l=a?Nf:zf(e),d=s?Nf:zf(t),c=(l=l==Pf?Hf:l)==Hf,u=(d=d==Pf?Hf:d)==Hf,h=l==d;if(h&&Lf(e)){if(!Lf(t))return!1;a=!0,c=!1}if(h&&!c)return i||(i=new If),a||Rf(e)?Mf(e,t,r,n,o,i):Af(e,t,l,r,n,o,i);if(!(1&r)){var f=c&&Wf.call(e,"__wrapped__"),p=u&&Wf.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return i||(i=new If),o(g,m,r,n,i)}}return!!h&&(i||(i=new If),Bf(e,t,r,n,o,i))},Vf=Er;var Uf=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Vf(t)&&!Vf(r)?t!=t&&r!=r:Yf(t,r,n,o,e,i))},Kf=zu,qf=Uf;var Zf=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Kf;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?qf(c,d,3,n,u):h))return!1}}return!0},Gf=Lr;var Qf=function(e){return e==e&&!Gf(e)},Xf=Qf,Jf=af;var ep=function(e){for(var t=Jf(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Xf(o)]}return t};var tp=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},rp=Zf,np=ep,op=tp;var ip=function(e,t){return null!=e&&t in Object(e)},ap=Ao,sp=yh,lp=hr,dp=Sh,cp=kh,up=zo;var hp=function(e,t,r){for(var n=-1,o=(t=ap(t,e)).length,i=!1;++n<o;){var a=up(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&cp(o)&&dp(a,o)&&(lp(e)||sp(e))},fp=ip,pp=hp;var gp=Uf,mp=No,bp=function(e,t){return null!=e&&pp(e,t,fp)},vp=jr,yp=Qf,xp=tp,wp=zo;var $p=function(e){return function(t){return null==t?void 0:t[e]}},Cp=Ro;var Sp=$p,kp=function(e){return function(t){return Cp(t,e)}},Dp=jr,Fp=zo;var _p=function(e){var t=np(e);return 1==t.length&&t[0][2]?op(t[0][0],t[0][1]):function(r){return r===e||rp(r,e,t)}},Ep=function(e,t){return vp(e)&&yp(t)?xp(wp(e),t):function(r){var n=mp(r,e);return void 0===n&&n===t?bp(r,e):gp(t,n,3)}},Op=function(e){return e},Tp=hr,Ip=function(e){return Dp(e)?Sp(Fp(e)):kp(e)};var Mp=function(e){return"function"==typeof e?e:null==e?Op:"object"==typeof e?Tp(e)?Ep(e[0],e[1]):_p(e):Ip(e)},Ap=Mp,Bp=tf,zp=af;var jp=function(e){return function(t,r,n){var o=Object(t);if(!Bp(t)){var i=Ap(r);t=zp(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Lp=/\s/;var Rp=function(e){for(var t=e.length;t--&&Lp.test(e.charAt(t)););return t},Pp=/^\s+/;var Np=function(e){return e?e.slice(0,Rp(e)+1).replace(Pp,""):e},Hp=Lr,Wp=Ir,Yp=/^[-+]0x[0-9a-f]+$/i,Vp=/^0b[01]+$/i,Up=/^0o[0-7]+$/i,Kp=parseInt;var qp=function(e){if("number"==typeof e)return e;if(Wp(e))return NaN;if(Hp(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Hp(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Np(e);var r=Vp.test(e);return r||Up.test(e)?Kp(e.slice(2),r?2:8):Yp.test(e)?NaN:+e},Zp=qp,Gp=1/0;var Qp=function(e){return e?(e=Zp(e))===Gp||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Xp=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Jp=Mp,eg=function(e){var t=Qp(e),r=t%1;return t==t?r?t-r:t:0},tg=Math.max;var rg=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:eg(r);return o<0&&(o=tg(n+o,0)),Xp(e,Jp(t),o)},ng=ze(rg),og=ze(jp(rg)),ig=Uf;var ag=ze((function(e,t){return ig(e,t)}));function sg(e){return()=>e}function lg(e){e()}function dg(e,t){return r=>e(t(r))}function cg(e,t){return()=>e(t)}function ug(e,t){return r=>e(t,r)}function hg(e){return void 0!==e}function fg(){}function pg(e,t){return t(e),e}function gg(e,t){return t(e)}function mg(...e){return e}function bg(e,t){return e(1,t)}function vg(e,t){e(0,t)}function yg(e){e(2)}function xg(e){return e(4)}function wg(e,t){return bg(e,ug(t,0))}function $g(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function Cg(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Sg(e,t){return e===t}function kg(e=Sg){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Dg(e){return t=>r=>{e(r)&&t(r)}}function Fg(e){return t=>dg(t,e)}function _g(e){return t=>()=>{t(e)}}function Eg(e,...t){const r=function(...e){return t=>e.reduceRight(gg,t)}(...t);return(t,n)=>{switch(t){case 2:return void yg(e);case 1:return bg(e,r(n))}}}function Og(e,t){return r=>n=>{r(t=e(t,n))}}function Tg(e){return t=>r=>{e>0?e--:t(r)}}function Ig(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Mg(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);bg(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function Ag(e){let t=e;const r=zg();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Bg(e,t){return pg(Ag(t),(t=>wg(e,t)))}function zg(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function jg(e){return pg(zg(),(t=>wg(e,t)))}function Lg(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Rg(),singleton:r}}const Rg=()=>Symbol();function Pg(...e){const t=zg(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);bg(e,(e=>{r[i]=e,n|=a,n===o&&vg(t,r)}))})),function(e,i){switch(e){case 2:return void yg(t);case 1:return n===o&&i(r),bg(t,i)}}}function Ng(e,t=Sg){return Eg(e,kg(t))}function Hg(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(lg)}}(...e.map((e=>bg(e,r))))}}}var Wg=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Wg||{});const Yg={0:"debug",3:"error",1:"log",2:"warn"},Vg=Lg((()=>{const e=Ag(3);return{log:Ag(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:xg(e))&&console[Yg[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Ug(e,t,r){return Kg(e,t,r).callbackRef}function Kg(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function qg(e,t,r,n,i,a,s,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Wg.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?Zg("column-gap",getComputedStyle(r).columnGap,i):Zg("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return Kg(c,r,d)}function Zg(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Wg.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Gg(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=Kg(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const Qg=Lg((()=>{const e=zg(),t=zg(),r=Ag(0),n=zg(),o=Ag(0),i=zg(),a=zg(),s=Ag(0),l=Ag(0),d=Ag(0),c=Ag(0),u=zg(),h=zg(),f=Ag(!1),p=Ag(!1),g=Ag(!1);return wg(Eg(e,Fg((({scrollTop:e})=>e))),t),wg(Eg(e,Fg((({scrollHeight:e})=>e))),a),wg(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Xg={lvl:0};function Jg(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function em(e){return e===Xg}function tm(e,t){if(!em(e))return t===e.k?e.v:t<e.k?tm(e.l,t):tm(e.r,t)}function rm(e,t,r="k"){if(em(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=rm(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return rm(e.l,t,r)}function nm(e,t,r){return em(e)?pm(t,r,1):t===e.k?cm(e,{k:t,v:r}):t<e.k?gm(cm(e,{l:nm(e.l,t,r)})):gm(cm(e,{r:nm(e.r,t,r)}))}function om(){return Xg}function im(e,t,r){if(em(e))return[];return function(e){return Jg(e,(({k:e,v:t})=>({index:e,value:t})))}(lm(e,rm(e,t)[0],r))}function am(e,t){if(em(e))return Xg;const{k:r,l:n,r:o}=e;if(t===r){if(em(n))return o;if(em(o))return n;{const[t,r]=fm(n);return dm(cm(e,{k:t,l:um(n),v:r}))}}return dm(cm(e,t<r?{l:am(n,t)}:{r:am(o,t)}))}function sm(e){return em(e)?[]:[...sm(e.l),{k:e.k,v:e.v},...sm(e.r)]}function lm(e,t,r){if(em(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(lm(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(lm(i,t,r))),s}function dm(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(hm(t))return mm(cm(e,{lvl:r-1}));if(!em(t)&&!em(t.r))return cm(t.r,{l:cm(t,{r:t.r.l}),lvl:r,r:cm(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(hm(e))return bm(cm(e,{lvl:r-1}));if(em(n)||em(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=hm(t)?n.lvl-1:n.lvl;return cm(t,{l:cm(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:bm(cm(n,{l:t.r,lvl:o}))})}}function cm(e,t){return pm(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function um(e){return em(e.r)?e.l:dm(cm(e,{r:um(e.r)}))}function hm(e){return em(e)||e.lvl>e.r.lvl}function fm(e){return em(e.r)?[e.k,e.v]:fm(e.r)}function pm(e,t,r,n=Xg,o=Xg){return{k:e,l:n,lvl:r,r:o,v:t}}function gm(e){return bm(mm(e))}function mm(e){const{l:t}=e;return em(t)||t.lvl!==e.lvl?e:cm(t,{r:cm(e,{l:t.r})})}function bm(e){const{lvl:t,r:r}=e;return em(r)||em(r.r)||r.lvl!==t||r.r.lvl!==t?e:cm(r,{l:cm(e,{r:r.l}),lvl:t+1})}function vm(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function ym(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const xm=Lg((()=>({recalcInProgress:Ag(!1)})),[],{singleton:!0});function wm(e,t,r){return e[$m(e,t,r)]}function $m(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Cm(e,t){return Math.round(e.getBoundingClientRect()[t])}function Sm(e){return!em(e.groupOffsetTree)}function km({index:e},t){return t===e?0:t<e?-1:1}function Dm({offset:e},t){return t===e?0:t<e?-1:1}function Fm(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=wm(t,e,km),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function _m(e,t){if(!Sm(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Em(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=_m("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Om(e,t,r,n=0){return n>0&&(t=Math.max(t,wm(e,n,km).offset)),Jg(function(e,t,r,n){const o=$m(e,t,n),i=$m(e,r,n,o);return e.slice(o,i+1)}(e,t,r,Dm),Am)}function Tm(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Wg.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&em(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>nm(nm(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=em(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),em(e)){e=nm(e,0,o);continue}const a=im(e,i-1,t+1);if(a.some(Bm(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=am(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=nm(e,t+1,i));l&&(e=nm(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Mm(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>nm(e,t,Fm(t,u,o))),om()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function Im(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Mm(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=$m(o,t-1,km),s=o[l].offset;const e=rm(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===rm(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of im(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Am(e){return{index:e.index,value:e}}function Bm(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const zm={offsetHeight:"height",offsetWidth:"width"},jm=Lg((([{log:e},{recalcInProgress:t}])=>{const r=zg(),n=zg(),o=Bg(n,0),i=zg(),a=zg(),s=Ag(0),l=Ag([]),d=Ag(void 0),c=Ag(void 0),u=Ag(((e,t)=>Cm(e,zm[t]))),h=Ag(void 0),f=Ag(0),p={groupIndices:[],groupOffsetTree:om(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:om()},g=Bg(Eg(r,Mg(l,e,f),Og(Tm,p),kg()),p),m=Bg(Eg(l,kg(),Og(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Fg((({prev:e})=>e))),[]);wg(Eg(l,Dg((e=>e.length>0)),Mg(g,f),Fg((([e,t,r])=>{const n=e.reduce(((e,n,o)=>nm(e,n,Fm(n,t.offsetTree,r)||o)),om());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),wg(Eg(n,Mg(g),Dg((([e,{lastIndex:t}])=>e<t)),Fg((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),wg(d,c);const b=Bg(Eg(d,Fg((e=>void 0===e))),!0);wg(Eg(c,Dg((e=>void 0!==e&&em(xg(g).sizeTree))),Fg((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=jg(Eg(r,Mg(g),Og((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),Fg((e=>e.changed))));bg(Eg(s,Og(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Fg((e=>e.diff))),(e=>{const{groupIndices:r}=xg(g);if(e>0)vg(t,!0),vg(i,e+Im(e,r));else if(e<0){const t=xg(m);t.length>0&&(e-=Im(-e,t)),vg(a,e)}})),bg(Eg(s,Mg(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Wg.ERROR)}));const y=jg(i);wg(Eg(i,Mg(g),Fg((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=tm(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=sm(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return sm(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=jg(Eg(a,Mg(g,f),Fg((([e,{offsetTree:t},r])=>Fm(-e,t,r)))));return wg(Eg(a,Mg(g,f),Fg((([e,t,r])=>{if(t.groupIndices.length>0){if(em(t.sizeTree))return t;let n=om();const o=xg(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=sm(t.sizeTree).reduce(((t,{k:r,v:n})=>nm(t,Math.max(0,r+e),n)),n),i!==-e){n=nm(n,0,tm(t.sizeTree,s));n=nm(n,1,rm(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Mm(t.offsetTree,0,n,r)}}{const n=sm(t.sizeTree).reduce(((t,{k:r,v:n})=>nm(t,Math.max(0,r+e),n)),om());return{...t,sizeTree:n,...Mm(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),mg(Vg,xm),{singleton:!0});function Lm(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Rm=Lg((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=zg(),a=zg(),s=jg(Eg(i,Fg(Lm)));return wg(Eg(s,Fg((e=>e.totalCount))),r),wg(Eg(s,Fg((e=>e.groupIndices))),e),wg(Eg(Pg(o,t,n),Dg((([e,t])=>Sm(t))),Fg((([e,t,r])=>rm(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),kg(),Fg((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),mg(jm,Qg)),Pm=Lg((([{log:e}])=>{const t=Ag(!1),r=jg(Eg(t,Dg((e=>e)),kg()));return bg(t,(t=>{t&&xg(e)("props updated",{},Wg.DEBUG)})),{didMount:r,propsReady:t}}),mg(Vg),{singleton:!0}),Nm=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Hm(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Nm)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Wm=Lg((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const f=zg(),p=zg(),g=Ag(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),vg(l,!1)}return wg(Eg(f,Mg(r,u,n,g,s,a,h),Mg(e,i,o),Fg((([[e,r,n,o,i,a,s,d],u,h,g])=>{const x=Hm(e),{align:w,behavior:$,offset:C}=x,S=o-1,k=Em(x,r,S);let D=Fm(k,r.offsetTree,u)+a;"end"===w?(D+=h+rm(r.sizeTree,k)[1]-n+g,k===S&&(D+=s)):"center"===w?D+=(h+rm(r.sizeTree,k)[1]-n+g)/2:D-=i,C&&(D+=C);const F=t=>{y(),t?(d("retrying to scroll to",{location:e},Wg.DEBUG),vg(f,e)):(vg(p,!0),d("list did not change, scroll successful",{},Wg.DEBUG))};if(y(),"smooth"===$){let e=!1;v=bg(t,(t=>{e=e||t})),m=$g(c,(()=>{F(e)}))}else m=$g(Eg(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),F);return b=setTimeout((()=>{y()}),1200),vg(l,!0),d("scrolling from index to",{behavior:$,index:k,top:D},Wg.DEBUG),{behavior:$,top:D}}))),d),{scrollTargetReached:p,scrollToIndex:f,topListHeight:g}}),mg(jm,Qg,Vg),{singleton:!0});function Ym(e,t){0==e?t():requestAnimationFrame((()=>{Ym(e-1,t)}))}function Vm(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Um=Lg((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Ag(!0),l=Ag(0),d=Ag(!0);return wg(Eg(a,Mg(l),Dg((([e,t])=>!!t)),_g(!1)),s),wg(Eg(a,Mg(l),Dg((([e,t])=>!!t)),_g(!1)),d),bg(Eg(Pg(t,a),Mg(s,r,e,d),Dg((([[,e],t,{sizeTree:r},n,o])=>e&&(!em(r)||hg(n))&&!t&&!o)),Mg(l)),(([,e])=>{$g(o,(()=>{vg(d,!0)})),Ym(4,(()=>{$g(n,(()=>{vg(s,!0)})),vg(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),mg(jm,Qg,Wm,Pm),{singleton:!0});function Km(e,t){return Math.abs(e-t)<1.01}const qm="up",Zm="down",Gm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Qm=Lg((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=Ag(!1),s=Ag(!0),l=zg(),d=zg(),c=Ag(4),u=Ag(0),h=Bg(Eg(Hg(Eg(Ng(o),Tg(1),_g(!0)),Eg(Ng(o),Tg(1),_g(!1),Cg(100))),kg()),!1),f=Bg(Eg(Hg(Eg(r,_g(!0)),Eg(r,_g(!1),Cg(200))),kg()),!1);wg(Eg(Pg(Ng(o),Ng(u)),Fg((([e,t])=>e<=t)),kg()),s),wg(Eg(s,Ig(50)),d);const p=jg(Eg(Pg(n,Ng(i),Ng(t),Ng(e),Ng(c)),Og(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Gm),kg(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Bg(Eg(n,Og(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Km(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Dg((e=>e.changed)),Fg((e=>e.jump))),0);wg(Eg(p,Fg((e=>e.atBottom))),a),wg(Eg(a,Ig(50)),l);const m=Ag(Zm);wg(Eg(n,Fg((({scrollTop:e})=>e)),kg(),Og(((e,t)=>xg(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?qm:Zm,prevScrollTop:t}),{direction:Zm,prevScrollTop:0}),Fg((e=>e.direction))),m),wg(Eg(n,Ig(50),_g("none")),m);const b=Ag(0);return wg(Eg(h,Dg((e=>!e)),_g(0)),b),wg(Eg(o,Ig(100),Mg(h),Dg((([e,t])=>!!t)),Og((([e,t],[r])=>[t,r]),[0,0]),Fg((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),mg(Qg)),Xm="top",Jm="bottom",eb="none";function tb(e,t,r){return"number"==typeof e?r===qm&&t===Xm||r===Zm&&t===Jm?e:0:r===qm?t===Xm?e.main:e.reverse:t===Jm?e.main:e.reverse}function rb(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const nb=Lg((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=zg(),a=Ag(0),s=Ag(0),l=Ag(0),d=Bg(Eg(Pg(Ng(n),Ng(o),Ng(r),Ng(i,ym),Ng(l),Ng(a),Ng(t),Ng(e),Ng(s)),Fg((([e,t,r,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,h=Math.max(r-c,0);let f=eb;const p=rb(d,Xm),g=rb(d,Jm);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(f=qm),(o-=l)<e-h+t+g&&(f=Zm),f!==eb?[Math.max(c-r-tb(i,Xm,f)-p,0),c-h-s+t+tb(i,Jm,f)+g]:null})),Dg((e=>null!=e)),kg(ym)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:d}}),mg(Qg),{singleton:!0});const ob={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function ib(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,h=d,f=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:sb(e,o,i),offsetBottom:f,offsetTop:d,top:h,topItems:sb(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function ab(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=Vm(t,s);return ib(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function sb(e,t,r){if(0===e.length)return[];if(!Sm(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=im(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const lb=Lg((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:f},{recalcInProgress:p}])=>{const g=Ag([]),m=Ag(0),b=zg();wg(i.topItemsIndexes,g);const v=Bg(Eg(Pg(f,p,Ng(l,ym),Ng(o),Ng(n),Ng(d),c,Ng(g),Ng(t),Ng(r),e),Dg((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),Fg((([,,[e,t],r,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,f=xg(m);if(0===r)return{...ob,totalCount:r};if(0===e&&0===t)return 0===f?{...ob,totalCount:r}:ab(f,o,n,s,l,d||[]);if(em(h))return f>0?null:ib(function(e,t,r){if(Sm(t)){const n=_m(e,t);return[{index:rm(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Vm(o,r),c,d),[],r,l,c,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of im(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return ib([],p,r,l,c,s);const g=a.length>0?a[a.length-1]+1:0,b=Om(u,e,t,g);if(0===b.length)return null;const v=r-1;return ib(pg([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,c,s)})),Dg((e=>null!==e)),kg()),ob);wg(Eg(e,Dg(hg),Fg((e=>null==e?void 0:e.length))),o),wg(Eg(v,Fg((e=>e.topListHeight))),u),wg(u,s),wg(Eg(v,Fg((e=>[e.top,e.bottom]))),a),wg(Eg(v,Fg((e=>e.items))),b);const y=jg(Eg(v,Dg((({items:e})=>e.length>0)),Mg(o,e),Dg((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Fg((([,e,t])=>[e-1,t])),kg(ym),Fg((([e])=>e)))),x=jg(Eg(v,Ig(200),Dg((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Fg((({items:e})=>e[0].index)),kg())),w=jg(Eg(v,Dg((({items:e})=>e.length>0)),Fg((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),kg(vm)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...h}}),mg(jm,Rm,nb,Um,Wm,Qm,Pm,xm),{singleton:!0}),db=Lg((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=zg(),a=Bg(Eg(Pg(r,e,n,t,o),Fg((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return wg(Ng(a),i),{totalListHeight:a,totalListHeightChanged:i}}),mg(Qg,lb),{singleton:!0}),cb=Lg((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Ag(!1),n=Bg(Eg(Pg(r,e,t),Dg((([e])=>e)),Fg((([,e,t])=>Math.max(0,e-t))),Ig(0),kg()),0);return{alignToBottom:r,paddingTopAddition:n}}),mg(Qg,db),{singleton:!0});function ub(e){return!!e&&("smooth"===e?"smooth":"auto")}const hb=Lg((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=Ag(!1),u=zg();let h=null;function f(e){vg(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=$g(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(xg(l)("scrolling to bottom due to increased size",{},Wg.DEBUG),f("auto"))}));setTimeout(t,100)}return bg(Eg(Pg(Eg(Ng(t),Tg(1)),a),Mg(Ng(c),n,i,d),Fg((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?ub(e(t)):t&&ub(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Dg((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=$g(e,(()=>{xg(l)("following output to ",{totalCount:r},Wg.DEBUG),f(t),h=null}))})),bg(Eg(Pg(Ng(c),t,s),Dg((([e,,t])=>e&&t)),Og((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Dg((({refreshed:e})=>e)),Mg(c,t)),(([,e])=>{xg(i)&&p(!1!==e)})),bg(u,(()=>{p(!1!==xg(c))})),bg(Pg(Ng(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:c}}),mg(jm,Qm,Wm,Um,Pm,Vg,Qg)),fb=Lg((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(wg(Eg(s,Mg(i),Dg((([,e])=>0!==e)),Mg(o,n,t,r,e),Fg((([[,e],t,r,n,o,i=[]])=>ab(e,t,r,n,o,i)))),a),{})),mg(jm,Um,lb,Pm),{singleton:!0}),pb=Lg((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Ag(0);return bg(Eg(e,Mg(n),Dg((([,e])=>0!==e)),Fg((([,e])=>({top:e})))),(e=>{$g(Eg(r,Tg(1),Dg((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{vg(t,e)}))}))})),{initialScrollTop:n}}),mg(Pm,Qg,lb),{singleton:!0}),gb=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,mb=Lg((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=zg();return wg(Eg(c,Mg(t,l,r,i,o,n,s),Mg(e),Fg((([[e,t,r,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=gb,done:f,...p}=e,g=Em(e,t,n-1),m=Fm(g,t.offsetTree,d)+o+i,b=h({itemBottom:m+rm(t.sizeTree,g)[1],itemTop:m,locationParams:{align:c,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&$g(Eg(a,Dg((e=>!e)),Tg(xg(a)?1:2)),f):f&&f(),b})),Dg((e=>null!==e))),d),{scrollIntoView:c}}),mg(jm,Qg,Wm,lb,Vg),{singleton:!0}),bb=Lg((([{scrollVelocity:e}])=>{const t=Ag(!1),r=zg(),n=Ag(!1);return wg(Eg(e,Mg(n,t,r),Dg((([e,t])=>!!t)),Fg((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),kg()),t),bg(Eg(Pg(t,e,r),Mg(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),mg(Qm),{singleton:!0}),vb=Lg((([{scrollContainerState:e,scrollTo:t}])=>{const r=zg(),n=zg(),o=zg(),i=Ag(!1),a=Ag(void 0);return wg(Eg(Pg(r,n),Fg((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),wg(Eg(t,Mg(n),Fg((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),mg(Qg)),yb=Lg((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=zg(),c=Ag(void 0),u=Ag(null),h=Ag(null);return wg(s,u),wg(l,h),bg(Eg(d,Mg(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return sm(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),wg(Eg(c,Dg(hg),Fg(xb)),o),wg(Eg(i,Mg(c),Dg((([,e])=>void 0!==e)),kg(),Fg((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),mg(jm,Qg,Um,Pm,vb));function xb(e){return{align:"start",index:0,offset:e.scrollTop}}const wb=Lg((([{topItemsIndexes:e}])=>{const t=Ag(0);return wg(Eg(t,Dg((e=>e>=0)),Fg((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),mg(lb));function $b(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const Cb=$b((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Sb=Lg((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:p}])=>{const g=jg(Eg(l,Mg(a),Og((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),Dg((([e])=>0!==e)),Mg(n,s,r,o,f,p),Dg((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===qm)),Fg((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Wg.DEBUG),e)))));function m(r){r>0?(vg(t,{behavior:"auto",top:-r}),vg(e,0)):(vg(e,0),vg(t,{behavior:"auto",top:-r}))}return bg(Eg(g,Mg(e,i)),(([t,r,n])=>{n&&Cb()?vg(e,r-t):m(-t)})),bg(Eg(Pg(Bg(i,!1),e,p),Dg((([e,t,r])=>!e&&!r&&0!==t)),Fg((([e,t])=>t)),Ig(1)),m),wg(Eg(u,Fg((e=>({top:-e})))),t),bg(Eg(d,Mg(h,c),Fg((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=tm(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{vg(e,r),requestAnimationFrame((()=>{vg(t,{top:r}),requestAnimationFrame((()=>{vg(e,0),vg(p,!1)}))}))})),{deviation:e}}),mg(Qg,Qm,lb,jm,Vg,xm)),kb=Lg((([e,t,r,n,o,i,a,s,l,d])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...d})),mg(nb,fb,Pm,bb,db,pb,cb,vb,mb,Vg)),Db=Lg((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(wg(x.rangeChanged,k.scrollSeekRangeChanged),wg(Eg(k.windowViewportRect,Fg((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...k,...g,sizes:l,...m})),mg(jm,Um,Qg,yb,hb,lb,Wm,Sb,wb,Rm,kb));function Fb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const _b=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Eb(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&vg(e.propsReady,!1);for(const n of i){vg(e[r.required[n]],t[n])}for(const n of a)if(n in t){vg(e[r.optional[n]],t[n])}e.propsReady&&vg(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=bg(e,i),t):(n(),fg);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...g}=h,[m]=o.useState((()=>pg(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{c(e,g)})))),[b]=o.useState(cg(u,m));_b((()=>{for(const e of l)e in g&&bg(b[e],g[e]);return()=>{Object.values(b).map(yg)}}),[g,b,m]),_b((()=>{c(m,g)})),o.useImperativeHandle(f,sg(function(e){return s.reduce(((t,n)=>(t[n]=t=>{vg(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(d.Provider,{value:m,children:n?e(v,{...Fb([...i,...a,...l],g),children:p}):p})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>bg(t,e)),[t]);return o.useSyncExternalStore(r,(()=>xg(t)),(()=>xg(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(cg(xg,t));return _b((()=>bg(t,(e=>{e!==r&&n(sg(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];_b((()=>bg(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(ug(vg,o.useContext(d)[e]),[e])}}const Ob=o.createContext(void 0),Tb=o.createContext(void 0),Ib=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Mb(e,t,r,n=fg,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():ee.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(Cm(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=Cm(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Km(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Ab="-webkit-sticky",Bb="sticky",zb=$b((()=>{if(typeof document>"u")return Bb;const e=document.createElement("div");return e.style.position=Ab,e.style.position===Ab?Ab:Bb}));function jb(e){return e}const Lb=Lg((()=>{const e=Ag((e=>`Item ${e}`)),t=Ag(null),r=Ag((e=>`Group ${e}`)),n=Ag({}),o=Ag(jb),i=Ag("div"),a=Ag(fg),s=(e,t=null)=>Bg(Eg(n,Fg((t=>t[e])),kg()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Rb=Lg((([e,t])=>({...e,...t})),mg(Db,Lb)),Pb=({height:t})=>e("div",{style:{height:t}}),Nb={overflowAnchor:"none",position:zb(),zIndex:1},Hb={overflowAnchor:"none"},Wb={...Hb,display:"inline-block",height:"100%"},Yb=o.memo((function({showTopList:t=!1}){const r=sv("listState"),n=lv("sizeRanges"),i=sv("useWindowScroll"),a=sv("customScrollParent"),s=lv("windowScrollContainerState"),l=lv("scrollContainerState"),d=a||i?s:l,c=sv("itemContent"),u=sv("context"),h=sv("groupContent"),f=sv("trackItemSizes"),p=sv("itemSize"),g=sv("log"),m=lv("gap"),b=sv("horizontalDirection"),{callbackRef:v}=qg(n,p,f,t?fg:d,g,m,a,b,sv("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);av("deviation",(e=>{y!==e&&x(e)}));const w=sv("EmptyPlaceholder"),$=sv("ScrollSeekPlaceholder")||Pb,S=sv("ListComponent"),k=sv("ItemComponent"),D=sv("GroupComponent"),F=sv("computeItemKey"),_=sv("isSeeking"),E=sv("groupIndices").length>0,O=sv("alignToBottom"),T=sv("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...Zb(w,u)}):e(S,{...Zb(S,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=F(t+r.firstItemIndex,e.data,u);return _?C($,{...Zb($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?C(D,{...Zb(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Nb},h(e.index,u)):C(k,{...Zb(k,u),...Gb(k,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Wb:Hb},E?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Vb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Ub={outline:"none",overflowX:"auto",position:"relative"},Kb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),qb={position:zb(),top:0,width:"100%",zIndex:1};function Zb(e,t){if("string"!=typeof e)return{context:t}}function Gb(e,t){return{item:"string"==typeof e?void 0:t}}const Qb=o.memo((function(){const t=sv("HeaderComponent"),r=lv("headerHeight"),n=sv("HeaderFooterTag"),i=Ug(o.useMemo((()=>e=>{r(Cm(e,"height"))}),[r]),!0,sv("skipAnimationFrameInResizeObserver")),a=sv("context");return t?e(n,{ref:i,children:e(t,{...Zb(t,a)})}):null})),Xb=o.memo((function(){const t=sv("FooterComponent"),r=lv("footerHeight"),n=sv("HeaderFooterTag"),i=Ug(o.useMemo((()=>e=>{r(Cm(e,"height"))}),[r]),!0,sv("skipAnimationFrameInResizeObserver")),a=sv("context");return t?e(n,{ref:i,children:e(t,{...Zb(t,a)})}):null}));function Jb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:g}=Mb(s,d,l,c,void 0,h);return t("scrollTo",g),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?Ub:Vb,...i},tabIndex:0,...a,...Zb(l,u),children:o})}))}function ev({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=Mb(s,d,l,fg,h);return Ib((()=>(g.current=h||window,()=>{g.current=null})),[g,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Zb(l,f),children:o})}))}const tv=({children:t})=>{const r=o.useContext(Ob),n=lv("viewportHeight"),i=lv("fixedItemHeight"),a=sv("alignToBottom"),s=sv("horizontalDirection"),l=Ug(o.useMemo((()=>dg(n,(e=>Cm(e,s?"width":"height")))),[n,s]),!0,sv("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Kb(a),children:t})},rv=({children:t})=>{const r=o.useContext(Ob),n=lv("windowViewportRect"),i=lv("fixedItemHeight"),a=sv("customScrollParent"),s=Gg(n,a,sv("skipAnimationFrameInResizeObserver")),l=sv("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Kb(l),children:t})},nv=({children:t})=>{const r=sv("TopItemListComponent")||"div",n=sv("headerHeight"),o={...qb,marginTop:`${n}px`},i=sv("context");return e(r,{style:o,...Zb(r,i),children:t})},ov=o.memo((function(r){const n=sv("useWindowScroll"),o=sv("topItemsIndexes").length>0,i=sv("customScrollParent"),a=sv("context"),s=i||n?cv:dv,l=i||n?rv:tv;return t(s,{...r,...Zb(s,a),children:[o&&e(nv,{children:e(Yb,{showTopList:!0})}),t(l,{children:[e(Qb,{}),e(Yb,{}),e(Xb,{})]})]})})),{Component:iv,useEmitter:av,useEmitterValue:sv,usePublisher:lv}=Eb(Rb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},ov),dv=Jb({useEmitter:av,useEmitterValue:sv,usePublisher:lv}),cv=ev({useEmitter:av,useEmitterValue:sv,usePublisher:lv}),uv=iv,hv={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},fv={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:pv,floor:gv,max:mv,min:bv,round:vv}=Math;function yv(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function xv(e,t){return e&&e.width===t.width&&e.height===t.height}function wv(e,t){return e&&e.column===t.column&&e.row===t.row}const $v=Lg((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,f,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Ag(0),C=Ag(0),S=Ag(hv),k=Ag({height:0,width:0}),D=Ag({height:0,width:0}),F=zg(),_=zg(),E=Ag(0),O=Ag(null),T=Ag({column:0,row:0}),I=zg(),M=zg(),A=Ag(!1),B=Ag(0),z=Ag(!0),j=Ag(!1),L=Ag(!1);bg(Eg(p,Mg(B),Dg((([e,t])=>!!t))),(()=>{vg(z,!1)})),bg(Eg(Pg(p,z,D,k,B,j),Dg((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{vg(j,!0),Ym(1,(()=>{vg(F,e)})),$g(Eg(d),(()=>{vg(t,[0,0]),vg(z,!0)}))})),wg(Eg(M,Dg((e=>null!=e&&e.scrollTop>0)),_g(0)),C),bg(Eg(p,Mg(M),Dg((([,e])=>null!=e))),(([,e])=>{e&&(vg(k,e.viewport),vg(D,e.item),vg(T,e.gap),e.scrollTop>0&&(vg(A,!0),$g(Eg(d,Tg(1)),(e=>{vg(A,!1)})),vg(l,{top:e.scrollTop})))})),wg(Eg(k,Fg((({height:e})=>e))),u),wg(Eg(Pg(Ng(k,xv),Ng(D,xv),Ng(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Ng(d)),Fg((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),wg(Eg(Pg(Ng($),n,Ng(T,wv),Ng(D,xv),Ng(k,xv),Ng(O),Ng(C),Ng(A),Ng(z),Ng(B)),Dg((([,,,,,,,e])=>!e)),Fg((([e,[t,r],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return hv;if(0===f){const t=Vm(d,e);return function(e){return{...fv,items:e}}(yv(t,t+Math.max(s-1,0),a))}const g=Cv(p,f,c);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*gv((t+u)/(h+u)),b=g*pv((r+u)/(h+u))-1,b=bv(e-1,mv(b,g-1)),m=bv(b,mv(0,m))):(m=0,b=-1);const v=yv(m,b,a),{bottom:y,top:x}=Sv(i,n,o,v),w=pv(e/g);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),wg(Eg(O,Dg((e=>null!==e)),Fg((e=>e.length))),$),wg(Eg(Pg(k,D,S,T),Dg((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Fg((([e,t,{items:r},n])=>{const{bottom:o,top:i}=Sv(e,n,t,r);return[i,o]})),kg(ym)),t);const R=Ag(!1);wg(Eg(d,Mg(R),Fg((([e,t])=>t||0!==e))),R);const P=jg(Eg(Pg(S,$),Dg((([{items:e}])=>e.length>0)),Mg(R),Dg((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Fg((([[,e]])=>e-1)),kg())),N=jg(Eg(Ng(S),Dg((({items:e})=>e.length>0&&0===e[0].index)),_g(0),kg())),H=jg(Eg(Ng(S),Mg(A),Dg((([{items:e},t])=>e.length>0&&!t)),Fg((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),kg(vm),Ig(0)));wg(H,f.scrollSeekRangeChanged),wg(Eg(F,Mg(k,D,$,T),Fg((([e,t,r,n,o])=>{const i=Hm(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=mv(0,d,bv(n-1,d));let c=kv(t,o,r,d);return"end"===a?c=vv(c-t.height+r.height):"center"===a&&(c=vv(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const W=Bg(Eg(S,Fg((e=>e.offsetBottom+e.bottom))),0);return wg(Eg(x,Fg((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:O,deviation:E,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:D,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:_,scrollTo:l,scrollToIndex:F,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:S,horizontalDirection:L,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:P,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),mg(nb,Qg,Qm,bb,Pm,vb,Vg));function Cv(e,t,r){return mv(1,gv((e+r)/(gv(t)+r)))}function Sv(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=kv(e,t,r,n[0].index);return{bottom:kv(e,t,r,n[n.length-1].index)+o,top:i}}function kv(e,t,r,n){const o=Cv(e.width,r.width,t.column),i=gv(n/o),a=i*r.height+mv(0,i-1)*t.row;return a>0?a+t.row:a}const Dv=Lg((()=>{const e=Ag((e=>`Item ${e}`)),t=Ag({}),r=Ag(null),n=Ag("virtuoso-grid-item"),o=Ag("virtuoso-grid-list"),i=Ag(jb),a=Ag("div"),s=Ag(fg),l=(e,r=null)=>Bg(Eg(t,Fg((t=>t[e])),kg()),r),d=Ag(!1),c=Ag(!1);return wg(Ng(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Fv=Lg((([e,t])=>({...e,...t})),mg($v,Dv)),_v=o.memo((function(){const t=zv("gridState"),r=zv("listClassName"),n=zv("itemClassName"),i=zv("itemContent"),a=zv("computeItemKey"),s=zv("isSeeking"),l=jv("scrollHeight"),d=zv("ItemComponent"),c=zv("ListComponent"),u=zv("ScrollSeekPlaceholder"),h=zv("context"),f=jv("itemDimensions"),p=jv("gap"),g=zv("log"),m=zv("stateRestoreInProgress"),b=jv("reportReadyState"),v=Ug(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}p({column:Pv("column-gap",getComputedStyle(e).columnGap,g),row:Pv("row-gap",getComputedStyle(e).rowGap,g)})}),[l,f,p,g]),!0,!1);return Ib((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(c,{className:r,ref:v,...Zb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...Zb(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):C(d,{...Zb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Ev=o.memo((function(){const t=zv("HeaderComponent"),r=jv("headerHeight"),n=zv("headerFooterTag"),i=Ug(o.useMemo((()=>e=>{r(Cm(e,"height"))}),[r]),!0,!1),a=zv("context");return t?e(n,{ref:i,children:e(t,{...Zb(t,a)})}):null})),Ov=o.memo((function(){const t=zv("FooterComponent"),r=jv("footerHeight"),n=zv("headerFooterTag"),i=Ug(o.useMemo((()=>e=>{r(Cm(e,"height"))}),[r]),!0,!1),a=zv("context");return t?e(n,{ref:i,children:e(t,{...Zb(t,a)})}):null})),Tv=({children:t})=>{const r=o.useContext(Tb),n=jv("itemDimensions"),i=jv("viewportDimensions"),a=Ug(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:Kb(!1),children:t})},Iv=({children:t})=>{const r=o.useContext(Tb),n=jv("windowViewportRect"),i=jv("itemDimensions"),a=zv("customScrollParent"),s=Gg(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:Kb(!1),children:t})},Mv=o.memo((function({...r}){const n=zv("useWindowScroll"),o=zv("customScrollParent"),i=o||n?Rv:Lv,a=o||n?Iv:Tv,s=zv("context");return e(i,{...r,...Zb(i,s),children:t(a,{children:[e(Ev,{}),e(_v,{}),e(Ov,{})]})})})),{Component:Av,useEmitter:Bv,useEmitterValue:zv,usePublisher:jv}=Eb(Fv,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Mv),Lv=Jb({useEmitter:Bv,useEmitterValue:zv,usePublisher:jv}),Rv=ev({useEmitter:Bv,useEmitterValue:zv,usePublisher:jv});function Pv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Wg.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Nv=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Hv=({children:t})=>{const[r,n]=s(-1);return e(Nv.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},Wv=D.div`
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    background: ${ta.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${da.MaxWidth.sm} {
        --x-spacing: ${la["sm-margin"]}px;
        max-height: 15rem;
    }

    ${da.MaxWidth.xs} {
        --x-spacing: ${la["xs-margin"]}px;
    }

    ${da.MaxWidth.xxs} {
        --x-spacing: ${la["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ta["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${aa.full};
        background-clip: padding-box;
    }
`,Yv=D.div`
    background: transparent;
    padding: ${ia["spacing-8"]};
`,Vv=D.ul`
    list-style-type: none;
`,Uv=D.li`
    display: flex;
    align-items: flex-start;
    gap: ${ia["spacing-8"]};
    padding: ${ia["spacing-12"]} ${ia["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${aa.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${ta["bg-hover"]};
            `:e.$active?F`
                background: ${ta["bg-hover-subtle"]};
            `:void 0}
`,Kv=D(xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${ta["icon-selected"]};
`,qv=D.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Zv=D(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ta["icon-selected"]};
`,Gv=D(be)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ta["icon-primary-subtlest"]};
`,Qv=D(ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ta["icon-disabled-subtle"]};
`,Xv=D.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Jv=D(jd)`
    cursor: pointer;
    overflow: hidden;
    color: ${ta["text-primary"]};
    font-size: inherit;
`,ey=D(Jv)`
    ${ra["body-baseline-semibold"]}
`,ty=D(Jv)`
    ${ra["body-md-semibold"]}
    padding: ${ia["spacing-8"]} ${ia["spacing-8"]};
`,ry=D.div`
    width: 100%;
    display: flex;
    padding: ${ia["spacing-12"]} ${ia["spacing-16"]};
    align-items: center;
`,ny=D(ne)`
    margin-right: ${ia["spacing-4"]};
    color: ${ta["icon-error"]};
    height: 1em;
    width: 1em;
`,oy=D(hl)`
    margin-right: ${ia["spacing-8"]};
    color: ${ta.icon};
`,iy=D.div`
    ${za()}
    color: ${ta["text-subtle"]};
    padding: 0 ${ia["spacing-16"]} ${ia["spacing-12"]}
        ${ia["spacing-16"]};
`,ay=D.div`
    background: ${ta["bg-strong"]};
    border-radius: ${aa.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}
`,sy=D.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ia["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${ia["spacing-8"]} ${ia["spacing-16"]}
              `:F`10px ${ia["spacing-16"]}`};
`,ly=D(zd)`
    flex: 1;
`,dy=D(we)`
    color: ${ta.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,cy=D(Ia)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ia["spacing-8"]};
    margin-left: -${ia["spacing-8"]};
    color: ${ta.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,uy=S(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=Me(r,["value","variant","onClear"]);return t(ay,{$variant:i,children:[t(sy,{$variant:i,children:[e(dy,{"aria-hidden":!0}),e(ly,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(cy,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(M,{"aria-hidden":!0})})]})})),hy=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:g="inline",variant:b="default",listboxId:v,matchElementWidth:y=!1,width:x,topScrollItem:w,onSelectItem:$,onSelectAll:C,onDismiss:S,onRetry:k,valueExtractor:D,listExtractor:F,renderListItem:_,renderCustomCallToAction:E,enableSearch:O,hideNoResultsDisplay:T,noResultsDescription:I,customLabels:M,searchPlaceholder:A,searchFunction:B,onSearch:z})=>{const{noResultsLabel:j="No results found.",selectAllButtonLabel:L="Select all",clearAllButtonLabel:R="Clear all"}=M||{},P=(null==M?void 0:M.searchPlaceholder)||A||"Search",N=(null==M?void 0:M.noResultsDescription)||I,{focusedIndex:H,setFocusedIndex:W}=m(Nv),{elementWidth:Y,setFloatingRef:V,getFloatingProps:U,styles:K}=el(),[q,Z]=s(""),[G,Q]=s(null!=n?n:[]),X=sr(c),J=ir(),ee=a(null),te=a(null),re=a([]),ne=a(null),oe=a(null),ie=!!i&&!!l&&(null==l?void 0:l.length)===i,ae=e=>{const t=F?F(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},se=p((e=>!!og(l,(t=>ag(t,e)))),[l]),le=nr((()=>null==B?void 0:B(q))),de=nr((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=ae(e),n=q.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),ce=(e,t)=>{ie&&!se(e)||(W(t),null==$||$(e,(e=>D?D(e):e)(e)))},ue=e=>{const t=e.target.value;Z(t),null==z||z()},he=()=>{var e;Z(""),null===(e=ne.current)||void 0===e||e.focus(),null==z||z()},fe=()=>{null==k||k()};or("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),H<G.length-1){const e=H+1;null===(t=re.current[e])||void 0===t||t.focus(),W(e)}break;case"ArrowUp":if(e.preventDefault(),H>0){const e=H-1;null===(r=re.current[e])||void 0===r||r.focus(),W(e)}else 0===H&&ne.current&&(ne.current.focus(),W(-1));break;case"Space":case"Enter":document.activeElement===re.current[H]&&(e.preventDefault(),G[H]&&ce(G[H],H))}})),h((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),W(e))}),0);return()=>clearTimeout(t)}),[re,n,W,w]),h((()=>{var e,t,r;if(J)return;if(d||!n)return;const o=n.findIndex((e=>se(e)));ne.current?(W(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):H>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:H,align:"center"}),setTimeout((()=>{var e;return null===(e=re.current[H])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),W(o),setTimeout((()=>{var e;return null===(e=re.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:0}),W(0),setTimeout((()=>{var e;return null===(e=re.current[0])||void 0===e?void 0:e.focus()}),200))}),[se,d,H,n,J,W]),h((()=>{J&&X&&(d||"success"===c&&ne.current&&(W(-1),ne.current.focus()))}),[J,X,c,W,d]),h((()=>{var e;Q(null!==(e=""===q?n:B?le():de())&&void 0!==e?e:[])}),[le,de,n,B,q]);const pe=t=>o?e(ie&&!t?Qv:t?Zv:Gv,{"aria-hidden":!0}):t?e(Kv,{"aria-hidden":!0}):e(qv,{}),ge=(t,r)=>{const{title:n,secondaryLabel:o}=ae(t);return e(xu,{displayType:g,label:n,maxLines:f,selected:r,disabled:!r&&ie,sublabel:o,truncationType:u,variant:b})},me=(n,i)=>{if(!k||"success"===c){const a=se(n),s=i===H;return e(Uv,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&ie,"aria-posinset":i+1,"aria-setsize":null==G?void 0:G.length,"data-testid":"list-item",onClick:()=>ce(n,i),onMouseEnter:()=>(e=>{W(e)})(i),ref:e=>{re.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&ie,children:_?_(n,{selected:a}):t(r,{children:[pe(a),ge(n,a)]})},((e,t)=>`item_${t}__${D?D(e):e}`)(n,i))}},be=()=>{if((O||B)&&"success"===c)return e(uy,{ref:ne,onChange:ue,value:q,placeholder:P,"data-testid":"search-input","aria-label":"Enter text to search",onClear:he,variant:b})},ve=()=>{if(l&&o&&G.length>0&&!q&&"success"===c)return e(Xv,{children:e(ty,{onClick:C,type:"button",$variant:b,children:i||0!==l.length?R:L})})},ye=()=>{if(!T&&(q||!O)&&0===G.length&&"success"===c)return t(r,{children:[t(ry,{"data-testid":"list-no-results",children:[e(ny,{"data-testid":"no-result-icon"}),j]}),N&&e(iy,{"data-testid":"no-result-desc",children:N})]})},xe=()=>{if(k&&"loading"===c)return t(ry,{"data-testid":"list-loading",children:[e(oy,{}),"Loading..."]})},we=()=>{if(k&&"fail"===c)return t(ry,{"data-testid":"list-fail",children:[e(ny,{"data-testid":"load-error-icon"}),"Failed to load. ",e(ey,{onClick:fe,type:"button",$variant:b,children:"Try again."})]})},$e=()=>{var t;const r="test"===process.env.NODE_ENV;return e(Vv,{role:"listbox",id:v,children:e(uv,Object.assign({ref:oe,style:{height:"100%"},data:G,customScrollParent:null!==(t=ee.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>me(t,e)},r?{initialItemCount:G.length}:{}),r?G.length:void 0)})};return t(Wv,Object.assign({"data-testid":"dropdown-container",ref:it(ee,V),style:K},U(),{$width:y?Y:void 0,$customWidth:x,$variant:b,children:[t(Yv,{ref:te,"data-testid":"dropdown-list",children:[be(),ve(),ye(),xe(),we(),$e()]}),(()=>{if(E)return e("div",{"data-testid":"custom-cta",children:E(S,G)})})()]}))},fy=D(jd)`
    display: flex;
    align-items: center;
    gap: ${ia["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${ia["spacing-16"]}`:ia["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${ra["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${ra["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${ta["focus-ring"]};
        outline-offset: -2px;
    }
`,py=D.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${na["duration-250"]} ${na["ease-default"]};

    svg {
        color: ${ta.icon};
        height: 1em;
        width: 1em;
    }
`,gy=S(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=r,u=Me(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(fy,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(py,{$expanded:a,$variant:c,children:e(oe,{"aria-hidden":!0})})]}))}));var my=Symbol.for("immer-nothing"),by=Symbol.for("immer-draftable"),vy=Symbol.for("immer-state"),yy="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function xy(e,...t){if("production"!==process.env.NODE_ENV){const r=yy[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var wy=Object.getPrototypeOf;function $y(e){return!!e&&!!e[vy]}function Cy(e){return!!e&&(ky(e)||Array.isArray(e)||!!e[by]||!!e.constructor?.[by]||Oy(e)||Ty(e))}var Sy=Object.prototype.constructor.toString();function ky(e){if(!e||"object"!=typeof e)return!1;const t=wy(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Sy}function Dy(e,t){0===Fy(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function Fy(e){const t=e[vy];return t?t.type_:Array.isArray(e)?1:Oy(e)?2:Ty(e)?3:0}function _y(e,t){return 2===Fy(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ey(e,t,r){const n=Fy(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function Oy(e){return e instanceof Map}function Ty(e){return e instanceof Set}function Iy(e){return e.copy_||e.base_}function My(e,t){if(Oy(e))return new Map(e);if(Ty(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=ky(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[vy];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(wy(e),t)}{const t=wy(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function Ay(e,t=!1){return zy(e)||$y(e)||!Cy(e)||(Fy(e)>1&&(e.set=e.add=e.clear=e.delete=By),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Ay(t,!0)))),e}function By(){xy(2)}function zy(e){return Object.isFrozen(e)}var jy,Ly={};function Ry(e){const t=Ly[e];return t||xy(0,e),t}function Py(){return jy}function Ny(e,t){t&&(Ry("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Hy(e){Wy(e),e.drafts_.forEach(Vy),e.drafts_=null}function Wy(e){e===jy&&(jy=e.parent_)}function Yy(e){return jy={drafts_:[],parent_:jy,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Vy(e){const t=e[vy];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Uy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[vy].modified_&&(Hy(t),xy(4)),Cy(e)&&(e=Ky(t,e),t.parent_||Zy(t,e)),t.patches_&&Ry("Patches").generateReplacementPatches_(r[vy].base_,e,t.patches_,t.inversePatches_)):e=Ky(t,r,[]),Hy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==my?e:void 0}function Ky(e,t,r){if(zy(t))return t;const n=t[vy];if(!n)return Dy(t,((o,i)=>qy(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return Zy(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),Dy(o,((o,a)=>qy(e,n,t,o,a,r,i))),Zy(e,t,!1),r&&e.patches_&&Ry("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function qy(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&xy(5),$y(o)){const a=Ky(e,o,i&&t&&3!==t.type_&&!_y(t.assigned_,n)?i.concat(n):void 0);if(Ey(r,n,a),!$y(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(Cy(o)&&!zy(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ky(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||Zy(e,o)}}function Zy(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ay(t,r)}var Gy={get(e,t){if(t===vy)return e;const r=Iy(e);if(!_y(r,t))return function(e,t,r){const n=Jy(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!Cy(n)?n:n===Xy(e.base_,t)?(tx(e),e.copy_[t]=rx(n,e)):n},has:(e,t)=>t in Iy(e),ownKeys:e=>Reflect.ownKeys(Iy(e)),set(e,t,r){const n=Jy(Iy(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=Xy(Iy(e),t),o=n?.[vy];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||_y(e.base_,t)))return!0;tx(e),ex(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Xy(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,tx(e),ex(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=Iy(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){xy(11)},getPrototypeOf:e=>wy(e.base_),setPrototypeOf(){xy(12)}},Qy={};function Xy(e,t){const r=e[vy];return(r?Iy(r):e)[t]}function Jy(e,t){if(!(t in e))return;let r=wy(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=wy(r)}}function ex(e){e.modified_||(e.modified_=!0,e.parent_&&ex(e.parent_))}function tx(e){e.copy_||(e.copy_=My(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Dy(Gy,((e,t)=>{Qy[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Qy.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&xy(13),Qy.set.call(this,e,t,void 0)},Qy.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&xy(14),Gy.set.call(this,e[0],t,r,e[0])};function rx(e,t){const r=Oy(e)?Ry("MapSet").proxyMap_(e,t):Ty(e)?Ry("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Py(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=Gy;r&&(o=[n],i=Qy);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:Py()).drafts_.push(r),r}function nx(e){if(!Cy(e)||zy(e))return e;const t=e[vy];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=My(e,t.scope_.immer_.useStrictShallowCopy_)}else r=My(e,!0);return Dy(r,((e,t)=>{Ey(r,e,nx(t))})),t&&(t.finalized_=!1),r}var ox=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&xy(6),void 0!==r&&"function"!=typeof r&&xy(7),Cy(e)){const o=Yy(this),i=rx(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?Hy(o):Wy(o)}return Ny(o,r),Uy(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===my&&(n=void 0),this.autoFreeze_&&Ay(n,!0),r){const t=[],o=[];Ry("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}xy(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Cy(e)||xy(8),$y(e)&&(e=function(e){$y(e)||xy(10,e);return nx(e)}(e));const t=Yy(this),r=rx(e,void 0);return r[vy].isManual_=!0,Wy(t),r}finishDraft(e,t){const r=e&&e[vy];r&&r.isManual_||xy(9);const{scope_:n}=r;return Ny(n,t),Uy(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=Ry("Patches").applyPatches_;return $y(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},ix=ox.produce;ox.produceWithPatches.bind(ox),ox.setAutoFreeze.bind(ox),ox.setUseStrictShallowCopy.bind(ox),ox.applyPatches.bind(ox),ox.createDraft.bind(ox),ox.finishDraft.bind(ox);var ax=Xh,sx=Tf,lx=yh,dx=hr,cx=tf,ux=$h,hx=Kh,fx=jh,px=Object.prototype.hasOwnProperty;var gx=function(e){if(null==e)return!0;if(cx(e)&&(dx(e)||"string"==typeof e||"function"==typeof e.splice||ux(e)||fx(e)||lx(e)))return!e.length;var t=sx(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(hx(e))return!ax(e).length;for(var r in e)if(px.call(e,r))return!1;return!0},mx=ze(gx);const bx=(e,t,r)=>{const n=ix(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=yx(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},vx=(e,t)=>{const[r,...n]=t;if(mx(e)||mx(r))return;const o=e.find((e=>e.key===r));return o&&n.length?vx(o.subItems,n):o},yx=e=>e.join(","),xx=e=>new Set(e.map((e=>e.join(",")))),wx=D.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$x=D.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ia["spacing-8"]};
    padding: ${ia["spacing-12"]} ${ia["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${aa.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${ta["bg-hover"]};
        `}
`,Cx=D.div`
    height: 1px;
    width: calc((1lh + ${ia["spacing-8"]}) * ${e=>e.$level});
`,Sx=D.div`
    width: 1lh;
    height: 1lh;
    color: ${ta["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${na["duration-350"]}
            ${na["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,kx=D.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ia["spacing-8"]};
`,Dx=D.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ia["spacing-16"]};

    display: flex;
    justify-content: center;
`,Fx=D(Ce)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ta["icon-selected"]};
`,_x=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:c=2,variant:u="default",listboxId:f,matchElementWidth:p=!1,width:g,mode:m="default",selectableCategory:b,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:k,searchPlaceholder:D,onSearch:F})=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:E="Select all",clearAllButtonLabel:O="Clear all"}=k||{},T=(null==k?void 0:k.searchPlaceholder)||D||"Search",I=(null==k?void 0:k.noResultsDescription)||S,M=o||b,{elementWidth:A,setFloatingRef:B,getFloatingProps:z,styles:j}=el(),[L,R]=s(""),P=L.toLowerCase().trim(),[N,H]=s(!1),W=a(null),Y=a(null),V=a([]),U=a(null),K=ir(),[q,Z]=s([]),[G,Q]=s([]),X=N?G:q,J=v((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=s(0),[re,ne]=s([]),[oe,ie]=s(0),ae=e=>{const t=e.target.value;R(t),""===t?H(!1):t.trim().length>=3&&H(!0),null==F||F()},se=()=>{var e;R(""),H(!1),null===(e=U.current)||void 0===e||e.focus(),null==F||F()},le=()=>{null==w||w()},de=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},ce=nr(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var h,f;const p=s?s.level+1:0,g=s?[...s.keyPath,c.key]:[c.key],m=yx(g),b={item:c,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(h=c.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=c.subItems)||void 0===f?void 0:f.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,P,t))),ue=nr((e=>{return i.size?(t=ce(e,!1),ix(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>ix(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);ag(o,i)&&(n.visible=!0)}return e})))(ce(e,!1));var t})),he=nr((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),fe=nr((()=>{Z((e=>bx(e,i,o))),N&&Q((e=>bx(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>ix(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!ag(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(X,e,t);te(e),ie(r),N?Q(n):Z(n)};or("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=X[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),h((()=>{let e=[];"default"===m?e=ue(n):"expand"===m?e=ce(n,!0):"collapse"===m&&(e=ce(n,!1)),Z(e)}),[ce,ue,n,m]),h((()=>{ne(X.filter((e=>e.visible)))}),[N,X]),h((()=>{fe()}),[o,i,fe]),h((()=>{if(N&&L.trim().length>=3){const e=he(n),t=(e=>ix(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(ce(e,!1));Q(t)}}),[he,ce,n,N,L]),h((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===l)return e(uy,{ref:U,onChange:ae,value:L,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:u})},me=()=>{if(o&&!N&&q.length>0&&"success"===l)return e(Xv,{children:e(ty,{onClick:de,type:"button",$variant:u,children:0===i.size?E:O})})},be=()=>{if(!C&&N&&0===G.length&&"success"===l)return t(r,{children:[t(ry,{"data-testid":"list-no-results",children:[e(ny,{"data-testid":"no-result-icon"}),_]}),I&&e(iy,{"data-testid":"no-result-desc",children:I})]})},ve=()=>{if(w&&"loading"===l)return t(ry,{"data-testid":"list-loading",children:[e(_l,{$hasChildren:!0}),"Loading..."]})},ye=()=>{if(w&&"fail"===l)return t(ry,{"data-testid":"list-fail",children:[e(ny,{"data-testid":"load-error-icon"}),"Failed to load. ",e(ey,{onClick:le,type:"button",$variant:u,children:"Try again."})]})},xe=t=>{if(o)switch(t.checked){case"mixed":return e(Fx,{"aria-hidden":!0});case!0:return e(Zv,{"aria-hidden":!0});default:return e(Gv,{"aria-hidden":!0})}if(!t.hasSubItems)return e(Dx,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(Kv,{"aria-hidden":!0})})},we=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:p}=r,g=r.index,m=oe===n,b=h&&!M;return t(wx,{$visible:a,children:[J>0&&e(Cx,{$level:i}),J>0&&!h&&o&&e(kx,{}),t($x,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!s,n):((e,t)=>{ie(t),te(e),null==y||y(X[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(Sx,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!s,n)},$expanded:s,children:e($e,{})}),xe(r),e(xu,{bold:h,searchTerm:N?P:void 0,label:r.item.label,selected:!!u,truncationType:d,maxLines:c})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:Y,role:"tree",children:e(uv,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>we(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(Wv,Object.assign({"data-testid":"dropdown-container",ref:it(W,B),style:j},z(),{$width:p?A:void 0,$variant:u,$customWidth:g,children:t(Yv,{"data-testid":"nested-dropdown-list",children:[ge(),me(),be(),ve(),ye(),Ce()]})}))},Ex=D(Ad)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?F`
                    flex-direction: row-reverse;
                `:F`
                    flex-direction: row;
                `}
`,Ox=D(gy)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?F`
                        padding-right: 0;
                    `:F`
                        padding-left: 0;
                    `}}
`,Tx=D.div`
    flex: 0 0 auto;
`,Ix=D(hu)`
    ${e=>e.readOnly?F`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?F`
                        padding-left: 0;
                    `:F`
                        padding-right: 0;
                    `:"right"===e.$position?F`
                    padding-left: ${ia["spacing-16"]};
                `:F`
                    padding-right: ${ia["spacing-16"]};
                `}
`,Mx=D.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${ia["spacing-12"]};
    color: ${ta.text};
`,Ax=D.div`
    width: 1px;
    background: ${ta.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${ia["spacing-12"]};
                `:F`
                    margin-right: ${ia["spacing-12"]};
                `}
`,Bx=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:f,noBorder:p,"data-testid":g,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,"aria-label":y}=r,x=Me(r,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:k,searchPlaceholder:D,searchFunction:F,onSearch:_,placeholder:E="Select",displayValueExtractor:O,"data-selector-testid":T,options:I,selectedOption:M,onSelectOption:A,optionsLoadState:B,optionTruncationType:z,onRetry:j,onHideOptions:L,onShowOptions:R,dropdownZIndex:P,dropdownRootNode:N,"aria-label":H}=o.attributes,{position:W}=o,[Y,V]=s(M),[U,K]=s(!1),[q,Z]=s(!1),[G]=s((()=>at.generate())),Q=`${G}-listbox`,X=`${G}-instruction`,J=`${G}-combobox-label`,ee=`${G}-textbox-label`,te=a(null),re=a(null);h((()=>{V(M)}),[M]);const ne=()=>{if(Y)return O?O(Y):w?w(Y):Y.toString()},oe=e=>{e?null==R||R():null==L||L()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),V(e),K(!1),oe(!1),null==A||A(e,t)},ae=()=>{U&&(K(!1),oe(!1))},se=()=>{K(!0),oe(!0),Z(!0)},le=e=>{K(!1),oe(!1),"click"!==e&&(Z(!1),null==f||f())},de=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),K(!1),oe(!1)},ce=()=>t("div",{children:[e(Ox,{ref:re,disabled:c,expanded:U,listboxId:Q,popupRole:"listbox",readOnly:d,"aria-labelledby":il(m,J),"aria-describedby":il(b,X),"aria-invalid":v,$noBorder:p,$position:W,children:e(qs,{$disabled:c,children:Y?e(Zs,{children:ne()}):e(Gs,{children:E})})}),e(nl,{id:X,children:"Press space to open options"})]}),ue=()=>e(hy,{listboxId:Q,listItems:I,onSelectItem:ie,onDismiss:ae,valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:k,searchPlaceholder:D,searchFunction:F,onSearch:_,selectedItems:Y?[Y]:[],itemsLoadState:B,itemTruncationType:z,onRetry:j,matchElementWidth:!0});return e(Hv,{children:t(Ex,{$focused:q,$disabled:c,$readOnly:d,$error:i,$position:W,ref:te,className:u,"data-testid":g,$noBorder:p,tabIndex:-1,onFocus:()=>{q||U||Z(!0)},onBlur:e=>{q&&!U&&te.current&&!te.current.contains(e.relatedTarget)&&(Z(!1),null==f||f())},children:[e(nl,{"aria-hidden":!0,id:J,children:H}),e(Tx,{"data-testid":T,children:d?Y?e(Mx,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,children:e(Zs,{children:ne()})}):null:e(tl,{enabled:!d&&!c,isOpen:U,renderElement:ce,renderDropdown:ue,onOpen:se,onClose:le,onDismiss:de,clickToToggle:!0,offset:8,alignment:"right"===W?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:N,positionRef:te})}),e(Ax,{$readOnly:d,$position:W}),e(nl,{"aria-hidden":!0,id:ee,children:y}),e(Ix,Object.assign({ref:n},x,{$position:W,$noBorder:p,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":il(m,ee),"aria-describedby":b,"aria-invalid":v}))]})})})),zx=D(Ad)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ia["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,jx=D(Ad)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ia["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Lx=D(hu)``,Rx=D.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ra["body-baseline-regular"]}
    color: ${ta.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${ta["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?ia["spacing-4"]:ia["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?ia["spacing-4"]:ia["spacing-12"]};
                `};
`,Px=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=Me(r,["addon","error","className"]);const l=()=>e(jx,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(Lx,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:d="left"}=o,{allowClear:c}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(Bx,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const r=o.attributes;return r.children?t(zx,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Rx,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.children}),e(Lx,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(zx,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Rx,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.value}),e(Lx,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),Nx=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${at.generate()}`)),$=null!=i?i:w;return e(Ps,{id:$,"data-testid":l,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(Px,Object.assign({ref:r,id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),Hx=D(Px)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":ia["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Wx=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=ta.icon,$activeColor:r=ta["icon-primary"]})=>e?t:r};
    padding: ${ia["spacing-12"]} ${ia["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,Yx=D.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Vx=D(Ea.BodyBL)`
    color: ${ta["text-subtler"]};
`,Ux=D(hl)`
    margin-right: ${ia["spacing-8"]};
    color: ${ta.icon};
`,Kx=D.span`
    color: ${ta["text-primary"]};
    text-decoration: underline;
    font-weight: ${ra.Spec["weight-semibold"]};
`,qx=D.span`
    display: flex;
    align-items: center;
    margin-right: ${ia["spacing-8"]};
`,Zx=D(De)`
    color: ${ta["icon-warning"]};
    margin-right: ${ia["spacing-8"]};
    height: 1em;
    width: 1em;
`,Gx=D.span`
    color: ${ta["text-warning"]};
`,Qx=D(jd)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${ra["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${Kx} {
            color: ${ta["text-hover"]};
        }
    }
`;var Xx,Jx,ew={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Xx=ew,Jx=ew.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,d=1/0,c=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",D="[object Set]",F="[object String]",_="[object Symbol]",E="[object WeakMap]",O="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",z="[object Int32Array]",j="[object Uint8Array]",L="[object Uint8ClampedArray]",R="[object Uint16Array]",P="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,ce=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Fe="['’]",_e="["+xe+"]",Ee="["+De+"]",Oe="["+we+"]",Te="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+De+Te+$e+Ce+Se+"]",ze="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Ne="\\u200d",He="(?:"+Me+"|"+Ae+")",We="(?:"+Pe+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Oe+"|"+ze+")?",Ke="["+ke+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[je,Le,Re].join("|")+")"+Ke+Ue+")*",Ze="(?:"+[Ie,Le,Re].join("|")+")"+qe,Ge="(?:"+[je+Oe+"?",Oe,Le,Re,_e].join("|")+")",Qe=RegExp(Fe,"g"),Xe=RegExp(Oe,"g"),Je=RegExp(ze+"(?="+ze+")|"+Ge+qe,"g"),et=RegExp([Pe+"?"+Me+"+"+Ye+"(?="+[Ee,Pe,"$"].join("|")+")",We+"+"+Ve+"(?="+[Ee,Pe+He,"$"].join("|")+")",Pe+"?"+He+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ze].join("|"),"g"),tt=RegExp("["+Ne+xe+we+ke+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[B]=it[z]=it[j]=it[L]=it[R]=it[P]=!0,it[p]=it[g]=it[O]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[D]=it[F]=it[E]=!1;var at={};at[p]=at[g]=at[O]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[B]=at[z]=at[w]=at[$]=at[C]=at[k]=at[D]=at[F]=at[_]=at[j]=at[L]=at[R]=at[P]=!0,at[v]=at[y]=at[E]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,dt=parseInt,ct="object"==typeof Be&&Be&&Be.Object===Object&&Be,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=ct||ut||Function("return this")(),ft=Jx&&!Jx.nodeType&&Jx,pt=ft&&Xx&&!Xx.nodeType&&Xx,gt=pt&&pt.exports===ft,mt=gt&&ct.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Bt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Yt("length");function Lt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Rt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Rt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):jt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ht:pr.defaults(ht.Object(),xe,pr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,De=xe.Object,Fe=xe.RegExp,_e=xe.String,Ee=xe.TypeError,Oe=we.prototype,Te=Se.prototype,Ie=De.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,Be=Ie.hasOwnProperty,ze=0,je=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Le=Ie.toString,Re=Ae.call(De),Pe=ht._,Ne=Fe("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=ar(De.getPrototypeOf,De),Ke=De.create,qe=Ie.propertyIsEnumerable,Ze=Oe.splice,Ge=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=hi(De,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,pt=ke.ceil,mt=ke.floor,bt=De.getOwnPropertySymbols,jt=He?He.isBuffer:e,Vt=xe.isFinite,gr=Oe.join,mr=ar(De.keys,De),br=ke.max,vr=ke.min,yr=$e.now,xr=xe.parseInt,wr=ke.random,$r=Oe.reverse,Cr=hi(xe,"DataView"),Sr=hi(xe,"Map"),kr=hi(xe,"Promise"),Dr=hi(xe,"Set"),Fr=hi(xe,"WeakMap"),_r=hi(De,"create"),Er=Fr&&new Fr,Or={},Tr=Li(Cr),Ir=Li(Sr),Mr=Li(kr),Ar=Li(Dr),Br=Li(Fr),zr=We?We.prototype:e,jr=zr?zr.valueOf:e,Lr=zr?zr.toString:e;function Rr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Be.call(e,"__wrapped__"))return Ri(e)}return new Hr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Zr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&ds(e),a=r||n||o||i,s=a?qt(e.length,_e):[],l=s.length;for(var d in e)!t&&!Be.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yi(d,l))||s.push(d);return s}function Gr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Qr(e,t){return Bi(Oo(e),sn(t,0,e.length))}function Xr(e){return Bi(Oo(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Be.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:Ds(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,d=2&r,c=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oo(t,s)}else{var h=gi(t),f=h==y||h==x;if(qa(t))return So(t,l);if(h==C||h==p||f&&!i){if(s=d||f?{}:bi(t),!l)return d?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case O:return ko(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?ko(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case B:case z:case j:case L:case R:case P:return Do(e,r);case w:return new o;case $:case F:return new o(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new o;case _:return n=e,jr?De(jr.call(n)):{}}}(t,h,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(c?d?ii:oi:d?Is:Ts)(t);return Dt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function dn(t,r,n){var o=n.length;if(null==t)return!o;for(t=De(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function cn(r,n,o){if("function"!=typeof r)throw new Ee(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ot,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=It(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var c=e[o],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var h=d;h--;)if(t[h]===u)continue e;l.push(c)}else i(t,u,n)||l.push(c)}return l}Rr.templateSettings={escape:q,evaluate:Z,interpolate:G,variable:"",imports:{_:Rr}},Rr.prototype=Nr.prototype,Rr.prototype.constructor=Rr,Hr.prototype=Pr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Pr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=_r?_r(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(_r){var o=n[t];return o===r?e:o}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return _r?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=_r&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ci(this,e).get(e)},Ur.prototype.has=function(e){return ci(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ci(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ao(xn),fn=Ao(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,d=a}return d}function mn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=Bo(),yn=Bo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Et(t,(function(t){return Qa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[ji(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function kn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in De(t)?function(t){var r=Be.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Le.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Le.call(e)}(t)}function Dn(e,t){return e>t}function Fn(e,t){return null!=e&&Be.call(e,t)}function _n(e,t){return null!=e&&t in De(e)}function En(t,r,n){for(var o=n?Tt:Ot,i=t[0].length,a=t.length,s=a,l=we(a),d=1/0,c=[];s--;){var u=t[s];s&&r&&(u=It(u,Gt(r))),d=vr(u.length,d),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&c.length<d;){var p=u[h],g=r?r(p):p;if(p=n||0!==p?p:0,!(f?Xt(f,g):o(c,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}f&&f.push(g),c.push(p)}}return c}function On(t,r,n){var o=null==(t=_i(t,r=xo(r,t)))?t:t[ji(Gi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&kn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),d=s?g:gi(t),c=l?g:gi(r),u=(d=d==p?C:d)==C,h=(c=c==p?C:c)==C,f=d==c;if(f&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new qr),s||ds(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case F:return e==t+"";case w:var s=ir;case D:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=ri(s(e),s(t),n,o,i,a);return a.delete(e),c;case _:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,d,n,o,i,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new qr),i(S,E,n,o,a)}}return!!f&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),d=l.length,c=oi(r),u=c.length;if(d!=u&&!s)return!1;for(var h=d;h--;){var f=l[h];if(!(s?f in r:Be.call(r,f)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<d;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=De(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var d=(l=n[i])[0],c=t[d],u=l[1];if(s&&l[2]){if(c===e&&!(d in t))return!1}else{var h=new qr;if(o)var f=o(c,u,d,t,r,h);if(!(f===e?In(u,c,3,o,h):f))return!1}}return!0}function An(e){return!(!es(e)||(t=e,je&&je in t))&&(Qa(e)?Ne:pe).test(Li(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Pn(e):hl(e)}function zn(e){if(!Si(e))return mr(e);var t=[];for(var r in De(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in De(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Ln(e,t){return e<t}function Rn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?Di(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&ki(r)?Di(ji(t),r):function(n){var o=Ds(n,t);return o===e&&o===r?Fs(n,t):In(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Ei(t,n),d=Ei(r,n),c=s.get(d);if(c)Jr(t,n,c);else{var u=a?a(l,d,n+"",t,r,s):e,h=u===e;if(h){var f=Ya(d),p=!f&&qa(d),g=!f&&!p&&ds(d);u=d,f||p||g?Ya(l)?u=l:Ka(l)?u=Oo(l):p?(h=!1,u=So(d,!0)):g?(h=!1,u=Do(d,!0)):u=[]:os(d)||Wa(d)?(u=l,Wa(l)?u=bs(l):es(l)&&!Qa(l)||(u=bi(d))):h=!1}h&&(s.set(d,u),i(u,d,o,a,s),s.delete(d)),Jr(t,n,u)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Ei(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Gt(di()));var o=Rn(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Fo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=Oo(t)),r&&(s=It(e,Gt(r)));++i<a;)for(var l=0,d=t[i],c=r?r(d):d;(l=o(s,c,l,n))>-1;)s!==e&&Ze.call(s,l,1),Ze.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ze.call(e,o,1):ho(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Zn(e,t){var r="";if(!e||t<1||t>c)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(Fi(e,t,nl),e+"")}function Qn(e){return Gr(Ps(e))}function Xn(e,t){var r=Ps(e);return Bi(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var d=ji(r[i]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(i!=s){var u=l[d];(c=o?o(u,d,l):e)===e&&(c=es(u)?u:yi(r[i+1])?[]:{})}en(l,d,c),l=l[d]}return t}var eo=Er?function(e,t){return Er.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Bi(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,d=ls(r),c=r===e;i<a;){var u=mt((i+a)/2),h=n(t[u]),f=h!==e,p=null===h,g=h==h,m=ls(h);if(s)var b=o||g;else b=c?g&&(o||f):l?g&&f&&(o||!p):d?g&&f&&!p&&(o||!m):!p&&!m&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return Lr?Lr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ot,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var d=t?null:Go(e);if(d)return lr(d);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(c)}else o(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ho(e,t){var r=-1,n=(t=xo(t,e)).length;if(!n)return!0;for(var o=null==e||"object"!=typeof e&&"function"!=typeof e;++r<n;){var i=t[r];if("string"==typeof i){if("__proto__"===i&&!Be.call(e,"__proto__"))return!1;if("constructor"===i&&r+1<n&&"string"==typeof t[r+1]&&"prototype"===t[r+1]){if(o&&0===r)continue;return!1}}}var a=_i(e,t);return null==a||delete a[ji(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ct||function(e){return ht.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function ko(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function Do(e,t){var r=t?ko(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Fo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,d=r==r,c=ls(r);if(!l&&!c&&!a&&t>r||a&&s&&d&&!l&&!c||o&&s&&d||!n&&d||!i)return 1;if(!o&&!a&&!c&&t<r||c&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!d)return-1}return 0}function _o(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,d=br(i-a,0),c=we(l+d),u=!n;++s<l;)c[s]=t[s];for(;++o<a;)(u||o<i)&&(c[r[o]]=e[o]);for(;d--;)c[s++]=e[o++];return c}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,d=t.length,c=br(i-s,0),u=we(c+d),h=!n;++o<c;)u[o]=e[o];for(var f=o;++l<d;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function Oo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],d=o?o(n[l],t[l],l,n,t):e;d===e&&(d=t[l]),i?on(n,l,d):en(n,l,d)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?kt:rn,i=t?t():{};return o(r,e,di(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=De(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=De(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Bo(e){return function(t,r,n){for(var o=-1,i=De(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function jo(e){return function(t){return At(Qs(Ws(t).replace(Qe,"")),e,"")}}function Lo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Ro(t){return function(r,n,o){var i=De(r);if(!Ua(r)){var a=di(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var d=si(s=n[i]),c="wrapper"==d?ai(s):e;l=c&&$i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[si(c[0])].apply(l,c[3]):1==s.length&&$i(s)?l[d]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,d,c,u){var h=r&s,f=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Lo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=_o(y,o,i,g)),a&&(y=Eo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,d,c,u-v)}var S=f?n:this,k=p?S[t]:t;return v=y.length,d?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Oo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,d):m&&v>1&&y.reverse(),h&&c<v&&(y.length=c),this&&this!==ht&&this instanceof s&&(k=b||Lo(k)),k.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Gt(di())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Zn(r,t):r;var o=Zn(r,pt(t/cr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,d,c,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var p=[t,r,s,f?l:e,f?d:e,f?e:l,f?e:d,c,u,h],g=n.apply(e,p);return $i(t)&&Oi(g,p),g.placeholder=o,Mi(g,t,r)}function Zo(e){var t=ke[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=Dr&&1/lr(new Dr([,-0]))[1]==d?function(e){return new Dr(e)}:ll;function Qo(e){return function(t){var r=gi(t);return r==w?ir(t):r==D?dr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,d,c,u,h,f,p,g){var m=2&d;if(!m&&"function"!=typeof r)throw new Ee(t);var b=u?u.length:0;if(b||(d&=-97,u=h=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=h?h.length:0,d&a){var v=u,y=h;u=h=e}var x=m?e:ai(r),w=[r,d,c,u,h,v,y,f,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,d=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!d)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var c=t[3];if(c){var u=e[3];e[3]=u?_o(u,c,t[4]):c,e[4]=u?sr(e[3],n):t[4]}(c=t[5])&&(u=e[5],e[5]=u?Eo(u,c,t[6]):c,e[6]=u?sr(e[5],n):t[6]),(c=t[7])&&(e[7]=c),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],d=w[1],c=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&d&&(d&=-25),d&&1!=d)$=8==d||d==o?function(t,r,n){var o=Lo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,d=li(i);l--;)s[l]=arguments[l];var c=a<3&&s[0]!==d&&s[a-1]!==d?[]:sr(s,d);return(a-=c.length)<n?qo(t,r,No,i.placeholder,e,s,c,e,e,n-a):St(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,d,g):d!=i&&33!=d||h.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=Lo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,d=n.length,c=we(d+s),u=this&&this!==ht&&this instanceof t?i:e;++l<d;)c[l]=n[l];for(;s--;)c[l++]=arguments[++a];return St(u,o?r:this,c)}}(r,d,c,u);else var $=function(e,t,r){var n=1&t,o=Lo(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,d,c);return Mi((x?eo:Oi)($,w),r,d)}function Jo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Be.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,d=r.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(t),u=a.get(r);if(c&&u)return c==r&&u==t;var h=-1,f=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var g=t[h],m=r[h];if(o)var b=s?o(m,g,h,r,t,a):o(g,m,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(p){if(!zt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Ii(Fi(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,fi)}function ii(e){return Sn(e,Is,pi)}var ai=Er?function(e){return Er.get(e)}:ll;function si(e){for(var t=e.name+"",r=Or[t],n=Be.call(Or,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Be.call(Rr,"placeholder")?Rr:e).placeholder}function di(){var e=Rr.iteratee||ol;return e=e===ol?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,ki(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=De(e),Et(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,fi(e)),e=Ue(e);return t}:gl,gi=kn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=ji(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?c:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Q.test(e)||null!=t&&e in De(t)}function $i(e){var t=si(e),r=Rr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||kr&&gi(kr.resolve())!=S||Dr&&gi(new Dr)!=D||Fr&&gi(new Fr)!=E)&&(gi=function(t){var r=kn(t),n=r==C?t.constructor:e,o=n?Li(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return D;case Br:return E}return r});var Ci=Me?Qa:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function ki(e){return e==e&&!es(e)}function Di(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in De(n))}}function Fi(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function _i(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Ei(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oi=Ai(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Dt(f,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bi(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(de,"$1"):r||e)})),t}));function ji(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Li(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ri(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Oo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),di(n,2)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Rt(e,di(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Rt(t,di(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?En(t):[]})),qi=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,di(r,2)):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Qi=Gn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Fo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),di(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return mo(Et(e,Ka))})),la=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),mo(Et(t,Ka),di(r,2))})),da=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,mo(Et(t,Ka),e,r)})),ca=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Rr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Ro(Wi),ba=Ro(Yi);function va(e,t){return(Ya(e)?Dt:hn)(e,di(t,3))}function ya(e,t){return(Ya(e)?Ft:fn)(e,di(t,3))}var xa=Io((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?St(t,e,r):On(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Rn)(e,di(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),Da=ut||function(){return ht.Date.now()};function Fa(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function _a(r,n){var o;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Ea));n|=i}return Xo(e,n,t,r,o)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,d,c,u=0,h=!1,f=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-c;return c===e||r>=n||r<0||f&&t-u>=s}function b(){var e=Da();if(m(e))return v(e);d=Ti(b,function(e){var t=n-(e-c);return f?vr(t,s-(e-u)):t}(e))}function v(t){return d=e,p&&i?g(t):(i=a=e,l)}function y(){var t=Da(),r=m(t);if(i=arguments,a=this,c=t,r){if(d===e)return function(e){return u=e,d=Ti(b,n),h?g(e):l}(c);if(f)return Co(d),d=Ti(b,n),g(c)}return d===e&&(d=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){d!==e&&Co(d),u=0,i=c=a=d=e},y.flush=function(){return d===e?l:v(Da())},y}var Ia=Gn((function(e,t){return cn(e,1,t)})),Ma=Gn((function(e,t,r){return cn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Gt(di())):It(bn(t,1),Gt(di()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),ja=Gn((function(t,r){var n=sr(r,li(ja));return Xo(t,i,e,r,n)})),La=Gn((function(t,r){var n=sr(r,li(La));return Xo(t,a,e,r,n)})),Ra=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Na=Ko(Dn),Ha=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Be.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return ts(e)&&kn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Qa(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=jt||ml,Za=yt?Gt(yt):function(e){return ts(e)&&kn(e)==b};function Ga(e){if(!ts(e))return!1;var t=kn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Qa(e){if(!es(e))return!1;var t=kn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&kn(e)==$}function os(e){if(!ts(e)||kn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Re}var is=wt?Gt(wt):function(e){return ts(e)&&kn(e)==k},as=$t?Gt($t):function(e){return ts(e)&&gi(e)==D};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&kn(e)==F}function ls(e){return"symbol"==typeof e||ts(e)&&kn(e)==_}var ds=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[kn(e)]},cs=Ko(Ln),us=Ko((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Oo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==D?lr:Ps)(e)}function fs(e){return e?(e=ms(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=fe.test(e);return r||ge.test(e)?dt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Gn((function(t,r){t=De(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,d=s.length;++l<d;){var c=s[l],u=t[c];(u===e||Pa(u,Ie[c])&&!Be.call(t,c))&&(t[c]=a[c])}return t})),ks=Gn((function(t){return t.push(e,ei),St(As,e,t)}));function Ds(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Fs(e,t){return null!=e&&mi(e,t,_n)}var _s=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),e[t]=r}),el(nl)),Es=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),di),Os=Gn(On);function Ts(e){return Ua(e)?Zr(e):zn(e)}function Is(e){return Ua(e)?Zr(e,!0):jn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),Bs=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Fs(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=di(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Ls=Qo(Ts),Rs=Qo(Is);function Ps(e){return null==e?[]:Qt(e,Ts(e))}var Ns=jo((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Ys=jo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=jo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),Ks=jo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=jo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),Zs=jo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=zo("toUpperCase");function Qs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Gn((function(t,r){try{return St(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return Dt(t,(function(t){t=ji(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return Bn("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Qa(e);return Dt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Oo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var dl=Yo(It),cl=Yo(_t),ul=Yo(zt);function hl(e){return wi(e)?Yt(ji(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Zo("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Zo("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Zo("round"),Sl=Wo((function(e,t){return e-t}),0);return Rr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Rr.ary=Fa,Rr.assign=ys,Rr.assignIn=xs,Rr.assignInWith=ws,Rr.assignWith=$s,Rr.at=Cs,Rr.before=_a,Rr.bind=Ea,Rr.bindAll=Js,Rr.bindKey=Oa,Rr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Rr.chain=ha,Rr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Rr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Rr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?Oo(r):[r],bn(t,1))},Rr.cond=function(e){var r=null==e?0:e.length,n=di();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Rr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return dn(r,e,t)}}(ln(e,1))},Rr.constant=el,Rr.countBy=ga,Rr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Rr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Rr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Rr.debounce=Ta,Rr.defaults=Ss,Rr.defaultsDeep=ks,Rr.defer=Ia,Rr.delay=Ma,Rr.difference=Pi,Rr.differenceBy=Ni,Rr.differenceWith=Hi,Rr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Rr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Rr.dropRightWhile=function(e,t){return e&&e.length?po(e,di(t,3),!0,!0):[]},Rr.dropWhile=function(e,t){return e&&e.length?po(e,di(t,3),!0):[]},Rr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Rr.filter=function(e,t){return(Ya(e)?Et:mn)(e,di(t,3))},Rr.flatMap=function(e,t){return bn(Ca(e,t),1)},Rr.flatMapDeep=function(e,t){return bn(Ca(e,t),d)},Rr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Rr.flatten=Vi,Rr.flattenDeep=function(e){return null!=e&&e.length?bn(e,d):[]},Rr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Rr.flip=function(e){return Xo(e,512)},Rr.flow=tl,Rr.flowRight=rl,Rr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Rr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Rr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Rr.groupBy=xa,Rr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Rr.intersection=Ki,Rr.intersectionBy=qi,Rr.intersectionWith=Zi,Rr.invert=_s,Rr.invertBy=Es,Rr.invokeMap=wa,Rr.iteratee=ol,Rr.keyBy=$a,Rr.keys=Ts,Rr.keysIn=Is,Rr.map=Ca,Rr.mapKeys=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Rr.mapValues=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Rr.matches=function(e){return Pn(ln(e,1))},Rr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Rr.memoize=Aa,Rr.merge=Ms,Rr.mergeWith=As,Rr.method=il,Rr.methodOf=al,Rr.mixin=sl,Rr.negate=Ba,Rr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Rr.omit=Bs,Rr.omitBy=function(e,t){return js(e,Ba(di(t)))},Rr.once=function(e){return _a(2,e)},Rr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Rr.over=dl,Rr.overArgs=za,Rr.overEvery=cl,Rr.overSome=ul,Rr.partial=ja,Rr.partialRight=La,Rr.partition=Sa,Rr.pick=zs,Rr.pickBy=js,Rr.property=hl,Rr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Rr.pull=Qi,Rr.pullAll=Xi,Rr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,di(r,2)):e},Rr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Rr.pullAt=Ji,Rr.range=fl,Rr.rangeRight=pl,Rr.rearg=Ra,Rr.reject=function(e,t){return(Ya(e)?Et:mn)(e,Ba(di(t,3)))},Rr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=di(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Rr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Gn(r,n=n===e?n:ps(n))},Rr.reverse=ea,Rr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Ya(t)?Qr:Xn)(t,r)},Rr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Rr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Rr.shuffle=function(e){return(Ya(e)?Xr:ro)(e)},Rr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Rr.sortBy=ka,Rr.sortedUniq=function(e){return e&&e.length?so(e):[]},Rr.sortedUniqBy=function(e,t){return e&&e.length?so(e,di(t,2)):[]},Rr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Rr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Rr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Rr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Rr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Rr.takeRightWhile=function(e,t){return e&&e.length?po(e,di(t,3),!1,!0):[]},Rr.takeWhile=function(e,t){return e&&e.length?po(e,di(t,3)):[]},Rr.tap=function(e,t){return t(e),e},Rr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Rr.thru=fa,Rr.toArray=hs,Rr.toPairs=Ls,Rr.toPairsIn=Rs,Rr.toPath=function(e){return Ya(e)?It(e,ji):ls(e)?[e]:Oo(zi(vs(e)))},Rr.toPlainObject=bs,Rr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||ds(e);if(t=di(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Qa(i)?Pr(Ue(e)):{}}return(o?Dt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Rr.unary=function(e){return Fa(e,1)},Rr.union=ta,Rr.unionBy=ra,Rr.unionWith=na,Rr.uniq=function(e){return e&&e.length?uo(e):[]},Rr.uniqBy=function(e,t){return e&&e.length?uo(e,di(t,2)):[]},Rr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Rr.unset=function(e,t){return null==e||ho(e,t)},Rr.unzip=oa,Rr.unzipWith=ia,Rr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Rr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Rr.values=Ps,Rr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Rr.without=aa,Rr.words=Qs,Rr.wrap=function(e,t){return ja(yo(t),e)},Rr.xor=sa,Rr.xorBy=la,Rr.xorWith=da,Rr.zip=ca,Rr.zipObject=function(e,t){return bo(e||[],t||[],en)},Rr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Rr.zipWith=ua,Rr.entries=Ls,Rr.entriesIn=Rs,Rr.extend=xs,Rr.extendWith=ws,sl(Rr,Rr),Rr.add=vl,Rr.attempt=Xs,Rr.camelCase=Ns,Rr.capitalize=Hs,Rr.ceil=yl,Rr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Rr.clone=function(e){return ln(e,4)},Rr.cloneDeep=function(e){return ln(e,5)},Rr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Rr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Rr.conformsTo=function(e,t){return null==t||dn(e,t,Ts(t))},Rr.deburr=Ws,Rr.defaultTo=function(e,t){return null==e||e!=e?t:e},Rr.divide=xl,Rr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Rr.eq=Pa,Rr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Rr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Rr.every=function(t,r,n){var o=Ya(t)?_t:pn;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Rr.find=ma,Rr.findIndex=Wi,Rr.findKey=function(e,t){return Lt(e,di(t,3),xn)},Rr.findLast=ba,Rr.findLastIndex=Yi,Rr.findLastKey=function(e,t){return Lt(e,di(t,3),wn)},Rr.floor=wl,Rr.forEach=va,Rr.forEachRight=ya,Rr.forIn=function(e,t){return null==e?e:vn(e,di(t,3),Is)},Rr.forInRight=function(e,t){return null==e?e:yn(e,di(t,3),Is)},Rr.forOwn=function(e,t){return e&&xn(e,di(t,3))},Rr.forOwnRight=function(e,t){return e&&wn(e,di(t,3))},Rr.get=Ds,Rr.gt=Na,Rr.gte=Ha,Rr.has=function(e,t){return null!=e&&mi(e,t,Fn)},Rr.hasIn=Fs,Rr.head=Ui,Rr.identity=nl,Rr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Rr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Rr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Rr.invoke=Os,Rr.isArguments=Wa,Rr.isArray=Ya,Rr.isArrayBuffer=Va,Rr.isArrayLike=Ua,Rr.isArrayLikeObject=Ka,Rr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kn(e)==m},Rr.isBuffer=qa,Rr.isDate=Za,Rr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Rr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||ds(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==D)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Rr.isEqual=function(e,t){return In(e,t)},Rr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Rr.isError=Ga,Rr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Rr.isFunction=Qa,Rr.isInteger=Xa,Rr.isLength=Ja,Rr.isMap=rs,Rr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Rr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Rr.isNaN=function(e){return ns(e)&&e!=+e},Rr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Rr.isNil=function(e){return null==e},Rr.isNull=function(e){return null===e},Rr.isNumber=ns,Rr.isObject=es,Rr.isObjectLike=ts,Rr.isPlainObject=os,Rr.isRegExp=is,Rr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=c},Rr.isSet=as,Rr.isString=ss,Rr.isSymbol=ls,Rr.isTypedArray=ds,Rr.isUndefined=function(t){return t===e},Rr.isWeakMap=function(e){return ts(e)&&gi(e)==E},Rr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kn(e)},Rr.join=function(e,t){return null==e?"":gr.call(e,t)},Rr.kebabCase=Ys,Rr.last=Gi,Rr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Rt(t,Ht,i,!0)},Rr.lowerCase=Vs,Rr.lowerFirst=Us,Rr.lt=cs,Rr.lte=us,Rr.max=function(t){return t&&t.length?gn(t,nl,Dn):e},Rr.maxBy=function(t,r){return t&&t.length?gn(t,di(r,2),Dn):e},Rr.mean=function(e){return Wt(e,nl)},Rr.meanBy=function(e,t){return Wt(e,di(t,2))},Rr.min=function(t){return t&&t.length?gn(t,nl,Ln):e},Rr.minBy=function(t,r){return t&&t.length?gn(t,di(r,2),Ln):e},Rr.stubArray=gl,Rr.stubFalse=ml,Rr.stubObject=function(){return{}},Rr.stubString=function(){return""},Rr.stubTrue=function(){return!0},Rr.multiply=$l,Rr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Rr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Rr.noop=ll,Rr.now=Da,Rr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Rr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?e+Vo(t-n,r):e},Rr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Rr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Rr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Rr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,hn)},Rr.reduceRight=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,fn)},Rr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Zn(vs(t),r)},Rr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Rr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[ji(r[o])];a===e&&(o=i,a=n),t=Qa(a)?a.call(t):a}return t},Rr.round=Cl,Rr.runInContext=ne,Rr.sample=function(e){return(Ya(e)?Gr:Qn)(e)},Rr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=gi(e);return t==w||t==D?e.size:zn(e).length},Rr.snakeCase=Ks,Rr.some=function(t,r,n){var o=Ya(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Rr.sortedIndex=function(e,t){return io(e,t)},Rr.sortedIndexBy=function(e,t,r){return ao(e,t,di(r,2))},Rr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Rr.sortedLastIndex=function(e,t){return io(e,t,!0)},Rr.sortedLastIndexBy=function(e,t,r){return ao(e,t,di(r,2),!0)},Rr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Rr.startCase=qs,Rr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Rr.subtract=Sl,Rr.sum=function(e){return e&&e.length?Kt(e,nl):0},Rr.sumBy=function(e,t){return e&&e.length?Kt(e,di(t,2)):0},Rr.template=function(t,r,n){var o=Rr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),d=Qt(s,l),c=0,u=r.interpolate||ve,h="__p += '",f=Fe((r.escape||ve).source+"|"+u.source+"|"+(u===G?ce:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(c,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e})),h+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+h).apply(e,d)}));if(m.source=h,Ga(m))throw m;return m},Rr.times=function(e,t){if((e=ps(e))<1||e>c)return[];var r=h,n=vr(e,h);t=di(t),e-=h;for(var o=qt(n,t);++r<e;)t(r);return o},Rr.toFinite=fs,Rr.toInteger=ps,Rr.toLength=gs,Rr.toLower=function(e){return vs(e).toLowerCase()},Rr.toNumber=ms,Rr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,c):0===e?e:0},Rr.toString=vs,Rr.toUpper=function(e){return vs(e).toUpperCase()},Rr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Zt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Rr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Rr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Rr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-cr(o);if(l<1)return o;var d=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return d+o;if(s&&(l+=d.length-l),is(i)){if(t.slice(l).search(i)){var c,u=d;for(i.global||(i=Fe(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;c=i.exec(u);)var h=c.index;d=d.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=d.lastIndexOf(i);f>-1&&(d=d.slice(0,f))}return d+o},Rr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,fr):e},Rr.uniqueId=function(e){var t=++ze;return vs(e)+t},Rr.upperCase=Zs,Rr.upperFirst=Gs,Rr.each=va,Rr.eachRight=ya,Rr.first=Ui,sl(Rr,(bl={},xn(Rr,(function(e,t){Be.call(Rr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Rr.VERSION="4.17.23",Dt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Rr[e].placeholder=Rr})),Dt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Dt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:di(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Dt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Dt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(di(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Rr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Rr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,d=s[0],c=l||Ya(r),u=function(e){var t=i.apply(Rr,Mt([e],s));return o&&h?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(l=c=!1);var h=this.__chain__,f=!!this.__actions__.length,p=a&&!h,g=l&&!f;if(!a&&c){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:fa,args:[u],thisArg:e}),new Hr(m,h)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),Dt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Rr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Rr[t];if(r){var n=r.name+"";Be.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,d=n?s:a-1,c=this.__iteratees__,u=c.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return go(e,this.__actions__);var p=[];e:for(;l--&&h<f;){for(var g=-1,m=e[d+=t];++g<u;){var b=c[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Rr.prototype.at=pa,Rr.prototype.chain=function(){return ha(this)},Rr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Rr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Rr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Ri(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Rr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Rr.prototype.toJSON=Rr.prototype.valueOf=Rr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Rr.prototype.first=Rr.prototype.head,Je&&(Rr.prototype[Je]=function(){return this}),Rr}();pt?((pt.exports=pr)._=pr,ft._=pr):ht._=pr}.call(Be);var tw=ew.exports;const rw=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":l,maskRange:d,unmaskRange:c,maskRegex:u,maskTransformer:f,iconMask:p=e(ke,{}),iconUnmask:g=e(Se,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:D,onBlur:F,onTryAgain:_}=n,E=Me(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const O=a&&tw.isEmpty(i),[T,I]=s(!x),[M,A]=s(i||"");h((()=>{A(i||"")}),[i]);const B=e=>{P(!1),null==D||D(e)},z=e=>{P(!0),null==F||F(e)},j=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,null==k||k(e)},L=()=>{a&&(null==_||_())},R=()=>{P(!T)},P=e=>{I(e),e?null==C||C():null==S||S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(O)return e(r,{});const t=N();return e(Wx,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:R,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?g:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return t(Qx,{onClick:L,"data-testid":"try-again-button",children:[t(qx,{children:[e(Zx,{}),e(Gx,{children:"Error"})]}),e(Kx,{children:"Try again?"})]});case"loading":return t(Yx,{children:[e(Ux,{}),e(Vx,{children:"Retrieving..."})]})}return e(Hx,Object.assign({ref:o,"data-testid":`${l||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:B,onBlur:a?void 0:z,onClick:a?R:void 0,onChange:j,value:O?"-":T&&!x?st.maskValue(M,{maskChar:v,maskRange:d,unmaskRange:c,maskRegex:u,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},E))})()})})),nw=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u}=t,h=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ps,{id:i,label:n,errorMessage:o,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,children:e(rw,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},h))})})),ow=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,listExtractor:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:k="end",renderListItem:D,hideNoResultsDisplay:F,noResultsDescription:_,customLabels:E,renderCustomCallToAction:O,onBlur:T,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:B,maxSelectable:z,dropdownRootNode:j,dropdownWidth:L})=>{const{allSelectedLabel:R,multiSelectedLabel:P}=E||{},[N,H]=s(t||[]),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>at.generate())),q=a(null),Z=a(null);h((()=>{H(t||[])}),[t]);const G=()=>{N&&N.length>0||z?(H([]),re([])):(H(n),re(n))},Q=(e,t)=>{const r=[...N],n=ng(N,(e=>(v?v(e):e)===t));n>-1?r.splice(n,1):r.push(e),H(r),re(r)},X=()=>{W&&(Y(!1),te(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==T||T())},te=e=>{!e&&$&&$(),e&&w&&w()},re=e=>{x&&x(e)};return e(Hv,{children:e(tl,{enabled:!M&&!o,isOpen:W,renderElement:()=>e(Ad,{className:l,"data-testid":d,id:c,ref:q,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:M,$error:i,children:e(gy,{ref:Z,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:M,variant:I,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,children:e(qs,{$disabled:o,children:N&&0!==N.length?e(Zs,{$variant:I,children:n&&N.length===n.length?R||"All selected":P||`${N.length} selected`}):e(Gs,{$truncateType:k,$variant:I,children:r})})})}),renderDropdown:()=>e(hy,{listboxId:K,listItems:n,onSelectItem:Q,onDismiss:X,valueExtractor:v,listExtractor:y,enableSearch:g,searchFunction:m,searchPlaceholder:b,multiSelect:!0,maxSelectable:z,selectedItems:N,onSelectAll:G,onRetry:C,itemsLoadState:S,itemTruncationType:k,renderListItem:D,hideNoResultsDisplay:F,noResultsDescription:_,customLabels:E,renderCustomCallToAction:O,variant:I,width:L,matchElementWidth:!0}),onOpen:()=>{Y(!0),te(!0),U(!0)},onClose:e=>{Y(!1),te(!1),"click"!==e&&(U(!1),null==T||T())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),te(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:B,rootNode:j})})},iw=(e,t)=>{const[r,...n]=t;if(mx(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?iw(o.subItems,n):o:void 0},aw=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...aw(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},sw=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPaths:p,mode:g,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,readOnly:$,onSearch:C,onSelectOptions:S,onShowOptions:k,onHideOptions:D,onRetry:F,onBlur:_,optionsLoadState:E="success",optionTruncationType:O="end",variant:T="default",alignment:I,dropdownZIndex:M,dropdownWidth:A,dropdownRootNode:B})=>{const{multiSelectedLabel:z}=w||{},j=r,[L,R]=s(p?xx(p):new Set),[P,N]=s([]),[H,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>at.generate())),K=a(null),q=a(null),Z=a(null);h((()=>{const e=p||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=iw(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(j,e);R(xx(e)),N(t)}),[p,j]);const G=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));R(xx(e)),N(r),ne(e,r)},Q=e=>{const t=oe(e),r=t.map((e=>e.keyPath));N(t),R(xx(r)),ne(r,t)},X=()=>{Y||H||V(!0)},J=e=>{Y&&!H&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==_||_())},ee=()=>{if(P.length>1)return z||`${P.length} selected`;const{label:e,value:t}=P[0];return m?m(t):e},te=e=>{if("middle"===O){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),st.truncateOneLine(e,t,120,6)}return e},re=e=>{!e&&D&&D(),e&&k&&k()},ne=(e,t)=>{if(S){const r=t.map((e=>e.value));S(e,r)}},oe=e=>{if(!0===e.checked)return P.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!ag(e.keyPath,r)}));{const t=[...P],r=e.hasSubItems?((e,t)=>{const r=iw(e,t);return r&&r.subItems?aw(r.subItems,t):[]})(j,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{P.find((t=>ag(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(tl,{enabled:!$&&!n,isOpen:H,renderElement:()=>e(Ad,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:X,onBlur:J,$focused:Y,$disabled:n,$readOnly:$,$error:o,children:e(gy,{ref:q,disabled:n,expanded:H,listboxId:U,popupRole:"tree",readOnly:$,variant:T,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(qs,{ref:Z,$disabled:n,children:mx(P)?e(Gs,{$truncateType:O,children:t}):e(Zs,{$truncateType:O,children:te(ee())})})})}),renderDropdown:()=>e(_x,{listboxId:U,listItems:j,multiSelect:!0,selectedKeyPaths:L,itemsLoadState:E,itemTruncationType:O,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,onSelectItem:Q,onSelectAll:G,onRetry:F,onSearch:C,variant:T,mode:g,width:A,matchElementWidth:!0}),onOpen:()=>{W(!0),re(!0),V(!0)},onClose:e=>{W(!1),re(!1),"click"!==e&&(V(!1),null==_||_())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),W(!1),re(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:B})},lw=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPath:p,mode:g,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,selectableCategory:y,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,readOnly:C,onBlur:S,onSearch:k,onSelectOption:D,onShowOptions:F,onHideOptions:_,onRetry:E,optionsLoadState:O="success",optionTruncationType:T="end",variant:I="default",alignment:M,dropdownZIndex:A,dropdownWidth:B,dropdownRootNode:z})=>{const j=r,[L,R]=s(p?xx([p]):new Set),[P,N]=s(),[H,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>at.generate())),K=a(null),q=a(null),Z=a(null);h((()=>{R(p?xx([p]):new Set);const e=vx(j,p||[]);N(null!=e?e:void 0)}),[p,j]);const G=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;R(xx([r])),N({label:n,value:o}),W(!1),te(!1),null===(t=q.current)||void 0===t||t.focus(),null==D||D(r,o)},Q=()=>{Y||H||V(!0)},X=e=>{Y&&!H&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==S||S())},J=()=>{if(!P)return"";const{label:e,value:t}=P;return m?m(t):e},ee=e=>{if("middle"===T){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),st.truncateOneLine(e,t,120,6)}return e},te=e=>{!e&&_&&_(),e&&F&&F()};return e(tl,{enabled:!C&&!n,isOpen:H,renderElement:()=>e(Ad,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:Q,onBlur:X,$focused:Y,$disabled:n,$readOnly:C,$error:o,children:e(gy,{ref:q,disabled:n,expanded:H,listboxId:U,popupRole:"tree",readOnly:C,variant:I,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(qs,{ref:Z,$disabled:n,children:mx(P)?e(Gs,{$truncateType:T,children:t}):e(Zs,{$truncateType:T,children:ee(J())})})})}),renderDropdown:()=>e(_x,{listboxId:U,listItems:j,selectedKeyPaths:L,selectableCategory:y,itemsLoadState:O,itemTruncationType:T,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,onSelectItem:G,onRetry:E,onSearch:k,variant:I,mode:g,width:B,matchElementWidth:!0}),onOpen:()=>{W(!0),te(!0),V(!0)},onClose:e=>{W(!1),te(!1),"click"!==e&&(V(!1),null==S||S())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),W(!1),te(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A,rootNode:z})};var dw=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var cw=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},uw=cw(),hw=af;var fw=tf;var pw=function(e,t){return function(r,n){if(null==r)return r;if(!fw(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&uw(e,t,hw)}));var gw=dw,mw=pw,bw=Mp,vw=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},yw=hr;var xw=ze((function(e,t,r){var n=yw(e)?gw:vw,o=arguments.length<3;return n(e,bw(t),r,o,mw)}));const ww=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],$w=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var Cw;!function(e){e.getCountries=()=>[].concat(...ww.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:$w("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return xw(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(Cw||(Cw={}));const Sw=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:p,onHideOptions:g,onShowOptions:m,placeholder:b,autoComplete:v,noBorder:y=!1}=t,x=Me(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(Cw.getCountries()),[$,C]=s(void 0),[S,k]=s(""),D=a(null),F=ar({ref:D,formatter:e=>Cw.formatNumber(e.replace(/[^0-9]/g,""),$)});h((()=>{const e=w.filter((e=>e.countryCode===kw(null==n?void 0:n.countryCode)))[0];C(e),k(Cw.formatNumber(null==n?void 0:n.number,e))}),[n]);const _=e=>{O(S,e),r&&E(S,e)},E=(e,t)=>{const n=Cw.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&Dw(t.countryCode)})},O=(e,t)=>{k(Cw.formatNumber(e,t)),C(t)};return e(Px,Object.assign({ref:D,value:S,onChange:()=>{const e=F();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,$),r&&E(t,$)},allowClear:o&&!!S,onClear:()=>{i?i():k("")},onBlur:l,error:d,placeholder:b,addon:c?{type:"label",attributes:{value:Dw(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:p,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Dw(e.countryCode)}),onSelectOption:_,onHideOptions:g,onShowOptions:m}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number",noBorder:y},x))},kw=e=>e?e.replace("+",""):"",Dw=e=>e?e.includes("+")?e:`+${e}`:"",Fw=D.div`
    display: flex;
    flex-direction: column;
`,_w=D.div`
    display: flex;
`,Ew=D.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${aa.sm} 0 0 ${aa.sm};
    box-shadow: inset 1px 0 0 ${ta.border},
        inset 0 1px 0 ${ta.border}, inset 0 -1px 0 ${ta.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${ta["border-focus"]},
            inset 0 2px 0 ${ta["border-focus"]},
            inset 0 -2px 0 ${ta["border-focus"]};
    }

    ${e=>e.$error?F`
                box-shadow: inset 1px 0 0 ${ta["border-error"]},
                    inset 0 1px 0 ${ta["border-error"]},
                    inset 0 -1px 0 ${ta["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${ta["border-error-focus"]},
                        inset 0 2px 0 ${ta["border-error-focus"]},
                        inset 0 -2px 0 ${ta["border-error-focus"]};
                }
            `:e.$disabled?F`
                box-shadow: inset 0 0 0 1px ${ta.border};
                border-radius: ${aa.sm};
                background: ${ta["bg-disabled"]};
                color: ${ta["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${ta.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&F`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${da.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?F`
                box-shadow: none;
                border-radius: ${aa.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${ta["border-focus"]};
                }
            `:void 0}
`,Ow=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${ia["spacing-12"]};
    color: ${ta["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,Tw=D(Ml.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${da.MaxWidth.sm} {
        width: fit-content;
    }
`,Iw=D(Px)`
    padding: 0 ${ia["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${ta["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
        `}
`,Mw=D(Sw)`
    padding: 0 ${ia["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${ta["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
            input {
                margin-left: ${ia["spacing-12"]};
            }
        `}
`,Aw=({id:r,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:h,fixedCountry:f,isLoading:p,isVerified:g,countdown:m,onSendOtp:b,onStateReset:v,sendOtpError:y})=>{const x=e=>{v(),"email"===s&&c&&c(e.target.value)},w=e=>{v(),"phone-number"===s&&h&&h(e)};return t(Fw,{id:r,"data-testid":n,children:[t(_w,{children:[t(Ew,{$isMaxWidth:"email"===s,$error:!!y,$disabled:o,$readonly:i,children:["email"===s?e(Iw,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}):e(Mw,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:w,noBorder:!0,fixedCountry:f,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}),g&&e(Ow,{"aria-label":"Verified",role:"img",children:e(ce,{})})]}),!o&&!i&&e(Tw,{id:r?`${r}-contact-button`:void 0,"data-testid":n?`${n}-contact-button`:void 0,onClick:b,disabled:m.isRunning||g,loading:p,children:g?"Verified":p?"":m.isRunning?"Sent OTP":"Send OTP"})]}),y&&e(Fs,{id:r?`${r}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:y})]})},Bw=D.div`
    display: flex;
    flex-direction: column;
    gap: ${ia["spacing-16"]};
`,zw=D.svg`
    .background-circle {
        fill: ${ta["bg-stronger"]};
    }

    .primary-path {
        fill: ${ta["icon-primary"]};
    }

    .validation-icon {
        fill: ${ta["bg-available"]};
    }

    .accent-light-3 {
        fill: ${ta["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${ta["icon-primary-subtlest"]};
    }
`,jw=({width:r=120,height:n=120,className:o})=>t(zw,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Lw=D.svg`
    .background-circle {
        fill: ${ta["bg-stronger"]};
    }

    .primary-path {
        fill: ${ta["icon-primary"]};
    }

    .validation-icon {
        fill: ${ta["bg-available"]};
    }

    .accent-light {
        fill: ${ta["bg-selected-stronger"]};
    }
`,Rw=({width:r=120,height:n=120,className:o})=>t(Lw,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Pw=D.div`
    display: flex;
    align-items: center;
    background-color: ${ta["bg-strong"]};
    padding: ${ia["spacing-16"]} ${ia["spacing-32"]};
    gap: ${ia["spacing-32"]};
    ${da.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${ia["spacing-16"]};
        padding: ${ia["spacing-16"]};
    }
`,Nw=D.div`
    display: flex;
    flex-direction: column;
    gap: ${ia["spacing-16"]};
`,Hw=D(Ea.BodyMD)`
    color: ${ta["text-subtlest"]};
`,Ww=D.div`
    display: flex;
    gap: ${ia["spacing-8"]};
    max-width: 472px;
`,Yw=D(Ml.Default)`
    flex-shrink: 0;
    width: 83px;
`,Vw=({id:r,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:h,verifyOtpError:f,otpPrefix:p,otpSeparator:g})=>{const m=T(),b=ur.useMediaQuery({maxWidth:la["sm-max"]({theme:m})})?64:120;return t(Pw,{id:r,"data-testid":n,role:"group","aria-labelledby":r?`${r}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?jw:Rw,{width:b,height:b})})})(),t(Nw,{children:[t("div",{children:[e(Ea.BodyMD,{weight:"semibold",id:r?`${r}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(Ea.BodyMD,{weight:"regular",id:r?`${r}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),t("div",{children:[t(Ww,{children:[e(Px,{id:r?`${r}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=p?p:""}${null!=g?g:""}`}},type:"number",error:!!f,"aria-label":"Enter OTP code","aria-invalid":!!f,"aria-required":!0}),e(Yw,{id:r?`${r}-verify-button`:void 0,"data-testid":n?`${n}-verify-button`:void 0,onClick:h,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),f&&e(Fs,{id:r?`${r}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:f})]}),u.isRunning&&t(Hw,{id:r?`${r}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},Uw=r=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:f,verifyOtpError:p,otpValue:g,onOtpChange:m,otpState:b,onOtpStateChange:v}=r,[y,x]=s(!1),[w,$]=s(!1),C=(({duration:e,onComplete:t})=>{const[r,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return h((()=>{o||n(e)}),[e,o]),{timeLeft:r,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const r=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-r);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==t||t())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const t=null!=e?e:r;return`${t} second${1===t?"":"s"}`}}})({duration:u});return t(Bw,{id:n,"data-testid":o,className:i,children:[e(Aw,Object.assign({},r,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:y,isVerified:"verified"===b,countdown:C,onSendOtp:()=>Ae(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),v("sent"),C.reset(),C.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===b&&v("default")},sendOtpError:f,fixedCountry:"phone-number"!==r.type||r.fixedCountry})),"sent"===b&&e(Vw,Object.assign({},r,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==g?void 0:g.value,otpPrefix:null==g?void 0:g.prefix,otpSeparator:null==g?void 0:g.separator,setOtpCode:m,isVerifyLoading:w,countdown:C,onVerifyOtp:()=>Ae(void 0,void 0,void 0,(function*(){if(c&&(null==g?void 0:g.value))try{$(!0),yield c(g.value),v("verified"),C.reset(),null==m||m("")}catch(e){}finally{$(!1)}})),verifyOtpError:p}))]})};var Kw=mr,qw=Lr,Zw=function(){return Kw.Date.now()},Gw=qp,Qw=Math.max,Xw=Math.min;var Jw=ze((function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function g(){var e=Zw();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Xw(r,i-(e-d)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Zw(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(g,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Gw(t)||0,qw(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Qw(Gw(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Zw())},b}));const e$=n=>{var{className:o,"data-testid":i,selectedOption:l,minimumCharacters:d=3,fetchOptions:c,placeholder:u="Enter here...",readOnly:f=!1,disabled:g=!1,error:m,valueExtractor:b,listExtractor:v,displayValueExtractor:y,onSelectOption:x,alignment:w,dropdownZIndex:$,dropdownRootNode:C,dropdownWidth:S,"aria-describedby":k}=n,D=Me(n,["className","data-testid","selectedOption","minimumCharacters","fetchOptions","placeholder","readOnly","disabled","error","valueExtractor","listExtractor","displayValueExtractor","onSelectOption","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-describedby"]);const F=e=>e?y?y(e):e.toString():"",[_,E]=s((()=>l?F(l):"")),[O,T]=s((()=>l?F(l):"")),[I,M]=s([]),[A,B]=s(!0),[z,j]=s(!1),[L,R]=s(!!l),[P,N]=s(l),[H,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>at.generate())),[K,q]=s(null),Z=`${U}-instruction`,G=a(null),Q=a(null),X=a(c),J=p((e=>Ae(void 0,void 0,void 0,(function*(){if(X.current){j(!1),B(!0);try{const t=yield X.current(e);T(e),M(null!=t?t:[]),B(!1)}catch(e){j(!0),B(!1)}}}))),[]),ee=p(Jw((e=>{J(e)}),500),[J]);h((()=>{X.current=c}),[c]),h((()=>{_&&_.length>=d?L?_!==O&&ee(_):(W(!0),ee(_)):ee.cancel(),""===_&&P&&(null==x||x(void 0,void 0),le(),N(void 0)),l&&_!==F(l)&&R(!1)}),[_,l]),h((()=>{E(l?F(l):""),T(l?F(l):""),N(l),M([]),R(!!l)}),[l]),h((()=>{var e;const t=de(),r=null!==(e=null==I?void 0:I.length)&&void 0!==e?e:0;"loading"===t&&_.length>=d?q("Loading suggested results"):"fail"!==t?!H||A||z||q(0===r?_?"No results found.":null:`${r} result${r>1?"s":""} found. Press down arrow to scroll through the list.`):q("Suggestions failed to load. Try again.")}),[I,_,z,A]),h((()=>()=>{ee.cancel()}),[ee]);const te=(e,t)=>{var r;null===(r=Q.current)||void 0===r||r.focus(),E(F(e)),T(e?F(e):""),R(!0),N(e),W(!1),null==x||x(e,t)},re=()=>{V(!0)},ne=e=>{H||!G.current||G.current.contains(e.relatedTarget)||(V(!1),ae())},oe=()=>{W(!1),V(!1)},ie=()=>{E(""),M([]),R(!1),W(!1),null==x||x(void 0,void 0)},ae=()=>{if(!L)if(P){const e=F(P);E(e),W(!1)}else ie()},se=e=>{E(e.target.value),R(!1)},le=e=>{T(e?F(e):""),R(!!e),M([]),B(!0)},de=()=>z?"fail":A?"loading":"success";return e(Hv,{children:e(tl,{enabled:!f&&!g,isOpen:H,renderElement:()=>t(Bd,{className:o,"data-testid":i,ref:G,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:g,$readOnly:f,$error:m,children:[t(nl,{id:Z,"aria-hidden":!0,children:["Type in ",d," or more characters for suggested results."]}),K&&e(nl,{"aria-live":"polite",children:K}),e(hu,Object.assign({role:"combobox",ref:Q,id:U,type:"text",value:_,onChange:se,placeholder:u,readOnly:f,disabled:g,allowClear:!0,onClear:ie,"aria-expanded":H,"aria-controls":U,"aria-autocomplete":"list","aria-haspopup":"listbox",onBlur:_.length<d?ae:void 0,styleType:"no-border","aria-describedby":il(k,Z)},D))]}),renderDropdown:()=>e(r,{children:e(hy,{listboxId:U,listItems:I,onSelectItem:te,onDismiss:oe,valueExtractor:b,listExtractor:v,itemsLoadState:de(),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line",disableItemFocus:!0,onRetry:()=>J(_),width:S,matchElementWidth:!0})}),onOpen:()=>{!L&&_.length>=d&&V(!0)},onClose:()=>{W(!1),V(!1),ae()},onDismiss:()=>{var e;W(!1),V(!1),ae(),null===(e=Q.current)||void 0===e||e.focus()},clickToToggle:!1,offset:8,alignment:w,fitAvailableHeight:!0,customZIndex:$,rootNode:C})})};var t$=b$(),r$=e=>f$(e,t$),n$=b$();r$.write=e=>f$(e,n$);var o$=b$();r$.onStart=e=>f$(e,o$);var i$=b$();r$.onFrame=e=>f$(e,i$);var a$=b$();r$.onFinish=e=>f$(e,a$);var s$=[];r$.setTimeout=(e,t)=>{const r=r$.now()+t,n=()=>{const e=s$.findIndex((e=>e.cancel==n));~e&&s$.splice(e,1),u$-=~e?1:0},o={time:r,handler:e,cancel:n};return s$.splice(l$(r),0,o),u$+=1,p$(),o};var l$=e=>~(~s$.findIndex((t=>t.time>e))||~s$.length);r$.cancel=e=>{o$.delete(e),i$.delete(e),a$.delete(e),t$.delete(e),n$.delete(e)},r$.sync=e=>{h$=!0,r$.batchedUpdates(e),h$=!1},r$.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,r$.onStart(r)}return n.handler=e,n.cancel=()=>{o$.delete(r),t=null},n};var d$="undefined"!=typeof window?window.requestAnimationFrame:()=>{};r$.use=e=>d$=e,r$.now="undefined"!=typeof performance?()=>performance.now():Date.now,r$.batchedUpdates=e=>e(),r$.catch=console.error,r$.frameLoop="always",r$.advance=()=>{"demand"!==r$.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):m$()};var c$=-1,u$=0,h$=!1;function f$(e,t){h$?(t.delete(e),e(0)):(t.add(e),p$())}function p$(){c$<0&&(c$=0,"demand"!==r$.frameLoop&&d$(g$))}function g$(){~c$&&(d$(g$),r$.batchedUpdates(m$))}function m$(){const e=c$;c$=r$.now();const t=l$(c$);t&&(v$(s$.splice(0,t),(e=>e.handler())),u$-=t),u$?(o$.flush(),t$.flush(e?Math.min(64,c$-e):16.667),i$.flush(),n$.flush(),a$.flush()):c$=-1}function b$(){let e=new Set,t=e;return{add(r){u$+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(u$-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,u$-=t.size,v$(t,(t=>t(r)&&e.add(t))),u$+=e.size,t=e)}}}function v$(e,t){e.forEach((e=>{try{t(e)}catch(e){r$.catch(e)}}))}var y$=Object.defineProperty,x$={};function w$(){}((e,t)=>{for(var r in t)y$(e,r,{get:t[r],enumerable:!0})})(x$,{assign:()=>B$,colors:()=>I$,createStringInterpolator:()=>_$,skipAnimation:()=>M$,to:()=>E$,willAdvance:()=>A$});var $$={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function C$(e,t){if($$.arr(e)){if(!$$.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var S$=(e,t)=>e.forEach(t);function k$(e,t,r){if($$.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var D$=e=>$$.und(e)?[]:$$.arr(e)?e:[e];function F$(e,t){if(e.size){const r=Array.from(e);e.clear(),S$(r,t)}}var _$,E$,O$=(e,...t)=>F$(e,(e=>e(...t))),T$=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),I$=null,M$=!1,A$=w$,B$=e=>{e.to&&(E$=e.to),e.now&&(r$.now=e.now),void 0!==e.colors&&(I$=e.colors),null!=e.skipAnimation&&(M$=e.skipAnimation),e.createStringInterpolator&&(_$=e.createStringInterpolator),e.requestAnimationFrame&&r$.use(e.requestAnimationFrame),e.batchedUpdates&&(r$.batchedUpdates=e.batchedUpdates),e.willAdvance&&(A$=e.willAdvance),e.frameLoop&&(r$.frameLoop=e.frameLoop)},z$=new Set,j$=[],L$=[],R$=0,P$={get idle(){return!z$.size&&!j$.length},start(e){R$>e.priority?(z$.add(e),r$.onStart(N$)):(H$(e),r$(Y$))},advance:Y$,sort(e){if(R$)r$.onFrame((()=>P$.sort(e)));else{const t=j$.indexOf(e);~t&&(j$.splice(t,1),W$(e))}},clear(){j$=[],z$.clear()}};function N$(){z$.forEach(H$),z$.clear(),r$(Y$)}function H$(e){j$.includes(e)||W$(e)}function W$(e){j$.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(j$,(t=>t.priority>e.priority)),0,e)}function Y$(e){const t=L$;for(let r=0;r<j$.length;r++){const n=j$[r];R$=n.priority,n.idle||(A$(n),n.advance(e),n.idle||t.push(n))}return R$=0,(L$=j$).length=0,(j$=t).length>0}var V$="[-+]?\\d*\\.?\\d+",U$=V$+"%";function K$(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var q$=new RegExp("rgb"+K$(V$,V$,V$)),Z$=new RegExp("rgba"+K$(V$,V$,V$,V$)),G$=new RegExp("hsl"+K$(V$,U$,U$)),Q$=new RegExp("hsla"+K$(V$,U$,U$,V$)),X$=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,J$=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,eC=/^#([0-9a-fA-F]{6})$/,tC=/^#([0-9a-fA-F]{8})$/;function rC(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function nC(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=rC(o,n,e+1/3),a=rC(o,n,e),s=rC(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function oC(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function iC(e){return(parseFloat(e)%360+360)%360/360}function aC(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function sC(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function lC(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=eC.exec(e))?parseInt(t[1]+"ff",16)>>>0:I$&&void 0!==I$[e]?I$[e]:(t=q$.exec(e))?(oC(t[1])<<24|oC(t[2])<<16|oC(t[3])<<8|255)>>>0:(t=Z$.exec(e))?(oC(t[1])<<24|oC(t[2])<<16|oC(t[3])<<8|aC(t[4]))>>>0:(t=X$.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=tC.exec(e))?parseInt(t[1],16)>>>0:(t=J$.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=G$.exec(e))?(255|nC(iC(t[1]),sC(t[2]),sC(t[3])))>>>0:(t=Q$.exec(e))?(nC(iC(t[1]),sC(t[2]),sC(t[3]))|aC(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var dC=(e,t,r)=>{if($$.fun(e))return e;if($$.arr(e))return dC({range:e,output:t,extrapolate:r});if($$.str(e.output[0]))return _$(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let d=l?l(e):e;if(d<t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var cC=1.70158,uC=1.525*cC,hC=cC+1,fC=2*Math.PI/3,pC=2*Math.PI/4.5,gC=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},mC={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>hC*e*e*e-cC*e*e,easeOutBack:e=>1+hC*Math.pow(e-1,3)+cC*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-uC)/2:(Math.pow(2*e-2,2)*((uC+1)*(2*e-2)+uC)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*fC),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*fC)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*pC)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*pC)/2+1,easeInBounce:e=>1-gC(1-e),easeOutBounce:gC,easeInOutBounce:e=>e<.5?(1-gC(1-2*e))/2:(1+gC(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},bC=Symbol.for("FluidValue.get"),vC=Symbol.for("FluidValue.observers"),yC=e=>Boolean(e&&e[bC]),xC=e=>e&&e[bC]?e[bC]():e,wC=e=>e[vC]||null;function $C(e,t){const r=e[vC];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var CC=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");SC(this,e)}},SC=(e,t)=>_C(e,bC,t);function kC(e,t){if(e[bC]){let r=e[vC];r||_C(e,vC,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function DC(e,t){const r=e[vC];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[vC]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var FC,_C=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),EC=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,OC=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,TC=new RegExp(`(${EC.source})(%|[a-z]+)`,"i"),IC=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,MC=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,AC=e=>{const[t,r]=BC(e);if(!t||T$())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&MC.test(r)?AC(r):r||e},BC=e=>{const t=MC.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},zC=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,jC=e=>{FC||(FC=I$?new RegExp(`(${Object.keys(I$).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>xC(e).replace(MC,AC).replace(OC,lC).replace(FC,lC))),r=t.map((e=>e.match(EC).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>dC({...e,output:t})));return e=>{const r=!TC.test(t[0])&&t.find((e=>TC.test(e)))?.replace(EC,"");let n=0;return t[0].replace(EC,(()=>`${o[n++](e)}${r||""}`)).replace(IC,zC)}},LC="react-spring: ",RC=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${LC}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},PC=RC(console.warn);var NC=RC(console.warn);function HC(e){return $$.str(e)&&("#"==e[0]||/\d/.test(e)||!T$()&&MC.test(e)||e in(I$||{}))}var WC=T$()?h:f;function YC(){const e=s()[1],t=(()=>{const e=a(!1);return WC((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var VC=e=>h(e,UC),UC=[];function KC(e){const t=a(void 0);return h((()=>{t.current=e})),t.current}var qC=Symbol.for("Animated:node"),ZC=e=>e&&e[qC],GC=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,qC,t),QC=e=>e&&e[qC]&&e[qC].getPayload(),XC=class{constructor(){GC(this,this)}getPayload(){return this.payload||[]}},JC=class e extends XC{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,$$.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return $$.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,$$.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},eS=class e extends JC{constructor(e){super(0),this._string=null,this._toString=dC({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if($$.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=dC({output:[this.getValue(),e]})),this._value=0,super.reset()}},tS={dependencies:null},rS=class extends XC{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return k$(this.source,((r,n)=>{var o;(o=r)&&o[qC]===o?t[n]=r.getValue(e):yC(r)?t[n]=xC(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&S$(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return k$(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){tS.dependencies&&yC(e)&&tS.dependencies.add(e);const t=QC(e);t&&S$(t,(e=>this.add(e)))}},nS=class e extends rS{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(oS)),!0)}};function oS(e){return(HC(e)?eS:JC).create(e)}function iS(e){const t=ZC(e);return t?t.constructor:$$.arr(e)?nS:HC(e)?eS:JC}var aS=(e,t)=>{const r=!$$.fun(e)||e.prototype&&e.prototype.isReactComponent;return S(((o,i)=>{const s=a(null),l=r&&p((e=>{s.current=function(e,t){e&&($$.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,c]=function(e,t){const r=new Set;tS.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new rS(e),tS.dependencies=null,[e,r]}(o,t),u=YC(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&u()},g=new sS(f,c),m=a(void 0);WC((()=>(m.current=g,S$(c,(e=>kC(e,g))),()=>{m.current&&(S$(m.current.deps,(e=>DC(e,m.current))),r$.cancel(m.current.update))}))),h(f,[]),VC((()=>()=>{const e=m.current;S$(e.deps,(t=>DC(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,{...b,ref:l})}))},sS=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&r$.write(this.update)}};var lS=Symbol.for("AnimatedComponent"),dS=e=>$$.str(e)?e:e&&$$.str(e.displayName)?e.displayName:$$.fun(e)&&e.name||null;function cS(e,...t){return $$.fun(e)?e(...t):e}var uS=(e,t)=>!0===e||!!(t&&e&&($$.fun(e)?e(t):D$(e).includes(t))),hS=(e,t)=>$$.obj(e)?t&&e[t]:e,fS=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,pS=e=>e,gS=(e,t=pS)=>{let r=mS;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);$$.und(r)||(n[o]=r)}return n},mS=["config","onProps","onStart","onChange","onPause","onResume","onRest"],bS={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function vS(e){const t=function(e){const t={};let r=0;if(k$(e,((e,n)=>{bS[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return k$(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function yS(e){return e=xC(e),$$.arr(e)?e.map(yS):HC(e)?x$.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function xS(e){return $$.fun(e)||$$.arr(e)&&$$.obj(e[0])}var wS={tension:170,friction:26,mass:1,damping:1,easing:mC.linear,clamp:!1},$S=class{constructor(){this.velocity=0,Object.assign(this,wS)}};function CS(e,t){if($$.und(t.decay)){const r=!$$.und(t.tension)||!$$.und(t.friction);!r&&$$.und(t.frequency)&&$$.und(t.damping)&&$$.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var SS=[],kS=class{constructor(){this.changed=!1,this.values=SS,this.toValues=null,this.fromValues=SS,this.config=new $S,this.immediate=!1}};function DS(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,d,c=uS(r.cancel??n?.cancel,t);if(c)f();else{$$.und(r.pause)||(o.paused=uS(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||uS(e,t)),l=cS(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-r$.now()}function h(){l>0&&!x$.skipAnimation?(o.delayed=!0,d=r$.setTimeout(f,l),o.pauseQueue.add(u),o.timeouts.add(d)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var FS=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?OS(e.get()):t.every((e=>e.noop))?_S(e.get()):ES(e.get(),t.every((e=>e.finished))),_S=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ES=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),OS=e=>({value:e,cancelled:!0,finished:!1});function TS(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=gS(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),f=e=>{const t=o<=(r.cancelId||0)&&OS(n)||o!==r.asyncId&&ES(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new MS,a=new AS;return(async()=>{if(x$.skipAnimation)throw IS(r),a.result=ES(n,!1),u(a),a;f(i);const s=$$.obj(e)?{...e}:{...t,to:e};s.parentId=o,k$(d,((e,t)=>{$$.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(x$.skipAnimation)return IS(r),ES(n,!1);try{let t;t=$$.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=ES(n.get(),!0,!1)}catch(e){if(e instanceof MS)g=e.result;else{if(!(e instanceof AS))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return $$.fun(a)&&r$.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function IS(e,t){F$(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var MS=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},AS=class extends Error{constructor(){super("SkipAnimationSignal")}},BS=e=>e instanceof jS,zS=1,jS=class extends CC{constructor(){super(...arguments),this.id=zS++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ZC(this);return e&&e.getValue()}to(...e){return x$.to(this,e)}interpolate(...e){return PC(`${LC}The "interpolate" function is deprecated in v9 (use "to" instead)`),x$.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){$C(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||P$.sort(this),$C(this,{type:"priority",parent:this,priority:e})}},LS=Symbol.for("SpringPhase"),RS=e=>(1&e[LS])>0,PS=e=>(2&e[LS])>0,NS=e=>(4&e[LS])>0,HS=(e,t)=>t?e[LS]|=3:e[LS]&=-3,WS=(e,t)=>t?e[LS]|=4:e[LS]&=-5,YS=class extends jS{constructor(e,t){if(super(),this.animation=new kS,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!$$.und(e)||!$$.und(t)){const r=$$.obj(e)?{...e}:{...t,from:e};$$.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(PS(this)||this._state.asyncTo)||NS(this)}get goal(){return xC(this.animation.to)}get velocity(){const e=ZC(this);return e instanceof JC?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return RS(this)}get isAnimating(){return PS(this)}get isPaused(){return NS(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=QC(n.to);!a&&yC(n.to)&&(o=D$(xC(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==eS?1:a?a[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=$$.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if($$.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!$$.und(n),f=r==d?s.v0>0:r<d;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(c=Math.abs(d-u)<=h,!c));++e){l&&(g=u==d||u>d==f,g&&(a=-a*n,u=d));a+=(1e-6*-i.tension*(u-d)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(d-r),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=ZC(this),l=s.getValue();if(t){const e=xC(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return r$.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(PS(this)){const{to:e,config:t}=this.animation;r$.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return $$.und(e)?(r=this.queue||[],this.queue=[]):r=[$$.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>FS(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),IS(this._state,e&&this._lastCallId),r$.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=$$.obj(r)?r[t]:r,(null==r||xS(r))&&(r=void 0),n=$$.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return RS(this)||(e.reverse&&([r,n]=[n,r]),n=xC(n),$$.und(n)?ZC(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,gS(e,((e,t)=>/^on/.test(t)?hS(e,r):e))),QS(this,e,"onProps"),XS(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return DS(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{NS(this)||(WS(this,!0),O$(i.pauseQueue),XS(this,"onPause",ES(this,VS(this,this.animation.to)),this))},resume:()=>{NS(this)&&(WS(this,!1),PS(this)&&this._resume(),O$(i.resumeQueue),XS(this,"onResume",ES(this,VS(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=US(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(OS(this));const n=!$$.und(e.to),o=!$$.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(OS(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!o||n||t.default&&!$$.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!C$(u,d);h&&(s.from=u),u=xC(u);const f=!C$(c,l);f&&this._focus(c);const p=xS(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(CS(r={...r},t),t={...r,...t}),CS(e,t),Object.assign(e,t);for(const t in wS)null==e[t]&&(e[t]=wS[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;$$.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,cS(t.config,i),t.config!==a.config?cS(a.config,i):void 0);let v=ZC(this);if(!v||$$.und(c))return r(ES(this,!0));const y=$$.und(t.reset)?o&&!t.default:!$$.und(u)&&uS(t.reset,i),x=y?u:this.get(),w=yS(c),$=$$.num(w)||$$.arr(w)||HC(w),C=!p&&(!$||uS(a.immediate||t.immediate,i));if(f){const e=iS(c);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=yC(c),D=!1;if(!k){const e=y||!RS(this)&&h;(f||e)&&(D=C$(yS(x),w),k=!D),(C$(s.immediate,C)||C)&&C$(g.decay,m)&&C$(g.velocity,b)||(k=!0)}if(D&&PS(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||yC(l))&&(s.values=v.getPayload(),s.toValues=yC(c)?null:S==eS?[1]:D$(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;S$(GS,(e=>QS(this,t,e)));const n=ES(this,VS(this,l));O$(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&r$.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?cS(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(TS(t.to,t,this._state,this)):k?this._start():PS(this)&&!f?this._pendingCalls.add(r):r(_S(x))}_focus(e){const t=this.animation;e!==t.to&&(wC(this)&&this._detach(),t.to=e,wC(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;yC(t)&&(kC(t,this),BS(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;yC(e)&&DC(e,this)}_set(e,t=!0){const r=xC(e);if(!$$.und(r)){const e=ZC(this);if(!e||!C$(r,e.getValue())){const n=iS(r);e&&e.constructor==n?e.setValue(r):GC(this,n.create(r)),e&&r$.batchedUpdates((()=>{this._onChange(r,t)}))}}return ZC(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,XS(this,"onStart",ES(this,VS(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),cS(this.animation.onChange,e,this)),cS(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ZC(this).reset(xC(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),PS(this)||(HS(this,!0),NS(this)||this._resume())}_resume(){x$.skipAnimation?this.finish():P$.start(this)}_stop(e,t){if(PS(this)){HS(this,!1);const r=this.animation;S$(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),$C(this,{type:"idle",parent:this});const n=t?OS(this.get()):ES(this.get(),VS(this,e??r.to));O$(this._pendingCalls,n),r.changed&&(r.changed=!1,XS(this,"onRest",n,this))}}};function VS(e,t){const r=yS(t);return C$(yS(e.get()),r)}function US(e,t=e.loop,r=e.to){const n=cS(t);if(n){const o=!0!==n&&vS(n),i=(o||e).reverse,a=!o||o.reset;return KS({...e,loop:t,default:!1,pause:void 0,to:!i||xS(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function KS(e){const{to:t,from:r}=e=vS(e),n=new Set;return $$.obj(t)&&ZS(t,n),$$.obj(r)&&ZS(r,n),e.keys=n.size?Array.from(n):null,e}function qS(e){const t=KS(e);return $$.und(t.default)&&(t.default=gS(t)),t}function ZS(e,t){k$(e,((e,r)=>null!=e&&t.add(r)))}var GS=["onStart","onRest","onChange","onPause","onResume"];function QS(e,t,r){e.animation[r]=t[r]!==fS(t,r)?hS(t[r],e.key):void 0}function XS(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var JS=["onStart","onChange","onRest"],ek=1,tk=class{constructor(e,t){this.id=ek++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];$$.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(KS(e)),this}start(e){let{queue:t}=this;return e?t=D$(e).map(KS):this.queue=[],this._flush?this._flush(this,t):(lk(this,t),rk(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;S$(D$(t),(t=>r[t].stop(!!e)))}else IS(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if($$.und(e))this.start({pause:!0});else{const t=this.springs;S$(D$(e),(e=>t[e].pause()))}return this}resume(e){if($$.und(e))this.start({pause:!1});else{const t=this.springs;S$(D$(e),(e=>t[e].resume()))}return this}each(e){k$(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,F$(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&F$(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,F$(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}r$.onFrame(this._onFrame)}};function rk(e,t){return Promise.all(t.map((t=>nk(e,t)))).then((t=>FS(e,t)))}async function nk(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,d=$$.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=$$.arr(o)||$$.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):S$(JS,(r=>{const n=t[r];if($$.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,O$(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===fS(t,"cancel");(c||f&&u.asyncId)&&h.push(DS(++e._lastAsyncId,{props:t,state:u,actions:{pause:w$,resume:w$,start(t,r){f?(IS(u,e._lastAsyncId),r(OS(e))):(t.onRest=s,r(TS(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=FS(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=US(t,a,o);if(r)return lk(e,[r]),nk(e,r,!0)}return l&&r$.batchedUpdates((()=>l(p,e,e.item))),p}function ok(e,t){const r={...e.springs};return t&&S$(D$(t),(e=>{$$.und(e.keys)&&(e=KS(e)),$$.obj(e.to)||(e={...e,to:void 0}),sk(r,e,(e=>ak(e)))})),ik(e,r),r}function ik(e,t){k$(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,kC(t,e))}))}function ak(e,t){const r=new YS;return r.key=e,t&&kC(r,t),r}function sk(e,t,r){t.keys&&S$(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function lk(e,t){S$(t,(t=>{sk(e.springs,t,(t=>ak(t,e)))}))}var dk=n.createContext({pause:!1,immediate:!1}),ck=()=>{const e=[],t=function(t){NC(`${LC}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return S$(e,((e,o)=>{if($$.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return S$(e,(e=>e.pause(...arguments))),this},t.resume=function(){return S$(e,(e=>e.resume(...arguments))),this},t.set=function(t){S$(e,((e,r)=>{const n=$$.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return S$(e,((e,n)=>{if($$.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return S$(e,(e=>e.stop(...arguments))),this},t.update=function(t){return S$(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return $$.fun(e)?e(r,t):e};return t._getProps=r,t};function uk(e,t){const r=$$.fun(e),[[n],o]=function(e,t,r){const n=$$.fun(t)&&t;n&&!r&&(r=[]);const o=v((()=>n||3==arguments.length?ck():void 0),[]),i=a(0),s=YC(),l=v((()=>({ctrls:[],queue:[],flush(e,t){const r=ok(e,t),n=i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?rk(e,t):new Promise((n=>{ik(e,r),l.queue.push((()=>{n(rk(e,t))})),s()}))}})),[]),d=a([...l.ctrls]),c=a([]),u=KC(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new tk(null,l.flush)),r=n?n(o,e):t[o];r&&(c.current[o]=qS(r))}}v((()=>{S$(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),v((()=>{h(0,Math.min(u,e))}),r);const f=d.current.map(((e,t)=>ok(e,c.current[t]))),p=m(dk),g=KC(p),b=p!==g&&function(e){for(const t in e)return!0;return!1}(p);WC((()=>{i.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],S$(e,(e=>e()))),S$(d.current,((e,t)=>{o?.add(e),b&&e.start({default:p});const r=c.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),VC((()=>()=>{S$(l.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var hk=class extends jS{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=dC(...t);const r=this._get(),n=iS(r);GC(this,n.create(r))}advance(e){const t=this._get();C$(t,this.get())||(ZC(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&pk(this._active)&&gk(this)}_get(){const e=$$.arr(this.source)?this.source.map(xC):D$(xC(this.source));return this.calc(...e)}_start(){this.idle&&!pk(this._active)&&(this.idle=!1,S$(QC(this),(e=>{e.done=!1})),x$.skipAnimation?(r$.batchedUpdates((()=>this.advance())),gk(this)):P$.start(this))}_attach(){let e=1;S$(D$(this.source),(t=>{yC(t)&&kC(t,this),BS(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){S$(D$(this.source),(e=>{yC(e)&&DC(e,this)})),this._active.clear(),gk(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=D$(this.source).reduce(((e,t)=>Math.max(e,(BS(t)?t.priority:0)+1)),0))}};function fk(e){return!1!==e.idle}function pk(e){return!e.size||Array.from(e).every(fk)}function gk(e){e.idle||(e.idle=!0,S$(QC(e),(e=>{e.done=!0})),$C(e,{type:"idle",parent:e}))}x$.assign({createStringInterpolator:jC,to:(e,t)=>new hk(e,t)});var mk=/^--/;function bk(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||mk.test(e)||yk.hasOwnProperty(e)&&yk[e]?(""+t).trim():t+"px"}var vk={};var yk={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xk=["Webkit","Ms","Moz","O"];yk=Object.keys(yk).reduce(((e,t)=>(xk.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),yk);var wk=/^(matrix|translate|scale|rotate|skew)/,$k=/^(translate)/,Ck=/^(rotate|skew)/,Sk=(e,t)=>$$.num(e)&&0!==e?e+t:e,kk=(e,t)=>$$.arr(e)?e.every((e=>kk(e,t))):$$.num(e)?e===t:parseFloat(e)===t,Dk=class extends rS{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Sk(e,"px"))).join(",")})`,kk(e,0)]))),k$(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(wk.test(t)){if(delete n[t],$$.und(e))return;const r=$k.test(t)?"px":Ck.test(t)?"deg":"";o.push(D$(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Sk(o,r)})`,kk(o,0)]:e=>[`${t}(${e.map((e=>Sk(e,r))).join(",")})`,kk(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Fk(o,i)),super(n)}},Fk=class extends CC{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return S$(this.inputs,((r,n)=>{const o=xC(r[0]),[i,a]=this.transforms[n]($$.arr(o)?o:r.map(xC));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&S$(this.inputs,(e=>S$(e,(e=>yC(e)&&kC(e,this)))))}observerRemoved(e){0==e&&S$(this.inputs,(e=>S$(e,(e=>yC(e)&&DC(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),$C(this,e)}};x$.assign({batchedUpdates:re,createStringInterpolator:jC,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var _k=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new rS(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=dS(e)||"Anonymous";return(e=$$.str(e)?i[e]||(i[e]=aS(e,o)):e[lS]||(e[lS]=aS(e,o))).displayName=`Animated(${t})`,e};return k$(e,((t,r)=>{$$.arr(e)&&(r=dS(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...d}=t,c=Object.values(d),u=Object.keys(d).map((t=>r||e.hasAttribute(t)?t:vk[t]||(vk[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=bk(t,o[t]);mk.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Dk(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ek=_k.animated;const Ok=O`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Tk=F`
    animation: ${na["duration-150"]} ${na["ease-default"]} ${Ok};
    width: 100%;
    height: 100%;
    transition: color ${na["duration-150"]} ${na["ease-default"]};
`,Ik=D(ue)`
    ${Tk}
    color: ${ta["icon-primary-subtlest"]};
`,Mk=D(he)`
    ${Tk}
    color: ${ta["icon-disabled-subtle"]};
`,Ak=D(fe)`
    ${Tk}
    color: ${e=>e.$disabled?ta["icon-disabled-subtle"](e):ta["icon-selected"](e)};
`,Bk=D(pe)`
    ${Tk}
    color: ${e=>e.$disabled?ta["icon-disabled-subtle"](e):ta["icon-selected"](e)};
`,zk=D.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>F`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${ta["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,jk=D.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Ik},
        &:hover
        + ${Ak},
        &:hover
        + ${Bk} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&ta["icon-hover"](e)};
        }
    }
`,Lk=Ek(D.div`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`),Rk=D.ul`
    border-bottom-left-radius: ${aa.sm};
    border-bottom-right-radius: ${aa.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.$width||"100%"};
    overflow-y: auto;
    padding: ${ia["spacing-8"]};
    list-style-type: none;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ta["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${aa.full};
        background-clip: padding-box;
    }

    ${da.MaxWidth.sm} {
        max-height: 15rem;
    }
`,Pk=D.li`
    &:hover,
    &:focus,
    &:active {
        background: ${ta["bg-hover"]};
    }
    ${e=>{if(e.$checked)return F`
                background: ${ta["bg-selected"]};
                &:hover,
                &:focus,
                &:active {
                    background: ${ta["bg-selected-hover"]};
                }
            `}}
`,Nk=D.button`
    display: flex;
    ${e=>e.$multiSelect?F`
                padding: ${ia["spacing-8"]} ${ia["spacing-16"]};
            `:F`
                padding: 15px ${ia["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${ia["spacing-8"]};
    border: none;
    border-radius: ${aa.none};
    background: transparent;
    width: 100%;
    cursor: pointer;

    &:hover,
    &:visited,
    &:focus,
    &:active {
        outline-color: ${ta["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,Hk=F`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Wk=D.div`
    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}
    color: ${ta.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hk}
`,Yk=D.div`
    color: ${ta["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hk}

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${ra["body-md-semibold"]}
                `:F`
                    ${ra["body-baseline-regular"]}
                `}
`,Vk=D.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${Wk} {
                        display: inline;
                    }

                    ${Yk} {
                        display: inline;
                        margin-left: ${ia["spacing-8"]};
                    }
                `}}}
`,Uk=D.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Kk=D.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,qk=D((r=>{var{className:n,checked:o,disabled:i,indeterminate:s,displaySize:l="default",id:d}=r,c=Me(r,["className","checked","disabled","indeterminate","displaySize","id"]);const u=a(null);h((()=>{u.current&&(u.current.indeterminate=null!=s&&s)}),[s]);return t(zk,{className:n,"data-testid":"checkbox",$displaySize:l,children:[e(jk,Object.assign({id:d,"data-testid":"checkbox-input",type:"checkbox",checked:o,ref:u,tabIndex:i?-1:0,disabled:i,"aria-checked":s?"mixed":o},c)),s?e(Bk,{$disabled:i,"data-testid":"indeterminate","aria-hidden":!0}):o?e(Ak,{$disabled:i,"data-testid":"checkmark","aria-hidden":!0}):i?e(Mk,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(Ik,{$disabled:i,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${ia["spacing-16"]};
`,Zk=D.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${ia["spacing-16"]} 0 ${ia["spacing-8"]} 0;
`,Gk=D.button`
    ${e=>"small"===e.$variant?ra["body-md-semibold"]:ra["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${ta["text-primary"]};
`,Qk=D.div`
    width: 100%;
    display: flex;
    padding: 15px ${ia["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}
`,Xk=D(ne)`
    height: 1em;
    width: 1em;
    margin-right: ${ia["spacing-4"]};
    color: ${ta["icon-error"]};
`,Jk=D(hl)`
    margin-right: ${ia["spacing-4"]};
    color: ${ta.icon};
`,eD=e=>"small"===e?1:1.375,tD=e=>F`
        height: ${eD(e)}rem;
        width: ${eD(e)}rem;
    `,rD=D.li`
    background: ${ta["bg-strong"]};
    display: flex;
    border-radius: ${aa.sm};
    align-items: center;
`,nD=D(zd)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${ia["spacing-8"]} 0 0;
    width: 100%;
`,oD=D(we)`
    ${e=>tD(e.$variant)}
    margin: 0 ${ia["spacing-8"]};
    color: ${ta.icon};
`,iD=D(Ia)`
    ${e=>tD(e.$variant)}
    padding: 0;
    margin: 0 ${ia["spacing-8"]};
    color: ${ta.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return F`
                svg {
                    ${tD(e.$variant)}
                }
            `}}
`,aD=S(((r,n)=>{const{onClear:o}=r,i=Me(r,["onClear"]);return t(rD,{children:[e(oD,{$variant:r.variant}),e(nD,Object.assign({ref:n,$variant:r.variant},i)),i.value&&e(iD,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:e(ge,{})})]},"search")})),sD=n=>{var{listItems:o,listExtractor:i,valueExtractor:l,onSelectItem:d,listStyleWidth:c,visible:u,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:D="inline",renderListItem:F,onBlur:_,hideNoResultsDisplay:E,renderCustomCallToAction:O,variant:T="default"}=n,I=Me(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=s(0),[B,z]=s(""),[j,L]=s(null!=o?o:[]),[R,P]=s(0),N=uk({height:R}),H=a(null),W=a(null),Y=a([]),V=a(null),U=a(null),K=a(M),q=a(j),Z=e=>{K.current=e,A(e)},G=e=>{q.current=e,L(e)};h((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),h((()=>{ee(B)}),[B]),h((()=>{if(z(""),u){if(setTimeout((()=>{P(te())})),v)return;V&&V.current?(V.current.focus(),Z(-1)):Y.current[M]&&Y.current[M].focus()}else P(0)}),[u]),h((()=>{if(u){const e=te();P(e)}}),[j,C]),h((()=>{G(null!=o?o:[]),z(""),Z(0)}),[o]);const Q=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return st.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!og(x,(t=>ag(t,e))),ee=e=>{if(""===e)G(null!=o?o:[]);else if(m){const t=m(e);G(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Q(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),Z(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),Z(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),d&&d(t,(e=>l?l(e):e)(t))},oe=e=>{const t=e.target.value;z(t),g&&g()},ie=()=>{var e;z(""),null===(e=V.current)||void 0===e||e.focus(),g&&g()},ae=()=>{$&&$()},se=()=>{_&&_()},le=n=>t(r,{children:[e(Uk,{$maxLines:k,"aria-hidden":!0,children:n}),e(Kk,{$maxLines:k,"aria-hidden":!0,children:n})]}),de=r=>{const{title:n,secondaryLabel:o}=Q(r),i=X(n),a=o&&X(o);return t(Vk,{$labelDisplayType:i||a?"next-line":D,children:[e(Wk,{$truncateType:S,$maxLines:k,$variant:T,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&e(Yk,{$truncateType:S,$maxLines:k,$labelDisplayType:D,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},ce=()=>{if(!$||"success"===C)return j.map(((r,n)=>e(Pk,{$checked:J(r)&&!y,children:t(Nk,{$hasNextLineLabel:"next-line"===D&&j.length>0&&i&&"string"!=typeof i(j[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,$multiSelect:y,onBlur:se,$variant:T,children:[y&&e(qk,{checked:J(r),displaySize:"small"}),F?F(r,{selected:J(r)}):de(r)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(x&&y&&j.length>0&&!B&&"success"===C)return e(Zk,{children:e(Gk,{onClick:w,type:"button",$variant:T,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!E&&(B||!f)&&0===j.length&&"success"===C)return t(Qk,{"data-testid":"list-no-results",$variant:T,children:[e(Xk,{"data-testid":"no-result-icon",$variant:T}),"No results found."]},"noResults")},fe=()=>{if($&&"loading"===C)return t(Qk,{"data-testid":"list-loading",$variant:T,children:[e(Jk,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(Qk,{"data-testid":"list-fail",$variant:T,children:[e(Xk,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",e(Gk,{onClick:ae,type:"button",$variant:T,children:"Try again."})]},"noResults")};return e(r,{children:t(Lk,{style:N,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(u)return t(Rk,Object.assign({ref:W,"data-testid":"dropdown-list",$width:c,role:"list"},I,{children:[(f||m)&&"success"===C?e(aD,{ref:V,onChange:oe,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ie,variant:T}):null,ue(),he(),fe(),pe(),ce()]}))})(),(()=>{if(u&&O)return e("div",{ref:U,"data-testid":"custom-cta",children:O(b,j)})})()]})})},lD=D.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,dD=D(lu)`
    position: absolute;
    right: 0;
    padding-left: ${ia["spacing-8"]};
    margin-right: 0;
`,cD=D(Ys)`
    // space for clear icon
    padding-right: calc(1.25rem + ${ia["spacing-16"]});
`,uD=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:l,className:d,readOnly:c,error:u,"data-testid":f,id:p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:F={from:"success",to:"success"},optionTruncationType:_="middle",renderCustomSelectedOption:E,renderListItem:O,renderCustomCallToAction:T}=r,I=Me(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=s(),[B,z]=s(),j=a(null),L={from:a(null),to:a(null)},[R,P]=s("none");h((()=>{A(null==n?void 0:n.from),z(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||c||P("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const r="from"===e?M:B;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===_){let r=0;return L[e]&&L[e].current&&(r=L[e].current.getBoundingClientRect().width),st.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&k&&k(),e&&S&&S()},V=t=>{const r="from"===t?M:B;return r?E?E(r):e(Zs,{$truncateType:_,children:W(t,H(t))}):e(Gs,{$truncateType:_,children:W(t,o[t]||"")})},U=t=>e(qs,{onClick:N(t),ref:L[t],$disabled:l,children:V(t)});return t(Qs,{show:"none"!==R,error:u&&!("none"!==R),disabled:l,readOnly:c,testId:f,onBlur:()=>{Y(!1),P("none"),M&&B||(z(void 0),A(void 0))},className:d,children:[t(lD,{children:[e(cD,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:j,onClick:N()},I,{children:t(ec,{currentActive:(()=>{switch(R){case"from":return"start";case"to":return"end";case"none":return R}})(),children:[U("from"),U("to")]})})),"none"===R&&M&&B&&!c&&!l&&e(dD,{onClick:e=>{e.stopPropagation(),A(void 0),z(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(du,{"aria-hidden":!0})})]}),"none"!==R&&e(Ks,{}),(()=>{if("none"===R)return null;const t=i[R];if(t&&t.length>0){const r="from"===R?M:B;return e(sD,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):z(e),Y(!1),j&&(null===(n=j.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(z(void 0),P("to"),Y(!0)):P("none")})(e,t,R),onDismiss:()=>(()=>{var e;P("none"),Y(!1),j&&(null===(e=j.current)||void 0===e||e.focus()),M&&B||(z(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:g,searchPlaceholder:b,searchFunction:m,"data-testid":`${R}-dropdown-list`,selectedItems:r?[r]:[],onRetry:D,itemsLoadState:F[R],itemTruncationType:_,renderListItem:O,renderCustomCallToAction:T})}return null})()]})},hD=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:D="success",optionTruncationType:F="end",renderCustomSelectedOption:_,renderListItem:E,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,onBlur:A,variant:B="default",readOnly:z,alignment:j,dropdownZIndex:L,dropdownRootNode:R,dropdownWidth:P})=>{const[N,H]=s(t),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>at.generate())),q=a(null),Z=a(null),G=a(null);h((()=>{H(t)}),[t]);const Q=(e,t)=>{var r;null===(r=Z.current)||void 0===r||r.focus(),H(e),Y(!1),ne(!1),null==$||$(e,t)},X=()=>{W&&(Y(!1),ne(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==A||A())},te=()=>{var e;if(!N)return"";if(w)return w(N);if(v){const t=v(N);return y?y(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return N.toString()},re=e=>{if("middle"===F){let t=0;return G&&G.current&&(t=G.current.getBoundingClientRect().width),st.truncateOneLine(e,t,120,8)}return e},ne=e=>{e?null==C||C():null==S||S()};return e(Hv,{children:e(tl,{enabled:!z&&!o,isOpen:W,renderElement:()=>e(Ad,{className:l,"data-testid":d,id:c,ref:q,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:z,$error:i,children:e(gy,{ref:Z,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:z,variant:B,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,children:e(qs,{ref:G,$disabled:o,children:N?_?_(N):e(Zs,{$truncateType:F,$variant:B,children:re(te())}):e(Gs,{$truncateType:F,$variant:B,children:r})})})}),renderDropdown:()=>e(hy,{listboxId:K,listItems:n,onSelectItem:Q,onDismiss:X,valueExtractor:v,listExtractor:x,enableSearch:g,searchPlaceholder:b,searchFunction:m,selectedItems:N?[N]:[],onRetry:k,itemsLoadState:D,itemTruncationType:F,renderListItem:E,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,variant:B,width:P,matchElementWidth:!0}),onOpen:()=>{Y(!0),ne(!0),U(!0)},onClose:e=>{Y(!1),ne(!1),"click"!==e&&(U(!1),null==A||A())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),ne(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:L,rootNode:R})})},fD=D.div`
    overflow: hidden;
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    background: ${ta.bg};
    padding: ${ia["spacing-16"]};
    min-width: 23rem;

    ${da.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${la["sm-margin"]}px * 2);
    }

    ${da.MaxWidth.xs} {
        width: calc(100vw - ${la["xs-margin"]}px * 2);
    }

    ${da.MaxWidth.xxs} {
        width: calc(100vw - ${la["xxs-margin"]}px * 2);
    }
`,pD=D.div`
    display: flex;
    align-items: baseline;
`,gD=D.div`
    margin: 0 0.5rem;
    color: ${ta.text};
`,mD=D(D.div`
    ${e=>"small"===e.$variant?ra["body-md-regular"]:ra["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${$a(1)}
                `}}
    overflow: hidden;
`)`
    color: ${ta["text-subtler"]};
`,bD=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:l,error:d,histogramSlider:c,id:u,"aria-labelledby":f,"aria-describedby":p,"aria-invalid":g,onBlur:m,onChange:b,onChangeEnd:v,optionTruncationType:y="end",placeholder:x="Select",rangeLabelPrefix:w,rangeLabelSuffix:$,readOnly:C,renderRangeLabel:S,value:k,dropdownRootNode:D}=r,F=Me(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","aria-labelledby","aria-describedby","aria-invalid","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:_,bins:E=[],renderEmptyView:O,ariaLabels:T}=c,I=E.map((e=>e.minValue)),M=Math.min(...I),[A,B]=s(Z()),[z,j]=s(!1),[L,R]=s(!1),[P]=s((()=>at.generate())),N=a(null),H=a(null),W=a(null),Y=F["data-testid"]||"select-histogram";h((()=>{k!==A&&B(Z())}),[k]);const V=e=>{B(e),null==b||b(e)},U=e=>{B(e),null==v||v(e)},K=()=>{L||z||R(!0)},q=e=>{L&&!z&&N.current&&!N.current.contains(e.relatedTarget)&&(R(!1),null==m||m())};function Z(){return null!=k?k:[M,M+_]}const G=e=>S?S(e):t(Ea.BodyBL,{children:[w,e,$]});return e(Hv,{children:e(tl,{enabled:!C&&!i,isOpen:z,renderElement:()=>e(Ad,{className:o,"data-testid":Y,id:u,ref:N,tabIndex:-1,onFocus:K,onBlur:q,$focused:L,$disabled:i,$readOnly:C,$error:d,children:e(gy,{ref:H,disabled:i,expanded:z,listboxId:P,popupRole:"dialog",readOnly:C,variant:"default","aria-labelledby":f,"aria-describedby":p,"aria-invalid":g,children:e(qs,{ref:W,$disabled:i,children:I&&0!==I.length?t(pD,{children:[G(A[0]),e(gD,{children:"-"}),G(A[1])]}):e(mD,{$truncateType:y,$variant:"default",children:x})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(fD,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(au,{interval:_,value:A,bins:E,onChange:V,onChangeEnd:U,showRangeLabels:!1,renderEmptyView:O,ariaLabels:T})})),onOpen:()=>{j(!0)},onClose:()=>{j(!1)},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),j(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:D})})},vD=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=Me(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,d]=s(c());h((()=>{r!==l[0]&&d(c())}),[r]);function c(){return null!=r?[r]:[0]}return e(eu,Object.assign({},a,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;d([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;d([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},yD=D.p`
    text-align: right;
    ${ra["body-sm-semibold"]}
    color: ${ta["text-subtler"]};
`,xD=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,l]=s("");h((()=>{l(d(`${t||""}`))}),[t,n]);const d=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(yD,{"data-testid":"counter-label",children:a})})},wD=D.div`
    display: flex;
    flex-direction: column;
`,$D=D.textarea`
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
    background: ${ta.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${ia["spacing-12"]} ${ia["spacing-16"]};
    width: 100%;

    ${ra["body-baseline-regular"]}
    color: ${ta.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${oa["width-020"]} ${oa.solid}
            ${ta["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${ta["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ta["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${aa.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;
                padding: ${ia["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${ta["border-focus"]};
                }
            `:e.disabled?F`
                background: ${ta["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${ta["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${ta["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${ta["border-error-focus"]};
                }
            `:void 0}
`,CD=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:l,transformValue:d,onChange:c,maxLength:u}=t,f=Me(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,g]=s(n);h((()=>{g(n)}),[n]);return e($D,Object.assign({ref:r,disabled:o,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=d?d(r):r;if(g(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=d?d(null!=t?t:""):t;g(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:a,maxLength:l&&u?l.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:l,transformValue:d,prefix:c,maxLength:u,renderCustomCounter:f}=r,p=Me(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[g,m]=s(o);h((()=>{m(o)}),[o]);return t(wD,{children:[e(CD,Object.assign({ref:n,disabled:i,value:g,rows:a||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:c,transformValue:d,maxLength:u},p)),u&&e(xD,{value:g,maxLength:u,renderCustomCounter:f})]})}));const SD=D.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ia["spacing-4"]};
`,kD=D.div`
    display: flex;
    flex: 1;
    margin-right: ${ia["spacing-12"]};
    gap: ${ia["spacing-4"]};
`,DD=D(Ss)`
    margin-top: 0;
`,FD=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:l,id:d="form-textarea","data-error-testid":c,"data-testid":u,onChange:f,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:D=""}=n,F=Me(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[_,E]=s(a);h((()=>{E(a)}),[a]);return t(Ps,{id:d,label:i,disabled:F.disabled,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(CD,Object.assign({id:`${d}-base`,"data-testid":u||d,value:_,error:!!l,onChange:e=>{const t=e.target.value;E(t),f&&f(e)},ref:o,prefix:D,transformValue:k},F)),l||F.maxLength?t(SD,{children:[l&&t(kD,{children:[e($s,{"aria-hidden":!0}),e(DD,{"data-testid":c||(d?`${d}-error-message`:"error-message"),children:l})]}),F.maxLength&&e(xD,{value:_,maxLength:F.maxLength,renderCustomCounter:F.renderCustomCounter})]}):e(r,{})]})})),_D=D.div`
    position: relative;
`,ED=D(Bd)`
    height: 3rem;
    gap: ${ia["spacing-8"]};
`,OD=D(zd)`
    display: block;
    width: 100%;
    flex: 1;
`;var TD,ID;!function(e){e.AM="AM",e.PM="PM"}(TD||(TD={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,d=0===l?s:r?s+(t-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Le(e,n),i=Le(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:TD.AM};if(!t)return r;try{if("24hr"===e){const n=zD(t,e);r.minute=st.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=TD.AM,r.hour=0===o?"12":st.padValue(o.toString())):(r.period=TD.PM,r.hour=12===o?o.toString():st.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=zD(t,e);r.hour=st.padValue(n),r.minute=st.padValue(o),r.period="am"===i.toLowerCase()?TD.AM:TD.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?st.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return st.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?st.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?st.padValue(n.toString()):13===n?st.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===TD.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return st.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=zD(e,t),i=st.padValue(r);let a=`${i}:${st.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),jD(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=jD(e,n,t);i.push(r)}else{const t=jD(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),jD(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return jD(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n},e.calculateScrollPosition=t=>{const{scrollTime:r,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=t;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(r))return console.warn(`Invalid scrollTime format: "${r}". Expected format: HH:mm.`),null;const t=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(r,i):r,[l,d]=MD(t);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${r}".`),null;const c=60*l+d,[u,h]=MD(n),f=60*u+h,[p,g]=MD(o);(c<f||c>60*p+g)&&console.warn(`scrollTime "${r}" is outside the range (${n} - ${o}).`);return(c-f)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${r}".`,e),null}}}(ID||(ID={}));const MD=e=>e.split(":").map(Number),AD=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},BD=e=>{const t=parseInt(e);return t>=0&&t<=59},zD=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!AD(r[0],t)||!BD(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!AD(r[0],t)||!BD(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},jD=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,LD=D.div`
    padding: ${ia["spacing-8"]} ${ia["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=ta["bg-error"](e),r=ta["border-error"](e);break;case"success":t=ta["bg-success"](e),r=ta["border-success"](e);break;case"warning":default:t=ta["bg-warning"](e),r=ta["border-warning"](e);break;case"info":t=ta["bg-info"](e),r=ta["border-info"](e);break;case"description":t=ta["bg-strong"](e),r=ta["border-strong"](e)}return F`
            background: ${t};
            border-left: ${oa["width-020"]} ${oa.solid}
                ${r};
        `}}
`,RD=D.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ia["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ta["icon-error"](e);break;case"success":t=ta["icon-success"](e);break;case"warning":default:t=ta["icon-warning"](e);break;case"info":t=ta["icon-info"](e);break;case"description":t=ta["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,PD=D(Ea.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${ra["body-sm-semibold"]}
                margin-top: ${ia["spacing-4"]};
            `:F`
                ${ra["body-md-semibold"]}
                margin-top: ${ia["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ia["spacing-4"]};
    }
`,ND=D.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,HD=D.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${ia["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,WD=D.div`
    color: ${ta.text};

    ${e=>"small"===e.$sizeType?za({textSize:"body-sm"}):za({textSize:"body-md"})}
`,YD=D.button`
    ${e=>"small"===e.$sizeType?F`
                ${ra["body-sm-semibold"]}
            `:F`
                ${ra["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ia["spacing-4"]};
    margin-top: ${ia["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${ta["text-primary"]};
`,VD=D(me)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${na["duration-350"]} ${na["ease-standard"]};
`,UD=D.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${ta["icon-selected-disabled"]};
                `:F`
                    color: ${ta["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${ta["icon-selected"]};
            `:F`
            color: ${ta["icon-subtle"]};
        `};
`,KD=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&ra[`${e.$size}-regular`]}
    font-weight: ${ra.Spec["weight-regular"]};
    color: ${ta.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,qD=D.ol`
    ${KD}

    margin-left: 3em;

    ${da.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return F`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return F`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,ZD=D.ul`
    ${KD}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&F`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,GD=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=Me(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return e(ZD,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:t(r,{children:[e("div",{"aria-hidden":!0,children:a}),e("div",{children:n.props.children})]})}):n)):l}))};GD.displayName="TextList.Ul";const QD=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=Me(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(qD,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};QD.displayName="TextList.Ol";const XD=GD,JD=D.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${aa.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${ta.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${ta["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return F`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return F`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?F`
                            border-color: ${ta["border-error"]};
                        `:F`
                            border-color: ${ta["border-error"]};

                            &:has(${iF}:hover) {
                                @media (pointer: fine) {
                                    background: ${ta["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${ta["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${ta["bg-selected"]};

                        &:has(${iF}:hover) {
                            @media (pointer: fine) {
                                background: ${ta["bg-selected-hover"]};

                                & ${rF} {
                                    color: ${ta["text-selected-hover"]};
                                }

                                & ${pF} {
                                    color: ${ta["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${iF}:hover) {
                        @media (pointer: fine) {
                            background: ${ta["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${ta["border-error"]};
                        `:F`
                            border-color: ${ta["border-error"]};

                            &:has(${iF}:hover) {
                                @media (pointer: fine) {
                                    background: ${ta["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${ta["border-selected-disabled"]};
                            background: ${ta["bg-selected-disabled"]};
                        `:F`
                            border-color: ${ta["border-disabled"]};
                            background: ${ta["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${ta["border-selected"]};
                        background: ${ta["bg-selected"]};

                        &:has(${iF}:hover) {
                            @media (pointer: fine) {
                                background: ${ta["bg-selected-hover"]};

                                & ${rF} {
                                    color: ${ta["text-selected-hover"]};
                                }

                                & ${pF} {
                                    color: ${ta["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border-color: ${ta.border};

                    &:has(${iF}:hover) {
                        @media (pointer: fine) {
                            background: ${ta["bg-hover-subtle"]};
                        }
                    }
                `}
`,eF=D.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,tF=D.div`
    display: flex;
`,rF=D.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${ta["text-selected-disabled"]};
                `:F`
                    color: ${ta["text-disabled"]};
                `:e.$selected?F`
                color: ${ta["text-selected"]};
            `:F`
            color: ${ta.text};
        `}
`,nF=D.label`
    ${ra["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${da.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${da.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,oF=D.div`
    ${ra["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ra["body-md-semibold"]}
    }
`,iF=D.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,aF=D.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,sF=D.button`
    color: ${e=>e.$disabled?ta["text-disabled"]:ta["text-error"]};
    white-space: nowrap;
    ${ra["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,lF=D.button`
    color: ${e=>e.disabled?ta["text-disabled"]:ta["text-primary"]};
    ${ra["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${ta.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,dF=D.div`
    width: 100%;
    color: ${e=>e.$disabled?ta["text-disabled"]:ta["text-error"]};
    border: none;
    background: ${ta.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,cF=D((r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:f,role:g}=r,m=Me(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=s(!1),[y,x]=s(!1),{height:w,ref:$}=rr(),[C]=s((()=>at.generate())),S=p((()=>{v(!f),x(D())}),[f,w]),D=()=>!(!w||!f)&&w>f;h((()=>{S()}),[f,w,S]);return t(LD,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:g,children:[c&&e(RD,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return e(Oe,{"aria-hidden":!0});case"warning":return e(Ee,{"aria-hidden":!0});case"error":return e(ne,{"aria-hidden":!0});case"info":case"description":return e(k,{"aria-hidden":!0});default:return null}})()}),t(ND,{children:[y&&t(YD,{$sizeType:d,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(VD,{$expanded:b})]}),t(HD,{id:C,$maxCollapsedHeight:D()?f:void 0,$showMore:b,$hasActionLink:!!a,inert:ol(!!f&&!b),children:[e(WD,{ref:$,$type:n,$sizeType:d,children:i}),a?t(PD,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||e(_e,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,uF=D.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${ta.bg};
    ${za({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${ta["text-disabled"]};
            `:e.$selected?F`
                color: ${ta["text-selected"]};
            `:F`
                color: ${ta.text};
            `}
`,hF=D(Ea.BodyMD)`
    color: ${e=>e.$disabled?ta["text-disabled"]:ta["text-error"]};
`,fF=D(XD)`
    color: ${e=>e.$disabled?ta["text-disabled"]:ta["text-error"]};
`,pF=D((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?ye:be,{});break;case"radio":i=e(r?Ie:Te,{});break;case"tick":i=e(xe,{});break;case"cross":i=e(M,{});break;default:i=null}return e(UD,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${ta["icon-selected-disabled"]};
                `:F`
                    color: ${ta["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${ta["icon-selected"]};
            `:F`
            color: ${ta["icon-subtle"]};
        `};
`,gF=Ek(D.div`
    position: absolute;
    top: calc(3rem + ${ia["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${da.MaxWidth.xxs} {
        max-width: 100%;
    }
`),mF=D.div`
    position: relative;
    width: 100%;
    padding: ${ia["spacing-8"]} ${ia["spacing-20"]}
        ${ia["spacing-24"]} ${ia["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${ta.bg};
    border: ${oa["width-010"]} ${oa.solid} ${ta.border};
    border-radius: ${aa.sm};
`,bF=D.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${da.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,vF=D.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ia["spacing-16"]};
    gap: ${ia["spacing-8"]} ${ia["spacing-16"]};

    ${da.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${ia["spacing-32"]};
    }
`,yF=D.div`
    display: flex;
    align-items: center;
    margin-right: ${ia["spacing-32"]};

    ${da.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,xF=D.div`
    display: flex;
    gap: ${ia["spacing-8"]};

    ${da.MaxWidth.lg} {
        flex-direction: column;
    }

    ${da.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,wF=D.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${da.MaxWidth.xxs} {
        width: 6rem;
    }
`,$F=D(Ia)`
    width: 5rem;
    padding: ${ia["spacing-16"]} 0;
    color: ${ta.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${ta["icon-hover"]};
    }
`,CF=D(Ea.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,SF=D(Ad)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${da.MaxWidth.xxs} {
        width: 100%;
    }
`,kF=D(zd)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,DF=D((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:f,disabled:p,error:g,name:m,id:b,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:k,"aria-describedby":D}=n,F=Me(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:_=!0,errors:E,children:O,initialExpanded:T}=x||{},[I,M]=s(l),[A,B]=s(!!T),z=v((()=>{const e=Array.isArray(E)&&(null==E?void 0:E.length)>0,t=!Array.isArray(E)&&!!E;return e||t}),[E]),[j]=s(at.generate()),L=b?`${b}`:`tg-${j}`,R=a(null);h((()=>{M(l)}),[l]),h((()=>{I&&B(null==T||T)}),[I]);const P=e=>{if(!p){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},N=()=>{p||B(!A)},H=()=>{p||!$||$()},W=()=>{var e;null===(e=null==R?void 0:R.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(pF,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!f)return null;let t;return t="function"==typeof f?f():f,e(oF,{"data-id":"toggle-sublabel",id:`${L}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(hF,{weight:"semibold",$disabled:p,children:"Error"}),e(fF,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${L}-error-list-item-${r}`,children:e(hF,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(JD,{$selected:I,$disabled:p,className:y,$styleType:d,$error:g,$indicator:i,$useContentWidth:k,id:b,"data-testid":C,children:[(()=>{const r=["string"==typeof f?`${L}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return t(iF,{id:`${L}-header-container`,$disabled:p,$error:g,$selected:I,$indicator:i,$styleType:d,children:[e(aF,{$addPadding:w,children:t(tF,{id:`${L}-input-container`,onClick:W,children:[e(eF,Object.assign({ref:R,name:m,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:P,onClick:Y,checked:I,"aria-describedby":r},F)),i&&V(),t(rF,{$selected:I,$disabled:p,children:[e(nF,{htmlFor:`${L}-input`,"data-testid":"toggle-label",id:`${L}-label`,$maxLines:u,children:c}),f&&U()]})]})}),w&&e(sF,{type:"button",$disabled:p,onClick:H,id:`${L}-remove-button`,children:"Remove"})]})})(),O&&t("div",{children:[(!_||A)&&e(uF,{"data-id":"toggle-composite-children",$isFinalItem:!_,$disabled:p,children:O}),_&&!A&&z&&e(dF,{$disabled:p,onClick:N,id:`${L}-error-alert`,children:e(cF,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(E)?K(E):E})}),_&&t(lF,{$paddingTopRequired:!A&&!z,disabled:p,onClick:N,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?Fe:oe,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,FF=D(Ml.Small)`
    width: 7rem;

    ${da.MaxWidth.sm} {
        flex: 1;
    }

    ${da.MaxWidth.xxs} {
        width: 100%;
    }
`;var _F,EF,OF;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(_F||(_F={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(EF||(EF={})),function(e){e.AM="am",e.PM="pm"}(OF||(OF={}));const TF=({id:r,value:n,show:o,format:i,onChange:l,onCancel:d})=>{var c;const u=ID.getTimeValues(i,n),[f,g]=s(u.hour),[m,b]=s(u.minute),[v,y]=s(u.period),x=a(null),w=a(null),$=rr();h((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=ID.getTimeValues(i,n);g(e),b(t),y(r)}}),[o,n,i]),h((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case _F.MINUTE_UP:b(ID.updateMinutes(m,"add"));break;case _F.MINUTE_DOWN:b(ID.updateMinutes(m,"minus"));break;case _F.HOUR_UP:g(ID.updateHours(f,"add"));break;case _F.HOUR_DOWN:g(ID.updateHours(f,"minus"))}}),[f,m]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case EF.HOUR:t.length<=2&&g(t);break;case EF.MINUTE:t.length<=2&&b(t)}},F=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case EF.HOUR:{const r=t>23||t<0?u.hour:ID.convertHourTo12HourFormat(e.target.value);g(r);break}case EF.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;b(st.padValue(r));break}}},_=e=>{switch(e.target.name){case OF.AM:y(TD.AM);break;case OF.PM:y(TD.PM)}},E=e=>r?`${r}-${e}`:e,O=uk({opacity:o?1:0,height:o?(null!==(c=$.height)&&void 0!==c?c:0)+32+2:0});return e(gF,{"data-testid":"animated-dropdown-wrapper",style:O,children:t(mF,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:ol(!o),children:[t(bF,{children:[t(yF,{children:[t(wF,{children:[e($F,{"aria-label":"increase hour",name:_F.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:e(Fe,{})}),e(SF,{children:e(kF,{"aria-label":"hour",type:"number",name:EF.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onFocus:k,onChange:D,onBlur:F,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e($F,{"aria-label":"decrease hour",name:_F.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:e(oe,{})})]}),e(CF,{children:":"}),t(wF,{children:[e($F,{"aria-label":"increase minute",name:_F.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:e(Fe,{})}),e(SF,{children:e(kF,{"aria-label":"minute",type:"number",name:EF.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:D,onBlur:F,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e($F,{"aria-label":"decrease minute",name:_F.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:e(oe,{})})]})]}),t(xF,{children:[e(DF,{checked:v===TD.AM,name:OF.AM,type:"radio",onChange:_,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(DF,{checked:v===TD.PM,name:OF.PM,type:"radio",onChange:_,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(vF,{children:[e(FF,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":E("cancel-button"),children:"Cancel"}),e(FF,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?ID.convertTo24HourFormat({hour:f,minute:m,period:v}):`${f}:${m}${v}`,l(e)},disabled:""===f||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},IF=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:f,onBlur:p}=r,g=Me(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=s(!1),[v,y]=s(!1),[x,w]=s(""),[$,C]=s(""),S=a(null);h((()=>{l&&(w(l.start),C(l.end))}),[l]),or("mousedown",(function(e){o||_(e)}),"document"),or("keyup",(function(e){if("Tab"===e.code)_(e)}),"document");const k=()=>{F()},D=()=>{m||v||null==f||f()},F=()=>{b(!1),y(!1),null==p||p()},_=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&F()};return e(_D,Object.assign({ref:S,id:n},g,{children:t(ED,{$disabled:o,$error:i,$readOnly:c,children:[t(ec,{error:i,currentActive:m?"start":v?"end":"none",children:[e(OD,{onFocus:()=>{o||c||m||(y(!1),b(!0),D())},readOnly:!0,placeholder:"From",value:ID.formatDisplayValue(x,d),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(OD,{onFocus:()=>{o||c||v||(b(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:ID.formatDisplayValue($,d),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(TF,{id:n,show:m,value:x,format:d,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);null==u||u({start:e,end:$})}}),e(TF,{id:n,show:v,value:$,format:d,onCancel:k,onChange:e=>{y(!1),C(e);null==u||u({start:x,end:e}),""==x?b(!0):null==p||p()}})]})}))},MF=D(Bd)`
    height: 3rem;
    gap: ${ia["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${ia["spacing-20"]});
`,AF=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:f,onBlur:g,alignment:m="left",dropdownZIndex:b,startLimit:y,endLimit:x,interval:w=15}=r,$=Me(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=s((()=>at.generate())),[S,k]=s(null),[D,F]=s(!1),[_,E]=s(""),[O,T]=s(""),[I,M]=s(""),[A,B]=s(""),[z,j]=s(""),L=a(null),R=a(null),P=a(null),N=v((()=>ID.generateTimings(w,d,y,x)),[w,d,y,x]),H=v((()=>{if(""===A)return N;const e=ID.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=p((e=>ID.parseInput(e,d)),[d]);h((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),B(r),j(n)}}),[l,W]),h((()=>{if(i)return void F(!1);const e=W(O),t=W(I);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&ID.to24Hour(t)<ID.to24Hour(e)))return E(""),void(document.activeElement!==R.current&&document.activeElement!==P.current||F(!0));E("End time must be after start time")}F(!1)}),[O,I,W,i]);const Y=e=>{o||c||(S||D||null==f||f(),k(e),F(!0))},V=e=>{var t;o||c||(k(e),F(!0),null===(t=("start"===e?R:P).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(O):"end"===S&&(D&&q(I),null===(t=P.current)||void 0===t||t.blur());break;case"Tab":Z(O,I,{})}}const K=e=>{Z(e,I,{goToNextInput:!0})},q=e=>{Z(O,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:z;T(s),M(l);s===A&&l===z||null==u||u({start:s,end:l}),r&&void 0!==W(e)&&(k("end"),null===(a=P.current)||void 0===a||a.select()),n&&(k(null),F(!1),null==g||g()),B(s),j(l)},G=e=>{e.stopPropagation(),T(""),M(""),B(""),j("");null==u||u({start:"",end:""}),k(null),F(!1)},Q=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=L.current&&L.current.contains(n);S&&!D&&!i&&!o&&Z(O,I,{triggerOnBlur:!0})},X=()=>{if(!c&&!o&&((null==O?void 0:O.length)>0||(null==I?void 0:I.length)>0))return e(dD,{onClick:G,type:"button","aria-label":"Clear",children:e(du,{"aria-hidden":!0})})};return t(_D,Object.assign({id:n},$,{children:[e(Hv,{children:e(tl,{enabled:!c&&!o,isOpen:D,renderElement:()=>t(MF,{ref:L,$disabled:o,$error:i||!!_,$readOnly:c,onBlur:Q,children:[t(ec,{error:i||!!_,currentActive:null===S?"none":S,children:[e(OD,{ref:R,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:O,disabled:o,readOnly:c,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),e(OD,{ref:P,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:c,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>e(hy,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[O],topScrollItem:ID.findClosestFlooredTime(W(O),N),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}:{listItems:H,onSelectItem:q,selectedItems:[I],topScrollItem:ID.findClosestFlooredTime(W(I),H),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(k(null),F(!1),null==g||g()):Z(O,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?R:P).current)||void 0===e||e.focus(),F(!1)},offset:8,alignment:m,fitAvailableHeight:!0,customZIndex:b})}),!i&&_&&t(Cs,{children:[e($s,{"aria-hidden":!0}),e(Ss,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:_})]})]}))},BF=t=>{var{variant:r="dial"}=t,n=Me(t,["variant"]);return e("combobox"===r?AF:IF,Object.assign({},n))};D.div`
    position: relative;
`;const zF=D(zd)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,jF=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:l,value:d,placeholder:c,format:u="24hr",onChange:h,onFocus:f,onBlur:g}=r,m=Me(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=s(!1),y=a(null);or("mousedown",(function(e){o||i||$(e)}),"document"),or("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),null==f||f())};const w=()=>{v(!1),null==g||g()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return t(Bd,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:l},m,{children:[e(zF,{onFocus:x,readOnly:!0,placeholder:c||C(),value:ID.formatDisplayValue(d,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(TF,{id:n,show:b,value:d,format:u,onCancel:()=>{w()},onChange:e=>{null==h||h(e),w()}})]}))},LF=D(Rx)`
    margin-right: 0.5rem;
`,RF=D(hu)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,PF=D(RF)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,NF=D(Ea.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${ta["text-disabled"]};
            `}}
`,HF=D.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,WF=D(Ea.BodyBL)``,YF=n=>{var{disabled:o,error:i,value:l,onChange:d,onBlur:c,onChangeRaw:u,onBlurRaw:f,readOnly:p,placeholder:g="00-8888",autoComplete:m,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x}=n,w=Me(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=s(""),[S,k]=s(""),[D,F]=s("none"),[_]=s((()=>at.generate())),E=`${_}-floor-label`,O=`${_}-unit-label`,T=`${_}-live-message`,I=a(null),M=a(null),A=a(null),B=a($),z=a(S),j=a(D),L=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),R=ar({ref:M,formatter:L}),P=ar({ref:A,formatter:L}),N=v((()=>{let e="";const t=te("Hash",$),r=te("Dash",S);switch(D){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[D,$,S]),H=e=>{B.current=e,C(e)},W=e=>{z.current=e,k(e)},Y=e=>{j.current=e,F(e)};h((()=>{"floor"===D&&3===$.length&&A.current&&A.current.focus()}),[$]),h((()=>{G(l)}),[l]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=Z(r);"floor"===t?(H(n),n!==$&&Q(n,t)):"unit"===t&&(W(n),n!==S&&Q(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=R();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),H(r),Q(r,t)}else if("unit"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),Q(r,t)}},q=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===D&&0===S.length&&(null===(t=M.current)||void 0===t||t.focus())},Z=e=>/^[0-9]$/.test(e)?st.padValue(e,!0):e.toLocaleUpperCase(),G=e=>{if(e!==VF)if(void 0===e||0===e.length)H(""),W("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];H("floor"===D?e:Z(e)),W("unit"===D?r:Z(r))}}},Q=(e,t)=>{if(!d&&!u)return;const r={floor:B.current,unit:z.current};if(r[t]=e,d){const e=J(r);d(e)}u&&u([r.floor,r.unit])},X=()=>{if(!c&&!f)return;const e={floor:Z(B.current),unit:Z(z.current)};if(c){const t=J(e);c(t)}f&&f([e.floor,e.unit])},J=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":VF},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(Bd,Object.assign({},w,{ref:I,onClick:()=>{"none"===D&&M.current&&M.current.focus()},$disabled:o,$error:i,$readOnly:p,tabIndex:-1,onBlur:e=>{I.current&&I.current.contains(e.relatedTarget)||"none"!==j.current&&(Y("none"),X())},children:[e(LF,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(HF,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x,children:[e(WF,{children:n[0]}),e(NF,{children:"-"}),e(WF,{children:n[1]}),e(nl,{children:o})]})})(l):t(r,{children:[e(RF,{name:"floor",maxLength:3,value:$,ref:M,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":il(b,E),"aria-describedby":il(y,T),"aria-invalid":x,placeholder:"floor"!==D||p||o?ee(g)[0]:"",autoComplete:m,styleType:"no-border"}),e(nl,{"aria-hidden":!0,id:E,children:"Enter floor number"}),e(NF,{$inactive:0===$.length,children:"-"}),e(PF,{name:"unit",maxLength:5,value:S,ref:A,onFocus:V,onBlur:U,onChange:K,onKeyDown:q,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":il(b,O),"aria-describedby":il(y,T),"aria-invalid":x,placeholder:"unit"!==D||p||o?ee(g)[1]:"",autoComplete:m,styleType:"no-border"}),e(nl,{"aria-hidden":!0,id:O,children:"Enter unit number"}),e(nl,{id:T,"aria-live":"polite",children:N})]})]}))},VF="Invalid unit number",UF={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-input-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(qd,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-range-input-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(ic,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(zc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(au,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:fu,InputGroup:Nx,MaskedInput:nw,Label:Ds,MultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=Me(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${at.generate()}`)),C=null!=o?o:$;return e(Ps,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(ow,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(lw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(sw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},Select:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=Me(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${at.generate()}`)),C=null!=o?o:$;return e(Ps,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(hD,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,histogramSlider:y}=t,x=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);const[w]=s((()=>`form-field-${at.generate()}`)),$=null!=o?o:w;return e(Ps,{id:$,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(bD,Object.assign({histogramSlider:y,error:!!n,"data-testid":a?`${a}-base`:void 0,id:`${$}-base`},x))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(vD,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(eu,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(uD,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:FD,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(jF,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ps,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(BF,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=Me(t,["id","data-error-testid","children"]);return e(Ps,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-unit-number-input-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(YF,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-phone-number-input-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Sw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Me(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${at.generate()}`)),w=null!=o?o:x;return e(Ps,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(e$,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},OtpVerification:t=>{var{label:r,id:n,"data-error-testid":o,"data-testid":i,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Me(t,["label","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[y]=s((()=>`form-otp-verification-${at.generate()}`)),x=null!=n?n:y;return e(Ps,{id:x,"data-testid":i,label:r,"data-error-testid":o,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Uw,Object.assign({id:`${x}-base-field`,inputId:`${x}-base`,"data-testid":i?`${i}-base`:void 0},v))})}};export{ta as C,UF as F,Mc as S,Ae as _,Ac as a};
//# sourceMappingURL=index.ce7ececd.js.map
