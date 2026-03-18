import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as h,useLayoutEffect as f,useCallback as g,createContext as m,useContext as p,Children as b,useMemo as v,useImperativeHandle as y,useReducer as x,lazy as w,Suspense as $,createElement as C,forwardRef as D}from"react";import{ICircleFillIcon as S}from"@lifesg/react-icons/i-circle-fill";import k,{css as F,isStyledComponent as E,ThemeContext as _,keyframes as O}from"styled-components";import{ExternalIcon as T}from"@lifesg/react-icons/external";import{CrossIcon as M}from"@lifesg/react-icons/cross";import{useFloatingTree as I,FloatingTree as B,useFloatingNodeId as A,FloatingNode as z,useFloating as j,useTransitionStatus as L,useDismiss as R,useInteractions as P,FloatingFocusManager as H,autoUpdate as N,offset as W,flip as Y,shift as V,limitShift as U,size as K,useClick as Z,useHover as q,useFocus as G,FloatingPortal as X,useTransitionStyles as Q}from"@floating-ui/react";import J,{findDOMNode as ee}from"react-dom";import{ExclamationCircleFillIcon as te}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as re}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ne}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as oe}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ie,PencilIcon as ae,EraserIcon as se,TickCircleFillIcon as le,ChevronDownIcon as de}from"@lifesg/react-icons";import{SquareIcon as ce}from"@lifesg/react-icons/square";import{SquareFillIcon as ue}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as he}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as fe}from"@lifesg/react-icons/tick";import{MagnifierIcon as ge}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as me}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as pe}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as be}from"@lifesg/react-icons/eye";import{EyeSlashIcon as ve}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ye}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as xe}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as we}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as $e}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Ce}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as De}from"@lifesg/react-icons/circle";import{CircleDotIcon as Se}from"@lifesg/react-icons/circle-dot";function ke(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function Fe(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Ee="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function _e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oe={exports:{}};Oe.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,a=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=p;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},D=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},S=v;S.l=C,S.i=$,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function p(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=D(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return D(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<D(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),f=function(e,t){var o=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},g=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?f(1,0):f(31,11);case d:return n?f(1,p):f(0,p+1);case l:var y=this.$locale().weekStart||0,x=(m<y?m+7:m)-y;return f(n?b-x:b+(6-x),p);case s:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case i:return g(v+"Seconds",2);case o:return g(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[f](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var h,f=this;n=Number(n);var g=S.p(c),m=function(e){var t=D(f);return S.w(t.date(t.date()+Math.round(e*n)),f)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var p=(h={},h[i]=t,h[a]=r,h[o]=e,h)[g]||1,b=this.$d.getTime()+n*p;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return S.s(i%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return s+1;case"MM":return S.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,a,!0);case"A":return g(i,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var g,m=this,p=S.p(h),b=D(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return S.m(m,b)};switch(p){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(y-v)/6048e5;break;case s:g=(y-v)/864e5;break;case a:g=y/r;break;case i:g=y/t;break;case o:g=y/e;break;default:g=y}return f?g:S.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),F=k.prototype;return D.prototype=F,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,k,D),e.$i=!0),D},D.locale=C,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[y],D.Ls=x,D.p={},D}();var Te=_e(Oe.exports),Me={exports:{}};Me.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,f=new Date,g=a||(o||i?1:f.getDate()),m=o||f.getFullYear(),p=0;o&&!i||(p=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(m,p,g,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(m,p,g,b,v,y,x)):new Date(m,p,g,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ie=_e(Me.exports),Be={exports:{}};Be.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Ae=_e(Be.exports),ze={exports:{}};ze.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var je=_e(ze.exports),Le={exports:{}};Le.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Re,Pe,He=_e(Le.exports),Ne={exports:{}};Ne.exports=(Re={year:0,month:1,day:2,hour:3,minute:4,second:5},Pe={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Pe[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Pe[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Re[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var We,Ye=_e(Ne.exports);Te.extend(Ae),Te.extend(He),Te.extend(je),Te.extend(Ie),Te.extend(Ye),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Te(t).startOf("week");return Ve(r).map((e=>Ue(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ue(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Te(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Te(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Te(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Te(n):void 0,o?Te(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(We||(We={}));const Ve=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ue=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ke=[1,3,5,7,8,10,12],Ze=[4,6,9,11];var qe,Ge;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Ke.includes(i)?Math.min(o,31).toString():Ze.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Te(e,r);return Te(t,r).diff(n,"minute")},e.toDayjs=e=>e?Te(e):Te(),e.addMinutesToTime=(e,t,r="HH:mm")=>Te(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Te(e).isSame(Te(t),r)}(qe||(qe={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Te(e).isBefore(n,"day"))||!(!o||!Te(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const r=t(e);if(Te(r,"YYYY-MM-DD",!0).isValid())return r}return""};const t=e=>{const t=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";const[,r,n,o]=t;if(r.length<=2||parseInt(r,10)<100)return"";return`${r.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Ge||(Ge={}));const Xe=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},Qe=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Xe())return()=>{for(const e of r)e()}};var Je,et;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Je||(Je={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(et||(et={}));var tt=function(e,t){return tt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},tt(e,t)};var rt=function(){return rt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},rt.apply(this,arguments)};var nt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ot=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},it="object"==typeof nt&&nt&&nt.Object===Object&&nt,at="object"==typeof self&&self&&self.Object===Object&&self,st=it||at||Function("return this")(),lt=st,dt=function(){return lt.Date.now()},ct=/\s/;var ut=function(e){for(var t=e.length;t--&&ct.test(e.charAt(t)););return t},ht=/^\s+/;var ft=function(e){return e?e.slice(0,ut(e)+1).replace(ht,""):e},gt=st.Symbol,mt=gt,pt=Object.prototype,bt=pt.hasOwnProperty,vt=pt.toString,yt=mt?mt.toStringTag:void 0;var xt=function(e){var t=bt.call(e,yt),r=e[yt];try{e[yt]=void 0;var n=!0}catch(e){}var o=vt.call(e);return n&&(t?e[yt]=r:delete e[yt]),o},wt=Object.prototype.toString;var $t=xt,Ct=function(e){return wt.call(e)},Dt=gt?gt.toStringTag:void 0;var St=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Dt&&Dt in Object(e)?$t(e):Ct(e)},kt=function(e){return null!=e&&"object"==typeof e};var Ft=ft,Et=ot,_t=function(e){return"symbol"==typeof e||kt(e)&&"[object Symbol]"==St(e)},Ot=/^[-+]0x[0-9a-f]+$/i,Tt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,It=parseInt;var Bt=ot,At=dt,zt=function(e){if("number"==typeof e)return e;if(_t(e))return NaN;if(Et(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Et(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ft(e);var r=Tt.test(e);return r||Mt.test(e)?It(e.slice(2),r?2:8):Ot.test(e)?NaN:+e},jt=Math.max,Lt=Math.min;var Rt=function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function m(){var e=At();if(g(e))return p(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?Lt(r,i-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=At(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(m,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=zt(t)||0,Bt(r)&&(c=!!r.leading,i=(u="maxWait"in r)?jt(zt(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:p(At())},b},Pt=Rt,Ht=ot;var Nt=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ht(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Pt(e,t,{leading:n,maxWait:t,trailing:o})},Wt=function(e,t,r,n){switch(t){case"debounce":return Rt(e,r,n);case"throttle":return Nt(e,r,n);default:return e}},Yt=function(e){return"function"==typeof e},Vt=function(){return"undefined"==typeof window},Ut=function(e){return e instanceof Element||e instanceof HTMLDocument},Kt=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Yt(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Vt()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Vt())return null;if(t)return document.querySelector(t);if(n&&Ut(n))return n;if(r.targetRef&&Ut(r.targetRef.current))return r.targetRef.current;var o=ee(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Kt(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Vt()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Yt(t)?"renderProp":Yt(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Vt()||(r.resizeHandler=Wt(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}tt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Vt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var Zt=Vt()?h:f;function qt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,g=e.observerOptions,m=e.onResize,p=a(r),b=a(null),v=null!=f?f:b,y=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return Zt((function(){if(!Vt()){var e=Kt(m,$,c,h);y.current=Wt((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!p.current&&!Vt()&&e({width:n,height:o}),p.current=!1}))}),n,i,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,g),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,h,m,g,v.current]),rt({ref:v},w)}function Gt(e){const t=a(null);f((()=>{t.current=e}),[e]);return g(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Xt=(e,t,r="window",n)=>{const o=a();h((()=>{o.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Qt=()=>{const[e,t]=s(!1);return h((()=>{t(!0)}),[]),e};function Jt({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const er=e=>{const t=(e=>{const t=a(e),r=a();return h((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},tr=e=>{const[t,r]=s(e),n=a(e);return[t,g((e=>{n.current=e,r(e)}),[]),n]};var rr,nr={exports:{}};rr=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(d),arrayOf:function(e){return g((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,o,i+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:g((function(t,r,n,o,i){var a=t[r];return e(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new f("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||c;return new f("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,o){return b(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new f("Invalid "+o+" `"+i+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,o,i+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new f("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),d}return g((function(t,r,n,o,i){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,o,i,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,o,i){var s=t[r],l=v(s);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return p(n,o,i,d,y(c));var u=c(s,d,n,o,i+"."+d,a);if(u)return u}return null}))},exact:function(e){return g((function(t,r,n,o,l){var d=t[r],c=v(d);if("object"!==c)return new f("Invalid "+o+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var g=e[h];if(s(e,h)&&"function"!=typeof g)return p(n,o,l,h,y(g));if(!g)return new f("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=g(d,h,n,o,l+"."+h,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},o=0;function i(i,s,l,d,u,h,g){if(d=d||c,h=h||l,g!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var p=d+":"+l;!r[p]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[p]=!0,o++)}}return null==s[l]?i?null===s[l]?new f("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+u+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function m(e){return g((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new f("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function p(e,t,r,n,o){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case d:case c:case o:case a:case i:case h:return f;default:var p=f&&f.$$typeof;switch(p){case l:case u:case m:case g:case s:return p;default:return t}}case n:return t}}}var w=d,$=c,C=l,D=s,S=r,k=u,F=o,E=m,_=g,O=n,T=a,M=i,I=h,B=!1;function A(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=D,t.Element=S,t.ForwardRef=k,t.Fragment=F,t.Lazy=E,t.Memo=_,t.Portal=O,t.Profiler=T,t.StrictMode=M,t.Suspense=I,t.isAsyncMode=function(e){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===d},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===p)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),f=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),g=u();return(0,o.useEffect)((function(){g&&r&&r(f)}),[f]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var or=nr.exports=rr(o),ir=Array.isArray,ar="object"==typeof Ee&&Ee&&Ee.Object===Object&&Ee,sr=ar,lr="object"==typeof self&&self&&self.Object===Object&&self,dr=sr||lr||Function("return this")(),cr=dr.Symbol,ur=cr,hr=Object.prototype,fr=hr.hasOwnProperty,gr=hr.toString,mr=ur?ur.toStringTag:void 0;var pr=function(e){var t=fr.call(e,mr),r=e[mr];try{e[mr]=void 0;var n=!0}catch(e){}var o=gr.call(e);return n&&(t?e[mr]=r:delete e[mr]),o},br=Object.prototype.toString;var vr=pr,yr=function(e){return br.call(e)},xr=cr?cr.toStringTag:void 0;var wr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xr&&xr in Object(e)?vr(e):yr(e)};var $r=function(e){return null!=e&&"object"==typeof e},Cr=wr,Dr=$r;var Sr=function(e){return"symbol"==typeof e||Dr(e)&&"[object Symbol]"==Cr(e)},kr=ir,Fr=Sr,Er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_r=/^\w*$/;var Or=function(e,t){if(kr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Fr(e))||(_r.test(e)||!Er.test(e)||null!=t&&e in Object(t))};var Tr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Mr=wr,Ir=Tr;var Br,Ar=function(e){if(!Ir(e))return!1;var t=Mr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},zr=dr["__core-js_shared__"],jr=(Br=/[^.]+$/.exec(zr&&zr.keys&&zr.keys.IE_PROTO||""))?"Symbol(src)_1."+Br:"";var Lr=function(e){return!!jr&&jr in e},Rr=Function.prototype.toString;var Pr=function(e){if(null!=e){try{return Rr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Hr=Ar,Nr=Lr,Wr=Tr,Yr=Pr,Vr=/^\[object .+?Constructor\]$/,Ur=Function.prototype,Kr=Object.prototype,Zr=Ur.toString,qr=Kr.hasOwnProperty,Gr=RegExp("^"+Zr.call(qr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Xr=function(e,t){return null==e?void 0:e[t]},Qr=function(e){return!(!Wr(e)||Nr(e))&&(Hr(e)?Gr:Vr).test(Yr(e))},Jr=Xr;var en=function(e,t){var r=Jr(e,t);return Qr(r)?r:void 0},tn=en(Object,"create"),rn=tn;var nn=function(){this.__data__=rn?rn(null):{},this.size=0};var on=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},an=tn,sn=Object.prototype.hasOwnProperty;var ln=function(e){var t=this.__data__;if(an){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return sn.call(t,e)?t[e]:void 0},dn=tn,cn=Object.prototype.hasOwnProperty;var un=function(e){var t=this.__data__;return dn?void 0!==t[e]:cn.call(t,e)},hn=tn;var fn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=hn&&void 0===t?"__lodash_hash_undefined__":t,this},gn=nn,mn=on,pn=ln,bn=un,vn=fn;function yn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}yn.prototype.clear=gn,yn.prototype.delete=mn,yn.prototype.get=pn,yn.prototype.has=bn,yn.prototype.set=vn;var xn=yn;var wn=function(){this.__data__=[],this.size=0};var $n=function(e,t){return e===t||e!=e&&t!=t},Cn=$n;var Dn=function(e,t){for(var r=e.length;r--;)if(Cn(e[r][0],t))return r;return-1},Sn=Dn,kn=Array.prototype.splice;var Fn=function(e){var t=this.__data__,r=Sn(t,e);return!(r<0)&&(r==t.length-1?t.pop():kn.call(t,r,1),--this.size,!0)},En=Dn;var _n=function(e){var t=this.__data__,r=En(t,e);return r<0?void 0:t[r][1]},On=Dn;var Tn=function(e){return On(this.__data__,e)>-1},Mn=Dn;var In=function(e,t){var r=this.__data__,n=Mn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Bn=wn,An=Fn,zn=_n,jn=Tn,Ln=In;function Rn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Rn.prototype.clear=Bn,Rn.prototype.delete=An,Rn.prototype.get=zn,Rn.prototype.has=jn,Rn.prototype.set=Ln;var Pn=Rn,Hn=en(dr,"Map"),Nn=xn,Wn=Pn,Yn=Hn;var Vn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Un=function(e,t){var r=e.__data__;return Vn(t)?r["string"==typeof t?"string":"hash"]:r.map},Kn=Un;var Zn=function(e){var t=Kn(this,e).delete(e);return this.size-=t?1:0,t},qn=Un;var Gn=function(e){return qn(this,e).get(e)},Xn=Un;var Qn=function(e){return Xn(this,e).has(e)},Jn=Un;var eo=function(e,t){var r=Jn(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},to=function(){this.size=0,this.__data__={hash:new Nn,map:new(Yn||Wn),string:new Nn}},ro=Zn,no=Gn,oo=Qn,io=eo;function ao(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ao.prototype.clear=to,ao.prototype.delete=ro,ao.prototype.get=no,ao.prototype.has=oo,ao.prototype.set=io;var so=ao,lo=so;function co(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(co.Cache||lo),r}co.Cache=lo;var uo=co;var ho=function(e){var t=uo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},fo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,go=/\\(\\)?/g,mo=ho((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(fo,(function(e,r,n,o){t.push(n?o.replace(go,"$1"):r||e)})),t}));var po=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},bo=ir,vo=Sr,yo=cr?cr.prototype:void 0,xo=yo?yo.toString:void 0;var wo=function e(t){if("string"==typeof t)return t;if(bo(t))return po(t,e)+"";if(vo(t))return xo?xo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},$o=wo;var Co=ir,Do=Or,So=mo,ko=function(e){return null==e?"":$o(e)};var Fo=function(e,t){return Co(e)?e:Do(e,t)?[e]:So(ko(e))},Eo=Sr;var _o=function(e){if("string"==typeof e||Eo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Oo=Fo,To=_o;var Mo=function(e,t){for(var r=0,n=(t=Oo(t,e)).length;null!=e&&r<n;)e=e[To(t[r++])];return r&&r==n?e:void 0},Io=Mo;var Bo=function(e,t,r){var n=null==e?void 0:Io(e,t);return void 0===n?r:n},Ao=_e(Bo);const zo=(e,t,r)=>Ao(r,t)||Ao(e,t),jo=(e,t)=>{const r=t||e.defaultValue;return Ao(e.collections,r)},Lo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ro=e=>t=>{var r;const n=t.theme,o=jo(Lo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${zo(o,e,n.overrides.border)}px`:`${o[e]}px`},Po={"width-005":Ro("width-005"),"width-010":Ro("width-010"),"width-020":Ro("width-020"),"width-040":Ro("width-040"),solid:(Ho="solid",e=>{var t;const r=e.theme,n=jo(Lo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?zo(n,Ho,r.overrides.border):n[Ho];return"function"==typeof o?o(e):o})};var Ho;const No={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Wo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Uo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ko={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qo={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Go={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},Jo={collections:{lifesg:Yo,bookingsg:No,rbs:Zo,mylegacy:Vo,ccube:Wo,oneservice:Uo,pa:Ko,a11yplayground:qo,supportgowhere:Go,imda:Xo,spf:Qo},defaultValue:"lifesg"},ei={collections:{lifesg:Yo,bookingsg:No,rbs:Zo,mylegacy:Vo,ccube:Wo,oneservice:Uo,pa:Ko,a11yplayground:qo,supportgowhere:Go,imda:Xo,spf:Qo},defaultValue:"lifesg"},ti=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=jo(o?ei:Jo,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?zo(i,e,s):i[e]},ri={"brand-10":ti("brand-10"),"brand-20":ti("brand-20"),"brand-30":ti("brand-30"),"brand-40":ti("brand-40"),"brand-50":ti("brand-50"),"brand-60":ti("brand-60"),"brand-70":ti("brand-70"),"brand-80":ti("brand-80"),"brand-90":ti("brand-90"),"brand-95":ti("brand-95"),"brand-100":ti("brand-100"),"primary-10":ti("primary-10"),"primary-20":ti("primary-20"),"primary-30":ti("primary-30"),"primary-40":ti("primary-40"),"primary-50":ti("primary-50"),"primary-60":ti("primary-60"),"primary-70":ti("primary-70"),"primary-80":ti("primary-80"),"primary-90":ti("primary-90"),"primary-95":ti("primary-95"),"primary-100":ti("primary-100"),"secondary-10":ti("secondary-10"),"secondary-20":ti("secondary-20"),"secondary-30":ti("secondary-30"),"secondary-40":ti("secondary-40"),"secondary-50":ti("secondary-50"),"secondary-60":ti("secondary-60"),"secondary-70":ti("secondary-70"),"secondary-80":ti("secondary-80"),"secondary-90":ti("secondary-90"),"secondary-95":ti("secondary-95"),"secondary-100":ti("secondary-100"),"neutral-10":ti("neutral-10"),"neutral-20":ti("neutral-20"),"neutral-30":ti("neutral-30"),"neutral-40":ti("neutral-40"),"neutral-50":ti("neutral-50"),"neutral-60":ti("neutral-60"),"neutral-70":ti("neutral-70"),"neutral-80":ti("neutral-80"),"neutral-90":ti("neutral-90"),"neutral-95":ti("neutral-95"),"neutral-100":ti("neutral-100"),"success-10":ti("success-10"),"success-20":ti("success-20"),"success-30":ti("success-30"),"success-40":ti("success-40"),"success-50":ti("success-50"),"success-60":ti("success-60"),"success-70":ti("success-70"),"success-80":ti("success-80"),"success-90":ti("success-90"),"success-95":ti("success-95"),"success-100":ti("success-100"),"warning-10":ti("warning-10"),"warning-20":ti("warning-20"),"warning-30":ti("warning-30"),"warning-40":ti("warning-40"),"warning-50":ti("warning-50"),"warning-60":ti("warning-60"),"warning-70":ti("warning-70"),"warning-80":ti("warning-80"),"warning-90":ti("warning-90"),"warning-95":ti("warning-95"),"warning-100":ti("warning-100"),"error-10":ti("error-10"),"error-20":ti("error-20"),"error-30":ti("error-30"),"error-40":ti("error-40"),"error-50":ti("error-50"),"error-60":ti("error-60"),"error-70":ti("error-70"),"error-80":ti("error-80"),"error-90":ti("error-90"),"error-95":ti("error-95"),"error-100":ti("error-100"),"info-10":ti("info-10"),"info-20":ti("info-20"),"info-30":ti("info-30"),"info-40":ti("info-40"),"info-50":ti("info-50"),"info-60":ti("info-60"),"info-70":ti("info-70"),"info-80":ti("info-80"),"info-90":ti("info-90"),"info-95":ti("info-95"),"info-100":ti("info-100"),white:ti("white"),black:ti("black"),"primary-inverse":ti("primary-inverse")},ni={text:ti("neutral-20"),"text-subtle":ti("neutral-30"),"text-subtler":ti("neutral-50"),"text-subtlest":ti("neutral-60"),"text-primary":ti("primary-50"),"text-primary-strongest":ti("primary-20"),"text-hover":ti("primary-40"),"text-selected":ti("primary-50"),"text-selected-hover":ti("primary-40"),"text-disabled":ti("neutral-50"),"text-disabled-subtle":ti("neutral-60"),"text-disabled-subtlest":ti("neutral-80"),"text-selected-disabled":ti("neutral-20"),"text-success":ti("success-40"),"text-warning":ti("warning-40"),"text-error":ti("error-40"),"text-info":ti("info-40"),"text-inverse":ti("white"),icon:ti("neutral-50"),"icon-subtle":ti("neutral-60"),"icon-strongest":ti("neutral-20"),"icon-primary":ti("primary-50"),"icon-primary-subtle":ti("primary-60"),"icon-primary-subtlest":ti("primary-70"),"icon-hover":ti("primary-40"),"icon-selected":ti("primary-50"),"icon-selected-hover":ti("primary-40"),"icon-disabled":ti("neutral-50"),"icon-disabled-subtle":ti("neutral-60"),"icon-selected-disabled":ti("neutral-60"),"icon-success":ti("success-50"),"icon-warning":ti("warning-60"),"icon-error":ti("error-50"),"icon-error-strong":ti("error-40"),"icon-info":ti("info-50"),"icon-inverse":ti("white"),"icon-primary-inverse":ti("primary-inverse"),border:ti("neutral-90"),"border-strong":ti("neutral-70"),"border-stronger":ti("neutral-50"),"border-primary":ti("primary-50"),"border-primary-subtle":ti("primary-60"),"border-hover":ti("primary-90"),"border-hover-strong":ti("primary-60"),"border-selected":ti("primary-50"),"border-selected-subtle":ti("primary-70"),"border-selected-subtlest":ti("primary-90"),"border-selected-hover":ti("primary-40"),"border-focus":ti("primary-60"),"border-focus-strong":ti("primary-50"),"border-disabled":ti("neutral-90"),"border-selected-disabled":ti("neutral-70"),"border-success":ti("success-60"),"border-warning":ti("warning-60"),"border-error":ti("error-60"),"border-error-focus":ti("error-60"),"border-error-focus-strong":ti("error-40"),"border-error-strong":ti("error-40"),"border-info":ti("info-60"),bg:ti("white"),"bg-strong":ti("neutral-100"),"bg-stronger":ti("neutral-95"),"bg-strongest":ti("neutral-90"),"bg-hover":ti("primary-95"),"bg-hover-strong":ti("primary-90"),"bg-hover-subtle":ti("primary-100"),"bg-hover-neutral":ti("neutral-100"),"bg-hover-neutral-strong":ti("neutral-90"),"bg-selected":ti("primary-95"),"bg-selected-hover":ti("primary-90"),"bg-selected-strong":ti("primary-90"),"bg-selected-stronger":ti("primary-70"),"bg-selected-strongest":ti("primary-50"),"bg-selected-strongest-hover":ti("primary-40"),"bg-disabled":ti("neutral-95"),"bg-selected-disabled":ti("neutral-95"),"bg-selected-stronger-disabled":ti("neutral-70"),"bg-success":ti("success-100"),"bg-success-hover":ti("success-95"),"bg-success-strong":ti("success-50"),"bg-success-strong-hover":ti("success-40"),"bg-warning":ti("warning-100"),"bg-warning-hover":ti("warning-95"),"bg-warning-strong":ti("warning-50"),"bg-warning-strong-hover":ti("warning-40"),"bg-info":ti("info-100"),"bg-info-hover":ti("info-95"),"bg-info-strong":ti("info-50"),"bg-info-strong-hover":ti("info-40"),"bg-error":ti("error-100"),"bg-error-hover":ti("error-95"),"bg-error-strong":ti("error-50"),"bg-error-strong-hover":ti("error-40"),"bg-inverse":ti("neutral-20"),"bg-inverse-subtle":ti("neutral-30"),"bg-inverse-subtler":ti("neutral-50"),"bg-inverse-subtlest":ti("neutral-60"),"bg-inverse-hover":ti("neutral-40"),"bg-primary":ti("primary-50"),"bg-primary-subtle":ti("primary-60"),"bg-primary-subtler":ti("primary-95"),"bg-primary-subtlest":ti("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ti("primary-40"),"bg-primary-subtlest-hover":ti("primary-90"),"bg-primary-subtlest-selected":ti("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ti("primary-50"),"hyperlink-hover":ti("primary-40"),"hyperlink-visited":ti("primary-40"),"hyperlink-inverse":ti("primary-inverse"),"focus-ring":ti("primary-50"),"focus-ring-inverse":ti("white")},oi={text:ti("neutral-100"),"text-subtle":ti("neutral-80"),"text-subtler":ti("neutral-60"),"text-subtlest":ti("neutral-50"),"text-primary":ti("primary-60"),"text-primary-strongest":ti("primary-90"),"text-hover":ti("primary-70"),"text-selected":ti("primary-60"),"text-selected-hover":ti("primary-70"),"text-disabled":ti("neutral-60"),"text-disabled-subtle":ti("neutral-50"),"text-disabled-subtlest":ti("neutral-30"),"text-selected-disabled":ti("neutral-90"),"text-success":ti("success-70"),"text-warning":ti("warning-70"),"text-error":ti("error-70"),"text-info":ti("info-70"),"text-inverse":ti("black"),icon:ti("neutral-60"),"icon-subtle":ti("neutral-50"),"icon-strongest":ti("neutral-90"),"icon-primary":ti("primary-60"),"icon-primary-subtle":ti("primary-50"),"icon-primary-subtlest":ti("primary-40"),"icon-hover":ti("primary-70"),"icon-selected":ti("primary-60"),"icon-selected-hover":ti("primary-70"),"icon-disabled":ti("neutral-60"),"icon-disabled-subtle":ti("neutral-50"),"icon-selected-disabled":ti("neutral-50"),"icon-success":ti("success-60"),"icon-warning":ti("warning-50"),"icon-error":ti("error-60"),"icon-error-strong":ti("error-70"),"icon-info":ti("info-60"),"icon-inverse":ti("black"),"icon-primary-inverse":ti("primary-inverse"),border:ti("neutral-20"),"border-strong":ti("neutral-40"),"border-stronger":ti("neutral-60"),"border-primary":ti("primary-60"),"border-primary-subtle":ti("primary-50"),"border-hover":ti("primary-20"),"border-hover-strong":ti("primary-50"),"border-selected":ti("primary-60"),"border-selected-subtle":ti("primary-40"),"border-selected-subtlest":ti("primary-20"),"border-selected-hover":ti("primary-70"),"border-focus":ti("primary-50"),"border-focus-strong":ti("primary-60"),"border-disabled":ti("neutral-20"),"border-selected-disabled":ti("neutral-40"),"border-success":ti("success-50"),"border-warning":ti("warning-50"),"border-error":ti("error-50"),"border-error-focus":ti("error-50"),"border-error-focus-strong":ti("error-70"),"border-error-strong":ti("error-70"),"border-info":ti("info-50"),bg:ti("black"),"bg-strong":ti("neutral-10"),"bg-stronger":ti("neutral-20"),"bg-strongest":ti("neutral-20"),"bg-hover":ti("primary-20"),"bg-hover-strong":ti("primary-20"),"bg-hover-subtle":ti("primary-10"),"bg-hover-neutral":ti("neutral-10"),"bg-hover-neutral-strong":ti("neutral-20"),"bg-selected":ti("primary-20"),"bg-selected-hover":ti("primary-20"),"bg-selected-strong":ti("primary-20"),"bg-selected-stronger":ti("primary-40"),"bg-selected-strongest":ti("primary-60"),"bg-selected-strongest-hover":ti("primary-70"),"bg-disabled":ti("neutral-20"),"bg-selected-disabled":ti("neutral-20"),"bg-selected-stronger-disabled":ti("neutral-40"),"bg-success":ti("success-10"),"bg-success-hover":ti("success-20"),"bg-success-strong":ti("success-60"),"bg-success-strong-hover":ti("success-70"),"bg-warning":ti("warning-10"),"bg-warning-hover":ti("warning-20"),"bg-warning-strong":ti("warning-60"),"bg-warning-strong-hover":ti("warning-70"),"bg-info":ti("info-10"),"bg-info-hover":ti("info-20"),"bg-info-strong":ti("info-60"),"bg-info-strong-hover":ti("info-70"),"bg-error":ti("error-10"),"bg-error-hover":ti("error-20"),"bg-error-strong":ti("error-60"),"bg-error-strong-hover":ti("error-70"),"bg-inverse":ti("neutral-90"),"bg-inverse-subtle":ti("neutral-80"),"bg-inverse-subtler":ti("neutral-60"),"bg-inverse-subtlest":ti("neutral-50"),"bg-inverse-hover":ti("neutral-70"),"bg-primary":ti("primary-60"),"bg-primary-subtle":ti("primary-50"),"bg-primary-subtler":ti("primary-20"),"bg-primary-subtlest":ti("primary-10"),"bg-available":"#185339","bg-primary-hover":ti("primary-70"),"bg-primary-subtlest-hover":ti("primary-20"),"bg-primary-subtlest-selected":ti("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ti("primary-60"),"hyperlink-hover":ti("primary-70"),"hyperlink-visited":ti("primary-70"),"hyperlink-inverse":ti("primary-inverse"),"focus-ring":ti("primary-60"),"focus-ring-inverse":ti("black")},ii={text:ti("neutral-30"),"text-subtle":ti("neutral-40"),"text-subtler":ti("neutral-50"),"text-subtlest":ti("neutral-70"),"text-primary":ti("neutral-10"),"text-primary-strongest":ti("neutral-10"),"text-hover":ti("neutral-70"),"text-selected":ti("neutral-20"),"text-selected-hover":ti("neutral-10"),"text-disabled":ti("neutral-50"),"text-disabled-subtle":ti("neutral-70"),"text-disabled-subtlest":ti("neutral-80"),"text-selected-disabled":ti("neutral-40"),"text-success":ti("success-40"),"text-warning":ti("warning-40"),"text-error":ti("brand-30"),"text-info":ti("neutral-40"),"text-inverse":ti("neutral-100"),icon:ti("neutral-40"),"icon-subtle":ti("neutral-50"),"icon-strongest":ti("neutral-10"),"icon-primary":ti("neutral-10"),"icon-primary-subtle":ti("neutral-30"),"icon-primary-subtlest":ti("neutral-60"),"icon-hover":ti("neutral-70"),"icon-selected":ti("brand-20"),"icon-selected-hover":ti("brand-10"),"icon-disabled":ti("neutral-50"),"icon-disabled-subtle":ti("neutral-70"),"icon-selected-disabled":ti("neutral-40"),"icon-success":ti("success-40"),"icon-warning":ti("warning-60"),"icon-error":ti("brand-30"),"icon-error-strong":ti("brand-10"),"icon-info":ti("neutral-40"),"icon-inverse":ti("neutral-100"),"icon-primary-inverse":"#F9B371",border:ti("neutral-90"),"border-strong":ti("neutral-30"),"border-stronger":ti("neutral-20"),"border-primary":ti("neutral-40"),"border-primary-subtle":ti("neutral-60"),"border-hover":ti("neutral-80"),"border-hover-strong":ti("neutral-10"),"border-selected":ti("brand-20"),"border-selected-subtle":ti("neutral-40"),"border-selected-subtlest":ti("neutral-70"),"border-selected-hover":ti("neutral-10"),"border-focus":ti("neutral-20"),"border-focus-strong":ti("neutral-10"),"border-disabled":ti("neutral-90"),"border-selected-disabled":ti("neutral-80"),"border-success":ti("success-40"),"border-warning":ti("warning-60"),"border-error":ti("brand-30"),"border-error-focus":ti("brand-20"),"border-error-focus-strong":ti("brand-10"),"border-error-strong":ti("brand-20"),"border-info":ti("neutral-40"),bg:ti("neutral-100"),"bg-strong":ti("neutral-95"),"bg-stronger":ti("neutral-90"),"bg-strongest":ti("neutral-80"),"bg-hover":ti("brand-90"),"bg-hover-strong":ti("brand-80"),"bg-hover-subtle":ti("neutral-90"),"bg-hover-neutral":ti("neutral-90"),"bg-hover-neutral-strong":ti("neutral-90"),"bg-selected":ti("brand-100"),"bg-selected-hover":ti("brand-30"),"bg-selected-strong":ti("brand-50"),"bg-selected-stronger":ti("brand-40"),"bg-selected-strongest":ti("brand-20"),"bg-selected-strongest-hover":ti("brand-10"),"bg-disabled":ti("neutral-90"),"bg-selected-disabled":ti("neutral-90"),"bg-selected-stronger-disabled":ti("neutral-80"),"bg-success":ti("success-100"),"bg-success-hover":ti("success-95"),"bg-success-strong":ti("success-50"),"bg-success-strong-hover":ti("success-40"),"bg-warning":ti("warning-100"),"bg-warning-hover":ti("warning-95"),"bg-warning-strong":ti("warning-50"),"bg-warning-strong-hover":ti("warning-40"),"bg-info":ti("neutral-95"),"bg-info-hover":ti("info-95"),"bg-info-strong":ti("info-50"),"bg-info-strong-hover":ti("info-40"),"bg-error":ti("brand-100"),"bg-error-hover":ti("error-95"),"bg-error-strong":ti("error-50"),"bg-error-strong-hover":ti("error-40"),"bg-inverse":ti("neutral-40"),"bg-inverse-subtle":ti("neutral-60"),"bg-inverse-subtler":ti("neutral-70"),"bg-inverse-subtlest":ti("neutral-80"),"bg-inverse-hover":ti("neutral-30"),"bg-primary":ti("brand-20"),"bg-primary-subtle":ti("brand-60"),"bg-primary-subtler":ti("brand-80"),"bg-primary-subtlest":ti("brand-100"),"bg-available":ti("success-60"),"bg-primary-hover":ti("brand-10"),"bg-primary-subtlest-hover":ti("brand-80"),"bg-primary-subtlest-selected":ti("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ti("neutral-10"),"hyperlink-hover":ti("neutral-40"),"hyperlink-visited":ti("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ti("primary-50"),"focus-ring-inverse":ti("white")},ai={text:ti("neutral-20"),"text-subtle":ti("neutral-30"),"text-subtler":ti("neutral-50"),"text-subtlest":ti("neutral-60"),"text-primary":ti("primary-50"),"text-primary-strongest":ti("primary-20"),"text-hover":ti("primary-40"),"text-selected":ti("primary-50"),"text-selected-hover":ti("primary-40"),"text-disabled":ti("neutral-50"),"text-disabled-subtle":ti("neutral-60"),"text-disabled-subtlest":ti("neutral-80"),"text-selected-disabled":ti("neutral-20"),"text-success":ti("success-40"),"text-warning":ti("warning-40"),"text-error":ti("error-40"),"text-info":ti("info-40"),"text-inverse":ti("white"),icon:ti("neutral-50"),"icon-subtle":ti("neutral-60"),"icon-strongest":ti("neutral-20"),"icon-primary":ti("primary-50"),"icon-primary-subtle":ti("primary-60"),"icon-primary-subtlest":ti("primary-70"),"icon-hover":ti("primary-40"),"icon-selected":ti("primary-50"),"icon-selected-hover":ti("primary-40"),"icon-disabled":ti("neutral-50"),"icon-disabled-subtle":ti("neutral-60"),"icon-selected-disabled":ti("neutral-60"),"icon-success":ti("success-50"),"icon-warning":ti("warning-60"),"icon-error":ti("error-50"),"icon-error-strong":ti("error-40"),"icon-info":ti("info-50"),"icon-inverse":ti("white"),"icon-primary-inverse":ti("primary-inverse"),border:ti("neutral-90"),"border-strong":ti("neutral-70"),"border-stronger":ti("neutral-50"),"border-primary":ti("primary-50"),"border-primary-subtle":ti("primary-60"),"border-hover":ti("primary-90"),"border-hover-strong":ti("primary-60"),"border-selected":ti("primary-50"),"border-selected-subtle":ti("primary-70"),"border-selected-subtlest":ti("primary-90"),"border-selected-hover":ti("primary-40"),"border-focus":ti("primary-60"),"border-focus-strong":ti("primary-50"),"border-disabled":ti("neutral-90"),"border-selected-disabled":ti("neutral-70"),"border-success":ti("success-60"),"border-warning":ti("warning-60"),"border-error":ti("error-60"),"border-error-focus":ti("error-60"),"border-error-focus-strong":ti("error-40"),"border-error-strong":ti("error-40"),"border-info":ti("info-60"),bg:ti("white"),"bg-strong":ti("neutral-100"),"bg-stronger":ti("neutral-95"),"bg-strongest":ti("neutral-90"),"bg-hover":ti("primary-95"),"bg-hover-strong":ti("primary-90"),"bg-hover-subtle":ti("primary-100"),"bg-hover-neutral":ti("neutral-100"),"bg-hover-neutral-strong":ti("neutral-90"),"bg-selected":ti("primary-95"),"bg-selected-hover":ti("primary-90"),"bg-selected-strong":ti("primary-90"),"bg-selected-stronger":ti("primary-70"),"bg-selected-strongest":ti("primary-50"),"bg-selected-strongest-hover":ti("primary-40"),"bg-disabled":ti("neutral-95"),"bg-selected-disabled":ti("neutral-95"),"bg-selected-stronger-disabled":ti("neutral-70"),"bg-success":ti("success-100"),"bg-success-hover":ti("success-95"),"bg-success-strong":ti("success-50"),"bg-success-strong-hover":ti("success-40"),"bg-warning":ti("warning-100"),"bg-warning-hover":ti("warning-95"),"bg-warning-strong":ti("warning-50"),"bg-warning-strong-hover":ti("warning-40"),"bg-info":ti("info-100"),"bg-info-hover":ti("info-95"),"bg-info-strong":ti("info-50"),"bg-info-strong-hover":ti("info-40"),"bg-error":ti("error-100"),"bg-error-hover":ti("error-95"),"bg-error-strong":ti("error-50"),"bg-error-strong-hover":ti("error-40"),"bg-inverse":ti("neutral-20"),"bg-inverse-subtle":ti("neutral-30"),"bg-inverse-subtler":ti("neutral-50"),"bg-inverse-subtlest":ti("neutral-60"),"bg-inverse-hover":ti("neutral-40"),"bg-primary":ti("primary-50"),"bg-primary-subtle":ti("primary-60"),"bg-primary-subtler":ti("primary-95"),"bg-primary-subtlest":ti("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ti("primary-40"),"bg-primary-subtlest-hover":ti("primary-90"),"bg-primary-subtlest-selected":ti("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ti("primary-50"),"hyperlink-hover":ti("primary-40"),"hyperlink-visited":ti("primary-40"),"hyperlink-inverse":ti("primary-inverse"),"focus-ring":ti("primary-50"),"focus-ring-inverse":ti("white")},si={text:ti("neutral-100"),"text-subtle":ti("neutral-80"),"text-subtler":ti("neutral-60"),"text-subtlest":ti("neutral-50"),"text-primary":ti("primary-60"),"text-primary-strongest":ti("primary-90"),"text-hover":ti("primary-70"),"text-selected":ti("primary-60"),"text-selected-hover":ti("primary-70"),"text-disabled":ti("neutral-60"),"text-disabled-subtle":ti("neutral-50"),"text-disabled-subtlest":ti("neutral-30"),"text-selected-disabled":ti("neutral-90"),"text-success":ti("success-70"),"text-warning":ti("warning-70"),"text-error":ti("error-70"),"text-info":ti("info-70"),"text-inverse":ti("black"),icon:ti("neutral-60"),"icon-subtle":ti("neutral-50"),"icon-strongest":ti("neutral-90"),"icon-primary":ti("primary-60"),"icon-primary-subtle":ti("primary-50"),"icon-primary-subtlest":ti("primary-40"),"icon-hover":ti("primary-70"),"icon-selected":ti("primary-60"),"icon-selected-hover":ti("primary-70"),"icon-disabled":ti("neutral-60"),"icon-disabled-subtle":ti("neutral-50"),"icon-selected-disabled":ti("neutral-50"),"icon-success":ti("success-60"),"icon-warning":ti("warning-50"),"icon-error":ti("error-60"),"icon-error-strong":ti("error-70"),"icon-info":ti("info-60"),"icon-inverse":ti("black"),"icon-primary-inverse":ti("primary-inverse"),border:ti("neutral-20"),"border-strong":ti("neutral-40"),"border-stronger":ti("neutral-60"),"border-primary":ti("primary-60"),"border-primary-subtle":ti("primary-50"),"border-hover":ti("primary-20"),"border-hover-strong":ti("primary-50"),"border-selected":ti("primary-60"),"border-selected-subtle":ti("primary-40"),"border-selected-subtlest":ti("primary-20"),"border-selected-hover":ti("primary-70"),"border-focus":ti("primary-50"),"border-focus-strong":ti("primary-60"),"border-disabled":ti("neutral-20"),"border-selected-disabled":ti("neutral-40"),"border-success":ti("success-50"),"border-warning":ti("warning-50"),"border-error":ti("error-50"),"border-error-focus":ti("error-50"),"border-error-focus-strong":ti("error-70"),"border-error-strong":ti("error-70"),"border-info":ti("info-50"),bg:ti("black"),"bg-strong":ti("neutral-10"),"bg-stronger":ti("neutral-20"),"bg-strongest":ti("neutral-20"),"bg-hover":ti("primary-20"),"bg-hover-strong":ti("primary-20"),"bg-hover-subtle":ti("primary-10"),"bg-hover-neutral":ti("neutral-10"),"bg-hover-neutral-strong":ti("neutral-20"),"bg-selected":ti("primary-20"),"bg-selected-hover":ti("primary-20"),"bg-selected-strong":ti("primary-20"),"bg-selected-stronger":ti("primary-40"),"bg-selected-strongest":ti("primary-60"),"bg-selected-strongest-hover":ti("primary-70"),"bg-disabled":ti("neutral-20"),"bg-selected-disabled":ti("neutral-20"),"bg-selected-stronger-disabled":ti("neutral-40"),"bg-success":ti("success-10"),"bg-success-hover":ti("success-20"),"bg-success-strong":ti("success-60"),"bg-success-strong-hover":ti("success-70"),"bg-warning":ti("warning-10"),"bg-warning-hover":ti("warning-20"),"bg-warning-strong":ti("warning-60"),"bg-warning-strong-hover":ti("warning-70"),"bg-info":ti("info-10"),"bg-info-hover":ti("info-20"),"bg-info-strong":ti("info-60"),"bg-info-strong-hover":ti("info-70"),"bg-error":ti("error-10"),"bg-error-hover":ti("error-20"),"bg-error-strong":ti("error-60"),"bg-error-strong-hover":ti("error-70"),"bg-inverse":ti("neutral-90"),"bg-inverse-subtle":ti("neutral-80"),"bg-inverse-subtler":ti("neutral-60"),"bg-inverse-subtlest":ti("neutral-50"),"bg-inverse-hover":ti("neutral-70"),"bg-primary":ti("primary-60"),"bg-primary-subtle":ti("primary-50"),"bg-primary-subtler":ti("primary-20"),"bg-primary-subtlest":ti("primary-10"),"bg-available":"#185339","bg-primary-hover":ti("primary-70"),"bg-primary-subtlest-hover":ti("primary-20"),"bg-primary-subtlest-selected":ti("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ti("primary-60"),"hyperlink-hover":ti("primary-70"),"hyperlink-visited":ti("primary-70"),"hyperlink-inverse":ti("primary-inverse"),"focus-ring":ti("primary-60"),"focus-ring-inverse":ti("black")},li={collections:{lifesg:ni,bookingsg:ni,rbs:ni,mylegacy:ni,ccube:ni,oneservice:ni,pa:ii,a11yplayground:ai,supportgowhere:ni,imda:ni,spf:ni},defaultValue:"lifesg"},di={collections:{lifesg:oi,bookingsg:oi,rbs:oi,mylegacy:oi,ccube:oi,oneservice:oi,pa:oi,a11yplayground:si,supportgowhere:oi,imda:oi,spf:oi},defaultValue:"lifesg"},ci=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=jo(o?di:li,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?zo(i,e,s):i[e];return"function"==typeof l?l(t):l},ui={text:ci("text"),"text-subtle":ci("text-subtle"),"text-subtler":ci("text-subtler"),"text-subtlest":ci("text-subtlest"),"text-primary":ci("text-primary"),"text-primary-strongest":ci("text-primary-strongest"),"text-hover":ci("text-hover"),"text-selected":ci("text-selected"),"text-selected-hover":ci("text-selected-hover"),"text-disabled":ci("text-disabled"),"text-disabled-subtle":ci("text-disabled-subtle"),"text-disabled-subtlest":ci("text-disabled-subtlest"),"text-selected-disabled":ci("text-selected-disabled"),"text-success":ci("text-success"),"text-warning":ci("text-warning"),"text-error":ci("text-error"),"text-info":ci("text-info"),"text-inverse":ci("text-inverse"),icon:ci("icon"),"icon-subtle":ci("icon-subtle"),"icon-strongest":ci("icon-strongest"),"icon-primary":ci("icon-primary"),"icon-primary-subtle":ci("icon-primary-subtle"),"icon-primary-subtlest":ci("icon-primary-subtlest"),"icon-hover":ci("icon-hover"),"icon-selected":ci("icon-selected"),"icon-selected-hover":ci("icon-selected-hover"),"icon-disabled":ci("icon-disabled"),"icon-disabled-subtle":ci("icon-disabled-subtle"),"icon-selected-disabled":ci("icon-selected-disabled"),"icon-success":ci("icon-success"),"icon-warning":ci("icon-warning"),"icon-error":ci("icon-error"),"icon-error-strong":ci("icon-error-strong"),"icon-info":ci("icon-info"),"icon-inverse":ci("icon-inverse"),"icon-primary-inverse":ci("icon-primary-inverse"),border:ci("border"),"border-strong":ci("border-strong"),"border-stronger":ci("border-stronger"),"border-primary":ci("border-primary"),"border-primary-subtle":ci("border-primary-subtle"),"border-hover":ci("border-hover"),"border-hover-strong":ci("border-hover-strong"),"border-selected":ci("border-selected"),"border-selected-subtle":ci("border-selected-subtle"),"border-selected-subtlest":ci("border-selected-subtlest"),"border-selected-hover":ci("border-selected-hover"),"border-focus":ci("border-focus"),"border-focus-strong":ci("border-focus-strong"),"border-disabled":ci("border-disabled"),"border-selected-disabled":ci("border-selected-disabled"),"border-success":ci("border-success"),"border-warning":ci("border-warning"),"border-error":ci("border-error"),"border-error-focus":ci("border-error-focus"),"border-error-focus-strong":ci("border-error-focus-strong"),"border-error-strong":ci("border-error-strong"),"border-info":ci("border-info"),bg:ci("bg"),"bg-strong":ci("bg-strong"),"bg-stronger":ci("bg-stronger"),"bg-strongest":ci("bg-strongest"),"bg-hover":ci("bg-hover"),"bg-hover-strong":ci("bg-hover-strong"),"bg-hover-subtle":ci("bg-hover-subtle"),"bg-hover-neutral":ci("bg-hover-neutral"),"bg-hover-neutral-strong":ci("bg-hover-neutral-strong"),"bg-selected":ci("bg-selected"),"bg-selected-hover":ci("bg-selected-hover"),"bg-selected-strong":ci("bg-selected-strong"),"bg-selected-stronger":ci("bg-selected-stronger"),"bg-selected-strongest":ci("bg-selected-strongest"),"bg-selected-strongest-hover":ci("bg-selected-strongest-hover"),"bg-disabled":ci("bg-disabled"),"bg-selected-disabled":ci("bg-selected-disabled"),"bg-selected-stronger-disabled":ci("bg-selected-stronger-disabled"),"bg-success":ci("bg-success"),"bg-success-hover":ci("bg-success-hover"),"bg-success-strong":ci("bg-success-strong"),"bg-success-strong-hover":ci("bg-success-strong-hover"),"bg-warning":ci("bg-warning"),"bg-warning-hover":ci("bg-warning-hover"),"bg-warning-strong":ci("bg-warning-strong"),"bg-warning-strong-hover":ci("bg-warning-strong-hover"),"bg-info":ci("bg-info"),"bg-info-hover":ci("bg-info-hover"),"bg-info-strong":ci("bg-info-strong"),"bg-info-strong-hover":ci("bg-info-strong-hover"),"bg-error":ci("bg-error"),"bg-error-hover":ci("bg-error-hover"),"bg-error-strong":ci("bg-error-strong"),"bg-error-strong-hover":ci("bg-error-strong-hover"),"bg-inverse":ci("bg-inverse"),"bg-inverse-subtle":ci("bg-inverse-subtle"),"bg-inverse-subtler":ci("bg-inverse-subtler"),"bg-inverse-subtlest":ci("bg-inverse-subtlest"),"bg-inverse-hover":ci("bg-inverse-hover"),"bg-primary":ci("bg-primary"),"bg-primary-subtle":ci("bg-primary-subtle"),"bg-primary-subtler":ci("bg-primary-subtler"),"bg-primary-subtlest":ci("bg-primary-subtlest"),"bg-available":ci("bg-available"),"bg-primary-hover":ci("bg-primary-hover"),"bg-primary-subtlest-hover":ci("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ci("bg-primary-subtlest-selected"),"overlay-strong":ci("overlay-strong"),"overlay-subtle":ci("overlay-subtle"),hyperlink:ci("hyperlink"),"hyperlink-hover":ci("hyperlink-hover"),"hyperlink-visited":ci("hyperlink-visited"),"hyperlink-inverse":ci("hyperlink-inverse"),"focus-ring":ci("focus-ring"),"focus-ring-inverse":ci("focus-ring-inverse")},hi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i+"px")&&void 0!==r?r:Po["width-010"](t),d=null!==(n="function"==typeof a?a(t):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:ui.border(t),u=Po.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Po["width-010"](t),d=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:ui.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},fi=e=>1===e.length&&"theme"in e[0],gi=e=>(...t)=>r=>{const n=fi(t)?[]:t,o=fi(t)?t[0]:r,i=o.theme;return(0,jo(hi,null==i?void 0:i.borderScheme)[e])(...n)(o)},mi={solid:gi("solid"),"dashed-default":gi("dashed-default")},pi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},bi=e=>t=>{var r;const n=t.theme,o=jo(pi,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?zo(o,e,n.overrides.breakpoint):o[e],i},vi={"xxs-min":bi("xxs-min"),"xxs-max":bi("xxs-max"),"xs-min":bi("xs-min"),"xs-max":bi("xs-max"),"sm-min":bi("sm-min"),"sm-max":bi("sm-max"),"md-min":bi("md-min"),"md-max":bi("md-max"),"lg-min":bi("lg-min"),"lg-max":bi("lg-max"),"xl-min":bi("xl-min"),"xl-max":bi("xl-max"),"xxl-min":bi("xxl-min"),"xxs-column":bi("xxs-column"),"xs-column":bi("xs-column"),"sm-column":bi("sm-column"),"md-column":bi("md-column"),"lg-column":bi("lg-column"),"xl-column":bi("xl-column"),"xxl-column":bi("xxl-column"),"xxs-gutter":bi("xxs-gutter"),"xs-gutter":bi("xs-gutter"),"sm-gutter":bi("sm-gutter"),"md-gutter":bi("md-gutter"),"lg-gutter":bi("lg-gutter"),"xl-gutter":bi("xl-gutter"),"xxl-gutter":bi("xxl-gutter"),"xxs-margin":bi("xxs-margin"),"xs-margin":bi("xs-margin"),"sm-margin":bi("sm-margin"),"md-margin":bi("md-margin"),"lg-margin":bi("lg-margin"),"xl-margin":bi("xl-margin"),"xxl-margin":bi("xxl-margin")},yi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=vi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),xi={MaxWidth:yi("max-width"),MinWidth:yi("min-width")},wi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},$i=e=>t=>{var r;const n=t.theme,o=jo(wi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${zo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ci={none:$i("none"),xs:$i("xs"),sm:$i("sm"),md:$i("md"),lg:$i("lg"),full:$i("full")},Di={Button:{"button-radius":Ci.md,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]},Animation:{"loading-dots-spinner-colour":ui["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ui.bg,"navbar-colour-icon":ui.icon,"navbar-link-colour-text":ui.text,"navbar-link-colour-text-hover":ui["text-hover"],"navbar-link-colour-text-selected-hover":ui["text-selected-hover"]},Footer:{"footer-colour-bg":ui["bg-strong"],"footer-colour-text":ui.text,"footer-link-colour-text":ui.text,"footer-link-colour-text-hover":ui["text-hover"],"footer-disclaimer-link-colour-text":ui.text,"footer-disclaimer-link-colour-text-hover":ui["text-subtler"]}},Si={Button:{"button-radius":Ci.sm,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]},Animation:{"loading-dots-spinner-colour":ui["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ui.bg,"navbar-colour-icon":ui.icon,"navbar-link-colour-text":ui.text,"navbar-link-colour-text-hover":ui["text-hover"],"navbar-link-colour-text-selected-hover":ui["text-selected-hover"]},Footer:{"footer-colour-bg":ui["bg-strong"],"footer-colour-text":ui.text,"footer-link-colour-text":ui.text,"footer-link-colour-text-hover":ui["text-hover"],"footer-disclaimer-link-colour-text":ui.text,"footer-disclaimer-link-colour-text-hover":ui["text-subtler"]}},ki={Button:{"button-radius":Ci.sm,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]},Animation:{"loading-dots-spinner-colour":ri["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ui.bg,"navbar-colour-icon":ui.icon,"navbar-link-colour-text":ui.text,"navbar-link-colour-text-hover":ui["text-hover"],"navbar-link-colour-text-selected-hover":ui["text-selected-hover"]},Footer:{"footer-colour-bg":ui["bg-strong"],"footer-colour-text":ui.text,"footer-link-colour-text":ui.text,"footer-link-colour-text-hover":ui["text-hover"],"footer-disclaimer-link-colour-text":ui.text,"footer-disclaimer-link-colour-text-hover":ui["text-subtler"]}},Fi={collections:{default:Si,pa:{Button:{"button-radius":Ci.full,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]},Animation:{"loading-dots-spinner-colour":ui["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":ui.bg,"navbar-colour-icon":ui.icon,"navbar-link-colour-text":ui.text,"navbar-link-colour-text-hover":ui["text-hover"],"navbar-link-colour-text-selected-hover":ui["text-selected-hover"]},Footer:{"footer-colour-bg":ui["bg-strong"],"footer-colour-text":ui.text,"footer-link-colour-text":ui.text,"footer-link-colour-text-hover":ui["text-hover"],"footer-disclaimer-link-colour-text":ui.text,"footer-disclaimer-link-colour-text-hover":ui["text-subtler"]}},a11yplayground:Di,lifesg:ki,spf:{Button:{"button-radius":Ci.md,"button-default-colour-bg":ui["bg-primary"],"button-default-colour-bg-hover":ui["bg-primary-hover"],"button-default-colour-text":ui["text-inverse"],"button-secondary-colour-border":ui["border-primary"],"button-secondary-colour-text":ui["text-primary"],"button-light-colour-text":ui["text-primary"],"button-link-colour-text":ui["text-primary"]},Animation:{"loading-dots-spinner-colour":ui["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":ui.bg,"navbar-colour-icon":ui.icon,"navbar-link-colour-text":ui["text-primary-strongest"],"navbar-link-colour-text-hover":ui["text-subtler"],"navbar-link-colour-text-selected-hover":ui["text-subtler"]},Footer:{"footer-colour-bg":ui["bg-inverse"],"footer-colour-text":ui["text-inverse"],"footer-link-colour-text":ui["text-inverse"],"footer-link-colour-text-hover":ui["text-inverse"],"footer-disclaimer-link-colour-text":ui["text-inverse"],"footer-disclaimer-link-colour-text-hover":ui["text-inverse"]}}},defaultValue:"default"},Ei=(e,t)=>r=>{var n,o;const i=r.theme,a=jo(Fi,null==i?void 0:i.componentScheme);return _i((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},_i=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Oi=Ei("Button","button-radius"),Ti=Ei("Button","button-default-colour-bg"),Mi=Ei("Button","button-default-colour-bg-hover"),Ii=Ei("Button","button-default-colour-text"),Bi=Ei("Button","button-secondary-colour-border"),Ai=Ei("Button","button-secondary-colour-text"),zi=Ei("Button","button-light-colour-text"),ji=Ei("Button","button-link-colour-text"),Li={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ri=e=>t=>{var r;const n=t.theme,o=jo(Li,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?zo(o,e,n.overrides.fontSpec):o[e]},Pi={"heading-size-xxl":Ri("heading-size-xxl"),"heading-size-xl":Ri("heading-size-xl"),"heading-size-lg":Ri("heading-size-lg"),"heading-size-md":Ri("heading-size-md"),"heading-size-sm":Ri("heading-size-sm"),"heading-size-xs":Ri("heading-size-xs"),"heading-lh-xxl":Ri("heading-lh-xxl"),"heading-lh-xl":Ri("heading-lh-xl"),"heading-lh-lg":Ri("heading-lh-lg"),"heading-lh-md":Ri("heading-lh-md"),"heading-lh-sm":Ri("heading-lh-sm"),"heading-lh-xs":Ri("heading-lh-xs"),"heading-ls-xxl":Ri("heading-ls-xxl"),"heading-ls-xl":Ri("heading-ls-xl"),"heading-ls-lg":Ri("heading-ls-lg"),"heading-ls-md":Ri("heading-ls-md"),"heading-ls-sm":Ri("heading-ls-sm"),"heading-ls-xs":Ri("heading-ls-xs"),"weight-light":Ri("weight-light"),"weight-regular":Ri("weight-regular"),"weight-semibold":Ri("weight-semibold"),"weight-bold":Ri("weight-bold"),"font-family":Ri("font-family"),"body-size-baseline":Ri("body-size-baseline"),"body-size-md":Ri("body-size-md"),"body-size-sm":Ri("body-size-sm"),"body-size-xs":Ri("body-size-xs"),"body-lh-baseline":Ri("body-lh-baseline"),"body-lh-md":Ri("body-lh-md"),"body-lh-sm":Ri("body-lh-sm"),"body-lh-xs":Ri("body-lh-xs"),"body-ls-baseline":Ri("body-ls-baseline"),"body-ls-md":Ri("body-ls-md"),"body-ls-sm":Ri("body-ls-sm"),"body-ls-xs":Ri("body-ls-xs"),"form-label-size":Ri("form-label-size"),"form-description-size":Ri("form-description-size"),"form-label-lh":Ri("form-label-lh"),"form-description-lh":Ri("form-description-lh"),"form-label-ls":Ri("form-label-ls"),"form-description-ls":Ri("form-description-ls")},Hi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${Ri("font-family")};
        font-size: ${Ri(e)};
        font-weight: ${Ri(t)};
        line-height: ${Ri(r)};
        letter-spacing: ${Ri(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Ni=(e={})=>({"heading-xxl-light":Hi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Hi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Hi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Hi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Hi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Hi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Hi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Hi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Hi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Hi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Hi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Hi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Hi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Hi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Hi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Hi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Hi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Hi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Hi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Hi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Hi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Hi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Hi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Hi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Hi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Hi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Hi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Hi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Hi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Hi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Hi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Hi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Hi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Hi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Hi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Hi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Hi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Hi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Hi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Hi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Hi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Hi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Wi=Ni({disableLigatures:!0}),Yi=Ni(),Vi=Ni({disableLigatures:!0}),Ui=Ni({disableLigatures:!0}),Ki=Ni({disableLigatures:!0}),Zi={collections:{default:Yi,bookingsg:Wi,mylegacy:Yi,pa:Vi,a11yplayground:Ui,supportgowhere:Ki,sgwdigitallobby:Ki,imda:Ni({disableLigatures:!0}),spf:Ni({disableLigatures:!0}),oneservice:Ni()},defaultValue:"default"},qi=e=>t=>{var r;const n=t.theme,o=jo(Zi,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?zo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Gi={"heading-xxl-light":qi("heading-xxl-light"),"heading-xxl-regular":qi("heading-xxl-regular"),"heading-xxl-semibold":qi("heading-xxl-semibold"),"heading-xxl-bold":qi("heading-xxl-bold"),"heading-xl-light":qi("heading-xl-light"),"heading-xl-regular":qi("heading-xl-regular"),"heading-xl-semibold":qi("heading-xl-semibold"),"heading-xl-bold":qi("heading-xl-bold"),"heading-lg-light":qi("heading-lg-light"),"heading-lg-regular":qi("heading-lg-regular"),"heading-lg-semibold":qi("heading-lg-semibold"),"heading-lg-bold":qi("heading-lg-bold"),"heading-md-light":qi("heading-md-light"),"heading-md-regular":qi("heading-md-regular"),"heading-md-semibold":qi("heading-md-semibold"),"heading-md-bold":qi("heading-md-bold"),"heading-sm-light":qi("heading-sm-light"),"heading-sm-regular":qi("heading-sm-regular"),"heading-sm-semibold":qi("heading-sm-semibold"),"heading-sm-bold":qi("heading-sm-bold"),"heading-xs-light":qi("heading-xs-light"),"heading-xs-regular":qi("heading-xs-regular"),"heading-xs-semibold":qi("heading-xs-semibold"),"heading-xs-bold":qi("heading-xs-bold"),"body-baseline-light":qi("body-baseline-light"),"body-baseline-regular":qi("body-baseline-regular"),"body-baseline-semibold":qi("body-baseline-semibold"),"body-baseline-bold":qi("body-baseline-bold"),"body-md-light":qi("body-md-light"),"body-md-regular":qi("body-md-regular"),"body-md-semibold":qi("body-md-semibold"),"body-md-bold":qi("body-md-bold"),"body-sm-light":qi("body-sm-light"),"body-sm-regular":qi("body-sm-regular"),"body-sm-semibold":qi("body-sm-semibold"),"body-sm-bold":qi("body-sm-bold"),"body-xs-light":qi("body-xs-light"),"body-xs-regular":qi("body-xs-regular"),"body-xs-semibold":qi("body-xs-semibold"),"body-xs-bold":qi("body-xs-bold"),"form-label":qi("form-label"),"form-description":qi("form-description")},Xi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Qi=e=>t=>{var r;const n=t.theme,o=jo(Xi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?zo(o,e,n.overrides.motion):o[e]},Ji={"duration-150":Qi("duration-150"),"duration-250":Qi("duration-250"),"duration-350":Qi("duration-350"),"duration-500":Qi("duration-500"),"duration-800":Qi("duration-800"),"duration-1000":Qi("duration-1000"),"ease-default":Qi("ease-default"),"ease-standard":Qi("ease-standard"),"ease-entrance":Qi("ease-entrance"),"ease-exit":Qi("ease-exit")},ea=(e,t,r)=>n=>{const o=ci(t)(n)||ti(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},ta={collections:{default:{"xs-subtle":ea("0 0 4px 1px","neutral-50",.24),"xs-strong":ea("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":ea("0 0 4px 1px","border-focus",.5),"xs-error-strong":ea("0 0 4px 1px","border-error",.5),"sm-subtle":ea("0 2px 4px 0","neutral-50",.24),"sm-strong":ea("0 2px 4px 0","neutral-50",.5),"md-subtle":ea("0 2px 8px 0","neutral-50",.24),"md-strong":ea("0 2px 8px 0","neutral-50",.5),"lg-subtle":ea("0 2px 12px 1px","neutral-50",.24),"lg-strong":ea("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},ra=e=>t=>{var r;const n=t.theme,o=jo(ta,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?zo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},na={"xs-subtle":ra("xs-subtle"),"xs-strong":ra("xs-strong"),"xs-focus-strong":ra("xs-focus-strong"),"xs-error-strong":ra("xs-error-strong"),"sm-subtle":ra("sm-subtle"),"sm-strong":ra("sm-strong"),"md-subtle":ra("md-subtle"),"md-strong":ra("md-strong"),"lg-subtle":ra("lg-subtle"),"lg-strong":ra("lg-strong")},oa={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},ia=e=>t=>{var r;const n=t.theme,o=jo(oa,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${zo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},aa={"spacing-0":ia("spacing-0"),"spacing-4":ia("spacing-4"),"spacing-8":ia("spacing-8"),"spacing-12":ia("spacing-12"),"spacing-16":ia("spacing-16"),"spacing-20":ia("spacing-20"),"spacing-24":ia("spacing-24"),"spacing-32":ia("spacing-32"),"spacing-40":ia("spacing-40"),"spacing-48":ia("spacing-48"),"spacing-64":ia("spacing-64"),"spacing-72":ia("spacing-72"),"layout-xs":ia("layout-xs"),"layout-sm":ia("layout-sm"),"layout-md":ia("layout-md"),"layout-lg":ia("layout-lg"),"layout-xl":ia("layout-xl"),"layout-xxl":ia("layout-xxl"),"layout-xxxl":ia("layout-xxxl")},sa=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),la=Object.assign(Object.assign({},ui),{Primitive:ri}),da=Object.assign(Object.assign({},Gi),{Spec:Pi}),ca=Ji,ua=Object.assign(Object.assign({},Po),{Util:mi}),ha=aa,fa=Ci,ga=na,ma=vi,pa=xi,ba={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},va={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ya={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},xa={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},wa={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},$a={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ca={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Da={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Sa={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ka={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Fa={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Ea={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ba),{light:sa(ba,"light"),dark:sa(ba,"dark")}),Object.assign(Object.assign({},va),{light:sa(va,"light"),dark:sa(va,"dark")}),Object.assign(Object.assign({},ya),{light:sa(ya,"light"),dark:sa(ya,"dark")}),Object.assign(Object.assign({},xa),{light:sa(xa,"light"),dark:sa(xa,"dark")}),Object.assign(Object.assign({},wa),{light:sa(wa,"light"),dark:sa(wa,"dark")}),Object.assign(Object.assign({},$a),{light:sa($a,"light"),dark:sa($a,"dark")}),Object.assign(Object.assign({},Ca),{light:sa(Ca,"light"),dark:sa(Ca,"dark")}),Object.assign(Object.assign({},Da),{light:sa(Da,"light"),dark:sa(Da,"dark")}),Object.assign(Object.assign({},Sa),{light:sa(Sa,"light"),dark:sa(Sa,"dark")}),Object.assign(Object.assign({},ka),{light:sa(ka,"light"),dark:sa(ka,"dark")}),Object.assign(Object.assign({},Fa),{light:sa(Fa,"light"),dark:sa(Fa,"dark")}),Object.assign(Object.assign({},Ea),{light:sa(Ea,"light"),dark:sa(Ea,"dark")});const _a=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Oa=(e,t,r=!1)=>F`
        ${da[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Ta=e=>{if(e)return F`
            ${_a(e)}
        `},Ma=(e,t,r,n,o)=>F`
    ${Oa(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${Ta(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Ta(r)}
        `)(r,n,o)}
    color: ${la.text};
`,Ia=k.div`
    ${e=>Ma(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Ba=k.a`
    ${e=>{var t;return F`
        ${Oa(e.$textStyle,e.$weight||"regular")}
        color: ${la.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${la["text-hover"]};
        }
    `}}
`,Aa=k(T)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var za;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=ke(n,["weight","inline","paragraph","maxLines"]);return e(Ia,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=ke(r,["weight","inline","paragraph","maxLines"]);return e(Ia,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=ke(n,["weight","children","external","underlineStyle"]);return t(Ba,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},d,{children:[a,s&&e(Aa,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(za||(za={}));const ja=k.div`
    border-radius: ${fa.md};
    background: ${la.bg};
    padding: ${ha["spacing-16"]} ${ha["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?F`
                  border: ${ua["width-010"]} ${ua.solid}
                      ${la.border};
              `:F`
                  box-shadow: ${ga["md-subtle"]};
              `}}
`,La=k.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ha["spacing-24"]};
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
                background-color: ${la["bg-hover-neutral"]};
            `}
    }
`,Ra=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=ke(t,["children","focusHighlight","focusOutline","type"]);return e(La,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Pa=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${la.bg};
    box-shadow: ${ga["lg-strong"]};
    border-radius: ${fa.lg};
    overflow: hidden;

    ${pa.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Ha=k(Ra)`
    position: absolute;
    top: var(--close-button-top-inset, ${ha["spacing-16"]});
    right: var(--close-button-right-inset, ${ha["spacing-16"]});
    padding: 0;
    color: ${la.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${pa.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ha["spacing-20"]});
    }
`,Na=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=ke(r,["id","children","onClose","showCloseButton"]);return t(Pa,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Ha,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(M,{})}),o]}))},Wa=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&da[`${t}-regular`]}

        strong {
            font-weight: ${da.Spec["weight-semibold"]};
            ${t&&da[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${da.Spec["weight-semibold"]};
            ${t&&da[`${t}-semibold`]}
            color: ${la.hyperlink};
            text-decoration: underline;

            svg {
                color: ${la["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${la["hyperlink-hover"]};

                svg {
                    color: ${la["icon-hover"]};
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
    `},Ya=k.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,Va=k((t=>{var{children:r}=t,n=ke(t,["children"]);const o=n["data-testid"]||"card";return e(ja,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(za.BodyBL,{children:r}):r}))}))`
    color: ${la.text};
    ${Wa({textSize:"body-md"})}

    ${pa.MaxWidth.sm} {
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
        background: ${la["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${fa.full};
        background-clip: padding-box;
    }
`;k(Na)`
    padding: 3.5rem 1.25rem 2.5rem;
`,k.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${la.text};
    ${Wa({textSize:"body-md"})}
`;const Ua=k.div`
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
`,Ka=k.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?la["overlay-subtle"]:la["overlay-strong"]};
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
`;var Za;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Za||(Za={}));const qa=()=>{const[e,t]=s(void 0),r=I();return h((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Za.Change,e),r.events.emit(Za.Ready),()=>r.events.off(Za.Change,e)}),[r]),e},Ga=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:f,id:g})=>{const[m,p]=s(null),[b,v]=s(),[y]=s((()=>Je.generate())),x=A(),w=a(),$=a(null),C=i&&o.cloneElement(i,{ref:$}),D=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root",S=null!=f?f:b?99999:99998;(e=>{const t=I();h((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Za.Change,r)}),[t,e]),h((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Za.Change,r)};return null==t||t.events.on(Za.Ready,r),()=>null==t?void 0:t.events.off(Za.Ready,r)}),[t,e])})(S),h((()=>(O(),p(E()),()=>{j(),M().length<1&&(F()&&(L("remove"),P()),T("remove"))})),[]),h((()=>{if(t){const e=_();k(e),B(),F()&&1===M().length&&(R(),L("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{j(),F()&&M().length<1&&(L("remove"),P());const e=setTimeout((()=>{M().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},F=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),E=()=>document&&r?document.getElementById(r):document?document.body:null,_=()=>M().length>0,O=()=>{if(!document.getElementById(Qa)){const e=document.createElement("style");e.id=Qa;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ja} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ja}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${es} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${ts}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Ja);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ja):document.body.classList.add(Ja)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},B=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},j=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},L=e=>{if(!F())return;const t=document.body.classList.contains(es);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(es):document.body.classList.add(es)},R=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(ts,t)},P=()=>{if(!F())return;const e=document.body.style.getPropertyValue(ts);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},H=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return m?J.createPortal(e(Ua,{id:D,"data-testid":D,$show:t,$zIndex:S,children:i&&e(z,{id:x,children:e(Ka,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:d,$disableTransition:c,onClick:H,children:C})})}),m):null},Xa=t=>e(B,{children:e(Ga,Object.assign({},t))}),Qa="lifesg-ds-overlay-stylesheet",Ja="lifesg-ds-overlay-open",es="lifesg-ds-overlay-scroll-lock",ts="--lifesg-ds-overlay-scroll-y",rs=()=>{const[e,t]=s(),[r,n]=s(),o=g((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=g((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return h((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}},ns=m({onClose:()=>{}}),os=k.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${pa.MaxWidth.sm} {
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
            transition: all ${ca["duration-250"]}
                ${ca["ease-entrance"]}
            transition-delay: ${ca["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${ca["duration-250"]}
                ${ca["ease-exit"]};
        }
    `}
`,is=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,as=k.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,ss=k.div`
    width: 40rem;
    margin: ${ha["spacing-64"]} auto;
    background: ${la.bg};
    box-shadow: ${ga["xs-strong"]};
    border-radius: ${fa.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${ma["xxl-margin"]}px * 2);

    ${pa.MaxWidth.xl} {
        max-width: calc(100% - ${ma["xl-margin"]}px * 2);
    }

    ${pa.MaxWidth.lg} {
        max-width: calc(100% - ${ma["lg-margin"]}px * 2);
    }

    ${pa.MaxWidth.md} {
        max-width: calc(100% - ${ma["md-margin"]}px * 2);
    }

    ${pa.MaxWidth.sm} {
        max-width: calc(100% - ${ma["sm-margin"]}px * 2);
    }

    ${pa.MaxWidth.xs} {
        max-width: calc(100% - ${ma["xs-margin"]}px * 2);
    }

    ${pa.MaxWidth.xxs} {
        max-width: calc(100% - ${ma["xxs-margin"]}px * 2);
    }
`,ls=k.div`
    margin-right: ${ha["spacing-16"]};
    margin-left: auto;
    margin-top: ${ha["spacing-16"]};
    margin-bottom: ${ha["spacing-16"]};
`,ds=k(Ra)`
    padding: 0;
    color: ${la.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,cs=k.div`
    margin-right: ${ha["spacing-64"]};
    margin-left: ${ha["spacing-64"]};

    ${pa.MaxWidth.sm} {
        margin-right: ${ha["spacing-20"]};
        margin-left: ${ha["spacing-20"]};
    }
`,us=k.div`
    margin-right: ${ha["spacing-64"]};
    margin-left: ${ha["spacing-64"]};

    ${pa.MaxWidth.sm} {
        margin-right: ${ha["spacing-20"]};
        margin-left: ${ha["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${ha["spacing-32"]};
    row-gap: ${ha["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${pa.MaxWidth.md} {
        flex-direction: column;
    }
`,hs=k.div`
    :where(& > ${cs}:last-child) {
        margin-bottom: ${ha["spacing-64"]};
    }

    :where(& > ${us}:not(:first-child)) {
        margin-top: ${ha["spacing-32"]};
    }

    :where(& > ${us}:last-child) {
        margin-bottom: ${ha["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?F`
                  :where(& > ${cs}:first-child),
                  :where(& > ${us}:first-child) {
                      margin-top: 0;
                  }
              `:F`
                  :where(& > ${cs}:first-child),
                  :where(& > ${us}:first-child) {
                      margin-top: ${ha["spacing-64"]};
                  }
              `}
`,fs=t=>{var{"data-testid":r="modal-close-button"}=t,n=ke(t,["data-testid"]);const{onClose:o}=p(ns);return e(ls,Object.assign({"data-testid":r},n,{children:e(ds,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(M,{"aria-hidden":!0})})}))};fs.displayName="ModalV2.CloseButton";const gs=t=>{var{"data-testid":r="modal-content",children:n}=t,o=ke(t,["data-testid","children"]);return e(cs,Object.assign({"data-testid":r},o,{children:n}))};gs.displayName="ModalV2.Content";const ms=e=>{var{"data-testid":r="modal-footer",primaryButton:n,secondaryButton:o}=e,i=ke(e,["data-testid","primaryButton","secondaryButton"]);return t(us,Object.assign({"data-testid":r},i,{children:[n,o]}))};ms.displayName="ModalV2.Footer";const ps=e=>{var{id:r,"data-testid":n="modal-card",children:i}=e,a=ke(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((t=>((e,t)=>E(e.type)?e.type.target===t:e.type===t)(t,e))),l=s(fs),d=s(gs),c=s(ms),u=!!l;return t(ss,Object.assign({id:r,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[t(hs,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};ps.displayName="ModalV2.Card";const bs=Object.assign((t=>{var{id:r,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0,"data-testid":f="modal"}=t,g=ke(t,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:m,offsetTop:p}=rs(),{refs:b,context:v}=j({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:y,status:x}=L(v,{duration:300}),w=R(v,{outsidePress:!1,enabled:!!o}),{getFloatingProps:$}=P([w]);return h((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[u,n]),e(Xa,{"data-testid":`${f}-overlay`,show:y,enableOverlayClick:s,onOverlayClick:c,id:r,rootId:l,zIndex:d,children:e(os,Object.assign({$show:y,$animationFrom:i,"data-testid":f,$verticalHeight:m,$offsetTop:p},g,{"data-status":x,children:e(ns.Provider,{value:{onClose:o},children:y&&e(H,{context:v,initialFocus:b.floating,children:e(is,{children:e(as,Object.assign({ref:b.setFloating},$(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:ps,CloseButton:fs,Content:gs,Footer:ms}),vs=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:d,id:c}=n,u=ke(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",f=p(_),g=ma["sm-max"]({theme:f}),m=or.useMediaQuery({maxWidth:g}),b=()=>{a&&a()},v=()=>"string"==typeof o?e(za.BodyMD,{children:o}):o;return t(r,{children:[i&&e(Ya,Object.assign({tabIndex:0,"data-testid":h},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(Va,{$maxHeight:s,$overflow:l,children:v()})})),m&&e(bs,{show:null!=i&&i,onOverlayClick:b,onClose:b,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:t(bs.Card,{children:[e(bs.Content,{children:v()}),e(bs.CloseButton,{})]})})]})},ys=k.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,xs=n=>{var o,i,{children:l,popoverContent:d,trigger:c="click",position:u="top",zIndex:h,rootNode:f,customOffset:g,delay:m,onPopoverAppear:b,onPopoverDismiss:v,popoverAriaLabel:y,enableFlip:x=!0,enableResize:w=!1,overflow:$="auto",triggerOnFocus:C=!1,isModal:D=!0}=n,S=ke(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[k,F]=s(!1),E=a(null),O=a(null),T=p(_),M=ma["sm-max"]({theme:T}),I=or.useMediaQuery({maxWidth:M}),[B,A]=s(0),z=`${a(Je.generate()).current}-popover`,{refs:L,floatingStyles:Q,context:J}=j({open:k,placement:u,whileElementsMounted:N,middleware:[W(null!=g?g:16),x&&Y(),V({limiter:U()}),w&&K({apply({availableHeight:e}){A(e)}})],onOpenChange:e=>{F(e),k!==e&&de(e)}}),ee=qa(),te="hover"===(I?"click":c),re=Z(J,{ignoreMouse:te}),ne=R(J),oe=q(J,{enabled:te,delay:{open:null!==(o=null==m?void 0:m.open)&&void 0!==o?o:0,close:null!==(i=null==m?void 0:m.close)&&void 0!==i?i:500}}),ie=G(J,{enabled:C}),{getReferenceProps:ae,getFloatingProps:se}=P([re,ne,oe,ie]),le=()=>{F(!1),de(!1)},de=e=>{e&&b&&b(),!e&&v&&v()};return t(r,{children:[e(ys,Object.assign({ref:e=>{E.current=e,L.setReference(e)}},ae({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),S,{children:l})),k&&e(X,{root:f,children:e(H,Object.assign({context:J},!D&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{O.current=e,L.setFloating(e)},onBlur:e=>{var t;const r=null!==(t=e.relatedTarget)&&void 0!==t?t:document.activeElement;r&&(e=>{var t;if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const r=E.current,n=null===(t=O.current)||void 0===t?void 0:t.parentElement;return!!r&&r.contains(e)||!!n&&n.contains(e)})(r)||(F(!1),de(!1))},style:Object.assign(Object.assign({},Q),{outline:"none",zIndex:null!=h?h:ee})},se(),{children:"function"==typeof d?d(w?{maxHeight:B,overflow:$}:{}):e(vs,{visible:!0,onMobileClose:le,maxHeight:w?B:void 0,overflow:w?$:void 0,ariaLabel:y,id:z,children:d})}))}))})]})},ws=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},$s=k.span`
    color: ${la["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ws(e)}

    &:hover,
    &:focus-visible {
        color: ${la["text-hover"]};
        ${({$hoverStyle:e})=>ws(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Cs=k.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Ds=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=ke(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!o;return e(xs,Object.assign({},l,{children:t($s,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[o,i&&e(Cs,{$standalone:!d,children:i})]})}))},Ss=k.div`
    padding-left: ${ha["spacing-4"]};
    display: inline;
`,ks=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(Ss,{children:e(Ds,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(S,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},Fs=k.div`
    margin-bottom: ${ha["spacing-8"]};
`,Es=k.label`
    color: ${la["text-subtle"]};
    display: inline-block;

    ${da["form-label"]}
    ${Wa()}
    font-weight: ${da.Spec["weight-semibold"]};
`,_s=k(te)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${la["icon-error-strong"]};
`,Os=k.div`
    ${da["body-sm-semibold"]}
    display: flex;
    gap: ${ha["spacing-4"]};
    margin-top: ${ha["spacing-8"]};
`,Ts=k.p`
    color: ${la["text-error"]};
    margin-bottom: 0;
    outline: none;
`,Ms=k.span`
    ${da["form-description"]}
    color: ${la["text-subtler"]};
    display: block;
`,Is=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:d}=r,c=ke(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(Fs,{className:l,style:d,"data-testid":s,children:[t(Es,Object.assign({id:n},c,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(ks,{addon:i}):null)]})),"string"==typeof a?e(Ms,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},Bs=r=>t(Os,{children:[e(_s,{"aria-hidden":!0}),e(Ts,Object.assign({},r))]}),As=k.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:g}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${xi.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${xi.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${xi.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${xi.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${xi.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${xi.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${g||1};
            }
        `}}
`,zs=o.forwardRef(((t,r)=>{const n=p(_),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=t,u=ke(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(As,Object.assign({ref:r},(()=>{const e=vi["xxl-column"]({theme:n}),t=vi["xl-column"]({theme:n}),r=vi["lg-column"]({theme:n}),u=vi["md-column"]({theme:n}),f=vi["sm-column"]({theme:n}),g=vi["xs-column"]({theme:n}),m=vi["xxs-column"]({theme:n}),p=h(o||i||a||s||l||d||c,e,"xxl"),b=h(i||a||s||l||d||c,t,"xl"),v=h(a||s||l||d||c,r,"lg"),y=h(s||l||d||c,u,"md"),x=h(l||d||c,f,"sm"),w=h(d||c,g,"xs"),$=h(c,m,"xxs");return{$xxlStart:p.start,$xxlSpan:p.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),js={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ls=e=>Object.keys(js).reduce(((t,r)=>{const n=js[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Rs=Ls("max-width"),Ps=(Ls("min-width"),k.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Rs.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Rs.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Hs=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=ke(t,["mobileCols","tabletCols","desktopCols"]);return e(Ps,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Ns(i||o||n),a=Ns(e),s=Ns(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ns=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Ws=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${ha["spacing-32"]};
    }
`,Ys=k.div`
    ${Ws}
`,Vs=k(zs)`
    ${Ws}
`,Us=k(Hs)`
    ${Ws}
`,Ks=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:l,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:v,xlCols:y,xxlCols:x,"data-testid":w,"data-error-testid":$})=>{const C=!l&&(d||u||h)?"v2-grid":!l&&(f||g||m||p||v||y||x)?"grid":l||"flex",D="string"==typeof n?n.trim():n,[S]=s((()=>Je.generate())),k=`${null!=o?o:S}-label`,F=`${null!=o?o:S}-label-subtitle`,E=`${null!=o?o:S}-error-message`;const _=(e=>{switch(e){case"v2-grid":return Us;case"grid":return Vs;case"flex":return Ys}})(C);return t(_,Object.assign({"data-testid":w},(e=>{switch(e){case"v2-grid":return{mobileCols:d,tabletCols:u,desktopCols:h};case"grid":return{xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:v,xlCols:y,xxlCols:x};case"flex":return}})(C),{children:[r&&e(Is,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i},r)),(()=>{const e={"aria-invalid":!!n,"aria-describedby":[D?E:void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?F:void 0].filter(Boolean).join(" ")||void 0,"aria-labelledby":r?k:void 0};return b.map(a,(t=>c(t,e)))})(),D&&t(Os,{children:[e(_s,{"aria-hidden":!0}),e(Ts,{id:E,tabIndex:0,"data-testid":null!=$?$:o?`${o}-error-message`:"error-message",children:D})]})]}))},Zs=e=>"small"===e?2.5:3,qs=k.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Zs(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Gs=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ha["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Zs(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${fa.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${la["border-focus"]};
    }
`,Xs=k.button`
    ${Gs}
    cursor: pointer;
`;k.div`
    ${Gs}
`;const Qs=O`
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
`;k.div`
    position: relative;
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    background: ${la.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${la["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${la["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Qs} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${la["bg-disabled"]};

                ${Xs} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${la.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${Xs} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${la["border-error"]};

                &:focus-within {
                    border-color: ${la["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${la["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,k.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ca["duration-250"]} ${ca["ease-default"]};
    margin-left: ${ha["spacing-16"]};
`,k(re)`
    color: ${la.icon};
`,k.div`
    height: 1px;
    background: ${la.border};
    margin: 0 ${ha["spacing-8"]};
`;const Js=k.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${la["text-disabled"]};
            `}}
`,el=k.div`
    ${e=>"small"===e.$variant?da["body-md-regular"]:da["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${_a(1)}
                `}}
    overflow: hidden;
`,tl=k(el)`
    color: ${la["text-subtler"]};
`,rl=e=>"right"===e?"bottom-end":"bottom-start",nl=m({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),ol=()=>p(nl),il=({enabled:n,isOpen:o,onOpen:i,onClose:s,onDismiss:l,renderElement:d,renderDropdown:c,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:g="left",fitAvailableHeight:m,rootNode:b,positionRef:v})=>{var y;const x=p(_),w=ma["sm-max"]({theme:x}),$=a(null),{width:C=0}=qt({targetRef:null!=v?v:$,handleHeight:!1}),D={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:F}=j({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==s||s(r))},whileElementsMounted:N,placement:rl(g),middleware:[W(f),Y(),V({limiter:U()}),K({apply({availableHeight:e,elements:t}){!m||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),E=qa(),{isMounted:O,styles:T}=Q(F,{initial:{opacity:0},open:{opacity:1},duration:300}),M=Z(F,{enabled:n,toggle:h,keyboardHandlers:h}),I=R(F,{enabled:n}),{getReferenceProps:B,getFloatingProps:A}=P([M,I]),z={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),k),{zIndex:null!==(y=null!=u?u:E)&&void 0!==y?y:50}),setFloatingRef:S.setFloating,getFloatingProps:A};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,S.setReference(e)}},B(),{children:d()})),O&&e(X,{root:b,children:e(H,{context:F,modal:!1,initialFocus:-1,returnFocus:!1,children:e(nl.Provider,{value:z,children:c(z)})})})]})},al=k.div`
    --vertical-inset: ${ha["spacing-24"]};
    --horizontal-inset: ${ha["spacing-20"]};
    --header-bottom-spacing: ${ha["spacing-4"]};

    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${pa.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,sl=k.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,ll=e=>Xe()?e:e?"true":void 0,dl=(...e)=>e.filter((e=>!!e)).join(" "),cl=k.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ul=O`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,hl=k.div`
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
    animation: ${ul} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,fl=k(hl)`
    animation-delay: -0.45s;
`,gl=k(hl)`
    animation-delay: -0.3s;
`,ml=k(hl)`
    animation-delay: -0.15s;
`,pl=({color:r,className:n,size:o})=>t(cl,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(hl,{id:"inner1"}),e(fl,{id:"inner2"}),e(gl,{id:"inner3"}),e(ml,{id:"inner4"})]}),bl=k.button`
    padding: ${ha["spacing-8"]} ${ha["spacing-16"]};
    min-width: 4rem;
    border: ${ua["width-010"]} ${ua.solid} transparent;
    transition: all ${ca["duration-250"]} ${ca["ease-default"]};
    border-radius: ${Oi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${la.bg};
                    border-color: ${e.$buttonIsDanger?la["border-error-strong"]:Bi};

                    color: ${e.$buttonIsDanger?la["text-error"]:Ai};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${la["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${la.bg};
                    border-color: ${la.border};

                    color: ${e.$buttonIsDanger?la["text-error"]:zi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${la["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?la["text-error"]:ji};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${la["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${la["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${la["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?la["bg-error-strong"]:Ti};

                    ${pa.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ii};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?la["bg-error-strong-hover"]:Mi};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${da["body-md-semibold"]}

                    ${pa.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${da["heading-md-semibold"]}

                    ${pa.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${da["heading-xs-semibold"]}

                    ${pa.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,vl=k(pl)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,yl=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),xl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ke(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(bl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(vl,{$hasChildren:yl(o)}),e("span",{children:o})]}))};xl.displayName="Button.Default";const wl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ke(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(bl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(vl,{$hasChildren:yl(o)}),e("span",{children:o})]}))};wl.displayName="Button.Small";const $l=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ke(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(bl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(vl,{$hasChildren:yl(o)}),e("span",{children:o})]}))};$l.displayName="Button.Large";const Cl={Default:o.forwardRef(xl),Small:o.forwardRef(wl),Large:o.forwardRef($l)},Dl=F`
    color: ${la.icon};
    height: 1rem;
    width: 1rem;
`,Sl=k(ne)`
    ${Dl}
`,kl=k(oe)`
    ${Dl}
`,Fl=k(re)`
    ${Dl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,El=k.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,_l=k.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ol=k.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Tl=k.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${la.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Ml=k.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Il=k.div`
    display: flex;
`,Bl=k.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${Fl} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Al=k.span`
    ${da["body-md-regular"]}
    color: ${la.text};
`,zl=k.div`
    display: flex;
`,jl=k(Ra)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,Ll=k.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Rl=k(Cl.Small)`
    flex: 1;
`,Pl=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Hl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${fa.md};
    margin: 0 0.5rem;
    transition: ${ca["duration-150"]} ${ca["ease-default"]};

    // default styles
    ${da["body-md-regular"]}
    border-radius: ${fa.md};
    border: ${ua["width-010"]} ${ua.solid} transparent;
    background-clip: border-box;
    color: ${la.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?F`
                background: ${la["bg-selected"]};
                border-color: ${la["border-selected"]};
                color: ${la["text-selected"]};
                font-weight: ${da.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${la["bg-selected-hover"]};
                        border-color: ${la["border-selected-hover"]};
                        color: ${la["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${la["text-primary"]};
                font-weight: ${da.Spec["weight-semibold"]};
            `:r?F`
                color: ${la["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${la["bg-selected-hover"]};
                    border-color: ${la["border-selected-hover"]};
                    color: ${la["text-selected-hover"]};
                    font-weight: ${da.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${la["bg-hover"]};
                color: ${la["text-hover"]};
                font-weight: ${da.Spec["weight-semibold"]};
            }
        `}}
`,Nl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onMonthSelect:f})=>{const g=v((()=>We.generateMonths(Te(t))),[t]),m=a(new Array(g.length).fill(null)),[p,b]=s(g.findIndex((e=>e.isSame(i,"month"))));h((()=>{var e;null!==p&&(null===(e=m.current[p])||void 0===e||e.focus())}),[p,g]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!We.isWithinRange(n,d?Te(d):void 0,c?Te(c):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":Te().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||u,month:t,variant:a,tabIndex:s}};return g.length?e(Pl,{onBlur:()=>{b(null)},children:g.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(Hl,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=g.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<g.length&&(e.preventDefault(),b(o))})(e,t,!o)},children:a},a)}))}):null},Wl=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Yl=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${ca["duration-150"]} ${ca["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${da["body-md-regular"]}
    border-radius: ${fa.md};
    border: ${ua["width-010"]} ${ua.solid} transparent;
    background-clip: border-box;
    color: ${la.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?F`
                background: ${la["bg-selected"]};
                border-color: ${la["border-selected"]};
                color: ${la["text-selected"]};
                font-weight: ${da.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${la["bg-selected-hover"]};
                        border-color: ${la["border-selected-hover"]};
                        color: ${la["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${la["text-primary"]};
                font-weight: ${da.Spec["weight-semibold"]};
            `:"other-decade"===e||r?F`
                color: ${la["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${la["bg-selected-hover"]};
                    border-color: ${la["border-selected-hover"]};
                    color: ${la["text-selected-hover"]};
                    font-weight: ${da.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${la["bg-hover"]};
                color: ${la["text-hover"]};
                font-weight: ${da.Spec["weight-semibold"]};
            }
        `}}
`,Vl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onYearSelect:f,setCalendarDate:g})=>{const m=v((()=>We.generateDecadeOfYears(Te(t))),[t]),p=a(new Array(m.length).fill(null)),[b,y]=s(t);h((()=>{var e;if(null===b)return;const t=m.findIndex((e=>e.isSame(b,"year")));t>=0&&(null===(e=p.current[t])||void 0===e||e.focus())}),[b,m]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!We.isWithinRange(a,d?Te(d):void 0,c?Te(c):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":Te().isSame(e,"year")?"current-year":"default",l=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||u,year:n,variant:s,tabIndex:l}};return m.length?e(Wl,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(Yl,{ref:e=>{p.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),g(n),y(n))})(e,t,!o)},children:a},a)}))}):null},Ul=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:u,selectedStartDate:f,selectedEndDate:g,selectWithinRange:m,dynamicHeight:p=!1,allowDisabledSelection:b,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:D,getRightArrowDate:S,isLeftArrowDisabled:k,isRightArrowDisabled:F,getMonthHeaderLabel:E,getYearHeaderLabel:_,isFocusable:O=!1}=n,T=ke(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,I]=s(qe.toDayjs(l)),[B,A]=s(qe.toDayjs(l)),[z,j]=s("default"),L=a(null),R=a(null),P=a(null),H=a(null);y(o,(()=>({defaultView(){j("default")},resetView(){const e=qe.toDayjs(l);I(e),A(e),j("default")},setCalendarDate(e){const t=qe.toDayjs(e);I(t),A(t)}}))),h((()=>{const e=qe.toDayjs(l);I(e),A(e)}),[l]),h((()=>{G(B)}),[B]);const N=()=>{var e;"month-options"!==z?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),I(B))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(t=H.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!We.isWithinRange(t,d?Te(d):void 0,c?Te(c):void 0,"month"))return;I(t),"default"===z&&A(t)}},Y=()=>{"default"!==z?(j("default"),I(B)):j("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===z?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!We.isWithinRange(t,d?Te(d):void 0,c?Te(c):void 0,"year"))return;I(t),"default"===z&&A(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(M):M.subtract(1,"month");switch(z){case"default":A(t),I(t);break;case"month-options":I((e=>e.subtract(1,"year")));break;case"year-options":I((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(M):M.add(1,"month");switch(z){case"default":A(t),I(t);break;case"month-options":I((e=>e.add(1,"year")));break;case"year-options":I((e=>e.add(10,"year")))}},Z=e=>{I(e),A(e),x||j("default")},q=()=>{const e=qe.toDayjs(l);I(e),A(e),"default"===z?X("reset"):j("default")},G=e=>{v&&v(e)},X=e=>{$&&$(e)},Q=()=>{if(!d||b)return!1;const e=Te(d);return"month-options"===z?!We.isPreviousYearWithinRange(M,e):"year-options"===z?!We.isPreviousDecadeWithinRange(M,e):k?k(M):!We.isPreviousMonthWithinRange(M,e)},J=()=>{if(!c||b)return!1;const e=Te(c);return"month-options"===z?!We.isNextYearWithinRange(M,e):"year-options"===z?!We.isNextDecadeWithinRange(M,e):F?F(M):!We.isNextMonthWithinRange(M,e)},ee=()=>{const n=E?E(M):M.format("MMM"),o=Te(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=We.getStartEndDecade(M);return`${e} to ${t}`}return _?_(M):M.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(Bl,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:N,onKeyDown:W,tabIndex:O?0:-1,children:[e(Al,{children:n}),e(Fl,{})]}),t(Bl,{ref:H,"aria-label":a[z],type:"button",$expanded:"default"!==z,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:O?0:-1,children:[e(Al,{children:i}),e(Fl,{})]})]})},te=()=>{switch(z){case"month-options":return e(Nl,{calendarDate:M,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:g,viewCalendarDate:B,isNewSelection:!!m,onMonthSelect:Z,allowDisabledSelection:b});case"year-options":return e(Vl,{setCalendarDate:I,calendarDate:M,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:g,viewCalendarDate:B,isNewSelection:!!m,onYearSelect:Z,allowDisabledSelection:b});default:return null}};return t(El,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":B.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[z];return t(Ml,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Il,{children:ee()}),t(zl,{children:[e(jl,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(Sl,{})}),e(jl,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:e(kl,{})})]})]})})(),e(_l,{children:(()=>{const n="function"==typeof i?i({calendarDate:B,currentView:z}):i;if(p)return t(r,{children:["default"===z&&n,te()]});{const o="default"===z;return t(r,{children:[e(Ol,{inert:ll(!o),children:n}),e(Tl,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===z)&&w;return t(Ll,{children:[e(Rl,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),e(Rl,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{r||(I(B),"default"===z?X("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),Kl=k.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Zl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${da["body-sm-semibold"]};
    color: ${la.text};
`,ql=k.div`
    grid-column: 1 / -1;
    display: flex;
`,Gl=e=>{let t=la.bg,r="transparent";switch(e.$type){case"hover-subtle":t=la["bg-hover"],r=la["bg-hover"];break;case"hover":t=la["bg-hover-strong"],r=la["bg-hover-strong"];break;case"hover-outline":t=la["bg-hover-subtle"],r=la["border-hover"];break;case"selected-outline":t=la["bg-selected"],r=la["border-selected"];break;case"selected-outline-subtle":t=la["bg-selected"],r=la["border-selected-subtle"];break;case"selected-hover":t=la["bg-selected-hover"];break;case"selected-hover-outline":t=la["bg-selected-hover"],r=la["border-selected-hover"]}return{color:t,borderColor:r}},Xl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ql=k.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${ca["duration-150"]} ${ca["ease-default"]};
    border: ${ua["width-010"]} ${ua.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Gl(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Jl=k(Ql)`
    left: 0;
`,ed=k(Ql)`
    right: 0;
`,td=k.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${ca["duration-150"]} ${ca["ease-default"]};

    border: ${ua["width-010"]} ${ua.solid} transparent;
    border-radius: ${fa.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Gl(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,rd=k(td)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,nd=k(td)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,od=k.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,id=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${da["body-md-regular"]}
    transition: ${ca["duration-150"]} ${ca["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?F`
                    visibility: hidden;
                `:F`
                color: ${la["text-disabled-subtlest"]};
            `;switch(r){case"selected":return F`
                    font-weight: ${da.Spec["weight-semibold"]};
                    color: ${la["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${da.Spec["weight-semibold"]};
                    color: ${la["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${da.Spec["weight-semibold"]};
                    color: ${la["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${da.Spec["weight-semibold"]};
                    color: ${la["text-hover"]};
                `;case"unavailable":return F`
                    color: ${la["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${la.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ad=k.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,sd=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:u,onSelect:f,onHover:g,onFocus:m,onHoverEnd:p,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=Te().isSame(u,"day"),D=!!v&&v.isSame(u,"day"),S=`${u.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=a(null);h((()=>{var e;D&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[D]);return t(Xl,{"aria-hidden":x,children:[e(Jl,{$type:r}),e(rd,{$type:o}),e(ed,{$type:n}),e(nd,{$type:i}),e(od,{$interactive:d,children:t(id,{ref:k,tabIndex:w,role:$,"aria-label":y||S,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{null==f||f(u)},onKeyDown:e=>{null==b||b(e)},onMouseEnter:()=>{null==g||g(u)},onMouseLeave:()=>{null==p||p(u)},onFocus:()=>{null==m||m(u)},children:[u.date(),c&&C&&e(ad,{$disabled:l})]})})]})},ld=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:g,onHover:m,onFocus:p,setFocusCell:b,tabIndex:v})=>{const y=We.isDisabledDay(t,c,l,d),x=!y||u,w=()=>{g(t,!x)},$=()=>{const e=Te(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&o&&t&&(n&&r?(d=a,c=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(d=n,c=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{m(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{p(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Te(s),tabIndex:v};return e(sd,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Te().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&d?(t.isBetween(l,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Te.extend(Ae);const dd=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:f,maxDate:m,allowDisabledSelection:p,showActiveMonthDaysOnly:b,setCalendarDate:y})=>{const x=a(null);h((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=g((()=>i&&Te(i).isSame(r,"month")?Te(i):l&&Te(l).isSame(r,"month")?Te(l):Te().isSame(r,"month")?Te():f&&r.isSame(Te(f),"month")?Te(f):Te(r).startOf("month")),[i,r,l,f]),$=e=>{const t=Te(e);if(We.isWithinRange(t,f?Te(f):void 0,m?Te(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=v((()=>We.generateDays(r)),[r]),D=v((()=>w()),[w]),[S,k]=s(""),[F,E]=s(""),_=(e,t)=>{t&&!p||d(e)},O=(e,t)=>{t&&!p||(E(e),c(e))},T=e=>{E(e),c(e)},M=()=>{E(""),c("")};return t(Kl,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),E(""),c(""))},children:[C[0].map(((t,r)=>e(Zl,{"aria-hidden":!0,children:Te(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(ql,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:M,children:t.map(((t,a)=>e(ld,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:F,focusDate:S,currentFocus:n,minDate:f,maxDate:m,disabledDates:o,allowDisabledSelection:p,isNewSelection:u,showActiveMonthDaysOnly:b,onSelect:_,onHover:O,onFocus:T,setFocusCell:$,tabIndex:t.isSame(D,"day")?0:-1},`day-${a}`)))},a)))]})},cd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:h,onFocus:f,setFocusCell:g,tabIndex:m})=>{const p=We.isDisabledDay(t,l,a,s),b=!p||d,{start:v,end:y}=n?We.getFixedRangeStartEnd(qe.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:w}=o?We.getFixedRangeStartEnd(qe.toDayjs(o),c):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),D=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),S=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${Te(x).format("D MMMM")} to ${Te(w).format("D MMMM")}, ${p?"Unavailable":"Available"}`,F=()=>{u(t,!b)},E=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},_={date:t,calendarDate:r,disabled:p,interactive:b,currentDateIndicator:!0,onSelect:F,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&F());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},focusDate:Te(i),role:"gridcell",tabIndex:m,label:k};return e(sd,Object.assign({},_,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Te().isSame(t,"day")&&!p&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&E(e,"hover",r===x,r===w),$&&E(e,"selected-outline",r===v,r===y),$&&C&&(E(e,"selected-hover-outline",D,S),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},ud=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:f,setCalendarDate:m})=>{const p=a(null);h((()=>{if(p.current){const e=p.current;p.current=null,C(e)}}),[r]);const b=g((()=>o&&Te(o).isSame(r,"month")?Te(o):Te().isSame(r,"month")?Te():d&&r.isSame(Te(d),"month")?Te(d):Te(r).startOf("month")),[o,r,d]),y=e=>{const t=Te(e);if(We.isWithinRange(t,d?Te(d):void 0,c?Te(c):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(p.current=e);C(e)}},x=v((()=>We.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[D,S]=s(""),k=(e,t)=>{t&&!u||(i(e),e&&!Te(e).isSame(e,"month")&&S(""))},F=(e,t)=>{t&&!u||(S(e),l(e))},E=e=>{S(e),l(e)},_=()=>{S(""),l("")};return t(Kl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Zl,{"aria-hidden":!0,children:Te(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(ql,{role:"row",onMouseLeave:_,children:t.map(((t,i)=>e(cd,{date:t,calendarDate:r,selectedDate:o,hoverDate:D,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:k,onHover:F,numberOfDays:f,onFocus:E,setFocusCell:y,tabIndex:Te(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},hd=k.div`
    width: 100%;
    background: ${la.bg};
`,fd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:h,onFocus:f,setFocusCell:g,tabIndex:m})=>{const p=We.isDisabledDay(t,l,a,s),b=!p||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:p,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Te(i),tabIndex:m};return e(sd,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Te().isSame(t,"day")&&!p&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Te.extend(Ae);const gd=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:f,setCalendarDate:m})=>{const p=a(null);h((()=>{if(p.current){const e=p.current;p.current=null,C(e)}}),[r]);const b=g((()=>o&&Te(o).isSame(r,"month")?Te(o):Te().isSame(r,"month")?Te():d&&r.isSame(Te(d),"month")?Te(d):Te(r).startOf("month")),[o,r,d]),y=e=>{const t=Te(e);if(We.isWithinRange(t,d?Te(d):void 0,c?Te(c):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(p.current=e);C(e)}},x=v((()=>We.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[D,S]=s(""),k=(e,t)=>{t&&!u||i(e)},F=(e,t)=>{t&&!u||(S(e),l(e))},E=e=>{S(e),l(e)},_=()=>{S(""),l("")};return t(Kl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Zl,{"aria-hidden":!0,children:Te(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(ql,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:_,children:t.map(((t,i)=>e(fd,{date:t,calendarDate:r,selectedDate:o,hoverDate:D,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:f,onSelect:k,onHover:F,onFocus:E,setFocusCell:y,tabIndex:Te(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},md=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:h,setFocusCell:f,tabIndex:g})=>{const m=We.isDisabledDay(t,l,a,s),p=!m||d,{start:b,end:v}=We.getWeekStartEnd(qe.toDayjs(n)),{start:y,end:x}=We.getWeekStartEnd(qe.toDayjs(o)),{start:w,end:$}=We.getWeekStartEnd(t),C=t.isSame(w,"day"),D=n&&t.isBetween(b,v,"day","[]"),S=o&&t.isBetween(y,x,"day","[]"),k=D&&t.isSame(b)||S&&t.isSame(y),F=D&&t.isSame(v)||S&&t.isSame(x),E=`From ${Te(w).format("D MMMM")} to ${Te($).format("D MMMM")}, ${m?"Unavailable":"Available"}`,_=()=>{c(t,!p)},O={date:t,calendarDate:r,disabled:m,interactive:p,currentDateIndicator:!0,onSelect:_,onHover:()=>{u(t.format("YYYY-MM-DD"),!p)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(p&&_());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),f(r.format("YYYY-MM-DD")))})(e)},focusDate:Te(i),tabIndex:g,label:E,ariaHidden:!C||void 0,role:C?"button":"none"};return e(sd,Object.assign({},O,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Te().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return D&&S?(t="selected-hover-outline",r="selected-hover"):D?(t="selected-outline",r="selected"):S&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,F?e.circleRight=t:e.bgRight=t),e})()))},pd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,setCalendarDate:f})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,$(e)}}),[r]);const p=g((()=>o&&Te(o).isSame(r,"month")?Te(o):Te().isSame(r,"month")?Te().startOf("week"):d&&r.isSame(Te(d),"month")?Te(d):Te(r).startOf("month")),[o,r,d]),b=e=>{const t=Te(e);if(We.isWithinRange(t,d?Te(d):void 0,c?Te(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(m.current=e);$(e)}},y=v((()=>We.generateDays(r)),[r]),x=v((()=>p()),[p]),[w,$]=s(""),[C,D]=s(""),S=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!Te(e).isSame(r,"month")&&D("")},k=(e,t)=>{t&&!u||(D(e),l(e))},F=e=>{D(e),l(e)},E=()=>{D(""),l("")};return t(Kl,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),D(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(Zl,{"aria-hidden":!0,children:Te(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(ql,{onMouseLeave:E,role:"group",children:t.map(((t,i)=>e(md,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:S,onHover:k,onFocus:F,setFocusCell:b,tabIndex:Te(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},bd=({date:t,calendarDate:r,selectedDates:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:h,onFocus:f,setFocusCell:g,tabIndex:m})=>{const p=We.isDisabledDay(t,l,a,s),b=!p||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:p,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Te(i),tabIndex:m};return e(sd,Object.assign({},y,(()=>{const e={},i=t.format("YYYY-MM-DD"),a=r.month()===t.month();return!a&&c?(e.labelType="hidden",e):(a?Te().isSame(t,"day")&&!p&&(e.labelType="current"):e.labelType="unavailable",n.includes(i)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),o&&t.isSame(o,"day")&&(n.includes(i)?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle")),e)})()))},vd=({calendarDate:r,disabledDates:n,selectedDates:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:f,setCalendarDate:m})=>{const p=a(null);h((()=>{if(p.current){const e=p.current;p.current=null,C(e)}}),[r]);const b=g((()=>{const e=o.find((e=>Te(e).isSame(r,"month")));return e?Te(e):Te().isSame(r,"month")?Te():d&&r.isSame(Te(d),"month")?Te(d):Te(r).startOf("month")}),[o,r,d]),y=e=>{const t=Te(e);if(We.isWithinRange(t,d?Te(d):void 0,c?Te(c):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(p.current=e);C(e)}},x=v((()=>We.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[D,S]=s(""),k=(e,t)=>{t&&!u||i(e)},F=(e,t)=>{t&&!u||(S(e),l(e))},E=e=>{S(e),l(e)},_=()=>{S(""),l("")};return t(Kl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Zl,{"aria-hidden":!0,children:Te(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(ql,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:_,children:t.map(((t,i)=>e(bd,{date:t,calendarDate:r,selectedDates:o,hoverDate:D,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:f,onSelect:k,onHover:F,onFocus:E,setFocusCell:y,tabIndex:Te(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},yd=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:s,endValue:l,values:d=[],minSelectable:c,maxSelectable:u,currentFocus:h,withButton:f,variant:g,minDate:m,maxDate:p,allowDisabledSelection:b,selectWithinRange:v=!0,initialCalendarDate:x,numberOfDays:w,onChange:$,showActiveMonthDaysOnly:C=!1,isFocusable:D=!1},S)=>{const k=a(null),F=a(void 0),E=a(null);y(S,(()=>({reset(){var e;null===(e=k.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=k.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=E.current)||void 0===t?void 0:t.contains(e))||!1}})));const _=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=k.current)||void 0===t||t.setCalendarDate(r),null==n||n(r)},O=e=>{null==o||o(e)},T=e=>{const t=e.format("YYYY-MM-DD");if(d.includes(t)){const e=d.filter((e=>e!==t));null==$||$(e)}else{if(void 0!==u&&d.length>=u)return;null==$||$([...d,t])}};return e(hd,{ref:E,children:e(Ul,{ref:k,withButton:f,doneButtonDisabled:(()=>{if(!f)return;let e=!0;switch(g){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l;break;case"multi":e=0===d.length||void 0!==c&&d.length<c}return e})(),onDismiss:i,minDate:m,maxDate:p,selectWithinRange:v,currentFocus:h,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:b,onCalendarDateChange:e=>{var t;F.current&&F.current.isSame(e,"month")||(null===(t=k.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),null==r||r({month:e.month()+1,year:e.year()})),F.current=e},initialCalendarDate:x,isFocusable:D,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=k.current)||void 0===n?void 0:n.setCalendarDate;switch(g){case"week":return e(pd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:m,maxDate:p,allowDisabledSelection:b,onSelect:_,onHover:O,setCalendarDate:o});case"fixed-range":return e(ud,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:m,maxDate:p,allowDisabledSelection:b,onSelect:_,onHover:O,numberOfDays:w,setCalendarDate:o});case"single":return e(gd,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:m,maxDate:p,allowDisabledSelection:b,showActiveMonthDaysOnly:C,onSelect:_,onHover:O,setCalendarDate:o});case"multi":return e(vd,{calendarDate:r,disabledDates:t,selectedDates:d,minDate:m,maxDate:p,allowDisabledSelection:b,showActiveMonthDaysOnly:C,onSelect:T,onHover:O,setCalendarDate:o});default:return e(dd,{calendarDate:r,currentFocus:h,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:m,maxDate:p,isNewSelection:v,allowDisabledSelection:b,showActiveMonthDaysOnly:C,onSelect:_,onHover:O,setCalendarDate:o})}})(r)})})})),xd=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=ol();return e(al,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(yd,Object.assign({ref:r},t))}))})),wd=F`
    outline-offset: -1px;
    outline: ${ua["width-020"]} ${ua.solid} ${la["border-focus"]};
`,$d=F`
    outline-color: ${la["border-focus"]};
`,Cd=F`
    outline-color: ${la["border-disabled"]};
`,Dd=F`
    outline-color: ${la["border-error-focus"]};
`,Sd=F`
    outline: none;
`,kd=k.div`
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    background: ${la.bg};

    &:focus-within {
        ${wd}
    }
    ${e=>e.$focused&&!e.$noBorder&&wd}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${$d}
                }
                ${e.$focused&&$d}
            `:e.$disabled?F`
                background: ${la["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Cd}
                }
                ${e.$focused&&Cd}
            `:e.$error?F`
                border-color: ${la["border-error"]};

                &:focus-within {
                    ${Dd}
                }
                ${e.$focused&&Dd}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Sd}
                }
            `}}
`,Fd=k(kd)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ha["spacing-16"]} 0
        ${e=>e.$readOnly?"0":ha["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ed=k.input`
    ${e=>"small"===e.$variant?da["body-md-regular"]:da["body-baseline-regular"]}
    color: ${la.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${la["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${la["text-subtler"]};
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
`,_d=k.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${ua["width-010"]} ${ua.solid}
            ${la["border-focus"]};
        border-radius: ${fa.sm};
    }
`,Od=k.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Td=k.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Md}, ${zd} {
                    color: ${la["text-subtler"]};
                }
            `}}
`,Md=k(Ed)`
    background: transparent;
    text-align: center;
`,Id=k(Md)`
    width: 2rem;
    margin-right: ${ha["spacing-4"]};
`,Bd=k(Md)`
    width: 2.5rem;
`,Ad=k(Md)`
    width: 3rem;
    margin-left: ${ha["spacing-4"]};
`,zd=k.span`
    ${da["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${la.text};
            `}}
`,jd=k.div`
    ${da["body-baseline-regular"]}
    background-color: ${la.bg};
    color: ${la["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${la["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Te.extend(Ie);const Ld=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:l,hoverValue:d,placeholder:c,label:u,onChange:f,onFocus:g,onBlur:m,hideInputKeyboard:p,inputLabels:b=["Date","Month","Year"]},v)=>{const x=p?"none":"numeric",[w,$,C]=tr(""),[D,S,k]=tr(""),[F,E,_]=tr(""),[O,T]=s("none"),[M,I]=s(!1),B=a(null),A=a(null),z=a(null),j=a(null),[L,R,P]=U(d);h((()=>{var e;const[t="",r="",n=""]=U(i);$(t),S(r),E(n),t||r||n||!B.current||!B.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[i]),h((()=>{var e;l||T("none"),l&&(I(!0),B.current&&!B.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),y(v,(()=>({ref:B,resetPlaceholder(){I(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),S(t),E(r)},focusYearRef(){var e;null===(e=j.current)||void 0===e||e.focus()}})),[$,S,E,i]);const H=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:_.current},a=e.target.name,s=i[a],l=a!==n?et.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,S(l)}const d=`${i[n]}-${i[r]}-${i[t]}`,c=Te(d,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];c&&s!==l&&f(d),B.current&&!B.current.contains(e.relatedTarget)&&(T("none"),null==m||m(u||c))},Y=e=>{var t,r;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:D,year:F};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=z.current)||void 0===t||t.focus());break;case o[1]:a.month=i,S(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case o[2]:a.year=i,E(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;Te(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===D.length&&(null===(t=A.current)||void 0===t||t.focus()),O===o[2]&&0===F.length&&(null===(r=z.current)||void 0===r||r.focus()))};function U(e){if(e){const t=Ge.sanitizeInput(e);if(!t)return[void 0,void 0,void 0];const r=Te(t,"YYYY-MM-DD",!0);return[et.padValue(r.date().toString()),et.padValue((r.month()+1).toString()),r.year().toString()]}return[void 0,void 0,void 0]}return t(Od,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(I(!0),B.current&&!B.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(I(!0),l||null==g||g(e))},children:[t(Td,{ref:B,$hover:!!d,children:[e(Id,{ref:A,name:o[0],maxLength:2,value:null!=L?L:w,onFocus:N,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":b[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[0]||n?"DD":""}),e(zd,{$inactive:0===w.length,children:"/"}),e(Bd,{ref:z,name:o[1],maxLength:2,value:null!=R?R:D,onFocus:N,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":b[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[1]||n?"MM":""}),e(zd,{$inactive:0===D.length,children:"/"}),e(Ad,{ref:j,name:o[2],maxLength:4,value:null!=P?P:F,onFocus:N,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":b[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&c)return e(jd,{$hide:M,$disabled:r,onMouseDown:H,children:c})})()]})})),Rd=k(Fd)`
    height: 3rem;
`,Pd=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:l,hideInputKeyboard:d,value:c,onChange:u,onFocus:f,onBlur:g,onYearMonthDisplayChange:m,withButton:p=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=ke(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,D]=s(Ge.sanitizeInput(c)),[S,k]=s(Ge.sanitizeInput(c)),[F,E]=s(void 0),[_,O]=s(!1),[T,M]=s(!1),I=a(null),B=a(null),A=a(null);h((()=>{const e=Ge.sanitizeInput(c);D(e),k(e)}),[c]);const z=e=>{!y&&Ge.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),p||(N(e),D(e),e&&O(!1)))},j=e=>{var t;k(e),p||(N(e),D(e),e&&(null===(t=B.current)||void 0===t||t.focusYearRef(),O(!1)),E(void 0))},L=()=>{b||o||(O(!0),T||(M(!0),f&&f()))},R=e=>{var t,r,n;const o=e.relatedTarget,i=A.current&&A.current.contains(o),a=I.current&&I.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!_&&!a&&!s||_&&!a&&!i&&!s)&&(null===(n=B.current)||void 0===n||n.resetInput(),k(C),M(!1),O(!1),W())},P=e=>{E(e)},H=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":D(S),N(S)}Te(S,"YYYY-MM-DD",!0).isValid()?null===(t=B.current)||void 0===t||t.focusYearRef():null===(r=I.current)||void 0===r||r.focus(),O(!1)},N=e=>{u&&u(e)},W=()=>{g&&g()};return e(il,{enabled:!b&&!o,isOpen:_,renderElement:()=>e(Rd,Object.assign({role:"group",tabIndex:0,ref:I,onBlur:R,onFocus:L,$disabled:o,$readOnly:b,$focused:T,$error:l,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(Ld,{ref:B,disabled:o,onChange:z,readOnly:b,focused:_,names:["start-day","start-month","start-year"],value:S,hoverValue:F,hideInputKeyboard:d})})),renderDropdown:({elementWidth:t})=>e(xd,{variant:"single",ref:A,initialCalendarDate:S,withButton:p,value:S,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:j,onDismiss:H,onYearMonthDisplayChange:m,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=B.current)||void 0===e||e.resetInput(),k(C),O(!1),M(!1),W(),E(void 0)},onDismiss:()=>{var e,t;null===(e=B.current)||void 0===e||e.resetInput(),null===(t=I.current)||void 0===t||t.focus(),k(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},Hd=k.div`
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
                        100% - ${da.Spec["body-size-baseline"]} -
                            ${ha["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${ha["spacing-8"]};
                }
            `}}
`,Nd=k.div`
    width: 100%; // Force next flex item to break to next line
`,Wd=k.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Yd=k(ie)`
    color: ${la.icon};
    width: ${da.Spec["body-size-baseline"]};
    height: ${da.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${ha["spacing-8"]};
    align-self: center;
`,Vd=k.div`
    position: absolute;
    background: ${e=>e.$error?la["border-error-focus-strong"]:la["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${ha["spacing-8"]} - (${da.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${ca["duration-350"]} ${ca["ease-standard"]},
        opacity ${ca["duration-350"]} ${ca["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${ha["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,Ud=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Hd,{className:i,$wrap:a,children:[e(Wd,{"data-id":"range-container-elem1-container",children:s}),e(Yd,{"aria-hidden":"true"}),a&&e(Nd,{}),e(Wd,{"data-id":"range-container-elem2-container",children:l}),e(Vd,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Kd=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Zd=k(Fd)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?F`
                    padding: ${ha["spacing-12"]} 0;
                `:F`
                padding: ${ha["spacing-12"]} ${ha["spacing-16"]};
            `}}
`,qd=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,Gd={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Xd=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:l,error:d,hideInputKeyboard:c,value:u,valueEnd:f,onChange:m,onFocus:p,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:D,allowDisabledSelection:S,zIndex:k,dropdownRootNode:F}=r,E=ke(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[_,O]=s(),[T,M]=s(void 0),I="week"===w,B="fixed-range"===w,[A,z]=s(!1),[j,L]=s(!1),[{selectedStart:R,selectedEnd:P,currentFocus:H,calendarOpen:N,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Kd(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Gd,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:I?"none":B?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=a(!1),Z=a(null),q=a(null),G=a(null),X=a(null),Q=(({maxWidth:e,targetRef:t})=>{const[r,n]=s(!1);return qt({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:g((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:Z});h((()=>{U.resetRange({start:Ge.sanitizeInput(u),end:Ge.sanitizeInput(f)})}),[u,f]),h((()=>{"start"===H?O(R):"end"===H&&P&&O(P)}),[H]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(R&&P?(U.done({start:R,end:P}),null==m||m(R,P)):(U.dismiss(),null===(t=Z.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=X.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(ge(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=q.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(y||P||!Y||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!P)return void U.focus("end");if(Te(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:P}),void(null==m||m(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(ge(e))return void(K.current=!0);if(Te(e).isBefore(R,"day"))return U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=q.current)||void 0===r||r.setCalendarDate(e)),e){if(R)return y?void 0:(null===(n=X.current)||void 0===n||n.focusYearRef(),U.done({start:R,end:e}),void(null==m||m(R,e)));U.focus("start")}else y||R||!W||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t,r;if(ge(e))return void(K.current=!0);if(U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const n=Te(e).format("YYYY-MM-DD"),o=Te(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,y?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==m||m(n,o)))},ne=()=>{(I||B)&&L(!0),I&&z(!0),C||i||V||(U.focus("start"),null==p||p())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=q.current&&q.current.contains(i),s=Z.current&&Z.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!N&&!s&&!l||N&&!s&&!a&&!l)&&(U.blur(),L(!1),z(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=X.current)||void 0===o||o.resetPlaceholder(),fe())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==p||p())},ae=()=>{if(I){const e=qe.toDayjs(R).startOf("week").format("YYYY-MM-DD");z(!0),L(!0),O(e)}},se=()=>{B&&(L(!0),O(R))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},de=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=X.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{var t;const r=Te(e).startOf("week").format("YYYY-MM-DD"),n=Te(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!y)null===(t=X.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==m||m(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===H?ee(e):"end"===H&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=Z.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:R,end:P}),null==m||m(R,P),I)break;me(R,P)&&("range"===w?null===(r=X.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{M(e)},fe=()=>{b&&b()},ge=e=>!S&&e&&Ge.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:o}),me=(e,t)=>!(!e||!t)&&Te(e).isBefore(t,"day"),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===H?T:void 0,end:"end"===H?T:void 0};break;case"week":if(!T)return;t={start:Te(T).startOf("week").format("YYYY-MM-DD"),end:Te(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Te(T).format("YYYY-MM-DD"),end:Te(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(il,{enabled:!C&&!i,isOpen:N,onClose:()=>{var e,t;U.blur(),z(!1),L(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=X.current)||void 0===t||t.resetPlaceholder(),fe()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=Z.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=X.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(Zd,Object.assign({role:"group",ref:Z,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:d,$wrap:Q,id:D,"data-testid":E["data-testid"],"aria-disabled":i,onKeyDown:J},E,{children:t(Ud,{currentActive:H,wrap:Q,error:d,children:[e(qd,{$wrap:Q,children:e(Ld,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:R,disabled:i,readOnly:A||C,focused:"start"===H,hoverValue:pe("start"),onChange:B?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:c})}),e(qd,{$wrap:Q,children:e(Ld,{ref:X,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:j||C,focused:"end"===H,hoverValue:pe("end"),onChange:te,onFocus:ie("end"),onBlur:de,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:t})=>e(xd,{ref:q,variant:w,initialCalendarDate:_,withButton:y,value:R,endValue:P,selectWithinRange:W||Y,currentFocus:H,disabledDates:l,minDate:n,maxDate:o,allowDisabledSelection:S,onSelect:ce,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:F})},Qd=k(bl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Jd=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,g=ke(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Qd,Object.assign({ref:n,"data-testid":g["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},m,g,{children:[u?e(pl,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Jd.displayName="ButtonWithIcon.Default";const ec=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,g=ke(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Qd,Object.assign({ref:n,"data-testid":g["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},m,g,{children:[u?e(pl,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};ec.displayName="ButtonWithIcon.Small";const tc={Default:o.forwardRef(Jd),Small:o.forwardRef(ec)},rc=({className:t,progress:r,color:n,"data-testid":o})=>e(nc,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),nc=k.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):la["icon-primary-subtle"](e),F`
            border: ${ua["width-010"]} ${ua.solid} ${r};
            border-radius: ${fa.sm};

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
`,oc=k.button`
    align-items: center;
    border-radius: ${fa.sm};
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
                    background-color: ${la.bg};
                    border: ${ua["width-010"]} ${ua.solid}
                        ${la["border-primary"]};
                    color: ${la["text-primary"]};

                    &:hover {
                        background-color: ${la["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${la.bg};
                    border: ${ua["width-010"]} ${ua.solid}
                        ${la.border};
                    color: ${la["text-primary"]};

                    &:hover {
                        background-color: ${la["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${la["bg-disabled"]};
                    border: ${ua["width-010"]} ${ua.solid}
                        ${la["border-disabled"]};
                    color: ${la["text-disabled"]};
                    cursor: not-allowed;
                `;default:return F`
                    background-color: ${la["bg-primary"]};
                    border: none;
                    color: ${la["text-inverse"]};

                    &:hover {
                        background-color: ${la["bg-primary-hover"]};
                    }
                `}}}
`,ic=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button",disabled:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ke(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(oc,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$styleType:l?"disabled":o,$sizeType:a,"aria-disabled":l,disabled:l&&!d,onClick:l?void 0:c},u,{children:i}))})),ac=k.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${pa.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,sc=Object.assign((t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=ke(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:f,offsetTop:g}=rs();return h((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(Xa,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:e(ac,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:f,$offsetTop:g},u,{children:i}))})}),{Box:Na}),lc=F`
    ${e=>`\n        ${pa.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${ma["sm-max"](e)}px)\n    `}
`,dc=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${ma["sm-max"](e)}px)\n    `}
`,cc=k.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${ua.Util["dashed-default"]({radius:fa.sm,thickness:ua["width-040"],colour:e.$disabled?la["border-disabled"]:la.border})}

            background-color: ${e.$disabled?la["bg-disabled"]:la.bg};
        `}
    height: 14.125rem;
`,uc=k(Cl.Default)`
    width: fit-content;
    margin: 0 ${ha["spacing-20"]};

    &:disabled {
        border-color: ${la["border-strong"]};
    }
`,hc=k(ic)`
    position: absolute;
    top: ${ha["spacing-16"]};
    right: ${ha["spacing-16"]};

    &:disabled {
        border-color: ${la["border-strong"]};
    }
`,fc=k.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${ha["spacing-16"]}) * 2);
    height: 100%;
`,gc=k.div`
    background: ${la["bg-primary-subtlest"]};
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    margin: 0 ${ha["spacing-20"]};
    padding: ${ha["spacing-16"]};
    display: flex;
    gap: ${ha["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,mc=k(za.BodySM)`
    margin-top: ${ha["spacing-16"]};
`,pc=k(sc)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,bc=k.div`
    width: 100%;
    margin: auto;
    padding: ${ha["layout-xxl"]} ${ha["layout-sm"]};

    ${lc} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,vc=k(sc.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${ha["spacing-16"]};

    ${lc} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${ha["spacing-8"]};
        --close-button-right-inset: ${ha["spacing-20"]};
    }
`,yc=k.h2`
    ${da["body-baseline-semibold"]}
    color: ${la.text};
    margin-bottom: ${ha["spacing-16"]};
    text-align: center;

    ${lc} {
        ${da["body-md-semibold"]}
        margin: ${ha["spacing-12"]} 0;
    }
`,xc=k.div`
    width: 100%;
    height: 20rem;
    border-radius: ${fa.lg};
    overflow: hidden;

    ${lc} {
        border-radius: 0;
        flex: 1;
    }

    ${dc} {
        background: ${la["bg-strong"]};
    }
`,wc=k.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${la["bg-stronger"]};
    margin: auto;

    ${lc} {
        aspect-ratio: 4/3;
    }
    ${pa.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${dc} {
        width: auto;
        height: 100%;
    }
`,$c=k.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${la["border-strong"]};
    pointer-events: none;

    ${lc} {
        width: calc(100% - ${ha["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Cc=k.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${ha["spacing-16"]};

    ${pa.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${ha["spacing-16"]} ${ha["spacing-24"]}
            ${ha["spacing-48"]};
        gap: ${ha["spacing-16"]};
    }

    ${dc} {
        flex-direction: row;
        margin: ${ha["spacing-16"]} ${ha["spacing-20"]};
    }
`,Dc=k(Cl.Default)`
    width: 8.5rem;
    ${pa.MaxWidth.sm} {
        width: 100%;
    }
    ${dc} {
        height: 2.5rem;
    }
`,Sc=k.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,kc=k.canvas`
    cursor: crosshair;
`,Fc=w((()=>Fe(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.f2833e66.js")).ESignatureCanvas}})))),Ec=n=>{const{description:o,id:i,loadingProgress:l,loadingLabel:d="Uploading...",onChange:c,value:u,disabled:f}=n,g=ke(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[m,b]=s(!1),v=a(null),[y,x]=s(u),w=p(_),C=ma["sm-max"]({theme:w}),D=or.useMediaQuery({maxWidth:C}),S=or.useMediaQuery({maxHeight:C,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},F=()=>{if(v.current){const e=v.current.export();x(e),b(!1),null==c||c(e)}};h((()=>{x(u)}),[u]);return t("div",Object.assign({},g,{children:[e(cc,{$disabled:f,children:"number"==typeof l?t(gc,{children:[d&&e(za.BodyMD,{children:d}),e(rc,{progress:null!=l?l:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(fc,{src:y,alt:"Signature preview"}),e(hc,{styleType:"light",onClick:()=>b(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(ae,{})})]}):e(uc,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>b(!0),disabled:f,children:"Add signature"})}),e(pc,{"data-testid":"signature-modal",show:m,children:e(bc,{children:t(vc,{onClose:()=>b(!1),children:[e(yc,{children:"Signature"}),e(xc,{children:t(wc,{children:[e($c,{}),e($,{fallback:null,children:m&&e(Fc,{ref:v,baseImageDataURL:y})})]})}),t(Cc,{children:[e(Dc,{as:S?tc.Small:tc.Default,type:"button",styleType:D&&!S?"light":"link",icon:e(se,{}),onClick:k,children:"Clear"}),e(Dc,{as:S?Cl.Small:Cl.Default,type:"button",onClick:F,children:"Save"})]})]})})}),o?e(mc,{children:o}):null]}))};let _c=null;class Oc{isAttached(){var e;return null===(e=this.node)||void 0===e?void 0:e.isConnected}createLog(e){let t=document.createElement("div");return t.setAttribute("role","log"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions"),t}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(e,t="assertive",r=7e3){var n,o;if(!this.node)return;let i=document.createElement("div");"object"==typeof e?(i.setAttribute("role","img"),i.setAttribute("aria-labelledby",e["aria-labelledby"])):i.textContent=e,"assertive"===t?null===(n=this.assertiveLog)||void 0===n||n.appendChild(i):null===(o=this.politeLog)||void 0===o||o.appendChild(i),""!==e&&setTimeout((()=>{i.remove()}),r)}clear(e){this.node&&(e&&"assertive"!==e||!this.assertiveLog||(this.assertiveLog.innerHTML=""),e&&"polite"!==e||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,"undefined"!=typeof document&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}}function Tc(e,t){return Tc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Tc(e,t)}function Mc(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Ic(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Bc(e){return null!==e&&1===e.length?e[0]:e.slice()}function Ac(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function zc(e,t){return jc(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function jc(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Lc=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Ac(r.getMouseEventMap())}))}Mc(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=zc(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Ac(r.getKeyDownEventMap()),Mc(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Ac(r.getMouseEventMap()),Mc(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Ac(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Bc(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Bc(r.state.value)};return r.props.renderTrack(o,i)};let n=Ic(t.value);n.length||(n=Ic(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=zc(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Tc(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Ic(e.value);return r.length?t.pending?null:{value:r.map((t=>zc(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Bc(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return zc(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,d=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:d,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=zc(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=zc(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=zc(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=jc(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=jc(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Bc(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Lc.displayName="ReactSlider",Lc.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Rc=Lc;const Pc=k.div`
    isolation: isolate;
`,Hc=k.div`
    margin-top: ${ha["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ha["spacing-8"]};
`,Nc=k.div`
    margin-bottom: ${ha["spacing-8"]};
`,Wc=k(za.BodyBL)`
    overflow-wrap: anywhere;
`,Yc=k(Rc)`
    height: 0.875rem;
`,Vc=k.div`
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

        background-color: ${la.bg};
        box-shadow: ${ga["sm-subtle"]};
        border: ${ua["width-010"]} ${ua.solid}
            ${e=>e.$disabled?la["border-selected-disabled"]:la["border-strong"]};
        border-radius: ${fa.full};
    }
`,Uc=k.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Vc}:after {
        outline-offset: -1px;
        outline: ${ua["width-040"]} ${ua.solid}
            ${la["border-selected"]};
    }
`,Kc=k.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${fa.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||la["border-strong"](e)};
`,Zc=r=>{var{id:n,value:o,min:i=0,max:a=100,step:l=1,minRange:d=0,numOfThumbs:c=2,colors:u,disabled:f,readOnly:g,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,ariaLabels:w,"aria-invalid":$,"aria-labelledby":C,"aria-describedby":D,renderSliderLabel:S,onChange:k,onChangeEnd:F}=r,E=ke(r,["id","value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","ariaLabels","aria-invalid","aria-labelledby","aria-describedby","renderSliderLabel","onChange","onChangeEnd"]);const[_,O]=s(j()),[T]=s((()=>Je.generate())),M=function(){const e=function(){const e=f||g?la["border-disabled"]:la["border-strong"],t=f||g?la["border-selected-disabled"]:la["border-selected"];if(1===c)return[t,e];const r=[e];for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==u?void 0:u[r])||e[r]))}(),I=`${T}-indicator`,B=`${T}-instruction`,A=Array.from({length:c},((e,t)=>(null==w?void 0:w[t])||function(e){return 1===c?"":0===e?"Minimum value slider":e===c-1?"Maximum value slider":"Indeterminate value slider"}(t)));h((()=>{o!==_&&O(j())}),[o]);const z=(e,t)=>{if(f||g)return;const r=function(e,t){if(c<2)return"";const r=_[t],n=t>0?_[t-1]:void 0,o=t<_.length-1?_[t+1]:void 0,i=A[t],a=t>0?A[t-1]:void 0,s=t<A.length-1?A[t+1]:void 0;if(function(e){return["ArrowRight","ArrowUp","PageUp","End"].includes(e)}(e)&&void 0!==o&&r>=o-d)return`The ${L(i)} has reached its limit. Increase the ${R(s)} to set a higher ${R(i)}.`;if(function(e){return["ArrowLeft","ArrowDown","PageDown","Home"].includes(e)}(e)&&void 0!==n&&r<=n+d)return`The ${L(i)} has reached its limit. Decrease the ${R(a)} to set a lower ${R(i)}.`;return""}(e.key,t);var n;r&&(n="assertive",_c&&_c.clear(n),function(e,t="assertive",r=7e3){_c?_c.announce(e,t,r):(_c=new Oc,("boolean"==typeof IS_REACT_ACT_ENVIRONMENT?IS_REACT_ACT_ENVIRONMENT:"undefined"!=typeof jest)?_c.announce(e,t,r):setTimeout((()=>{(null==_c?void 0:_c.isAttached())&&(null==_c||_c.announce(e,t,r))}),100))}(r,"assertive"))};function j(){if(o&&o.length===c)return o;const e=[];for(let t=0;t<c;t++)e.push(i+l*t);return e}function L(e){return e?e.toLowerCase():"slider"}function R(e){return e?e.replace(/ slider$/i,"").toLowerCase():"slider"}const P=e=>S?S(e):t(Wc,{children:[p,e,b]});return t(Pc,Object.assign({},E,{id:n,role:"group","aria-disabled":f||void 0,children:[!f&&!g&&e(sl,{id:B,children:"Use left and right arrow keys to adjust the slider."}),v&&e(Nc,{id:I,children:(()=>{let e="";if(1===_.length)e=`${_[0]}`;else if(2===_.length)e=`${_[0]} - ${_[1]}`;else if(_.length>2){e=`${Math.min(..._)} - ${Math.max(..._)}`}return t(Wc,{children:[y,e,x]})})()}),e(Yc,{step:l,min:i,max:a,value:_,disabled:f||g,onChange:(e,t)=>{if(g||f)return;if("number"==typeof e){const t=[e];return O(t),void(null==k||k(t))}if(t>-1&&_[t]===e[t])return;const r=[...e];O(r),null==k||k(r)},onAfterChange:e=>{if(!g&&!f)if("number"==typeof e){const t=[e];O(t),null==F||F(t)}else{const t=[...e];O(t),null==F||F(t)}},minDistance:d,renderThumb:(r,n)=>{const o=`${T}-thumb-label-${n.index}`,s=_[n.index];return t(Uc,Object.assign({"data-testid":`slider-thumb-${n.index}`},r,{tabIndex:r.tabIndex,"aria-labelledby":dl(C,o),"aria-describedby":dl(D,v?I:void 0,f||g?void 0:B),"aria-valuetext":(d=s,`${p||""}${d}${b||""}`),"aria-valuemin":i,"aria-valuemax":a,"aria-valuenow":s,"aria-readonly":g||void 0,"aria-invalid":$||void 0,onKeyDown:e=>{var t;z(e,n.index),null===(t=r.onKeyDown)||void 0===t||t.call(r,e)},children:[e(sl,{id:o,children:(l=n.index,A[l])}),e(Vc,{$disabled:f,$readOnly:g})]}));var l,d},renderTrack:(t,r)=>e(Kc,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:M[r.index]}))}),m&&t(Hc,{children:[e("div",{children:P(i)}),e("div",{children:P(a)})]})]}))},qc=k.div`
    display: flex;
    margin-bottom: ${ha["spacing-16"]};
    align-items: baseline;
`,Gc=k.div`
    margin: 0 0.5rem;
`,Xc=k.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Qc=k.div`
    flex: 1;
    border-radius: ${fa.sm} ${fa.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=la["bg-strongest"];return e.$disabled&&e.$selected?t=la["bg-selected-stronger-disabled"]:e.$disabled?t=la["bg-disabled"]:e.$selected&&(t=la["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,Jc=k(Zc)`
    margin-top: -0.3125rem;
`,eu=n=>{var{bins:o=[],interval:i,disabled:a,readOnly:l,value:d,showRangeLabels:c,rangeLabelPrefix:u,rangeLabelSuffix:f,ariaLabels:g,onChange:m,onChangeEnd:p,renderEmptyView:b,renderRangeLabel:y}=n,x=ke(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),D=Math.max(...C),S=Math.min(...C),[k,F]=s(T()),E=v((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(D-S)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===S+i*n));t?r.push(t):r.push({count:0,minValue:S+i*n})}return r}),[o,i]);h((()=>{d!==k&&F(T())}),[d]);const _=e=>{const[t,r]=e,n=[t,r];F(n),null==m||m(n)},O=e=>{const[t,r]=e,n=[t,r];F(n),null==p||p(n)};function T(){return null!=d?d:[S,S+i]}const M=e=>y?y(e):t(za.BodyBL,{children:[u,e,f]});return t("div",Object.assign({},x,{children:[c&&t(qc,{children:[M(k[0]),e(Gc,{children:"-"}),M(k[1])]}),E.every((e=>0===e.count))&&b?b():t(r,{children:[e(Xc,{children:E.map(((t,r)=>{const n=t.count/$;return e(Qc,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:a||l},r)}))}),e(Jc,{min:S,max:D+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:a,readOnly:l,ariaLabels:g,onChange:_,onChangeEnd:O})]})]}))},tu=k(Ed)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:ha["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:ha["spacing-16"]};
        `}
`,ru=k(_d)`
    height: auto;
    padding: ${ha["spacing-12"]} ${ha["spacing-16"]};

    cursor: pointer;
    color: ${la.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${ha["spacing-12"]};
        `}
`,nu=k(M)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,ou=k.div`
    display: flex;
    width: 100%;
`,iu=k(kd)`
    display: flex;
    align-items: center;
    width: 100%;
`,au=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:h,onClear:f,allowClear:g=!1,className:m,styleType:p="bordered"}=n,b=ke(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,t)=>"tel"===e&&!!t)(l,s),x=a(null);y(o,(()=>x.current),[]);const w=Jt({ref:x,formatter:e=>v?et.transformWithSpaces(e,s):e}),$=e=>{h&&(v?D(e):h(e))},C=()=>{f&&f(),x&&x.current&&x.current.focus()},D=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},S=i?(e=>e?v?et.transformWithSpaces(e,s):e:"")(i):i,k=g&&!c&&!u&&!!i,F=()=>t(r,{children:[e(tu,Object.assign({"data-testid":"input",ref:x,"aria-disabled":c,value:S,onChange:$,type:l,readOnly:u||c,$showClear:k,$styleType:p,$visuallyReadOnly:u},b)),k&&e(ru,{onClick:C,type:"button","aria-label":"Clear input",$styleType:p,children:e(nu,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===p?e(ou,{className:m,children:F()}):e(iu,{$disabled:c,$error:d,$readOnly:u,className:m,children:F()})})})),su=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y}=t,x=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${Je.generate()}`)),$=null!=i?i:w;return e(Ks,{id:$,"data-testid":l,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(au,Object.assign({id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,ref:r,error:!!o},x))})})),lu=k.div`
    font-weight: ${e=>e.$bold?da.Spec["weight-semibold"]:da.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${la["text-disabled"]};
            `:e.$selected?F`
                color: ${la["text-selected"]};
            `:F`
                color: ${la.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&_a(e.$maxLines||2)}
    overflow-wrap: break-word;
`,du=k.div`
    color: ${la["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&_a(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${da["body-md-semibold"]}
                `:F`
                    ${da["body-baseline-regular"]}
                `}
`,cu=k.span`
    font-weight: ${da.Spec["weight-semibold"]};
`,uu=k.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?da["body-md-regular"]:da["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${lu} {
                        display: inline;
                    }

                    ${du} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,hu=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,fu=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,gu=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const f=p(_),m="small"===h?da.Spec["body-size-md"]({theme:f}):da.Spec["body-size-baseline"]({theme:f}),b=da.Spec["font-family"]({theme:f}),{ref:y,width:x}=qt(),w=g((e=>{if("inline"!==o||!x)return!1;return et.getTextWidth(e,`${m} '${b}'`)>x*s-50}),[x,o,m,b,s]),$=v((()=>w(i)),[w,i]),C=v((()=>c&&w(c)),[w,c]),D=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:t(r,{children:[i.slice(0,s),e(cu,{$variant:h,children:i.slice(s,l)}),i.slice(l)]})},S=n=>t(r,{children:[e(hu,{$maxLines:s,"aria-hidden":!0,children:D(n)}),e(fu,{$maxLines:s,"aria-hidden":!0,children:D(n)})]});return t(uu,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:h,children:[e(lu,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?S(i):D(i)}),c&&e(du,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&C?S(c):c})]})};var mu=Pn;var pu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var bu=function(e){return this.__data__.get(e)};var vu=function(e){return this.__data__.has(e)},yu=Pn,xu=Hn,wu=so;var $u=function(e,t){var r=this.__data__;if(r instanceof yu){var n=r.__data__;if(!xu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new wu(n)}return r.set(e,t),this.size=r.size,this},Cu=Pn,Du=function(){this.__data__=new mu,this.size=0},Su=pu,ku=bu,Fu=vu,Eu=$u;function _u(e){var t=this.__data__=new Cu(e);this.size=t.size}_u.prototype.clear=Du,_u.prototype.delete=Su,_u.prototype.get=ku,_u.prototype.has=Fu,_u.prototype.set=Eu;var Ou=_u;var Tu=so,Mu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Iu=function(e){return this.__data__.has(e)};function Bu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Tu;++t<r;)this.add(e[t])}Bu.prototype.add=Bu.prototype.push=Mu,Bu.prototype.has=Iu;var Au=function(e,t){return e.has(t)},zu=Bu,ju=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Lu=Au;var Ru=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,f=2&r?new zu:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var g=e[u],m=t[u];if(n)var p=a?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(void 0!==p){if(p)continue;h=!1;break}if(f){if(!ju(t,(function(e,t){if(!Lu(f,t)&&(g===e||o(g,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Pu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Hu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Nu=dr.Uint8Array,Wu=$n,Yu=Ru,Vu=Pu,Uu=Hu,Ku=cr?cr.prototype:void 0,Zu=Ku?Ku.valueOf:void 0;var qu=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Nu(e),new Nu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Wu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Vu;case"[object Set]":var l=1&n;if(s||(s=Uu),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=Yu(s(e),s(t),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Zu)return Zu.call(e)==Zu.call(t)}return!1};var Gu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Xu=Gu,Qu=ir;var Ju=function(e,t,r){var n=t(e);return Qu(e)?n:Xu(n,r(e))};var eh=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},th=function(){return[]},rh=Object.prototype.propertyIsEnumerable,nh=Object.getOwnPropertySymbols,oh=nh?function(e){return null==e?[]:(e=Object(e),eh(nh(e),(function(t){return rh.call(e,t)})))}:th;var ih=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ah=wr,sh=$r;var lh=function(e){return sh(e)&&"[object Arguments]"==ah(e)},dh=$r,ch=Object.prototype,uh=ch.hasOwnProperty,hh=ch.propertyIsEnumerable,fh=lh(function(){return arguments}())?lh:function(e){return dh(e)&&uh.call(e,"callee")&&!hh.call(e,"callee")},gh={exports:{}};var mh=function(){return!1};!function(e,t){var r=dr,n=mh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(gh,gh.exports);var ph=gh.exports,bh=/^(?:0|[1-9]\d*)$/;var vh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&bh.test(e))&&e>-1&&e%1==0&&e<t};var yh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},xh=wr,wh=yh,$h=$r,Ch={};Ch["[object Float32Array]"]=Ch["[object Float64Array]"]=Ch["[object Int8Array]"]=Ch["[object Int16Array]"]=Ch["[object Int32Array]"]=Ch["[object Uint8Array]"]=Ch["[object Uint8ClampedArray]"]=Ch["[object Uint16Array]"]=Ch["[object Uint32Array]"]=!0,Ch["[object Arguments]"]=Ch["[object Array]"]=Ch["[object ArrayBuffer]"]=Ch["[object Boolean]"]=Ch["[object DataView]"]=Ch["[object Date]"]=Ch["[object Error]"]=Ch["[object Function]"]=Ch["[object Map]"]=Ch["[object Number]"]=Ch["[object Object]"]=Ch["[object RegExp]"]=Ch["[object Set]"]=Ch["[object String]"]=Ch["[object WeakMap]"]=!1;var Dh=function(e){return $h(e)&&wh(e.length)&&!!Ch[xh(e)]};var Sh=function(e){return function(t){return e(t)}},kh={exports:{}};!function(e,t){var r=ar,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(kh,kh.exports);var Fh=kh.exports,Eh=Dh,_h=Sh,Oh=Fh&&Fh.isTypedArray,Th=Oh?_h(Oh):Eh,Mh=ih,Ih=fh,Bh=ir,Ah=ph,zh=vh,jh=Th,Lh=Object.prototype.hasOwnProperty;var Rh=function(e,t){var r=Bh(e),n=!r&&Ih(e),o=!r&&!n&&Ah(e),i=!r&&!n&&!o&&jh(e),a=r||n||o||i,s=a?Mh(e.length,String):[],l=s.length;for(var d in e)!t&&!Lh.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||zh(d,l))||s.push(d);return s},Ph=Object.prototype;var Hh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ph)};var Nh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Wh=Hh,Yh=Nh,Vh=Object.prototype.hasOwnProperty;var Uh=function(e){if(!Wh(e))return Yh(e);var t=[];for(var r in Object(e))Vh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Kh=Ar,Zh=yh;var qh=function(e){return null!=e&&Zh(e.length)&&!Kh(e)},Gh=Rh,Xh=Uh,Qh=qh;var Jh=function(e){return Qh(e)?Gh(e):Xh(e)},ef=Ju,tf=oh,rf=Jh;var nf=function(e){return ef(e,rf,tf)},of=Object.prototype.hasOwnProperty;var af=function(e,t,r,n,o,i){var a=1&r,s=nf(e),l=s.length;if(l!=nf(t).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in t:of.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var g=a;++d<l;){var m=e[c=s[d]],p=t[c];if(n)var b=a?n(p,m,c,t,e,i):n(m,p,c,e,t,i);if(!(void 0===b?m===p||o(m,p,r,n,i):b)){f=!1;break}g||(g="constructor"==c)}if(f&&!g){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},sf=en(dr,"DataView"),lf=Hn,df=en(dr,"Promise"),cf=en(dr,"Set"),uf=en(dr,"WeakMap"),hf=wr,ff=Pr,gf="[object Map]",mf="[object Promise]",pf="[object Set]",bf="[object WeakMap]",vf="[object DataView]",yf=ff(sf),xf=ff(lf),wf=ff(df),$f=ff(cf),Cf=ff(uf),Df=hf;(sf&&Df(new sf(new ArrayBuffer(1)))!=vf||lf&&Df(new lf)!=gf||df&&Df(df.resolve())!=mf||cf&&Df(new cf)!=pf||uf&&Df(new uf)!=bf)&&(Df=function(e){var t=hf(e),r="[object Object]"==t?e.constructor:void 0,n=r?ff(r):"";if(n)switch(n){case yf:return vf;case xf:return gf;case wf:return mf;case $f:return pf;case Cf:return bf}return t});var Sf=Df,kf=Ou,Ff=Ru,Ef=qu,_f=af,Of=Sf,Tf=ir,Mf=ph,If=Th,Bf="[object Arguments]",Af="[object Array]",zf="[object Object]",jf=Object.prototype.hasOwnProperty;var Lf=function(e,t,r,n,o,i){var a=Tf(e),s=Tf(t),l=a?Af:Of(e),d=s?Af:Of(t),c=(l=l==Bf?zf:l)==zf,u=(d=d==Bf?zf:d)==zf,h=l==d;if(h&&Mf(e)){if(!Mf(t))return!1;a=!0,c=!1}if(h&&!c)return i||(i=new kf),a||If(e)?Ff(e,t,r,n,o,i):Ef(e,t,l,r,n,o,i);if(!(1&r)){var f=c&&jf.call(e,"__wrapped__"),g=u&&jf.call(t,"__wrapped__");if(f||g){var m=f?e.value():e,p=g?t.value():t;return i||(i=new kf),o(m,p,r,n,i)}}return!!h&&(i||(i=new kf),_f(e,t,r,n,o,i))},Rf=$r;var Pf=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Rf(t)&&!Rf(r)?t!=t&&r!=r:Lf(t,r,n,o,e,i))},Hf=Ou,Nf=Pf;var Wf=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Hf;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Nf(c,d,3,n,u):h))return!1}}return!0},Yf=Tr;var Vf=function(e){return e==e&&!Yf(e)},Uf=Vf,Kf=Jh;var Zf=function(e){for(var t=Kf(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Uf(o)]}return t};var qf=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Gf=Wf,Xf=Zf,Qf=qf;var Jf=function(e,t){return null!=e&&t in Object(e)},eg=Fo,tg=fh,rg=ir,ng=vh,og=yh,ig=_o;var ag=function(e,t,r){for(var n=-1,o=(t=eg(t,e)).length,i=!1;++n<o;){var a=ig(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&og(o)&&ng(a,o)&&(rg(e)||tg(e))},sg=Jf,lg=ag;var dg=Pf,cg=Bo,ug=function(e,t){return null!=e&&lg(e,t,sg)},hg=Or,fg=Vf,gg=qf,mg=_o;var pg=function(e){return function(t){return null==t?void 0:t[e]}},bg=Mo;var vg=pg,yg=function(e){return function(t){return bg(t,e)}},xg=Or,wg=_o;var $g=function(e){var t=Xf(e);return 1==t.length&&t[0][2]?Qf(t[0][0],t[0][1]):function(r){return r===e||Gf(r,e,t)}},Cg=function(e,t){return hg(e)&&fg(t)?gg(mg(e),t):function(r){var n=cg(r,e);return void 0===n&&n===t?ug(r,e):dg(t,n,3)}},Dg=function(e){return e},Sg=ir,kg=function(e){return xg(e)?vg(wg(e)):yg(e)};var Fg=function(e){return"function"==typeof e?e:null==e?Dg:"object"==typeof e?Sg(e)?Cg(e[0],e[1]):$g(e):kg(e)},Eg=Fg,_g=qh,Og=Jh;var Tg=function(e){return function(t,r,n){var o=Object(t);if(!_g(t)){var i=Eg(r);t=Og(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Mg=/\s/;var Ig=function(e){for(var t=e.length;t--&&Mg.test(e.charAt(t)););return t},Bg=/^\s+/;var Ag=function(e){return e?e.slice(0,Ig(e)+1).replace(Bg,""):e},zg=Tr,jg=Sr,Lg=/^[-+]0x[0-9a-f]+$/i,Rg=/^0b[01]+$/i,Pg=/^0o[0-7]+$/i,Hg=parseInt;var Ng=function(e){if("number"==typeof e)return e;if(jg(e))return NaN;if(zg(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=zg(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ag(e);var r=Rg.test(e);return r||Pg.test(e)?Hg(e.slice(2),r?2:8):Lg.test(e)?NaN:+e},Wg=Ng,Yg=1/0;var Vg=function(e){return e?(e=Wg(e))===Yg||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ug=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Kg=Fg,Zg=function(e){var t=Vg(e),r=t%1;return t==t?r?t-r:t:0},qg=Math.max;var Gg=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Zg(r);return o<0&&(o=qg(n+o,0)),Ug(e,Kg(t),o)},Xg=_e(Gg),Qg=_e(Tg(Gg)),Jg=Pf;var em=_e((function(e,t){return Jg(e,t)}));function tm(e){return()=>e}function rm(e){e()}function nm(e,t){return r=>e(t(r))}function om(e,t){return()=>e(t)}function im(e,t){return r=>e(t,r)}function am(e){return void 0!==e}function sm(){}function lm(e,t){return t(e),e}function dm(e,t){return t(e)}function cm(...e){return e}function um(e,t){return e(1,t)}function hm(e,t){e(0,t)}function fm(e){e(2)}function gm(e){return e(4)}function mm(e,t){return um(e,im(t,0))}function pm(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function bm(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function vm(e,t){return e===t}function ym(e=vm){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function xm(e){return t=>r=>{e(r)&&t(r)}}function wm(e){return t=>nm(t,e)}function $m(e){return t=>()=>{t(e)}}function Cm(e,...t){const r=function(...e){return t=>e.reduceRight(dm,t)}(...t);return(t,n)=>{switch(t){case 2:return void fm(e);case 1:return um(e,r(n))}}}function Dm(e,t){return r=>n=>{r(t=e(t,n))}}function Sm(e){return t=>r=>{e>0?e--:t(r)}}function km(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Fm(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);um(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function Em(e){let t=e;const r=Om();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function _m(e,t){return lm(Em(t),(t=>mm(e,t)))}function Om(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Tm(e){return lm(Om(),(t=>mm(e,t)))}function Mm(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Im(),singleton:r}}const Im=()=>Symbol();function Bm(...e){const t=Om(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);um(e,(e=>{r[i]=e,n|=a,n===o&&hm(t,r)}))})),function(e,i){switch(e){case 2:return void fm(t);case 1:return n===o&&i(r),um(t,i)}}}function Am(e,t=vm){return Cm(e,ym(t))}function zm(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(rm)}}(...e.map((e=>um(e,r))))}}}var jm=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(jm||{});const Lm={0:"debug",3:"error",1:"log",2:"warn"},Rm=Mm((()=>{const e=Em(3);return{log:Em(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:gm(e))&&console[Lm[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Pm(e,t,r){return Hm(e,t,r).callbackRef}function Hm(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Nm(e,t,r,n,i,a,s,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},jm.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?Wm("column-gap",getComputedStyle(r).columnGap,i):Wm("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return Hm(c,r,d)}function Wm(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,jm.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Ym(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=Hm(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const Vm=Mm((()=>{const e=Om(),t=Om(),r=Em(0),n=Om(),o=Em(0),i=Om(),a=Om(),s=Em(0),l=Em(0),d=Em(0),c=Em(0),u=Om(),h=Om(),f=Em(!1),g=Em(!1),m=Em(!1);return mm(Cm(e,wm((({scrollTop:e})=>e))),t),mm(Cm(e,wm((({scrollHeight:e})=>e))),a),mm(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:g,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Um={lvl:0};function Km(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function Zm(e){return e===Um}function qm(e,t){if(!Zm(e))return t===e.k?e.v:t<e.k?qm(e.l,t):qm(e.r,t)}function Gm(e,t,r="k"){if(Zm(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Gm(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Gm(e.l,t,r)}function Xm(e,t,r){return Zm(e)?lp(t,r,1):t===e.k?op(e,{k:t,v:r}):t<e.k?dp(op(e,{l:Xm(e.l,t,r)})):dp(op(e,{r:Xm(e.r,t,r)}))}function Qm(){return Um}function Jm(e,t,r){if(Zm(e))return[];return function(e){return Km(e,(({k:e,v:t})=>({index:e,value:t})))}(rp(e,Gm(e,t)[0],r))}function ep(e,t){if(Zm(e))return Um;const{k:r,l:n,r:o}=e;if(t===r){if(Zm(n))return o;if(Zm(o))return n;{const[t,r]=sp(n);return np(op(e,{k:t,l:ip(n),v:r}))}}return np(op(e,t<r?{l:ep(n,t)}:{r:ep(o,t)}))}function tp(e){return Zm(e)?[]:[...tp(e.l),{k:e.k,v:e.v},...tp(e.r)]}function rp(e,t,r){if(Zm(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(rp(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(rp(i,t,r))),s}function np(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(ap(t))return cp(op(e,{lvl:r-1}));if(!Zm(t)&&!Zm(t.r))return op(t.r,{l:op(t,{r:t.r.l}),lvl:r,r:op(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(ap(e))return up(op(e,{lvl:r-1}));if(Zm(n)||Zm(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=ap(t)?n.lvl-1:n.lvl;return op(t,{l:op(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:up(op(n,{l:t.r,lvl:o}))})}}function op(e,t){return lp(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function ip(e){return Zm(e.r)?e.l:np(op(e,{r:ip(e.r)}))}function ap(e){return Zm(e)||e.lvl>e.r.lvl}function sp(e){return Zm(e.r)?[e.k,e.v]:sp(e.r)}function lp(e,t,r,n=Um,o=Um){return{k:e,l:n,lvl:r,r:o,v:t}}function dp(e){return up(cp(e))}function cp(e){const{l:t}=e;return Zm(t)||t.lvl!==e.lvl?e:op(t,{r:op(e,{l:t.r})})}function up(e){const{lvl:t,r:r}=e;return Zm(r)||Zm(r.r)||r.lvl!==t||r.r.lvl!==t?e:op(r,{l:op(e,{r:r.l}),lvl:t+1})}function hp(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function fp(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const gp=Mm((()=>({recalcInProgress:Em(!1)})),[],{singleton:!0});function mp(e,t,r){return e[pp(e,t,r)]}function pp(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function bp(e,t){return Math.round(e.getBoundingClientRect()[t])}function vp(e){return!Zm(e.groupOffsetTree)}function yp({index:e},t){return t===e?0:t<e?-1:1}function xp({offset:e},t){return t===e?0:t<e?-1:1}function wp(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=mp(t,e,yp),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function $p(e,t){if(!vp(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Cp(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=$p("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Dp(e,t,r,n=0){return n>0&&(t=Math.max(t,mp(e,n,yp).offset)),Km(function(e,t,r,n){const o=pp(e,t,n),i=pp(e,r,n,o);return e.slice(o,i+1)}(e,t,r,xp),Ep)}function Sp(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,jm.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&Zm(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Xm(Xm(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Zm(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Zm(e)){e=Xm(e,0,o);continue}const a=Jm(e,i-1,t+1);if(a.some(_p(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=ep(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=Xm(e,t+1,i));l&&(e=Xm(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Fp(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Xm(e,t,wp(t,u,o))),Qm()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function kp(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Fp(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=pp(o,t-1,yp),s=o[l].offset;const e=Gm(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===Gm(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Jm(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Ep(e){return{index:e.index,value:e}}function _p(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Op={offsetHeight:"height",offsetWidth:"width"},Tp=Mm((([{log:e},{recalcInProgress:t}])=>{const r=Om(),n=Om(),o=_m(n,0),i=Om(),a=Om(),s=Em(0),l=Em([]),d=Em(void 0),c=Em(void 0),u=Em(((e,t)=>bp(e,Op[t]))),h=Em(void 0),f=Em(0),g={groupIndices:[],groupOffsetTree:Qm(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Qm()},m=_m(Cm(r,Fm(l,e,f),Dm(Sp,g),ym()),g),p=_m(Cm(l,ym(),Dm(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),wm((({prev:e})=>e))),[]);mm(Cm(l,xm((e=>e.length>0)),Fm(m,f),wm((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Xm(e,n,wp(n,t.offsetTree,r)||o)),Qm());return{...t,groupIndices:e,groupOffsetTree:n}}))),m),mm(Cm(n,Fm(m),xm((([e,{lastIndex:t}])=>e<t)),wm((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),mm(d,c);const b=_m(Cm(d,wm((e=>void 0===e))),!0);mm(Cm(c,xm((e=>void 0!==e&&Zm(gm(m).sizeTree))),wm((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Tm(Cm(r,Fm(m),Dm((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:g}),wm((e=>e.changed))));um(Cm(s,Dm(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),wm((e=>e.diff))),(e=>{const{groupIndices:r}=gm(m);if(e>0)hm(t,!0),hm(i,e+kp(e,r));else if(e<0){const t=gm(p);t.length>0&&(e-=kp(-e,t)),hm(a,e)}})),um(Cm(s,Fm(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},jm.ERROR)}));const y=Tm(i);mm(Cm(i,Fm(m),wm((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=qm(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=tp(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return tp(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Tm(Cm(a,Fm(m,f),wm((([e,{offsetTree:t},r])=>wp(-e,t,r)))));return mm(Cm(a,Fm(m,f),wm((([e,t,r])=>{if(t.groupIndices.length>0){if(Zm(t.sizeTree))return t;let n=Qm();const o=gm(p);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=tp(t.sizeTree).reduce(((t,{k:r,v:n})=>Xm(t,Math.max(0,r+e),n)),n),i!==-e){n=Xm(n,0,qm(t.sizeTree,s));n=Xm(n,1,Gm(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Fp(t.offsetTree,0,n,r)}}{const n=tp(t.sizeTree).reduce(((t,{k:r,v:n})=>Xm(t,Math.max(0,r+e),n)),Qm());return{...t,sizeTree:n,...Fp(t.offsetTree,0,n,r)}}}))),m),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:m,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),cm(Rm,gp),{singleton:!0});function Mp(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Ip=Mm((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Om(),a=Om(),s=Tm(Cm(i,wm(Mp)));return mm(Cm(s,wm((e=>e.totalCount))),r),mm(Cm(s,wm((e=>e.groupIndices))),e),mm(Cm(Bm(o,t,n),xm((([e,t])=>vp(t))),wm((([e,t,r])=>Gm(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),ym(),wm((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),cm(Tp,Vm)),Bp=Mm((([{log:e}])=>{const t=Em(!1),r=Tm(Cm(t,xm((e=>e)),ym()));return um(t,(t=>{t&&gm(e)("props updated",{},jm.DEBUG)})),{didMount:r,propsReady:t}}),cm(Rm),{singleton:!0}),Ap=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function zp(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Ap)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const jp=Mm((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const f=Om(),g=Om(),m=Em(0);let p=null,b=null,v=null;function y(){p&&(p(),p=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),hm(l,!1)}return mm(Cm(f,Fm(r,u,n,m,s,a,h),Fm(e,i,o),wm((([[e,r,n,o,i,a,s,d],u,h,m])=>{const x=zp(e),{align:w,behavior:$,offset:C}=x,D=o-1,S=Cp(x,r,D);let k=wp(S,r.offsetTree,u)+a;"end"===w?(k+=h+Gm(r.sizeTree,S)[1]-n+m,S===D&&(k+=s)):"center"===w?k+=(h+Gm(r.sizeTree,S)[1]-n+m)/2:k-=i,C&&(k+=C);const F=t=>{y(),t?(d("retrying to scroll to",{location:e},jm.DEBUG),hm(f,e)):(hm(g,!0),d("list did not change, scroll successful",{},jm.DEBUG))};if(y(),"smooth"===$){let e=!1;v=um(t,(t=>{e=e||t})),p=pm(c,(()=>{F(e)}))}else p=pm(Cm(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),F);return b=setTimeout((()=>{y()}),1200),hm(l,!0),d("scrolling from index to",{behavior:$,index:S,top:k},jm.DEBUG),{behavior:$,top:k}}))),d),{scrollTargetReached:g,scrollToIndex:f,topListHeight:m}}),cm(Tp,Vm,Rm),{singleton:!0});function Lp(e,t){0==e?t():requestAnimationFrame((()=>{Lp(e-1,t)}))}function Rp(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Pp=Mm((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Em(!0),l=Em(0),d=Em(!0);return mm(Cm(a,Fm(l),xm((([e,t])=>!!t)),$m(!1)),s),mm(Cm(a,Fm(l),xm((([e,t])=>!!t)),$m(!1)),d),um(Cm(Bm(t,a),Fm(s,r,e,d),xm((([[,e],t,{sizeTree:r},n,o])=>e&&(!Zm(r)||am(n))&&!t&&!o)),Fm(l)),(([,e])=>{pm(o,(()=>{hm(d,!0)})),Lp(4,(()=>{pm(n,(()=>{hm(s,!0)})),hm(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),cm(Tp,Vm,jp,Bp),{singleton:!0});function Hp(e,t){return Math.abs(e-t)<1.01}const Np="up",Wp="down",Yp={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Vp=Mm((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=Em(!1),s=Em(!0),l=Om(),d=Om(),c=Em(4),u=Em(0),h=_m(Cm(zm(Cm(Am(o),Sm(1),$m(!0)),Cm(Am(o),Sm(1),$m(!1),bm(100))),ym()),!1),f=_m(Cm(zm(Cm(r,$m(!0)),Cm(r,$m(!1),bm(200))),ym()),!1);mm(Cm(Bm(Am(o),Am(u)),wm((([e,t])=>e<=t)),ym()),s),mm(Cm(s,km(50)),d);const g=Tm(Cm(Bm(n,Am(i),Am(t),Am(e),Am(c)),Dm(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Yp),ym(((e,t)=>e&&e.atBottom===t.atBottom)))),m=_m(Cm(n,Dm(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Hp(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),xm((e=>e.changed)),wm((e=>e.jump))),0);mm(Cm(g,wm((e=>e.atBottom))),a),mm(Cm(a,km(50)),l);const p=Em(Wp);mm(Cm(n,wm((({scrollTop:e})=>e)),ym(),Dm(((e,t)=>gm(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Np:Wp,prevScrollTop:t}),{direction:Wp,prevScrollTop:0}),wm((e=>e.direction))),p),mm(Cm(n,km(50),$m("none")),p);const b=Em(0);return mm(Cm(h,xm((e=>!e)),$m(0)),b),mm(Cm(o,km(100),Fm(h),xm((([e,t])=>!!t)),Dm((([e,t],[r])=>[t,r]),[0,0]),wm((([e,t])=>t-e))),b),{atBottomState:g,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:m,scrollDirection:p,scrollVelocity:b}}),cm(Vm)),Up="top",Kp="bottom",Zp="none";function qp(e,t,r){return"number"==typeof e?r===Np&&t===Up||r===Wp&&t===Kp?e:0:r===Np?t===Up?e.main:e.reverse:t===Kp?e.main:e.reverse}function Gp(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Xp=Mm((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Om(),a=Em(0),s=Em(0),l=Em(0),d=_m(Cm(Bm(Am(n),Am(o),Am(r),Am(i,fp),Am(l),Am(a),Am(t),Am(e),Am(s)),wm((([e,t,r,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,h=Math.max(r-c,0);let f=Zp;const g=Gp(d,Up),m=Gp(d,Kp);return n-=l,o+=r+s,(n+=r+s)>e+u-g&&(f=Np),(o-=l)<e-h+t+m&&(f=Wp),f!==Zp?[Math.max(c-r-qp(i,Up,f)-g,0),c-h-s+t+qp(i,Kp,f)+m]:null})),xm((e=>null!=e)),ym(fp)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:d}}),cm(Vm),{singleton:!0});const Qp={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Jp(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,h=d,f=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:tb(e,o,i),offsetBottom:f,offsetTop:d,top:h,topItems:tb(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function eb(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=Rp(t,s);return Jp(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function tb(e,t,r){if(0===e.length)return[];if(!vp(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Jm(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const rb=Mm((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:f},{recalcInProgress:g}])=>{const m=Em([]),p=Em(0),b=Om();mm(i.topItemsIndexes,m);const v=_m(Cm(Bm(f,g,Am(l,fp),Am(o),Am(n),Am(d),c,Am(m),Am(t),Am(r),e),xm((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),wm((([,,[e,t],r,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,f=gm(p);if(0===r)return{...Qp,totalCount:r};if(0===e&&0===t)return 0===f?{...Qp,totalCount:r}:eb(f,o,n,s,l,d||[]);if(Zm(h))return f>0?null:Jp(function(e,t,r){if(vp(t)){const n=$p(e,t);return[{index:Gm(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Rp(o,r),c,d),[],r,l,c,s);const g=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of Jm(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)g.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Jp([],g,r,l,c,s);const m=a.length>0?a[a.length-1]+1:0,b=Dp(u,e,t,m);if(0===b.length)return null;const v=r-1;return Jp(lm([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<m&&(i+=(m-a)*s,a=m);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),g,r,l,c,s)})),xm((e=>null!==e)),ym()),Qp);mm(Cm(e,xm(am),wm((e=>null==e?void 0:e.length))),o),mm(Cm(v,wm((e=>e.topListHeight))),u),mm(u,s),mm(Cm(v,wm((e=>[e.top,e.bottom]))),a),mm(Cm(v,wm((e=>e.items))),b);const y=Tm(Cm(v,xm((({items:e})=>e.length>0)),Fm(o,e),xm((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),wm((([,e,t])=>[e-1,t])),ym(fp),wm((([e])=>e)))),x=Tm(Cm(v,km(200),xm((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),wm((({items:e})=>e[0].index)),ym())),w=Tm(Cm(v,xm((({items:e})=>e.length>0)),wm((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),ym(hp)));return{endReached:y,initialItemCount:p,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:m,...h}}),cm(Tp,Ip,Xp,Pp,jp,Vp,Bp,gp),{singleton:!0}),nb=Mm((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Om(),a=_m(Cm(Bm(r,e,n,t,o),wm((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return mm(Am(a),i),{totalListHeight:a,totalListHeightChanged:i}}),cm(Vm,rb),{singleton:!0}),ob=Mm((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Em(!1),n=_m(Cm(Bm(r,e,t),xm((([e])=>e)),wm((([,e,t])=>Math.max(0,e-t))),km(0),ym()),0);return{alignToBottom:r,paddingTopAddition:n}}),cm(Vm,nb),{singleton:!0});function ib(e){return!!e&&("smooth"===e?"smooth":"auto")}const ab=Mm((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=Em(!1),u=Om();let h=null;function f(e){hm(o,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=pm(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(gm(l)("scrolling to bottom due to increased size",{},jm.DEBUG),f("auto"))}));setTimeout(t,100)}return um(Cm(Bm(Cm(Am(t),Sm(1)),a),Fm(Am(c),n,i,d),wm((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?ib(e(t)):t&&ib(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),xm((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=pm(e,(()=>{gm(l)("following output to ",{totalCount:r},jm.DEBUG),f(t),h=null}))})),um(Cm(Bm(Am(c),t,s),xm((([e,,t])=>e&&t)),Dm((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),xm((({refreshed:e})=>e)),Fm(c,t)),(([,e])=>{gm(i)&&g(!1!==e)})),um(u,(()=>{g(!1!==gm(c))})),um(Bm(Am(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:c}}),cm(Tp,Vp,jp,Pp,Bp,Rm,Vm)),sb=Mm((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(mm(Cm(s,Fm(i),xm((([,e])=>0!==e)),Fm(o,n,t,r,e),wm((([[,e],t,r,n,o,i=[]])=>eb(e,t,r,n,o,i)))),a),{})),cm(Tp,Pp,rb,Bp),{singleton:!0}),lb=Mm((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Em(0);return um(Cm(e,Fm(n),xm((([,e])=>0!==e)),wm((([,e])=>({top:e})))),(e=>{pm(Cm(r,Sm(1),xm((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{hm(t,e)}))}))})),{initialScrollTop:n}}),cm(Bp,Vm,rb),{singleton:!0}),db=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,cb=Mm((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=Om();return mm(Cm(c,Fm(t,l,r,i,o,n,s),Fm(e),wm((([[e,t,r,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=db,done:f,...g}=e,m=Cp(e,t,n-1),p=wp(m,t.offsetTree,d)+o+i,b=h({itemBottom:p+Gm(t.sizeTree,m)[1],itemTop:p,locationParams:{align:c,behavior:u,...g},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&pm(Cm(a,xm((e=>!e)),Sm(gm(a)?1:2)),f):f&&f(),b})),xm((e=>null!==e))),d),{scrollIntoView:c}}),cm(Tp,Vm,jp,rb,Rm),{singleton:!0}),ub=Mm((([{scrollVelocity:e}])=>{const t=Em(!1),r=Om(),n=Em(!1);return mm(Cm(e,Fm(n,t,r),xm((([e,t])=>!!t)),wm((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),ym()),t),um(Cm(Bm(t,e,r),Fm(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),cm(Vp),{singleton:!0}),hb=Mm((([{scrollContainerState:e,scrollTo:t}])=>{const r=Om(),n=Om(),o=Om(),i=Em(!1),a=Em(void 0);return mm(Cm(Bm(r,n),wm((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),mm(Cm(t,Fm(n),wm((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),cm(Vm)),fb=Mm((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=Om(),c=Em(void 0),u=Em(null),h=Em(null);return mm(s,u),mm(l,h),um(Cm(d,Fm(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return tp(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),mm(Cm(c,xm(am),wm(gb)),o),mm(Cm(i,Fm(c),xm((([,e])=>void 0!==e)),ym(),wm((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),cm(Tp,Vm,Pp,Bp,hb));function gb(e){return{align:"start",index:0,offset:e.scrollTop}}const mb=Mm((([{topItemsIndexes:e}])=>{const t=Em(0);return mm(Cm(t,xm((e=>e>=0)),wm((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),cm(rb));function pb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const bb=pb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),vb=Mm((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:g}])=>{const m=Tm(Cm(l,Fm(a),Dm((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),xm((([e])=>0!==e)),Fm(n,s,r,o,f,g),xm((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Np)),wm((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},jm.DEBUG),e)))));function p(r){r>0?(hm(t,{behavior:"auto",top:-r}),hm(e,0)):(hm(e,0),hm(t,{behavior:"auto",top:-r}))}return um(Cm(m,Fm(e,i)),(([t,r,n])=>{n&&bb()?hm(e,r-t):p(-t)})),um(Cm(Bm(_m(i,!1),e,g),xm((([e,t,r])=>!e&&!r&&0!==t)),wm((([e,t])=>t)),km(1)),p),mm(Cm(u,wm((e=>({top:-e})))),t),um(Cm(d,Fm(h,c),wm((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=qm(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{hm(e,r),requestAnimationFrame((()=>{hm(t,{top:r}),requestAnimationFrame((()=>{hm(e,0),hm(g,!1)}))}))})),{deviation:e}}),cm(Vm,Vp,rb,Tp,Rm,gp)),yb=Mm((([e,t,r,n,o,i,a,s,l,d])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...d})),cm(Xp,sb,Bp,ub,nb,lb,ob,hb,cb,Rm)),xb=Mm((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:g},m,p,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:D},S])=>(mm(x.rangeChanged,S.scrollSeekRangeChanged),mm(Cm(S.windowViewportRect,wm((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:D,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:g,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...S,...m,sizes:l,...p})),cm(Tp,Pp,Vm,fb,ab,rb,jp,vb,mb,Ip,yb));function wb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const $b=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Cb(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&hm(e.propsReady,!1);for(const n of i){hm(e[r.required[n]],t[n])}for(const n of a)if(n in t){hm(e[r.optional[n]],t[n])}e.propsReady&&hm(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=um(e,i),t):(n(),sm);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:g,...m}=h,[p]=o.useState((()=>lm(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{c(e,m)})))),[b]=o.useState(om(u,p));$b((()=>{for(const e of l)e in m&&um(b[e],m[e]);return()=>{Object.values(b).map(fm)}}),[m,b,p]),$b((()=>{c(p,m)})),o.useImperativeHandle(f,tm(function(e){return s.reduce(((t,n)=>(t[n]=t=>{hm(e[r.methods[n]],t)},t)),{})}(p)));const v=n;return e(d.Provider,{value:p,children:n?e(v,{...wb([...i,...a,...l],m),children:g}):g})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>um(t,e)),[t]);return o.useSyncExternalStore(r,(()=>gm(t)),(()=>gm(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(om(gm,t));return $b((()=>um(t,(e=>{e!==r&&n(tm(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];$b((()=>um(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(im(hm,o.useContext(d)[e]),[e])}}const Db=o.createContext(void 0),Sb=o.createContext(void 0),kb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Fb(e,t,r,n=sm,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():J.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(bp(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=bp(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Hp(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Eb="-webkit-sticky",_b="sticky",Ob=pb((()=>{if(typeof document>"u")return _b;const e=document.createElement("div");return e.style.position=Eb,e.style.position===Eb?Eb:_b}));function Tb(e){return e}const Mb=Mm((()=>{const e=Em((e=>`Item ${e}`)),t=Em(null),r=Em((e=>`Group ${e}`)),n=Em({}),o=Em(Tb),i=Em("div"),a=Em(sm),s=(e,t=null)=>_m(Cm(n,wm((t=>t[e])),ym()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Ib=Mm((([e,t])=>({...e,...t})),cm(xb,Mb)),Bb=({height:t})=>e("div",{style:{height:t}}),Ab={overflowAnchor:"none",position:Ob(),zIndex:1},zb={overflowAnchor:"none"},jb={...zb,display:"inline-block",height:"100%"},Lb=o.memo((function({showTopList:t=!1}){const r=tv("listState"),n=rv("sizeRanges"),i=tv("useWindowScroll"),a=tv("customScrollParent"),s=rv("windowScrollContainerState"),l=rv("scrollContainerState"),d=a||i?s:l,c=tv("itemContent"),u=tv("context"),h=tv("groupContent"),f=tv("trackItemSizes"),g=tv("itemSize"),m=tv("log"),p=rv("gap"),b=tv("horizontalDirection"),{callbackRef:v}=Nm(n,g,f,t?sm:d,m,p,a,b,tv("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);ev("deviation",(e=>{y!==e&&x(e)}));const w=tv("EmptyPlaceholder"),$=tv("ScrollSeekPlaceholder")||Bb,D=tv("ListComponent"),S=tv("ItemComponent"),k=tv("GroupComponent"),F=tv("computeItemKey"),E=tv("isSeeking"),_=tv("groupIndices").length>0,O=tv("alignToBottom"),T=tv("initialItemFinalLocationReached"),M=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...Wb(w,u)}):e(D,{...Wb(D,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:M,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=F(t+r.firstItemIndex,e.data,u);return E?C($,{...Wb($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?C(k,{...Wb(k,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Ab},h(e.index,u)):C(S,{...Wb(S,u),...Yb(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?jb:zb},_?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Rb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Pb={outline:"none",overflowX:"auto",position:"relative"},Hb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Nb={position:Ob(),top:0,width:"100%",zIndex:1};function Wb(e,t){if("string"!=typeof e)return{context:t}}function Yb(e,t){return{item:"string"==typeof e?void 0:t}}const Vb=o.memo((function(){const t=tv("HeaderComponent"),r=rv("headerHeight"),n=tv("HeaderFooterTag"),i=Pm(o.useMemo((()=>e=>{r(bp(e,"height"))}),[r]),!0,tv("skipAnimationFrameInResizeObserver")),a=tv("context");return t?e(n,{ref:i,children:e(t,{...Wb(t,a)})}):null})),Ub=o.memo((function(){const t=tv("FooterComponent"),r=rv("footerHeight"),n=tv("HeaderFooterTag"),i=Pm(o.useMemo((()=>e=>{r(bp(e,"height"))}),[r]),!0,tv("skipAnimationFrameInResizeObserver")),a=tv("context");return t?e(n,{ref:i,children:e(t,{...Wb(t,a)})}):null}));function Kb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:g,scrollToCallback:m}=Fb(s,d,l,c,void 0,h);return t("scrollTo",m),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...h?Pb:Rb,...i},tabIndex:0,...a,...Wb(l,u),children:o})}))}function Zb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=Fb(s,d,l,sm,h);return kb((()=>(m.current=h||window,()=>{m.current=null})),[m,h]),t("windowScrollTo",p),t("scrollBy",g),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Wb(l,f),children:o})}))}const qb=({children:t})=>{const r=o.useContext(Db),n=rv("viewportHeight"),i=rv("fixedItemHeight"),a=tv("alignToBottom"),s=tv("horizontalDirection"),l=Pm(o.useMemo((()=>nm(n,(e=>bp(e,s?"width":"height")))),[n,s]),!0,tv("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Hb(a),children:t})},Gb=({children:t})=>{const r=o.useContext(Db),n=rv("windowViewportRect"),i=rv("fixedItemHeight"),a=tv("customScrollParent"),s=Ym(n,a,tv("skipAnimationFrameInResizeObserver")),l=tv("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Hb(l),children:t})},Xb=({children:t})=>{const r=tv("TopItemListComponent")||"div",n=tv("headerHeight"),o={...Nb,marginTop:`${n}px`},i=tv("context");return e(r,{style:o,...Wb(r,i),children:t})},Qb=o.memo((function(r){const n=tv("useWindowScroll"),o=tv("topItemsIndexes").length>0,i=tv("customScrollParent"),a=tv("context"),s=i||n?ov:nv,l=i||n?Gb:qb;return t(s,{...r,...Wb(s,a),children:[o&&e(Xb,{children:e(Lb,{showTopList:!0})}),t(l,{children:[e(Vb,{}),e(Lb,{}),e(Ub,{})]})]})})),{Component:Jb,useEmitter:ev,useEmitterValue:tv,usePublisher:rv}=Cb(Ib,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Qb),nv=Kb({useEmitter:ev,useEmitterValue:tv,usePublisher:rv}),ov=Zb({useEmitter:ev,useEmitterValue:tv,usePublisher:rv}),iv=Jb,av={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},sv={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:lv,floor:dv,max:cv,min:uv,round:hv}=Math;function fv(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function gv(e,t){return e&&e.width===t.width&&e.height===t.height}function mv(e,t){return e&&e.column===t.column&&e.row===t.row}const pv=Mm((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,f,{didMount:g,propsReady:m},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Em(0),C=Em(0),D=Em(av),S=Em({height:0,width:0}),k=Em({height:0,width:0}),F=Om(),E=Om(),_=Em(0),O=Em(null),T=Em({column:0,row:0}),M=Om(),I=Om(),B=Em(!1),A=Em(0),z=Em(!0),j=Em(!1),L=Em(!1);um(Cm(g,Fm(A),xm((([e,t])=>!!t))),(()=>{hm(z,!1)})),um(Cm(Bm(g,z,k,S,A,j),xm((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{hm(j,!0),Lp(1,(()=>{hm(F,e)})),pm(Cm(d),(()=>{hm(t,[0,0]),hm(z,!0)}))})),mm(Cm(I,xm((e=>null!=e&&e.scrollTop>0)),$m(0)),C),um(Cm(g,Fm(I),xm((([,e])=>null!=e))),(([,e])=>{e&&(hm(S,e.viewport),hm(k,e.item),hm(T,e.gap),e.scrollTop>0&&(hm(B,!0),pm(Cm(d,Sm(1)),(e=>{hm(B,!1)})),hm(l,{top:e.scrollTop})))})),mm(Cm(S,wm((({height:e})=>e))),u),mm(Cm(Bm(Am(S,gv),Am(k,gv),Am(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Am(d)),wm((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),M),mm(Cm(Bm(Am($),n,Am(T,mv),Am(k,gv),Am(S,gv),Am(O),Am(C),Am(B),Am(z),Am(A)),xm((([,,,,,,,e])=>!e)),wm((([e,[t,r],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:h,width:f}=o,{width:g}=i;if(0===s&&(0===e||0===g))return av;if(0===f){const t=Rp(d,e);return function(e){return{...sv,items:e}}(fv(t,t+Math.max(s-1,0),a))}const m=bv(g,f,c);let p,b;l?0===t&&0===r&&s>0?(p=0,b=s-1):(p=m*dv((t+u)/(h+u)),b=m*lv((r+u)/(h+u))-1,b=uv(e-1,cv(b,m-1)),p=uv(b,cv(0,p))):(p=0,b=-1);const v=fv(p,b,a),{bottom:y,top:x}=vv(i,n,o,v),w=lv(e/m);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),D),mm(Cm(O,xm((e=>null!==e)),wm((e=>e.length))),$),mm(Cm(Bm(S,k,D,T),xm((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),wm((([e,t,{items:r},n])=>{const{bottom:o,top:i}=vv(e,n,t,r);return[i,o]})),ym(fp)),t);const R=Em(!1);mm(Cm(d,Fm(R),wm((([e,t])=>t||0!==e))),R);const P=Tm(Cm(Bm(D,$),xm((([{items:e}])=>e.length>0)),Fm(R),xm((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),wm((([[,e]])=>e-1)),ym())),H=Tm(Cm(Am(D),xm((({items:e})=>e.length>0&&0===e[0].index)),$m(0),ym())),N=Tm(Cm(Am(D),Fm(B),xm((([{items:e},t])=>e.length>0&&!t)),wm((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),ym(hp),km(0)));mm(N,f.scrollSeekRangeChanged),mm(Cm(F,Fm(S,k,$,T),wm((([e,t,r,n,o])=>{const i=zp(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=cv(0,d,uv(n-1,d));let c=yv(t,o,r,d);return"end"===a?c=hv(c-t.height+r.height):"center"===a&&(c=hv(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const W=_m(Cm(D,wm((e=>e.offsetBottom+e.bottom))),0);return mm(Cm(x,wm((e=>({height:e.visibleHeight,width:e.visibleWidth})))),S),{customScrollParent:p,data:O,deviation:_,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:E,scrollTo:l,scrollToIndex:F,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:S,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:D,horizontalDirection:L,initialTopMostItemIndex:A,totalListHeight:W,...h,endReached:P,propsReady:m,rangeChanged:N,startReached:H,stateChanged:M,stateRestoreInProgress:B,...w}}),cm(Xp,Vm,Vp,ub,Bp,hb,Rm));function bv(e,t,r){return cv(1,dv((e+r)/(dv(t)+r)))}function vv(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=yv(e,t,r,n[0].index);return{bottom:yv(e,t,r,n[n.length-1].index)+o,top:i}}function yv(e,t,r,n){const o=bv(e.width,r.width,t.column),i=dv(n/o),a=i*r.height+cv(0,i-1)*t.row;return a>0?a+t.row:a}const xv=Mm((()=>{const e=Em((e=>`Item ${e}`)),t=Em({}),r=Em(null),n=Em("virtuoso-grid-item"),o=Em("virtuoso-grid-list"),i=Em(Tb),a=Em("div"),s=Em(sm),l=(e,r=null)=>_m(Cm(t,wm((t=>t[e])),ym()),r),d=Em(!1),c=Em(!1);return mm(Am(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),wv=Mm((([e,t])=>({...e,...t})),cm(pv,xv)),$v=o.memo((function(){const t=Ov("gridState"),r=Ov("listClassName"),n=Ov("itemClassName"),i=Ov("itemContent"),a=Ov("computeItemKey"),s=Ov("isSeeking"),l=Tv("scrollHeight"),d=Ov("ItemComponent"),c=Ov("ListComponent"),u=Ov("ScrollSeekPlaceholder"),h=Ov("context"),f=Tv("itemDimensions"),g=Tv("gap"),m=Ov("log"),p=Ov("stateRestoreInProgress"),b=Tv("reportReadyState"),v=Pm(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}g({column:Bv("column-gap",getComputedStyle(e).columnGap,m),row:Bv("row-gap",getComputedStyle(e).rowGap,m)})}),[l,f,g,m]),!0,!1);return kb((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),p?null:e(c,{className:r,ref:v,...Wb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...Wb(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):C(d,{...Wb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Cv=o.memo((function(){const t=Ov("HeaderComponent"),r=Tv("headerHeight"),n=Ov("headerFooterTag"),i=Pm(o.useMemo((()=>e=>{r(bp(e,"height"))}),[r]),!0,!1),a=Ov("context");return t?e(n,{ref:i,children:e(t,{...Wb(t,a)})}):null})),Dv=o.memo((function(){const t=Ov("FooterComponent"),r=Tv("footerHeight"),n=Ov("headerFooterTag"),i=Pm(o.useMemo((()=>e=>{r(bp(e,"height"))}),[r]),!0,!1),a=Ov("context");return t?e(n,{ref:i,children:e(t,{...Wb(t,a)})}):null})),Sv=({children:t})=>{const r=o.useContext(Sb),n=Tv("itemDimensions"),i=Tv("viewportDimensions"),a=Pm(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:Hb(!1),children:t})},kv=({children:t})=>{const r=o.useContext(Sb),n=Tv("windowViewportRect"),i=Tv("itemDimensions"),a=Ov("customScrollParent"),s=Ym(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:Hb(!1),children:t})},Fv=o.memo((function({...r}){const n=Ov("useWindowScroll"),o=Ov("customScrollParent"),i=o||n?Iv:Mv,a=o||n?kv:Sv,s=Ov("context");return e(i,{...r,...Wb(i,s),children:t(a,{children:[e(Cv,{}),e($v,{}),e(Dv,{})]})})})),{Component:Ev,useEmitter:_v,useEmitterValue:Ov,usePublisher:Tv}=Cb(wv,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Fv),Mv=Kb({useEmitter:_v,useEmitterValue:Ov,usePublisher:Tv}),Iv=Zb({useEmitter:_v,useEmitterValue:Ov,usePublisher:Tv});function Bv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,jm.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Av=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),zv=({children:t})=>{const[r,n]=s(-1);return e(Av.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},jv=k.div`
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    background: ${la.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${pa.MaxWidth.sm} {
        --x-spacing: ${ma["sm-margin"]}px;
        max-height: 15rem;
    }

    ${pa.MaxWidth.xs} {
        --x-spacing: ${ma["xs-margin"]}px;
    }

    ${pa.MaxWidth.xxs} {
        --x-spacing: ${ma["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?da["body-md-regular"]:da["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${la["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${fa.full};
        background-clip: padding-box;
    }
`,Lv=k.div`
    background: transparent;
    padding: ${ha["spacing-8"]};
`,Rv=k.ul`
    list-style-type: none;
`,Pv=k.li`
    display: flex;
    align-items: flex-start;
    gap: ${ha["spacing-8"]};
    padding: ${ha["spacing-12"]} ${ha["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${fa.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${la["bg-hover"]};
            `:e.$active?F`
                background: ${la["bg-hover-subtle"]};
            `:void 0}
`,Hv=k(fe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${la["icon-selected"]};
`,Nv=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Wv=k(he)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${la["icon-selected"]};
`,Yv=k(ce)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${la["icon-primary-subtlest"]};
`,Vv=k(ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${la["icon-disabled-subtle"]};
`,Uv=k.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Kv=k(_d)`
    cursor: pointer;
    overflow: hidden;
    color: ${la["text-primary"]};
    font-size: inherit;
`,Zv=k(Kv)`
    ${da["body-baseline-semibold"]}
`,qv=k(Kv)`
    ${da["body-md-semibold"]}
    padding: ${ha["spacing-8"]} ${ha["spacing-8"]};
`,Gv=k.div`
    width: 100%;
    display: flex;
    padding: ${ha["spacing-12"]} ${ha["spacing-16"]};
    align-items: center;
`,Xv=k(te)`
    margin-right: ${ha["spacing-4"]};
    color: ${la["icon-error"]};
    height: 1em;
    width: 1em;
`,Qv=k(pl)`
    margin-right: ${ha["spacing-8"]};
    color: ${la.icon};
`,Jv=k.div`
    ${Wa()}
    color: ${la["text-subtle"]};
    padding: 0 ${ha["spacing-16"]} ${ha["spacing-12"]}
        ${ha["spacing-16"]};
`,ey=k.div`
    background: ${la["bg-strong"]};
    border-radius: ${fa.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?da["body-md-regular"]:da["body-baseline-regular"]}
`,ty=k.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ha["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${ha["spacing-8"]} ${ha["spacing-16"]}
              `:F`10px ${ha["spacing-8"]}`};
`,ry=k(Ed)`
    flex: 1;
`,ny=k(ge)`
    color: ${la.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,oy=k(Ra)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ha["spacing-8"]};
    margin-left: -${ha["spacing-8"]};
    color: ${la.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,iy=D(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=ke(r,["value","variant","onClear"]);return t(ey,{$variant:i,children:[t(ty,{$variant:i,children:[e(ny,{"aria-hidden":!0}),e(ry,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(oy,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(M,{"aria-hidden":!0})})]})})),ay=D((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:m="inline",variant:b="default",listboxId:v,ariaLabel:x,matchElementWidth:w=!1,width:$,topScrollItem:C,onSelectItem:D,onSelectAll:S,onDismiss:k,onRetry:F,valueExtractor:E,listExtractor:_,renderListItem:O,renderCustomCallToAction:T,enableSearch:M,hideNoResultsDisplay:I,noResultsDescription:B,customLabels:A,searchPlaceholder:z,searchFunction:j,onSearch:L},R)=>{const{noResultsLabel:P="No results found.",selectAllButtonLabel:H="Select all",clearAllButtonLabel:N="Clear all"}=A||{},W=(null==A?void 0:A.searchPlaceholder)||z||"Search",Y=(null==A?void 0:A.noResultsDescription)||B,{focusedIndex:V,setFocusedIndex:U}=p(Av),{elementWidth:K,setFloatingRef:Z,getFloatingProps:q,styles:G}=ol(),[X,Q]=s(""),[J,ee]=s(null!=n?n:[]),te=er(c),re=Qt(),ne=a(null),oe=a(null),ie=a([]),ae=a(null),se=a(null),le=!!i&&!!l&&(null==l?void 0:l.length)===i,de=e=>{const t=_?_(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},ce=g((e=>!!Qg(l,(t=>em(t,e)))),[l]),ue=Gt((()=>null==j?void 0:j(X))),he=Gt((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=de(e),n=X.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),fe=g((e=>{var t,r;if(d)return;if(ae.current)return U(-1),void setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),0);const n=null!=J?J:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const r=Math.max(0,Math.min(e.index,n.length-1));return null===(t=se.current)||void 0===t||t.scrollToIndex({index:r,align:"center"}),U(r),void setTimeout((()=>{var e;return null===(e=ie.current[r])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>ce(e))):-1,i=-1!==o?o:V>=0&&V<n.length?V:0;null===(r=se.current)||void 0===r||r.scrollToIndex({index:i,align:"center"}),U(i),setTimeout((()=>{var e;return null===(e=ie.current[i])||void 0===e?void 0:e.focus()}),0)}),[ce,d,J,V,U]),ge=(e,t)=>{le&&!ce(e)||(U(t),null==D||D(e,(e=>E?E(e):e)(e)))},me=e=>{const t=e.target.value;Q(t),null==L||L()},pe=()=>{var e;Q(""),null===(e=ae.current)||void 0===e||e.focus(),null==L||L()},be=()=>null==F?void 0:F();Xt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),V<J.length-1){const e=V+1;null===(t=ie.current[e])||void 0===t||t.focus(),U(e)}break;case"ArrowUp":if(e.preventDefault(),V>0){const e=V-1;null===(r=ie.current[e])||void 0===r||r.focus(),U(e)}else 0===V&&ae.current&&(ae.current.focus(),U(-1));break;case"Space":case"Enter":document.activeElement===ie.current[V]&&(e.preventDefault(),J[V]&&ge(J[V],V))}})),y(R,(()=>({refocus:fe})),[fe]),h((()=>{var e;if(!C)return void(null===(e=se.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(C);se.current&&-1!==e&&(se.current.scrollToIndex({index:e}),U(e))}),0);return()=>clearTimeout(t)}),[ie,n,U,C]),h((()=>{d||re&&te&&"success"===c&&ae.current&&(U(-1),ae.current.focus())}),[re,te,c,U,d]),h((()=>{var e;ee(null!==(e=""===X?n:j?ue():he())&&void 0!==e?e:[])}),[ue,he,n,j,X]),h((()=>{var e,t,r;if(re)return;if(d||!n)return;const o=n.findIndex((e=>ce(e)));ae.current?(U(-1),setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),200)):V>0?(null===(e=se.current)||void 0===e||e.scrollToIndex({index:V,align:"center"}),setTimeout((()=>{var e;return null===(e=ie.current[V])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=se.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),U(o),setTimeout((()=>{var e;return null===(e=ie.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=se.current)||void 0===r||r.scrollToIndex({index:0}),U(0),setTimeout((()=>{var e;return null===(e=ie.current[0])||void 0===e?void 0:e.focus()}),200))}),[ce,d,V,n,re,U]);const ve=t=>o?e(le&&!t?Vv:t?Wv:Yv,{"aria-hidden":!0}):t?e(Hv,{"aria-hidden":!0}):e(Nv,{}),ye=(t,r)=>{const{title:n,secondaryLabel:o}=de(t);return e(gu,{displayType:m,label:n,maxLines:f,selected:r,disabled:!r&&le,sublabel:o,truncationType:u,variant:b})},xe=(n,i)=>{if(!F||"success"===c){const a=ce(n),s=i===V;return e(Pv,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&le,"aria-posinset":i+1,"aria-setsize":null==J?void 0:J.length,"data-testid":"list-item",onClick:()=>ge(n,i),onMouseEnter:()=>(e=>U(e))(i),ref:e=>{ie.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&le,children:O?O(n,{selected:a}):t(r,{children:[ve(a),ye(n,a)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},we=()=>{if((M||j)&&"success"===c)return e(iy,{ref:ae,onChange:me,value:X,placeholder:W,"data-testid":"search-input","aria-label":"Enter text to search",onClear:pe,variant:b})},$e=()=>{if(l&&o&&J.length>0&&!X&&"success"===c)return e(Uv,{children:e(qv,{onClick:S,type:"button",$variant:b,children:i||0!==l.length?N:H})})},Ce=()=>{if(!I&&(X||!M)&&0===J.length&&"success"===c)return t(r,{children:[t(Gv,{"data-testid":"list-no-results",children:[e(Xv,{"data-testid":"no-result-icon"}),P]}),Y&&e(Jv,{"data-testid":"no-result-desc",children:Y})]})},De=()=>{if(F&&"loading"===c)return t(Gv,{"data-testid":"list-loading",children:[e(Qv,{}),"Loading..."]})},Se=()=>{if(F&&"fail"===c)return t(Gv,{"data-testid":"list-fail",children:[e(Xv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Zv,{onClick:be,type:"button",$variant:b,children:"Try again."})]})},ke=()=>{var t;const r="test"===process.env.NODE_ENV;return e(Rv,{role:"listbox",id:v,children:e(iv,Object.assign({ref:se,style:{height:"100%"},data:J,customScrollParent:null!==(t=ne.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>xe(t,e)},r?{initialItemCount:J.length}:{}),r?J.length:void 0)})};return t(jv,Object.assign({"data-testid":"dropdown-container",ref:Qe(ne,Z),style:G},q(),{$width:w?K:void 0,$customWidth:$,$variant:b,children:[e(sl,{role:"status",children:x}),t(Lv,{ref:oe,"data-testid":"dropdown-list",role:"group","aria-label":x,children:[we(),$e(),Ce(),De(),Se(),ke()]}),(()=>{if(T)return e("div",{"data-testid":"custom-cta",children:T(k,J)})})()]}))})),sy=k(_d)`
    display: flex;
    align-items: center;
    gap: ${ha["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${ha["spacing-16"]}`:ha["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${da["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${da["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${la["focus-ring"]};
        outline-offset: -2px;
    }
`,ly=k.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ca["duration-250"]} ${ca["ease-default"]};

    svg {
        color: ${la.icon};
        height: 1em;
        width: 1em;
    }
`,dy=D(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=r,u=ke(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(sy,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(ly,{$expanded:a,$variant:c,children:e(re,{"aria-hidden":!0})})]}))}));var cy=Symbol.for("immer-nothing"),uy=Symbol.for("immer-draftable"),hy=Symbol.for("immer-state"),fy="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function gy(e,...t){if("production"!==process.env.NODE_ENV){const r=fy[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var my=Object.getPrototypeOf;function py(e){return!!e&&!!e[hy]}function by(e){return!!e&&(yy(e)||Array.isArray(e)||!!e[uy]||!!e.constructor?.[uy]||Dy(e)||Sy(e))}var vy=Object.prototype.constructor.toString();function yy(e){if(!e||"object"!=typeof e)return!1;const t=my(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===vy}function xy(e,t){0===wy(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function wy(e){const t=e[hy];return t?t.type_:Array.isArray(e)?1:Dy(e)?2:Sy(e)?3:0}function $y(e,t){return 2===wy(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Cy(e,t,r){const n=wy(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function Dy(e){return e instanceof Map}function Sy(e){return e instanceof Set}function ky(e){return e.copy_||e.base_}function Fy(e,t){if(Dy(e))return new Map(e);if(Sy(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=yy(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[hy];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(my(e),t)}{const t=my(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function Ey(e,t=!1){return Oy(e)||py(e)||!by(e)||(wy(e)>1&&(e.set=e.add=e.clear=e.delete=_y),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Ey(t,!0)))),e}function _y(){gy(2)}function Oy(e){return Object.isFrozen(e)}var Ty,My={};function Iy(e){const t=My[e];return t||gy(0,e),t}function By(){return Ty}function Ay(e,t){t&&(Iy("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function zy(e){jy(e),e.drafts_.forEach(Ry),e.drafts_=null}function jy(e){e===Ty&&(Ty=e.parent_)}function Ly(e){return Ty={drafts_:[],parent_:Ty,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ry(e){const t=e[hy];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Py(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[hy].modified_&&(zy(t),gy(4)),by(e)&&(e=Hy(t,e),t.parent_||Wy(t,e)),t.patches_&&Iy("Patches").generateReplacementPatches_(r[hy].base_,e,t.patches_,t.inversePatches_)):e=Hy(t,r,[]),zy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==cy?e:void 0}function Hy(e,t,r){if(Oy(t))return t;const n=t[hy];if(!n)return xy(t,((o,i)=>Ny(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return Wy(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),xy(o,((o,a)=>Ny(e,n,t,o,a,r,i))),Wy(e,t,!1),r&&e.patches_&&Iy("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Ny(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&gy(5),py(o)){const a=Hy(e,o,i&&t&&3!==t.type_&&!$y(t.assigned_,n)?i.concat(n):void 0);if(Cy(r,n,a),!py(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(by(o)&&!Oy(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Hy(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||Wy(e,o)}}function Wy(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ey(t,r)}var Yy={get(e,t){if(t===hy)return e;const r=ky(e);if(!$y(r,t))return function(e,t,r){const n=Ky(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!by(n)?n:n===Uy(e.base_,t)?(qy(e),e.copy_[t]=Gy(n,e)):n},has:(e,t)=>t in ky(e),ownKeys:e=>Reflect.ownKeys(ky(e)),set(e,t,r){const n=Ky(ky(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=Uy(ky(e),t),o=n?.[hy];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||$y(e.base_,t)))return!0;qy(e),Zy(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Uy(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,qy(e),Zy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=ky(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){gy(11)},getPrototypeOf:e=>my(e.base_),setPrototypeOf(){gy(12)}},Vy={};function Uy(e,t){const r=e[hy];return(r?ky(r):e)[t]}function Ky(e,t){if(!(t in e))return;let r=my(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=my(r)}}function Zy(e){e.modified_||(e.modified_=!0,e.parent_&&Zy(e.parent_))}function qy(e){e.copy_||(e.copy_=Fy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}xy(Yy,((e,t)=>{Vy[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Vy.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&gy(13),Vy.set.call(this,e,t,void 0)},Vy.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&gy(14),Yy.set.call(this,e[0],t,r,e[0])};function Gy(e,t){const r=Dy(e)?Iy("MapSet").proxyMap_(e,t):Sy(e)?Iy("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:By(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=Yy;r&&(o=[n],i=Vy);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:By()).drafts_.push(r),r}function Xy(e){if(!by(e)||Oy(e))return e;const t=e[hy];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Fy(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Fy(e,!0);return xy(r,((e,t)=>{Cy(r,e,Xy(t))})),t&&(t.finalized_=!1),r}var Qy=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&gy(6),void 0!==r&&"function"!=typeof r&&gy(7),by(e)){const o=Ly(this),i=Gy(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?zy(o):jy(o)}return Ay(o,r),Py(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===cy&&(n=void 0),this.autoFreeze_&&Ey(n,!0),r){const t=[],o=[];Iy("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}gy(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){by(e)||gy(8),py(e)&&(e=function(e){py(e)||gy(10,e);return Xy(e)}(e));const t=Ly(this),r=Gy(e,void 0);return r[hy].isManual_=!0,jy(t),r}finishDraft(e,t){const r=e&&e[hy];r&&r.isManual_||gy(9);const{scope_:n}=r;return Ay(n,t),Py(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=Iy("Patches").applyPatches_;return py(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Jy=Qy.produce;Qy.produceWithPatches.bind(Qy),Qy.setAutoFreeze.bind(Qy),Qy.setUseStrictShallowCopy.bind(Qy),Qy.applyPatches.bind(Qy),Qy.createDraft.bind(Qy),Qy.finishDraft.bind(Qy);var ex=Uh,tx=Sf,rx=fh,nx=ir,ox=qh,ix=ph,ax=Hh,sx=Th,lx=Object.prototype.hasOwnProperty;var dx=function(e){if(null==e)return!0;if(ox(e)&&(nx(e)||"string"==typeof e||"function"==typeof e.splice||ix(e)||sx(e)||rx(e)))return!e.length;var t=tx(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(ax(e))return!ex(e).length;for(var r in e)if(lx.call(e,r))return!1;return!0},cx=_e(dx);const ux=(e,t,r)=>{const n=Jy(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=fx(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},hx=(e,t)=>{const[r,...n]=t;if(cx(e)||cx(r))return;const o=e.find((e=>e.key===r));return o&&n.length?hx(o.subItems,n):o},fx=e=>e.join(","),gx=e=>new Set(e.map((e=>e.join(",")))),mx=k.li`
    display: ${e=>e.$visible?"flex":"none"};
`,px=k.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ha["spacing-8"]};
    padding: ${ha["spacing-12"]} ${ha["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${fa.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${la["bg-hover"]};
        `}
`,bx=k.div`
    height: 1px;
    width: calc((1lh + ${ha["spacing-8"]}) * ${e=>e.$level});
`,vx=k.div`
    width: 1lh;
    height: 1lh;
    color: ${la["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${ca["duration-350"]}
            ${ca["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,yx=k.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ha["spacing-8"]};
`,xx=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ha["spacing-16"]};

    display: flex;
    justify-content: center;
`,wx=k(pe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${la["icon-selected"]};
`,$x=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:c=2,variant:u="default",listboxId:f,matchElementWidth:g=!1,width:m,mode:p="default",selectableCategory:b,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:D,customLabels:S,searchPlaceholder:k,onSearch:F})=>{const{noResultsLabel:E="No results found.",selectAllButtonLabel:_="Select all",clearAllButtonLabel:O="Clear all"}=S||{},T=(null==S?void 0:S.searchPlaceholder)||k||"Search",M=(null==S?void 0:S.noResultsDescription)||D,I=o||b,{elementWidth:B,setFloatingRef:A,getFloatingProps:z,styles:j}=ol(),[L,R]=s(""),P=L.toLowerCase().trim(),[H,N]=s(!1),W=a(null),Y=a(null),V=a([]),U=a(null),K=Qt(),[Z,q]=s([]),[G,X]=s([]),Q=H?G:Z,J=v((()=>{let e=0;for(const t of Z)t.level>e&&(e=t.level);return e}),[Z]),[ee,te]=s(0),[re,ne]=s([]),[oe,ie]=s(0),ae=e=>{const t=e.target.value;R(t),""===t?N(!1):t.trim().length>=3&&N(!0),null==F||F()},se=()=>{var e;R(""),N(!1),null===(e=U.current)||void 0===e||e.focus(),null==F||F()},le=()=>{null==w||w()},de=()=>{if(0===i.size){const e=[],t=[];Z.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},ce=Gt(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var h,f;const g=s?s.level+1:0,m=s?[...s.keyPath,c.key]:[c.key],p=fx(m),b={item:c,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:m,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:g,visible:0===g||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(p),hasSubItems:!!(null===(h=c.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=c.subItems)||void 0===f?void 0:f.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,P,t))),ue=Gt((e=>{return i.size?(t=ce(e,!1),Jy(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>Jy(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);em(o,i)&&(n.visible=!0)}return e})))(ce(e,!1));var t})),he=Gt((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),fe=Gt((()=>{q((e=>ux(e,i,o))),H&&X((e=>ux(e,i,o)))})),ge=(e,t,r)=>{const n=((e,t,r)=>Jy(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!em(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(Q,e,t);te(e),ie(r),H?X(n):q(n)};Xt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(Q,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(Q,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),ge(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),ge(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=Q[ee];if(t.hasSubItems&&!I)return;null==y||y(t)}}})),h((()=>{let e=[];"default"===p?e=ue(n):"expand"===p?e=ce(n,!0):"collapse"===p&&(e=ce(n,!1)),q(e)}),[ce,ue,n,p]),h((()=>{ne(Q.filter((e=>e.visible)))}),[H,Q]),h((()=>{fe()}),[o,i,fe]),h((()=>{if(H&&L.trim().length>=3){const e=he(n),t=(e=>Jy(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(ce(e,!1));X(t)}}),[he,ce,n,H,L]),h((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const pe=()=>{if($&&"success"===l)return e(iy,{ref:U,onChange:ae,value:L,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:u})},be=()=>{if(o&&!H&&Z.length>0&&"success"===l)return e(Uv,{children:e(qv,{onClick:de,type:"button",$variant:u,children:0===i.size?_:O})})},ve=()=>{if(!C&&H&&0===G.length&&"success"===l)return t(r,{children:[t(Gv,{"data-testid":"list-no-results",children:[e(Xv,{"data-testid":"no-result-icon"}),E]}),M&&e(Jv,{"data-testid":"no-result-desc",children:M})]})},ye=()=>{if(w&&"loading"===l)return t(Gv,{"data-testid":"list-loading",children:[e(vl,{$hasChildren:!0}),"Loading..."]})},xe=()=>{if(w&&"fail"===l)return t(Gv,{"data-testid":"list-fail",children:[e(Xv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Zv,{onClick:le,type:"button",$variant:u,children:"Try again."})]})},we=t=>{if(o)switch(t.checked){case"mixed":return e(wx,{"aria-hidden":!0});case!0:return e(Wv,{"aria-hidden":!0});default:return e(Yv,{"aria-hidden":!0})}if(!t.hasSubItems)return e(xx,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(Hv,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:g}=r,m=r.index,p=oe===n,b=h&&!I;return t(mx,{$visible:a,children:[J>0&&e(bx,{$level:i}),J>0&&!h&&o&&e(yx,{}),t(px,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ge(m,!s,n):((e,t)=>{ie(t),te(e),null==y||y(Q[e])})(m,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:p?0:-1,$active:p,$toggleable:b,children:[h&&e(vx,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ge(m,!s,n)},$expanded:s,children:e(me,{})}),we(r),e(gu,{bold:h,searchTerm:H?P:void 0,label:r.item.label,selected:!!u,truncationType:d,maxLines:c})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:Y,role:"tree",children:e(iv,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(jv,Object.assign({"data-testid":"dropdown-container",ref:Qe(W,A),style:j},z(),{$width:g?B:void 0,$variant:u,$customWidth:m,children:t(Lv,{"data-testid":"nested-dropdown-list",children:[pe(),be(),ve(),ye(),xe(),Ce()]})}))},Cx=k(kd)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?F`
                    flex-direction: row-reverse;
                `:F`
                    flex-direction: row;
                `}
`,Dx=k(dy)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?F`
                        padding-right: 0;
                    `:F`
                        padding-left: 0;
                    `}}
`,Sx=k.div`
    flex: 0 0 auto;
`,kx=k(au)`
    ${e=>e.readOnly?F`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?F`
                        padding-left: 0;
                    `:F`
                        padding-right: 0;
                    `:"right"===e.$position?F`
                    padding-left: ${ha["spacing-16"]};
                `:F`
                    padding-right: ${ha["spacing-16"]};
                `}
`,Fx=k.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${ha["spacing-12"]};
    color: ${la.text};
`,Ex=k.div`
    width: 1px;
    background: ${la.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${ha["spacing-12"]};
                `:F`
                    margin-right: ${ha["spacing-12"]};
                `}
`,_x=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:f,noBorder:g,"data-testid":m,"aria-labelledby":p,"aria-describedby":b,"aria-invalid":v,"aria-label":y}=r,x=ke(r,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:D,noResultsDescription:S,searchPlaceholder:k,searchFunction:F,onSearch:E,placeholder:_="Select",displayValueExtractor:O,"data-selector-testid":T,options:M,selectedOption:I,onSelectOption:B,optionsLoadState:A,optionTruncationType:z,onRetry:j,onHideOptions:L,onShowOptions:R,dropdownZIndex:P,dropdownRootNode:H,"aria-label":N}=o.attributes,{position:W}=o,[Y,V]=s(I),[U,K]=s(!1),[Z,q]=s(!1),[G]=s((()=>Je.generate())),X=`${G}-listbox`,Q=`${G}-instruction`,J=`${G}-combobox-label`,ee=`${G}-textbox-label`,te=a(null),re=a(null);h((()=>{V(I)}),[I]);const ne=()=>{if(Y)return O?O(Y):w?w(Y):Y.toString()},oe=e=>{e?null==R||R():null==L||L()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),V(e),K(!1),oe(!1),null==B||B(e,t)},ae=()=>{U&&(K(!1),oe(!1))},se=()=>{K(!0),oe(!0),q(!0)},le=e=>{K(!1),oe(!1),"click"!==e&&(q(!1),null==f||f())},de=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),K(!1),oe(!1)},ce=()=>t("div",{children:[e(Dx,{ref:re,disabled:c,expanded:U,listboxId:X,popupRole:"listbox",readOnly:d,"aria-labelledby":dl(p,J),"aria-describedby":dl(b,Q),"aria-invalid":v,$noBorder:g,$position:W,children:e(Js,{$disabled:c,children:Y?e(el,{children:ne()}):e(tl,{children:_})})}),e(sl,{id:Q,children:"Press space to open options"})]}),ue=()=>e(ay,{listboxId:X,listItems:M,onSelectItem:ie,onDismiss:ae,valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:D,noResultsDescription:S,searchPlaceholder:k,searchFunction:F,onSearch:E,selectedItems:Y?[Y]:[],itemsLoadState:A,itemTruncationType:z,onRetry:j,matchElementWidth:!0});return e(zv,{children:t(Cx,{$focused:Z,$disabled:c,$readOnly:d,$error:i,$position:W,ref:te,className:u,"data-testid":m,$noBorder:g,tabIndex:-1,onFocus:()=>{Z||U||q(!0)},onBlur:e=>{Z&&!U&&te.current&&!te.current.contains(e.relatedTarget)&&(q(!1),null==f||f())},children:[e(sl,{"aria-hidden":!0,id:J,children:N}),e(Sx,{"data-testid":T,children:d?Y?e(Fx,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":p,"aria-describedby":b,"aria-invalid":v,children:e(el,{children:ne()})}):null:e(il,{enabled:!d&&!c,isOpen:U,renderElement:ce,renderDropdown:ue,onOpen:se,onClose:le,onDismiss:de,clickToToggle:!0,offset:8,alignment:"right"===W?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:H,positionRef:te})}),e(Ex,{$readOnly:d,$position:W}),e(sl,{"aria-hidden":!0,id:ee,children:y}),e(kx,Object.assign({ref:n},x,{$position:W,$noBorder:g,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":dl(p,ee),"aria-describedby":b,"aria-invalid":v}))]})})})),Ox=k(kd)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ha["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Tx=k(kd)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ha["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Mx=k(au)``,Ix=k.div`
    position: relative;
    display: flex;
    align-items: center;

    ${da["body-baseline-regular"]}
    color: ${la.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${la["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?ha["spacing-4"]:ha["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?ha["spacing-4"]:ha["spacing-12"]};
                `};
`,Bx=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=ke(r,["addon","error","className"]);const l=()=>e(Tx,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(Mx,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:d="left"}=o,{allowClear:c}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(_x,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const r=o.attributes;return r.children?t(Ox,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Ix,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.children}),e(Mx,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(Ox,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Ix,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.value}),e(Mx,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),Ax=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y}=t,x=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${Je.generate()}`)),$=null!=i?i:w;return e(Ks,{id:$,"data-testid":l,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(Bx,Object.assign({ref:r,id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),zx=k(Bx)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":ha["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,jx=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=la.icon,$activeColor:r=la["icon-primary"]})=>e?t:r};
    padding: ${ha["spacing-12"]} ${ha["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,Lx=k.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Rx=k(za.BodyBL)`
    color: ${la["text-subtler"]};
`,Px=k(pl)`
    margin-right: ${ha["spacing-8"]};
    color: ${la.icon};
`,Hx=k.span`
    color: ${la["text-primary"]};
    font-weight: ${da.Spec["weight-semibold"]};
`,Nx=k.span`
    display: flex;
    align-items: center;
    margin-right: ${ha["spacing-8"]};
`,Wx=k(ye)`
    color: ${la["icon-warning"]};
    margin-right: ${ha["spacing-8"]};
    height: 1em;
    width: 1em;
`,Yx=k.span`
    color: ${la["text-warning"]};
`,Vx=k(_d)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${da["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${Hx} {
            color: ${la["text-hover"]};
        }
    }
`,Ux=k.button`
    ${da["body-baseline-regular"]}
    color: ${la.text};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`,Kx=k.span`
    overflow-wrap: anywhere;
`,Zx=k.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${la["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${da.Spec["body-size-baseline"]};
        height: ${da.Spec["body-size-baseline"]};
    }
`;var qx,Gx,Xx={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */qx=Xx,Gx=Xx.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,d=1/0,c=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],g="[object Arguments]",m="[object Array]",p="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",D="[object Promise]",S="[object RegExp]",k="[object Set]",F="[object String]",E="[object Symbol]",_="[object WeakMap]",O="[object ArrayBuffer]",T="[object DataView]",M="[object Float32Array]",I="[object Float64Array]",B="[object Int8Array]",A="[object Int16Array]",z="[object Int32Array]",j="[object Uint8Array]",L="[object Uint8ClampedArray]",R="[object Uint16Array]",P="[object Uint32Array]",H=/\b__p \+= '';/g,N=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),Z=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,ce=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,me=/^0o[0-7]+$/i,pe=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",De="A-Z\\xc0-\\xd6\\xd8-\\xde",Se="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Fe="['’]",_e="["+xe+"]",Oe="["+ke+"]",Te="["+we+"]",Me="\\d+",Ie="["+$e+"]",Be="["+Ce+"]",Ae="[^"+xe+ke+Me+$e+Ce+De+"]",ze="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+De+"]",He="\\u200d",Ne="(?:"+Be+"|"+Ae+")",We="(?:"+Pe+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+ze+")?",Ke="["+Se+"]?",Ze=Ke+Ue+"(?:"+He+"(?:"+[je,Le,Re].join("|")+")"+Ke+Ue+")*",qe="(?:"+[Ie,Le,Re].join("|")+")"+Ze,Ge="(?:"+[je+Te+"?",Te,Le,Re,_e].join("|")+")",Xe=RegExp(Fe,"g"),Qe=RegExp(Te,"g"),Je=RegExp(ze+"(?="+ze+")|"+Ge+Ze,"g"),et=RegExp([Pe+"?"+Be+"+"+Ye+"(?="+[Oe,Pe,"$"].join("|")+")",We+"+"+Ve+"(?="+[Oe,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,qe].join("|"),"g"),tt=RegExp("["+He+xe+we+Se+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[M]=it[I]=it[B]=it[A]=it[z]=it[j]=it[L]=it[R]=it[P]=!0,it[g]=it[m]=it[O]=it[p]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[S]=it[k]=it[F]=it[_]=!1;var at={};at[g]=at[m]=at[O]=at[T]=at[p]=at[b]=at[M]=at[I]=at[B]=at[A]=at[z]=at[w]=at[$]=at[C]=at[S]=at[k]=at[F]=at[E]=at[j]=at[L]=at[R]=at[P]=!0,at[v]=at[y]=at[_]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,dt=parseInt,ct="object"==typeof Ee&&Ee&&Ee.Object===Object&&Ee,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=ct||ut||Function("return this")(),ft=Gx&&!Gx.nodeType&&Gx,gt=ft&&qx&&!qx.nodeType&&qx,mt=gt&&gt.exports===ft,pt=mt&&ct.process,bt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||pt&&pt.binding&&pt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function Dt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function _t(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function It(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function Bt(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function At(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Yt("length");function Lt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Rt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Rt(e,Nt,r)}function Ht(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Nt(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function Zt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function qt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Xt(e,t){return Mt(t,(function(t){return e[t]}))}function Qt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):jt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),gr=function ne(xe){var we=(xe=null==xe?ht:gr.defaults(ht.Object(),xe,gr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,De=xe.Function,Se=xe.Math,ke=xe.Object,Fe=xe.RegExp,Ee=xe.String,_e=xe.TypeError,Oe=we.prototype,Te=De.prototype,Me=ke.prototype,Ie=xe["__core-js_shared__"],Be=Te.toString,Ae=Me.hasOwnProperty,ze=0,je=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Le=Me.toString,Re=Be.call(ke),Pe=ht._,He=Fe("^"+Be.call(Ae).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ne=mt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=Ne?Ne.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,Ze=Me.propertyIsEnumerable,qe=Oe.splice,Ge=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=hi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,gt=Se.ceil,pt=Se.floor,bt=ke.getOwnPropertySymbols,jt=Ne?Ne.isBuffer:e,Vt=xe.isFinite,mr=Oe.join,pr=ar(ke.keys,ke),br=Se.max,vr=Se.min,yr=$e.now,xr=xe.parseInt,wr=Se.random,$r=Oe.reverse,Cr=hi(xe,"DataView"),Dr=hi(xe,"Map"),Sr=hi(xe,"Promise"),kr=hi(xe,"Set"),Fr=hi(xe,"WeakMap"),Er=hi(ke,"create"),_r=Fr&&new Fr,Or={},Tr=Li(Cr),Mr=Li(Dr),Ir=Li(Sr),Br=Li(kr),Ar=Li(Fr),zr=We?We.prototype:e,jr=zr?zr.valueOf:e,Lr=zr?zr.toString:e;function Rr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Nr)return e;if(Ae.call(e,"__wrapped__"))return Ri(e)}return new Nr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Hr(){}function Nr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Zr(e){var t=this.__data__=new Vr(e);this.size=t.size}function qr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&Za(e),i=!r&&!n&&!o&&ds(e),a=r||n||o||i,s=a?Zt(e.length,Ee):[],l=s.length;for(var d in e)!t&&!Ae.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yi(d,l))||s.push(d);return s}function Gr(t){var r=t.length;return r?t[Zn(0,r-1)]:e}function Xr(e,t){return Ai(Oo(e),sn(t,0,e.length))}function Qr(e){return Ai(Oo(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Ae.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,d=2&r,c=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oo(t,s)}else{var h=mi(t),f=h==y||h==x;if(Za(t))return Do(t,l);if(h==C||h==g||f&&!i){if(s=d||f?{}:bi(t),!l)return d?function(e,t){return To(e,gi(e),t)}(t,function(e,t){return e&&To(t,Ms(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case O:return So(e);case p:case b:return new o(+e);case T:return function(e,t){var r=t?So(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case I:case B:case A:case z:case j:case L:case R:case P:return ko(e,r);case w:return new o;case $:case F:return new o(e);case S:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case E:return n=e,jr?ke(jr.call(n)):{}}}(t,h,l)}}a||(a=new Zr);var m=a.get(t);if(m)return m;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(c?d?ii:oi:d?Ms:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function dn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function cn(r,n,o){if("function"!=typeof r)throw new _e(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ot,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=Mt(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Qt,a=!1,t=new Kr(t));e:for(;++o<s;){var c=e[o],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var h=d;h--;)if(t[h]===u)continue e;l.push(c)}else i(t,u,n)||l.push(c)}return l}Rr.templateSettings={escape:Z,evaluate:q,interpolate:G,variable:"",imports:{_:Rr}},Rr.prototype=Hr.prototype,Rr.prototype.constructor=Rr,Nr.prototype=Pr(Hr.prototype),Nr.prototype.constructor=Nr,Wr.prototype=Pr(Hr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Er?Er(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Er){var o=n[t];return o===r?e:o}return Ae.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Er?r[t]!==e:Ae.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Er&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Dr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ci(this,e).get(e)},Ur.prototype.has=function(e){return ci(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ci(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},Zr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Zr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Zr.prototype.get=function(e){return this.__data__.get(e)},Zr.prototype.has=function(e){return this.__data__.has(e)},Zr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Dr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Bo(xn),fn=Bo(wn,!0);function gn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function mn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,d=a}return d}function pn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):It(o,s):n||(o[o.length]=s)}return o}var vn=Ao(),yn=Ao(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return _t(t,(function(t){return Xa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[ji(r[n++])];return n&&n==o?t:e}function Dn(e,t,r){var n=t(e);return Ya(e)?n:It(n,r(e))}function Sn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=Ae.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Le.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Le.call(e)}(t)}function kn(e,t){return e>t}function Fn(e,t){return null!=e&&Ae.call(e,t)}function En(e,t){return null!=e&&t in ke(e)}function _n(t,r,n){for(var o=n?Tt:Ot,i=t[0].length,a=t.length,s=a,l=we(a),d=1/0,c=[];s--;){var u=t[s];s&&r&&(u=Mt(u,Gt(r))),d=vr(u.length,d),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&c.length<d;){var g=u[h],m=r?r(g):g;if(g=n||0!==g?g:0,!(f?Qt(f,m):o(c,m,n))){for(s=a;--s;){var p=l[s];if(!(p?Qt(p,m):o(t[s],m,n)))continue e}f&&f.push(m),c.push(g)}}return c}function On(t,r,n){var o=null==(t=Ei(t,r=xo(r,t)))?t:t[ji(Gi(r))];return null==o?e:Dt(o,t,n)}function Tn(e){return ts(e)&&Sn(e)==g}function Mn(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),d=s?m:mi(t),c=l?m:mi(r),u=(d=d==g?C:d)==C,h=(c=c==g?C:c)==C,f=d==c;if(f&&Za(t)){if(!Za(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new Zr),s||ds(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case p:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case S:case F:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=ri(s(e),s(t),n,o,i,a);return a.delete(e),c;case E:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,d,n,o,i,a);if(!(1&n)){var y=u&&Ae.call(t,"__wrapped__"),x=h&&Ae.call(r,"__wrapped__");if(y||x){var D=y?t.value():t,_=x?r.value():r;return a||(a=new Zr),i(D,_,n,o,a)}}return!!f&&(a||(a=new Zr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),d=l.length,c=oi(r),u=c.length;if(d!=u&&!s)return!1;for(var h=d;h--;){var f=l[h];if(!(s?f in r:Ae.call(r,f)))return!1}var g=a.get(t),m=a.get(r);if(g&&m)return g==r&&m==t;var p=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<d;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){p=!1;break}b||(b="constructor"==f)}if(p&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(p=!1)}return a.delete(t),a.delete(r),p}(t,r,n,o,i,a))}(t,r,n,o,Mn,i))}function In(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var d=(l=n[i])[0],c=t[d],u=l[1];if(s&&l[2]){if(c===e&&!(d in t))return!1}else{var h=new Zr;if(o)var f=o(c,u,d,t,r,h);if(!(f===e?Mn(u,c,3,o,h):f))return!1}}return!0}function Bn(e){return!(!es(e)||(t=e,je&&je in t))&&(Xa(e)?He:ge).test(Li(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Hn(e[0],e[1]):Pn(e):hl(e)}function zn(e){if(!Di(e))return pr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Di(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function Ln(e,t){return e<t}function Rn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||In(r,e,t)}}function Hn(t,r){return wi(t)&&Si(r)?ki(ji(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Fs(n,t):Mn(r,o,3)}}function Nn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new Zr),es(a))!function(t,r,n,o,i,a,s){var l=_i(t,n),d=_i(r,n),c=s.get(d);if(c)Jr(t,n,c);else{var u=a?a(l,d,n+"",t,r,s):e,h=u===e;if(h){var f=Ya(d),g=!f&&Za(d),m=!f&&!g&&ds(d);u=d,f||g||m?Ya(l)?u=l:Ka(l)?u=Oo(l):g?(h=!1,u=Do(d,!0)):m?(h=!1,u=ko(d,!0)):u=[]:os(d)||Wa(d)?(u=l,Wa(l)?u=bs(l):es(l)&&!Xa(l)||(u=bi(d))):h=!1}h&&(s.set(d,u),i(u,d,o,a,s),s.delete(d)),Jr(t,n,u)}}(t,r,s,n,Nn,o,i);else{var l=o?o(_i(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Ms)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?Mt(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,Gt(di()));var o=Rn(e,(function(e,r,o){var i=Mt(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Fo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Ht:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=Oo(t)),r&&(s=Mt(e,Gt(r)));++i<a;)for(var l=0,d=t[i],c=r?r(d):d;(l=o(s,c,l,n))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?qe.call(e,o,1):ho(e,o)}}return e}function Zn(e,t){return e+pt(wr()*(t-e+1))}function qn(e,t){var r="";if(!e||t<1||t>c)return r;do{t%2&&(r+=e),(t=pt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Mi(Fi(e,t,nl),e+"")}function Xn(e){return Gr(Ps(e))}function Qn(e,t){var r=Ps(e);return Ai(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var d=ji(r[i]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(i!=s){var u=l[d];(c=o?o(u,d,l):e)===e&&(c=es(u)?u:yi(r[i+1])?[]:{})}en(l,d,c),l=l[d]}return t}var eo=_r?function(e,t){return _r.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Ai(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,d=ls(r),c=r===e;i<a;){var u=pt((i+a)/2),h=n(t[u]),f=h!==e,g=null===h,m=h==h,p=ls(h);if(s)var b=o||m;else b=c?m&&(o||f):l?m&&f&&(o||!g):d?m&&f&&!g&&(o||!p):!g&&!p&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return Mt(e,co)+"";if(ls(e))return Lr?Lr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ot,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var d=t?null:Go(e);if(d)return lr(d);a=!1,o=Qt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(c)}else o(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ho(e,t){var r=-1,n=(t=xo(t,e)).length;if(!n)return!0;for(var o=null==e||"object"!=typeof e&&"function"!=typeof e;++r<n;){var i=t[r];if("string"==typeof i){if("__proto__"===i&&!Ae.call(e,"__proto__"))return!1;if("constructor"===i&&r+1<n&&"string"==typeof t[r+1]&&"prototype"===t[r+1]){if(o&&0===r)continue;return!1}}}var a=Ei(e,t);return null==a||delete a[ji(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function go(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function mo(e,t){var r=e;return r instanceof Wr&&(r=r.value()),Bt(t,(function(e,t){return t.func.apply(t.thisArg,It([e],t.args))}),r)}function po(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ct||function(e){return ht.clearTimeout(e)};function Do(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function So(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?So(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Fo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,d=r==r,c=ls(r);if(!l&&!c&&!a&&t>r||a&&s&&d&&!l&&!c||o&&s&&d||!n&&d||!i)return 1;if(!o&&!a&&!c&&t<r||c&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!d)return-1}return 0}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,d=br(i-a,0),c=we(l+d),u=!n;++s<l;)c[s]=t[s];for(;++o<a;)(u||o<i)&&(c[r[o]]=e[o]);for(;d--;)c[s++]=e[o++];return c}function _o(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,d=t.length,c=br(i-s,0),u=we(c+d),h=!n;++o<c;)u[o]=e[o];for(var f=o;++l<d;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function Oo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],d=o?o(n[l],t[l],l,n,t):e;d===e&&(d=t[l]),i?on(n,l,d):en(n,l,d)}return n}function Mo(e,t){return function(r,n){var o=Ya(r)?St:rn,i=t?t():{};return o(r,e,di(n,2),i)}}function Io(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Bo(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Ao(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function jo(e){return function(t){return Bt(Xs(Ws(t).replace(Xe,"")),e,"")}}function Lo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Ro(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=di(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Nr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new _e(t);if(a&&!l&&"wrapper"==si(s))var l=new Nr([],!0)}for(i=l?i:o;++i<o;){var d=si(s=n[i]),c="wrapper"==d?ai(s):e;l=c&&$i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[si(c[0])].apply(l,c[3]):1==s.length&&$i(s)?l[d]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function Ho(t,r,n,o,i,a,l,d,c,u){var h=r&s,f=1&r,g=2&r,m=24&r,p=512&r,b=g?e:Lo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(m)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Eo(y,o,i,m)),a&&(y=_o(y,a,l,m)),v-=$,m&&v<u){var C=sr(y,w);return Zo(t,r,Ho,s.placeholder,n,y,C,d,c,u-v)}var D=f?n:this,S=g?D[t]:t;return v=y.length,d?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Oo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,d):p&&v>1&&y.reverse(),h&&c<v&&(y.length=c),this&&this!==ht&&this instanceof s&&(S=b||Lo(S)),S.apply(D,y)}}function No(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=Mt(t,Gt(di())),Gn((function(r){var n=this;return e(t,(function(e){return Dt(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?qn(r,t):r;var o=qn(r,gt(t/cr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(gt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ps(t),r=ps(r)),e(t,r)}}function Zo(t,r,n,o,s,l,d,c,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var g=[t,r,s,f?l:e,f?d:e,f?e:l,f?e:d,c,u,h],m=n.apply(e,g);return $i(t)&&Oi(m,g),m.placeholder=o,Ii(m,t,r)}function qo(e){var t=Se[e];return function(e,r){if(e=ps(e),(r=null==r?0:vr(gs(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=kr&&1/lr(new kr([,-0]))[1]==d?function(e){return new kr(e)}:ll;function Xo(e){return function(t){var r=mi(t);return r==w?ir(t):r==k?dr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Qo(r,d,c,u,h,f,g,m){var p=2&d;if(!p&&"function"!=typeof r)throw new _e(t);var b=u?u.length:0;if(b||(d&=-97,u=h=e),g=g===e?g:br(gs(g),0),m=m===e?m:gs(m),b-=h?h.length:0,d&a){var v=u,y=h;u=h=e}var x=p?e:ai(r),w=[r,d,c,u,h,v,y,f,g,m];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,d=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!d)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var c=t[3];if(c){var u=e[3];e[3]=u?Eo(u,c,t[4]):c,e[4]=u?sr(e[3],n):t[4]}(c=t[5])&&(u=e[5],e[5]=u?_o(u,c,t[6]):c,e[6]=u?sr(e[5],n):t[6]),(c=t[7])&&(e[7]=c),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],d=w[1],c=w[2],u=w[3],h=w[4],!(m=w[9]=w[9]===e?p?0:r.length:br(w[9]-b,0))&&24&d&&(d&=-25),d&&1!=d)$=8==d||d==o?function(t,r,n){var o=Lo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,d=li(i);l--;)s[l]=arguments[l];var c=a<3&&s[0]!==d&&s[a-1]!==d?[]:sr(s,d);return(a-=c.length)<n?Zo(t,r,Ho,i.placeholder,e,s,c,e,e,n-a):Dt(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,d,m):d!=i&&33!=d||h.length?Ho.apply(e,w):function(e,t,r,n){var o=1&t,i=Lo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,d=n.length,c=we(d+s),u=this&&this!==ht&&this instanceof t?i:e;++l<d;)c[l]=n[l];for(;s--;)c[l++]=arguments[++a];return Dt(u,o?r:this,c)}}(r,d,c,u);else var $=function(e,t,r){var n=1&t,o=Lo(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,d,c);return Ii((x?eo:Oi)($,w),r,d)}function Jo(t,r,n,o){return t===e||Pa(t,Me[n])&&!Ae.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Nn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,d=r.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(t),u=a.get(r);if(c&&u)return c==r&&u==t;var h=-1,f=!0,g=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var m=t[h],p=r[h];if(o)var b=s?o(p,m,h,r,t,a):o(m,p,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(g){if(!zt(r,(function(e,t){if(!Qt(g,t)&&(m===e||i(m,e,n,o,a)))return g.push(t)}))){f=!1;break}}else if(m!==p&&!i(m,p,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Mi(Fi(t,e,Vi),t+"")}function oi(e){return Dn(e,Ts,fi)}function ii(e){return Dn(e,Ms,gi)}var ai=_r?function(e){return _r.get(e)}:ll;function si(e){for(var t=e.name+"",r=Or[t],n=Ae.call(Or,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Ae.call(Rr,"placeholder")?Rr:e).placeholder}function di(){var e=Rr.iteratee||ol;return e=e===ol?An:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Si(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return Bn(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=ke(e),_t(bt(e),(function(t){return Ze.call(e,t)})))}:ml,gi=bt?function(e){for(var t=[];e;)It(t,fi(e)),e=Ue(e);return t}:ml,mi=Sn;function pi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=ji(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Di(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?c:t)&&("number"==r||"symbol"!=r&&pe.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||Q.test(e)||!X.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Rr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&mi(new Cr(new ArrayBuffer(1)))!=T||Dr&&mi(new Dr)!=w||Sr&&mi(Sr.resolve())!=D||kr&&mi(new kr)!=k||Fr&&mi(new Fr)!=_)&&(mi=function(t){var r=Sn(t),n=r==C?t.constructor:e,o=n?Li(n):"";if(o)switch(o){case Tr:return T;case Mr:return w;case Ir:return D;case Br:return k;case Ar:return _}return r});var Ci=Ie?Xa:pl;function Di(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Me)}function Si(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Fi(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),Dt(t,this,s)}}function Ei(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function _i(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oi=Bi(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Mi=Bi(to);function Ii(e,t,r){var n=t+"";return Mi(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(f,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Bi(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Ai(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=Zn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Ba(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(de,"$1"):r||e)})),t}));function ji(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Li(e){if(null!=e){try{return Be.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ri(e){if(e instanceof Wr)return e.clone();var t=new Nr(e.__wrapped__,e.__chain__);return t.__actions__=Oo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),di(n,2)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:gs(r);return o<0&&(o=br(n+o,0)),Rt(e,di(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=gs(n),i=n<0?br(o+i,0):vr(i,o-1)),Rt(t,di(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=Mt(e,vo);return t.length&&t[0]===e[0]?_n(t):[]})),Zi=Gn((function(t){var r=Gi(t),n=Mt(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?_n(n,di(r,2)):[]})),qi=Gn((function(t){var r=Gi(t),n=Mt(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?_n(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Xi=Gn(Qi);function Qi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Mt(t,(function(e){return yi(e,r)?+e:e})).sort(Fo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),di(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=_t(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Zt(t,(function(t){return Mt(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:Mt(n,(function(t){return Dt(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return po(_t(e,Ka))})),la=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),po(_t(t,Ka),di(r,2))})),da=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,po(_t(t,Ka),e,r)})),ca=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Rr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var ga=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Nr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ma=Mo((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)})),pa=Ro(Wi),ba=Ro(Yi);function va(e,t){return(Ya(e)?kt:hn)(e,di(t,3))}function ya(e,t){return(Ya(e)?Ft:fn)(e,di(t,3))}var xa=Mo((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?Dt(t,e,r):On(e,t,r)})),i})),$a=Mo((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?Mt:Rn)(e,di(t,3))}var Da=Mo((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Sa=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Fa(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Qo(t,s,e,e,e,e,r)}function Ea(r,n){var o;if("function"!=typeof n)throw new _e(t);return r=gs(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var _a=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(_a));n|=i}return Qo(e,n,t,r,o)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Oa));n|=i}return Qo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,d,c,u=0,h=!1,f=!1,g=!0;if("function"!=typeof r)throw new _e(t);function m(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function p(t){var r=t-c;return c===e||r>=n||r<0||f&&t-u>=s}function b(){var e=ka();if(p(e))return v(e);d=Ti(b,function(e){var t=n-(e-c);return f?vr(t,s-(e-u)):t}(e))}function v(t){return d=e,g&&i?m(t):(i=a=e,l)}function y(){var t=ka(),r=p(t);if(i=arguments,a=this,c=t,r){if(d===e)return function(e){return u=e,d=Ti(b,n),h?m(e):l}(c);if(f)return Co(d),d=Ti(b,n),m(c)}return d===e&&(d=Ti(b,n)),l}return n=ps(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ps(o.maxWait)||0,n):s,g="trailing"in o?!!o.trailing:g),y.cancel=function(){d!==e&&Co(d),u=0,i=c=a=d=e},y.flush=function(){return d===e?l:v(ka())},y}var Ma=Gn((function(e,t){return cn(e,1,t)})),Ia=Gn((function(e,t,r){return cn(e,ps(t)||0,r)}));function Ba(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new _e(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ba.Cache||Ur),n}function Aa(e){if("function"!=typeof e)throw new _e(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ba.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?Mt(t[0],Gt(di())):Mt(bn(t,1),Gt(di()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return Dt(e,this,n)}))})),ja=Gn((function(t,r){var n=sr(r,li(ja));return Qo(t,i,e,r,n)})),La=Gn((function(t,r){var n=sr(r,li(La));return Qo(t,a,e,r,n)})),Ra=ni((function(t,r){return Qo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Ha=Ko(kn),Na=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Ae.call(e,"callee")&&!Ze.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return ts(e)&&Sn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Xa(e)}function Ka(e){return ts(e)&&Ua(e)}var Za=jt||pl,qa=yt?Gt(yt):function(e){return ts(e)&&Sn(e)==b};function Ga(e){if(!ts(e))return!1;var t=Sn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Xa(e){if(!es(e))return!1;var t=Sn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==gs(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&mi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Sn(e)==$}function os(e){if(!ts(e)||Sn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Be.call(r)==Re}var is=wt?Gt(wt):function(e){return ts(e)&&Sn(e)==S},as=$t?Gt($t):function(e){return ts(e)&&mi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Sn(e)==F}function ls(e){return"symbol"==typeof e||ts(e)&&Sn(e)==E}var ds=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Sn(e)]},cs=Ko(Ln),us=Ko((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Oo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=mi(e);return(t==w?ir:t==k?lr:Ps)(e)}function fs(e){return e?(e=ps(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function gs(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function ms(e){return e?sn(gs(e),0,h):0}function ps(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qt(e);var r=fe.test(e);return r||me.test(e)?dt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Ms(e))}function vs(e){return null==e?"":co(e)}var ys=Io((function(e,t){if(Di(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Io((function(e,t){To(t,Ms(t),e)})),ws=Io((function(e,t,r,n){To(t,Ms(t),e,n)})),$s=Io((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ds=Gn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Ms(a),l=-1,d=s.length;++l<d;){var c=s[l],u=t[c];(u===e||Pa(u,Me[c])&&!Ae.call(t,c))&&(t[c]=a[c])}return t})),Ss=Gn((function(t){return t.push(e,ei),Dt(Bs,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Fs(e,t){return null!=e&&pi(e,t,En)}var Es=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),e[t]=r}),el(nl)),_s=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),di),Os=Gn(On);function Ts(e){return Ua(e)?qr(e):zn(e)}function Ms(e){return Ua(e)?qr(e,!0):jn(e)}var Is=Io((function(e,t,r){Nn(e,t,r)})),Bs=Io((function(e,t,r,n){Nn(e,t,r,n)})),As=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Fs(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=Mt(ii(e),(function(e){return[e]}));return t=di(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Ls=Xo(Ts),Rs=Xo(Ms);function Ps(e){return null==e?[]:Xt(e,Ts(e))}var Hs=jo((function(e,t,r){return t=t.toLowerCase(),e+(r?Ns(t):t)}));function Ns(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Qe,"")}var Ys=jo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=jo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),Ks=jo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Zs=jo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),qs=jo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=zo("toUpperCase");function Xs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Qs=Gn((function(t,r){try{return Dt(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=ji(t),on(e,t,_a(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return An("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Xa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Oo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,It([this.value()],arguments))})})),e}function ll(){}var dl=Yo(Mt),cl=Yo(Et),ul=Yo(zt);function hl(e){return wi(e)?Yt(ji(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),gl=Uo(!0);function ml(){return[]}function pl(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=qo("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=qo("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=qo("round"),Dl=Wo((function(e,t){return e-t}),0);return Rr.after=function(e,r){if("function"!=typeof r)throw new _e(t);return e=gs(e),function(){if(--e<1)return r.apply(this,arguments)}},Rr.ary=Fa,Rr.assign=ys,Rr.assignIn=xs,Rr.assignInWith=ws,Rr.assignWith=$s,Rr.at=Cs,Rr.before=Ea,Rr.bind=_a,Rr.bindAll=Js,Rr.bindKey=Oa,Rr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Rr.chain=ha,Rr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(gs(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(gt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Rr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Rr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return It(Ya(r)?Oo(r):[r],bn(t,1))},Rr.cond=function(e){var r=null==e?0:e.length,n=di();return e=r?Mt(e,(function(e){if("function"!=typeof e[1])throw new _e(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(Dt(o[0],this,t))return Dt(o[1],this,t)}}))},Rr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return dn(r,e,t)}}(ln(e,1))},Rr.constant=el,Rr.countBy=ma,Rr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Rr.curry=function t(r,n,o){var i=Qo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Rr.curryRight=function t(r,n,i){var a=Qo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Rr.debounce=Ta,Rr.defaults=Ds,Rr.defaultsDeep=Ss,Rr.defer=Ma,Rr.delay=Ia,Rr.difference=Pi,Rr.differenceBy=Hi,Rr.differenceWith=Ni,Rr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:gs(r))<0?0:r,o):[]},Rr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:gs(r)))<0?0:r):[]},Rr.dropRightWhile=function(e,t){return e&&e.length?go(e,di(t,3),!0,!0):[]},Rr.dropWhile=function(e,t){return e&&e.length?go(e,di(t,3),!0):[]},Rr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=gs(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:gs(o))<0&&(o+=i),o=n>o?0:ms(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Rr.filter=function(e,t){return(Ya(e)?_t:pn)(e,di(t,3))},Rr.flatMap=function(e,t){return bn(Ca(e,t),1)},Rr.flatMapDeep=function(e,t){return bn(Ca(e,t),d)},Rr.flatMapDepth=function(t,r,n){return n=n===e?1:gs(n),bn(Ca(t,r),n)},Rr.flatten=Vi,Rr.flattenDeep=function(e){return null!=e&&e.length?bn(e,d):[]},Rr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:gs(r)):[]},Rr.flip=function(e){return Qo(e,512)},Rr.flow=tl,Rr.flowRight=rl,Rr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Rr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Rr.functionsIn=function(e){return null==e?[]:$n(e,Ms(e))},Rr.groupBy=xa,Rr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Rr.intersection=Ki,Rr.intersectionBy=Zi,Rr.intersectionWith=qi,Rr.invert=Es,Rr.invertBy=_s,Rr.invokeMap=wa,Rr.iteratee=ol,Rr.keyBy=$a,Rr.keys=Ts,Rr.keysIn=Ms,Rr.map=Ca,Rr.mapKeys=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Rr.mapValues=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Rr.matches=function(e){return Pn(ln(e,1))},Rr.matchesProperty=function(e,t){return Hn(e,ln(t,1))},Rr.memoize=Ba,Rr.merge=Is,Rr.mergeWith=Bs,Rr.method=il,Rr.methodOf=al,Rr.mixin=sl,Rr.negate=Aa,Rr.nthArg=function(e){return e=gs(e),Gn((function(t){return Wn(t,e)}))},Rr.omit=As,Rr.omitBy=function(e,t){return js(e,Aa(di(t)))},Rr.once=function(e){return Ea(2,e)},Rr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Rr.over=dl,Rr.overArgs=za,Rr.overEvery=cl,Rr.overSome=ul,Rr.partial=ja,Rr.partialRight=La,Rr.partition=Da,Rr.pick=zs,Rr.pickBy=js,Rr.property=hl,Rr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Rr.pull=Xi,Rr.pullAll=Qi,Rr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,di(r,2)):e},Rr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Rr.pullAt=Ji,Rr.range=fl,Rr.rangeRight=gl,Rr.rearg=Ra,Rr.reject=function(e,t){return(Ya(e)?_t:pn)(e,Aa(di(t,3)))},Rr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=di(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Rr.rest=function(r,n){if("function"!=typeof r)throw new _e(t);return Gn(r,n=n===e?n:gs(n))},Rr.reverse=ea,Rr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:gs(r),(Ya(t)?Xr:Qn)(t,r)},Rr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Rr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Rr.shuffle=function(e){return(Ya(e)?Qr:ro)(e)},Rr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:gs(r),n=n===e?o:gs(n)),no(t,r,n)):[]},Rr.sortBy=Sa,Rr.sortedUniq=function(e){return e&&e.length?so(e):[]},Rr.sortedUniqBy=function(e,t){return e&&e.length?so(e,di(t,2)):[]},Rr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Rr.spread=function(e,r){if("function"!=typeof e)throw new _e(t);return r=null==r?0:br(gs(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&It(o,n),Dt(e,this,o)}))},Rr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Rr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:gs(r))<0?0:r):[]},Rr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:gs(r)))<0?0:r,o):[]},Rr.takeRightWhile=function(e,t){return e&&e.length?go(e,di(t,3),!1,!0):[]},Rr.takeWhile=function(e,t){return e&&e.length?go(e,di(t,3)):[]},Rr.tap=function(e,t){return t(e),e},Rr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new _e(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Rr.thru=fa,Rr.toArray=hs,Rr.toPairs=Ls,Rr.toPairsIn=Rs,Rr.toPath=function(e){return Ya(e)?Mt(e,ji):ls(e)?[e]:Oo(zi(vs(e)))},Rr.toPlainObject=bs,Rr.transform=function(e,t,r){var n=Ya(e),o=n||Za(e)||ds(e);if(t=di(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Xa(i)?Pr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Rr.unary=function(e){return Fa(e,1)},Rr.union=ta,Rr.unionBy=ra,Rr.unionWith=na,Rr.uniq=function(e){return e&&e.length?uo(e):[]},Rr.uniqBy=function(e,t){return e&&e.length?uo(e,di(t,2)):[]},Rr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Rr.unset=function(e,t){return null==e||ho(e,t)},Rr.unzip=oa,Rr.unzipWith=ia,Rr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Rr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Rr.values=Ps,Rr.valuesIn=function(e){return null==e?[]:Xt(e,Ms(e))},Rr.without=aa,Rr.words=Xs,Rr.wrap=function(e,t){return ja(yo(t),e)},Rr.xor=sa,Rr.xorBy=la,Rr.xorWith=da,Rr.zip=ca,Rr.zipObject=function(e,t){return bo(e||[],t||[],en)},Rr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Rr.zipWith=ua,Rr.entries=Ls,Rr.entriesIn=Rs,Rr.extend=xs,Rr.extendWith=ws,sl(Rr,Rr),Rr.add=vl,Rr.attempt=Qs,Rr.camelCase=Hs,Rr.capitalize=Ns,Rr.ceil=yl,Rr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ps(n))==n?n:0),r!==e&&(r=(r=ps(r))==r?r:0),sn(ps(t),r,n)},Rr.clone=function(e){return ln(e,4)},Rr.cloneDeep=function(e){return ln(e,5)},Rr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Rr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Rr.conformsTo=function(e,t){return null==t||dn(e,t,Ts(t))},Rr.deburr=Ws,Rr.defaultTo=function(e,t){return null==e||e!=e?t:e},Rr.divide=xl,Rr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(gs(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Rr.eq=Pa,Rr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Rr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Rr.every=function(t,r,n){var o=Ya(t)?Et:gn;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Rr.find=pa,Rr.findIndex=Wi,Rr.findKey=function(e,t){return Lt(e,di(t,3),xn)},Rr.findLast=ba,Rr.findLastIndex=Yi,Rr.findLastKey=function(e,t){return Lt(e,di(t,3),wn)},Rr.floor=wl,Rr.forEach=va,Rr.forEachRight=ya,Rr.forIn=function(e,t){return null==e?e:vn(e,di(t,3),Ms)},Rr.forInRight=function(e,t){return null==e?e:yn(e,di(t,3),Ms)},Rr.forOwn=function(e,t){return e&&xn(e,di(t,3))},Rr.forOwnRight=function(e,t){return e&&wn(e,di(t,3))},Rr.get=ks,Rr.gt=Ha,Rr.gte=Na,Rr.has=function(e,t){return null!=e&&pi(e,t,Fn)},Rr.hasIn=Fs,Rr.head=Ui,Rr.identity=nl,Rr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?gs(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Rr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:gs(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Rr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ps(t),r,n)},Rr.invoke=Os,Rr.isArguments=Wa,Rr.isArray=Ya,Rr.isArrayBuffer=Va,Rr.isArrayLike=Ua,Rr.isArrayLikeObject=Ka,Rr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Sn(e)==p},Rr.isBuffer=Za,Rr.isDate=qa,Rr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Rr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Za(e)||ds(e)||Wa(e)))return!e.length;var t=mi(e);if(t==w||t==k)return!e.size;if(Di(e))return!zn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Rr.isEqual=function(e,t){return Mn(e,t)},Rr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?Mn(t,r,e,n):!!o},Rr.isError=Ga,Rr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Rr.isFunction=Xa,Rr.isInteger=Qa,Rr.isLength=Ja,Rr.isMap=rs,Rr.isMatch=function(e,t){return e===t||In(e,t,ui(t))},Rr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,In(t,r,ui(r),n)},Rr.isNaN=function(e){return ns(e)&&e!=+e},Rr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Bn(e)},Rr.isNil=function(e){return null==e},Rr.isNull=function(e){return null===e},Rr.isNumber=ns,Rr.isObject=es,Rr.isObjectLike=ts,Rr.isPlainObject=os,Rr.isRegExp=is,Rr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=c},Rr.isSet=as,Rr.isString=ss,Rr.isSymbol=ls,Rr.isTypedArray=ds,Rr.isUndefined=function(t){return t===e},Rr.isWeakMap=function(e){return ts(e)&&mi(e)==_},Rr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Sn(e)},Rr.join=function(e,t){return null==e?"":mr.call(e,t)},Rr.kebabCase=Ys,Rr.last=Gi,Rr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=gs(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Rt(t,Nt,i,!0)},Rr.lowerCase=Vs,Rr.lowerFirst=Us,Rr.lt=cs,Rr.lte=us,Rr.max=function(t){return t&&t.length?mn(t,nl,kn):e},Rr.maxBy=function(t,r){return t&&t.length?mn(t,di(r,2),kn):e},Rr.mean=function(e){return Wt(e,nl)},Rr.meanBy=function(e,t){return Wt(e,di(t,2))},Rr.min=function(t){return t&&t.length?mn(t,nl,Ln):e},Rr.minBy=function(t,r){return t&&t.length?mn(t,di(r,2),Ln):e},Rr.stubArray=ml,Rr.stubFalse=pl,Rr.stubObject=function(){return{}},Rr.stubString=function(){return""},Rr.stubTrue=function(){return!0},Rr.multiply=$l,Rr.nth=function(t,r){return t&&t.length?Wn(t,gs(r)):e},Rr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Rr.noop=ll,Rr.now=ka,Rr.pad=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(pt(o),r)+e+Vo(gt(o),r)},Rr.padEnd=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;return t&&n<t?e+Vo(t-n,r):e},Rr.padStart=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Rr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Rr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return Zn(t,r)},Rr.reduce=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,hn)},Rr.reduceRight=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,fn)},Rr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:gs(r),qn(vs(t),r)},Rr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Rr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[ji(r[o])];a===e&&(o=i,a=n),t=Xa(a)?a.call(t):a}return t},Rr.round=Cl,Rr.runInContext=ne,Rr.sample=function(e){return(Ya(e)?Gr:Xn)(e)},Rr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=mi(e);return t==w||t==k?e.size:zn(e).length},Rr.snakeCase=Ks,Rr.some=function(t,r,n){var o=Ya(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Rr.sortedIndex=function(e,t){return io(e,t)},Rr.sortedIndexBy=function(e,t,r){return ao(e,t,di(r,2))},Rr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Rr.sortedLastIndex=function(e,t){return io(e,t,!0)},Rr.sortedLastIndexBy=function(e,t,r){return ao(e,t,di(r,2),!0)},Rr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Rr.startCase=Zs,Rr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(gs(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Rr.subtract=Dl,Rr.sum=function(e){return e&&e.length?Kt(e,nl):0},Rr.sumBy=function(e,t){return e&&e.length?Kt(e,di(t,2)):0},Rr.template=function(t,r,n){var o=Rr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),d=Xt(s,l),c=0,u=r.interpolate||ve,h="__p += '",f=Fe((r.escape||ve).source+"|"+u.source+"|"+(u===G?ce:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),g="//# sourceURL="+(Ae.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(c,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e})),h+="';\n";var m=Ae.call(r,"variable")&&r.variable;if(m){if(le.test(m))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(H,""):h).replace(N,"$1").replace(W,"$1;"),h="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var p=Qs((function(){return De(l,g+"return "+h).apply(e,d)}));if(p.source=h,Ga(p))throw p;return p},Rr.times=function(e,t){if((e=gs(e))<1||e>c)return[];var r=h,n=vr(e,h);t=di(t),e-=h;for(var o=Zt(n,t);++r<e;)t(r);return o},Rr.toFinite=fs,Rr.toInteger=gs,Rr.toLength=ms,Rr.toLower=function(e){return vs(e).toLowerCase()},Rr.toNumber=ps,Rr.toSafeInteger=function(e){return e?sn(gs(e),-9007199254740991,c):0===e?e:0},Rr.toString=vs,Rr.toUpper=function(e){return vs(e).toUpperCase()},Rr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return qt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Rr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Rr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Rr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?gs(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-cr(o);if(l<1)return o;var d=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return d+o;if(s&&(l+=d.length-l),is(i)){if(t.slice(l).search(i)){var c,u=d;for(i.global||(i=Fe(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;c=i.exec(u);)var h=c.index;d=d.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=d.lastIndexOf(i);f>-1&&(d=d.slice(0,f))}return d+o},Rr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,fr):e},Rr.uniqueId=function(e){var t=++ze;return vs(e)+t},Rr.upperCase=qs,Rr.upperFirst=Gs,Rr.each=va,Rr.eachRight=ya,Rr.first=Ui,sl(Rr,(bl={},xn(Rr,(function(e,t){Ae.call(Rr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Rr.VERSION="4.17.23",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Rr[e].placeholder=Rr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(gs(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:di(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(di(e)))},Wr.prototype.slice=function(t,r){t=gs(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=gs(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Rr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Rr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,d=s[0],c=l||Ya(r),u=function(e){var t=i.apply(Rr,It([e],s));return o&&h?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(l=c=!1);var h=this.__chain__,f=!!this.__actions__.length,g=a&&!h,m=l&&!f;if(!a&&c){r=m?r:new Wr(this);var p=t.apply(r,s);return p.__actions__.push({func:fa,args:[u],thisArg:e}),new Nr(p,h)}return g&&m?t.apply(this,s):(p=this.thru(u),g?o?p.value()[0]:p.value():p)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Rr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Rr[t];if(r){var n=r.name+"";Ae.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Ho(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,d=n?s:a-1,c=this.__iteratees__,u=c.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return mo(e,this.__actions__);var g=[];e:for(;l--&&h<f;){for(var m=-1,p=e[d+=t];++m<u;){var b=c[m],v=b.iteratee,y=b.type,x=v(p);if(2==y)p=x;else if(!x){if(1==y)continue e;break e}}g[h++]=p}return g},Rr.prototype.at=ga,Rr.prototype.chain=function(){return ha(this)},Rr.prototype.commit=function(){return new Nr(this.value(),this.__chain__)},Rr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Rr.prototype.plant=function(t){for(var r,n=this;n instanceof Hr;){var o=Ri(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Rr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Nr(r,this.__chain__)}return this.thru(ea)},Rr.prototype.toJSON=Rr.prototype.valueOf=Rr.prototype.value=function(){return mo(this.__wrapped__,this.__actions__)},Rr.prototype.first=Rr.prototype.head,Je&&(Rr.prototype[Je]=function(){return this}),Rr}();gt?((gt.exports=gr)._=gr,ft._=gr):ht._=gr}.call(Ee);var Qx=Xx.exports;const Jx=o.forwardRef(((n,o)=>{var i,{value:l,readOnly:d,"data-testid":c,maskRange:u,unmaskRange:f,maskRegex:g,maskTransformer:m,iconMask:p=e(ve,{}),iconUnmask:b=e(be,{}),iconActiveColor:v,iconInactiveColor:x,maskChar:w="•",error:$,disableMask:C,transformInput:D,loadState:S,onMask:k,onUnmask:F,onChange:E,onFocus:_,onBlur:O,onTryAgain:T}=n,M=ke(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const I=d&&Qx.isEmpty(l),[B,A]=s(!C),[z,j]=s(l||""),[L]=s((()=>Je.generate())),R=`${null!==(i=M.id)&&void 0!==i?i:L}-value`,P=a(null),H=a(null),N=a(null),W=a(!C),Y=M["aria-labelledby"];y(o,(()=>P.current),[]),h((()=>{j(l||"")}),[l]),h((()=>{var e,t;d&&("fail"===S&&(null===(e=H.current)||void 0===e||e.focus()),"success"===S&&(null===(t=N.current)||void 0===t||t.focus()))}),[d,S]);const V=e=>{X(!1),null==_||_(e)},U=e=>{X(!0),null==O||O(e)},K=e=>{let t=e.target.value;switch(D){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}j(t),e.target.value=t,null==E||E(e)},Z=()=>{d&&(null==T||T())},q=e=>{e.preventDefault()},G=()=>{var e;const t=!B;X(t),t||null===(e=P.current)||void 0===e||e.focus()},X=e=>{W.current!==e&&(W.current=e,A(e),e?null==k||k():null==F||F())},Q=()=>I?"-":B&&!C?et.maskValue(z,{maskChar:w,maskRange:u,unmaskRange:f,maskRegex:g,maskTransformer:m}):z,J=()=>!(null==z?void 0:z.toString().length)||C,ee=()=>{if(I)return"-";if(B&&!C){return et.getMaskedDescription(z,"masked",u)||"Masked value"}return z},te=()=>{if(I)return e(r,{});const t=J();return e(jx,{"data-testid":"icon-"+(B?"masked":"unmasked"),onMouseDown:t?void 0:q,onClick:t?void 0:G,$isDisabled:t,$inactiveColor:x,$activeColor:v,"aria-hidden":"true",children:B?b:p})};return e("div",{"aria-busy":"loading"===S,children:(()=>{if(d)switch(S){case"fail":return t(Vx,{ref:H,onClick:Z,"data-testid":"try-again-button",type:"button",children:[t(Nx,{children:[e(Wx,{}),e(Yx,{children:"Error"})]}),e(Hx,{children:"Try again?"})]});case"loading":return t(Lx,{children:[e(Px,{}),e(Rx,{children:"Retrieving..."})]});default:return(()=>{const n=J()||I;return t(r,{children:[e(sl,{id:R,children:ee()}),t(Ux,{ref:N,"data-testid":"masked-input-readonly-button",onClick:n?void 0:G,type:"button","aria-labelledby":dl(R,Y),"aria-disabled":n,children:[e(Kx,{children:Q()}),!n&&e(Zx,{children:B?e(be,{"data-testid":"masked-icon"}):e(ve,{"data-testid":"unmasked-icon"})})]})]})})()}return e(zx,Object.assign({ref:P,"data-testid":`${c||"masked-input"}${B?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:te()},position:"right"},onFocus:d?void 0:V,onBlur:d?void 0:U,onClick:d?G:void 0,onChange:K,value:Q(),readOnly:d,error:$,$isDisabled:J()},M))})()})})),ew=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h}=t,f=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]),[g]=s((()=>Je.generate())),m=null!=i?i:`form-field-masked-input-${g}`;return e(Ks,{id:m,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,children:e(Jx,Object.assign({ref:r,id:`${m}-base`,"data-testid":l?`${l}-base`:void 0,error:!!o},f))})})),tw=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,enableSearch:m=!1,searchFunction:p,searchPlaceholder:b,valueExtractor:v,listExtractor:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:D="success",optionTruncationType:S="end",renderListItem:k,hideNoResultsDisplay:F,noResultsDescription:E,customLabels:_,renderCustomCallToAction:O,onBlur:T,variant:M="default",readOnly:I,alignment:B,dropdownZIndex:A,maxSelectable:z,dropdownRootNode:j,dropdownWidth:L})=>{const{allSelectedLabel:R,multiSelectedLabel:P}=_||{},[H,N]=s(t||[]),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>Je.generate())),Z=a(null),q=a(null);h((()=>{N(t||[])}),[t]);const G=()=>{H&&H.length>0||z?(N([]),re([])):(N(n),re(n))},X=(e,t)=>{const r=[...H],n=Xg(H,(e=>(v?v(e):e)===t));n>-1?r.splice(n,1):r.push(e),N(r),re(r)},Q=()=>{W&&(Y(!1),te(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&Z.current&&!Z.current.contains(e.relatedTarget)&&(U(!1),null==T||T())},te=e=>{!e&&$&&$(),e&&w&&w()},re=e=>{x&&x(e)};return e(zv,{children:e(il,{enabled:!I&&!o,isOpen:W,renderElement:()=>e(kd,{className:l,"data-testid":d,id:c,ref:Z,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:I,$error:i,children:e(dy,{ref:q,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:I,variant:M,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,children:e(Js,{$disabled:o,children:H&&0!==H.length?e(el,{$variant:M,children:n&&H.length===n.length?R||"All selected":P||`${H.length} selected`}):e(tl,{$truncateType:S,$variant:M,children:r})})})}),renderDropdown:()=>e(ay,{listboxId:K,listItems:n,onSelectItem:X,onDismiss:Q,valueExtractor:v,listExtractor:y,enableSearch:m,searchFunction:p,searchPlaceholder:b,multiSelect:!0,maxSelectable:z,selectedItems:H,onSelectAll:G,onRetry:C,itemsLoadState:D,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:F,noResultsDescription:E,customLabels:_,renderCustomCallToAction:O,variant:M,width:L,matchElementWidth:!0}),onOpen:()=>{Y(!0),te(!0),U(!0)},onClose:e=>{Y(!1),te(!1),"click"!==e&&(U(!1),null==T||T())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),Y(!1),te(!1)},clickToToggle:!0,offset:8,alignment:B,fitAvailableHeight:!0,customZIndex:A,rootNode:j})})},rw=(e,t)=>{const[r,...n]=t;if(cx(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?rw(o.subItems,n):o:void 0},nw=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...nw(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},ow=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPaths:g,mode:m,valueToStringFunction:p,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,readOnly:$,onSearch:C,onSelectOptions:D,onShowOptions:S,onHideOptions:k,onRetry:F,onBlur:E,optionsLoadState:_="success",optionTruncationType:O="end",variant:T="default",alignment:M,dropdownZIndex:I,dropdownWidth:B,dropdownRootNode:A})=>{const{multiSelectedLabel:z}=w||{},j=r,[L,R]=s(g?gx(g):new Set),[P,H]=s([]),[N,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>Je.generate())),K=a(null),Z=a(null),q=a(null);h((()=>{const e=g||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=rw(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(j,e);R(gx(e)),H(t)}),[g,j]);const G=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));R(gx(e)),H(r),ne(e,r)},X=e=>{const t=oe(e),r=t.map((e=>e.keyPath));H(t),R(gx(r)),ne(r,t)},Q=()=>{Y||N||V(!0)},J=e=>{Y&&!N&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==E||E())},ee=()=>{if(P.length>1)return z||`${P.length} selected`;const{label:e,value:t}=P[0];return p?p(t):e},te=e=>{if("middle"===O){let t=0;return q&&q.current&&(t=q.current.getBoundingClientRect().width),et.truncateOneLine(e,t,120,6)}return e},re=e=>{!e&&k&&k(),e&&S&&S()},ne=(e,t)=>{if(D){const r=t.map((e=>e.value));D(e,r)}},oe=e=>{if(!0===e.checked)return P.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!em(e.keyPath,r)}));{const t=[...P],r=e.hasSubItems?((e,t)=>{const r=rw(e,t);return r&&r.subItems?nw(r.subItems,t):[]})(j,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{P.find((t=>em(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(il,{enabled:!$&&!n,isOpen:N,renderElement:()=>e(kd,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:Q,onBlur:J,$focused:Y,$disabled:n,$readOnly:$,$error:o,children:e(dy,{ref:Z,disabled:n,expanded:N,listboxId:U,popupRole:"tree",readOnly:$,variant:T,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(Js,{ref:q,$disabled:n,children:cx(P)?e(tl,{$truncateType:O,children:t}):e(el,{$truncateType:O,children:te(ee())})})})}),renderDropdown:()=>e($x,{listboxId:U,listItems:j,multiSelect:!0,selectedKeyPaths:L,itemsLoadState:_,itemTruncationType:O,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,onSelectItem:X,onSelectAll:G,onRetry:F,onSearch:C,variant:T,mode:m,width:B,matchElementWidth:!0}),onOpen:()=>{W(!0),re(!0),V(!0)},onClose:e=>{W(!1),re(!1),"click"!==e&&(V(!1),null==E||E())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),W(!1),re(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:I,rootNode:A})},iw=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPath:g,mode:m,valueToStringFunction:p,enableSearch:b,searchPlaceholder:v,selectableCategory:y,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,readOnly:C,onBlur:D,onSearch:S,onSelectOption:k,onShowOptions:F,onHideOptions:E,onRetry:_,optionsLoadState:O="success",optionTruncationType:T="end",variant:M="default",alignment:I,dropdownZIndex:B,dropdownWidth:A,dropdownRootNode:z})=>{const j=r,[L,R]=s(g?gx([g]):new Set),[P,H]=s(),[N,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>Je.generate())),K=a(null),Z=a(null),q=a(null);h((()=>{R(g?gx([g]):new Set);const e=hx(j,g||[]);H(null!=e?e:void 0)}),[g,j]);const G=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;R(gx([r])),H({label:n,value:o}),W(!1),te(!1),null===(t=Z.current)||void 0===t||t.focus(),null==k||k(r,o)},X=()=>{Y||N||V(!0)},Q=e=>{Y&&!N&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==D||D())},J=()=>{if(!P)return"";const{label:e,value:t}=P;return p?p(t):e},ee=e=>{if("middle"===T){let t=0;return q&&q.current&&(t=q.current.getBoundingClientRect().width),et.truncateOneLine(e,t,120,6)}return e},te=e=>{!e&&E&&E(),e&&F&&F()};return e(il,{enabled:!C&&!n,isOpen:N,renderElement:()=>e(kd,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:X,onBlur:Q,$focused:Y,$disabled:n,$readOnly:C,$error:o,children:e(dy,{ref:Z,disabled:n,expanded:N,listboxId:U,popupRole:"tree",readOnly:C,variant:M,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(Js,{ref:q,$disabled:n,children:cx(P)?e(tl,{$truncateType:T,children:t}):e(el,{$truncateType:T,children:ee(J())})})})}),renderDropdown:()=>e($x,{listboxId:U,listItems:j,selectedKeyPaths:L,selectableCategory:y,itemsLoadState:O,itemTruncationType:T,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,onSelectItem:G,onRetry:_,onSearch:S,variant:M,mode:m,width:A,matchElementWidth:!0}),onOpen:()=>{W(!0),te(!0),V(!0)},onClose:e=>{W(!1),te(!1),"click"!==e&&(V(!1),null==D||D())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),W(!1),te(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:B,rootNode:z})};var aw=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var sw=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},lw=sw(),dw=Jh;var cw=qh;var uw=function(e,t){return function(r,n){if(null==r)return r;if(!cw(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&lw(e,t,dw)}));var hw=aw,fw=uw,gw=Fg,mw=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},pw=ir;var bw=_e((function(e,t,r){var n=pw(e)?hw:mw,o=arguments.length<3;return n(e,gw(t),r,o,fw)}));const vw=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],yw=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var xw;!function(e){e.getCountries=()=>[].concat(...vw.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:yw("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return bw(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(xw||(xw={}));const ww=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:g,onHideOptions:m,onShowOptions:p,placeholder:b,autoComplete:v,noBorder:y=!1}=t,x=ke(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(xw.getCountries()),[$,C]=s(void 0),[D,S]=s(""),k=a(null),F=Jt({ref:k,formatter:e=>xw.formatNumber(e.replace(/[^0-9]/g,""),$)});h((()=>{const e=w.filter((e=>e.countryCode===$w(null==n?void 0:n.countryCode)))[0];C(e),S(xw.formatNumber(null==n?void 0:n.number,e))}),[n]);const E=e=>{O(D,e),r&&_(D,e)},_=(e,t)=>{const n=xw.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&Cw(t.countryCode)})},O=(e,t)=>{S(xw.formatNumber(e,t)),C(t)};return e(Bx,Object.assign({ref:k,value:D,onChange:()=>{const e=F();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,$),r&&_(t,$)},allowClear:o&&!!D,onClear:()=>{i?i():S("")},onBlur:l,error:d,placeholder:b,addon:c?{type:"label",attributes:{value:Cw(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:g,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Cw(e.countryCode)}),onSelectOption:E,onHideOptions:m,onShowOptions:p}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number",noBorder:y},x))},$w=e=>e?e.replace("+",""):"",Cw=e=>e?e.includes("+")?e:`+${e}`:"",Dw=k.div`
    display: flex;
    flex-direction: column;
`,Sw=k.div`
    display: flex;
`,kw=k.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${fa.sm} 0 0 ${fa.sm};
    box-shadow: inset 1px 0 0 ${la.border},
        inset 0 1px 0 ${la.border}, inset 0 -1px 0 ${la.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${la["border-focus"]},
            inset 0 2px 0 ${la["border-focus"]},
            inset 0 -2px 0 ${la["border-focus"]};
    }

    ${e=>e.$error?F`
                box-shadow: inset 1px 0 0 ${la["border-error"]},
                    inset 0 1px 0 ${la["border-error"]},
                    inset 0 -1px 0 ${la["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${la["border-error-focus"]},
                        inset 0 2px 0 ${la["border-error-focus"]},
                        inset 0 -2px 0 ${la["border-error-focus"]};
                }
            `:e.$disabled?F`
                box-shadow: inset 0 0 0 1px ${la.border};
                border-radius: ${fa.sm};
                background: ${la["bg-disabled"]};
                color: ${la["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${la.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&F`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${pa.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?F`
                box-shadow: none;
                border-radius: ${fa.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${la["border-focus"]};
                }
            `:void 0}
`,Fw=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${ha["spacing-12"]};
    color: ${la["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,Ew=k(Cl.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${pa.MaxWidth.sm} {
        width: fit-content;
    }
`,_w=k(Bx)`
    padding: 0 ${ha["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${la["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
        `}
`,Ow=k(ww)`
    padding: 0 ${ha["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${la["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
            input {
                margin-left: ${ha["spacing-12"]};
            }
        `}
`,Tw=({id:r,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:h,fixedCountry:f,isLoading:g,isVerified:m,countdown:p,onSendOtp:b,onStateReset:v,sendOtpError:y})=>{const x=e=>{v(),"email"===s&&c&&c(e.target.value)},w=e=>{v(),"phone-number"===s&&h&&h(e)};return t(Dw,{id:r,"data-testid":n,children:[t(Sw,{children:[t(kw,{$isMaxWidth:"email"===s,$error:!!y,$disabled:o,$readonly:i,children:["email"===s?e(_w,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}):e(Ow,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:w,noBorder:!0,fixedCountry:f,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}),m&&e(Fw,{"aria-label":"Verified",role:"img",children:e(le,{})})]}),!o&&!i&&e(Ew,{id:r?`${r}-contact-button`:void 0,type:"button","data-testid":n?`${n}-contact-button`:void 0,onClick:b,disabled:p.isRunning||m,loading:g,children:m?"Verified":g?"":p.isRunning?"Sent OTP":"Send OTP"})]}),y&&e(Bs,{id:r?`${r}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:y})]})},Mw=k.div`
    display: flex;
    flex-direction: column;
    gap: ${ha["spacing-16"]};
`,Iw=k.svg`
    .background-circle {
        fill: ${la["bg-stronger"]};
    }

    .primary-path {
        fill: ${la["icon-primary"]};
    }

    .validation-icon {
        fill: ${la["bg-available"]};
    }

    .accent-light-3 {
        fill: ${la["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${la["icon-primary-subtlest"]};
    }
`,Bw=({width:r=120,height:n=120,className:o})=>t(Iw,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Aw=k.svg`
    .background-circle {
        fill: ${la["bg-stronger"]};
    }

    .primary-path {
        fill: ${la["icon-primary"]};
    }

    .validation-icon {
        fill: ${la["bg-available"]};
    }

    .accent-light {
        fill: ${la["bg-selected-stronger"]};
    }
`,zw=({width:r=120,height:n=120,className:o})=>t(Aw,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),jw=k.div`
    display: flex;
    align-items: center;
    background-color: ${la["bg-strong"]};
    padding: ${ha["spacing-16"]} ${ha["spacing-32"]};
    gap: ${ha["spacing-32"]};
    ${pa.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${ha["spacing-16"]};
        padding: ${ha["spacing-16"]};
    }
`,Lw=k.div`
    display: flex;
    flex-direction: column;
    gap: ${ha["spacing-16"]};
`,Rw=k(za.BodyMD)`
    color: ${la["text-subtlest"]};
`,Pw=k.div`
    display: flex;
    gap: ${ha["spacing-8"]};
    max-width: 472px;
`,Hw=k(Cl.Default)`
    flex-shrink: 0;
    width: 83px;
`,Nw=({id:r,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:h,verifyOtpError:f,otpPrefix:g,otpSeparator:m})=>{const b=p(_),v=or.useMediaQuery({maxWidth:ma["sm-max"]({theme:b})})?64:120;return t(jw,{id:r,"data-testid":n,role:"group","aria-labelledby":r?`${r}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?Bw:zw,{width:v,height:v})})})(),t(Lw,{children:[t("div",{children:[e(za.BodyMD,{weight:"semibold",id:r?`${r}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(za.BodyMD,{weight:"regular",id:r?`${r}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),t("div",{children:[t(Pw,{children:[e(Bx,{id:r?`${r}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=g?g:""}${null!=m?m:""}`}},type:"number",error:!!f,"aria-label":"Enter OTP code","aria-invalid":!!f,"aria-required":!0}),e(Hw,{id:r?`${r}-verify-button`:void 0,type:"button","data-testid":n?`${n}-verify-button`:void 0,onClick:h,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),f&&e(Bs,{id:r?`${r}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:f})]}),u.isRunning&&t(Rw,{id:r?`${r}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},Ww=r=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:f,verifyOtpError:g,otpValue:m,onOtpChange:p,otpState:b,onOtpStateChange:v}=r,[y,x]=s(!1),[w,$]=s(!1),C=(({duration:e,onComplete:t})=>{const[r,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return h((()=>{o||n(e)}),[e,o]),{timeLeft:r,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const r=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-r);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==t||t())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const t=null!=e?e:r;return`${t} second${1===t?"":"s"}`}}})({duration:u});return t(Mw,{id:n,"data-testid":o,className:i,children:[e(Tw,Object.assign({},r,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:y,isVerified:"verified"===b,countdown:C,onSendOtp:()=>Fe(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),v("sent"),C.reset(),C.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===b&&v("default")},sendOtpError:f,fixedCountry:"phone-number"!==r.type||r.fixedCountry})),"sent"===b&&e(Nw,Object.assign({},r,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==m?void 0:m.value,otpPrefix:null==m?void 0:m.prefix,otpSeparator:null==m?void 0:m.separator,setOtpCode:p,isVerifyLoading:w,countdown:C,onVerifyOtp:()=>Fe(void 0,void 0,void 0,(function*(){if(c&&(null==m?void 0:m.value))try{$(!0),yield c(m.value),v("verified"),C.reset(),null==p||p("")}catch(e){}finally{$(!1)}})),verifyOtpError:g}))]})};var Yw=dr,Vw=Tr,Uw=function(){return Yw.Date.now()},Kw=Ng,Zw=Math.max,qw=Math.min;var Gw=_e((function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function m(){var e=Uw();if(g(e))return p(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?qw(r,i-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Uw(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(m,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Kw(t)||0,Vw(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Zw(Kw(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:p(Uw())},b}));const Xw=n=>{var{className:o,"data-testid":i,selectedOption:l,minimumCharacters:d=3,fetchOptions:c,placeholder:u="Enter here...",readOnly:f=!1,disabled:m=!1,error:p,valueExtractor:b,listExtractor:v,displayValueExtractor:y,onSelectOption:x,alignment:w,dropdownZIndex:$,dropdownRootNode:C,dropdownWidth:D,"aria-describedby":S}=n,k=ke(n,["className","data-testid","selectedOption","minimumCharacters","fetchOptions","placeholder","readOnly","disabled","error","valueExtractor","listExtractor","displayValueExtractor","onSelectOption","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-describedby"]);const F=e=>e?y?y(e):e.toString():"",[E,_]=s((()=>l?F(l):"")),[O,T]=s((()=>l?F(l):"")),[M,I]=s([]),[B,A]=s(!0),[z,j]=s(!1),[L,R]=s(!!l),[P,H]=s(l),[N,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>Je.generate())),[K,Z]=s(null),q=`${U}-instruction`,G=a(null),X=a(null),Q=a(c),J=g((e=>Fe(void 0,void 0,void 0,(function*(){if(Q.current){j(!1),A(!0);try{const t=yield Q.current(e);T(e),I(null!=t?t:[]),A(!1)}catch(e){j(!0),A(!1)}}}))),[]),ee=g(Gw((e=>{J(e)}),500),[J]);h((()=>{Q.current=c}),[c]),h((()=>{E&&E.length>=d?L?E!==O&&ee(E):(W(!0),ee(E)):ee.cancel(),""===E&&P&&(null==x||x(void 0,void 0),le(),H(void 0)),l&&E!==F(l)&&R(!1)}),[E,l]),h((()=>{_(l?F(l):""),T(l?F(l):""),H(l),I([]),R(!!l)}),[l]),h((()=>{var e;const t=de(),r=null!==(e=null==M?void 0:M.length)&&void 0!==e?e:0;"loading"===t&&E.length>=d?Z("Loading suggested results"):"fail"!==t?!N||B||z||Z(0===r?E?"No results found.":null:`${r} result${r>1?"s":""} found. Press down arrow to scroll through the list.`):Z("Suggestions failed to load. Try again.")}),[M,E,z,B]),h((()=>()=>{ee.cancel()}),[ee]);const te=(e,t)=>{var r;null===(r=X.current)||void 0===r||r.focus(),_(F(e)),T(e?F(e):""),R(!0),H(e),W(!1),null==x||x(e,t)},re=()=>{V(!0)},ne=e=>{N||!G.current||G.current.contains(e.relatedTarget)||(V(!1),ae())},oe=()=>{W(!1),V(!1)},ie=()=>{_(""),I([]),R(!1),W(!1),null==x||x(void 0,void 0)},ae=()=>{if(!L)if(P){const e=F(P);_(e),W(!1)}else ie()},se=e=>{_(e.target.value),R(!1)},le=e=>{T(e?F(e):""),R(!!e),I([]),A(!0)},de=()=>z?"fail":B?"loading":"success";return e(zv,{children:e(il,{enabled:!f&&!m,isOpen:N,renderElement:()=>t(Fd,{className:o,"data-testid":i,ref:G,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:m,$readOnly:f,$error:p,children:[t(sl,{id:q,"aria-hidden":!0,children:["Type in ",d," or more characters for suggested results."]}),K&&e(sl,{"aria-live":"polite",children:K}),e(au,Object.assign({role:"combobox",ref:X,id:U,type:"text",value:E,onChange:se,placeholder:u,readOnly:f,disabled:m,allowClear:!0,onClear:ie,"aria-expanded":N,"aria-controls":U,"aria-autocomplete":"list","aria-haspopup":"listbox",onBlur:E.length<d?ae:void 0,styleType:"no-border","aria-describedby":dl(S,q)},k))]}),renderDropdown:()=>e(r,{children:e(ay,{listboxId:U,listItems:M,onSelectItem:te,onDismiss:oe,valueExtractor:b,listExtractor:v,itemsLoadState:de(),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line",disableItemFocus:!0,onRetry:()=>J(E),width:D,matchElementWidth:!0})}),onOpen:()=>{!L&&E.length>=d&&V(!0)},onClose:()=>{W(!1),V(!1),ae()},onDismiss:()=>{var e;W(!1),V(!1),ae(),null===(e=X.current)||void 0===e||e.focus()},clickToToggle:!1,offset:8,alignment:w,fitAvailableHeight:!0,customZIndex:$,rootNode:C})})},Qw=k(ru)`
    position: absolute;
    right: 0;
    padding-left: ${ha["spacing-8"]};
    margin-right: 0;
`,Jw=k(Fd)`
    height: 3rem;
`,e$=k.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${la.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${la["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`,t$=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:l,className:d,readOnly:c,error:u,"data-testid":f,id:g,enableSearch:m=!1,searchFunction:p,searchPlaceholder:b,valueExtractor:y,valueToStringFunction:x,listExtractor:w,displayValueExtractor:$,onSelectOption:C,onShowOptions:D,onHideOptions:S,onRetry:k,optionsLoadState:F={from:"success",to:"success"},optionTruncationType:E="middle",renderCustomSelectedOption:_,renderListItem:O,renderCustomCallToAction:T,alignment:M,dropdownZIndex:I,dropdownRootNode:B,dropdownWidth:A,"aria-labelledby":z,"aria-describedby":j}=r,L=ke(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-labelledby","aria-describedby"]);const[R,P]=s(),[H,N]=s(),[W,Y]=s("none"),V="none"!==W,U={from:a(null),to:a(null)},K=a(null),[Z]=s((()=>Je.generate())),q=`${Z}-range-listbox`,G=`${Z}-from-label`,X=`${Z}-to-label`;h((()=>{P(null==n?void 0:n.from),N(null==n?void 0:n.to)}),[n]),h((()=>{var e;V&&"to"===W&&(null===(e=K.current)||void 0===e||e.refocus({index:0}))}),[V,W]);const Q=e=>{e||null==S||S(),e&&(null==D||D())},J=e=>{var t,r;const n="from"===e?R:H;if(!n)return"";if($)return $(n);if(y){const e=y(n);return x?x(e):null!==(r=null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))&&void 0!==r?r:""}return n.toString()},ee=(e,t)=>{var r;if("middle"===E){let n=0;return(null===(r=U[e])||void 0===r?void 0:r.current)&&(n=U[e].current.getBoundingClientRect().width),et.truncateOneLine(t,n,120,8)}return t},te=()=>{switch(W){case"from":return"start";case"to":return"end";case"none":return W}},re=v((()=>{var e;return"none"===W?[]:null!==(e=null==i?void 0:i[W])&&void 0!==e?e:[]}),[W,i]),ne=v((()=>{if("none"===W)return[];const e="from"===W?R:H;return e?[e]:[]}),[W,R,H]),oe=e=>{if(l||c)return;Y("to"!==e||R?e:"from"),Q(!0)},ie=e=>{var t;null===(t=U[e].current)||void 0===t||t.focus()},ae=e=>dl("from"===e?G:X,z),se=e=>t=>{t.stopPropagation(),t.preventDefault(),oe(e)},le=e=>t=>{if(!l&&!c)switch(t.key){case"Enter":case" ":case"ArrowDown":t.preventDefault(),oe(e)}},de=(e,t)=>{if("none"!==W){if("from"===W)return P(e),null==C||C({from:e},t),N(void 0),Y("to"),Q(!0),void ie("to");N(e),null==C||C({to:e},t),Y("none"),Q(!1),ie("to")}},ce=()=>{const e=W;Y("none"),Q(!1),ie("to"===e?"to":"from"),R&&H||(P(void 0),N(void 0))},ue=e=>{e.stopPropagation(),e.preventDefault(),P(void 0),N(void 0),null==C||C({from:void 0,to:void 0},void 0),ie("from")},he=t=>{const r="from"===t?R:H;return r?_?_(r):e(el,{$truncateType:E,children:ee(t,J(t))}):e(tl,{$truncateType:E,children:ee(t,(null==o?void 0:o[t])||"")})},fe=t=>e(e$,{type:"button",role:"combobox","aria-labelledby":ae(t),"aria-describedby":j,"aria-expanded":V&&W===t,"aria-controls":q,"aria-disabled":l,"aria-readonly":c,onClick:se(t),onKeyDown:le(t),ref:U[t],tabIndex:0,children:he(t)});return e(qs,Object.assign({id:g},L,{children:e(zv,{children:e(il,{enabled:!c&&!l,isOpen:V,renderElement:()=>t(Jw,{className:d,"data-testid":f,$disabled:l,$readOnly:c,$error:u,$focused:V,children:[e(sl,{id:G,children:(null==o?void 0:o.from)||"Select From"}),e(sl,{id:X,children:(null==o?void 0:o.to)||"Select To"}),t(Ud,{currentActive:te(),error:u,children:[fe("from"),fe("to")]}),!V&&R&&H&&!c&&!l&&e(Qw,{onClick:ue,type:"button","aria-label":"Clear",children:e(nu,{"aria-hidden":!0})})]}),renderDropdown:()=>e(ay,{ref:K,"data-testid":`${f}-dropdown`,listboxId:q,ariaLabel:"from"===W?`Selecting for: ${null==o?void 0:o.from}`:"to"===W?`Selecting for: ${null==o?void 0:o.to}`:void 0,listItems:re,onSelectItem:de,onDismiss:ce,valueExtractor:y,listExtractor:w,selectedItems:ne,itemsLoadState:F[W],itemTruncationType:E,onRetry:k,width:A,matchElementWidth:!A,enableSearch:m,searchFunction:p,searchPlaceholder:b,renderListItem:O,renderCustomCallToAction:T}),onOpen:()=>{l||c||"none"===W&&(Y("from"),Q(!0))},onClose:()=>{Y("none"),Q(!1),R&&H||(P(void 0),N(void 0))},onDismiss:ce,clickToToggle:!1,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:I,rootNode:B})})}))},r$=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,enableSearch:m=!1,searchFunction:p,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,onShowOptions:C,onHideOptions:D,onRetry:S,optionsLoadState:k="success",optionTruncationType:F="end",renderCustomSelectedOption:E,renderListItem:_,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:M,renderCustomCallToAction:I,onBlur:B,variant:A="default",readOnly:z,alignment:j,dropdownZIndex:L,dropdownRootNode:R,dropdownWidth:P})=>{const[H,N]=s(t),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>Je.generate())),Z=a(null),q=a(null),G=a(null);h((()=>{N(t)}),[t]);const X=(e,t)=>{var r;null===(r=q.current)||void 0===r||r.focus(),N(e),Y(!1),ne(!1),null==$||$(e,t)},Q=()=>{W&&(Y(!1),ne(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&Z.current&&!Z.current.contains(e.relatedTarget)&&(U(!1),null==B||B())},te=()=>{var e;if(!H)return"";if(w)return w(H);if(v){const t=v(H);return y?y(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return H.toString()},re=e=>{if("middle"===F){let t=0;return G&&G.current&&(t=G.current.getBoundingClientRect().width),et.truncateOneLine(e,t,120,8)}return e},ne=e=>{e?null==C||C():null==D||D()};return e(zv,{children:e(il,{enabled:!z&&!o,isOpen:W,renderElement:()=>e(kd,{className:l,"data-testid":d,id:c,ref:Z,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:z,$error:i,children:e(dy,{ref:q,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:z,variant:A,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,children:e(Js,{ref:G,$disabled:o,children:H?E?E(H):e(el,{$truncateType:F,$variant:A,children:re(te())}):e(tl,{$truncateType:F,$variant:A,children:r})})})}),renderDropdown:()=>e(ay,{listboxId:K,listItems:n,onSelectItem:X,onDismiss:Q,valueExtractor:v,listExtractor:x,enableSearch:m,searchPlaceholder:b,searchFunction:p,selectedItems:H?[H]:[],onRetry:S,itemsLoadState:k,itemTruncationType:F,renderListItem:_,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:M,renderCustomCallToAction:I,variant:A,width:P,matchElementWidth:!0}),onOpen:()=>{Y(!0),ne(!0),U(!0)},onClose:e=>{Y(!1),ne(!1),"click"!==e&&(U(!1),null==B||B())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),Y(!1),ne(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:L,rootNode:R})})},n$=k.div`
    overflow: hidden;
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    background: ${la.bg};
    padding: ${ha["spacing-16"]};
    min-width: 23rem;

    ${pa.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${ma["sm-margin"]}px * 2);
    }

    ${pa.MaxWidth.xs} {
        width: calc(100vw - ${ma["xs-margin"]}px * 2);
    }

    ${pa.MaxWidth.xxs} {
        width: calc(100vw - ${ma["xxs-margin"]}px * 2);
    }
`,o$=k.div`
    display: flex;
    align-items: baseline;
`,i$=k.div`
    margin: 0 0.5rem;
    color: ${la.text};
`,a$=k(k.div`
    ${e=>"small"===e.$variant?da["body-md-regular"]:da["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${_a(1)}
                `}}
    overflow: hidden;
`)`
    color: ${la["text-subtler"]};
`,s$=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:l,error:d,histogramSlider:c,id:u,"aria-labelledby":f,"aria-describedby":g,"aria-invalid":m,onBlur:p,onChange:b,onChangeEnd:v,optionTruncationType:y="end",placeholder:x="Select",rangeLabelPrefix:w,rangeLabelSuffix:$,readOnly:C,renderRangeLabel:D,value:S,dropdownRootNode:k}=r,F=ke(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","aria-labelledby","aria-describedby","aria-invalid","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:E,bins:_=[],renderEmptyView:O,ariaLabels:T}=c,M=_.map((e=>e.minValue)),I=Math.min(...M),[B,A]=s(q()),[z,j]=s(!1),[L,R]=s(!1),[P]=s((()=>Je.generate())),H=a(null),N=a(null),W=a(null),Y=F["data-testid"]||"select-histogram";h((()=>{S!==B&&A(q())}),[S]);const V=e=>{A(e),null==b||b(e)},U=e=>{A(e),null==v||v(e)},K=()=>{L||z||R(!0)},Z=e=>{L&&!z&&H.current&&!H.current.contains(e.relatedTarget)&&(R(!1),null==p||p())};function q(){return null!=S?S:[I,I+E]}const G=e=>D?D(e):t(za.BodyBL,{children:[w,e,$]});return e(zv,{children:e(il,{enabled:!C&&!i,isOpen:z,renderElement:()=>e(kd,{className:o,"data-testid":Y,id:u,ref:H,tabIndex:-1,onFocus:K,onBlur:Z,$focused:L,$disabled:i,$readOnly:C,$error:d,children:e(dy,{ref:N,disabled:i,expanded:z,listboxId:P,popupRole:"dialog",readOnly:C,variant:"default","aria-labelledby":f,"aria-describedby":g,"aria-invalid":m,children:e(Js,{ref:W,$disabled:i,children:M&&0!==M.length?t(o$,{children:[G(B[0]),e(i$,{children:"-"}),G(B[1])]}):e(a$,{$truncateType:y,$variant:"default",children:x})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(n$,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(eu,{interval:E,value:B,bins:_,onChange:V,onChangeEnd:U,showRangeLabels:!1,renderEmptyView:O,ariaLabels:T})})),onOpen:()=>{j(!0)},onClose:()=>{j(!1)},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:k})})},l$=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=ke(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,d]=s(c());h((()=>{r!==l[0]&&d(c())}),[r]);function c(){return null!=r?[r]:[0]}return e(Zc,Object.assign({},a,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;d([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;d([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},d$=k.p`
    text-align: right;
    ${da["body-sm-semibold"]}
    color: ${la["text-subtler"]};
`,c$=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,l]=s("");h((()=>{l(d(`${t||""}`))}),[t,n]);const d=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(d$,{"data-testid":"counter-label",children:a})})},u$=k.div`
    display: flex;
    flex-direction: column;
`,h$=k.textarea`
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
    background: ${la.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${ha["spacing-12"]} ${ha["spacing-16"]};
    width: 100%;

    ${da["body-baseline-regular"]}
    color: ${la.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${ua["width-020"]} ${ua.solid}
            ${la["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${la["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${la["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${fa.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;
                padding: ${ha["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${la["border-focus"]};
                }
            `:e.disabled?F`
                background: ${la["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${la["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${la["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${la["border-error-focus"]};
                }
            `:void 0}
`,f$=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:l,transformValue:d,onChange:c,maxLength:u}=t,f=ke(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[g,m]=s(n);h((()=>{m(n)}),[n]);return e(h$,Object.assign({ref:r,disabled:o,value:l?l+(null!=g?g:""):g,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=d?d(r):r;if(m(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=d?d(null!=t?t:""):t;m(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:a,maxLength:l&&u?l.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:l,transformValue:d,prefix:c,maxLength:u,renderCustomCounter:f}=r,g=ke(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[m,p]=s(o);h((()=>{p(o)}),[o]);return t(u$,{children:[e(f$,Object.assign({ref:n,disabled:i,value:m,rows:a||5,onChange:e=>{const t=e.target.value;p(t),l&&l(e)},prefix:c,transformValue:d,maxLength:u},g)),u&&e(c$,{value:m,maxLength:u,renderCustomCounter:f})]})}));const g$=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ha["spacing-4"]};
`,m$=k.div`
    display: flex;
    flex: 1;
    margin-right: ${ha["spacing-12"]};
    gap: ${ha["spacing-4"]};
`,p$=k(Ts)`
    margin-top: 0;
`,b$=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:l,id:d="form-textarea","data-error-testid":c,"data-testid":u,onChange:f,layoutType:g,mobileCols:m,tabletCols:p,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:D,transformValue:S,prefix:k=""}=n,F=ke(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[E,_]=s(a);h((()=>{_(a)}),[a]);return t(Ks,{id:d,label:i,disabled:F.disabled,layoutType:g,mobileCols:m,tabletCols:p,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:D,children:[e(f$,Object.assign({id:`${d}-base`,"data-testid":u||d,value:E,error:!!l,onChange:e=>{const t=e.target.value;_(t),f&&f(e)},ref:o,prefix:k,transformValue:S},F)),l||F.maxLength?t(g$,{children:[l&&t(m$,{children:[e(_s,{"aria-hidden":!0}),e(p$,{"data-testid":c||(d?`${d}-error-message`:"error-message"),children:l})]}),F.maxLength&&e(c$,{value:E,maxLength:F.maxLength,renderCustomCounter:F.renderCustomCounter})]}):e(r,{})]})})),v$=k.div`
    position: relative;
`,y$=k(Fd)`
    height: 3rem;
    gap: ${ha["spacing-8"]};
`,x$=k(Ed)`
    display: block;
    width: 100%;
    flex: 1;
`;var w$,$$;!function(e){e.AM="AM",e.PM="PM"}(w$||(w$={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,d=0===l?s:r?s+(t-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Te(e,n),i=Te(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:w$.AM};if(!t)return r;try{if("24hr"===e){const n=k$(t,e);r.minute=et.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=w$.AM,r.hour=0===o?"12":et.padValue(o.toString())):(r.period=w$.PM,r.hour=12===o?o.toString():et.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=k$(t,e);r.hour=et.padValue(n),r.minute=et.padValue(o),r.period="am"===i.toLowerCase()?w$.AM:w$.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?et.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return et.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?et.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?et.padValue(n.toString()):13===n?et.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===w$.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return et.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=k$(e,t),i=et.padValue(r);let a=`${i}:${et.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),F$(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=F$(e,n,t);i.push(r)}else{const t=F$(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),F$(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return F$(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n},e.calculateScrollPosition=t=>{const{scrollTime:r,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=t;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(r))return console.warn(`Invalid scrollTime format: "${r}". Expected format: HH:mm.`),null;const t=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(r,i):r,[l,d]=C$(t);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${r}".`),null;const c=60*l+d,[u,h]=C$(n),f=60*u+h,[g,m]=C$(o);(c<f||c>60*g+m)&&console.warn(`scrollTime "${r}" is outside the range (${n} - ${o}).`);return(c-f)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${r}".`,e),null}}}($$||($$={}));const C$=e=>e.split(":").map(Number),D$=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},S$=e=>{const t=parseInt(e);return t>=0&&t<=59},k$=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!D$(r[0],t)||!S$(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!D$(r[0],t)||!S$(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},F$=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,E$=k.div`
    padding: ${ha["spacing-8"]} ${ha["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=la["bg-error"](e),r=la["border-error"](e);break;case"success":t=la["bg-success"](e),r=la["border-success"](e);break;case"warning":default:t=la["bg-warning"](e),r=la["border-warning"](e);break;case"info":t=la["bg-info"](e),r=la["border-info"](e);break;case"description":t=la["bg-strong"](e),r=la["border-strong"](e)}return F`
            background: ${t};
            border-left: ${ua["width-020"]} ${ua.solid}
                ${r};
        `}}
`,_$=k.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ha["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=la["icon-error"](e);break;case"success":t=la["icon-success"](e);break;case"warning":default:t=la["icon-warning"](e);break;case"info":t=la["icon-info"](e);break;case"description":t=la["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,O$=k(za.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${da["body-sm-semibold"]}
                margin-top: ${ha["spacing-4"]};
            `:F`
                ${da["body-md-semibold"]}
                margin-top: ${ha["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ha["spacing-4"]};
    }
`,T$=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,M$=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${ha["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,I$=k.div`
    color: ${la.text};

    ${e=>"small"===e.$sizeType?Wa({textSize:"body-sm"}):Wa({textSize:"body-md"})}
`,B$=k.button`
    ${e=>"small"===e.$sizeType?F`
                ${da["body-sm-semibold"]}
            `:F`
                ${da["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ha["spacing-4"]};
    margin-top: ${ha["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${la["text-primary"]};
`,A$=k(de)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ca["duration-350"]} ${ca["ease-standard"]};
`,z$=k.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${la["icon-selected-disabled"]};
                `:F`
                    color: ${la["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${la["icon-selected"]};
            `:F`
            color: ${la["icon-subtle"]};
        `};
`,j$=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&da[`${e.$size}-regular`]}
    font-weight: ${da.Spec["weight-regular"]};
    color: ${la.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,L$=k.ol`
    ${j$}

    margin-left: 3em;

    ${pa.MaxWidth.lg} {
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
`,R$=k.ul`
    ${j$}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&F`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,P$=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=ke(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return e(R$,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:t(r,{children:[e("div",{"aria-hidden":!0,children:a}),e("div",{children:n.props.children})]})}):n)):l}))};P$.displayName="TextList.Ul";const H$=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=ke(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(L$,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};H$.displayName="TextList.Ol";const N$=P$,W$=k.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${fa.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${la.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${la["focus-ring"]};
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
                            border-color: ${la["border-error"]};
                        `:F`
                            border-color: ${la["border-error"]};

                            &:has(${q$}:hover) {
                                @media (pointer: fine) {
                                    background: ${la["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${la["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${la["bg-selected"]};

                        &:has(${q$}:hover) {
                            @media (pointer: fine) {
                                background: ${la["bg-selected-hover"]};

                                & ${U$} {
                                    color: ${la["text-selected-hover"]};
                                }

                                & ${oC} {
                                    color: ${la["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${q$}:hover) {
                        @media (pointer: fine) {
                            background: ${la["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${la["border-error"]};
                        `:F`
                            border-color: ${la["border-error"]};

                            &:has(${q$}:hover) {
                                @media (pointer: fine) {
                                    background: ${la["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${la["border-selected-disabled"]};
                            background: ${la["bg-selected-disabled"]};
                        `:F`
                            border-color: ${la["border-disabled"]};
                            background: ${la["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${la["border-selected"]};
                        background: ${la["bg-selected"]};

                        &:has(${q$}:hover) {
                            @media (pointer: fine) {
                                background: ${la["bg-selected-hover"]};

                                & ${U$} {
                                    color: ${la["text-selected-hover"]};
                                }

                                & ${oC} {
                                    color: ${la["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border-color: ${la.border};

                    &:has(${q$}:hover) {
                        @media (pointer: fine) {
                            background: ${la["bg-hover-subtle"]};
                        }
                    }
                `}
`,Y$=k.input`
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
`,V$=k.div`
    display: flex;
`,U$=k.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${la["text-selected-disabled"]};
                `:F`
                    color: ${la["text-disabled"]};
                `:e.$selected?F`
                color: ${la["text-selected"]};
            `:F`
            color: ${la.text};
        `}
`,K$=k.label`
    ${e=>e.$selected?da["body-baseline-semibold"]:da["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${pa.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${pa.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Z$=k.div`
    ${da["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${da["body-md-semibold"]}
    }
`,q$=k.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,G$=k.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,X$=k.button`
    color: ${e=>e.$disabled?la["text-disabled"]:la["text-error"]};
    white-space: nowrap;
    ${da["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Q$=k.button`
    color: ${e=>e.disabled?la["text-disabled"]:la["text-primary"]};
    ${da["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${la.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,J$=k.div`
    width: 100%;
    color: ${e=>e.$disabled?la["text-disabled"]:la["text-error"]};
    border: none;
    background: ${la.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,eC=k((r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:f,role:m}=r,p=ke(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=s(!1),[y,x]=s(!1),{height:w,ref:$}=qt(),[C]=s((()=>Je.generate())),D=g((()=>{v(!f),x(k())}),[f,w]),k=()=>!(!w||!f)&&w>f;h((()=>{D()}),[f,w,D]);return t(E$,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":p["data-testid"],role:m,children:[c&&e(_$,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return e(Ce,{"aria-hidden":!0});case"warning":return e($e,{"aria-hidden":!0});case"error":return e(te,{"aria-hidden":!0});case"info":case"description":return e(S,{"aria-hidden":!0});default:return null}})()}),t(T$,{children:[y&&t(B$,{$sizeType:d,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(A$,{$expanded:b})]}),t(M$,{id:C,$maxCollapsedHeight:k()?f:void 0,$showMore:b,$hasActionLink:!!a,inert:ll(!!f&&!b),children:[e(I$,{ref:$,$type:n,$sizeType:d,children:i}),a?t(O$,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||e(we,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,tC=k.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${la.bg};
    ${Wa({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${la["text-disabled"]};
            `:e.$selected?F`
                color: ${la["text-selected"]};
            `:F`
                color: ${la.text};
            `}
`,rC=k(za.BodyMD)`
    color: ${e=>e.$disabled?la["text-disabled"]:la["text-error"]};
`,nC=k(N$)`
    color: ${e=>e.$disabled?la["text-disabled"]:la["text-error"]};
`,oC=k((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?he:ce,{});break;case"radio":i=e(r?Se:De,{});break;case"tick":i=e(fe,{});break;case"cross":i=e(M,{});break;default:i=null}return e(z$,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${la["icon-selected-disabled"]};
                `:F`
                    color: ${la["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${la["icon-selected"]};
            `:F`
            color: ${la["icon-subtle"]};
        `};
`,iC=k.div`
    overflow: hidden;

    ${pa.MaxWidth.xxs} {
        max-width: 100%;
    }
`,aC=k.div`
    position: relative;
    width: 100%;
    padding: ${ha["spacing-8"]} ${ha["spacing-20"]}
        ${ha["spacing-24"]} ${ha["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${la.bg};
    border: ${ua["width-010"]} ${ua.solid} ${la.border};
    border-radius: ${fa.sm};
`,sC=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${pa.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,lC=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ha["spacing-16"]};
    gap: ${ha["spacing-8"]};

    ${pa.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${ha["spacing-32"]};
    }
`,dC=k.div`
    display: flex;
    align-items: center;
    margin-right: ${ha["spacing-32"]};

    ${pa.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,cC=k.div`
    display: flex;
    gap: ${ha["spacing-8"]};

    ${pa.MaxWidth.lg} {
        flex-direction: column;
    }

    ${pa.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,uC=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${pa.MaxWidth.xxs} {
        width: 6rem;
    }
`,hC=k(Ra)`
    width: 5rem;
    padding: ${ha["spacing-16"]} 0;
    color: ${la.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${la["icon-hover"]};
    }
`,fC=k(za.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,gC=k(kd)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${pa.MaxWidth.xxs} {
        width: 100%;
    }
`,mC=k(Ed)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,pC=k((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:f,disabled:g,error:m,name:p,id:b,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:D,useContentWidth:S,"aria-describedby":k}=n,F=ke(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:E=!0,errors:_,children:O,initialExpanded:T}=x||{},[M,I]=s(l),[B,A]=s(!!T),z=v((()=>{const e=Array.isArray(_)&&(null==_?void 0:_.length)>0,t=!Array.isArray(_)&&!!_;return e||t}),[_]),[j]=s(Je.generate()),L=b?`${b}`:`tg-${j}`,R=a(null);h((()=>{I(l)}),[l]),h((()=>{M&&A(null==T||T)}),[M]);const P=e=>{if(!g){if(D)return void D(e);switch(o){case"checkbox":I((e=>!e));break;case"radio":case"yes":case"no":M||I(!0)}}},H=()=>{g||A(!B)},N=()=>{g||!$||$()},W=()=>{var e;null===(e=null==R?void 0:R.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(oC,{type:t,active:M,disabled:g,$selected:M,$disabled:g})},U=()=>{if(!f)return null;let t;return t="function"==typeof f?f():f,e(Z$,{"data-id":"toggle-sublabel",id:`${L}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(rC,{weight:"semibold",$disabled:g,children:"Error"}),e(nC,{$disabled:g,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${L}-error-list-item-${r}`,children:e(rC,{weight:"semibold",$disabled:g,children:t})},r)))})]});return t(W$,{$selected:M,$disabled:g,className:y,$styleType:d,$error:m,$indicator:i,$useContentWidth:S,id:b,"data-testid":C,children:[(()=>{const r=["string"==typeof f?`${L}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(q$,{id:`${L}-header-container`,$disabled:g,$error:m,$selected:M,$indicator:i,$styleType:d,children:[e(G$,{$addPadding:w,children:t(V$,{id:`${L}-input-container`,onClick:W,children:[e(Y$,Object.assign({ref:R,name:p,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:P,onClick:Y,checked:M,"aria-describedby":r},F)),i&&V(),t(U$,{$selected:M,$disabled:g,children:[e(K$,{htmlFor:`${L}-input`,"data-testid":"toggle-label",id:`${L}-label`,$maxLines:u,$selected:M,children:c}),f&&U()]})]})}),w&&e(X$,{type:"button",$disabled:g,onClick:N,id:`${L}-remove-button`,children:"Remove"})]})})(),O&&t("div",{children:[(!E||B)&&e(tC,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:g,children:O}),E&&!B&&z&&e(J$,{$disabled:g,onClick:H,id:`${L}-error-alert`,children:e(eC,{type:g?"description":"error",className:y,showIcon:!0,children:Array.isArray(_)?K(_):_})}),E&&t(Q$,{$paddingTopRequired:!B&&!z,disabled:g,onClick:H,"data-testid":B?"collapse-button":"expand-button",children:[B?"Show less":"Show more",e(B?xe:re,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,bC=k(Cl.Small)`
    width: 7rem;

    ${pa.MaxWidth.sm} {
        flex: 1;
    }

    ${pa.MaxWidth.xxs} {
        width: 100%;
    }
`;var vC,yC,xC;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(vC||(vC={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(yC||(yC={})),function(e){e.AM="am",e.PM="pm"}(xC||(xC={}));const wC=({id:r,value:n,show:o,format:i,onChange:l,onCancel:d})=>{const c=$$.getTimeValues(i,n),[u,f]=s(c.hour),[m,p]=s(c.minute),[b,v]=s(c.period),y=a(null),x=a(null);h((()=>{if(o&&y.current&&y.current.focus({preventScroll:!0}),o){const{hour:e,minute:t,period:r}=$$.getTimeValues(i,n);f(e),p(t),v(r)}}),[o,n,i]),h((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=g((e=>{switch(e.currentTarget.name){case vC.MINUTE_UP:p($$.updateMinutes(m,"add"));break;case vC.MINUTE_DOWN:p($$.updateMinutes(m,"minus"));break;case vC.HOUR_UP:f($$.updateHours(u,"add"));break;case vC.HOUR_DOWN:f($$.updateHours(u,"minus"))}}),[u,m]),C=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case yC.HOUR:t.length<=2&&f(t);break;case yC.MINUTE:t.length<=2&&p(t)}},S=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case yC.HOUR:{const r=t>23||t<0?c.hour:$$.convertHourTo12HourFormat(e.target.value);f(r);break}case yC.MINUTE:{const r=t>59||t<0?c.minute:e.target.value;p(et.padValue(r));break}}},k=e=>{switch(e.target.name){case xC.AM:v(w$.AM);break;case xC.PM:v(w$.PM)}},F=e=>r?`${r}-${e}`:e;return e(iC,{children:t(aC,{"data-testid":F("timepicker-dropdown"),inert:ll(!o),children:[t(sC,{children:[t(dC,{children:[t(uC,{children:[e(hC,{"aria-label":"increase hour",name:vC.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":F("hour-increment-button"),children:e(xe,{})}),e(gC,{children:e(mC,{"aria-label":"hour",type:"number",name:yC.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:u,onFocus:C,onChange:D,onBlur:S,min:1,max:12,placeholder:"HH","data-testid":F("hour-input")})}),e(hC,{"aria-label":"decrease hour",name:vC.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":F("hour-decrement-button"),children:e(re,{})})]}),e(fC,{children:":"}),t(uC,{children:[e(hC,{"aria-label":"increase minute",name:vC.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":F("minute-increment-button"),children:e(xe,{})}),e(gC,{children:e(mC,{"aria-label":"minute",type:"number",name:yC.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:m,onChange:D,onBlur:S,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":F("minute-input")})}),e(hC,{"aria-label":"decrease minute",name:vC.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":F("minute-decrement-button"),children:e(re,{})})]})]}),t(cC,{children:[e(pC,{checked:b===w$.AM,name:xC.AM,type:"radio",onChange:k,"data-testid":F("am-toggle"),"aria-label":"AM",children:"AM"}),e(pC,{checked:b===w$.PM,name:xC.PM,type:"radio",onChange:k,"data-testid":F("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(lC,{children:[e(bC,{type:"button",styleType:"secondary",onClick:d,"data-testid":F("cancel-button"),children:"Cancel"}),e(bC,{type:"button",onClick:()=>{let e;e="24hr"===i?$$.convertTo24HourFormat({hour:u,minute:m,period:b}):`${u}:${m}${b}`,l(e)},disabled:""===u||""===m,"data-testid":F("confirm-button"),children:"Done"})]})]})})},$C=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:f,onBlur:g,alignment:m="left",dropdownZIndex:p,dropdownRootNode:b,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x}=r,w=ke(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=s(!1),[D,S]=s("none"),[k,F]=s(""),[E,_]=s(""),[O,T]=s(!1),M=!c&&!o,I=a(null),[B]=s((()=>Je.generate())),A=`${B}-start-label`,z=`${B}-end-label`,j=e=>dl(v,"start"===e?A:z),L=()=>dl(y);h((()=>{l&&(F(l.start),_(l.end))}),[l]);const R=e=>{M&&(O||$||null==f||f(),T(!0),S(e),C(!0))},P=e=>{var t,r;const n=!!(null==e?void 0:e.keepFocus),o=null!==(t=null==e?void 0:e.triggerBlur)&&void 0!==t?t:!n;C(!1),S("none"),T(n),o&&(null==g||g()),n&&(null===(r=I.current)||void 0===r||r.focus())},H=e=>{var t,r,n;if(!O||$)return;const o=e.relatedTarget,i=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=I.current)||void 0===n?void 0:n.contains(o)))||i||(T(!1),null==g||g())},N=e=>{F(e),null==u||u({start:e,end:E}),S("end"),C(!0),T(!0)},W=e=>{_(e),null==u||u({start:k,end:e}),""===k?(S("start"),C(!0),T(!0)):P({keepFocus:!0})};return e(v$,Object.assign({id:n},w,{children:e(il,{enabled:M,isOpen:$,renderElement:()=>e(y$,{ref:I,tabIndex:-1,onBlur:H,"data-testid":"timepicker-container",role:"group",$disabled:o,$error:i,$readOnly:c,$focused:O,children:t(Ud,{error:i,currentActive:D,children:[e(x$,{onFocus:()=>R("start"),onClick:()=>R("start"),readOnly:!0,placeholder:"From",value:$$.formatDisplayValue(k,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from",role:"combobox","aria-expanded":!o&&!c&&$,"aria-invalid":i||x,"aria-disabled":o,"aria-readonly":c,"aria-labelledby":j("start"),"aria-describedby":L()}),e(x$,{onClick:()=>R("end"),readOnly:!0,placeholder:"To",value:$$.formatDisplayValue(E,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to",role:"combobox","aria-expanded":!o&&!c&&$,"aria-invalid":i||x||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0,"aria-labelledby":j("end"),"aria-describedby":L()})]})}),renderDropdown:({styles:r,setFloatingRef:o,getFloatingProps:i})=>$?t("div",Object.assign({ref:o,style:r,role:"dialog","aria-label":"start"===D?"Selecting for: Start time":"end"===D?"Selecting for: End time":void 0},i(),{children:["start"===D&&e(wC,{id:n?`${n}-start`:void 0,show:!0,value:k,format:d,onCancel:()=>P({keepFocus:!0}),onChange:N}),"end"===D&&e(wC,{id:n?`${n}-end`:void 0,show:!0,value:E,format:d,onCancel:()=>P({keepFocus:!1}),onChange:W})]}),D):null,onClose:()=>P({keepFocus:!1}),onDismiss:()=>P({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:m,customZIndex:p,rootNode:b})}))},CC=k(Fd)`
    height: 3rem;
    gap: ${ha["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${ha["spacing-20"]});
`,DC=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:f,onBlur:m,alignment:p="left",dropdownZIndex:b,startLimit:y,endLimit:x,interval:w=15,dropdownRootNode:$,"aria-labelledby":C,"aria-describedby":D,"aria-invalid":S}=r,k=ke(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[F]=s((()=>Je.generate())),[E,_]=s(null),[O,T]=s(!1),[M,I]=s(""),[B,A]=s(""),[z,j]=s(""),[L,R]=s(""),[P,H]=s(""),N=a(null),W=a(null),Y=a(null),V=`${F}-listbox`,U=`${F}-start-label`,K=`${F}-end-label`,Z=`${F}-error-message`,q=v((()=>$$.generateTimings(w,d,y,x)),[w,d,y,x]),G=v((()=>{if(""===L)return q;const e=$$.findClosestFlooredTime(L,q);return e?q.slice(q.indexOf(e)):[]}),[q,L]),X=g((e=>$$.parseInput(e,d)),[d]);h((()=>{var e,t;if(l){const r=null!==(e=X(l.start))&&void 0!==e?e:"",n=null!==(t=X(l.end))&&void 0!==t?t:"";A(r),j(n),R(r),H(n)}}),[l,X]),h((()=>{if(i)return void T(!1);const e=X(B),t=X(z);if(void 0===e)I("Invalid start time");else if(void 0===t)I("Invalid end time");else{if(!(""!==e&&""!==t&&$$.to24Hour(t)<$$.to24Hour(e)))return I(""),void(document.activeElement!==W.current&&document.activeElement!==Y.current||T(!0));I("End time must be after start time")}T(!1)}),[B,z,X,i]);const Q=()=>"start"===E?"Selecting for: Start time":"end"===E?"Selecting for: End time":void 0,J=e=>dl(C,"start"===e?U:K),ee=()=>dl(D,!i&&M?Z:void 0),te=e=>{o||c||(E||O||null==f||f(),_(e),T(!0))},re=e=>{var t;o||c||(_(e),T(!0),null===(t=("start"===e?W:Y).current)||void 0===t||t.select())};function ne(e){var t;switch(e.code){case"Enter":"start"===E?oe(B):"end"===E&&(O&&ie(z),null===(t=Y.current)||void 0===t||t.blur());break;case"Tab":ae(B,z,{})}}const oe=e=>{ae(e,z,{goToNextInput:!0})},ie=e=>{ae(B,e,{triggerOnBlur:!0})},ae=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=X(e))&&void 0!==o?o:L,l=null!==(i=X(t))&&void 0!==i?i:P;A(s),j(l);s===L&&l===P||null==u||u({start:s,end:l}),r&&void 0!==X(e)&&(_("end"),null===(a=Y.current)||void 0===a||a.select()),n&&(_(null),T(!1),null==m||m()),R(s),H(l)},se=e=>{e.stopPropagation(),A(""),j(""),R(""),H("");null==u||u({start:"",end:""}),_(null),T(!1)},le=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=N.current&&N.current.contains(n);E&&!O&&!i&&!o&&ae(B,z,{triggerOnBlur:!0})},de=()=>{if(!c&&!o&&((null==B?void 0:B.length)>0||(null==z?void 0:z.length)>0))return e(Qw,{onClick:se,type:"button","aria-label":"Clear",children:e(nu,{"aria-hidden":!0})})};return t(v$,Object.assign({id:n},k,{children:[e(zv,{children:e(il,{enabled:!c&&!o,isOpen:O,renderElement:()=>t(CC,{ref:N,$disabled:o,$error:i||!!M,$readOnly:c,onBlur:le,role:"group",children:[e(sl,{id:U,children:"Start time"}),e(sl,{id:K,children:"End time"}),t(Ud,{error:i||!!M,currentActive:null===E?"none":E,children:[e(x$,{ref:W,onFocus:()=>te("start"),placeholder:"start"===E?"hh:mm":"From",onChange:e=>A(e.target.value),value:B,readOnly:c,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-start`:"timepicker-selector-start",onClick:()=>re("start"),onKeyDown:ne,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":J("start"),"aria-describedby":ee(),"aria-expanded":O&&"start"===E,"aria-controls":V,"aria-autocomplete":"list","aria-invalid":i||S||!!M,"aria-disabled":o,"aria-readonly":c}),e(x$,{ref:Y,onFocus:()=>te("end"),placeholder:"end"===E?"hh:mm":"To",onChange:e=>j(e.target.value),value:z,readOnly:c,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-end`:"timepicker-selector-end",onClick:()=>re("end"),onKeyDown:ne,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":J("end"),"aria-describedby":ee(),"aria-expanded":O&&"end"===E,"aria-controls":V,"aria-autocomplete":"list","aria-invalid":i||S||!!M||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0})]}),de()]}),renderDropdown:()=>e(ay,"start"===E?{listItems:q,onSelectItem:oe,selectedItems:[B],topScrollItem:$$.findClosestFlooredTime(X(B),q),listboxId:V,ariaLabel:Q(),disableItemFocus:!0,matchElementWidth:!0}:{listItems:G,onSelectItem:ie,selectedItems:[z],topScrollItem:$$.findClosestFlooredTime(X(z),G),listboxId:V,ariaLabel:Q(),disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(_(null),T(!1),null==m||m()):ae(B,z,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===E?W:Y).current)||void 0===e||e.focus(),T(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:b,rootNode:$})}),!i&&M&&t(Os,{children:[e(_s,{"aria-hidden":!0}),e(Ts,{id:Z,tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:M})]})]}))},SC=t=>{var{variant:r="dial"}=t,n=ke(t,["variant"]);return e("combobox"===r?DC:$C,Object.assign({},n))};k.div`
    position: relative;
`;const kC=k(Ed)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,FC=t=>{var{id:r,disabled:n=!1,readOnly:o=!1,error:i,value:l,placeholder:d,format:c="24hr",onChange:u,onFocus:h,onBlur:f,alignment:m,dropdownZIndex:p,dropdownRootNode:b,"aria-labelledby":v,"aria-describedby":y}=t,x=ke(t,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby"]);const[w,$]=s(!1),C=a(null),D=a(null),S=g((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c]),k=()=>{var e;null===(e=D.current)||void 0===e||e.focus({preventScroll:!0})},F=()=>{n||o||$(!0)},E=()=>{$(!1),k()},_=e=>{null==u||u(e),$(!1),k()},O=()=>{null==h||h()},T=e=>{var t;if(w)return;const r=e.relatedTarget;r&&(null===(t=C.current)||void 0===t?void 0:t.contains(r))||null==f||f()},M=e=>{n||o||"Enter"!==e.key&&" "!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),F())};return e(il,{enabled:!o&&!n,isOpen:w,renderElement:()=>e(Fd,Object.assign({ref:C,role:"group",$readOnly:o,$disabled:n,$focused:w,$error:i},x,{children:e(kC,{ref:D,readOnly:!0,placeholder:d||S(),value:$$.formatDisplayValue(l,c),role:"combobox","aria-invalid":i||void 0,"aria-disabled":n||void 0,"aria-readonly":o||void 0,"aria-labelledby":v,"aria-describedby":y,"aria-expanded":!n&&!o&&w,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector",onFocus:O,onClick:F,onKeyDown:M,onBlur:T})})),renderDropdown:({styles:t,setFloatingRef:n,getFloatingProps:o})=>e("div",Object.assign({ref:n,style:t,role:"dialog","aria-label":"Time picker"},o(),{children:e(wC,{id:r,show:w,value:l,format:c,onCancel:E,onChange:_})})),onOpen:F,onClose:()=>{$(!1),null==f||f()},onDismiss:E,offset:8,alignment:m,customZIndex:p,rootNode:b})},EC=k(Ix)`
    margin-right: 0.5rem;
`,_C=k(au)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,OC=k(_C)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,TC=k(za.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${la["text-disabled"]};
            `}}
`,MC=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,IC=k(za.BodyBL)``,BC=n=>{var{disabled:o,error:i,value:l,onChange:d,onBlur:c,onChangeRaw:u,onBlurRaw:f,readOnly:g,placeholder:m="00-8888",autoComplete:p,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x}=n,w=ke(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=s(""),[D,S]=s(""),[k,F]=s("none"),[E]=s((()=>Je.generate())),_=`${E}-floor-label`,O=`${E}-unit-label`,T=`${E}-live-message`,M=a(null),I=a(null),B=a(null),A=a($),z=a(D),j=a(k),L=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),R=Jt({ref:I,formatter:L}),P=Jt({ref:B,formatter:L}),H=v((()=>{let e="";const t=te("Hash",$),r=te("Dash",D);switch(k){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[k,$,D]),N=e=>{A.current=e,C(e)},W=e=>{z.current=e,S(e)},Y=e=>{j.current=e,F(e)};h((()=>{"floor"===k&&3===$.length&&B.current&&B.current.focus()}),[$]),h((()=>{G(l)}),[l]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=q(r);"floor"===t?(N(n),n!==$&&X(n,t)):"unit"===t&&(W(n),n!==D&&X(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=R();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),N(r),X(r,t)}else if("unit"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),X(r,t)}},Z=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===k&&0===D.length&&(null===(t=I.current)||void 0===t||t.focus())},q=e=>/^[0-9]$/.test(e)?et.padValue(e,!0):e.toLocaleUpperCase(),G=e=>{if(e!==AC)if(void 0===e||0===e.length)N(""),W("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];N("floor"===k?e:q(e)),W("unit"===k?r:q(r))}}},X=(e,t)=>{if(!d&&!u)return;const r={floor:A.current,unit:z.current};if(r[t]=e,d){const e=J(r);d(e)}u&&u([r.floor,r.unit])},Q=()=>{if(!c&&!f)return;const e={floor:q(A.current),unit:q(z.current)};if(c){const t=J(e);c(t)}f&&f([e.floor,e.unit])},J=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":AC},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(Fd,Object.assign({},w,{ref:M,onClick:()=>{"none"===k&&I.current&&I.current.focus()},$disabled:o,$error:i,$readOnly:g,tabIndex:-1,onBlur:e=>{M.current&&M.current.contains(e.relatedTarget)||"none"!==j.current&&(Y("none"),Q())},children:[e(EC,{"data-testid":"addon",$disabled:o,$readOnly:g,children:"#"}),g&&l?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(MC,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x,children:[e(IC,{children:n[0]}),e(TC,{children:"-"}),e(IC,{children:n[1]}),e(sl,{children:o})]})})(l):t(r,{children:[e(_C,{name:"floor",maxLength:3,value:$,ref:I,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":dl(b,_),"aria-describedby":dl(y,T),"aria-invalid":x,placeholder:"floor"!==k||g||o?ee(m)[0]:"",autoComplete:p,styleType:"no-border"}),e(sl,{"aria-hidden":!0,id:_,children:"Enter floor number"}),e(TC,{$inactive:0===$.length,children:"-"}),e(OC,{name:"unit",maxLength:5,value:D,ref:B,onFocus:V,onBlur:U,onChange:K,onKeyDown:Z,disabled:o,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":dl(b,O),"aria-describedby":dl(y,T),"aria-invalid":x,placeholder:"unit"!==k||g||o?ee(m)[1]:"",autoComplete:p,styleType:"no-border"}),e(sl,{"aria-hidden":!0,id:O,children:"Enter unit number"}),e(sl,{id:T,"aria-live":"polite",children:H})]})]}))},AC="Invalid unit number",zC={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-input-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Pd,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-range-input-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Xd,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ks,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(Ec,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ks,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(eu,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:su,InputGroup:Ax,MaskedInput:ew,Label:Is,MultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=ke(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${Je.generate()}`)),C=null!=o?o:$;return e(Ks,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(tw,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(iw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(ow,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},Select:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=ke(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${Je.generate()}`)),C=null!=o?o:$;return e(Ks,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(r$,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,histogramSlider:y}=t,x=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);const[w]=s((()=>`form-field-${Je.generate()}`)),$=null!=o?o:w;return e(Ks,{id:$,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(s$,Object.assign({histogramSlider:y,error:!!n,"data-testid":a?`${a}-base`:void 0,id:`${$}-base`},x))})},Slider:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>Je.generate())),w=null!=o?o:`form-slider-${x}`;return e(Ks,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(l$,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0},y))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>Je.generate())),w=null!=o?o:`form-range-slider-${x}`;return e(Ks,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Zc,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0},y))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y}=t,x=ke(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[w]=s((()=>Je.generate())),$=null!=o?o:`form-field-range-select-${w}`;return e(Ks,{id:$,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(t$,Object.assign({id:`${$}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l},x))})},Textarea:b$,Timepicker:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-timepicker-input-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,label:r,errorMessage:n,disabled:y.disabled,"data-error-testid":i,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(FC,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-time-range-picker-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,label:r,errorMessage:n,disabled:y.disabled,"data-error-testid":i,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(SC,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=ke(t,["id","data-error-testid","children"]);return e(Ks,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-unit-number-input-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(BC,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-phone-number-input-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(ww,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=ke(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${Je.generate()}`)),w=null!=o?o:x;return e(Ks,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Xw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},OtpVerification:t=>{var{label:r,id:n,"data-error-testid":o,"data-testid":i,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=ke(t,["label","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[y]=s((()=>`form-otp-verification-${Je.generate()}`)),x=null!=n?n:y;return e(Ks,{id:x,"data-testid":i,label:r,"data-error-testid":o,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(Ww,Object.assign({id:`${x}-base-field`,inputId:`${x}-base`,"data-testid":i?`${i}-base`:void 0},v))})}};export{la as C,zC as F,Sc as S,Fe as _,kc as a};
//# sourceMappingURL=index.71e9a28f.js.map
